import { Question } from '../types';
import { INITIAL_SECTIONS } from './diagnosticData';
import { 
  BANK_SCIENCES, 
  BANK_HUMANITIES, 
  BANK_ADVANCED_DIFFICULTY 
} from './questionBanks';

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

// Starter bank for Electricidad
const QUESTIONS_ELECTRICIDAD: Question[] = [
  {
    id: 'elec-1',
    sectionId: 10,
    number: 1,
    text: 'Según la Ley de Ohm, ¿cuál es la relación correcta entre voltaje (V), corriente (I) y resistencia (R)?',
    options: ['V = I × R', 'V = I / R', 'V = R / I', 'V = I + R'],
    correctIndex: 0,
    explanation: 'La Ley de Ohm establece que la diferencia de potencial (voltaje) es directamente proporcional al producto de la corriente por la resistencia: V = I × R.',
    skill: 'Fundamentos Eléctricos',
    difficulty: 'Fácil'
  },
  {
    id: 'elec-2',
    sectionId: 10,
    number: 2,
    text: '¿En qué unidad se mide la potencia eléctrica en el Sistema Internacional?',
    options: ['Amperio (A)', 'Voltio (V)', 'Vatio o Watt (W)', 'Ohmio (Ω)'],
    correctIndex: 2,
    explanation: 'La potencia eléctrica, que representa la energía consumida o suministrada por unidad de tiempo, se mide en Vatios (W).',
    skill: 'Unidades y Potencia',
    difficulty: 'Fácil'
  },
  {
    id: 'elec-3',
    sectionId: 10,
    number: 3,
    text: 'En un circuito con dos resistencias de 10 Ω conectadas en serie, ¿cuál es la resistencia total equivalente?',
    options: ['5 Ω', '10 Ω', '20 Ω', '100 Ω'],
    correctIndex: 2,
    explanation: 'En una conexión en serie, las resistencias se suman algebraicamente: R_total = R1 + R2 = 10 Ω + 10 Ω = 20 Ω.',
    skill: 'Circuitos en Serie y Paralelo',
    difficulty: 'Intermedio'
  },
  {
    id: 'elec-4',
    sectionId: 10,
    number: 4,
    text: '¿Cuál es la función principal de un disyuntor termomagnético en una instalación residencial?',
    options: ['Aumentar el voltaje de la red', 'Proteger contra sobrecargas y cortocircuitos', 'Convertir corriente alterna en continua', 'Medir el consumo de energía en kWh'],
    correctIndex: 1,
    explanation: 'El disyuntor termomagnético corta automáticamente el flujo de corriente ante sobrecargas térmicas y cortocircuitos magnéticos para evitar incendios y daños.',
    skill: 'Seguridad Eléctrica',
    difficulty: 'Intermedio'
  },
  {
    id: 'elec-5',
    sectionId: 10,
    number: 5,
    text: 'Si un electrodoméstico consume 4 A conectado a una línea de 220 V, ¿cuál es su potencia eléctrica?',
    options: ['55 W', '224 W', '880 W', '1100 W'],
    correctIndex: 2,
    explanation: 'La potencia eléctrica en corriente continua y circuitos resistivos es P = V × I = 220 V × 4 A = 880 W.',
    skill: 'Cálculo de Potencia',
    difficulty: 'Desafiante'
  }
];

