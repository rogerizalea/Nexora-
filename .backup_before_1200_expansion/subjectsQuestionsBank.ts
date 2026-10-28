import { Question } from '../types';

/**
 * REPOSITORIO INTEGRAL Y VERIFICADO DE PREGUNTAS POR MATERIA Y NIVEL EDUCATIVO
 * 12 Asignaturas Oficiales de NEXORA:
 * 1. Matemáticas
 * 2. Lengua y Literatura
 * 3. Razonamiento Lógico y Abstracto
 * 4. Ciencias Naturales
 * 5. Física
 * 6. Química
 * 7. Biología
 * 8. Inglés
 * 9. Estudios Sociales e Historia
 * 10. Electricidad y Electrónica
 * 11. Informática y Programación
 * 12. Mecánica Automotriz
 *
 * 5 Niveles Educativos:
 * - Básico (Escolar / Primaria y Secundaria Básica)
 * - Intermedio (Secundaria Media / 8vo a 10mo)
 * - Bachillerato (Educación Media Superior / Preparatoria)
 * - Técnico (Institutos Técnicos y Tecnológicos Superiores)
 * - Universitario (Grado / Pregrado Académico)
 */

// =========================================================================
// 1. MATEMÁTICAS (Todos los niveles)
// =========================================================================
export const QUESTIONS_MATEMATICAS: Question[] = [
  {
    id: 'mat-bas-1',
    sectionId: 1,
    number: 1,
    text: 'Si compras 3 cuadernos a $2.50 cada uno y pagas con un billete de $10.00, ¿cuánto dinero debes recibir de cambio?',
    options: ['$2.50', '$3.00', '$3.50', '$7.50'],
    correctIndex: 0,
    explanation: 'El costo total de la compra es 3 × $2.50 = $7.50. El cambio se calcula restando el total gastado del importe entregado: $10.00 - $7.50 = $2.50.',
    skill: 'Operaciones Aritméticas Básicas',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Aritmética',
    subtopic: 'Problemas de compra y cambio'
  },
  {
    id: 'mat-bas-2',
    sectionId: 1,
    number: 2,
    text: '¿Cuál es el perímetro de un terreno rectangular que mide 14 metros de largo por 6 metros de ancho?',
    options: ['20 metros', '40 metros', '84 metros', '28 metros'],
    correctIndex: 1,
    explanation: 'El perímetro de un rectángulo es la suma de sus cuatro lados: P = 2 × (largo + ancho) = 2 × (14 m + 6 m) = 2 × 20 m = 40 metros. El valor 84 m² corresponde al área, no al perímetro.',
    skill: 'Geometría Elemental',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Geometría Plana',
    subtopic: 'Perímetros'
  },
  {
    id: 'mat-bas-3',
    sectionId: 1,
    number: 3,
    text: '¿Cuál es el resultado de simplificar la fracción 36/48 a su mínima expresión irreducible?',
    options: ['6/8', '3/4', '9/12', '2/3'],
    correctIndex: 1,
    explanation: 'El Máximo Común Divisor (MCD) de 36 y 48 es 12. Al dividir numerador y denominador entre 12: 36 ÷ 12 = 3 y 48 ÷ 12 = 4, obteniendo la fracción irreducible 3/4.',
    skill: 'Fracciones y Simplificación',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Aritmética',
    subtopic: 'Números Racionales'
  },
  {
    id: 'mat-int-1',
    sectionId: 1,
    number: 4,
    text: 'Resuelve la ecuación de primer grado: 4x - 9 = 2x + 7. ¿Cuál es el valor de x?',
    options: ['x = 4', 'x = 8', 'x = -1', 'x = 16'],
    correctIndex: 1,
    explanation: 'Agrupamos los términos con x a la izquierda y las constantes a la derecha: 4x - 2x = 7 + 9 => 2x = 16 => x = 16 / 2 = 8. Verificación: 4(8) - 9 = 32 - 9 = 23; 2(8) + 7 = 16 + 7 = 23.',
    skill: 'Ecuaciones Lineales',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Álgebra',
    subtopic: 'Ecuaciones de 1er Grado'
  },
  {
    id: 'mat-int-2',
    sectionId: 1,
    number: 5,
    text: 'Un artículo que cuesta $120 tiene un descuento comercial del 25%. ¿Cuánto se debe pagar por el artículo?',
    options: ['$90', '$95', '$80', '$30'],
    correctIndex: 0,
    explanation: 'El 25% de $120 equivale a (25/100) × 120 = $30 de descuento. El precio a pagar es $120 - $30 = $90 (o multiplicando directamente 120 × 0.75 = $90).',
    skill: 'Porcentajes y Descuentos',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Aritmética Comercial',
    subtopic: 'Porcentajes'
  },
  {
    id: 'mat-int-3',
    sectionId: 1,
    number: 6,
    text: 'En un triángulo rectángulo, los catetos miden 6 cm y 8 cm. ¿Cuál es la longitud de la hipotenusa?',
    options: ['14 cm', '10 cm', '12 cm', '48 cm'],
    correctIndex: 1,
    explanation: 'Por el Teorema de Pitágoras: c² = a² + b² = 6² + 8² = 36 + 64 = 100. Extrayendo raíz cuadrada: c = √100 = 10 cm.',
    skill: 'Teorema de Pitágoras',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Geometría y Trigonometría',
    subtopic: 'Triángulos Rectángulos'
  },
  {
    id: 'mat-bac-1',
    sectionId: 1,
    number: 7,
    text: '¿Cuáles son las raíces reales de la ecuación cuadrática 2x² - 8x + 6 = 0?',
    options: ['x = 1 y x = 3', 'x = -1 y x = -3', 'x = 2 y x = 4', 'x = 0 y x = 6'],
    correctIndex: 0,
    explanation: 'Dividiendo toda la ecuación entre 2: x² - 4x + 3 = 0. Factorizando: buscamos dos números que multiplicados den +3 y sumados den -4: (x - 1)(x - 3) = 0. Así, x₁ = 1 y x₂ = 3.',
    skill: 'Ecuaciones Cuadráticas',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Álgebra',
    subtopic: 'Ecuaciones Polinómicas'
  },
  {
    id: 'mat-bac-2',
    sectionId: 1,
    number: 8,
    text: '¿Cuál es el valor del logaritmo log₂(32) + log₃(81)?',
    options: ['8', '9', '7', '12'],
    correctIndex: 1,
    explanation: 'Como 2⁵ = 32, entonces log₂(32) = 5. Como 3⁴ = 81, entonces log₃(81) = 4. La suma resultante es 5 + 4 = 9.',
    skill: 'Propiedades de Logaritmos',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Funciones Trascendentes',
    subtopic: 'Logaritmos'
  },
  {
    id: 'mat-bac-3',
    sectionId: 1,
    number: 9,
    text: 'Si sen(θ) = 3/5 en un triángulo rectángulo en el primer cuadrante, ¿cuál es el valor de cos(θ)?',
    options: ['4/5', '2/5', '5/4', '3/4'],
    correctIndex: 0,
    explanation: 'Por la identidad fundamental pitagórica sen²(θ) + cos²(θ) = 1: cos²(θ) = 1 - (3/5)² = 1 - 9/25 = 16/25. En el primer cuadrante cos(θ) > 0, por lo que cos(θ) = √(16/25) = 4/5.',
    skill: 'Identidades Trigonométricas',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Trigonometría',
    subtopic: 'Razones Trigonométricas'
  },
  {
    id: 'mat-tec-1',
    sectionId: 1,
    number: 10,
    text: 'En un taller de manufactura, una máquina tarda 4 horas en producir 240 piezas. Con una eficiencia mejorada que incrementa la velocidad un 25%, ¿cuántas piezas producirá en 5 horas?',
    options: ['300 piezas', '375 piezas', '360 piezas', '400 piezas'],
    correctIndex: 1,
    explanation: 'Tasa original = 240 piezas / 4 h = 60 piezas/h. Con 25% de incremento: 60 × 1.25 = 75 piezas/h. En 5 horas de producción: 75 × 5 = 375 piezas.',
    skill: 'Tasas de Producción y Rendimiento',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Matemática Aplicada a la Producción',
    subtopic: 'Rendimiento Industrial'
  },
  {
    id: 'mat-tec-2',
    sectionId: 1,
    number: 11,
    text: 'Para calcular la resistencia equivalente de dos resistores en paralelo de R₁ = 30 Ω y R₂ = 20 Ω, ¿cuál es el valor de Req?',
    options: ['50 Ω', '12 Ω', '25 Ω', '15 Ω'],
    correctIndex: 1,
    explanation: 'En paralelo: 1/Req = 1/R₁ + 1/R₂ = 1/30 + 1/20 = (2 + 3)/60 = 5/60 = 1/12. Invirtiendo: Req = 12 Ω (o por fórmula de producto sobre suma: (30 × 20) / (30 + 20) = 600 / 50 = 12 Ω).',
    skill: 'Modelado Eléctrico-Matemático',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Fórmulas Técnicas',
    subtopic: 'Circuitos en Paralelo'
  },
  {
    id: 'mat-uni-1',
    sectionId: 1,
    number: 12,
    text: '¿Cuál es la derivada de la función f(x) = 3x⁴ - 5x² + 7x - 2 con respecto a x?',
    options: ['f\'(x) = 12x³ - 10x + 7', 'f\'(x) = 12x³ - 5x + 7', 'f\'(x) = 7x³ - 10x + 7', 'f\'(x) = 12x⁴ - 10x² + 7'],
    correctIndex: 0,
    explanation: 'Aplicando la regla de la potencia d/dx(xⁿ) = n·xⁿ⁻¹: d/dx(3x⁴) = 12x³, d/dx(-5x²) = -10x, d/dx(7x) = 7, y la derivada de la constante -2 es 0. El resultado es 12x³ - 10x + 7.',
    skill: 'Cálculo Diferencial',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Cálculo',
    subtopic: 'Reglas de Derivación'
  },
  {
    id: 'mat-uni-2',
    sectionId: 1,
    number: 13,
    text: '¿Cuál es el valor del límite: lim (x → 0) [sen(4x) / x]?',
    options: ['0', '1', '4', 'Infinito'],
    correctIndex: 2,
    explanation: 'Multiplicando y dividiendo por 4: lim (x → 0) [4 · sen(4x) / (4x)] = 4 · lim (u → 0) [sen(u)/u] = 4 · 1 = 4. También verificable aplicando la Regla de L\'Hôpital: derivada del numerador es 4·cos(4x) y del denominador es 1, evaluando en 0 da 4·cos(0)/1 = 4.',
    skill: 'Límites Trigonométricos Fundamentales',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Análisis Matemático',
    subtopic: 'Límites y Continuidad'
  },
  {
    id: 'mat-uni-3',
    sectionId: 1,
    number: 14,
    text: '¿Cuál es el determinante de la matriz A = [[2, 5], [1, 4]]?',
    options: ['3', '8', '13', '-3'],
    correctIndex: 0,
    explanation: 'El determinante de una matriz 2×2 [[a, b], [c, d]] es ad - bc. Aquí: det(A) = (2)(4) - (5)(1) = 8 - 5 = 3.',
    skill: 'Álgebra Lineal',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Matrices y Determinantes',
    subtopic: 'Sistemas Lineales'
  }
];

