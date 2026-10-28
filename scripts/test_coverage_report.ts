import { getQuestionsCoverageReport } from '../src/data/subjectsData';

const report = getQuestionsCoverageReport();
console.log('--- NEXORA QUESTION BANK COVERAGE REPORT ---');
console.table(report.rows.map(r => ({
  Subject: r.subjectName,
  Total: r.totalValid,
  Básico: r.basico,
  Intermedio: r.intermedio,
  Bachillerato: r.bachillerato,
  Técnico: r.tecnico,
  Universitario: r.universitario
})));

console.log(`Total questions across NEXORA platform: ${report.totalQuestionsAcrossPlatform}`);
console.log(`Total unique question IDs: ${report.totalUniqueIds}`);
if (report.totalQuestionsAcrossPlatform === report.totalUniqueIds) {
  console.log('ALL question IDs are 100% unique across the entire platform!');
} else {
  console.error(`COLLISION DETECTED: ${report.totalQuestionsAcrossPlatform - report.totalUniqueIds} duplicate IDs!`);
}
