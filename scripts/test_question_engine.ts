import { selectSmartQuestions, recordQuestionsUsage, resetVarietyCycle, getVarietyStatus, normalizeStatement } from '../src/services/questionEngine';
import { QUESTIONS_MATEMATICAS } from '../src/data/questions/matematicas';
import { QUESTIONS_FISICA } from '../src/data/questions/fisica';
import { buildCustomSubjectExam } from '../src/data/subjectsData';

console.log("=== INICIANDO PRUEBAS AUTOMATIZADAS DEL MOTOR DE PREGUNTAS ===");

let passedTests = 0;
let totalTests = 0;

function assert(condition: boolean, msg: string) {
  totalTests++;
  if (!condition) {
    console.error(`❌ FALLÓ: ${msg}`);
    throw new Error(msg);
  } else {
    console.log(`✅ PASÓ: ${msg}`);
    passedTests++;
  }
}

// Limpiar historial de pruebas para comenzar en estado limpio
resetVarietyCycle('matematicas', 'Básico');

// TEST 1: Sin duplicados dentro de una misma prueba
const test1 = selectSmartQuestions({
  subjectId: 'matematicas',
  pool: QUESTIONS_MATEMATICAS,
  requestedCount: 30,
  mode: 'practice',
  educationalLevel: 'Básico'
});

assert(test1.selectedQuestions.length === 30, 'Selecciona exactamente 30 reactivos');
const idsTest1 = new Set(test1.selectedQuestions.map(q => q.id));
assert(idsTest1.size === 30, '0 preguntas repetidas dentro de la misma prueba');

// Registrar uso de test1 en Modo Práctica
recordQuestionsUsage('matematicas', 'Básico', test1.selectedQuestions, 'practice');

// TEST 2: Separación entre Práctica y Examen (las preguntas de Práctica deben ser excluidas en Examen)
const test2 = selectSmartQuestions({
  subjectId: 'matematicas',
  pool: QUESTIONS_MATEMATICAS,
  requestedCount: 30,
  mode: 'exam',
  educationalLevel: 'Básico'
});

assert(test2.selectedQuestions.length === 30, 'Selecciona 30 reactivos para Examen');
const idsTest2 = new Set(test2.selectedQuestions.map(q => q.id));
assert(idsTest2.size === 30, '0 preguntas repetidas en el Examen');

// Comprobar intersección entre Práctica y Examen
let sharedCount = 0;
for (const id of idsTest1) {
  if (idsTest2.has(id)) {
    sharedCount++;
  }
}
assert(sharedCount === 0, `Práctica y Examen no comparten ninguna pregunta (${sharedCount} compartidas de 100 disponibles)`);

// Registrar uso de test2 en Modo Examen
recordQuestionsUsage('matematicas', 'Básico', test2.selectedQuestions, 'exam');

// TEST 3: Siguiente sesión de Práctica no repite preguntas de Práctica ni de Examen
const test3 = selectSmartQuestions({
  subjectId: 'matematicas',
  pool: QUESTIONS_MATEMATICAS,
  requestedCount: 30,
  mode: 'practice',
  educationalLevel: 'Básico'
});

assert(test3.selectedQuestions.length === 30, 'Selecciona 30 reactivos para segunda Práctica');
const idsTest3 = new Set(test3.selectedQuestions.map(q => q.id));
let sharedWith1or2 = 0;
for (const id of idsTest3) {
  if (idsTest1.has(id) || idsTest2.has(id)) {
    sharedWith1or2++;
  }
}
assert(sharedWith1or2 === 0, `Segunda Práctica no repite reactivos de las 60 anteriores (${sharedWith1or2} repetidas)`);

recordQuestionsUsage('matematicas', 'Básico', test3.selectedQuestions, 'practice');
// Ahora se han usado 90 preguntas de 100 en Matemáticas Básico! Quedan solo 10 nuevas.

// TEST 4: Agotamiento parcial con reporte claro
const test4 = selectSmartQuestions({
  subjectId: 'matematicas',
  pool: QUESTIONS_MATEMATICAS,
  requestedCount: 20, // Pide 20, pero solo quedan 10 no vistas
  mode: 'exam',
  educationalLevel: 'Básico'
});

assert(test4.selectedQuestions.length === 20, 'Genera 20 reactivos completos');
assert(test4.unseenCount === 10, 'Prioriza exactamente las 10 preguntas nuevas restantes');
assert(test4.recycledCount === 10, 'Completa con 10 preguntas de repaso sin duplicar dentro de la prueba');
const idsTest4 = new Set(test4.selectedQuestions.map(q => q.id));
assert(idsTest4.size === 20, 'No hay duplicados internos incluso al reciclar');
assert(test4.message !== undefined, 'Informa claramente al usuario que se combinaron preguntas nuevas y de repaso');

// TEST 5: Reinicio voluntario del ciclo de variedad sin tocar intentos
const resetResult = resetVarietyCycle('matematicas', 'Básico');
assert(resetResult.resetCount >= 90, `Reinicia el ciclo liberando ${resetResult.resetCount} preguntas`);
assert(resetResult.newCycle >= 2, `Avanza el número de ciclo`);

const statusAfterReset = getVarietyStatus('matematicas', QUESTIONS_MATEMATICAS, 'Básico');
assert(statusAfterReset.unseenAvailable === 100, 'Las 100 preguntas están nuevamente disponibles como ciclo #2');

// TEST 6: Distinción entre materias y niveles diferentes
const testFisica = selectSmartQuestions({
  subjectId: 'fisica',
  pool: QUESTIONS_FISICA,
  requestedCount: 15,
  mode: 'exam',
  educationalLevel: 'Bachillerato'
});
assert(testFisica.selectedQuestions.length === 15, 'Física Bachillerato selecciona 15 preguntas');
assert(testFisica.selectedQuestions.every(q => q.educationalLevel === 'Bachillerato'), 'Todas pertenecen al nivel solicitado');

// TEST 7: Normalización semántica de enunciados
const s1 = "¿Cuál es el valor de la aceleración gravitatoria?";
const s2 = "Cual es el valor de la aceleracion gravitatoria?";
assert(normalizeStatement(s1) === normalizeStatement(s2), 'Detecta equivalencia ignorando signos de puntuación y tildes');

console.log(`\n🎉 TODAS LAS ${passedTests}/${totalTests} PRUEBAS PASARON EXITOSAMENTE!`);
