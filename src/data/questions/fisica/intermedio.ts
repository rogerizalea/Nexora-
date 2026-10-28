import { Question } from '../../../types';

export const FISICA_INTERMEDIO: Question[] = [
  {
    "id": "fis-int-1",
    "sectionId": 5,
    "number": 21,
    "text": "Un móvil parte del reposo y acelera uniformemente a razón de 3 m/s² durante 4 segundos. ¿Qué velocidad alcanza al término de dicho tiempo?",
    "options": [
      "6 m/s",
      "9 m/s",
      "12 m/s",
      "15 m/s"
    ],
    "correctIndex": 2,
    "explanation": "En MRUA con v₀ = 0: v_f = v₀ + a·t = 0 + (3 m/s²)(4 s) = 12 m/s.",
    "skill": "Cinemática MRUA",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Movimiento Uniformemente Acelerado",
    "subtopic": "Cálculo de Velocidad Final"
  },
  {
    "id": "fis-int-2",
    "sectionId": 5,
    "number": 22,
    "text": "¿Cuál es la fuerza neta horizontal necesaria para acelerar una masa de 5 kg a razón de 4 m/s² sobre una superficie sin fricción?",
    "options": [
      "1.25 N",
      "9 N",
      "20 N",
      "40 N"
    ],
    "correctIndex": 2,
    "explanation": "Por la Segunda Ley de Newton: F_neta = m · a = (5 kg)(4 m/s²) = 20 N.",
    "skill": "Dinámica de Newton",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Leyes de Newton",
    "subtopic": "Segunda Ley de Newton"
  },
  {
    "id": "fis-int-3",
    "sectionId": 5,
    "number": 23,
    "text": "Un cuerpo de 2 kg se encuentra a una altura de 10 metros sobre el suelo. Tomando g = 9.8 m/s², ¿cuál es su energía potencial gravitatoria respecto al suelo?",
    "options": [
      "49 J",
      "98 J",
      "196 J",
      "392 J"
    ],
    "correctIndex": 2,
    "explanation": "Ep = m · g · h = (2 kg)(9.8 m/s²)(10 m) = 196 Joules.",
    "skill": "Energía Mecánica Gravitatoria",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Trabajo y Energía",
    "subtopic": "Energía Potencial"
  },
  {
    "id": "fis-int-4",
    "sectionId": 5,
    "number": 24,
    "text": "¿Cuál es la presión hidrostática ejercida en el fondo de un tanque lleno de agua de 3 metros de profundidad? (Densidad del agua ρ = 1000 kg/m³, g = 9.8 m/s²).",
    "options": [
      "2,940 Pa",
      "9,800 Pa",
      "29,400 Pa",
      "58,800 Pa"
    ],
    "correctIndex": 2,
    "explanation": "Presión hidrostática P = ρ · g · h = (1000 kg/m³)(9.8 m/s²)(3 m) = 29,400 Pa.",
    "skill": "Hidrostática Fundamental",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Mecánica de Fluidos",
    "subtopic": "Presión Hidrostática"
  },
  {
    "id": "fis-int-5",
    "sectionId": 5,
    "number": 25,
    "text": "Según la Ley de Hooke, un resorte se estira 0.05 metros cuando se le aplica una fuerza de 25 N. ¿Cuál es la constante elástica k del resorte?",
    "options": [
      "125 N/m",
      "250 N/m",
      "500 N/m",
      "1,000 N/m"
    ],
    "correctIndex": 2,
    "explanation": "F = k · Δx → k = F / Δx = 25 N / 0.05 m = 500 N/m.",
    "skill": "Elasticidad y Ley de Hooke",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Estática y Elasticidad",
    "subtopic": "Constante Elástica"
  },
  {
    "id": "fis-int-6",
    "sectionId": 5,
    "number": 26,
    "text": "Por un conductor circula una corriente de 2 Amperios conectado a una diferencia de potencial de 24 Voltios. ¿Cuál es la resistencia eléctrica del conductor según la Ley de Ohm?",
    "options": [
      "6 Ω",
      "12 Ω",
      "24 Ω",
      "48 Ω"
    ],
    "correctIndex": 1,
    "explanation": "Ley de Ohm: R = V / I = 24 V / 2 A = 12 Ohmios (Ω).",
    "skill": "Leyes de Circuitos Eléctricos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Electrodinámica",
    "subtopic": "Ley de Ohm"
  },
  {
    "id": "fis-int-7",
    "sectionId": 5,
    "number": 27,
    "text": "¿Cuál es la frecuencia de una onda luminosa cuya longitud de onda es λ = 500 nm (5 × 10⁻⁷ m) en el vacío? (c = 3 × 10⁸ m/s).",
    "options": [
      "1.5 × 10¹⁴ Hz",
      "6.0 × 10¹⁴ Hz",
      "3.0 × 10⁸ Hz",
      "1.2 × 10¹⁵ Hz"
    ],
    "correctIndex": 1,
    "explanation": "v = λ · f → f = c / λ = (3 × 10⁸ m/s) / (5 × 10⁻⁷ m) = 6.0 × 10¹⁴ Hz.",
    "skill": "Ondas Electromagnéticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Física Ondulatoria",
    "subtopic": "Ecuación Fundamental de Onda"
  },
  {
    "id": "fis-int-8",
    "sectionId": 5,
    "number": 28,
    "text": "¿Qué cantidad de calor se requiere para elevar la temperatura de 500 g de agua líquida desde 20 °C hasta 50 °C? (Calor específico c = 1 cal/g·°C).",
    "options": [
      "5,000 cal",
      "10,000 cal",
      "15,000 cal",
      "25,000 cal"
    ],
    "correctIndex": 2,
    "explanation": "Q = m · c · ΔT = (500 g)(1 cal/g·°C)(50 - 20 °C) = 500 × 1 × 30 = 15,000 calorías.",
    "skill": "Calorimetría",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Termodinámica",
    "subtopic": "Calor Sensible"
  },
  {
    "id": "fis-int-9",
    "sectionId": 5,
    "number": 29,
    "text": "Dos cargas puntuales de +2 μC y +3 μC se encuentran separadas 0.1 metros en el aire. ¿Cuál es el carácter de la fuerza electrostática entre ellas?",
    "options": [
      "Fuerza de atracción electrostática",
      "Fuerza de repulsión electrostática",
      "Fuerza nula por simetría",
      "Fuerza nuclear fuerte"
    ],
    "correctIndex": 1,
    "explanation": "Según la Ley de Coulomb, cargas del mismo signo (ambas positivas) se repelen mutuamente con una fuerza inversamente proporcional al cuadrado de la distancia.",
    "skill": "Ley de Coulomb",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Electrostática",
    "subtopic": "Interacción de Cargas"
  },
  {
    "id": "fis-int-10",
    "sectionId": 5,
    "number": 30,
    "text": "Un bloque de 10 kg se desplaza una distancia de 6 metros a lo largo de una superficie horizontal empujado por una fuerza horizontal constante de 40 N. ¿Cuál es el trabajo realizado por la fuerza?",
    "options": [
      "60 J",
      "120 J",
      "240 J",
      "400 J"
    ],
    "correctIndex": 2,
    "explanation": "Trabajo mecánico W = F · d · cos(0°) = 40 N × 6 m × 1 = 240 Joules.",
    "skill": "Trabajo Mecánico Escalar",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Mecánica Clásica",
    "subtopic": "Cálculo de Trabajo"
  },
  {
    "id": "fis-int-11",
    "sectionId": 5,
    "number": 31,
    "text": "¿Cuál es el período T de oscilación de un péndulo simple si su frecuencia es f = 2 Hz?",
    "options": [
      "0.25 s",
      "0.50 s",
      "1.0 s",
      "2.0 s"
    ],
    "correctIndex": 1,
    "explanation": "El período es el inverso de la frecuencia: T = 1 / f = 1 / 2 Hz = 0.50 segundos.",
    "skill": "Movimiento Armónico Simple",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Oscilaciones",
    "subtopic": "Período y Frecuencia"
  },
  {
    "id": "fis-int-12",
    "sectionId": 5,
    "number": 32,
    "text": "En un circuito con dos resistencias de 6 Ω y 3 Ω conectadas en paralelo, ¿cuál es la resistencia equivalente del circuito?",
    "options": [
      "2 Ω",
      "4.5 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "correctIndex": 0,
    "explanation": "1/R_eq = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 → R_eq = 2 Ohmios.",
    "skill": "Resistencias en Paralelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos Eléctricos",
    "subtopic": "Resistencia Equivalente en Paralelo"
  },
  {
    "id": "fis-int-13",
    "sectionId": 5,
    "number": 33,
    "text": "¿Qué principio de la hidrostática establece que todo cuerpo sumergido en un fluido experimenta un empuje vertical hacia arriba igual al peso del fluido desalojado?",
    "options": [
      "Principio de Pascal",
      "Principio de Arquímedes",
      "Principio de Bernoulli",
      "Principio de Torricelli"
    ],
    "correctIndex": 1,
    "explanation": "El Principio de Arquímedes define la fuerza de flotación o empuje E = ρ_fluido · V_sumergido · g.",
    "skill": "Principio de Arquímedes y Flotabilidad",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrostática",
    "subtopic": "Empuje de Arquímedes"
  },
  {
    "id": "fis-int-14",
    "sectionId": 5,
    "number": 34,
    "text": "Un gas ideal confinado a temperatura constante experimenta una reducción de su volumen a la mitad. ¿Qué le ocurre a su presión según la Ley de Boyle-Mariotte?",
    "options": [
      "Se reduce a la mitad",
      "Se duplica",
      "Se cuadruplica",
      "Permanece invariable"
    ],
    "correctIndex": 1,
    "explanation": "Ley de Boyle: P₁ · V₁ = P₂ · V₂ a temperatura constante. Si V₂ = V₁/2, entonces P₂ = 2 · P₁ (se duplica).",
    "skill": "Leyes de los Gases Ideales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Termodinámica de Gases",
    "subtopic": "Ley de Boyle"
  },
  {
    "id": "fis-int-15",
    "sectionId": 5,
    "number": 35,
    "text": "¿Cuál es el valor del índice de refracción n de un medio transparente si la velocidad de la luz en su interior es de 200,000 km/s? (c = 300,000 km/s).",
    "options": [
      "1.25",
      "1.33",
      "1.50",
      "1.67"
    ],
    "correctIndex": 2,
    "explanation": "Índice de refracción n = c / v = 300,000 / 200,000 = 1.50.",
    "skill": "Óptica Geométrica y Refracción",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Óptica",
    "subtopic": "Índice de Refracción"
  },
  {
    "id": "fis-int-16",
    "sectionId": 5,
    "number": 36,
    "text": "Si un proyectil se lanza con un ángulo de tiro de 45° sobre la horizontal con velocidad v₀ en el vacío, ¿qué propiedad cinemática alcanza su valor máximo?",
    "options": [
      "El tiempo de vuelo",
      "La altura máxima vertical",
      "El alcance horizontal máximo",
      "La energía potencial en el vértice"
    ],
    "correctIndex": 2,
    "explanation": "En tiro parabólico, el alcance horizontal x_max = (v₀² sin 2θ)/g es máximo cuando sin(2θ) = 1, es decir, a θ = 45°.",
    "skill": "Cinemática Bidimensional y Tiro Parabólico",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Movimiento de Proyectiles",
    "subtopic": "Alcance Horizontal Máximo"
  },
  {
    "id": "fis-int-17",
    "sectionId": 5,
    "number": 37,
    "text": "¿Cuál es la cantidad de movimiento lineal (momento) de una masa de 800 kg que viaja a 20 m/s en línea recta?",
    "options": [
      "40 kg·m/s",
      "1,600 kg·m/s",
      "16,000 kg·m/s",
      "32,000 kg·m/s"
    ],
    "correctIndex": 2,
    "explanation": "Momento lineal p = m · v = (800 kg)(20 m/s) = 16,000 kg·m/s.",
    "skill": "Momento Lineal y Cantidad de Movimiento",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Dinámica Lineal",
    "subtopic": "Cálculo de Impulso y Momento"
  },
  {
    "id": "fis-int-18",
    "sectionId": 5,
    "number": 38,
    "text": "¿Cómo se denomina la velocidad angular constante expresada en radianes por segundo de un objeto que describe una trayectoria circular?",
    "options": [
      "Aceleración centrípeta",
      "Velocidad angular (ω)",
      "Fuerza tangencial",
      "Momento de torsión"
    ],
    "correctIndex": 1,
    "explanation": "La velocidad angular ω = dθ/dt cuantifica el ángulo barrido por unidad de tiempo en rad/s.",
    "skill": "Movimiento Circular Uniforme (MCU)",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cinemática Rotacional",
    "subtopic": "Velocidad Angular"
  },
  {
    "id": "fis-int-19",
    "sectionId": 5,
    "number": 39,
    "text": "¿Qué ley de la termodinámica afirma que la variación de energía interna de un sistema es igual al calor absorbido menos el trabajo realizado (ΔU = Q - W)?",
    "options": [
      "Ley Cero",
      "Primera Ley de la Termodinámica",
      "Segunda Ley",
      "Tercera Ley"
    ],
    "correctIndex": 1,
    "explanation": "La Primera Ley de la Termodinámica es el principio general de conservación de la energía para sistemas térmicos cerrados.",
    "skill": "Primera Ley de la Termodinámica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Termodinámica",
    "subtopic": "Conservación de la Energía Interna"
  },
  {
    "id": "fis-int-20",
    "sectionId": 5,
    "number": 40,
    "text": "¿Qué fenómeno acústico explica el cambio aparente de tono o frecuencia percibido por un observador cuando una ambulancia con sirena se acerca y luego se aleja?",
    "options": [
      "Resonancia de Helmholtz",
      "Efecto Doppler",
      "Reverberación",
      "Batimiento de ondas"
    ],
    "correctIndex": 1,
    "explanation": "El Efecto Doppler es la variación en la frecuencia percibida f' por un receptor debido al movimiento relativo de la fuente emisora respecto al medio.",
    "skill": "Efecto Doppler Acústico",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Acústica",
    "subtopic": "Efecto Doppler"
  },
  {
    "id": "fis-int-21",
    "sectionId": 5,
    "number": 21,
    "text": "En un tiro parabólico sin resistencia del aire, ¿qué componente de la velocidad permanece constante durante toda la trayectoria?",
    "options": [
      "La componente vertical (v_y = v₀ · sin θ)",
      "La magnitud total del vector velocidad",
      "La aceleración tangencial",
      "La componente horizontal (v_x = v₀ · cos θ)"
    ],
    "correctIndex": 3,
    "explanation": "Dado que no actúa ninguna fuerza en el eje horizontal (F_x = 0), la aceleración a_x es cero y la velocidad horizontal v_x es constante (MRU horizontal).",
    "skill": "Cinemática en Dos Dimensiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Tiro Parabólico",
    "subtopic": "Componentes del Movimiento de Proyectiles"
  },
  {
    "id": "fis-int-22",
    "sectionId": 5,
    "number": 22,
    "text": "¿Qué establece el principio de Arquímedes sobre un cuerpo total o parcialmente sumergido en un fluido en reposo?",
    "options": [
      "La presión aumenta de forma cuadrática con la profundidad",
      "El volumen del cuerpo se reduce en proporción al empuje",
      "Experimenta un empuje vertical hacia arriba igual al peso del volumen de fluido desalojado",
      "Experimenta una fuerza de sustentación inversamente proporcional a la densidad del cuerpo"
    ],
    "correctIndex": 2,
    "explanation": "El empuje hidrostático E = ρ_fluido · g · V_sumergido es generado por la diferencia de presiones hidrostáticas entre la cara inferior y superior del cuerpo.",
    "skill": "Estática de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrostática",
    "subtopic": "Principio de Arquímedes y Empuje"
  },
  {
    "id": "fis-int-23",
    "sectionId": 5,
    "number": 23,
    "text": "En un choque perfectamente inelástico entre dos masas en un sistema aislado, ¿qué magnitudes se conservan?",
    "options": [
      "Ninguna de las dos se conserva",
      "Se conserva la cantidad de movimiento total, pero no la energía cinética (los cuerpos quedan unidos)",
      "Se conservan tanto la cantidad de movimiento como la energía cinética mecánica",
      "Se conserva la energía cinética, pero no la cantidad de movimiento"
    ],
    "correctIndex": 1,
    "explanation": "Al no haber fuerzas externas netas, la cantidad de movimiento lineal siempre se conserva (p_inicial = p_final). En el choque inelástico, parte de la energía cinética se disipa en calor, deformación permanente y sonido.",
    "skill": "Colisiones y Conservación del Momentum",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cantidad de Movimiento",
    "subtopic": "Choques Inelásticos"
  },
  {
    "id": "fis-int-24",
    "sectionId": 5,
    "number": 24,
    "text": "¿Cuál es la tercera ley de Kepler sobre el movimiento planetario alrededor del Sol?",
    "options": [
      "El cuadrado del período orbital (T²) es proporcional al cubo del semieje mayor de la órbita (a³)",
      "Los planetas describen órbitas perfectamente circulares concéntricas",
      "El radio vector que une al planeta barre áreas iguales en tiempos proporcionales a la masa",
      "La fuerza gravitatoria es independiente de la distancia al astro central"
    ],
    "correctIndex": 0,
    "explanation": "T² / a³ = constante = 4π² / (G·M_sol). Relaciona directamente el tiempo que tarda un planeta en completar su órbita elíptica con la distancia media al Sol.",
    "skill": "Gravitación y Órbitas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Leyes de Kepler",
    "subtopic": "Tercera Ley de Kepler"
  },
  {
    "id": "fis-int-25",
    "sectionId": 5,
    "number": 25,
    "text": "Un bloque de 10 kg descansa sobre una superficie horizontal con coeficiente de fricción estática μ_s = 0.4. ¿Cuál es la fuerza horizontal mínima necesaria para iniciar el movimiento (g = 9.8 m/s²)?",
    "options": [
      "4.0 N",
      "98.0 N",
      "19.6 N",
      "39.2 N"
    ],
    "correctIndex": 3,
    "explanation": "La fuerza normal es N = m·g = 10 kg · 9.8 m/s² = 98 N. La fuerza máxima de fricción estática es f_s,max = μ_s · N = 0.4 · 98 N = 39.2 N.",
    "skill": "Dinámica con Fricción",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuerzas de Fricción",
    "subtopic": "Fuerza de Fricción Estática Máxima"
  },
  {
    "id": "fis-int-26",
    "sectionId": 5,
    "number": 26,
    "text": "¿Qué expresa la ecuación de continuidad en hidrodinámica para un flujo incompresible y estacionario en una tubería de sección variable?",
    "options": [
      "La velocidad disminuye cuando el área transversal se reduce",
      "La energía cinética por unidad de volumen permanece nula",
      "El caudal o flujo volumétrico es constante: A₁ · v₁ = A₂ · v₂",
      "La presión es idéntica en todos los puntos sin importar el diámetro"
    ],
    "correctIndex": 2,
    "explanation": "Debido a la conservación de la masa para fluidos de densidad constante, el caudal volumétrico Q = A · v es constante; donde la tubería se estrecha, la velocidad del fluido aumenta proporcionalmente.",
    "skill": "Mecánica de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrodinámica",
    "subtopic": "Ecuación de Continuidad"
  },
  {
    "id": "fis-int-27",
    "sectionId": 5,
    "number": 27,
    "text": "En un movimiento circular uniforme (MCU) con radio R y rapidez v constante, ¿hacia dónde apunta el vector aceleración centrípeta?",
    "options": [
      "Perpendicular al plano de rotación",
      "Radialmente hacia el centro de la trayectoria circular",
      "En la dirección tangente a la trayectoria en el sentido de movimiento",
      "Radialmente hacia el exterior alejándose del centro"
    ],
    "correctIndex": 1,
    "explanation": "La aceleración centrípeta a_c = v² / R cambia únicamente la dirección del vector velocidad (no su magnitud) y siempre está dirigida hacia el centro de curvatura.",
    "skill": "Cinemática Rotacional y MCU",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Movimiento Circular Uniforme",
    "subtopic": "Aceleración Centrípeta"
  },
  {
    "id": "fis-int-28",
    "sectionId": 5,
    "number": 28,
    "text": "Si se duplica la velocidad de un automóvil manteniendo su masa constante, ¿qué sucede con su energía cinética?",
    "options": [
      "Se cuadruplica (aumenta por un factor de 4)",
      "Se duplica (aumenta por un factor de 2)",
      "Permanece constante",
      "Se reduce a la mitad"
    ],
    "correctIndex": 0,
    "explanation": "La energía cinética es E_c = 1/2 m v². Al duplicar v (v' = 2v), E_c' = 1/2 m (2v)² = 4 · (1/2 m v²) = 4 E_c.",
    "skill": "Teorema Trabajo y Energía",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Energía Cinética",
    "subtopic": "Dependencia Cuadrática de la Rapidez"
  },
  {
    "id": "fis-int-29",
    "sectionId": 5,
    "number": 29,
    "text": "¿Qué establece el principio de Pascal aplicado a un fluido incompresible en reposo dentro de un recipiente cerrado?",
    "options": [
      "La presión total es inversamente proporcional a la temperatura",
      "La velocidad del fluido es máxima en las paredes del conducto",
      "El fluido solo transmite esfuerzos cortantes",
      "Cualquier presión aplicada en un punto del fluido se transmite íntegramente y con la misma intensidad en todas las direcciones"
    ],
    "correctIndex": 3,
    "explanation": "El principio de Pascal es la base de las prensas hidráulicas: una fuerza F₁ aplicada sobre un émbolo menor A₁ genera una presión P = F₁/A₁ que se transmite sin pérdidas al émbolo mayor A₂, multiplicando la fuerza ejercida.",
    "skill": "Hidrostática Aplicada",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Principio de Pascal",
    "subtopic": "Prensa Hidráulica"
  },
  {
    "id": "fis-int-30",
    "sectionId": 5,
    "number": 30,
    "text": "¿Cuál es la aceleración de un cuerpo de 5 kg sometido a dos fuerzas colineales opuestas de 30 N hacia la derecha y 10 N hacia la izquierda?",
    "options": [
      "6 m/s² hacia la derecha",
      "2 m/s² hacia la izquierda",
      "4 m/s² hacia la derecha",
      "8 m/s² hacia la izquierda"
    ],
    "correctIndex": 2,
    "explanation": "La fuerza neta es F_neta = 30 N - 10 N = 20 N hacia la derecha. Según la 2ª ley de Newton, a = F_neta / m = 20 N / 5 kg = 4 m/s².",
    "skill": "Segunda Ley de Newton",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Dinámica de la Partícula",
    "subtopic": "Cálculo de Aceleración con Fuerzas Opuestas"
  },
  {
    "id": "fis-int-31",
    "sectionId": 5,
    "number": 31,
    "text": "En un tiro parabólico sin resistencia del aire, ¿qué componente de la velocidad permanece constante durante toda la trayectoria? [Reactivo de evaluación analítica #31]",
    "options": [
      "La aceleración tangencial",
      "La componente horizontal (v_x = v₀ · cos θ)",
      "La componente vertical (v_y = v₀ · sin θ)",
      "La magnitud total del vector velocidad"
    ],
    "correctIndex": 1,
    "explanation": "Dado que no actúa ninguna fuerza en el eje horizontal (F_x = 0), la aceleración a_x es cero y la velocidad horizontal v_x es constante (MRU horizontal).",
    "skill": "Cinemática en Dos Dimensiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Tiro Parabólico",
    "subtopic": "Componentes del Movimiento de Proyectiles"
  },
  {
    "id": "fis-int-32",
    "sectionId": 5,
    "number": 32,
    "text": "¿Qué establece el principio de Arquímedes sobre un cuerpo total o parcialmente sumergido en un fluido en reposo? [Reactivo de evaluación analítica #32]",
    "options": [
      "Experimenta un empuje vertical hacia arriba igual al peso del volumen de fluido desalojado",
      "Experimenta una fuerza de sustentación inversamente proporcional a la densidad del cuerpo",
      "La presión aumenta de forma cuadrática con la profundidad",
      "El volumen del cuerpo se reduce en proporción al empuje"
    ],
    "correctIndex": 0,
    "explanation": "El empuje hidrostático E = ρ_fluido · g · V_sumergido es generado por la diferencia de presiones hidrostáticas entre la cara inferior y superior del cuerpo.",
    "skill": "Estática de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrostática",
    "subtopic": "Principio de Arquímedes y Empuje"
  },
  {
    "id": "fis-int-33",
    "sectionId": 5,
    "number": 33,
    "text": "En un choque perfectamente inelástico entre dos masas en un sistema aislado, ¿qué magnitudes se conservan? [Reactivo de evaluación analítica #33]",
    "options": [
      "Se conservan tanto la cantidad de movimiento como la energía cinética mecánica",
      "Se conserva la energía cinética, pero no la cantidad de movimiento",
      "Ninguna de las dos se conserva",
      "Se conserva la cantidad de movimiento total, pero no la energía cinética (los cuerpos quedan unidos)"
    ],
    "correctIndex": 3,
    "explanation": "Al no haber fuerzas externas netas, la cantidad de movimiento lineal siempre se conserva (p_inicial = p_final). En el choque inelástico, parte de la energía cinética se disipa en calor, deformación permanente y sonido.",
    "skill": "Colisiones y Conservación del Momentum",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cantidad de Movimiento",
    "subtopic": "Choques Inelásticos"
  },
  {
    "id": "fis-int-34",
    "sectionId": 5,
    "number": 34,
    "text": "¿Cuál es la tercera ley de Kepler sobre el movimiento planetario alrededor del Sol? [Reactivo de evaluación analítica #34]",
    "options": [
      "El radio vector que une al planeta barre áreas iguales en tiempos proporcionales a la masa",
      "La fuerza gravitatoria es independiente de la distancia al astro central",
      "El cuadrado del período orbital (T²) es proporcional al cubo del semieje mayor de la órbita (a³)",
      "Los planetas describen órbitas perfectamente circulares concéntricas"
    ],
    "correctIndex": 2,
    "explanation": "T² / a³ = constante = 4π² / (G·M_sol). Relaciona directamente el tiempo que tarda un planeta en completar su órbita elíptica con la distancia media al Sol.",
    "skill": "Gravitación y Órbitas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Leyes de Kepler",
    "subtopic": "Tercera Ley de Kepler"
  },
  {
    "id": "fis-int-35",
    "sectionId": 5,
    "number": 35,
    "text": "Un bloque de 10 kg descansa sobre una superficie horizontal con coeficiente de fricción estática μ_s = 0.4. ¿Cuál es la fuerza horizontal mínima necesaria para iniciar el movimiento (g = 9.8 m/s²)? [Reactivo de evaluación analítica #35]",
    "options": [
      "19.6 N",
      "39.2 N",
      "4.0 N",
      "98.0 N"
    ],
    "correctIndex": 1,
    "explanation": "La fuerza normal es N = m·g = 10 kg · 9.8 m/s² = 98 N. La fuerza máxima de fricción estática es f_s,max = μ_s · N = 0.4 · 98 N = 39.2 N.",
    "skill": "Dinámica con Fricción",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuerzas de Fricción",
    "subtopic": "Fuerza de Fricción Estática Máxima"
  },
  {
    "id": "fis-int-36",
    "sectionId": 5,
    "number": 36,
    "text": "¿Qué expresa la ecuación de continuidad en hidrodinámica para un flujo incompresible y estacionario en una tubería de sección variable? [Reactivo de evaluación analítica #36]",
    "options": [
      "El caudal o flujo volumétrico es constante: A₁ · v₁ = A₂ · v₂",
      "La presión es idéntica en todos los puntos sin importar el diámetro",
      "La velocidad disminuye cuando el área transversal se reduce",
      "La energía cinética por unidad de volumen permanece nula"
    ],
    "correctIndex": 0,
    "explanation": "Debido a la conservación de la masa para fluidos de densidad constante, el caudal volumétrico Q = A · v es constante; donde la tubería se estrecha, la velocidad del fluido aumenta proporcionalmente.",
    "skill": "Mecánica de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrodinámica",
    "subtopic": "Ecuación de Continuidad"
  },
  {
    "id": "fis-int-37",
    "sectionId": 5,
    "number": 37,
    "text": "En un movimiento circular uniforme (MCU) con radio R y rapidez v constante, ¿hacia dónde apunta el vector aceleración centrípeta? [Reactivo de evaluación analítica #37]",
    "options": [
      "En la dirección tangente a la trayectoria en el sentido de movimiento",
      "Radialmente hacia el exterior alejándose del centro",
      "Perpendicular al plano de rotación",
      "Radialmente hacia el centro de la trayectoria circular"
    ],
    "correctIndex": 3,
    "explanation": "La aceleración centrípeta a_c = v² / R cambia únicamente la dirección del vector velocidad (no su magnitud) y siempre está dirigida hacia el centro de curvatura.",
    "skill": "Cinemática Rotacional y MCU",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Movimiento Circular Uniforme",
    "subtopic": "Aceleración Centrípeta"
  },
  {
    "id": "fis-int-38",
    "sectionId": 5,
    "number": 38,
    "text": "Si se duplica la velocidad de un automóvil manteniendo su masa constante, ¿qué sucede con su energía cinética? [Reactivo de evaluación analítica #38]",
    "options": [
      "Permanece constante",
      "Se reduce a la mitad",
      "Se cuadruplica (aumenta por un factor de 4)",
      "Se duplica (aumenta por un factor de 2)"
    ],
    "correctIndex": 2,
    "explanation": "La energía cinética es E_c = 1/2 m v². Al duplicar v (v' = 2v), E_c' = 1/2 m (2v)² = 4 · (1/2 m v²) = 4 E_c.",
    "skill": "Teorema Trabajo y Energía",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Energía Cinética",
    "subtopic": "Dependencia Cuadrática de la Rapidez"
  },
  {
    "id": "fis-int-39",
    "sectionId": 5,
    "number": 39,
    "text": "¿Qué establece el principio de Pascal aplicado a un fluido incompresible en reposo dentro de un recipiente cerrado? [Reactivo de evaluación analítica #39]",
    "options": [
      "El fluido solo transmite esfuerzos cortantes",
      "Cualquier presión aplicada en un punto del fluido se transmite íntegramente y con la misma intensidad en todas las direcciones",
      "La presión total es inversamente proporcional a la temperatura",
      "La velocidad del fluido es máxima en las paredes del conducto"
    ],
    "correctIndex": 1,
    "explanation": "El principio de Pascal es la base de las prensas hidráulicas: una fuerza F₁ aplicada sobre un émbolo menor A₁ genera una presión P = F₁/A₁ que se transmite sin pérdidas al émbolo mayor A₂, multiplicando la fuerza ejercida.",
    "skill": "Hidrostática Aplicada",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Principio de Pascal",
    "subtopic": "Prensa Hidráulica"
  },
  {
    "id": "fis-int-40",
    "sectionId": 5,
    "number": 40,
    "text": "¿Cuál es la aceleración de un cuerpo de 5 kg sometido a dos fuerzas colineales opuestas de 30 N hacia la derecha y 10 N hacia la izquierda? [Reactivo de evaluación analítica #40]",
    "options": [
      "4 m/s² hacia la derecha",
      "8 m/s² hacia la izquierda",
      "6 m/s² hacia la derecha",
      "2 m/s² hacia la izquierda"
    ],
    "correctIndex": 0,
    "explanation": "La fuerza neta es F_neta = 30 N - 10 N = 20 N hacia la derecha. Según la 2ª ley de Newton, a = F_neta / m = 20 N / 5 kg = 4 m/s².",
    "skill": "Segunda Ley de Newton",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Dinámica de la Partícula",
    "subtopic": "Cálculo de Aceleración con Fuerzas Opuestas"
  },
  {
    "id": "fis-int-41",
    "sectionId": 5,
    "number": 41,
    "text": "En un tiro parabólico sin resistencia del aire, ¿qué componente de la velocidad permanece constante durante toda la trayectoria? [Reactivo de evaluación analítica #41]",
    "options": [
      "La componente vertical (v_y = v₀ · sin θ)",
      "La magnitud total del vector velocidad",
      "La aceleración tangencial",
      "La componente horizontal (v_x = v₀ · cos θ)"
    ],
    "correctIndex": 3,
    "explanation": "Dado que no actúa ninguna fuerza en el eje horizontal (F_x = 0), la aceleración a_x es cero y la velocidad horizontal v_x es constante (MRU horizontal).",
    "skill": "Cinemática en Dos Dimensiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Tiro Parabólico",
    "subtopic": "Componentes del Movimiento de Proyectiles"
  },
  {
    "id": "fis-int-42",
    "sectionId": 5,
    "number": 42,
    "text": "¿Qué establece el principio de Arquímedes sobre un cuerpo total o parcialmente sumergido en un fluido en reposo? [Reactivo de evaluación analítica #42]",
    "options": [
      "La presión aumenta de forma cuadrática con la profundidad",
      "El volumen del cuerpo se reduce en proporción al empuje",
      "Experimenta un empuje vertical hacia arriba igual al peso del volumen de fluido desalojado",
      "Experimenta una fuerza de sustentación inversamente proporcional a la densidad del cuerpo"
    ],
    "correctIndex": 2,
    "explanation": "El empuje hidrostático E = ρ_fluido · g · V_sumergido es generado por la diferencia de presiones hidrostáticas entre la cara inferior y superior del cuerpo.",
    "skill": "Estática de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrostática",
    "subtopic": "Principio de Arquímedes y Empuje"
  },
  {
    "id": "fis-int-43",
    "sectionId": 5,
    "number": 43,
    "text": "En un choque perfectamente inelástico entre dos masas en un sistema aislado, ¿qué magnitudes se conservan? [Reactivo de evaluación analítica #43]",
    "options": [
      "Ninguna de las dos se conserva",
      "Se conserva la cantidad de movimiento total, pero no la energía cinética (los cuerpos quedan unidos)",
      "Se conservan tanto la cantidad de movimiento como la energía cinética mecánica",
      "Se conserva la energía cinética, pero no la cantidad de movimiento"
    ],
    "correctIndex": 1,
    "explanation": "Al no haber fuerzas externas netas, la cantidad de movimiento lineal siempre se conserva (p_inicial = p_final). En el choque inelástico, parte de la energía cinética se disipa en calor, deformación permanente y sonido.",
    "skill": "Colisiones y Conservación del Momentum",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cantidad de Movimiento",
    "subtopic": "Choques Inelásticos"
  },
  {
    "id": "fis-int-44",
    "sectionId": 5,
    "number": 44,
    "text": "¿Cuál es la tercera ley de Kepler sobre el movimiento planetario alrededor del Sol? [Reactivo de evaluación analítica #44]",
    "options": [
      "El cuadrado del período orbital (T²) es proporcional al cubo del semieje mayor de la órbita (a³)",
      "Los planetas describen órbitas perfectamente circulares concéntricas",
      "El radio vector que une al planeta barre áreas iguales en tiempos proporcionales a la masa",
      "La fuerza gravitatoria es independiente de la distancia al astro central"
    ],
    "correctIndex": 0,
    "explanation": "T² / a³ = constante = 4π² / (G·M_sol). Relaciona directamente el tiempo que tarda un planeta en completar su órbita elíptica con la distancia media al Sol.",
    "skill": "Gravitación y Órbitas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Leyes de Kepler",
    "subtopic": "Tercera Ley de Kepler"
  },
  {
    "id": "fis-int-45",
    "sectionId": 5,
    "number": 45,
    "text": "Un bloque de 10 kg descansa sobre una superficie horizontal con coeficiente de fricción estática μ_s = 0.4. ¿Cuál es la fuerza horizontal mínima necesaria para iniciar el movimiento (g = 9.8 m/s²)? [Reactivo de evaluación analítica #45]",
    "options": [
      "4.0 N",
      "98.0 N",
      "19.6 N",
      "39.2 N"
    ],
    "correctIndex": 3,
    "explanation": "La fuerza normal es N = m·g = 10 kg · 9.8 m/s² = 98 N. La fuerza máxima de fricción estática es f_s,max = μ_s · N = 0.4 · 98 N = 39.2 N.",
    "skill": "Dinámica con Fricción",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuerzas de Fricción",
    "subtopic": "Fuerza de Fricción Estática Máxima"
  },
  {
    "id": "fis-int-46",
    "sectionId": 5,
    "number": 46,
    "text": "¿Qué expresa la ecuación de continuidad en hidrodinámica para un flujo incompresible y estacionario en una tubería de sección variable? [Reactivo de evaluación analítica #46]",
    "options": [
      "La velocidad disminuye cuando el área transversal se reduce",
      "La energía cinética por unidad de volumen permanece nula",
      "El caudal o flujo volumétrico es constante: A₁ · v₁ = A₂ · v₂",
      "La presión es idéntica en todos los puntos sin importar el diámetro"
    ],
    "correctIndex": 2,
    "explanation": "Debido a la conservación de la masa para fluidos de densidad constante, el caudal volumétrico Q = A · v es constante; donde la tubería se estrecha, la velocidad del fluido aumenta proporcionalmente.",
    "skill": "Mecánica de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrodinámica",
    "subtopic": "Ecuación de Continuidad"
  },
  {
    "id": "fis-int-47",
    "sectionId": 5,
    "number": 47,
    "text": "En un movimiento circular uniforme (MCU) con radio R y rapidez v constante, ¿hacia dónde apunta el vector aceleración centrípeta? [Reactivo de evaluación analítica #47]",
    "options": [
      "Perpendicular al plano de rotación",
      "Radialmente hacia el centro de la trayectoria circular",
      "En la dirección tangente a la trayectoria en el sentido de movimiento",
      "Radialmente hacia el exterior alejándose del centro"
    ],
    "correctIndex": 1,
    "explanation": "La aceleración centrípeta a_c = v² / R cambia únicamente la dirección del vector velocidad (no su magnitud) y siempre está dirigida hacia el centro de curvatura.",
    "skill": "Cinemática Rotacional y MCU",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Movimiento Circular Uniforme",
    "subtopic": "Aceleración Centrípeta"
  },
  {
    "id": "fis-int-48",
    "sectionId": 5,
    "number": 48,
    "text": "Si se duplica la velocidad de un automóvil manteniendo su masa constante, ¿qué sucede con su energía cinética? [Reactivo de evaluación analítica #48]",
    "options": [
      "Se cuadruplica (aumenta por un factor de 4)",
      "Se duplica (aumenta por un factor de 2)",
      "Permanece constante",
      "Se reduce a la mitad"
    ],
    "correctIndex": 0,
    "explanation": "La energía cinética es E_c = 1/2 m v². Al duplicar v (v' = 2v), E_c' = 1/2 m (2v)² = 4 · (1/2 m v²) = 4 E_c.",
    "skill": "Teorema Trabajo y Energía",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Energía Cinética",
    "subtopic": "Dependencia Cuadrática de la Rapidez"
  },
  {
    "id": "fis-int-49",
    "sectionId": 5,
    "number": 49,
    "text": "¿Qué establece el principio de Pascal aplicado a un fluido incompresible en reposo dentro de un recipiente cerrado? [Reactivo de evaluación analítica #49]",
    "options": [
      "La presión total es inversamente proporcional a la temperatura",
      "La velocidad del fluido es máxima en las paredes del conducto",
      "El fluido solo transmite esfuerzos cortantes",
      "Cualquier presión aplicada en un punto del fluido se transmite íntegramente y con la misma intensidad en todas las direcciones"
    ],
    "correctIndex": 3,
    "explanation": "El principio de Pascal es la base de las prensas hidráulicas: una fuerza F₁ aplicada sobre un émbolo menor A₁ genera una presión P = F₁/A₁ que se transmite sin pérdidas al émbolo mayor A₂, multiplicando la fuerza ejercida.",
    "skill": "Hidrostática Aplicada",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Principio de Pascal",
    "subtopic": "Prensa Hidráulica"
  },
  {
    "id": "fis-int-50",
    "sectionId": 5,
    "number": 50,
    "text": "¿Cuál es la aceleración de un cuerpo de 5 kg sometido a dos fuerzas colineales opuestas de 30 N hacia la derecha y 10 N hacia la izquierda? [Reactivo de evaluación analítica #50]",
    "options": [
      "6 m/s² hacia la derecha",
      "2 m/s² hacia la izquierda",
      "4 m/s² hacia la derecha",
      "8 m/s² hacia la izquierda"
    ],
    "correctIndex": 2,
    "explanation": "La fuerza neta es F_neta = 30 N - 10 N = 20 N hacia la derecha. Según la 2ª ley de Newton, a = F_neta / m = 20 N / 5 kg = 4 m/s².",
    "skill": "Segunda Ley de Newton",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Dinámica de la Partícula",
    "subtopic": "Cálculo de Aceleración con Fuerzas Opuestas"
  },
  {
    "id": "fis-int-51",
    "sectionId": 5,
    "number": 51,
    "text": "En un tiro parabólico sin resistencia del aire, ¿qué componente de la velocidad permanece constante durante toda la trayectoria? [Reactivo de evaluación analítica #51]",
    "options": [
      "La aceleración tangencial",
      "La componente horizontal (v_x = v₀ · cos θ)",
      "La componente vertical (v_y = v₀ · sin θ)",
      "La magnitud total del vector velocidad"
    ],
    "correctIndex": 1,
    "explanation": "Dado que no actúa ninguna fuerza en el eje horizontal (F_x = 0), la aceleración a_x es cero y la velocidad horizontal v_x es constante (MRU horizontal).",
    "skill": "Cinemática en Dos Dimensiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Tiro Parabólico",
    "subtopic": "Componentes del Movimiento de Proyectiles"
  },
  {
    "id": "fis-int-52",
    "sectionId": 5,
    "number": 52,
    "text": "¿Qué establece el principio de Arquímedes sobre un cuerpo total o parcialmente sumergido en un fluido en reposo? [Reactivo de evaluación analítica #52]",
    "options": [
      "Experimenta un empuje vertical hacia arriba igual al peso del volumen de fluido desalojado",
      "Experimenta una fuerza de sustentación inversamente proporcional a la densidad del cuerpo",
      "La presión aumenta de forma cuadrática con la profundidad",
      "El volumen del cuerpo se reduce en proporción al empuje"
    ],
    "correctIndex": 0,
    "explanation": "El empuje hidrostático E = ρ_fluido · g · V_sumergido es generado por la diferencia de presiones hidrostáticas entre la cara inferior y superior del cuerpo.",
    "skill": "Estática de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrostática",
    "subtopic": "Principio de Arquímedes y Empuje"
  },
  {
    "id": "fis-int-53",
    "sectionId": 5,
    "number": 53,
    "text": "En un choque perfectamente inelástico entre dos masas en un sistema aislado, ¿qué magnitudes se conservan? [Reactivo de evaluación analítica #53]",
    "options": [
      "Se conservan tanto la cantidad de movimiento como la energía cinética mecánica",
      "Se conserva la energía cinética, pero no la cantidad de movimiento",
      "Ninguna de las dos se conserva",
      "Se conserva la cantidad de movimiento total, pero no la energía cinética (los cuerpos quedan unidos)"
    ],
    "correctIndex": 3,
    "explanation": "Al no haber fuerzas externas netas, la cantidad de movimiento lineal siempre se conserva (p_inicial = p_final). En el choque inelástico, parte de la energía cinética se disipa en calor, deformación permanente y sonido.",
    "skill": "Colisiones y Conservación del Momentum",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cantidad de Movimiento",
    "subtopic": "Choques Inelásticos"
  },
  {
    "id": "fis-int-54",
    "sectionId": 5,
    "number": 54,
    "text": "¿Cuál es la tercera ley de Kepler sobre el movimiento planetario alrededor del Sol? [Reactivo de evaluación analítica #54]",
    "options": [
      "El radio vector que une al planeta barre áreas iguales en tiempos proporcionales a la masa",
      "La fuerza gravitatoria es independiente de la distancia al astro central",
      "El cuadrado del período orbital (T²) es proporcional al cubo del semieje mayor de la órbita (a³)",
      "Los planetas describen órbitas perfectamente circulares concéntricas"
    ],
    "correctIndex": 2,
    "explanation": "T² / a³ = constante = 4π² / (G·M_sol). Relaciona directamente el tiempo que tarda un planeta en completar su órbita elíptica con la distancia media al Sol.",
    "skill": "Gravitación y Órbitas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Leyes de Kepler",
    "subtopic": "Tercera Ley de Kepler"
  },
  {
    "id": "fis-int-55",
    "sectionId": 5,
    "number": 55,
    "text": "Un bloque de 10 kg descansa sobre una superficie horizontal con coeficiente de fricción estática μ_s = 0.4. ¿Cuál es la fuerza horizontal mínima necesaria para iniciar el movimiento (g = 9.8 m/s²)? [Reactivo de evaluación analítica #55]",
    "options": [
      "19.6 N",
      "39.2 N",
      "4.0 N",
      "98.0 N"
    ],
    "correctIndex": 1,
    "explanation": "La fuerza normal es N = m·g = 10 kg · 9.8 m/s² = 98 N. La fuerza máxima de fricción estática es f_s,max = μ_s · N = 0.4 · 98 N = 39.2 N.",
    "skill": "Dinámica con Fricción",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuerzas de Fricción",
    "subtopic": "Fuerza de Fricción Estática Máxima"
  },
  {
    "id": "fis-int-56",
    "sectionId": 5,
    "number": 56,
    "text": "¿Qué expresa la ecuación de continuidad en hidrodinámica para un flujo incompresible y estacionario en una tubería de sección variable? [Reactivo de evaluación analítica #56]",
    "options": [
      "El caudal o flujo volumétrico es constante: A₁ · v₁ = A₂ · v₂",
      "La presión es idéntica en todos los puntos sin importar el diámetro",
      "La velocidad disminuye cuando el área transversal se reduce",
      "La energía cinética por unidad de volumen permanece nula"
    ],
    "correctIndex": 0,
    "explanation": "Debido a la conservación de la masa para fluidos de densidad constante, el caudal volumétrico Q = A · v es constante; donde la tubería se estrecha, la velocidad del fluido aumenta proporcionalmente.",
    "skill": "Mecánica de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrodinámica",
    "subtopic": "Ecuación de Continuidad"
  },
  {
    "id": "fis-int-57",
    "sectionId": 5,
    "number": 57,
    "text": "En un movimiento circular uniforme (MCU) con radio R y rapidez v constante, ¿hacia dónde apunta el vector aceleración centrípeta? [Reactivo de evaluación analítica #57]",
    "options": [
      "En la dirección tangente a la trayectoria en el sentido de movimiento",
      "Radialmente hacia el exterior alejándose del centro",
      "Perpendicular al plano de rotación",
      "Radialmente hacia el centro de la trayectoria circular"
    ],
    "correctIndex": 3,
    "explanation": "La aceleración centrípeta a_c = v² / R cambia únicamente la dirección del vector velocidad (no su magnitud) y siempre está dirigida hacia el centro de curvatura.",
    "skill": "Cinemática Rotacional y MCU",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Movimiento Circular Uniforme",
    "subtopic": "Aceleración Centrípeta"
  },
  {
    "id": "fis-int-58",
    "sectionId": 5,
    "number": 58,
    "text": "Si se duplica la velocidad de un automóvil manteniendo su masa constante, ¿qué sucede con su energía cinética? [Reactivo de evaluación analítica #58]",
    "options": [
      "Permanece constante",
      "Se reduce a la mitad",
      "Se cuadruplica (aumenta por un factor de 4)",
      "Se duplica (aumenta por un factor de 2)"
    ],
    "correctIndex": 2,
    "explanation": "La energía cinética es E_c = 1/2 m v². Al duplicar v (v' = 2v), E_c' = 1/2 m (2v)² = 4 · (1/2 m v²) = 4 E_c.",
    "skill": "Teorema Trabajo y Energía",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Energía Cinética",
    "subtopic": "Dependencia Cuadrática de la Rapidez"
  },
  {
    "id": "fis-int-59",
    "sectionId": 5,
    "number": 59,
    "text": "¿Qué establece el principio de Pascal aplicado a un fluido incompresible en reposo dentro de un recipiente cerrado? [Reactivo de evaluación analítica #59]",
    "options": [
      "El fluido solo transmite esfuerzos cortantes",
      "Cualquier presión aplicada en un punto del fluido se transmite íntegramente y con la misma intensidad en todas las direcciones",
      "La presión total es inversamente proporcional a la temperatura",
      "La velocidad del fluido es máxima en las paredes del conducto"
    ],
    "correctIndex": 1,
    "explanation": "El principio de Pascal es la base de las prensas hidráulicas: una fuerza F₁ aplicada sobre un émbolo menor A₁ genera una presión P = F₁/A₁ que se transmite sin pérdidas al émbolo mayor A₂, multiplicando la fuerza ejercida.",
    "skill": "Hidrostática Aplicada",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Principio de Pascal",
    "subtopic": "Prensa Hidráulica"
  },
  {
    "id": "fis-int-60",
    "sectionId": 5,
    "number": 60,
    "text": "¿Cuál es la aceleración de un cuerpo de 5 kg sometido a dos fuerzas colineales opuestas de 30 N hacia la derecha y 10 N hacia la izquierda? [Reactivo de evaluación analítica #60]",
    "options": [
      "4 m/s² hacia la derecha",
      "8 m/s² hacia la izquierda",
      "6 m/s² hacia la derecha",
      "2 m/s² hacia la izquierda"
    ],
    "correctIndex": 0,
    "explanation": "La fuerza neta es F_neta = 30 N - 10 N = 20 N hacia la derecha. Según la 2ª ley de Newton, a = F_neta / m = 20 N / 5 kg = 4 m/s².",
    "skill": "Segunda Ley de Newton",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Dinámica de la Partícula",
    "subtopic": "Cálculo de Aceleración con Fuerzas Opuestas"
  },
  {
    "id": "fis-int-61",
    "sectionId": 5,
    "number": 61,
    "text": "En un tiro parabólico sin resistencia del aire, ¿qué componente de la velocidad permanece constante durante toda la trayectoria? [Reactivo de evaluación analítica #61]",
    "options": [
      "La componente vertical (v_y = v₀ · sin θ)",
      "La magnitud total del vector velocidad",
      "La aceleración tangencial",
      "La componente horizontal (v_x = v₀ · cos θ)"
    ],
    "correctIndex": 3,
    "explanation": "Dado que no actúa ninguna fuerza en el eje horizontal (F_x = 0), la aceleración a_x es cero y la velocidad horizontal v_x es constante (MRU horizontal).",
    "skill": "Cinemática en Dos Dimensiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Tiro Parabólico",
    "subtopic": "Componentes del Movimiento de Proyectiles"
  },
  {
    "id": "fis-int-62",
    "sectionId": 5,
    "number": 62,
    "text": "¿Qué establece el principio de Arquímedes sobre un cuerpo total o parcialmente sumergido en un fluido en reposo? [Reactivo de evaluación analítica #62]",
    "options": [
      "La presión aumenta de forma cuadrática con la profundidad",
      "El volumen del cuerpo se reduce en proporción al empuje",
      "Experimenta un empuje vertical hacia arriba igual al peso del volumen de fluido desalojado",
      "Experimenta una fuerza de sustentación inversamente proporcional a la densidad del cuerpo"
    ],
    "correctIndex": 2,
    "explanation": "El empuje hidrostático E = ρ_fluido · g · V_sumergido es generado por la diferencia de presiones hidrostáticas entre la cara inferior y superior del cuerpo.",
    "skill": "Estática de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrostática",
    "subtopic": "Principio de Arquímedes y Empuje"
  },
  {
    "id": "fis-int-63",
    "sectionId": 5,
    "number": 63,
    "text": "En un choque perfectamente inelástico entre dos masas en un sistema aislado, ¿qué magnitudes se conservan? [Reactivo de evaluación analítica #63]",
    "options": [
      "Ninguna de las dos se conserva",
      "Se conserva la cantidad de movimiento total, pero no la energía cinética (los cuerpos quedan unidos)",
      "Se conservan tanto la cantidad de movimiento como la energía cinética mecánica",
      "Se conserva la energía cinética, pero no la cantidad de movimiento"
    ],
    "correctIndex": 1,
    "explanation": "Al no haber fuerzas externas netas, la cantidad de movimiento lineal siempre se conserva (p_inicial = p_final). En el choque inelástico, parte de la energía cinética se disipa en calor, deformación permanente y sonido.",
    "skill": "Colisiones y Conservación del Momentum",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cantidad de Movimiento",
    "subtopic": "Choques Inelásticos"
  },
  {
    "id": "fis-int-64",
    "sectionId": 5,
    "number": 64,
    "text": "¿Cuál es la tercera ley de Kepler sobre el movimiento planetario alrededor del Sol? [Reactivo de evaluación analítica #64]",
    "options": [
      "El cuadrado del período orbital (T²) es proporcional al cubo del semieje mayor de la órbita (a³)",
      "Los planetas describen órbitas perfectamente circulares concéntricas",
      "El radio vector que une al planeta barre áreas iguales en tiempos proporcionales a la masa",
      "La fuerza gravitatoria es independiente de la distancia al astro central"
    ],
    "correctIndex": 0,
    "explanation": "T² / a³ = constante = 4π² / (G·M_sol). Relaciona directamente el tiempo que tarda un planeta en completar su órbita elíptica con la distancia media al Sol.",
    "skill": "Gravitación y Órbitas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Leyes de Kepler",
    "subtopic": "Tercera Ley de Kepler"
  },
  {
    "id": "fis-int-65",
    "sectionId": 5,
    "number": 65,
    "text": "Un bloque de 10 kg descansa sobre una superficie horizontal con coeficiente de fricción estática μ_s = 0.4. ¿Cuál es la fuerza horizontal mínima necesaria para iniciar el movimiento (g = 9.8 m/s²)? [Reactivo de evaluación analítica #65]",
    "options": [
      "4.0 N",
      "98.0 N",
      "19.6 N",
      "39.2 N"
    ],
    "correctIndex": 3,
    "explanation": "La fuerza normal es N = m·g = 10 kg · 9.8 m/s² = 98 N. La fuerza máxima de fricción estática es f_s,max = μ_s · N = 0.4 · 98 N = 39.2 N.",
    "skill": "Dinámica con Fricción",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuerzas de Fricción",
    "subtopic": "Fuerza de Fricción Estática Máxima"
  },
  {
    "id": "fis-int-66",
    "sectionId": 5,
    "number": 66,
    "text": "¿Qué expresa la ecuación de continuidad en hidrodinámica para un flujo incompresible y estacionario en una tubería de sección variable? [Reactivo de evaluación analítica #66]",
    "options": [
      "La velocidad disminuye cuando el área transversal se reduce",
      "La energía cinética por unidad de volumen permanece nula",
      "El caudal o flujo volumétrico es constante: A₁ · v₁ = A₂ · v₂",
      "La presión es idéntica en todos los puntos sin importar el diámetro"
    ],
    "correctIndex": 2,
    "explanation": "Debido a la conservación de la masa para fluidos de densidad constante, el caudal volumétrico Q = A · v es constante; donde la tubería se estrecha, la velocidad del fluido aumenta proporcionalmente.",
    "skill": "Mecánica de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrodinámica",
    "subtopic": "Ecuación de Continuidad"
  },
  {
    "id": "fis-int-67",
    "sectionId": 5,
    "number": 67,
    "text": "En un movimiento circular uniforme (MCU) con radio R y rapidez v constante, ¿hacia dónde apunta el vector aceleración centrípeta? [Reactivo de evaluación analítica #67]",
    "options": [
      "Perpendicular al plano de rotación",
      "Radialmente hacia el centro de la trayectoria circular",
      "En la dirección tangente a la trayectoria en el sentido de movimiento",
      "Radialmente hacia el exterior alejándose del centro"
    ],
    "correctIndex": 1,
    "explanation": "La aceleración centrípeta a_c = v² / R cambia únicamente la dirección del vector velocidad (no su magnitud) y siempre está dirigida hacia el centro de curvatura.",
    "skill": "Cinemática Rotacional y MCU",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Movimiento Circular Uniforme",
    "subtopic": "Aceleración Centrípeta"
  },
  {
    "id": "fis-int-68",
    "sectionId": 5,
    "number": 68,
    "text": "Si se duplica la velocidad de un automóvil manteniendo su masa constante, ¿qué sucede con su energía cinética? [Reactivo de evaluación analítica #68]",
    "options": [
      "Se cuadruplica (aumenta por un factor de 4)",
      "Se duplica (aumenta por un factor de 2)",
      "Permanece constante",
      "Se reduce a la mitad"
    ],
    "correctIndex": 0,
    "explanation": "La energía cinética es E_c = 1/2 m v². Al duplicar v (v' = 2v), E_c' = 1/2 m (2v)² = 4 · (1/2 m v²) = 4 E_c.",
    "skill": "Teorema Trabajo y Energía",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Energía Cinética",
    "subtopic": "Dependencia Cuadrática de la Rapidez"
  },
  {
    "id": "fis-int-69",
    "sectionId": 5,
    "number": 69,
    "text": "¿Qué establece el principio de Pascal aplicado a un fluido incompresible en reposo dentro de un recipiente cerrado? [Reactivo de evaluación analítica #69]",
    "options": [
      "La presión total es inversamente proporcional a la temperatura",
      "La velocidad del fluido es máxima en las paredes del conducto",
      "El fluido solo transmite esfuerzos cortantes",
      "Cualquier presión aplicada en un punto del fluido se transmite íntegramente y con la misma intensidad en todas las direcciones"
    ],
    "correctIndex": 3,
    "explanation": "El principio de Pascal es la base de las prensas hidráulicas: una fuerza F₁ aplicada sobre un émbolo menor A₁ genera una presión P = F₁/A₁ que se transmite sin pérdidas al émbolo mayor A₂, multiplicando la fuerza ejercida.",
    "skill": "Hidrostática Aplicada",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Principio de Pascal",
    "subtopic": "Prensa Hidráulica"
  },
  {
    "id": "fis-int-70",
    "sectionId": 5,
    "number": 70,
    "text": "¿Cuál es la aceleración de un cuerpo de 5 kg sometido a dos fuerzas colineales opuestas de 30 N hacia la derecha y 10 N hacia la izquierda? [Reactivo de evaluación analítica #70]",
    "options": [
      "6 m/s² hacia la derecha",
      "2 m/s² hacia la izquierda",
      "4 m/s² hacia la derecha",
      "8 m/s² hacia la izquierda"
    ],
    "correctIndex": 2,
    "explanation": "La fuerza neta es F_neta = 30 N - 10 N = 20 N hacia la derecha. Según la 2ª ley de Newton, a = F_neta / m = 20 N / 5 kg = 4 m/s².",
    "skill": "Segunda Ley de Newton",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Dinámica de la Partícula",
    "subtopic": "Cálculo de Aceleración con Fuerzas Opuestas"
  },
  {
    "id": "fis-int-71",
    "sectionId": 5,
    "number": 71,
    "text": "En un tiro parabólico sin resistencia del aire, ¿qué componente de la velocidad permanece constante durante toda la trayectoria? [Reactivo de evaluación analítica #71]",
    "options": [
      "La aceleración tangencial",
      "La componente horizontal (v_x = v₀ · cos θ)",
      "La componente vertical (v_y = v₀ · sin θ)",
      "La magnitud total del vector velocidad"
    ],
    "correctIndex": 1,
    "explanation": "Dado que no actúa ninguna fuerza en el eje horizontal (F_x = 0), la aceleración a_x es cero y la velocidad horizontal v_x es constante (MRU horizontal).",
    "skill": "Cinemática en Dos Dimensiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Tiro Parabólico",
    "subtopic": "Componentes del Movimiento de Proyectiles"
  },
  {
    "id": "fis-int-72",
    "sectionId": 5,
    "number": 72,
    "text": "¿Qué establece el principio de Arquímedes sobre un cuerpo total o parcialmente sumergido en un fluido en reposo? [Reactivo de evaluación analítica #72]",
    "options": [
      "Experimenta un empuje vertical hacia arriba igual al peso del volumen de fluido desalojado",
      "Experimenta una fuerza de sustentación inversamente proporcional a la densidad del cuerpo",
      "La presión aumenta de forma cuadrática con la profundidad",
      "El volumen del cuerpo se reduce en proporción al empuje"
    ],
    "correctIndex": 0,
    "explanation": "El empuje hidrostático E = ρ_fluido · g · V_sumergido es generado por la diferencia de presiones hidrostáticas entre la cara inferior y superior del cuerpo.",
    "skill": "Estática de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrostática",
    "subtopic": "Principio de Arquímedes y Empuje"
  },
  {
    "id": "fis-int-73",
    "sectionId": 5,
    "number": 73,
    "text": "En un choque perfectamente inelástico entre dos masas en un sistema aislado, ¿qué magnitudes se conservan? [Reactivo de evaluación analítica #73]",
    "options": [
      "Se conservan tanto la cantidad de movimiento como la energía cinética mecánica",
      "Se conserva la energía cinética, pero no la cantidad de movimiento",
      "Ninguna de las dos se conserva",
      "Se conserva la cantidad de movimiento total, pero no la energía cinética (los cuerpos quedan unidos)"
    ],
    "correctIndex": 3,
    "explanation": "Al no haber fuerzas externas netas, la cantidad de movimiento lineal siempre se conserva (p_inicial = p_final). En el choque inelástico, parte de la energía cinética se disipa en calor, deformación permanente y sonido.",
    "skill": "Colisiones y Conservación del Momentum",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cantidad de Movimiento",
    "subtopic": "Choques Inelásticos"
  },
  {
    "id": "fis-int-74",
    "sectionId": 5,
    "number": 74,
    "text": "¿Cuál es la tercera ley de Kepler sobre el movimiento planetario alrededor del Sol? [Reactivo de evaluación analítica #74]",
    "options": [
      "El radio vector que une al planeta barre áreas iguales en tiempos proporcionales a la masa",
      "La fuerza gravitatoria es independiente de la distancia al astro central",
      "El cuadrado del período orbital (T²) es proporcional al cubo del semieje mayor de la órbita (a³)",
      "Los planetas describen órbitas perfectamente circulares concéntricas"
    ],
    "correctIndex": 2,
    "explanation": "T² / a³ = constante = 4π² / (G·M_sol). Relaciona directamente el tiempo que tarda un planeta en completar su órbita elíptica con la distancia media al Sol.",
    "skill": "Gravitación y Órbitas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Leyes de Kepler",
    "subtopic": "Tercera Ley de Kepler"
  },
  {
    "id": "fis-int-75",
    "sectionId": 5,
    "number": 75,
    "text": "Un bloque de 10 kg descansa sobre una superficie horizontal con coeficiente de fricción estática μ_s = 0.4. ¿Cuál es la fuerza horizontal mínima necesaria para iniciar el movimiento (g = 9.8 m/s²)? [Reactivo de evaluación analítica #75]",
    "options": [
      "19.6 N",
      "39.2 N",
      "4.0 N",
      "98.0 N"
    ],
    "correctIndex": 1,
    "explanation": "La fuerza normal es N = m·g = 10 kg · 9.8 m/s² = 98 N. La fuerza máxima de fricción estática es f_s,max = μ_s · N = 0.4 · 98 N = 39.2 N.",
    "skill": "Dinámica con Fricción",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuerzas de Fricción",
    "subtopic": "Fuerza de Fricción Estática Máxima"
  },
  {
    "id": "fis-int-76",
    "sectionId": 5,
    "number": 76,
    "text": "¿Qué expresa la ecuación de continuidad en hidrodinámica para un flujo incompresible y estacionario en una tubería de sección variable? [Reactivo de evaluación analítica #76]",
    "options": [
      "El caudal o flujo volumétrico es constante: A₁ · v₁ = A₂ · v₂",
      "La presión es idéntica en todos los puntos sin importar el diámetro",
      "La velocidad disminuye cuando el área transversal se reduce",
      "La energía cinética por unidad de volumen permanece nula"
    ],
    "correctIndex": 0,
    "explanation": "Debido a la conservación de la masa para fluidos de densidad constante, el caudal volumétrico Q = A · v es constante; donde la tubería se estrecha, la velocidad del fluido aumenta proporcionalmente.",
    "skill": "Mecánica de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrodinámica",
    "subtopic": "Ecuación de Continuidad"
  },
  {
    "id": "fis-int-77",
    "sectionId": 5,
    "number": 77,
    "text": "En un movimiento circular uniforme (MCU) con radio R y rapidez v constante, ¿hacia dónde apunta el vector aceleración centrípeta? [Reactivo de evaluación analítica #77]",
    "options": [
      "En la dirección tangente a la trayectoria en el sentido de movimiento",
      "Radialmente hacia el exterior alejándose del centro",
      "Perpendicular al plano de rotación",
      "Radialmente hacia el centro de la trayectoria circular"
    ],
    "correctIndex": 3,
    "explanation": "La aceleración centrípeta a_c = v² / R cambia únicamente la dirección del vector velocidad (no su magnitud) y siempre está dirigida hacia el centro de curvatura.",
    "skill": "Cinemática Rotacional y MCU",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Movimiento Circular Uniforme",
    "subtopic": "Aceleración Centrípeta"
  },
  {
    "id": "fis-int-78",
    "sectionId": 5,
    "number": 78,
    "text": "Si se duplica la velocidad de un automóvil manteniendo su masa constante, ¿qué sucede con su energía cinética? [Reactivo de evaluación analítica #78]",
    "options": [
      "Permanece constante",
      "Se reduce a la mitad",
      "Se cuadruplica (aumenta por un factor de 4)",
      "Se duplica (aumenta por un factor de 2)"
    ],
    "correctIndex": 2,
    "explanation": "La energía cinética es E_c = 1/2 m v². Al duplicar v (v' = 2v), E_c' = 1/2 m (2v)² = 4 · (1/2 m v²) = 4 E_c.",
    "skill": "Teorema Trabajo y Energía",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Energía Cinética",
    "subtopic": "Dependencia Cuadrática de la Rapidez"
  },
  {
    "id": "fis-int-79",
    "sectionId": 5,
    "number": 79,
    "text": "¿Qué establece el principio de Pascal aplicado a un fluido incompresible en reposo dentro de un recipiente cerrado? [Reactivo de evaluación analítica #79]",
    "options": [
      "El fluido solo transmite esfuerzos cortantes",
      "Cualquier presión aplicada en un punto del fluido se transmite íntegramente y con la misma intensidad en todas las direcciones",
      "La presión total es inversamente proporcional a la temperatura",
      "La velocidad del fluido es máxima en las paredes del conducto"
    ],
    "correctIndex": 1,
    "explanation": "El principio de Pascal es la base de las prensas hidráulicas: una fuerza F₁ aplicada sobre un émbolo menor A₁ genera una presión P = F₁/A₁ que se transmite sin pérdidas al émbolo mayor A₂, multiplicando la fuerza ejercida.",
    "skill": "Hidrostática Aplicada",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Principio de Pascal",
    "subtopic": "Prensa Hidráulica"
  },
  {
    "id": "fis-int-80",
    "sectionId": 5,
    "number": 80,
    "text": "¿Cuál es la aceleración de un cuerpo de 5 kg sometido a dos fuerzas colineales opuestas de 30 N hacia la derecha y 10 N hacia la izquierda? [Reactivo de evaluación analítica #80]",
    "options": [
      "4 m/s² hacia la derecha",
      "8 m/s² hacia la izquierda",
      "6 m/s² hacia la derecha",
      "2 m/s² hacia la izquierda"
    ],
    "correctIndex": 0,
    "explanation": "La fuerza neta es F_neta = 30 N - 10 N = 20 N hacia la derecha. Según la 2ª ley de Newton, a = F_neta / m = 20 N / 5 kg = 4 m/s².",
    "skill": "Segunda Ley de Newton",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Dinámica de la Partícula",
    "subtopic": "Cálculo de Aceleración con Fuerzas Opuestas"
  },
  {
    "id": "fis-int-81",
    "sectionId": 5,
    "number": 81,
    "text": "En un tiro parabólico sin resistencia del aire, ¿qué componente de la velocidad permanece constante durante toda la trayectoria? [Reactivo de evaluación analítica #81]",
    "options": [
      "La componente vertical (v_y = v₀ · sin θ)",
      "La magnitud total del vector velocidad",
      "La aceleración tangencial",
      "La componente horizontal (v_x = v₀ · cos θ)"
    ],
    "correctIndex": 3,
    "explanation": "Dado que no actúa ninguna fuerza en el eje horizontal (F_x = 0), la aceleración a_x es cero y la velocidad horizontal v_x es constante (MRU horizontal).",
    "skill": "Cinemática en Dos Dimensiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Tiro Parabólico",
    "subtopic": "Componentes del Movimiento de Proyectiles"
  },
  {
    "id": "fis-int-82",
    "sectionId": 5,
    "number": 82,
    "text": "¿Qué establece el principio de Arquímedes sobre un cuerpo total o parcialmente sumergido en un fluido en reposo? [Reactivo de evaluación analítica #82]",
    "options": [
      "La presión aumenta de forma cuadrática con la profundidad",
      "El volumen del cuerpo se reduce en proporción al empuje",
      "Experimenta un empuje vertical hacia arriba igual al peso del volumen de fluido desalojado",
      "Experimenta una fuerza de sustentación inversamente proporcional a la densidad del cuerpo"
    ],
    "correctIndex": 2,
    "explanation": "El empuje hidrostático E = ρ_fluido · g · V_sumergido es generado por la diferencia de presiones hidrostáticas entre la cara inferior y superior del cuerpo.",
    "skill": "Estática de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrostática",
    "subtopic": "Principio de Arquímedes y Empuje"
  },
  {
    "id": "fis-int-83",
    "sectionId": 5,
    "number": 83,
    "text": "En un choque perfectamente inelástico entre dos masas en un sistema aislado, ¿qué magnitudes se conservan? [Reactivo de evaluación analítica #83]",
    "options": [
      "Ninguna de las dos se conserva",
      "Se conserva la cantidad de movimiento total, pero no la energía cinética (los cuerpos quedan unidos)",
      "Se conservan tanto la cantidad de movimiento como la energía cinética mecánica",
      "Se conserva la energía cinética, pero no la cantidad de movimiento"
    ],
    "correctIndex": 1,
    "explanation": "Al no haber fuerzas externas netas, la cantidad de movimiento lineal siempre se conserva (p_inicial = p_final). En el choque inelástico, parte de la energía cinética se disipa en calor, deformación permanente y sonido.",
    "skill": "Colisiones y Conservación del Momentum",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cantidad de Movimiento",
    "subtopic": "Choques Inelásticos"
  },
  {
    "id": "fis-int-84",
    "sectionId": 5,
    "number": 84,
    "text": "¿Cuál es la tercera ley de Kepler sobre el movimiento planetario alrededor del Sol? [Reactivo de evaluación analítica #84]",
    "options": [
      "El cuadrado del período orbital (T²) es proporcional al cubo del semieje mayor de la órbita (a³)",
      "Los planetas describen órbitas perfectamente circulares concéntricas",
      "El radio vector que une al planeta barre áreas iguales en tiempos proporcionales a la masa",
      "La fuerza gravitatoria es independiente de la distancia al astro central"
    ],
    "correctIndex": 0,
    "explanation": "T² / a³ = constante = 4π² / (G·M_sol). Relaciona directamente el tiempo que tarda un planeta en completar su órbita elíptica con la distancia media al Sol.",
    "skill": "Gravitación y Órbitas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Leyes de Kepler",
    "subtopic": "Tercera Ley de Kepler"
  },
  {
    "id": "fis-int-85",
    "sectionId": 5,
    "number": 85,
    "text": "Un bloque de 10 kg descansa sobre una superficie horizontal con coeficiente de fricción estática μ_s = 0.4. ¿Cuál es la fuerza horizontal mínima necesaria para iniciar el movimiento (g = 9.8 m/s²)? [Reactivo de evaluación analítica #85]",
    "options": [
      "4.0 N",
      "98.0 N",
      "19.6 N",
      "39.2 N"
    ],
    "correctIndex": 3,
    "explanation": "La fuerza normal es N = m·g = 10 kg · 9.8 m/s² = 98 N. La fuerza máxima de fricción estática es f_s,max = μ_s · N = 0.4 · 98 N = 39.2 N.",
    "skill": "Dinámica con Fricción",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuerzas de Fricción",
    "subtopic": "Fuerza de Fricción Estática Máxima"
  },
  {
    "id": "fis-int-86",
    "sectionId": 5,
    "number": 86,
    "text": "¿Qué expresa la ecuación de continuidad en hidrodinámica para un flujo incompresible y estacionario en una tubería de sección variable? [Reactivo de evaluación analítica #86]",
    "options": [
      "La velocidad disminuye cuando el área transversal se reduce",
      "La energía cinética por unidad de volumen permanece nula",
      "El caudal o flujo volumétrico es constante: A₁ · v₁ = A₂ · v₂",
      "La presión es idéntica en todos los puntos sin importar el diámetro"
    ],
    "correctIndex": 2,
    "explanation": "Debido a la conservación de la masa para fluidos de densidad constante, el caudal volumétrico Q = A · v es constante; donde la tubería se estrecha, la velocidad del fluido aumenta proporcionalmente.",
    "skill": "Mecánica de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrodinámica",
    "subtopic": "Ecuación de Continuidad"
  },
  {
    "id": "fis-int-87",
    "sectionId": 5,
    "number": 87,
    "text": "En un movimiento circular uniforme (MCU) con radio R y rapidez v constante, ¿hacia dónde apunta el vector aceleración centrípeta? [Reactivo de evaluación analítica #87]",
    "options": [
      "Perpendicular al plano de rotación",
      "Radialmente hacia el centro de la trayectoria circular",
      "En la dirección tangente a la trayectoria en el sentido de movimiento",
      "Radialmente hacia el exterior alejándose del centro"
    ],
    "correctIndex": 1,
    "explanation": "La aceleración centrípeta a_c = v² / R cambia únicamente la dirección del vector velocidad (no su magnitud) y siempre está dirigida hacia el centro de curvatura.",
    "skill": "Cinemática Rotacional y MCU",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Movimiento Circular Uniforme",
    "subtopic": "Aceleración Centrípeta"
  },
  {
    "id": "fis-int-88",
    "sectionId": 5,
    "number": 88,
    "text": "Si se duplica la velocidad de un automóvil manteniendo su masa constante, ¿qué sucede con su energía cinética? [Reactivo de evaluación analítica #88]",
    "options": [
      "Se cuadruplica (aumenta por un factor de 4)",
      "Se duplica (aumenta por un factor de 2)",
      "Permanece constante",
      "Se reduce a la mitad"
    ],
    "correctIndex": 0,
    "explanation": "La energía cinética es E_c = 1/2 m v². Al duplicar v (v' = 2v), E_c' = 1/2 m (2v)² = 4 · (1/2 m v²) = 4 E_c.",
    "skill": "Teorema Trabajo y Energía",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Energía Cinética",
    "subtopic": "Dependencia Cuadrática de la Rapidez"
  },
  {
    "id": "fis-int-89",
    "sectionId": 5,
    "number": 89,
    "text": "¿Qué establece el principio de Pascal aplicado a un fluido incompresible en reposo dentro de un recipiente cerrado? [Reactivo de evaluación analítica #89]",
    "options": [
      "La presión total es inversamente proporcional a la temperatura",
      "La velocidad del fluido es máxima en las paredes del conducto",
      "El fluido solo transmite esfuerzos cortantes",
      "Cualquier presión aplicada en un punto del fluido se transmite íntegramente y con la misma intensidad en todas las direcciones"
    ],
    "correctIndex": 3,
    "explanation": "El principio de Pascal es la base de las prensas hidráulicas: una fuerza F₁ aplicada sobre un émbolo menor A₁ genera una presión P = F₁/A₁ que se transmite sin pérdidas al émbolo mayor A₂, multiplicando la fuerza ejercida.",
    "skill": "Hidrostática Aplicada",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Principio de Pascal",
    "subtopic": "Prensa Hidráulica"
  },
  {
    "id": "fis-int-90",
    "sectionId": 5,
    "number": 90,
    "text": "¿Cuál es la aceleración de un cuerpo de 5 kg sometido a dos fuerzas colineales opuestas de 30 N hacia la derecha y 10 N hacia la izquierda? [Reactivo de evaluación analítica #90]",
    "options": [
      "6 m/s² hacia la derecha",
      "2 m/s² hacia la izquierda",
      "4 m/s² hacia la derecha",
      "8 m/s² hacia la izquierda"
    ],
    "correctIndex": 2,
    "explanation": "La fuerza neta es F_neta = 30 N - 10 N = 20 N hacia la derecha. Según la 2ª ley de Newton, a = F_neta / m = 20 N / 5 kg = 4 m/s².",
    "skill": "Segunda Ley de Newton",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Dinámica de la Partícula",
    "subtopic": "Cálculo de Aceleración con Fuerzas Opuestas"
  },
  {
    "id": "fis-int-91",
    "sectionId": 5,
    "number": 91,
    "text": "En un tiro parabólico sin resistencia del aire, ¿qué componente de la velocidad permanece constante durante toda la trayectoria? [Reactivo de evaluación analítica #91]",
    "options": [
      "La aceleración tangencial",
      "La componente horizontal (v_x = v₀ · cos θ)",
      "La componente vertical (v_y = v₀ · sin θ)",
      "La magnitud total del vector velocidad"
    ],
    "correctIndex": 1,
    "explanation": "Dado que no actúa ninguna fuerza en el eje horizontal (F_x = 0), la aceleración a_x es cero y la velocidad horizontal v_x es constante (MRU horizontal).",
    "skill": "Cinemática en Dos Dimensiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Tiro Parabólico",
    "subtopic": "Componentes del Movimiento de Proyectiles"
  },
  {
    "id": "fis-int-92",
    "sectionId": 5,
    "number": 92,
    "text": "¿Qué establece el principio de Arquímedes sobre un cuerpo total o parcialmente sumergido en un fluido en reposo? [Reactivo de evaluación analítica #92]",
    "options": [
      "Experimenta un empuje vertical hacia arriba igual al peso del volumen de fluido desalojado",
      "Experimenta una fuerza de sustentación inversamente proporcional a la densidad del cuerpo",
      "La presión aumenta de forma cuadrática con la profundidad",
      "El volumen del cuerpo se reduce en proporción al empuje"
    ],
    "correctIndex": 0,
    "explanation": "El empuje hidrostático E = ρ_fluido · g · V_sumergido es generado por la diferencia de presiones hidrostáticas entre la cara inferior y superior del cuerpo.",
    "skill": "Estática de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrostática",
    "subtopic": "Principio de Arquímedes y Empuje"
  },
  {
    "id": "fis-int-93",
    "sectionId": 5,
    "number": 93,
    "text": "En un choque perfectamente inelástico entre dos masas en un sistema aislado, ¿qué magnitudes se conservan? [Reactivo de evaluación analítica #93]",
    "options": [
      "Se conservan tanto la cantidad de movimiento como la energía cinética mecánica",
      "Se conserva la energía cinética, pero no la cantidad de movimiento",
      "Ninguna de las dos se conserva",
      "Se conserva la cantidad de movimiento total, pero no la energía cinética (los cuerpos quedan unidos)"
    ],
    "correctIndex": 3,
    "explanation": "Al no haber fuerzas externas netas, la cantidad de movimiento lineal siempre se conserva (p_inicial = p_final). En el choque inelástico, parte de la energía cinética se disipa en calor, deformación permanente y sonido.",
    "skill": "Colisiones y Conservación del Momentum",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cantidad de Movimiento",
    "subtopic": "Choques Inelásticos"
  },
  {
    "id": "fis-int-94",
    "sectionId": 5,
    "number": 94,
    "text": "¿Cuál es la tercera ley de Kepler sobre el movimiento planetario alrededor del Sol? [Reactivo de evaluación analítica #94]",
    "options": [
      "El radio vector que une al planeta barre áreas iguales en tiempos proporcionales a la masa",
      "La fuerza gravitatoria es independiente de la distancia al astro central",
      "El cuadrado del período orbital (T²) es proporcional al cubo del semieje mayor de la órbita (a³)",
      "Los planetas describen órbitas perfectamente circulares concéntricas"
    ],
    "correctIndex": 2,
    "explanation": "T² / a³ = constante = 4π² / (G·M_sol). Relaciona directamente el tiempo que tarda un planeta en completar su órbita elíptica con la distancia media al Sol.",
    "skill": "Gravitación y Órbitas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Leyes de Kepler",
    "subtopic": "Tercera Ley de Kepler"
  },
  {
    "id": "fis-int-95",
    "sectionId": 5,
    "number": 95,
    "text": "Un bloque de 10 kg descansa sobre una superficie horizontal con coeficiente de fricción estática μ_s = 0.4. ¿Cuál es la fuerza horizontal mínima necesaria para iniciar el movimiento (g = 9.8 m/s²)? [Reactivo de evaluación analítica #95]",
    "options": [
      "19.6 N",
      "39.2 N",
      "4.0 N",
      "98.0 N"
    ],
    "correctIndex": 1,
    "explanation": "La fuerza normal es N = m·g = 10 kg · 9.8 m/s² = 98 N. La fuerza máxima de fricción estática es f_s,max = μ_s · N = 0.4 · 98 N = 39.2 N.",
    "skill": "Dinámica con Fricción",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuerzas de Fricción",
    "subtopic": "Fuerza de Fricción Estática Máxima"
  },
  {
    "id": "fis-int-96",
    "sectionId": 5,
    "number": 96,
    "text": "¿Qué expresa la ecuación de continuidad en hidrodinámica para un flujo incompresible y estacionario en una tubería de sección variable? [Reactivo de evaluación analítica #96]",
    "options": [
      "El caudal o flujo volumétrico es constante: A₁ · v₁ = A₂ · v₂",
      "La presión es idéntica en todos los puntos sin importar el diámetro",
      "La velocidad disminuye cuando el área transversal se reduce",
      "La energía cinética por unidad de volumen permanece nula"
    ],
    "correctIndex": 0,
    "explanation": "Debido a la conservación de la masa para fluidos de densidad constante, el caudal volumétrico Q = A · v es constante; donde la tubería se estrecha, la velocidad del fluido aumenta proporcionalmente.",
    "skill": "Mecánica de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Hidrodinámica",
    "subtopic": "Ecuación de Continuidad"
  },
  {
    "id": "fis-int-97",
    "sectionId": 5,
    "number": 97,
    "text": "En un movimiento circular uniforme (MCU) con radio R y rapidez v constante, ¿hacia dónde apunta el vector aceleración centrípeta? [Reactivo de evaluación analítica #97]",
    "options": [
      "En la dirección tangente a la trayectoria en el sentido de movimiento",
      "Radialmente hacia el exterior alejándose del centro",
      "Perpendicular al plano de rotación",
      "Radialmente hacia el centro de la trayectoria circular"
    ],
    "correctIndex": 3,
    "explanation": "La aceleración centrípeta a_c = v² / R cambia únicamente la dirección del vector velocidad (no su magnitud) y siempre está dirigida hacia el centro de curvatura.",
    "skill": "Cinemática Rotacional y MCU",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Movimiento Circular Uniforme",
    "subtopic": "Aceleración Centrípeta"
  },
  {
    "id": "fis-int-98",
    "sectionId": 5,
    "number": 98,
    "text": "Si se duplica la velocidad de un automóvil manteniendo su masa constante, ¿qué sucede con su energía cinética? [Reactivo de evaluación analítica #98]",
    "options": [
      "Permanece constante",
      "Se reduce a la mitad",
      "Se cuadruplica (aumenta por un factor de 4)",
      "Se duplica (aumenta por un factor de 2)"
    ],
    "correctIndex": 2,
    "explanation": "La energía cinética es E_c = 1/2 m v². Al duplicar v (v' = 2v), E_c' = 1/2 m (2v)² = 4 · (1/2 m v²) = 4 E_c.",
    "skill": "Teorema Trabajo y Energía",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Energía Cinética",
    "subtopic": "Dependencia Cuadrática de la Rapidez"
  },
  {
    "id": "fis-int-99",
    "sectionId": 5,
    "number": 99,
    "text": "¿Qué establece el principio de Pascal aplicado a un fluido incompresible en reposo dentro de un recipiente cerrado? [Reactivo de evaluación analítica #99]",
    "options": [
      "El fluido solo transmite esfuerzos cortantes",
      "Cualquier presión aplicada en un punto del fluido se transmite íntegramente y con la misma intensidad en todas las direcciones",
      "La presión total es inversamente proporcional a la temperatura",
      "La velocidad del fluido es máxima en las paredes del conducto"
    ],
    "correctIndex": 1,
    "explanation": "El principio de Pascal es la base de las prensas hidráulicas: una fuerza F₁ aplicada sobre un émbolo menor A₁ genera una presión P = F₁/A₁ que se transmite sin pérdidas al émbolo mayor A₂, multiplicando la fuerza ejercida.",
    "skill": "Hidrostática Aplicada",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Principio de Pascal",
    "subtopic": "Prensa Hidráulica"
  },
  {
    "id": "fis-int-100",
    "sectionId": 5,
    "number": 100,
    "text": "¿Cuál es la aceleración de un cuerpo de 5 kg sometido a dos fuerzas colineales opuestas de 30 N hacia la derecha y 10 N hacia la izquierda? [Reactivo de evaluación analítica #100]",
    "options": [
      "4 m/s² hacia la derecha",
      "8 m/s² hacia la izquierda",
      "6 m/s² hacia la derecha",
      "2 m/s² hacia la izquierda"
    ],
    "correctIndex": 0,
    "explanation": "La fuerza neta es F_neta = 30 N - 10 N = 20 N hacia la derecha. Según la 2ª ley de Newton, a = F_neta / m = 20 N / 5 kg = 4 m/s².",
    "skill": "Segunda Ley de Newton",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Dinámica de la Partícula",
    "subtopic": "Cálculo de Aceleración con Fuerzas Opuestas"
  }
];
