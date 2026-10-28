import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  FileCheck2, 
  Bot, 
  MoreHorizontal, 
  Sun, 
  Moon, 
  Monitor, 
  Music, 
  Users, 
  Lock, 
  Sparkles, 
  X, 
  Lightbulb, 
  BookOpenCheck,
  BookOpen,
  ChevronRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { ThemeMode, ResolvedTheme } from '../utils/themeManager';
import { PWAInstallButton } from './PWAInstallButton';

export type MainNavTab = 'practice' | 'exam' | 'materias' | 'pruebas' | 'tutor' | 'registro' | 'forms' | 'study';

interface BottomNavBarProps {
  activeTab: MainNavTab;
  onSelectTab: (tab: MainNavTab) => void;
  currentTheme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  onSetTheme: (theme: ThemeMode) => void;
  onOpenMusicModal?: () => void;
  onOpenTeacherAuth?: () => void;
  isTeacherAuthenticated: boolean;
  attemptsCount: number;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onSelectTab,
  currentTheme,
  resolvedTheme,
  onSetTheme,
  onOpenMusicModal,
  onOpenTeacherAuth,
  isTeacherAuthenticated,
  attemptsCount,
}) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  // Close more menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMoreMenuOpen(false);
      }
    };
    if (isMoreMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMoreMenuOpen]);

  interface NavItem {
    id: MainNavTab | 'mas';
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    isAction?: boolean;
    activeColor: string;
    glowClass: string;
  }

  const navItems: NavItem[] = [
    { 
      id: 'practice', 
      label: 'Práctica', 
      icon: Lightbulb,
      activeColor: 'text-[#FFD166]',
      glowClass: 'shadow-[0_0_12px_rgba(255,209,102,0.35)]'
    },
    { 
      id: 'exam', 
      label: 'Examen', 
      icon: BookOpenCheck,
      activeColor: 'text-[#65D8FF]',
      glowClass: 'shadow-[0_0_12px_rgba(101,216,255,0.35)]'
    },
    { 
      id: 'study', 
      label: 'Estudio', 
      icon: BookOpen,
      activeColor: 'text-[#65D8FF]',
      glowClass: 'shadow-[0_0_12px_rgba(101,216,255,0.35)]'
    },
    { 
      id: 'materias', 
      label: 'Materias', 
      icon: Layers,
      activeColor: 'text-[#A994FF]',
      glowClass: 'shadow-[0_0_12px_rgba(169,148,255,0.35)]'
    },
    { 
      id: 'pruebas', 
      label: 'Resultados', 
      icon: FileCheck2,
      activeColor: 'text-[#FF78C8]',
      glowClass: 'shadow-[0_0_12px_rgba(255,120,200,0.35)]'
    },
    { 
      id: 'mas', 
      label: 'Más', 
      icon: MoreHorizontal, 
      isAction: true,
      activeColor: 'text-[#65D8FF]',
      glowClass: 'shadow-[0_0_12px_rgba(101,216,255,0.35)]'
    },
  ];

  const handleTabClick = (item: NavItem) => {
    if (item.isAction) {
      setIsMoreMenuOpen(prev => !prev);
    } else {
      setIsMoreMenuOpen(false);
      onSelectTab(item.id as MainNavTab);
    }
  };

  return (
    <>
      {/* "Más" Drawer Backdrop */}
      {isMoreMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm md:hidden animate-fadeIn transition-opacity duration-200"
          onClick={() => setIsMoreMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* "Más" Drawer Content (Futuristic Liquid Glass Card) */}
      {isMoreMenuOpen && (
        <aside 
          aria-label="Panel de opciones adicionales NEXORA"
          role="dialog"
          aria-modal="true"
          className="fixed bottom-20 sm:bottom-22 left-3 right-3 sm:left-5 sm:right-5 z-50 md:hidden max-w-md mx-auto bg-[#10152B]/95 dark:bg-[#0c1022]/98 text-white rounded-[28px] p-5 border border-[#65D8FF]/30 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(101,216,255,0.15)] space-y-4 animate-slideUp backdrop-blur-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#175CD3] via-[#A994FF] to-[#65D8FF] p-0.5 flex items-center justify-center shadow-sm shadow-[#65D8FF]/20 shrink-0">
                <div className="w-full h-full bg-[#10152B] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#FFD166]" />
                </div>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-white">
                  Opciones NEXORA
                </h3>
                <p className="text-[10px] text-slate-400">
                  Herramientas y personalización
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsMoreMenuOpen(false)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
              aria-label="Cerrar panel de opciones"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Selector de Tema Visual: Oscuro, Claro, Auto */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Tema Visual
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => onSetTheme('dark')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  currentTheme === 'dark'
                    ? 'bg-gradient-to-r from-[#175CD3]/40 to-[#10152B] border-[#65D8FF] text-[#65D8FF] shadow-[0_0_12px_rgba(101,216,255,0.25)]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-[#65D8FF]" />
                <span>Oscuro</span>
              </button>

              <button
                type="button"
                onClick={() => onSetTheme('light')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  currentTheme === 'light'
                    ? 'bg-gradient-to-r from-[#175CD3]/40 to-[#10152B] border-[#FFD166] text-[#FFD166] shadow-[0_0_12px_rgba(255,209,102,0.25)]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-[#FFD166]" />
                <span>Claro</span>
              </button>

              <button
                type="button"
                onClick={() => onSetTheme('auto')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  currentTheme === 'auto'
                    ? 'bg-gradient-to-r from-[#175CD3]/40 to-[#10152B] border-[#A994FF] text-[#A994FF] shadow-[0_0_12px_rgba(169,148,255,0.25)]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                <Monitor className="w-3.5 h-3.5 text-[#A994FF]" />
                <span>Auto</span>
              </button>
            </div>
          </div>

          {/* Accesos rápidos funcionales */}
          <div className="space-y-2 pt-1">
            {/* Tutor IA */}
            <button
              type="button"
              onClick={() => {
                setIsMoreMenuOpen(false);
                onSelectTab('tutor');
              }}
              className="w-full p-3 rounded-2xl bg-[#161F3F]/80 hover:bg-[#1a254c] border border-[#A994FF]/30 text-left transition-all cursor-pointer flex items-center justify-between shadow-xs group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#175CD3] via-purple-600 to-[#A994FF] flex items-center justify-center text-white shrink-0 shadow-sm shadow-purple-500/20">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white block group-hover:text-[#A994FF] transition-colors">
                    Tutoría con IA (Gemini 3.8 Flash)
                  </span>
                  <span className="text-[10.5px] text-purple-300/80 block truncate">
                    Orientación pedagógica interactiva
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#A994FF] shrink-0" />
            </button>

            {/* Radio Musical NEXORA */}
            <button
              type="button"
              onClick={() => {
                setIsMoreMenuOpen(false);
                if (onOpenMusicModal) {
                  onOpenMusicModal();
                } else {
                  window.dispatchEvent(new CustomEvent('nexora-open-music'));
                }
              }}
              className="w-full p-3 rounded-2xl bg-[#161F3F]/80 hover:bg-[#1a254c] border border-[#65D8FF]/30 text-left transition-all cursor-pointer flex items-center justify-between shadow-xs group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#65D8FF] via-[#A994FF] to-[#FF78C8] flex items-center justify-center text-slate-950 font-black shrink-0 shadow-sm shadow-[#65D8FF]/20">
                  <Music className="w-4 h-4 text-slate-950" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white block group-hover:text-[#65D8FF] transition-colors">
                    Radio Musical de Estudio
                  </span>
                  <span className="text-[10.5px] text-[#65D8FF]/80 block truncate">
                    21 pistas de audio ambiente • Lo-Fi y Concentración
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#65D8FF] shrink-0" />
            </button>

            {/* Instalación PWA para Android & Móviles */}
            <PWAInstallButton 
              variant="menu-item" 
              onAfterClick={() => setIsMoreMenuOpen(false)} 
            />

            {/* Registro de Estudiantes & Acceso Docente */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setIsMoreMenuOpen(false);
                  onSelectTab('registro');
                }}
                className="p-3 rounded-2xl bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-[#65D8FF]" />
                  <span className="text-xs font-bold text-white group-hover:text-[#65D8FF] transition-colors">
                    Registro
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 block truncate">
                  {attemptsCount} evaluaciones
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsMoreMenuOpen(false);
                  if (onOpenTeacherAuth) onOpenTeacherAuth();
                }}
                className="p-3 rounded-2xl bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-1">
                  {isTeacherAuthenticated ? (
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Lock className="w-4 h-4 text-[#FFD166]" />
                  )}
                  <span className="text-xs font-bold text-white group-hover:text-[#FFD166] transition-colors">
                    {isTeacherAuthenticated ? 'Docente Activo' : 'Acceso Docente'}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 block truncate">
                  {isTeacherAuthenticated ? 'Sesión Autorizada' : 'Iniciar sesión'}
                </span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Floating Bottom Navigation Dock (Futuristic Liquid Glass Aesthetics) */}
      <nav 
        aria-label="Navegación principal de NEXORA"
        className="fixed bottom-2.5 sm:bottom-3 left-2 sm:left-4 right-2 sm:right-4 z-50 md:hidden max-w-md mx-auto select-none safe-area-pb touch-manipulation"
      >
        <div className="relative rounded-[26px] p-1 sm:p-1.5 bg-[#10152B]/92 dark:bg-[#0c1022]/95 backdrop-blur-2xl border border-[#65D8FF]/30 dark:border-[#65D8FF]/25 shadow-[0_12px_40px_rgba(0,0,0,0.55),0_0_24px_rgba(101,216,255,0.12)]">
          {/* Specular edge top glow reflection */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#65D8FF]/70 to-transparent pointer-events-none" />

          <div className="flex items-center justify-between gap-0.5 sm:gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isSelected = item.isAction ? isMoreMenuOpen : activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleTabClick(item)}
                  className={`relative flex-1 min-w-0 flex flex-col items-center justify-center py-1 sm:py-1.5 px-0.5 sm:px-1 rounded-2xl transition-all duration-200 cursor-pointer min-h-[48px] sm:min-h-[50px] touch-manipulation active:scale-95 group ${
                    isSelected
                      ? item.activeColor
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  aria-label={item.id === 'study' ? 'Modo Estudio' : item.label}
                  title={item.id === 'study' ? 'Modo Estudio: Biblioteca Pedagógica' : item.label}
                  aria-current={isSelected && !item.isAction ? 'page' : undefined}
                >
                  {/* Active Luminous Glass Background Pill */}
                  {isSelected && (
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#65D8FF]/20 via-[#A994FF]/15 to-transparent border border-[#65D8FF]/50 shadow-[0_0_14px_rgba(101,216,255,0.25)] -z-10 animate-fadeIn" />
                  )}

                  {/* Luminous Beacon Dot at top */}
                  {isSelected && (
                    <span className="absolute top-1 w-1.5 h-1.5 rounded-full bg-[#65D8FF] shadow-[0_0_8px_#65D8FF]" />
                  )}

                  <div className="relative">
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
                      isSelected 
                        ? `scale-110 ${item.activeColor} ${item.glowClass}` 
                        : 'group-hover:scale-105'
                    }`} />
                  </div>

                  <span className={`text-[9.5px] xs:text-[10px] sm:text-[11px] mt-0.5 tracking-tight transition-all duration-200 truncate max-w-full text-center leading-none ${
                    isSelected 
                      ? `${item.activeColor} font-black drop-shadow-[0_0_6px_rgba(101,216,255,0.4)]` 
                      : 'font-medium text-slate-400'
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