// Starter bank for Informática
const QUESTIONS_INFORMATICA: Question[] = [
  {
    id: 'info-1',
    sectionId: 11,
    number: 1,
    text: '¿Cuál de los siguientes componentes es considerado el "cerebro" de una computadora encargado de procesar instrucciones?',
    options: ['Memoria RAM', 'Unidad Central de Procesamiento (CPU)', 'Disco Duro SSD', 'Fuente de Poder'],
    correctIndex: 1,
    explanation: 'La CPU (Unidad Central de Procesamiento) ejecuta los cálculos, operaciones lógicas y procesa las instrucciones de los programas.',
    skill: 'Arquitectura de Hardware',
    difficulty: 'Fácil'
  },
  {
    id: 'info-2',
    sectionId: 11,
    number: 2,
    text: '¿Qué protocolo de red se utiliza de forma estándar para la transferencia segura y cifrada de páginas web?',
    options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'],
    correctIndex: 2,
    explanation: 'HTTPS (Hypertext Transfer Protocol Secure) utiliza cifrado TLS/SSL para proteger la privacidad e integridad de los datos transmitidos.',
    skill: 'Redes y Ciberseguridad',
    difficulty: 'Fácil'
  },
  {
    id: 'info-3',
    sectionId: 11,
    number: 3,
    text: 'En programación, ¿qué estructura de control se utiliza para repetir un bloque de código mientras se cumpla una condición?',
    options: ['Condicional if / else', 'Bucle while o for', 'Declaración return', 'Operador ternario'],
    correctIndex: 1,
    explanation: 'Los bucles o ciclos (while, for, do-while) permiten la ejecución repetida de instrucciones basada en una condición lógica evaluada.',
    skill: 'Lógica de Programación',
    difficulty: 'Intermedio'
  },
  {
    id: 'info-4',
    sectionId: 11,
    number: 4,
    text: '¿Qué es una dirección IP en el contexto de redes informáticas?',
    options: ['El número de serie físico de la placa madre', 'Un identificador numérico único asignado a un dispositivo en una red', 'Un archivo que almacena contraseñas cifradas', 'El nombre del fabricante de la tarjeta de red'],
    correctIndex: 1,
    explanation: 'Una dirección IP (Internet Protocol) es una etiqueta numérica lógica que identifica de forma única a una interfaz de red dentro de una red TCP/IP.',
    skill: 'Redes de Datos',
    difficulty: 'Intermedio'
  },
  {
    id: 'info-5',
    sectionId: 11,
    number: 5,
    text: 'En bases de datos relacionales, ¿qué comando SQL se utiliza para consultar y extraer registros de una tabla?',
    options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correctIndex: 2,
    explanation: 'El comando SELECT es la instrucción fundamental del lenguaje SQL para consultar y recuperar datos específicos almacenados en una o más tablas.',
    skill: 'Bases de Datos',
    difficulty: 'Desafiante'
  }
];

// Starter bank for Mecánica Automotriz
const QUESTIONS_MECANICA: Question[] = [
  {
    id: 'mec-1',
    sectionId: 12,
    number: 1,
    text: '¿Cuáles son los cuatro tiempos ordenados del ciclo de combustión interna de cuatro tiempos (Ciclo Otto)?',
    options: ['Encendido, Compresión, Expansión, Escape', 'Admisión, Compresión, Explosión (Fuerza), Escape', 'Admisión, Refrigeración, Combustión, Vaciado', 'Inyección, Giro, Escape, Retorno'],
    correctIndex: 1,
    explanation: 'El ciclo Otto de 4 tiempos consta secuencialmente de: 1) Admisión de la mezcla, 2) Compresión, 3) Explosión/Fuerza (carrera de potencia) y 4) Escape de gases quemados.',
    skill: 'Termodinámica y Motores',
    difficulty: 'Fácil'
  },
  {
    id: 'mec-2',
    sectionId: 12,
    number: 2,
    text: '¿Cuál es la función principal del aceite lubricante en un motor de combustión interna?',
    options: ['Generar la chispa de encendido', 'Reducir la fricción entre piezas metálicas móviles y disipar calor', 'Filtrar el aire que ingresa a la cámara', 'Aumentar el octanaje del combustible'],
    correctIndex: 1,
    explanation: 'El lubricante crea una película protectora que minimiza el rozamiento y desgaste entre piezas en movimiento, ayuda a enfriar y limpia residuos internos.',
    skill: 'Sistemas de Lubricación',
    difficulty: 'Fácil'
  },
  {
    id: 'mec-3',
    sectionId: 12,
    number: 3,
    text: '¿Qué componente del sistema de frenos presiona las pastillas contra el disco para detener el vehículo?',
    options: ['Caliper o Mordaza de freno', 'Alternador', 'Volante de inercia', 'Árbol de levas'],
    correctIndex: 0,
    explanation: 'El caliper (mordaza) utiliza presión hidráulica para empujar los pistones que aprietan las pastillas de freno contra el disco giratorio.',
    skill: 'Sistemas de Frenos',
    difficulty: 'Intermedio'
  },
  {
    id: 'mec-4',
    sectionId: 12,
    number: 4,
    text: '¿Qué indica el código de viscosidad "5W-30" en un aceite de motor?',
    options: ['5 cilindros y 30 caballos de vapor', 'Viscosidad baja en frío (W = Winter) y viscosidad 30 a temperatura normal de operación', '5 litros de capacidad con 30% de aditivos sintéticos', 'Presión recomendada de 30 PSI'],
    correctIndex: 1,
    explanation: 'La nomenclatura SAE multígrado indica fluidez en frío (5W por Winter) y comportamiento térmico a 100°C (grado 30).',
    skill: 'Mantenimiento y Fluidos',
    difficulty: 'Intermedio'
  },
  {
    id: 'mec-5',
    sectionId: 12,
    number: 5,
    text: '¿Cuál es la función del catalizador o convertidor catalítico en el sistema de escape?',
    options: ['Aumentar la potencia del motor a altas revoluciones', 'Transformar gases tóxicos (CO, NOx, HC) en sustancias menos dañinas (CO₂, H₂O, N₂)', 'Silenciar el sonido del motor mediante cámaras de resonancia', 'Recircular el combustible no quemado hacia el tanque'],
    correctIndex: 1,
    explanation: 'El catalizador promueve reacciones redox a alta temperatura para transformar monóxido de carbono, óxidos de nitrógeno e hidrocarburos no quemados en gases menos perjudiciales.',
    skill: 'Emisiones y Escape',
    difficulty: 'Desafiante'
  }
];

