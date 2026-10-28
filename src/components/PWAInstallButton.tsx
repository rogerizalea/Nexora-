import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { 
  Download, 
  CheckCircle2, 
  Smartphone,
  Loader2,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'navbar' | 'compact' | 'card' | 'menu-item';
  onAfterClick?: () => void;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'navbar',
  onAfterClick,
}) => {
  const { 
    isInstallable, 
    isInstalled, 
    executeInstall, 
    openGuideModal,
    isPrompting,
    isInIframe,
    isAndroid,
    isIOS
  } = usePWAInstall();

  const [installSuccess, setInstallSuccess] = useState(false);
  const [localFeedback, setLocalFeedback] = useState<string | null>(null);

  // Si ya está ejecutándose como PWA instalada en modo standalone
  if (isInstalled && !installSuccess) {
    if (variant === 'navbar') {
      return (
        <div 
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold select-none ${className}`}
          title="NEXORA está ejecutándose como aplicación instalada"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">Instalada</span>
        </div>
      );
    }
    if (variant === 'compact') {
      return (
        <div 
          className={`p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 ${className}`}
          title="NEXORA instalada"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        </div>
      );
    }
    if (variant === 'menu-item') {
      return (
        <div className={`w-full p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-left flex items-center justify-between ${className}`}>
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold text-white block">
                NEXORA Instalada
              </span>
              <span className="text-[10.5px] text-emerald-300/80 block truncate">
                Ejecutándose como aplicación independiente
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 shrink-0">
            Activa
          </span>
        </div>
      );
    }
    return (
      <div className={`p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-white ${className}`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">NEXORA Instalada</h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Esta aplicación está configurada e instalada en tu dispositivo.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleInstallClick = async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    setLocalFeedback(null);

    // Caso A: El diálogo nativo beforeinstallprompt está disponible en el navegador
    if (isInstallable) {
      try {
        const result = await executeInstall();

        if (result.success && result.outcome === 'accepted') {
          setInstallSuccess(true);
          setTimeout(() => {
            setInstallSuccess(false);
            if (onAfterClick) onAfterClick();
          }, 3000);
          return;
        }

        if (result.reason === 'USER_DISMISSED') {
          setLocalFeedback('Instalación pospuesta');
          setTimeout(() => setLocalFeedback(null), 3000);
          return;
        }

        // Si falló el prompt nativo, desplegar la guía asistida
        openGuideModal();
        if (onAfterClick) {
          setTimeout(() => onAfterClick(), 50);
        }
      } catch (err) {
        console.warn('[PWA] Error al invocar prompt nativo:', err);
        openGuideModal();
        if (onAfterClick) {
          setTimeout(() => onAfterClick(), 50);
        }
      }
      return;
    }

    // Caso B: El prompt nativo no está disponible (ej. dentro de iframe de AI Studio o Chrome requiere menú)
    openGuideModal();
    if (onAfterClick) {
      setTimeout(() => onAfterClick(), 50);
    }
  };

  // Etiquetas honestas y claras
  const buttonLabel = isPrompting 
    ? 'Abriendo...' 
    : isInstallable 
    ? 'Instalar' 
    : 'Instalar';

  const navbarLabel = isInstallable ? 'Instalar App' : 'Instalar App';

  return (
    <>
      {installSuccess ? (
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold ${className}`}>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>¡Instalado con éxito!</span>
        </div>
      ) : variant === 'navbar' ? (
        <button
          type="button"
          onClick={handleInstallClick}
          disabled={isPrompting}
          title={isInstallable ? 'Instalar NEXORA en tu dispositivo' : 'Ver cómo instalar NEXORA en tu dispositivo'}
          className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#65D8FF]/15 to-[#A994FF]/15 hover:from-[#65D8FF]/25 hover:to-[#A994FF]/25 border border-[#65D8FF]/30 text-[#65D8FF] hover:text-white text-xs font-semibold backdrop-blur-md transition-all active:scale-95 shadow-sm hover:shadow-[#65D8FF]/20 cursor-pointer disabled:opacity-50 ${className}`}
        >
          {isPrompting ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : isInstallable ? (
            <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          ) : (
            <Smartphone className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          )}
          <span className="hidden sm:inline">
            {localFeedback || navbarLabel}
          </span>
        </button>
      ) : variant === 'compact' ? (
        <button
          type="button"
          onClick={handleInstallClick}
          disabled={isPrompting}
          title="Instalar NEXORA"
          className={`p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-[#65D8FF] transition active:scale-95 cursor-pointer disabled:opacity-50 ${className}`}
        >
          {isPrompting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : isInstallable ? (
            <Download className="w-4 h-4" />
          ) : (
            <Smartphone className="w-4 h-4" />
          )}
        </button>
      ) : variant === 'menu-item' ? (
        <button
          type="button"
          onClick={handleInstallClick}
          disabled={isPrompting}
          className={`w-full p-3 rounded-2xl bg-gradient-to-r from-[#175CD3]/20 via-[#65D8FF]/15 to-[#A994FF]/15 hover:from-[#175CD3]/30 hover:to-[#A994FF]/30 border border-[#65D8FF]/40 text-left transition-all cursor-pointer flex items-center justify-between shadow-xs group disabled:opacity-50 ${className}`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#65D8FF] to-[#A994FF] flex items-center justify-center text-slate-950 font-black shrink-0 shadow-sm shadow-[#65D8FF]/20">
              {isPrompting ? (
                <Loader2 className="w-4 h-4 text-[#10152B] animate-spin" />
              ) : isInstallable ? (
                <Download className="w-4 h-4 text-[#10152B]" />
              ) : (
                <Smartphone className="w-4 h-4 text-[#10152B]" />
              )}
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold text-white block group-hover:text-[#65D8FF] transition-colors">
                Instalar NEXORA (App Móvil / PWA)
              </span>
              <span className="text-[10.5px] text-[#65D8FF]/90 block truncate">
                {localFeedback || (
                  isInstallable 
                    ? '1 toque • Pantalla completa • Sin conexión' 
                    : isInIframe 
                    ? 'Vista previa • Toca para ver pasos de instalación'
                    : 'Instalar mediante Chrome • Toca aquí'
                )}
              </span>
            </div>
          </div>
          <span className="text-[11px] font-bold text-[#65D8FF] px-2.5 py-1 rounded-lg bg-[#65D8FF]/15 border border-[#65D8FF]/30 shrink-0 group-hover:bg-[#65D8FF] group-hover:text-[#10152B] transition-colors">
            {buttonLabel}
          </span>
        </button>
      ) : (
        <div className={`p-4 rounded-2xl bg-gradient-to-br from-[#141B34] to-[#0D1224] border border-[#65D8FF]/30 text-white shadow-lg ${className}`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#65D8FF]/25 to-[#A994FF]/25 border border-[#65D8FF]/40 text-[#65D8FF] shrink-0">
              {isInstallable ? (
                <Download className="w-5 h-5 text-[#65D8FF]" />
              ) : (
                <Smartphone className="w-5 h-5 text-[#65D8FF]" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-white truncate">Instalar NEXORA</h4>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#65D8FF]/20 text-[#65D8FF] border border-[#65D8FF]/30 shrink-0">
                  PWA
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {localFeedback || (
                  isInstallable
                    ? 'Acceso independiente a pantalla completa y sin conexión en Android y PC.'
                    : 'Aprende a agregar el acceso directo oficial en tu pantalla de inicio.'
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={handleInstallClick}
              disabled={isPrompting}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#65D8FF] to-[#A994FF] text-[#0A0D1A] text-xs font-bold shadow hover:opacity-95 active:scale-95 transition cursor-pointer shrink-0 disabled:opacity-50"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
