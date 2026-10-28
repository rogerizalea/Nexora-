import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { installDOMDefense } from './utils/domDefense';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Early capture of beforeinstallprompt before any React chunks load
if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    (window as any).__NEXORA_PWA_PROMPT__ = e;
  });
}

// Install multiplatform DOM protection before React initializes
installDOMDefense();

createRoot(document.getElementById('root')!).render(<App />);

// Register Service Worker for offline capabilities and PWA support
serviceWorkerRegistration.register();