// =========================================================================
// 2. LENGUA Y LITERATURA (Todos los niveles)
// =========================================================================
export const QUESTIONS_LENGUA: Question[] = [
  {
    id: 'len-bas-1',
    sectionId: 1,
    number: 1,
    text: '¿Cuál de las siguientes palabras es un sustantivo propio y debe escribirse siempre con mayúscula inicial?',
    options: ['río', 'montaña', 'Amazonas', 'continente'],
    correctIndex: 2,
    explanation: 'Amazonas es el nombre propio de un río y una región geográfica específica. "Río", "montaña" y "continente" son sustantivos comunes que nombran entidades de forma genérica.',
    skill: 'Clasificación de Sustantivos',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Gramática',
    subtopic: 'Sustantivos Propios y Comunes'
  },
  {
    id: 'len-bas-2',
    sectionId: 1,
    number: 2,
    text: 'Indica cuál de las siguientes opciones contiene una palabra aguda que requiere tilde según las reglas ortográficas del español:',
    options: ['árbol', 'canción', 'música', 'ventana'],
    correctIndex: 1,
    explanation: 'Las palabras agudas llevan el acento en la última sílaba y se tildan cuando terminan en n, s o vocal. "Canción" termina en n y lleva su acento tónico en "ción", por lo que debe tildarse.',
    skill: 'Acentuación Ortográfica',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Ortografía',
    subtopic: 'Reglas de Acentuación'
  },
  {
    id: 'len-int-1',
    sectionId: 1,
    number: 3,
    text: 'Identifica la figura retórica presente en la expresión: «El viento susurraba secretos entre los cipreses de la colina».',
    options: ['Metáfora', 'Prosopopeya (Personificación)', 'Hipérbole', 'Antítesis'],
    correctIndex: 1,
    explanation: 'La prosopopeya o personificación consiste en atribuir cualidades, emociones o acciones típicamente humanas (susurrar secretos) a seres inanimados o elementos de la naturaleza (el viento).',
    skill: 'Figuras Literarias',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Literatura',
    subtopic: 'Recursos Estilísticos'
  },
  {
    id: 'len-int-2',
    sectionId: 1,
    number: 4,
    text: '¿Qué función sintáctica cumple el fragmento subrayado en la oración: «Los científicos entregaron «el informe de impacto ambiental» al ministerio»?',
    options: ['Sujeto', 'Objeto Directo (Complemento Directo)', 'Objeto Indirecto', 'Complemento Circunstancial'],
    correctIndex: 1,
    explanation: '«El informe de impacto ambiental» es el Objeto Directo, ya que recibe directamente la acción del verbo «entregaron» y puede sustituirse por el pronombre «lo»: «Los científicos lo entregaron al ministerio».',
    skill: 'Sintaxis de la Oración Simple',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Sintaxis',
    subtopic: 'Estructura Oracional'
  },
  {
    id: 'len-bac-1',
    sectionId: 1,
    number: 5,
    text: '¿A qué corriente literaria pertenece la obra cumbre «Cien años de soledad» de Gabriel García Márquez?',
    options: ['Romanticismo Hispanoamericano', 'Realismo Mágico (Boom Latinoamericano)', 'Modernismo', 'Neoclasicismo'],
    correctIndex: 1,
    explanation: '«Cien años de soledad» (1967) es la obra insignia del Realismo Mágico y del Boom Latinoamericano, fusionando acontecimientos verosímiles de la historia colombiana y continental con elementos míticos y fantásticos tratados con absoluta naturalidad cotidiana.',
    skill: 'Historia de la Literatura',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Literatura Hispanoamericana',
    subtopic: 'El Boom y Realismo Mágico'
  },
  {
    id: 'len-bac-2',
    sectionId: 1,
    number: 6,
    text: 'Identifica la oración que contiene una proposición subordinada adverbial de causa:',
    options: [
      'Iremos al laboratorio cuando termine la lluvia.',
      'No asistió a la conferencia porque debía presentar su proyecto final.',
      'El informe que redactaste fue aprobado por el comité.',
      'Dijo que vendría temprano mañana.'
    ],
    correctIndex: 1,
    explanation: '«porque debía presentar su proyecto final» introduce el motivo o causa por el cual no se realizó la acción principal. Está encabezada por el nexo causal «porque».',
    skill: 'Sintaxis Compleja',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Gramática Superior',
    subtopic: 'Oraciones Subordinadas Adverbiales'
  },
  {
    id: 'len-tec-1',
    sectionId: 1,
    number: 7,
    text: 'En la redacción de un informe técnico o manual de procedimientos, ¿cuál de los siguientes criterios es fundamental para garantizar la objetividad y precisión?',
    options: [
      'Emplear abundantes adjetivos valorativos y figuras poéticas.',
      'Utilizar lenguaje denotativo, terminología normalizada y registro formal impersonal.',
      'Escribir en tono emotivo y coloquial para ganar empatía del lector.',
      'Omitir datos numéricos para no sobrecargar el texto.'
    ],
    correctIndex: 1,
    explanation: 'Los textos técnicos requieren precisión terminológica, lenguaje unívoco y denotativo (sin dobles interpretaciones) y un registro formal objetivo que permita replicar instrucciones de manera exacta y sin ambigüedad.',
    skill: 'Comunicación Técnica y Redacción Profesional',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Redacción Técnica',
    subtopic: 'Manuales y Reportes Técnicos'
  },
  {
    id: 'len-tec-2',
    sectionId: 1,
    number: 8,
    text: '¿Cuál es la función primordial de la norma de citación técnica (como IEEE o APA) en un proyecto de desarrollo tecnológico?',
    options: [
      'Hacer que el documento sea más extenso.',
      'Atribuir la propiedad intelectual, permitir la verificación de fuentes y evitar el plagio académico.',
      'Aumentar la dificultad de lectura del documento.',
      'Reemplazar la necesidad de redactar conclusiones propias.'
    ],
    correctIndex: 1,
    explanation: 'Las normas de citación garantizan la integridad académica y profesional, protegen los derechos de autor, proporcionan respaldo empírico a las afirmaciones y permiten que los evaluadores verifiquen el origen de los datos empleados.',
    skill: 'Ética y Documentación Profesional',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Normas de Redacción',
    subtopic: 'Citación e Integridad Académica'
  },
  {
    id: 'len-uni-1',
    sectionId: 1,
    number: 9,
    text: 'En el análisis del discurso académico, ¿qué rasgo caracteriza a una falacia ad hominem?',
    options: [
      'Apelar a la opinión de la mayoría para justificar una tesis.',
      'Descalificar el argumento atacando a la persona que lo emite en lugar de refutar sus razones o evidencias.',
      'Concluir que una afirmación es verdadera porque no se ha demostrado que sea falsa.',
      'Establecer una relación de causa y efecto basada únicamente en una sucesión temporal.'
    ],
    correctIndex: 1,
    explanation: 'La falacia ad hominem consiste en evadir la discusión racional del argumento central, atacando aspectos personales, morales o psicológicos del emisor con el fin de invalidar su postura sin aportar contraargumentos válidos.',
    skill: 'Argumentación y Pensamiento Crítico',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Lógica Argumentativa',
    subtopic: 'Falacias No Formales'
  },
  {
    id: 'len-uni-2',
    sectionId: 1,
    number: 10,
    text: '¿Cuál es la diferencia semiótica fundamental entre «significado» y «significante» propuesta por Ferdinand de Saussure?',
    options: [
      'El significante es el concepto mental y el significado es la imagen acústica o forma física.',
      'El significante es la huella psíquica de la forma material (sonido o grafía) y el significado es el concepto abstracto asociado.',
      'No existe distinción; ambos términos son sinónimos absolutos en lingüística estructural.',
      'El significante es exclusivamente la palabra escrita y el significado es el referente del mundo real.'
    ],
    correctIndex: 1,
    explanation: 'Saussure definió el signo lingüístico como una entidad biplánica: el significante es la imagen acústica o representación sensorial de la expresión, y el significado es la representación conceptual o mental evocada.',
    skill: 'Lingüística General y Semiótica',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Lingüística Teórica',
    subtopic: 'Teoría del Signo Lingüístico'
  }
];

