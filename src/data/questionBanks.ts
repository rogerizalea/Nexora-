import { ExamBank, Section, Question, ExamMode } from '../types';
import { INITIAL_SECTIONS } from './diagnosticData';
import { selectSmartQuestions, recordQuestionsUsage } from '../services/questionEngine';
import { balanceExamBank } from '../services/answerDistributionEngine';
import { QUESTIONS_MATEMATICAS } from './questions/matematicas';
import { QUESTIONS_LENGUA } from './questions/lengua';
import { QUESTIONS_RAZONAMIENTO } from './questions/razonamiento';

// Bank 1: Original Standard Diagnostic Test
export const BANK_STANDARD: ExamBank = {
  id: 'standard-30',
  title: 'PRUEBAS DE AYUDA DE ESTUDIO',
  subtitle: 'EVALUACIÓN DIAGNÓSTICA FUNDAMENTAL',
  badge: 'Estándar Oficial',
  description: 'Evaluación diagnóstica fundamental de 30 reactivos con operaciones matemáticas, comprensión lingüística y razonamiento abstracto.',
  sections: INITIAL_SECTIONS
};

// Bank 2: STEM, Ciencias Naturales y Medio Ambiente (30 new questions)
export const BANK_SCIENCES: ExamBank = {
  id: 'stem-sciences-30',
  title: 'Diagnóstico en Ciencias y Medio Ambiente',
  subtitle: 'Biología • Física y Tierra • Razonamiento Científico',
  badge: 'Ciencias & STEM',
  description: '30 nuevas preguntas para diagnosticar competencias en ciencias de la naturaleza, ecosistemas y método deductivo.',
  sections: [
    {
      id: 1,
      title: "SECCIÓN 1: BIOLOGÍA Y ECOSISTEMAS",
      shortTitle: "Biología",
      icon: "Leaf",
      description: "Evaluación de conocimientos sobre seres vivos, fotosíntesis, adaptaciones y cadenas tróficas.",
      questions: [
        {
          id: "cie-1",
          sectionId: 1,
          number: 1,
          text: "¿Cuál es el organelo celular encargado de la respiración celular y producción de energía (ATP)?",
          options: ["Ribosoma", "Mitocondria", "Aparato de Golgi", "Vacuola"],
          correctIndex: 1,
          explanation: "Las mitocondrias son conocidas como las 'centrales energéticas' de las células eucariotas, donde se produce la mayor parte del ATP mediante la respiración celular.",
          skill: "Biología Celular",
          difficulty: "Fácil"
        },
        {
          id: "cie-2",
          sectionId: 1,
          number: 2,
          text: "¿Qué gas absorben las plantas durante la fotosíntesis para producir glucosa?",
          options: ["Oxígeno", "Dióxido de carbono (CO₂)", "Nitrógeno", "Helio"],
          correctIndex: 1,
          explanation: "Las plantas fijan dióxido de carbono (CO₂) del aire junto con agua y luz solar para sintetizar glucosa y liberar oxígeno.",
          skill: "Fotosíntesis",
          difficulty: "Fácil"
        },
        {
          id: "cie-3",
          sectionId: 1,
          number: 3,
          text: "En una cadena alimentaria, ¿qué organismo actúa como productor primario?",
          options: ["Hongo descomponedor", "Águila depredadora", "Pasto verde", "Conejo herbívoro"],
          correctIndex: 2,
          explanation: "Los productores primarios son organismos autótrofos fotosintéticos, como las plantas verdes y algas, capaces de generar materia orgánica a partir de energía solar.",
          skill: "Ecología y Cadenas Tróficas",
          difficulty: "Fácil"
        },
        {
          id: "cie-4",
          sectionId: 1,
          number: 4,
          text: "¿Cuál de los siguientes animales es un invertebrado?",
          options: ["Delfín", "Pulpo", "Rana", "Águila"],
          correctIndex: 1,
          explanation: "El pulpo es un molusco cefalópodo y carece de columna vertebral ósea. Los delfines (mamíferos), ranas (anfibios) y águilas (aves) son vertebrados.",
          skill: "Zoología y Taxonomía",
          difficulty: "Fácil"
        },
        {
          id: "cie-5",
          sectionId: 1,
          number: 5,
          text: "¿Qué sistema del cuerpo humano transporta oxígeno y nutrientes a todas las células?",
          options: ["Sistema circulatorio", "Sistema digestivo", "Sistema endocrino", "Sistema excretor"],
          correctIndex: 0,
          explanation: "El sistema cardiovascular/circulatorio (corazón, sangre y vasos sanguíneos) bombea y transporta oxígeno, nutrientes y hormonas a todo el organismo.",
          skill: "Anatomía Humana",
          difficulty: "Fácil"
        },
        {
          id: "cie-6",
          sectionId: 1,
          number: 6,
          text: "¿Qué tipo de relación simbiótica beneficia a ambas especies, como las abejas y las flores?",
          options: ["Parasitismo", "Mutualismo", "Comensalismo", "Depredación"],
          correctIndex: 1,
          explanation: "El mutualismo es una interacción biológica donde ambas especies participantes obtienen un beneficio mutuo (la abeja obtiene néctar y la flor es polinizada).",
          skill: "Relaciones Interespecíficas",
          difficulty: "Intermedio"
        },
        {
          id: "cie-7",
          sectionId: 1,
          number: 7,
          text: "¿Cuál es la función principal de los glóbulos rojos (eritrocitos)?",
          options: ["Combatir infecciones bacterianas", "Transportar oxígeno mediante la hemoglobina", "Coagular la sangre en heridas", "Filtrar toxinas en el riñón"],
          correctIndex: 1,
          explanation: "Los glóbulos rojos contienen hemoglobina, una proteína rica en hierro que se une al oxígeno en los pulmones y lo entrega a los tejidos corporales.",
          skill: "Fisiología Sanguínea",
          difficulty: "Intermedio"
        },
        {
          id: "cie-8",
          sectionId: 1,
          number: 8,
          text: "¿Qué parte de la planta es la responsable principal de absorber agua y minerales del suelo?",
          options: ["Las hojas", "El tallo", "La raíz con pelos absorbentes", "Las flores"],
          correctIndex: 2,
          explanation: "Las raíces, especialmente a través de sus pelos radiculares absorbentes, toman agua y sales minerales disueltas del suelo y las conducen al xilema.",
          skill: "Botánica",
          difficulty: "Fácil"
        },
        {
          id: "cie-9",
          sectionId: 1,
          number: 9,
          text: "¿Por qué el agua es considerada el 'solvente universal'?",
          options: [
            "Porque no tiene color ni sabor",
            "Por su polaridad molecular que le permite disolver una gran variedad de sustancias",
            "Porque hierve a 100 grados Celsius",
            "Porque cubre solo el 10% de la Tierra"
          ],
          correctIndex: 1,
          explanation: "La molécula de agua (H₂O) tiene enlaces covalentes polares con cargas parciales que interactúan eficazmente con iones y moléculas polares, disolviéndolas.",
          skill: "Bioquímica Básica",
          difficulty: "Intermedio"
        },
        {
          id: "cie-10",
          sectionId: 1,
          number: 10,
          text: "¿Cuál es la principal causa del efecto invernadero antropogénico?",
          options: [
            "El exceso de sal en los océanos",
            "La emisión excesiva de gases como CO₂ y metano por actividades humanas",
            "La disminución de los volcanes submarinos",
            "El movimiento de rotación de la Tierra"
          ],
          correctIndex: 1,
          explanation: "La quema de combustibles fósiles y la deforestación incrementan los gases de efecto invernadero (CO₂, CH₄), atrapando calor en la atmósfera.",
          skill: "Educación Ambiental",
          difficulty: "Fácil"
        }
      ]
    },
    {
      id: 2,
      title: "SECCIÓN 2: FÍSICA, QUÍMICA Y TIERRA",
      shortTitle: "Física y Química",
      icon: "Atom",
      description: "Evaluación de fenómenos físicos, estados de agregación de la materia, fuerzas y capas de la Tierra.",
      questions: [
        {
          id: "cie-11",
          sectionId: 2,
          number: 11,
          text: "¿Cómo se llama el cambio de estado de sólido a líquido?",
          options: ["Sublimación", "Fusión", "Condensación", "Evaporación"],
          correctIndex: 1,
          explanation: "La fusión es la transición de fase en la que un sólido se transforma en líquido por absorción de energía térmica (ejemplo: hielo a agua líquida).",
          skill: "Estados de la Materia",
          difficulty: "Fácil"
        },
        {
          id: "cie-12",
          sectionId: 2,
          number: 12,
          text: "¿Cuál es la unidad del Sistema Internacional para medir la fuerza?",
          options: ["Joule (J)", "Newton (N)", "Pascal (Pa)", "Vatio (W)"],
          correctIndex: 1,
          explanation: "El Newton (N), nombrado en honor a Sir Isaac Newton, equivale a 1 kg·m/s² y es la unidad estándar de fuerza.",
          skill: "Unidades Físicas",
          difficulty: "Fácil"
        },
        {
          id: "cie-13",
          sectionId: 2,
          number: 13,
          text: "¿Qué capa de la atmósfera contiene la capa de ozono que nos protege de la radiación ultravioleta?",
          options: ["Troposfera", "Estratosfera", "Mesosfera", "Termosfera"],
          correctIndex: 1,
          explanation: "La capa de ozono (ozonosfera) se localiza en la estratosfera, entre los 15 y 35 km de altitud aproximadamente.",
          skill: "Ciencias de la Tierra",
          difficulty: "Intermedio"
        },
        {
          id: "cie-14",
          sectionId: 2,
          number: 14,
          text: "¿Qué partícula atómica posee carga eléctrica negativa?",
          options: ["Protón", "Neutrón", "Electrón", "Positrón"],
          correctIndex: 2,
          explanation: "Los electrones orbitan alrededor del núcleo atómico y poseen carga eléctrica negativa (-1.6 × 10⁻¹⁹ C). Los protones son positivos y los neutrones son neutros.",
          skill: "Estructura Atómica",
          difficulty: "Fácil"
        },
        {
          id: "cie-15",
          sectionId: 2,
          number: 15,
          text: "Si un automóvil recorre 180 km en 2 horas a velocidad constante, ¿cuál es su rapidez media?",
          options: ["70 km/h", "80 km/h", "90 km/h", "100 km/h"],
          correctIndex: 2,
          explanation: "Rapidez media = distancia ÷ tiempo = 180 km ÷ 2 h = 90 km/h.",
          skill: "Cinemática Básica",
          difficulty: "Fácil"
        },
        {
          id: "cie-16",
          sectionId: 2,
          number: 16,
          text: "¿Cuál es el valor neutro del pH en una solución acuosa a 25 °C?",
          options: ["0", "7", "10", "14"],
          correctIndex: 1,
          explanation: "Una solución neutra pura como el agua destilada tiene un pH de 7. Valores inferiores a 7 son ácidos y superiores a 7 son básicos o alcalinos.",
          skill: "Química de Soluciones",
          difficulty: "Fácil"
        },
        {
          id: "cie-17",
          sectionId: 2,
          number: 17,
          text: "¿Qué ley de Newton establece que 'a toda acción le corresponde una reacción igual y opuesta'?",
          options: ["Primera ley (Inercia)", "Segunda ley (Fuerza y aceleración)", "Tercera ley de Newton", "Ley de gravitación"],
          correctIndex: 2,
          explanation: "La tercera ley de movimiento de Newton postula el principio de acción y reacción: las fuerzas siempre ocurren en pares mutuos e iguales.",
          skill: "Leyes del Movimiento",
          difficulty: "Fácil"
        },
        {
          id: "cie-18",
          sectionId: 2,
          number: 18,
          text: "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
          options: ["Hierro", "Silicio", "Oxígeno", "Aluminio"],
          correctIndex: 2,
          explanation: "El oxígeno representa aproximadamente el 46.6% de la masa de la corteza terrestre, principalmente formando óxidos y silicatos.",
          skill: "Geoquímica",
          difficulty: "Intermedio"
        },
        {
          id: "cie-19",
          sectionId: 2,
          number: 19,
          text: "¿Qué tipo de energía posee un objeto debido a su posición en un campo gravitatorio?",
          options: ["Energía cinética", "Energía potencial gravitatoria", "Energía térmica", "Energía nuclear"],
          correctIndex: 1,
          explanation: "La energía potencial gravitatoria (Ep = m·g·h) es la energía almacenada por un cuerpo en función de su altura respecto a una referencia.",
          skill: "Energía y Trabajo",
          difficulty: "Fácil"
        },
        {
          id: "cie-20",
          sectionId: 2,
          number: 20,
          text: "¿Por qué el cielo diurno se observa de color azul?",
          options: [
            "Por el reflejo del agua de los océanos",
            "Por la dispersión de Rayleigh de la luz solar en las moléculas del aire",
            "Porque el espacio exterior es azul",
            "Por el calor acumulado en las nubes"
          ],
          correctIndex: 1,
          explanation: "La dispersión de Rayleigh dispersa con mayor intensidad las longitudes de onda cortas (azul/violeta) al chocar con las moléculas de la atmósfera terrestre.",
          skill: "Óptica y Fenómenos Naturales",
          difficulty: "Intermedio"
        }
      ]
    },
    {
      id: 3,
      title: "SECCIÓN 3: PENSAMIENTO Y MÉTODO CIENTÍFICO",
      shortTitle: "Lógica Científica",
      icon: "Microscope",
      description: "Razonamiento experimental, interpretación de datos, hipótesis y deducción lógica.",
      questions: [
        {
          id: "cie-21",
          sectionId: 3,
          number: 21,
          text: "En un experimento científico, ¿qué es la variable independiente?",
          options: [
            "El factor que el investigador modifica deliberadamente para observar su efecto",
            "El resultado que se mide al final",
            "Una condición que nunca cambia en el laboratorio",
            "El número de participantes en la prueba"
          ],
          correctIndex: 0,
          explanation: "La variable independiente es manipulada por el experimentador para determinar su influencia en la variable dependiente medida.",
          skill: "Metodología Experimental",
          difficulty: "Fácil"
        },
        {
          id: "cie-22",
          sectionId: 3,
          number: 22,
          text: "Un cultivo bacteriano se duplica cada 20 minutos. Si comienza con 50 bacterias, ¿cuántas habrá al cabo de 1 hora (60 minutos)?",
          options: ["200 bacterias", "300 bacterias", "400 bacterias", "800 bacterias"],
          correctIndex: 2,
          explanation: "60 minutos ÷ 20 minutos = 3 ciclos de duplicación. Ciclo 1 (20 min): 50 × 2 = 100. Ciclo 2 (40 min): 100 × 2 = 200. Ciclo 3 (60 min): 200 × 2 = 400 bacterias.",
          skill: "Crecimiento Exponencial",
          difficulty: "Intermedio"
        },
        {
          id: "cie-23",
          sectionId: 3,
          number: 23,
          text: "¿Qué paso sigue en el método científico una vez formulada una hipótesis comprobable?",
          options: ["Publicar conclusiones finales", "Diseñar y ejecutar un experimento controlado", "Descartar la observación", "Aceptar la hipótesis como dogma"],
          correctIndex: 1,
          explanation: "Tras plantear la hipótesis, se diseña y realiza una experimentación controlada para contrastarla con datos empíricos.",
          skill: "Método Científico",
          difficulty: "Fácil"
        },
        {
          id: "cie-24",
          sectionId: 3,
          number: 24,
          text: "Si todos los metales son conductores de electricidad y el cobre es un metal, ¿qué se concluye necesariamente?",
          options: [
            "El cobre es aislante térmico",
            "El cobre es conductor de electricidad",
            "Solo el cobre conduce electricidad",
            "El cobre no tiene electrones libres"
          ],
          correctIndex: 1,
          explanation: "Deducción lógica universal: Todos los M son C. Cobre es M. Por tanto, Cobre es C (conductor).",
          skill: "Razonamiento Deductivo",
          difficulty: "Fácil"
        },
        {
          id: "cie-25",
          sectionId: 3,
          number: 25,
          text: "Un objeto tiene una masa de 60 kg en la Tierra. Si la gravedad en la Luna es 1/6 de la terrestre, ¿cuál será su masa en la Luna?",
          options: ["10 kg", "60 kg", "360 kg", "0 kg"],
          correctIndex: 1,
          explanation: "¡Atención a la trampa conceptual! La MASA (cantidad de materia) es invariante: 60 kg en la Tierra y 60 kg en la Luna. Lo que varía es su PESO (fuerza gravitatoria).",
          skill: "Concepto de Masa vs Peso",
          difficulty: "Intermedio"
        },
        {
          id: "cie-26",
          sectionId: 3,
          number: 26,
          text: "¿Cuál es la función del 'grupo de control' en una investigación médica o biológica?",
          options: [
            "Administrar la dosis más alta posible",
            "Servir de base comparativa sin aplicar la variable experimental investigada",
            "Acelerar los resultados sin supervisión",
            "Reemplazar al equipo de científicos"
          ],
          correctIndex: 1,
          explanation: "El grupo de control no recibe el tratamiento experimental (o recibe un placebo) para verificar que los cambios observados se deben realmente a la variable estudiada.",
          skill: "Diseño Experimental",
          difficulty: "Intermedio"
        },
        {
          id: "cie-27",
          sectionId: 3,
          number: 27,
          text: "¿Qué instrumento óptico utiliza lentes para observar microorganismos que el ojo humano no puede percibir?",
          options: ["Telescopio", "Microscopio", "Barómetro", "Sismógrafo"],
          correctIndex: 1,
          explanation: "El microscopio (óptico o electrónico) aumenta imágenes de especímenes microscópicos como bacterias, protozoos y células.",
          skill: "Instrumental Científico",
          difficulty: "Fácil"
        },
        {
          id: "cie-28",
          sectionId: 3,
          number: 28,
          text: "Si se calienta un gas en un recipiente cerrado de volumen fijo, ¿qué ocurre con su presión interna?",
          options: ["Disminuye a cero", "Aumenta proporcionalmente a la temperatura", "Permanece completamente igual", "El gas desaparece"],
          correctIndex: 1,
          explanation: "Según la Ley de Gay-Lussac (P/T = constante a volumen constante), al elevar la temperatura aumenta la energía cinética de las moléculas y la presión contra las paredes.",
          skill: "Leyes de los Gases",
          difficulty: "Intermedio"
        },
        {
          id: "cie-29",
          sectionId: 3,
          number: 29,
          text: "Identifica la afirmación que representa una observación cuantitativa:",
          options: [
            "La solución tiene un olor agradable y color azulado.",
            "El líquido se siente tibio al tacto.",
            "La muestra aumentó su temperatura en 14.5 °C en 3 minutos.",
            "Las plantas lucen más saludables hoy."
          ],
          correctIndex: 2,
          explanation: "Las observaciones cuantitativas se expresan mediante magnitudes numéricas e instrumentos de medición (14.5 °C y 3 min), a diferencia de las cualitativas subjetivas.",
          skill: "Observación y Datos",
          difficulty: "Fácil"
        },
        {
          id: "cie-30",
          sectionId: 3,
          number: 30,
          text: "¿Qué principio físico explica por qué un barco de acero flota en el agua mientras que un trozo de acero macizo se hunde?",
          options: [
            "Principio de Arquímedes (el empuje es igual al peso del fluido desalojado)",
            "Ley de Boyle-Mariotte",
            "Principio de Pascal",
            "Efecto Doppler"
          ],
          correctIndex: 0,
          explanation: "Por el Principio de Arquímedes: la forma cóncava del casco del barco desaloja un gran volumen de agua, produciendo una fuerza de empuje hidrostático mayor que el peso total del barco.",
          skill: "Mecánica de Fluidos",
          difficulty: "Intermedio"
        }
      ]
    }
  ]
};

