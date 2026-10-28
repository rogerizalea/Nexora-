import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Sparkles, 
  Send, 
  Lightbulb, 
  BookOpen, 
  BrainCircuit, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  RefreshCw, 
  Calculator, 
  ArrowRight,
  Layers,
  HelpCircle,
  ChevronRight,
  GraduationCap,
  AlertTriangle,
  FileText,
  Search,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { Question, Section, EducationalLevel } from '../types';
import { NEXORA_SUBJECTS } from '../data/subjectsData';
import { speechReader } from '../utils/speech';
import { DynamicTitle } from './DynamicTitle';

interface AITutorViewProps {
  sections: Section[];
  onStartExam: () => void;
  onGoToQuestion?: (questionIndex: number) => void;
}

interface Message {
  id: string;
  sender: 'student' | 'tutor';
  text: string;
  timestamp: Date;
  actionType?: string;
  questionNumber?: number;
  subjectName?: string;
  level?: EducationalLevel;
  hasError?: boolean;
}

interface LearningAction {
  id: string;
  label: string;
  shortDesc: string;
  icon: any;
  actionKey: string;
  colorClass: string;
  defaultPrompt: string;
}

export const AITutorView: React.FC<AITutorViewProps> = ({
  sections,
  onStartExam,
  onGoToQuestion
}) => {
  const allQuestions = sections.flatMap(s => s.questions);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('matematicas');
  const [selectedLevel, setSelectedLevel] = useState<EducationalLevel>('Bachillerato');
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTabMode, setActiveTabMode] = useState<'bank' | 'subjects'>('bank');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentSubject = NEXORA_SUBJECTS.find(s => s.id === selectedSubjectId) || NEXORA_SUBJECTS[0];
  const currentQuestion = allQuestions[selectedQuestionIndex] || allQuestions[0];
  const currentSection = sections.find(s => s.questions.some(q => q.id === currentQuestion?.id));

  // The 7 Official NEXORA Pedagogical Learning Modes + 2 Direct Inquiries
  const learningActions: LearningAction[] = [
    {
      id: 'step_by_step',
      label: 'Paso a paso',
      shortDesc: 'Desglose ordenado',
      icon: Calculator,
      actionKey: 'explain_step_by_step',
      colorClass: 'text-[#65D8FF] bg-[#175CD3]/20 border-[#65D8FF]/40 hover:bg-[#175CD3]/30',
      defaultPrompt: '¿Cómo se resuelve este ejercicio paso a paso de forma clara y metódica?'
    },
    {
      id: 'solved_example',
      label: 'Ejemplo resuelto',
      shortDesc: 'Caso modelado',
      icon: BrainCircuit,
      actionKey: 'solved_example',
      colorClass: 'text-[#A994FF] bg-purple-500/20 border-[#A994FF]/40 hover:bg-purple-500/30',
      defaultPrompt: 'Muéstrame un ejemplo resuelto similar con datos parecidos para modelar el proceso.'
    },
    {
      id: 'guided_practice',
      label: 'Práctica guiada',
      shortDesc: 'Resolver juntos',
      icon: Compass,
      actionKey: 'guided_practice',
      colorClass: 'text-[#FFD166] bg-amber-500/20 border-[#FFD166]/40 hover:bg-amber-500/30',
      defaultPrompt: 'Acompáñame a resolverlo paso a paso planteándome preguntas reflexivas intermedias.'
    },
    {
      id: 'knowledge_check',
      label: 'Evaluarme',
      shortDesc: 'Mini-reto de dominio',
      icon: CheckCircle2,
      actionKey: 'knowledge_check',
      colorClass: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/40 hover:bg-emerald-500/30',
      defaultPrompt: 'Hazme una pregunta o mini-reto para comprobar si realmente comprendí este concepto.'
    },
    {
      id: 'topic_summary',
      label: 'Resumen del tema',
      shortDesc: 'Ideas clave',
      icon: FileText,
      actionKey: 'topic_summary',
      colorClass: 'text-[#65D8FF] bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30',
      defaultPrompt: 'Dame un resumen conciso y estructurado de los principios esenciales de este tema.'
    },
    {
      id: 'clarify_error',
      label: 'Aclarar errores',
      shortDesc: 'Prevenir fallos',
      icon: AlertTriangle,
      actionKey: 'clarify_error',
      colorClass: 'text-[#FF78C8] bg-rose-500/20 border-[#FF78C8]/40 hover:bg-rose-500/30',
      defaultPrompt: '¿Cuáles son los errores más comunes que suelen cometerse aquí y cómo evitarlos?'
    },
    {
      id: 'deep_dive',
      label: 'Profundizar',
      shortDesc: 'Aplicación real',
      icon: Sparkles,
      actionKey: 'deep_dive',
      colorClass: 'text-violet-300 bg-indigo-500/20 border-indigo-400/40 hover:bg-indigo-500/30',
      defaultPrompt: 'Profundiza en la fundamentación teórica y las aplicaciones prácticas industriales de esto.'
    },
    {
      id: 'hint',
      label: 'Pista pedagógica',
      shortDesc: 'Guía sin spoiler',
      icon: Lightbulb,
      actionKey: 'hint',
      colorClass: 'text-amber-300 bg-amber-500/20 border-amber-400/40 hover:bg-amber-500/30',
      defaultPrompt: 'Dame una pista reflexiva para pensar por mí mismo sin darme la solución directa.'
    },
    {
      id: 'concept',
      label: 'Concepto clave',
      shortDesc: 'Ley o principio',
      icon: BookOpen,
      actionKey: 'concept',
      colorClass: 'text-teal-300 bg-teal-500/20 border-teal-400/40 hover:bg-teal-500/30',
      defaultPrompt: '¿Cuál es la fórmula, regla gramatical o principio científico exacto detrás de esto?'
    }
  ];

  // Initialize with welcoming greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome-1',
          sender: 'tutor',
          text: `👋 ¡Hola! Te doy la bienvenida al **Tutor Inteligente de NEXORA**.\n\n` +
            `«Activa tu mente. Expande tu futuro» — Estoy aquí para enseñarte a comprender, razonar y dominar cualquier tema de las **12 materias** y en los **5 niveles educativos** (Básico, Intermedio, Bachillerato, Técnico y Universitario).\n\n` +
            `Puedes consultar dudas de las preguntas de la evaluación, explorar cualquier asignatura o usar las **acciones pedagógicas** (Paso a paso, Ejemplo resuelto, Práctica guiada, Evaluarme, Resumen o Aclaración de errores). ¡Pregunta lo que necesites! 🚀`,
          timestamp: new Date(),
          actionType: 'welcome'
        }
      ]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (customPrompt?: string, actionKey: string = 'custom') => {
    const text = (customPrompt || inputValue).trim();
    if (!text && actionKey === 'custom') return;

    const actionDef = learningActions.find(a => a.actionKey === actionKey);
    const displayText = customPrompt || (actionDef ? `${actionDef.label}: ${actionDef.defaultPrompt}` : text);

    const studentMsg: Message = {
      id: 'student-' + Date.now(),
      sender: 'student',
      text: displayText,
      timestamp: new Date(),
      actionType: actionKey,
      questionNumber: currentQuestion?.number,
      subjectName: activeTabMode === 'bank' ? currentSection?.shortTitle : currentSubject.name,
      level: selectedLevel
    };

    setMessages(prev => [...prev, studentMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const payload = {
        message: text || displayText,
        action: actionKey,
        level: selectedLevel,
        questionContext: {
          number: currentQuestion?.number || 1,
          sectionTitle: activeTabMode === 'bank' ? (currentSection?.title || 'Evaluación General') : currentSubject.name,
          subject: activeTabMode === 'bank' ? (currentSection?.shortTitle || 'Materia') : currentSubject.name,
          level: selectedLevel,
          questionText: currentQuestion ? currentQuestion.text : `Consulta sobre ${currentSubject.name}`,
          options: currentQuestion ? currentQuestion.options : undefined,
          studentSelectedOption: undefined
        },
        conversationHistory: messages.slice(-6).map(m => ({
          role: m.sender === 'student' ? 'user' : 'model',
          text: m.text
        }))
      };

      const response = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: Respuesta no satisfactoria`);
      }

      const data = await response.json();
      const tutorReplyText = data.reply || 'He analizado tu duda. Recuerda examinar los datos antes de resolver.';

      setMessages(prev => [
        ...prev,
        {
          id: 'tutor-' + Date.now(),
          sender: 'tutor',
          text: tutorReplyText,
          timestamp: new Date(),
          actionType: actionKey,
          questionNumber: currentQuestion?.number,
          subjectName: currentSubject.name,
          level: selectedLevel
        }
      ]);
    } catch (err: any) {
      console.warn('Tutor service fallback engaged:', err);
      // Construct rich autonomous pedagogical guidance
      setMessages(prev => [
        ...prev,
        {
          id: 'tutor-fallback-' + Date.now(),
          sender: 'tutor',
          text: `💡 **Orientación Pedagógica Autónoma (${currentSubject.name} • ${selectedLevel})**:\n\n` +
            `Para abordar con éxito esta duda sobre **${currentQuestion ? `la Pregunta #${currentQuestion.number}` : currentSubject.name}**:\n\n` +
            `1. **Paso 1**: Identifica la relación entre los datos dados y la propiedad fundamental.\n` +
            `2. **Paso 2**: Desglosa la solución paso por paso verificando signos, unidades y sentido lógico.\n` +
            `3. **Paso 3**: Descarta opciones incoherentes antes de concluir.\n\n` +
            `*(El motor autónomo local mantiene tu sesión activa sin interrupciones).*`,
          timestamp: new Date(),
          actionType: 'fallback',
          hasError: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleSpeak = (text: string) => {
    if (isSpeaking) {
      speechReader.stop();
      setIsSpeaking(false);
    } else {
      const cleanText = text.replace(/[*_#>`]/g, '').trim();
      setIsSpeaking(true);
      speechReader.speak(cleanText, () => setIsSpeaking(false));
    }
  };

  const handleCopyText = (id: string, text: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {}
  };

  const educationalLevels: EducationalLevel[] = [
    'Básico',
    'Intermedio',
    'Bachillerato',
    'Técnico',
    'Universitario'
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6 animate-fadeIn">
      
      {/* ================= HERO BANNER ================= */}
      <div className="bg-gradient-to-r from-[#10152B] via-[#161F3F] to-[#10152B] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#65D8FF]/20 shadow-lg shadow-[#10152B]/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-full">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/10 text-[#65D8FF] border border-[#65D8FF]/30">
            <Bot className="w-3.5 h-3.5 text-[#65D8FF]" />
            <span>Tutoría Inteligente NEXORA</span>
          </div>
          <DynamicTitle 
            title="NEXORA" 
            subtitle="«Activa tu mente. Expande tu futuro» • Tutoría Pedagógica Socrática • Aprende a tu ritmo"
            size="xl"
            intervalSeconds={3.5}
            showBadge={true}
          />
        </div>

        <button
          onClick={onStartExam}
          className="px-4 sm:px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#175CD3] via-[#A994FF] to-[#FF78C8] hover:opacity-95 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer active:scale-95"
        >
          <span>Ir a Resolver el Examen</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ================= LEVEL & CONTEXT SELECTOR STRIP ================= */}
      <div className="liquid-glass-card bg-white/95 dark:bg-[#10152B]/90 rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 dark:border-[#65D8FF]/25 shadow-xs flex flex-wrap items-center justify-between gap-3 backdrop-blur-xl">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#65D8FF]" />
            <span>Nivel Educativo:</span>
          </span>
          <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-none">
            {educationalLevels.map((lvl) => {
              const isSelected = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#175CD3] to-indigo-600 dark:from-[#65D8FF] dark:to-[#A994FF] text-white dark:text-slate-950 font-black shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
                  }`}
                >
                  {lvl}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 dark:text-slate-400 font-medium">Modo activo:</span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-bold text-[11px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Razonamiento Pedagógico
          </span>
        </div>
      </div>

      {/* ================= MAIN TWO-COLUMN WORKSPACE ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
        
        {/* LEFT COLUMN: Subject or Question Explorer (4 cols) */}
        <div className="lg:col-span-4 liquid-glass-card bg-white/95 dark:bg-[#10152B]/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200/90 dark:border-[#65D8FF]/20 shadow-xs space-y-3.5 backdrop-blur-xl">
          
          {/* Sub-Tabs: Examen vs 12 Materias */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl text-xs font-bold border border-slate-200/60 dark:border-slate-800">
            <button
              onClick={() => setActiveTabMode('bank')}
              className={`py-1.5 rounded-lg transition-all text-center cursor-pointer ${
                activeTabMode === 'bank'
                  ? 'bg-white dark:bg-[#175CD3] text-indigo-600 dark:text-white shadow-xs font-black'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Examen ({allQuestions.length})
            </button>
            <button
              onClick={() => setActiveTabMode('subjects')}
              className={`py-1.5 rounded-lg transition-all text-center cursor-pointer ${
                activeTabMode === 'subjects'
                  ? 'bg-white dark:bg-[#175CD3] text-indigo-600 dark:text-white shadow-xs font-black'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              12 Materias
            </button>
          </div>

          {/* List Content */}
          {activeTabMode === 'bank' ? (
            <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
              {sections.map((section) => (
                <div key={section.id} className="space-y-1.5">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 px-2 py-1 bg-slate-100 dark:bg-slate-900/80 rounded-lg border border-slate-200/50 dark:border-slate-800">
                    {section.title}
                  </div>
                  <div className="space-y-1">
                    {section.questions.map((q) => {
                      const globalIdx = allQuestions.findIndex(item => item.id === q.id);
                      const isSelected = globalIdx === selectedQuestionIndex;
                      return (
                        <button
                          key={q.id}
                          onClick={() => setSelectedQuestionIndex(globalIdx)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-300 dark:border-[#65D8FF]/60 text-indigo-950 dark:text-white font-bold shadow-2xs'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate min-w-0">
                            <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black shrink-0 ${
                              isSelected ? 'bg-indigo-600 dark:bg-[#65D8FF] text-white dark:text-slate-950' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
                            }`}>
                              #{q.number}
                            </span>
                            <span className="truncate">{q.text}</span>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-indigo-600 dark:text-[#65D8FF]' : 'text-slate-400'}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-1.5 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
              {NEXORA_SUBJECTS.map((sub) => {
                const isSelected = sub.id === selectedSubjectId;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubjectId(sub.id)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-300 dark:border-[#65D8FF]/60 text-indigo-950 dark:text-white font-bold shadow-2xs'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-transparent'
                    }`}
                  >
                    <div className="min-w-0 truncate">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${isSelected ? 'bg-[#65D8FF]' : 'bg-slate-400'}`} />
                        <span className="font-bold truncate">{sub.name}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">
                        {sub.shortDescription}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 shrink-0">
                      {sub.questions.length}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Interactive AI Tutor Chat (8 cols) */}
        <div className="lg:col-span-8 liquid-glass-card bg-white/95 dark:bg-[#10152B]/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-[#65D8FF]/20 shadow-xs flex flex-col h-[680px] overflow-hidden backdrop-blur-2xl">
          
          {/* Active Context Card Header */}
          <div className="p-3.5 sm:p-4 bg-gradient-to-r from-slate-50 to-indigo-50/50 dark:from-slate-900/90 dark:to-[#161F3F] border-b border-slate-200/80 dark:border-slate-800 shrink-0 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-black px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-[#65D8FF] border border-indigo-200 dark:border-indigo-800/60">
                {activeTabMode === 'bank' ? `Pregunta #${currentQuestion.number} • ${currentSection?.shortTitle}` : currentSubject.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Nivel: <strong className="text-slate-900 dark:text-white">{selectedLevel}</strong>
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug line-clamp-2">
              {activeTabMode === 'bank' ? currentQuestion.text : currentSubject.shortDescription}
            </p>

            {activeTabMode === 'bank' && currentQuestion.options && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1 text-[11px]">
                {currentQuestion.options.map((opt, i) => (
                  <div key={i} className="px-2 py-1 rounded-lg bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 truncate">
                    <span className="w-4 h-4 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-[9px] shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="truncate">{opt}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-4 scrollbar-thin">
            {messages.map((msg) => {
              const isTutor = msg.sender === 'tutor';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 sm:gap-3 ${isTutor ? 'justify-start' : 'justify-end'} animate-fadeIn`}
                >
                  {isTutor && (
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#175CD3] via-[#A994FF] to-[#65D8FF] text-slate-950 flex items-center justify-center shrink-0 shadow-xs mt-1 font-bold">
                      <Bot className="w-4 h-4 text-slate-950" />
                    </div>
                  )}

                  <div
                    className={`max-w-[88%] sm:max-w-[82%] rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed ${
                      isTutor
                        ? 'liquid-glass-card bg-slate-50/90 dark:bg-[#161F3F]/90 border border-slate-200/90 dark:border-[#65D8FF]/20 text-slate-900 dark:text-slate-100'
                        : 'bg-gradient-to-r from-[#175CD3] to-indigo-600 text-white rounded-tr-none shadow-md'
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-normal space-y-1.5">
                      {msg.text.split('\n\n').map((paragraph, pIdx) => {
                        const formattedText = paragraph
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>');
                        return (
                          <p 
                            key={pIdx} 
                            dangerouslySetInnerHTML={{ __html: formattedText }}
                            className="leading-relaxed"
                          />
                        );
                      })}
                    </div>

                    {isTutor && (
                      <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                        <div className="flex items-center gap-1.5 text-[10px]">
                          <span className="font-bold text-indigo-600 dark:text-[#65D8FF]">Tutor NEXORA</span>
                          <span>•</span>
                          <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleToggleSpeak(msg.text)}
                            title="Escuchar explicación en voz alta"
                            className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
                          >
                            {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-rose-500" /> : <Volume2 className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => handleCopyText(msg.id, msg.text)}
                            title="Copiar respuesta"
                            className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
                          >
                            {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-2.5 sm:gap-3 justify-start animate-fadeIn">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#65D8FF] to-[#A994FF] text-slate-950 flex items-center justify-center shrink-0 shadow-xs mt-1">
                  <Bot className="w-4 h-4 animate-spin text-slate-950" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 shadow-xs flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#65D8FF] animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-[#A994FF] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#FF78C8] animate-bounce [animation-delay:0.4s]"></span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200 ml-1">
                    Preparando razonamiento pedagógico claro y fundamentado...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Pedagogical Action Chips (Horizontal Scrollable) */}
          <div className="px-3 sm:px-4 py-2 bg-slate-50/90 dark:bg-slate-900/90 border-t border-slate-200/80 dark:border-slate-800 shrink-0">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
                <Sparkles className="w-3 h-3 text-[#65D8FF]" />
                <span>Modos:</span>
              </span>

              {learningActions.map((act) => {
                const Icon = act.icon;
                return (
                  <button
                    key={act.id}
                    onClick={() => handleSendMessage(act.defaultPrompt, act.actionKey)}
                    disabled={isLoading}
                    title={act.shortDesc}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border flex items-center gap-1.5 shrink-0 transition-all cursor-pointer disabled:opacity-50 active:scale-95 ${act.colorClass}`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{act.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Input Form Bar */}
          <div className="p-3 sm:p-4 bg-white dark:bg-[#10152B] border-t border-slate-200/80 dark:border-slate-800 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(undefined, 'custom');
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={`Pregunta al Tutor sobre ${activeTabMode === 'bank' ? `Pregunta #${currentQuestion.number}` : currentSubject.name} (${selectedLevel})...`}
                disabled={isLoading}
                className="flex-1 px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#65D8FF]/40"
              />

              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-[#175CD3] to-indigo-600 hover:from-indigo-600 hover:to-violet-600 text-white font-bold transition-all shadow-md disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shrink-0 cursor-pointer active:scale-95"
                title="Enviar consulta"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
};
