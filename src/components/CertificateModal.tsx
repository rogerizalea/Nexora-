import React, { useState } from 'react';
import { DiagnosticAnalysis } from '../types';
import { Award, Printer, X, Download, CheckCircle2, ShieldCheck } from 'lucide-react';
import { generateAndDownloadCertificatePDF } from '../utils/pdfGenerator';

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
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const certificateId = `DIAG-30P-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  const handlePrint = () => {
    window.print();
  };

  const handleDirectDownloadPDF = () => {
    generateAndDownloadCertificatePDF(studentName, analysis, certificateId);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800 my-8 text-slate-800 dark:text-slate-100 animate-popIn">
        {/* Close Button (no print) */}
        <button
          onClick={onClose}
          className="no-print absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          title="Cerrar constancia"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Printable Canvas */}
        <div className="relative border-8 border-double border-[#10152B]/30 dark:border-[#65D8FF]/30 p-6 sm:p-12 rounded-2xl bg-gradient-to-b from-[#65D8FF]/5 via-white dark:via-slate-900/80 to-[#FFD166]/10 text-center space-y-6">
          {/* Header Seal */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FFD166] via-amber-500 to-[#FF78C8] flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
              <Award className="w-9 h-9 text-[#10152B]" />
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest uppercase text-[#10152B] dark:text-[#65D8FF] bg-[#65D8FF]/15 px-3 py-1 rounded-full border border-[#65D8FF]/30 inline-block">
              NEXORA • Constancia Oficial de Evaluación
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10152B] dark:text-white tracking-tight">
              Certificado de Reconocimiento Académico
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              «Activa tu mente. Expande tu futuro» • Evaluación de Competencias
            </p>
          </div>

          <div className="py-2">
            <p className="text-sm text-slate-600 dark:text-slate-300">Se otorga la presente constancia de diagnóstico a:</p>
            <h3 className="text-2xl sm:text-3xl font-black text-indigo-950 dark:text-[#65D8FF] mt-1 border-b-2 border-indigo-200 dark:border-indigo-700 pb-2 inline-block px-8">
              {studentName || 'Estudiante'}
            </h3>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Por haber completado satisfactoriamente la evaluación diagnóstica estandarizada, demostrando dedicación y un nivel de dominio:
          </p>

          {/* Score Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/90 dark:bg-slate-800/90 border border-indigo-100 dark:border-indigo-900/50 px-6 py-3 rounded-2xl shadow-xs">
            <div className="text-center sm:text-left">
              <span className="block text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                Nivel Obtenido
              </span>
              <span className="text-lg font-extrabold text-indigo-600 dark:text-[#65D8FF]">
                {analysis.overallLevel}
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
            <div className="text-center sm:text-left">
              <span className="block text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                Puntaje Global
              </span>
              <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                {analysis.totalScore} / {analysis.maxScore} pts ({analysis.percentage}%)
              </span>
            </div>
          </div>

          {/* Section Summary Pills */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto text-xs pt-2">
            {analysis.sectionScores.map((sec) => (
              <div key={sec.sectionId} className="bg-slate-50/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 p-2 rounded-xl">
                <span className="block font-semibold text-slate-700 dark:text-slate-200 truncate">{sec.title}</span>
                <span className="font-bold text-indigo-600 dark:text-[#65D8FF]">{sec.correctCount}/{sec.totalQuestions}</span>
              </div>
            ))}
          </div>

          {/* Footer Info & Signatures */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Folio: <code className="font-mono font-bold text-slate-800 dark:text-slate-200">{certificateId}</code></span>
            </div>
            <div>
              <span>Fecha de emisión: <strong>{currentDate}</strong></span>
            </div>
          </div>
        </div>

        {/* Action Controls (no print) */}
        <div className="no-print mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            {downloadSuccess && (
              <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4" />
                <span>¡Certificado PDF descargado con éxito!</span>
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Cerrar
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              title="Abrir diálogo de impresión del sistema"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>

            <button
              onClick={handleDirectDownloadPDF}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#175CD3] via-[#A994FF] to-[#FF78C8] text-white text-sm font-bold shadow-md hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              title="Descargar archivo PDF oficial del certificado en tu celular o PC"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Certificado PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