// Bank 3: Humanidades, Historia, Geografía y Cultura General (30 new questions)
export const BANK_HUMANITIES: ExamBank = {
  id: 'humanities-culture-30',
  title: 'Diagnóstico en Humanidades y Cultura General',
  subtitle: 'Geografía • Historia Universal • Comprensión Crítica',
  badge: 'Cultura & Sociedad',
  description: '30 preguntas dinámicas para medir comprensión histórica, ubicación geográfica, literatura y ciudadanía.',
  sections: [
    {
      id: 1,
      title: "SECCIÓN 1: GEOGRAFÍA Y PLANETA TIERRA",
      shortTitle: "Geografía",
      icon: "Globe",
      description: "Continentes, océanos, orografía, husos horarios y capitales mundiales.",
      questions: [
        {
          id: "hum-1",
          sectionId: 1,
          number: 1,
          text: "¿Cuál es el río más caudaloso y largo del mundo?",
          options: ["Río Nilo", "Río Amazonas", "Río Yangtsé", "Río Misisipi"],
          correctIndex: 1,
          explanation: "El río Amazonas en América del Sur es el más caudaloso y, según mediciones satelitales recientes, el más largo del planeta.",
          skill: "Hidrografía Mundial",
          difficulty: "Fácil"
        },
        {
          id: "hum-2",
          sectionId: 1,
          number: 2,
          text: "¿En qué continente se ubica la cordillera del Himalaya con el monte Everest?",
          options: ["América", "África", "Asia", "Europa"],
          correctIndex: 2,
          explanation: "La cordillera del Himalaya se localiza en el continente asiático, extendiéndose por Nepal, Tíbet/China, India, Bután y Pakistán.",
          skill: "Orografía Global",
          difficulty: "Fácil"
        },
        {
          id: "hum-3",
          sectionId: 1,
          number: 3,
          text: "¿Cuál es el océano de mayor superficie en la Tierra?",
          options: ["Océano Atlántico", "Océano Índico", "Océano Glacial Ártico", "Océano Pacífico"],
          correctIndex: 3,
          explanation: "El océano Pacífico cubre más de 165 millones de km², superando en extensión a toda la superficie de tierra firme combinada.",
          skill: "Oceanografía",
          difficulty: "Fácil"
        },
        {
          id: "hum-4",
          sectionId: 1,
          number: 4,
          text: "¿Qué línea imaginaria divide la Tierra en hemisferio Norte y hemisferio Sur a los 0° de latitud?",
          options: ["Meridiano de Greenwich", "Trópico de Cáncer", "Línea del Ecuador", "Círculo Polar Ártico"],
          correctIndex: 2,
          explanation: "El paralelo 0° es la línea ecuatorial o Ecuador terrestre, que equidista de ambos polos geográficos.",
          skill: "Cartografía y Coordenadas",
          difficulty: "Fácil"
        },
        {
          id: "hum-5",
          sectionId: 1,
          number: 5,
          text: "¿Cuál es el país más grande del mundo por extensión territorial?",
          options: ["Canadá", "Estados Unidos", "Rusia", "China"],
          correctIndex: 2,
          explanation: "La Federación Rusa tiene una extensión de más de 17 millones de kilómetros cuadrados, abarcando Europa Oriental y Asia Septentrional.",
          skill: "Geografía Política",
          difficulty: "Fácil"
        },
        {
          id: "hum-6",
          sectionId: 1,
          number: 6,
          text: "¿Qué desierto cálido es el más extenso del planeta?",
          options: ["Desierto de Atacama", "Desierto del Sahara", "Desierto de Gobi", "Desierto de Sonora"],
          correctIndex: 1,
          explanation: "El Sahara, en el norte de África, es el desierto cálido más grande del mundo con más de 9 millones de km².",
          skill: "Biomas y Paisajes",
          difficulty: "Fácil"
        },
        {
          id: "hum-7",
          sectionId: 1,
          number: 7,
          text: "¿Cuál es la capital oficial de Canadá?",
          options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
          correctIndex: 3,
          explanation: "Ottawa es la capital federal de Canadá, situada en la provincia de Ontario limítrofe con Quebec.",
          skill: "Capitales Mundiales",
          difficulty: "Intermedio"
        },
        {
          id: "hum-8",
          sectionId: 1,
          number: 8,
          text: "¿A qué se deben las cuatro estaciones del año en la Tierra?",
          options: [
            "A la distancia cambiante entre la Tierra y el Sol",
            "A la inclinación del eje terrestre combinada con el movimiento de traslación alrededor del Sol",
            "Al movimiento exclusivo de rotación sobre su propio eje",
            "A las fases de la Luna"
          ],
          correctIndex: 1,
          explanation: "El eje de la Tierra está inclinado ~23.5°. Al trasladarse alrededor del Sol, los hemisferios reciben luz solar con diferente ángulo e intensidad a lo largo del año.",
          skill: "Astronomía y Climatología",
          difficulty: "Intermedio"
        },
        {
          id: "hum-9",
          sectionId: 1,
          number: 9,
          text: "¿En qué océano se encuentra la Fosa de las Marianas, el punto más profundo conocido del planeta?",
          options: ["Océano Pacífico", "Océano Atlántico", "Océano Índico", "Océano Antártico"],
          correctIndex: 0,
          explanation: "La Fosa de las Marianas se ubica en el Pacífico occidental y alcanza casi 11,000 metros de profundidad en el abismo Challenger.",
          skill: "Relieve Submarino",
          difficulty: "Intermedio"
        },
        {
          id: "hum-10",
          sectionId: 1,
          number: 10,
          text: "¿Cuál es el único continente que no tiene población humana autóctona permanente?",
          options: ["Oceanía", "Antártida", "África", "Europa"],
          correctIndex: 1,
          explanation: "La Antártida está regida por el Tratado Antártico con fines científicos y pacíficos; carece de población nativa permanente.",
          skill: "Geografía Humana",
          difficulty: "Fácil"
        }
      ]
    },
    {
      id: 2,
      title: "SECCIÓN 2: HISTORIA UNIVERSAL Y CULTURA",
      shortTitle: "Historia",
      icon: "Landmark",
      description: "Civilizaciones antiguas, hitos históricos, revoluciones y patrimonio cultural.",
      questions: [
        {
          id: "hum-11",
          sectionId: 2,
          number: 11,
          text: "¿Qué civilización antigua construyó las pirámides de Guiza y utilizó la escritura jeroglífica?",
          options: ["Civilización Maya", "Antiguo Egipto", "Mesopotamia", "Imperio Romano"],
          correctIndex: 1,
          explanation: "El Antiguo Egipto se desarrolló a orillas del río Nilo y edificó las emblemáticas pirámides de Keops, Kefrén y Micerino.",
          skill: "Civilizaciones Antiguas",
          difficulty: "Fácil"
        },
        {
          id: "hum-12",
          sectionId: 2,
          number: 12,
          text: "¿En qué país y siglo comenzó la Revolución Industrial?",
          options: ["Francia (siglo XVII)", "Gran Bretaña (siglo XVIII)", "Estados Unidos (siglo XIX)", "Alemania (siglo XX)"],
          correctIndex: 1,
          explanation: "La Revolución Industrial se originó en Gran Bretaña a mediados del siglo XVIII con la invención de la máquina de vapor y el telar mecánico.",
          skill: "Hitos Históricos Modernos",
          difficulty: "Intermedio"
        },
        {
          id: "hum-13",
          sectionId: 2,
          number: 13,
          text: "¿Quién pintó la famosa obra renacentista 'La Gioconda' (Mona Lisa)?",
          options: ["Miguel Ángel", "Leonardo da Vinci", "Rafael Sanzio", "Vincent van Gogh"],
          correctIndex: 1,
          explanation: "Leonardo da Vinci, genio florentino del Renacimiento, pintó la Mona Lisa a principios del siglo XVI, hoy exhibida en el Museo del Louvre.",
          skill: "Historia del Arte",
          difficulty: "Fácil"
        },
        {
          id: "hum-14",
          sectionId: 2,
          number: 14,
          text: "¿Qué invento de Johannes Gutenberg hacia 1440 revolucionó la difusión del conocimiento en Europa?",
          options: ["La brújula magnética", "La imprenta de tipos móviles", "El telescopio astronómico", "La máquina de escribir"],
          correctIndex: 1,
          explanation: "La imprenta de tipos metálicos móviles permitió reproducir libros a gran escala, impulsando el Humanismo y la difusión de la ciencia.",
          skill: "Innovaciones Históricas",
          difficulty: "Fácil"
        },
        {
          id: "hum-15",
          sectionId: 2,
          number: 15,
          text: "¿Qué acontecimiento histórico marca el inicio de la Edad Contemporánea en 1789?",
          options: ["La Independencia de Estados Unidos", "La Revolución Francesa", "La Primera Guerra Mundial", "La caída del Muro de Berlín"],
          correctIndex: 1,
          explanation: "La toma de la Bastilla y la Revolución Francesa en 1789 establecieron la Declaración de los Derechos del Hombre y dieron paso a la Edad Contemporánea.",
          skill: "Periodización Histórica",
          difficulty: "Fácil"
        },
        {
          id: "hum-16",
          sectionId: 2,
          number: 16,
          text: "¿Cuál es considerada la obra cumbre de la literatura en español, escrita por Miguel de Cervantes?",
          options: ["Cien años de soledad", "Don Quijote de la Mancha", "La Celestina", "El cantar de mio Cid"],
          correctIndex: 1,
          explanation: "'El ingenioso hidalgo don Quijote de la Mancha', publicada en 1605, es la obra maestra de la literatura universal en habla hispana.",
          skill: "Literatura Universal",
          difficulty: "Fácil"
        },
        {
          id: "hum-17",
          sectionId: 2,
          number: 17,
          text: "¿Qué civilización precolombina erigió la ciudadela de Machu Picchu en los Andes peruanos?",
          options: ["Los Aztecas", "Los Mayas", "Los Incas", "Los Chibchas"],
          correctIndex: 2,
          explanation: "Machu Picchu fue una majestuosa llacta o ciudadela inca construida en el siglo XV durante el reinado del inca Pachacútec.",
          skill: "Culturas Prehispánicas",
          difficulty: "Fácil"
        },
        {
          id: "hum-18",
          sectionId: 2,
          number: 18,
          text: "¿En qué año finalizó la Segunda Guerra Mundial con la rendición formal del Eje?",
          options: ["1918", "1939", "1945", "1950"],
          correctIndex: 2,
          explanation: "La Segunda Guerra Mundial comenzó en septiembre de 1939 y concluyó en 1945 con la victoria de las fuerzas aliadas.",
          skill: "Siglo XX y Geopolítica",
          difficulty: "Fácil"
        },
        {
          id: "hum-19",
          sectionId: 2,
          number: 19,
          text: "¿Qué documento histórico proclamó la ONU en 1948 para garantizar la dignidad y libertades universales?",
          options: [
            "El Tratado de Versalles",
            "La Declaración Universal de los Derechos Humanos",
            "La Carta Magna",
            "El Código de Hammurabi"
          ],
          correctIndex: 1,
          explanation: "Adoptada el 10 de diciembre de 1948 en París, la Declaración Universal de los Derechos Humanos consagra los derechos inherentes a todo ser humano.",
          skill: "Derechos Humanos y Ciudadanía",
          difficulty: "Fácil"
        },
        {
          id: "hum-20",
          sectionId: 2,
          number: 20,
          text: "¿Cuál fue el principal motivo por el que se construyó la Gran Muralla China?",
          options: [
            "Servir como acueducto para transportar agua",
            "Proteger a los imperios chinos de las invasiones de pueblos nómadas del norte",
            "Facilitar el comercio marítimo",
            "Celebrar los Juegos Olímpicos de la antigüedad"
          ],
          correctIndex: 1,
          explanation: "La Gran Muralla China se erigió a lo largo de siglos como un sistema defensivo militar contra las incursiones de tribus nómadas de las estepas del norte.",
          skill: "Historia de Asia",
          difficulty: "Fácil"
        }
      ]
    },
    {
      id: 3,
      title: "SECCIÓN 3: PENSAMIENTO CRÍTICO Y LÓGICA",
      shortTitle: "Pensamiento Crítico",
      icon: "Scale",
      description: "Detección de falacias, razonamiento analógico, ética ciudadana y análisis reflexivo.",
      questions: [
        {
          id: "hum-21",
          sectionId: 3,
          number: 21,
          text: "«No le crean a Juan sobre economía porque él viste mal». ¿Qué tipo de falacia lógica se está cometiendo?",
          options: ["Falacia ad populum", "Falacia ad hominem (ataque personal)", "Generalización apresurada", "Falso dilema"],
          correctIndex: 1,
          explanation: "La falacia 'ad hominem' descalifica el argumento atacando a la persona que lo emite en lugar de refutar sus razones con datos.",
          skill: "Lógica y Falacias Argumentativas",
          difficulty: "Intermedio"
        },
        {
          id: "hum-22",
          sectionId: 3,
          number: 22,
          text: "Completa la analogía: Libro es a Biblioteca como Pintura es a...",
          options: ["Pincel", "Museo o Galería", "Lienzo", "Escultor"],
          correctIndex: 1,
          explanation: "Relación de contenido a lugar de custodia y exposición pública: los libros se resguardan en bibliotecas y las pinturas en museos o pinacotecas.",
          skill: "Analogías Verbales",
          difficulty: "Fácil"
        },
        {
          id: "hum-23",
          sectionId: 3,
          number: 23,
          text: "¿Cuál es una fuente primaria de información para un historiador que investiga una batalla?",
          options: [
            "Una película de ficción estrenada en el cine",
            "La carta y diario de campaña escrito por un soldado durante la batalla",
            "Un artículo de opinión en un blog contemporáneo",
            "Una novela histórica escrita doscientos años después"
          ],
          correctIndex: 1,
          explanation: "Las fuentes primarias son testimonios o documentos contemporáneos de primera mano, como cartas, actas oficiales, fotografías o diarios de la época.",
          skill: "Análisis Crítico de Fuentes",
          difficulty: "Fácil"
        },
        {
          id: "hum-24",
          sectionId: 3,
          number: 24,
          text: "Si todas las democracias tienen división de poderes y el país X es una democracia, ¿qué se puede afirmar válidamente?",
          options: [
            "El país X no tiene leyes escritas",
            "El país X cuenta con división de poderes",
            "El país X es el único país democrático",
            "El país X no celebra elecciones"
          ],
          correctIndex: 1,
          explanation: "Silogismo categórico válido: Premisa mayor (Democracia => División de poderes) + Premisa menor (País X es democracia) => Conclusión necesaria.",
          skill: "Deducción Política y Lógica",
          difficulty: "Fácil"
        },
        {
          id: "hum-25",
          sectionId: 3,
          number: 25,
          text: "¿Qué significa el principio de 'presunción de inocencia' en el ámbito legal?",
          options: [
            "Toda persona acusada debe pagar fianza de inmediato",
            "Toda persona se considera inocente hasta que se demuestre legalmente su culpabilidad",
            "Solo los jueces pueden ser considerados inocentes",
            "Nadie puede ser juzgado ante un tribunal"
          ],
          correctIndex: 1,
          explanation: "Es una garantía procesal fundamental: la carga de la prueba recae en la parte acusadora; la persona acusada es inocente ante la ley hasta una sentencia firme.",
          skill: "Educación Cívica",
          difficulty: "Fácil"
        },
        {
          id: "hum-26",
          sectionId: 3,
          number: 26,
          text: "Elige la afirmación que distingue un HECHO verificable de una OPINIÓN subjetiva:",
          options: [
            "La música clásica es aburrida para los jóvenes.",
            "La torre Eiffel tiene una altura de más de 300 metros.",
            "El verano es la mejor época del año.",
            "Las matemáticas son la materia más difícil del colegio."
          ],
          correctIndex: 1,
          explanation: "La altura de la Torre Eiffel es un hecho objetivo, medible y comprobable empíricamente, mientras que las otras son juicios de valor o preferencias personales.",
          skill: "Distinción entre Hecho y Opinión",
          difficulty: "Fácil"
        },
        {
          id: "hum-27",
          sectionId: 3,
          number: 27,
          text: "¿Cuál es el propósito fundamental de la separación de poderes (Ejecutivo, Legislativo y Judicial) en una República?",
          options: [
            "Concentrar todo el poder en una sola persona",
            "Evitar el abuso de poder mediante un sistema de pesos y contrapesos mutuos",
            "Hacer que las decisiones tomen más años",
            "Eliminar la constitución del estado"
          ],
          correctIndex: 1,
          explanation: "Teorizado por pensadores como Montesquieu, el balance de poderes impide la tiranía garantizando que ningún poder del Estado actúe sin control ni límites.",
          skill: "Teoría Constitucional",
          difficulty: "Intermedio"
        },
        {
          id: "hum-28",
          sectionId: 3,
          number: 28,
          text: "Completa la serie analógica: Médico es a Diagnóstico como Juez es a...",
          options: ["Hospital", "Sentencia o Veredicto", "Paciente", "Abogado defensor"],
          correctIndex: 1,
          explanation: "El médico emite un diagnóstico profesional como resultado de su análisis clínico; el juez emite una sentencia o veredicto tras el proceso judicial.",
          skill: "Relaciones Funcionales",
          difficulty: "Fácil"
        },
        {
          id: "hum-29",
          sectionId: 3,
          number: 29,
          text: "«Si llueve, las calles se mojan. Las calles están mojadas, por lo tanto, llovió». ¿Por qué es un razonamiento inválido?",
          options: [
            "Porque nunca llueve en la ciudad",
            "Porque las calles pudieron mojarse por otra causa, como un camión de limpieza o una fuga de agua",
            "Porque la lluvia no moja el asfalto",
            "Porque es un silogismo perfecto"
          ],
          correctIndex: 1,
          explanation: "Comete la falacia formal de 'afirmación del consecuente'. Que las calles estén mojadas no garantiza que la causa exclusiva haya sido la lluvia.",
          skill: "Lógica Formal y Causalidad",
          difficulty: "Intermedio"
        },
        {
          id: "hum-30",
          sectionId: 3,
          number: 30,
          text: "¿Qué concepto describe la capacidad de comprender y compartir los sentimientos o perspectivas de otra persona?",
          options: ["Apatía", "Egoísmo", "Empatía", "Indiferencia"],
          correctIndex: 2,
          explanation: "La empatía es la competencia socioemocional que permite ponerse en el lugar del otro, reconocer sus emociones y actuar con comprensión solidaria.",
          skill: "Habilidades Socioemocionales",
          difficulty: "Fácil"
        }
      ]
    }
  ]
};

