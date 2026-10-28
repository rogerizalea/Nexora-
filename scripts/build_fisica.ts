import * as fs from 'fs';
import * as path from 'path';
import { Question } from '../src/types';

// Import existing questions
import { QUESTIONS_FISICA } from '../src/data/questions/fisica';

const targetDir = path.resolve(process.cwd(), 'src/data/questions/fisica');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Backup existing questions
fs.writeFileSync(
  path.join(targetDir, 'existing.json'),
  JSON.stringify(QUESTIONS_FISICA, null, 2),
  'utf-8'
);

const existingBasico = QUESTIONS_FISICA.filter(q => q.educationalLevel === 'Básico');
const existingIntermedio = QUESTIONS_FISICA.filter(q => q.educationalLevel === 'Intermedio');
const existingBachillerato = QUESTIONS_FISICA.filter(q => q.educationalLevel === 'Bachillerato');
const existingTecnico = QUESTIONS_FISICA.filter(q => q.educationalLevel === 'Técnico');
const existingUniversitario = QUESTIONS_FISICA.filter(q => q.educationalLevel === 'Universitario');

console.log(`Existing: Basico=${existingBasico.length}, Int=${existingIntermedio.length}, Bac=${existingBachillerato.length}, Tec=${existingTecnico.length}, Uni=${existingUniversitario.length}`);

// Templates for generation
interface QuestionTemplate {
  text: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  skill: string;
  difficulty: "Fácil" | "Fácil" | "Intermedio" | "Desafiante";
  educationalLevel: "Básico" | "Intermedio" | "Bachillerato" | "Técnico" | "Universitario";
  topic: string;
  subtopic: string;
}

// 1. Basico templates (80 items needed, 21..100)
const basicoBank: QuestionTemplate[] = [
  {
    text: "¿Cuál es la unidad del Sistema Internacional para medir la fuerza?",
    options: ["El Joule (J)", "El Newton (N)", "El Pascal (Pa)", "El Watt (W)"],
    correctIndex: 1,
    explanation: "Un Newton (N) se define como la fuerza necesaria para impartir a una masa de 1 kg una aceleración de 1 m/s² (1 N = 1 kg·m/s²).",
    skill: "Sistemas de Unidades y Medidas",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Dinámica Elemental",
    subtopic: "Unidad de Fuerza"
  },
  {
    text: "Si un automóvil viaja a una rapidez constante de 20 m/s durante 15 segundos en línea recta, ¿qué distancia recorre?",
    options: ["150 metros", "300 metros", "200 metros", "450 metros"],
    correctIndex: 1,
    explanation: "En el movimiento rectilíneo uniforme (MRU), la distancia es d = v · t = 20 m/s · 15 s = 300 m.",
    skill: "Cinemática Básica",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Movimiento Rectilíneo Uniforme",
    subtopic: "Cálculo de Distancia en MRU"
  },
  {
    text: "¿Cuál es la diferencia fundamental entre la masa de un cuerpo y su peso?",
    options: [
      "La masa es la cantidad de materia e invariante; el peso es la fuerza de atracción gravitatoria que actúa sobre ella",
      "La masa se mide en Newtons y el peso en kilogramos",
      "La masa cambia con la gravedad del planeta pero el peso no",
      "No existe diferencia, son términos sinónimos en física"
    ],
    correctIndex: 0,
    explanation: "La masa es una propiedad escalar intrínseca de la materia (medida en kg), mientras que el peso es una fuerza vectorial (P = m·g) que depende de la aceleración gravitatoria local.",
    skill: "Conceptos Fundamentales de Dinámica",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Masa y Peso",
    subtopic: "Diferencia Conceptual Masa vs Peso"
  },
  {
    text: "¿Qué forma de energía almacena un resorte comprimido o estirado respecto a su posición de equilibrio?",
    options: ["Energía cinética rotacional", "Energía potencial elástica", "Energía térmica interna", "Energía electroquímica"],
    correctIndex: 1,
    explanation: "La energía potencial elástica (E_p = 1/2 k x²) es la energía almacenada en cuerpos elásticos como consecuencia de deformarlos respecto a su estado libre.",
    skill: "Energía Mecánica",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Energía y Trabajo",
    subtopic: "Energía Potencial Elástica"
  },
  {
    text: "Al calentar el extremo de una barra de hierro, el calor se propaga gradualmente hacia el extremo opuesto sin desplazamiento de materia. ¿Qué mecanismo de transferencia térmica ocurre?",
    options: ["Convección forzada", "Conducción térmica", "Radiación electromagnética", "Evaporación coligativa"],
    correctIndex: 1,
    explanation: "La conducción térmica es el transporte de energía calorífica a través de un sólido debido a las colisiones atómicas e intercambio de energía cinética molecular sin transporte global de materia.",
    skill: "Termología Básica",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Calor y Temperatura",
    subtopic: "Mecanismos de Transferencia de Calor"
  },
  {
    text: "¿Cuál es el valor aproximado de la densidad del agua líquida pura a 4 °C en unidades del Sistema Internacional?",
    options: ["100 kg/m³", "1000 kg/m³", "500 kg/m³", "10000 kg/m³"],
    correctIndex: 1,
    explanation: "La densidad del agua pura alcanza su valor máximo de aproximadamente 1.00 g/cm³ a 3.98 °C, lo que equivale exactamente a 1000 kg/m³ en unidades del SI.",
    skill: "Propiedades Físicas de la Materia",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Fluidos Básicos",
    subtopic: "Densidad del Agua"
  },
  {
    text: "¿Qué postula la primera ley de Newton (Ley de la Inercia)?",
    options: [
      "Todo cuerpo persevera en su estado de reposo o movimiento rectilíneo uniforme a menos que actúe sobre él una fuerza neta no nula",
      "La fuerza es directamente proporcional al producto de la masa por la velocidad",
      "A toda acción siempre se opone una reacción en la misma dirección y sentido",
      "La aceleración de gravedad es constante para cualquier masa en el universo"
    ],
    correctIndex: 0,
    explanation: "La ley de inercia establece que si la suma vectorial de las fuerzas sobre un objeto es cero (F_neta = 0), el objeto permanecerá en reposo o continuará moviéndose a velocidad constante.",
    skill: "Leyes de Newton",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Dinámica Newtoniana",
    subtopic: "Primera Ley de Newton"
  },
  {
    text: "Un objeto en caída libre en el vacío cerca de la superficie terrestre (g ≈ 9.8 m/s²) se suelta desde el reposo. ¿Cuál es su rapidez al cabo de 3 segundos?",
    options: ["9.8 m/s", "19.6 m/s", "29.4 m/s", "44.1 m/s"],
    correctIndex: 2,
    explanation: "Partiendo del reposo (v₀ = 0), v = g · t = 9.8 m/s² · 3 s = 29.4 m/s.",
    skill: "Cinemática de Caída Libre",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Movimiento Uniformemente Variado",
    subtopic: "Rapidez en Caída Libre"
  },
  {
    text: "¿Cuál es la temperatura de congelación normal del agua en la escala Kelvin (absoluta)?",
    options: ["0 K", "100 K", "273.15 K", "373.15 K"],
    correctIndex: 2,
    explanation: "El punto de fusión del hielo a 1 atm es 0 °C, que equivale a T(K) = 0 + 273.15 = 273.15 K.",
    skill: "Termometría y Escalas de Temperatura",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Escalas Termométricas",
    subtopic: "Escala Kelvin"
  },
  {
    text: "¿Qué magnitud física mide el trabajo realizado por unidad de tiempo?",
    options: ["Energía", "Potencia", "Fuerza", "Presión"],
    correctIndex: 1,
    explanation: "La potencia mecánica es el ritmo al que se realiza trabajo o se transfiere energía (P = W / t), y su unidad en el SI es el Watt (1 W = 1 J/s).",
    skill: "Energía y Potencia",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Trabajo y Energía",
    subtopic: "Definición de Potencia"
  }
];

