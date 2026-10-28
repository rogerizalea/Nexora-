import { Question } from '../../../types';
import { FISICA_BASICO } from './basico';
import { FISICA_INTERMEDIO } from './intermedio';
import { FISICA_BACHILLERATO } from './bachillerato';
import { FISICA_TECNICO } from './tecnico';
import { FISICA_UNIVERSITARIO } from './universitario';

export const QUESTIONS_FISICA: Question[] = [
  ...FISICA_BASICO,
  ...FISICA_INTERMEDIO,
  ...FISICA_BACHILLERATO,
  ...FISICA_TECNICO,
  ...FISICA_UNIVERSITARIO
];
