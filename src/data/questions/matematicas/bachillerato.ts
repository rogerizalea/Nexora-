import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE MATEMÁTICAS - NIVEL BACHILLERATO (100 Reactivos)
 */
export const MATEMATICAS_BACHILLERATO: Question[] = [
  {
    "id": "mat-bac-1",
    "sectionId": 1,
    "number": 41,
    "text": "¿Cuáles son las raíces reales de la ecuación cuadrática 2x² - 8x + 6 = 0?",
    "options": [
      "x = 1 y x = 3",
      "x = -1 y x = -3",
      "x = 2 y x = 4",
      "x = 0 y x = 6"
    ],
    "correctIndex": 0,
    "explanation": "Dividiendo entre 2: x² - 4x + 3 = 0. Factorizando: (x - 1)(x - 3) = 0. Las soluciones son x₁ = 1 y x₂ = 3.",
    "skill": "Ecuaciones Cuadráticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Ecuaciones Polinómicas"
  },
  {
    "id": "mat-bac-2",
    "sectionId": 1,
    "number": 42,
    "text": "¿Cuál es el valor del logaritmo log₂(32) + log₃(81)?",
    "options": [
      "8",
      "9",
      "7",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "Como 2⁵ = 32, log₂(32) = 5. Como 3⁴ = 81, log₃(81) = 4. La suma es 5 + 4 = 9.",
    "skill": "Propiedades de Logaritmos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones Trascendentes",
    "subtopic": "Logaritmos"
  },
  {
    "id": "mat-bac-3",
    "sectionId": 1,
    "number": 43,
    "text": "Si sen(θ) = 3/5 en un triángulo rectángulo en el primer cuadrante, ¿cuál es el valor de cos(θ)?",
    "options": [
      "4/5",
      "2/5",
      "5/4",
      "3/4"
    ],
    "correctIndex": 0,
    "explanation": "Por la identidad sen²(θ) + cos²(θ) = 1: cos(θ) = √(1 - (3/5)²) = √(1 - 9/25) = √(16/25) = 4/5.",
    "skill": "Identidades Trigonométricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Razones Trigonométricas"
  },
  {
    "id": "mat-bac-4",
    "sectionId": 1,
    "number": 44,
    "text": "¿Cuál es el vértice de la parábola cuya función cuadrática es f(x) = x² - 6x + 13?",
    "options": [
      "V(3, 4)",
      "V(-3, 4)",
      "V(3, -4)",
      "V(6, 13)"
    ],
    "correctIndex": 0,
    "explanation": "La coordenada x del vértice es x_v = -b / (2a) = -(-6) / (2·1) = 6 / 2 = 3. Evaluando f(3): 3² - 6(3) + 13 = 9 - 18 + 13 = 4. Vértice: V(3, 4).",
    "skill": "Funciones Cuadráticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones",
    "subtopic": "Parábolas"
  },
  {
    "id": "mat-bac-5",
    "sectionId": 1,
    "number": 45,
    "text": "¿Cuál es la ecuación general de la recta que pasa por el punto P(1, 4) y tiene una pendiente m = 3?",
    "options": [
      "3x - y + 1 = 0",
      "3x + y - 7 = 0",
      "x - 3y + 11 = 0",
      "3x - y - 1 = 0"
    ],
    "correctIndex": 0,
    "explanation": "Por la forma punto-pendiente y - y₁ = m(x - x₁): y - 4 = 3(x - 1) => y - 4 = 3x - 3 => 3x - y + 1 = 0.",
    "skill": "Ecuación de la Recta",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Línea Recta"
  },
  {
    "id": "mat-bac-6",
    "sectionId": 1,
    "number": 46,
    "text": "¿Cuál es el dominio de la función real con radical f(x) = √(2x - 8)?",
    "options": [
      "[4, +∞)",
      "(4, +∞)",
      "(-∞, 4]",
      "[0, +∞)"
    ],
    "correctIndex": 0,
    "explanation": "El radicando debe ser mayor o igual a cero: 2x - 8 ≥ 0 => 2x ≥ 8 => x ≥ 4. El dominio en notación de intervalo es [4, +∞).",
    "skill": "Dominio de Funciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones",
    "subtopic": "Funciones Radicales"
  },
  {
    "id": "mat-bac-7",
    "sectionId": 1,
    "number": 47,
    "text": "¿Cuál es el valor del radio de la circunferencia dada por la ecuación x² + y² - 4x + 6y - 12 = 0?",
    "options": [
      "r = 5",
      "r = 25",
      "r = √12",
      "r = 4"
    ],
    "correctIndex": 0,
    "explanation": "Completando cuadrados: (x - 2)² - 4 + (y + 3)² - 9 - 12 = 0 => (x - 2)² + (y + 3)² = 25. Como r² = 25, entonces el radio es r = 5.",
    "skill": "Geometría Analítica de la Circunferencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cónicas",
    "subtopic": "Circunferencia"
  },
  {
    "id": "mat-bac-8",
    "sectionId": 1,
    "number": 48,
    "text": "En una progresión geométrica, el primer término es a₁ = 2 y la razón común es r = 3. ¿Cuál es el valor del quinto término a₅?",
    "options": [
      "162",
      "486",
      "54",
      "81"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula del término general en progresión geométrica: aₙ = a₁ · r^(n-1). Para n = 5: a₅ = 2 · 3^(5-1) = 2 · 3⁴ = 2 · 81 = 162.",
    "skill": "Progresiones Geométricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Sucesiones",
    "subtopic": "Progresión Geométrica"
  },
  {
    "id": "mat-bac-9",
    "sectionId": 1,
    "number": 49,
    "text": "¿Cuál es el valor exacto de sen(2θ) si se sabe que sen(θ) = 3/5 y cos(θ) = 4/5?",
    "options": [
      "24/25",
      "12/25",
      "7/25",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Por la identidad del ángulo doble: sen(2θ) = 2 · sen(θ) · cos(θ) = 2 · (3/5) · (4/5) = 2 · (12/25) = 24/25.",
    "skill": "Identidades de Ángulo Doble",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Ángulo Doble"
  },
  {
    "id": "mat-bac-10",
    "sectionId": 1,
    "number": 50,
    "text": "¿De cuántas maneras diferentes se pueden sentar 5 personas en una fila de 5 asientos disponibles?",
    "options": [
      "120",
      "25",
      "60",
      "720"
    ],
    "correctIndex": 0,
    "explanation": "Se trata de una permutación de 5 elementos: P₅ = 5! = 5 × 4 × 3 × 2 × 1 = 120 maneras.",
    "skill": "Combinatoria y Permutaciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad y Combinatoria",
    "subtopic": "Permutaciones"
  },
  {
    "id": "mat-bac-11",
    "sectionId": 1,
    "number": 51,
    "text": "¿Cuál es la solución del sistema lineal 3x3:\n{ x + y + z = 6\n{ 2x - y + z = 3\n{ x + 2y - z = 2?",
    "options": [
      "x = 1, y = 2, z = 3",
      "x = 2, y = 1, z = 3",
      "x = 3, y = 2, z = 1",
      "x = 1, y = 1, z = 4"
    ],
    "correctIndex": 0,
    "explanation": "Sumando la 1ª y 3ª: 2x + 3y = 8. Sumando 1ª y 2ª: 3x + 2z = 9. Resolviendo por determinantes o eliminación sucesiva resulta x = 1, y = 2, z = 3.",
    "skill": "Sistemas Lineales 3x3",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Método de Gauss"
  },
  {
    "id": "mat-bac-12",
    "sectionId": 1,
    "number": 52,
    "text": "Al simplificar la expresión racional (x² - 9) / (x² - x - 6) para x ≠ 3 y x ≠ -2, ¿qué resulta?",
    "options": [
      "(x + 3)/(x + 2)",
      "(x - 3)/(x + 2)",
      "(x + 3)/(x - 2)",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Factorizando numerador: x² - 9 = (x + 3)(x - 3). Factorizando denominador: x² - x - 6 = (x - 3)(x + 2). Cancelando (x - 3): (x + 3) / (x + 2).",
    "skill": "Fracciones Algebraicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Simplificación Racional"
  },
  {
    "id": "mat-bac-13",
    "sectionId": 1,
    "number": 53,
    "text": "¿Cuál es la longitud del lado c en un triángulo oblicuángulo si a = 7 cm, b = 5 cm y el ángulo comprendido C = 60°? (Usa la Ley de Cosenos: c² = a² + b² - 2ab·cos(C)).",
    "options": [
      "√39 cm (aprox. 6.24 cm)",
      "√74 cm",
      "6 cm",
      "√49 cm"
    ],
    "correctIndex": 0,
    "explanation": "Por Ley de Cosenos: c² = 7² + 5² - 2(7)(5)·cos(60°) = 49 + 25 - 70(0.5) = 74 - 35 = 39. Por tanto, c = √39 cm.",
    "skill": "Ley de Cosenos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Triángulos Oblicuángulos"
  },
  {
    "id": "mat-bac-14",
    "sectionId": 1,
    "number": 54,
    "text": "¿Cuál es el período fundamental de la función trigonométrica f(x) = sen(4x)?",
    "options": [
      "π/2",
      "2π",
      "π",
      "4π"
    ],
    "correctIndex": 0,
    "explanation": "El período de sen(bx) es T = 2π / |b|. Para b = 4: T = 2π / 4 = π/2 radianes.",
    "skill": "Análisis de Funciones Periódicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Funciones Periódicas"
  },
  {
    "id": "mat-bac-15",
    "sectionId": 1,
    "number": 55,
    "text": "¿Cuál es el valor de la suma de los primeros 20 términos de la progresión aritmética 2, 5, 8, 11, ...?",
    "options": [
      "610",
      "590",
      "620",
      "600"
    ],
    "correctIndex": 0,
    "explanation": "a₁ = 2, d = 3. El término 20 es a₂₀ = 2 + 19·3 = 2 + 57 = 59. La suma es S₂₀ = (n/2)(a₁ + a₂₀) = (20/2)(2 + 59) = 10 · 61 = 610.",
    "skill": "Sumatoria de Progresiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Series Aritméticas"
  },
  {
    "id": "mat-bac-16",
    "sectionId": 1,
    "number": 56,
    "text": "¿Cuál es la ecuación de la asíntota vertical de la función racional f(x) = (2x + 1) / (x - 5)?",
    "options": [
      "x = 5",
      "x = -5",
      "y = 2",
      "y = 5"
    ],
    "correctIndex": 0,
    "explanation": "La asíntota vertical ocurre donde el denominador se anula y el numerador no es cero: x - 5 = 0 => x = 5.",
    "skill": "Asíntotas de Funciones Racionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones",
    "subtopic": "Asíntotas"
  },
  {
    "id": "mat-bac-17",
    "sectionId": 1,
    "number": 57,
    "text": "¿Cuál es el número de combinaciones posibles para elegir un comité de 3 alumnos entre un grupo de 8 postulantes?",
    "options": [
      "56",
      "336",
      "24",
      "120"
    ],
    "correctIndex": 0,
    "explanation": "Como el orden no importa, es una combinación C(8, 3) = 8! / (3! · 5!) = (8 × 7 × 6) / (3 × 2 × 1) = 336 / 6 = 56.",
    "skill": "Combinaciones sin Repetición",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad y Combinatoria",
    "subtopic": "Combinaciones"
  },
  {
    "id": "mat-bac-18",
    "sectionId": 1,
    "number": 58,
    "text": "¿Cuál es la distancia focal c de la elipse cuya ecuación canónica es x²/25 + y²/16 = 1?",
    "options": [
      "c = 3",
      "c = 9",
      "c = 4",
      "c = 5"
    ],
    "correctIndex": 0,
    "explanation": "En una elipse horizontal: a² = 25 y b² = 16. La relación fundamental es c² = a² - b² = 25 - 16 = 9 => c = √9 = 3.",
    "skill": "Geometría Analítica de la Elipse",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cónicas",
    "subtopic": "Elipse"
  },
  {
    "id": "mat-bac-19",
    "sectionId": 1,
    "number": 59,
    "text": "Resuelve la ecuación exponencial: 2^(3x - 1) = 32. ¿Cuál es el valor de x?",
    "options": [
      "x = 2",
      "x = 3",
      "x = 1",
      "x = 5/3"
    ],
    "correctIndex": 0,
    "explanation": "Expresamos 32 como potencia de base 2: 32 = 2⁵. Igualando exponentes: 3x - 1 = 5 => 3x = 6 => x = 2.",
    "skill": "Ecuaciones Exponenciales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones Trascendentes",
    "subtopic": "Ecuaciones Exponenciales"
  },
  {
    "id": "mat-bac-20",
    "sectionId": 1,
    "number": 60,
    "text": "¿Cuál es la varianza muestral s² de los datos 2, 4, 6 si la media es x̄ = 4?",
    "options": [
      "4",
      "2",
      "8",
      "2.67"
    ],
    "correctIndex": 0,
    "explanation": "Diferencias respecto a la media: (2 - 4)² = 4, (4 - 4)² = 0, (6 - 4)² = 4. Varianza muestral s² = Σ(x - x̄)² / (n - 1) = (4 + 0 + 4) / (3 - 1) = 8 / 2 = 4.",
    "skill": "Medidas de Dispersión",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Estadística",
    "subtopic": "Varianza y Desviación"
  },
  {
    "id": "mat-bac-21",
    "sectionId": 1,
    "number": 21,
    "text": "Desarrolla el producto notable del binomio al cuadrado: (2x - 3y)².",
    "options": [
      "4x² - 12xy + 9y²",
      "4x² - 9y²",
      "4x² + 12xy + 9y²",
      "4x² - 6xy + 9y²"
    ],
    "correctIndex": 0,
    "explanation": "(a - b)² = a² - 2ab + b² = (2x)² - 2(2x)(3y) + (3y)² = 4x² - 12xy + 9y².",
    "skill": "Productos notables",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Binomio al cuadrado"
  },
  {
    "id": "mat-bac-22",
    "sectionId": 1,
    "number": 22,
    "text": "Factoriza completamente la diferencia de cuadrados: 49x² - 36y².",
    "options": [
      "(7x - 6y)(7x + 6y)",
      "(7x - 6y)²",
      "(49x - 36y)(x + y)",
      "(7x + 6y)²"
    ],
    "correctIndex": 0,
    "explanation": "a² - b² = (a - b)(a + b). √49x² = 7x y √36y² = 6y. Queda (7x - 6y)(7x + 6y).",
    "skill": "Factorización de binomios",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Diferencia de cuadrados"
  },
  {
    "id": "mat-bac-23",
    "sectionId": 1,
    "number": 23,
    "text": "Factoriza el trinomio de la forma x² + bx + c: x² - 9x + 20.",
    "options": [
      "(x - 4)(x - 5)",
      "(x + 4)(x + 5)",
      "(x - 2)(x - 10)",
      "(x - 1)(x - 20)"
    ],
    "correctIndex": 0,
    "explanation": "Buscamos dos números que multiplicados den +20 y sumados den -9: (-4) y (-5). Queda (x - 4)(x - 5).",
    "skill": "Factorización de trinomios simples",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Trinomio cuadrático"
  },
  {
    "id": "mat-bac-24",
    "sectionId": 1,
    "number": 24,
    "text": "Factoriza por agrupación de términos: ax + ay + bx + by.",
    "options": [
      "(a + b)(x + y)",
      "(a + x)(b + y)",
      "(ax + by)(a + b)",
      "ab(x + y)"
    ],
    "correctIndex": 0,
    "explanation": "Agrupamos: a(x + y) + b(x + y) = (a + b)(x + y).",
    "skill": "Factor común por agrupación",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Factorización"
  },
  {
    "id": "mat-bac-25",
    "sectionId": 1,
    "number": 25,
    "text": "Simplifica la fracción algebraica: (x² - 16) / (x - 4), con x ≠ 4.",
    "options": [
      "x + 4",
      "x - 4",
      "x + 16",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Factorizamos el numerador: (x - 4)(x + 4) / (x - 4) = x + 4.",
    "skill": "Fracciones algebraicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Simplificación racional"
  },
  {
    "id": "mat-bac-26",
    "sectionId": 1,
    "number": 26,
    "text": "Desarrolla el producto de binomios con término común: (x + 7)(x - 3).",
    "options": [
      "x² + 4x - 21",
      "x² - 4x - 21",
      "x² + 10x - 21",
      "x² - 21"
    ],
    "correctIndex": 0,
    "explanation": "(x + a)(x + b) = x² + (a+b)x + ab = x² + (7 - 3)x + (7)(-3) = x² + 4x - 21.",
    "skill": "Productos notables",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Binomios con término común"
  },
  {
    "id": "mat-bac-27",
    "sectionId": 1,
    "number": 27,
    "text": "Factoriza la suma de cubos: x³ + 27.",
    "options": [
      "(x + 3)(x² - 3x + 9)",
      "(x + 3)³",
      "(x + 3)(x² + 3x + 9)",
      "(x - 3)(x² + 3x + 9)"
    ],
    "correctIndex": 0,
    "explanation": "a³ + b³ = (a + b)(a² - ab + b²). Para x³ + 3³: (x + 3)(x² - 3x + 9).",
    "skill": "Suma de cubos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Factorización cúbica"
  },
  {
    "id": "mat-bac-28",
    "sectionId": 1,
    "number": 28,
    "text": "Al factorizar el trinomio cuadrado perfecto 9x² + 30x + 25 se obtiene:",
    "options": [
      "(3x + 5)²",
      "(3x - 5)²",
      "(9x + 5)²",
      "(3x + 25)²"
    ],
    "correctIndex": 0,
    "explanation": "√9x² = 3x, √25 = 5. Doble producto: 2(3x)(5) = 30x (coincide). Por tanto, es (3x + 5)².",
    "skill": "Trinomio cuadrado perfecto",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Factorización de TCP"
  },
  {
    "id": "mat-bac-29",
    "sectionId": 1,
    "number": 29,
    "text": "Simplifica la expresión: (2x² + 6x) / (2x), para x ≠ 0.",
    "options": [
      "x + 3",
      "2x + 3",
      "x + 6",
      "2x + 6"
    ],
    "correctIndex": 0,
    "explanation": "Factorizamos factor común en numerador: 2x(x + 3) / (2x) = x + 3.",
    "skill": "Factor común monomio",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Fracciones racionales"
  },
  {
    "id": "mat-bac-30",
    "sectionId": 1,
    "number": 30,
    "text": "Factoriza el trinomio de la forma ax² + bx + c: 2x² + 5x + 3.",
    "options": [
      "(2x + 3)(x + 1)",
      "(2x + 1)(x + 3)",
      "(2x - 3)(x - 1)",
      "(x + 3)(x + 2)"
    ],
    "correctIndex": 0,
    "explanation": "Descomponemos el término medio: 2x² + 2x + 3x + 3 = 2x(x + 1) + 3(x + 1) = (2x + 3)(x + 1).",
    "skill": "Trinomio compuesto",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Factorización de trinomios"
  },
  {
    "id": "mat-bac-31",
    "sectionId": 1,
    "number": 31,
    "text": "Aplica la fórmula general para hallar las raíces de: x² - 6x + 8 = 0.",
    "options": [
      "x₁ = 4, x₂ = 2",
      "x₁ = -4, x₂ = -2",
      "x₁ = 8, x₂ = 1",
      "x₁ = 6, x₂ = 8"
    ],
    "correctIndex": 0,
    "explanation": "x = [6 ± √(36 - 32)] / 2 = [6 ± √4] / 2 = (6 ± 2) / 2 ⇒ x₁ = 4, x₂ = 2.",
    "skill": "Ecuación cuadrática por fórmula general",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Fórmula cuadrática"
  },
  {
    "id": "mat-bac-32",
    "sectionId": 1,
    "number": 32,
    "text": "¿Qué indica un discriminante Δ < 0 (negativo) en una ecuación de segundo grado ax² + bx + c = 0?",
    "options": [
      "Que la ecuación no tiene soluciones reales (sus raíces son complejas conjugadas)",
      "Que tiene dos soluciones reales distintas",
      "Que tiene una única solución real doble",
      "Que una solución es cero"
    ],
    "correctIndex": 0,
    "explanation": "Si b² - 4ac < 0, la raíz cuadrada del discriminante no pertenece a los números reales, indicando raíces complejas.",
    "skill": "Naturaleza de las raíces",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Discriminante"
  },
  {
    "id": "mat-bac-33",
    "sectionId": 1,
    "number": 33,
    "text": "Resuelve el sistema lineal 2x2: { x + y = 10 ; x - y = 4 }.",
    "options": [
      "x = 7, y = 3",
      "x = 6, y = 4",
      "x = 8, y = 2",
      "x = 5, y = 5"
    ],
    "correctIndex": 0,
    "explanation": "Sumando ambas ecuaciones: 2x = 14 ⇒ x = 7. Sustituyendo: 7 + y = 10 ⇒ y = 3.",
    "skill": "Sistemas de ecuaciones 2x2",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Método de reducción"
  },
  {
    "id": "mat-bac-34",
    "sectionId": 1,
    "number": 34,
    "text": "Resuelve la inecuación lineal de primer grado: 3x - 5 > 7.",
    "options": [
      "x > 4",
      "x < 4",
      "x > 12",
      "x ≥ 4"
    ],
    "correctIndex": 0,
    "explanation": "Sumamos 5: 3x > 12. Dividimos entre 3 (positivo, no cambia el sentido): x > 4.",
    "skill": "Inecuaciones lineales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Desigualdades"
  },
  {
    "id": "mat-bac-35",
    "sectionId": 1,
    "number": 35,
    "text": "Al resolver la inecuación -2x ≤ 8, el conjunto solución es:",
    "options": [
      "x ≥ -4",
      "x ≤ -4",
      "x ≥ 4",
      "x ≤ 4"
    ],
    "correctIndex": 0,
    "explanation": "Al dividir o multiplicar ambos miembros por un número negativo (-2), el sentido de la desigualdad se invierte: x ≥ -4.",
    "skill": "Propiedades de las desigualdades",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Multiplicación por negativos"
  },
  {
    "id": "mat-bac-36",
    "sectionId": 1,
    "number": 36,
    "text": "Encuentra las soluciones de la ecuación cuadrática pura: 3x² - 75 = 0.",
    "options": [
      "x = ±5",
      "x = 5",
      "x = ±25",
      "x = ±15"
    ],
    "correctIndex": 0,
    "explanation": "3x² = 75 ⇒ x² = 25 ⇒ x = ±√25 = ±5.",
    "skill": "Ecuaciones cuadráticas incompletas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Raíces puras"
  },
  {
    "id": "mat-bac-37",
    "sectionId": 1,
    "number": 37,
    "text": "Resuelve por factorización la ecuación cuadrática mixta: 2x² - 8x = 0.",
    "options": [
      "x = 0 y x = 4",
      "x = 2 y x = 4",
      "x = 0 y x = -4",
      "x = ±4"
    ],
    "correctIndex": 0,
    "explanation": "Factorizamos 2x: 2x(x - 4) = 0 ⇒ 2x = 0 (x = 0) o x - 4 = 0 (x = 4).",
    "skill": "Factorización cuadrática mixta",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Ecuaciones incompletas"
  },
  {
    "id": "mat-bac-38",
    "sectionId": 1,
    "number": 38,
    "text": "¿Cuál es el valor de x en el sistema { 2x + 3y = 13 ; y = 3 }?",
    "options": [
      "x = 2",
      "x = 3",
      "x = 1",
      "x = 4"
    ],
    "correctIndex": 0,
    "explanation": "Sustituimos y = 3: 2x + 3(3) = 13 ⇒ 2x + 9 = 13 ⇒ 2x = 4 ⇒ x = 2.",
    "skill": "Método de sustitución",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Sistemas lineales"
  },
  {
    "id": "mat-bac-39",
    "sectionId": 1,
    "number": 39,
    "text": "¿Qué tipo de sistema de ecuaciones representa un par de rectas paralelas no coincidentes en el plano?",
    "options": [
      "Sistema incompatible (sin solución)",
      "Sistema compatible determinado (solución única)",
      "Sistema compatible indeterminado (infinitas soluciones)",
      "Sistema dependiente"
    ],
    "correctIndex": 0,
    "explanation": "Las rectas paralelas tienen la misma pendiente pero distinta ordenada al origen, por lo que nunca se intersectan.",
    "skill": "Interpretación geométrica de sistemas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Compatibilidad de sistemas"
  },
  {
    "id": "mat-bac-40",
    "sectionId": 1,
    "number": 40,
    "text": "Determina el conjunto solución de la inecuación cuadrática: x² - 4 < 0.",
    "options": [
      "(-2, 2)",
      "[-2, 2]",
      "(-∞, -2) U (2, ∞)",
      "(0, 4)"
    ],
    "correctIndex": 0,
    "explanation": "Puntos críticos: x = -2 y x = 2. Evaluando intervalos, el producto (x - 2)(x + 2) es negativo en el intervalo abierto (-2, 2).",
    "skill": "Inecuaciones cuadráticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Intervalos solución"
  },
  {
    "id": "mat-bac-41",
    "sectionId": 1,
    "number": 41,
    "text": "¿Cuál es el dominio de la función racional f(x) = 1 / (x - 5)?",
    "options": [
      "Todos los reales excepto x = 5 (ℝ \\ {5})",
      "Todos los reales (ℝ)",
      "[5, ∞)",
      "(-∞, 5)"
    ],
    "correctIndex": 0,
    "explanation": "El denominador no puede ser cero: x - 5 ≠ 0 ⇒ x ≠ 5. Por tanto el dominio es ℝ \\ {5}.",
    "skill": "Dominio de funciones racionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones",
    "subtopic": "Restricción de dominio"
  },
  {
    "id": "mat-bac-42",
    "sectionId": 1,
    "number": 42,
    "text": "¿Cuál es el vértice de la parábola f(x) = 2x² - 8x + 5?",
    "options": [
      "V(2, -3)",
      "V(-2, 29)",
      "V(2, 5)",
      "V(4, 5)"
    ],
    "correctIndex": 0,
    "explanation": "x_v = -b / (2a) = -(-8) / (2×2) = 8 / 4 = 2. y_v = 2(2)² - 8(2) + 5 = 8 - 16 + 5 = -3. Vértice: V(2, -3).",
    "skill": "Vértice de función cuadrática",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones",
    "subtopic": "Parábolas"
  },
  {
    "id": "mat-bac-43",
    "sectionId": 1,
    "number": 43,
    "text": "¿Cuál es la asíntota vertical de la función f(x) = (3x + 1) / (x + 2)?",
    "options": [
      "x = -2",
      "x = 2",
      "y = 3",
      "x = -1/3"
    ],
    "correctIndex": 0,
    "explanation": "La asíntota vertical ocurre donde el denominador se anula y el numerador no es cero: x + 2 = 0 ⇒ x = -2.",
    "skill": "Asíntotas verticales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones",
    "subtopic": "Funciones racionales"
  },
  {
    "id": "mat-bac-44",
    "sectionId": 1,
    "number": 44,
    "text": "Calcula el valor de la expresión logarítmica: log₁₀(1,000) - log₁₀(10).",
    "options": [
      "2",
      "3",
      "1",
      "100"
    ],
    "correctIndex": 0,
    "explanation": "log₁₀(1,000) = 3 y log₁₀(10) = 1. Restando: 3 - 1 = 2.",
    "skill": "Propiedades de logaritmos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Logaritmos comunes"
  },
  {
    "id": "mat-bac-45",
    "sectionId": 1,
    "number": 45,
    "text": "Aplica la propiedad del logaritmo de un producto: log_b(x · y) equivale a:",
    "options": [
      "log_b(x) + log_b(y)",
      "log_b(x) · log_b(y)",
      "log_b(x) - log_b(y)",
      "[log_b(x)]^y"
    ],
    "correctIndex": 0,
    "explanation": "El logaritmo de un producto es igual a la suma de los logaritmos de los factores.",
    "skill": "Leyes de logaritmos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Logaritmo de un producto"
  },
  {
    "id": "mat-bac-46",
    "sectionId": 1,
    "number": 46,
    "text": "Resuelve la ecuación logarítmica: log₂(x) = 4.",
    "options": [
      "x = 16",
      "x = 8",
      "x = 2",
      "x = 64"
    ],
    "correctIndex": 0,
    "explanation": "Por definición de logaritmo: 2⁴ = x ⇒ x = 16.",
    "skill": "Ecuaciones logarítmicas básicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Definición de logaritmo"
  },
  {
    "id": "mat-bac-47",
    "sectionId": 1,
    "number": 47,
    "text": "Resuelve la ecuación exponencial: 3^(x + 1) = 27.",
    "options": [
      "x = 2",
      "x = 3",
      "x = 1",
      "x = 4"
    ],
    "correctIndex": 0,
    "explanation": "27 = 3³. Por igualdad de bases: x + 1 = 3 ⇒ x = 2.",
    "skill": "Ecuaciones exponenciales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Bases iguales"
  },
  {
    "id": "mat-bac-48",
    "sectionId": 1,
    "number": 48,
    "text": "¿Cuál es el rango de la función cuadrática f(x) = x² + 4?",
    "options": [
      "[4, ∞)",
      "[0, ∞)",
      "(-∞, 4]",
      "Todos los reales (ℝ)"
    ],
    "correctIndex": 0,
    "explanation": "Como x² ≥ 0 para todo x real, el valor mínimo de la función es f(0) = 4. Por tanto, el rango es [4, ∞).",
    "skill": "Rango de funciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones",
    "subtopic": "Mínimo de parábola"
  },
  {
    "id": "mat-bac-49",
    "sectionId": 1,
    "number": 49,
    "text": "Si f(x) = 2x + 1 y g(x) = x², ¿cuál es la función compuesta (f ∘ g)(x)?",
    "options": [
      "2x² + 1",
      "(2x + 1)²",
      "4x² + 1",
      "2x³ + x"
    ],
    "correctIndex": 0,
    "explanation": "(f ∘ g)(x) = f(g(x)) = f(x²) = 2(x²) + 1 = 2x² + 1.",
    "skill": "Composición de funciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones",
    "subtopic": "Funciones compuestas"
  },
  {
    "id": "mat-bac-50",
    "sectionId": 1,
    "number": 50,
    "text": "¿Cuál es la función inversa f⁻¹(x) de la función lineal f(x) = 3x - 6?",
    "options": [
      "f⁻¹(x) = (x + 6) / 3",
      "f⁻¹(x) = (x - 6) / 3",
      "f⁻¹(x) = 3x + 6",
      "f⁻¹(x) = x/3 - 6"
    ],
    "correctIndex": 0,
    "explanation": "Hacemos y = 3x - 6. Despejamos x: y + 6 = 3x ⇒ x = (y + 6)/3. Inversa: f⁻¹(x) = (x + 6)/3.",
    "skill": "Función inversa",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones",
    "subtopic": "Cálculo de la inversa"
  },
  {
    "id": "mat-bac-51",
    "sectionId": 1,
    "number": 51,
    "text": "En el círculo unitario (radio r = 1), las coordenadas de un punto en el ángulo θ son:",
    "options": [
      "(cos θ, sen θ)",
      "(sen θ, cos θ)",
      "(tan θ, sec θ)",
      "(1, tan θ)"
    ],
    "correctIndex": 0,
    "explanation": "Por definición trigonométrica en el plano cartesiano con r = 1, la abscisa x = cos θ y la ordenada y = sen θ.",
    "skill": "Círculo trigonométrico",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Definiciones en círculo unitario"
  },
  {
    "id": "mat-bac-52",
    "sectionId": 1,
    "number": 52,
    "text": "¿A qué equivale la identidad trigonométrica fundamental: sen²(x) + cos²(x)?",
    "options": [
      "1",
      "0",
      "tan²(x)",
      "sec²(x)"
    ],
    "correctIndex": 0,
    "explanation": "Es la identidad pitagórica fundamental derivada del teorema de Pitágoras en el círculo unitario.",
    "skill": "Identidad pitagórica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Identidades fundamentales"
  },
  {
    "id": "mat-bac-53",
    "sectionId": 1,
    "number": 53,
    "text": "¿Cuál es el valor exacto de sen(30°)?",
    "options": [
      "1/2",
      "√3/2",
      "√2/2",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "En un triángulo equilátero bisecado, el seno del ángulo de 30° es exactamente 1/2 (0.5).",
    "skill": "Ángulos notables",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Valores exactos"
  },
  {
    "id": "mat-bac-54",
    "sectionId": 1,
    "number": 54,
    "text": "Calcula el valor exacto de cos(60°).",
    "options": [
      "1/2",
      "√3/2",
      "√2/2",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Por ángulos complementarios: cos(60°) = sen(30°) = 1/2.",
    "skill": "Razones de ángulos notables",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Coseno de 60°"
  },
  {
    "id": "mat-bac-55",
    "sectionId": 1,
    "number": 55,
    "text": "¿Cuál es el valor exacto de tan(45°)?",
    "options": [
      "1",
      "0",
      "√3",
      "1/2"
    ],
    "correctIndex": 0,
    "explanation": "tan(45°) = sen(45°) / cos(45°) = (√2/2) / (√2/2) = 1.",
    "skill": "Tangente de 45°",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Ángulos notables"
  },
  {
    "id": "mat-bac-56",
    "sectionId": 1,
    "number": 56,
    "text": "En un triángulo oblicuángulo, la Ley de Senos establece que:",
    "options": [
      "a / sen(A) = b / sen(B) = c / sen(C)",
      "a² = b² + c² - 2bc cos(A)",
      "a + b + c = 180°",
      "sen(A + B) = sen(A) + sen(B)"
    ],
    "correctIndex": 0,
    "explanation": "La ley de senos relaciona la longitud de cada lado con el seno de su ángulo opuesto de manera proporcional.",
    "skill": "Ley de senos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Triángulos oblicuángulos"
  },
  {
    "id": "mat-bac-57",
    "sectionId": 1,
    "number": 57,
    "text": "Para aplicar la Ley de Cosenos en el cálculo del lado 'a', la fórmula correcta es:",
    "options": [
      "a² = b² + c² - 2bc · cos(A)",
      "a² = b² + c² + 2bc · cos(A)",
      "a = b · cos(A)",
      "a² = b² - c²"
    ],
    "correctIndex": 0,
    "explanation": "La ley de cosenos es una generalización del teorema de Pitágoras para cualquier triángulo: a² = b² + c² - 2bc cos(A).",
    "skill": "Ley de cosenos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Resolución de triángulos"
  },
  {
    "id": "mat-bac-58",
    "sectionId": 1,
    "number": 58,
    "text": "¿Cuál es el período fundamental de la función trigonométrica f(x) = sen(x)?",
    "options": [
      "2π radianes (360°)",
      "π radianes (180°)",
      "4π radianes",
      "π/2 radianes"
    ],
    "correctIndex": 0,
    "explanation": "La función seno completa un ciclo completo de onda cada 2π radianes.",
    "skill": "Período de funciones trigonométricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Función seno"
  },
  {
    "id": "mat-bac-59",
    "sectionId": 1,
    "number": 59,
    "text": "La función tangente se indefine (presenta asíntotas verticales) en los ángulos de la forma:",
    "options": [
      "π/2 + kπ (90°, 270°, ...)",
      "kπ (0°, 180°, 360°)",
      "kπ/4 (45°, 135°)",
      "2kπ"
    ],
    "correctIndex": 0,
    "explanation": "tan(x) = sen(x) / cos(x). Como cos(x) = 0 en π/2 + kπ, la tangente se divide por cero y se indefine.",
    "skill": "Dominio de la función tangente",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Asíntotas trigonométricas"
  },
  {
    "id": "mat-bac-60",
    "sectionId": 1,
    "number": 60,
    "text": "Simplifica la identidad trigonométrica: cos(x) · tan(x).",
    "options": [
      "sen(x)",
      "cos(x)",
      "1",
      "sec(x)"
    ],
    "correctIndex": 0,
    "explanation": "Como tan(x) = sen(x) / cos(x), al multiplicar: cos(x) · [sen(x) / cos(x)] = sen(x).",
    "skill": "Simplificación trigonométrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Cocientes"
  },
  {
    "id": "mat-bac-61",
    "sectionId": 1,
    "number": 61,
    "text": "¿Cuál es la ecuación general de la recta que pasa por el punto (0, 4) y tiene pendiente m = -2?",
    "options": [
      "2x + y - 4 = 0",
      "2x - y + 4 = 0",
      "x + 2y - 4 = 0",
      "2x + y + 4 = 0"
    ],
    "correctIndex": 0,
    "explanation": "Forma explícita: y = -2x + 4. Igualando a cero en forma general: 2x + y - 4 = 0.",
    "skill": "Ecuación general de la recta",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Línea recta"
  },
  {
    "id": "mat-bac-62",
    "sectionId": 1,
    "number": 62,
    "text": "Dos rectas con pendientes m₁ y m₂ son perpendiculares si y solo si cumplen la condición:",
    "options": [
      "m₁ · m₂ = -1",
      "m₁ = m₂",
      "m₁ + m₂ = 0",
      "m₁ · m₂ = 1"
    ],
    "correctIndex": 0,
    "explanation": "La condición de perpendicularidad exige que sus pendientes sean recíprocas y de signo opuesto: m₂ = -1 / m₁.",
    "skill": "Rectas perpendiculares",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Pendientes ortogonales"
  },
  {
    "id": "mat-bac-63",
    "sectionId": 1,
    "number": 63,
    "text": "¿Cuál es la distancia entre el punto P(3, 4) y el origen de coordenadas (0, 0)?",
    "options": [
      "5 unidades",
      "7 unidades",
      "25 unidades",
      "√7 unidades"
    ],
    "correctIndex": 0,
    "explanation": "d = √(3² + 4²) = √(9 + 16) = √25 = 5 unidades.",
    "skill": "Distancia al origen",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Métrica euclidiana"
  },
  {
    "id": "mat-bac-64",
    "sectionId": 1,
    "number": 64,
    "text": "¿Cuál es el centro C y el radio r de la circunferencia con ecuación (x - 3)² + (y + 2)² = 25?",
    "options": [
      "C(3, -2) y r = 5",
      "C(-3, 2) y r = 5",
      "C(3, -2) y r = 25",
      "C(-3, 2) y r = 25"
    ],
    "correctIndex": 0,
    "explanation": "La forma canónica es (x - h)² + (y - k)² = r². Por comparación: h = 3, k = -2 y r = √25 = 5.",
    "skill": "Ecuación canónica de la circunferencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Circunferencia"
  },
  {
    "id": "mat-bac-65",
    "sectionId": 1,
    "number": 65,
    "text": "La ecuación ordinaria de una parábola con vértice en el origen y foco en (0, p) sobre el eje Y es:",
    "options": [
      "x² = 4py",
      "y² = 4px",
      "x² = -4py",
      "x² + y² = p²"
    ],
    "correctIndex": 0,
    "explanation": "Al abrir verticalmente hacia el eje Y con vértice en (0,0), la ecuación canónica es x² = 4py.",
    "skill": "Ecuación de la parábola",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Parábolas"
  },
  {
    "id": "mat-bac-66",
    "sectionId": 1,
    "number": 66,
    "text": "¿Qué cónica representa la ecuación general x² / 16 + y² / 9 = 1?",
    "options": [
      "Una elipse horizontal",
      "Una hipérbola",
      "Una circunferencia",
      "Una parábola"
    ],
    "correctIndex": 0,
    "explanation": "La forma x²/a² + y²/b² = 1 con a > b (16 > 9) describe una elipse con eje mayor horizontal.",
    "skill": "Ecuación de la elipse",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Cónicas"
  },
  {
    "id": "mat-bac-67",
    "sectionId": 1,
    "number": 67,
    "text": "¿Cuál es la pendiente de una recta horizontal paralela al eje X?",
    "options": [
      "m = 0",
      "m = 1",
      "m no existe (indefinida)",
      "m = -1"
    ],
    "correctIndex": 0,
    "explanation": "En una recta horizontal no hay variación en y (Δy = 0), por lo que m = Δy / Δx = 0.",
    "skill": "Pendiente de rectas notables",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Rectas horizontales"
  },
  {
    "id": "mat-bac-68",
    "sectionId": 1,
    "number": 68,
    "text": "¿Cuál es la pendiente de una recta vertical paralela al eje Y?",
    "options": [
      "Indefinida (no existe división por cero)",
      "m = 0",
      "m = 1",
      "m = ∞"
    ],
    "correctIndex": 0,
    "explanation": "Al ser vertical, Δx = 0. Como la división por cero no está definida en los reales, la pendiente es indefinida.",
    "skill": "Rectas verticales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Pendiente indefinida"
  },
  {
    "id": "mat-bac-69",
    "sectionId": 1,
    "number": 69,
    "text": "Calcula la distancia entre las rectas paralelas y = 2x + 3 e y = 2x - 7 utilizando la fórmula d = |c₁ - c₂| / √(1 + m²).",
    "options": [
      "10 / √5 (es decir, 2√5)",
      "10",
      "4 / √5",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "d = |3 - (-7)| / √(1 + 2²) = 10 / √5 = (10√5)/5 = 2√5.",
    "skill": "Distancia entre rectas paralelas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Posiciones relativas"
  },
  {
    "id": "mat-bac-70",
    "sectionId": 1,
    "number": 70,
    "text": "El punto de corte con el eje Y (ordenada al origen) de la recta 3x - 2y + 8 = 0 es:",
    "options": [
      "(0, 4)",
      "(0, -4)",
      "(4, 0)",
      "(0, -8)"
    ],
    "correctIndex": 0,
    "explanation": "Hacemos x = 0: 3(0) - 2y + 8 = 0 ⇒ -2y = -8 ⇒ y = 4. Punto: (0, 4).",
    "skill": "Intersección con los ejes",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Ordenada al origen"
  },
  {
    "id": "mat-bac-71",
    "sectionId": 1,
    "number": 71,
    "text": "¿De cuántas maneras distintas se pueden sentar 5 personas en una fila de 5 asientos?",
    "options": [
      "120 formas",
      "25 formas",
      "60 formas",
      "24 formas"
    ],
    "correctIndex": 0,
    "explanation": "P(5) = 5! = 5 × 4 × 3 × 2 × 1 = 120 maneras.",
    "skill": "Permutaciones lineales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad y Conteo",
    "subtopic": "Factorial"
  },
  {
    "id": "mat-bac-72",
    "sectionId": 1,
    "number": 72,
    "text": "¿Cuántos comités de 3 personas se pueden formar a partir de un grupo de 8 personas?",
    "options": [
      "56 comités",
      "336 comités",
      "24 comités",
      "48 comités"
    ],
    "correctIndex": 0,
    "explanation": "El orden no importa, es una combinación: C(8, 3) = 8! / (3! × 5!) = (8 × 7 × 6) / (3 × 2 × 1) = 56.",
    "skill": "Combinaciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad y Conteo",
    "subtopic": "Selección sin orden"
  },
  {
    "id": "mat-bac-73",
    "sectionId": 1,
    "number": 73,
    "text": "¿Cuántos números diferentes de 3 cifras se pueden formar con los dígitos {1, 2, 3, 4, 5} sin repetir dígitos?",
    "options": [
      "60 números",
      "125 números",
      "15 números",
      "20 números"
    ],
    "correctIndex": 0,
    "explanation": "El orden sí importa (variación sin repetición): V(5, 3) = 5 × 4 × 3 = 60.",
    "skill": "Variaciones sin repetición",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad y Conteo",
    "subtopic": "Formación de números"
  },
  {
    "id": "mat-bac-74",
    "sectionId": 1,
    "number": 74,
    "text": "Si dos eventos A y B son independientes con P(A) = 0.4 y P(B) = 0.5, ¿cuál es la probabilidad conjunta P(A ∩ B)?",
    "options": [
      "0.20",
      "0.90",
      "0.10",
      "0.45"
    ],
    "correctIndex": 0,
    "explanation": "Para eventos independientes, P(A ∩ B) = P(A) × P(B) = 0.4 × 0.5 = 0.20.",
    "skill": "Eventos independientes",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Regla de multiplicación"
  },
  {
    "id": "mat-bac-75",
    "sectionId": 1,
    "number": 75,
    "text": "La regla de la adición para eventos cualesquiera A y B establece que P(A ∪ B) es igual a:",
    "options": [
      "P(A) + P(B) - P(A ∩ B)",
      "P(A) + P(B)",
      "P(A) · P(B)",
      "P(A) - P(B)"
    ],
    "correctIndex": 0,
    "explanation": "Para no contar dos veces la intersección: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
    "skill": "Regla general de la adición",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Unión de eventos"
  },
  {
    "id": "mat-bac-76",
    "sectionId": 1,
    "number": 76,
    "text": "En una prueba diagnóstica, la sensibilidad es del 90% y la prevalencia de la enfermedad es del 5%. ¿Qué teorema permite calcular el valor predictivo positivo?",
    "options": [
      "Teorema de Bayes",
      "Teorema de Pitágoras",
      "Teorema de Chebyshev",
      "Teorema de De Moivre"
    ],
    "correctIndex": 0,
    "explanation": "El Teorema de Bayes permite actualizar la probabilidad de una hipótesis a partir de evidencias observadas (probabilidad a posteriori).",
    "skill": "Teorema de Bayes",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Probabilidad condicional"
  },
  {
    "id": "mat-bac-77",
    "sectionId": 1,
    "number": 77,
    "text": "¿Cuál es el valor del número combinatorio C(n, 0)?",
    "options": [
      "1",
      "0",
      "n",
      "n!"
    ],
    "correctIndex": 0,
    "explanation": "C(n, 0) = n! / (0! × n!) = n! / (1 × n!) = 1.",
    "skill": "Propiedades combinatorias",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad y Conteo",
    "subtopic": "Casos límite"
  },
  {
    "id": "mat-bac-78",
    "sectionId": 1,
    "number": 78,
    "text": "Al lanzar una moneda 4 veces, ¿cuál es la probabilidad binomial de obtener exactamente 2 caras?",
    "options": [
      "6/16 (3/8 o 37.5%)",
      "1/4",
      "1/2",
      "4/16"
    ],
    "correctIndex": 0,
    "explanation": "P(X=2) = C(4, 2) × (1/2)² × (1/2)² = 6 × (1/4) × (1/4) = 6/16 = 3/8 = 37.5%.",
    "skill": "Distribución binomial básica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Distribución binomial"
  },
  {
    "id": "mat-bac-79",
    "sectionId": 1,
    "number": 79,
    "text": "¿Qué nombre recibe la medida estadística que cuantifica la dispersión de los datos elevando al cuadrado sus desviaciones respecto a la media?",
    "options": [
      "Varianza",
      "Desviación típica",
      "Rango intercuartílico",
      "Coeficiente de variación"
    ],
    "correctIndex": 0,
    "explanation": "La varianza (σ²) es la media de los cuadrados de las diferencias entre cada dato y la media aritmética.",
    "skill": "Varianza estadística",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Estadística",
    "subtopic": "Dispersión cuadrática"
  },
  {
    "id": "mat-bac-80",
    "sectionId": 1,
    "number": 80,
    "text": "Si la varianza de un conjunto de datos es 49, ¿cuál es su desviación estándar?",
    "options": [
      "7",
      "49",
      "24.5",
      "14"
    ],
    "correctIndex": 0,
    "explanation": "La desviación estándar (σ) es la raíz cuadrada positiva de la varianza: σ = √49 = 7.",
    "skill": "Desviación estándar",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Estadística",
    "subtopic": "Raíz de la varianza"
  },
  {
    "id": "mat-bac-81",
    "sectionId": 1,
    "number": 81,
    "text": "En una progresión geométrica de términos reales positivos, el segundo término es a₂ = 10 y el cuarto término es a₄ = 40. ¿Cuál es el valor del sexto término a₆?",
    "options": [
      "160",
      "120",
      "200",
      "80"
    ],
    "correctIndex": 0,
    "explanation": "La relación entre términos de una progresión geométrica es a_n = a_k · r^(n-k). Así, 40 = 10 · r² ⇒ r² = 4 ⇒ r = 2 (términos positivos). Luego, a₆ = a₄ · r^(6-4) = 40 · 2² = 40 · 4 = 160.",
    "skill": "Términos en progresiones geométricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Progresiones geométricas"
  },
  {
    "id": "mat-bac-82",
    "sectionId": 1,
    "number": 82,
    "text": "Calcula la suma infinita de la serie geométrica convergente: 8 + 4 + 2 + 1 + ...",
    "options": [
      "16",
      "15",
      "14",
      "32"
    ],
    "correctIndex": 0,
    "explanation": "a₁ = 8 y r = 1/2 (|r| < 1). Suma S = a₁ / (1 - r) = 8 / (1 - 0.5) = 8 / 0.5 = 16.",
    "skill": "Series geométricas infinitas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Suma infinita"
  },
  {
    "id": "mat-bac-83",
    "sectionId": 1,
    "number": 83,
    "text": "Resuelve la desigualdad con valor absoluto: |x - 3| ≤ 5.",
    "options": [
      "[-2, 8]",
      "[-8, 2]",
      "(-2, 8)",
      "[3, 8]"
    ],
    "correctIndex": 0,
    "explanation": "|u| ≤ c ⇔ -c ≤ u ≤ c. -5 ≤ x - 3 ≤ 5. Sumando 3: -2 ≤ x ≤ 8, es decir, [-2, 8].",
    "skill": "Desigualdades con valor absoluto",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Inecuaciones"
  },
  {
    "id": "mat-bac-84",
    "sectionId": 1,
    "number": 84,
    "text": "Aplica la identidad del seno del ángulo doble: sen(2θ) es idéntico a:",
    "options": [
      "2 sen(θ) cos(θ)",
      "sen²(θ) - cos²(θ)",
      "2 sen(θ)",
      "sen²(θ) + cos²(θ)"
    ],
    "correctIndex": 0,
    "explanation": "Es la identidad trigonométrica fundamental del ángulo doble: sen(2θ) = 2 sen(θ) cos(θ).",
    "skill": "Identidades del ángulo doble",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Ángulo doble"
  },
  {
    "id": "mat-bac-85",
    "sectionId": 1,
    "number": 85,
    "text": "Aplica la identidad del coseno del ángulo doble: cos(2θ) es igual a:",
    "options": [
      "cos²(θ) - sen²(θ)",
      "2 cos²(θ) + 1",
      "sen²(θ) - cos²(θ)",
      "2 sen(θ) cos(θ)"
    ],
    "correctIndex": 0,
    "explanation": "Por deducción de cos(A + B) con A = B = θ: cos(2θ) = cos²(θ) - sen²(θ).",
    "skill": "Identidad de cos(2θ)",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Coseno del doble"
  },
  {
    "id": "mat-bac-86",
    "sectionId": 1,
    "number": 86,
    "text": "¿Cuáles son las pendientes de las asíntotas de la hipérbola canónica x² / 16 - y² / 9 = 1?",
    "options": [
      "m = ± 3/4",
      "m = ± 4/3",
      "m = ± 9/16",
      "m = ± 16/9"
    ],
    "correctIndex": 0,
    "explanation": "Para la hipérbola x²/a² - y²/b² = 1, las asíntotas son y = ±(b/a)x. Con a = 4 y b = 3: m = ± 3/4.",
    "skill": "Asíntotas de la hipérbola",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Hipérbola"
  },
  {
    "id": "mat-bac-87",
    "sectionId": 1,
    "number": 87,
    "text": "Calcula el producto escalar de los vectores u = (3, 4) y v = (2, -1) en R².",
    "options": [
      "2",
      "10",
      "7",
      "-2"
    ],
    "correctIndex": 0,
    "explanation": "u · v = (3)(2) + (4)(-1) = 6 - 4 = 2.",
    "skill": "Producto escalar en el plano",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra Lineal",
    "subtopic": "Vectores en R²"
  },
  {
    "id": "mat-bac-88",
    "sectionId": 1,
    "number": 88,
    "text": "Calcula el ángulo θ entre los vectores u = (1, 0) y v = (1, 1).",
    "options": [
      "45° (π/4 rad)",
      "90°",
      "30°",
      "60°"
    ],
    "correctIndex": 0,
    "explanation": "cos θ = (u · v) / (||u|| ||v||) = (1·1 + 0·1) / (1 · √2) = 1/√2 = √2/2. θ = 45°.",
    "skill": "Ángulo entre vectores",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría Analítica",
    "subtopic": "Producto punto"
  },
  {
    "id": "mat-bac-89",
    "sectionId": 1,
    "number": 89,
    "text": "Calcula el determinante de la matriz 2x2: M = [[3, -2], [4, 5]].",
    "options": [
      "23",
      "7",
      "15",
      "-7"
    ],
    "correctIndex": 0,
    "explanation": "det(M) = (3)(5) - (-2)(4) = 15 - (-8) = 15 + 8 = 23.",
    "skill": "Determinantes 2x2",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra Lineal",
    "subtopic": "Matrices"
  },
  {
    "id": "mat-bac-90",
    "sectionId": 1,
    "number": 90,
    "text": "Dada una variable aleatoria normal con media μ = 70 y desviación estándar σ = 5, ¿cuál es el valor tipificado Z para X = 80?",
    "options": [
      "Z = +2.0",
      "Z = +1.5",
      "Z = +2.5",
      "Z = -2.0"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula de tipificación: Z = (X - μ) / σ = (80 - 70) / 5 = 10 / 5 = +2.0.",
    "skill": "Puntuación Z",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Estadística",
    "subtopic": "Distribución normal"
  },
  {
    "id": "mat-bac-91",
    "sectionId": 1,
    "number": 91,
    "text": "¿Cuál es la longitud del lado recto (ancho focal) de la parábola y² = 12x?",
    "options": [
      "12 unidades",
      "6 unidades",
      "3 unidades",
      "4 unidades"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación es y² = 4px con 4p = 12. La longitud del lado recto es |4p| = 12.",
    "skill": "Elementos de la parábola",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Lado recto"
  },
  {
    "id": "mat-bac-92",
    "sectionId": 1,
    "number": 92,
    "text": "¿Cuál es la excentricidad 'e' de una circunferencia?",
    "options": [
      "e = 0",
      "e = 1",
      "0 < e < 1",
      "e > 1"
    ],
    "correctIndex": 0,
    "explanation": "En la circunferencia la distancia focal es nula (c = 0), por lo que e = c/a = 0.",
    "skill": "Excentricidad de cónicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Cónicas"
  },
  {
    "id": "mat-bac-93",
    "sectionId": 1,
    "number": 93,
    "text": "Calcula la suma de los infinitos términos de una serie geométrica convergente cuyo primer término es a₁ = 12 y cuya razón común es r = 1/3.",
    "options": [
      "18",
      "16",
      "24",
      "36"
    ],
    "correctIndex": 0,
    "explanation": "Para una progresión geométrica con |r| < 1, la suma infinita es S_∞ = a₁ / (1 - r). Sustituyendo a₁ = 12 y r = 1/3: S_∞ = 12 / (1 - 1/3) = 12 / (2/3) = 12 · (3/2) = 18.",
    "skill": "Suma de series geométricas convergentes",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Series infinitas convergentes"
  },
  {
    "id": "mat-bac-94",
    "sectionId": 1,
    "number": 94,
    "text": "Encuentra el conjunto solución de la inecuación lineal doble: -1 < 2x + 3 ≤ 7.",
    "options": [
      "(-2, 2]",
      "[-2, 2)",
      "(-1, 2]",
      "[-2, 5]"
    ],
    "correctIndex": 0,
    "explanation": "Restamos 3 en los tres miembros: -4 < 2x ≤ 4. Dividimos entre 2: -2 < x ≤ 2. Intervalo: (-2, 2].",
    "skill": "Inecuaciones simultáneas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Desigualdades compuestas"
  },
  {
    "id": "mat-bac-95",
    "sectionId": 1,
    "number": 95,
    "text": "¿Cuál es el dominio de la función irracional f(x) = √(2x - 8)?",
    "options": [
      "[4, ∞)",
      "(4, ∞)",
      "[0, ∞)",
      "(-∞, 4]"
    ],
    "correctIndex": 0,
    "explanation": "Para que la raíz cuadrada exista en los reales, el radicando debe ser no negativo: 2x - 8 ≥ 0 ⇒ 2x ≥ 8 ⇒ x ≥ 4.",
    "skill": "Dominio de funciones irracionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones",
    "subtopic": "Radicando no negativo"
  },
  {
    "id": "mat-bac-96",
    "sectionId": 1,
    "number": 96,
    "text": "Si log_a(8) = 3, ¿cuál es el valor de la base a?",
    "options": [
      "a = 2",
      "a = 24",
      "a = 4",
      "a = √8"
    ],
    "correctIndex": 0,
    "explanation": "Por definición de logaritmo: a³ = 8 ⇒ a = ∛8 = 2.",
    "skill": "Cálculo de la base del logaritmo",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra",
    "subtopic": "Logaritmos"
  },
  {
    "id": "mat-bac-97",
    "sectionId": 1,
    "number": 97,
    "text": "¿Cuál es la amplitud de la función periódica f(x) = -4 cos(3x)?",
    "options": [
      "4",
      "-4",
      "3",
      "2π/3"
    ],
    "correctIndex": 0,
    "explanation": "La amplitud es el valor absoluto del coeficiente de la función trigonométrica: |-4| = 4.",
    "skill": "Amplitud de ondas trigonométricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Trigonometría",
    "subtopic": "Funciones periódicas"
  },
  {
    "id": "mat-bac-98",
    "sectionId": 1,
    "number": 98,
    "text": "Al rotar 90° en sentido antihorario respecto al origen el punto P(3, 2), ¿cuáles son sus nuevas coordenadas?",
    "options": [
      "P'(-2, 3)",
      "P'(2, -3)",
      "P'(-3, -2)",
      "P'(3, -2)"
    ],
    "correctIndex": 0,
    "explanation": "La regla de rotación de 90° antihorario en el plano es (x, y) → (-y, x). Para (3, 2) resulta (-2, 3).",
    "skill": "Transformaciones geométricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica",
    "subtopic": "Rotaciones en el plano"
  },
  {
    "id": "mat-bac-99",
    "sectionId": 1,
    "number": 99,
    "text": "Calcula el número de subconjuntos posibles que tiene un conjunto de 6 elementos.",
    "options": [
      "64",
      "36",
      "32",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "El conjunto potencia de un conjunto de n elementos tiene 2^n subconjuntos: 2⁶ = 64.",
    "skill": "Conjunto potencia y combinatoria",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad y Conteo",
    "subtopic": "Conjunto potencia"
  },
  {
    "id": "mat-bac-100",
    "sectionId": 1,
    "number": 100,
    "text": "En una distribución normal, ¿qué porcentaje aproximado de los datos se encuentra dentro del intervalo (μ - σ, μ + σ)?",
    "options": [
      "Aproximadamente 68.3%",
      "Aproximadamente 95.4%",
      "Aproximadamente 99.7%",
      "Exactamente 50%"
    ],
    "correctIndex": 0,
    "explanation": "Por la regla empírica 68-95-99.7 de la distribución normal, el 68.3% de la población se halla a menos de 1 desviación típica de la media.",
    "skill": "Regla empírica normal",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Estadística",
    "subtopic": "Campana de Gauss"
  }
];
