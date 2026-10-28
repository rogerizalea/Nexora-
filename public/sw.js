/**
 * NEXORA Progressive Web App - Service Worker Core
 * 
 * Versión de compilación inyectada automáticamente por Vite:
 * __SW_BUILD_VERSION__
 * 
 * Reglas de Caché y Seguridad:
 * - HTML / Navegación: Network-First con fallback a index.html en caché (soporte offline total).
 * - Recursos estáticos con hash (/assets/*, fuentes, iconos): Cache-First / Stale-While-Revalidate.
 * - CERO CACHÉ para:
 *   - /api/* (Tutor IA, autenticación de docentes, endpoints de backend).
 *   - Métodos no GET (POST, PUT, DELETE).
 *   - Respuestas de error (4xx, 5xx) o estados inválidos.
 * - Activación controlada mediante SKIP_WAITING explícito para no interrumpir evaluaciones activas.
 * - Limpieza selectiva: Solo elimina cachés con prefijo 'nexora-', respetando cachés externas.
 */

const SW_BUILD_ID = '__SW_BUILD_VERSION__';
const CACHE_VERSION = SW_BUILD_ID.startsWith('__') ? 'dev-fallback' : SW_BUILD_ID;
const CORE_CACHE_NAME = `nexora-core-${CACHE_VERSION}`;
const RUNTIME_CACHE_NAME = `nexora-runtime-${CACHE_VERSION}`;

// Recursos mínimos del app shell para disponibilidad offline inmediata
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/icons/favicon.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-512-maskable.png',
  '/icons/apple-touch-icon.png'
];

// Instalación: Precache seguro del app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Advertencia en precache inicial de NEXORA:', err);
      });
    })
  );
});

// Activación: Limpieza selectiva ÚNICAMENTE de cachés pertenecientes a NEXORA
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          // Proteger cachés ajenas a NEXORA (ej. Google Fonts u otras apps en el mismo host)
          const isNexoraCache = name.startsWith('nexora-');
          const isCurrentCache = name === CORE_CACHE_NAME || name === RUNTIME_CACHE_NAME;

          if (isNexoraCache && !isCurrentCache) {
            console.log('[SW] Eliminando versión anterior de caché NEXORA:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Intercepción y enrutamiento inteligente de peticiones
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 1. REGLA ESTRICTA: Solo interceptar peticiones GET
  if (req.method !== 'GET') {
    return;
  }

  // 2. REGLA DE SEGURIDAD ESTRICTA: Cero caché para APIs del servidor
  // Tutor IA (/api/gemini/tutor), Login Docente (/api/docente/*), Healthcheck, etc.
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  // 3. Ignorar protocolos no HTTP/HTTPS (extensiones de navegador, devtools, websockets)
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // 4. Navegación HTML (SPA Shell): Network-First con fallback a caché
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          // Solo cachear respuestas válidas 200 OK
          if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
            const responseClone = networkResponse.clone();
            caches.open(CORE_CACHE_NAME).then((cache) => {
              cache.put(req, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Sin conexión: entregar la versión en caché de index.html
          const cachedResponse = await caches.match('/index.html') || await caches.match('/');
          if (cachedResponse) {
            return cachedResponse;
          }
          return new Response(
            '<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><title>NEXORA - Modo Sin Conexión</title></head><body style="background:#10152B;color:#fff;font-family:sans-serif;padding:2rem;text-align:center;"><h2>NEXORA sin conexión</h2><p>Por favor conecta tu dispositivo a internet para cargar la aplicación por primera vez.</p></body></html>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        })
    );
    return;
  }

  // 5. Recursos estáticos con hash (/assets/*, fuentes e iconos)
  const isStaticAsset = (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/icons/') ||
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com'
  );

  if (isStaticAsset) {
    event.respondWith(
      caches.match(req).then((cachedResponse) => {
        if (cachedResponse) {
          // Stale-While-Revalidate en segundo plano para recursos estáticos
          fetch(req)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(RUNTIME_CACHE_NAME).then((cache) => {
                  cache.put(req, networkResponse);
                });
              }
            })
            .catch(() => {
              // Silencioso en modo offline para recursos ya disponibles
            });
          return cachedResponse;
        }

        // Si no está en caché, solicitar a la red y almacenar únicamente si es 200 OK
        return fetch(req)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(RUNTIME_CACHE_NAME).then((cache) => {
                cache.put(req, responseClone);
              });
            }
            return networkResponse;
          })
          .catch((err) => {
            console.warn('[SW] Recurso no disponible en red ni caché:', req.url);
            throw err;
          });
      })
    );
    return;
  }

  // 6. Otras peticiones GET de mismo origen
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(RUNTIME_CACHE_NAME).then((cache) => {
              cache.put(req, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match(req))
    );
  }
});

// 7. Flujo de actualización coordinado mediante SKIP_WAITING
self.addEventListener('message', (event) => {
  if (!event.data) return;

  if (event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Activando nueva versión mediante SKIP_WAITING...');
    self.skipWaiting();
  }

  if (event.data.type === 'GET_VERSION') {
    if (event.ports && event.ports[0]) {
      event.ports[0].postMessage({ version: CACHE_VERSION });
    }
  }
});