// Bank 4: Alta Dificultad & Pensamiento Complejo (para más conocimiento)
export const BANK_ADVANCED_DIFFICULTY: ExamBank = {
  id: 'advanced-difficulty-30',
  title: 'Diagnóstico de Alta Dificultad & Pensamiento Complejo',
  subtitle: 'Álgebra • Comprensión Crítica • Lógica Formal Avanzada',
  badge: 'Alta Dificultad',
  description: 'Batería retadora de 30 reactivos con problemas cuantitativos multi-paso, lógica formal y vocabulario analítico para profundizar el conocimiento.',
  sections: [
    {
      id: 1,
      title: "SECCIÓN 1: CÁLCULO AVANZADO Y ANÁLISIS NUMÉRICO",
      shortTitle: "Matemáticas Pro",
      icon: "Calculator",
      description: "Operaciones con fracciones, porcentajes sucesivos, proporcionalidad inversa y ecuaciones algebraicas.",
      questions: [
        {
          id: "adv-1",
          sectionId: 1,
          number: 1,
          text: "¿Cuál es el resultado de resolver: (3/4 + 2/5) × 20?",
          options: ["20", "22", "23", "25"],
          correctIndex: 2,
          explanation: "Calculamos el mínimo común múltiplo de 4 y 5, que es 20: 3/4 = 15/20 y 2/5 = 8/20. La suma es 23/20. Al multiplicar por 20: (23/20) × 20 = 23.",
          skill: "Aritmética Fraccionaria",
          difficulty: "Desafiante"
        },
        {
          id: "adv-2",
          sectionId: 1,
          number: 2,
          text: "Un artículo cuesta $800 y recibe un descuento del 20%. Luego, se le aplica un descuento adicional del 10% sobre el valor ya rebajado. ¿Cuál es su precio final?",
          options: ["$560", "$576", "$600", "$640"],
          correctIndex: 1,
          explanation: "Primer descuento: 800 × 0.80 = $640. Segundo descuento sobre $640: 640 × 0.90 = $576. El descuento total no es 30%, sino 28%.",
          skill: "Porcentajes Sucesivos",
          difficulty: "Desafiante"
        },
        {
          id: "adv-3",
          sectionId: 1,
          number: 3,
          text: "Si 3 trabajadores tardan 12 días en construir un muro, ¿cuántos días tardarán 6 trabajadores con el mismo rendimiento?",
          options: ["4 días", "6 días", "8 días", "24 días"],
          correctIndex: 1,
          explanation: "Es una relación de proporcionalidad inversa: a mayor número de trabajadores, menor tiempo. Constante = 3 × 12 = 36 días-hombre. Por tanto, 36 ÷ 6 = 6 días.",
          skill: "Proporcionalidad Inversa",
          difficulty: "Intermedio"
        },
        {
          id: "adv-4",
          sectionId: 1,
          number: 4,
          text: "Resuelve la ecuación lineal: 4(x - 3) = 2x + 10. ¿Cuál es el valor de x?",
          options: ["x = 7", "x = 9", "x = 11", "x = 13"],
          correctIndex: 2,
          explanation: "Desarrollamos el paréntesis: 4x - 12 = 2x + 10. Agrupamos incógnitas: 4x - 2x = 10 + 12 => 2x = 22 => x = 11.",
          skill: "Ecuaciones de Primer Grado",
          difficulty: "Desafiante"
        },
        {
          id: "adv-5",
          sectionId: 1,
          number: 5,
          text: "En una urna hay 4 esferas rojas, 5 azules y 3 verdes. Si se extrae una al azar, ¿cuál es la probabilidad de que sea azul?",
          options: ["5/12", "1/3", "5/7", "1/4"],
          correctIndex: 0,
          explanation: "Total de esferas = 4 + 5 + 3 = 12. Casos favorables (azules) = 5. Probabilidad clásica = Casos favorables / Casos posibles = 5/12.",
          skill: "Probabilidad Simple",
          difficulty: "Intermedio"
        },
        {
          id: "adv-6",
          sectionId: 1,
          number: 6,
          text: "¿Cuál es el área de un triángulo rectángulo cuyos catetos miden 12 cm y 16 cm?",
          options: ["84 cm²", "96 cm²", "144 cm²", "192 cm²"],
          correctIndex: 1,
          explanation: "En un triángulo rectángulo, los catetos funcionan como base y altura recíprocas. Área = (base × altura) / 2 = (12 × 16) / 2 = 192 / 2 = 96 cm².",
          skill: "Geometría Plana",
          difficulty: "Intermedio"
        },
        {
          id: "adv-7",
          sectionId: 1,
          number: 7,
          text: "La suma de dos números es 75 y su diferencia es 15. ¿Cuál es el número mayor?",
          options: ["30", "40", "45", "50"],
          correctIndex: 2,
          explanation: "Planteamos el sistema: x + y = 75 y x - y = 15. Sumando ambas ecuaciones: 2x = 90 => x = 45. El menor es y = 30.",
          skill: "Sistemas de Ecuaciones Lineales",
          difficulty: "Desafiante"
        },
        {
          id: "adv-8",
          sectionId: 1,
          number: 8,
          text: "Calcula el valor numérico de la expresión: 2⁴ + 3³ - √144.",
          options: ["27", "29", "31", "35"],
          correctIndex: 2,
          explanation: "2⁴ = 16. 3³ = 27. √144 = 12. Reemplazando: 16 + 27 - 12 = 43 - 12 = 31.",
          skill: "Operaciones Combinadas con Potencias y Raíces",
          difficulty: "Intermedio"
        },
        {
          id: "adv-9",
          sectionId: 1,
          number: 9,
          text: "Un automóvil viaja a una velocidad constante de 90 km/h. ¿Qué distancia recorre en 2 horas y 40 minutos?",
          options: ["210 km", "225 km", "240 km", "260 km"],
          correctIndex: 2,
          explanation: "Convertimos el tiempo a horas: 40 minutos = 40/60 = 2/3 de hora. Tiempo total = 2 + 2/3 = 8/3 horas. Distancia = Velocidad × Tiempo = 90 × (8/3) = 30 × 8 = 240 km.",
          skill: "Cinemática y Razonamiento Físico-Matemático",
          difficulty: "Desafiante"
        },
        {
          id: "adv-10",
          sectionId: 1,
          number: 10,
          text: "Un comerciante compra un lote de artículos por $120 y lo vende obteniendo un beneficio del 25% sobre el precio de costo. ¿Cuál fue el precio de venta?",
          options: ["$135", "$145", "$150", "$160"],
          correctIndex: 2,
          explanation: "El beneficio es el 25% de 120 = 120 × 0.25 = $30. Precio de venta = Costo + Ganancia = 120 + 30 = $150.",
          skill: "Matemática Financiera Básica",
          difficulty: "Intermedio"
        }
      ]
    },
    {
      id: 2,
      title: "SECCIÓN 2: SEMÁNTICA, SINTAXIS Y RETÓRICA CRÍTICA",
      shortTitle: "Lenguaje Superior",
      icon: "BookOpen",
      description: "Etimología, figuras retóricas, conectores concesivos, sintaxis compleja y distinciones argumentativas.",
      questions: [
        {
          id: "adv-11",
          sectionId: 2,
          number: 11,
          text: "¿Cuál es el significado del prefijo de origen griego 'HIPER-' presente en hipertrofia o hipertensión?",
          options: ["Por debajo de lo normal", "Exceso o por encima de lo normal", "Igualdad o simetría", "Negación o ausencia"],
          correctIndex: 1,
          explanation: "El prefijo griego 'hiper-' denota superioridad, exceso o abundancia (lo opuesto a 'hipo-', que indica deficiencia o escasez).",
          skill: "Etimología Grecolatina",
          difficulty: "Intermedio"
        },
        {
          id: "adv-12",
          sectionId: 2,
          number: 12,
          text: "Identifica la figura retórica en el verso: «El viento de la noche susurraba secretos entre las ramas desnudas».",
          options: ["Metonimia", "Prosopopeya o Personificación", "Hipérbaton", "Oxímoron"],
          correctIndex: 1,
          explanation: "La personificación o prosopopeya consiste en atribuir cualidades o acciones propias de seres humanos a objetos inanimados o elementos naturales.",
          skill: "Figuras Retóricas y Estilística",
          difficulty: "Intermedio"
        },
        {
          id: "adv-13",
          sectionId: 2,
          number: 13,
          text: "¿Cuál es el antónimo contextual y preciso de la palabra 'EFÍMERO'?",
          options: ["Fugaz", "Transitorio", "Perenne o Perpetuo", "Inestable"],
          correctIndex: 2,
          explanation: "'Efímero' significa de corta duración o pasajero. Su antónimo directo es 'perenne', 'duradero' o 'perpetuo'.",
          skill: "Relaciones Léxico-Semánticas",
          difficulty: "Intermedio"
        },
        {
          id: "adv-14",
          sectionId: 2,
          number: 14,
          text: "¿Qué falacia argumentativa se comete al atacar los defectos personales del interlocutor en lugar de debatir sus tesis?",
          options: ["Falacia ad populum", "Falacia ad ignorantiam", "Falacia ad hominem", "Falacia de la pendiente resbaladiza"],
          correctIndex: 2,
          explanation: "La falacia 'ad hominem' consiste en descalificar a la persona que emite un argumento en vez de analizar y rebatir la validez del argumento mismo.",
          skill: "Argumentación y Falacias Lógicas",
          difficulty: "Desafiante"
        },
        {
          id: "adv-15",
          sectionId: 2,
          number: 15,
          text: "Elige la oración que respeta la ortografía correcta de las formas «porqué / por qué / porque / por que»:",
          options: [
            "No comprendo el porqué de su silencio, porque nunca brindó explicaciones.",
            "No comprendo el por qué de su silencio, porqué nunca brindó explicaciones.",
            "No comprendo el porque de su silencio, por qué nunca brindó explicaciones.",
            "No comprendo el porqué de su silencio, por que nunca brindó explicaciones."
          ],
          correctIndex: 0,
          explanation: "'El porqué' funciona como sustantivo sinónimo de causa o motivo; 'porque' es una conjunción causal que introduce la justificación.",
          skill: "Normativa Ortográfica y Gramatical",
          difficulty: "Desafiante"
        },
        {
          id: "adv-16",
          sectionId: 2,
          number: 16,
          text: "¿Cuál es el término lingüístico para designar a una persona capaz de comunicarse fluidamente en múltiples lenguas?",
          options: ["Autodidacta", "Políglota", "Retórico", "Gramático"],
          correctIndex: 1,
          explanation: "Políglota (del griego 'poly', mucho, y 'glotta', lengua) es el individuo que domina y habla varias lenguas.",
          skill: "Precisión Léxica Culta",
          difficulty: "Fácil"
        },
        {
          id: "adv-17",
          sectionId: 2,
          number: 17,
          text: "En «Aunque la cumbre estaba nevada y el viento soplaba fuerte, los montañistas alcanzaron la cima», ¿qué tipo de conector es 'Aunque'?",
          options: ["Conector causal", "Conector concesivo", "Conector consecutivo", "Conector disyuntivo"],
          correctIndex: 1,
          explanation: "Los conectores concesivos (aunque, a pesar de que, si bien) introducen un obstáculo o dificultad que no impide el cumplimiento de la acción principal.",
          skill: "Cohesión Textual y Marcadores del Discurso",
          difficulty: "Desafiante"
        },
        {
          id: "adv-18",
          sectionId: 2,
          number: 18,
          text: "¿Cuál de las siguientes palabras presenta un HIATO con tilde por acentuación disolvente?",
          options: ["Canción", "Cuaderno", "País", "Ciudad"],
          correctIndex: 2,
          explanation: "En 'País', la vocal cerrada 'i' es tónica y rompe la unión con la vocal abierta 'a', formando dos sílabas separadas (pa-ís).",
          skill: "Fonología y Acentuación",
          difficulty: "Intermedio"
        },
        {
          id: "adv-19",
          sectionId: 2,
          number: 19,
          text: "Completa la analogía de proporcionalidad semántica: PRÓLOGO es a LIBRO como...",
          options: [
            "Conclusión es a Ensayo",
            "Preludio u Obertura es a Ópera",
            "Índice es a Portada",
            "Capítulo es a Verso"
          ],
          correctIndex: 1,
          explanation: "El prólogo es la sección introductoria que precede a un libro, de la misma manera que el preludio u obertura antecede e introduce a una ópera.",
          skill: "Analogías Complejas",
          difficulty: "Desafiante"
        },
        {
          id: "adv-20",
          sectionId: 2,
          number: 20,
          text: "¿Cuál de las siguientes oraciones utiliza de forma correcta la tilde diacrítica en el monosílabo 'dé'?",
          options: [
            "Espero que me dé tiempo para terminar el proyecto.",
            "Viene de visita dé su pueblo natal.",
            "El auto dé mi hermano es moderno.",
            "Dé acuerdo con lo acordado, firmaremos hoy."
          ],
          correctIndex: 0,
          explanation: "'Dé' lleva tilde diacrítica cuando es forma conjugada del verbo dar. Cuando funciona como preposición ('de'), se escribe sin tilde.",
          skill: "Acentuación Diacrítica",
          difficulty: "Intermedio"
        }
      ]
    },
    {
      id: 3,
      title: "SECCIÓN 3: LÓGICA FORMAL, MATRICES Y PENSAMIENTO COMPLEJO",
      shortTitle: "Lógica Avanzada",
      icon: "Brain",
      description: "Series complejas, inferencia deductiva formal, teoría de conjuntos y paradojas analíticas.",
      questions: [
        {
          id: "adv-21",
          sectionId: 3,
          number: 21,
          text: "¿Qué número continúa la sucesión de números primos: 17, 19, 23, 29, 31, ...?",
          options: ["33", "35", "37", "39"],
          correctIndex: 2,
          explanation: "33 es divisible por 3 y 11; 35 por 5 y 7; 39 por 3 y 13. El siguiente número primo (solo divisible por 1 y por sí mismo) es 37.",
          skill: "Teoría de Números Primos",
          difficulty: "Intermedio"
        },
        {
          id: "adv-22",
          sectionId: 3,
          number: 22,
          text: "¿Qué número continúa la secuencia con incrementos de números impares crecientes? 2, 5, 10, 17, 26, 37, ...",
          options: ["48", "49", "50", "52"],
          correctIndex: 2,
          explanation: "Las diferencias sucesivas son: 5-2 = +3, 10-5 = +5, 17-10 = +7, 26-17 = +9, 37-26 = +11. La siguiente diferencia debe ser +13: 37 + 13 = 50 (también equivale a n² + 1).",
          skill: "Series de Segundo Orden",
          difficulty: "Desafiante"
        },
        {
          id: "adv-23",
          sectionId: 3,
          number: 23,
          text: "Premisa 1: «Ningún reptil posee plumas». Premisa 2: «Todas las víboras son reptiles». ¿Qué conclusión lógica se deduce necesariamente?",
          options: [
            "Algunas víboras tienen plumas",
            "Ninguna víbora posee plumas",
            "Todos los animales con plumas son víboras",
            "Los reptiles no son animales"
          ],
          correctIndex: 1,
          explanation: "Silogismo en modo Celarent: Si ningún miembro del conjunto R tiene P, y el subconjunto V está totalmente incluido en R, entonces ningún miembro de V puede tener P.",
          skill: "Silogismos Categóricos",
          difficulty: "Desafiante"
        },
        {
          id: "adv-24",
          sectionId: 3,
          number: 24,
          text: "En un torneo de ajedrez juegan 6 maestros todos contra todos en una única ronda. ¿Cuántas partidas se disputarán en total?",
          options: ["12 partidas", "15 partidas", "18 partidas", "30 partidas"],
          correctIndex: 1,
          explanation: "Combinatoria sin repetición de 6 elementos tomados de 2 en 2: C(6,2) = (6 × 5) / (2 × 1) = 30 / 2 = 15 partidas.",
          skill: "Combinatoria Básica",
          difficulty: "Desafiante"
        },
        {
          id: "adv-25",
          sectionId: 3,
          number: 25,
          text: "Si la proposición universal afirmativa «Todos los diamantes son duros» es VERDADERA, ¿cuál es el valor de la proposición contraria «Ningún diamante es duro»?",
          options: [
            "Verdadera",
            "Falsa",
            "Indeterminada",
            "Parcialmente cierta"
          ],
          correctIndex: 1,
          explanation: "En el cuadro tradicional de oposición de Boecio, las proposiciones contrarias (A y E) no pueden ser ambas verdaderas al mismo tiempo; si una es verdadera, la otra es necesariamente falsa.",
          skill: "Lógica Proposicional Clásica",
          difficulty: "Desafiante"
        },
        {
          id: "adv-26",
          sectionId: 3,
          number: 26,
          text: "Si la palabra 'PARIS' se codifica numéricamente como 16-1-18-9-19 según el orden en el abecedario (A=1, B=2...), ¿cómo se codifica la palabra 'ROMA'?",
          options: [
            "17-14-12-1",
            "18-15-13-1",
            "18-16-14-1",
            "19-15-13-1"
          ],
          correctIndex: 1,
          explanation: "R es la letra 18, O es la letra 15, M es la letra 13 y A es la letra 1. Por ende, 'ROMA' se codifica como 18-15-13-1.",
          skill: "Criptografía y Correspondencia Alfanumérica",
          difficulty: "Intermedio"
        },
        {
          id: "adv-27",
          sectionId: 3,
          number: 27,
          text: "En un grupo, el 70% de los estudiantes juega baloncesto y el 50% juega voleibol. Si todos los estudiantes juegan al menos uno de los dos deportes, ¿qué porcentaje juega ambos deportes a la vez?",
          options: ["10%", "15%", "20%", "25%"],
          correctIndex: 2,
          explanation: "Principio de inclusión-exclusión: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Por tanto: 100% = 70% + 50% - Intersección => 100% = 120% - Intersección => Intersección = 20%.",
          skill: "Teoría de Conjuntos y Probabilidad",
          difficulty: "Desafiante"
        },
        {
          id: "adv-28",
          sectionId: 3,
          number: 28,
          text: "En lógica proposicional, si la proposición P es Verdadera y la proposición Q es Falsa, ¿cuál es el valor de verdad del condicional «P → Q»?",
          options: ["Verdadero", "Falso", "Tautológico", "Contradictorio"],
          correctIndex: 1,
          explanation: "La implicación condicional (P → Q) es falsa en un único caso: cuando el antecedente es Verdadero y el consecuente es Falso (V → F = F).",
          skill: "Tablas de Verdad",
          difficulty: "Desafiante"
        },
        {
          id: "adv-29",
          sectionId: 3,
          number: 29,
          text: "Un reloj analógico se atrasa 3 minutos exactamente cada 2 horas transcurridas. ¿Cuántos minutos de atraso acumulará al cabo de 24 horas?",
          options: ["24 minutos", "30 minutos", "36 minutos", "42 minutos"],
          correctIndex: 2,
          explanation: "En 24 horas hay 24 ÷ 2 = 12 intervalos de 2 horas. Si en cada intervalo se atrasa 3 minutos: 12 × 3 = 36 minutos de retraso total.",
          skill: "Problemas Cronométricos",
          difficulty: "Intermedio"
        },
        {
          id: "adv-30",
          sectionId: 3,
          number: 30,
          text: "¿Qué término filosófico y cognitivo define la capacidad humana de reflexionar sobre los propios procesos de pensamiento y aprendizaje?",
          options: ["Metacognición", "Anamnesis", "Dialéctica", "Solipsismo"],
          correctIndex: 0,
          explanation: "La metacognición es el conocimiento, monitoreo y regulación de los propios procesos cognitivos (aprender a aprender, evaluar las propias estrategias de razonamiento).",
          skill: "Metacognición y Teoría del Pensamiento",
          difficulty: "Intermedio"
        }
      ]
    }
  ]
};