// =========================================================================
// 3. RAZONAMIENTO LÓGICO Y ABSTRACTO (Todos los niveles)
// =========================================================================
export const QUESTIONS_RAZONAMIENTO: Question[] = [
  {
    id: 'raz-bas-1',
    sectionId: 1,
    number: 1,
    text: 'Encuentra el número que continúa lógicamente la secuencia: 4, 8, 16, 32, __',
    options: ['48', '60', '64', '56'],
    correctIndex: 2,
    explanation: 'El patrón es una progresión geométrica donde cada término se multiplica por 2: 4 × 2 = 8, 8 × 2 = 16, 16 × 2 = 32, por ende 32 × 2 = 64.',
    skill: 'Patrones Numéricos Progresivos',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Secuencias Numéricas',
    subtopic: 'Progresiones Geométricas'
  },
  {
    id: 'raz-bas-2',
    sectionId: 1,
    number: 2,
    text: 'Completa la analogía: «Día es a Sol como Noche es a:»',
    options: ['Estrella', 'Luna', 'Viento', 'Sombra'],
    correctIndex: 1,
    explanation: 'La relación analógica es de presencia y elemento celeste dominante que ilumina o caracteriza cada periodo de la rotación terrestre: el Sol define el día y la Luna es el cuerpo astronómico visible distintivo de la noche.',
    skill: 'Analogías Verbales y Conceptuales',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Analogías',
    subtopic: 'Asociación Conceptual'
  },
  {
    id: 'raz-int-1',
    sectionId: 1,
    number: 3,
    text: 'Determina el siguiente término en la serie alfanumérica: B2, D4, F6, H8, __',
    options: ['I10', 'J10', 'J9', 'K10'],
    correctIndex: 1,
    explanation: 'Las letras avanzan de dos en dos en el abecedario (saltando una letra): B, [C], D, [E], F, [G], H, [I], J. Los números avanzan en múltiplos de dos: 2, 4, 6, 8, 10. El término correspondiente es J10.',
    skill: 'Series Alfanuméricas Combinadas',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Series Lógicas',
    subtopic: 'Secuencias Alfanuméricas'
  },
  {
    id: 'raz-int-2',
    sectionId: 1,
    number: 4,
    text: 'En un grupo de 4 amigos, sabemos que: Carlos es más alto que Daniel. Bruno es más bajo que Daniel. Alejandro es más alto que Carlos. ¿Quién es el más bajo de todos?',
    options: ['Carlos', 'Alejandro', 'Daniel', 'Bruno'],
    correctIndex: 3,
    explanation: 'Ordenando de mayor a menor altura: Alejandro > Carlos > Daniel > Bruno. Por lo tanto, Bruno es la persona con menor estatura de todo el grupo.',
    skill: 'Razonamiento Relacional y Ordenamiento',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Lógica Deductiva',
    subtopic: 'Ordenamiento Lineal'
  },
  {
    id: 'raz-bac-1',
    sectionId: 1,
    number: 5,
    text: 'Premisa 1: Todos los cetáceos son mamíferos acuáticos. Premisa 2: Las ballenas jorobadas son cetáceos. ¿Cuál es la conclusión lógicamente válida?',
    options: [
      'Algunos mamíferos no son cetáceos.',
      'Las ballenas jorobadas son mamíferos acuáticos.',
      'Todos los animales marinos son mamíferos.',
      'Las ballenas jorobadas respiran exclusivamente por branquias.'
    ],
    correctIndex: 1,
    explanation: 'Por silogismo categórico clásico de forma Barbara (Todo M es P; Todo S es M; por lo tanto, Todo S es P), la conclusión necesaria e ineludible es que las ballenas jorobadas son mamíferos acuáticos.',
    skill: 'Silogismos y Lógica Formal',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Lógica Categórica',
    subtopic: 'Silogismos Deductivos'
  },
  {
    id: 'raz-bac-2',
    sectionId: 1,
    number: 6,
    text: 'Un reloj se adelanta 3 minutos cada 2 horas. Si se sincroniza exactamente a las 08:00 a.m., ¿qué hora marcará cuando en realidad sean las 04:00 p.m. del mismo día?',
    options: ['04:08 p.m.', '04:12 p.m.', '04:15 p.m.', '04:24 p.m.'],
    correctIndex: 1,
    explanation: 'Desde las 08:00 a.m. hasta las 04:00 p.m. (16:00) han transcurrido 8 horas reales. Si se adelanta 3 minutos por cada 2 horas, en 8 horas se adelanta (8 / 2) × 3 = 4 × 3 = 12 minutos. Marcará 04:12 p.m.',
    skill: 'Problemas de Cronometría y Proporciones',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Razonamiento Cuantitativo',
    subtopic: 'Cronometría'
  },
  {
    id: 'raz-tec-1',
    sectionId: 1,
    number: 7,
    text: 'En una tabla de verdad para la proposición condicional (p → q), ¿en qué único caso la proposición resulta FALSA?',
    options: [
      'Cuando p es verdadera y q es verdadera.',
      'Cuando p es falsa y q es verdadera.',
      'Cuando p es verdadera y q es falsa.',
      'Cuando p es falsa y q es falsa.'
    ],
    correctIndex: 2,
    explanation: 'En la lógica formal proposicional, una implicación p → q sólo se rompe (es falsa) cuando la condición antecedente verdadera promete una consecuencia que resulta no cumpliéndose (consecuente falso: V → F es F).',
    skill: 'Lógica Booleana y Tablas de Verdad',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Lógica Computacional',
    subtopic: 'Conectivos Proposicionales'
  },
  {
    id: 'raz-tec-2',
    sectionId: 1,
    number: 8,
    text: 'Un sistema automatizado activa una alarma si el sensor A detecta humo O el sensor B detecta temperatura superior a 80 °C, pero NO si el interruptor de mantenimiento C está cerrado. ¿Cuál es la expresión lógica del disparo de alarma?',
    options: [
      '(A AND B) AND C',
      '(A OR B) AND (NOT C)',
      '(A AND NOT B) OR C',
      '(A OR B) OR C'
    ],
    correctIndex: 1,
    explanation: 'El disparo requiere que se cumpla la condición de peligro (A OR B) y simultáneamente que NO esté activado el modo de mantenimiento (NOT C). Por ende: (A OR B) AND (NOT C).',
    skill: 'Diseño Lógico de Sistemas de Control',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Compuertas Lógicas',
    subtopic: 'Álgebra de Boole Aplicada'
  },
  {
    id: 'raz-uni-1',
    sectionId: 1,
    number: 9,
    text: '¿Cuál es la negación lógica de la proposición cuantificada universal: «Todos los servidores del clúster están operativos»?',
    options: [
      'Ningún servidor del clúster está operativo.',
      'Existe al menos un servidor del clúster que no está operativo.',
      'Todos los servidores del clúster están caídos.',
      'La mayoría de los servidores están operativos.'
    ],
    correctIndex: 1,
    explanation: 'Por el teorema de De Morgan para cuantificadores de predicados, ¬(∀x P(x)) ≡ ∃x ¬P(x). La negación de un universal afirmativo no es un universal negativo, sino un existencial negativo: «Existe al menos uno que no».',
    skill: 'Lógica de Predicados y Cuantificadores',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Lógica Matemática',
    subtopic: 'Cuantificadores de Primer Orden'
  },
  {
    id: 'raz-uni-2',
    sectionId: 1,
    number: 10,
    text: 'En un torneo de ajedrez con 10 participantes donde cada jugador se enfrenta exactamente una vez contra todos los demás, ¿cuántas partidas se juegan en total?',
    options: ['90', '45', '100', '20'],
    correctIndex: 1,
    explanation: 'Se trata de una combinación de 10 elementos tomados de 2 en 2 (el orden no importa en el emparejamiento): C(10, 2) = (10 × 9) / (2 × 1) = 90 / 2 = 45 partidas.',
    skill: 'Combinatoria y Razonamiento Discreto',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Matemática Discreta',
    subtopic: 'Combinaciones Simples'
  }
];

// =========================================================================
// 4. CIENCIAS NATURALES (Todos los niveles)
// =========================================================================
export const QUESTIONS_CIENCIAS_NATURALES: Question[] = [
  {
    id: 'cn-bas-1',
    sectionId: 1,
    number: 1,
    text: '¿En qué estado de la materia las partículas tienen forma y volumen definidos debido a que están fuertemente unidas?',
    options: ['Líquido', 'Sólido', 'Gaseoso', 'Plasma'],
    correctIndex: 1,
    explanation: 'En el estado sólido, las fuerzas de cohesión intermoleculares son intensas, lo que restringe el movimiento de las partículas a vibraciones en posiciones fijas, conservando forma y volumen propios.',
    skill: 'Estados de la Materia',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Física y Química Básica',
    subtopic: 'Estados de Agregación'
  },
  {
    id: 'cn-bas-2',
    sectionId: 1,
    number: 2,
    text: '¿Qué proceso del ciclo hidrológico convierte el agua líquida de ríos, lagos y océanos en vapor por acción del calor solar?',
    options: ['Condensación', 'Precipitación', 'Evaporación', 'Infiltración'],
    correctIndex: 2,
    explanation: 'La evaporación es el cambio de fase de líquido a gas promovido por la radiación solar térmica, elevando moléculas de vapor de agua hacia la atmósfera.',
    skill: 'Ciclos Biogeoquímicos',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Ciencias de la Tierra',
    subtopic: 'Ciclo del Agua'
  },
  {
    id: 'cn-int-1',
    sectionId: 1,
    number: 3,
    text: '¿Cuál de los siguientes es un ejemplo de energía renovable e inagotable a escala humana?',
    options: ['Carbón mineral', 'Energía solar fotovoltaica', 'Petróleo crudo', 'Gas natural licuado'],
    correctIndex: 1,
    explanation: 'La energía solar fotovoltaica aprovecha la radiación electromagnética del Sol, un recurso renovable y limpio que no agota reservas finitas de hidrocarburos fósiles.',
    skill: 'Recursos Naturales y Energía',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Medio Ambiente',
    subtopic: 'Fuentes de Energía'
  },
  {
    id: 'cn-int-2',
    sectionId: 1,
    number: 4,
    text: '¿Qué capa de la atmósfera terrestre contiene la mayor concentración de ozono (O₃) que filtra la radiación ultravioleta perjudicial?',
    options: ['Troposfera', 'Estratosfera', 'Mesosfera', 'Termosfera'],
    correctIndex: 1,
    explanation: 'La capa de ozono se ubica en la estratosfera (aproximadamente entre 15 y 35 km de altitud), absorbiendo entre el 97% y el 99% de la radiación ultravioleta de alta frecuencia (UV-B y UV-C).',
    skill: 'Estructura Atmosférica',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Meteorología y Atmósfera',
    subtopic: 'Capas Atmosféricas'
  },
  {
    id: 'cn-bac-1',
    sectionId: 1,
    number: 5,
    text: '¿Qué fenómeno ecológico ocurre cuando el exceso de nutrientes (nitrógeno y fósforo) en masas de agua provoca un crecimiento desmedido de algas y desoxigenación?',
    options: ['Bioacumulación', 'Eutrofización', 'Salinización', 'Desertificación'],
    correctIndex: 1,
    explanation: 'La eutrofización es el enriquecimiento excesivo de nutrientes que genera proliferación de biomasa de algas (blooms); al morir, las bacterias descomponedoras consumen el oxígeno disuelto, creando zonas anóxicas y muerte de fauna acuática.',
    skill: 'Impacto Ambiental y Ecología',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Ecología Aplicada',
    subtopic: 'Contaminación de Aguas'
  },
  {
    id: 'cn-tec-1',
    sectionId: 1,
    number: 6,
    text: 'En el tratamiento biológico de aguas residuales urbanas, ¿qué función desempeñan los lodos activados con aireación forzada?',
    options: [
      'Precipitar metales pesados mediante electrólisis.',
      'Suministrar oxígeno a microorganismos aerobios para biodegradar la materia orgánica disuelta.',
      'Esterilizar el agua con radiación gamma.',
      'Filtrar mecánicamente partículas superiores a 5 milímetros.'
    ],
    correctIndex: 1,
    explanation: 'El sistema de lodos activados introduce oxígeno mediante sopladores para estimular cultivos bacterianos aerobios que metabolizan y degradan la carga orgánica biodegradable (DBO5), convirtiéndola en CO₂, agua y biomasa sedimentable.',
    skill: 'Biotecnología Ambiental y Tratamiento de Aguas',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Tecnología Ambiental',
    subtopic: 'Depuración Biológica'
  },
  {
    id: 'cn-uni-1',
    sectionId: 1,
    number: 7,
    text: '¿Cuál es el principal mecanismo de forzamiento radiativo positivo que provoca el efecto invernadero antrópico contemporáneo?',
    options: [
      'Disminución del albedo solar debido a la reforestación.',
      'Absorción y reemisión de radiación infrarroja térmica terrestre por gases de efecto invernadero (CO₂, CH₄, N₂O).',
      'Incremento de la constante solar por ciclos magnéticos solares.',
      'Destrucción de la capa de ozono en la mesosfera.'
    ],
    correctIndex: 1,
    explanation: 'Los gases de efecto invernadero poseen momentos dipolares que les permiten absorber fotones en la longitud de onda infrarroja térmica emitida por la superficie terrestre, reirradiando parte de esa energía hacia la troposfera e incrementando la temperatura superficial media.',
    skill: 'Termodinámica Atmosférica y Climatología Global',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Ciencias Climáticas',
    subtopic: 'Balance Radiativo Terrestre'
  }
];

