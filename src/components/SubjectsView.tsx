import React, { useState } from 'react';
import { 
  Calculator, 
  BookOpen, 
  Brain, 
  Leaf, 
  Atom, 
  FlaskConical, 
  Dna, 
  Languages, 
  Globe2, 
  Zap, 
  Cpu, 
  Wrench,
  Search,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Table,
  CheckCircle2,
  FileText,
  Check
} from 'lucide-react';
import { NEXORA_SUBJECTS, getQuestionsCoverageReport, SubjectInfo } from '../data/subjectsData';

interface SubjectsViewProps {
  onSelectSubjectForExam: (subjectId: string) => void;
}

export const SubjectsView: React.FC<SubjectsViewProps> = ({ onSelectSubjectForExam }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [showCoverageReport, setShowCoverageReport] = useState<boolean>(false);
  const [activeSubjectCardId, setActiveSubjectCardId] = useState<string | null>(null);

  const categories = ['Todas', 'Troncales', 'Ciencias', 'Humanidades', 'Técnicas'];
  const coverageData = getQuestionsCoverageReport();

  const filteredSubjects = NEXORA_SUBJECTS.filter((subject) => {
    const matchesSearch = 
      subject.name.toLowerCase().includes(search.toLowerCase().trim()) ||
      subject.shortDescription.toLowerCase().includes(search.toLowerCase().trim());
    const matchesCategory = selectedCategory === 'Todas' || subject.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderSubjectIcon = (iconName: string, isSelected: boolean) => {
    const iconClass = `w-6 h-6 transition-transform ${isSelected ? 'text-white' : 'text-white'}`;
    switch (iconName) {
      case 'Calculator': return <Calculator className={iconClass} />;
      case 'BookOpen': return <BookOpen className={iconClass} />;
      case 'Brain': return <Brain className={iconClass} />;
      case 'Leaf': return <Leaf className={iconClass} />;
      case 'Atom': return <Atom className={iconClass} />;
      case 'FlaskConical': return <FlaskConical className={iconClass} />;
      case 'Dna': return <Dna className={iconClass} />;
      case 'Languages': return <Languages className={iconClass} />;
      case 'Globe2': return <Globe2 className={iconClass} />;
      case 'Zap': return <Zap className={iconClass} />;
      case 'Cpu': return <Cpu className={iconClass} />;
      case 'Wrench': return <Wrench className={iconClass} />;
      default: return <GraduationCap className={iconClass} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8 animate-fadeIn pb-24">
      
      {/* Hero Header with Refined Liquid Glass style */}
      <div className="liquid-glass-card bg-gradient-to-r from-[#10152B] via-[#161F3F] to-[#10152B] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-slate-800 dark:border-[#65D8FF]/30 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-[#65D8FF]/30 text-[#65D8FF]">
            <Sparkles className="w-4 h-4 text-[#FFD166]" />
            <span>NEXORA • 12 Materias y 5 Niveles Educativos</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            Explora las 12 Asignaturas Académicas
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            «Activa tu mente. Expande tu futuro» — Banco curricular completo organizado por Básico, Intermedio, Bachillerato, Técnico y Universitario.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowCoverageReport(!showCoverageReport)}
              className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-[#65D8FF]/40 text-xs font-bold text-white flex items-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <Table className="w-4 h-4 text-[#65D8FF]" />
              <span>{showCoverageReport ? 'Ocultar Matriz de Cobertura' : '📊 Ver Matriz Oficial de Cobertura (12 Materias)'}</span>
            </button>
            <span className="text-xs text-slate-300 font-medium">
              Total verificado en plataforma: <strong className="text-[#65D8FF] font-black">{coverageData.totalQuestionsAcrossPlatform} reactivos</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Official Coverage Report Matrix Table */}
      {showCoverageReport && (
        <div className="liquid-glass-card bg-white dark:bg-[#10152B] rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-[#65D8FF]/30 shadow-xl space-y-4 animate-slideUp backdrop-blur-xl text-slate-800 dark:text-slate-100">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 flex-wrap gap-2">
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Auditoría de Cobertura por Materia y Nivel Educativo</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Distribución de reactivos validados pedagógicamente en los 5 niveles exigidos
              </p>
            </div>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-[#65D8FF] border border-indigo-200 dark:border-indigo-800">
              {coverageData.totalUniqueIds} IDs únicos
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-2.5 px-3">Asignatura</th>
                  <th className="py-2.5 px-2">Categoría</th>
                  <th className="py-2.5 px-2 text-center">Básico</th>
                  <th className="py-2.5 px-2 text-center">Intermedio</th>
                  <th className="py-2.5 px-2 text-center">Bachillerato</th>
                  <th className="py-2.5 px-2 text-center">Técnico</th>
                  <th className="py-2.5 px-2 text-center">Universitario</th>
                  <th className="py-2.5 px-3 text-right">Total Validado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium text-slate-700 dark:text-slate-300">
                {coverageData.rows.map((row) => (
                  <tr key={row.subjectId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                      {row.subjectName}
                    </td>
                    <td className="py-2.5 px-2 text-slate-500">
                      {row.category}
                    </td>
                    <td className="py-2.5 px-2 text-center font-mono">
                      <span className={row.basico > 0 ? "text-emerald-600 dark:text-emerald-400 font-bold" : "text-slate-400"}>
                        {row.basico}
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-center font-mono">
                      <span className={row.intermedio > 0 ? "text-indigo-600 dark:text-indigo-400 font-bold" : "text-slate-400"}>
                        {row.intermedio}
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-center font-mono">
                      <span className={row.bachillerato > 0 ? "text-purple-600 dark:text-purple-400 font-bold" : "text-slate-400"}>
                        {row.bachillerato}
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-center font-mono">
                      <span className={row.tecnico > 0 ? "text-amber-600 dark:text-amber-400 font-bold" : "text-slate-400"}>
                        {row.tecnico}
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-center font-mono">
                      <span className={row.universitario > 0 ? "text-cyan-600 dark:text-cyan-400 font-bold" : "text-slate-400"}>
                        {row.universitario}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-slate-900 dark:text-white font-mono">
                      {row.totalValid} reactivos
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#175CD3] to-indigo-600 dark:from-[#65D8FF] dark:to-[#A994FF] text-white dark:text-slate-950 shadow-sm font-black'
                  : 'bg-white dark:bg-[#10152B] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-2xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar materia o tema..."
            className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#10152B] text-slate-900 dark:text-slate-100 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#175CD3]/30 dark:focus:ring-[#65D8FF]/30 focus:border-[#175CD3] dark:focus:border-[#65D8FF] shadow-2xs"
          />
        </div>
      </div>

      {/* Grid of 12 Subjects with Liquid Glass styling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSubjects.map((subject) => {
          const count = subject.questions.length;
          const isSelected = activeSubjectCardId === subject.id;

          return (
            <div
              key={subject.id}
              onClick={() => setActiveSubjectCardId(isSelected ? null : subject.id)}
              className={`rounded-3xl p-6 border transition-all duration-300 hover-lift flex flex-col justify-between group cursor-pointer relative overflow-hidden select-none ${
                isSelected
                  ? 'bg-gradient-to-tr from-indigo-50 via-sky-50 to-white dark:from-[#161F3F] dark:via-[#121B3A] dark:to-[#10152B] border-[#175CD3] dark:border-[#65D8FF] ring-2 ring-[#175CD3]/30 dark:ring-[#65D8FF]/40 shadow-lg'
                  : 'bg-white dark:bg-[#10152B] border-slate-200/90 dark:border-slate-800/80 hover:border-indigo-300 dark:hover:border-[#65D8FF]/40 shadow-xs hover:shadow-xl'
              }`}
            >
              {/* Subtle accent glow top border when selected */}
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#175CD3] via-[#65D8FF] to-[#A994FF]" />
              )}

              <div className="space-y-4">
                {/* Header row: Icon + Category Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${subject.gradient} flex items-center justify-center shadow-md shadow-indigo-500/15 shrink-0 group-hover:scale-105 transition-transform`}>
                    {renderSubjectIcon(subject.iconName, isSelected)}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-indigo-700 dark:text-[#65D8FF] bg-indigo-100 dark:bg-indigo-950/90 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-[#65D8FF]/40">
                        <Check className="w-3 h-3 stroke-[3]" />
                        <span>Activa</span>
                      </span>
                    )}
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {subject.badge}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className={`text-lg font-black tracking-tight transition-colors ${
                    isSelected 
                      ? 'text-indigo-950 dark:text-white' 
                      : 'text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#65D8FF]'
                  }`}>
                    {subject.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 font-normal">
                    {subject.shortDescription}
                  </p>
                </div>
              </div>

              {/* Footer row: Questions count + Action Button */}
              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  <strong className="text-indigo-700 dark:text-[#65D8FF] font-black">{count} reactivos</strong> verificados
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSubjectForExam(subject.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#175CD3] to-[#65D8FF] text-white hover:opacity-95'
                      : 'bg-slate-900 hover:bg-indigo-700 text-white dark:bg-gradient-to-r dark:from-[#65D8FF] dark:to-[#A994FF] dark:text-slate-950 dark:hover:opacity-95'
                  }`}
                >
                  <span>Evaluar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
