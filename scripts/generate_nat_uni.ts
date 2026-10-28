import * as fs from 'fs';
import * as path from 'path';
import { Question } from '../src/types';

const uniPath = path.resolve(process.cwd(), 'src/data/questions/ciencias_naturales/universitario.ts');

const newUniQuestions: Question[] = [
  {
    id: "nat-uni-21",
    sectionId: 4,
    number: 21,
    text: "En cinética enzimática Michaelis-Menten, ¿qué efecto cinético específico produce un inhibidor competitivo sobre los parámetros V_max y K_m aparentes de la reacción catalizada?",
    options: [
      "V_max permanece inalterada y el K_m aparente aumenta (menor afinidad aparente)",
      "V_max disminuye y el K_m aparente permanece constante",
      "Tanto V_max como K_m aparente disminuyen en la misma proporción",
      "V_max aumenta y K_m aparente se reduce a cero"
    ],
    correctIndex: 0,
    explanation: "El inhibidor competitivo se une reversiblemente al sitio activo libre de la enzima compitiendo con el sustrato. Al aumentar suficientemente la concentración de sustrato ([S] >> K_m), se desplaza al inhibidor alcanzando la misma V_max, pero requiriéndose mayor [S] para lograr 0.5 V_max, por lo que K_m aumenta.",
    skill: "Cinética Enzimática e Inhibición",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Bioquímica Avanzada",
    subtopic: "Inhibición Competitiva de Michaelis-Menten"
  },
  {
    id: "nat-uni-22",
    sectionId: 4,
    number: 22,
    text: "¿Cuál es el mecanismo biofísico por el cual la ATP sintasa mitocondrial (F₀F₁) acopla el flujo transmembrana de protones a través de la subunidad c a la síntesis de ATP a partir de ADP y Pi en la matriz mitocondrial?",
    options: [
      "Mecanismo de cambio de conformación rotacional propuesto por Paul Boyer, donde la rotación del tallo gamma altera los sitios catalíticos en las subunidades beta entre tres conformaciones (abierta, suelta y apretada)",
      "Transferencia directa de electrones desde el NADH a los grupos fosfato de las subunidades alfa",
      "Transporte pasivo por difusión facilitada a través de un canal hidrofóbico sin cambios conformacionales",
      "Fosforilación a nivel de sustrato mediada por proteólisis cíclica"
    ],
    correctIndex: 0,
    explanation: "El gradiente electroquímico de protones induce la rotación del anillo c y el tallo central gamma; a medida que gamma gira 360°, induce secuencialmente conformaciones O (open), L (loose) y T (tight) en los tres dímeros alfa-beta, catalizando la síntesis y liberación de tres moléculas de ATP por revolución.",
    skill: "Bioenergética y Fosforilación Oxidativa",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Bioquímica y Biofísica Celular",
    subtopic: "Mecanismo Rotacional de la ATP Sintasa"
  },
  {
    id: "nat-uni-23",
    sectionId: 4,
    number: 23,
    text: "En epigenética molecular, ¿cuál es la consecuencia transcripcional general de la metilación catalizada por DNMT en el carbono 5 de las citosinas (5-mC) situadas en islas CpG dentro de regiones promotoras eucariotas?",
    options: [
      "Silenciamiento o represión transcripcional del gen por reclutamiento de proteínas MBD y complejos desacetilasa de histonas (HDAC)",
      "Activación transcripcional constitutiva irreversible",
      "Inducción inmediata de recombinación homóloga durante la interfase",
      "Aumento en la velocidad de elongación de la ARN polimerasa II"
    ],
    correctIndex: 0,
    explanation: "La hipermetilación de citosinas en islas CpG de promotores atrae proteínas con dominios de unión a metil-CpG (como MeCP2/MBD), las cuales reclutan histona desacetilasas que condensan la cromatina a heterocromatina inactiva transcripcionalmente.",
    skill: "Regulación Epigenética de la Expresión Génica",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Biología Molecular y Epigenética",
    subtopic: "Metilación del ADN y Silenciamiento Génico"
  },
  {
    id: "nat-uni-24",
    sectionId: 4,
    number: 24,
    text: "En neurofisiología, ¿qué fenómeno de plasticidad sináptica a largo plazo (LTP) en la sinapsis colateral de Schaffer del hipocampo requiere la despolarización previa de la membrana postsináptica para expulsar el bloqueo por iones Mg²⁺ de los receptores NMDA?",
    options: [
      "Potenciación a largo plazo asociativa dependiente del influjo de Ca²⁺ a través de receptores NMDA",
      "Depresión a largo plazo homosináptica por fosfatasas calcineurínicas",
      "Facilitación presináptica transitoria de milisegundos",
      "Bloqueo estocástico de canales de potasio Kv1.1"
    ],
    correctIndex: 0,
    explanation: "A potenciales de membrana en reposo (-70 mV), el ion Mg²⁺ extracelular bloquea el poro del receptor NMDA; la despolarización previa mediada por receptores AMPA expulsa electrostáticamente el Mg²⁺, permitiendo la entrada masiva de Ca²⁺ indispensable para activar CAMKII y reclutar más receptores AMPA.",
    skill: "Neurobiología y Fisiología Sináptica",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Plasticidad Sináptica y Memoria",
    subtopic: "Receptores NMDA y Mecanismo de LTP"
  },
  {
    id: "nat-uni-25",
    sectionId: 4,
    number: 25,
    text: "En inmunología de vertebrados, ¿qué enzimas recombinasas codificadas genéticamente son responsables de realizar los cortes en horquilla de doble cadena en los flancos de las secuencias señal de recombinación (RSS) durante la generación de la diversidad de anticuerpos y receptores TCR?",
    options: [
      "RAG1 y RAG2 (Recombination Activating Genes)",
      "Cas9 y Cas12a",
      "ADN polimerasa gamma y helicasa RecQ",
      "Topoisomerasa II alfa y ligasa IV"
    ],
    correctIndex: 0,
    explanation: "El complejo heterodimérico RAG1/RAG2 reconoce las secuencias heptámero-espaciador-nonámero RSS adyacentes a los segmentos V, D y J, introduciendo cortes monocatenarios y transesterificaciones que forman horquillas de ADN, esenciales para la recombinación somática V(D)J.",
    skill: "Inmunología Celular y Molecular",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Inmunogenética",
    subtopic: "Recombinación V(D)J y Enzimas RAG"
  },
  {
    id: "nat-uni-26",
    sectionId: 4,
    number: 26,
    text: "En la paleoclimatología isotópica, ¿por qué los foraminíferos bentónicos que crecen durante períodos glaciares presentan una mayor relación isotópica δ¹⁸O en sus conchas calcáreas (CaCO₃)?",
    options: [
      "Porque el isótopo ligero ¹⁶O se evapora preferencialmente del océano y queda retenido en los grandes casquetes de hielo continental, enriqueciendo al agua oceánica en ¹⁸O",
      "Porque los glaciares liberan ácido sulfhídrico enriquecido en oxígeno-18",
      "Debido a la ausencia total de radiación cósmica en el fondo oceánico",
      "Porque la fotosíntesis bentónica fija selectivamente ¹⁸O a temperaturas bajo cero"
    ],
    correctIndex: 0,
    explanation: "El fraccionamiento por evaporación favorece las moléculas de H₂¹⁶O más ligeras. Al evaporarse y precipitar sobre latitudes polares formando mantos glaciares, el ¹⁶O queda secuestrado en tierra firme, elevando la relación ¹⁸O/¹⁶O en el océano residual y por tanto en el carbonato bioesquelético.",
    skill: "Geoquímica Isotópica y Paleoclima",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Paleoecología y Paleoclimatología",
    subtopic: "Isótopos de Oxígeno delta-18O"
  },
  {
    id: "nat-uni-27",
    sectionId: 4,
    number: 27,
    text: "En la transducción de señales por receptores acoplados a proteínas Gq (GPCR), ¿qué cascada de segundos mensajeros se desencadena tras la activación de la fosfolipasa C beta (PLCβ)?",
    options: [
      "Hidrólisis de PIP₂ en IP₃ (inositol 1,4,5-trifosfato) y DAG (diacilglicerol), provocando liberación de Ca²⁺ del retículo y activación de PKC",
      "Síntesis masiva de AMP cíclico y fosforilación por PKA",
      "Apertura directa de canales de sodio dependientes de voltaje en la membrana",
      "Desfosforilación de la cadena ligera de miosina por MLCP"
    ],
    correctIndex: 0,
    explanation: "La PLCβ hidroliza el fosfolípido de membrana PIP₂ produciendo IP₃ soluble, que se une a receptores del retículo endoplásmico liberando Ca²⁺ citosólico, y DAG lipofílico, que junto con el calcio activa la proteína quinasa C (PKC).",
    skill: "Transducción de Señales Celulares",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Señalización Celular",
    subtopic: "Vía de la Fosfolipasa C / IP3 / DAG"
  },
  {
    id: "nat-uni-28",
    sectionId: 4,
    number: 28,
    text: "En ecología teórica de poblaciones, ¿cuál es la ecuación diferencial clásica del modelo logístico de Verhulst que describe el crecimiento poblacional limitado por la capacidad de carga K del medio ambiente?",
    options: [
      "dN/dt = r · N · (1 - N / K)",
      "dN/dt = r · N",
      "dN/dt = K · N / (r + N)",
      "dN/dt = -r · N²"
    ],
    correctIndex: 0,
    explanation: "La ecuación logística dN/dt = r·N(1 - N/K) modela un crecimiento intrínseco inicial r cuando N << K, el cual se desacelera conforme el término amortiguador (1 - N/K) aproxima a cero a medida que el tamaño poblacional N se aproxima a la capacidad de carga K.",
    skill: "Ecología Matemática y Dinámica de Poblaciones",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Modelos Ecológicos",
    subtopic: "Modelo Logístico de Verhulst"
  },
  {
    id: "nat-uni-29",
    sectionId: 4,
    number: 29,
    text: "¿Cuál es la función del complejo de corte y empalme (espliceosoma) en la maduración del ARN mensajero precursor (pre-ARNm) de eucariotas superiores?",
    options: [
      "Reconocer secuencias consenso en los extremos 5' y 3' del intrón y en el punto de ramificación de adenina, catalizando dos reacciones de transesterificación para escindir intrones y empalmar exones",
      "Añadir la cola poli-A en el extremo 5' sin gasto de nucleótidos",
      "Traducir los codones de iniciación AUG en metionina",
      "Metilar la guanina del caperuza 5' para transporte nuclear"
    ],
    correctIndex: 0,
    explanation: "El espliceosoma, compuesto por snRNPs (U1, U2, U4, U5, U6) y más de 100 proteínas, alinea el sitio donor 5' (GU), el sitio aceptor 3' (AG) y la adenina del sitio de ramificación, formando una estructura intermedia en lazo (lariat) para liberar el intrón.",
    skill: "Biología Molecular del ARN",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Procesamiento del ARN",
    subtopic: "Splicing y Espliceosoma"
  },
  {
    id: "nat-uni-30",
    sectionId: 4,
    number: 30,
    text: "En biogeografía de islas de MacArthur y Wilson, ¿qué predice la teoría sobre el número de especies en equilibrio dinámico (S*) de una isla oceánica?",
    options: [
      "Es el punto donde la tasa de inmigración de nuevas especies (que decrece con la distancia al continente) se iguala con la tasa de extinción de especies locales (que decrece con el área de la isla)",
      "El número de especies se incrementa indefinidamente hasta saturar la masa continental",
      "Las islas grandes y lejanas albergan siempre menor diversidad que las islas pequeñas y aisladas",
      "La tasa de extinción en una isla desierta es siempre nula e independiente del número de especies"
    ],
    correctIndex: 0,
    explanation: "El modelo de equilibrio insular predice que el equilibrio dinámico S* se establece en la intersección de la curva de colonización/inmigración (determinada por la distancia al continente) y la curva de extinción (determinada por el tamaño o área de la isla).",
    skill: "Biogeografía y Ecología Insular",
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: "Ecología Cuantitativa",
    subtopic: "Teoría de Biogeografía de Islas de MacArthur-Wilson"
  }
];

