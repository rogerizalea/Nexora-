import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export interface DynamicColorPalette {
  id: string;
  name: string;
  gradientClass: string;
  bgGlow: string;
  badgeBg: string;
  accentHex: string;
}

// Official NEXORA Color Palettes:
// - Azul oscuro: #10152B (Profundidad cósmica & solidez)
// - Cian: #65D8FF (Claridad mental & destello intelectual)
// - Violeta: #A994FF (Innovación, creatividad & futuro)
// - Rosa: #FF78C8 (Energía, pasión & dinamismo)
// - Dorado: #FFD166 (Logro, maestría & superación)
// - Azul (#175CD3) y Verde (#18864B) para estados funcionales y de éxito
export const DYNAMIC_COLOR_PALETTES: DynamicColorPalette[] = [
  {
    id: 'nexora-cosmic',
    name: 'Cian & Violeta Cósmico',
    gradientClass: 'from-[#65D8FF] via-[#A994FF] to-[#FF78C8]',
    bgGlow: 'rgba(101, 216, 255, 0.45)',
    badgeBg: 'bg-[#10152B] border-[#65D8FF]/40 text-[#65D8FF]',
    accentHex: '#65D8FF'
  },
  {
    id: 'nexora-aurora',
    name: 'Rosa Aurora & Violeta',
    gradientClass: 'from-[#FF78C8] via-[#A994FF] to-[#FFD166]',
    bgGlow: 'rgba(255, 120, 200, 0.45)',
    badgeBg: 'bg-pink-50 border-pink-200 text-[#FF78C8]',
    accentHex: '#FF78C8'
  },
  {
    id: 'nexora-solar-gold',
    name: 'Dorado Solar & Cian',
    gradientClass: 'from-[#FFD166] via-[#65D8FF] to-[#A994FF]',
    bgGlow: 'rgba(255, 209, 102, 0.45)',
    badgeBg: 'bg-amber-50 border-amber-200 text-amber-800',
    accentHex: '#FFD166'
  },
  {
    id: 'nexora-nocturne',
    name: 'Azul Profundo & Violeta',
    gradientClass: 'from-[#10152B] via-[#A994FF] to-[#65D8FF]',
    bgGlow: 'rgba(169, 148, 255, 0.45)',
    badgeBg: 'bg-[#10152B] border-[#A994FF]/40 text-[#A994FF]',
    accentHex: '#A994FF'
  },
  {
    id: 'nexora-achievement',
    name: 'Superación & Éxito',
    gradientClass: 'from-[#175CD3] via-[#18864B] to-[#FFD166]',
    bgGlow: 'rgba(24, 134, 75, 0.45)',
    badgeBg: 'bg-emerald-50 border-emerald-200 text-[#18864B]',
    accentHex: '#18864B'
  }
];

interface DynamicTitleProps {
  title?: string;
  subtitle?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  intervalSeconds?: number;
  showBadge?: boolean;
  showSparkle?: boolean;
  className?: string;
  subtitleClassName?: string;
  onClickChange?: boolean;
}

