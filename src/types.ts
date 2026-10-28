export type EducationalLevel = 'Básico' | 'Intermedio' | 'Bachillerato' | 'Técnico' | 'Universitario';

export interface Question {
  id: string;
  sectionId: number;
  number: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  skill: string;
  difficulty: 'Fácil' | 'Intermedio' | 'Desafiante';
  educationalLevel?: EducationalLevel;
  topic?: string;
  subtopic?: string;
}

export interface Section {
  id: number;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  questions: Question[];
}

export type ExamMode = 'exam' | 'practice';
export type AttemptMode = 'exam' | 'practice' | 'historico';
export type AppTab = 'practice' | 'exam' | 'subjects' | 'results' | 'registry' | 'forms' | 'tutor' | 'study';

export interface StudyCheckExercise {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface StudyStepExample {
  title: string;
  statement: string;
  steps: string[];
  finalAnswer: string;
}

export interface StudyLesson {
  id: string;
  subjectId: string;
  educationalLevel: EducationalLevel;
  topic: string;
  subtopic?: string;
  chapterNumber: number;
  title: string;
  summary: string;
  readingMinutes: number;
  learningObjectives: string[];
  prerequisites: string[];
  conceptualExplanation: string;
  formulaBox?: {
    title: string;
    items: { label: string; formula: string; note?: string }[];
  };
  stepByStepExamples: StudyStepExample[];
  commonMistakes: { mistake: string; correction: string; why: string }[];
  practicalApplications: { field: string; application: string }[];
  glossary: { term: string; definition: string }[];
  checkExercises: StudyCheckExercise[];
  sources?: string[];
}

export interface StudyLessonProgress {
  lessonId: string;
  lastReadAt: number;
  completed: boolean;
  quizScore?: {
    answered: number;
    correct: number;
  };
  isBookmarked?: boolean;
}

export interface UserExamState {
  studentName: string;
  mode: ExamMode;
  bankId?: string;
  answers: Record<string, number>; // questionId -> selectedOptionIndex
  flagged: Record<string, boolean>; // questionId -> isFlagged
  startTime: number | null;
  endTime: number | null;
  isCompleted: boolean;
  currentQuestionIndex: number; // 0 to 29
  isAbandoned?: boolean;
}

export interface SectionScore {
  sectionId: number;
  title: string;
  totalQuestions: number;
  correctCount: number;
  percentage: number;
  status: 'Excelente' | 'Satisfactorio' | 'En Desarrollo' | 'Requiere Refuerzo';
  color: string;
}

export interface DiagnosticAnalysis {
  totalScore: number;
  maxScore: number;
  percentage: number;
  durationSeconds: number;
  overallLevel: 'Sobresaliente' | 'Avanzado' | 'Intermedio' | 'Inicial';
  levelDescription: string;
  sectionScores: SectionScore[];
  strengths: string[];
  areasToImprove: string[];
  recommendations: string[];
}

export interface StudentAttempt {
  id: string;
  studentName: string;
  date: string;
  examId: string;
  examTitle: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  durationSeconds: number;
  overallLevel: 'Sobresaliente' | 'Avanzado' | 'Intermedio' | 'Inicial';
  sectionScores: SectionScore[];
  answers: Record<string, number>;
  questions: Question[];
  mode?: AttemptMode;
  isAbandoned?: boolean;
  isStrict?: boolean;
}

export interface ExamBank {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  sections: Section[];
}