// =========================================================================
// 5. FÍSICA (Todos los niveles)
// =========================================================================
export const QUESTIONS_FISICA: Question[] = [
  {
    id: 'fis-bas-1',
    sectionId: 1,
    number: 1,
    text: 'Un automóvil viaja a una velocidad constante de 60 km/h en línea recta durante 3 horas. ¿Qué distancia total recorre?',
    options: ['120 km', '180 km', '20 km', '240 km'],
    correctIndex: 1,
    explanation: 'En el Movimiento Rectilíneo Uniforme (MRU): d = v × t. Multiplicando: d = 60 km/h × 3 h = 180 km.',
    skill: 'Cinemática Básica',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Cinemática',
    subtopic: 'MRU'
  },
  {
    id: 'fis-bas-2',
    sectionId: 1,
    number: 2,
    text: '¿Cuál es la unidad oficial de fuerza en el Sistema Internacional de Unidades (SI)?',
    options: ['Joule (J)', 'Watt (W)', 'Newton (N)', 'Pascal (Pa)'],
    correctIndex: 2,
    explanation: 'El Newton (N) es la unidad de fuerza del SI, definida como la fuerza requerida para comunicar a una masa de 1 kg una aceleración de 1 m/s² (1 N = 1 kg·m/s²). Joule mide energía, Watt potencia y Pascal presión.',
    skill: 'Sistemas de Unidades',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Metrología',
    subtopic: 'Unidades del SI'
  },
  {
    id: 'fis-int-1',
    sectionId: 1,
    number: 3,
    text: 'Si se aplica una fuerza neta constante de 50 N sobre una masa de 10 kg en una superficie horizontal sin fricción, ¿qué aceleración experimenta el cuerpo?',
    options: ['500 m/s²', '5 m/s²', '0.2 m/s²', '40 m/s²'],
    correctIndex: 1,
    explanation: 'Por la Segunda Ley de Newton: F = m · a => a = F / m = 50 N / 10 kg = 5 m/s².',
    skill: 'Leyes del Movimiento de Newton',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Dinámica',
    subtopic: 'Segunda Ley de Newton'
  },
  {
    id: 'fis-int-2',
    sectionId: 1,
    number: 4,
    text: 'Un objeto de 2 kg se encuentra a una altura de 15 metros del suelo. Tomando la aceleración de la gravedad g = 9.8 m/s², ¿cuál es su energía potencial gravitacional?',
    options: ['30 J', '294 J', '150 J', '147 J'],
    correctIndex: 1,
    explanation: 'La energía potencial gravitatoria se calcula como Ep = m · g · h = 2 kg × 9.8 m/s² × 15 m = 294 Joules (J).',
    skill: 'Trabajo y Energía Mecánica',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Energía',
    subtopic: 'Energía Potencial'
  },
  {
    id: 'fis-bac-1',
    sectionId: 1,
    number: 5,
    text: 'Un móvil que parte del reposo acelera uniformemente a razón de 4 m/s² durante 5 segundos. ¿Qué velocidad final alcanza y qué distancia recorre?',
    options: [
      'vf = 20 m/s; d = 50 m',
      'vf = 20 m/s; d = 100 m',
      'vf = 9 m/s; d = 45 m',
      'vf = 16 m/s; d = 40 m'
    ],
    correctIndex: 0,
    explanation: 'Velocidad final: vf = v0 + a·t = 0 + (4)(5) = 20 m/s. Distancia: d = v0·t + (1/2)·a·t² = 0 + 0.5 × 4 × 5² = 2 × 25 = 50 metros.',
    skill: 'Movimiento Rectilíneo Uniformemente Variado (MRUV)',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Cinemática',
    subtopic: 'MRUV'
  },
  {
    id: 'fis-bac-2',
    sectionId: 1,
    number: 6,
    text: 'Dos cargas eléctricas puntuales de q₁ = +2 µC y q₂ = -3 µC están separadas por una distancia de 0.1 m en el vacío (k = 9 × 10⁹ N·m²/C²). ¿Cuál es la magnitud de la fuerza electrostática entre ellas?',
    options: ['5.4 N (atractiva)', '54 N (repulsiva)', '0.54 N (atractiva)', '5.4 N (repulsiva)'],
    correctIndex: 0,
    explanation: 'Por la Ley de Coulomb: F = k·|q₁·q₂| / r² = (9×10⁹)·(2×10⁻⁶)·(3×10⁻⁶) / (0.1)² = (54×10⁻³) / 0.01 = 5.4 N. Al ser cargas de signos opuestos, la fuerza es de atracción mutua.',
    skill: 'Electrostática y Ley de Coulomb',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Electromagnetismo',
    subtopic: 'Ley de Coulomb'
  },
  {
    id: 'fis-tec-1',
    sectionId: 1,
    number: 7,
    text: 'Un gato hidráulico industrial tiene un émbolo menor de área A₁ = 10 cm² y un émbolo mayor de área A₂ = 200 cm². Si se aplica una fuerza de 300 N en el émbolo menor, ¿qué fuerza se genera en el émbolo mayor?',
    options: ['1500 N', '6000 N', '3000 N', '2000 N'],
    correctIndex: 1,
    explanation: 'Por el Principio de Pascal: P₁ = P₂ => F₁ / A₁ = F₂ / A₂ => F₂ = F₁ × (A₂ / A₁) = 300 N × (200 cm² / 10 cm²) = 300 × 20 = 6000 N.',
    skill: 'Mecánica de Fluidos y Principio de Pascal',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Hidráulica',
    subtopic: 'Prensa Hidráulica'
  },
  {
    id: 'fis-uni-1',
    sectionId: 1,
    number: 8,
    text: '¿Cuál es el trabajo realizado por una fuerza variable F(x) = 6x² + 2x (en Newtons) al desplazar una partícula a lo largo del eje x desde x = 0 m hasta x = 2 m?',
    options: ['16 Joules', '20 Joules', '28 Joules', '12 Joules'],
    correctIndex: 1,
    explanation: 'El trabajo W es la integral definida de la fuerza respecto a la posición: W = ∫₀² (6x² + 2x) dx = [2x³ + x²]₀² = (2(2)³ + 2²) - 0 = (2(8) + 4) = 16 + 4 = 20 Joules.',
    skill: 'Cálculo Integral en Física y Trabajo Mecánico',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Mecánica Analítica',
    subtopic: 'Integrales de Trabajo'
  },
  {
    id: 'fis-uni-2',
    sectionId: 1,
    number: 9,
    text: 'Según la Primera Ley de la Termodinámica (ΔU = Q - W), si un gas ideal absorbe 500 J de calor mientras se expande realizando 200 J de trabajo sobre sus alrededores, ¿cuál es la variación de su energía interna?',
    options: ['+700 J', '+300 J', '-300 J', '-700 J'],
    correctIndex: 1,
    explanation: 'Aplicando el balance de energía: ΔU = Q - W = +500 J - 200 J = +300 J. La energía interna del sistema aumenta en 300 Joules.',
    skill: 'Termodinámica Clásica',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Termodinámica',
    subtopic: 'Primera Ley de la Termodinámica'
  }
];

// =========================================================================
// 6. QUÍMICA (Todos los niveles)
// =========================================================================
export const QUESTIONS_QUIMICA: Question[] = [
  {
    id: 'qui-bas-1',
    sectionId: 1,
    number: 1,
    text: '¿Cuál de las siguientes partículas subatómicas posee carga eléctrica negativa y orbita alrededor del núcleo atómico?',
    options: ['Protón', 'Neutrón', 'Electrón', 'Positrón'],
    correctIndex: 2,
    explanation: 'El electrón posee carga negativa elemental (-1.602 × 10⁻¹⁹ C) y masa despreciable en comparación con los nucleones, ocupando los orbitales periféricos del átomo.',
    skill: 'Estructura Atómica Fundamental',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Química General',
    subtopic: 'Partículas Subatómicas'
  },
  {
    id: 'qui-bas-2',
    sectionId: 1,
    number: 2,
    text: '¿Cuál es la fórmula química del agua pura, compuesta por dos átomos de hidrógeno y uno de oxígeno?',
    options: ['H₂O₂', 'H₂O', 'HO₂', 'CO₂'],
    correctIndex: 1,
    explanation: 'La molécula de agua está compuesta por dos átomos de hidrógeno enlazados covalentemente a un átomo central de oxígeno: H₂O. H₂O₂ corresponde al peróxido de hidrógeno.',
    skill: 'Fórmulas Químicas Básicas',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Nomenclatura Química',
    subtopic: 'Compuestos Binarios'
  },
  {
    id: 'qui-int-1',
    sectionId: 1,
    number: 3,
    text: 'En la escala de pH medida a 25 °C, ¿qué rango define inequívocamente a una disolución como ácida?',
    options: ['pH = 7', 'pH entre 7.1 y 14', 'pH entre 0 y 6.9', 'pH = 14'],
    correctIndex: 2,
    explanation: 'A 25 °C, un pH de 7 es neutro (concentración de H⁺ igual a 10⁻⁷ M). Los valores menores a 7 indican mayor concentración de iones hidronio H₃O⁺ y por tanto carácter ácido.',
    skill: 'Ácidos, Bases y Escala de pH',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Química de Soluciones',
    subtopic: 'Equilibrio Ácido-Base'
  },
  {
    id: 'qui-int-2',
    sectionId: 1,
    number: 4,
    text: '¿Qué tipo de enlace químico se forma entre el sodio (metal alcalino) y el cloro (no metal halógeno) por transferencia de electrones?',
    options: ['Enlace covalente no polar', 'Enlace iónico (electrovalente)', 'Enlace metálico', 'Enlace por puentes de hidrógeno'],
    correctIndex: 1,
    explanation: 'Debido a la gran diferencia de electronegatividad (ΔEN > 2.0), el átomo de sodio cede un electrón de valencia formando el catión Na⁺ y el cloro lo capta formando el anión Cl⁻, atrayéndose por fuerzas electrostáticas en un enlace iónico.',
    skill: 'Enlaces Químicos',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Enlaces Químicos',
    subtopic: 'Enlace Iónico'
  },
  {
    id: 'qui-bac-1',
    sectionId: 1,
    number: 5,
    text: 'Al balancear por tanteo la ecuación de combustión completa del metano: CH₄ + O₂ → CO₂ + H₂O, ¿cuáles son los coeficientes estequiométricos enteros correctos?',
    options: ['1, 2 → 1, 2', '1, 1 → 1, 1', '2, 3 → 2, 4', '1, 4 → 1, 2'],
    correctIndex: 0,
    explanation: 'Verificamos átomos en ambos lados con coeficientes 1, 2 → 1, 2: Carbono: 1 a la izquierda, 1 a la derecha; Hidrógeno: 4 en CH₄ = 2×2 en 2H₂O; Oxígeno: 2×2 = 4 en 2O₂ = 2 en CO₂ + 2 en 2H₂O (2 + 2 = 4). Ecuación balanceada: CH₄ + 2O₂ → CO₂ + 2H₂O.',
    skill: 'Estequiometría y Balanceo de Ecuaciones',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Reacciones Químicas',
    subtopic: 'Balanceo Estequiométrico'
  },
  {
    id: 'qui-bac-2',
    sectionId: 1,
    number: 6,
    text: '¿Cuántos moles de gas helio están contenidos en 8 gramos de helio puro (masa atómica He = 4 g/mol)?',
    options: ['0.5 moles', '2 moles', '4 moles', '32 moles'],
    correctIndex: 1,
    explanation: 'El número de moles se calcula como n = masa / masa molar: n = 8 g / 4 (g/mol) = 2 moles.',
    skill: 'Cálculos Molares y Ley de Avogadro',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Estequiometría',
    subtopic: 'Concepto de Mol'
  },
  {
    id: 'qui-tec-1',
    sectionId: 1,
    number: 7,
    text: 'En un proceso de laboratorio para preparar 500 mL de solución de cloruro de sodio (NaCl) al 2% m/v, ¿cuántos gramos de soluto NaCl deben pesarse?',
    options: ['2 gramos', '10 gramos', '20 gramos', '100 gramos'],
    correctIndex: 1,
    explanation: 'El porcentaje masa/volumen (% m/v) indica gramos de soluto por cada 100 mL de solución. Para 500 mL: masa = (2 g / 100 mL) × 500 mL = 10 gramos de NaCl.',
    skill: 'Preparación de Soluciones y Unidades Físicas',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Química Analítica Práctica',
    subtopic: 'Concentración de Disoluciones'
  },
  {
    id: 'qui-uni-1',
    sectionId: 1,
    number: 8,
    text: 'Para una reacción química elemental donde ΔH° = -120 kJ/mol (exotérmica) y ΔS° = -150 J/(mol·K), ¿a qué temperaturas será espontánea la reacción según el criterio de la Energía Libre de Gibbs (ΔG° = ΔH° - TΔS°)?',
    options: [
      'A todas las temperaturas sin excepción.',
      'Únicamente a bajas temperaturas (T < 800 K).',
      'Únicamente a altas temperaturas (T > 800 K).',
      'Nunca será espontánea a ninguna temperatura.',
    ],
    correctIndex: 1,
    explanation: 'Para que sea espontánea, se requiere ΔG° < 0: ΔH° - TΔS° < 0 => -120,000 J/mol - T(-150 J/mol·K) < 0 => 150·T < 120,000 => T < 120,000 / 150 = 800 K. La reacción es espontánea a temperaturas inferiores a 800 Kelvin.',
    skill: 'Termoquímica y Energía Libre de Gibbs',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Fisicoquímica',
    subtopic: 'Espontaneidad y Equilibrio Químico'
  }
];

