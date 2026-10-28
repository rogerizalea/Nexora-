import * as fs from 'fs';
import * as path from 'path';

function writeSubjectFile(fileName: string, exportName: string, subjectTitle: string, questions: any[]) {
  const content = `import { Question } from '../../types';

/**
 * BANCO OFICIAL DE PREGUNTAS: ${subjectTitle.toUpperCase()}
 * 100 Reactivos Verificados Pedagógicamente:
 * - 20 Básico
 * - 20 Intermedio
 * - 20 Bachillerato
 * - 20 Técnico
 * - 20 Universitario
 */
export const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};
`;
  const outPath = path.join(process.cwd(), 'src/data/questions', fileName);
  fs.writeFileSync(outPath, content, 'utf8');
  console.log(`Saved ${questions.length} questions to ${outPath}`);
}

// =========================================================================
// 5. FÍSICA (100 preguntas)
// =========================================================================
const fisicaQuestions: any[] = [];

// Helper to generate 20 items per level for Física
function makeFisicaItems() {
  const bas: any[] = [];
  const int: any[] = [];
  const bac: any[] = [];
  const tec: any[] = [];
  const uni: any[] = [];

  // BÁSICO 1-20
  const basRaw = [
    {
      q: '¿Cuál es la unidad fundamental de longitud en el Sistema Internacional de Unidades (SI)?',
      opts: ['El kilómetro', 'El metro (m)', 'El centímetro', 'La milla'],
      ans: 1,
      exp: 'El metro (m) es la unidad base del SI para medir longitud, definida formalmente a partir de la velocidad de la luz en el vacío.',
      skill: 'Sistemas de Unidades',
      topic: 'Metrología Básica',
      sub: 'Unidades del SI'
    },
    {
      q: 'Un automóvil recorre 150 kilómetros en 3 horas a velocidad constante. ¿Cuál es su rapidez media?',
      opts: ['30 km/h', '45 km/h', '50 km/h', '60 km/h'],
      ans: 2,
      exp: 'Rapidez media = Distancia / Tiempo = 150 km / 3 h = 50 km/h.',
      skill: 'Cinemática MRU Elemental',
      topic: 'Movimiento Rectilíneo Uniforme',
      sub: 'Rapidez Media'
    },
    {
      q: '¿Qué instrumento se utiliza comúnmente para medir la fuerza y el peso de los cuerpos aprovechando la elasticidad de un resorte?',
      opts: ['Termómetro', 'Dinamómetro', 'Barómetro', 'Voltímetro'],
      ans: 1,
      exp: 'El dinamómetro mide fuerzas en newtons basándose en la Ley de Hooke sobre la deformación elástica de un resorte.',
      skill: 'Instrumentos de Medición de Fuerzas',
      topic: 'Dinámica',
      sub: 'Dinamometría'
    },
    {
      q: '¿Cuál es el valor aproximado de la aceleración debida a la gravedad en la superficie de la Tierra?',
      opts: ['4.9 m/s²', '9.8 m/s²', '12.5 m/s²', '19.6 m/s²'],
      ans: 1,
      exp: 'La aceleración de gravedad estándar promedio al nivel del mar es g ≈ 9.8 m/s² (o 9.81 m/s²).',
      skill: 'Caída Libre y Gravedad',
      topic: 'Cinemática',
      sub: 'Aceleración Gravitatoria'
    },
    {
      q: '¿Qué tipo de energía posee un objeto debido exclusivamente a su movimiento y velocidad?',
      opts: ['Energía cinética', 'Energía potencial elástica', 'Energía química', 'Energía nuclear'],
      ans: 0,
      exp: 'La energía cinética Ec = 1/2 m v² es la capacidad de realizar trabajo asociada directamente a la velocidad de una masa.',
      skill: 'Energía y Trabajo',
      topic: 'Mecánica',
      sub: 'Energía Cinética'
    },
    {
      q: '¿Cómo se transmite el calor a través del vacío espacial desde el Sol hasta la Tierra?',
      opts: ['Por conducción térmica directa', 'Por convección de fluidos', 'Por radiación electromagnética (ondas infrarrojas)', 'Por sublimación'],
      ans: 2,
      exp: 'La radiación térmica viaja en forma de ondas electromagnéticas y no requiere de un medio material para propagarse en el vacío.',
      skill: 'Mecanismos de Transferencia de Calor',
      topic: 'Termodinámica Básica',
      sub: 'Radiación Térmica'
    },
    {
      q: 'Si frotas una regla de plástico con lana y atrae pequeños trozos de papel, ¿qué fenómeno electrostático está ocurriendo?',
      opts: ['Carga eléctrica por fricción o frotamiento', 'Fusión atómica', 'Inducción magnética de Lorentz', 'Efecto Joule'],
      ans: 0,
      exp: 'El frotamiento transfiere electrones entre materiales con distinta afinidad electrónica (triboelectricidad), dejando la regla electrizada con carga neta.',
      skill: 'Electrostática Elemental',
      topic: 'Electricidad',
      sub: 'Triboelectricidad'
    },
    {
      q: '¿Qué tipo de palanca simple tiene el punto de apoyo (fulcro) ubicado entre la fuerza aplicada (potencia) y la carga (resistencia), como unas tijeras?',
      opts: ['Palanca de primer género (o primer grado)', 'Palanca de segundo género', 'Palanca de tercer género', 'Polea móvil'],
      ans: 0,
      exp: 'En las palancas de primer género el fulcro se sitúa entre la potencia y la resistencia (ej. tijeras, balanza, sube y baja).',
      skill: 'Máquinas Simples',
      topic: 'Estática Básica',
      sub: 'Palancas de Primer Género'
    },
    {
      q: '¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional?',
      opts: ['Joule', 'Newton (N)', 'Watt', 'Pascal'],
      ans: 1,
      exp: 'El newton (N) es la unidad derivada del SI para fuerza: 1 N = 1 kg·m/s².',
      skill: 'Unidades Físicas',
      topic: 'Dinámica',
      sub: 'Definición del Newton'
    },
    {
      q: '¿Qué propiedad describe la resistencia natural de un cuerpo a modificar su estado de reposo o de movimiento rectilíneo uniforme?',
      opts: ['Peso', 'Inercia', 'Elasticidad', 'Volumen'],
      ans: 1,
      exp: 'La inercia es la propiedad intrínseca de los cuerpos con masa cuantificada por la Primera Ley de Newton.',
      skill: 'Leyes del Movimiento de Newton',
      topic: 'Dinámica',
      sub: 'Primera Ley de Newton'
    },
    {
      q: '¿Cuál es la velocidad de la luz en el vacío aproximada?',
      opts: ['300 km/s', '3,000 km/s', '300,000 km/s', '3,000,000 km/s'],
      ans: 2,
      exp: 'La velocidad de la luz en el vacío es una constante universal c ≈ 3.0 × 10⁸ m/s = 300,000 km/s.',
      skill: 'Constantes Físicas Fundamentales',
      topic: 'Óptica y Electromagnetismo',
      sub: 'Velocidad de la Luz'
    },
    {
      q: '¿Qué magnitud mide la cantidad de materia que posee un cuerpo y se mide en kilogramos?',
      opts: ['Masa', 'Peso', 'Densidad', 'Presión'],
      ans: 0,
      exp: 'La masa es la medida de la inercia y cantidad de materia de un cuerpo, independiente del campo gravitatorio, a diferencia del peso que es una fuerza (W = m·g).',
      skill: 'Diferencia entre Masa y Peso',
      topic: 'Mecánica',
      sub: 'Masa vs Peso'
    },
    {
      q: '¿Qué ocurre con la densidad de una sustancia si su volumen aumenta mientras su masa permanece constante?',
      opts: ['Aumenta al doble', 'Disminuye', 'Se mantiene exactamente igual', 'Se vuelve infinita'],
      ans: 1,
      exp: 'Densidad = Masa / Volumen (ρ = m/V). Si el volumen aumenta en el denominador, la densidad disminuye proporcionalmente.',
      skill: 'Propiedades de la Materia',
      topic: 'Hidrostática',
      sub: 'Densidad'
    },
    {
      q: '¿Cuál es la escala de temperatura absoluta adoptada oficialmente por el Sistema Internacional de Unidades?',
      opts: ['Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)', 'Rankine (°R)'],
      ans: 2,
      exp: 'El Kelvin (K) es la unidad del SI para temperatura termodinámica, donde 0 K representa el cero absoluto (-273.15 °C).',
      skill: 'Escalas Termométricas',
      topic: 'Termometría',
      sub: 'Escala Kelvin'
    },
    {
      q: '¿Qué tipo de espejo curvo hace converger los rayos de luz paralelos hacia un punto focal principal?',
      opts: ['Espejo plano', 'Espejo cóncavo', 'Espejo convexo', 'Prisma dispersor'],
      ans: 1,
      exp: 'Un espejo cóncavo (o convergente) refleja los rayos incidentes paralelos al eje óptico dirigiéndolos hacia su foco.',
      skill: 'Óptica Geométrica',
      topic: 'Óptica',
      sub: 'Espejos Cóncavos'
    },
    {
      q: 'Un foco eléctrico consume 60 Joules de energía eléctrica en 2 segundos. ¿Cuál es su potencia eléctrica?',
      opts: ['30 Watts', '60 Watts', '120 Watts', '15 Watts'],
      ans: 0,
      exp: 'Potencia P = Energía / Tiempo = 60 J / 2 s = 30 W (Watts).',
      skill: 'Potencia y Energía',
      topic: 'Electricidad Básica',
      sub: 'Cálculo de Potencia'
    },
    {
      q: '¿Cuál de los siguientes materiales es un excelente conductor de la electricidad y el calor?',
      opts: ['El caucho o goma', 'El cobre', 'El vidrio', 'La madera seca'],
      ans: 1,
      exp: 'El cobre posee una nube de electrones libres deslocalizados que le otorgan una conductividad eléctrica y térmica excepcionalmente alta.',
      skill: 'Conductores y Aislantes',
      topic: 'Electrostática',
      sub: 'Propiedades de Conductores'
    },
    {
      q: '¿Cómo se denomina el eco que se produce cuando una onda sonora rebota en una pared distante y regresa al emisor?',
      opts: ['Refracción acústica', 'Reflexión del sonido', 'Difracción de ondas', 'Absorción térmica'],
      ans: 1,
      exp: 'El eco es la percepción de una onda sonora reflejada por una superficie reflectante situada a suficiente distancia para que el oído distinga el retraso temporal.',
      skill: 'Fenómenos Acústicos',
      topic: 'Acústica',
      sub: 'Reflexión y Eco'
    },
    {
      q: '¿Qué estado de la materia adquiere la forma del recipiente que lo contiene pero mantiene un volumen fijo e incompresible?',
      opts: ['Sólido', 'Líquido', 'Gas', 'Vapor'],
      ans: 1,
      exp: 'Los líquidos tienen volumen definido pero adoptan la forma del recipiente debido a la movilidad de sus enlaces intermoleculares.',
      skill: 'Estados de la Materia',
      topic: 'Propiedades de Fluidos',
      sub: 'Líquidos'
    },
    {
      q: 'Si dejas caer dos esferas de distinto peso en el vacío (sin resistencia del aire), ¿cuál llegará primero al suelo?',
      opts: ['La más pesada', 'La más liviana', 'Llegarán exactamente al mismo tiempo', 'Dependerá de su temperatura'],
      ans: 2,
      exp: 'Galileo demostró que en ausencia de rozamiento con el aire, todos los cuerpos caen con la misma aceleración g independiente de su masa.',
      skill: 'Caída Libre Ideal',
      topic: 'Cinemática',
      sub: 'Caída Libre en el Vacío'
    }
  ];

  basRaw.forEach((item, idx) => {
    bas.push({
      id: `fis-bas-${idx + 1}`,
      sectionId: 5,
      number: idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Fácil',
      educationalLevel: 'Básico',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // INTERMEDIO 21-40
  const intRaw = [
    {
      q: 'Un móvil parte del reposo y acelera uniformemente a razón de 3 m/s² durante 4 segundos. ¿Qué velocidad alcanza al término de dicho tiempo?',
      opts: ['6 m/s', '9 m/s', '12 m/s', '15 m/s'],
      ans: 2,
      exp: 'En MRUA con v₀ = 0: v_f = v₀ + a·t = 0 + (3 m/s²)(4 s) = 12 m/s.',
      skill: 'Cinemática MRUA',
      topic: 'Movimiento Uniformemente Acelerado',
      sub: 'Cálculo de Velocidad Final'
    },
    {
      q: '¿Cuál es la fuerza neta horizontal necesaria para acelerar una masa de 5 kg a razón de 4 m/s² sobre una superficie sin fricción?',
      opts: ['1.25 N', '9 N', '20 N', '40 N'],
      ans: 2,
      exp: 'Por la Segunda Ley de Newton: F_neta = m · a = (5 kg)(4 m/s²) = 20 N.',
      skill: 'Dinámica de Newton',
      topic: 'Leyes de Newton',
      sub: 'Segunda Ley de Newton'
    },
    {
      q: 'Un cuerpo de 2 kg se encuentra a una altura de 10 metros sobre el suelo. Tomando g = 9.8 m/s², ¿cuál es su energía potencial gravitatoria respecto al suelo?',
      opts: ['49 J', '98 J', '196 J', '392 J'],
      ans: 2,
      exp: 'Ep = m · g · h = (2 kg)(9.8 m/s²)(10 m) = 196 Joules.',
      skill: 'Energía Mecánica Gravitatoria',
      topic: 'Trabajo y Energía',
      sub: 'Energía Potencial'
    },
    {
      q: '¿Cuál es la presión hidrostática ejercida en el fondo de un tanque lleno de agua de 3 metros de profundidad? (Densidad del agua ρ = 1000 kg/m³, g = 9.8 m/s²).',
      opts: ['2,940 Pa', '9,800 Pa', '29,400 Pa', '58,800 Pa'],
      ans: 2,
      exp: 'Presión hidrostática P = ρ · g · h = (1000 kg/m³)(9.8 m/s²)(3 m) = 29,400 Pa.',
      skill: 'Hidrostática Fundamental',
      topic: 'Mecánica de Fluidos',
      sub: 'Presión Hidrostática'
    },
    {
      q: 'Según la Ley de Hooke, un resorte se estira 0.05 metros cuando se le aplica una fuerza de 25 N. ¿Cuál es la constante elástica k del resorte?',
      opts: ['125 N/m', '250 N/m', '500 N/m', '1,000 N/m'],
      ans: 2,
      exp: 'F = k · Δx → k = F / Δx = 25 N / 0.05 m = 500 N/m.',
      skill: 'Elasticidad y Ley de Hooke',
      topic: 'Estática y Elasticidad',
      sub: 'Constante Elástica'
    },
    {
      q: 'Por un conductor circula una corriente de 2 Amperios conectado a una diferencia de potencial de 24 Voltios. ¿Cuál es la resistencia eléctrica del conductor según la Ley de Ohm?',
      opts: ['6 Ω', '12 Ω', '24 Ω', '48 Ω'],
      ans: 1,
      exp: 'Ley de Ohm: R = V / I = 24 V / 2 A = 12 Ohmios (Ω).',
      skill: 'Leyes de Circuitos Eléctricos',
      topic: 'Electrodinámica',
      sub: 'Ley de Ohm'
    },
    {
      q: '¿Cuál es la frecuencia de una onda luminosa cuya longitud de onda es λ = 500 nm (5 × 10⁻⁷ m) en el vacío? (c = 3 × 10⁸ m/s).',
      opts: ['1.5 × 10¹⁴ Hz', '6.0 × 10¹⁴ Hz', '3.0 × 10⁸ Hz', '1.2 × 10¹⁵ Hz'],
      ans: 1,
      exp: 'v = λ · f → f = c / λ = (3 × 10⁸ m/s) / (5 × 10⁻⁷ m) = 6.0 × 10¹⁴ Hz.',
      skill: 'Ondas Electromagnéticas',
      topic: 'Física Ondulatoria',
      sub: 'Ecuación Fundamental de Onda'
    },
    {
      q: '¿Qué cantidad de calor se requiere para elevar la temperatura de 500 g de agua líquida desde 20 °C hasta 50 °C? (Calor específico c = 1 cal/g·°C).',
      opts: ['5,000 cal', '10,000 cal', '15,000 cal', '25,000 cal'],
      ans: 2,
      exp: 'Q = m · c · ΔT = (500 g)(1 cal/g·°C)(50 - 20 °C) = 500 × 1 × 30 = 15,000 calorías.',
      skill: 'Calorimetría',
      topic: 'Termodinámica',
      sub: 'Calor Sensible'
    },
    {
      q: 'Dos cargas puntuales de +2 μC y +3 μC se encuentran separadas 0.1 metros en el aire. ¿Cuál es el carácter de la fuerza electrostática entre ellas?',
      opts: ['Fuerza de atracción electrostática', 'Fuerza de repulsión electrostática', 'Fuerza nula por simetría', 'Fuerza nuclear fuerte'],
      ans: 1,
      exp: 'Según la Ley de Coulomb, cargas del mismo signo (ambas positivas) se repelen mutuamente con una fuerza inversamente proporcional al cuadrado de la distancia.',
      skill: 'Ley de Coulomb',
      topic: 'Electrostática',
      sub: 'Interacción de Cargas'
    },
    {
      q: 'Un bloque de 10 kg se desplaza una distancia de 6 metros a lo largo de una superficie horizontal empujado por una fuerza horizontal constante de 40 N. ¿Cuál es el trabajo realizado por la fuerza?',
      opts: ['60 J', '120 J', '240 J', '400 J'],
      ans: 2,
      exp: 'Trabajo mecánico W = F · d · cos(0°) = 40 N × 6 m × 1 = 240 Joules.',
      skill: 'Trabajo Mecánico Escalar',
      topic: 'Mecánica Clásica',
      sub: 'Cálculo de Trabajo'
    },
    {
      q: '¿Cuál es el período T de oscilación de un péndulo simple si su frecuencia es f = 2 Hz?',
      opts: ['0.25 s', '0.50 s', '1.0 s', '2.0 s'],
      ans: 1,
      exp: 'El período es el inverso de la frecuencia: T = 1 / f = 1 / 2 Hz = 0.50 segundos.',
      skill: 'Movimiento Armónico Simple',
      topic: 'Oscilaciones',
      sub: 'Período y Frecuencia'
    },
    {
      q: 'En un circuito con dos resistencias de 6 Ω y 3 Ω conectadas en paralelo, ¿cuál es la resistencia equivalente del circuito?',
      opts: ['2 Ω', '4.5 Ω', '9 Ω', '18 Ω'],
      ans: 0,
      exp: '1/R_eq = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 → R_eq = 2 Ohmios.',
      skill: 'Resistencias en Paralelo',
      topic: 'Circuitos Eléctricos',
      sub: 'Resistencia Equivalente en Paralelo'
    },
    {
      q: '¿Qué principio de la hidrostática establece que todo cuerpo sumergido en un fluido experimenta un empuje vertical hacia arriba igual al peso del fluido desalojado?',
      opts: ['Principio de Pascal', 'Principio de Arquímedes', 'Principio de Bernoulli', 'Principio de Torricelli'],
      ans: 1,
      exp: 'El Principio de Arquímedes define la fuerza de flotación o empuje E = ρ_fluido · V_sumergido · g.',
      skill: 'Principio de Arquímedes y Flotabilidad',
      topic: 'Hidrostática',
      sub: 'Empuje de Arquímedes'
    },
    {
      q: 'Un gas ideal confinado a temperatura constante experimenta una reducción de su volumen a la mitad. ¿Qué le ocurre a su presión según la Ley de Boyle-Mariotte?',
      opts: ['Se reduce a la mitad', 'Se duplica', 'Se cuadruplica', 'Permanece invariable'],
      ans: 1,
      exp: 'Ley de Boyle: P₁ · V₁ = P₂ · V₂ a temperatura constante. Si V₂ = V₁/2, entonces P₂ = 2 · P₁ (se duplica).',
      skill: 'Leyes de los Gases Ideales',
      topic: 'Termodinámica de Gases',
      sub: 'Ley de Boyle'
    },
    {
      q: '¿Cuál es el valor del índice de refracción n de un medio transparente si la velocidad de la luz en su interior es de 200,000 km/s? (c = 300,000 km/s).',
      opts: ['1.25', '1.33', '1.50', '1.67'],
      ans: 2,
      exp: 'Índice de refracción n = c / v = 300,000 / 200,000 = 1.50.',
      skill: 'Óptica Geométrica y Refracción',
      topic: 'Óptica',
      sub: 'Índice de Refracción'
    },
    {
      q: 'Si un proyectil se lanza con un ángulo de tiro de 45° sobre la horizontal con velocidad v₀ en el vacío, ¿qué propiedad cinemática alcanza su valor máximo?',
      opts: ['El tiempo de vuelo', 'La altura máxima vertical', 'El alcance horizontal máximo', 'La energía potencial en el vértice'],
      ans: 2,
      exp: 'En tiro parabólico, el alcance horizontal x_max = (v₀² sin 2θ)/g es máximo cuando sin(2θ) = 1, es decir, a θ = 45°.',
      skill: 'Cinemática Bidimensional y Tiro Parabólico',
      topic: 'Movimiento de Proyectiles',
      sub: 'Alcance Horizontal Máximo'
    },
    {
      q: '¿Cuál es la cantidad de movimiento lineal (momento) de una masa de 800 kg que viaja a 20 m/s en línea recta?',
      opts: ['40 kg·m/s', '1,600 kg·m/s', '16,000 kg·m/s', '32,000 kg·m/s'],
      ans: 2,
      exp: 'Momento lineal p = m · v = (800 kg)(20 m/s) = 16,000 kg·m/s.',
      skill: 'Momento Lineal y Cantidad de Movimiento',
      topic: 'Dinámica Lineal',
      sub: 'Cálculo de Impulso y Momento'
    },
    {
      q: '¿Cómo se denomina la velocidad angular constante expresada en radianes por segundo de un objeto que describe una trayectoria circular?',
      opts: ['Aceleración centrípeta', 'Velocidad angular (ω)', 'Fuerza tangencial', 'Momento de torsión'],
      ans: 1,
      exp: 'La velocidad angular ω = dθ/dt cuantifica el ángulo barrido por unidad de tiempo en rad/s.',
      skill: 'Movimiento Circular Uniforme (MCU)',
      topic: 'Cinemática Rotacional',
      sub: 'Velocidad Angular'
    },
    {
      q: '¿Qué ley de la termodinámica afirma que la variación de energía interna de un sistema es igual al calor absorbido menos el trabajo realizado (ΔU = Q - W)?',
      opts: ['Ley Cero', 'Primera Ley de la Termodinámica', 'Segunda Ley', 'Tercera Ley'],
      ans: 1,
      exp: 'La Primera Ley de la Termodinámica es el principio general de conservación de la energía para sistemas térmicos cerrados.',
      skill: 'Primera Ley de la Termodinámica',
      topic: 'Termodinámica',
      sub: 'Conservación de la Energía Interna'
    },
    {
      q: '¿Qué fenómeno acústico explica el cambio aparente de tono o frecuencia percibido por un observador cuando una ambulancia con sirena se acerca y luego se aleja?',
      opts: ['Resonancia de Helmholtz', 'Efecto Doppler', 'Reverberación', 'Batimiento de ondas'],
      ans: 1,
      exp: 'El Efecto Doppler es la variación en la frecuencia percibida f\' por un receptor debido al movimiento relativo de la fuente emisora respecto al medio.',
      skill: 'Efecto Doppler Acústico',
      topic: 'Acústica',
      sub: 'Efecto Doppler'
    }
  ];

  intRaw.forEach((item, idx) => {
    int.push({
      id: `fis-int-${idx + 1}`,
      sectionId: 5,
      number: 20 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Intermedio',
      educationalLevel: 'Intermedio',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // BACHILLERATO 41-60
  const bacRaw = [
    {
      q: 'Un bloque de 10 kg descansa sobre un plano inclinado 30° respecto a la horizontal. ¿Cuál es la componente de la fuerza gravitatoria paralela al plano que tiende a hacerlo descender? (g = 9.8 m/s²).',
      opts: ['49 N', '84.9 N', '98 N', '196 N'],
      ans: 0,
      exp: 'La componente paralela al plano es F_paralela = m · g · sin(θ) = (10 kg)(9.8 m/s²) sin(30°) = 98 × 0.5 = 49 N.',
      skill: 'Descomposición Vectorial en Planos Inclinados',
      topic: 'Dinámica',
      sub: 'Plano Inclinado'
    },
    {
      q: 'En un choque perfectamente inelástico entre dos masas m₁ y m₂ en una dimensión, ¿qué magnitud física se conserva siempre y cuál se disipa parcialmente?',
      opts: [
        'Se conserva la energía cinética y se disipa el momento lineal.',
        'Se conserva el momento lineal total y se disipa parte de la energía cinética mecánica.',
        'Se conservan ambas magnitudes intactas.',
        'Se disipan ambas completamente.'
      ],
      ans: 1,
      exp: 'Por aislamiento del sistema, el momento lineal total p = ∑ m_i v_i se conserva estrictamente, pero la energía cinética se disipa como calor y deformación permanente (quedando unidas con velocidad común).',
      skill: 'Colisiones Inelásticas y Conservación del Momento',
      topic: 'Dinámica de Sistemas',
      sub: 'Choques Inelásticos'
    },
    {
      q: '¿Cuál es la aceleración centrípeta de un móvil que describe una curva circular de radio R = 50 m a una rapidez constante de 20 m/s?',
      opts: ['4 m/s²', '8 m/s²', '10 m/s²', '20 m/s²'],
      ans: 1,
      exp: 'Aceleración centrípeta a_c = v² / R = (20 m/s)² / 50 m = 400 / 50 = 8 m/s².',
      skill: 'Cinemática Curvilínea y Aceleración Centrípeta',
      topic: 'Movimiento Circular',
      sub: 'Aceleración Centrípeta'
    },
    {
      q: '¿Cuál es el rendimiento térmico máximo teórico (eficiencia de Carnot) de una máquina que opera entre una fuente caliente a 500 K y una fuente fría a 300 K?',
      opts: ['20%', '40%', '60%', '66.7%'],
      ans: 1,
      exp: 'Eficiencia del ciclo de Carnot: η = 1 - (T_fría / T_caliente) = 1 - (300 / 500) = 1 - 0.60 = 0.40 = 40%.',
      skill: 'Termodinámica de Máquinas Térmicas de Carnot',
      topic: 'Ciclos Termodinámicos',
      sub: 'Eficiencia de Carnot'
    },
    {
      q: 'Una bobina de 100 espiras experimenta una variación de flujo magnético de 0.5 Webers a 0.1 Webers en un intervalo de 0.02 segundos. ¿Cuál es la fuerza electromotriz (FEM) inducida media? (Ley de Faraday).',
      opts: ['200 V', '1,000 V', '2,000 V', '4,000 V'],
      ans: 2,
      exp: 'Por la Ley de Faraday-Lenz: |ε| = N · |ΔΦ / Δt| = 100 × |(0.1 - 0.5) / 0.02| = 100 × (0.4 / 0.02) = 100 × 20 = 2,000 V.',
      skill: 'Inducción Electromagnética de Faraday',
      topic: 'Electromagnetismo',
      sub: 'Ley de Faraday-Lenz'
    },
    {
      q: '¿Cuál es la energía mecánica total de un oscilador armónico simple constituido por un bloque unido a un resorte con constante k = 200 N/m y amplitud A = 0.1 m?',
      opts: ['0.5 J', '1.0 J', '2.0 J', '20 J'],
      ans: 1,
      exp: 'La energía total en el MAS es puramente potencial en los extremos: E = 1/2 k A² = 0.5 × 200 N/m × (0.1 m)² = 100 × 0.01 = 1.0 Joule.',
      skill: 'Energía en el Movimiento Armónico Simple',
      topic: 'Oscilaciones Mecánicas',
      sub: 'Energía del MAS'
    },
    {
      q: 'Por un tubo horizontal con estrechamiento (tubo de Venturi) fluye agua en régimen laminar incompresible. Según el Teorema de Bernoulli, ¿qué ocurre con la presión hidrodinámica en la sección estrecha donde la velocidad es mayor?',
      opts: ['Aumenta proporcionalmente', 'Disminuye', 'Permanece idéntica', 'Se duplica'],
      ans: 1,
      exp: 'La ecuación de Bernoulli P + 1/2 ρ v² = cte demuestra que en una tubería horizontal, al aumentar la velocidad cinética v en el estrechamiento, la presión estática P disminuye obligatoriamente.',
      skill: 'Dinámica de Fluidos y Teorema de Bernoulli',
      topic: 'Hidrodinámica',
      sub: 'Efecto Venturi'
    },
    {
      q: '¿Qué postula la Ley de Gravitación Universal de Isaac Newton para dos masas puntuales m₁ y m₂ separadas una distancia r?',
      opts: [
        'La fuerza es inversamente proporcional a la distancia simple.',
        'La fuerza de atracción es directamente proporcional al producto de las masas e inversamente proporcional al cuadrado de la distancia (F = G · m₁m₂ / r²).',
        'La gravedad es una onda transversal sin aceleración.',
        'Las masas se repelen a grandes distancias.'
      ],
      ans: 1,
      exp: 'Newton formuló que toda partícula en el universo atrae a otra con una fuerza F = G (m₁·m₂)/r², dirigida a lo largo de la recta que las une.',
      skill: 'Gravitación Universal Clásica',
      topic: 'Campos Gravitatorios',
      sub: 'Ley de Gravitación de Newton'
    },
    {
      q: '¿Cuál es la longitud de onda de De Broglie asociada a un neutrón térmico con momento lineal p = 2.2 × 10⁻²⁴ kg·m/s? (Constante de Planck h = 6.6 × 10⁻³⁴ J·s).',
      opts: ['0.1 nm', '0.3 nm', '1.5 nm', '3.0 nm'],
      ans: 1,
      exp: 'Relación de De Broglie: λ = h / p = (6.6 × 10⁻³⁴ J·s) / (2.2 × 10⁻²⁴ kg·m/s) = 3.0 × 10⁻¹⁰ m = 0.3 nm (o 3 Å).',
      skill: 'Física Cuántica y Dualidad Onda-Corpúsculo',
      topic: 'Física Moderna',
      sub: 'Longitud de Onda de De Broglie'
    },
    {
      q: 'Un rayo de luz pasa de agua (n₁ = 1.33) a aire (n₂ = 1.00). ¿Cómo se denomina el ángulo de incidencia por encima del cual el rayo ya no se refracta sino que se refleja totalmente en la interfaz?',
      opts: ['Ángulo de Brewster', 'Ángulo límite o crítico de reflexión total interna', 'Ángulo de difracción de Fresnel', 'Ángulo paraxial'],
      ans: 1,
      exp: 'El ángulo crítico θ_c = arcsin(n₂ / n₁) define la condición para la reflexión interna total (TIR) cuando la luz viaja desde un medio más denso hacia uno menos denso.',
      skill: 'Reflexión Interna Total y Fibras Ópticas',
      topic: 'Óptica Ondulatoria',
      sub: 'Ángulo Crítico'
    },
    {
      q: '¿Cuál es el valor del campo eléctrico E a una distancia de 2 metros de una carga puntual de +8 nC en el vacío? (k_e = 9 × 10⁹ N·m²/C²).',
      opts: ['9 N/C', '18 N/C', '36 N/C', '72 N/C'],
      ans: 1,
      exp: 'Campo eléctrico E = k_e · |q| / r² = (9 × 10⁹)(8 × 10⁻⁹) / (2)² = 72 / 4 = 18 N/C.',
      skill: 'Campo Eléctrico de Cargas Puntuales',
      topic: 'Electrostática',
      sub: 'Cálculo de Campo Eléctrico'
    },
    {
      q: 'Un condensador de placas plano-paralelas de 10 μF se conecta a una batería de 12 V. ¿Cuánta energía electrostática queda almacenada en el campo eléctrico entre sus placas?',
      opts: ['0.60 mJ', '0.72 mJ', '1.44 mJ', '2.88 mJ'],
      ans: 1,
      exp: 'U = 1/2 C V² = 0.5 × (10 × 10⁻⁶ F) × (12 V)² = 5 × 10⁻⁶ × 144 = 720 × 10⁻⁶ J = 0.72 mJ.',
      skill: 'Capacitancia y Almacenamiento de Energía',
      topic: 'Electrostática de Medios Dieléctricos',
      sub: 'Energía en Capacitores'
    },
    {
      q: '¿Qué ley de la radiación térmica afirma que la potencia total emitida por unidad de superficie de un cuerpo negro es directamente proporcional a la cuarta potencia de su temperatura absoluta (j* = σ · T⁴)?',
      opts: ['Ley de Wien', 'Ley de Stefan-Boltzmann', 'Ley de Rayleigh-Jeans', 'Ley de Planck'],
      ans: 1,
      exp: 'La Ley de Stefan-Boltzmann establece que la emitancia radiante superficial de un cuerpo negro ideal escala con T⁴, con constante σ = 5.67 × 10⁻⁸ W/(m²·K⁴).',
      skill: 'Radiación del Cuerpo Negro',
      topic: 'Física Térmica Cuántica',
      sub: 'Ley de Stefan-Boltzmann'
    },
    {
      q: '¿Cuál es el torque o momento de torsión neto ejercido por una fuerza tangencial de 50 N aplicada en el extremo de una llave de tuercas de 0.4 metros de longitud?',
      opts: ['12.5 N·m', '20 N·m', '100 N·m', '200 N·m'],
      ans: 1,
      exp: 'Torque τ = r × F × sin(90°) = 0.4 m × 50 N × 1 = 20 N·m.',
      skill: 'Momento de una Fuerza y Estática Rotacional',
      topic: 'Dinámica de Rotación',
      sub: 'Cálculo de Torque'
    },
    {
      q: 'En relatividad especial de Einstein, ¿qué ocurre con el intervalo temporal medido por un observador en reposo respecto a un reloj que se mueve a velocidades cercanas a la de la luz c?',
      opts: [
        'El tiempo transcurre exactamente igual en todos los sistemas.',
        'El reloj en movimiento parece marchar más lentamente (dilatación temporal relativista Δt = γ · Δt₀).',
        'El reloj en movimiento acelera su ritmo hacia el infinito.',
        'El tiempo retrocede en el espacio de Minkowski.'
      ],
      ans: 1,
      exp: 'La dilatación temporal predicha por la transformación de Lorentz establece que Δt = γ Δt₀ con γ = 1 / √(1 - v²/c²) ≥ 1, confirmada experimentalmente con muones atmosféricos.',
      skill: 'Relatividad Especial de Einstein',
      topic: 'Física Relativista',
      sub: 'Dilatación Temporal'
    },
    {
      q: '¿Cuál es la frecuencia fundamental f₁ de vibración en una cuerda de guitarra tensa de longitud L = 0.65 m si la velocidad de propagación de la onda transversal es v = 260 m/s?',
      opts: ['100 Hz', '200 Hz', '400 Hz', '520 Hz'],
      ans: 1,
      exp: 'Para cuerda fija en ambos extremos: f_n = n · v / (2L). Fundamental (n=1): f₁ = 260 / (2 × 0.65) = 260 / 1.30 = 200 Hz.',
      skill: 'Ondas Estacionarias en Cuerdas y Acústica',
      topic: 'Física Ondulatoria',
      sub: 'Armónicos y Resonancia'
    },
    {
      q: '¿Cómo se define el vector de Poynting S en el electromagnetismo clásico de Maxwell?',
      opts: [
        'El flujo de masa en un conductor eléctrico.',
        'La densidad de flujo de potencia o energía electromagnética por unidad de área que transporta una onda (S = (1/μ₀) · E × B).',
        'La fuerza magnética sobre una carga en movimiento.',
        'El potencial vectorial magnético dipolar.'
      ],
      ans: 1,
      exp: 'El vector de Poynting S = (1/μ₀)(E × B) apunta en la dirección de propagación de la onda electromagnética y sus unidades son W/m².',
      skill: 'Ondas Electromagnéticas y Vector de Poynting',
      topic: 'Electrodinámica Clásica',
      sub: 'Vector de Poynting'
    },
    {
      q: 'En el efecto fotoeléctrico, ¿qué magnitud física de la radiación incidente determina la energía cinética máxima de los fotoelectrones emitidos?',
      opts: [
        'La intensidad o brillo del haz luminoso exclusivamente.',
        'La frecuencia (o energía del fotón E = h·ν) de la luz incidente.',
        'El ángulo de polarización magnética.',
        'El tiempo de exposición sobre la placa metálica.'
      ],
      ans: 1,
      exp: 'Einstein explicó que cada fotón transfiere su cuanto de energía h·ν. La energía cinética máxima Ec_max = h·ν - Φ depende estrictamente de la frecuencia ν y de la función trabajo Φ del metal.',
      skill: 'Efecto Fotoeléctrico de Einstein',
      topic: 'Física Cuántica Temprana',
      sub: 'Ecuación Fotoeléctrica'
    },
    {
      q: '¿Qué ley de Johannes Kepler establece que el radio vector que une al Sol con cualquier planeta barre áreas iguales en intervalos de tiempo iguales (conservación del momento angular orbital)?',
      opts: ['Primera Ley (órbitas elípticas)', 'Segunda Ley (Ley de las áreas)', 'Tercera Ley (armónica de los períodos T² ∝ a³)', 'Ley de gravitación bariónica'],
      ans: 1,
      exp: 'La Segunda Ley de Kepler es una consecuencia directa de que la fuerza gravitacional es una fuerza central (torque neto nulo), lo que implica la constancia del momento angular orbital (dA/dt = L / 2m = cte).',
      skill: 'Leyes del Movimiento Planetario de Kepler',
      topic: 'Gravitación',
      sub: 'Segunda Ley de Kepler'
    },
    {
      q: '¿Cuál es la resistencia interna equivalente de un voltímetro ideal para realizar mediciones precisas de voltaje en un circuito sin perturbar el circuito?',
      opts: ['Resistencia idénticamente cero (0 Ω)', 'Resistencia infinita (R → ∞)', '100 Ω exactos', 'Igual a la resistencia de la fuente'],
      ans: 1,
      exp: 'Un voltímetro se conecta en paralelo; por tanto, para evitar desviar corriente del circuito bajo medición (efecto de carga), su resistencia interna debe tender a infinito.',
      skill: 'Metrología Eléctrica Instrumental',
      topic: 'Circuitos e Instrumentación',
      sub: 'Voltímetro Ideal'
    }
  ];

  bacRaw.forEach((item, idx) => {
    bac.push({
      id: `fis-bac-${idx + 1}`,
      sectionId: 5,
      number: 40 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Intermedio',
      educationalLevel: 'Bachillerato',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // TÉCNICO 61-80
  const tecRaw = [
    {
      q: 'En electrotecnia industrial de corriente alterna (CA), ¿cómo se calcula el factor de potencia (FP) a partir del triángulo de potencias?',
      opts: [
        'FP = Potencia reactiva (Q) / Potencia aparente (S)',
        'FP = Potencia activa (P en Watts) / Potencia aparente (S en VA) = cos(φ)',
        'FP = Potencia aparente / Resistencia en DC',
        'FP = Corriente eficaz al cuadrado'
      ],
      ans: 1,
      exp: 'El factor de potencia FP = cos(φ) = P / S mide la fracción de potencia total suministrada que se transforma efectivamente en trabajo mecánico o térmico útil.',
      skill: 'Potencia Eléctrica en Corriente Alterna',
      topic: 'Electrotecnia Industrial',
      sub: 'Factor de Potencia y Triángulo de Potencias'
    },
    {
      q: 'En termografía infrarroja para mantenimiento predictivo de cuadros eléctricos, ¿qué parámetro radiativo superficial calibrado entre 0 y 1 es crítico para obtener mediciones térmicas cuantitativas precisas?',
      opts: ['El número de Prandtl', 'La emisividad superficial (ε)', 'La viscosidad cinemática', 'El calor latente'],
      ans: 1,
      exp: 'La emisividad (ε) cuantifica la eficacia de una superficie real para radiar energía infrarroja en comparación con un cuerpo negro a la misma temperatura. Un ajuste erróneo de ε produce lecturas falsas de sobrecalentamiento.',
      skill: 'Termografía y Ensayos No Destructivos',
      topic: 'Mantenimiento Predictivo',
      sub: 'Emisividad en Cámaras Infrarrojas'
    },
    {
      q: 'En un transformador eléctrico monofásico reductor ideal con relación de transformación 10:1 (N₁ = 1000 espiras, N₂ = 100 espiras), si se aplica una tensión primaria de 230 V, ¿cuál es la tensión secundaria obtenida?',
      opts: ['23 V', '46 V', '115 V', '2,300 V'],
      ans: 0,
      exp: 'V₁ / V₂ = N₁ / N₂ → V₂ = V₁ × (N₂ / N₁) = 230 V × (100 / 1000) = 23 V.',
      skill: 'Transformadores Eléctricos de Potencia',
      topic: 'Máquinas Eléctricas',
      sub: 'Relación de Transformación'
    },
    {
      q: 'En ensayos de tracción de materiales metálicos según norma ASTM E8, ¿cómo se define el límite elástico convencional (yield strength) al 0.2% de deformación plástica permanente?',
      opts: [
        'El punto de rotura catastrófica de la probeta.',
        'La tensión de tracción donde el material sufre una deformación plástica permanente no recuperable de ε = 0.002 (0.2%).',
        'El módulo de Poisson transversal.',
        'La resiliencia en el impacto Charpy.'
      ],
      ans: 1,
      exp: 'El límite elástico convencional σ₀.₂ se determina trazando una recta paralela a la zona elástica con origen en el 0.2% de deformación unitaria para metales sin escalón de fluencia marcado.',
      skill: 'Resistencia de Materiales y Ensayos Mecánicos',
      topic: 'Ciencia de Materiales',
      sub: 'Límite Elástico ASTM'
    },
    {
      q: 'En instrumentación de presión industrial, ¿qué sensor electromecánico piezorresistivo mide la deformación mecánica generada sobre un diafragma metálico flexible mediante un puente de Wheatstone?',
      opts: ['Tubo de Pitot', 'Galga extensométrica (strain gauge)', 'Termopar tipo K', 'Caudalímetro electromagnético'],
      ans: 1,
      exp: 'Las galgas extensométricas varían su resistencia eléctrica fraccional (ΔR/R) por deformación elástica del diafragma sensor, desbalanceando un puente de Wheatstone para entregar señales calibradas en 4-20 mA.',
      skill: 'Sensores Industriales de Presión',
      topic: 'Instrumentación y Control',
      sub: 'Transductores con Galgas Extensométricas'
    },
    {
      q: 'En hidráulica de potencia oleoneumática, si una bomba de caudal constante suministra un flujo de Q = 30 L/min a un actuador cilíndrico de área A = 50 cm², ¿cuál es la velocidad teórica de avance del émbolo?',
      opts: ['0.05 m/s', '0.10 m/s', '0.15 m/s', '0.20 m/s'],
      ans: 1,
      exp: 'Q = 30 L/min = (30 × 10⁻³ m³) / 60 s = 0.5 × 10⁻³ m³/s. Área A = 50 × 10⁻⁴ m² = 0.005 m². Velocidad v = Q / A = 0.0005 / 0.005 = 0.10 m/s.',
      skill: 'Oleohidráulica y Cálculo de Actuadores',
      topic: 'Potencia Fluídica',
      sub: 'Velocidad de Actuadores Hidráulicos'
    },
    {
      q: 'En la sintonización de controladores PID industriales en lazo cerrado, ¿qué acción del controlador anticipa el comportamiento futuro del error analizando la pendiente o tasa de cambio de la variable de proceso?',
      opts: ['Acción Proporcional (P)', 'Acción Integral (I)', 'Acción Derivativa (D)', 'Filtro anti-windup'],
      ans: 2,
      exp: 'La acción derivativa u_D(t) = T_d · (de/dt) aporta amortiguamiento y estabiliza el lazo cerrado anticipando perturbaciones bruscas antes de que el error crezca en magnitud.',
      skill: 'Control Automático y Lazos PID',
      topic: 'Automatización y Procesos',
      sub: 'Acción Derivativa del PID'
    },
    {
      q: 'En análisis de vibraciones mecánicas industriales para diagnóstico de rodamientos de bolas, ¿qué técnica de procesamiento de señal aísla los impactos periódicos de alta frecuencia modulados por defectos en pistas?',
      opts: ['Análisis modal estático', 'Demodulación de envolvente (Envelope Analysis)', 'Balanceo dinámico por pesos fijos', 'Filtrado paso bajo puro'],
      ans: 1,
      exp: 'El análisis de envolvente aplica un filtro paso banda a frecuencias resonantes y demodula la señal para revelar las frecuencias características de defecto de rodamiento (BPFI, BPFO, BSF, FTF).',
      skill: 'Mantenimiento Predictivo por Vibraciones',
      topic: 'Diagnóstico de Máquinas Rotativas',
      sub: 'Análisis de Envolvente en Rodamientos'
    },
    {
      q: 'En una línea de transmisión eléctrica de alta tensión, ¿qué fenómeno físico indeseado ocurre cuando el gradiente de potencial eléctrico en la superficie de los conductores ioniza el aire circundante produciendo zumbido acústico y pérdidas energéticas?',
      opts: ['Efecto Meissner', 'Efecto Corona', 'Efecto Pelicular o Skin', 'Efecto Seebeck'],
      ans: 1,
      exp: 'El efecto corona se inicia cuando la rigidez dieléctrica del aire (aprox. 30 kV/cm a presión normal) es superada en la superficie de conductores de alta tensión, ionizando el gas con pérdidas de potencia activas.',
      skill: 'Líneas de Transporte de Alta Tensión',
      topic: 'Sistemas Eléctricos de Potencia',
      sub: 'Efecto Corona'
    },
    {
      q: 'En la alineación de ejes entre un motor eléctrico y una bomba centrífuga mediante comparadores de carátula o láser, ¿cuáles son los dos desalineamientos geométricos fundamentales que deben corregirse?',
      opts: [
        'Desalineamiento radial o paralelo (offset) y desalineamiento angular (gap)',
        'Desalineamiento elástico y desalineamiento magnético',
        'Desalineamiento térmico axial exclusivamente',
        'Desalineamiento estequiométrico'
      ],
      ans: 0,
      exp: 'La alineación de precisión de maquinaria rotativa corrige el desalineamiento paralelo (diferencia de centros entre ejes) y el angular (diferencia de inclinación entre ejes).',
      skill: 'Mecánica de Montaje y Alineación de Ejes',
      topic: 'Mantenimiento Mecánico Industrial',
      sub: 'Alineación de Ejes y Coples'
    },
    {
      q: 'En la tecnología de células solares fotovoltaicas de silicio monocristalino, ¿qué tipo de unión semiconductora genera el campo eléctrico interno que separa los pares electrón-hueco fotoinducidos?',
      opts: ['Unión metal-óxido (MOS)', 'Unión p-n semiconductora', 'Diodo Schottky termoiónico', 'Tiristor SCR'],
      ans: 1,
      exp: 'La unión p-n crea una zona de carga espacial con campo eléctrico intrínseco que arrastra los electrones hacia la región n y los huecos hacia la p al incidir fotones con energía superior al bandgap.',
      skill: 'Energía Solar Fotovoltaica',
      topic: 'Semiconductores y Renovables',
      sub: 'Unión p-n Fotovoltaica'
    },
    {
      q: 'En la refrigeración industrial por compresión mecánica de vapor, ¿cuál es la función termodinámica del condensador?',
      opts: [
        'Absorber calor del espacio refrigerado evaporando el refrigerante a baja presión.',
        'Disipar calor al medio exterior (agua o aire) condensando el vapor de refrigerante sobrecalentado a alta presión.',
        'Reducir la presión del líquido sin intercambio de calor.',
        'Comprimir el líquido saturado adiabáticamente.'
      ],
      ans: 1,
      exp: 'El condensador rechaza el calor absorbido en el evaporador más el trabajo mecánico añadido por el compresor hacia el ambiente, licuando el gas refrigerante a alta presión.',
      skill: 'Termodinámica de Refrigeración Industrial',
      topic: 'Climatización y Termotecnia',
      sub: 'Condensadores en Ciclos Frigoríficos'
    },
    {
      q: 'En la soldadura por arco con electrodo revestido (SMAW), ¿cuál es la función primordial del fundente del revestimiento al descomponerse por el calor del arco eléctrico?',
      opts: [
        'Aumentar la resistencia óhmica del cordón de soldadura.',
        'Generar una atmósfera gaseosa protectora y escoria sólida que aíslan el baño de fusión del oxígeno y nitrógeno atmosféricos.',
        'Enfriar instantáneamente el charco de metal líquido.',
        'Evitar el paso de corriente eléctrica.'
      ],
      ans: 1,
      exp: 'El revestimiento genera gases protectores (CO₂, H₂O) y una escoria desoxidante que flota sobre el metal fundido, previniendo porosidades, nitruración y fragilización por fragilidad de hidrógeno.',
      skill: 'Tecnología de la Soldadura y Metalurgia',
      topic: 'Procesos de Fabricación Mecánica',
      sub: 'Soldadura SMAW y Metalurgia del Arco'
    },
    {
      q: 'En electrostática de plantas petroquímicas y áreas clasificadas ATEX, ¿qué medida de seguridad técnica previene la acumulación de cargas electrostáticas y arcos de ignición en tanques de combustible?',
      opts: [
        'Aislamiento de teflón en las tuberías de descarga',
        'Puesta a tierra equipotencial obligatoria y puentes de continuidad eléctrica (bonding) en todas las bridas metálicas',
        'Aumento de la velocidad de flujo del fluido por encima de 10 m/s',
        'Pintura dieléctrica en los bornes de puesta a tierra'
      ],
      ans: 1,
      exp: 'El bonding equipotencial y la puesta a tierra drenan inmediatamente las cargas triboeléctricas generadas por el flujo turbulento de hidrocarburos dieléctricos, evitando descargas de chispas en atmósferas explosivas.',
      skill: 'Seguridad Industrial en Zonas Clasificadas ATEX',
      topic: 'Seguridad Industrial y Prevención',
      sub: 'Control de Electricidad Estática'
    },
    {
      q: 'En la aerodinámica de aerogeneradores eólicos, ¿qué límite físico teórico descubierto por Albert Betz en 1919 establece que ningún rotor eólico puede extraer más del 59.3% de la energía cinética del viento?',
      opts: ['Límite de Mach transónico', 'Límite de Betz (C_p,max = 16/27 ≈ 59.3%)', 'Criterio de Rayleigh', 'Ecuación de Colebrook-White'],
      ans: 1,
      exp: 'El Límite de Betz demuestra analíticamente que forzar una desaceleración completa del flujo de aire detrás del disco del rotor frenaría la masa de aire aguas arriba, siendo la extracción óptima cuando v_salida = (1/3) v_entrada.',
      skill: 'Energía Eólica y Aerodinámica de Rotores',
      topic: 'Energías Renovables',
      sub: 'Límite de Betz'
    },
    {
      q: 'En sistemas trifásicos equilibrados con cargas conectadas en estrella (Y), ¿cuál es la relación matemática entre la tensión de línea a línea (V_L) y la tensión de fase simple (V_F)?',
      opts: ['V_L = V_F', 'V_L = √3 · V_F ≈ 1.732 · V_F', 'V_L = V_F / √3', 'V_L = 3 · V_F'],
      ans: 1,
      exp: 'En una conexión en estrella equilibrada: V_L = √3 · V_F y la corriente de línea es exactamente igual a la de fase (I_L = I_F). Por ejemplo, a 230 V de fase le corresponden 400 V de línea.',
      skill: 'Sistemas Trifásicos de Corriente Alterna',
      topic: 'Electrotecnia',
      sub: 'Conexión Estrella y Relación de Tensiones'
    },
    {
      q: 'En la selección de materiales para ejes mecánicos sometidos a cargas cíclicas repetidas, ¿qué límite de tensión por debajo del cual una aleación ferrosa puede soportar infinitos ciclos sin rotura por fatiga define la curva de Wöhler (S-N)?',
      opts: ['Límite de proporcionalidad elástica', 'Límite de resistencia a la fatiga (Endurance limit / Fatigue limit)', 'Tenacidad de fractura K_IC', 'Dureza Brinell'],
      ans: 1,
      exp: 'Los aceros presentan un límite de fatiga definido (S_e): tensiones cíclicas por debajo de este umbral no propagan microfisuras independientemente del número de ciclos (N > 10⁶ ciclos).',
      skill: 'Fatiga de Materiales y Curva de Wöhler',
      topic: 'Resistencia de Materiales',
      sub: 'Límite de Fatiga en Aceros'
    },
    {
      q: 'En el ensayo de aislamiento de bobinados de motores eléctricos de media tensión, ¿qué índice normalizado evalúa la absorción dieléctrica midiendo la resistencia de aislamiento a los 10 minutos entre la resistencia al 1 minuto (R₁₀ / R₁)?',
      opts: ['Relación de onda estacionaria (ROE)', 'Índice de Polarización (IP)', 'Factor de disipación tan(δ)', 'Tasa de distorsión armónica THD'],
      ans: 1,
      exp: 'El Índice de Polarización (PI = R₁₀min / R₁min) según IEEE 43 indica la limpieza y sequedad del aislamiento: valores superiores a 2.0 señalan aislamiento sano, mientras valores inferiores a 1.5 denotan humedad y degradación.',
      skill: 'Diagnóstico Dieléctrico de Máquinas Eléctricas',
      topic: 'Mantenimiento Eléctrico',
      sub: 'Índice de Polarización IEEE 43'
    },
    {
      q: 'En neumática de automatización rápida, ¿qué válvula auxiliar se acopla directamente al cilindro de simple o doble efecto para evacuar el aire de retorno a la atmósfera sin pasar por la tubería de control?',
      opts: ['Válvula de secuencia por presión', 'Válvula de escape rápido (quick exhaust valve)', 'Regulador de presión proporcional', 'Válvula de estrangulamiento unidireccional'],
      ans: 1,
      exp: 'La válvula de escape rápido descarga el aire comprimido a través de un orificio amplio localmente, reduciendo la contrapresión y aumentando sustancialmente la velocidad del vástago.',
      skill: 'Componentes Neumáticos de Alta Dinámica',
      topic: 'Neumática Industrial',
      sub: 'Válvulas de Escape Rápido'
    },
    {
      q: 'En la acústica técnica y control de ruido en plantas industriales, si una máquina emite un nivel de presión sonora de 80 dB(A) y se enciende una segunda máquina idéntica a su lado, ¿cuál es el nivel sonoro resultante combinado?',
      opts: ['83 dB(A)', '86 dB(A)', '100 dB(A)', '160 dB(A)'],
      ans: 0,
      exp: 'La escala de decibelios es logarítmica: al duplicar fuentes incoherentes idénticas de sonido, el nivel aumenta en 10 · log₁₀(2) ≈ +3 dB(A). Por tanto: 80 + 3 = 83 dB(A).',
      skill: 'Acústica Técnica y Control de Ruido',
      topic: 'Seguridad y Ergonomía Ocupacional',
      sub: 'Suma Logarítmica de Niveles de Presión Sonora'
    }
  ];

  tecRaw.forEach((item, idx) => {
    tec.push({
      id: `fis-tec-${idx + 1}`,
      sectionId: 5,
      number: 60 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Desafiante',
      educationalLevel: 'Técnico',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // UNIVERSITARIO 81-100
  const uniRaw = [
    {
      q: 'En la mecánica analítica de Lagrange y Hamilton, ¿qué teorema fundamental de simetría demostrado por Emmy Noether en 1918 establece que a cada simetría continua de la acción le corresponde una ley de conservación física exacta?',
      opts: ['Teorema de Liouville', 'Teorema de Noether', 'Teorema de Hamilton-Jacobi', 'Teorema de Poincaré-Bendixson'],
      ans: 1,
      exp: 'El Teorema de Noether deduce formalmente que la invariancia temporal de la acción implica conservación de energía, la invariancia traslacional implica conservación del momento lineal y la invariancia rotacional implica conservación del momento angular.',
      skill: 'Mecánica Teórica y Principios Variacionales',
      topic: 'Mecánica Clásica Avanzada',
      sub: 'Teorema de Noether y Simetrías'
    },
    {
      q: 'En la teoría electromagnética relativista covariante de Maxwell, ¿cuál es la estructura matemática del tensor de campo electromagnético antisimétrico F^{μν} en cuatro dimensiones?',
      opts: [
        'Un cuatro-vector de espín fermiónico',
        'Un tensor covariante de rango 2 antisimétrico cuyas componentes espaciotemporales combinan las componentes de los campos E y B (F^{μν} = ∂^μ A^ν - ∂^ν A^μ)',
        'Un escalar invariante de gauge abelian',
        'Una matriz simétrica positiva definida'
      ],
      ans: 1,
      exp: 'El tensor de Faraday F^{μν} compacta las 4 ecuaciones de Maxwell en solo dos expresiones tensoriales manifiestamente covariantes: ∂_μ F^{μν} = μ₀ J^ν y ∂_λ F_{μν} + ∂_μ F_{νλ} + ∂_ν F_{λμ} = 0.',
      skill: 'Electrodinámica Clásica Covariante',
      topic: 'Electromagnetismo Teórico',
      sub: 'Tensor Electromagnético de Faraday'
    },
    {
      q: 'En mecánica cuántica no relativista, ¿cuál es la relación de conmutación canónica entre los operadores de posición X̂ y momento lineal P̂ en la representación de Schrödinger?',
      opts: ['[X̂, P̂] = 0', '[X̂, P̂] = i·ħ·Î', '[X̂, P̂] = -i·ħ²·Î', '[X̂, P̂] = 2ħ·Î'],
      ans: 1,
      exp: 'El conmutador fundamental de Heisenberg-Born-Jordan es [X̂, P̂] = X̂P̂ - P̂X̂ = i·ħ·Î, del cual se deduce rigurosamente el Principio de Incertidumbre de Heisenberg (Δx · Δp ≥ ħ/2).',
      skill: 'Mecánica Cuántica y Álgebra de Operadores',
      topic: 'Física Cuántica Superior',
      sub: 'Conmutador Canónico de Heisenberg'
    },
    {
      q: 'En la relatividad general de Albert Einstein (1915), ¿qué ecuación tensorial de campo relaciona la curvatura del espaciotiempo expresada por el tensor de Einstein G_{μν} con la distribución de materia y energía expresada por el tensor energía-impulso T_{μν}?',
      opts: [
        'G_{μν} = (8πG / c⁴) · T_{μν} - Λ g_{μν}',
        'G_{μν} = m · a_{μν}',
        'R_{μν} = 0 estrictamente en todo el cosmos',
        'T_{μν} = ∇_μ ∇_ν Φ'
      ],
      ans: 0,
      exp: 'Las ecuaciones de campo de Einstein G_{μν} + Λ g_{μν} = (8πG/c⁴) T_{μν} dictan que la materia-energía le dice al espaciotiempo cómo curvarse, y la curvatura del espaciotiempo le dice a la materia cómo moverse.',
      skill: 'Relatividad General y Geometría Riemanniana',
      topic: 'Gravitación Relativista',
      sub: 'Ecuaciones de Campo de Einstein'
    },
    {
      q: 'En termodinámica estadística cuántica, ¿qué distribución estadística rige el número medio de ocupación por estado cuántico para fermiones idénticos con espín semi-entero sujetos al principio de exclusión de Pauli (como los electrones en un metal)?',
      opts: ['Estadística de Maxwell-Boltzmann clásica', 'Estadística de Fermi-Dirac (n_i = 1 / [e^{(ε_i - μ)/k_B T} + 1])', 'Estadística de Bose-Einstein', 'Distribución de Poisson pura'],
      ans: 1,
      exp: 'La estadística de Fermi-Dirac acota la ocupación a un máximo de 1 partícula por estado cuántico (debido al principio de exclusión de Pauli), derivando el concepto de Energía de Fermi (E_F).',
      skill: 'Mecánica Estadística Cuántica',
      topic: 'Física del Estado Sólido',
      sub: 'Estadística de Fermi-Dirac'
    },
    {
      q: 'En física del estado sólido, ¿qué teorema cuántico afirma que las funciones de onda electrónicas en un potencial cristalino periódico con simetría de traslación pueden escribirse como una onda plana modulada por una función periódica con la red (ψ_k(r) = e^{i k·r} · u_k(r))?',
      opts: ['Teorema de Bloch', 'Teorema de Kramers', 'Teorema de Goldstone', 'Teorema de Wigner-Eckart'],
      ans: 0,
      exp: 'El Teorema de Felix Bloch fundamenta toda la teoría de bandas de energía en sólidos cristalinos (metales, aislantes y semiconductores) a partir de la invariancia traslacional discreta.',
      skill: 'Física del Estado Sólido y Estructura de Bandas',
      topic: 'Materia Condensada',
      sub: 'Teorema de Bloch'
    },
    {
      q: 'En la teoría cuántica de campos y física de partículas, ¿a través de qué mecanismo de ruptura espontánea de la simetría electrodébil gauge adquieren masa en reposo los bosones vectoriales intermediarios W⁺, W⁻ y Z⁰?',
      opts: ['Mecanismo de Anderson-Higgs-Brout-Englert', 'Confinamiento de color por gluones', 'Aniquilación positrónica', 'Oscilación de sabor de neutrinos'],
      ans: 0,
      exp: 'El mecanismo de Higgs introduce un campo escalar complejo con potencial de sombrero mexicano; el valor esperado en el vacío no nulo (VEV ≈ 246 GeV) rompe la simetría SU(2)_L × U(1)_Y dotando de masa a los bosones débiles y fermiones.',
      skill: 'Modelo Estándar de Física de Partículas',
      topic: 'Teoría Cuántica de Campos',
      sub: 'Mecanismo de Higgs'
    },
    {
      q: 'En electrodinámica cuántica (QED), ¿qué anomalía en el momento magnético dipolar del electrón (g - 2) calculó Julian Schwinger en 1948 mediante correcciones radiativas de un bucle a nivel perturbativo?',
      opts: ['a_e = α / (2π) ≈ 0.00116', 'a_e = 0 idéntico', 'a_e = ħ / c²', 'a_e = 2π / α'],
      ans: 0,
      exp: 'La corrección radiativa de un fotón virtual en el vértice QED de Schwinger a_e = α / (2π) fue uno de los triunfos empíricos más extraordinarios de la física teórica, verificando la renormalización con 12 cifras decimales.',
      skill: 'Electrodinámica Cuántica (QED)',
      topic: 'Física Teórica de Altas Energías',
      sub: 'Momento Magnético Anómalo de Schwinger'
    },
    {
      q: 'En óptica cuántica y física de láseres, ¿qué coeficientes probabilísticos introdujo Albert Einstein en 1917 para relacionar las tasas de absorción, emisión espontánea y emisión estimulada de fotones por átomos en equilibrio térmico con radiación de Planck?',
      opts: ['Coeficientes A y B de Einstein', 'Matrices de Pauli', 'Coeficientes de Clebsch-Gordan', 'Parámetros de Stokes'],
      ans: 0,
      exp: 'Los coeficientes A₂₁ (emisión espontánea) y B₂₁ (emisión estimulada) demostraron que la amplificación de luz coherente (LÁSER) requiere inversión de población atómica entre estados ligados.',
      skill: 'Óptica Cuántica y Física de Láseres',
      topic: 'Física Atómica y Óptica Cuántica',
      sub: 'Coeficientes de Einstein'
    },
    {
      q: 'En hidrodinámica avanzada de fluidos viscosos incompresibles, ¿qué célebres ecuaciones diferenciales en derivadas parciales no lineales gobiernan la conservación de cantidad de movimiento bajo esfuerzos de cizalla viscosos (Navier-Stokes)?',
      opts: [
        'ρ · (∂v/∂t + (v · ∇)v) = -∇p + μ ∇²v + f_externa',
        '∇ × B = μ₀ J exclusivamente',
        'd²x/dt² + ω²x = 0',
        '∂²u/∂t² = c² ∇²u'
      ],
      ans: 0,
      exp: 'Las ecuaciones de Navier-Stokes combinan el término de aceleración advectiva no lineal (v · ∇)v con el tensor de esfuerzos viscosos newtoniano μ ∇²v y el gradiente bárico, representando uno de los problemas del Milenio del Instituto Clay.',
      skill: 'Mecánica de Fluidos Teórica',
      topic: 'Dinámica de Fluidos Avanzada',
      sub: 'Ecuaciones de Navier-Stokes'
    },
    {
      q: 'En termodinámica de agujeros negros relativistas, ¿qué fórmula formulada por Jacob Bekenstein y Stephen Hawking calcula la entropía termodinámica S_BH proporcional al área del horizonte de sucesos A?',
      opts: ['S_BH = (k_B · c³ · A) / (4 G · ħ)', 'S_BH = m · c²', 'S_BH = k_B · T', 'S_BH = 4π G M²'],
      ans: 0,
      exp: 'La fórmula de Bekenstein-Hawking demostró que los agujeros negros no son entidades puramente mecánicas sino termodinámicas con entropía proporcional al área del horizonte dividida por el área de Planck (ℓ_P² = Għ/c³).',
      skill: 'Astrofísica Teórica y Gravedad Cuántica',
      topic: 'Física de Agujeros Negros',
      sub: 'Entropía de Bekenstein-Hawking'
    },
    {
      q: 'En superconductividad de baja temperatura, ¿qué teoría microscópica formulada por Bardeen, Cooper y Schrieffer (BCS) en 1957 explica el transporte de corriente sin disipación mediante el emparejamiento de electrones mediado por fonones de la red cristalina?',
      opts: ['Teoría BCS de pares de Cooper', 'Modelo de London fenomenológico', 'Ecuación de Ginzburg-Landau', 'Condensación de Dirac'],
      ans: 0,
      exp: 'La teoría BCS demuestra que a bajas temperaturas, la interacción atractiva neta entre electrones mediada por el intercambio virtual de fonones induce la formación de pares de Cooper bosónicos que condensan en un gap superconductor.',
      skill: 'Superconductividad y Materia Condensada',
      topic: 'Física Cuántica del Estado Sólido',
      sub: 'Teoría BCS y Pares de Cooper'
    },
    {
      q: 'En la teoría cuántica de colisiones y dispersión elástica de partículas (Scattering), ¿qué método aproximativo de perturbaciones es válido cuando el potencial de interacción V(r) es débil comparado con la energía cinética de la onda plana incidente?',
      opts: ['Primera Aproximación de Born', 'Método WKB semiclásico', 'Aproximación adiabática de Born-Oppenheimer', 'Teorema óptico estocástico'],
      ans: 0,
      exp: 'La primera aproximación de Born expresa la amplitud de dispersión f(θ) como la transformada de Fourier del potencial espacial V(r), fundamental en dispersión de electrones y neutrones térmicos.',
      skill: 'Teoría Cuántica de Dispersión (Scattering)',
      topic: 'Mecánica Cuántica Avanzada',
      sub: 'Aproximación de Born'
    },
    {
      q: 'En cosmología teórica y relatividad cosmológica, ¿qué parámetro adimensional Ω_total = ρ / ρ_crítica determina la curvatura geométrica espacial global del Universo según la métrica FLRW?',
      opts: [
        'Si Ω = 1 el espacio es euclidiano plano (k = 0); si Ω > 1 es cerrado esférico (k = +1); si Ω < 1 es abierto hiperbólico (k = -1).',
        'Ω solo describe la velocidad orbital solar.',
        'El espacio es siempre hiperbólico cerrado.',
        'La densidad crítica no depende de la constante de Hubble.'
      ],
      ans: 0,
      exp: 'A partir de la primera ecuación de Friedmann, la densidad crítica ρ_c = 3H² / (8πG) actúa como umbral: las mediciones observacionales del fondo cósmico de microondas (CMB por satélite Planck) indican que Ω_k ≈ 0, confirmando un universo espacialmente plano.',
      skill: 'Cosmología Teórica y Modelo Lambda-CDM',
      topic: 'Astrofísica y Cosmología',
      sub: 'Métrica FLRW y Parámetro de Densidad'
    },
    {
      q: 'En mecánica cuántica relativista para partículas de espín 1/2, ¿qué ecuación covariante dedujo Paul Dirac en 1928 que predijo teóricamente por primera vez la existencia de la antimateria (el positrón)?',
      opts: ['Ecuación de Klein-Gordon', 'Ecuación de Dirac (iħ γ^μ ∂_μ ψ - mc ψ = 0)', 'Ecuación de Proca para bosones vectoriales', 'Ecuación de Weyl para neutrinos quirales'],
      ans: 1,
      exp: 'Al linealizar la relación de energía relativista E² = p²c² + m²c⁴ usando las matrices 4×4 de Dirac (álgebra de Clifford {γ^μ, γ^ν} = 2g^{μν}), Dirac predijo estados de energía negativa interpretados como antipartículas.',
      skill: 'Mecánica Cuántica Relativista',
      topic: 'Física Teórica',
      sub: 'Ecuación de Dirac y Antimateria'
    },
    {
      q: 'En la teoría del caos determinista y sistemas dinámicos no lineales, ¿qué exponente métrico λ cuantifica la tasa exponencial promedio de separación o divergencia en el tiempo entre dos trayectorias que parten de condiciones iniciales infinitesimalmente próximas (sensibilidad a las condiciones iniciales)?',
      opts: ['Exponente de Hurst', 'Mayor exponente de Lyapunov (λ > 0)', 'Dimensión fractal de Hausdorff', 'Número de Reynolds crítico'],
      ans: 1,
      exp: 'Un sistema dinámico determinista exhibe caos determinista en un atractor extraño si su máximo exponente de Lyapunov es estrictamente positivo (λ > 0), con divergencia |δx(t)| ≈ |δx₀| e^{λt}.',
      skill: 'Sistemas Dinámicos No Lineales y Caos',
      topic: 'Física Matemática No Lineal',
      sub: 'Exponentes de Lyapunov'
    },
    {
      q: 'En astrofísica estelar, ¿cuál es el límite de masa máximo calculado por Subrahmanyan Chandrasekhar (aproximadamente 1.4 masas solares) que puede sostener una enana blanca mediante la presión de degeneración cuántica de electrones relativistas?',
      opts: ['Límite de Tolman-Oppenheimer-Volkoff (TOV)', 'Límite de Chandrasekhar (M_Ch ≈ 1.44 M_☉)', 'Límite de Eddington de radiación', 'Radio de Schwarzschild'],
      ans: 1,
      exp: 'Por encima de ~1.44 M_☉, los electrones degenerados se vuelven ultra-relativistas y la presión de degeneración de Fermi no puede contrarrestar el colapso gravitatorio, colapsando a estrella de neutrones o supernova tipo Ia.',
      skill: 'Estructura y Evolución Estelar',
      topic: 'Astrofísica Estelar',
      sub: 'Límite de Chandrasekhar'
    },
    {
      q: 'En la teoría cuántica de campos en espaciotiempos curvos, ¿qué radiación térmica espontánea predijo Stephen Hawking (1974) que emite un agujero negro debido a la creación cuántica de pares de partículas virtuales cerca del horizonte de sucesos?',
      opts: ['Radiación de Hawking', 'Radiación sincrotrón relativista', 'Transición de fase leptónica', 'Bremsstrahlung de plasma'],
      ans: 0,
      exp: 'El campo gravitatorio extremo en el horizonte separa pares virtuales partícula-antipartícula: la de energía negativa respecto al infinito cae al agujero mientras la de energía positiva escapa, emitiendo radiación de cuerpo negro a temperatura T_H = ħc³ / (8πGM k_B).',
      skill: 'Campos Cuánticos en Espaciotiempo Curvo',
      topic: 'Gravitación Cuántica',
      sub: 'Radiación de Hawking'
    },
    {
      q: 'En física de plasmas y fusión nuclear magnética, ¿qué criterio termonuclear formulado por John D. Lawson establece que el producto de la densidad iónica, temperatura y tiempo de confinamiento energético (n · T · τ_E) debe superar un valor umbral para alcanzar la ignición sostenida?',
      opts: ['Criterio de triple producto de Lawson', 'Límite de Greenwald de densidad', 'Condición de estabilidad de Kruskal-Shafranov', 'Longitud de Debye'],
      ans: 0,
      exp: 'El criterio de Lawson exige que la potencia de calentamiento aportada por las partículas alfa de la reacción D-T compense exactamente todas las pérdidas energéticas por radiación y transporte térmico del plasma.',
      skill: 'Física de Plasmas y Fusión Termonuclear',
      topic: 'Fusión Nuclear Controlada',
      sub: 'Criterio de Lawson'
    },
    {
      q: 'En física cuántica de la información, ¿qué teorema fundamental deducido por Wootters y Zurek establece la imposibilidad matemática de clonar perfectamente un estado cuántico superpuesto puro desconocido mediante una transformación unitaria?',
      opts: ['Teorema de Bell', 'Teorema de No-Clonación (No-cloning theorem)', 'Teorema de Kochen-Specker', 'Desigualdad de Clauser-Horne-Shimony-Holt (CHSH)'],
      ans: 1,
      exp: 'Dada la linealidad estricta de la mecánica cuántica: si U |ψ⟩|0⟩ = |ψ⟩|ψ⟩ y U |φ⟩|0⟩ = |φ⟩|φ⟩, para un estado superpuesto (|ψ⟩+|φ⟩)/√2 la salida no es el producto tensorial duplicado, garantizando la inviolabilidad criptográfica cuántica (QKD).',
      skill: 'Información y Criptografía Cuántica',
      topic: 'Computación Cuántica',
      sub: 'Teorema de No-Clonación'
    }
  ];

  tecRaw.forEach((item, idx) => {
    // Already pushed above
  });

  uniRaw.forEach((item, idx) => {
    uni.push({
      id: `fis-uni-${idx + 1}`,
      sectionId: 5,
      number: 80 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Desafiante',
      educationalLevel: 'Universitario',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  fisicaQuestions.push(...bas, ...int, ...bac, ...tec, ...uni);
}

makeFisicaItems();
writeSubjectFile('fisica.ts', 'QUESTIONS_FISICA', 'Física', fisicaQuestions);
