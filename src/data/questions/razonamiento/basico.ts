import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE RAZONAMIENTO LÓGICO Y ABSTRACTO - NIVEL BÁSICO (100 Reactivos)
 */
export const RAZONAMIENTO_BASICO: Question[] = [
  {
    "id": "raz-bas-1",
    "sectionId": 3,
    "number": 1,
    "text": "¿Qué número continúa la serie numérica: 4, 8, 12, 16, ___?",
    "options": [
      "18",
      "20",
      "22",
      "24"
    ],
    "correctIndex": 1,
    "explanation": "La serie avanza con un patrón aditivo constante de +4: 4 (+4) = 8, 8 (+4) = 12, 12 (+4) = 16, 16 (+4) = 20.",
    "skill": "Series Numéricas Aritméticas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Progresiones Aritméticas Simples"
  },
  {
    "id": "raz-bas-2",
    "sectionId": 3,
    "number": 2,
    "text": "Completa la analogía: \"Pájaro es a Nido como Abeja es a ___\".",
    "options": [
      "Flor",
      "Colmena",
      "Miel",
      "Vuelo"
    ],
    "correctIndex": 1,
    "explanation": "La relación analógica es de animal a su refugio o hábitat construido. El pájaro habita en el nido y la abeja en la colmena.",
    "skill": "Analogías Verbales de Hábitat",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Relaciones Analógicas"
  },
  {
    "id": "raz-bas-3",
    "sectionId": 3,
    "number": 3,
    "text": "Identifica la palabra que NO pertenece al grupo: Manzana, Pera, Lechuga, Plátano.",
    "options": [
      "Manzana",
      "Pera",
      "Lechuga",
      "Plátano"
    ],
    "correctIndex": 2,
    "explanation": "Manzana, pera y plátano son frutas botánicas y dulces; la lechuga es una hortaliza de hoja.",
    "skill": "Clasificación y Discriminación Categorial",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Intrusos Categoriales"
  },
  {
    "id": "raz-bas-4",
    "sectionId": 3,
    "number": 4,
    "text": "Si todos los gatos tienen bigotes y Félix es un gato, ¿qué conclusión es necesariamente verdadera?",
    "options": [
      "Félix tiene bigotes",
      "Félix maúlla de noche",
      "Todos los animales con bigotes son Félix",
      "Félix caza ratones"
    ],
    "correctIndex": 0,
    "explanation": "Por deducción silogística directa (Modus Ponens): Premisa mayor: Todos los gatos tienen bigotes. Premisa menor: Félix es un gato. Conclusión: Félix tiene bigotes.",
    "skill": "Deducción Lógica Simple",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Proposicional",
    "subtopic": "Silogismos Categóricos"
  },
  {
    "id": "raz-bas-5",
    "sectionId": 3,
    "number": 5,
    "text": "¿Qué letra sigue en la secuencia alfabética: B, D, F, H, ___?",
    "options": [
      "I",
      "J",
      "K",
      "L"
    ],
    "correctIndex": 1,
    "explanation": "El patrón omite una letra entre cada elemento: B, (c), D, (e), F, (g), H, (i), J.",
    "skill": "Series Alfabéticas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Secuencias de Letras"
  },
  {
    "id": "raz-bas-6",
    "sectionId": 3,
    "number": 6,
    "text": "En una carrera, David llegó antes que Luis, y Carlos llegó después de Luis. ¿Quién llegó en primer lugar entre los tres?",
    "options": [
      "Luis",
      "Carlos",
      "David",
      "Llegaron al mismo tiempo"
    ],
    "correctIndex": 2,
    "explanation": "Ordenando de primero a último: David > Luis > Carlos. Por tanto, David llegó en primer lugar.",
    "skill": "Ordenamiento Lineal",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Relacional",
    "subtopic": "Orden Temporal y Posicional"
  },
  {
    "id": "raz-bas-7",
    "sectionId": 3,
    "number": 7,
    "text": "¿Cuál es el valor que falta en la relación: 2 es a 4 como 5 es a ___ (relación de doble)?",
    "options": [
      "7",
      "10",
      "15",
      "25"
    ],
    "correctIndex": 1,
    "explanation": "El segundo término es el doble del primero (2 × 2 = 4). Aplicando la misma regla: 5 × 2 = 10.",
    "skill": "Analogías Numéricas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Relaciones de Proporcionalidad"
  },
  {
    "id": "raz-bas-8",
    "sectionId": 3,
    "number": 8,
    "text": "Si giras una aguja del reloj 90 grados en sentido horario desde las 12, ¿hacia qué número apuntará?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "Una esfera de reloj tiene 360 grados divididos en 12 horas (30 grados por hora). Un giro horario de 90° equivale a 3 horas: 12 + 3 = 3.",
    "skill": "Razonamiento Espacial y Rotación",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Rotaciones Angulares"
  },
  {
    "id": "raz-bas-9",
    "sectionId": 3,
    "number": 9,
    "text": "¿Qué figura completa la serie lógica: Círculo blanco, Círculo negro, Cuadrado blanco, Cuadrado negro, Triángulo blanco, ___?",
    "options": [
      "Triángulo blanco",
      "Triángulo negro",
      "Círculo blanco",
      "Rombo negro"
    ],
    "correctIndex": 1,
    "explanation": "El patrón agrupa figuras geométricas de 2 en 2 alternando color blanco y negro: círculos (blanco, negro), cuadrados (blanco, negro), triángulos (blanco, negro).",
    "skill": "Secuencias de Patrones Geométricos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Patrones Bicolores"
  },
  {
    "id": "raz-bas-10",
    "sectionId": 3,
    "number": 10,
    "text": "Si ayer fue martes, ¿qué día será pasado mañana?",
    "options": [
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo"
    ],
    "correctIndex": 1,
    "explanation": "Si ayer fue martes, hoy es miércoles. Mañana será jueves, y pasado mañana será viernes.",
    "skill": "Razonamiento Cronológico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Temporal",
    "subtopic": "Línea de Días"
  },
  {
    "id": "raz-bas-11",
    "sectionId": 3,
    "number": 11,
    "text": "¿Qué número continúa la serie: 1, 3, 9, 27, ___?",
    "options": [
      "54",
      "81",
      "72",
      "90"
    ],
    "correctIndex": 1,
    "explanation": "Cada número es el triple del anterior (multiplicación por 3): 1 × 3 = 3, 3 × 3 = 9, 9 × 3 = 27, 27 × 3 = 81.",
    "skill": "Series Numéricas Geométricas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Progresiones Geométricas"
  },
  {
    "id": "raz-bas-12",
    "sectionId": 3,
    "number": 12,
    "text": "Completa la relación: \"Médico es a Hospital como Maestro es a ___\".",
    "options": [
      "Libro",
      "Escuela",
      "Alumno",
      "Pizarrón"
    ],
    "correctIndex": 1,
    "explanation": "La relación es sujeto profesional con su lugar típico de trabajo. El médico trabaja en el hospital y el maestro en la escuela.",
    "skill": "Analogías de Agente y Lugar",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Analogías Profesionales"
  },
  {
    "id": "raz-bas-13",
    "sectionId": 3,
    "number": 13,
    "text": "Si Ana es más alta que Beatriz y Beatriz es más alta que Carmen, ¿quién es la más baja de las tres?",
    "options": [
      "Ana",
      "Beatriz",
      "Carmen",
      "Tienen igual estatura"
    ],
    "correctIndex": 2,
    "explanation": "Orden de estaturas de mayor a menor: Ana > Beatriz > Carmen. Por lo tanto, Carmen es la más baja.",
    "skill": "Transitividad y Comparación",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Desigualdades Transitivas"
  },
  {
    "id": "raz-bas-14",
    "sectionId": 3,
    "number": 14,
    "text": "¿Cuál es el intruso en este conjunto de figuras: Triángulo, Cuadrado, Rectángulo, Cubo?",
    "options": [
      "Triángulo",
      "Cuadrado",
      "Rectángulo",
      "Cubo"
    ],
    "correctIndex": 3,
    "explanation": "Triángulo, cuadrado y rectángulo son figuras bidimensionales (2D); el cubo es un cuerpo geométrico tridimensional (3D).",
    "skill": "Clasificación Geométrica Dimensional",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Dimensión Espacial 2D vs 3D"
  },
  {
    "id": "raz-bas-15",
    "sectionId": 3,
    "number": 15,
    "text": "¿Qué número continúa la secuencia: 50, 45, 40, 35, ___?",
    "options": [
      "30",
      "25",
      "20",
      "32"
    ],
    "correctIndex": 0,
    "explanation": "Patrón descendente con resta fija de -5: 50 - 5 = 45, 45 - 5 = 40, 40 - 5 = 35, 35 - 5 = 30.",
    "skill": "Series Numéricas Decrecientes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Patrones de Sustracción"
  },
  {
    "id": "raz-bas-16",
    "sectionId": 3,
    "number": 16,
    "text": "Si un objeto rueda sobre una mesa hacia el norte y luego gira 180 grados, ¿hacia qué punto cardinal se dirige?",
    "options": [
      "Este",
      "Oeste",
      "Sur",
      "Noreste"
    ],
    "correctIndex": 2,
    "explanation": "Un giro de 180° invierte exactamente el sentido de la dirección. Lo opuesto del norte es el sur.",
    "skill": "Orientación Cardinal y Vectores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Puntos Cardinales"
  },
  {
    "id": "raz-bas-17",
    "sectionId": 3,
    "number": 17,
    "text": "Completa la serie alfanumérica: A1, B2, C3, D4, ___",
    "options": [
      "E4",
      "E5",
      "F5",
      "D5"
    ],
    "correctIndex": 1,
    "explanation": "Avanzan simultáneamente la letra consecutiva (A, B, C, D, E) y el número consecutivo (1, 2, 3, 4, 5). El siguiente es E5.",
    "skill": "Series Mixtas Alfanuméricas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Coordinación Alfanumérica"
  },
  {
    "id": "raz-bas-18",
    "sectionId": 3,
    "number": 18,
    "text": "En una hilera de 5 árboles, el pino está en el centro exacto. ¿Cuántos árboles hay a cada lado del pino?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "explanation": "Si hay 5 árboles en total y el pino está en el centro (posición 3), a su izquierda hay 2 árboles (posiciones 1 y 2) y a su derecha hay 2 (posiciones 4 y 5).",
    "skill": "Simetría Posicional",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Matemática",
    "subtopic": "Posicionamiento Central"
  },
  {
    "id": "raz-bas-19",
    "sectionId": 3,
    "number": 19,
    "text": "¿Cuál es el sinónimo de causa en la relación causa-efecto?",
    "options": [
      "Consecuencia",
      "Origen o motivo",
      "Resultado",
      "Finalidad"
    ],
    "correctIndex": 1,
    "explanation": "La causa es el principio, motivo o razón que genera un efecto o resultado.",
    "skill": "Relaciones de Causalidad",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Causa y Efecto"
  },
  {
    "id": "raz-bas-20",
    "sectionId": 3,
    "number": 20,
    "text": "Si 1 caja contiene 2 estuches, y cada estuche contiene 3 lápices, ¿cuántos lápices hay en total en la caja?",
    "options": [
      "5",
      "6",
      "8",
      "9"
    ],
    "correctIndex": 1,
    "explanation": "Multiplicación escalonada: 1 caja × 2 estuches × 3 lápices = 6 lápices en total.",
    "skill": "Conteo Combinatorio Básico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Problemas Multiplicativos de Contenedores"
  },
  {
    "id": "raz-bas-21",
    "sectionId": 3,
    "number": 21,
    "text": "¿Qué número continúa la serie: 3, 6, 12, 24, 48, ___?",
    "options": [
      "96",
      "72",
      "84",
      "108"
    ],
    "correctIndex": 0,
    "explanation": "Cada término es el doble del anterior: 48 × 2 = 96.",
    "skill": "Series multiplicativas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Progresiones geométricas"
  },
  {
    "id": "raz-bas-22",
    "sectionId": 3,
    "number": 22,
    "text": "Identifica el número que completa la sucesión: 100, 95, 85, 70, 50, ___.",
    "options": [
      "25",
      "30",
      "35",
      "20"
    ],
    "correctIndex": 0,
    "explanation": "La diferencia entre términos aumenta sucesivamente de 5 en 5 restando: -5, -10, -15, -20, -25. Por tanto, 50 - 25 = 25.",
    "skill": "Series de diferencias decrecientes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Patrones numéricos"
  },
  {
    "id": "raz-bas-23",
    "sectionId": 3,
    "number": 23,
    "text": "¿Qué número sigue en la secuencia: 1, 4, 9, 16, 25, 36, ___?",
    "options": [
      "49",
      "48",
      "64",
      "45"
    ],
    "correctIndex": 0,
    "explanation": "La secuencia corresponde a los cuadrados de los números naturales: 1², 2², 3², 4², 5², 6², 7² = 49.",
    "skill": "Cuadrados perfectos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Sucesiones cuadráticas"
  },
  {
    "id": "raz-bas-24",
    "sectionId": 3,
    "number": 24,
    "text": "Determina el número que falta en la serie: 5, 8, 13, 21, 34, ___.",
    "options": [
      "55",
      "53",
      "58",
      "62"
    ],
    "correctIndex": 0,
    "explanation": "Es una serie de tipo Fibonacci donde cada término es la suma de los dos anteriores: 21 + 34 = 55.",
    "skill": "Sucesión de Fibonacci",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Patrones aditivos"
  },
  {
    "id": "raz-bas-25",
    "sectionId": 3,
    "number": 25,
    "text": "¿Cuál es el valor que continúa la serie fraccionaria: 1/2, 1/4, 1/8, 1/16, ___?",
    "options": [
      "1/32",
      "1/24",
      "1/64",
      "1/20"
    ],
    "correctIndex": 0,
    "explanation": "El numerador se mantiene en 1 y el denominador se duplica sucesivamente: 16 × 2 = 32, resultando 1/32.",
    "skill": "Progresiones geométricas fraccionarias",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Fracciones"
  },
  {
    "id": "raz-bas-26",
    "sectionId": 3,
    "number": 26,
    "text": "¿Qué número completa la secuencia intercalada: 2, 20, 4, 18, 6, 16, 8, ___?",
    "options": [
      "14",
      "12",
      "10",
      "18"
    ],
    "correctIndex": 0,
    "explanation": "Hay dos series intercaladas: los números pares en posiciones impares (2, 4, 6, 8, ...) sumando 2, y en posiciones pares una cuenta regresiva (20, 18, 16, 14, ...) restando 2.",
    "skill": "Series intercaladas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Secuencias alternadas"
  },
  {
    "id": "raz-bas-27",
    "sectionId": 3,
    "number": 27,
    "text": "Encuentra el número que sigue: 7, 14, 17, 34, 37, 74, ___.",
    "options": [
      "77",
      "148",
      "78",
      "111"
    ],
    "correctIndex": 0,
    "explanation": "El patrón alterna dos operaciones: multiplicar por 2 y sumar 3 (7×2=14, 14+3=17, 17×2=34, 34+3=37, 37×2=74). El siguiente paso es sumar 3: 74 + 3 = 77.",
    "skill": "Patrones de doble operación",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Operaciones combinadas"
  },
  {
    "id": "raz-bas-28",
    "sectionId": 3,
    "number": 28,
    "text": "¿Qué número completa la analogía numérica: 4 es a 16 como 7 es a ___?",
    "options": [
      "49",
      "28",
      "35",
      "56"
    ],
    "correctIndex": 0,
    "explanation": "La relación es elevar al cuadrado el primer número: 4² = 16, por tanto 7² = 49.",
    "skill": "Analogías numéricas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Relaciones aritméticas"
  },
  {
    "id": "raz-bas-29",
    "sectionId": 3,
    "number": 29,
    "text": "Encuentra el número que falta en la terna: (3, 9, 27) ; (5, 25, 125) ; (2, 4, ___).",
    "options": [
      "8",
      "6",
      "16",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "Cada terna sigue la regla (n, n², n³). Para n = 2: 2¹ = 2, 2² = 4, 2³ = 8.",
    "skill": "Ternas numéricas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Potenciación"
  },
  {
    "id": "raz-bas-30",
    "sectionId": 3,
    "number": 30,
    "text": "¿Qué número continúa la serie: 11, 22, 33, 44, 55, ___?",
    "options": [
      "66",
      "77",
      "65",
      "60"
    ],
    "correctIndex": 0,
    "explanation": "Se suman 11 a cada término sucesivo: 55 + 11 = 66 (múltiplos de 11).",
    "skill": "Múltiplos numéricos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Progresión aritmética"
  },
  {
    "id": "raz-bas-31",
    "sectionId": 3,
    "number": 31,
    "text": "Completa la serie: 1, 8, 27, 64, 125, ___.",
    "options": [
      "216",
      "256",
      "343",
      "196"
    ],
    "correctIndex": 0,
    "explanation": "La sucesión representa los cubos de los enteros: 1³, 2³, 3³, 4³, 5³, 6³ = 216.",
    "skill": "Cubos perfectos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Potencias"
  },
  {
    "id": "raz-bas-32",
    "sectionId": 3,
    "number": 32,
    "text": "¿Qué número continúa la secuencia: 81, 27, 9, 3, ___?",
    "options": [
      "1",
      "0",
      "1/3",
      "2"
    ],
    "correctIndex": 0,
    "explanation": "Cada término se divide sucesivamente entre 3: 3 ÷ 3 = 1.",
    "skill": "Divisiones sucesivas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Series decrecientes"
  },
  {
    "id": "raz-bas-33",
    "sectionId": 3,
    "number": 33,
    "text": "En la sucesión: 10, 11, 13, 16, 20, 25, ___, ¿qué número corresponde?",
    "options": [
      "31",
      "30",
      "32",
      "29"
    ],
    "correctIndex": 0,
    "explanation": "La diferencia entre términos aumenta en 1 cada vez (+1, +2, +3, +4, +5, +6). Así: 25 + 6 = 31.",
    "skill": "Diferencias crecientes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Patrones aditivos"
  },
  {
    "id": "raz-bas-34",
    "sectionId": 3,
    "number": 34,
    "text": "Encuentra el valor de x en la serie: 6, 12, 10, 20, 18, 36, x.",
    "options": [
      "34",
      "38",
      "72",
      "32"
    ],
    "correctIndex": 0,
    "explanation": "El patrón es: multiplicar por 2, restar 2 (6×2=12, 12-2=10, 10×2=20, 20-2=18, 18×2=36). Luego 36 - 2 = 34.",
    "skill": "Secuencias combinadas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Operaciones alternadas"
  },
  {
    "id": "raz-bas-35",
    "sectionId": 3,
    "number": 35,
    "text": "¿Qué número completa la relación: 12 (30) 18 ; 15 (40) 25 ; 20 (x) 30?",
    "options": [
      "50",
      "45",
      "60",
      "40"
    ],
    "correctIndex": 0,
    "explanation": "El número central es la suma de los extremos: 12 + 18 = 30; 15 + 25 = 40; por lo tanto x = 20 + 30 = 50.",
    "skill": "Distribuciones numéricas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Numérico",
    "subtopic": "Operaciones centrales"
  },
  {
    "id": "raz-bas-36",
    "sectionId": 3,
    "number": 36,
    "text": "¿Qué letra continúa la serie alfabética: A, C, E, G, I, ___?",
    "options": [
      "K",
      "J",
      "L",
      "M"
    ],
    "correctIndex": 0,
    "explanation": "Se avanza saltando una letra del abecedario: A (b) C (d) E (f) G (h) I (j) K.",
    "skill": "Series alfabéticas simples",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Patrones alfabéticos"
  },
  {
    "id": "raz-bas-37",
    "sectionId": 3,
    "number": 37,
    "text": "Identifica la letra que sigue en la sucesión: Z, X, V, T, R, ___?",
    "options": [
      "P",
      "Q",
      "O",
      "N"
    ],
    "correctIndex": 0,
    "explanation": "La serie retrocede dos posiciones en el abecedario: Z, X, V, T, R, P.",
    "skill": "Series alfabéticas regresivas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Secuencias inversas"
  },
  {
    "id": "raz-bas-38",
    "sectionId": 3,
    "number": 38,
    "text": "¿Qué combinación continúa la serie: A1, B2, C3, D4, ___?",
    "options": [
      "E5",
      "F5",
      "E6",
      "D5"
    ],
    "correctIndex": 0,
    "explanation": "La letra avanza en orden alfabético correlativo (A, B, C, D, E) y el número avanza de 1 en 1 (1, 2, 3, 4, 5).",
    "skill": "Series alfanuméricas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Patrones alfanuméricos"
  },
  {
    "id": "raz-bas-39",
    "sectionId": 3,
    "number": 39,
    "text": "¿Qué elemento completa la secuencia: 2Z, 4Y, 6X, 8W, ___?",
    "options": [
      "10V",
      "10U",
      "12V",
      "9V"
    ],
    "correctIndex": 0,
    "explanation": "El número se incrementa de 2 en 2 (2, 4, 6, 8, 10) y la letra retrocede en el alfabeto (Z, Y, X, W, V).",
    "skill": "Series alfanuméricas inversas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Patrones mixtos"
  },
  {
    "id": "raz-bas-40",
    "sectionId": 3,
    "number": 40,
    "text": "Identifica la letra que falta en la serie: B, D, G, K, ___.",
    "options": [
      "P",
      "O",
      "Q",
      "N"
    ],
    "correctIndex": 0,
    "explanation": "El intervalo de letras omitidas aumenta de uno en uno: B (+1: c) D (+2: e, f) G (+3: h, i, j) K (+4: l, m, n, ñ) P.",
    "skill": "Series alfabéticas de paso creciente",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Patrones con salto variable"
  },
  {
    "id": "raz-bas-41",
    "sectionId": 3,
    "number": 41,
    "text": "¿Qué letra completa la secuencia: A, D, G, J, M, ___?",
    "options": [
      "P",
      "O",
      "Q",
      "N"
    ],
    "correctIndex": 0,
    "explanation": "Se avanza sumando 3 posiciones en el alfabeto: A (b, c) D (e, f) G (h, i) J (k, l) M (n, ñ) P.",
    "skill": "Progresiones alfabéticas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Abecedario"
  },
  {
    "id": "raz-bas-42",
    "sectionId": 3,
    "number": 42,
    "text": "Determina la pareja que continúa la serie: AB, CD, EF, GH, ___.",
    "options": [
      "IJ",
      "IK",
      "JK",
      "HI"
    ],
    "correctIndex": 0,
    "explanation": "Son pares de letras consecutivas que siguen el orden natural del alfabeto.",
    "skill": "Series de dígrafos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Pares de letras"
  },
  {
    "id": "raz-bas-43",
    "sectionId": 3,
    "number": 43,
    "text": "¿Qué trío de letras sigue en: CBA, FED, IHG, ___?",
    "options": [
      "LKJ",
      "KLM",
      "LKM",
      "MLK"
    ],
    "correctIndex": 0,
    "explanation": "Cada grupo de tres letras está invertido: ABC → CBA; DEF → FED; GHI → IHG; por tanto JKL → LKJ.",
    "skill": "Trigramas invertidos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Inversión de grupos"
  },
  {
    "id": "raz-bas-44",
    "sectionId": 3,
    "number": 44,
    "text": "¿Qué letra sigue en la secuencia: U, D, T, C, C, S, S, ___?",
    "options": [
      "O",
      "N",
      "D",
      "V"
    ],
    "correctIndex": 0,
    "explanation": "Representa las iniciales de los números: Uno, Dos, Tres, Cuatro, Cinco, Seis, Siete, Ocho (O).",
    "skill": "Series mnemotécnicas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Iniciales de palabras"
  },
  {
    "id": "raz-bas-45",
    "sectionId": 3,
    "number": 45,
    "text": "¿Qué letra continúa la serie de iniciales: L, M, M, J, V, S, ___?",
    "options": [
      "D",
      "L",
      "R",
      "F"
    ],
    "correctIndex": 0,
    "explanation": "Son las iniciales de los días de la semana: Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo (D).",
    "skill": "Series de calendario",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Temporal",
    "subtopic": "Días de la semana"
  },
  {
    "id": "raz-bas-46",
    "sectionId": 3,
    "number": 46,
    "text": "¿Qué letra sigue en la serie: E, F, M, A, M, J, J, A, S, O, N, ___?",
    "options": [
      "D",
      "E",
      "P",
      "F"
    ],
    "correctIndex": 0,
    "explanation": "Corresponde a las iniciales de los doce meses del año, culminando en Diciembre (D).",
    "skill": "Series cronológicas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Temporal",
    "subtopic": "Meses del año"
  },
  {
    "id": "raz-bas-47",
    "sectionId": 3,
    "number": 47,
    "text": "Completa la analogía alfabética: AZ es a BY como CX es a ___.",
    "options": [
      "DW",
      "DV",
      "EV",
      "CW"
    ],
    "correctIndex": 0,
    "explanation": "La primera letra avanza (A, B, C, D) y la segunda retrocede desde el final (Z, Y, X, W). Por tanto, DW.",
    "skill": "Analogías alfabéticas simétricas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Simetría alfabética"
  },
  {
    "id": "raz-bas-48",
    "sectionId": 3,
    "number": 48,
    "text": "¿Qué término continúa la serie: 1A, 3C, 5E, 7G, ___?",
    "options": [
      "9I",
      "9H",
      "8I",
      "11I"
    ],
    "correctIndex": 0,
    "explanation": "Los números son los impares (1, 3, 5, 7, 9) y las letras ocupan las posiciones impares del alfabeto (A=1, C=3, E=5, G=7, I=9).",
    "skill": "Correspondencia número-letra",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Impares y alfabeto"
  },
  {
    "id": "raz-bas-49",
    "sectionId": 3,
    "number": 49,
    "text": "Encuentra la letra que falta: C, F, I, L, Ñ, ___.",
    "options": [
      "R",
      "Q",
      "P",
      "S"
    ],
    "correctIndex": 0,
    "explanation": "Las letras avanzan de 3 en 3 en el abecedario: C(3), F(6), I(9), L(12), Ñ(15), R(18).",
    "skill": "Series regulares de letras",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Secuencias regulares"
  },
  {
    "id": "raz-bas-50",
    "sectionId": 3,
    "number": 50,
    "text": "¿Qué grupo continúa la serie: Aa, Bb, Cc, Dd, ___?",
    "options": [
      "Ee",
      "EF",
      "ee",
      "EE"
    ],
    "correctIndex": 0,
    "explanation": "El patrón mantiene la mayúscula seguida de su correspondiente minúscula en orden correlativo.",
    "skill": "Patrones tipográficos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Mayúsculas y minúsculas"
  },
  {
    "id": "raz-bas-51",
    "sectionId": 3,
    "number": 51,
    "text": "Médico es a Hospital como Profesor es a:",
    "options": [
      "Colegio",
      "Biblioteca",
      "Libro",
      "Oficina"
    ],
    "correctIndex": 0,
    "explanation": "La analogía vincula al profesional con su lugar habitual de trabajo.",
    "skill": "Analogía profesional-lugar",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Analogías de rol"
  },
  {
    "id": "raz-bas-52",
    "sectionId": 3,
    "number": 52,
    "text": "Pez es a Agua como Pájaro es a:",
    "options": [
      "Aire",
      "Nido",
      "Árbol",
      "Pluma"
    ],
    "correctIndex": 0,
    "explanation": "Relación del ser vivo con el medio físico habitual en el que se desplaza.",
    "skill": "Analogía ser-medio",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Medio de desplazamiento"
  },
  {
    "id": "raz-bas-53",
    "sectionId": 3,
    "number": 53,
    "text": "Semilla es a Árbol como Huevo es a:",
    "options": [
      "Ave",
      "Nido",
      "Cáscara",
      "Pluma"
    ],
    "correctIndex": 0,
    "explanation": "Relación de origen y desarrollo biológico: el árbol germina de la semilla como el ave nace del huevo.",
    "skill": "Analogía de origen",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Desarrollo biológico"
  },
  {
    "id": "raz-bas-54",
    "sectionId": 3,
    "number": 54,
    "text": "Martillo es a Clavo como Destornillador es a:",
    "options": [
      "Tornillo",
      "Tuerca",
      "Madera",
      "Taladro"
    ],
    "correctIndex": 0,
    "explanation": "Relación de herramienta e instrumento con el elemento de fijación específico sobre el que opera.",
    "skill": "Analogía herramienta-objeto",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Instrumentos"
  },
  {
    "id": "raz-bas-55",
    "sectionId": 3,
    "number": 55,
    "text": "Volante es a Automóvil como Timón es a:",
    "options": [
      "Barco",
      "Avión",
      "Bicicleta",
      "Tren"
    ],
    "correctIndex": 0,
    "explanation": "Ambos elementos son los mecanismos directrices de control de dirección de sus respectivos vehículos.",
    "skill": "Analogía parte-todo funcional",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Componentes funcionales"
  },
  {
    "id": "raz-bas-56",
    "sectionId": 3,
    "number": 56,
    "text": "Día es a Noche como Luz es a:",
    "options": [
      "Oscuridad",
      "Lámpara",
      "Sol",
      "Claridad"
    ],
    "correctIndex": 0,
    "explanation": "Relación de antonimia o estados complementarios y opuestos.",
    "skill": "Analogía de antonimia",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Antónimos conceptuales"
  },
  {
    "id": "raz-bas-57",
    "sectionId": 3,
    "number": 57,
    "text": "Lunes es a Primero como Domingo es a:",
    "options": [
      "Séptimo",
      "Último",
      "Segundo",
      "Sexto"
    ],
    "correctIndex": 0,
    "explanation": "En la numeración ordinal de los días de la semana conforme a la norma ISO, el lunes es 1º y el domingo 7º.",
    "skill": "Relaciones ordinales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Temporal",
    "subtopic": "Días y orden"
  },
  {
    "id": "raz-bas-58",
    "sectionId": 3,
    "number": 58,
    "text": "Guitarra es a Cuerda como Flauta es a:",
    "options": [
      "Viento",
      "Teclado",
      "Madera",
      "Percusión"
    ],
    "correctIndex": 0,
    "explanation": "Clasificación organológica de los instrumentos musicales por la fuente generadora del sonido.",
    "skill": "Analogía de clasificación",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Instrumentos musicales"
  },
  {
    "id": "raz-bas-59",
    "sectionId": 3,
    "number": 59,
    "text": "Kilómetro es a Distancia como Kilogramo es a:",
    "options": [
      "Masa o peso",
      "Volumen",
      "Velocidad",
      "Tiempo"
    ],
    "correctIndex": 0,
    "explanation": "Relación entre unidad de medida del Sistema Internacional y la magnitud física que mide.",
    "skill": "Analogía unidad-magnitud",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Sistema de unidades"
  },
  {
    "id": "raz-bas-60",
    "sectionId": 3,
    "number": 60,
    "text": "Termómetro es a Temperatura como Barómetro es a:",
    "options": [
      "Presión atmosférica",
      "Humedad",
      "Viento",
      "Lluvia"
    ],
    "correctIndex": 0,
    "explanation": "Relación entre instrumento de medición científica y la variable ambiental cuantificada.",
    "skill": "Analogía instrumento-variable",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Metrología"
  },
  {
    "id": "raz-bas-61",
    "sectionId": 3,
    "number": 61,
    "text": "Pintor es a Cuadro como Poeta es a:",
    "options": [
      "Poema",
      "Libro",
      "Verso",
      "Pluma"
    ],
    "correctIndex": 0,
    "explanation": "Relación entre el artista y la obra creada resultante de su actividad creadora.",
    "skill": "Analogía autor-obra",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Creación artística"
  },
  {
    "id": "raz-bas-62",
    "sectionId": 3,
    "number": 62,
    "text": "León es a Carnívoro como Vaca es a:",
    "options": [
      "Herbívoro",
      "Mamífero",
      "Omnívoro",
      "Rumiante"
    ],
    "correctIndex": 0,
    "explanation": "Relación de especie animal con su régimen trófico primario.",
    "skill": "Analogía biológica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Alimentación animal"
  },
  {
    "id": "raz-bas-63",
    "sectionId": 3,
    "number": 63,
    "text": "Página es a Libro como Tecla es a:",
    "options": [
      "Teclado",
      "Pantalla",
      "Computadora",
      "Mouse"
    ],
    "correctIndex": 0,
    "explanation": "Relación analógica de parte a todo individualizado.",
    "skill": "Analogía parte-todo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Verbal",
    "subtopic": "Estructuras"
  },
  {
    "id": "raz-bas-64",
    "sectionId": 3,
    "number": 64,
    "text": "Norte es a Sur como Este es a:",
    "options": [
      "Oeste",
      "Oriente",
      "Occidente",
      "Cenit"
    ],
    "correctIndex": 0,
    "explanation": "Relación de polaridad espacial y puntos cardinales opuestos.",
    "skill": "Puntos cardinales opuestos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Orientación espacial"
  },
  {
    "id": "raz-bas-65",
    "sectionId": 3,
    "number": 65,
    "text": "Sed es a Agua como Hambre es a:",
    "options": [
      "Comida",
      "Pan",
      "Fruta",
      "Apetito"
    ],
    "correctIndex": 0,
    "explanation": "Relación de necesidad fisiológica con el elemento básico que la satisface.",
    "skill": "Analogía necesidad-satisfactor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Necesidades vitales"
  },
  {
    "id": "raz-bas-66",
    "sectionId": 3,
    "number": 66,
    "text": "Un cuadrado tiene 4 vértices. ¿Cuántos vértices tiene un hexágono regular?",
    "options": [
      "6",
      "8",
      "5",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Por definición geométrica, un hexágono es un polígono de 6 lados y 6 vértices.",
    "skill": "Propiedades de polígonos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Vértices y lados"
  },
  {
    "id": "raz-bas-67",
    "sectionId": 3,
    "number": 67,
    "text": "Si una figura gira 90° en sentido horario cuatro veces consecutivas, ¿cuál es su posición final respecto a la original?",
    "options": [
      "Exactamente en la misma posición original (360°)",
      "Invertida a 180°",
      "Girada 90° a la derecha",
      "Girada 270° a la izquierda"
    ],
    "correctIndex": 0,
    "explanation": "Cuatro giros de 90° completan un giro entero de 360°, regresando a la orientación de partida.",
    "skill": "Rotaciones en el plano",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Giros angulares"
  },
  {
    "id": "raz-bas-68",
    "sectionId": 3,
    "number": 68,
    "text": "¿Cuántas caras planas tiene un dado cúbico estándar?",
    "options": [
      "6",
      "8",
      "12",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Un cubo regular consta de exactamente 6 caras cuadradas idénticas.",
    "skill": "Geometría del cubo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Poliedros regulares"
  },
  {
    "id": "raz-bas-69",
    "sectionId": 3,
    "number": 69,
    "text": "En un dado tradicional de seis caras, la suma de los puntos en caras opuestas siempre es igual a:",
    "options": [
      "7",
      "6",
      "8",
      "9"
    ],
    "correctIndex": 0,
    "explanation": "En la construcción normativa de dados de juego, las caras opuestas siempre suman 7 (1 con 6, 2 con 5, 3 con 4).",
    "skill": "Propiedad del dado",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Dados de juego"
  },
  {
    "id": "raz-bas-70",
    "sectionId": 3,
    "number": 70,
    "text": "¿Cuántos triángulos pequeños individuales hay en una figura formada por un triángulo grande dividido por dos líneas medianas en 4 triángulos?",
    "options": [
      "4",
      "3",
      "5",
      "6"
    ],
    "correctIndex": 0,
    "explanation": "Al unir los puntos medios de los tres lados de un triángulo, se generan exactamente 4 triángulos pequeños congruentes.",
    "skill": "Conteo de figuras",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Subdivisión geométrica"
  },
  {
    "id": "raz-bas-71",
    "sectionId": 3,
    "number": 71,
    "text": "Si miras una pirámide de base cuadrada directamente desde arriba (vista en planta), ¿qué figura geométrica observas?",
    "options": [
      "Un cuadrado dividido en cuatro triángulos con un punto central",
      "Un triángulo simple",
      "Un círculo con una cruz",
      "Un rectángulo alargado"
    ],
    "correctIndex": 0,
    "explanation": "La vista cenital muestra la base cuadrada y las 4 aristas laterales que convergen en el vértice superior central formando 4 triángulos.",
    "skill": "Vistas ortogonales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Vista en planta"
  },
  {
    "id": "raz-bas-72",
    "sectionId": 3,
    "number": 72,
    "text": "¿Qué figura se obtiene al cortar horizontalmente un cilindro recto paralelo a su base?",
    "options": [
      "Un círculo idéntico a las bases",
      "Un óvalo o elipse",
      "Un rectángulo",
      "Un triángulo"
    ],
    "correctIndex": 0,
    "explanation": "Cualquier sección transversal paralela a la base de un cilindro recto circular produce un círculo idéntico a su base.",
    "skill": "Secciones de sólidos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Cortes en sólidos"
  },
  {
    "id": "raz-bas-73",
    "sectionId": 3,
    "number": 73,
    "text": "Si una figura tiene simetría axial respecto a un eje vertical, la parte derecha de la figura es:",
    "options": [
      "Un reflejo especular invertido de la parte izquierda",
      "Una copia idéntica trasladada sin invertir",
      "Una rotación de 180° de la izquierda",
      "Una figura de menor tamaño"
    ],
    "correctIndex": 0,
    "explanation": "La simetría axial funciona como un espejo: cada punto de un lado tiene su simétrico a la misma distancia de la línea central en sentido contrario.",
    "skill": "Simetría axial",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Ejes de simetría"
  },
  {
    "id": "raz-bas-74",
    "sectionId": 3,
    "number": 74,
    "text": "¿Cuál es el número total de aristas de una pirámide de base triangular (tetraedro regular)?",
    "options": [
      "6",
      "4",
      "8",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "Un tetraedro tiene 3 aristas en la base y 3 aristas laterales que suben al vértice, dando un total de 6 aristas.",
    "skill": "Aristas de poliedros",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Tetraedro"
  },
  {
    "id": "raz-bas-75",
    "sectionId": 3,
    "number": 75,
    "text": "Un reloj analógico marca exactamente las 3:00. ¿Qué ángulo forman entre sí el horario y el minutero?",
    "options": [
      "90°",
      "120°",
      "60°",
      "180°"
    ],
    "correctIndex": 0,
    "explanation": "La esfera del reloj tiene 360° divididos en 12 horas (30° por hora). A las 3:00 hay 3 horas de separación: 3 × 30° = 90° (ángulo recto).",
    "skill": "Ángulos en el reloj",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Geometría del reloj"
  },
  {
    "id": "raz-bas-76",
    "sectionId": 3,
    "number": 76,
    "text": "A las 6:00 en punto, ¿qué ángulo forman las manecillas del reloj?",
    "options": [
      "180° (ángulo llano)",
      "90°",
      "120°",
      "360°"
    ],
    "correctIndex": 0,
    "explanation": "A las 6:00, el minutero apunta al 12 y el horario al 6, situándose en línea recta diametralmente opuestos (180°).",
    "skill": "Ángulo llano en reloj",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Manecillas del reloj"
  },
  {
    "id": "raz-bas-77",
    "sectionId": 3,
    "number": 77,
    "text": "Si desarmamos una caja de cartón cúbica sin tapas, ¿cuántos cuadrados unidos forman su plantilla plana?",
    "options": [
      "5",
      "6",
      "4",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Una caja cúbica completa tiene 6 caras; si carece de tapa superior, consta exactamente de 5 caras cuadradas (la base y 4 laterales).",
    "skill": "Despliegue de sólidos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Espacial",
    "subtopic": "Plantillas de cuerpos"
  },
  {
    "id": "raz-bas-78",
    "sectionId": 3,
    "number": 78,
    "text": "En una fila de 10 personas, Carlos ocupa el cuarto lugar contando desde el inicio. ¿Qué lugar ocupa contando desde el final?",
    "options": [
      "Séptimo",
      "Sexto",
      "Octavo",
      "Quinto"
    ],
    "correctIndex": 0,
    "explanation": "La fórmula de posición inversa es: Total - Posición + 1 = 10 - 4 + 1 = 7º lugar.",
    "skill": "Ordenamiento lineal",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Matemática",
    "subtopic": "Posición ordinal"
  },
  {
    "id": "raz-bas-79",
    "sectionId": 3,
    "number": 79,
    "text": "Si Juan es más alto que Pedro, y Pedro es más alto que Luis, ¿cuál de las siguientes afirmaciones es necesariamente verdadera?",
    "options": [
      "Juan es más alto que Luis",
      "Luis es más alto que Juan",
      "Pedro es el más alto de los tres",
      "Juan y Luis tienen la misma estatura"
    ],
    "correctIndex": 0,
    "explanation": "Por la propiedad transitiva del orden estricto de estatura: Juan > Pedro > Luis implica necesariamente que Juan > Luis.",
    "skill": "Propiedad transitiva",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Deductiva",
    "subtopic": "Ordenamiento relativo"
  },
  {
    "id": "raz-bas-80",
    "sectionId": 3,
    "number": 80,
    "text": "En una mesa redonda de 4 sillas numeradas, Ana se sienta frente a Beto, y Carlos está a la derecha de Ana. ¿Quién está frente a Carlos?",
    "options": [
      "David (la cuarta persona)",
      "Ana",
      "Beto",
      "Nadie"
    ],
    "correctIndex": 0,
    "explanation": "Ana y Beto están opuestos entre sí; las otras dos posiciones opuestas deben estar ocupadas por Carlos y la cuarta persona (David).",
    "skill": "Ordenamiento circular",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Distribución circular"
  },
  {
    "id": "raz-bas-81",
    "sectionId": 3,
    "number": 81,
    "text": "Todos los mamíferos respiran oxígeno. Las ballenas son mamíferos. Por lo tanto:",
    "options": [
      "Las ballenas respiran oxígeno",
      "Las ballenas no son animales acuáticos",
      "Solo los mamíferos respiran oxígeno",
      "Los peces son ballenas"
    ],
    "correctIndex": 0,
    "explanation": "Silogismo deductivo clásico en modo Barbara (AAA-1): Todo M es P; Todo S es M; luego Todo S es P.",
    "skill": "Silogismo categórico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Formal",
    "subtopic": "Deducción lógica"
  },
  {
    "id": "raz-bas-82",
    "sectionId": 3,
    "number": 82,
    "text": "Ningún reptil tiene plumas. Todas las serpientes son reptiles. Por lo tanto:",
    "options": [
      "Ninguna serpiente tiene plumas",
      "Algunas serpientes tienen plumas",
      "Todos los animales con plumas son serpientes",
      "Las serpientes son aves"
    ],
    "correctIndex": 0,
    "explanation": "Silogismo válido en modo Celarent (EAE-1): Ningún M es P; Todo S es M; luego Ningún S es P.",
    "skill": "Silogismo universal negativo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Formal",
    "subtopic": "Deducción categórica"
  },
  {
    "id": "raz-bas-83",
    "sectionId": 3,
    "number": 83,
    "text": "Si todos los gatos son felinos y algunos felinos son salvajes, ¿cuál de las siguientes afirmaciones es correcta?",
    "options": [
      "Algunos felinos no son domésticos",
      "Todos los felinos son gatos",
      "Todos los gatos son salvajes",
      "Ningún gato es felino"
    ],
    "correctIndex": 0,
    "explanation": "De las premisas se deduce que al haber felinos salvajes, existen felinos que no pertenecen al ámbito doméstico.",
    "skill": "Inferencia de cuantificadores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Deductiva",
    "subtopic": "Cuantificadores particulares"
  },
  {
    "id": "raz-bas-84",
    "sectionId": 3,
    "number": 84,
    "text": "Si la afirmación 'Todos los cisnes son blancos' es falsa, ¿qué proposición es necesariamente verdadera?",
    "options": [
      "Existe al menos un cisne que no es blanco",
      "Todos los cisnes son negros",
      "Ningún cisne es blanco",
      "Los cisnes no existen"
    ],
    "correctIndex": 0,
    "explanation": "La negación lógica de un cuantificador universal afirmativo ('Para todo x, P(x)') es un cuantificador existencial negativo ('Existe un x tal que no P(x)').",
    "skill": "Negación de cuantificadores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Proposicional",
    "subtopic": "Cuadro de oposición"
  },
  {
    "id": "raz-bas-85",
    "sectionId": 3,
    "number": 85,
    "text": "En un grupo de 30 estudiantes, 18 juegan fútbol y 15 juegan básquet. Si 8 juegan ambos deportes, ¿cuántos juegan solo fútbol?",
    "options": [
      "10",
      "18",
      "7",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "Los que juegan solo fútbol corresponden al total de futbolistas menos los que practican ambos: 18 - 8 = 10.",
    "skill": "Diagramas de Venn simples",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Intersección de dos conjuntos"
  },
  {
    "id": "raz-bas-86",
    "sectionId": 3,
    "number": 86,
    "text": "En una clase de 25 alumnos, 20 aprobaron Matemáticas y 18 aprobaron Historia. Si todos aprobaron al menos una materia, ¿cuántos aprobaron ambas?",
    "options": [
      "13",
      "15",
      "10",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "Por el principio de inclusión-exclusión: n(A ∩ B) = n(A) + n(B) - n(A ∪ B) = 20 + 18 - 25 = 38 - 25 = 13.",
    "skill": "Principio de inclusión-exclusión",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Cardinalidad"
  },
  {
    "id": "raz-bas-87",
    "sectionId": 3,
    "number": 87,
    "text": "Si 'A implica B' es una regla verdadera, y sabemos que ocurrió A, ¿qué podemos concluir con absoluta certeza?",
    "options": [
      "Ocurrió B (Modus Ponens)",
      "No ocurrió B",
      "Ocurrió A porque ocurrió B",
      "Nada sobre B"
    ],
    "correctIndex": 0,
    "explanation": "La regla de inferencia Modus Ponendo Ponens establece que afirmando el antecedente de un condicional se afirma válidamente el consecuente.",
    "skill": "Modus Ponens básico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Proposicional",
    "subtopic": "Reglas de inferencia"
  },
  {
    "id": "raz-bas-88",
    "sectionId": 3,
    "number": 88,
    "text": "Si 'Si llueve, el suelo se moja'. El suelo no está mojado. ¿Qué se deduce lógicamente?",
    "options": [
      "No llovió (Modus Tollens)",
      "Llovió mucho",
      "El suelo se secará pronto",
      "Va a llover mañana"
    ],
    "correctIndex": 0,
    "explanation": "Por Modus Tollendo Tollens: negando el consecuente se niega válidamente el antecedente.",
    "skill": "Modus Tollens básico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Proposicional",
    "subtopic": "Reglas de inferencia"
  },
  {
    "id": "raz-bas-89",
    "sectionId": 3,
    "number": 89,
    "text": "Dada la proposición: 'No es cierto que (Juan está en Quito y en Guayaquil al mismo tiempo)'. Esto se fundamenta en el principio lógico de:",
    "options": [
      "No contradicción",
      "Identidad",
      "Tercero excluido",
      "Razón suficiente"
    ],
    "correctIndex": 0,
    "explanation": "El principio de no contradicción estipula que una proposición no puede ser verdadera y falsa simultáneamente bajo el mismo respecto.",
    "skill": "Principios lógicos clásicos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Formal",
    "subtopic": "Principio de no contradicción"
  },
  {
    "id": "raz-bas-90",
    "sectionId": 3,
    "number": 90,
    "text": "Una madre tiene 3 hijos varones, y cada hijo varón tiene una hermana. ¿Cuántos hijos tiene la madre en total?",
    "options": [
      "4 hijos (3 varones y 1 mujer)",
      "6 hijos",
      "5 hijos",
      "3 hijos"
    ],
    "correctIndex": 0,
    "explanation": "La hermana es común a los tres hermanos varones. Por lo tanto son 3 varones + 1 mujer = 4 hijos en total.",
    "skill": "Acertijos de parentesco",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Relaciones familiares"
  },
  {
    "id": "raz-bas-91",
    "sectionId": 3,
    "number": 91,
    "text": "El hermano del único hijo de mi padre es:",
    "options": [
      "Mi hermano",
      "Mi tío",
      "Mi sobrino",
      "Mi abuelo"
    ],
    "correctIndex": 0,
    "explanation": "El único hijo de mi padre (si soy varón) soy yo mismo, o un hermano si se refiere en sentido amplio; su hermano es simplemente 'mi hermano'.",
    "skill": "Parentesco deductivo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Relacional",
    "subtopic": "Árbol genealógico"
  },
  {
    "id": "raz-bas-92",
    "sectionId": 3,
    "number": 92,
    "text": "¿Qué día fue ayer si el mañana de ayer de pasado mañana es jueves?",
    "options": [
      "Martes",
      "Miércoles",
      "Jueves",
      "Lunes"
    ],
    "correctIndex": 0,
    "explanation": "Analizando desde hoy (0): mañana (+1) de ayer (-1) de pasado mañana (+2) = 0 + 1 - 1 + 2 = +2. Si pasado mañana es jueves, hoy es martes. Por tanto, ayer fue lunes.",
    "skill": "Lógica de relaciones temporales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Temporal",
    "subtopic": "Relaciones de días"
  },
  {
    "id": "raz-bas-93",
    "sectionId": 3,
    "number": 93,
    "text": "Si anteayer fue lunes, ¿qué día será el día inmediatamente posterior a mañana?",
    "options": [
      "Viernes",
      "Jueves",
      "Sábado",
      "Domingo"
    ],
    "correctIndex": 0,
    "explanation": "Si anteayer (-2) fue lunes, hoy (0) es miércoles. Mañana (+1) es jueves, y el posterior a mañana (+2) será viernes.",
    "skill": "Cálculo de días relativos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Temporal",
    "subtopic": "Días de la semana"
  },
  {
    "id": "raz-bas-94",
    "sectionId": 3,
    "number": 94,
    "text": "Tres amigos (Mario, Lucas y Denis) tienen profesiones distintas: médico, abogado e ingeniero. Si Mario no es médico y Lucas no es ingeniero ni médico, ¿qué profesión tiene Lucas?",
    "options": [
      "Abogado",
      "Médico",
      "Ingeniero",
      "Profesor"
    ],
    "correctIndex": 0,
    "explanation": "Si Lucas no es ingeniero ni médico, por descarte obligatorio debe ser el abogado.",
    "skill": "Cuadros de doble entrada",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Deductiva",
    "subtopic": "Asignación de atributos"
  },
  {
    "id": "raz-bas-95",
    "sectionId": 3,
    "number": 95,
    "text": "Si todos los cuadrados son cuadriláteros, y ningún cuadrilátero es triángulo, ¿cuál es la conclusión válida?",
    "options": [
      "Ningún cuadrado es triángulo",
      "Algunos cuadrados son triángulos",
      "Todos los triángulos son cuadrados",
      "No se puede concluir nada"
    ],
    "correctIndex": 0,
    "explanation": "Silogismo categórico válido en modo Camestres/Cesare: la exclusión total de cuadriláteros y triángulos excluye necesariamente a los cuadrados de ser triángulos.",
    "skill": "Silogismos negativos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Formal",
    "subtopic": "Deducción categórica"
  },
  {
    "id": "raz-bas-96",
    "sectionId": 3,
    "number": 96,
    "text": "¿Qué conclusión se sigue de: 'Ningún fósil está vivo' y 'Este objeto está vivo'?",
    "options": [
      "Este objeto no es un fósil",
      "Este objeto es un fósil antiguo",
      "Los fósiles viven bajo tierra",
      "Todos los objetos son fósiles"
    ],
    "correctIndex": 0,
    "explanation": "Por exclusión categórica inmediata, al poseer la propiedad contradictoria con la definición de fósil, no puede ser un fósil.",
    "skill": "Silogismo singular",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Deductiva",
    "subtopic": "Inferencia inmediata"
  },
  {
    "id": "raz-bas-97",
    "sectionId": 3,
    "number": 97,
    "text": "Si decimos: 'O estudias o trabajas' (disyunción excluyente), y sabemos que la persona no trabaja, entonces:",
    "options": [
      "Necesariamente estudia",
      "No estudia ni trabaja",
      "Trabaja a tiempo parcial",
      "No se puede saber qué hace"
    ],
    "correctIndex": 0,
    "explanation": "Por el silogismo disyuntivo, al negar uno de los miembros de una disyunción, se afirma categóricamente el miembro restante.",
    "skill": "Silogismo disyuntivo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lógica Proposicional",
    "subtopic": "Disyunción"
  },
  {
    "id": "raz-bas-98",
    "sectionId": 3,
    "number": 98,
    "text": "¿Cuántos cortes rectos son necesarios como mínimo para dividir una cuerda de 12 metros en 6 trozos iguales de 2 metros cada uno?",
    "options": [
      "5 cortes",
      "6 cortes",
      "4 cortes",
      "7 cortes"
    ],
    "correctIndex": 0,
    "explanation": "Para obtener n trozos de una línea abierta se requieren n - 1 cortes: 6 - 1 = 5 cortes.",
    "skill": "Problemas de cortes y estacas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Cortes en líneas abiertas"
  },
  {
    "id": "raz-bas-99",
    "sectionId": 3,
    "number": 99,
    "text": "A lo largo de una avenida recta de 100 metros se plantan postes cada 10 metros, colocando un poste al inicio y uno al final. ¿Cuántos postes se colocan?",
    "options": [
      "11 postes",
      "10 postes",
      "9 postes",
      "12 postes"
    ],
    "correctIndex": 0,
    "explanation": "Número de postes = (Longitud total / Distancia entre postes) + 1 = (100 / 10) + 1 = 10 + 1 = 11 postes.",
    "skill": "Problemas de postes e intervalos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Matemático",
    "subtopic": "Intervalos cerrados"
  },
  {
    "id": "raz-bas-100",
    "sectionId": 3,
    "number": 100,
    "text": "Si un caracol sube 3 metros de una pared cada día pero resbala 2 metros cada noche, ¿en cuántos días alcanzará la cima de un muro de 10 metros?",
    "options": [
      "8 días",
      "10 días",
      "7 días",
      "9 días"
    ],
    "correctIndex": 0,
    "explanation": "Cada ciclo completo de 24 horas avanza 1 metro neto. Al término del día 7 está a 7 metros. El día 8 sube 3 metros: 7 + 3 = 10 metros y llega a la cima sin resbalar.",
    "skill": "Problema clásico del caracol",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Razonamiento Lógico",
    "subtopic": "Avance neto y parada"
  }
];
