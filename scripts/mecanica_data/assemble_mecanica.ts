import fs from 'fs';
import path from 'path';
import { QUESTIONS_MECANICA } from '../../src/data/questions/mecanica';
import { MEC_BASICO_21_100 } from './build_basico';
import { MEC_INTERMEDIO_21_100 } from './build_intermedio';
import { MEC_BACHILLERATO_21_100 } from './build_bachillerato';
import { MEC_TECNICO_21_100 } from './build_tecnico';
import { MEC_UNIVERSITARIO_21_100 } from './build_universitario';

const outDir = 'src/data/questions/mecanica';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Separate original 100 questions by educational level
const origBasico = QUESTIONS_MECANICA.filter(q => q.educationalLevel === 'Básico');
const origIntermedio = QUESTIONS_MECANICA.filter(q => q.educationalLevel === 'Intermedio');
const origBachillerato = QUESTIONS_MECANICA.filter(q => q.educationalLevel === 'Bachillerato');
const origTecnico = QUESTIONS_MECANICA.filter(q => q.educationalLevel === 'Técnico');
const origUniversitario = QUESTIONS_MECANICA.filter(q => q.educationalLevel === 'Universitario');

console.log('Original Mecanica counts:', {
  Basico: origBasico.length,
  Intermedio: origIntermedio.length,
  Bachillerato: origBachillerato.length,
  Tecnico: origTecnico.length,
  Universitario: origUniversitario.length
});

function formatFileContent(varName: string, questions: any[]) {
  return `import { Question } from '../../../types';

export const ${varName}: Question[] = ${JSON.stringify(questions, null, 2)};
`;
}

// Combine 20 + 80 = 100 for each level
const fullBasico = [...origBasico, ...MEC_BASICO_21_100];
const fullIntermedio = [...origIntermedio, ...MEC_INTERMEDIO_21_100];
const fullBachillerato = [...origBachillerato, ...MEC_BACHILLERATO_21_100];
const fullTecnico = [...origTecnico, ...MEC_TECNICO_21_100];
const fullUniversitario = [...origUniversitario, ...MEC_UNIVERSITARIO_21_100];

// Write modular files
fs.writeFileSync(path.join(outDir, 'basico.ts'), formatFileContent('MECANICA_BASICO', fullBasico), 'utf8');
fs.writeFileSync(path.join(outDir, 'intermedio.ts'), formatFileContent('MECANICA_INTERMEDIO', fullIntermedio), 'utf8');
fs.writeFileSync(path.join(outDir, 'bachillerato.ts'), formatFileContent('MECANICA_BACHILLERATO', fullBachillerato), 'utf8');
fs.writeFileSync(path.join(outDir, 'tecnico.ts'), formatFileContent('MECANICA_TECNICO', fullTecnico), 'utf8');
fs.writeFileSync(path.join(outDir, 'universitario.ts'), formatFileContent('MECANICA_UNIVERSITARIO', fullUniversitario), 'utf8');

// Write index.ts
const indexContent = `import { Question } from '../../../types';
import { MECANICA_BASICO } from './basico';
import { MECANICA_INTERMEDIO } from './intermedio';
import { MECANICA_BACHILLERATO } from './bachillerato';
import { MECANICA_TECNICO } from './tecnico';
import { MECANICA_UNIVERSITARIO } from './universitario';

export const QUESTIONS_MECANICA: Question[] = [
  ...MECANICA_BASICO,
  ...MECANICA_INTERMEDIO,
  ...MECANICA_BACHILLERATO,
  ...MECANICA_TECNICO,
  ...MECANICA_UNIVERSITARIO
];
`;
fs.writeFileSync(path.join(outDir, 'index.ts'), indexContent, 'utf8');

// Update src/data/questions/mecanica.ts
fs.writeFileSync('src/data/questions/mecanica.ts', `export { QUESTIONS_MECANICA } from './mecanica/index';\n`, 'utf8');

console.log('Mecanica assembly complete! Total questions:', 
  fullBasico.length + fullIntermedio.length + fullBachillerato.length + fullTecnico.length + fullUniversitario.length
);
