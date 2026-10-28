import { Question } from '../../../types';
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
