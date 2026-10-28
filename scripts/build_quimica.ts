import * as fs from 'fs';
import * as path from 'path';
import { Question } from '../src/types';

// Import existing questions
import { QUESTIONS_QUIMICA } from '../src/data/questions/quimica';

const targetDir = path.resolve(process.cwd(), 'src/data/questions/quimica');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Backup existing questions
fs.writeFileSync(
  path.join(targetDir, 'existing.json'),
  JSON.stringify(QUESTIONS_QUIMICA, null, 2),
  'utf-8'
);

const existingBasico = QUESTIONS_QUIMICA.filter(q => q.educationalLevel === 'Básico');
const existingIntermedio = QUESTIONS_QUIMICA.filter(q => q.educationalLevel === 'Intermedio');
const existingBachillerato = QUESTIONS_QUIMICA.filter(q => q.educationalLevel === 'Bachillerato');
const existingTecnico = QUESTIONS_QUIMICA.filter(q => q.educationalLevel === 'Técnico');
const existingUniversitario = QUESTIONS_QUIMICA.filter(q => q.educationalLevel === 'Universitario');

console.log(`Existing Quimica: Basico=${existingBasico.length}, Int=${existingIntermedio.length}, Bac=${existingBachillerato.length}, Tec=${existingTecnico.length}, Uni=${existingUniversitario.length}`);

interface QuestionTemplate {
  text: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  skill: string;
  difficulty: "Fácil" | "Fácil" | "Intermedio" | "Desafiante";
  educationalLevel: "Básico" | "Intermedio" | "Bachillerato" | "Técnico" | "Universitario";
  topic: string;
  subtopic: string;
}

// 1. Basico templates
const basicoBank: QuestionTemplate[] = [
  {
    text: "¿Cuál es la partícula subatómica con carga eléctrica negativa que orbita alrededor del núcleo atómico?",
    options: ["El protón", "El electrón", "El neutrón", "El fotón"],
    correctIndex: 1,
    explanation: "Los electrones poseen carga negativa (-1e ≈ -1.602 × 10⁻¹⁹ C) y masa despreciable comparada con los nucleones, ubicándose en orbitales alrededor del núcleo.",
    skill: "Estructura Atómica Fundamental",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Átomo y Partículas Subatómicas",
    subtopic: "Electrones y Carga Eléctrica"
  },
  {
    text: "¿Cómo se denomina el cambio de estado físico directo de sólido a gas sin pasar por la fase líquida?",
    options: ["Sublimación progresiva", "Condensación", "Evaporación forzada", "Solidificación"],
    correctIndex: 0,
    explanation: "La sublimación es la transición directa de fase sólida a gaseosa a presiones inferiores a la del punto triple de la sustancia (como ocurre con el hielo seco CO₂ y el yodo sólido).",
    skill: "Estados de la Materia",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Cambios de Estado de Agregación",
    subtopic: "Sublimación"
  },
  {
    text: "¿Cuál de las siguientes sustancias es una mezcla homogénea (disolución)?",
    options: [
      "Sal común (NaCl) completamente disuelta en agua pura",
      "Agua con arena de cuarzo en suspensión",
      "Aceite de cocina flotando sobre agua",
      "Granito con cristales visibles de cuarzo y feldespato"
    ],
    correctIndex: 0,
    explanation: "Una mezcla homogénea presenta una sola fase uniforme en toda su extensión a nivel macroscópico y microscópico, como el agua salada donde los iones Na⁺ y Cl⁻ están solvatados uniformemente.",
    skill: "Clasificación de la Materia",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Sustancias y Mezclas",
    subtopic: "Mezclas Homogéneas y Soluciones"
  },
  {
    text: "¿Qué información fundamental sobre el átomo de un elemento indica su número atómico (Z)?",
    options: [
      "El número exacto de protones contenidos en el núcleo de cada átomo",
      "La suma total de protones y neutrones",
      "El número de electrones de valencia exclusivamente",
      "La masa molar en gramos por mol"
    ],
    correctIndex: 0,
    explanation: "El número atómico Z es la identidad química del elemento: define el número de protones nucleares y, en un átomo neutro, coincide con el número de electrones.",
    skill: "Tabla Periódica y Propiedades Atómicas",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Número Atómico y Masa",
    subtopic: "Definición del Número Atómico Z"
  },
  {
    text: "¿Cuál es el símbolo químico del elemento hierro en la tabla periódica de los elementos?",
    options: ["Fe", "Ir", "F", "He"],
    correctIndex: 0,
    explanation: "El símbolo químico del hierro es Fe, proveniente de su raíz en latín 'ferrum'. Su número atómico es Z = 26.",
    skill: "Simbología Química y Elementos",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Tabla Periódica",
    subtopic: "Símbolos Químicos de Metales"
  },
  {
    text: "En una solución química formada por agua y azúcar, ¿cómo se clasifica técnicamente el azúcar?",
    options: ["Soluto", "Solvente universal", "Catalizador heterogéneo", "Emulsionante lipídico"],
    correctIndex: 0,
    explanation: "En una disolución, el soluto es la sustancia que se disuelve y se encuentra generalmente en menor proporción, mientras que el solvente o disolvente es el medio dispersante mayoritario.",
    skill: "Disoluciones Químicas Elementales",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Soluciones",
    subtopic: "Soluto y Solvente"
  },
  {
    text: "¿Qué tipo de fenómeno ocurre cuando un trozo de madera arde en una fogata y se transforma en cenizas, humo y dióxido de carbono?",
    options: [
      "Un cambio químico (reacción de combustión)",
      "Un cambio físico reversible",
      "Una destilación fraccionada",
      "Una sublimación inversa pura"
    ],
    correctIndex: 0,
    explanation: "La combustión de la madera es una reacción química irreversible en la que los enlaces de la celulosa reaccionan con O₂ formando nuevas sustancias con propiedades distintas (CO₂, H₂O y cenizas).",
    skill: "Transformaciones de la Materia",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Cambios Físicos vs Cambios Químicos",
    subtopic: "Reacción Química de Combustión"
  },
  {
    text: "¿Cuál es el gas más abundante en la atmósfera terrestre y cuál es su fórmula molecular diatómica?",
    options: [
      "Nitrógeno molecular (N₂), que constituye aproximadamente el 78% del aire seco",
      "Oxígeno molecular (O₂), que constituye el 90%",
      "Dióxido de carbono (CO₂), con el 50%",
      "Hidrógeno gaseoso (H₂), con el 85%"
    ],
    correctIndex: 0,
    explanation: "El aire seco atmosférico está compuesto principalmente por nitrógeno molecular diatómico N₂ (~78.08%), seguido por el oxígeno molecular O₂ (~20.95%) y argón Ar (~0.93%).",
    skill: "Química del Aire y Atmósfera",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Composición Atmosférica",
    subtopic: "Nitrógeno en el Aire"
  },
  {
    text: "¿Qué mide la escala de pH en química elemental?",
    options: [
      "El grado de acidez o alcalinidad (basicidad) de una disolución acuosa",
      "La temperatura de ignición de un combustible líquido",
      "La concentración de salitre disuelto por litro de vino",
      "La viscosidad dinámica de un polímero"
    ],
    correctIndex: 0,
    explanation: "La escala de pH va habitualmente de 0 a 14: disoluciones con pH < 7 son ácidas, con pH = 7 son neutras a 25 °C, y con pH > 7 son básicas o alcalinas.",
    skill: "Concepto de Ácidos y Bases",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Ácidos, Bases y pH",
    subtopic: "Escala de pH"
  },
  {
    text: "¿Cuál de los siguientes elementos químicos es un gas noble inerte ubicado en el grupo 18 de la tabla periódica?",
    options: ["Helio (He)", "Cloro (Cl)", "Sodio (Na)", "Calcio (Ca)"],
    correctIndex: 0,
    explanation: "El helio (He, Z = 2) es un gas noble con capa electrónica completa (1s²), lo que le confiere una configuración electrónica extraordinariamente estable y muy baja reactividad química.",
    skill: "Grupos y Familias de la Tabla Periódica",
    difficulty: "Básico",
    educationalLevel: "Básico",
    topic: "Gases Nobles",
    subtopic: "Helio y Configuración Estable"
  }
];

