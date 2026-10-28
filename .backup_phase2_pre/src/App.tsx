/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
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
  Question
} from './types';
import { calculateDiagnostic } from './utils/diagnosticEvaluator';
import { soundManager } from './utils/sound';
import { Navbar } from './components/Navbar';
import { ExamView } from './components/ExamView';
import { ResultsView } from './components/ResultsView';
import { StudentRegistry } from './components/StudentRegistry';
import { GoogleFormsHub } from './components/GoogleFormsHub';
import { BankSelectorModal } from './components/BankSelectorModal';
import { ShareLinkModal } from './components/ShareLinkModal';
import { TeacherPinModal } from './components/TeacherPinModal';
import { AITutorView } from './components/AITutorView';
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
  Bot
} from 'lucide-react';

const STORAGE_STATE_KEY = 'prueba_diagnostico_state_v2';
const STORAGE_ATTEMPTS_KEY = 'prueba_diagnostico_attempts_v2';
const STORAGE_BANK_KEY = 'prueba_diagnostico_bank_v2';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'exam' | 'results' | 'registry' | 'forms' | 'tutor'>('exam');
  const [examMode, setExamMode] = useState<ExamMode>('exam');
  const [studentName, setStudentName] = useState<string>('Estudiante');
  const [currentBank, setCurrentBank] = useState<ExamBank>(BANK_STANDARD);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [attempts, setAttempts] = useState<StudentAttempt[]>([]);
  const [isBankModalOpen, setIsBankModalOpen] = useState<boolean>(false);
  
  // URL Protection & Teacher Session (Verified Server-Side)
  const [isStudentMode, setIsStudentMode] = useState<boolean>(false);
  const [isTeacherAuthenticated, setIsTeacherAuthenticated] = useState<boolean>(false);
  const [teacherSessionToken, setTeacherSessionToken] = useState<string | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(false);
  const [targetProtectedFeature, setTargetProtectedFeature] = useState<string>('el Panel Docente');

  // Robust detection of URL parameters (?mode=student, ?bank=..., ?strict=true, etc.)
  // Handles search params, hash query strings, and encoded links
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const searchParams = new URLSearchParams(window.location.search);
      let modeParam = searchParams.get('mode');
      let bankParam = searchParams.get('bank');
      let strictParam = searchParams.get('strict');

      // Check hash fragment if present (e.g., /#/?mode=student or #?mode=student)
      if (!modeParam && window.location.hash.includes('?')) {
        const hashQuery = window.location.hash.substring(window.location.hash.indexOf('?') + 1);
        const hashParams = new URLSearchParams(hashQuery);
        modeParam = hashParams.get('mode') || modeParam;
        bankParam = hashParams.get('bank') || bankParam;
        strictParam = hashParams.get('strict') || strictParam;
      }

      // Regex fallback across full location.href
      if (!modeParam && /mode=student/i.test(window.location.href)) {
        modeParam = 'student';
      }
      if (!bankParam) {
        const matchBank = window.location.href.match(/bank=([a-zA-Z0-9_-]+)/);
        if (matchBank) bankParam = matchBank[1];
      }
      if (!strictParam && /strict=true/i.test(window.location.href)) {
        strictParam = 'true';
      }

      if (modeParam === 'student') {
        setIsStudentMode(true);
        setCurrentTab('exam');
        if (strictParam === 'true') {
          setExamMode('exam');
        }
      }

      if (bankParam) {
        const match = ALL_EXAM_BANKS.find(b => b.id === bankParam);
        if (match) {
          setCurrentBank(match);
        }
      }
    } catch (err) {
      console.warn('Error reading URL parameters:', err);
    }
  }, []);

  // Restore saved attempts from localStorage
  useEffect(() => {
    try {
      const savedAttempts = localStorage.getItem(STORAGE_ATTEMPTS_KEY);
      if (savedAttempts) {
        setAttempts(JSON.parse(savedAttempts));
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

  // Restore saved bank from localStorage if not specified in URL
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('bank')) return; // Prioritize URL bank parameter

      const savedBank = localStorage.getItem(STORAGE_BANK_KEY);
      if (savedBank) {
        const parsed = JSON.parse(savedBank);
        if (parsed.id) {
          const match = ALL_EXAM_BANKS.find(b => b.id === parsed.id);
          if (match) {
            setCurrentBank(match);
          } else {
            setCurrentBank(parsed);
          }
        }
      }
    } catch {}
  }, []);

  // Restore exam state
  useEffect(() => {
    try {
      const savedState = localStorage.getItem(STORAGE_STATE_KEY);
      if (savedState) {
        const parsed = JSON.parse(savedState);
        if (parsed.studentName) setStudentName(parsed.studentName);
        if (parsed.answers) setAnswers(parsed.answers);
        if (parsed.flagged) setFlagged(parsed.flagged);
        if (parsed.startTime) setStartTime(parsed.startTime);
        if (parsed.endTime) setEndTime(parsed.endTime);
        if (parsed.isCompleted) {
          setIsCompleted(true);
        }
      } else {
        setStartTime(Date.now());
      }
    } catch {
      setStartTime(Date.now());
    }
  }, []);

  // Save current exam state
  useEffect(() => {
    try {
      const stateToSave = {
        studentName,
        answers,
        flagged,
        startTime,
        endTime,
        isCompleted
      };
      localStorage.setItem(STORAGE_STATE_KEY, JSON.stringify(stateToSave));
    } catch {}
  }, [studentName, answers, flagged, startTime, endTime, isCompleted]);

  // Timer tick
  useEffect(() => {
    if (isCompleted || !startTime) return;

    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, isCompleted]);

  const allQuestions = currentBank.sections.flatMap(s => s.questions);
  const answeredCount = Object.keys(answers).length;

  const currentAnalysis: DiagnosticAnalysis = calculateDiagnostic(
    currentBank.sections,
    answers,
    startTime,
    endTime || Date.now()
  );

  const handleFinishExam = () => {
    const end = Date.now();
    setEndTime(end);
    setIsCompleted(true);
    soundManager.playComplete();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 }
      });
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
      questions: allQuestions
    };

    setAttempts(prev => [newAttempt, ...prev]);
    setCurrentTab('results');
  };

  const handleResetExam = () => {
    if (window.confirm('¿Deseas reiniciar todas las respuestas y comenzar de nuevo la prueba?')) {
      setAnswers({});
      setFlagged({});
      setStartTime(Date.now());
      setEndTime(null);
      setIsCompleted(false);
      setCurrentIndex(0);
      setElapsedSeconds(0);
      setCurrentTab('exam');
      localStorage.removeItem(STORAGE_STATE_KEY);
    }
  };

  const handleSelectBank = (bank: ExamBank) => {
    setCurrentBank(bank);
    try {
      localStorage.setItem(STORAGE_BANK_KEY, JSON.stringify(bank));
    } catch {}

    // Reset exam in progress for clean start
    setAnswers({});
    setFlagged({});
    setStartTime(Date.now());
    setEndTime(null);
    setIsCompleted(false);
    setCurrentIndex(0);
    setElapsedSeconds(0);
    setCurrentTab('exam');
  };

  const handleRetryIncorrectOnly = (incorrectQuestionIds: string[]) => {
    setAnswers(prev => {
      const next = { ...prev };
      incorrectQuestionIds.forEach(id => {
        delete next[id];
      });
      return next;
    });

    setIsCompleted(false);
    setExamMode('practice');
    
    const firstIncorrectIndex = allQuestions.findIndex(q => incorrectQuestionIds.includes(q.id));
    if (firstIncorrectIndex !== -1) {
      setCurrentIndex(firstIncorrectIndex);
    }
    setCurrentTab('exam');
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
    setAnswers(attempt.answers || {});
    setIsCompleted(true);
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

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 overflow-x-hidden w-full max-w-full">
      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          if ((tab === 'registry' || tab === 'forms') && !isTeacherAuthenticated) {
            handleRequestTeacherUnlock(tab === 'registry' ? 'el Registro de Estudiantes' : 'Google Apps Script');
            return;
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
        onOpenBankSelector={() => setIsBankModalOpen(true)}
        onOpenShareModal={() => setIsShareModalOpen(true)}
        onRequestTeacherUnlock={handleRequestTeacherUnlock}
        onLogoutTeacher={handleTeacherLogout}
        onResetExam={handleResetExam}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {currentTab === 'exam' && (
          <ExamView
            sections={currentBank.sections}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            answers={answers}
            setAnswers={setAnswers}
            flagged={flagged}
            setFlagged={setFlagged}
            examMode={examMode}
            setExamMode={setExamMode}
            activeBankTitle={currentBank.title}
            activeBankSubtitle={currentBank.subtitle}
            currentBankId={currentBank.id}
            onSelectBank={handleSelectBank}
            isStudentMode={isStudentMode}
            onOpenBankSelector={() => setIsBankModalOpen(true)}
            studentName={studentName}
            setStudentName={setStudentName}
            onFinishExam={handleFinishExam}
          />
        )}

        {currentTab === 'results' && (
          <ResultsView
            analysis={currentAnalysis}
            sections={currentBank.sections}
            answers={answers}
            studentName={studentName}
            onResetExam={handleResetExam}
            onRetryIncorrectOnly={handleRetryIncorrectOnly}
            onStartAdvancedChallenge={() => handleSelectBank(BANK_ADVANCED_DIFFICULTY)}
          />
        )}

        {currentTab === 'registry' && (
          isTeacherAuthenticated ? (
            <StudentRegistry
              attempts={attempts}
              onDeleteAttempt={handleDeleteAttempt}
              onClearAllAttempts={handleClearAllAttempts}
              onLoadSampleStudents={handleLoadSampleStudents}
              onViewStudentExam={handleViewStudentExam}
              onOpenShareModal={() => setIsShareModalOpen(true)}
              onRestoreAttempts={handleRestoreAttempts}
            />
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
            <GoogleFormsHub currentBank={currentBank} />
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

        {currentTab === 'tutor' && (
          <AITutorView
            sections={currentBank.sections}
            onStartExam={() => setCurrentTab('exam')}
            onGoToQuestion={(idx) => {
              setCurrentIndex(idx);
              setCurrentTab('exam');
            }}
          />
        )}
      </main>

      {/* Bank Selector & Dynamic Generator Modal */}
      {isBankModalOpen && (
        <BankSelectorModal
          currentBankId={currentBank.id}
          onSelectBank={handleSelectBank}
          onClose={() => setIsBankModalOpen(false)}
          hasStartedExam={answeredCount > 0 && !isCompleted}
        />
      )}

      {/* Secure Share Link Generator Modal */}
      {isShareModalOpen && (
        <ShareLinkModal
          currentBank={currentBank}
          onClose={() => setIsShareModalOpen(false)}
        />
      )}

      {/* Teacher PIN Unlock Modal (Authenticated Server-Side) */}
      {isPinModalOpen && (
        <TeacherPinModal
          targetFeatureName={targetProtectedFeature}
          onSuccess={handleTeacherUnlockSuccess}
          onClose={() => setIsPinModalOpen(false)}
        />
      )}

      {/* Footer */}
      <footer className="no-print bg-white border-t border-slate-200 py-6 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#10152B] via-[#65D8FF] to-[#A994FF] flex items-center justify-center text-white">
                <GraduationCap className="w-3.5 h-3.5 text-[#10152B]" />
              </div>
              <span className="font-extrabold text-[#10152B] tracking-tight">NEXORA</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium">«Activa tu mente. Expande tu futuro»</span>
            </div>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-500 text-[11px]">Aprende a tu ritmo. Supera nuevos desafíos</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            {isTeacherAuthenticated ? (
              <>
                <button
                  onClick={() => setIsBankModalOpen(true)}
                  className="text-indigo-600 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Cambiar o Generar Preguntas</span>
                </button>
                <span>•</span>
                <button
                  onClick={() => setIsShareModalOpen(true)}
                  className="text-emerald-700 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Obtener URL para Alumnos</span>
                </button>
                <span>•</span>
                <button
                  onClick={() => setCurrentTab('registry')}
                  className="text-slate-600 font-semibold hover:text-indigo-600 flex items-center gap-1 cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Registro ({attempts.length})</span>
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3 text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Portal Estudiantil Seguro</span>
                </div>
                <span>•</span>
                <button
                  onClick={() => handleRequestTeacherUnlock('el Panel Docente')}
                  className="text-indigo-600 hover:underline font-bold flex items-center gap-1 cursor-pointer"
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
  );
}
