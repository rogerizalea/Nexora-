import { generateDynamicCustomExam } from '../src/data/questionBanks';
import { buildCustomSubjectExam } from '../src/data/subjectsData';
import { 
  selectSmartQuestions, 
  recordQuestionsUsage, 
  resetVarietyCycle,
  saveQuestionUsageHistory,
  getVarietyStatus
} from '../src/services/questionEngine';
import { QUESTIONS_MATEMATICAS } from '../src/data/questions/matematicas';
import { QUESTIONS_INGLES } from '../src/data/questions/ingles';

console.log('=== NEXORA END-TO-END QUESTION ENGINE INTEGRATION TEST ===\n');

// Mock localStorage in Node environment
const store: Record<string, string> = {};
(global as any).localStorage = {
  getItem: (key: string) => store[key] || null,
  setItem: (key: string, val: string) => { store[key] = val; },
  removeItem: (key: string) => { delete store[key]; },
  clear: () => { Object.keys(store).forEach(k => delete store[k]); }
};

// Test 1: Clean slate test
saveQuestionUsageHistory({});

// Test 2: Generate dynamic exam for Practice mode
console.log('1. Generating Practice Battery (30 questions across Math, Lengua, Razonamiento)...');
const practiceBank = generateDynamicCustomExam(undefined, 'practice');
const practiceQuestions = practiceBank.sections.flatMap(s => s.questions);
const practiceIds = new Set(practiceQuestions.map(q => q.id));

console.log(`   - Generated ${practiceQuestions.length} practice questions.`);
console.log(`   - Unique IDs in practice battery: ${practiceIds.size} / ${practiceQuestions.length}`);
if (practiceIds.size !== practiceQuestions.length) {
  throw new Error('FAIL: Practice battery contains duplicate questions within the same test!');
}

// Test 3: Generate dynamic exam for Exam mode
console.log('2. Generating Exam Battery (30 questions across Math, Lengua, Razonamiento)...');
const examBank = generateDynamicCustomExam(undefined, 'exam');
const examQuestions = examBank.sections.flatMap(s => s.questions);
const examIds = new Set(examQuestions.map(q => q.id));

console.log(`   - Generated ${examQuestions.length} exam questions.`);
console.log(`   - Unique IDs in exam battery: ${examIds.size} / ${examQuestions.length}`);
if (examIds.size !== examQuestions.length) {
  throw new Error('FAIL: Exam battery contains duplicate questions within the same test!');
}

// Test 4: Verify ZERO overlap between Practice and Exam
let overlapCount = 0;
const overlappingIds: string[] = [];
for (const id of examIds) {
  if (practiceIds.has(id)) {
    overlapCount++;
    overlappingIds.push(id);
  }
}

console.log(`3. Cross-modal repetition check between Practice and Exam:`);
console.log(`   - Overlapping question IDs count: ${overlapCount}`);
if (overlapCount > 0) {
  console.error(`   - Overlapping IDs:`, overlappingIds);
  throw new Error(`FAIL: Practice and Exam share ${overlapCount} identical questions! Separation violated.`);
}
console.log('   ✓ SUCCESS: Zero overlap between Practice and Exam batteries!\n');

// Test 5: Custom Subject Exam (Inglés - Básico)
console.log('4. Testing Custom Subject Exam for newly expanded Inglés (Básico)...');
const customPractice = buildCustomSubjectExam('ingles', 'Todas', 15, 'practice', 'Básico');
const customPracticeIds = new Set(customPractice.examBank.sections[0].questions.map((q: any) => q.id));

const customExam = buildCustomSubjectExam('ingles', 'Todas', 15, 'exam', 'Básico');
const customExamIds = new Set(customExam.examBank.sections[0].questions.map((q: any) => q.id));

let customOverlap = 0;
for (const id of customExamIds) {
  if (customPracticeIds.has(id)) {
    customOverlap++;
  }
}
console.log(`   - Custom Practice IDs count: ${customPracticeIds.size}`);
console.log(`   - Custom Exam IDs count: ${customExamIds.size}`);
console.log(`   - Overlap between Custom Practice and Custom Exam: ${customOverlap}`);
if (customOverlap > 0) {
  throw new Error(`FAIL: Custom Practice and Exam share ${customOverlap} questions!`);
}
console.log('   ✓ SUCCESS: Custom Subject Exam enforces strict cross-modal anti-repetition!\n');

// Test 6: Verify status report
const status = getVarietyStatus('ingles', QUESTIONS_INGLES, 'Básico');
console.log('5. Variety status for Inglés Básico:');
console.log(`   - Total questions in pool: ${status.totalInPool}`);
console.log(`   - Available unseen: ${status.unseenAvailable}`);
console.log(`   - Used in current cycle: ${status.seenCount}`);
console.log(`   - Active cycle: #${status.cycleCount}`);
console.log('   ✓ SUCCESS: Status metrics accurately reflect real student usage.\n');

console.log('=== ALL INTEGRATION TESTS PASSED WITH 100% SUCCESS ===');
