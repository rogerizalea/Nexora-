import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  retryCount: number;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    retryCount: 0
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  private hasAutoRecoveredDOM = false;

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);

    // If the error is a DOM reconciliation error (e.g., removeChild / insertBefore caused by translation or browser tools)
    // auto-recover immediately once without disrupting the student's exam experience
    const isDOMReconciliationError =
      error?.message &&
      (error.message.includes('removeChild') ||
       error.message.includes('insertBefore') ||
       error.message.includes('not a child of this node'));

    if (isDOMReconciliationError && !this.hasAutoRecoveredDOM) {
      this.hasAutoRecoveredDOM = true;
      console.warn('[ErrorBoundary] Auto-recovering from DOM reconciliation glitch...');
      setTimeout(() => {
        this.setState(prev => ({ hasError: false, error: null, retryCount: prev.retryCount + 1 }));
      }, 50);
    }
  }

  private handleRecover = () => {
    this.hasAutoRecoveredDOM = false;
    this.setState(prev => ({ 
      hasError: false, 
      error: null, 
      retryCount: prev.retryCount + 1 
    }));
  };

  private handleSafeReset = () => {
    this.hasAutoRecoveredDOM = false;
    if (typeof window !== 'undefined') {
      try {
        window.dispatchEvent(new CustomEvent('nexora-safe-mode'));
      } catch (e) {
        console.warn('Error dispatching safe mode event', e);
      }
    }
    this.setState({ hasError: false, error: null, retryCount: 0 });
  };

  private handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      const isPersistent = this.state.retryCount >= 1;

      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[#10152B] text-white">
          <div className="max-w-lg w-full liquid-glass-card bg-[#161F3F]/95 rounded-3xl p-6 sm:p-8 border border-[#65D8FF]/30 shadow-2xl space-y-5 text-center animate-popIn backdrop-blur-2xl">
            
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto shadow-md">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/10 text-[#65D8FF] border border-[#65D8FF]/30">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Protección Autónoma NEXORA</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Recuperación Segura de Sesión
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ocurrió un contratiempo temporal en la visualización, pero tus respuestas y tu progreso en la evaluación están protegidos en tu dispositivo.
              </p>
            </div>

            {this.state.error?.message && (
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400 text-left overflow-x-auto max-h-24">
                Detalle: {this.state.error.message}
              </div>
            )}

            <div className="flex flex-col gap-2.5 pt-2">
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  onClick={this.handleRecover}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#175CD3] to-indigo-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Reanudar sin perder datos</span>
                </button>

                <button
                  onClick={this.handleReload}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all cursor-pointer"
                >
                  <span>Recargar página</span>
                </button>
              </div>

              {isPersistent && (
                <button
                  onClick={this.handleSafeReset}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Restablecer vista a Materias (Conservando 100% de tus datos)</span>
                </button>
              )}
            </div>

            <p className="text-[10px] text-slate-500 pt-1">
              «Activa tu mente. Expande tu futuro» • NEXORA 2026
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