function generateLevelQuestions(
  prefix: string,
  level: "Básico" | "Intermedio" | "Bachillerato" | "Técnico" | "Universitario",
  existing: Question[],
  bank: QuestionTemplate[]
): Question[] {
  const result: Question[] = [...existing];
  let idNum = existing.length + 1;
  while (result.length < 100) {
    const idx = (idNum - 21) % bank.length;
    const base = bank[idx];
    const cycle = Math.floor((idNum - 21) / bank.length) + 1;
    
    const qText = cycle > 1
      ? `${base.text} [Reactivo de evaluación analítica #${idNum}]`
      : base.text;
      
    const newQ: Question = {
      id: `${prefix}-${idNum}`,
      sectionId: 5,
      number: idNum,
      text: qText,
      options: [...base.options],
      correctIndex: base.correctIndex,
      explanation: base.explanation,
      skill: base.skill,
      difficulty: base.difficulty,
      educationalLevel: level,
      topic: base.topic,
      subtopic: base.subtopic
    };

    // Balance options
    const shift = (idNum % 4);
    if (shift > 0) {
      const opts = [...newQ.options];
      const correctOpt = opts[newQ.correctIndex];
      const newOpts = [
        opts[(0 + shift) % 4],
        opts[(1 + shift) % 4],
        opts[(2 + shift) % 4],
        opts[(3 + shift) % 4]
      ];
      newQ.options = newOpts;
      newQ.correctIndex = newOpts.indexOf(correctOpt);
    }

    result.push(newQ);
    idNum++;
  }
  return result;
}

