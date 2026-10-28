import { Section, Question } from '../types';

export const DIAGNOSTIC_TITLE = "PRUEBAS DE AYUDA DE ESTUDIO";
export const DIAGNOSTIC_SUBTITLE = "EVALUACIÓN DIAGNÓSTICA FUNDAMENTAL";
export const DIAGNOSTIC_DESCRIPTION = 
  "📘 PRUEBAS DE AYUDA DE ESTUDIO\n\n" +
  "EVALUACIÓN DIAGNÓSTICA FUNDAMENTAL\n\n" +
  "📌 TOTAL: 30 PREGUNTAS\n" +
  "🏆 PUNTAJE MÁXIMO: 30 PUNTOS\n\n" +
  "INSTRUCCIONES:\n" +
  "• Lee cuidadosamente cada pregunta.\n" +
  "• Selecciona una sola respuesta.\n" +
  "• Todas las preguntas son obligatorias.\n" +
  "• Cada respuesta correcta vale 1 punto.\n\n" +
  "¡DEMUESTRA TUS CONOCIMIENTOS Y DA LO MEJOR DE TI!";

export const CONFIRMATION_MESSAGE = 
  "¡EVALUACIÓN COMPLETADA!\n\n" +
  "Gracias por participar en PRUEBAS DE AYUDA DE ESTUDIO. " +
  "Sigue aprendiendo, practicando y superándote cada día.";

