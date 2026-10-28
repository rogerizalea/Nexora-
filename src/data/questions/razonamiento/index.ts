import { Question } from '../../../types';
import { RAZONAMIENTO_BASICO } from './basico';
import { RAZONAMIENTO_INTERMEDIO } from './intermedio';
import { RAZONAMIENTO_BACHILLERATO } from './bachillerato';
import { RAZONAMIENTO_TECNICO } from './tecnico';
import { RAZONAMIENTO_UNIVERSITARIO } from './universitario';

export const QUESTIONS_RAZONAMIENTO: Question[] = [
  ...RAZONAMIENTO_BASICO,
  ...RAZONAMIENTO_INTERMEDIO,
  ...RAZONAMIENTO_BACHILLERATO,
  ...RAZONAMIENTO_TECNICO,
  ...RAZONAMIENTO_UNIVERSITARIO
];
