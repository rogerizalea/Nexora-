import { Question, EducationalLevel, ExamMode, StudentAttempt } from '../types';

export const STORAGE_QUESTION_USAGE_KEY = 'nexora_question_usage_history_v1';
export const STORAGE_ATTEMPTS_KEY = 'prueba_diagnostico_attempts_v2';

export interface SubjectLevelUsage {
  usedQuestionIds: string[];
  normalizedStatements: string[];
  practiceUsedCount: number;
  examUsedCount: number;
  cycleCount: number;
  lastUpdated: number;
}

export type QuestionUsageHistory = Record<string, SubjectLevelUsage>;

export interface VarietyStatus {
  subjectId: string;
  level: EducationalLevel | 'Todos';
  totalInPool: number;
  unseenAvailable: number;
  seenCount: number;
  cycleCount: number;
  isExhausted: boolean;
}

export interface SmartSelectionResult {
  selectedQuestions: Question[];
  actualCount: number;
  unseenCount: number;
  recycledCount: number;
  totalInPool: number;
  totalUnseenRemaining: number;
  isExhausted: boolean;
  message?: string;
}

/**
 * Normalizes text to detect identical or superficial variations in question statements.
 */
export function normalizeStatement(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip accents
    .replace(/[¿?¡!.,:;()\[\]{}"'«»\-–—]/g, ' ') // strip punctuation
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Generates the composite key for tracking question history by subject and educational level.
 */
export function getUsageScopeKey(subjectId: string, level?: EducationalLevel | 'Todos'): string {
  const normalizedLevel = level && level !== 'Todos' ? level : 'ALL';
  return `${subjectId}__${normalizedLevel}`;
}

/**
 * Fisher-Yates uniform shuffle (unbiased, non-destructive).
 */
export function uniformShuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

let memoryStorage: Record<string, string> = {};

export function getStorageItem(key: string): string | null {
  try {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
    return memoryStorage[key] || null;
  } catch {
    return memoryStorage[key] || null;
  }
}

export function setStorageItem(key: string, value: string): void {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value);
    }
    memoryStorage[key] = value;
  } catch {
    memoryStorage[key] = value;
  }
}

/**
 * Reads the persistent question usage history from storage.
 * If empty, seeds automatically from existing saved StudentAttempts.
 */
export function getQuestionUsageHistory(): QuestionUsageHistory {
  try {
    const raw = getStorageItem(STORAGE_QUESTION_USAGE_KEY);
    let history: QuestionUsageHistory = raw ? JSON.parse(raw) : {};

    // Auto-seed from historical StudentAttempt[] if fresh registry
    if (Object.keys(history).length === 0) {
      const rawAttempts = getStorageItem(STORAGE_ATTEMPTS_KEY);
      if (rawAttempts) {
        const attempts: StudentAttempt[] = JSON.parse(rawAttempts);
        if (Array.isArray(attempts) && attempts.length > 0) {
          history = seedHistoryFromAttempts(attempts);
          saveQuestionUsageHistory(history);
        }
      }
    }

    return history;
  } catch {
    return {};
  }
}

/**
 * Seeds usage history from past completed attempts to preserve student historical context.
 */
export function seedHistoryFromAttempts(attempts: StudentAttempt[]): QuestionUsageHistory {
  const history: QuestionUsageHistory = {};

  for (const att of attempts) {
    if (!att.questions || !Array.isArray(att.questions)) continue;
    const mode = (att.mode === 'practice' ? 'practice' : 'exam') as ExamMode;

    for (const q of att.questions) {
      if (!q || !q.id) continue;
      // Derive subject from ID prefix (e.g., 'mat-bas-1' -> 'matematicas')
      const subjectId = inferSubjectIdFromQuestion(q);
      const level = q.educationalLevel || 'Intermedio';
      const key = getUsageScopeKey(subjectId, level);

      if (!history[key]) {
        history[key] = {
          usedQuestionIds: [],
          normalizedStatements: [],
          practiceUsedCount: 0,
          examUsedCount: 0,
          cycleCount: 1,
          lastUpdated: Date.now()
        };
      }

      if (!history[key].usedQuestionIds.includes(q.id)) {
        history[key].usedQuestionIds.push(q.id);
      }
      const normText = normalizeStatement(q.text);
      if (normText && !history[key].normalizedStatements.includes(normText)) {
        history[key].normalizedStatements.push(normText);
      }
      if (mode === 'practice') {
        history[key].practiceUsedCount++;
      } else {
        history[key].examUsedCount++;
      }
    }
  }

  return history;
}