// =========================================================================
// 7. BIOLOGÍA (Todos los niveles)
// =========================================================================
export const QUESTIONS_BIOLOGIA: Question[] = [
  {
    id: 'bio-bas-1',
    sectionId: 1,
    number: 1,
    text: '¿Cuál es la unidad estructural y funcional básica de todos los seres vivos?',
    options: ['Tejido', 'Célula', 'Órgano', 'Átomo'],
    correctIndex: 1,
    explanation: 'Según la Teoría Celular formulada por Schleiden y Schwann, la célula es la unidad morfológica, fisiológica y genética más elemental que manifiesta vida autónoma.',
    skill: 'Teoría Celular Fundamental',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Biología Celular',
    subtopic: 'La Célula'
  },
  {
    id: 'bio-bas-2',
    sectionId: 1,
    number: 2,
    text: '¿Qué pigmento verde ubicado en los cloroplastos es responsable de captar la luz solar para la fotosíntesis?',
    options: ['Hemoglobina', 'Clorofila', 'Melanina', 'Caroteno'],
    correctIndex: 1,
    explanation: 'La clorofila es el fotorreceptor biológico primario de las plantas y algas, absorbiendo longitudes de onda azules y rojas y reflejando la luz verde.',
    skill: 'Fotosíntesis y Pigmentos',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Fisiología Vegetal',
    subtopic: 'Clorofila'
  },
  {
    id: 'bio-int-1',
    sectionId: 1,
    number: 3,
    text: '¿Cuál de las siguientes macromoléculas almacena y transmite la información genética hereditaria en los organismos celulares?',
    options: ['Triglicéridos', 'ADN (Ácido desoxirribonucleico)', 'Glucógeno', 'Colágeno'],
    correctIndex: 1,
    explanation: 'El ADN contiene las secuencias de nucleótidos que codifican las instrucciones moleculares para la síntesis proteica y la herencia biológica de todos los organismos vivos celulares.',
    skill: 'Genética Molecular',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Biomoléculas',
    subtopic: 'Ácidos Nucleicos'
  },
  {
    id: 'bio-int-2',
    sectionId: 1,
    number: 4,
    text: 'En el sistema circulatorio humano, ¿qué vasos sanguíneos transportan sangre oxigenada desde los pulmones de regreso a la aurícula izquierda del corazón?',
    options: ['Arterias pulmonares', 'Venas pulmonares', 'Venas cavas', 'Arteria aorta'],
    correctIndex: 1,
    explanation: 'Las venas pulmonares son las únicas venas del organismo adulto que transportan sangre oxigenada (hematosis pulmonar completada) directamente hacia la aurícula izquierda cardíaca.',
    skill: 'Anatomía y Fisiología Humana',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Sistemas del Cuerpo Humano',
    subtopic: 'Sistema Cardiovascular'
  },
  {
    id: 'bio-bac-1',
    sectionId: 1,
    number: 5,
    text: 'Durante la división celular por meiosis, ¿en qué fase específica ocurre el entrecruzamiento o crossing-over que genera variabilidad genética?',
    options: ['Metafase I', 'Profase I (paquiteno)', 'Anafase II', 'Telofase I'],
    correctIndex: 1,
    explanation: 'El crossing-over ocurre durante el paquiteno de la Profase I meiótica, donde los cromosomas homólogos apareados en sinapsis intercambian segmentos recíprocos de ADN.',
    skill: 'Genética y División Celular',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Genética Clásica y Meiosis',
    subtopic: 'Recombinación Genética'
  },
  {
    id: 'bio-tec-1',
    sectionId: 1,
    number: 6,
    text: 'En microbiología aplicada y control de calidad alimentaria, ¿cuál es el objetivo primordial del proceso térmico de pasteurización?',
    options: [
      'Eliminar el 100% de las esporas bacterianas termorresistentes.',
      'Destruir microorganismos patógenos viables y reducir flora banal sin alterar sustancialmente las propiedades organolépticas del alimento.',
      'Congelar el alimento a -40 °C instantáneamente.',
      'Incrementar la acidez del producto mediante fermentación acética.'
    ],
    correctIndex: 1,
    explanation: 'La pasteurización aplica calor moderado (por ejemplo 72 °C durante 15 segundos en HTST) para aniquilar patógenos no esporulados como Mycobacterium tuberculosis y Salmonella sin provocar desnaturalización excesiva ni sabor a cocido.',
    skill: 'Biotecnología y Seguridad Alimentaria',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Microbiología Industrial',
    subtopic: 'Procesos de Conservación'
  },
  {
    id: 'bio-uni-1',
    sectionId: 1,
    number: 7,
    text: 'En el ciclo de Krebs (ciclo del ácido cítrico), ¿cuántas moléculas de NADH, FADH₂ y GTP/ATP se generan por cada vuelta completa a partir de una molécula de Acetil-CoA?',
    options: [
      '1 NADH, 1 FADH₂, 2 ATP',
      '3 NADH, 1 FADH₂, 1 GTP/ATP',
      '2 NADH, 2 FADH₂, 0 ATP',
      '4 NADH, 2 FADH₂, 2 GTP'
    ],
    correctIndex: 1,
    explanation: 'Cada molécula de Acetil-CoA que se oxida en la matriz mitocondrial rinde exactamente 3 NADH (en las reacciones de isocitrato, α-cetoglutarato y malato deshidrogenasas), 1 FADH₂ (succinato deshidrogenasa) y 1 GTP/ATP por fosforilación a nivel de sustrato.',
    skill: 'Bioquímica Metabólica y Respiración Celular',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Bioquímica Médica',
    subtopic: 'Ciclo de Krebs'
  }
];

// =========================================================================
// 8. INGLÉS (Todos los niveles)
// =========================================================================
export const QUESTIONS_INGLES: Question[] = [
  {
    id: 'ing-bas-1',
    sectionId: 1,
    number: 1,
    text: 'Choose the correct form of the verb to be to complete the sentence: «She _______ an engineering student at NEXORA Academy.»',
    options: ['am', 'are', 'is', 'be'],
    correctIndex: 2,
    explanation: 'For the third-person singular subject pronoun "she", the present simple form of the verb "to be" is "is".',
    skill: 'Verb To Be & Subject Pronouns',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Grammar Basics',
    subtopic: 'Present Simple'
  },
  {
    id: 'ing-bas-2',
    sectionId: 1,
    number: 2,
    text: 'What is the correct English plural of the word «child»?',
    options: ['childs', 'children', 'childrens', 'childes'],
    correctIndex: 1,
    explanation: 'The noun "child" is an irregular plural noun in English; its correct plural form is "children".',
    skill: 'Irregular Plural Nouns',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Vocabulary',
    subtopic: 'Plural Nouns'
  },
  {
    id: 'ing-int-1',
    sectionId: 1,
    number: 3,
    text: 'Complete the sentence with the correct past tense form: «Yesterday, our research team _______ the laboratory experiments successfully.»',
    options: ['finish', 'finished', 'finishing', 'has finished'],
    correctIndex: 1,
    explanation: 'The time adverb "yesterday" establishes a specific completed past time frame, which requires the past simple tense "finished".',
    skill: 'Past Simple Tense',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Verb Tenses',
    subtopic: 'Simple Past'
  },
  {
    id: 'ing-int-2',
    sectionId: 1,
    number: 4,
    text: 'Choose the sentence that correctly uses the First Conditional structure:',
    options: [
      'If it rains tomorrow, we will stay at home to study.',
      'If it will rain tomorrow, we would stay at home.',
      'If it rained tomorrow, we will stay at home.',
      'If it rains tomorrow, we stayed at home.'
    ],
    correctIndex: 0,
    explanation: 'The First Conditional (real possibility in the future) uses the structure: [If + Present Simple, will + Base Verb]: "If it rains tomorrow, we will stay...".',
    skill: 'Conditional Sentences',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Grammar',
    subtopic: 'First Conditional'
  },
  {
    id: 'ing-bac-1',
    sectionId: 1,
    number: 5,
    text: 'Select the sentence that correctly transforms the active voice into passive voice: «The developer wrote the clean code.»',
    options: [
      'The clean code was written by the developer.',
      'The clean code is written by the developer.',
      'The clean code had written by the developer.',
      'The developer was written by the clean code.'
    ],
    correctIndex: 0,
    explanation: 'In past simple passive, the object becomes the subject ("The clean code") + was/were + past participle ("written") + agent ("by the developer"): "The clean code was written by the developer."',
    skill: 'Passive Voice Transformation',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Advanced Grammar',
    subtopic: 'Passive Voice'
  },
  {
    id: 'ing-tec-1',
    sectionId: 1,
    number: 6,
    text: 'In technical engineering documentation, what does the modal verb «MUST» indicate according to international standards (RFC 2119)?',
    options: [
      'An optional recommendation that may be ignored.',
      'An absolute requirement or mandatory condition.',
      'A suggestion only applicable in rare circumstances.',
      'A deprecated feature.'
    ],
    correctIndex: 1,
    explanation: 'In standard technical specifications (IETF RFC 2119 / ISO), "MUST", "REQUIRED", or "SHALL" denote an absolute and non-negotiable requirement of the specification.',
    skill: 'Technical English & International Standards',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Technical English',
    subtopic: 'RFC Conventions'
  },
  {
    id: 'ing-uni-1',
    sectionId: 1,
    number: 7,
    text: 'Identify the correct Third Conditional sentence expressing regret about an unfulfilled past action:',
    options: [
      'If she studied more, she would pass the exam.',
      'If she had studied more, she would have passed the certification exam.',
      'If she would have studied, she had passed the exam.',
      'If she studies more, she will pass the exam.'
    ],
    correctIndex: 1,
    explanation: 'The Third Conditional expresses hypothetical past conditions and results: [If + Past Perfect (had studied), would have + Past Participle (would have passed)].',
    skill: 'Advanced Hypothetical Structures',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Academic English',
    subtopic: 'Third Conditional'
  }
];

