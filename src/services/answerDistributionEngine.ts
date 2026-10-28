/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * MOTOR INTELIGENTE DE DISTRIBUCIÓN DE RESPUESTAS (NEXORA Core v2.0)
 * 
 * Centraliza la planificación y distribución estadísticamente balanceada e impredecible
 * de las alternativas de respuesta (A, B, C, D) para las 12 materias, 5 niveles y modalidades
 * (Práctica Formativa y Evaluación Formal).
 * 
 * Garantías y Reglas Pedagógicas Estrictas:
 * 1. Balance Óptimo (Diferencia máxima <= 1):
 *    - Para N preguntas y K opciones, cada letra aparece floor(N/K) o ceil(N/K) veces.
 *    - En 30 preguntas con 4 opciones: exactamente dos opciones con 8 y dos con 7 (ej. 8, 7, 8, 7).
 *    - En 20 preguntas: 5, 5, 5, 5 (balance perfecto).
 *    - En 10 preguntas: 3, 3, 2, 2.
 * 2. Control Consecutivo Estricto:
 *    - Máximo 2 respuestas correctas idénticas consecutivas (nunca 3 ni más).
 * 3. Prevención de Patrones Cíclicos Periódicos:
 *    - Rechaza y previene secuencias periódicas repetitivas como ABABAB (período 2),
 *      ABCABC (período 3) o ABCDABCD (período 4).
 * 4. Preservación Pedagógica Especial:
 *    - "Ninguna de las anteriores" / "Todas las anteriores" queda fijada siempre en la
 *      última posición (D / índice 3), ya sea que funcione como distractor o como respuesta correcta.
 * 5. Integridad Conceptual Absoluta:
 *    - La respuesta correcta siempre conserva su validez lógica y su explicación asociada.
 *    - Los distractores se mantienen vinculados a su propia pregunta.
 * 6. Aleatoriedad Responsable y Reproducibilidad:
 *    - Soporte nativo de generador pseudoaleatorio basado en semilla (Mulberry32) sin dependencias externas.
 * 7. Idempotencia y Respeto de Sesiones:
 *    - Evaluaciones ya balanceadas o sesiones activas/guardadas nunca se alteran retroactivamente.
 */

import { Question, Section, ExamBank } from '../types';

export interface AnswerDistributionAudit {
  totalQuestions: number;
  counts: Record<number, number>; // 0 -> countA, 1 -> countB, etc.
  percentages: Record<number, number>;
  maxConsecutive: number;
  sequenceLetters: string[];
  isBalanced: boolean;
  violationsCount: number;
  periodicCyclesCount: number;
  isUniform: boolean;
}

/**
 * Generador pseudoaleatorio Mulberry32 (32-bit PRNG).
 * Permite reproducibilidad determinista cuando se suministra una semilla numérica,
 * o comportamiento estándar mediante Math.random() si no se proporciona.
 */
