import { Question } from '../../../types';

export const ELECTRICIDAD_TECNICO: Question[] = [
  {
    "id": "ele-tec-1",
    "sectionId": 10,
    "number": 61,
    "text": "En el arranque de motores de inducción trifásicos de jaula de ardilla, ¿qué método clásico electromecánico reduce la corriente de arranque a un tercio conmutando las conexiones de los devanados estatóricos?",
    "options": [
      "Arranque directo a plena tensión",
      "Arranque estrella-triángulo (Y-Δ)",
      "Arranque por resistencias rotóricas",
      "Arranque estatórico por diodos"
    ],
    "correctIndex": 1,
    "explanation": "Al conectar en estrella (Y), la tensión por fase se reduce a V_L / √3, reduciendo la corriente de arranque y el par motor a (1/√3)² = 1/3 de los valores de arranque directo.",
    "skill": "Arranque de Motores Asíncronos Trifásicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Máquinas Eléctricas",
    "subtopic": "Arranque Estrella-Triángulo"
  },
  {
    "id": "ele-tec-2",
    "sectionId": 10,
    "number": 62,
    "text": "En variadores de frecuencia (VFD / inversores) para control de velocidad de motores de CA, ¿qué técnica de modulación por ancho de pulso aproxima una corriente senoidal pura gobernando los transistores IGBT?",
    "options": [
      "PWM senoidal (SPWM) o Modulación Vectorial Espacial (SVPWM)",
      "Control por ángulo de fase con tiristores",
      "Modulación en amplitud AM",
      "Conmutación por relé térmico"
    ],
    "correctIndex": 0,
    "explanation": "La técnica SVPWM optimiza el vector de voltaje en el espacio de estados del inversor trifásico, aumentando la utilización del bus de continua en un 15% y reduciendo la distorsión armónica THD.",
    "skill": "Accionamientos Eléctricos y Variadores VFD",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electrónica de Potencia Industrial",
    "subtopic": "Modulación SVPWM en Inversores"
  },
  {
    "id": "ele-tec-3",
    "sectionId": 10,
    "number": 63,
    "text": "En mantenimiento de transformadores de distribución inmersos en aceite dieléctrico, ¿qué análisis fisicoquímico y de gases disueltos (DGA) detecta descargas parciales, arcos eléctricos o sobrecalentamiento interno?",
    "options": [
      "Cromatografía de gases disueltos en aceite (DGA) según norma IEEE C57.104",
      "Medición de espesor por ultrasonido",
      "Ensayo de tracción uniaxial",
      "Análisis de gases de escape"
    ],
    "correctIndex": 0,
    "explanation": "La descomposición térmica del aceite mineral y aislamiento de celulosa genera gases característicos: hidrógeno (descargas parciales), acetileno (arcos de alta energía), etileno y metano (sobrecalentamientos térmicos).",
    "skill": "Diagnóstico Dieléctrico de Transformadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mantenimiento Eléctrico de Alta Tensión",
    "subtopic": "Análisis DGA de Gases Disueltos"
  },
  {
    "id": "ele-tec-4",
    "sectionId": 10,
    "number": 64,
    "text": "En la instalación de canalizaciones eléctricas industriales según el Código Eléctrico Nacional (NEC / NFPA 70), ¿cuál es el factor de llenado máximo permitido para un tubo conduit que contiene más de dos conductores?",
    "options": [
      "20%",
      "40%",
      "60%",
      "80%"
    ],
    "correctIndex": 1,
    "explanation": "Según el Capítulo 9 (Tabla 1) del NEC, para más de 2 conductores el área total ocupada por los cables no debe superar el 40% del área de la sección transversal interna del tubo para evitar sobrecalentamiento y facilitar el jalado.",
    "skill": "Normativa de Instalaciones Eléctricas NEC",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Dimensionamiento de Canalizaciones",
    "subtopic": "Factor de Llenado de Tubos Conduit"
  },
  {
    "id": "ele-tec-5",
    "sectionId": 10,
    "number": 65,
    "text": "En un esquema de control mediante autómata programable (PLC), ¿qué tipo de salida por hardware se recomienda para conmutar cargas inductivas de corriente continua de alta frecuencia (como electroválvulas PWM)?",
    "options": [
      "Salidas por relé electromecánico",
      "Salidas por transistor de estado sólido (Sink/Source MOSFET)",
      "Salidas por transformador pasivo",
      "Salidas por fusible térmico"
    ],
    "correctIndex": 1,
    "explanation": "Las salidas por transistor operan sin piezas móviles, soportan millones de ciclos de conmutación rápida sin desgaste mecánico ni rebote de contactos.",
    "skill": "Arquitectura de Entradas y Salidas de PLC",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Automatización Industrial",
    "subtopic": "Módulos de Salida de PLC"
  },
  {
    "id": "ele-tec-6",
    "sectionId": 10,
    "number": 66,
    "text": "En un sistema de distribución eléctrica en baja tensión, ¿qué esquema de conexión a tierra (ECT) conecta directamente el neutro a tierra en el transformador y las masas metálicas de la instalación a un conductor de protección PE separado conectado a una tierra independiente?",
    "options": [
      "Esquema TT",
      "Esquema TN-C",
      "Esquema IT con neutro aislado",
      "Esquema delta flotante"
    ],
    "correctIndex": 0,
    "explanation": "En el esquema TT (tierra en transformador, tierra en masas de usuario), cualquier defecto de aislamiento a masa provoca una corriente de fuga a tierra que es detectada y despejada obligatoriamente por interruptores diferenciales.",
    "skill": "Sistemas de Puesta a Tierra en Baja Tensión (ECT)",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Instalaciones Eléctricas de BT",
    "subtopic": "Esquema de Puesta a Tierra TT"
  },
  {
    "id": "ele-tec-7",
    "sectionId": 10,
    "number": 67,
    "text": "En la compensación automática del factor de potencia en redes industriales con presencia de armónicos, ¿qué dispositivo se conecta en serie con las baterías de condensadores para evitar la resonancia armónica paralela?",
    "options": [
      "Reactancias de desintonización o de rechazo (reactores de choque)",
      "Fusibles ultrarrápidos",
      "Diodos Zener de potencia",
      "Resistencias de frenado dinámico"
    ],
    "correctIndex": 0,
    "explanation": "Las inductancias de desintonización desplazan la frecuencia de resonancia del banco por debajo del armónico predominante más bajo (típicamente sintonizadas a 189 Hz o 134 Hz para redes de 50 Hz), protegiendo los condensadores contra sobrecorrientes armónicas.",
    "skill": "Calidad de la Energía y Filtrado de Armónicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Compensación de Energía Reactiva",
    "subtopic": "Bancos de Condensadores Desintonizados"
  },
  {
    "id": "ele-tec-8",
    "sectionId": 10,
    "number": 68,
    "text": "En un circuito de conmutación con transistor MOSFET de potencia, ¿qué diodo ultrarrápido conectado en antiparalelo con una carga inductiva (como la bobina de un relé) disipa la sobretensión inductiva al abrirse el circuito?",
    "options": [
      "Diodo de rueda libre (Flyback diode)",
      "Diodo túnel",
      "Diodo emisor LED",
      "Puente rectificador trifásico"
    ],
    "correctIndex": 0,
    "explanation": "Al interrumpir la corriente bruscamente en una bobina, la ley de Faraday v = -L (di/dt) induce un pico destructivo de polaridad inversa; el diodo flyback ofrece un lazo de recirculación seguro para extinguir la energía magnética.",
    "skill": "Protección de Circuitos de Conmutación Inductiva",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Diseño Electrónico de Potencia",
    "subtopic": "Diodo Flyback de Rueda Libre"
  },
  {
    "id": "ele-tec-9",
    "sectionId": 10,
    "number": 69,
    "text": "En instrumentación de lazos de control analógico industrial (estándar ISA), ¿por qué se utiliza preferentemente un rango de corriente de 4 a 20 mA en lugar de una señal de voltaje de 0 a 10 V para transmitir señales de sensores a larga distancia?",
    "options": [
      "El lazo de corriente es inmune a las caídas de tensión ohmicas en la longitud del cableado y el umbral de 4 mA permite detectar rotura de cable (\"cero vivo\")",
      "El voltaje es peligroso para los cables apantallados",
      "Los transmisores no pueden emitir voltajes",
      "El estándar de corriente no requiere fuente de alimentación"
    ],
    "correctIndex": 0,
    "explanation": "La corriente es idéntica en todo el lazo serie sin importar la resistencia de línea. Además, si el cable se rompe físicamente la corriente cae a 0 mA, distinguiéndose de una lectura de variable de proceso en cero (4 mA).",
    "skill": "Instrumentación Industrial y Lazos de Corriente",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Control de Procesos",
    "subtopic": "Lazos de Control 4-20 mA y Cero Vivo"
  },
  {
    "id": "ele-tec-10",
    "sectionId": 10,
    "number": 70,
    "text": "En soldadura electrónica de montaje superficial (SMD) en tarjetas de circuito impreso (PCB), ¿qué perfil térmico de cuatro etapas en un horno de reflujo por convección forzada se sigue rigurosamente?",
    "options": [
      "Precalentamiento, meseta o soak, reflujo pico (soldadura) y enfriamiento controlado",
      "Choque térmico inmediato a 350 °C sin calentamiento previo",
      "Enfriamiento criogénico antes de aplicar estaño",
      "Calentamiento exclusivamente por llama directa"
    ],
    "correctIndex": 0,
    "explanation": "El precalentamiento evapora solventes; la meseta activa el fundente y homogeneiza la temperatura sin choques térmicos; el reflujo supera la temperatura liquidus del estaño (~217 °C para aleaciones SAC305) y el enfriamiento forma uniones intermetálicas finas.",
    "skill": "Fabricación y Ensamblaje Electrónico SMD",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Tecnología de Montaje Superficial",
    "subtopic": "Perfil de Temperatura en Horno de Reflujo"
  },
  {
    "id": "ele-tec-11",
    "sectionId": 10,
    "number": 71,
    "text": "En el ensayo de rigidez dieléctrica de guantes y herramientas aisladas para trabajos en tensión (TET), ¿qué ensayo de laboratorio según norma ASTM D120 somete el equipo a una alta tensión durante un tiempo determinado midiendo la corriente de fuga?",
    "options": [
      "Ensayo Hi-Pot (High Potential test)",
      "Ensayo de continuidad de bajo voltaje",
      "Ensayo de impedancia de bucle",
      "Ensayo Charpy"
    ],
    "correctIndex": 0,
    "explanation": "El ensayo Hi-Pot aplica tensiones de prueba de 5 kV a 40 kV AC verificando que la corriente de fuga no supere los miliamperios máximos permitidos para garantizar la vida del liniero.",
    "skill": "Seguridad en Trabajos en Tensión (TET)",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Equipos de Protección Individual Eléctricos",
    "subtopic": "Ensayos Hi-Pot de Rigidez Dieléctrica"
  },
  {
    "id": "ele-tec-12",
    "sectionId": 10,
    "number": 72,
    "text": "En protecciones eléctricas de subestaciones, ¿qué función cumple el relé diferencial porcentual (ANSI 87) en la protección de transformadores de potencia y generadores?",
    "options": [
      "Compara vectorialmente la corriente que entra y sale de la zona protegida delimitada por transformadores de corriente (TCs), operando instantáneamente ante fallas internas",
      "Mide la temperatura del devanado exclusivamente",
      "Detecta sobretensiones atmosféricas en la línea",
      "Regula los cambiadores de tomas bajo carga"
    ],
    "correctIndex": 0,
    "explanation": "Bajo la primera ley de Kirchhoff, la corriente neta en una zona sin fallas internas es cero (I_in = I_out). Si existe una falla entre espiras o a tierra, la corriente diferencial (I_diff = |I₁ - I₂|) supera la pendiente porcentual y dispara el interruptor de potencia.",
    "skill": "Protecciones de Subestaciones Eléctricas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Sistemas de Potencia y Relés de Protección",
    "subtopic": "Protección Diferencial ANSI 87"
  },
  {
    "id": "ele-tec-13",
    "sectionId": 10,
    "number": 73,
    "text": "En redes de comunicación industrial de campo, ¿qué protocolo serie diferencial multipunto semidúplex (Half-Duplex) de dos hilos (A y B) permite conectar hasta 32 dispositivos a distancias de hasta 1200 metros bajo el estándar RS-485?",
    "options": [
      "Modbus RTU sobre RS-485",
      "Bluetooth Low Energy",
      "I2C síncrono de placa",
      "USB 2.0 estándar"
    ],
    "correctIndex": 0,
    "explanation": "RS-485 utiliza señalización diferencial equilibrada (V_A - V_B) con alta inmunidad al ruido electromagnético de modo común de motores y variadores en plantas fabriles.",
    "skill": "Redes de Comunicación Industrial de Campo",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Buses de Campo y Telemetría",
    "subtopic": "Estándar RS-485 y Protocolo Modbus RTU"
  },
  {
    "id": "ele-tec-14",
    "sectionId": 10,
    "number": 74,
    "text": "En convertidores electrónicos de potencia para tracción de vehículos eléctricos o inversores solares, ¿qué tecnología de semiconductores de banda ancha (Wide Bandgap - WBG) permite mayores frecuencias de conmutación y menores pérdidas que el silicio convencional?",
    "options": [
      "Carburo de Silicio (SiC) y Nitruro de Galio (GaN)",
      "Germanio policristalino",
      "Plomo dopado",
      "Selenio amorfo"
    ],
    "correctIndex": 0,
    "explanation": "Los dispositivos SiC y GaN poseen campos de ruptura dieléctrica diez veces mayores que el silicio, permitiendo voltajes de operación superiores a 1200 V con mínimas pérdidas de conmutación y temperaturas de unión de hasta 200 °C.",
    "skill": "Semiconductores de Potencia Avanzados (WBG)",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electrónica de Potencia Moderna",
    "subtopic": "Dispositivos de Carburo de Silicio (SiC)"
  },
  {
    "id": "ele-tec-15",
    "sectionId": 10,
    "number": 75,
    "text": "En mantenimiento electromecánico de generadores sincrónicos y motores de corriente continua, ¿qué componente de grafito electrografitado transmite la corriente de excitación rozando continuamente sobre los anillos rozantes o delgas del colector?",
    "options": [
      "Escobillas de carbón (carbones)",
      "Bobina amortiguadora de amortiguamiento",
      "Cojinete de empuje axial",
      "Entrehierro laminar"
    ],
    "correctIndex": 0,
    "explanation": "Las escobillas de carbón proporcionan contacto eléctrico deslizante con bajo coeficiente de fricción mecánica y adecuada resistencia de contacto para facilitar la conmutación.",
    "skill": "Máquinas Eléctricas Rotativas con Colector",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mantenimiento de Motores y Generadores",
    "subtopic": "Escobillas de Carbón y Anillos Rozantes"
  },
  {
    "id": "ele-tec-16",
    "sectionId": 10,
    "number": 76,
    "text": "En una instalación fotovoltaica conectada a red (On-Grid), ¿qué función de seguridad técnica obligatoria desconecta automáticamente el inversor si se corta el suministro eléctrico de la red de distribución pública?",
    "options": [
      "Protección anti-isla (Anti-Islanding)",
      "Seguimiento del punto de máxima potencia MPPT",
      "Rectificación síncrona",
      "Arranque en negro (Black Start)"
    ],
    "correctIndex": 0,
    "explanation": "La protección anti-isla (según norma IEEE 1547 / UL 1741) evita que el generador fotovoltaico continúe energizando un tramo de la red eléctrica local apagada, protegiendo a los linieros de electrocuciones accidentales.",
    "skill": "Energía Solar y Conexión a Red Eléctrica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Generación Distribuida",
    "subtopic": "Protección Anti-Isla en Inversores Solares"
  },
  {
    "id": "ele-tec-17",
    "sectionId": 10,
    "number": 77,
    "text": "En análisis de armónicos en redes industriales con analizadores de redes eléctricas clase A, ¿cómo se define la Distorsión Armónica Total de Tensión (THD_V)?",
    "options": [
      "La raíz cuadrada de la suma de los cuadrados de todas las tensiones armónicas dividida por la tensión de la componente fundamental (THD_V = √(∑ V_n²) / V₁ × 100%)",
      "La potencia aparente total entre la frecuencia fundamental",
      "La corriente de cortocircuito pico",
      "El factor de cresta cuadrático"
    ],
    "correctIndex": 0,
    "explanation": "El THD (Total Harmonic Distortion) según IEEE 519 cuantifica la deformación de la onda senoidal pura; en baja tensión se exige típicamente un THD_V inferior al 5% para evitar sobrecalentamiento de motores y transformadores.",
    "skill": "Calidad del Suministro Eléctrico y Armónicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Calidad de Energía",
    "subtopic": "Tasa de Distorsión Armónica Total (THD)"
  },
  {
    "id": "ele-tec-18",
    "sectionId": 10,
    "number": 78,
    "text": "En motores paso a paso híbridos utilizados en robótica y máquinas CNC, ¿qué técnica de control electrónico divide los pasos mecánicos completos energizando simultáneamente dos fases con corrientes sinusoidales proporcionales?",
    "options": [
      "Microstepping (micropasos)",
      "Arranque en estrella",
      "Frenado regenerativo",
      "Modulación en frecuencia pura"
    ],
    "correctIndex": 0,
    "explanation": "El microstepping divide cada paso completo de 1.8° en 1/8, 1/16 o 1/64 de micropaso mediante control PWM de corriente en puente H, eliminando resonancias mecánicas y aumentando la resolución posicional.",
    "skill": "Control de Motores Paso a Paso y Servomotores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Robótica y Mecatrónica",
    "subtopic": "Control por Micropasos (Microstepping)"
  },
  {
    "id": "ele-tec-19",
    "sectionId": 10,
    "number": 79,
    "text": "En el ensayo de rigidez dieléctrica de aceites minerales aislantes según norma ASTM D877 / IEC 60156 con un chispómetro, ¿qué tensión de ruptura promedio mínima a 2.5 mm de separación entre electrodos se exige para aceite nuevo?",
    "options": [
      "5 kV",
      "Mayor a 30 kV (típicamente > 40-50 kV)",
      "1 kV",
      "100 V DC"
    ],
    "correctIndex": 1,
    "explanation": "El chispómetro aplica una rampa de tensión ascendente de 2 kV/s hasta que se produce la chispa disruptiva; valores bajos revelan presencia de agua emulsionada o partículas carbonosas en suspensión.",
    "skill": "Mantenimiento Preventivo de Aceites Aislantes",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Ensayos Dieléctricos de Alta Tensión",
    "subtopic": "Chispómetro y Tensión de Ruptura"
  },
  {
    "id": "ele-tec-20",
    "sectionId": 10,
    "number": 80,
    "text": "En diseño de circuitos impresos (PCB) de alta velocidad, ¿qué técnica de ruteo de pistas de pares diferenciales (como en USB, HDMI o Ethernet) asegura que ambos conductores tengan exactamente la misma longitud física para evitar desfases temporales (skew)?",
    "options": [
      "Ruteo con pistas serpentinas de ajuste de longitud (lenght matching meanders)",
      "Aislamiento galvánico con optoacopladores lentos",
      "Eliminación del plano de masa continuo",
      "Conexión sin condensadores de desacoplo"
    ],
    "correctIndex": 0,
    "explanation": "Las curvas serpentinas compensan microdiferencias de longitud geométrica asegurando que las señales diferenciales lleguen al receptor simultáneamente sin distorsión temporal ni emisión de ruido de modo común.",
    "skill": "Diseño de PCBs de Alta Velocidad (High-Speed PCB Design)",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Integridad de Señal en PCBs",
    "subtopic": "Pares Diferenciales y Ajuste de Longitud"
  },
  {
    "id": "ele-tec-21",
    "sectionId": 10,
    "number": 21,
    "text": "¿Cuál es el porcentaje máximo de caída de tensión permitido comúnmente por las normas técnicas (como el NEC y normativas INEN) en los circuitos derivados desde el tablero de distribución hasta la salida más lejana?",
    "options": [
      "10%",
      "7%",
      "15%",
      "3%"
    ],
    "correctIndex": 3,
    "explanation": "El Código Eléctrico prescribe que la caída de tensión en cualquier circuito derivado no debe exceder el 3%, y que la caída acumulada total desde la acometida hasta el último punto de utilización no sobrepase el 5% para garantizar la eficiencia y correcto funcionamiento de los equipos.",
    "skill": "Dimensionamiento de Conductores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Instalaciones de Baja Tensión",
    "subtopic": "Límites de Caída de Tensión"
  },
  {
    "id": "ele-tec-22",
    "sectionId": 10,
    "number": 22,
    "text": "¿Por qué es sumamente peligroso abrir o dejar en circuito abierto los bornes del devanado secundario de un Transformador de Corriente (TC) mientras su primario está energizado y con carga?",
    "options": [
      "Porque el primario absorbe corriente reactiva inversa congelando el cable",
      "Porque el transformador invierte la polaridad de toda la subestación",
      "Porque al anularse la fuerza desmagnetizante secundaria, todo el flujo primario satura el núcleo, induciendo tensiones secundarias de miles de voltios que causan arco mortal y destrucción del aislamiento",
      "Porque se produce un cortocircuito que quema inmediatamente la línea primaria"
    ],
    "correctIndex": 2,
    "explanation": "En un TC, la corriente secundaria contrarresta la fuerza magnetomotriz primaria. Si se abre el secundario, todo el flujo primario actúa como magnetizante, induciendo picos de voltaje mortales (de varios kilovoltios) en los bornes abiertos.",
    "skill": "Transformadores de Medida",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Seguridad en Subestaciones",
    "subtopic": "Apertura del Secundario de un TC"
  },
  {
    "id": "ele-tec-23",
    "sectionId": 10,
    "number": 23,
    "text": "¿Qué procedimiento preventivo obligatorio debe ejecutarse en el secundario de un Transformador de Corriente (TC) antes de desconectar o sustituir un amperímetro conectado a él?",
    "options": [
      "Rociar alcohol isopropílico en los terminales",
      "Cortocircuitar previamente los bornes secundarios mediante un puente o bloque de pruebas especial",
      "Desconectar el conductor de puesta a tierra",
      "Aumentar la resistencia del amperímetro a 1 MΩ"
    ],
    "correctIndex": 1,
    "explanation": "El secundario de un TC de medición debe estar permanentemente cerrado en carga o cortocircuitado firmemente antes de retirar cualquier instrumento de su bucle de corriente.",
    "skill": "Mantenimiento de Medidores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Subestaciones y Medición",
    "subtopic": "Cortocircuitado de Bloque de TC"
  },
  {
    "id": "ele-tec-24",
    "sectionId": 10,
    "number": 24,
    "text": "En los protocolos internacionales de seguridad eléctrica, ¿cuáles son 'Las 5 Reglas de Oro' para trabajos sin tensión en instalaciones eléctricas?",
    "options": [
      "1) Desconectar con corte visible; 2) Enclavar y bloquear (LOTO); 3) Verificar ausencia de tensión; 4) Poner a tierra y en cortocircuito; 5) Señalizar y delimitar la zona",
      "1) Apagar luces; 2) Ponerse guantes; 3) Trabajar rápido; 4) Avisar al guardia; 5) Encender breaker",
      "1) Subir la tensión; 2) Limpiar bornes; 3) Medir corriente; 4) Aislar el neutro; 5) Abrir ventanas",
      "1) Desconectar la carga; 2) Cerrar fusibles; 3) Medir frecuencia; 4) Cortar cables; 5) Conectar tierra"
    ],
    "correctIndex": 0,
    "explanation": "Las 5 reglas de oro son la metodología de seguridad no negociable para intervenir líneas o cuadros eléctricos con garantía total de desenergización e inviolabilidad del aislamiento.",
    "skill": "Seguridad y Prevención de Riesgos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Normas de Seguridad Ocupacional",
    "subtopic": "Las 5 Reglas de Oro"
  },
  {
    "id": "ele-tec-25",
    "sectionId": 10,
    "number": 25,
    "text": "¿Qué propósito técnico cumple el sistema LOTO (Lockout / Tagout o Bloqueo y Etiquetado) en mantenimiento eléctrico e industrial?",
    "options": [
      "Acelerar el proceso de arranque de los motores tras la parada",
      "Medir automáticamente la corriente de cortocircuito",
      "Registrar el consumo de energía en el servidor central",
      "Garantizar que los interruptores de desconexión permanezcan bloqueados físicamente con candados y tarjetas personales para impedir su energización accidental"
    ],
    "correctIndex": 3,
    "explanation": "LOTO coloca candados de seguridad cuyas llaves custodia cada técnico involucrado y tarjetas de advertencia indelebles, evitando que terceras personas reconecten los interruptores mientras se interviene la máquina.",
    "skill": "Seguridad Industrial",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Procedimientos de Bloqueo",
    "subtopic": "Sistema LOTO"
  },
  {
    "id": "ele-tec-26",
    "sectionId": 10,
    "number": 26,
    "text": "¿Cuál es el valor máximo de resistencia de puesta a tierra recomendado comúnmente para una instalación eléctrica residencial o de edificio por el código eléctrico NEC (sección 250)?",
    "options": [
      "1,000 Ω",
      "0.001 Ω",
      "25 Ω (si tiene una sola varilla; si es superior se exige un segundo electrodo en paralelo)",
      "100 Ω"
    ],
    "correctIndex": 2,
    "explanation": "El NEC 250.56 fija 25 ohmios como límite para un electrodo de varilla única. En instalaciones de cómputo, subestaciones y quirófanos se exigen valores mucho más estrictos (< 5 Ω o < 1 Ω).",
    "skill": "Sistemas de Puesta a Tierra",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Resistencia de Tierra",
    "subtopic": "Límites Normativos de Puesta a Tierra"
  },
  {
    "id": "ele-tec-27",
    "sectionId": 10,
    "number": 27,
    "text": "¿Qué método de cuatro picas alineadas a distancias iguales 'a' se utiliza universalmente para medir la resistividad aparente del terreno (ρ) antes de diseñar una malla de tierra?",
    "options": [
      "Método del puente de Thomson",
      "Método de Wenner",
      "Método de Fall-of-Potential de 3 picas",
      "Método de Schlumberger asimétrico"
    ],
    "correctIndex": 1,
    "explanation": "El método de Wenner clava 4 picas equidistantes en línea recta: inyecta corriente entre las dos exteriores y mide el potencial entre las dos interiores, calculando ρ = 2π·a·R.",
    "skill": "Medición de Suelos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Geotecnia Eléctrica",
    "subtopic": "Método de Wenner de 4 Picas"
  },
  {
    "id": "ele-tec-28",
    "sectionId": 10,
    "number": 28,
    "text": "¿Qué método de medición se emplea para verificar la resistencia de un electrodo o malla de puesta a tierra ya instalado utilizando un telurómetro (terrómetro)?",
    "options": [
      "Método de caída de potencial (Fall of Potential o método del 62%) con dos picas auxiliares",
      "Método de Kelvin de dos hilos",
      "Método de continuidad simple con óhmetro común",
      "Método de descarga capacitiva de alta tensión"
    ],
    "correctIndex": 0,
    "explanation": "El método del 62% clava una pica de corriente lejana (ej. a 30-50 metros) y ubica la pica de potencial al 62% de dicha distancia, donde la curva de gradiente de potencial presenta su meseta plana libre de solapamiento.",
    "skill": "Pruebas de Mallas de Tierra",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Telurómetros",
    "subtopic": "Método de Caída de Potencial del 62%"
  },
  {
    "id": "ele-tec-29",
    "sectionId": 10,
    "number": 29,
    "text": "En un arranque estrella-triángulo (Y-Δ) de un motor trifásico, ¿a qué fracción se reduce la corriente de arranque de línea en comparación con un arranque directo a plena tensión?",
    "options": [
      "A la mitad (1/2 o 50%)",
      "A 1 / √3 (57.7%)",
      "A una novena parte (1/9)",
      "A un tercio (1/3 o 33.3% de la corriente de arranque directo)"
    ],
    "correctIndex": 3,
    "explanation": "En conexión estrella la tensión por fase es V_L/√3 y la impedancia es Z, por lo que la corriente de línea es IL_Y = (VL/√3)/Z. En delta IL_Δ = √3(VL/Z). Por tanto: IL_Y / IL_Δ = 1/3.",
    "skill": "Arranque de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Arranque Estrella-Triángulo",
    "subtopic": "Reducción de Corriente de Arranque"
  },
  {
    "id": "ele-tec-30",
    "sectionId": 10,
    "number": 30,
    "text": "¿Qué ocurre con el par motriz de arranque (T_arr) durante la fase en estrella en la transición estrella-triángulo?",
    "options": [
      "Se duplica debido a la menor corriente",
      "Se anula por completo",
      "Se reduce también a un tercio (T_Y = 1/3 T_Δ) del par de arranque directo",
      "Permanece inalterado al 100%"
    ],
    "correctIndex": 2,
    "explanation": "Dado que el par es proporcional al cuadrado de la tensión aplicada a los devanados (T ∝ V²), y en estrella la tensión por fase se reduce a V/√3, el par se reduce a (1/√3)² = 1/3 del par directo.",
    "skill": "Arranque de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Arranque Estrella-Triángulo",
    "subtopic": "Reducción de Par Motor"
  },
  {
    "id": "ele-tec-31",
    "sectionId": 10,
    "number": 31,
    "text": "¿Cuál es el requisito indispensable en la placa de características de un motor trifásico para poder arrancarlo con arrancador estrella-triángulo conectado a una red de 220 V trifásica?",
    "options": [
      "El motor debe tener rotor bobinado con anillos",
      "El motor debe tener indicación de tensiones nominales 220 V en Triángulo (Δ) y 380 V en Estrella (Y), con 6 bornes accesibles",
      "El motor debe ser exclusivamente de 2 bornes",
      "El motor debe estar bobinado para 120 V en estrella"
    ],
    "correctIndex": 1,
    "explanation": "Para trabajar en régimen permanente conectado en triángulo a la tensión de red (220 V), los devanados deben soportar 220 V por fase. En estrella soportarán transitoriamente 220 / √3 = 127 V durante el arranque.",
    "skill": "Conexión de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Placa de Motores",
    "subtopic": "Compatibilidad de Tensión en Estrella-Triángulo"
  },
  {
    "id": "ele-tec-32",
    "sectionId": 10,
    "number": 32,
    "text": "¿Qué categoría de empleo según la norma IEC 60947-4-1 se debe seleccionar para un contactor electromagnético destinado al arranque, parada y desconexión a régimen pleno de motores jaula de ardilla estándar?",
    "options": [
      "Categoría AC-3",
      "Categoría AC-1",
      "Categoría DC-1",
      "Categoría AC-15"
    ],
    "correctIndex": 0,
    "explanation": "La categoría AC-3 aplica para el arranque de motores de inducción con corte a motor lanzado; la categoría AC-1 es para cargas resistivas puras o levemente inductivas (estufas, calentadores).",
    "skill": "Selección de Aparamenta",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Contactores Industriales",
    "subtopic": "Categoría de Empleo AC-3"
  },
  {
    "id": "ele-tec-33",
    "sectionId": 10,
    "number": 33,
    "text": "¿Qué categoría de empleo IEC se exige a un contactor que debe soportar maniobras severas de inversión de marcha a contracorriente, frenado y marcha a impulsos (inching/jogging)?",
    "options": [
      "Categoría AC-3",
      "Categoría AC-1",
      "Categoría AC-2",
      "Categoría AC-4"
    ],
    "correctIndex": 3,
    "explanation": "La categoría AC-4 es la más exigente para corriente alterna: somete los contactos al corte de corrientes de bloqueo/arranque continuo (5 a 7 veces In), requiriendo aleaciones de plata especiales y cámaras apagachispas reforzadas.",
    "skill": "Selección de Aparamenta",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Contactores Industriales",
    "subtopic": "Categoría de Empleo AC-4"
  },
  {
    "id": "ele-tec-34",
    "sectionId": 10,
    "number": 34,
    "text": "¿Qué función cumple un guardamotor magnetotérmico integral en comparación con el conjunto separado de contactor + relé térmico?",
    "options": [
      "Convierte la corriente alterna en corriente continua",
      "Actúa como variador de frecuencia variable",
      "Combina en un solo aparato modular la protección contra sobrecargas (térmica bimetálica ajustable) y la protección contra cortocircuitos (magnética instantánea de alto poder de corte), además de corte manual",
      "Reemplaza el bobinado del motor por un circuito digital"
    ],
    "correctIndex": 2,
    "explanation": "El guardamotor (o disyuntor de motor) proporciona protección completa al cable y al motor (térmica + magnética + sensibilidad a falla de fase) con capacidad de desconexión de hasta 50-100 kA sin fusibles adicionales.",
    "skill": "Protección Integral de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Aparamenta de Protección",
    "subtopic": "Guardamotor Magnetotérmico"
  },
  {
    "id": "ele-tec-35",
    "sectionId": 10,
    "number": 35,
    "text": "¿Por qué los relés térmicos modernos incorporan un mecanismo diferencial de detección de fallo de fase (desequilibrio de fases)?",
    "options": [
      "Para invertir el sentido de giro automáticamente",
      "Porque si una fase se interrumpe, las dos fases restantes absorben un incremento masivo de corriente que calienta desigualmente los bimetales, provocando el disparo anticipado para proteger el devanado",
      "Para evitar que el motor acelere al doble de velocidad",
      "Para generar un neutro artificial flotante"
    ],
    "correctIndex": 1,
    "explanation": "El funcionamiento bifásico de un motor trifásico causa un calentamiento destructivo rápido. La barra diferencial del relé detecta el desplazamiento relativo de los bimetales cuando una fase conduce 0 A y las otras sobrecorriente, disparando antes de que se queme el aislamiento.",
    "skill": "Protección de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Relés Térmicos",
    "subtopic": "Detección Diferencial de Falta de Fase"
  },
  {
    "id": "ele-tec-36",
    "sectionId": 10,
    "number": 36,
    "text": "¿A qué valor se debe calibrar el dial del relé térmico cuando este se ubica aguas arriba del contactor de línea en un arranque directo?",
    "options": [
      "Exactamente a la corriente nominal de placa del motor (1.0 × In)",
      "Al triple de la corriente nominal (3.0 × In)",
      "Al 58% de la corriente nominal",
      "Al valor máximo que permita el dial"
    ],
    "correctIndex": 0,
    "explanation": "En arranque directo el relé térmico está en la línea de alimentación principal, por lo que debe ajustarse rigurosamente a la corriente nominal a plena carga del motor indicada por el fabricante (In).",
    "skill": "Calibración de Protecciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Relés Térmicos",
    "subtopic": "Ajuste en Arranque Directo"
  },
  {
    "id": "ele-tec-37",
    "sectionId": 10,
    "number": 37,
    "text": "Si en un arranque estrella-triángulo el relé térmico se instala en serie dentro de las fases del devanado (bajo el contactor principal KM1 o el de delta KM2), ¿a qué valor de corriente debe ajustarse su dial?",
    "options": [
      "A la corriente nominal total (1.0 × In)",
      "Al 33% de la corriente nominal",
      "Al 150% de la corriente nominal",
      "A la corriente de fase: I_ajuste = In / √3 ≈ 0.58 × In (el 58% de la corriente nominal)"
    ],
    "correctIndex": 3,
    "explanation": "Al ubicarse en la rama interna de la delta, la corriente que atraviesa el relé en régimen permanente es la corriente de fase del devanado, que es I_fase = I_linea / √3 = 0.577 × In.",
    "skill": "Calibración de Protecciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Arranque Estrella-Triángulo",
    "subtopic": "Ajuste del Térmico en Rama de Fase"
  },
  {
    "id": "ele-tec-38",
    "sectionId": 10,
    "number": 38,
    "text": "¿Cuáles son las tres etapas principales de conversión de energía en un variador de frecuencia (VFD) moderno con bus intermedio de continua?",
    "options": [
      "1) Termocupla; 2) Amplificador operacional; 3) Relé electromecánico",
      "1) Batería química; 2) Filtro LC; 3) Tacómetro óptico",
      "1) Rectificador (AC a DC); 2) Bus de continua con condensadores de filtrado (DC Link); 3) Inversor con transistores IGBT (DC a AC de frecuencia y tensión variables)",
      "1) Transformador elevador; 2) Generador mecánico; 3) Reóstato de frenado"
    ],
    "correctIndex": 2,
    "explanation": "El VFD rectifica la tensión alterna de entrada en el puente rectificador, acumula y filtra la energía continua en el DC Link, y finalmente el puente inversor de IGBTs genera una forma de onda PWM a frecuencia y tensión moduladas a voluntad.",
    "skill": "Variadores de Frecuencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Accionamientos Electrónicos",
    "subtopic": "Topología Interna del VFD"
  },
  {
    "id": "ele-tec-39",
    "sectionId": 10,
    "number": 39,
    "text": "¿Por qué en el control escalar de un variador de frecuencia se mantiene constante la relación Tensión / Frecuencia (V/f = constante) por debajo de la frecuencia nominal del motor?",
    "options": [
      "Porque la norma prohíbe cambiar el voltaje independientemente",
      "Para mantener constante el flujo magnético en el entrehierro y preservar el par máximo disponible del motor sin saturar el hierro",
      "Para evitar que el motor acelere en exceso",
      "Para reducir el costo de la energía eléctrica a la mitad"
    ],
    "correctIndex": 1,
    "explanation": "El flujo magnético estatórico es proporcional a V/f. Si la frecuencia disminuye sin reducir proporcionalmente la tensión, el flujo se dispara saturando el núcleo ferromagnético y quemando el motor por corrientes magnetizantes desmedidas.",
    "skill": "Control Escalar V/f",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Variadores de Frecuencia",
    "subtopic": "Ley V sobre f Constante"
  },
  {
    "id": "ele-tec-40",
    "sectionId": 10,
    "number": 40,
    "text": "¿Qué fenómeno adverso ocurre cuando un motor eléctrico opera a velocidades muy bajas (ej. 10 Hz o 15 Hz) mediante un variador de frecuencia sin contar con ventilación forzada independiente?",
    "options": [
      "El motor se sobrecalienta porque su ventilador solidario al eje gira demasiado lento y no produce suficiente caudal de aire de refrigeración",
      "El motor se congela por falta de corriente",
      "El aislamiento se desgasta por fuerza centrífuga",
      "El variador invierte el sentido de giro bruscamente"
    ],
    "correctIndex": 0,
    "explanation": "Los motores autoventilados (TEFC) dependen de las RPM del eje para enfriarse. A baja velocidad el caudal de aire decae cuadráticamente, por lo que a par constante el motor se quema térmicamente a menos que se instale un motoventilador auxiliar externo independiente.",
    "skill": "Mantenimiento de Motores con VFD",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Termografía y Refrigeración",
    "subtopic": "Sobrecalentamiento a Bajas RPM"
  },
  {
    "id": "ele-tec-41",
    "sectionId": 10,
    "number": 41,
    "text": "¿Qué problema causan los pulsos de tensión de conmutación de altísima pendiente (elevado dv/dt) generados por los IGBTs de un VFD en cables de alimentación muy largos entre el variador y el motor?",
    "options": [
      "Disminución de la resistencia óhmica del cable a cero",
      "Generación de corrientes continuas en el eje del motor",
      "Frenado mecánico de los rodamientos",
      "Reflexiones de onda de tensión que producen sobretensiones pico del doble de la tensión de bus en los bornes del motor, perforando el aislamiento de los devanados"
    ],
    "correctIndex": 3,
    "explanation": "Por desadaptación de impedancias entre el cable y el motor, los frentes de subida abruptos (dv/dt > 5,000 V/µs) sufren reflexiones que alcanzan picos de 1,200 V a 1,600 V en motores de 460 V, destruyendo el esmalte de la primera espira. Se mitiga con filtros dv/dt o filtros senoidales.",
    "skill": "Compatibilidad Electromagnética",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Fenómenos de Onda Reflejada",
    "subtopic": "Efecto dv/dt y Destrucción de Aislamiento"
  },
  {
    "id": "ele-tec-42",
    "sectionId": 10,
    "number": 42,
    "text": "¿Qué componente de protección disipa la energía cinética devuelta por un motor hacia el variador durante frenadas mecánicas rápidas de cargas de gran inercia?",
    "options": [
      "Un disyuntor termomagnético curva B",
      "Un capacitor cerámico de 100 pF",
      "Un chopper de frenado (transistor de descarga) con su resistencia de frenado dinámica externa (braking resistor)",
      "Un transformador trifásico reductor"
    ],
    "correctIndex": 2,
    "explanation": "Al frenar, el motor actúa como generador inyectando corriente al bus DC y elevando su tensión. Cuando supera el umbral de seguridad, el chopper activa la resistencia de frenado para disipar la energía en calor e impedir el disparo por sobretensión en bus (Overvoltage trip).",
    "skill": "Frenado Dinámico",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Variadores de Frecuencia",
    "subtopic": "Resistencia de Frenado y Chopper"
  },
  {
    "id": "ele-tec-43",
    "sectionId": 10,
    "number": 43,
    "text": "¿Qué instrumento termográfico de diagnóstico no invasivo permite detectar conexiones flojas, bornes sulfatados o desequilibrios de fase en un tablero eléctrico energizado?",
    "options": [
      "Sonómetro integrador ponderado A",
      "Cámara termográfica infrarroja",
      "Osciloscopio digital de fósforo",
      "Medidor de rigidez dieléctrica de aceite"
    ],
    "correctIndex": 1,
    "explanation": "La termografía infrarroja visualiza el mapa de calor superficial; una conexión floja presenta mayor resistencia de contacto localizada (R_contacto), manifestándose como un punto caliente intenso por efecto Joule (I²·R).",
    "skill": "Mantenimiento Predictivo",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Termografía Eléctrica",
    "subtopic": "Detección de Puntos Calientes"
  },
  {
    "id": "ele-tec-44",
    "sectionId": 10,
    "number": 44,
    "text": "¿Por qué en instalaciones modernas con cargas electrónicas no lineales (computadoras, VFDs, iluminación LED) es imprescindible medir corriente con una pinza amperimétrica True-RMS (valor eficaz verdadero)?",
    "options": [
      "Porque las pinzas convencionales que promedian la onda cometen errores de subestimación de hasta el 40% o 50% al medir ondas de corriente distorsionadas y picudas",
      "Porque las pinzas True-RMS funcionan sin necesidad de rodear el cable con la mordaza",
      "Porque las pinzas promedio solo miden corriente continua",
      "Porque el estándar True-RMS es obligatorio únicamente para cables de aluminio"
    ],
    "correctIndex": 0,
    "explanation": "Los instrumentos comunes calibrados para ondas senoidales puras (rectificando y multiplicando por 1.11) fallan groseramente ante ondas distorsionadas con alto contenido armónico. Solo un medidor True-RMS calcula el valor cuadrático medio real de la forma de onda arbitraria.",
    "skill": "Metrología Práctica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Instrumentación Portátil",
    "subtopic": "Medición True-RMS vs Promedio"
  },
  {
    "id": "ele-tec-45",
    "sectionId": 10,
    "number": 45,
    "text": "¿Qué tipo de interruptor diferencial (RCD) es de Tipo B según la norma IEC 62423 y por qué es obligatorio en estaciones de carga de vehículos eléctricos e inversores solares fotovoltaicos?",
    "options": [
      "Porque soporta mayores caídas de tensión en los bornes",
      "Porque tiene un botón de prueba mecánico que no requiere electricidad",
      "Porque es exclusivamente un interruptor termomagnético sin protección diferencial",
      "Porque es capaz de detectar y disparar ante fugas a tierra de corriente continua pura y corrientes de alta frecuencia, además de las senoidales y pulsantes ordinarias"
    ],
    "correctIndex": 3,
    "explanation": "Los diferenciales Tipo AC solo detectan fallas senoidales puras y los Tipo A solo pulsantes monofásicas. Los rectificadores trifásicos de cargadores EV y paneles solares pueden generar corrientes de fuga a tierra de CC lisa que ciegan o saturan a los diferenciales Tipo A y AC, requiriendo Tipo B.",
    "skill": "Protección Diferencial Especial",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Disyuntores Diferenciales",
    "subtopic": "Diferenciales Tipo B"
  },
  {
    "id": "ele-tec-46",
    "sectionId": 10,
    "number": 46,
    "text": "En la designación de cables según normas técnicas (por ejemplo, THHN / THWN-2), ¿qué significan las siglas 'THHN'?",
    "options": [
      "Thermal Hydrophobic Neutral Network",
      "Transformed Heat High Nominal",
      "Thermoplastic (termoplástico), High heat-resistant (hasta 90 °C), Highly heat-resistant, Nylon jacket (cubierta de nailon protectora)",
      "Tough Heavy High-voltage Natural"
    ],
    "correctIndex": 2,
    "explanation": "T = Termoplástico (PVC), HH = Alta resistencia térmica (High Heat, 90 °C en seco), N = Cubierta exterior de nailon que otorga resistencia mecánica al raspado y protección contra aceites y químicos.",
    "skill": "Tipos de Conductores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Aislamientos de Conductores",
    "subtopic": "Nomenclatura THHN/THWN"
  },
  {
    "id": "ele-tec-47",
    "sectionId": 10,
    "number": 47,
    "text": "¿Cuál es la temperatura máxima de operación admisible en servicio continuo para un conductor con aislamiento tipo XLPE (polietileno reticulado) o EPR (etileno-propileno)?",
    "options": [
      "150 °C en régimen permanente",
      "90 °C en régimen permanente (y hasta 250 °C en cortocircuito)",
      "60 °C",
      "45 °C"
    ],
    "correctIndex": 1,
    "explanation": "El aislamiento termoestable reticulado (XLPE) soporta 90 °C continuos, 130 °C en sobrecarga de emergencia y 250 °C en cortocircuitos transitorios breves, superando ampliamente al PVC estándar (70 °C o 75 °C).",
    "skill": "Aislamientos Termoestables",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Conductores de Potencia",
    "subtopic": "Aislamiento XLPE vs PVC"
  },
  {
    "id": "ele-tec-48",
    "sectionId": 10,
    "number": 48,
    "text": "¿Qué factor de corrección por agrupamiento (factor de derrateo) se debe aplicar a la capacidad de corriente de los cables cuando se instalan de 4 a 6 conductores portadores de corriente en una misma tubería conduit según el NEC?",
    "options": [
      "Factor de 0.80 (se reduce la capacidad admisible al 80%)",
      "Factor de 1.0 (sin reducción)",
      "Factor de 0.50",
      "Factor de 1.25 (aumenta la capacidad)"
    ],
    "correctIndex": 0,
    "explanation": "Al concentrar varios conductores que disipan calor por efecto Joule en un espacio cerrado sin ventilación, el calor mutuo eleva la temperatura ambiente, obligando a reducir la corriente admisible al 80% (o 70% si son de 7 a 9 conductores).",
    "skill": "Cálculo de Ampacidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Canalizaciones Conduit",
    "subtopic": "Factores de Corrección por Agrupamiento"
  },
  {
    "id": "ele-tec-49",
    "sectionId": 10,
    "number": 49,
    "text": "¿Cuál es el porcentaje máximo de ocupación transversal permitido para el llenado de tuberías conduit cuando se instalan más de dos conductores según el Capítulo 9 (Tabla 1) del NEC?",
    "options": [
      "80%",
      "100%",
      "20%",
      "40% del área interna del tubo"
    ],
    "correctIndex": 3,
    "explanation": "Para 1 conductor se permite hasta 53%, para 2 conductores 31%, y para 3 o más conductores el área total de cables no debe sobrepasar el 40% del área de la sección interior del conduit, permitiendo el jalado seguro y la disipación térmica.",
    "skill": "Diseño de Canalizaciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Tuberías Conduit",
    "subtopic": "Factor de Llenado del 40%"
  },
  {
    "id": "ele-tec-50",
    "sectionId": 10,
    "number": 50,
    "text": "¿Qué instrumento se utiliza para verificar la correcta secuencia de rotación de fases (R-S-T / L1-L2-L3) en una toma o tablero trifásico antes de energizar una máquina rotatoria?",
    "options": [
      "Pinza vatimétrica",
      "Luxómetro",
      "Fasímetro secuencímetro (o indicador de rotación de fases)",
      "Megóhmetro"
    ],
    "correctIndex": 2,
    "explanation": "El secuencímetro de fases utiliza tres terminales identificados con colores para indicar si la secuencia es directa o inversa, previniendo que motores giren al revés y dañen bombas o compresores mecánicos.",
    "skill": "Puesta en Servicio",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Secuencia de Fases",
    "subtopic": "Secuencímetro Rotativo"
  },
  {
    "id": "ele-tec-51",
    "sectionId": 10,
    "number": 51,
    "text": "En un motor trifásico con 9 terminales accesibles en la caja de bornes, ¿qué conexiones internas corresponden a un motor bobinado para dos tensiones en relación 1:2 (ej. 220 V / 440 V)?",
    "options": [
      "Conexión Scott-T",
      "Doble estrella (YY) para la tensión baja (220 V) y estrella simple (Y) serie para la tensión alta (440 V)",
      "Triángulo simple para ambas tensiones",
      "Estrella en 220 V y delta doble en 440 V"
    ],
    "correctIndex": 1,
    "explanation": "En motores de 9 bornes para 220/440 V, los bobinados de cada fase están divididos en dos grupos idénticos: se conectan en paralelo (doble estrella YY) para 220 V y en serie (estrella simple Y) para 440 V.",
    "skill": "Conexión de Motores de 9 Bornes",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Devanados de Motores",
    "subtopic": "Conexiones Paralelo y Serie en 9 Terminales"
  },
  {
    "id": "ele-tec-52",
    "sectionId": 10,
    "number": 52,
    "text": "¿Qué ventaja ofrece un motor trifásico de 12 terminales accesibles respecto a uno de 9 terminales?",
    "options": [
      "Permite realizar todas las combinaciones posibles: doble estrella (YY), estrella serie (Y), doble triángulo (ΔΔ) y triángulo serie (Δ), posibilitando arranques estrella-triángulo en ambas tensiones de servicio",
      "Elimina completamente la necesidad de puesta a tierra",
      "Funciona sin campo magnético estatórico",
      "Permite alimentar el motor con corriente continua directamente"
    ],
    "correctIndex": 0,
    "explanation": "Los 12 terminales ofrecen los principios y finales de los seis grupos de bobinas independientes, brindando total versatilidad para arranques suaves Y-Δ en redes de baja o media tensión de utilización.",
    "skill": "Motores Industriales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Cajas de Bornes",
    "subtopic": "Versatilidad de 12 Terminales"
  },
  {
    "id": "ele-tec-53",
    "sectionId": 10,
    "number": 53,
    "text": "¿Cuál es el valor estandarizado de corriente secundaria nominal a plena escala en la inmensa mayoría de los Transformadores de Corriente (TC) de protección y medida?",
    "options": [
      "50 A",
      "100 A",
      "0.1 A",
      "5 A (o 1 A en subestaciones con largas distancias de cableado)"
    ],
    "correctIndex": 3,
    "explanation": "El estándar universal IEC e IEEE para los TCs de instrumentación fija una corriente secundaria nominal de 5 A (ej. 200/5 A, 1000/5 A) o de 1 A cuando los relés están situados en salas de control remotas para reducir pérdidas I²R.",
    "skill": "Instrumentación de Subestaciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Transformadores de Medida",
    "subtopic": "Secundario de 5 A y 1 A"
  },
  {
    "id": "ele-tec-54",
    "sectionId": 10,
    "number": 54,
    "text": "¿Cuál es la tensión secundaria nominal estándar de los Transformadores de Potencial (TP o TV) utilizados para alimentar voltímetros y relés en redes de media y alta tensión?",
    "options": [
      "24 V",
      "480 V",
      "120 V (en América) o 110 V / 100 V (en normas europeas)",
      "12 V"
    ],
    "correctIndex": 2,
    "explanation": "Los transformadores de tensión reducen los kilovoltios de la red a niveles estandarizados y seguros de 120 V o 110 V entre fases (o 120/√3 ≈ 69.3 V fase-neutro) para alimentar los instrumentos de medición.",
    "skill": "Transformadores de Potencial",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Medición en Media Tensión",
    "subtopic": "Tensión Secundaria Estándar en TPs"
  },
  {
    "id": "ele-tec-55",
    "sectionId": 10,
    "number": 55,
    "text": "¿Qué clase de precisión de un Transformador de Corriente (TC) según la norma IEC 61869-2 indica que se trata de un transformador diseñado para protección (ej. clase 5P20)?",
    "options": [
      "Clase C100",
      "Clase 5P20 (error compuesto menor al 5% con corrientes de cortocircuito de hasta 20 veces la corriente nominal)",
      "Clase 0.2S",
      "Clase 0.5"
    ],
    "correctIndex": 1,
    "explanation": "La letra 'P' significa Protección. Un TC 5P20 no satura su núcleo a corrientes normales y mantiene un error menor al 5% hasta con 20 veces su corriente nominal, asegurando que los relés de sobrecorriente disparen ante fallas graves.",
    "skill": "Protecciones Eléctricas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Transformadores de Corriente",
    "subtopic": "Clase de Protección 5P20"
  },
  {
    "id": "ele-tec-56",
    "sectionId": 10,
    "number": 56,
    "text": "¿Qué clase de precisión de un Transformador de Corriente está destinada a facturación fiscal y contadores de energía de alta exactitud en fronteras comerciales?",
    "options": [
      "Clase 0.2S (o 0.5S)",
      "Clase 10P10",
      "Clase 5P10",
      "Clase 3"
    ],
    "correctIndex": 0,
    "explanation": "La designación 'S' (Special) garantiza una precisión extrema (error < 0.2%) incluso con cargas bajísimas (desde el 1% de la corriente nominal), siendo el estándar obligatorio para medición de energía facturada.",
    "skill": "Medición y Facturación",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Metrología Legal",
    "subtopic": "Clases de Medición 0.2S"
  },
  {
    "id": "ele-tec-57",
    "sectionId": 10,
    "number": 57,
    "text": "¿Cuál es el código ANSI/IEEE de función de protección para el relé de sobrecorriente temporizado de tiempo inverso más utilizado en la industria?",
    "options": [
      "Función 50 (Instantáneo)",
      "Función 27 (Baja tensión)",
      "Función 87 (Diferencial)",
      "Función 51 (Relé de sobrecorriente temporizado)"
    ],
    "correctIndex": 3,
    "explanation": "El código ANSI 51 representa la protección de sobrecorriente temporizada (curva inversa IEC o IEEE), mientras que el código ANSI 50 representa el disparo instantáneo sin retardo deliberado.",
    "skill": "Códigos ANSI de Protección",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Protecciones Industriales",
    "subtopic": "Funciones ANSI 50 y 51"
  },
  {
    "id": "ele-tec-58",
    "sectionId": 10,
    "number": 58,
    "text": "¿Qué función de protección designa el código ANSI 87 en el esquema de protección de grandes transformadores, generadores y barras de subestaciones?",
    "options": [
      "Relé térmico de réplica bimetálica",
      "Protección contra pérdida de excitación",
      "Protección Diferencial de porcentaje (compara vectorialmente corrientes entrantes y salientes)",
      "Protección de distancia direccional"
    ],
    "correctIndex": 2,
    "explanation": "El relé ANSI 87 es la protección unitaria por excelencia: suma vectorialmente las corrientes en todos los terminales de la zona delimitada por los TCs; si la suma difiere de cero, detecta una falla interna y dispara en ciclos de milisegundos.",
    "skill": "Protección Diferencial",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Códigos ANSI",
    "subtopic": "Función ANSI 87"
  },
  {
    "id": "ele-tec-59",
    "sectionId": 10,
    "number": 59,
    "text": "¿Qué función de protección representa el código ANSI 49?",
    "options": [
      "Relé de potencia inversa",
      "Relé de sobrecarga térmica de motor o transformador",
      "Relé de sobretensión instantánea",
      "Relé de mínima frecuencia"
    ],
    "correctIndex": 1,
    "explanation": "La función ANSI 49 calcula el calentamiento del equipo mediante sondas térmicas (RTD Pt100) o un modelo térmico matemático de imagen térmica en función de la corriente que circula en el tiempo.",
    "skill": "Códigos ANSI",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Protecciones de Máquinas",
    "subtopic": "Función ANSI 49 Sobrecarga Térmica"
  },
  {
    "id": "ele-tec-60",
    "sectionId": 10,
    "number": 60,
    "text": "¿Qué relé mecánico de protección de cuba se instala en el conducto entre la cuba principal y el depósito de expansión de un transformador de potencia en baño de aceite?",
    "options": [
      "Relé Buchholz",
      "Relé de sobrecorriente 50/51",
      "Termómetro de cuadrante capilar",
      "Válvula de alivio de presión súbita"
    ],
    "correctIndex": 0,
    "explanation": "El relé Buchholz detecta la acumulación lenta de gases generados por descomposición del aceite dieléctrico (dando alarma preventiva) y el oleaje violento de aceite provocado por un cortocircuito interno (disparando el deslastre inmediato del transformador).",
    "skill": "Transformadores de Potencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Protección de Transformadores en Aceite",
    "subtopic": "Relé Buchholz"
  },
  {
    "id": "ele-tec-61",
    "sectionId": 10,
    "number": 61,
    "text": "¿Qué ensayo físico-químico del aceite aislante mineral de un transformador mide el valor de tensión continua o alterna al cual el fluido pierde su capacidad aislante entre dos electrodos calibrados?",
    "options": [
      "Ensayo de acidez o índice de neutralización",
      "Ensayo de tensión interfacial",
      "Cromatografía de gases disueltos (DGA)",
      "Ensayo de rigidez dieléctrica (tensión de ruptura dieléctrica)"
    ],
    "correctIndex": 3,
    "explanation": "El ensayo de rigidez dieléctrica (norma ASTM D877 o IEC 60156) aplica una rampa de tensión entre dos electrodos sumergidos separados 2.5 mm hasta que salta la chispa, requiriéndose típicamente más de 30 kV en aceite nuevo.",
    "skill": "Diagnóstico de Aislamientos Líquidos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Aceites Dieléctricos",
    "subtopic": "Rigidez Dieléctrica del Aceite"
  },
  {
    "id": "ele-tec-62",
    "sectionId": 10,
    "number": 62,
    "text": "¿Qué técnica de diagnóstico avanzada permite detectar fallas incipientes (como sobrecalentamiento térmico del papel o arcos internos) analizando los gases disueltos en el aceite del transformador?",
    "options": [
      "Prueba de relación de transformación TTR",
      "Medición de resistencia óhmica de devanados",
      "Cromatografía de gases disueltos (DGA - Dissolved Gas Analysis)",
      "Ensayo de factor de potencia del devanado"
    ],
    "correctIndex": 2,
    "explanation": "El análisis DGA identifica concentraciones de gases combustibles característicos como hidrógeno (descargas parciales), acetileno (arcos de alta energía), etileno y metano (sobrecalentamientos térmicos del aceite), y monóxido de carbono (degradación del papel de celulosa).",
    "skill": "Mantenimiento Predictivo de Transformadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Análisis Químico Dieléctrico",
    "subtopic": "Cromatografía de Gases Disueltos (DGA)"
  },
  {
    "id": "ele-tec-63",
    "sectionId": 10,
    "number": 63,
    "text": "¿Qué instrumento portátil especializado se utiliza para verificar la relación de espiras y la polaridad angular de un transformador?",
    "options": [
      "Microohmímetro digital",
      "TTR (Transformer Turns Ratio meter o Medidor de Relación de Transformación)",
      "Megóhmetro de 5 kV",
      "Telurómetro de 4 picas"
    ],
    "correctIndex": 1,
    "explanation": "El TTR aplica una tensión baja conocida en el devanado primario y mide con alta exactitud la tensión inducida en el secundario, detectando espiras en cortocircuito interno o desviaciones en las tomas del conmutador (tap changer).",
    "skill": "Ensayos de Transformadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Instrumentación de Campo",
    "subtopic": "Equipo TTR"
  },
  {
    "id": "ele-tec-64",
    "sectionId": 10,
    "number": 64,
    "text": "¿Por qué en la medición de resistencia óhmica de los devanados de un transformador de potencia de gran inductancia con un microohmímetro se debe esperar varios minutos hasta que la lectura se estabilice?",
    "options": [
      "Porque la constante de tiempo L/R del núcleo es enorme y se debe esperar a que la corriente continua sature el núcleo y alcance el régimen permanente estacionario (di/dt = 0)",
      "Porque el aceite debe calentarse a 100 °C",
      "Porque los cables de cobre cambian de densidad",
      "Porque el instrumento realiza un escaneo óptico"
    ],
    "correctIndex": 0,
    "explanation": "Los devanados de grandes transformadores presentan inductancias de cientos de Henrios; hasta que el campo magnético no se carga por completo, la corriente no es constante y la fem inducida falsea la lectura óhmica.",
    "skill": "Metrología de Bobinados",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Resistencia de Bobinados",
    "subtopic": "Saturación del Núcleo en Medición DC"
  },
  {
    "id": "ele-tec-65",
    "sectionId": 10,
    "number": 65,
    "text": "¿Qué gas dieléctrico inerte de altísima rigidez y capacidad de extinción de arco se utiliza ampliamente en celdas blindadas compactas (GIS) e interruptores de potencia de alta tensión?",
    "options": [
      "Argón puro",
      "Dióxido de carbono (CO₂)",
      "Metano",
      "Hexafluoruro de azufre (SF₆)"
    ],
    "correctIndex": 3,
    "explanation": "El SF₆ posee una rigidez dieléctrica casi tres veces superior a la del aire y una velocidad de recombinación molecular excepcional para extinguir arcos eléctricos, permitiendo subestaciones ultracompactas (GIS).",
    "skill": "Subestaciones Encapsuladas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Aislamiento en Alta Tensión",
    "subtopic": "Gas SF6 en Subestaciones GIS"
  },
  {
    "id": "ele-tec-66",
    "sectionId": 10,
    "number": 66,
    "text": "¿Qué medio de extinción de arco domina en la fabricación de interruptores de potencia de media tensión modernos (entre 1 kV y 36 kV)?",
    "options": [
      "Aire comprimido a 100 bares",
      "Agua desmineralizada",
      "Botella de vacío (cámara de corte en vacío)",
      "Gran volumen de aceite"
    ],
    "correctIndex": 2,
    "explanation": "Los interruptores en vacío no tienen gases que ionizar ni desgastar; el arco metálico transitorio se extingue en el primer cruce por cero de la corriente, ofreciendo vidas útiles de decenas de miles de maniobras sin mantenimiento.",
    "skill": "Interruptores de Media Tensión",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Aparamenta de MT",
    "subtopic": "Cámaras de Corte en Vacío"
  },
  {
    "id": "ele-tec-67",
    "sectionId": 10,
    "number": 67,
    "text": "En un controlador lógico programable (PLC) industrial, ¿cuál es el orden secuencial estricto de las fases de ejecución de su ciclo de barrido (Scan Time)?",
    "options": [
      "1) Compilación en línea; 2) Envío de correos; 3) Medición de tensión",
      "1) Lectura de entradas físicas a la tabla de imagen; 2) Ejecución lógica secuencial del programa de usuario; 3) Actualización de salidas físicas desde la tabla de imagen; 4) Comunicaciones y autodiagnóstico",
      "1) Escritura de salidas; 2) Espera de 1 segundo; 3) Lectura de sensores; 4) Apagado",
      "1) Ejecución del programa; 2) Reinicio del microprocesador; 3) Lectura de entradas"
    ],
    "correctIndex": 1,
    "explanation": "El PLC opera mediante ciclos de escaneo cíclicos deterministas (típicamente entre 1 ms y 20 ms), leyendo primero el estado de todas las entradas, ejecutando el algoritmo en memoria y transfiriendo finalmente el resultado a las salidas físicas.",
    "skill": "Automatización con PLCs",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Controladores Programables",
    "subtopic": "Ciclo de Scan de un PLC"
  },
  {
    "id": "ele-tec-68",
    "sectionId": 10,
    "number": 68,
    "text": "¿Cuál es el estándar de señal de corriente analógica más extendido en la instrumentación industrial y bucles de control de procesos (sensores 4-20 mA)?",
    "options": [
      "Bucle de corriente de 4 a 20 mA DC (donde 4 mA representa el 0% de la variable física y 20 mA el 100%)",
      "Bucle de 0 a 10 A de corriente alterna",
      "Señal de 0 a 100 mV en continua",
      "Bucle de frecuencia variable de 1 a 10 kHz"
    ],
    "correctIndex": 0,
    "explanation": "El estándar 4-20 mA es inmune a las caídas de tensión por longitud de cable y ruido electromagnético. Además, el 'cero vivo' en 4 mA permite distinguir inmediatamente si el sensor está midiendo cero o si el cable está roto (lectura de 0 mA = falla de lazo).",
    "skill": "Instrumentación Industrial",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Bucles Analógicos de Control",
    "subtopic": "Señal Estándar 4-20 mA y Cero Vivo"
  },
  {
    "id": "ele-tec-69",
    "sectionId": 10,
    "number": 69,
    "text": "Si se conecta un lazo de 4-20 mA a una entrada analógica de un PLC que solo lee tensión de 1 a 5 V DC, ¿qué componente pasivo de precisión se debe conectar en paralelo con los bornes de entrada?",
    "options": [
      "Una resistencia de 1 kΩ",
      "Un diodo Zener de 5 V",
      "Un condensador de 100 µF",
      "Una resistencia de precisión de 250 Ω (tolerancia 0.1%)"
    ],
    "correctIndex": 3,
    "explanation": "Por ley de Ohm V = I·R: para 4 mA (0.004 A) × 250 Ω = 1.0 V; para 20 mA (0.020 A) × 250 Ω = 5.0 V, convirtiendo el bucle de corriente exactamente en una señal estándar de 1 a 5 V.",
    "skill": "Acondicionamiento de Señales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Entradas Analógicas de PLC",
    "subtopic": "Conversión Corriente a Tensión con 250 Ohmios"
  },
  {
    "id": "ele-tec-70",
    "sectionId": 10,
    "number": 70,
    "text": "¿Qué termorresistencia de platino (RTD) presenta una resistencia exacta de 100.0 Ω a una temperatura de 0 °C según la norma IEC 60751?",
    "options": [
      "Termopar tipo K (Cromel-Alumel)",
      "Termistor NTC 10k",
      "Pt100",
      "Pt1000"
    ],
    "correctIndex": 2,
    "explanation": "La sonda Pt100 (Platinum 100 Ω a 0 °C) tiene un coeficiente de temperatura casi lineal α ≈ 0.00385 Ω/Ω/°C, siendo el sensor de temperatura industrial estándar por su gran exactitud y estabilidad.",
    "skill": "Sensores de Temperatura Industriales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Termometría Industrial",
    "subtopic": "Sonda RTD Pt100"
  },
  {
    "id": "ele-tec-71",
    "sectionId": 10,
    "number": 71,
    "text": "¿Por qué en mediciones industriales de precisión con sondas Pt100 situadas a distancias superiores a 10 metros se utiliza una conexión de 3 hilos o 4 hilos en vez de 2 hilos?",
    "options": [
      "Porque los sensores Pt100 requieren corriente trifásica",
      "Para compensar y cancelar el error introducido por la resistencia óhmica de los cables de conexión en la lectura de temperatura",
      "Para suministrar energía mecánica al sensor",
      "Para alimentar un microprocesador interno dentro de la vaina"
    ],
    "correctIndex": 1,
    "explanation": "En 2 hilos, la resistencia de los cables se suma a la del sensor (falseando la lectura en varios grados). En 3 hilos (puente de Wheatstone equilibrado) o 4 hilos (inyección de corriente independiente de la medición de tensión), la resistencia de línea se elimina matemáticamente.",
    "skill": "Termometría de Precisión",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Sensores de Temperatura",
    "subtopic": "Compensación de Línea en Pt100 a 3 y 4 Hilos"
  },
  {
    "id": "ele-tec-72",
    "sectionId": 10,
    "number": 72,
    "text": "¿Qué efecto termoeléctrico es la base física de funcionamiento de los termopares (termocuplas), donde la diferencia de temperatura entre dos uniones de metales disímiles genera una fuerza electromotriz milivoltálica?",
    "options": [
      "Efecto Seebeck",
      "Efecto Peltier",
      "Efecto Thomson",
      "Efecto Voltaico"
    ],
    "correctIndex": 0,
    "explanation": "Thomas Seebeck descubrió que al someter dos metales diferentes unidos por sus extremos a un gradiente de temperatura, se establece una tensión en circuito abierto proporcional a la diferencia de temperatura (ΔT).",
    "skill": "Termometría Termoeléctrica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Termopares",
    "subtopic": "Efecto Seebeck"
  },
  {
    "id": "ele-tec-73",
    "sectionId": 10,
    "number": 73,
    "text": "¿Qué tipo de cable se debe utilizar obligatoriamente para prolongar la señal de un termopar desde la cabeza del sensor hasta el transmisor o tarjeta de PLC?",
    "options": [
      "Cualquier cable de cobre flexible común calibre 14 AWG",
      "Cable coaxial blindado de 50 Ω",
      "Cable de red UTP categoría 6",
      "Cable de extensión o compensación del mismo tipo de aleación que el termopar (respetando la polaridad de los metales)"
    ],
    "correctIndex": 3,
    "explanation": "Si se empalma cable de cobre común en la cabeza del termopar se generan uniones parasitarias termoeléctricas adicionales en los bornes que falsean la medición. El cable compensado prolonga la unión fría hasta el instrumento.",
    "skill": "Instalación de Instrumentación",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Cables de Compensación",
    "subtopic": "Prolongación Correcta de Termopares"
  },
  {
    "id": "ele-tec-74",
    "sectionId": 10,
    "number": 74,
    "text": "¿Qué tipo de sensor de proximidad industrial detecta exclusivamente objetos metálicos mediante la inducción de corrientes de Foucault en la superficie del blanco?",
    "options": [
      "Sensor fotoeléctrico réflex",
      "Sensor ultrasónico",
      "Sensor de proximidad inductivo",
      "Sensor capacitivo"
    ],
    "correctIndex": 2,
    "explanation": "El sensor inductivo genera un campo electromagnético de alta frecuencia en su cara frontal; al acercarse un metal, se inducen corrientes parásitas que amortiguan la oscilación del circuito interno, activando el comparador de salida.",
    "skill": "Sensores Industriales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Detección de Proximidad",
    "subtopic": "Sensor Inductivo"
  },
  {
    "id": "ele-tec-75",
    "sectionId": 10,
    "number": 75,
    "text": "¿Qué tipo de sensor de proximidad es capaz de detectar materiales no metálicos como plásticos, líquidos (nivel de agua o aceite a través de mirillas) y polvos granulares?",
    "options": [
      "Sensor Hall",
      "Sensor capacitivo",
      "Sensor inductivo",
      "Sensor magnético reed switch"
    ],
    "correctIndex": 1,
    "explanation": "El sensor capacitivo mide el cambio de permitividad dieléctrica (constante dieléctrica ε_r) entre su electrodo frontal y tierra cuando cualquier material (líquido, plástico, madera o metal) entra en su campo electrostático.",
    "skill": "Sensores Industriales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Detección de Proximidad",
    "subtopic": "Sensor Capacitivo"
  },
  {
    "id": "ele-tec-76",
    "sectionId": 10,
    "number": 76,
    "text": "En un sensor de 3 hilos de corriente continua (24 V DC), ¿qué significa que la salida sea de tipo PNP (contacto común a positivo o 'sourcing')?",
    "options": [
      "Que cuando el sensor conmuta a estado activo, su salida entrega tensión positiva (+24 V) hacia la carga o entrada digital del PLC",
      "Que conmuta cerrando la carga hacia el polo negativo (0 V o masa)",
      "Que solo funciona con corriente alterna",
      "Que no requiere fuente de alimentación"
    ],
    "correctIndex": 0,
    "explanation": "Una salida PNP conecta la carga a VCC (+24 V) mediante un transistor PNP o MOSFET canal P en el lado alto (high-side switch), requiriendo entradas digitales de PLC configuradas en modo 'Sink' (común a 0 V).",
    "skill": "Interfaces de Sensores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Salidas PNP y NPN",
    "subtopic": "Configuración PNP Sourcing"
  },
  {
    "id": "ele-tec-77",
    "sectionId": 10,
    "number": 77,
    "text": "Por el contrario, ¿qué caracteriza a una salida de sensor tipo NPN ('sinking')?",
    "options": [
      "Entrega una tensión positiva de +48 V",
      "Emite señales inalámbricas de radiofrecuencia",
      "Invierte la secuencia de fases de la fábrica",
      "El transistor interno conecta la carga al carril negativo de alimentación (0 V / masa) al conmutar"
    ],
    "correctIndex": 3,
    "explanation": "Las salidas NPN son interruptores de lado bajo (low-side switch) que derivan la corriente a 0 V; la entrada del PLC debe suministrar la tensión positiva (modo 'Source', común conectado a +24 V).",
    "skill": "Interfaces de Sensores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Salidas PNP y NPN",
    "subtopic": "Configuración NPN Sinking"
  },
  {
    "id": "ele-tec-78",
    "sectionId": 10,
    "number": 78,
    "text": "¿Cuál es el bus de campo industrial estándar basado en el nivel físico balanceado diferencial RS-480 que utiliza el protocolo Modbus RTU?",
    "options": [
      "Ethernet 10Base-T sin blindaje",
      "Bucle de 20 mA analógico",
      "RS-485",
      "RS-232 monopolar"
    ],
    "correctIndex": 2,
    "explanation": "RS-485 es una interfaz física diferencial multipunto que transmite datos seriales a través de un par trenzado de cables (A y B) con altísima inmunidad al ruido y alcances de hasta 1,200 metros, universal para Modbus RTU.",
    "skill": "Redes Industriales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Comunicaciones Industriales",
    "subtopic": "Bus Diferencial RS-485"
  },
  {
    "id": "ele-tec-79",
    "sectionId": 10,
    "number": 79,
    "text": "¿Por qué es obligatorio instalar resistencias terminales de fin de línea (típicamente de 120 Ω) en ambos extremos físicos de un bus de comunicación RS-485 o CAN Bus?",
    "options": [
      "Para evitar que la velocidad de comunicación exceda los límites legales",
      "Para adaptar la impedancia característica de la línea y evitar reflexiones de señal digital que corrompan los paquetes de datos",
      "Para alimentar los transceptores con energía parásita",
      "Para descargar la electricidad estática hacia tierra en cada mensaje"
    ],
    "correctIndex": 1,
    "explanation": "El par trenzado tiene una impedancia característica típica de 120 Ω. La ausencia de resistencias de terminación en los extremos genera ondas reflejadas que chocan con los bits siguientes, provocando errores de paridad y tramas CRC corruptas.",
    "skill": "Redes Industriales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Comunicaciones de Campo",
    "subtopic": "Resistencias de Terminación de 120 Ohmios"
  },
  {
    "id": "ele-tec-80",
    "sectionId": 10,
    "number": 80,
    "text": "¿Qué índice de protección ambiental según la norma internacional IEC 60529 (código IP) describe un cuadro eléctrico totalmente estanco al polvo y protegido contra chorros de agua potentes?",
    "options": [
      "IP66",
      "IP20",
      "IP00",
      "IP44"
    ],
    "correctIndex": 0,
    "explanation": "El primer dígito '6' indica protección total contra ingreso de polvo fino; el segundo dígito '6' indica protección contra chorros de agua potentes desde cualquier dirección (el IP67 añade inmersión temporal).",
    "skill": "Envolventes Eléctricas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Grados de Protección IP",
    "subtopic": "Clasificación IP66"
  },
  {
    "id": "ele-tec-81",
    "sectionId": 10,
    "number": 81,
    "text": "¿Qué grado de protección IP mínimo es el típico para aparamenta modular de carril DIN instalada en el interior de un tablero cerrado (que solo ofrece protección al contacto directo de dedos)?",
    "options": [
      "IP68",
      "IP55",
      "IP65",
      "IP20"
    ],
    "correctIndex": 3,
    "explanation": "IP20 protege contra la penetración de objetos sólidos mayores a 12.5 mm (como el dedo de la mano), pero no ofrece ninguna protección contra líquidos, requiriendo estar encerrado en armarios para ambientes industriales o intemperie.",
    "skill": "Envolventes Eléctricas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Grados de Protección IP",
    "subtopic": "Grado IP20 para Interior de Tablero"
  },
  {
    "id": "ele-tec-82",
    "sectionId": 10,
    "number": 82,
    "text": "¿Qué grado de resistencia mecánica a los impactos de envolventes eléctricas (norma europea IEC 62262) representa una protección contra impactos de 20 Julios de energía cinética?",
    "options": [
      "IK05",
      "IK02",
      "IK10",
      "IK00"
    ],
    "correctIndex": 2,
    "explanation": "La escala IK va de IK00 (sin protección) hasta IK10, que es la máxima resistencia normalizada, certificando que la envolvente metálica o de policarbonato soporta el impacto de una masa de 5 kg cayendo desde 40 cm (20 J).",
    "skill": "Envolventes Industriales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Norma IK de Impacto",
    "subtopic": "Grado IK10 Máximo Impacto"
  },
  {
    "id": "ele-tec-83",
    "sectionId": 10,
    "number": 83,
    "text": "En la lectura de diagramas unifilares de subestaciones, ¿qué símbolo representa un seccionador de cuchillas de corte visible sin poder de corte en carga?",
    "options": [
      "Un transformador trifásico toroidal",
      "Un contacto basculante de seccionamiento que solo puede abrirse o cerrarse cuando el interruptor de potencia previo ya ha interrumpido la corriente",
      "Un círculo con una cruz en su interior",
      "Una resistencia variable de carbón"
    ],
    "correctIndex": 1,
    "explanation": "El seccionador garantiza una distancia de aislamiento visible para seguridad del personal de mantenimiento, pero no puede abrir corrientes de carga porque carece de cámara apagachispas (se abriría un arco catastrófico).",
    "skill": "Lectura de Planos de Subestaciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Aparamenta de Maniobra",
    "subtopic": "Seccionador sin Poder de Corte"
  },
  {
    "id": "ele-tec-84",
    "sectionId": 10,
    "number": 84,
    "text": "¿Qué maniobra operativa es obligatoria al desenergizar una posición de línea en una subestación eléctrica con interruptor y seccionadores asociados?",
    "options": [
      "1) Abrir primero el interruptor de potencia; 2) Abrir seguidamente los seccionadores de línea y barra; 3) Cerrar el seccionador de puesta a tierra",
      "1) Abrir primero los seccionadores bajo plena carga; 2) Abrir después el interruptor",
      "1) Poner a tierra directamente la línea con el interruptor cerrado",
      "1) Cortocircuitar las tres fases con un cable manual"
    ],
    "correctIndex": 0,
    "explanation": "Para evitar la apertura destructiva de un arco en un seccionador, siempre se abre primero el interruptor automático (que extingue el arco de carga); luego se abren los seccionadores para garantizar corte visible, y finalmente se aterriza la línea.",
    "skill": "Operación de Subestaciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Secuencia de Maniobras",
    "subtopic": "Protocolo Interruptor y Seccionador"
  },
  {
    "id": "ele-tec-85",
    "sectionId": 10,
    "number": 85,
    "text": "¿Qué equipo de protección contra sobretensiones transitorias atmosféricas (rayos) y sobretensiones de maniobra se conecta entre cada fase y tierra en la entrada de las líneas a la subestación?",
    "options": [
      "Seccionador fusible de expulsión",
      "Reactor de puesta a tierra",
      "Condensador síncrono",
      "Descargador de sobretensiones (o pararrayos de óxido de zinc - MOV / DPS)"
    ],
    "correctIndex": 3,
    "explanation": "Los descargadores de sobretensión (Surge Arresters) basados en varistores de ZnO pasan de ser un aislante casi perfecto a ser un camino de baja impedancia en nanosegundos al recibir una onda de rayo, derivando la energía destructiva a tierra.",
    "skill": "Protección Contra Rayos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Pararrayos de Subestación",
    "subtopic": "Descargadores de Óxido de Zinc (MOV)"
  },
  {
    "id": "ele-tec-86",
    "sectionId": 10,
    "number": 86,
    "text": "¿Qué parámetro de un supresor de picos o descargador de sobretensión (DPS) define la tensión continua máxima de operación que puede soportar continuamente sin degradarse?",
    "options": [
      "Nivel de protección de tensión Up",
      "Tensión residual Ures",
      "MCOV (Maximum Continuous Operating Voltage)",
      "Corriente de descarga nominal In"
    ],
    "correctIndex": 2,
    "explanation": "El MCOV (o Uc según IEC) es el límite superior de tensión RMS a frecuencia industrial que el descargador tolera indefinidamente sin calentarse ni dispararse térmicamente.",
    "skill": "Especificación de Descargadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Protección Contra Transitorios",
    "subtopic": "Tensión MCOV en DPS"
  },
  {
    "id": "ele-tec-87",
    "sectionId": 10,
    "number": 87,
    "text": "¿Qué tipo de relé programable inteligente de pequeñas dimensiones (como Siemens LOGO! o Zelio Logic) se emplea en automatismos sencillos en sustitución de decenas de relés y temporizadores cableados?",
    "options": [
      "Computadora de control numérico CNC",
      "Relé inteligente programable (o micro-PLC)",
      "Variador de frecuencia regenerativo",
      "Servocontrolador de 4 ejes"
    ],
    "correctIndex": 1,
    "explanation": "Los relés programables compactos integran entradas digitales/analógicas, salidas de relé/transistor y bloques de función (temporizadores, contadores, relojes astronómicos) programables mediante bloques lógicos (FBD) o diagrama de contactos (Ladder).",
    "skill": "Automatización Modular",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Relés Programables",
    "subtopic": "Micro-PLCs tipo LOGO!"
  },
  {
    "id": "ele-tec-88",
    "sectionId": 10,
    "number": 88,
    "text": "¿Qué lenguaje de programación gráfico normalizado por la norma internacional IEC 61131-3 emula los esquemas tradicionales de contactos de relés en columnas verticales de alimentación?",
    "options": [
      "Lenguaje Ladder (Diagrama de Escalera / LD)",
      "Texto Estructurado (ST)",
      "Lista de Instrucciones (IL)",
      "Diagrama de Flujo Secuencial (SFC)"
    ],
    "correctIndex": 0,
    "explanation": "El diagrama Ladder (LD) fue concebido expresamente para técnicos y electricistas, organizando la lógica mediante rieles de alimentación, contactos normalmente abiertos/cerrados y bobinas de salida en peldaños horizontales.",
    "skill": "Programación de Automatismos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Norma IEC 61131-3",
    "subtopic": "Lenguaje Ladder (LD)"
  },
  {
    "id": "ele-tec-89",
    "sectionId": 10,
    "number": 89,
    "text": "¿Qué lenguaje de la norma IEC 61131-3 es textual, de alto nivel y con sintaxis estructurada similar a Pascal (con sentencias IF-THEN-ELSE, FOR, WHILE)?",
    "options": [
      "Ladder Diagram (LD)",
      "Function Block Diagram (FBD)",
      "Instruction List (IL)",
      "Texto Estructurado (Structured Text - ST)"
    ],
    "correctIndex": 3,
    "explanation": "El Texto Estructurado (ST) es el lenguaje preferido para cálculos matemáticos complejos, algoritmos de regulación PID y manipulación de arreglos y cadenas de texto en PLCs modernos.",
    "skill": "Programación Avanzada de PLCs",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Norma IEC 61131-3",
    "subtopic": "Texto Estructurado (ST)"
  },
  {
    "id": "ele-tec-90",
    "sectionId": 10,
    "number": 90,
    "text": "¿Cuál es la función del conmutador de tomas bajo carga (OLTC - On-Load Tap Changer) en un gran transformador de potencia de una subestación?",
    "options": [
      "Drenar el agua acumulada en el fondo de la cuba",
      "Medir el factor de potencia de la línea",
      "Modificar el número efectivo de espiras del bobinado de alta tensión sin interrumpir el suministro a los usuarios para regular automáticamente el voltaje de salida ante fluctuaciones de la demanda",
      "Invertir la polaridad de las fases durante la noche"
    ],
    "correctIndex": 2,
    "explanation": "El OLTC ajusta la relación de transformación en pequeños pasos (ej. ±10% en 16 o 32 pasos) mientras el transformador suministra megavatios de carga, utilizando resistencias de transición para no crear cortocircuitos entre tomas.",
    "skill": "Operación de Transformadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Regulación de Tensión",
    "subtopic": "Cambiador de Tomas Bajo Carga (OLTC)"
  },
  {
    "id": "ele-tec-91",
    "sectionId": 10,
    "number": 91,
    "text": "¿Qué componente de sílice colocado en el tubo de respiración del depósito de expansión de un transformador de potencia absorbe la humedad del aire que ingresa a la cuba?",
    "options": [
      "Trampa de aceite usado",
      "Depósito de gel de sílice (sílica gel con indicador de color)",
      "Filtro de carbón activado",
      "Cartucho de lana de vidrio"
    ],
    "correctIndex": 1,
    "explanation": "El gel de sílice higroscópico deseca el aire que 'respira' el transformador con las dilataciones y contracciones térmicas del aceite. Cambia de color (ej. de azul a rosa o de naranja a verde) cuando se satura de agua y debe ser reactivado o sustituido.",
    "skill": "Mantenimiento de Transformadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Sistemas de Respiración",
    "subtopic": "Secador de Aire de Sílica Gel"
  },
  {
    "id": "ele-tec-92",
    "sectionId": 10,
    "number": 92,
    "text": "¿Qué tipo de esquema de conexión de puesta a tierra (según la norma IEC 60364) conecta directamente el neutro del transformador a tierra y une las masas metálicas de la instalación receptora al mismo neutro mediante un conductor de protección común (PEN)?",
    "options": [
      "Esquema TN-C",
      "Esquema TT",
      "Esquema IT con neutro aislado",
      "Esquema TN-S con neutro y protección separados"
    ],
    "correctIndex": 0,
    "explanation": "En el sistema TN-C (Tierra-Neutro Combinado), las funciones de neutro y conductor de protección se combinan en un único conductor PEN en toda la instalación.",
    "skill": "Regímenes de Neutro",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Norma IEC 60364",
    "subtopic": "Sistema TN-C"
  },
  {
    "id": "ele-tec-93",
    "sectionId": 10,
    "number": 93,
    "text": "¿Qué régimen de neutro según IEC 60364 conecta el neutro de la fuente a tierra y las masas metálicas de la vivienda a un electrodo de tierra independiente local, siendo el sistema más habitual en instalaciones residenciales de baja tensión?",
    "options": [
      "Esquema TN-C",
      "Esquema IT",
      "Esquema TN-C-S",
      "Esquema TT"
    ],
    "correctIndex": 3,
    "explanation": "En el sistema TT la primera 'T' indica neutro del transformador a tierra, y la segunda 'T' indica masas de los aparatos conectadas a tierra local independiente; este esquema exige obligatoriamente interruptores diferenciales para despejar fallas a tierra.",
    "skill": "Regímenes de Neutro",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Sistemas de Puesta a Tierra",
    "subtopic": "Esquema TT Residencial"
  },
  {
    "id": "ele-tec-94",
    "sectionId": 10,
    "number": 94,
    "text": "¿Por qué en quirófanos hospitalarios e industrias críticas de proceso continuo se utiliza obligatoriamente el esquema de neutro IT (neutro aislado o impedante de tierra)?",
    "options": [
      "Porque elimina el uso de cables conductores",
      "Porque genera energía de respaldo espontánea",
      "Porque ante una primera falla de aislamiento a tierra no se produce un disparo intempestivo de la energía, permitiendo continuar la operación quirúrgica o industrial con total seguridad",
      "Porque no consume potencia activa"
    ],
    "correctIndex": 2,
    "explanation": "En IT el neutro no está puesto a tierra directamente. Ante una primera falla fase-chasis la corriente es ínfima (solo corrientes de fuga capacitivas), por lo que un vigilante de aislamiento avisa sin cortar la luz en medio de una cirugía.",
    "skill": "Instalaciones Críticas y Hospitalarias",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Esquema IT Hospitalario",
    "subtopic": "Continuidad de Servicio en Primer Fallo"
  },
  {
    "id": "ele-tec-95",
    "sectionId": 10,
    "number": 95,
    "text": "¿Qué equipo de monitorización continua permanente se exige en sistemas con neutro aislado IT para alertar inmediatamente al personal de mantenimiento cuando ocurre una primera falla de aislamiento?",
    "options": [
      "Voltímetro electromagnético de cuadro",
      "Vigilante de aislamiento (o monitor de aislamiento de línea - LIM)",
      "Interruptor termomagnético curva C",
      "Transformador elevador de tensión"
    ],
    "correctIndex": 1,
    "explanation": "El LIM inyecta una pequeña señal codificada para medir en tiempo real la resistencia global de la red respecto a tierra, disparando una alarma óptica/acústica si cae por debajo del umbral de seguridad (ej. < 50 kΩ).",
    "skill": "Seguridad Hospitalaria",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Monitores de Aislamiento",
    "subtopic": "Vigilante de Aislamiento LIM"
  },
  {
    "id": "ele-tec-96",
    "sectionId": 10,
    "number": 96,
    "text": "¿Qué índice de polarización (PI) obtenido mediante una prueba de 10 minutos respecto a 1 minuto con megóhmetro indica un aislamiento limpio, seco y en excelente estado en un motor de media tensión?",
    "options": [
      "PI = R(10 min) / R(1 min) ≥ 2.0 (o superior a 3.0)",
      "PI menor a 1.0",
      "PI exactamente igual a 0.5",
      "PI negativo"
    ],
    "correctIndex": 0,
    "explanation": "En un aislamiento sano, la corriente de absorción decae lentamente y la resistencia de aislamiento medida a los 10 minutos es más del doble que al minuto 1 (PI ≥ 2.0). Un valor menor a 1.5 denota humedad o contaminación profunda.",
    "skill": "Pruebas de Aislamiento de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Índice de Polarización",
    "subtopic": "Relación de 10 Minutos a 1 Minuto"
  },
  {
    "id": "ele-tec-97",
    "sectionId": 10,
    "number": 97,
    "text": "¿Qué ensayo dieléctrico destructivo de tensión aplicada de muy baja frecuencia (VLF a 0.1 Hz) se aplica en campo a cables subterráneos de media tensión de polietileno reticulado (XLPE)?",
    "options": [
      "Ensayo de corriente continua de alta tensión continua pura (DC Hi-Pot)",
      "Prueba de descarga estática con barra de grafito",
      "Ensayo de continuidad con zumbador de 9 V",
      "Ensayo Hi-Pot con tecnología VLF (Very Low Frequency a 0.1 Hz)"
    ],
    "correctIndex": 3,
    "explanation": "El ensayo VLF a 0.1 Hz reduce la potencia requerida del equipo de prueba en 600 veces (respecto a 60 Hz) y evita inyectar alta tensión continua pura (DC Hi-Pot), la cual está prohibida en cables XLPE envejecidos porque genera cargas espaciales que destruyen el aislamiento.",
    "skill": "Ensayos de Cables Subterráneos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Cables de Media Tensión",
    "subtopic": "Ensayo VLF a 0.1 Hz en Cables XLPE"
  },
  {
    "id": "ele-tec-98",
    "sectionId": 10,
    "number": 98,
    "text": "¿Qué defecto interno grave en cables y terminaciones de media tensión se diagnostica midiendo descargas parciales (DP o PD) expresadas en picoculombios (pC)?",
    "options": [
      "Rotura mecánica del blindaje de armadura de acero",
      "Pérdida de temperatura ambiente en la zanja",
      "Arborescencias eléctricas y microcavidades de gas (voids) dentro del polietileno que erosionan el dieléctrico hasta perforarlo",
      "Sulfatación de los bornes de puesta a tierra"
    ],
    "correctIndex": 2,
    "explanation": "Las descargas parciales son microchispas confinadas dentro de burbujas o impurezas del aislamiento sólido; con el tiempo carbonizan canales microscópicos (arborescencias eléctricas) que terminan en cortocircuito destructivo.",
    "skill": "Descargas Parciales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico de Cables",
    "subtopic": "Medición de Descargas Parciales en pC"
  },
  {
    "id": "ele-tec-99",
    "sectionId": 10,
    "number": 99,
    "text": "¿Qué técnica de mantenimiento predictivo en motores eléctricos analiza el espectro de corriente del estator (MCSA - Motor Current Signature Analysis) para detectar barras rotas en el rotor jaula de ardilla sin desarmar el motor?",
    "options": [
      "Verificación visual de la pintura de la carcasa",
      "Análisis de bandas laterales alrededor de la frecuencia fundamental en el espectro FFT de la corriente: f_sb = f_linea × (1 ± 2s)",
      "Medición de la temperatura del ventilador con pirómetro",
      "Prueba de tensión inducida en vacío con motor parado"
    ],
    "correctIndex": 1,
    "explanation": "Una barra rota del rotor crea una asimetría magnética rotórica que modula la corriente del estator, haciendo aparecer bandas laterales alrededor de los 60 Hz a distancias exactas de dos veces la frecuencia de deslizamiento (2·s·f).",
    "skill": "Diagnóstico Predictivo de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Técnica MCSA",
    "subtopic": "Detección de Barras Rotas con Espectro MCSA"
  },
  {
    "id": "ele-tec-100",
    "sectionId": 10,
    "number": 100,
    "text": "¿Qué tipo de fusible de media tensión de tipo limitador de corriente contiene arena de sílice de alta pureza alrededor de su elemento de plata para enfriar y extinguir el arco en menos de medio ciclo?",
    "options": [
      "Fusible limitador de corriente de alta capacidad de ruptura (fusible HH / HRC)",
      "Fusible tipo Duelo de tapón roscado",
      "Fusible de expulsión abierta tipo cortacircuito (cut-out)",
      "Fusible de lámina de estaño al aire libre"
    ],
    "correctIndex": 0,
    "explanation": "Al fundirse el filamento de plata dentro de la arena de sílice densamente compactada, la arena se funde formando una sustancia vitrificada aislante (fulgurita) que absorbe la energía del arco y corta la corriente antes del primer pico de cresta.",
    "skill": "Protección en Media Tensión",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Fusibles Limitadores HH",
    "subtopic": "Extinción de Arco con Arena de Sílice"
  }
];
