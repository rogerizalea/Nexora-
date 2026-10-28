import React, { useState, useRef, Suspense } from 'react';
import { StudentAttempt, SectionScore } from '../types';
import { LazyFallback, LazyErrorBoundary } from './LazyFallback';
import { formatTime } from '../utils/diagnosticEvaluator';

const CertificateModal = React.lazy(() => import('./CertificateModal').then(m => ({ default: m.CertificateModal })));
import { 
  Users, 
  Search, 
  Award, 
  Trash2, 
  Download, 
  Filter, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Calendar,
  Sparkles,
  ArrowUpDown,
  BookOpen,
  Eye,
  AlertCircle,
  FileSpreadsheet,
  FileJson,
  Upload,
  ShieldCheck,
  X,
  Share2
} from 'lucide-react';

interface StudentRegistryProps {
  attempts: StudentAttempt[];
  onDeleteAttempt: (id: string) => void;
  onClearAllAttempts: () => void;
  onLoadSampleStudents: () => void;
  onViewStudentExam: (attempt: StudentAttempt) => void;
  onOpenShareModal?: () => void;
  onRestoreAttempts?: (restoredAttempts: StudentAttempt[]) => void;
}

export const StudentRegistry: React.FC<StudentRegistryProps> = ({
  attempts,
  onDeleteAttempt,
  onClearAllAttempts,
  onLoadSampleStudents,
  onViewStudentExam,
  onOpenShareModal,
  onRestoreAttempts,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [filterMode, setFilterMode] = useState<'all' | 'exam' | 'practice' | 'historico'>('all');
  const [datePreset, setDatePreset] = useState<'all' | 'today' | 'last7' | 'last30' | 'custom'>('all');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [sortBy, setSortBy] = useState<'date-desc' | 'date-asc' | 'score-desc' | 'score-asc' | 'name-asc'>('date-desc');
  const [selectedCertificateAttempt, setSelectedCertificateAttempt] = useState<StudentAttempt | null>(null);

  // Filter & Search Logic
  const filteredAttempts = attempts.filter((att) => {
    // 1. Search Query (Name, Exam Title, ID)
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      att.studentName.toLowerCase().includes(q) ||
      att.examTitle.toLowerCase().includes(q) ||
      att.id.toLowerCase().includes(q) ||
      att.totalScore.toString() === q;

    // 2. Performance Level Filter
    const matchesLevel = filterLevel === 'all' || att.overallLevel === filterLevel;

    // 3. Modalidad Filter (Official Exam vs Practice vs Historical vs Abandoned)
    const matchesMode = filterMode === 'all' || 
      (filterMode === 'exam' && att.mode === 'exam' && !att.isAbandoned) ||
      (filterMode === 'practice' && att.mode === 'practice') ||
      (filterMode === 'historico' && (att.mode === 'historico' || !att.mode));

    // 4. Date Range Filter
    let matchesDate = true;
    const attemptTime = new Date(att.date).getTime();
    const now = new Date();

    if (datePreset === 'today') {
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
      const endOfToday = startOfToday + 86400000;
      matchesDate = attemptTime >= startOfToday && attemptTime < endOfToday;
    } else if (datePreset === 'last7') {
      const sevenDaysAgo = now.getTime() - 7 * 86400000;
      matchesDate = attemptTime >= sevenDaysAgo;
    } else if (datePreset === 'last30') {
      const thirtyDaysAgo = now.getTime() - 30 * 86400000;
      matchesDate = attemptTime >= thirtyDaysAgo;
    } else if (datePreset === 'custom') {
      if (startDate) {
        const startTimestamp = new Date(startDate + 'T00:00:00').getTime();
        if (attemptTime < startTimestamp) matchesDate = false;
      }
      if (endDate) {
        const endTimestamp = new Date(endDate + 'T23:59:59').getTime();
        if (attemptTime > endTimestamp) matchesDate = false;
      }
    }

    return matchesSearch && matchesLevel && matchesMode && matchesDate;
  }).sort((a, b) => {
    if (sortBy === 'date-desc') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sortBy === 'date-asc') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    if (sortBy === 'score-desc') {
      return b.totalScore - a.totalScore;
    }
    if (sortBy === 'score-asc') {
      return a.totalScore - b.totalScore;
    }
    if (sortBy === 'name-asc') {
      return a.studentName.localeCompare(b.studentName);
    }
    return 0;
  });

  const hasActiveFilters = searchQuery.trim() !== '' || filterLevel !== 'all' || filterMode !== 'all' || datePreset !== 'all' || startDate !== '' || endDate !== '';

  const handleResetFilters = () => {
    setSearchQuery('');
    setFilterLevel('all');
    setFilterMode('all');
    setDatePreset('all');
    setStartDate('');
    setEndDate('');
    setSortBy('date-desc');
  };

  // Analytics Metrics: Strictly calculate academic averages on valid completed official exams
  const totalAttempts = attempts.length;
  const officialAttempts = attempts.filter(a => a.mode === 'exam' && !a.isAbandoned);
  const officialCount = officialAttempts.length;
  const practiceCount = attempts.filter(a => a.mode === 'practice').length;
  const historicalCount = attempts.filter(a => a.mode === 'historico' || !a.mode).length;

  const distinctStudentsCount = new Set(officialAttempts.map(a => a.studentName.trim().toLowerCase())).size;
  const averageScore = officialCount > 0 
    ? (officialAttempts.reduce((acc, curr) => acc + curr.totalScore, 0) / officialCount).toFixed(1)
    : '0.0';
  const averagePercentage = officialCount > 0
    ? Math.round(officialAttempts.reduce((acc, curr) => acc + curr.percentage, 0) / officialCount)
    : 0;
  const highestScore = officialCount > 0
    ? Math.max(...officialAttempts.map(a => a.totalScore))
    : 0;
  const passingRate = officialCount > 0
    ? Math.round((officialAttempts.filter(a => a.percentage >= 60).length / officialCount) * 100)
    : 0;

  const [exportSuccessMessage, setExportSuccessMessage] = useState<string | null>(null);
  const jsonFileInputRef = useRef<HTMLInputElement>(null);

  // Complete Lossless JSON Backup
  const exportAttemptsToJSON = (attemptsToExport: StudentAttempt[]) => {
    if (!attemptsToExport || attemptsToExport.length === 0) {
      alert('No hay intentos guardados para respaldar.');
      return;
    }
    const dataStr = JSON.stringify(attemptsToExport, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const now = new Date();
    const dateFormatted = now.toISOString().slice(0, 10);
    link.href = url;
    link.download = `NEXORA_Respaldo_Calificaciones_Completo_${dateFormatted}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setExportSuccessMessage(`¡Respaldo JSON completo generado con éxito! (${attemptsToExport.length} evaluaciones con respuestas y métricas).`);
    setTimeout(() => setExportSuccessMessage(null), 5000);
  };

  // Restore from JSON backup
  const handleJSONFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);
        if (!Array.isArray(parsed)) {
          alert('El archivo no contiene una lista de intentos válida.');
          return;
        }

        const validAttempts = parsed.filter(item => item && item.id && item.studentName && typeof item.totalScore === 'number');
        if (validAttempts.length === 0) {
          alert('No se encontraron evaluaciones válidas en el archivo JSON.');
          return;
        }

        if (onRestoreAttempts) {
          onRestoreAttempts(validAttempts);
          setExportSuccessMessage(`¡Se restauraron exitosamente ${validAttempts.length} evaluaciones desde el archivo JSON!`);
          setTimeout(() => setExportSuccessMessage(null), 5000);
        }
      } catch {
        alert('Error al leer el archivo JSON. Asegúrate de que no esté dañado.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Dedicated export function to generate a rich CSV optimized for Microsoft Excel
  const exportAttemptsToCSV = (attemptsToExport: StudentAttempt[], customLabel?: string) => {
    if (!attemptsToExport || attemptsToExport.length === 0) {
      alert('No hay intentos guardados para exportar.');
      return;
    }

    const now = new Date();
    const exportDateStr = now.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const exportTimeStr = now.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const avgScore = (
      attemptsToExport.reduce((acc, curr) => acc + curr.totalScore, 0) / attemptsToExport.length
    ).toFixed(2);
    const avgPct = Math.round(
      attemptsToExport.reduce((acc, curr) => acc + curr.percentage, 0) / attemptsToExport.length
    );

    // UTF-8 BOM (\uFEFF) ensures Microsoft Excel recognizes special Spanish characters (tildes, ñ)
    let csvContent = '\uFEFF';

    // Summary metadata header for teachers
    csvContent += `NEXORA - REGISTRO OFICIAL DE CALIFICACIONES\n`;
    csvContent += `Lema:,"«Activa tu mente. Expande tu futuro»"\n`;
    csvContent += `Generado el:,"${exportDateStr} a las ${exportTimeStr}"\n`;
    csvContent += `Tipo de Reporte:,"${customLabel || 'Histórico Completo de Intentos'}"\n`;
    csvContent += `Total de Evaluaciones:,"${attemptsToExport.length}"\n`;
    csvContent += `Promedio General del Grupo:,"${avgScore} / 30 (${avgPct}%)"\n`;
    csvContent += `Criterio de Aprobación:,"Mínimo 18 puntos (60%)"\n\n`;

    // Table Column Headers
    const headers = [
      'N°',
      'ID Intento',
      'Nombre del Estudiante',
      'Prueba / Temario',
      'Fecha',
      'Hora',
      'Puntaje (/30)',
      'Puntaje Máximo',
      'Nota (Escala 0-10)',
      'Efectividad (%)',
      'Nivel de Dominio',
      'Condición Académica',
      'Tiempo Empleado',
      'Sección 1',
      'Sección 2',
      'Sección 3'
    ];
    csvContent += headers.map(h => `"${h}"`).join(',') + '\n';

    // Data rows
    attemptsToExport.forEach((att, index) => {
      const dateObj = new Date(att.date);
      const rowDate = !isNaN(dateObj.getTime())
        ? dateObj.toLocaleDateString('es-ES')
        : 'N/A';
      const rowTime = !isNaN(dateObj.getTime())
        ? dateObj.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
        : 'N/A';

      const nota10 = ((att.totalScore / 30) * 10).toFixed(2);
      const condicion = att.totalScore >= 18 ? 'APROBADO' : 'REQUIERE REFUERZO';

      const sec1 = att.sectionScores?.[0] ? `${att.sectionScores[0].title}: ${att.sectionScores[0].correctCount}/${att.sectionScores[0].totalQuestions} (${att.sectionScores[0].percentage}%)` : 'N/A';
      const sec2 = att.sectionScores?.[1] ? `${att.sectionScores[1].title}: ${att.sectionScores[1].correctCount}/${att.sectionScores[1].totalQuestions} (${att.sectionScores[1].percentage}%)` : 'N/A';
      const sec3 = att.sectionScores?.[2] ? `${att.sectionScores[2].title}: ${att.sectionScores[2].correctCount}/${att.sectionScores[2].totalQuestions} (${att.sectionScores[2].percentage}%)` : 'N/A';

      const rowValues = [
        index + 1,
        att.id,
        att.studentName.replace(/"/g, '""'),
        att.examTitle.replace(/"/g, '""'),
        rowDate,
        rowTime,
        att.totalScore,
        30,
        nota10,
        `${att.percentage}%`,
        att.overallLevel,
        condicion,
        formatTime(att.durationSeconds),
        sec1.replace(/"/g, '""'),
        sec2.replace(/"/g, '""'),
        sec3.replace(/"/g, '""')
      ];

      csvContent += rowValues.map(v => `"${v}"`).join(',') + '\n';
    });

    // Create and trigger blob download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const dateFormatted = now.toISOString().slice(0, 10);
    link.download = `Registro_Estudiantes_Diagnostico_${dateFormatted}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setExportSuccessMessage(`Se descargó exitosamente el archivo CSV con ${attemptsToExport.length} intento(s) para Excel.`);
    setTimeout(() => setExportSuccessMessage(null), 4500);
  };

  const getLevelBadge = (level: string) => {
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
      {/* Top Banner: Registry Header */}
      <div className="bg-gradient-to-r from-[#10152B] via-[#161F3F] to-[#10152B] rounded-3xl p-4 sm:p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#65D8FF]/20">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-[#65D8FF]/30 text-[#65D8FF]">
            <Users className="w-4 h-4 text-[#65D8FF]" />
            <span>NEXORA • Gestión Académica y Calificaciones</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Registro de Estudiantes y Desempeño
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            «Activa tu mente. Expande tu futuro» — Consulta y analiza las evaluaciones de los estudiantes, puntajes obtenidos, tiempo empleado y nivel de dominio alcanzado.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
          {onOpenShareModal && (
            <button
              onClick={onOpenShareModal}
              className="px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-[#175CD3] via-[#A994FF] to-[#FF78C8] hover:opacity-95 text-white shadow-md transition-all cursor-pointer active:scale-98"
              title="Obtener enlace seguro exclusivo para que los alumnos no puedan modificar"
            >
              <Share2 className="w-4 h-4 text-white" />
              <span>URL para Alumnos</span>
            </button>
          )}

          <button
            onClick={() => exportAttemptsToCSV(attempts, 'Libro Completo de Calificaciones')}
            disabled={attempts.length === 0}
            className={`px-3.5 py-2.5 rounded-xl font-bold flex items-center gap-2 text-xs sm:text-sm transition-all shadow-md ${
              attempts.length > 0
                ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 cursor-pointer active:scale-98'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
            title="Descargar toda la lista de intentos en formato CSV para abrir en Microsoft Excel"
          >
            <FileSpreadsheet className="w-4 h-4 text-slate-950" />
            <span>Excel (CSV)</span>
          </button>

          <button
            onClick={() => exportAttemptsToJSON(attempts)}
            disabled={attempts.length === 0}
            className={`px-3.5 py-2.5 rounded-xl font-bold flex items-center gap-2 text-xs sm:text-sm transition-all shadow-md ${
              attempts.length > 0
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer active:scale-98'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
            title="Descargar copia de seguridad completa con respuestas y preguntas en formato JSON"
          >
            <FileJson className="w-4 h-4 text-white" />
            <span>Respaldo JSON</span>
          </button>

          <input
            type="file"
            ref={jsonFileInputRef}
            onChange={handleJSONFileChange}
            accept=".json,application/json"
            className="hidden"
          />

          <button
            onClick={() => jsonFileInputRef.current?.click()}
            className="px-3.5 py-2.5 rounded-xl font-semibold flex items-center gap-2 text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 shadow-md transition-all cursor-pointer active:scale-98"
            title="Restaurar o importar evaluaciones desde un archivo de respaldo JSON"
          >
            <Upload className="w-4 h-4 text-slate-300" />
            <span>Restaurar JSON</span>
          </button>

          {attempts.length === 0 && (
            <button
              onClick={onLoadSampleStudents}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Cargar Estudiantes Demo</span>
            </button>
          )}

          {attempts.length > 0 && (
            <button
              onClick={onClearAllAttempts}
              className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-rose-900/60 border border-slate-700 text-slate-300 hover:text-rose-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Borrar todos los registros"
            >
              <Trash2 className="w-4 h-4" />
              <span>Limpiar Historial</span>
            </button>
          )}
        </div>
      </div>

      {/* Download Success Feedback Toast */}
      {exportSuccessMessage && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center justify-between gap-3 shadow-md animate-fadeIn">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-sm font-medium">{exportSuccessMessage}</span>
          </div>
          <button
            onClick={() => setExportSuccessMessage(null)}
            className="text-emerald-700 hover:text-emerald-950 text-xs font-bold underline"
          >
            Cerrar
          </button>
        </div>
      )}

      {/* Analytics Summary Cards - Separate Total Attempts and Distinct Students */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider">
            Total Registros
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-900">{totalAttempts}</span>
            <span className="text-xs text-slate-500">intentos</span>
          </div>
          <span className="block text-[11px] text-slate-500 truncate">
            {officialCount} oficiales • {practiceCount} prácticas
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider">
            Alumnos Oficiales
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-indigo-600">{distinctStudentsCount}</span>
            <span className="text-xs text-slate-500">únicos</span>
          </div>
          <span className="block text-[11px] text-slate-500">
            En exámenes oficiales
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider">
            Promedio Oficial
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-blue-600">{averageScore}</span>
            <span className="text-xs font-semibold text-slate-500">/ 30 ({averagePercentage}%)</span>
          </div>
          <span className="block text-[10px] text-emerald-700 font-semibold truncate">
            ✓ Excluye prácticas e históricos
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider">
            Puntaje Máx Oficial
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-emerald-600">{highestScore}</span>
            <span className="text-xs font-semibold text-slate-500">/ 30 pts</span>
          </div>
          <span className="block text-[11px] text-slate-500">
            Mejor calificación formal
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1 col-span-2 sm:col-span-1">
          <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider">
            Tasa Aprobación
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-violet-600">{passingRate}%</span>
            <span className="text-xs text-slate-500">(≥18 pts)</span>
          </div>
          <span className="block text-[11px] text-slate-500">
            Sobre exámenes oficiales
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        {/* Main Controls Row */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Search Query Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre de estudiante, prueba o ID..."
              className="w-full pl-10 pr-9 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200 transition-colors"
                title="Borrar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Modalidad Filter */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span className="font-semibold text-slate-700 hidden sm:inline">Modalidad:</span>
              <select
                value={filterMode}
                onChange={(e) => setFilterMode(e.target.value as any)}
                className="bg-transparent text-xs font-medium focus:outline-none cursor-pointer text-slate-800"
              >
                <option value="all">Todas ({totalAttempts})</option>
                <option value="exam">📝 Oficiales ({officialCount})</option>
                <option value="practice">💡 Prácticas ({practiceCount})</option>
                {historicalCount > 0 && (
                  <option value="historico">📜 Históricos ({historicalCount})</option>
                )}
              </select>
            </div>

            {/* Performance Level Filter */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl">
              <Filter className="w-3.5 h-3.5 text-indigo-600" />
              <span className="font-semibold text-slate-700 hidden sm:inline">Nivel:</span>
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="bg-transparent text-xs font-medium focus:outline-none cursor-pointer text-slate-800"
              >
                <option value="all">Todos los niveles</option>
                <option value="Sobresaliente">⭐ Sobresaliente (85% - 100%)</option>
                <option value="Avanzado">🔷 Avanzado (70% - 84%)</option>
                <option value="Intermedio">🔶 Intermedio (50% - 69%)</option>
                <option value="Inicial">🔻 Inicial / Refuerzo (&lt; 50%)</option>
              </select>
            </div>

            {/* Date Range Preset Filter */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl">
              <Calendar className="w-3.5 h-3.5 text-indigo-600" />
              <span className="font-semibold text-slate-700 hidden sm:inline">Fecha:</span>
              <select
                value={datePreset}
                onChange={(e) => setDatePreset(e.target.value as any)}
                className="bg-transparent text-xs font-medium focus:outline-none cursor-pointer text-slate-800"
              >
                <option value="all">Todas las fechas</option>
                <option value="today">Hoy</option>
                <option value="last7">Últimos 7 días</option>
                <option value="last30">Últimos 30 días</option>
                <option value="custom">Rango personalizado...</option>
              </select>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs font-medium focus:outline-none cursor-pointer text-slate-800"
              >
                <option value="date-desc">Más reciente primero</option>
                <option value="date-asc">Más antiguo primero</option>
                <option value="score-desc">Mayor puntaje</option>
                <option value="score-asc">Menor puntaje</option>
                <option value="name-asc">Nombre (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Custom Date Range Pickers (Rendered if 'custom' is selected) */}
        {datePreset === 'custom' && (
          <div className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100 flex flex-wrap items-center gap-4 text-xs text-slate-700 animate-fadeIn">
            <span className="font-bold text-indigo-900 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-600" />
              <span>Rango de fechas específico:</span>
            </span>
            <div className="flex items-center gap-2">
              <label className="text-slate-500 font-medium">Desde:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="px-2.5 py-1 text-xs border border-indigo-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-800"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-slate-500 font-medium">Hasta:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="px-2.5 py-1 text-xs border border-indigo-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-800"
              />
            </div>
            {(startDate || endDate) && (
              <button
                onClick={() => {
                  setStartDate('');
                  setEndDate('');
                }}
                className="text-[11px] text-indigo-600 hover:text-indigo-800 underline font-semibold"
              >
                Limpiar fechas
              </button>
            )}
          </div>
        )}

        {/* Active Filter Chips & Results Count Bar */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 font-medium">
              Mostrando <strong className="text-slate-900">{filteredAttempts.length}</strong> de <strong>{attempts.length}</strong> evaluaciones
            </span>

            {hasActiveFilters && (
              <>
                <span className="text-slate-300">•</span>

                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
                    Texto: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="hover:text-indigo-950">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {filterLevel !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
                    Nivel: {filterLevel}
                    <button onClick={() => setFilterLevel('all')} className="hover:text-indigo-950">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {datePreset !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
                    Fecha: {datePreset === 'today' ? 'Hoy' : datePreset === 'last7' ? '7 días' : datePreset === 'last30' ? '30 días' : 'Personalizada'}
                    <button onClick={() => { setDatePreset('all'); setStartDate(''); setEndDate(''); }} className="hover:text-indigo-950">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                <button
                  onClick={handleResetFilters}
                  className="text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer ml-1"
                >
                  Restablecer filtros
                </button>
              </>
            )}
          </div>

          {/* Quick Export for Currently Filtered View */}
          {filteredAttempts.length > 0 && (
            <button
              onClick={() => exportAttemptsToCSV(
                filteredAttempts,
                hasActiveFilters ? `Selección Filtrada (${filteredAttempts.length} registros)` : 'Libro General de Calificaciones'
              )}
              className="px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ml-auto"
              title="Descargar esta selección visible en CSV para Excel"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Exportar Selección ({filteredAttempts.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Student List / Table */}
      {filteredAttempts.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
          <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
            <Users className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-800">
              {attempts.length === 0 ? 'Aún no hay estudiantes registrados' : 'No se encontraron coincidencias'}
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              {attempts.length === 0
                ? 'Cuando los estudiantes finalicen su prueba diagnóstica, aparecerán listados aquí con su puntaje y análisis.'
                : 'Intenta ajustar tus filtros de búsqueda o nombre.'}
            </p>
          </div>

          {attempts.length === 0 && (
            <button
              onClick={onLoadSampleStudents}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Cargar 5 Estudiantes de Ejemplo</span>
            </button>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Estudiante</th>
                  <th className="py-4 px-4">Prueba / Banco</th>
                  <th className="py-4 px-4 text-center">Puntaje (/30)</th>
                  <th className="py-4 px-4 text-center">Nivel</th>
                  <th className="py-4 px-4">Fecha y Hora</th>
                  <th className="py-4 px-4 text-center">Tiempo</th>
                  <th className="py-4 px-6 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredAttempts.map((att) => {
                  const initials = att.studentName
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2) || 'ES';
                  
                  const dateObj = new Date(att.date);
                  const formattedDate = dateObj.toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  });
                  const formattedTime = dateObj.toLocaleTimeString('es-ES', {
                    hour: '2-digit',
                    minute: '2-digit'
                  });

                  return (
                    <tr key={att.id} className="hover:bg-slate-50/70 transition-colors">
                      {/* Student info */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs shrink-0">
                            {initials}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block">
                              {att.studentName}
                            </span>
                            <span className="text-xs text-slate-400">
                              ID: {att.id.slice(0, 8)}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Exam Title & Mode Badge */}
                      <td className="py-4 px-4">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-slate-800 block truncate max-w-[220px]" title={att.examTitle}>
                            {att.examTitle}
                          </span>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {att.isAbandoned ? (
                              <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-rose-50 text-rose-700 border border-rose-200">
                                ⚠️ Abandonado
                              </span>
                            ) : att.mode === 'exam' ? (
                              <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-blue-50 text-blue-700 border border-blue-200">
                                📝 Examen Oficial
                              </span>
                            ) : att.mode === 'practice' ? (
                              <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-amber-50 text-amber-700 border border-amber-200">
                                💡 Práctica Formativa
                              </span>
                            ) : (
                              <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-slate-100 text-slate-600 border border-slate-200">
                                📜 Histórico sin clasificar
                              </span>
                            )}
                            {att.isStrict && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold" title="Evaluación realizada mediante enlace protegido asignado por docente">
                                Modo Estricto
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-1 mt-1.5 text-[11px] text-slate-500">
                          {att.sectionScores?.map(s => (
                            <span key={s.sectionId} className="bg-slate-100 px-1.5 py-0.2 rounded font-mono text-[10px]">
                              {s.title.slice(0, 3)}: {s.correctCount}/{s.totalQuestions}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Score */}
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex flex-col items-center">
                          <span className="text-lg font-black text-slate-900">
                            {att.totalScore} <span className="text-xs font-normal text-slate-400">/ 30</span>
                          </span>
                          <span className="text-xs font-semibold text-indigo-600">
                            {att.percentage}%
                          </span>
                        </div>
                      </td>

                      {/* Level */}
                      <td className="py-4 px-4 text-center">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold border ${getLevelBadge(att.overallLevel)}`}>
                          {att.overallLevel}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-4 text-xs text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 mt-0.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{formattedTime}</span>
                        </div>
                      </td>

                      {/* Duration */}
                      <td className="py-4 px-4 text-center text-xs font-mono text-slate-600">
                        {formatTime(att.durationSeconds)}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setSelectedCertificateAttempt(att)}
                            className="p-2 rounded-lg text-amber-600 hover:bg-amber-50 transition-colors"
                            title="Ver constancia de este estudiante"
                          >
                            <Award className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onViewStudentExam(att)}
                            className="p-2 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors"
                            title="Ver revisión completa del examen"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onDeleteAttempt(att.id)}
                            className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                            title="Eliminar este registro"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Certificate Modal for Student from Registry */}
      {selectedCertificateAttempt && (
        <LazyErrorBoundary isModal onCloseModal={() => setSelectedCertificateAttempt(null)}>
          <Suspense fallback={<LazyFallback isModal label="Generando Diploma de Reconocimiento..." />}>
            <CertificateModal
              studentName={selectedCertificateAttempt.studentName}
              analysis={{
                totalScore: selectedCertificateAttempt.totalScore,
                maxScore: selectedCertificateAttempt.maxScore,
                percentage: selectedCertificateAttempt.percentage,
                durationSeconds: selectedCertificateAttempt.durationSeconds,
                overallLevel: selectedCertificateAttempt.overallLevel,
                levelDescription: `Evaluación completada para la prueba: ${selectedCertificateAttempt.examTitle}.`,
                sectionScores: selectedCertificateAttempt.sectionScores || [],
                strengths: [],
                areasToImprove: [],
                recommendations: []
              }}
              onClose={() => setSelectedCertificateAttempt(null)}
            />
          </Suspense>
        </LazyErrorBoundary>
      )}
    </div>
  );
};