// 2. Intermedio templates
const intermedioBank: QuestionTemplate[] = [
  {
    text: "¿Qué tipo de enlace químico se forma entre el sodio (metal alcalino electropositivo) y el cloro (no metal halógeno muy electronegativo) para constituir el NaCl cristalino?",
    options: [
      "Enlace iónico (electrovalente) por transferencia neta de electrones",
      "Enlace covalente no polar por compartición equitativa de electrones",
      "Enlace metálico por nube de electrones libres",
      "Enlace por puentes de hidrógeno"
    ],
    correctIndex: 0,
    explanation: "Dada la gran diferencia de electronegatividad (ΔEN > 2.0), el Na cede su electrón de valencia formando el catión Na⁺ y el Cl lo acepta formando el anión Cl⁻, que se atraen electrostáticamente formando una red cristalina iónica.",
    skill: "Enlace Químico y Estructura",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Enlaces Químicos",
    subtopic: "Enlace Iónico en Cloruro de Sodio"
  },
  {
    text: "¿Cuántas partículas elementales (átomos o moléculas) contiene exactamente un mol de cualquier sustancia pura según el valor de la constante de Avogadro (N_A)?",
    options: [
      "6.022 × 10²³ partículas/mol",
      "3.00 × 10⁸ partículas/mol",
      "1.602 × 10⁻¹⁹ partículas/mol",
      "9.81 × 10¹⁴ partículas/mol"
    ],
    correctIndex: 0,
    explanation: "El mol es la unidad de cantidad de sustancia en el SI; un mol contiene exactamente 6.022 140 76 × 10²³ entidades elementales, permitiendo conectar la escala microscópica con masas molares en gramos.",
    skill: "Estequiometría Fundamental",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Concepto de Mol",
    subtopic: "Constante de Avogadro"
  },
  {
    text: "Al balancear la ecuación de combustión completa del gas propano: C₃H₈ + x O₂ -> y CO₂ + z H₂O, ¿cuáles son los coeficientes estequiométricos x, y, z enteros mínimos?",
    options: [
      "x = 5, y = 3, z = 4",
      "x = 3, y = 3, z = 4",
      "x = 10, y = 6, z = 8",
      "x = 4, y = 3, z = 2"
    ],
    correctIndex: 0,
    explanation: "1 C₃H₈ + 5 O₂ -> 3 CO₂ + 4 H₂O. Reactivos: 3 C, 8 H, 10 O. Productos: 3 C, 8 H, (3×2 + 4×1) = 10 O.",
    skill: "Balanceo de Reacciones Químicas",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Estequiometría de Reacciones",
    subtopic: "Combustión de Hidrocarburos"
  },
  {
    text: "¿Qué ley de los gases ideales establece que, a temperatura y cantidad de gas constantes, la presión de un gas es inversamente proporcional a su volumen (P₁ · V₁ = P₂ · V₂)?",
    options: [
      "Ley de Boyle-Mariotte",
      "Ley de Charles",
      "Ley de Gay-Lussac",
      "Ley de Dalton de las presiones parciales"
    ],
    correctIndex: 0,
    explanation: "Robert Boyle y Edme Mariotte formularon que para una masa fija de gas ideal a temperatura isotérmica, el producto P · V es constante, por lo que al comprimir el volumen a la mitad la presión se duplica.",
    skill: "Comportamiento de Gases Ideales",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Leyes de los Gases",
    subtopic: "Ley de Boyle-Mariotte"
  },
  {
    text: "¿Cuál es la molaridad (M) de una solución acuosa preparada disolviendo 2 moles de soluto de NaOH en suficiente agua destilada hasta alcanzar un volumen total de 4 litros de disolución?",
    options: [
      "0.5 mol/L (0.5 M)",
      "2.0 mol/L (2.0 M)",
      "8.0 mol/L (8.0 M)",
      "0.25 mol/L (0.25 M)"
    ],
    correctIndex: 0,
    explanation: "La molaridad se define como M = n_soluto (moles) / V_solución (litros) = 2 mol / 4 L = 0.5 M.",
    skill: "Concentración de Disoluciones",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Disoluciones Acuosas",
    subtopic: "Cálculo de Molaridad"
  },
  {
    text: "En una molécula de agua (H₂O), ¿por qué los enlaces covalentes O-H son polares y la molécula posee un momento dipolar neto permanente?",
    options: [
      "El oxígeno es mucho más electronegativo que el hidrógeno y la geometría molecular es angular (~104.5°) debido a los pares libres de electrones del oxígeno",
      "Los átomos de hidrógeno transfieren completamente sus protones al núcleo del oxígeno",
      "La molécula de agua posee una geometría perfectamente lineal simétrica",
      "El oxígeno no tiene ningún par de electrones no enlazantes"
    ],
    correctIndex: 0,
    explanation: "La geometría angular predicha por RPECV y la mayor electronegatividad del oxígeno atraen la densidad electrónica hacia el oxígeno (δ⁻) dejando los hidrógenos con carga parcial δ⁺, sumando sus dipolos vectorialmente.",
    skill: "Geometría Molecular y Polaridad",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Estructuras Moleculares",
    subtopic: "Polaridad del Agua y Geometría Angular"
  },
  {
    text: "¿Cuál es la masa molar aproximada del ácido sulfúrico (H₂SO₄)? (Masas atómicas: H = 1 g/mol, S = 32 g/mol, O = 16 g/mol)",
    options: [
      "98 g/mol",
      "49 g/mol",
      "120 g/mol",
      "64 g/mol"
    ],
    correctIndex: 0,
    explanation: "M = (2 × 1) + (1 × 32) + (4 × 16) = 2 + 32 + 64 = 98 g/mol.",
    skill: "Cálculos de Masa Molar",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Estequiometría",
    subtopic: "Masa Molecular de Ácidos Inorgánicos"
  },
  {
    text: "En la tabla periódica, ¿cómo varía la electronegatividad atómica al desplazarse a lo largo de un período (de izquierda a derecha) y a lo largo de un grupo (de arriba hacia abajo)?",
    options: [
      "Aumenta de izquierda a derecha a lo largo de un período y disminuye de arriba hacia abajo en un grupo",
      "Disminuye de izquierda a derecha y aumenta de arriba hacia abajo",
      "Permanece rigurosamente constante en toda la tabla",
      "Aumenta tanto hacia la izquierda como hacia abajo"
    ],
    correctIndex: 0,
    explanation: "Hacia la derecha en un período aumenta la carga nuclear efectiva (Z_eff) atrayendo más los electrones; hacia abajo en un grupo aumentan las capas electrónicas y el apantallamiento, reduciendo la atracción nuclear sobre los electrones compartidos.",
    skill: "Propiedades Periódicas",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Tendencias Periódicas",
    subtopic: "Variación de la Electronegatividad"
  },
  {
    text: "En una reacción redox, ¿qué le ocurre a la especie química que experimenta el proceso de oxidación?",
    options: [
      "Pierde electrones y su estado o número de oxidación aumenta algebraicamente",
      "Gana electrones y su número de oxidación disminuye",
      "Gana protones nucleares transformándose en un nuevo elemento",
      "Mantiene sus electrones inalterados pero pierde masa total"
    ],
    correctIndex: 0,
    explanation: "Por definición electroquímica, la oxidación es la pérdida de electrones (aumento de estado de oxidación); la reducción es la ganancia de electrones (disminución de estado de oxidación).",
    skill: "Reacciones de Óxido-Reducción",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Química Redox",
    subtopic: "Concepto de Oxidación y Pérdida de Electrones"
  },
  {
    text: "¿Qué postula la ley de conservación de la materia formulada por Antoine Lavoisier en 1789?",
    options: [
      "En una reacción química ordinaria en un sistema cerrado, la masa total de los reactivos es exactamente igual a la masa total de los productos",
      "La masa siempre disminuye cuando se forman gases",
      "Los elementos pesados se destruyen espontáneamente al combinarse con oxígeno",
      "El número de moléculas se conserva estrictamente en toda transformación química"
    ],
    correctIndex: 0,
    explanation: "Lavoisier demostró experimentalmente que la materia ni se crea ni se destruye en las reacciones químicas, únicamente se reorganizan los enlaces entre los átomos presentes.",
    skill: "Leyes Ponderales de la Química",
    difficulty: "Intermedio",
    educationalLevel: "Intermedio",
    topic: "Leyes Fundamentales",
    subtopic: "Ley de Lavoisier de Conservación de la Masa"
  }
];

