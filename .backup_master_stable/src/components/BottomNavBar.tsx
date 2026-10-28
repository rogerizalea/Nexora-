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
        <div className="fixed bottom-22 left-4 right-4 z-50 md:hidden bg-slate-900/95 dark:bg-slate-950/95 text-white rounded-3xl p-5 border border-slate-800 shadow-2xl space-y-4 animate-slideUp backdrop-blur-md">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-[#65D8FF] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
              <span>Opciones y Ajustes NEXORA</span>
            </span>
            <button
              onClick={() => setIsMoreMenuOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Theme Selector: Dark, Light, Auto */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Tema Visual de la Plataforma
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onSetTheme('dark')}
                className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  currentTheme === 'dark'
                    ? 'bg-[#10152B] border-[#65D8FF] text-[#65D8FF] shadow-xs'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Oscuro</span>
              </button>

              <button
                onClick={() => onSetTheme('light')}
                className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  currentTheme === 'light'
                    ? 'bg-white text-slate-900 border-white shadow-xs'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Claro</span>
              </button>

              <button
                onClick={() => onSetTheme('auto')}
                className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                  currentTheme === 'auto'
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-xs'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Auto</span>
              </button>
            </div>
          </div>

          {/* Additional Features: Registro & Acceso Docente */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => {
                setIsMoreMenuOpen(false);
                onSelectTab('registro');
              }}
              className="p-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700/80 border border-slate-700 text-left transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <Users className="w-4 h-4 text-[#175CD3]" />
                <span className="text-xs font-bold text-white">Registro</span>
              </div>
              <span className="text-[10px] text-slate-400 block truncate">
                {attemptsCount} evaluaciones
              </span>
            </button>

            <button
              onClick={() => {
                setIsMoreMenuOpen(false);
                if (onOpenTeacherAuth) onOpenTeacherAuth();
              }}
              className="p-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700/80 border border-slate-700 text-left transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <Lock className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white">
                  {isTeacherAuthenticated ? 'Docente Activo' : 'Acceso Docente'}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 block truncate">
                {isTeacherAuthenticated ? 'Sesión Autorizada' : 'Iniciar sesión'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Bottom Nav Dock (Mobile / Small Screens) */}
      <nav 
        aria-label="Navegación inferior móvil"
        className="fixed bottom-3 left-4 right-4 z-40 md:hidden bg-slate-900/95 dark:bg-slate-950/95 border border-slate-800/90 dark:border-slate-800 shadow-2xl rounded-3xl p-1.5 backdrop-blur-md safe-area-pb"
      >
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isSelected = activeTab === item.id;

            return (
              <button
                key={item.label}
                onClick={() => handleTabClick(item)}
                className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {/* Active Indicator Glow Pill */}
                {isSelected && (
                  <span className="absolute inset-0 bg-gradient-to-tr from-[#175CD3]/80 via-[#A994FF]/50 to-[#65D8FF]/30 rounded-2xl -z-10 shadow-xs border border-[#65D8FF]/30 animate-fadeIn" />
                )}

                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform ${isSelected ? 'scale-110 text-[#65D8FF]' : ''}`} />
                  {item.isTutor && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FFD166] animate-pulse" />
                  )}
                </div>

                <span className={`text-[10px] mt-0.5 font-bold tracking-tight ${
                  isSelected ? 'text-[#65D8FF]' : 'text-slate-400'
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
