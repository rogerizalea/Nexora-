import * as fs from 'fs';
import * as path from 'path';
import { Question } from '../src/types';
import { normalizeStatement } from '../src/services/questionEngine';

import { QUESTIONS_ELECTRICIDAD as existingRaw } from '../src/data/questions/electricidad';
import { ELE_BASICO_21_100 } from './electricidad_data/build_basico';
import { ELE_INTERMEDIO_21_100 } from './electricidad_data/build_intermedio';
import { ELE_BACHILLERATO_21_100 } from './electricidad_data/build_bachillerato';
import { ELE_TECNICO_21_100 } from './electricidad_data/build_tecnico';
import { ELE_UNIVERSITARIO_21_100 } from './electricidad_data/build_universitario';

const targetDir = path.resolve(process.cwd(), 'src/data/questions/electricidad');
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

console.log(`Original Electricidad: Bas=${existingBasico.length}, Int=${existingIntermedio.length}, Bac=${existingBachillerato.length}, Tec=${existingTecnico.length}, Uni=${existingUniversitario.length}`);

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

const basico100: Question[] = [...existingBasico, ...balanceOptions(ELE_BASICO_21_100)];
const intermedio100: Question[] = [...existingIntermedio, ...balanceOptions(ELE_INTERMEDIO_21_100)];
const bachillerato100: Question[] = [...existingBachillerato, ...balanceOptions(ELE_BACHILLERATO_21_100)];
const tecnico100: Question[] = [...existingTecnico, ...balanceOptions(ELE_TECNICO_21_100)];
const universitario100: Question[] = [...existingUniversitario, ...balanceOptions(ELE_UNIVERSITARIO_21_100)];

console.log(`Expanded Electricidad: Bas=${basico100.length}, Int=${intermedio100.length}, Bac=${bachillerato100.length}, Tec=${tecnico100.length}, Uni=${universitario100.length}`);

// Helper to write modular files
function writeLevelFile(filename: string, exportName: string, questions: Question[]) {
  const content = `import { Question } from '../../../types';\n\nexport const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(path.join(targetDir, filename), content, 'utf-8');
}

writeLevelFile('basico.ts', 'ELECTRICIDAD_BASICO', basico100);
writeLevelFile('intermedio.ts', 'ELECTRICIDAD_INTERMEDIO', intermedio100);
writeLevelFile('bachillerato.ts', 'ELECTRICIDAD_BACHILLERATO', bachillerato100);
writeLevelFile('tecnico.ts', 'ELECTRICIDAD_TECNICO', tecnico100);
writeLevelFile('universitario.ts', 'ELECTRICIDAD_UNIVERSITARIO', universitario100);

// Write index.ts
const indexContent = `import { Question } from '../../../types';
import { ELECTRICIDAD_BASICO } from './basico';
import { ELECTRICIDAD_INTERMEDIO } from './intermedio';
import { ELECTRICIDAD_BACHILLERATO } from './bachillerato';
import { ELECTRICIDAD_TECNICO } from './tecnico';
import { ELECTRICIDAD_UNIVERSITARIO } from './universitario';

export const QUESTIONS_ELECTRICIDAD: Question[] = [
  ...ELECTRICIDAD_BASICO,
  ...ELECTRICIDAD_INTERMEDIO,
  ...ELECTRICIDAD_BACHILLERATO,
  ...ELECTRICIDAD_TECNICO,
  ...ELECTRICIDAD_UNIVERSITARIO
];
`;
fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf-8');

// Update main /src/data/questions/electricidad.ts
const mainEntry = `export { QUESTIONS_ELECTRICIDAD } from './electricidad/index';\n`;
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/questions/electricidad.ts'), mainEntry, 'utf-8');

// 3. Validation Audit
const all500 = [...basico100, ...intermedio100, ...bachillerato100, ...tecnico100, ...universitario100];
const idSet = new Set<string>();
const textSet = new Set<string>();
let hasErrors = false;

all500.forEach((q, idx) => {
  if (!q.id) {
    console.error(`Error at index ${idx}: Missing ID`);
    hasErrors = true;
  }
  if (idSet.has(q.id)) {
    console.error(`Duplicate ID found: ${q.id}`);
    hasErrors = true;
  }
  idSet.add(q.id);

  const norm = normalizeStatement(q.text);
  if (textSet.has(norm)) {
    console.warn(`Potential duplicate text found: ID=${q.id}, Text="${q.text.slice(0, 60)}..."`);
  }
  textSet.add(norm);

  if (!q.options || q.options.length !== 4) {
    console.error(`Invalid options length for ${q.id}: ${q.options?.length}`);
    hasErrors = true;
  }

  const distinctOptions = new Set(q.options);
  if (distinctOptions.size !== 4) {
    console.error(`Options not all distinct in ${q.id}`);
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

const correctDist = all500.reduce((acc, q) => {
  acc[q.correctIndex] = (acc[q.correctIndex] || 0) + 1;
  return acc;
}, {} as Record<number, number>);

console.log('Electricidad Correct Index Distribution:', correctDist);
console.log(`Electricidad Total Questions: ${all500.length}`);
console.log(`Electricidad Unique IDs: ${idSet.size}`);
console.log(`Electricidad Validation Passed: ${!hasErrors}`);
