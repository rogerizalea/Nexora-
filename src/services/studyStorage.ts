import { StudyLesson, StudyLessonProgress } from '../types';

export const STORAGE_STUDY_PROGRESS_KEY = 'nexora_study_progress_v1';
export const STORAGE_STUDY_FAVORITES_KEY = 'nexora_study_favorites_v1';

/**
 * Safely retrieves all stored study progress.
 */
export function getAllStudyProgress(): Record<string, StudyLessonProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_STUDY_PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Retrieves progress for a specific lesson.
 */
export function getLessonProgress(lessonId: string): StudyLessonProgress | null {
  const all = getAllStudyProgress();
  return all[lessonId] || null;
}

/**
 * Updates progress for a given lesson (read timestamp, completed state, quiz score, bookmark).
 */
export function saveLessonProgress(
  lessonId: string,
  updates: Partial<StudyLessonProgress>
): StudyLessonProgress {
  const all = getAllStudyProgress();
  const existing = all[lessonId] || {
    lessonId,
    lastReadAt: Date.now(),
    completed: false
  };

  const updated: StudyLessonProgress = {
    ...existing,
    ...updates,
    lessonId,
    lastReadAt: updates.lastReadAt || Date.now()
  };

  all[lessonId] = updated;

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_STUDY_PROGRESS_KEY, JSON.stringify(all));
    } catch (e) {
      console.warn('[NEXORA StudyStorage] Could not persist study progress:', e);
    }
  }

  return updated;
}

/**
 * Toggles bookmark status for a lesson.
 */
export function toggleLessonBookmark(lessonId: string): boolean {
  const existing = getLessonProgress(lessonId);
  const nextStatus = !(existing?.isBookmarked);
  saveLessonProgress(lessonId, { isBookmarked: nextStatus });
  return nextStatus;
}

/**
 * Returns the most recently accessed lesson.
 */
export function getMostRecentLesson(
  lessons: StudyLesson[]
): { lesson: StudyLesson; progress: StudyLessonProgress } | null {
  const all = getAllStudyProgress();
  const entries = Object.values(all).sort((a, b) => b.lastReadAt - a.lastReadAt);

  if (entries.length === 0) return null;

  for (const entry of entries) {
    const found = lessons.find(l => l.id === entry.lessonId);
    if (found) {
      return { lesson: found, progress: entry };
    }
  }

  return null;
}
