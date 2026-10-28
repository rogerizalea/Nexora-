import { setSharedAudioContext } from './sound';

export type MusicCategory = 'lofi' | 'ncs' | 'cosmic';

export interface MusicTrack {
  id: string;
  category: MusicCategory;
  categoryName: string;
  title: string;
  subtitle: string;
  genre: string;
  bpm?: number;
  keySignature?: string;
  mood?: string;
}

export const AVAILABLE_TRACKS: MusicTrack[] = [
  // ================= 1. CATEGORÍA LO-FI (10 LISTAS DISTINTAS) =================
  {
    id: 'lofi_study',
    category: 'lofi',
    categoryName: 'Lo-Fi',
    title: 'Lo-fi para estudiar',
    subtitle: 'Acordes suaves de Rhodes y ritmo cálido de baja fidelidad',
    genre: 'Lo-Fi Study Beats',
    bpm: 72,
    keySignature: 'Dm9 / G13',
    mood: 'Concentración profunda'
  },
  {
    id: 'lofi_chill_focus',
    category: 'lofi',
    categoryName: 'Lo-Fi',
    title: 'Lo-fi chill para concentrarse',
    subtitle: 'Melodías lentas y pausadas para mantener el flujo de trabajo',
    genre: 'Chillhop Focus',
    bpm: 68,
    keySignature: 'Cmaj7 / Em7',
    mood: 'Flujo continuo'
  },
  {
    id: 'lofi_relax_rest',
    category: 'lofi',
    categoryName: 'Lo-Fi',
    title: 'Lo-fi relajante para descansar',
    subtitle: 'Armonías de terciopelo para pausas reflexivas entre sesiones',
    genre: 'Lo-Fi Mellow',
    bpm: 62,
    keySignature: 'Fmaj9 / Bbmaj7',
    mood: 'Pausa serena'
  },
  {
    id: 'lofi_rain',
    category: 'lofi',
    categoryName: 'Lo-Fi',
    title: 'Lo-fi con lluvia',
    subtitle: 'Textura acústica de gotas de lluvia con acordes nostálgicos',
    genre: 'Rainy Lo-Fi',
    bpm: 66,
    keySignature: 'Am7 / Dm7',
    mood: 'Refugio acústico'
  },
  {
    id: 'lofi_nature',
    category: 'lofi',
    categoryName: 'Lo-Fi',
    title: 'Lo-fi con sonidos de naturaleza',
    subtitle: 'Resonancias orgánicas, brisa y bajo suave campestre',
    genre: 'Organic Nature Lo-Fi',
    bpm: 70,
    keySignature: 'Gmaj7 / Cmaj7',
    mood: 'Claridad mental'
  },
  {
    id: 'lofi_night',
    category: 'lofi',
    categoryName: 'Lo-Fi',
    title: 'Lo-fi nocturno',
    subtitle: 'Sesión nocturna con bajo cálido y arpegios aterciopelados',
    genre: 'Midnight Lo-Fi',
    bpm: 64,
    keySignature: 'Ebm9 / Ab13',
    mood: 'Estudio nocturno'
  },
  {
    id: 'lofi_piano',
    category: 'lofi',
    categoryName: 'Lo-Fi',
    title: 'Lo-fi con piano suave',
    subtitle: 'Notas acústicas puras con envolvente de ataque suave',
    genre: 'Piano Lo-Fi',
    bpm: 65,
    keySignature: 'Dbmaj7 / Bbm7',
    mood: 'Introspección'
  },
  {
    id: 'lofi_smooth_jazz',
    category: 'lofi',
    categoryName: 'Lo-Fi',
    title: 'Lo-fi con jazz tranquilo',
    subtitle: 'Acordes de novena, progresiones II-V-I y cadencia relajada',
    genre: 'Jazzhop Smooth',
    bpm: 76,
    keySignature: 'Dm9 - G9 - Cmaj9',
    mood: 'Café de estudio'
  },
  {
    id: 'lofi_ambient',
    category: 'lofi',
    categoryName: 'Lo-Fi',
    title: 'Lo-fi ambiental',
    subtitle: 'Capas armónicas envolventes con modulación analógica',
    genre: 'Ambient Lo-Fi',
    bpm: 58,
    keySignature: 'Ebmaj9 / Cm7',
    mood: 'Espacio inmersivo'
  },
  {
    id: 'lofi_cyber_space',
    category: 'lofi',
    categoryName: 'Lo-Fi',
    title: 'Lo-fi espacial y futurista',
    subtitle: 'Sintetizadores retrofuturistas inspirados en la nave Nexora',
    genre: 'Cyber Lo-Fi 2026',
    bpm: 74,
    keySignature: 'Gm9 / Ebmaj7',
    mood: 'Futurismo tranquilo'
  },

  // ================= 2. CATEGORÍA NCS Y ELECTRÓNICA (5 LISTAS DISTINTAS) =================
  {
    id: 'ncs_melodic_electro',
    category: 'ncs',
    categoryName: 'NCS Energía',
    title: 'Electrónica melódica',
    subtitle: 'Arpegios vibrantes con filtro dinámico para impulso cognitivo',
    genre: 'Melodic Electro',
    bpm: 120,
    keySignature: 'A Minor / C Major',
    mood: 'Motivación alta'
  },
  {
    id: 'ncs_future_bass',
    category: 'ncs',
    categoryName: 'NCS Energía',
    title: 'Future bass para estudio',
    subtitle: 'Modulaciones con diente de sierra pulidas y acordes densos',
    genre: 'Future Bass Focus',
    bpm: 128,
    keySignature: 'F#m / Dmaj7',
    mood: 'Superación académica'
  },
  {
    id: 'ncs_progressive_house',
    category: 'ncs',
    categoryName: 'NCS Energía',
    title: 'Progressive house instrumental',
    subtitle: 'Patrón secuenciado hipnótico y dinámico para retos largos',
    genre: 'Progressive House',
    bpm: 124,
    keySignature: 'B Minor / G Major',
    mood: 'Resistencia mental'
  },
  {
    id: 'ncs_ambient_groove',
    category: 'ncs',
    categoryName: 'NCS Energía',
    title: 'Electrónica ambiental rítmica',
    subtitle: 'Pulsos electrónicos limpios y sintetizador en contrapunto',
    genre: 'Ambient Groove',
    bpm: 112,
    keySignature: 'Em7 / Am7',
    mood: 'Constancia activa'
  },
  {
    id: 'ncs_instrumental_motivation',
    category: 'ncs',
    categoryName: 'NCS Energía',
    title: 'Electrónica motivacional',
    subtitle: 'Construcción progresiva que eleva la energía al resolver problemas',
    genre: 'Motivational EDM',
    bpm: 118,
    keySignature: 'D Major / Bm',
    mood: 'Triunfo y logro'
  },

  // ================= 3. CATEGORÍA CÓSMICA Y ESPACIAL (6 LISTAS DISTINTAS) =================
  {
    id: 'cosmic_nebular',
    category: 'cosmic',
    categoryName: 'Cósmica',
    title: 'Ambient espacial nebulosa',
    subtitle: 'Frecuencias celestiales con filtro de barrido etéreo',
    genre: 'Deep Space Ambient',
    bpm: 50,
    keySignature: 'E Fifth Drone',
    mood: 'Vastedad cósmica'
  },
  {
    id: 'cosmic_atmospheric',
    category: 'cosmic',
    categoryName: 'Cósmica',
    title: 'Sintetizadores atmosféricos',
    subtitle: 'Capas envolventes con modulación de onda y resonancia pura',
    genre: 'Atmospheric Synth',
    bpm: 52,
    keySignature: 'A Lydian Mode',
    mood: 'Expansión de mente'
  },
  {
    id: 'cosmic_galactic',
    category: 'cosmic',
    categoryName: 'Cósmica',
    title: 'Paisajes sonoros galácticos',
    subtitle: 'Ecos interestelares y destellos estocásticos de gravedad cero',
    genre: 'Galactic Soundscapes',
    bpm: 46,
    keySignature: 'D Dorian Mode',
    mood: 'Inmersión interestelar'
  },
  {
    id: 'cosmic_alpha_10hz',
    category: 'cosmic',
    categoryName: 'Cósmica',
    title: 'Ondas Alfa binaurales (10 Hz)',
    subtitle: 'Frecuencias cerebrales izquierda/derecha para máxima retención',
    genre: 'Binaural Alpha Waves',
    keySignature: '180 Hz / 190 Hz (Δ 10Hz)',
    mood: 'Neuro-aprendizaje'
  },
  {
    id: 'cosmic_deep_void',
    category: 'cosmic',
    categoryName: 'Cósmica',
    title: 'Vacío estelar profundo',
    subtitle: 'Armónicos de muy baja frecuencia para eliminar el estrés',
    genre: 'Cosmic Void Drone',
    bpm: 42,
    keySignature: 'Sub C2 (65.4 Hz)',
    mood: 'Calma zen total'
  },
  {
    id: 'cosmic_relax_ambient',
    category: 'cosmic',
    categoryName: 'Cósmica',
    title: 'Música espacial relajante',
    subtitle: 'Pads cristalinos flotantes con pulso de cristal líquido',
    genre: 'Ethereal Liquid Ambient',
    bpm: 56,
    keySignature: 'G Major / Em9',
    mood: 'Paz cuántica'
  },
];