export const ALL_EXAM_BANKS: ExamBank[] = [
  BANK_STANDARD,
  BANK_SCIENCES,
  BANK_HUMANITIES,
  BANK_ADVANCED_DIFFICULTY
];

// Dynamic Procedural Exam Generator: creates fresh variations drawing from verified banks with intelligent non-repeating selection
export function generateDynamicCustomExam(seedModifier?: number, mode: ExamMode = 'exam'): ExamBank {
  // Use selectSmartQuestions to draw 10 unique, non-repeating questions for each section
  const mathSelection = selectSmartQuestions({
    subjectId: 'matematicas',
    pool: QUESTIONS_MATEMATICAS,
    requestedCount: 10,
    mode
  });

  const lenguaSelection = selectSmartQuestions({
    subjectId: 'lengua',
    pool: QUESTIONS_LENGUA,
    requestedCount: 10,
    mode
  });

  const razonamientoSelection = selectSmartQuestions({
    subjectId: 'razonamiento',
    pool: QUESTIONS_RAZONAMIENTO,
    requestedCount: 10,
    mode
  });

  // Re-number questions sequentially 1..30
  const mathQuestions = mathSelection.selectedQuestions.map((q, i) => ({
    ...q,
    sectionId: 1,
    number: i + 1
  }));

  const lenguaQuestions = lenguaSelection.selectedQuestions.map((q, i) => ({
    ...q,
    sectionId: 2,
    number: i + 11
  }));

  const razonamientoQuestions = razonamientoSelection.selectedQuestions.map((q, i) => ({
    ...q,
    sectionId: 3,
    number: i + 21
  }));

  // Record usage in shared history
  recordQuestionsUsage('matematicas', 'Todos', mathQuestions, mode);
  recordQuestionsUsage('lengua', 'Todos', lenguaQuestions, mode);
  recordQuestionsUsage('razonamiento', 'Todos', razonamientoQuestions, mode);

  const timestamp = Date.now();
  const isPractice = mode === 'practice';

  const rawBank: ExamBank = {
    id: `dynamic-${mode}-${timestamp}`,
    title: isPractice ? 'Práctica Formativa Multidisciplinar' : 'Evaluación Formal Diagnóstica Multidisciplinar',
    subtitle: `30 Reactivos Seleccionados sin Repetición • ${isPractice ? 'Retroalimentación Inmediata' : 'Evaluación Oficial'}`,
    badge: isPractice ? 'Modo Práctica' : 'Modo Examen',
    description: `Batería diagnóstica de 30 reactivos auténticos seleccionados dinámicamente desde los bancos oficiales de NEXORA (${mode === 'practice' ? 'Práctica Formativa' : 'Examen Formal'}), garantizando variedad y cero repeticiones.`,
    sections: [
      {
        id: 1,
        title: "SECCIÓN 1: MATEMÁTICAS Y CÁLCULO APLICADO",
        shortTitle: "Matemáticas",
        icon: "Calculator",
        description: "Aritmética, álgebra, geometría y resolución de problemas cuantitativos.",
        questions: mathQuestions
      },
      {
        id: 2,
        title: "SECCIÓN 2: LENGUA, COMUNICACIÓN Y COMPRENSIÓN",
        shortTitle: "Lengua",
        icon: "BookOpen",
        description: "Gramática, ortografía, léxico y comprensión lectora.",
        questions: lenguaQuestions
      },
      {
        id: 3,
        title: "SECCIÓN 3: RAZONAMIENTO Y DEDUCCIÓN LÓGICA",
        shortTitle: "Razonamiento",
        icon: "Brain",
        description: "Series lógicas, analogías verbales, deducción abstracta y resolución espacial.",
        questions: razonamientoQuestions
      }
    ]
  };

  return balanceExamBank(rawBank);
}

