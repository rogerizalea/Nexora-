import React from 'react';
import { DiagnosticAnalysis, Section, Question } from '../types';
import { formatTime } from '../utils/diagnosticEvaluator';
import { generateAndDownloadResultsPDF } from '../utils/pdfGenerator';
import { 
  FileText, 
  Printer, 
  X, 
  CheckCircle2, 
  XCircle, 
  Award, 
  ShieldCheck, 
  BarChart3, 
  Lightbulb,
  Layers,
  Sparkles,
  Download
} from 'lucide-react';

interface ReportPDFModalProps {
  studentName: string;
  analysis: DiagnosticAnalysis;
  sections: Section[];
  answers: Record<string, number>;
  onClose: () => void;
}

export const ReportPDFModal: React.FC<ReportPDFModalProps> = ({
  studentName,
  analysis,
  sections,
  answers,
  onClose,
}) => {
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);
  const allQuestions = sections.flatMap(s => s.questions);
  const reportFolio = `PDF-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Calculate difficulty metrics for deeper knowledge
  const difficultyStats = {
    facil: { total: 0, correct: 0 },
    intermedio: { total: 0, correct: 0 },
    desafiante: { total: 0, correct: 0 }
  };

  allQuestions.forEach(q => {
    const isCorrect = answers[q.id] === q.correctIndex;
    if (q.difficulty === 'Fácil') {
      difficultyStats.facil.total++;
      if (isCorrect) difficultyStats.facil.correct++;
    } else if (q.difficulty === 'Intermedio') {
      difficultyStats.intermedio.total++;
      if (isCorrect) difficultyStats.intermedio.correct++;
    } else if (q.difficulty === 'Desafiante') {
      difficultyStats.desafiante.total++;
      if (isCorrect) difficultyStats.desafiante.correct++;
    }
  });

  const handlePrintPDF = () => {
    window.print();
  };

  const handleDirectDownloadPDF = () => {
    generateAndDownloadResultsPDF(studentName, analysis, sections, answers);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 my-6 space-y-6">
        {/* Modal Top Control Bar (Hidden when printing) */}
        <div className="no-print flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Informe Completo de Resultados (Formato PDF)
              </h2>
              <p className="text-xs text-slate-500">
                Vista oficial con puntaje, nivel obtenido, desglose por secciones y análisis de dificultad.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDirectDownloadPDF}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
              title="Descargar archivo .PDF directamente a tu dispositivo"
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess ? '¡Descargado!' : 'Descargar PDF (.pdf)'}</span>
            </button>

            <button
              onClick={handlePrintPDF}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Abrir diálogo de impresión o guardar como PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ===================== PRINTABLE PDF REPORT CANVAS ===================== */}
        <div className="space-y-6 text-slate-800 print:text-black">
          {/* Document Header */}
          <div className="border-b-2 border-indigo-900 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-widest uppercase text-indigo-700 block">
                Evaluación Estandarizada • Diagnóstico Integral
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                INFORME INDIVIDUAL DE RESULTADOS
              </h1>
              <p className="text-xs text-slate-500">
                Prueba Diagnóstica de 30 Preguntas • Batería de Competencias Básicas
              </p>
            </div>

            <div className="sm:text-right text-xs text-slate-600 space-y-0.5">
              <p className="font-mono font-bold text-slate-900">Folio: {reportFolio}</p>
              <p>Fecha de emisión: {currentDate}</p>
              <p>Tiempo empleado: {formatTime(analysis.durationSeconds)}</p>
            </div>
          </div>

          {/* Student Profile & Overall Score Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100">
            <div className="sm:col-span-7 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Estudiante Evaluado
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-indigo-950">
                {studentName || 'Estudiante'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {analysis.levelDescription}
              </p>
            </div>

            <div className="sm:col-span-5 flex flex-col items-center sm:items-end justify-center border-t sm:border-t-0 sm:border-l border-indigo-200 pt-3 sm:pt-0 sm:pl-4 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Calificación Final
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-black text-indigo-700">
                  {analysis.totalScore}
                </span>
                <span className="text-sm font-semibold text-slate-500">/ 30 pts</span>
                <span className="text-base font-bold text-slate-800 ml-1">
                  ({analysis.percentage}%)
                </span>
              </div>
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-indigo-600 text-white mt-1">
                Nivel {analysis.overallLevel}
              </span>
            </div>
          </div>

          {/* Section Breakdown Grid */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Desglose por Secciones Temáticas</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {analysis.sectionScores.map((sec) => (
                <div key={sec.sectionId} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">{sec.title}</span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${sec.color}`}>
                      {sec.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-slate-500">Aciertos:</span>
                    <span className="font-bold text-slate-900">{sec.correctCount} / {sec.totalQuestions} ({sec.percentage}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 h-full rounded-full"
                      style={{ width: `${sec.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance by Difficulty Level (for deeper knowledge) */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              <span>Desempeño por Nivel de Complejidad y Dificultad</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Fácil */}
              <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-emerald-900 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Nivel Fácil (Básico)</span>
                  </span>
                  <span className="text-xs font-black text-emerald-800">
                    {difficultyStats.facil.correct} / {difficultyStats.facil.total}
                  </span>
                </div>
                <div className="w-full bg-emerald-200/60 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-600 h-full rounded-full"
                    style={{ width: `${difficultyStats.facil.total > 0 ? (difficultyStats.facil.correct / difficultyStats.facil.total) * 100 : 0}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-emerald-800/80">Operaciones directas y definiciones elementales.</p>
              </div>

              {/* Intermedio */}
              <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-blue-900 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span>Nivel Intermedio</span>
                  </span>
                  <span className="text-xs font-black text-blue-800">
                    {difficultyStats.intermedio.correct} / {difficultyStats.intermedio.total}
                  </span>
                </div>
                <div className="w-full bg-blue-200/60 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full"
                    style={{ width: `${difficultyStats.intermedio.total > 0 ? (difficultyStats.intermedio.correct / difficultyStats.intermedio.total) * 100 : 0}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-blue-800/80">Resolución con contexto, sintaxis y series lógicas.</p>
              </div>

              {/* Desafiante */}
              <div className="p-3.5 rounded-xl border border-purple-200 bg-purple-50/40 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-purple-900 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span>Nivel Desafiante (Avanzado)</span>
                  </span>
                  <span className="text-xs font-black text-purple-800">
                    {difficultyStats.desafiante.correct} / {difficultyStats.desafiante.total}
                  </span>
                </div>
                <div className="w-full bg-purple-200/60 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-purple-600 h-full rounded-full"
                    style={{ width: `${difficultyStats.desafiante.total > 0 ? (difficultyStats.desafiante.correct / difficultyStats.desafiante.total) * 100 : 0}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-purple-800/80">Deducción profunda, series complejas y falacias.</p>
              </div>
            </div>
          </div>

          {/* Recommendations and Action Plan */}
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2">
            <h4 className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Plan de Acción Pedagógico Recomendado:</span>
            </h4>
            <div className="space-y-1">
              {analysis.recommendations.map((rec, i) => (
                <p key={i} className="text-xs text-slate-700 leading-relaxed">
                  <strong>• </strong>{rec}
                </p>
              ))}
            </div>
          </div>

          {/* Full 30 Reactivos Question Detail Table */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Detalle y Solución de las 30 Preguntas
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold">
                    <th className="py-2.5 px-3 w-10">N°</th>
                    <th className="py-2.5 px-3">Pregunta</th>
                    <th className="py-2.5 px-2">Dificultad</th>
                    <th className="py-2.5 px-3">Tu Respuesta</th>
                    <th className="py-2.5 px-3">Clave Correcta</th>
                    <th className="py-2.5 px-3 text-center">Resultado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {allQuestions.map((q) => {
                    const userIdx = answers[q.id];
                    const isCorrect = userIdx === q.correctIndex;
                    const userText = userIdx !== undefined ? q.options[userIdx] : 'Sin responder';
                    const correctText = q.options[q.correctIndex];

                    return (
                      <tr key={q.id} className={isCorrect ? 'bg-white' : 'bg-rose-50/20'}>
                        <td className="py-2 px-3 font-bold text-slate-600">{q.number}</td>
                        <td className="py-2 px-3 font-medium text-slate-900 max-w-[280px]">
                          <p className="line-clamp-2">{q.text}</p>
                        </td>
                        <td className="py-2 px-2 text-[10px]">
                          <span className={`px-1.5 py-0.5 rounded font-semibold ${
                            q.difficulty === 'Fácil' ? 'text-emerald-700 bg-emerald-50' :
                            q.difficulty === 'Intermedio' ? 'text-blue-700 bg-blue-50' : 'text-purple-700 bg-purple-50'
                          }`}>
                            {q.difficulty}
                          </span>
                        </td>
                        <td className={`py-2 px-3 ${isCorrect ? 'text-slate-800' : 'text-rose-700 font-medium'}`}>
                          {userText}
                        </td>
                        <td className="py-2 px-3 text-emerald-800 font-semibold">
                          {correctText}
                        </td>
                        <td className="py-2 px-3 text-center font-bold">
                          {isCorrect ? (
                            <span className="text-emerald-600">✓ Acierto</span>
                          ) : (
                            <span className="text-rose-600">✗ Error</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Document Signatures Footer */}
          <div className="pt-8 grid grid-cols-2 gap-8 text-center text-xs text-slate-500 border-t border-slate-200">
            <div className="space-y-1">
              <div className="border-b border-slate-400 w-48 mx-auto pb-6"></div>
              <p className="font-bold text-slate-800">Firma del Estudiante Evaluado</p>
              <p className="text-[11px] text-slate-400">{studentName || 'Estudiante'}</p>
            </div>
            <div className="space-y-1">
              <div className="border-b border-slate-400 w-48 mx-auto pb-6"></div>
              <p className="font-bold text-slate-800">Firma del Docente / Evaluador</p>
              <p className="text-[11px] text-slate-400">Dirección Académica y Diagnóstico</p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Controls (no print) */}
        <div className="no-print pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
          >
            Cerrar
          </button>
          <button
            onClick={handleDirectDownloadPDF}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{downloadSuccess ? '¡PDF Descargado!' : 'Descargar Archivo PDF (.pdf)'}</span>
          </button>
          <button
            onClick={handlePrintPDF}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir</span>
          </button>
        </div>
      </div>
    </div>
  );
};