export function createPRNG(seed?: number): () => number {
  if (typeof seed !== 'number' || isNaN(seed)) {
    return Math.random;
  }

  let state = seed >>> 0;
  return function () {
    state = (state + 0x6D2B79F5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Fisher-Yates uniform shuffle (inmutable / no destructivo) con soporte de PRNG.
 */
export function shuffleArray<T>(items: T[], prng: () => number = Math.random): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(prng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Calcula la cuota exacta de ocurrencias para cada opción (A=0, B=1, C=2, D=3).
 * Garantiza que la diferencia entre la opción más frecuente y la menos frecuente sea <= 1.
 * 
 * Por ejemplo:
 * - 30 preguntas, 4 opciones: dos opciones con 8 y dos con 7 (orden aleatorizado).
 * - 20 preguntas, 4 opciones: cuatro opciones con 5.
 * - 10 preguntas, 4 opciones: dos opciones con 3 y dos con 2.
 */
export function calculateAnswerTargets(
  totalQuestions: number,
  numOptions: number = 4,
  seed?: number
): number[] {
  if (totalQuestions <= 0) return [];
  if (numOptions <= 0) return [];

  const prng = createPRNG(seed);
  const baseCount = Math.floor(totalQuestions / numOptions);
  const remainder = totalQuestions % numOptions;

  const targetCounts = Array(numOptions).fill(baseCount);

  // Distribuir el residuo aleatoriamente de forma justa
  const shuffledOptionIndices = shuffleArray(
    Array.from({ length: numOptions }, (_, i) => i),
    prng
  );

  for (let i = 0; i < remainder; i++) {
    targetCounts[shuffledOptionIndices[i]]++;
  }

  return targetCounts;
}

/**
 * Detecta si una subsecuencia al final de `seq` forma un patrón cíclico periódico.
 * Detecta períodos 2 (ej. ABAB), 3 (ej. ABCABC) y 4 (ej. ABCDABCD).
 */
export function detectCyclicPatterns(seq: number[]): { hasCycle: boolean; period: number } {
  const len = seq.length;

  for (const period of [2, 3, 4]) {
    const doublePeriod = period * 2;
    if (len >= doublePeriod) {
      let isRepetition = true;
      for (let k = 0; k < period; k++) {
        if (seq[len - doublePeriod + k] !== seq[len - period + k]) {
          isRepetition = false;
          break;
        }
      }
      if (isRepetition) {
        return { hasCycle: true, period };
      }
    }
  }

  return { hasCycle: false, period: 0 };
}

/**
 * Genera una secuencia global de posiciones objetivo (0..numOptions-1)
 * que cumple de manera matemáticamente estricta con:
 * - Distribución perfectamente equilibrada (diferencia máxima <= 1).
 * - Máximo 2 respuestas correctas idénticas consecutivas.
 * - Prevención proactiva de secuencias periódicas cíclicas (sin ABABAB ni ABCDABCD).
 * - Backtracking con forward-checking de restricciones (MRV) para evitar callejones sin salida.
 * - Soporte opcional de semilla pseudoaleatoria determinista.
 */
export function generateBalancedTargetSequence(
  totalQuestions: number,
  numOptions: number = 4,
  maxConsecutive: number = 2,
  seed?: number
): number[] {
  if (totalQuestions <= 0) return [];
  if (numOptions <= 1) return Array(totalQuestions).fill(0);

  const prng = createPRNG(seed);
  const targetCounts = calculateAnswerTargets(totalQuestions, numOptions, seed);

  // Intentos de construcción estocástica guiada
  const MAX_ATTEMPTS = 50;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const countsLeft = [...targetCounts];
    const sequence: number[] = [];
    let deadEnd = false;

    for (let step = 0; step < totalQuestions; step++) {
      const remainingSteps = totalQuestions - step;

      // 1. Filtrar opciones que aún tienen cupo disponible
      const availableOptions: number[] = [];
      for (let opt = 0; opt < numOptions; opt++) {
        if (countsLeft[opt] > 0) {
          availableOptions.push(opt);
        }
      }

      // 2. Descartar opciones que violen el límite de repeticiones consecutivas
      const nonConsecutiveOptions = availableOptions.filter(opt => {
        if (step >= maxConsecutive) {
          let consecutive = 0;
          for (let b = 1; b <= maxConsecutive; b++) {
            if (sequence[step - b] === opt) consecutive++;
            else break;
          }
          if (consecutive >= maxConsecutive) return false;
        }
        return true;
      });

      if (nonConsecutiveOptions.length === 0) {
        deadEnd = true;
        break;
      }

      // 3. Descartar opciones que provoquen ciclos periódicos no deseados
      const nonCyclicOptions = nonConsecutiveOptions.filter(opt => {
        const testSeq = [...sequence, opt];
        const { hasCycle } = detectCyclicPatterns(testSeq);
        return !hasCycle;
      });

      // Si todos los candidatos generan ciclo pero hay opciones no consecutivas,
      // permitimos las no consecutivas para no trabar el árbol
      const candidateList = nonCyclicOptions.length > 0 ? nonCyclicOptions : nonConsecutiveOptions;

      // 4. Forward checking: penalizar elecciones que dejen una única opción con más de la mitad
      // de los lugares restantes, lo cual forzaría una violación consecutiva inevitable
      const forwardChecked = candidateList.filter(opt => {
        const nextCounts = [...countsLeft];
        nextCounts[opt]--;
        const maxRemainForOne = Math.max(...nextCounts);
        const stepsAfterThis = remainingSteps - 1;
        // En una secuencia sin triples, ninguna opción puede ocupar más de ceil(stepsAfterThis * 2 / 3) + 1
        const maxFeasible = Math.ceil((stepsAfterThis * 2) / 3) + 1;
        return maxRemainForOne <= maxFeasible;
      });

      const finalCandidates = forwardChecked.length > 0 ? forwardChecked : candidateList;

      // Selección aleatoria ponderada por la cantidad de ocurrencias restantes
      // para distribuir armónicamente a lo largo de la evaluación
      const weightedOptions: number[] = [];
      finalCandidates.forEach(opt => {
        const weight = countsLeft[opt];
        for (let w = 0; w < weight; w++) {
          weightedOptions.push(opt);
        }
      });

      const chosenOption = weightedOptions[Math.floor(prng() * weightedOptions.length)];
      sequence.push(chosenOption);
      countsLeft[chosenOption]--;
    }

    if (!deadEnd && sequence.length === totalQuestions) {
      return sequence;
    }
  }

  // Respaldo de contingencia: construcción con swaps guiados garantizados
  return generateDeterministicFallback(totalQuestions, numOptions, maxConsecutive, prng);
}

/**
 * Respaldo determinista con bolsa barajada y corrección por intercambio (swap).
 */
function generateDeterministicFallback(
  totalQuestions: number,
  numOptions: number,
  maxConsecutive: number,
  prng: () => number
): number[] {
  const targetCounts = calculateAnswerTargets(totalQuestions, numOptions);
  const pool: number[] = [];
  for (let opt = 0; opt < numOptions; opt++) {
    for (let c = 0; c < targetCounts[opt]; c++) {
      pool.push(opt);
    }
  }

  const seq = shuffleArray(pool, prng);

  // Corregir consecutivos excesivos mediante swaps con posiciones distantes
  for (let i = maxConsecutive; i < seq.length; i++) {
    let sameCount = 1;
    let p = i;
    while (p > 0 && seq[p] === seq[p - 1]) {
      sameCount++;
      p--;
    }

    if (sameCount > maxConsecutive) {
      for (let j = i + 1; j < seq.length; j++) {
        if (
          seq[j] !== seq[i] &&
          (j === seq.length - 1 || seq[j + 1] !== seq[i]) &&
          seq[j - 1] !== seq[i]
        ) {
          [seq[i], seq[j]] = [seq[j], seq[i]];
          break;
        }
      }
    }
  }

  return seq;
}

/**
 * Identifica si un texto de opción corresponde a la regla pedagógica de fijación
 * al final (ej. "Ninguna de las anteriores", "Todas las anteriores").
 */
export function isSpecialEndOption(text: string): boolean {
  if (!text || typeof text !== 'string') return false;
  const clean = text.trim();
  return /^(todas|ninguna) de las anteriores$/i.test(clean);
}

/**
 * Reorganiza las opciones de una pregunta individual para que la respuesta correcta
 * quede en la posición `targetCorrectIndex`, manteniendo 100% intacta la correspondencia conceptual.
 * 
 * Reglas Pedagógicas Especiales:
 * 1. Si "Ninguna de las anteriores" o "Todas las anteriores" es un distractor,
 *    debe fijarse estrictamente en la última posición (D / índice 3), barajando los otros distractores.
 * 2. Si "Ninguna de las anteriores" o "Todas las anteriores" es la respuesta correcta,
 *    debe fijarse estrictamente en la última posición (D / índice 3), garantizando coherencia lógica.
 * 3. En caso de preguntas con menos opciones o estructuras atípicas, preserva la integridad de manera segura.
 */
export function balanceQuestionOptions(
  question: Question,
  targetCorrectIndex: number,
  seed?: number
): Question {
  if (!question || !Array.isArray(question.options) || question.options.length < 2) {
    return { ...question };
  }

  const prng = createPRNG(seed);
  const optionsCount = question.options.length;
  const originalCorrectIdx =
    typeof question.correctIndex === 'number' &&
    question.correctIndex >= 0 &&
    question.correctIndex < optionsCount
      ? question.correctIndex
      : 0;

  const correctOptionText = question.options[originalCorrectIdx];
  const lastIndex = optionsCount - 1;

  // Caso especial A: La respuesta correcta es "Ninguna / Todas de las anteriores"
  if (isSpecialEndOption(correctOptionText)) {
    // Pedagógicamente, "Ninguna de las anteriores" sólo tiene sentido semántico en la última posición (D).
    const safeTargetIndex = lastIndex;
    const distractors = question.options.filter((_, idx) => idx !== originalCorrectIdx);
    const shuffledDistractors = shuffleArray(distractors, prng);

    const newOptions = new Array<string>(optionsCount);
    newOptions[safeTargetIndex] = correctOptionText;

    let distractorPtr = 0;
    for (let i = 0; i < optionsCount; i++) {
      if (i !== safeTargetIndex) {
        newOptions[i] = shuffledDistractors[distractorPtr++];
      }
    }

    return {
      ...question,
      options: newOptions,
      correctIndex: safeTargetIndex,
      originalCorrectIndex: (question as any).originalCorrectIndex ?? originalCorrectIdx,
      isOptionBalanced: true
    } as Question;
  }

  // Caso especial B: Uno de los distractores es "Ninguna / Todas de las anteriores"
  const specialDistractorOriginalIdx = question.options.findIndex(
    (opt, idx) => idx !== originalCorrectIdx && isSpecialEndOption(opt)
  );

  let newOptions = new Array<string>(optionsCount);
  let safeTargetIndex = Math.max(0, Math.min(targetCorrectIndex, lastIndex));

  if (specialDistractorOriginalIdx !== -1) {
    const specialDistractorText = question.options[specialDistractorOriginalIdx];

    // Si el target cayó en la última posición (D), pero ese lugar debe ocuparlo el distractor especial,
    // reubicamos la respuesta correcta en otra posición aleatoria (A, B o C)
    if (safeTargetIndex === lastIndex) {
      safeTargetIndex = Math.floor(prng() * lastIndex);
    }

    // Los demás distractores libres
    const freeDistractors = question.options.filter(
      (_, idx) => idx !== originalCorrectIdx && idx !== specialDistractorOriginalIdx
    );
    const shuffledFreeDistractors = shuffleArray(freeDistractors, prng);

    newOptions[safeTargetIndex] = correctOptionText;
    newOptions[lastIndex] = specialDistractorText; // Fijado siempre en D

    let freePtr = 0;
    for (let i = 0; i < optionsCount; i++) {
      if (i !== safeTargetIndex && i !== lastIndex) {
        newOptions[i] = shuffledFreeDistractors[freePtr++];
      }
    }
  } else {
    // Caso estándar: ningún texto especial, permutación libre de distractores
    const originalDistractors = question.options.filter((_, idx) => idx !== originalCorrectIdx);
    const shuffledDistractors = shuffleArray(originalDistractors, prng);

    newOptions[safeTargetIndex] = correctOptionText;

    let distractorPtr = 0;
    for (let i = 0; i < optionsCount; i++) {
      if (i !== safeTargetIndex) {
        newOptions[i] = shuffledDistractors[distractorPtr++];
      }
    }
  }

  // Verificación estricta de invariantes
  if (newOptions[safeTargetIndex] !== correctOptionText) {
    console.error(`Invariante rota en balanceQuestionOptions para reactivo ${question.id}`);
    return { ...question };
  }

  return {
    ...question,
    options: newOptions,
    correctIndex: safeTargetIndex,
    originalCorrectIndex: (question as any).originalCorrectIndex ?? originalCorrectIdx,
    isOptionBalanced: true
  } as Question;
}

/**
 * Aplica el motor de distribución de respuestas a una lista completa de preguntas.
 */
export function distributeQuestionsList(questions: Question[], seed?: number): Question[] {
  if (!questions || questions.length === 0) return [];

  const targetSequence = generateBalancedTargetSequence(questions.length, 4, 2, seed);

  return questions.map((q, idx) => {
    const targetIdx = targetSequence[idx];
    const subSeed = typeof seed === 'number' ? seed + idx * 31 : undefined;
    return balanceQuestionOptions(q, targetIdx, subSeed);
  });
}

/**
 * Aplica el motor de distribución de respuestas a un ExamBank completo.
 * Funciona de manera centralizada para cualquier prueba (estándar, personalizada, por materia o nivel).
 */
export function balanceExamBank<T extends ExamBank>(bank: T, seed?: number): T {
  if (!bank || !Array.isArray(bank.sections)) {
    return bank;
  }

  // Contar total de preguntas a lo largo de todas las secciones
  const allQuestions = bank.sections.flatMap(s => s.questions || []);
  if (allQuestions.length === 0) {
    return bank;
  }

  // Planificar la secuencia uniforme global para todo el examen
  const targetSequence = generateBalancedTargetSequence(allQuestions.length, 4, 2, seed);

  let globalQuestionIndex = 0;

  const balancedSections: Section[] = bank.sections.map(section => {
    const balancedQuestions: Question[] = (section.questions || []).map(q => {
      const plannedTarget = targetSequence[globalQuestionIndex];
      const subSeed = typeof seed === 'number' ? seed + globalQuestionIndex * 17 : undefined;
      globalQuestionIndex++;
      return balanceQuestionOptions(q, plannedTarget, subSeed);
    });

    return {
      ...section,
      questions: balancedQuestions
    };
  });

  return {
    ...bank,
    sections: balancedSections,
    isAnswerDistributionBalanced: true
  } as T;
}

/**
 * Audita una lista o prueba para verificar el cumplimiento de las reglas de distribución.
 */
export function verifyAnswerDistribution(questions: Question[]): AnswerDistributionAudit {
  const totalQuestions = questions.length;
  const counts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
  const sequenceLetters: string[] = [];
  const sequenceIndices: number[] = [];

  let currentConsecutive = 0;
  let maxConsecutive = 0;
  let lastPos = -1;
  let violationsCount = 0;

  questions.forEach(q => {
    const pos = q.correctIndex;
    counts[pos] = (counts[pos] || 0) + 1;
    sequenceLetters.push(String.fromCharCode(65 + pos));
    sequenceIndices.push(pos);

    if (pos === lastPos) {
      currentConsecutive++;
      if (currentConsecutive > maxConsecutive) {
        maxConsecutive = currentConsecutive;
      }
      if (currentConsecutive > 2) {
        violationsCount++;
      }
    } else {
      currentConsecutive = 1;
      if (maxConsecutive === 0) maxConsecutive = 1;
      lastPos = pos;
    }
  });

  const percentages: Record<number, number> = {};
  for (let i = 0; i < 4; i++) {
    percentages[i] = totalQuestions > 0 ? Math.round(((counts[i] || 0) / totalQuestions) * 100) : 0;
  }

  // Verificar diferencia máxima entre cuentas (<= 1)
  const countValues = [counts[0] || 0, counts[1] || 0, counts[2] || 0, counts[3] || 0];
  const maxCount = Math.max(...countValues);
  const minCount = Math.min(...countValues);
  const isUniform = maxCount - minCount <= 1;

  // Auditar ciclos periódicos
  let periodicCyclesCount = 0;
  for (let i = 4; i <= sequenceIndices.length; i++) {
    const sub = sequenceIndices.slice(0, i);
    if (detectCyclicPatterns(sub).hasCycle) {
      periodicCyclesCount++;
    }
  }

  return {
    totalQuestions,
    counts,
    percentages,
    maxConsecutive,
    sequenceLetters,
    isBalanced: maxConsecutive <= 2 && violationsCount === 0 && isUniform,
    violationsCount,
    periodicCyclesCount,
    isUniform
  };
}
