import { Question } from '../../types';

/**
 * BANCO OFICIAL DE PREGUNTAS: MATEMÁTICAS
 * 100 Reactivos Verificados Pedagógicamente:
 * - 20 Básico
 * - 20 Intermedio
 * - 20 Bachillerato
 * - 20 Técnico
 * - 20 Universitario
 */
export const QUESTIONS_MATEMATICAS: Question[] = [
  {
    "id": "mat-bas-1",
    "sectionId": 1,
    "number": 1,
    "text": "Si compras 3 cuadernos a $2.50 cada uno y pagas con un billete de $10.00, ¿cuánto dinero debes recibir de cambio?",
    "options": [
      "$2.50",
      "$3.00",
      "$3.50",
      "$7.50"
    ],
    "correctIndex": 0,
    "explanation": "El costo total de la compra es 3 × $2.50 = $7.50. El cambio se calcula restando el total gastado del importe entregado: $10.00 - $7.50 = $2.50.",
    "skill": "Operaciones Aritméticas Básicas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Problemas de compra y cambio"
  },
  {
    "id": "mat-bas-2",
    "sectionId": 1,
    "number": 2,
    "text": "¿Cuál es el perímetro de un terreno rectangular que mide 14 metros de largo por 6 metros de ancho?",
    "options": [
      "20 metros",
      "40 metros",
      "84 metros",
      "28 metros"
    ],
    "correctIndex": 1,
    "explanation": "El perímetro de un rectángulo es la suma de sus cuatro lados: P = 2 × (largo + ancho) = 2 × (14 m + 6 m) = 2 × 20 m = 40 metros.",
    "skill": "Geometría Elemental",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Perímetros"
  },
  {
    "id": "mat-bas-3",
    "sectionId": 1,
    "number": 3,
    "text": "¿Cuál es el resultado de simplificar la fracción 36/48 a su mínima expresión irreducible?",
    "options": [
      "6/8",
      "3/4",
      "9/12",
      "2/3"
    ],
    "correctIndex": 1,
    "explanation": "El Máximo Común Divisor (MCD) de 36 y 48 es 12. Dividiendo numerador y denominador entre 12: 36 ÷ 12 = 3 y 48 ÷ 12 = 4, obteniendo 3/4.",
    "skill": "Fracciones y Simplificación",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Números Racionales"
  },
  {
    "id": "mat-bas-4",
    "sectionId": 1,
    "number": 4,
    "text": "¿Cuál es el valor de la operación combinada: 18 - 3 × 4 + 10 ÷ 2?",
    "options": [
      "11",
      "15",
      "35",
      "7"
    ],
    "correctIndex": 0,
    "explanation": "Siguiendo la jerarquía de operaciones: primero multiplicaciones y divisiones (3 × 4 = 12; 10 ÷ 2 = 5), luego sumas y restas de izquierda a derecha: 18 - 12 + 5 = 6 + 5 = 11.",
    "skill": "Jerarquía de Operaciones",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Operaciones Combinadas"
  },
  {
    "id": "mat-bas-5",
    "sectionId": 1,
    "number": 5,
    "text": "¿Qué número decimal resulta de convertir la fracción 3/8?",
    "options": [
      "0.375",
      "0.38",
      "0.35",
      "0.25"
    ],
    "correctIndex": 0,
    "explanation": "Al dividir el numerador 3 entre el denominador 8 se obtiene 3 ÷ 8 = 0.375 exactamente.",
    "skill": "Conversión de Fracciones a Decimales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Decimales"
  },
  {
    "id": "mat-bas-6",
    "sectionId": 1,
    "number": 6,
    "text": "Un tren viaja a una velocidad constante y recorre 180 km en 3 horas. ¿Cuántos kilómetros recorrerá en 5 horas a esa misma velocidad?",
    "options": [
      "240 km",
      "300 km",
      "360 km",
      "280 km"
    ],
    "correctIndex": 1,
    "explanation": "La velocidad unitaria es 180 km ÷ 3 h = 60 km/h. En 5 horas recorrerá 60 km/h × 5 h = 300 km.",
    "skill": "Regla de Tres Simple Directa",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Proporcionalidad"
  },
  {
    "id": "mat-bas-7",
    "sectionId": 1,
    "number": 7,
    "text": "¿Cuál es el área de un triángulo cuya base mide 12 cm y su altura correspondiente es de 7 cm?",
    "options": [
      "84 cm²",
      "42 cm²",
      "19 cm²",
      "38 cm²"
    ],
    "correctIndex": 1,
    "explanation": "El área de un triángulo se calcula con la fórmula A = (base × altura) / 2. Así: (12 cm × 7 cm) / 2 = 84 / 2 = 42 cm².",
    "skill": "Cálculo de Áreas Planas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Áreas de Polígonos"
  },
  {
    "id": "mat-bas-8",
    "sectionId": 1,
    "number": 8,
    "text": "En una clase de 40 estudiantes, el 60% son mujeres. ¿Cuántos varones hay en el aula?",
    "options": [
      "24",
      "16",
      "20",
      "18"
    ],
    "correctIndex": 1,
    "explanation": "Si el 60% son mujeres, el porcentaje de varones es 100% - 60% = 40%. Calculando: 40 × 0.40 = 16 varones.",
    "skill": "Cálculo de Porcentajes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética Comercial",
    "subtopic": "Porcentajes"
  },
  {
    "id": "mat-bas-9",
    "sectionId": 1,
    "number": 9,
    "text": "¿Cuál es el mínimo común múltiplo (MCM) de los números 12, 15 y 20?",
    "options": [
      "60",
      "120",
      "30",
      "180"
    ],
    "correctIndex": 0,
    "explanation": "Descomponiendo en factores primos: 12 = 2² × 3, 15 = 3 × 5, 20 = 2² × 5. El MCM toma los factores comunes y no comunes al mayor exponente: 2² × 3 × 5 = 4 × 3 × 5 = 60.",
    "skill": "Teoría de Números",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "MCM y MCD"
  },
  {
    "id": "mat-bas-10",
    "sectionId": 1,
    "number": 10,
    "text": "¿Cuál es el resultado de la suma de números enteros: (-15) + (+28) + (-7)?",
    "options": [
      "+6",
      "+20",
      "-6",
      "+16"
    ],
    "correctIndex": 0,
    "explanation": "Sumamos primero los números negativos: (-15) + (-7) = -22. Luego operamos con el positivo: 28 - 22 = +6.",
    "skill": "Operaciones con Números Enteros",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Números Enteros"
  },
  {
    "id": "mat-bas-11",
    "sectionId": 1,
    "number": 11,
    "text": "Si el radio de un círculo mide 5 cm, ¿cuál es su área aproximada? (Utiliza π ≈ 3.1416).",
    "options": [
      "31.42 cm²",
      "78.54 cm²",
      "15.71 cm²",
      "25.00 cm²"
    ],
    "correctIndex": 1,
    "explanation": "El área de un círculo es A = π × r² = 3.1416 × (5 cm)² = 3.1416 × 25 = 78.54 cm².",
    "skill": "Geometría Circular",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Área del Círculo"
  },
  {
    "id": "mat-bas-12",
    "sectionId": 1,
    "number": 12,
    "text": "¿Cuánto es el resultado de 2⁴ × 3²?",
    "options": [
      "72",
      "144",
      "96",
      "48"
    ],
    "correctIndex": 1,
    "explanation": "Calculamos las potencias individuales: 2⁴ = 16 y 3² = 9. Luego multiplicamos: 16 × 9 = 144.",
    "skill": "Potenciación Básica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Potencias"
  },
  {
    "id": "mat-bas-13",
    "sectionId": 1,
    "number": 13,
    "text": "¿Cuántos mililitros hay en 2.75 litros de agua?",
    "options": [
      "275 ml",
      "2750 ml",
      "27.5 ml",
      "27500 ml"
    ],
    "correctIndex": 1,
    "explanation": "1 litro equivale a 1000 mililitros. Por lo tanto, 2.75 L × 1000 ml/L = 2750 ml.",
    "skill": "Conversión de Unidades de Medida",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Metrología",
    "subtopic": "Unidades de Volumen"
  },
  {
    "id": "mat-bas-14",
    "sectionId": 1,
    "number": 14,
    "text": "¿Cuál es el valor de x en la igualdad: x / 5 = 9 / 15?",
    "options": [
      "x = 3",
      "x = 5",
      "x = 1",
      "x = 4.5"
    ],
    "correctIndex": 0,
    "explanation": "Aplicando la propiedad fundamental de las proporciones: x = (5 × 9) / 15 = 45 / 15 = 3.",
    "skill": "Proporciones y Razones",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Proporciones"
  },
  {
    "id": "mat-bas-15",
    "sectionId": 1,
    "number": 15,
    "text": "¿Cuál es el Máximo Común Divisor (MCD) de 24 y 36?",
    "options": [
      "6",
      "8",
      "12",
      "18"
    ],
    "correctIndex": 2,
    "explanation": "Los divisores de 24 son {1, 2, 3, 4, 6, 8, 12, 24}. Los divisores de 36 son {1, 2, 3, 4, 6, 9, 12, 18, 36}. El mayor divisor común es 12.",
    "skill": "Máximo Común Divisor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Divisibilidad"
  },
  {
    "id": "mat-bas-16",
    "sectionId": 1,
    "number": 16,
    "text": "Un pastel se corta en 8 rebanadas iguales. Si Juan come 2 rebanadas y María come 3 rebanadas, ¿qué fracción del pastel queda?",
    "options": [
      "3/8",
      "5/8",
      "1/2",
      "1/4"
    ],
    "correctIndex": 0,
    "explanation": "Comieron en total: 2/8 + 3/8 = 5/8 del pastel. La fracción que queda es el entero menos lo comido: 8/8 - 5/8 = 3/8.",
    "skill": "Suma y Resta de Fracciones Homogéneas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Fracciones"
  },
  {
    "id": "mat-bas-17",
    "sectionId": 1,
    "number": 17,
    "text": "¿Cuál es el resultado de resolver: √144 + √81 - √25?",
    "options": [
      "16",
      "12",
      "20",
      "14"
    ],
    "correctIndex": 0,
    "explanation": "Calculamos cada raíz cuadrada exacta: √144 = 12, √81 = 9, √25 = 5. Realizando las operaciones: 12 + 9 - 5 = 21 - 5 = 16.",
    "skill": "Radicación Exacta",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Raíces Cuadradas"
  },
  {
    "id": "mat-bas-18",
    "sectionId": 1,
    "number": 18,
    "text": "Si la suma de los tres ángulos internos de cualquier triángulo siempre es 180°, y dos de sus ángulos miden 65° y 45°, ¿cuánto mide el tercer ángulo?",
    "options": [
      "70°",
      "80°",
      "60°",
      "75°"
    ],
    "correctIndex": 0,
    "explanation": "Sumamos los dos ángulos conocidos: 65° + 45° = 110°. El tercer ángulo mide: 180° - 110° = 70°.",
    "skill": "Geometría Triangular",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Ángulos en Triángulos"
  },
  {
    "id": "mat-bas-19",
    "sectionId": 1,
    "number": 19,
    "text": "Calcula el promedio (media aritmética) de las siguientes notas: 8, 9, 7, 10, 6.",
    "options": [
      "8.0",
      "7.5",
      "8.5",
      "7.0"
    ],
    "correctIndex": 0,
    "explanation": "Sumamos todas las notas: 8 + 9 + 7 + 10 + 6 = 40. Dividimos entre la cantidad total de notas (5): 40 / 5 = 8.0.",
    "skill": "Estadística Descriptiva Básica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Estadística",
    "subtopic": "Media Aritmética"
  },
  {
    "id": "mat-bas-20",
    "sectionId": 1,
    "number": 20,
    "text": "Un comerciante compra un producto a $50 y lo vende a $65. ¿Cuál fue el porcentaje de ganancia sobre el precio de compra?",
    "options": [
      "30%",
      "15%",
      "25%",
      "20%"
    ],
    "correctIndex": 0,
    "explanation": "La ganancia en dinero es $65 - $50 = $15. El porcentaje de ganancia es ($15 / $50) × 100% = 0.30 × 100% = 30%.",
    "skill": "Porcentajes Comerciales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética Comercial",
    "subtopic": "Margen de Ganancia"
  },
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
    "id": "mat-tec-1",
    "sectionId": 1,
    "number": 61,
    "text": "En un taller de manufactura, una máquina tarda 4 horas en producir 240 piezas. Con una eficiencia mejorada que incrementa la velocidad un 25%, ¿cuántas piezas producirá en 5 horas?",
    "options": [
      "300 piezas",
      "375 piezas",
      "360 piezas",
      "400 piezas"
    ],
    "correctIndex": 1,
    "explanation": "Tasa original = 240 piezas / 4 h = 60 piezas/h. Con 25% de incremento: 60 × 1.25 = 75 piezas/h. En 5 horas: 75 × 5 = 375 piezas.",
    "skill": "Tasas de Producción y Rendimiento",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Matemática Aplicada a la Producción",
    "subtopic": "Rendimiento Industrial"
  },
  {
    "id": "mat-tec-2",
    "sectionId": 1,
    "number": 62,
    "text": "Para calcular la resistencia equivalente de dos resistores en paralelo de R₁ = 30 Ω y R₂ = 20 Ω, ¿cuál es el valor de Req?",
    "options": [
      "50 Ω",
      "12 Ω",
      "25 Ω",
      "15 Ω"
    ],
    "correctIndex": 1,
    "explanation": "Por fórmula de producto sobre suma: Req = (R₁ · R₂) / (R₁ + R₂) = (30 × 20) / (30 + 20) = 600 / 50 = 12 Ω.",
    "skill": "Modelado Eléctrico-Matemático",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Fórmulas Técnicas",
    "subtopic": "Circuitos en Paralelo"
  },
  {
    "id": "mat-tec-3",
    "sectionId": 1,
    "number": 63,
    "text": "Una polea motriz de 120 mm de diámetro gira a 1800 RPM y acciona mediante correa una polea conducida de 360 mm. ¿A cuántas RPM gira la polea conducida?",
    "options": [
      "600 RPM",
      "5400 RPM",
      "900 RPM",
      "1200 RPM"
    ],
    "correctIndex": 0,
    "explanation": "Por relación de transmisión: N₁ · D₁ = N₂ · D₂ => 1800 · 120 = N₂ · 360 => N₂ = (1800 · 120) / 360 = 216000 / 360 = 600 RPM.",
    "skill": "Cálculo de Transmisiones Mecánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Transmisión por Poleas"
  },
  {
    "id": "mat-tec-4",
    "sectionId": 1,
    "number": 64,
    "text": "Un tanque de almacenamiento cilíndrico tiene un radio interno de 1.5 metros y una altura de 4 metros. ¿Cuál es su capacidad volumétrica máxima en litros? (Usa π ≈ 3.1416).",
    "options": [
      "28,274 litros",
      "18,849 litros",
      "9,425 litros",
      "35,000 litros"
    ],
    "correctIndex": 0,
    "explanation": "Volumen V = π · r² · h = 3.1416 · (1.5)² · 4 = 3.1416 · 2.25 · 4 = 28.2744 m³. Como 1 m³ = 1000 litros, la capacidad es 28,274.4 L.",
    "skill": "Cálculo de Capacidad de Depósitos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Geometría Aplicada",
    "subtopic": "Volumen de Tanques"
  },
  {
    "id": "mat-tec-5",
    "sectionId": 1,
    "number": 65,
    "text": "Una pieza cilíndrica torneada tiene una cota nominal de 45 mm con tolerancia dimensional de ±0.03 mm. ¿Cuál es la dimensión máxima admisible para que la pieza pase el control de calidad?",
    "options": [
      "45.03 mm",
      "45.06 mm",
      "45.30 mm",
      "44.97 mm"
    ],
    "correctIndex": 0,
    "explanation": "La tolerancia superior es +0.03 mm. La cota máxima permitida es 45.00 + 0.03 = 45.03 mm.",
    "skill": "Metrología y Tolerancias Dimensionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Metrología Técnica",
    "subtopic": "Ajustes y Tolerancias"
  },
  {
    "id": "mat-tec-6",
    "sectionId": 1,
    "number": 66,
    "text": "Una rampa de carga para camiones debe salvar un desnivel vertical de 1.2 metros con una pendiente máxima del 8%. ¿Qué longitud horizontal mínima debe tener la rampa?",
    "options": [
      "15 metros",
      "9.6 metros",
      "12 metros",
      "18 metros"
    ],
    "correctIndex": 0,
    "explanation": "Pendiente = (desnivel / longitud horizontal) × 100% => 8% = (1.2 / L) × 100 => L = (1.2 × 100) / 8 = 120 / 8 = 15 metros.",
    "skill": "Cálculo de Pendientes Técnicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Topografía y Estructuras",
    "subtopic": "Pendientes"
  },
  {
    "id": "mat-tec-7",
    "sectionId": 1,
    "number": 67,
    "text": "Un motor eléctrico de 5.5 kW de potencia nominal tiene una eficiencia (rendimiento) del 88%. ¿Cuánta potencia eléctrica real consume de la red?",
    "options": [
      "6.25 kW",
      "4.84 kW",
      "5.00 kW",
      "6.80 kW"
    ],
    "correctIndex": 0,
    "explanation": "Rendimiento η = P_util / P_consumida => P_consumida = P_util / η = 5.5 kW / 0.88 = 6.25 kW.",
    "skill": "Rendimiento Energético",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electromecánica",
    "subtopic": "Potencia y Rendimiento"
  },
  {
    "id": "mat-tec-8",
    "sectionId": 1,
    "number": 68,
    "text": "Para fabricar un soporte triangular, se requiere que la hipotenusa mida 50 cm y un ángulo agudo sea de 30°. ¿Cuánto mide el cateto opuesto a dicho ángulo?",
    "options": [
      "25 cm",
      "43.3 cm",
      "35 cm",
      "30 cm"
    ],
    "correctIndex": 0,
    "explanation": "Por definición trigonométrica sen(30°) = cateto opuesto / hipotenusa. Como sen(30°) = 0.5: Cateto opuesto = 50 cm × 0.5 = 25 cm.",
    "skill": "Trigonometría Técnica de Taller",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Trigonometría Aplicada",
    "subtopic": "Resolución de Estructuras"
  },
  {
    "id": "mat-tec-9",
    "sectionId": 1,
    "number": 69,
    "text": "Un sistema hidráulico genera una presión de 150 bar (150 × 10⁵ N/m²) en un pistón de 0.02 m² de área. ¿Qué fuerza en Newtons ejerce el pistón?",
    "options": [
      "300,000 N",
      "75,000 N",
      "30,000 N",
      "3,000 N"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula de presión: P = F / A => F = P × A = (150 × 10⁵ N/m²) × 0.02 m² = 300,000 N (300 kN).",
    "skill": "Cálculo Hidráulico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Oleohidráulica",
    "subtopic": "Fuerza Hidráulica"
  },
  {
    "id": "mat-tec-10",
    "sectionId": 1,
    "number": 70,
    "text": "Un engranaje recto con 40 dientes tiene un módulo m = 2.5 mm. ¿Cuál es su diámetro primitivo Dp?",
    "options": [
      "100 mm",
      "95 mm",
      "105 mm",
      "16 mm"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula de cinemática de engranajes: Diámetro primitivo Dp = m × Z = 2.5 mm × 40 = 100 mm.",
    "skill": "Diseño de Elementos Mecánicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Engranajes"
  },
  {
    "id": "mat-tec-11",
    "sectionId": 1,
    "number": 71,
    "text": "Al convertir una presión manométrica de 45 PSI (libras por pulgada cuadrada) al sistema internacional en bares (1 bar ≈ 14.504 PSI), ¿cuál es el valor aproximado?",
    "options": [
      "3.10 bar",
      "4.50 bar",
      "2.25 bar",
      "6.52 bar"
    ],
    "correctIndex": 0,
    "explanation": "45 PSI / 14.504 PSI/bar ≈ 3.102 bar.",
    "skill": "Conversión de Unidades Técnicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Metrología",
    "subtopic": "Presión"
  },
  {
    "id": "mat-tec-12",
    "sectionId": 1,
    "number": 72,
    "text": "Un circuito de control automatizado emite un pulso cada 125 milisegundos. ¿Cuál es la frecuencia de pulsos en Hertz (Hz)?",
    "options": [
      "8 Hz",
      "12.5 Hz",
      "80 Hz",
      "0.008 Hz"
    ],
    "correctIndex": 0,
    "explanation": "Periodo T = 125 ms = 0.125 s. Frecuencia f = 1 / T = 1 / 0.125 s = 8 Hz.",
    "skill": "Señales y Frecuencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización",
    "subtopic": "Frecuencia y Periodo"
  },
  {
    "id": "mat-tec-13",
    "sectionId": 1,
    "number": 73,
    "text": "Para mezclar refrigerante concentrado con agua al 40% de concentración en un sistema de 15 litros, ¿cuántos litros de refrigerante puro se necesitan?",
    "options": [
      "6 litros",
      "4 litros",
      "9 litros",
      "7.5 litros"
    ],
    "correctIndex": 0,
    "explanation": "Volumen puro = 15 L × 0.40 = 6 litros de refrigerante y 9 litros de agua desmineralizada.",
    "skill": "Dosificación Técnica de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Fluidos y Mantenimiento",
    "subtopic": "Concentración de Mezclas"
  },
  {
    "id": "mat-tec-14",
    "sectionId": 1,
    "number": 74,
    "text": "Una tubería de acero experimenta una dilatación térmica lineal dada por ΔL = α · L₀ · ΔT. Si L₀ = 20 m, α = 1.2 × 10⁻⁵ °C⁻¹ y la temperatura aumenta 50 °C, ¿cuál es la elongación ΔL en milímetros?",
    "options": [
      "12 mm",
      "1.2 mm",
      "24 mm",
      "6 mm"
    ],
    "correctIndex": 0,
    "explanation": "ΔL = (1.2 × 10⁻⁵) · (20 m) · (50 °C) = 1.2 × 10⁻⁵ · 1000 = 0.012 m = 12 mm.",
    "skill": "Cálculo de Dilatación Térmica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Tuberías y Calderería",
    "subtopic": "Dilatación de Materiales"
  },
  {
    "id": "mat-tec-15",
    "sectionId": 1,
    "number": 75,
    "text": "Un cable de acero de 10 mm de diámetro soporta una carga de 15,700 N. ¿Cuál es el esfuerzo de tracción σ en N/mm² (MPa)? (Área de sección ≈ 78.54 mm²).",
    "options": [
      "200 MPa",
      "157 MPa",
      "100 MPa",
      "314 MPa"
    ],
    "correctIndex": 0,
    "explanation": "Esfuerzo σ = Fuerza / Área = 15,700 N / 78.54 mm² ≈ 199.9 MPa ≈ 200 MPa.",
    "skill": "Resistencia de Materiales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Materiales",
    "subtopic": "Tensión Mecánica"
  },
  {
    "id": "mat-tec-16",
    "sectionId": 1,
    "number": 76,
    "text": "Una prensa hidráulica tiene un émbolo menor de 5 cm² de área y un émbolo mayor de 250 cm². Si se aplica una fuerza de 200 N en el émbolo menor, ¿qué fuerza se genera en el émbolo mayor?",
    "options": [
      "10,000 N",
      "5,000 N",
      "2,500 N",
      "1,000 N"
    ],
    "correctIndex": 0,
    "explanation": "Por el Principio de Pascal: F₂ / A₂ = F₁ / A₁ => F₂ = F₁ × (A₂ / A₁) = 200 N × (250 / 5) = 200 × 50 = 10,000 N (10 kN).",
    "skill": "Transmisión Hidráulica de Fuerza",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Hidráulica",
    "subtopic": "Prensa Hidráulica"
  },
  {
    "id": "mat-tec-17",
    "sectionId": 1,
    "number": 77,
    "text": "En un proceso de fresado CNC, la velocidad de corte Vc es de 120 m/min para una fresa de 40 mm de diámetro. ¿A qué velocidad de rotación N (RPM) debe configurarse el husillo? (Fórmula: N = (1000 · Vc) / (π · D)).",
    "options": [
      "955 RPM",
      "1200 RPM",
      "600 RPM",
      "1500 RPM"
    ],
    "correctIndex": 0,
    "explanation": "N = (1000 × 120) / (3.1416 × 40) = 120,000 / 125.66 = 954.9 RPM ≈ 955 RPM.",
    "skill": "Mecanizado CNC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Manufactura Mecánica",
    "subtopic": "Parámetros de Corte"
  },
  {
    "id": "mat-tec-18",
    "sectionId": 1,
    "number": 78,
    "text": "Un banco de condensadores trifásico debe suministrar 15 kVAR para corregir el factor de potencia. Si cada paso individual aporta 2.5 kVAR, ¿cuántos pasos se requieren encender?",
    "options": [
      "6 pasos",
      "5 pasos",
      "8 pasos",
      "4 pasos"
    ],
    "correctIndex": 0,
    "explanation": "15 kVAR / 2.5 kVAR por paso = 6 pasos exactamente.",
    "skill": "Compensación de Energía Reactiva",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instalaciones Eléctricas Industriales",
    "subtopic": "Factor de Potencia"
  },
  {
    "id": "mat-tec-19",
    "sectionId": 1,
    "number": 79,
    "text": "Una cinta transportadora avanza a 0.8 m/s y traslada 48 paquetes por minuto. ¿Cuál es la distancia media de separación entre los centros de cada paquete consecutivo?",
    "options": [
      "1.0 metro",
      "0.6 metros",
      "1.2 metros",
      "1.6 metros"
    ],
    "correctIndex": 0,
    "explanation": "Distancia recorrida en un minuto (60 s) = 0.8 m/s × 60 s = 48 metros. Con 48 paquetes distribuidos en 48 metros: 48 m / 48 paquetes = 1.0 metro entre centros.",
    "skill": "Cinemática de Transporte Industrial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización y Logística",
    "subtopic": "Cintas Transportadoras"
  },
  {
    "id": "mat-tec-20",
    "sectionId": 1,
    "number": 80,
    "text": "Un reductor de velocidad tiene un rendimiento mecánico del 92%. Si el motor entrega un torque de entrada de 50 N·m y la relación de reducción es de 10:1, ¿cuál es el torque real en el eje de salida?",
    "options": [
      "460 N·m",
      "500 N·m",
      "400 N·m",
      "540 N·m"
    ],
    "correctIndex": 0,
    "explanation": "Torque teórico = Torque_entrada × relación = 50 N·m × 10 = 500 N·m. Considerando el 92% de rendimiento: 500 N·m × 0.92 = 460 N·m.",
    "skill": "Torque y Rendimiento en Reductores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Transmisión de Potencia",
    "subtopic": "Cajas Reductoras"
  },
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
  }
];
