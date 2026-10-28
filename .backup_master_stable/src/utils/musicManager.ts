export interface MusicTrack {
  id: string;
  title: string;
  subtitle: string;
  genre: string;
  bpm?: number;
}

export const AVAILABLE_TRACKS: MusicTrack[] = [
  {
    id: 'lofi_nexora',
    title: 'Lofi Armónico Nexora',
    subtitle: 'Acordes suaves en escala menor para estudio profundo',
    genre: 'Lo-Fi Chillhop',
    bpm: 72,
  },
  {
    id: 'alpha_waves',
    title: 'Ondas Alfa de Enfoque (10 Hz)',
    subtitle: 'Frecuencia binaural para absorción y memoria activa',
    genre: 'Ambient Cognitivo',
  },
  {
    id: 'cosmic_space',
    title: 'Atmósfera Cósmica',
    subtitle: 'Texturas etéreas espaciales para calma y claridad mental',
    genre: 'Space Ambient',
  },
];

const STORAGE_KEY = 'nexora_music_settings_v1';

export interface MusicPlayerState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number; // 0 to 1
  currentTrackId: string;
}

type MusicStateListener = (state: MusicPlayerState) => void;

class MusicManager {
  private audioCtx: AudioContext | null = null;
  private isPlaying = false;
  private isMuted = false;
  private volume = 0.35;
  private currentTrackId = 'lofi_nexora';
  private masterGain: GainNode | null = null;
  private intervalId: any = null;
  private activeNodes: { stop: () => void }[] = [];
  private listeners: Set<MusicStateListener> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (typeof parsed.volume === 'number') this.volume = Math.max(0, Math.min(1, parsed.volume));
          if (typeof parsed.isMuted === 'boolean') this.isMuted = parsed.isMuted;
          if (parsed.currentTrackId && AVAILABLE_TRACKS.some(t => t.id === parsed.currentTrackId)) {
            this.currentTrackId = parsed.currentTrackId;
          }
        }
      } catch {}
    }
  }

  public getState(): MusicPlayerState {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      volume: this.volume,
      currentTrackId: this.currentTrackId,
    };
  }

  public getCurrentTrack(): MusicTrack {
    return AVAILABLE_TRACKS.find(t => t.id === this.currentTrackId) || AVAILABLE_TRACKS[0];
  }

  public subscribe(listener: MusicStateListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach(l => {
      try { l(state); } catch {}
    });
    this.persistState();
  }

  private persistState() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        volume: this.volume,
        isMuted: this.isMuted,
        currentTrackId: this.currentTrackId,
      }));
    } catch {}
  }

  private initAudio() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    if (!this.masterGain && this.audioCtx) {
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.audioCtx.currentTime);
      this.masterGain.connect(this.audioCtx.destination);
    }
  }

  public async play() {
    try {
      this.initAudio();
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        await this.audioCtx.resume();
      }
      this.stopCurrentEngine();
      this.isPlaying = true;
      this.startSynthesis();
      this.notify();
    } catch (e) {
      console.warn('Audio play error:', e);
      this.isPlaying = false;
      this.notify();
    }
  }

  public pause() {
    this.stopCurrentEngine();
    this.isPlaying = false;
    this.notify();
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setTargetAtTime(
        this.isMuted ? 0 : this.volume,
        this.audioCtx.currentTime,
        0.05
      );
    }
    this.notify();
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setTargetAtTime(
        this.isMuted ? 0 : this.volume,
        this.audioCtx.currentTime,
        0.05
      );
    }
    this.notify();
  }

  public setTrack(trackId: string) {
    if (this.currentTrackId === trackId) return;
    this.currentTrackId = trackId;
    if (this.isPlaying) {
      this.stopCurrentEngine();
      this.startSynthesis();
    }
    this.notify();
  }

  private stopCurrentEngine() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.activeNodes.forEach(node => {
      try { node.stop(); } catch {}
    });
    this.activeNodes = [];
  }

  private startSynthesis() {
    if (!this.audioCtx || !this.masterGain) return;

    if (this.currentTrackId === 'alpha_waves') {
      this.startAlphaWaves();
    } else if (this.currentTrackId === 'cosmic_space') {
      this.startCosmicSpace();
    } else {
      this.startLofiNexora();
    }
  }

  // Engine 1: Lo-Fi Chords Arpeggiation
  private startLofiNexora() {
    if (!this.audioCtx || !this.masterGain) return;
    const ctx = this.audioCtx;
    const master = this.masterGain;

    // Filter to give warm tape-warmth lo-fi quality
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650, ctx.currentTime);
    filter.Q.setValueAtTime(1.5, ctx.currentTime);
    filter.connect(master);

    // Warm chord progression (Dm9 -> G13 -> Cmaj9 -> Am9)
    const chordProgression = [
      [146.83, 220.00, 261.63, 329.63, 392.00], // D3, A3, C4, E4, G4
      [196.00, 246.94, 293.66, 329.63, 440.00], // G3, B3, D4, E4, A4
      [130.81, 196.00, 246.94, 261.63, 329.63], // C3, G3, B3, C4, E4
      [110.00, 164.81, 220.00, 261.63, 329.63], // A2, E3, A3, C4, E4
    ];

    let chordIndex = 0;

    const playChord = () => {
      if (!this.isPlaying || ctx.state !== 'running') return;
      const chord = chordProgression[chordIndex % chordProgression.length];
      chordIndex++;

      chord.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        // Soft electric piano / warm mellow triangle + sine mix
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);

        const startTime = ctx.currentTime + i * 0.08;
        const duration = 2.8;

        noteGain.gain.setValueAtTime(0.0001, startTime);
        noteGain.gain.exponentialRampToValueAtTime(0.06 / (i + 1), startTime + 0.15);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(noteGain);
        noteGain.connect(filter);

        osc.start(startTime);
        osc.stop(startTime + duration + 0.1);

        this.activeNodes.push({
          stop: () => {
            try { osc.stop(); } catch {}
          }
        });
      });
    };

    playChord();
    this.intervalId = setInterval(playChord, 3200);
  }

  // Engine 2: Alpha Brainwaves (10 Hz Binaural Focus)
  private startAlphaWaves() {
    if (!this.audioCtx || !this.masterGain) return;
    const ctx = this.audioCtx;
    const master = this.masterGain;

    const baseFreq = 160; // 160 Hz warm carrier
    const beatFreq = 10;  // 10 Hz Alpha wave frequency for active alertness & memory

    const oscLeft = ctx.createOscillator();
    const oscRight = ctx.createOscillator();
    const gainLeft = ctx.createGain();
    const gainRight = ctx.createGain();

    oscLeft.type = 'sine';
    oscLeft.frequency.setValueAtTime(baseFreq, ctx.currentTime);

    oscRight.type = 'sine';
    oscRight.frequency.setValueAtTime(baseFreq + beatFreq, ctx.currentTime);

    gainLeft.gain.setValueAtTime(0.08, ctx.currentTime);
    gainRight.gain.setValueAtTime(0.08, ctx.currentTime);

    // Pan left and right if stereo panner is available
    if (ctx.createStereoPanner) {
      const panL = ctx.createStereoPanner();
      const panR = ctx.createStereoPanner();
      panL.pan.setValueAtTime(-0.8, ctx.currentTime);
      panR.pan.setValueAtTime(0.8, ctx.currentTime);

      oscLeft.connect(gainLeft);
      gainLeft.connect(panL);
      panL.connect(master);

      oscRight.connect(gainRight);
      gainRight.connect(panR);
      panR.connect(master);
    } else {
      oscLeft.connect(gainLeft);
      gainLeft.connect(master);
      oscRight.connect(gainRight);
      gainRight.connect(master);
    }

    oscLeft.start();
    oscRight.start();

    this.activeNodes.push({
      stop: () => {
        try { oscLeft.stop(); } catch {}
        try { oscRight.stop(); } catch {}
      }
    });
  }

  // Engine 3: Cosmic Space Ambient Drone
  private startCosmicSpace() {
    if (!this.audioCtx || !this.masterGain) return;
    const ctx = this.audioCtx;
    const master = this.masterGain;

    const frequencies = [65.41, 130.81, 196.00, 293.66, 392.00]; // C2, C3, G3, D4, G4

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Subtle slow frequency shimmer
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.1 + idx * 0.05, ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.6, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      gain.gain.setValueAtTime(0.035 / (idx + 1), ctx.currentTime);

      osc.connect(gain);
      gain.connect(master);

      lfo.start();
      osc.start();

      this.activeNodes.push({
        stop: () => {
          try { lfo.stop(); } catch {}
          try { osc.stop(); } catch {}
        }
      });
    });
  }
}

export const musicManager = new MusicManager();
