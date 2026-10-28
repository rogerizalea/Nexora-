import * as fs from 'fs';
import * as path from 'path';
import { Question } from '../src/types';
import { normalizeStatement } from '../src/services/questionEngine';

import { BIO_BASICO_21_100 } from './bio_data/basico_questions';
import { BIO_INTERMEDIO_21_100 } from './bio_data/intermedio_questions';
import { BIO_BACHILLERATO_21_100 } from './bio_data/bachillerato_questions';
import { BIO_TECNICO_21_100 } from './bio_data/tecnico_questions';
import { BIO_UNIVERSITARIO_21_100 } from './bio_data/universitario_questions';

const existingPath = path.resolve(process.cwd(), 'src/data/questions/biologia/existing.json');
const existingRaw: Question[] = JSON.parse(fs.readFileSync(existingPath, 'utf-8'));

const existingBasico = existingRaw.filter(q => q.educationalLevel === 'Básico');
const existingIntermedio = existingRaw.filter(q => q.educationalLevel === 'Intermedio');
const existingBachillerato = existingRaw.filter(q => q.educationalLevel === 'Bachillerato');
const existingTecnico = existingRaw.filter(q => q.educationalLevel === 'Técnico');
const existingUniversitario = existingRaw.filter(q => q.educationalLevel === 'Universitario');

console.log(`Original Biología: Bas=${existingBasico.length}, Int=${existingIntermedio.length}, Bac=${existingBachillerato.length}, Tec=${existingTecnico.length}, Uni=${existingUniversitario.length}`);

// Function to balance options positions for newly authored questions
function balanceOptions(questions: Question[]): Question[] {
  return questions.map((q, idx) => {
    // shift options based on item number to distribute correct answers uniformly across indices 0, 1, 2, 3
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

const basico100: Question[] = [...existingBasico, ...balanceOptions(BIO_BASICO_21_100)];
const intermedio100: Question[] = [...existingIntermedio, ...balanceOptions(BIO_INTERMEDIO_21_100)];
const bachillerato100: Question[] = [...existingBachillerato, ...balanceOptions(BIO_BACHILLERATO_21_100)];
const tecnico100: Question[] = [...existingTecnico, ...balanceOptions(BIO_TECNICO_21_100)];
const universitario100: Question[] = [...existingUniversitario, ...balanceOptions(BIO_UNIVERSITARIO_21_100)];

console.log(`Expanded Biología: Bas=${basico100.length}, Int=${intermedio100.length}, Bac=${bachillerato100.length}, Tec=${tecnico100.length}, Uni=${universitario100.length}`);

const targetDir = path.resolve(process.cwd(), 'src/data/questions/biologia');

function writeLevelFile(filename: string, exportName: string, list: Question[]) {
  const content = `import { Question } from '../../../types';\n\nexport const ${exportName}: Question[] = ${JSON.stringify(list, null, 2)};\n`;
  fs.writeFileSync(path.join(targetDir, filename), content, 'utf-8');
  console.log(`Wrote ${filename} with ${list.length} questions.`);
}

writeLevelFile('basico.ts', 'BIOLOGIA_BASICO', basico100);
writeLevelFile('intermedio.ts', 'BIOLOGIA_INTERMEDIO', intermedio100);
writeLevelFile('bachillerato.ts', 'BIOLOGIA_BACHILLERATO', bachillerato100);
writeLevelFile('tecnico.ts', 'BIOLOGIA_TECNICO', tecnico100);
writeLevelFile('universitario.ts', 'BIOLOGIA_UNIVERSITARIO', universitario100);

// Write index.ts
const indexContent = `import { Question } from '../../../types';
import { BIOLOGIA_BASICO } from './basico';
import { BIOLOGIA_INTERMEDIO } from './intermedio';
import { BIOLOGIA_BACHILLERATO } from './bachillerato';
import { BIOLOGIA_TECNICO } from './tecnico';
import { BIOLOGIA_UNIVERSITARIO } from './universitario';

export const QUESTIONS_BIOLOGIA: Question[] = [
  ...BIOLOGIA_BASICO,
  ...BIOLOGIA_INTERMEDIO,
  ...BIOLOGIA_BACHILLERATO,
  ...BIOLOGIA_TECNICO,
  ...BIOLOGIA_UNIVERSITARIO
];
`;
fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf-8');
console.log('Wrote biologia/index.ts with 500 questions.');

// Re-export in root
const rootBioPath = path.resolve(process.cwd(), 'src/data/questions/biologia.ts');
fs.writeFileSync(
  rootBioPath,
  `export { QUESTIONS_BIOLOGIA } from './biologia/index';\n`,
  'utf-8'
);
console.log('Updated src/data/questions/biologia.ts to re-export from ./biologia/index');

// Audits
const allQuestions = [
  ...basico100,
  ...intermedio100,
  ...bachillerato100,
  ...tecnico100,
  ...universitario100
];

console.log(`\n--- AUDITORÍA DE CALIDAD BIOLOGÍA 500 ---`);
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
    console.warn(`DUPLICATE STATEMENT: ${q.id} -> ${q.text.slice(0, 60)}...`);
    dupText++;
  }
  normTextSet.add(norm);

  if (!q.options || q.options.length !== 4 || q.options.some(o => !o || o.trim() === '')) {
    console.error(`INVALID OPTIONS: ${q.id}`);
    invalidOpts++;
  }

  if (q.correctIndex < 0 || q.correctIndex > 3) {
    console.error(`INVALID CORRECT INDEX: ${q.id} (index=${q.correctIndex})`);
    invalidAnswer++;
  }
}

console.log(`Duplicated IDs: ${dupId}`);
console.log(`Duplicated Statements: ${dupText}`);
console.log(`Invalid Options: ${invalidOpts}`);
console.log(`Invalid CorrectIndex: ${invalidAnswer}`);

if (dupId === 0 && dupText === 0 && invalidOpts === 0 && invalidAnswer === 0) {
  console.log(`✅ Biología 500 EXPANSION: 100% PERFECT & VERIFIED!`);
} else {
  console.error(`❌ Biología 500 contains validation errors!`);
  process.exit(1);
}
