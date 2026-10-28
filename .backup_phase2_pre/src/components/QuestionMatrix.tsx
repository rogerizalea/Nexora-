import React from 'react';
import { Section, Question } from '../types';
import { Bookmark, CheckCircle2, HelpCircle } from 'lucide-react';

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
  let globalIndexCounter = 0;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs space-y-5">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
          <span>Mapa de Preguntas</span>
          <span className="text-xs font-normal text-slate-500">(1 - 30)</span>
        </h3>
        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
          {Object.keys(answers).length} / 30 Respondidas
        </span>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
              <span className="truncate pr-2">{section.shortTitle}</span>
              <span className="text-[11px] text-slate-400 font-normal">
                {section.questions.filter(q => answers[q.id] !== undefined).length}/{section.questions.length}
              </span>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 gap-1.5">
              {section.questions.map((q) => {
                const qIndex = q.number - 1;
                const isCurrent = qIndex === currentIndex;
                const isAnswered = answers[q.id] !== undefined;
                const isFlagged = !!flagged[q.id];

                let buttonClasses = 'h-9 text-xs font-bold rounded-xl flex items-center justify-center relative transition-all duration-150 border hover:scale-105 active:scale-95 cursor-pointer ';
                
                if (isCurrent) {
                  buttonClasses += 'ring-2 ring-indigo-600 ring-offset-2 z-10 font-black shadow-xs ';
                }

                if (isAnswered) {
                  buttonClasses += 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 ';
                } else {
                  buttonClasses += 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 ';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => onSelectQuestion(qIndex)}
                    className={buttonClasses}
                    title={`Pregunta ${q.number}: ${isAnswered ? 'Respondida' : 'Pendiente'}${isFlagged ? ' (Marcada para revisión)' : ''}`}
                  >
                    <span>{q.number}</span>
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full ring-2 ring-white"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-emerald-100 border border-emerald-300"></span>
          <span>Respondida</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-slate-100 border border-slate-200"></span>
          <span>Pendiente</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <span>Para revisión</span>
        </div>
      </div>
    </div>
  );
};
