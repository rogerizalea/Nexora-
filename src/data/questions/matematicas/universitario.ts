import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE MATEMÁTICAS - NIVEL UNIVERSITARIO (100 Reactivos)
 */
export const MATEMATICAS_UNIVERSITARIO: Question[] = [
  {
    "id": "mat-uni-1",
    "sectionId": 1,
    "number": 81,
    "text": "¿Cuál es la derivada de la función f(x) = 3x⁴ - 5x² + 7x - 2 con respecto a x?",
    "options": [
      "f'(x) = 12x³ - 10x + 7",
      "f'(x) = 12x³ - 5x + 7",
      "f'(x) = 7x³ - 10x + 7",
      "f'(x) = 12x⁴ - 10x² + 7"
    ],
    "correctIndex": 0,
    "explanation": "Aplicando la regla de la potencia término a término: d/dx(3x⁴) = 12x³, d/dx(-5x²) = -10x, d/dx(7x) = 7, d/dx(-2) = 0. Resultado: 12x³ - 10x + 7.",
    "skill": "Cálculo Diferencial",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo",
    "subtopic": "Reglas de Derivación"
  },
  {
    "id": "mat-uni-2",
    "sectionId": 1,
    "number": 82,
    "text": "¿Cuál es el valor del límite: lim (x → 0) [sen(4x) / x]?",
    "options": [
      "0",
      "1",
      "4",
      "Infinito"
    ],
    "correctIndex": 2,
    "explanation": "Por el límite fundamental lim (u → 0) [sen(u)/u] = 1: lim (x → 0) [4 · sen(4x) / (4x)] = 4 · 1 = 4.",
    "skill": "Límites Trigonométricos Fundamentales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Matemático",
    "subtopic": "Límites"
  },
  {
    "id": "mat-uni-3",
    "sectionId": 1,
    "number": 83,
    "text": "¿Cuál es el determinante de la matriz 2x2 A = [[2, 5], [1, 4]]?",
    "options": [
      "3",
      "8",
      "13",
      "-3"
    ],
    "correctIndex": 0,
    "explanation": "det(A) = ad - bc = (2)(4) - (5)(1) = 8 - 5 = 3.",
    "skill": "Álgebra Lineal",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Matrices y Determinantes",
    "subtopic": "Determinantes"
  },
  {
    "id": "mat-uni-4",
    "sectionId": 1,
    "number": 84,
    "text": "¿Cuál es la integral indefinida ∫ (6x² - 4x + 5) dx?",
    "options": [
      "2x³ - 2x² + 5x + C",
      "6x³ - 4x² + 5x + C",
      "3x³ - 2x² + 5x + C",
      "2x³ - 4x² + 5x + C"
    ],
    "correctIndex": 0,
    "explanation": "Integrando término a término: 6(x³/3) - 4(x²/2) + 5x + C = 2x³ - 2x² + 5x + C.",
    "skill": "Cálculo Integral",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo",
    "subtopic": "Integrales Indefinidas"
  },
  {
    "id": "mat-uni-5",
    "sectionId": 1,
    "number": 85,
    "text": "¿Cuál es el valor de la integral definida ∫₀² (3x² + 1) dx?",
    "options": [
      "10",
      "12",
      "8",
      "14"
    ],
    "correctIndex": 0,
    "explanation": "La antiderivada es F(x) = x³ + x. Por el Teorema Fundamental del Cálculo: F(2) - F(0) = (2³ + 2) - (0) = 8 + 2 = 10.",
    "skill": "Teorema Fundamental del Cálculo",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Integrales Definidas"
  },
  {
    "id": "mat-uni-6",
    "sectionId": 1,
    "number": 86,
    "text": "Aplicando la regla de la cadena, ¿cuál es la derivada de f(x) = ln(x² + 3)?",
    "options": [
      "2x / (x² + 3)",
      "1 / (x² + 3)",
      "2x · ln(x² + 3)",
      "(x² + 3) / 2x"
    ],
    "correctIndex": 0,
    "explanation": "Para y = ln(u), y' = u' / u. Aquí u = x² + 3 y u' = 2x. Por lo tanto, f'(x) = 2x / (x² + 3).",
    "skill": "Regla de la Cadena",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Derivada Logarítmica"
  },
  {
    "id": "mat-uni-7",
    "sectionId": 1,
    "number": 87,
    "text": "¿Cuáles son los valores propios (autovalores λ) de la matriz A = [[3, 0], [0, -2]]?",
    "options": [
      "λ₁ = 3, λ₂ = -2",
      "λ₁ = 1, λ₂ = -6",
      "λ₁ = 0, λ₂ = 5",
      "λ₁ = 3, λ₂ = 2"
    ],
    "correctIndex": 0,
    "explanation": "Para una matriz diagonal, los autovalores son exactamente los elementos de la diagonal principal: λ₁ = 3 y λ₂ = -2.",
    "skill": "Álgebra Lineal Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espacios Vectoriales",
    "subtopic": "Valores y Vectores Propios"
  },
  {
    "id": "mat-uni-8",
    "sectionId": 1,
    "number": 88,
    "text": "¿Cuál es la solución general de la ecuación diferencial ordinaria de variables separables dy/dx = 3x²y para y > 0?",
    "options": [
      "y = C · e^(x³)",
      "y = x³ + C",
      "y = C · e^(3x²)",
      "y = ln(x³) + C"
    ],
    "correctIndex": 0,
    "explanation": "Separando variables: dy / y = 3x² dx. Integrando ambos lados: ln|y| = x³ + C₁ => y = e^(x³ + C₁) = C · e^(x³).",
    "skill": "Ecuaciones Diferenciales Ordinarias",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Variables Separables"
  },
  {
    "id": "mat-uni-9",
    "sectionId": 1,
    "number": 89,
    "text": "¿Cuál es el valor del límite lim (x → ∞) [(4x³ - 5x + 2) / (2x³ + 7x² - 1)]?",
    "options": [
      "2",
      "0",
      "Infinito",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Como los polinomios del numerador y denominador tienen el mismo grado (3), el límite en el infinito es la razón de sus coeficientes principales: 4 / 2 = 2.",
    "skill": "Límites en el Infinito",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Matemático",
    "subtopic": "Comportamiento Asintótico"
  },
  {
    "id": "mat-uni-10",
    "sectionId": 1,
    "number": 90,
    "text": "Para la función de dos variables f(x, y) = 3x²y + 5xy³ - 7x, ¿cuál es la derivada parcial respecto a x (∂f/∂x)?",
    "options": [
      "6xy + 5y³ - 7",
      "3x² + 15xy² - 7",
      "6xy + 15y²",
      "6x + 5y³ - 7"
    ],
    "correctIndex": 0,
    "explanation": "Tratando a y como constante: ∂/∂x (3x²y) = 6xy, ∂/∂x (5xy³) = 5y³, y ∂/∂x (-7x) = -7. Resultado: 6xy + 5y³ - 7.",
    "skill": "Cálculo Multivariable",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Vectorial",
    "subtopic": "Derivadas Parciales"
  },
  {
    "id": "mat-uni-11",
    "sectionId": 1,
    "number": 91,
    "text": "¿Cuál es el determinante de la matriz triangular superior B = [[4, 2, 7], [0, 3, 5], [0, 0, 2]]?",
    "options": [
      "24",
      "14",
      "0",
      "40"
    ],
    "correctIndex": 0,
    "explanation": "El determinante de una matriz triangular (superior o inferior) es el producto directo de los elementos de su diagonal principal: 4 × 3 × 2 = 24.",
    "skill": "Determinantes de Matrices Triangulares",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Matrices Triangulares"
  },
  {
    "id": "mat-uni-12",
    "sectionId": 1,
    "number": 92,
    "text": "Al calcular por partes ∫ x · e^x dx (tomando u = x, dv = e^x dx), ¿cuál es la antiderivada resultante?",
    "options": [
      "e^x(x - 1) + C",
      "e^x(x + 1) + C",
      "x · e^x + C",
      "x² · e^x / 2 + C"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula de integración por partes: ∫ u dv = u·v - ∫ v du. Con du = dx y v = e^x: x·e^x - ∫ e^x dx = x·e^x - e^x + C = e^x(x - 1) + C.",
    "skill": "Técnicas de Integración por Partes",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Integración por Partes"
  },
  {
    "id": "mat-uni-13",
    "sectionId": 1,
    "number": 93,
    "text": "¿Cuál es el gradiente ∇f del campo escalar f(x, y) = x² + y² en el punto (2, 3)?",
    "options": [
      "(4, 6)",
      "(2, 3)",
      "(4, 9)",
      "(8, 12)"
    ],
    "correctIndex": 0,
    "explanation": "El vector gradiente es ∇f = (∂f/∂x, ∂f/∂y) = (2x, 2y). Evaluando en (2, 3): (2(2), 2(3)) = (4, 6).",
    "skill": "Campos Escalares y Gradiente",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariable",
    "subtopic": "Operador Gradiente"
  },
  {
    "id": "mat-uni-14",
    "sectionId": 1,
    "number": 94,
    "text": "¿Cuál es el radio de convergencia R de la serie de potencias geométrica ∑ₙ₌₀^∞ (x/3)ⁿ?",
    "options": [
      "R = 3",
      "R = 1",
      "R = 1/3",
      "R = ∞"
    ],
    "correctIndex": 0,
    "explanation": "La serie converge si la razón |x/3| < 1 => |x| < 3. Por lo tanto, el radio de convergencia es R = 3.",
    "skill": "Series Infinitas y Convergencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Matemático",
    "subtopic": "Series de Potencias"
  },
  {
    "id": "mat-uni-15",
    "sectionId": 1,
    "number": 95,
    "text": "¿Cuál es la inversa de la matriz 2x2 M = [[1, 2], [3, 4]]? (det(M) = -2).",
    "options": [
      "[[-2, 1], [1.5, -0.5]]",
      "[[4, -2], [-3, 1]]",
      "[[-2, 1.5], [1, -0.5]]",
      "[[1, -2], [-3, 4]]"
    ],
    "correctIndex": 0,
    "explanation": "M⁻¹ = (1/det) · [[d, -b], [-c, a]] = (-1/2) · [[4, -2], [-3, 1]] = [[-2, 1], [1.5, -0.5]].",
    "skill": "Inversa de Matrices",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Matriz Inversa"
  },
  {
    "id": "mat-uni-16",
    "sectionId": 1,
    "number": 96,
    "text": "¿Cuál es el volumen del sólido de revolución generado al rotar la región acotada por y = √x, el eje x y x = 4 alrededor del eje x? (Fórmula de discos: V = π ∫₀⁴ y² dx).",
    "options": [
      "8π",
      "16π",
      "4π",
      "32π/3"
    ],
    "correctIndex": 0,
    "explanation": "y² = (√x)² = x. V = π ∫₀⁴ x dx = π [x²/2]₀⁴ = π [16/2 - 0] = 8π.",
    "skill": "Sólidos de Revolución",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Volumen de Revolución"
  },
  {
    "id": "mat-uni-17",
    "sectionId": 1,
    "number": 97,
    "text": "Para la ecuación diferencial lineal de segundo orden homogénea y'' - 5y' + 6y = 0, ¿cuál es su solución general?",
    "options": [
      "y = C₁ e^(2x) + C₂ e^(3x)",
      "y = C₁ e^(-2x) + C₂ e^(-3x)",
      "y = C₁ cos(2x) + C₂ sen(3x)",
      "y = (C₁ + C₂x) e^(2.5x)"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación característica asociada es r² - 5r + 6 = 0 => (r - 2)(r - 3) = 0. Raíces reales distintas: r₁ = 2, r₂ = 3. Solución: y = C₁ e^(2x) + C₂ e^(3x).",
    "skill": "Ecuaciones Diferenciales Lineales de Segundo Orden",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Coeficientes Constantes"
  },
  {
    "id": "mat-uni-18",
    "sectionId": 1,
    "number": 98,
    "text": "¿Cuál es el valor de la integral doble ∫₀¹ ∫₀² (2x + y) dy dx?",
    "options": [
      "4",
      "3",
      "2",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "Integral interna con respecto a y: ∫₀² (2x + y) dy = [2xy + y²/2]₀² = 4x + 4/2 = 4x + 2. Integral externa respecto a x: ∫₀¹ (4x + 2) dx = [2x² + 2x]₀¹ = 2(1)² + 2(1) = 4.",
    "skill": "Integración Múltiple",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariable",
    "subtopic": "Integrales Dobles"
  },
  {
    "id": "mat-uni-19",
    "sectionId": 1,
    "number": 99,
    "text": "¿Cuál es la divergencia div(F) del campo vectorial F(x, y, z) = (x²y, y²z, z²x) en el punto (1, 1, 1)?",
    "options": [
      "6",
      "3",
      "0",
      "9"
    ],
    "correctIndex": 0,
    "explanation": "div(F) = ∂P/∂x + ∂Q/∂y + ∂R/∂z = 2xy + 2yz + 2zx. Evaluando en (1, 1, 1): 2(1)(1) + 2(1)(1) + 2(1)(1) = 2 + 2 + 2 = 6.",
    "skill": "Cálculo Vectorial y Divergencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Vectorial",
    "subtopic": "Operador Divergencia"
  },
  {
    "id": "mat-uni-20",
    "sectionId": 1,
    "number": 100,
    "text": "¿Cuál es la serie de Maclaurin de la función f(x) = e^x?",
    "options": [
      "∑ₙ₌₀^∞ (xⁿ / n!) = 1 + x + x²/2! + x³/3! + ...",
      "∑ₙ₌₀^∞ ((-1)ⁿ x²ⁿ / (2n)!)",
      "∑ₙ₌₀^∞ (xⁿ / n)",
      "∑ₙ₌₁^∞ ((-1)ⁿ⁺¹ xⁿ / n)"
    ],
    "correctIndex": 0,
    "explanation": "La serie de Taylor centrada en 0 (Maclaurin) de e^x es f(x) = ∑ₙ₌₀^∞ (f⁽ⁿ⁾(0) / n!) xⁿ. Como todas las derivadas de e^x en 0 valen 1, la serie es ∑ₙ₌₀^∞ xⁿ / n! = 1 + x + x²/2 + x³/6 + ...",
    "skill": "Series de Taylor y Maclaurin",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Matemático",
    "subtopic": "Series de Taylor"
  },
  {
    "id": "mat-uni-21",
    "sectionId": 1,
    "number": 21,
    "text": "Aplica la regla de L'Hôpital para calcular el límite: lim (x → 0) [(e^(3x) - 1) / (2x)].",
    "options": [
      "3/2",
      "3",
      "0",
      "1/2"
    ],
    "correctIndex": 0,
    "explanation": "Forma indeterminada 0/0. Derivamos numerador y denominador: d/dx[e^(3x) - 1] = 3e^(3x) y d/dx[2x] = 2. Evaluando en x = 0: (3e⁰) / 2 = 3/2.",
    "skill": "Regla de L'Hôpital",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Límites indeterminados"
  },
  {
    "id": "mat-uni-22",
    "sectionId": 1,
    "number": 22,
    "text": "Calcula el límite indeterminado: lim (x → 0) [(1 - cos x) / x²].",
    "options": [
      "1/2",
      "0",
      "1",
      "Indefinido"
    ],
    "correctIndex": 0,
    "explanation": "Aplicando L'Hôpital dos veces: lim [sen x / 2x] = lim [cos x / 2] = cos(0) / 2 = 1/2.",
    "skill": "Límites con funciones trigonométricas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Límites de L'Hôpital"
  },
  {
    "id": "mat-uni-23",
    "sectionId": 1,
    "number": 23,
    "text": "Dada la función y(x) definida implícitamente por x² + y² = 25, ¿cuál es la derivada dy/dx?",
    "options": [
      "-x / y",
      "x / y",
      "-y / x",
      "2x + 2y"
    ],
    "correctIndex": 0,
    "explanation": "Derivando implícitamente respecto a x: 2x + 2y(dy/dx) = 0 ⇒ 2y(dy/dx) = -2x ⇒ dy/dx = -x/y.",
    "skill": "Derivación implícita",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Derivadas implícitas"
  },
  {
    "id": "mat-uni-24",
    "sectionId": 1,
    "number": 24,
    "text": "¿Cuál es la derivada de la función f(x) = ln(x² + 4)?",
    "options": [
      "2x / (x² + 4)",
      "1 / (x² + 4)",
      "2x / x",
      "1 / (2x)"
    ],
    "correctIndex": 0,
    "explanation": "Por regla de la cadena: d/dx[ln(u)] = u'/u. Aquí u = x² + 4, u' = 2x. Por tanto, f'(x) = 2x / (x² + 4).",
    "skill": "Regla de la cadena en logaritmos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Derivadas logarítmicas"
  },
  {
    "id": "mat-uni-25",
    "sectionId": 1,
    "number": 25,
    "text": "Halla la derivada de la función trigonométrica inversa f(x) = arctan(3x).",
    "options": [
      "3 / (1 + 9x²)",
      "1 / (1 + 9x²)",
      "3 / (1 + 3x²)",
      "3 / √(1 - 9x²)"
    ],
    "correctIndex": 0,
    "explanation": "d/dx[arctan(u)] = u' / (1 + u²). Para u = 3x, u' = 3 y u² = 9x². Queda 3 / (1 + 9x²).",
    "skill": "Derivadas de funciones inversas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Funciones trigonométricas inversas"
  },
  {
    "id": "mat-uni-26",
    "sectionId": 1,
    "number": 26,
    "text": "Calcula la segunda derivada f''(x) de la función f(x) = x⁴ - 5x³ + 2x.",
    "options": [
      "12x² - 30x",
      "4x³ - 15x² + 2",
      "24x - 30",
      "12x³ - 30x²"
    ],
    "correctIndex": 0,
    "explanation": "f'(x) = 4x³ - 15x² + 2. Segunda derivada: f''(x) = 12x² - 30x.",
    "skill": "Derivadas de orden superior",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Segunda derivada"
  },
  {
    "id": "mat-uni-27",
    "sectionId": 1,
    "number": 27,
    "text": "Calcula el límite en el infinito: lim (x → ∞) [(4x³ - 2x + 1) / (7x³ + 5x²)].",
    "options": [
      "4/7",
      "0",
      "∞",
      "4/5"
    ],
    "correctIndex": 0,
    "explanation": "Al tener igual grado en numerador y denominador (grado 3), el límite es la razón de sus coeficientes principales: 4/7.",
    "skill": "Límites en el infinito",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Comportamiento asintótico"
  },
  {
    "id": "mat-uni-28",
    "sectionId": 1,
    "number": 28,
    "text": "¿En qué puntos es discontinua la función f(x) = (x + 3) / (x² - 9)?",
    "options": [
      "En x = 3 y x = -3",
      "Solo en x = 3",
      "Solo en x = -3",
      "En ningún punto"
    ],
    "correctIndex": 0,
    "explanation": "El denominador se anula cuando x² - 9 = 0 ⇒ x = ±3. En x = -3 hay una discontinuidad evitable y en x = 3 una asíntota vertical.",
    "skill": "Continuidad y tipos de discontinuidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Discontinuidades"
  },
  {
    "id": "mat-uni-29",
    "sectionId": 1,
    "number": 29,
    "text": "¿Cuál es la derivada de f(x) = x · ln(x) para x > 0?",
    "options": [
      "ln(x) + 1",
      "1/x",
      "ln(x)",
      "x + 1"
    ],
    "correctIndex": 0,
    "explanation": "Regla del producto: (u·v)' = u'v + uv' = (1)·ln(x) + x·(1/x) = ln(x) + 1.",
    "skill": "Regla del producto",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Derivadas trascendentes"
  },
  {
    "id": "mat-uni-30",
    "sectionId": 1,
    "number": 30,
    "text": "Halla la pendiente de la recta tangente a la curva f(x) = x³ - 2x en el punto x = 2.",
    "options": [
      "m = 10",
      "m = 8",
      "m = 12",
      "m = 4"
    ],
    "correctIndex": 0,
    "explanation": "f'(x) = 3x² - 2. Evaluando en x = 2: f'(2) = 3(2)² - 2 = 3(4) - 2 = 12 - 2 = 10.",
    "skill": "Interpretación geométrica de la derivada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Recta tangente"
  },
  {
    "id": "mat-uni-31",
    "sectionId": 1,
    "number": 31,
    "text": "¿Qué condición exige el Teorema de Rolle para garantizar la existencia de al menos un c ∈ (a, b) tal que f'(c) = 0?",
    "options": [
      "f continua en [a, b], diferenciable en (a, b) y f(a) = f(b)",
      "Solo que f sea continua",
      "Que f'(a) = f'(b)",
      "Que f sea creciente"
    ],
    "correctIndex": 0,
    "explanation": "El teorema de Rolle exige continuidad en el cerrado, derivabilidad en el abierto y que las imágenes en los extremos coincidan: f(a) = f(b).",
    "skill": "Teorema de Rolle",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Teoremas fundamentales"
  },
  {
    "id": "mat-uni-32",
    "sectionId": 1,
    "number": 32,
    "text": "El Teorema del Valor Medio de Lagrange afirma que para una función continua en [a, b] y diferenciable en (a, b) existe c ∈ (a, b) tal que:",
    "options": [
      "f'(c) = [f(b) - f(a)] / (b - a)",
      "f'(c) = 0",
      "f(c) = [f(a) + f(b)] / 2",
      "f'(c) = f(b) - f(a)"
    ],
    "correctIndex": 0,
    "explanation": "Establece que en al menos un punto intermedio la derivada instantánea es igual a la tasa de variación media secante.",
    "skill": "Teorema del Valor Medio",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Lagrange"
  },
  {
    "id": "mat-uni-33",
    "sectionId": 1,
    "number": 33,
    "text": "Encuentra los puntos críticos de la función f(x) = 2x³ - 9x² + 12x.",
    "options": [
      "x = 1 y x = 2",
      "x = -1 y x = -2",
      "x = 0 y x = 3",
      "x = 2 y x = 3"
    ],
    "correctIndex": 0,
    "explanation": "f'(x) = 6x² - 18x + 12 = 0 ⇒ x² - 3x + 2 = 0 ⇒ (x - 1)(x - 2) = 0 ⇒ x = 1 y x = 2.",
    "skill": "Puntos críticos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Extremos de funciones"
  },
  {
    "id": "mat-uni-34",
    "sectionId": 1,
    "number": 34,
    "text": "Clasifica el punto crítico x = 1 para la función anterior f(x) = 2x³ - 9x² + 12x usando el criterio de la segunda derivada.",
    "options": [
      "Es un máximo relativo local (f''(1) = -6 < 0)",
      "Es un mínimo relativo local",
      "Es un punto de inflexión",
      "Es una discontinuidad"
    ],
    "correctIndex": 0,
    "explanation": "f''(x) = 12x - 18. Para x = 1: f''(1) = 12(1) - 18 = -6 < 0. Como la segunda derivada es negativa, la curva es cóncava hacia abajo y x = 1 es un máximo local.",
    "skill": "Criterio de la segunda derivada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Máximos y mínimos"
  },
  {
    "id": "mat-uni-35",
    "sectionId": 1,
    "number": 35,
    "text": "¿En qué punto tiene un punto de inflexión la curva f(x) = x³ - 6x² + 9x + 2?",
    "options": [
      "x = 2",
      "x = 3",
      "x = 1",
      "x = 0"
    ],
    "correctIndex": 0,
    "explanation": "f'(x) = 3x² - 12x + 9; f''(x) = 6x - 12. Igualando a cero: 6x - 12 = 0 ⇒ x = 2.",
    "skill": "Puntos de inflexión",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Concavidad"
  },
  {
    "id": "mat-uni-36",
    "sectionId": 1,
    "number": 36,
    "text": "Se desea cercar un terreno rectangular contiguo a un río utilizando 200 m de cerca (no se cerca el lado del río). ¿Qué ancho maximiza el área?",
    "options": [
      "x = 50 metros",
      "x = 100 metros",
      "x = 25 metros",
      "x = 40 metros"
    ],
    "correctIndex": 0,
    "explanation": "Perímetro cercado: 2x + y = 200 ⇒ y = 200 - 2x. Área A(x) = x(200 - 2x) = 200x - 2x². A'(x) = 200 - 4x = 0 ⇒ x = 50 m.",
    "skill": "Problemas de optimización",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Maximización de áreas"
  },
  {
    "id": "mat-uni-37",
    "sectionId": 1,
    "number": 37,
    "text": "La función de costo total de una fábrica es C(x) = 500 + 10x + 0.1x². ¿Cuál es el costo marginal para una producción de x = 100 unidades?",
    "options": [
      "$30.00 por unidad",
      "$20.00 por unidad",
      "$10.00 por unidad",
      "$40.00 por unidad"
    ],
    "correctIndex": 0,
    "explanation": "El costo marginal es la derivada del costo total: C'(x) = 10 + 0.2x. Para x = 100: C'(100) = 10 + 0.2(100) = 10 + 20 = $30.00/unidad.",
    "skill": "Costo marginal",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Aplicado",
    "subtopic": "Economía matemática"
  },
  {
    "id": "mat-uni-38",
    "sectionId": 1,
    "number": 38,
    "text": "Calcula el límite: lim (x → ∞) [(1 + 1/x)^x].",
    "options": [
      "e (número de Euler ≈ 2.71828)",
      "1",
      "∞",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Por definición del número e mediante límites de sucesiones continuas: lim(x→∞) (1 + 1/x)^x = e.",
    "skill": "Límites exponenciales notables",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Número e"
  },
  {
    "id": "mat-uni-39",
    "sectionId": 1,
    "number": 39,
    "text": "¿Cuál es la diferencial dy de la función y = sen(x³)?",
    "options": [
      "dy = 3x² · cos(x³) dx",
      "dy = cos(x³) dx",
      "dy = 3x² · sen(x³) dx",
      "dy = -cos(x³) dx"
    ],
    "correctIndex": 0,
    "explanation": "dy = f'(x) dx. Derivando por regla de la cadena: f'(x) = 3x² cos(x³). Por tanto dy = 3x² cos(x³) dx.",
    "skill": "Diferenciales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Diferencial",
    "subtopic": "Aproximaciones lineales"
  },
  {
    "id": "mat-uni-40",
    "sectionId": 1,
    "number": 40,
    "text": "La aceleración a(t) de una partícula es la segunda derivada de su posición s(t). Si s(t) = 2t³ - 6t² + 4, ¿cuál es a(2)?",
    "options": [
      "12 m/s²",
      "0 m/s²",
      "24 m/s²",
      "6 m/s²"
    ],
    "correctIndex": 0,
    "explanation": "v(t) = s'(t) = 6t² - 12t. a(t) = v'(t) = 12t - 12. Evaluando en t = 2: a(2) = 12(2) - 12 = 24 - 12 = 12 m/s².",
    "skill": "Cinemática diferencial",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Matemática",
    "subtopic": "Aceleración instantánea"
  },
  {
    "id": "mat-uni-41",
    "sectionId": 1,
    "number": 41,
    "text": "Resuelve la integral indefinida por sustitución: ∫ 2x · e^(x²) dx.",
    "options": [
      "e^(x²) + C",
      "2e^(x²) + C",
      "(1/2)e^(x²) + C",
      "x² e^(x²) + C"
    ],
    "correctIndex": 0,
    "explanation": "Hacemos u = x² ⇒ du = 2x dx. La integral se transforma en ∫ e^u du = e^u + C = e^(x²) + C.",
    "skill": "Integración por sustitución",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Cambio de variable"
  },
  {
    "id": "mat-uni-42",
    "sectionId": 1,
    "number": 42,
    "text": "Calcula por el método de integración por partes: ∫ x · cos(x) dx.",
    "options": [
      "x · sen(x) + cos(x) + C",
      "x · sen(x) - cos(x) + C",
      "-x · sen(x) + cos(x) + C",
      "x · cos(x) + sen(x) + C"
    ],
    "correctIndex": 0,
    "explanation": "u = x, du = dx; dv = cos(x) dx, v = sen(x). ∫ u dv = uv - ∫ v du = x sen(x) - ∫ sen(x) dx = x sen(x) - (-cos(x)) = x sen(x) + cos(x) + C.",
    "skill": "Integración por partes",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Método por partes"
  },
  {
    "id": "mat-uni-43",
    "sectionId": 1,
    "number": 43,
    "text": "Calcula la integral: ∫ [1 / (x² + 9)] dx.",
    "options": [
      "(1/3) arctan(x / 3) + C",
      "arctan(x / 3) + C",
      "(1/9) arctan(x) + C",
      "ln(x² + 9) + C"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula estándar: ∫ dx / (x² + a²) = (1/a) arctan(x/a) + C. Con a = 3, resulta (1/3) arctan(x/3) + C.",
    "skill": "Integrales trigonométricas inversas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Formas canónicas"
  },
  {
    "id": "mat-uni-44",
    "sectionId": 1,
    "number": 44,
    "text": "Descompón en fracciones parciales la expresión: 1 / [x(x + 1)].",
    "options": [
      "(1 / x) - [1 / (x + 1)]",
      "(1 / x) + [1 / (x + 1)]",
      "2 / x - 1 / (x + 1)",
      "1 / (x² + x)"
    ],
    "correctIndex": 0,
    "explanation": "1 / [x(x + 1)] = A/x + B/(x + 1) ⇒ 1 = A(x + 1) + Bx. Para x = 0: A = 1. Para x = -1: B = -1. Queda 1/x - 1/(x+1).",
    "skill": "Fracciones parciales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Descomposición racional"
  },
  {
    "id": "mat-uni-45",
    "sectionId": 1,
    "number": 45,
    "text": "Calcula la integral impropia de primera especie: ∫ (de 1 a ∞) (1 / x²) dx.",
    "options": [
      "1 (converge)",
      "∞ (diverge)",
      "0",
      "2"
    ],
    "correctIndex": 0,
    "explanation": "lim(b→∞) [-1/x] de 1 a b = lim(b→∞) (-1/b - (-1/1)) = 0 + 1 = 1. La integral converge a 1.",
    "skill": "Integrales impropias",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Convergencia de integrales"
  },
  {
    "id": "mat-uni-46",
    "sectionId": 1,
    "number": 46,
    "text": "Calcula la integral definida: ∫ (de 0 a π/2) sen(x) dx.",
    "options": [
      "1",
      "0",
      "π/2",
      "2"
    ],
    "correctIndex": 0,
    "explanation": "Antiderivada: -cos(x). Evaluando: [-cos(π/2)] - [-cos(0)] = 0 - (-1) = 1.",
    "skill": "Integral definida trigonométrica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Teorema fundamental"
  },
  {
    "id": "mat-uni-47",
    "sectionId": 1,
    "number": 47,
    "text": "¿Cuál es el valor medio de la función f(x) = 3x² en el intervalo [0, 2]?",
    "options": [
      "4",
      "8",
      "6",
      "2"
    ],
    "correctIndex": 0,
    "explanation": "Valor medio = [1 / (b - a)] ∫ f(x) dx = (1/2) ∫₀² 3x² dx = (1/2) [x³]₀² = (1/2)(8 - 0) = 4.",
    "skill": "Teorema del valor medio para integrales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Valor promedio"
  },
  {
    "id": "mat-uni-48",
    "sectionId": 1,
    "number": 48,
    "text": "Calcula: ∫ [x / (x² + 1)] dx.",
    "options": [
      "(1/2) ln(x² + 1) + C",
      "ln(x² + 1) + C",
      "arctan(x) + C",
      "x ln(x² + 1) + C"
    ],
    "correctIndex": 0,
    "explanation": "u = x² + 1 ⇒ du = 2x dx ⇒ x dx = du / 2. ∫ (1/u)(du/2) = (1/2) ln|u| + C = (1/2) ln(x² + 1) + C.",
    "skill": "Sustitución logarítmica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Integrales de tipo logaritmo"
  },
  {
    "id": "mat-uni-49",
    "sectionId": 1,
    "number": 49,
    "text": "¿Cuál es la integral indefinida de la función exponencial con base arbitraria: ∫ a^x dx (para a > 0, a ≠ 1)?",
    "options": [
      "(a^x / ln a) + C",
      "a^x · ln a + C",
      "a^(x+1) / (x+1) + C",
      "e^x + C"
    ],
    "correctIndex": 0,
    "explanation": "d/dx [a^x] = a^x ln a. Por tanto, dividiendo entre la constante ln a: ∫ a^x dx = a^x / (ln a) + C.",
    "skill": "Integración exponencial general",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Bases generales"
  },
  {
    "id": "mat-uni-50",
    "sectionId": 1,
    "number": 50,
    "text": "Calcula por partes la integral: ∫ ln(x) dx.",
    "options": [
      "x · ln(x) - x + C",
      "1/x + C",
      "x · ln(x) + x + C",
      "(ln x)² / 2 + C"
    ],
    "correctIndex": 0,
    "explanation": "u = ln x, du = dx/x; dv = dx, v = x. ∫ ln x dx = x ln x - ∫ x (dx/x) = x ln x - ∫ dx = x ln x - x + C.",
    "skill": "Integral del logaritmo natural",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Integración por partes"
  },
  {
    "id": "mat-uni-51",
    "sectionId": 1,
    "number": 51,
    "text": "Calcula el área encerrada entre la parábola y = x² y la recta y = 4 en el primer cuadrante.",
    "options": [
      "16/3 unidades²",
      "8 unidades²",
      "4 unidades²",
      "32/3 unidades²"
    ],
    "correctIndex": 0,
    "explanation": "Puntos de intersección en x ≥ 0: x² = 4 ⇒ x = 2. Área = ∫₀² (4 - x²) dx = [4x - x³/3]₀² = 8 - 8/3 = 16/3 u².",
    "skill": "Área entre curvas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Aplicaciones geométricas"
  },
  {
    "id": "mat-uni-52",
    "sectionId": 1,
    "number": 52,
    "text": "El método de discos para calcular el volumen de revolución al girar f(x) alrededor del eje X en [a, b] utiliza la integral:",
    "options": [
      "V = π ∫ [f(x)]² dx",
      "V = 2π ∫ x f(x) dx",
      "V = ∫ f(x) dx",
      "V = π² ∫ f(x) dx"
    ],
    "correctIndex": 0,
    "explanation": "Cada rebanada diferencial es un cilindro de radio f(x) y espesor dx con volumen diferencial dV = π [f(x)]² dx.",
    "skill": "Volumen de sólidos de revolución",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Método de discos"
  },
  {
    "id": "mat-uni-53",
    "sectionId": 1,
    "number": 53,
    "text": "Dada la función de dos variables f(x, y) = 3x²y + 5xy³ - 7, ¿cuál es su derivada parcial ∂f/∂x?",
    "options": [
      "6xy + 5y³",
      "3x² + 15xy²",
      "6x + 15y²",
      "6xy + 15xy²"
    ],
    "correctIndex": 0,
    "explanation": "Tratamos a y como constante y derivamos respecto a x: d/dx[3x²y] = 6xy y d/dx[5xy³] = 5y³.",
    "skill": "Derivadas parciales de primer orden",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariado",
    "subtopic": "Derivadas parciales"
  },
  {
    "id": "mat-uni-54",
    "sectionId": 1,
    "number": 54,
    "text": "Para la misma función f(x, y) = 3x²y + 5xy³ - 7, ¿cuál es su derivada parcial ∂f/∂y?",
    "options": [
      "3x² + 15xy²",
      "6xy + 5y³",
      "3x² + 5y³",
      "15xy²"
    ],
    "correctIndex": 0,
    "explanation": "Tratamos a x como constante y derivamos respecto a y: d/dy[3x²y] = 3x² y d/dy[5xy³] = 15xy².",
    "skill": "Derivada parcial respecto a y",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariado",
    "subtopic": "Cálculo en varias variables"
  },
  {
    "id": "mat-uni-55",
    "sectionId": 1,
    "number": 55,
    "text": "El vector gradiente ∇f(x, y) de un campo escalar diferenciable f está compuesto por:",
    "options": [
      "[∂f/∂x , ∂f/∂y]",
      "∂²f/∂x² + ∂²f/∂y²",
      "[∂f/∂y , -∂f/∂x]",
      "∫ f dx + ∫ f dy"
    ],
    "correctIndex": 0,
    "explanation": "El gradiente es el vector formado por todas las derivadas parciales de primer orden y apunta en la dirección de máxima tasa de crecimiento.",
    "skill": "Vector gradiente",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariado",
    "subtopic": "Campos escalares"
  },
  {
    "id": "mat-uni-56",
    "sectionId": 1,
    "number": 56,
    "text": "¿Qué teorema asegura que si las derivadas cruzadas de segundo orden son continuas, entonces ∂²f/(∂x∂y) = ∂²f/(∂y∂x)?",
    "options": [
      "Teorema de Clairaut (o Schwarz)",
      "Teorema de Green",
      "Teorema de Stokes",
      "Teorema de Gauss"
    ],
    "correctIndex": 0,
    "explanation": "El teorema de Clairaut-Schwarz garantiza la igualdad de las derivadas parciales mixtas bajo hipótesis de continuidad.",
    "skill": "Teorema de Clairaut",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariado",
    "subtopic": "Derivadas mixtas"
  },
  {
    "id": "mat-uni-57",
    "sectionId": 1,
    "number": 57,
    "text": "¿Cuál es el valor del determinante jacobiano al pasar de coordenadas cartesianas (x, y) a polares (r, θ)?",
    "options": [
      "r",
      "1",
      "r²",
      "r sen θ"
    ],
    "correctIndex": 0,
    "explanation": "x = r cos θ, y = r sen θ. El jacobiano es ∂(x,y)/∂(r,θ) = r(cos²θ + sen²θ) = r.",
    "skill": "Jacobiano en coordenadas polares",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariado",
    "subtopic": "Cambio de coordenadas"
  },
  {
    "id": "mat-uni-58",
    "sectionId": 1,
    "number": 58,
    "text": "Calcula la longitud de arco L de una curva plana y = f(x) en el intervalo [a, b] mediante la fórmula:",
    "options": [
      "L = ∫ √(1 + [f'(x)]²) dx",
      "L = ∫ [1 + f'(x)] dx",
      "L = ∫ √[f(x)] dx",
      "L = 2π ∫ f(x) dx"
    ],
    "correctIndex": 0,
    "explanation": "Por teorema de Pitágoras en elementos diferenciales ds = √(dx² + dy²) = √(1 + (dy/dx)²) dx.",
    "skill": "Longitud de arco",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Curvas planas"
  },
  {
    "id": "mat-uni-59",
    "sectionId": 1,
    "number": 59,
    "text": "Calcula el gradiente ∇f en el punto (1, 2) para f(x, y) = x² + 2xy.",
    "options": [
      "[6, 2]",
      "[4, 2]",
      "[2, 4]",
      "[6, 4]"
    ],
    "correctIndex": 0,
    "explanation": "∂f/∂x = 2x + 2y; en (1,2) es 2(1) + 2(2) = 6. ∂f/∂y = 2x; en (1,2) es 2(1) = 2. Gradiente: [6, 2].",
    "skill": "Evaluación del gradiente",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariado",
    "subtopic": "Gradientes numéricos"
  },
  {
    "id": "mat-uni-60",
    "sectionId": 1,
    "number": 60,
    "text": "En un problema de optimización con restricciones g(x, y) = c, ¿qué método introduce una variable auxiliar λ para igualar ∇f = λ∇g?",
    "options": [
      "Multiplicadores de Lagrange",
      "Método de Newton-Raphson",
      "Método de Gauss-Seidel",
      "Algoritmo símplex"
    ],
    "correctIndex": 0,
    "explanation": "El método de multiplicadores de Lagrange permite encontrar extremos condicionados igualando los vectores gradiente de la función objetivo y la restricción.",
    "skill": "Multiplicadores de Lagrange",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariado",
    "subtopic": "Optimización con restricciones"
  },
  {
    "id": "mat-uni-61",
    "sectionId": 1,
    "number": 61,
    "text": "Dadas las matrices A (2x3) y B (3x4), ¿cuál es la dimensión de la matriz producto A · B?",
    "options": [
      "2 x 4",
      "3 x 3",
      "2 x 3",
      "No se pueden multiplicar"
    ],
    "correctIndex": 0,
    "explanation": "El número de columnas de A (3) coincide con las filas de B (3). La matriz resultante tiene las filas de A y columnas de B: 2 x 4.",
    "skill": "Multiplicación de matrices",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Dimensiones matriciales"
  },
  {
    "id": "mat-uni-62",
    "sectionId": 1,
    "number": 62,
    "text": "Calcula el determinante de la matriz 3x3: | [[1, 0, 2], [0, 3, 1], [4, 0, 5]] | mediante la regla de Sarrus o cofactores.",
    "options": [
      "-9",
      "9",
      "15",
      "-15"
    ],
    "correctIndex": 0,
    "explanation": "Desarrollando por la segunda columna: 3 · [ (1)(5) - (2)(4) ] = 3 · (5 - 8) = 3 · (-3) = -9.",
    "skill": "Determinantes 3x3",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Desarrollo por cofactores"
  },
  {
    "id": "mat-uni-63",
    "sectionId": 1,
    "number": 63,
    "text": "¿Cuál es la traza de la matriz cuadrada M = [[5, 2, 1], [0, -3, 4], [7, 6, 8]]?",
    "options": [
      "10",
      "12",
      "-3",
      "16"
    ],
    "correctIndex": 0,
    "explanation": "La traza es la suma de los elementos de la diagonal principal: 5 + (-3) + 8 = 10.",
    "skill": "Traza de una matriz",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Propiedades de matrices"
  },
  {
    "id": "mat-uni-64",
    "sectionId": 1,
    "number": 64,
    "text": "Si el determinante de una matriz cuadrada A es det(A) = 4, ¿cuál es el determinante de su matriz inversa A⁻¹?",
    "options": [
      "1/4 (0.25)",
      "4",
      "-4",
      "-1/4"
    ],
    "correctIndex": 0,
    "explanation": "Por propiedad fundamental: det(A⁻¹) = 1 / det(A) = 1/4.",
    "skill": "Determinante de la matriz inversa",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Propiedades de determinantes"
  },
  {
    "id": "mat-uni-65",
    "sectionId": 1,
    "number": 65,
    "text": "Una matriz cuadrada A es invertible (no singular) si y solo si su determinante cumple:",
    "options": [
      "det(A) ≠ 0",
      "det(A) = 0",
      "det(A) > 0",
      "det(A) = 1"
    ],
    "correctIndex": 0,
    "explanation": "Una matriz admite inversa multiplicativa si y solo si es de rango pleno, lo cual equivale a det(A) ≠ 0.",
    "skill": "Condición de invertibilidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Matrices invertibles"
  },
  {
    "id": "mat-uni-66",
    "sectionId": 1,
    "number": 66,
    "text": "Para una matriz ortogonal Q, se cumple por definición que su traspuesta Q^T es igual a:",
    "options": [
      "Su matriz inversa Q⁻¹",
      "Su opuesta -Q",
      "La matriz identidad I",
      "La matriz nula"
    ],
    "correctIndex": 0,
    "explanation": "Una matriz ortogonal satisface Q^T · Q = I, lo que significa que Q^T = Q⁻¹.",
    "skill": "Matrices ortogonales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Transformaciones isométricas"
  },
  {
    "id": "mat-uni-67",
    "sectionId": 1,
    "number": 67,
    "text": "El Teorema de Rouché-Frobenius establece que un sistema lineal Ax = b tiene solución única si y solo si:",
    "options": [
      "rango(A) = rango(A|b) = número de incógnitas",
      "rango(A) < rango(A|b)",
      "det(A) = 0",
      "rango(A) > número de incógnitas"
    ],
    "correctIndex": 0,
    "explanation": "El sistema es compatible determinado cuando el rango de la matriz de coeficientes iguala al de la ampliada y al número de incógnitas.",
    "skill": "Teorema de Rouché-Frobenius",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Sistemas lineales"
  },
  {
    "id": "mat-uni-68",
    "sectionId": 1,
    "number": 68,
    "text": "Calcula el producto escalar (punto) de los vectores u = (2, -3, 4) y v = (5, 1, -2).",
    "options": [
      "-1",
      "15",
      "0",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "u · v = (2)(5) + (-3)(1) + (4)(-2) = 10 - 3 - 8 = -1.",
    "skill": "Producto escalar en R³",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Geometría vectorial"
  },
  {
    "id": "mat-uni-69",
    "sectionId": 1,
    "number": 69,
    "text": "¿Cuál es la norma o módulo del vector v = (2, 3, 6) en el espacio tridimensional R³?",
    "options": [
      "7",
      "11",
      "√11",
      "49"
    ],
    "correctIndex": 0,
    "explanation": "||v|| = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7.",
    "skill": "Norma euclidiana",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Espacios vectoriales normados"
  },
  {
    "id": "mat-uni-70",
    "sectionId": 1,
    "number": 70,
    "text": "Dos vectores no nulos u y v son ortogonales si y solo si su producto escalar es:",
    "options": [
      "Igual a cero (u · v = 0)",
      "Igual a uno",
      "Mayor que cero",
      "Paralelo"
    ],
    "correctIndex": 0,
    "explanation": "Por definición geométrica u · v = ||u|| ||v|| cos θ. Como cos(90°) = 0, los vectores son ortogonales si u · v = 0.",
    "skill": "Ortogonalidad de vectores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Ángulo entre vectores"
  },
  {
    "id": "mat-uni-71",
    "sectionId": 1,
    "number": 71,
    "text": "Para encontrar los valores propios (autovalores λ) de una matriz cuadrada A, se debe resolver la ecuación característica:",
    "options": [
      "det(A - λI) = 0",
      "A · λ = I",
      "det(A) = λ",
      "A + λI = 0"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación característica surge de (A - λI)v = 0 para vectores propios no nulos v ≠ 0, lo que exige det(A - λI) = 0.",
    "skill": "Valores propios y ecuación característica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Diagonalización"
  },
  {
    "id": "mat-uni-72",
    "sectionId": 1,
    "number": 72,
    "text": "Calcula los valores propios de la matriz 2x2: A = [[3, 0], [0, 5]].",
    "options": [
      "λ₁ = 3 y λ₂ = 5",
      "λ₁ = 8 y λ₂ = 15",
      "λ₁ = 0 y λ₂ = 3",
      "λ = ±√15"
    ],
    "correctIndex": 0,
    "explanation": "En una matriz diagonal, los valores propios son exactamente los elementos de su diagonal principal: λ₁ = 3 y λ₂ = 5.",
    "skill": "Autovalores en matrices diagonales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Espectro de la matriz"
  },
  {
    "id": "mat-uni-73",
    "sectionId": 1,
    "number": 73,
    "text": "Resuelve la ecuación diferencial de variables separables: dy/dx = 2x · y (para y > 0).",
    "options": [
      "y(x) = C · e^(x²)",
      "y(x) = x² + C",
      "y(x) = C · e^(2x)",
      "y(x) = ln(x²) + C"
    ],
    "correctIndex": 0,
    "explanation": "dy / y = 2x dx ⇒ ln(y) = x² + K ⇒ y(x) = e^(x² + K) = C · e^(x²).",
    "skill": "Ecuaciones diferenciales separables",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Separación de variables"
  },
  {
    "id": "mat-uni-74",
    "sectionId": 1,
    "number": 74,
    "text": "¿Cuál es el factor integrante μ(x) para resolver la ecuación diferencial lineal de primer orden y' + 2y = 4x?",
    "options": [
      "μ(x) = e^(2x)",
      "μ(x) = 2x",
      "μ(x) = e^(x²)",
      "μ(x) = ln(2x)"
    ],
    "correctIndex": 0,
    "explanation": "Para y' + P(x)y = Q(x), el factor integrante es μ(x) = e^(∫ P(x)dx) = e^(∫ 2 dx) = e^(2x).",
    "skill": "Factor integrante",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "EDO lineal de primer orden"
  },
  {
    "id": "mat-uni-75",
    "sectionId": 1,
    "number": 75,
    "text": "¿Cuál es el orden de la ecuación diferencial: d³y/dx³ + 4(dy/dx)² + y = sen(x)?",
    "options": [
      "Tercer orden",
      "Segundo orden",
      "Primer orden",
      "Cuarto orden"
    ],
    "correctIndex": 0,
    "explanation": "El orden de una ecuación diferencial es el orden de la derivada más alta presente en ella, que en este caso es la tercera derivada (orden 3).",
    "skill": "Clasificación de ecuaciones diferenciales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Orden y grado"
  },
  {
    "id": "mat-uni-76",
    "sectionId": 1,
    "number": 76,
    "text": "La solución general de la ecuación diferencial homogénea de segundo orden con coeficientes constantes y'' - 4y = 0 es:",
    "options": [
      "y(x) = C₁ e^(2x) + C₂ e^(-2x)",
      "y(x) = C₁ cos(2x) + C₂ sen(2x)",
      "y(x) = (C₁ + C₂ x)e^(2x)",
      "y(x) = C₁ e^(4x)"
    ],
    "correctIndex": 0,
    "explanation": "Ecuación característica: r² - 4 = 0 ⇒ r = ±2. Como las raíces son reales y distintas, y(x) = C₁ e^(2x) + C₂ e^(-2x).",
    "skill": "EDO de segundo orden",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Ecuación característica"
  },
  {
    "id": "mat-uni-77",
    "sectionId": 1,
    "number": 77,
    "text": "Si las raíces de la ecuación característica de una EDO homogénea son complejas conjugadas r = α ± βi, la solución general adopta la forma:",
    "options": [
      "y(x) = e^(αx) [C₁ cos(βx) + C₂ sen(βx)]",
      "y(x) = C₁ e^(αx) + C₂ e^(βx)",
      "y(x) = e^(βx) [C₁ cos(αx) + C₂ sen(αx)]",
      "y(x) = C₁ cos(αx)"
    ],
    "correctIndex": 0,
    "explanation": "Por la fórmula de Euler e^(iθ) = cos θ + i sen θ, las soluciones complejas conjugadas se expresan en senos y cosenos modulados exponencialmente.",
    "skill": "Soluciones oscilatorias en EDO",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Raíces complejas"
  },
  {
    "id": "mat-uni-78",
    "sectionId": 1,
    "number": 78,
    "text": "El Wronskiano W(y₁, y₂) de dos soluciones de una EDO de segundo orden es el determinante de la matriz:",
    "options": [
      "[[y₁, y₂], [y₁', y₂']]",
      "[[y₁, y₁'], [y₂, y₂']]",
      "[[y₁', y₂'], [y₁'', y₂'']]",
      "[[y₁, y₂], [y₁'', y₂'']]"
    ],
    "correctIndex": 0,
    "explanation": "Por definición, W(y₁, y₂) = y₁ · y₂' - y₁' · y₂ = det([[y₁, y₂], [y₁', y₂']]). Si W ≠ 0, las soluciones son linealmente independientes.",
    "skill": "Wronskiano e independencia lineal",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Independencia de soluciones"
  },
  {
    "id": "mat-uni-79",
    "sectionId": 1,
    "number": 79,
    "text": "¿Cuál es la transformada de Laplace de la función constante f(t) = 1 para s > 0?",
    "options": [
      "1 / s",
      "s",
      "1 / s²",
      "e^(-s)"
    ],
    "correctIndex": 0,
    "explanation": "L{1} = ∫₀^∞ e^(-st) · 1 dt = [-e^(-st) / s]₀^∞ = 0 - (-1/s) = 1/s.",
    "skill": "Transformada de Laplace",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Transformadas elementales"
  },
  {
    "id": "mat-uni-80",
    "sectionId": 1,
    "number": 80,
    "text": "¿Cuál es la transformada de Laplace de la función exponencial f(t) = e^(at) para s > a?",
    "options": [
      "1 / (s - a)",
      "1 / (s + a)",
      "a / s²",
      "s / (s² + a²)"
    ],
    "correctIndex": 0,
    "explanation": "L{e^(at)} = ∫₀^∞ e^(-(s-a)t) dt = 1 / (s - a) para s > a.",
    "skill": "Transformada de la exponencial",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Propiedades de Laplace"
  },
  {
    "id": "mat-uni-81",
    "sectionId": 1,
    "number": 81,
    "text": "Aplica la primera parte del Teorema Fundamental del Cálculo para hallar d/dx [ ∫ (de 1 a x) √(t³ + 1) dt ].",
    "options": [
      "√(x³ + 1)",
      "3x² / [2√(x³ + 1)]",
      "√(x³ + 1) - √2",
      "(1/3)(x³ + 1)^(3/2)"
    ],
    "correctIndex": 0,
    "explanation": "Por el teorema fundamental del cálculo: d/dx [ ∫_a^x f(t) dt ] = f(x). Por tanto, la derivada es √(x³ + 1).",
    "skill": "Teorema Fundamental del Cálculo",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Derivada de integrales"
  },
  {
    "id": "mat-uni-82",
    "sectionId": 1,
    "number": 82,
    "text": "Para resolver la integral ∫ [1 / (x² √(4 - x²))] dx, ¿cuál es la sustitución trigonométrica adecuada?",
    "options": [
      "x = 2 sen(θ)",
      "x = 2 tan(θ)",
      "x = 2 sec(θ)",
      "x = 4 sen(θ)"
    ],
    "correctIndex": 0,
    "explanation": "Para formas del tipo √(a² - x²) se utiliza x = a sen(θ). En este caso a = 2, por lo que x = 2 sen(θ).",
    "skill": "Sustitución trigonométrica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Técnicas de integración"
  },
  {
    "id": "mat-uni-83",
    "sectionId": 1,
    "number": 83,
    "text": "Para formas del tipo √(x² + a²), ¿cuál es la sustitución trigonométrica canónica?",
    "options": [
      "x = a tan(θ)",
      "x = a sen(θ)",
      "x = a sec(θ)",
      "x = a cos(θ)"
    ],
    "correctIndex": 0,
    "explanation": "La identidad 1 + tan²(θ) = sec²(θ) permite simplificar √(a² tan²θ + a²) = a sec(θ) empleando x = a tan(θ).",
    "skill": "Sustituciones con tangente",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Integral",
    "subtopic": "Integración algebraica"
  },
  {
    "id": "mat-uni-84",
    "sectionId": 1,
    "number": 84,
    "text": "Aplica el Criterio del Cociente (de D'Alembert) para estudiar la serie ∑ (de n=1 a ∞) [n / 2ⁿ]. El límite L = lim |a_{n+1} / a_n| es:",
    "options": [
      "1/2 (la serie converge)",
      "2 (diverge)",
      "1 (criterio no concluyente)",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "L = lim [(n+1)/2^(n+1)] / [n/2^n] = lim [(n+1)/(2n)] = 1/2. Como L = 1/2 < 1, la serie converge absolutamente.",
    "skill": "Criterio de D'Alembert",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Infinitesimal",
    "subtopic": "Series infinitas"
  },
  {
    "id": "mat-uni-85",
    "sectionId": 1,
    "number": 85,
    "text": "Calcula el radio de convergencia R de la serie de potencias ∑ (de n=0 a ∞) (xⁿ / n!).",
    "options": [
      "R = ∞ (converge para todo x real)",
      "R = 1",
      "R = 0",
      "R = e"
    ],
    "correctIndex": 0,
    "explanation": "Esta serie de potencias representa a la función exponencial e^x, la cual converge absolutamente en toda la recta real (R = ∞).",
    "skill": "Series de Taylor y Maclaurin",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Infinitesimal",
    "subtopic": "Radio de convergencia"
  },
  {
    "id": "mat-uni-86",
    "sectionId": 1,
    "number": 86,
    "text": "Dada la función f(x, y) = x³ - 3xy + y³, calcula la matriz hessiana H(x, y) de segundas derivadas parciales.",
    "options": [
      "[[6x, -3], [-3, 6y]]",
      "[[3x², -3y], [-3x, 3y²]]",
      "[[6x, 0], [0, 6y]]",
      "[[-3, 6x], [6y, -3]]"
    ],
    "correctIndex": 0,
    "explanation": "f_xx = 6x, f_xy = -3, f_yx = -3, f_yy = 6y. La matriz hessiana es [[6x, -3], [-3, 6y]].",
    "skill": "Matriz hessiana",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariado",
    "subtopic": "Segundas derivadas parciales"
  },
  {
    "id": "mat-uni-87",
    "sectionId": 1,
    "number": 87,
    "text": "Calcula la derivada direccional de f(x, y) = 2x² + 3y² en el punto (1, 1) en la dirección del vector unitario u = (1/√2, 1/√2).",
    "options": [
      "7√2",
      "5√2",
      "10",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "∇f = (4x, 6y). En (1,1): ∇f = (4, 6). D_u f = ∇f · u = 4(1/√2) + 6(1/√2) = 10/√2 = 5√2.",
    "skill": "Derivada direccional",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariado",
    "subtopic": "Variación direccional"
  },
  {
    "id": "mat-uni-88",
    "sectionId": 1,
    "number": 88,
    "text": "Una ecuación diferencial M(x, y)dx + N(x, y)dy = 0 es exacta si y solo si se cumple la condición de Cauchy-Schwarz:",
    "options": [
      "∂M/∂y = ∂N/∂x",
      "∂M/∂x = ∂N/∂y",
      "M · N = 0",
      "∂²M/∂x² = ∂²N/∂y²"
    ],
    "correctIndex": 0,
    "explanation": "Por igualdad de derivadas cruzadas de la función potencial f (donde ∂f/∂x = M y ∂f/∂y = N), se requiere ∂M/∂y = ∂N/∂x.",
    "skill": "Ecuaciones diferenciales exactas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Condición de exactitud"
  },
  {
    "id": "mat-uni-89",
    "sectionId": 1,
    "number": 89,
    "text": "Calcula la transformada de Laplace de la derivada: L{f'(t)} para s > 0.",
    "options": [
      "s · F(s) - f(0)",
      "s · F(s)",
      "F(s) / s",
      "s² · F(s) - f'(0)"
    ],
    "correctIndex": 0,
    "explanation": "Por integración por partes en la definición de la transformada: L{f'(t)} = s F(s) - f(0).",
    "skill": "Propiedades de la transformada de Laplace",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Transformada de derivadas"
  },
  {
    "id": "mat-uni-90",
    "sectionId": 1,
    "number": 90,
    "text": "Calcula la transformada de Laplace de f(t) = sen(ωt).",
    "options": [
      "ω / (s² + ω²)",
      "s / (s² + ω²)",
      "ω / (s² - ω²)",
      "1 / (s + ω)"
    ],
    "correctIndex": 0,
    "explanation": "L{sen(ωt)} = ω / (s² + ω²) para s > 0.",
    "skill": "Transformadas trigonométricas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Fórmulas canónicas de Laplace"
  },
  {
    "id": "mat-uni-91",
    "sectionId": 1,
    "number": 91,
    "text": "¿Cuál es la solución particular y_p(x) de la EDO no homogénea y'' + y = 5?",
    "options": [
      "y_p = 5",
      "y_p = 5x",
      "y_p = 5 sen(x)",
      "y_p = e^(5x)"
    ],
    "correctIndex": 0,
    "explanation": "Al ser el término independiente constante (5), ensayamos una constante y_p = A. Como y''_p = 0: 0 + A = 5 ⇒ A = 5.",
    "skill": "Coeficientes indeterminados",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ecuaciones Diferenciales",
    "subtopic": "Solución particular"
  },
  {
    "id": "mat-uni-92",
    "sectionId": 1,
    "number": 92,
    "text": "El Teorema de Green en el plano relaciona una integral de línea sobre una curva cerrada C con una integral doble sobre la región D mediante:",
    "options": [
      "∮ (M dx + N dy) = ∬ (∂N/∂x - ∂M/∂y) dA",
      "∮ (M dx + N dy) = ∬ (∂M/∂x + ∂N/∂y) dA",
      "∮ F · dr = 0",
      "∬ ∇f dA = 0"
    ],
    "correctIndex": 0,
    "explanation": "El teorema de Green establece que la circulación en sentido antihorario a lo largo de C es igual a la integral doble del rotacional bidimensional sobre D.",
    "skill": "Teorema de Green",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariado",
    "subtopic": "Integrales de línea y superficie"
  },
  {
    "id": "mat-uni-93",
    "sectionId": 1,
    "number": 93,
    "text": "¿Cuál es la divergencia div(F) del campo vectorial F(x, y, z) = (x², 3y, 2z³)?",
    "options": [
      "2x + 3 + 6z²",
      "(2x, 3, 6z²)",
      "2x · 3 · 6z²",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "div(F) = ∇ · F = ∂(x²)/∂x + ∂(3y)/∂y + ∂(2z³)/∂z = 2x + 3 + 6z².",
    "skill": "Divergencia de campos vectoriales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Vectorial",
    "subtopic": "Operador divergencia"
  },
  {
    "id": "mat-uni-94",
    "sectionId": 1,
    "number": 94,
    "text": "El rotacional rot(F) = ∇ × F de un campo de gradientes conservativo F = ∇f es siempre igual a:",
    "options": [
      "El vector cero (0, 0, 0)",
      "1",
      "∇²f",
      "Indefinido"
    ],
    "correctIndex": 0,
    "explanation": "Por identidad vectorial fundamental en cálculo multivariado: rot(∇f) = 0 para cualquier campo escalar con segundas derivadas continuas.",
    "skill": "Campos conservativos e irrotacionales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Vectorial",
    "subtopic": "Rotacional del gradiente"
  },
  {
    "id": "mat-uni-95",
    "sectionId": 1,
    "number": 95,
    "text": "¿Qué nombre recibe la integral de contorno compleja ∮_C f(z) dz alrededor de un polo simple con residuo Res(f, z₀)?",
    "options": [
      "2πi · Res(f, z₀)",
      "πi · Res(f, z₀)",
      "Res(f, z₀)",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Por el Teorema de los Residuos de Cauchy: ∮_C f(z) dz = 2πi ∑ Res(f, z_k).",
    "skill": "Teorema de los Residuos de Cauchy",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Complejo",
    "subtopic": "Integración de contornos"
  },
  {
    "id": "mat-uni-96",
    "sectionId": 1,
    "number": 96,
    "text": "Calcula el producto vectorial (cruz) u × v de los vectores canónicos u = (1, 0, 0) y v = (0, 1, 0).",
    "options": [
      "(0, 0, 1) (vector k)",
      "(0, 0, -1)",
      "(1, 1, 0)",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Por la regla de la mano derecha en R³: i × j = k, es decir, (0, 0, 1).",
    "skill": "Producto vectorial en R³",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Vectores ortogonales"
  },
  {
    "id": "mat-uni-97",
    "sectionId": 1,
    "number": 97,
    "text": "Calcula el valor de la serie numérica de Taylor en x = 0 para e^x: ∑ (de n=0 a ∞) (1 / n!).",
    "options": [
      "e (≈ 2.71828)",
      "1",
      "∞",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "Evaluando la serie de Maclaurin de e^x en x = 1: e¹ = 1 + 1/1! + 1/2! + 1/3! + ... = e.",
    "skill": "Serie de Maclaurin de la exponencial",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Infinitesimal",
    "subtopic": "Suma de series"
  },
  {
    "id": "mat-uni-98",
    "sectionId": 1,
    "number": 98,
    "text": "Una matriz hermitiana A en los números complejos cumple por definición:",
    "options": [
      "A = (A*)^T (es igual a su transpuesta conjugada)",
      "A = -A",
      "A² = I",
      "det(A) = 0"
    ],
    "correctIndex": 0,
    "explanation": "Una matriz hermitiana o autoadjunta es igual a su transpuesta conjugada A = A^H y todos sus autovalores son reales.",
    "skill": "Matrices hermitianas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal Avanzada",
    "subtopic": "Espacios hermitianos"
  },
  {
    "id": "mat-uni-99",
    "sectionId": 1,
    "number": 99,
    "text": "El proceso de ortogonalización de Gram-Schmidt se utiliza en álgebra lineal para:",
    "options": [
      "Construir una base ortogonal u ortonormal a partir de una base dada",
      "Calcular la inversa de una matriz",
      "Diagonalizar matrices no simétricas",
      "Hallar los autovalores"
    ],
    "correctIndex": 0,
    "explanation": "El algoritmo de Gram-Schmidt toma un conjunto linealmente independiente y genera un conjunto ortogonal que genera el mismo subespacio.",
    "skill": "Ortogonalización de Gram-Schmidt",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal",
    "subtopic": "Bases ortonormales"
  },
  {
    "id": "mat-uni-100",
    "sectionId": 1,
    "number": 100,
    "text": "Calcula la integral doble: ∬ (de 0 a 1 para x, y de 0 a 2 para y) (2x + y) dy dx.",
    "options": [
      "4",
      "3",
      "2",
      "6"
    ],
    "correctIndex": 0,
    "explanation": "Integral interior respecto a y: [2xy + y²/2] de 0 a 2 = 4x + 2. Integral exterior respecto a x: ∫ (de 0 a 1) (4x + 2) dx = [2x² + 2x] de 0 a 1 = 2(1) + 2(1) = 4.",
    "skill": "Integrales dobles iteradas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo Multivariado",
    "subtopic": "Teorema de Fubini"
  }
];
