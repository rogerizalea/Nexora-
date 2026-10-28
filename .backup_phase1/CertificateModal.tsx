import React from 'react';
import { DiagnosticAnalysis } from '../types';
import { Award, Printer, X, CheckCircle, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  studentName: string;
  analysis: DiagnosticAnalysis;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  studentName,
  analysis,
  onClose,
}) => {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const certificateId = `DIAG-30P-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 my-8">
        {/* Close Button (no print) */}
        <button
          onClick={onClose}
          className="no-print absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          title="Cerrar constancia"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Printable Canvas */}
        <div className="relative border-8 border-double border-indigo-900/40 p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-indigo-50/20 via-white to-amber-50/20 text-center space-y-6">
          {/* Header Seal */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
              <Award className="w-9 h-9" />
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-700">
              Constancia Oficial de Evaluación
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Certificado de Prueba Diagnóstica
            </h2>
            <p className="text-xs text-slate-500">
              Evaluación de Competencias Básicas en Matemáticas, Lenguaje y Razonamiento Lógico
            </p>
          </div>

          <div className="py-2">
            <p className="text-sm text-slate-600">Se otorga la presente constancia de diagnóstico a:</p>
            <h3 className="text-2xl sm:text-3xl font-black text-indigo-950 mt-1 border-b-2 border-indigo-200 pb-2 inline-block px-8">
              {studentName || 'Estudiante'}
            </h3>
          </div>

          <p className="text-sm text-slate-700 max-w-xl mx-auto leading-relaxed">
            Por haber completado satisfactoriamente la evaluación diagnóstica estandarizada de 30 reactivos, demostrando un nivel de dominio:
          </p>

          {/* Score Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/90 border border-indigo-100 px-6 py-3 rounded-2xl shadow-xs">
            <div className="text-center sm:text-left">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Nivel Obtenido
              </span>
              <span className="text-lg font-extrabold text-indigo-600">
                {analysis.overallLevel}
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <div className="text-center sm:text-left">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Puntaje Global
              </span>
              <span className="text-lg font-extrabold text-slate-900">
                {analysis.totalScore} / {analysis.maxScore} pts ({analysis.percentage}%)
              </span>
            </div>
          </div>

          {/* Section Summary Pills */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto text-xs pt-2">
            {analysis.sectionScores.map((sec) => (
              <div key={sec.sectionId} className="bg-slate-50/90 border border-slate-200 p-2 rounded-xl">
                <span className="block font-semibold text-slate-700 truncate">{sec.title}</span>
                <span className="font-bold text-indigo-600">{sec.correctCount}/{sec.totalQuestions}</span>
              </div>
            ))}
          </div>

          {/* Footer Info & Signatures */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div className="flex items-center gap-1.5 text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Folio: <code className="font-mono font-bold text-slate-800">{certificateId}</code></span>
            </div>
            <div>
              <span>Fecha de emisión: <strong>{currentDate}</strong></span>
            </div>
          </div>
        </div>

        {/* Action Controls (no print) */}
        <div className="no-print mt-6 flex flex-wrap items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            Cerrar
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 shadow-md transition-colors flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Guardar en PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
