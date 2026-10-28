import React, { useState, useEffect } from 'react';
import { 
  Section, 
  Question, 
  ExamMode,
  ExamBank
} from '../types';
import { ALL_EXAM_BANKS, generateDynamicCustomExam } from '../data/questionBanks';
import { QuestionMatrix } from './QuestionMatrix';
import { soundManager } from '../utils/sound';
import { speechReader } from '../utils/speech';
import { getMotivationalPhraseForQuestion } from '../utils/motivation';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  AlertTriangle,
  Lightbulb,
  FileCheck2,
  Sparkles,
  Calculator,
  BookOpen,
  Brain,
  Layers,
  User,
  Flame,
  Atom,
  Globe,
  RefreshCw,
  Zap,
  SlidersHorizontal,
  ArrowRight,
  Heart,
  Trophy,
  Bot
} from 'lucide-react';
import { AITutorModal } from './AITutorModal';

interface ExamViewProps {
  sections: Section[];
  currentIndex: number;
  setCurrentIndex: (idx: number) => void;
  answers: Record<string, number>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  flagged: Record<string, boolean>;
  setFlagged: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  examMode: ExamMode;
  setExamMode: (mode: ExamMode) => void;
  activeBankTitle: string;
  activeBankSubtitle: string;
  currentBankId?: string;
  onSelectBank?: (bank: ExamBank) => void;
  isStudentMode: boolean;
  onOpenBankSelector: () => void;
  studentName: string;
  setStudentName: (name: string) => void;
  onFinishExam: () => void;
}

