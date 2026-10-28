import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Bot, 
  ArrowLeft, 
  CheckCircle2, 
  Bookmark, 
  BookmarkCheck, 
  Clock, 
  Layers, 
  Lightbulb, 
  AlertTriangle, 
  ExternalLink, 
  HelpCircle, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  ChevronRight, 
  ChevronDown, 
  Share2, 
  Check, 
  Copy, 
  Send, 
  X,
  Target,
  FileText,
  Zap,
  Compass,
  ArrowRight
} from 'lucide-react';
import { EducationalLevel, StudyLesson, StudyLessonProgress, AppTab } from '../types';
import { STUDY_LESSONS, getLessonById, getLessonsBySubject } from '../data/study/studyLessonsData';
import { NEXORA_SUBJECTS } from '../data/subjectsData';
import { 
  getAllStudyProgress, 
  getLessonProgress, 
  saveLessonProgress, 
  toggleLessonBookmark, 
  getMostRecentLesson 
} from '../services/studyStorage';
import { speechReader } from '../utils/speech';

interface StudyModeViewProps {
  initialSubjectId?: string;
  initialLessonId?: string;
  returnToTab?: AppTab | null;
  onReturnToPreviousTab?: () => void;
  onGoToPracticeWithSubject?: (subjectId: string) => void;
}