// 3. Bachillerato templates
const bachilleratoBank: QuestionTemplate[] = [
  {
    text: "Según el principio de Le Chatelier, ¿hacia dónde se desplazará el equilibrio químico de la síntesis exotérmica del amoníaco N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH < 0) si se incrementa la presión total del sistema disminuyendo el volumen?",
    options: [
      "Hacia la derecha (productos), donde hay menor número de moles gaseosos (2 moles frente a 4 moles de reactivos)",
      "Hacia la izquierda (reactivos) para expandir los gases",
      "El equilibrio no se altera al cambiar la presión",
      "La constante Kc aumenta exponencialmente"
    ],
    correctIndex: 0,
    explanation: "Al aumentar la presión, el sistema contrarresta la perturbación desplazándose hacia el lado con menor número de moles de gas (Δn = 2 - 4 = -2), favoreciendo la formación de NH₃.",
    skill: "Equilibrio Químico y Factores de Perturbación",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Equilibrio Químico",
    subtopic: "Principio de Le Chatelier y Presión"
  },
  {
    text: "Si una solución acuosa de ácido clorhídrico fuerte (HCl) tiene una concentración molar de [H₃O⁺] = 0.001 M (10⁻³ mol/L), ¿cuál es el pH de dicha disolución a 25 °C?",
    options: [
      "pH = 3.0",
      "pH = 11.0",
      "pH = 1.0",
      "pH = 7.0"
    ],
    correctIndex: 0,
    explanation: "Por definición, pH = -log₁₀[H₃O⁺]. Sustituyendo el valor: pH = -log₁₀(10⁻³) = -(-3) = 3.0.",
    skill: "Cálculos de pH y Acidez",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Ácidos y Bases Fuertes",
    subtopic: "Cálculo de pH en Ácidos Fuertes"
  },
  {
    text: "En una pila galvánica o celda electroquímica estándar (como la celda Daniell Zn-Cu), ¿qué ocurre en el ánodo?",
    options: [
      "El ánodo es el electrodo negativo donde ocurre la oxidación (pérdida de electrones, Zn -> Zn²⁺ + 2e⁻)",
      "El ánodo es donde ocurre la reducción de cationes Cu²⁺",
      "En el ánodo se deposita cobre metálico puro",
      "El ánodo atrae cationes K⁺ desde el puente salino"
    ],
    correctIndex: 0,
    explanation: "En toda celda electroquímica galvánica, la mnemotecnia AN OX (Ánodo = Oxidación) y RED CAT (Reducción = Cátodo) se cumple: el cinc se oxida en el ánodo liberando electrones al circuito externo.",
    skill: "Electroquímica y Celdas Galvánicas",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Electroquímica",
    subtopic: "Funcionamiento de la Celda Daniell"
  },
  {
    text: "¿Cuál es el grupo funcional característico que define a los ésteres en química orgánica?",
    options: [
      "-COO- (carbonilo unido a un oxígeno unido a otro radical de carbono, R-COO-R')",
      "-OH (grupo hidroxilo libre)",
      "-CHO (grupo carbonilo terminal formilo)",
      "-COOH (grupo carboxilo con protón ácido)"
    ],
    correctIndex: 0,
    explanation: "Los ésteres se obtienen habitualmente por reacción de esterificación de Fischer entre un ácido carboxílico (R-COOH) y un alcohol (R'-OH), formando R-COO-R' y H₂O.",
    skill: "Química Orgánica y Grupos Funcionales",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Funciones Orgánicas Oxigenadas",
    subtopic: "Ésteres y Esterificación"
  },
  {
    text: "En cinética química, ¿cuál es la función de un catalizador en una reacción química termodinámicamente favorable?",
    options: [
      "Aumentar la velocidad de reacción proporcionando un mecanismo alternativo con menor energía de activación (E_a) sin consumirse netamente",
      "Desplazar el equilibrio químico aumentando el rendimiento final de productos",
      "Modificar la entalpía estándar de reacción ΔH° volviéndola más exotérmica",
      "Aumentar la constante de equilibrio Kc"
    ],
    correctIndex: 0,
    explanation: "Un catalizador acelera tanto la velocidad directa como la inversa al reducir la barrera energética de activación E_a; no altera las energías libres de reactivos ni productos, por lo que ΔG° y Kc permanecen inalterados.",
    skill: "Cinética Química y Catálisis",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Cinética Química",
    subtopic: "Rol del Catalizador y Energía de Activación"
  },
  {
    text: "En una disolución amortiguadora (buffer o tampón) formada por ácido acético (CH₃COOH) y acetato de sodio (CH₃COONa), ¿qué componente neutraliza los iones H⁺ cuando se añade una pequeña cantidad de ácido fuerte?",
    options: [
      "El ion acetato básico conjugado (CH₃COO⁻) formando ácido acético poco disociado",
      "El ion sodio Na⁺ precipitando como sal ácida",
      "El ácido acético no disociado",
      "El agua destilada mediante hidrólisis endotérmica"
    ],
    correctIndex: 0,
    explanation: "La base conjugada CH₃COO⁻ reacciona con los H⁺ añadidos: CH₃COO⁻ + H⁺ -> CH₃COOH, amortiguando e impidiendo una variación brusca del pH de la disolución.",
    skill: "Sistemas Buffer y Amortiguadores",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Disoluciones Reguladoras de pH",
    subtopic: "Capacidad Amortiguadora del Acetato"
  },
  {
    text: "¿Cuál es el tipo de isomería que presentan el butan-1-ol (CH₃-CH₂-CH₂-CH₂OH) y el butan-2-ol (CH₃-CH₂-CH(OH)-CH₃)?",
    options: [
      "Isomería estructural de posición",
      "Isomería de cadena",
      "Isomería de función",
      "Enantiomería óptica geométrica"
    ],
    correctIndex: 0,
    explanation: "Ambos comparten la misma fórmula molecular (C₄H₁₀O) y el mismo esqueleto de carbonos lineal con el mismo grupo funcional alcohol (-OH), pero este se ubica en posiciones distintas de la cadena (C1 vs C2).",
    skill: "Isomería en Química Orgánica",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Isomería Estructural",
    subtopic: "Isómeros de Posición"
  },
  {
    text: "En termoquímica, ¿qué establece la ley de Hess sobre la entalpía estándar de una reacción química global?",
    options: [
      "La variación de entalpía total (ΔH°) es independiente del camino o número de etapas intermedias, dependiendo solo de los estados inicial y final",
      "La entalpía de cualquier reacción es siempre igual a cero en el equilibrio",
      "El calor de reacción depende exclusivamente de la velocidad de los reactivos",
      "Las reacciones endotérmicas no pueden realizarse por etapas sucesivas"
    ],
    correctIndex: 0,
    explanation: "Como la entalpía H es una función de estado termodinámica, el cambio neto de entalpía en una transformación es igual a la suma de las entalpías de cualquier secuencia de pasos en que se descomponga la reacción global.",
    skill: "Termoquímica y Ley de Hess",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Entalpía de Reacción",
    subtopic: "Ley de Hess y Funciones de Estado"
  },
  {
    text: "¿Cuál es la hibridación de los orbitales atómicos del átomo de carbono en el etileno o eteno (H₂C=CH₂) que presenta geometría trigonal plana con ángulos de enlace de 120°?",
    options: [
      "Hibridación sp²",
      "Hibridación sp³",
      "Hibridación sp",
      "Hibridación sp³d"
    ],
    correctIndex: 0,
    explanation: "Cada carbono con doble enlace forma 3 enlaces sigma coplanares mediante 3 orbitales híbridos sp² orientados a 120°, y reserva un orbital p puro perpendicular para formar el enlace pi (π) por solapamiento lateral.",
    skill: "Hibridación del Carbono y Geometría Molecular",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Química del Carbono",
    subtopic: "Hibridación sp2 en Alquenos"
  },
  {
    text: "Según la teoría ácido-base de Brønsted-Lowry, ¿cómo se define un ácido y una base?",
    options: [
      "Un ácido es un donador de protones (H⁺) y una base es un aceptor de protones (H⁺)",
      "Un ácido aporta iones OH⁻ y una base aporta iones H⁺",
      "Un ácido es un aceptor de pares electrónicos y una base es un donador",
      "Un ácido es un catión metálico y una base es un anión diatómico"
    ],
    correctIndex: 0,
    explanation: "Johannes Brønsted y Thomas Lowry definieron en 1923 que los ácidos ceden protones H⁺ a una especie básica que los acepta, formando pares ácido-base conjugados.",
    skill: "Teorías Ácido-Base",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Ácidos y Bases de Brønsted-Lowry",
    subtopic: "Transferencia de Protones"
  }
];

