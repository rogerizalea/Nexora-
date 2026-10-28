import { Question } from '../../../types';
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