export const ExamView: React.FC<ExamViewProps> = ({
  sections,
  currentIndex,
  setCurrentIndex,
  answers,
  setAnswers,
  flagged,
  setFlagged,
  examMode,
  setExamMode,
  activeBankTitle,
  activeBankSubtitle,
  currentBankId = 'standard-30',
  onSelectBank,
  isStudentMode,
  onOpenBankSelector,
  studentName,
  setStudentName,
  onFinishExam,
}) => {
  const allQuestions = sections?.flatMap(s => s.questions) || [];
  const safeIndex = Math.max(0, Math.min(currentIndex, Math.max(allQuestions.length - 1, 0)));
  const currentQuestion: Question | undefined = allQuestions[safeIndex] || allQuestions[0];
  const currentSection = (currentQuestion && sections?.find(s => s.id === currentQuestion.sectionId)) || sections?.[0] || {
    id: 1,
    title: 'Evaluación Diagnóstica',
    shortTitle: 'Diagnóstico',
    icon: 'book-open',
    questions: []
  };

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [modalStudentName, setModalStudentName] = useState(studentName);
  const [pendingBankChange, setPendingBankChange] = useState<ExamBank | null>(null);
  const [isGeneratingRandom, setIsGeneratingRandom] = useState(false);
  const [showMotivationToast, setShowMotivationToast] = useState(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);

  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const isFlagged = currentQuestion ? !!flagged[currentQuestion.id] : false;

  // Global counts
  const totalAnswered = Object.keys(answers).length;
  const unansweredCount = Math.max(0, allQuestions.length - totalAnswered);
  const progressPercentage = allQuestions.length > 0 ? Math.round((totalAnswered / allQuestions.length) * 100) : 0;

  // Motivation phrase for current question
  const motivationalPhrase = getMotivationalPhraseForQuestion(currentQuestion?.number || 1, allQuestions.length || 30);

  // Auto-clamp currentIndex if bank changes with fewer questions
  useEffect(() => {
    if (allQuestions.length > 0 && currentIndex >= allQuestions.length) {
      setCurrentIndex(0);
    }
  }, [allQuestions.length, currentIndex, setCurrentIndex]);

  // Sync speech state
  useEffect(() => {
    return () => {
      speechReader.stop();
    };
  }, []);

  // Keyboard navigation & shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' && currentIndex < allQuestions.length - 1) {
        handleNext();
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handlePrev();
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const optionIdx = parseInt(e.key, 10) - 1;
        if (currentQuestion && optionIdx >= 0 && optionIdx < currentQuestion.options.length) {
          handleSelectOption(optionIdx);
        }
      } else if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
        const charCode = e.key.toLowerCase().charCodeAt(0) - 97;
        if (currentQuestion && charCode >= 0 && charCode < currentQuestion.options.length) {
          handleSelectOption(charCode);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentQuestion, selectedAnswer]);

  const handleSelectOption = (idx: number) => {
    if (!currentQuestion) return;
    try {
      soundManager.playSelect();
    } catch {}

    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: idx
    }));

    setShowMotivationToast(true);

    if (examMode === 'practice') {
      try {
        if (idx === currentQuestion.correctIndex) {
          soundManager.playCorrect();
        } else {
          soundManager.playIncorrect();
        }
      } catch {}
    }
  };

  const toggleFlag = () => {
    if (!currentQuestion) return;
    try {
      soundManager.playSelect();
    } catch {}
    setFlagged(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const handleNext = () => {
    try {
      speechReader.stop();
    } catch {}
    setIsSpeaking(false);
    setShowMotivationToast(false);
    if (currentIndex < allQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    try {
      speechReader.stop();
    } catch {}
    setIsSpeaking(false);
    setShowMotivationToast(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleReadAloud = () => {
    if (!currentQuestion) return;
    try {
      if (isSpeaking) {
        speechReader.stop();
        setIsSpeaking(false);
      } else {
        setIsSpeaking(true);
        const textToRead = `Pregunta ${currentQuestion.number}: ${currentQuestion.text}. Opciones: ${currentQuestion.options.map((opt, i) => `Opción ${String.fromCharCode(65 + i)}: ${opt}`).join('. ')}`;
        speechReader.speak(textToRead, () => {
          setIsSpeaking(false);
        });
      }
    } catch {
      setIsSpeaking(false);
    }
  };

  const handleSelectDifficulty = (bank: ExamBank) => {
    if (bank.id === currentBankId) return;

    if (totalAnswered > 0) {
      setPendingBankChange(bank);
    } else {
      if (onSelectBank) {
        onSelectBank(bank);
      }
    }
  };

  const handleConfirmDifficultyChange = () => {
    if (pendingBankChange && onSelectBank) {
      onSelectBank(pendingBankChange);
    }
    setPendingBankChange(null);
  };

  const handleGenerateRandomInstant = () => {
    setIsGeneratingRandom(true);
    setTimeout(() => {
      const dynamicBank = generateDynamicCustomExam();
      setIsGeneratingRandom(false);
      if (onSelectBank) {
        onSelectBank(dynamicBank);
      }
    }, 400);
  };

  const getSectionIcon = (iconName: string) => {
    switch (iconName) {
      case 'calculator':
        return <Calculator className="w-4 h-4 text-[#175CD3] dark:text-[#65D8FF]" />;
      case 'book-open':
        return <BookOpen className="w-4 h-4 text-purple-600 dark:text-[#A994FF]" />;
      case 'brain':
        return <Brain className="w-4 h-4 text-pink-600 dark:text-[#FF78C8]" />;
      default:
        return <HelpCircle className="w-4 h-4 text-amber-600 dark:text-[#FFD166]" />;
    }
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Básico':
      case 'Fácil':
        return 'text-emerald-700 bg-emerald-50 border-emerald-300 dark:text-emerald-400 dark:bg-emerald-950/60 dark:border-emerald-500/40';
      case 'Intermedio':
        return 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-[#65D8FF] dark:bg-[#161F3F] dark:border-[#65D8FF]/40';
      case 'Desafiante':
      case 'Avanzado':
        return 'text-amber-800 bg-amber-50 border-amber-300 dark:text-[#FFD166] dark:bg-amber-950/60 dark:border-[#FFD166]/40';
      default:
        return 'text-slate-700 bg-slate-100 border-slate-300 dark:text-slate-300 dark:bg-slate-800 dark:border-slate-700';
    }
  };

  if (!currentQuestion || allQuestions.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-4 animate-fadeIn text-slate-800 dark:text-white">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-[#161F3F] text-[#175CD3] dark:text-[#65D8FF] border border-indigo-200 dark:border-[#65D8FF]/30 flex items-center justify-center mx-auto animate-spin shadow-lg">
          <RefreshCw className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cargando prueba diagnóstica...</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Preparando reactivos pedagógicos verificados de NEXORA.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-5 space-y-4 sm:space-y-5 text-slate-900 dark:text-white pb-32 md:pb-24">

      {/* ========================================================
          A. ENCABEZADO DE EVALUACIÓN (Luminoso, elegante, Liquid Glass)
          ======================================================== */}
      <header className="liquid-glass-card bg-white dark:bg-[#10152B]/95 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-slate-200/90 dark:border-[#65D8FF]/20 shadow-xs dark:shadow-xl backdrop-blur-2xl flex flex-col md:flex-row md:items-center justify-between gap-3 text-slate-900 dark:text-white">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#175CD3] via-[#A994FF] to-[#65D8FF] p-0.5 flex items-center justify-center shadow-md shadow-[#175CD3]/20 shrink-0">
            <div className="w-full h-full bg-white dark:bg-[#10152B] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#175CD3] dark:text-[#65D8FF]" />
            </div>
          </div>

          <div className="min-w-0 space-y-0.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-black tracking-wider uppercase text-indigo-700 dark:text-[#65D8FF]">
                NEXORA
              </span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <h1 className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight truncate">
                {activeBankTitle}
              </h1>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-[#161F3F] text-indigo-700 dark:text-[#A994FF] border border-indigo-200 dark:border-[#A994FF]/30 font-semibold">
                {examMode === 'exam' ? 'Modo Examen Formal' : 'Modo Práctica Guiada'}
              </span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs">
                Intento en curso: <strong className="text-slate-900 dark:text-white font-mono">{totalAnswered}/{allQuestions.length}</strong> respondidas
              </span>
            </div>
          </div>
        </div>

        {/* Acciones de Encabezado: Tutor IA & Finalizar */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 self-end md:self-auto">
          <button
            onClick={() => setIsAITutorOpen(true)}
            className="px-3 sm:px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#175CD3] via-[#7c3aed] to-[#db2777] hover:opacity-95 text-white font-extrabold text-xs shadow-md border border-indigo-200 dark:border-[#A994FF]/30 flex items-center gap-1.5 cursor-pointer hover-lift transition-all"
            title="Abrir Tutor IA para consultar dudas sobre la evaluación"
          >
            <Bot className="w-4 h-4 text-white" />
            <span>Tutor IA</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FFD166] animate-pulse" />
          </button>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-3.5 sm:px-4 py-2 rounded-xl bg-[#18864B] hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover-lift flex items-center gap-1.5 cursor-pointer"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Finalizar</span>
          </button>
        </div>
      </header>

      {/* ========================================================
          B. PANEL DE PROGRESO (Sticky, nítido y de alto contraste)
          ======================================================== */}
      <div className="sticky top-2 z-30 bg-white/95 dark:bg-[#10152B]/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-slate-200/90 dark:border-[#65D8FF]/25 shadow-md dark:shadow-2xl space-y-2.5 transition-all duration-200 text-slate-900 dark:text-white">
        <div className="flex items-center justify-between gap-3 text-xs">
          {/* Question Index & Subject */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#175CD3] to-indigo-600 text-white font-mono font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
              #{currentQuestion.number}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 truncate">
                <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm truncate">
                  Pregunta {currentQuestion.number} <span className="text-slate-500 dark:text-slate-400 font-normal">de {allQuestions.length}</span>
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${getDifficultyColor(currentQuestion.difficulty)} shrink-0`}>
                  {currentQuestion.difficulty}
                </span>
              </div>
              <p className="text-[11px] text-indigo-700 dark:text-[#65D8FF] truncate font-semibold">
                {currentSection.title}
              </p>
            </div>
          </div>

          {/* Real Percentage and Navigation Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="text-right">
              <span className="text-sm sm:text-base font-black text-indigo-700 dark:text-[#65D8FF] font-mono tabular-nums">
                {progressPercentage}%
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium">
                {totalAnswered}/{allQuestions.length}
              </span>
            </div>

            <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#161F3F] p-1 rounded-xl border border-slate-200 dark:border-slate-800">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                  currentIndex === 0
                    ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-[#65D8FF] active:scale-90 shadow-2xs'
                }`}
                title="Pregunta anterior (←)"
                aria-label="Pregunta anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === allQuestions.length - 1}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                  currentIndex === allQuestions.length - 1
                    ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-[#65D8FF] active:scale-90 shadow-2xs'
                }`}
                title="Siguiente pregunta (→)"
                aria-label="Siguiente pregunta"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="w-full h-2 sm:h-2.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800 relative">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#175CD3] via-[#7c3aed] to-[#65D8FF] dark:from-[#65D8FF] dark:via-[#A994FF] dark:to-emerald-400 transition-all duration-300 ease-out shadow-xs"
            style={{ width: `${Math.max(progressPercentage, totalAnswered > 0 ? 3 : 1)}%` }}
          />
        </div>
      </div>

      {/* ========================================================
          C. SELECTOR DE MATERIAS Y MODOS (Liquid Glass Tabs)
          ======================================================== */}
      <div className="liquid-glass-card bg-white dark:bg-[#10152B]/90 rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-slate-200/90 dark:border-[#65D8FF]/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3 backdrop-blur-xl">
        {/* Pestañas de Materias */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {sections.map(section => {
            const isCurrentSection = section.id === currentSection.id;
            const answeredInSection = section.questions.filter(q => answers[q.id] !== undefined).length;
            const firstQuestionOfSection = section.questions[0].number - 1;

            return (
              <button
                key={section.id}
                onClick={() => {
                  try { speechReader.stop(); } catch {}
                  setIsSpeaking(false);
                  setCurrentIndex(firstQuestionOfSection);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 cursor-pointer hover-lift ${
                  isCurrentSection
                    ? 'bg-gradient-to-r from-[#175CD3] to-[#65D8FF] text-white border border-[#175CD3] shadow-xs'
                    : 'bg-slate-50 dark:bg-[#161F3F]/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#161F3F] hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {getSectionIcon(section.icon)}
                <span>{section.shortTitle}</span>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                  isCurrentSection ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-400'
                }`}>
                  {answeredInSection}/{section.questions.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Modo de Evaluación: Formal vs Práctica */}
        <div className="flex items-center justify-between md:justify-end gap-2 shrink-0">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium">
            <button
              onClick={() => setExamMode('exam')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                examMode === 'exam'
                  ? 'bg-white dark:bg-[#161F3F] text-indigo-700 dark:text-[#65D8FF] font-bold border border-slate-200 dark:border-[#65D8FF]/30 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>📝 Examen Formal</span>
            </button>
            <button
              onClick={() => setExamMode('practice')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                examMode === 'practice'
                  ? 'bg-white dark:bg-[#161F3F] text-amber-700 dark:text-[#FFD166] font-bold border border-slate-200 dark:border-[#FFD166]/30 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500 dark:text-[#FFD166]" />
              <span>Práctica Guiada</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          FRANJA DE DIFICULTAD / MODALIDADES (Sin texto cortado)
          ======================================================== */}
      <div className="liquid-glass-card bg-white dark:bg-[#10152B]/90 rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-slate-200/90 dark:border-[#65D8FF]/20 shadow-xs space-y-2.5 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-indigo-600 dark:text-[#65D8FF]" />
            <span className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">
              Desafíos de Evaluación Disponibles
            </span>
            <span className="text-[10px] text-emerald-800 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
              Libre elección
            </span>
          </div>

          <button
            onClick={onOpenBankSelector}
            className="text-xs font-bold text-indigo-700 dark:text-[#65D8FF] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Ver todos los detalles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {ALL_EXAM_BANKS.map((bank) => {
            const isActive = bank.id === currentBankId;
            const isAdvanced = bank.id.includes('advanced') || bank.id.includes('difficulty');
            const isSciences = bank.id.includes('science') || bank.id.includes('stem');
            const isHumanities = bank.id.includes('humanities');

            let icon = <BookOpen className="w-3.5 h-3.5 text-[#175CD3] dark:text-[#65D8FF]" />;
            let difficultyLabel = 'Estándar';

            if (isAdvanced) {
              icon = <Flame className="w-3.5 h-3.5 text-amber-500 dark:text-[#FFD166]" />;
              difficultyLabel = 'Alta Dificultad';
            } else if (isSciences) {
              icon = <Atom className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />;
              difficultyLabel = 'Ciencias STEM';
            } else if (isHumanities) {
              icon = <Globe className="w-3.5 h-3.5 text-purple-600 dark:text-[#A994FF]" />;
              difficultyLabel = 'Humanidades';
            }

            return (
              <button
                key={bank.id}
                onClick={() => handleSelectDifficulty(bank)}
                className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between gap-1.5 cursor-pointer hover-lift relative overflow-hidden min-h-[76px] ${
                  isActive
                    ? 'border-[#175CD3] dark:border-[#65D8FF] bg-indigo-50/90 dark:bg-[#161F3F] ring-2 ring-[#175CD3]/30 dark:ring-[#65D8FF]/30 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#121B3A]/60 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#161F3F]/60'
                }`}
              >
                {isActive && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#175CD3] dark:bg-[#65D8FF] animate-pulse" />
                )}

                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <span className={`text-xs font-bold truncate ${isActive ? 'text-indigo-900 dark:text-[#65D8FF]' : 'text-slate-800 dark:text-slate-200'}`}>
                    {difficultyLabel}
                  </span>
                </div>

                <div className="flex flex-col text-[10px] leading-tight">
                  <span className="text-slate-500 dark:text-slate-400 font-medium truncate">{bank.badge}</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono font-bold">30 reactivos</span>
                </div>
              </button>
            );
          })}

          {/* Botón Reto Aleatorio Rápido */}
          <button
            onClick={handleGenerateRandomInstant}
            disabled={isGeneratingRandom}
            className="p-3 rounded-2xl border border-dashed border-amber-300 dark:border-[#FFD166]/40 hover:border-amber-400 dark:hover:border-[#FFD166] bg-amber-50/80 dark:bg-[#FFD166]/10 hover:bg-amber-100/70 dark:hover:bg-[#FFD166]/15 text-left transition-all duration-200 flex flex-col justify-between gap-1.5 cursor-pointer hover-lift group min-h-[76px]"
            title="Genera un nuevo examen con variables aleatorias"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-amber-100 dark:bg-[#FFD166]/20 text-amber-700 dark:text-[#FFD166] flex items-center justify-center shrink-0">
                <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingRandom ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
              </div>
              <span className="text-xs font-bold text-amber-900 dark:text-[#FFD166] truncate">
                Reto Aleatorio
              </span>
            </div>
            <div className="flex flex-col text-[10px] leading-tight">
              <span className="text-amber-700 dark:text-amber-200/80 font-medium truncate">Algoritmo dinámico</span>
              <span className="text-amber-800 dark:text-amber-100 font-mono font-bold">Preguntas nuevas</span>
            </div>
          </button>
        </div>
      </div>

      {/* ========================================================
          GRID PRINCIPAL: PREGUNTA (8 cols) + MATRIZ (4 cols)
          ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
        
        {/* ÁREA DE PREGUNTA (8 cols en desktop) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* D. Tarjeta Principal de Pregunta Liquid Glass */}
          <div className="liquid-glass-card bg-white dark:bg-[#10152B]/95 rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200/90 dark:border-[#65D8FF]/20 shadow-md dark:shadow-2xl space-y-5 backdrop-blur-2xl text-slate-900 dark:text-white">
            
            {/* Clave compuesta para desmontaje atómico y cero errores DOM */}
            <div key={`question-card-${currentIndex}-${currentQuestion.id}`} className="animate-fadeIn space-y-5">
              
              {/* Encabezado de la Tarjeta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800/80 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-black tracking-wider uppercase text-indigo-700 dark:text-[#65D8FF]">
                    {currentSection.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      Pregunta {currentQuestion.number} <span className="text-slate-500 dark:text-slate-400 font-normal text-sm sm:text-base">de {allQuestions.length}</span>
                    </h2>
                  </div>
                </div>

                {/* Acciones auxiliares de la pregunta */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${getDifficultyColor(currentQuestion.difficulty)}`}>
                    {currentQuestion.difficulty}
                  </span>

                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hidden sm:inline-block">
                    {currentQuestion.skill}
                  </span>

                  {/* Lector TTS de audio con barras animadas */}
                  <button
                    onClick={handleReadAloud}
                    className={`p-2.5 rounded-xl border transition-all duration-200 hover-lift cursor-pointer ${
                      isSpeaking
                        ? 'bg-indigo-50 dark:bg-[#161F3F] border-indigo-400 dark:border-[#65D8FF] text-indigo-700 dark:text-[#65D8FF] ring-2 ring-indigo-300 dark:ring-[#65D8FF]/30'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title={isSpeaking ? 'Detener lectura' : 'Leer pregunta en voz alta en español'}
                    aria-label="Leer en voz alta"
                  >
                    {isSpeaking ? (
                      <div className="flex items-center gap-0.5 h-4 px-0.5">
                        <span className="w-0.5 bg-[#175CD3] dark:bg-[#65D8FF] rounded-full sound-bar-1" />
                        <span className="w-0.5 bg-[#7c3aed] dark:bg-[#A994FF] rounded-full sound-bar-2" />
                        <span className="w-0.5 bg-[#db2777] dark:bg-[#FF78C8] rounded-full sound-bar-3" />
                      </div>
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  {/* Marcar para revisión */}
                  <button
                    onClick={toggleFlag}
                    className={`p-2.5 rounded-xl border transition-all duration-200 hover-lift cursor-pointer ${
                      isFlagged
                        ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-400 dark:border-[#FFD166] text-amber-800 dark:text-[#FFD166] ring-2 ring-amber-300 dark:ring-[#FFD166]/30'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title={isFlagged ? 'Desmarcar revisión' : 'Marcar para revisar luego'}
                    aria-label="Marcar para revisar"
                  >
                    <Bookmark className={`w-4 h-4 transition-transform active:scale-125 ${isFlagged ? 'fill-amber-500 dark:fill-[#FFD166] text-amber-600 dark:text-[#FFD166]' : ''}`} />
                  </button>

                  {/* Tutor IA botón de pregunta */}
                  <button
                    onClick={() => setIsAITutorOpen(true)}
                    className="px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer hover-lift"
                    title="Consultar al Tutor IA (Gemini 3.8 Flash) sobre esta pregunta"
                  >
                    <Bot className="w-3.5 h-3.5 text-white" />
                    <span className="hidden sm:inline">Tutor IA</span>
                    <Sparkles className="w-3 h-3 text-[#FFD166] animate-pulse" />
                  </button>
                </div>
              </div>

              {/* Enunciado de la Pregunta */}
              <div className="py-2">
                <p className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 leading-relaxed tracking-tight" translate="no">
                  {currentQuestion.text}
                </p>
              </div>

              {/* E. Opciones de Respuesta Liquid Glass */}
              <div className="space-y-3 pt-1">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const letter = String.fromCharCode(65 + idx); // A, B, C, D
                  const isPractice = examMode === 'practice';
                  const hasAnswered = selectedAnswer !== undefined;
                  const isCorrectOption = idx === currentQuestion.correctIndex;

                  let cardStyle = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#121B3A]/70 hover:border-indigo-300 dark:hover:border-[#65D8FF]/50 hover:bg-slate-50 dark:hover:bg-[#161F3F] text-slate-800 dark:text-slate-200 shadow-2xs';
                  let badgeStyle = 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';

                  if (isSelected) {
                    cardStyle = 'border-[#175CD3] dark:border-[#65D8FF] bg-indigo-50/90 dark:bg-[#161F3F] ring-2 ring-[#175CD3]/30 dark:ring-[#65D8FF]/40 text-indigo-950 dark:text-white font-bold shadow-xs';
                    badgeStyle = 'bg-[#175CD3] dark:bg-gradient-to-tr dark:from-[#175CD3] dark:to-[#65D8FF] text-white dark:text-slate-950 font-black border-[#175CD3] dark:border-[#65D8FF]';
                  }

                  // Feedback visual inmediato SOLO en modo práctica tras haber respondido
                  if (isPractice && hasAnswered) {
                    if (isCorrectOption) {
                      cardStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-950 dark:text-emerald-100 font-bold ring-2 ring-emerald-400/30';
                      badgeStyle = 'bg-emerald-600 text-white font-black border-emerald-500';
                    } else if (isSelected && !isCorrectOption) {
                      cardStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/70 text-rose-950 dark:text-rose-100 ring-2 ring-rose-400/30';
                      badgeStyle = 'bg-rose-600 text-white font-black border-rose-500';
                    }
                  }

                  return (
                    <button
                      key={`opt-${currentQuestion.id}-${idx}`}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer min-h-[52px] hover-lift ${cardStyle}`}
                    >
                      <div className="flex items-center gap-3.5 flex-1 min-w-0">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold border transition-colors shrink-0 ${badgeStyle}`}>
                          {letter}
                        </span>
                        <span className="text-sm sm:text-base leading-relaxed break-words" translate="no">
                          {option}
                        </span>
                      </div>

                      {/* Icono de verificación en práctica */}
                      {isPractice && hasAnswered && (
                        <div className="shrink-0 animate-popIn">
                          {isCorrectOption ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          ) : isSelected ? (
                            <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                          ) : null}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* F. Explicación Pedagógica y Solución en Modo Práctica */}
              {examMode === 'practice' && selectedAnswer !== undefined && (
                <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-[#161F3F]/90 border border-amber-300 dark:border-[#FFD166]/30 text-amber-950 dark:text-slate-200 space-y-2.5 animate-slideUp shadow-xs">
                  <div className="flex items-center justify-between gap-2 border-b border-amber-200 dark:border-slate-800 pb-2">
                    <div className="flex items-center gap-2 text-amber-800 dark:text-[#FFD166] font-bold text-sm">
                      <Lightbulb className="w-4 h-4 text-amber-600 dark:text-[#FFD166]" />
                      <span>Solución y Explicación Pedagógica</span>
                    </div>
                    <button
                      onClick={() => setIsAITutorOpen(true)}
                      className="text-xs text-indigo-700 dark:text-[#65D8FF] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Bot className="w-3.5 h-3.5" />
                      <span>¿Dudas? Pregunta al Tutor IA</span>
                    </button>
                  </div>

                  <p className="text-sm leading-relaxed text-amber-900 dark:text-slate-300">
                    {currentQuestion.explanation}
                  </p>

                  <div className="pt-1 text-xs flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-slate-600 dark:text-slate-400">Respuesta correcta:</span>
                    <span className="bg-white dark:bg-[#10152B] border border-amber-300 dark:border-[#FFD166]/40 px-2.5 py-0.5 rounded font-mono font-bold text-amber-800 dark:text-[#FFD166]">
                      Opción {String.fromCharCode(65 + currentQuestion.correctIndex)}: {currentQuestion.options[currentQuestion.correctIndex]}
                    </span>
                  </div>
                </div>
              )}

              {/* Mensaje de refuerzo positivo breve y profesional */}
              {selectedAnswer !== undefined && (
                <div className="mt-4 p-3 rounded-2xl bg-slate-50 dark:bg-[#121B3A]/80 border border-slate-200 dark:border-[#65D8FF]/20 flex items-center justify-between gap-3 text-xs text-slate-700 dark:text-slate-300 animate-slideUp">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Respuesta registrada con éxito. ¡Continúa con determinación!</span>
                  </div>
                  <span className="text-indigo-700 dark:text-[#FFD166] text-[11px] font-bold shrink-0">
                    {motivationalPhrase.badge}
                  </span>
                </div>
              )}

              {/* G. Barra Inferior de Navegación del Examen */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border transition-all duration-200 cursor-pointer ${
                    currentIndex === 0
                      ? 'border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed bg-slate-50 dark:bg-slate-900/40'
                      : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-950 dark:hover:text-white hover-lift shadow-2xs'
                  }`}
                  aria-label="Pregunta anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>Atajos:</span>
                  <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-[10px] text-slate-700 dark:text-slate-300 font-mono">1-4</kbd>
                  <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-[10px] text-slate-700 dark:text-slate-300 font-mono">A-D</kbd>
                  <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-[10px] text-slate-700 dark:text-slate-300 font-mono">← / →</kbd>
                </div>

                {currentIndex < allQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black bg-gradient-to-r from-[#175CD3] via-indigo-600 to-[#65D8FF] text-white shadow-md shadow-[#175CD3]/20 hover:opacity-95 transition-all duration-200 hover-lift cursor-pointer"
                    aria-label="Siguiente pregunta"
                  >
                    <span>Siguiente</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setShowSubmitModal(true)}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black bg-[#18864B] hover:bg-emerald-600 text-white shadow-md transition-all duration-200 hover-lift cursor-pointer"
                  >
                    <FileCheck2 className="w-4 h-4" />
                    <span>Finalizar Prueba</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR DERECHO: MATRIZ Y RESUMEN DEL ESTUDIANTE (4 cols en desktop) */}
        <div className="lg:col-span-4 space-y-4">
          {/* H. Mapa de preguntas con acordeón móvil integrado */}
          <QuestionMatrix
            sections={sections}
            currentIndex={currentIndex}
            onSelectQuestion={(idx) => {
              try { speechReader.stop(); } catch {}
              setIsSpeaking(false);
              setShowMotivationToast(false);
              setCurrentIndex(idx);
            }}
            answers={answers}
            flagged={flagged}
          />

          {/* Tarjeta de Resumen del Estudiante en Liquid Glass */}
          <div className="liquid-glass-card bg-white dark:bg-[#10152B]/90 rounded-3xl p-5 border border-slate-200 dark:border-[#65D8FF]/20 shadow-md dark:shadow-xl space-y-3 backdrop-blur-xl text-slate-900 dark:text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-[#161F3F] border border-indigo-200 dark:border-[#65D8FF]/30 flex items-center justify-center text-indigo-700 dark:text-[#65D8FF] shrink-0 font-bold">
                <User className="w-5 h-5 text-indigo-600 dark:text-[#65D8FF]" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Estudiante</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm truncate block">
                  {studentName || 'Estudiante Oficial'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 text-center">
              <div className="bg-slate-50 dark:bg-[#161F3F]/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="block text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">Respondidas</span>
                <span className="text-base font-bold text-slate-900 dark:text-white tabular-nums font-mono">{totalAnswered} / {allQuestions.length}</span>
              </div>
              <div className="bg-slate-50 dark:bg-[#161F3F]/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="block text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">Pendientes</span>
                <span className={`text-base font-bold tabular-nums font-mono ${unansweredCount > 0 ? 'text-amber-600 dark:text-[#FFD166]' : 'text-emerald-600 dark:text-emerald-400'}`}>
                  {unansweredCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MODALES EN LIQUID GLASS
          ======================================================== */}
      
      {/* Modal 1: Advertencia al cambiar de dificultad durante el examen */}
      {pendingBankChange && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-[#10152B]/95 text-slate-900 dark:text-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-amber-300 dark:border-[#FFD166]/40 space-y-5 animate-popIn backdrop-blur-2xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-[#FFD166]/40 text-amber-600 dark:text-[#FFD166] flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                ¿Cambiar a {pendingBankChange.title}?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Tienes <strong className="text-indigo-700 dark:text-[#65D8FF] font-bold font-mono">{totalAnswered}</strong> preguntas respondidas en la prueba actual.
              </p>
              <p className="text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-[#FFD166]/30">
                Al confirmar, se iniciará un nuevo intento en limpio con los 30 reactivos de ese nivel. Las respuestas del intento actual no se guardarán en esta batería.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setPendingBankChange(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                Seguir en la actual
              </button>
              <button
                onClick={handleConfirmDifficultyChange}
                className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#175CD3] to-[#65D8FF] text-white text-sm font-black shadow-md transition-all hover-lift cursor-pointer"
              >
                Confirmar e Iniciar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Finalizar la prueba diagnóstica */}
      {showSubmitModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-[#10152B]/95 text-slate-900 dark:text-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-slate-200 dark:border-[#65D8FF]/30 space-y-5 animate-popIn backdrop-blur-2xl">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-[#161F3F] border border-indigo-200 dark:border-[#65D8FF]/40 text-indigo-700 dark:text-[#65D8FF] flex items-center justify-center mx-auto">
              <FileCheck2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                ¿Deseas finalizar la prueba diagnóstica?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Has respondido <strong className="text-indigo-700 dark:text-[#65D8FF] font-bold font-mono">{totalAnswered}</strong> de <strong>{allQuestions.length}</strong> preguntas.
              </p>

              {/* Confirmación del nombre del estudiante */}
              <div className="text-left pt-2 space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                  Nombre del Estudiante (para el informe oficial):
                </label>
                <input
                  type="text"
                  value={modalStudentName}
                  onChange={(e) => setModalStudentName(e.target.value)}
                  placeholder="Escribe tu nombre completo"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#175CD3]/30 dark:focus:ring-[#65D8FF]/40 focus:border-[#175CD3] dark:focus:border-[#65D8FF] bg-slate-50 dark:bg-[#161F3F] text-slate-900 dark:text-white font-medium placeholder-slate-400"
                />
              </div>

              {unansweredCount > 0 && (
                <div className="mt-2 p-3 bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-[#FFD166]/40 rounded-xl flex items-center gap-2 text-xs text-amber-900 dark:text-amber-200 text-left">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600 dark:text-[#FFD166]" />
                  <span>Tienes <strong>{unansweredCount}</strong> preguntas sin responder. Se computarán como pendientes si finalizas ahora.</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                Volver a revisar
              </button>
              <button
                onClick={() => {
                  const finalName = modalStudentName.trim() || studentName || 'Estudiante';
                  setStudentName(finalName);
                  setShowSubmitModal(false);
                  onFinishExam();
                }}
                className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#18864B] to-emerald-500 text-white text-sm font-black shadow-lg transition-all hover-lift cursor-pointer"
              >
                Entregar prueba
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tutor IA Modal powered by Gemini 3.8 Flash */}
      <AITutorModal
        isOpen={isAITutorOpen}
        onClose={() => setIsAITutorOpen(false)}
        currentQuestion={currentQuestion}
        currentSection={currentSection}
        selectedAnswerIndex={selectedAnswer}
        allQuestions={allQuestions}
        onSelectQuestion={(idx) => setCurrentIndex(idx)}
      />
    </div>
  );
};
