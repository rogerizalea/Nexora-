import { Question } from '../../../types';

export const SOCIALES_TECNICO: Question[] = [
  {
    "id": "soc-tec-1",
    "sectionId": 9,
    "number": 61,
    "text": "En cartografía técnica y Sistemas de Información Geográfica (SIG / GIS), ¿cuál es la diferencia fundamental entre el modelo de datos ráster y el modelo vectorial?",
    "options": [
      "El modelo ráster estructura el espacio en una cuadrícula continua de píxeles o celdas con valores; el modelo vectorial representa elementos mediante geometrías discretas de puntos, líneas y polígonos referenciados por coordenadas.",
      "El ráster solo se usa para textos y el vectorial para fotos aéreas.",
      "El vectorial no admite coordenadas geográficas.",
      "Son formatos idénticos en geoprocesamiento."
    ],
    "correctIndex": 0,
    "explanation": "En SIG, el ráster es ideal para variables continuas (elevación DEM, imágenes satelitales multiespectrales) y el vectorial para entidades discretas (parcelas catastrales, redes viales, ríos).",
    "skill": "Sistemas de Información Geográfica (SIG)",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Geomática y Cartografía Digital",
    "subtopic": "Modelos Ráster y Vectorial en SIG"
  },
  {
    "id": "soc-tec-2",
    "sectionId": 9,
    "number": 62,
    "text": "En gestión del territorio y catastro multifinalitario, ¿qué documento técnico cartográfico de precisión legal delimita los linderos, superficie métrica, titularidad y afectaciones de un predio inmueble?",
    "options": [
      "Plano de zonificación turística",
      "Levantamiento planimétrico catastral georreferenciado",
      "Carta topográfica 1:50,000",
      "Mapa de curvas de nivel general"
    ],
    "correctIndex": 1,
    "explanation": "El plano catastral georreferenciado (enlazado a la red geodésica nacional) define con validez jurídica las coordenadas UTM de los vértices y la geometría legal del inmueble.",
    "skill": "Catastro y Ordenamiento Territorial",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Topografía y Catastro",
    "subtopic": "Plano Catastral Georreferenciado"
  },
  {
    "id": "soc-tec-3",
    "sectionId": 9,
    "number": 63,
    "text": "En la gestión técnica de cuencas hidrográficas para prevención de riesgos de inundación, ¿qué modelo hidrológico estima el caudal máximo de escorrentía pico (Q = C · I · A / 360) para cuencas de drenaje pequeñas?",
    "options": [
      "Método Racional",
      "Ecuación de Navier-Stokes",
      "Modelo de Horton estático",
      "Curva de Manning exclusivamente"
    ],
    "correctIndex": 0,
    "explanation": "El Método Racional relaciona el coeficiente de escorrentía superficial (C), la intensidad media de precipitación crítica (I en mm/h) y el área de la cuenca (A en ha).",
    "skill": "Hidrología Técnica y Gestión del Riesgo",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Gestión de Cuencas Hidrográficas",
    "subtopic": "Método Racional de Escorrentía"
  },
  {
    "id": "soc-tec-4",
    "sectionId": 9,
    "number": 64,
    "text": "En la elaboración de un Estudio de Impacto Ambiental (EsIA) para obras de infraestructura pública, ¿qué matriz causa-efecto bidimensional clásica relaciona las actividades del proyecto con los factores ambientales alterados?",
    "options": [
      "Matriz FODA",
      "Matriz de Leopold",
      "Diagrama de Gantt",
      "Matriz de Boston Consulting"
    ],
    "correctIndex": 1,
    "explanation": "La Matriz de Luna Leopold cruza en filas los factores del medio físico, biótico y socioeconómico con las acciones del proyecto en columnas, calificando magnitud e importancia de 1 a 10.",
    "skill": "Evaluación de Impacto Ambiental (EIA)",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Gestión Ambiental y Territorio",
    "subtopic": "Matriz de Leopold"
  },
  {
    "id": "soc-tec-5",
    "sectionId": 9,
    "number": 65,
    "text": "En geodesia satelital y navegación de precisión con GNSS (GPS, Galileo), ¿qué técnica diferencial basada en la fase de la onda portadora permite obtener posicionamiento centimétrico en tiempo real?",
    "options": [
      "RTK (Real-Time Kinematic)",
      "Código C/A estándar",
      "Triangulación óptica con teodolito",
      "Barometría altimétrica"
    ],
    "correctIndex": 0,
    "explanation": "El posicionamiento RTK calcula correcciones instantáneas de ambigüedad de fase entre una estación base de coordenadas fijas y un receptor móvil (rover), logrando precisión milimétrica.",
    "skill": "Topografía Satelital y Geodesia GNSS",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Geomática",
    "subtopic": "Posicionamiento GNSS RTK"
  },
  {
    "id": "soc-tec-6",
    "sectionId": 9,
    "number": 66,
    "text": "En planificación del desarrollo comunitario rural, ¿qué metodología técnica participativa involucra a los propios pobladores en el mapeo de recursos, diagnóstico de problemas y priorización de proyectos comunales?",
    "options": [
      "Diagnóstico Rural Participativo (DRP)",
      "Censo demográfico telefónico",
      "Auditoría fiscal estandarizada",
      "Muestreo aleatorio estratificado sin retorno"
    ],
    "correctIndex": 0,
    "explanation": "El DRP utiliza herramientas visuales (mapas parlantes, árboles de problemas, transectos) para que las comunidades rurales autodiagnostiquen sus necesidades y diseñen planes de acción.",
    "skill": "Planificación y Trabajo Comunitario",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Desarrollo Local y Comunitario",
    "subtopic": "Metodología DRP"
  },
  {
    "id": "soc-tec-7",
    "sectionId": 9,
    "number": 67,
    "text": "En teledetección satelital ambiental, ¿qué índice espectral normalizado calculado a partir de las bandas del infrarrojo cercano (NIR) y rojo visible (Red) evalúa el vigor y densidad de la cubierta vegetal activa (NDVI = (NIR - Red) / (NIR + Red))?",
    "options": [
      "Índice de Vegetación de Diferencia Normalizada (NDVI)",
      "Índice de Humedad Topográfica (TWI)",
      "Albedo térmico de superficie",
      "Índice de Aridez de De Martonne"
    ],
    "correctIndex": 0,
    "explanation": "La clorofila vegetal sana absorbe fuertemente la luz roja para la fotosíntesis y la estructura celular del mesófilo refleja intensamente el NIR, produciendo valores de NDVI entre 0.2 y 0.9.",
    "skill": "Teledetección Satelital y Procesamiento de Imágenes",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Sensores Remotos",
    "subtopic": "Índice de Vegetación NDVI"
  },
  {
    "id": "soc-tec-8",
    "sectionId": 9,
    "number": 68,
    "text": "En archivística y gestión documental histórica institucional, ¿qué instrumento técnico normalizado identifica las series documentales, fija sus plazos de retención legal y determina su disposición final (conservación permanente o eliminación controlada)?",
    "options": [
      "Tabla de Retención Documental (TRD)",
      "Índice onomástico simple",
      "Inventario sumario de compras",
      "Acta notarial"
    ],
    "correctIndex": 0,
    "explanation": "Las TRD regulan el ciclo vital de los documentos (archivos de gestión, central e histórico) garantizando el patrimonio documental público y la seguridad jurídica institucional.",
    "skill": "Archivística y Patrimonio Documental",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Gestión Documental",
    "subtopic": "Tablas de Retención Documental"
  },
  {
    "id": "soc-tec-9",
    "sectionId": 9,
    "number": 69,
    "text": "En urbanismo y ordenamiento territorial municipal, ¿qué instrumento normativo define las zonas residenciales, comerciales e industriales, y los coeficientes de ocupación (COS) y edificación (CUS) del suelo?",
    "options": [
      "Plan de Ordenamiento y Desarrollo Territorial (PDOT / Plan Regulador)",
      "Presupuesto general de gastos del Estado",
      "Estatuto de contratación pública",
      "Censo agropecuario"
    ],
    "correctIndex": 0,
    "explanation": "El Plan Regulador o PDOT es el marco técnico vinculante que clasifica el suelo (urbano, rural, de protección) y regula las densidades, alturas y cesiones viales de una ciudad.",
    "skill": "Planificación Urbana y Normativa del Suelo",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Urbanismo",
    "subtopic": "Planes de Uso y Ocupación del Suelo"
  },
  {
    "id": "soc-tec-10",
    "sectionId": 9,
    "number": 70,
    "text": "En cartografía topográfica, ¿qué representan las curvas de nivel cerradas con cotas numéricas decrecientes concéntricas hacia el centro de la figura?",
    "options": [
      "Una colina o cerro prominente",
      "Una depresión topográfica o cuenca cerrada sin desagüe",
      "Una dorsal montañosa",
      "Un acantilado vertical"
    ],
    "correctIndex": 1,
    "explanation": "Curvas concéntricas con valores de altitud que bajan hacia el interior representan depresiones del terreno, hoyas o dolinas cársticas.",
    "skill": "Lectura e Interpretación de Cartas Topográficas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Topografía",
    "subtopic": "Curvas de Nivel y Relieve"
  },
  {
    "id": "soc-tec-11",
    "sectionId": 9,
    "number": 71,
    "text": "En demografía aplicada a la salud pública, ¿cómo se calcula la tasa de mortalidad infantil (TMI) de una población en un año determinado?",
    "options": [
      "Número de defunciones de niños menores de 1 año por cada 1,000 nacidos vivos en el mismo período",
      "Total de muertes de niños entre la población total",
      "Nacimientos divididos entre la esperanza de vida",
      "Porcentaje de niños sin vacunar"
    ],
    "correctIndex": 0,
    "explanation": "TMI = (Defunciones < 1 año / Nacidos vivos) × 1,000. Es un indicador clave de las condiciones socioeconómicas, nutricionales y de atención sanitaria materno-infantil.",
    "skill": "Estadística Demográfica y Salud Pública",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Demografía Social",
    "subtopic": "Tasa de Mortalidad Infantil"
  },
  {
    "id": "soc-tec-12",
    "sectionId": 9,
    "number": 72,
    "text": "En arqueología de campo y salvamento patrimonial, ¿qué método estratigráfico documenta las relaciones cronológicas relativas de superposición física entre capas de tierra, pozos y muros mediante un diagrama de cajas conectadas?",
    "options": [
      "Matriz de Harris (Harris Matrix)",
      "Datación por termoluminiscencia",
      "Prospección geofísica con georradar",
      "Flotación de sedimentos"
    ],
    "correctIndex": 0,
    "explanation": "Edward C. Harris diseñó este método lógico que esquematiza la secuencia temporal de deposición humana y natural sin depender de cronologías absolutas.",
    "skill": "Metodología Arqueológica de Campo",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Arqueología y Patrimonio",
    "subtopic": "Matriz Estratigráfica de Harris"
  },
  {
    "id": "soc-tec-13",
    "sectionId": 9,
    "number": 73,
    "text": "En economía del trabajo y encuestas de empleo del hogar (INEC / DANE / INEGI), ¿cómo se define formalmente la Población Económicamente Activa (PEA)?",
    "options": [
      "Todas las personas mayores de 18 años independientemente de su situación laboral",
      "El conjunto de personas en edad de trabajar que están ocupadas (empleadas) o desocupadas pero buscando activamente empleo",
      "Exclusivamente los trabajadores con contrato en el sector público",
      "Los jubilados y estudiantes a tiempo completo"
    ],
    "correctIndex": 1,
    "explanation": "La PEA (o fuerza laboral) integra la mano de obra disponible en el mercado: Ocupados + Desocupados en búsqueda activa. Quienes no trabajan ni buscan empleo forman la Población Inactiva.",
    "skill": "Mercado Laboral y Estadísticas Económicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Economía Laboral",
    "subtopic": "Población Económicamente Activa (PEA)"
  },
  {
    "id": "soc-tec-14",
    "sectionId": 9,
    "number": 74,
    "text": "En gestión de desastres socionaturales, ¿cuál es la ecuación conceptual que define el Riesgo de desastre (R) en función de la Amenaza (A), la Vulnerabilidad (V) y la Capacidad de respuesta (C)?",
    "options": [
      "R = (Amenaza × Vulnerabilidad) / Capacidad",
      "R = Amenaza + Vulnerabilidad + Clima",
      "R = Población total × Terremotos",
      "R = Pérdidas económicas puras"
    ],
    "correctIndex": 0,
    "explanation": "El riesgo se mitiga reduciendo la vulnerabilidad física/social de la población e incrementando su capacidad institucional de preparación y resiliencia.",
    "skill": "Gestión Integral del Riesgo de Desastres",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Seguridad y Protección Civil",
    "subtopic": "Ecuación del Riesgo de Desastre"
  },
  {
    "id": "soc-tec-15",
    "sectionId": 9,
    "number": 75,
    "text": "En censos nacionales de población y vivienda, ¿cuál es la diferencia técnica fundamental entre un censo \"de facto\" (de hecho) y un censo \"de jure\" (de derecho)?",
    "options": [
      "El censo de facto empadrona a las personas en el lugar donde pasaron la noche de referencia censal; el censo de jure empadrona a las personas en su lugar de residencia habitual independientemente de dónde se encuentren el día del censo.",
      "El censo de facto solo empadrona a militares.",
      "El censo de jure solo se hace cada 50 años.",
      "No existen diferencias metodológicas censales."
    ],
    "correctIndex": 0,
    "explanation": "La transición internacional hacia censos \"de jure\" con métodos continuos y registros administrativos permite asignar recursos municipales según la residencia efectiva de los ciudadanos.",
    "skill": "Técnicas Censales y Registro de Población",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Demografía Aplicada",
    "subtopic": "Censos de Hecho y de Derecho"
  },
  {
    "id": "soc-tec-16",
    "sectionId": 9,
    "number": 76,
    "text": "En la restauración y conservación preventiva de monumentos y sitios históricos, ¿qué documento internacional aprobado en 1964 en Venecia fija los principios de conservación arquitectónica prohibiendo reconstrucciones hipotéticas y exigiendo autenticidad material?",
    "options": [
      "Carta de Venecia (ICOMOS)",
      "Convenio de Ramsar",
      "Protocolo de Kioto",
      "Declaración de Estocolmo"
    ],
    "correctIndex": 0,
    "explanation": "La Carta Internacional sobre la Conservación y Restauración de Monumentos y Sitios (Carta de Venecia) estipula que las adiciones modernas deben diferenciarse de la composición original respetando la historia.",
    "skill": "Conservación del Patrimonio Cultural Material",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Patrimonio Cultural",
    "subtopic": "Carta de Venecia de 1964"
  },
  {
    "id": "soc-tec-17",
    "sectionId": 9,
    "number": 77,
    "text": "En economía internacional y aduanas, ¿qué código numérico universal estandarizado por la Organización Mundial de Aduanas (OMA) de 6 dígitos clasifica mundialmente las mercancías importadas y exportadas?",
    "options": [
      "Código Postal Universal",
      "Sistema Armonizado de Designación y Codificación de Mercancías (SA)",
      "Código de Barras EAN-13",
      "Código SWIFT interbancario"
    ],
    "correctIndex": 1,
    "explanation": "El Sistema Armonizado (HS Code) asegura la uniformidad internacional para la fijación de aranceles aduaneros, estadísticas de comercio exterior y normas de origen.",
    "skill": "Comercio Exterior y Nomenclatura Aduanera",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Aduanas y Comercio Internacional",
    "subtopic": "Sistema Armonizado de Mercancías"
  },
  {
    "id": "soc-tec-18",
    "sectionId": 9,
    "number": 78,
    "text": "En diseño de infraestructura vial y seguridad de tránsito, ¿qué distancia física obligatoria calculada por los ingenieros combina la distancia recorrida durante el tiempo de reacción del conductor más la distancia de frenado mecánico de los neumáticos sobre el pavimento?",
    "options": [
      "Distancia de visibilidad de parada (DVP)",
      "Radio de peralte de curva",
      "Gálibo vertical libre",
      "Sobreancho de plataforma"
    ],
    "correctIndex": 0,
    "explanation": "DVP = v · t_reacción + v² / (2g · (f ± i)). Es el parámetro geométrico crítico de diseño para garantizar que un obstáculo imprevisto en la vía sea evitado sin colisión.",
    "skill": "Ingeniería Vial y Seguridad en el Transporte",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Infraestructura del Transporte",
    "subtopic": "Distancia de Visibilidad de Parada"
  },
  {
    "id": "soc-tec-19",
    "sectionId": 9,
    "number": 79,
    "text": "En la sociología de las encuestas de opinión y estudios de mercado cuantitativos, ¿cómo se define el margen de error estadístico (e) al calcular el tamaño de muestra con un nivel de confianza del 95% (Z = 1.96)?",
    "options": [
      "La máxima diferencia esperada entre la estimación muestral y el verdadero parámetro poblacional desconocido",
      "El porcentaje de personas que rechazaron responder",
      "La suma de las varianzas poblacionales",
      "El número total de cuestionarios descartados"
    ],
    "correctIndex": 0,
    "explanation": "Para una proporción en población infinita: n = (Z² · p · q) / e². Con e = ±3%, la proporción muestral diferirá como máximo 3 puntos porcentuales de la realidad.",
    "skill": "Muestreo Estadístico y Encuestas Sociales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Metodología de la Investigación Social",
    "subtopic": "Margen de Error y Muestreo"
  },
  {
    "id": "soc-tec-20",
    "sectionId": 9,
    "number": 80,
    "text": "En gobernanza hídrica y derecho ambiental agrario, ¿cómo se denomina el instrumento jurídico administrativo mediante el cual la autoridad de aguas otorga a una comunidad o particular el derecho legal de aprovechamiento productivo de un caudal determinado (L/s) de una fuente hídrica pública?",
    "options": [
      "Concesión o autorización de uso y aprovechamiento de aguas",
      "Título de propiedad inmobiliaria pura",
      "Patente industrial comercial",
      "Servidumbre de paso privada"
    ],
    "correctIndex": 0,
    "explanation": "Dado que el agua es un bien nacional de uso público o patrimonio inalienable del Estado, su explotación productiva requiere concesión temporal condicionada al caudal ecológico y no contaminación.",
    "skill": "Legislación y Gobernanza del Agua",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Derecho Agrario y Ambiental",
    "subtopic": "Concesiones de Uso de Agua"
  },
  {
    "id": "soc-tec-21",
    "sectionId": 9,
    "number": 21,
    "text": "¿Cuál es la institución técnica oficial del Estado ecuatoriano encargada de levantar los censos de población y vivienda y publicar las estadísticas oficiales de empleo e inflación?",
    "options": [
      "El Instituto Nacional de Estadística y Censos (INEC)",
      "El Servicio de Rentas Internas (SRI)",
      "El Ministerio de Economía y Finanzas",
      "El Banco Central del Ecuador (BCE)"
    ],
    "correctIndex": 0,
    "explanation": "El INEC es el órgano rector del Sistema Estadístico Nacional en Ecuador, responsable de la recolección, procesamiento y difusión de datos demográficos y socioeconómicos.",
    "skill": "Instituciones Estadísticas del Estado",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Estadística y Demografía",
    "subtopic": "El INEC"
  },
  {
    "id": "soc-tec-22",
    "sectionId": 9,
    "number": 22,
    "text": "¿Qué forma geométrica adopta una pirámide de población progresiva o expansiva, propia de países con altas tasas de natalidad y fecundidad?",
    "options": [
      "Forma de urna o bulbo invertido",
      "Forma rectangular simétrica perfecta",
      "Forma de campana u ojiva",
      "Forma triangular de base ancha que se estrecha rápidamente hacia la cúspide"
    ],
    "correctIndex": 3,
    "explanation": "La pirámide progresiva posee una base muy ancha debido al elevado número de niños y jóvenes, y una cúspide estrecha por la menor esperanza de vida en adultos mayores.",
    "skill": "Interpretación de Pirámides Demográficas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Demografía Aplicada",
    "subtopic": "Pirámide Progresiva"
  },
  {
    "id": "soc-tec-23",
    "sectionId": 9,
    "number": 23,
    "text": "¿Qué fenómeno demográfico describe una pirámide de población regresiva (en forma de urna) con una base angosta y un ensanchamiento en las edades adultas y avanzadas?",
    "options": [
      "Aumento súbito de la tasa global de fecundidad",
      "Explosión demográfica acelerada",
      "Envejecimiento poblacional debido al descenso sostenido de la natalidad y el aumento de la esperanza de vida",
      "Migración masiva exclusiva de adolescentes"
    ],
    "correctIndex": 2,
    "explanation": "La pirámide regresiva refleja sociedades postransicionales donde nacen menos niños y la proporción de adultos mayores aumenta significativamente.",
    "skill": "Análisis de Estructura Poblacional",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Transición Demográfica",
    "subtopic": "Pirámide Regresiva"
  },
  {
    "id": "soc-tec-24",
    "sectionId": 9,
    "number": 24,
    "text": "¿Cómo se define técnicamente la 'Tasa Global de Fecundidad' (TGF) en estudios de población?",
    "options": [
      "El número total de habitantes que fallecen en un año por cada mil personas",
      "El número promedio de hijos que tendría una mujer al final de su periodo reproductivo según las tasas de fecundidad por edad",
      "El porcentaje de personas que saben leer y escribir en una comunidad",
      "La cantidad de inmigrantes que ingresan a un país en una década"
    ],
    "correctIndex": 1,
    "explanation": "La TGF mide el promedio de hijos por mujer; un valor de aproximadamente 2,1 hijos por mujer se considera el nivel de reemplazo generacional.",
    "skill": "Indicadores Demográficos Fundamentales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Demografía",
    "subtopic": "Tasa Global de Fecundidad"
  },
  {
    "id": "soc-tec-25",
    "sectionId": 9,
    "number": 25,
    "text": "¿En qué consiste el 'Bono Demográfico' o ventana de oportunidad demográfica para el crecimiento económico de un país?",
    "options": [
      "En la etapa de la transición demográfica donde la proporción de personas en edad productiva (15 a 64 años) supera con creces a la población dependiente (niños y ancianos)",
      "En la duplicación de los impuestos al comercio exterior",
      "En la condonación total de la deuda externa",
      "En un subsidio económico mensual en efectivo otorgado a los jubilados"
    ],
    "correctIndex": 0,
    "explanation": "El bono demográfico reduce la tasa de dependencia económica, lo que permite incrementar el ahorro, la inversión en educación y la productividad si se generan empleos de calidad.",
    "skill": "Economía y Población",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Transición Demográfica",
    "subtopic": "El Bono Demográfico"
  },
  {
    "id": "soc-tec-26",
    "sectionId": 9,
    "number": 26,
    "text": "¿Cómo define el INEC a la 'Población Económicamente Activa' (PEA) en sus encuestas de empleo?",
    "options": [
      "Únicamente los funcionarios con nombramiento en el sector público",
      "Los estudiantes universitarios de tiempo completo sin ingresos",
      "Todas las personas mayores de 100 años residentes en el país",
      "Las personas en edad de trabajar (15 años o más) que durante el periodo de referencia estaban ocupadas o buscando activamente un empleo (desempleadas)"
    ],
    "correctIndex": 3,
    "explanation": "La PEA o fuerza de trabajo comprende a todas las personas en edad de laborar que aportan con su trabajo o están disponibles y buscando activamente empleo.",
    "skill": "Estadística Laboral Oficial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mercado Laboral",
    "subtopic": "Población Económicamente Activa (PEA)"
  },
  {
    "id": "soc-tec-27",
    "sectionId": 9,
    "number": 27,
    "text": "¿Qué condiciones exige el INEC para clasificar a una persona dentro de la categoría de 'Empleo Adecuado o Pleno'?",
    "options": [
      "Poseer un título de cuarto nivel o doctorado",
      "Trabajar menos de 20 horas semanales sin cobrar salario",
      "Laborar 40 horas o más a la semana y percibir ingresos laborales iguales o superiores al Salario Básico Unificado (SBU), o trabajar menos horas sin desear laborar más percibiendo al menos el SBU",
      "Estar afiliado a un sindicato internacional"
    ],
    "correctIndex": 2,
    "explanation": "El empleo adecuado cumple la doble condición de jornada reglamentaria legal y remuneración mínima legal establecida por el Estado.",
    "skill": "Métricas del Mercado Laboral",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Condiciones de Empleo",
    "subtopic": "Empleo Adecuado"
  },
  {
    "id": "soc-tec-28",
    "sectionId": 9,
    "number": 28,
    "text": "¿Qué define técnicamente la condición de 'Subempleo' en las estadísticas laborales del Ecuador?",
    "options": [
      "Ocupados que trabajan la jornada legal y ganan el triple del salario básico",
      "Personas ocupadas que trabajan menos de 40 horas a la semana pero desean y están disponibles para trabajar más (por tiempo), o que laboran la jornada completa pero perciben ingresos inferiores al salario básico (por ingresos)",
      "Personas jubiladas que reciben pensiones contributivas",
      "Militares en servicio activo en zonas de frontera"
    ],
    "correctIndex": 1,
    "explanation": "El subempleo refleja la precarización laboral por insuficiencia de tiempo de trabajo o por ingresos por debajo de la línea salarial legal.",
    "skill": "Análisis Socioeconómico Laboral",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mercado Laboral",
    "subtopic": "Subempleo"
  },
  {
    "id": "soc-tec-29",
    "sectionId": 9,
    "number": 29,
    "text": "¿Qué diferencia existe entre la Canasta Familiar Básica (CFB) y la Canasta Familiar Vital en los cálculos del INEC?",
    "options": [
      "La Canasta Básica sólo incluye productos de importación europea",
      "La Canasta Vital se entrega gratuitamente por el Estado a todas las familias",
      "La Canasta Básica sólo se calcula para el sector rural",
      "La Canasta Básica mide el costo de 75 artículos imprescindibles para un hogar típico de 4 personas, mientras la Canasta Vital cubre un conjunto menor de 73 bienes de subsistencia mínima inmediata"
    ],
    "correctIndex": 3,
    "explanation": "La Canasta Básica cubre requerimientos nutricionales y de consumo habitual de un hogar de 4 miembros con 1,6 perceptores de ingresos; la Vital representa el umbral mínimo de supervivencia calórica.",
    "skill": "Economía Familiar y Costo de Vida",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Consumo y Salarios",
    "subtopic": "Canasta Básica vs Vital"
  },
  {
    "id": "soc-tec-30",
    "sectionId": 9,
    "number": 30,
    "text": "¿Qué diferencia conceptual existe entre el Producto Interno Bruto (PIB) Nominal y el PIB Real?",
    "options": [
      "El PIB Real se calcula exclusivamente con billetes de dólar en efectivo",
      "El PIB Nominal es siempre negativo en economías en desarrollo",
      "El PIB Nominal no incluye a los servicios de transporte",
      "El PIB Nominal valora la producción a los precios corrientes del año en curso, mientras que el PIB Real la valora a precios constantes de un año base eliminando el efecto distorsionador de la inflación"
    ],
    "correctIndex": 3,
    "explanation": "El PIB real permite comparar el volumen físico real de bienes y servicios generados por una economía sin la ilusión monetaria provocada por el alza de precios.",
    "skill": "Cuentas Nacionales y Macroeconomía",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Producto Interno Bruto",
    "subtopic": "PIB Nominal vs PIB Real"
  },
  {
    "id": "soc-tec-31",
    "sectionId": 9,
    "number": 31,
    "text": "¿Cómo se calcula el Índice de Precios al Consumidor (IPC) que sirve para determinar la tasa de inflación en el Ecuador?",
    "options": [
      "Calculando el número de turistas que ingresan al aeropuerto",
      "Promediando el costo del barril de petróleo en el Golfo de México",
      "Midiendo la variación porcentual mensual y anual en el precio de una canasta fija representativa de bienes y servicios adquiridos por los hogares urbanos",
      "Sumando los saldos deudores de las tarjetas de crédito"
    ],
    "correctIndex": 2,
    "explanation": "El IPC es un indicador estadístico ponderado que mide la evolución de los precios de una canasta de consumo familiar entre dos periodos de tiempo.",
    "skill": "Medición de la Inflación",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Índice de Precios al Consumidor",
    "subtopic": "Inflación"
  },
  {
    "id": "soc-tec-32",
    "sectionId": 9,
    "number": 32,
    "text": "¿Qué mide el Coeficiente de Gini en el análisis económico y social de un país?",
    "options": [
      "La velocidad del viento en las centrales eólicas",
      "El grado de desigualdad en la distribución del ingreso, donde 0 representa igualdad perfecta y 1 representa desigualdad absoluta",
      "La profundidad promedio de los pozos de petróleo",
      "El porcentaje de estudiantes matriculados en secundaria"
    ],
    "correctIndex": 1,
    "explanation": "El coeficiente de Gini es el índice estándar para evaluar la equidad distributiva a partir de la curva de Lorenz; cuanto más cercano a cero, más igualitaria es la sociedad.",
    "skill": "Indicadores de Desigualdad",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Distribución del Ingreso",
    "subtopic": "Coeficiente de Gini"
  },
  {
    "id": "soc-tec-33",
    "sectionId": 9,
    "number": 33,
    "text": "¿Qué cuatro dimensiones de bienestar evalúa el Índice de Pobreza Multidimensional (IPM) en el Ecuador según la metodología oficial del INEC?",
    "options": [
      "Educación; Trabajo y seguridad social; Salud, agua y alimentación; y Hábitat, vivienda y ambiente sano",
      "Número de automóviles, computadoras, teléfonos y televisores",
      "Gasto en vestimenta, cine, restaurantes y viajes internacionales",
      "Peso, talla, edad y tipo de sangre"
    ],
    "correctIndex": 0,
    "explanation": "El IPM mide la pobreza estructural no sólo por ingresos monetarios, sino por privaciones directas en derechos sociales básicos como educación, salud y vivienda digna.",
    "skill": "Pobreza Multidimensional",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Desarrollo Social",
    "subtopic": "Índice de Pobreza Multidimensional"
  },
  {
    "id": "soc-tec-34",
    "sectionId": 9,
    "number": 34,
    "text": "¿Cuáles son las tres dimensiones esenciales que componen el Índice de Desarrollo Humano (IDH) elaborado por el PNUD de la ONU?",
    "options": [
      "Número de bancos, reservas de oro y kilómetros de autopistas",
      "Producción de cemento, electricidad consumida y natalidad",
      "Superficie territorial, poder bélico y exportaciones agrícolas",
      "Salud (esperanza de vida al nacer), Educación (años promedio y esperados de escolaridad) y Nivel de vida digno (Ingreso Nacional Bruto per cápita)"
    ],
    "correctIndex": 3,
    "explanation": "El IDH sintetiza los logros fundamentales del desarrollo humano combinando longevidad saludable, acceso a conocimientos y nivel de vida digno.",
    "skill": "Índices Internacionales de Desarrollo",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Desarrollo Humano",
    "subtopic": "Componentes del IDH"
  },
  {
    "id": "soc-tec-35",
    "sectionId": 9,
    "number": 35,
    "text": "¿Qué refleja un 'Superávit en la Balanza Comercial' de un país?",
    "options": [
      "Que la deuda externa se incrementó automáticamente",
      "Que el valor monetario de las importaciones de bienes superó al de las exportaciones",
      "Que el valor monetario total de las exportaciones de bienes al exterior fue superior al valor de los bienes importados",
      "Que el gobierno no recaudó impuestos arancelarios"
    ],
    "correctIndex": 2,
    "explanation": "Existe superávit comercial cuando las ventas al exterior generan un saldo neto positivo de divisas frente a las compras realizadas al extranjero.",
    "skill": "Comercio Internacional",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sector Externo",
    "subtopic": "Balanza Comercial"
  },
  {
    "id": "soc-tec-36",
    "sectionId": 9,
    "number": 36,
    "text": "¿Por qué las economías que exportan principalmente materias primas no procesadas enfrentan el problema estructural del 'Deterioro de los Términos de Intercambio'?",
    "options": [
      "Porque los precios mundiales de las materias primas tienden a caer o ser muy volátiles frente al constante encarecimiento de los bienes manufacturados y tecnológicos que importan",
      "Porque no pueden utilizar transporte marítimo",
      "Porque las materias primas se producen en menor cantidad cada año",
      "Porque los tratados internacionales prohíben el cobro de fletes"
    ],
    "correctIndex": 0,
    "explanation": "Planteada por Raúl Prebisch y Singer, la tesis del deterioro de los términos de intercambio demuestra la asimetría histórica entre los países de la periferia y los industrializados.",
    "skill": "Teoría Económica del Desarrollo",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Términos de Intercambio",
    "subtopic": "Vulnerabilidad Primario-Exportadora"
  },
  {
    "id": "soc-tec-37",
    "sectionId": 9,
    "number": 37,
    "text": "¿Qué código legal orgánico regula en el Ecuador la organización, competencias y autonomía financiera y administrativa de las provincias, cantones y parroquias?",
    "options": [
      "El Código Orgánico de Organización Territorial, Autonomía y Descentralización (COOTAD)",
      "El Código de Comercio",
      "El Código de Trabajo",
      "El Código Orgánico Integral Penal (COIP)"
    ],
    "correctIndex": 0,
    "explanation": "El COOTAD establece el marco jurídico de descentralización y competencias para todos los Gobiernos Autónomos Descentralizados (GAD) del país.",
    "skill": "Legislación Territorial Ecuatoriana",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Descentralización",
    "subtopic": "El COOTAD"
  },
  {
    "id": "soc-tec-38",
    "sectionId": 9,
    "number": 38,
    "text": "¿Cuál de las siguientes es una competencia exclusiva asignada por la Constitución y el COOTAD a los Gobiernos Autónomos Descentralizados Provinciales (Prefecturas)?",
    "options": [
      "La emisión de pasaportes y visados consulares",
      "El control del tránsito peatonal en los centros comerciales",
      "La defensa de las fronteras militares aéreas",
      "Planificar, construir y mantener el sistema de vialidad rural provincial y fomentar las actividades productivas y agropecuarias"
    ],
    "correctIndex": 3,
    "explanation": "Las Prefecturas tienen a su cargo prioritario la red de caminos vecinales y carreteras secundarias rurales que conectan las zonas agrícolas con los mercados urbanos.",
    "skill": "Competencias de los Gobiernos Provinciales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gestión Pública Descentralizada",
    "subtopic": "Competencias de las Prefecturas"
  },
  {
    "id": "soc-tec-39",
    "sectionId": 9,
    "number": 39,
    "text": "¿Cuál es una competencia exclusiva de los Gobiernos Autónomos Descentralizados Municipales o Cantonales (Alcaldías)?",
    "options": [
      "El mando de las Fuerzas Armadas del país",
      "La política monetaria y las tasas de interés bancarias",
      "Prestar los servicios públicos de agua potable, alcantarillado, depuración de aguas residuales, manejo de desechos sólidos y planificar el uso del suelo cantonal",
      "La administración de los tratados de libre comercio"
    ],
    "correctIndex": 2,
    "explanation": "Los Municipios son responsables directos del saneamiento ambiental básico, el catastro, el ordenamiento territorial cantonal y la recolección y tratamiento de basura.",
    "skill": "Competencias Municipales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gobiernos Cantonales",
    "subtopic": "Servicios Básicos y Uso de Suelo"
  },
  {
    "id": "soc-tec-40",
    "sectionId": 9,
    "number": 40,
    "text": "¿Qué instrumento técnico y participativo obligatorio de planificación pública deben elaborar los GAD para orientar el desarrollo integral y el ordenamiento territorial en su jurisdicción?",
    "options": [
      "El balance contable anual de auditoría",
      "El Plan de Desarrollo y Ordenamiento Territorial (PDOT)",
      "El censo agropecuario de exportación",
      "El mapa turístico para agencias de viajes"
    ],
    "correctIndex": 1,
    "explanation": "El PDOT articula la visión prospectiva, la zonificación territorial del suelo y la cartera de proyectos de inversión pública en cada cantón y provincia.",
    "skill": "Planificación del Desarrollo Territorial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentos de Planificación",
    "subtopic": "El PDOT"
  },
  {
    "id": "soc-tec-41",
    "sectionId": 9,
    "number": 41,
    "text": "¿Qué función cumple el 'Catastro Predial' en la administración técnica de un municipio cantonal?",
    "options": [
      "El inventario físico, jurídico y económico detallado de todos los bienes inmuebles urbanos y rurales del cantón para ordenar el suelo y liquidar impuestos prediales",
      "Controlar los precios de los productos en supermercados",
      "Monitorear las placas de los automóviles en autopistas",
      "Llevar el censo de las mascotas de la ciudad"
    ],
    "correctIndex": 0,
    "explanation": "El catastro predial georreferenciado registra la ubicación, linderos, superficie, materiales constructivos y valorización de las propiedades inmuebles.",
    "skill": "Catastro y Administración Urbana",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gestión Catastral",
    "subtopic": "Catastro Urbano y Rural"
  },
  {
    "id": "soc-tec-42",
    "sectionId": 9,
    "number": 42,
    "text": "¿Qué herramienta tecnológica digital combina bases de datos alfanuméricas con capas cartográficas vectoriales y raster para el análisis espacial y toma de decisiones territoriales?",
    "options": [
      "Una hoja de cálculo contable",
      "Un editor de gráficos de mapa de bits",
      "Un procesador de texto en línea",
      "Un Sistema de Información Geográfica (SIG o GIS)"
    ],
    "correctIndex": 3,
    "explanation": "Los SIG (como ArcGIS o QGIS) integran mapas, imágenes de satélite y tablas de atributos demográficos e hidrológicos para la planificación territorial técnica.",
    "skill": "Sistemas de Información Geográfica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Geomática y Planificación",
    "subtopic": "Sistemas de Información Geográfica (SIG)"
  },
  {
    "id": "soc-tec-43",
    "sectionId": 9,
    "number": 43,
    "text": "¿Qué tipo de mapa temático es indispensable para zonificar áreas con alto peligro de deslizamientos y remoción en masa en zonas de ladera andinas?",
    "options": [
      "Mapa de husos horarios",
      "Mapa de líneas telefónicas",
      "Mapa de pendientes y estabilidad geológica",
      "Mapa de rutas aéreas comerciales"
    ],
    "correctIndex": 2,
    "explanation": "El mapa de pendientes identifica gradientes críticas donde la inclinación del terreno y la saturación de agua facilitan derrumbes y deslaves.",
    "skill": "Cartografía de Riesgos Naturales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mapas Temáticos",
    "subtopic": "Mapa de Pendientes"
  },
  {
    "id": "soc-tec-44",
    "sectionId": 9,
    "number": 44,
    "text": "¿Cuál es la central hidroeléctrica con mayor potencia nominal instalada (1.500 MW) de la matriz energética del Ecuador?",
    "options": [
      "Central Manduriacu",
      "Central Hidroeléctrica Coca Codo Sinclair",
      "Central Paute Molino",
      "Central San Francisco"
    ],
    "correctIndex": 1,
    "explanation": "Coca Codo Sinclair aprovecha las aguas del río Coca en las provincias de Napo y Sucumbíos con una capacidad nominal de generación de 1.500 megavatios.",
    "skill": "Matriz Energética del Ecuador",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Infraestructura Energética",
    "subtopic": "Central Coca Codo Sinclair"
  },
  {
    "id": "soc-tec-45",
    "sectionId": 9,
    "number": 45,
    "text": "¿Qué complejo hidroeléctrico andino aprovecha en cascada las aguas del río Paute a través de las centrales Mazar, Molino y Sopladora?",
    "options": [
      "Complejo Daule-Peripa",
      "Proyecto Eólico Villonaco",
      "Proyecto Toachi-Pilatón",
      "Complejo Hidroeléctrico Paute"
    ],
    "correctIndex": 3,
    "explanation": "El Complejo Paute en el Austro ecuatoriano ha sido históricamente el pilar del sistema interconectado nacional mediante una cadena de embalses y turbinas en cascada.",
    "skill": "Generación Eléctrica Andina",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Energía Hidroeléctrica",
    "subtopic": "Complejo Hidroeléctrico Paute"
  },
  {
    "id": "soc-tec-46",
    "sectionId": 9,
    "number": 46,
    "text": "¿Dónde se localiza el parque eólico continental más representativo del Ecuador que genera electricidad a partir de aerogeneradores instalados a más de 2.700 msnm?",
    "options": [
      "En la península de Santa Elena",
      "En el volcán Cotopaxi",
      "En el cerro Santa Ana (Guayaquil)",
      "En el cerro Villonaco (Loja)"
    ],
    "correctIndex": 3,
    "explanation": "El Parque Eólico Villonaco en la provincia de Loja aprovecha las altas velocidades del viento en la cordillera andina para generar energía limpia no convencional.",
    "skill": "Energías Renovables No Convencionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Energía Eólica",
    "subtopic": "Parque Eólico Villonaco"
  },
  {
    "id": "soc-tec-47",
    "sectionId": 9,
    "number": 47,
    "text": "¿Qué mide la 'Huella de Carbono' en el análisis ambiental y técnico de una actividad productiva o industrial?",
    "options": [
      "El consumo de combustible en motores fuera de borda",
      "El peso del carbón vegetal comercializado en ferias",
      "La totalidad de emisiones de gases de efecto invernadero (expresadas en toneladas equivalentes de CO2) liberadas directa o indirectamente por un producto o individuo",
      "El número de árboles plantados en un vivero forestal"
    ],
    "correctIndex": 2,
    "explanation": "La huella de carbono cuantifica el impacto ambiental en el calentamiento global permitiendo fijar metas de mitigación y eficiencia energética.",
    "skill": "Gestión Ambiental y Huella Ecológica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Cambio Climático",
    "subtopic": "Huella de Carbono"
  },
  {
    "id": "soc-tec-48",
    "sectionId": 9,
    "number": 48,
    "text": "¿Qué sistema nacional público adscrito al Ministerio del Ambiente del Ecuador articula y gestiona la conservación de parques nacionales, reservas ecológicas y marinas?",
    "options": [
      "El Banco de Desarrollo del Ecuador",
      "El Sistema Nacional de Áreas Protegidas (SNAP)",
      "El Instituto Geográfico Militar",
      "La Secretaría de Gestión de Riesgos"
    ],
    "correctIndex": 1,
    "explanation": "El SNAP protege más del 20% del territorio nacional salvaguardando la megadiversidad biológica, recursos genéticos y servicios ecosistémicos del Ecuador.",
    "skill": "Conservación y Áreas Protegidas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Áreas Protegidas",
    "subtopic": "El SNAP"
  },
  {
    "id": "soc-tec-49",
    "sectionId": 9,
    "number": 49,
    "text": "¿Qué reserva marina ecuatoriana fue ampliada en 2022 con la creación de la Reserva Marina 'Hermandad', protegiendo el corredor biológico de especies migratorias hacia Costa Rica?",
    "options": [
      "Reserva Marina El Pelado",
      "Reserva Marina Galera San Francisco",
      "Reserva Marina Cantagallo",
      "Reserva Marina Galápagos"
    ],
    "correctIndex": 3,
    "explanation": "La Reserva Marina de Galápagos y la Reserva Hermandad resguardan tiburones martillo, tortugas marinas, mantarrayas y cetáceos en la cordillera submarina del Coco.",
    "skill": "Geopolítica Marina y Conservación",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Patrimonio Oceánico",
    "subtopic": "Reserva Marina Hermandad"
  },
  {
    "id": "soc-tec-50",
    "sectionId": 9,
    "number": 50,
    "text": "¿Qué servicio ecosistémico hidrológico fundamental prestan los páramos andinos ecuatorianos a las ciudades y valles interandinos?",
    "options": [
      "Filtrar el petróleo subterráneo de la cordillera",
      "Acelerar las inundaciones costeras en época lluviosa",
      "Producir madera dura para la industria mueblera",
      "Actuar como gigantescas esponjas naturales que absorben y regulan el flujo de agua dulce alimentando ríos y sistemas de agua potable"
    ],
    "correctIndex": 3,
    "explanation": "La vegetación de almohadillas, pajonales y suelos de turba del páramo retiene la humedad de neblina liberándola lentamente a los caudales de las cuencas hídricas.",
    "skill": "Servicios Ecosistémicos de los Páramos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Ecología Andina",
    "subtopic": "Regulación Hídrica en Páramos"
  },
  {
    "id": "soc-tec-51",
    "sectionId": 9,
    "number": 51,
    "text": "¿Qué diferencia técnica existe entre un 'Relleno Sanitario Técnico' y un 'Botadero a Cielo Abierto' para la disposición de desechos sólidos municipales?",
    "options": [
      "Ambos métodos tienen exactamente el mismo impacto ambiental",
      "El botadero a cielo abierto cuenta con plantas de tratamiento de lixiviados y captura de biogás",
      "El relleno sanitario técnico confina la basura en celdas impermeabilizadas con geomembranas, compacta los residuos, trata los lixiviados y mitiga el biogás metano para evitar la contaminación del suelo y acuíferos",
      "El relleno sanitario consiste en arrojar los residuos en un barranco sin control"
    ],
    "correctIndex": 2,
    "explanation": "Un relleno sanitario técnico es una obra de ingeniería ambiental diseñada para aislar los residuos y evitar que los jugos contaminantes (lixiviados) alcancen las aguas subterráneas.",
    "skill": "Ingeniería Ambiental y Gestión de Residuos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Manejo de Residuos Sólidos",
    "subtopic": "Relleno Sanitario Técnico"
  },
  {
    "id": "soc-tec-52",
    "sectionId": 9,
    "number": 52,
    "text": "¿Qué fenómeno oceánico-atmosférico caracterizado por el calentamiento anómalo de las aguas superficiales del Pacífico ecuatorial provoca lluvias torrenciales e inundaciones en la costa ecuatoriana?",
    "options": [
      "El Fenómeno de La Niña",
      "El Evento El Niño - Oscilación del Sur (ENOS)",
      "El Monzón Asiático",
      "La Corriente Polar Ártica"
    ],
    "correctIndex": 1,
    "explanation": "El fenómeno de El Niño altera la circulación atmosférica global y desata intensas precipitaciones e inundaciones en el Litoral ecuatoriano con severos daños en agricultura y vías.",
    "skill": "Climatología y Riesgos Hidrometeorológicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Fenómenos Climáticos",
    "subtopic": "El Niño - Oscilación del Sur (ENOS)"
  },
  {
    "id": "soc-tec-53",
    "sectionId": 9,
    "number": 53,
    "text": "¿Qué ley orgánica ecuatoriana garantiza el derecho de toda persona a solicitar y recibir información veraz de todas las entidades públicas e instituciones receptoras de fondos estatales?",
    "options": [
      "La Ley Orgánica de Transparencia y Acceso a la Información Pública (LOTAIP)",
      "La Ley de Hidrocarburos",
      "La Ley Notarial",
      "La Ley de Compañías"
    ],
    "correctIndex": 0,
    "explanation": "La LOTAIP consagra la rendición de cuentas pública mediante portales web de transparencia activa y el procedimiento de acceso ciudadano a expedientes administrativos.",
    "skill": "Legislación de Acceso a la Información",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Transparencia Activa",
    "subtopic": "La LOTAIP"
  },
  {
    "id": "soc-tec-54",
    "sectionId": 9,
    "number": 54,
    "text": "¿Qué ley aprobada en el Ecuador en 2021 establece los principios de licitud, consentimiento, lealtad y seguridad en el tratamiento y almacenamiento digital de datos de personas naturales?",
    "options": [
      "La Ley de Minería",
      "La Ley de Tránsito",
      "La Ley Orgánica de Protección de Datos Personales (LOPDP)",
      "La Ley de Registro Civil"
    ],
    "correctIndex": 2,
    "explanation": "La LOPDP protege el derecho constitucional a la privacidad de datos personales y sanciona el uso no autorizado de bases de datos por empresas o entidades públicas.",
    "skill": "Protección de Datos y Ciberderechos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Ciudadanía Digital",
    "subtopic": "La LOPDP"
  },
  {
    "id": "soc-tec-55",
    "sectionId": 9,
    "number": 55,
    "text": "¿Qué validez jurídica otorga la Ley de Comercio Electrónico y Mensajes de Datos del Ecuador a los documentos suscritos mediante Firma Electrónica certificada?",
    "options": [
      "Validez temporal que caduca cada 24 horas",
      "Ninguna validez jurídica en trámites judiciales",
      "Exactamente la misma validez, eficacia probatoria y efectos jurídicos que la firma manuscrita estampada en papel",
      "Únicamente validez para trámites bancarios de menos de diez dólares"
    ],
    "correctIndex": 2,
    "explanation": "La firma electrónica certificada vincula matemáticamente la identidad del firmante con el mensaje digital, gozando de pleno reconocimiento legal en actos públicos y privados.",
    "skill": "Comercio Electrónico y Firma Digital",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gobierno Electrónico",
    "subtopic": "Firma Electrónica Certificada"
  },
  {
    "id": "soc-tec-56",
    "sectionId": 9,
    "number": 56,
    "text": "¿En qué consiste la política estatal de 'Datos Abiertos' (Open Data) promovida en las administraciones públicas modernas?",
    "options": [
      "En publicar las contraseñas personales de los empleados públicos",
      "En poner a disposición ciudadana bases de datos públicas en formatos digitales abiertos, reutilizables y sin restricciones de patentes para fomentar la innovación y la fiscalización",
      "En vender los archivos históricos a empresas privadas extranjeras",
      "En eliminar los respaldos de seguridad de los servidores del Estado"
    ],
    "correctIndex": 1,
    "explanation": "Los datos abiertos permiten que investigadores, periodistas y ciudadanos procesen directamente información presupuestaria, de salud o transporte en formatos como CSV o JSON.",
    "skill": "Gobierno Abierto e Interoperabilidad",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gobierno Digital",
    "subtopic": "Datos Abiertos (Open Data)"
  },
  {
    "id": "soc-tec-57",
    "sectionId": 9,
    "number": 57,
    "text": "¿Qué modalidad de ciberataque consiste en el envío de correos o mensajes engañosos suplantando la identidad de bancos o entidades oficiales para robar claves de acceso bancarias?",
    "options": [
      "Minería de bitcoins",
      "Formateo de bajo nivel",
      "Desfragmentación de disco",
      "Phishing (suplantación de identidad)"
    ],
    "correctIndex": 3,
    "explanation": "El phishing utiliza ingeniería social y sitios web clonados fraudulentos para inducir a la víctima a ingresar contraseñas, números de tarjeta o pines de seguridad.",
    "skill": "Ciberseguridad y Prevención Digital",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Seguridad de la Información",
    "subtopic": "Ataques de Phishing"
  },
  {
    "id": "soc-tec-58",
    "sectionId": 9,
    "number": 58,
    "text": "¿Qué técnica metodológica de verificación informativa ('Fact-Checking') es crucial para evaluar la veracidad de publicaciones virales en redes sociales?",
    "options": [
      "Creer en el contenido si tiene miles de comentarios anónimos",
      "Bloquear la cuenta del usuario sin comprobar los datos",
      "Compartir inmediatamente la noticia sin leerla completa",
      "Contrastar las afirmaciones con fuentes oficiales primarias, verificar la fecha y contexto original y utilizar herramientas de búsqueda inversa de imágenes"
    ],
    "correctIndex": 3,
    "explanation": "El fact-checking previene la desinformación verificando metadatos de imágenes, citación documental y rigor de las afirmaciones frente a fuentes primarias fiables.",
    "skill": "Evaluación Crítica de Fuentes Digitales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Alfabetización Mediática",
    "subtopic": "Verificación de Información (Fact-Checking)"
  },
  {
    "id": "soc-tec-59",
    "sectionId": 9,
    "number": 59,
    "text": "¿Qué instrumento geodésico satelital global permite a los técnicos cartógrafos determinar coordenadas tridimensionales milimétricas sobre el terreno?",
    "options": [
      "Brújula de bolsillo",
      "Barómetro de mercurio",
      "Receptor GNSS / GPS geodésico diferencial",
      "Odómetro de rueda"
    ],
    "correctIndex": 2,
    "explanation": "Los sistemas GNSS de doble frecuencia con corrección diferencial RTK brindan posicionamiento de alta precisión para levantamientos topográficos y catastrales.",
    "skill": "Topografía y Geodesia Satelital",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Geomática",
    "subtopic": "Sistemas GNSS / GPS"
  },
  {
    "id": "soc-tec-60",
    "sectionId": 9,
    "number": 60,
    "text": "¿Cuál es el principal gas de efecto invernadero emitido por la descomposición anaerobia de materia orgánica en los vertederos municipales de basura?",
    "options": [
      "Oxígeno molecular (O2)",
      "Gas Metano (CH4)",
      "Gas Helio (He)",
      "Argón (Ar)"
    ],
    "correctIndex": 1,
    "explanation": "El metano (CH4) es un potente gas de efecto invernadero con un potencial de calentamiento global más de 25 veces superior al del dióxido de carbono en un horizonte de 100 años.",
    "skill": "Química Ambiental y Emisiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gases de Efecto Invernadero",
    "subtopic": "Gas Metano en Rellenos"
  },
  {
    "id": "soc-tec-61",
    "sectionId": 9,
    "number": 61,
    "text": "¿Cómo se denomina la tasa que mide el porcentaje de personas de 15 años y más que no saben leer ni escribir en una determinada población?",
    "options": [
      "Tasa de Analfabetismo",
      "Tasa de escolaridad terciaria",
      "Tasa de fecundidad conyugal",
      "Tasa de mortalidad"
    ],
    "correctIndex": 0,
    "explanation": "La tasa de analfabetismo es un indicador clave de rezago educativo que orienta las campañas de alfabetización y educación básica para jóvenes y adultos.",
    "skill": "Estadística Educativa",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Indicadores Educativos",
    "subtopic": "Tasa de Analfabetismo"
  },
  {
    "id": "soc-tec-62",
    "sectionId": 9,
    "number": 62,
    "text": "¿Qué indicador demográfico refleja el número de defunciones de niños menores de un año por cada mil nacidos vivos durante un año determinado?",
    "options": [
      "Tasa Bruta de Reproducción",
      "Esperanza de Vida al Retiro",
      "Tasa de Morbilidad General",
      "Tasa de Mortalidad Infantil"
    ],
    "correctIndex": 3,
    "explanation": "La tasa de mortalidad infantil es uno de los indicadores más sensibles del nivel de desarrollo socioeconómico, calidad de atención médica perinatal y saneamiento básico de un país.",
    "skill": "Salud Pública y Demografía",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Indicadores Sanitarios",
    "subtopic": "Mortalidad Infantil"
  },
  {
    "id": "soc-tec-63",
    "sectionId": 9,
    "number": 63,
    "text": "¿En qué consiste el cálculo de la 'Tasa de Dependencia Demográfica' de una sociedad?",
    "options": [
      "La proporción de estudiantes que dependen de transporte escolar privado",
      "El porcentaje de importaciones procedentes de un solo país socio",
      "La relación entre el número de personas dependientes (menores de 15 años y mayores de 64 años) respecto a la población potencialmente activa (de 15 a 64 años)",
      "El número de ciudadanos inscritos en programas de subsidio eléctrico"
    ],
    "correctIndex": 2,
    "explanation": "La tasa de dependencia indica cuántas personas inactivas por edad deben ser sostenidas económicamente por cada cien personas en edad productiva laboral.",
    "skill": "Estructura por Edad de la Población",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Demografía Social",
    "subtopic": "Tasa de Dependencia"
  },
  {
    "id": "soc-tec-64",
    "sectionId": 9,
    "number": 64,
    "text": "¿Qué organismo público técnico descentralizado del Ecuador lidera las políticas nacionales de gestión de riesgos, alertas tempranas y respuesta ante emergencias y desastres?",
    "options": [
      "El Instituto Nacional de Meteorología e Hidrología",
      "La Secretaría de Gestión de Riesgos (SGR)",
      "El Servicio Nacional de Aduana del Ecuador",
      "La Superintendencia de Bancos"
    ],
    "correctIndex": 1,
    "explanation": "La Secretaría de Gestión de Riesgos coordina los Comités de Operaciones de Emergencia (COE) a escala cantonal, provincial y nacional ante sismos, erupciones e inundaciones.",
    "skill": "Gestión Pública del Riesgo",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instituciones de Prevención",
    "subtopic": "Secretaría de Gestión de Riesgos"
  },
  {
    "id": "soc-tec-65",
    "sectionId": 9,
    "number": 65,
    "text": "¿Qué escala sismológica técnica mide la energía liberada en el foco o hipocentro de un terremoto de forma cuantitativa e instrumental?",
    "options": [
      "Escala de Magnitud de Momento (Mw) / Richter",
      "Escala de Beaufort",
      "Escala de Mohs",
      "Escala de Mercalli Modificada"
    ],
    "correctIndex": 0,
    "explanation": "La magnitud sismológica (como la escala de momento sísmico Mw) cuantifica la energía física del sismo, a diferencia de la escala de Mercalli que evalúa la intensidad destructiva superficial.",
    "skill": "Sismología y Medición de Fenómenos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sismología",
    "subtopic": "Magnitud vs Intensidad Sísmica"
  },
  {
    "id": "soc-tec-66",
    "sectionId": 9,
    "number": 66,
    "text": "¿Qué evalúa la Escala de Intensidad de Mercalli Modificada (I al XII) durante un sismo?",
    "options": [
      "La velocidad de propagación de las ondas P en el manto terrestre",
      "El costo monetario total de las pérdidas aseguradas",
      "La profundidad exacta del epicentro en kilómetros",
      "Los efectos perceptibles, grado de sacudimiento y daños causados en las construcciones y en las personas en un lugar determinado"
    ],
    "correctIndex": 3,
    "explanation": "La intensidad Mercalli es subjetiva y descriptiva: varía según la distancia al epicentro, el tipo de suelo y la calidad sismorresistente de las edificaciones.",
    "skill": "Evaluación de Daños Sísmicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Geología y Prevención",
    "subtopic": "Escala de Mercalli"
  },
  {
    "id": "soc-tec-67",
    "sectionId": 9,
    "number": 67,
    "text": "¿Cuál es el flujo piroclástico o lahares volcánicos más recurrentes y peligrosos asociados a erupciones en nevados como el Cotopaxi?",
    "options": [
      "Sismos submarinos que generan tsunamis de agua dulce",
      "Nubes de vapor de agua sin sólidos",
      "Flujos gigantescos de lodo, rocas, agua de deshielo y ceniza que descienden velozmente por los cauces de los ríos",
      "Lluvias de lava líquida de baja viscosidad en las llanuras"
    ],
    "correctIndex": 2,
    "explanation": "El contacto del magma caliente con los glaciares nevados derrite miles de metros cúbicos de hielo, formando lahares devastadores que bajan por los ríos Pita, Santa Clara y Cutuchi.",
    "skill": "Vulcanología y Zonas de Amenaza",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Amenaza Volcánica",
    "subtopic": "Lahares del Cotopaxi"
  },
  {
    "id": "soc-tec-68",
    "sectionId": 9,
    "number": 68,
    "text": "¿Qué técnica de conservación de suelos agrícolas en laderas andinas previene activamente la erosión hídrica superficial provocada por la lluvia?",
    "options": [
      "La quema sistemática de vegetación de ladera",
      "El trazado de curvas de nivel, terrazas de cultivo y barreras vivas de vegetación",
      "El arado en pendiente descendente a favor de la caída de agua",
      "La tala total de los árboles del bosque protector"
    ],
    "correctIndex": 1,
    "explanation": "Sembrar siguiendo las curvas de nivel y construir terrazas frena la velocidad de escorrentía del agua, facilitando la infiltración y reteniendo la capa fértil del suelo.",
    "skill": "Manejo Técnico de Cuencas y Suelos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Conservación de Suelos",
    "subtopic": "Curvas de Nivel y Terrazas"
  },
  {
    "id": "soc-tec-69",
    "sectionId": 9,
    "number": 69,
    "text": "¿Cómo se denomina al proceso de degradación ecológica y pérdida de cobertura forestal originado por la expansión de la frontera agrícola, tala rasa o minería ilegal?",
    "options": [
      "Deforestación",
      "Desertificación eólica",
      "Salinización marina",
      "Eutrofización"
    ],
    "correctIndex": 0,
    "explanation": "La deforestación reduce el hábitat de fauna, libera carbono acumulado a la atmósfera y deteriora el ciclo local de lluvias y evapotranspiración.",
    "skill": "Ecología y Recursos Forestales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Impacto Ambiental",
    "subtopic": "Deforestación"
  },
  {
    "id": "soc-tec-70",
    "sectionId": 9,
    "number": 70,
    "text": "¿Qué institución estatal pública es responsable del control técnico, catastro y concesión de permisos mineros y de fiscalizar el cumplimiento ambiental de las explotaciones en Ecuador?",
    "options": [
      "La Corporación Financiera Nacional",
      "El Instituto Nacional de Donación de Órganos",
      "El Ministerio de Telecomunicaciones",
      "La Agencia de Regulación y Control de Energía y Recursos Naturales No Renovables (ARCERNNR)"
    ],
    "correctIndex": 3,
    "explanation": "La agencia de regulación del sector hidrocarburos y minería vigila las fases de prospección, explotación y beneficio fiscalizando regalías y normas técnicas.",
    "skill": "Instituciones Regulatorias de Recursos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Regulación Minera",
    "subtopic": "La Agencia de Regulación Minera"
  },
  {
    "id": "soc-tec-71",
    "sectionId": 9,
    "number": 71,
    "text": "¿Qué impuesto fiscal de carácter progresivo administra el SRI gravando los ingresos y utilidades netas anuales de personas naturales y sociedades?",
    "options": [
      "El Arancel Ad Valorem",
      "El Impuesto al Valor Agregado (IVA)",
      "El Impuesto a la Renta (IR)",
      "El Impuesto a los Consumos Especiales (ICE)"
    ],
    "correctIndex": 2,
    "explanation": "El Impuesto a la Renta se liquida anualmente sobre la base imponible neta y aplica tarifas progresivas donde quienes obtienen mayores ingresos pagan porcentajes superiores.",
    "skill": "Tributación y Finanzas Públicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistema Tributario Ecuatoriano",
    "subtopic": "Impuesto a la Renta"
  },
  {
    "id": "soc-tec-72",
    "sectionId": 9,
    "number": 72,
    "text": "¿Qué tipo de impuesto es el Impuesto al Valor Agregado (IVA) que se cobra en la transferencia e importación de bienes muebles y en la prestación de servicios?",
    "options": [
      "Un impuesto patrimonial",
      "Un impuesto indirecto al consumo",
      "Un impuesto directo al patrimonio inmobiliario",
      "Una tasa municipal de rodaje"
    ],
    "correctIndex": 1,
    "explanation": "El IVA es un impuesto indirecto porque grava el gasto y consumo final independientemente del nivel patrimonial específico del comprador.",
    "skill": "Impuestos Indirectos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Régimen Tributario",
    "subtopic": "El IVA"
  },
  {
    "id": "soc-tec-73",
    "sectionId": 9,
    "number": 73,
    "text": "¿Qué gravamen fiscal se aplica a la salida física o transferencia de divisas monetarias desde el territorio ecuatoriano hacia el extranjero?",
    "options": [
      "El Peaje de Autopista",
      "La Tasa Aeroportuaria",
      "El Timbre Postal Internacional",
      "El Impuesto a la Salida de Divisas (ISD)"
    ],
    "correctIndex": 3,
    "explanation": "El ISD busca desincentivar la fuga de capitales en la economía dolarizada ecuatoriana y recaudar recursos fiscales sobre flujos monetarios transfronterizos.",
    "skill": "Control de Flujos Monetarios",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Política Tributaria",
    "subtopic": "Impuesto a la Salida de Divisas"
  },
  {
    "id": "soc-tec-74",
    "sectionId": 9,
    "number": 74,
    "text": "¿Qué principio tributario constitucional establece que el sistema tributario debe promover la equidad y que la carga impositiva recaiga en mayor medida sobre los contribuyentes con mayor capacidad económica?",
    "options": [
      "Principio de Presunción Legal",
      "Principio de Extradición",
      "Principio de Confidencialidad",
      "Principio de Progresividad Tributaria"
    ],
    "correctIndex": 3,
    "explanation": "El artículo 300 de la Constitución prescribe que el régimen tributario se regirá por los principios de generalidad, progresividad, eficiencia, simplicidad administrativa, irretroactividad, equidad, transparencia y suficiencia recaudatoria.",
    "skill": "Principios Constitucionales Tributarios",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Derecho Tributario",
    "subtopic": "Progresividad Tributaria"
  },
  {
    "id": "soc-tec-75",
    "sectionId": 9,
    "number": 75,
    "text": "¿Qué documento presupuestario anual remitido por el Ejecutivo a la Asamblea Nacional detalla todos los ingresos fiscales proyectados y los gastos autorizados del Estado para el año fiscal?",
    "options": [
      "El Plan de Obras Públicas Cantonal",
      "El Balance Comercial del Banco Central",
      "El Presupuesto General del Estado (PGE)",
      "El Índice de Precios al Productor"
    ],
    "correctIndex": 2,
    "explanation": "El PGE consolida los recursos del gobierno central para educación, salud, seguridad, defensa, servicio de la deuda e inversión pública.",
    "skill": "Finanzas Públicas y Presupuesto Estatal",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gasto Público",
    "subtopic": "El Presupuesto General del Estado"
  },
  {
    "id": "soc-tec-76",
    "sectionId": 9,
    "number": 76,
    "text": "¿Qué ocurre cuando en la liquidación presupuestaria del Estado los gastos totales devengados superan a los ingresos corrientes y de capital recaudados?",
    "options": [
      "Se genera un superávit fiscal",
      "Se genera un Déficit Fiscal que exige financiamiento vía endeudamiento o emisión de bonos",
      "Las reservas monetarias se duplican automáticamente",
      "El sueldo de los funcionarios se extingue"
    ],
    "correctIndex": 1,
    "explanation": "El déficit fiscal refleja una brecha presupuestaria negativa que obliga al Estado a recurrir a créditos multilaterales o emisión de deuda pública para cubrir sus compromisos.",
    "skill": "Equilibrio Presupuestario",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Macroeconomía Fiscal",
    "subtopic": "Déficit Fiscal"
  },
  {
    "id": "soc-tec-77",
    "sectionId": 9,
    "number": 77,
    "text": "¿Qué institución pública autónoma del Ecuador audita la legalidad del uso de los recursos públicos y determina responsabilidades civiles, administrativas o indicios de responsabilidad penal?",
    "options": [
      "La Contraloría General del Estado (CGE)",
      "El Ministerio de Trabajo",
      "El Consejo de la Judicatura",
      "La Superintendencia de Compañías"
    ],
    "correctIndex": 0,
    "explanation": "La CGE es el máximo organismo de control fiscal externo del uso de bienes y fondos del Estado en todas las instituciones y empresas públicas.",
    "skill": "Control Fiscal del Estado",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Control Gubernamental",
    "subtopic": "Contraloría General del Estado"
  },
  {
    "id": "soc-tec-78",
    "sectionId": 9,
    "number": 78,
    "text": "¿Qué plataforma tecnológica digital del Servicio Nacional de Contratación Pública (SERCOP) gestiona las compras y licitaciones de bienes y obras del Estado ecuatoriano?",
    "options": [
      "El Sistema Integrado de Policía",
      "El Registro de la Propiedad en Línea",
      "El Sistema de Rentas Internas",
      "El Sistema Oficial de Contratación Pública (SOCE / Portal Compras Públicas)"
    ],
    "correctIndex": 3,
    "explanation": "El SERCOP administra el portal de compras públicas para transparentar subastas inversas, cotizaciones, licitaciones y consultorías de todas las entidades estatales.",
    "skill": "Contratación Pública y Compras Estatales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gestión Pública Digital",
    "subtopic": "El Sistema del SERCOP"
  },
  {
    "id": "soc-tec-79",
    "sectionId": 9,
    "number": 79,
    "text": "¿Qué entidad técnica del Estado ecuatoriano monitorea permanentemente las condiciones meteorológicas, lluvias y caudales fluviales emitiendo alertas hidrometeorológicas tempranas?",
    "options": [
      "El Ministerio de Turismo",
      "El Instituto Nacional de Meteorología e Hidrología (INAMHI)",
      "El Servicio Geológico Británico",
      "El Instituto Nacional de Pesca"
    ],
    "correctIndex": 1,
    "explanation": "El INAMHI opera la red de estaciones meteorológicas y satelitales del país pronosticando frentes fríos, sequías, lluvias extremas y radiación ultravioleta.",
    "skill": "Meteorología e Hidrología Oficial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Monitoreo Hidrometeorológico",
    "subtopic": "El INAMHI"
  },
  {
    "id": "soc-tec-80",
    "sectionId": 9,
    "number": 80,
    "text": "¿Qué instituto técnico de la Escuela Politécnica Nacional es el encargado oficial de la vigilancia y monitoreo permanente de la actividad sísmica y volcánica en todo el Ecuador?",
    "options": [
      "El Instituto Geográfico Militar (IGM)",
      "El Instituto Geofísico de la Escuela Politécnica Nacional (IG-EPN)",
      "El Instituto Oceanográfico y Antártico de la Armada (INOCAR)",
      "El Ministerio de Minería"
    ],
    "correctIndex": 1,
    "explanation": "El IG-EPN opera la Red Sísmica Nacional y la red de monitoreo volcánico (sismógrafos, cámaras térmicas y sensores de gas) proporcionando informes científicos en tiempo real.",
    "skill": "Monitoreo Geofísico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Geofísica y Prevención",
    "subtopic": "El Instituto Geofísico (IG-EPN)"
  },
  {
    "id": "soc-tec-81",
    "sectionId": 9,
    "number": 81,
    "text": "¿Qué instituto técnico militar de las Fuerzas Armadas elabora la cartografía oficial del territorio nacional y custodia la frontera territorial mediante hitos geodésicos?",
    "options": [
      "El Instituto Geográfico Militar (IGM)",
      "El Instituto Espacial Ecuatoriano",
      "La Dirección General de Aviación Civil",
      "El Instituto Nacional de Patrimonio Cultural"
    ],
    "correctIndex": 0,
    "explanation": "El IGM es el organismo cartográfico oficial del Estado responsable del levantamiento de la carta topográfica nacional y la fotografía aérea métrica del país.",
    "skill": "Cartografía Oficial del Estado",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Cartografía y Geodesia",
    "subtopic": "El Instituto Geográfico Militar (IGM)"
  },
  {
    "id": "soc-tec-82",
    "sectionId": 9,
    "number": 82,
    "text": "¿Qué instituto científico de la Armada del Ecuador monitorea las condiciones oceanográficas del mar territorial y emite las alertas oficiales de tsunami para el litoral ecuatoriano?",
    "options": [
      "El Servicio de Vigilancia Costera Municipal",
      "El Ministerio de Ambiente",
      "El Instituto Oceanográfico y Antártico de la Armada (INOCAR)",
      "La Dirección de Parques Nacionales"
    ],
    "correctIndex": 2,
    "explanation": "El INOCAR es el centro nacional de alerta de tsunamis en Ecuador, analizando boyas de presión profunda y mareógrafos frente a eventos sísmicos submarinos.",
    "skill": "Oceanografía y Alertas de Tsunami",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Riesgos Marítimos",
    "subtopic": "El INOCAR y la Alerta de Tsunami"
  },
  {
    "id": "soc-tec-83",
    "sectionId": 9,
    "number": 83,
    "text": "¿Cuál es la principal ventaja técnica de una imagen satelital multiespectral (como las de los satélites Sentinel o Landsat) frente a una fotografía aérea óptica convencional?",
    "options": [
      "Que pesa menos de un kilobyte en memoria",
      "Que no requiere computadoras para visualizarse",
      "Que registra información en bandas del espectro electromagnético invisibles al ojo humano (infrarrojo cercano, térmico), permitiendo calcular índices de vegetación (NDVI) y humedad del suelo",
      "Que sólo funciona durante la noche"
    ],
    "correctIndex": 2,
    "explanation": "La teledetección multiespectral permite evaluar el vigor biológico vegetal, estrés hídrico de cultivos y contenido de minerales mediante bandas espectrales infrarrojas.",
    "skill": "Teledetección Satelital y Sensores Remotos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Geomática Aplicada",
    "subtopic": "Imágenes Satelitales Multiespectrales"
  },
  {
    "id": "soc-tec-84",
    "sectionId": 9,
    "number": 84,
    "text": "¿Qué índice espectral estandarizado (NDVI) se utiliza habitualmente en teledetección para evaluar la salud, vigor y densidad de la cubierta vegetal a partir de reflectancias satelitales?",
    "options": [
      "Índice de Precios al Productor",
      "Índice de Vegetación de Diferencia Normalizada (NDVI)",
      "Índice de Densidad Poblacional",
      "Índice de Desviación Típica"
    ],
    "correctIndex": 1,
    "explanation": "El NDVI contrasta la alta reflectancia de las hojas vivas en el infrarrojo cercano (NIR) con la absorción en la banda roja (RED), oscilando entre -1 y +1.",
    "skill": "Teledetección Agrícola y Forestal",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Índices de Teledetección",
    "subtopic": "El Índice NDVI"
  },
  {
    "id": "soc-tec-85",
    "sectionId": 9,
    "number": 85,
    "text": "¿Qué tipo de energía alternativa limpia aprovecha el calor natural del interior de la corteza terrestre en zonas de volcanes activos para mover turbinas generadoras de vapor?",
    "options": [
      "Energía geotérmica",
      "Energía nuclear de fisión",
      "Energía eólica costera",
      "Energía mareomotriz"
    ],
    "correctIndex": 0,
    "explanation": "La energía geotérmica aprovecha reservorios subterráneos de agua y vapor a alta temperatura para generación eléctrica continua con mínima huella de carbono.",
    "skill": "Energías Limpias y Geotermia",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Transición Energética",
    "subtopic": "Energía Geotérmica"
  },
  {
    "id": "soc-tec-86",
    "sectionId": 9,
    "number": 86,
    "text": "¿Cuál es el principal combustible vehicular de origen fósil que genera mayores concentraciones de material particulado fino (PM2.5) y óxidos de nitrógeno (NOx) perjudiciales para la salud urbana?",
    "options": [
      "Etanol de caña de azúcar",
      "Hidrógeno verde",
      "Gas natural comprimido",
      "Diésel fósil de bajo cetano"
    ],
    "correctIndex": 3,
    "explanation": "Los motores diésel pesados sin filtros de partículas DPF son la principal fuente de partículas finas respirables que causan afecciones cardiorrespiratorias en ciudades densas.",
    "skill": "Calidad del Aire y Emisiones Vehiculares",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Contaminación Urbana",
    "subtopic": "Emisiones de Diésel y PM2.5"
  },
  {
    "id": "soc-tec-87",
    "sectionId": 9,
    "number": 87,
    "text": "¿Qué proceso de tratamiento de aguas residuales urbanas remueve sólidos gruesos y grasas mediante rejillas, desarenadores y trampas mecánicas antes de la fase biológica?",
    "options": [
      "Osmosis inversa",
      "Tratamiento terciario avanzado",
      "Tratamiento preliminar o pretratamiento físico",
      "Desinfección con radiación UV"
    ],
    "correctIndex": 2,
    "explanation": "El pretratamiento protege las bombas y reactores biológicos de la planta eliminando ramas, plásticos, arenas y arenas que desgastarían los equipos mecánicos.",
    "skill": "Saneamiento y Tratamiento de Aguas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Ingeniería Sanitaria",
    "subtopic": "Pretratamiento de Aguas Servidas"
  },
  {
    "id": "soc-tec-88",
    "sectionId": 9,
    "number": 88,
    "text": "¿En qué consiste la etapa de 'Tratamiento Secundario Biológico' en una Planta de Tratamiento de Aguas Residuales (PTAR)?",
    "options": [
      "En evaporar el agua residual mediante fuego directo",
      "En utilizar microorganismos (bacterias aerobias o anaerobias) en lodos activados o filtros biológicos para degradar y consumir la materia orgánica disuelta",
      "En añadir grandes cantidades de arena de playa",
      "En congelar los residuos para luego triturarlos"
    ],
    "correctIndex": 1,
    "explanation": "El tratamiento secundario biológico reduce sustancialmente la Demanda Bioquímica de Oxígeno (DBO5) del agua servida antes de su vertido a los ríos.",
    "skill": "Tratamiento Biológico de Efluentes",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Saneamiento Ambiental",
    "subtopic": "Tratamiento Secundario y Lodos Activados"
  },
  {
    "id": "soc-tec-89",
    "sectionId": 9,
    "number": 89,
    "text": "¿Qué parámetro de laboratorio mide la cantidad de oxígeno que los microorganismos consumen para degradar la materia orgánica contenida en una muestra de agua?",
    "options": [
      "La Demanda Bioquímica de Oxígeno (DBO5)",
      "La conductividad eléctrica específica",
      "El índice de refracción óptica",
      "El pH de la solución"
    ],
    "correctIndex": 0,
    "explanation": "La DBO5 a 20 °C durante 5 días es el indicador universal para determinar el nivel de contaminación orgánica de efluentes domésticos e industriales.",
    "skill": "Parámetros de Calidad del Agua",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Química del Agua",
    "subtopic": "Demanda Bioquímica de Oxígeno (DBO5)"
  },
  {
    "id": "soc-tec-90",
    "sectionId": 9,
    "number": 90,
    "text": "¿Qué fenómeno de contaminación acuática se produce cuando el exceso de nitrógeno y fósforo (procedentes de fertilizantes o detergentes) provoca la proliferación masiva de algas y agota el oxígeno en lagunas y esteros?",
    "options": [
      "Salinización salobre",
      "Condensación adiabática",
      "Lixiviación ácida",
      "Eutrofización o eutrofia"
    ],
    "correctIndex": 3,
    "explanation": "La eutrofización asfixia la fauna acuática (anoxia) y bloquea la penetración de luz solar provocando la muerte masiva de peces en cuerpos de agua estancados.",
    "skill": "Contaminación de Aguas y Eutrofización",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Ecología Acuática",
    "subtopic": "Eutrofización"
  },
  {
    "id": "soc-tec-91",
    "sectionId": 9,
    "number": 91,
    "text": "¿Cuál es el objetivo principal del Estudio de Impacto Ambiental (EsIA) que la legislación ecuatoriana exige previo a autorizar obras civiles, viales o petroleras?",
    "options": [
      "Establecer las multas tributarias automáticas",
      "Determinar el costo de las primas de seguros comerciales",
      "Identificar, predecir y valorar los impactos socioambientales potenciales de la obra y diseñar un Plan de Manejo Ambiental (PMA) con medidas de mitigación y compensación",
      "Contratar el personal administrativo de la empresa"
    ],
    "correctIndex": 2,
    "explanation": "El EsIA y su Plan de Manejo Ambiental garantizan el cumplimiento de normas ambientales y minimizan afectaciones negativas a comunidades y ecosistemas.",
    "skill": "Evaluación de Impacto Ambiental",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gestión Ambiental Pública",
    "subtopic": "El Estudio de Impacto Ambiental (EsIA)"
  },
  {
    "id": "soc-tec-92",
    "sectionId": 9,
    "number": 92,
    "text": "¿En qué consiste la 'Consulta Previa, Libre e Informada' que la Constitución del Ecuador y el Convenio 169 de la OIT garantizan a las comunas, comunidades y nacionalidades indígenas?",
    "options": [
      "En un examen de aptitud académica obligatorio",
      "En un proceso de consulta de buena fe sobre planes y programas de prospección, explotación y comercialización de recursos no renovables que se encuentren en sus tierras ancestrales",
      "En el pago de boletos para asambleas provinciales",
      "En una encuesta estadística telefónica anónima"
    ],
    "correctIndex": 1,
    "explanation": "La consulta previa es un derecho colectivo fundamental que obliga al Estado a informar oportunamente y dialogar con los pueblos indígenas sobre proyectos que impacten sus territorios ancestrales.",
    "skill": "Derechos Colectivos y Convenio 169 OIT",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Derechos Colectivos",
    "subtopic": "Consulta Previa, Libre e Informada"
  },
  {
    "id": "soc-tec-93",
    "sectionId": 9,
    "number": 93,
    "text": "¿Qué principio ambiental universal establece que la falta de certeza científica absoluta no debe utilizarse como razón para postergar la adopción de medidas eficaces cuando exista peligro de daño grave o irreversible al ecosistema?",
    "options": [
      "El Principio Precautorio o de Precaución",
      "El Principio de Irretroactividad Penal",
      "El Principio de Presunción de Inocencia",
      "El Principio de Libre Competencia"
    ],
    "correctIndex": 0,
    "explanation": "El principio precautorio exige prevenir y restringir actividades riesgosas para el medio ambiente aun cuando no exista consenso científico concluyente sobre la magnitud del daño.",
    "skill": "Derecho y Principios Ambientales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Legislación Ambiental",
    "subtopic": "Principio Precautorio"
  },
  {
    "id": "soc-tec-94",
    "sectionId": 9,
    "number": 94,
    "text": "¿Qué principio ambiental consagra que la persona o empresa que genera contaminación ambiental está jurídicamente obligada a asumir los costos integrales de su reparación y remediación?",
    "options": [
      "El Principio de Celeridad Procesal",
      "El Principio de Cosa Juzgada",
      "El Principio de Buena Fe",
      "El Principio de 'Quien Contamina Paga' o Responsabilidad Objetiva Ambiental"
    ],
    "correctIndex": 3,
    "explanation": "El principio de internalización de costos ambientales responsabiliza civil y económicamente al causante de daños ecológicos por la restauración del daño producido.",
    "skill": "Responsabilidad Ambiental Legal",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Derecho Ecológico",
    "subtopic": "Quien Contamina Paga"
  },
  {
    "id": "soc-tec-95",
    "sectionId": 9,
    "number": 95,
    "text": "¿Qué tipo de energía renovable aprovecha el poder cinético del flujo y reflujo de las mareas oceánicas en zonas costeras para mover turbinas generadoras sumergidas?",
    "options": [
      "Energía eólica continental",
      "Energía solar fotovoltaica",
      "Energía mareomotriz",
      "Energía de biomasa seca"
    ],
    "correctIndex": 2,
    "explanation": "La energía mareomotriz aprovecha los desniveles oceánicos provocados por la atracción gravitatoria de la Luna y el Sol para generar electricidad predecible.",
    "skill": "Energía Marina Renovable",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Energías Alternativas",
    "subtopic": "Energía Mareomotriz"
  },
  {
    "id": "soc-tec-96",
    "sectionId": 9,
    "number": 96,
    "text": "¿Cuál es el propósito técnico de construir 'Gaviones' (cajas de malla de alambre galvanizado rellenas de piedras) en las orillas de ríos de montaña?",
    "options": [
      "Servir de refugio exclusivo para aves migratorias",
      "Estabilizar taludes fluviales, disipar la energía de la corriente y prevenir la socavación y desbordamientos del río",
      "Aumentar la salinidad del agua dulce",
      "Impedir el paso de embarcaciones medianas"
    ],
    "correctIndex": 1,
    "explanation": "Los muros de gaviones son estructuras flexibles y drenantes de ingeniería hidráulica que protegen riberas y puentes contra la erosión fluvial.",
    "skill": "Obras Hidráulicas de Mitigación",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Control de Erosión Fluvial",
    "subtopic": "Muros de Gaviones"
  },
  {
    "id": "soc-tec-97",
    "sectionId": 9,
    "number": 97,
    "text": "¿Qué instrumento normativo técnico cantonal establece la altura máxima permitida de los edificios, los retiros frontales y la densidad habitacional por hectárea?",
    "options": [
      "El Reglamento de Elecciones Barriales",
      "El Código Penal Militar",
      "El Balance del Banco del Pacífico",
      "El Plan de Uso y Gestión de Suelo (PUGS) y las Ordenanzas Urbanísticas Cantonales"
    ],
    "correctIndex": 3,
    "explanation": "El PUGS fija las normas de edificación, coeficientes de ocupación del suelo (COS) y coeficientes de utilización del suelo (CUS) para el crecimiento urbano ordenado.",
    "skill": "Normativa Urbanística y Uso de Suelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Planificación Urbana",
    "subtopic": "Plan de Uso y Gestión de Suelo (PUGS)"
  },
  {
    "id": "soc-tec-98",
    "sectionId": 9,
    "number": 98,
    "text": "¿Qué define el Coeficiente de Ocupación del Suelo (COS) en una normativa municipal de edificación?",
    "options": [
      "El número total de estacionamientos subterráneos",
      "La cantidad de agua potable consumida por metro cuadrado",
      "El porcentaje de habitantes extranjeros que alquilan un inmueble",
      "El porcentaje máximo del área total del lote o terreno que puede ser ocupado por la huella de la planta baja de la edificación"
    ],
    "correctIndex": 3,
    "explanation": "El COS asegura que una parte del terreno se mantenga como área libre descubierta para absorción pluvial, jardines y ventilación natural.",
    "skill": "Parámetros Urbanísticos Técnicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Parámetros Urbanos",
    "subtopic": "Coeficiente de Ocupación del Suelo (COS)"
  },
  {
    "id": "soc-tec-99",
    "sectionId": 9,
    "number": 99,
    "text": "¿Qué define el Coeficiente de Utilización del Suelo (CUS) en la regulación técnica urbanística?",
    "options": [
      "El costo del metro cuadrado en dólares",
      "El número de pisos que tiene un estacionamiento",
      "La superficie total máxima construible en todos los pisos del edificio expresada como un múltiplo o porcentaje del área del terreno",
      "El número de ventanas por fachada"
    ],
    "correctIndex": 2,
    "explanation": "El CUS determina el volumen edificable vertical total (por ejemplo, con un CUS de 2 en un lote de 500 m², se pueden construir hasta 1.000 m² sumando todos los pisos).",
    "skill": "Cálculo de Edificabilidad Urbana",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Urbanismo Técnico",
    "subtopic": "Coeficiente de Utilización del Suelo (CUS)"
  },
  {
    "id": "soc-tec-100",
    "sectionId": 9,
    "number": 100,
    "text": "¿Por qué la 'Gestión Integral de Riesgos de Desastres' prioriza la fase de reducción y mitigación preventiva sobre la mera respuesta reactiva tras la emergencia?",
    "options": [
      "Porque los helicópteros de socorro son muy costosos de operar",
      "Porque prevenir amenazas y reducir vulnerabilidades estructurales salva vidas, protege inversiones públicas y resulta exponencialmente más económico que reconstruir tras un desastre evitable",
      "Porque los tratados internacionales exigen no intervenir tras los sismos",
      "Porque la ayuda humanitaria no está permitida por la ley"
    ],
    "correctIndex": 1,
    "explanation": "El enfoque moderno de resiliencia territorial demuestra que cada dólar invertido en prevención sismorresistente y drenaje ahorra hasta siete dólares en pérdidas y daños postdesastre.",
    "skill": "Políticas Públicas de Resiliencia Territorial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gestión Prospectiva del Riesgo",
    "subtopic": "Prevención vs Reacción"
  }
];
