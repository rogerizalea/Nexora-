import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Layers, 
  GraduationCap,
  ShieldCheck, 
  SlidersHorizontal,
  ArrowRight,
  HelpCircle,
  Award
} from 'lucide-react';
import { NEXORA_SUBJECTS, buildCustomSubjectExam } from '../data/subjectsData';
import { EducationalLevel, ExamMode } from '../types';

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
  const [educationalLevel, setEducationalLevel] = useState<EducationalLevel | 'Todos'>('Todos');
  const [difficulty, setDifficulty] = useState<'Fácil' | 'Intermedio' | 'Desafiante' | 'Todas'>('Todas');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [examMode, setExamMode] = useState<ExamMode>('practice');

  const selectedSubject = NEXORA_SUBJECTS.find(s => s.id === selectedSubjectId) || NEXORA_SUBJECTS[0];
  
  // Calculate availability based on filters
  let filteredPool = selectedSubject.questions;
  if (educationalLevel !== 'Todos') {
    filteredPool = filteredPool.filter(q => q.educationalLevel === educationalLevel);
  }
  if (difficulty !== 'Todas') {
    filteredPool = filteredPool.filter(q => q.difficulty === difficulty);
  }

  const availableInFilter = filteredPool.length > 0 ? filteredPool.length : selectedSubject.questions.length;
  const maxSelectable = Math.max(1, availableInFilter);
  const finalCount = Math.min(questionCount, maxSelectable);

  const handleConfirmAndStart = () => {
    const { examBank } = buildCustomSubjectExam(
      selectedSubjectId,
      difficulty,
      finalCount,
      examMode,
      educationalLevel
    );
    onStartCustomExam(examBank, examMode);
    onClose();
  };

  const educationalLevelsList: { id: EducationalLevel | 'Todos'; label: string }[] = [
    { id: 'Todos', label: 'Todos' },
    { id: 'Básico', label: 'Básico' },
    { id: 'Intermedio', label: 'Intermedio' },
    { id: 'Bachillerato', label: 'Bachillerato' },
    { id: 'Técnico', label: 'Técnico' },
    { id: 'Universitario', label: 'Universitario' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative liquid-glass-card bg-white/95 dark:bg-[#10152B]/95 rounded-3xl max-w-xl w-full p-5 sm:p-7 shadow-2xl border border-slate-200/90 dark:border-[#65D8FF]/30 my-6 space-y-5 animate-popIn text-slate-800 dark:text-slate-100 backdrop-blur-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-3.5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#10152B] via-[#175CD3] to-[#65D8FF] dark:from-[#65D8FF] dark:to-[#A994FF] text-white dark:text-slate-950 flex items-center justify-center shadow-md shadow-[#65D8FF]/20 shrink-0">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                Configurar Evaluación Personalizada
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                12 materias • 5 niveles educativos • Banco verificado de reactivos
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Options */}
        <div className="space-y-4">
          
          {/* 1. Materia */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              1. Asignatura / Materia (12 Especialidades)
            </label>
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#65D8FF]/30 cursor-pointer"
            >
              {NEXORA_SUBJECTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.questions.length} reactivos en banco)
                </option>
              ))}
            </select>
          </div>

          {/* 2. Nivel Educativo (5 Niveles Requeridos) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#65D8FF]" />
                <span>2. Nivel Educativo</span>
              </label>
              <span className="text-[10px] text-slate-400">Desde Básico hasta Universitario</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
              {educationalLevelsList.map((lvl) => {
                const isSelected = educationalLevel === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setEducationalLevel(lvl.id)}
                    className={`py-2 px-1 text-[11px] font-bold rounded-xl border transition-all cursor-pointer text-center truncate ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#175CD3] to-indigo-600 dark:from-[#65D8FF] dark:to-[#A994FF] text-white dark:text-slate-950 border-transparent shadow-xs font-black'
                        : 'bg-slate-50 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {lvl.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Dificultad */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              3. Nivel de Dificultad
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {(['Todas', 'Fácil', 'Intermedio', 'Desafiante'] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setDifficulty(lvl)}
                  className={`py-2 px-1 text-[11px] font-bold rounded-xl border transition-all cursor-pointer text-center ${
                    difficulty === lvl
                      ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-transparent shadow-xs font-black'
                      : 'bg-slate-50 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Cantidad de Preguntas */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                4. Cantidad de Preguntas
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                Disponibles en filtro: <strong>{availableInFilter}</strong>
              </span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {[5, 10, 15, 20, 30].map((count) => {
                const disabled = availableInFilter < count && count !== 5 && count !== 10;
                return (
                  <button
                    key={count}
                    type="button"
                    disabled={disabled}
                    onClick={() => setQuestionCount(count)}
                    className={`py-2 px-1 rounded-xl border text-[11px] font-bold transition-all cursor-pointer text-center ${
                      questionCount === count
                        ? 'bg-indigo-600 dark:bg-[#65D8FF] text-white dark:text-slate-950 border-transparent shadow-xs font-black'
                        : disabled
                        ? 'bg-slate-100 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 text-slate-400 cursor-not-allowed opacity-50'
                        : 'bg-slate-50 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{count} pts</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. Modalidad */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              5. Modalidad de Evaluación
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setExamMode('practice')}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  examMode === 'practice'
                    ? 'bg-indigo-50/90 dark:bg-indigo-950/70 border-[#175CD3] dark:border-[#65D8FF] ring-2 ring-[#175CD3]/30 dark:ring-[#65D8FF]/40 shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-4 h-4 text-[#175CD3] dark:text-[#65D8FF]" />
                  <span className="font-bold text-xs text-slate-900 dark:text-white">Modo Práctica</span>
                </div>
                <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-tight">
                  Retroalimentación y explicación socrática inmediata del Tutor IA.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setExamMode('exam')}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  examMode === 'exam'
                    ? 'bg-indigo-50/90 dark:bg-indigo-950/70 border-[#175CD3] dark:border-[#65D8FF] ring-2 ring-[#175CD3]/30 dark:ring-[#65D8FF]/40 shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-bold text-xs text-slate-900 dark:text-white">Evaluación Formal</span>
                </div>
                <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-tight">
                  Calificación global, tiempo oficial y certificado al terminar.
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Summary Card with Liquid Glass style */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-[#65D8FF]/20 text-xs space-y-1">
          <span className="font-bold text-slate-900 dark:text-white block text-[11px]">
            Resumen de la Prueba Seleccionada:
          </span>
          <p className="text-[11px] text-slate-700 dark:text-slate-300 font-medium">
            • <strong>Materia:</strong> {selectedSubject.name} <br />
            • <strong>Nivel:</strong> {educationalLevel} • <strong>Dificultad:</strong> {difficulty} • <strong>Reactivos:</strong> {finalCount} <br />
            • <strong>Modalidad:</strong> {examMode === 'exam' ? 'Evaluación Formal' : 'Práctica Formativa'}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-200/80 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={handleConfirmAndStart}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#175CD3] via-[#A994FF] to-[#65D8FF] hover:opacity-95 text-white dark:text-slate-950 text-xs font-black shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <span>Iniciar Evaluación</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