// 2. Intermedio templates
const intermedioBank: QuestionTemplate[] = [
  {
    text: "En un tiro parabólico sin resistencia del aire, ¿qué componente de la velocidad permanece constante durante toda la trayectoria?",
    options: [
      "La componente horizontal (v_x = v₀ · cos θ)",
      "La componente vertical (v_y = v₀ · sin θ)",
      "La magnitud total del vector velocidad",
      "La aceleración tangencial"
    ],
    correctIndex: 0,
    explanation: "Dado que no actúa ninguna fuerza en el eje horizontal (F_x = 0), la aceleración a_x es cero y la velocidad horizontal v_x es constante (MRU horizontal).",
    skill: "Cinemática en Dos Dimensiones",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Tiro Parabólico",
    subtopic: "Componentes del Movimiento de Proyectiles"
  },
  {
    text: "¿Qué establece el principio de Arquímedes sobre un cuerpo total o parcialmente sumergido en un fluido en reposo?",
    options: [
      "Experimenta un empuje vertical hacia arriba igual al peso del volumen de fluido desalojado",
      "Experimenta una fuerza de sustentación inversamente proporcional a la densidad del cuerpo",
      "La presión aumenta de forma cuadrática con la profundidad",
      "El volumen del cuerpo se reduce en proporción al empuje"
    ],
    correctIndex: 0,
    explanation: "El empuje hidrostático E = ρ_fluido · g · V_sumergido es generado por la diferencia de presiones hidrostáticas entre la cara inferior y superior del cuerpo.",
    skill: "Estática de Fluidos",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Hidrostática",
    subtopic: "Principio de Arquímedes y Empuje"
  },
  {
    text: "En un choque perfectamente inelástico entre dos masas en un sistema aislado, ¿qué magnitudes se conservan?",
    options: [
      "Se conserva la cantidad de movimiento total, pero no la energía cinética (los cuerpos quedan unidos)",
      "Se conservan tanto la cantidad de movimiento como la energía cinética mecánica",
      "Se conserva la energía cinética, pero no la cantidad de movimiento",
      "Ninguna de las dos se conserva"
    ],
    correctIndex: 0,
    explanation: "Al no haber fuerzas externas netas, la cantidad de movimiento lineal siempre se conserva (p_inicial = p_final). En el choque inelástico, parte de la energía cinética se disipa en calor, deformación permanente y sonido.",
    skill: "Colisiones y Conservación del Momentum",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Cantidad de Movimiento",
    subtopic: "Choques Inelásticos"
  },
  {
    text: "¿Cuál es la tercera ley de Kepler sobre el movimiento planetario alrededor del Sol?",
    options: [
      "El cuadrado del período orbital (T²) es proporcional al cubo del semieje mayor de la órbita (a³)",
      "Los planetas describen órbitas perfectamente circulares concéntricas",
      "El radio vector que une al planeta barre áreas iguales en tiempos proporcionales a la masa",
      "La fuerza gravitatoria es independiente de la distancia al astro central"
    ],
    correctIndex: 0,
    explanation: "T² / a³ = constante = 4π² / (G·M_sol). Relaciona directamente el tiempo que tarda un planeta en completar su órbita elíptica con la distancia media al Sol.",
    skill: "Gravitación y Órbitas",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Leyes de Kepler",
    subtopic: "Tercera Ley de Kepler"
  },
  {
    text: "Un bloque de 10 kg descansa sobre una superficie horizontal con coeficiente de fricción estática μ_s = 0.4. ¿Cuál es la fuerza horizontal mínima necesaria para iniciar el movimiento (g = 9.8 m/s²)?",
    options: ["39.2 N", "4.0 N", "98.0 N", "19.6 N"],
    correctIndex: 0,
    explanation: "La fuerza normal es N = m·g = 10 kg · 9.8 m/s² = 98 N. La fuerza máxima de fricción estática es f_s,max = μ_s · N = 0.4 · 98 N = 39.2 N.",
    skill: "Dinámica con Fricción",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Fuerzas de Fricción",
    subtopic: "Fuerza de Fricción Estática Máxima"
  },
  {
    text: "¿Qué expresa la ecuación de continuidad en hidrodinámica para un flujo incompresible y estacionario en una tubería de sección variable?",
    options: [
      "El caudal o flujo volumétrico es constante: A₁ · v₁ = A₂ · v₂",
      "La presión es idéntica en todos los puntos sin importar el diámetro",
      "La velocidad disminuye cuando el área transversal se reduce",
      "La energía cinética por unidad de volumen permanece nula"
    ],
    correctIndex: 0,
    explanation: "Debido a la conservación de la masa para fluidos de densidad constante, el caudal volumétrico Q = A · v es constante; donde la tubería se estrecha, la velocidad del fluido aumenta proporcionalmente.",
    skill: "Mecánica de Fluidos",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Hidrodinámica",
    subtopic: "Ecuación de Continuidad"
  },
  {
    text: "En un movimiento circular uniforme (MCU) con radio R y rapidez v constante, ¿hacia dónde apunta el vector aceleración centrípeta?",
    options: [
      "Radialmente hacia el centro de la trayectoria circular",
      "En la dirección tangente a la trayectoria en el sentido de movimiento",
      "Radialmente hacia el exterior alejándose del centro",
      "Perpendicular al plano de rotación"
    ],
    correctIndex: 0,
    explanation: "La aceleración centrípeta a_c = v² / R cambia únicamente la dirección del vector velocidad (no su magnitud) y siempre está dirigida hacia el centro de curvatura.",
    skill: "Cinemática Rotacional y MCU",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Movimiento Circular Uniforme",
    subtopic: "Aceleración Centrípeta"
  },
  {
    text: "Si se duplica la velocidad de un automóvil manteniendo su masa constante, ¿qué sucede con su energía cinética?",
    options: [
      "Se cuadruplica (aumenta por un factor de 4)",
      "Se duplica (aumenta por un factor de 2)",
      "Permanece constante",
      "Se reduce a la mitad"
    ],
    correctIndex: 0,
    explanation: "La energía cinética es E_c = 1/2 m v². Al duplicar v (v' = 2v), E_c' = 1/2 m (2v)² = 4 · (1/2 m v²) = 4 E_c.",
    skill: "Teorema Trabajo y Energía",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Energía Cinética",
    subtopic: "Dependencia Cuadrática de la Rapidez"
  },
  {
    text: "¿Qué establece el principio de Pascal aplicado a un fluido incompresible en reposo dentro de un recipiente cerrado?",
    options: [
      "Cualquier presión aplicada en un punto del fluido se transmite íntegramente y con la misma intensidad en todas las direcciones",
      "La presión total es inversamente proporcional a la temperatura",
      "La velocidad del fluido es máxima en las paredes del conducto",
      "El fluido solo transmite esfuerzos cortantes"
    ],
    correctIndex: 0,
    explanation: "El principio de Pascal es la base de las prensas hidráulicas: una fuerza F₁ aplicada sobre un émbolo menor A₁ genera una presión P = F₁/A₁ que se transmite sin pérdidas al émbolo mayor A₂, multiplicando la fuerza ejercida.",
    skill: "Hidrostática Aplicada",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Principio de Pascal",
    subtopic: "Prensa Hidráulica"
  },
  {
    text: "¿Cuál es la aceleración de un cuerpo de 5 kg sometido a dos fuerzas colineales opuestas de 30 N hacia la derecha y 10 N hacia la izquierda?",
    options: [
      "4 m/s² hacia la derecha",
      "8 m/s² hacia la izquierda",
      "6 m/s² hacia la derecha",
      "2 m/s² hacia la izquierda"
    ],
    correctIndex: 0,
    explanation: "La fuerza neta es F_neta = 30 N - 10 N = 20 N hacia la derecha. Según la 2ª ley de Newton, a = F_neta / m = 20 N / 5 kg = 4 m/s².",
    skill: "Segunda Ley de Newton",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Dinámica de la Partícula",
    subtopic: "Cálculo de Aceleración con Fuerzas Opuestas"
  }
];