// =========================================================================
// 9. ESTUDIOS SOCIALES E HISTORIA (Todos los niveles)
// =========================================================================
export const QUESTIONS_SOCIALES: Question[] = [
  {
    id: 'soc-bas-1',
    sectionId: 1,
    number: 1,
    text: '¿En qué continente se ubican geográficamente países como Ecuador, Colombia, Perú, Argentina y Brasil?',
    options: ['Europa', 'América del Sur', 'África', 'Asia'],
    correctIndex: 1,
    explanation: 'Estos países conforman la masa continental de América del Sur (Sudamérica), atravesada por la cordillera de los Andes y la cuenca hidrográfica del Amazonas.',
    skill: 'Geografía Continental',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Geografía',
    subtopic: 'Continentes del Mundo'
  },
  {
    id: 'soc-bas-2',
    sectionId: 1,
    number: 2,
    text: '¿Cuál es el valor cívico y constitucional que promueve el respeto a las opiniones y creencias ajenas en una sociedad democrática?',
    options: ['Autoritarismo', 'Tolerancia y pluralismo', 'Censura', 'Monopolio ideológico'],
    correctIndex: 1,
    explanation: 'La tolerancia y el pluralismo democrático son principios fundamentales que reconocen el derecho de cada ciudadano a expresar libremente sus convicciones dentro del marco de la ley y el respeto mutuo.',
    skill: 'Educación Cívica y Valores Democráticos',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Cívica',
    subtopic: 'Convivencia Democrática'
  },
  {
    id: 'soc-int-1',
    sectionId: 1,
    number: 3,
    text: '¿Qué gran civilización precolombina erigió su imperio a lo largo de la región andina de América del Sur antes de la llegada de los españoles?',
    options: ['Maya', 'Azteca', 'Inca (Tahuantinsuyo)', 'Olmeca'],
    correctIndex: 2,
    explanation: 'El Imperio Incaico o Tahuantinsuyo abarcó territorios de los actuales Perú, Ecuador, Bolivia, Colombia, Chile y Argentina, con su capital administrativa y ceremonial en Cusco.',
    skill: 'Culturas Precolombinas',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Historia de América',
    subtopic: 'Civilizaciones Andinas'
  },
  {
    id: 'soc-int-2',
    sectionId: 1,
    number: 4,
    text: '¿En qué año se firmó la Declaración Universal de los Derechos Humanos por parte de la Asamblea General de las Naciones Unidas en París?',
    options: ['1789', '1914', '1948', '1989'],
    correctIndex: 2,
    explanation: 'La Declaración Universal de los Derechos Humanos fue adoptada el 10 de diciembre de 1948 (Resolución 217 A III) como respuesta a las atrocidades de la Segunda Guerra Mundial.',
    skill: 'Derechos Humanos y Organismos Internacionales',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Historia Contemporánea',
    subtopic: 'Derechos Humanos'
  },
  {
    id: 'soc-bac-1',
    sectionId: 1,
    number: 5,
    text: '¿Qué evento histórico desencadenó formalmente el inicio de la Primera Guerra Mundial en Europa en el año 1914?',
    options: [
      'La invasión de Polonia por Alemania.',
      'El asesinato del archiduque Francisco Fernando de Austria en Sarajevo.',
      'La caída del Muro de Berlín.',
      'La firma del Tratado de Versalles.'
    ],
    correctIndex: 1,
    explanation: 'El atentado de Sarajevo del 28 de junio de 1914, perpetrado por Gavrilo Princip contra el heredero austrohúngaro, activó la red de alianzas secretas militares que precipitó la Gran Guerra.',
    skill: 'Historia Universal del Siglo XX',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Conflictos Mundiales',
    subtopic: 'Primera Guerra Mundial'
  },
  {
    id: 'soc-tec-1',
    sectionId: 1,
    number: 6,
    text: 'En la legislación laboral y técnica, ¿qué principio protege al trabajador garantizando condiciones higiénicas, equipo de protección personal (EPP) y prevención de siniestros?',
    options: [
      'Principio de Libre Mercado.',
      'Normativa de Seguridad y Salud en el Trabajo (SST).',
      'Principio de Inmunidad Corporativa.',
      'Ley de Propiedad Privada.'
    ],
    correctIndex: 1,
    explanation: 'La Seguridad y Salud en el Trabajo (SST) es un marco técnico-legal obligatorio internacional (promovido por la OIT) destinado a mitigar riesgos, enfermedades laborales y accidentes en ambientes productivos.',
    skill: 'Legislación Laboral y Seguridad Industrial',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Derecho Laboral Aplicado',
    subtopic: 'Seguridad y Salud en el Trabajo'
  },
  {
    id: 'soc-uni-1',
    sectionId: 1,
    number: 7,
    text: 'En la teoría sociológica de Max Weber, ¿cuáles son los tres tipos puros de dominación o autoridad legítima?',
    options: [
      'Autoridad tradicional, carismática y legal-racional.',
      'Autoridad monárquica, republicana y anárquica.',
      'Autoridad militar, civil y religiosa.',
      'Autoridad feudal, capitalista y socialista.'
    ],
    correctIndex: 0,
    explanation: 'En su obra «Economía y Sociedad», Max Weber tipificó la dominación legítima en: 1) Tradicional (basada en la santidad de costumbres inveteradas); 2) Carismática (gracia o heroísmo personal extraordinario); y 3) Legal-racional (normas codificadas formalmente por un orden jurídico burocrático).',
    skill: 'Teoría Sociológica y Ciencia Política',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Sociología',
    subtopic: 'Tipos de Dominación de Weber'
  }
];

// =========================================================================
// 10. ELECTRICIDAD Y ELECTRÓNICA (Todos los niveles)
// =========================================================================
export const QUESTIONS_ELECTRICIDAD: Question[] = [
  {
    id: 'elec-bas-1',
    sectionId: 1,
    number: 1,
    text: '¿Qué componente eléctrico permite abrir o cerrar voluntariamente el paso de la corriente en un circuito simple para encender una bombilla?',
    options: ['Fusible', 'Interruptor', 'Transformador', 'Capacitor'],
    correctIndex: 1,
    explanation: 'El interruptor es el dispositivo de maniobra que interrumpe o restablece la continuidad metálica del circuito eléctrico para activar o desactivar la carga conectada.',
    skill: 'Componentes de Circuitos Básicos',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Electricidad Básica',
    subtopic: 'Elementos de Control'
  },
  {
    id: 'elec-bas-2',
    sectionId: 1,
    number: 2,
    text: '¿Cuál es la ley fundamental que relaciona el Voltaje (V), la Corriente (I) y la Resistencia (R) en un circuito de corriente continua?',
    options: ['Ley de Ohm (V = I · R)', 'Ley de Coulomb', 'Ley de Newton', 'Ley de Faraday'],
    correctIndex: 0,
    explanation: 'La Ley de Ohm establece que la diferencia de potencial (V) aplicada a los extremos de un conductor óhmico es directamente proporcional a la intensidad de corriente (I) que lo atraviesa: V = I · R.',
    skill: 'Leyes Eléctricas Fundamentales',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Leyes Fundamentales',
    subtopic: 'Ley de Ohm'
  },
  {
    id: 'elec-int-1',
    sectionId: 1,
    number: 3,
    text: 'Si por una resistencia de 20 Ω circula una corriente continua de 3 A, ¿cuál es la potencia eléctrica disipada en forma de calor?',
    options: ['60 W', '180 W', '120 W', '360 W'],
    correctIndex: 1,
    explanation: 'Por la Ley de Joule: P = I² · R = (3 A)² × 20 Ω = 9 × 20 = 180 Watts (W). También verificable con V = I·R = 60 V; P = V·I = 60 × 3 = 180 W.',
    skill: 'Potencia Eléctrica y Efecto Joule',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Análisis de Circuitos',
    subtopic: 'Potencia y Energía'
  },
  {
    id: 'elec-int-2',
    sectionId: 1,
    number: 4,
    text: 'En una conexión doméstica de tomacorrientes en paralelo, ¿qué sucede con los demás aparatos si uno de ellos se desenchufa o se apaga?',
    options: [
      'Todos los demás aparatos se apagan inmediatamente.',
      'Los demás aparatos continúan funcionando normalmente con el mismo voltaje.',
      'El voltaje en los demás aparatos se duplica peligrosamente.',
      'La resistencia total del circuito se hace cero.'
    ],
    correctIndex: 1,
    explanation: 'En una instalación en paralelo, cada derivación recibe la tensión nominal completa de la red de forma independiente. Desconectar una rama no interrumpe el flujo de corriente hacia las ramas paralelas restantes.',
    skill: 'Circuitos Eléctricos Residenciales',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Instalaciones Eléctricas',
    subtopic: 'Conexiones en Paralelo'
  },
  {
    id: 'elec-bac-1',
    sectionId: 1,
    number: 5,
    text: 'Un transformador reductor monofásico ideal tiene 1000 vueltas en el primario y 100 vueltas en el secundario. Si se conecta a 220 V CA en el primario, ¿cuál es la tensión inducida en el secundario?',
    options: ['22 V', '2200 V', '110 V', '44 V'],
    correctIndex: 0,
    explanation: 'Por la relación de transformación de espiras: Vp / Vs = Np / Ns => Vs = Vp × (Ns / Np) = 220 V × (100 / 1000) = 220 × 0.1 = 22 V CA.',
    skill: 'Máquinas Eléctricas Estáticas',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Electromagnetismo Aplicado',
    subtopic: 'Transformadores'
  },
  {
    id: 'elec-bac-2',
    sectionId: 1,
    number: 6,
    text: '¿Cuál es la función esencial de un diodo semiconductor de silicio en un circuito electrónico?',
    options: [
      'Almacenar energía electrostática en un dieléctrico.',
      'Permitir el paso de corriente eléctrica en un solo sentido (polarización directa) y bloquearlo en sentido opuesto.',
      'Incrementar la frecuencia de oscilación de la corriente alterna.',
      'Amplificar la potencia sin disipación térmica.'
    ],
    correctIndex: 1,
    explanation: 'El diodo es un dispositivo semiconductor con una unión p-n que conduce corriente cuando el ánodo es positivo respecto al cátodo superando la barrera de potencial (~0.7 V en silicio) y bloquea el paso en polarización inversa, sirviendo como rectificador.',
    skill: 'Semiconductores y Electrónica Básica',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Dispositivos Semiconductores',
    subtopic: 'Diodos Rectificadores'
  },
  {
    id: 'elec-tec-1',
    sectionId: 1,
    number: 7,
    text: 'En una instalación eléctrica industrial, ¿para qué se utiliza un relé térmico asociado a un contactor electromagnético?',
    options: [
      'Para proteger al motor trifásico contra sobrecargas térmicas prolongadas y sobrecorriente moderada.',
      'Para proteger exclusivamente contra cortocircuitos francos de alta intensidad.',
      'Para medir el factor de potencia capacitivo del circuito.',
      'Para regular la velocidad de rotación mediante variación de frecuencia.'
    ],
    correctIndex: 0,
    explanation: 'El relé térmico contiene bimetales que se deforman por calor ante sobrecargas sostenidas en el tiempo, abriendo un contacto auxiliar (NC 95-96) que desenergiza la bobina del contactor, previniendo el recalentamiento destructivo de los devanados del motor.',
    skill: 'Automatismos Eléctricos y Protecciones',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Control Industrial',
    subtopic: 'Protección de Motores Eléctricos'
  },
  {
    id: 'elec-tec-2',
    sectionId: 1,
    number: 8,
    text: 'Al utilizar un multímetro digital para medir la corriente (amperios) en un circuito energizado, ¿cómo debe conectarse el instrumento con respecto a la carga?',
    options: [
      'En paralelo con la fuente de alimentación.',
      'En serie, abriendo previamente el circuito para que la corriente fluya a través del instrumento.',
      'Entre tierra física y la carcasa metálica.',
      'No importa la conexión; el multímetro siempre mide de forma inalámbrica.'
    ],
    correctIndex: 1,
    explanation: 'El amperímetro posee una resistencia interna casi nula (shunt de muy bajo valor); debe colocarse en serie con la rama a medir. Conectarlo en paralelo causaría un cortocircuito directo que fundiría el fusible de protección interno del multímetro.',
    skill: 'Instrumentación y Metrología Eléctrica',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Mediciones Eléctricas',
    subtopic: 'Uso Seguro del Amperímetro'
  },
  {
    id: 'elec-uni-1',
    sectionId: 1,
    number: 9,
    text: 'En el análisis de un circuito trifásico equilibrado en estrella (Y) con secuencia positiva, ¿cuál es la relación entre el voltaje de línea (V_L) y el voltaje de fase (V_F)?',
    options: [
      'V_L = V_F / √3',
      'V_L = √3 · V_F ∠+30°',
      'V_L = 3 · V_F',
      'V_L = V_F (son idénticos)'
    ],
    correctIndex: 1,
    explanation: 'En una conexión trifásica en estrella (Y), la tensión entre fases (tensión de línea) es igual al producto de la tensión de fase por raíz cuadrada de tres (√3 ≈ 1.732) con un desfase angular adelantado de 30 grados eléctricos (V_L = √3·V_F ∠+30°).',
    skill: 'Sistemas Trifásicos y Fasores',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Teoría de Circuitos en CA',
    subtopic: 'Redes Trifásicas Equilibradas'
  },
  {
    id: 'elec-uni-2',
    sectionId: 1,
    number: 10,
    text: 'En la teoría electromagnética clásica de Maxwell, ¿cuál de las ecuaciones establece formalmente la inexistencia de monopolos magnéticos aislados?',
    options: [
      'Ley de Gauss para el magnetismo (∇ · B = 0)',
      'Ley de Faraday-Lenz (∇ × E = -∂B/∂t)',
      'Ley de Ampère-Maxwell (∇ × B = μ₀J + μ₀ε₀∂E/∂t)',
      'Ley de Gauss electrostática (∇ · E = ρ/ε₀)'
    ],
    correctIndex: 0,
    explanation: 'La divergencia del campo de inducción magnética nula (∇ · B = 0) demuestra que las líneas de campo magnético son siempre cerradas y continuas, lo que implica que no existen fuentes ni sumideros magnéticos puntuales aislados (no hay monopolos magnéticos libres).',
    skill: 'Teoría Electromagnética y Ecuaciones de Maxwell',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Electromagnetismo Superior',
    subtopic: 'Ecuaciones de Maxwell'
  }
];

