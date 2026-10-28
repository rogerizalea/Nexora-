import React, { useState } from 'react';
import { ExamBank } from '../types';
import { ALL_EXAM_BANKS, generateDynamicCustomExam } from '../data/questionBanks';
import { 
  X, 
  Layers, 
  Sparkles, 
  Check, 
  BookOpen, 
  Atom, 
  Globe, 
  ArrowRight,
  RefreshCw,
  AlertCircle,
  Flame,
  Zap,
  BarChart2,
  CheckCircle2
} from 'lucide-react';

interface BankSelectorModalProps {
  currentBankId: string;
  onSelectBank: (bank: ExamBank) => void;
  onClose: () => void;
  hasStartedExam: boolean;
}

export const BankSelectorModal: React.FC<BankSelectorModalProps> = ({
  currentBankId,
  onSelectBank,
  onClose,
  hasStartedExam,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const handleGenerateDynamic = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const dynamicBank = generateDynamicCustomExam();
      setIsGenerating(false);
      onSelectBank(dynamicBank);
      onClose();
    }, 450);
  };

  const getBankMeta = (id: string) => {
    if (id.includes('advanced') || id.includes('difficulty')) {
      return {
        levelName: 'Alta Dificultad / Máximo Reto',
        tier: 4,
        accentColor: 'text-purple-600 bg-purple-50 border-purple-200',
        badgeBg: 'bg-purple-600 text-white',
        icon: <Flame className="w-5 h-5 text-purple-600" />
      };
    }
    if (id.includes('science') || id.includes('stem')) {
      return {
        levelName: 'Nivel Intermedio STEM',
        tier: 3,
        accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
        badgeBg: 'bg-emerald-600 text-white',
        icon: <Atom className="w-5 h-5 text-emerald-600" />
      };
    }
    if (id.includes('humanities') || id.includes('culture')) {
      return {
        levelName: 'Nivel Comprensivo y Social',
        tier: 3,
        accentColor: 'text-blue-600 bg-blue-50 border-blue-200',
        badgeBg: 'bg-blue-600 text-white',
        icon: <Globe className="w-5 h-5 text-blue-600" />
      };
    }
    return {
      levelName: 'Nivel Equilibrado / Diagnóstico General',
      tier: 2,
      accentColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      badgeBg: 'bg-indigo-600 text-white',
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />
    };
  };

  const filteredBanks = ALL_EXAM_BANKS.filter(bank => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'standard') return bank.id.includes('standard');
    if (filterCategory === 'sciences') return bank.id.includes('science') || bank.id.includes('stem');
    if (filterCategory === 'humanities') return bank.id.includes('humanities');
    if (filterCategory === 'advanced') return bank.id.includes('advanced') || bank.id.includes('difficulty');
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 space-y-6 animate-popIn">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-xs">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Elige tu Nivel de Dificultad
              </h2>
              <p className="text-xs text-slate-500">
                Selección abierta para estudiantes: escoge libremente la prueba que deseas realizar.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills for Quick Fluid Navigation */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'Todos los Niveles' },
            { id: 'standard', label: '🟢 Estándar' },
            { id: 'sciences', label: '🔵 Ciencias STEM' },
            { id: 'humanities', label: '🟣 Humanidades' },
            { id: 'advanced', label: '🔥 Alta Dificultad' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterCategory(f.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                filterCategory === f.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {hasStartedExam && (
          <div className="p-3.5 bg-amber-50/90 border border-amber-200 rounded-2xl flex items-center gap-2.5 text-xs text-amber-900 animate-slideUp">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
            <span>Al seleccionar una nueva dificultad, se iniciará un nuevo intento en limpio con las 30 preguntas de ese nivel.</span>
          </div>
        )}

        {/* Bank List */}
        <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
          {filteredBanks.map((bank) => {
            const isSelected = bank.id === currentBankId;
            const meta = getBankMeta(bank.id);

            return (
              <button
                key={bank.id}
                onClick={() => {
                  onSelectBank(bank);
                  onClose();
                }}
                className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between gap-4 cursor-pointer hover-lift ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/25 shadow-xs'
                    : 'border-slate-200 hover:border-indigo-200 hover:bg-slate-50/80'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0 mt-0.5">
                    {meta.icon}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        {bank.title}
                      </span>
                      <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold shadow-2xs ${meta.badgeBg}`}>
                        {bank.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold text-indigo-700">
                        {meta.levelName}
                      </span>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500">
                        <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>30 Preguntas</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {bank.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 pt-1">
                  {isSelected ? (
                    <span className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs shadow-xs">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </span>
                  ) : (
                    <span className="w-7 h-7 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center hover:bg-slate-100 hover:text-slate-700 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Generator Action Card */}
        <div className="pt-2">
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-sm text-amber-200">¿Prefieres un reto aleatorio?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                Genera al instante 30 preguntas dinámicas con números y retos conceptuales aleatorios para seguir practicando.
              </p>
            </div>

            <button
              onClick={handleGenerateDynamic}
              disabled={isGenerating}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{isGenerating ? 'Generando batería...' : 'Generar 30 Preguntas'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
