import React, { useState } from 'react';
import { Lock, KeyRound, X, AlertCircle, ShieldAlert } from 'lucide-react';

interface TeacherPinModalProps {
  correctPin: string;
  onSuccess: () => void;
  onClose: () => void;
  targetFeatureName?: string;
}

export const TeacherPinModal: React.FC<TeacherPinModalProps> = ({
  correctPin,
  onSuccess,
  onClose,
  targetFeatureName = 'el Panel de Docente',
}) => {
  const [pinInput, setPinInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === correctPin.trim()) {
      onSuccess();
      onClose();
    } else {
      setError(true);
      setPinInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-slate-200 space-y-5 text-center">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
          <Lock className="w-6 h-6" />
        </div>

        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-slate-900">
            Acceso Protegido
          </h3>
          <p className="text-xs text-slate-500">
            Esta URL está configurada en <strong>Modo Estudiante</strong> para evitar que se modifiquen las preguntas o se alteren las notas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              inputMode="numeric"
              maxLength={12}
              value={pinInput}
              onChange={(e) => {
                setPinInput(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Ingresa la clave de acceso"
              autoFocus
              className="w-full px-4 py-2.5 text-center text-lg tracking-widest font-mono font-bold border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50"
            />
            {error && (
              <p className="text-xs text-rose-600 font-semibold mt-1.5 flex items-center justify-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Clave incorrecta. Inténtalo de nuevo.</span>
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-md"
            >
              Desbloquear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