export const DynamicTitle: React.FC<DynamicTitleProps> = ({
  title = "NEXORA",
  subtitle,
  size = 'base',
  intervalSeconds = 3.5,
  showBadge = false,
  showSparkle = true,
  className = '',
  subtitleClassName = '',
  onClickChange = true
}) => {
  // Layer A and Layer B for buttery smooth cross-fading of colors
  // Completely prevents any sudden visual snaps or flickers
  const [layerAIndex, setLayerAIndex] = useState(0);
  const [layerBIndex, setLayerBIndex] = useState(1);
  const [activeLayer, setActiveLayer] = useState<'A' | 'B'>('A');

  useEffect(() => {
    const ms = Math.max(1800, intervalSeconds * 1000);
    const interval = setInterval(() => {
      setActiveLayer((current) => {
        if (current === 'A') {
          setLayerBIndex((prev) => (prev + 1) % DYNAMIC_COLOR_PALETTES.length);
          return 'B';
        } else {
          setLayerAIndex((prev) => (prev + 1) % DYNAMIC_COLOR_PALETTES.length);
          return 'A';
        }
      });
    }, ms);

    return () => clearInterval(interval);
  }, [intervalSeconds]);

  const activeIndex = activeLayer === 'A' ? layerAIndex : layerBIndex;
  const currentPalette = DYNAMIC_COLOR_PALETTES[activeIndex];
  const paletteA = DYNAMIC_COLOR_PALETTES[layerAIndex];
  const paletteB = DYNAMIC_COLOR_PALETTES[layerBIndex];

  const handleManualCycle = () => {
    if (!onClickChange) return;
    setActiveLayer((current) => {
      if (current === 'A') {
        setLayerBIndex((prev) => (prev + 1) % DYNAMIC_COLOR_PALETTES.length);
        return 'B';
      } else {
        setLayerAIndex((prev) => (prev + 1) % DYNAMIC_COLOR_PALETTES.length);
        return 'A';
      }
    });
  };

  // Mobile-safe font sizing: wraps naturally between words, NEVER letter-by-letter
  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'text-xs sm:text-sm font-black tracking-tight';
      case 'sm':
        return 'text-xs sm:text-sm md:text-base font-black tracking-tight';
      case 'base':
        return 'text-sm sm:text-base md:text-lg font-black tracking-tight';
      case 'lg':
        return 'text-base sm:text-lg md:text-xl font-black tracking-tight';
      case 'xl':
        return 'text-lg sm:text-xl md:text-2xl font-black tracking-tight';
      case '2xl':
        return 'text-lg sm:text-2xl md:text-3xl font-black tracking-tight';
      case '3xl':
        return 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight';
      default:
        return 'text-sm sm:text-base md:text-lg font-black tracking-tight';
    }
  };

  return (
    <div 
      className={`flex flex-col group max-w-full ${onClickChange ? 'cursor-pointer select-none' : ''} ${className}`}
      onClick={handleManualCycle}
      title={onClickChange ? `Paleta: ${currentPalette.name} (transición suave cada ${intervalSeconds}s o haz clic)` : undefined}
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 max-w-full">
        {showSparkle && (
          <Sparkles 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-700 group-hover:rotate-45"
            style={{ 
              color: currentPalette.accentHex,
              transition: 'color 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s ease'
            }}
          />
        )}
        
        {/* Dual-layer smooth color cross-fader */}
        <div className="grid grid-cols-1 grid-rows-1 items-center max-w-full py-0.5">
          {/* Layer A */}
          <span 
            className={`col-start-1 row-start-1 bg-gradient-to-r ${paletteA.gradientClass} bg-clip-text text-transparent dynamic-title-gradient py-0.5 whitespace-normal break-normal leading-tight ${getSizeClasses()} transition-opacity duration-1200 ease-in-out ${
              activeLayer === 'A' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            style={{
              filter: `drop-shadow(0 2px 10px ${paletteA.bgGlow})`
            }}
          >
            {title}
          </span>

          {/* Layer B */}
          <span 
            className={`col-start-1 row-start-1 bg-gradient-to-r ${paletteB.gradientClass} bg-clip-text text-transparent dynamic-title-gradient py-0.5 whitespace-normal break-normal leading-tight ${getSizeClasses()} transition-opacity duration-1200 ease-in-out ${
              activeLayer === 'B' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            style={{
              filter: `drop-shadow(0 2px 10px ${paletteB.bgGlow})`
            }}
          >
            {title}
          </span>
        </div>

        {showBadge && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border transition-all duration-1000 shrink-0 inline-flex items-center gap-1.5 shadow-2xs ${currentPalette.badgeBg}`}>
            <span 
              className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0" 
              style={{ backgroundColor: currentPalette.accentHex }}
            />
            <span>{currentPalette.name}</span>
          </span>
        )}
      </div>

      {subtitle && (
        <span className={`text-[10px] sm:text-xs text-slate-500 font-semibold tracking-wide uppercase mt-0.5 max-w-full whitespace-normal break-normal leading-tight transition-colors duration-500 ${subtitleClassName}`}>
          {subtitle}
        </span>
      )}
    </div>
  );
};
