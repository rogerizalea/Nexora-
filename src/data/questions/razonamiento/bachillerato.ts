import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE RAZONAMIENTO LÓGICO Y ABSTRACTO - NIVEL BACHILLERATO (100 Reactivos)
 */
export const RAZONAMIENTO_BACHILLERATO: Question[] = [
  {
    "id": "raz-bac-1",
    "sectionId": 3,
    "number": 41,
    "text": "Dada la proposición condicional \"Si llueve, entonces el suelo está mojado\", ¿cuál es su proposición contrapositiva lógicamente equivalente?",
    "options": [
      "Si el suelo está mojado, entonces llueve.",
      "Si no llueve, el suelo no está mojado.",
      "Si el suelo no está mojado, entonces no llueve.",
      "Llueve siempre que el suelo no esté mojado."
    ],
    "correctIndex": 2,
    "explanation": "La contrapositiva de una implicación (p → q) es (¬q → ¬p). Ambas proposiciones poseen exactamente la misma tabla de verdad en lógica proposicional clásica.",
    "skill": "Equivalencias Lógicas y Contraposición",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Matemática",
    "subtopic": "Contrapositiva y Condicionales"
  },
  {
    "id": "raz-bac-2",
    "sectionId": 3,
    "number": 42,
    "text": "¿Qué número continúa la serie: 1, 4, 10, 22, 46, ___?",
    "options": [
      "88",
      "92",
      "94",
      "96"
    ],
    "correctIndex": 2,
    "explanation": "Cada término sigue la regla recursiva: el doble del término anterior más 2 [a_(n+1) = 2a_n + 2]: 1×2+2=4; 4×2+2=10; 10×2+2=22; 22×2+2=46; 46×2+2=94.",
    "skill": "Sucesiones Recurrentes Mixtas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Numérico",
    "subtopic": "Relaciones de Recurrencia Lineal"
  },
  {
    "id": "raz-bac-3",
    "sectionId": 3,
    "number": 43,
    "text": "En un torneo de ajedrez con 8 participantes en sistema de todos contra todos (round-robin), ¿cuántas partidas se disputarán en total?",
    "options": [
      "28",
      "32",
      "56",
      "64"
    ],
    "correctIndex": 0,
    "explanation": "Es una combinación de 8 elementos tomados de 2 en 2: C(8, 2) = (8 × 7) / (2 × 1) = 56 / 2 = 28 partidas.",
    "skill": "Combinatoria y Conteo de Enlaces",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Combinatoria",
    "subtopic": "Combinaciones sin Repetición"
  },
  {
    "id": "raz-bac-4",
    "sectionId": 3,
    "number": 44,
    "text": "¿Cuál es la negación lógica formal de la proposición cuantificada: \"Todos los estudiantes aprobaron el examen\"?",
    "options": [
      "Ningún estudiante aprobó el examen.",
      "Todos los estudiantes reprobaron el examen.",
      "Existe al menos un estudiante que no aprobó el examen.",
      "La mayoría de estudiantes reprobó el examen."
    ],
    "correctIndex": 2,
    "explanation": "Por la ley de De Morgan para cuantificadores lógicos: ¬(∀x P(x)) ≡ ∃x ¬P(x). La negación de un cuantificador universal afirmativo es un particular negativo.",
    "skill": "Cuantificadores Universales y Existenciales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica de Predicados",
    "subtopic": "Leyes de De Morgan para Cuantificadores"
  },
  {
    "id": "raz-bac-5",
    "sectionId": 3,
    "number": 45,
    "text": "Un cubo sólido de madera de 3x3x3 cm pintado de rojo por fuera se corta en 27 cubitos de 1x1x1 cm. ¿Cuántos cubitos tendrán exactamente dos caras pintadas de rojo?",
    "options": [
      "6",
      "8",
      "12",
      "1"
    ],
    "correctIndex": 2,
    "explanation": "Los cubos con 2 caras pintadas se ubican en las aristas (excluyendo los 8 vértices). Un cubo tiene 12 aristas, y en cada arista de 3 cm hay exactamente 1 cubito central: 12 × 1 = 12 cubitos.",
    "skill": "Geometría Espacial y Descomposición Cúbica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Cubos Pintados y Particiones"
  },
  {
    "id": "raz-bac-6",
    "sectionId": 3,
    "number": 46,
    "text": "Si la probabilidad de que ocurra el evento A es 0.6 y la del evento B independiente de A es 0.5, ¿cuál es la probabilidad de que ocurran ambos eventos simultáneamente (A ∩ B)?",
    "options": [
      "0.1",
      "0.3",
      "0.55",
      "1.1"
    ],
    "correctIndex": 1,
    "explanation": "Para eventos estadísticamente independientes, la regla del producto establece que P(A ∩ B) = P(A) × P(B) = 0.6 × 0.5 = 0.30.",
    "skill": "Probabilidad de Eventos Independientes",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad y Estadística",
    "subtopic": "Regla del Producto"
  },
  {
    "id": "raz-bac-7",
    "sectionId": 3,
    "number": 47,
    "text": "¿Qué patrón sigue la matriz de números: Fila 1: [2, 5, 10]; Fila 2: [3, 10, 29]; Fila 3: [4, 17, ?]?",
    "options": [
      "48",
      "64",
      "66",
      "68"
    ],
    "correctIndex": 2,
    "explanation": "Para cada fila x: Columna 1 = x; Columna 2 = x² + 1; Columna 3 = x³ + 2. En la fila 3 con x = 4: 4³ + 2 = 64 + 2 = 66.",
    "skill": "Matrices Polinómicas No Lineales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Relaciones Funcionales Matriciales"
  },
  {
    "id": "raz-bac-8",
    "sectionId": 3,
    "number": 48,
    "text": "Dada la falacia: \"Esta medicina cura el resfriado porque a mí me funcionó cuando la tomé la semana pasada\", ¿qué tipo de falacia lógica se comete?",
    "options": [
      "Falacia ad verecundiam (apelación a la autoridad)",
      "Falacia de generalización apresurada o evidencia anecdótica",
      "Falacia ad hominem",
      "Falacia de petición de principio"
    ],
    "correctIndex": 1,
    "explanation": "Se infiere una ley médica universal a partir de un único caso no representativo e incontrolado (muestra de n=1), lo cual constituye evidencia anecdótica y generalización apresurada.",
    "skill": "Identificación de Falacias Argumentativas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Epistemología y Pensamiento Crítico",
    "subtopic": "Falacias Informales"
  },
  {
    "id": "raz-bac-9",
    "sectionId": 3,
    "number": 49,
    "text": "En una urna con 4 bolas rojas y 6 bolas azules, se extraen dos bolas consecutivamente sin reemplazo. ¿Cuál es la probabilidad de que la primera sea roja y la segunda azul?",
    "options": [
      "4/15",
      "12/45",
      "24/90",
      "4/15 (simplificada: 24/90 = 4/15)"
    ],
    "correctIndex": 3,
    "explanation": "P(1ª Roja) = 4/10. Quedan 9 bolas en la urna (4-1=3 rojas y 6 azules). P(2ª Azul | 1ª Roja) = 6/9. P(Total) = (4/10) × (6/9) = 24/90 = 4/15.",
    "skill": "Probabilidad Condicional sin Reposición",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Muestreo sin Reemplazo"
  },
  {
    "id": "raz-bac-10",
    "sectionId": 3,
    "number": 50,
    "text": "¿Cuál es el desarrollo plano de un cilindro recto cerrado?",
    "options": [
      "Un rectángulo y un círculo",
      "Un rectángulo y dos círculos congruentes en lados opuestos",
      "Un triángulo y un círculo",
      "Dos rectángulos y un círculo"
    ],
    "correctIndex": 1,
    "explanation": "La superficie lateral de un cilindro se desenrolla en un rectángulo de base 2πr y altura h, junto con dos tapas circulares de radio r.",
    "skill": "Desarrollos Planos de Cuerpos Redondos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Geometría Descriptiva"
  },
  {
    "id": "raz-bac-11",
    "sectionId": 3,
    "number": 51,
    "text": "Si definimos la operación matemática personalizada a ⊗ b = a² - 2b + 1, ¿cuál es el resultado de 4 ⊗ 3?",
    "options": [
      "9",
      "11",
      "13",
      "15"
    ],
    "correctIndex": 1,
    "explanation": "Sustituyendo a = 4 y b = 3: 4² - 2(3) + 1 = 16 - 6 + 1 = 11.",
    "skill": "Operadores Matemáticos Arbitrarios",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Simbólico",
    "subtopic": "Operaciones Binarias Definidas"
  },
  {
    "id": "raz-bac-12",
    "sectionId": 3,
    "number": 52,
    "text": "¿Qué término continúa la sucesión alfanumérica: 2A, 5C, 10F, 17J, ___?",
    "options": [
      "24N",
      "26Ñ",
      "26O",
      "28P"
    ],
    "correctIndex": 2,
    "explanation": "Parte numérica: n² + 1 para n=1,2,3,4,5: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26. Parte alfabética avanza +1, +2, +3, +4, +5 posiciones: A(+2)=C, C(+3)=F, F(+4)=J, J(+5)=O. Resultado: 26O.",
    "skill": "Series Alfanuméricas Compuestas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Patrones Cuadráticos y Alfabéticos"
  },
  {
    "id": "raz-bac-13",
    "sectionId": 3,
    "number": 53,
    "text": "Si la proposición \"p ∨ q\" es falsa, ¿cuáles son los valores de verdad individuales de p y q?",
    "options": [
      "p es verdadera y q es falsa",
      "p es falsa y q es verdadera",
      "Ambas deben ser necesariamente falsas",
      "Ambas son verdaderas"
    ],
    "correctIndex": 2,
    "explanation": "Por la tabla de verdad de la disyunción lógica inclusiva, p ∨ q es falsa únicamente cuando ambos operandos son simultáneamente falsos (p = F y q = F).",
    "skill": "Tablas de Verdad de la Disyunción",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Proposicional",
    "subtopic": "Conectivos Lógicos"
  },
  {
    "id": "raz-bac-14",
    "sectionId": 3,
    "number": 54,
    "text": "Un tren que viaja a 90 km/h tarda 20 segundos en atravesar completamente un túnel de 300 metros. ¿Cuál es la longitud del tren?",
    "options": [
      "150 metros",
      "200 metros",
      "250 metros",
      "300 metros"
    ],
    "correctIndex": 1,
    "explanation": "Velocidad en m/s: 90 × (1000/3600) = 25 m/s. Distancia total recorrida = velocidad × tiempo = 25 m/s × 20 s = 500 metros. Distancia = longitud del túnel + longitud del tren: 500 = 300 + L_tren → L_tren = 200 m.",
    "skill": "Problemas de Móviles y Cinemática Deductiva",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Físico-Matemático",
    "subtopic": "Cruces de Trenes y Longitudes"
  },
  {
    "id": "raz-bac-15",
    "sectionId": 3,
    "number": 55,
    "text": "¿Cuál es el número de diagonales que pueden trazarse en un polígono convexo de 7 lados (heptágono)?",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctIndex": 2,
    "explanation": "Fórmula de diagonales de un polígono de n lados: D = n(n - 3) / 2. Para n = 7: D = 7(7 - 3) / 2 = 7(4) / 2 = 14 diagonales.",
    "skill": "Geometría Deductiva y Combinatoria Poligonal",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica y Plana",
    "subtopic": "Diagonales de Polígonos"
  },
  {
    "id": "raz-bac-16",
    "sectionId": 3,
    "number": 56,
    "text": "En una clase de 40 alumnos, el 70% aprobó Matemáticas y el 80% aprobó Física. ¿Cuál es el número mínimo de alumnos que aprobaron ambas materias?",
    "options": [
      "16",
      "20",
      "24",
      "28"
    ],
    "correctIndex": 1,
    "explanation": "Alumnos que aprobaron Matemáticas: 0.70 × 40 = 28. Alumnos que aprobaron Física: 0.80 × 40 = 32. Total de aprobaciones acumuladas = 28 + 32 = 60. Como hay 40 alumnos, por el principio del palomar o exceso de suma: Mínimo intersección = 60 - 40 = 20 alumnos.",
    "skill": "Principio del Palomar y Cotas de Conjuntos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Solapamiento Mínimo"
  },
  {
    "id": "raz-bac-17",
    "sectionId": 3,
    "number": 57,
    "text": "Identifica el patrón lógico que determina la validez de un argumento formal inductivo frente a uno deductivo:",
    "options": [
      "El inductivo va de premisas particulares a conclusiones probables; el deductivo va de premisas generales a conclusiones necesariamente verdaderas.",
      "El inductivo siempre es matemáticamente exacto.",
      "El deductivo nunca requiere premisas verdaderas.",
      "No existe diferencia formal entre inducción y deducción."
    ],
    "correctIndex": 0,
    "explanation": "En el razonamiento deductivo, si las premisas son verdaderas, la conclusión se sigue con necesidad lógica absoluta. En el inductivo, las premisas particulares respaldan una conclusión con un grado de probabilidad o plausibilidad.",
    "skill": "Epistemología del Razonamiento Científico",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Método Científico y Lógica",
    "subtopic": "Inducción vs Deducción"
  },
  {
    "id": "raz-bac-18",
    "sectionId": 3,
    "number": 58,
    "text": "¿Cuál es la probabilidad de obtener al menos un número 6 al lanzar dos dados honestos estándar de 6 caras?",
    "options": [
      "1/6",
      "11/36",
      "1/3",
      "12/36"
    ],
    "correctIndex": 1,
    "explanation": "Usamos el evento complementario (no sacar ningún 6 en ninguno de los dos dados): P(ningún 6) = (5/6) × (5/6) = 25/36. P(al menos un 6) = 1 - 25/36 = 11/36.",
    "skill": "Probabilidad por Evento Complementario",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad Clásica",
    "subtopic": "Regla del Complemento"
  },
  {
    "id": "raz-bac-19",
    "sectionId": 3,
    "number": 59,
    "text": "¿Qué figura completa la analogía geométrica: Círculo inscrito en cuadrado es a Cuadrado inscrito en círculo, como Esfera inscrita en cubo es a ___?",
    "options": [
      "Cilindro inscrito en cono",
      "Cubo inscrito en esfera",
      "Pirámide inscrita en prisma",
      "Toroide circunscrito"
    ],
    "correctIndex": 1,
    "explanation": "La relación analógica es de inversión de inclusión geométrica (figura curva dentro de polígono pasa a polígono dentro de figura curva) proyectada de dos dimensiones a tres dimensiones.",
    "skill": "Analogías Espaciales Tridimensionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Isomorfismos Dimensionales"
  },
  {
    "id": "raz-bac-20",
    "sectionId": 3,
    "number": 60,
    "text": "Si f(x) es una función estrictamente creciente en todo su dominio real y f(2) = 5, ¿cuál de las siguientes desigualdades es indiscutiblemente cierta?",
    "options": [
      "f(1) > 5",
      "f(3) > 5",
      "f(0) = 5",
      "f(4) < 5"
    ],
    "correctIndex": 1,
    "explanation": "Por definición de función estrictamente creciente: si x₁ < x₂, entonces f(x₁) < f(x₂). Como 2 < 3, necesariamente f(2) < f(3), es decir, 5 < f(3) o f(3) > 5.",
    "skill": "Monotonía de Funciones Matemáticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cálculo y Funciones",
    "subtopic": "Propiedades de Monotonía"
  },
  {
    "id": "raz-bac-21",
    "sectionId": 3,
    "number": 21,
    "text": "Una fórmula proposicional cuya tabla de verdad arroja únicamente valores verdaderos para cualquier asignación de verdad se clasifica formalmente como:",
    "options": [
      "Tautología",
      "Contradicción",
      "Contingencia",
      "Inconsistencia"
    ],
    "correctIndex": 0,
    "explanation": "Una tautología es una ley lógica universalmente válida cuyo valor de verdad es verdadero en todas las interpretaciones posibles.",
    "skill": "Clasificación de fórmulas lógicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Proposicional",
    "subtopic": "Tautologías"
  },
  {
    "id": "raz-bac-22",
    "sectionId": 3,
    "number": 22,
    "text": "¿Cuál de las siguientes fórmulas proposicionales es una contradicción lógica estricta?",
    "options": [
      "p ∧ ¬p",
      "p ∨ ¬p",
      "p → p",
      "p ↔ p"
    ],
    "correctIndex": 0,
    "explanation": "La conjunción simultánea de una proposición con su negación (p y no p) es siempre falsa bajo cualquier circunstancia.",
    "skill": "Contradicciones formales",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Proposicional",
    "subtopic": "Principio de no contradicción"
  },
  {
    "id": "raz-bac-23",
    "sectionId": 3,
    "number": 23,
    "text": "Por la Ley de Implicación Material, el condicional (p → q) es lógicamente equivalente a:",
    "options": [
      "¬p ∨ q",
      "¬p ∧ q",
      "p ∧ ¬q",
      "¬q → p"
    ],
    "correctIndex": 0,
    "explanation": "La implicación material p → q equivale a decir 'o no ocurre el antecedente, o se cumple el consecuente' (¬p ∨ q).",
    "skill": "Equivalencia de implicación material",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Proposicional",
    "subtopic": "Equivalencias lógicas"
  },
  {
    "id": "raz-bac-24",
    "sectionId": 3,
    "number": 24,
    "text": "¿A qué regla de inferencia formal corresponde el siguiente esquema argumentativo?\nPremisa 1: p → q\nPremisa 2: q → r\nConclusión: p → r",
    "options": [
      "Silogismo Hipotético Puro",
      "Silogismo Disyuntivo",
      "Modus Ponens",
      "Dilema Constructivo"
    ],
    "correctIndex": 0,
    "explanation": "El silogismo hipotético establece la transitividad de la implicación lógica a lo largo de una cadena de condicionales.",
    "skill": "Reglas de inferencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Deductiva",
    "subtopic": "Silogismo Hipotético"
  },
  {
    "id": "raz-bac-25",
    "sectionId": 3,
    "number": 25,
    "text": "¿Qué regla de inferencia deduce la conclusión 'r ∨ s' a partir de las premisas (p → r), (q → s) y (p ∨ q)?",
    "options": [
      "Dilema Constructivo",
      "Dilema Destructivo",
      "Modus Tollens",
      "Ley de Exportación"
    ],
    "correctIndex": 0,
    "explanation": "El dilema constructivo combina una disyunción con dos condicionales independientes para derivar la disyunción de sus consecuentes.",
    "skill": "Dilemas lógicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Formal",
    "subtopic": "Dilema Constructivo"
  },
  {
    "id": "raz-bac-26",
    "sectionId": 3,
    "number": 26,
    "text": "¿Cuál es la negación lógica de la proposición condicional: 'Si estudio todos los días, entonces apruebo el examen de admisión'?",
    "options": [
      "Estudio todos los días y no apruebo el examen de admisión",
      "Si no estudio todos los días, no apruebo el examen",
      "No estudio todos los días o apruebo el examen",
      "Nunca estudio y apruebo el examen"
    ],
    "correctIndex": 0,
    "explanation": "La negación de p → q es p ∧ ¬q (se verifica el antecedente pero se frustra el consecuente).",
    "skill": "Negación de condicionales",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Proposicional",
    "subtopic": "Negación formal"
  },
  {
    "id": "raz-bac-27",
    "sectionId": 3,
    "number": 27,
    "text": "Por las leyes de idempotencia del álgebra de proposiciones, la expresión (p ∨ p) se simplifica a:",
    "options": [
      "p",
      "Verdadero (V)",
      "Falso (F)",
      "2p"
    ],
    "correctIndex": 0,
    "explanation": "La disyunción o conjunción de una proposición consigo misma es idéntica a la proposición original: p ∨ p ≡ p.",
    "skill": "Leyes de idempotencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Proposicional",
    "subtopic": "Álgebra de Boole"
  },
  {
    "id": "raz-bac-28",
    "sectionId": 3,
    "number": 28,
    "text": "La Ley de Absorción en lógica formal establece que la fórmula p ∧ (p ∨ q) es lógicamente equivalente a:",
    "options": [
      "p",
      "q",
      "p ∧ q",
      "p ∨ q"
    ],
    "correctIndex": 0,
    "explanation": "La proposición exterior absorbe la disyunción interior: si p es falso la conjunción es falsa; si p es verdadero la disyunción es verdadera y el resultado es p.",
    "skill": "Ley de Absorción",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Proposicional",
    "subtopic": "Simplificación de fórmulas"
  },
  {
    "id": "raz-bac-29",
    "sectionId": 3,
    "number": 29,
    "text": "¿Cuántas filas tiene la tabla de verdad de una fórmula proposicional que contiene 4 variables proposicionales independientes (p, q, r, s)?",
    "options": [
      "16 filas",
      "8 filas",
      "32 filas",
      "12 filas"
    ],
    "correctIndex": 0,
    "explanation": "El número de combinaciones de verdad para n variables binarias es 2ⁿ. Para n = 4: 2⁴ = 16 filas.",
    "skill": "Tablas de verdad multidimensionales",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Proposicional",
    "subtopic": "Combinatoria de interpretaciones"
  },
  {
    "id": "raz-bac-30",
    "sectionId": 3,
    "number": 30,
    "text": "¿Qué conectiva lógica satisface la definición de la 'Barra de Sheffer' (NAND lógico)?",
    "options": [
      "¬(p ∧ q)",
      "¬(p ∨ q)",
      "p ↔ ¬q",
      "¬p ∧ ¬q"
    ],
    "correctIndex": 0,
    "explanation": "La barra de Sheffer (p | q) representa la negación conjunta de la conjunción: es falsa solo cuando ambas variables son simultáneamente verdaderas.",
    "skill": "Conectivas universales",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Simbólica",
    "subtopic": "Barra de Sheffer"
  },
  {
    "id": "raz-bac-31",
    "sectionId": 3,
    "number": 31,
    "text": "¿Por qué el operador NAND (Barra de Sheffer) se considera funcionalmente completo?",
    "options": [
      "Porque cualquier conectiva lógica de la lógica proposicional puede expresarse utilizando exclusivamente operadores NAND",
      "Porque siempre produce resultados verdaderos",
      "Porque no requiere variables proposicionales",
      "Porque coincide con el bicondicional"
    ],
    "correctIndex": 0,
    "explanation": "Un conjunto de operadores es funcionalmente completo si puede generar todas las funciones booleanas posibles sin ayuda de otros operadores.",
    "skill": "Completitud funcional",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Simbólica",
    "subtopic": "Operadores universales"
  },
  {
    "id": "raz-bac-32",
    "sectionId": 3,
    "number": 32,
    "text": "Dada la proposición: 'No todos los estudiantes aprobaron el examen'. Su formulación exacta en lógica de predicados es:",
    "options": [
      "¬(∀x) A(x), que equivale a (∃x) ¬A(x)",
      "(∀x) ¬A(x)",
      "(∃x) A(x)",
      "¬(∃x) A(x)"
    ],
    "correctIndex": 0,
    "explanation": "Negar que todos los individuos de un dominio cumplan una propiedad equivale lógicamente a afirmar que existe al menos un individuo que no la cumple.",
    "skill": "Cuantificación de predicados",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica de Predicados",
    "subtopic": "Cuantificadores de primer orden"
  },
  {
    "id": "raz-bac-33",
    "sectionId": 3,
    "number": 33,
    "text": "¿Cuál es la negación lógica de: 'Existe al menos un número real x tal que x² < 0'?",
    "options": [
      "Para todo número real x, se cumple que x² ≥ 0",
      "Existe un x tal que x² > 0",
      "Para ningún x se cumple x = 0",
      "Todos los números reales son negativos"
    ],
    "correctIndex": 0,
    "explanation": "La negación de (∃x) P(x) es (∀x) ¬P(x). La negación de x² < 0 es x² ≥ 0.",
    "skill": "Negación de cuantificador existencial",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica de Predicados",
    "subtopic": "Cuantificadores matemáticos"
  },
  {
    "id": "raz-bac-34",
    "sectionId": 3,
    "number": 34,
    "text": "En una inferencia lógica válida, si todas las premisas son verdaderas, la conclusión:",
    "options": [
      "Es necesariamente verdadera por necesidad lógica",
      "Tiene un 50% de probabilidad de ser verdadera",
      "Puede ser falsa si el tema es empírico",
      "Debe someterse a votación"
    ],
    "correctIndex": 0,
    "explanation": "Por definición de validez deductiva estricta, es imposible que las premisas sean verdaderas y la conclusión sea falsa simultáneamente.",
    "skill": "Validez deductiva formal",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Formal",
    "subtopic": "Teoría de la demostración"
  },
  {
    "id": "raz-bac-35",
    "sectionId": 3,
    "number": 35,
    "text": "El método de demostración por 'Reducción al Absurdo' (reductio ad absurdum) consiste en:",
    "options": [
      "Asumir provisionalmente la falsedad de la tesis que se desea probar para derivar una contradicción lógica formal",
      "Demostrar que el oponente carece de credenciales académicas",
      "Revisar uno a uno todos los casos empíricos del universo",
      "Enumerar ejemplos donde la tesis se cumpla"
    ],
    "correctIndex": 0,
    "explanation": "Al demostrar que la negación de la tesis implica una contradicción del tipo p ∧ ¬p, se concluye que la tesis original debe ser necesariamente verdadera.",
    "skill": "Demostración por el absurdo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Matemática",
    "subtopic": "Métodos de demostración"
  },
  {
    "id": "raz-bac-36",
    "sectionId": 3,
    "number": 36,
    "text": "Si un conjunto A tiene 6 elementos finitos distintos, ¿cuántos subconjuntos tiene su conjunto potencia P(A)?",
    "options": [
      "64 subconjuntos",
      "32 subconjuntos",
      "36 subconjuntos",
      "128 subconjuntos"
    ],
    "correctIndex": 0,
    "explanation": "La cardinalidad del conjunto potencia de un conjunto de n elementos es 2ⁿ. Para n = 6: 2⁶ = 64 subconjuntos.",
    "skill": "Conjunto potencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Cardinalidad"
  },
  {
    "id": "raz-bac-37",
    "sectionId": 3,
    "number": 37,
    "text": "¿Cuántos subconjuntos propios no vacíos posee un conjunto con 5 elementos?",
    "options": [
      "30",
      "31",
      "32",
      "25"
    ],
    "correctIndex": 0,
    "explanation": "Subconjuntos totales = 2⁵ = 32. Se excluyen el subconjunto impropio (el propio conjunto, 1) y el conjunto vacío (1): 32 - 2 = 30.",
    "skill": "Subconjuntos propios no vacíos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Subconjuntos"
  },
  {
    "id": "raz-bac-38",
    "sectionId": 3,
    "number": 38,
    "text": "Para que una relación binaria R sobre un conjunto sea una relación de equivalencia, debe satisfacer obligatoriamente las propiedades:",
    "options": [
      "Reflexiva, simétrica y transitiva",
      "Reflexiva, antisimétrica y transitiva",
      "Irreflexiva, simétrica y completa",
      "Convexa, densa y conexa"
    ],
    "correctIndex": 0,
    "explanation": "Toda relación de equivalencia parte un conjunto en clases de equivalencia disjuntas mediante estas tres propiedades algebraicas.",
    "skill": "Relaciones de equivalencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Estructuras relacionales"
  },
  {
    "id": "raz-bac-39",
    "sectionId": 3,
    "number": 39,
    "text": "Si R es una relación de orden parcial sobre un conjunto A, ¿qué propiedad reemplaza a la simetría?",
    "options": [
      "Antisimetría (si aRb y bRa, entonces a = b)",
      "Asimetría estricta",
      "Reflexividad total",
      "Linealidad"
    ],
    "correctIndex": 0,
    "explanation": "Un orden parcial (como la inclusión de conjuntos o la divisibilidad en enteros) es reflexivo, antisimétrico y transitivo.",
    "skill": "Relaciones de orden parcial",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Órdenes parciales"
  },
  {
    "id": "raz-bac-40",
    "sectionId": 3,
    "number": 40,
    "text": "Si los conjuntos A y B tienen cardinalidades |A| = 4 y |B| = 5, ¿cuántos elementos contiene el producto cartesiano A × B?",
    "options": [
      "20 elementos",
      "9 elementos",
      "25 elementos",
      "16 elementos"
    ],
    "correctIndex": 0,
    "explanation": "La cardinalidad del producto cartesiano es el producto de las cardinalidades individuales: |A × B| = 4 × 5 = 20 pares ordenados.",
    "skill": "Producto cartesiano",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Pares ordenados"
  },
  {
    "id": "raz-bac-41",
    "sectionId": 3,
    "number": 41,
    "text": "¿Cuántas funciones distintas pueden definirse desde un conjunto dominio de 3 elementos hacia un codominio de 4 elementos?",
    "options": [
      "64 funciones",
      "81 funciones",
      "12 funciones",
      "24 funciones"
    ],
    "correctIndex": 0,
    "explanation": "El número total de aplicaciones de A en B es |B|^|A| = 4³ = 64 funciones distintas.",
    "skill": "Conteo de funciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Matemática Discreta",
    "subtopic": "Aplicaciones entre conjuntos"
  },
  {
    "id": "raz-bac-42",
    "sectionId": 3,
    "number": 42,
    "text": "En una encuesta aplicada a 100 estudiantes: 50 estudian Inglés, 40 Francés y 30 Alemán; 20 estudian Inglés y Francés, 15 Francés y Alemán, 10 Inglés y Alemán; y 5 estudian los tres idiomas. ¿Cuántos estudian al menos uno de los tres idiomas?",
    "options": [
      "80 estudiantes",
      "85 estudiantes",
      "75 estudiantes",
      "90 estudiantes"
    ],
    "correctIndex": 0,
    "explanation": "Inclusión-exclusión: |I ∪ F ∪ A| = 50 + 40 + 30 - (20 + 15 + 10) + 5 = 120 - 45 + 5 = 80.",
    "skill": "Inclusión-exclusión de 3 conjuntos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Diagramas de Venn de 3 conjuntos"
  },
  {
    "id": "raz-bac-43",
    "sectionId": 3,
    "number": 43,
    "text": "¿Cuántos estudiantes de la encuesta anterior no estudian ninguno de los tres idiomas?",
    "options": [
      "20 estudiantes",
      "15 estudiantes",
      "25 estudiantes",
      "10 estudiantes"
    ],
    "correctIndex": 0,
    "explanation": "Total de estudiantes (100) menos los que estudian al menos uno (80): 100 - 80 = 20 estudiantes.",
    "skill": "Complemento en tres conjuntos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Conjunto universal"
  },
  {
    "id": "raz-bac-44",
    "sectionId": 3,
    "number": 44,
    "text": "¿Cuántos estudiantes estudian exclusivamente Inglés (solo Inglés y ningún otro idioma)?",
    "options": [
      "25 estudiantes",
      "50 estudiantes",
      "20 estudiantes",
      "30 estudiantes"
    ],
    "correctIndex": 0,
    "explanation": "Solo Inglés = Total Inglés - (I ∩ F) - (I ∩ A) + (I ∩ F ∩ A) = 50 - 20 - 10 + 5 = 25.",
    "skill": "Regiones disjuntas en Venn",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Cardinalidad exclusiva"
  },
  {
    "id": "raz-bac-45",
    "sectionId": 3,
    "number": 45,
    "text": "Si dos conjuntos no vacíos cumplen que A ∩ B = ∅ (son disjuntos), ¿cuál de las siguientes igualdades es necesariamente cierta?",
    "options": [
      "A - B = A",
      "A ∪ B = A",
      "A - B = ∅",
      "B - A = ∅"
    ],
    "correctIndex": 0,
    "explanation": "Al no compartir ningún elemento, quitarle B al conjunto A no retira ningún elemento de A, por lo que A - B = A.",
    "skill": "Conjuntos disjuntos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Diferencia de conjuntos"
  },
  {
    "id": "raz-bac-46",
    "sectionId": 3,
    "number": 46,
    "text": "¿Qué nombre recibe el axioma de la teoría de conjuntos que afirma que todo conjunto no vacío A contiene un elemento x tal que x ∩ A = ∅?",
    "options": [
      "Axioma de Regularidad o Fundación",
      "Axioma de Elección",
      "Axioma de Extensionalidad",
      "Axioma de Unión"
    ],
    "correctIndex": 0,
    "explanation": "El axioma de regularidad impide la existencia de conjuntos que se contengan a sí mismos (x ∈ x) o cadenas infinitas descendentes de pertenencia.",
    "skill": "Axiomática de Zermelo-Fraenkel",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Axioma de regularidad"
  },
  {
    "id": "raz-bac-47",
    "sectionId": 3,
    "number": 47,
    "text": "La Paradoja de Russell demostró la inconsistencia del principio de comprensión irrestricto de Frege analizando el conjunto R definido como:",
    "options": [
      "El conjunto de todos los conjuntos que no se contienen a sí mismos como miembros (R = {x : x ∉ x})",
      "El conjunto de todos los números reales mayores que cero",
      "El conjunto de todos los números primos pares",
      "El conjunto de todas las rectas paralelas"
    ],
    "correctIndex": 0,
    "explanation": "Si R ∈ R, entonces por definición R ∉ R; y si R ∉ R, entonces R ∈ R; una contradicción que forzó la axiomatización de la teoría de conjuntos.",
    "skill": "Paradoja de Russell",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Matemática",
    "subtopic": "Fundamentos de las matemáticas"
  },
  {
    "id": "raz-bac-48",
    "sectionId": 3,
    "number": 48,
    "text": "¿Cuál es la cardinalidad del conjunto de los números racionales ℚ comparada con la de los números naturales ℕ?",
    "options": [
      "Tienen exactamente la misma cardinalidad infinita numerable (Aleph cero, ℵ₀)",
      "El conjunto ℚ tiene mayor cardinalidad que ℕ",
      "El conjunto ℕ es finito y ℚ infinito",
      "No pueden compararse"
    ],
    "correctIndex": 0,
    "explanation": "Georg Cantor demostró mediante su método diagonal de enumeración que ℚ es numerable y biyectable con ℕ.",
    "skill": "Transfinitos de Cantor",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Conjuntos numerables"
  },
  {
    "id": "raz-bac-49",
    "sectionId": 3,
    "number": 49,
    "text": "¿Qué demostró Cantor respecto al conjunto de los números reales ℝ mediante el argumento diagonal?",
    "options": [
      "Que ℝ es un infinito no numerable, con cardinalidad estrictamente mayor que la de ℕ",
      "Que ℝ tiene menos elementos que ℚ",
      "Que ℝ es numerable como los enteros",
      "Que ℝ carece de orden lineal"
    ],
    "correctIndex": 0,
    "explanation": "El argumento diagonal demuestra que cualquier lista numerable de números reales en [0,1] deja fuera infinitos reales no computados en la lista.",
    "skill": "Argumento diagonal de Cantor",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Infinities no numerables"
  },
  {
    "id": "raz-bac-50",
    "sectionId": 3,
    "number": 50,
    "text": "La 'Hipótesis del Continuo' formulada por Cantor postula que:",
    "options": [
      "No existe ningún conjunto infinito cuya cardinalidad se encuentre estrictamente entre la de los enteros ℵ₀ y la de los reales 2^(ℵ₀)",
      "Todos los números irracionales son continuos",
      "La recta real contiene agujeros microscópicos",
      "Los enteros son más densos que los racionales"
    ],
    "correctIndex": 0,
    "explanation": "Gödel (1940) y Cohen (1963) demostraron que la Hipótesis del Continuo es independiente de los axiomas de ZFC (no se puede probar ni refutar dentro de ZFC).",
    "skill": "Hipótesis del Continuo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Matemática",
    "subtopic": "Independencia axiomática"
  },
  {
    "id": "raz-bac-51",
    "sectionId": 3,
    "number": 51,
    "text": "¿De cuántas maneras diferentes pueden sentarse 6 personas alrededor de una mesa circular?",
    "options": [
      "120 maneras",
      "720 maneras",
      "360 maneras",
      "24 maneras"
    ],
    "correctIndex": 0,
    "explanation": "Permutaciones circulares: PC_n = (n - 1)!. Para n = 6: PC_6 = (6 - 1)! = 5! = 120 maneras.",
    "skill": "Permutaciones circulares",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Combinatoria",
    "subtopic": "Arreglos circulares"
  },
  {
    "id": "raz-bac-52",
    "sectionId": 3,
    "number": 52,
    "text": "¿Cuántas palabras o cadenas diferentes (con o sin sentido) pueden formarse permutando todas las letras de la palabra 'MATEMATICA'?",
    "options": [
      "151,200",
      "302,400",
      "3,628,800",
      "75,600"
    ],
    "correctIndex": 0,
    "explanation": "Permutaciones con repetición: total 10 letras (M:2, A:3, T:2, E:1, I:1, C:1). P = 10! / (2! × 3! × 2!) = 3,628,800 / (2 × 6 × 2) = 151,200.",
    "skill": "Permutaciones con repetición",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Combinatoria",
    "subtopic": "Análisis combinatorio"
  },
  {
    "id": "raz-bac-53",
    "sectionId": 3,
    "number": 53,
    "text": "¿De cuántas maneras pueden distribuirse 8 caramelos idénticos entre 3 niños diferentes?",
    "options": [
      "45 maneras",
      "56 maneras",
      "24 maneras",
      "120 maneras"
    ],
    "correctIndex": 0,
    "explanation": "Combinaciones con repetición (método de barras y estrellas): CR(n, k) = C(k + n - 1, n - 1) = C(8 + 3 - 1, 3 - 1) = C(10, 2) = 45.",
    "skill": "Combinaciones con repetición",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Combinatoria",
    "subtopic": "Barras y estrellas"
  },
  {
    "id": "raz-bac-54",
    "sectionId": 3,
    "number": 54,
    "text": "En una bolsa hay 3 bolas rojas y 2 bolas blancas. Si se extraen 2 bolas consecutivamente sin reemplazo, ¿cuál es la probabilidad de que ambas sean rojas?",
    "options": [
      "3/10",
      "9/25",
      "6/20",
      "1/5"
    ],
    "correctIndex": 0,
    "explanation": "Probabilidad de la primera roja: 3/5. Probabilidad de la segunda roja: 2/4. P = (3/5) × (2/4) = 6/20 = 3/10.",
    "skill": "Probabilidad sin reemplazo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Regla de la multiplicación"
  },
  {
    "id": "raz-bac-55",
    "sectionId": 3,
    "number": 55,
    "text": "Dada la regla de Bayes, si una prueba médica tiene 99% de sensibilidad (detecta la enfermedad si está presente) y 95% de especificidad (da negativo si está sano), pero la enfermedad solo afecta al 1% de la población (prevalencia = 0.01), ¿cuál es aproximadamente la probabilidad de estar realmente enfermo si la prueba da positivo?",
    "options": [
      "Aproximadamente 16.6% (1 de cada 6 personas)",
      "Exactamente 99%",
      "95%",
      "50%"
    ],
    "correctIndex": 0,
    "explanation": "P(Positivo) = (0.01)(0.99) + (0.99)(0.05) = 0.0099 + 0.0495 = 0.0594. Luego P(Enfermo|Positivo) = 0.0099 / 0.0594 ≈ 0.1667 (16.7%). Paradoja del falso positivo por baja prevalencia.",
    "skill": "Teorema de Bayes aplicado",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Inferencia bayesiana"
  },
  {
    "id": "raz-bac-56",
    "sectionId": 3,
    "number": 56,
    "text": "¿En qué consiste la célebre paradoja probabilística del problema de Monty Hall?",
    "options": [
      "El concursante duplica su probabilidad de ganar el automóvil (de 1/3 a 2/3) si decide cambiar la puerta elegida inicialmente tras revelarse una cabra",
      "No importa si cambia o se queda, la probabilidad siempre es 50%",
      "Quedarse con la puerta inicial tiene 75% de probabilidad",
      "Cambiar de puerta reduce la probabilidad a cero"
    ],
    "correctIndex": 0,
    "explanation": "Al inicio hay 1/3 de elegir el auto y 2/3 de elegir cabra. El presentador, que sabe dónde está el auto, siempre abre una puerta con cabra de las restantes, concentrando los 2/3 en la otra puerta no elegida.",
    "skill": "Problema de Monty Hall",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Probabilidad condicional"
  },
  {
    "id": "raz-bac-57",
    "sectionId": 3,
    "number": 57,
    "text": "Al lanzar un dado equilibrado de 6 caras, sabemos que el resultado obtenido fue un número par. ¿Cuál es la probabilidad condicional de que haya sido el número 6?",
    "options": [
      "1/3",
      "1/6",
      "1/2",
      "2/3"
    ],
    "correctIndex": 0,
    "explanation": "El espacio muestral reducido al saber que es par es {2, 4, 6} (3 casos posibles equiprobables). El 6 es 1 de esos 3 casos: P = 1/3.",
    "skill": "Espacio muestral condicionado",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Probabilidad condicional simple"
  },
  {
    "id": "raz-bac-58",
    "sectionId": 3,
    "number": 58,
    "text": "Dos eventos A y B son estadísticamente independientes si y solo si cumplen la relación formal:",
    "options": [
      "P(A ∩ B) = P(A) × P(B)",
      "P(A ∪ B) = P(A) + P(B)",
      "P(A | B) = 0",
      "P(A) = P(B)"
    ],
    "correctIndex": 0,
    "explanation": "La independencia estadística formal estipula que la ocurrencia del evento B no altera la probabilidad de A: P(A | B) = P(A), lo que implica P(A ∩ B) = P(A)P(B).",
    "skill": "Independencia de eventos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Eventos independientes"
  },
  {
    "id": "raz-bac-59",
    "sectionId": 3,
    "number": 59,
    "text": "¿Cuál es el valor esperado (esperanza matemática) del puntaje obtenido al lanzar un dado regular justo de 6 caras?",
    "options": [
      "3.5",
      "3.0",
      "4.0",
      "3.6"
    ],
    "correctIndex": 0,
    "explanation": "E[X] = (1 + 2 + 3 + 4 + 5 + 6) / 6 = 21 / 6 = 3.5.",
    "skill": "Esperanza matemática",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Variables aleatorias discretas"
  },
  {
    "id": "raz-bac-60",
    "sectionId": 3,
    "number": 60,
    "text": "Si una variable aleatoria sigue una distribución binomial B(n = 100, p = 0.2), ¿cuál es su media (esperanza) y su varianza?",
    "options": [
      "Media = 20 ; Varianza = 16",
      "Media = 20 ; Varianza = 20",
      "Media = 25 ; Varianza = 15",
      "Media = 10 ; Varianza = 8"
    ],
    "correctIndex": 0,
    "explanation": "Para la distribución binomial: Media = np = 100 × 0.2 = 20. Varianza = np(1 - p) = 100 × 0.2 × 0.8 = 16.",
    "skill": "Distribución binomial",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad y Estadística",
    "subtopic": "Parámetros binomiales"
  },
  {
    "id": "raz-bac-61",
    "sectionId": 3,
    "number": 61,
    "text": "¿Qué teorema de la teoría de probabilidad fundamenta que la suma o promedio de un gran número de variables aleatorias independientes e idénticamente distribuidas tiende hacia una distribución normal gaussiana?",
    "options": [
      "Teorema Central del Límite",
      "Ley Fuerte de los Grandes Números",
      "Teorema de Chebyshev",
      "Lema de Borel-Cantelli"
    ],
    "correctIndex": 0,
    "explanation": "El Teorema Central del Límite es la piedra angular de la inferencia estadística moderna y el análisis de errores.",
    "skill": "Teorema Central del Límite",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad y Estadística",
    "subtopic": "Distribución normal"
  },
  {
    "id": "raz-bac-62",
    "sectionId": 3,
    "number": 62,
    "text": "La 'Ley de los Grandes Números' garantiza empíricamente que:",
    "options": [
      "La frecuencia relativa de un suceso converge a su probabilidad teórica a medida que el número de repeticiones tiende a infinito",
      "Si sale cara cinco veces consecutivas, necesariamente debe salir cruz en el siguiente tiro",
      "Los casinos nunca pueden quebrar",
      "Los promedios muestrales son siempre números enteros"
    ],
    "correctIndex": 0,
    "explanation": "La ley de los grandes números rige la estabilidad estadística a largo plazo sin validar la falacia del jugador a corto plazo.",
    "skill": "Ley de los Grandes Números",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Convergencia estocástica"
  },
  {
    "id": "raz-bac-63",
    "sectionId": 3,
    "number": 63,
    "text": "¿Qué es la 'falacia del jugador' (Monte Carlo fallacy)?",
    "options": [
      "Creer erróneamente que los resultados pasados de eventos independientes influyen en la probabilidad de los eventos futuros (ej. 'ya salió mucho rojo, ahora toca negro')",
      "Apostar únicamente a los números impares en la ruleta",
      "Creer que la probabilidad teórica es siempre cero",
      "Calcular la media en lugar de la mediana"
    ],
    "correctIndex": 0,
    "explanation": "Cada tirada de una ruleta justa o moneda es un evento independiente sin memoria del historial previo.",
    "skill": "Sesgos probabilísticos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Pensamiento Crítico",
    "subtopic": "Falacia del jugador"
  },
  {
    "id": "raz-bac-64",
    "sectionId": 3,
    "number": 64,
    "text": "Si se ordenan aleatoriamente las letras de la palabra 'ROMA', ¿cuál es la probabilidad de que la primera letra sea una vocal?",
    "options": [
      "2/4 = 1/2 (50%)",
      "1/4",
      "3/4",
      "1/3"
    ],
    "correctIndex": 0,
    "explanation": "La palabra tiene 4 letras, de las cuales 2 son vocales (O, A). La probabilidad de que la primera posición sea vocal es 2/4 = 1/2.",
    "skill": "Probabilidad en permutaciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Conteo y simetría"
  },
  {
    "id": "raz-bac-65",
    "sectionId": 3,
    "number": 65,
    "text": "En una rifa de 1000 boletos numerados del 000 al 999, ¿cuál es la probabilidad de ganar si una persona compra todos los boletos cuyos dígitos son todos pares?",
    "options": [
      "125 / 1000 = 1/8 (12.5%)",
      "500 / 1000",
      "250 / 1000",
      "100 / 1000"
    ],
    "correctIndex": 0,
    "explanation": "Hay 5 dígitos pares: {0, 2, 4, 6, 8}. Cantidad de boletos con 3 dígitos pares = 5 × 5 × 5 = 125 boletos. P = 125 / 1000 = 1/8.",
    "skill": "Principio multiplicativo y probabilidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Espacio muestral combinatorio"
  },
  {
    "id": "raz-bac-66",
    "sectionId": 3,
    "number": 66,
    "text": "Si se corta un cono circular recto mediante un plano oblicuo que corta todas sus generatrices sin ser paralelo a la base ni a ninguna generatriz, la curva de corte es:",
    "options": [
      "Una elipse",
      "Una parábola",
      "Una hipérbola",
      "Una circunferencia perfecta"
    ],
    "correctIndex": 0,
    "explanation": "Las secciones cónicas dependen del ángulo del plano: perpendicular al eje da circunferencia, oblicuo a todas las generatrices produce una elipse.",
    "skill": "Secciones cónicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica y Plana",
    "subtopic": "Cortes en el cono"
  },
  {
    "id": "raz-bac-67",
    "sectionId": 3,
    "number": 67,
    "text": "¿Qué curva cónica resulta si el plano de corte es exactamente paralelo a una de las generatrices del cono recto?",
    "options": [
      "Una parábola",
      "Una hipérbola",
      "Una elipse",
      "Un par de rectas secantes"
    ],
    "correctIndex": 0,
    "explanation": "Cuando el ángulo del plano es idéntico a la pendiente de la generatriz respecto al eje, la sección cónica resultante es una parábola.",
    "skill": "Geometría de la parábola",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica y Plana",
    "subtopic": "Secciones cónicas"
  },
  {
    "id": "raz-bac-68",
    "sectionId": 3,
    "number": 68,
    "text": "Si se corta un cubo con un plano que pasa por los puntos medios de 6 aristas consecutivas que rodean su centro, la figura resultante del corte es:",
    "options": [
      "Un hexágono regular",
      "Un pentágono",
      "Un cuadrado perfecto",
      "Un triángulo equilátero"
    ],
    "correctIndex": 0,
    "explanation": "Es el célebre corte hexagonal simétrico del cubo que interseca exactamente seis caras formando un hexágono regular.",
    "skill": "Secciones planas del cubo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Geometría tridimensional"
  },
  {
    "id": "raz-bac-69",
    "sectionId": 3,
    "number": 69,
    "text": "¿Cuál es el número total de vértices, aristas y caras de un dodecaedro regular?",
    "options": [
      "20 vértices, 30 aristas y 12 caras pentagonales",
      "12 vértices, 30 aristas y 20 caras",
      "8 vértices, 12 aristas y 6 caras",
      "24 vértices, 36 aristas y 12 caras"
    ],
    "correctIndex": 0,
    "explanation": "El dodecaedro regular está formado por 12 pentágonos regulares, cumpliendo la característica de Euler: V - A + C = 20 - 30 + 12 = 2.",
    "skill": "Sólidos platónicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Dodecaedro regular"
  },
  {
    "id": "raz-bac-70",
    "sectionId": 3,
    "number": 70,
    "text": "La fórmula poliedral de Euler para cualquier poliedro simple convexo cerrado establece la relación matemática:",
    "options": [
      "V - A + C = 2 (Vértices - Aristas + Caras = 2)",
      "V + A - C = 2",
      "V + A + C = 0",
      "V × C = A²"
    ],
    "correctIndex": 0,
    "explanation": "La característica de Euler χ = V - A + C = 2 es un invariante topológico universal para poliedros homeomorfos a la esfera.",
    "skill": "Característica de Euler",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Topología combinatoria"
  },
  {
    "id": "raz-bac-71",
    "sectionId": 3,
    "number": 71,
    "text": "Un icosaedro regular posee 20 caras triangulares equiláteras congruentes. ¿Cuántos vértices tiene?",
    "options": [
      "12 vértices",
      "20 vértices",
      "30 vértices",
      "24 vértices"
    ],
    "correctIndex": 0,
    "explanation": "Cada triángulo tiene 3 aristas: 20 × 3 = 60; como cada arista es compartida por 2 caras, A = 30. Por Euler: V = 2 + A - C = 2 + 30 - 20 = 12 vértices.",
    "skill": "Icosaedro regular",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Sólidos platónicos"
  },
  {
    "id": "raz-bac-72",
    "sectionId": 3,
    "number": 72,
    "text": "Si proyectamos ortogonalmente un cubo sobre un plano perpendicular a una de sus diagonales principales, ¿qué contorno poligonal exterior se obtiene?",
    "options": [
      "Un hexágono regular",
      "Un cuadrado",
      "Un octágono",
      "Un triángulo"
    ],
    "correctIndex": 0,
    "explanation": "Al mirar un cubo alineado exactamente a lo largo de su gran diagonal espacial, sus 6 aristas externas forman la silueta de un hexágono regular.",
    "skill": "Proyección diédrica axial",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Vistas axonométricas"
  },
  {
    "id": "raz-bac-73",
    "sectionId": 3,
    "number": 73,
    "text": "Al girar un triángulo rectángulo de catetos 3 cm y 4 cm alrededor del cateto de 4 cm como eje, ¿cuál es el volumen del cono formado?",
    "options": [
      "12π cm³",
      "16π cm³",
      "36π cm³",
      "24π cm³"
    ],
    "correctIndex": 0,
    "explanation": "El radio de la base es r = 3 cm y la altura es h = 4 cm. Volumen = (1/3)πr²h = (1/3)π(9)(4) = 12π cm³.",
    "skill": "Sólidos de revolución",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Físico-Matemático",
    "subtopic": "Volumen de conos"
  },
  {
    "id": "raz-bac-74",
    "sectionId": 3,
    "number": 74,
    "text": "¿Cuántos ejes de simetría axial tiene un hexágono regular en el plano?",
    "options": [
      "6 ejes de simetría (3 que unen vértices opuestos y 3 que unen puntos medios de lados opuestos)",
      "12 ejes",
      "3 ejes",
      "4 ejes"
    ],
    "correctIndex": 0,
    "explanation": "Un polígono regular de n lados posee exactamente n ejes de simetría en el plano; para n = 6 son 6 ejes.",
    "skill": "Simetría de polígonos regulares",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Abstracto",
    "subtopic": "Grupos diédricos"
  },
  {
    "id": "raz-bac-75",
    "sectionId": 3,
    "number": 75,
    "text": "En un sistema de coordenadas espaciales tridimensionales (x, y, z), ¿qué lugar geométrico representa la ecuación x² + y² + z² = 25?",
    "options": [
      "Una superficie esférica centrada en el origen con radio r = 5",
      "Un cilindro circular infinito",
      "Un cono de vértice en el origen",
      "Un plano inclinado"
    ],
    "correctIndex": 0,
    "explanation": "Es la ecuación canónica estándar de la esfera centrada en (0,0,0) de radio r = √25 = 5.",
    "skill": "Geometría analítica espacial",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Geometría Analítica y Plana",
    "subtopic": "Superficies cuádricas"
  },
  {
    "id": "raz-bac-76",
    "sectionId": 3,
    "number": 76,
    "text": "¿Qué poliedro dual se obtiene al unir los centros de las caras de un cubo regular?",
    "options": [
      "Un octaedro regular",
      "Otro cubo idéntico",
      "Un tetraedro",
      "Un dodecaedro"
    ],
    "correctIndex": 0,
    "explanation": "El octaedro (8 caras triangulares, 6 vértices) es el poliedro dual conjugado del cubo (6 caras cuadradas, 8 vértices).",
    "skill": "Dualidad de poliedros",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Poliedros duales"
  },
  {
    "id": "raz-bac-77",
    "sectionId": 3,
    "number": 77,
    "text": "¿Cuál es el poliedro platónico auto-dual (cuyo dual es idéntico a sí mismo)?",
    "options": [
      "El tetraedro regular (4 caras, 4 vértices)",
      "El cubo",
      "El octaedro",
      "El icosaedro"
    ],
    "correctIndex": 0,
    "explanation": "El tetraedro tiene 4 caras y 4 vértices; al conectar los centros de sus caras se genera otro tetraedro invertido.",
    "skill": "Auto-dualidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Tetraedro"
  },
  {
    "id": "raz-bac-78",
    "sectionId": 3,
    "number": 78,
    "text": "En el sistema de proyecciones diédricas del primer cuadrante (sistema europeo), la vista lateral izquierda del objeto se dibuja reglamentariamente:",
    "options": [
      "A la derecha de la vista frontal (alzado)",
      "A la izquierda de la vista frontal",
      "Debajo del alzado",
      "Encima del alzado"
    ],
    "correctIndex": 0,
    "explanation": "En el método de proyección del primer diedro (ISO europeo), la vista observada desde la izquierda se proyecta y plasma a la derecha del alzado.",
    "skill": "Dibujo técnico normalizado",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Sistemas de proyección ISO"
  },
  {
    "id": "raz-bac-79",
    "sectionId": 3,
    "number": 79,
    "text": "¿Cuántos grados mide el ángulo diedro interno entre dos caras contiguas de un cubo?",
    "options": [
      "90°",
      "60°",
      "120°",
      "45°"
    ],
    "correctIndex": 0,
    "explanation": "Las caras de un cubo son mutuamente perpendiculares, formando ángulos diedros rectos de 90° en todas sus aristas.",
    "skill": "Ángulos diedros",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Razonamiento Espacial",
    "subtopic": "Geometría del espacio"
  },
  {
    "id": "raz-bac-80",
    "sectionId": 3,
    "number": 80,
    "text": "En la paradoja de Zenón de Elea sobre 'Aquiles y la tortuga', la falacia conceptual subyacente radica en:",
    "options": [
      "Confundir la divisibilidad infinita matemática de un intervalo de espacio-tiempo con la imposibilidad física de recorrerlo en un tiempo finito",
      "Afirmar que la tortuga corre a mayor velocidad que el héroe",
      "Desconocer el teorema de Pitágoras",
      "Suponer que el espacio es curvo"
    ],
    "correctIndex": 0,
    "explanation": "Una suma infinita de intervalos temporales estrictamente decrecientes converge a un límite finito (serie geométrica convergente), permitiendo a Aquiles superar a la tortuga en un instante temporal finito.",
    "skill": "Paradojas lógicas clásicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Epistemología y Pensamiento Crítico",
    "subtopic": "Zenón de Elea"
  },
  {
    "id": "raz-bac-81",
    "sectionId": 3,
    "number": 81,
    "text": "¿Cuál es la función booleana simplificada de F(A, B) = (A + B)·(A + B')?",
    "options": [
      "A",
      "B",
      "A·B",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Por distributividad de la suma lógica o producto notable booleano: (A + B)·(A + B') = A + (B·B') = A + 0 = A.",
    "skill": "Álgebra booleana formal",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Proposicional",
    "subtopic": "Leyes distributivas"
  },
  {
    "id": "raz-bac-82",
    "sectionId": 3,
    "number": 82,
    "text": "Dada la función proposicional P(x): 'x² - 4 = 0' en el dominio de los números reales ℝ, ¿cuál es el conjunto de verdad de P(x)?",
    "options": [
      "{2, -2}",
      "{2}",
      "{4, -4}",
      "{16}"
    ],
    "correctIndex": 0,
    "explanation": "Las raíces reales de la ecuación cuadrática x² = 4 son exactamente x = 2 y x = -2.",
    "skill": "Funciones proposicionales",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica de Predicados",
    "subtopic": "Conjunto de verdad"
  },
  {
    "id": "raz-bac-83",
    "sectionId": 3,
    "number": 83,
    "text": "En una permutación caótica o desbarajuste (derangement) de 3 elementos {1, 2, 3}, ¿cuántas permutaciones no dejan ningún elemento en su posición original?",
    "options": [
      "2 permutaciones",
      "1 permutación",
      "3 permutaciones",
      "6 permutaciones"
    ],
    "correctIndex": 0,
    "explanation": "Los desbarajustes de 3 elementos son D_3 = 3!(1 - 1/1! + 1/2! - 1/3!) = 6(1/2 - 1/6) = 6(2/6) = 2 (específicamente (2,3,1) y (3,1,2)).",
    "skill": "Desbarajustes combinatorios",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Combinatoria",
    "subtopic": "Permutaciones sin puntos fijos"
  },
  {
    "id": "raz-bac-84",
    "sectionId": 3,
    "number": 84,
    "text": "¿Cuál es el valor del número combinatorio C(n, 0) + C(n, 1) + ... + C(n, n) para cualquier entero positivo n?",
    "options": [
      "2ⁿ",
      "n!",
      "n²",
      "2n"
    ],
    "correctIndex": 0,
    "explanation": "Por el teorema del binomio de Newton evaluado en x = 1, y = 1: (1 + 1)ⁿ = 2ⁿ.",
    "skill": "Identidades del binomio de Newton",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Combinatoria",
    "subtopic": "Sumas combinatorias"
  },
  {
    "id": "raz-bac-85",
    "sectionId": 3,
    "number": 85,
    "text": "Si una variable aleatoria continua X tiene función de densidad de probabilidad uniforme en el intervalo [0, 10], ¿cuál es la probabilidad P(2 ≤ X ≤ 7)?",
    "options": [
      "0.50 (50%)",
      "0.70",
      "0.20",
      "0.35"
    ],
    "correctIndex": 0,
    "explanation": "Para la distribución continua uniforme: P(a ≤ X ≤ b) = (b - a) / (B - A) = (7 - 2) / (10 - 0) = 5 / 10 = 0.50.",
    "skill": "Distribución uniforme continua",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad y Estadística",
    "subtopic": "Densidad continua"
  },
  {
    "id": "raz-bac-86",
    "sectionId": 3,
    "number": 86,
    "text": "¿Qué condición necesaria y suficiente debe cumplir una matriz cuadrada A para que sea invertible (admita matriz inversa A⁻¹)?",
    "options": [
      "Su determinante debe ser estrictamente distinto de cero (det(A) ≠ 0)",
      "Su traza debe ser positiva",
      "Todos sus elementos deben ser positivos",
      "Debe ser simétrica"
    ],
    "correctIndex": 0,
    "explanation": "Una matriz es regular o invertible si y solo si sus filas (o columnas) son linealmente independientes, lo que equivale a det(A) ≠ 0.",
    "skill": "Álgebra lineal matricial",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra Lineal y Geometría",
    "subtopic": "Determinantes e inversas"
  },
  {
    "id": "raz-bac-87",
    "sectionId": 3,
    "number": 87,
    "text": "El rango de una matriz representa:",
    "options": [
      "El número máximo de filas o columnas linealmente independientes que posee",
      "El producto de los elementos de su diagonal principal",
      "La cantidad total de ceros",
      "La dimensión de su espacio nulo"
    ],
    "correctIndex": 0,
    "explanation": "Por definición de álgebra lineal, el rango coincide con la dimensión del espacio generado por las filas o columnas de la matriz.",
    "skill": "Rango matricial",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Álgebra Lineal y Geometría",
    "subtopic": "Espacios vectoriales"
  },
  {
    "id": "raz-bac-88",
    "sectionId": 3,
    "number": 88,
    "text": "En un espacio métrico, un conjunto se define formalmente como 'cerrado' si:",
    "options": [
      "Contiene a todos sus puntos de acumulación (o su complemento es un conjunto abierto)",
      "Es acotado",
      "Es finito",
      "Está contenido en una bola abierta"
    ],
    "correctIndex": 0,
    "explanation": "Por axioma topológico, un conjunto F es cerrado si y solo si contiene todos los límites de sus sucesiones convergentes.",
    "skill": "Topología de espacios métricos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Análisis Matemático",
    "subtopic": "Conjuntos cerrados"
  },
  {
    "id": "raz-bac-89",
    "sectionId": 3,
    "number": 89,
    "text": "¿Qué postula el Teorema del Valor Medio de Lagrange para una función f derivable en [a, b]?",
    "options": [
      "Existe al menos un punto c en (a, b) tal que f'(c) = [f(b) - f(a)] / (b - a)",
      "La función alcanza su valor máximo en c",
      "La derivada es nula en todos los puntos",
      "f(a) debe ser igual a f(b)"
    ],
    "correctIndex": 0,
    "explanation": "Garantiza geométricamente que existe al menos un punto donde la recta tangente es paralela a la recta secante que une los extremos.",
    "skill": "Cálculo diferencial riguroso",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Cálculo y Funciones",
    "subtopic": "Teorema del Valor Medio"
  },
  {
    "id": "raz-bac-90",
    "sectionId": 3,
    "number": 90,
    "text": "La regla de la cadena para la derivada de una función compuesta (f ∘ g)'(x) se formula matemáticamente como:",
    "options": [
      "f'(g(x)) · g'(x)",
      "f'(x) · g'(x)",
      "f'(g'(x))",
      "f(x) · g'(x) + f'(x) · g(x)"
    ],
    "correctIndex": 0,
    "explanation": "La derivada de la composición es el producto de la derivada exterior evaluada en la función interior por la derivada de la función interior.",
    "skill": "Derivada de funciones compuestas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Cálculo y Funciones",
    "subtopic": "Regla de la cadena"
  },
  {
    "id": "raz-bac-91",
    "sectionId": 3,
    "number": 91,
    "text": "En lógica difusa (Fuzzy Logic), el grado de pertenencia de un elemento a un conjunto difuso:",
    "options": [
      "Es un número real continuo dentro del intervalo cerrado [0, 1]",
      "Solo puede valer exactamente 0 o 1",
      "Es siempre mayor que 1",
      "Es un número imaginario"
    ],
    "correctIndex": 0,
    "explanation": "A diferencia de la lógica bivalente aristotélica, la lógica difusa modela la gradualidad y la incertidumbre en el continuo [0, 1].",
    "skill": "Lógica difusa",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Lógica Formal",
    "subtopic": "Conjuntos difusos"
  },
  {
    "id": "raz-bac-92",
    "sectionId": 3,
    "number": 92,
    "text": "¿Qué es una relación de orden estricto?",
    "options": [
      "Una relación binaria que es irreflexiva, asimétrica y transitiva",
      "Una relación reflexiva y simétrica",
      "Una relación de equivalencia",
      "Una función biyectiva"
    ],
    "correctIndex": 0,
    "explanation": "El orden estricto (como '<' en los reales) no admite reflexividad (ningún número es menor que sí mismo) ni simetría.",
    "skill": "Relaciones de orden estricto",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Conjuntos",
    "subtopic": "Órdenes matemáticos"
  },
  {
    "id": "raz-bac-93",
    "sectionId": 3,
    "number": 93,
    "text": "En un grafo conexo no dirigido, ¿qué condición caracteriza la existencia de un camino euleriano (que recorra todas las aristas exactamente una vez)?",
    "options": [
      "El grafo tiene exactamente cero o dos vértices de grado impar",
      "Todos los vértices deben tener grado impar",
      "El grafo debe tener forma de árbol",
      "Debe ser un grafo bipartito completo"
    ],
    "correctIndex": 0,
    "explanation": "Teorema clásico de Euler (1736, puentes de Königsberg): si tiene 0 vértices impares es un ciclo euleriano cerrado; si tiene 2 vértices impares es un camino abierto.",
    "skill": "Teoría de grafos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Matemática Discreta",
    "subtopic": "Grafos eulerianos"
  },
  {
    "id": "raz-bac-94",
    "sectionId": 3,
    "number": 94,
    "text": "¿Qué es un árbol en la teoría matemática de grafos?",
    "options": [
      "Un grafo conexo y acíclico (que no contiene ciclos cerrados)",
      "Un grafo donde todos los vértices tienen grado 2",
      "Un grafo con ciclos dirigidos infinitos",
      "Un grafo no conexo"
    ],
    "correctIndex": 0,
    "explanation": "Un árbol con V vértices tiene siempre exactamente V - 1 aristas y una única trayectoria simple entre cualquier par de vértices.",
    "skill": "Árboles y grafos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Matemática Discreta",
    "subtopic": "Estructuras de árboles"
  },
  {
    "id": "raz-bac-95",
    "sectionId": 3,
    "number": 95,
    "text": "¿Cuál es el valor del límite fundamental trigonométrico lim(x → 0) [sen(x) / x]?",
    "options": [
      "1",
      "0",
      "Infinito",
      "No existe"
    ],
    "correctIndex": 0,
    "explanation": "Es el límite trigonométrico base del cálculo que permite demostrar que la derivada del seno es el coseno.",
    "skill": "Límites trigonométricos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Cálculo y Funciones",
    "subtopic": "Límites indeterminados"
  },
  {
    "id": "raz-bac-96",
    "sectionId": 3,
    "number": 96,
    "text": "En teoría de números, dos enteros a y b son congruentes módulo m (a ≡ b mod m) si y solo si:",
    "options": [
      "m divide exactamente a la diferencia (a - b)",
      "a y b son números primos entre sí",
      "a es múltiplo de b",
      "m es igual a a + b"
    ],
    "correctIndex": 0,
    "explanation": "Definición fundamental de Gauss para la aritmética modular: a - b = k·m para algún entero k.",
    "skill": "Aritmética modular",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Números",
    "subtopic": "Congruencias lineales"
  },
  {
    "id": "raz-bac-97",
    "sectionId": 3,
    "number": 97,
    "text": "¿Cuál es el resto que se obtiene al dividir 2¹⁰⁰ entre 3 aplicando congruencias?",
    "options": [
      "1",
      "2",
      "0",
      "No se puede calcular"
    ],
    "correctIndex": 0,
    "explanation": "Notamos que 2 ≡ -1 (mod 3). Por ende, 2¹⁰⁰ ≡ (-1)¹⁰⁰ ≡ 1 (mod 3). El resto es 1.",
    "skill": "Aritmética modular de potencias",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Números",
    "subtopic": "Pequeño Teorema de Fermat"
  },
  {
    "id": "raz-bac-98",
    "sectionId": 3,
    "number": 98,
    "text": "¿Qué establece el Pequeño Teorema de Fermat para un número primo p y un entero a no divisible por p?",
    "options": [
      "a^(p - 1) ≡ 1 (mod p)",
      "a^p ≡ 0 (mod p)",
      "p^(a - 1) ≡ 1 (mod a)",
      "a + p es primo"
    ],
    "correctIndex": 0,
    "explanation": "Teorema pilar de la teoría algebraica de números y la base de los algoritmos de criptografía moderna como RSA.",
    "skill": "Pequeño Teorema de Fermat",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Números",
    "subtopic": "Primalidad y criptografía"
  },
  {
    "id": "raz-bac-99",
    "sectionId": 3,
    "number": 99,
    "text": "En un plano se tienen 10 puntos tales que no hay 3 colineales. ¿Cuántos triángulos distintos con vértices en esos puntos se pueden trazar?",
    "options": [
      "120 triángulos",
      "720 triángulos",
      "90 triángulos",
      "240 triángulos"
    ],
    "correctIndex": 0,
    "explanation": "Combinaciones de 10 tomados de 3 en 3: C(10, 3) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 triángulos.",
    "skill": "Geometría combinatoria",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Combinatoria",
    "subtopic": "Conteo de triángulos"
  },
  {
    "id": "raz-bac-100",
    "sectionId": 3,
    "number": 100,
    "text": "Si la probabilidad de que un arquero acierte en la diana en cada disparo es 0.8 de forma independiente, ¿cuál es la probabilidad de que falle por primera vez en su cuarto disparo?",
    "options": [
      "(0.8)³ × 0.2 = 0.1024",
      "(0.8)⁴",
      "0.2 × 4",
      "(0.2)³ × 0.8"
    ],
    "correctIndex": 0,
    "explanation": "Distribución geométrica: tres aciertos consecutivos seguidos de un fallo: P = 0.8 × 0.8 × 0.8 × 0.2 = 0.1024.",
    "skill": "Distribución geométrica",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Probabilidad",
    "subtopic": "Variables aleatorias geométricas"
  }
];
