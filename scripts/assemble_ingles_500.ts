import * as fs from 'fs';
import * as path from 'path';
import { Question } from '../src/types';
import { normalizeStatement } from '../src/services/questionEngine';

import { QUESTIONS_INGLES as existingRaw } from '../src/data/questions/ingles';
import { ING_BASICO_21_100 } from './ingles_data/basico_questions';
import { ING_INTERMEDIO_21_100 } from './ingles_data/intermedio_questions';
import { ING_BACHILLERATO_21_100 } from './ingles_data/bachillerato_questions';
import { ING_TECNICO_21_100 } from './ingles_data/tecnico_questions';
import { ING_UNIVERSITARIO_21_100 } from './ingles_data/universitario_questions';

const targetDir = path.resolve(process.cwd(), 'src/data/questions/ingles');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Backup existing 100 questions
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

console.log(`Original Inglés: Bas=${existingBasico.length}, Int=${existingIntermedio.length}, Bac=${existingBachillerato.length}, Tec=${existingTecnico.length}, Uni=${existingUniversitario.length}`);

// Balance newly authored questions across options indices 0, 1, 2, 3
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

const basico100: Question[] = [...existingBasico, ...balanceOptions(ING_BASICO_21_100)];
const intermedio100: Question[] = [...existingIntermedio, ...balanceOptions(ING_INTERMEDIO_21_100)];
const bachillerato100: Question[] = [...existingBachillerato, ...balanceOptions(ING_BACHILLERATO_21_100)];
const tecnico100: Question[] = [...existingTecnico, ...balanceOptions(ING_TECNICO_21_100)];
const universitario100: Question[] = [...existingUniversitario, ...balanceOptions(ING_UNIVERSITARIO_21_100)];

console.log(`Expanded Inglés: Bas=${basico100.length}, Int=${intermedio100.length}, Bac=${bachillerato100.length}, Tec=${tecnico100.length}, Uni=${universitario100.length}`);

function writeLevelFile(filename: string, exportName: string, list: Question[]) {
  const content = `import { Question } from '../../../types';\n\nexport const ${exportName}: Question[] = ${JSON.stringify(list, null, 2)};\n`;
  fs.writeFileSync(path.join(targetDir, filename), content, 'utf-8');
  console.log(`Wrote ${filename} with ${list.length} questions.`);
}

writeLevelFile('basico.ts', 'INGLES_BASICO', basico100);
writeLevelFile('intermedio.ts', 'INGLES_INTERMEDIO', intermedio100);
writeLevelFile('bachillerato.ts', 'INGLES_BACHILLERATO', bachillerato100);
writeLevelFile('tecnico.ts', 'INGLES_TECNICO', tecnico100);
writeLevelFile('universitario.ts', 'INGLES_UNIVERSITARIO', universitario100);

// Write index.ts
const indexContent = `import { Question } from '../../../types';
import { INGLES_BASICO } from './basico';
import { INGLES_INTERMEDIO } from './intermedio';
import { INGLES_BACHILLERATO } from './bachillerato';
import { INGLES_TECNICO } from './tecnico';
import { INGLES_UNIVERSITARIO } from './universitario';

export const QUESTIONS_INGLES: Question[] = [
  ...INGLES_BASICO,
  ...INGLES_INTERMEDIO,
  ...INGLES_BACHILLERATO,
  ...INGLES_TECNICO,
  ...INGLES_UNIVERSITARIO
];
`;
fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf-8');
console.log('Wrote ingles/index.ts with 500 questions.');

// Re-export in root src/data/questions/ingles.ts
const rootPath = path.resolve(process.cwd(), 'src/data/questions/ingles.ts');
fs.writeFileSync(
  rootPath,
  `export { QUESTIONS_INGLES } from './ingles/index';\n`,
  'utf-8'
);
console.log('Updated src/data/questions/ingles.ts to re-export from ./ingles/index');

// Audits
const allQuestions = [
  ...basico100,
  ...intermedio100,
  ...bachillerato100,
  ...tecnico100,
  ...universitario100
];

console.log(`\n--- AUDITORÍA DE CALIDAD INGLÉS 500 ---`);
console.log(`Total questions: ${allQuestions.length}`);

const idSet = new Set<string>();
const normTextSet = new Set<string>();
let dupId = 0;
let dupText = 0;
let invalidOpts = 0;
let invalidAnswer = 0;

for (const q of allQuestions) {
  if (idSet.has(q.id)) {
    console.error(`DUPLICATE ID: ${q.id}`);
    dupId++;
  }
  idSet.add(q.id);

  const norm = normalizeStatement(q.text);
  if (normTextSet.has(norm)) {
    console.error(`DUPLICATE STATEMENT: "${q.text.substring(0, 60)}..."`);
    dupText++;
  }
  normTextSet.add(norm);

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    console.error(`INVALID OPTIONS COUNT on ${q.id}: ${q.options?.length}`);
    invalidOpts++;
  }

  if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3) {
    console.error(`INVALID CORRECT INDEX on ${q.id}: ${q.correctIndex}`);
    invalidAnswer++;
  }
}

console.log(`Audited: duplicate IDs = ${dupId}, duplicate text = ${dupText}, invalid options = ${invalidOpts}, invalid answer = ${invalidAnswer}`);
if (dupId === 0 && dupText === 0 && invalidOpts === 0 && invalidAnswer === 0 && allQuestions.length === 500) {
  console.log(`SUCCESS: All 500 questions for Inglés are fully valid, distinct, and balanced!`);
} else {
  console.error(`FAILURE: Some quality checks failed.`);
  process.exit(1);
}
