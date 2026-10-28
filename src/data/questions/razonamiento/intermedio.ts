import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE RAZONAMIENTO LÓGICO Y ABSTRACTO - NIVEL INTERMEDIO (100 Reactivos)
 */
export const RAZONAMIENTO_INTERMEDIO: Question[] = [
  {
    "id": "raz-int-1",
    "sectionId": 3,
    "number": 21,
    "text": "¿Qué número continúa la sucesión: 2, 3, 5, 8, 12, 17, ___?",
    "options": [
      "21",
      "22",
      "23",
      "24"
    ],
    "correctIndex": 2,
    "explanation": "Las diferencias entre términos sucesivos aumentan de uno en uno: +1, +2, +3, +4, +5, +6. El siguiente paso es 17 + 6 = 23.",
    "skill": "Sucesiones Polinomiales de Segundo Orden",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Diferencias Progresivas"
  },
  {
    "id": "raz-int-2",
    "sectionId": 3,
    "number": 22,
    "text": "Si se sabe que: \"Ningún reptil vuela\" y \"El cocodrilo es un reptil\", ¿cuál es la conclusión válida?",
    "options": [
      "Algunos reptiles vuelan",
      "El cocodrilo no vuela",
      "Todos los reptiles son cocodrilos",
      "El cocodrilo puede volar"
    ],
    "correctIndex": 1,
    "explanation": "Por el silogismo clásico en modo Cesare: Premisa universal negativa: Ningún reptil vuela. Premisa particular afirmativa: El cocodrilo es un reptil. Conclusión: El cocodrilo no vuela.",
    "skill": "Silogismos Cuantificacionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Categórica",
    "subtopic": "Deducciones Universales Negativas"
  },
  {
    "id": "raz-int-3",
    "sectionId": 3,
    "number": 23,
    "text": "¿Qué número completa la matriz 2x2: [Fila 1: 3, 9] [Fila 2: 4, ?] si la relación horizontal es el cuadrado del número?",
    "options": [
      "8",
      "12",
      "16",
      "20"
    ],
    "correctIndex": 2,
    "explanation": "En la fila 1: 3² = 9. En la fila 2 aplicando la misma función potencial: 4² = 16.",
    "skill": "Matrices Numéricas de Relación Exponencial",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Matrices de Figuras y Números"
  },
  {
    "id": "raz-int-4",
    "sectionId": 3,
    "number": 24,
    "text": "Un reloj se adelanta 3 minutos cada 2 horas. ¿Cuántos minutos se habrá adelantado al cabo de 24 horas continuas?",
    "options": [
      "18 minutos",
      "24 minutos",
      "36 minutos",
      "48 minutos"
    ],
    "correctIndex": 2,
    "explanation": "En 24 horas hay 24 / 2 = 12 intervalos de dos horas. Por tanto, el adelanto total es 12 × 3 minutos = 36 minutos.",
    "skill": "Razonamiento Proporcional Temporal",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Matemático",
    "subtopic": "Problemas de Relojes y Tasas"
  },
  {
    "id": "raz-int-5",
    "sectionId": 3,
    "number": 25,
    "text": "En un grupo de 30 estudiantes, 18 juegan fútbol y 15 juegan baloncesto. Si 5 juegan ambos deportes, ¿cuántos no juegan ninguno de los dos?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "Por el principio de inclusión-exclusión: Total que juega al menos uno = 18 + 15 - 5 = 28. Los que no juegan ninguno son 30 - 28 = 2 estudiantes.",
    "skill": "Diagramas de Venn y Conjuntos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Cardinalidad e Inclusión-Exclusión"
  },
  {
    "id": "raz-int-6",
    "sectionId": 3,
    "number": 26,
    "text": "¿Cuál es la vista superior de un cono apoyado sobre su base circular?",
    "options": [
      "Un triángulo isósceles",
      "Un círculo con un punto central en el vértice",
      "Un rectángulo",
      "Una elipse vacía"
    ],
    "correctIndex": 1,
    "explanation": "Desde arriba (planta), la base circular se proyecta como una circunferencia y la cúspide se proyecta como un punto central exacto.",
    "skill": "Proyecciones Ortogonales Diédricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Vistas de Cuerpos Geométricos"
  },
  {
    "id": "raz-int-7",
    "sectionId": 3,
    "number": 27,
    "text": "¿Qué letra sigue en la secuencia: Z, W, T, Q, ___?",
    "options": [
      "M",
      "N",
      "O",
      "P"
    ],
    "correctIndex": 1,
    "explanation": "Las letras retroceden 3 posiciones en el alfabeto estándar: Z (-3) = W, W (-3) = T, T (-3) = Q, Q (-3) = N.",
    "skill": "Series Alfabéticas Regresivas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Verbal",
    "subtopic": "Secuencias Alfabéticas"
  },
  {
    "id": "raz-int-8",
    "sectionId": 3,
    "number": 28,
    "text": "Si \"P implica Q\" es verdadera y sabemos que \"Q es falsa\", ¿qué podemos concluir sobre P?",
    "options": [
      "P es verdadera",
      "P es necesariamente falsa",
      "P puede ser verdadera o falsa",
      "No se puede saber"
    ],
    "correctIndex": 1,
    "explanation": "Por la regla del Modus Tollens: Si (P → Q) y ¬Q, entonces necesariamente ¬P (P es falsa). Si P fuera verdadera con Q falsa, la implicación sería falsa.",
    "skill": "Lógica Proposicional y Modus Tollens",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Simbólica",
    "subtopic": "Condicionales y Negación"
  },
  {
    "id": "raz-int-9",
    "sectionId": 3,
    "number": 29,
    "text": "En una mesa redonda de 4 asientos se sientan A, B, C y D. Si A está frente a C, y B está a la derecha de A, ¿quién está a la izquierda de A?",
    "options": [
      "B",
      "C",
      "D",
      "Nadie"
    ],
    "correctIndex": 2,
    "explanation": "Los 4 asientos circulares: Frente a A está C. A la derecha de A está B. En el asiento restante (a la izquierda de A) se sienta obligatoriamente D.",
    "skill": "Ordenamiento Circular",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Distribución Circular"
  },
  {
    "id": "raz-int-10",
    "sectionId": 3,
    "number": 30,
    "text": "¿Qué número continúa la serie de Fibonacci: 1, 1, 2, 3, 5, 8, 13, ___?",
    "options": [
      "18",
      "20",
      "21",
      "24"
    ],
    "correctIndex": 2,
    "explanation": "En la sucesión de Fibonacci, cada término es la suma de los dos precedentes: 8 + 13 = 21.",
    "skill": "Sucesión de Fibonacci",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Sucesiones Recurrentes"
  },
  {
    "id": "raz-int-11",
    "sectionId": 3,
    "number": 31,
    "text": "Si 6 obreros construyen una cerca en 12 horas, ¿cuántas horas tardarán 4 obreros trabajando al mismo ritmo?",
    "options": [
      "8 horas",
      "16 horas",
      "18 horas",
      "20 horas"
    ],
    "correctIndex": 2,
    "explanation": "Es una proporcionalidad inversa: a menos obreros, más tiempo. Constante de obra = 6 × 12 = 72 horas-hombre. Para 4 obreros: 72 / 4 = 18 horas.",
    "skill": "Regla de Tres Inversa",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Matemático",
    "subtopic": "Proporcionalidad Inversa"
  },
  {
    "id": "raz-int-12",
    "sectionId": 3,
    "number": 32,
    "text": "Identifica la figura que resulta de rotar una \"L\" mayúscula 180° en el plano.",
    "options": [
      "Una L invertida apuntando hacia arriba a la derecha",
      "Una L invertida apuntando hacia abajo a la izquierda (gamma reflejada)",
      "Una T",
      "Una V"
    ],
    "correctIndex": 1,
    "explanation": "La rotación de 180° invierte tanto el eje vertical como el horizontal: la barra vertical queda hacia abajo y la horizontal apunta hacia la izquierda.",
    "skill": "Rotación Bidimensional en el Plano",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Transformaciones Isométricas"
  },
  {
    "id": "raz-int-13",
    "sectionId": 3,
    "number": 33,
    "text": "¿Cuál es el valor que falta en la relación: 4 es a 64 como 5 es a ___ (relación cúbica)?",
    "options": [
      "100",
      "125",
      "150",
      "250"
    ],
    "correctIndex": 1,
    "explanation": "El segundo término es el cubo del primero: 4³ = 64. Aplicando la misma relación: 5³ = 125.",
    "skill": "Analogías de Potenciación Cúbica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Funciones Cúbicas"
  },
  {
    "id": "raz-int-14",
    "sectionId": 3,
    "number": 34,
    "text": "Tres amigos, Juan, Pedro y Mario, tienen profesiones distintas: abogado, médico e ingeniero. Juan no es médico ni ingeniero. Pedro no es médico. ¿Qué profesión tiene Mario?",
    "options": [
      "Abogado",
      "Médico",
      "Ingeniero",
      "Profesor"
    ],
    "correctIndex": 1,
    "explanation": "Juan no es médico ni ingeniero, por lo tanto Juan es el abogado. Pedro no es médico, así que debe ser el ingeniero. Por eliminación, Mario es el médico.",
    "skill": "Tablas de Doble Entrada y Descarte Lógico",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Deductiva",
    "subtopic": "Acertijos de Correspondencia Unívoca"
  },
  {
    "id": "raz-int-15",
    "sectionId": 3,
    "number": 35,
    "text": "¿Cuántos triángulos hay en total en una figura compuesta por un triángulo grande dividido verticalmente en dos por su altura mediana?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 1,
    "explanation": "Hay 2 triángulos pequeños individuales (izquierdo y derecho) y 1 triángulo grande compuesto por la unión de ambos. Total = 3 triángulos.",
    "skill": "Conteo de Figuras Geométricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Conteo Combinatorio de Formas"
  },
  {
    "id": "raz-int-16",
    "sectionId": 3,
    "number": 36,
    "text": "Si la suma de tres números enteros consecutivos es 45, ¿cuál es el número intermedio?",
    "options": [
      "14",
      "15",
      "16",
      "17"
    ],
    "correctIndex": 1,
    "explanation": "Sean los números (x - 1), x, (x + 1). Su suma es 3x = 45, de donde x = 15. Los tres números son 14, 15 y 16.",
    "skill": "Ecuaciones y Razonamiento Algebraico",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Enteros Consecutivos"
  },
  {
    "id": "raz-int-17",
    "sectionId": 3,
    "number": 37,
    "text": "¿Qué patrón sigue la serie alternada: 3, 10, 5, 12, 7, 14, ___?",
    "options": [
      "8",
      "9",
      "11",
      "16"
    ],
    "correctIndex": 1,
    "explanation": "Son dos series entrelazadas: los términos impares (1º, 3º, 5º, 7º) van sumando +2: 3, 5, 7, 9. Los pares suman +2: 10, 12, 14. El término 7º corresponde a 7 + 2 = 9.",
    "skill": "Series Entrelazadas o Alternadas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Sucesiones Duales"
  },
  {
    "id": "raz-int-18",
    "sectionId": 3,
    "number": 38,
    "text": "Si todos los metales conducen la electricidad y el mercurio es un metal, ¿qué afirmación se deduce con certeza absoluta?",
    "options": [
      "El mercurio conduce la electricidad",
      "El mercurio es sólido a temperatura ambiente",
      "Todos los conductores son metales",
      "Ninguna de las anteriores"
    ],
    "correctIndex": 0,
    "explanation": "Deducción categórica universal: Todo A es B; C es A; por tanto C es B. El mercurio conduce la electricidad.",
    "skill": "Deducción Categorial Silogística",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Formal",
    "subtopic": "Silogismos Válidos"
  },
  {
    "id": "raz-int-19",
    "sectionId": 3,
    "number": 39,
    "text": "¿Cuál es el doble del tercio de 36?",
    "options": [
      "12",
      "18",
      "24",
      "30"
    ],
    "correctIndex": 2,
    "explanation": "El tercio de 36 es 36 / 3 = 12. El doble de 12 es 12 × 2 = 24.",
    "skill": "Operaciones Fraccionarias Encadenadas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Fracciones de Cantidades"
  },
  {
    "id": "raz-int-20",
    "sectionId": 3,
    "number": 40,
    "text": "Si una figura tiene simetría axial respecto a un espejo vertical, la mano derecha de una persona se refleja como:",
    "options": [
      "Una mano derecha idéntica",
      "Una mano con apariencia de mano izquierda (quiralidad invertida)",
      "Un pie",
      "Un brazo superior"
    ],
    "correctIndex": 1,
    "explanation": "La reflexión especular respecto a un plano invierte la quiralidad (orientación espacial), transformando una mano diestra en una siniestra aparente.",
    "skill": "Simetría Axial y Quiralidad",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Reflexión Especular"
  },
  {
    "id": "raz-int-21",
    "sectionId": 3,
    "number": 21,
    "text": "¿Qué número continúa la sucesión cuadrática: 2, 6, 12, 20, 30, 42, ___?",
    "options": [
      "56",
      "54",
      "60",
      "48"
    ],
    "correctIndex": 0,
    "explanation": "La forma general es n(n + 1) o diferencias sucesivas: +4, +6, +8, +10, +12, +14. Luego 42 + 14 = 56 (7 × 8).",
    "skill": "Sucesiones cuadráticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Diferencias de segundo orden"
  },
  {
    "id": "raz-int-22",
    "sectionId": 3,
    "number": 22,
    "text": "Calcula el siguiente término de la serie: 0, 7, 26, 63, 124, ___.",
    "options": [
      "215",
      "216",
      "210",
      "196"
    ],
    "correctIndex": 0,
    "explanation": "La regla de formación es n³ - 1 para n = 1, 2, 3, 4, 5, 6: 6³ - 1 = 216 - 1 = 215.",
    "skill": "Series polinómicas cúbicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Potencias y traslación"
  },
  {
    "id": "raz-int-23",
    "sectionId": 3,
    "number": 23,
    "text": "Se define el operador matemático: a # b = 2a + 3b - 1. Calcula el valor de (4 # 3).",
    "options": [
      "16",
      "17",
      "15",
      "18"
    ],
    "correctIndex": 0,
    "explanation": "Sustituimos los valores en la definición: 4 # 3 = 2(4) + 3(3) - 1 = 8 + 9 - 1 = 16.",
    "skill": "Operadores matemáticos arbitrarios",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Matemática",
    "subtopic": "Definición de operadores"
  },
  {
    "id": "raz-int-24",
    "sectionId": 3,
    "number": 24,
    "text": "Si m * n = m² - n², calcula el resultado de (5 * 3) * 10.",
    "options": [
      "156",
      "144",
      "160",
      "120"
    ],
    "correctIndex": 0,
    "explanation": "Primero: 5 * 3 = 5² - 3² = 25 - 9 = 16. Luego: 16 * 10 = 16² - 10² = 256 - 100 = 156.",
    "skill": "Operadores anidados",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Matemática",
    "subtopic": "Operadores binarios"
  },
  {
    "id": "raz-int-25",
    "sectionId": 3,
    "number": 25,
    "text": "¿Qué término continúa la sucesión: 3, 5, 9, 17, 33, ___?",
    "options": [
      "65",
      "64",
      "67",
      "66"
    ],
    "correctIndex": 0,
    "explanation": "La diferencia se duplica en cada paso: +2, +4, +8, +16, +32. Por tanto, 33 + 32 = 65 (o 2ⁿ + 1).",
    "skill": "Sucesiones exponenciales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Progresiones"
  },
  {
    "id": "raz-int-26",
    "sectionId": 3,
    "number": 26,
    "text": "Encuentra el número que falta en la matriz numérica 3x3:\n[4  7  11]\n[3  8  11]\n[5  9   ? ]",
    "options": [
      "14",
      "13",
      "15",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "En cada fila, la suma del primer y segundo elemento da el tercero: 4 + 7 = 11; 3 + 8 = 11; 5 + 9 = 14.",
    "skill": "Matrices numéricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Patrones matriciales"
  },
  {
    "id": "raz-int-27",
    "sectionId": 3,
    "number": 27,
    "text": "Determina el valor de x en la distribución gráfica triangular donde el número en el centro depende de los tres vértices: T1=(2,3,4 -> 24), T2=(3,4,5 -> 60), T3=(4,2,6 -> x).",
    "options": [
      "48",
      "36",
      "52",
      "64"
    ],
    "correctIndex": 0,
    "explanation": "El centro es el producto de los tres vértices: 2×3×4 = 24; 3×4×5 = 60; luego x = 4×2×6 = 48.",
    "skill": "Distribuciones en polígonos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Operaciones combinadas"
  },
  {
    "id": "raz-int-28",
    "sectionId": 3,
    "number": 28,
    "text": "¿Qué número completa la serie: 1, 2, 6, 24, 120, 720, ___?",
    "options": [
      "5040",
      "4320",
      "5760",
      "2880"
    ],
    "correctIndex": 0,
    "explanation": "Representa la sucesión factorial: 1!, 2!, 3!, 4!, 5!, 6!, 7! = 720 × 7 = 5040.",
    "skill": "Sucesión factorial",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Factoriales"
  },
  {
    "id": "raz-int-29",
    "sectionId": 3,
    "number": 29,
    "text": "En una sucesión de figuras, el número de puntos es 1, 3, 6, 10, 15, 21. ¿Cuántos puntos tendrá la octava figura?",
    "options": [
      "36",
      "28",
      "45",
      "32"
    ],
    "correctIndex": 0,
    "explanation": "Son números triangulares T_n = n(n + 1)/2. Para n = 8: T_8 = 8(9)/2 = 36.",
    "skill": "Números figurados",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Números triangulares"
  },
  {
    "id": "raz-int-30",
    "sectionId": 3,
    "number": 30,
    "text": "¿Qué número continúa la sucesión alternada: 100, 1, 90, 4, 80, 9, 70, 16, 60, ___?",
    "options": [
      "25",
      "20",
      "36",
      "49"
    ],
    "correctIndex": 0,
    "explanation": "En posiciones pares tenemos los cuadrados perfectos: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25.",
    "skill": "Series entrelazadas complejas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Series dobles"
  },
  {
    "id": "raz-int-31",
    "sectionId": 3,
    "number": 31,
    "text": "Si a ⊕ b = (a + b) / (a - b) con a ≠ b, determina el valor de 7 ⊕ 3.",
    "options": [
      "2.5",
      "2",
      "3",
      "3.5"
    ],
    "correctIndex": 0,
    "explanation": "Aplicando la fórmula: (7 + 3) / (7 - 3) = 10 / 4 = 2.5.",
    "skill": "Operadores con fracciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Matemática",
    "subtopic": "Álgebra de operadores"
  },
  {
    "id": "raz-int-32",
    "sectionId": 3,
    "number": 32,
    "text": "Encuentra el valor de 'k' en la serie: 2, 3, 5, 7, 11, 13, 17, 19, k.",
    "options": [
      "23",
      "21",
      "25",
      "27"
    ],
    "correctIndex": 0,
    "explanation": "Es la secuencia de números primos consecutivos; el siguiente número primo tras 19 es 23.",
    "skill": "Números primos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Aritmética de primos"
  },
  {
    "id": "raz-int-33",
    "sectionId": 3,
    "number": 33,
    "text": "¿Qué número completa la analogía: 324 es a 18 como 576 es a ___?",
    "options": [
      "24",
      "26",
      "22",
      "28"
    ],
    "correctIndex": 0,
    "explanation": "La relación es la raíz cuadrada: √324 = 18, por lo tanto √576 = 24.",
    "skill": "Raíces exactas en analogías",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Radicación"
  },
  {
    "id": "raz-int-34",
    "sectionId": 3,
    "number": 34,
    "text": "En la progresión: 1/3, 1, 3, 9, 27, ___, ¿cuál es el siguiente término?",
    "options": [
      "81",
      "54",
      "72",
      "90"
    ],
    "correctIndex": 0,
    "explanation": "Progresión geométrica de razón r = 3: 27 × 3 = 81.",
    "skill": "Progresiones geométricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Razón constante"
  },
  {
    "id": "raz-int-35",
    "sectionId": 3,
    "number": 35,
    "text": "Si en un sistema numérico simbólico: Δ = 3, ◻ = 4, ⬟ = 5, ¿cuál es el valor de (◻ × ⬟) - Δ²?",
    "options": [
      "11",
      "12",
      "14",
      "9"
    ],
    "correctIndex": 0,
    "explanation": "Sustituyendo: (4 × 5) - 3² = 20 - 9 = 11.",
    "skill": "Aritmética con figuras",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Simbólico",
    "subtopic": "Ecuaciones simbólicas"
  },
  {
    "id": "raz-int-36",
    "sectionId": 3,
    "number": 36,
    "text": "En una matriz gráfica de 3x3, las figuras de la primera fila rotan 45° a la derecha en cada paso; las de la segunda fila rotan 90°. Si la tercera fila rota 135° en cada paso, ¿cuánto habrá rotado la tercera figura respecto a la primera?",
    "options": [
      "270° en sentido horario",
      "180° en sentido horario",
      "360° en sentido horario",
      "90° en sentido horario"
    ],
    "correctIndex": 0,
    "explanation": "Desde la columna 1 a la 2 rota 135°, y de la 2 a la 3 rota otros 135°: 135° + 135° = 270° en sentido horario.",
    "skill": "Rotaciones en matrices",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Transformaciones geométricas"
  },
  {
    "id": "raz-int-37",
    "sectionId": 3,
    "number": 37,
    "text": "Una figura compuesta por un círculo con una cruz interior se superpone con un círculo con un punto central. Si la regla es la unión de trazos (operador OR gráfico), ¿cuál es el resultado?",
    "options": [
      "Un círculo que contiene tanto la cruz como el punto central",
      "Solo el punto central",
      "Solo la cruz",
      "Un círculo vacío"
    ],
    "correctIndex": 0,
    "explanation": "La operación de unión gráfica conserva la totalidad de los elementos presentes en cualquiera de las figuras originales.",
    "skill": "Álgebra booleana gráfica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Superposición de figuras"
  },
  {
    "id": "raz-int-38",
    "sectionId": 3,
    "number": 38,
    "text": "Si dos figuras se combinan mediante una diferencia simétrica (operador XOR gráfico), los trazos que coinciden exactamente en ambas figuras:",
    "options": [
      "Desaparecen o se eliminan en la figura resultante",
      "Se duplican en grosor",
      "Cambian de color a blanco",
      "Permanecen inalterados"
    ],
    "correctIndex": 0,
    "explanation": "La regla XOR gráfica elimina los trazos o regiones comunes y conserva únicamente los que están presentes en una sola de las dos.",
    "skill": "Operadores lógicos gráficos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Operador XOR"
  },
  {
    "id": "raz-int-39",
    "sectionId": 3,
    "number": 39,
    "text": "¿Cuántos cuadrados en total (de todos los tamaños) hay en una cuadrícula de 3x3 casillas?",
    "options": [
      "14",
      "9",
      "10",
      "13"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula para cuadrícula n×n: 1² + 2² + 3² = 1 + 4 + 9 = 14 cuadrados.",
    "skill": "Conteo sistemático de cuadriláteros",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Cuadrículas"
  },
  {
    "id": "raz-int-40",
    "sectionId": 3,
    "number": 40,
    "text": "¿Cuántos cubos de 1 cm de arista se necesitan para construir un cubo compacto de 4 cm de arista?",
    "options": [
      "64",
      "16",
      "32",
      "48"
    ],
    "correctIndex": 0,
    "explanation": "Volumen = arista³ = 4³ = 64 cubos de 1 cm³.",
    "skill": "Volumen de cubos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Cuerpos poliédricos"
  },
  {
    "id": "raz-int-41",
    "sectionId": 3,
    "number": 41,
    "text": "¿Cuántas aristas tiene en total un prisma recto cuya base es un pentágono regular?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "correctIndex": 0,
    "explanation": "Un prisma recto con base de n lados posee 3n aristas (n en la base inferior, n en la superior y n laterales). Para un pentágono (n = 5): 3 × 5 = 15 aristas.",
    "skill": "Elementos geométricos de poliedros",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Geometría de poliedros y prismas"
  },
  {
    "id": "raz-int-42",
    "sectionId": 3,
    "number": 42,
    "text": "En el mismo cubo de 3 cm pintado de rojo cortado en 27 cubitos, ¿cuántos cubitos tendrán exactamente 3 caras pintadas?",
    "options": [
      "8",
      "12",
      "6",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Los cubitos con 3 caras pintadas corresponden exclusivamente a los 8 vértices del cubo.",
    "skill": "Vértices de poliedros pintados",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Geometría del cubo"
  },
  {
    "id": "raz-int-43",
    "sectionId": 3,
    "number": 43,
    "text": "¿Y cuántos cubitos del cubo de 3 cm cortado en 27 tendrán ninguna cara pintada (0 caras rojas)?",
    "options": [
      "1",
      "2",
      "0",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "Los cubitos sin pintar forman el núcleo interior: (n - 2)³ = (3 - 2)³ = 1³ = 1 cubito.",
    "skill": "Núcleo interior del cubo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Cubo interior"
  },
  {
    "id": "raz-int-44",
    "sectionId": 3,
    "number": 44,
    "text": "Si desplegamos un prisma hexagonal regular recto, ¿cuántos rectángulos forman sus caras laterales?",
    "options": [
      "6 rectángulos",
      "8 rectángulos",
      "5 rectángulos",
      "12 rectángulos"
    ],
    "correctIndex": 0,
    "explanation": "Un prisma con base de n lados tiene exactamente n caras laterales rectangulares; para un hexágono son 6.",
    "skill": "Desarrollo de prismas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Prismas"
  },
  {
    "id": "raz-int-45",
    "sectionId": 3,
    "number": 45,
    "text": "¿Qué vista (alzado, planta o perfil) de un cono circular recto apoyado sobre su base se observa como un triángulo isósceles?",
    "options": [
      "Vista frontal o alzado",
      "Vista superior o planta",
      "Corte horizontal",
      "Corte oblicuo"
    ],
    "correctIndex": 0,
    "explanation": "La proyección ortogonal frontal de un cono recto proyecta su silueta triangular sobre el plano vertical.",
    "skill": "Proyecciones ortogonales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Vistas de conos"
  },
  {
    "id": "raz-int-46",
    "sectionId": 3,
    "number": 46,
    "text": "Una figura tiene forma de 'L'. Si se refleja respecto al eje horizontal y luego se rota 90° en sentido antihorario, el resultado es equivalente a:",
    "options": [
      "Una reflexión respecto a la diagonal principal",
      "La misma figura original",
      "Una traslación simple",
      "Una inversión central pura"
    ],
    "correctIndex": 0,
    "explanation": "La composición de una reflexión axial con una rotación de 90° equivale geométricamente a una reflexión respecto a un eje inclinado 45°.",
    "skill": "Composición de isometrías",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Transformaciones en el plano"
  },
  {
    "id": "raz-int-47",
    "sectionId": 3,
    "number": 47,
    "text": "¿Cuál es el número máximo de regiones en que 3 rectas concurrentes en el plano pueden dividirlo?",
    "options": [
      "6 regiones",
      "7 regiones",
      "8 regiones",
      "4 regiones"
    ],
    "correctIndex": 0,
    "explanation": "Si las 3 rectas pasan por un mismo punto concurrente central, dividen el plano en 2 × 3 = 6 sectores.",
    "skill": "Partición del plano",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Líneas concurrentes"
  },
  {
    "id": "raz-int-48",
    "sectionId": 3,
    "number": 48,
    "text": "Si las 3 rectas no son concurrentes ni paralelas entre sí, ¿en cuántas regiones dividen el plano como máximo?",
    "options": [
      "7 regiones",
      "6 regiones",
      "8 regiones",
      "9 regiones"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula de división máxima por n rectas: L(n) = n(n + 1)/2 + 1. Para n = 3: 3(4)/2 + 1 = 6 + 1 = 7 regiones.",
    "skill": "Partición máxima del plano",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Intersección de rectas"
  },
  {
    "id": "raz-int-49",
    "sectionId": 3,
    "number": 49,
    "text": "Al rotar un rectángulo de lados 4 cm y 6 cm alrededor de su lado de 6 cm, ¿qué cuerpo geométrico se genera?",
    "options": [
      "Un cilindro de radio 4 cm y altura 6 cm",
      "Un cono de radio 6 cm",
      "Una esfera de diámetro 10 cm",
      "Un prisma rectangular"
    ],
    "correctIndex": 0,
    "explanation": "La revolución de un rectángulo sobre uno de sus lados genera un cilindro circular recto cuyo radio es el otro lado.",
    "skill": "Sólidos de revolución",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Espacial",
    "subtopic": "Revolución de figuras"
  },
  {
    "id": "raz-int-50",
    "sectionId": 3,
    "number": 50,
    "text": "¿Cuántas diagonales totales tiene un polígono regular de 8 lados (octágono)?",
    "options": [
      "20",
      "24",
      "16",
      "28"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula de diagonales totales: D = n(n - 3) / 2. Para n = 8: D = 8(5) / 2 = 20 diagonales.",
    "skill": "Diagonales de polígonos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Matemático",
    "subtopic": "Geometría combinatoria"
  },
  {
    "id": "raz-int-51",
    "sectionId": 3,
    "number": 51,
    "text": "Carlos, Diego y Esteban tienen cada uno una mascota distinta: perro, gato y loro. Se sabe que al dueño del perro no le gustan las aves y Esteban es amigo del dueño del gato. Si Diego tiene el loro, ¿qué mascota tiene Carlos?",
    "options": [
      "Gato",
      "Perro",
      "Loro",
      "Pez"
    ],
    "correctIndex": 0,
    "explanation": "Diego tiene el loro. Quedan perro y gato. Si Esteban es amigo del dueño del gato, Esteban no tiene el gato; por tanto Esteban tiene el perro y Carlos tiene el gato.",
    "skill": "Tablas de asignación lógica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Deductiva",
    "subtopic": "Asignación unívoca"
  },
  {
    "id": "raz-int-52",
    "sectionId": 3,
    "number": 52,
    "text": "La edad de María es el triple de la de Sofía. Si dentro de 10 años la edad de María será el doble de la de Sofía, ¿cuántos años tiene María actualmente?",
    "options": [
      "30 años",
      "10 años",
      "20 años",
      "40 años"
    ],
    "correctIndex": 0,
    "explanation": "Sean M = 3S. En 10 años: M + 10 = 2(S + 10) ⇒ 3S + 10 = 2S + 20 ⇒ S = 10. Por tanto María tiene 3 × 10 = 30 años.",
    "skill": "Problemas de edades",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Ecuaciones lineales"
  },
  {
    "id": "raz-int-53",
    "sectionId": 3,
    "number": 53,
    "text": "Si un reloj se adelanta 3 minutos cada 2 horas, ¿cuánto se habrá adelantado al cabo de 24 horas?",
    "options": [
      "36 minutos",
      "30 minutos",
      "48 minutos",
      "24 minutos"
    ],
    "correctIndex": 0,
    "explanation": "En 24 horas hay 24 / 2 = 12 intervalos de dos horas. Adelanto total = 12 × 3 min = 36 minutos.",
    "skill": "Problemas de cronometría",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Matemático",
    "subtopic": "Adelantos de relojes"
  },
  {
    "id": "raz-int-54",
    "sectionId": 3,
    "number": 54,
    "text": "A las 4:00, las campanadas de una iglesia tardan 6 segundos en dar 4 campanadas. ¿Cuánto tardarán en dar 8 campanadas?",
    "options": [
      "14 segundos",
      "12 segundos",
      "16 segundos",
      "10 segundos"
    ],
    "correctIndex": 0,
    "explanation": "Entre 4 campanadas hay 3 intervalos: cada intervalo dura 6 / 3 = 2 segundos. Para 8 campanadas hay 7 intervalos: 7 × 2 = 14 segundos.",
    "skill": "Problemas de campanadas e intervalos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Lógico",
    "subtopic": "Intervalos temporales"
  },
  {
    "id": "raz-int-55",
    "sectionId": 3,
    "number": 55,
    "text": "En una granja hay conejos y gallinas. Si se cuentan 35 cabezas y 94 patas, ¿cuántos conejos hay?",
    "options": [
      "12 conejos",
      "23 conejos",
      "14 conejos",
      "10 conejos"
    ],
    "correctIndex": 0,
    "explanation": "Método del rombo o sistema: C + G = 35 y 4C + 2G = 94. Si todos fueran gallinas habría 70 patas. Exceso = 94 - 70 = 24 patas. Cada conejo aporta 2 patas extra: 24 / 2 = 12 conejos.",
    "skill": "Método de falsa suposición (rombo)",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Matemático",
    "subtopic": "Conteo de patas y cabezas"
  },
  {
    "id": "raz-int-56",
    "sectionId": 3,
    "number": 56,
    "text": "Cuatro amigos rinden un examen. Andrés obtuvo más puntos que Bernardo; Claudio obtuvo menos puntos que Daniel; y Bernardo obtuvo más que Daniel. ¿Quién obtuvo el menor puntaje?",
    "options": [
      "Claudio",
      "Bernardo",
      "Daniel",
      "Andrés"
    ],
    "correctIndex": 0,
    "explanation": "Ordenando los puntajes: Andrés > Bernardo > Daniel > Claudio. El menor es Claudio.",
    "skill": "Ordenamiento de posición",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Deductiva",
    "subtopic": "Ordenamiento lineal"
  },
  {
    "id": "raz-int-57",
    "sectionId": 3,
    "number": 57,
    "text": "Seis personas (P, Q, R, S, T, U) se sientan simétricamente alrededor de una mesa circular con 6 asientos. P está frente a S; Q está a la izquierda de P; R está frente a Q. ¿Quién está frente a T si U está a la derecha de P?",
    "options": [
      "U",
      "S",
      "Q",
      "R"
    ],
    "correctIndex": 0,
    "explanation": "La distribución opuesta es: P frente a S, Q frente a R. Por tanto, los dos asientos restantes opuestos entre sí deben estar ocupados por T y U.",
    "skill": "Distribución circular simétrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Deductiva",
    "subtopic": "Mesa circular"
  },
  {
    "id": "raz-int-58",
    "sectionId": 3,
    "number": 58,
    "text": "Una botella con su tapa cuesta $1.10 en total. La botella cuesta $1.00 más que la tapa. ¿Cuánto cuesta la tapa?",
    "options": [
      "$0.05",
      "$0.10",
      "$0.15",
      "$0.01"
    ],
    "correctIndex": 0,
    "explanation": "Sean B + T = 1.10 y B = T + 1.00. Sustituyendo: (T + 1.00) + T = 1.10 ⇒ 2T = 0.10 ⇒ T = $0.05.",
    "skill": "Problema clásico cognitivo de Kahneman",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Sistemas simples"
  },
  {
    "id": "raz-int-59",
    "sectionId": 3,
    "number": 59,
    "text": "En una caja hay 10 calcetines negros y 10 blancos idénticos en forma. ¿Cuántos calcetines se deben extraer a ciegas como mínimo para garantizar tener un par del mismo color?",
    "options": [
      "3 calcetines",
      "2 calcetines",
      "11 calcetines",
      "4 calcetines"
    ],
    "correctIndex": 0,
    "explanation": "Por el principio del palomar (casillas de Dirichlet): habiendo solo 2 colores posibles, al sacar 2 + 1 = 3 calcetines se garantiza al menos un par repetido.",
    "skill": "Principio del palomar (Dirichlet)",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Matemática",
    "subtopic": "Certezas y mínimos"
  },
  {
    "id": "raz-int-60",
    "sectionId": 3,
    "number": 60,
    "text": "¿Cuántas bolas se deben extraer al azar de una urna que contiene 5 rojas, 4 verdes y 6 azules para tener la certeza absoluta de haber sacado al menos una bola de cada color?",
    "options": [
      "12 bolas",
      "15 bolas",
      "11 bolas",
      "14 bolas"
    ],
    "correctIndex": 0,
    "explanation": "En el peor de los casos sacamos todas las de los dos grupos más numerosos primero: 6 azules + 5 rojas = 11 bolas. La siguiente bola (12ª) será obligatoriamente verde.",
    "skill": "Problemas de certezas (peor caso)",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Matemático",
    "subtopic": "Análisis del peor caso"
  },
  {
    "id": "raz-int-61",
    "sectionId": 3,
    "number": 61,
    "text": "Una mezcla de 40 litros de agua y alcohol contiene 25% de alcohol. ¿Cuántos litros de agua se deben añadir para que el alcohol represente el 20% de la mezcla?",
    "options": [
      "10 litros",
      "8 litros",
      "5 litros",
      "12 litros"
    ],
    "correctIndex": 0,
    "explanation": "Alcohol puro = 25% de 40 L = 10 L. Para que 10 L sean el 20% del total: Total = 10 / 0.20 = 50 L. Agua a agregar = 50 - 40 = 10 L.",
    "skill": "Problemas de mezclas y porcentajes",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Concentraciones"
  },
  {
    "id": "raz-int-62",
    "sectionId": 3,
    "number": 62,
    "text": "Si 12 obreros construyen un muro en 15 días trabajando 8 horas diarias, ¿cuántos días tardarán 10 obreros trabajando 6 horas diarias en construir un muro idéntico?",
    "options": [
      "24 días",
      "20 días",
      "18 días",
      "25 días"
    ],
    "correctIndex": 0,
    "explanation": "Regla de tres compuesta: Días = 15 × (12/10) × (8/6) = 15 × 1.2 × 1.333... = 24 días.",
    "skill": "Regla de tres compuesta",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Proporcionalidad inversa"
  },
  {
    "id": "raz-int-63",
    "sectionId": 3,
    "number": 63,
    "text": "Un comerciante aumenta el precio de un artículo en un 20% y luego le aplica un descuento del 20%. El precio final respecto al inicial es:",
    "options": [
      "4% menor que el inicial",
      "Exactamente igual al inicial",
      "2% menor que el inicial",
      "4% mayor que el inicial"
    ],
    "correctIndex": 0,
    "explanation": "Factor multiplicador: (1 + 0.20) × (1 - 0.20) = 1.20 × 0.80 = 0.96. Representa el 96% del valor original, es decir, una reducción neta del 4%.",
    "skill": "Variaciones porcentuales sucesivas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Porcentajes sucesivos"
  },
  {
    "id": "raz-int-64",
    "sectionId": 3,
    "number": 64,
    "text": "Si el precio de la gasolina sube un 25%, ¿en qué porcentaje debe reducir un conductor su consumo para no gastar más dinero?",
    "options": [
      "20%",
      "25%",
      "15%",
      "16.6%"
    ],
    "correctIndex": 0,
    "explanation": "Gasto = Precio × Consumo. Si P' = 1.25 P, entonces C' = 1 / 1.25 = 0.80 C. Debe reducir el consumo en 1 - 0.80 = 20%.",
    "skill": "Compensación porcentual",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Proporcionalidad inversa"
  },
  {
    "id": "raz-int-65",
    "sectionId": 3,
    "number": 65,
    "text": "La suma de tres números enteros impares consecutivos es igual a 81. ¿Cuál es el número mayor?",
    "options": [
      "29",
      "27",
      "31",
      "25"
    ],
    "correctIndex": 0,
    "explanation": "Los números son (x - 2), x, (x + 2). Suma = 3x = 81 ⇒ x = 27. El mayor es 27 + 2 = 29.",
    "skill": "Ecuaciones de enteros consecutivos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Álgebra básica"
  },
  {
    "id": "raz-int-66",
    "sectionId": 3,
    "number": 66,
    "text": "¿Cuál es la tabla de verdad de la proposición condicional (p → q)?",
    "options": [
      "Falsa únicamente cuando p es verdadera y q es falsa",
      "Verdadera únicamente cuando p y q son verdaderas",
      "Falsa siempre que q sea falsa",
      "Verdadera solo si p es falsa"
    ],
    "correctIndex": 0,
    "explanation": "La implicación material p → q solo se invalida cuando una premisa verdadera conduce a una conclusión falsa (V → F es F).",
    "skill": "Tabla de verdad del condicional",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Formal",
    "subtopic": "Conectores lógicos"
  },
  {
    "id": "raz-int-67",
    "sectionId": 3,
    "number": 67,
    "text": "La proposición bicondicional (p ↔ q) es verdadera si y solo si:",
    "options": [
      "p y q tienen exactamente el mismo valor de verdad (ambas V o ambas F)",
      "p es verdadera y q es falsa",
      "Al menos una de las dos proposiciones es verdadera",
      "p es falsa"
    ],
    "correctIndex": 0,
    "explanation": "El bicondicional o equivalencia lógica expresa que dos enunciados son verdaderos en las mismas condiciones lógicas.",
    "skill": "Bicondicional lógico",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Formal",
    "subtopic": "Equivalencias"
  },
  {
    "id": "raz-int-68",
    "sectionId": 3,
    "number": 68,
    "text": "Según las Leyes de De Morgan, la negación de la conjunción ¬(p ∧ q) es lógicamente equivalente a:",
    "options": [
      "¬p ∨ ¬q",
      "¬p ∧ ¬q",
      "p ∨ q",
      "¬(p ∨ q)"
    ],
    "correctIndex": 0,
    "explanation": "La negación de 'p y q' afirma que al menos uno de los dos enunciados es falso: 'no p o no q'.",
    "skill": "Leyes de De Morgan",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Formal",
    "subtopic": "Equivalencias lógicas"
  },
  {
    "id": "raz-int-69",
    "sectionId": 3,
    "number": 69,
    "text": "La proposición contrapositiva de 'Si un animal es mamífero, entonces tiene sangre caliente' es:",
    "options": [
      "Si un animal no tiene sangre caliente, entonces no es mamífero",
      "Si un animal tiene sangre caliente, entonces es mamífero",
      "Si un animal no es mamífero, entonces no tiene sangre caliente",
      "Todos los mamíferos tienen plumas"
    ],
    "correctIndex": 0,
    "explanation": "El contrarrecíproco de (p → q) es (¬q → ¬p), y preserva idéntico valor de verdad lógico que la condicional original.",
    "skill": "Contrarrecíproco (contrapositiva)",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Formal",
    "subtopic": "Condicionales equivalentes"
  },
  {
    "id": "raz-int-70",
    "sectionId": 3,
    "number": 70,
    "text": "¿Qué falacia formal se comete en el razonamiento: 'Si llueve, la calle se moja. La calle está mojada. Por lo tanto, llovió'?",
    "options": [
      "Falacia de afirmación del consecuente",
      "Falacia de negación del antecedente",
      "Modus Tollens inválido",
      "Falacia ad hominem"
    ],
    "correctIndex": 0,
    "explanation": "La calle pudo haberse mojado por un camión cisterna o una manguera; afirmar el consecuente no garantiza la verdad del antecedente.",
    "skill": "Falacias formales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Formal",
    "subtopic": "Afirmación del consecuente"
  },
  {
    "id": "raz-int-71",
    "sectionId": 3,
    "number": 71,
    "text": "¿Qué falacia formal se comete en: 'Si estudias, apruebas. No estudiaste. Por lo tanto, no aprobarás'?",
    "options": [
      "Falacia de negación del antecedente",
      "Falacia de afirmación del consecuente",
      "Silogismo disyuntivo falso",
      "Petición de principio"
    ],
    "correctIndex": 0,
    "explanation": "Negar la condición suficiente no autoriza a deducir la falsedad del resultado (se puede aprobar por conocimientos previos o azar).",
    "skill": "Falacias formales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Formal",
    "subtopic": "Negación del antecedente"
  },
  {
    "id": "raz-int-72",
    "sectionId": 3,
    "number": 72,
    "text": "En combinatoria, ¿de cuántas formas diferentes pueden ordenarse 5 libros distintos en un estante horizontal?",
    "options": [
      "120 formas",
      "24 formas",
      "60 formas",
      "720 formas"
    ],
    "correctIndex": 0,
    "explanation": "Corresponde a las permutaciones simples de 5 elementos: P_5 = 5! = 5 × 4 × 3 × 2 × 1 = 120.",
    "skill": "Permutaciones simples",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Combinatoria",
    "subtopic": "Factoriales y ordenamientos"
  },
  {
    "id": "raz-int-73",
    "sectionId": 3,
    "number": 73,
    "text": "¿Cuántos comités de 3 personas se pueden formar a partir de un grupo de 7 candidatos sin importar el orden?",
    "options": [
      "35 comités",
      "21 comités",
      "42 comités",
      "210 comités"
    ],
    "correctIndex": 0,
    "explanation": "Combinaciones sin repetición: C(7, 3) = 7! / (3! × 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35.",
    "skill": "Combinaciones simples",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Combinatoria",
    "subtopic": "Selección sin orden"
  },
  {
    "id": "raz-int-74",
    "sectionId": 3,
    "number": 74,
    "text": "Si se lanzan dos dados cúbicos estándar numerados del 1 al 6, ¿cuál es la probabilidad de que la suma de sus puntos sea igual a 7?",
    "options": [
      "6/36 (es decir, 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 0,
    "explanation": "Hay 36 casos posibles en total. Las combinaciones que suman 7 son (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 casos favorables. P = 6/36 = 1/6.",
    "skill": "Probabilidad clásica de dados",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Probabilidad",
    "subtopic": "Espacio muestral"
  },
  {
    "id": "raz-int-75",
    "sectionId": 3,
    "number": 75,
    "text": "Al lanzar tres monedas justas al aire, ¿cuál es la probabilidad de obtener exactamente dos caras y un sello?",
    "options": [
      "3/8",
      "1/2",
      "1/4",
      "5/8"
    ],
    "correctIndex": 0,
    "explanation": "Espacio muestral = 2³ = 8 resultados. Casos con 2 caras: (C,C,S), (C,S,C), (S,C,C) = 3 casos favorables. P = 3/8.",
    "skill": "Probabilidad binomial elemental",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Probabilidad",
    "subtopic": "Lanzamiento de monedas"
  },
  {
    "id": "raz-int-76",
    "sectionId": 3,
    "number": 76,
    "text": "En un diagrama de Venn de dos conjuntos A y B, la región que representa (A ∪ B) - (A ∩ B) se denomina formalmente:",
    "options": [
      "Diferencia simétrica de A y B (A △ B)",
      "Complemento de la unión",
      "Intersección pura",
      "Diferencia simple A - B"
    ],
    "correctIndex": 0,
    "explanation": "La diferencia simétrica reúne los elementos que pertenecen exclusivamente a A o exclusivamente a B, pero no a ambos.",
    "skill": "Diferencia simétrica de conjuntos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Operaciones entre conjuntos"
  },
  {
    "id": "raz-int-77",
    "sectionId": 3,
    "number": 77,
    "text": "Si el conjunto universal tiene 50 elementos, n(A) = 28, n(B) = 22 y n(A ∩ B) = 10, ¿cuántos elementos están fuera de A y de B?",
    "options": [
      "10 elementos",
      "12 elementos",
      "8 elementos",
      "15 elementos"
    ],
    "correctIndex": 0,
    "explanation": "n(A ∪ B) = 28 + 22 - 10 = 40. Los elementos en el complemento exterior son 50 - 40 = 10.",
    "skill": "Complemento de la unión",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Conjunto universal"
  },
  {
    "id": "raz-int-78",
    "sectionId": 3,
    "number": 78,
    "text": "Dada la premisa: 'Algunos científicos son músicos' y 'Todos los músicos son artistas'. ¿Qué se deduce válidamente?",
    "options": [
      "Algunos científicos son artistas",
      "Todos los científicos son artistas",
      "Ningún artista es científico",
      "Todos los artistas son músicos"
    ],
    "correctIndex": 0,
    "explanation": "Silogismo categórico en modo Darii (AII-1): Particular Afirmativa + Universal Afirmativa implica Particular Afirmativa.",
    "skill": "Silogismo de cuantificadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Categórica",
    "subtopic": "Modo Darii"
  },
  {
    "id": "raz-int-79",
    "sectionId": 3,
    "number": 79,
    "text": "¿Qué figura retórica o falacia argumentativa consiste en suponer probado aquello que justamente se busca demostrar?",
    "options": [
      "Petición de principio (petitio principii)",
      "Hombre de paja",
      "Apelación a la ignorancia",
      "Falsa dicotomía"
    ],
    "correctIndex": 0,
    "explanation": "La petición de principio incurre en circularidad lógica al utilizar la tesis no demostrada como premisa de su propia demostración.",
    "skill": "Falacias de circularidad",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Pensamiento Crítico",
    "subtopic": "Petición de principio"
  },
  {
    "id": "raz-int-80",
    "sectionId": 3,
    "number": 80,
    "text": "Un prisionero está frente a dos puertas: una conduce a la libertad y otra a la mazmorra. Cada puerta está custodiada por un guardia; uno siempre dice la verdad y el otro siempre miente. ¿Qué pregunta clásica permite al prisionero elegir con certeza la puerta de la libertad?",
    "options": [
      "¿Qué puerta me diría el otro guardia que es la de la libertad? (y elegir la contraria)",
      "¿Cuál es tu puerta favorita?",
      "¿Eres tú el guardia que dice la verdad?",
      "¿La puerta de la izquierda está abierta?"
    ],
    "correctIndex": 0,
    "explanation": "Al componer una respuesta veraz con una mentira (V ∧ F o F ∧ V), el resultado final es siempre una mentira garantizada; por ende, elegir la puerta opuesta asegura la libertad.",
    "skill": "Acertijo clásico de los guardianes",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Deductiva",
    "subtopic": "Paradojas lógicas"
  },
  {
    "id": "raz-int-81",
    "sectionId": 3,
    "number": 81,
    "text": "En una bolsa opaca hay 12 canicas rojas, 8 azules y 5 verdes. ¿Cuál es el número mínimo de canicas que se deben extraer al azar para tener la certeza de haber obtenido al menos 2 canicas de color verde?",
    "options": [
      "22 canicas",
      "20 canicas",
      "24 canicas",
      "18 canicas"
    ],
    "correctIndex": 0,
    "explanation": "En el peor escenario posible, se extraen primero todas las canicas no verdes: 12 rojas + 8 azules = 20 canicas. Las siguientes 2 canicas extraídas serán forzosamente verdes: 20 + 2 = 22 canicas.",
    "skill": "Certezas en peor escenario",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Matemático",
    "subtopic": "Análisis de casos extremos"
  },
  {
    "id": "raz-int-82",
    "sectionId": 3,
    "number": 82,
    "text": "Si al duplicar la edad de Andrés y sumarle 15 años se obtiene la edad de su padre, que tiene 55 años, ¿cuántos años tiene Andrés?",
    "options": [
      "20 años",
      "25 años",
      "18 años",
      "22 años"
    ],
    "correctIndex": 0,
    "explanation": "Planteamiento: 2A + 15 = 55 ⇒ 2A = 40 ⇒ A = 20 años.",
    "skill": "Ecuaciones lineales de edades",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Edades"
  },
  {
    "id": "raz-int-83",
    "sectionId": 3,
    "number": 83,
    "text": "¿Qué número completa la serie de diferencias alternadas: 5, 6, 10, 19, 35, ___?",
    "options": [
      "60",
      "55",
      "64",
      "50"
    ],
    "correctIndex": 0,
    "explanation": "Diferencias: +1, +4, +9, +16. Las diferencias son cuadrados perfectos (1², 2², 3², 4²). La siguiente diferencia es 5² = 25: 35 + 25 = 60.",
    "skill": "Sucesiones de diferencias cuadráticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Patrones numéricos"
  },
  {
    "id": "raz-int-84",
    "sectionId": 3,
    "number": 84,
    "text": "Si una cuadrilla de 8 pintores tarda 6 horas en pintar un edificio, ¿cuántas horas tardarían 12 pintores con el mismo rendimiento?",
    "options": [
      "4 horas",
      "3 horas",
      "5 horas",
      "4.5 horas"
    ],
    "correctIndex": 0,
    "explanation": "Proporcionalidad inversa: Pintores × Horas = Constante. 8 × 6 = 48 horas-hombre. Tiempo con 12 pintores = 48 / 12 = 4 horas.",
    "skill": "Proporcionalidad inversa",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Regla de tres simple inversa"
  },
  {
    "id": "raz-int-85",
    "sectionId": 3,
    "number": 85,
    "text": "¿Qué letra continúa la serie alternada: A, Z, C, X, E, V, G, ___?",
    "options": [
      "T",
      "U",
      "S",
      "R"
    ],
    "correctIndex": 0,
    "explanation": "La serie impar avanza de dos en dos (A, C, E, G). La serie par retrocede de dos en dos desde el final (Z, X, V, T). Por tanto, sigue T.",
    "skill": "Series alfabéticas dobles",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Verbal",
    "subtopic": "Alfabeto inverso"
  },
  {
    "id": "raz-int-86",
    "sectionId": 3,
    "number": 86,
    "text": "Un artículo que costaba $80 sube a $100. ¿Cuál fue el porcentaje de incremento?",
    "options": [
      "25%",
      "20%",
      "15%",
      "30%"
    ],
    "correctIndex": 0,
    "explanation": "Aumento = 100 - 80 = $20. Porcentaje de aumento = (20 / 80) × 100 = 25%.",
    "skill": "Cálculo de incrementos porcentuales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Porcentajes"
  },
  {
    "id": "raz-int-87",
    "sectionId": 3,
    "number": 87,
    "text": "En un campeonato de fútbol de ida y vuelta participan 6 equipos. ¿Cuántos partidos se disputan en total?",
    "options": [
      "30 partidos",
      "15 partidos",
      "36 partidos",
      "24 partidos"
    ],
    "correctIndex": 0,
    "explanation": "Cada uno de los 6 equipos juega contra los otros 5 dos veces (local y visitante): 6 × 5 = 30 partidos.",
    "skill": "Combinatoria de torneos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Combinatoria",
    "subtopic": "Partidos ida y vuelta"
  },
  {
    "id": "raz-int-88",
    "sectionId": 3,
    "number": 88,
    "text": "Si el perímetro de un rectángulo es 36 cm y su largo es el doble de su ancho, ¿cuánto mide su área?",
    "options": [
      "72 cm²",
      "64 cm²",
      "81 cm²",
      "54 cm²"
    ],
    "correctIndex": 0,
    "explanation": "2(L + A) = 36 ⇒ L + A = 18. Si L = 2A ⇒ 3A = 18 ⇒ A = 6 cm y L = 12 cm. Área = 12 × 6 = 72 cm².",
    "skill": "Geometría algebraica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Áreas y perímetros"
  },
  {
    "id": "raz-int-89",
    "sectionId": 3,
    "number": 89,
    "text": "¿Qué número es a 48 como 15 es a 36?",
    "options": [
      "20",
      "18",
      "24",
      "16"
    ],
    "correctIndex": 0,
    "explanation": "Proporción directa: x / 48 = 15 / 36 ⇒ x = (48 × 15) / 36 = 720 / 36 = 20.",
    "skill": "Proporciones numéricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Razones y proporciones"
  },
  {
    "id": "raz-int-90",
    "sectionId": 3,
    "number": 90,
    "text": "Si en una habitación hay 5 personas y cada una saluda de mano exactamente una vez a todas las demás, ¿cuántos apretones de mano se dan en total?",
    "options": [
      "10",
      "20",
      "15",
      "25"
    ],
    "correctIndex": 0,
    "explanation": "Combinaciones de 5 elementos tomados de 2 en 2: C(5, 2) = (5 × 4) / 2 = 10 apretones.",
    "skill": "Conteo de saludos e interacciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Combinatoria",
    "subtopic": "Combinaciones simples"
  },
  {
    "id": "raz-int-91",
    "sectionId": 3,
    "number": 91,
    "text": "¿Cuál es la media aritmética de los números 14, 18, 22, 26 y 30?",
    "options": [
      "22",
      "20",
      "24",
      "21"
    ],
    "correctIndex": 0,
    "explanation": "Al ser una progresión aritmética con cantidad impar de términos, la media coincide con el término central: 22.",
    "skill": "Promedios en sucesiones simétricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Estadística descriptiva"
  },
  {
    "id": "raz-int-92",
    "sectionId": 3,
    "number": 92,
    "text": "En una carrera, si superas a la persona que va en segundo lugar, ¿en qué posición quedas?",
    "options": [
      "Segundo lugar",
      "Primer lugar",
      "Tercer lugar",
      "Cuarto lugar"
    ],
    "correctIndex": 0,
    "explanation": "Al adelantar a quien ocupaba el segundo puesto, tomas inmediatamente su lugar: quedas en segundo puesto.",
    "skill": "Problemas de lógica situacional",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Lógico",
    "subtopic": "Posición ordinal"
  },
  {
    "id": "raz-int-93",
    "sectionId": 3,
    "number": 93,
    "text": "¿Cuántos números enteros impares de tres dígitos pueden formarse con las cifras 2, 3, 5, 8 sin repetir cifras?",
    "options": [
      "12 números",
      "6 números",
      "18 números",
      "24 números"
    ],
    "correctIndex": 0,
    "explanation": "Para ser impar, el último dígito debe ser 3 o 5 (2 opciones). Para las centenas quedan 3 opciones y para las decenas 2 opciones: 3 × 2 × 2 = 12 números.",
    "skill": "Principio fundamental del conteo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Combinatoria",
    "subtopic": "Formación de números"
  },
  {
    "id": "raz-int-94",
    "sectionId": 3,
    "number": 94,
    "text": "Si un depósito se llena con un grifo A en 3 horas y con un grifo B en 6 horas, ¿cuánto tardarán en llenarlo ambos grifos juntos?",
    "options": [
      "2 horas",
      "4.5 horas",
      "1.5 horas",
      "2.5 horas"
    ],
    "correctIndex": 0,
    "explanation": "En 1 hora A llena 1/3 y B llena 1/6. Juntos llenan 1/3 + 1/6 = 3/6 = 1/2 del depósito por hora. Tardarán 2 horas completas.",
    "skill": "Problemas de grifos y rendimiento",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Matemático",
    "subtopic": "Fracción de obra"
  },
  {
    "id": "raz-int-95",
    "sectionId": 3,
    "number": 95,
    "text": "¿Qué ángulo forman las agujas de un reloj cuando marca las 3:30?",
    "options": [
      "75°",
      "90°",
      "80°",
      "85°"
    ],
    "correctIndex": 0,
    "explanation": "El minutero está en el 6 (180°). La aguja horaria ha avanzado la mitad de una hora (30°/2 = 15°) desde las 3 (90°): 90° + 15° = 105°. Ángulo = 180° - 105° = 75°.",
    "skill": "Cronometría analítica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Matemático",
    "subtopic": "Ángulos horarios"
  },
  {
    "id": "raz-int-96",
    "sectionId": 3,
    "number": 96,
    "text": "En una fila de árboles, el árbol de manzanas es el séptimo contando de izquierda a derecha y el decimocuarto contando de derecha a izquierda. ¿Cuántos árboles hay en la fila?",
    "options": [
      "20 árboles",
      "21 árboles",
      "19 árboles",
      "22 árboles"
    ],
    "correctIndex": 0,
    "explanation": "Total = Posición izquierda + Posición derecha - 1 = 7 + 14 - 1 = 20 árboles.",
    "skill": "Conteo de elementos alineados",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Lógico",
    "subtopic": "Ordenamiento lineal"
  },
  {
    "id": "raz-int-97",
    "sectionId": 3,
    "number": 97,
    "text": "Si todos los A son B, y ningún B es C, ¿cuál de las siguientes conclusiones es necesariamente cierta?",
    "options": [
      "Ningún A es C",
      "Todos los C son A",
      "Algunos A son C",
      "Todos los B son A"
    ],
    "correctIndex": 0,
    "explanation": "Silogismo clásico Celarent: Todo A está contenido en B; si B no tiene intersección con C, A tampoco puede tener intersección con C.",
    "skill": "Silogismo categórico formal",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Deductiva",
    "subtopic": "Inferencia de conjuntos"
  },
  {
    "id": "raz-int-98",
    "sectionId": 3,
    "number": 98,
    "text": "Un tren viaja a 72 km/h. ¿Cuántos metros recorre por cada segundo?",
    "options": [
      "20 metros/segundo",
      "25 metros/segundo",
      "18 metros/segundo",
      "15 metros/segundo"
    ],
    "correctIndex": 0,
    "explanation": "Conversión de unidades: 72 km/h ÷ 3.6 = 20 m/s.",
    "skill": "Conversión de velocidades",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Cuantitativo",
    "subtopic": "Cinemática básica"
  },
  {
    "id": "raz-int-99",
    "sectionId": 3,
    "number": 99,
    "text": "¿Qué número completa la analogía: 64 : 4 :: 125 : ___?",
    "options": [
      "5",
      "25",
      "15",
      "10"
    ],
    "correctIndex": 0,
    "explanation": "La relación es la raíz cúbica: ∛64 = 4; por lo tanto ∛125 = 5.",
    "skill": "Analogías de potencias y raíces",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Raíces cúbicas"
  },
  {
    "id": "raz-int-100",
    "sectionId": 3,
    "number": 100,
    "text": "Si al triple de un número se le resta 8, se obtiene el doble del mismo número aumentado en 4. ¿Cuál es el número?",
    "options": [
      "12",
      "10",
      "14",
      "16"
    ],
    "correctIndex": 0,
    "explanation": "Planteamiento: 3x - 8 = 2x + 4 ⇒ 3x - 2x = 4 + 8 ⇒ x = 12.",
    "skill": "Ecuaciones de primer grado verbales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Razonamiento Numérico",
    "subtopic": "Lenguaje algebraico"
  }
];
