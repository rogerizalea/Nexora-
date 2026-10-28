import { Question } from '../../../types';
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
