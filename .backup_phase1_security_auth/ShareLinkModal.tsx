import React, { useState } from 'react';
import { ExamBank } from '../types';
import { ALL_EXAM_BANKS } from '../data/questionBanks';
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  Lock, 
  ShieldCheck, 
  Link2, 
  Share2, 
  Eye, 
  Sparkles,
  School,
  KeyRound,
  CheckCircle2,
  Globe,
  MessageCircle,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { soundManager } from '../utils/sound';

interface ShareLinkModalProps {
  currentBank: ExamBank;
  teacherPin: string;
  setTeacherPin: (pin: string) => void;
  onClose: () => void;
}

export const ShareLinkModal: React.FC<ShareLinkModalProps> = ({
  currentBank,
  teacherPin,
  setTeacherPin,
  onClose,
}) => {
  const [selectedBankId, setSelectedBankId] = useState<string>(currentBank.id);
  const [forceExamMode, setForceExamMode] = useState<boolean>(true);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [copiedMessage, setCopiedMessage] = useState<boolean>(false);
  const [editingPin, setEditingPin] = useState<boolean>(false);
  const [newPin, setNewPin] = useState<string>(teacherPin);

  // Generate robust, public student URL
  // CRITICAL FIX: If running in AI Studio development instance (ais-dev-*),
  // convert to the public shared instance (ais-pre-*) which does NOT require Google developer authentication!
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

  const handleCopyLink = async () => {
    soundManager.playSelect();
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
    soundManager.playSelect();
    const bankName = ALL_EXAM_BANKS.find(b => b.id === selectedBankId)?.title || 'Evaluación Diagnóstica';
    const message = `📘 *NEXORA — PLATAFORMA EDUCATIVA*\n«Activa tu mente. Expande tu futuro»\n\nEstimados estudiantes, ingresen al siguiente enlace para rendir su prueba (${bankName}):\n👉 ${studentUrl}\n\n*Instrucciones:*\n• Total: 30 preguntas de opción múltiple (1 punto c/u).\n• Aprende a tu ritmo. Supera nuevos desafíos.\n• No necesitan instalar nada ni iniciar sesión.\n• Al responder cada pregunta recibirán retroalimentación y frases motivacionales.\n• Al finalizar, ingresen su nombre para generar su certificado y registrar su puntaje.\n\n¡Activa tu mente y da lo mejor de ti!`;

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

  const handleSavePin = () => {
    soundManager.playSelect();
    setTeacherPin(newPin.trim() || '200712');
    setEditingPin(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 space-y-6 animate-popIn">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-slate-900 tracking-tight">
                  Enlace Seguro para Estudiantes
                </h2>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Acceso Público
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Los alumnos acceden directamente sin cuentas de desarrollador y sin poder alterar el examen.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Public Access Verification Notice */}
        <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 text-xs text-emerald-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Enlace Público Optimizado (Carga asegurada para todos los alumnos):</span>
          </div>
          <p className="text-emerald-900 leading-relaxed pl-6 text-[11px]">
            El enlace está configurado con la URL pública compartida. Tus estudiantes podrán abrirlo desde cualquier celular, tablet o navegador sin iniciar sesión con Google ni requerir permisos de desarrollador.
          </p>
        </div>

        {/* Protections List */}
        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Sin Modificaciones:</strong> Las preguntas no se pueden cambiar.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2">
            <Lock className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <span><strong>Privacidad Total:</strong> Oculta notas y registros de otros alumnos.</span>
          </div>
        </div>

        {/* Link Configuration */}
        <div className="space-y-4 pt-1">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Prueba asignada para el enlace:
            </label>
            <select
              value={selectedBankId}
              onChange={(e) => setSelectedBankId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white cursor-pointer"
            >
              {ALL_EXAM_BANKS.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.title} (30 preguntas • {b.badge})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-slate-800 block">
                Modo Evaluación Estricto
              </span>
              <span className="text-[11px] text-slate-500 block">
                Mantiene ocultas las soluciones hasta que el estudiante entregue su prueba.
              </span>
            </div>
            <input
              type="checkbox"
              checked={forceExamMode}
              onChange={(e) => setForceExamMode(e.target.checked)}
              className="w-4 h-4 accent-indigo-600 cursor-pointer"
            />
          </div>
        </div>

        {/* URL Box & 1-Click Action Buttons */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            URL propia para compartir:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={studentUrl}
              onClick={(e) => (e.target as HTMLInputElement).select()}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-mono text-slate-700 select-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 truncate"
            />
            <button
              onClick={handleCopyLink}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shrink-0 transition-all shadow-xs hover-lift cursor-pointer ${
                copiedLink
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? '¡Enlace copiado!' : 'Copiar enlace'}</span>
            </button>
          </div>

          {/* Quick Share to WhatsApp / Classroom button */}
          <button
            onClick={handleCopyMessage}
            className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 cursor-pointer hover-lift ${
              copiedMessage
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                : 'bg-slate-50 hover:bg-emerald-50/60 border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-800'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>{copiedMessage ? '¡Texto para WhatsApp copiado al portapapeles!' : 'Copiar invitación completa para WhatsApp / Classroom'}</span>
          </button>
        </div>

        {/* Teacher PIN Management */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <KeyRound className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-800 block">
                Clave de acceso docente: <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-indigo-700 font-bold">{teacherPin}</span>
              </span>
              <span className="text-[11px] text-slate-500">Úsala para desbloquear el panel completo desde la vista del alumno.</span>
            </div>
          </div>

          {editingPin ? (
            <div className="flex items-center gap-1.5">
              <input
                type="text"
                value={newPin}
                onChange={(e) => setNewPin(e.target.value)}
                maxLength={10}
                className="w-20 px-2 py-1 text-xs border border-indigo-400 rounded-lg bg-white font-mono text-center font-bold"
              />
              <button
                onClick={handleSavePin}
                className="px-2.5 py-1 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 cursor-pointer"
              >
                Guardar
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditingPin(true)}
              className="text-indigo-600 hover:underline font-bold text-xs cursor-pointer"
            >
              Cambiar clave
            </button>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 cursor-pointer transition-colors"
          >
            Cerrar
          </button>
          
          <a
            href={studentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all hover-lift shadow-xs cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Probar enlace en nueva pestaña</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </div>
  );
};
