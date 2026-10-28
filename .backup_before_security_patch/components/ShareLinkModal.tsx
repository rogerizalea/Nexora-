import React, { useState, useEffect, useRef } from 'react';
import { ExamBank } from '../types';
import { ALL_EXAM_BANKS } from '../data/questionBanks';
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  Lock, 
  ShieldCheck, 
  Share2, 
  CheckCircle2, 
  MessageCircle, 
  ChevronDown,
  BookOpen,
  Atom,
  Globe,
  Flame
} from 'lucide-react';
import { soundManager } from '../utils/sound';

interface ShareLinkModalProps {
  currentBank: ExamBank;
  onClose: () => void;
}

export const ShareLinkModal: React.FC<ShareLinkModalProps> = ({
  currentBank,
  onClose,
}) => {
  const [selectedBankId, setSelectedBankId] = useState<string>(currentBank.id);
  const [forceExamMode, setForceExamMode] = useState<boolean>(true);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [copiedMessage, setCopiedMessage] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isDropdownOpen) {
          setIsDropdownOpen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDropdownOpen, onClose]);

  // Generate robust, public student URL
  const getPublicStudentUrl = (): string => {
    if (typeof window === 'undefined') return '';
    let origin = window.location.origin;

    // Detect if this is an AI Studio private dev domain and convert to public preview domain
    if (origin.includes('ais-dev-')) {
      origin = origin.replace('ais-dev-', 'ais-pre-');
    }

    const pathname = window.location.pathname || '/';
    return `${origin}${pathname}?mode=student&bank=${selectedBankId}${forceExamMode ? '&strict=true' : ''}`;
  };

  const studentUrl = getPublicStudentUrl();
  const selectedBank = ALL_EXAM_BANKS.find(b => b.id === selectedBankId) || currentBank;

  const getBankIcon = (id: string) => {
    if (id.includes('advanced') || id.includes('difficulty')) {
      return <Flame className="w-4 h-4 text-[#FFD166]" />;
    }
    if (id.includes('science') || id.includes('stem')) {
      return <Atom className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />;
    }
    if (id.includes('humanities') || id.includes('culture')) {
      return <Globe className="w-4 h-4 text-purple-600 dark:text-[#A994FF]" />;
    }
    return <BookOpen className="w-4 h-4 text-[#175CD3] dark:text-[#65D8FF]" />;
  };

  const handleCopyLink = async () => {
    try { soundManager.playSelect(); } catch {}
    try {
      await navigator.clipboard.writeText(studentUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = studentUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleCopyMessage = async () => {
    try { soundManager.playSelect(); } catch {}
    const message = `📘 *NEXORA — PLATAFORMA EDUCATIVA*\n«Activa tu mente. Expande tu futuro»\n\nEstimados estudiantes, ingresen al siguiente enlace para rendir su prueba (${selectedBank.title}):\n👉 ${studentUrl}\n\n*Instrucciones:*\n• Total: 30 preguntas de opción múltiple (1 punto c/u).\n• Aprende a tu ritmo. Supera nuevos desafíos.\n• No necesitan instalar nada ni iniciar sesión.\n• Al responder cada pregunta recibirán retroalimentación pedagógica.\n• Al finalizar, ingresen su nombre para generar su certificado y registrar su puntaje.\n\n¡Activa tu mente y da lo mejor de ti!`;

    try {
      await navigator.clipboard.writeText(message);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = message;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-share-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white dark:bg-[#10152B] text-slate-900 dark:text-slate-100 rounded-3xl max-w-xl w-full p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-slate-200 dark:border-[#65D8FF]/30 my-6 space-y-4 sm:space-y-5 animate-popIn backdrop-blur-2xl">
        
        {/* Ambient Top Hairline in Dark Mode */}
        <div className="hidden dark:block absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#65D8FF]/70 to-transparent rounded-t-3xl" />

        {/* 1. Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-3.5 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#18864B] via-emerald-600 to-[#65D8FF] text-white flex items-center justify-center shadow-md shadow-emerald-600/25 shrink-0">
              <Share2 className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 id="modal-share-title" className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight truncate">
                  Enlace Seguro para Estudiantes
                </h2>
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100/90 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700/60 px-2 py-0.5 rounded-full">
                  Acceso Público
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 truncate font-medium">
                Tus alumnos acceden directamente sin cuentas de desarrollador y con protección total.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-[#65D8FF] outline-hidden border border-slate-200 dark:border-slate-700/60"
            aria-label="Cerrar modal de compartir"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Public Access Verification Notice */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30 text-xs space-y-1.5 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Enlace Público Optimizado (Carga asegurada para todos los alumnos):</span>
          </div>
          <p className="text-emerald-950 dark:text-emerald-100 leading-relaxed text-[11px] pl-6 font-medium">
            El enlace está configurado con la URL pública compartida. Tus estudiantes podrán abrirlo desde cualquier celular, tablet o navegador sin iniciar sesión con Google ni requerir permisos de desarrollador.
          </p>
        </div>

        {/* 3. Protections List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#161F3F] border border-slate-200 dark:border-slate-800 flex items-start gap-2.5 text-slate-700 dark:text-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span><strong className="text-slate-900 dark:text-white font-bold">Sin Modificaciones:</strong> Las preguntas y claves no pueden ser alteradas por los alumnos.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#161F3F] border border-slate-200 dark:border-slate-800 flex items-start gap-2.5 text-slate-700 dark:text-slate-200">
            <Lock className="w-4 h-4 text-indigo-600 dark:text-[#65D8FF] shrink-0 mt-0.5" />
            <span><strong className="text-slate-900 dark:text-white font-bold">Privacidad Total:</strong> Oculta notas y registros de otros estudiantes.</span>
          </div>
        </div>

        {/* 4. Link Configuration (Selector de Prueba y Modo Estricto) */}
        <div className="space-y-3.5 pt-0.5">
          {/* Custom Accessible Liquid Glass Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <label 
              id="label-assigned-test"
              className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5"
            >
              Prueba asignada para el enlace:
            </label>

            {/* Trigger Button: Closed Dropdown */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              aria-labelledby="label-assigned-test"
              className="w-full p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#65D8FF] bg-slate-50 hover:bg-slate-100/90 dark:bg-[#161F3F] dark:hover:bg-[#1c2750] border-slate-300 dark:border-[#65D8FF]/40 text-slate-900 dark:text-white shadow-xs"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-white dark:bg-[#10152B] border border-slate-200 dark:border-[#65D8FF]/30 flex items-center justify-center shrink-0 shadow-2xs">
                  {getBankIcon(selectedBank.id)}
                </div>
                <div className="min-w-0">
                  <span className="font-bold text-sm block truncate text-slate-900 dark:text-white">
                    {selectedBank.title}
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-[#65D8FF] block truncate font-medium">
                    30 preguntas • {selectedBank.badge}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-slate-600 dark:text-[#65D8FF] shrink-0">
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {/* Dropdown Menu: Open State with High Contrast in Both Light & Dark */}
            {isDropdownOpen && (
              <div 
                ref={listboxRef}
                role="listbox"
                aria-labelledby="label-assigned-test"
                className="absolute z-30 left-0 right-0 mt-2 rounded-2xl border shadow-2xl p-2 space-y-1.5 backdrop-blur-2xl animate-popIn bg-white dark:bg-[#10152B] border-slate-300 dark:border-[#65D8FF]/50 text-slate-900 dark:text-white max-h-64 overflow-y-auto"
              >
                {ALL_EXAM_BANKS.map((bank) => {
                  const isSelected = bank.id === selectedBankId;
                  return (
                    <div
                      key={bank.id}
                      role="option"
                      aria-selected={isSelected}
                      tabIndex={0}
                      onClick={() => {
                        setSelectedBankId(bank.id);
                        setIsDropdownOpen(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedBankId(bank.id);
                          setIsDropdownOpen(false);
                        }
                      }}
                      className={`p-2.5 sm:p-3 rounded-xl cursor-pointer transition-all flex items-center justify-between gap-3 text-left ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-[#161F3F] text-indigo-950 dark:text-white font-bold border border-indigo-300 dark:border-[#65D8FF]/70 ring-1 ring-indigo-500/20 dark:ring-[#65D8FF]/40'
                          : 'hover:bg-slate-100 dark:hover:bg-[#161F3F]/80 text-slate-800 dark:text-slate-200 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${
                          isSelected 
                            ? 'bg-white dark:bg-[#10152B] border-indigo-200 dark:border-[#65D8FF]/40' 
                            : 'bg-slate-100 dark:bg-[#161F3F] border-slate-200 dark:border-slate-800'
                        }`}>
                          {getBankIcon(bank.id)}
                        </div>
                        <div className="min-w-0">
                          <span className={`text-xs sm:text-sm font-bold block truncate ${
                            isSelected ? 'text-indigo-950 dark:text-white' : 'text-slate-900 dark:text-slate-100'
                          }`}>
                            {bank.title}
                          </span>
                          <span className={`text-[10px] sm:text-[11px] block truncate font-medium ${
                            isSelected ? 'text-indigo-700 dark:text-[#65D8FF]' : 'text-slate-500 dark:text-slate-400'
                          }`}>
                            30 reactivos • {bank.badge}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-[#65D8FF] shrink-0 bg-indigo-100/80 dark:bg-[#10152B] px-2 py-0.5 rounded-lg border border-indigo-200 dark:border-[#65D8FF]/40">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-[#65D8FF]" />
                          <span className="hidden sm:inline">Activa</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Modo Evaluación Estricto */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-[#161F3F] border border-slate-200 dark:border-slate-800">
            <div className="space-y-0.5 pr-3">
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                Modo Evaluación Estricto
              </span>
              <span className="text-[11px] text-slate-600 dark:text-slate-300 block font-normal">
                Mantiene ocultas las soluciones hasta que el estudiante entregue su prueba.
              </span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={forceExamMode}
                onChange={(e) => setForceExamMode(e.target.checked)}
                className="w-4 h-4 accent-[#175CD3] dark:accent-[#65D8FF] cursor-pointer"
                aria-label="Activar modo evaluación estricto"
              />
            </label>
          </div>
        </div>

        {/* 5. URL Box & Action Buttons */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            URL propia para compartir:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={studentUrl}
              onClick={(e) => (e.target as HTMLInputElement).select()}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-[#65D8FF]/30 bg-slate-50 dark:bg-[#161F3F] text-xs font-mono text-slate-900 dark:text-[#65D8FF] select-all focus:outline-hidden focus:ring-2 focus:ring-[#175CD3]/20 dark:focus:ring-[#65D8FF]/30 focus:border-[#175CD3] dark:focus:border-[#65D8FF] truncate shadow-inner"
            />
            <button
              onClick={handleCopyLink}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shrink-0 transition-all shadow-md hover-lift cursor-pointer ${
                copiedLink
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-[#175CD3] to-[#65D8FF] text-white hover:brightness-110'
              }`}
              aria-label="Copiar enlace al portapapeles"
            >
              {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? '¡Copiado!' : 'Copiar enlace'}</span>
            </button>
          </div>

          {/* Compartir en WhatsApp / Classroom */}
          <button
            onClick={handleCopyMessage}
            className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 cursor-pointer hover-lift ${
              copiedMessage
                ? 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-400 dark:border-emerald-500/70 text-emerald-900 dark:text-emerald-200'
                : 'bg-white hover:bg-emerald-50/70 dark:bg-[#161F3F] dark:hover:bg-[#1c2750] border-slate-300 hover:border-emerald-400 dark:border-slate-700/80 dark:hover:border-emerald-500/50 text-slate-800 hover:text-emerald-900 dark:text-slate-100 dark:hover:text-emerald-300 shadow-2xs'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="truncate">
              {copiedMessage ? '¡Texto para WhatsApp copiado al portapapeles!' : 'Copiar invitación completa para WhatsApp / Classroom'}
            </span>
          </button>
        </div>

        {/* 6. Security Info */}
        <div className="p-3 sm:p-3.5 rounded-2xl bg-indigo-50/80 dark:bg-[#161F3F] border border-indigo-200/80 dark:border-[#65D8FF]/20 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-[#10152B] border border-indigo-200 dark:border-slate-800 text-indigo-700 dark:text-[#65D8FF] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">
                Enlace Público Seguro
              </span>
              <span className="text-[11px] text-slate-600 dark:text-slate-300">
                Los alumnos no reciben credenciales ni claves. El acceso a calificaciones y gestión docente requiere autenticación en el servidor.
              </span>
            </div>
          </div>
        </div>

        {/* 7. Footer Actions */}
        <div className="flex items-center justify-between gap-3 pt-2.5 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#161F3F] text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-[#1c2750] cursor-pointer transition-colors shadow-2xs"
          >
            Cerrar
          </button>

          <a
            href={studentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-[#161F3F] hover:bg-slate-200 dark:hover:bg-[#1c2750] border border-slate-300 dark:border-[#65D8FF]/40 text-slate-800 dark:text-[#65D8FF] transition-colors shadow-2xs"
          >
            <span>Abrir como alumno</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