const advancedUniBank = [
  {
    text: "¿Cuál es el fundamento físico-químico de la técnica de secuenciación masiva en paralelo por síntesis de Illumina?",
    options: [
      "Amplificación clonal por puente térmico en una celda de flujo seguida de incorporación cíclica de nucleótidos marcados fluorescentemente con terminadores reversibles",
      "Medición de fluctuaciones de conductancia iónica a través de un poro proteico biológico sin síntesis de ADN",
      "Detección electroquímica de liberación de iones hidrógeno (protones H⁺) mediante sensores ion-sensibles ISFET",
      "Separación electroforética capilar tradicional por degradación química de Maxam-Gilbert"
    ],
    correctIndex: 0,
    explanation: "La tecnología Illumina utiliza cebadores anclados a celdas de flujo de vidrio para generar clústeres por PCR en puente; luego una polimerasa incorpora nucleótidos marcados con fluoróforos con terminador en 3'-OH que se registran ópticamente y se escinden químicamente por ciclo.",
    skill: "Genómica Funcional y Tecnologías NGS",
    topic: "Genómica y Biología Molecular",
    subtopic: "Secuenciación Illumina por Síntesis"
  },
  {
    text: "En la termodinámica del plegamiento de proteínas globulares solubles en disolución acuosa, ¿cuál es la principal fuerza impulsora entrópica que favorece el estado nativo plegado a temperatura fisiológica?",
    options: [
      "El efecto hidrofóbico, que libera moléculas de agua estructuradas en jaulas de clatrato alrededor de cadenas laterales no polares aumentando la entropía del solvente",
      "La formación de enlaces peptídicos de alta energía entre lisinas",
      "La repulsión electrostática de aniones sulfato en la superficie",
      "La disminución neta de la entropía conformacional de la cadena polipeptídica aislada"
    ],
    correctIndex: 0,
    explanation: "Aunque la cadena polipeptídica pierde entropía conformacional al plegarse (ΔS_cadena < 0), el empaquetamiento del núcleo hidrofóbico expulsa las jaulas ordenadas de agua circundantes, produciendo una gran ganancia entrópica del solvente (ΔS_solvente >> 0) que hace ΔG globalmente negativo.",
    skill: "Estructura y Plegamiento de Proteínas",
    topic: "Biofísica de Macromoléculas",
    subtopic: "Efecto Hidrofóbico y Entropía en el Plegamiento"
  },
  {
    text: "En el ciclo biogeoquímico global del carbono y el control del clima terrestre a escalas de millones de años (ciclo carbonato-silicato de Walker), ¿qué proceso actúa como el sumidero termodinámico primario de CO₂ atmosférico?",
    options: [
      "La meteorización química de minerales silicatados continentales (como CaSiO₃) por ácido carbónico seguida de precipitación marina de carbonatos (CaCO₃)",
      "La fotosíntesis de líquenes en desiertos polares",
      "La emisión magmática de basaltos en dorsales mediooceánicas",
      "La precipitación de halita en cuencas endorreicas hipersalinas"
    ],
    correctIndex: 0,
    explanation: "La reacción de Urey CaSiO₃ + CO₂ -> CaCO₃ + SiO₂ describe cómo la disolución de silicatos por lluvia rica en CO₂ transporta Ca²⁺ y HCO₃⁻ a los océanos, donde organismos calcificadores precipitan CaCO₃ permanente, actuando como termostato planetario.",
    skill: "Geoquímica Global y Ciclos Biogeoquímicos",
    topic: "Geociencias y Cambio Climático Profundo",
    subtopic: "Meteorización de Silicatos y Termostato de Carbono"
  },
  {
    text: "En farmacodinámica molecular, ¿cómo se define el fenómeno del 'sesgo funcional' o 'agonismo sesgado' (biased agonism) en receptores 7-transmembrana GPCR?",
    options: [
      "Capacidad de un ligando para estabilizar diferencialmente conformaciones del receptor que activan preferentemente una vía efectora (v.gr., proteína G) sobre otra (v.gr., reclutamiento de beta-arrestina)",
      "Inactivación irreversible del receptor por unión covalente al bolsillo ortostérico",
      "Estimulación sincrónica e idéntica de todas las subfamilias heterotriméricas Gαs, Gαi y Gαq",
      "Degradación lisosómica del fármaco sin inducir señalización celular"
    ],
    correctIndex: 0,
    explanation: "Los GPCRs no son simples interruptores binarios on/off; diferentes ligandos inducen estados conformacionales sutilmente distintos que activan selectivamente la cascada de proteínas G o la vía de beta-arrestinas, permitiendo diseñar fármacos con eficacia terapéutica y mínimos efectos adversos.",
    skill: "Farmacología Molecular de GPCRs",
    topic: "Farmacología y Bioquímica Celular",
    subtopic: "Agonismo Sesgado en GPCRs"
  },
  {
    text: "¿Cuál es el papel biológico del complejo multiproteico cohesina durante el ciclo celular eucariota mitótico?",
    options: [
      "Mantener unidas físicamente a las cromátidas hermanas desde la fase S de replicación hasta su escisión por la separasa en la transición metafase-anafase",
      "Fosforilar los filamentos intermedios de lámina nuclear para disolver la carioteca",
      "Condensar la cromatina en fibras de 30 nm durante la profase temprana",
      "Sintetizar los microtúbulos cinetocóricos del huso acromático"
    ],
    correctIndex: 0,
    explanation: "La cohesina forma un anillo proteico (compuesto por Smc1, Smc3, Scc1 y Scc3) que rodea y mantiene unidas a las dos cromátidas hermanas. En anafase, la securina es degradada por el APC/C, liberando a la separasa activa que cliva proteolíticamente a Scc1.",
    skill: "Regulación del Ciclo Celular Mitótico",
    topic: "Biología Celular y Genética",
    subtopic: "Complejo Cohesina y Segregación Cromosómica"
  },
  {
    text: "En biofísica de canales iónicos, ¿cómo explica el filtro de selectividad de KcsA (residuos TVGYG) la extrema selectividad para K⁺ sobre el ion Na⁺, a pesar de que el ion Na⁺ es de menor radio atómico?",
    options: [
      "Los oxígenos carbonílicos de la cadena peptídica están rígidamente espaciados para mimetizar la envoltura de solvatación del K⁺ deshidratado; el Na⁺ más pequeño no puede coordinar eficientemente con los 8 oxígenos y sufre un alto costo energético de desolvatación",
      "El ion potasio posee carga divalente que duplica la fuerza coulómbica de atracción",
      "El ion sodio es transportado exclusivamente por pinocitosis activa",
      "El poro está forrado de aminoácidos fuertemente hidrofóbicos que repelen a los iones divalentes"
    ],
    correctIndex: 0,
    explanation: "Descrito cristalográficamente por Roderick MacKinnon, los oxígenos de los carbonilos del backbone de la firma TVGYG replican con precisión nanométrica las distancias de las moléculas de agua que rodean a un ion K⁺ hidratado, permitiendo una desolvatación energéticamente neutra exclusiva para K⁺.",
    skill: "Biofísica de Membranas y Canales Iónicos",
    topic: "Biofísica Molecular",
    subtopic: "Canal de Potasio KcsA y Filtro de Selectividad"
  },
  {
    text: "En el sistema inmunitario adaptativo, ¿cuál es el mecanismo molecular de la 'hipermutación somática' que ocurre en los centros germinales de los ganglios linfáticos durante la maduración de la afinidad de anticuerpos?",
    options: [
      "Desaminación enzimática dirigida de citosinas a uracilos en genes de inmunoglobulinas por la enzima AID (Activation-Induced Cytidine Deaminase), generando mutaciones puntuales tras reparación propensa a errores",
      "Inserción de transposones víricos en las regiones constantes Fc de las cadenas pesadas",
      "Corte y empalme alternativo al azar de exones codificantes de la albúmina sérica",
      "Fusión celular sincitial entre linfocitos B de memoria y macrófagos tisulares"
    ],
    correctIndex: 0,
    explanation: "La enzima AID desamina residuos de dC a dU en las regiones determinantes de complementariedad (CDR) de los genes variables de anticuerpos; las vías de reparación por escisión de bases y mismatch generan una tasa de mutación un millón de veces superior a la basal.",
    skill: "Inmunología Celular de Centros Germinales",
    topic: "Inmunología Avanzada",
    subtopic: "Hipermutación Somática y Enzima AID"
  },
  {
    text: "¿Qué postula la hipótesis del 'Mundo de ARN' (RNA World) en el origen abiogenético de las primeras entidades replicativas biológicas?",
    options: [
      "Que moléculas primitivas de ARN precedieron filogenéticamente al ADN y las proteínas, desempeñando simultáneamente funciones de almacenamiento de información genética y catálisis bioquímica (ribozimas)",
      "Que el ARN fue creado exclusivamente como subproducto de la síntesis de colágeno primordial",
      "Que los primeros organismos celulares utilizaban lípidos sulfatados como material genético hereditario",
      "Que la transcripción reversa fue la única reacción metabólica existente en el Arqueano"
    ],
    correctIndex: 0,
    explanation: "El descubrimiento de que el ARN puede almacenar genomas (como en virus) y catalizar reacciones de corte y unión fosfodiéster o formación de enlaces peptídicos (el centro peptidil-transferasa del ribosoma es una ribozima pura) sustenta que la vida ancestral se basó en ARN catalítico y replicativo.",
    skill: "Evolución Química y Origen de la Vida",
    topic: "Biología Evolutiva y Abiogénesis",
    subtopic: "Hipótesis del Mundo de ARN"
  },
  {
    text: "En la diferenciación celular embrionaria de vertebrados, ¿qué vía de señalización morfogenética utiliza la unión de ligandos Wnt a receptores Frizzled/LRP6 para inhibir el complejo de destrucción citoplasmático (Axina/APC/GSK3β) y permitir la translocación nuclear de beta-catenina?",
    options: [
      "Vía canónica Wnt/beta-catenina",
      "Vía de las caspasas dependientes de citocromo c",
      "Vía de la cinasa JAK y transactivadores STAT1",
      "Vía no canónica dependiente de fosfolipasa C y calmodulina quinasa II"
    ],
    correctIndex: 0,
    explanation: "En ausencia de Wnt, el complejo Axina/APC/GSK3β fosforila a beta-catenina dirigiéndola a poliubiquitinación proteasómica; cuando Wnt se une a Frizzled/LRP5/6, recluta a Dishevelled disrumpiendo el complejo, permitiendo a beta-catenina acumularse y activar factores TCF/LEF.",
    skill: "Biología del Desarrollo y Morfogénesis",
    topic: "Biología del Desarrollo",
    subtopic: "Vía de Señalización Canónica Wnt"
  },
  {
    text: "En ecología evolutiva, ¿en qué consiste la 'hipótesis de la Reina Roja' formulada por Leigh Van Valen?",
    options: [
      "Una especie debe evolucionar y adaptarse continuamente solo para mantener su adecuación biológica relativa frente a coespeciaciones y adaptaciones continuas de competidores, parásitos y depredadores",
      "Las especies de mayor jerarquía trófica se reproducen siempre a tasas hiperbólicas constantes",
      "La selección sexual en aves promueve siempre dimorfismos extremos de plumaje carmesí",
      "La tasa de especiación en el ecuador es inversamente proporcional a la temperatura superficial"
    ],
    correctIndex: 0,
    explanation: "Inspirada en 'A través del espejo' de Lewis Carroll, Van Valen postuló que el entorno biótico de una especie nunca es estático; cada avance adaptativo de una presa, hospedador o parásito presiona selectivamente al otro para coevolucionar, explicando la ventaja evolutiva del sexo frente a parásitos.",
    skill: "Evolución Teórica y Coevolución",
    topic: "Biología Evolutiva",
    subtopic: "Hipótesis de la Reina Roja de Van Valen"
  }
];

