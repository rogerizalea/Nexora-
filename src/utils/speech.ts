// Web Speech API text-to-speech reader for accessibility

export const speechReader = {
  isSupported: () => {
    try {
      return typeof window !== 'undefined' && 'speechSynthesis' in window;
    } catch {
      return false;
    }
  },

  speak: (text: string, onEnd?: () => void) => {
    try {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        if (onEnd) onEnd();
        return;
      }
      
      // Stop any ongoing speech safely
      try {
        window.speechSynthesis.cancel();
      } catch {}

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.95; // slightly slower for educational clarity
      utterance.pitch = 1.0;

      // Pick Spanish voice if available
      try {
        const voices = window.speechSynthesis.getVoices();
        const spanishVoice = voices?.find(v => v.lang.startsWith('es'));
        if (spanishVoice) {
          utterance.voice = spanishVoice;
        }
      } catch {}

      if (onEnd) {
        utterance.onend = onEnd;
        utterance.onerror = onEnd;
      }

      window.speechSynthesis.speak(utterance);
    } catch {
      if (onEnd) onEnd();
    }
  },

  stop: () => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } catch {
      // Speech cancel safely ignored
    }
  }
};
