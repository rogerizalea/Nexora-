import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

/**
 * Plugin de Vite para versionar automáticamente el Service Worker (public/sw.js).
 * Evita depender de cambios manuales en strings de versión. Cada compilación
 * genera una firma única en dist/sw.js, permitiendo que el navegador detecte
 * la nueva versión de manera transparente y byte-exacta.
 */
function pwaServiceWorkerVersionPlugin(): Plugin {
  const buildVersion = `v-${Date.now()}`;

  return {
    name: 'pwa-service-worker-version',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/sw.js') {
          try {
            const swPath = path.resolve(process.cwd(), 'public', 'sw.js');
            if (fs.existsSync(swPath)) {
              let content = fs.readFileSync(swPath, 'utf-8');
              content = content.replace(/__SW_BUILD_VERSION__/g, `dev-${Date.now()}`);
              res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
              res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
              res.setHeader('Pragma', 'no-cache');
              res.setHeader('Expires', '0');
              res.setHeader('Service-Worker-Allowed', '/');
              return res.end(content);
            }
          } catch (e) {
            return next(e);
          }
        }
        next();
      });
    },
    closeBundle() {
      try {
        const distSwPath = path.resolve(process.cwd(), 'dist', 'sw.js');
        if (fs.existsSync(distSwPath)) {
          let content = fs.readFileSync(distSwPath, 'utf-8');
          content = content.replace(/__SW_BUILD_VERSION__/g, buildVersion);
          fs.writeFileSync(distSwPath, content, 'utf-8');
          console.log(`[PWA Plugin] sw.js versionado con éxito para producción: ${buildVersion}`);
        }
      } catch (err) {
        console.warn('[PWA Plugin] Advertencia al versionar dist/sw.js:', err);
      }
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      pwaServiceWorkerVersionPlugin()
    ],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
