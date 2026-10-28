import { Question, EducationalLevel, ExamMode } from '../types';
import { selectSmartQuestions, recordQuestionsUsage } from '../services/questionEngine';
import { balanceExamBank } from '../services/answerDistributionEngine';
import {
  QUESTIONS_MATEMATICAS
} from './questions/matematicas';
import {
  QUESTIONS_LENGUA
} from './questions/lengua';
import {
  QUESTIONS_RAZONAMIENTO
} from './questions/razonamiento';
import {
  QUESTIONS_CIENCIAS_NATURALES
} from './questions/ciencias_naturales';
import {
  QUESTIONS_FISICA
} from './questions/fisica';
import {
  QUESTIONS_QUIMICA
} from './questions/quimica';
import {
  QUESTIONS_BIOLOGIA
} from './questions/biologia';
import {
  QUESTIONS_INGLES
} from './questions/ingles';
import {
  QUESTIONS_SOCIALES
} from './questions/sociales';
import {
  QUESTIONS_ELECTRICIDAD
} from './questions/electricidad';
import {
  QUESTIONS_INFORMATICA
} from './questions/informatica';
import {
  QUESTIONS_MECANICA
} from './questions/mecanica';

export interface SubjectInfo {
  id: string;
  name: string;
  shortDescription: string;
  iconName: string;
  gradient: string;
  category: 'Troncales' | 'Ciencias' | 'Humanidades' | 'Técnicas';
  badge: string;
  questions: Question[];
}

// 1. Matemáticas pool: 500 reactivos oficiales (100 por nivel)
const POOL_MATEMATICAS: Question[] = QUESTIONS_MATEMATICAS;

// 2. Lengua y Literatura pool: 500 reactivos oficiales (100 por nivel)
const POOL_LENGUA: Question[] = QUESTIONS_LENGUA;

// 3. Razonamiento lógico y abstracto pool: 500 reactivos oficiales (100 por nivel)
const POOL_RAZONAMIENTO: Question[] = QUESTIONS_RAZONAMIENTO;

// 4. Ciencias Naturales: 500 reactivos oficiales (100 por nivel)
const POOL_CIENCIAS_NATURALES: Question[] = QUESTIONS_CIENCIAS_NATURALES;

// 5. Física: 500 reactivos oficiales (100 por nivel)
const POOL_FISICA: Question[] = QUESTIONS_FISICA;

// 6. Química: 500 reactivos oficiales (100 por nivel)
const POOL_QUIMICA: Question[] = QUESTIONS_QUIMICA;

// 7. Biología: 500 reactivos oficiales (100 por nivel)
const POOL_BIOLOGIA: Question[] = QUESTIONS_BIOLOGIA;

// 8. Inglés: 500 reactivos oficiales (100 por nivel)
const POOL_INGLES: Question[] = QUESTIONS_INGLES;

// 9. Estudios Sociales: 500 reactivos oficiales (100 por nivel)
const POOL_SOCIALES: Question[] = QUESTIONS_SOCIALES;

// 10. Electricidad: 500 reactivos oficiales (100 por nivel)
const POOL_ELECTRICIDAD: Question[] = QUESTIONS_ELECTRICIDAD;

// 11. Informática: 500 reactivos oficiales (100 por nivel)
const POOL_INFORMATICA: Question[] = QUESTIONS_INFORMATICA;

// 12. Mecánica Automotriz: 500 reactivos oficiales (100 por nivel)
const POOL_MECANICA: Question[] = QUESTIONS_MECANICA;

