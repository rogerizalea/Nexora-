import { useState, useEffect } from 'react';

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export interface InstallResult {
  success: boolean;
  outcome?: 'accepted' | 'dismissed';
  reason?: 'NO_PROMPT' | 'USER_DISMISSED' | 'ERROR';
  error?: string;
}

export interface PWAInstallState {
  isInstallable: boolean;
  isInstalled: boolean;
  isPrompting: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  isInIframe: boolean;
  isGuideModalOpen: boolean;
  installError: string | null;
  executeInstall: () => Promise<InstallResult>;
  openGuideModal: () => void;
  closeGuideModal: () => void;
}

// Estado singleton persistente a nivel de módulo
let globalDeferredPrompt: BeforeInstallPromptEvent | null = null;
let globalIsInstalled: boolean = false;
let globalIsPrompting: boolean = false;
let globalIsGuideModalOpen: boolean = false;
let globalInstallError: string | null = null;
const subscribers = new Set<() => void>();

function notifySubscribers() {
  subscribers.forEach((fn) => {
    try {
      fn();
    } catch (err) {
      console.warn('[PWA] Error en suscriptor de instalación:', err);
    }
  });
}

function checkIsInstalled(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const isStandaloneMQ = window.matchMedia('(display-mode: standalone)').matches;
    const isStandaloneNav = (window.navigator as unknown as { standalone?: boolean })?.standalone === true;
    const isAndroidApp = typeof document !== 'undefined' && document.referrer.includes('android-app://');
    return isStandaloneMQ || isStandaloneNav || isAndroidApp;
  } catch {
    return false;
  }
}

// Inicialización global única al importar el módulo
if (typeof window !== 'undefined') {
  globalIsInstalled = checkIsInstalled();

  // Comprobar si el listener temprano de main.tsx capturó antes el evento
  if ((window as any).__NEXORA_PWA_PROMPT__) {
    globalDeferredPrompt = (window as any).__NEXORA_PWA_PROMPT__;
  }

  // Escuchar beforeinstallprompt si aún no se capturó
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    globalDeferredPrompt = e as BeforeInstallPromptEvent;
    (window as any).__NEXORA_PWA_PROMPT__ = globalDeferredPrompt;
    globalInstallError = null;
    console.log('[PWA] Evento beforeinstallprompt capturado y conservado en gestor.');
    notifySubscribers();
  });

  // Escuchar evento de instalación exitosa de Android/Chrome
  window.addEventListener('appinstalled', () => {
    globalIsInstalled = true;
    globalDeferredPrompt = null;
    (window as any).__NEXORA_PWA_PROMPT__ = null;
    globalInstallError = null;
    globalIsGuideModalOpen = false;
    console.log('[PWA] NEXORA instalada exitosamente en el sistema.');
    notifySubscribers();
  });

  // Escuchar cambios dinámicos en display-mode
  try {
    const mq = window.matchMedia('(display-mode: standalone)');
    if (mq.addEventListener) {
      mq.addEventListener('change', (e) => {
        globalIsInstalled = e.matches;
        notifySubscribers();
      });
    }
  } catch {}
}

export function openGuideModal() {
  globalIsGuideModalOpen = true;
  notifySubscribers();
}

export function closeGuideModal() {
  globalIsGuideModalOpen = false;
  notifySubscribers();
}

/**
 * Ejecuta el diálogo nativo de instalación de Android / Chrome.
 * Debe invocarse como resultado directo de una acción del usuario (clic/touch).
 */
export async function executeInstall(): Promise<InstallResult> {
  const promptToExecute = globalDeferredPrompt || (typeof window !== 'undefined' ? (window as any).__NEXORA_PWA_PROMPT__ : null);

  if (!promptToExecute) {
    return {
      success: false,
      reason: 'NO_PROMPT',
      error: 'No se dispone de un evento automático beforeinstallprompt emitido por el navegador.'
    };
  }

  try {
    globalIsPrompting = true;
    notifySubscribers();

    // Temporizador de seguridad para evitar bloqueo de UI si el usuario interactúa fuera de la ventana
    const promptTimer = setTimeout(() => {
      if (globalIsPrompting) {
        globalIsPrompting = false;
        notifySubscribers();
      }
    }, 12000);

    // Invocación del método nativo
    await promptToExecute.prompt();
    const choice = await promptToExecute.userChoice;
    clearTimeout(promptTimer);

    globalIsPrompting = false;

    if (choice && choice.outcome === 'accepted') {
      globalIsInstalled = true;
      globalDeferredPrompt = null;
      (window as any).__NEXORA_PWA_PROMPT__ = null;
      globalInstallError = null;
      globalIsGuideModalOpen = false;
      notifySubscribers();
      return { success: true, outcome: 'accepted' };
    } else {
      // El usuario pulsó cancelar/posponer en el cuadro de Android
      globalDeferredPrompt = null;
      (window as any).__NEXORA_PWA_PROMPT__ = null;
      notifySubscribers();
      return { success: false, outcome: 'dismissed', reason: 'USER_DISMISSED' };
    }
  } catch (err: any) {
    globalIsPrompting = false;
    const msg = err?.message || 'Error al ejecutar el diálogo nativo de instalación';
    globalInstallError = msg;
    notifySubscribers();
    return { success: false, reason: 'ERROR', error: msg };
  }
}

export function usePWAInstall(): PWAInstallState {
  const [, setTick] = useState(0);

  useEffect(() => {
    const handler = () => setTick((t) => t + 1);
    subscribers.add(handler);
    return () => {
      subscribers.delete(handler);
    };
  }, []);

  const isIOS = typeof navigator !== 'undefined' && (
    /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) && !(window as any).MSStream
  );
  const isAndroid = typeof navigator !== 'undefined' && (
    /android/.test(navigator.userAgent.toLowerCase())
  );

  const isInIframe = typeof window !== 'undefined' && (
    window.self !== window.top
  );

  const currentPrompt = globalDeferredPrompt || (typeof window !== 'undefined' ? (window as any).__NEXORA_PWA_PROMPT__ : null);
  const isInstallable = !globalIsInstalled && !!currentPrompt;

  return {
    isInstallable,
    isInstalled: globalIsInstalled,
    isPrompting: globalIsPrompting,
    isIOS,
    isAndroid,
    isInIframe,
    isGuideModalOpen: globalIsGuideModalOpen,
    installError: globalInstallError,
    executeInstall,
    openGuideModal,
    closeGuideModal,
  };
}
