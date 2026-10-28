import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Sparkles, 
  Send, 
  X, 
  Lightbulb, 
  BookOpen, 
  BrainCircuit, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  RefreshCw, 
  HelpCircle,
  ArrowRight,
  Calculator,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  AlertTriangle,
  Compass,
  CheckCircle2,
  FileText,
  GraduationCap
} from 'lucide-react';
import { Question, Section, EducationalLevel } from '../types';
import { speechReader } from '../utils/speech';
import { DynamicTitle } from './DynamicTitle';

export interface TutorMessage {
  id: string;
  sender: 'student' | 'tutor';
  text: string;
  timestamp: Date;
  actionType?: string;
}

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentQuestion?: Question;
  currentSection?: Section;
  selectedAnswerIndex?: number;
  allQuestions?: Question[];
  onSelectQuestion?: (index: number) => void;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({
  isOpen,
  onClose,
  currentQuestion,
  currentSection,
  selectedAnswerIndex,
  allQuestions = [],
  onSelectQuestion
}) => {
  const [messages, setMessages] = useState<TutorMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<EducationalLevel>('Bachillerato');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isContextCollapsed, setIsContextCollapsed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message when opening or changing questions
  useEffect(() => {
    if (isOpen) {
      if (messages.length === 0 && currentQuestion) {
        const welcomeText = 
          `¡Hola! Soy tu **Tutor Pedagógico con IA (Gemini 3.8 Flash)** 🎓✨.\n\n` +
          `Estoy aquí para acompañarte en la **Pregunta #${currentQuestion.number}** de *${currentSection?.shortTitle || 'esta sección'}*:\n` +
          `> "${currentQuestion.text}"\n\n` +
          `¿En qué puedo ayudarte hoy? Puedes elegir una de las opciones rápidas abajo o escribir tu duda personalizada. ¡Nunca te rindas! 💪`;

        setMessages([
          {
            id: 'welcome-' + Date.now(),
            sender: 'tutor',
            text: welcomeText,
            timestamp: new Date(),
            actionType: 'custom'
          }
        ]);
      }
    }
  }, [isOpen, currentQuestion?.id]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const educationalLevels: EducationalLevel[] = [
    'Básico',
    'Intermedio',
    'Bachillerato',
    'Técnico',
    'Universitario'
  ];

  const handleSendMessage = async (textToSend?: string, actionType: string = 'custom') => {
    const query = textToSend || inputValue.trim();
    if (!query && actionType === 'custom') return;

    let displayActionText = query;
    if (!query) {
      switch (actionType) {
        case 'explain_step_by_step':
          displayActionText = 'Explicación paso a paso: ¿Cómo se resuelve este ejercicio de forma ordenada?';
          break;
        case 'solved_example':
          displayActionText = 'Ejemplo resuelto: Muéstrame un caso similar resuelto paso a paso.';
          break;
        case 'guided_practice':
          displayActionText = 'Práctica guiada: Acompáñame a resolverlo guiando mi razonamiento.';
          break;
        case 'knowledge_check':
          displayActionText = 'Evaluación: Hazme una pregunta clave para verificar si comprendí el tema.';
          break;
        case 'topic_summary':
          displayActionText = 'Resumen del tema: Dame una síntesis clara con fórmulas y principios clave.';
          break;
        case 'clarify_error':
          displayActionText = 'Aclarar errores: ¿Cuáles son las equivocaciones más comunes y cómo evitarlas?';
          break;
        case 'deep_dive':
          displayActionText = 'Profundizar: Explícame aplicaciones prácticas y fundamentos avanzados.';
          break;
        case 'hint':
          displayActionText = 'Pista pedagógica: Dame una orientación para pensar sin darme la solución.';
          break;
        case 'concept':
          displayActionText = 'Concepto clave: ¿Cuál es la regla o principio fundamental detrás de esto?';
          break;
        default:
          displayActionText = 'Consulta pedagógica al Tutor IA';
      }
    }

    const studentMessage: TutorMessage = {
      id: 'student-' + Date.now(),
      sender: 'student',
      text: displayActionText,
      timestamp: new Date(),
      actionType
    };

    setMessages((prev) => [...prev, studentMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const selectedOptionText = 
        selectedAnswerIndex !== undefined && currentQuestion?.options[selectedAnswerIndex]
          ? `${String.fromCharCode(65 + selectedAnswerIndex)}) ${currentQuestion.options[selectedAnswerIndex]}`
          : undefined;

      const payload = {
        message: displayActionText,
        action: actionType,
        level: selectedLevel,
        questionContext: currentQuestion ? {
          number: currentQuestion.number,
          sectionTitle: currentSection?.title || 'Evaluación Diagnóstica',
          subject: currentSection?.shortTitle || 'General',
          level: selectedLevel,
          questionText: currentQuestion.text,
          options: currentQuestion.options,
          studentSelectedOption: selectedOptionText,
          difficulty: 'Diagnóstico Oficial'
        } : {
          level: selectedLevel,
          subject: currentSection?.shortTitle || 'General'
        },
        conversationHistory: messages.slice(-4).map(m => ({
          role: m.sender === 'student' ? 'user' : 'model',
          text: m.text
        }))
      };

      // Verificación de conectividad para el Tutor IA
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        const offlineNotice: TutorMessage = {
          id: 'tutor-offline-' + Date.now(),
          sender: 'tutor',
          text: `📡 **Modo sin conexión activo:**\n\n` +
            `El Tutor IA interactivo requiere conexión a internet para comunicarse con el modelo Gemini.\n\n` +
            `*💡 No te preocupes*: Todo tu banco de 6.000 preguntas, la Práctica Formativa, la Evaluación Formal y el Modo Estudio con lecciones base continúan 100% disponibles sin conexión en este dispositivo.`,
          timestamp: new Date(),
          actionType: 'hint'
        };
        setMessages(prev => [...prev, offlineNotice]);
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Error en el servidor: ${response.status}`);
      }

      const data = await response.json();
      const tutorReplyText = data.reply || 'He recibido tu duda. Continúa analizando con calma y verás que puedes resolverlo.';

      const tutorMessage: TutorMessage = {
        id: 'tutor-' + Date.now(),
        sender: 'tutor',
        text: tutorReplyText,
        timestamp: new Date(),
        actionType
      };

      setMessages((prev) => [...prev, tutorMessage]);
    } catch (err: any) {
      console.warn('Fallback tutor response triggered:', err);
      const fallbackMsg: TutorMessage = {
        id: 'tutor-error-' + Date.now(),
        sender: 'tutor',
        text: `💡 **Guía Pedagógica:**\n\n` +
          `Para resolver esta pregunta, identifica primero qué datos tienes y qué te piden calcular. ` +
          `Descarta las opciones que no coincidan lógicamente con la magnitud del problema y verifica tu operación paso a paso. ` +
          `\n\n*¡Tú tienes el potencial de lograrlo! Intenta de nuevo con calma.*`,
        timestamp: new Date(),
        actionType: 'hint'
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleToggleSpeak = (text: string) => {
    if (isSpeaking) {
      speechReader.stop();
      setIsSpeaking(false);
    } else {
      // Strip markdown symbols for clearer speech
      const cleanText = text.replace(/[*_#>`]/g, '').trim();
      setIsSpeaking(true);
      speechReader.speak(cleanText, () => setIsSpeaking(false));
    }
  };

  const handleResetChat = () => {
    if (isSpeaking) {
      speechReader.stop();
      setIsSpeaking(false);
    }
    setMessages([]);
    if (currentQuestion) {
      setMessages([
        {
          id: 'welcome-' + Date.now(),
          sender: 'tutor',
          text: `¡Conversación reiniciada! Estoy listo para resolver cualquier duda sobre la **Pregunta #${currentQuestion.number}**.`,
          timestamp: new Date(),
          actionType: 'custom'
        }
      ]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full h-[90vh] max-h-[850px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden relative animate-scaleUp">
        
        {/* Top Header */}
        <div className="px-4 sm:px-5 py-3.5 sm:py-4 bg-gradient-to-r from-[#10152B] via-[#161F3F] to-[#10152B] text-white flex items-center justify-between border-b border-[#65D8FF]/20 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-[#65D8FF] via-[#A994FF] to-[#FF78C8] flex items-center justify-center shadow-md shrink-0">
              <Bot className="w-5 h-5 text-[#10152B]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="font-extrabold text-white text-sm sm:text-base tracking-tight">
                  NEXORA • Tutoría IA
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#65D8FF]/15 text-[#65D8FF] border border-[#65D8FF]/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#FFD166]" />
                  Gemini 3.8 Flash
                </span>
              </div>
              <p className="text-[11px] text-[#A994FF]">
                «Activa tu mente. Expande tu futuro» • Aprende a tu ritmo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetChat}
              title="Reiniciar conversación"
              className="p-2 rounded-xl text-indigo-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (isSpeaking) {
                  speechReader.stop();
                  setIsSpeaking(false);
                }
                onClose();
              }}
              className="p-2 rounded-xl text-indigo-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Current Question Context Bar (Collapsible) */}
        {currentQuestion && (
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-5 py-2.5 shrink-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800">
                  Pregunta #{currentQuestion.number}
                </span>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  {currentSection?.title || 'Evaluación Diagnóstica'}
                </span>
              </div>

              {/* Educational Level Selector */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                  <span className="hidden xs:inline">Nivel:</span>
                </span>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value as EducationalLevel)}
                  className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-xs font-bold text-indigo-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-2xs cursor-pointer"
                  title="Ajusta el rigor y enfoque pedagógico del tutor"
                >
                  {educationalLevels.map((lvl) => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>

                <button
                  onClick={() => setIsContextCollapsed(!isContextCollapsed)}
                  className="text-xs text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-0.5 ml-2 cursor-pointer"
                >
                  <span>{isContextCollapsed ? 'Ver' : 'Ocultar'}</span>
                  {isContextCollapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {!isContextCollapsed && (
              <div className="mt-2 text-xs sm:text-sm text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                <p className="font-semibold text-slate-900 leading-snug">
                  {currentQuestion.text}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1 text-[11px]">
                  {currentQuestion.options.map((opt, i) => {
                    const isSelected = selectedAnswerIndex === i;
                    const letter = String.fromCharCode(65 + i);
                    return (
                      <div 
                        key={i} 
                        className={`px-2 py-1 rounded-lg border flex items-center gap-1.5 truncate ${
                          isSelected 
                            ? 'bg-indigo-50 border-indigo-400 text-indigo-900 font-bold' 
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                          {letter}
                        </span>
                        <span className="truncate">{opt}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => {
            const isTutor = msg.sender === 'tutor';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isTutor ? 'justify-start' : 'justify-end'} animate-fadeIn`}
              >
                {isTutor && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shrink-0 shadow-2xs mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 shadow-2xs text-sm leading-relaxed ${
                    isTutor
                      ? 'bg-slate-50 border border-slate-200 text-slate-900'
                      : 'bg-indigo-600 text-white rounded-tr-none'
                  }`}
                >
                  {/* Message formatted with markdown simulation */}
                  <div className="whitespace-pre-wrap font-normal space-y-1">
                    {msg.text.split('\n\n').map((paragraph, pIdx) => {
                      // Process bold text
                      const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                      return (
                        <p 
                          key={pIdx} 
                          dangerouslySetInnerHTML={{ __html: formattedText }}
                          className="leading-relaxed"
                        />
                      );
                    })}
                  </div>

                  {/* Tutor action bar */}
                  {isTutor && (
                    <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Tutor IA Gemini</span>
                        <span>•</span>
                        <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleToggleSpeak(msg.text)}
                          title="Escuchar explicación"
                          className="p-1 rounded hover:bg-slate-200 text-slate-600 transition-colors"
                        >
                          {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-rose-500" /> : <Volume2 className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          onClick={() => handleCopyText(msg.id, msg.text)}
                          title="Copiar texto"
                          className="p-1 rounded hover:bg-slate-200 text-slate-600 transition-colors"
                        >
                          {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex gap-3 justify-start animate-fadeIn">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shrink-0 shadow-2xs mt-1">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-2xs flex items-center gap-2 text-xs text-slate-600">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.4s]"></span>
                <span className="font-semibold text-slate-700 ml-1">Gemini está analizando la mejor forma didáctica de explicarte...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Learning Modes - The 7 Official Pedagogical Modes of NEXORA */}
        <div className="px-3 sm:px-4 py-2.5 bg-slate-50 border-t border-slate-200 shrink-0">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
              <Sparkles className="w-3 h-3 text-indigo-500" />
              <span>Modos didácticos:</span>
            </span>

            <button
              onClick={() => handleSendMessage(undefined, 'explain_step_by_step')}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-sky-50 text-sky-700 border border-sky-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <Calculator className="w-3 h-3 text-sky-600" />
              <span>Paso a paso</span>
            </button>

            <button
              onClick={() => handleSendMessage(undefined, 'solved_example')}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-purple-50 text-purple-700 border border-purple-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <BrainCircuit className="w-3 h-3 text-purple-600" />
              <span>Ejemplo resuelto</span>
            </button>

            <button
              onClick={() => handleSendMessage(undefined, 'guided_practice')}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-amber-50 text-amber-700 border border-amber-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <Compass className="w-3 h-3 text-amber-600" />
              <span>Práctica guiada</span>
            </button>

            <button
              onClick={() => handleSendMessage(undefined, 'knowledge_check')}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Evaluarme</span>
            </button>

            <button
              onClick={() => handleSendMessage(undefined, 'topic_summary')}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <FileText className="w-3 h-3 text-blue-600" />
              <span>Resumen</span>
            </button>

            <button
              onClick={() => handleSendMessage(undefined, 'clarify_error')}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-rose-50 text-rose-700 border border-rose-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <AlertTriangle className="w-3 h-3 text-rose-600" />
              <span>Aclarar errores</span>
            </button>

            <button
              onClick={() => handleSendMessage(undefined, 'deep_dive')}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-violet-50 text-violet-700 border border-violet-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-violet-600" />
              <span>Profundizar</span>
            </button>

            <button
              onClick={() => handleSendMessage(undefined, 'hint')}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-amber-50 text-amber-700 border border-amber-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <Lightbulb className="w-3 h-3 text-amber-500" />
              <span>Pista</span>
            </button>

            <button
              onClick={() => handleSendMessage(undefined, 'concept')}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-teal-50 text-teal-700 border border-teal-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <BookOpen className="w-3 h-3 text-teal-600" />
              <span>Concepto clave</span>
            </button>
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 shrink-0">
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
              placeholder="Escribe tu duda sobre este ejercicio al Tutor IA..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-slate-900 placeholder:text-slate-400 transition-all"
            />

            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-md disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
