import * as fs from 'fs';
import * as path from 'path';
import { Question } from '../src/types';

const bachilleratoPath = path.resolve(process.cwd(), 'src/data/questions/ciencias_naturales/bachillerato.ts');

const newQuestions: Question[] = [
  {
    id: "nat-bac-81",
    sectionId: 4,
    number: 81,
    text: "¿Cuál es el aceptor final de electrones en la cadena respiratoria mitocondrial durante la fosforilación oxidativa aeróbica?",
    options: [
      "El oxígeno molecular (O₂), que se reduce formando agua (H₂O)",
      "El piruvato, que se reduce a lactato",
      "El NAD⁺, que se reduce a NADH",
      "El dióxido de carbono (CO₂)"
    ],
    correctIndex: 0,
    explanation: "En la membrana interna mitocondrial, el complejo IV (citocromo c oxidasa) transfiere cuatro electrones y cuatro protones al oxígeno molecular (O₂), el aceptor terminal, reduciéndolo a dos moléculas de agua.",
    skill: "Bioenergética Celular",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Respiración Celular",
    subtopic: "Cadena de Transporte de Electrones"
  },
  {
    id: "nat-bac-82",
    sectionId: 4,
    number: 82,
    text: "En un cruce entre dos individuos heterocigotos (Aa) para un carácter con dominancia completa, ¿cuál es la proporción fenotípica esperada en la descendencia según la primera y segunda ley de Mendel?",
    options: [
      "1 dominante : 2 intermedios : 1 recesivo",
      "3 fenotipo dominante : 1 fenotipo recesivo",
      "1 dominante : 1 recesivo",
      "9 : 3 : 3 : 1"
    ],
    correctIndex: 1,
    explanation: "El cuadro de Punnett para Aa × Aa produce genotipos 1 AA : 2 Aa : 1 aa. Al existir dominancia completa, tanto AA como Aa exhiben el fenotipo dominante, dando una relación fenotípica de 3:1.",
    skill: "Genética Clásica Mendeliana",
    difficulty: "Básico",
    educationalLevel: "Bachillerato",
    topic: "Leyes de Mendel",
    subtopic: "Segregación y Cuadro de Punnett"
  },
  {
    id: "nat-bac-83",
    sectionId: 4,
    number: 83,
    text: "¿Qué tipo de curva de supervivencia caracteriza a los mamíferos grandes (como los humanos y elefantes), con baja mortalidad inicial y alta mortalidad en edades avanzadas?",
    options: [
      "Curva de Tipo III (mortalidad masiva juvenil)",
      "Curva de Tipo II (mortalidad constante a lo largo de toda la vida)",
      "Curva de Tipo I (supervivencia prolongada y mortalidad concentrada en la senescencia)",
      "Curva exponencial invertida"
    ],
    correctIndex: 2,
    explanation: "Las especies con curva Tipo I invierten mucho cuidado parental en pocas crías, asegurando alta supervivencia juvenil y juvenil tardía; la mortalidad se concentra al final de la esperanza de vida biológica.",
    skill: "Ecología de Poblaciones",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Dinámica Poblacional",
    subtopic: "Curvas de Supervivencia"
  },
  {
    id: "nat-bac-84",
    sectionId: 4,
    number: 84,
    text: "¿Cuál es la principal causa química antropogénica de la lluvia ácida que acidifica suelos y cursos de agua dulce?",
    options: [
      "La emisión de clorofluorocarbonos (CFC) que reaccionan con el vapor de agua",
      "La liberación de metano (CH₄) procedente de la ganadería intensiva",
      "La emisión de dióxido de azufre (SO₂) y óxidos de nitrógeno (NOₓ) que forman ácido sulfúrico (H₂SO₄) y ácido nítrico (HNO₃)",
      "La evaporación excesiva de agua de enfriamiento en plantas nucleares"
    ],
    correctIndex: 2,
    explanation: "El SO₂ y los NOₓ generados por combustión de combustibles fósiles reaccionan con agua, oxígeno y oxidantes atmosféricos para formar soluciones diluidas de H₂SO₄ y HNO₃ con pH inferior a 5.6.",
    skill: "Química Atmosférica y Contaminación",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Impacto Ambiental",
    subtopic: "Lluvia Ácida"
  },
  {
    id: "nat-bac-85",
    sectionId: 4,
    number: 85,
    text: "Durante la fase de despolarización de un potencial de acción en el axón neuronal, ¿qué evento iónico ocurre principalmente?",
    options: [
      "Apertura masiva de canales de Na⁺ activados por voltaje y entrada rápida de sodio al interior celular",
      "Salida rápida de iones K⁺ hacia el espacio extracelular",
      "Inactivación completa de la bomba Na⁺/K⁺ ATPasa",
      "Apertura exclusiva de canales de Cl⁻ que hiperpolarizan la membrana"
    ],
    correctIndex: 0,
    explanation: "Al alcanzarse el potencial umbral (-55 mV), se abren los canales de sodio dependientes de voltaje; el influjo masivo de Na⁺ a favor de su gradiente electroquímico invierte la polaridad hasta unos +30 mV.",
    skill: "Fisiología del Sistema Nervioso",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Neurobiología Celular",
    subtopic: "Potencial de Acción"
  },
  {
    id: "nat-bac-86",
    sectionId: 4,
    number: 86,
    text: "¿En qué tipo de límite tectónico de placas litosféricas se produce la subducción de corteza oceánica densa bajo corteza continental menos densa, originando fosas oceánicas y cordilleras volcánicas?",
    options: [
      "Límite divergente o constructivo",
      "Límite transformante o conservativo",
      "Límite convergente o destructivo",
      "Punto caliente intraplaca (hotspot)"
    ],
    correctIndex: 2,
    explanation: "En los límites convergentes, la litosfera oceánica fría y densa subduce en el manto, fundiéndose parcialmente y alimentando el magmatismo de arcos volcánicos como los Andes o el Cinturón de Fuego del Pacífico.",
    skill: "Geodinámica Global",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Tectónica de Placas",
    subtopic: "Zonas de Subducción"
  },
  {
    id: "nat-bac-87",
    sectionId: 4,
    number: 87,
    text: "¿Qué hormona secretan las células beta de los islotes de Langerhans en el páncreas endocrino en respuesta a la hiperglucemia posprandial?",
    options: [
      "Glucagón",
      "Insulina",
      "Cortisol",
      "Adrenalina"
    ],
    correctIndex: 1,
    explanation: "La insulina facilita la captación celular de glucosa a través de transportadores GLUT4 en músculo y tejido adiposo, y estimula la glucogénesis hepática, disminuyendo los niveles sanguíneos de glucosa a valores homeostáticos.",
    skill: "Fisiología Endocrina y Homeostasis",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Regulación Glucémica",
    subtopic: "Insulina y Páncreas"
  },
  {
    id: "nat-bac-88",
    sectionId: 4,
    number: 88,
    text: "¿Qué postula la hipótesis endosimbiótica seriada propuesta por Lynn Margulis sobre el origen de mitocondrias y cloroplastos?",
    options: [
      "Se originaron por invaginaciones sucesivas de la membrana plasmática eucariota",
      "Evolucionaron a partir de bacterias procariontes de vida libre que fueron fagocitadas por células huésped ancestrales sin ser digeridas",
      "Fueron creados por síntesis de lípidos y proteínas de novo en el retículo endoplasmático",
      "Surgieron exclusivamente por transferencia horizontal de genes virales"
    ],
    correctIndex: 1,
    explanation: "La presencia de ADN circular propio, ribosomas 70S similares a procariontes y doble membrana lipídica confirma que mitocondrias (alfaproteobacterias) y plastidios (cianobacterias) surgieron por endosimbiosis mutualista.",
    skill: "Evolución Celular",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Teoría Endosimbiótica",
    subtopic: "Origen de Organelos Eucariotas"
  },
  {
    id: "nat-bac-89",
    sectionId: 4,
    number: 89,
    text: "En la biosfera, ¿cuál es la función primordial de las bacterias nitrificantes del suelo (como Nitrosomonas y Nitrobacter) en el ciclo del nitrógeno?",
    options: [
      "Convertir el gas nitrógeno atmosférico (N₂) en amoníaco mediante nitrogenasa",
      "Oxidar el amoníaco o amonio (NH₄⁺) secuencialmente a nitrito (NO₂⁻) y luego a nitrato (NO₃⁻), forma asimilable por las plantas",
      "Transformar los nitratos en gas nitrógeno molecular devuelto a la atmósfera",
      "Fijar el carbono orgánico mediante fotosíntesis oxigénica"
    ],
    correctIndex: 1,
    explanation: "Nitrosomonas oxida el NH₄⁺ a NO₂⁻ y Nitrobacter oxida NO₂⁻ a NO₃⁻ en procesos quimiosintéticos aerobios, aportando nitrato indispensable para la síntesis de aminoácidos vegetales.",
    skill: "Ciclos Biogeoquímicos",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Ciclo del Nitrógeno",
    subtopic: "Nitrificación Bacteriana"
  },
  {
    id: "nat-bac-90",
    sectionId: 4,
    number: 90,
    text: "¿Qué tipo de enlace químico mantiene unidas a las dos cadenas polinucleotídicas complementarias en la doble hélice de ADN descubierta por Watson y Crick?",
    options: [
      "Enlaces fosfodiéster covalentes",
      "Enlaces peptídicos",
      "Puentes de hidrógeno entre pares de bases nitrogenadas (A=T y G≡C)",
      "Enlaces metálicos de coordinación"
    ],
    correctIndex: 2,
    explanation: "Mientras que los nucleótidos de una misma hebra están unidos covalentemente por enlaces fosfodiéster, las dos hebras antiparalelas se estabilizan por 2 puentes de hidrógeno entre A y T y 3 entre G y C.",
    skill: "Biología Molecular y Estructura del ADN",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Ácidos Nucleicos",
    subtopic: "Estructura de Doble Hélice"
  },
  {
    id: "nat-bac-91",
    sectionId: 4,
    number: 91,
    text: "¿Cuál es el proceso geológico por el cual las rocas sedimentarias y volcánicas expuestas sufren disgregación física o alteración química en la superficie terrestre sin transporte de material?",
    options: [
      "Meteorización",
      "Erosión pluvial",
      "Sedimentación diagenética",
      "Metamorfismo regional"
    ],
    correctIndex: 0,
    explanation: "La meteorización es la alteración y fragmentación in situ de los minerales bajo la acción de la atmósfera, el agua y los seres vivos; a diferencia de la erosión, no implica transporte de clastos.",
    skill: "Geología Física",
    difficulty: "Básico",
    educationalLevel: "Bachillerato",
    topic: "Ciclo Litológico",
    subtopic: "Meteorización vs Erosión"
  },
  {
    id: "nat-bac-92",
    sectionId: 4,
    number: 92,
    text: "En un ecosistema acuático, ¿qué fenómeno destructivo se desencadena tras el vertido masivo de fertilizantes con fosfatos y nitratos (eutrofización artificial)?",
    options: [
      "Proliferación descontrolada de microalgas, agotamiento del oxígeno disuelto por descomposición bacteriana y anoxia letal para peces",
      "Inmediata desertificación del lecho acuático por evaporación acelerada",
      "Disminución drástica de los descomponedores y acidificación por ácido nítrico puro",
      "Aumento permanente de la transparencia y de la biomasa de corales"
    ],
    correctIndex: 0,
    explanation: "El exceso de nutrientes induce florecimiento algal rápido; al morir las algas, las bacterias aerobias consumen todo el oxígeno disuelto en su descomposición, generando condiciones hipóxicas o anóxicas mortales.",
    skill: "Ecología de Aguas Continentales",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Contaminación Hídrica",
    subtopic: "Eutrofización y Anoxia"
  },
  {
    id: "nat-bac-93",
    sectionId: 4,
    number: 93,
    text: "¿Qué mecanismo de transporte celular utiliza energía del ATP en contra de gradientes de concentración electroquímicos para mantener el gradiente iónico transmembrana en células animales?",
    options: [
      "Difusión simple a través de la bicapa fosfolipídica",
      "Difusión facilitada por canales de poro",
      "Transporte activo primario mediante la bomba Na⁺/K⁺ ATPasa",
      "Ósmosis coloidosmótica pasiva"
    ],
    correctIndex: 2,
    explanation: "La bomba Na⁺/K⁺ hidroliza una molécula de ATP para expulsar 3 iones Na⁺ e ingresar 2 iones K⁺ contra sus gradientes electroquímicos, manteniendo el potencial de membrana en reposo y el volumen celular.",
    skill: "Transporte a través de Membrana",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Biología Celular",
    subtopic: "Transporte Activo Primario"
  },
  {
    id: "nat-bac-94",
    sectionId: 4,
    number: 94,
    text: "¿Cuál es la enzima clave responsable de transcribir una secuencia de ADN en una molécula de ARN mensajero (ARNm) en células eucariotas?",
    options: [
      "ADN ligasa",
      "ARN polimerasa II",
      "ADN polimerasa III",
      "Topoisomerasa I"
    ],
    correctIndex: 1,
    explanation: "En eucariotas, la ARN polimerasa II sintetiza los precursores de ARN mensajero (ARNm) que codifican proteínas, mientras que la polimerasa I sintetiza ARNr mayor y la polimerasa III sintetiza ARNt y ARNr 5S.",
    skill: "Expresión Génica Eucariota",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Transcripción Genética",
    subtopic: "ARN Polimerasa II"
  },
  {
    id: "nat-bac-95",
    sectionId: 4,
    number: 95,
    text: "¿En qué consiste la especiación alopátrica (o geográfica)?",
    options: [
      "Aparición de nuevas especies sin ningún tipo de barrera física en la misma área de distribución",
      "Divergencia evolutiva de poblaciones separadas espacialmente por una barrera geográfica que interrumpe el flujo génico",
      "Aparición instantánea de poliploidía híbrida en plantas simpátricas",
      "Fijación forzada de alelos exclusivamente por selección artificial"
    ],
    correctIndex: 1,
    explanation: "La especiación alopátrica ocurre cuando una barrera geográfica (cordillera, río, océano) fragmenta una población; la deriva génica, mutaciones y presiones selectivas divergentes acumulan aislamiento reproductivo con el tiempo.",
    skill: "Evolución y Especiación",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Mecanismos Evolutivos",
    subtopic: "Especiación Alopátrica"
  },
  {
    id: "nat-bac-96",
    sectionId: 4,
    number: 96,
    text: "¿Qué función cumple el bucle de retroalimentación negativa (feedback negativo) en los sistemas homeostáticos fisiológicos?",
    options: [
      "Amplificar exponencialmente la desviación inicial respecto al punto de ajuste",
      "Detectar una alteración y activar efectores que contrarrestan o revierten la desviación para devolver la variable a su rango fisiológico normal",
      "Desactivar por completo el sistema inmunitario innato",
      "Garantizar que todas las reacciones químicas alcancen el equilibrio estático irreversible"
    ],
    correctIndex: 1,
    explanation: "El feedback negativo es el pilar de la homeostasis: cuando una variable (temperatura corporal, pH, osmolaridad) se aleja del valor de ajuste, el sensor y efector producen una respuesta que opone y anula la desviación.",
    skill: "Fisiología y Homeostasis",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Regulación Homeostática",
    subtopic: "Mecanismo de Feedback Negativo"
  },
  {
    id: "nat-bac-97",
    sectionId: 4,
    number: 97,
    text: "¿Cuál es el gas de efecto invernadero no halogenado más abundante en la atmósfera terrestre responsable del mayor porcentaje del efecto invernadero natural de nuestro planeta?",
    options: [
      "Dióxido de carbono (CO₂)",
      "Metano (CH₄)",
      "Vapor de agua (H₂O)",
      "Óxido nitroso (N₂O)"
    ],
    correctIndex: 2,
    explanation: "El vapor de agua (H₂O) es el gas de efecto invernadero natural más abundante, contribuyendo entre el 36% y 70% al efecto invernadero global, actuando como retroalimentador climático de las emisiones antropogénicas de CO₂.",
    skill: "Ciencias de la Tierra y Climatología",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Atmósfera y Clima",
    subtopic: "Gases de Efecto Invernadero"
  },
  {
    id: "nat-bac-98",
    sectionId: 4,
    number: 98,
    text: "¿Qué tipo de interacción ecológica interespecífica ocurre cuando dos especies compiten por el mismo recurso limitante y una de ellas desplaza por completo a la otra hasta extinguirla localmente?",
    options: [
      "Principio de exclusión competitiva de Gause",
      "Comensalismo estricto",
      "Mutualismo facultativo",
      "Simbiosis endémica"
    ],
    correctIndex: 0,
    explanation: "El principio de exclusión competitiva de Gause estipula que dos especies que compiten exactamente por el mismo nicho ecológico y recurso limitante no pueden coexistir indefinidamente si los demás factores se mantienen constantes.",
    skill: "Ecología de Comunidades",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Interacciones Ecológicas",
    subtopic: "Principio de Exclusión Competitiva"
  },
  {
    id: "nat-bac-99",
    sectionId: 4,
    number: 99,
    text: "¿En qué fase de la meiosis ocurre el entrecruzamiento o sobrecruzamiento cromosómico (crossing-over) entre cromátidas no hermanas de cromosomas homólogos, generando recombinación genética?",
    options: [
      "Metafase II",
      "Profase I (específicamente en paquiteno)",
      "Anafase I",
      "Telofase II"
    ],
    correctIndex: 1,
    explanation: "Durante el paquiteno de la Profase I meiótica, tras formarse el complejo sinaptonémico, se producen nódulos de recombinación donde fragmentos de ADN se intercambian entre cromátidas homólogas, generando variabilidad genética.",
    skill: "División Celular y Genética",
    difficulty: "Intermedio",
    educationalLevel: "Bachillerato",
    topic: "Meiosis y Recombinación",
    subtopic: "Crossing-Over en Profase I"
  },
  {
    id: "nat-bac-100",
    sectionId: 4,
    number: 100,
    text: "¿Cuál es la función primordial de la capa de ozono (O₃) presente en la estratosfera terrestre?",
    options: [
      "Atrapar el calor irradiado por la superficie para mantener el clima cálido",
      "Absorber y filtrar la mayor parte de la radiación ultravioleta de alta energía (UV-B y UV-C) procedente del Sol",
      "Producir precipitaciones ácidas que limpian el aire de polvos minerales",
      "Disolver los gases nobles de la termosfera"
    ],
    correctIndex: 1,
    explanation: "A través del ciclo de Chapman fotoquímico, las moléculas de O₃ en la estratosfera absorben radiación UV peligrosa de longitudes de onda entre 200 y 315 nm, protegiendo el ADN de los seres vivos terrestres.",
    skill: "Ciencias de la Tierra y Atmósfera",
    difficulty: "Básico",
    educationalLevel: "Bachillerato",
    topic: "Atmósfera Terrestre",
    subtopic: "Capa de Ozono Estratosférica"
  }
];

// Read current bachillerato.ts
const content = fs.readFileSync(bachilleratoPath, 'utf-8');
const closingBracketIndex = content.lastIndexOf('];');
if (closingBracketIndex === -1) {
  throw new Error("Could not find closing bracket in bachillerato.ts");
}

const beforeClose = content.slice(0, closingBracketIndex).trimEnd();
// Check if beforeClose ends with comma
const needsComma = !beforeClose.endsWith(',');
const newEntriesString = newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n');

const updatedContent = `${beforeClose}${needsComma ? ',' : ''}\n${newEntriesString}\n];\n`;
fs.writeFileSync(bachilleratoPath, updatedContent, 'utf-8');
console.log("Successfully appended 20 questions to bachillerato.ts!");