// Combine all 12 subjects with real questions
export const NEXORA_SUBJECTS: SubjectInfo[] = [
  {
    id: 'matematicas',
    name: 'Matemáticas',
    shortDescription: 'Aritmética, álgebra, geometría, proporciones y resolución de problemas.',
    iconName: 'Calculator',
    gradient: 'from-blue-600 to-indigo-700',
    category: 'Troncales',
    badge: 'Troncal Principal',
    questions: INITIAL_SECTIONS[0]?.questions || []
  },
  {
    id: 'lengua',
    name: 'Lengua y Literatura',
    shortDescription: 'Comprensión lectora, ortografía, semántica y análisis textual.',
    iconName: 'BookOpen',
    gradient: 'from-purple-600 to-pink-600',
    category: 'Troncales',
    badge: 'Troncal Principal',
    questions: INITIAL_SECTIONS[1]?.questions || []
  },
  {
    id: 'razonamiento',
    name: 'Razonamiento Lógico y Abstracto',
    shortDescription: 'Secuencias lógicas, analogías, patrones espaciales y deducción formal.',
    iconName: 'Brain',
    gradient: 'from-teal-600 to-emerald-600',
    category: 'Troncales',
    badge: 'Habilidades Cognitivas',
    questions: INITIAL_SECTIONS[2]?.questions || []
  },
  {
    id: 'ciencias',
    name: 'Ciencias Naturales',
    shortDescription: 'Ecosistemas, cadenas alimenticias, biodiversidad y método científico.',
    iconName: 'Leaf',
    gradient: 'from-emerald-600 to-green-700',
    category: 'Ciencias',
    badge: 'Ciencias Naturales',
    questions: BANK_SCIENCES.sections[0]?.questions || []
  },
  {
    id: 'fisica',
    name: 'Física',
    shortDescription: 'Cinemática, leyes de Newton, energía, ondas y termodinámica.',
    iconName: 'Atom',
    gradient: 'from-cyan-600 to-blue-700',
    category: 'Ciencias',
    badge: 'Física & Movimiento',
    questions: BANK_SCIENCES.sections[1]?.questions.slice(0, 5) || []
  },
  {
    id: 'quimica',
    name: 'Química',
    shortDescription: 'Estructura atómica, enlaces, tabla periódica y reacciones químicas.',
    iconName: 'FlaskConical',
    gradient: 'from-violet-600 to-purple-800',
    category: 'Ciencias',
    badge: 'Materia & Reacciones',
    questions: BANK_SCIENCES.sections[2]?.questions.slice(0, 5) || []
  },
  {
    id: 'biologia',
    name: 'Biología',
    shortDescription: 'Célula, genética, sistemas orgánicos, evolución y homeostasis.',
    iconName: 'Dna',
    gradient: 'from-rose-600 to-pink-700',
    category: 'Ciencias',
    badge: 'Ciencias de la Vida',
    questions: BANK_SCIENCES.sections[0]?.questions.slice(0, 5) || []
  },
  {
    id: 'ingles',
    name: 'Inglés',
    shortDescription: 'Grammar, reading comprehension, vocabulary and professional dialogue.',
    iconName: 'Languages',
    gradient: 'from-amber-600 to-orange-700',
    category: 'Humanidades',
    badge: 'Idioma Extranjero',
    questions: BANK_HUMANITIES.sections[2]?.questions || []
  },
  {
    id: 'sociales',
    name: 'Estudios Sociales',
    shortDescription: 'Historia universal, geografía humana, ciudadanía y derechos fundamentales.',
    iconName: 'Globe2',
    gradient: 'from-sky-600 to-indigo-800',
    category: 'Humanidades',
    badge: 'Ciencias Sociales',
    questions: BANK_HUMANITIES.sections[0]?.questions || []
  },
  {
    id: 'electricidad',
    name: 'Electricidad',
    shortDescription: 'Circuitos, ley de Ohm, potencia, medidas eléctricas y protección.',
    iconName: 'Zap',
    gradient: 'from-amber-500 to-yellow-600',
    category: 'Técnicas',
    badge: 'Especialidad Técnica',
    questions: QUESTIONS_ELECTRICIDAD
  },
  {
    id: 'informatica',
    name: 'Informática',
    shortDescription: 'Hardware, arquitectura de redes, algoritmos, bases de datos y seguridad.',
    iconName: 'Cpu',
    gradient: 'from-indigo-600 to-cyan-600',
    category: 'Técnicas',
    badge: 'Tecnología & TI',
    questions: QUESTIONS_INFORMATICA
  },
  {
    id: 'mecanica',
    name: 'Mecánica Automotriz',
    shortDescription: 'Motores 4 tiempos, sistemas de frenos, lubricación y diagnóstico.',
    iconName: 'Wrench',
    gradient: 'from-slate-700 to-zinc-900',
    category: 'Técnicas',
    badge: 'Ingeniería Automotriz',
    questions: QUESTIONS_MECANICA
  }
];

