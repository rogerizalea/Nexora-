import { Question, Section, SectionScore, DiagnosticAnalysis } from '../types';

export function calculateDiagnostic(
  sections: Section[],
  answers: Record<string, number>,
  startTime: number | null,
  endTime: number | null
): DiagnosticAnalysis {
  let totalScore = 0;
  const allQuestions = sections.flatMap(s => s.questions);
  const maxScore = allQuestions.length; // 30

  const sectionScores: SectionScore[] = sections.map(section => {
    let sectionCorrect = 0;
    section.questions.forEach(q => {
      if (answers[q.id] === q.correctIndex) {
        sectionCorrect++;
        totalScore++;
      }
    });

    const percentage = Math.round((sectionCorrect / section.questions.length) * 100);
    let status: SectionScore['status'] = 'Requiere Refuerzo';
    let color = 'text-amber-600 bg-amber-50 border-amber-200';

    if (percentage >= 85) {
      status = 'Excelente';
      color = 'text-emerald-700 bg-emerald-50 border-emerald-200';
    } else if (percentage >= 70) {
      status = 'Satisfactorio';
      color = 'text-blue-700 bg-blue-50 border-blue-200';
    } else if (percentage >= 50) {
      status = 'En Desarrollo';
      color = 'text-amber-700 bg-amber-50 border-amber-200';
    } else {
      status = 'Requiere Refuerzo';
      color = 'text-rose-700 bg-rose-50 border-rose-200';
    }

    return {
      sectionId: section.id,
      title: section.shortTitle,
      totalQuestions: section.questions.length,
      correctCount: sectionCorrect,
      percentage,
      status,
      color
    };
  });

  const percentage = Math.round((totalScore / maxScore) * 100);
  const durationSeconds = startTime && endTime ? Math.max(1, Math.round((endTime - startTime) / 1000)) : 0;

  let overallLevel: DiagnosticAnalysis['overallLevel'] = 'Inicial';
  let levelDescription = '';

  if (percentage >= 85) {
    overallLevel = 'Sobresaliente';
    levelDescription = 'Demuestra un dominio consolidado de los conceptos fundamentales en cálculo, comprensión léxica y razonamiento lógico-deductivo.';
  } else if (percentage >= 70) {
    overallLevel = 'Avanzado';
    levelDescription = 'Buen desempeño general con bases sólidas, requiriendo afinar detalles en problemas complejos o análisis sintáctico.';
  } else if (percentage >= 50) {
    overallLevel = 'Intermedio';
    levelDescription = 'Comprensión básica de los contenidos esenciales con oportunidades de mejora notables en resolución analítica y precisión.';
  } else {
    overallLevel = 'Inicial';
    levelDescription = 'Se recomienda un plan intensivo de nivelación enfocado en operaciones aritméticas básicas y lectura comprensiva guiada.';
  }

  // Identify specific skill strengths and weaknesses
  const skillPerformance: Record<string, { correct: number; total: number }> = {};
  allQuestions.forEach(q => {
    if (!skillPerformance[q.skill]) {
      skillPerformance[q.skill] = { correct: 0, total: 0 };
    }
    skillPerformance[q.skill].total++;
    if (answers[q.id] === q.correctIndex) {
      skillPerformance[q.skill].correct++;
    }
  });

  const strengths: string[] = [];
  const areasToImprove: string[] = [];

  Object.entries(skillPerformance).forEach(([skill, stat]) => {
    if (stat.correct === stat.total) {
      strengths.push(skill);
    } else if (stat.correct === 0) {
      areasToImprove.push(skill);
    }
  });

  // Tailored pedagogical recommendations
  const recommendations: string[] = [];
  const mathScore = sectionScores.find(s => s.sectionId === 1);
  const langScore = sectionScores.find(s => s.sectionId === 2);
  const logicScore = sectionScores.find(s => s.sectionId === 3);

  if (mathScore && mathScore.percentage < 70) {
    recommendations.push("Practicar rutinas diarias de 10 minutos de cálculo mental y resolución de problemas con operaciones combinadas y divisiones.");
  } else {
    recommendations.push("Mantener la destreza aritmética resolviendo desafíos matemáticos de lógica aplicada.");
  }

  if (langScore && langScore.percentage < 70) {
    recommendations.push("Fomentar la lectura diaria de textos informativos identificando la idea principal, conectores y vocabulario contextual.");
  } else {
    recommendations.push("Continuar enriqueciendo el vocabulario con lecturas de complejidad progresiva y redacción guiada.");
  }

  if (logicScore && logicScore.percentage < 70) {
    recommendations.push("Ejercitar patrones de series numéricas de segundo orden y deducción lógica mediante acertijos y figuras secuenciales.");
  } else {
    recommendations.push("Excelente pensamiento abstracto; explorar problemas de ingenio y olimpiadas de razonamiento lógico.");
  }

  return {
    totalScore,
    maxScore,
    percentage,
    durationSeconds,
    overallLevel,
    levelDescription,
    sectionScores,
    strengths: strengths.slice(0, 6),
    areasToImprove: areasToImprove.slice(0, 6),
    recommendations
  };
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function exportResultsToCSV(
  studentName: string,
  analysis: DiagnosticAnalysis,
  sections: Section[],
  answers: Record<string, number>
): void {
  const allQuestions = sections.flatMap(s => s.questions);
  const dateStr = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let csvContent = `data:text/csv;charset=utf-8,\uFEFF`; // BOM for UTF-8 in Excel
  csvContent += `INFORME DIAGNÓSTICO: PRUEBA DE 30 PREGUNTAS\n`;
  csvContent += `Estudiante:,"${studentName || 'Estudiante'}"\n`;
  csvContent += `Fecha:,"${dateStr}"\n`;
  csvContent += `Puntaje Total:,"${analysis.totalScore} / ${analysis.maxScore} (${analysis.percentage}%)"\n`;
  csvContent += `Nivel Alcanzado:,"${analysis.overallLevel}"\n`;
  csvContent += `Tiempo Empleado:,"${formatTime(analysis.durationSeconds)}"\n\n`;

  csvContent += `DESGLOSE POR SECCIONES\n`;
  csvContent += `Sección,Puntaje,Porcentaje,Estado\n`;
  analysis.sectionScores.forEach(s => {
    csvContent += `"${s.title}","${s.correctCount}/${s.totalQuestions}","${s.percentage}%","${s.status}"\n`;
  });

  csvContent += `\nDETALLE PREGUNTA POR PREGUNTA\n`;
  csvContent += `N°,Sección,Pregunta,Respuesta Marcada,Respuesta Correcta,Resultado,Habilidad Evaluada\n`;

  allQuestions.forEach(q => {
    const userAnsIndex = answers[q.id];
    const isAnswered = userAnsIndex !== undefined;
    const isCorrect = isAnswered && userAnsIndex === q.correctIndex;
    const userAnsText = isAnswered ? q.options[userAnsIndex] : 'Sin responder';
    const correctAnsText = q.options[q.correctIndex];
    const sectionName = sections.find(s => s.id === q.sectionId)?.shortTitle || '';

    csvContent += `"${q.number}","${sectionName}","${q.text.replace(/"/g, '""')}","${userAnsText.replace(/"/g, '""')}","${correctAnsText.replace(/"/g, '""')}","${isCorrect ? 'Correcta' : 'Incorrecta'}","${q.skill}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Diagnostico_30P_${(studentName || 'Estudiante').replace(/\s+/g, '_')}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
