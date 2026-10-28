import * as fs from 'fs';
import * as path from 'path';
import { Question } from '../src/types';
import { normalizeStatement } from '../src/services/questionEngine';

import { QUESTIONS_SOCIALES as existingRaw } from '../src/data/questions/sociales';
import { SOC_BASICO_21_100 } from './sociales_data/build_basico';
import { SOC_INTERMEDIO_21_100 } from './sociales_data/build_intermedio';
import { SOC_BACHILLERATO_21_100 } from './sociales_data/build_bachillerato';
import { SOC_TECNICO_21_100 } from './sociales_data/build_tecnico';
import { SOC_UNIVERSITARIO_21_100 } from './sociales_data/build_universitario';

const targetDir = path.resolve(process.cwd(), 'src/data/questions/sociales');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Backup existing 100 questions
fs.writeFileSync(
  path.join(targetDir, 'existing.json'),
  JSON.stringify(existingRaw, null, 2),
  'utf-8'
);

const existingBasico = existingRaw.filter(q => q.educationalLevel === 'Básico');
const existingIntermedio = existingRaw.filter(q => q.educationalLevel === 'Intermedio');
const existingBachillerato = existingRaw.filter(q => q.educationalLevel === 'Bachillerato');
const existingTecnico = existingRaw.filter(q => q.educationalLevel === 'Técnico');
const existingUniversitario = existingRaw.filter(q => q.educationalLevel === 'Universitario');

console.log(`Original Sociales: Bas=${existingBasico.length}, Int=${existingIntermedio.length}, Bac=${existingBachillerato.length}, Tec=${existingTecnico.length}, Uni=${existingUniversitario.length}`);

// 2. Balance newly authored questions across options indices 0, 1, 2, 3
function balanceOptions(questions: Question[]): Question[] {
  return questions.map((q) => {
    const shift = (q.number % 4);
    if (shift === 0) return { ...q };
    const opts = [...q.options];
    const correctVal = opts[q.correctIndex];
    const shifted = [
      opts[(0 + shift) % 4],
      opts[(1 + shift) % 4],
      opts[(2 + shift) % 4],
      opts[(3 + shift) % 4]
    ];
    return {
      ...q,
      options: shifted,
      correctIndex: shifted.indexOf(correctVal)
    };
  });
}

const basico100: Question[] = [...existingBasico, ...balanceOptions(SOC_BASICO_21_100)];
const intermedio100: Question[] = [...existingIntermedio, ...balanceOptions(SOC_INTERMEDIO_21_100)];
const bachillerato100: Question[] = [...existingBachillerato, ...balanceOptions(SOC_BACHILLERATO_21_100)];
const tecnico100: Question[] = [...existingTecnico, ...balanceOptions(SOC_TECNICO_21_100)];
const universitario100: Question[] = [...existingUniversitario, ...balanceOptions(SOC_UNIVERSITARIO_21_100)];

console.log(`Expanded Sociales: Bas=${basico100.length}, Int=${intermedio100.length}, Bac=${bachillerato100.length}, Tec=${tecnico100.length}, Uni=${universitario100.length}`);

// Helper to write modular files
function writeLevelFile(filename: string, exportName: string, questions: Question[]) {
  const content = `import { Question } from '../../../types';\n\nexport const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(path.join(targetDir, filename), content, 'utf-8');
}

writeLevelFile('basico.ts', 'SOCIALES_BASICO', basico100);
writeLevelFile('intermedio.ts', 'SOCIALES_INTERMEDIO', intermedio100);
writeLevelFile('bachillerato.ts', 'SOCIALES_BACHILLERATO', bachillerato100);
writeLevelFile('tecnico.ts', 'SOCIALES_TECNICO', tecnico100);
writeLevelFile('universitario.ts', 'SOCIALES_UNIVERSITARIO', universitario100);

// Write index.ts
const indexContent = `import { Question } from '../../../types';
import { SOCIALES_BASICO } from './basico';
import { SOCIALES_INTERMEDIO } from './intermedio';
import { SOCIALES_BACHILLERATO } from './bachillerato';
import { SOCIALES_TECNICO } from './tecnico';
import { SOCIALES_UNIVERSITARIO } from './universitario';

export const QUESTIONS_SOCIALES: Question[] = [
  ...SOCIALES_BASICO,
  ...SOCIALES_INTERMEDIO,
  ...SOCIALES_BACHILLERATO,
  ...SOCIALES_TECNICO,
  ...SOCIALES_UNIVERSITARIO
];
`;
fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf-8');

// Update main /src/data/questions/sociales.ts
const mainEntry = `export { QUESTIONS_SOCIALES } from './sociales/index';\n`;
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/questions/sociales.ts'), mainEntry, 'utf-8');

// 3. Validation Audit
const all500 = [...basico100, ...intermedio100, ...bachillerato100, ...tecnico100, ...universitario100];
const idSet = new Set<string>();
const textSet = new Set<string>();
let hasErrors = false;

all500.forEach((q, idx) => {
  if (idSet.has(q.id)) {
    console.error(`Duplicate ID found: ${q.id} at index ${idx}`);
    hasErrors = true;
  }
  idSet.add(q.id);

  const norm = normalizeStatement(q.text);
  if (textSet.has(norm)) {
    console.warn(`Potential duplicate text statement: "${q.text.substring(0, 60)}..." (ID: ${q.id})`);
  }
  textSet.add(norm);

  if (!q.options || q.options.length !== 4) {
    console.error(`Invalid options count for ${q.id}: ${q.options?.length}`);
    hasErrors = true;
  }
  if (q.correctIndex < 0 || q.correctIndex > 3) {
    console.error(`Invalid correctIndex for ${q.id}: ${q.correctIndex}`);
    hasErrors = true;
  }
  if (!q.explanation || q.explanation.trim().length === 0) {
    console.error(`Empty explanation for ${q.id}`);
    hasErrors = true;
  }
});

// Distribution of correct answers
const dist: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
all500.forEach(q => { dist[q.correctIndex] = (dist[q.correctIndex] || 0) + 1; });
console.log('Correct answers distribution:', dist);

if (!hasErrors) {
  console.log(`\nSUCCESS: Estudios Sociales successfully expanded to ${all500.length} verified questions!`);
  console.log(`Unique IDs count: ${idSet.size} / 500`);
} else {
  console.error('\nVALIDATION FAILED: Please fix reported errors.');
  process.exit(1);
}
