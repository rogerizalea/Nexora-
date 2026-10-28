import React, { useState, useEffect } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { 
  Smartphone, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ShieldCheck, 
  Wifi, 
  Download, 
  Share2, 
  PlusSquare,
  ArrowRight,
  ExternalLink,
  Copy,
  Info
} from 'lucide-react';

interface PWAInstallGuideModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const PWAInstallGuideModal: React.FC<PWAInstallGuideModalProps> = ({
  isOpen: propIsOpen,
  onClose: propOnClose,
}) => {
  const { 
    isInstallable, 
    isInstalled, 
    isIOS, 
    isAndroid, 
    isInIframe,
    isGuideModalOpen, 
    closeGuideModal,
    executeInstall,
    isPrompting,
    installError
  } = usePWAInstall();

  const [activeTab, setActiveTab] = useState<'chrome' | 'samsung' | 'firefox' | 'ios'>(() => {
    if (isIOS) return 'ios';
    return 'chrome';
  });

  const [copiedLink, setCopiedLink] = useState(false);
  const [promptFeedback, setPromptFeedback] = useState<{
    type: 'success' | 'dismissed' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Sincronizar pestaña por defecto según detección de dispositivo
  useEffect(() => {
    if (isIOS) {
      setActiveTab('ios');
    } else {
      setActiveTab('chrome');
    }
  }, [isIOS]);

  const visible = propIsOpen !== undefined ? propIsOpen : isGuideModalOpen;

  const handleClose = () => {
    setPromptFeedback({ type: null, message: '' });
    if (propOnClose) {
      propOnClose();
    } else {
      closeGuideModal();
    }
  };

  // Cerrar con tecla Escape
  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible]);

  if (!visible) return null;

  const handleTriggerNativePrompt = async () => {
    setPromptFeedback({ type: null, message: '' });
    const result = await executeInstall();

    if (result.success && result.outcome === 'accepted') {
      setPromptFeedback({
        type: 'success',
        message: '¡NEXORA se ha instalado exitosamente en tu dispositivo!'
      });
      setTimeout(() => {
        handleClose();
      }, 3000);
    } else if (result.reason === 'USER_DISMISSED') {
      setPromptFeedback({
        type: 'dismissed',
        message: 'Instalación pospuesta. Puedes instalarla en cualquier momento desde el menú de Chrome o este panel.'
      });
    } else if (result.reason === 'NO_PROMPT') {
      setPromptFeedback({
        type: 'error',
        message: 'El diálogo automático no está disponible en este momento. Utiliza los pasos del menú de Chrome indicados abajo.'
      });
    } else if (result.error) {
      setPromptFeedback({
        type: 'error',
        message: `Aviso del instalador: ${result.error}. Puedes realizar la instalación manual mediante el menú de tu navegador.`
      });
    }
  };

  const handleCopyLink = async () => {
    try {
      const publicUrl = window.location.href;
      await navigator.clipboard.writeText(publicUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    } catch {
      // Fallback
    }
  };

  // Verificación de entorno HTTPS
  const isHttps = typeof window !== 'undefined' && (
    window.location.protocol === 'https:' || 
    window.location.hostname === 'localhost' || 
    window.location.hostname === '127.0.0.1'
  );
  const hasSW = typeof navigator !== 'undefined' && 'serviceWorker' in navigator;

  return (
    <div 
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-4 animate-fadeIn"
      onClick={(e) => {
        // Solo cerrar si el clic fue directamente en el fondo oscuro
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-install-title"
    >
      <div 
        className="w-full max-w-lg rounded-3xl bg-[#10152B] border border-[#65D8FF]/40 p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(101,216,255,0.18)] text-white space-y-4 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-[#175CD3] via-[#65D8FF] to-[#A994FF] p-0.5 shadow-md shadow-[#65D8FF]/20">
              <div className="w-full h-full bg-[#10152B] rounded-[14px] p-2 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-[#65D8FF]" />
              </div>
            </div>
            <div>
              <h3 id="pwa-install-title" className="text-base sm:text-lg font-black text-white">
                Instalar NEXORA en Android
              </h3>
              <p className="text-xs text-slate-400">
                Aplicación Web Progresiva Oficial (PWA)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition cursor-pointer"
            aria-label="Cerrar guía"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notificación de contexto: Vista Previa en iFrame de AI Studio */}
        {isInIframe && (
          <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-200 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-300">
              <Info className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Estás en la vista previa del editor (iframe)</span>
            </div>
            <p className="text-[11.5px] text-amber-200/90 leading-relaxed">
              Google Chrome y los navegadores móviles bloquean intencionalmente la instalación de aplicaciones dentro de marcos por seguridad. Para instalar NEXORA en tu teléfono, abre directamente el enlace público HTTPS en Chrome.
            </p>
            <div className="pt-1 flex items-center justify-between">
              <button
                type="button"
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>¡Enlace copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar enlace público</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="text-[11px] font-bold text-amber-300 hover:underline cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        )}

        {/* Notificación si la app ya está instalada */}
        {isInstalled && (
          <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="font-bold text-white">NEXORA ya está instalada en este dispositivo</p>
              <p className="text-[11px] text-emerald-300/90 mt-0.5">
                La aplicación está configurada en tu pantalla de inicio y lista para funcionar a pantalla completa y sin conexión.
              </p>
            </div>
          </div>
        )}

        {/* Feedback visual de acción */}
        {promptFeedback.type && (
          <div className={`p-3.5 rounded-2xl text-xs font-semibold flex items-start gap-2.5 animate-fadeIn ${
            promptFeedback.type === 'success'
              ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-200'
              : promptFeedback.type === 'dismissed'
              ? 'bg-amber-500/20 border border-amber-500/40 text-amber-200'
              : 'bg-rose-500/20 border border-rose-500/40 text-rose-200'
          }`}>
            {promptFeedback.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            )}
            <span>{promptFeedback.message}</span>
          </div>
        )}

        {/* Diálogo nativo disponible con 1 toque */}
        {isInstallable && !isInstalled && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#175CD3]/30 via-[#65D8FF]/20 to-[#A994FF]/20 border border-[#65D8FF]/50 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">
                  Instalación directa con 1 toque lista
                </span>
                <span className="text-[11px] text-slate-300">
                  Presiona el botón para agregar el icono a tu pantalla de inicio.
                </span>
              </div>
              <button
                type="button"
                onClick={handleTriggerNativePrompt}
                disabled={isPrompting}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#65D8FF] to-[#A994FF] text-[#0A0D1A] font-bold text-xs shadow-md hover:opacity-95 active:scale-95 transition cursor-pointer flex items-center gap-1.5 shrink-0 disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5 text-[#0A0D1A]" />
                <span>{isPrompting ? 'Abriendo...' : 'Instalar ahora'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Selector de pestañas por navegador */}
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
            Instrucciones para instalar desde tu navegador
          </span>
          <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('chrome')}
              className={`py-1.5 px-1 sm:px-2 rounded-lg font-bold transition text-center truncate cursor-pointer ${
                activeTab === 'chrome'
                  ? 'bg-[#175CD3] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Chrome
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('samsung')}
              className={`py-1.5 px-1 sm:px-2 rounded-lg font-bold transition text-center truncate cursor-pointer ${
                activeTab === 'samsung'
                  ? 'bg-[#175CD3] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Samsung
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('firefox')}
              className={`py-1.5 px-1 sm:px-2 rounded-lg font-bold transition text-center truncate cursor-pointer ${
                activeTab === 'firefox'
                  ? 'bg-[#175CD3] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Firefox
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ios')}
              className={`py-1.5 px-1 sm:px-2 rounded-lg font-bold transition text-center truncate cursor-pointer ${
                activeTab === 'ios'
                  ? 'bg-[#175CD3] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              iPhone / iOS
            </button>
          </div>
        </div>

        {/* Pasos guiados según navegador */}
        <div className="space-y-2.5 text-xs">
          {activeTab === 'chrome' && (
            <>
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-[#65D8FF]/20 text-[#65D8FF] font-black flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <p className="font-bold text-white">Abre el menú de Google Chrome</p>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Toca los tres puntos verticales <strong className="text-[#65D8FF]">⋮</strong> en la esquina superior derecha del navegador.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-[#65D8FF]/20 text-[#65D8FF] font-black flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <p className="font-bold text-white">Selecciona «Instalar aplicación» o «Agregar a pantalla»</p>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    En la lista de opciones que aparece, selecciona <strong className="text-white">«Instalar aplicación»</strong> (o <strong className="text-white">«Agregar a la pantalla principal»</strong>).
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-[#65D8FF]/20 text-[#65D8FF] font-black flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <p className="font-bold text-white">Confirma la instalación</p>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Toca <strong className="text-emerald-400">«Instalar»</strong> en el cuadro emergente de Android. El icono oficial de NEXORA se añadirá a tu pantalla de inicio y se abrirá a pantalla completa sin la barra del navegador.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'samsung' && (
            <>
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-[#A994FF]/20 text-[#A994FF] font-black flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <p className="font-bold text-white">Abre el menú de Samsung Internet</p>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Toca el botón de menú <strong className="text-[#A994FF]">☰</strong> en la barra de herramientas del navegador.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-[#A994FF]/20 text-[#A994FF] font-black flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <p className="font-bold text-white">Toca «+ Agregar página a»</p>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Selecciona <strong className="text-white">«Pantalla de inicio»</strong> o toca el icono de descarga en la barra superior si aparece.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-[#A994FF]/20 text-[#A994FF] font-black flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <p className="font-bold text-white">Pulsa «Añadir»</p>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Confirma para guardar NEXORA como aplicación independiente en tu teléfono.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'firefox' && (
            <>
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-[#FF78C8]/20 text-[#FF78C8] font-black flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <p className="font-bold text-white">Abre el menú de Firefox Móvil</p>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Toca los tres puntos <strong className="text-[#FF78C8]">⋮</strong> en la barra de navegación.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-[#FF78C8]/20 text-[#FF78C8] font-black flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <p className="font-bold text-white">Selecciona «Instalar»</p>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Toca <strong className="text-white">«Instalar»</strong> o <strong className="text-white">«Añadir a la pantalla de inicio»</strong> para finalizar.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'ios' && (
            <>
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 shrink-0">
                  <Share2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white">1. Presiona Compartir en Safari</p>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Toca el icono de Compartir (cuadrado con flecha hacia arriba) en la barra inferior de Safari.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#65D8FF]/20 text-[#65D8FF] shrink-0">
                  <PlusSquare className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white">2. Selecciona «Agregar a inicio»</p>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Desplázate hacia abajo en el menú de Safari y pulsa <strong className="text-white">«Agregar a inicio»</strong>.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Diagnóstico de requisitos PWA */}
        <div className="p-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#65D8FF]" />
              <span>Diagnóstico de requisitos PWA</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 font-semibold">
              {isHttps && hasSW ? 'Conforme para instalación' : 'Verificando'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className={`w-2 h-2 rounded-full ${isHttps ? 'bg-emerald-400' : 'bg-rose-500'}`} />
              <span>Conexión HTTPS segura: {isHttps ? 'Sí' : 'No'}</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <span className={`w-2 h-2 rounded-full ${hasSW ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span>Service Worker: {hasSW ? 'Activo' : 'No compatible'}</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Manifiesto PWA: Válido</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <span className={`w-2 h-2 rounded-full ${isInstalled ? 'bg-emerald-400' : 'bg-blue-400'}`} />
              <span>Modo: {isInstalled ? 'Instalada' : 'Navegador Web'}</span>
            </div>
          </div>
        </div>

        {/* Nota explicativa de PWA oficial vs APK */}
        <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800 text-[11px] text-slate-300 space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-white">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
            <span>Instalación PWA nativa (Sin APKs ni descargas externas)</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            NEXORA no requiere descargar archivos APK riesgosos. Google Chrome en Android la integra directamente en el sistema operativo mediante el estándar web oficial de PWA, permitiendo inicio instantáneo y uso sin conexión.
          </p>
        </div>

        {/* Botón de cierre */}
        <button
          type="button"
          onClick={handleClose}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#65D8FF] to-[#A994FF] text-[#0A0D1A] text-xs font-bold shadow hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-1.5"
        >
          <span>Continuar en NEXORA</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
