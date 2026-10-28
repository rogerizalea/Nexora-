import { StudyLesson } from '../../types';

export const STUDY_LESSONS: StudyLesson[] = [
  // =========================================================================
  // MATEMÁTICAS
  // =========================================================================
  {
    id: 'mat-bas-ecuaciones-lineales',
    subjectId: 'matematicas',
    educationalLevel: 'Básico',
    topic: 'Álgebra y Ecuaciones',
    subtopic: 'Ecuaciones lineales de primer grado',
    chapterNumber: 1,
    title: 'Resolución Rigurosa de Ecuaciones Lineales de Primer Grado',
    summary: 'Aprende a transformar y resolver ecuaciones lineales aplicando las propiedades uniformes de la igualdad sin memorizar reglas mecánicas erróneas.',
    readingMinutes: 6,
    learningObjectives: [
      'Comprender la ecuación como una balanza en equilibrio regida por la propiedad uniforme.',
      'Identificar los miembros, incógnitas, términos y coeficientes de una ecuación lineal.',
      'Despejar incógnitas con operaciones inversas verificadas paso a paso.',
      'Comprobar la solución sustituyendo el valor hallado en la ecuación original.'
    ],
    prerequisites: [
      'Jerarquía de operaciones matemáticas (PEMDAS)',
      'Regla de los signos en suma, resta, multiplicación y división'
    ],
    conceptualExplanation: `Una **ecuación lineal de primer grado con una incógnita** es una igualdad algebraica donde el mayor exponente de la variable es 1. Su forma canónica general es:

$$ax + b = c \\quad (\\text{donde } a \\neq 0)$$

### La Metáfora de la Balanza y la Propiedad Uniforme
El error pedagógico más común es enseñar que *"lo que está sumando pasa al otro lado restando"*. En realidad, una ecuación es una **balanza perfecta en equilibrio**. Para conservar la igualdad estricta, cualquier operación que apliques al primer miembro debe aplicarse idénticamente al segundo miembro:

1. **Propiedad aditiva uniforme**: Si $A = B$, entonces $A \\pm k = B \\pm k$.
2. **Propiedad multiplicativa uniforme**: Si $A = B$ y $k \\neq 0$, entonces $A \\cdot k = B \\cdot k$ y $\\frac{A}{k} = \\frac{B}{k}$.

### Pasos Sistemáticos para la Resolución
1. **Eliminar paréntesis**: Aplicar la propiedad distributiva $a(bx + c) = abx + ac$.
2. **Agrupar términos semejantes**: Reducir los términos con la variable en un miembro y las constantes numéricas en el otro.
3. **Aislar la incógnita**: Dividir ambos miembros entre el coeficiente numérico de la variable.
4. **Verificación analítica**: Reemplazar el valor obtenido en la ecuación original para corroborar que la igualdad se cumple numéricamente.`,
    formulaBox: {
      title: 'Propiedades Fundamentales de la Igualdad',
      items: [
        { label: 'Forma canónica', formula: 'ax + b = 0 \\quad (a \\neq 0)', note: 'Solución única x = -b / a' },
        { label: 'Propiedad Aditiva', formula: 'A = B \\iff A + c = B + c', note: 'Permite transponer términos sumados o restados' },
        { label: 'Propiedad Multiplicativa', formula: 'A = B \\iff A \\cdot c = B \\cdot c \\quad (c \\neq 0)', note: 'Permite despejar coeficientes y denominadores' }
      ]
    },
    stepByStepExamples: [
      {
        title: 'Ejemplo 1: Ecuación con paréntesis y términos en ambos miembros',
        statement: 'Resuelve detalladamente la ecuación: 3(2x - 4) + 5 = 4x + 13',
        steps: [
          'Paso 1: Aplicar la propiedad distributiva en el miembro izquierdo: 3 · (2x) - 3 · 4 + 5 = 6x - 12 + 5 = 6x - 7.',
          'Paso 2: Escribir la ecuación simplificada: 6x - 7 = 4x + 13.',
          'Paso 3: Restar 4x en ambos miembros para agrupar variables: (6x - 4x) - 7 = 13  ⟹  2x - 7 = 13.',
          'Paso 4: Sumar 7 en ambos miembros para aislar términos con x: 2x = 13 + 7  ⟹  2x = 20.',
          'Paso 5: Dividir ambos miembros entre 2: x = 20 / 2  ⟹  x = 10.',
          'Paso 6 (Verificación): Sustituir x = 10 en la original: 3(2(10) - 4) + 5 = 3(16) + 5 = 48 + 5 = 53. En el segundo miembro: 4(10) + 13 = 53. ¡Igualdad demostrada!'
        ],
        finalAnswer: 'x = 10'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Cambiar el signo de un número al pasarlo a dividir.',
        correction: 'Si tienes -5x = 20, debes dividir entre -5, obteniendo x = 20 / (-5) = -4. El signo del coeficiente NO cambia al dividir.',
        why: 'La operación inversa de la multiplicación es la división, no el cambio de signo.'
      },
      {
        mistake: 'Olvidar distribuir el signo negativo que antecede a un paréntesis: -(3x - 2) = -3x - 2.',
        correction: 'El signo menos invierte TODOS los signos interiores: -(3x - 2) = -3x + 2.',
        why: 'Equivale a multiplicar por (-1) cada término interior por la propiedad distributiva.'
      }
    ],
    practicalApplications: [
      {
        field: 'Economía y Finanzas',
        application: 'Cálculo del punto de equilibrio empresarial donde Costos Totales = Ingresos Totales (C_fijo + C_variable · x = P_venta · x).'
      },
      {
        field: 'Física y Transporte',
        application: 'Determinación del tiempo necesario para que dos vehículos en trayectoria rectilínea se encuentren (d = v · t).'
      }
    ],
    glossary: [
      { term: 'Incógnita', definition: 'Valor cuantitativo desconocido que satisface una condición de igualdad matemática.' },
      { term: 'Términos semejantes', definition: 'Expresiones algebraicas que comparten exactamente la misma parte literal y exponentes.' },
      { term: 'Propiedad uniforme', definition: 'Principio algebraico según el cual aplicar la misma operación a ambos lados de una igualdad preserva el equilibrio.' }
    ],
    checkExercises: [
      {
        id: 'chk-mat-1',
        question: '¿Cuál es el valor de x que satisface la ecuación: 5x - 3(x + 2) = 14?',
        options: ['x = 8', 'x = 10', 'x = 4', 'x = -10'],
        correctIndex: 1,
        explanation: 'Desarrollamos: 5x - 3x - 6 = 14  ⟹  2x - 6 = 14  ⟹  2x = 20  ⟹  x = 10. Verificación: 5(10) - 3(12) = 50 - 36 = 14.'
      },
      {
        id: 'chk-mat-2',
        question: 'Si resolvemos -4x = 28, ¿cuál es el procedimiento correcto?',
        options: [
          'Sumar 4 a ambos miembros, dando x = 32',
          'Dividir ambos miembros entre -4, obteniendo x = -7',
          'Dividir entre 4 y cambiar el signo de 28, dando x = 7',
          'Multiplicar por -4 ambos miembros, dando x = -112'
        ],
        correctIndex: 1,
        explanation: 'Dado que -4 multiplica a x, la operación inversa estricta es dividir ambos miembros entre -4: x = 28 / (-4) = -7.'
      }
    ],
    sources: ['Álgebra de Baldor, Cap. VI', 'Stewart, J. Precálculo: Matemáticas para el cálculo']
  },

  {
    id: 'mat-int-proporcionalidad-regla-tres',
    subjectId: 'matematicas',
    educationalLevel: 'Intermedio',
    topic: 'Aritmética y Razonamiento Numérico',
    subtopic: 'Proporcionalidad directa, inversa y porcentajes',
    chapterNumber: 2,
    title: 'Magnitudes Proporcionales, Regla de Tres y Porcentajes',
    summary: 'Distingue con certeza entre proporcionalidad directa e inversa y domina el cálculo mental de tasas porcentuales e incrementos.',
    readingMinutes: 7,
    learningObjectives: [
      'Identificar la relación causal entre dos magnitudes (directa o inversamente proporcional).',
      'Plantear y resolver la regla de tres simple y compuesta sin recurrir a fórmulas memorizadas.',
      'Calcular variaciones porcentuales, descuentos sucesivos e incrementos de valor agregado.'
    ],
    prerequisites: [
      'Operaciones con fracciones y razones numéricas',
      'Multiplicación y simplificación de términos racionales'
    ],
    conceptualExplanation: `Dos magnitudes son **directamente proporcionales** si al multiplicar o dividir una de ellas por una constante $k$, la otra queda multiplicada o dividida por el mismo factor. Su cociente es constante:

$$\\frac{A}{B} = k \\quad (\\text{Constante de proporcionalidad directa})$$

Dos magnitudes son **inversamente proporcionales** si al aumentar una al doble, triple o cuádruple, la otra se reduce a la mitad, tercera o cuarta parte. Su producto es constante:

$$A \\cdot B = k \\quad (\\text{Constante de proporcionalidad inversa})$$

### Criterio Infalible para Identificar la Relación
- **Pregunta clave para Directa**: Si tengo MÁS de la magnitud A, ¿necesito MÁS de la magnitud B? *(Ejemplo: Más obreros producen más metros cuadrados de pared. Es DIRECTA).*
- **Pregunta clave para Inversa**: Si tengo MÁS de la magnitud A, ¿se requiere MENOS de la magnitud B? *(Ejemplo: Más velocidad significa menos tiempo de trayecto; más obreros tardan menos días en concluir la misma obra. Es INVERSA).*`,
    formulaBox: {
      title: 'Fórmulas y Constantes de Proporción',
      items: [
        { label: 'Proporcionalidad Directa', formula: 'y = k \\cdot x \\implies \\frac{y_1}{x_1} = \\frac{y_2}{x_2}', note: 'Multiplicación cruzada: x_1 · y_2 = x_2 · y_1' },
        { label: 'Proporcionalidad Inversa', formula: 'x \\cdot y = k \\implies x_1 \\cdot y_1 = x_2 \\cdot y_2', note: 'Multiplicación en línea horizontal' },
        { label: 'Porcentaje como Fracción', formula: 'P\\% \\text{ de } N = \\frac{P}{100} \\cdot N', note: 'Para calcular el 15%, multiplica por 0.15' }
      ]
    },
    stepByStepExamples: [
      {
        title: 'Ejemplo: Cuadrilla de obreros y tiempo de finalización (Inversa)',
        statement: 'Si 6 operarios tardan 18 horas en ensamblar una estructura metálica, ¿cuántas horas tardarán 9 operarios con el mismo rendimiento?',
        steps: [
          'Paso 1: Identificar magnitudes: Cantidad de operarios y Tiempo en horas.',
          'Paso 2: Evaluar la relación: A MAYOR número de operarios, se requerirán MENOS horas para la misma obra. Es una relación INVERSA.',
          'Paso 3: Aplicar la constante de producto: Operarios_1 · Horas_1 = Operarios_2 · Horas_2.',
          'Paso 4: Sustituir los valores: 6 · 18 = 9 · h.',
          'Paso 5: Despejar: 108 = 9h  ⟹  h = 108 / 9 = 12 horas.'
        ],
        finalAnswer: '12 horas'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Aplicar regla de tres directa cruzada cuando la magnitud es inversa.',
        correction: 'Siempre analiza el sentido físico: más trabajadores no pueden demorar más tiempo en el mismo trabajo.',
        why: 'La multiplicación cruzada solo es matemáticamente válida para cocientes constantes (directa).'
      },
      {
        mistake: 'Sumar directamente descuentos sucesivos del 20% y 10% asumiendo un descuento total del 30%.',
        correction: 'El segundo descuento aplica sobre el saldo remanente: 100 · 0.80 · 0.90 = 72 (el descuento real es 28%, no 30%).',
        why: 'La base de cálculo cambia tras la primera deducción.'
      }
    ],
    practicalApplications: [
      {
        field: 'Ingeniería y Construcción',
        application: 'Dimensionamiento de cuadrillas y dosificación de mezclas de hormigón en proporción exacta 1:2:3.'
      },
      {
        field: 'Farmacología y Salud',
        application: 'Cálculo de dosis de medicamentos según la masa corporal del paciente (mg/kg).'
      }
    ],
    glossary: [
      { term: 'Razón', definition: 'Comparación cuantitativa entre dos cantidades mediante su cociente.' },
      { term: 'Proporción', definition: 'Igualdad matemática entre dos razones equivalentes.' },
      { term: 'Tanto por ciento', definition: 'Número de partes que se toman de cada cien unidades de un todo.' }
    ],
    checkExercises: [
      {
        id: 'chk-prop-1',
        question: 'Un automóvil recorre 240 km con 20 litros de combustible. ¿Cuántos litros consumirá en 360 km a la misma velocidad?',
        options: ['28 litros', '30 litros', '32 litros', '35 litros'],
        correctIndex: 1,
        explanation: 'Es directamente proporcional: 240 / 20 = 12 km por litro. Para 360 km: 360 / 12 = 30 litros.'
      }
    ]
  },

  {
    id: 'mat-bach-trigonometria-pitagoras',
    subjectId: 'matematicas',
    educationalLevel: 'Bachillerato',
    topic: 'Geometría y Trigonometría',
    subtopic: 'Teorema de Pitágoras y razones trigonométricas',
    chapterNumber: 3,
    title: 'Teorema de Pitágoras y Razones Trigonométricas en el Triángulo Rectángulo',
    summary: 'Fundamentos geométricos del triángulo rectángulo, cálculo de hipotenusas y aplicación de las razones seno, coseno y tangente.',
    readingMinutes: 8,
    learningObjectives: [
      'Demostrar y aplicar el Teorema de Pitágoras en problemas espaciales y planos.',
      'Definir con precisión el cateto opuesto, cateto adyacente e hipotenusa relativos a un ángulo agudo.',
      'Calcular valores exactos de seno, coseno y tangente para ángulos notables (30°, 45°, 60°).'
    ],
    prerequisites: [
      'Propiedades de los triángulos y suma de ángulos interiores (180°)',
      'Radicación y operaciones con números irracionales'
    ],
    conceptualExplanation: `En todo **triángulo rectángulo** (que posee un ángulo interior de 90° o $\\frac{\\pi}{2}$ radianes):

### 1. Teorema de Pitágoras
El cuadrado de la medida de la hipotenusa ($c$, el lado opuesto al ángulo recto y el más largo) es igual a la suma de los cuadrados de las medidas de los catetos ($a$ y $b$):

$$c^2 = a^2 + b^2 \\iff c = \\sqrt{a^2 + b^2}$$

### 2. Razones Trigonométricas Fundamentales
Para un ángulo agudo $\\theta$:
- **Seno (sen $\\theta$)**: Razón entre el cateto opuesto y la hipotenusa. $\\text{sen } \\theta = \\frac{\\text{Cateto Opuesto}}{\\text{Hipotenusa}}$
- **Coseno (cos $\\theta$)**: Razón entre el cateto adyacente y la hipotenusa. $\\text{cos } \\theta = \\frac{\\text{Cateto Adyacente}}{\\text{Hipotenusa}}$
- **Tangente (tan $\\theta$)**: Razón entre el cateto opuesto y el adyacente. $\\text{tan } \\theta = \\frac{\\text{Cateto Opuesto}}{\\text{Cateto Adyacente}} = \\frac{\\text{sen } \\theta}{\\text{cos } \\theta}$

### Identidad Fundamental
Para cualquier ángulo $\\theta$, se cumple rigurosamente la **identidad pitagórica**:
$$\\text{sen}^2(\\theta) + \\text{cos}^2(\\theta) = 1$$`,
    formulaBox: {
      title: 'Mnemotecnia y Relaciones Básicas (SOH-CAH-TOA)',
      items: [
        { label: 'SOH', formula: '\\text{sen}(\\theta) = \\frac{O}{H}', note: 'Seno = Opuesto / Hipotenusa' },
        { label: 'CAH', formula: '\\text{cos}(\\theta) = \\frac{A}{H}', note: 'Coseno = Adyacente / Hipotenusa' },
        { label: 'TOA', formula: '\\text{tan}(\\theta) = \\frac{O}{A}', note: 'Tangente = Opuesto / Adyacente' },
        { label: 'Pitágoras', formula: 'a^2 + b^2 = c^2', note: 'Cateto = \\sqrt{c^2 - \\text{otro}^2}' }
      ]
    },
    stepByStepExamples: [
      {
        title: 'Ejemplo: Determinación de la altura de un poste con sombra',
        statement: 'Un poste vertical proyecta una sombra horizontal de 12 metros cuando los rayos del sol inciden con un ángulo de elevación de 30°. ¿Cuál es la altura exacta del poste?',
        steps: [
          'Paso 1: Modelar el triángulo: El poste es el cateto opuesto (h), la sombra es el cateto adyacente (12 m) y el ángulo es θ = 30°.',
          'Paso 2: Seleccionar la razón trigonométrica que relaciona cateto opuesto y adyacente: la Tangente.',
          'Paso 3: Plantear la ecuación: tan(30°) = h / 12.',
          'Paso 4: Recordar el valor notable: tan(30°) = √3 / 3 ≈ 0.577.',
          'Paso 5: Despejar la altura: h = 12 · (√3 / 3) = 4√3 metros ≈ 6.93 metros.'
        ],
        finalAnswer: 'h = 4√3 m (≈ 6.93 m)'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Confundir el cateto opuesto con el adyacente al cambiar de ángulo de referencia.',
        correction: 'El cateto opuesto es siempre el lado que está frente al ángulo analizado; no existe un cateto fijo en el triángulo sin especificar el ángulo.',
        why: 'Las razones trigonométricas son relativas al ángulo de referencia, no a la orientación de la hoja.'
      }
    ],
    practicalApplications: [
      {
        field: 'Topografía y Navegación GPS',
        application: 'Triangulación de posiciones satelitales y medición de desniveles de terreno inaccesibles.'
      },
      {
        field: 'Arquitectura y Construcción',
        application: 'Diseño de pendientes de techumbres para drenaje pluvial óptimo y cálculo de esfuerzos en cerchas.'
      }
    ],
    glossary: [
      { term: 'Hipotenusa', definition: 'Lado de mayor longitud en un triángulo rectángulo, opuesto al ángulo de 90°.' },
      { term: 'Ángulo de elevación', definition: 'Ángulo formado por la línea visual ascendente de un observador respecto a la línea horizontal.' }
    ],
    checkExercises: [
      {
        id: 'chk-pit-1',
        question: 'En un triángulo rectángulo, los catetos miden 6 cm y 8 cm. ¿Cuánto mide su hipotenusa?',
        options: ['14 cm', '10 cm', '12 cm', '48 cm'],
        correctIndex: 1,
        explanation: 'Aplicando Pitágoras: c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.'
      }
    ]
  },

  // =========================================================================
  // LENGUA Y LITERATURA
  // =========================================================================
  {
    id: 'len-int-cohesion-conectores',
    subjectId: 'lengua',
    educationalLevel: 'Intermedio',
    topic: 'Sintaxis y Redacción Académica',
    subtopic: 'Cohesión textual y conectores lógicos',
    chapterNumber: 1,
    title: 'Cohesión Textual, Conectores Lógicos y Coherencia Oracional',
    summary: 'Domina los mecanismos sintácticos y semánticos que unen ideas en un texto para garantizar claridad, elegancia y rigor argumentativo.',
    readingMinutes: 6,
    learningObjectives: [
      'Diferenciar entre coherencia global (sentido lógico del tema) y cohesión local (mecanismos lingüísticos de unión).',
      'Clasificar y emplear conectores de causa, consecuencia, contraste, adición y ejemplificación.',
      'Evitar la redundancia léxica mediante el uso de anáforas, elipsis y sustitución sinonímica.'
    ],
    prerequisites: [
      'Identificación de oraciones simples y compuestas',
      'Uso adecuado de la coma, el punto y coma y el punto seguido'
    ],
    conceptualExplanation: `Un conjunto de oraciones aisladas no constituye un texto. Para que exista comunicación efectiva se requieren dos propiedades indisociables:

1. **Coherencia**: Propiedad semántica global que hace que el texto sea percibido como una unidad temática clara, sin contradicciones y con un propósito comunicativo definido.
2. **Cohesión**: Propiedad sintáctica local que articula las palabras, proposiciones y párrafos mediante marcadores y enlaces formales.

### Tipología de Conectores Lógicos Esenciales
- **De Causa**: Expresan el motivo o razón de lo manifestado. *(porque, puesto que, ya que, dado que, a causa de)*.
- **De Consecuencia**: Expresan el efecto o resultado de lo anterior. *(por lo tanto, por consiguiente, en consecuencia, de ahí que)*.
- **De Oposición / Concesión**: Contrastan ideas o superan un obstáculo sin anular la conclusión. *(sin embargo, no obstante, a pesar de, en cambio, por el contrario)*.
- **De Adición**: Suman argumentos con la misma orientación. *(además, asimismo, por otra parte, también)*.
- **De Reformulación o Explicación**: Aclaran lo afirmado previamente. *(es decir, o sea, en otras palabras, dicho de otro modo)*.`,
    stepByStepExamples: [
      {
        title: 'Ejemplo: Corrección de un párrafo incoherente',
        statement: 'Reescribe usando conectores idóneos: "El equipo estudió toda la noche. Ninguno aprobó el examen. El profesor hizo preguntas de otro tema."',
        steps: [
          'Paso 1: Identificar la relación lógica: Hay un esfuerzo (estudiar) seguido de un resultado frustrado (reprobar). Esto exige un conector adversativo.',
          'Paso 2: Identificar la causa de la reprobación: El examen no coincidía con el temario estudiado. Esto exige un conector causal.',
          'Paso 3: Redactar con puntuación normativa: "El equipo estudió durante toda la noche; sin embargo, ninguno logró aprobar el examen, dado que el profesor evaluó temas no contemplados en la guía."'
        ],
        finalAnswer: '"El equipo estudió durante toda la noche; sin embargo, ninguno logró aprobar el examen, dado que el profesor evaluó temas no contemplados en la guía."'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Iniciar una oración tras punto con "Ya que..." sin cerrar la proposición principal.',
        correction: '"Ya que" es una conjunción subordinante que introduce una causa; no puede quedar huérfana de verbo principal.',
        why: 'Produce una oración incompleta (anacoluto).'
      },
      {
        mistake: 'Usar "sin embargo" y "pero" en la misma cláusula: "Pero sin embargo..."',
        correction: 'Utiliza uno solo: "Sin embargo, decidieron..." o "Pero decidieron...".',
        why: 'Ambos cumplen idéntica función adversativa y combinarlos es un pleonasmo vicioso.'
      }
    ],
    practicalApplications: [
      {
        field: 'Redacción de Informes Profesionales',
        application: 'Presentación de conclusiones analíticas con solidez lógica en dictámenes periciales y ensayos académicos.'
      }
    ],
    glossary: [
      { term: 'Anáfora', definition: 'Figura gramatical que consiste en aludir a un elemento mencionado previamente para evitar la repetición.' },
      { term: 'Elipsis', definition: 'Omisión voluntaria de una o más palabras que se sobreentienden por el contexto inmediato.' }
    ],
    checkExercises: [
      {
        id: 'chk-len-1',
        question: 'Elige el conector adecuado: "El experimento fue diseñado rigurosamente; _______, los resultados no fueron estadísticamente concluyentes."',
        options: ['por consiguiente', 'no obstante', 'dado que', 'es decir'],
        correctIndex: 1,
        explanation: '"No obstante" expresa el contraste lógico entre el rigor del diseño y la falta de resultados concluyentes.'
      }
    ]
  },

  // =========================================================================
  // RAZONAMIENTO LÓGICO Y ABSTRACTO
  // =========================================================================
  {
    id: 'raz-bach-silogismos-deduccion',
    subjectId: 'razonamiento',
    educationalLevel: 'Bachillerato',
    topic: 'Lógica Proposicional y Formal',
    subtopic: 'Silogismos categóricos y validez formal',
    chapterNumber: 1,
    title: 'Estructura del Silogismo Categórico y Validez Deductiva',
    summary: 'Aprende a diferenciar entre la verdad empírica de una afirmación y la validez formal de un argumento lógico deductivo.',
    readingMinutes: 7,
    learningObjectives: [
      'Identificar la premisa mayor, premisa menor, término medio y conclusión de un silogismo.',
      'Diferenciar con claridad meridiana entre Validez (estructura formal) y Verdad (correspondencia con la realidad).',
      'Detectar falacias formales clásicas como la afirmación del consecuente y el término medio no distribuido.'
    ],
    prerequisites: [
      'Comprensión de enunciados universales y particulares',
      'Nociones básicas de conjuntos e inclusión'
    ],
    conceptualExplanation: `El **razonamiento deductivo** es aquel en el que la conclusión se desprende necesariamente de las premisas: si las premisas son verdaderas y la estructura es válida, la conclusión NO puede ser falsa.

### Anatomía del Silogismo Típico
Consta de tres proposiciones categóricas:
1. **Premisa Mayor**: Contiene el término mayor ($P$, predicado de la conclusión).
2. **Premisa Menor**: Contiene el término menor ($S$, sujeto de la conclusión).
3. **Conclusión**: Afirma una relación entre $S$ y $P$ ($S$ es $P$).

El **Término Medio ($M$)** es el elemento conector que aparece en ambas premisas pero NUNCA en la conclusión.

### La Distinción Capital: Verdad vs. Validez
- **Verdad**: Es un atributo de las proposiciones individuales (una oración es verdadera o falsa según los hechos del mundo).
- **Validez**: Es un atributo exclusivo de los **argumentos** (un argumento es válido si su forma lógica hace imposible que las premisas sean verdaderas y la conclusión falsa).

Un argumento puede ser **completamente válido** aunque sus premisas sean ficticias:
- Premisa 1: Todos los mamíferos vuelan. *(Falsa fácticamente)*
- Premisa 2: El perro es un mamífero. *(Verdadera fácticamente)*
- Conclusión: El perro vuela. *(Lógicamente VÁLIDA pero fácticamente FALSA)*`,
    stepByStepExamples: [
      {
        title: 'Ejemplo: Detección de la falacia de afirmación del consecuente',
        statement: 'Analiza si el siguiente razonamiento es lógicamente válido: "Si llueve, el suelo se moja. El suelo está mojado. Por lo tanto, ha llovido."',
        steps: [
          'Paso 1: Formalizar la proposición condicional: Si P (llueve) ⟹ Q (suelo mojado).',
          'Paso 2: Analizar la segunda premisa: Se afirma Q (el suelo está mojado).',
          'Paso 3: Evaluar la implicación: ¿Q solo puede ocurrir por P? No, el suelo pudo mojarse por una manguera, el riego o un balde con agua.',
          'Paso 4: Conclusión formal: Es una FALACIA FORMAL (Afirmación del consecuente). El argumento es INVÁLIDO.'
        ],
        finalAnswer: 'Argumento INVÁLIDO (Falacia de afirmación del consecuente)'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Calificar un argumento como inválido simplemente porque su conclusión no coincide con nuestra opinión personal.',
        correction: 'La validez depende exclusivamente de si la conclusión se deduce necesariamente de las premisas asumidas como hipótesis.',
        why: 'La lógica formal prescinde del contenido emocional o empírico.'
      }
    ],
    practicalApplications: [
      {
        field: 'Programación y Ciencias de la Computación',
        application: 'Diseño de condiciones booleanas (IF/THEN/ELSE) y verificación formal de software crítico (aviónica, medicina).'
      },
      {
        field: 'Derecho y Jurisprudencia',
        application: 'Subsunción jurídica: cotejo de la conducta del imputado (caso particular) con el tipo penal general.'
      }
    ],
    glossary: [
      { term: 'Silogismo', definition: 'Forma de razonamiento deductivo que consta de dos proposiciones como premisas y otra como conclusión.' },
      { term: 'Falacia', definition: 'Razonamiento que parece lógicamente correcto pero que encierra un error estructural que invalida su conclusión.' }
    ],
    checkExercises: [
      {
        id: 'chk-raz-1',
        question: 'Dadas las premisas: "Todo felino es cazador" y "Algún mamífero es felino", ¿cuál es la conclusión válida?',
        options: [
          'Todo cazador es mamífero',
          'Algún mamífero es cazador',
          'Ningún mamífero es cazador',
          'Todos los mamíferos son felinos'
        ],
        correctIndex: 1,
        explanation: 'Por el modo Darii: Si todo M es P y algún S es M, necesariamente algún S es P. Por ende: "Algún mamífero es cazador".'
      }
    ]
  },

  // =========================================================================
  // FÍSICA
  // =========================================================================
  {
    id: 'fis-int-cinematica-mruv',
    subjectId: 'fisica',
    educationalLevel: 'Intermedio',
    topic: 'Cinemática Clásica',
    subtopic: 'Movimiento Rectilíneo Uniformemente Variado (MRUV)',
    chapterNumber: 1,
    title: 'Movimiento Rectilíneo Uniformemente Variado (MRUV): Ecuaciones y Gráficas',
    summary: 'Aprende a analizar trayectorias con aceleración constante, interpretar gráficas posición-tiempo y aplicar las fórmulas cinemáticas fundamentales.',
    readingMinutes: 8,
    learningObjectives: [
      'Diferenciar entre velocidad instantánea, velocidad media y aceleración constante.',
      'Deducir e interpretar las tres ecuaciones horarias del MRUV.',
      'Extraer información cinemática a partir del área bajo la curva en gráficas velocidad vs. tiempo.'
    ],
    prerequisites: [
      'Despeje de variables de segundo grado',
      'Conversión de unidades de velocidad (km/h a m/s dividiendo entre 3.6)'
    ],
    conceptualExplanation: `En el **MRUV**, un móvil describe una trayectoria rectilínea sometido a una **aceleración constante ($a = \\text{cte}$)**. Esto significa que su velocidad cambia a una tasa fija por cada unidad de tiempo transcurrida:

$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_0}{t}$$

### Las Ecuaciones Fundamentales del MRUV
1. **Velocidad en función del tiempo**:
   $$v_f = v_0 + a \\cdot t$$
2. **Posición o desplazamiento en función del tiempo**:
   $$x_f = x_0 + v_0 \\cdot t + \\frac{1}{2} a \\cdot t^2$$
3. **Ecuación independiente del tiempo (Torricelli)**:
   $$v_f^2 = v_0^2 + 2a \\cdot \\Delta x$$
4. **Desplazamiento por velocidad promedio**:
   $$\\Delta x = \\left(\\frac{v_0 + v_f}{2}\\right) \\cdot t$$

### Interpretación Gráfica Clave
- En una gráfica **$v$ vs. $t$**, la **pendiente** de la recta representa la **aceleración**.
- El **área geométrica bajo la curva** en la gráfica **$v$ vs. $t$** representa numéricamente el **desplazamiento ($\Delta x$)** del móvil.`,
    formulaBox: {
      title: 'Ecuaciones Horarias del MRUV',
      items: [
        { label: 'Velocidad final', formula: 'v_f = v_0 + a \\cdot t', note: 'Si frena, la aceleración se reemplaza con signo negativo (-)' },
        { label: 'Posición', formula: '\\Delta x = v_0 \\cdot t + \\frac{1}{2} a \\cdot t^2', note: 'Ecuación cuadrática en el tiempo' },
        { label: 'Torricelli', formula: 'v_f^2 = v_0^2 + 2a \\cdot \\Delta x', note: 'Útil cuando se desconoce el tiempo de trayecto' }
      ]
    },
    stepByStepExamples: [
      {
        title: 'Ejemplo: Frenado de emergencia de un vehículo',
        statement: 'Un automóvil viaja a 72 km/h y frena uniformemente deteniéndose por completo en una distancia de 40 metros. ¿Cuál fue su aceleración de frenado?',
        steps: [
          'Paso 1: Convertir la velocidad inicial a unidades del SI: v_0 = 72 km/h / 3.6 = 20 m/s.',
          'Paso 2: Identificar datos finales: Se detiene por completo ⟹ v_f = 0 m/s. Distancia Δx = 40 m.',
          'Paso 3: Notar que no se proporciona el tiempo. Empleamos la ecuación de Torricelli: v_f² = v_0² + 2a·Δx.',
          'Paso 4: Sustituir: 0 = (20)² + 2 · a · 40 ⟹ 0 = 400 + 80a.',
          'Paso 5: Despejar la aceleración: 80a = -400 ⟹ a = -400 / 80 = -5 m/s².'
        ],
        finalAnswer: 'a = -5 m/s² (desaceleración de 5 m/s²)'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Multiplicar directamente 72 km/h por segundos sin hacer la conversión a m/s.',
        correction: 'Siempre homogeneizar las unidades al Sistema Internacional: divide km/h entre 3.6 para obtener m/s.',
        why: 'Mezclar kilómetros, horas y segundos genera errores de escala de 3,600 veces.'
      }
    ],
    practicalApplications: [
      {
        field: 'Seguridad Vial y Tránsito',
        application: 'Cálculo de la distancia de frenado requerida para semáforos y diseño de curvas con peralte en autopistas.'
      }
    ],
    glossary: [
      { term: 'Aceleración', definition: 'Magnitud vectorial que mide la tasa de variación de la velocidad respecto al tiempo.' },
      { term: 'Desaceleración', definition: 'Aceleración cuyo vector tiene sentido opuesto al vector de la velocidad instantánea, provocando la disminución de la rapidez.' }
    ],
    checkExercises: [
      {
        id: 'chk-fis-1',
        question: 'Un objeto parte del reposo con una aceleración constante de 3 m/s². ¿Qué velocidad tendrá al cabo de 5 segundos?',
        options: ['8 m/s', '15 m/s', '45 m/s', '75 m/s'],
        correctIndex: 1,
        explanation: 'Dado que parte del reposo, v_0 = 0. Entonces v_f = 0 + a·t = 3 m/s² · 5 s = 15 m/s.'
      }
    ]
  },

  // =========================================================================
  // QUÍMICA
  // =========================================================================
  {
    id: 'qui-bach-enlaces-quimicos',
    subjectId: 'quimica',
    educationalLevel: 'Bachillerato',
    topic: 'Estructura Atómica y Enlace Químico',
    subtopic: 'Tipos de enlaces: iónico, covalente y metálico',
    chapterNumber: 1,
    title: 'Enlaces Químicos: Regla del Octeto, Electronegatividad y Propiedades',
    summary: 'Comprende las fuerzas electrostáticas que mantienen unidos a los átomos para formar moléculas y redes cristalinas estables.',
    readingMinutes: 7,
    learningObjectives: [
      'Explicar la estabilidad atómica en términos de energía mínima y configuración electrónica de gas noble (regla del octeto).',
      'Predecir el carácter del enlace químico usando la escala de electronegatividad de Pauling.',
      'Correlacionar las propiedades macroscópicas (conductividad, solubilidad, punto de fusión) con el tipo de enlace molecular.'
    ],
    prerequisites: [
      'Concepto de electrones de valencia y grupos de la tabla periódica',
      'Propiedades periódicas: radio atómico y electronegatividad'
    ],
    conceptualExplanation: `Los átomos aislados (con excepción de los gases nobles) tienen sus niveles de valencia incompletos y se encuentran en un estado de mayor energía potencial. Al interactuar entre sí, transfieren o comparten electrones para alcanzar una configuración electrónica estable similar a la de un gas noble (8 electrones de valencia, según la **Regla del Octeto** de Lewis).

### Clasificación Según la Diferencia de Electronegatividad ($\\Delta EN$)
1. **Enlace Iónico ($\\Delta EN \\ge 1.7$)**:
   - Ocurre típicamente entre un metal (baja EN, tiende a ceder electrones formando cationes) y un no metal (alta EN, atrae electrones formando aniones).
   - Se forma una red cristalina tridimensional ordenada sostenida por intensas fuerzas electrostáticas.
   - *Propiedades*: Altos puntos de fusión, frágiles, conducen la electricidad fundidos o en disolución acuosa. Ejemplo: $NaCl$.

2. **Enlace Covalente ($\\Delta EN < 1.7$)**:
   - Ocurre entre átomos de no metales que comparten uno o más pares de electrones.
   - **Covalente Apolar ($\\Delta EN < 0.4$)**: La nube electrónica se distribuye simétricamente (ejemplo: $O_2$, $CH_4$).
   - **Covalente Polar ($0.4 \\le \\Delta EN < 1.7$)**: El átomo más electronegativo atrae con mayor densidad la nube de electrones, formando dipolos eléctricos (ejemplo: $H_2O$, $HCl$).

3. **Enlace Metálico**:
   - Ocurre entre átomos de elementos metálicos.
   - Modelo de la **"nube o mar de electrones"**: Los cationes metálicos fijos se encuentran inmersos en un mar de electrones de valencia deslocalizados y libres.
   - *Propiedades*: Excepcional conductividad eléctrica y térmica, maleabilidad y ductilidad.`,
    formulaBox: {
      title: 'Criterio de Pauling para el Enlace Químico',
      items: [
        { label: 'Iónico', formula: '\\Delta EN \\ge 1.7', note: 'Transferencia de electrones (catión + anión)' },
        { label: 'Covalente Polar', formula: '0.4 \\le \\Delta EN < 1.7', note: 'Compartición asimétrica con polos' },
        { label: 'Covalente Apolar', formula: '\\Delta EN < 0.4', note: 'Compartición equitativa simétrica' }
      ]
    },
    stepByStepExamples: [
      {
        title: 'Ejemplo: Predicción del tipo de enlace en el fluoruro de litio (LiF)',
        statement: 'Si la electronegatividad de Pauling del Litio (Li) es 1.0 y la del Flúor (F) es 4.0, ¿qué tipo de enlace forman y qué propiedades se esperan?',
        steps: [
          'Paso 1: Calcular la diferencia de electronegatividad: ΔEN = EN(F) - EN(Li) = 4.0 - 1.0 = 3.0.',
          'Paso 2: Comparar con el umbral de 1.7: Dado que 3.0 > 1.7, existe una transferencia neta de electrones.',
          'Paso 3: El litio pierde 1 electrón convirtiéndose en Li⁺, y el flúor lo gana convirtiéndose en F⁻.',
          'Paso 4: Conclusión: Forman un ENLACE IÓNICO con alto punto de fusión y estructura cristalina sólida.'
        ],
        finalAnswer: 'Enlace Iónico (ΔEN = 3.0)'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Pensar que el agua (H2O) conduce la electricidad por tener enlaces covalentes.',
        correction: 'El agua pura es un pésimo conductor. Conduce la electricidad cuando tiene sales disueltas que aportan iones móviles.',
        why: 'Los compuestos puramente covalentes moleculares carecen de portadores de carga libres.'
      }
    ],
    practicalApplications: [
      {
        field: 'Ciencia de Materiales y Nanotecnología',
        application: 'Desarrollo de polímeros conductores, superconductores y baterías de iones de litio.'
      }
    ],
    glossary: [
      { term: 'Electronegatividad', definition: 'Capacidad de un átomo enlazado para atraer hacia sí los electrones de la unión química.' },
      { term: 'Dipolo eléctrico', definition: 'Separación espacial de cargas eléctricas positivas y negativas en una molécula neutra.' }
    ],
    checkExercises: [
      {
        id: 'chk-qui-1',
        question: '¿Por qué los metales son excelentes conductores de la electricidad en estado sólido?',
        options: [
          'Porque sus electrones de valencia están fuertemente ligados al núcleo',
          'Porque poseen un mar de electrones libres deslocalizados por toda la red',
          'Porque forman enlaces covalentes dobles alternados',
          'Porque contienen iones negativos que se desplazan libremente'
        ],
        correctIndex: 1,
        explanation: 'En el enlace metálico, los electrones de valencia están deslocalizados y pueden moverse libremente ante la presencia de un campo eléctrico externo.'
      }
    ]
  },

  // =========================================================================
  // ELECTRICIDAD (TÉCNICA)
  // =========================================================================
  {
    id: 'ele-tec-ley-ohm-kirchhoff',
    subjectId: 'electricidad',
    educationalLevel: 'Técnico',
    topic: 'Circuitos Eléctricos y Mediciones',
    subtopic: 'Ley de Ohm y leyes de Kirchhoff',
    chapterNumber: 1,
    title: 'Ley de Ohm, Potencia Eléctrica y Leyes Fundamentales de Kirchhoff',
    summary: 'Aprende a calcular voltaje, corriente, resistencia y potencia en circuitos en serie y en paralelo con rigor de ingeniería.',
    readingMinutes: 8,
    learningObjectives: [
      'Relacionar tensión ($V$), intensidad de corriente ($I$) y resistencia ($R$) mediante la Ley de Ohm.',
      'Calcular la disipación de potencia en resistores ($P = V \\cdot I = I^2 \\cdot R$).',
      'Aplicar la ley de corrientes (nodos) y la ley de tensiones (mallas) de Kirchhoff.'
    ],
    prerequisites: [
      'Unidades básicas del SI: Voltios (V), Amperios (A), Ohmios (Ω), Vatios (W)',
      'Resolución de sistemas de ecuaciones lineales'
    ],
    conceptualExplanation: `### 1. Ley de Ohm
En un conductor óhmico a temperatura constante, la diferencia de potencial (voltaje o tensión) aplicada entre sus extremos es directamente proporcional a la intensidad de corriente que circula por él:

$$V = I \\cdot R \\iff I = \\frac{V}{R} \\iff R = \\frac{V}{I}$$

- **Tensión ($V$)**: Diferencia de potencial que impulsa las cargas (Voltios).
- **Corriente ($I$)**: Flujo neto de carga eléctrica por unidad de tiempo (Amperios).
- **Resistencia ($R$)**: Oposición que ofrece el material al paso de los portadores de carga (Ohmios).

### 2. Potencia Eléctrica y Efecto Joule
La energía transformada por unidad de tiempo en calor o trabajo útil es:

$$P = V \\cdot I = I^2 \\cdot R = \\frac{V^2}{R} \\quad (\\text{Vatios / Watts})$$

### 3. Leyes de Kirchhoff
- **Ley de Corrientes (Leyes de Nodos)**: La suma algebraica de las corrientes que ingresan a un nodo es igual a la suma de las corrientes que salen: $\\sum I_{\\text{entran}} = \\sum I_{\\text{salen}}$.
- **Ley de Tensiones (Leyes de Mallas)**: La suma algebraica de todas las diferencias de potencial en una trayectoria cerrada o malla es igual a cero: $\\sum V = 0$.`,
    formulaBox: {
      title: 'Formulaciones de Circuitos DC',
      items: [
        { label: 'Ley de Ohm', formula: 'V = I \\cdot R', note: 'I en Amperios, V en Voltios, R en Ohmios' },
        { label: 'Potencia', formula: 'P = V \\cdot I = I^2 \\cdot R', note: 'Medida en Vatios (W)' },
        { label: 'Resistores en Serie', formula: 'R_{\\text{eq}} = R_1 + R_2 + \\dots + R_n', note: 'La corriente es idéntica en todos' },
        { label: 'Resistores en Paralelo', formula: '\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots', note: 'El voltaje es idéntico en todos' }
      ]
    },
    stepByStepExamples: [
      {
        title: 'Ejemplo: Circuito serie con fuente de 24V',
        statement: 'Una fuente de 24V se conecta a dos resistencias en serie de R1 = 4 Ω y R2 = 8 Ω. Halla la corriente total y la potencia disipada en R2.',
        steps: [
          'Paso 1: Calcular la resistencia equivalente serie: R_eq = R1 + R2 = 4 Ω + 8 Ω = 12 Ω.',
          'Paso 2: Calcular la corriente total del circuito con la Ley de Ohm: I = V / R_eq = 24 V / 12 Ω = 2 A.',
          'Paso 3: En un circuito serie la corriente es la misma a través de cada componente: I_R2 = 2 A.',
          'Paso 4: Calcular la caída de voltaje en R2: V_R2 = I · R2 = 2 A · 8 Ω = 16 V.',
          'Paso 5: Calcular la potencia disipada en R2: P_R2 = I² · R2 = (2)² · 8 = 4 · 8 = 32 W.'
        ],
        finalAnswer: 'I = 2 A; Potencia disipada en R2 = 32 W'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Sumar directamente los valores de resistencias conectadas en paralelo.',
        correction: 'En paralelo, la resistencia total siempre es MENOR que la menor de las resistencias individuales (usa 1 / R_eq = 1/R1 + 1/R2).',
        why: 'Agregar ramas en paralelo incrementa los caminos para el flujo de electrones, reduciendo la resistencia global.'
      }
    ],
    practicalApplications: [
      {
        field: 'Instalaciones Eléctricas Domiciliarias e Industriales',
        application: 'Cálculo del calibre de conductores de cobre (AWG) y dimensionamiento de disyuntores termomagnéticos según amperaje admisible.'
      }
    ],
    glossary: [
      { term: 'Nodo', definition: 'Punto de unión eléctrica donde concurren tres o más conductores en un circuito.' },
      { term: 'Malla', definition: 'Cualquier camino cerrado completo a través del cual puede circular una corriente eléctrica.' }
    ],
    checkExercises: [
      {
        id: 'chk-ele-1',
        question: 'Si se conectan en paralelo dos resistencias idénticas de 100 Ω cada una, ¿cuál es la resistencia equivalente?',
        options: ['200 Ω', '100 Ω', '50 Ω', '25 Ω'],
        correctIndex: 2,
        explanation: 'Para dos resistencias iguales en paralelo: R_eq = R / 2 = 100 / 2 = 50 Ω.'
      }
    ]
  },

  // =========================================================================
  // INFORMÁTICA (TÉCNICA)
  // =========================================================================
  {
    id: 'inf-tec-algoritmos-estructuras-control',
    subjectId: 'informatica',
    educationalLevel: 'Técnico',
    topic: 'Algoritmia y Programación',
    subtopic: 'Estructuras de control y lógica algorítmica',
    chapterNumber: 1,
    title: 'Estructuras de Control de Flujo, Invariantes y Lógica Algorítmica',
    summary: 'Comprende el flujo secuencial, selectivo y repetitivo en la resolución algorítmica de problemas computacionales.',
    readingMinutes: 7,
    learningObjectives: [
      'Construir algoritmos con las tres estructuras de control universales del teorema de Böhm-Jacopini.',
      'Diferenciar entre bucles de cantidad determinada (FOR) y de condición indeterminada (WHILE / DO-WHILE).',
      'Prevenir bucles infinitos y verificar condiciones de parada mediante invariantes de bucle.'
    ],
    prerequisites: [
      'Variables, tipos de datos primitivos (enteros, flotantes, booleanos)',
      'Operadores aritméticos y lógicos (AND, OR, NOT)'
    ],
    conceptualExplanation: `El **Teorema de la Estructura de Böhm-Jacopini** demuestra que cualquier función computable puede ser implementada utilizando únicamente tres estructuras de control fundamentales:

1. **Secuencia**: Ejecución ordenada y sucesiva de instrucciones de arriba hacia abajo.
2. **Selección / Condicional**: Bifurcación del flujo de ejecución basada en la evaluación de una condición booleana ($V$ o $F$):
   - *Simple*: \`if (condicion) { ... }\`
   - *Doble*: \`if (condicion) { ... } else { ... }\`
   - *Múltiple*: \`switch / case\`
3. **Iteración / Repetición (Bucles)**:
   - **Bucle WHILE (Mientras)**: Evalúa la condición antes de entrar al bloque. Si la condición es falsa inicialmente, nunca se ejecuta.
   - **Bucle FOR (Para)**: Itera un número predeterminado de veces con inicialización, condición de frontera e incremento explícito.
   - **Bucle DO-WHILE (Hacer mientras)**: Garantiza al menos una ejecución obligatoria del cuerpo antes de comprobar la condición de repetición.`,
    stepByStepExamples: [
      {
        title: 'Ejemplo: Búsqueda del número mayor en un arreglo',
        statement: 'Escribe el algoritmo para encontrar el elemento máximo en una lista de N números enteros.',
        steps: [
          'Paso 1: Validar que la lista no esté vacía (condición de frontera).',
          'Paso 2: Inicializar una variable "maximo" con el primer elemento de la lista (maximo = lista[0]).',
          'Paso 3: Recorrer con un bucle FOR desde el índice 1 hasta N-1.',
          'Paso 4: En cada paso, evaluar la condición: SI lista[i] > maximo, ENTONCES actualizar maximo = lista[i].',
          'Paso 5: Al terminar el bucle, retornar "maximo". Complejidad temporal O(N).'
        ],
        finalAnswer: 'Algoritmo de búsqueda lineal en O(N)'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Error "Off-by-one" (fallar por un elemento en los límites del bucle).',
        correction: 'Si un arreglo tiene tamaño N, sus índices válidos van de 0 a N-1. Iterar hasta <= N provocará desbordamiento de índice.',
        why: 'La indexación con base cero inicia en 0, no en 1.'
      }
    ],
    practicalApplications: [
      {
        field: 'Desarrollo de Software y Automatización',
        application: 'Filtro y procesamiento de grandes volúmenes de datos, motores de recomendación y validación de formularios web.'
      }
    ],
    glossary: [
      { term: 'Algoritmo', definition: 'Conjunto finito, ordenado y no ambiguo de pasos para resolver un problema determinado.' },
      { term: 'Invariante de bucle', definition: 'Propiedad lógica que se cumple antes y después de cada iteración de un ciclo.' }
    ],
    checkExercises: [
      {
        id: 'chk-inf-1',
        question: '¿Qué estructura garantiza que el bloque de código se ejecute AL MENOS una vez?',
        options: ['Bucle FOR', 'Bucle WHILE', 'Bucle DO-WHILE', 'Condicional IF'],
        correctIndex: 2,
        explanation: 'El bucle DO-WHILE evalúa la condición de parada al final del bloque, garantizando al menos una pasada.'
      }
    ]
  }
];

/**
 * Returns all lessons for a specific subject ID.
 */
export function getLessonsBySubject(subjectId: string): StudyLesson[] {
  return STUDY_LESSONS.filter(l => l.subjectId === subjectId);
}

/**
 * Returns a lesson by its unique identifier.
 */
export function getLessonById(lessonId: string): StudyLesson | undefined {
  return STUDY_LESSONS.find(l => l.id === lessonId);
}

/**
 * Finds the closest matching lesson for a given question's subject and topic.
 */
export function findMatchingLesson(subjectId: string, topic?: string): StudyLesson | undefined {
  const subjectLessons = getLessonsBySubject(subjectId);
  if (subjectLessons.length === 0) {
    return STUDY_LESSONS[0];
  }

  if (topic) {
    const cleanTopic = topic.toLowerCase();
    const found = subjectLessons.find(l => 
      l.topic.toLowerCase().includes(cleanTopic) || 
      (l.subtopic && l.subtopic.toLowerCase().includes(cleanTopic)) ||
      l.title.toLowerCase().includes(cleanTopic)
    );
    if (found) return found;
  }

  return subjectLessons[0];
}