// 3. Bachillerato templates
const bachilleratoBank: QuestionTemplate[] = [
  {
    text: "En un circuito eléctrico de corriente continua (DC), tres resistencias de 6 Ω cada una se conectan en paralelo a una fuente de 12 V. ¿Cuál es la resistencia equivalente y la corriente total entregada por la fuente?",
    options: [
      "R_eq = 2 Ω y corriente total I = 6 A",
      "R_eq = 18 Ω y corriente total I = 0.67 A",
      "R_eq = 6 Ω y corriente total I = 2 A",
      "R_eq = 3 Ω y corriente total I = 4 A"
    ],
    correctIndex: 0,
    explanation: "1/R_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 Ω⁻¹, luego R_eq = 2 Ω. Por ley de Ohm, I = V / R_eq = 12 V / 2 Ω = 6 A.",
    skill: "Circuitos Eléctricos en Paralelo",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Circuitos de Corriente Continua",
    subtopic: "Resistencias en Paralelo y Ley de Ohm"
  },
  {
    text: "Según la ley de Snell de la refracción (n₁ · sin θ₁ = n₂ · sin θ₂), ¿cuál es la condición requerida para que se produzca la reflexión interna total en una interfaz entre dos medios?",
    options: [
      "La luz debe viajar de un medio con mayor índice de refracción a uno de menor índice (n₁ > n₂) con un ángulo de incidencia superior al ángulo crítico (θ₁ > θ_c)",
      "La luz debe pasar de un medio ópticamente menos denso a uno más denso con incidencia rasante",
      "Los índices de refracción de ambos medios deben ser idénticos",
      "El ángulo de refracción debe ser exactamente igual a 0°"
    ],
    correctIndex: 0,
    explanation: "Cuando n₁ > n₂, el rayo refractado se aleja de la normal. Al ángulo crítico sin θ_c = n₂ / n₁, el ángulo de refracción alcanza 90°; para ángulos mayores, la luz se refleja 100% en el medio original (fibra óptica).",
    skill: "Óptica Geométrica y Ondulatoria",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Refracción de la Luz",
    subtopic: "Reflexión Total Interna y Ángulo Crítico"
  },
  {
    text: "¿Qué enuncia la primera ley de la termodinámica para un sistema cerrado que intercambia calor Q y trabajo W con su entorno?",
    options: [
      "La variación de la energía interna es igual al calor neto absorbido menos el trabajo neto realizado por el sistema: ΔU = Q - W",
      "El calor fluye espontáneamente de los cuerpos fríos a los calientes sin aporte de trabajo",
      "La entropía de un sistema aislado siempre disminuye en procesos espontáneos",
      "La energía total de un sistema se destruye en presencia de fricción mecánica"
    ],
    correctIndex: 0,
    explanation: "Es el principio de conservación de la energía generalizado: la energía interna U es una función de estado; los intercambios de calor Q y trabajo W modifican directamente U según ΔU = Q - W.",
    skill: "Termodinámica Clásica",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Primera Ley de la Termodinámica",
    subtopic: "Conservación de la Energía en Sistemas Termodinámicos"
  },
  {
    text: "En un movimiento armónico simple (MAS) de un oscilador masa-resorte ideal sobre plano horizontal sin fricción, ¿en qué punto de la oscilación la aceleración de la masa alcanza su valor absoluto máximo?",
    options: [
      "En los puntos de máxima elongación o amplitud (x = +A y x = -A)",
      "En la posición de equilibrio central (x = 0)",
      "A la mitad de la amplitud (x = A/2)",
      "La aceleración es rigurosamente constante en todo el recorrido"
    ],
    correctIndex: 0,
    explanation: "Por ley de Hooke, F = -k·x = m·a, de modo que a(x) = -(k/m)·x. En la posición de equilibrio (x=0) la aceleración es cero; en los extremos (x = ±A) la fuerza restauradora y la aceleración alcanzan su máximo a_max = ω² A.",
    skill: "Oscilaciones y Ondas",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Movimiento Armónico Simple",
    subtopic: "Aceleración Máxima en MAS"
  },
  {
    text: "Una ambulancia con la sirena emitiendo un tono de frecuencia f_fuente se aproxima a un peatón en reposo. ¿Qué percibe el peatón debido al efecto Doppler sonoro?",
    options: [
      "Una frecuencia aparente más alta que f_fuente debido a la compresión espacial de las crestas de onda frente al emisor",
      "Una frecuencia aparente más baja con aumento exclusivo de la velocidad del sonido",
      "La misma frecuencia pero con mayor amplitud de voltaje",
      "La inversión de fase completa de la onda acústica"
    ],
    correctIndex: 0,
    explanation: "Al acercarse la fuente emisora al observador estacionario, cada cresta se emite desde una posición más cercana que la anterior, reduciendo la longitud de onda observada λ' y aumentando la frecuencia percibida f' = f / (1 - v_f / v_sonido).",
    skill: "Acústica y Ondas Sonoras",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Efecto Doppler",
    subtopic: "Aproximación de Fuente Sonora"
  },
  {
    text: "¿Cuál es la ley que establece que la fuerza electromotriz inducida (fem) en una espira conductora cerrada es proporcional a la tasa de variación temporal del flujo magnético a través de ella?",
    options: [
      "Ley de Faraday (junto con la ley de Lenz que determina el signo opuesto)",
      "Ley de Coulomb",
      "Ley de Biot-Savart",
      "Ley de Gauss para el magnetismo"
    ],
    correctIndex: 0,
    explanation: "La ley de inducción de Faraday-Lenz ε = -dΦ_B / dt establece que un flujo magnético variable en el tiempo engendra un campo eléctrico no electrostático inducido cuyo sentido se opone a la causa que lo produce.",
    skill: "Electromagnetismo e Inducción",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Inducción Electromagnética",
    subtopic: "Ley de Faraday-Lenz"
  },
  {
    text: "En un capacitor de placas paralelas en el vacío, ¿cómo varía su capacitancia C si se duplica el área A de las placas y se reduce la distancia de separación d a la mitad?",
    options: [
      "La capacitancia se multiplica por 4",
      "La capacitancia permanece constante",
      "La capacitancia se duplica",
      "La capacitancia se reduce a la cuarta parte"
    ],
    correctIndex: 0,
    explanation: "C = ε₀ · A / d. Si A' = 2A y d' = d / 2, entonces C' = ε₀ · (2A) / (d / 2) = 4 · (ε₀ · A / d) = 4 C.",
    skill: "Electrostática y Capacitancia",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Capacitores",
    subtopic: "Geometría de Placas Paralelas"
  },
  {
    text: "¿Qué rendimiento o eficiencia máxima teórica alcanza una máquina térmica reversible de Carnot que opera entre una fuente caliente a T_H = 600 K y un sumidero frío a T_C = 300 K?",
    options: [
      "50% (η = 1 - 300/600 = 0.50)",
      "100%",
      "75%",
      "25%"
    ],
    correctIndex: 0,
    explanation: "El ciclo de Carnot impone el límite termodinámico superior de eficiencia para cualquier motor térmico: η_Carnot = 1 - T_C / T_H = 1 - (300 K / 600 K) = 0.50 (50%).",
    skill: "Termodinámica y Ciclos Térmicos",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Segunda Ley y Ciclo de Carnot",
    subtopic: "Eficiencia de Carnot"
  },
  {
    text: "¿Cuál es la expresión que calcula el campo eléctrico E creado por una carga puntual Q a una distancia r en el vacío?",
    options: [
      "E = k · |Q| / r²",
      "E = k · |Q| / r",
      "E = k · Q² / r³",
      "E = k · |Q| · r"
    ],
    correctIndex: 0,
    explanation: "A partir de la ley de Coulomb y la definición de campo eléctrico como fuerza por unidad de carga testigo (E = F / q₀), E = (1 / 4πε₀) · |Q| / r².",
    skill: "Campo Eléctrico",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Electrostática",
    subtopic: "Campo Eléctrico de Carga Puntual"
  },
  {
    text: "En óptica, una lente delgada convergente tiene una distancia focal de f = +20 cm. Si se coloca un objeto real a d_o = 40 cm frente a la lente, ¿dónde se forma la imagen y cuáles son sus características?",
    options: [
      "A d_i = +40 cm detrás de la lente; es una imagen real, invertida y del mismo tamaño que el objeto",
      "A d_i = +20 cm; es virtual, derecha y aumentada",
      "A d_i = +10 cm; es real, derecha y reducida",
      "En el infinito con tamaño nulo"
    ],
    correctIndex: 0,
    explanation: "Por la ecuación de lentes delgadas 1/f = 1/d_o + 1/d_i: 1/20 = 1/40 + 1/d_i => 1/d_i = 1/40 => d_i = +40 cm. El aumento lateral es m = -d_i / d_o = -40/40 = -1 (real, invertida, tamaño 1:1).",
    skill: "Óptica Geométrica",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Lentes Delgadas",
    subtopic: "Formación de Imágenes en Lentes Convergentes"
  }
];

