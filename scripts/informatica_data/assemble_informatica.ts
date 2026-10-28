import fs from 'fs';
import path from 'path';
import { QUESTIONS_INFORMATICA } from '../../src/data/questions/informatica';
import { INF_BASICO_21_100 } from './build_basico';
import { INF_INTERMEDIO_21_100 } from './build_intermedio';
import { INF_BACHILLERATO_21_100 } from './build_bachillerato';
import { INF_TECNICO_21_100 } from './build_tecnico';
import { INF_UNIVERSITARIO_21_100 } from './build_universitario';

const outDir = 'src/data/questions/informatica';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Separate original 100 questions by educational level
const origBasico = QUESTIONS_INFORMATICA.filter(q => q.educationalLevel === 'Básico');
const origIntermedio = QUESTIONS_INFORMATICA.filter(q => q.educationalLevel === 'Intermedio');
const origBachillerato = QUESTIONS_INFORMATICA.filter(q => q.educationalLevel === 'Bachillerato');
const origTecnico = QUESTIONS_INFORMATICA.filter(q => q.educationalLevel === 'Técnico');
const origUniversitario = QUESTIONS_INFORMATICA.filter(q => q.educationalLevel === 'Universitario');

console.log('Original counts:', {
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
const fullBasico = [...origBasico, ...INF_BASICO_21_100];
const fullIntermedio = [...origIntermedio, ...INF_INTERMEDIO_21_100];
const fullBachillerato = [...origBachillerato, ...INF_BACHILLERATO_21_100];
const fullTecnico = [...origTecnico, ...INF_TECNICO_21_100];
const fullUniversitario = [...origUniversitario, ...INF_UNIVERSITARIO_21_100];

// Write modular files
fs.writeFileSync(path.join(outDir, 'basico.ts'), formatFileContent('INFORMATICA_BASICO', fullBasico), 'utf8');
fs.writeFileSync(path.join(outDir, 'intermedio.ts'), formatFileContent('INFORMATICA_INTERMEDIO', fullIntermedio), 'utf8');
fs.writeFileSync(path.join(outDir, 'bachillerato.ts'), formatFileContent('INFORMATICA_BACHILLERATO', fullBachillerato), 'utf8');
fs.writeFileSync(path.join(outDir, 'tecnico.ts'), formatFileContent('INFORMATICA_TECNICO', fullTecnico), 'utf8');
fs.writeFileSync(path.join(outDir, 'universitario.ts'), formatFileContent('INFORMATICA_UNIVERSITARIO', fullUniversitario), 'utf8');

// Write index.ts
const indexContent = `import { Question } from '../../../types';
import { INFORMATICA_BASICO } from './basico';
import { INFORMATICA_INTERMEDIO } from './intermedio';
import { INFORMATICA_BACHILLERATO } from './bachillerato';
import { INFORMATICA_TECNICO } from './tecnico';
import { INFORMATICA_UNIVERSITARIO } from './universitario';

export const QUESTIONS_INFORMATICA: Question[] = [
  ...INFORMATICA_BASICO,
  ...INFORMATICA_INTERMEDIO,
  ...INFORMATICA_BACHILLERATO,
  ...INFORMATICA_TECNICO,
  ...INFORMATICA_UNIVERSITARIO
];
`;
fs.writeFileSync(path.join(outDir, 'index.ts'), indexContent, 'utf8');

// Update src/data/questions/informatica.ts
fs.writeFileSync('src/data/questions/informatica.ts', `export { QUESTIONS_INFORMATICA } from './informatica/index';\n`, 'utf8');

console.log('Informatica assembly complete! Total questions:', 
  fullBasico.length + fullIntermedio.length + fullBachillerato.length + fullTecnico.length + fullUniversitario.length
);
