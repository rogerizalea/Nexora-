import { Question } from '../../../types';
import { CIENCIAS_NATURALES_BASICO } from './basico';
import { CIENCIAS_NATURALES_INTERMEDIO } from './intermedio';
import { CIENCIAS_NATURALES_BACHILLERATO } from './bachillerato';
import { CIENCIAS_NATURALES_TECNICO } from './tecnico';
import { CIENCIAS_NATURALES_UNIVERSITARIO } from './universitario';

export const QUESTIONS_CIENCIAS_NATURALES: Question[] = [
  ...CIENCIAS_NATURALES_BASICO,
  ...CIENCIAS_NATURALES_INTERMEDIO,
  ...CIENCIAS_NATURALES_BACHILLERATO,
  ...CIENCIAS_NATURALES_TECNICO,
  ...CIENCIAS_NATURALES_UNIVERSITARIO
];