export const StudyModeView: React.FC<StudyModeViewProps> = ({
  initialSubjectId,
  initialLessonId,
  returnToTab,
  onReturnToPreviousTab,
  onGoToPracticeWithSubject
}) => {
  // Navigation & Filter States
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(initialSubjectId || 'all');
  const [selectedLevel, setSelectedLevel] = useState<EducationalLevel | 'Todos'>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(false);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(initialLessonId || null);

  // Lesson Progress Storage State
  const [progressMap, setProgressMap] = useState<Record<string, StudyLessonProgress>>(() => getAllStudyProgress());

  // Speech Reader State
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Interactive Self-Check Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizRevealed, setQuizRevealed] = useState<Record<string, boolean>>({});

  // AI Tutor Drawer State
  const [isTutorOpen, setIsTutorOpen] = useState<boolean>(false);
  const [tutorMessages, setTutorMessages] = useState<Array<{ id: string; sender: 'user' | 'tutor'; text: string; timestamp: Date }>>([]);
  const [tutorInput, setTutorInput] = useState<string>('');
  const [isTutorLoading, setIsTutorLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Active Lesson resolution
  const activeLesson = useMemo(() => {
    if (!activeLessonId) return null;
    return getLessonById(activeLessonId) || STUDY_LESSONS[0];
  }, [activeLessonId]);

  // Synchronize when initialLessonId changes
  useEffect(() => {
    if (initialLessonId) {
      setActiveLessonId(initialLessonId);
    }
  }, [initialLessonId]);

  // Synchronize when initialSubjectId changes
  useEffect(() => {
    if (initialSubjectId && initialSubjectId !== 'all') {
      setSelectedSubjectId(initialSubjectId);
    }
  }, [initialSubjectId]);

  // Stop speech synthesis when changing lesson or unmounting
  useEffect(() => {
    return () => {
      speechReader.stop();
    };
  }, [activeLessonId]);

  // Record reading activity when opening a lesson
  useEffect(() => {
    if (activeLesson) {
      const updated = saveLessonProgress(activeLesson.id, {
        lastReadAt: Date.now()
      });
      setProgressMap(prev => ({ ...prev, [activeLesson.id]: updated }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeLesson?.id]);

  // Toggle Bookmark
  const handleToggleBookmark = (lessonId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextVal = toggleLessonBookmark(lessonId);
    setProgressMap(prev => {
      const existing = prev[lessonId] || { lessonId, lastReadAt: Date.now(), completed: false };
      return {
        ...prev,
        [lessonId]: { ...existing, isBookmarked: nextVal }
      };
    });
  };

  // Toggle Speech
  const handleToggleSpeech = (textToRead: string) => {
    if (isSpeaking) {
      speechReader.stop();
      setIsSpeaking(false);
    } else {
      const clean = textToRead.replace(/[*_#>`$]/g, '').trim();
      setIsSpeaking(true);
      speechReader.speak(clean, () => setIsSpeaking(false));
    }
  };

  // Mark lesson as complete
  const handleToggleComplete = () => {
    if (!activeLesson) return;
    const current = progressMap[activeLesson.id]?.completed;
    const updated = saveLessonProgress(activeLesson.id, {
      completed: !current
    });
    setProgressMap(prev => ({ ...prev, [activeLesson.id]: updated }));
  };

  // Submit Self-Check Question Answer
  const handleSelectQuizOption = (exerciseId: string, optionIdx: number) => {
    setQuizAnswers(prev => ({ ...prev, [exerciseId]: optionIdx }));
    setQuizRevealed(prev => ({ ...prev, [exerciseId]: true }));

    if (activeLesson) {
      const exercises = activeLesson.checkExercises;
      const answeredCount = Object.keys({ ...quizAnswers, [exerciseId]: optionIdx }).length;
      let correctCount = 0;
      exercises.forEach(ex => {
        const selected = ex.id === exerciseId ? optionIdx : quizAnswers[ex.id];
        if (selected === ex.correctIndex) correctCount++;
      });

      const updated = saveLessonProgress(activeLesson.id, {
        quizScore: {
          answered: answeredCount,
          correct: correctCount
        },
        completed: answeredCount === exercises.length ? true : undefined
      });
      setProgressMap(prev => ({ ...prev, [activeLesson.id]: updated }));
    }
  };

  // AI Tutor Quick Actions
  const handleTriggerTutorAction = async (promptText: string, actionLabel: string) => {
    if (!activeLesson) return;
    setIsTutorOpen(true);

    const userMsg = {
      id: 'usr-' + Date.now(),
      sender: 'user' as const,
      text: promptText,
      timestamp: new Date()
    };
    setTutorMessages(prev => [...prev, userMsg]);
    setIsTutorLoading(true);

    try {
      const payload = {
        message: promptText,
        action: actionLabel,
        level: activeLesson.educationalLevel,
        questionContext: {
          number: activeLesson.chapterNumber,
          sectionTitle: activeLesson.topic,
          subject: activeLesson.subjectId,
          level: activeLesson.educationalLevel,
          questionText: `Lección: ${activeLesson.title}\nResumen: ${activeLesson.summary}\nConcepto: ${activeLesson.conceptualExplanation.slice(0, 500)}...`
        },
        conversationHistory: tutorMessages.slice(-4).map(m => ({
          role: m.sender === 'user' ? 'user' : 'model',
          text: m.text
        }))
      };

      const res = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const reply = data.reply || 'He procesado tu consulta. Aplica las propiedades paso a paso para consolidar el aprendizaje.';

      setTutorMessages(prev => [
        ...prev,
        {
          id: 'tut-' + Date.now(),
          sender: 'tutor',
          text: reply,
          timestamp: new Date()
        }
      ]);
    } catch (err) {
      // Robust offline pedagogical response
      setTutorMessages(prev => [
        ...prev,
        {
          id: 'tut-fallback-' + Date.now(),
          sender: 'tutor',
          text: `💡 **Orientación Pedagógica Autónoma sobre: ${activeLesson.title}**\n\n` +
                `1. **Fundamento**: Recuerda que ${activeLesson.summary.toLowerCase()}.\n` +
                `2. **Paso crítico**: Aplica la regla esencial: examina los datos dados antes de realizar sustituciones numéricas.\n` +
                `3. **Autoverificación**: Comprueba siempre tu resultado resolviendo el ejercicio de autoevaluación al final de la lección.`,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsTutorLoading(false);
    }
  };

  // Filtered Lessons
  const filteredLessons = useMemo(() => {
    return STUDY_LESSONS.filter(lesson => {
      // Subject filter
      if (selectedSubjectId !== 'all' && lesson.subjectId !== selectedSubjectId) {
        return false;
      }
      // Level filter
      if (selectedLevel !== 'Todos' && lesson.educationalLevel !== selectedLevel) {
        return false;
      }
      // Bookmark filter
      if (onlyBookmarks && !progressMap[lesson.id]?.isBookmarked) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = lesson.title.toLowerCase().includes(query);
        const matchesSummary = lesson.summary.toLowerCase().includes(query);
        const matchesTopic = lesson.topic.toLowerCase().includes(query);
        const matchesObjectives = lesson.learningObjectives.some(obj => obj.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSummary && !matchesTopic && !matchesObjectives) {
          return false;
        }
      }
      return true;
    });
  }, [selectedSubjectId, selectedLevel, onlyBookmarks, searchQuery, progressMap]);

  // Most recent lesson for "Continuar Leyendo"
  const recentLessonData = useMemo(() => {
    return getMostRecentLesson(STUDY_LESSONS);
  }, [progressMap]);

  // Subject helper dictionary
  const subjectMap = useMemo(() => {
    const map = new Map<string, typeof NEXORA_SUBJECTS[0]>();
    NEXORA_SUBJECTS.forEach(s => map.set(s.id, s));
    return map;
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-6 animate-fadeIn text-slate-800 dark:text-slate-100">
      
      {/* =========================================================================
          VIEW 1: LESSON READER (When a lesson is active)
          ========================================================================= */}
      {activeLesson ? (
        <div className="space-y-6">
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between gap-3 flex-wrap bg-white/90 dark:bg-[#10152B]/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-[#65D8FF]/20 shadow-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveLessonId(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Biblioteca de Lecciones</span>
              </button>

              {returnToTab && onReturnToPreviousTab && (
                <button
                  type="button"
                  onClick={onReturnToPreviousTab}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Volver a la {returnToTab === 'practice' ? 'Práctica' : 'Evaluación'}</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Audio Reader Toggle */}
              <button
                type="button"
                onClick={() => handleToggleSpeech(`${activeLesson.title}. ${activeLesson.summary}. ${activeLesson.conceptualExplanation}`)}
                className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isSpeaking
                    ? 'bg-amber-500 text-white border-amber-600 animate-pulse'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-[#65D8FF]'
                }`}
                title={isSpeaking ? 'Detener lectura en voz alta' : 'Escuchar lección narrada en audio'}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{isSpeaking ? 'Detener voz' : 'Escuchar'}</span>
              </button>

              {/* Bookmark Toggle */}
              <button
                type="button"
                onClick={(e) => handleToggleBookmark(activeLesson.id, e)}
                className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  progressMap[activeLesson.id]?.isBookmarked
                    ? 'bg-[#FFD166]/20 border-[#FFD166] text-[#FFD166]'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-amber-500'
                }`}
                title="Guardar lección en favoritos"
              >
                {progressMap[activeLesson.id]?.isBookmarked ? (
                  <BookmarkCheck className="w-4 h-4 text-[#FFD166] fill-[#FFD166]/30" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">Favorito</span>
              </button>

              {/* Mark Complete Toggle */}
              <button
                type="button"
                onClick={handleToggleComplete}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  progressMap[activeLesson.id]?.completed
                    ? 'bg-emerald-600 text-white border-emerald-700'
                    : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-600/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{progressMap[activeLesson.id]?.completed ? 'Completada' : 'Marcar Leída'}</span>
              </button>
            </div>
          </div>

          {/* Lesson Header Banner */}
          <div className="bg-gradient-to-r from-[#10152B] via-[#161F3F] to-[#10152B] text-white rounded-3xl p-5 sm:p-8 border border-[#65D8FF]/30 shadow-xl space-y-4">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="px-3 py-1 rounded-full font-bold bg-[#175CD3]/80 border border-[#65D8FF]/40 text-[#65D8FF] uppercase tracking-wider">
                {subjectMap.get(activeLesson.subjectId)?.name || activeLesson.subjectId}
              </span>
              <span className="px-3 py-1 rounded-full font-bold bg-purple-500/20 border border-[#A994FF]/40 text-[#A994FF]">
                Nivel {activeLesson.educationalLevel}
              </span>
              <span className="px-3 py-1 rounded-full font-semibold bg-white/10 text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FFD166]" />
                <span>{activeLesson.readingMinutes} min de lectura recomendada</span>
              </span>
              <span className="px-3 py-1 rounded-full font-semibold bg-white/10 text-slate-300">
                Capítulo {activeLesson.chapterNumber} • {activeLesson.topic}
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black text-white leading-tight">
              {activeLesson.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              {activeLesson.summary}
            </p>
          </div>

          {/* AI Tutor Prompts Toolbar (Pedagogical Accelerators) */}
          <div className="bg-gradient-to-r from-[#175CD3]/10 via-[#A994FF]/10 to-transparent p-3.5 rounded-2xl border border-[#65D8FF]/30 dark:border-[#65D8FF]/20 space-y-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#175CD3] to-[#A994FF] flex items-center justify-center text-white shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-[#175CD3] dark:text-[#65D8FF]">
                  Tutor IA Cognitivo • Profundiza este tema
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Respuestas inmediatas adaptadas a tu nivel
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {[
                { label: 'Explícamelo más sencillo', icon: Sparkles, color: 'hover:border-[#65D8FF]' },
                { label: '¿Por qué funciona esto?', icon: Lightbulb, color: 'hover:border-[#FFD166]' },
                { label: 'Dame otro ejemplo práctico', icon: Target, color: 'hover:border-emerald-400' },
                { label: 'Muéstrame los pasos detallados', icon: ChevronRight, color: 'hover:border-[#A994FF]' },
                { label: '¿Qué errores debo evitar?', icon: AlertTriangle, color: 'hover:border-rose-400' },
                { label: 'Relaciónalo con la vida real', icon: Compass, color: 'hover:border-teal-400' },
              ].map((act, i) => {
                const Icon = act.icon;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleTriggerTutorAction(`Por favor ${act.label.toLowerCase()} respecto a la lección "${activeLesson.title}".`, act.label)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap bg-white dark:bg-[#10152B] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#175CD3] dark:hover:text-[#65D8FF] transition-all shadow-2xs hover-lift flex items-center gap-1.5 cursor-pointer ${act.color}`}
                  >
                    <Icon className="w-3 h-3 text-[#175CD3] dark:text-[#65D8FF]" />
                    <span>{act.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Lesson Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Columns: Theory, Formulas, Examples, Pitfalls */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Objectives & Prerequisites */}
              <div className="bg-white dark:bg-[#121B3A]/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-[#65D8FF] font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <h3 className="uppercase tracking-wider">Objetivos de Aprendizaje</h3>
                </div>
                <ul className="space-y-2">
                  {activeLesson.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#175CD3] dark:text-[#65D8FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>

                {activeLesson.prerequisites?.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                    <span className="font-bold text-slate-600 dark:text-slate-400 block mb-1">
                      Conocimientos previos recomendados:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeLesson.prerequisites.map((pre, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                          {pre}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Conceptual Explanation */}
              <div className="bg-white dark:bg-[#121B3A]/80 rounded-2xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-[#175CD3] dark:text-[#65D8FF] font-bold text-sm">
                  <BookOpen className="w-4 h-4" />
                  <h3 className="uppercase tracking-wider">Desarrollo Conceptual</h3>
                </div>

                <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed space-y-3 whitespace-pre-line font-sans">
                  {activeLesson.conceptualExplanation}
                </div>
              </div>

              {/* Formula Box (If applicable) */}
              {activeLesson.formulaBox && (
                <div className="bg-gradient-to-r from-indigo-50/90 via-blue-50/90 to-purple-50/90 dark:from-[#10152B] dark:via-[#161F3F] dark:to-[#10152B] rounded-2xl p-5 border border-indigo-200 dark:border-[#65D8FF]/30 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-indigo-900 dark:text-[#65D8FF] font-black text-xs uppercase tracking-wider">
                    <Zap className="w-4 h-4 text-amber-500 dark:text-[#FFD166]" />
                    <span>{activeLesson.formulaBox.title}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLesson.formulaBox.items.map((item, idx) => (
                      <div key={idx} className="p-3 bg-white/90 dark:bg-[#0c1022]/90 rounded-xl border border-indigo-100 dark:border-slate-800 space-y-1">
                        <span className="text-[11px] font-bold text-indigo-700 dark:text-slate-400 block">
                          {item.label}
                        </span>
                        <code className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-[#65D8FF] block break-all">
                          {item.formula}
                        </code>
                        {item.note && (
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                            {item.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step-by-Step Resolved Examples */}
              {activeLesson.stepByStepExamples?.length > 0 && (
                <div className="bg-white dark:bg-[#121B3A]/80 rounded-2xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-[#65D8FF] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <h3 className="uppercase tracking-wider">Ejemplos Resueltos Paso a Paso</h3>
                  </div>

                  {activeLesson.stepByStepExamples.map((ex, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#10152B] border border-slate-200 dark:border-slate-800 space-y-3">
                      <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {ex.title}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic bg-white dark:bg-[#121B3A] p-3 rounded-lg border border-slate-200/80 dark:border-slate-800">
                        «{ex.statement}»
                      </p>

                      <div className="space-y-2 pt-1">
                        {ex.steps.map((st, stepIdx) => (
                          <div key={stepIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span>{st}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-600/30 text-xs font-bold text-emerald-900 dark:text-emerald-300">
                        Respuesta final demostrada: {ex.finalAnswer}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Common Mistakes & Misconceptions */}
              {activeLesson.commonMistakes?.length > 0 && (
                <div className="bg-amber-50/80 dark:bg-amber-950/20 rounded-2xl p-5 border border-amber-200 dark:border-amber-600/30 space-y-3">
                  <div className="flex items-center gap-2 text-amber-800 dark:text-[#FFD166] font-black text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-[#FFD166]" />
                    <span>Trampas Frecuentes y Errores a Evitar</span>
                  </div>

                  <div className="space-y-2.5">
                    {activeLesson.commonMistakes.map((mis, idx) => (
                      <div key={idx} className="p-3 bg-white/90 dark:bg-[#10152B]/90 rounded-xl border border-amber-200/60 dark:border-slate-800 text-xs space-y-1">
                        <div className="font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                          <span>❌ Error:</span>
                          <span>{mis.mistake}</span>
                        </div>
                        <div className="text-emerald-700 dark:text-emerald-400 font-medium">
                          <strong>✓ Corrección:</strong> {mis.correction}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                          <strong>¿Por qué ocurre?:</strong> {mis.why}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Real World Applications */}
              {activeLesson.practicalApplications?.length > 0 && (
                <div className="bg-white dark:bg-[#121B3A]/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-teal-600 dark:text-[#65D8FF] font-bold text-sm">
                    <Compass className="w-4 h-4" />
                    <h3 className="uppercase tracking-wider">Aplicación en la Vida Real y Tecnología</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLesson.practicalApplications.map((app, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-[#10152B] border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                        <span className="font-bold text-[#175CD3] dark:text-[#65D8FF] block">
                          {app.field}
                        </span>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {app.application}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Mini Quiz Self-Check & Glossary */}
            <div className="space-y-6">
              
              {/* Autoevaluación Rápida (Self-Check Mini Quiz) */}
              <div className="bg-white dark:bg-[#121B3A]/90 rounded-2xl p-5 border border-slate-200 dark:border-[#65D8FF]/20 shadow-xs space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-indigo-700 dark:text-[#65D8FF] font-black text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#FFD166]" />
                    <span>Autoevaluación Rápida</span>
                  </div>
                  <span className="text-[10px] bg-indigo-50 dark:bg-slate-800 text-[#175CD3] dark:text-[#65D8FF] font-bold px-2 py-0.5 rounded-full">
                    {activeLesson.checkExercises.length} preguntas
                  </span>
                </div>

                <div className="space-y-5">
                  {activeLesson.checkExercises.map((ex, exIdx) => {
                    const selected = quizAnswers[ex.id];
                    const isAnswered = selected !== undefined;
                    const isCorrect = selected === ex.correctIndex;

                    return (
                      <div key={ex.id} className="space-y-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#10152B] border border-slate-200 dark:border-slate-800">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block">
                          {exIdx + 1}. {ex.question}
                        </span>

                        <div className="space-y-1.5">
                          {ex.options.map((opt, optIdx) => {
                            const isThisSelected = selected === optIdx;
                            let style = 'bg-white dark:bg-[#121B3A] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-300';

                            if (isAnswered) {
                              if (optIdx === ex.correctIndex) {
                                style = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold';
                              } else if (isThisSelected) {
                                style = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-950 dark:text-rose-100';
                              }
                            } else if (isThisSelected) {
                              style = 'bg-indigo-50 dark:bg-[#161F3F] border-[#175CD3] font-bold';
                            }

                            return (
                              <button
                                key={optIdx}
                                type="button"
                                onClick={() => handleSelectQuizOption(ex.id, optIdx)}
                                className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${style}`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-[10px] shrink-0">
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span>{opt}</span>
                                </div>
                                {isAnswered && optIdx === ex.correctIndex && (
                                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Pedagogical Explanation */}
                        {isAnswered && (
                          <div className={`p-2.5 rounded-lg text-[11px] leading-relaxed animate-slideUp ${
                            isCorrect 
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/40' 
                              : 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 border border-rose-300 dark:border-rose-700/40'
                          }`}>
                            <strong className="block mb-0.5">
                              {isCorrect ? '¡Correcto! Excelente deducción.' : 'Respuesta a reforzar:'}
                            </strong>
                            <span>{ex.explanation}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {onGoToPracticeWithSubject && (
                  <button
                    type="button"
                    onClick={() => onGoToPracticeWithSubject(activeLesson.subjectId)}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-600 hover:to-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs hover-lift cursor-pointer transition-all"
                  >
                    <span>Practicar preguntas de este tema</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Glossary */}
              {activeLesson.glossary?.length > 0 && (
                <div className="bg-white dark:bg-[#121B3A]/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-purple-700 dark:text-[#A994FF] font-black text-xs uppercase tracking-wider">
                    <FileText className="w-4 h-4" />
                    <span>Glosario Clave</span>
                  </div>

                  <div className="space-y-2">
                    {activeLesson.glossary.map((term, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#10152B] border border-slate-200/80 dark:border-slate-800 text-xs">
                        <strong className="text-slate-900 dark:text-white block">
                          {term.term}
                        </strong>
                        <span className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                          {term.definition}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      ) : (
        /* =========================================================================
           VIEW 2: STUDY CATALOG & TOPICS DIRECTORY
           ========================================================================= */
        <div className="space-y-6">
          
          {/* Hero Header */}
          <div className="bg-gradient-to-r from-[#10152B] via-[#161F3F] to-[#10152B] text-white rounded-3xl p-6 sm:p-8 border border-[#65D8FF]/30 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/10 text-[#65D8FF] border border-[#65D8FF]/30">
                <BookOpen className="w-3.5 h-3.5 text-[#65D8FF]" />
                <span>Modo Estudio • Biblioteca Pedagógica NEXORA</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Aprende los Fundamentos Antes de Evaluarte
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed">
                Lecciones estructuradas con rigor conceptual, demostraciones paso a paso, fórmulas esenciales y tutoría inteligente con Gemini 3.8 Flash.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-center">
                <span className="text-xl sm:text-2xl font-black text-[#65D8FF] block font-mono">
                  {STUDY_LESSONS.length}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Lecciones Base
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-center">
                <span className="text-xl sm:text-2xl font-black text-[#FFD166] block font-mono">
                  {Object.values(progressMap).filter(p => p.completed).length}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Completadas
                </span>
              </div>
            </div>
          </div>

          {/* "Continuar Leyendo" Card (If student has previous progress) */}
          {recentLessonData && (
            <div className="bg-gradient-to-r from-blue-50/90 via-indigo-50/90 to-purple-50/90 dark:from-[#10152B] dark:via-[#161F3F] dark:to-[#10152B] p-4 sm:p-5 rounded-2xl border border-blue-200 dark:border-[#65D8FF]/30 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#175CD3] text-white">
                    Continuar Lección
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Capítulo {recentLessonData.lesson.chapterNumber} • {recentLessonData.lesson.topic}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {recentLessonData.lesson.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveLessonId(recentLessonData.lesson.id)}
                className="px-4 py-2 rounded-xl bg-[#175CD3] hover:bg-[#1249a8] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover-lift cursor-pointer transition-all shrink-0"
              >
                <span>Reanudar Lectura</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Search & Filter Controls */}
          <div className="bg-white dark:bg-[#10152B]/90 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            
            {/* Search Input & Bookmarks Toggle */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar tema, concepto, fórmula o palabras clave..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#175CD3] dark:focus:ring-[#65D8FF]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => setOnlyBookmarks(prev => !prev)}
                className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  onlyBookmarks
                    ? 'bg-[#FFD166]/20 border-[#FFD166] text-amber-700 dark:text-[#FFD166]'
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Solo Favoritos</span>
              </button>
            </div>

            {/* Educational Level Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
                Nivel:
              </span>
              {(['Todos', 'Básico', 'Intermedio', 'Bachillerato', 'Técnico', 'Universitario'] as const).map(lvl => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedLevel === lvl
                      ? 'bg-[#175CD3] dark:bg-[#65D8FF] text-white dark:text-slate-950 shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Subject Selector Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
              <button
                type="button"
                onClick={() => setSelectedSubjectId('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedSubjectId === 'all'
                    ? 'bg-[#10152B] dark:bg-white text-white dark:text-slate-900 shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                Todas las Materias ({STUDY_LESSONS.length})
              </button>

              {NEXORA_SUBJECTS.map(subj => {
                const count = getLessonsBySubject(subj.id).length;
                const isSelected = selectedSubjectId === subj.id;

                return (
                  <button
                    key={subj.id}
                    type="button"
                    onClick={() => setSelectedSubjectId(subj.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#175CD3] to-[#A994FF] text-white shadow-2xs'
                        : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    <span>{subj.name}</span>
                    {count > 0 && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                      }`}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lessons Grid */}
          {filteredLessons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredLessons.map(lesson => {
                const progress = progressMap[lesson.id];
                const isCompleted = !!progress?.completed;
                const isBookmarked = !!progress?.isBookmarked;

                return (
                  <div
                    key={lesson.id}
                    onClick={() => setActiveLessonId(lesson.id)}
                    className="p-5 rounded-3xl bg-white dark:bg-[#10152B]/85 border border-slate-200/90 dark:border-slate-800 hover:border-[#65D8FF]/50 dark:hover:border-[#65D8FF]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-4 cursor-pointer hover-lift group relative overflow-hidden"
                  >
                    {isCompleted && (
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                        <div className="bg-emerald-500 text-white text-[9px] font-black py-0.5 right-[-32px] top-[14px] w-[110px] text-center transform rotate-45 shadow-xs">
                          LEÍDA
                        </div>
                      </div>
                    )}

                    <div className="space-y-2.5">
                      {/* Meta badges */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[#175CD3] dark:text-[#65D8FF] border border-blue-200 dark:border-blue-800">
                            {subjectMap.get(lesson.subjectId)?.name || lesson.subjectId}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {lesson.educationalLevel}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => handleToggleBookmark(lesson.id, e)}
                          className="p-1 rounded-lg text-slate-400 hover:text-amber-500 transition-colors"
                          title="Guardar en favoritos"
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="w-4 h-4 text-[#FFD166] fill-[#FFD166]/40" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#175CD3] dark:group-hover:text-[#65D8FF] transition-colors leading-snug">
                        {lesson.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {lesson.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#FFD166]" />
                        <span>{lesson.readingMinutes} min</span>
                      </span>

                      <div className="inline-flex items-center gap-1 font-bold text-[#175CD3] dark:text-[#65D8FF] group-hover:translate-x-1 transition-transform">
                        <span>{isCompleted ? 'Repasar' : 'Comenzar'}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-[#10152B]/80 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                No se encontraron lecciones con los filtros seleccionados
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Prueba restableciendo los filtros de materia o borrando la búsqueda para ver todas las lecciones disponibles.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedSubjectId('all');
                  setSelectedLevel('Todos');
                  setSearchQuery('');
                  setOnlyBookmarks(false);
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-[#175CD3] dark:text-[#65D8FF] hover:bg-slate-200"
              >
                Restablecer Filtros
              </button>
            </div>
          )}

        </div>
      )}

      {/* =========================================================================
          SLIDE-OVER / MODAL: TUTOR IA ASISTENTE COGNITIVO
          ========================================================================= */}
      {isTutorOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="w-full sm:max-w-xl bg-white dark:bg-[#10152B] rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-[#65D8FF]/30 shadow-2xl flex flex-col max-h-[85vh] sm:max-h-[750px] overflow-hidden">
            
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#10152B] to-[#161F3F] text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#175CD3] via-purple-600 to-[#65D8FF] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-white">
                    Tutor IA Cognitivo • Modo Estudio
                  </h3>
                  <p className="text-[10px] text-purple-300">
                    Gemini 3.8 Flash • {activeLesson?.title || 'Orientación Didáctica'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsTutorOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Flow */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs sm:text-sm">
              {tutorMessages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`p-3.5 rounded-2xl max-w-[88%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#175CD3] text-white rounded-tr-xs'
                      : 'bg-slate-100 dark:bg-[#161F3F] text-slate-800 dark:text-slate-100 rounded-tl-xs border border-slate-200/60 dark:border-slate-800'
                  }`}>
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1 px-1">
                    {msg.sender === 'user' ? 'Tú' : 'Tutor IA'}
                  </span>
                </div>
              ))}

              {isTutorLoading && (
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs p-3">
                  <div className="w-2 h-2 rounded-full bg-[#65D8FF] animate-ping" />
                  <span>El Tutor IA está analizando los conceptos pedagógicos...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (tutorInput.trim() && !isTutorLoading) {
                  handleTriggerTutorAction(tutorInput.trim(), 'consulta_libre');
                  setTutorInput('');
                }
              }}
              className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center gap-2"
            >
              <input
                type="text"
                value={tutorInput}
                onChange={(e) => setTutorInput(e.target.value)}
                placeholder="Escribe tu duda pedagógica aquí..."
                className="flex-1 px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#175CD3] dark:focus:ring-[#65D8FF]"
              />
              <button
                type="submit"
                disabled={!tutorInput.trim() || isTutorLoading}
                className="p-2.5 rounded-xl bg-[#175CD3] hover:bg-[#1249a8] disabled:opacity-50 text-white cursor-pointer transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