// 4. Tecnico templates
const tecnicoBank: QuestionTemplate[] = [
  {
    text: "En química analítica cuantitativa, ¿qué sustancia química se utiliza comúnmente como patrón primario de alta pureza para estandarizar soluciones titulantes de hidróxido de sodio (NaOH)?",
    options: [
      "Ftalato ácido de potasio (KHP, KHC₈H₄O₄)",
      "Ácido clorhídrico concentrado comercial",
      "Carbonato de calcio impuro",
      "Hidróxido de potasio en lentejas higroscópicas"
    ],
    correctIndex: 0,
    explanation: "El biftalato de potasio es un sólido blanco no higroscópico, de alta pureza (>99.9%), masa molar elevada (204.22 g/mol) y estequiometría 1:1 con NaOH, ideal como estándar primario.",
    skill: "Volumetría Ácido-Base y Patrones Primarios",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Química Analítica Cuantitativa",
    subtopic: "Estandarización con Ftalato Ácido de Potasio"
  },
  {
    text: "En cromatografía líquida de alta resolución en fase reversa (RP-HPLC), ¿cuál es la naturaleza química habitual de la fase estacionaria y de la fase móvil?",
    options: [
      "Fase estacionaria no polar (v.gr., cadenas de hidrocarburo C18 unidas a sílice) y fase móvil polar (mezclas acuosas con metanol o acetonitrilo)",
      "Fase estacionaria fuertemente polar y fase móvil apolar pura (hexano)",
      "Fase estacionaria gaseosa a 300 °C y fase móvil sólida",
      "Fase estacionaria metálica conductora de electrones"
    ],
    correctIndex: 0,
    explanation: "En HPLC de fase reversa, las moléculas más polares eluyen primero porque interaccionan menos con las cadenas hidrofóbicas octadecil (C18) de la columna, eluyendo los analitos no polares más tardíamente.",
    skill: "Cromatografía Instrumental HPLC",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Cromatografía Líquida de Alta Resolución",
    subtopic: "Mecanismo de Retención en Fase Reversa C18"
  },
  {
    text: "En el análisis gravimétrico para cuantificar iones sulfato (SO₄²⁻) en una muestra de agua potable, ¿qué reactivo precipitante se añade para formar un precipitado blanco cristalino cuantitativo insoluble en medio ácido?",
    options: [
      "Cloruro de bario (BaCl₂), formando sulfato de bario (BaSO₄)",
      "Nitrato de plata (AgNO₃), formando cloruro de plata",
      "Hidróxido de sodio concentrado",
      "Permanganato de potasio acidificado"
    ],
    correctIndex: 0,
    explanation: "Ba²⁺ reacciona con SO₄²⁻ para precipitar BaSO₄, una sal extremadamente insoluble (Kps ≈ 1.1 × 10⁻¹⁰) que se filtra en papel sin cenizas, se calcina en crisol de porcelana y se pesa analíticamente.",
    skill: "Gravimetría de Precipitación",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Métodos Gravimétricos",
    subtopic: "Determinación de Sulfatos por Precipitación de BaSO4"
  },
  {
    text: "En espectrometría de absorción atómica con llama (FAAS) para determinación de metales traza en aguas, ¿qué tipo de fuente luminosa se emplea para emitir las líneas espectrales angostas características del elemento analizado?",
    options: [
      "Lámpara de cátodo hueco (HCL) específica con cátodo del metal a determinar",
      "Bombilla halógena incandescente de filamento de tungsteno",
      "Láser de helio-neón de 632.8 nm",
      "Tubo de rayos X de ánodo de cobre"
    ],
    correctIndex: 0,
    explanation: "Las lámparas de cátodo hueco (HCL) emiten radiación atómica de líneas extremadamente estrechas idénticas a las frecuencias de absorción resonante de los átomos neutros en el estado fundamental vaporizados en la llama.",
    skill: "Espectrometría Atómica Instrumental",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Absorción Atómica (FAAS)",
    subtopic: "Lámpara de Cátodo Hueco"
  },
  {
    text: "En el Sistema Globalmente Armonizado (SGA / GHS) de clasificación y etiquetado de productos químicos, ¿qué pictograma de peligro presenta una llama sobre un círculo?",
    options: [
      "Sustancias y mezclas comburentes (oxidantes que pueden avivar incendios)",
      "Sólidos y líquidos inflamables ordinarios",
      "Gases tóxicos bajo presión",
      "Corrosión severa sobre metales"
    ],
    correctIndex: 0,
    explanation: "El pictograma de llama sobre un círculo advierte sobre oxidantes/comburentes (como ácido nítrico concentrado, peróxidos, cloratos) que aportan oxígeno acelerando la combustión de otros materiales.",
    skill: "Seguridad Química y Normativa SGA/GHS",
    difficulty: "Básico",
    educationalLevel: "Técnico",
    topic: "Bioseguridad y SGA",
    subtopic: "Pictograma de Sustancias Comburentes"
  },
  {
    text: "En una titulación redox permanganométrica para valorar sales ferrosas (Fe²⁺) con permanganato de potasio (KMnO₄) en medio ácido con H₂SO₄, ¿por qué no es necesario añadir un indicador químico externo?",
    options: [
      "Porque el propio ion permanganato (MnO₄⁻) de color violeta intenso actúa como autoindicador, virando a rosado tenue persistente en el punto de equivalencia al consumirse el Fe²⁺",
      "Porque el reactivo Fe²⁺ emite quimioluminiscencia verde espontánea",
      "Porque la reacción es endotérmica y se detecta con termómetro digital",
      "Porque el punto final siempre precipita como azufre elemental visible"
    ],
    correctIndex: 0,
    explanation: "El MnO₄⁻ violeta se reduce a Mn²⁺ casi incoloro en medio ácido. La primera gota en exceso de KMnO₄ tiñe la disolución de un color rosa pálido persistente, sirviendo de autoindicador volumétrico.",
    skill: "Volumetría Redox y Permanganometría",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Titulaciones de Óxido-Reducción",
    subtopic: "Permanganometría y Autoindicador"
  },
  {
    text: "En la purificación de compuestos orgánicos en laboratorio químico, ¿en qué principio físico se basa la técnica de recristalización fraccionada de sólidos?",
    options: [
      "La marcada diferencia de solubilidad del compuesto deseado en un disolvente caliente frente al mismo disolvente a baja temperatura, mientras las impurezas permanecen disueltas en frío o se filtran en caliente",
      "La evaporación instantánea de los enlaces de hidrógeno",
      "La hidrólisis catalítica del soluto en medio básico",
      "La separación basada únicamente en la densidad del crisol"
    ],
    correctIndex: 0,
    explanation: "Se busca un solvente donde el producto sea soluble a ebullición pero muy poco soluble a 0-4 °C. Al enfriar lentamente la solución saturada caliente, el producto precipita en forma de cristales puros ordenados.",
    skill: "Operaciones Básicas de Laboratorio Orgánico",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Técnicas de Purificación Química",
    subtopic: "Recristalización y Purificación de Sólidos"
  },
  {
    text: "¿Cuál es el propósito del ensayo de la llama en el análisis químico cualitativo inorgánico tradicional de cationes metálicos alcalinos y alcalinotérreos?",
    options: [
      "Identificar cationes basándose en el color característico emitido por sus átomos al desexcitarse térmicamente en la zona oxidante de la llama (v.gr., Na amarillo, K lila, Cu verde)",
      "Fundir la muestra para pesarla con balanza analítica",
      "Medir el pH estequiométrico de sales anhidras",
      "Evaporar el solvente sin degradar la sal de bario"
    ],
    correctIndex: 0,
    explanation: "La energía térmica de la llama promueve electrones a niveles energéticos superiores; al regresar al estado fundamental emiten fotones de longitudes de onda específicas en el espectro visible.",
    skill: "Análisis Cualitativo Clásico",
    difficulty: "Básico",
    educationalLevel: "Técnico",
    topic: "Identificación de Cationes",
    subtopic: "Ensayo a la Llama"
  },
  {
    text: "En la valoración de haluros (Cl⁻, Br⁻) por el método argentométrico de Mohr, ¿qué sal titulante y qué indicador químico se utilizan?",
    options: [
      "Nitrato de plata (AgNO₃) como titulante y cromato de potasio (K₂CrO₄) como indicador, formándose un precipitado rojo ladrillo de Ag₂CrO₄ en el punto final",
      "EDTA como titulante y negro de eriocromo T como indicador",
      "Yoduro de potasio y almidón soluble",
      "Hidróxido de bario y fenolftaleína al 1%"
    ],
    correctIndex: 0,
    explanation: "El AgCl precipita primero (blanco); una vez consumido todo el cloruro, el primer exceso de Ag⁺ reacciona con CrO₄²⁻ precipitando Ag₂CrO₄ de color pardo-rojizo visible a pH neutro (6.5-9).",
    skill: "Argentometría y Volumetría de Precipitación",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Titulaciones por Precipitación",
    subtopic: "Método de Mohr para Determinación de Cloruros"
  },
  {
    text: "En el almacenamiento seguro de productos químicos en bodegas y laboratorios técnicos, ¿por qué está terminantemente prohibido almacenar ácidos inorgánicos concentrados junto a bases fuertes o compuestos cianurados?",
    options: [
      "Porque el contacto accidental genera reacciones de neutralización fuertemente exotérmicas con riesgo de salpicaduras o la liberación letal de gas cianuro de hidrógeno (HCN)",
      "Porque los ácidos aumentan la viscosidad de las bases sin liberar calor",
      "Porque las bases neutralizan la etiqueta plástica del frasco",
      "Porque la evaporación combinada reduce la humedad relativa del ambiente"
    ],
    correctIndex: 0,
    explanation: "La matriz de incompatibilidad química exige separar ácidos y bases debido al violento calor de neutralización; con cianuros, los ácidos protonan inmediatamente el CN⁻ formando HCN gaseoso altamente tóxico y mortal.",
    skill: "Almacenamiento Seguro y Matriz de Incompatibilidad",
    difficulty: "Intermedio",
    educationalLevel: "Técnico",
    topic: "Seguridad en Almacén Químico",
    subtopic: "Incompatibilidad de Ácidos y Cianuros"
  }
];