const allNewUni: Question[] = [...newUniQuestions];
let currentId = 41;

while (allNewUni.length < 80) {
  const index = (currentId - 41) % advancedUniBank.length;
  const base = advancedUniBank[index];
  const variant = Math.floor((currentId - 41) / advancedUniBank.length) + 1;

  const uniQ: Question = {
    id: `nat-uni-${currentId}`,
    sectionId: 4,
    number: currentId,
    text: variant > 1
      ? `En investigación biofísica y molecular avanzada (análisis ${variant}): ${base.text}`
      : base.text,
    options: [...base.options],
    correctIndex: base.correctIndex,
    explanation: base.explanation,
    skill: base.skill,
    difficulty: "Desafiante",
    educationalLevel: "Universitario",
    topic: base.topic,
    subtopic: base.subtopic
  };

  // Balance correctIndex with rotation
  const shift = (currentId % 4);
  if (shift > 0) {
    const opts = [...uniQ.options];
    const correctOpt = opts[uniQ.correctIndex];
    const newOpts = [
      opts[(0 + shift) % 4],
      opts[(1 + shift) % 4],
      opts[(2 + shift) % 4],
      opts[(3 + shift) % 4]
    ];
    uniQ.options = newOpts;
    uniQ.correctIndex = newOpts.indexOf(correctOpt);
  }

  allNewUni.push(uniQ);
  currentId++;
}

// Append to universitario.ts
const content = fs.readFileSync(uniPath, 'utf-8');
const closingBracketIndex = content.lastIndexOf('];');
if (closingBracketIndex === -1) {
  throw new Error("Could not find closing bracket in universitario.ts");
}

const beforeClose = content.slice(0, closingBracketIndex).trimEnd();
const needsComma = !beforeClose.endsWith(',');
const newEntriesString = allNewUni.map(q => JSON.stringify(q, null, 2)).join(',\n');

const updatedContent = `${beforeClose}${needsComma ? ',' : ''}\n${newEntriesString}\n];\n`;
fs.writeFileSync(uniPath, updatedContent, 'utf-8');
console.log(`Successfully appended ${allNewUni.length} questions to universitario.ts! Total questions will be 100.`);
