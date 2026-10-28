import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Volume2, 
  VolumeX, 
  Volume1,
  Music, 
  ChevronUp, 
  ChevronDown, 
  Radio, 
  Sparkles,
  Zap, 
  Moon, 
  Headphones,
  AlertCircle,
  X,
  Maximize2,
  Minimize2,
  Sliders
} from 'lucide-react';
import { 
  musicManager, 
  AVAILABLE_TRACKS, 
  MusicPlayerState, 
  MusicCategory, 
  MusicTrack 
} from '../utils/musicManager';

interface GlobalMusicPlayerProps {
  className?: string;
}

export const GlobalMusicPlayer: React.FC<GlobalMusicPlayerProps> = ({ className = '' }) => {
  const [playerState, setPlayerState] = useState<MusicPlayerState>(musicManager.getState());
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = musicManager.subscribe((state) => {
      setPlayerState(state);
    });
    return unsubscribe;
  }, []);

  // Global listener to open music player from navbar or bottom menu
  useEffect(() => {
    const handleOpenMusic = () => {
      setIsMinimized(false);
      setIsExpanded(true);
    };
    window.addEventListener('nexora-open-music', handleOpenMusic);
    return () => window.removeEventListener('nexora-open-music', handleOpenMusic);
  }, []);

  const currentTrack = musicManager.getCurrentTrack();
  const visibleTracks = musicManager.getTracksForCategory(playerState.selectedCategory);

  const categories: { id: MusicCategory | 'all'; label: string; count: number; icon: any }[] = [
    { id: 'all', label: 'Todas', count: 21, icon: Radio },
    { id: 'lofi', label: 'Lo-Fi', count: 10, icon: Headphones },
    { id: 'ncs', label: 'NCS & Beat', count: 5, icon: Zap },
    { id: 'cosmic', label: 'Cósmica', count: 6, icon: Moon },
  ];

  const handleVolumeSliderChange = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>) => {
    const valPercent = parseInt((e.target as HTMLInputElement).value, 10);
    musicManager.setVolume(valPercent / 100);
  };

  const handlePresetVolume = (percent: number) => {
    musicManager.setVolume(percent / 100);
  };

  const currentVolumePercent = playerState.isMuted ? 0 : playerState.volumePercent;

  // Render the track catalog content reused in both mobile bottom-sheet and desktop popup
  const renderPlayerContent = (isMobileSheet = false) => (
    <>
      {/* Mobile top drag/dismiss handle bar */}
      {isMobileSheet && (
        <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto shrink-0 mb-1" />
      )}

      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#65D8FF] via-[#A994FF] to-[#FF78C8] flex items-center justify-center text-slate-950 font-black shadow-xs">
            <Radio className="w-4 h-4 text-slate-950" />
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white block">
              Radio Musical NEXORA
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              Ambiente de concentración • 21 Pistas
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsExpanded(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
            title="Cerrar panel"
            aria-label="Cerrar panel musical"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-xl text-[10px] font-bold shrink-0 border border-slate-200/80 dark:border-slate-800">
        {categories.map((cat) => {
          const isSelected = playerState.selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => musicManager.setCategory(cat.id)}
              className={`py-1.5 px-1 rounded-lg transition-all text-center cursor-pointer truncate ${
                isSelected
                  ? 'bg-white dark:bg-[#175CD3] text-[#175CD3] dark:text-white shadow-xs font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          );
        })}
      </div>

      {/* Currently Playing Track Card */}
      <div className="p-3 rounded-2xl bg-indigo-50/90 dark:bg-gradient-to-r dark:from-[#161F3F] dark:to-[#10152B] border border-indigo-200/90 dark:border-[#65D8FF]/30 shrink-0 space-y-1.5 shadow-2xs">
        <div className="flex items-center justify-between text-xs">
          <span className="font-extrabold text-slate-900 dark:text-white truncate">
            {currentTrack.title}
          </span>
          <span className="text-[9px] font-mono font-bold text-indigo-700 dark:text-[#65D8FF] bg-white/90 dark:bg-indigo-950/90 px-1.5 py-0.5 rounded-md border border-indigo-200 dark:border-transparent shrink-0">
            {currentTrack.categoryName}
          </span>
        </div>
        
        <p className="text-[10px] text-slate-600 dark:text-slate-300 line-clamp-1">
          {currentTrack.subtitle}
        </p>

        <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            {currentTrack.bpm && <span>{currentTrack.bpm} BPM</span>}
            {currentTrack.keySignature && <span>• {currentTrack.keySignature}</span>}
          </div>
          {playerState.isPlaying && (
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 h-full bg-[#175CD3] dark:bg-[#65D8FF] rounded-full sound-bar-1" />
              <span className="w-0.5 h-2/3 bg-[#7c3aed] dark:bg-[#A994FF] rounded-full sound-bar-2" />
              <span className="w-0.5 h-5/6 bg-[#db2777] dark:bg-[#FF78C8] rounded-full sound-bar-3" />
            </div>
          )}
        </div>
      </div>

      {/* Transport Controls (Prev, Play, Next, Shuffle, Mute) */}
      <div className="flex items-center justify-center gap-3 py-1 shrink-0">
        <button
          onClick={() => musicManager.toggleShuffle()}
          className={`p-2.5 rounded-xl transition-all cursor-pointer min-w-[42px] min-h-[42px] flex items-center justify-center ${
            playerState.isShuffle
              ? 'text-indigo-600 dark:text-[#65D8FF] bg-indigo-100/80 dark:bg-indigo-950/60 font-black'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
          title={playerState.isShuffle ? 'Aleatorio activo' : 'Activar aleatorio'}
        >
          <Shuffle className="w-4 h-4" />
        </button>

        <button
          onClick={() => musicManager.prevTrack()}
          className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer active:scale-90 min-w-[42px] min-h-[42px] flex items-center justify-center"
          title="Pista anterior"
        >
          <SkipBack className="w-4 h-4" />
        </button>

        <button
          onClick={() => musicManager.togglePlay()}
          className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#10152B] to-[#175CD3] dark:from-[#65D8FF] dark:to-[#A994FF] text-white dark:text-slate-950 flex items-center justify-center hover:opacity-95 transition-transform active:scale-95 cursor-pointer shadow-md"
          title={playerState.isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {playerState.isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-0.5" />
          )}
        </button>

        <button
          onClick={() => musicManager.nextTrack()}
          className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer active:scale-90 min-w-[42px] min-h-[42px] flex items-center justify-center"
          title="Pista siguiente"
        >
          <SkipForward className="w-4 h-4" />
        </button>

        <button
          onClick={() => musicManager.toggleMute()}
          className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer active:scale-90 min-w-[42px] min-h-[42px] flex items-center justify-center"
          title={playerState.isMuted ? 'Activar sonido' : 'Silenciar'}
        >
          {playerState.isMuted || playerState.volume === 0 ? (
            <VolumeX className="w-4 h-4 text-rose-500" />
          ) : playerState.volume < 0.5 ? (
            <Volume1 className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#175CD3] dark:text-[#65D8FF]" />
          )}
        </button>
      </div>

      {/* Scrollable Track Catalog */}
      <div className="space-y-1 overflow-y-auto flex-1 pr-1 max-h-36 sm:max-h-44 scrollbar-thin">
        {visibleTracks.map((track) => {
          const isSelected = track.id === playerState.currentTrackId;
          return (
            <button
              key={track.id}
              onClick={() => {
                musicManager.setTrack(track.id);
                if (!playerState.isPlaying) {
                  musicManager.play();
                }
              }}
              className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                isSelected
                  ? 'bg-indigo-50 border border-indigo-200 text-indigo-950 dark:bg-indigo-950/80 dark:border-[#65D8FF]/60 dark:text-white font-bold shadow-2xs'
                  : 'hover:bg-slate-100/90 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-300'
              }`}
            >
              <div className="truncate mr-2 min-w-0">
                <div className="flex items-center gap-1.5 truncate">
                  {isSelected && playerState.isPlaying ? (
                    <span className="w-2 h-2 rounded-full bg-[#175CD3] dark:bg-[#65D8FF] animate-pulse shrink-0" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 shrink-0" />
                  )}
                  <span className="truncate">{track.title}</span>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal block truncate mt-0.5">
                  {track.genre}
                </span>
              </div>

              <span className={`text-[9px] font-mono shrink-0 px-1.5 py-0.5 rounded-md ${
                isSelected
                  ? 'text-indigo-700 dark:text-[#65D8FF] bg-indigo-100 dark:bg-indigo-900/60 font-bold'
                  : 'text-slate-500 dark:text-slate-400'
              }`}>
                {track.categoryName}
              </span>
            </button>
          );
        })}
      </div>

      {/* Continuous Volume Slider Section (0 - 100%) */}
      <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5 shrink-0">
        <div className="flex items-center justify-between text-xs text-slate-800 dark:text-slate-200 font-semibold">
          <span className="flex items-center gap-1 text-[11px]">
            <Volume2 className="w-3.5 h-3.5 text-indigo-600 dark:text-[#65D8FF]" />
            <span>Volumen:</span>
          </span>
          <span className="text-xs font-black text-indigo-700 dark:text-[#65D8FF] font-mono">
            {currentVolumePercent}%
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={currentVolumePercent}
          onChange={handleVolumeSliderChange}
          onInput={handleVolumeSliderChange}
          onTouchStart={() => musicManager.initAudio()}
          className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#175CD3] dark:accent-[#65D8FF]"
          title={`Volumen calibrado: ${currentVolumePercent}%`}
        />

        {/* Quick Presets: 0%, 25%, 50%, 75%, 100% */}
        <div className="grid grid-cols-5 gap-1 pt-0.5 text-[10px] font-bold">
          {[0, 25, 50, 75, 100].map((preset) => (
            <button
              key={preset}
              onClick={() => handlePresetVolume(preset)}
              className={`py-1.5 rounded-md text-center transition-colors cursor-pointer min-h-[30px] flex items-center justify-center ${
                currentVolumePercent === preset
                  ? 'bg-indigo-600 dark:bg-[#65D8FF] text-white dark:text-slate-950 font-black shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {preset}%
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className={`transition-all duration-300 ${className}`}>
      
      {/* ================= 1. EXPANDED LIQUID GLASS PANEL ================= */}
      {isExpanded && (
        <>
          {/* Universal backdrop to dismiss by tapping anywhere outside */}
          <div 
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-2xs animate-fadeIn"
            onClick={() => setIsExpanded(false)}
          />

          {/* A. Mobile Bottom Sheet Modal (< sm) */}
          <div 
            role="dialog"
            aria-label="Panel de música NEXORA (Móvil)"
            className="fixed inset-x-0 bottom-0 z-50 sm:hidden max-h-[85vh] rounded-t-3xl border-t border-x border-slate-200 dark:border-[#65D8FF]/30 bg-white/98 dark:bg-[#10152B]/98 p-4 pb-8 space-y-3 shadow-2xl safe-area-pb animate-slideUp flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
          >
            {renderPlayerContent(true)}
          </div>

          {/* B. Desktop / Tablet Floating Panel (>= sm) */}
          <div 
            role="dialog"
            aria-label="Panel de música NEXORA (Escritorio)"
            className="hidden sm:flex absolute bottom-full mb-3 right-0 w-96 max-h-[75vh] flex-col liquid-glass-card rounded-3xl p-4 shadow-2xl space-y-3 z-50 text-slate-900 dark:text-slate-100 border border-slate-200/90 dark:border-[#65D8FF]/30 backdrop-blur-2xl bg-white dark:bg-[#10152B]/95 animate-slideUp overflow-hidden"
          >
            {renderPlayerContent(false)}
          </div>
        </>
      )}

      {/* ================= 2. COMPACT FLOATING DOCK OR MINIMIZED ORB ================= */}
      {isMinimized ? (
        /* Discreet round button when user minimizes to clear viewport */
        <button
          onClick={() => setIsMinimized(false)}
          className="w-11 h-11 rounded-full bg-white dark:bg-[#10152B] text-slate-900 dark:text-white flex items-center justify-center shadow-xl border border-slate-300 dark:border-[#65D8FF]/50 cursor-pointer hover:scale-105 active:scale-95 transition-all animate-popIn"
          title="Restaurar barra musical NEXORA"
          aria-label="Restaurar barra musical"
        >
          <div className="relative">
            <Music className={`w-5 h-5 ${playerState.isPlaying ? 'animate-pulse text-indigo-600 dark:text-[#65D8FF]' : 'text-slate-600 dark:text-slate-300'}`} />
            {playerState.isPlaying && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            )}
          </div>
        </button>
      ) : (
        /* Standard minimal dock pill */
        <div 
          className="liquid-glass border border-slate-200/90 dark:border-[#65D8FF]/25 shadow-xl dark:shadow-2xl rounded-2xl p-1.5 sm:px-3 sm:py-2 text-slate-900 dark:text-slate-100 flex items-center gap-1.5 sm:gap-2.5 transition-colors backdrop-blur-xl bg-white/95 dark:bg-[#10152B]/95"
          style={{ maxWidth: 'min(360px, calc(100vw - 24px))' }}
        >
          {/* Track Thumbnail Icon & Title */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-left cursor-pointer hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-[#65D8FF] rounded-xl p-0.5 min-w-0"
            title={isExpanded ? 'Contraer reproductor' : 'Expandir catálogo musical NEXORA (21 pistas)'}
          >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
              playerState.isPlaying 
                ? 'bg-gradient-to-tr from-[#175CD3] via-[#A994FF] to-[#65D8FF] text-white shadow-md shadow-indigo-500/20 scale-105' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
            }`}>
              <Music className={`w-4 h-4 ${playerState.isPlaying ? 'animate-pulse text-white' : ''}`} />
            </div>

            <div className="hidden xs:block max-w-[100px] sm:max-w-[140px] truncate">
              <span className="text-[11px] font-black block truncate text-slate-900 dark:text-white leading-tight">
                {currentTrack.title}
              </span>
              <span className="text-[9px] text-indigo-600 dark:text-[#65D8FF] block truncate font-semibold">
                {playerState.isPlaying ? (currentTrack.mood || currentTrack.genre) : 'Radio en pausa'}
              </span>
            </div>
          </button>

          {/* Dynamic Visualizer Bars */}
          {playerState.isPlaying && (
            <div className="hidden sm:flex items-end gap-0.5 h-3 px-0.5 shrink-0" title="Web Audio en reproducción">
              <span className="w-0.5 h-full bg-[#175CD3] dark:bg-[#65D8FF] rounded-full sound-bar-1" />
              <span className="w-0.5 h-2/3 bg-[#7c3aed] dark:bg-[#A994FF] rounded-full sound-bar-2" />
              <span className="w-0.5 h-5/6 bg-[#db2777] dark:bg-[#FF78C8] rounded-full sound-bar-3" />
            </div>
          )}

          {/* Play / Pause Toggle Button */}
          <button
            onClick={() => musicManager.togglePlay()}
            className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#10152B] to-[#175CD3] dark:from-[#65D8FF] dark:to-[#A994FF] text-white dark:text-slate-950 flex items-center justify-center hover:opacity-95 transition-transform active:scale-95 cursor-pointer shadow-sm shrink-0 min-w-[32px] min-h-[32px]"
            title={playerState.isPlaying ? 'Pausar música' : 'Reproducir música'}
            aria-label={playerState.isPlaying ? 'Pausar música' : 'Reproducir música'}
          >
            {playerState.isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            )}
          </button>

          {/* Next Track Button */}
          <button
            onClick={() => musicManager.nextTrack()}
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer active:scale-90 shrink-0 min-w-[32px] min-h-[32px] flex items-center justify-center"
            title="Siguiente pista"
            aria-label="Siguiente pista musical"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>

          {/* Expand / Minimize Flyout Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer shrink-0 min-w-[32px] min-h-[32px] flex items-center justify-center"
            title={isExpanded ? 'Contraer reproductor' : 'Expandir catálogo de 21 pistas y volumen'}
            aria-label="Expandir o contraer reproductor"
          >
            {isExpanded ? <ChevronDown className="w-4 h-4 text-indigo-600 dark:text-[#65D8FF]" /> : <ChevronUp className="w-4 h-4" />}
          </button>

          {/* Minimize into floating circle button */}
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer shrink-0 min-w-[32px] min-h-[32px] flex items-center justify-center"
            title="Minimizar a botón flotante compacto"
            aria-label="Minimizar a botón flotante"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

    </div>
  );
};
