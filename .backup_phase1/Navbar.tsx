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
  Bot
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
                : 'bg-gradient-to-tr from-[#102A43] via-[#175CD3] to-indigo-600 shadow-blue-500/20'
            }`}>
              {isStudentMode ? <ShieldCheck className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <DynamicTitle 
                  title="PRUEBAS DE AYUDA DE ESTUDIO" 
                  size="base"
                  intervalSeconds={3.5}
                  showSparkle={true}
                  showBadge={false}
                />
                
                <button
                  onClick={onOpenBankSelector}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-[#175CD3] border border-blue-200/80 shadow-2xs hover:shadow-xs transition-all duration-200 hover-lift cursor-pointer"
                  title="Elegir nivel de dificultad o temario"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#175CD3] shrink-0" />
                  <span className="max-w-[130px] truncate">{activeBankTitle}</span>
                  <span className="text-[10px] bg-[#175CD3] text-white font-bold px-1.5 py-0.5 rounded-md shadow-2xs">
                    Dificultad
                  </span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 font-medium">
                EVALUACIÓN DIAGNÓSTICA FUNDAMENTAL • 30 PREGUNTAS
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="flex items-center bg-slate-100/90 p-1 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200/80">
            <button
              onClick={() => setCurrentTab('exam')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'exam'
                  ? 'bg-white text-[#175CD3] shadow-xs font-bold'
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
                  ? 'bg-white text-[#175CD3] shadow-xs font-bold'
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
                  ? 'bg-gradient-to-r from-[#175CD3] to-indigo-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-[#175CD3] hover:bg-blue-50/60'
              }`}
              title="Tutoría con IA - Gemini 3.8 Flash para resolver dudas"
            >
              <Bot className={`w-4 h-4 ${currentTab === 'tutor' ? 'text-white' : 'text-[#175CD3]'}`} />
              <span>Tutoría IA</span>
              <span className={`w-1.5 h-1.5 rounded-full ${currentTab === 'tutor' ? 'bg-amber-300' : 'bg-[#18864B]'} animate-pulse`} />
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
                    ? 'bg-white text-[#175CD3] shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Registro de quién realizó el test con sus puntajes"
              >
                <Users className="w-4 h-4" />
                <span>Registro</span>
                {attemptsCount > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full text-[11px] font-bold bg-blue-100 text-[#175CD3]">
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
                    ? 'bg-white text-[#175CD3] shadow-xs font-bold'
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
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
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

        {/* MOBILE / TABLET LAYOUT (under md, tailored for Android 360px - 400px) */}
        <div className="md:hidden py-2 space-y-2">
          
          {/* Row 1: Logo + Full Name (flexible) + Fast Utilities */}
          <div className="flex items-center justify-between gap-2">
            
            <div className="flex items-center gap-2.5 flex-1 min-w-0">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-xs shrink-0 ${
                isStudentMode
                  ? 'bg-gradient-to-tr from-[#18864B] to-emerald-500'
                  : 'bg-gradient-to-tr from-[#102A43] via-[#175CD3] to-indigo-600'
              }`}>
                {isStudentMode ? <ShieldCheck className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
              </div>

              {/* Title gets all remaining width and wraps cleanly without chopping letters */}
              <div className="flex-1 min-w-0">
                <DynamicTitle 
                  title="PRUEBAS DE AYUDA DE ESTUDIO" 
                  size="xs"
                  intervalSeconds={3.5}
                  showSparkle={false}
                  showBadge={false}
                  className="w-full"
                />
              </div>
            </div>

            {/* Right quick actions on mobile */}
            <div className="flex items-center gap-1 shrink-0">
              {isExamRunning && (
                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-mono font-bold">
                  <Clock className="w-3 h-3 text-amber-600 animate-pulse" />
                  <span>{formatTimer(elapsedSeconds)}</span>
                </div>
              )}

              <button
                onClick={toggleSound}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                title={soundActive ? 'Silenciar' : 'Activar sonido'}
              >
                {soundActive ? <Volume2 className="w-4 h-4 text-[#175CD3]" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
              </button>

              <button
                onClick={onOpenShareModal}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                title="Compartir enlace para estudiantes"
              >
                <Share2 className="w-4 h-4 text-emerald-600" />
              </button>

              <button
                onClick={onResetExam}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-rose-50 hover:text-rose-600"
                title="Reiniciar prueba"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Row 2: Touch-friendly horizontal navigation bar (smooth horizontal swipe, no cutoffs) */}
          <div className="overflow-x-auto scrollbar-none -mx-3 px-3 py-0.5">
            <div className="inline-flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-bold border border-slate-200/80 min-w-full">
              
              <button
                onClick={() => setCurrentTab('exam')}
                className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
                  currentTab === 'exam'
                    ? 'bg-white text-[#175CD3] shadow-xs font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpenCheck className="w-3.5 h-3.5" />
                <span>Prueba</span>
              </button>

              <button
                onClick={() => setCurrentTab('results')}
                className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
                  currentTab === 'results'
                    ? 'bg-white text-[#175CD3] shadow-xs font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Resultados</span>
                {isCompleted && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </button>

              <button
                onClick={() => setCurrentTab('tutor')}
                className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
                  currentTab === 'tutor'
                    ? 'bg-gradient-to-r from-[#175CD3] to-indigo-600 text-white shadow-xs font-black'
                    : 'text-[#175CD3] bg-blue-50/70 hover:bg-blue-100'
                }`}
              >
                <Bot className={`w-3.5 h-3.5 ${currentTab === 'tutor' ? 'text-white' : 'text-[#175CD3]'}`} />
                <span>Tutor IA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              </button>

              <button
                onClick={onOpenBankSelector}
                className="px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 shrink-0 text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/60"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Dificultad</span>
              </button>

              {isStudentMode ? (
                <button
                  onClick={() => onRequestTeacherUnlock('el Registro de Estudiantes')}
                  className="px-2.5 py-2 rounded-lg text-slate-400 flex items-center gap-1 shrink-0"
                  title="Acceso docente"
                >
                  <Lock className="w-3 h-3" />
                  <span>Docente</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setCurrentTab('registry')}
                    className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
                      currentTab === 'registry'
                        ? 'bg-white text-[#175CD3] shadow-xs font-black'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Registro</span>
                    {attemptsCount > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-blue-100 text-[#175CD3]">
                        {attemptsCount}
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => setCurrentTab('forms')}
                    className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
                      currentTab === 'forms'
                        ? 'bg-white text-[#175CD3] shadow-xs font-black'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span>Script</span>
                  </button>
                </>
              )}
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
