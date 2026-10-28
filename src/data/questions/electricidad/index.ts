import { Question } from '../../../types';
import { ELECTRICIDAD_BASICO } from './basico';
import { ELECTRICIDAD_INTERMEDIO } from './intermedio';
import { ELECTRICIDAD_BACHILLERATO } from './bachillerato';
import { ELECTRICIDAD_TECNICO } from './tecnico';
import { ELECTRICIDAD_UNIVERSITARIO } from './universitario';

export const QUESTIONS_ELECTRICIDAD: Question[] = [
  ...ELECTRICIDAD_BASICO,
  ...ELECTRICIDAD_INTERMEDIO,
  ...ELECTRICIDAD_BACHILLERATO,
  ...ELECTRICIDAD_TECNICO,
  ...ELECTRICIDAD_UNIVERSITARIO
];
