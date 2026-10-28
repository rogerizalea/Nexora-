import React, { useState } from 'react';
import { Section, ExamBank } from '../types';
import { generateAppsScriptForBank } from '../data/questionBanks';
import { 
  FileCode, 
  Copy, 
  Check, 
  ExternalLink, 
  Download, 
  CheckCircle2, 
  HelpCircle,
  FileSpreadsheet,
  FileJson,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { DynamicTitle } from './DynamicTitle';

interface GoogleFormsHubProps {
  currentBank: ExamBank;
}

export const GoogleFormsHub: React.FC<GoogleFormsHubProps> = ({ currentBank }) => {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(1);

  const dynamicScriptSource = generateAppsScriptForBank(currentBank);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(dynamicScriptSource);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = dynamicScriptSource;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadScript = () => {
    const blob = new Blob([dynamicScriptSource], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `crearPrueba_${currentBank.id}.gs`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadJSON = () => {
    const exportData = {
      title: `${currentBank.title} - 30 preguntas`,
      description: `${currentBank.description} Total: 30 puntos.`,
      totalPoints: 30,
      bankId: currentBank.id,
      sections: currentBank.sections.map(sec => ({
        id: sec.id,
        title: sec.title,
        questions: sec.questions.map(q => ({
          number: q.number,
          question: q.text,
          options: q.options,
          correctAnswerIndex: q.correctIndex,
          correctAnswerText: q.options[q.correctIndex],
          skill: q.skill,
          explanation: q.explanation
        }))
      }))
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `prueba_${currentBank.id}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#10152B] via-[#161F3F] to-[#10152B] rounded-3xl p-4 sm:p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#65D8FF]/20">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-[#65D8FF]/30 text-[#65D8FF]">
            <FileCode className="w-4 h-4 text-[#65D8FF]" />
            <span>Automatización para Google Forms</span>
          </div>
          <div className="pt-1">
            <DynamicTitle 
              title="NEXORA"
              subtitle="«Activa tu mente. Expande tu futuro» • Generador Google Forms"
              size="2xl"
              intervalSeconds={3.5}
              showBadge={true}
            />
          </div>
          <p className="text-sm sm:text-base text-indigo-100/90 leading-relaxed">
            Ejecuta el script oficial <code className="bg-white/20 px-2 py-0.5 rounded font-mono text-white text-xs">crearPruebaDiagnostico()</code> para crear automáticamente en tu Google Drive el formulario con las 30 preguntas, claves y puntaje de 30 puntos configurado.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <button
            onClick={handleCopyCode}
            className={`px-5 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
              copied
                ? 'bg-emerald-400 text-slate-950 scale-102'
                : 'bg-white text-indigo-900 hover:bg-indigo-50'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-slate-950 stroke-[3]" />
                <span>¡Código Copiado al Portapapeles!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 text-indigo-700" />
                <span>Copiar Código Apps Script</span>
              </>
            )}
          </button>

          <a
            href="https://script.new"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-indigo-950/40 hover:bg-indigo-950/60 border border-white/20 text-white font-semibold flex items-center justify-center gap-2 transition-colors text-sm"
          >
            <span>Abrir script.new</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Step by Step Visual Guide */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Instrucciones para Crear el Formulario en 60 Segundos
          </h2>
          <p className="text-xs text-slate-500">
            Sigue estos 4 sencillos pasos para que Google Forms construya el cuestionario completo en tu cuenta personal o institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: 1,
              title: "1. Abre Google Apps Script",
              desc: "Ve a script.new en tu navegador con tu sesión de Google activa.",
              badge: "script.new"
            },
            {
              step: 2,
              title: "2. Pega el código",
              desc: "Reemplaza cualquier contenido en el editor 'Código.gs' con el código copiado.",
              badge: "Ctrl + V / Cmd + V"
            },
            {
              step: 3,
              title: "3. Haz clic en Ejecutar",
              desc: "Selecciona la función 'crearPruebaDiagnostico' y pulsa 'Ejecutar'. Acepta permisos de Drive.",
              badge: "▶ Ejecutar"
            },
            {
              step: 4,
              title: "4. ¡Listo! Abre el enlace",
              desc: "En el Registro de ejecución inferior aparecerá el enlace directo para compartir con tus alumnos.",
              badge: "Logger.log()"
            }
          ].map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3 relative hover:border-indigo-300 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                {item.step}
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              <span className="inline-block px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-indigo-700">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Code Viewer Box */}
      <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4 text-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-rose-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-bold text-slate-400 pl-2">
              crearPrueba_{currentBank.id}.gs ({currentBank.title})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
            </button>

            <button
              onClick={handleDownloadScript}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Descargar archivo .gs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar .gs</span>
            </button>

            <button
              onClick={handleDownloadJSON}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Descargar banco en JSON"
            >
              <FileJson className="w-3.5 h-3.5" />
              <span>Exportar JSON</span>
            </button>
          </div>
        </div>

        {/* Code Content */}
        <pre className="overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-indigo-100 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 max-h-[500px] scrollbar-thin">
          <code>{dynamicScriptSource}</code>
        </pre>
      </div>

      {/* Feature Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <Layers className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">3 Secciones con Saltos de Página</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Utiliza <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">form.addPageBreakItem()</code> para que los alumnos respondan ordenadamente sección tras sección.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Autocalificación Activa (30 Puntos)</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Habilitado con <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">form.setIsQuiz(true)</code> con 1 punto asignado a cada reactivo y clave de corrección.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Sin Recopilación de Correo Forzosa</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Configurado con <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">setCollectEmail(false)</code> para agilizar la aplicación en aulas sin necesidad de inicio de sesión obligatorio.
          </p>
        </div>
      </div>
    </div>
  );
};
