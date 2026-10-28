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
  MessageSquare
} from 'lucide-react';
import { Question, Section } from '../types';
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
}

export const AITutorView: React.FC<AITutorViewProps> = ({
  sections,
  onStartExam,
  onGoToQuestion
}) => {
  const allQuestions = sections.flatMap(s => s.questions);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentQuestion = allQuestions[selectedQuestionIndex] || allQuestions[0];
  const currentSection = sections.find(s => s.questions.some(q => q.id === currentQuestion?.id));

  // Initialize with welcoming greeting
  useEffect(() => {
    if (messages.length === 0 && currentQuestion) {
      setMessages([
        {
          id: 'welcome-1',
          sender: 'tutor',
          text: `👋 ¡Hola! Te doy la bienvenida a la **Tutoría con IA de PRUEBAS DE AYUDA DE ESTUDIO** con tecnología **Gemini 3.8 Flash**.\n\n` +
            `Estoy aquí para guiarte en cualquiera de las 30 preguntas de Matemáticas, Lenguaje y Razonamiento, o para explicarte conceptos clave paso a paso.\n\n` +
            `Selecciona cualquier pregunta en la columna izquierda o haz clic en uno de los botones de ayuda para comenzar. ¡Aprender es tu superpoder! 🚀`,
          timestamp: new Date(),
          actionType: 'welcome'
        }
      ]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (customPrompt?: string, action: string = 'custom') => {
    const text = customPrompt || inputValue.trim();
    if (!text && action === 'custom') return;

    const studentMsg: Message = {
      id: 'student-' + Date.now(),
      sender: 'student',
      text: text || (action === 'hint' ? '¿Me das una pista?' : action === 'step_by_step' ? 'Explícame paso a paso' : action === 'concept' ? '¿Cuál es el concepto clave?' : 'Dame un ejemplo similar'),
      timestamp: new Date(),
      actionType: action,
      questionNumber: currentQuestion?.number
    };

    setMessages(prev => [...prev, studentMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const payload = {
        message: text,
        action: action === 'step_by_step' ? 'explain_step_by_step' : action,
        questionContext: currentQuestion ? {
          number: currentQuestion.number,
          sectionTitle: currentSection?.title || 'Evaluación',
          subject: currentSection?.shortTitle || 'General',
          questionText: currentQuestion.text,
          options: currentQuestion.options,
          difficulty: 'Diagnóstico Oficial'
        } : null,
        conversationHistory: messages.slice(-4).map(m => ({
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
        throw new Error('Error de conexión');
      }

      const data = await response.json();
      const tutorReplyText = data.reply || 'He recibido tu duda. Tómate un momento para analizar cada opción.';

      setMessages(prev => [
        ...prev,
        {
          id: 'tutor-' + Date.now(),
          sender: 'tutor',
          text: tutorReplyText,
          timestamp: new Date(),
          actionType: action,
          questionNumber: currentQuestion?.number
        }
      ]);
    } catch (err) {
      console.warn('Fallback activated:', err);
      setMessages(prev => [
        ...prev,
        {
          id: 'tutor-fallback-' + Date.now(),
          sender: 'tutor',
          text: `💡 **Orientación Pedagógica:**\n\n` +
            `Para abordar la **Pregunta #${currentQuestion?.number}**, recuerda relacionar el enunciado con las propiedades fundamentales. ` +
            `Descompón el ejercicio en partes más sencillas y descarta las respuestas incoherentes.\n\n` +
            `*¡Sigue adelante con entusiasmo, el esfuerzo diario da grandes frutos!*`,
          timestamp: new Date(),
          actionType: 'fallback'
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
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-fadeIn">
      
      {/* Top Banner with Dynamic Title */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-full">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/10 text-indigo-200 border border-white/15">
            <Bot className="w-3.5 h-3.5 text-indigo-300" />
            <span>Tutoría Inteligente con Gemini 3.8 Flash</span>
          </div>
          <DynamicTitle 
            title="PRUEBAS DE AYUDA DE ESTUDIO" 
            subtitle="ESPACIO DE TUTORÍA PERSONALIZADA • ACLARA DUDAS • APRENDE PASO A PASO"
            size="2xl"
            intervalSeconds={3.5}
            showBadge={true}
          />
        </div>

        <button
          onClick={onStartExam}
          className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
        >
          <span>Ir a Resolver el Examen</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Grid: Question Picker (Left) & Chat Assistant (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Question Navigator */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Banco de 30 Preguntas</span>
            </h3>
            <span className="text-xs text-slate-500 font-semibold">
              3 Áreas
            </span>
          </div>

          <div className="space-y-4 max-h-[620px] overflow-y-auto pr-1">
            {sections.map((section, sIdx) => (
              <div key={section.id} className="space-y-1.5">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 px-2 py-1 bg-slate-50 rounded-lg">
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
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-indigo-50 border border-indigo-300 text-indigo-950 font-bold shadow-2xs'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black shrink-0 ${
                            isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            #{q.number}
                          </span>
                          <span className="truncate">{q.text}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive AI Tutor Chat */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-xs flex flex-col h-[700px] overflow-hidden">
          
          {/* Active Question Preview Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 to-indigo-50/40 border-b border-slate-200 shrink-0 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800">
                Pregunta #{currentQuestion.number} • {currentSection?.shortTitle}
              </span>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                Tutoría didáctica activa
              </span>
            </div>

            <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
              {currentQuestion.text}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
              {currentQuestion.options.map((opt, i) => (
                <div key={i} className="px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="truncate">{opt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Messages Flow */}
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
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 shadow-2xs text-sm leading-relaxed ${
                      isTutor
                        ? 'bg-slate-50 border border-slate-200 text-slate-900'
                        : 'bg-indigo-600 text-white rounded-tr-none'
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-normal space-y-1">
                      {msg.text.split('\n\n').map((paragraph, pIdx) => {
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

                    {isTutor && (
                      <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Tutor Gemini</span>
                          <span>•</span>
                          <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleToggleSpeak(msg.text)}
                            title="Escuchar audio"
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

            {isLoading && (
              <div className="flex gap-3 justify-start animate-fadeIn">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shrink-0 shadow-2xs mt-1">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-2xs flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="font-semibold text-slate-700 ml-1">Gemini está preparando una explicación clara y motivadora...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 shrink-0">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
                <Sparkles className="w-3 h-3 text-indigo-500" />
                Acciones rápidas:
              </span>

              <button
                onClick={() => handleSendMessage('¿Cómo se resuelve paso a paso este ejercicio de forma sencilla?', 'step_by_step')}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50"
              >
                <Calculator className="w-3 h-3" />
                <span>Paso a paso</span>
              </button>

              <button
                onClick={() => handleSendMessage('Dame una pista pedagógica para que yo pueda resolverlo por mi cuenta.', 'hint')}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-amber-50 text-amber-700 border border-amber-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50"
              >
                <Lightbulb className="w-3 h-3" />
                <span>Dame una pista</span>
              </button>

              <button
                onClick={() => handleSendMessage('¿Cuál es la regla ortográfica, matemática o principio lógico de esta pregunta?', 'concept')}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50"
              >
                <BookOpen className="w-3 h-3" />
                <span>Concepto clave</span>
              </button>

              <button
                onClick={() => handleSendMessage('Muéstrame un ejercicio similar para practicar el mismo procedimiento.', 'similar')}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white hover:bg-purple-50 text-purple-700 border border-purple-200 shadow-2xs flex items-center gap-1 shrink-0 transition-colors disabled:opacity-50"
              >
                <BrainCircuit className="w-3 h-3" />
                <span>Ejemplo similar</span>
              </button>
            </div>
          </div>

          {/* Input Form */}
          <div className="p-4 bg-white border-t border-slate-200 shrink-0">
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
                placeholder="Escribe tu consulta personalizada al Tutor IA sobre esta u otra pregunta..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-slate-900 placeholder:text-slate-400"
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

    </div>
  );
};
