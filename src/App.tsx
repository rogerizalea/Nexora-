/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import { 
  BANK_STANDARD, 
  BANK_ADVANCED_DIFFICULTY,
  ALL_EXAM_BANKS, 
  generateDynamicCustomExam 
} from './data/questionBanks';
import { 
  ExamBank, 
  ExamMode, 
  DiagnosticAnalysis, 
  StudentAttempt,
  Question,
  AppTab
} from './types';
import { calculateDiagnostic } from './utils/diagnosticEvaluator';
import { soundManager } from './utils/sound';
import { musicManager } from './utils/musicManager';
import { themeManager, ThemeMode, ResolvedTheme } from './utils/themeManager';
import { recordQuestionsUsage, inferSubjectIdFromQuestion } from './services/questionEngine';
import { balanceExamBank } from './services/answerDistributionEngine';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LazyFallback, LazyErrorBoundary } from './components/LazyFallback';
import { Navbar } from './components/Navbar';
import { ExamView } from './components/ExamView';
import { GlobalMusicPlayer } from './components/GlobalMusicPlayer';
import { BottomNavBar, MainNavTab } from './components/BottomNavBar';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PWAUpdateToast } from './components/PWAUpdateToast';
import { PWAInstallGuideModal } from './components/PWAInstallGuideModal';

// Selective Lazy Loading for Non-Initial Views & Modals (Optimized for Android & Low Latency)
const ResultsView = React.lazy(() => import('./components/ResultsView').then(m => ({ default: m.ResultsView })));
const StudentRegistry = React.lazy(() => import('./components/StudentRegistry').then(m => ({ default: m.StudentRegistry })));
const GoogleFormsHub = React.lazy(() => import('./components/GoogleFormsHub').then(m => ({ default: m.GoogleFormsHub })));
const SubjectsView = React.lazy(() => import('./components/SubjectsView').then(m => ({ default: m.SubjectsView })));
const AITutorView = React.lazy(() => import('./components/AITutorView').then(m => ({ default: m.AITutorView })));
const CustomExamConfigModal = React.lazy(() => import('./components/CustomExamConfigModal').then(m => ({ default: m.CustomExamConfigModal })));
const BankSelectorModal = React.lazy(() => import('./components/BankSelectorModal').then(m => ({ default: m.BankSelectorModal })));
const ShareLinkModal = React.lazy(() => import('./components/ShareLinkModal').then(m => ({ default: m.ShareLinkModal })));
const TeacherPinModal = React.lazy(() => import('./components/TeacherPinModal').then(m => ({ default: m.TeacherPinModal })));
const StudyModeView = React.lazy(() => import('./components/StudyModeView').then(m => ({ default: m.StudyModeView })));
import { findMatchingLesson } from './data/study/studyLessonsData';
import { 
  GraduationCap, 
  FileCode, 
  Sparkles, 
  BookOpenCheck,
  CheckCircle2,
  Users,
  Layers,
  Lock,
  Share2,
  ShieldCheck,
  Bot,
  SlidersHorizontal,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

const STORAGE_FORMAL_EXAM_KEY = 'nexora_exam_formal_session_v3';
const STORAGE_PRACTICE_KEY = 'nexora_practice_session_v3';
const STORAGE_LEGACY_STATE_KEY = 'prueba_diagnostico_state_v2';
const STORAGE_ATTEMPTS_KEY = 'prueba_diagnostico_attempts_v2';
const STORAGE_BANK_KEY = 'prueba_diagnostico_bank_v2';

export interface ModeSession {
  bank: ExamBank;
  answers: Record<string, number>;
  flagged: Record<string, boolean>;
  currentIndex: number;
  startTime: number | null;
  endTime: number | null;
  isCompleted: boolean;
}

function initPracticeSession(): ModeSession {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_PRACTICE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.bank?.sections?.length > 0) {
          const hasAnswers = Object.keys(parsed.answers || {}).length > 0;
          const bank = hasAnswers || (parsed.bank as any).isAnswerDistributionBalanced
            ? parsed.bank
            : balanceExamBank(parsed.bank);

          return {
            bank,
            answers: parsed.answers || {},
            flagged: parsed.flagged || {},
            currentIndex: typeof parsed.currentIndex === 'number' ? parsed.currentIndex : 0,
            startTime: parsed.startTime || Date.now(),
            endTime: parsed.endTime || null,
            isCompleted: Boolean(parsed.isCompleted)
          };
        }
      }
    } catch {}
  }
  return {
    bank: generateDynamicCustomExam(undefined, 'practice'),
    answers: {},
    flagged: {},
    currentIndex: 0,
    startTime: Date.now(),
    endTime: null,
    isCompleted: false
  };
}

