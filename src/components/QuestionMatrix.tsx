import React, { useState } from 'react';
import { Section } from '../types';
import { Bookmark, CheckCircle2, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

interface QuestionMatrixProps {
  sections: Section[];
  currentIndex: number;
  onSelectQuestion: (index: number) => void;
  answers: Record<string, number>;
  flagged: Record<string, boolean>;
}

export const QuestionMatrix: React.FC<QuestionMatrixProps> = ({
  sections,
  currentIndex,
  onSelectQuestion,
  answers,
  flagged,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0);
  const totalAnswered = Object.keys(answers).length;
  const progressPercent = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;

  return (
    <div className="liquid-glass-card bg-white dark:bg-[#10152B]/90 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-[#65D8FF]/20 shadow-md dark:shadow-xl space-y-4 backdrop-blur-xl text-slate-800 dark:text-white">
      {/* Header with Mobile Accordion Toggle */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-3">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center gap-2 text-left cursor-pointer lg:cursor-default w-full lg:w-auto justify-between lg:justify-start"
          aria-expanded={isMobileOpen}
          aria-label="Alternar mapa de preguntas"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-[#65D8FF]/15 border border-indigo-200 dark:border-[#65D8FF]/30 text-indigo-600 dark:text-[#65D8FF] flex items-center justify-center shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-sm block">Mapa de Reactivos</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block lg:hidden">
                {totalAnswered} de {totalQuestions} respondidas ({progressPercent}%) • Toca para {isMobileOpen ? 'ocultar' : 'ver'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <span className="text-xs font-mono font-bold text-indigo-700 dark:text-[#65D8FF] bg-indigo-50 dark:bg-[#161F3F] px-2 py-0.5 rounded-lg border border-indigo-200 dark:border-[#65D8FF]/30">
              {totalAnswered}/{totalQuestions}
            </span>
            {isMobileOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </div>
        </button>

        <span className="hidden lg:inline-flex text-xs font-medium text-indigo-700 dark:text-[#65D8FF] bg-indigo-50 dark:bg-[#161F3F] px-2.5 py-0.5 rounded-lg border border-indigo-200 dark:border-[#65D8FF]/30 font-mono">
          {totalAnswered} / {totalQuestions} ({progressPercent}%)
        </span>
      </div>

      {/* Grid: Always visible on desktop (lg:block), togglable on mobile */}
      <div className={`${isMobileOpen ? 'block animate-slideUp' : 'hidden'} lg:block space-y-4`}>
        {sections.map((section) => (
          <div key={section.id} className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
              <span className="truncate pr-2">{section.shortTitle}</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                {section.questions.filter(q => answers[q.id] !== undefined).length}/{section.questions.length}
              </span>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-5 gap-1.5">
              {section.questions.map((q) => {
                const qIndex = q.number - 1;
                const isCurrent = qIndex === currentIndex;
                const isAnswered = answers[q.id] !== undefined;
                const isFlagged = !!flagged[q.id];

                let buttonClasses = 'min-h-[42px] lg:min-h-[36px] text-xs font-bold rounded-xl flex items-center justify-center relative transition-all duration-150 border cursor-pointer hover-lift touch-manipulation ';
                
                if (isCurrent) {
                  buttonClasses += 'ring-2 ring-[#175CD3] dark:ring-[#65D8FF] ring-offset-2 ring-offset-white dark:ring-offset-[#10152B] bg-[#175CD3] dark:bg-[#161F3F] text-white font-black border-[#175CD3] dark:border-[#65D8FF] shadow-sm dark:shadow-[0_0_12px_rgba(101,216,255,0.3)] z-10 ';
                } else if (isAnswered) {
                  buttonClasses += 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/80 ';
                } else {
                  buttonClasses += 'bg-slate-50 dark:bg-slate-900/70 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white ';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      onSelectQuestion(qIndex);
                      setIsMobileOpen(false);
                    }}
                    className={buttonClasses}
                    title={`Pregunta ${q.number} • ${isAnswered ? 'Respondida' : 'Pendiente'}${isFlagged ? ' • Marcada para revisión' : ''}`}
                    aria-label={`Ir a pregunta ${q.number}`}
                  >
                    <span>{q.number}</span>

                    {/* Bookmark indicator */}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FFD166] ring-2 ring-white dark:ring-[#10152B]" title="Marcada para revisión" />
                    )}

                    {/* Answered dot indicator */}
                    {isAnswered && !isCurrent && (
                      <span className="absolute bottom-1 w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#175CD3] dark:bg-[#161F3F] border border-[#175CD3] dark:border-[#65D8FF]" />
            <span>Actual</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-100 dark:bg-emerald-950 border border-emerald-400 dark:border-emerald-500/60" />
            <span>Respondida</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800" />
            <span>Pendiente</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD166]" />
            <span>Revisar</span>
          </div>
        </div>
      </div>
    </div>
  );
};
