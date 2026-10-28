import * as fs from 'fs';
import * as path from 'path';

function writeSubjectFile(fileName: string, exportName: string, subjectTitle: string, questions: any[]) {
  const content = `import { Question } from '../../types';

/**
 * BANCO OFICIAL DE PREGUNTAS: ${subjectTitle.toUpperCase()}
 * 100 Reactivos Verificados Pedagógicamente:
 * - 20 Básico
 * - 20 Intermedio
 * - 20 Bachillerato
 * - 20 Técnico
 * - 20 Universitario
 */
export const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};
`;
  const outPath = path.join(process.cwd(), 'src/data/questions', fileName);
  fs.writeFileSync(outPath, content, 'utf8');
  console.log(`Saved ${questions.length} questions to ${outPath}`);
}

// =========================================================================
// 7. BIOLOGÍA (100 preguntas)
// =========================================================================
function makeBiologia() {
  const items: any[] = [];
  const levels = ['Básico', 'Intermedio', 'Bachillerato', 'Técnico', 'Universitario'] as const;

  // 20 Básico
  const bas = [
    {
      q: '¿Cuál es el orgánulo celular conocido como la "central energética" donde se sintetiza la mayor cantidad de ATP mediante respiración celular?',
      opts: ['El retículo endoplásmico', 'La mitocondria', 'El aparato de Golgi', 'La vacuola central'],
      ans: 1,
      exp: 'Las mitocondrias son los orgánulos eucariotas donde se efectúa el ciclo de Krebs y la fosforilación oxidativa generadora de ATP.',
      skill: 'Organelos Celulares Básicos',
      topic: 'Citología',
      sub: 'Mitocondrias'
    },
    {
      q: '¿Qué molécula biológica almacena la información genética hereditaria en el núcleo de las células eucariotas?',
      opts: ['El glucógeno', 'El ácido desoxirribonucleico (ADN)', 'El colesterol', 'La hemoglobina'],
      ans: 1,
      exp: 'El ADN contiene las instrucciones codificadas en secuencias de nucleótidos (A, T, C, G) para la síntesis de ARN y proteínas.',
      skill: 'Ácidos Nucleicos y Genética Básica',
      topic: 'Genética',
      sub: 'Estructura del ADN'
    },
    {
      q: '¿Qué pigmento verde localizado en los cloroplastos es el responsable directo de absorber la luz solar para la fotosíntesis?',
      opts: ['La melanina', 'La clorofila', 'El caroteno', 'La hemoglobina'],
      ans: 1,
      exp: 'La clorofila a y b absorbe longitudes de onda azules y rojas del espectro visible, reflejando la luz verde.',
      skill: 'Pigmentos Fotosintéticos',
      topic: 'Botánica',
      sub: 'Clorofila'
    },
    {
      q: '¿Qué reino de los seres vivos agrupa a organismos pluricelulares autótrofos con pared celular de celulosa capaces de fotosintetizar?',
      opts: ['Reino Fungi (hongos)', 'Reino Plantae (plantas)', 'Reino Animalia', 'Reino Protista'],
      ans: 1,
      exp: 'El reino Plantae engloba a los vegetales verdes autótrofos fotosintéticos con pared de celulosa y cloroplastos.',
      skill: 'Reinos de la Naturaleza',
      topic: 'Taxonomía',
      sub: 'Reino Plantae'
    },
    {
      q: '¿Cuál es la función principal de los glóbulos rojos (eritrocitos) en el cuerpo humano?',
      opts: ['Combatir virus y bacterias patógenas', 'Transportar oxígeno hacia los tejidos corporales mediante la hemoglobina', 'Coagular la sangre en las heridas', 'Filtrar la urea en el riñón'],
      ans: 1,
      exp: 'Los eritrocitos contienen millones de moléculas de hemoglobina que unen reversiblemente moléculas de oxígeno (O₂) en los capilares pulmonares.',
      skill: 'Células Sanguíneas',
      topic: 'Fisiología Humana',
      sub: 'Eritrocitos y Hemoglobina'
    },
    {
      q: '¿Cómo se denomina la asociación simbiótica mutualista en la raíz de las plantas entre hongos y las raíces vegetales?',
      opts: ['Líquen', 'Micorriza', 'Parasitismo obligado', 'Epifitismo'],
      ans: 1,
      exp: 'Las micorrizas aumentan enormemente la superficie de absorción de agua y fósforo para la planta, mientras el hongo recibe carbohidratos fotosintéticos.',
      skill: 'Interacciones Biológicas',
      topic: 'Ecología y Botánica',
      sub: 'Micorrizas'
    },
    {
      q: '¿Qué sistema del cuerpo humano está formado por el cerebro, la médula espinal y los nervios periféricos?',
      opts: ['Sistema endocrino', 'Sistema nervioso', 'Sistema digestivo', 'Sistema linfático'],
      ans: 1,
      exp: 'El sistema nervioso coordina e integra las respuestas sensoriales y motoras del organismo mediante impulsos bioeléctricos.',
      skill: 'Anatomía del Sistema Nervioso',
      topic: 'Sistemas Corporales',
      sub: 'Sistema Nervioso Central y Periférico'
    },
    {
      q: '¿Qué tipo de reproducción asexual realiza una bacteria cuando se divide exactamente en dos células hijas idénticas?',
      opts: ['Esporulación', 'Fisión binaria (bipartición)', 'Gemación', 'Partenogénesis'],
      ans: 1,
      exp: 'La fisión binaria bacteriana implica la replicación del cromosoma circular único seguida de la formación de un septo divisorio transversal.',
      skill: 'Reproducción Celular Procariota',
      topic: 'Microbiología',
      sub: 'Fisión Binaria'
    },
    {
      q: '¿Cuál es la función del estómago en el proceso de digestión humana?',
      opts: ['Absorber la mayor parte del agua', 'Comenzar la digestión ácida de proteínas mediante ácido clorhídrico y pepsina', 'Producir bilis para emulsionar grasas', 'Sintetizar insulina'],
      ans: 1,
      exp: 'El jugo gástrico con pH ≈ 1.5-2.0 activa la pepsina que rompe enlaces peptídicos de proteínas y desinfecta el bolo alimenticio.',
      skill: 'Fisiología Digestiva',
      topic: 'Aparato Digestivo',
      sub: 'Digestión Gástrica'
    },
    {
      q: '¿Qué clase de vertebrados se caracteriza por poseer glándulas mamarias productoras de leche para alimentar a sus crías y pelo en la piel?',
      opts: ['Reptiles', 'Mamíferos', 'Aves', 'Anfibios'],
      ans: 1,
      exp: 'Los mamíferos (Mammalia) son endotermos tetrápodos caracterizados por glándulas mamarias funcionales en hembras y pelaje queratinizado.',
      skill: 'Clasificación de Vertebrados',
      topic: 'Zoología',
      sub: 'Clase Mamíferos'
    },
    {
      q: '¿En qué estructura vegetal ocurre principalmente el intercambio gaseoso y la transpiración de vapor de agua?',
      opts: ['En los pelos absorbentes radiculares', 'En los estomas de las hojas', 'En el leño del tronco', 'En los pétalos de la flor'],
      ans: 1,
      exp: 'Los estomas son poros microscópicos flanqueados por células oclusivas que regulan el flujo de CO₂, O₂ y vapor de agua.',
      skill: 'Morfofisiología Vegetal',
      topic: 'Botánica',
      sub: 'Estomas y Transpiración'
    },
    {
      q: '¿Cuál es el hueso más largo del cuerpo humano, ubicado en el muslo de la pierna?',
      opts: ['La tibia', 'El fémur', 'El húmero', 'El radio'],
      ans: 1,
      exp: 'El fémur es el hueso más largo, resistente y voluminoso del esqueleto humano apendicular inferior.',
      skill: 'Sistema Óseo',
      topic: 'Anatomía Humana',
      sub: 'El Fémur'
    },
    {
      q: '¿Qué tipo de organismo consumidor es un león que caza cebras en la sabana?',
      opts: ['Consumidor primario herbívoro', 'Consumidor secundario (o terciario) carnívoro depredador', 'Descomponedor saprófito', 'Productor quimiosintético'],
      ans: 1,
      exp: 'Los leones son carnívoros depredadores tope situados en niveles tróficos superiores que se alimentan de herbívoros.',
      skill: 'Ecología y Dinámica Trófica',
      topic: 'Ecosistemas',
      sub: 'Depredadores Tope'
    },
    {
      q: '¿Cuál de las siguientes biomoléculas cumple la función primordial de reserva energética a largo plazo y aislamiento térmico en animales?',
      opts: ['Los lípidos (grasas y triglicéridos)', 'Los ácidos nucleicos', 'El agua libre', 'Las sales minerales'],
      ans: 0,
      exp: 'Los triglicéridos almacenan aproximadamente 9 kcal/g de energía de alta densidad metabólica en el tejido adiposo subcutáneo.',
      skill: 'Biomoléculas Orgánicas',
      topic: 'Bioquímica Básica',
      sub: 'Lípidos y Reserva Energética'
    },
    {
      q: '¿Qué órgano de las plantas vasculares sostiene las hojas, flores y frutos y transporta savia entre la raíz y la copa?',
      opts: ['La raíz', 'El tallo', 'La semilla', 'El cáliz'],
      ans: 1,
      exp: 'El tallo confiere soporte mecánico estructural aéreo y aloja los haces vasculares del xilema y floema.',
      skill: 'Morfología de Plantas',
      topic: 'Botánica',
      sub: 'El Tallo'
    },
    {
      q: '¿Cuál es la función de los alvéolos pulmonares en el sistema respiratorio humano?',
      opts: ['Filtrar el polvo del aire mediante cilios', 'Realizar la hematosis (intercambio de gases O₂ y CO₂ con los capilares sanguíneos)', 'Producir sonido laríngeo', 'Transportar linfa'],
      ans: 1,
      exp: 'Los alvéolos ofrecen una superficie de intercambio masiva (~70-100 m²) con una barrera hematogaseosa de menos de 1 micrómetro de grosor.',
      skill: 'Fisiología Respiratoria',
      topic: 'Aparato Respiratorio',
      sub: 'Alvéolos y Hematosis'
    },
    {
      q: '¿Qué naturalista británico publicó en 1859 el libro "El origen de las especies", sentando las bases de la teoría de la evolución por selección natural?',
      opts: ['Gregor Mendel', 'Charles Darwin', 'Louis Pasteur', 'Jean-Baptiste Lamarck'],
      ans: 1,
      exp: 'Charles Darwin formuló que los individuos con variaciones hereditarias favorables sobreviven y se reproducen con mayor éxito adaptativo.',
      skill: 'Historia de la Biología y Evolución',
      topic: 'Evolución',
      sub: 'Charles Darwin y Selección Natural'
    },
    {
      q: '¿Qué tipo de microorganismos patógenos acelulares están constituidos únicamente por material genético (ADN o ARN) rodeado por una cápside proteica?',
      opts: ['Las bacterias', 'Los virus', 'Los protozoos', 'Las levaduras'],
      ans: 1,
      exp: 'Los virus son parásitos intracelulares estrictos acelulares que no poseen metabolismo propio y requieren la maquinaria celular del huésped para replicarse.',
      skill: 'Microbiología y Virología Básica',
      topic: 'Microbiología',
      sub: 'Estructura de los Virus'
    },
    {
      q: '¿Cuál es la hormona tiroidea encargada de regular el metabolismo basal celular y el crecimiento en el cuerpo humano?',
      opts: ['Insulina', 'Tiroxina (T4)', 'Parathormona', 'Melatonina'],
      ans: 1,
      exp: 'La tiroxina (T4) y la triyodotironina (T3) producidas por la glándula tiroides estimulan el consumo de oxígeno celular y la tasa metabólica basal.',
      skill: 'Sistema Endocrino',
      topic: 'Fisiología Humana',
      sub: 'Hormonas Tiroideas'
    },
    {
      q: '¿Qué parte de la flor se transforma en el fruto carnoso o seco tras la fecundación de los óvulos en las angiospermas?',
      opts: ['Los sépalos', 'El ovario del gineceo', 'Los estambres', 'El polen'],
      ans: 1,
      exp: 'Tras la doble fecundación, las paredes del ovario maduran y se hipertrofian formando el pericarpo del fruto que protege y dispersa las semillas.',
      skill: 'Reproducción en Angiospermas',
      topic: 'Botánica',
      sub: 'Desarrollo del Fruto'
    }
  ];

  bas.forEach((item, idx) => {
    items.push({
      id: `bio-bas-${idx + 1}`,
      sectionId: 7,
      number: idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Fácil',
      educationalLevel: 'Básico',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 Intermedio
  const intRaw = [
    {
      q: '¿En qué estructura de la membrana celular de las células eucariotas animales se encuentran lípidos anfipáticos como los fosfolípidos y el colesterol formando una bicapa fluida?',
      opts: ['Pared celular rígida', 'Membrana plasmática según el modelo de mosaico fluido de Singer y Nicolson', 'Cápsula bacteriana de polisacáridos', 'Lámina basal nuclear'],
      ans: 1,
      exp: 'El modelo del mosaico fluido postula una matriz lipídica fluida con proteínas integrales y periféricas con difusión lateral continua.',
      skill: 'Estructura de la Membrana Celular',
      topic: 'Citología',
      sub: 'Mosaico Fluido'
    },
    {
      q: 'Durante la interfase del ciclo celular, ¿en qué período se produce la síntesis de histonas y la duplicación del ADN cromosómico?',
      opts: ['G1', 'Fase S (Síntesis)', 'G2', 'Citocinesis'],
      ans: 1,
      exp: 'En la fase S se activan los orígenes de replicación y la ADN polimerasa duplica el contenido de ADN celular de 2c a 4c.',
      skill: 'Ciclo Celular Eucariota',
      topic: 'Biología Celular',
      sub: 'Fase S de Replicación'
    },
    {
      q: '¿Cuál es la función del complejo de Golgi en el sistema de endomembranas celular?',
      opts: [
        'Sintetizar lípidos de membrana exclusivamente',
        'Modificar, empaquetar, clasificar y distribuir proteínas provenientes del retículo endoplásmico rugoso hacia su destino final',
        'Degradar ADN foráneo mediante endonucleasas',
        'Realizar la transcripción génica'
      ],
      ans: 1,
      exp: 'El aparato de Golgi glicosila proteínas y lípidos (cis, medial, trans) y los empaqueta en vesículas secretoras o lisosomales.',
      skill: 'Sistema de Endomembranas',
      topic: 'Biología Celular',
      sub: 'Aparato de Golgi'
    },
    {
      q: 'Si un organismo heterocigoto con genotipo Aa se autofecunda (cruce monohíbrido Aa × Aa), ¿cuál es la proporción fenotípica esperada en la descendencia para un carácter con dominancia completa?',
      opts: ['1:1', '3:1 (3 dominantes : 1 recesivo)', '9:3:3:1', '1:2:1'],
      ans: 1,
      exp: 'Genotipos: 1 AA : 2 Aa : 1 aa. Dado que AA y Aa expresan el fenotipo dominante, la proporción fenotípica es de 3 dominantes por cada 1 recesivo (3:1).',
      skill: 'Genética Mendeliana Monohíbrida',
      topic: 'Genética Clásica',
      sub: 'Segregación Mendeliana 3:1'
    },
    {
      q: '¿Cómo se denomina el proceso por el cual el ARN mensajero (ARNm) es sintetizado en el núcleo tomando como molde una de las cadenas de ADN?',
      opts: ['Traducción', 'Transcripción', 'Replicación', 'Retrotranscripción'],
      ans: 1,
      exp: 'La transcripción es llevada a cabo por la ARN polimerasa que lee la hebra molde de ADN en sentido 3\'→5\' y sintetiza ARNm complementario en 5\'→3\'.',
      skill: 'Expresión Génica y Transcripción',
      topic: 'Biología Molecular',
      sub: 'Transcripción del ADN'
    },
    {
      q: 'En el sistema circulatorio humano, ¿qué vaso sanguíneo transporta sangre desoxigenada desde el ventrículo derecho del corazón hacia los pulmones?',
      opts: ['La arteria aorta', 'La arteria pulmonar', 'Las venas pulmonares', 'La vena cava superior'],
      ans: 1,
      exp: 'La arteria pulmonar (y sus ramas izquierda y derecha) es la única arteria del adulto que transporta sangre carboxigenada hacia los pulmones para oxigenarse.',
      skill: 'Circulación Menor o Pulmonar',
      topic: 'Aparato Cardiovascular',
      sub: 'Arteria Pulmonar'
    },
    {
      q: '¿Cuál es el tipo de inmunidad adquirida que desarrolla un individuo cuando recibe una vacuna con antígenos atenuados o inactivados?',
      opts: ['Inmunidad pasiva natural', 'Inmunidad activa artificial', 'Inmunidad innata humoral', 'Inmunidad pasiva artificial'],
      ans: 1,
      exp: 'La vacunación estimula activamente al sistema inmune del huésped para generar clones de linfocitos B y T de memoria contra el antígeno.',
      skill: 'Tipos de Inmunidad',
      topic: 'Inmunología',
      sub: 'Inmunización Activa Artificial'
    },
    {
      q: '¿Qué enzima digestiva producida en las glándulas salivales inicia la degradación química del almidón en la boca?',
      opts: ['Pepsina', 'Amilasa salival (o ptialina)', 'Lipasa gástrica', 'Tripsina'],
      ans: 1,
      exp: 'La amilasa salival hidroliza enlaces glucosídicos alfa-1,4 internos del almidón produciendo maltosa, maltotriosa y dextrinas límite.',
      skill: 'Enzimas Digestivas',
      topic: 'Aparato Digestivo',
      sub: 'Amilasa Salival'
    },
    {
      q: '¿Qué estructura reproductora femenina de las plantas angiospermas contiene el saco embrionario con la oosfera o célula huevo?',
      opts: ['La antera del estambre', 'El óvulo (dentro del ovario)', 'El filamento estaminal', 'El grano de polen'],
      ans: 1,
      exp: 'El óvulo vegetal contiene el megasporangio donde tras meiosis y mitosis se forma el saco embrionario octanucleado con la oosfera.',
      skill: 'Embriología Vegetal',
      topic: 'Botánica',
      sub: 'Óvulo y Saco Embrionario'
    },
    {
      q: '¿Cuál es el bioelemento primario que constituye el esqueleto central de todas las biomoléculas orgánicas debido a su capacidad de formar 4 enlaces covalentes estables?',
      opts: ['Hierro', 'Carbono (C)', 'Sodio', 'Calcio'],
      ans: 1,
      exp: 'La tetravalencia y electronegatividad intermedia del carbono le permiten formar cadenas lineales, ramificadas y anillos aromáticos estables.',
      skill: 'Bioelementos Primarios',
      topic: 'Bioquímica',
      sub: 'El Carbono en Biomoléculas'
    },
    {
      q: 'En el sistema nervioso, ¿qué vaina lipídica formada por células de Schwann o por oligodendrocitos aísla el axón y permite la conducción saltatoria rápida del impulso eléctrico?',
      opts: ['Vaina de mielina', 'Lámina conectiva perineural', 'Sustancia de Nissl', 'Bisel dendrítico'],
      ans: 0,
      exp: 'La mielina actúa como aislante eléctrico: la despolarización solo ocurre en los nódulos de Ranvier amielínicos, multiplicando la velocidad de conducción hasta 120 m/s.',
      skill: 'Neurohistología',
      topic: 'Sistema Nervioso',
      sub: 'Vaina de Mielina y Conducción Saltatoria'
    },
    {
      q: '¿Qué tipo de selección natural favorece a los individuos con fenotipos intermedios y elimina a los fenotipos extremos de una población (por ejemplo, el peso natal humano óptimo)?',
      opts: ['Selección direccional', 'Selección estabilizadora (o normalizadora)', 'Selección disruptiva', 'Selección sexual pura'],
      ans: 1,
      exp: 'La selección estabilizadora reduce la varianza poblacional favoreciendo la media adaptativa frente a desviaciones extremas perjudiciales.',
      skill: 'Mecanismos de Selección Natural',
      topic: 'Evolución',
      sub: 'Selección Estabilizadora'
    },
    {
      q: '¿Qué proteína fibrosa estructural constituye el componente principal del cabello, uñas, pezuñas y plumas en vertebrados?',
      opts: ['Actina', 'Queratina', 'Colágeno', 'Elastina'],
      ans: 1,
      exp: 'Las queratinas son filamentos intermedios ricos en cisteína con múltiples puentes disulfuro que aportan gran resistencia mecánica e impermeabilidad.',
      skill: 'Proteínas Estructurales',
      topic: 'Histología',
      sub: 'Queratina'
    },
    {
      q: '¿Cuál es la función de los ribosomas libres en el citosol celular?',
      opts: [
        'Sintetizar proteínas destinadas a funcionar en el citosol, núcleo, mitocondrias o peroxisomas',
        'Sintetizar lípidos esteroides',
        'Producir ATP por quimiósmosis',
        'Empaquetar enzimas en lisosomas'
      ],
      ans: 0,
      exp: 'Los ribosomas libres citosólicos sintetizan proteínas solubles citosólicas y con señales de localización nuclear o mitocondrial.',
      skill: 'Biología Celular de la Traducción',
      topic: 'Citología',
      sub: 'Ribosomas Citosólicos'
    },
    {
      q: 'En la ecología de poblaciones, ¿cómo se denomina el tamaño poblacional máximo que un determinado ambiente o hábitat puede sostener de forma indefinida con sus recursos disponibles?',
      opts: ['Potencial biótico intrínseco', 'Capacidad de carga (K)', 'Densidad crítica de Allee', 'Tasa intrínseca de natalidad'],
      ans: 1,
      exp: 'La capacidad de carga K es el límite asintótico en el modelo logístico dN/dt = rN(1 - N/K) donde la tasa de natalidad iguala a la de mortalidad.',
      skill: 'Dinámica de Poblaciones',
      topic: 'Ecología',
      sub: 'Capacidad de Carga K'
    },
    {
      q: '¿Qué glándula endocrina situada en la base del cerebro es considerada la "glándula maestra" por secretar hormonas tróficas que controlan a la tiroides, suprarrenales y gónadas?',
      opts: ['La glándula pineal', 'La hipófisis (o glándula pituitaria)', 'El timo', 'El páncreas'],
      ans: 1,
      exp: 'La adenohipófisis secreta TSH, ACTH, FSH, LH, GH y prolactina bajo el control neurohormonal del hipotálamo.',
      skill: 'Fisiología Endocrina y Eje Hipotálamo-Hipofisario',
      topic: 'Sistema Endocrino',
      sub: 'Hipófisis'
    },
    {
      q: '¿Cuál es la función del tejido adiposo pardo (grasa parda) presente en recién nacidos y animales hibernantes?',
      opts: [
        'Almacenar glucógeno hepático',
        'Generar calor corporal rápido mediante termogénesis sin escalofríos gracias a la proteína desacoplante termogenina (UCP-1)',
        'Producir glóbulos rojos embrionarios',
        'Secretar bilis'
      ],
      ans: 1,
      exp: 'La termogenina (UCP-1) disipa el gradiente electroquímico de protones mitocondrial en forma de calor en vez de ATP para combatir la hipotermia.',
      skill: 'Termorregulación y Tejido Adiposo',
      topic: 'Histología y Fisiología',
      sub: 'Grasa Parda y UCP-1'
    },
    {
      q: '¿Qué tipo de mutación cromosómica estructural ocurre cuando un fragmento de un cromosoma se desprende y se une a un cromosoma no homólogo?',
      opts: ['Inversión pericéntrica', 'Translocación cromosómica', 'Deleción terminal', 'Duplicación en tándem'],
      ans: 1,
      exp: 'La translocación (recíproca o robertsoniana) transfiere segmentos de cromatina entre cromosomas no homólogos, como en el cromosoma Filadelfia t(9;22).',
      skill: 'Citogenética y Mutaciones Cromosómicas',
      topic: 'Genética',
      sub: 'Translocaciones Cromosómicas'
    },
    {
      q: '¿Qué enzima nuclear es responsable de desenrollar la doble hélice de ADN rompiendo los puentes de hidrógeno durante la replicación celular?',
      opts: ['ADN ligasa', 'ADN helicasa', 'ARN primasa', 'ADN polimerasa I'],
      ans: 1,
      exp: 'La helicasa avanza en la horquilla de replicación hidrolizando ATP para romper los enlaces de hidrógeno entre bases complementarias.',
      skill: 'Maquinaria de Replicación del ADN',
      topic: 'Biología Molecular',
      sub: 'Helicasa'
    },
    {
      q: '¿Cómo se denomina la asociación estrecha entre un hongo (micobionte) y un alga verde o cianobacteria fotosintética (fotobionte)?',
      opts: ['Micorriza arbuscular', 'Líquen', 'Moho saprófito', 'Bacteriófago'],
      ans: 1,
      exp: 'Los líquenes son organismos duales pioneros donde el alga provee fotoasimilados y el hongo aporta agua, sales minerales y protección.',
      skill: 'Simbiosis en Ecosistemas',
      topic: 'Ecología',
      sub: 'Líquenes'
    }
  ];

  intRaw.forEach((item, idx) => {
    items.push({
      id: `bio-int-${idx + 1}`,
      sectionId: 7,
      number: 20 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Intermedio',
      educationalLevel: 'Intermedio',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 Bachillerato
  const bacRaw = [
    {
      q: 'En la respiración celular mitocondrial, ¿cuál es el aceptor final de electrones en la cadena de transporte electrónico de la membrana interna?',
      opts: ['El NAD⁺', 'El oxígeno molecular (O₂), que se reduce a agua (H₂O)', 'El citocromo c', 'El piruvato'],
      ans: 1,
      exp: 'El Complejo IV (citocromo c oxidasa) transfiere 4 electrones y 4 protones a una molécula de O₂, reduciéndola a dos moléculas de agua.',
      skill: 'Fosforilación Oxidativa y Cadena Respiratoria',
      topic: 'Bioenergética Celular',
      sub: 'Aceptor Final de Electrones'
    },
    {
      q: '¿Qué proceso genético meiótico en el paquiteno de la profase I genera recombinación genética al intercambiar segmentos de cromátidas no hermanas entre cromosomas homólogos?',
      opts: ['Citocinesis', 'Entrecruzamiento o crossing-over en quiasmas', 'Segregación al azar de cromátidas', 'Disyunción anafásica'],
      ans: 1,
      exp: 'El crossing-over mediado por el complejo sinaptonémico intercambia alelos maternos y paternos, generando combinaciones alélicas únicas.',
      skill: 'Meiosis y Recombinación Genética',
      topic: 'Genética',
      sub: 'Crossing-over en Paquiteno'
    },
    {
      q: '¿Cuál es la función del ARN de transferencia (ARNt) en la traducción ribosómica?',
      opts: [
        'Almacenar la información en el nucléolo',
        'Transportar aminoácidos específicos hacia el ribosoma apareando su triplete anticodón con el codón del ARNm',
        'Catalizar el corte de intrones en el espliceosoma',
        'Iniciar la transcripción en el promotor'
      ],
      ans: 1,
      exp: 'El ARNt decodifica el mensaje genético mediante su bucle de anticodón complementario al codón del ARNm en el sitio A del ribosoma.',
      skill: 'Traducción Proteica y ARNt',
      topic: 'Biología Molecular',
      sub: 'Función del ARNt'
    },
    {
      q: '¿Qué estructura embrionaria primaria de los cordados induce el desarrollo del tubo neural durante la neurulación en vertebrados?',
      opts: ['El celoma secundario', 'La notocorda (mesodermo axial)', 'El endodermo del vitelo', 'El blastocele'],
      ans: 1,
      exp: 'La notocorda emite señales moleculares inductivas (como Sonic Hedgehog y Noggin) que inducen al ectodermo dorsal a plegarse en el tubo neural.',
      skill: 'Embriología y Neurulación',
      topic: 'Biología del Desarrollo',
      sub: 'Notocorda e Inducción Neural'
    },
    {
      q: '¿Qué postula la Hipótesis Quimiosmótica formulada por Peter Mitchell (Premio Nobel 1978) sobre la síntesis de ATP en mitocondrias y cloroplastos?',
      opts: [
        'El ATP se forma por colisiones térmicas de fosfato inorgánico libre.',
        'La energía liberada por el flujo de electrones se almacena en forma de un gradiente electroquímico de protones (fuerza protón-motriz) a través de la membrana que impulsa la ATP sintasa rotatoria.',
        'Los electrones se unen directamente al ADP para fosforilarlo.',
        'La fotosíntesis no requiere membranas lipídicas.'
      ],
      ans: 1,
      exp: 'Mitchell demostró que el bombeo de protones crea una diferencia de potencial eléctrico (Δψ) y de pH (ΔpH) que activa la subunidad catalítica F₁-ATPasa.',
      skill: 'Fosforilación Quimiosmótica de Mitchell',
      topic: 'Bioenergética',
      sub: 'Fuerza Protón-Motriz'
    },
    {
      q: 'En genética molecular, ¿qué complejo ribonucleoproteico nuclear cataliza el corte y empalme (splicing) para eliminar intrones no codificantes del pre-ARNm eucariota?',
      opts: ['El proteasoma 26S', 'El espliceosoma (spliceosome formado por snRNPs)', 'El complejo RISC de ARN interferente', 'El nucleosoma de histonas'],
      ans: 1,
      exp: 'El espliceosoma reconoce secuencias consenso en los extremos 5\' y 3\' de los intrones mediante snRNPs (U1, U2, U4, U5, U6) liberando el intrón en estructura de lazo.',
      skill: 'Procesamiento del ARN y Splicing',
      topic: 'Biología Molecular',
      sub: 'Espliceosoma'
    },
    {
      q: '¿Cómo se denomina la muerte celular programada fisiológica mediada por la activación de una cascada de proteasas intracelulares llamadas caspasas?',
      opts: ['Necrosis accidental por lisis', 'Apoptosis', 'Autólisis putrefacta', 'Gangrena húmeda'],
      ans: 1,
      exp: 'La apoptosis es un proceso activo y regulado genéticamente sin inflamación circundante, con condensación de cromatina y formación de cuerpos apoptóticos.',
      skill: 'Muerte Celular Programada',
      topic: 'Biología Celular',
      sub: 'Apoptosis y Caspasas'
    },
    {
      q: '¿Cuál es el principal neurotransmisor excitatorio del sistema nervioso central de los mamíferos?',
      opts: ['GABA (ácido gamma-aminobutírico)', 'Glutamato (o ácido glutámico)', 'Glicina', 'Dopamina inhibitoria'],
      ans: 1,
      exp: 'El glutamato actúa sobre receptores ionotrópicos (AMPA, NMDA, kainato) despolarizando la membrana postsináptica mediante entrada de Na⁺ y Ca²⁺.',
      skill: 'Neurotransmisión Sináptica',
      topic: 'Neurobiología',
      sub: 'Glutamato'
    },
    {
      q: '¿Qué tipo de aislamiento reproductivo precigótico ocurre cuando dos especies simpátricas se reproducen en diferentes estaciones del año o momentos del día?',
      opts: ['Aislamiento mecánico', 'Aislamiento temporal o estacional', 'Aislamiento etológico o conductual', 'Inviabilidad de los híbridos'],
      ans: 1,
      exp: 'El aislamiento temporal impide el apareamiento al no coincidir los picos de fertilidad, floración o cortejo en el tiempo.',
      skill: 'Especiación y Mecanismos de Aislamiento',
      topic: 'Evolución',
      sub: 'Aislamiento Temporal'
    },
    {
      q: '¿Qué orgánulo celular contiene la enzima catalasa para descomponer el peróxido de hidrógeno tóxico (H₂O₂) en agua y oxígeno?',
      opts: ['El lisosoma primario', 'El peroxisoma', 'El centrosoma', 'El nucléolo'],
      ans: 1,
      exp: 'Los peroxisomas participan en la beta-oxidación de ácidos grasos de cadena muy larga y metabolizan especies reactivas de oxígeno mediante catalasa: 2 H₂O₂ → 2 H₂O + O₂.',
      skill: 'Orgánulos Peroxisomales',
      topic: 'Citología',
      sub: 'Peroxisomas y Catalasa'
    },
    {
      q: '¿Cuál es el efecto fisiológico principal de la hormona vegetal auxina (ácido indol-3-acético, AIA) en el fototropismo del tallo?',
      opts: [
        'Inhibir el crecimiento radicular',
        'Migrar hacia el lado sombreado del tallo y estimular el alargamiento celular promoviendo la curvatura hacia la fuente de luz',
        'Inducir la abscisión inmediata de frutos',
        'Cerrar los estomas en sequía'
      ],
      ans: 1,
      exp: 'Según la teoría de Went y Cholodny, las auxinas se redistribuyen al lado no iluminado activando bombas de protones que ablandan la pared celular (crecimiento ácido).',
      skill: 'Fitohormonas y Tropismos Vegetales',
      topic: 'Fisiología Vegetal',
      sub: 'Auxinas y Fototropismo'
    },
    {
      q: '¿Qué estructura especializada de la nefrona yuxtamedular permite establecer el gradiente osmótico medular hiperosmótico mediante un mecanismo de contracorriente?',
      opts: ['La cápsula de Bowman', 'El Asa de Henle', 'El túbulo contorneado proximal', 'El glomérulo de Malpighi'],
      ans: 1,
      exp: 'La rama descendente permeable al agua y la rama ascendente impermeable al agua pero con transporte activo de Na⁺/K⁺/2Cl⁻ multiplican el gradiente osmótico medular hasta 1200 mOsm/L.',
      skill: 'Fisiología Renal y Concentración de Orina',
      topic: 'Aparato Renal',
      sub: 'Asa de Henle y Multiplicación por Contracorriente'
    },
    {
      q: '¿Qué enzima retroviral transcribe el genoma de ARN vírico de cadena positiva a una doble hebra de ADN provírico complementario?',
      opts: ['ARN polimerasa II', 'Transcriptasa inversa (ADN polimerasa dependiente de ARN)', 'Integrasa', 'Endonucleasa Cas9'],
      ans: 1,
      exp: 'La transcriptasa inversa del VIH sintetiza ADNc a partir del ARN vírico, incorporándolo posteriormente al genoma de la célula huésped mediante la integrasa.',
      skill: 'Virología Molecular y Retrovirus',
      topic: 'Microbiología',
      sub: 'Transcriptasa Inversa'
    },
    {
      q: '¿Cuál es la función del surfactante pulmonar secretado por los neumocitos tipo II en los alvéolos humanos?',
      opts: [
        'Facilitar la entrada de monóxido de carbono',
        'Reducir la tensión superficial alveolar impidiendo el colapso pulmonar (atelectasia) al final de la espiración',
        'Producir moco espeso bactericida',
        'Oxigenar directamente el plasma'
      ],
      ans: 1,
      exp: 'El surfactante (rico en dipalmitoilfosfatidilcolina) disminuye la tensión superficial en la interfaz aire-líquido alveolar según la ley de Laplace (P = 2T/r).',
      skill: 'Fisiología Pulmonar y Surfactante',
      topic: 'Fisiología Humana',
      sub: 'Surfactante Alveolar'
    },
    {
      q: '¿Cómo se denomina la técnica biotecnológica de edición genómica precisa basada en un ARN guía y una endonucleasa bacteriana descubierta por Charpentier y Doudna?',
      opts: ['Microarrays de ADN', 'CRISPR-Cas9', 'Secuenciación de Sanger', 'Southern blot'],
      ans: 1,
      exp: 'CRISPR-Cas9 permite cortar secuencias diana de ADN especificadas por un ARN guía de 20 nucleótidos, permitiendo la deleción, corrección o inserción precisa de genes.',
      skill: 'Biotecnología y Edición Genética CRISPR',
      topic: 'Biotecnología Molecular',
      sub: 'Sistema CRISPR-Cas9'
    },
    {
      q: '¿Qué ley de la ecología formulada por Justus von Liebig establece que el crecimiento y rendimiento de las plantas no está determinado por los recursos abundantes sino por el recurso esencial más escaso?',
      opts: ['Ley del diezmo ecológico', 'Ley del Mínimo de Liebig', 'Ley de tolerancia de Shelford', 'Principio de Gause'],
      ans: 1,
      exp: 'La Ley del Mínimo ilustrada con el barril de Liebig demuestra que el nutriente más deficiente actúa como factor limitante del desarrollo biológico.',
      skill: 'Ecología Teórica y Factores Limitantes',
      topic: 'Ecología',
      sub: 'Ley del Mínimo de Liebig'
    },
    {
      q: '¿Qué tipo de células inmunitarias fagocíticas tisulares derivan de los monocitos circulantes en sangre y actúan como células presentadoras de antígeno profesionales?',
      opts: ['Eritrocitos maduros', 'Macrófagos', 'Células cebadas basófilas', 'Plaquetas'],
      ans: 1,
      exp: 'Los macrófagos fagocitan restos celulares y patógenos, procesando fragmentos peptídicos que presentan en moléculas MHC-II a linfocitos T cooperadores CD4⁺.',
      skill: 'Inmunología Celular',
      topic: 'Sistema Inmunitario',
      sub: 'Macrófagos y Presentación Antigénica'
    },
    {
      q: '¿Cuál es el destino metabólico del piruvato en el citosol en condiciones anaeróbicas en las células musculares esqueléticas humanas durante ejercicio extenuante?',
      opts: ['Oxidación a Acetil-CoA en mitocondrias', 'Fermentación láctica reduciéndose a lactato por la enzima lactato deshidrogenasa (LDH)', 'Conversión en etanol y CO₂', 'Polimerización en celulosa'],
      ans: 1,
      exp: 'La reducción de piruvato a lactato por la LDH regenera NAD⁺ a partir de NADH, permitiendo que la glucólisis continúe produciendo 2 ATP por glucosa.',
      skill: 'Metabolismo Anaeróbico y Fermentación',
      topic: 'Bioquímica Celular',
      sub: 'Fermentación Láctica'
    },
    {
      q: '¿Qué región heterocromática terminal de los cromosomas lineales eucariotas protege los extremos del ADN contra la degradación y acortamiento replicativo en cada división celular?',
      opts: ['El centrómero acrocéntrico', 'El telómero', 'El cinetocoro interno', 'El locus promotor'],
      ans: 1,
      exp: 'Los telómeros están compuestos por repeticiones en tándem no codificantes (TTAGGG en vertebrados) y un complejo proteico shelterina, acortándose con el envejecimiento celular.',
      skill: 'Citogenética Molecular y Telómeros',
      topic: 'Genética',
      sub: 'Telómeros y Envejecimiento Celular'
    },
    {
      q: '¿Qué tipo de enlace covalente estabiliza la estructura terciaria de muchas proteínas secretadas uniendo covalentemente dos residuos de cisteína distantes en la cadena polipeptídica?',
      opts: ['Enlace peptídico amida', 'Puente disulfuro (-S-S-)', 'Enlace éster fosfórico', 'Interacción hidrofóbica apolar'],
      ans: 1,
      exp: 'La oxidación de dos grupos tiol (-SH) de residuos de cisteína forma un puente disulfuro covalente que estabiliza el plegamiento nativo frente a la desnaturalización.',
      skill: 'Estructura Terciaria de Proteínas',
      topic: 'Bioquímica Estructural',
      sub: 'Puentes Disulfuro'
    }
  ];

  bacRaw.forEach((item, idx) => {
    items.push({
      id: `bio-bac-${idx + 1}`,
      sectionId: 7,
      number: 40 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Intermedio',
      educationalLevel: 'Bachillerato',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 Técnico
  const tecRaw = [
    {
      q: 'En diagnóstico clínico por citometría de flujo, ¿qué parámetro óptico medido por dispersión de luz frontal a bajo ángulo (FSC: Forward Scatter) es proporcional al tamaño físico de la célula?',
      opts: ['Complejidad granular interna celular (SSC)', 'Tamaño relativo de la célula (FSC)', 'Intensidad de fluorescencia del fluoróforo FITC', 'Viabilidad de membrana con yoduro de propidio'],
      ans: 1,
      exp: 'El detector FSC colocado en el eje del haz láser detecta la luz difractada hacia adelante, la cual es directamente proporcional al diámetro o volumen transversal de la célula.',
      skill: 'Citometría de Flujo e Inmunofenotipaje',
      topic: 'Técnicas de Laboratorio Biomédico',
      sub: 'Parámetros FSC y SSC en Citometría'
    },
    {
      q: 'En histotecnología y tinción rutinaria de tejidos de biopsia en patología, ¿cuál es la combinación de colorantes estándar universal donde la hematoxilina tiñe núcleos de azul/púrpura y la eosina tiñe citoplasma y colágeno de rosado?',
      opts: ['Tinción de Gram', 'Tinción de Hematoxilina y Eosina (H&E)', 'Tinción de Giemsa', 'Tinción de Ziehl-Neelsen'],
      ans: 1,
      exp: 'La tinción H&E es el estándar histológico básico: la hematoxilina básica se une a los ácidos nucleicos basófilos cargados negativamente, y la eosina ácida tiñe proteínas catiónicas citoplasmáticas.',
      skill: 'Histología Diagnóstica y Coloraciones',
      topic: 'Histotecnología',
      sub: 'Tinción Hematoxilina-Eosina'
    },
    {
      q: 'En bioprocesos de fermentación industrial con biorreactores estériles para producción de anticuerpos monoclonales o enzimas, ¿qué parámetro se controla agregando automáticamente ácido o base y rociando O₂ disuelto?',
      opts: ['pH y concentración de oxígeno disuelto (DO)', 'Viscosidad cinemática pura', 'Volumen de agitación magnética', 'Conductividad del aire de escape'],
      ans: 0,
      exp: 'El control en lazo cerrado del pH y la saturación de O₂ disuelto (% DO) mediante electrodos polarográficos o sondas ópticas es vital para evitar el estrés celular y mantener la viabilidad celular máxima.',
      skill: 'Control de Variables en Biorreactores',
      topic: 'Ingeniería de Bioprocesos',
      sub: 'Monitoreo de pH y Oxígeno Disuelto'
    },
    {
      q: 'En el ensayo serológico ELISA tipo sándwich para diagnóstico de enfermedades infecciosas, ¿qué molécula se encuentra inmovilizada en el fondo de los pocillos de microtitulación antes de añadir la muestra del paciente?',
      opts: ['Sustrato cromogénico TMB', 'Anticuerpo de captura primario específico para el antígeno diana', 'Anticuerpo secundario conjugado con peroxidasa', 'Suero bovino desnaturalizado'],
      ans: 1,
      exp: 'En el ELISA sándwich, los pocillos se recubren con un anticuerpo de captura monovalente que inmoviliza específicamente al antígeno de la muestra biológica analizada.',
      skill: 'Inmunoensayos Diagnósticos ELISA',
      topic: 'Inmunodiagnóstico',
      sub: 'ELISA Tipo Sándwich'
    },
    {
      q: 'En la esterilización de medios de cultivo que contienen componentes termolábiles (como sueros con vitaminas o antibióticos), ¿qué método de esterilización física no térmica se utiliza?',
      opts: ['Autoclavado a 121 °C', 'Filtración por membranas de acetato o PES con poro nominal de 0.22 micrómetros', 'Incineración a la llama', 'Pasteurización discontinua'],
      ans: 1,
      exp: 'Las membranas de microfiltración estériles con poros de 0.22 μm retienen físicamente bacterias y levaduras sin degradar proteínas o antibióticos termosensibles.',
      skill: 'Esterilización de Líquidos Termolábiles',
      topic: 'Biotecnología y Cultivo Celular',
      sub: 'Filtración Esterilizante 0.22 um'
    },
    {
      q: 'En el cribado microbiológico de enterobacterias patógenas en heces, ¿qué medio de cultivo selectivo y diferencial contiene sales biliares, cristal violeta y lactosa para distinguir bacterias fermentadoras de lactosa (colonias rosadas como E. coli)?',
      opts: ['Agar Sangre de carnero', 'Agar MacConkey', 'Agar Sabouraud con cloranfenicol', 'Agar nutritivo simple'],
      ans: 1,
      exp: 'El agar MacConkey inhibe bacterias Gram positivas por sus sales biliares y cristal violeta, y el indicador rojo neutro vira a fucsia cuando la fermentación de lactosa acidifica el medio.',
      skill: 'Medios de Cultivo Microbiológicos',
      topic: 'Microbiología Clínica',
      sub: 'Agar MacConkey'
    },
    {
      q: 'En la técnica de Western Blot para detección de proteínas específicas, ¿qué membrana hidrófoba microporosa se utiliza habitualmente para transferir electroforéticamente las proteínas desde el gel de SDS-PAGE?',
      opts: ['Membrana de diálisis de celofán', 'Membrana de fluoruro de polivinilideno (PVDF) o de nitrocelulosa', 'Papel de filtro Whatman 1', 'Malla de nylon poroso'],
      ans: 1,
      exp: 'Las membranas de PVDF o nitrocelulosa poseen alta capacidad de unión no covalente de proteínas, facilitando su posterior incubación con anticuerpos primarios y secundarios.',
      skill: 'Técnicas de Inmunotransferencia Proteica',
      topic: 'Biología Molecular Instrumental',
      sub: 'Western Blot y Membranas PVDF'
    },
    {
      q: 'En acuicultura y fitosanidad, ¿qué organismo procariota fotosintético filamentoso puede producir floraciones tóxicas con liberación de microcistinas hepatotóxicas en embalses eutrofizados?',
      opts: ['Levaduras Saccharomyces', 'Cianobacterias (como Microcystis aeruginosa)', 'Diatomeas marinas', 'Bacterias nitrificantes'],
      ans: 1,
      exp: 'Las cianobacterias (algas verdeazules) liberan cianotoxinas peptídicas que inhiben fosfatasas proteicas hepáticas (PP1 y PP2A), causando necrosis hepática aguda en fauna y ganado.',
      skill: 'Toxicología Acuática y Cianotoxinas',
      topic: 'Calidad de Aguas y Acuicultura',
      sub: 'Cianotoxinas y Microcistina'
    },
    {
      q: 'En la criopreservación a largo plazo de líneas celulares de mamíferos en tanques de nitrógeno líquido (-196 °C), ¿qué agente crioprotector permeable se añade al medio al 10% para evitar la formación de cristales intracelulares de hielo?',
      opts: ['Metanol absoluto', 'Dimetilsulfóxido (DMSO)', 'Formol tamponado', 'Glicol polietilénico'],
      ans: 1,
      exp: 'El DMSO penetra rápidamente la membrana celular desplazando moléculas de agua y deprimiendo el punto de congelación, reduciendo la nucleación de cristales de hielo que perforarían las membranas.',
      skill: 'Criobiología y Cultivo Celular',
      topic: 'Biotecnología Celular',
      sub: 'Crioprotectores y DMSO'
    },
    {
      q: 'En la cromatografía de afinidad para purificación de proteínas recombinantes, ¿qué etiqueta peptídica de 6 histidinas consecutivas (His-tag) se fusiona al gen diana para purificarla selectivamente en una resina de quelatos metálicos (IMAC con Níquel-NTA)?',
      opts: ['Poli-adenina', 'Cola de poli-histidina (6xHis-tag)', 'Péptido señal hidrofóbico', 'Glutatión'],
      ans: 1,
      exp: 'Los residuos de imidazol de las histidinas coordinan con alta afinidad iones Ni²⁺ inmovilizados en la matriz de NTA; la elución de la proteína pura se logra compitiendo con imidazol libre.',
      skill: 'Purificación de Proteínas Recombinantes',
      topic: 'Biotecnología de Proteínas',
      sub: 'Purificación por Afinidad His-Tag / Ni-NTA'
    },
    {
      q: 'En el ensayo de PCR cuantitativa a tiempo real (RT-qPCR), ¿qué parámetro representa el número de ciclo de amplificación en el cual la señal de fluorescencia cruza un umbral estadísticamente significativo por encima del ruido de fondo?',
      opts: ['Punto isoeléctrico', 'Ciclo umbral (C_t o C_q)', 'Longitud de onda de emisión', 'Valor R_f'],
      ans: 1,
      exp: 'El valor C_t es inversamente proporcional al logaritmo de la cantidad inicial de copias de ADN molde: a mayor concentración de partida, menor es el C_t.',
      skill: 'PCR en Tiempo Real Cuantitativa',
      topic: 'Diagnóstico Molecular',
      sub: 'Valor Ct en RT-qPCR'
    },
    {
      q: 'En la clasificación y seguridad biológica de laboratorios microbiológicos, ¿qué nivel de bioseguridad (BSL) es requerido como mínimo para manipular agentes patógenos que causan enfermedades humanas graves o potencialmente letales por inhalación por aerosoles (como Mycobacterium tuberculosis)?',
      opts: ['Nivel de Bioseguridad 1 (BSL-1)', 'Nivel de Bioseguridad 2 (BSL-2)', 'Nivel de Bioseguridad 3 (BSL-3)', 'Nivel de Bioseguridad 4 exclusivamente'],
      ans: 2,
      exp: 'El nivel BSL-3 exige presión de aire negativa en el recinto, filtración HEPA del aire expulsado, acceso por doble puerta y trabajo dentro de cabinas de seguridad biológica clase II.',
      skill: 'Normas de Bioseguridad en Laboratorio (BSL)',
      topic: 'Seguridad Biológica',
      sub: 'Nivel de Bioseguridad 3 (BSL-3)'
    },
    {
      q: 'En la tecnología de fertilización in vitro (FIV) animal y humana, ¿qué técnica de micromanipulación consiste en inyectar directamente un único espermatozoide seleccionado mecánicamente dentro del citoplasma del ovocito maduro?',
      opts: ['Inseminación artificial clásica', 'Inyección Intracitoplasmática de Espermatozoides (ICSI)', 'Clonación somática nuclear', 'Fisión embrionaria'],
      ans: 1,
      exp: 'La ICSI utiliza una micropipeta de inyección bajo microscopio invertido con micromanipuladores hidráulicos para vencer factores de infertilidad masculina severa.',
      skill: 'Reproducción Asistida y Micromanipulación',
      topic: 'Biotecnología Reproductiva',
      sub: 'Técnica de ICSI'
    },
    {
      q: 'En el control de calidad microbiológico farmacéutico para medicamentos parenterales inyectables, ¿qué ensayo biológico utiliza el lisado de amebocitos de Limulus polyphemus (ensayo LAL) para detectar endotoxinas bacterianas pirogénicas (LPS)?',
      opts: ['Ensayo de Gram diferencial', 'Ensayo LAL (Limulus Amebocyte Lysate)', 'Ensayo de Kirby-Bauer', 'Prueba de coagulasa'],
      ans: 1,
      exp: 'El lisado de Limulus reacciona con trazas picográmicas de lipopolisacárido bacteriano (endotoxina Gram negativa) mediante una cascada enzimática de coagulación, evitando reacciones de choque pirogénico en pacientes.',
      skill: 'Control Microbiológico de Endotoxinas',
      topic: 'Control de Calidad Farmacéutico',
      sub: 'Ensayo LAL de Endotoxinas'
    },
    {
      q: 'En la producción biotecnológica de anticuerpos monoclonales, ¿qué células inmortales híbridas resultan de la fusión de un linfocito B esplénico con una célula de mieloma tumoral (células HGPRT⁻)?',
      opts: ['Células HeLa', 'Hibridomas', 'Células madre pluripotentes inducidas', 'Blastocistos'],
      ans: 1,
      exp: 'La tecnología de hibridomas de Köhler y Milstein (Nobel 1984) fusiona la capacidad de producción de anticuerpo del linfocito B con la inmortalidad proliferativa del mieloma en medio selectivo HAT.',
      skill: 'Tecnología de Hibridomas y Anticuerpos Monoclonales',
      topic: 'Inmunotecnología',
      sub: 'Hibridomas de Köhler y Milstein'
    },
    {
      q: 'En bioinformática aplicada al análisis de secuencias de ADN y proteínas, ¿qué algoritmo de alineamiento local heurístico rápido se utiliza para buscar similitudes en bases de datos de secuencias biológicas (como GenBank)?',
      opts: ['BLAST (Basic Local Alignment Search Tool)', 'Algoritmo Dijkstra', 'Método Monte Carlo puro', 'Regresión lineal múltiple'],
      ans: 0,
      exp: 'BLAST busca segmentos cortos de coincidencia (palabras semilla) y los extiende estadísticamente calculando valores E (E-value) de significación biológica.',
      skill: 'Bioinformática y Alineamiento de Secuencias',
      topic: 'Bioinformática',
      sub: 'Algoritmo BLAST'
    },
    {
      q: 'En la microscopía electrónica de transmisión (TEM) biológica para visualizar ultraestructuras celulares (ribosomas, crestas mitocondriales), ¿qué sales de metales pesados electrodensos se utilizan comúnmente para el contraste selectivo de cortes ultrafinos?',
      opts: ['Sales de sodio y potasio', 'Acetato de uranilo y citrato de plomo', 'Etanol absoluto', 'Sulfato de cobre'],
      ans: 1,
      exp: 'Los átomos pesados de uranio y plomo (alto número atómico Z) dispersan fuertemente los electrones del haz, generando contraste oscuro en áreas afines como cromatina y membranas.',
      skill: 'Microscopía Electrónica de Transmisión (TEM)',
      topic: 'Técnicas Microscópicas Avanzadas',
      sub: 'Contraste en Microscopía Electrónica'
    },
    {
      q: 'En el ensayo de susceptibilidad antimicrobiana por difusión en disco (antibiograma de Kirby-Bauer), ¿qué medio de cultivo estandarizado internacionalmente por el CLSI / EUCAST se debe utilizar obligatoriamente?',
      opts: ['Agar Sabouraud dextrosa', 'Agar Mueller-Hinton (MHA)', 'Agar cled', 'Caldo tioglicolato'],
      ans: 1,
      exp: 'El agar Mueller-Hinton posee baja concentración de timina y timidina (inhibidores de sulfonamidas) y osmolaridad controlada para permitir una difusión libre y reproducible de los antibióticos.',
      skill: 'Antibiogramas y Resistencia Bacteriana',
      topic: 'Microbiología Clínica',
      sub: 'Método de Kirby-Bauer y Agar Mueller-Hinton'
    },
    {
      q: 'En entomología agrícola y control biológico integrado de plagas de orugas barrenadoras, ¿qué bacteria esporulada entomopatógena produce endotoxinas cristalinas proteicas (proteínas Cry) que destruyen el epitelio intestinal del insecto plaga?',
      opts: ['Escherichia coli', 'Bacillus thuringiensis (Bt)', 'Lactobacillus bulgaricus', 'Streptomyces coelicolor'],
      ans: 1,
      exp: 'Las protoxinas Cry de Bacillus thuringiensis se solubilizan en el pH alcalino del intestino de lepidópteros, donde son procesadas a toxinas activas que forman poros líticos en las membranas celulares.',
      skill: 'Control Biológico de Plagas Agrícolas',
      topic: 'Biotecnología Agrícola',
      sub: 'Bacillus thuringiensis y Toxinas Cry'
    },
    {
      q: 'En la determinación de la concentración de hemoglobina glucosilada (HbA1c) en sangre para control metabólico de diabetes mellitus en laboratorios clínicos, ¿qué técnica cromatográfica automatizada de referencia certificada por el NGSP se emplea habitualmente?',
      opts: ['Cromatografía de intercambio iónico por HPLC', 'Destilación azeotrópica', 'Sedimentación gravitatoria simple', 'Espectroscopía infrarroja manual'],
      ans: 0,
      exp: 'El HPLC de intercambio catiónico separa con altísima resolución las fracciones de hemoglobina (HbA1a, HbA1b, HbA1c y HbA0) basándose en las diferencias de carga neta superficial.',
      skill: 'Bioquímica Clínica y Diagnóstico de Diabetes',
      topic: 'Análisis Clínicos',
      sub: 'Determinación de HbA1c por HPLC'
    }
  ];

  tecRaw.forEach((item, idx) => {
    items.push({
      id: `bio-tec-${idx + 1}`,
      sectionId: 7,
      number: 60 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Desafiante',
      educationalLevel: 'Técnico',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 Universitario
  const uniRaw = [
    {
      q: 'En la teoría quimiosmótica y biofísica de la ATP sintasa rotatoria (Complejo V FoF₁), ¿cuál es el mecanismo molecular mediante el cual el flujo de protones translocados a través de la subunidad a genera la rotación mecánica del anillo c?',
      opts: [
        'Neutralización electrostática reversible de residuos de aspartato o glutamato protonables en el anillo c que interactúan con dos semicirculaciones hidrofílicas desfasadas en la subunidad a',
        'Fosforilación oxidativa covalente directa en la interfase lipídica',
        'Túnel cuántico fotónico de electrones libres',
        'Contracción térmica de actomiosina'
      ],
      ans: 0,
      exp: 'Los protones entran por el semicanal citosólico/intermembrana protonando el carboxilato del Asp/Glu en el rotor c, lo que permite que gire en el ambiente hidrofóbico de la bicapa hasta descargarlo en el semicanal de la matriz.',
      skill: 'Biofísica Molecular de Motores Rotatorios',
      topic: 'Bioenergética Molecular Avanzada',
      sub: 'Mecanismo Rotatorio de la ATP Sintasa'
    },
    {
      q: 'En el ciclo de Krebs inverso (rTCA) y fijación autótrofa de CO₂ en arqueas y bacterias anaerobias primitivas, ¿qué enzima clave ferredoxina-dependiente cataliza la carboxilación reductora irreversible del succinil-CoA a 2-oxoglutarato?',
      opts: ['Citrato liasa dependiente de ATP', '2-oxoglutarato sintasa (oxoglutarato:ferredoxina oxidorreductasa, OGOR)', 'RuBisCO forma II', 'Malato sintasa'],
      ans: 1,
      exp: 'La 2-oxoglutarato sintasa utiliza ferredoxina reducida de muy bajo potencial redox para fijar CO₂ sobre succinil-CoA, constituyendo una de las rutas metabólicas más antiguas de asimilación de carbono inorgánico.',
      skill: 'Fisiología Bacteriana y Rutas Metabólicas Arcaicas',
      topic: 'Metabolismo Autótrofo Comparado',
      sub: 'Ciclo del Ácido Cítrico Inverso'
    },
    {
      q: 'En la regulación del ciclo celular en mamíferos, ¿qué proteína supresora de tumores hiperfosforilada por complejos ciclina D-CDK4/6 libera al factor de transcripción E2F para permitir la transición irreversible de la fase G1 a la fase S?',
      opts: ['Proteína del Retinoblastoma (pRb)', 'p53', 'BRCA1', 'APC/C'],
      ans: 0,
      exp: 'En fase G1 temprana, pRb hipofosforilado secuestra a E2F reprimiendo promotores de genes de fase S. La fosforilación secuencial por CDK4/6 y CDK2 desactiva pRb liberando E2F activo.',
      skill: 'Oncología Molecular y Puntos de Control Celular',
      topic: 'Ciclo Celular y Cáncer',
      sub: 'Punto de Control G1/S y Vía del Retinoblastoma'
    },
    {
      q: 'En la transducción de señales por receptores acoplados a proteínas G (GPCRs), ¿qué fosfolipasa de membrana es activada por subunidades Gα_q para escindir el fosfatidilinositol-4,5-bisfosfato (PIP₂) en inositol-1,4,5-trisfosfato (IP₃) y diacilglicerol (DAG)?',
      opts: ['Fosfolipasa A₂', 'Fosfolipasa C beta (PLCβ)', 'Fosfolipasa D', 'Adenilato ciclasa transmembrana'],
      ans: 1,
      exp: 'La PLCβ genera IP₃ que abre canales de Ca²⁺ en el retículo endoplásmico y DAG que recluta y activa la proteína quinasa C (PKC) en la membrana plasmática.',
      skill: 'Transducción de Señales Intracelulares',
      topic: 'Biología Celular Superior',
      sub: 'Vía de Señalización PLC-IP3-DAG'
    },
    {
      q: 'En la epigenética molecular y remodelación de la cromatina, ¿qué complejos multiproteicos de mantenimiento del silenciamiento transcripcional catalizan la trimetilación represiva de la histona H3 en la lisina 27 (H3K27me3)?',
      opts: ['Complejos Polycomb Repressive Complex 2 (PRC2 con subunidad catalítica EZH2)', 'Complejos Trithorax activadores (MLL)', 'Complejos SWI/SNF', 'Acetiltransferasas p300/CBP'],
      ans: 0,
      exp: 'La metiltransferasa EZH2 del complejo PRC2 deposita marcas H3K27me3 que condensan la cromatina y silencian genes homeóticos y de diferenciación celular durante el desarrollo embrionario.',
      skill: 'Epigenética y Modificación de Histonas',
      topic: 'Regulación Génica Eucariota',
      sub: 'Complejos Polycomb y Marca H3K27me3'
    },
    {
      q: 'En la inmunología de puntos de control (Checkpoint immunotherapy), ¿a qué ligando expresado en células tumorales se une el receptor inhibidor PD-1 de los linfocitos T para inducir agotamiento o anergia inmunitaria?',
      opts: ['CD28', 'PD-L1 (Programmed Death-Ligand 1 / B7-H1)', 'CTLA-4', 'MHC-II'],
      ans: 1,
      exp: 'La unión de PD-L1 al receptor PD-1 recluta la fosfatasa SHP-2 que desfosforila mediadores del TCR y CD28, anulando la respuesta antitumoral. Los anticuerpos bloqueantes anti-PD-1/PD-L1 reactivan a los linfocitos T citotóxicos.',
      skill: 'Inmunooncología Molecular',
      topic: 'Inmunoterapia del Cáncer',
      sub: 'Eje PD-1 / PD-L1'
    },
    {
      q: 'En la filogenómica y sistemática cladística, ¿cómo se denomina a un grupo biológico que incluye a un ancestro común más reciente pero no a todos sus descendientes?',
      opts: ['Grupo monofilético (clado)', 'Grupo parafilético', 'Grupo polifilético', 'Grupo alopátrico'],
      ans: 1,
      exp: 'Un taxón parafilético (como los "Reptiles" tradicionales si se excluyen las aves, o los "Peces") comparte sinapomorfías ancestrales pero excluye a descendientes directos de su nodo evolutivo.',
      skill: 'Sistemática Cladística y Filogenia',
      topic: 'Evolución y Sistemática',
      sub: 'Parafilia vs Monofilia'
    },
    {
      q: 'En la biología estructural de canales iónicos activados por voltaje (como los canales de potasio Kv), ¿qué dominio transmembrana helicoidal actúa como sensor de voltaje conteniendo residuos repetidos de arginina con carga positiva cada tres aminoácidos?',
      opts: ['Segmento S4', 'Poro selectivity filter P-loop', 'Dominio S1 intracelular', 'Filtro de inactivación N-terminal bola y cadena'],
      ans: 0,
      exp: 'Roderick MacKinnon demostró cristalográficamente que la despolarización induce un desplazamiento axial del segmento helicoidal S4 cargado positivamente, abriendo alocéricamente la compuerta intracelular del canal.',
      skill: 'Biofísica de Canales Iónicos',
      topic: 'Neurobiofísica',
      sub: 'Sensor de Voltaje S4 en Canales Iónicos'
    },
    {
      q: 'En la vía de degradación de proteínas por el sistema ubicuitina-proteasoma (UPS), ¿qué clase de enzimas confiere especificidad de sustrato transfiriendo y ligando selectivamente la ubiquitina activada a la cadena lateral de lisina de la proteína diana?',
      opts: ['Enzima activadora E1', 'Enzima conjugadora E2', 'Ubicuitina ligasa E3', 'Proteasa del poro 20S'],
      ans: 2,
      exp: 'El genoma codifica cientos de ligasas E3 distintas (como las familias RING-finger y HECT) que reconocen de forma selectiva señales de degradación (degrones) en proteínas destinadas al proteasoma.',
      skill: 'Degradación Proteica Intracelular',
      topic: 'Biología Celular Molecular',
      sub: 'Ubicuitina Ligasas E3'
    },
    {
      q: 'En la genética de poblaciones no neutral, ¿qué ecuación de selección describe el equilibrio mutación-selección para un alelo letal recesivo en una población panmíctica (donde la frecuencia génica q = √(μ/s))?',
      opts: ['Ecuación de Hardy-Weinberg neutral', 'Equilibrio de mutación-selección de Haldane', 'Ecuación de coalescencia de Kingman', 'Deriva neutral de Kimura'],
      ans: 1,
      exp: 'J.B.S. Haldane demostró que la tasa a la que surgen nuevos alelos deletéreos por mutación espontánea (μ) se equilibra exactamente con la tasa a la que la selección natural los elimina por mortalidad de homocigotos recesivos (s·q²).',
      skill: 'Genética Teórica de Poblaciones',
      topic: 'Genética Evolutiva',
      sub: 'Equilibrio Mutación-Selección de Haldane'
    },
    {
      q: 'En la neurobiología del desarrollo cerebral, ¿qué células madre radiales multipotentes bipolares sirven a la vez como progenitores neuronales y como andamiaje estructural guía para la migración radial de neuronas hacia la corteza cerebral?',
      opts: ['Microglía fagocítica', 'Glía radial', 'Células de Purkinje', 'Astrocitos protoplasmáticos maduros'],
      ans: 1,
      exp: 'Las células gliales radiales extienden prolongaciones desde la zona ventricular hasta la superficie pial externa, guiando la migración neuronal "inside-out" que estratifica las 6 capas corticales.',
      skill: 'Neurogénesis y Desarrollo Cortical',
      topic: 'Neurobiología del Desarrollo',
      sub: 'Glía Radial y Migración Neuronal'
    },
    {
      q: 'En el metabolismo de nucleótidos de purina, ¿qué enzima alostérica limitante cataliza el paso comprometido inicial sintetizando 5-fosforribosilamina a partir de PRPP y glutamina?',
      opts: ['Glutamina-PRPP amidotransferasa (GPAT)', 'Xantina oxidasa', 'Adenilato ciclasa', 'Ribonucleótido reductasa'],
      ans: 0,
      exp: 'La GPAT es inhibida por retroalimentación alostérica negativa (feedback) por AMP, GMP e IMP finales, regulando la tasa de biosíntesis de novo de nucleótidos purínicos.',
      skill: 'Metabolismo de Purinas y Control Alostérico',
      topic: 'Bioquímica Metabólica Avanzada',
      sub: 'Biosíntesis de Novo de Purinas'
    },
    {
      q: 'En la virología del virus SARS-CoV-2, ¿qué proteasa transmembranal del hospedador celular (junto a la furina) procesa proteolíticamente la proteína de espícula S en el sitio S2\' para permitir la fusión de la envoltura vírica con la membrana celular?',
      opts: ['TMPRSS2 (Transmembrane Serine Protease 2)', 'Caspasa-3', 'Enteroquinasa duodenal', 'Metaloproteinasa MMP-9'],
      ans: 0,
      exp: 'TMPRSS2 corta proteolíticamente la subunidad S2 exponiendo el péptido hidrofóbico de fusión que se inserta en la membrana plasmática de la célula epitelial respiratoria.',
      skill: 'Mecanismos Moleculares de Infección Vírica',
      topic: 'Virología Molecular',
      sub: 'Entrada Celular de Coronavirus y TMPRSS2'
    },
    {
      q: 'En la teoría endosimbiótica seriada (SET) postulada por Lynn Margulis, ¿qué grupo monofilético de eubacterias Gram negativas es el ancestro bacteriano directo de las mitocondrias eucariotas?',
      opts: ['Cianobacterias oxigénicas', 'Alfaproteobacterias (orden Rickettsiales)', 'Arqueas metanogénicas', 'Espiroquetas'],
      ans: 1,
      exp: 'Los análisis genómicos y filogenéticos comparados de ADN ribosómico 16S y proteínas respiratorias confirman que las mitocondrias derivaron de un endosimbionte alfa-proteobacteriano afín a las rickettsias.',
      skill: 'Origen de la Célula Eucariota y Endosimbiosis',
      topic: 'Evolución Celular',
      sub: 'Endosimbiosis y Alfaproteobacterias'
    },
    {
      q: 'En ecología de comunidades y biodiversidad, ¿qué hipótesis formulada por Joseph Connell postula que la riqueza de especies en un ecosistema (como arrecifes de coral o bosques tropicales) se maximiza cuando las perturbaciones no son ni demasiado raras ni demasiado frecuentes?',
      opts: ['Hipótesis de la Perturbación Intermedia (IDH)', 'Teoría del forrajeo óptimo', 'Principio de exclusión competitiva', 'Regla biogeográfica de Rapoport'],
      ans: 0,
      exp: 'Perturbaciones raras permiten que los competidores dominantes monopolicen los recursos eliminando otras especies; perturbaciones muy frecuentes exterminan especies lentas. A niveles intermedios coexisten pioneras y competidoras tardías.',
      skill: 'Mantenimiento de la Biodiversidad en Comunidades',
      topic: 'Ecología de Comunidades',
      sub: 'Hipótesis de la Perturbación Intermedia'
    },
    {
      q: 'En la genética molecular del ARN no codificante, ¿qué complejo de silenciamiento inducido por ARN (RISC) incorpora microARN (miARN) maduros monocatenarios para guiar la degradación o represión traduccional de ARNm diana?',
      opts: ['Complejo proteico Argonaute (AGO)', 'Complejo MCM helicasa', 'Complejo Ku70/Ku80', 'Factor transcripcional TFIID'],
      ans: 0,
      exp: 'Las endonucleasas Argonaute (principalmente AGO2) cargan el miARN de ~22 nucleótidos reconociendo secuencias semilla complementarias en el extremo 3\'-UTR del ARNm mensajero.',
      skill: 'Interferencia por ARN y Regulación Postranscripcional',
      topic: 'Epigenética y ARN no Codificante',
      sub: 'Proteínas Argonaute y Complejo RISC'
    },
    {
      q: 'En la fisiología vascular del endotelio, ¿qué gas difusible sintetizado a partir de L-arginina por la enzima óxido nítrico sintasa endotelial (eNOS) activa la guanilato ciclasa soluble del músculo liso vascular induciendo vasodilatación?',
      opts: ['Monóxido de carbono (CO)', 'Óxido nítrico (NO)', 'Sulfuro de hidrógeno (H₂S)', 'Dióxido de azufre'],
      ans: 1,
      exp: 'El óxido nítrico (Premio Nobel Furchgott, Ignarro y Murad 1998) estimula la síntesis de GMP cíclico (GMPc) activando la quinasa PKG que desfosforila la miosina induciendo relajación vascular.',
      skill: 'Fisiología Cardiovascular y Señalización por Gases',
      topic: 'Fisiología Endotelial',
      sub: 'Óxido Nítrico y Vasodilatación'
    },
    {
      q: 'En la teoría neutralista de la evolución molecular postulada por Motoo Kimura en 1968, ¿cuál es la predicción matemática fundamental sobre la tasa de fijación evolutiva de mutaciones estrictamente neutras (k)?',
      opts: [
        'k es proporcional al tamaño efectivo poblacional N_e',
        'La tasa de sustitución evolutiva por sitio es exactamente igual a la tasa de mutación neutra por generación (k = v_0), independiente del tamaño poblacional N',
        'k siempre es exponencialmente creciente',
        'k depende estrictamente del coeficiente de selección s'
      ],
      ans: 1,
      exp: 'Kimura demostró que la tasa de sustitución neutra k = 2N v_0 × (1/2N) = v_0. El efecto del tamaño de población se cancela exactamente, fundamentando la hipótesis del reloj molecular constante.',
      skill: 'Teoría Neutralista de la Evolución Molecular',
      topic: 'Evolución Molecular Teórica',
      sub: 'Tasa de Sustitución Neutra de Kimura'
    },
    {
      q: 'En la electrofisiología cardíaca celular, ¿a qué corriente iónica despolarizante rápida de entrada a través de canales activados por hiperpolarización y nucleótidos cíclicos (HCN) se debe el automatismo del marcapasos del nodo sinoauricular?',
      opts: ['Corriente rápida de sodio I_Na', 'Corriente de marcapasos Funny (I_f)', 'Corriente de rectificación tardía I_Kr', 'Corriente de calcio tipo L'],
      ans: 1,
      exp: 'La corriente I_f transporta sodio y potasio activándose a potenciales de membrana diastólicos negativos (-40 a -65 mV), despolarizando lentamente la célula hasta el umbral del potencial de acción.',
      skill: 'Electrofisiología Celular Cardíaca',
      topic: 'Fisiología del Corazón',
      sub: 'Corriente If y Automatismo Cardíaco'
    },
    {
      q: 'En la biofísica de la polimerización del citoesqueleto, ¿a qué fenómeno dinámico se refiere el intercambio continuo de subunidades de actina G (o tubulina) donde la polimerización neta en el extremo plus (+) es compensada exactamente por la despolimerización neta en el extremo minus (-)?',
      opts: ['Inestabilidad dinámica catastrófica pura', 'Molino de rodadura (Treadmilling)', 'Catástrofe de microtúbulos', 'Gelificación estática'],
      ans: 1,
      exp: 'El treadmilling ocurre cuando la concentración de monómeros libres se sitúa entre las concentraciones críticas de ambos extremos polares (C_c(+) < C < C_c(-)), impulsado por la hidrólisis acoplada de ATP/GTP.',
      skill: 'Dinámica del Citoesqueleto Celular',
      topic: 'Biología Celular Biofísica',
      sub: 'Treadmilling de Actina y Microtúbulos'
    }
  ];

  uniRaw.forEach((item, idx) => {
    items.push({
      id: `bio-uni-${idx + 1}`,
      sectionId: 7,
      number: 80 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Desafiante',
      educationalLevel: 'Universitario',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  writeSubjectFile('biologia.ts', 'QUESTIONS_BIOLOGIA', 'Biología', items);
}

makeBiologia();
