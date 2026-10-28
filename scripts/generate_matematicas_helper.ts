import fs from 'fs';
import path from 'path';
import { Question } from '../src/types';

const existingPath = path.resolve('./src/data/questions/matematicas/existing.json');
const existingByLevel = JSON.parse(fs.readFileSync(existingPath, 'utf8'));

// Helper to format question into clean TypeScript
function generateLevelFile(levelName: string, varName: string, newQuestions: Question[]) {
  const existing = existingByLevel[levelName] || [];
  const combined = [...existing, ...newQuestions];
  if (combined.length !== 100) {
    throw new Error(`Level ${levelName} must have exactly 100 questions, got ${combined.length}`);
  }
  
  // Re-number sequence from 1 to 100 while preserving existing question content
  combined.forEach((q, idx) => {
    q.number = idx + 1;
    q.sectionId = 1;
    q.educationalLevel = levelName as any;
  });

  const tsCode = `import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE MATEMÁTICAS - NIVEL ${levelName.toUpperCase()}
 * Total de reactivos: 100
 * Conserva reactivos 1-20 originales e incorpora 21-100 validados pedagógicamente.
 */
export const ${varName}: Question[] = ${JSON.stringify(combined, null, 2)};
`;
  return tsCode;
}

export { generateLevelFile, existingByLevel };