function initExamSession(): ModeSession {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_FORMAL_EXAM_KEY) || localStorage.getItem(STORAGE_LEGACY_STATE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        let bank: ExamBank | null = null;
        if (parsed?.bank?.sections?.length > 0) {
          bank = parsed.bank;
        } else if (parsed?.bankId) {
          bank = ALL_EXAM_BANKS.find(b => b.id === parsed.bankId) || null;
        }
        if (bank) {
          const hasAnswers = Object.keys(parsed.answers || {}).length > 0;
          const effectiveBank = hasAnswers || (bank as any).isAnswerDistributionBalanced
            ? bank
            : balanceExamBank(bank);

          return {
            bank: effectiveBank,
            answers: parsed.answers || {},
            flagged: parsed.flagged || {},
            currentIndex: typeof parsed.currentIndex === 'number' ? parsed.currentIndex : 0,
            startTime: parsed.startTime || Date.now(),
            endTime: parsed.endTime || null,
            isCompleted: Boolean(parsed.isCompleted)
          };
        }
      }
    } catch {}
  }
  return {
    bank: generateDynamicCustomExam(undefined, 'exam'),
    answers: {},
    flagged: {},
    currentIndex: 0,
    startTime: Date.now(),
    endTime: null,
    isCompleted: false
  };
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<AppTab>('exam');
  const [examMode, setExamMode] = useState<ExamMode>('exam');
  const [pendingModeChange, setPendingModeChange] = useState<ExamMode | null>(null);
  const [studentName, setStudentName] = useState<string>('Estudiante');

  // Dual isolated sessions: Practice and Exam maintain independent non-repeating banks & states
  const [practiceSession, setPracticeSession] = useState<ModeSession>(initPracticeSession);
  const [examSession, setExamSession] = useState<ModeSession>(initExamSession);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [attempts, setAttempts] = useState<StudentAttempt[]>([]);
  const [isBankModalOpen, setIsBankModalOpen] = useState<boolean>(false);
  
  // URL Protection & Teacher Session (Verified Server-Side)
  const [isStudentMode, setIsStudentMode] = useState<boolean>(false);
  const [isStrictParamActive, setIsStrictParamActive] = useState<boolean>(false);
  const [isTeacherAuthenticated, setIsTeacherAuthenticated] = useState<boolean>(false);
  const [teacherSessionToken, setTeacherSessionToken] = useState<string | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(false);
  const [targetProtectedFeature, setTargetProtectedFeature] = useState<string>('el Panel Docente');

  // Custom Exam & Subjects State
  const [isCustomExamModalOpen, setIsCustomExamModalOpen] = useState<boolean>(false);
  const [customExamInitialSubject, setCustomExamInitialSubject] = useState<string>('matematicas');
  const [isFormalExamBlockedModalOpen, setIsFormalExamBlockedModalOpen] = useState<boolean>(false);
  const [pendingTargetNav, setPendingTargetNav] = useState<AppTab | 'practice' | null>(null);
  const [studyContext, setStudyContext] = useState<{ subjectId?: string; lessonId?: string; returnTab?: AppTab } | null>(null);

  // Global Theme Mode State
  const [themeMode, setThemeMode] = useState<ThemeMode>(themeManager.getTheme());
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(themeManager.getResolvedTheme());

  useEffect(() => {
    const unsubscribe = themeManager.subscribe((theme, resolved) => {
      setThemeMode(theme);
      setResolvedTheme(resolved);
    });
    return unsubscribe;
  }, []);

  // Mobile Audio Unlock on first touch or click
  useEffect(() => {
    const handleFirstGesture = () => {
      try {
        musicManager.initAudio();
      } catch {}
    };
    window.addEventListener('touchstart', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('pointerdown', handleFirstGesture, { once: true, passive: true });
    return () => {
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('pointerdown', handleFirstGesture);
    };
  }, []);

  // Safe mode recovery listener (triggered by ErrorBoundary if persistent render glitch occurs)
  useEffect(() => {
    const handleSafeMode = () => {
      console.warn('[NEXORA] Activating Safe Mode navigation recovery...');
      setCurrentTab('subjects');
    };
    window.addEventListener('nexora-safe-mode', handleSafeMode);
    return () => window.removeEventListener('nexora-safe-mode', handleSafeMode);
  }, []);

  // Robust detection of URL parameters (?mode=student, ?view=practice, ?bank=..., ?strict=true, etc.)
  // Handles search params, hash query strings, and encoded links
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const searchParams = new URLSearchParams(window.location.search);
      let modeParam = searchParams.get('mode');
      let bankParam = searchParams.get('bank');
      let strictParam = searchParams.get('strict');
      let viewParam = searchParams.get('view') || searchParams.get('tab');

      // Check hash fragment if present (e.g., /#/?mode=student or #?mode=student)
      if (!modeParam && window.location.hash.includes('?')) {
        const hashQuery = window.location.hash.substring(window.location.hash.indexOf('?') + 1);
        const hashParams = new URLSearchParams(hashQuery);
        modeParam = hashParams.get('mode') || modeParam;
        bankParam = hashParams.get('bank') || bankParam;
        strictParam = hashParams.get('strict') || strictParam;
        viewParam = hashParams.get('view') || hashParams.get('tab') || viewParam;
      }

      // Regex fallback across full location.href
      if (!modeParam && /mode=student/i.test(window.location.href)) {
        modeParam = 'student';
      }
      if (!modeParam && /mode=practice/i.test(window.location.href)) {
        modeParam = 'practice';
      }
      if (!viewParam && /view=practice/i.test(window.location.href)) {
        viewParam = 'practice';
      }
      if (!bankParam) {
        const matchBank = window.location.href.match(/bank=([a-zA-Z0-9_-]+)/);
        if (matchBank) bankParam = matchBank[1];
      }
      if (!strictParam && /strict=true/i.test(window.location.href)) {
        strictParam = 'true';
      }

      // Public student access: protects teacher registry/scripts, but leaves Practice 100% accessible
      if (modeParam === 'student') {
        setIsStudentMode(true);
        if (strictParam === 'true') {
          setIsStrictParamActive(true);
        }
        if (viewParam === 'practice') {
          setExamMode('practice');
          setCurrentTab('practice');
        } else {
          setCurrentTab('exam');
          setExamMode('exam');
        }
      } else if (modeParam === 'practice' || viewParam === 'practice') {
        setExamMode('practice');
        setCurrentTab('practice');
      }

      if (bankParam) {
        const match = ALL_EXAM_BANKS.find(b => b.id === bankParam);
        if (match) {
          setExamSession(prev => ({ ...prev, bank: match }));
          setPracticeSession(prev => ({ ...prev, bank: match }));
        }
      }
    } catch (err) {
      console.warn('Error reading URL parameters:', err);
    }
  }, []);

  // Restore saved attempts from localStorage with backwards compatibility
  useEffect(() => {
    try {
      const savedAttempts = localStorage.getItem(STORAGE_ATTEMPTS_KEY);
      if (savedAttempts) {
        const parsed: any[] = JSON.parse(savedAttempts);
        if (Array.isArray(parsed)) {
          // Backward compatibility: classify legacy attempts without mode as 'historico'
          const sanitizedAttempts: StudentAttempt[] = parsed.map(att => ({
            ...att,
            mode: (att.mode === 'exam' || att.mode === 'practice' || att.mode === 'historico') 
              ? att.mode 
              : 'historico'
          }));
          setAttempts(sanitizedAttempts);
        }
      }
    } catch {}
  }, []);

  // Save attempts to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_ATTEMPTS_KEY, JSON.stringify(attempts));
    } catch {}
  }, [attempts]);

  // Check active server teacher session on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const savedToken = sessionStorage.getItem('nexora_teacher_session_token');
      if (savedToken) {
        fetch('/api/docente/session', {
          headers: {
            'Authorization': `Bearer ${savedToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data && data.authenticated) {
              setIsTeacherAuthenticated(true);
              setTeacherSessionToken(savedToken);
            } else {
              sessionStorage.removeItem('nexora_teacher_session_token');
              setIsTeacherAuthenticated(false);
              setTeacherSessionToken(null);
            }
          })
          .catch(() => {
            setIsTeacherAuthenticated(false);
          });
      }
    } catch {}
  }, []);

  // Active session references
  const activeSession = examMode === 'practice' ? practiceSession : examSession;
  const currentBank = activeSession.bank;
  const currentIndex = activeSession.currentIndex;
  const answers = activeSession.answers;
  const flagged = activeSession.flagged;
  const startTime = activeSession.startTime;
  const endTime = activeSession.endTime;
  const isCompleted = activeSession.isCompleted;

  const updateActiveSession = useCallback((updater: (prev: ModeSession) => ModeSession) => {
    if (examMode === 'practice') {
      setPracticeSession(updater);
    } else {
      setExamSession(updater);
    }
  }, [examMode]);

  const setAnswers = useCallback((newAnswersOrFn: Record<string, number> | ((prev: Record<string, number>) => Record<string, number>)) => {
    updateActiveSession(prev => ({
      ...prev,
      answers: typeof newAnswersOrFn === 'function' ? newAnswersOrFn(prev.answers) : newAnswersOrFn
    }));
  }, [updateActiveSession]);

  const setFlagged = useCallback((newFlaggedOrFn: Record<string, boolean> | ((prev: Record<string, boolean>) => Record<string, boolean>)) => {
    updateActiveSession(prev => ({
      ...prev,
      flagged: typeof newFlaggedOrFn === 'function' ? newFlaggedOrFn(prev.flagged) : newFlaggedOrFn
    }));
  }, [updateActiveSession]);

  const setCurrentIndex = useCallback((newIndexOrFn: number | ((prev: number) => number)) => {
    updateActiveSession(prev => ({
      ...prev,
      currentIndex: typeof newIndexOrFn === 'function' ? newIndexOrFn(prev.currentIndex) : newIndexOrFn
    }));
  }, [updateActiveSession]);

  // Persist Practice Session
  useEffect(() => {
    try {
      const payload = {
        ...practiceSession,
        studentName
      };
      localStorage.setItem(STORAGE_PRACTICE_KEY, JSON.stringify(payload));
    } catch {}
  }, [practiceSession, studentName]);

  // Persist Exam Session
  useEffect(() => {
    try {
      const payload = {
        ...examSession,
        studentName
      };
      localStorage.setItem(STORAGE_FORMAL_EXAM_KEY, JSON.stringify(payload));
    } catch {}
  }, [examSession, studentName]);

  // Timer tick
  useEffect(() => {
    if (isCompleted || !startTime) return;

    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, isCompleted]);

  const allQuestions = useMemo(() => {
    return currentBank.sections.flatMap(s => s.questions);
  }, [currentBank.sections]);

  const answeredCount = useMemo(() => {
    return Object.keys(answers).length;
  }, [answers]);

  const isFormalExamActive = examMode === 'exam' && !isCompleted && startTime !== null && answeredCount > 0;

  const currentAnalysis: DiagnosticAnalysis = useMemo(() => {
    return calculateDiagnostic(
      currentBank.sections,
      answers,
      startTime,
      endTime || Date.now()
    );
  }, [currentBank.sections, answers, startTime, endTime]);

  const handleFinishExam = () => {
    const end = Date.now();
    updateActiveSession(prev => ({
      ...prev,
      endTime: end,
      isCompleted: true
    }));
    soundManager.playComplete();

    // Trigger celebration confetti (dynamically imported on demand)
    try {
      import('canvas-confetti').then((m) => {
        const confettiFn = m.default || m;
        confettiFn({
          particleCount: 110,
          spread: 75,
          origin: { y: 0.6 }
        });
      }).catch(() => {});
    } catch {}

    // Calculate score and register the student attempt
    const finalAnalysis = calculateDiagnostic(
      currentBank.sections,
      answers,
      startTime,
      end
    );

    const newAttempt: StudentAttempt = {
      id: `att-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      studentName: studentName.trim() || 'Estudiante',
      date: new Date().toISOString(),
      examId: currentBank.id,
      examTitle: currentBank.title,
      totalScore: finalAnalysis.totalScore,
      maxScore: finalAnalysis.maxScore,
      percentage: finalAnalysis.percentage,
      durationSeconds: finalAnalysis.durationSeconds,
      overallLevel: finalAnalysis.overallLevel,
      sectionScores: finalAnalysis.sectionScores,
      answers: { ...answers },
      questions: allQuestions,
      mode: examMode,
      isAbandoned: false,
      isStrict: isStudentMode && isStrictParamActive
    };

    setAttempts(prev => [newAttempt, ...prev]);

    // Record questions in shared usage history to guarantee cross-modal separation
    if (allQuestions.length > 0) {
      const bankSubjectId = (currentBank as any).subjectId || inferSubjectIdFromQuestion(allQuestions[0]);
      const bankLevel = (currentBank as any).educationalLevel || allQuestions[0]?.educationalLevel || 'Todos';
      recordQuestionsUsage(bankSubjectId, bankLevel, allQuestions, examMode);
    }

    setCurrentTab('results');
  };

  const handleResetExam = () => {
    if (window.confirm('¿Deseas reiniciar todas las respuestas y comenzar de nuevo la prueba?')) {
      updateActiveSession(prev => ({
        ...prev,
        bank: balanceExamBank(prev.bank),
        answers: {},
        flagged: {},
        startTime: Date.now(),
        endTime: null,
        isCompleted: false,
        currentIndex: 0
      }));
      setElapsedSeconds(0);
      setCurrentTab(examMode === 'practice' ? 'practice' : 'exam');
    }
  };

  const handleSelectBank = (bank: ExamBank) => {
    if (isFormalExamActive) {
      setIsFormalExamBlockedModalOpen(true);
      return;
    }

    const balanced = balanceExamBank(bank);

    updateActiveSession(prev => ({
      ...prev,
      bank: balanced,
      answers: {},
      flagged: {},
      startTime: Date.now(),
      endTime: null,
      isCompleted: false,
      currentIndex: 0
    }));

    try {
      localStorage.setItem(STORAGE_BANK_KEY, JSON.stringify(balanced));
    } catch {}

    setElapsedSeconds(0);
    setCurrentTab(examMode === 'practice' ? 'practice' : 'exam');
  };

  // Secure mode transition with zero-lag and preserved state
  const handleRequestModeChange = (targetMode: ExamMode) => {
    if (targetMode === examMode) {
      setCurrentTab(targetMode);
      return;
    }

    // Protection of active formal evaluation with answers in progress: prompt student to save progress
    if (isFormalExamActive && targetMode === 'practice') {
      setPendingTargetNav('practice');
      setIsFormalExamBlockedModalOpen(true);
      return;
    }

    applyModeChange(targetMode, false);
  };

  const applyModeChange = (targetMode: ExamMode, recordAbandoned: boolean) => {
    if (recordAbandoned && examMode === 'exam' && Object.keys(answers).length > 0 && !isCompleted) {
      // Document the abandoned exam attempt without counting it as completed official score
      const abandonedAttempt: StudentAttempt = {
        id: `att-abandoned-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        studentName: studentName.trim() || 'Estudiante',
        date: new Date().toISOString(),
        examId: currentBank.id,
        examTitle: `${currentBank.title} (Abandonado)`,
        totalScore: 0,
        maxScore: allQuestions.length,
        percentage: 0,
        durationSeconds: startTime ? Math.max(1, Math.round((Date.now() - startTime) / 1000)) : 0,
        overallLevel: 'Inicial',
        sectionScores: [],
        answers: { ...answers },
        questions: allQuestions,
        mode: 'exam',
        isAbandoned: true,
        isStrict: isStudentMode && isStrictParamActive
      };
      setAttempts(prev => [abandonedAttempt, ...prev]);
    }

    // Clean, instant transition preserving isolated state for each mode
    setExamMode(targetMode);
    setCurrentTab(targetMode);
    setPendingModeChange(null);
  };

  const handleRetryIncorrectOnly = (incorrectQuestionIds: string[]) => {
    setPracticeSession(prev => {
      const next = { ...prev.answers };
      incorrectQuestionIds.forEach(id => {
        delete next[id];
      });
      const firstIncorrectIndex = prev.bank.sections
        .flatMap(s => s.questions)
        .findIndex(q => incorrectQuestionIds.includes(q.id));

      return {
        ...prev,
        answers: next,
        isCompleted: false,
        currentIndex: firstIncorrectIndex !== -1 ? firstIncorrectIndex : 0
      };
    });

    setExamMode('practice');
    setCurrentTab('practice');
  };

  // Student Registry management
  const handleDeleteAttempt = (id: string) => {
    if (window.confirm('¿Eliminar este registro de evaluación?')) {
      setAttempts(prev => prev.filter(a => a.id !== id));
    }
  };

  const handleClearAllAttempts = () => {
    if (window.confirm('¿Seguro que deseas eliminar todos los registros de estudiantes? Esta acción no se puede deshacer.')) {
      setAttempts([]);
      localStorage.removeItem(STORAGE_ATTEMPTS_KEY);
    }
  };

  const handleLoadSampleStudents = () => {
    const now = Date.now();
    const sampleAttempts: StudentAttempt[] = [
      {
        id: `att-sample-1`,
        studentName: 'Valentina Mendoza',
        date: new Date(now - 3600000 * 2).toISOString(),
        examId: BANK_STANDARD.id,
        examTitle: BANK_STANDARD.title,
        totalScore: 28,
        maxScore: 30,
        percentage: 93,
        durationSeconds: 1140,
        overallLevel: 'Sobresaliente',
        sectionScores: [
          { sectionId: 1, title: 'Matemáticas', totalQuestions: 10, correctCount: 9, percentage: 90, status: 'Excelente', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
          { sectionId: 2, title: 'Lenguaje', totalQuestions: 10, correctCount: 10, percentage: 100, status: 'Excelente', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
          { sectionId: 3, title: 'Razonamiento', totalQuestions: 10, correctCount: 9, percentage: 90, status: 'Excelente', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        ],
        answers: {},
        questions: allQuestions
      },
      {
        id: `att-sample-2`,
        studentName: 'Mateo Morales',
        date: new Date(now - 3600000 * 5).toISOString(),
        examId: BANK_STANDARD.id,
        examTitle: BANK_STANDARD.title,
        totalScore: 25,
        maxScore: 30,
        percentage: 83,
        durationSeconds: 1320,
        overallLevel: 'Avanzado',
        sectionScores: [
          { sectionId: 1, title: 'Matemáticas', totalQuestions: 10, correctCount: 8, percentage: 80, status: 'Satisfactorio', color: 'text-blue-700 bg-blue-50 border-blue-200' },
          { sectionId: 2, title: 'Lenguaje', totalQuestions: 10, correctCount: 9, percentage: 90, status: 'Excelente', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
          { sectionId: 3, title: 'Razonamiento', totalQuestions: 10, correctCount: 8, percentage: 80, status: 'Satisfactorio', color: 'text-blue-700 bg-blue-50 border-blue-200' },
        ],
        answers: {},
        questions: allQuestions
      },
      {
        id: `att-sample-3`,
        studentName: 'Camila Silva',
        date: new Date(now - 3600000 * 9).toISOString(),
        examId: 'stem-sciences-30',
        examTitle: 'Diagnóstico en Ciencias y Medio Ambiente',
        totalScore: 29,
        maxScore: 30,
        percentage: 97,
        durationSeconds: 980,
        overallLevel: 'Sobresaliente',
        sectionScores: [
          { sectionId: 1, title: 'Biología', totalQuestions: 10, correctCount: 10, percentage: 100, status: 'Excelente', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
          { sectionId: 2, title: 'Física y Química', totalQuestions: 10, correctCount: 10, percentage: 100, status: 'Excelente', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
          { sectionId: 3, title: 'Lógica Científica', totalQuestions: 10, correctCount: 9, percentage: 90, status: 'Excelente', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        ],
        answers: {},
        questions: allQuestions
      },
      {
        id: `att-sample-4`,
        studentName: 'Santiago Herrera',
        date: new Date(now - 86400000).toISOString(),
        examId: BANK_STANDARD.id,
        examTitle: BANK_STANDARD.title,
        totalScore: 21,
        maxScore: 30,
        percentage: 70,
        durationSeconds: 1540,
        overallLevel: 'Avanzado',
        sectionScores: [
          { sectionId: 1, title: 'Matemáticas', totalQuestions: 10, correctCount: 6, percentage: 60, status: 'En Desarrollo', color: 'text-amber-700 bg-amber-50 border-amber-200' },
          { sectionId: 2, title: 'Lenguaje', totalQuestions: 10, correctCount: 8, percentage: 80, status: 'Satisfactorio', color: 'text-blue-700 bg-blue-50 border-blue-200' },
          { sectionId: 3, title: 'Razonamiento', totalQuestions: 10, correctCount: 7, percentage: 70, status: 'Satisfactorio', color: 'text-blue-700 bg-blue-50 border-blue-200' },
        ],
        answers: {},
        questions: allQuestions
      },
      {
        id: `att-sample-5`,
        studentName: 'Lucía Fernández',
        date: new Date(now - 86400000 * 2).toISOString(),
        examId: 'humanities-culture-30',
        examTitle: 'Diagnóstico en Humanidades y Cultura General',
        totalScore: 27,
        maxScore: 30,
        percentage: 90,
        durationSeconds: 1210,
        overallLevel: 'Sobresaliente',
        sectionScores: [
          { sectionId: 1, title: 'Geografía', totalQuestions: 10, correctCount: 9, percentage: 90, status: 'Excelente', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
          { sectionId: 2, title: 'Historia', totalQuestions: 10, correctCount: 9, percentage: 90, status: 'Excelente', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
          { sectionId: 3, title: 'Pensamiento Crítico', totalQuestions: 10, correctCount: 9, percentage: 90, status: 'Excelente', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        ],
        answers: {},
        questions: allQuestions
      }
    ];

    setAttempts(prev => [...sampleAttempts, ...prev]);
  };

  const handleViewStudentExam = (attempt: StudentAttempt) => {
    setStudentName(attempt.studentName);
    updateActiveSession(prev => ({
      ...prev,
      answers: attempt.answers || {},
      isCompleted: true
    }));
    setCurrentTab('results');
  };

  const handleRequestTeacherUnlock = (featureName: string) => {
    setTargetProtectedFeature(featureName);
    setIsPinModalOpen(true);
  };

  const handleTeacherUnlockSuccess = (token: string) => {
    setIsTeacherAuthenticated(true);
    setTeacherSessionToken(token);
    setIsStudentMode(false);
    if (targetProtectedFeature.includes('Registro')) {
      setCurrentTab('registry');
    } else if (targetProtectedFeature.includes('Apps Script') || targetProtectedFeature.includes('Script')) {
      setCurrentTab('forms');
    }
  };

  const handleTeacherLogout = async () => {
    try {
      await fetch('/api/docente/logout', { method: 'POST' });
    } catch {}
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem('nexora_teacher_session_token');
      } catch {}
    }
    setIsTeacherAuthenticated(false);
    setTeacherSessionToken(null);
    if (currentTab === 'registry' || currentTab === 'forms') {
      setCurrentTab('exam');
    }
  };

  const handleRestoreAttempts = (restored: StudentAttempt[]) => {
    setAttempts((prev) => {
      const existingIds = new Set(prev.map((a) => a.id));
      const merged = [...prev];
      for (const item of restored) {
        if (!existingIds.has(item.id)) {
          merged.push(item);
          existingIds.add(item.id);
        }
      }
      return merged;
    });
  };
  const handleStartCustomExam = (customBank: ExamBank, mode: ExamMode) => {
    soundManager.playSelect();
    const balanced = balanceExamBank(customBank);
    const newSession: ModeSession = {
      bank: balanced,
      answers: {},
      flagged: {},
      currentIndex: 0,
      startTime: Date.now(),
      endTime: null,
      isCompleted: false
    };

    if (mode === 'practice') {
      setPracticeSession(newSession);
    } else {
      setExamSession(newSession);
    }

    try {
      localStorage.setItem(STORAGE_BANK_KEY, JSON.stringify(balanced));
    } catch {}

    setExamMode(mode);
    setElapsedSeconds(0);
    setCurrentTab(mode === 'practice' ? 'practice' : 'exam');

    const allCustomQuestions = customBank.sections.flatMap(s => s.questions);
    if (allCustomQuestions.length > 0) {
      const bankSubjectId = (customBank as any).subjectId || inferSubjectIdFromQuestion(allCustomQuestions[0]);
      const bankLevel = (customBank as any).educationalLevel || allCustomQuestions[0]?.educationalLevel || 'Todos';
      recordQuestionsUsage(bankSubjectId, bankLevel, allCustomQuestions, mode);
    }
  };

  const handleSelectSubjectForExam = (subjectId: string) => {
    if (isFormalExamActive) {
      setIsFormalExamBlockedModalOpen(true);
      return;
    }
    soundManager.playSelect();
    setCustomExamInitialSubject(subjectId);
    setIsCustomExamModalOpen(true);
  };

  const getActiveBottomNavTab = (tab: AppTab): MainNavTab => {
    switch (tab) {
      case 'practice': return 'practice';
      case 'exam': return 'exam';
      case 'subjects': return 'materias';
      case 'results': return 'pruebas';
      case 'tutor': return 'tutor';
      case 'registry': return 'registro';
      case 'forms': return 'forms';
      case 'study': return 'study';
      default: return 'exam';
    }
  };

  const handleOpenStudyFromExam = useCallback((subjectId: string, topic?: string) => {
    const matched = findMatchingLesson(subjectId, topic);
    setStudyContext({
      subjectId,
      lessonId: matched?.id,
      returnTab: currentTab
    });
    setCurrentTab('study');
  }, [currentTab]);

  const handleReturnFromStudy = useCallback(() => {
    const target = studyContext?.returnTab || 'practice';
    setCurrentTab(target);
  }, [studyContext]);

  const handleSelectBottomNavTab = (navTab: MainNavTab) => {
    soundManager.playSelect();
    if (isFormalExamActive && navTab !== 'exam') {
      const targetAppTab: AppTab | 'practice' = 
        navTab === 'practice' ? 'practice' :
        navTab === 'materias' ? 'subjects' :
        navTab === 'pruebas' ? 'results' :
        navTab === 'tutor' ? 'tutor' :
        navTab === 'study' ? 'study' : 'practice';
      setPendingTargetNav(targetAppTab);
      setIsFormalExamBlockedModalOpen(true);
      return;
    }
    switch (navTab) {
      case 'practice':
        handleRequestModeChange('practice');
        break;
      case 'exam':
        handleRequestModeChange('exam');
        break;
      case 'materias':
        setCurrentTab('subjects');
        break;
      case 'pruebas':
        setCurrentTab('results');
        break;
      case 'tutor':
        setCurrentTab('tutor');
        break;
      case 'study':
        setCurrentTab('study');
        break;
      case 'registro':
        if (!isTeacherAuthenticated) {
          handleRequestTeacherUnlock('el Registro de Estudiantes');
        } else {
          setCurrentTab('registry');
        }
        break;
      case 'forms':
        if (!isTeacherAuthenticated) {
          handleRequestTeacherUnlock('Google Apps Script');
        } else {
          setCurrentTab('forms');
        }
        break;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 overflow-x-hidden w-full max-w-full transition-colors duration-200">
        {/* Navigation Header */}
        <Navbar
          currentTab={currentTab}
          setCurrentTab={(tab) => {
            if (isFormalExamActive && tab !== 'exam') {
              setPendingTargetNav(tab);
              setIsFormalExamBlockedModalOpen(true);
              return;
            }
            if ((tab === 'registry' || tab === 'forms') && !isTeacherAuthenticated) {
              handleRequestTeacherUnlock(tab === 'registry' ? 'el Registro de Estudiantes' : 'Google Apps Script');
              return;
            }
            if (tab === 'practice') {
              setExamMode('practice');
            } else if (tab === 'exam') {
              setExamMode('exam');
            }
            setCurrentTab(tab);
          }}
          examMode={examMode}
          setExamMode={setExamMode}
          studentName={studentName}
          setStudentName={setStudentName}
          answeredCount={answeredCount}
          totalQuestions={allQuestions.length}
          elapsedSeconds={elapsedSeconds}
          isExamRunning={!isCompleted && startTime !== null}
          isCompleted={isCompleted}
          attemptsCount={attempts.length}
          activeBankTitle={currentBank.title}
          isStudentMode={isStudentMode}
          isTeacherAuthenticated={isTeacherAuthenticated}
          onOpenBankSelector={() => {
            if (isFormalExamActive) {
              setIsFormalExamBlockedModalOpen(true);
              return;
            }
            setIsBankModalOpen(true);
          }}
          onOpenShareModal={() => setIsShareModalOpen(true)}
          onOpenCustomExamModal={() => {
            if (isFormalExamActive) {
              setIsFormalExamBlockedModalOpen(true);
              return;
            }
            setCustomExamInitialSubject('matematicas');
            setIsCustomExamModalOpen(true);
          }}
          onRequestTeacherUnlock={handleRequestTeacherUnlock}
          onLogoutTeacher={handleTeacherLogout}
          onResetExam={handleResetExam}
          currentTheme={themeMode}
          resolvedTheme={resolvedTheme}
          onSetTheme={(theme) => themeManager.setTheme(theme)}
        />

        {/* Main Content Area with adequate bottom clearance for floating docks */}
        <main className="flex-1 w-full max-w-full overflow-x-hidden pb-28 md:pb-12">
        {(currentTab === 'exam' || currentTab === 'practice') && (
          <ExamView
            sections={currentBank.sections}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            answers={answers}
            setAnswers={setAnswers}
            flagged={flagged}
            setFlagged={setFlagged}
            examMode={examMode}
            setExamMode={(mode) => handleRequestModeChange(mode)}
            onRequestModeChange={handleRequestModeChange}
            isModeLocked={isStudentMode && isStrictParamActive}
            activeBankTitle={currentBank.title}
            activeBankSubtitle={currentBank.subtitle}
            currentBankId={currentBank.id}
            onSelectBank={handleSelectBank}
            isStudentMode={isStudentMode}
            onOpenBankSelector={() => setIsBankModalOpen(true)}
            studentName={studentName}
            setStudentName={setStudentName}
            onFinishExam={handleFinishExam}
            onOpenStudyTopic={handleOpenStudyFromExam}
          />
        )}

        {currentTab === 'results' && (
          <LazyErrorBoundary fallbackLabel="Resultados y Diagnóstico">
            <Suspense fallback={<LazyFallback label="Cargando Resultados y Diagnóstico..." />}>
              <ResultsView
                analysis={currentAnalysis}
                sections={currentBank.sections}
                answers={answers}
                studentName={studentName}
                onResetExam={handleResetExam}
                onRetryIncorrectOnly={handleRetryIncorrectOnly}
                onStartAdvancedChallenge={() => handleSelectBank(BANK_ADVANCED_DIFFICULTY)}
              />
            </Suspense>
          </LazyErrorBoundary>
        )}

        {currentTab === 'registry' && (
          isTeacherAuthenticated ? (
            <LazyErrorBoundary fallbackLabel="Registro de Estudiantes">
              <Suspense fallback={<LazyFallback label="Cargando Registro de Estudiantes..." />}>
                <StudentRegistry
                  attempts={attempts}
                  onDeleteAttempt={handleDeleteAttempt}
                  onClearAllAttempts={handleClearAllAttempts}
                  onLoadSampleStudents={handleLoadSampleStudents}
                  onViewStudentExam={handleViewStudentExam}
                  onOpenShareModal={() => setIsShareModalOpen(true)}
                  onRestoreAttempts={handleRestoreAttempts}
                />
              </Suspense>
            </LazyErrorBoundary>
          ) : (
            <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-200 shadow-xl text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                <Lock className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Acceso Docente Requerido</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                El Registro de Estudiantes y sus calificaciones están protegidos por el servidor. Inicia sesión para continuar.
              </p>
              <button
                onClick={() => handleRequestTeacherUnlock('el Registro de Estudiantes')}
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 shadow-md transition-all cursor-pointer"
              >
                Ingresar Clave Docente
              </button>
            </div>
          )
        )}

        {currentTab === 'forms' && (
          isTeacherAuthenticated ? (
            <LazyErrorBoundary fallbackLabel="Google Forms Hub">
              <Suspense fallback={<LazyFallback label="Cargando Centro de Google Forms y Apps Script..." />}>
                <GoogleFormsHub currentBank={currentBank} />
              </Suspense>
            </LazyErrorBoundary>
          ) : (
            <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-200 shadow-xl text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                <Lock className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Módulo Protegido</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                La configuración de scripts y formularios requiere autenticación docente autorizada por el servidor.
              </p>
              <button
                onClick={() => handleRequestTeacherUnlock('Google Apps Script')}
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 shadow-md transition-all cursor-pointer"
              >
                Ingresar Clave Docente
              </button>
            </div>
          )
        )}

        {currentTab === 'subjects' && (
          <LazyErrorBoundary fallbackLabel="Catálogo de Materias">
            <Suspense fallback={<LazyFallback label="Cargando Catálogo de Materias..." />}>
              <SubjectsView
                onSelectSubjectForExam={handleSelectSubjectForExam}
              />
            </Suspense>
          </LazyErrorBoundary>
        )}

        {currentTab === 'tutor' && (
          <LazyErrorBoundary fallbackLabel="Tutor Cognitivo">
            <Suspense fallback={<LazyFallback label="Iniciando Tutor Cognitivo de Aprendizaje..." />}>
              <AITutorView
                sections={currentBank.sections}
                onStartExam={() => setCurrentTab('exam')}
                onGoToQuestion={(idx) => {
                  setCurrentIndex(idx);
                  setCurrentTab('exam');
                }}
              />
            </Suspense>
          </LazyErrorBoundary>
        )}

        {currentTab === 'study' && (
          <LazyErrorBoundary fallbackLabel="Biblioteca de Modo Estudio">
            <Suspense fallback={<LazyFallback label="Cargando Biblioteca de Modo Estudio..." />}>
              <StudyModeView
                initialSubjectId={studyContext?.subjectId}
                initialLessonId={studyContext?.lessonId}
                returnToTab={studyContext?.returnTab}
                onReturnToPreviousTab={handleReturnFromStudy}
                onGoToPracticeWithSubject={(subjectId) => {
                  handleSelectSubjectForExam(subjectId);
                  setExamMode('practice');
                  setCurrentTab('practice');
                }}
              />
            </Suspense>
          </LazyErrorBoundary>
        )}
      </main>

      {/* PWA Network Connectivity & Safe Update Notifications */}
      <OfflineIndicator />
      <PWAUpdateToast />
      <PWAInstallGuideModal />

      {/* Dynamic Ambient Music Player (Global floating widget, ergonomically positioned) */}
      <GlobalMusicPlayer className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-40" />

      {/* Floating Bottom Navigation Dock for Mobile / Tablets */}
      <BottomNavBar
        activeTab={getActiveBottomNavTab(currentTab)}
        onSelectTab={handleSelectBottomNavTab}
        currentTheme={themeMode}
        resolvedTheme={resolvedTheme}
        onSetTheme={(theme) => themeManager.setTheme(theme)}
        onOpenMusicModal={() => window.dispatchEvent(new CustomEvent('nexora-open-music'))}
        onOpenTeacherAuth={() => handleRequestTeacherUnlock('el Panel Docente')}
        isTeacherAuthenticated={isTeacherAuthenticated}
        attemptsCount={attempts.length}
      />

      {/* Custom Exam Generator Modal */}
      {isCustomExamModalOpen && (
        <LazyErrorBoundary isModal onCloseModal={() => setIsCustomExamModalOpen(false)}>
          <Suspense fallback={<LazyFallback isModal label="Cargando Generador de Exámenes..." />}>
            <CustomExamConfigModal
              initialSubjectId={customExamInitialSubject}
              onStartCustomExam={handleStartCustomExam}
              onClose={() => setIsCustomExamModalOpen(false)}
            />
          </Suspense>
        </LazyErrorBoundary>
      )}

      {/* Bank Selector & Dynamic Generator Modal */}
      {isBankModalOpen && (
        <LazyErrorBoundary isModal onCloseModal={() => setIsBankModalOpen(false)}>
          <Suspense fallback={<LazyFallback isModal label="Cargando Selector de Pruebas..." />}>
            <BankSelectorModal
              currentBankId={currentBank.id}
              onSelectBank={handleSelectBank}
              onClose={() => setIsBankModalOpen(false)}
              hasStartedExam={answeredCount > 0 && !isCompleted}
            />
          </Suspense>
        </LazyErrorBoundary>
      )}

      {/* Secure Share Link Generator Modal */}
      {isShareModalOpen && (
        <LazyErrorBoundary isModal onCloseModal={() => setIsShareModalOpen(false)}>
          <Suspense fallback={<LazyFallback isModal label="Cargando Generador de Enlaces..." />}>
            <ShareLinkModal
              currentBank={currentBank}
              onClose={() => setIsShareModalOpen(false)}
            />
          </Suspense>
        </LazyErrorBoundary>
      )}

      {/* Teacher PIN Unlock Modal (Authenticated Server-Side) */}
      {isPinModalOpen && (
        <LazyErrorBoundary isModal onCloseModal={() => setIsPinModalOpen(false)}>
          <Suspense fallback={<LazyFallback isModal label="Cargando Verificación de Seguridad..." />}>
            <TeacherPinModal
              targetFeatureName={targetProtectedFeature}
              onSuccess={handleTeacherUnlockSuccess}
              onClose={() => setIsPinModalOpen(false)}
            />
          </Suspense>
        </LazyErrorBoundary>
      )}

      {/* Modal de Protección Estricta de Evaluación Formal en Curso */}
      {isFormalExamBlockedModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="formal-exam-blocked-title"
        >
          <div className="bg-white dark:bg-[#10152B] border border-amber-400/50 dark:border-amber-500/40 rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl space-y-5 text-center transform transition-all animate-popIn backdrop-blur-2xl">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-500/40 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-inner">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 id="formal-exam-blocked-title" className="text-xl font-black text-slate-900 dark:text-white">
                Evaluación Formal en Curso
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                Tienes una evaluación formal activa con respuestas registradas. Todas tus respuestas están guardadas automáticamente en tu dispositivo. Puedes permanecer en el examen o pasar al Modo Práctica Formativa para estudiar y consultar explicaciones.
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-500/30 rounded-xl p-3.5 text-xs text-amber-900 dark:text-amber-200 text-left space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Sesión Protegida y Guardada</span>
              </p>
              <p className="text-[11px] leading-relaxed text-amber-800/90 dark:text-amber-300/90">
                Tu progreso en el examen formal no se perderá. Al pasar a Modo Práctica tendrás retroalimentación inmediata, pistas y explicaciones detalladas para cada reactivo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
              <button
                onClick={() => {
                  soundManager.playSelect();
                  setIsFormalExamBlockedModalOpen(false);
                  setPendingTargetNav(null);
                }}
                className="w-full sm:flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Permanecer en mi Examen
              </button>
              <button
                onClick={() => {
                  soundManager.playSelect();
                  setIsFormalExamBlockedModalOpen(false);
                  const target = pendingTargetNav || 'practice';
                  if (target === 'practice') {
                    setExamMode('practice');
                    setCurrentTab('practice');
                  } else {
                    setCurrentTab(target as AppTab);
                  }
                  setPendingTargetNav(null);
                }}
                className="w-full sm:flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs sm:text-sm font-black shadow-lg shadow-amber-500/20 hover-lift transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Lightbulb className="w-4 h-4 text-white shrink-0" />
                <span>Guardar y Cambiar a Práctica</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Explicit Academic Integrity Modal for Mode Change during active test */}
      {pendingModeChange && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-[#10152B]/95 text-slate-900 dark:text-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-amber-300 dark:border-[#FFD166]/40 space-y-5 animate-popIn backdrop-blur-2xl">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto ${
              examMode === 'exam' 
                ? 'bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-500/40 text-rose-600 dark:text-rose-400'
                : 'bg-indigo-50 dark:bg-[#161F3F] border border-indigo-200 dark:border-[#65D8FF]/40 text-indigo-700 dark:text-[#65D8FF]'
            }`}>
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                {examMode === 'exam' 
                  ? '¿Abandonar la Evaluación Formal?' 
                  : '¿Iniciar Evaluación Formal Oficial?'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {examMode === 'exam' ? (
                  <>
                    Tienes <strong className="text-indigo-700 dark:text-[#65D8FF] font-bold font-mono">{Object.keys(answers).length}</strong> respuestas registradas en esta evaluación formal.
                  </>
                ) : (
                  <>
                    Estás actualmente en el <strong className="text-amber-600 dark:text-[#FFD166] font-bold">Modo Práctica Formativa</strong> con {Object.keys(answers).length} respuestas.
                  </>
                )}
              </p>
              <div className="text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed bg-amber-50 dark:bg-amber-950/40 p-3.5 rounded-xl border border-amber-200 dark:border-[#FFD166]/30 text-left space-y-1.5">
                {examMode === 'exam' ? (
                  <>
                    <p className="font-bold">⚠️ Advertencia de Integridad Académica:</p>
                    <p>
                      Al cambiar a Práctica Guiada, este intento formal se cerrará como <strong>abandonado</strong> y <strong>NO</strong> se contabilizará como una evaluación oficial completada ni computará para tu promedio.
                    </p>
                    <p>
                      Si pulsas <em>«Continuar examen»</em>, conservarás intacto tu examen oficial y tus respuestas sin alteraciones.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-bold">📋 Requisitos de Evaluación Formal:</p>
                    <p>
                      La evaluación oficial se realiza bajo condiciones estándar: sin retroalimentación inmediata, sin explicaciones previas y con temporizador oficial.
                    </p>
                    <p>
                      Las respuestas de tu práctica no se transferirán al examen oficial para preservar la validez del resultado.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setPendingModeChange(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                {examMode === 'exam' ? 'Continuar Examen' : 'Seguir en Práctica'}
              </button>
              <button
                onClick={() => applyModeChange(pendingModeChange, true)}
                className={`flex-1 px-4 py-2.5 rounded-xl text-white text-sm font-black shadow-md transition-all hover-lift cursor-pointer ${
                  examMode === 'exam'
                    ? 'bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500'
                    : 'bg-gradient-to-r from-[#175CD3] to-[#65D8FF]'
                }`}
              >
                {examMode === 'exam' ? 'Confirmar Abandono' : 'Iniciar Examen Limpio'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer with generous bottom margin to ensure zero overlap with floating nav */}
      <footer className="no-print bg-white dark:bg-[#10152B] border-t border-slate-200/90 dark:border-slate-800/80 py-6 mt-12 text-xs text-slate-500 dark:text-slate-400 mb-28 md:mb-0 pb-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#10152B] via-[#65D8FF] to-[#A994FF] flex items-center justify-center text-white">
                <GraduationCap className="w-3.5 h-3.5 text-[#10152B]" />
              </div>
              <span className="font-extrabold text-[#10152B] dark:text-white tracking-tight">NEXORA</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-slate-600 dark:text-slate-300 font-medium">«Activa tu mente. Expande tu futuro»</span>
            </div>
            <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-500 dark:text-slate-400 text-[11px]">Aprende a tu ritmo. Supera nuevos desafíos</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            {isTeacherAuthenticated ? (
              <>
                <button
                  onClick={() => setIsBankModalOpen(true)}
                  className="text-indigo-600 dark:text-[#65D8FF] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Cambiar o Generar Preguntas</span>
                </button>
                <span>•</span>
                <button
                  onClick={() => setIsShareModalOpen(true)}
                  className="text-emerald-700 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Obtener URL para Alumnos</span>
                </button>
                <span>•</span>
                <button
                  onClick={() => setCurrentTab('registry')}
                  className="text-slate-600 dark:text-slate-300 font-semibold hover:text-indigo-600 dark:hover:text-[#65D8FF] flex items-center gap-1 cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Registro ({attempts.length})</span>
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Portal Estudiantil Seguro</span>
                </div>
                <span>•</span>
                <button
                  onClick={() => handleRequestTeacherUnlock('el Panel Docente')}
                  className="text-indigo-600 dark:text-[#65D8FF] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Acceso Docente</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </footer>
      </div>
    </ErrorBoundary>
  );
}