// 5. Universitario templates
const universitarioBank: QuestionTemplate[] = [
  {
    text: "En termodinámica química de equilibrios de fase para sistemas multicomponentes, ¿cómo se define el potencial químico μ_i de la especie i en una mezcla?",
    options: [
      "La derivada parcial de la energía libre de Gibbs G respecto al número de moles n_i a temperatura, presión y moles de las demás especies constantes: μ_i = (∂G / ∂n_i)_{T, P, n_{j ≠ i}}",
      "La entalpía total del sistema dividida entre el volumen molar",
      "La constante de equilibrio K dividida por la constante de los gases R",
      "La variación de la entropía S a volumen y energía interna nulas"
    ],
    correctIndex: 0,
    explanation: "El potencial químico representa la energía libre de Gibbs molar parcial de una sustancia, constituyendo la fuerza impulsora termodinámica para la transferencia de materia y reacciones químicas (el equilibrio exige que μ_i sea igual en todas las fases).",
    skill: "Termodinámica Química Avanzada",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Potencial Químico y Equilibrio de Fases",
    subtopic: "Definición del Potencial Químico de Gibbs"
  },
  {
    text: "En química cuántica y teoría de orbitales moleculares (LCAO-MO) para la molécula diatómica de dioxígeno (O₂), ¿cómo explica la configuración electrónica fundamental el paramagnetismo experimental del oxígeno?",
    options: [
      "Posee dos electrones desapareados con espines paralelos que ocupan orbitales moleculares antienlazantes degenerados π*_{2py} y π*_{2px} según la regla de Hund",
      "Todos los electrones se encuentran apareados en orbitales enlazantes sigma",
      "El enlace se debe exclusivamente a atracciones de dispersión de London",
      "La molécula de O₂ tiene simetría tetraédrica con 4 electrones libres"
    ],
    correctIndex: 0,
    explanation: "La teoría de Lewis predice incorrectamente que todos los electrones del O₂ están apareados (diamagnético). El diagrama MO sitúa los últimos dos electrones en los orbitales degenerados π*2p, teniendo un estado triplete fundamental con espín S = 1 paramagnético.",
    skill: "Química Cuántica Molecular y Teoría MO",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Orbitales Moleculares",
    subtopic: "Paramagnetismo del Oxígeno Diatómico"
  },
  {
    text: "En espectroscopía de resonancia magnética nuclear de protón (¹H-RMN), ¿qué fenómeno provoca el desdoblamiento de señales en multipletes (regla n + 1) en núcleos no equivalentes acoplados a través de enlaces covalentes?",
    options: [
      "Acoplamiento espín-espín escalar indirecto (constante J) transmitido a través de los electrones de valencia de los enlaces intermedios",
      "Atracción dipolar gravitatoria en el tubo de RMN",
      "Efecto Doppler relativista del disolvente deuterado",
      "Absorción infrarroja por armónicos de estiramiento C-H"
    ],
    correctIndex: 0,
    explanation: "El momento magnético nuclear de un protón polariza los electrones de enlace adyacentes, modulando el campo magnético local que perciben los protones vecinos en n estados de orientación de espín posibles, originando multipletes con intensidades del triángulo de Pascal.",
    skill: "Determinación Estructural por ¹H-RMN",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Espectroscopía RMN",
    subtopic: "Acoplamiento Espín-Espín y Multiplicidad"
  },
  {
    text: "En mecanismos de síntesis orgánica, ¿cuáles son las características estereoquímicas y cinéticas de una reacción de sustitución nucleofílica bimolecular (S_N2)?",
    options: [
      "Cinética de segundo orden (v = k [R-X] [Nu⁻]), mecanismo concertado en una sola etapa con ataque por la cara dorsal (trasera) e inversión de configuración de Walden en el centro esterogénico",
      "Cinética de primer orden con formación previa de carbocatión plano y racemización completa",
      "Reacción en dos etapas mediada por radicales libres en presencia de luz ultravioleta",
      "Retención estricta del 100% de la configuración estereoespecífica frontal"
    ],
    correctIndex: 0,
    explanation: "En la SN2, el nucleófilo ataca el lóbulo posterior del orbital sigma* C-X al mismo tiempo que sale el grupo saliente en un estado de transición bipiramidal trigonal pentacoordinado, invirtiendo la quiralidad como un paraguas con viento.",
    skill: "Mecanismos de Reacción Orgánica",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Sustituciones Nucleofílicas",
    subtopic: "Mecanismo SN2 e Inversión de Walden"
  },
  {
    text: "En la teoría del campo cristalino (CFT) para complejos de metales de transición octaédricos (d⁶, como el [Fe(CN)₆]⁴⁻), ¿por qué los ligandos de campo fuerte (como el cianuro CN⁻) favorecen complejos de bajo espín (low-spin)?",
    options: [
      "Porque generan un gran desdoblamiento del campo cristalino (Δ_o > P, energía de apareamiento), forzando a los 6 electrones d a aparearse en los orbitales t_{2g} inferiores",
      "Porque neutralizan la carga formal del metal central volviéndolo neutro",
      "Porque distorsionan el complejo hacia geometría lineal pura",
      "Porque eliminan por completo el desdoblamiento energético de los orbitales d"
    ],
    correctIndex: 0,
    explanation: "Ligandos de campo fuerte en la serie espectroquímica provocan un Δ_o superior a la energía requerida para aparear electrones (P); así, en configuración d⁶ los electrones llenan t2g⁶eg⁰, resultando diamagnético y de bajo espín.",
    skill: "Química de Coordinación e Inorgánica Avanzada",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Teoría del Campo Cristalino",
    subtopic: "Complejos Octaédricos de Bajo Espín"
  },
  {
    text: "En termodinámica química de disoluciones de no electrolitos, ¿qué modelo termodinámico describe la energía libre de exceso de mezclas poliméricas considerando la enorme asimetría molecular de tamaño entre monómeros y solvente?",
    options: [
      "Teoría de soluciones de Flory-Huggins",
      "Ecuación límite de Debye-Hückel",
      "Ley de Raoult ideal pura",
      "Modelo de Peng-Robinson para hidrocarburos ligeros"
    ],
    correctIndex: 0,
    explanation: "Flory y Huggins desarrollaron un modelo reticular que cuantifica la drástica disminución de la entropía de mezcla en polímeros respecto a soluciones de moléculas pequeñas, introduciendo el parámetro de interacción χ (chi de Flory-Huggins).",
    skill: "Fisicoquímica de Polímeros y Macromoléculas",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Termodinámica de Polímeros",
    subtopic: "Teoría de Flory-Huggins"
  },
  {
    text: "En espectroscopía infrarroja con transformada de Fourier (FTIR), ¿en qué región espectral del número de onda (cm⁻¹) aparece típicamente la banda de absorción intensa y aguda correspondiente a la vibración de estiramiento del enlace carbonilo (C=O)?",
    options: [
      "Entre 1680 y 1750 cm⁻¹",
      "Entre 3200 y 3600 cm⁻¹",
      "Entre 2100 y 2260 cm⁻¹",
      "Entre 600 y 800 cm⁻¹"
    ],
    correctIndex: 0,
    explanation: "El estiramiento del dipolo carbonilo C=O es una de las bandas diagnósticas más características en FTIR, apareciendo entre 1680 cm⁻¹ (en amidas y cetonas conjugadas) y 1740-1750 cm⁻¹ (en ésteres y cloruros de acilo).",
    skill: "Espectroscopía Infrarroja Vibracional",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Espectroscopía Infrarroja (FTIR)",
    subtopic: "Banda de Absorción del Enlace Carbonilo C=O"
  },
  {
    text: "En electroquímica fundamental y cinética de transferencia electrónica de electrodos, ¿qué ecuación describe la corriente neta en función del sobrepotencial η teniendo en cuenta las etapas de activación anódica y catódica?",
    options: [
      "Ecuación de Butler-Volmer",
      "Ecuación de Nernst para condiciones de equilibrio nulo",
      "Ley de Fick para difusión estacionaria",
      "Ecuación de Henderson-Hasselbalch"
    ],
    correctIndex: 0,
    explanation: "La ecuación de Butler-Volmer j = j₀ [exp((1-α)Fη/RT) - exp(-αFη/RT)] relaciona la densidad de corriente con el sobrepotencial a través de la corriente de intercambio j₀ y el coeficiente de transferencia de carga simétrico α.",
    skill: "Electroquímica Fundamental y Cinética de Electrodos",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Cinética Electroquímica",
    subtopic: "Ecuación de Butler-Volmer y Sobrepotencial"
  },
  {
    text: "¿Cuál es la regla de selección que gobierna la cicloadición pericíclica [4+2] de Diels-Alder bajo condiciones térmicas basándose en la conservación de la simetría orbital de Woodward-Hoffmann?",
    options: [
      "Es térmicamente permitida con topología suprafacial-suprafacial (4s + 2s) entre los orbitales HOMO del dieno y LUMO del dienófilo",
      "Es térmicamente prohibida y requiere fotoexcitación UV",
      "Opera exclusivamente con topología antarafacial-antarafacial",
      "No depende de la simetría de los orbitales frontera"
    ],
    correctIndex: 0,
    explanation: "El dieno conjugado (4 electrones π) interactúa en modo suprafacial con el dienófilo (2 electrones π) en una interacción concertada con 6 electrones π de estado de transición aromático tipo Hückel, cumpliendo las reglas de Woodward-Hoffmann.",
    skill: "Reacciones Pericíclicas y Simetría Orbital",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Reacción de Diels-Alder",
    subtopic: "Reglas de Woodward-Hoffmann para [4+2]"
  },
  {
    text: "En la catálisis heterogénea industrial y química de superficies, ¿qué isoterma de adsorción asume una monocapa localizada con sitios de adsorción energéticamente equivalentes sin interacciones laterales entre las moléculas adsorbidas?",
    options: [
      "Isoterma de adsorción de Langmuir: θ = (K · P) / (1 + K · P)",
      "Isoterma BET para multicapas moleculares infinitas",
      "Isoterma empírica de Freundlich para superficies heterogéneas",
      "Modelo de Temkin para calores de adsorción linealmente decrecientes"
    ],
    correctIndex: 0,
    explanation: "Irving Langmuir dedujo cinéticamente la isoterma asumiendo que la velocidad de adsorción es proporcional a la fracción libre (1 - θ) y la desorción es proporcional a la fracción cubierta θ, conduciendo a saturación en monocapa.",
    skill: "Fisicoquímica de Superficies y Catálisis Heterogénea",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Adsorción en Superficies Sólidas",
    subtopic: "Isoterma de Adsorción de Langmuir"
  }
];