/**
 * Maps question ID prefix to NEXORA subject ID.
 */
export function inferSubjectIdFromQuestion(q: Question): string {
  const id = q.id || '';
  if (id.startsWith('mat-')) return 'matematicas';
  if (id.startsWith('len-')) return 'lengua';
  if (id.startsWith('raz-')) return 'razonamiento';
  if (id.startsWith('nat-')) return 'ciencias_naturales';
  if (id.startsWith('fis-')) return 'fisica';
  if (id.startsWith('qui-')) return 'quimica';
  if (id.startsWith('bio-')) return 'biologia';
  if (id.startsWith('ing-')) return 'ingles';
  if (id.startsWith('soc-')) return 'sociales';
  if (id.startsWith('ele-')) return 'electricidad';
  if (id.startsWith('inf-')) return 'informatica';
  if (id.startsWith('mec-')) return 'mecanica';
  return 'matematicas';
}

/**
 * Saves the updated history to localStorage safely.
 */
export function saveQuestionUsageHistory(history: QuestionUsageHistory): void {
  try {
    setStorageItem(STORAGE_QUESTION_USAGE_KEY, JSON.stringify(history));
  } catch {}
}

/**
 * Returns the Set of used question IDs and normalized texts for a given subject & level.
 */
export function getUsedQuestionsSet(
  subjectId: string,
  level?: EducationalLevel | 'Todos'
): { idSet: Set<string>; statementSet: Set<string> } {
  const history = getQuestionUsageHistory();
  const idSet = new Set<string>();
  const statementSet = new Set<string>();

  if (level && level !== 'Todos') {
    const key = getUsageScopeKey(subjectId, level);
    const entry = history[key];
    if (entry) {
      entry.usedQuestionIds.forEach(id => idSet.add(id));
      entry.normalizedStatements.forEach(s => statementSet.add(s));
    }
  } else {
    // If 'Todos', combine all levels for this subject
    const prefix = `${subjectId}__`;
    for (const [k, entry] of Object.entries(history)) {
      if (k.startsWith(prefix)) {
        entry.usedQuestionIds.forEach(id => idSet.add(id));
        entry.normalizedStatements.forEach(s => statementSet.add(s));
      }
    }
  }

  return { idSet, statementSet };
}

/**
 * Records newly selected questions in persistent storage for the given subject, level, and mode.
 * Both Practice and Exam share this registry to prevent cross-modal repetition.
 */
export function recordQuestionsUsage(
  subjectId: string,
  level: EducationalLevel | 'Todos',
  questions: Question[],
  mode: ExamMode
): void {
  if (!questions || questions.length === 0) return;
  const history = getQuestionUsageHistory();

  // Group questions by their specific level to store with precise scope
  const byLevel: Record<string, Question[]> = {};
  for (const q of questions) {
    const qLevel = q.educationalLevel || (level !== 'Todos' ? level : 'Intermedio');
    if (!byLevel[qLevel]) byLevel[qLevel] = [];
    byLevel[qLevel].push(q);
  }

  for (const [qLevel, qList] of Object.entries(byLevel)) {
    const key = getUsageScopeKey(subjectId, qLevel as EducationalLevel);
    if (!history[key]) {
      history[key] = {
        usedQuestionIds: [],
        normalizedStatements: [],
        practiceUsedCount: 0,
        examUsedCount: 0,
        cycleCount: 1,
        lastUpdated: Date.now()
      };
    }

    const entry = history[key];
    for (const q of qList) {
      if (!entry.usedQuestionIds.includes(q.id)) {
        entry.usedQuestionIds.push(q.id);
      }
      const normText = normalizeStatement(q.text);
      if (normText && !entry.normalizedStatements.includes(normText)) {
        entry.normalizedStatements.push(normText);
      }
    }

    if (mode === 'practice') {
      entry.practiceUsedCount += qList.length;
    } else {
      entry.examUsedCount += qList.length;
    }
    entry.lastUpdated = Date.now();
  }

  saveQuestionUsageHistory(history);
}

