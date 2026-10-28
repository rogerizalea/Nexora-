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
  HelpCircle,
  GraduationCap
} from 'lucide-react';
import { NEXORA_SUBJECTS, SubjectInfo } from '../data/subjectsData';

interface SubjectsViewProps {
  onSelectSubjectForExam: (subjectId: string) => void;
}

export const SubjectsView: React.FC<SubjectsViewProps> = ({ onSelectSubjectForExam }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Troncales', 'Ciencias', 'Humanidades', 'Técnicas'];

  const filteredSubjects = NEXORA_SUBJECTS.filter((subject) => {
    const matchesSearch = 
      subject.name.toLowerCase().includes(search.toLowerCase().trim()) ||
      subject.shortDescription.toLowerCase().includes(search.toLowerCase().trim());
    const matchesCategory = selectedCategory === 'Todas' || subject.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderSubjectIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-white" };
    switch (iconName) {
      case 'Calculator': return <Calculator {...iconProps} />;
      case 'BookOpen': return <BookOpen {...iconProps} />;
      case 'Brain': return <Brain {...iconProps} />;
      case 'Leaf': return <Leaf {...iconProps} />;
      case 'Atom': return <Atom {...iconProps} />;
      case 'FlaskConical': return <FlaskConical {...iconProps} />;
      case 'Dna': return <Dna {...iconProps} />;
      case 'Languages': return <Languages {...iconProps} />;
      case 'Globe2': return <Globe2 {...iconProps} />;
      case 'Zap': return <Zap {...iconProps} />;
      case 'Cpu': return <Cpu {...iconProps} />;
      case 'Wrench': return <Wrench {...iconProps} />;
      default: return <GraduationCap {...iconProps} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#10152B] via-[#161F3F] to-[#10152B] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-[#65D8FF]/20 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-[#65D8FF]/30 text-[#65D8FF]">
            <Sparkles className="w-4 h-4 text-[#FFD166]" />
            <span>NEXORA • 12 Materias Educativas Integradas</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
            Explora las 12 Asignaturas Académicas
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            «Activa tu mente. Expande tu futuro» — Selecciona cualquier asignatura para evaluar tus conocimientos con preguntas formativas, retroalimentación paso a paso y desafíos personalizados.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar materia..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
      </div>

      {/* Grid of 12 Subjects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSubjects.map((subject) => {
          const count = subject.questions.length;
          return (
            <div
              key={subject.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800/80 shadow-xs hover:shadow-lg transition-all duration-300 hover-lift flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header row: Icon + Category Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${subject.gradient} flex items-center justify-center shadow-md shadow-indigo-500/10 shrink-0 group-hover:scale-105 transition-transform`}>
                    {renderSubjectIcon(subject.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {subject.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#65D8FF] transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {subject.shortDescription}
                  </p>
                </div>
              </div>

              {/* Footer row: Questions count + Action Button */}
              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/70 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {count > 0 ? (
                    <strong className="text-indigo-600 dark:text-[#65D8FF]">{count} reactivos</strong>
                  ) : (
                    <span>En preparación</span>
                  )}
                </span>

                <button
                  onClick={() => onSelectSubjectForExam(subject.id)}
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95"
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
