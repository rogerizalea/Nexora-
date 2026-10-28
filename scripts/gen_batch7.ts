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
// 9. ESTUDIOS SOCIALES E HISTORIA (100 preguntas)
// =========================================================================
function makeSociales() {
  const items: any[] = [];

  // 20 BÁSICO
  const basRaw = [
    {
      q: '¿Cuál es el océano más grande y profundo de la Tierra?',
      opts: ['Océano Atlántico', 'Océano Pacífico', 'Océano Índico', 'Océano Ártico'],
      ans: 1,
      exp: 'El Océano Pacífico cubre más de 165 millones de km² y alberga la Fosa de las Marianas (aprox. 11,000 m de profundidad).',
      skill: 'Geografía Física Mundial',
      topic: 'Océanos y Continentes',
      sub: 'El Océano Pacífico'
    },
    {
      q: '¿En qué año se produjo el primer viaje de Cristóbal Colón y su llegada al continente americano?',
      opts: ['1453', '1492', '1500', '1521'],
      ans: 1,
      exp: 'El 12 de octubre de 1492, la expedición financiada por los Reyes Católicos avistó tierra en la isla Guanahaní (Bahamas).',
      skill: 'Historia de América',
      topic: 'Descubrimiento y Conquista',
      sub: 'Llegada de Colón a América'
    },
    {
      q: '¿Cuál es el documento legal fundamental que establece los derechos y deberes supremos de los ciudadanos y la organización del Estado en una república democrática?',
      opts: ['El Código Civil', 'La Constitución Política', 'El reglamento municipal', 'El Código Tributario'],
      ans: 1,
      exp: 'La Constitución es la Carta Magna y norma jurídica suprema de un Estado de derecho a la cual están subordinadas todas las demás leyes.',
      skill: 'Educación Cívica y Derechos',
      topic: 'Ciudadanía',
      sub: 'La Constitución'
    },
    {
      q: '¿Qué antigua civilización fluvial se desarrolló a orillas del río Nilo y construyó monumentales pirámides de piedra?',
      opts: ['Mesopotamia', 'El Antiguo Egipto', 'La Antigua Grecia', 'El Imperio Romano'],
      ans: 1,
      exp: 'La civilización del Antiguo Egipto floreció gracias a las crecidas periódicas del Nilo, erigiendo las pirámides de Guiza y templos faraónicos.',
      skill: 'Civilizaciones de la Antigüedad',
      topic: 'Historia Universal',
      sub: 'Antiguo Egipto'
    },
    {
      q: '¿Cuál es la línea imaginaria horizontal que divide a la Tierra en Hemisferio Norte y Hemisferio Sur a latitud 0°?',
      opts: ['El Meridiano de Greenwich', 'La línea ecuatorial (Ecuador terrestre)', 'El Trópico de Cáncer', 'El Círculo Polar Ártico'],
      ans: 1,
      exp: 'El Ecuador terrestre es el paralelo 0° que divide al planeta en dos hemisferios iguales, norte y sur.',
      skill: 'Cartografía y Coordenadas Geográficas',
      topic: 'Geografía',
      sub: 'Paralelo del Ecuador'
    },
    {
      q: '¿Cómo se llama la cordillera montañosa continua más larga del mundo, que recorre la costa occidental de América del Sur?',
      opts: ['Los Himalayas', 'La Cordillera de los Andes', 'Las Montañas Rocosas', 'Los Alpes'],
      ans: 1,
      exp: 'Los Andes recorren más de 7,000 km a lo largo de siete países sudamericanos (Venezuela, Colombia, Ecuador, Perú, Bolivia, Chile y Argentina).',
      skill: 'Geografía Sudamericana',
      topic: 'Relieve Terrestre',
      sub: 'Cordillera de los Andes'
    },
    {
      q: '¿Quién es conocido en América Latina como el "Libertador" por liderar la independencia de Venezuela, Colombia, Ecuador, Perú y Bolivia?',
      opts: ['José de San Martín', 'Simón Bolívar', 'Bernardo O\'Higgins', 'Miguel Hidalgo'],
      ans: 1,
      exp: 'Simón Bolívar encabezó las campañas militares y proyectos republicanos que lograron la emancipación de cinco naciones sudamericanas.',
      skill: 'Procesos de Independencia Americana',
      topic: 'Historia de América',
      sub: 'Simón Bolívar'
    },
    {
      q: '¿Cuál es el río más caudaloso y largo del planeta Tierra, que atraviesa la mayor selva tropical sudamericana?',
      opts: ['Río Nilo', 'Río Amazonas', 'Río Misisipi', 'Río Yangtsé'],
      ans: 1,
      exp: 'El río Amazonas drena la mayor cuenca hidrográfica del mundo, transportando aproximadamente una quinta parte del caudal fluvial dulce global.',
      skill: 'Hidrografía Continental',
      topic: 'Geografía de América',
      sub: 'Río Amazonas'
    },
    {
      q: '¿Qué civilización mesoamericana prehispánica habitó la península de Yucatán y desarrolló una escritura jeroglífica avanzada y calendarios astronómicos de gran precisión?',
      opts: ['Los Incas', 'Los Mayas', 'Los Aztecas (Mexicas)', 'Los Chibchas'],
      ans: 1,
      exp: 'Los mayas crearon notables centros urbanos como Tikal, Palenque y Chichén Itzá, con calendarios astronómicos y el concepto del cero vigesimal.',
      skill: 'Culturas Precolombinas',
      topic: 'Historia Prehispánica',
      sub: 'Civilización Maya'
    },
    {
      q: '¿En qué poderes públicos se divide tradicionalmente el gobierno republicano democrático según la teoría de Montesquieu?',
      opts: [
        'Poder militar, religioso y civil',
        'Poder Ejecutivo, Poder Legislativo y Poder Judicial',
        'Poder monárquico, feudal y clerical',
        'Poder comercial y bancario'
      ],
      ans: 1,
      exp: 'La doctrina clásica de división de poderes (Montesquieu) separa al Legislativo (hacer leyes), Ejecutivo (administrar el Estado) y Judicial (administrar justicia).',
      skill: 'Estructura del Estado Democrático',
      topic: 'Teoría del Estado',
      sub: 'División de Poderes'
    },
    {
      q: '¿Cuál es la capital oficial de Francia, célebre por albergar la Torre Eiffel y el Museo del Louvre?',
      opts: ['Londres', 'París', 'Madrid', 'Roma'],
      ans: 1,
      exp: 'París es la capital y principal centro político, económico y cultural de la República Francesa.',
      skill: 'Geografía Política Mundial',
      topic: 'Capitales del Mundo',
      sub: 'Capital de Francia'
    },
    {
      q: '¿Qué conflicto bélico mundial se desarrolló entre los años 1939 y 1945, involucrando a los Aliados y las potencias del Eje?',
      opts: ['La Primera Guerra Mundial', 'La Segunda Guerra Mundial', 'La Guerra Fría', 'La Guerra de los Cien Años'],
      ans: 1,
      exp: 'La Segunda Guerra Mundial estalló con la invasión alemana a Polonia en 1939 y concluyó en 1945 con la rendición incondicional de Alemania y Japón.',
      skill: 'Historia del Siglo XX',
      topic: 'Conflictos Mundiales',
      sub: 'Segunda Guerra Mundial'
    },
    {
      q: '¿Cómo se denomina la forma de gobierno en la que el poder soberano reside en el pueblo, ejercido mediante el voto y elecciones periódicas?',
      opts: ['Monarquía absoluta', 'Democracia', 'Oligarquía', 'Tiranía teocrática'],
      ans: 1,
      exp: 'La democracia (del griego demos: pueblo y kratos: poder) es el sistema donde la soberanía popular se canaliza mediante elecciones libres y pluralistas.',
      skill: 'Sistemas Políticos',
      topic: 'Cívica y Ciudadanía',
      sub: 'La Democracia'
    },
    {
      q: '¿Qué gran civilización andina construyó la ciudadela de Machu Picchu y gobernó el Tahuantinsuyo desde su capital en Cusco?',
      opts: ['Imperio Azteca', 'Imperio Inca', 'Cultura Olmeca', 'Cultura Guaraní'],
      ans: 1,
      exp: 'El Imperio Incaico (Tahuantinsuyo) integró un extenso territorio andino unido por el sistema vial del Qhapaq Ñan y arquitectura monumental de piedra.',
      skill: 'Imperio Incaico',
      topic: 'Historia Andina Prehispánica',
      sub: 'Tahuantinsuyo y Machu Picchu'
    },
    {
      q: '¿Cuál es el meridiano de referencia internacional establecido a longitud 0° para medir el tiempo universal coordinado y los husos horarios?',
      opts: ['Meridiano de París', 'Meridiano de Greenwich', 'Meridiano de Washington', 'Línea de cambio de fecha'],
      ans: 1,
      exp: 'El Meridiano de Greenwich atraviesa el Real Observatorio de Greenwich en Londres y fija el meridiano cero mundial.',
      skill: 'Cartografía y Husos Horarios',
      topic: 'Geografía Astronómica',
      sub: 'Meridiano de Greenwich'
    },
    {
      q: '¿Qué acontecimiento histórico iniciado en 1789 en Francia proclamó la Declaración de los Derechos del Hombre y del Ciudadano con el lema "Libertad, Igualdad, Fraternidad"?',
      opts: ['La Revolución Industrial', 'La Revolución Francesa', 'La Comuna de París', 'La Restauración borbónica'],
      ans: 1,
      exp: 'La Revolución Francesa derrocó el Antiguo Régimen absolutista y sentó las bases de los derechos universales ciudadanos y el constitucionalismo moderno.',
      skill: 'Historia Moderna Universal',
      topic: 'Revoluciones Burguesas',
      sub: 'Revolución Francesa de 1789'
    },
    {
      q: '¿Cuál es el desierto cálido más extenso del planeta, ubicado en el norte del continente africano?',
      opts: ['Desierto de Atacama', 'Desierto del Sahara', 'Desierto de Gobi', 'Desierto de Kalahari'],
      ans: 1,
      exp: 'El desierto del Sahara abarca más de 9 millones de km² atravesando once países del norte de África con condiciones de extrema aridez.',
      skill: 'Biomas y Geografía Mundial',
      topic: 'Geografía de África',
      sub: 'Desierto del Sahara'
    },
    {
      q: '¿Qué organismo internacional fundado en 1945 tras la Segunda Guerra Mundial tiene como misión primordial preservar la paz y la seguridad internacional?',
      opts: ['La Liga de las Naciones', 'La Organización de las Naciones Unidas (ONU)', 'La OTAN', 'El FMI'],
      ans: 1,
      exp: 'La ONU fue creada en la Conferencia de San Francisco por 51 Estados fundadores para prevenir guerras futuras y fomentar la cooperación mundial.',
      skill: 'Organismos Internacionales',
      topic: 'Geopolítica y Paz Mundial',
      sub: 'La ONU'
    },
    {
      q: '¿Cuál es el continente más poblado del planeta, albergando a más del 60% de la población humana mundial?',
      opts: ['África', 'Asia', 'América', 'Europa'],
      ans: 1,
      exp: 'Asia cuenta con más de 4,700 millones de habitantes, albergando a los dos países más densamente poblados de la Tierra (India y China).',
      skill: 'Demografía y Geografía Humana',
      topic: 'Población Mundial',
      sub: 'Continente Asiático'
    },
    {
      q: '¿Qué derecho humano fundamental garantiza que toda persona pueda expresar libremente sus opiniones e ideas sin censura previa?',
      opts: ['Derecho de propiedad', 'Libertad de expresión y pensamiento', 'Derecho al voto censitario', 'Libertad de comercio aduanero'],
      ans: 1,
      exp: 'La libertad de expresión está consagrada en el artículo 19 de la Declaración Universal de los Derechos Humanos como pilar de toda sociedad abierta.',
      skill: 'Derechos Humanos Universales',
      topic: 'Derechos Fundamentales',
      sub: 'Libertad de Expresión'
    }
  ];

  basRaw.forEach((item, idx) => {
    items.push({
      id: `soc-bas-${idx + 1}`,
      sectionId: 9,
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

  // 20 INTERMEDIO
  const intRaw = [
    {
      q: '¿Qué gran transformación económica, tecnológica y social se inició en Gran Bretaña a mediados del siglo XVIII con la introducción de la máquina de vapor y el telar mecánico?',
      opts: ['La Revolución Neolítica', 'La Revolución Industrial', 'La Revolución Verde', 'La Revolución Digital'],
      ans: 1,
      exp: 'La Primera Revolución Industrial sustituyó el trabajo artesanal por la producción fabril masiva impulsada por carbón y vapor, dando origen al proletariado urbano.',
      skill: 'Revolución Industrial y Economía',
      topic: 'Historia Contemporánea',
      sub: 'Primera Revolución Industrial'
    },
    {
      q: '¿Cuál fue la principal causa económica de la caída de la Bolsa de Valores de Nueva York (Crack de 1929) que desencadenó la Gran Depresión?',
      opts: [
        'La escasez absoluta de cosechas de trigo en Europa',
        'La especulación bursátil desenfrenada con créditos fáciles y la sobreproducción industrial no absorbida por el mercado',
        'El alza violenta de los precios del petróleo en 1973',
        'La invasión de Manchuria'
      ],
      ans: 1,
      exp: 'La sobreproducción fabril unida a una burbuja especulativa inflada mediante compras apalancadas a crédito colapsó el 24 de octubre de 1929 ("Jueves Negro").',
      skill: 'Crisis Económicas del Siglo XX',
      topic: 'Historia Económica',
      sub: 'El Crack del 29 y la Gran Depresión'
    },
    {
      q: '¿Qué tratado de paz firmado en 1919 puso fin oficialmente a la Primera Guerra Mundial e impuso severas sanciones territoriales y reparaciones de guerra a Alemania?',
      opts: ['El Tratado de Utrecht', 'El Tratado de Versalles', 'El Pacto de Varsovia', 'El Tratado de Tordesillas'],
      ans: 1,
      exp: 'El Tratado de Versalles responsabilizó moral y económicamente a Alemania (artículo 231), generando un clima de revanchismo que facilitó el ascenso del nazismo.',
      skill: 'Periodo de Entreguerras',
      topic: 'Historia Universal',
      sub: 'Tratado de Versalles'
    },
    {
      q: '¿Cómo se denomina la etapa de tensión geopolítica, ideológica y militar bipolar (1947-1991) entre el bloque capitalista liderado por EE.UU. y el bloque socialista liderado por la URSS?',
      opts: ['La Paz Armada', 'La Guerra Fría', 'La Santa Alianza', 'La Guerra de Sucesión'],
      ans: 1,
      exp: 'La Guerra Fría se caracterizó por la carrera armamentística nuclear, propaganda ideológica y conflictos indirectos subsidiarios (Corea, Vietnam) sin choque bélico directo entre superpotencias.',
      skill: 'Guerra Fría y Mundo Bipolar',
      topic: 'Historia Contemporánea',
      sub: 'La Guerra Fría'
    },
    {
      q: 'En geografía demográfica, ¿cómo se calcula la densidad de población de una región o país?',
      opts: [
        'Multiplicando la tasa de natalidad por la de mortalidad',
        'Dividiendo el número total de habitantes entre la superficie territorial en kilómetros cuadrados (Hab / km²)',
        'Sumando el PIB per cápita a la superficie agrícola',
        'Dividiendo la población urbana entre la rural'
      ],
      ans: 1,
      exp: 'Densidad demográfica = Población total / Superficie territorial (km²), expresando la concentración humana promedio sobre el espacio.',
      skill: 'Demografía y Geografía de la Población',
      topic: 'Geografía Humana',
      sub: 'Densidad Demográfica'
    },
    {
      q: '¿Qué civilización del Mediterráneo clásico legó a la humanidad el desarrollo de la filosofía racional (Sócrates, Platón, Aristóteles), el teatro trágico y las instituciones democráticas atenienses?',
      opts: ['Mesopotamia', 'La Antigua Grecia', 'Los Fenicios', 'El Imperio Persa'],
      ans: 1,
      exp: 'La polis griega, especialmente Atenas en el siglo de Pericles (V a.C.), constituyó la cuna del pensamiento filosófico, artes dramáticas y democracia participativa.',
      skill: 'Mundo Clásico Grecorromano',
      topic: 'Historia Antigua',
      sub: 'Atenas y la Democracia Griega'
    },
    {
      q: '¿Cuál fue la causa geopolítica inmediata que detonó el estallido de la Primera Guerra Mundial en junio de 1914?',
      opts: [
        'La invasión de Polonia por tanques alemanes',
        'El asesinato del archiduque Francisco Fernando de Austria en Sarajevo a manos de un nacionalista serbio',
        'El bombardeo de Pearl Harbor',
        'La Revolución Rusa bolchevique'
      ],
      ans: 1,
      exp: 'El magnicidio de Sarajevo activó la compleja red de alianzas secretas y movilizaciones militares entre la Triple Entente y la Triple Alianza en semanas.',
      skill: 'Primera Guerra Mundial y Diplomacia',
      topic: 'Historia del Siglo XX',
      sub: 'Atentado de Sarajevo'
    },
    {
      q: '¿Qué movimiento cultural, filosófico y político europeo del siglo XVIII (el "Siglo de las Luces") promovió el uso de la razón, la ciencia y la libertad frente al dogma y el absolutismo?',
      opts: ['El Romanticismo', 'La Ilustración', 'El Barroco', 'La Escolástica medieval'],
      ans: 1,
      exp: 'Pensadores como Voltaire, Rousseau, Montesquieu y Diderot (la Enciclopedia) postularon la soberanía popular, derechos naturales y tolerancia religiosa.',
      skill: 'Pensamiento Moderno e Ilustración',
      topic: 'Historia de las Ideas',
      sub: 'La Ilustración'
    },
    {
      q: '¿Qué sistema económico y social dominó la Europa medieval, basado en relaciones de vasallaje, feudos rurales concedidos por señores nobles y siervos ligados a la tierra?',
      opts: ['Mercantilismo', 'Feudalismo', 'Capitalismo industrial', 'Esclavismo clásico'],
      ans: 1,
      exp: 'El feudalismo descentralizó el poder político militar en señores feudales propietarios de castillos y feudos autosuficientes donde trabajaban siervos de la gleba.',
      skill: 'Edad Media y Sistemas Feudales',
      topic: 'Historia Medieval',
      sub: 'El Feudalismo'
    },
    {
      q: '¿Cuál es la diferencia fundamental entre el crecimiento vegetativo o natural de una población y el saldo migratorio neto?',
      opts: [
        'El crecimiento vegetativo es la diferencia entre nacimientos y defunciones; el saldo migratorio es la diferencia entre inmigrantes recibidos y emigrantes salientes.',
        'El crecimiento vegetativo solo mide la fertilidad de los suelos.',
        'El saldo migratorio no incluye a los turistas.',
        'Son conceptos idénticos en estadística censal.'
      ],
      ans: 0,
      exp: 'Crecimiento natural = Nacimientos - Muertes. Saldo migratorio = Inmigrantes - Emigrantes. Crecimiento demográfico total = Crecimiento natural + Saldo migratorio.',
      skill: 'Indicadores Demográficos',
      topic: 'Demografía',
      sub: 'Crecimiento Natural y Migraciones'
    },
    {
      q: '¿Qué líder pacifista indio encabezó el movimiento de resistencia no violenta (Satyagraha) y la Marcha de la Sal que condujeron a la independencia de la India del Imperio Británico en 1947?',
      opts: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Subhas Chandra Bose', 'Rabindranath Tagore'],
      ans: 1,
      exp: 'Mohandas K. Gandhi promovió la desobediencia civil no violenta, huelgas de hambre y boicot a productos británicos, desmantelando el dominio colonial del Raj británico.',
      skill: 'Procesos de Descolonización',
      topic: 'Historia de Asia',
      sub: 'Mahatma Gandhi y la Independencia de la India'
    },
    {
      q: '¿Qué tratado firmado en 1494 entre los Reyes Católicos de España y el rey Juan II de Portugal dividió las zonas de navegación y conquista del Nuevo Mundo mediante una línea trazada a 370 leguas al oeste de Cabo Verde?',
      opts: ['Tratado de Utrecht', 'Tratado de Tordesillas', 'Tratado de Alcaçovas', 'Tratado de Westfalia'],
      ans: 1,
      exp: 'El Tratado de Tordesillas legitimó el reparto colonial atlántico, permitiendo a Portugal colonizar la costa oriental de Sudamérica (Brasil).',
      skill: 'Expansión Ultramarina Europea',
      topic: 'Historia de la Colonización',
      sub: 'Tratado de Tordesillas'
    },
    {
      q: '¿Cuál es la función del Banco Central en la economía de un país soberano?',
      opts: [
        'Cobrar los impuestos a los comerciantes minoristas directamente',
        'Emitir la moneda oficial, regular la oferta monetaria y controlar la tasa de interés para preservar la estabilidad de precios (control de inflación)',
        'Fijar los precios de todos los productos en los supermercados',
        'Otorgar préstamos de consumo a ciudadanos individuales en ventanilla'
      ],
      ans: 1,
      exp: 'El Banco Central es la autoridad monetaria que implementa la política monetaria, custodia reservas internacionales y actúa como prestamista de última instancia del sistema bancario.',
      skill: 'Economía y Política Monetaria',
      topic: 'Economía Básica',
      sub: 'El Banco Central'
    },
    {
      q: '¿Qué civilización del Cercano Oriente antiguo compiló en una estela de diorita negra el código de leyes escritas más famoso de la antigüedad regido por la Ley del Talión ("Ojo por ojo, diente por diente")?',
      opts: ['Los Persas', 'El Código de Hammurabi (Babilonia)', 'El Código de Justiniano', 'Las Leyes de Solón'],
      ans: 1,
      exp: 'El rey Hammurabi de Babilonia (hacia 1750 a.C.) mandó esculpir 282 leyes que regulaban la propiedad, comercio, salarios y castigos penales proporcionados.',
      skill: 'Primeras Codificaciones Jurídicas',
      topic: 'Historia Antigua',
      sub: 'Código de Hammurabi'
    },
    {
      q: '¿Cómo se denomina la corriente de pensamiento económico del siglo XVI y XVII que sostenía que la riqueza y poder de un reino dependían de la acumulación de metales preciosos (oro y plata) mediante una balanza comercial favorable?',
      opts: ['Fisiocracia', 'Mercantilismo', 'Neoliberalismo', 'Marxismo'],
      ans: 1,
      exp: 'El mercantilismo promovió el proteccionismo arancelario, monopolio comercial colonial y subsidios manufactureros para maximizar las reservas metálicas de la corona.',
      skill: 'Doctrinas Económicas Históricas',
      topic: 'Historia Económica',
      sub: 'El Mercantilismo'
    },
    {
      q: '¿Qué acontecimiento sociopolítico derrocó al régimen del Apartheid en Sudáfrica en 1994, consagrando las primeras elecciones multirraciales democráticas y la presidencia de Nelson Mandela?',
      opts: ['La Guerra de los Boers', 'El Fin del Apartheid y Reconciliación Nacional', 'La Conferencia de Bandung', 'La rebelión Mau Mau'],
      ans: 1,
      exp: 'Nelson Mandela lideró tras 27 años de prisión una transición pacífica hacia una democracia constitucional sin segregación racial ("Nación Arcoíris").',
      skill: 'Derechos Civiles y Descolonización Africana',
      topic: 'Historia Contemporánea',
      sub: 'Fin del Apartheid y Nelson Mandela'
    },
    {
      q: '¿Qué cordillera asiática es la más alta del planeta Tierra y contiene el monte Everest (8,848 m sobre el nivel del mar)?',
      opts: ['Los Andes', 'La Cordillera del Himalaya', 'Los Urales', 'El Cáucaso'],
      ans: 1,
      exp: 'El Himalaya se formó por la colisión tectónica activa entre la placa Índica y la placa Euroasiática, albergando los 14 "ochomiles" del planeta.',
      skill: 'Orografía Mundial y Tectónica',
      topic: 'Geografía Física de Asia',
      sub: 'Himalaya y Monte Everest'
    },
    {
      q: '¿Qué gran peste bacteriana transmitida por pulgas de ratas asoló a Europa entre 1347 y 1353, aniquilando a cerca de un tercio de la población continental?',
      opts: ['La gripe española', 'La Peste Negra (peste bubónica por Yersinia pestis)', 'El cólera morbo', 'La viruela'],
      ans: 1,
      exp: 'La Peste Negra procedente de Asia a través de las rutas comerciales de Crimea desató una catástrofe demográfica, escasez de siervos feudales y colapso agrario medieval.',
      skill: 'Epidemias y Demografía Histórica',
      topic: 'Historia Medieval',
      sub: 'La Peste Negra de 1348'
    },
    {
      q: '¿Qué mecanismo constitucional y democrático permite a los ciudadanos de un país aprobar o rechazar directamente mediante sufragio una ley, reforma constitucional o tratado fundamental?',
      opts: ['Interpelación judicial', 'Referéndum o plebiscito popular', 'Decreto ejecutivo de necesidad y urgencia', 'Moción de censura parlamentaria'],
      ans: 1,
      exp: 'El referéndum es un instrumento de democracia directa participativa donde el cuerpo electoral ratifica o veta un texto legal o decisión política trascendente.',
      skill: 'Democracia Directa y Participación Ciudadana',
      topic: 'Derecho Constitucional',
      sub: 'El Referéndum'
    },
    {
      q: '¿Cuál es el principal bioma terrestre caracterizado por bosques de coníferas perennifolias (pinos, abetos) en altas latitudes subárticas de Rusia, Canadá y Escandinavia?',
      opts: ['La selva tropical umbrófila', 'La taiga (o bosque boreal)', 'La sabana arbustiva', 'El maquis mediterráneo'],
      ans: 1,
      exp: 'La taiga es el bioma boscoso más extenso del hemisferio norte, adaptado a inviernos glaciares prolongados y suelos ácidos podzólicos.',
      skill: 'Biomas Terrestres y Climatología',
      topic: 'Geografía Biogeográfica',
      sub: 'La Taiga Boreal'
    }
  ];

  intRaw.forEach((item, idx) => {
    items.push({
      id: `soc-int-${idx + 1}`,
      sectionId: 9,
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

  // 20 BACHILLERATO
  const bacRaw = [
    {
      q: '¿Qué principio de derecho público internacional consagrado por la Paz de Westfalia (1648) estableció la igualdad jurídica entre Estados soberanos y la no injerencia en asuntos internos?',
      opts: ['El principio de soberanía estatal territorial', 'La doctrina Monroe', 'El derecho de intervención humanitaria', 'La Santa Alianza'],
      ans: 0,
      exp: 'Los tratados de Münster y Osnabrück de Westfalia acabaron con la Guerra de los Treinta Años y consagraron el sistema moderno de Estados soberanos libres de tutela papal o imperial.',
      skill: 'Relaciones Internacionales y Paz de Westfalia',
      topic: 'Historia Moderna',
      sub: 'Sistema Westfaliano de Soberanía'
    },
    {
      q: 'En teoría macroeconómica, ¿qué índice ponderado mide la variación mensual o anual en el nivel general de precios de una canasta representativa de bienes y servicios de consumo habitual familiar?',
      opts: ['El Producto Interno Bruto (PIB)', 'El Índice de Precios al Consumidor (IPC)', 'El Coeficiente de Gini', 'La tasa de desempleo abierto'],
      ans: 1,
      exp: 'El IPC es el indicador estadístico fundamental para medir la inflación y ajustar salarios, pensiones y contratos comerciales según la pérdida de poder adquisitivo.',
      skill: 'Indicadores Macroeconómicos e Inflación',
      topic: 'Economía',
      sub: 'Índice de Precios al Consumidor (IPC)'
    },
    {
      q: '¿Qué doctrina geopolítica proclamada por el presidente estadounidense James Monroe en 1823 sintetizó la advertencia a las potencias europeas con el lema "América para los americanos"?',
      opts: ['El Destino Manifiesto', 'La Doctrina Monroe', 'La Política del Buen Vecino', 'El Plan Marshall'],
      ans: 1,
      exp: 'La Doctrina Monroe declaró que cualquier intervención militar de potencias europeas en el hemisferio occidental sería considerada una amenaza directa para la seguridad de Estados Unidos.',
      skill: 'Historia Diplomática de América',
      topic: 'Relaciones Interamericanas',
      sub: 'Doctrina Monroe'
    },
    {
      q: '¿Qué conferencia imperialista europea celebrada entre 1884 y 1885 bajo los auspicios del canciller Otto von Bismarck fijó las reglas para el reparto colonial territorial de África?',
      opts: ['Congreso de Viena', 'Conferencia de Berlín', 'Tratado de Tordesillas', 'Conferencia de Yalta'],
      ans: 1,
      exp: 'La Conferencia de Berlín instituyó el principio de ocupación efectiva de las costas para reclamar la soberanía del interior africano, acelerando el colonialismo imperialista.',
      skill: 'Imperialismo y Reparto Colonial de África',
      topic: 'Historia Contemporánea',
      sub: 'Conferencia de Berlín de 1884'
    },
    {
      q: 'En sociología y economía política, ¿cómo se interpreta el Coeficiente de Gini cuando su valor es cercano a 0 frente a cuando es cercano a 1?',
      opts: [
        '0 indica una distribución de ingresos perfectamente equitativa; 1 representa la máxima desigualdad posible (una sola persona concentra todos los ingresos)',
        '0 indica pobreza absoluta y 1 riqueza extrema',
        '0 representa desempleo total y 1 empleo pleno',
        'No mide la distribución de ingresos'
      ],
      ans: 0,
      exp: 'El Coeficiente de Gini se deriva del área entre la Curva de Lorenz de distribución de ingresos y la diagonal de equidistribución perfecta.',
      skill: 'Desigualdad Económica y Coeficiente de Gini',
      topic: 'Sociología Económica',
      sub: 'Curva de Lorenz y Coeficiente de Gini'
    },
    {
      q: '¿Qué modelo económico implantado en el Reino Unido (Thatcher) y EE.UU. (Reagan) en la década de 1980 promovió la desregulación financiera, privatizaciones de empresas públicas y reducción del gasto social?',
      opts: ['Keynesianismo de bienestar', 'Neoliberalismo económico', 'Socialismo corporativista', 'Mercantilismo estatal'],
      ans: 1,
      exp: 'El neoliberalismo basado en las teorías de Milton Friedman (Escuela de Chicago) y Friedrich Hayek redujo la intervención estatal y liberalizó los flujos globales de capital.',
      skill: 'Modelos Económicos Contemporáneos',
      topic: 'Economía Política',
      sub: 'Neoliberalismo y Consenso de Washington'
    },
    {
      q: '¿Qué revolución campesina y social iniciada en 1910 en América Latina tuvo como líderes fundamentales a Emiliano Zapata y Pancho Villa bajo la consigna "Tierra y Libertad"?',
      opts: ['Revolución Cubana', 'Revolución Mexicana', 'Revolución Sandinista', 'Guerra de los Mil Días'],
      ans: 1,
      exp: 'La Revolución Mexicana derrocó la dictadura de Porfirio Díaz y promulgó la Constitución de 1917, pionera mundial en consagrar derechos sociales, laborales y reforma agraria.',
      skill: 'Revoluciones Latinoamericanas del Siglo XX',
      topic: 'Historia de América Latina',
      sub: 'Revolución Mexicana'
    },
    {
      q: 'En teoría sociológica clásica, ¿qué concepto formuló Émile Durkheim para describir el estado de desorientación, ruptura y desregulación de las normas sociales que debilita la cohesión colectiva?',
      opts: ['Alienación del trabajo', 'Anomia social', 'Acción racional con arreglo a fines', 'Hegemonía cultural'],
      ans: 1,
      exp: 'Durkheim introdujo el término "anomia" en "La división del trabajo social" y "El suicidio" para señalar la ausencia o ineficacia de normas morales colectivas reguladoras.',
      skill: 'Teoría Sociológica Clásica',
      topic: 'Sociología',
      sub: 'Anomia en Émile Durkheim'
    },
    {
      q: '¿Qué tratado internacional de 1992 transformó la Comunidad Económica Europea en la Unión Europea (UE), sentando las bases de la unión monetaria del Euro y la ciudadanía europea?',
      opts: ['Tratado de Roma', 'Tratado de Maastricht', 'Tratado de Lisboa', 'Acuerdo de Schengen'],
      ans: 1,
      exp: 'El Tratado de la Unión Europea (Tratado de Maastricht) creó la estructura de los tres pilares comunitarios y fijó los criterios de convergencia fiscal para el euro.',
      skill: 'Integración Regional y Unión Europea',
      topic: 'Geopolítica Contemporánea',
      sub: 'Tratado de Maastricht'
    },
    {
      q: '¿Qué proceso histórico de reestructuración económica (Perestroika) y apertura y transparencia política (Glásnost) impulsó Mijaíl Gorbachov a finales de los años 80, culminando en la disolución de la Unión Soviética en 1991?',
      opts: ['Los Planes Quinquenales de Stalin', 'La Perestroika y la Glásnost', 'La Nueva Política Económica (NEP)', 'La Revolución Cultural'],
      ans: 1,
      exp: 'Gorbachov intentó reformar y democratizar el sistema comunista soviético, pero las reformas desataron tensiones nacionalistas centrífugas que llevaron al colapso de la URSS.',
      skill: 'Caída del Bloque Soviético',
      topic: 'Historia Contemporánea',
      sub: 'Perestroika y Desintegración de la URSS'
    },
    {
      q: 'En geografía urbana, ¿cómo se denomina el proceso de transformación socioespacial en el que un barrio céntrico o degradado es renovado urbanísticamente atrayendo a residentes de mayor poder adquisitivo y desplazando a los habitantes originarios de bajos ingresos?',
      opts: ['Suburbialización periférica', 'Gentrificación (o aburguesamiento urbano)', 'Rururbanización', 'Conurbación metropolitana'],
      ans: 1,
      exp: 'La gentrificación (Ruth Glass, 1964) eleva los costos del suelo y alquileres en barrios históricos renovados, expulsando a la población tradicional hacia la periferia.',
      skill: 'Urbanismo y Geografía Urbana',
      topic: 'Geografía Social',
      sub: 'Gentrificación Urbana'
    },
    {
      q: '¿Cuál es la diferencia jurídica entre el Derecho Internacional Humanitario (Convenios de Ginebra) y los Derechos Humanos Universales?',
      opts: [
        'El DIH se aplica exclusivamente durante conflictos armados para proteger a heridos, prisioneros y civiles; los Derechos Humanos rigen en todo momento tanto en paz como en guerra.',
        'El DIH solo protege a los ejércitos invasores.',
        'Los Derechos Humanos solo se aplican en Europa.',
        'Son tratados idénticos sin distinción operativa.'
      ],
      ans: 0,
      exp: 'El Ius in bello (Derecho Internacional Humanitario) limita los métodos de guerra y protege a víctimas de hostilidades militares, mientras los DDHH protegen a todas las personas permanentemente.',
      skill: 'Derecho Internacional Público y Humanitario',
      topic: 'Derecho Internacional',
      sub: 'DIH y Convenios de Ginebra'
    },
    {
      q: '¿Qué historiador francés de la Escuela de los Annales revolucionó la historiografía al proponer tres niveles temporales: el tiempo corto del acontecimiento episódico, la media duración de las coyunturas socioeconómicas y la "larga duración" de las estructuras geohistóricas?',
      opts: ['Marc Bloch', 'Fernand Braudel', 'Michel Foucault', 'Jacques Le Goff'],
      ans: 1,
      exp: 'Fernand Braudel en su obra cumbre "El Mediterráneo en la época de Felipe II" articuló la larga duración (longue durée) como el ritmo pausado del medio geográfico y las mentalidades colectivas.',
      skill: 'Epistemología e Historiografía de los Annales',
      topic: 'Historiografía',
      sub: 'Fernand Braudel y la Larga Duración'
    },
    {
      q: '¿Qué crisis política y nuclear de octubre de 1962 colocó al mundo al borde de una guerra atómica total entre EE.UU. y la URSS tras el descubrimiento de rampas de misiles soviéticos en el Caribe?',
      opts: ['Crisis del Canal de Suez', 'Crisis de los Misiles en Cuba', 'Incidente del Golfo de Tonkín', 'Bloqueo de Berlín'],
      ans: 1,
      exp: 'Durante 13 días de máxima tensión, el presidente Kennedy impuso un bloqueo naval a Cuba hasta que Jrushchov accedió a retirar los misiles a cambio de no invadir la isla y retirar misiles en Turquía.',
      skill: 'Guerra Fría y Geopolítica Nuclear',
      topic: 'Historia de la Guerra Fría',
      sub: 'Crisis de los Misiles en Cuba'
    },
    {
      q: 'En economía ambiental, ¿cómo se denominan los efectos o impactos perjudiciales no compensados (como la contaminación del aire por una central termoeléctrica) que la actividad de un agente económico impone sobre terceros?',
      opts: ['Bienes públicos puros', 'Externalidades negativas', 'Monopolios naturales', 'Rendimientos crecientes a escala'],
      ans: 1,
      exp: 'Una externalidad negativa es un fallo de mercado donde el costo social marginal de una actividad excede al costo privado del productor, requiriendo impuestos pigouvianos o regulación.',
      skill: 'Economía Ambiental y Fallos de Mercado',
      topic: 'Microeconomía Social',
      sub: 'Externalidades Negativas'
    },
    {
      q: '¿Qué régimen de trabajo colonial forzado impuso la Corona española en el Virreinato del Perú, obligando a las comunidades indígenas a enviar contingentes rotativos de trabajadores a las minas de plata de Potosí?',
      opts: ['La encomienda de tributo', 'La mita colonial minera', 'El yanaconaje agrario', 'El asiento de negros'],
      ans: 1,
      exp: 'El virrey Francisco de Toledo reorganizó la antigua mita incaica convirtiéndola en una explotación servil obligatoria de mano de obra indígena en los socavones mineros del Cerro Rico.',
      skill: 'Historia Colonial de América',
      topic: 'Economía Colonial',
      sub: 'La Mita Minera en Potosí'
    },
    {
      q: '¿Qué teoría del desarrollo formulada por sociólogos y economistas latinoamericanos (como Raúl Prebisch y Fernando H. Cardoso en la CEPAL) sostuvo que el subdesarrollo de la "periferia" es consecuencia estructural de su subordinación económica al "centro" industrializado?',
      opts: ['Teoría de la Modernización lineal de Rostow', 'Teoría de la Dependencia (Centro-Periferia)', 'Teoría del Libre Comercio Ricardiano', 'Doctrina de las Ventajas Comparativas'],
      ans: 1,
      exp: 'La Teoría de la Dependencia demostró el deterioro histórico de los términos de intercambio para los países exportadores de materias primas frente a los manufactureros.',
      skill: 'Pensamiento Económico Latinoamericano y CEPAL',
      topic: 'Desarrollo Económico',
      sub: 'Teoría de la Dependencia'
    },
    {
      q: '¿Qué corte judicial penal internacional permanente con sede en La Haya fue establecida por el Estatuto de Roma de 1998 para juzgar a individuos responsables de crímenes de genocidio, de lesa humanidad y de guerra?',
      opts: ['La Corte Internacional de Justicia (CIJ)', 'La Corte Penal Internacional (CPI)', 'El Tribunal Europeo de Derechos Humanos', 'El Tribunal de Núremberg'],
      ans: 1,
      exp: 'La Corte Penal Internacional juzga la responsabilidad penal individual cuando los sistemas judiciales nacionales no quieren o no pueden juzgar crímenes atroces internacionales.',
      skill: 'Justicia Penal Internacional',
      topic: 'Derecho Internacional Humanitario',
      sub: 'Corte Penal Internacional (Estatuto de Roma)'
    },
    {
      q: 'En climatología y biogeografía, ¿a qué fenómeno meteorológico global recurrente se debe el calentamiento anómalo de las aguas superficiales del Océano Pacífico ecuatorial oriental con intensas lluvias en la costa oeste sudamericana?',
      opts: ['La Niña', 'El Niño - Oscilación del Sur (ENOS)', 'Vórtice polar antártico', 'Monzón de verano indio'],
      ans: 1,
      exp: 'Durante el evento cálido de El Niño, el debilitamiento de los vientos alisios permite que la corriente cálida ecuatorial avance hacia las costas de Ecuador y Perú, alterando el clima planetario.',
      skill: 'Climatología Global y Fenómeno ENOS',
      topic: 'Geografía Física',
      sub: 'Fenómeno de El Niño'
    },
    {
      q: '¿Qué concepto acuñado por el filósofo italiano Antonio Gramsci define el dominio o supremacía cultural e ideológica mediante el cual una clase dominante difunde sus propios valores como el "sentido común" universal de la sociedad civil?',
      opts: ['Dictadura del proletariado', 'Hegemonía cultural', 'Lucha de clases estructural', 'Fetichismo de la mercancía'],
      ans: 1,
      exp: 'Gramsci analizó en sus "Cuadernos de la cárcel" cómo el poder estatal se sostiene no solo por la coerción policial sino por la hegemonía lograda en instituciones culturales, escuelas y medios.',
      skill: 'Filosofía Política y Sociología Crítica',
      topic: 'Teoría Política',
      sub: 'Hegemonía Cultural de Gramsci'
    }
  ];

  bacRaw.forEach((item, idx) => {
    items.push({
      id: `soc-bac-${idx + 1}`,
      sectionId: 9,
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

  // 20 TÉCNICO
  const tecRaw = [
    {
      q: 'En cartografía técnica y Sistemas de Información Geográfica (SIG / GIS), ¿cuál es la diferencia fundamental entre el modelo de datos ráster y el modelo vectorial?',
      opts: [
        'El modelo ráster estructura el espacio en una cuadrícula continua de píxeles o celdas con valores; el modelo vectorial representa elementos mediante geometrías discretas de puntos, líneas y polígonos referenciados por coordenadas.',
        'El ráster solo se usa para textos y el vectorial para fotos aéreas.',
        'El vectorial no admite coordenadas geográficas.',
        'Son formatos idénticos en geoprocesamiento.'
      ],
      ans: 0,
      exp: 'En SIG, el ráster es ideal para variables continuas (elevación DEM, imágenes satelitales multiespectrales) y el vectorial para entidades discretas (parcelas catastrales, redes viales, ríos).',
      skill: 'Sistemas de Información Geográfica (SIG)',
      topic: 'Geomática y Cartografía Digital',
      sub: 'Modelos Ráster y Vectorial en SIG'
    },
    {
      q: 'En gestión del territorio y catastro multifinalitario, ¿qué documento técnico cartográfico de precisión legal delimita los linderos, superficie métrica, titularidad y afectaciones de un predio inmueble?',
      opts: ['Plano de zonificación turística', 'Levantamiento planimétrico catastral georreferenciado', 'Carta topográfica 1:50,000', 'Mapa de curvas de nivel general'],
      ans: 1,
      exp: 'El plano catastral georreferenciado (enlazado a la red geodésica nacional) define con validez jurídica las coordenadas UTM de los vértices y la geometría legal del inmueble.',
      skill: 'Catastro y Ordenamiento Territorial',
      topic: 'Topografía y Catastro',
      sub: 'Plano Catastral Georreferenciado'
    },
    {
      q: 'En la gestión técnica de cuencas hidrográficas para prevención de riesgos de inundación, ¿qué modelo hidrológico estima el caudal máximo de escorrentía pico (Q = C · I · A / 360) para cuencas de drenaje pequeñas?',
      opts: ['Método Racional', 'Ecuación de Navier-Stokes', 'Modelo de Horton estático', 'Curva de Manning exclusivamente'],
      ans: 0,
      exp: 'El Método Racional relaciona el coeficiente de escorrentía superficial (C), la intensidad media de precipitación crítica (I en mm/h) y el área de la cuenca (A en ha).',
      skill: 'Hidrología Técnica y Gestión del Riesgo',
      topic: 'Gestión de Cuencas Hidrográficas',
      sub: 'Método Racional de Escorrentía'
    },
    {
      q: 'En la elaboración de un Estudio de Impacto Ambiental (EsIA) para obras de infraestructura pública, ¿qué matriz causa-efecto bidimensional clásica relaciona las actividades del proyecto con los factores ambientales alterados?',
      opts: ['Matriz FODA', 'Matriz de Leopold', 'Diagrama de Gantt', 'Matriz de Boston Consulting'],
      ans: 1,
      exp: 'La Matriz de Luna Leopold cruza en filas los factores del medio físico, biótico y socioeconómico con las acciones del proyecto en columnas, calificando magnitud e importancia de 1 a 10.',
      skill: 'Evaluación de Impacto Ambiental (EIA)',
      topic: 'Gestión Ambiental y Territorio',
      sub: 'Matriz de Leopold'
    },
    {
      q: 'En geodesia satelital y navegación de precisión con GNSS (GPS, Galileo), ¿qué técnica diferencial basada en la fase de la onda portadora permite obtener posicionamiento centimétrico en tiempo real?',
      opts: ['RTK (Real-Time Kinematic)', 'Código C/A estándar', 'Triangulación óptica con teodolito', 'Barometría altimétrica'],
      ans: 0,
      exp: 'El posicionamiento RTK calcula correcciones instantáneas de ambigüedad de fase entre una estación base de coordenadas fijas y un receptor móvil (rover), logrando precisión milimétrica.',
      skill: 'Topografía Satelital y Geodesia GNSS',
      topic: 'Geomática',
      sub: 'Posicionamiento GNSS RTK'
    },
    {
      q: 'En planificación del desarrollo comunitario rural, ¿qué metodología técnica participativa involucra a los propios pobladores en el mapeo de recursos, diagnóstico de problemas y priorización de proyectos comunales?',
      opts: ['Diagnóstico Rural Participativo (DRP)', 'Censo demográfico telefónico', 'Auditoría fiscal estandarizada', 'Muestreo aleatorio estratificado sin retorno'],
      ans: 0,
      exp: 'El DRP utiliza herramientas visuales (mapas parlantes, árboles de problemas, transectos) para que las comunidades rurales autodiagnostiquen sus necesidades y diseñen planes de acción.',
      skill: 'Planificación y Trabajo Comunitario',
      topic: 'Desarrollo Local y Comunitario',
      sub: 'Metodología DRP'
    },
    {
      q: 'En teledetección satelital ambiental, ¿qué índice espectral normalizado calculado a partir de las bandas del infrarrojo cercano (NIR) y rojo visible (Red) evalúa el vigor y densidad de la cubierta vegetal activa (NDVI = (NIR - Red) / (NIR + Red))?',
      opts: ['Índice de Vegetación de Diferencia Normalizada (NDVI)', 'Índice de Humedad Topográfica (TWI)', 'Albedo térmico de superficie', 'Índice de Aridez de De Martonne'],
      ans: 0,
      exp: 'La clorofila vegetal sana absorbe fuertemente la luz roja para la fotosíntesis y la estructura celular del mesófilo refleja intensamente el NIR, produciendo valores de NDVI entre 0.2 y 0.9.',
      skill: 'Teledetección Satelital y Procesamiento de Imágenes',
      topic: 'Sensores Remotos',
      sub: 'Índice de Vegetación NDVI'
    },
    {
      q: 'En archivística y gestión documental histórica institucional, ¿qué instrumento técnico normalizado identifica las series documentales, fija sus plazos de retención legal y determina su disposición final (conservación permanente o eliminación controlada)?',
      opts: ['Tabla de Retención Documental (TRD)', 'Índice onomástico simple', 'Inventario sumario de compras', 'Acta notarial'],
      ans: 0,
      exp: 'Las TRD regulan el ciclo vital de los documentos (archivos de gestión, central e histórico) garantizando el patrimonio documental público y la seguridad jurídica institucional.',
      skill: 'Archivística y Patrimonio Documental',
      topic: 'Gestión Documental',
      sub: 'Tablas de Retención Documental'
    },
    {
      q: 'En urbanismo y ordenamiento territorial municipal, ¿qué instrumento normativo define las zonas residenciales, comerciales e industriales, y los coeficientes de ocupación (COS) y edificación (CUS) del suelo?',
      opts: ['Plan de Ordenamiento y Desarrollo Territorial (PDOT / Plan Regulador)', 'Presupuesto general de gastos del Estado', 'Estatuto de contratación pública', 'Censo agropecuario'],
      ans: 0,
      exp: 'El Plan Regulador o PDOT es el marco técnico vinculante que clasifica el suelo (urbano, rural, de protección) y regula las densidades, alturas y cesiones viales de una ciudad.',
      skill: 'Planificación Urbana y Normativa del Suelo',
      topic: 'Urbanismo',
      sub: 'Planes de Uso y Ocupación del Suelo'
    },
    {
      q: 'En cartografía topográfica, ¿qué representan las curvas de nivel cerradas con cotas numéricas decrecientes concéntricas hacia el centro de la figura?',
      opts: ['Una colina o cerro prominente', 'Una depresión topográfica o cuenca cerrada sin desagüe', 'Una dorsal montañosa', 'Un acantilado vertical'],
      ans: 1,
      exp: 'Curvas concéntricas con valores de altitud que bajan hacia el interior representan depresiones del terreno, hoyas o dolinas cársticas.',
      skill: 'Lectura e Interpretación de Cartas Topográficas',
      topic: 'Topografía',
      sub: 'Curvas de Nivel y Relieve'
    },
    {
      q: 'En demografía aplicada a la salud pública, ¿cómo se calcula la tasa de mortalidad infantil (TMI) de una población en un año determinado?',
      opts: [
        'Número de defunciones de niños menores de 1 año por cada 1,000 nacidos vivos en el mismo período',
        'Total de muertes de niños entre la población total',
        'Nacimientos divididos entre la esperanza de vida',
        'Porcentaje de niños sin vacunar'
      ],
      ans: 0,
      exp: 'TMI = (Defunciones < 1 año / Nacidos vivos) × 1,000. Es un indicador clave de las condiciones socioeconómicas, nutricionales y de atención sanitaria materno-infantil.',
      skill: 'Estadística Demográfica y Salud Pública',
      topic: 'Demografía Social',
      sub: 'Tasa de Mortalidad Infantil'
    },
    {
      q: 'En arqueología de campo y salvamento patrimonial, ¿qué método estratigráfico documenta las relaciones cronológicas relativas de superposición física entre capas de tierra, pozos y muros mediante un diagrama de cajas conectadas?',
      opts: ['Matriz de Harris (Harris Matrix)', 'Datación por termoluminiscencia', 'Prospección geofísica con georradar', 'Flotación de sedimentos'],
      ans: 0,
      exp: 'Edward C. Harris diseñó este método lógico que esquematiza la secuencia temporal de deposición humana y natural sin depender de cronologías absolutas.',
      skill: 'Metodología Arqueológica de Campo',
      topic: 'Arqueología y Patrimonio',
      sub: 'Matriz Estratigráfica de Harris'
    },
    {
      q: 'En economía del trabajo y encuestas de empleo del hogar (INEC / DANE / INEGI), ¿cómo se define formalmente la Población Económicamente Activa (PEA)?',
      opts: [
        'Todas las personas mayores de 18 años independientemente de su situación laboral',
        'El conjunto de personas en edad de trabajar que están ocupadas (empleadas) o desocupadas pero buscando activamente empleo',
        'Exclusivamente los trabajadores con contrato en el sector público',
        'Los jubilados y estudiantes a tiempo completo'
      ],
      ans: 1,
      exp: 'La PEA (o fuerza laboral) integra la mano de obra disponible en el mercado: Ocupados + Desocupados en búsqueda activa. Quienes no trabajan ni buscan empleo forman la Población Inactiva.',
      skill: 'Mercado Laboral y Estadísticas Económicas',
      topic: 'Economía Laboral',
      sub: 'Población Económicamente Activa (PEA)'
    },
    {
      q: 'En gestión de desastres socionaturales, ¿cuál es la ecuación conceptual que define el Riesgo de desastre (R) en función de la Amenaza (A), la Vulnerabilidad (V) y la Capacidad de respuesta (C)?',
      opts: ['R = (Amenaza × Vulnerabilidad) / Capacidad', 'R = Amenaza + Vulnerabilidad + Clima', 'R = Población total × Terremotos', 'R = Pérdidas económicas puras'],
      ans: 0,
      exp: 'El riesgo se mitiga reduciendo la vulnerabilidad física/social de la población e incrementando su capacidad institucional de preparación y resiliencia.',
      skill: 'Gestión Integral del Riesgo de Desastres',
      topic: 'Seguridad y Protección Civil',
      sub: 'Ecuación del Riesgo de Desastre'
    },
    {
      q: 'En censos nacionales de población y vivienda, ¿cuál es la diferencia técnica fundamental entre un censo "de facto" (de hecho) y un censo "de jure" (de derecho)?',
      opts: [
        'El censo de facto empadrona a las personas en el lugar donde pasaron la noche de referencia censal; el censo de jure empadrona a las personas en su lugar de residencia habitual independientemente de dónde se encuentren el día del censo.',
        'El censo de facto solo empadrona a militares.',
        'El censo de jure solo se hace cada 50 años.',
        'No existen diferencias metodológicas censales.'
      ],
      ans: 0,
      exp: 'La transición internacional hacia censos "de jure" con métodos continuos y registros administrativos permite asignar recursos municipales según la residencia efectiva de los ciudadanos.',
      skill: 'Técnicas Censales y Registro de Población',
      topic: 'Demografía Aplicada',
      sub: 'Censos de Hecho y de Derecho'
    },
    {
      q: 'En la restauración y conservación preventiva de monumentos y sitios históricos, ¿qué documento internacional aprobado en 1964 en Venecia fija los principios de conservación arquitectónica prohibiendo reconstrucciones hipotéticas y exigiendo autenticidad material?',
      opts: ['Carta de Venecia (ICOMOS)', 'Convenio de Ramsar', 'Protocolo de Kioto', 'Declaración de Estocolmo'],
      ans: 0,
      exp: 'La Carta Internacional sobre la Conservación y Restauración de Monumentos y Sitios (Carta de Venecia) estipula que las adiciones modernas deben diferenciarse de la composición original respetando la historia.',
      skill: 'Conservación del Patrimonio Cultural Material',
      topic: 'Patrimonio Cultural',
      sub: 'Carta de Venecia de 1964'
    },
    {
      q: 'En economía internacional y aduanas, ¿qué código numérico universal estandarizado por la Organización Mundial de Aduanas (OMA) de 6 dígitos clasifica mundialmente las mercancías importadas y exportadas?',
      opts: ['Código Postal Universal', 'Sistema Armonizado de Designación y Codificación de Mercancías (SA)', 'Código de Barras EAN-13', 'Código SWIFT interbancario'],
      ans: 1,
      exp: 'El Sistema Armonizado (HS Code) asegura la uniformidad internacional para la fijación de aranceles aduaneros, estadísticas de comercio exterior y normas de origen.',
      skill: 'Comercio Exterior y Nomenclatura Aduanera',
      topic: 'Aduanas y Comercio Internacional',
      sub: 'Sistema Armonizado de Mercancías'
    },
    {
      q: 'En diseño de infraestructura vial y seguridad de tránsito, ¿qué distancia física obligatoria calculada por los ingenieros combina la distancia recorrida durante el tiempo de reacción del conductor más la distancia de frenado mecánico de los neumáticos sobre el pavimento?',
      opts: ['Distancia de visibilidad de parada (DVP)', 'Radio de peralte de curva', 'Gálibo vertical libre', 'Sobreancho de plataforma'],
      ans: 0,
      exp: 'DVP = v · t_reacción + v² / (2g · (f ± i)). Es el parámetro geométrico crítico de diseño para garantizar que un obstáculo imprevisto en la vía sea evitado sin colisión.',
      skill: 'Ingeniería Vial y Seguridad en el Transporte',
      topic: 'Infraestructura del Transporte',
      sub: 'Distancia de Visibilidad de Parada'
    },
    {
      q: 'En la sociología de las encuestas de opinión y estudios de mercado cuantitativos, ¿cómo se define el margen de error estadístico (e) al calcular el tamaño de muestra con un nivel de confianza del 95% (Z = 1.96)?',
      opts: [
        'La máxima diferencia esperada entre la estimación muestral y el verdadero parámetro poblacional desconocido',
        'El porcentaje de personas que rechazaron responder',
        'La suma de las varianzas poblacionales',
        'El número total de cuestionarios descartados'
      ],
      ans: 0,
      exp: 'Para una proporción en población infinita: n = (Z² · p · q) / e². Con e = ±3%, la proporción muestral diferirá como máximo 3 puntos porcentuales de la realidad.',
      skill: 'Muestreo Estadístico y Encuestas Sociales',
      topic: 'Metodología de la Investigación Social',
      sub: 'Margen de Error y Muestreo'
    },
    {
      q: 'En gobernanza hídrica y derecho ambiental agrario, ¿cómo se denomina el instrumento jurídico administrativo mediante el cual la autoridad de aguas otorga a una comunidad o particular el derecho legal de aprovechamiento productivo de un caudal determinado (L/s) de una fuente hídrica pública?',
      opts: ['Concesión o autorización de uso y aprovechamiento de aguas', 'Título de propiedad inmobiliaria pura', 'Patente industrial comercial', 'Servidumbre de paso privada'],
      ans: 0,
      exp: 'Dado que el agua es un bien nacional de uso público o patrimonio inalienable del Estado, su explotación productiva requiere concesión temporal condicionada al caudal ecológico y no contaminación.',
      skill: 'Legislación y Gobernanza del Agua',
      topic: 'Derecho Agrario y Ambiental',
      sub: 'Concesiones de Uso de Agua'
    }
  ];

  tecRaw.forEach((item, idx) => {
    items.push({
      id: `soc-tec-${idx + 1}`,
      sectionId: 9,
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

  // 20 UNIVERSITARIO
  const uniRaw = [
    {
      q: 'En la sociología comprensiva de Max Weber en "Economía y Sociedad", ¿cuáles son los tres tipos puros o ideales de dominación legítima según el fundamento de su autoridad?',
      opts: [
        'Dominación de clase, dominación militar y dominación clerical',
        'Dominación tradicional, dominación carismática y dominación legal-racional (burocrática)',
        'Monarquía, oligarquía y anarquía popular',
        'Poder coercitivo, poder fáctico y poder simbólico'
      ],
      ans: 1,
      exp: 'Weber distinguió la dominación tradicional (creencia en la santidad de costumbres inmemoriales), carismática (devoción extraordinaria a un líder heroico) y legal-racional (creencia en la legalidad de ordenanzas abstractas y el derecho estatuido impersonal).',
      skill: 'Sociología Política Weberiana',
      topic: 'Teoría Sociológica Avanzada',
      sub: 'Tipos Ideales de Dominación de Max Weber'
    },
    {
      q: 'En la teoría del sistema-mundo formulada por Immanuel Wallerstein, ¿cómo se estructura la división internacional del trabajo a escala global desde el siglo XVI?',
      opts: [
        'En un sistema jerarquizado tripartito de países del Centro (producción intensiva en capital de alta tecnología), la Periferia (producción primaria de bajo valor agregado con trabajo coercitivo) y la Semiperiferia (amortiguador estructural con rasgos intermedios)',
        'En Estados independientes sin relaciones económicas asimétricas',
        'En dos hemisferios idénticos culturalmente',
        'En tribus aisladas sin comercio exterior'
      ],
      ans: 0,
      exp: 'Wallerstein integró la perspectiva histórica de los Annales con el análisis marxista de la acumulación de capital, demostrando cómo el sistema-mundo capitalista transfiere plusvalor excedente desde las periferias subordinadas hacia el centro hegemónico.',
      skill: 'Teoría del Sistema-Mundo de Wallerstein',
      topic: 'Sociología Histórica y Macroeconomía Global',
      sub: 'Centro, Periferia y Semiperiferia'
    },
    {
      q: 'En la antropología estructural de Claude Lévi-Strauss en "Las estructuras elementales del parentesco" (1949), ¿cuál es la regla universal que marca el paso fundamental de la naturaleza a la cultura en todas las sociedades humanas?',
      opts: ['El tabú del incesto y la obligación consecuente de la exogamia recíproca', 'La invención de la rueda metálica', 'El cultivo del trigo', 'La construcción de tumbas megalíticas'],
      ans: 0,
      exp: 'Lévi-Strauss postuló que la prohibición del incesto obliga a los grupos de parentesco a intercambiar mujeres fuera de su linaje consanguíneo, fundando el principio universal de reciprocidad y alianza que constituye la cultura humana.',
      skill: 'Antropología Estructural y Parentesco',
      topic: 'Teoría Antropológica',
      sub: 'Tabú del Incesto y Estructuralismo de Lévi-Strauss'
    },
    {
      q: 'En la filosofía política contemporánea, ¿qué principio de justicia distributiva formula John Rawls en "Teoría de la Justicia" mediante el concepto de "Velo de la Ignorancia" en la posición original?',
      opts: [
        'El utilitarismo hedonista de maximizar la suma agregada de placer social',
        'El Principio de la Diferencia: las desigualdades socioeconómicas solo son legítimas si operan para el máximo beneficio de los miembros menos aventajados de la sociedad',
        'El derecho irrestricto de propiedad absoluta sin redistribución',
        'La igualdad matemática obligatoria de salarios'
      ],
      ans: 1,
      exp: 'Tras el velo de la ignorancia (sin saber qué posición social, talento o riqueza le tocará en suerte), agentes racionales elegirían el principio de igual libertad básica y el principio de diferencia que maximiza el bienestar del grupo más vulnerable (criterio maximin).',
      skill: 'Filosofía Moral y Filosofía Política Normativa',
      topic: 'Teoría de la Justicia de John Rawls',
      sub: 'Posición Original y Principio de la Diferencia'
    },
    {
      q: 'En el análisis geopolítico de Halford John Mackinder ("El pivote geográfico de la historia", 1904), ¿qué región continental euroasiática inaccesible al poder naval fue designada como el "Heartland" o Área Pivote del control del mundo?',
      opts: [
        'Las llanuras centrales de Eurasia interior (desde el Volga hasta Siberia y Asia Central)',
        'La península ibérica y el estrecho de Gibraltar',
        'El archipiélago británico y el mar del Norte',
        'La cuenca del Amazonas sudamericana'
      ],
      ans: 0,
      exp: 'Mackinder postuló la célebre máxima geopolítica: "Quien gobierna Europa del Este domina el Heartland; quien gobierna el Heartland domina la Isla Mundial; quien gobierna la Isla Mundial domina el Mundo".',
      skill: 'Teoría Geopolítica Clásica',
      topic: 'Geopolítica Superior',
      sub: 'Teoría del Heartland de Mackinder'
    },
    {
      q: 'En la teoría sociológica del poder y las instituciones de Michel Foucault en "Vigilar y castigar" (1975), ¿qué dispositivo arquitectónico panóptico diseñado por Jeremy Bentham ejemplifica el paradigma de la sociedad disciplinaria y el biopoder?',
      opts: [
        'El Panóptico: una torre central de vigilancia circular que induce en el recluso el estado consciente y permanente de visibilidad que garantiza el funcionamiento automático del poder',
        'El ágora pública abierta de deliberación colectiva',
        'La guillotina ceremonial barroca',
        'El monasterio hermético medieval'
      ],
      ans: 0,
      exp: 'Foucault analizó la transición desde el suplicio público del soberano hacia el control disciplinario micropolar ejercido sobre los cuerpos mediante la vigilancia panóptica en cárceles, escuelas, cuarteles y hospitales.',
      skill: 'Filosofía del Poder y Epistemología Foucaultiana',
      topic: 'Sociología del Poder',
      sub: 'El Panóptico y la Microfísica del Poder'
    },
    {
      q: 'En economía institucional y teoría de la elección pública (Public Choice) de James M. Buchanan (Premio Nobel 1986), ¿qué postulado metodológico central analiza el comportamiento de los políticos, legisladores y burócratas?',
      opts: [
        'Que los actores políticos actúan como agentes benevolentes desinteresados que buscan exclusivamente el bienestar general abstracto',
        'Que los actores en el ámbito político actúan motivados por su propio interés personal racional (búsqueda de reelección, presupuesto, poder y rentas), de la misma manera que los agentes económicos en el mercado',
        'Que el mercado no requiere marco jurídico de derechos de propiedad',
        'Que el gasto público carece de costos de oportunidad'
      ],
      ans: 1,
      exp: 'La escuela de Public Choice aplicó las herramientas microeconómicas neoclásicas al análisis del Estado, demostrando los "fallos del gobierno" generados por la captura de rentas (rent-seeking) y grupos de presión.',
      skill: 'Economía Institucional y Teoría de la Elección Pública',
      topic: 'Economía Política Avanzada',
      sub: 'Teoría de la Elección Pública de Buchanan'
    },
    {
      q: 'En la teoría del espacio social y campos de Pierre Bourdieu, ¿qué concepto designa al sistema duradero y transferible de esquemas interiorizados de percepción, apreciación y acción adquiridos mediante la socialización de clase?',
      opts: ['El Habitus', 'La Plusvalía relativa', 'La Anomia funcional', 'La Alienación metafísica'],
      ans: 0,
      exp: 'Bourdieu definió el habitus como "estructuras estructuradas predispuestas a funcionar como estructuras estructurantes", puente dialéctico que media entre las condiciones objetivas del campo y las prácticas subjetivas del agente.',
      skill: 'Sociología de la Cultura y Habitus de Bourdieu',
      topic: 'Teoría Sociológica Contemporánea',
      sub: 'El Concepto de Habitus de Bourdieu'
    },
    {
      q: 'En la escuela historiográfica de la Historia Conceptual (Begriffsgeschichte) fundada por Reinhart Koselleck, ¿a qué período epocal de transición moderna (aproximadamente 1750-1850) denomina el "Sattelzeit" o tiempo bisagra?',
      opts: [
        'La época en que los conceptos políticos y sociales tradicionales mutaron radicalmente hacia su significación abstracta moderna orientada al futuro y a la aceleración temporal (progreso, historia, revolución)',
        'La caída del Imperio Romano en 476',
        'La Reforma protestante de Lutero',
        'El auge de la imprenta de tipos móviles'
      ],
      ans: 0,
      exp: 'Koselleck demostró que en el Sattelzeit los conceptos perdieron su arraigo corporativo estamental tradicional para convertirse en conceptos orientados al movimiento histórico futuro, abriendo la brecha entre el "espacio de experiencia" y el "horizonte de expectativa".',
      skill: 'Historia Conceptual y Hermenéutica de Koselleck',
      topic: 'Teoría de la Historia',
      sub: 'Reinhart Koselleck y el Sattelzeit'
    },
    {
      q: 'En la teoría de las relaciones internacionales contemporáneas, ¿qué escuela del Realismo Ofensivo formulada por John Mearsheimer postula que la estructura anárquica del sistema internacional obliga a todas las grandes potencias a maximizar su poder relativo buscando la hegemonía regional?',
      opts: ['Realismo Ofensivo', 'Constructivismo identitario de Wendt', 'Institucionalismo neoliberal de Keohane', 'Teoría crítica de Frankfurt'],
      ans: 0,
      exp: 'Mearsheimer argumentó en "The Tragedy of Great Power Politics" que la anarquía, la incertidumbre sobre las intenciones hostiles ajenas y el instinto de supervivencia fuerzan a los Estados racionales a adoptar estrategias agresivas de poder relativo.',
      skill: 'Teoría de las Relaciones Internacionales',
      topic: 'Geopolítica y Seguridad Internacional',
      sub: 'Realismo Ofensivo de Mearsheimer'
    },
    {
      q: 'En la antropología económica sustantivista de Karl Polanyi ("La Gran Transformación", 1944), ¿qué proceso histórico describe el intento del liberalismo decimonónico de desincrustar (disembed) los mercados autorregulados de los lazos morales, comunitarios y sociales tradicionales?',
      opts: [
        'El desincrustamiento del mercado y el doble movimiento de autoprotección social',
        'La transición demográfica urbana',
        'La acumulación originaria pura sin leyes',
        'El comercio kula de las islas Trobriand'
      ],
      ans: 0,
      exp: 'Polanyi demostró que convertir la tierra, el trabajo y el dinero en "mercancías ficticias" sometidas a mercados ciegos amenazó con destruir el tejido social, provocando una contramedida o "doble movimiento" de protección social estatal.',
      skill: 'Antropología Económica Sustantivista de Polanyi',
      topic: 'Economía Política e Historia Social',
      sub: 'Karl Polanyi y las Mercancías Ficticias'
    },
    {
      q: 'En el debate historiográfico sobre el origen del capitalismo agrario en Inglaterra, ¿qué postula la tesis de Robert Brenner (el "Debate Brenner") frente a los modelos malthusianos demográficos y comerciales?',
      opts: [
        'Que el desarrollo del capitalismo agrario derivó de la estructura específica de las relaciones de propiedad feudal de clase y del resultado de las luchas de clases agrarias entre señores y campesinos en el siglo XIV-XVI',
        'Que dependió exclusivamente del comercio de especias con la India',
        'Que fue provocado por el cambio climático del Óptimo Medieval',
        'Que el dinero en metálico fue el único motor'
      ],
      ans: 0,
      exp: 'Brenner criticó el determinismo demográfico de Le Roy Ladurie y el modelo comercial de Sweezy, argumentando que las diferentes relaciones de poder y fuerza entre señores y campesinos en Inglaterra vs. Francia determinaron el surgimiento del arrendamiento capitalista.',
      skill: 'Historiografía Económica y Debate Brenner',
      topic: 'Historia Económica Comparada',
      sub: 'El Debate Brenner sobre el Capitalismo'
    },
    {
      q: 'En filosofía del derecho y teoría jurídica iuspositivista de Hans Kelsen en la "Teoría Pura del Derecho" (1934), ¿qué norma hipotética fundamental trascendental (Grundnorm) otorga validez formal y unidad lógica a todo el ordenamiento jurídico jerarquizado?',
      opts: ['La Constitución empírica promulgada', 'La Norma Fundamental Hipotética (Grundnorm)', 'El derecho natural divino', 'El decreto ministerial'],
      ans: 1,
      exp: 'Kelsen postuló que para evitar el regreso al infinito en la pirámide jurídica (Stufenbau), la validez de la primera Constitución histórica debe presuponerse lógicamente en una Grundnorm que ordena acatar la Constitución.',
      skill: 'Filosofía del Derecho y Positivismo Kelseniano',
      topic: 'Teoría Jurídica Pura',
      sub: 'La Grundnorm de Hans Kelsen'
    },
    {
      q: 'En sociología urbana de la Escuela de Chicago (Robert Park, Ernest Burgess, 1925), ¿qué célebre modelo ecológico espacial describió el crecimiento urbano de Chicago a través de cinco zonas concéntricas que se expanden desde el distrito central de negocios (CBD)?',
      opts: ['Modelo de Zonas Concéntricas de Burgess', 'Modelo sectorial de Homer Hoyt', 'Modelo de núcleos múltiples de Harris y Ullman', 'Modelo de red de ciudades globales'],
      ans: 0,
      exp: 'Burgess modeló la dinámica urbana como sucesión ecológica: 1) Loop/CBD central, 2) Zona de transición fabril degradada, 3) Zona de trabajadores obreros, 4) Zona residencial de clase media, 5) Zona de conmuters periurbana.',
      skill: 'Sociología Urbana de la Escuela de Chicago',
      topic: 'Ecología Urbana Clásica',
      sub: 'Modelo Concéntrico de Burgess'
    },
    {
      q: 'En la teoría de la democracia deliberativa de Jürgen Habermas en "Teoría de la Acción Comunicativa" (1981), ¿qué concepto normativo define el espacio de diálogo intersubjetivo libre de coacción, simétrico y orientado al entendimiento racional?',
      opts: ['La Situación Ideal de Habla (Ideale Sprechsituation)', 'El Estado de Naturaleza hobbesiano', 'La Razón cínica instrumental', 'El panóptico foucaultiano'],
      ans: 0,
      exp: 'Habermas sostiene que la validez de las normas morales y políticas depende de que puedan ser aceptadas por todos los afectados en un proceso de deliberación discursiva simétrico bajo pretensiones de validez universales.',
      skill: 'Teoría Crítica Habermasiana y Acción Comunicativa',
      topic: 'Filosofía Social y Política',
      sub: 'Situación Ideal de Habla de Habermas'
    },
    {
      q: 'En el análisis histórico del totalitarismo formulado por Hannah Arendt en "Los orígenes del totalitarismo" (1951), ¿cuáles son los dos pilares organizativos fundamentales que diferencian a los regímenes totalitarios (nazismo y estalinismo) de las tiranías o dictaduras autoritarias tradicionales?',
      opts: [
        'El terror total como esencia de la dominación y la ideología dogmática pseudocientífica que pretende explicar la historia con leyes inexorables de la naturaleza o de la clase',
        'El cobro de tributos feudales y la monarquía dinástica',
        'La presencia de un banco central privado',
        'El voto directo parlamentario'
      ],
      ans: 0,
      exp: 'Arendt demostró que el totalitarismo no busca solo la obediencia externa sino la destrucción de la espontaneidad humana y de la esfera pública mediante el aislamiento de masas desatomizadas y campos de concentración.',
      skill: 'Filosofía Política del Totalitarismo de Hannah Arendt',
      topic: 'Teoría Política del Siglo XX',
      sub: 'Hannah Arendt y el Totalitarismo'
    },
    {
      q: 'En sociología de la religión, ¿qué tesis formuló Max Weber en "La ética protestante y el espíritu del capitalismo" (1905) respecto a la afinidad electiva entre la doctrina calvinista de la predestinación y la conducta económica moderna?',
      opts: [
        'Que la incertidumbre psicológica de la predestinación impulsó a los creyentes a buscar signos de su salvación eterna mediante el éxito ascético intramundano en la profesión y la reinversión constante del capital sin consumo suntuario',
        'Que los protestantes prohibieron el uso del dinero bancario',
        'Que el catolicismo impulsó la industria del carbón',
        'Que la religión no tuvo ninguna influencia en la economía'
      ],
      ans: 0,
      exp: 'Weber demostró una afinidad electiva (Wahlverwandtschaft): el ascetismo intramundano calvinista transformó el trabajo profesional metódico en una vocación divina (Beruf), aportando el sustrato ético y psíquico al capitalismo moderno.',
      skill: 'Sociología de la Religión y Economía Weberiana',
      topic: 'Sociología Histórica',
      sub: 'La Ética Protestante de Max Weber'
    },
    {
      q: 'En la teoría de la modernización reflexiva y la "Sociedad del Riesgo" formulada por Ulrich Beck (1986), ¿cómo se transforman las contradicciones de la sociedad contemporánea respecto a la primera modernidad industrial clásica?',
      opts: [
        'La sociedad moderna avanzada deja de enfocarse exclusivamente en la distribución de la riqueza para centrarse en la gestión y distribución de riesgos manufacturados globales (nucleares, ecológicos, biotecnológicos) que escapan al control del Estado-nación',
        'Se eliminan todos los peligros tecnológicos',
        'Las sociedades retornan al feudalismo medieval',
        'La ciencia alcanza certeza absoluta incontestable'
      ],
      ans: 0,
      exp: 'Beck demostró que los riesgos de la modernidad tardía son transfronterizos, invisibles a los sentidos, irreversibles e independientes del nivel de ingresos, desatando una modernización reflexiva de autocrítica institucional.',
      skill: 'Sociología del Riesgo y Modernidad Tardía',
      topic: 'Sociología Contemporánea',
      sub: 'La Sociedad del Riesgo de Ulrich Beck'
    },
    {
      q: 'En la microhistoria italiana desarrollada por Carlo Ginzburg ("El queso y los gusanos", 1976), ¿qué enfoque metodológico microhistórico desentrañó la cosmogonía de Menocchio a través de las actas de la Inquisición?',
      opts: [
        'La reducción de la escala de observación intensiva de un caso microscópico para revelar la cultura popular campesina y su circulación circular con la cultura de élite',
        'El análisis econométrico masivo de precios de granos a escala europea',
        'La biografía laudatoria de reyes y príncipes renacentistas',
        'El cálculo demográfico por satélite'
      ],
      ans: 0,
      exp: 'Ginzburg demostró que reducir la escala de observación documental a un caso aparentemente marginal permite descubrir complejidades de la cultura popular oral subalterna invisibles para la macrohistoria tradicional.',
      skill: 'Metodología de la Microhistoria Italiana',
      topic: 'Historiografía Cultural',
      sub: 'Carlo Ginzburg y la Microhistoria'
    },
    {
      q: 'En la teoría del imperialismo económico de John A. Hobson (1902) y Vladímir Lenin (1916), ¿cuál es el factor económico estructural que empuja a los Estados imperialistas al reparto bélico de colonias y zonas de influencia?',
      opts: [
        'La concentración de capital en monopolios y la exportación de capital excedente acumulado en la metrópoli que no encuentra inversión rentable en el mercado interno saturado por el subconsumo de las masas',
        'El orgullo dinástico de las coronas europeas exclusivamente',
        'La superpoblación demográfica en el desierto',
        'El intercambio libre de mercancías sin monopolios bancarios'
      ],
      ans: 0,
      exp: 'Lenin definió el imperialismo como la "fase superior del capitalismo" caracterizada por la fusión del capital bancario e industrial en capital financiero oligopólico que fuerza la disputa militar por mercados y materias primas coloniales.',
      skill: 'Teoría Económica del Imperialismo',
      topic: 'Economía Política y Relaciones Internacionales',
      sub: 'Teoría del Imperialismo de Lenin y Hobson'
    }
  ];

  uniRaw.forEach((item, idx) => {
    items.push({
      id: `soc-uni-${idx + 1}`,
      sectionId: 9,
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

  writeSubjectFile('sociales.ts', 'QUESTIONS_SOCIALES', 'Estudios Sociales e Historia', items);
}

makeSociales();
