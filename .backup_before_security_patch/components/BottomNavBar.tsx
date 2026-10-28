import React, { useState } from 'react';
import { 
  Home, 
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
  RotateCcw,
  Sparkles,
  X
} from 'lucide-react';
import { ThemeMode, ResolvedTheme } from '../utils/themeManager';

export type MainNavTab = 'inicio' | 'materias' | 'pruebas' | 'tutor' | 'registro' | 'forms';

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

  const navItems = [
    { id: 'inicio' as MainNavTab, label: 'Inicio', icon: Home },
    { id: 'materias' as MainNavTab, label: 'Materias', icon: Layers },
    { id: 'pruebas' as MainNavTab, label: 'Pruebas', icon: FileCheck2 },
    { id: 'tutor' as MainNavTab, label: 'Tutor IA', icon: Bot, isTutor: true },
    { id: 'mas' as any, label: 'Más', icon: MoreHorizontal, isAction: true },
  ];

  const handleTabClick = (item: typeof navItems[0]) => {
    if (item.isAction) {
      setIsMoreMenuOpen(!isMoreMenuOpen);
    } else {
      setIsMoreMenuOpen(false);
      onSelectTab(item.id);
    }
  };

  return (
    <>
      {/* "Más" Drawer Overlay */}
      {isMoreMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs md:hidden animate-fadeIn"
          onClick={() => setIsMoreMenuOpen(false)}
        />
      )}

      {/* "Más" Drawer Content */}
      {isMoreMenuOpen && (
        <div className="fixed bottom-22 left-4 right-4 z-50 md:hidden bg-white/98 dark:bg-[#10152B]/98 text-slate-900 dark:text-white rounded-3xl p-5 border border-slate-200 dark:border-[#65D8FF]/30 shadow-2xl space-y-4 animate-slideUp backdrop-blur-xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-[#65D8FF] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
              <span>Opciones y Ajustes NEXORA</span>
            </span>
            <button
              onClick={() => setIsMoreMenuOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white cursor-pointer"
              aria-label="Cerrar menú más"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Theme Selector: Dark, Light, Auto */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Tema Visual de la Plataforma
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onSetTheme('dark')}
                className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  currentTheme === 'dark'
                    ? 'bg-[#10152B] border-[#65D8FF] text-[#65D8FF] shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Oscuro</span>
              </button>

              <button
                onClick={() => onSetTheme('light')}
                className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  currentTheme === 'light'
                    ? 'bg-[#175CD3] text-white border-[#175CD3] shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Claro</span>
              </button>

              <button
                onClick={() => onSetTheme('auto')}
                className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  currentTheme === 'auto'
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Auto</span>
              </button>
            </div>
          </div>

          {/* Radio Musical NEXORA Trigger */}
          <button
            onClick={() => {
              setIsMoreMenuOpen(false);
              if (onOpenMusicModal) {
                onOpenMusicModal();
              } else {
                window.dispatchEvent(new CustomEvent('nexora-open-music'));
              }
            }}
            className="w-full p-3 rounded-2xl bg-indigo-50/80 hover:bg-indigo-100/90 dark:bg-gradient-to-r dark:from-[#10152B] dark:via-[#161F3F] dark:to-[#10152B] dark:hover:bg-slate-800 border border-indigo-200/80 dark:border-[#65D8FF]/30 text-left transition-all cursor-pointer flex items-center justify-between shadow-xs"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#65D8FF] via-[#A994FF] to-[#FF78C8] flex items-center justify-center text-slate-950 font-black shrink-0">
                <Music className="w-4 h-4 text-slate-950" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">Radio Musical NEXORA</span>
                <span className="text-[10px] text-slate-600 dark:text-slate-400 block truncate">21 pistas de estudio • Lo-Fi & Cósmica</span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-indigo-700 dark:text-[#65D8FF] bg-white dark:bg-[#175CD3]/30 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-[#65D8FF]/30 shrink-0">
              Abrir
            </span>
          </button>

          {/* Additional Features: Registro & Acceso Docente */}
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <button
              onClick={() => {
                setIsMoreMenuOpen(false);
                onSelectTab('registro');
              }}
              className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/90 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-left transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <Users className="w-4 h-4 text-[#175CD3] dark:text-[#65D8FF]" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">Registro</span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                {attemptsCount} evaluaciones
              </span>
            </button>

            <button
              onClick={() => {
                setIsMoreMenuOpen(false);
                if (onOpenTeacherAuth) onOpenTeacherAuth();
              }}
              className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/90 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-left transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <Lock className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {isTeacherAuthenticated ? 'Docente Activo' : 'Acceso Docente'}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                {isTeacherAuthenticated ? 'Sesión Autorizada' : 'Iniciar sesión'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Bottom Nav Dock (Mobile / Small Screens) */}
      <nav 
        aria-label="Navegación inferior móvil"
        className="fixed bottom-3 left-3 right-3 z-40 md:hidden bg-white/95 dark:bg-[#10152B]/95 border border-slate-200/90 dark:border-[#65D8FF]/25 shadow-[0_12px_36px_rgba(0,0,0,0.12)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.85)] rounded-3xl p-1.5 backdrop-blur-xl safe-area-pb"
      >
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isSelected = activeTab === item.id;

            return (
              <button
                key={item.label}
                onClick={() => handleTabClick(item)}
                className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all duration-200 cursor-pointer min-w-[54px] min-h-[48px] ${
                  isSelected
                    ? 'text-indigo-600 dark:text-[#65D8FF]'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {/* Active Indicator Glow Pill */}
                {isSelected && (
                  <span className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-[#65D8FF]/20 dark:from-[#175CD3]/80 dark:via-[#A994FF]/50 dark:to-[#65D8FF]/30 rounded-2xl -z-10 shadow-xs border border-indigo-200 dark:border-[#65D8FF]/30 animate-fadeIn" />
                )}

                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform ${isSelected ? 'scale-110 text-indigo-600 dark:text-[#65D8FF]' : ''}`} />
                  {item.isTutor && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FFD166] animate-pulse" />
                  )}
                </div>

                <span className={`text-[10px] mt-0.5 font-bold tracking-tight ${
                  isSelected ? 'text-indigo-700 dark:text-[#65D8FF] font-black' : 'text-slate-600 dark:text-slate-400'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