// =========================================================================
// 11. INFORMÁTICA Y PROGRAMACIÓN (Todos los niveles)
// =========================================================================
export const QUESTIONS_INFORMATICA: Question[] = [
  {
    id: 'inf-bas-1',
    sectionId: 1,
    number: 1,
    text: '¿Cuál de los siguientes dispositivos de una computadora se clasifica exclusivamente como periférico de entrada de datos?',
    options: ['Monitor', 'Teclado', 'Impresora', 'Altavoz'],
    correctIndex: 1,
    explanation: 'El teclado es un dispositivo de entrada (input) que permite introducir caracteres, números e instrucciones al sistema informático. El monitor, la impresora y los altavoces son periféricos de salida (output).',
    skill: 'Hardware y Periféricos Básicos',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Fundamentos de Informática',
    subtopic: 'Periféricos de Computadora'
  },
  {
    id: 'inf-bas-2',
    sectionId: 1,
    number: 2,
    text: '¿Qué componente físico de la computadora ejecuta las instrucciones lógicas, matemáticas y de control de los programas de software?',
    options: ['Disco Duro (HDD)', 'Memoria RAM', 'Unidad Central de Procesamiento (CPU / Procesador)', 'Fuente de Poder'],
    correctIndex: 2,
    explanation: 'La CPU (Central Processing Unit o microprocesador) es el "cerebro" del computador que busca, decodifica y ejecuta las instrucciones en código binario mediante su Unidad Aritmético-Lógica (ALU) y su Unidad de Control.',
    skill: 'Arquitectura de Computadoras Básica',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Hardware',
    subtopic: 'Procesador y Componentes'
  },
  {
    id: 'inf-int-1',
    sectionId: 1,
    number: 3,
    text: 'En programación, ¿qué estructura de control se utiliza para repetir un bloque de código mientras se cumpla una condición booleana específica?',
    options: ['Sentencia if/else', 'Bucle while (o for)', 'Declaración switch', 'Sentencia break'],
    correctIndex: 1,
    explanation: 'Los bucles o ciclos iterativos como "while" o "for" permiten la repetición sistemática de un conjunto de instrucciones mientras la condición evaluada permanezca como verdadera (true).',
    skill: 'Estructuras de Control Iterativas',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Fundamentos de Programación',
    subtopic: 'Bucles y Ciclos'
  },
  {
    id: 'inf-int-2',
    sectionId: 1,
    number: 4,
    text: 'En el lenguaje estándar SQL para bases de datos relacionales, ¿cuál es el comando para consultar y recuperar registros de una tabla?',
    options: ['INSERT INTO', 'DELETE FROM', 'SELECT', 'UPDATE'],
    correctIndex: 2,
    explanation: 'El comando "SELECT" es la instrucción principal del Data Query Language (DQL) en SQL para consultar, filtrar y proyectar columnas y filas almacenadas en las tablas de la base de datos.',
    skill: 'Bases de Datos Relacionales (SQL)',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Bases de Datos',
    subtopic: 'Consultas SQL'
  },
  {
    id: 'inf-bac-1',
    sectionId: 1,
    number: 5,
    text: '¿Cuál es la función del protocolo HTTPS (puerto estándar 443) en la navegación web en comparación con el HTTP convencional?',
    options: [
      'Aumentar la resolución de las imágenes mostradas en el navegador.',
      'Cifrar la comunicación cliente-servidor mediante TLS/SSL para garantizar confidencialidad e integridad contra ataques Man-in-the-Middle.',
      'Evitar el uso de nombres de dominio DNS.',
      'Permitir únicamente la descarga de archivos comprimidos.'
    ],
    correctIndex: 1,
    explanation: 'HTTPS (Hypertext Transfer Protocol Secure) encapsula las peticiones HTTP dentro de una capa criptográfica TLS/SSL, asegurando que los datos sensibles (credenciales, formularios, transacciones) viajen cifrados y autenticados.',
    skill: 'Ciberseguridad y Redes de Computadoras',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Redes e Internet',
    subtopic: 'Protocolos de Comunicación Web'
  },
  {
    id: 'inf-bac-2',
    sectionId: 1,
    number: 6,
    text: 'En el paradigma de Programación Orientada a Objetos (POO), ¿qué concepto permite a una clase hija adquirir atributos y métodos de una clase padre?',
    options: ['Encapsulamiento', 'Polimorfismo', 'Herencia', 'Abstracción'],
    correctIndex: 2,
    explanation: 'La herencia es el mecanismo de la POO mediante el cual una subclase (hija) reutiliza y extiende las propiedades, campos y comportamientos definidos en una superclase (padre), promoviendo la modularidad y el código DRY (Don\'t Repeat Yourself).',
    skill: 'Programación Orientada a Objetos (POO)',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Paradigmas de Programación',
    subtopic: 'Herencia y Clases'
  },
  {
    id: 'inf-tec-1',
    sectionId: 1,
    number: 7,
    text: 'En la configuración de redes IPv4, si un host tiene la dirección IP 192.168.1.45 con máscara de subred 255.255.255.0 (/24), ¿cuál es la dirección de difusión (broadcast) de esa subred?',
    options: ['192.168.1.0', '192.168.1.1', '192.168.1.255', '192.168.0.255'],
    correctIndex: 2,
    explanation: 'Con una máscara /24 (255.255.255.0), los primeros 24 bits identifican la red (192.168.1.0) y los últimos 8 bits identifican el host. Poner todos los bits de host en 1 (255) genera la dirección de broadcast: 192.168.1.255.',
    skill: 'Subredes y Protocolo IP',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Redes de Datos',
    subtopic: 'Direccionamiento IPv4'
  },
  {
    id: 'inf-tec-2',
    sectionId: 1,
    number: 8,
    text: 'En el control de versiones con Git, ¿qué comando se utiliza para registrar localmente las modificaciones preparadas (staged) junto con un mensaje descriptivo?',
    options: [
      'git push origin main',
      'git commit -m "mensaje"',
      'git checkout -b nueva-rama',
      'git clone <url>'
    ],
    correctIndex: 1,
    explanation: 'El comando "git commit -m \'mensaje\'" empaqueta las modificaciones agregadas al área de preparación (stage/index) en una instantánea o snapshot permanente en el historial del repositorio local.',
    skill: 'Control de Versiones y Flujo de Trabajo Git',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Herramientas de Desarrollo de Software',
    subtopic: 'Git y Repositorios'
  },
  {
    id: 'inf-uni-1',
    sectionId: 1,
    number: 9,
    text: '¿Cuál es la complejidad temporal asintótica en el peor de los casos del algoritmo de ordenamiento Merge Sort para un arreglo de N elementos?',
    options: ['O(N)', 'O(N log N)', 'O(N²)', 'O(log N)'],
    correctIndex: 1,
    explanation: 'Merge Sort divide recursivamente el arreglo en dos mitades (log N niveles de recursión) y fusiona las listas ordenadas en tiempo lineal O(N) en cada nivel. Por ende, tanto en el mejor, promedio y peor de los casos su complejidad temporal es determinista: O(N log N).',
    skill: 'Estructuras de Datos y Complejidad Asintótica (Big-O)',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Algoritmia y Estructuras de Datos',
    subtopic: 'Análisis de Algoritmos'
  },
  {
    id: 'inf-uni-2',
    sectionId: 1,
    number: 10,
    text: 'En el diseño de sistemas operativos, ¿cuál de las siguientes condiciones NO es una de las cuatro condiciones necesarias de Coffman para que se produzca un bloqueo mutuo (Deadlock)?',
    options: [
      'Exclusión mutua',
      'Retención y espera (Hold and wait)',
      'Preempción forzada de recursos por parte del sistema',
      'Espera circular (Circular wait)'
    ],
    correctIndex: 2,
    explanation: 'Las cuatro condiciones de Coffman son: 1) Exclusión mutua; 2) Retención y espera; 3) NO preempción (los recursos no pueden ser arrebatados forzadamente antes de su liberación voluntaria); y 4) Espera circular. La preempción forzada es justamente una técnica para evitar o romper el deadlock, no una condición que lo cause.',
    skill: 'Sistemas Operativos y Concurrencia',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Sistemas Operativos',
    subtopic: 'Deadlocks y Sincronización'
  }
];