// =========================================================================
// CATÁLOGO OFICIAL DE LAS 12 MATERIAS DE NEXORA
// =========================================================================
export const NEXORA_SUBJECTS: SubjectInfo[] = [
  {
    id: 'matematicas',
    name: 'Matemáticas',
    shortDescription: 'Aritmética, álgebra, geometría plana, trigonometría y cálculo diferencial.',
    iconName: 'Calculator',
    gradient: 'from-[#175CD3] to-indigo-800',
    category: 'Troncales',
    badge: 'Troncal Principal',
    questions: POOL_MATEMATICAS
  },
  {
    id: 'lengua',
    name: 'Lengua y Literatura',
    shortDescription: 'Ortografía, sintaxis, comprensión lectora, literatura y figuras retóricas.',
    iconName: 'BookOpen',
    gradient: 'from-purple-600 to-indigo-900',
    category: 'Troncales',
    badge: 'Troncal Principal',
    questions: POOL_LENGUA
  },
  {
    id: 'razonamiento',
    name: 'Razonamiento Lógico y Abstracto',
    shortDescription: 'Series numéricas, patrones espaciales, analogías y silogismos deductivos.',
    iconName: 'Brain',
    gradient: 'from-amber-500 to-rose-700',
    category: 'Troncales',
    badge: 'Pensamiento Crítico',
    questions: POOL_RAZONAMIENTO
  },
  {
    id: 'ciencias_naturales',
    name: 'Ciencias Naturales',
    shortDescription: 'Materia y energía, ecosistemas, atmósfera terrestre y método científico.',
    iconName: 'Leaf',
    gradient: 'from-emerald-500 to-teal-800',
    category: 'Ciencias',
    badge: 'Medio Ambiente',
    questions: POOL_CIENCIAS_NATURALES
  },
  {
    id: 'fisica',
    name: 'Física',
    shortDescription: 'Cinemática MRU/MRUA, leyes de Newton, trabajo, energía y termodinámica.',
    iconName: 'Atom',
    gradient: 'from-cyan-600 to-blue-900',
    category: 'Ciencias',
    badge: 'Ciencias Exactas',
    questions: POOL_FISICA
  },
  {
    id: 'quimica',
    name: 'Química',
    shortDescription: 'Estructura atómica, tabla periódica, enlaces, estequiometría y ácido-base.',
    iconName: 'FlaskConical',
    gradient: 'from-violet-600 to-purple-800',
    category: 'Ciencias',
    badge: 'Materia & Reacciones',
    questions: POOL_QUIMICA
  },
  {
    id: 'biologia',
    name: 'Biología',
    shortDescription: 'Teoría celular, genética mendeliana y molecular, evolución y fisiología.',
    iconName: 'Dna',
    gradient: 'from-rose-600 to-pink-700',
    category: 'Ciencias',
    badge: 'Ciencias de la Vida',
    questions: POOL_BIOLOGIA
  },
  {
    id: 'ingles',
    name: 'Inglés',
    shortDescription: 'Grammar tenses, reading comprehension, conditionals and technical English.',
    iconName: 'Languages',
    gradient: 'from-amber-600 to-orange-700',
    category: 'Humanidades',
    badge: 'Idioma Extranjero',
    questions: POOL_INGLES
  },
  {
    id: 'sociales',
    name: 'Estudios Sociales',
    shortDescription: 'Historia universal, geografía humana, derechos fundamentales y ciudadanía.',
    iconName: 'Globe2',
    gradient: 'from-sky-600 to-indigo-800',
    category: 'Humanidades',
    badge: 'Ciencias Sociales',
    questions: POOL_SOCIALES
  },
  {
    id: 'electricidad',
    name: 'Electricidad',
    shortDescription: 'Ley de Ohm y Kirchhoff, potencia AC/DC, transformadores y seguridad LOTO.',
    iconName: 'Zap',
    gradient: 'from-amber-500 to-yellow-600',
    category: 'Técnicas',
    badge: 'Especialidad Técnica',
    questions: POOL_ELECTRICIDAD
  },
  {
    id: 'informatica',
    name: 'Informática',
    shortDescription: 'Hardware, arquitectura de redes, algoritmos, bases de datos SQL y seguridad.',
    iconName: 'Cpu',
    gradient: 'from-indigo-600 to-cyan-600',
    category: 'Técnicas',
    badge: 'Tecnología & TI',
    questions: POOL_INFORMATICA
  },
  {
    id: 'mecanica',
    name: 'Mecánica Automotriz',
    shortDescription: 'Ciclo Otto 4 tiempos, frenos ABS, lubricación, inyección y diagnóstico OBD-II.',
    iconName: 'Wrench',
    gradient: 'from-slate-700 to-zinc-900',
    category: 'Técnicas',
    badge: 'Ingeniería Automotriz',
    questions: POOL_MECANICA
  }
];

export function getSubjectById(subjectId: string): SubjectInfo | undefined {
  return NEXORA_SUBJECTS.find(s => s.id === subjectId);
}

