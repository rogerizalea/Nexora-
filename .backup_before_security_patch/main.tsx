import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { installDOMDefense } from './utils/domDefense';

// Install multiplatform DOM protection before React initializes
installDOMDefense();

createRoot(document.getElementById('root')!).render(<App />);
