import React, { useState } from 'react';
import { Lock, X, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';

interface TeacherPinModalProps {
  onSuccess: (token: string) => void;
  onClose: () => void;
  targetFeatureName?: string;
}

export const TeacherPinModal: React.FC<TeacherPinModalProps> = ({
  onSuccess,
  onClose,
  targetFeatureName = 'el Panel de Docente',
}) => {
  const [pinInput, setPinInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim() || isLoading) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/docente/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: pinInput.trim() }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success && data.token) {
        // Save token to sessionStorage for current tab session
        if (typeof window !== 'undefined') {
          try {
            sessionStorage.setItem('nexora_teacher_session_token', data.token);
          } catch {}
        }
        onSuccess(data.token);
        onClose();
      } else {
        setErrorMessage(data.error || 'Clave de acceso incorrecta. Acceso no autorizado.');
        setPinInput('');
      }
    } catch {
      setErrorMessage('Error de conexión con el servidor. Verifica tu conexión a internet.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-slate-200 space-y-5 text-center relative">
        <button
          onClick={onClose}
          disabled={isLoading}
          className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
          <Lock className="w-6 h-6" />
        </div>

        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-slate-900">
            Acceso Docente Protegido
          </h3>
          <p className="text-xs text-slate-500">
            Para acceder a <strong>{targetFeatureName}</strong>, ingresa la clave maestra de autorización docente.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              maxLength={32}
              value={pinInput}
              disabled={isLoading}
              onChange={(e) => {
                setPinInput(e.target.value);
                if (errorMessage) setErrorMessage(null);
              }}
              placeholder="Ingresa la clave docente"
              autoFocus
              className="w-full px-4 py-2.5 text-center text-lg tracking-widest font-mono font-bold border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50 disabled:opacity-50"
            />
            {errorMessage && (
              <p className="text-xs text-rose-600 font-semibold mt-2 flex items-center justify-center gap-1.5 text-left p-2 rounded-lg bg-rose-50 border border-rose-200">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading || !pinInput.trim()}
              className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-md flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Verificando...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Autenticar</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
