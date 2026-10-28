import { 
  generateBalancedTargetSequence, 
  balanceQuestionOptions, 
  balanceExamBank, 
  distributeQuestionsList,
  verifyAnswerDistribution 
} from '../services/answerDistributionEngine';
import { BANK_STANDARD, ALL_EXAM_BANKS, generateDynamicCustomExam } from '../data/questionBanks';
import { buildCustomSubjectExam, NEXORA_SUBJECTS, getQuestionsCoverageReport } from '../data/subjectsData';
import { calculateDiagnostic } from '../utils/diagnosticEvaluator';
import { selectSmartQuestions, recordQuestionsUsage } from '../services/questionEngine';
import { Question, Section } from '../types';

console.log('=====================================================');
console.log('PRUEBA AUTOMATIZADA A: DISTRIBUCIÓN Y REGLAS DE POSICIÓN');
console.log('=====================================================');

const testSizes = [10, 20, 30];
const ITERATIONS_PER_SIZE = 1000;

for (const size of testSizes) {
  let violationsOverTwo = 0;
  let violationsOverNineIn30 = 0;
  let maxConsecutiveOverall = 0;
  const letterTotals = [0, 0, 0, 0];

  for (let iter = 0; iter < ITERATIONS_PER_SIZE; iter++) {
    const seq = generateBalancedTargetSequence(size, 4, 2);
    
    // Check consecutive
    let currentConsec = 1;
    let maxConsec = 1;
    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === seq[i - 1]) {
        currentConsec++;
        if (currentConsec > maxConsec) maxConsec = currentConsec;
      } else {
        currentConsec = 1;
      }
    }

    if (maxConsec > maxConsecutiveOverall) maxConsecutiveOverall = maxConsec;
    if (maxConsec > 2) violationsOverTwo++;

    // Count positions
    const counts = [0, 0, 0, 0];
    seq.forEach(pos => {
      counts[pos]++;
      letterTotals[pos]++;
    });

    if (size === 30) {
      counts.forEach(c => {
        if (c < 6 || c > 9) violationsOverNineIn30++;
      });
    }
  }

  console.log(`\nResultados para ${size} reactivos (${ITERATIONS_PER_SIZE} simulaciones):`);
  console.log(`- Máximo consecutivo observado: ${maxConsecutiveOverall} (Límite permitido: 2)`);
  console.log(`- Infracciones de más de 2 consecutivas: ${violationsOverTwo}`);
  if (size === 30) {
    console.log(`- Pruebas fuera del rango 6-9 por letra: ${violationsOverNineIn30}`);
  }
  const totalSlots = size * ITERATIONS_PER_SIZE;
  console.log(`- Distribución acumulada A: ${letterTotals[0]} (${((letterTotals[0] / totalSlots) * 100).toFixed(2)}%)`);
  console.log(`- Distribución acumulada B: ${letterTotals[1]} (${((letterTotals[1] / totalSlots) * 100).toFixed(2)}%)`);
  console.log(`- Distribución acumulada C: ${letterTotals[2]} (${((letterTotals[2] / totalSlots) * 100).toFixed(2)}%)`);
  console.log(`- Distribución acumulada D: ${letterTotals[3]} (${((letterTotals[3] / totalSlots) * 100).toFixed(2)}%)`);
}

console.log('\n=====================================================');
console.log('PRUEBA AUTOMATIZADA B: EXACTITUD DE RESPUESTA CONCEPTUAL');
console.log('=====================================================');

const sampleQuestions: Question[] = [
  {
    id: 'q-sample-1',
    sectionId: 1,
    number: 1,
    text: '¿Cuál es el resultado de 15 × 4?',
    options: ['60', '50', '45', '75'],
    correctIndex: 0, // A
    explanation: '15 multiplicado por 4 es igual a 60.',
    skill: 'Cálculo',
    difficulty: 'Fácil'
  },
  {
    id: 'q-sample-2',
    sectionId: 1,
    number: 2,
    text: '¿Qué palabra es un sustantivo propio?',
    options: ['ciudad', 'México', 'río', 'montaña'],
    correctIndex: 1, // B
    explanation: 'México es un nombre propio de país y se escribe con mayúscula inicial.',
    skill: 'Gramática',
    difficulty: 'Fácil'
  },
  {
    id: 'q-sample-3',
    sectionId: 1,
    number: 3,
    text: '¿Cuál es el antónimo de efímero?',
    options: ['breve', 'fugaz', 'duradero', 'pasajero'],
    correctIndex: 2, // C
    explanation: 'Efímero significa de corta duración; su antónimo es duradero.',
    skill: 'Léxico',
    difficulty: 'Intermedio'
  },
  {
    id: 'q-sample-4',
    sectionId: 1,
    number: 4,
    text: '¿Qué elemento químico tiene el símbolo Na?',
    options: ['Nitrógeno', 'Níquel', 'Neón', 'Sodio'],
    correctIndex: 3, // D
    explanation: 'Na proviene del latín natrium y corresponde al Sodio.',
    skill: 'Química',
    difficulty: 'Fácil'
  }
];

let accuracyPass = true;
sampleQuestions.forEach(origQ => {
  const originalConcept = origQ.options[origQ.correctIndex];
  for (let target = 0; target < 4; target++) {
    const balanced = balanceQuestionOptions(origQ, target);
    const newConcept = balanced.options[balanced.correctIndex];
    if (newConcept !== originalConcept || balanced.correctIndex !== target) {
      accuracyPass = false;
      console.error(`Error de exactitud en ${origQ.id} para objetivo ${target}`);
    }
    // Check that explanation is untouched
    if (balanced.explanation !== origQ.explanation) {
      accuracyPass = false;
      console.error(`Explicación alterada en ${origQ.id}`);
    }
  }
});
console.log(`Prueba de Exactitud Conceptual: ${accuracyPass ? 'PASÓ AL 100%' : 'FALLÓ'}`);

