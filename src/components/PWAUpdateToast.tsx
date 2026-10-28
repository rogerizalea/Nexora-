import React, { useState, useEffect } from 'react';
import { onServiceWorkerUpdate } from '../serviceWorkerRegistration';
import { RefreshCw, Sparkles, X, ShieldCheck, Loader2 } from 'lucide-react';

export const PWAUpdateToast: React.FC = () => {
  const [hasUpdate, setHasUpdate] = useState(false);
  const [updateFn, setUpdateFn] = useState<(() => void) | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [hasActiveExam, setHasActiveExam] = useState(false);

  useEffect(() => {
    // Verificar si hay una evaluación formal activa con respuestas para brindar mensaje pedagógico tranquilizador
    try {
      const formalSession = localStorage.getItem('diagnostic_exam_session_v3');
      if (formalSession) {
        const parsed = JSON.parse(formalSession);
        if (parsed?.answers && Object.keys(parsed.answers).length > 0 && !parsed.isCompleted) {
          setHasActiveExam(true);
        }
      }
    } catch {}

    const unsubscribe = onServiceWorkerUpdate((applyUpdate) => {
      setHasUpdate(true);
      setUpdateFn(() => applyUpdate);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!hasUpdate || dismissed) return null;

  const handleApplyUpdate = () => {
    setIsApplying(true);
    if (updateFn) {
      updateFn();
    } else {
      window.location.reload();
    }
  };

  return (
    <div 
      role="alert"
      className="fixed bottom-20 md:bottom-6 right-4 z-50 max-w-sm w-full p-4 rounded-2xl bg-[#141B34]/95 border border-[#65D8FF]/40 shadow-2xl backdrop-blur-xl text-white animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-[#65D8FF]/20 to-[#A994FF]/20 border border-[#65D8FF]/30 text-[#65D8FF] shrink-0">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <div className="flex-1 pr-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Nueva versión disponible
            </h4>
            <span className="px-1.5 py-0.2 rounded text-[9.5px] font-bold bg-[#65D8FF]/20 text-[#65D8FF] border border-[#65D8FF]/30">
              PWA
            </span>
          </div>

          {hasActiveExam ? (
            <div className="mt-1.5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Tus respuestas están guardadas</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hay una actualización de NEXORA lista. Puedes aplicarla ahora y tu examen se reanudará intacto, o pulsar «Más tarde» para terminar tu prueba primero.
              </p>
            </div>
          ) : (
            <p className="mt-1 text-xs text-slate-300 leading-relaxed">
              Hay una nueva versión de NEXORA lista con mejoras. Puedes actualizar ahora sin perder tus avances guardados.
            </p>
          )}

          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={handleApplyUpdate}
              disabled={isApplying}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#65D8FF] to-[#A994FF] text-[#0A0D1A] text-xs font-bold shadow-md hover:opacity-90 active:scale-95 transition cursor-pointer disabled:opacity-50"
            >
              {isApplying ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Actualizando...</span>
                </>
              ) : (
                <>
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Actualizar ahora</span>
                </>
              )}
            </button>
            <button
              onClick={() => setDismissed(true)}
              disabled={isApplying}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/60 text-slate-300 text-xs font-medium hover:bg-slate-700/60 transition cursor-pointer"
            >
              Más tarde
            </button>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/50 transition cursor-pointer shrink-0"
          aria-label="Cerrar aviso de actualización"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