// Function that builds Google Apps Script code for ANY ExamBank dynamically
export function generateAppsScriptForBank(bank: ExamBank): string {
  const sectionsArrayCode = bank.sections.map(sec => {
    const questionsCode = sec.questions.map(q => {
      const qEscaped = JSON.stringify(q.text);
      const optsEscaped = JSON.stringify(q.options);
      return `        [${qEscaped}, ${optsEscaped}, ${q.correctIndex}]`;
    }).join(',\n');

    return `    {
      titulo: ${JSON.stringify(sec.title)},
      descripcion: ${JSON.stringify(sec.description || '')},
      preguntas: [
${questionsCode}
      ]
    }`;
  }).join(',\n');

  const formTitle = bank.id === 'standard-30' ? "PRUEBAS DE AYUDA DE ESTUDIO" : (bank.title + " - 30 PREGUNTAS");
  const formDesc = 
    `"📘 ${formTitle}\\n\\n" +\n` +
    `    ${JSON.stringify(bank.subtitle || 'EVALUACIÓN DIAGNÓSTICA')}\\n\\n" +\n` +
    `    "📌 TOTAL: 30 PREGUNTAS\\n" +\n` +
    `    "🏆 PUNTAJE MÁXIMO: 30 PUNTOS\\n\\n" +\n` +
    `    "INSTRUCCIONES:\\n" +\n` +
    `    "• Lee cuidadosamente cada pregunta.\\n" +\n` +
    `    "• Selecciona una sola respuesta.\\n" +\n` +
    `    "• Todas las preguntas son obligatorias.\\n" +\n` +
    `    "• Cada respuesta correcta vale 1 punto.\\n\\n" +\n` +
    `    "¡DEMUESTRA TUS CONOCIMIENTOS Y DA LO MEJOR DE TI!"`;

  return `function crearPruebaDiagnostico() {
  const form = FormApp.create(${JSON.stringify(formTitle)});

  // CONFIGURACIÓN GENERAL
  form.setDescription(
    ${formDesc}
  );

  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setShuffleQuestions(false);
  form.setConfirmationMessage(
    "¡EVALUACIÓN COMPLETADA!\\n\\n" +
    "Gracias por participar en ${formTitle}. " +
    "Sigue aprendiendo, practicando y superándote cada día."
  );

  const secciones = [
${sectionsArrayCode}
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
}
