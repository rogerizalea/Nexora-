import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Music, 
  ChevronUp, 
  ChevronDown, 
  Radio, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';
import { musicManager, AVAILABLE_TRACKS, MusicPlayerState } from '../utils/musicManager';

interface GlobalMusicPlayerProps {
  className?: string;
}

export const GlobalMusicPlayer: React.FC<GlobalMusicPlayerProps> = ({ className = '' }) => {
  const [playerState, setPlayerState] = useState<MusicPlayerState>(musicManager.getState());
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = musicManager.subscribe((state) => {
      setPlayerState(state);
    });
    return unsubscribe;
  }, []);

  const currentTrack = musicManager.getCurrentTrack();

  return (
    <div className={`transition-all duration-300 z-40 ${className}`}>
      {/* Collapsed / Floating Pill Bar */}
      <div className="bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-800 dark:border-slate-700/60 shadow-xl rounded-2xl p-2 sm:px-3 sm:py-2 text-white flex items-center gap-2.5 sm:gap-3">
        {/* Track Icon & Animated Visualizer */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-left cursor-pointer hover:opacity-90 transition-opacity"
          title="Ver opciones de música"
        >
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
            playerState.isPlaying 
              ? 'bg-gradient-to-tr from-[#65D8FF] to-[#A994FF] text-slate-950 shadow-xs shadow-[#65D8FF]/30' 
              : 'bg-slate-800 text-slate-400'
          }`}>
            <Music className={`w-4 h-4 ${playerState.isPlaying ? 'animate-pulse' : ''}`} />
          </div>

          <div className="hidden xs:block max-w-[110px] sm:max-w-[140px] truncate">
            <span className="text-[11px] font-bold block truncate text-slate-200">
              {currentTrack.title}
            </span>
            <span className="text-[9px] text-[#65D8FF] block truncate">
              {playerState.isPlaying ? 'Reproduciendo lo-fi' : 'Música en pausa'}
            </span>
          </div>
        </button>

        {/* Visualizer bars when playing */}
        {playerState.isPlaying && (
          <div className="hidden sm:flex items-end gap-0.5 h-3.5 px-1">
            <span className="w-0.5 h-full bg-[#65D8FF] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-0.5 h-2/3 bg-[#A994FF] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-0.5 h-5/6 bg-[#FF78C8] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}

        {/* Play / Pause Toggle Button */}
        <button
          onClick={() => musicManager.togglePlay()}
          className="w-8 h-8 rounded-xl bg-white text-slate-950 flex items-center justify-center hover:bg-slate-100 transition-transform active:scale-95 cursor-pointer shadow-sm"
          title={playerState.isPlaying ? 'Pausar música' : 'Reproducir música de estudio'}
        >
          {playerState.isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-slate-950" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-slate-950 ml-0.5" />
          )}
        </button>

        {/* Mute Button */}
        <button
          onClick={() => musicManager.toggleMute()}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          title={playerState.isMuted ? 'Activar sonido' : 'Silenciar música'}
        >
          {playerState.isMuted || playerState.volume === 0 ? (
            <VolumeX className="w-4 h-4 text-rose-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-slate-300" />
          )}
        </button>

        {/* Volume Slider (Desktop/Tablet) */}
        <div className="hidden md:flex items-center gap-1.5 w-16">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={playerState.isMuted ? 0 : playerState.volume}
            onChange={(e) => musicManager.setVolume(parseFloat(e.target.value))}
            className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#65D8FF]"
            title={`Volumen: ${Math.round(playerState.volume * 100)}%`}
          />
        </div>

        {/* Expand / Minimize Selector */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
          title={isExpanded ? 'Ocultar pistas' : 'Ver pistas de estudio'}
        >
          {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Expanded Track Selection Flyout */}
      {isExpanded && (
        <div className="mt-2 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-2xl text-white space-y-2.5 max-w-xs animate-slideUp">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-[#65D8FF]">
              <Sparkles className="w-3 h-3" />
              <span>Pistas de Estudio NEXORA</span>
            </span>
            <span className="text-[10px] text-slate-500 font-normal">Sin copyright</span>
          </div>

          {/* Track List */}
          <div className="space-y-1">
            {AVAILABLE_TRACKS.map((track) => {
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
                  className={`w-full text-left p-2 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-[#65D8FF]/40 text-white font-bold'
                      : 'hover:bg-slate-800/80 text-slate-300'
                  }`}
                >
                  <div className="truncate mr-2">
                    <div className="flex items-center gap-1.5">
                      {isSelected && playerState.isPlaying && (
                        <Radio className="w-3 h-3 text-[#65D8FF] animate-pulse" />
                      )}
                      <span className="truncate">{track.title}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-normal block truncate">
                      {track.genre}
                    </span>
                  </div>
                  {isSelected && (
                    <span className="text-[10px] text-[#65D8FF] font-bold shrink-0">
                      {playerState.isPlaying ? 'Activa' : 'Elegida'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Volume Control in Expanded Mode for Mobile */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span className="text-[11px] text-slate-400">Volumen: {Math.round((playerState.isMuted ? 0 : playerState.volume) * 100)}%</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={playerState.isMuted ? 0 : playerState.volume}
              onChange={(e) => musicManager.setVolume(parseFloat(e.target.value))}
              className="w-24 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#65D8FF]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