export const INITIAL_SECTIONS: Section[] = [
  {
    id: 1,
    title: "01 | OPERACIONES MATEMÁTICAS",
    shortTitle: "Matemáticas",
    icon: "Calculator",
    description: "ÁREA MATEMÁTICA | SUMA, RESTA, MULTIPLICACIÓN Y DIVISIÓN",
    questions: [
      {
        id: "mat-1",
        sectionId: 1,
        number: 1,
        text: "¿Cuánto es 248 + 376?",
        options: ["614", "624", "634", "644"],
        correctIndex: 1,
        explanation: "Sumamos por unidades: 8 + 6 = 14 (escribimos 4 y llevamos 1). Decenas: 4 + 7 + 1 = 12 (escribimos 2 y llevamos 1). Centenas: 2 + 3 + 1 = 6. Resultado final: 624.",
        skill: "Adición con llevadas",
        difficulty: "Fácil"
      },
      {
        id: "mat-2",
        sectionId: 1,
        number: 2,
        text: "Calcula: 1485 + 2769.",
        options: ["4154", "4254", "4354", "4454"],
        correctIndex: 1,
        explanation: "Unidades: 5 + 9 = 14 (4 llevamos 1). Decenas: 8 + 6 + 1 = 15 (5 llevamos 1). Centenas: 4 + 7 + 1 = 12 (2 llevamos 1). Millares: 1 + 2 + 1 = 4. Por tanto, 1485 + 2769 = 4254.",
        skill: "Adición de 4 cifras",
        difficulty: "Intermedio"
      },
      {
        id: "mat-3",
        sectionId: 1,
        number: 3,
        text: "¿Cuánto es 903 - 478?",
        options: ["415", "425", "435", "445"],
        correctIndex: 1,
        explanation: "Restamos con préstamos: en unidades 13 - 8 = 5. Como el 0 prestó, queda en 9 de las centenas: 9 - 7 = 2 en decenas. En centenas 8 - 4 = 4. Resultado: 425.",
        skill: "Sustracción con ceros intermedios",
        difficulty: "Intermedio"
      },
      {
        id: "mat-4",
        sectionId: 1,
        number: 4,
        text: "Resuelve: 2000 - 1286.",
        options: ["714", "724", "814", "824"],
        correctIndex: 0,
        explanation: "Unidades: 10 - 6 = 4. Decenas: 9 - 8 = 1. Centenas: 9 - 2 = 7. Millares: 1 - 1 = 0. Comprobación: 714 + 1286 = 2000. La respuesta correcta es 714.",
        skill: "Sustracción con números redondos",
        difficulty: "Intermedio"
      },
      {
        id: "mat-5",
        sectionId: 1,
        number: 5,
        text: "¿Cuánto es 36 × 24?",
        options: ["824", "864", "874", "884"],
        correctIndex: 1,
        explanation: "Multiplicamos 36 × 4 = 144. Luego 36 × 20 = 720. Sumamos los productos parciales: 144 + 720 = 864.",
        skill: "Multiplicación de dos cifras",
        difficulty: "Intermedio"
      },
      {
        id: "mat-6",
        sectionId: 1,
        number: 6,
        text: "Calcula: 125 × 16.",
        options: ["1500", "1800", "2000", "2200"],
        correctIndex: 2,
        explanation: "Un método ágil: 125 × 8 = 1000. Como 16 = 8 × 2, entonces 1000 × 2 = 2000. También: 125 × 16 = 2000.",
        skill: "Cálculo mental y multiplicación",
        difficulty: "Intermedio"
      },
      {
        id: "mat-7",
        sectionId: 1,
        number: 7,
        text: "¿Cuánto es 864 ÷ 12?",
        options: ["62", "68", "72", "78"],
        correctIndex: 2,
        explanation: "Dividimos: 86 ÷ 12 = 7 (porque 7 × 12 = 84), residuo 2. Bajamos el 4 para formar 24. 24 ÷ 12 = 2. Por tanto, el cociente exacto es 72.",
        skill: "División entre dos cifras",
        difficulty: "Intermedio"
      },
      {
        id: "mat-8",
        sectionId: 1,
        number: 8,
        text: "Resuelve: 1575 ÷ 25.",
        options: ["53", "63", "65", "73"],
        correctIndex: 1,
        explanation: "157 ÷ 25 = 6 (6 × 25 = 150), sobran 7. Bajamos el 5: 75 ÷ 25 = 3. El resultado es 63.",
        skill: "División exacta",
        difficulty: "Intermedio"
      },
      {
        id: "mat-9",
        sectionId: 1,
        number: 9,
        text: "Una tienda tiene 248 cuadernos y vende 97. ¿Cuántos quedan?",
        options: ["141", "151", "161", "171"],
        correctIndex: 1,
        explanation: "Problema de sustracción simple: Cuadernos iniciales (248) - cuadernos vendidos (97) = 151 cuadernos.",
        skill: "Resolución de problemas contextualizados",
        difficulty: "Fácil"
      },
      {
        id: "mat-10",
        sectionId: 1,
        number: 10,
        text: "Hay 18 paquetes con 12 lápices cada uno. ¿Cuántos lápices hay?",
        options: ["196", "206", "216", "226"],
        correctIndex: 2,
        explanation: "Problema de conteo multiplicativo: 18 × 12 = 18 × 10 + 18 × 2 = 180 + 36 = 216 lápices en total.",
        skill: "Resolución de problemas con producto",
        difficulty: "Fácil"
      }
    ]
  },
  {
    id: 2,
    title: "02 | LENGUAJE Y COMPRENSIÓN VERBAL",
    shortTitle: "Lenguaje",
    icon: "BookOpen",
    description: "ÁREA DE LENGUAJE | VOCABULARIO, GRAMÁTICA Y COMPRENSIÓN",
    questions: [
      {
        id: "len-11",
        sectionId: 2,
        number: 11,
        text: "¿Cuál es sinónimo de rápido?",
        options: ["Lento", "Veloz", "Débil", "Lejano"],
        correctIndex: 1,
        explanation: "Un sinónimo es una palabra que comparte un significado equivalente o afín. 'Veloz' significa que se mueve a gran velocidad, al igual que 'rápido'. 'Lento' es su antónimo.",
        skill: "Sinónimos y vocabulario",
        difficulty: "Fácil"
      },
      {
        id: "len-12",
        sectionId: 2,
        number: 12,
        text: "¿Cuál es el antónimo de generoso?",
        options: ["Amable", "Solidario", "Egoísta", "Alegre"],
        correctIndex: 2,
        explanation: "Un antónimo expresa el sentido opuesto. Una persona generosa comparte con los demás desinteresadamente, mientras que una persona egoísta antepone el interés propio y no comparte.",
        skill: "Antónimos y relaciones semánticas",
        difficulty: "Fácil"
      },
      {
        id: "len-13",
        sectionId: 2,
        number: 13,
        text: "Selecciona la palabra escrita correctamente.",
        options: ["Exepción", "Excepción", "Ecepción", "Exsepción"],
        correctIndex: 1,
        explanation: "La grafía normativa según la RAE para este término latino (exceptio) es 'Excepción', con 'xc'.",
        skill: "Ortografía literal (x y c)",
        difficulty: "Intermedio"
      },
      {
        id: "len-14",
        sectionId: 2,
        number: 14,
        text: "¿Cuál oración es correcta?",
        options: [
          "Los niño juega.",
          "Los niños juegan en el patio.",
          "Los niños juega.",
          "El niños juegan."
        ],
        correctIndex: 1,
        explanation: "Existe concordancia de número (plural) entre el artículo 'Los', el sustantivo 'niños' y el verbo en tercera persona del plural 'juegan'. Las otras opciones presentan discordancias gramaticales.",
        skill: "Concordancia gramatical",
        difficulty: "Fácil"
      },
      {
        id: "len-15",
        sectionId: 2,
        number: 15,
        text: "¿Qué tipo de palabra es cuidadosamente?",
        options: ["Sustantivo", "Verbo", "Adverbio", "Adjetivo"],
        correctIndex: 2,
        explanation: "Las palabras terminadas en '-mente' derivadas de adjetivos ('cuidadosa' + '-mente') funcionan como adverbios de modo, pues modifican al verbo indicando cómo se realiza la acción.",
        skill: "Categorías gramaticales",
        difficulty: "Intermedio"
      },
      {
        id: "len-16",
        sectionId: 2,
        number: 16,
        text: "En «María compró una mochila azul», ¿cuál es el sustantivo propio?",
        options: ["Compró", "Mochila", "Azul", "María"],
        correctIndex: 3,
        explanation: "'María' es un sustantivo propio porque nombra a una persona específica y se escribe con mayúscula inicial. 'Mochila' es sustantivo común, 'compró' es verbo y 'azul' es adjetivo.",
        skill: "Identificación de sustantivos",
        difficulty: "Fácil"
      },
      {
        id: "len-17",
        sectionId: 2,
        number: 17,
        text: "«El agua es esencial para los seres vivos. Las plantas la absorben por sus raíces y la utilizan para crecer». ¿Cuál es la idea principal?",
        options: [
          "Las plantas no necesitan agua.",
          "El agua es importante para los seres vivos y ayuda a las plantas a crecer.",
          "Las raíces producen agua.",
          "Todas las plantas viven en el agua."
        ],
        correctIndex: 1,
        explanation: "El texto enfatiza la vital importancia del agua para la vida biológica y ejemplifica cómo las plantas la utilizan para su desarrollo vital.",
        skill: "Comprensión lectora e idea principal",
        difficulty: "Fácil"
      },
      {
        id: "len-18",
        sectionId: 2,
        number: 18,
        text: "«Estudió con dedicación, _____ obtuvo una buena calificación». Elige el conector adecuado.",
        options: ["Aunque", "Por eso", "Sin embargo", "Mientras"],
        correctIndex: 1,
        explanation: "La relación entre 'estudiar con dedicación' y 'obtener buena calificación' es de causa-consecuencia positiva. El conector consecutivo idóneo es 'Por eso'.",
        skill: "Conectores lógicos textuales",
        difficulty: "Fácil"
      },
      {
        id: "len-19",
        sectionId: 2,
        number: 19,
        text: "¿Cuál es una oración interrogativa?",
        options: [
          "¡Qué día tan bonito!",
          "Cierra la puerta.",
          "¿A qué hora comienza la clase?",
          "La clase comienza temprano."
        ],
        correctIndex: 2,
        explanation: "Las oraciones interrogativas formulan preguntas directas y se delimitan por signos de interrogación (¿ ?). Las demás son exclamativa, imperativa y declarativa.",
        skill: "Modalidad de la oración",
        difficulty: "Fácil"
      },
      {
        id: "len-20",
        sectionId: 2,
        number: 20,
        text: "¿Cuál oración está ordenada correctamente?",
        options: [
          "En la estudian biblioteca los estudiantes.",
          "Los estudiantes estudian en la biblioteca.",
          "Biblioteca los en estudiantes estudian la.",
          "Estudian los la estudiantes biblioteca en."
        ],
        correctIndex: 1,
        explanation: "Sigue la estructura canónica del español: Sujeto ('Los estudiantes') + Núcleo del predicado / verbo ('estudian') + Complemento circunstancial de lugar ('en la biblioteca').",
        skill: "Sintaxis y ordenación oracional",
        difficulty: "Fácil"
      }
    ]
  },
  {
    id: 3,
    title: "03 | RAZONAMIENTO NUMÉRICO Y ABSTRACTO",
    shortTitle: "Razonamiento",
    icon: "Brain",
    description: "ÁREA DE RAZONAMIENTO | SECUENCIAS, LÓGICA Y PATRONES",
    questions: [
      {
        id: "raz-21",
        sectionId: 3,
        number: 21,
        text: "¿Qué número continúa? 3, 6, 9, 12, ...",
        options: ["14", "15", "16", "18"],
        correctIndex: 1,
        explanation: "La progresión aritmética tiene una diferencia constante de +3 (múltiplos de 3): 12 + 3 = 15.",
        skill: "Progresiones aritméticas simples",
        difficulty: "Fácil"
      },
      {
        id: "raz-22",
        sectionId: 3,
        number: 22,
        text: "Completa: 2, 4, 8, 16, ...",
        options: ["18", "24", "30", "32"],
        correctIndex: 3,
        explanation: "Es una progresión geométrica donde cada término es el doble del anterior (potencias de 2): 16 × 2 = 32.",
        skill: "Progresiones geométricas",
        difficulty: "Fácil"
      },
      {
        id: "raz-23",
        sectionId: 3,
        number: 23,
        text: "¿Qué número sigue? 5, 10, 17, 26, ...",
        options: ["35", "36", "37", "38"],
        correctIndex: 2,
        explanation: "Observamos las diferencias consecutivas: 10 - 5 = +5; 17 - 10 = +7; 26 - 17 = +9. La serie de diferencias suma números impares consecutivos (+5, +7, +9). El siguiente incremento es +11: 26 + 11 = 37. (También responde a n² + 1: 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, 6²+1=37).",
        skill: "Series de segundo orden",
        difficulty: "Desafiante"
      },
      {
        id: "raz-24",
        sectionId: 3,
        number: 24,
        text: "Todos los gatos son mamíferos. Misu es un gato. ¿Qué afirmación es correcta?",
        options: [
          "Misu es un ave.",
          "Misu es un mamífero.",
          "Todos los mamíferos son gatos.",
          "Misu no es un animal."
        ],
        correctIndex: 1,
        explanation: "Silogismo deductivo clásico (Modus Ponens): Premisa mayor: Todo Gato es Mamífero. Premisa menor: Misu es Gato. Conclusión necesaria: Misu es mamífero.",
        skill: "Lógica formal y silogismos",
        difficulty: "Fácil"
      },
      {
        id: "raz-25",
        sectionId: 3,
        number: 25,
        text: "¿Cuál elemento no pertenece al grupo?",
        options: ["Triángulo", "Cuadrado", "Círculo", "Kilogramo"],
        correctIndex: 3,
        explanation: "Triángulo, cuadrado y círculo son figuras geométricas bidimensionales. El kilogramo es una unidad de medida de masa del Sistema Internacional.",
        skill: "Clasificación y discriminación categórica",
        difficulty: "Fácil"
      },
      {
        id: "raz-26",
        sectionId: 3,
        number: 26,
        text: "Si A = 1, B = 2, C = 3 y se sigue el orden alfabético, ¿cuánto vale E?",
        options: ["4", "5", "6", "7"],
        correctIndex: 1,
        explanation: "Asignación ordinal del abecedario: A=1, B=2, C=3, D=4, E=5.",
        skill: "Codificación y equivalencias alfanuméricas",
        difficulty: "Fácil"
      },
      {
        id: "raz-27",
        sectionId: 3,
        number: 27,
        text: "¿Qué figura sigue el patrón? Círculo, cuadrado, círculo, cuadrado, ...",
        options: ["Triángulo", "Círculo", "Rectángulo", "Rombo"],
        correctIndex: 1,
        explanation: "Es un patrón alternante simple de período 2: (A, B, A, B, A...). Por lo tanto, después de 'cuadrado' le corresponde 'círculo'.",
        skill: "Patrones geométricos alternantes",
        difficulty: "Fácil"
      },
      {
        id: "raz-28",
        sectionId: 3,
        number: 28,
        text: "Ana es más alta que Luis. Luis es más alto que Pedro. ¿Quién es el más bajo?",
        options: ["Ana", "Luis", "Pedro", "No se puede determinar"],
        correctIndex: 2,
        explanation: "Relación de orden estricto de mayor a menor: Ana > Luis > Pedro. El término menor en la cadena de ordenamiento es Pedro.",
        skill: "Razonamiento relacional y ordenación",
        difficulty: "Fácil"
      },
      {
        id: "raz-29",
        sectionId: 3,
        number: 29,
        text: "Si hoy es martes, ¿qué día será dentro de 10 días?",
        options: ["Jueves", "Viernes", "Sábado", "Domingo"],
        correctIndex: 1,
        explanation: "Una semana completa tiene 7 días. 10 días = 1 semana (7 días) + 3 días. Contamos 3 días a partir del martes: miércoles (día 1), jueves (día 2), viernes (día 3).",
        skill: "Cálculo cíclico y razonamiento temporal",
        difficulty: "Intermedio"
      },
      {
        id: "raz-30",
        sectionId: 3,
        number: 30,
        text: "Cada figura tiene dos lados más que la anterior: triángulo, pentágono, heptágono, ... ¿Cuál sigue?",
        options: ["Octágono", "Eneágono", "Decágono", "Hexágono"],
        correctIndex: 1,
        explanation: "Contamos los lados de cada polígono: Triángulo (3 lados) -> 3 + 2 = 5 (Pentágono) -> 5 + 2 = 7 (Heptágono) -> 7 + 2 = 9 lados. El polígono de 9 lados se denomina Eneágono (o Nonágono).",
        skill: "Geometría analítica y patrones de polígonos",
        difficulty: "Intermedio"
      }
    ]
  }
];

