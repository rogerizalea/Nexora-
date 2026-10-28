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
import { getMotivationalPhraseForQuestion, getProgressMilestoneMessage } from '../utils/motivation';
import { DynamicTitle } from './DynamicTitle';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Volume2, 
  VolumeX, 
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
  BarChart3,
  SlidersHorizontal,
  ArrowRight,
  Heart,
  Trophy,
  Smile,
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
    id: 'sec-1',
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

  // Motivation phrase for the current question
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
        if (optionIdx >= 0 && optionIdx < currentQuestion.options.length) {
          handleSelectOption(optionIdx);
        }
      } else if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
        const charCode = e.key.toLowerCase().charCodeAt(0) - 97;
        if (charCode >= 0 && charCode < currentQuestion.options.length) {
          handleSelectOption(charCode);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentQuestion, selectedAnswer]);

  const handleSelectOption = (idx: number) => {
    soundManager.playSelect();
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: idx
    }));

    // Trigger motivational feedback
    setShowMotivationToast(true);

    if (examMode === 'practice') {
      if (idx === currentQuestion.correctIndex) {
        soundManager.playCorrect();
      } else {
        soundManager.playIncorrect();
      }
    }
  };

  const toggleFlag = () => {
    soundManager.playSelect();
    setFlagged(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const handleNext = () => {
    speechReader.stop();
    setIsSpeaking(false);
    setShowMotivationToast(false);
    if (currentIndex < allQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    speechReader.stop();
    setIsSpeaking(false);
    setShowMotivationToast(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleReadAloud = () => {
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
  };

  // Student difficulty selection with zero permissions required
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
        return <Calculator className="w-4 h-4" />;
      case 'book-open':
        return <BookOpen className="w-4 h-4" />;
      case 'brain':
        return <Brain className="w-4 h-4" />;
      default:
        return <HelpCircle className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Básico':
      case 'Fácil':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Intermedio':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'Desafiante':
      case 'Avanzado':
        return 'text-purple-700 bg-purple-50 border-purple-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  if (!currentQuestion || allQuestions.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-4 animate-fadeIn">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto animate-spin shadow-xs">
          <RefreshCw className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-800">Cargando prueba diagnóstica...</h3>
        <p className="text-xs text-slate-500">Estamos preparando tus preguntas para que inicies con total fluidez.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6">

      {/* 🌟 Dynamic Title Hero Banner with Changing Colors every 3.5s */}
      <div className="bg-gradient-to-r from-[#102A43] via-slate-900 to-[#102A43] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-800 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/10 text-indigo-200 border border-white/15">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Evaluación Diagnóstica Oficial</span>
          </div>
          <DynamicTitle 
            title="PRUEBAS DE AYUDA DE ESTUDIO" 
            subtitle="EVALUACIÓN DIAGNÓSTICA FUNDAMENTAL • 30 PREGUNTAS • 30 PUNTOS"
            size="xl"
            intervalSeconds={3.5}
            showBadge={true}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => setIsAITutorOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#175CD3] via-indigo-600 to-[#18864B] hover:opacity-95 text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 cursor-pointer hover-lift transition-all"
            title="Abrir Tutoría con IA Gemini para consultar dudas del examen"
          >
            <Bot className="w-4 h-4 text-white" />
            <span>Tutoría IA</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          </button>

          <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
            <span className="block text-[10px] text-indigo-200 font-bold uppercase tracking-wider">Modo Activo</span>
            <span className="text-xs font-black text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#18864B] animate-pulse" />
              {isStudentMode ? 'Estudiante Oficial' : 'Evaluación Libre'}
            </span>
          </div>
        </div>
      </div>
      
      {/* 🚀 TOP ANIMATED PROGRESS BAR (Sticky, showing percentage completed, current question number & dynamic title) */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-slate-200/90 shadow-sm space-y-2.5 sm:space-y-3 transition-all duration-300">
        
        {/* Dynamic Title Sub-Header in sticky bar */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs gap-2">
          <div className="flex-1 min-w-0">
            <DynamicTitle 
              title="PRUEBAS DE AYUDA DE ESTUDIO" 
              size="xs"
              intervalSeconds={3.5}
              showBadge={true}
            />
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setIsAITutorOpen(true)}
              className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#175CD3] border border-blue-200 font-bold text-xs flex items-center gap-1 transition-all cursor-pointer shadow-2xs"
              title="Consultar al Tutor IA sobre esta pregunta"
            >
              <Bot className="w-3.5 h-3.5 text-[#175CD3]" />
              <span className="hidden sm:inline">Tutor IA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#18864B] animate-pulse" />
            </button>
            <span className="text-[11px] font-medium text-slate-400 hidden md:inline">
              Colores dinámicos continuos • Clic para alternar
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          
          {/* Current Question Number & Section Info */}
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#102A43] via-[#175CD3] to-indigo-600 text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-xs shrink-0 tracking-tight">
              #{currentQuestion.number}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="text-sm sm:text-base md:text-lg font-black text-slate-900 tracking-tight">
                  Pregunta {currentQuestion.number} <span className="font-normal text-slate-400 text-xs sm:text-sm">de {allQuestions.length}</span>
                </h3>
                <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full border ${getDifficultyColor(currentQuestion.difficulty)}`}>
                  {currentQuestion.difficulty}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium truncate">
                <span className="font-bold text-[#175CD3] truncate">{currentSection.title}</span>
                <span className="hidden sm:inline">•</span>
                <span className="truncate hidden sm:inline">{currentQuestion.skill}</span>
              </div>
            </div>
          </div>

          {/* Animated Completion Percentage and Quick Navigation */}
          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100">
            <div className="text-left sm:text-right">
              <div className="flex items-center gap-1.5 sm:justify-end">
                <span className="text-sm sm:text-base md:text-lg font-black text-[#175CD3] tabular-nums">
                  {progressPercentage}%
                </span>
                <span className="text-xs font-bold text-slate-600">completado</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                <strong className="text-[#175CD3] font-bold">{totalAnswered}</strong> de <strong>{allQuestions.length}</strong> respondidas
              </p>
            </div>

            {/* Quick Question Buttons */}
            <div className="flex items-center gap-1.5 shrink-0 bg-slate-50 p-1 rounded-xl border border-slate-200/80">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  currentIndex === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-700 hover:bg-white hover:text-[#175CD3] hover:shadow-2xs active:scale-95'
                }`}
                title="Pregunta anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === allQuestions.length - 1}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  currentIndex === allQuestions.length - 1
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-700 hover:bg-white hover:text-[#175CD3] hover:shadow-2xs active:scale-95'
                }`}
                title="Siguiente pregunta"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Smooth Animated Progress Bar Track with Shimmer */}
        <div className="space-y-1.5 pt-0.5">
          <div className="w-full h-3 sm:h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/70 shadow-inner relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-emerald-500 transition-all duration-700 ease-out relative overflow-hidden shadow-xs"
              style={{ width: `${Math.max(progressPercentage, totalAnswered > 0 ? 3 : 1)}%` }}
            >
              {/* Shimmer sweep animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-progress-shimmer w-1/2" />
            </div>
          </div>

          {/* Micro Progress Milestone & Question Status */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5 text-indigo-700 font-semibold truncate">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">{getProgressMilestoneMessage(progressPercentage)}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] shrink-0 font-medium">
              {selectedAnswer !== undefined ? (
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Respondida
                </span>
              ) : (
                <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  Por responder
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Student Difficulty Selector Strip */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-sm space-y-3.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">
                  Elige tu Dificultad o Temario
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Libre sin permisos
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Selecciona la dificultad que deseas evaluar. Cada nivel contiene 30 preguntas diagnósticas completas.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBankSelector}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-indigo-300 bg-slate-50 hover:bg-indigo-50/50 text-slate-700 hover:text-indigo-700 text-xs font-bold transition-all duration-200 hover-lift cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Ver todos los detalles</span>
          </button>
        </div>

        {/* 1-Click Interactive Difficulty Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 pt-1">
          {ALL_EXAM_BANKS.map((bank) => {
            const isActive = bank.id === currentBankId;
            const isAdvanced = bank.id.includes('advanced') || bank.id.includes('difficulty');
            const isSciences = bank.id.includes('science') || bank.id.includes('stem');
            const isHumanities = bank.id.includes('humanities');

            let icon = <BookOpen className="w-4 h-4 text-indigo-600" />;
            let difficultyLabel = 'Estándar';

            if (isAdvanced) {
              icon = <Flame className="w-4 h-4 text-purple-600" />;
              difficultyLabel = 'Alta Dificultad 🔥';
            } else if (isSciences) {
              icon = <Atom className="w-4 h-4 text-emerald-600" />;
              difficultyLabel = 'Ciencias STEM';
            } else if (isHumanities) {
              icon = <Globe className="w-4 h-4 text-blue-600" />;
              difficultyLabel = 'Humanidades';
            }

            return (
              <button
                key={bank.id}
                onClick={() => handleSelectDifficulty(bank)}
                className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between gap-2 cursor-pointer hover-lift relative overflow-hidden ${
                  isActive
                    ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-xs'
                    : 'border-slate-200/90 hover:border-indigo-200 hover:bg-slate-50 bg-white'
                }`}
              >
                {isActive && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-600" />
                )}

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <span className={`text-xs font-bold truncate ${isActive ? 'text-indigo-950 font-black' : 'text-slate-800'}`}>
                    {difficultyLabel}
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 truncate">
                  {bank.badge} • 30 reactivos
                </div>
              </button>
            );
          })}

          {/* Random Dynamic Generator Button */}
          <button
            onClick={handleGenerateRandomInstant}
            disabled={isGeneratingRandom}
            className="p-3 rounded-2xl border border-dashed border-amber-300 hover:border-amber-400 bg-amber-50/40 hover:bg-amber-50 text-left transition-all duration-200 flex flex-col justify-between gap-2 cursor-pointer hover-lift group"
            title="Genera un nuevo examen de 30 preguntas con números aleatorios"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingRandom ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
              </div>
              <span className="text-xs font-bold text-amber-900 truncate">
                {isGeneratingRandom ? 'Generando...' : '🎲 Aleatorio'}
              </span>
            </div>
            <div className="text-[11px] text-amber-800/80 truncate">
              Nuevas preguntas
            </div>
          </button>
        </div>
      </div>

      {/* Top Banner: Mode Switcher & Section Tabs */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Section Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {sections.map(section => {
            const isCurrentSection = section.id === currentSection.id;
            const answeredInSection = section.questions.filter(q => answers[q.id] !== undefined).length;
            const firstQuestionOfSection = section.questions[0].number - 1;

            return (
              <button
                key={section.id}
                onClick={() => {
                  speechReader.stop();
                  setIsSpeaking(false);
                  setCurrentIndex(firstQuestionOfSection);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 hover-lift ${
                  isCurrentSection
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {getSectionIcon(section.icon)}
                <span>{section.shortTitle}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  isCurrentSection ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-200 text-slate-700'
                }`}>
                  {answeredInSection}/{section.questions.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mode Selector and Finish Button */}
        <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-medium">
            <button
              onClick={() => setExamMode('exam')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                examMode === 'exam'
                  ? 'bg-white text-indigo-700 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>📝 Modo Evaluación</span>
            </button>
            <button
              onClick={() => setExamMode('practice')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                examMode === 'practice'
                  ? 'bg-white text-indigo-700 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Modo Práctica</span>
            </button>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all duration-200 hover-lift flex items-center gap-1.5 cursor-pointer"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Finalizar</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Question Card (Left/Center) + Question Matrix (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
        {/* Question Area (8 cols on lg) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Animated Question Card container */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-4 sm:space-y-6">
            
            {/* Smooth transition question wrapper */}
            <div key={currentQuestion.id} className="animate-fadeIn space-y-4 sm:space-y-6">
              {/* Question Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#175CD3]">
                    {currentSection.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#102A43] tracking-tight">
                      Pregunta {currentQuestion.number} <span className="text-slate-400 font-normal text-sm sm:text-base">de {allQuestions.length}</span>
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${getDifficultyColor(currentQuestion.difficulty)}`}>
                    {currentQuestion.difficulty}
                  </span>

                  <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-slate-100 text-slate-700 border border-slate-200 hidden sm:inline-block">
                    {currentQuestion.skill}
                  </span>

                  {/* Audio Reader with animated sound waves */}
                  <button
                    onClick={handleReadAloud}
                    className={`p-2.5 rounded-xl border transition-all duration-200 hover-lift cursor-pointer ${
                      isSpeaking
                        ? 'bg-indigo-50 border-indigo-300 text-indigo-600 ring-2 ring-indigo-200'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                    title={isSpeaking ? 'Detener lectura' : 'Leer en voz alta en español'}
                  >
                    {isSpeaking ? (
                      <div className="flex items-center gap-0.5 h-4 px-0.5">
                        <span className="w-0.5 bg-indigo-600 rounded-full sound-bar-1" />
                        <span className="w-0.5 bg-indigo-600 rounded-full sound-bar-2" />
                        <span className="w-0.5 bg-indigo-600 rounded-full sound-bar-3" />
                      </div>
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  {/* Bookmark Button */}
                  <button
                    onClick={toggleFlag}
                    className={`p-2.5 rounded-xl border transition-all duration-200 hover-lift cursor-pointer ${
                      isFlagged
                        ? 'bg-amber-50 border-amber-300 text-amber-600 ring-2 ring-amber-100'
                        : 'border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                    }`}
                    title={isFlagged ? 'Desmarcar revisión' : 'Marcar para revisar luego'}
                  >
                    <Bookmark className={`w-4 h-4 transition-transform active:scale-125 ${isFlagged ? 'fill-amber-500 text-amber-500' : ''}`} />
                  </button>

                  {/* Tutor IA Button in Question Card */}
                  <button
                    onClick={() => setIsAITutorOpen(true)}
                    className="px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs shadow-xs hover:shadow transition-all duration-200 flex items-center gap-1.5 cursor-pointer hover-lift"
                    title="Consultar al Tutor IA (Gemini 3.8 Flash) sobre esta pregunta"
                  >
                    <Bot className="w-3.5 h-3.5 text-white" />
                    <span className="hidden sm:inline">Tutor IA</span>
                    <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="py-2">
                <p className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed">
                  {currentQuestion.text}
                </p>
              </div>

              {/* Options List with Smooth Micro-Interactions */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const letter = String.fromCharCode(65 + idx); // A, B, C, D
                  const isPractice = examMode === 'practice';
                  const hasAnswered = selectedAnswer !== undefined;
                  const isCorrectOption = idx === currentQuestion.correctIndex;

                  let cardStyle = 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/20 bg-white text-slate-800';
                  let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

                  if (isSelected) {
                    cardStyle = 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20 text-indigo-950 font-semibold shadow-xs';
                    badgeStyle = 'bg-indigo-600 text-white border-indigo-600';
                  }

                  // If in practice mode and answered, give immediate visual feedback
                  if (isPractice && hasAnswered) {
                    if (isCorrectOption) {
                      cardStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-2 ring-emerald-400/20';
                      badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                    } else if (isSelected && !isCorrectOption) {
                      cardStyle = 'border-rose-400 bg-rose-50/70 text-rose-950 ring-2 ring-rose-400/20';
                      badgeStyle = 'bg-rose-600 text-white border-rose-600';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer hover:scale-[1.006] active:scale-[0.99] min-h-[52px] ${cardStyle}`}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold border transition-colors shrink-0 ${badgeStyle}`}>
                          {letter}
                        </span>
                        <span className="text-sm sm:text-base leading-relaxed break-words">{option}</span>
                      </div>

                      {isPractice && hasAnswered && (
                        <div className="shrink-0 animate-popIn">
                          {isCorrectOption ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : isSelected ? (
                            <XCircle className="w-5 h-5 text-rose-500" />
                          ) : null}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* 🌟 MOTIVATIONAL CARD DISPLAYED WHEN QUESTION IS ANSWERED / COMPLETED */}
              {selectedAnswer !== undefined && (
                <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50/90 via-indigo-50/70 to-emerald-50/80 border border-indigo-200/80 shadow-xs space-y-3 animate-slideUp">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                        <span>{motivationalPhrase.badge}</span>
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">
                        {motivationalPhrase.authorOrFocus}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Respuesta registrada</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-indigo-100 shadow-2xs flex items-center justify-center shrink-0 text-indigo-600 mt-0.5">
                      <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        "{motivationalPhrase.phrase}"
                      </p>
                      <p className="text-xs text-slate-600">
                        ¡Cada pregunta analizada demuestra tu capacidad y compromiso! Sigue con determinación, no te rindas.
                      </p>
                    </div>
                  </div>

                  {/* Fast Action to Next Question */}
                  {currentIndex < allQuestions.length - 1 ? (
                    <div className="pt-1 flex justify-end">
                      <button
                        onClick={handleNext}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs hover:shadow transition-all duration-200 hover-lift cursor-pointer"
                      >
                        <span>Siguiente pregunta</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="pt-1 flex justify-end">
                      <button
                        onClick={() => setShowSubmitModal(true)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs hover:shadow transition-all duration-200 hover-lift cursor-pointer"
                      >
                        <Trophy className="w-4 h-4 text-amber-300" />
                        <span>¡Prueba completa! Finalizar</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Practice Mode Explanation Accordion / Card */}
              {examMode === 'practice' && selectedAnswer !== undefined && (
                <div className="mt-6 p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-slate-800 space-y-2 animate-slideUp">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <span>Explicación pedagógica y solución:</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {currentQuestion.explanation}
                  </p>
                  <div className="pt-2 text-xs text-amber-950 flex items-center gap-2">
                    <span className="font-semibold">Respuesta correcta:</span>
                    <span className="bg-amber-100 px-2 py-0.5 rounded font-mono font-bold text-amber-900">
                      Opción {String.fromCharCode(65 + currentQuestion.correctIndex)} ({currentQuestion.options[currentQuestion.correctIndex]})
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Question Footer Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  currentIndex === 0
                    ? 'border-slate-100 text-slate-300 cursor-not-allowed'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover-lift cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <span>Atajos: </span>
                <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-600 font-mono">1-4</kbd>
                <span>o</span>
                <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-600 font-mono">A-D</kbd>
              </div>

              {currentIndex < allQuestions.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs hover:shadow transition-all duration-200 hover-lift cursor-pointer"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs hover:shadow transition-all duration-200 hover-lift cursor-pointer"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Finalizar Prueba</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar: Question Matrix (4 cols on lg) */}
        <div className="lg:col-span-4 space-y-4">
          <QuestionMatrix
            sections={sections}
            currentIndex={currentIndex}
            onSelectQuestion={(idx) => {
              speechReader.stop();
              setIsSpeaking(false);
              setShowMotivationToast(false);
              setCurrentIndex(idx);
            }}
            answers={answers}
            flagged={flagged}
          />

          {/* Student Status Card */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 font-bold">
                <User className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Estudiante</span>
                <span className="font-bold text-slate-800 text-sm truncate block">
                  {studentName || 'Estudiante'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 text-center">
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Respondidas</span>
                <span className="text-base font-bold text-slate-800 tabular-nums">{totalAnswered} / 30</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Pendientes</span>
                <span className={`text-base font-bold tabular-nums ${unansweredCount > 0 ? 'text-amber-600' : 'text-emerald-600'}`}>
                  {unansweredCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal: Switching Difficulty when answers exist */}
      {pendingBankChange && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-5 animate-popIn">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-slate-900">
                ¿Cambiar a {pendingBankChange.title}?
              </h3>
              <p className="text-sm text-slate-600">
                Tienes <strong className="text-indigo-600 font-bold">{totalAnswered}</strong> preguntas respondidas en la prueba actual.
              </p>
              <p className="text-xs text-slate-500">
                Al cambiar a este nivel de dificultad, se iniciará un nuevo intento en limpio con las 30 preguntas correspondientes.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setPendingBankChange(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Seguir en la actual
              </button>
              <button
                onClick={handleConfirmDifficultyChange}
                className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 shadow-md transition-all hover-lift"
              >
                Confirmar e Iniciar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal to Submit */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-5 animate-popIn">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
              <FileCheck2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-slate-900">
                ¿Deseas finalizar la prueba diagnóstica?
              </h3>
              <p className="text-sm text-slate-600">
                Has respondido <strong className="text-indigo-600 font-bold">{totalAnswered}</strong> de <strong>30</strong> preguntas.
              </p>

              {/* Student Name Confirmation */}
              <div className="text-left pt-2 space-y-1">
                <label className="text-xs font-bold text-slate-700 block">
                  Nombre del Estudiante (para el informe oficial y registro):
                </label>
                <input
                  type="text"
                  value={modalStudentName}
                  onChange={(e) => setModalStudentName(e.target.value)}
                  placeholder="Escribe tu nombre completo"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50"
                />
              </div>

              {unansweredCount > 0 && (
                <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-2 text-xs text-amber-800 text-left">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>Tienes <strong>{unansweredCount}</strong> preguntas sin responder. Se calificarán con 0 puntos si finalizas ahora.</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Continuar
              </button>
              <button
                onClick={() => {
                  const finalName = modalStudentName.trim() || studentName || 'Estudiante';
                  setStudentName(finalName);
                  setShowSubmitModal(false);
                  onFinishExam();
                }}
                className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 shadow-md transition-all hover-lift cursor-pointer"
              >
                Entregar prueba
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🤖 AI Tutor Modal powered by Gemini 3.8 Flash */}
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
