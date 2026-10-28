import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE RAZONAMIENTO LÓGICO Y ABSTRACTO - NIVEL TÉCNICO (100 Reactivos)
 */
export const RAZONAMIENTO_TECNICO: Question[] = [
  {
    "id": "raz-tec-1",
    "sectionId": 3,
    "number": 61,
    "text": "En un sistema lógico digital con compuertas, ¿cuál es la salida de una compuerta NAND si sus dos entradas están en estado alto (1 lógico, 1 lógico)?",
    "options": [
      "1 (Alto)",
      "0 (Bajo)",
      "Alta impedancia (Z)",
      "Indeterminado"
    ],
    "correctIndex": 1,
    "explanation": "La función AND produce 1 cuando ambas entradas son 1. La compuerta NAND niega la salida de la AND: ¬(1 ∧ 1) = ¬1 = 0.",
    "skill": "Lógica Booleana y Compuertas Digitales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Compuertas Lógicas Fundamentales"
  },
  {
    "id": "raz-tec-2",
    "sectionId": 3,
    "number": 62,
    "text": "En un tren de engranajes compuesto, la rueda motriz A tiene 20 dientes y gira a 600 RPM en sentido horario. Ésta engrana directamente con la rueda B de 60 dientes. ¿A qué velocidad y en qué sentido gira la rueda B?",
    "options": [
      "200 RPM en sentido antihorario",
      "1800 RPM en sentido horario",
      "200 RPM en sentido horario",
      "300 RPM en sentido antihorario"
    ],
    "correctIndex": 0,
    "explanation": "Relación de transmisión cinemática: N_B = N_A × (Z_A / Z_B) = 600 × (20 / 60) = 200 RPM. Al engranar exteriormente de forma directa, el sentido de rotación siempre se invierte (de horario a antihorario).",
    "skill": "Cinemática de Mecanismos y Engranajes",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Relaciones de Transmisión de Engranajes"
  },
  {
    "id": "raz-tec-3",
    "sectionId": 3,
    "number": 63,
    "text": "En un algoritmo de búsqueda binaria sobre una lista ordenada de 128 elementos, ¿cuál es el número máximo de comparaciones requeridas en el peor caso?",
    "options": [
      "7",
      "8",
      "64",
      "128"
    ],
    "correctIndex": 0,
    "explanation": "La complejidad temporal de la búsqueda binaria es O(log₂ n). Para n = 128 = 2⁷, log₂(128) = 7 comparaciones máximas.",
    "skill": "Análisis Asintótico y Búsqueda Binaria",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Estructuras de Datos y Algoritmos",
    "subtopic": "Complejidad Logarítmica"
  },
  {
    "id": "raz-tec-4",
    "sectionId": 3,
    "number": 64,
    "text": "En la lectura técnica de un calibrador pie de rey (vernier) con resolución de 0.05 mm, si el cero del nonio supera los 14 mm en la regla fija y la línea 6 del nonio coincide exactamente con una división de la escala principal, ¿cuál es la medida leída?",
    "options": [
      "14.06 mm",
      "14.30 mm",
      "14.60 mm",
      "14.12 mm"
    ],
    "correctIndex": 1,
    "explanation": "Lectura = Escala principal + (división del nonio coincidente × resolución) = 14 mm + (6 × 0.05 mm) = 14 mm + 0.30 mm = 14.30 mm.",
    "skill": "Metrología Dimensional Técnica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Metrología y Taller",
    "subtopic": "Calibrador Vernier"
  },
  {
    "id": "raz-tec-5",
    "sectionId": 3,
    "number": 65,
    "text": "En un circuito serie con tres resistencias de 10 Ω, 20 Ω y 30 Ω conectadas a una fuente de 120 V, ¿cuál es la caída de tensión en la resistencia de 20 Ω?",
    "options": [
      "20 V",
      "40 V",
      "60 V",
      "80 V"
    ],
    "correctIndex": 1,
    "explanation": "Resistencia equivalente total = 10 + 20 + 30 = 60 Ω. Corriente total I = V / R_total = 120 V / 60 Ω = 2 A. Caída en R₂ = I × R₂ = 2 A × 20 Ω = 40 V.",
    "skill": "Análisis de Circuitos Eléctricos Serie",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia",
    "subtopic": "Divisores de Tensión y Ley de Ohm"
  },
  {
    "id": "raz-tec-6",
    "sectionId": 3,
    "number": 66,
    "text": "En una prensa hidráulica ideal, el émbolo menor tiene un área de 5 cm² y el émbolo mayor tiene un área de 100 cm². Si se aplica una fuerza de 50 N en el émbolo menor, ¿qué fuerza se genera en el émbolo mayor?",
    "options": [
      "500 N",
      "1000 N",
      "2000 N",
      "250 N"
    ],
    "correctIndex": 1,
    "explanation": "Por el Principio de Pascal: F₁ / A₁ = F₂ / A₂ → F₂ = F₁ × (A₂ / A₁) = 50 N × (100 cm² / 5 cm²) = 50 N × 20 = 1000 N.",
    "skill": "Mecánica de Fluidos y Principio de Pascal",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Oleohidráulica",
    "subtopic": "Multiplicadores de Fuerza Hidráulica"
  },
  {
    "id": "raz-tec-7",
    "sectionId": 3,
    "number": 67,
    "text": "¿Cuál es la simplificación de la expresión booleana F = A·B + A·B̄ según las leyes del álgebra de Boole?",
    "options": [
      "A",
      "B",
      "A + B",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "Factorizando el término común A: F = A · (B + B̄). Dado que en álgebra booleana (B + B̄) = 1 (ley del complemento), tenemos F = A · 1 = A.",
    "skill": "Álgebra de Boole y Reducción Lógica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diseño Lógico",
    "subtopic": "Postulados de Boole"
  },
  {
    "id": "raz-tec-8",
    "sectionId": 3,
    "number": 68,
    "text": "En el dibujo técnico mecánico, ¿qué tipo de línea normalizada ISO se utiliza para representar aristas y contornos ocultos de una pieza?",
    "options": [
      "Línea continua gruesa",
      "Línea de trazos finos (segmentada)",
      "Línea fina de trazo y punto",
      "Línea a mano alzada"
    ],
    "correctIndex": 1,
    "explanation": "Según la norma técnica ISO 128, los contornos y aristas ocultas a la vista en una proyección se grafican obligatoriamente con línea de trazos finos interrumpidos.",
    "skill": "Normalización de Dibujo Técnico ISO",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Expresión Gráfica",
    "subtopic": "Tipos de Línea Normalizados"
  },
  {
    "id": "raz-tec-9",
    "sectionId": 3,
    "number": 69,
    "text": "Si un sensor térmico emite una señal analógica de 4 a 20 mA proporcional a una temperatura de 0 a 100 °C, ¿qué temperatura corresponde a una lectura de 12 mA?",
    "options": [
      "40 °C",
      "50 °C",
      "60 °C",
      "75 °C"
    ],
    "correctIndex": 1,
    "explanation": "El rango de señal es de 20 - 4 = 16 mA. La corriente de 12 mA se ubica a (12 - 4) = 8 mA sobre el mínimo, lo que representa exactamente el 50% de la escala (8/16 = 0.50). El 50% de 100 °C es 50 °C.",
    "skill": "Instrumentación Industrial y Escalamiento de Señales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Control Automático",
    "subtopic": "Lazos de Corriente 4-20 mA"
  },
  {
    "id": "raz-tec-10",
    "sectionId": 3,
    "number": 70,
    "text": "En un sistema neumático, ¿qué elemento direccional permite el paso del aire comprimido en un solo sentido y bloquea completamente el flujo en sentido contrario?",
    "options": [
      "Válvula de estrangulamiento",
      "Válvula antirretorno (check)",
      "Válvula de alivio de presión",
      "Regulador de caudal bidireccional"
    ],
    "correctIndex": 1,
    "explanation": "La válvula antirretorno (o válvula check) contiene un obturador accionado por resorte que sella mecánicamente el conducto ante un reflujo inverso, garantizando unidireccionalidad.",
    "skill": "Circuitos Neumáticos y Simbología",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática Industrial",
    "subtopic": "Válvulas de Bloqueo"
  },
  {
    "id": "raz-tec-11",
    "sectionId": 3,
    "number": 71,
    "text": "En una red de computadoras con máscara de subred 255.255.255.0 (/24), ¿cuántas direcciones IP útiles para hosts se pueden asignar como máximo en dicha subred?",
    "options": [
      "256",
      "255",
      "254",
      "252"
    ],
    "correctIndex": 2,
    "explanation": "Una máscara /24 dispone de 8 bits de host (2⁸ = 256 direcciones teóricas). Se deben restar siempre 2 direcciones reservadas: la dirección de red (.0) y la de difusión o broadcast (.255). Por tanto, 256 - 2 = 254 hosts útiles.",
    "skill": "Subnetting y Direccionamiento IP",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Redes de Datos",
    "subtopic": "Cálculo de Direcciones IPv4"
  },
  {
    "id": "raz-tec-12",
    "sectionId": 3,
    "number": 72,
    "text": "Un motor eléctrico trifásico de inducción tiene 4 polos y se alimenta con una frecuencia de red de 60 Hz. ¿Cuál es su velocidad de sincronismo del campo magnético giratorio?",
    "options": [
      "1200 RPM",
      "1500 RPM",
      "1800 RPM",
      "3600 RPM"
    ],
    "correctIndex": 2,
    "explanation": "Velocidad de sincronismo: N_s = (120 × f) / P = (120 × 60) / 4 = 7200 / 4 = 1800 RPM.",
    "skill": "Máquinas Eléctricas Rotativas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia de Potencia",
    "subtopic": "Motores Asíncronos Trifásicos"
  },
  {
    "id": "raz-tec-13",
    "sectionId": 3,
    "number": 73,
    "text": "En un diagrama de flujo de programación de procesos, ¿qué forma geométrica estándar representa una toma de decisión condicional (if / else)?",
    "options": [
      "Rectángulo",
      "Rombo",
      "Óvalo o elipse",
      "Paralelogramo"
    ],
    "correctIndex": 1,
    "explanation": "En las normas ANSI/ISO para diagramas de flujo, el rombo representa bifurcaciones lógicas de decisión condicional con salidas según se cumpla o no la condición.",
    "skill": "Lógica Algorítmica y Diagramación de Flujo",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Programación Estructurada",
    "subtopic": "Simbología de Flujo ANSI"
  },
  {
    "id": "raz-tec-14",
    "sectionId": 3,
    "number": 74,
    "text": "En el ensayo no destructivo de tintas penetrantes sobre una soldadura metálica, ¿qué principio físico permite que el líquido revelador extraiga la tinta acumulada dentro de una fisura superficial?",
    "options": [
      "Gravedad",
      "Capilaridad",
      "Efecto Joule",
      "Magnetorresistencia"
    ],
    "correctIndex": 1,
    "explanation": "El fenómeno de capilaridad, producto de la tensión superficial y las fuerzas interfaciales de adhesión entre el revelador en polvo y la tinta, hace ascender el líquido del fondo de la grieta a la superficie visual.",
    "skill": "Control de Calidad y Ensayos No Destructivos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Metalmecánica y Soldadura",
    "subtopic": "Líquidos Penetrantes"
  },
  {
    "id": "raz-tec-15",
    "sectionId": 3,
    "number": 75,
    "text": "En un sistema de almacenamiento de datos RAID 1 con 2 discos duros de 2 TB cada uno, ¿cuál es la capacidad total de almacenamiento útil accesible para el usuario?",
    "options": [
      "1 TB",
      "2 TB",
      "4 TB",
      "3 TB"
    ],
    "correctIndex": 1,
    "explanation": "El RAID 1 funciona por duplicación exacta en espejo (mirroring). Toda la información se graba simultáneamente en ambos discos para redundancia contra fallos, disponiendo de la capacidad de un solo disco (2 TB).",
    "skill": "Arquitectura de Almacenamiento y Redundancia",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas Informáticos",
    "subtopic": "Arreglos RAID"
  },
  {
    "id": "raz-tec-16",
    "sectionId": 3,
    "number": 76,
    "text": "En un sistema de control de lazo cerrado, ¿qué elemento compara el valor deseado (setpoint) con el valor real de la variable de proceso para generar la señal de error?",
    "options": [
      "El actuador final",
      "El comparador o sumador restador",
      "El sensor de retroalimentación",
      "La planta física"
    ],
    "correctIndex": 1,
    "explanation": "El comparador resta la señal retroalimentada por el sensor respecto a la referencia (e = r - y), enviando el error resultante al controlador para tomar acciones correctivas.",
    "skill": "Teoría Clásica de Control Automático",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización Industrial",
    "subtopic": "Lazos de Retroalimentación Negativa"
  },
  {
    "id": "raz-tec-17",
    "sectionId": 3,
    "number": 77,
    "text": "Si una polea motriz de 100 mm de diámetro gira a 1400 RPM y acciona mediante una correa una polea conducida de 200 mm de diámetro, ¿cuál es la velocidad de giro de la polea conducida?",
    "options": [
      "700 RPM",
      "1400 RPM",
      "2800 RPM",
      "350 RPM"
    ],
    "correctIndex": 0,
    "explanation": "La relación de diámetros es D₁ × N₁ = D₂ × N₂. Por tanto, N₂ = (D₁ / D₂) × N₁ = (100 / 200) × 1400 = 0.5 × 1400 = 700 RPM.",
    "skill": "Transmisión por Correas y Poleas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Taller",
    "subtopic": "Cálculo Cinemático de Poleas"
  },
  {
    "id": "raz-tec-18",
    "sectionId": 3,
    "number": 78,
    "text": "En un autómata programable (PLC), ¿qué significan las siglas Ladder Logic (KOP / LD)?",
    "options": [
      "Lenguaje estructurado de texto en C++",
      "Lenguaje gráfico de diagrama de contactos en escalera",
      "Lista secuencial de instrucciones de bajo nivel",
      "Lenguaje de bloques de funciones digitales"
    ],
    "correctIndex": 1,
    "explanation": "El diagrama de escalera (Ladder Logic) es el estándar industrial gráfico (IEC 61131-3) basado en la lógica de relés electromagnéticos con dos rieles de alimentación y peldaños de contactos y bobinas.",
    "skill": "Programación de PLCs Industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización y Robótica",
    "subtopic": "Norma IEC 61131-3"
  },
  {
    "id": "raz-tec-19",
    "sectionId": 3,
    "number": 79,
    "text": "En una instalación eléctrica domiciliaria, ¿cuál es la función primordial del interruptor diferencial (disyuntor diferencial)?",
    "options": [
      "Proteger los conductores exclusivamente contra cortocircuitos de alta corriente.",
      "Detectar corrientes de fuga a tierra para proteger la vida humana contra contactos indirectos y electrocución.",
      "Elevar el factor de potencia.",
      "Regular el voltaje de red a 220 V constantes."
    ],
    "correctIndex": 1,
    "explanation": "El interruptor diferencial mide el equilibrio magnético vectorial entre la corriente de fase que entra y la de neutro que retorna. Si existe una diferencia superior al umbral (típicamente 30 mA), abre el circuito de inmediato para evitar la fibrilación ventricular humana.",
    "skill": "Seguridad Eléctrica y Protecciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instalaciones Eléctricas",
    "subtopic": "Protección Diferencial"
  },
  {
    "id": "raz-tec-20",
    "sectionId": 3,
    "number": 80,
    "text": "¿Qué propiedad termodinámica de un fluido refrigerante permite absorber calor latente del interior de una cámara de refrigeración en el evaporador?",
    "options": [
      "Su calor latente de vaporización a baja presión",
      "Su conductividad eléctrica",
      "Su densidad estática",
      "Su viscosidad cinemática"
    ],
    "correctIndex": 0,
    "explanation": "En el evaporador, el refrigerante líquido a baja presión hierve (se evapora), absorbiendo una gran cantidad de energía térmica en forma de calor latente de cambio de fase de los alimentos o aire circundante.",
    "skill": "Termodinámica de Ciclos Frigoríficos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Climatización y Refrigeración",
    "subtopic": "Ciclo de Compresión de Vapor"
  },
  {
    "id": "raz-tec-21",
    "sectionId": 3,
    "number": 21,
    "text": "¿Cuál es la salida de una compuerta lógica XOR (Or Exclusiva) cuando sus dos entradas son ambas a nivel lógico ALTO (1)?",
    "options": [
      "0 (Nivel BAJO)",
      "1 (Nivel ALTO)",
      "Alta impedancia (Z)",
      "Indeterminado"
    ],
    "correctIndex": 0,
    "explanation": "La compuerta XOR arroja 1 solo cuando sus entradas son distintas (0-1 o 1-0). Si ambas entradas son 1, la salida es 0.",
    "skill": "Compuertas lógicas básicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Compuerta XOR"
  },
  {
    "id": "raz-tec-22",
    "sectionId": 3,
    "number": 22,
    "text": "¿Qué compuerta lógica produce una salida '0' únicamente cuando todas sus entradas están en '1'?",
    "options": [
      "NAND",
      "NOR",
      "AND",
      "OR"
    ],
    "correctIndex": 0,
    "explanation": "La compuerta NAND es la negación de AND; por ende, arroja 0 exclusivamente en la combinación donde todas las entradas son 1.",
    "skill": "Tablas de verdad digitales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Compuerta NAND"
  },
  {
    "id": "raz-tec-23",
    "sectionId": 3,
    "number": 23,
    "text": "En un mapa de Karnaugh de 4 variables (16 celdas), ¿cuántas variables se eliminan al agrupar un bloque de 8 unos adyacentes?",
    "options": [
      "3 variables",
      "2 variables",
      "1 variable",
      "4 variables"
    ],
    "correctIndex": 0,
    "explanation": "Cada duplicación del tamaño del grupo elimina una variable: un grupo de 2^k celdas elimina k variables; para 8 celdas (2³), se eliminan 3 variables.",
    "skill": "Mapas de Karnaugh",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diseño Lógico",
    "subtopic": "Simplificación booleana"
  },
  {
    "id": "raz-tec-24",
    "sectionId": 3,
    "number": 24,
    "text": "¿Por qué el orden de numeración de filas y columnas en los mapas de Karnaugh utiliza el Código Gray (00, 01, 11, 10)?",
    "options": [
      "Para garantizar que entre dos celdas adyacentes contiguas cambie únicamente un solo bit binario a la vez",
      "Para ahorrar espacio gráfico en el papel",
      "Para facilitar la conversión a base decimal directa",
      "Porque no existen compuertas para el código binario natural"
    ],
    "correctIndex": 0,
    "explanation": "La adyacencia lógica del código Gray permite aplicar el teorema de adyacencia booleano (A + A' = 1) para simplificar términos.",
    "skill": "Código Gray y adyacencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diseño Lógico",
    "subtopic": "Código Gray"
  },
  {
    "id": "raz-tec-25",
    "sectionId": 3,
    "number": 25,
    "text": "Aplicando los teoremas de De Morgan en circuitos lógicos, ¿cuál es la simplificación de la función booleana F = (A + B')'?",
    "options": [
      "A' · B",
      "A · B'",
      "A' + B",
      "(A · B)'"
    ],
    "correctIndex": 0,
    "explanation": "Por De Morgan: (X + Y)' = X' · Y'. Con X = A e Y = B', se obtiene F = A' · (B')'. Por involución (doble negación), (B')' = B, por lo que F = A' · B.",
    "skill": "Teoremas de De Morgan",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diseño Lógico",
    "subtopic": "Leyes de De Morgan y simplificación"
  },
  {
    "id": "raz-tec-26",
    "sectionId": 3,
    "number": 26,
    "text": "¿Qué dispositivo lógico combinacional selecciona una de varias entradas de datos y la canaliza a una única línea de salida según las líneas de control?",
    "options": [
      "Multiplexor (MUX)",
      "Demultiplexor (DEMUX)",
      "Decodificador",
      "Encoder"
    ],
    "correctIndex": 0,
    "explanation": "El multiplexor funciona como un selector o conmutador de datos gobernado por líneas de dirección de control.",
    "skill": "Circuitos combinacionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Multiplexores"
  },
  {
    "id": "raz-tec-27",
    "sectionId": 3,
    "number": 27,
    "text": "¿Cuántas líneas de selección requiere un multiplexor con 16 líneas de entrada de datos?",
    "options": [
      "4 líneas de selección (2⁴ = 16)",
      "8 líneas",
      "2 líneas",
      "16 líneas"
    ],
    "correctIndex": 0,
    "explanation": "La relación entre entradas de datos N y líneas de control k es N = 2^k. Para N = 16: 16 = 2⁴ ⇒ k = 4.",
    "skill": "Arquitectura de multiplexores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Líneas de control"
  },
  {
    "id": "raz-tec-28",
    "sectionId": 3,
    "number": 28,
    "text": "En un flip-flop tipo D sincronizado por flanco de subida, ¿qué ocurre con la salida Q cuando llega el pulso de reloj?",
    "options": [
      "Adopta exactamente el valor lógico que tenía la entrada D en el instante del flanco de subida",
      "Bascula al valor opuesto (toggle)",
      "Se pone a cero siempre",
      "Se desconecta del circuito"
    ],
    "correctIndex": 0,
    "explanation": "El flip-flop D transfiere de forma transparente el dato presente en la entrada D hacia la salida Q en el momento exacto del flanco de reloj.",
    "skill": "Circuitos secuenciales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Flip-Flop D"
  },
  {
    "id": "raz-tec-29",
    "sectionId": 3,
    "number": 29,
    "text": "Si un flip-flop JK tiene sus entradas conectadas permanentemente a J = 1 y K = 1, ¿cuál es su comportamiento con cada pulso de reloj?",
    "options": [
      "Modo basculamiento (Toggle): invierte su estado previo en cada pulso",
      "Se mantiene inalterado en su estado previo (Memory)",
      "Se resetea a 0",
      "Entra en condición de carrera no permitida"
    ],
    "correctIndex": 0,
    "explanation": "La combinación J=1, K=1 es la función 'toggle' del flip-flop JK, base del diseño de contadores asíncronos y síncronos.",
    "skill": "Flip-Flop JK",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Modo Toggle"
  },
  {
    "id": "raz-tec-30",
    "sectionId": 3,
    "number": 30,
    "text": "¿Cuántos flip-flops como mínimo se requieren para construir un contador digital síncrono binario que cuente del 0 al 15?",
    "options": [
      "4 flip-flops",
      "16 flip-flops",
      "8 flip-flops",
      "5 flip-flops"
    ],
    "correctIndex": 0,
    "explanation": "Para representar 16 estados (0 a 15) en binario se necesitan 4 bits (2⁴ = 16), lo que exige 4 flip-flops.",
    "skill": "Contadores digitales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Contadores binarios"
  },
  {
    "id": "raz-tec-31",
    "sectionId": 3,
    "number": 31,
    "text": "En un convertidor Analógico-Digital (ADC) de 8 bits con rango de 0 a 5 Voltios, ¿cuál es la resolución teórica de voltaje por paso (LSB)?",
    "options": [
      "Aproximadamente 19.5 milivoltios (5V / 256)",
      "50 milivoltios",
      "1 milivoltio",
      "39 milivoltios"
    ],
    "correctIndex": 0,
    "explanation": "Resolución = Vref / 2^n = 5 V / 256 ≈ 0.01953 V ≈ 19.53 mV.",
    "skill": "Conversión A/D",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Resolución de ADC"
  },
  {
    "id": "raz-tec-32",
    "sectionId": 3,
    "number": 32,
    "text": "¿Cuál es la función lógica que implementa el circuito integrado estándar TTL 7400?",
    "options": [
      "Cuatro compuertas NAND de dos entradas",
      "Cuatro compuertas AND",
      "Seis inversores NOT",
      "Dos contadores decimales"
    ],
    "correctIndex": 0,
    "explanation": "El integrado 7400 es el circuito de referencia clásico que contiene 4 compuertas NAND cuádruples independientes.",
    "skill": "Familias lógicas TTL",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Circuitos integrados estándar"
  },
  {
    "id": "raz-tec-33",
    "sectionId": 3,
    "number": 33,
    "text": "En la simplificación booleana, ¿cuál es el complemento de la expresión F = A·(B + C') aplicando De Morgan?",
    "options": [
      "F' = A' + B'·C",
      "F' = A'·(B' + C)",
      "F' = A + B·C'",
      "F' = A' + B + C"
    ],
    "correctIndex": 0,
    "explanation": "Aplicando el teorema del complemento: (A·(B + C'))' = A' + (B + C')' = A' + (B'·C'' ) = A' + B'·C.",
    "skill": "Leyes de De Morgan aplicadas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diseño Lógico",
    "subtopic": "Dualidad booleana"
  },
  {
    "id": "raz-tec-34",
    "sectionId": 3,
    "number": 34,
    "text": "¿Qué define el concepto de 'Fan-Out' de una compuerta lógica digital?",
    "options": [
      "El número máximo de entradas estándar que puede excitar la salida de la compuerta sin degradar sus niveles de tensión",
      "La velocidad máxima de disipación de calor del ventilador",
      "El consumo de corriente en reposo",
      "El retardo de propagación medido en nanosegundos"
    ],
    "correctIndex": 0,
    "explanation": "El Fan-Out es la capacidad de carga de corriente de salida que garantiza mantener los márgenes de ruido en estados 0 y 1 lógicos.",
    "skill": "Parámetros eléctricos digitales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Fan-Out y márgenes de ruido"
  },
  {
    "id": "raz-tec-35",
    "sectionId": 3,
    "number": 35,
    "text": "Un circuito combinacional de paridad par genera una salida 1 cuando:",
    "options": [
      "El número de unos en su vector de entrada es impar (para sumarle un 1 y hacer el total par)",
      "El número de unos es par",
      "No hay ningún uno",
      "Todas las entradas son cero"
    ],
    "correctIndex": 0,
    "explanation": "El generador de paridad par añade un bit '1' si la cantidad de unos recibida es impar, forzando a que la suma total sea un número par.",
    "skill": "Generadores de paridad",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica Digital",
    "subtopic": "Detección de errores"
  },
  {
    "id": "raz-tec-36",
    "sectionId": 3,
    "number": 36,
    "text": "En un diagrama de lógica de escalera (Ladder) para PLC, la conexión de dos contactos normalmente abiertos (NO) en paralelo representa la función lógica:",
    "options": [
      "OR (O inclusivo)",
      "AND (Y)",
      "XOR",
      "NOT"
    ],
    "correctIndex": 0,
    "explanation": "En Ladder, los contactos en serie representan la lógica AND, mientras que los contactos en ramas paralelas realizan la operación booleana OR.",
    "skill": "Programación de PLC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización Industrial",
    "subtopic": "Lógica Ladder"
  },
  {
    "id": "raz-tec-37",
    "sectionId": 3,
    "number": 37,
    "text": "Para lograr el autoenclavamiento (retención o memoria) de un contactor en Ladder sin instrucciones Latch, se conecta en paralelo con el pulsador de marcha (Start):",
    "options": [
      "Un contacto normalmente abierto (NO) auxiliar de la propia bobina de salida",
      "Un contacto normalmente cerrado del pulsador de paro",
      "Una resistencia de drenaje",
      "Un temporizador a la desconexión"
    ],
    "correctIndex": 0,
    "explanation": "Al pulsar Start, la bobina se energiza y cierra su contacto auxiliar en paralelo, manteniendo la corriente tras soltar el pulsador.",
    "skill": "Circuito de autoenclavamiento",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización Industrial",
    "subtopic": "Control de motores"
  },
  {
    "id": "raz-tec-38",
    "sectionId": 3,
    "number": 38,
    "text": "En un PLC, ¿cómo opera un temporizador con retardo a la conexión (TON)?",
    "options": [
      "Comienza a contar el tiempo cuando su entrada pasa a 1, y activa su salida únicamente después de transcurrido el tiempo prefijado (Preset)",
      "Activa la salida de inmediato y la apaga transcurrido el tiempo",
      "Cuenta el tiempo cuando la entrada pasa a 0",
      "Genera pulsos intermitentes constantes"
    ],
    "correctIndex": 0,
    "explanation": "El temporizador TON retarda el encendido: la bobina de salida se energiza solo si la condición de entrada se mantiene activa durante todo el tiempo programado.",
    "skill": "Temporizadores industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización Industrial",
    "subtopic": "Temporizadores TON"
  },
  {
    "id": "raz-tec-39",
    "sectionId": 3,
    "number": 39,
    "text": "En una máquina de estados finitos (FSM) de tipo Moore:",
    "options": [
      "Las salidas dependen exclusivamente del estado actual en que se encuentra la máquina",
      "Las salidas dependen tanto del estado actual como de las entradas directas actuales",
      "No existen estados de memoria",
      "Las transiciones no dependen de pulsos de reloj"
    ],
    "correctIndex": 0,
    "explanation": "En el modelo de Moore, las salidas están sincronizadas y asociadas únicamente al estado interno, a diferencia del modelo de Mealy.",
    "skill": "Máquinas de estados finitos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización y Robótica",
    "subtopic": "Modelos de Moore y Mealy"
  },
  {
    "id": "raz-tec-40",
    "sectionId": 3,
    "number": 40,
    "text": "¿Qué ventaja principal presenta el Grafcet (norma IEC 60848) en la especificación de automatismos secuenciales?",
    "options": [
      "Representa gráficamente etapas, transiciones lógicas y acciones asociadas de forma estructurada y sin ambigüedad",
      "Reduce el tamaño de los cables de cobre del tablero",
      "Evita la necesidad de usar fusibles de protección",
      "Permite prescindir de sensores mecánicos en planta"
    ],
    "correctIndex": 0,
    "explanation": "El Grafcet formaliza la secuencia funcional mediante etapas activas y receptividades, facilitando la programación y el diagnóstico.",
    "skill": "Modelado GRAFCET",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización Industrial",
    "subtopic": "Norma IEC 60848"
  },
  {
    "id": "raz-tec-41",
    "sectionId": 3,
    "number": 41,
    "text": "En neumática industrial, ¿qué válvula implementa de manera puramente mecánica la función lógica 'AND'?",
    "options": [
      "La válvula de simultaneidad (válvula de doble presión)",
      "La válvula selectora (válvula OR)",
      "La válvula de escape rápido",
      "La válvula estranguladora unidireccional"
    ],
    "correctIndex": 0,
    "explanation": "La válvula de simultaneidad solo deja pasar aire hacia la salida de trabajo si recibe presión simultáneamente en sus dos tomas de entrada.",
    "skill": "Lógica neumática",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática Industrial",
    "subtopic": "Válvulas lógicas"
  },
  {
    "id": "raz-tec-42",
    "sectionId": 3,
    "number": 42,
    "text": "¿Qué componente neumático realiza físicamente la función lógica 'OR'?",
    "options": [
      "La válvula selectora de circuito (válvula de vaivén o lanzadera)",
      "La válvula de simultaneidad",
      "El presostato diferencial",
      "El regulador de presión con escape"
    ],
    "correctIndex": 0,
    "explanation": "La válvula selectora tiene una bolilla interior que cierra el puerto opuesto, permitiendo que el aire fluya a la salida desde cualquiera de las dos entradas.",
    "skill": "Lógica neumática",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática Industrial",
    "subtopic": "Válvula selectora"
  },
  {
    "id": "raz-tec-43",
    "sectionId": 3,
    "number": 43,
    "text": "En la designación de una válvula direccional como '5/2 biestable', ¿qué significan los números 5 y 2?",
    "options": [
      "5 vías de conexión (orificios) y 2 posiciones estables de trabajo",
      "5 posiciones y 2 vías",
      "5 bares de presión máxima y 2 litros por minuto",
      "5 bobinas eléctricas y 2 sensores"
    ],
    "correctIndex": 0,
    "explanation": "La primera cifra indica el número de puertos o vías externas y la segunda el número de estados o posiciones discretas de conmutación.",
    "skill": "Válvulas direccionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática Industrial",
    "subtopic": "Designación de válvulas"
  },
  {
    "id": "raz-tec-44",
    "sectionId": 3,
    "number": 44,
    "text": "¿Qué tipo de sensor de proximidad industrial es capaz de detectar la presencia de una pieza de aluminio sin contacto físico?",
    "options": [
      "Sensor inductivo",
      "Sensor capacitivo únicamente",
      "Sensor magnético reed switch",
      "Sensor piezorresistivo"
    ],
    "correctIndex": 0,
    "explanation": "Los sensores inductivos generan un campo electromagnético de alta frecuencia que interactúa con cualquier metal (ferroso o no ferroso como el aluminio).",
    "skill": "Sensores industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización Industrial",
    "subtopic": "Sensores inductivos"
  },
  {
    "id": "raz-tec-45",
    "sectionId": 3,
    "number": 45,
    "text": "Para detectar el nivel de llenado de un líquido no conductor (como aceite mineral) a través de una pared plástica transparente, ¿qué sensor se recomienda?",
    "options": [
      "Sensor de proximidad capacitivo",
      "Sensor inductivo",
      "Interruptor de final de carrera electromecánico",
      "Sensor tacométrico"
    ],
    "correctIndex": 0,
    "explanation": "Los sensores capacitivos miden variaciones en la constante dieléctrica del medio, permitiendo detectar fluidos y materiales aislantes no metálicos.",
    "skill": "Sensores capacitivos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentación y Control",
    "subtopic": "Sensores capacitivos"
  },
  {
    "id": "raz-tec-46",
    "sectionId": 3,
    "number": 46,
    "text": "En un sistema de control de lazo cerrado (PID), ¿cuál es la función de la acción de control Derivativa (D)?",
    "options": [
      "Anticipar el comportamiento del error midiendo su tasa de cambio para amortiguar oscilaciones bruscas",
      "Eliminar por completo el error en régimen permanente",
      "Amplificar el ruido de baja frecuencia",
      "Desconectar la alimentación eléctrica del actuador"
    ],
    "correctIndex": 0,
    "explanation": "La acción derivativa predice el error futuro según la pendiente de la variable medida, proporcionando estabilidad y respuesta anticipativa.",
    "skill": "Control PID",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Control Automático",
    "subtopic": "Acción derivativa"
  },
  {
    "id": "raz-tec-47",
    "sectionId": 3,
    "number": 47,
    "text": "¿Qué acción del controlador PID se encarga de anular el error residual o en estado estacionario (offset)?",
    "options": [
      "La acción Integral (I)",
      "La acción Proporcional (P) pura",
      "La acción Derivativa (D)",
      "El retardo puro"
    ],
    "correctIndex": 0,
    "explanation": "La integral acumula el error en el tiempo, aumentando la señal de control hasta que la desviación permanente desaparece por completo.",
    "skill": "Control Integral",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Control Automático",
    "subtopic": "Acción integral"
  },
  {
    "id": "raz-tec-48",
    "sectionId": 3,
    "number": 48,
    "text": "En un motor de inducción trifásico, para invertir el sentido de giro del rotor es necesario y suficiente:",
    "options": [
      "Intercambiar entre sí dos cualesquiera de las tres fases de alimentación (ej. L1 por L2)",
      "Invertir la polaridad del neutro",
      "Aumentar la frecuencia del inversor",
      "Cambiar el condensador de arranque"
    ],
    "correctIndex": 0,
    "explanation": "Al permutar dos fases, el campo magnético giratorio del estator invierte su dirección espacial de rotación, invirtiendo el par motriz.",
    "skill": "Accionamientos eléctricos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia",
    "subtopic": "Inversión de giro"
  },
  {
    "id": "raz-tec-49",
    "sectionId": 3,
    "number": 49,
    "text": "En la coordinación de protecciones de un tablero industrial, ¿qué dispositivo protege a los conductores contra sobrecargas continuadas y cortocircuitos?",
    "options": [
      "El interruptor termomagnético (disyuntor magnetotérmico)",
      "El interruptor diferencial (RCD)",
      "El relé de asimetría de fases",
      "El transformador de corriente"
    ],
    "correctIndex": 0,
    "explanation": "La parte térmica (bimetal) protege contra sobrecargas lentas y la parte magnética (bobina) dispara instantáneamente ante cortocircuitos.",
    "skill": "Protecciones eléctricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instalaciones Eléctricas",
    "subtopic": "Interruptores termomagnéticos"
  },
  {
    "id": "raz-tec-50",
    "sectionId": 3,
    "number": 50,
    "text": "¿Qué parámetro de seguridad mide y vigila de forma continua un Interruptor Diferencial en una instalación industrial?",
    "options": [
      "La corriente de fuga a tierra por defecto de aislamiento para proteger a las personas contra contactos indirectos",
      "El consumo total de potencia activa en kW",
      "La caída de tensión en los bornes de la carga",
      "La temperatura del cobre en las tuberías"
    ],
    "correctIndex": 0,
    "explanation": "El diferencial suma vectorialmente las corrientes de entrada y retorno; si detecta una diferencia superior a su sensibilidad (ej. 30 mA), abre el circuito.",
    "skill": "Seguridad eléctrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instalaciones Eléctricas",
    "subtopic": "Protección diferencial"
  },
  {
    "id": "raz-tec-51",
    "sectionId": 3,
    "number": 51,
    "text": "Un engranaje conductor de 20 dientes engrana directamente con un engranaje conducido de 60 dientes. Si el conductor gira a 1800 RPM en sentido horario, ¿a qué velocidad y en qué sentido gira el conducido?",
    "options": [
      "600 RPM en sentido antihorario",
      "5400 RPM en sentido horario",
      "600 RPM en sentido horario",
      "900 RPM en sentido antihorario"
    ],
    "correctIndex": 0,
    "explanation": "Relación de transmisión i = Z1/Z2 = 20/60 = 1/3. Velocidad conducido = 1800 / 3 = 600 RPM. Al ser contacto externo directo, el sentido de giro se invierte (antihorario).",
    "skill": "Trenes de engranajes",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Relación de transmisión"
  },
  {
    "id": "raz-tec-52",
    "sectionId": 3,
    "number": 52,
    "text": "Si entre el engranaje conductor y el conducido del problema anterior se intercala un engranaje loco intermedio de 40 dientes, ¿qué efecto tiene sobre la relación de velocidad y el sentido de giro del conducido?",
    "options": [
      "La velocidad sigue siendo 600 RPM pero ahora el sentido de giro es horario (el mismo del conductor)",
      "La velocidad se reduce a la mitad",
      "La velocidad se duplica",
      "El sentido de giro sigue siendo antihorario"
    ],
    "correctIndex": 0,
    "explanation": "El engranaje loco solo invierte el sentido de giro (haciéndolo horario) sin alterar la relación cinemática global entre el primer y último eje.",
    "skill": "Engranajes intermedios",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Ruedas locas"
  },
  {
    "id": "raz-tec-53",
    "sectionId": 3,
    "number": 53,
    "text": "En un mecanismo de tornillo sin fin y corona, el tornillo tiene 1 entrada (hilo simple) y la corona tiene 40 dientes. Si el tornillo gira a 1200 RPM, ¿cuál es la velocidad de salida de la corona?",
    "options": [
      "30 RPM",
      "40 RPM",
      "300 RPM",
      "48000 RPM"
    ],
    "correctIndex": 0,
    "explanation": "Relación de reducción = entradas tornillo / dientes corona = 1 / 40. Velocidad corona = 1200 / 40 = 30 RPM.",
    "skill": "Tornillo sin fin",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Reductores mecánicos"
  },
  {
    "id": "raz-tec-54",
    "sectionId": 3,
    "number": 54,
    "text": "¿Qué característica mecánica fundamental distingue a una transmisión por tornillo sin fin y corona de alto ángulo?",
    "options": [
      "Es autoblocante: la corona no puede mover al tornillo sin fin desde el eje de salida",
      "Tiene un rendimiento energético del 100%",
      "No requiere lubricación con aceite",
      "Solo funciona a baja temperatura"
    ],
    "correctIndex": 0,
    "explanation": "Debido a la fricción helicoidal, la transmisión suele ser irreversible (autofrenante), lo que aporta seguridad en elevadores y grúas.",
    "skill": "Propiedad autoblocante",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Transmisiones irreversibles"
  },
  {
    "id": "raz-tec-55",
    "sectionId": 3,
    "number": 55,
    "text": "En un sistema de poleas polipasto factorial compuesto por 3 poleas fijas y 3 poleas móviles que elevan una carga de 600 kg, ¿qué fuerza teórica en kgf se requiere aplicar en la cuerda (despreciando fricción)?",
    "options": [
      "100 kgf",
      "200 kgf",
      "300 kgf",
      "50 kgf"
    ],
    "correctIndex": 0,
    "explanation": "Ventaja mecánica de un polipasto con n poleas móviles soportando la carga: F = Carga / (2 × n). Para n = 3 móviles: F = 600 / (2 × 3) = 600 / 6 = 100 kgf.",
    "skill": "Polipastos y poleas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Ventaja mecánica"
  },
  {
    "id": "raz-tec-56",
    "sectionId": 3,
    "number": 56,
    "text": "En una palanca de primer género (punto de apoyo entre la fuerza y la resistencia), el brazo de fuerza mide 1.5 m y el brazo de resistencia mide 0.3 m. ¿Cuál es la ventaja mecánica ideal?",
    "options": [
      "5",
      "0.2",
      "4.5",
      "1.8"
    ],
    "correctIndex": 0,
    "explanation": "Ventaja mecánica ideal (VMI) = Brazo de potencia / Brazo de resistencia = 1.5 m / 0.3 m = 5.",
    "skill": "Palancas mecánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Taller",
    "subtopic": "Equilibrio de momentos"
  },
  {
    "id": "raz-tec-57",
    "sectionId": 3,
    "number": 57,
    "text": "Un micrómetro o palmer para medición exterior tiene un tambor graduado con un paso de rosca de 0.5 mm dividido en 50 partes iguales. ¿Cuál es su apreciación de lectura?",
    "options": [
      "0.01 mm",
      "0.05 mm",
      "0.02 mm",
      "0.001 mm"
    ],
    "correctIndex": 0,
    "explanation": "Apreciación = Paso de rosca / Divisiones del tambor = 0.5 mm / 50 = 0.01 mm (una centésima de milímetro).",
    "skill": "Metrología dimensional",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Metrología y Taller",
    "subtopic": "Micrómetros"
  },
  {
    "id": "raz-tec-58",
    "sectionId": 3,
    "number": 58,
    "text": "En un calibrador pie de rey con nonio de 20 divisiones que abarca 19 milímetros de la regla principal, ¿cuál es la apreciación del instrumento?",
    "options": [
      "0.05 mm (1/20 mm)",
      "0.02 mm",
      "0.1 mm",
      "0.01 mm"
    ],
    "correctIndex": 0,
    "explanation": "Apreciación = 1 mm / número de divisiones del nonio = 1 / 20 = 0.05 mm.",
    "skill": "Metrología dimensional",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Metrología y Taller",
    "subtopic": "Pie de rey"
  },
  {
    "id": "raz-tec-59",
    "sectionId": 3,
    "number": 59,
    "text": "¿Qué tipo de chaveta mecánica transmite el par torsional entre un eje y un cubo permitiendo desplazamiento axial continuo de la pieza?",
    "options": [
      "Chaveta deslizante o estriada",
      "Chaveta de cuña cónica",
      "Chaveta Woodruff de media luna",
      "Pasador cónico transversal"
    ],
    "correctIndex": 0,
    "explanation": "Las chavetas deslizantes o ejes ranurados transmiten rotación sin impedir que el engranaje o embrague se desplace longitudinalmente.",
    "skill": "Elementos de fijación",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Taller",
    "subtopic": "Chavetas mecánicas"
  },
  {
    "id": "raz-tec-60",
    "sectionId": 3,
    "number": 60,
    "text": "En la preparación de juntas para soldadura SMAW en planchas de acero de 12 mm de espesor, ¿por qué es indispensable biselar los bordes en 'V'?",
    "options": [
      "Para asegurar la penetración completa del electrodo hasta la raíz de la unión y evitar falta de fusión interna",
      "Para ahorrar material de aporte",
      "Para evitar que la chapa se oxide antes de soldar",
      "Para no usar corriente continua"
    ],
    "correctIndex": 0,
    "explanation": "El bisel permite que el arco eléctrico deposite el cordón de raíz y los pases de relleno en todo el grosor del material base.",
    "skill": "Tecnología de soldadura",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Metalmecánica y Soldadura",
    "subtopic": "Preparación de juntas"
  },
  {
    "id": "raz-tec-61",
    "sectionId": 3,
    "number": 61,
    "text": "En refrigeración y aire acondicionado, ¿cuál es la función del tubo capilar o válvula de expansión termostática (TXV)?",
    "options": [
      "Generar una caída brusca de presión en el refrigerante líquido para permitir su evaporación a baja temperatura en el evaporador",
      "Aumentar la presión del gas hacia el condensador",
      "Filtrar la humedad del circuito frigorífico",
      "Separar el aceite del compresor"
    ],
    "correctIndex": 0,
    "explanation": "La caída de presión isentálpica en el elemento de expansión provoca que el fluido entre en estado de mezcla bifásica fría listo para absorber calor.",
    "skill": "Sistemas frigoríficos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Climatización y Refrigeración",
    "subtopic": "Ciclo de compresión de vapor"
  },
  {
    "id": "raz-tec-62",
    "sectionId": 3,
    "number": 62,
    "text": "¿Qué instrumento se utiliza para medir el aislamiento eléctrico en devanados de motores y transformadores aplicando alta tensión continua?",
    "options": [
      "Megóhmetro (Megger)",
      "Multímetro digital común",
      "Amperímetro de pinza",
      "Vatímetro trifásico"
    ],
    "correctIndex": 0,
    "explanation": "El megóhmetro aplica tensiones de prueba de 500 V, 1000 V o más para medir resistencias de aislamiento del orden de los Megaohmios o Gigaohmios.",
    "skill": "Pruebas eléctricas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia",
    "subtopic": "Medición de aislamiento"
  },
  {
    "id": "raz-tec-63",
    "sectionId": 3,
    "number": 63,
    "text": "En el mecanizado por torneado cilíndrico, la velocidad de corte Vc se expresa en m/min. Si el diámetro de la pieza es D (en mm) y gira a n RPM, la fórmula de cálculo es:",
    "options": [
      "Vc = (π × D × n) / 1000",
      "Vc = (π × D) / n",
      "Vc = (1000 × n) / (π × D)",
      "Vc = π × D × n"
    ],
    "correctIndex": 0,
    "explanation": "El factor 1000 en el denominador convierte los milímetros del diámetro a metros: Vc = (π·D·n)/1000 m/min.",
    "skill": "Mecanizado por viruta",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Taller",
    "subtopic": "Parámetros de corte"
  },
  {
    "id": "raz-tec-64",
    "sectionId": 3,
    "number": 64,
    "text": "En sistemas oleohidráulicos industriales, ¿cuál es la función de la válvula de alivio o de seguridad principal (Relief Valve)?",
    "options": [
      "Limitar la presión máxima del circuito derivando el exceso de caudal al tanque cuando se supera el valor tarado",
      "Bloquear el retorno de aceite hacia la bomba",
      "Acelerar la velocidad del cilindro hidráulico",
      "Enfriar el fluido mediante aire forzado"
    ],
    "correctIndex": 0,
    "explanation": "La válvula de alivio protege la bomba y las tuberías contra sobrepresiones destructivas abriendo una vía directa de descarga al reservorio.",
    "skill": "Oleohidráulica industrial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Oleohidráulica",
    "subtopic": "Válvulas de seguridad hidráulica"
  },
  {
    "id": "raz-tec-65",
    "sectionId": 3,
    "number": 65,
    "text": "¿Qué fenómeno perjudicial en bombas centrífugas se produce cuando la presión en la aspiración cae por debajo de la presión de vapor del líquido formando burbujas que luego colapsan violentamente?",
    "options": [
      "Cavitación",
      "Golpe de ariete",
      "Descebado simple",
      "Emulsificación"
    ],
    "correctIndex": 0,
    "explanation": "El colapso de las microburbujas de vapor erosiona y pica los álabes del impulsor, generando ruidos mecánicos y pérdida de rendimiento.",
    "skill": "Máquinas hidráulicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Cavitación en bombas"
  },
  {
    "id": "raz-tec-66",
    "sectionId": 3,
    "number": 66,
    "text": "Analiza el siguiente fragmento de algoritmo en pseudocódigo:\ncontador = 0\nPara i = 1 Hasta 4 Hacer\n   Para j = 1 Hasta i Hacer\n      contador = contador + 1\n¿Cuál es el valor final de 'contador'?",
    "options": [
      "10",
      "16",
      "8",
      "12"
    ],
    "correctIndex": 0,
    "explanation": "El bucle interior itera 1 vez (i=1), 2 veces (i=2), 3 veces (i=3) y 4 veces (i=4). Total de incrementos: 1 + 2 + 3 + 4 = 10.",
    "skill": "Bucles anidados y trazas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Programación Estructurada",
    "subtopic": "Traza de algoritmos"
  },
  {
    "id": "raz-tec-67",
    "sectionId": 3,
    "number": 67,
    "text": "Dada la variable entera x = 15, ¿cuál es el resultado de la expresión booleana con cortocircuito: (x > 10) || (x / 0 == 1)?",
    "options": [
      "Verdadero (True), sin producirse error de división entre cero",
      "Error de división entre cero en tiempo de ejecución",
      "Falso (False)",
      "Indeterminado"
    ],
    "correctIndex": 0,
    "explanation": "En la evaluación por cortocircuito del operador OR (||), al ser el primer operando verdadero (15 > 10 es True), el compilador no evalúa el segundo término, evitando la división por cero.",
    "skill": "Evaluación de cortocircuito",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Programación Estructurada",
    "subtopic": "Operadores lógicos en programación"
  },
  {
    "id": "raz-tec-68",
    "sectionId": 3,
    "number": 68,
    "text": "En una estructura de datos de tipo Pila (Stack), el principio de acceso a los elementos es:",
    "options": [
      "LIFO (Last In, First Out: el último en entrar es el primero en salir)",
      "FIFO (First In, First Out)",
      "Acceso aleatorio directo",
      "Prioridad por orden alfabético"
    ],
    "correctIndex": 0,
    "explanation": "Una pila añade y retira datos exclusivamente por un único extremo denominado cima (top), rigiéndose por el principio LIFO.",
    "skill": "Estructuras de datos básicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Estructuras de Datos y Algoritmos",
    "subtopic": "Pilas y colas"
  },
  {
    "id": "raz-tec-69",
    "sectionId": 3,
    "number": 69,
    "text": "En una Cola (Queue) estándar, ¿en qué orden se procesan los elementos insertados?",
    "options": [
      "FIFO (First In, First Out: el primero en entrar es el primero en salir)",
      "LIFO (Last In, First Out)",
      "Por tamaño de memoria",
      "Invertido"
    ],
    "correctIndex": 0,
    "explanation": "Las colas operan como filas de atención convencionales: el elemento encolado en primer lugar es el primero en ser despachado.",
    "skill": "Estructuras de datos lineales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Estructuras de Datos y Algoritmos",
    "subtopic": "Colas FIFO"
  },
  {
    "id": "raz-tec-70",
    "sectionId": 3,
    "number": 70,
    "text": "En la representación binaria en Complemento a Dos de 8 bits, ¿qué valor decimal representa el patrón de bits 11111111?",
    "options": [
      "-1",
      "+255",
      "-127",
      "-128"
    ],
    "correctIndex": 0,
    "explanation": "En complemento a dos con bit de signo 1 en la posición más significativa, 11111111 representa el número entero negativo -1.",
    "skill": "Sistemas de numeración binaria",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas Informáticos",
    "subtopic": "Complemento a dos"
  },
  {
    "id": "raz-tec-71",
    "sectionId": 3,
    "number": 71,
    "text": "¿Cuál es el número decimal correspondiente al valor hexadecimal 2F?",
    "options": [
      "47",
      "31",
      "45",
      "52"
    ],
    "correctIndex": 0,
    "explanation": "En base 16: 2F = 2 × 16¹ + 15 × 16⁰ = 32 + 15 = 47.",
    "skill": "Conversión hexadecimal-decimal",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas Informáticos",
    "subtopic": "Sistemas de numeración"
  },
  {
    "id": "raz-tec-72",
    "sectionId": 3,
    "number": 72,
    "text": "En redes de computadoras IPv4 con máscara de subred 255.255.255.0 (/24), ¿cuántas direcciones IP utilizables para hosts existen en la subred?",
    "options": [
      "254 direcciones utilizables",
      "256 direcciones",
      "255 direcciones",
      "128 direcciones"
    ],
    "correctIndex": 0,
    "explanation": "La subred tiene 2⁸ = 256 direcciones en total. Se reservan la primera (dirección de red, .0) y la última (dirección de broadcast, .255): 256 - 2 = 254 hosts.",
    "skill": "Direccionamiento IPv4",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Redes de Datos",
    "subtopic": "Cálculo de subredes"
  },
  {
    "id": "raz-tec-73",
    "sectionId": 3,
    "number": 73,
    "text": "¿Qué función desempeña el protocolo ARP (Address Resolution Protocol) en redes Ethernet?",
    "options": [
      "Asociar una dirección lógica IP conocida con la dirección física MAC del dispositivo en la red local",
      "Asignar dinámicamente direcciones IP a los clientes",
      "Traducir nombres de dominio a números IP",
      "Cifrar el tráfico de paquetes TCP"
    ],
    "correctIndex": 0,
    "explanation": "ARP envía tramas de difusión para averiguar qué tarjeta de red física (MAC) tiene asignada una determinada dirección IP local.",
    "skill": "Protocolos de red",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Redes de Datos",
    "subtopic": "Protocolo ARP"
  },
  {
    "id": "raz-tec-74",
    "sectionId": 3,
    "number": 74,
    "text": "En el modelo OSI de 7 capas, ¿en qué capa operan los switches de red tradicionales que conmutan tramas mediante direcciones MAC?",
    "options": [
      "Capa 2: Capa de Enlace de Datos",
      "Capa 3: Capa de Red",
      "Capa 1: Capa de Física",
      "Capa 4: Capa de Transporte"
    ],
    "correctIndex": 0,
    "explanation": "Los conmutadores o switches de capa 2 analizan los encabezados Ethernet y reenvían tramas según las tablas CAM de direcciones MAC.",
    "skill": "Modelo OSI",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Redes de Datos",
    "subtopic": "Capa de enlace de datos"
  },
  {
    "id": "raz-tec-75",
    "sectionId": 3,
    "number": 75,
    "text": "En el protocolo TCP/IP, ¿qué mecanismo garantiza el establecimiento formal y fiable de una conexión punto a punto antes de enviar datos?",
    "options": [
      "El protocolo de saludo de tres vías (Three-Way Handshake: SYN, SYN-ACK, ACK)",
      "El envío de un paquete UDP broadcast",
      "El ping mediante eco ICMP",
      "La autenticación por certificado SSL"
    ],
    "correctIndex": 0,
    "explanation": "El saludo de 3 pasos sincroniza los números de secuencia iniciales entre cliente y servidor antes de habilitar la transmisión de datos confiable.",
    "skill": "Protocolo TCP",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Redes de Datos",
    "subtopic": "Three-Way Handshake"
  },
  {
    "id": "raz-tec-76",
    "sectionId": 3,
    "number": 76,
    "text": "¿Cuál es la función del comando 'ping' en diagnóstico de conectividad de redes?",
    "options": [
      "Enviar paquetes de solicitud de eco ICMP para verificar la accesibilidad del host y medir la latencia de ida y vuelta",
      "Reiniciar la tarjeta de red remota",
      "Descargar archivos de configuración",
      "Mostrar los nombres de usuario conectados"
    ],
    "correctIndex": 0,
    "explanation": "Ping utiliza mensajes ICMP Echo Request y Echo Reply para diagnosticar si un equipo responde en la capa IP y el tiempo que tarda el paquete.",
    "skill": "Diagnóstico de redes",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Redes de Datos",
    "subtopic": "Comando ping e ICMP"
  },
  {
    "id": "raz-tec-77",
    "sectionId": 3,
    "number": 77,
    "text": "En programación lógica orientada a control, ¿qué es un bucle infinito y cómo suele originarse?",
    "options": [
      "Un bucle cuya condición de parada nunca llega a evaluarse como falsa por falta de actualización de la variable de control",
      "Un algoritmo que se ejecuta en varios servidores a la vez",
      "Un programa que no contiene variables de tipo entero",
      "Una función que retorna dos valores simultáneamente"
    ],
    "correctIndex": 0,
    "explanation": "Si la variable evaluada en el while no cambia dentro del cuerpo o la condición lógica siempre es True, el bucle nunca termina de ejecutarse.",
    "skill": "Estructuras de repetición",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Programación Estructurada",
    "subtopic": "Bucles infinitos"
  },
  {
    "id": "raz-tec-78",
    "sectionId": 3,
    "number": 78,
    "text": "Al diseñar un algoritmo de búsqueda binaria sobre un arreglo de datos, ¿qué condición previa debe cumplir obligatoriamente la lista de elementos?",
    "options": [
      "Los elementos deben estar estrictamente ordenados de forma ascendente o descendente",
      "El número de elementos debe ser una potencia de 2",
      "Todos los elementos deben ser números positivos",
      "El arreglo no puede contener elementos duplicados"
    ],
    "correctIndex": 0,
    "explanation": "La búsqueda binaria descarta la mitad de las opciones en cada paso comparando con el punto medio, lo cual solo es válido si el vector está ordenado.",
    "skill": "Algoritmos de búsqueda",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Estructuras de Datos y Algoritmos",
    "subtopic": "Búsqueda binaria"
  },
  {
    "id": "raz-tec-79",
    "sectionId": 3,
    "number": 79,
    "text": "¿Cuál es la complejidad temporal en el peor caso del algoritmo de búsqueda binaria sobre una lista ordenada de N elementos?",
    "options": [
      "O(log N)",
      "O(N)",
      "O(N²)",
      "O(1)"
    ],
    "correctIndex": 0,
    "explanation": "Al dividir sucesivamente el espacio de búsqueda por 2 en cada paso, el número máximo de comparaciones requeridas es proporcional a log₂ N.",
    "skill": "Complejidad algorítmica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Estructuras de Datos y Algoritmos",
    "subtopic": "Notación Big-O"
  },
  {
    "id": "raz-tec-80",
    "sectionId": 3,
    "number": 80,
    "text": "En sistemas embebidos y microcontroladores, ¿qué ventaja ofrece el uso de interrupciones de hardware (ISR) frente a la técnica de muestreo periódico continuo (Polling)?",
    "options": [
      "El procesador solo atiende el periférico cuando el evento externo ocurre realmente, liberando tiempo de cálculo y reduciendo latencia",
      "Las interrupciones no requieren código en lenguaje C",
      "Elimina la memoria RAM del microcontrolador",
      "Hace que el reloj oscile a mayor frecuencia"
    ],
    "correctIndex": 0,
    "explanation": "El sondeo o polling desperdicia ciclos de CPU consultando continuamente una bandera; las interrupciones permiten ejecución reactiva inmediata basada en hardware.",
    "skill": "Microcontroladores y embebidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas Informáticos",
    "subtopic": "Interrupciones de hardware"
  },
  {
    "id": "raz-tec-81",
    "sectionId": 3,
    "number": 81,
    "text": "En un circuito con puente de Wheatstone en equilibrio, la condición de corriente cero en el galvanómetro central se cumple cuando:",
    "options": [
      "El producto cruzado de las resistencias de las ramas opuestas es idéntico (R1·R4 = R2·R3)",
      "Todas las resistencias valen cero",
      "La tensión de alimentación es alterna",
      "El galvanómetro está cortocircuitado"
    ],
    "correctIndex": 0,
    "explanation": "El puente de Wheatstone equilibra potenciales en sus dos nodos centrales cuando R1/R2 = R3/R4, base de las mediciones de galgas extensométricas.",
    "skill": "Puente de Wheatstone",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia",
    "subtopic": "Mediciones eléctricas"
  },
  {
    "id": "raz-tec-82",
    "sectionId": 3,
    "number": 82,
    "text": "En un motor paso a paso bipolar con ángulo de paso de 1.8°, ¿cuántos pulsos completos debe recibir para realizar una revolución completa de 360° en modo paso completo (full-step)?",
    "options": [
      "200 pulsos",
      "180 pulsos",
      "360 pulsos",
      "100 pulsos"
    ],
    "correctIndex": 0,
    "explanation": "Pulsos por vuelta = 360° / 1.8° = 200 pasos por revolución.",
    "skill": "Motores paso a paso",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización y Robótica",
    "subtopic": "Control de movimiento"
  },
  {
    "id": "raz-tec-83",
    "sectionId": 3,
    "number": 83,
    "text": "¿Qué parámetro de un servomotor industrial diferencia su control respecto al de un motor de inducción ordinario?",
    "options": [
      "Incorpora un sensor de retroalimentación de posición (encoder o resolver) para control en lazo cerrado de posición y velocidad",
      "Solo puede girar en un sentido",
      "No requiere electricidad",
      "Tiene mayor tamaño físico"
    ],
    "correctIndex": 0,
    "explanation": "El servocontrol monitorea continuamente el error entre la posición real y la consigna deseada, corrigiendo instantáneamente.",
    "skill": "Servosistemas industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Control Automático",
    "subtopic": "Servomotores"
  },
  {
    "id": "raz-tec-84",
    "sectionId": 3,
    "number": 84,
    "text": "En un encoder óptico incremental de dos canales en cuadratura (canales A y B desfasados 90° eléctricos), ¿cómo detecta el microcontrolador el sentido de giro del eje?",
    "options": [
      "Determinando cuál de las dos señales conmuta primero a flanco de subida (si A precede a B o si B precede a A)",
      "Midiendo la amplitud de voltaje de la señal",
      "Contando el número total de ranuras",
      "Midiendo la frecuencia con un filtro RC"
    ],
    "correctIndex": 0,
    "explanation": "El desfase de 90° hace que en giro horario A lidere a B, mientras que en antihorario B lidera a A, permitiendo cuadruplicar la resolución.",
    "skill": "Encoders incrementales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentación y Control",
    "subtopic": "Señales en cuadratura"
  },
  {
    "id": "raz-tec-85",
    "sectionId": 3,
    "number": 85,
    "text": "¿Cuál es la función del bus de campo industrial Modbus RTU en un lazo de automatización?",
    "options": [
      "Comunicar maestros y esclavos mediante tramas binarias sobre el estándar físico serie RS-485",
      "Suministrar energía de 400V a los motores",
      "Proteger las líneas de datos contra rayos",
      "Almacenar archivos de texto en tarjetas SD"
    ],
    "correctIndex": 0,
    "explanation": "Modbus RTU es el protocolo industrial estándar para transmitir registros de datos con verificación CRC sobre interfaces RS-485 multipunto.",
    "skill": "Buses de campo industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Redes de Datos",
    "subtopic": "Protocolo Modbus RTU"
  },
  {
    "id": "raz-tec-86",
    "sectionId": 3,
    "number": 86,
    "text": "En un lazo de corriente estándar analógico industrial 4-20 mA, ¿por qué se utiliza un cero vivo de 4 mA en lugar de 0 mA?",
    "options": [
      "Para distinguir inequívocamente una señal de medición cero de una rotura física del cable conductor",
      "Para aumentar el consumo de batería",
      "Para calentar los instrumentos en invierno",
      "Por razones estéticas de los instrumentos"
    ],
    "correctIndex": 0,
    "explanation": "Si la corriente cae a 0 mA, el sistema detecta de inmediato fallo de línea (cable cortado), proporcionando seguridad intrínseca ante fallos.",
    "skill": "Lazos de corriente 4-20 mA",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentación y Control",
    "subtopic": "Transmisores analógicos"
  },
  {
    "id": "raz-tec-87",
    "sectionId": 3,
    "number": 87,
    "text": "En un circuito con relé de estado sólido (SSR), ¿cuál es su ventaja principal frente a un relé electromecánico convencional?",
    "options": [
      "Conmutación estática sin piezas móviles mecánicas, sin rebotes ni arcos eléctricos y con vida útil de conmutación muy superior",
      "Menor costo en todos los modelos",
      "No disipa calor alguno",
      "Soporta sobretensiones infinitas"
    ],
    "correctIndex": 0,
    "explanation": "Al utilizar semiconductores (triacs/tiristores) con acoplamiento óptico, conmutan a alta velocidad sin desgaste mecánico ni ruido por chispa.",
    "skill": "Relés de estado sólido",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica de Potencia",
    "subtopic": "Conmutación estática"
  },
  {
    "id": "raz-tec-88",
    "sectionId": 3,
    "number": 88,
    "text": "En un variador de frecuencia (VFD) que alimenta un motor de inducción trifásico, ¿cómo se controla la velocidad del motor?",
    "options": [
      "Variando coordinadamente la frecuencia y la tensión eficaz de salida suministrada al estator manteniendo la relación V/Hz constante",
      "Cambiando el número físico de polos con un interruptor",
      "Aumentando la resistencia del bobinado con un potenciómetro",
      "Cortando una de las tres fases"
    ],
    "correctIndex": 0,
    "explanation": "La velocidad síncrona es proporcional a la frecuencia (n = 120f/P); mantener V/f constante evita la saturación magnética del núcleo.",
    "skill": "Variadores de frecuencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia de Potencia",
    "subtopic": "Control V/f"
  },
  {
    "id": "raz-tec-89",
    "sectionId": 3,
    "number": 89,
    "text": "¿Qué dispositivo neumático absorbe la energía cinética al final de carrera de un cilindro para evitar impactos mecánicos bruscos contra las culatas?",
    "options": [
      "Amortiguador neumático regulable de fin de carrera",
      "Válvula de retención pilotada",
      "Filtro de aire con purga automática",
      "Lubricador por niebla"
    ],
    "correctIndex": 0,
    "explanation": "Un casquillo cónico estrangula progresivamente el aire de escape en el tramo final, frenando suavemente el émbolo.",
    "skill": "Amortiguación neumática",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática Industrial",
    "subtopic": "Cilindros neumáticos"
  },
  {
    "id": "raz-tec-90",
    "sectionId": 3,
    "number": 90,
    "text": "En un plano hidráulico, ¿qué indica una flecha inclinada cruzando diagonalmente el símbolo de una bomba hidráulica?",
    "options": [
      "Bomba de cilindrada variable (caudal regulable)",
      "Bomba averiada",
      "Bomba reversible de giro manual",
      "Bomba sumergida en agua"
    ],
    "correctIndex": 0,
    "explanation": "Por norma ISO 1219, una flecha diagonal a 45° indica que el parámetro del componente (caudal, presión o resorte) es variable o ajustable.",
    "skill": "Simbología hidráulica ISO 1219",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Oleohidráulica",
    "subtopic": "Símbolos normalizados"
  },
  {
    "id": "raz-tec-91",
    "sectionId": 3,
    "number": 91,
    "text": "¿Qué función tiene un diodo volante (flyback diode) conectado en antiparalelo con la bobina de un relé en un circuito de control con transistores?",
    "options": [
      "Derivar de forma segura la sobretensión inductiva transitoria inversa generada al desconectar la bobina, protegiendo al transistor de conmutación",
      "Aumentar la fuerza magnética del relé",
      "Indicar con luz que el relé está cerrado",
      "Rectificar la señal de alterna a continua"
    ],
    "correctIndex": 0,
    "explanation": "Por la ley de Lenz, al cortar la corriente bruscamente en un inductor se genera una alta fem inversa que destruiría la unión del transistor.",
    "skill": "Protección inductiva",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica de Potencia",
    "subtopic": "Diodo flyback"
  },
  {
    "id": "raz-tec-92",
    "sectionId": 3,
    "number": 92,
    "text": "En una fuente conmutada reductora (Buck Converter), la tensión continua media de salida respecto a la de entrada es:",
    "options": [
      "Estrictamente menor que la tensión de entrada y proporcional al ciclo de trabajo D (Vout = D · Vin)",
      "Mayor que la tensión de entrada",
      "Idéntica a la tensión de entrada",
      "Negativa en todos los casos"
    ],
    "correctIndex": 0,
    "explanation": "El convertidor Buck utiliza modulación PWM y un filtro LC para reducir eficientemente la tensión con mínimo desperdicio térmico.",
    "skill": "Convertidores DC-DC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrónica de Potencia",
    "subtopic": "Topología Buck"
  },
  {
    "id": "raz-tec-93",
    "sectionId": 3,
    "number": 93,
    "text": "¿Qué componente de potencia se utiliza típicamente como interruptor estático de control en arrancadores suaves de motores de gran potencia?",
    "options": [
      "Tiristores (SCR) conectados en antiparalelo en cada fase",
      "Transistores bipolares NPN de señal",
      "Diodos Zener",
      "Fusibles rápidos"
    ],
    "correctIndex": 0,
    "explanation": "Los tiristores en antiparalelo permiten modular el ángulo de disparo de la onda senoidal reduciendo la corriente de arranque del motor.",
    "skill": "Arrancadores suaves",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia de Potencia",
    "subtopic": "Tiristores SCR"
  },
  {
    "id": "raz-tec-94",
    "sectionId": 3,
    "number": 94,
    "text": "En una red industrial Profibus-DP, ¿qué elemento debe instalarse obligatoriamente en los dos conectores extremos físicos de la línea de bus?",
    "options": [
      "Una resistencia terminadora activa de línea para evitar reflexiones de señal electromagnética",
      "Un fusible térmico de 10A",
      "Una toma a tierra directa del hilo verde",
      "Un repetidor óptico"
    ],
    "correctIndex": 0,
    "explanation": "Las terminaciones igualan la impedancia característica del cable evitando rebotes de señal que corromperían las tramas digitales.",
    "skill": "Comunicaciones industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Redes de Datos",
    "subtopic": "Terminadores de bus"
  },
  {
    "id": "raz-tec-95",
    "sectionId": 3,
    "number": 95,
    "text": "¿Cuál es la función del comando 'traceroute' (o tracert) en la gestión de redes de computadoras?",
    "options": [
      "Listar los enrutadores intermedios por los que pasa un paquete IP hasta llegar al destino utilizando el campo TTL decreciente",
      "Medir el ancho de banda contratado con el operador",
      "Escanear puertos TCP abiertos en el servidor",
      "Borrar la memoria caché del navegador"
    ],
    "correctIndex": 0,
    "explanation": "Al incrementar progresivamente el Time To Live (TTL), cada router intermedio devuelve un mensaje ICMP Time Exceeded identificando su IP.",
    "skill": "Herramientas de redes",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Redes de Datos",
    "subtopic": "Comando traceroute"
  },
  {
    "id": "raz-tec-96",
    "sectionId": 3,
    "number": 96,
    "text": "En un autómata programable, ¿qué fenómeno describe el 'tiempo de ciclo de scan' (Scan Time)?",
    "options": [
      "El tiempo total que tarda el PLC en leer entradas físicas, ejecutar el programa de usuario y actualizar las salidas físicas",
      "El tiempo que tarda en encender la fuente de poder",
      "La velocidad de los pulsos del reloj de cuarzo interno",
      "El tiempo de garantía del fabricante"
    ],
    "correctIndex": 0,
    "explanation": "Un ciclo de scan típico oscila entre 1 y 20 milisegundos; eventos externos más rápidos que el scan requieren interrupciones rápidas.",
    "skill": "Arquitectura de PLCs",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización Industrial",
    "subtopic": "Ciclo de Scan"
  },
  {
    "id": "raz-tec-97",
    "sectionId": 3,
    "number": 97,
    "text": "¿Qué ocurre si dos bobinas con la misma dirección de memoria física de salida se programan en líneas distintas (doble bobinado) en un programa Ladder?",
    "options": [
      "El estado escrito por la última línea evaluada sobrescribirá el estado de la primera en la tabla de salidas al final del scan",
      "El PLC entra en falla crítica y se apaga",
      "La bobina se energiza al doble de tensión",
      "Se ejecutan las dos al mismo tiempo sin conflicto"
    ],
    "correctIndex": 0,
    "explanation": "El error de doble bobina es clásico en novatos: la primera instrucción se ignora efectivamente porque la segunda sobreescribe el registro imagen de salida.",
    "skill": "Buenas prácticas de programación Ladder",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización Industrial",
    "subtopic": "Doble bobina en PLC"
  },
  {
    "id": "raz-tec-98",
    "sectionId": 3,
    "number": 98,
    "text": "En refrigeración industrial con amoníaco (R-717), ¿por qué está terminantemente prohibido el uso de tuberías y accesorios de cobre?",
    "options": [
      "Porque el amoníaco en presencia de humedad corroe y ataca severamente al cobre y sus aleaciones formando complejos de cobre",
      "Porque el cobre no resiste la presión del amoníaco",
      "Porque el cobre es un aislante térmico",
      "Porque el amoníaco se solidifica dentro del cobre"
    ],
    "correctIndex": 0,
    "explanation": "Los sistemas de amoníaco se construyen exclusivamente en acero al carbono o acero inoxidable para evitar corrosión destructiva.",
    "skill": "Sistemas frigoríficos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Climatización y Refrigeración",
    "subtopic": "Compatibilidad de materiales"
  },
  {
    "id": "raz-tec-99",
    "sectionId": 3,
    "number": 99,
    "text": "¿Qué sensor de temperatura industrial basa su funcionamiento en la variación lineal de la resistencia eléctrica del platino con la temperatura?",
    "options": [
      "Termorresistencia Pt100 (RTD)",
      "Termopar tipo K",
      "Termistor NTC de óxidos metálicos",
      "Pirómetro de radiación"
    ],
    "correctIndex": 0,
    "explanation": "La Pt100 tiene exactamente 100 ohmios a 0 °C y ofrece gran precisión y estabilidad para la industria de procesos.",
    "skill": "Sensores de temperatura",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentación y Control",
    "subtopic": "RTD Pt100"
  },
  {
    "id": "raz-tec-100",
    "sectionId": 3,
    "number": 100,
    "text": "En un termopar (como el tipo K de cromel-alumel), ¿qué efecto físico genera la militensión en la junta de medida proporcional a la diferencia térmica?",
    "options": [
      "Efecto Seebeck",
      "Efecto Peltier",
      "Efecto Thomson",
      "Efecto Hall"
    ],
    "correctIndex": 0,
    "explanation": "El efecto termoeléctrico Seebeck genera una fuerza electromotriz proporcional al gradiente de temperatura entre la junta caliente y la junta fría de referencia.",
    "skill": "Termopares",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentación y Control",
    "subtopic": "Efecto Seebeck"
  }
];
