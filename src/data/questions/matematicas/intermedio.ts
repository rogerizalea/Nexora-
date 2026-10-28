import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE MATEMÁTICAS - NIVEL INTERMEDIO (100 Reactivos)
 */
export const MATEMATICAS_INTERMEDIO: Question[] = [
  {
    "id": "mat-int-1",
    "sectionId": 1,
    "number": 21,
    "text": "Resuelve la ecuación de primer grado: 4x - 9 = 2x + 7. ¿Cuál es el valor de x?",
    "options": [
      "x = 4",
      "x = 8",
      "x = -1",
      "x = 16"
    ],
    "correctIndex": 1,
    "explanation": "Agrupamos términos semejantes: 4x - 2x = 7 + 9 => 2x = 16 => x = 8.",
    "skill": "Ecuaciones Lineales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Ecuaciones de 1er Grado"
  },
  {
    "id": "mat-int-2",
    "sectionId": 1,
    "number": 22,
    "text": "Un artículo que cuesta $120 tiene un descuento comercial del 25%. ¿Cuánto se debe pagar por el artículo?",
    "options": [
      "$90",
      "$95",
      "$80",
      "$30"
    ],
    "correctIndex": 0,
    "explanation": "Descuento: $120 × 0.25 = $30. Precio final: $120 - $30 = $90.",
    "skill": "Porcentajes y Descuentos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética Comercial",
    "subtopic": "Porcentajes"
  },
  {
    "id": "mat-int-3",
    "sectionId": 1,
    "number": 23,
    "text": "En un triángulo rectángulo, los catetos miden 6 cm y 8 cm. ¿Cuál es la longitud de la hipotenusa?",
    "options": [
      "14 cm",
      "10 cm",
      "12 cm",
      "48 cm"
    ],
    "correctIndex": 1,
    "explanation": "Por Teorema de Pitágoras: c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.",
    "skill": "Teorema de Pitágoras",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría y Trigonometría",
    "subtopic": "Triángulos Rectángulos"
  },
  {
    "id": "mat-int-4",
    "sectionId": 1,
    "number": 24,
    "text": "¿Cuál es el valor numérico de la expresión algebraica 2a² - 3ab + b² cuando a = 3 y b = -2?",
    "options": [
      "40",
      "32",
      "16",
      "28"
    ],
    "correctIndex": 0,
    "explanation": "Sustituyendo los valores: 2(3)² - 3(3)(-2) + (-2)² = 2(9) - (-18) + 4 = 18 + 18 + 4 = 40.",
    "skill": "Valor Numérico de Polinomios",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Expresiones Algebraicas"
  },
  {
    "id": "mat-int-5",
    "sectionId": 1,
    "number": 25,
    "text": "Al desarrollar el binomio al cuadrado (3x - 5)², ¿cuál es el trinomio resultante?",
    "options": [
      "9x² - 25",
      "9x² - 30x + 25",
      "9x² + 30x + 25",
      "6x² - 15x + 25"
    ],
    "correctIndex": 1,
    "explanation": "Por producto notable (a - b)² = a² - 2ab + b²: (3x)² - 2(3x)(5) + (5)² = 9x² - 30x + 25.",
    "skill": "Productos Notables",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Binomio al Cuadrado"
  },
  {
    "id": "mat-int-6",
    "sectionId": 1,
    "number": 26,
    "text": "Al factorizar completamente la diferencia de cuadrados 49x² - 64y², ¿qué expresión se obtiene?",
    "options": [
      "(7x - 8y)²",
      "(7x + 8y)(7x - 8y)",
      "(49x - 64y)(x + y)",
      "(7x - 8y)(7x - 8y)"
    ],
    "correctIndex": 1,
    "explanation": "La diferencia de cuadrados a² - b² se factoriza como (a + b)(a - b). Como √(49x²) = 7x y √(64y²) = 8y, la factorización es (7x + 8y)(7x - 8y).",
    "skill": "Factorización de Diferencia de Cuadrados",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Factorización"
  },
  {
    "id": "mat-int-7",
    "sectionId": 1,
    "number": 27,
    "text": "Resuelve el sistema de ecuaciones lineales por reducción o sustitución:\n{ x + y = 14\n{ x - y = 4\n¿Cuáles son los valores de x e y?",
    "options": [
      "x = 9, y = 5",
      "x = 10, y = 4",
      "x = 8, y = 6",
      "x = 11, y = 3"
    ],
    "correctIndex": 0,
    "explanation": "Sumando ambas ecuaciones: (x + x) + (y - y) = 14 + 4 => 2x = 18 => x = 9. Sustituyendo en la primera: 9 + y = 14 => y = 5.",
    "skill": "Sistemas de Ecuaciones 2x2",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Sistemas Lineales"
  },
  {
    "id": "mat-int-8",
    "sectionId": 1,
    "number": 28,
    "text": "¿Cuál es la pendiente m de la recta que pasa por los puntos A(2, 3) y B(6, 11)?",
    "options": [
      "m = 2",
      "m = 4",
      "m = 1/2",
      "m = 8"
    ],
    "correctIndex": 0,
    "explanation": "La pendiente se calcula con m = (y₂ - y₁) / (x₂ - x₁) = (11 - 3) / (6 - 2) = 8 / 4 = 2.",
    "skill": "Geometría Analítica Básica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Analítica",
    "subtopic": "Pendiente de la Recta"
  },
  {
    "id": "mat-int-9",
    "sectionId": 1,
    "number": 29,
    "text": "En una urna hay 5 bolas rojas, 3 bolas azules y 2 bolas verdes. Si se extrae una bola al azar, ¿cuál es la probabilidad de que sea azul?",
    "options": [
      "30%",
      "33.3%",
      "25%",
      "50%"
    ],
    "correctIndex": 0,
    "explanation": "El total de bolas es 5 + 3 + 2 = 10. La probabilidad de bola azul es P = casos favorables / casos posibles = 3 / 10 = 0.30 = 30%.",
    "skill": "Probabilidad Clásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Probabilidad y Estadística",
    "subtopic": "Regla de Laplace"
  },
  {
    "id": "mat-int-10",
    "sectionId": 1,
    "number": 30,
    "text": "¿Cuál es el volumen de un prisma rectangular recto cuyas dimensiones son 8 cm de largo, 5 cm de ancho y 10 cm de altura?",
    "options": [
      "400 cm³",
      "260 cm³",
      "200 cm³",
      "80 cm³"
    ],
    "correctIndex": 0,
    "explanation": "El volumen de un prisma rectangular es V = largo × ancho × alto = 8 cm × 5 cm × 10 cm = 400 cm³.",
    "skill": "Geometría del Espacio",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Espacial",
    "subtopic": "Volumen de Prismas"
  },
  {
    "id": "mat-int-11",
    "sectionId": 1,
    "number": 31,
    "text": "Calcula la mediana del siguiente conjunto ordenado de datos: 4, 7, 9, 12, 15, 18, 20, 24.",
    "options": [
      "13.5",
      "12.0",
      "15.0",
      "14.0"
    ],
    "correctIndex": 0,
    "explanation": "Como hay un número par de datos (n = 8), la mediana es el promedio de los dos valores centrales (posiciones 4ª y 5ª): (12 + 15) / 2 = 27 / 2 = 13.5.",
    "skill": "Medidas de Tendencia Central",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Estadística",
    "subtopic": "Mediana"
  },
  {
    "id": "mat-int-12",
    "sectionId": 1,
    "number": 32,
    "text": "¿Cuál es el valor simplificado de la expresión con exponentes: (x³ · x⁵) / x⁴?",
    "options": [
      "x⁴",
      "x⁶",
      "x²",
      "x⁸"
    ],
    "correctIndex": 0,
    "explanation": "Por leyes de exponentes: en el numerador x³ · x⁵ = x^(3+5) = x⁸. Dividiendo entre x⁴: x^(8-4) = x⁴.",
    "skill": "Leyes de los Exponentes",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Exponentes y Radicales"
  },
  {
    "id": "mat-int-13",
    "sectionId": 1,
    "number": 33,
    "text": "Una escalera de 5 metros se apoya contra una pared vertical. Si la base de la escalera está a 3 metros de la pared, ¿a qué altura sobre el suelo llega la escalera?",
    "options": [
      "4 metros",
      "4.5 metros",
      "3.5 metros",
      "2 metros"
    ],
    "correctIndex": 0,
    "explanation": "Forma un triángulo rectángulo con hipotenusa 5 m y cateto horizontal 3 m. La altura vertical h = √(5² - 3²) = √(25 - 9) = √16 = 4 metros.",
    "skill": "Aplicaciones del Teorema de Pitágoras",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría",
    "subtopic": "Triángulos"
  },
  {
    "id": "mat-int-14",
    "sectionId": 1,
    "number": 34,
    "text": "Resuelve la inecuación lineal: 3x - 5 ≤ 7. ¿Cuál es el conjunto solución para x?",
    "options": [
      "x ≤ 4",
      "x ≥ 4",
      "x ≤ 12",
      "x < 4"
    ],
    "correctIndex": 0,
    "explanation": "Sumando 5 a ambos miembros: 3x ≤ 7 + 5 => 3x ≤ 12. Dividiendo entre 3 (positivo, no cambia el sentido): x ≤ 4.",
    "skill": "Desigualdades e Inecuaciones Lineales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Inecuaciones"
  },
  {
    "id": "mat-int-15",
    "sectionId": 1,
    "number": 35,
    "text": "¿Cuál es el término general aₙ de una progresión aritmética cuyo primer término es a₁ = 3 y cuya diferencia común es d = 4?",
    "options": [
      "aₙ = 4n - 1",
      "aₙ = 4n + 3",
      "aₙ = 3n + 4",
      "aₙ = 4n - 3"
    ],
    "correctIndex": 0,
    "explanation": "La fórmula del término general es aₙ = a₁ + (n - 1)d. Sustituyendo: aₙ = 3 + (n - 1)·4 = 3 + 4n - 4 = 4n - 1.",
    "skill": "Sucesiones y Progresiones Aritméticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Progresiones"
  },
  {
    "id": "mat-int-16",
    "sectionId": 1,
    "number": 36,
    "text": "¿Cuál es el valor del ángulo central de un polígono regular de 8 lados (octágono regular)?",
    "options": [
      "45°",
      "60°",
      "36°",
      "90°"
    ],
    "correctIndex": 0,
    "explanation": "El ángulo central de cualquier polígono regular de n lados se obtiene dividiendo 360° entre n. Para n = 8: 360° / 8 = 45°.",
    "skill": "Polígonos Regulares",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Ángulos en Polígonos"
  },
  {
    "id": "mat-int-17",
    "sectionId": 1,
    "number": 37,
    "text": "¿Cuál es el resultado de simplificar la expresión algebraica (2x²y³) · (-3x⁴y)?",
    "options": [
      "-6x⁶y⁴",
      "-6x⁸y³",
      "6x⁶y⁴",
      "-5x⁶y⁴"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicamos coeficientes: (2)(-3) = -6. Para las potencias de x: x² · x⁴ = x^(2+4) = x⁶. Para las potencias de y: y³ · y¹ = y⁴. Obtenemos -6x⁶y⁴.",
    "skill": "Multiplicación de Monomios",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Operaciones con Monomios"
  },
  {
    "id": "mat-int-18",
    "sectionId": 1,
    "number": 38,
    "text": "Si 6 obreros construyen una cerca en 10 días, ¿cuántos días tardarán 12 obreros en construir la misma cerca trabajando al mismo ritmo?",
    "options": [
      "5 días",
      "20 días",
      "8 días",
      "6 días"
    ],
    "correctIndex": 0,
    "explanation": "Es una relación de proporcionalidad inversa: a más obreros, menos días. (6 obreros × 10 días) / 12 obreros = 60 / 12 = 5 días.",
    "skill": "Proporcionalidad Inversa",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Regla de Tres Inversa"
  },
  {
    "id": "mat-int-19",
    "sectionId": 1,
    "number": 39,
    "text": "¿Cuál es la distancia entre el origen de coordenadas (0, 0) y el punto P(9, 12)?",
    "options": [
      "15",
      "21",
      "13",
      "18"
    ],
    "correctIndex": 0,
    "explanation": "La distancia euclidiana al origen es d = √(x² + y²) = √(9² + 12²) = √(81 + 144) = √225 = 15.",
    "skill": "Distancia entre Puntos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Analítica",
    "subtopic": "Distancia Euclidiana"
  },
  {
    "id": "mat-int-20",
    "sectionId": 1,
    "number": 40,
    "text": "Si se lanza un dado equilibrado de 6 caras, ¿cuál es la probabilidad de obtener un número primo?",
    "options": [
      "1/2 (50%)",
      "1/3 (33.3%)",
      "2/3 (66.7%)",
      "1/6 (16.7%)"
    ],
    "correctIndex": 0,
    "explanation": "Los números posibles son {1, 2, 3, 4, 5, 6}. De ellos, los primos son {2, 3, 5} (el 1 no es primo). Son 3 casos favorables de 6 posibles: 3/6 = 1/2 = 50%.",
    "skill": "Probabilidad y Números Primos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Probabilidad",
    "subtopic": "Experimentos Aleatorios"
  },
  {
    "id": "mat-int-21",
    "sectionId": 1,
    "number": 21,
    "text": "¿Cuál es el resultado de la operación con enteros: (-8) + (+15) - (-6)?",
    "options": [
      "13",
      "1",
      "29",
      "-7"
    ],
    "correctIndex": 0,
    "explanation": "Eliminando paréntesis: -8 + 15 + 6 = 7 + 6 = 13.",
    "skill": "Operaciones con números enteros",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Números con signo"
  },
  {
    "id": "mat-int-22",
    "sectionId": 1,
    "number": 22,
    "text": "Calcula el resultado de: (-4) × (-7) - (+18) ÷ (-3).",
    "options": [
      "34",
      "22",
      "-22",
      "-34"
    ],
    "correctIndex": 0,
    "explanation": "(-4) × (-7) = +28. Luego: (+18) ÷ (-3) = -6. Restando: 28 - (-6) = 28 + 6 = 34.",
    "skill": "Regla de los signos y jerarquía",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Operaciones combinadas en Z"
  },
  {
    "id": "mat-int-23",
    "sectionId": 1,
    "number": 23,
    "text": "¿Cuál es el valor absoluto de la expresión | -14 + 5 |?",
    "options": [
      "9",
      "-9",
      "19",
      "-19"
    ],
    "correctIndex": 0,
    "explanation": "-14 + 5 = -9. El valor absoluto de un número es su distancia a cero: |-9| = 9.",
    "skill": "Valor absoluto",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Propiedades de valor absoluto"
  },
  {
    "id": "mat-int-24",
    "sectionId": 1,
    "number": 24,
    "text": "Si la temperatura en una ciudad a medianoche era de -3 °C y al mediodía subió 11 °C, ¿cuál es la temperatura actual?",
    "options": [
      "8 °C",
      "-14 °C",
      "14 °C",
      "-8 °C"
    ],
    "correctIndex": 0,
    "explanation": "Sumamos la elevación térmica a la temperatura inicial: -3 °C + 11 °C = 8 °C.",
    "skill": "Aplicación de números enteros",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Variación de temperatura"
  },
  {
    "id": "mat-int-25",
    "sectionId": 1,
    "number": 25,
    "text": "Calcula la potencia con base negativa: (-3)⁴.",
    "options": [
      "81",
      "-81",
      "12",
      "-12"
    ],
    "correctIndex": 0,
    "explanation": "Una base negativa elevada a un exponente par produce un resultado positivo: (-3) × (-3) × (-3) × (-3) = 81.",
    "skill": "Potencias con base negativa",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Propiedades de las potencias"
  },
  {
    "id": "mat-int-26",
    "sectionId": 1,
    "number": 26,
    "text": "¿Cuál es el resultado de: (-2)⁵?",
    "options": [
      "-32",
      "32",
      "-10",
      "10"
    ],
    "correctIndex": 0,
    "explanation": "Una base negativa elevada a exponente impar conserva el signo negativo: (-2)⁵ = -32.",
    "skill": "Potencias con exponente impar",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Signos en potencias"
  },
  {
    "id": "mat-int-27",
    "sectionId": 1,
    "number": 27,
    "text": "Calcula: √196 - √64.",
    "options": [
      "6",
      "8",
      "14",
      "10"
    ],
    "correctIndex": 0,
    "explanation": "√196 = 14 y √64 = 8. Restando: 14 - 8 = 6.",
    "skill": "Radicación exacta",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Raíces y operaciones"
  },
  {
    "id": "mat-int-28",
    "sectionId": 1,
    "number": 28,
    "text": "Aplica la propiedad del producto de potencias de igual base para simplificar: (5³) × (5⁴).",
    "options": [
      "5⁷",
      "5¹²",
      "25⁷",
      "25¹²"
    ],
    "correctIndex": 0,
    "explanation": "Al multiplicar potencias de la misma base se suman los exponentes: 5³ × 5⁴ = 5^(3+4) = 5⁷.",
    "skill": "Leyes de los exponentes",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Producto de potencias"
  },
  {
    "id": "mat-int-29",
    "sectionId": 1,
    "number": 29,
    "text": "Simplifica el cociente de potencias de igual base: (7⁸) ÷ (7³).",
    "options": [
      "7⁵",
      "7¹¹",
      "7²⁴",
      "1⁵"
    ],
    "correctIndex": 0,
    "explanation": "Al dividir potencias de igual base se restan los exponentes: 7⁸ ÷ 7³ = 7^(8-3) = 7⁵.",
    "skill": "Cociente de potencias",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Leyes de exponentes"
  },
  {
    "id": "mat-int-30",
    "sectionId": 1,
    "number": 30,
    "text": "¿A qué equivale la potencia de una potencia: (a³)²?",
    "options": [
      "a⁶",
      "a⁵",
      "a⁹",
      "2a³"
    ],
    "correctIndex": 0,
    "explanation": "Los exponentes se multiplican: (a³)² = a^(3×2) = a⁶.",
    "skill": "Potencia de una potencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Propiedades exponenciales"
  },
  {
    "id": "mat-int-31",
    "sectionId": 1,
    "number": 31,
    "text": "Traduce al lenguaje algebraico: 'El triple de un número aumentado en ocho unidades'.",
    "options": [
      "3x + 8",
      "3(x + 8)",
      "x³ + 8",
      "8x + 3"
    ],
    "correctIndex": 0,
    "explanation": "'El triple de un número' es 3x, y 'aumentado en ocho' es sumar 8: 3x + 8.",
    "skill": "Lenguaje algebraico",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Traducción algebraica"
  },
  {
    "id": "mat-int-32",
    "sectionId": 1,
    "number": 32,
    "text": "Reduce los siguientes términos semejantes: 7x - 4y + 3x + 9y.",
    "options": [
      "10x + 5y",
      "10x - 5y",
      "4x + 13y",
      "15xy"
    ],
    "correctIndex": 0,
    "explanation": "Agrupamos términos semejantes: (7x + 3x) + (-4y + 9y) = 10x + 5y.",
    "skill": "Reducción de términos semejantes",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Polinomios"
  },
  {
    "id": "mat-int-33",
    "sectionId": 1,
    "number": 33,
    "text": "Evalúa la expresión algebraica 4x² - 2x + 7 cuando x = -2.",
    "options": [
      "27",
      "19",
      "-5",
      "31"
    ],
    "correctIndex": 0,
    "explanation": "4(-2)² - 2(-2) + 7 = 4(4) + 4 + 7 = 16 + 4 + 7 = 27.",
    "skill": "Valor numérico de polinomios",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Evaluación algebraica"
  },
  {
    "id": "mat-int-34",
    "sectionId": 1,
    "number": 34,
    "text": "¿Cuál es el grado absoluto del monomio 5x³y⁴z?",
    "options": [
      "8",
      "7",
      "5",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "El grado absoluto de un monomio es la suma de los exponentes de sus variables: 3 + 4 + 1 = 8.",
    "skill": "Grado de monomios",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Polinomios"
  },
  {
    "id": "mat-int-35",
    "sectionId": 1,
    "number": 35,
    "text": "Multiplica los monomios: (3x²y) · (-4xy³).",
    "options": [
      "-12x³y⁴",
      "12x²y³",
      "-7x³y⁴",
      "-12x²y⁴"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicamos coeficientes: 3 × (-4) = -12. Sumamos exponentes de x (2+1=3) y de y (1+3=4): -12x³y⁴.",
    "skill": "Multiplicación de monomios",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Productos algebraicos"
  },
  {
    "id": "mat-int-36",
    "sectionId": 1,
    "number": 36,
    "text": "Divide los monomios: (24a⁵b³) ÷ (6a²b).",
    "options": [
      "4a³b²",
      "4a⁷b⁴",
      "18a³b²",
      "4a²b³"
    ],
    "correctIndex": 0,
    "explanation": "24 ÷ 6 = 4. Restamos exponentes: a^(5-2) = a³ y b^(3-1) = b². Resultado: 4a³b².",
    "skill": "División de monomios",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Cocientes algebraicos"
  },
  {
    "id": "mat-int-37",
    "sectionId": 1,
    "number": 37,
    "text": "Elimina paréntesis y simplifica: 5x - [2x - (3x - 4)].",
    "options": [
      "6x - 4",
      "4x + 4",
      "6x + 4",
      "4x - 4"
    ],
    "correctIndex": 0,
    "explanation": "Interior: 2x - 3x + 4 = -x + 4. Expresión: 5x - (-x + 4) = 5x + x - 4 = 6x - 4.",
    "skill": "Signos de agrupación",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Supresión de paréntesis"
  },
  {
    "id": "mat-int-38",
    "sectionId": 1,
    "number": 38,
    "text": "¿Cuál es el coeficiente principal del polinomio P(x) = 3 - 5x + 7x³ - 2x²?",
    "options": [
      "7",
      "-5",
      "3",
      "-2"
    ],
    "correctIndex": 0,
    "explanation": "El término de mayor grado es 7x³ (grado 3), por lo que su coeficiente principal es 7.",
    "skill": "Elementos de un polinomio",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Coeficiente principal"
  },
  {
    "id": "mat-int-39",
    "sectionId": 1,
    "number": 39,
    "text": "Si P(x) = 2x + 5 y Q(x) = 3x - 2, ¿cuál es la suma P(x) + Q(x)?",
    "options": [
      "5x + 3",
      "5x - 7",
      "6x - 10",
      "5x + 7"
    ],
    "correctIndex": 0,
    "explanation": "Sumando términos semejantes: (2x + 3x) + (5 - 2) = 5x + 3.",
    "skill": "Adición de polinomios",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Suma de polinomios"
  },
  {
    "id": "mat-int-40",
    "sectionId": 1,
    "number": 40,
    "text": "Multiplica el binomio por el monomio: 3x(2x - 5).",
    "options": [
      "6x² - 15x",
      "6x² - 5",
      "5x² - 15x",
      "6x - 15"
    ],
    "correctIndex": 0,
    "explanation": "Aplicando la propiedad distributiva: 3x × 2x - 3x × 5 = 6x² - 15x.",
    "skill": "Propiedad distributiva",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Multiplicación algebraica"
  },
  {
    "id": "mat-int-41",
    "sectionId": 1,
    "number": 41,
    "text": "Resuelve la ecuación de primer grado: 5x - 3 = 2x + 12.",
    "options": [
      "x = 5",
      "x = 3",
      "x = 9",
      "x = 4"
    ],
    "correctIndex": 0,
    "explanation": "Restamos 2x: 3x - 3 = 12. Sumamos 3: 3x = 15. Dividimos entre 3: x = 5.",
    "skill": "Ecuaciones lineales simples",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Despeje de variables"
  },
  {
    "id": "mat-int-42",
    "sectionId": 1,
    "number": 42,
    "text": "Encuentra la solución de: 4(x - 2) = 2(x + 6).",
    "options": [
      "x = 10",
      "x = 8",
      "x = 5",
      "x = 12"
    ],
    "correctIndex": 0,
    "explanation": "Expandiendo: 4x - 8 = 2x + 12. Restando 2x: 2x - 8 = 12. Sumando 8: 2x = 20 ⇒ x = 10.",
    "skill": "Ecuaciones con paréntesis",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Propiedad distributiva en ecuaciones"
  },
  {
    "id": "mat-int-43",
    "sectionId": 1,
    "number": 43,
    "text": "Resuelve la ecuación con fracciones: (x / 3) + 2 = 7.",
    "options": [
      "x = 15",
      "x = 27",
      "x = 9",
      "x = 12"
    ],
    "correctIndex": 0,
    "explanation": "Restamos 2: x / 3 = 5. Multiplicamos por 3: x = 15.",
    "skill": "Ecuaciones fraccionarias básicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Ecuaciones con denominadores"
  },
  {
    "id": "mat-int-44",
    "sectionId": 1,
    "number": 44,
    "text": "La suma de tres números enteros consecutivos es 72. ¿Cuál es el número menor?",
    "options": [
      "23",
      "24",
      "22",
      "25"
    ],
    "correctIndex": 0,
    "explanation": "Planteamiento: x + (x + 1) + (x + 2) = 72 ⇒ 3x + 3 = 72 ⇒ 3x = 69 ⇒ x = 23.",
    "skill": "Problemas de números consecutivos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Modelado lineal"
  },
  {
    "id": "mat-int-45",
    "sectionId": 1,
    "number": 45,
    "text": "La edad de María es el triple de la de su hijo. Si ambas edades suman 48 años, ¿cuántos años tiene el hijo?",
    "options": [
      "12 años",
      "16 años",
      "14 años",
      "10 años"
    ],
    "correctIndex": 0,
    "explanation": "Hijo: x; María: 3x. Suma: x + 3x = 48 ⇒ 4x = 48 ⇒ x = 12 años.",
    "skill": "Problemas de edades",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Ecuaciones aplicadas"
  },
  {
    "id": "mat-int-46",
    "sectionId": 1,
    "number": 46,
    "text": "Un padre tiene 40 años y su hijo tiene 10. ¿Dentro de cuántos años la edad del padre será el doble de la del hijo?",
    "options": [
      "20 años",
      "15 años",
      "25 años",
      "10 años"
    ],
    "correctIndex": 0,
    "explanation": "40 + x = 2(10 + x) ⇒ 40 + x = 20 + 2x ⇒ 40 - 20 = 2x - x ⇒ x = 20 años.",
    "skill": "Problemas algebraicos de tiempo futuro",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Ecuaciones lineales"
  },
  {
    "id": "mat-int-47",
    "sectionId": 1,
    "number": 47,
    "text": "Halla el valor de x en: (2x - 5) / 3 = 5.",
    "options": [
      "x = 10",
      "x = 8",
      "x = 12",
      "x = 15"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicando por 3: 2x - 5 = 15. Sumando 5: 2x = 20 ⇒ x = 10.",
    "skill": "Despeje fraccionario",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Ecuaciones racionales"
  },
  {
    "id": "mat-int-48",
    "sectionId": 1,
    "number": 48,
    "text": "Si al doble de un número le restas 14 obtienes el mismo número aumentado en 6. ¿Cuál es el número?",
    "options": [
      "20",
      "18",
      "24",
      "16"
    ],
    "correctIndex": 0,
    "explanation": "2x - 14 = x + 6 ⇒ 2x - x = 6 + 14 ⇒ x = 20.",
    "skill": "Planteo de ecuaciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Enunciados verbales"
  },
  {
    "id": "mat-int-49",
    "sectionId": 1,
    "number": 49,
    "text": "Resuelve: 3(2x + 1) - 4 = 5x + 7.",
    "options": [
      "x = 8",
      "x = 6",
      "x = 10",
      "x = 4"
    ],
    "correctIndex": 0,
    "explanation": "6x + 3 - 4 = 5x + 7 ⇒ 6x - 1 = 5x + 7 ⇒ 6x - 5x = 7 + 1 ⇒ x = 8.",
    "skill": "Ecuaciones lineales generales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Simplificación de miembros"
  },
  {
    "id": "mat-int-50",
    "sectionId": 1,
    "number": 50,
    "text": "¿Qué valor de x satisface la igualdad: 0.5x + 3 = 11?",
    "options": [
      "x = 16",
      "x = 14",
      "x = 18",
      "x = 8"
    ],
    "correctIndex": 0,
    "explanation": "0.5x = 11 - 3 = 8. Dividiendo entre 0.5: x = 8 / 0.5 = 16.",
    "skill": "Ecuaciones con coeficientes decimales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Decimales en álgebra"
  },
  {
    "id": "mat-int-51",
    "sectionId": 1,
    "number": 51,
    "text": "Si 6 impresoras imprimen 3,000 folletos en 2 horas, ¿cuántos folletos imprimirán 4 impresoras en 3 horas al mismo ritmo?",
    "options": [
      "3,000 folletos",
      "2,500 folletos",
      "3,500 folletos",
      "4,000 folletos"
    ],
    "correctIndex": 0,
    "explanation": "1 impresora en 1 hora: 3,000 / (6 × 2) = 250 folletos/hora. 4 impresoras en 3 horas: 4 × 3 × 250 = 3,000 folletos.",
    "skill": "Regla de tres compuesta",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Proporcionalidad múltiple"
  },
  {
    "id": "mat-int-52",
    "sectionId": 1,
    "number": 52,
    "text": "Calcula el interés simple que produce un capital de $2,000.00 invertido al 5% anual durante 3 años (I = C·r·t).",
    "options": [
      "$300.00",
      "$200.00",
      "$450.00",
      "$150.00"
    ],
    "correctIndex": 0,
    "explanation": "I = C × r × t = 2,000 × 0.05 × 3 = 100 × 3 = $300.00.",
    "skill": "Interés simple",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Matemática Financiera",
    "subtopic": "Fórmula del interés"
  },
  {
    "id": "mat-int-53",
    "sectionId": 1,
    "number": 53,
    "text": "Un comerciante compra un artículo por $80.00 y lo vende por $100.00. ¿Cuál fue su porcentaje de ganancia sobre el costo?",
    "options": [
      "25%",
      "20%",
      "30%",
      "15%"
    ],
    "correctIndex": 0,
    "explanation": "Ganancia = $100 - $80 = $20. Porcentaje sobre el costo = (20 / 80) × 100 = 0.25 × 100 = 25%.",
    "skill": "Porcentaje de utilidad",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética Comercial",
    "subtopic": "Rentabilidad"
  },
  {
    "id": "mat-int-54",
    "sectionId": 1,
    "number": 54,
    "text": "Se reparte un premio de $600.00 de forma directamente proporcional a las edades de dos hermanos de 8 y 12 años. ¿Cuánto recibe el menor?",
    "options": [
      "$240.00",
      "$360.00",
      "$200.00",
      "$250.00"
    ],
    "correctIndex": 0,
    "explanation": "Suma de edades: 8 + 12 = 20 partes. Cada parte vale: $600 / 20 = $30. Hermano menor: 8 × $30 = $240.00.",
    "skill": "Reparto proporcional directo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Reparto proporcional"
  },
  {
    "id": "mat-int-55",
    "sectionId": 1,
    "number": 55,
    "text": "Un producto tiene un precio de $150.00 sin IVA. Si el IVA es del 15%, ¿cuánto se paga de impuesto?",
    "options": [
      "$22.50",
      "$15.00",
      "$20.00",
      "$25.00"
    ],
    "correctIndex": 0,
    "explanation": "15% de 150 = 150 × 0.15 = $22.50.",
    "skill": "Cálculo de impuestos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética Comercial",
    "subtopic": "IVA"
  },
  {
    "id": "mat-int-56",
    "sectionId": 1,
    "number": 56,
    "text": "Si 12 obreros abren una zanja en 10 días, ¿cuántos días emplearán 15 obreros con el mismo rendimiento?",
    "options": [
      "8 días",
      "9 días",
      "7 días",
      "6 días"
    ],
    "correctIndex": 0,
    "explanation": "Proporción inversa: Días = (12 × 10) / 15 = 120 / 15 = 8 días.",
    "skill": "Regla de tres simple inversa",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Productividad laboral"
  },
  {
    "id": "mat-int-57",
    "sectionId": 1,
    "number": 57,
    "text": "Un artículo rebajado en un 20% cuesta actualmente $64.00. ¿Cuál era su precio original antes de la rebaja?",
    "options": [
      "$80.00",
      "$76.80",
      "$85.00",
      "$75.00"
    ],
    "correctIndex": 0,
    "explanation": "El precio actual representa el 80% del original: 0.80 × P = 64 ⇒ P = 64 / 0.80 = $80.00.",
    "skill": "Precio original a partir de descuento",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Porcentajes",
    "subtopic": "Reversión porcentual"
  },
  {
    "id": "mat-int-58",
    "sectionId": 1,
    "number": 58,
    "text": "En una escala 1:500 de un plano, ¿a cuántos metros reales equivalen 4 centímetros del dibujo?",
    "options": [
      "20 metros",
      "200 metros",
      "2 metros",
      "125 metros"
    ],
    "correctIndex": 0,
    "explanation": "4 cm × 500 = 2,000 cm. Como 1 metro = 100 cm, 2,000 / 100 = 20 metros.",
    "skill": "Escalas cartográficas y planos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría",
    "subtopic": "Escalas"
  },
  {
    "id": "mat-int-59",
    "sectionId": 1,
    "number": 59,
    "text": "Si tres números están en la razón 2 : 3 : 5 y suman 100, ¿cuál es el número mayor?",
    "options": [
      "50",
      "30",
      "20",
      "40"
    ],
    "correctIndex": 0,
    "explanation": "Constante k: 2k + 3k + 5k = 10k = 100 ⇒ k = 10. Número mayor: 5k = 5(10) = 50.",
    "skill": "Razones compuestas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Proporciones continuas"
  },
  {
    "id": "mat-int-60",
    "sectionId": 1,
    "number": 60,
    "text": "Un depósito se llena con un grifo en 6 horas y con otro grifo en 3 horas. ¿En cuántas horas se llena si se abren ambos a la vez?",
    "options": [
      "2 horas",
      "4.5 horas",
      "1.5 horas",
      "2.5 horas"
    ],
    "correctIndex": 0,
    "explanation": "En 1 hora llenan: 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 del depósito. Por tanto, tardan 2 horas en llenarlo.",
    "skill": "Problemas de grifos y caudales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Rendimiento conjunto"
  },
  {
    "id": "mat-int-61",
    "sectionId": 1,
    "number": 61,
    "text": "En un triángulo rectángulo, un cateto mide 9 cm y la hipotenusa mide 15 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      "12 cm",
      "10 cm",
      "11 cm",
      "13 cm"
    ],
    "correctIndex": 0,
    "explanation": "b = √(15² - 9²) = √(225 - 81) = √144 = 12 cm.",
    "skill": "Teorema de Pitágoras para catetos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Triángulos rectángulos"
  },
  {
    "id": "mat-int-62",
    "sectionId": 1,
    "number": 62,
    "text": "¿Cuál es la distancia entre los puntos A(2, 3) y B(5, 7) en el plano cartesiano?",
    "options": [
      "5 unidades",
      "7 unidades",
      "√7 unidades",
      "6 unidades"
    ],
    "correctIndex": 0,
    "explanation": "d = √[(5 - 2)² + (7 - 3)²] = √[3² + 4²] = √[9 + 16] = √25 = 5 unidades.",
    "skill": "Distancia entre dos puntos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Analítica",
    "subtopic": "Plano cartesiano"
  },
  {
    "id": "mat-int-63",
    "sectionId": 1,
    "number": 63,
    "text": "Calcula el área de un sector circular de 90° en un círculo de radio r = 4 cm. (Usa π ≈ 3.14).",
    "options": [
      "12.56 cm²",
      "25.12 cm²",
      "50.24 cm²",
      "6.28 cm²"
    ],
    "correctIndex": 0,
    "explanation": "Un ángulo de 90° es 1/4 del círculo: A = (π × r²) / 4 = (3.14 × 16) / 4 = 50.24 / 4 = 12.56 cm².",
    "skill": "Área de sectores circulares",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Sectores circulares"
  },
  {
    "id": "mat-int-64",
    "sectionId": 1,
    "number": 64,
    "text": "¿Cuánto mide la diagonal de un rectángulo cuyos lados son de 5 cm y 12 cm?",
    "options": [
      "13 cm",
      "17 cm",
      "15 cm",
      "14 cm"
    ],
    "correctIndex": 0,
    "explanation": "d = √(5² + 12²) = √(25 + 144) = √169 = 13 cm.",
    "skill": "Diagonal del rectángulo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Aplicación de Pitágoras"
  },
  {
    "id": "mat-int-65",
    "sectionId": 1,
    "number": 65,
    "text": "¿Cuánto suman los ángulos interiores de un hexágono convexo (6 lados)?",
    "options": [
      "720°",
      "540°",
      "1,080°",
      "360°"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula: S = (n - 2) × 180° = (6 - 2) × 180° = 4 × 180° = 720°.",
    "skill": "Suma de ángulos en polígonos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Polígonos convexos"
  },
  {
    "id": "mat-int-66",
    "sectionId": 1,
    "number": 66,
    "text": "En un polígono regular de 5 lados (pentágono), ¿cuánto mide cada uno de sus ángulos interiores?",
    "options": [
      "108°",
      "120°",
      "90°",
      "72°"
    ],
    "correctIndex": 0,
    "explanation": "Suma = (5 - 2) × 180° = 540°. Como tiene 5 ángulos iguales: 540° / 5 = 108°.",
    "skill": "Ángulo interior regular",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Pentágono regular"
  },
  {
    "id": "mat-int-67",
    "sectionId": 1,
    "number": 67,
    "text": "Si dos rectas paralelas son cortadas por una secante y uno de los ángulos alternos internos mide 75°, ¿cuánto mide su alterno interno conjugado?",
    "options": [
      "75°",
      "105°",
      "15°",
      "90°"
    ],
    "correctIndex": 0,
    "explanation": "Los ángulos alternos internos entre paralelas son congruentes (miden exactamente lo mismo): 75°.",
    "skill": "Ángulos entre paralelas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Rectas paralelas y secante"
  },
  {
    "id": "mat-int-68",
    "sectionId": 1,
    "number": 68,
    "text": "Calcula el área de un triángulo equilátero cuyo lado mide 6 cm. (Fórmula: A = (L²√3)/4).",
    "options": [
      "9√3 cm² (≈ 15.59 cm²)",
      "12√3 cm²",
      "18 cm²",
      "6√3 cm²"
    ],
    "correctIndex": 0,
    "explanation": "A = (6² × √3) / 4 = (36 × √3) / 4 = 9√3 cm².",
    "skill": "Área de triángulo equilátero",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Triángulos especiales"
  },
  {
    "id": "mat-int-69",
    "sectionId": 1,
    "number": 69,
    "text": "El punto medio del segmento con extremos P(1, 4) y Q(7, 10) es:",
    "options": [
      "M(4, 7)",
      "M(3, 5)",
      "M(8, 14)",
      "M(6, 6)"
    ],
    "correctIndex": 0,
    "explanation": "x = (1 + 7)/2 = 8/2 = 4; y = (4 + 10)/2 = 14/2 = 7. Punto medio: M(4, 7).",
    "skill": "Punto medio en el plano",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Analítica",
    "subtopic": "Segmentos"
  },
  {
    "id": "mat-int-70",
    "sectionId": 1,
    "number": 70,
    "text": "¿Cuál es el volumen de un cubo cuya arista mide 5 cm?",
    "options": [
      "125 cm³",
      "25 cm³",
      "150 cm³",
      "75 cm³"
    ],
    "correctIndex": 0,
    "explanation": "V = arista³ = 5³ = 5 × 5 × 5 = 125 cm³.",
    "skill": "Volumen del cubo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría del Espacio",
    "subtopic": "Poliedros regulares"
  },
  {
    "id": "mat-int-71",
    "sectionId": 1,
    "number": 71,
    "text": "Si se lanzan dos dados estándar de 6 caras, ¿cuántos resultados posibles forman el espacio muestral?",
    "options": [
      "36",
      "12",
      "24",
      "18"
    ],
    "correctIndex": 0,
    "explanation": "Por principio multiplicativo: 6 caras × 6 caras = 36 pares posibles.",
    "skill": "Espacio muestral de dos dados",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Probabilidad",
    "subtopic": "Regla del producto"
  },
  {
    "id": "mat-int-72",
    "sectionId": 1,
    "number": 72,
    "text": "Al lanzar dos dados, ¿cuál es la probabilidad de que la suma de sus caras sea igual a 7?",
    "options": [
      "6/36 (1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 0,
    "explanation": "Pares que suman 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 combinaciones de 36. Probabilidad = 6/36 = 1/6.",
    "skill": "Probabilidad con dos dados",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Probabilidad",
    "subtopic": "Suma de dados"
  },
  {
    "id": "mat-int-73",
    "sectionId": 1,
    "number": 73,
    "text": "En una baraja española estándar de 40 cartas, ¿cuál es la probabilidad de extraer un As al azar?",
    "options": [
      "4/40 (1/10 o 10%)",
      "1/40",
      "4/36",
      "1/4"
    ],
    "correctIndex": 0,
    "explanation": "Hay 4 ases (uno por cada palo: oros, copas, espadas, bastos) entre 40 cartas: 4/40 = 1/10 = 10%.",
    "skill": "Probabilidad clásica en barajas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Probabilidad",
    "subtopic": "Extracción simple"
  },
  {
    "id": "mat-int-74",
    "sectionId": 1,
    "number": 74,
    "text": "Se lanza una moneda tres veces consecutivas. ¿Cuál es la probabilidad de obtener exactamente 3 caras?",
    "options": [
      "1/8 (12.5%)",
      "3/8",
      "1/6",
      "1/4"
    ],
    "correctIndex": 0,
    "explanation": "Resultados totales = 2³ = 8. Solo hay 1 resultado favorable (C, C, C): Probabilidad = 1/8.",
    "skill": "Probabilidad compuesta independiente",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Probabilidad",
    "subtopic": "Lanzamientos múltiples"
  },
  {
    "id": "mat-int-75",
    "sectionId": 1,
    "number": 75,
    "text": "En un grupo de 30 personas, 18 practican fútbol y 12 básquetbol (sin intersección). Si se elige una al azar, ¿cuál es la probabilidad de que juegue fútbol?",
    "options": [
      "18/30 (3/5 o 60%)",
      "12/30",
      "18/12",
      "1/2"
    ],
    "correctIndex": 0,
    "explanation": "Casos favorables = 18; total de personas = 30. Probabilidad = 18/30 = 3/5 = 60%.",
    "skill": "Probabilidad simple",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Probabilidad",
    "subtopic": "Eventos excluyentes"
  },
  {
    "id": "mat-int-76",
    "sectionId": 1,
    "number": 76,
    "text": "¿Cuál es la desviación absoluta media de los datos [8, 10, 12] respecto a su media aritmética (10)?",
    "options": [
      "4/3 (≈ 1.33)",
      "2",
      "0",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Media = 10. Desviaciones absolutas: |8-10|=2, |10-10|=0, |12-10|=2. Media de las desviaciones = (2 + 0 + 2)/3 = 4/3.",
    "skill": "Desviación media",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Estadística",
    "subtopic": "Dispersión"
  },
  {
    "id": "mat-int-77",
    "sectionId": 1,
    "number": 77,
    "text": "En una distribución de frecuencias, la frecuencia relativa de una categoría es 0.35. ¿Qué porcentaje representa?",
    "options": [
      "35%",
      "3.5%",
      "0.35%",
      "70%"
    ],
    "correctIndex": 0,
    "explanation": "La frecuencia relativa multiplicada por 100 da el porcentaje: 0.35 × 100 = 35%.",
    "skill": "Frecuencia relativa",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Estadística",
    "subtopic": "Porcentajes estadísticos"
  },
  {
    "id": "mat-int-78",
    "sectionId": 1,
    "number": 78,
    "text": "¿Qué representa el primer cuartil (Q1) en un conjunto ordenado de datos?",
    "options": [
      "El valor que deja por debajo al 25% de los datos",
      "El valor promedio",
      "El valor que supera al 50%",
      "El valor más frecuente"
    ],
    "correctIndex": 0,
    "explanation": "Q1 es la medida de posición no central que acumula el 25% inferior de la distribución.",
    "skill": "Medidas de posición",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Estadística",
    "subtopic": "Cuartiles"
  },
  {
    "id": "mat-int-79",
    "sectionId": 1,
    "number": 79,
    "text": "Calcula la mediana del siguiente conjunto con número par de elementos: [4, 7, 9, 11, 14, 18].",
    "options": [
      "10",
      "9",
      "11",
      "9.5"
    ],
    "correctIndex": 0,
    "explanation": "Los datos ya están ordenados y son 6 elementos. La mediana es el promedio de los dos centrales (posiciones 3 y 4): (9 + 11)/2 = 20/2 = 10.",
    "skill": "Mediana de conjunto par",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Estadística",
    "subtopic": "Mediana"
  },
  {
    "id": "mat-int-80",
    "sectionId": 1,
    "number": 80,
    "text": "Si la probabilidad de que llueva mañana es de 0.25, ¿cuál es la probabilidad del evento complementario (que no llueva)?",
    "options": [
      "0.75 (75%)",
      "0.25",
      "1.25",
      "0.50"
    ],
    "correctIndex": 0,
    "explanation": "La suma de las probabilidades de eventos complementarios es 1: P(no lluvia) = 1 - 0.25 = 0.75.",
    "skill": "Eventos complementarios",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Probabilidad",
    "subtopic": "Complemento probabilístico"
  },
  {
    "id": "mat-int-81",
    "sectionId": 1,
    "number": 81,
    "text": "Simplifica el radical utilizando propiedades de la multiplicación: √(72).",
    "options": [
      "6√2",
      "12√2",
      "8√3",
      "36√2"
    ],
    "correctIndex": 0,
    "explanation": "Descomponemos 72 en factores primos: 72 = 36 × 2. √(72) = √(36 × 2) = √36 × √2 = 6√2.",
    "skill": "Simplificación de radicales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Radicación"
  },
  {
    "id": "mat-int-82",
    "sectionId": 1,
    "number": 82,
    "text": "Resuelve la ecuación con incógnita en ambos miembros: 7x - 9 = 3x + 15.",
    "options": [
      "x = 6",
      "x = 4",
      "x = 8",
      "x = 5"
    ],
    "correctIndex": 0,
    "explanation": "Restamos 3x: 4x - 9 = 15. Sumamos 9: 4x = 24. Dividimos entre 4: x = 6.",
    "skill": "Ecuaciones lineales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Ecuaciones de 1er grado"
  },
  {
    "id": "mat-int-83",
    "sectionId": 1,
    "number": 83,
    "text": "Escribe el número 450,000 en notación científica.",
    "options": [
      "4.5 × 10⁵",
      "45 × 10⁴",
      "4.5 × 10⁶",
      "0.45 × 10⁶"
    ],
    "correctIndex": 0,
    "explanation": "La notación científica tiene un coeficiente entre 1 y 10: 4.5 × 10⁵.",
    "skill": "Notación científica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Potencias de diez"
  },
  {
    "id": "mat-int-84",
    "sectionId": 1,
    "number": 84,
    "text": "Convierte 0.0032 a notación científica.",
    "options": [
      "3.2 × 10⁻³",
      "3.2 × 10⁻⁴",
      "32 × 10⁻⁴",
      "0.32 × 10⁻²"
    ],
    "correctIndex": 0,
    "explanation": "Desplazamos la coma tres lugares a la derecha: 3.2 × 10⁻³.",
    "skill": "Notación científica para cantidades pequeñas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Exponentes negativos"
  },
  {
    "id": "mat-int-85",
    "sectionId": 1,
    "number": 85,
    "text": "Aplica el Teorema de Tales: Si dos rectas secantes son cortadas por paralelas y los segmentos en una son 4 y 6, y en la otra x y 9, ¿cuánto vale x?",
    "options": [
      "x = 6",
      "x = 5",
      "x = 8",
      "x = 4.5"
    ],
    "correctIndex": 0,
    "explanation": "Por proporcionalidad de Tales: 4 / 6 = x / 9 ⇒ x = (4 × 9) / 6 = 36 / 6 = 6.",
    "skill": "Teorema de Tales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Proporcionalidad geométrica"
  },
  {
    "id": "mat-int-86",
    "sectionId": 1,
    "number": 86,
    "text": "Calcula la media ponderada de un alumno que obtuvo nota 8 (peso 30%) y nota 10 (peso 70%).",
    "options": [
      "9.4",
      "9.0",
      "8.8",
      "9.6"
    ],
    "correctIndex": 0,
    "explanation": "Media ponderada = 8(0.30) + 10(0.70) = 2.4 + 7.0 = 9.4.",
    "skill": "Media ponderada",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Estadística",
    "subtopic": "Promedios con peso"
  },
  {
    "id": "mat-int-87",
    "sectionId": 1,
    "number": 87,
    "text": "¿Cuál es el área de un paralelogramo de base b = 14 cm y altura h = 8 cm?",
    "options": [
      "112 cm²",
      "56 cm²",
      "44 cm²",
      "96 cm²"
    ],
    "correctIndex": 0,
    "explanation": "Área = base × altura = 14 cm × 8 cm = 112 cm².",
    "skill": "Área de cuadriláteros",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Paralelogramos"
  },
  {
    "id": "mat-int-88",
    "sectionId": 1,
    "number": 88,
    "text": "Factoriza extrayendo el máximo factor común: 12x³ - 18x².",
    "options": [
      "6x²(2x - 3)",
      "6x(2x² - 3x)",
      "3x²(4x - 6)",
      "12x²(x - 2)"
    ],
    "correctIndex": 0,
    "explanation": "El MCD de 12 y 18 es 6, y de x³ y x² es x². Factorizamos: 6x²(2x - 3).",
    "skill": "Factor común monomio",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Factorización"
  },
  {
    "id": "mat-int-89",
    "sectionId": 1,
    "number": 89,
    "text": "Si un automóvil viaja a 90 km/h y tarda 4 horas, ¿cuánto tardaría a 120 km/h en el mismo trayecto?",
    "options": [
      "3 horas",
      "3.5 horas",
      "2.5 horas",
      "5 horas"
    ],
    "correctIndex": 0,
    "explanation": "Distancia = 90 × 4 = 360 km. Tiempo a 120 km/h: 360 / 120 = 3 horas.",
    "skill": "Proporcionalidad inversa en cinemática",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Velocidad y tiempo"
  },
  {
    "id": "mat-int-90",
    "sectionId": 1,
    "number": 90,
    "text": "Calcula la suma de los ángulos interiores de un decágono (10 lados).",
    "options": [
      "1,440°",
      "1,800°",
      "1,260°",
      "1,080°"
    ],
    "correctIndex": 0,
    "explanation": "Suma = (n - 2) × 180° = (10 - 2) × 180° = 8 × 180° = 1,440°.",
    "skill": "Ángulos de polígonos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Decágono"
  },
  {
    "id": "mat-int-91",
    "sectionId": 1,
    "number": 91,
    "text": "¿Cuánto mide cada ángulo central de un octágono regular?",
    "options": [
      "45°",
      "60°",
      "30°",
      "40°"
    ],
    "correctIndex": 0,
    "explanation": "Ángulo central = 360° / n = 360° / 8 = 45°.",
    "skill": "Ángulo central",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Polígonos regulares"
  },
  {
    "id": "mat-int-92",
    "sectionId": 1,
    "number": 92,
    "text": "Resuelve el sistema 2x2 por igualación: { y = 2x + 1 ; y = 3x - 4 }.",
    "options": [
      "x = 5, y = 11",
      "x = 4, y = 9",
      "x = 3, y = 7",
      "x = 5, y = 9"
    ],
    "correctIndex": 0,
    "explanation": "Igualamos: 2x + 1 = 3x - 4 ⇒ 1 + 4 = 3x - 2x ⇒ x = 5. Luego y = 2(5) + 1 = 11.",
    "skill": "Método de igualación",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Sistemas de ecuaciones"
  },
  {
    "id": "mat-int-93",
    "sectionId": 1,
    "number": 93,
    "text": "Racionaliza el denominador de la fracción: 6 / √3.",
    "options": [
      "2√3",
      "3√3",
      "√3",
      "6√3"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicamos numerador y denominador por √3: (6√3) / 3 = 2√3.",
    "skill": "Racionalización simple",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Radicales en el denominador"
  },
  {
    "id": "mat-int-94",
    "sectionId": 1,
    "number": 94,
    "text": "¿Cuál es el valor de x en la proporción geométrica: 4 / x = 12 / 27?",
    "options": [
      "x = 9",
      "x = 8",
      "x = 6",
      "x = 10"
    ],
    "correctIndex": 0,
    "explanation": "Producto cruzado: 12x = 4 × 27 = 108 ⇒ x = 108 / 12 = 9.",
    "skill": "Proporciones geométricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aritmética",
    "subtopic": "Regla de tres"
  },
  {
    "id": "mat-int-95",
    "sectionId": 1,
    "number": 95,
    "text": "En una bolsa hay 5 canicas rojas, 3 azules y 2 amarillas. ¿Cuál es la probabilidad de sacar una que NO sea roja?",
    "options": [
      "5/10 (1/2 o 50%)",
      "3/10",
      "2/10",
      "4/10"
    ],
    "correctIndex": 0,
    "explanation": "Canicas no rojas = 3 + 2 = 5. Total = 10. Probabilidad = 5/10 = 1/2 = 50%.",
    "skill": "Probabilidad de evento contrario",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Probabilidad",
    "subtopic": "Regla del complemento"
  },
  {
    "id": "mat-int-96",
    "sectionId": 1,
    "number": 96,
    "text": "Si un ángulo mide 120°, ¿a cuántos radianes equivale en términos de π?",
    "options": [
      "2π/3 radianes",
      "3π/4 radianes",
      "5π/6 radianes",
      "π/3 radianes"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicamos por (π / 180°): 120 × (π / 180) = 12/18 π = 2π/3 radianes.",
    "skill": "Conversión de grados a radianes",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Trigonometría",
    "subtopic": "Medida angular"
  },
  {
    "id": "mat-int-97",
    "sectionId": 1,
    "number": 97,
    "text": "¿Cuál es el área total de un cubo de arista 4 cm?",
    "options": [
      "96 cm²",
      "64 cm²",
      "16 cm²",
      "48 cm²"
    ],
    "correctIndex": 0,
    "explanation": "El cubo tiene 6 caras cuadradas de área 4² = 16 cm². Área total = 6 × 16 = 96 cm².",
    "skill": "Área superficial del cubo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría del Espacio",
    "subtopic": "Cubo"
  },
  {
    "id": "mat-int-98",
    "sectionId": 1,
    "number": 98,
    "text": "En una progresión aritmética el primer término es a₁ = 3 y la diferencia es d = 5. ¿Cuál es el décimo término a₁₀?",
    "options": [
      "48",
      "50",
      "45",
      "53"
    ],
    "correctIndex": 0,
    "explanation": "a_n = a₁ + (n - 1)d ⇒ a₁₀ = 3 + (10 - 1)5 = 3 + 45 = 48.",
    "skill": "Progresiones aritméticas básicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Término general"
  },
  {
    "id": "mat-int-99",
    "sectionId": 1,
    "number": 99,
    "text": "¿Cuál es el coeficiente del término de grado 2 en el polinomio 4x³ - 7x² + 5x - 8?",
    "options": [
      "-7",
      "7",
      "-8",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "El término de grado 2 es -7x², por lo que su coeficiente es -7.",
    "skill": "Identificación de coeficientes",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Álgebra",
    "subtopic": "Polinomios"
  },
  {
    "id": "mat-int-100",
    "sectionId": 1,
    "number": 100,
    "text": "Si dos figuras son semejantes con razón de semejanza lineal k = 3, ¿cuál es la razón entre sus áreas?",
    "options": [
      "9 (k²)",
      "3",
      "6",
      "27"
    ],
    "correctIndex": 0,
    "explanation": "La razón entre las áreas de dos figuras semejantes es igual al cuadrado de la razón de semejanza lineal: k² = 3² = 9.",
    "skill": "Semejanza geométrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría Plana",
    "subtopic": "Razón de áreas"
  }
];