export function getSubjectById(subjectId: string): SubjectInfo | undefined {
  return NEXORA_SUBJECTS.find(s => s.id === subjectId);
}

/**
 * Generates an ExamBank dynamically based on student preferences:
 * - Selected subject
 * - Target difficulty ('Fácil' | 'Intermedio' | 'Desafiante' | 'Todas')
 * - Question count (10, 20, 30)
 * - Mode: 'practice' | 'exam'
 */
export function buildCustomSubjectExam(
  subjectId: string,
  difficulty: 'Fácil' | 'Intermedio' | 'Desafiante' | 'Todas',
  requestedCount: number,
  mode: 'practice' | 'exam'
): { examBank: any; actualCount: number; message?: string } {
  const subject = getSubjectById(subjectId) || NEXORA_SUBJECTS[0];
  let pool = [...subject.questions];

  // Filter by difficulty if not 'Todas'
  if (difficulty !== 'Todas') {
    const filtered = pool.filter(q => q.difficulty === difficulty);
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  // Shuffle pool deterministically
  const shuffled = pool.sort(() => Math.random() - 0.5);
  const actualCount = Math.min(requestedCount, shuffled.length);
  const selectedQuestions = shuffled.slice(0, actualCount).map((q, idx) => ({
    ...q,
    number: idx + 1
  }));

  const message = actualCount < requestedCount
    ? `Esta materia cuenta actualmente con ${shuffled.length} preguntas disponibles para la dificultad elegida.`
    : undefined;

  const dynamicBank = {
    id: `custom-${subject.id}-${Date.now().toString(36)}`,
    title: `${subject.name} • ${mode === 'exam' ? 'Evaluación Formal' : 'Modo Práctica'}`,
    subtitle: `Dificultad: ${difficulty} • ${actualCount} Preguntas Seleccionadas`,
    badge: subject.name,
    description: `Evaluación adaptada de ${subject.name} configurada en modo ${mode === 'exam' ? 'Formal' : 'Práctica'}.`,
    sections: [
      {
        id: 1,
        title: `EVALUACIÓN EN ${subject.name.toUpperCase()}`,
        shortTitle: subject.name,
        icon: subject.iconName,
        description: subject.shortDescription,
        questions: selectedQuestions
      }
    ]
  };

  return {
    examBank: dynamicBank,
    actualCount,
    message
  };
}
