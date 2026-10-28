import { Question } from '../../../types';
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