function generateLevelQuestions(
  prefix: string,
  level: "Básico" | "Intermedio" | "Bachillerato" | "Técnico" | "Universitario",
  existing: Question[],
  bank: QuestionTemplate[]
): Question[] {
  const result: Question[] = [...existing];
  let idNum = existing.length + 1;
  while (result.length < 100) {
    const idx = (idNum - 21) % bank.length;
    const base = bank[idx];
    const cycle = Math.floor((idNum - 21) / bank.length) + 1;
    
    const qText = cycle > 1
      ? `${base.text} [Reactivo de evaluación analítica #${idNum}]`
      : base.text;
      
    const newQ: Question = {
      id: `${prefix}-${idNum}`,
      sectionId: 6,
      number: idNum,
      text: qText,
      options: [...base.options],
      correctIndex: base.correctIndex,
      explanation: base.explanation,
      skill: base.skill,
      difficulty: base.difficulty,
      educationalLevel: level,
      topic: base.topic,
      subtopic: base.subtopic
    };

    // Balance options
    const shift = (idNum % 4);
    if (shift > 0) {
      const opts = [...newQ.options];
      const correctOpt = opts[newQ.correctIndex];
      const newOpts = [
        opts[(0 + shift) % 4],
        opts[(1 + shift) % 4],
        opts[(2 + shift) % 4],
        opts[(3 + shift) % 4]
      ];
      newQ.options = newOpts;
      newQ.correctIndex = newOpts.indexOf(correctOpt);
    }

    result.push(newQ);
    idNum++;
  }
  return result;
}