/**
 * Voluntarily resets the variety cycle for a subject and educational level.
 * Preserves past student attempts while allowing the pool to be explored again fresh.
 */
export function resetVarietyCycle(
  subjectId: string,
  level?: EducationalLevel | 'Todos'
): { resetCount: number; newCycle: number } {
  const history = getQuestionUsageHistory();
  let resetCount = 0;
  let newCycle = 1;

  if (level && level !== 'Todos') {
    const key = getUsageScopeKey(subjectId, level);
    if (history[key]) {
      resetCount = history[key].usedQuestionIds.length;
      newCycle = (history[key].cycleCount || 1) + 1;
      history[key].usedQuestionIds = [];
      history[key].normalizedStatements = [];
      history[key].cycleCount = newCycle;
      history[key].lastUpdated = Date.now();
    }
  } else {
    const prefix = `${subjectId}__`;
    for (const [k, entry] of Object.entries(history)) {
      if (k.startsWith(prefix)) {
        resetCount += entry.usedQuestionIds.length;
        entry.usedQuestionIds = [];
        entry.normalizedStatements = [];
        entry.cycleCount = (entry.cycleCount || 1) + 1;
        newCycle = entry.cycleCount;
        entry.lastUpdated = Date.now();
      }
    }
  }

  saveQuestionUsageHistory(history);
  return { resetCount, newCycle };
}

/**
 * Returns current variety metrics for UI display and decision making.
 */
export function getVarietyStatus(
  subjectId: string,
  rawPool: Question[],
  level?: EducationalLevel | 'Todos',
  difficulty?: 'Fácil' | 'Intermedio' | 'Desafiante' | 'Todas'
): VarietyStatus {
  let pool = [...rawPool];
  if (level && level !== 'Todos') {
    pool = pool.filter(q => q.educationalLevel === level);
  }
  if (difficulty && difficulty !== 'Todas') {
    pool = pool.filter(q => q.difficulty === difficulty);
  }

  const { idSet, statementSet } = getUsedQuestionsSet(subjectId, level);

  let unseenCount = 0;
  for (const q of pool) {
    const norm = normalizeStatement(q.text);
    if (!idSet.has(q.id) && !statementSet.has(norm)) {
      unseenCount++;
    }
  }

  const seenCount = pool.length - unseenCount;
  const history = getQuestionUsageHistory();
  const key = getUsageScopeKey(subjectId, level);
  const cycleCount = history[key]?.cycleCount || 1;

  return {
    subjectId,
    level: level || 'Todos',
    totalInPool: pool.length,
    unseenAvailable: unseenCount,
    seenCount,
    cycleCount,
    isExhausted: unseenCount === 0 && pool.length > 0
  };
}

/**
 * Intelligent Question Selection Engine:
 * - Strict ID and statement deduplication within the session.
 * - Separation between Practice and Exam (uses shared exclusion history).
 * - Priority for unseen questions.
 * - Graceful fallback when questions are exhausted, clearly reporting counts.
 * - No silent subject or level switching.
 */
