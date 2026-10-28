import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  BarChart2, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  SlidersHorizontal,
  ArrowRight
} from 'lucide-react';
import { NEXORA_SUBJECTS, buildCustomSubjectExam, SubjectInfo } from '../data/subjectsData';
import { ExamMode } from '../types';

interface CustomExamConfigModalProps {
  initialSubjectId?: string;
  onStartCustomExam: (customBank: any, mode: ExamMode) => void;
  onClose: () => void;
}

export const CustomExamConfigModal: React.FC<CustomExamConfigModalProps> = ({
  initialSubjectId = 'matematicas',
  onStartCustomExam,
  onClose,
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(initialSubjectId);
  const [difficulty, setDifficulty] = useState<'Fácil' | 'Intermedio' | 'Desafiante' | 'Todas'>('Todas');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [examMode, setExamMode] = useState<ExamMode>('practice');

  const selectedSubject = NEXORA_SUBJECTS.find(s => s.id === selectedSubjectId) || NEXORA_SUBJECTS[0];
  const totalInSubject = selectedSubject.questions.length;
  const availableInDifficulty = difficulty === 'Todas' 
    ? totalInSubject 
    : selectedSubject.questions.filter(q => q.difficulty === difficulty).length;

  const maxSelectable = Math.max(1, availableInDifficulty);
  const finalCount = Math.min(questionCount, maxSelectable);

  const handleConfirmAndStart = () => {
    const { examBank, actualCount } = buildCustomSubjectExam(
      selectedSubjectId,
      difficulty,
      finalCount,
      examMode
    );
    onStartCustomExam(examBank, examMode);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 my-8 space-y-6 animate-popIn text-slate-800 dark:text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                Configurar Evaluación Personalizada
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Personaliza materia, nivel de dificultad y modalidad de estudio.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Options */}
        <div className="space-y-5">
          {/* 1. Materia */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              1. Asignatura / Materia
            </label>
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              {NEXORA_SUBJECTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.questions.length} preguntas disponibles)
                </option>
              ))}
            </select>
          </div>

          {/* 2. Dificultad */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              2. Nivel de Dificultad
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['Todas', 'Fácil', 'Intermedio', 'Desafiante'] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setDifficulty(lvl)}
                  className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all cursor-pointer text-center ${
                    difficulty === lvl
                      ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-transparent shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Cantidad de Preguntas */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                3. Cantidad de Preguntas
              </label>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Disponibles en este filtro: <strong>{availableInDifficulty}</strong>
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[10, 20, 30].map((count) => {
                const disabled = availableInDifficulty < count && count !== 10;
                return (
                  <button
                    key={count}
                    type="button"
                    disabled={disabled}
                    onClick={() => setQuestionCount(count)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                      questionCount === count
                        ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-transparent shadow-xs'
                        : disabled
                        ? 'bg-slate-100 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400 cursor-not-allowed opacity-60'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{count} reactivos</span>
                  </button>
                );
              })}
            </div>
            {availableInDifficulty < questionCount && (
              <p className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                Nota: Se incluirán {finalCount} preguntas disponibles para este criterio.
              </p>
            )}
          </div>

          {/* 4. Modalidad */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              4. Modalidad de Evaluación
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setExamMode('practice')}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  examMode === 'practice'
                    ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/20'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-80'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-bold text-xs text-slate-900 dark:text-white">Modo Práctica</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  Explicación inmediata al responder y acompañamiento del Tutor IA.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setExamMode('exam')}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  examMode === 'exam'
                    ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/20'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-80'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-bold text-xs text-slate-900 dark:text-white">Evaluación Formal</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  Sin retroalimentación hasta entregar. Resultados y puntaje al finalizar.
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
          <span className="font-bold text-slate-800 dark:text-slate-200 block">
            Resumen de la Prueba a Iniciar:
          </span>
          <p className="text-[11px] text-slate-600 dark:text-slate-300">
            • <strong>Materia:</strong> {selectedSubject.name} <br />
            • <strong>Dificultad:</strong> {difficulty} • <strong>Preguntas:</strong> {finalCount} reactivos <br />
            • <strong>Modalidad:</strong> {examMode === 'exam' ? 'Evaluación Formal Calificada' : 'Modo Práctica Formativa'}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={handleConfirmAndStart}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 text-white text-xs font-bold shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <span>Iniciar Evaluación</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
