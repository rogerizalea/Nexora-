/**
 * NEXORA Service Worker Registration Manager
 * 
 * Garantiza:
 * 1. updateViaCache: 'none' para forzar al navegador a verificar cambios byte-exactos en sw.js.
 * 2. Comprobación de actualizaciones proactiva:
 *    - Inmediata tras el registro.
 *    - Al reanudar la app / volver a la pestaña (visibilitychange y focus en Android/móvil).
 *    - Periódica cada 45 minutos.
 * 3. Notificación no intrusiva al usuario a través de PWAUpdateToast.
 * 4. Activación segura mediante SKIP_WAITING sin recargas infinitas ni interrupción de exámenes activos.
 * 5. Cero alteración de localStorage ni reinicio forzado de sesiones.
 */

export interface SWRegistrationConfig {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration, applyUpdate: () => void) => void;
}

type UpdateCallback = (applyUpdate: () => void) => void;
const updateListeners: Set<UpdateCallback> = new Set();
let waitingWorker: ServiceWorker | null = null;
let activeRegistration: ServiceWorkerRegistration | null = null;
let userRequestedReload = false;
let refreshing = false;

/**
 * Suscribe un callback para ser notificado cuando exista una nueva versión lista para activarse.
 */
export function onServiceWorkerUpdate(callback: UpdateCallback): () => void {
  updateListeners.add(callback);
  if (waitingWorker) {
    callback(applyWaitingUpdate);
  }
  return () => {
    updateListeners.delete(callback);
  };
}

/**
 * Aplica la actualización pendiente de manera segura tras consentimiento explícito del usuario.
 */
export function applyWaitingUpdate() {
  if (waitingWorker) {
    userRequestedReload = true;

    // Disparar evento para que los componentes sincronicen sus estados en localStorage antes de recargar
    if (typeof window !== 'undefined') {
      try {
        window.dispatchEvent(new CustomEvent('nexora-before-update'));
      } catch {}
    }

    waitingWorker.postMessage({ type: 'SKIP_WAITING' });
  } else if (activeRegistration) {
    // Si no había worker esperando pero el usuario solicita recarga, verificar red
    activeRegistration.update().catch(() => {});
  }
}

/**
 * Fuerza una comprobación manual de actualización contra el servidor.
 */
export async function checkForUpdateNow(): Promise<boolean> {
  if (!('serviceWorker' in navigator) || !activeRegistration) {
    return false;
  }
  try {
    await activeRegistration.update();
    return !!activeRegistration.waiting;
  } catch (err) {
    console.warn('[SW] Error al verificar actualizaciones:', err);
    return false;
  }
}

/**
 * Registra el Service Worker con políticas estrictas de actualización sin caché HTTP.
 */
export function register(config?: SWRegistrationConfig) {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  const runRegister = () => {
    const swUrl = '/sw.js';

    // updateViaCache: 'none' asegura que el navegador no use copias HTTP cacheadas al comprobar sw.js
    navigator.serviceWorker
      .register(swUrl, { updateViaCache: 'none' })
      .then((registration) => {
        activeRegistration = registration;

        // Caso 1: Ya existe un worker esperando en segundo plano al abrir la app
        if (registration.waiting) {
          waitingWorker = registration.waiting;
          if (config?.onUpdate) {
            config.onUpdate(registration, applyWaitingUpdate);
          }
          updateListeners.forEach((cb) => cb(applyWaitingUpdate));
        }

        // Caso 2: Se descubre una nueva versión durante el ciclo de vida
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) return;

          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // Hay una versión anterior activa -> Nueva versión lista esperando
                waitingWorker = installingWorker;
                if (config?.onUpdate) {
                  config.onUpdate(registration, applyWaitingUpdate);
                }
                updateListeners.forEach((cb) => cb(applyWaitingUpdate));
              } else {
                // Primer uso: contenido precacheado para funcionamiento offline
                if (config?.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };

        // Comprobación periódica cada 45 minutos para PWAs instaladas en Android/Desktop
        const intervalId = setInterval(() => {
          registration.update().catch(() => {});
        }, 45 * 60 * 1000);

        // Comprobación reactiva cuando el usuario vuelve a enfocar la app (ej. desbloqueo de pantalla en Android)
        const handleVisibilityOrFocus = () => {
          if (document.visibilityState === 'visible') {
            registration.update().catch(() => {});
          }
        };

        document.addEventListener('visibilitychange', handleVisibilityOrFocus);
        window.addEventListener('focus', handleVisibilityOrFocus);

        // Limpieza de event listeners en caso de descarga
        window.addEventListener('beforeunload', () => {
          clearInterval(intervalId);
          document.removeEventListener('visibilitychange', handleVisibilityOrFocus);
          window.removeEventListener('focus', handleVisibilityOrFocus);
        });
      })
      .catch((error) => {
        console.warn('[SW] Error al registrar el Service Worker de NEXORA:', error);
      });

    // Recargar ÚNICAMENTE si el usuario solicitó explícitamente aplicar la actualización
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (userRequestedReload && !refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  };

  if (document.readyState === 'complete') {
    runRegister();
  } else {
    window.addEventListener('load', runRegister);
  }
}

/**
 * Desregistra el Service Worker si fuera necesario.
 */
export function unregister() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