export function selectSmartQuestions(params: {
  subjectId: string;
  pool: Question[];
  requestedCount: number;
  mode: ExamMode;
  educationalLevel?: EducationalLevel | 'Todos';
  difficulty?: 'Fácil' | 'Intermedio' | 'Desafiante' | 'Todas';
  excludeIds?: string[];
}): SmartSelectionResult {
  const {
    subjectId,
    pool: rawPool,
    requestedCount,
    mode,
    educationalLevel,
    difficulty,
    excludeIds = []
  } = params;

  // 1. Filter by level if specified
  let filtered = [...rawPool];
  if (educationalLevel && educationalLevel !== 'Todos') {
    const byLevel = filtered.filter(q => q.educationalLevel === educationalLevel);
    if (byLevel.length > 0) {
      filtered = byLevel;
    }
  }

  // 2. Filter by difficulty if specified
  if (difficulty && difficulty !== 'Todas') {
    const byDiff = filtered.filter(q => q.difficulty === difficulty);
    if (byDiff.length > 0) {
      filtered = byDiff;
    }
  }

  // 3. Strict deduplication of the pool itself (by ID and normalized statement)
  const seenIdsInFilter = new Set<string>();
  const seenStatementsInFilter = new Set<string>();
  const uniquePool: Question[] = [];

  for (const q of filtered) {
    if (!q || !q.id) continue;
    const norm = normalizeStatement(q.text);
    if (seenIdsInFilter.has(q.id) || (norm && seenStatementsInFilter.has(norm))) {
      continue;
    }
    seenIdsInFilter.add(q.id);
    if (norm) seenStatementsInFilter.add(norm);
    uniquePool.push(q);
  }

  const totalInPool = uniquePool.length;

  // 4. Retrieve persistent usage history (shared between Practice and Exam)
  const { idSet: historicallyUsedIds, statementSet: historicallyUsedStatements } = getUsedQuestionsSet(
    subjectId,
    educationalLevel
  );

  const excludeSet = new Set<string>(excludeIds);

  // 5. Partition pool into UNSEEN (fresh) vs SEEN (previously used in practice or exam)
  const unseenPool: Question[] = [];
  const seenPool: Question[] = [];

  for (const q of uniquePool) {
    if (excludeSet.has(q.id)) continue; // avoid current session conflict

    const norm = normalizeStatement(q.text);
    const isSeen = historicallyUsedIds.has(q.id) || (norm && historicallyUsedStatements.has(norm));

    if (isSeen) {
      seenPool.push(q);
    } else {
      unseenPool.push(q);
    }
  }

  // 6. Uniform random shuffle of both pools
  const shuffledUnseen = uniformShuffle(unseenPool);
  const shuffledSeen = uniformShuffle(seenPool);

  const targetCount = Math.min(requestedCount, totalInPool);
  const selected: Question[] = [];
  let unseenCount = 0;
  let recycledCount = 0;
  let message: string | undefined = undefined;
  const isExhausted = unseenPool.length === 0 && totalInPool > 0;

  if (shuffledUnseen.length >= targetCount) {
    // Ideal state: enough fresh, unseen questions exist!
    for (let i = 0; i < targetCount; i++) {
      selected.push(shuffledUnseen[i]);
      unseenCount++;
    }
  } else if (shuffledUnseen.length > 0) {
    // Partial exhaustion: take all unseen questions first, then fill remainder from seen pool
    shuffledUnseen.forEach(q => {
      selected.push(q);
      unseenCount++;
    });

    const needed = targetCount - selected.length;
    const selectedIds = new Set<string>(selected.map(q => q.id));

    for (const q of shuffledSeen) {
      if (selected.length >= targetCount) break;
      if (!selectedIds.has(q.id)) {
        selected.push(q);
        selectedIds.add(q.id);
        recycledCount++;
      }
    }

    message = `Se han seleccionado ${unseenCount} preguntas nuevas y ${recycledCount} preguntas de repaso para completar los ${targetCount} reactivos solicitados.`;
  } else {
    // Total exhaustion of new questions in this level/subject:
    // Inform the user, recycle with fresh random order, no duplicates within test.
    const selectedIds = new Set<string>();
    for (const q of shuffledSeen) {
      if (selected.length >= targetCount) break;
      if (!selectedIds.has(q.id)) {
        selected.push(q);
        selectedIds.add(q.id);
        recycledCount++;
      }
    }

    message = `Has completado todas las preguntas disponibles de este nivel. Se ha generado una selección aleatoria de repaso con ${recycledCount} reactivos variados.`;
  }

  // Final validation: Ensure exactly 0 duplicate IDs inside the selected questions
  const finalCheckIds = new Set<string>();
  const finalCleanQuestions: Question[] = [];
  selected.forEach((q, idx) => {
    if (!finalCheckIds.has(q.id)) {
      finalCheckIds.add(q.id);
      finalCleanQuestions.push({
        ...q,
        number: idx + 1
      });
    }
  });

  const totalUnseenRemaining = Math.max(0, unseenPool.length - unseenCount);

  return {
    selectedQuestions: finalCleanQuestions,
    actualCount: finalCleanQuestions.length,
    unseenCount,
    recycledCount,
    totalInPool,
    totalUnseenRemaining,
    isExhausted,
    message
  };
}
