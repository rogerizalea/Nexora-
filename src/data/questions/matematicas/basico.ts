import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE MATEMÁTICAS - NIVEL BÁSICO (100 Reactivos)
 */
export const MATEMATICAS_BASICO: Question[] = [
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
    "id": "mat-bas-21",
    "sectionId": 1,
    "number": 21,
    "text": "¿Cuál es el resultado de la operación combinada 25 + 15 ÷ 3 - 4?",
    "options": [
      "26",
      "24",
      "10",
      "30"
    ],
    "correctIndex": 0,
    "explanation": "Por jerarquía de operaciones se resuelve primero la división: 15 ÷ 3 = 5. Luego sumas y restas de izquierda a derecha: 25 + 5 = 30, y 30 - 4 = 26.",
    "skill": "Jerarquía de operaciones básicas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Operaciones combinadas"
  },
  {
    "id": "mat-bas-22",
    "sectionId": 1,
    "number": 22,
    "text": "Si compras 4 libretas a $2.25 cada una y 3 bolígrafos a $0.75 cada uno, ¿cuánto pagas en total?",
    "options": [
      "$11.25",
      "$10.50",
      "$12.00",
      "$9.75"
    ],
    "correctIndex": 0,
    "explanation": "Libretas: 4 × 2.25 = $9.00. Bolígrafos: 3 × 0.75 = $2.25. Total = $9.00 + $2.25 = $11.25.",
    "skill": "Resolución de problemas cotidianos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética Comercial",
    "subtopic": "Cálculo de presupuestos"
  },
  {
    "id": "mat-bas-23",
    "sectionId": 1,
    "number": 23,
    "text": "¿Cuál es el resultado de restar 1,200 menos 745?",
    "options": [
      "455",
      "555",
      "465",
      "445"
    ],
    "correctIndex": 0,
    "explanation": "Efectuando la resta con llevadas: 1,200 - 745 = 455.",
    "skill": "Sustracción con ceros intermedios",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Sustracción"
  },
  {
    "id": "mat-bas-24",
    "sectionId": 1,
    "number": 24,
    "text": "¿Qué propiedad de la suma se demuestra en la expresión: (14 + 8) + 6 = 14 + (8 + 6)?",
    "options": [
      "Propiedad asociativa",
      "Propiedad conmutativa",
      "Elemento neutro",
      "Propiedad distributiva"
    ],
    "correctIndex": 0,
    "explanation": "La propiedad asociativa establece que la forma en que se agrupan los sumandos no altera el resultado final.",
    "skill": "Propiedades de las operaciones",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Propiedad asociativa"
  },
  {
    "id": "mat-bas-25",
    "sectionId": 1,
    "number": 25,
    "text": "¿Cuál es el mínimo común múltiplo (mcm) entre 4, 6 y 10?",
    "options": [
      "60",
      "30",
      "120",
      "24"
    ],
    "correctIndex": 0,
    "explanation": "Descomposición en factores primos: 4 = 2², 6 = 2×3, 10 = 2×5. mcm = 2² × 3 × 5 = 4 × 3 × 5 = 60.",
    "skill": "Mínimo común múltiplo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Divisibilidad"
  },
  {
    "id": "mat-bas-26",
    "sectionId": 1,
    "number": 26,
    "text": "¿Cuál es el máximo común divisor (MCD) entre 30 y 45?",
    "options": [
      "15",
      "5",
      "3",
      "30"
    ],
    "correctIndex": 0,
    "explanation": "Los divisores comunes de 30 y 45 son 1, 3, 5 y 15. El mayor de ellos es 15.",
    "skill": "Máximo común divisor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Factores comunes"
  },
  {
    "id": "mat-bas-27",
    "sectionId": 1,
    "number": 27,
    "text": "¿Cuál de los siguientes números es divisible tanto por 2 como por 3 y por 5?",
    "options": [
      "90",
      "75",
      "84",
      "100"
    ],
    "correctIndex": 0,
    "explanation": "Un número divisible por 2, 3 y 5 debe ser múltiplo de su mcm (30). 90 termina en 0 (divisible por 2 y 5) y la suma de sus cifras es 9 (divisible por 3).",
    "skill": "Criterios de divisibilidad",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Divisibilidad compuesta"
  },
  {
    "id": "mat-bas-28",
    "sectionId": 1,
    "number": 28,
    "text": "Si un paquete de hojas contiene 500 hojas, ¿cuántas hojas habrá en 7 paquetes idénticos?",
    "options": [
      "3,500 hojas",
      "3,000 hojas",
      "3,700 hojas",
      "4,000 hojas"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicación directa: 7 × 500 = 3,500 hojas.",
    "skill": "Multiplicación con ceros finales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Multiplicación"
  },
  {
    "id": "mat-bas-29",
    "sectionId": 1,
    "number": 29,
    "text": "Al redondear el número 7,864 a la decena más cercana se obtiene:",
    "options": [
      "7,860",
      "7,870",
      "7,900",
      "7,800"
    ],
    "correctIndex": 0,
    "explanation": "La cifra de las unidades es 4 (menor que 5), por lo que la decena se mantiene en 6 y la unidad pasa a 0: 7,860.",
    "skill": "Aproximación y redondeo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Redondeo a decenas"
  },
  {
    "id": "mat-bas-30",
    "sectionId": 1,
    "number": 30,
    "text": "Calcula el resultado exacto de: 480 ÷ 12.",
    "options": [
      "40",
      "4",
      "44",
      "38"
    ],
    "correctIndex": 0,
    "explanation": "Dividiendo 48 decenas entre 12 obtenemos 4 decenas, es decir, 40.",
    "skill": "Cálculo mental y división",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "División exacta"
  },
  {
    "id": "mat-bas-31",
    "sectionId": 1,
    "number": 31,
    "text": "¿Cuál es el resultado de simplificar la fracción 42/56 a su expresión irreducible?",
    "options": [
      "3/4",
      "6/8",
      "7/8",
      "2/3"
    ],
    "correctIndex": 0,
    "explanation": "Dividiendo numerador y denominador entre su máximo común divisor (14): 42 ÷ 14 = 3, 56 ÷ 14 = 4. Resultado: 3/4.",
    "skill": "Simplificación de fracciones",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fracciones",
    "subtopic": "Fracción irreducible"
  },
  {
    "id": "mat-bas-32",
    "sectionId": 1,
    "number": 32,
    "text": "Calcula la suma: 2/7 + 3/7 + 1/7.",
    "options": [
      "6/7",
      "6/21",
      "5/7",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Al tener igual denominador, se suman directamente los numeradores: (2 + 3 + 1)/7 = 6/7.",
    "skill": "Adición de fracciones homogéneas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fracciones",
    "subtopic": "Suma homogénea"
  },
  {
    "id": "mat-bas-33",
    "sectionId": 1,
    "number": 33,
    "text": "Encuentra el resultado de: 5/6 - 1/3.",
    "options": [
      "1/2 (o 3/6)",
      "4/3",
      "4/6",
      "2/3"
    ],
    "correctIndex": 0,
    "explanation": "Buscamos común denominador 6: 1/3 = 2/6. Restamos: 5/6 - 2/6 = 3/6 = 1/2.",
    "skill": "Sustracción de fracciones heterogéneas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fracciones",
    "subtopic": "Resta heterogénea"
  },
  {
    "id": "mat-bas-34",
    "sectionId": 1,
    "number": 34,
    "text": "¿Cuál es el producto de multiplicar 3/5 por 10/9?",
    "options": [
      "2/3",
      "30/45",
      "1/2",
      "3/9"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicamos: (3 × 10) / (5 × 9) = 30/45. Simplificando entre 15: 30÷15 = 2 y 45÷15 = 3. Resultado: 2/3.",
    "skill": "Multiplicación de números racionales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fracciones",
    "subtopic": "Multiplicación"
  },
  {
    "id": "mat-bas-35",
    "sectionId": 1,
    "number": 35,
    "text": "Calcula la división: (4/5) ÷ (2/3).",
    "options": [
      "6/5 (o 1 1/5)",
      "8/15",
      "5/6",
      "2/5"
    ],
    "correctIndex": 0,
    "explanation": "Se multiplica por el recíproco de la segunda fracción: (4/5) × (3/2) = 12/10 = 6/5.",
    "skill": "División de fracciones",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fracciones",
    "subtopic": "División por recíproco"
  },
  {
    "id": "mat-bas-36",
    "sectionId": 1,
    "number": 36,
    "text": "¿Qué número mixto equivale a la fracción impropia 17/5?",
    "options": [
      "3 2/5",
      "2 7/5",
      "3 1/5",
      "4 2/5"
    ],
    "correctIndex": 0,
    "explanation": "17 ÷ 5 = 3 con residuo 2. Por tanto, 17/5 equivale a 3 enteros y 2/5.",
    "skill": "Conversión a número mixto",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fracciones",
    "subtopic": "Fracciones impropias"
  },
  {
    "id": "mat-bas-37",
    "sectionId": 1,
    "number": 37,
    "text": "Si en una botella de 2 litros queda 3/4 de litro de agua, ¿cuántos litros se han consumido?",
    "options": [
      "1 1/4 litros (1.25 L)",
      "1 litro",
      "3/4 de litro",
      "1 1/2 litros"
    ],
    "correctIndex": 0,
    "explanation": "Restamos del total: 2 - 3/4 = 8/4 - 3/4 = 5/4 = 1 1/4 litros.",
    "skill": "Problemas con números racionales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fracciones",
    "subtopic": "Consumo y capacidad"
  },
  {
    "id": "mat-bas-38",
    "sectionId": 1,
    "number": 38,
    "text": "¿Cuál de las siguientes fracciones es equivalente a 2/3?",
    "options": [
      "8/12",
      "6/10",
      "4/9",
      "5/6"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicando numerador y denominador por 4: (2×4)/(3×4) = 8/12.",
    "skill": "Fracciones equivalentes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fracciones",
    "subtopic": "Amplificación"
  },
  {
    "id": "mat-bas-39",
    "sectionId": 1,
    "number": 39,
    "text": "Ordena de menor a mayor las fracciones: 1/2, 1/4 y 3/4.",
    "options": [
      "1/4 < 1/2 < 3/4",
      "1/2 < 1/4 < 3/4",
      "3/4 < 1/2 < 1/4",
      "1/4 < 3/4 < 1/2"
    ],
    "correctIndex": 0,
    "explanation": "En decimales: 1/4 = 0.25, 1/2 = 0.50 y 3/4 = 0.75. Por tanto, 1/4 < 1/2 < 3/4.",
    "skill": "Comparación y orden de fracciones",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fracciones",
    "subtopic": "Relación de orden"
  },
  {
    "id": "mat-bas-40",
    "sectionId": 1,
    "number": 40,
    "text": "Si una receta para 4 personas requiere 250 g de harina, ¿cuánta harina se necesita para 8 personas?",
    "options": [
      "500 g",
      "750 g",
      "350 g",
      "1,000 g"
    ],
    "correctIndex": 0,
    "explanation": "Para el doble de personas (8 = 4 × 2) se requiere el doble de harina: 250 g × 2 = 500 g.",
    "skill": "Proporciones en situaciones reales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Proporcionalidad",
    "subtopic": "Recetas culinarias"
  },
  {
    "id": "mat-bas-41",
    "sectionId": 1,
    "number": 41,
    "text": "Suma los siguientes números decimales: 14.35 + 8.9 + 2.05.",
    "options": [
      "25.30",
      "24.30",
      "25.10",
      "26.30"
    ],
    "correctIndex": 0,
    "explanation": "Alineando por la coma decimal: 14.35 + 8.90 + 2.05 = 25.30.",
    "skill": "Adición de decimales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Números decimales"
  },
  {
    "id": "mat-bas-42",
    "sectionId": 1,
    "number": 42,
    "text": "Calcula la diferencia: 50.00 - 32.65.",
    "options": [
      "17.35",
      "18.35",
      "17.45",
      "16.35"
    ],
    "correctIndex": 0,
    "explanation": "50.00 - 32.65 = 17.35.",
    "skill": "Sustracción de decimales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Operaciones con dinero"
  },
  {
    "id": "mat-bas-43",
    "sectionId": 1,
    "number": 43,
    "text": "Multiplica 3.4 por 0.5.",
    "options": [
      "1.7",
      "1.70",
      "0.17",
      "17.0"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicar por 0.5 equivale a obtener la mitad: 3.4 ÷ 2 = 1.7.",
    "skill": "Multiplicación decimal",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Cálculo mental"
  },
  {
    "id": "mat-bas-44",
    "sectionId": 1,
    "number": 44,
    "text": "Divide 84.6 entre 2.",
    "options": [
      "42.3",
      "42.0",
      "41.3",
      "43.3"
    ],
    "correctIndex": 0,
    "explanation": "84.6 ÷ 2 = 42.3.",
    "skill": "División de decimales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "División por entero"
  },
  {
    "id": "mat-bas-45",
    "sectionId": 1,
    "number": 45,
    "text": "Si pagas una cuenta de $37.40 con un billete de $50.00, ¿cuál es tu cambio exacto?",
    "options": [
      "$12.60",
      "$13.60",
      "$12.40",
      "$13.40"
    ],
    "correctIndex": 0,
    "explanation": "$50.00 - $37.40 = $12.60.",
    "skill": "Cálculo de cambio monetario",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética Comercial",
    "subtopic": "Transacciones cotidianas"
  },
  {
    "id": "mat-bas-46",
    "sectionId": 1,
    "number": 46,
    "text": "Convierte la fracción 3/5 a su representación decimal.",
    "options": [
      "0.6",
      "0.35",
      "0.75",
      "0.5"
    ],
    "correctIndex": 0,
    "explanation": "Dividiendo numerador entre denominador: 3 ÷ 5 = 0.6.",
    "skill": "Conversión de fracción a decimal",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Números Racionales",
    "subtopic": "Decimales exactos"
  },
  {
    "id": "mat-bas-47",
    "sectionId": 1,
    "number": 47,
    "text": "¿Cuál número decimal es mayor: 0.705 o 0.75?",
    "options": [
      "0.75",
      "0.705",
      "Son iguales",
      "No se puede determinar"
    ],
    "correctIndex": 0,
    "explanation": "Igualando cifras decimales: 0.750 > 0.705, ya que en las centésimas 5 es mayor que 0.",
    "skill": "Comparación de decimales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Valor de posición decimal"
  },
  {
    "id": "mat-bas-48",
    "sectionId": 1,
    "number": 48,
    "text": "Un metro de tela cuesta $4.50. ¿Cuánto costarán 6 metros de la misma tela?",
    "options": [
      "$27.00",
      "$24.00",
      "$28.50",
      "$25.00"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicamos: 6 × $4.50 = $27.00.",
    "skill": "Multiplicación monetaria",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética Comercial",
    "subtopic": "Cálculo de costos"
  },
  {
    "id": "mat-bas-49",
    "sectionId": 1,
    "number": 49,
    "text": "Al dividir una cuenta de $84.00 entre 4 amigos a partes iguales, ¿cuánto paga cada uno?",
    "options": [
      "$21.00",
      "$22.00",
      "$20.00",
      "$24.00"
    ],
    "correctIndex": 0,
    "explanation": "$84.00 ÷ 4 = $21.00 por persona.",
    "skill": "Reparto equitativo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "División aplicada"
  },
  {
    "id": "mat-bas-50",
    "sectionId": 1,
    "number": 50,
    "text": "Calcula el resultado de: 100 × 0.08.",
    "options": [
      "8",
      "0.8",
      "80",
      "0.008"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicar por 100 desplaza la coma dos posiciones a la derecha: 0.08 × 100 = 8.",
    "skill": "Multiplicación por potencias de diez",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Potencias de diez"
  },
  {
    "id": "mat-bas-51",
    "sectionId": 1,
    "number": 51,
    "text": "¿Cuál es el 25% de 200?",
    "options": [
      "50",
      "25",
      "75",
      "40"
    ],
    "correctIndex": 0,
    "explanation": "El 25% equivale a la cuarta parte (1/4): 200 ÷ 4 = 50.",
    "skill": "Cálculo de porcentajes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Porcentajes",
    "subtopic": "Cuarta parte"
  },
  {
    "id": "mat-bas-52",
    "sectionId": 1,
    "number": 52,
    "text": "Un televisor de $400.00 tiene un descuento del 10%. ¿Cuánto dinero se descuenta?",
    "options": [
      "$40.00",
      "$10.00",
      "$20.00",
      "$50.00"
    ],
    "correctIndex": 0,
    "explanation": "10% de 400 = 0.10 × 400 = $40.00.",
    "skill": "Descuento comercial",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Porcentajes",
    "subtopic": "Rebajas"
  },
  {
    "id": "mat-bas-53",
    "sectionId": 1,
    "number": 53,
    "text": "Si 3 botellas de agua cuestan $1.50, ¿cuánto costarán 10 botellas?",
    "options": [
      "$5.00",
      "$4.50",
      "$6.00",
      "$5.50"
    ],
    "correctIndex": 0,
    "explanation": "Precio unitario: $1.50 ÷ 3 = $0.50. Para 10 botellas: 10 × $0.50 = $5.00.",
    "skill": "Regla de tres simple directa",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Proporcionalidad",
    "subtopic": "Costos proporcionales"
  },
  {
    "id": "mat-bas-54",
    "sectionId": 1,
    "number": 54,
    "text": "En un salón con 50 estudiantes, el 80% aprobó el examen. ¿Cuántos estudiantes aprobaron?",
    "options": [
      "40 estudiantes",
      "45 estudiantes",
      "35 estudiantes",
      "38 estudiantes"
    ],
    "correctIndex": 0,
    "explanation": "80% de 50 = (80/100) × 50 = 0.8 × 50 = 40 estudiantes.",
    "skill": "Aplicación de porcentajes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Porcentajes",
    "subtopic": "Aprobación académica"
  },
  {
    "id": "mat-bas-55",
    "sectionId": 1,
    "number": 55,
    "text": "¿Qué porcentaje representa el número 15 respecto a 60?",
    "options": [
      "25%",
      "20%",
      "30%",
      "15%"
    ],
    "correctIndex": 0,
    "explanation": "(15 / 60) × 100 = (1/4) × 100 = 25%.",
    "skill": "Porcentaje relativo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Porcentajes",
    "subtopic": "Razón porcentual"
  },
  {
    "id": "mat-bas-56",
    "sectionId": 1,
    "number": 56,
    "text": "Si un automóvil gasta 2 galones de gasolina para recorrer 60 km, ¿cuántos galones necesitará para 150 km a igual rendimiento?",
    "options": [
      "5 galones",
      "6 galones",
      "4 galones",
      "4.5 galones"
    ],
    "correctIndex": 0,
    "explanation": "Rendimiento: 60 km ÷ 2 galones = 30 km/galón. Para 150 km: 150 ÷ 30 = 5 galones.",
    "skill": "Consumo de combustible",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Proporcionalidad",
    "subtopic": "Rendimiento"
  },
  {
    "id": "mat-bas-57",
    "sectionId": 1,
    "number": 57,
    "text": "El precio de una entrada al cine es de $6.00. Si se incrementa en un 50%, ¿cuál será el nuevo precio?",
    "options": [
      "$9.00",
      "$8.00",
      "$12.00",
      "$7.50"
    ],
    "correctIndex": 0,
    "explanation": "Incremento: 50% de 6 = $3.00. Nuevo precio = $6.00 + $3.00 = $9.00.",
    "skill": "Aumento porcentual",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Porcentajes",
    "subtopic": "Incremento de tarifas"
  },
  {
    "id": "mat-bas-58",
    "sectionId": 1,
    "number": 58,
    "text": "¿Cuál es la razón simplificada entre 12 y 16?",
    "options": [
      "3 a 4 (3/4)",
      "2 a 3",
      "4 a 5",
      "6 a 8"
    ],
    "correctIndex": 0,
    "explanation": "Dividiendo ambos términos entre su MCD (4): 12÷4 = 3 y 16÷4 = 4. Razón: 3 a 4.",
    "skill": "Razones matemáticas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Proporcionalidad",
    "subtopic": "Simplificación de razones"
  },
  {
    "id": "mat-bas-59",
    "sectionId": 1,
    "number": 59,
    "text": "Si 1 libra equivale aproximadamente a 0.45 kilogramos, ¿cuántos kilos son 10 libras?",
    "options": [
      "4.5 kg",
      "45 kg",
      "0.45 kg",
      "4.05 kg"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicación directa: 10 × 0.45 = 4.5 kg.",
    "skill": "Conversión de masa",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Medidas",
    "subtopic": "Libras a kilogramos"
  },
  {
    "id": "mat-bas-60",
    "sectionId": 1,
    "number": 60,
    "text": "Si una máquina produce 120 piezas por hora, ¿cuántas piezas producirá en 5 horas de trabajo continuo?",
    "options": [
      "600 piezas",
      "500 piezas",
      "720 piezas",
      "650 piezas"
    ],
    "correctIndex": 0,
    "explanation": "120 piezas/hora × 5 horas = 600 piezas.",
    "skill": "Tasa de producción",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Proporcionalidad",
    "subtopic": "Producción continua"
  },
  {
    "id": "mat-bas-61",
    "sectionId": 1,
    "number": 61,
    "text": "¿Cuál es el perímetro de un pentágono regular si cada uno de sus lados mide 8 cm?",
    "options": [
      "40 cm",
      "48 cm",
      "32 cm",
      "35 cm"
    ],
    "correctIndex": 0,
    "explanation": "El pentágono tiene 5 lados iguales: P = 5 × 8 cm = 40 cm.",
    "skill": "Perímetro de polígonos regulares",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Pentágono"
  },
  {
    "id": "mat-bas-62",
    "sectionId": 1,
    "number": 62,
    "text": "Calcula el área de un rombo cuyas diagonales miden D = 10 cm y d = 6 cm.",
    "options": [
      "30 cm²",
      "60 cm²",
      "16 cm²",
      "24 cm²"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula del área del rombo: A = (D × d) / 2 = (10 × 6) / 2 = 60 / 2 = 30 cm².",
    "skill": "Área del rombo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Rombos"
  },
  {
    "id": "mat-bas-63",
    "sectionId": 1,
    "number": 63,
    "text": "¿Cuánto suman los tres ángulos interiores de cualquier triángulo?",
    "options": [
      "180 grados",
      "360 grados",
      "90 grados",
      "270 grados"
    ],
    "correctIndex": 0,
    "explanation": "Por teorema fundamental de la geometría euclidiana, la suma de los ángulos internos de un triángulo siempre es 180°.",
    "skill": "Teorema angular del triángulo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Ángulos interiores"
  },
  {
    "id": "mat-bas-64",
    "sectionId": 1,
    "number": 64,
    "text": "Si dos de los ángulos de un triángulo miden 50° y 70°, ¿cuánto mide el tercer ángulo?",
    "options": [
      "60°",
      "50°",
      "70°",
      "80°"
    ],
    "correctIndex": 0,
    "explanation": "Tercer ángulo = 180° - (50° + 70°) = 180° - 120° = 60°.",
    "skill": "Cálculo de ángulos faltantes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Triángulos"
  },
  {
    "id": "mat-bas-65",
    "sectionId": 1,
    "number": 65,
    "text": "Un terreno cuadrado tiene un área de 81 metros cuadrados. ¿Cuánto mide cada lado?",
    "options": [
      "9 metros",
      "8 metros",
      "18 metros",
      "8.5 metros"
    ],
    "correctIndex": 0,
    "explanation": "Área = L² ⇒ L = √81 = 9 metros.",
    "skill": "Raíz cuadrada aplicada a áreas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Cuadrados"
  },
  {
    "id": "mat-bas-66",
    "sectionId": 1,
    "number": 66,
    "text": "¿Cuál es la longitud de la circunferencia de una rueda de radio r = 7 cm? (Usa π ≈ 22/7)",
    "options": [
      "44 cm",
      "22 cm",
      "88 cm",
      "154 cm"
    ],
    "correctIndex": 0,
    "explanation": "Longitud = 2 × π × r = 2 × (22/7) × 7 = 2 × 22 = 44 cm.",
    "skill": "Perímetro de la circunferencia",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Circunferencia"
  },
  {
    "id": "mat-bas-67",
    "sectionId": 1,
    "number": 67,
    "text": "¿Qué nombre recibe el polígono regular que tiene 8 lados?",
    "options": [
      "Octógono (u octágono)",
      "Heptágono",
      "Nonágono",
      "Decágono"
    ],
    "correctIndex": 0,
    "explanation": "El polígono regular de 8 lados es el octógono.",
    "skill": "Nomenclatura de polígonos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Clasificación"
  },
  {
    "id": "mat-bas-68",
    "sectionId": 1,
    "number": 68,
    "text": "Dos ángulos que suman exactamente 180° se denominan:",
    "options": [
      "Suplementarios",
      "Complementarios",
      "Adyacentes rectos",
      "Opuestos por el vértice"
    ],
    "correctIndex": 0,
    "explanation": "Los ángulos suplementarios son aquellos cuya suma angular totaliza 180°.",
    "skill": "Relaciones angulares",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Ángulos suplementarios"
  },
  {
    "id": "mat-bas-69",
    "sectionId": 1,
    "number": 69,
    "text": "Si un ángulo mide 35°, ¿cuánto mide su ángulo complementario?",
    "options": [
      "55°",
      "65°",
      "145°",
      "45°"
    ],
    "correctIndex": 0,
    "explanation": "Los complementarios suman 90°: 90° - 35° = 55°.",
    "skill": "Ángulos complementarios",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Complemento"
  },
  {
    "id": "mat-bas-70",
    "sectionId": 1,
    "number": 70,
    "text": "Calcula el área de un trapecio con bases B = 12 cm, b = 8 cm y altura h = 5 cm.",
    "options": [
      "50 cm²",
      "100 cm²",
      "60 cm²",
      "45 cm²"
    ],
    "correctIndex": 0,
    "explanation": "Área = [(B + b) × h] / 2 = [(12 + 8) × 5] / 2 = [20 × 5] / 2 = 100 / 2 = 50 cm².",
    "skill": "Área del trapecio",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría Plana",
    "subtopic": "Trapecio"
  },
  {
    "id": "mat-bas-71",
    "sectionId": 1,
    "number": 71,
    "text": "¿A cuántos segundos equivalen 15 minutos?",
    "options": [
      "900 segundos",
      "600 segundos",
      "1,500 segundos",
      "750 segundos"
    ],
    "correctIndex": 0,
    "explanation": "1 minuto = 60 segundos. Multiplicamos: 15 × 60 = 900 segundos.",
    "skill": "Conversión temporal",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Medidas",
    "subtopic": "Minutos a segundos"
  },
  {
    "id": "mat-bas-72",
    "sectionId": 1,
    "number": 72,
    "text": "Si una película comienza a las 16:45 y dura 1 hora y 35 minutos, ¿a qué hora termina?",
    "options": [
      "18:20",
      "18:15",
      "18:30",
      "17:80"
    ],
    "correctIndex": 0,
    "explanation": "16:45 + 1 hora = 17:45. Sumamos 35 min: 17:45 + 15 min = 18:00, más 20 min = 18:20.",
    "skill": "Cálculo de tiempos y horarios",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Medidas",
    "subtopic": "Horas y minutos"
  },
  {
    "id": "mat-bas-73",
    "sectionId": 1,
    "number": 73,
    "text": "¿Cuántos miligramos hay en 4.5 gramos?",
    "options": [
      "4,500 miligramos",
      "450 miligramos",
      "45,000 miligramos",
      "0.0045 miligramos"
    ],
    "correctIndex": 0,
    "explanation": "1 gramo = 1,000 miligramos. Multiplicando: 4.5 × 1,000 = 4,500 mg.",
    "skill": "Submúltiplos del gramo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Medidas",
    "subtopic": "Masa"
  },
  {
    "id": "mat-bas-74",
    "sectionId": 1,
    "number": 74,
    "text": "Una caja contiene 24 botellas de 500 ml cada una. ¿Cuántos litros de líquido hay en total?",
    "options": [
      "12 litros",
      "24 litros",
      "10 litros",
      "15 litros"
    ],
    "correctIndex": 0,
    "explanation": "Capacidad total en ml = 24 × 500 ml = 12,000 ml. Como 1 L = 1,000 ml, son 12 litros.",
    "skill": "Capacidad y volumen",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Medidas",
    "subtopic": "Litros y mililitros"
  },
  {
    "id": "mat-bas-75",
    "sectionId": 1,
    "number": 75,
    "text": "¿Cuántos días hay en 5 semanas completas?",
    "options": [
      "35 días",
      "30 días",
      "40 días",
      "28 días"
    ],
    "correctIndex": 0,
    "explanation": "Cada semana tiene 7 días: 5 × 7 = 35 días.",
    "skill": "Unidades de calendario",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Medidas",
    "subtopic": "Semanas y días"
  },
  {
    "id": "mat-bas-76",
    "sectionId": 1,
    "number": 76,
    "text": "Calcula el volumen de una caja rectangular con aristas de 4 cm de largo, 3 cm de ancho y 5 cm de alto.",
    "options": [
      "60 cm³",
      "12 cm³",
      "48 cm³",
      "72 cm³"
    ],
    "correctIndex": 0,
    "explanation": "Volumen = largo × ancho × alto = 4 × 3 × 5 = 60 cm³.",
    "skill": "Volumen de prismas rectangulares",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Geometría del Espacio",
    "subtopic": "Prismas"
  },
  {
    "id": "mat-bas-77",
    "sectionId": 1,
    "number": 77,
    "text": "Si una cisterna tiene una capacidad de 1.5 metros cúbicos, ¿cuántos litros de agua puede almacenar?",
    "options": [
      "1,500 litros",
      "150 litros",
      "15,000 litros",
      "1,000 litros"
    ],
    "correctIndex": 0,
    "explanation": "1 metro cúbico (m³) equivale exactamente a 1,000 litros. Por tanto, 1.5 × 1,000 = 1,500 litros.",
    "skill": "Equivalencia volumen-capacidad",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Medidas",
    "subtopic": "Metros cúbicos a litros"
  },
  {
    "id": "mat-bas-78",
    "sectionId": 1,
    "number": 78,
    "text": "Un atleta corre a una velocidad constante de 5 metros por segundo. ¿Qué distancia recorre en 20 segundos?",
    "options": [
      "100 metros",
      "120 metros",
      "80 metros",
      "90 metros"
    ],
    "correctIndex": 0,
    "explanation": "Distancia = velocidad × tiempo = 5 m/s × 20 s = 100 metros.",
    "skill": "Relación cinemática elemental",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Medidas",
    "subtopic": "Distancia y tiempo"
  },
  {
    "id": "mat-bas-79",
    "sectionId": 1,
    "number": 79,
    "text": "¿Cuántos centímetros cuadrados hay en un decímetro cuadrado (dm²)?",
    "options": [
      "100 cm²",
      "10 cm²",
      "1,000 cm²",
      "1,0000 cm²"
    ],
    "correctIndex": 0,
    "explanation": "1 dm = 10 cm. Elevando al cuadrado: 1 dm² = (10 cm)² = 100 cm².",
    "skill": "Unidades de superficie",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Medidas",
    "subtopic": "Áreas métricas"
  },
  {
    "id": "mat-bas-80",
    "sectionId": 1,
    "number": 80,
    "text": "Si un paquete pesa 3/4 de kilogramo, ¿cuántos gramos pesa?",
    "options": [
      "750 gramos",
      "500 gramos",
      "250 gramos",
      "800 gramos"
    ],
    "correctIndex": 0,
    "explanation": "1 kg = 1,000 g. 3/4 de 1,000 g = (3 × 1,000) ÷ 4 = 3,000 ÷ 4 = 750 g.",
    "skill": "Fracción de unidad de masa",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Medidas",
    "subtopic": "Kilos a gramos"
  },
  {
    "id": "mat-bas-81",
    "sectionId": 1,
    "number": 81,
    "text": "Calcula la media aritmética del siguiente conjunto de datos: 10, 12, 14, 16, 18.",
    "options": [
      "14",
      "13",
      "15",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "Suma de datos = 10 + 12 + 14 + 16 + 18 = 70. Dividiendo entre el número de datos (5): 70 ÷ 5 = 14.",
    "skill": "Media aritmética",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Estadística",
    "subtopic": "Promedio simple"
  },
  {
    "id": "mat-bas-82",
    "sectionId": 1,
    "number": 82,
    "text": "¿Cuál es la mediana del siguiente conjunto ordenado de edades: 12, 13, 15, 17, 19, 21, 23?",
    "options": [
      "17",
      "15",
      "19",
      "16"
    ],
    "correctIndex": 0,
    "explanation": "Al estar ordenados y tener 7 datos (número impar), la mediana es el dato central, que ocupa la posición 4: 17.",
    "skill": "Mediana de datos impares",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Estadística",
    "subtopic": "Mediana"
  },
  {
    "id": "mat-bas-83",
    "sectionId": 1,
    "number": 83,
    "text": "En la serie de puntuaciones [5, 7, 8, 8, 9, 8, 10, 6], ¿cuál es la moda?",
    "options": [
      "8",
      "7",
      "9",
      "8.5"
    ],
    "correctIndex": 0,
    "explanation": "El valor 8 se repite 3 veces, con mayor frecuencia que cualquier otro puntaje.",
    "skill": "Moda estadística",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Estadística",
    "subtopic": "Frecuencia mayor"
  },
  {
    "id": "mat-bas-84",
    "sectionId": 1,
    "number": 84,
    "text": "¿Cuál es el rango del conjunto de números: [14, 28, 19, 35, 12, 22]?",
    "options": [
      "23",
      "35",
      "21",
      "25"
    ],
    "correctIndex": 0,
    "explanation": "El rango es la diferencia entre el valor máximo y el mínimo: 35 - 12 = 23.",
    "skill": "Medidas de dispersión básica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Estadística",
    "subtopic": "Rango"
  },
  {
    "id": "mat-bas-85",
    "sectionId": 1,
    "number": 85,
    "text": "En una urna hay 4 bolas rojas, 3 azules y 5 verdes. ¿Cuántas bolas hay en total?",
    "options": [
      "12 bolas",
      "10 bolas",
      "15 bolas",
      "11 bolas"
    ],
    "correctIndex": 0,
    "explanation": "4 + 3 + 5 = 12 bolas en total.",
    "skill": "Conteo de espacio muestral",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Probabilidad",
    "subtopic": "Espacio muestral"
  },
  {
    "id": "mat-bas-86",
    "sectionId": 1,
    "number": 86,
    "text": "Si se extrae al azar una bola de una urna con 3 bolas rojas y 7 bolas blancas, ¿cuál es la probabilidad de que sea roja?",
    "options": [
      "3/10 (30%)",
      "7/10",
      "3/7",
      "1/3"
    ],
    "correctIndex": 0,
    "explanation": "Casos favorables: 3. Total de casos: 3 + 7 = 10. Probabilidad = 3/10 = 30%.",
    "skill": "Probabilidad clásica simple",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Probabilidad",
    "subtopic": "Regla de Laplace"
  },
  {
    "id": "mat-bas-87",
    "sectionId": 1,
    "number": 87,
    "text": "Un gráfico circular muestra que el 50% de los votos fue para la Lista A. ¿Cuántos grados del círculo representa ese sector?",
    "options": [
      "180°",
      "90°",
      "120°",
      "360°"
    ],
    "correctIndex": 0,
    "explanation": "El círculo completo tiene 360°. El 50% de 360° es 360° × 0.50 = 180°.",
    "skill": "Interpretación de gráficos circulares",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Estadística",
    "subtopic": "Sectores circulares"
  },
  {
    "id": "mat-bas-88",
    "sectionId": 1,
    "number": 88,
    "text": "En un examen con 20 preguntas, un estudiante respondió correctamente 16. ¿Qué porcentaje de aciertos obtuvo?",
    "options": [
      "80%",
      "75%",
      "85%",
      "70%"
    ],
    "correctIndex": 0,
    "explanation": "(16 ÷ 20) × 100 = 0.8 × 100 = 80%.",
    "skill": "Rendimiento porcentual",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Estadística",
    "subtopic": "Porcentaje de acierto"
  },
  {
    "id": "mat-bas-89",
    "sectionId": 1,
    "number": 89,
    "text": "Si lanzas una moneda no trucada al aire, ¿cuál es la probabilidad de obtener cara?",
    "options": [
      "1/2 (50%)",
      "1/4",
      "1",
      "1/3"
    ],
    "correctIndex": 0,
    "explanation": "Hay 2 resultados posibles (cara o cruz) y 1 favorable: 1/2 = 50%.",
    "skill": "Probabilidad de eventos equiprobables",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Probabilidad",
    "subtopic": "Monedas"
  },
  {
    "id": "mat-bas-90",
    "sectionId": 1,
    "number": 90,
    "text": "La siguiente tabla de frecuencias muestra las mascotas de un grupo: Perro (14), Gato (10), Pájaro (6). ¿Cuántas mascotas se registraron en total?",
    "options": [
      "30 mascotas",
      "28 mascotas",
      "32 mascotas",
      "26 mascotas"
    ],
    "correctIndex": 0,
    "explanation": "Suma de frecuencias absolutas: 14 + 10 + 6 = 30 mascotas.",
    "skill": "Lectura de tablas de frecuencias",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Estadística",
    "subtopic": "Frecuencia total"
  },
  {
    "id": "mat-bas-91",
    "sectionId": 1,
    "number": 91,
    "text": "Si tienes 3 camisas y 4 pantalones diferentes, ¿cuántas combinaciones de ropa distintas puedes formar?",
    "options": [
      "12 combinaciones",
      "7 combinaciones",
      "14 combinaciones",
      "9 combinaciones"
    ],
    "correctIndex": 0,
    "explanation": "Por principio multiplicativo de conteo: 3 camisas × 4 pantalones = 12 combinaciones posibles.",
    "skill": "Principio multiplicativo básico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Probabilidad",
    "subtopic": "Combinaciones simples"
  },
  {
    "id": "mat-bas-92",
    "sectionId": 1,
    "number": 92,
    "text": "¿Qué número continúa la secuencia lógica: 3, 7, 11, 15, ...?",
    "options": [
      "19",
      "18",
      "21",
      "17"
    ],
    "correctIndex": 0,
    "explanation": "Es una progresión aritmética donde se suma 4 en cada paso: 15 + 4 = 19.",
    "skill": "Patrones numéricos lineales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Sucesiones"
  },
  {
    "id": "mat-bas-93",
    "sectionId": 1,
    "number": 93,
    "text": "¿Cuál es el valor que falta en la igualdad: 45 + ___ = 120?",
    "options": [
      "75",
      "65",
      "85",
      "70"
    ],
    "correctIndex": 0,
    "explanation": "Despejando: 120 - 45 = 75.",
    "skill": "Ecuaciones aditivas simples",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Álgebra",
    "subtopic": "Igualdades numéricas"
  },
  {
    "id": "mat-bas-94",
    "sectionId": 1,
    "number": 94,
    "text": "Si un libro tiene 240 páginas y lees 30 páginas por día, ¿en cuántos días terminarás de leerlo?",
    "options": [
      "8 días",
      "7 días",
      "9 días",
      "6 días"
    ],
    "correctIndex": 0,
    "explanation": "240 ÷ 30 = 8 días.",
    "skill": "Reparto temporal",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Problemas de lectura"
  },
  {
    "id": "mat-bas-95",
    "sectionId": 1,
    "number": 95,
    "text": "¿Cuál es la raíz cuadrada exacta de 144?",
    "options": [
      "12",
      "14",
      "11",
      "13"
    ],
    "correctIndex": 0,
    "explanation": "12 × 12 = 144, por lo que √144 = 12.",
    "skill": "Radicación exacta",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Raíces cuadradas"
  },
  {
    "id": "mat-bas-96",
    "sectionId": 1,
    "number": 96,
    "text": "Calcula el valor de la potencia: 2⁵.",
    "options": [
      "32",
      "10",
      "16",
      "64"
    ],
    "correctIndex": 0,
    "explanation": "2⁵ = 2 × 2 × 2 × 2 × 2 = 32.",
    "skill": "Potenciación básica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Potencias de dos"
  },
  {
    "id": "mat-bas-97",
    "sectionId": 1,
    "number": 97,
    "text": "En un juego de mesa, un jugador avanza 14 casillas, retrocede 6 y luego avanza 8. ¿En qué posición queda respecto a la salida?",
    "options": [
      "16 casillas adelante",
      "14 casillas adelante",
      "28 casillas adelante",
      "12 casillas adelante"
    ],
    "correctIndex": 0,
    "explanation": "14 - 6 + 8 = 8 + 8 = 16 casillas adelante.",
    "skill": "Operaciones aditivas con desplazamientos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Enteros positivos"
  },
  {
    "id": "mat-bas-98",
    "sectionId": 1,
    "number": 98,
    "text": "¿Cuánto es la tercera parte de 96?",
    "options": [
      "32",
      "28",
      "36",
      "34"
    ],
    "correctIndex": 0,
    "explanation": "96 ÷ 3 = 32.",
    "skill": "Fracción como división",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Tercio numérico"
  },
  {
    "id": "mat-bas-99",
    "sectionId": 1,
    "number": 99,
    "text": "Si 1 hora tiene 3,600 segundos, ¿cuántos segundos hay en 2 horas?",
    "options": [
      "7,200 segundos",
      "6,000 segundos",
      "7,000 segundos",
      "5,400 segundos"
    ],
    "correctIndex": 0,
    "explanation": "2 × 3,600 = 7,200 segundos.",
    "skill": "Equivalencia de segundos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Medidas",
    "subtopic": "Segundos en horas"
  },
  {
    "id": "mat-bas-100",
    "sectionId": 1,
    "number": 100,
    "text": "Una pista de carreras circular mide 400 metros por vuelta. Si un corredor completa 6 vueltas y media, ¿cuántos metros recorre?",
    "options": [
      "2,600 metros",
      "2,400 metros",
      "2,800 metros",
      "2,500 metros"
    ],
    "correctIndex": 0,
    "explanation": "6 vueltas = 6 × 400 = 2,400 m. Media vuelta = 200 m. Total = 2,400 + 200 = 2,600 metros.",
    "skill": "Problemas de distancia y vueltas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Aritmética",
    "subtopic": "Circuitos"
  }
];
