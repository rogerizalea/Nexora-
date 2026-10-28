import React, { useState, useEffect } from 'react';
import { ExamBank } from '../types';
import { ALL_EXAM_BANKS, generateDynamicCustomExam } from '../data/questionBanks';
import { 
  X, 
  Sparkles, 
  Check, 
  BookOpen, 
  Atom, 
  Globe, 
  ArrowRight,
  RefreshCw,
  AlertCircle,
  Flame,
  Zap
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
  const [selectedBankId, setSelectedBankId] = useState<string>(currentBankId);
  const [isGenerating, setIsGenerating] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleGenerateDynamic = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const dynamicBank = generateDynamicCustomExam();
      setIsGenerating(false);
      onSelectBank(dynamicBank);
      onClose();
    }, 400);
  };

  const handleConfirmSelection = () => {
    if (selectedBankId === 'random-dynamic') {
      handleGenerateDynamic();
      return;
    }
    const targetBank = ALL_EXAM_BANKS.find(b => b.id === selectedBankId);
    if (targetBank) {
      onSelectBank(targetBank);
    }
    onClose();
  };

  const getBankMeta = (id: string) => {
    if (id.includes('advanced') || id.includes('difficulty')) {
      return {
        levelName: 'Alta Dificultad • Pensamiento Complejo',
        badgeBg: 'bg-amber-100 dark:bg-[#FFD166]/20 text-amber-800 dark:text-[#FFD166] border border-amber-300 dark:border-[#FFD166]/40',
        iconBg: 'bg-amber-50 dark:bg-[#FFD166]/15 text-amber-600 dark:text-[#FFD166] border border-amber-200 dark:border-[#FFD166]/30',
        icon: <Flame className="w-5 h-5 text-amber-500 dark:text-[#FFD166]" />,
      };
    }
    if (id.includes('science') || id.includes('stem')) {
      return {
        levelName: 'Ciencias STEM • Analítico y Experimental',
        badgeBg: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30',
        iconBg: 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30',
        icon: <Atom className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      };
    }
    if (id.includes('humanities') || id.includes('culture')) {
      return {
        levelName: 'Humanidades • Lenguaje y Sociedad',
        badgeBg: 'bg-purple-100 dark:bg-[#A994FF]/20 text-purple-800 dark:text-[#A994FF] border border-purple-300 dark:border-[#A994FF]/30',
        iconBg: 'bg-purple-50 dark:bg-[#A994FF]/15 text-purple-600 dark:text-[#A994FF] border border-purple-200 dark:border-[#A994FF]/30',
        icon: <Globe className="w-5 h-5 text-purple-600 dark:text-[#A994FF]" />,
      };
    }
    return {
      levelName: 'Diagnóstico Estándar • Troncal Integrado',
      badgeBg: 'bg-indigo-100 dark:bg-[#65D8FF]/20 text-indigo-800 dark:text-[#65D8FF] border border-indigo-300 dark:border-[#65D8FF]/30',
      iconBg: 'bg-indigo-50 dark:bg-[#65D8FF]/15 text-[#175CD3] dark:text-[#65D8FF] border border-indigo-200 dark:border-[#65D8FF]/30',
      icon: <BookOpen className="w-5 h-5 text-[#175CD3] dark:text-[#65D8FF]" />,
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-challenge-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white dark:bg-[#10152B]/95 text-slate-900 dark:text-white rounded-3xl max-w-2xl w-full p-4 sm:p-6 md:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-slate-200 dark:border-[#65D8FF]/30 backdrop-blur-2xl my-auto flex flex-col max-h-[90dvh] overflow-hidden animate-popIn">
        
        {/* Subtle top ambient hairline glow */}
        <div className="hidden dark:block absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#65D8FF]/70 to-transparent rounded-t-3xl" />

        {/* 1. Encabezado */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-4 shrink-0 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#175CD3] via-[#A994FF] to-[#65D8FF] p-0.5 flex items-center justify-center shadow-md shadow-[#175CD3]/20 shrink-0">
              <div className="w-full h-full bg-white dark:bg-[#10152B] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#175CD3] dark:text-[#65D8FF]" />
              </div>
            </div>
            <div className="min-w-0">
              <h2 id="modal-challenge-title" className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight truncate">
                Elige tu desafío
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 truncate font-medium">
                Cada nivel es una oportunidad para aprender
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-[#65D8FF] outline-hidden border border-slate-200 dark:border-transparent"
            aria-label="Cerrar selector de desafío"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Categorías / Filtros Rápidos (Estándar, Ciencias, Humanidades, Alta Dificultad) */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-3 scrollbar-none shrink-0">
          {[
            { id: 'all', label: 'Todos los desafíos' },
            { id: 'standard', label: 'Estándar' },
            { id: 'sciences', label: 'Ciencias STEM' },
            { id: 'humanities', label: 'Humanidades' },
            { id: 'advanced', label: 'Alta Dificultad' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterCategory(f.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                filterCategory === f.id
                  ? 'bg-gradient-to-r from-[#175CD3] to-[#A994FF] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 3. Información Contextual si el examen ya fue iniciado */}
        {hasStartedExam && (
          <div className="mb-3 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-[#FFD166]/40 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-2.5 shrink-0 animate-slideUp">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-[#FFD166]" />
            <span>
              <strong>Aviso:</strong> Seleccionar otra modalidad iniciará un nuevo intento en limpio con las preguntas de ese nivel, guardando tu historial pero reiniciando la prueba activa.
            </span>
          </div>
        )}

        {/* 4. Lista de Modalidades con Estilo Liquid Glass */}
        <div className="space-y-3 overflow-y-auto pr-1 flex-1 min-h-0 focus-visible:outline-hidden">
          {filteredBanks.map((bank) => {
            const isSelected = selectedBankId === bank.id;
            const meta = getBankMeta(bank.id);
            const questionCount = bank.sections.reduce((acc, s) => acc + s.questions.length, 0);

            return (
              <div
                key={bank.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedBankId(bank.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedBankId(bank.id);
                  }
                }}
                className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between gap-3.5 cursor-pointer relative overflow-hidden select-none hover-lift ${
                  isSelected
                    ? 'border-[#175CD3] dark:border-[#65D8FF] bg-indigo-50/80 dark:bg-[#161F3F]/90 shadow-md ring-2 ring-[#175CD3]/30 dark:ring-[#65D8FF]/40'
                    : 'border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#121B3A]/60 hover:border-slate-300 dark:hover:border-[#65D8FF]/30 hover:bg-slate-50 dark:hover:bg-[#161F3F]/70'
                }`}
              >
                {/* Visual glow backdrop for selected card */}
                {isSelected && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-[#65D8FF]/10 to-transparent dark:from-[#65D8FF]/10 dark:via-[#A994FF]/10 pointer-events-none" />
                )}

                <div className="flex items-start gap-3.5 flex-1 min-w-0 relative z-10">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-xs ${meta.iconBg}`}>
                    {meta.icon}
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-black text-slate-900 dark:text-white text-sm sm:text-base tracking-tight">
                        {bank.title}
                      </span>
                      <span className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full font-bold ${meta.badgeBg}`}>
                        {bank.badge}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-bold text-indigo-700 dark:text-[#65D8FF]">
                        {meta.levelName}
                      </span>
                      <span className="text-slate-400 dark:text-slate-500">•</span>
                      <span className="text-slate-600 dark:text-slate-300 font-mono text-[11px] font-bold shrink-0">
                        {questionCount} reactivos
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {bank.description}
                    </p>
                  </div>
                </div>

                {/* State Indicator */}
                <div className="shrink-0 pt-1 relative z-10">
                  {isSelected ? (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#175CD3] to-[#65D8FF] text-white font-black text-xs shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span className="hidden sm:inline">Seleccionado</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Opción Aleatoria / Reto Dinámico */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelectedBankId('random-dynamic')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedBankId('random-dynamic');
              }
            }}
            className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between gap-3.5 cursor-pointer relative overflow-hidden select-none hover-lift ${
              selectedBankId === 'random-dynamic'
                ? 'border-amber-400 dark:border-[#FFD166] bg-amber-50/90 dark:bg-[#161F3F]/90 shadow-md ring-2 ring-amber-400/40 dark:ring-[#FFD166]/40'
                : 'border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#121B3A]/60 hover:border-amber-300 dark:hover:border-[#FFD166]/40 hover:bg-amber-50/30 dark:hover:bg-[#161F3F]/70'
            }`}
          >
            <div className="flex items-start gap-3.5 flex-1 min-w-0 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-[#FFD166]/15 border border-amber-300 dark:border-[#FFD166]/30 flex items-center justify-center text-amber-700 dark:text-[#FFD166] shrink-0 mt-0.5 shadow-xs">
                <Zap className="w-5 h-5 text-amber-600 dark:text-[#FFD166]" />
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-black text-slate-900 dark:text-white text-sm sm:text-base tracking-tight">
                    Reto Dinámico Aleatorio
                  </span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full font-bold bg-amber-100 dark:bg-[#FFD166]/20 text-amber-800 dark:text-[#FFD166] border border-amber-300 dark:border-[#FFD166]/40">
                    Preguntas infinitas
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-bold text-amber-700 dark:text-[#FFD166]">
                    Algoritmo generador de práctica
                  </span>
                  <span className="text-slate-400 dark:text-slate-500">•</span>
                  <span className="text-slate-600 dark:text-slate-300 font-mono text-[11px] font-bold shrink-0">
                    30 reactivos nuevos
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Genera una batería diagnóstica con valores numéricos y variables conceptuales generadas al instante para entrenar sin límites.
                </p>
              </div>
            </div>

            <div className="shrink-0 pt-1 relative z-10">
              {selectedBankId === 'random-dynamic' ? (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-[#FFD166] text-slate-950 font-black text-xs shadow-sm">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span className="hidden sm:inline">Seleccionado</span>
                </div>
              ) : (
                <div className="w-8 h-8 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-400 flex items-center justify-center hover:border-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors">
                  <RefreshCw className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 5. Barra Inferior con Botón Principal */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 mt-3 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block font-medium">
            NEXORA • «Activa tu mente. Expande tu futuro»
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Cancelar
            </button>

            <button
              onClick={handleConfirmSelection}
              disabled={isGenerating}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 active:scale-95 cursor-pointer hover-lift ${
                selectedBankId === 'random-dynamic'
                  ? 'bg-gradient-to-r from-[#FFD166] via-amber-400 to-amber-500 text-slate-950 hover:opacity-95 shadow-amber-500/20'
                  : 'bg-gradient-to-r from-[#175CD3] via-indigo-600 to-[#65D8FF] text-white hover:opacity-95 shadow-indigo-600/30'
              }`}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Generando batería...</span>
                </>
              ) : selectedBankId === 'random-dynamic' ? (
                <>
                  <RefreshCw className="w-4 h-4" />
                  <span>Generar desafío</span>
                </>
              ) : (
                <>
                  <span>Comenzar desafío</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