// =========================================================================
// 12. MECÁNICA AUTOMOTRIZ (Todos los niveles)
// =========================================================================
export const QUESTIONS_MECANICA: Question[] = [
  {
    id: 'mec-bas-1',
    sectionId: 1,
    number: 1,
    text: '¿Cuál es la función primordial del sistema de frenos en un vehículo automotor?',
    options: [
      'Incrementar la aceleración angular de las ruedas motrices.',
      'Reducir progresivamente la velocidad del vehículo y detenerlo con seguridad mediante fricción controlada.',
      'Filtrar los hidrocarburos no quemados en el tubo de escape.',
      'Suministrar corriente eléctrica a la bujía de encendido.'
    ],
    correctIndex: 1,
    explanation: 'El sistema de frenos transforma la energía cinética del vehículo en energía térmica disipada al ambiente a través del rozamiento de las pastillas contra los discos o las zapatas contra los tambores.',
    skill: 'Sistemas Básicos de Seguridad del Vehículo',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Mecánica Básica',
    subtopic: 'Sistema de Frenos'
  },
  {
    id: 'mec-bas-2',
    sectionId: 1,
    number: 2,
    text: '¿Qué componente del vehículo almacena energía química para suministrar corriente al motor de arranque al encender el automóvil?',
    options: ['Alternador', 'Batería (Acumulador de 12 V)', 'Radiador', 'Diferencial'],
    correctIndex: 1,
    explanation: 'La batería plomo-ácido o ion-litio suministra el pico de corriente continua indispensable para que el motor de arranque gire el cigüeñal hasta que el motor de combustión inicie su ciclo autónomo.',
    skill: 'Sistema Eléctrico Automotriz Elemental',
    difficulty: 'Fácil',
    educationalLevel: 'Básico',
    topic: 'Electricidad del Automóvil',
    subtopic: 'Batería y Arranque'
  },
  {
    id: 'mec-int-1',
    sectionId: 1,
    number: 3,
    text: '¿Cuál es el orden secuencial correcto de los cuatro tiempos en el ciclo termodinámico de un motor de combustión interna Otto?',
    options: [
      'Compresión → Admisión → Escape → Expansión',
      'Admisión → Compresión → Expansión (Fuerza / Combustión) → Escape',
      'Escape → Admisión → Fuerza → Compresión',
      'Admisión → Escape → Compresión → Fuerza'
    ],
    correctIndex: 1,
    explanation: 'El ciclo Otto de 4 tiempos transcurre en: 1) Admisión (ingreso de mezcla aire-combustible); 2) Compresión (cierre de válvulas y compresión del gas); 3) Expansión/Combustión (salto de chispa y carrera de potencia); 4) Escape (expulsión de gases quemados).',
    skill: 'Termodinámica de Motores de Combustión',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Motores Térmicos',
    subtopic: 'Ciclo Otto de Cuatro Tiempos'
  },
  {
    id: 'mec-int-2',
    sectionId: 1,
    number: 4,
    text: '¿Qué componente del sistema de lubricación retiene impurezas metálicas y partículas carbonosas para evitar el desgaste prematuro de los cojinetes del cigüeñal?',
    options: ['Filtro de aire', 'Filtro de aceite', 'Termostato', 'Bomba de agua'],
    correctIndex: 1,
    explanation: 'El filtro de aceite depura el lubricante que bombea la bomba hacia la galería principal del bloque motor, reteniendo partículas abrasivas microscópicas que rayarían los metales de biela y bancada.',
    skill: 'Sistema de Lubricación del Motor',
    difficulty: 'Intermedio',
    educationalLevel: 'Intermedio',
    topic: 'Mantenimiento Preventivo',
    subtopic: 'Lubricación'
  },
  {
    id: 'mec-bac-1',
    sectionId: 1,
    number: 5,
    text: 'En el sistema de antibloqueo de frenos (ABS), ¿cuál es su ventaja principal durante una frenada de pánico en pavimento mojado?',
    options: [
      'Detener las ruedas instantáneamente sin que vuelvan a girar.',
      'Evitar el bloqueo de las ruedas mediante modulación de presión hidráulica, manteniendo el control direccional de la dirección.',
      'Desconectar el motor de la transmisión automáticamente.',
      'Aumentar la presión en los neumáticos.'
    ],
    correctIndex: 1,
    explanation: 'Al detectar deslizamiento inminente mediante sensores de rueda, la unidad electrohidráulica del ABS modula (libera y reaplica) la presión decenas de veces por segundo, evitando que el neumático patine sin giro y permitiendo al conductor esquivar obstáculos.',
    skill: 'Seguridad Activa y Sistemas ABS',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Sistemas de Seguridad Automotriz',
    subtopic: 'Frenos ABS'
  },
  {
    id: 'mec-bac-2',
    sectionId: 1,
    number: 6,
    text: '¿Qué función cumple la sonda lambda (sensor de oxígeno O₂) ubicada en el tubo de escape de un motor con inyección electrónica?',
    options: [
      'Medir la cantidad de oxígeno residual en los gases de escape para que la ECU ajuste la mezcla en lazo cerrado hacia la relación estequiométrica (λ = 1).',
      'Enfriar los gases de escape antes de que lleguen al catalizador.',
      'Inyectar combustible adicional cuando el motor está frío.',
      'Medir la presión de aceite del cárter.'
    ],
    correctIndex: 0,
    explanation: 'La sonda lambda genera una señal de voltaje proporcional a la concentración de O₂ no quemado, permitiendo a la ECU calcular si la mezcla es rica (exceso de combustible) o pobre (exceso de aire) y corregir el ancho de pulso de inyección hacia la proporción estequiométrica ideal (14.7:1 en gasolina).',
    skill: 'Gestión Electrónica del Motor (Inyección OBD)',
    difficulty: 'Intermedio',
    educationalLevel: 'Bachillerato',
    topic: 'Inyección Electrónica',
    subtopic: 'Sensores del Motor'
  },
  {
    id: 'mec-tec-1',
    sectionId: 1,
    number: 7,
    text: 'Al realizar un diagnóstico computarizado con escáner automotriz OBD-II, se detecta el código de falla genérico DTC P0300. ¿Qué avería indica este código?',
    options: [
      'Falla de comunicación en la red CAN Bus de transmisión.',
      'Fallo de encendido en cilindros aleatorios o múltiples (Random/Multiple Cylinder Misfire Detected).',
      'Temperatura excesiva en el fluido de transmisión automática.',
      'Falla del sensor de posición del acelerador (TPS).'
    ],
    correctIndex: 1,
    explanation: 'El código P0300 es el código estándar SAE/ISO que indica que la ECU detectó variaciones en la aceleración angular del cigüeñal atribuibles a combustiones incompletas o nulas (misfire) en varios cilindros no identificados de forma aislada.',
    skill: 'Diagnóstico Electrónico Automotriz OBD-II',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Diagnóstico Automotriz',
    subtopic: 'Códigos DTC y Escaneo'
  },
  {
    id: 'mec-tec-2',
    sectionId: 1,
    number: 8,
    text: 'En el sistema de transmisión y tren de fuerza, ¿qué misión mecánica cumple el conjunto diferencial cuando el automóvil toma una curva?',
    options: [
      'Obligar a ambas ruedas de tracción a girar exactamente a la misma velocidad angular.',
      'Permitir que la rueda exterior gire a mayor velocidad que la rueda interior sin perder la transmisión de torque motriz.',
      'Desacoplar la tracción trasera permanentemente.',
      'Aumentar la relación de compresión del motor.'
    ],
    correctIndex: 1,
    explanation: 'En una curva, la rueda exterior recorre un radio de giro mayor y debe girar más rápido que la interior. El engranaje planetario y satélites del diferencial compensan esta diferencia cinemática transmitiendo potencia simultánea a ambos semiejes sin arrastrar los neumáticos.',
    skill: 'Tren de Potencia y Transmisión Mecánica',
    difficulty: 'Intermedio',
    educationalLevel: 'Técnico',
    topic: 'Transmisión',
    subtopic: 'Diferencial y Palieres'
  },
  {
    id: 'mec-uni-1',
    sectionId: 1,
    number: 9,
    text: 'En la dinámica vehicular, ¿cómo se define el comportamiento de viraje «sobrevirador» (oversteer) de un automóvil en curva?',
    options: [
      'El ángulo de deriva de las ruedas traseras es mayor que el de las delanteras, provocando que la parte posterior del vehículo tienda a deslizarse hacia el exterior de la curva.',
      'El ángulo de deriva de las ruedas delanteras es mayor que el de las traseras, provocando que el vehículo abra su trayectoria de trompa.',
      'El vehículo mantiene rigurosamente el radio de giro sin ninguna deriva en los neumáticos.',
      'Las ruedas motrices pierden tracción vertical exclusivamente en frenada recta.'
    ],
    correctIndex: 0,
    explanation: 'El sobreviraje ocurre cuando el eje trasero pierde adherencia lateral antes que el eje delantero (α_trasero > α_delantero), induciendo un momento de guiñada hacia el interior de la curva que hace que la zaga intente adelantar al frente del automóvil.',
    skill: 'Dinámica de Vehículos y Estabilidad Cinemática',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Ingeniería Automotriz',
    subtopic: 'Dinámica Lateral y Guiñada'
  },
  {
    id: 'mec-uni-2',
    sectionId: 1,
    number: 10,
    text: 'En los vehículos híbridos y eléctricos modernos con arquitectura de alto voltaje (HV > 300 V DC), ¿qué dispositivo de seguridad desconecta físicamente el paquete de baterías de tracción ante un impacto o para realizar mantenimiento técnico?',
    options: [
      'El sensor MAF de flujo de masa de aire.',
      'El enchufe de servicio de alta tensión (Service Disconnect Plug) y los contactores principales (Main Relays).',
      'El servofreno de vacío convencional.',
      'El módulo de inyección de urea DEF.'
    ],
    correctIndex: 1,
    explanation: 'Por estricta normativa de seguridad automotriz (ISO 6469 / UNECE R100), los vehículos de alto voltaje incorporan un "Service Plug" de interbloqueo manual y contactores electromecánicos de seguridad (SMR) gobernados por el BMS (Battery Management System), que aíslan galvánicamente los cientos de voltios del paquete de tracción en caso de colisión o intervención en taller.',
    skill: 'Propulsión Eléctrica y Seguridad de Alto Voltaje',
    difficulty: 'Desafiante',
    educationalLevel: 'Universitario',
    topic: 'Vehículos Eléctricos e Híbridos',
    subtopic: 'Arquitecturas de Alto Voltaje'
  }
];