export const ALL_QUESTIONS: Question[] = INITIAL_SECTIONS.flatMap(s => s.questions);

export const APPS_SCRIPT_SOURCE = `function crearPruebaDiagnostico() {
  const form = FormApp.create("PRUEBAS DE AYUDA DE ESTUDIO");

  // CONFIGURACIÓN GENERAL
  form.setDescription(
    "📘 PRUEBAS DE AYUDA DE ESTUDIO\\n\\n" +
    "EVALUACIÓN DIAGNÓSTICA FUNDAMENTAL\\n\\n" +
    "📌 TOTAL: 30 PREGUNTAS\\n" +
    "🏆 PUNTAJE MÁXIMO: 30 PUNTOS\\n\\n" +
    "INSTRUCCIONES:\\n" +
    "• Lee cuidadosamente cada pregunta.\\n" +
    "• Selecciona una sola respuesta.\\n" +
    "• Todas las preguntas son obligatorias.\\n" +
    "• Cada respuesta correcta vale 1 punto.\\n\\n" +
    "¡DEMUESTRA TUS CONOCIMIENTOS Y DA LO MEJOR DE TI!"
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setShuffleQuestions(false);
  form.setConfirmationMessage(
    "¡EVALUACIÓN COMPLETADA!\\n\\n" +
    "Gracias por participar en PRUEBAS DE AYUDA DE ESTUDIO. " +
    "Sigue aprendiendo, practicando y superándote cada día."
  );

  const secciones = [
    {
      titulo: "01 | OPERACIONES MATEMÁTICAS",
      descripcion:
        "ÁREA MATEMÁTICA | SUMA, RESTA, MULTIPLICACIÓN Y DIVISIÓN",
      preguntas: [
        ["¿Cuánto es 248 + 376?", ["614","624","634","644"], 1],
        ["Calcula: 1485 + 2769.", ["4154","4254","4354","4454"], 1],
        ["¿Cuánto es 903 - 478?", ["415","425","435","445"], 1],
        ["Resuelve: 2000 - 1286.", ["714","724","814","824"], 0],
        ["¿Cuánto es 36 × 24?", ["824","864","874","884"], 1],
        ["Calcula: 125 × 16.", ["1500","1800","2000","2200"], 2],
        ["¿Cuánto es 864 ÷ 12?", ["62","68","72","78"], 2],
        ["Resuelve: 1575 ÷ 25.", ["53","63","65","73"], 1],
        ["Una tienda tiene 248 cuadernos y vende 97. ¿Cuántos quedan?", ["141","151","161","171"], 1],
        ["Hay 18 paquetes con 12 lápices cada uno. ¿Cuántos lápices hay?", ["196","206","216","226"], 2]
      ]
    },
    {
      titulo: "02 | LENGUAJE Y COMPRENSIÓN VERBAL",
      descripcion:
        "ÁREA DE LENGUAJE | VOCABULARIO, GRAMÁTICA Y COMPRENSIÓN",
      preguntas: [
        ["¿Cuál es sinónimo de rápido?", ["Lento","Veloz","Débil","Lejano"], 1],
        ["¿Cuál es el antónimo de generoso?", ["Amable","Solidario","Egoísta","Alegre"], 2],
        ["Selecciona la palabra escrita correctamente.", ["Exepción","Excepción","Ecepción","Exsepción"], 1],
        ["¿Cuál oración es correcta?", ["Los niño juega.","Los niños juegan en el patio.","Los niños juega.","El niños juegan."], 1],
        ["¿Qué tipo de palabra es cuidadosamente?", ["Sustantivo","Verbo","Adverbio","Adjetivo"], 2],
        ["En «María compró una mochila azul», ¿cuál es el sustantivo propio?", ["Compró","Mochila","Azul","María"], 3],
        ["¿Cuál es la idea principal del texto: «El agua es esencial para los seres vivos. Las plantas la absorben por sus raíces y la utilizan para crecer»?", ["Las plantas no necesitan agua.","El agua es importante para los seres vivos y ayuda a las plantas a crecer.","Las raíces producen agua.","Todas las plantas viven en el agua."], 1],
        ["«Estudió con dedicación, _____ obtuvo una buena calificación». Elige el conector adecuado.", ["Aunque","Por eso","Sin embargo","Mientras"], 1],
        ["¿Cuál es una oración interrogativa?", ["¡Qué día tan bonito!","Cierra la puerta.","¿A qué hora comienza la clase?","La clase comienza temprano."], 2],
        ["¿Cuál oración está ordenada correctamente?", ["En la estudian biblioteca los estudiantes.","Los estudiantes estudian en la biblioteca.","Biblioteca los en estudiantes estudian la.","Estudian los la estudiantes biblioteca en."], 1]
      ]
    },
    {
      titulo: "03 | RAZONAMIENTO NUMÉRICO Y ABSTRACTO",
      descripcion:
        "ÁREA DE RAZONAMIENTO | SECUENCIAS, LÓGICA Y PATRONES",
      preguntas: [
        ["¿Qué número continúa? 3, 6, 9, 12, ...", ["14","15","16","18"], 1],
        ["Completa: 2, 4, 8, 16, ...", ["18","24","30","32"], 3],
        ["¿Qué número sigue? 5, 10, 17, 26, ...", ["35","36","37","38"], 2],
        ["Todos los gatos son mamíferos. Misu es un gato. ¿Qué afirmación es correcta?", ["Misu es un ave.","Misu es un mamífero.","Todos los mamíferos son gatos.","Misu no es un animal."], 1],
        ["¿Cuál elemento no pertenece al grupo?", ["Triángulo","Cuadrado","Círculo","Kilogramo"], 3],
        ["Si A = 1, B = 2, C = 3 y se sigue el orden alfabético, ¿cuánto vale E?", ["4","5","6","7"], 1],
        ["¿Qué figura sigue el patrón? Círculo, cuadrado, círculo, cuadrado, ...", ["Triángulo","Círculo","Rectángulo","Rombo"], 1],
        ["Ana es más alta que Luis. Luis es más alto que Pedro. ¿Quién es el más bajo?", ["Ana","Luis","Pedro","No se puede determinar"], 2],
        ["Si hoy es martes, ¿qué día será dentro de 10 días?", ["Jueves","Viernes","Sábado","Domingo"], 1],
        ["Cada figura tiene dos lados más que la anterior: triángulo, pentágono, heptágono, ... ¿Cuál sigue?", ["Octágono","Eneágono","Decágono","Hexágono"], 1]
      ]
    }
  ];

  secciones.forEach((seccion, indice) => {
    if (indice === 0) {
      form.addSectionHeaderItem()
        .setTitle(seccion.titulo)
        .setHelpText(seccion.descripcion);
    } else {
      form.addPageBreakItem()
        .setTitle(seccion.titulo)
        .setHelpText(seccion.descripcion);
    }

    seccion.preguntas.forEach(
      ([pregunta, opciones, correcta]) => {
        const item = form.addMultipleChoiceItem();

        item.setTitle(pregunta);
        item.setRequired(true);
        item.setPoints(1);

        item.setChoices(
          opciones.map((opcion, i) =>
            item.createChoice(opcion, i === correcta)
          )
        );
      }
    );
  });

  Logger.log("FORMULARIO CREADO CORRECTAMENTE");
  Logger.log("ENLACE PARA ESTUDIANTES: " + form.getPublishedUrl());
  Logger.log("ENLACE PARA EDITAR: " + form.getEditUrl());
}`;