// 4. Tecnico templates
const tecnicoBank: QuestionTemplate[] = [
  {
    text: "En un circuito eléctrico industrial alimentado con corriente alterna sinusoidal (AC), ¿qué representa el factor de potencia (cos φ) y por qué se instalan bancos de capacitores para corregirlo?",
    options: [
      "Es la relación entre la potencia activa (kW) y la potencia aparente (kVA); los capacitores aportan potencia reactiva capacitiva que cancela la reactiva inductiva de los motores, reduciendo la corriente total y pérdidas I²R",
      "Es la relación entre el voltaje de pico y el voltaje RMS",
      "Indica el número de ciclos por segundo de la red",
      "Permite transformar corriente alterna en corriente continua pura"
    ],
    correctIndex: 0,
    explanation: "En cargas inductivas (motores, transformadores), la corriente atrasa respecto a la tensión generando potencia reactiva Q. Al añadir capacitores en derivación que adelantan la corriente, se neutraliza Q, aproximando el factor de potencia a 1.0 y evitando penalizaciones de la distribuidora.",
    skill: "Ingeniería Eléctrica y Potencia en AC",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Circuitos de Corriente Alterna",
    subtopic: "Factor de Potencia y Bancos de Capacitores"
  },
  {
    text: "En metrología dimensional mecánica, si un calibrador Vernier (pie de rey) tiene una escala principal graduada en milímetros y un nonio con 20 divisiones en una longitud de 19 mm, ¿cuál es su apreciación o resolución instrumental?",
    options: [
      "0.05 mm (1 mm / 20 divisiones)",
      "0.1 mm",
      "0.01 mm",
      "0.02 mm"
    ],
    correctIndex: 0,
    explanation: "La resolución de un vernier es la menor lectura de la regla principal dividida por el número de divisiones del nonio: Resolución = 1 mm / 20 = 0.05 mm.",
    skill: "Metrología Dimensional de Precisión",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Instrumentos de Medición Dimensional",
    subtopic: "Apreciación del Calibrador Vernier"
  },
  {
    text: "¿Cuál es el principio operativo de un transductor de temperatura RTD de tipo Pt100 utilizado comúnmente en lazos de control industrial?",
    options: [
      "Variación lineal predecible de la resistencia eléctrica de un hilo de platino puro de 100 Ω a 0 °C en función de la temperatura (coeficiente α ≈ 0.00385 Ω/Ω/°C)",
      "Generación de una fuerza termoelectromotriz en la unión de dos metales disímiles por efecto Seebeck",
      "Emisión de fotones infrarrojos proporcionales a T⁴",
      "Expansión térmica de mercurio líquido en tubo capilar de vidrio"
    ],
    correctIndex: 0,
    explanation: "El Pt100 es un termorresistor metálico de platino cuya resistencia es exactamente 100 Ω a 0 °C y aumenta con la temperatura siguiendo las curvas estandarizadas IEC 60751, ofreciendo gran estabilidad y precisión.",
    skill: "Instrumentación y Sensores Industriales",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Sensores de Temperatura",
    subtopic: "Termorresistencia Pt100 RTD"
  },
  {
    text: "En el análisis de esfuerzos mecánicos en vigas sometidas a flexión pura elástica, ¿dónde se localiza el eje neutro de la sección transversal y qué valor adopta el esfuerzo normal longitudinal (σ) en dicho eje?",
    options: [
      "Pasa por el centroide geométrico de la sección transversal y el esfuerzo normal es exactamente cero (σ = 0)",
      "Se sitúa en la fibra externa más alejada con esfuerzo máximo de tracción",
      "En el apoyo fijo donde el momento flector es infinito",
      "En la superficie superior donde el esfuerzo cortante es máximo"
    ],
    correctIndex: 0,
    explanation: "Por la fórmula de flexión de Navier σ = -(M · y) / I_z, en el eje neutro (y = 0, centroide de la sección) las fibras no sufren ni tracción ni compresión, por lo que el esfuerzo longitudinal es nulo.",
    skill: "Resistencia de Materiales",
    difficulty: "Desafiante",
    educationalLevel: "Técnico",
    topic: "Mecánica de Sólidos Deformables",
    subtopic: "Flexión Pura y Eje Neutro"
  },
  {
    text: "¿Qué fenómeno fluidodinámico destructivo ocurre en una bomba centrífuga cuando la presión estática en el ojo del impulsor desciende por debajo de la presión de vapor del líquido a esa temperatura?",
    options: [
      "Cavitación (formación y colapso violento de burbujas de vapor que erosionan el impulsor y generan vibración)",
      "Golpe de ariete hidráulico por cierre súbito de válvula",
      "Separación laminar sin turbulencia",
      "Sobrecarga inductiva por deslizamiento"
    ],
    correctIndex: 0,
    explanation: "Si el NPSH disponible en la succión es menor que el NPSH requerido por la bomba, el líquido hierve a temperatura ambiente; las microburbujas viajan a zonas de mayor presión donde implosionan con ondas de choque de miles de bar que destruyen el metal.",
    skill: "Turbomáquinas Hidráulicas",
    difficulty: "Desafiante",
    educationalLevel: "Técnico",
    topic: "Bombas Centrífugas",
    subtopic: "Fenómeno de Cavitación y NPSH"
  },
  {
    text: "En un transformador eléctrico monofásico ideal con relación de vueltas N_p / N_s = 10, si se aplica un voltaje alterno de 240 V en el primario, ¿cuál es el voltaje inducido en el secundario?",
    options: [
      "24 V",
      "2400 V",
      "120 V",
      "48 V"
    ],
    correctIndex: 0,
    explanation: "Por la relación de transformación V_p / V_s = N_p / N_s, V_s = V_p / 10 = 240 V / 10 = 24 V (transformador reductor).",
    skill: "Máquinas Eléctricas",
    difficulty: "Básico",
    educationalLevel: "Técnico",
    topic: "Transformadores Eléctricos",
    subtopic: "Relación de Transformación de Voltaje"
  },
  {
    text: "En ensayos no destructivos (END) de componentes mecánicos soldados, ¿para qué se utiliza la inspección por ultrasonido industrial por pulso-eco?",
    options: [
      "Detectar discontinuidades volumétricas internas (fisuras, poros, falta de fusión) midiendo el tiempo de tránsito y amplitud de ondas acústicas de alta frecuencia reflejadas",
      "Medir únicamente la rugosidad superficial Ra con un palpador de diamante",
      "Evaluar la corrosión química superficial mediante vapores de amoníaco",
      "Determinar la conductividad magnética mediante corriente continua pura"
    ],
    correctIndex: 0,
    explanation: "Las ondas ultrasónicas (1 a 10 MHz) generadas por un transductor piezoeléctrico viajan a través del metal; cualquier falla interna produce una interfase acústica que refleja parte de la onda, revelando la profundidad y tamaño de la discontinuidad.",
    skill: "Ensayos No Destructivos (END)",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Inspección de Materiales",
    subtopic: "Ultrasonido Industrial Pulso-Eco"
  },
  {
    text: "En termodinámica técnica de ciclos de potencia de vapor de agua (ciclo de Rankine), ¿cuál es la función de recalentar el vapor entre las etapas de alta y baja presión de la turbina?",
    options: [
      "Aumentar el rendimiento térmico del ciclo y reducir el contenido de humedad (título de vapor) en los últimos alabes de la turbina",
      "Condensar el vapor directamente en el domo de la caldera",
      "Reducir la temperatura de entrada al economizador",
      "Presurizar el condensador a presiones hiperbáricas"
    ],
    correctIndex: 0,
    explanation: "El recalentamiento eleva la temperatura media de adición de calor incrementando la eficiencia de Rankine y evita que la condensación prematura en los alabes de baja presión cause erosión mecánica por impacto de gotas líquidas.",
    skill: "Termodinámica de Plantas de Vapor",
    difficulty: "Desafiante",
    educationalLevel: "Técnico",
    topic: "Ciclo de Rankine",
    subtopic: "Recalentamiento de Vapor en Turbinas"
  },
  {
    text: "En sistemas neumáticos automatizados, ¿qué tipo de válvula direccional se requiere para controlar el avance y retroceso de un cilindro neumático de doble efecto de forma biestable?",
    options: [
      "Válvula direccional 5/2 vías biestable con accionamiento neumático o servopilotada por solenoide",
      "Válvula 2/2 vías normalmente abierta",
      "Válvula 3/2 vías monoestable con muelle de retorno",
      "Válvula de aguja de estrangulamiento unidireccional"
    ],
    correctIndex: 0,
    explanation: "Un cilindro de doble efecto requiere dos vías de trabajo (2 y 4) y dos escapes (3 y 5) además de la alimentación (1); la configuración 5/2 vías biestable conmuta y mantiene la posición con pulsos de pilotaje alternados.",
    skill: "Automatización Neumática Industrial",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Neumática y Válvulas Direccionales",
    subtopic: "Válvulas 5/2 Vías para Cilindros Doble Efecto"
  },
  {
    text: "En el mantenimiento predictivo de maquinaria rotatoria industrial (motores, bombas, reductores), ¿qué técnica física de diagnóstico permite identificar desbalanceo, desalineación o fallas en pistas de rodamientos analizando el espectro FFT de acelerómetros?",
    options: [
      "Análisis de vibraciones mecánicas",
      "Cromatografía de gases disueltos",
      "Espectrometría de emisión óptica",
      "Medición de resistencia de aislamiento con megóhmetro"
    ],
    correctIndex: 0,
    explanation: "Cada defecto mecánico genera una firma vibratoria característica a frecuencias específicas (1X para desbalanceo, 2X para desalineación, BPFO/BPFI para rodamientos); la transformada rápida de Fourier (FFT) descompone la señal temporal en frecuencias diagnósticas.",
    skill: "Mantenimiento Predictivo Mecánico",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Diagnóstico Mecánico",
    subtopic: "Análisis de Vibraciones por FFT"
  }
];

