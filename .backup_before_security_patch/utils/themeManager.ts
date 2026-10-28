export type ThemeMode = 'dark' | 'light' | 'auto';
export type ResolvedTheme = 'dark' | 'light';

const STORAGE_THEME_KEY = 'nexora_theme_preference_v1';

type ThemeChangeListener = (theme: ThemeMode, resolved: ResolvedTheme) => void;

class ThemeManager {
  private theme: ThemeMode = 'dark';
  private listeners: Set<ThemeChangeListener> = new Set();
  private mediaQuery: MediaQueryList | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_THEME_KEY) as ThemeMode | null;
        if (saved && (saved === 'dark' || saved === 'light' || saved === 'auto')) {
          this.theme = saved;
        } else {
          // Default to futuristic dark mode as requested by Nexora design
          this.theme = 'dark';
        }
      } catch {
        this.theme = 'dark';
      }

      this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this.mediaQuery.addEventListener('change', () => {
        if (this.theme === 'auto') {
          this.applyTheme();
        }
      });

      this.applyTheme();
    }
  }

  public getTheme(): ThemeMode {
    return this.theme;
  }

  public getResolvedTheme(): ResolvedTheme {
    if (this.theme === 'auto') {
      return this.mediaQuery?.matches ? 'dark' : 'light';
    }
    return this.theme;
  }

  public setTheme(newTheme: ThemeMode) {
    this.theme = newTheme;
    try {
      localStorage.setItem(STORAGE_THEME_KEY, newTheme);
    } catch {}
    this.applyTheme();
  }

  public subscribe(listener: ThemeChangeListener): () => void {
    this.listeners.add(listener);
    listener(this.theme, this.getResolvedTheme());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private applyTheme() {
    if (typeof document === 'undefined') return;
    const resolved = this.getResolvedTheme();
    const root = document.documentElement;

    if (resolved === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }

    this.listeners.forEach((listener) => {
      try {
        listener(this.theme, resolved);
      } catch {}
    });
  }
}

export const themeManager = new ThemeManager();
