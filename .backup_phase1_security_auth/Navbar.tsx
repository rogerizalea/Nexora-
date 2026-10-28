import React, { useState } from 'react';
import { 
  GraduationCap, 
  Clock, 
  Volume2, 
  VolumeX, 
  FileCode, 
  User, 
  RotateCcw,
  BookOpenCheck,
  CheckCircle2,
  Users,
  Layers,
  Sparkles,
  Share2,
  Lock,
  ShieldCheck,
  Bot,
  ChevronDown,
  X
} from 'lucide-react';
import { ExamMode } from '../types';
import { soundManager } from '../utils/sound';
import { DynamicTitle } from './DynamicTitle';

interface NavbarProps {
  currentTab: 'exam' | 'results' | 'registry' | 'forms' | 'tutor';
  setCurrentTab: (tab: 'exam' | 'results' | 'registry' | 'forms' | 'tutor') => void;
  examMode: ExamMode;
  setExamMode: (mode: ExamMode) => void;
  studentName: string;
  setStudentName: (name: string) => void;
  answeredCount: number;
  totalQuestions: number;
  elapsedSeconds: number;
  isExamRunning: boolean;
  isCompleted: boolean;
  attemptsCount: number;
  activeBankTitle: string;
  isStudentMode: boolean;
  onOpenBankSelector: () => void;
  onOpenShareModal: () => void;
  onRequestTeacherUnlock: (feature: string) => void;
  onResetExam: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  examMode,
  setExamMode,
  studentName,
  setStudentName,
  answeredCount,
  totalQuestions,
  elapsedSeconds,
  isExamRunning,
  isCompleted,
  attemptsCount,
  activeBankTitle,
  isStudentMode,
  onOpenBankSelector,
  onOpenShareModal,
  onRequestTeacherUnlock,
  onResetExam,
}) => {
  const [soundActive, setSoundActive] = useState(soundManager.isEnabled());
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(studentName);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const next = soundManager.toggle();
    setSoundActive(next);
  };

  const handleNameSave = () => {
    setStudentName(tempName.trim() || 'Estudiante');
    setIsEditingName(false);
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleTabSelect = (tab: 'exam' | 'results' | 'registry' | 'forms' | 'tutor') => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* DESKTOP LAYOUT (md+) */}
        <div className="hidden md:flex items-center justify-between h-16 gap-4">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-3 shrink-0">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${
              isStudentMode
                ? 'bg-gradient-to-tr from-[#18864B] to-emerald-500 shadow-emerald-500/20'
                : 'bg-gradient-to-tr from-[#10152B] via-[#175CD3] to-[#A994FF] shadow-indigo-500/20'
            }`}>
              {isStudentMode ? <ShieldCheck className="w-5 h-5 text-white" /> : <GraduationCap className="w-5 h-5 text-white" />}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <DynamicTitle 
                  title="NEXORA" 
                  size="base"
                  intervalSeconds={3.5}
                  showSparkle={true}
                  showBadge={false}
                />
                
                <button
                  onClick={onOpenBankSelector}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold bg-blue-50/80 hover:bg-blue-100/80 text-[#175CD3] border border-[#65D8FF]/40 shadow-2xs hover:shadow-xs transition-all duration-200 hover-lift cursor-pointer"
                  title="Elegir nivel de dificultad o temario"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#175CD3] shrink-0" />
                  <span className="max-w-[130px] truncate">{activeBankTitle}</span>
                  <span className="text-[10px] bg-[#175CD3] text-white font-bold px-1.5 py-0.5 rounded-md shadow-2xs">
                    Dificultad
                  </span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 font-medium tracking-tight">
                «Activa tu mente. Expande tu futuro» • Aprende a tu ritmo
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="flex items-center bg-slate-100/90 p-1 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200/80">
            <button
              onClick={() => setCurrentTab('exam')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'exam'
                  ? 'bg-white text-[#10152B] shadow-xs font-bold border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpenCheck className="w-4 h-4" />
              <span>Prueba</span>
            </button>

            <button
              onClick={() => setCurrentTab('results')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'results'
                  ? 'bg-white text-[#10152B] shadow-xs font-bold border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Resultados</span>
              {isCompleted && (
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              )}
            </button>

            {/* Tutoría IA con Gemini */}
            <button
              onClick={() => setCurrentTab('tutor')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'tutor'
                  ? 'bg-gradient-to-r from-[#10152B] via-[#175CD3] to-[#A994FF] text-white shadow-xs font-bold border border-[#A994FF]/30'
                  : 'text-slate-600 hover:text-[#175CD3] hover:bg-blue-50/60'
              }`}
              title="Tutoría con IA - Gemini 3.8 Flash para resolver dudas"
            >
              <Bot className={`w-4 h-4 ${currentTab === 'tutor' ? 'text-white' : 'text-[#175CD3]'}`} />
              <span>Tutoría IA</span>
              <span className={`w-1.5 h-1.5 rounded-full ${currentTab === 'tutor' ? 'bg-[#FFD166]' : 'bg-[#18864B]'} animate-pulse`} />
            </button>

            {/* Registry Tab - Locked in Student Mode */}
            {isStudentMode ? (
              <button
                onClick={() => onRequestTeacherUnlock('el Registro de Estudiantes')}
                className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-600 flex items-center gap-1 cursor-pointer"
                title="Acceso protegido"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Registro</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentTab('registry')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentTab === 'registry'
                    ? 'bg-white text-[#10152B] shadow-xs font-bold border border-slate-200/50'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Registro de quién realizó el test con sus puntajes"
              >
                <Users className="w-4 h-4" />
                <span>Registro</span>
                {attemptsCount > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full text-[11px] font-bold bg-[#65D8FF]/20 text-[#175CD3]">
                    {attemptsCount}
                  </span>
                )}
              </button>
            )}

            {/* Apps Script Tab - Locked in Student Mode */}
            {isStudentMode ? (
              <button
                onClick={() => onRequestTeacherUnlock('Google Apps Script')}
                className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-600 flex items-center gap-1 cursor-pointer"
                title="Acceso protegido"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Script</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentTab('forms')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentTab === 'forms'
                    ? 'bg-white text-[#10152B] shadow-xs font-bold border border-slate-200/50'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileCode className="w-4 h-4" />
                <span>Apps Script</span>
              </button>
            )}
          </nav>

          {/* Desktop Right Utilities */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Share Link for Teachers */}
            {!isStudentMode ? (
              <button
                onClick={onOpenShareModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#18864B] hover:bg-emerald-700 text-white text-xs font-bold shadow-xs hover:shadow transition-all duration-200 hover-lift cursor-pointer"
                title="Obtener enlace seguro para que los alumnos no puedan modificar"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Enlace Alumnos</span>
              </button>
            ) : (
              <button
                onClick={() => onRequestTeacherUnlock('el Modo Docente')}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:text-[#175CD3] hover:bg-blue-50 text-xs font-semibold transition-all duration-200 hover-lift cursor-pointer"
                title="Desbloquear panel docente"
              >
                <Lock className="w-3 h-3 text-slate-400" />
                <span>¿Eres Docente?</span>
              </button>
            )}

            {/* Timer if exam active */}
            {isExamRunning && (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50 border border-[#FFD166]/70 text-amber-900 text-xs font-mono font-bold">
                <Clock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>{formatTimer(elapsedSeconds)}</span>
              </div>
            )}

            {/* Student Name */}
            {isEditingName ? (
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleNameSave()}
                  className="w-32 px-2 py-1 text-xs border border-[#175CD3] rounded-md focus:outline-none bg-white font-medium"
                  placeholder="Tu nombre"
                  autoFocus
                />
                <button
                  onClick={handleNameSave}
                  className="px-2 py-1 bg-[#175CD3] text-white rounded text-xs font-bold hover:bg-blue-700"
                >
                  OK
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setTempName(studentName);
                  setIsEditingName(true);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                title="Editar nombre para el informe y constancia"
              >
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span className="max-w-[90px] truncate font-semibold">
                  {studentName || 'Estudiante'}
                </span>
              </button>
            )}

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              title={soundActive ? 'Silenciar efectos de sonido' : 'Activar efectos de sonido'}
            >
              {soundActive ? <Volume2 className="w-4 h-4 text-[#175CD3]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Reset Exam Button */}
            <button
              onClick={onResetExam}
              className="p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
              title="Reiniciar respuestas y prueba"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MOBILE / TABLET LAYOUT (under md, precisely optimized for Android 360px - 400px) */}
        <div className="md:hidden py-2 space-y-2">
          
          {/* Row 1: Logo + Compact NEXORA Brand + Action Tools (Never Overflows) */}
          <div className="flex items-center justify-between gap-2">
            
            {/* Left Brand: Icon + Dynamic Title + Slogan */}
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-xs shrink-0 ${
                isStudentMode
                  ? 'bg-gradient-to-tr from-[#18864B] to-emerald-500'
                  : 'bg-gradient-to-tr from-[#10152B] via-[#175CD3] to-[#A994FF]'
              }`}>
                {isStudentMode ? <ShieldCheck className="w-4 h-4 text-white" /> : <GraduationCap className="w-4 h-4 text-white" />}
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <DynamicTitle 
                    title="NEXORA" 
                    size="xs"
                    intervalSeconds={3.5}
                    showSparkle={false}
                    showBadge={false}
                  />
                  <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-[#65D8FF]/15 text-[#10152B] border border-[#65D8FF]/30 shrink-0">
                    Oficial
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold truncate max-w-[150px] sm:max-w-[210px] leading-tight">
                  Activa tu mente • Expande tu futuro
                </span>
              </div>
            </div>

            {/* Right Tools Cluster: Compact & Touch-Friendly without crowding */}
            <div className="flex items-center gap-1 shrink-0">
              {/* Timer Pill (Only active during exam, compact font) */}
              {isExamRunning && (
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-lg bg-amber-50 border border-[#FFD166]/80 text-amber-900 text-[10px] font-mono font-bold shadow-2xs">
                  <Clock className="w-2.5 h-2.5 text-amber-600 animate-pulse shrink-0" />
                  <span>{formatTimer(elapsedSeconds)}</span>
                </div>
              )}

              {/* Sound Toggle */}
              <button
                onClick={toggleSound}
                className="w-7 h-7 rounded-lg text-slate-500 hover:bg-slate-100 flex items-center justify-center transition-colors"
                title={soundActive ? 'Silenciar' : 'Activar sonido'}
                aria-label="Sonido"
              >
                {soundActive ? <Volume2 className="w-3.5 h-3.5 text-[#175CD3]" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
              </button>

              {/* Share Button */}
              <button
                onClick={onOpenShareModal}
                className="w-7 h-7 rounded-lg text-emerald-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
                title="Compartir enlace para estudiantes"
                aria-label="Compartir"
              >
                <Share2 className="w-3.5 h-3.5 text-[#18864B]" />
              </button>

              {/* Reset Button */}
              <button
                onClick={onResetExam}
                className="w-7 h-7 rounded-lg text-slate-500 hover:bg-rose-50 hover:text-rose-600 flex items-center justify-center transition-colors"
                title="Reiniciar prueba"
                aria-label="Reiniciar"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Quick Sections Dropdown Toggle */}
              <button
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                  mobileMenuOpen ? 'bg-[#10152B] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
                }`}
                title="Menú de secciones NEXORA"
                aria-label="Ver todas las secciones"
              >
                {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Row 2: Touch-friendly horizontal navigation bar with edge fade indicator */}
          <div className="relative -mx-3 px-3">
            <div 
              className="overflow-x-auto scrollbar-none flex items-center gap-1.5 py-0.5 px-0.5 touch-pan-x overscroll-x-contain"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {/* Tab 1: Prueba */}
              <button
                onClick={() => handleTabSelect('exam')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                  currentTab === 'exam'
                    ? 'bg-[#10152B] text-white shadow-xs border border-[#65D8FF]/30 font-black'
                    : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <BookOpenCheck className="w-3.5 h-3.5" />
                <span>Prueba</span>
              </button>

              {/* Tab 2: Resultados */}
              <button
                onClick={() => handleTabSelect('results')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                  currentTab === 'results'
                    ? 'bg-[#10152B] text-white shadow-xs border border-[#65D8FF]/30 font-black'
                    : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Resultados</span>
                {isCompleted && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </button>

              {/* Tab 3: Tutor IA (NEXORA Gradient) */}
              <button
                onClick={() => handleTabSelect('tutor')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1 shrink-0 ${
                  currentTab === 'tutor'
                    ? 'bg-gradient-to-r from-[#10152B] via-[#175CD3] to-[#A994FF] text-white shadow-xs border border-[#A994FF]/40'
                    : 'bg-blue-50/90 text-[#175CD3] border border-[#65D8FF]/30'
                }`}
              >
                <Bot className={`w-3.5 h-3.5 ${currentTab === 'tutor' ? 'text-white' : 'text-[#175CD3]'}`} />
                <span>Tutor IA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD166] animate-pulse" />
              </button>

              {/* Tab 4: Dificultad */}
              <button
                onClick={onOpenBankSelector}
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 bg-amber-50 text-amber-900 border border-[#FFD166]/60 active:scale-95"
                title="Cambiar dificultad o temario"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Dificultad</span>
              </button>

              {/* Tab 5: Registro */}
              {isStudentMode ? (
                <button
                  onClick={() => onRequestTeacherUnlock('el Registro de Estudiantes')}
                  className="px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-400 bg-slate-50 border border-slate-200 flex items-center gap-1 shrink-0"
                  title="Acceso docente protegido"
                >
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Registro</span>
                </button>
              ) : (
                <button
                  onClick={() => handleTabSelect('registry')}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                    currentTab === 'registry'
                      ? 'bg-[#10152B] text-white shadow-xs border border-[#65D8FF]/30 font-black'
                      : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Registro</span>
                  {attemptsCount > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-[#65D8FF]/20 text-[#175CD3]">
                      {attemptsCount}
                    </span>
                  )}
                </button>
              )}

              {/* Tab 6: Script Google Forms */}
              {isStudentMode ? (
                <button
                  onClick={() => onRequestTeacherUnlock('Google Apps Script')}
                  className="px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-400 bg-slate-50 border border-slate-200 flex items-center gap-1 shrink-0"
                  title="Acceso protegido"
                >
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Script</span>
                </button>
              ) : (
                <button
                  onClick={() => handleTabSelect('forms')}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                    currentTab === 'forms'
                      ? 'bg-[#10152B] text-white shadow-xs border border-[#65D8FF]/30 font-black'
                      : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Script</span>
                </button>
              )}
            </div>

            {/* Visual gradient indicator on the right side to signal scrollability without clipped edges */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white via-white/80 to-transparent" />
          </div>

          {/* Quick Sections Drawer for Instant Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="mt-2 p-3 bg-white border border-slate-200 rounded-2xl shadow-lg space-y-2 animate-slideUp">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#175CD3]" />
                  <span>Navegación Rápida NEXORA</span>
                </span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => handleTabSelect('exam')}
                  className={`p-2 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                    currentTab === 'exam'
                      ? 'bg-[#10152B] text-white border-[#65D8FF]/40 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <BookOpenCheck className="w-4 h-4 text-[#65D8FF]" />
                  <div>
                    <div className="font-bold">Prueba</div>
                    <div className="text-[10px] text-slate-400 font-normal">30 reactivos</div>
                  </div>
                </button>

                <button
                  onClick={() => handleTabSelect('results')}
                  className={`p-2 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                    currentTab === 'results'
                      ? 'bg-[#10152B] text-white border-[#65D8FF]/40 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <div>
                    <div className="font-bold">Resultados</div>
                    <div className="text-[10px] text-slate-400 font-normal">Informe PDF</div>
                  </div>
                </button>

                <button
                  onClick={() => handleTabSelect('tutor')}
                  className={`p-2 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                    currentTab === 'tutor'
                      ? 'bg-[#10152B] text-white border-[#A994FF]/40 shadow-xs'
                      : 'bg-purple-50/60 border-purple-200/80 text-purple-900 hover:bg-purple-100'
                  }`}
                >
                  <Bot className="w-4 h-4 text-[#A994FF]" />
                  <div>
                    <div className="font-bold">Tutor IA</div>
                    <div className="text-[10px] text-purple-700 font-normal">Gemini 3.8 Flash</div>
                  </div>
                </button>

                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenBankSelector(); }}
                  className="p-2 rounded-xl text-left font-bold flex items-center gap-2 bg-amber-50/80 border border-[#FFD166]/80 text-amber-900 hover:bg-amber-100 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#FFD166]" />
                  <div>
                    <div className="font-bold">Dificultad</div>
                    <div className="text-[10px] text-amber-700 font-normal truncate max-w-[85px]">{activeBankTitle}</div>
                  </div>
                </button>

                {!isStudentMode ? (
                  <>
                    <button
                      onClick={() => handleTabSelect('registry')}
                      className={`p-2 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                        currentTab === 'registry'
                          ? 'bg-[#10152B] text-white border-[#65D8FF]/40 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Users className="w-4 h-4 text-[#175CD3]" />
                      <div>
                        <div className="font-bold">Registro</div>
                        <div className="text-[10px] text-slate-400 font-normal">{attemptsCount} estudiantes</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleTabSelect('forms')}
                      className={`p-2 rounded-xl text-left font-bold flex items-center gap-2 border transition-all ${
                        currentTab === 'forms'
                          ? 'bg-[#10152B] text-white border-[#65D8FF]/40 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <FileCode className="w-4 h-4 text-[#FF78C8]" />
                      <div>
                        <div className="font-bold">Apps Script</div>
                        <div className="text-[10px] text-slate-400 font-normal">Google Forms</div>
                      </div>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => { setMobileMenuOpen(false); onRequestTeacherUnlock('el Modo Docente'); }}
                    className="col-span-2 p-2 rounded-xl text-left font-semibold flex items-center justify-between bg-slate-50 border border-slate-200 text-slate-600 hover:bg-blue-50 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>¿Eres docente? Desbloquear panel</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#175CD3]">Acceder</span>
                  </button>
                )}
              </div>

              {/* Student Name config on mobile */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Estudiante: <strong>{studentName || 'Sin asignar'}</strong></span>
                </span>
                <button
                  onClick={() => {
                    const newName = prompt('Escribe tu nombre para el informe y constancia:', studentName);
                    if (newName !== null && newName.trim()) {
                      setStudentName(newName.trim());
                    }
                  }}
                  className="text-[#175CD3] font-bold hover:underline text-[11px]"
                >
                  Cambiar
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </header>
  );
};