const STORAGE_KEY = 'nexora_music_settings_v3';

export interface MusicPlayerState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number; // 0 to 1
  volumePercent: number; // 0 to 100
  currentTrackId: string;
  selectedCategory: MusicCategory | 'all';
  isShuffle: boolean;
  isLoading: boolean;
  hasAudioError: boolean;
  errorMessage?: string;
}

type MusicStateListener = (state: MusicPlayerState) => void;

class MusicManager {
  private audioCtx: AudioContext | null = null;
  private isPlaying = false;
  private isMuted = false;
  private volume = 0.65; // Default 65% for clear, rich presence
  private currentTrackId = 'lofi_study';
  private selectedCategory: MusicCategory | 'all' = 'all';
  private isShuffle = false;
  private isLoading = false;
  private hasAudioError = false;
  private errorMessage = '';

  private previousVolume = 0.65;
  private masterGain: GainNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  private intervalIds: any[] = [];
  private activeNodes: { stop: () => void }[] = [];
  private listeners: Set<MusicStateListener> = new Set();
  private recentTrackHistory: string[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('nexora_music_settings_v2');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (typeof parsed.volume === 'number' && !isNaN(parsed.volume)) {
            this.volume = Math.max(0, Math.min(1, parsed.volume));
            if (this.volume > 0) this.previousVolume = this.volume;
          }
          if (typeof parsed.isMuted === 'boolean') this.isMuted = parsed.isMuted;
          if (typeof parsed.isShuffle === 'boolean') this.isShuffle = parsed.isShuffle;
          if (parsed.selectedCategory && ['all', 'lofi', 'ncs', 'cosmic'].includes(parsed.selectedCategory)) {
            this.selectedCategory = parsed.selectedCategory;
          }
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
      volumePercent: Math.round(this.volume * 100),
      currentTrackId: this.currentTrackId,
      selectedCategory: this.selectedCategory,
      isShuffle: this.isShuffle,
      isLoading: this.isLoading,
      hasAudioError: this.hasAudioError,
      errorMessage: this.errorMessage,
    };
  }

  public getCurrentTrack(): MusicTrack {
    return AVAILABLE_TRACKS.find(t => t.id === this.currentTrackId) || AVAILABLE_TRACKS[0];
  }

  public getTracksForCategory(category: MusicCategory | 'all' = this.selectedCategory): MusicTrack[] {
    if (category === 'all') return AVAILABLE_TRACKS;
    return AVAILABLE_TRACKS.filter(t => t.category === category);
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
        selectedCategory: this.selectedCategory,
        isShuffle: this.isShuffle,
      }));
    } catch {}
  }

  public initAudio() {
    if (!this.audioCtx || this.audioCtx.state === 'closed') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
        setSharedAudioContext(this.audioCtx);
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }

    if (this.audioCtx && (!this.masterGain || !this.compressor)) {
      // 1. Dynamics Compressor acts as a transparent brickwall limiter & loudness booster
      this.compressor = this.audioCtx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-18, this.audioCtx.currentTime);
      this.compressor.knee.setValueAtTime(12, this.audioCtx.currentTime);
      this.compressor.ratio.setValueAtTime(6, this.audioCtx.currentTime);
      this.compressor.attack.setValueAtTime(0.005, this.audioCtx.currentTime);
      this.compressor.release.setValueAtTime(0.2, this.audioCtx.currentTime);
      this.compressor.connect(this.audioCtx.destination);

      // 2. Master Gain Node connects directly to Compressor
      this.masterGain = this.audioCtx.createGain();
      const initialGain = this.isMuted ? 0 : this.volume;
      this.masterGain.gain.setValueAtTime(initialGain, this.audioCtx.currentTime);
      this.masterGain.connect(this.compressor);
    }
  }

  public async play() {
    try {
      this.isLoading = true;
      this.hasAudioError = false;
      this.errorMessage = '';
      this.notify();

      this.initAudio();

      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        await this.audioCtx.resume().catch(() => {});
      }

      this.stopCurrentEngine();
      this.isPlaying = true;
      this.isLoading = false;

      // Start differentiated procedural audio synthesis
      this.startTrackSynthesis();
      this.notify();
    } catch (e: any) {
      console.warn('Radio audio play handled safely:', e);
      this.isPlaying = false;
      this.isLoading = false;
      this.hasAudioError = true;
      this.errorMessage = e?.message || 'Error al iniciar audio';
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

  /**
   * Sets volume with calibrated 0 to 1 range (0% to 100%).
   * Range 0 completely zeroes the master gain and marks as muted.
   * Range > 0 un-mutes and provides full, rich output through dynamics compressor.
   */
  public setVolume(vol: number) {
    const clamped = Math.max(0, Math.min(1, vol));
    this.volume = clamped;
    
    if (clamped > 0) {
      this.isMuted = false;
      this.previousVolume = clamped;
    } else {
      this.isMuted = true;
    }

    this.initAudio();

    if (this.masterGain && this.audioCtx) {
      try {
        const targetVal = this.isMuted ? 0 : this.volume;
        this.masterGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.audioCtx.currentTime);
        this.masterGain.gain.linearRampToValueAtTime(targetVal, this.audioCtx.currentTime + 0.03);
      } catch {}
    }
    this.notify();
  }

  public toggleMute() {
    this.initAudio();
    if (!this.isMuted) {
      // Muting: store non-zero volume if present
      if (this.volume > 0) {
        this.previousVolume = this.volume;
      }
      this.isMuted = true;
    } else {
      // Unmuting: restore previous non-zero volume
      this.isMuted = false;
      if (this.volume === 0) {
        this.volume = this.previousVolume > 0 ? this.previousVolume : 0.65;
      }
    }

    if (this.masterGain && this.audioCtx) {
      try {
        const targetVal = this.isMuted ? 0 : this.volume;
        this.masterGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.audioCtx.currentTime);
        this.masterGain.gain.linearRampToValueAtTime(targetVal, this.audioCtx.currentTime + 0.03);
      } catch {}
    }
    this.notify();
  }

  public setCategory(cat: MusicCategory | 'all') {
    this.selectedCategory = cat;
    const tracksInCat = this.getTracksForCategory(cat);
    if (!tracksInCat.some(t => t.id === this.currentTrackId) && tracksInCat.length > 0) {
      this.setTrack(tracksInCat[0].id);
    } else {
      this.notify();
    }
  }

  public toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    this.notify();
  }

  public nextTrack() {
    const list = this.getTracksForCategory();
    if (list.length === 0) return;

    if (this.isShuffle) {
      // Pick random track, strictly avoiding immediate repetition when list > 1
      const pool = list.filter(t => t.id !== this.currentTrackId && !this.recentTrackHistory.includes(t.id));
      const candidates = pool.length > 0 ? pool : list.filter(t => t.id !== this.currentTrackId);
      const chosen = candidates.length > 0 
        ? candidates[Math.floor(Math.random() * candidates.length)]
        : list[0];
      
      this.setTrack(chosen.id);
      return;
    }

    const currentIndex = list.findIndex(t => t.id === this.currentTrackId);
    const nextIndex = (currentIndex + 1) % list.length;
    this.setTrack(list[nextIndex].id);
  }

  public prevTrack() {
    const list = this.getTracksForCategory();
    if (list.length === 0) return;

    const currentIndex = list.findIndex(t => t.id === this.currentTrackId);
    const prevIndex = (currentIndex - 1 + list.length) % list.length;
    this.setTrack(list[prevIndex].id);
  }

  public setTrack(trackId: string) {
    if (this.currentTrackId === trackId && this.isPlaying) return;
    
    // Add to recent history (keep max 4)
    this.recentTrackHistory.push(this.currentTrackId);
    if (this.recentTrackHistory.length > 4) {
      this.recentTrackHistory.shift();
    }

    this.currentTrackId = trackId;
    if (this.isPlaying) {
      this.stopCurrentEngine();
      this.startTrackSynthesis();
    }
    this.notify();
  }

  private stopCurrentEngine() {
    this.intervalIds.forEach(id => {
      try { clearInterval(id); } catch {}
    });
    this.intervalIds = [];

    this.activeNodes.forEach(node => {
      try { node.stop(); } catch {}
    });
    this.activeNodes = [];
  }

  // =================================================================================
  // PROCEDURAL AUDIO SYNTHESIS ENGINES (21 REAL, DIFFERENTIATED AUDIO TRACKS)
  // =================================================================================

  private startTrackSynthesis() {
    if (!this.audioCtx || !this.masterGain) return;
    const ctx = this.audioCtx;
    const master = this.masterGain;

    const track = this.getCurrentTrack();

    try {
      switch (track.id) {
        // --- LO-FI TRACKS ---
        case 'lofi_study':
          this.buildChordsLoop(ctx, master, [
            [146.83, 220.00, 261.63, 329.63, 392.00], // Dm9
            [196.00, 246.94, 293.66, 349.23, 440.00], // G13
            [130.81, 196.00, 246.94, 261.63, 329.63], // Cmaj9
            [110.00, 164.81, 220.00, 261.63, 329.63]  // Am9
          ], 3200, 680, 'triangle', true, 0.12);
          break;

        case 'lofi_chill_focus':
          this.buildChordsLoop(ctx, master, [
            [130.81, 196.00, 246.94, 329.63], // Cmaj7
            [164.81, 246.94, 293.66, 329.63], // Em7
            [174.61, 220.00, 261.63, 329.63], // Fmaj7
            [196.00, 246.94, 293.66, 392.00]  // G6
          ], 3600, 560, 'sine', false, 0.14);
          break;

        case 'lofi_relax_rest':
          this.buildChordsLoop(ctx, master, [
            [174.61, 220.00, 261.63, 329.63, 392.00], // Fmaj9
            [116.54, 174.61, 220.00, 261.63, 349.23], // Bbmaj7
            [146.83, 220.00, 261.63, 349.23],         // Dm7
            [130.81, 196.00, 261.63, 329.63]          // C/E
          ], 4000, 500, 'sine', false, 0.15);
          break;

        case 'lofi_rain':
          this.buildRainNoiseLayer(ctx, master, 1100, 0.05);
          this.buildChordsLoop(ctx, master, [
            [110.00, 164.81, 220.00, 261.63, 329.63], // Am7
            [146.83, 220.00, 261.63, 349.23],         // Dm7
            [164.81, 246.94, 293.66, 329.63],         // Em7
            [130.81, 196.00, 261.63, 329.63]          // Cmaj7
          ], 3400, 620, 'triangle', true, 0.11);
          break;

        case 'lofi_nature':
          this.buildNatureWindLayer(ctx, master);
          this.buildChordsLoop(ctx, master, [
            [196.00, 246.94, 293.66, 369.99], // Gmaj7
            [130.81, 196.00, 246.94, 329.63], // Cmaj7
            [146.83, 220.00, 293.66, 369.99], // D6
            [164.81, 246.94, 329.63, 392.00]  // Em7
          ], 3300, 750, 'sine', false, 0.13);
          break;

        case 'lofi_night':
          this.buildChordsLoop(ctx, master, [
            [155.56, 233.08, 277.18, 349.23, 415.30], // Ebm9
            [207.65, 261.63, 311.13, 369.99, 466.16], // Ab13
            [138.59, 207.65, 261.63, 311.13, 369.99], // Dbmaj9
            [185.00, 233.08, 277.18, 329.63]          // Gbmaj7
          ], 3700, 540, 'triangle', true, 0.13);
          break;

        case 'lofi_piano':
          this.buildPianoArpLoop(ctx, master, [
            261.63, 329.63, 392.00, 493.88, 523.25, 392.00, 329.63, 261.63,
            220.00, 261.63, 329.63, 440.00, 493.88, 440.00, 329.63, 261.63
          ], 380, 0.14);
          break;

        case 'lofi_smooth_jazz':
          this.buildChordsLoop(ctx, master, [
            [146.83, 220.00, 261.63, 329.63, 392.00], // Dm9
            [196.00, 246.94, 293.66, 349.23, 415.30], // G7(b9)
            [130.81, 196.00, 246.94, 261.63, 329.63], // Cmaj9
            [220.00, 277.18, 329.63, 392.00, 493.88]  // A7(b13)
          ], 3000, 880, 'triangle', true, 0.14);
          break;

        case 'lofi_ambient':
          this.buildChordsLoop(ctx, master, [
            [155.56, 233.08, 311.13, 392.00, 466.16], // Ebmaj9
            [130.81, 196.00, 233.08, 311.13],         // Cm7
            [174.61, 261.63, 349.23, 440.00],         // Fm9
            [116.54, 174.61, 233.08, 293.66]          // Bb7sus4
          ], 4400, 480, 'sine', false, 0.16);
          break;

        case 'lofi_cyber_space':
          this.buildCyberChordsLoop(ctx, master);
          break;

        // --- NCS & ELECTRONIC TRACKS ---
        case 'ncs_melodic_electro':
          this.buildElectroArp(ctx, master, [220.00, 261.63, 329.63, 440.00, 523.25, 659.25, 523.25, 440.00], 250, 'triangle', 1800);
          break;

        case 'ncs_future_bass':
          this.buildFutureBassPulse(ctx, master);
          break;

        case 'ncs_progressive_house':
          this.buildProgressiveHouseLoop(ctx, master);
          break;

        case 'ncs_ambient_groove':
          this.buildElectroArp(ctx, master, [164.81, 196.00, 246.94, 329.63, 392.00, 493.88, 392.00, 246.94], 270, 'sine', 1400);
          break;

        case 'ncs_instrumental_motivation':
          this.buildMotivationalEDM(ctx, master);
          break;

        // --- COSMIC & SPATIAL TRACKS ---
        case 'cosmic_nebular':
          this.buildCosmicDrone(ctx, master, [82.41, 123.47, 164.81, 246.94, 329.63], 350, 0.16);
          break;

        case 'cosmic_atmospheric':
          this.buildAtmosphericSynth(ctx, master);
          break;

        case 'cosmic_galactic':
          this.buildGalacticSoundscape(ctx, master);
          break;

        case 'cosmic_alpha_10hz':
          this.buildBinauralBeat(ctx, master, 180, 10);
          break;

        case 'cosmic_deep_void':
          this.buildCosmicDrone(ctx, master, [65.41, 98.00, 130.81, 196.00], 220, 0.18);
          break;

        case 'cosmic_relax_ambient':
        default:
          this.buildCosmicDrone(ctx, master, [98.00, 146.83, 196.00, 293.66, 392.00], 420, 0.15);
          break;
      }
    } catch (err) {
      console.warn('Track synthesis execution caught error:', err);
    }
  }

  // --- SYNTHESIS HELPER METHODS ---

  private buildChordsLoop(
    ctx: AudioContext,
    master: GainNode,
    progression: number[][],
    intervalMs: number,
    filterFreq: number,
    oscType: OscillatorType,
    hasVinylTick = false,
    chordGainLevel = 0.12
  ) {
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(filterFreq, ctx.currentTime);
    filter.Q.setValueAtTime(1.2, ctx.currentTime);
    filter.connect(master);

    if (hasVinylTick) {
      this.buildVinylCrackle(ctx, master);
    }

    let chordIdx = 0;
    const playChord = () => {
      if (!this.isPlaying || ctx.state !== 'running') return;
      const notes = progression[chordIdx % progression.length];
      chordIdx++;

      notes.forEach((freq, i) => {
        try {
          const osc = ctx.createOscillator();
          const noteGain = ctx.createGain();

          osc.type = i === 0 ? 'sine' : oscType;
          const startTime = ctx.currentTime + i * 0.05;
          const duration = (intervalMs / 1000) * 0.92;

          osc.frequency.setValueAtTime(freq, startTime);
          noteGain.gain.setValueAtTime(0.0001, startTime);
          noteGain.gain.exponentialRampToValueAtTime((chordGainLevel * 0.8) / (i + 1), startTime + 0.15);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

          osc.connect(noteGain);
          noteGain.connect(filter);

          osc.start(startTime);
          osc.stop(startTime + duration + 0.1);

          this.activeNodes.push({
            stop: () => { try { osc.stop(); } catch {} }
          });
        } catch {}
      });
    };

    playChord();
    const id = setInterval(playChord, intervalMs);
    this.intervalIds.push(id);
  }

  private buildRainNoiseLayer(ctx: AudioContext, master: GainNode, cutoffFreq: number, gainLevel: number) {
    try {
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99 * b0 + white * 0.05;
        b1 = 0.95 * b1 + white * 0.1;
        b2 = 0.85 * b2 + white * 0.15;
        output[i] = (b0 + b1 + b2) * gainLevel;
      }
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      const rainFilter = ctx.createBiquadFilter();
      rainFilter.type = 'lowpass';
      rainFilter.frequency.setValueAtTime(cutoffFreq, ctx.currentTime);

      noiseSource.connect(rainFilter);
      rainFilter.connect(master);
      noiseSource.start();

      this.activeNodes.push({
        stop: () => { try { noiseSource.stop(); } catch {} }
      });
    } catch {}
  }

  private buildNatureWindLayer(ctx: AudioContext, master: GainNode) {
    try {
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.012;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      noise.loop = true;

      const windFilter = ctx.createBiquadFilter();
      windFilter.type = 'bandpass';
      windFilter.frequency.setValueAtTime(450, ctx.currentTime);
      windFilter.Q.setValueAtTime(2.5, ctx.currentTime);

      noise.connect(windFilter);
      windFilter.connect(master);
      noise.start();

      this.activeNodes.push({
        stop: () => { try { noise.stop(); } catch {} }
      });
    } catch {}
  }

  private buildVinylCrackle(ctx: AudioContext, master: GainNode) {
    try {
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() > 0.998 ? (Math.random() * 0.04 - 0.02) : 0;
      }
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      source.connect(master);
      source.start();
      this.activeNodes.push({
        stop: () => { try { source.stop(); } catch {} }
      });
    } catch {}
  }

  private buildPianoArpLoop(ctx: AudioContext, master: GainNode, notes: number[], stepMs: number, gainLevel: number) {
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(950, ctx.currentTime);
    filter.connect(master);

    let noteIdx = 0;
    const playNote = () => {
      if (!this.isPlaying || ctx.state !== 'running') return;
      const freq = notes[noteIdx % notes.length];
      noteIdx++;

      try {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = 'triangle';
        const startTime = ctx.currentTime;
        const duration = (stepMs / 1000) * 1.6;

        osc.frequency.setValueAtTime(freq, startTime);
        noteGain.gain.setValueAtTime(0.0001, startTime);
        noteGain.gain.linearRampToValueAtTime(gainLevel, startTime + 0.02);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(noteGain);
        noteGain.connect(filter);

        osc.start(startTime);
        osc.stop(startTime + duration + 0.05);

        this.activeNodes.push({
          stop: () => { try { osc.stop(); } catch {} }
        });
      } catch {}
    };

    playNote();
    const id = setInterval(playNote, stepMs);
    this.intervalIds.push(id);
  }

  private buildCyberChordsLoop(ctx: AudioContext, master: GainNode) {
    const cyberChords = [
      [130.81, 196.00, 246.94, 329.63, 392.00], // Cmaj9
      [146.83, 220.00, 293.66, 349.23, 440.00], // Dm9
      [164.81, 246.94, 329.63, 392.00, 493.88], // Em9
      [110.00, 164.81, 220.00, 261.63, 349.23]  // F/A
    ];
    this.buildChordsLoop(ctx, master, cyberChords, 3200, 1100, 'sawtooth', false, 0.08);
  }

  private buildElectroArp(ctx: AudioContext, master: GainNode, scaleNotes: number[], stepMs: number, oscType: OscillatorType, filterFreq: number) {
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(filterFreq, ctx.currentTime);
    filter.Q.setValueAtTime(2.2, ctx.currentTime);
    filter.connect(master);

    let idx = 0;
    const playStep = () => {
      if (!this.isPlaying || ctx.state !== 'running') return;
      const freq = scaleNotes[idx % scaleNotes.length];
      idx++;

      try {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();

        osc.type = oscType;
        const now = ctx.currentTime;
        const duration = (stepMs / 1000) * 0.85;

        osc.frequency.setValueAtTime(freq, now);
        g.gain.setValueAtTime(0.0001, now);
        g.gain.linearRampToValueAtTime(0.12, now + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(g);
        g.connect(filter);

        osc.start(now);
        osc.stop(now + duration + 0.02);

        this.activeNodes.push({
          stop: () => { try { osc.stop(); } catch {} }
        });
      } catch {}
    };

    playStep();
    const id = setInterval(playStep, stepMs);
    this.intervalIds.push(id);
  }

  private buildFutureBassPulse(ctx: AudioContext, master: GainNode) {
    const chords = [
      [185.00, 277.18, 369.99, 440.00], // F#m7
      [146.83, 220.00, 293.66, 369.99], // Dmaj7
      [164.81, 246.94, 329.63, 392.00], // A/C#
      [220.00, 277.18, 329.63, 440.00]  // A
    ];

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, ctx.currentTime);
    filter.connect(master);

    let cIdx = 0;
    const playDropChord = () => {
      if (!this.isPlaying || ctx.state !== 'running') return;
      const notes = chords[cIdx % chords.length];
      cIdx++;

      notes.forEach((freq, i) => {
        try {
          const osc = ctx.createOscillator();
          const g = ctx.createGain();
          osc.type = 'sawtooth';
          const now = ctx.currentTime;
          osc.frequency.setValueAtTime(freq + (i * 0.5 - 1.0), now);

          // Sidechain-like pumping envelope
          g.gain.setValueAtTime(0.001, now);
          g.gain.linearRampToValueAtTime(0.08, now + 0.15);
          g.gain.linearRampToValueAtTime(0.015, now + 0.45);
          g.gain.linearRampToValueAtTime(0.07, now + 0.65);
          g.gain.linearRampToValueAtTime(0.0001, now + 0.9);

          osc.connect(g);
          g.connect(filter);
          osc.start(now);
          osc.stop(now + 0.95);

          this.activeNodes.push({
            stop: () => { try { osc.stop(); } catch {} }
          });
        } catch {}
      });
    };

    playDropChord();
    const id = setInterval(playDropChord, 940);
    this.intervalIds.push(id);
  }

  private buildProgressiveHouseLoop(ctx: AudioContext, master: GainNode) {
    const stepMs = 242; // ~124 BPM sixteenth-note pattern
    const notes = [123.47, 146.83, 164.81, 185.00, 220.00, 246.94, 293.66, 220.00];
    this.buildElectroArp(ctx, master, notes, stepMs, 'triangle', 2000);
  }

  private buildMotivationalEDM(ctx: AudioContext, master: GainNode) {
    const stepMs = 254; // ~118 BPM
    const notes = [146.83, 185.00, 220.00, 293.66, 369.99, 440.00, 369.99, 293.66];
    this.buildElectroArp(ctx, master, notes, stepMs, 'sawtooth', 1700);
  }

  private buildCosmicDrone(ctx: AudioContext, master: GainNode, frequencies: number[], cutoffFreq: number, gainLevel: number) {
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(cutoffFreq, ctx.currentTime);
    filter.connect(master);

    frequencies.forEach((freq, idx) => {
      try {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq + (idx * 0.3 - 0.6), ctx.currentTime);

        g.gain.setValueAtTime(0.001, ctx.currentTime);
        g.gain.linearRampToValueAtTime(gainLevel / (idx + 1), ctx.currentTime + 2.5);

        osc.connect(g);
        g.connect(filter);
        osc.start();

        this.activeNodes.push({
          stop: () => {
            try {
              g.gain.setValueAtTime(g.gain.value, ctx.currentTime);
              g.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
              osc.stop(ctx.currentTime + 0.9);
            } catch {}
          }
        });
      } catch {}
    });
  }

  private buildAtmosphericSynth(ctx: AudioContext, master: GainNode) {
    const chords = [
      [220.00, 277.18, 329.63, 440.00], // A
      [246.94, 311.13, 369.99, 493.88], // B
      [174.61, 220.00, 261.63, 349.23], // F#m
      [196.00, 246.94, 293.66, 392.00]  // G#dim
    ];
    this.buildChordsLoop(ctx, master, chords, 4200, 800, 'sine', false, 0.15);
  }

  private buildGalacticSoundscape(ctx: AudioContext, master: GainNode) {
    // Deep base pad
    this.buildCosmicDrone(ctx, master, [73.42, 110.00, 146.83, 220.00], 350, 0.16);

    // Random star-pings
    const pingNotes = [587.33, 659.25, 880.00, 987.77, 1174.66];
    const triggerStarPing = () => {
      if (!this.isPlaying || ctx.state !== 'running') return;
      try {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        const freq = pingNotes[Math.floor(Math.random() * pingNotes.length)];
        const now = ctx.currentTime;
        osc.frequency.setValueAtTime(freq, now);
        g.gain.setValueAtTime(0.0001, now);
        g.gain.linearRampToValueAtTime(0.04, now + 0.05);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
        osc.connect(g);
        g.connect(master);
        osc.start(now);
        osc.stop(now + 1.9);
        this.activeNodes.push({
          stop: () => { try { osc.stop(); } catch {} }
        });
      } catch {}
    };

    const id = setInterval(triggerStarPing, 2200);
    this.intervalIds.push(id);
  }

  private buildBinauralBeat(ctx: AudioContext, master: GainNode, baseFreq: number, beatFreq: number) {
    try {
      const merger = ctx.createChannelMerger(2);
      const oscL = ctx.createOscillator();
      const oscR = ctx.createOscillator();
      const gainL = ctx.createGain();
      const gainR = ctx.createGain();

      oscL.type = 'sine';
      oscR.type = 'sine';
      oscL.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      oscR.frequency.setValueAtTime(baseFreq + beatFreq, ctx.currentTime);

      gainL.gain.setValueAtTime(0.14, ctx.currentTime);
      gainR.gain.setValueAtTime(0.14, ctx.currentTime);

      oscL.connect(gainL);
      gainL.connect(merger, 0, 0);

      oscR.connect(gainR);
      gainR.connect(merger, 0, 1);

      merger.connect(master);

      oscL.start();
      oscR.start();

      this.activeNodes.push({
        stop: () => {
          try {
            oscL.stop();
            oscR.stop();
          } catch {}
        }
      });
    } catch {}
  }
}

export const musicManager = new MusicManager();
