import { jsPDF } from 'jspdf';
import { DiagnosticAnalysis, Section } from '../types';
import { formatTime } from './diagnosticEvaluator';

export function generateAndDownloadResultsPDF(
  studentName: string,
  analysis: DiagnosticAnalysis,
  sections: Section[],
  answers: Record<string, number>
): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  const reportFolio = `PDF-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const safeName = (studentName || 'Estudiante').replace(/[^a-zA-Z0-9_\-]/g, '_');
  const safeFilename = `NEXORA_Informe_${safeName}_${reportFolio}.pdf`;

  const allQuestions = sections.flatMap(s => s.questions);

  // Difficulty metrics
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

  // ================= PAGE 1: RESUMEN EJECUTIVO Y DESGLOSE =================
  // Header Navy Banner with NEXORA #10152B
  doc.setFillColor(16, 21, 43); // #10152B
  doc.roundedRect(margin, margin, contentWidth, 26, 3, 3, 'F');

  doc.setTextColor(101, 216, 255); // #65D8FF
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('NEXORA • «Activa tu mente. Expande tu futuro»', margin + 6, margin + 8);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('INFORME OFICIAL DE RESULTADOS DE EVALUACIÓN', margin + 6, margin + 16);

  doc.setTextColor(226, 232, 240);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(`Folio: ${reportFolio}   |   Fecha: ${currentDate}   |   Duración: ${formatTime(analysis.durationSeconds)}`, margin + 6, margin + 22);

  // Student & Score Block
  let currentY = margin + 32;

  // Box background for student & score
  doc.setFillColor(248, 250, 252); // slate-50
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.roundedRect(margin, currentY, contentWidth, 34, 3, 3, 'FD');

  // Left: Student Info
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'bold');
  doc.text('ESTUDIANTE EVALUADO:', margin + 6, currentY + 7);

  doc.setTextColor(15, 23, 42); // slate-900
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text(studentName || 'Estudiante Evaluado', margin + 6, currentY + 14);

  doc.setTextColor(71, 85, 105);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  const levelTextLines = doc.splitTextToSize(analysis.levelDescription, contentWidth - 75);
  doc.text(levelTextLines.slice(0, 3), margin + 6, currentY + 20);

  // Right: Score Pill & Level
  doc.setFillColor(79, 70, 229); // indigo-600
  doc.roundedRect(pageWidth - margin - 64, currentY + 5, 58, 24, 2, 2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'bold');
  doc.text('PUNTAJE OBTENIDO', pageWidth - margin - 35, currentY + 10, { align: 'center' });

  doc.setFontSize(14);
  doc.text(`${analysis.totalScore} / ${analysis.maxScore} pts`, pageWidth - margin - 35, currentY + 17, { align: 'center' });

  doc.setFontSize(7.5);
  doc.text(`${analysis.percentage}% • Nivel ${analysis.overallLevel}`, pageWidth - margin - 35, currentY + 23, { align: 'center' });

  // 1. DESGLOSE POR SECCIONES
  currentY += 40;
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('1. DESGLOSE DE RESULTADOS POR SECCIONES TEMÁTICAS', margin, currentY);

  currentY += 4;
  const colWidth = (contentWidth - 6) / 3;

  analysis.sectionScores.forEach((sec, idx) => {
    const colX = margin + idx * (colWidth + 3);
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(colX, currentY, colWidth, 27, 2, 2, 'FD');

    // Title
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    const titleLines = doc.splitTextToSize(sec.title, colWidth - 6);
    doc.text(titleLines[0] || sec.title, colX + 3, currentY + 5.5);

    // Score
    doc.setTextColor(79, 70, 229);
    doc.setFontSize(11);
    doc.text(`${sec.correctCount} / ${sec.totalQuestions}`, colX + 3, currentY + 13);

    doc.setTextColor(100, 116, 139);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.text(`Efectividad: ${sec.percentage}%`, colX + 3, currentY + 18);

    // Status pill
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(colX + 3, currentY + 20, colWidth - 6, 4.5, 1, 1, 'F');
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'bold');
    doc.text(`Estado: ${sec.status}`, colX + colWidth / 2, currentY + 23.3, { align: 'center' });
  });

  // 2. DESGLOSE POR DIFICULTAD (PARA MÁS CONOCIMIENTO)
  currentY += 34;
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('2. ANÁLISIS POR NIVEL DE DIFICULTAD Y PROFUNDIDAD COGNITIVA', margin, currentY);

  currentY += 4;
  const diffItems = [
    {
      level: 'Fácil (Básico)',
      stats: difficultyStats.facil,
      pct: pctFacil,
      color: [16, 185, 129], // emerald
      bgColor: [236, 253, 245],
      focus: 'Operaciones directas, vocabulario y series básicas.'
    },
    {
      level: 'Intermedio',
      stats: difficultyStats.intermedio,
      pct: pctIntermedio,
      color: [59, 130, 246], // blue
      bgColor: [239, 246, 255],
      focus: 'Problemas con contexto, conectores y deducción guiada.'
    },
    {
      level: 'Desafiante (Avanzado)',
      stats: difficultyStats.desafiante,
      pct: pctDesafiante,
      color: [147, 51, 234], // purple
      bgColor: [250, 245, 255],
      focus: 'Cálculo multi-paso, lógica formal y abstracción alta.'
    }
  ];

  diffItems.forEach((item, idx) => {
    const colX = margin + idx * (colWidth + 3);
    doc.setFillColor(item.bgColor[0], item.bgColor[1], item.bgColor[2]);
    doc.setDrawColor(item.color[0], item.color[1], item.color[2]);
    doc.roundedRect(colX, currentY, colWidth, 29, 2, 2, 'FD');

    // Title
    doc.setTextColor(item.color[0], item.color[1], item.color[2]);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(item.level, colX + 3, currentY + 5.5);

    // Score
    doc.setFontSize(11);
    doc.text(`${item.stats.correct} / ${item.stats.total} correctas`, colX + 3, currentY + 13);

    doc.setTextColor(71, 85, 105);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.text(`Dominio: ${item.pct}%`, colX + 3, currentY + 18);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6);
    const focusLines = doc.splitTextToSize(item.focus, colWidth - 6);
    doc.text(focusLines.slice(0, 2), colX + 3, currentY + 22.5);
  });

  // 3. FORTALEZAS Y PLAN PEDAGÓGICO DE ACCIÓN
  currentY += 36;
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('3. DIAGNÓSTICO COGNITIVO Y PLAN DE REFUERZO PEDAGÓGICO', margin, currentY);

  currentY += 4;
  doc.setFillColor(254, 252, 232); // amber-50
  doc.setDrawColor(253, 230, 138); // amber-200
  doc.roundedRect(margin, currentY, contentWidth, 34, 2, 2, 'FD');

  doc.setTextColor(146, 64, 14); // amber-800
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'bold');
  doc.text('RECOMENDACIONES PARA ELEVAR EL NIVEL DE CONOCIMIENTO:', margin + 4, currentY + 6);

  doc.setTextColor(51, 65, 85);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');

  let recY = currentY + 11;
  analysis.recommendations.slice(0, 4).forEach((rec) => {
    const lines = doc.splitTextToSize(`• ${rec}`, contentWidth - 8);
    doc.text(lines.slice(0, 2), margin + 4, recY);
    recY += lines.slice(0, 2).length * 4;
  });

  // Footer of Page 1
  doc.setTextColor(148, 163, 184);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('Página 1 de 2  •  Informe oficial generado por la Plataforma de Evaluación Diagnóstica', pageWidth / 2, pageHeight - 8, { align: 'center' });

  // ================= PAGE 2: TABLA DE LAS 30 PREGUNTAS Y FIRMAS =================
  doc.addPage();

  // Page 2 Header
  doc.setFillColor(30, 41, 59);
  doc.roundedRect(margin, margin, contentWidth, 14, 2, 2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'bold');
  doc.text('DETALLE COMPLETO DE RESPUESTAS Y DIFICULTAD (30 PREGUNTAS)', margin + 4, margin + 9);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text(`Estudiante: ${studentName || 'Estudiante'}   |   Folio: ${reportFolio}`, pageWidth - margin - 4, margin + 9, { align: 'right' });

  // Questions Table Header
  let tableY = margin + 18;
  doc.setFillColor(241, 245, 249);
  doc.setDrawColor(203, 213, 225);
  doc.rect(margin, tableY, contentWidth, 6, 'FD');

  doc.setTextColor(51, 65, 85);
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'bold');
  doc.text('N°', margin + 2, tableY + 4.2);
  doc.text('PREGUNTA Y REACTIVO', margin + 10, tableY + 4.2);
  doc.text('DIFICULTAD', margin + 82, tableY + 4.2);
  doc.text('TU RESPUESTA', margin + 110, tableY + 4.2);
  doc.text('CLAVE', margin + 148, tableY + 4.2);
  doc.text('ESTADO', margin + 172, tableY + 4.2);

  tableY += 6;

  // Render 30 questions
  allQuestions.forEach((q, idx) => {
    const userIdx = answers[q.id];
    const isCorrect = userIdx === q.correctIndex;
    const userText = userIdx !== undefined ? q.options[userIdx] : 'Sin responder';
    const correctText = q.options[q.correctIndex];

    const rowHeight = 6.2;

    if (isCorrect) {
      doc.setFillColor(idx % 2 === 0 ? 255 : 250, idx % 2 === 0 ? 255 : 252, idx % 2 === 0 ? 255 : 254);
    } else {
      doc.setFillColor(255, 241, 242); // rose-50
    }
    doc.setDrawColor(241, 245, 249);
    doc.rect(margin, tableY, contentWidth, rowHeight, 'FD');

    // N°
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'bold');
    doc.text(String(q.number), margin + 2, tableY + 4.2);

    // Text truncated
    doc.setTextColor(30, 41, 59);
    doc.setFont('helvetica', 'normal');
    const safeText = q.text.length > 52 ? `${q.text.substring(0, 50)}...` : q.text;
    doc.text(safeText, margin + 10, tableY + 4.2);

    // Difficulty
    if (q.difficulty === 'Fácil') {
      doc.setTextColor(5, 150, 105);
    } else if (q.difficulty === 'Intermedio') {
      doc.setTextColor(37, 99, 235);
    } else {
      doc.setTextColor(147, 51, 234);
    }
    doc.setFont('helvetica', 'bold');
    doc.text(q.difficulty, margin + 82, tableY + 4.2);

    // User response
    doc.setFont('helvetica', isCorrect ? 'normal' : 'bold');
    doc.setTextColor(isCorrect ? 51 : 225, isCorrect ? 65 : 29, isCorrect ? 85 : 72);
    const safeUserText = userText.length > 25 ? `${userText.substring(0, 23)}..` : userText;
    doc.text(safeUserText, margin + 110, tableY + 4.2);

    // Correct response
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(16, 185, 129);
    const safeCorrectText = correctText.length > 17 ? `${correctText.substring(0, 15)}..` : correctText;
    doc.text(safeCorrectText, margin + 148, tableY + 4.2);

    // Estado
    doc.setFont('helvetica', 'bold');
    if (isCorrect) {
      doc.setTextColor(16, 185, 129);
      doc.text('CORRECTO', margin + 172, tableY + 4.2);
    } else {
      doc.setTextColor(225, 29, 72);
      doc.text('INCORRECTO', margin + 172, tableY + 4.2);
    }

    tableY += rowHeight;
  });

  // Signature Block at Bottom of Page 2
  const sigY = pageHeight - 34;
  doc.setDrawColor(148, 163, 184);
  doc.line(margin + 15, sigY, margin + 65, sigY);
  doc.line(pageWidth - margin - 65, sigY, pageWidth - margin - 15, sigY);

  doc.setTextColor(51, 65, 85);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'bold');
  doc.text('Firma del Estudiante', margin + 40, sigY + 4.5, { align: 'center' });
  doc.text('Firma del Docente / Evaluador', pageWidth - margin - 40, sigY + 4.5, { align: 'center' });

  doc.setTextColor(100, 116, 139);
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'normal');
  doc.text(studentName || 'Estudiante', margin + 40, sigY + 8.5, { align: 'center' });
  doc.text('Comité Académico NEXORA', pageWidth - margin - 40, sigY + 8.5, { align: 'center' });

  // Page 2 Footer
  doc.setTextColor(148, 163, 184);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('Página 2 de 2  •  Documento oficial con validez académica interna', pageWidth / 2, pageHeight - 8, { align: 'center' });

  doc.save(safeFilename);
}

export function generateAndDownloadCertificatePDF(
  studentName: string,
  analysis: DiagnosticAnalysis,
  certificateFolio?: string
): void {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 297;
  const pageHeight = 210;
  const margin = 12;
  const contentWidth = pageWidth - margin * 2;
  const contentHeight = pageHeight - margin * 2;

  const folio = certificateFolio || `CERT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Background subtle tint
  doc.setFillColor(248, 250, 252);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Outer Golden / Navy Border
  doc.setDrawColor(16, 21, 43); // #10152B
  doc.setLineWidth(1.8);
  doc.roundedRect(margin, margin, contentWidth, contentHeight, 4, 4, 'S');

  // Inner Golden Double Border
  doc.setDrawColor(255, 209, 102); // #FFD166
  doc.setLineWidth(0.6);
  doc.roundedRect(margin + 2.5, margin + 2.5, contentWidth - 5, contentHeight - 5, 3, 3, 'S');

  // Corner Accents
  doc.setFillColor(101, 216, 255); // #65D8FF
  const cornerSize = 4;
  doc.rect(margin + 3, margin + 3, cornerSize, cornerSize, 'F');
  doc.rect(pageWidth - margin - 3 - cornerSize, margin + 3, cornerSize, cornerSize, 'F');
  doc.rect(margin + 3, pageHeight - margin - 3 - cornerSize, cornerSize, cornerSize, 'F');
  doc.rect(pageWidth - margin - 3 - cornerSize, pageHeight - margin - 3 - cornerSize, cornerSize, cornerSize, 'F');

  // Header Ribbon (Navy)
  doc.setFillColor(16, 21, 43);
  doc.roundedRect(pageWidth / 2 - 75, margin + 8, 150, 14, 3, 3, 'F');
  doc.setTextColor(101, 216, 255); // #65D8FF
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('NEXORA  •  CONSTANCIA OFICIAL DE EVALUACIÓN ACADÉMICA', pageWidth / 2, margin + 17, { align: 'center' });

  // Main Certificate Title
  doc.setTextColor(16, 21, 43);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('CERTIFICADO DE RECONOCIMIENTO', pageWidth / 2, margin + 35, { align: 'center' });

  // Slogan Subtitle
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('«Activa tu mente. Expande tu futuro»  •  Aprende a tu ritmo. Supera nuevos desafíos', pageWidth / 2, margin + 42, { align: 'center' });

  // "Se otorga la presente constancia a:"
  doc.setTextColor(71, 85, 105);
  doc.setFontSize(11);
  doc.text('Se otorga la presente distinción oficial a:', pageWidth / 2, margin + 55, { align: 'center' });

  // Student Name with Gold Underline
  doc.setTextColor(23, 92, 211); // #175CD3
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  const nameToPrint = (studentName || 'Estudiante').trim().toUpperCase();
  doc.text(nameToPrint, pageWidth / 2, margin + 70, { align: 'center' });

  doc.setDrawColor(255, 209, 102); // #FFD166
  doc.setLineWidth(1.2);
  const nameWidth = Math.max(doc.getTextWidth(nameToPrint) + 20, 100);
  doc.line(pageWidth / 2 - nameWidth / 2, margin + 73, pageWidth / 2 + nameWidth / 2, margin + 73);

  // Description Text
  doc.setTextColor(51, 65, 85);
  doc.setFontSize(10.5);
  doc.setFont('helvetica', 'normal');
  doc.text(
    'Por haber demostrado dedicación, rigor analítico y superación académica en la evaluación diagnóstica estandarizada,',
    pageWidth / 2,
    margin + 84,
    { align: 'center' }
  );
  doc.text(
    'alcanzando un destacado rendimiento en las áreas evaluadas:',
    pageWidth / 2,
    margin + 90,
    { align: 'center' }
  );

  // Score & Level Badge Banner
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.5);
  doc.roundedRect(pageWidth / 2 - 85, margin + 98, 170, 24, 3, 3, 'FD');

  doc.setTextColor(100, 116, 139);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text('NIVEL ALCANZADO', pageWidth / 2 - 45, margin + 106, { align: 'center' });
  doc.text('PUNTAJE GLOBAL', pageWidth / 2 + 45, margin + 106, { align: 'center' });

  doc.setTextColor(23, 92, 211);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text(analysis.overallLevel || 'Sobresaliente', pageWidth / 2 - 45, margin + 115, { align: 'center' });

  doc.setTextColor(16, 21, 43);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text(`${analysis.totalScore} / ${analysis.maxScore} pts (${analysis.percentage}%)`, pageWidth / 2 + 45, margin + 115, { align: 'center' });

  // Divider
  doc.setDrawColor(226, 232, 240);
  doc.line(pageWidth / 2, margin + 101, pageWidth / 2, margin + 119);

  // Section Scores mini pills if available
  if (analysis.sectionScores && analysis.sectionScores.length > 0) {
    const pillWidth = 50;
    const spacing = 6;
    const totalPillsWidth = analysis.sectionScores.length * pillWidth + (analysis.sectionScores.length - 1) * spacing;
    let startX = pageWidth / 2 - totalPillsWidth / 2;

    analysis.sectionScores.forEach((sec) => {
      doc.setFillColor(241, 245, 249);
      doc.setDrawColor(203, 213, 225);
      doc.roundedRect(startX, margin + 128, pillWidth, 14, 2, 2, 'FD');

      doc.setTextColor(71, 85, 105);
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'normal');
      doc.text(sec.title.substring(0, 14), startX + pillWidth / 2, margin + 133, { align: 'center' });

      doc.setTextColor(23, 92, 211);
      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'bold');
      doc.text(`${sec.correctCount}/${sec.totalQuestions} aciertos (${sec.percentage}%)`, startX + pillWidth / 2, margin + 139, { align: 'center' });

      startX += pillWidth + spacing;
    });
  }

  // Signatures line
  const sigY = margin + 158;
  doc.setDrawColor(148, 163, 184);
  doc.setLineWidth(0.6);
  doc.line(pageWidth / 2 - 95, sigY, pageWidth / 2 - 35, sigY);
  doc.line(pageWidth / 2 + 35, sigY, pageWidth / 2 + 95, sigY);

  doc.setTextColor(71, 85, 105);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('Firma del Estudiante', pageWidth / 2 - 65, sigY + 4, { align: 'center' });
  doc.text('Comité Académico NEXORA', pageWidth / 2 + 65, sigY + 4, { align: 'center' });

  doc.setTextColor(148, 163, 184);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text(studentName || 'Estudiante Evaluado', pageWidth / 2 - 65, sigY + 8, { align: 'center' });
  doc.text('Validación Oficial de Plataforma', pageWidth / 2 + 65, sigY + 8, { align: 'center' });

  // Bottom Metadata: Folio and Date
  const footY = margin + contentHeight - 6;
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text(`Folio Oficial: ${folio}`, margin + 15, footY);
  doc.text(`Fecha de Emisión: ${currentDate}`, pageWidth - margin - 15, footY, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  doc.text('Constancia académica emitida digitalmente por NEXORA • Verificable internamente', pageWidth / 2, footY, { align: 'center' });

  const safeFilename = `certificado_nexora_${(studentName || 'estudiante').trim().toLowerCase().replace(/[^a-z0-9]/gi, '_')}.pdf`;
  doc.save(safeFilename);
}
