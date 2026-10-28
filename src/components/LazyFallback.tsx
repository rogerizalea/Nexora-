import React, { Component, ReactNode, ErrorInfo } from 'react';
import { Sparkles, RefreshCw, AlertCircle } from 'lucide-react';

interface LazyFallbackProps {
  label?: string;
  isModal?: boolean;
}

export const LazyFallback: React.FC<LazyFallbackProps> = ({
  label = 'Cargando módulo...',
  isModal = false
}) => {
  const content = (
    <div className="flex flex-col items-center justify-center p-8 space-y-4 text-center animate-fadeIn select-none">
      <div className="relative flex items-center justify-center w-14 h-14">
        {/* Glowing pulse ring */}
        <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 dark:bg-indigo-400/20 blur-md animate-pulse" />
        
        {/* Animated spinner ring */}
        <div className="w-12 h-12 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 border-t-indigo-600 dark:border-t-indigo-400 animate-spin" />
        
        <Sparkles className="absolute w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
      </div>

      <div className="space-y-1">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-wide">
          {label}
        </p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Optimizando recursos para tu dispositivo
        </p>
      </div>

      {/* Shimmer skeleton bar */}
      <div className="w-44 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700/60 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-[shimmer_1.5s_infinite] -translate-x-full" />
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-label={label}
      >
        <div className="bg-white/95 dark:bg-[#10152B]/95 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl shadow-2xl p-6 max-w-sm w-full mx-auto">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[280px] flex items-center justify-center">
      {content}
    </div>
  );
};

interface LazyErrorBoundaryProps {
  children: ReactNode;
  fallbackLabel?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

interface LazyErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class LazyErrorBoundary extends Component<LazyErrorBoundaryProps, LazyErrorBoundaryState> {
  constructor(props: LazyErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): LazyErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Lazy loading chunk error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const errorContent = (
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 space-y-4 text-center max-w-md mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <AlertCircle className="w-6 h-6" />
          </div>

          <div className="space-y-1.5">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              No se pudo cargar el módulo
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Hubo una interrupción en la conexión al descargar este componente. Tu progreso y respuestas actuales están a salvo.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={this.handleRetry}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reintentar carga</span>
            </button>
            {this.props.isModal && this.props.onCloseModal && (
              <button
                onClick={this.props.onCloseModal}
                className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all cursor-pointer"
              >
                Cerrar
              </button>
            )}
          </div>
        </div>
      );

      if (this.props.isModal) {
        return (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white/95 dark:bg-[#10152B]/95 backdrop-blur-xl border border-amber-200/80 dark:border-amber-500/30 rounded-3xl shadow-2xl p-6 max-w-sm w-full mx-auto">
              {errorContent}
            </div>
          </div>
        );
      }

      return (
        <div className="w-full min-h-[320px] flex items-center justify-center p-4">
          <div className="bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl shadow-lg p-6 max-w-md w-full">
            {errorContent}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
