import { Question } from '../../../types';
import { MATEMATICAS_BASICO } from './basico';
import { MATEMATICAS_INTERMEDIO } from './intermedio';
import { MATEMATICAS_BACHILLERATO } from './bachillerato';
import { MATEMATICAS_TECNICO } from './tecnico';
import { MATEMATICAS_UNIVERSITARIO } from './universitario';

export const QUESTIONS_MATEMATICAS: Question[] = [
  ...MATEMATICAS_BASICO,
  ...MATEMATICAS_INTERMEDIO,
  ...MATEMATICAS_BACHILLERATO,
  ...MATEMATICAS_TECNICO,
  ...MATEMATICAS_UNIVERSITARIO
];