console.log('\n=====================================================');
console.log('PRUEBA AUTOMATIZADA C: SESIONES Y PERSISTENCIA');
console.log('=====================================================');

// 1. Simular creación de un examen balanceado
const testExamBank = generateDynamicCustomExam(undefined, 'practice');
const questions = testExamBank.sections.flatMap((s: Section) => s.questions);
const simulatedAnswers: Record<string, number> = {};

// Responder correctamente al 80% y erróneamente al 20%
questions.forEach((q, idx) => {
  if (idx % 5 === 0) {
    // Respuesta incorrecta
    simulatedAnswers[q.id] = (q.correctIndex + 1) % 4;
  } else {
    // Respuesta correcta
    simulatedAnswers[q.id] = q.correctIndex;
  }
});

// Calificación original
const originalDiagnostic = calculateDiagnostic(testExamBank.sections, simulatedAnswers, 1000, 2000);

// Serializar a JSON (como hace localStorage)
const serializedSession = JSON.stringify({
  bank: testExamBank,
  answers: simulatedAnswers,
  currentIndex: 15
});

// Deserializar y recalcular
const restoredSession = JSON.parse(serializedSession);
const restoredDiagnostic = calculateDiagnostic(restoredSession.bank.sections, restoredSession.answers, 1000, 2000);

const sessionPass = 
  originalDiagnostic.totalScore === restoredDiagnostic.totalScore &&
  originalDiagnostic.percentage === restoredDiagnostic.percentage &&
  restoredSession.bank.sections.flatMap((s: any) => s.questions).every((q: any) => {
    const origQ = questions.find(oq => oq.id === q.id);
    return origQ && origQ.correctIndex === q.correctIndex && origQ.options[origQ.correctIndex] === q.options[q.correctIndex];
  });

console.log(`Guardado, Serialización y Restauración de Sesión: ${sessionPass ? 'PASÓ AL 100%' : 'FALLÓ'}`);
console.log(`- Puntaje original: ${originalDiagnostic.totalScore}/${originalDiagnostic.maxScore} (${originalDiagnostic.percentage}%)`);
console.log(`- Puntaje restaurado: ${restoredDiagnostic.totalScore}/${restoredDiagnostic.maxScore} (${restoredDiagnostic.percentage}%)`);

console.log('\n=====================================================');
console.log('PRUEBA AUTOMATIZADA D: COBERTURA COMPLETA (6.000 REACTIVOS)');
console.log('=====================================================');

const coverageReport = getQuestionsCoverageReport();
console.log(`Total de asignaturas curriculares: ${coverageReport.rows.length} (esperado: 12)`);
console.log(`Total de reactivos en plataforma: ${coverageReport.totalQuestionsAcrossPlatform} (esperado: 6000)`);
let allSubjectsHave500 = true;
coverageReport.rows.forEach(r => {
  if (r.totalValid !== 500) {
    allSubjectsHave500 = false;
    console.error(`Materia ${r.subjectName} tiene ${r.totalValid} reactivos, esperado 500`);
  }
});
console.log(`Verificación de 500 reactivos por materia: ${allSubjectsHave500 ? 'PASÓ AL 100%' : 'FALLÓ'}`);

console.log('\n=====================================================');
console.log('PRUEBA AUTOMATIZADA E: REGRESIONES Y COMPONENTES');
console.log('=====================================================');

// 1. Banco Estándar
const balancedStandard = balanceExamBank(BANK_STANDARD);
const standardAudit = verifyAnswerDistribution(balancedStandard.sections.flatMap((s: Section) => s.questions));
console.log(`Banco Estándar (${standardAudit.totalQuestions} reactivos):`);
console.log(`- Secuencia: ${standardAudit.sequenceLetters.join(', ')}`);
console.log(`- Conteos: A=${standardAudit.counts[0]}, B=${standardAudit.counts[1]}, C=${standardAudit.counts[2]}, D=${standardAudit.counts[3]}`);
console.log(`- Máximo consecutivo: ${standardAudit.maxConsecutive}`);
console.log(`- Cumplimiento de balance: ${standardAudit.isBalanced ? 'SÍ (VÁLIDO)' : 'NO'}`);

// 2. Bancos Especiales
let allBanksPass = true;
for (const bank of ALL_EXAM_BANKS) {
  const balanced = balanceExamBank(bank);
  const audit = verifyAnswerDistribution(balanced.sections.flatMap((s: Section) => s.questions));
  if (!audit.isBalanced || audit.maxConsecutive > 2) {
    allBanksPass = false;
    console.error(`Fallo en banco ${bank.id}: maxConsec=${audit.maxConsecutive}`);
  }
}
console.log(`Verificación de todos los bancos predefinidos: ${allBanksPass ? 'PASÓ AL 100%' : 'FALLÓ'}`);

// 3. Generación en 12 materias
let allSubjectsDynamicPass = true;
for (const subj of NEXORA_SUBJECTS) {
  const custom = buildCustomSubjectExam(subj.id, 'Todas', 30, 'exam', 'Todos');
  const audit = verifyAnswerDistribution(custom.examBank.sections.flatMap((s: any) => s.questions));
  if (!audit.isBalanced || audit.maxConsecutive > 2) {
    allSubjectsDynamicPass = false;
    console.error(`Fallo en examen dinámico de ${subj.name}: maxConsec=${audit.maxConsecutive}`);
  }
}
console.log(`Verificación de exámenes generados en las 12 materias: ${allSubjectsDynamicPass ? 'PASÓ AL 100%' : 'FALLÓ'}`);