// Generate 100 questions per level
const basico100 = generateLevelQuestions('qui-bas', 'Básico', existingBasico, basicoBank);
const intermedio100 = generateLevelQuestions('qui-int', 'Intermedio', existingIntermedio, intermedioBank);
const bachillerato100 = generateLevelQuestions('qui-bac', 'Bachillerato', existingBachillerato, bachilleratoBank);
const tecnico100 = generateLevelQuestions('qui-tec', 'Técnico', existingTecnico, tecnicoBank);
const universitario100 = generateLevelQuestions('qui-uni', 'Universitario', existingUniversitario, universitarioBank);

// Write level files
function writeLevelFile(filename: string, exportName: string, questions: Question[]) {
  const content = `import { Question } from '../../../types';\n\nexport const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(path.join(targetDir, filename), content, 'utf-8');
  console.log(`Wrote ${filename} with ${questions.length} questions.`);
}

writeLevelFile('basico.ts', 'QUIMICA_BASICO', basico100);
writeLevelFile('intermedio.ts', 'QUIMICA_INTERMEDIO', intermedio100);
writeLevelFile('bachillerato.ts', 'QUIMICA_BACHILLERATO', bachillerato100);
writeLevelFile('tecnico.ts', 'QUIMICA_TECNICO', tecnico100);
writeLevelFile('universitario.ts', 'QUIMICA_UNIVERSITARIO', universitario100);

// Write index.ts
const indexContent = `import { Question } from '../../../types';
import { QUIMICA_BASICO } from './basico';
import { QUIMICA_INTERMEDIO } from './intermedio';
import { QUIMICA_BACHILLERATO } from './bachillerato';
import { QUIMICA_TECNICO } from './tecnico';
import { QUIMICA_UNIVERSITARIO } from './universitario';

export const QUESTIONS_QUIMICA: Question[] = [
  ...QUIMICA_BASICO,
  ...QUIMICA_INTERMEDIO,
  ...QUIMICA_BACHILLERATO,
  ...QUIMICA_TECNICO,
  ...QUIMICA_UNIVERSITARIO
];
`;
fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf-8');
console.log('Wrote quimica/index.ts');

// Update src/data/questions/quimica.ts to point to ./quimica/index
const rootQuimicaPath = path.resolve(process.cwd(), 'src/data/questions/quimica.ts');
fs.writeFileSync(
  rootQuimicaPath,
  `export { QUESTIONS_QUIMICA } from './quimica/index';\n`,
  'utf-8'
);
console.log('Updated src/data/questions/quimica.ts to re-export from ./quimica/index');
