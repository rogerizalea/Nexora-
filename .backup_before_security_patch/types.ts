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

export interface UserExamState {
  studentName: string;
  mode: ExamMode;
  answers: Record<string, number>; // questionId -> selectedOptionIndex
  flagged: Record<string, boolean>; // questionId -> isFlagged
  startTime: number | null;
  endTime: number | null;
  isCompleted: boolean;
  currentQuestionIndex: number; // 0 to 29
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
}

export interface ExamBank {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  sections: Section[];
}

