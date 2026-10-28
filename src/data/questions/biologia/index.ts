import { Question } from '../../../types';
import { BIOLOGIA_BASICO } from './basico';
import { BIOLOGIA_INTERMEDIO } from './intermedio';
import { BIOLOGIA_BACHILLERATO } from './bachillerato';
import { BIOLOGIA_TECNICO } from './tecnico';
import { BIOLOGIA_UNIVERSITARIO } from './universitario';

export const QUESTIONS_BIOLOGIA: Question[] = [
  ...BIOLOGIA_BASICO,
  ...BIOLOGIA_INTERMEDIO,
  ...BIOLOGIA_BACHILLERATO,
  ...BIOLOGIA_TECNICO,
  ...BIOLOGIA_UNIVERSITARIO
];