/**
 * Builds a dynamic ExamBank based on subject, educational level, difficulty, and question count.
 */
export function buildCustomSubjectExam(
  subjectId: string,
  difficulty: 'Fácil' | 'Intermedio' | 'Desafiante' | 'Todas',
  requestedCount: number,
  mode: ExamMode,
  educationalLevel?: EducationalLevel | 'Todos',
  options?: { recordImmediate?: boolean; excludeIds?: string[] }
): {
  examBank: any;
  actualCount: number;
  message?: string;
  unseenCount: number;
  recycledCount: number;
  isExhausted: boolean;
} {
  const subject = getSubjectById(subjectId) || NEXORA_SUBJECTS[0];

  // Smart selection with uniform randomness, ID & statement deduplication, and cross-modal separation
  const selection = selectSmartQuestions({
    subjectId: subject.id,
    pool: subject.questions,
    requestedCount,
    mode,
    educationalLevel,
    difficulty,
    excludeIds: options?.excludeIds
  });

  const levelTag = educationalLevel && educationalLevel !== 'Todos' ? ` • Nivel: ${educationalLevel}` : '';
  const diffTag = difficulty !== 'Todas' ? ` • Dificultad: ${difficulty}` : '';

  const dynamicBank = {
    id: `custom-${subject.id}-${Date.now().toString(36)}`,
    title: `${subject.name} • ${mode === 'exam' ? 'Evaluación Formal' : 'Modo Práctica'}`,
    subtitle: `${selection.actualCount} Reactivos Seleccionados${levelTag}${diffTag}`,
    badge: subject.name,
    description: `Evaluación adaptada de ${subject.name} configurada en modo ${mode === 'exam' ? 'Formal' : 'Práctica'}.`,
    subjectId: subject.id,
    educationalLevel: educationalLevel || 'Todos',
    sections: [
      {
        id: 1,
        title: `EVALUACIÓN EN ${subject.name.toUpperCase()}`,
        shortTitle: subject.name,
        icon: subject.iconName,
        description: subject.shortDescription,
        questions: selection.selectedQuestions
      }
    ]
  };

  // Record usage immediately so subsequent tests in practice or exam know these were used
  if (options?.recordImmediate !== false) {
    recordQuestionsUsage(
      subject.id,
      educationalLevel || 'Todos',
      selection.selectedQuestions,
      mode
    );
  }

  const balancedBank = balanceExamBank(dynamicBank);

  return {
    examBank: balancedBank,
    actualCount: selection.actualCount,
    message: selection.message,
    unseenCount: selection.unseenCount,
    recycledCount: selection.recycledCount,
    isExhausted: selection.isExhausted
  };
}

/**
 * Computes the real question coverage report across all 12 subjects and 5 educational levels.
 */
export interface SubjectCoverageRow {
  subjectId: string;
  subjectName: string;
  category: string;
  totalValid: number;
  basico: number;
  intermedio: number;
  bachillerato: number;
  tecnico: number;
  universitario: number;
}

export function getQuestionsCoverageReport(): {
  rows: SubjectCoverageRow[];
  totalQuestionsAcrossPlatform: number;
  totalUniqueIds: number;
} {
  const allIds = new Set<string>();
  let totalValid = 0;

  const rows: SubjectCoverageRow[] = NEXORA_SUBJECTS.map((s) => {
    let basico = 0;
    let intermedio = 0;
    let bachillerato = 0;
    let tecnico = 0;
    let universitario = 0;

    s.questions.forEach((q) => {
      totalValid++;
      allIds.add(q.id);
      const level = q.educationalLevel || 'Intermedio';
      if (level === 'Básico') basico++;
      else if (level === 'Intermedio') intermedio++;
      else if (level === 'Bachillerato') bachillerato++;
      else if (level === 'Técnico') tecnico++;
      else if (level === 'Universitario') universitario++;
    });

    return {
      subjectId: s.id,
      subjectName: s.name,
      category: s.category,
      totalValid: s.questions.length,
      basico,
      intermedio,
      bachillerato,
      tecnico,
      universitario
    };
  });

  return {
    rows,
    totalQuestionsAcrossPlatform: totalValid,
    totalUniqueIds: allIds.size
  };
}
