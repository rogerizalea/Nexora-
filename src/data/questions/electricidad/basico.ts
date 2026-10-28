import { Question } from '../../../types';

export const ELECTRICIDAD_BASICO: Question[] = [
  {
    "id": "ele-bas-1",
    "sectionId": 10,
    "number": 1,
    "text": "¿Cuál es la unidad básica del Sistema Internacional para medir la corriente eléctrica?",
    "options": [
      "Voltio (V)",
      "Amperio (A)",
      "Ohmio (Ω)",
      "Vatio (W)"
    ],
    "correctIndex": 1,
    "explanation": "El amperio (A) mide la intensidad de corriente eléctrica, definida como el flujo de un culombio de carga por segundo (1 A = 1 C/s).",
    "skill": "Unidades Eléctricas Básicas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Conceptos Eléctricos Fundamentales",
    "subtopic": "Corriente y Amperio"
  },
  {
    "id": "ele-bas-2",
    "sectionId": 10,
    "number": 2,
    "text": "¿Qué magnitud física mide la oposición natural que presenta un material al paso de la corriente eléctrica?",
    "options": [
      "Voltaje",
      "Resistencia eléctrica",
      "Potencia",
      "Capacitancia"
    ],
    "correctIndex": 1,
    "explanation": "La resistencia eléctrica (R), medida en ohmios (Ω), cuantifica la dificultad que encuentran los electrones al fluir por un conductor.",
    "skill": "Resistencia Eléctrica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Leyes Básicas",
    "subtopic": "Resistencia y Ohm"
  },
  {
    "id": "ele-bas-3",
    "sectionId": 10,
    "number": 3,
    "text": "¿Qué componente eléctrico básico se utiliza para abrir o cerrar intencionalmente el paso de la corriente en un circuito?",
    "options": [
      "Fusible",
      "Interruptor",
      "Transformador",
      "Condensador"
    ],
    "correctIndex": 1,
    "explanation": "El interruptor es un dispositivo de control mecánico que conmuta entre circuito abierto (sin paso de corriente) y circuito cerrado.",
    "skill": "Componentes de Control Básico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Circuitos Elementales",
    "subtopic": "Interruptores"
  },
  {
    "id": "ele-bas-4",
    "sectionId": 10,
    "number": 4,
    "text": "¿Cuál de los siguientes materiales es un aislante eléctrico comúnmente utilizado para recubrir cables de cobre?",
    "options": [
      "Plástico PVC",
      "Aluminio",
      "Plata",
      "Hierro"
    ],
    "correctIndex": 0,
    "explanation": "Los polímeros plásticos (como el PVC) tienen electrones fuertemente ligados que impiden la conducción, protegiendo contra descargas.",
    "skill": "Materiales Conductores y Aislantes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Materiales Eléctricos",
    "subtopic": "Aislantes"
  },
  {
    "id": "ele-bas-5",
    "sectionId": 10,
    "number": 5,
    "text": "¿Qué ocurre en un circuito eléctrico en serie si una de las bombillas conectadas se quema o se desconecta?",
    "options": [
      "Las demás bombillas brillan con el doble de intensidad",
      "Todas las demás bombillas se apagan porque el circuito queda abierto",
      "El circuito se pone en cortocircuito",
      "No ocurre ningún cambio en las demás"
    ],
    "correctIndex": 1,
    "explanation": "En un circuito serie existe un único camino continuo para la corriente; si se interrumpe en cualquier punto, la corriente cesa por completo.",
    "skill": "Circuitos en Serie",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Topologías de Circuitos",
    "subtopic": "Circuito Serie Básico"
  },
  {
    "id": "ele-bas-6",
    "sectionId": 10,
    "number": 6,
    "text": "¿Qué instrumento de medición portátil se utiliza para medir voltaje, corriente y resistencia en un solo dispositivo?",
    "options": [
      "Osciloscopio",
      "Multímetro (o polímetro tester)",
      "Tacómetro",
      "Vatímetro analógico"
    ],
    "correctIndex": 1,
    "explanation": "El multímetro integra voltímetro (AC/DC), amperímetro y óhmetro en una herramienta de diagnóstico estándar.",
    "skill": "Instrumental Eléctrico de Medición",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Herramientas de Taller",
    "subtopic": "El Multímetro"
  },
  {
    "id": "ele-bas-7",
    "sectionId": 10,
    "number": 7,
    "text": "¿Qué tipo de corriente eléctrica suministran las pilas alcalinas y las baterías de automóviles?",
    "options": [
      "Corriente Alterna (CA)",
      "Corriente Continua (CC o DC)",
      "Corriente trifásica",
      "Corriente pulsante senoidal"
    ],
    "correctIndex": 1,
    "explanation": "Las baterías electroquímicas generan corriente continua constante con polaridad fija (+ y -) que fluye en una sola dirección.",
    "skill": "Tipos de Corriente Eléctrica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fuentes de Alimentación",
    "subtopic": "Corriente Continua (DC)"
  },
  {
    "id": "ele-bas-8",
    "sectionId": 10,
    "number": 8,
    "text": "¿Cuál es la función primordial de un fusible en una instalación eléctrica domiciliaria o vehicular?",
    "options": [
      "Aumentar la tensión de la red",
      "Proteger el circuito fundiéndose e interrumpiendo la corriente ante una sobrecorriente o cortocircuito peligroso",
      "Almacenar energía electrostática",
      "Medir el consumo en kilovatios-hora"
    ],
    "correctIndex": 1,
    "explanation": "El fusible contiene un hilo metálico calibrado que se funde por efecto Joule cuando la corriente supera el valor nominal de seguridad.",
    "skill": "Dispositivos de Protección Pasiva",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad Eléctrica",
    "subtopic": "Fusibles"
  },
  {
    "id": "ele-bas-9",
    "sectionId": 10,
    "number": 9,
    "text": "En una conexión doméstica de tomacorriente en paralelo, ¿qué ventaja fundamental tiene respecto a una conexión en serie?",
    "options": [
      "Si se desconecta o apaga un electrodoméstico, todos los demás continúan funcionando normalmente con el mismo voltaje",
      "Requiere un solo cable para toda la casa",
      "Aumenta la resistencia total del hogar",
      "Evita el uso de interruptores"
    ],
    "correctIndex": 0,
    "explanation": "En paralelo, cada rama es independiente y recibe la tensión nominal completa de la red (110 V o 220 V) independientemente de las otras.",
    "skill": "Circuitos en Paralelo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Instalaciones Eléctricas",
    "subtopic": "Ventajas del Circuito en Paralelo"
  },
  {
    "id": "ele-bas-10",
    "sectionId": 10,
    "number": 10,
    "text": "¿Cuál es la ley básica de la electrostática para las cargas eléctricas de igual y distinto signo?",
    "options": [
      "Cargas del mismo signo se atraen y de signo opuesto se repelen",
      "Cargas del mismo signo se repelen y cargas de signo opuesto se atraen",
      "Todas las cargas se atraen independientemente de su signo",
      "Las cargas neutras repelen a las positivas"
    ],
    "correctIndex": 1,
    "explanation": "Es la ley fundamental de atracción y repulsión electrostática expresada cuantitativamente por la Ley de Coulomb.",
    "skill": "Electrostática Fundamental",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Cargas Eléctricas",
    "subtopic": "Atracción y Repulsión"
  },
  {
    "id": "ele-bas-11",
    "sectionId": 10,
    "number": 11,
    "text": "¿Qué componente semiconductor emite luz visible cuando circula corriente eléctrica a través de él en sentido directo?",
    "options": [
      "Diodo Zener",
      "Diodo Emisor de Luz (LED)",
      "Termistor NTC",
      "Condensador electrolítico"
    ],
    "correctIndex": 1,
    "explanation": "El LED (Light Emitting Diode) emite fotones por electroluminiscencia cuando los electrones recombinan con huecos en la unión p-n polarizada directamente.",
    "skill": "Componentes Optoelectrónicos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Electrónica Básica",
    "subtopic": "Diodos LED"
  },
  {
    "id": "ele-bas-12",
    "sectionId": 10,
    "number": 12,
    "text": "¿Qué unidad mide la diferencia de potencial eléctrico o tensión que impulsa a los electrones a moverse?",
    "options": [
      "Ohmio",
      "Voltio (V)",
      "Amperio",
      "Joule"
    ],
    "correctIndex": 1,
    "explanation": "El voltio (V) es la unidad del SI para el potencial eléctrico, fuerza electromotriz (FEM) y caída de tensión (1 V = 1 J/C).",
    "skill": "Tensión y Potencial Eléctrico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Magnitudes Eléctricas",
    "subtopic": "Voltio y Tensión"
  },
  {
    "id": "ele-bas-13",
    "sectionId": 10,
    "number": 13,
    "text": "¿Cómo se llama el cable de seguridad de color verde o verde-amarillo que conecta las carcasas metálicas a tierra?",
    "options": [
      "Cable de fase",
      "Cable neutro",
      "Cable de puesta a tierra (tierra de protección)",
      "Cable de retorno"
    ],
    "correctIndex": 2,
    "explanation": "El conductor de protección a tierra deriva corrientes de fuga hacia una jabalina enterrada para evitar choques eléctricos al usuario.",
    "skill": "Código de Colores y Puesta a Tierra",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad Eléctrica",
    "subtopic": "Conductor de Protección PE"
  },
  {
    "id": "ele-bas-14",
    "sectionId": 10,
    "number": 14,
    "text": "¿Qué fenómeno térmico provoca que un conductor se caliente cuando circula por él una corriente eléctrica (como en una estufa o tostadora)?",
    "options": [
      "Efecto Meissner",
      "Efecto Joule",
      "Efecto Hall",
      "Efecto Seebeck"
    ],
    "correctIndex": 1,
    "explanation": "El efecto Joule disipa potencia en forma de calor por choque inelástico de electrones con los átomos del conductor: Q = I² · R · t.",
    "skill": "Efecto Joule y Conversión Térmica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Termodinámica Eléctrica",
    "subtopic": "Efecto Joule"
  },
  {
    "id": "ele-bas-15",
    "sectionId": 10,
    "number": 15,
    "text": "¿Qué componente pasivo tiene la capacidad de almacenar carga eléctrica en un campo electrostático entre dos placas conductoras separadas por un dieléctrico?",
    "options": [
      "Inductor",
      "Condensador (o capacitor)",
      "Resistencia",
      "Potenciómetro"
    ],
    "correctIndex": 1,
    "explanation": "El condensador almacena carga Q = C · V en sus armaduras, oponiéndose a cambios bruscos de tensión.",
    "skill": "Capacitancia y Condensadores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Componentes Pasivos",
    "subtopic": "Condensadores"
  },
  {
    "id": "ele-bas-16",
    "sectionId": 10,
    "number": 16,
    "text": "Si tocas accidentalmente un cable energizado con las manos mojadas, ¿qué le ocurre a la resistencia del cuerpo humano y al riesgo de electrocución?",
    "options": [
      "La resistencia del cuerpo disminuye drásticamente, aumentando la corriente que lo atraviesa y el peligro letal",
      "La resistencia aumenta y el cuerpo queda aislado",
      "El agua bloquea completamente la corriente eléctrica",
      "No hay ninguna diferencia con las manos secas"
    ],
    "correctIndex": 0,
    "explanation": "La piel húmeda reduce la resistencia cutánea de más de 100,000 Ω a menos de 1,000 Ω, facilitando el paso de corrientes que inducen fibrilación.",
    "skill": "Riesgo Eléctrico y Seguridad Humana",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad Ocupacional",
    "subtopic": "Resistencia Corporal y Humedad"
  },
  {
    "id": "ele-bas-17",
    "sectionId": 10,
    "number": 17,
    "text": "¿Qué dispositivo electromagnético utiliza una pequeña corriente en una bobina para accionar mecánicamente un interruptor de alta corriente?",
    "options": [
      "Relé (o relevador electromecánico)",
      "Transformador reductor",
      "Resistencia variable",
      "Diodo Schottky"
    ],
    "correctIndex": 0,
    "explanation": "El relé utiliza el campo magnético de un electroimán para cerrar o abrir contactos de potencia de forma galvánicamente aislada.",
    "skill": "Dispositivos Electromecánicos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Automatización Básica",
    "subtopic": "El Relé Electromecánico"
  },
  {
    "id": "ele-bas-18",
    "sectionId": 10,
    "number": 18,
    "text": "¿Qué tipo de pila no se puede recargar y debe desecharse en puntos limpios una vez agotada su energía química inicial?",
    "options": [
      "Batería de iones de litio",
      "Pila primaria (no recargable alcalina)",
      "Batería de plomo-ácido",
      "Batería NiMH"
    ],
    "correctIndex": 1,
    "explanation": "Las celdas primarias experimentan reacciones electroquímicas irreversibles durante la descarga, a diferencia de los acumuladores secundarios recargables.",
    "skill": "Pilas y Acumuladores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fuentes Electroquímicas",
    "subtopic": "Pilas Primarias vs Secundarias"
  },
  {
    "id": "ele-bas-19",
    "sectionId": 10,
    "number": 19,
    "text": "¿Cuál es la ley física que relaciona la tensión (V), la corriente (I) y la resistencia (R) en un circuito resistivo básico?",
    "options": [
      "Ley de Faraday",
      "Ley de Ohm (V = I · R)",
      "Ley de Coulomb",
      "Ley de Ampère"
    ],
    "correctIndex": 1,
    "explanation": "La Ley de Georg Simon Ohm es la base del análisis de circuitos eléctricos lineales: la corriente es directamente proporcional al voltaje e inversamente proporcional a la resistencia.",
    "skill": "Ley de Ohm Fundamental",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Circuitos Eléctricos",
    "subtopic": "Ley de Ohm"
  },
  {
    "id": "ele-bas-20",
    "sectionId": 10,
    "number": 20,
    "text": "¿Qué componente resistivo permite variar manualmente su valor de resistencia girando un eje o perilla (como el control de volumen de una radio)?",
    "options": [
      "Termistor",
      "Potenciómetro (o reóstato)",
      "Fotocélula LDR",
      "Varistor"
    ],
    "correctIndex": 1,
    "explanation": "El potenciómetro es una resistencia de tres terminales con un cursor móvil que actúa como divisor de tensión ajustable manual.",
    "skill": "Resistencias Variables",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Componentes Electrónicos",
    "subtopic": "Potenciómetros"
  },
  {
    "id": "ele-bas-21",
    "sectionId": 10,
    "number": 21,
    "text": "¿Cuál es el valor aproximado de la carga eléctrica elemental de un electrón en el Sistema Internacional?",
    "options": [
      "9.109 × 10⁻³¹ Culombios",
      "6.242 × 10¹⁸ Culombios",
      "1.000 × 10⁻¹² Culombios",
      "1.602 × 10⁻¹⁹ Culombios"
    ],
    "correctIndex": 3,
    "explanation": "La carga eléctrica elemental fundamental de un electrón es negativa e igual a -1.602 × 10⁻¹⁹ C.",
    "skill": "Carga Eléctrica Fundamental",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Carga del Electrón"
  },
  {
    "id": "ele-bas-22",
    "sectionId": 10,
    "number": 22,
    "text": "¿En qué sentido se mueven realmente los electrones libres dentro de un conductor metálico conectado a una fuente de corriente continua?",
    "options": [
      "En círculos cerrados perpendiculares al cable",
      "No se mueven, solo vibran sin desplazamiento neto",
      "Del borne negativo hacia el borne positivo",
      "Del borne positivo hacia el borne negativo"
    ],
    "correctIndex": 2,
    "explanation": "El sentido real del flujo de electrones es de menor a mayor potencial (del polo negativo hacia el polo positivo), aunque históricamente se definió el sentido convencional en dirección opuesta.",
    "skill": "Sentido de la Corriente",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Teoría de Circuitos",
    "subtopic": "Flujo Electrónico vs Convencional"
  },
  {
    "id": "ele-bas-23",
    "sectionId": 10,
    "number": 23,
    "text": "¿Cuál de los siguientes metales es el mejor conductor de la electricidad a temperatura ambiente?",
    "options": [
      "Hierro",
      "Plata",
      "Cobre",
      "Aluminio"
    ],
    "correctIndex": 1,
    "explanation": "La plata (Ag) tiene la menor resistividad eléctrica (1.59 × 10⁻⁸ Ω·m), superando ligeramente al cobre, aunque el cobre es el más utilizado industrialmente por su costo accesible.",
    "skill": "Materiales Conductores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Propiedades de los Materiales",
    "subtopic": "Conductividad de los Metales"
  },
  {
    "id": "ele-bas-24",
    "sectionId": 10,
    "number": 24,
    "text": "¿Cuál es la función principal de la cubierta de PVC que envuelve los cables eléctricos domésticos?",
    "options": [
      "Aumentar el peso y flexibilidad del cable",
      "Servir de aislante eléctrico para evitar descargas y cortocircuitos",
      "Enfriar el conductor mediante disipación térmica activa",
      "Acelerar la velocidad de los electrones"
    ],
    "correctIndex": 1,
    "explanation": "El policloruro de vinilo (PVC) es un material dieléctrico (aislante) que confina la corriente eléctrica dentro del conductor metálico y protege al usuario de contactos accidentales.",
    "skill": "Aislamiento Eléctrico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Materiales y Seguridad",
    "subtopic": "Dieléctricos y Aislantes"
  },
  {
    "id": "ele-bas-25",
    "sectionId": 10,
    "number": 25,
    "text": "¿Qué ocurre con la resistencia de un cable conductor uniforme si se duplica su longitud manteniendo constante su sección transversal?",
    "options": [
      "La resistencia se reduce a la mitad",
      "La resistencia se cuadruplica",
      "La resistencia permanece constante",
      "La resistencia se duplica"
    ],
    "correctIndex": 3,
    "explanation": "Según la ley de resistividad R = ρ·L/A, la resistencia eléctrica es directamente proporcional a la longitud (L) del conductor.",
    "skill": "Resistencia de Conductores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Leyes Básicas",
    "subtopic": "Geometría de Conductores"
  },
  {
    "id": "ele-bas-26",
    "sectionId": 10,
    "number": 26,
    "text": "¿Qué ocurre con la resistencia eléctrica de un alambre si se duplica el área de su sección transversal transversal (grosor) manteniendo la misma longitud?",
    "options": [
      "Se cuadruplica",
      "No cambia porque el material es el mismo",
      "Se reduce a la mitad",
      "Se duplica"
    ],
    "correctIndex": 2,
    "explanation": "La resistencia es inversamente proporcional al área transversal (R = ρ·L/A). A mayor grosor, mayor facilidad para el paso de electrones, disminuyendo la resistencia a la mitad.",
    "skill": "Resistencia de Conductores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Leyes Básicas",
    "subtopic": "Sección Transversal"
  },
  {
    "id": "ele-bas-27",
    "sectionId": 10,
    "number": 27,
    "text": "¿Cómo se denomina el fenómeno físico por el cual un conductor desprende calor al circular por él una corriente eléctrica?",
    "options": [
      "Efecto Doppler",
      "Efecto Joule",
      "Efecto Hall",
      "Efecto Fotoeléctrico"
    ],
    "correctIndex": 1,
    "explanation": "El efecto Joule establece que la energía eléctrica disipada en forma de calor en un conductor es proporcional al cuadrado de la intensidad de corriente, a la resistencia y al tiempo (Q = I²·R·t).",
    "skill": "Efecto Joule",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Energía y Calor",
    "subtopic": "Disipación Térmica"
  },
  {
    "id": "ele-bas-28",
    "sectionId": 10,
    "number": 28,
    "text": "¿En qué tipo de electrodoméstico se aprovecha de manera intencional y útil el efecto Joule?",
    "options": [
      "En una tostadora de pan",
      "En un ventilador de techo",
      "En un transformador reductor",
      "En un teléfono celular"
    ],
    "correctIndex": 0,
    "explanation": "Las tostadoras, calentadores de agua, estufas eléctricas y planchas utilizan resistencias calefactoras diseñadas para transformar energía eléctrica en calor mediante el efecto Joule.",
    "skill": "Aplicaciones del Efecto Joule",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Artefactos Eléctricos",
    "subtopic": "Resistencias Calefactoras"
  },
  {
    "id": "ele-bas-29",
    "sectionId": 10,
    "number": 29,
    "text": "En el código de colores de resistencias de 4 bandas, ¿qué valor numérico representa el color negro en las bandas de dígitos significativos?",
    "options": [
      "1",
      "2",
      "5",
      "0"
    ],
    "correctIndex": 3,
    "explanation": "En la convención internacional del código de colores para resistores, el color negro equivale al dígito 0 (marrón = 1, rojo = 2, naranja = 3...).",
    "skill": "Código de Colores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Componentes Pasivos",
    "subtopic": "Lectura de Resistores"
  },
  {
    "id": "ele-bas-30",
    "sectionId": 10,
    "number": 30,
    "text": "En una resistencia de 4 bandas, si las tres primeras bandas son Marrón (1), Negro (0) y Rojo (multiplicador ×100), ¿cuál es su valor nominal?",
    "options": [
      "10,000 Ω (10 kΩ)",
      "120 Ω",
      "1,000 Ω (1 kΩ)",
      "100 Ω"
    ],
    "correctIndex": 2,
    "explanation": "Dígitos 1 y 0 forman '10', multiplicado por 10² (100) resulta en 1,000 Ω o 1 kiloohmio (1 kΩ).",
    "skill": "Código de Colores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Componentes Pasivos",
    "subtopic": "Cálculo de Resistencia Nominal"
  },
  {
    "id": "ele-bas-31",
    "sectionId": 10,
    "number": 31,
    "text": "¿Qué porcentaje de tolerancia indica la cuarta banda de color dorado (oro) en un resistor estándar?",
    "options": [
      "±20%",
      "±5%",
      "±10%",
      "±1%"
    ],
    "correctIndex": 1,
    "explanation": "La banda dorada representa una tolerancia del ±5%, mientras que la plateada representa ±10% y la ausencia de banda un ±20%.",
    "skill": "Código de Colores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Componentes Pasivos",
    "subtopic": "Tolerancia de Resistores"
  },
  {
    "id": "ele-bas-32",
    "sectionId": 10,
    "number": 32,
    "text": "¿Qué instrumento de medición debe conectarse obligatoriamente en paralelo con el componente cuya magnitud se desea medir?",
    "options": [
      "Voltímetro",
      "Amperímetro",
      "Vatímetro en su bobina de corriente",
      "Tacómetro"
    ],
    "correctIndex": 0,
    "explanation": "El voltímetro tiene una resistencia interna muy alta y debe colocarse en paralelo para medir la diferencia de potencial entre dos nodos sin alterar la corriente del circuito.",
    "skill": "Instrumentación Básica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mediciones Eléctricas",
    "subtopic": "Conexión del Voltímetro"
  },
  {
    "id": "ele-bas-33",
    "sectionId": 10,
    "number": 33,
    "text": "¿Qué instrumento de medición debe conectarse en serie abriendo el circuito para medir la magnitud correspondiente?",
    "options": [
      "Voltímetro",
      "Frecuencímetro",
      "Osciloscopio",
      "Amperímetro"
    ],
    "correctIndex": 3,
    "explanation": "El amperímetro posee una resistencia interna prácticamente nula y debe colocarse en serie con la rama para que toda la corriente fluya a través de él.",
    "skill": "Instrumentación Básica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mediciones Eléctricas",
    "subtopic": "Conexión del Amperímetro"
  },
  {
    "id": "ele-bas-34",
    "sectionId": 10,
    "number": 34,
    "text": "¿Qué precaución crítica se debe tener antes de medir la resistencia de un componente con un óhmetro?",
    "options": [
      "Medir en serie mientras el circuito está operando",
      "Invertir rápidamente las puntas de prueba con corriente activa",
      "Desconectar completamente la fuente de energía del circuito",
      "Conectar el circuito a la máxima tensión posible"
    ],
    "correctIndex": 2,
    "explanation": "El óhmetro inyecta una pequeña corriente desde su propia batería interna. Si el circuito está energizado, la lectura será errónea y el instrumento puede destruirse.",
    "skill": "Uso del Óhmetro",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mediciones Eléctricas",
    "subtopic": "Seguridad con Óhmetro"
  },
  {
    "id": "ele-bas-35",
    "sectionId": 10,
    "number": 35,
    "text": "Si se conectan tres bombillos idénticos en un circuito en serie y uno de ellos se quema (se abre su filamento), ¿qué sucede con los demás?",
    "options": [
      "El circuito entra en cortocircuito inmediato",
      "Todos se apagan inmediatamente porque se interrumpe el paso de la corriente",
      "Los otros dos bombillos brillan con el doble de intensidad",
      "Los otros dos continúan funcionando normalmente sin cambios"
    ],
    "correctIndex": 1,
    "explanation": "En un circuito en serie existe un único camino para la corriente. Si cualquier componente se abre, el circuito queda abierto y la corriente se vuelve cero.",
    "skill": "Circuitos Serie",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Configuración de Circuitos",
    "subtopic": "Interrupción en Serie"
  },
  {
    "id": "ele-bas-36",
    "sectionId": 10,
    "number": 36,
    "text": "Si tres focos están conectados en paralelo en una vivienda y uno de ellos se quema, ¿qué sucede con los otros dos?",
    "options": [
      "Permanecen encendidos con el mismo brillo habitual",
      "Se apagan todos al instante",
      "Comienzan a parpadear a baja frecuencia",
      "Reducen su iluminación a la mitad"
    ],
    "correctIndex": 0,
    "explanation": "En una conexión en paralelo cada carga está conectada directamente a los bornes de la fuente de alimentación; por ello, la desconexión de una rama no interrumpe el suministro a las demás.",
    "skill": "Circuitos Paralelo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Configuración de Circuitos",
    "subtopic": "Independencia de Ramas en Paralelo"
  },
  {
    "id": "ele-bas-37",
    "sectionId": 10,
    "number": 37,
    "text": "¿Cuál es la frecuencia estándar de la red de corriente alterna residencial en el Ecuador y la mayor parte de América del Norte?",
    "options": [
      "50 Hz",
      "100 Hz",
      "120 Hz",
      "60 Hz"
    ],
    "correctIndex": 3,
    "explanation": "En Ecuador, Estados Unidos, Colombia y México la red eléctrica domiciliaria e industrial opera a una frecuencia de 60 ciclos por segundo (60 Hz). En Europa y el Cono Sur opera a 50 Hz.",
    "skill": "Sistemas de Suministro Eléctrico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Corriente Alterna",
    "subtopic": "Frecuencia de Red"
  },
  {
    "id": "ele-bas-38",
    "sectionId": 10,
    "number": 38,
    "text": "¿Cuál es el voltaje eficaz típico entre fase y neutro en las tomas residenciales estándar de Ecuador?",
    "options": [
      "380 V",
      "12 V",
      "120 V (o 127 V)",
      "240 V"
    ],
    "correctIndex": 2,
    "explanation": "La tensión monofásica nominal de servicio en los hogares ecuatorianos es típicamente de 120 V a 60 Hz.",
    "skill": "Sistemas Residenciales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Suministro Eléctrico",
    "subtopic": "Tensión Nominal Residencial"
  },
  {
    "id": "ele-bas-39",
    "sectionId": 10,
    "number": 39,
    "text": "¿Qué función cumple el cable de 'tierra' (conductor de protección) en un tomacorriente con clavija de tres patas?",
    "options": [
      "Funcionar como antena para señales inalámbricas",
      "Derivar corrientes de fuga hacia el suelo para evitar descargas a las personas",
      "Aumentar el voltaje para que los electrodomésticos tengan más fuerza",
      "Servir de retorno para la corriente normal del equipo"
    ],
    "correctIndex": 1,
    "explanation": "El conductor de puesta a tierra conecta las carcasas metálicas de los aparatos a tierra física, de modo que cualquier fuga accidental active las protecciones y no descargue sobre el usuario.",
    "skill": "Seguridad y Puesta a Tierra",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad Eléctrica",
    "subtopic": "Conductor de Protección"
  },
  {
    "id": "ele-bas-40",
    "sectionId": 10,
    "number": 40,
    "text": "¿Qué color de aislamiento se asigna convencionalmente al conductor de puesta a tierra según los estándares internacionales de electricidad?",
    "options": [
      "Verde o verde con franja amarilla",
      "Rojo o negro",
      "Azul claro",
      "Blanco"
    ],
    "correctIndex": 0,
    "explanation": "Las normas IEC y NEC designan universalmente el color verde (o verde con franja amarilla) exclusivamente para el conductor de protección a tierra.",
    "skill": "Código de Colores de Conductores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Instalaciones Básicas",
    "subtopic": "Identificación de Puesta a Tierra"
  },
  {
    "id": "ele-bas-41",
    "sectionId": 10,
    "number": 41,
    "text": "¿Qué elemento de protección contiene un filamento metálico calibrado que se funde deliberadamente cuando la corriente supera un valor límite?",
    "options": [
      "Relé de estado sólido",
      "Transformador",
      "Diodo Zener",
      "Fusible"
    ],
    "correctIndex": 3,
    "explanation": "El fusible es un dispositivo sacrificial que se calienta y funde por efecto Joule al haber sobrecorriente, abriendo el circuito para resguardar los equipos.",
    "skill": "Protección por Fusibles",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Dispositivos de Protección",
    "subtopic": "Principio del Fusible"
  },
  {
    "id": "ele-bas-42",
    "sectionId": 10,
    "number": 42,
    "text": "¿Cuál es la principal ventaja de un interruptor termomagnético (breaker) frente a un fusible tradicional?",
    "options": [
      "Genera energía auxiliar cuando se corta la luz",
      "Funciona sin necesidad de conectarse a ningún cable",
      "Se puede restablecer manualmente tras un disparo sin necesidad de reemplazar piezas",
      "Es completamente inmune a los cortocircuitos"
    ],
    "correctIndex": 2,
    "explanation": "A diferencia del fusible que queda inservible al fundirse, el termomagnético se rearma mediante su palanca tras solucionar la causa de la sobrecarga o cortocircuito.",
    "skill": "Dispositivos de Protección",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Protecciones Residenciales",
    "subtopic": "Breakers vs Fusibles"
  },
  {
    "id": "ele-bas-43",
    "sectionId": 10,
    "number": 43,
    "text": "¿Qué tipo de corriente suministra una pila alcalina de 1.5 V estándar?",
    "options": [
      "Corriente pulsante de alta frecuencia",
      "Corriente continua (DC)",
      "Corriente alterna monofásica",
      "Corriente trifásica senoidal"
    ],
    "correctIndex": 1,
    "explanation": "Las pilas y baterías químicas proporcionan corriente continua (CC o DC), en la cual los electrones fluyen constantemente en una sola dirección con magnitud invariable en el tiempo.",
    "skill": "Fuentes de Alimentación",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Generación Electroquímica",
    "subtopic": "Pilas Alcalinas"
  },
  {
    "id": "ele-bas-44",
    "sectionId": 10,
    "number": 44,
    "text": "¿Qué componente electrónico de dos terminales permite el paso de la corriente eléctrica en un único sentido y la bloquea en sentido contrario?",
    "options": [
      "Diodo",
      "Resistor",
      "Capacitor",
      "Inductor"
    ],
    "correctIndex": 0,
    "explanation": "El diodo semiconductor actúa como una válvula unidireccional: conduce corriente cuando está polarizado directamente y se comporta como circuito abierto en inversa.",
    "skill": "Componentes Semiconductores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Electrónica Básica",
    "subtopic": "Diodo Semiconductor"
  },
  {
    "id": "ele-bas-45",
    "sectionId": 10,
    "number": 45,
    "text": "¿Qué significan las siglas LED en el ámbito de la electrónica y la iluminación moderna?",
    "options": [
      "Low Energy Detector",
      "Linear Electric Device",
      "Laser Electronic Discharge",
      "Light Emitting Diode (Diodo Emisor de Luz)"
    ],
    "correctIndex": 3,
    "explanation": "LED son las siglas en inglés de Light Emitting Diode, un diodo semiconductor de unión p-n que emite fotones de luz cuando circula corriente directa a través de él.",
    "skill": "Optoelectrónica Básica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Componentes Electrónicos",
    "subtopic": "Diodo LED"
  },
  {
    "id": "ele-bas-46",
    "sectionId": 10,
    "number": 46,
    "text": "¿Por qué es fundamental conectar una resistencia limitadora en serie con un diodo LED en un circuito de CC?",
    "options": [
      "Para cambiar el color de la luz emitida",
      "Para convertir la corriente continua en alterna",
      "Para limitar la corriente y evitar que el LED se queme por sobreintensidad",
      "Para elevar el voltaje de la fuente al doble"
    ],
    "correctIndex": 2,
    "explanation": "Un LED tiene una resistencia interna muy baja una vez superada su tensión umbral. Sin un resistor en serie que limite la corriente, circularía una corriente destructiva.",
    "skill": "Circuitos con Semiconductores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Polarización de LEDs",
    "subtopic": "Resistencia Limitadora"
  },
  {
    "id": "ele-bas-47",
    "sectionId": 10,
    "number": 47,
    "text": "¿Qué componente pasivo tiene la propiedad de almacenar energía eléctrica en forma de campo electrostático entre dos placas conductoras?",
    "options": [
      "Transformador",
      "Condensador (o capacitor)",
      "Inductor (bobina)",
      "Resistor de carbón"
    ],
    "correctIndex": 1,
    "explanation": "El capacitor acumula carga eléctrica en dos armaduras conductoras separadas por un dieléctrico, almacenando energía en su campo electrostático (E = ½ C·V²).",
    "skill": "Componentes Pasivos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Capacitores",
    "subtopic": "Almacenamiento de Carga"
  },
  {
    "id": "ele-bas-48",
    "sectionId": 10,
    "number": 48,
    "text": "¿Cuál es la unidad del Sistema Internacional para medir la capacitancia de un condensador?",
    "options": [
      "Faradio (F)",
      "Henrio (H)",
      "Tesla (T)",
      "Weber (Wb)"
    ],
    "correctIndex": 0,
    "explanation": "La capacitancia eléctrica se mide en Faradios (F), definida como un culombio de carga por cada voltio de diferencia de potencial (1 F = 1 C/V).",
    "skill": "Unidades Eléctricas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Capacitores",
    "subtopic": "Unidad Faradio"
  },
  {
    "id": "ele-bas-49",
    "sectionId": 10,
    "number": 49,
    "text": "¿Qué componente pasivo consiste en un hilo conductor enrollado que almacena energía en forma de campo magnético cuando circula corriente?",
    "options": [
      "Resistor cerámico",
      "Condensador cerámico",
      "Fotodiodo",
      "Inductor (o bobina)"
    ],
    "correctIndex": 3,
    "explanation": "Una bobina o inductor almacena energía en su campo magnético al ser atravesada por una corriente eléctrica, oponiéndose a cambios bruscos de corriente.",
    "skill": "Componentes Pasivos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Inductores",
    "subtopic": "Bobinas y Campo Magnético"
  },
  {
    "id": "ele-bas-50",
    "sectionId": 10,
    "number": 50,
    "text": "¿Cuál es la unidad del Sistema Internacional empleada para medir la inductancia eléctrica?",
    "options": [
      "Siemens (S)",
      "Lumen (lm)",
      "Henrio (H)",
      "Faradio (F)"
    ],
    "correctIndex": 2,
    "explanation": "La inductancia (L) se mide en Henrios (H) en honor a Joseph Henry.",
    "skill": "Unidades Eléctricas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Inductores",
    "subtopic": "Unidad Henrio"
  },
  {
    "id": "ele-bas-51",
    "sectionId": 10,
    "number": 51,
    "text": "Si dos cargas eléctricas puntuales tienen el mismo signo (ambas positivas o ambas negativas), ¿qué fuerza experimentan entre sí?",
    "options": [
      "Fuerza nuclear fuerte",
      "Fuerza de repulsión",
      "Fuerza de atracción",
      "Fuerza magnética nula"
    ],
    "correctIndex": 1,
    "explanation": "De acuerdo con la ley electrostática de Coulomb, las cargas de igual signo se repelen y las de signos contrarios se atraen.",
    "skill": "Electrostática",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Ley de Coulomb",
    "subtopic": "Interacción de Cargas"
  },
  {
    "id": "ele-bas-52",
    "sectionId": 10,
    "number": 52,
    "text": "¿Qué elemento semiconductor es la base fundamental para la fabricación de la gran mayoría de microchips y transistores modernos?",
    "options": [
      "Silicio",
      "Cobre",
      "Plomo",
      "Azufre"
    ],
    "correctIndex": 0,
    "explanation": "El silicio (Si), material tetravalente semiconductor abundante en la corteza terrestre, es el elemento clave de la industria de la microelectrónica.",
    "skill": "Materiales Semiconductores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Semiconductores",
    "subtopic": "Silicio en la Microelectrónica"
  },
  {
    "id": "ele-bas-53",
    "sectionId": 10,
    "number": 53,
    "text": "¿Por qué el agua pura destilada es mala conductora de la electricidad, mientras que el agua de grifo conduce con facilidad?",
    "options": [
      "El agua pura tiene electrones más veloces que se escapan",
      "El agua de grifo tiene mayor densidad gravitacional",
      "El cloro del agua de grifo genera corriente propia espontánea",
      "El agua de grifo contiene sales y minerales disueltos que aportan iones libres portadores de carga"
    ],
    "correctIndex": 3,
    "explanation": "La conducción en líquidos requiere electrolitos (iones positivos y negativos disueltos). El agua destilada carece de sales libres, haciéndola un pésimo conductor.",
    "skill": "Conducción en Líquidos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Electrolitos",
    "subtopic": "Iones en Disolución"
  },
  {
    "id": "ele-bas-54",
    "sectionId": 10,
    "number": 54,
    "text": "¿Qué tipo de interruptor se utiliza comúnmente para encender o apagar una misma luminaria desde dos lugares distintos (como extremos de una escalera)?",
    "options": [
      "Pulsador de timbre normalmente abierto",
      "Disyuntor diferencial de alta tensión",
      "Conmutador de 3 vías (conmutable o combinada)",
      "Interruptor simple de un polo"
    ],
    "correctIndex": 2,
    "explanation": "Los interruptores conmutadores de 3 vías permiten desviar la fase por dos caminos alternativos, controlando la misma luz desde dos puntos diferentes.",
    "skill": "Instalaciones de Alumbrado",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Circuitos de Iluminación",
    "subtopic": "Conmutador de 3 Vías"
  },
  {
    "id": "ele-bas-55",
    "sectionId": 10,
    "number": 55,
    "text": "¿Qué instrumento portátil de taller integra la capacidad de medir voltaje, corriente y resistencia en un único aparato?",
    "options": [
      "Frecuencímetro óptico",
      "Multímetro (o polímetro)",
      "Generador de funciones",
      "Galvanómetro balístico"
    ],
    "correctIndex": 1,
    "explanation": "El multímetro (análogo o digital) combina en un solo equipo las funciones de voltímetro, amperímetro y óhmetro, facilitando el diagnóstico eléctrico.",
    "skill": "Instrumentos de Taller",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Herramientas de Medición",
    "subtopic": "Multímetro Digital"
  },
  {
    "id": "ele-bas-56",
    "sectionId": 10,
    "number": 56,
    "text": "¿Cuál es el valor de la tensión continua nominal que entrega una batería de automóvil de plomo-ácido estándar?",
    "options": [
      "12 V",
      "24 V",
      "120 V",
      "6 V"
    ],
    "correctIndex": 0,
    "explanation": "La batería típica de un automóvil convencional está formada por 6 celdas de plomo-ácido en serie de aproximadamente 2.1 V cada una, sumando un voltaje nominal de 12 V en CC.",
    "skill": "Acumuladores Eléctricos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Baterías",
    "subtopic": "Batería Automotriz de 12V"
  },
  {
    "id": "ele-bas-57",
    "sectionId": 10,
    "number": 57,
    "text": "Si se conectan dos baterías de 1.5 V en serie respetando la polaridad (positivo con negativo), ¿cuál es el voltaje total resultante entre sus extremos libres?",
    "options": [
      "1.5 V",
      "0.75 V",
      "0 V",
      "3.0 V"
    ],
    "correctIndex": 3,
    "explanation": "En una conexión serie aditiva de fuentes de voltaje, las tensiones individuales se suman algebraicamente: 1.5 V + 1.5 V = 3.0 V.",
    "skill": "Conexión de Fuentes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fuentes en Serie y Paralelo",
    "subtopic": "Suma de Tensiones en Serie"
  },
  {
    "id": "ele-bas-58",
    "sectionId": 10,
    "number": 58,
    "text": "Si se conectan dos baterías idénticas de 12 V en paralelo (+ con + y - con -), ¿cuál es el voltaje del conjunto?",
    "options": [
      "6 V",
      "0 V",
      "12 V (manteniendo la tensión e incrementando la capacidad total en Ah)",
      "24 V"
    ],
    "correctIndex": 2,
    "explanation": "Al conectar fuentes idénticas en paralelo el voltaje no cambia (12 V), pero la capacidad total de corriente y almacenamiento de energía se duplica.",
    "skill": "Conexión de Fuentes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fuentes en Serie y Paralelo",
    "subtopic": "Baterías en Paralelo"
  },
  {
    "id": "ele-bas-59",
    "sectionId": 10,
    "number": 59,
    "text": "¿Qué riesgo fatal inmediato presenta el contacto accidental de una persona con un conductor bajo tensión eléctrica?",
    "options": [
      "Aumento temporal de la capacidad pulmonar",
      "Fibrilación ventricular cardíaca y asfixia por tetanización muscular",
      "Pérdida inmediata del sentido del olfato",
      "Enfriamiento corporal acelerado"
    ],
    "correctIndex": 1,
    "explanation": "Una corriente eléctrica de tan solo 30 a 50 mA a 60 Hz atravesando el tórax puede causar tetanización muscular (incapacidad de soltarse) y fibrilación ventricular potencialmente mortal.",
    "skill": "Efectos Fisiológicos de la Electricidad",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad y Salud",
    "subtopic": "Fibrilación y Choque Eléctrico"
  },
  {
    "id": "ele-bas-60",
    "sectionId": 10,
    "number": 60,
    "text": "¿Cuál es la primera acción que se debe realizar ante un accidente por electrocución antes de tocar a la víctima?",
    "options": [
      "Cortar el suministro de energía eléctrica desde el disyuntor principal",
      "Tomar a la víctima de las manos para halarla enérgicamente",
      "Echar agua fría sobre la víctima para enfriar la descarga",
      "Medir el voltaje en el suelo con un multímetro"
    ],
    "correctIndex": 0,
    "explanation": "Nunca se debe tocar directamente a una persona electrocutada mientras esté en contacto con la fuente; lo primero es cortar la corriente en el tablero general o desengancharla con un objeto aislante seco.",
    "skill": "Primeros Auxilios Eléctricos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad Eléctrica",
    "subtopic": "Protocolo de Emergencia"
  },
  {
    "id": "ele-bas-61",
    "sectionId": 10,
    "number": 61,
    "text": "¿Qué tipo de herramienta manual está certificada específicamente para trabajos eléctricos bajo tensión de hasta 1,000 V?",
    "options": [
      "Herramientas con mango de madera rústica",
      "Herramientas envueltas con cinta adhesiva de papel",
      "Herramientas de aluminio fundido macizo",
      "Herramientas con aislamiento dieléctrico norma VDE / IEC 60900"
    ],
    "correctIndex": 3,
    "explanation": "Las herramientas dieléctricas aisladas bajo la norma internacional IEC 60900 / VDE están ensayadas a 10,000 V y garantizan trabajo seguro hasta 1,000 V en CA.",
    "skill": "Herramientas de Seguridad",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Equipamiento de Protección",
    "subtopic": "Herramientas Dieléctricas"
  },
  {
    "id": "ele-bas-62",
    "sectionId": 10,
    "number": 62,
    "text": "¿Qué propiedad describe a un material que no permite que las cargas eléctricas se desplacen libremente a través de él?",
    "options": [
      "Conductor de primera clase",
      "Ferromagnético",
      "Aislante (o dieléctrico)",
      "Superconductor"
    ],
    "correctIndex": 2,
    "explanation": "Los materiales aislantes tienen sus electrones fuertemente ligados a los núcleos atómicos (alta energía de banda prohibida), impidiendo el flujo de corriente.",
    "skill": "Propiedades de Materiales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Dieléctricos",
    "subtopic": "Naturaleza de los Aislantes"
  },
  {
    "id": "ele-bas-63",
    "sectionId": 10,
    "number": 63,
    "text": "¿Cuál es el valor de la tensión nominal de una celda galvánica individual de ion de litio (Li-ion) típica?",
    "options": [
      "0.5 V",
      "3.6 V - 3.7 V",
      "1.2 V",
      "9.0 V"
    ],
    "correctIndex": 1,
    "explanation": "Una celda individual de iones de litio tiene un voltaje nominal de 3.6 V a 3.7 V (con carga máxima de 4.2 V), muy superior al de las pilas de níquel-cadmio (1.2 V).",
    "skill": "Baterías Modernas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Tecnología de Baterías",
    "subtopic": "Baterías de Litio"
  },
  {
    "id": "ele-bas-64",
    "sectionId": 10,
    "number": 64,
    "text": "¿Qué dispositivo electromagnético utiliza un solenoide para accionar mecánicamente un conjunto de contactos eléctricos?",
    "options": [
      "Relé electromecánico",
      "Potenciómetro rotativo",
      "Fotocelda",
      "Termopar"
    ],
    "correctIndex": 0,
    "explanation": "El relé utiliza una bobina que, al ser energizada, crea un campo magnético que atrae una armadura de hierro, abriendo o cerrando contactos eléctricos auxiliares.",
    "skill": "Dispositivos Electromecánicos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Control Eléctrico",
    "subtopic": "Principio del Relé"
  },
  {
    "id": "ele-bas-65",
    "sectionId": 10,
    "number": 65,
    "text": "¿Cuál es la función del electrodo de polo a tierra enterrado en el exterior de las construcciones (varilla copperweld)?",
    "options": [
      "Captar energía geotérmica para alimentar la casa",
      "Mejorar la señal de televisión por cable",
      "Evitar que los conductores metálicos se enfríen",
      "Disipar corrientes de falla y descargas atmosféricas directamente en la masa del terreno"
    ],
    "correctIndex": 3,
    "explanation": "La varilla o jabalina de puesta a tierra establece una unión galvánica de baja resistencia con el suelo para drenar con seguridad sobretensiones y corrientes de falla.",
    "skill": "Puesta a Tierra",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Instalaciones de Puesta a Tierra",
    "subtopic": "Electrodo de Tierra"
  },
  {
    "id": "ele-bas-66",
    "sectionId": 10,
    "number": 66,
    "text": "¿Qué unidad mide el consumo de energía eléctrica registrado mensualmente en la factura de las empresas eléctricas domiciliarias?",
    "options": [
      "Amperio-hora (Ah)",
      "Voltiamperio reactivo (VAR)",
      "Kilovatio-hora (kWh)",
      "Vatio (W)"
    ],
    "correctIndex": 2,
    "explanation": "El kilovatio-hora (kWh) es una unidad de energía (1 kWh = 3.6 × 10⁶ Julios), equivalente a una potencia de 1,000 vatios consumida continuamente durante una hora.",
    "skill": "Energía Eléctrica y Facturación",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Consumo Eléctrico",
    "subtopic": "Medición en kWh"
  },
  {
    "id": "ele-bas-67",
    "sectionId": 10,
    "number": 67,
    "text": "Si un televisor de 100 W permanece encendido durante 10 horas continuas, ¿cuánta energía eléctrica ha consumido?",
    "options": [
      "1,000 kWh",
      "1 kWh",
      "10 kWh",
      "0.1 kWh"
    ],
    "correctIndex": 1,
    "explanation": "Energía = Potencia × Tiempo = 100 W × 10 h = 1,000 Wh = 1 kWh.",
    "skill": "Cálculo de Consumo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Energía Eléctrica",
    "subtopic": "Cálculo en Kilovatios-Hora"
  },
  {
    "id": "ele-bas-68",
    "sectionId": 10,
    "number": 68,
    "text": "¿Cómo se denomina la resistencia eléctrica que ofrece el cuerpo humano seco entre mano y pie en condiciones normales?",
    "options": [
      "Aproximadamente entre 1,000 Ω y 2,000 Ω (o superior en piel seca callosa)",
      "Cero ohmios exactos",
      "Más de 100 Megaohmios siempre",
      "Menos de 0.01 ohmios"
    ],
    "correctIndex": 0,
    "explanation": "La impedancia del cuerpo humano estandarizada por normas de seguridad (como IEC 60479) para cálculos de contacto mano-pie se estima típicamente alrededor de 1,000 Ω a 1,500 Ω en condiciones de contacto húmedo o tensión media.",
    "skill": "Bioelectromagnetismo y Seguridad",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad Humana",
    "subtopic": "Resistencia del Cuerpo Humano"
  },
  {
    "id": "ele-bas-69",
    "sectionId": 10,
    "number": 69,
    "text": "¿Qué elemento de control abre el circuito únicamente mientras se mantiene presionado el dedo sobre él y vuelve a abrirse al soltarlo?",
    "options": [
      "Interruptor basculante fijo",
      "Termostato bimetálico",
      "Interruptor magnetotérmico",
      "Pulsador normalmente abierto (NA)"
    ],
    "correctIndex": 3,
    "explanation": "Un pulsador normalmente abierto (como el del timbre) cierra el contacto eléctrico solo mientras se ejerce fuerza mecánica sobre él.",
    "skill": "Elementos de Maniobra",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mandos Eléctricos",
    "subtopic": "Pulsadores NA"
  },
  {
    "id": "ele-bas-70",
    "sectionId": 10,
    "number": 70,
    "text": "¿Qué propiedad física posee un imán permanente en sus extremos llamados polos magnéticos?",
    "options": [
      "Los polos magnéticos pueden aislarse individualmente cortando el imán a la mitad",
      "El polo norte atrae solamente al aluminio",
      "Polos iguales se repelen y polos opuestos se atraen",
      "Todos los polos se atraen entre sí sin importar su signo"
    ],
    "correctIndex": 2,
    "explanation": "Al igual que con las cargas eléctricas, en el magnetismo polos de igual denominación (Norte-Norte o Sur-Sur) se repelen y polos opuestos (Norte-Sur) se atraen mutuamente.",
    "skill": "Magnetismo Fundamental",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Magnetismo",
    "subtopic": "Leyes Magnéticas"
  },
  {
    "id": "ele-bas-71",
    "sectionId": 10,
    "number": 71,
    "text": "¿Qué sucede al cortar un imán de barra exactamente por la mitad?",
    "options": [
      "Uno de los trozos se convierte en un conductor eléctrico superconductor",
      "Se obtienen dos imanes nuevos, cada uno con su propio polo Norte y polo Sur",
      "Se separa un polo Norte puro en un trozo y un polo Sur puro en el otro",
      "Ambos trozos pierden instantáneamente todo su magnetismo"
    ],
    "correctIndex": 1,
    "explanation": "En la naturaleza no existen monopolos magnéticos aislados; al cortar un imán, los dipolos atómicos se reordenan creando un par Norte-Sur en cada fragmento.",
    "skill": "Magnetismo Fundamental",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Dipolos Magnéticos",
    "subtopic": "Indivisibilidad del Dipolo"
  },
  {
    "id": "ele-bas-72",
    "sectionId": 10,
    "number": 72,
    "text": "¿Qué científico descubrió en 1820 que una corriente eléctrica circulando por un conductor desvía la aguja de una brújula magnética cercana?",
    "options": [
      "Hans Christian Oersted",
      "Michael Faraday",
      "James Clerk Maxwell",
      "Isaac Newton"
    ],
    "correctIndex": 0,
    "explanation": "Oersted demostró por primera vez el vínculo directo entre electricidad y magnetismo al comprobar que la corriente eléctrica genera un campo magnético a su alrededor.",
    "skill": "Historia del Electromagnetismo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Electromagnetismo",
    "subtopic": "Experimento de Oersted"
  },
  {
    "id": "ele-bas-73",
    "sectionId": 10,
    "number": 73,
    "text": "¿Cómo se puede incrementar la fuerza del campo magnético generado por un electroimán sencillo?",
    "options": [
      "Disminuyendo la corriente eléctrica que circula por el cable",
      "Reemplazando el núcleo de hierro por uno de madera o plástico",
      "Enfriando el cable con aceite vegetal hirviendo",
      "Aumentando el número de espiras de la bobina e introduciendo un núcleo de hierro dulce"
    ],
    "correctIndex": 3,
    "explanation": "El campo magnético de un solenoide es proporcional al número de vueltas (N) y a la corriente (I), y se multiplica notablemente con un núcleo ferromagnético de alta permeabilidad.",
    "skill": "Electroimanes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Dispositivos Electromagnéticos",
    "subtopic": "Construcción de Electroimanes"
  },
  {
    "id": "ele-bas-74",
    "sectionId": 10,
    "number": 74,
    "text": "¿Qué tipo de lámpara ofrece la mayor eficiencia luminosa (lúmenes por vatio) y vida útil en el mercado doméstico actual?",
    "options": [
      "Lámpara halógena dicroica",
      "Vela de parafina",
      "Lámpara LED",
      "Lámpara incandescente tradicional de filamento de tungsteno"
    ],
    "correctIndex": 2,
    "explanation": "La iluminación LED convierte hasta el 80-90% de la energía en luz en comparación con la incandescente (que disipa más del 90% en calor residual), con duraciones superiores a 25,000 horas.",
    "skill": "Eficiencia Energética",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Iluminación Moderna",
    "subtopic": "Eficiencia de Lámparas LED"
  },
  {
    "id": "ele-bas-75",
    "sectionId": 10,
    "number": 75,
    "text": "¿Qué dispositivo eléctrico básico se encarga de modificar los niveles de tensión y corriente en corriente alterna mediante inducción mutua?",
    "options": [
      "Reóstato",
      "Transformador",
      "Alternador de CC",
      "Pila seca"
    ],
    "correctIndex": 1,
    "explanation": "El transformador transfiere energía eléctrica entre dos o más bobinados acoplados magnéticamente, elevando o reduciendo la tensión alterna con pérdidas mínimas.",
    "skill": "Transformadores Elementales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Máquinas Eléctricas Estáticas",
    "subtopic": "Principio del Transformador"
  },
  {
    "id": "ele-bas-76",
    "sectionId": 10,
    "number": 76,
    "text": "¿Por qué no se puede utilizar un transformador convencional para elevar o reducir la tensión de una batería de corriente continua constante?",
    "options": [
      "Porque la corriente continua constante no produce la variación de flujo magnético requerida para inducir voltaje",
      "Porque la corriente continua quemaría los fusibles por congelamiento",
      "Porque los transformadores solo funcionan con metales preciosos",
      "Porque la corriente continua no posee electrones libres"
    ],
    "correctIndex": 0,
    "explanation": "La inducción electromagnética (Ley de Faraday: ε = -N·dΦ/dt) exige un flujo magnético variable en el tiempo; una corriente continua genera un flujo estático (dΦ/dt = 0).",
    "skill": "Leyes de Inducción",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Transformadores",
    "subtopic": "Limitación en Corriente Continua"
  },
  {
    "id": "ele-bas-77",
    "sectionId": 10,
    "number": 77,
    "text": "¿Qué componente electrónico sensible a la luz varía su resistencia eléctrica disminuyéndola a medida que aumenta la iluminación que incide sobre él?",
    "options": [
      "Termistor NTC",
      "Varistor MOV",
      "Potenciómetro lineal",
      "Fotorresistor (LDR)"
    ],
    "correctIndex": 3,
    "explanation": "El LDR (Light Dependent Resistor) está hecho de sulfuro de cadmio u otro semiconductor; los fotones incidentes liberan portadores de carga, disminuyendo drásticamente su resistencia en presencia de luz.",
    "skill": "Sensores Eléctricos Básicos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sensores",
    "subtopic": "Fotorresistor LDR"
  },
  {
    "id": "ele-bas-78",
    "sectionId": 10,
    "number": 78,
    "text": "¿Qué sensor resistivo disminuye su resistencia eléctrica a medida que se incrementa la temperatura de su entorno?",
    "options": [
      "Resistencia de alambre bobinado",
      "Fusible cerámico",
      "Termistor NTC (Negative Temperature Coefficient)",
      "Termistor PTC"
    ],
    "correctIndex": 2,
    "explanation": "Los termistores NTC poseen un coeficiente de temperatura negativo: a mayor temperatura, mayor agitación térmica que genera portadores libres, reduciendo su resistencia.",
    "skill": "Sensores de Temperatura",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sensores",
    "subtopic": "Termistores NTC"
  },
  {
    "id": "ele-bas-79",
    "sectionId": 10,
    "number": 79,
    "text": "¿Cuál es la función del disyuntor diferencial (o interruptor de falla a tierra GFCI) instalado en los cuadros eléctricos modernos?",
    "options": [
      "Reemplazar al transformador de la red pública",
      "Detectar pequeñas corrientes de fuga hacia tierra y desconectar el circuito en milisegundos para salvar vidas",
      "Evitar que la factura de luz aumente de precio",
      "Aumentar la velocidad del motor de la lavadora"
    ],
    "correctIndex": 1,
    "explanation": "El interruptor diferencial compara la corriente que entra por la fase con la que regresa por el neutro; si hay una diferencia (típicamente ≥ 30 mA por fuga a tierra o persona electrocutada), corta el circuito en menos de 30 milisegundos.",
    "skill": "Protección Diferencial",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad Eléctrica",
    "subtopic": "Disyuntor Diferencial"
  },
  {
    "id": "ele-bas-80",
    "sectionId": 10,
    "number": 80,
    "text": "¿Qué valor de sensibilidad nominal de corriente diferencial (IΔn) es el estándar universal exigido en instalaciones residenciales para proteger contra contactos directos e indirectos?",
    "options": [
      "30 mA (0.03 A)",
      "300 mA",
      "3 A",
      "10 A"
    ],
    "correctIndex": 0,
    "explanation": "Una sensibilidad de 30 mA garantiza la desconexión del circuito antes de que la corriente que atraviesa a una persona alcance el umbral peligroso de fibrilación ventricular.",
    "skill": "Normativas de Protección Eléctrica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Protecciones Residenciales",
    "subtopic": "Sensibilidad de 30 mA"
  },
  {
    "id": "ele-bas-81",
    "sectionId": 10,
    "number": 81,
    "text": "¿Qué sucede si en una instalación eléctrica se conecta un fusible de 30 A en un circuito cableado con un conductor fino diseñado para soportar máximo 10 A?",
    "options": [
      "El fusible protegerá con mayor rapidez al conductor",
      "El voltaje del circuito aumentará tres veces",
      "El medidor eléctrico no registrará el consumo de energía",
      "El cable puede sobrecalentarse e incendiarse antes de que el fusible llegue a fundirse"
    ],
    "correctIndex": 3,
    "explanation": "La protección debe ser siempre de menor o igual capacidad que la corriente admisible del cable; si se sobredimensiona la protección, el cable se destruirá térmicamente sin que el fusible abra el circuito.",
    "skill": "Coordinación de Protecciones",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Riesgos Eléctricos",
    "subtopic": "Sobredimensionamiento de Fusibles"
  },
  {
    "id": "ele-bas-82",
    "sectionId": 10,
    "number": 82,
    "text": "¿Qué tipo de cable o cordón flexible de dos conductores paralelos se utiliza típicamente en conexiones provisionales de artefactos portátiles livianos como lámparas de velador?",
    "options": [
      "Conductor concéntrico antirrobo",
      "Cable coaxial blindado",
      "Cordón dúplex tipo SPT (cable mellizo)",
      "Cable subterráneo armado TTU"
    ],
    "correctIndex": 2,
    "explanation": "El cable dúplex flexible tipo SPT (mellizo) es apto para artefactos portátiles de baja potencia y uso liviano, aunque está prohibido para instalaciones fijas empotradas.",
    "skill": "Tipos de Cables",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Conductores",
    "subtopic": "Cable SPT Dúplex"
  },
  {
    "id": "ele-bas-83",
    "sectionId": 10,
    "number": 83,
    "text": "¿Cuál es el propósito del proceso de soldadura con estaño-plomo o estaño-plata en un circuito electrónico?",
    "options": [
      "Impedir que el silicio conduzca corriente",
      "Establecer una unión mecánica firme y una conexión eléctrica de baja resistencia entre componentes y pistas de cobre",
      "Aislar eléctricamente las pistas para que no circule corriente",
      "Aumentar el calor generado en los componentes activos"
    ],
    "correctIndex": 1,
    "explanation": "La soldadura blanda une metalúrgicamente los terminales de los componentes a las pistas de la placa de circuito impreso (PCB), asegurando continuidad eléctrica y fijación física.",
    "skill": "Técnicas de Montaje",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Taller Electrónico",
    "subtopic": "Soldadura Blanda"
  },
  {
    "id": "ele-bas-84",
    "sectionId": 10,
    "number": 84,
    "text": "¿Qué herramienta manual se utiliza para fundir el estaño durante el ensamble de circuitos electrónicos?",
    "options": [
      "Cautín (soldador eléctrico de estaño)",
      "Pistola de calor industrial de 2000 W",
      "Soplete de oxiacetileno",
      "Taladro percutor"
    ],
    "correctIndex": 0,
    "explanation": "El cautín eléctrico calienta una punta metálica controlada (típicamente entre 300 °C y 380 °C) para fundir la aleación de estaño en soldaduras de electrónica.",
    "skill": "Herramientas de Electrónica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Taller Electrónico",
    "subtopic": "Uso del Cautín"
  },
  {
    "id": "ele-bas-85",
    "sectionId": 10,
    "number": 85,
    "text": "¿Qué material no metálico es comúnmente utilizado como aislante en cables, interruptores y tomas de corriente?",
    "options": [
      "Grafito macizo",
      "Carburo de silicio",
      "Mercurio",
      "Baquelita y plásticos termoplásticos"
    ],
    "correctIndex": 3,
    "explanation": "La baquelita y diversos polímeros termoplásticos ofrecen alta rigidez dieléctrica, resistencia térmica y resistencia mecánica, siendo idóneos para envolventes eléctricas.",
    "skill": "Materiales Aislantes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Materiales Dieléctricos",
    "subtopic": "Plásticos y Termoplásticos"
  },
  {
    "id": "ele-bas-86",
    "sectionId": 10,
    "number": 86,
    "text": "¿Qué escala en el selector de un multímetro digital emite un sonido acústico continuo (bip) cuando los cables de prueba tocan los extremos de un conductor en buen estado?",
    "options": [
      "Medición de capacitancia alta",
      "Prueba de temperatura externa",
      "Prueba de continuidad",
      "Medición de microamperios en alterna"
    ],
    "correctIndex": 2,
    "explanation": "La función de continuidad comprueba si el circuito entre las puntas tiene una resistencia inferior a un umbral (usualmente < 30-50 Ω), haciendo sonar un zumbador para verificar cables y pistas rápidamente.",
    "skill": "Uso del Multímetro",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mediciones Prácticas",
    "subtopic": "Prueba de Continuidad"
  },
  {
    "id": "ele-bas-87",
    "sectionId": 10,
    "number": 87,
    "text": "¿Qué fenómeno se produce cuando una persona toca accidentalmente dos puntos con diferente potencial eléctrico y su cuerpo cierra el circuito?",
    "options": [
      "Efecto termoiónico reversible",
      "Electrocución o choque eléctrico",
      "Inducción galvánica nula",
      "Ionización atmosférica"
    ],
    "correctIndex": 1,
    "explanation": "Al cerrar el circuito con el cuerpo humano se produce una descarga o choque eléctrico cuya gravedad depende de la tensión, la corriente, la trayectoria y el tiempo de exposición.",
    "skill": "Seguridad y Riesgos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad Personal",
    "subtopic": "Choque Eléctrico"
  },
  {
    "id": "ele-bas-88",
    "sectionId": 10,
    "number": 88,
    "text": "¿Por qué los pájaros que se posan sobre un cable de alta tensión de una línea de distribución no sufren una descarga eléctrica mortal?",
    "options": [
      "Porque apoyan ambas patas en el mismo cable, existiendo una diferencia de potencial casi nula entre sus patas",
      "Porque las patas de las aves están recubiertas de teflón aislante puro",
      "Porque los cables de alta tensión no transportan corriente en su superficie",
      "Porque las aves tienen corriente continua interna que repele la alterna"
    ],
    "correctIndex": 0,
    "explanation": "Para que circule corriente debe haber una diferencia de potencial (voltaje) entre dos puntos. Al estar ambas patas en el mismo cable conductor casi sin resistencia entre ellas, la caída de tensión es despreciable y no circula corriente apreciable por el cuerpo del ave.",
    "skill": "Diferencia de Potencial",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Tensión de Paso y Aves en Líneas"
  },
  {
    "id": "ele-bas-89",
    "sectionId": 10,
    "number": 89,
    "text": "¿Qué tipo de batería recargable se emplea universalmente en los teléfonos inteligentes y computadoras portátiles modernas?",
    "options": [
      "Pila seca de carbón-zinc",
      "Batería de mercurio alcalino",
      "Acumulador de plomo y ácido sulfúrico",
      "Batería de polímero de iones de litio (Li-Po / Li-ion)"
    ],
    "correctIndex": 3,
    "explanation": "Las baterías de Li-ion y polímero de litio ofrecen la mayor densidad energética por unidad de peso, carecen de efecto memoria significativo y permiten miles de ciclos de recarga parcial.",
    "skill": "Almacenamiento de Energía",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Baterías Recargables",
    "subtopic": "Baterías de Iones de Litio"
  },
  {
    "id": "ele-bas-90",
    "sectionId": 10,
    "number": 90,
    "text": "¿Cuál es la función del aislante de cinta de vinilo (teipe eléctrico) en un empalme de cables realizado en una caja de paso?",
    "options": [
      "Enfriar la temperatura del cobre mediante flujo refrigerante",
      "Servir de fusible en caso de tormenta",
      "Restablecer el nivel de aislamiento dieléctrico original para evitar cortocircuitos o contactos accidentales",
      "Hacer que el empalme conduzca el doble de corriente"
    ],
    "correctIndex": 2,
    "explanation": "La cinta aislante de PVC proporciona aislamiento eléctrico equivalente al recubrimiento original del cable, protegiendo la unión de la humedad y evitando contactos con otras fases o la caja metálica.",
    "skill": "Empalmes e Instalaciones",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Instalaciones Eléctricas Básicas",
    "subtopic": "Aislamiento de Empalmes"
  },
  {
    "id": "ele-bas-91",
    "sectionId": 10,
    "number": 91,
    "text": "¿Qué tipo de empalme eléctrico tradicional se utiliza comúnmente para unir y prolongar dos conductores que no estarán sometidos a esfuerzos de tensión mecánica dentro de cajas de conexión?",
    "options": [
      "Unión británica con manguito tensor",
      "Empalme cola de rata (o de trenza)",
      "Empalme Western Union largo",
      "Empalme en derivación tipo T con nudo"
    ],
    "correctIndex": 1,
    "explanation": "El empalme de cola de rata (o trenzado) es el más utilizado dentro de cajas de paso y tomacorrientes donde los conductores no soportan tracción mecánica.",
    "skill": "Técnicas de Empalmes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Instalaciones Residenciales",
    "subtopic": "Empalme Cola de Rata"
  },
  {
    "id": "ele-bas-92",
    "sectionId": 10,
    "number": 92,
    "text": "¿Qué tipo de empalme se diseñó históricamente para soportar grandes esfuerzos de tracción mecánica entre postes en líneas aéreas tendidas?",
    "options": [
      "Empalme Western Union",
      "Empalme cola de ratón",
      "Empalme de derivación simple",
      "Conector rápido tipo capuchón roscado"
    ],
    "correctIndex": 0,
    "explanation": "El empalme Western Union (creado para las líneas de telégrafo) enrolla fuertemente los extremos de los alambres, logrando una resistencia a la tracción casi idéntica a la del propio conductor intacto.",
    "skill": "Técnicas de Empalmes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Líneas de Distribución",
    "subtopic": "Empalme Western Union"
  },
  {
    "id": "ele-bas-93",
    "sectionId": 10,
    "number": 93,
    "text": "¿Qué componente de protección sobretensión doméstica se conecta en regletas o tomas para proteger televisores y computadoras contra picos transitorios de voltaje?",
    "options": [
      "Bobina de choque de hierro dulce",
      "Transformador elevador",
      "Reóstato cerámico de carbón",
      "Varistor de óxido metálico (MOV)"
    ],
    "correctIndex": 3,
    "explanation": "El MOV (Metal Oxide Varistor) tiene una resistencia sumamente alta a tensiones normales, pero ante un pico de sobretensión su resistencia cae drásticamente, derivando la energía transitoria a tierra.",
    "skill": "Protección Contra Sobretensiones",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Supresores de Picos",
    "subtopic": "Varistor MOV"
  },
  {
    "id": "ele-bas-94",
    "sectionId": 10,
    "number": 94,
    "text": "¿Qué ocurre si se conecta un voltímetro ajustado en escala de medición de corriente continua (DCV) a una toma de corriente alterna residencial (AC)?",
    "options": [
      "Multiplicará el voltaje por la raíz cuadrada de dos",
      "Convertirá la corriente de toda la casa en corriente continua",
      "Indicará aproximadamente cero voltios (o un valor oscilante errático), pues promedia el ciclo simétrico de la onda senoidal",
      "Explotará inmediatamente por sobrecarga magnética"
    ],
    "correctIndex": 2,
    "explanation": "Los instrumentos en modo DC miden el valor medio algebraico de la señal; al ser la corriente alterna simétrica respecto a cero, su valor promedio a lo largo de un ciclo completo es 0 V.",
    "skill": "Medición con Multímetro",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mediciones Eléctricas",
    "subtopic": "Valor Medio vs Eficaz"
  },
  {
    "id": "ele-bas-95",
    "sectionId": 10,
    "number": 95,
    "text": "¿Qué elemento semiconductor de tres terminales actúa como un interruptor o amplificador controlado por corriente o tensión?",
    "options": [
      "Bobina de choque",
      "Transistor",
      "Diodo rectificador",
      "Termistor NTC"
    ],
    "correctIndex": 1,
    "explanation": "El transistor (como el BJT o MOSFET) posee tres terminales y permite controlar una gran corriente principal mediante una pequeña señal en su terminal de control (base o compuerta).",
    "skill": "Semiconductores Activos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Dispositivos Activos",
    "subtopic": "Principio del Transistor"
  },
  {
    "id": "ele-bas-96",
    "sectionId": 10,
    "number": 96,
    "text": "¿Cuál es el color de aislamiento normalmente reservado para el conductor neutro en instalaciones monofásicas bajo normas eléctricas de la región?",
    "options": [
      "Blanco (o azul claro bajo norma IEC)",
      "Negro",
      "Verde con franja amarilla",
      "Rojo vivo"
    ],
    "correctIndex": 0,
    "explanation": "En la norma americana (NEC) el conductor neutro se identifica con color blanco o gris claro, mientras que en la norma europea (IEC) se identifica con color azul claro.",
    "skill": "Identificación de Conductores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Instalaciones Residenciales",
    "subtopic": "Conductor Neutro"
  },
  {
    "id": "ele-bas-97",
    "sectionId": 10,
    "number": 97,
    "text": "¿Qué sucede con la corriente eléctrica en un circuito cuando la resistencia total se aproxima a cero?",
    "options": [
      "La corriente se extingue por completo",
      "El voltaje desaparece en todo el planeta",
      "La frecuencia de la corriente se triplica automáticamente",
      "La corriente tiende a valores extremadamente altos (cortocircuito)"
    ],
    "correctIndex": 3,
    "explanation": "De acuerdo con la Ley de Ohm (I = V/R), a medida que el denominador R tiende a cero, el cociente I tiende a infinito, lo que genera corrientes destructivas de cortocircuito.",
    "skill": "Ley de Ohm y Fallas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Cortocircuitos",
    "subtopic": "Comportamiento Asintótico"
  },
  {
    "id": "ele-bas-98",
    "sectionId": 10,
    "number": 98,
    "text": "¿Qué tipo de energía eléctrica produce una célula o panel solar fotovoltaico cuando recibe la luz del sol?",
    "options": [
      "Corriente magnética pulsante",
      "Microondas de radio",
      "Corriente continua (CC)",
      "Corriente alterna trifásica"
    ],
    "correctIndex": 2,
    "explanation": "El efecto fotoeléctrico en las uniones p-n de silicio genera portadores de carga que producen una corriente continua (DC), requiriendo un inversor para conectarse a la red alterna de la vivienda.",
    "skill": "Energías Renovables",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Energía Solar",
    "subtopic": "Generación Fotovoltaica"
  },
  {
    "id": "ele-bas-99",
    "sectionId": 10,
    "number": 99,
    "text": "¿Qué dispositivo convierte la corriente continua de un banco de baterías o paneles solares en corriente alterna para alimentar artefactos domésticos estándar?",
    "options": [
      "Reóstato manual",
      "Inversor de corriente (ondulador)",
      "Rectificador de diodos",
      "Transformador estático de hierro"
    ],
    "correctIndex": 1,
    "explanation": "El inversor (inverter) toma corriente continua (DC) y genera una onda senoidal de corriente alterna (AC) a la frecuencia y voltaje adecuados (ej. 120 V a 60 Hz).",
    "skill": "Conversión de Potencia",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistemas Fotovoltaicos",
    "subtopic": "Inversores DC/AC"
  },
  {
    "id": "ele-bas-100",
    "sectionId": 10,
    "number": 100,
    "text": "¿Por qué nunca se debe utilizar agua para apagar un fuego originado en un tablero o equipo eléctrico energizado?",
    "options": [
      "Porque el agua conduce la electricidad y el bombero o usuario sufriría una electrocución letal inmediata",
      "Porque el agua enfría el cobre demasiado rápido rompiendo los cables",
      "Porque el agua genera ozono que destruye la pintura del tablero",
      "Porque el agua reacciona con el plástico produciendo plomo líquido"
    ],
    "correctIndex": 0,
    "explanation": "El agua líquida contiene iones y conduce la corriente hacia quien la arroja; en incendios eléctricos (Clase C) debe utilizarse exclusivamente extintores de dióxido de carbono (CO₂) o polvo químico seco no conductor.",
    "skill": "Seguridad y Extinción de Incendios",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad Industrial",
    "subtopic": "Fuegos Clase C"
  }
];
