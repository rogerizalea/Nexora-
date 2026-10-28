import React, { useState } from 'react';
import { 
  DiagnosticAnalysis, 
  Section, 
  Question 
} from '../types';
import { CertificateModal } from './CertificateModal';
import { ReportPDFModal } from './ReportPDFModal';
import { exportResultsToCSV, formatTime } from '../utils/diagnosticEvaluator';
import { generateAndDownloadResultsPDF } from '../utils/pdfGenerator';
import { DynamicTitle } from './DynamicTitle';
import { 
  Award, 
  Printer, 
  Download, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  AlertCircle, 
  Sparkles, 
  Check, 
  Filter, 
  BrainCircuit, 
  Lightbulb, 
  ArrowRight,
  Calculator,
  BookOpen,
  Brain,
  FileText,
  BarChart3,
  Layers,
  Flame,
  Zap,
  CheckCircle
} from 'lucide-react';

interface ResultsViewProps {
  analysis: DiagnosticAnalysis;
  sections: Section[];
  answers: Record<string, number>;
  studentName: string;
  onResetExam: () => void;
  onRetryIncorrectOnly: (incorrectQuestionIds: string[]) => void;
  onStartAdvancedChallenge?: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  analysis,
  sections,
  answers,
  studentName,
  onResetExam,
  onRetryIncorrectOnly,
  onStartAdvancedChallenge,
}) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showPDFReport, setShowPDFReport] = useState(false);
  const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);
  const [pdfDownloadSuccess, setPdfDownloadSuccess] = useState(false);
  const [filterSection, setFilterSection] = useState<
    'all' | 'errors' | 'diff-facil' | 'diff-intermedio' | 'diff-desafiante' | 'sec-1' | 'sec-2' | 'sec-3'
  >('all');

  const allQuestions = sections.flatMap(s => s.questions);
  const incorrectQuestions = allQuestions.filter(q => answers[q.id] !== q.correctIndex);
  const correctQuestions = allQuestions.filter(q => answers[q.id] === q.correctIndex);

  // Difficulty metrics for deeper cognitive insight
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

  const pctFacil = difficultyStats.facil.total > 0
    ? Math.round((difficultyStats.facil.correct / difficultyStats.facil.total) * 100)
    : 0;
  const pctIntermedio = difficultyStats.intermedio.total > 0
    ? Math.round((difficultyStats.intermedio.correct / difficultyStats.intermedio.total) * 100)
    : 0;
  const pctDesafiante = difficultyStats.desafiante.total > 0
    ? Math.round((difficultyStats.desafiante.correct / difficultyStats.desafiante.total) * 100)
    : 0;

  const getFilteredQuestions = (): Question[] => {
    switch (filterSection) {
      case 'errors':
        return incorrectQuestions;
      case 'diff-facil':
        return allQuestions.filter(q => q.difficulty === 'Fácil');
      case 'diff-intermedio':
        return allQuestions.filter(q => q.difficulty === 'Intermedio');
      case 'diff-desafiante':
        return allQuestions.filter(q => q.difficulty === 'Desafiante');
      case 'sec-1':
        return sections[0]?.questions || [];
      case 'sec-2':
        return sections[1]?.questions || [];
      case 'sec-3':
        return sections[2]?.questions || [];
      default:
        return allQuestions;
    }
  };

  const filteredQuestions = getFilteredQuestions();

  const handleExportCSV = () => {
    exportResultsToCSV(studentName, analysis, sections, answers);
  };

  // Dedicated PDF Download Function for students
  const handleDownloadPDFReport = () => {
    setIsDownloadingPDF(true);
    try {
      generateAndDownloadResultsPDF(studentName, analysis, sections, answers);
      setPdfDownloadSuccess(true);
      setTimeout(() => setPdfDownloadSuccess(false), 3500);
    } catch (error) {
      console.error('Error generating PDF report:', error);
    } finally {
      setIsDownloadingPDF(false);
    }
  };

  const getLevelBadge = (level: DiagnosticAnalysis['overallLevel']) => {
    switch (level) {
      case 'Sobresaliente':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Avanzado':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Intermedio':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      default:
        return 'bg-rose-100 text-rose-800 border-rose-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner: Score & Highlights */}
      <div className="bg-gradient-to-br from-[#10152B] via-[#161F3F] to-[#10152B] rounded-3xl p-4 sm:p-8 md:p-10 text-white shadow-xl relative overflow-hidden border border-[#65D8FF]/20">
        {/* Subtle decorative circles */}
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-[#65D8FF]/10 blur-2xl pointer-events-none"></div>
        <div className="absolute right-40 -bottom-16 w-80 h-80 rounded-full bg-[#A994FF]/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Left score summary */}
          <div className="md:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-[#65D8FF]">
                NEXORA • Informe Diagnóstico
              </span>
              <span className="text-xs text-blue-200">
                {studentName ? `Para: ${studentName}` : 'Estudiante'}
              </span>
            </div>

            <div>
              <DynamicTitle 
                title="NEXORA" 
                subtitle="«Activa tu mente. Expande tu futuro» • Aprende a tu ritmo. Supera nuevos desafíos"
                size="xl"
                intervalSeconds={3.5}
                showBadge={true}
              />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Puntaje: <span className="text-[#65D8FF]">{analysis.totalScore}</span> / {analysis.maxScore} pts
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
              {analysis.levelDescription}
            </p>

            {/* Quick Metrics Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getLevelBadge(analysis.overallLevel)}`}>
                Nivel: {analysis.overallLevel}
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-slate-200">
                Efectividad: {analysis.percentage}%
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-slate-200">
                Tiempo: {formatTime(analysis.durationSeconds)}
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-slate-200">
                Aciertos: {correctQuestions.length} | Errores: {incorrectQuestions.length}
              </span>
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
            {/* Primary Direct Download PDF Button */}
            <button
              onClick={handleDownloadPDFReport}
              disabled={isDownloadingPDF}
              className={`w-full px-5 py-3 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer disabled:opacity-75 ${
                pdfDownloadSuccess 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-700/30'
                  : 'bg-indigo-500 hover:bg-indigo-400 text-white shadow-indigo-600/30'
              }`}
              title="Descargar informe oficial completo en formato PDF con desglose por preguntas y nivel obtenido"
            >
              {pdfDownloadSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5 text-emerald-200" />
                  <span>¡Informe PDF Descargado!</span>
                </>
              ) : isDownloadingPDF ? (
                <>
                  <Sparkles className="w-5 h-5 text-indigo-200 animate-spin" />
                  <span>Generando PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 text-white" />
                  <span>Descargar Informe en PDF (.pdf)</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowCertificate(true)}
              className="w-full px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer"
            >
              <Award className="w-4 h-4 text-slate-950" />
              <span>Ver Constancia / Diploma</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setShowPDFReport(true)}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="Abrir vista previa oficial e imprimir en PDF"
              >
                <Printer className="w-4 h-4" />
                <span>Vista Previa / Imprimir</span>
              </button>

              <button
                onClick={handleExportCSV}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="Descargar datos en formato CSV para Excel o Google Sheets"
              >
                <Download className="w-4 h-4" />
                <span>Exportar CSV</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={onResetExam}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Repetir todo</span>
              </button>

              {incorrectQuestions.length > 0 ? (
                <button
                  onClick={() => onRetryIncorrectOnly(incorrectQuestions.map(q => q.id))}
                  className="px-4 py-2.5 rounded-xl bg-emerald-500/80 hover:bg-emerald-500 border border-emerald-400 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  title="Practicar únicamente las preguntas respondidas de forma incorrecta"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Reforzar ({incorrectQuestions.length})</span>
                </button>
              ) : (
                <div className="px-4 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>¡100% Perfecto!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section Breakdown Cards */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Desglose por Secciones Temáticas</span>
          </h2>
          <span className="text-xs text-slate-400">Total: 30 puntos</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {analysis.sectionScores.map((sec, idx) => {
            const sectionRef = sections[idx];
            return (
              <div
                key={sec.sectionId}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                      {idx === 0 ? <Calculator className="w-5 h-5" /> : idx === 1 ? <BookOpen className="w-5 h-5" /> : <Brain className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm">{sec.title}</h3>
                      <span className="text-[11px] text-slate-400">{sec.totalQuestions} reactivos</span>
                    </div>
                  </div>

                  <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${sec.color}`}>
                    {sec.status}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-slate-600">
                    <span>Aciertos: {sec.correctCount} / {sec.totalQuestions}</span>
                    <span className="font-bold text-slate-900">{sec.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        sec.percentage >= 80 ? 'bg-emerald-500' : sec.percentage >= 60 ? 'bg-blue-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${sec.percentage}%` }}
                    ></div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {sectionRef?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================== DESEMPEÑO POR DIFICULTAD (PARA MÁS CONOCIMIENTO) ==================== */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <BarChart3 className="w-4 h-4" />
              </span>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Desempeño por Nivel de Dificultad Cognitiva
              </h3>
            </div>
            <p className="text-xs text-slate-500 pl-10">
              Evalúa tu grado de profundidad conceptual: desde conocimientos directos hasta razonamiento avanzado.
            </p>
          </div>

          <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full self-start sm:self-auto">
            Diagnóstico de Complejidad
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Nivel Fácil */}
          <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="font-bold text-xs uppercase tracking-wider text-emerald-900">
                  Nivel Fácil (Básico)
                </span>
              </div>
              <span className="text-sm font-black text-emerald-800">
                {difficultyStats.facil.correct}/{difficultyStats.facil.total} ({pctFacil}%)
              </span>
            </div>

            <div className="w-full bg-emerald-200/50 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${pctFacil}%` }}
              ></div>
            </div>

            <p className="text-xs text-emerald-950/80 leading-relaxed">
              {pctFacil >= 80 
                ? '✓ Dominas sólidamente las operaciones aritméticas directas y los conceptos fundamentales.' 
                : '• Conviene repasar sumas, restas y definiciones léxicas iniciales.'}
            </p>
          </div>

          {/* Nivel Intermedio */}
          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span className="font-bold text-xs uppercase tracking-wider text-blue-900">
                  Nivel Intermedio
                </span>
              </div>
              <span className="text-sm font-black text-blue-800">
                {difficultyStats.intermedio.correct}/{difficultyStats.intermedio.total} ({pctIntermedio}%)
              </span>
            </div>

            <div className="w-full bg-blue-200/50 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${pctIntermedio}%` }}
              ></div>
            </div>

            <p className="text-xs text-blue-950/80 leading-relaxed">
              {pctIntermedio >= 80 
                ? '✓ Muy buena capacidad para aplicar procedimientos contextualizados y análisis sintáctico.' 
                : '• Requiere ejercitar divisiones largas, ortografía puntual y relaciones temporales.'}
            </p>
          </div>

          {/* Nivel Desafiante */}
          <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                <span className="font-bold text-xs uppercase tracking-wider text-purple-900">
                  Nivel Desafiante (Avanzado)
                </span>
              </div>
              <span className="text-sm font-black text-purple-800">
                {difficultyStats.desafiante.correct}/{difficultyStats.desafiante.total} ({pctDesafiante}%)
              </span>
            </div>

            <div className="w-full bg-purple-200/50 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-purple-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${pctDesafiante}%` }}
              ></div>
            </div>

            <p className="text-xs text-purple-950/80 leading-relaxed">
              {pctDesafiante >= 70 
                ? '✓ Destacado razonamiento lógico formal, resolución de series de 2° orden y abstracción.' 
                : '• Recomendado para profundizar en problemas de pensamiento crítico avanzado y acertijos matemáticos.'}
            </p>
          </div>
        </div>

        {/* Knowledge Expansion Challenge Callout */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md border border-purple-800/40">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center shrink-0 text-amber-300">
              <Flame className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/20 px-2.5 py-0.5 rounded-full border border-purple-400/30">
                  Profundización del Conocimiento
                </span>
                <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> Mayor Exigencia
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">
                ¿Listo para un reto de mayor dificultad para adquirir más conocimiento?
              </h4>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                Pon a prueba tus destrezas con la batería de alta dificultad: cálculo fraccionario, álgebra elemental, falacias lógicas formales y análisis léxico superior.
              </p>
            </div>
          </div>

          {onStartAdvancedChallenge && (
            <button
              onClick={onStartAdvancedChallenge}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-purple-950/40 active:scale-98 transition-all cursor-pointer"
            >
              <Brain className="w-4 h-4 text-purple-200" />
              <span>Iniciar Batería de Alta Dificultad</span>
              <ArrowRight className="w-4 h-4 text-purple-200" />
            </button>
          )}
        </div>
      </div>

      {/* Pedagogical Diagnostic & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Strengths & Weaknesses (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base border-b border-slate-100 pb-3">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            <span>Matriz de Competencias y Destrezas</span>
          </div>

          <div className="space-y-4">
            {/* Strengths */}
            <div>
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Fortalezas Consolidadas (100% de Aciertos)</span>
              </h4>
              {analysis.strengths.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {analysis.strengths.map((str, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      ✓ {str}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">Continúa practicando para consolidar tus primeras destrezas plenas.</p>
              )}
            </div>

            {/* Areas to improve */}
            <div className="pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Áreas Prioritarias de Refuerzo</span>
              </h4>
              {analysis.areasToImprove.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {analysis.areasToImprove.map((area, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                      • {area}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-emerald-700 font-medium">¡Excelente trabajo! No se detectaron vacíos temáticos en esta evaluación.</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Plan & Recommendations (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base border-b border-slate-100 pb-3">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <span>Plan de Acción Pedagógico Recomendado</span>
          </div>

          <div className="space-y-3">
            {analysis.recommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="leading-relaxed">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Question-by-Question Detailed Review with Explanations */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Revisión Detallada Pregunta por Pregunta
            </h3>
            <p className="text-xs text-slate-500">
              Consulta las respuestas seleccionadas, claves correctas y la resolución pedagógica paso a paso.
            </p>
          </div>

          {/* Extended Filters including Dificultades for deeper knowledge */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-medium">
            <button
              onClick={() => setFilterSection('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterSection === 'all' ? 'bg-white text-indigo-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas ({allQuestions.length})
            </button>

            <button
              onClick={() => setFilterSection('errors')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterSection === 'errors' ? 'bg-white text-rose-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Solo Errores ({incorrectQuestions.length})
            </button>

            {/* Dificultad Filters */}
            <button
              onClick={() => setFilterSection('diff-facil')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterSection === 'diff-facil' ? 'bg-white text-emerald-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🟢 Fáciles ({difficultyStats.facil.total})
            </button>

            <button
              onClick={() => setFilterSection('diff-intermedio')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterSection === 'diff-intermedio' ? 'bg-white text-blue-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🔵 Intermedias ({difficultyStats.intermedio.total})
            </button>

            <button
              onClick={() => setFilterSection('diff-desafiante')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterSection === 'diff-desafiante' ? 'bg-white text-purple-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🟣 Desafiantes ({difficultyStats.desafiante.total})
            </button>

            <button
              onClick={() => setFilterSection('sec-1')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterSection === 'sec-1' ? 'bg-white text-indigo-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {sections[0]?.shortTitle || 'Sección 1'}
            </button>

            <button
              onClick={() => setFilterSection('sec-2')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterSection === 'sec-2' ? 'bg-white text-indigo-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {sections[1]?.shortTitle || 'Sección 2'}
            </button>

            <button
              onClick={() => setFilterSection('sec-3')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterSection === 'sec-3' ? 'bg-white text-indigo-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {sections[2]?.shortTitle || 'Sección 3'}
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const userChoiceIdx = answers[q.id];
            const isAnswered = userChoiceIdx !== undefined;
            const isCorrect = isAnswered && userChoiceIdx === q.correctIndex;
            const sectionName = sections.find(s => s.id === q.sectionId)?.shortTitle;

            return (
              <div
                key={q.id}
                className={`p-5 rounded-2xl border transition-all space-y-4 ${
                  isCorrect
                    ? 'bg-emerald-50/20 border-emerald-200'
                    : 'bg-rose-50/20 border-rose-200'
                }`}
              >
                {/* Header item */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      {q.number}
                    </span>
                    <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                      {sectionName} • {q.skill}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Difficulty Badge */}
                    <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold border ${
                      q.difficulty === 'Fácil' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                      q.difficulty === 'Intermedio' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      'bg-purple-50 text-purple-700 border-purple-200'
                    }`}>
                      Dificultad: {q.difficulty}
                    </span>

                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Acierto (+1 pt)</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>{isAnswered ? 'Incorrecta (0 pts)' : 'Sin responder (0 pts)'}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Prompt */}
                <p className="font-semibold text-slate-900 text-base">
                  {q.text}
                </p>

                {/* Options grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userChoiceIdx === optIdx;
                    const isTheCorrectOne = optIdx === q.correctIndex;

                    let optStyle = 'border-slate-200 bg-white text-slate-700';

                    if (isTheCorrectOne) {
                      optStyle = 'border-emerald-500 bg-emerald-50/90 text-emerald-950 font-bold ring-1 ring-emerald-500/30';
                    } else if (isSelected && !isTheCorrectOne) {
                      optStyle = 'border-rose-400 bg-rose-50 text-rose-950 line-through';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl border flex items-center justify-between gap-2 ${optStyle}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-md bg-slate-100 font-bold text-slate-700 flex items-center justify-center text-xs">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isTheCorrectOne && (
                          <span className="text-[11px] font-bold text-emerald-700">✓ Correcta</span>
                        )}
                        {isSelected && !isTheCorrectOne && (
                          <span className="text-[11px] font-bold text-rose-600">Marcada</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Pedagogical Explanation Box */}
                <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/80 text-xs sm:text-sm text-slate-700 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>Explicación paso a paso:</span>
                  </div>
                  <p className="leading-relaxed pl-5">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Official PDF Report Preview & Print Modal */}
      {showPDFReport && (
        <ReportPDFModal
          studentName={studentName}
          analysis={analysis}
          sections={sections}
          answers={answers}
          onClose={() => setShowPDFReport(false)}
        />
      )}

      {/* Diploma / Certificate Modal */}
      {showCertificate && (
        <CertificateModal
          studentName={studentName}
          analysis={analysis}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
};
