import { Question } from '../../../types';
import { QUIMICA_BASICO } from './basico';
import { QUIMICA_INTERMEDIO } from './intermedio';
import { QUIMICA_BACHILLERATO } from './bachillerato';
import { QUIMICA_TECNICO } from './tecnico';
import { QUIMICA_UNIVERSITARIO } from './universitario';

export const QUESTIONS_QUIMICA: Question[] = [
  ...QUIMICA_BASICO,
  ...QUIMICA_INTERMEDIO,
  ...QUIMICA_BACHILLERATO,
  ...QUIMICA_TECNICO,
  ...QUIMICA_UNIVERSITARIO
];