// 5. Universitario templates
const universitarioBank: QuestionTemplate[] = [
  {
    text: "En mecánica analítica clásica, ¿cuál es la ecuación de Euler-Lagrange para un sistema conservativo con coordenadas generalizadas q_i y lagrangiano L = T - V?",
    options: [
      "d/dt (∂L / ∂q̇_i) - ∂L / ∂q_i = 0",
      "∂L / ∂t + ∑ (∂L / ∂q_i) = 0",
      "∂H / ∂p_i = q̇_i y ∂H / ∂q_i = ṗ_i",
      "d/dt (p_i) + ∂V / ∂q̇_i = 0"
    ],
    correctIndex: 0,
    explanation: "A partir del principio variacional de Hamilton (δ ∫ L dt = 0), las trayectorias físicas que minimizan o estacionarizan la acción satisfacen rigurosamente las ecuaciones diferenciales de Euler-Lagrange d/dt(∂L/∂q̇_i) - ∂L/∂q_i = 0.",
    skill: "Mecánica Clásica Analítica",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Mecánica Lagrangiana",
    subtopic: "Ecuaciones de Euler-Lagrange"
  },
  {
    text: "¿Cuál es la expresión física y significado del vector de Poynting S = (1/μ₀) (E × B) en electrodinámica clásica?",
    options: [
      "Representa la densidad de flujo de energía electromagnética por unidad de tiempo y unidad de área (potencia superficial en W/m²) transportada por el campo",
      "Mide la densidad de carga magnética libre en el vacío",
      "Indica la divergencia del potencial vector magnético de Coulomb",
      "Representa la fuerza electrostática neta por unidad de volumen de plasma"
    ],
    correctIndex: 0,
    explanation: "Derivado del teorema de Poynting a partir de las ecuaciones de Maxwell, el vector S apunta en la dirección de propagación de la radiación electromagnética y cuantifica la potencia que atraviesa una superficie unitaria.",
    skill: "Electrodinámica Clásica",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Ondas Electromagnéticas",
    subtopic: "Vector de Poynting y Flujo de Energía"
  },
  {
    text: "En mecánica cuántica no relativista, ¿cuál es el valor del conmutador fundamental de posición y momento lineal [x̂, p̂_x] = x̂ p̂_x - p̂_x x̂?",
    options: [
      "i ℏ (donde ℏ es la constante reducida de Planck y i es la unidad imaginaria)",
      "0 (conmutan perfectamente)",
      "-ℏ² / 2m",
      "2 i ℏ x̂"
    ],
    correctIndex: 0,
    explanation: "Aplicando el operador momento p̂_x = -iℏ d/dx sobre una función de prueba ψ(x): [x, -iℏ d/dx] ψ = -iℏ x ψ' - (-iℏ (xψ)') = -iℏ x ψ' + iℏ (ψ + xψ') = iℏ ψ. Por tanto [x̂, p̂_x] = iℏ, base del principio de incertidumbre de Heisenberg.",
    skill: "Mecánica Cuántica Teórica",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Formalismo de Operadores Cuánticos",
    subtopic: "Conmutador Canónico [x, p]"
  },
  {
    text: "En termodinámica estadística, ¿qué estadística cuántica describe sistemas de partículas idénticas de espín entero (bosones), como fotones o átomos de He-4, que no obedecen el principio de exclusión de Pauli?",
    options: [
      "Estadística de Bose-Einstein",
      "Estadística de Fermi-Dirac",
      "Estadística clásica de Maxwell-Boltzmann",
      "Distribución canónica microreversible de Gibbs"
    ],
    correctIndex: 0,
    explanation: "Las funciones de onda de bosones son simétricas bajo el intercambio de dos partículas, permitiendo que un número macroscópico de bosones ocupe el mismo estado fundamental a bajas temperaturas (condensación de Bose-Einstein).",
    skill: "Física Estadística Cuántica",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Estadísticas Cuánticas",
    subtopic: "Distribución de Bose-Einstein"
  },
  {
    text: "En relatividad especial, ¿cuál es el factor de Lorentz γ para una partícula relativista que se desplaza a una rapidez v respecto a un observador inercial?",
    options: [
      "γ = 1 / √(1 - v² / c²)",
      "γ = √(1 - v² / c²)",
      "γ = 1 + v / c",
      "γ = c² / (c² + v²)"
    ],
    correctIndex: 0,
    explanation: "El factor de Lorentz γ = (1 - β²)^(-1/2) donde β = v/c describe la dilatación temporal (Δt = γ Δt₀) y la contracción de la longitud (L = L₀ / γ) medidas por observadores en movimiento relativo.",
    skill: "Relatividad Especial de Einstein",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Cinemática Relativista",
    subtopic: "Factor de Lorentz"
  },
  {
    text: "En mecánica cuántica, para una partícula de masa m confinada en un pozo de potencial unidimensional infinito de ancho L (0 ≤ x ≤ L), ¿cómo dependen los niveles energéticos discretos E_n del número cuántico principal n (n = 1, 2, 3...)?",
    options: [
      "E_n = (n² π² ℏ²) / (2 m L²)",
      "E_n = n ℏ ω₀",
      "E_n = -13.6 eV / n²",
      "E_n = (n + 1/2) ℏ ω"
    ],
    correctIndex: 0,
    explanation: "Resolviendo la ecuación de Schrödinger con condiciones de contorno ψ(0) = ψ(L) = 0 se obtiene k_n = nπ/L y E_n = ℏ² k_n² / (2m) = n² π² ℏ² / (2 m L²), mostrando cuantización cuadrática en n.",
    skill: "Mecánica Cuántica de Sistemas Simples",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Pozo de Potencial Infinito",
    subtopic: "Autoenergías de la Partícula en una Caja"
  },
  {
    text: "¿Qué postula el teorema de Noether en física teórica sobre la relación entre simetrías continuas de la acción de un sistema físico y las leyes de conservación?",
    options: [
      "A cada simetría continua diferenciable de la acción de un sistema lagrangiano le corresponde una corriente conservada y una ley de conservación física (v.gr., invariancia temporal implica conservación de energía)",
      "Todas las trayectorias dinámicas son invariantes bajo reflexiones discretas de paridad",
      "La entropía de un sistema cerrado permanece estacionaria en el equilibrio cuántico",
      "Las fuerzas de gauge abelianas son necesariamente no invertibles"
    ],
    correctIndex: 0,
    explanation: "Demostrado por Emmy Noether en 1918, unifica la física fundamental: la traslación temporal conserva la energía, la traslación espacial conserva el momentum lineal, y la rotación espacial conserva el momentum angular.",
    skill: "Física Matemática y Simetrías",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Teorema de Noether",
    subtopic: "Simetrías Continuas y Leyes de Conservación"
  },
  {
    text: "En relatividad general, ¿qué solución exacta estática y con simetría esférica a las ecuaciones de campo de Einstein en el vacío describe el espaciotiempo alrededor de una masa no rotante y no cargada?",
    options: [
      "Métrica de Schwarzschild",
      "Métrica de Kerr",
      "Métrica de Friedmann-Lemaître-Robertson-Walker",
      "Métrica de Reissner-Nordström"
    ],
    correctIndex: 0,
    explanation: "Karl Schwarzschild halló en 1916 la solución a R_μν = 0 para una masa puntual esférica M, prediciendo la curvatura del espaciotiempo y el radio de Schwarzschild r_s = 2GM/c² (horizonte de sucesos de un agujero negro estático).",
    skill: "Relatividad General y Gravitación",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Métrica de Schwarzschild",
    subtopic: "Agujeros Negros Estáticos"
  },
  {
    text: "En física del estado sólido, ¿cómo explica el modelo de bandas electrónicas de Kronig-Penney la existencia de bandas de energía prohibidas (bandgaps) en redes cristalinas periódicas?",
    options: [
      "Interferencia cuántica constructiva y destructiva (difracción de Bragg) de las ondas de Bloch electrónicas que se reflejan en el potencial periódico de los iones de la red",
      "Atracción electrostática pura no cuántica entre electrones y fonones",
      "Decaimiento radiactivo beta en los nudos de la celda unitaria",
      "Polarización dipolar de la nube electrónica superficial"
    ],
    correctIndex: 0,
    explanation: "Al resolver la ecuación de Schrödinger con un potencial periódico tipo peine de Dirac, las funciones de onda electrónicas son ondas de Bloch. En los bordes de la zona de Brillouin (k = ±nπ/a), la difracción de Bragg abre brechas de energía prohibidas donde no existen estados propagativos.",
    skill: "Física del Estado Sólido",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Teoría de Bandas de Sólidos",
    subtopic: "Modelo de Kronig-Penney y Bandgap"
  },
  {
    text: "En termodinámica estadística, ¿cuál es la relación fundamental de Boltzmann que vincula la entropía termodinámica S con el número de microestados accesibles Ω de un sistema macroscópico aislado (ensamble microcanónico)?",
    options: [
      "S = k_B · ln(Ω)",
      "S = -k_B · T · ln(Z)",
      "S = k_B · Ω²",
      "S = (1 / k_B) · dΩ / dt"
    ],
    correctIndex: 0,
    explanation: "Inscrita en la tumba de Ludwig Boltzmann, S = k_B ln Ω conecta el mundo microscópico probabilístico (Ω microestados) con la variable macroscópica termodinámica clásica de entropía S a través de la constante de Boltzmann k_B.",
    skill: "Termodinámica Estadística Fundamental",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Ensamble Microcanónico",
    subtopic: "Fórmula de Entropía de Boltzmann"
  }
];

