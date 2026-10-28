import { Question } from '../../../types';
import { LENGUA_BASICO } from './basico';
import { LENGUA_INTERMEDIO } from './intermedio';
import { LENGUA_BACHILLERATO } from './bachillerato';
import { LENGUA_TECNICO } from './tecnico';
import { LENGUA_UNIVERSITARIO } from './universitario';

export const QUESTIONS_LENGUA: Question[] = [
  ...LENGUA_BASICO,
  ...LENGUA_INTERMEDIO,
  ...LENGUA_BACHILLERATO,
  ...LENGUA_TECNICO,
  ...LENGUA_UNIVERSITARIO
];
