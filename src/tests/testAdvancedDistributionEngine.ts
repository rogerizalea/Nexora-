/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * SUITE DE VALIDACIÓN AVANZADA — MOTOR DE DISTRIBUCIÓN DE RESPUESTAS
 * 
 * Compara el comportamiento estadístico, pedagógico y de integridad
 * para 10, 20 y 30 preguntas, incluyendo miles de simulaciones,
 * detección de ciclos, verificación de 'Ninguna de las anteriores'
 * y pruebas de reproducibilidad con semilla.
 */

import { Question, ExamBank, Section } from '../types';
import { 
  generateBalancedTargetSequence as originalGenerateSequence,
  balanceQuestionOptions as originalBalanceQuestion,
  balanceExamBank as originalBalanceBank,
  verifyAnswerDistribution 
} from '../services/answerDistributionEngine';

// Lightweight PRNG for reproducible test runs
function createPRNG(seed?: number | string): () => number {
  if (seed === undefined) return Math.random;
  let s = typeof seed === 'string' 
    ? Array.from(seed).reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 0)
    : seed >>> 0;
  return function() {
    s |= 0; s = s + 0x6D2B79F5 | 0;
    let t = Math.imul(s ^ s >>> 15, 1 | s);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// Function: Calculate targets with max difference of 1
export function calculateAnswerTargets(
  count: number,
  numOptions: number = 4,
  rng: () => number = Math.random
): number[] {
  if (count <= 0) return [];
  if (numOptions <= 1) return [count];

  const base = Math.floor(count / numOptions);
  const remainder = count % numOptions;
  const targets = Array(numOptions).fill(base);

  // Distribute remainder randomly among options
  const indices = Array.from({ length: numOptions }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  for (let i = 0; i < remainder; i++) {
    targets[indices[i]]++;
  }

  return targets;
}

// Check for cyclic repetitions of period 2, 3, 4
export function detectCyclicPatterns(seq: number[]): {
  hasPeriod2: boolean;
  hasPeriod3: boolean;
  hasPeriod4: boolean;
  maxConsecutive: number;
} {
  let maxConsecutive = 1;
  let currentConsecutive = 1;
  let hasPeriod2 = false; // e.g. ABABAB (length 6)
  let hasPeriod3 = false; // e.g. ABCABCABC (length 9)
  let hasPeriod4 = false; // e.g. ABCDABCD (length 8)

  for (let i = 1; i < seq.length; i++) {
    if (seq[i] === seq[i - 1]) {
      currentConsecutive++;
      if (currentConsecutive > maxConsecutive) maxConsecutive = currentConsecutive;
    } else {
      currentConsecutive = 1;
    }

    // Check period 2: length 6 cycle (e.g. 0,1,0,1,0,1)
    if (i >= 5 && 
        seq[i] === seq[i - 2] && seq[i - 2] === seq[i - 4] &&
        seq[i - 1] === seq[i - 3] && seq[i - 3] === seq[i - 5] &&
        seq[i] !== seq[i - 1]) {
      hasPeriod2 = true;
    }

    // Check period 3: length 6 cycle (e.g. 0,1,2,0,1,2)
    if (i >= 5 &&
        seq[i] === seq[i - 3] &&
        seq[i - 1] === seq[i - 4] &&
        seq[i - 2] === seq[i - 5] &&
        seq[i] !== seq[i - 1] && seq[i - 1] !== seq[i - 2]) {
      hasPeriod3 = true;
    }

    // Check period 4: length 8 cycle (e.g. 0,1,2,3,0,1,2,3)
    if (i >= 7 &&
        seq[i] === seq[i - 4] &&
        seq[i - 1] === seq[i - 5] &&
        seq[i - 2] === seq[i - 6] &&
        seq[i - 3] === seq[i - 7]) {
      hasPeriod4 = true;
    }
  }

  return { hasPeriod2, hasPeriod3, hasPeriod4, maxConsecutive };
}

// Proposed enhanced sequence generator
export function generateAdvancedBalancedTargetSequence(
  totalQuestions: number,
  numOptions: number = 4,
  maxConsecutive: number = 2,
  seed?: number | string
): number[] {
  if (totalQuestions <= 0) return [];
  if (numOptions <= 1) return Array(totalQuestions).fill(0);

  const rng = createPRNG(seed);
  const targets = calculateAnswerTargets(totalQuestions, numOptions, rng);

  // Pool representation as remaining counts
  const remaining = [...targets];
  const result: number[] = [];

  function solve(index: number, allowSoftCycles = false): boolean {
    if (index === totalQuestions) return true;

    // Determine candidate options that have remaining items
    const candidates: number[] = [];
    for (let opt = 0; opt < numOptions; opt++) {
      if (remaining[opt] <= 0) continue;

      // 1. Consecutive identical constraint
      if (index >= maxConsecutive) {
        let isAllSame = true;
        for (let k = 1; k <= maxConsecutive; k++) {
          if (result[index - k] !== opt) {
            isAllSame = false;
            break;
          }
        }
        if (isAllSame) continue;
      }

      // 2. Anti-cyclic constraint (soft check unless impossible)
      if (!allowSoftCycles) {
        // Anti-period 2 (prevent 4 alternating: x, y, x, y)
        if (index >= 3 && 
            opt === result[index - 2] && 
            result[index - 1] === result[index - 3] && 
            opt !== result[index - 1]) {
          continue;
        }

        // Anti-period 3 (prevent 6 repeating: x, y, z, x, y, z)
        if (index >= 5 &&
            opt === result[index - 3] &&
            result[index - 1] === result[index - 4] &&
            result[index - 2] === result[index - 5]) {
          continue;
        }

        // Anti-period 4 (prevent 8 repeating: a, b, c, d, a, b, c, d)
        if (index >= 7 &&
            opt === result[index - 4] &&
            result[index - 1] === result[index - 5] &&
            result[index - 2] === result[index - 6] &&
            result[index - 3] === result[index - 7]) {
          continue;
        }
      }

      // 3. Forward-checking feasibility
      const slotsLeftAfter = totalQuestions - index - 1;
      let impossible = false;
      for (let o = 0; o < numOptions; o++) {
        const countNeeded = o === opt ? remaining[o] - 1 : remaining[o];
        if (countNeeded <= 0) continue;
        const otherSlots = slotsLeftAfter - countNeeded;
        // Maximum items of same letter that can fit with maxConsecutive without violation:
        const maxCapacity = (otherSlots + 1) * maxConsecutive;
        if (countNeeded > maxCapacity) {
          impossible = true;
          break;
        }
      }
      if (impossible) continue;

      candidates.push(opt);
    }

    if (candidates.length === 0) return false;

    // Randomize candidate exploration order, prioritizing highest remaining count (Most Constrained)
    candidates.sort((a, b) => {
      const diff = remaining[b] - remaining[a];
      if (diff !== 0) return diff;
      return rng() - 0.5;
    });

    for (const cand of candidates) {
      result.push(cand);
      remaining[cand]--;

      if (solve(index + 1, allowSoftCycles)) {
        return true;
      }

      // Backtrack
      result.pop();
      remaining[cand]++;
    }

    return false;
  }

  // Attempt 1: Strict anti-cycle + strict balance
  const success = solve(0, false);
  if (success) return result;

  // Attempt 2: Relaxed anti-cycle (strictly preserving consecutive <= 2 and exact counts)
  result.length = 0;
  for (let i = 0; i < numOptions; i++) remaining[i] = targets[i];
  if (solve(0, true)) return result;

  // Fallback: return original engine's sequence if ever needed
  return originalGenerateSequence(totalQuestions, numOptions, maxConsecutive);
}

// Proposed enhanced option balancing with strict pedagogical rules
export function balanceQuestionOptionsEnhanced(
  question: Question,
  targetCorrectIndex: number,
  rng: () => number = Math.random
): Question {
  if (!question || !Array.isArray(question.options) || question.options.length < 2) {
    return { ...question };
  }

  const optionsCount = question.options.length;
  const originalCorrectIdx = typeof question.correctIndex === 'number' && question.correctIndex >= 0 && question.correctIndex < optionsCount
    ? question.correctIndex
    : 0;

  const correctOptionText = question.options[originalCorrectIdx];

  // Regex to detect "Ninguna de las anteriores" / "Todas las anteriores"
  const isPositionalOption = (text: string) => 
    /^(todas|ninguna) de las (anteriores|opciones)$/i.test(text.trim()) ||
    /^(ninguna|todas) es correcta$/i.test(text.trim());

  const correctIsPositional = isPositionalOption(correctOptionText);

  // Rule 1: If the correct option is "Ninguna de las anteriores", it MUST be at the final position!
  let effectiveTargetIndex = targetCorrectIndex;
  if (correctIsPositional) {
    effectiveTargetIndex = optionsCount - 1;
  } else {
    // Clamp to valid range
    effectiveTargetIndex = Math.max(0, Math.min(targetCorrectIndex, optionsCount - 1));
  }

  // Extract distractors
  const originalDistractors: string[] = [];
  question.options.forEach((opt, idx) => {
    if (idx !== originalCorrectIdx) {
      originalDistractors.push(opt);
    }
  });

  // Rule 2: If a distractor is "Ninguna de las anteriores"
  const positionalDistractorIdx = originalDistractors.findIndex(d => isPositionalOption(d));

  let newOptions: string[] = new Array(optionsCount);

  if (positionalDistractorIdx !== -1) {
    // A distractor says "Ninguna de las anteriores":
    // That distractor MUST be placed at the last position (D / optionsCount - 1).
    // The correct option MUST be placed in one of the earlier positions (0 .. optionsCount - 2).
    const safeTargetForCorrect = Math.min(effectiveTargetIndex, optionsCount - 2);
    const pinnedDistractor = originalDistractors[positionalDistractorIdx];
    
    // Remaining free distractors
    const freeDistractors = originalDistractors.filter((_, idx) => idx !== positionalDistractorIdx);
    
    // Shuffle free distractors using Fisher-Yates with rng
    for (let i = freeDistractors.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [freeDistractors[i], freeDistractors[j]] = [freeDistractors[j], freeDistractors[i]];
    }

    newOptions[safeTargetForCorrect] = correctOptionText;
    newOptions[optionsCount - 1] = pinnedDistractor;

    let dPtr = 0;
    for (let i = 0; i < optionsCount; i++) {
      if (i !== safeTargetForCorrect && i !== optionsCount - 1) {
        newOptions[i] = freeDistractors[dPtr++];
      }
    }

    effectiveTargetIndex = safeTargetForCorrect;
  } else {
    // Standard question: shuffle distractors
    const shuffledDistractors = [...originalDistractors];
    for (let i = shuffledDistractors.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffledDistractors[i], shuffledDistractors[j]] = [shuffledDistractors[j], shuffledDistractors[i]];
    }

    newOptions[effectiveTargetIndex] = correctOptionText;
    let dPtr = 0;
    for (let i = 0; i < optionsCount; i++) {
      if (i !== effectiveTargetIndex) {
        newOptions[i] = shuffledDistractors[dPtr++];
      }
    }
  }

  return {
    ...question,
    options: newOptions,
    correctIndex: effectiveTargetIndex,
    originalCorrectIndex: (question as any).originalCorrectIndex ?? originalCorrectIdx,
    isOptionBalanced: true
  } as Question;
}

// ----------------------------------------------------
// RUN TEST SUITE
// ----------------------------------------------------
console.log('================================================================');
console.log('INICIANDO AUDITORÍA Y COMPARACIÓN DE MOTORES DE DISTRIBUCIÓN');
console.log('================================================================');

const SIZES = [10, 20, 30];
const SIMULATIONS = 2000;

for (const size of SIZES) {
  console.log(`\n--- Evaluando ${size} preguntas (${SIMULATIONS} iteraciones por motor) ---`);

  // Test Original Engine
  let origMaxConsecOverall = 0;
  let origConsecViolations = 0;
  let origDiffViolations = 0;
  let origCyclesP2 = 0;
  let origCyclesP3 = 0;
  let origCyclesP4 = 0;
  const origCountsTotal = [0, 0, 0, 0];
  const origStart = performance.now();

  for (let i = 0; i < SIMULATIONS; i++) {
    const seq = originalGenerateSequence(size, 4, 2);
    const analysis = detectCyclicPatterns(seq);
    if (analysis.maxConsecutive > origMaxConsecOverall) origMaxConsecOverall = analysis.maxConsecutive;
    if (analysis.maxConsecutive > 2) origConsecViolations++;
    if (analysis.hasPeriod2) origCyclesP2++;
    if (analysis.hasPeriod3) origCyclesP3++;
    if (analysis.hasPeriod4) origCyclesP4++;

    const counts = [0, 0, 0, 0];
    seq.forEach(p => { counts[p]++; origCountsTotal[p]++; });
    const diff = Math.max(...counts) - Math.min(...counts);
    if (diff > 1) origDiffViolations++;
  }
  const origTime = performance.now() - origStart;

  // Test Enhanced Engine
  let enhMaxConsecOverall = 0;
  let enhConsecViolations = 0;
  let enhDiffViolations = 0;
  let enhCyclesP2 = 0;
  let enhCyclesP3 = 0;
  let enhCyclesP4 = 0;
  const enhCountsTotal = [0, 0, 0, 0];
  const enhStart = performance.now();

  for (let i = 0; i < SIMULATIONS; i++) {
    const seq = generateAdvancedBalancedTargetSequence(size, 4, 2);
    const analysis = detectCyclicPatterns(seq);
    if (analysis.maxConsecutive > enhMaxConsecOverall) enhMaxConsecOverall = analysis.maxConsecutive;
    if (analysis.maxConsecutive > 2) enhConsecViolations++;
    if (analysis.hasPeriod2) enhCyclesP2++;
    if (analysis.hasPeriod3) enhCyclesP3++;
    if (analysis.hasPeriod4) enhCyclesP4++;

    const counts = [0, 0, 0, 0];
    seq.forEach(p => { counts[p]++; enhCountsTotal[p]++; });
    const diff = Math.max(...counts) - Math.min(...counts);
    if (diff > 1) enhDiffViolations++;
  }
  const enhTime = performance.now() - enhStart;

  console.log(`[Motor Original]:`);
  console.log(`  - Tiempo total: ${origTime.toFixed(1)} ms (${(origTime / SIMULATIONS).toFixed(3)} ms/eval)`);
  console.log(`  - Máx consecutivo: ${origMaxConsecOverall} | Infracciones (>2): ${origConsecViolations}`);
  console.log(`  - Infracciones de balance (diff > 1): ${origDiffViolations}`);
  console.log(`  - Ciclos periódicos detectados: P2(ABAB)=${origCyclesP2}, P3(ABCABC)=${origCyclesP3}, P4(ABCDABCD)=${origCyclesP4}`);

  console.log(`[Motor Propuesto Mejorado]:`);
  console.log(`  - Tiempo total: ${enhTime.toFixed(1)} ms (${(enhTime / SIMULATIONS).toFixed(3)} ms/eval)`);
  console.log(`  - Máx consecutivo: ${enhMaxConsecOverall} | Infracciones (>2): ${enhConsecViolations}`);
  console.log(`  - Infracciones de balance (diff > 1): ${enhDiffViolations}`);
  console.log(`  - Ciclos periódicos detectados: P2(ABAB)=${enhCyclesP2}, P3(ABCABC)=${enhCyclesP3}, P4(ABCDABCD)=${enhCyclesP4}`);
}

// Test Special Questions ("Ninguna de las anteriores")
console.log('\n================================================================');
console.log('PRUEBA DE PREGUNTAS ESPECIALES: "Ninguna de las anteriores"');
console.log('================================================================');

// Case 1: "Ninguna de las anteriores" is a DISTRACTOR
const qWithNoneDistractor: Question = {
  id: 'q-none-distractor',
  sectionId: 1,
  number: 1,
  text: '¿Cuál es la raíz cuadrada de 144?',
  options: ['12', '10', '14', 'Ninguna de las anteriores'],
  correctIndex: 0, // '12' is correct
  explanation: 'La raíz cuadrada de 144 es 12.',
  skill: 'Aritmética',
  difficulty: 'Fácil'
};

let distractorTestPassed = true;
for (let target = 0; target < 4; target++) {
  const balanced = balanceQuestionOptionsEnhanced(qWithNoneDistractor, target);
  const noneIdx = balanced.options.findIndex(o => /ninguna/i.test(o));
  if (noneIdx !== 3) {
    distractorTestPassed = false;
    console.error(`Fallo: 'Ninguna...' no quedó en la posición final D (quedó en ${noneIdx}) para target ${target}`);
  }
  if (balanced.options[balanced.correctIndex] !== '12') {
    distractorTestPassed = false;
    console.error(`Fallo: La respuesta correcta se alteró para target ${target}`);
  }
}
console.log(`Distractor 'Ninguna de las anteriores' siempre al final: ${distractorTestPassed ? 'PASÓ AL 100%' : 'FALLÓ'}`);

// Case 2: "Ninguna de las anteriores" is the CORRECT ANSWER
const qWithNoneCorrect: Question = {
  id: 'q-none-correct',
  sectionId: 1,
  number: 2,
  text: '¿Cuál es el valor exacto de π en números enteros?',
  options: ['3', '4', '22', 'Ninguna de las anteriores'],
  correctIndex: 3, // 'Ninguna de las anteriores' is correct!
  explanation: 'π es un número irracional y no puede expresarse como número entero.',
  skill: 'Geometría',
  difficulty: 'Intermedio'
};

let correctIsNonePassed = true;
for (let target = 0; target < 4; target++) {
  const balanced = balanceQuestionOptionsEnhanced(qWithNoneCorrect, target);
  const correctText = balanced.options[balanced.correctIndex];
  if (!/ninguna/i.test(correctText)) {
    correctIsNonePassed = false;
    console.error(`Fallo: La respuesta correcta no es 'Ninguna...' para target ${target}`);
  }
  if (balanced.correctIndex !== 3) {
    correctIsNonePassed = false;
    console.error(`Fallo: 'Ninguna...' como correcta no quedó en la posición final D (quedó en ${balanced.correctIndex})`);
  }
}
console.log(`Respuesta correcta 'Ninguna de las anteriores' siempre al final D: ${correctIsNonePassed ? 'PASÓ AL 100%' : 'FALLÓ'}`);

// Test Reproducibility with Seed
console.log('\n================================================================');
console.log('PRUEBA DE REPRODUCIBILIDAD Y VARIABILIDAD CON SEMILLA');
console.log('================================================================');

const seedA1 = generateAdvancedBalancedTargetSequence(30, 4, 2, 'eval-nexora-2026-seed-A');
const seedA2 = generateAdvancedBalancedTargetSequence(30, 4, 2, 'eval-nexora-2026-seed-A');
const seedB = generateAdvancedBalancedTargetSequence(30, 4, 2, 'eval-nexora-2026-seed-B');

const isIdenticalSameSeed = seedA1.every((val, idx) => val === seedA2[idx]);
const isDifferentOtherSeed = seedA1.some((val, idx) => val !== seedB[idx]);

console.log(`Reproducibilidad exacta con misma semilla: ${isIdenticalSameSeed ? 'PASÓ (100% idéntica)' : 'FALLÓ'}`);
console.log(`Variación entre diferentes semillas: ${isDifferentOtherSeed ? 'PASÓ (diferente y variada)' : 'FALLÓ'}`);
console.log(`- Muestra Semilla A: ${seedA1.map(n => String.fromCharCode(65 + n)).join(', ')}`);
console.log(`- Muestra Semilla B: ${seedB.map(n => String.fromCharCode(65 + n)).join(', ')}`);