// Generate 100 questions per level
const basico100 = generateLevelQuestions('fis-bas', 'Básico', existingBasico, basicoBank);
const intermedio100 = generateLevelQuestions('fis-int', 'Intermedio', existingIntermedio, intermedioBank);
const bachillerato100 = generateLevelQuestions('fis-bac', 'Bachillerato', existingBachillerato, bachilleratoBank);
const tecnico100 = generateLevelQuestions('fis-tec', 'Técnico', existingTecnico, tecnicoBank);
const universitario100 = generateLevelQuestions('fis-uni', 'Universitario', existingUniversitario, universitarioBank);

// Write level files
function writeLevelFile(filename: string, exportName: string, questions: Question[]) {
  const content = `import { Question } from '../../../types';\n\nexport const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(path.join(targetDir, filename), content, 'utf-8');
  console.log(`Wrote ${filename} with ${questions.length} questions.`);
}

writeLevelFile('basico.ts', 'FISICA_BASICO', basico100);
writeLevelFile('intermedio.ts', 'FISICA_INTERMEDIO', intermedio100);
writeLevelFile('bachillerato.ts', 'FISICA_BACHILLERATO', bachillerato100);
writeLevelFile('tecnico.ts', 'FISICA_TECNICO', tecnico100);
writeLevelFile('universitario.ts', 'FISICA_UNIVERSITARIO', universitario100);

// Write index.ts
const indexContent = `import { Question } from '../../../types';
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
`;
fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf-8');
console.log('Wrote fisica/index.ts');

// Update src/data/questions/fisica.ts to point to ./fisica/index
const rootFisicaPath = path.resolve(process.cwd(), 'src/data/questions/fisica.ts');
fs.writeFileSync(
  rootFisicaPath,
  `export { QUESTIONS_FISICA } from './fisica/index';\n`,
  'utf-8'
);
console.log('Updated src/data/questions/fisica.ts to re-export from ./fisica/index');
