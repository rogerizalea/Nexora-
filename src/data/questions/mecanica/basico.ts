import { Question } from '../../../types';

export const MECANICA_BASICO: Question[] = [
  {
    "id": "mec-bas-01",
    "number": 1,
    "text": "¿Cuáles son las cuatro carreras consecutivas que componen el ciclo de trabajo de un motor de combustión interna de 4 tiempos?",
    "options": [
      "Admisión, Compresión, Expansión (Combustión) y Escape",
      "Arranque, Aceleración, Frenado y Reposo",
      "Inyección, Ignición, Rotación y Salida",
      "Enfriamiento, Lubricación, Presurización y Escape"
    ],
    "correctIndex": 0,
    "explanation": "El motor alternativo de cuatro tiempos cumple sucesivamente: admisión (ingreso de mezcla o aire), compresión, combustión/expansión (fuerza motriz útil) y escape de gases residuales.",
    "skill": "Fundamentos del Motor Térmico",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Ciclo de 4 Tiempos",
    "subtopic": "Tiempos del Motor"
  },
  {
    "id": "mec-bas-02",
    "number": 2,
    "text": "¿Cuál es la función vital del aceite lubricante en el interior de un motor de combustión interna?",
    "options": [
      "Producir la chispa para inflamar la gasolina",
      "Reducir la fricción entre piezas metálicas móviles, enfriar y limpiar impurezas internas",
      "Aumentar el octanaje del combustible",
      "Accionar el limpiaparabrisas"
    ],
    "correctIndex": 1,
    "explanation": "El aceite genera una película hidrodinámica que evita el contacto directo metal-metal, refrigera zonas críticas como la falda del pistón y arrastra partículas al filtro.",
    "skill": "Sistema de Lubricación",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Fluidos del Motor",
    "subtopic": "Aceite de Motor"
  },
  {
    "id": "mec-bas-03",
    "number": 3,
    "text": "¿Qué componente del sistema de encendido genera la chispa eléctrica de alto voltaje dentro del cilindro en un motor de gasolina?",
    "options": [
      "El alternador",
      "La bujía de encendido",
      "El motor de arranque",
      "El inyector"
    ],
    "correctIndex": 1,
    "explanation": "La bujía recibe alta tensión desde la bobina y produce un arco eléctrico entre sus electrodos para iniciar la combustión de la mezcla comprimida.",
    "skill": "Sistema de Encendido",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Componentes Eléctricos del Motor",
    "subtopic": "Bujías de Gasolina"
  },
  {
    "id": "mec-bas-04",
    "number": 4,
    "text": "¿Qué componente del vehículo se encarga de recargar la batería de 12V y suministrar energía eléctrica a todos los sistemas mientras el motor está encendido?",
    "options": [
      "El radiador",
      "El alternador",
      "El motor de arranque",
      "El condensador del clima"
    ],
    "correctIndex": 1,
    "explanation": "El alternador accionado por la correa de accesorios convierte energía mecánica del cigüeñal en energía eléctrica alterna, que luego rectifica a corriente continua para alimentar el vehículo y recargar la batería.",
    "skill": "Sistema de Carga Automotriz",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Electricidad del Automóvil",
    "subtopic": "El Alternador"
  },
  {
    "id": "mec-bas-05",
    "number": 5,
    "text": "¿Qué elemento del sistema de frenos presiona las pastillas contra el disco giratorio acoplado a la rueda para detener el vehículo?",
    "options": [
      "La mordaza o cáliper de freno",
      "El tambor trasero",
      "El servofreno de vacío",
      "La palanca de cambios"
    ],
    "correctIndex": 0,
    "explanation": "El cáliper o mordaza contiene los pistones hidráulicos que, impulsados por la presión del líquido de frenos, empujan las pastillas de fricción contra el disco metálico.",
    "skill": "Sistema de Frenos",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Frenos de Disco",
    "subtopic": "Cáliper y Pastillas"
  },
  {
    "id": "mec-bas-06",
    "number": 6,
    "text": "¿Cuál es la función del filtro de aire del motor en un automóvil?",
    "options": [
      "Enfriar el habitáculo para los pasajeros",
      "Retener partículas de polvo, arena y suciedad del exterior para evitar desgaste abrasivo en los cilindros",
      "Purificar los gases que salen por el escape",
      "Medir el nivel de aceite del cárter"
    ],
    "correctIndex": 1,
    "explanation": "El filtro de aire garantiza que el aire aspirado hacia las cámaras de combustión esté libre de impurezas que desgastarían prematuramente los aros de pistón y cilindros.",
    "skill": "Mantenimiento Preventivo",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Sistema de Admisión",
    "subtopic": "Filtro de Aire"
  },
  {
    "id": "mec-bas-07",
    "number": 7,
    "text": "¿Qué líquido se debe utilizar en el sistema de enfriamiento del motor en lugar de utilizar únicamente agua corriente?",
    "options": [
      "Líquido refrigerante / anticongelante formulado con etilenglicol e inhibidores de corrosión",
      "Líquido de frenos DOT 4",
      "Aceite hidráulico de dirección",
      "Gasolina de alto octanaje"
    ],
    "correctIndex": 0,
    "explanation": "El refrigerante contiene glicoles que elevan el punto de ebullición por encima de 105°C, bajan el punto de congelación por debajo de 0°C y evitan la oxidación de conductos internos del motor.",
    "skill": "Sistema de Refrigeración",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Fluidos del Vehículo",
    "subtopic": "Líquido Refrigerante"
  },
  {
    "id": "mec-bas-08",
    "number": 8,
    "text": "¿Qué componente conecta mecánicamente el motor con la caja de cambios manual, permitiendo desacoplarlos temporalmente para realizar los cambios de marcha?",
    "options": [
      "El diferencial",
      "El embrague (clutch)",
      "El amortiguador",
      "La junta homocinética"
    ],
    "correctIndex": 1,
    "explanation": "El conjunto del embrague (disco, plato de presión y collarín) acopla por fricción el volante de inercia del motor al eje primario de la caja, permitiendo marchas suaves al desacoplarse.",
    "skill": "Tren Motriz",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Transmisión Manual",
    "subtopic": "El Embrague"
  },
  {
    "id": "mec-bas-09",
    "number": 9,
    "text": "¿Qué indica una presión de inflado significativamente baja e incorrecta en los neumáticos?",
    "options": [
      "Menor consumo de combustible y menor adherencia",
      "Mayor resistencia al rodamiento, sobrecalentamiento de la banda y desgaste excesivo en los bordes u hombros de la llanta",
      "Mayor velocidad punta del vehículo",
      "Frenado instantáneo en nieve"
    ],
    "correctIndex": 1,
    "explanation": "Una presión baja deforma el neumático, incrementa la flexión interna, eleva peligrosamente la temperatura y desgasta los dos hombros exteriores de la banda de rodadura.",
    "skill": "Ruedas y Neumáticos",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Mantenimiento de Neumáticos",
    "subtopic": "Presión de Inflado"
  },
  {
    "id": "mec-bas-10",
    "number": 10,
    "text": "¿Qué componente del sistema de escape reduce el nivel sonoro de las detonaciones generadas por los gases expulsados por el motor?",
    "options": [
      "El silenciador o mofle (muffler)",
      "El múltiple de admisión",
      "La válvula de purga de combustible",
      "El termostato"
    ],
    "correctIndex": 0,
    "explanation": "El silenciador utiliza cámaras internas de expansión, tubos perforados y resonadores destructivos para atenuar las ondas de presión acústica del escape.",
    "skill": "Sistema de Escape",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Escape y Emisiones",
    "subtopic": "Silenciador"
  },
  {
    "id": "mec-bas-11",
    "number": 11,
    "text": "¿Cuál es la función del tapón del radiador más allá de simplemente tapar el depósito?",
    "options": [
      "Contar el número de vueltas de la bomba de agua",
      "Mantener el circuito bajo presión controlada (aprox. 0.9 a 1.3 bar) para aumentar el punto de ebullición del refrigerante",
      "Inyectar combustible al radiador",
      "Apagar el motor automáticamente si hay humo"
    ],
    "correctIndex": 1,
    "explanation": "Al presurizar el circuito de enfriamiento, el tapón eleva el punto de ebullición del agua por encima de los 120°C mediante una válvula de alivio calibrada por resorte.",
    "skill": "Sistema de Refrigeración",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Presurización Térmica",
    "subtopic": "Tapón del Radiador"
  },
  {
    "id": "mec-bas-12",
    "number": 12,
    "text": "¿Qué parte de la suspensión absorbe los baches del camino disipando la energía elástica del muelle/resorte para evitar que el automóvil rebote continuamente?",
    "options": [
      "El amortiguador",
      "La barra estabilizadora",
      "La rótula de dirección",
      "El palier de transmisión"
    ],
    "correctIndex": 0,
    "explanation": "El resorte soporta el peso y absorbe el impacto inicial, pero es el amortiguador (hidráulico o de gas) el que frena las oscilaciones disipando la energía en forma de calor.",
    "skill": "Sistema de Suspensión",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Dinámica de Suspensión",
    "subtopic": "Amortiguadores"
  },
  {
    "id": "mec-bas-13",
    "number": 13,
    "text": "¿Qué tipo de caja de cambios permite que el vehículo cambie automáticamente de marchas sin intervención manual del conductor mediante engranajes epicicloidales y convertidor de par?",
    "options": [
      "Transmisión automática tradicional",
      "Caja manual de 5 velocidades sincrónica",
      "Embrague seco monodisco",
      "Transmisión fija sin marchas"
    ],
    "correctIndex": 0,
    "explanation": "Las cajas automáticas convencionales emplean trenes de engranajes planetarios embragados hidráulicamente y un convertidor de par hidrodinámico.",
    "skill": "Tren de Potencia",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Transmisiones Automáticas",
    "subtopic": "Cajas Automáticas"
  },
  {
    "id": "mec-bas-14",
    "number": 14,
    "text": "¿Por qué nunca se debe rellenar el depósito de líquido de frenos con aceite de motor o fluidos derivados del petróleo?",
    "options": [
      "Porque el aceite de motor se congela a temperatura ambiente",
      "Porque los derivados del petróleo destruyen e inflaman los sellos, retenes y retenedores de goma (caucho EPDM) del sistema de frenos, causando falla catastrófica inmediata",
      "Porque el aceite de motor es muy transparente",
      "Porque aumenta la presión del pedal"
    ],
    "correctIndex": 1,
    "explanation": "Los sistemas de frenos usan elastómeros compatibles únicamente con líquidos glicólicos sintéticos (DOT 3, 4, 5.1). Los aceites minerales degradan los sellos de goma, bloqueando o anulando los frenos.",
    "skill": "Fluidos de Freno",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Mantenimiento de Frenos",
    "subtopic": "Compatibilidad de Fluidos DOT"
  },
  {
    "id": "mec-bas-15",
    "number": 15,
    "text": "¿Qué instrumento del tablero de instrumentos mide la velocidad de giro del cigüeñal del motor expresada en revoluciones por minuto (RPM)?",
    "options": [
      "El velocímetro",
      "El tacómetro",
      "El odómetro",
      "El manómetro de combustible"
    ],
    "correctIndex": 1,
    "explanation": "El tacómetro informa las RPM instantáneas del motor para que el conductor o la computadora efectúen los cambios en el régimen de giro óptimo y eviten la zona roja de sobregiro.",
    "skill": "Instrumentación Automotriz",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Tablero de Control",
    "subtopic": "El Tacómetro"
  },
  {
    "id": "mec-bas-16",
    "number": 16,
    "text": "¿Cuál es la función de los fusibles en la caja de fusibles del automóvil?",
    "options": [
      "Cargar la batería cuando el vehículo está apagado",
      "Proteger los cables e instalaciones eléctricas fundiéndose deliberadamente cuando la corriente supera el valor seguro",
      "Encender las luces altas automáticamente",
      "Filtrar el aire del habitáculo"
    ],
    "correctIndex": 1,
    "explanation": "Un fusible posee una lámina metálica calibrada que se funde por efecto Joule ante un cortocircuito o sobrecarga, interrumpiendo el flujo eléctrico antes de que el mazo de cables se incendie.",
    "skill": "Electricidad Básica Automotriz",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Protección Eléctrica",
    "subtopic": "Fusibles"
  },
  {
    "id": "mec-bas-17",
    "number": 17,
    "text": "¿Qué componente del motor almacena la energía cinética durante la carrera de combustión para impulsar suavemente al cigüeñal a través de los tres tiempos muertos (escape, admisión y compresión)?",
    "options": [
      "El volante de inercia (flywheel)",
      "El cárter de aceite",
      "La bomba de agua",
      "El múltiple de escape"
    ],
    "correctIndex": 0,
    "explanation": "El volante de inercia es un disco de masa calculada fijado al extremo del cigüeñal cuya inercia rotacional regulariza el giro del motor entre las detonaciones intermitentes.",
    "skill": "Mecánica de Motores",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Bloque y Cigüeñal",
    "subtopic": "Volante de Inercia"
  },
  {
    "id": "mec-bas-18",
    "number": 18,
    "text": "¿Qué función cumple la batería de 12V cuando el automóvil se encuentra completamente apagado y se gira la llave para encenderlo?",
    "options": [
      "Alimentar el motor de arranque eléctrico que hace girar inicialmente al motor de combustión y suministrar corriente al sistema de encendido/inyección",
      "Generar energía eólica para enfriar el motor",
      "Impulsar directamente las ruedas motrices",
      "Rectificar la corriente alterna"
    ],
    "correctIndex": 0,
    "explanation": "La batería es un acumulador electroquímico capaz de suministrar intensas corrientes de arranque (CCA, de 300 a 700 amperios) durante unos segundos para que el motor de arranque venza la inercia del motor térmico.",
    "skill": "Sistema Eléctrico",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Batería de Arranque",
    "subtopic": "Función de la Batería"
  },
  {
    "id": "mec-bas-19",
    "number": 19,
    "text": "¿Qué es el dibujo o \"banda de rodadura\" de un neumático y por qué es peligroso que se gaste hasta quedar liso?",
    "options": [
      "Es solo un adorno estético del fabricante",
      "Son los surcos y ranuras diseñados para evacuar agua y evitar el aquaplaning (pérdida total de adherencia en suelo mojado)",
      "Sirve para enfriar los frenos de tambor",
      "Aumenta el peso del neumático"
    ],
    "correctIndex": 1,
    "explanation": "Las ranuras de la banda de rodadura canalizan miles de litros de agua por minuto; si la profundidad es inferior a 1.6 mm, el neumático monta sobre una película de agua (aquaplaning) perdiendo dirección y frenos.",
    "skill": "Seguridad Activa",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Neumáticos",
    "subtopic": "Banda de Rodadura y Aquaplaning"
  },
  {
    "id": "mec-bas-20",
    "number": 20,
    "text": "¿Qué componente mecánico permite que las ruedas delantera izquierda y derecha giren en ángulos diferentes cuando el conductor acciona el volante?",
    "options": [
      "El mecanismo de dirección (cremallera y piñón con bieletas y terminales)",
      "El radiador de aceite",
      "La bomba de gasolina",
      "El árbol de levas"
    ],
    "correctIndex": 0,
    "explanation": "El sistema de dirección convierte el movimiento rotativo del volante en traslación lineal de la cremallera, transmitiendo el empuje a los muñones de las ruedas a través de las rótulas y bieletas.",
    "skill": "Sistema de Dirección",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Mecanismos de Dirección",
    "subtopic": "Cremallera y Piñón"
  },
  {
    "id": "mec-bas-21",
    "sectionId": 1,
    "number": 21,
    "text": "¿Cuál es la función del cigüeñal (crankshaft) en un motor de combustión interna?",
    "options": [
      "Transformar el movimiento rectilíneo alternativo de los pistones en un movimiento de rotación continuo",
      "Controlar la apertura y cierre de las válvulas de admisión",
      "Filtrar las impurezas del combustible",
      "Suministrar corriente eléctrica a las bujías"
    ],
    "correctIndex": 0,
    "explanation": "El cigüeñal recibe las fuerzas de empuje transmitidas por las bielas desde los pistones y las convierte en par motor rotatorio transmitido al volante de inercia.",
    "skill": "Componentes del Motor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Tren Alternativo",
    "subtopic": "El Cigüeñal"
  },
  {
    "id": "mec-bas-22",
    "sectionId": 1,
    "number": 22,
    "text": "¿Qué pieza del motor sella la unión entre el bloque de cilindros y la culata (cabezote) para evitar fugas de compresión, aceite y refrigerante?",
    "options": [
      "La junta de culata (empaque de cabezote)",
      "El retén del cigüeñal",
      "El cárter inferior",
      "La tapa de balancines"
    ],
    "correctIndex": 0,
    "explanation": "La junta de culata soporta presiones extremas de combustión y altas temperaturas, aislando herméticamente las cámaras de combustión de los conductos de agua y aceite.",
    "skill": "Sellado del Motor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Componentes Estructurales",
    "subtopic": "Junta de Culata"
  },
  {
    "id": "mec-bas-23",
    "sectionId": 1,
    "number": 23,
    "text": "¿Cuál es la función del árbol de levas (camshaft) en el motor?",
    "options": [
      "Sincronizar y comandar la apertura y cierre preciso de las válvulas de admisión y escape",
      "Enfriar el líquido refrigerante en el radiador",
      "Generar la chispa de encendido",
      "Comprimir el combustible dentro del depósito"
    ],
    "correctIndex": 0,
    "explanation": "El árbol de levas posee lóbulos excéntricos calibrados que empujan las válvulas en el momento exacto del ciclo, accionado por la correa o cadena de distribución.",
    "skill": "Mecanismo Valvular",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Distribución del Motor",
    "subtopic": "Árbol de Levas"
  },
  {
    "id": "mec-bas-24",
    "sectionId": 1,
    "number": 24,
    "text": "¿Qué función cumplen los anillos o segmentos del pistón colocados en sus ranuras periféricas?",
    "options": [
      "Asegurar la compresión en el cilindro, evitar el paso de aceite a la cámara de combustión y disipar calor al cilindro",
      "Aumentar el peso del pistón para mayor inercia",
      "Generar chispas eléctricas en la cámara",
      "Conectar el pistón directamente con las ruedas"
    ],
    "correctIndex": 0,
    "explanation": "Los aros típicos son tres: de fuego (compresión superior), rascador intermedio de compresión y aro rascador de aceite inferior para controlar la película lubricante.",
    "skill": "Componentes del Pistón",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Conjunto Móvil",
    "subtopic": "Segmentos o Anillos de Pistón"
  },
  {
    "id": "mec-bas-25",
    "sectionId": 1,
    "number": 25,
    "text": "¿Dónde se acumula y almacena el aceite de motor mientras el vehículo se encuentra en reposo?",
    "options": [
      "En el cárter inferior del motor",
      "En el tanque de combustible",
      "En el depósito del líquido de frenos",
      "En el interior del silenciador de escape"
    ],
    "correctIndex": 0,
    "explanation": "El cárter es una bandeja atornillada a la parte inferior del bloque motor que actúa como depósito de reserva y facilita la refrigeración pasiva del lubricante.",
    "skill": "Sistema de Lubricación",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lubricación del Motor",
    "subtopic": "El Cárter de Aceite"
  },
  {
    "id": "mec-bas-26",
    "sectionId": 1,
    "number": 26,
    "text": "¿Qué elemento pesado acoplado al extremo del cigüeñal almacena energía cinética para suavizar los impulsos discontinuos de los pistones?",
    "options": [
      "El volante de inercia (flywheel)",
      "El alternador",
      "La bomba de agua",
      "El filtro de aire"
    ],
    "correctIndex": 0,
    "explanation": "El volante de inercia absorbe energía durante la carrera de expansión útil y la devuelve durante los tiempos pasivos (escape, admisión y compresión), manteniendo la rotación regular.",
    "skill": "Mecánica del Motor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Tren Alternativo",
    "subtopic": "Volante de Inercia"
  },
  {
    "id": "mec-bas-27",
    "sectionId": 1,
    "number": 27,
    "text": "¿Cuál es la función del termostato en el sistema de refrigeración del motor?",
    "options": [
      "Regular el flujo de líquido refrigerante hacia el radiador para que el motor alcance y mantenga rápidamente su temperatura óptima de funcionamiento",
      "Medir la velocidad del vehículo en kilómetros por hora",
      "Apagar el motor automáticamente si llueve",
      "Calentar el aire acondicionado de la cabina"
    ],
    "correctIndex": 0,
    "explanation": "El termostato es una válvula termosensible de cera: permanece cerrada en frío recirculando el líquido internamente y abre hacia el radiador al superar los 85-90 °C.",
    "skill": "Control Térmico del Motor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Refrigeración",
    "subtopic": "Válvula Termostática"
  },
  {
    "id": "mec-bas-28",
    "sectionId": 1,
    "number": 28,
    "text": "¿Por qué NUNCA se debe abrir el tapón del radiador o del vaso de expansión con el motor caliente?",
    "options": [
      "Porque el circuito está presurizado y el refrigerante hirviendo puede salir proyectado violentamente causando quemaduras graves",
      "Porque se descarga la batería del automóvil",
      "Porque el combustible se derrama dentro del motor",
      "Porque se descalibra la alineación de las ruedas delanteras"
    ],
    "correctIndex": 0,
    "explanation": "Al estar presurizado a 1 o 1.4 bar, el refrigerante supera los 100 °C sin hervir; quitar el tapón despresuriza el sistema instantáneamente, provocando ebullición explosiva hacia afuera.",
    "skill": "Seguridad en Mantenimiento",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad en el Taller",
    "subtopic": "Riesgos del Sistema de Refrigeración Presurizado"
  },
  {
    "id": "mec-bas-29",
    "sectionId": 1,
    "number": 29,
    "text": "¿Cuál es la función principal del radiador automotriz?",
    "options": [
      "Disipar al aire ambiente el calor absorbido por el refrigerante al circular por los conductos del motor",
      "Calentar los neumáticos antes de salir a carretera",
      "Filtrar las partículas de hollín de los gases de escape",
      "Almacenar gasolina para viajes largos"
    ],
    "correctIndex": 0,
    "explanation": "El radiador transfiere el calor del refrigerante caliente que fluye por sus tubos y aletas al flujo de aire exterior impulsado por la marcha o el electroventilador.",
    "skill": "Intercambio Térmico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Refrigeración",
    "subtopic": "Radiador"
  },
  {
    "id": "mec-bas-30",
    "sectionId": 1,
    "number": 30,
    "text": "¿Qué componente accionado por correa o distribución hace circular activamente el refrigerante a través del motor y el radiador?",
    "options": [
      "La bomba de agua (bomba de refrigerante)",
      "La bomba de freno",
      "La cremallera de dirección",
      "El servofreno"
    ],
    "correctIndex": 0,
    "explanation": "La bomba centrífuga de refrigerante impulsa el fluido con caudal constante venciendo la resistencia hidráulica de camisas, culata, termostato y radiador.",
    "skill": "Sistemas Auxiliares del Motor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Refrigeración",
    "subtopic": "Bomba de Agua"
  },
  {
    "id": "mec-bas-31",
    "sectionId": 1,
    "number": 31,
    "text": "En una especificación de aceite de motor multigrado como 'SAE 5W-30', ¿qué indica el número que precede a la letra 'W' (Winter)?",
    "options": [
      "El grado de viscosidad del aceite a bajas temperaturas de arranque en frío",
      "El peso en kilogramos del envase de lubricante",
      "El número de cilindros del motor en que debe usarse",
      "La cantidad de aditivos sintéticos por litro"
    ],
    "correctIndex": 0,
    "explanation": "El '5W' indica fluidez a bajas temperaturas (garantiza bombeo rápido al encender en frío); el '30' define la viscosidad cinemática a la temperatura de régimen (100 °C).",
    "skill": "Clasificación de Lubricantes",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Lubricantes del Motor",
    "subtopic": "Nomenclatura SAE de Viscosidad"
  },
  {
    "id": "mec-bas-32",
    "sectionId": 1,
    "number": 32,
    "text": "¿Cuál es la forma correcta de verificar el nivel de aceite del motor utilizando la varilla medidora (dipstick)?",
    "options": [
      "Con el vehículo en terreno plano y motor apagado (frío o tras reposar unos minutos), retirar la varilla, limpiarla con un paño limpio, reinsertarla a fondo, retirarla nuevamente y comprobar que la marca esté entre MIN y MAX",
      "Con el motor acelerando a fondo a 4000 RPM",
      "Inclinando el vehículo hacia un costado con un gato hidráulico",
      "Comprobando el nivel dentro del depósito de líquido parabrisas"
    ],
    "correctIndex": 0,
    "explanation": "La medición requiere que el aceite escurra al cárter en superficie nivelada; la primera extracción solo arrastra salpicaduras, requiriendo limpieza previa para lectura fidedigna.",
    "skill": "Mantenimiento Preventivo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mantenimiento de Fluidos",
    "subtopic": "Medición con Varilla de Aceite"
  },
  {
    "id": "mec-bas-33",
    "sectionId": 1,
    "number": 33,
    "text": "¿Qué consecuencia directa puede provocar operar un motor con un nivel de aceite severamente por debajo del mínimo indicado?",
    "options": [
      "Falta de lubricación hidrodinámica, fricción metal con metal, sobrecalentamiento y agarrotamiento (fundición) de bielas y cigüeñal",
      "Aumento en la presión de inflado de los neumáticos",
      "Rotura inmediata de los vidrios laterales",
      "Inversión del giro de las ruedas"
    ],
    "correctIndex": 0,
    "explanation": "Si la bomba de aceite aspira aire por falta de nivel en el cárter, cae la presión de aceite, destruyendo los cojinetes de biela y bancada en cuestión de minutos.",
    "skill": "Diagnóstico Preventivo",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Lubricación",
    "subtopic": "Riesgos por Bajo Nivel de Aceite"
  },
  {
    "id": "mec-bas-34",
    "sectionId": 1,
    "number": 34,
    "text": "¿Cuál es la función del filtro de aire del motor?",
    "options": [
      "Retener partículas abrasivas de polvo, arena y suciedad presentes en el aire exterior antes de que ingresen a los cilindros",
      "Filtrar el aire que respiran los ocupantes dentro de la cabina",
      "Enfriar el combustible antes de la combustión",
      "Eliminar el agua del aceite de motor"
    ],
    "correctIndex": 0,
    "explanation": "El aire contiene sílice y polvo altamente abrasivos; sin filtro de aire, las partículas rayarían los cilindros y desgastarían prematuramente los segmentos del pistón.",
    "skill": "Filtración del Motor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Admisión",
    "subtopic": "Filtro de Aire del Motor"
  },
  {
    "id": "mec-bas-35",
    "sectionId": 1,
    "number": 35,
    "text": "¿Qué filtro específico se encarga de purificar el aire exterior que entra al habitáculo del vehículo para climatización y confort de los pasajeros?",
    "options": [
      "El filtro de cabina (o filtro de polen / habitáculo)",
      "El filtro de combustible diésel",
      "El filtro secador del radiador",
      "El filtro de aceite primario"
    ],
    "correctIndex": 0,
    "explanation": "El filtro de habitáculo retiene polen, ácaros, polvo fino y olores mediante capas de carbón activado, evitando alergias y empañamiento en el interior.",
    "skill": "Mantenimiento de Confort",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Habitáculo y Climatización",
    "subtopic": "Filtro de Polen / Habitáculo"
  },
  {
    "id": "mec-bas-36",
    "sectionId": 1,
    "number": 36,
    "text": "¿Cuál es la función principal del líquido de frenos en el sistema de frenado hidráulico?",
    "options": [
      "Transmitir de forma incompresible la presión generada en el pedal de freno hacia las pinzas y cilindros de rueda para detener el vehículo",
      "Lubricar la superficie de contacto entre la pastilla y el disco",
      "Enfriar los neumáticos durante frenadas prolongadas",
      "Generar electricidad para las luces de freno"
    ],
    "correctIndex": 0,
    "explanation": "Al ser prácticamente incompresible según el principio de Pascal, transmite instantáneamente la fuerza hidráulica del cilindro maestro a los pistones de los frenos.",
    "skill": "Sistemas Hidráulicos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Frenos",
    "subtopic": "Líquido de Frenos"
  },
  {
    "id": "mec-bas-37",
    "sectionId": 1,
    "number": 37,
    "text": "¿Por qué el líquido de frenos (como DOT 3 o DOT 4) debe sustituirse periódicamente cada 1 o 2 años según el manual?",
    "options": [
      "Porque es higroscópico (absorbe humedad del ambiente), lo que reduce drásticamente su punto de ebullición y puede causar pérdida total de frenos por vapor (vapor lock)",
      "Porque se vuelve inflamable y explota en las tuberías",
      "Porque cambia de color rojo a transparente",
      "Porque desgasta los neumáticos de forma irregular"
    ],
    "correctIndex": 0,
    "explanation": "El agua absorbida hierve a 100 °C con el calor de los frenos; el vapor es compresible, provocando que el pedal se vaya al fondo sin frenar el vehículo.",
    "skill": "Mantenimiento de Seguridad",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Frenos",
    "subtopic": "Higroscopia y Purga de Frenos"
  },
  {
    "id": "mec-bas-38",
    "sectionId": 1,
    "number": 38,
    "text": "¿Qué función cumple el líquido limpiaparabrisas almacenado en su depósito transparente?",
    "options": [
      "Limpiar suciedad, grasa e insectos del parabrisas en conjunto con las escobillas para asegurar visibilidad óptima al conducir",
      "Refrigerar los frenos delanteros",
      "Lubricar la correa de accesorios",
      "Descongelar el tubo de escape"
    ],
    "correctIndex": 0,
    "explanation": "Contiene agua desmineralizada, tensoactivos y anticongelante (alcohol) para despejar el campo visual sin rayar el cristal ni obstruir los difusores.",
    "skill": "Seguridad Pasiva y Visibilidad",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fluidos del Vehículo",
    "subtopic": "Líquido Lavaparabrisas"
  },
  {
    "id": "mec-bas-39",
    "sectionId": 1,
    "number": 39,
    "text": "¿Por qué no se debe utilizar agua corriente del grifo en lugar de líquido refrigerante formulado con etilenglicol en el motor?",
    "options": [
      "Porque el agua común contiene minerales que generan sarro, corroe los metales del motor, hierve a solo 100 °C y se congela a 0 °C agrietando el bloque motor",
      "Porque el agua del grifo apaga la chispa de las bujías",
      "Porque el agua corriente desgasta las pastillas de freno",
      "Porque el agua atrae rayos durante tormentas eléctricas"
    ],
    "correctIndex": 0,
    "explanation": "El refrigerante comercial posee inhibidores de corrosión, cavitación y aditivos que elevan el punto de ebullición a ~125 °C y reducen el de congelación a -35 °C.",
    "skill": "Propiedades de Fluidos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Refrigeración",
    "subtopic": "Refrigerante vs Agua Corriente"
  },
  {
    "id": "mec-bas-40",
    "sectionId": 1,
    "number": 40,
    "text": "¿Qué indica la presencia de un humo blanco denso y continuo con olor dulce saliendo por el tubo de escape de un vehículo?",
    "options": [
      "Posible fuga de líquido refrigerante hacia el interior de los cilindros debido a una junta de culata dañada o culata agrietada",
      "Consumo normal de combustible en verano",
      "Excelente estado de los amortiguadores",
      "Filtro de aire recién cambiado"
    ],
    "correctIndex": 0,
    "explanation": "El etilenglicol quemado en la cámara de combustión produce vapor blanco espeso con característico olor dulce, síntoma inequívoco de paso de refrigerante.",
    "skill": "Diagnóstico Visual Básico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Diagnóstico de Síntomas",
    "subtopic": "Humo Blanco en el Escape"
  },
  {
    "id": "mec-bas-41",
    "sectionId": 1,
    "number": 41,
    "text": "¿Para qué sirve una llave dinamométrica (o torquímetro) en el taller mecánico automotriz?",
    "options": [
      "Para aplicar un par de apriete (torque) preciso y controlado a tuercas y pernos según la especificación del fabricante en N·m o lb·pie",
      "Para aflojar tornillos atascados golpeándolos con un martillo",
      "Para medir la longitud de las mangueras de freno",
      "Para cortar cables eléctricos del encendido"
    ],
    "correctIndex": 0,
    "explanation": "Un apriete insuficiente provoca aflojamiento por vibración; un apriete excesivo estira o corta pernos y deforma piezas críticas como culatas y bielas.",
    "skill": "Herramientas de Precisión",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Herramientas del Taller",
    "subtopic": "Llave Dinamométrica (Torquímetro)"
  },
  {
    "id": "mec-bas-42",
    "sectionId": 1,
    "number": 42,
    "text": "¿Qué instrumento de medición dimensional se utiliza para verificar la holgura o luz de calibración de las bujías y taqués mecánicos de válvulas?",
    "options": [
      "Galga de espesores (feeler gauge o calibrador de láminas)",
      "Cinta métrica metálica de construcción",
      "Nivel de burbuja",
      "Balanza de precisión"
    ],
    "correctIndex": 0,
    "explanation": "El calibrador de láminas consta de hojas de acero rectificado de espesores calibrados desde centésimas de milímetro (ej. 0.05 mm a 1.00 mm).",
    "skill": "Medición Mecánica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Herramientas de Medición",
    "subtopic": "Galga de Espesores (Láminas)"
  },
  {
    "id": "mec-bas-43",
    "sectionId": 1,
    "number": 43,
    "text": "¿Qué instrumento de medición permite medir con precisión milimétrica y fraccional (nonio) diámetros exteriores, interiores y profundidades?",
    "options": [
      "Calibre pie de rey (vernier)",
      "Regla escolar de plástico",
      "Transportador de ángulos",
      "Cronómetro digital"
    ],
    "correctIndex": 0,
    "explanation": "El pie de rey cuenta con mordazas para exteriores, orejetas para interiores y varilla de profundidad, leyendo hasta 0.02 mm o 0.05 mm con el nonio.",
    "skill": "Metrología Taller",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Herramientas de Precisión",
    "subtopic": "Calibre Pie de Rey"
  },
  {
    "id": "mec-bas-44",
    "sectionId": 1,
    "number": 44,
    "text": "¿Qué instrumento de alta precisión micrométrica se utiliza para medir el desgaste y ovalización de los muñones del cigüeñal y falda de pistones?",
    "options": [
      "Micrómetro (palmer) de exteriores",
      "Nivel láser",
      "Alicate de presión",
      "Torno mecánico"
    ],
    "correctIndex": 0,
    "explanation": "El micrómetro mide con resolución de milésimas de milímetro (0.001 mm), indispensable para comprobar tolerancias estrictas de holguras de lubricación.",
    "skill": "Metrología de Precisión",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Herramientas de Precisión",
    "subtopic": "Micrómetro de Exteriores"
  },
  {
    "id": "mec-bas-45",
    "sectionId": 1,
    "number": 45,
    "text": "¿Cuál es la herramienta manual diseñada específicamente para desmontar y montar filtros de aceite blindados de tipo roscado?",
    "options": [
      "Llave extractora de filtro de aceite (de cadena, banda o cazoleta)",
      "Tijera para lámina",
      "Destornillador plano golpeado con maza",
      "Cincel neumático"
    ],
    "correctIndex": 0,
    "explanation": "Las llaves de cazoleta o de fleje abrazan el cuerpo cilíndrico del filtro permitiendo desenroscarlo sin aplastarlo ni dañar el bloque motor.",
    "skill": "Herramientas de Servicio",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mantenimiento Preventivo",
    "subtopic": "Extractor de Filtro de Aceite"
  },
  {
    "id": "mec-bas-46",
    "sectionId": 1,
    "number": 46,
    "text": "¿Qué tipo de llave para tuercas ofrece mayor agarre periférico completo en pernos hexagonales reduciendo el riesgo de redondear sus aristas?",
    "options": [
      "Llave de estrella (de vaso o hexagonal de 6 caras)",
      "Llave ajustable (llave inglesa / perico) con holgura",
      "Alicate universal",
      "Mordaza de presión desgastada"
    ],
    "correctIndex": 0,
    "explanation": "Los vasos y llaves de 6 caras contactan los planos de la tuerca alejándose de los vértices, evitando deformar y redondear la cabeza del perno.",
    "skill": "Uso de Herramientas Manuales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Herramientas Manuales",
    "subtopic": "Llaves de Vaso Hexagonales"
  },
  {
    "id": "mec-bas-47",
    "sectionId": 1,
    "number": 47,
    "text": "¿Para qué se utiliza un manómetro de compresión de motor (compresómetro)?",
    "options": [
      "Para medir la presión máxima de compresión que alcanza cada cilindro durante la carrera de compresión accionando el arranque",
      "Para medir la presión de aire de las ruedas",
      "Para verificar la tensión de la correa del alternador",
      "Para comprobar el volumen de la radio"
    ],
    "correctIndex": 0,
    "explanation": "Se enrosca en el orificio de la bujía o inyector; valores bajos o disparejos entre cilindros denotan fuga por válvulas quemadas, aros desgastados o junta de culata soplada.",
    "skill": "Diagnóstico Mecánico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Diagnóstico del Motor",
    "subtopic": "Prueba de Compresión"
  },
  {
    "id": "mec-bas-48",
    "sectionId": 1,
    "number": 48,
    "text": "¿Cuál es la función del densímetro de refrigerante o refractómetro?",
    "options": [
      "Medir la concentración porcentual de etilenglicol en el refrigerante para conocer la temperatura de protección contra congelación y ebullición",
      "Pesar las piezas metálicas del motor",
      "Medir el diámetro de las válvulas",
      "Comprobar el nivel de gasolina en el depósito"
    ],
    "correctIndex": 0,
    "explanation": "El refractómetro óptico mide la refracción de la luz a través de una gota de fluido, indicando al instante el punto de congelación exacto del líquido refrigerante.",
    "skill": "Inspección de Fluidos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Herramientas de Diagnóstico",
    "subtopic": "Refractómetro de Refrigerante"
  },
  {
    "id": "mec-bas-49",
    "sectionId": 1,
    "number": 49,
    "text": "¿Qué herramienta se utiliza para sujetar de forma segura una pieza mientras se corta, lima o taladra en el banco de trabajo del taller?",
    "options": [
      "Tornillo de banco (prensa de banco)",
      "Destornillador de estrella",
      "Cinta aislante",
      "Soplete de gas"
    ],
    "correctIndex": 0,
    "explanation": "El tornillo de banco anclado a la mesa proporciona una fijación sólida e inamovible, permitiendo trabajar con ambas manos libres y máxima seguridad.",
    "skill": "Equipamiento de Taller",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Instalaciones del Taller",
    "subtopic": "Tornillo de Banco"
  },
  {
    "id": "mec-bas-50",
    "sectionId": 1,
    "number": 50,
    "text": "¿Para qué se utiliza una pistola estroboscópica (lámpara de tiempo de encendido)?",
    "options": [
      "Para verificar y ajustar el punto de encendido (avance de la chispa) sincronizado con las marcas del volante o polea del cigüeñal",
      "Para iluminar el maletero del vehículo de noche",
      "Para calentar el motor antes de encenderlo",
      "Para soldar chapas de la carrocería"
    ],
    "correctIndex": 0,
    "explanation": "Conectada al cable de la bujía del cilindro 1, emite un destello de luz sincronizado con la chispa; visualmente 'congela' las marcas de grados en la polea giratoria.",
    "skill": "Ajuste de Motores",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Encendido",
    "subtopic": "Pistola Estroboscópica de Encendido"
  },
  {
    "id": "mec-bas-51",
    "sectionId": 1,
    "number": 51,
    "text": "Al levantar un vehículo con un gato hidráulico (gato de patín o botella) para trabajar debajo de él, ¿cuál es la regla de seguridad OBLIGATORIA?",
    "options": [
      "Nunca colocarse debajo sostenido únicamente por el gato; se deben colocar siempre caballetes o torres de soporte mecánicas en los puntos de apoyo del chasis",
      "Dejar el motor en marcha en punto muerto",
      "Colocar ladrillos de arcilla huecos debajo de las ruedas",
      "Bajar los vidrios del vehículo antes de subirlo"
    ],
    "correctIndex": 0,
    "explanation": "Los gatos hidráulicos dependen de sellos de goma y válvulas que pueden fallar repentinamente; las torres de soporte mecánicas homologadas garantizan apoyo estructural rígido inamovible.",
    "skill": "Seguridad y Elevación de Vehículos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad en el Taller",
    "subtopic": "Uso de Torres de Soporte (Caballetes)"
  },
  {
    "id": "mec-bas-52",
    "sectionId": 1,
    "number": 52,
    "text": "¿Qué equipo de protección individual (EPI) es indispensable para proteger los ojos durante operaciones de esmerilado, soplado con aire a presión o trabajo bajo el vehículo?",
    "options": [
      "Gafas de seguridad con protección lateral contra impactos",
      "Gafas de sol oscuras convencionales",
      "Lentes de contacto sin protección",
      "Gorra de tela con visera"
    ],
    "correctIndex": 0,
    "explanation": "Las gafas de seguridad certificadas (ANSI Z87.1 / EN 166) resisten impactos de esquirlas metálicas, gotas corrosivas y partículas de óxido desprendidas.",
    "skill": "Equipos de Protección Individual",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad en el Taller",
    "subtopic": "Protección Ocular"
  },
  {
    "id": "mec-bas-53",
    "sectionId": 1,
    "number": 53,
    "text": "¿Por qué está estrictamente prohibido usar pulseras, relojes metálicos, anillos o ropa holgada mientras se trabaja cerca del vano motor con el motor en marcha?",
    "options": [
      "Porque pueden ser atrapados por correas, poleas o ventiladores en rotación, o causar cortocircuitos severos con los bornes positivos de la batería",
      "Porque ensucian las joyas con grasa",
      "Porque reducen la potencia del motor",
      "Porque interfieren con la señal del GPS"
    ],
    "correctIndex": 0,
    "explanation": "Un anillo o reloj que toque el terminal positivo de la batería y masa cierra cientos de amperios al rojo vivo en milisegundos provocando quemaduras o amputaciones por atrapamiento en poleas.",
    "skill": "Prevención de Riesgos Laborales",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad en el Taller",
    "subtopic": "Riesgos de Atrapamiento y Contacto Eléctrico"
  },
  {
    "id": "mec-bas-54",
    "sectionId": 1,
    "number": 54,
    "text": "¿Qué tipo de extintor de incendios es el más adecuado para combatir fuegos provocados por líquidos inflamables (gasolina, aceite, disolventes) e instalaciones eléctricas?",
    "options": [
      "Extintor de polvo químico seco (ABC) o de dióxido de carbono (CO₂)",
      "Extintor de agua presurizada a chorro",
      "Una manguera de jardín conectada a la red de agua",
      "Un balde de plástico vacío"
    ],
    "correctIndex": 0,
    "explanation": "El agua propaga los líquidos inflamables (que flotan en ella) y conduce la electricidad provocando electrocución; el polvo químico y el CO₂ sofocan el fuego sin agua.",
    "skill": "Prevención de Incendios",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad contra Incendios",
    "subtopic": "Extintores Clase B y C"
  },
  {
    "id": "mec-bas-55",
    "sectionId": 1,
    "number": 55,
    "text": "¿Por qué NUNCA se debe mantener un motor de combustión interna encendido en un taller cerrado sin un sistema de extracción de humos conectado al tubo de escape?",
    "options": [
      "Porque emite monóxido de carbono (CO), un gas incoloro, inodoro y altamente letal que causa asfixia química y muerte en pocos minutos",
      "Porque el humo mancha las paredes del taller",
      "Porque el ruido agota la batería del vehículo",
      "Porque se consume el combustible demasiado rápido"
    ],
    "correctIndex": 0,
    "explanation": "El monóxido de carbono se une a la hemoglobina con una afinidad 200 veces superior a la del oxígeno, impidiendo el transporte de oxígeno celular sin que la persona lo perciba.",
    "skill": "Salud y Toxicología Ocupacional",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad en el Taller",
    "subtopic": "Intoxicación por Monóxido de Carbono (CO)"
  },
  {
    "id": "mec-bas-56",
    "sectionId": 1,
    "number": 56,
    "text": "¿Qué calzado de seguridad es obligatorio utilizar en el taller automotriz para prevenir lesiones?",
    "options": [
      "Botas de seguridad con puntera de acero o composite reforzada y suela antideslizante resistente a hidrocarburos",
      "Sandalias abiertas de verano",
      "Zapatos de tela ligeros",
      "Zapatos de vestir con suela de cuero resbaladiza"
    ],
    "correctIndex": 0,
    "explanation": "La puntera protege contra caídas de herramientas pesadas o discos de freno, y la suela antideslizante previene resbalones graves en pisos con restos de aceite.",
    "skill": "Protección Personal",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad Laboral",
    "subtopic": "Calzado de Seguridad en Taller"
  },
  {
    "id": "mec-bas-57",
    "sectionId": 1,
    "number": 57,
    "text": "¿Cómo se debe almacenar de forma segura los trapos o papeles empapados con gasolina, disolventes o aceite en el taller?",
    "options": [
      "En contenedores metálicos cerrados con pedal y tapa hermética autoextinguible",
      "Tirados en una esquina sobre el suelo de madera",
      "En una caja de cartón cerca del soplete de soldadura",
      "En los bolsillos de la ropa de trabajo"
    ],
    "correctIndex": 0,
    "explanation": "Los trapos con solventes y aceites de linaza/secantes pueden sufrir combustión espontánea por oxidación exotérmica si se acumulan en cajas abiertas.",
    "skill": "Gestión de Residuos Peligrosos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad en el Taller",
    "subtopic": "Almacenamiento de Residuos Inflamables"
  },
  {
    "id": "mec-bas-58",
    "sectionId": 1,
    "number": 58,
    "text": "¿Qué elemento de retención mecánica se debe colocar en las ruedas del vehículo que permanecen en el suelo antes de elevar el eje contrario con el gato?",
    "options": [
      "Calzos o cuñas para ruedas (wheel chocks)",
      "Un trozo de cuerda fina",
      "Una lata de refresco",
      "Un cono de plástico ligero"
    ],
    "correctIndex": 0,
    "explanation": "Las cuñas mecánicas colocadas delante y detrás de las ruedas apoyadas impiden el desplazamiento longitudinal accidental del automóvil al elevarlo.",
    "skill": "Técnicas de Elevación Segura",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad en el Taller",
    "subtopic": "Uso de Cuñas para Ruedas"
  },
  {
    "id": "mec-bas-59",
    "sectionId": 1,
    "number": 59,
    "text": "¿Por qué el aceite usado de motor NUNCA debe verterse en el alcantarillado, desagües o suelo?",
    "options": [
      "Porque es un residuo peligroso tóxico que contamina millones de litros de agua potable y destruye los ecosistemas, debiendo ser recolectado para reciclaje",
      "Porque tapa las tuberías de plástico instantáneamente con hielo",
      "Porque hace que las alcantarillas huelan a perfume",
      "Porque atrae a los perros del vecindario"
    ],
    "correctIndex": 0,
    "explanation": "Un solo litro de aceite usado contamina un millón de litros de agua y contiene metales pesados (plomo, cadmio) y compuestos aromáticos policíclicos cancerígenos.",
    "skill": "Responsabilidad Ambiental",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Gestión Ambiental en Talleres",
    "subtopic": "Disposición del Aceite Usado"
  },
  {
    "id": "mec-bas-60",
    "sectionId": 1,
    "number": 60,
    "text": "¿Cuál es el primer paso de seguridad antes de realizar cualquier intervención en el sistema eléctrico o desmontar el motor de arranque?",
    "options": [
      "Desconectar el borne negativo de la batería del vehículo y aislarlo",
      "Encender todas las luces altas y la radio",
      "Lavar la batería con agua a presión",
      "Quitar los tapones de las ruedas"
    ],
    "correctIndex": 0,
    "explanation": "Desconectar primero el borne negativo corta la masa general del chasis, impidiendo cortocircuitos catastróficos si una herramienta metálica toca el chasis al manipular terminales vivos.",
    "skill": "Seguridad Eléctrica Automotriz",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad en el Taller",
    "subtopic": "Desconexión de Batería"
  },
  {
    "id": "mec-bas-61",
    "sectionId": 1,
    "number": 61,
    "text": "En la nomenclatura de un neumático como '205/55 R 16 91V', ¿qué significa el primer número '205'?",
    "options": [
      "El ancho nominal del neumático de flanco a flanco expresado en milímetros",
      "El diámetro de la llanta en pulgadas",
      "La velocidad máxima permitida en km/h",
      "La presión recomendada en libras por pulgada cuadrada"
    ],
    "correctIndex": 0,
    "explanation": "205 indica un ancho de sección de 205 mm; 55 es la relación de aspecto (altura del flanco = 55% de 205 mm); R indica estructura radial; y 16 es el diámetro del rin en pulgadas.",
    "skill": "Interpretación de Neumáticos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Ruedas y Neumáticos",
    "subtopic": "Marcado y Medidas de Neumáticos"
  },
  {
    "id": "mec-bas-62",
    "sectionId": 1,
    "number": 62,
    "text": "¿Qué instrumento portátil se utiliza para medir la presión de inflado del aire de los neumáticos?",
    "options": [
      "Manómetro de neumáticos (indicador de presión en PSI o bar)",
      "Termómetro infrarrojo de cocina",
      "Regla graduada",
      "Higrómetro ambiental"
    ],
    "correctIndex": 0,
    "explanation": "El manómetro se acopla a la válvula Schrader del neumático para verificar si cumple la presión recomendada por la placa del fabricante del vehículo.",
    "skill": "Mantenimiento de Ruedas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Presión de Neumáticos",
    "subtopic": "Uso del Manómetro de Neumáticos"
  },
  {
    "id": "mec-bas-63",
    "sectionId": 1,
    "number": 63,
    "text": "¿Por qué la presión de los neumáticos debe medirse siempre en 'frío' (antes de rodar o habiendo rodado menos de 2 km)?",
    "options": [
      "Porque la fricción con el asfalto al rodar calienta el aire interno aumentando la presión; medir en caliente daría una lectura falsamente elevada",
      "Porque los neumáticos se encogen con el calor",
      "Porque el manómetro se descalibra si hace calor",
      "Porque las llantas se pinchan más fácilmente si se miden calientes"
    ],
    "correctIndex": 0,
    "explanation": "Por la ley de los gases, la temperatura eleva la presión entre 3 y 5 PSI al rodar; los valores nominales del fabricante están calculados para neumáticos a temperatura ambiente.",
    "skill": "Buenas Prácticas de Mantenimiento",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mantenimiento Preventivo",
    "subtopic": "Medición de Presión en Frío"
  },
  {
    "id": "mec-bas-64",
    "sectionId": 1,
    "number": 64,
    "text": "¿Qué consecuencia produce conducir habitualmente con los neumáticos con una presión de inflado significativamente MENOR a la especificada?",
    "options": [
      "Desgaste prematuro y excesivo en los dos hombros exteriores de la banda de rodadura, aumento del consumo de combustible y sobrecalentamiento del neumático",
      "Desgaste concentrado exclusivamente en el centro de la banda",
      "Aumento en la velocidad máxima del automóvil",
      "Reducción de la distancia de frenado en mojado"
    ],
    "correctIndex": 0,
    "explanation": "Con baja presión, el centro del neumático se deforma hacia adentro apoyando solo los bordes laterales (hombros), elevando la resistencia a la rodadura y el riesgo de reventón.",
    "skill": "Diagnóstico de Desgaste de Neumáticos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Desgaste de Neumáticos",
    "subtopic": "Efectos del Subinflado"
  },
  {
    "id": "mec-bas-65",
    "sectionId": 1,
    "number": 65,
    "text": "¿Qué consecuencia produce conducir con los neumáticos con una presión de inflado excesivamente MAYOR a la recomendada (sobreinflado)?",
    "options": [
      "Desgaste acelerado y prematuro concentrado en la parte central de la banda de rodadura y marcha más dura con menor adherencia",
      "Desgaste en los costados exteriores",
      "El neumático se congela en carretera",
      "El automóvil frena mejor sobre hielo"
    ],
    "correctIndex": 0,
    "explanation": "El sobreinflado deforma la banda de rodadura haciéndola abultarse en el centro, reduciendo la superficie de huella de contacto útil y aumentando la vibración transmitida a la suspensión.",
    "skill": "Mantenimiento de Ruedas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Neumáticos",
    "subtopic": "Efectos del Sobreinflado"
  },
  {
    "id": "mec-bas-66",
    "sectionId": 1,
    "number": 66,
    "text": "¿Cuál es la profundidad mínima legal permitida de los surcos de la banda de rodadura de un neumático para turismo en la mayoría de los países?",
    "options": [
      "1.6 milímetros (indicado por los testigos de desgaste TWI en el surco)",
      "10.0 milímetros",
      "0.1 milímetros",
      "5.5 milímetros"
    ],
    "correctIndex": 0,
    "explanation": "Por debajo de 1.6 mm el neumático pierde la capacidad de evacuar agua provocando hidroplaneo (aquaplaning); los testigos TWI en relieve dentro del surco señalan cuando se alcanza este límite crítico.",
    "skill": "Seguridad Vial y Neumáticos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Inspección de Neumáticos",
    "subtopic": "Profundidad Mínima y Testigo TWI"
  },
  {
    "id": "mec-bas-67",
    "sectionId": 1,
    "number": 67,
    "text": "¿Cuál es el propósito de realizar la 'Rotación periódica de los neumáticos' cada 10.000 km?",
    "options": [
      "Uniformar el desgaste desigual entre los neumáticos delanteros (que soportan tracción, dirección y más peso) y traseros, prolongando su vida útil",
      "Cambiar el color de los neumáticos",
      "Aumentar el tamaño de las llantas",
      "Limpiar el interior de los rines"
    ],
    "correctIndex": 0,
    "explanation": "Los neumáticos del eje motriz y directriz se degradan hasta el doble de rápido; alternarlos de posición según patrones cruzados o lineales equilibra el desgaste en las cuatro ruedas.",
    "skill": "Mantenimiento Periódico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Rotación de Ruedas",
    "subtopic": "Patrones de Rotación de Neumáticos"
  },
  {
    "id": "mec-bas-68",
    "sectionId": 1,
    "number": 68,
    "text": "¿Cuál es la función del amortiguador en el sistema de suspensión del vehículo?",
    "options": [
      "Disipar y frenar rápidamente las oscilaciones y rebotes del muelle/resorte para mantener las ruedas permanentemente en contacto con el suelo",
      "Soportar el peso estático de la carrocería",
      "Hacer girar las ruedas al accionar el volante",
      "Detener la rotación de las ruedas al frenar"
    ],
    "correctIndex": 0,
    "explanation": "Los resortes soportan el peso pero rebotarían indefinidamente tras un bache; el amortiguador hidráulico convierte la energía de oscilación en calor forzando aceite por pequeñas válvulas.",
    "skill": "Dinámica de la Suspensión",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Suspensión",
    "subtopic": "El Amortiguador"
  },
  {
    "id": "mec-bas-69",
    "sectionId": 1,
    "number": 69,
    "text": "¿Qué componente mecánico del sistema de frenos de disco aprieta las pastillas contra las caras del disco para detener la rueda por fricción?",
    "options": [
      "La pinza de freno (cáliper)",
      "El tambor de freno",
      "La rótula de dirección",
      "El brazo de suspensión"
    ],
    "correctIndex": 0,
    "explanation": "El cáliper contiene los pistones hidráulicos que empujan las pastillas de material de fricción contra el rotor de freno metálico giratorio.",
    "skill": "Componentes de Frenado",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Frenos",
    "subtopic": "Pinza o Cáliper de Freno"
  },
  {
    "id": "mec-bas-70",
    "sectionId": 1,
    "number": 70,
    "text": "¿Qué síntoma típico indica que las pastillas de freno han llegado al final de su vida útil y deben reemplazarse de inmediato?",
    "options": [
      "Un chirrido metálico agudo constante al pisar el pedal de freno provocado por la lengüeta metálica testigo de desgaste",
      "Las luces delanteras parpadean",
      "El motor no enciende por las mañanas",
      "El volante se calienta al tacto"
    ],
    "correctIndex": 0,
    "explanation": "Las pastillas incluyen una chapa acústica testigo que roza el disco al quedar menos de 2 mm de material, advirtiendo al conductor antes de dañar el rotor de freno metal contra metal.",
    "skill": "Diagnóstico de Frenos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Frenos",
    "subtopic": "Testigo de Desgaste de Pastillas"
  },
  {
    "id": "mec-bas-71",
    "sectionId": 1,
    "number": 71,
    "text": "¿Cuál es el voltaje nominal estándar en reposo de una batería de plomo-ácido de 12V automotriz en buen estado y con plena carga?",
    "options": [
      "Aproximadamente 12.6 a 12.8 voltios",
      "Exactamente 6.0 voltios",
      "24.5 voltios",
      "1.5 voltios"
    ],
    "correctIndex": 0,
    "explanation": "Cada una de las 6 celdas de plomo-ácido genera ~2.1V en circuito abierto; un valor de 12.0V indica 50% de descarga y por debajo de 11.8V se considera batería descargada.",
    "skill": "Electricidad Automotriz Básica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Batería y Encendido",
    "subtopic": "Voltaje en Circuito Abierto"
  },
  {
    "id": "mec-bas-72",
    "sectionId": 1,
    "number": 72,
    "text": "¿Qué voltaje debe medir un multímetro en los bornes de la batería con el motor en marcha a ralentí para confirmar que el alternador está cargando correctamente?",
    "options": [
      "Entre 13.8V y 14.5V aproximadamente",
      "Menos de 10.0V",
      "Exactamente 5.0V",
      "Más de 25.0V"
    ],
    "correctIndex": 0,
    "explanation": "El alternador con su regulador de voltaje debe entregar entre 13.8V y 14.5V para alimentar los consumidores del vehículo y recargar la energía consumida durante el arranque.",
    "skill": "Comprobación del Sistema de Carga",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Carga",
    "subtopic": "Voltaje de Carga del Alternador"
  },
  {
    "id": "mec-bas-73",
    "sectionId": 1,
    "number": 73,
    "text": "¿Qué sustancia corrosiva de color blanco o verdoso suele acumularse en los bornes de la batería y cómo afecta el arranque?",
    "options": [
      "Sulfato de plomo y sales por vapores ácidos, que aumentan la resistencia eléctrica provocando dificultad o fallo en el arranque",
      "Moho natural que no afecta la corriente",
      "Cera protectora de fábrica que no debe tocarse",
      "Pintura desprendida del capó"
    ],
    "correctIndex": 0,
    "explanation": "La sulfatación aísla los terminales impidiendo el paso de los cientos de amperios que exige el motor de arranque; se limpia con agua caliente, bicarbonato y cepillo de cerdas de cobre.",
    "skill": "Mantenimiento de Batería",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema Eléctrico",
    "subtopic": "Sulfatación de Bornes"
  },
  {
    "id": "mec-bas-74",
    "sectionId": 1,
    "number": 74,
    "text": "Al conectar cables pasacorriente (jump starters) entre dos vehículos para auxiliar una batería descargada, ¿cuál es el orden correcto de conexión para máxima seguridad?",
    "options": [
      "1. Positivo (+) con Positivo (+); 2. Negativo (-) del vehículo auxiliar a un punto metálico sin pintar del chasis/bloque del vehículo varado (lejos de la batería)",
      "Negativo a Positivo directamente para cruzar los polos",
      "Conectar primero todos los negativos al parabrisas",
      "El orden no importa en ningún caso"
    ],
    "correctIndex": 0,
    "explanation": "Conectar el último cable a tierra en el chasis alejado de la batería descargada evita que la chispa inevitable inflame los gases de hidrógeno que emana una batería sometida a carga rápida.",
    "skill": "Procedimiento de Puenteo de Batería",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad Eléctrica",
    "subtopic": "Puenteo Seguro de Baterías"
  },
  {
    "id": "mec-bas-75",
    "sectionId": 1,
    "number": 75,
    "text": "¿Qué componente del sistema eléctrico interrumpe la corriente fundiéndose cuando ocurre un cortocircuito o sobrecarga protegiendo la instalación del vehículo?",
    "options": [
      "El fusible eléctrico",
      "El solenoide de arranque",
      "La bocina (claxon)",
      "El pedal del acelerador"
    ],
    "correctIndex": 0,
    "explanation": "El fusible contiene una lámina de aleación calibrada (ej. 10A, 15A, 20A) que se funde por efecto Joule al superar su corriente nominal, evitando incendios en el mazo de cables.",
    "skill": "Protección de Circuitos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Electricidad Automotriz",
    "subtopic": "Fusibles Automotrices"
  },
  {
    "id": "mec-bas-76",
    "sectionId": 1,
    "number": 76,
    "text": "¿Por qué NUNCA se debe reemplazar un fusible fundido por otro de mayor amperaje o puentearlo con un alambre de cobre?",
    "options": [
      "Porque el cableado original no soportará la sobrecarga sin fundirse, pudiendo incendiarse el vehículo",
      "Porque se congela el depósito de gasolina",
      "Porque se desgastan las escobillas del limpiaparabrisas",
      "Porque se descarga el gas del aire acondicionado"
    ],
    "correctIndex": 0,
    "explanation": "El fusible es el eslabón más débil del circuito a propósito; sobredimensionarlo anula la protección térmica y traslada el calor destructivo a los cables en el interior del tablero.",
    "skill": "Seguridad Eléctrica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Fusibles y Protección",
    "subtopic": "Riesgos de Sobredimensionar Fusibles"
  },
  {
    "id": "mec-bas-77",
    "sectionId": 1,
    "number": 77,
    "text": "¿Cuál es la función del motor de arranque (starter motor) en el automóvil?",
    "options": [
      "Un motor eléctrico potente que engrana temporalmente con la corona del volante de inercia para hacer girar el cigüeñal hasta que el motor térmico inicie sus explosiones autónomas",
      "Cargar la batería mientras el vehículo viaja en autopista",
      "Accionar la bomba de combustible manual",
      "Girar el ventilador del radiador cuando sube la temperatura"
    ],
    "correctIndex": 0,
    "explanation": "Mediante el piñón bendix, el motor de arranque vence la compresión inicial de los cilindros girando a unas 150-250 RPM durante 2 o 3 segundos para que arranque el motor térmico.",
    "skill": "Sistema de Arranque",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Tren de Encendido",
    "subtopic": "El Motor de Arranque"
  },
  {
    "id": "mec-bas-78",
    "sectionId": 1,
    "number": 78,
    "text": "¿Qué función cumple la correa de accesorios (o correa serpentina poli-V) en el motor?",
    "options": [
      "Transmitir el movimiento rotatorio de la polea del cigüeñal a componentes periféricos como el alternador, la bomba de agua, la bomba de dirección asistida y el compresor de A/C",
      "Sincronizar las válvulas con los pistones dentro del bloque",
      "Amortiguar los baches de la carretera",
      "Sujetar la batería firmemente en su bandeja"
    ],
    "correctIndex": 0,
    "explanation": "La correa poli-V mueve todos los auxiliares del motor mediante un tensor automático; si se rompe, se pierde la carga eléctrica del alternador y la asistencia de dirección/refrigeración.",
    "skill": "Sistemas Auxiliares del Motor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Transmisiones Auxiliares",
    "subtopic": "Correa de Accesorios (Poli-V)"
  },
  {
    "id": "mec-bas-79",
    "sectionId": 1,
    "number": 79,
    "text": "¿Qué elemento del sistema de escape reduce el ruido ensordecedor de los gases a alta presión expulsados por los cilindros?",
    "options": [
      "El silenciador (muffler)",
      "El colector de admisión",
      "La válvula EGR",
      "El sensor de oxígeno"
    ],
    "correctIndex": 0,
    "explanation": "El silenciador contiene cámaras de expansión, tubos perforados y laberintos que disipan la energía sonora mediante interferencia destructiva de ondas acústicas antes de salir a la atmósfera.",
    "skill": "Línea de Escape",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Escape",
    "subtopic": "Silenciador Acústico"
  },
  {
    "id": "mec-bas-80",
    "sectionId": 1,
    "number": 80,
    "text": "¿Cuál es el propósito del manual del propietario (o manual del fabricante) entregado con cada vehículo?",
    "options": [
      "Suministrar las especificaciones oficiales exactas de fluidos, presiones, capacidades, intervalos de mantenimiento programado y operación segura del vehículo",
      "Servir de soporte para apoyar el gato hidráulico",
      "Registrar los nombres de todos los operarios de la fábrica",
      "Envolver herramientas viejas en el maletero"
    ],
    "correctIndex": 0,
    "explanation": "El manual del fabricante es la fuente técnica oficial que indica qué norma de aceite usar, presiones de inflado, especificaciones de fusibles y periodicidad de cambio de correas y bujías.",
    "skill": "Documentación Técnica",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mantenimiento Preventivo",
    "subtopic": "Uso del Manual del Fabricante"
  },
  {
    "id": "mec-bas-81",
    "sectionId": 1,
    "number": 81,
    "text": "En una transmisión manual, ¿cuál es la función del sistema de embrague (clutch)?",
    "options": [
      "Acoplar y desacoplar mecánicamente el motor de la caja de cambios para permitir arrancar suavemente desde parado y cambiar de marcha sin dañar los engranajes",
      "Frenar las ruedas traseras al aparcar",
      "Acelerar el vehículo cuando se pisa a fondo",
      "Refrigerar el aceite de la transmisión"
    ],
    "correctIndex": 0,
    "explanation": "El disco de embrague fricciona contra el volante de inercia; pisar el pedal libera la presión del plato opresor, permitiendo sincronizar y engranar las marchas con el motor encendido.",
    "skill": "Sistema de Transmisión",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Embrague y Caja de Cambios",
    "subtopic": "Función del Embrague"
  },
  {
    "id": "mec-bas-82",
    "sectionId": 1,
    "number": 82,
    "text": "¿Qué componente de fricción es accionado en un freno de tambor para presionarse contra la pared interior del tambor cilíndrico giratorio?",
    "options": [
      "Las zapatas de freno (balatas)",
      "Las pastillas de disco cerámicas",
      "El cable del velocímetro",
      "El amortiguador telescópico"
    ],
    "correctIndex": 0,
    "explanation": "En los frenos de tambor, el bombín o cilindro de rueda empuja las zapatas curvadas hacia afuera contra la campana o tambor que gira solidaria a la rueda.",
    "skill": "Frenos de Tambor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Frenos",
    "subtopic": "Zapatas y Tambor de Freno"
  },
  {
    "id": "mec-bas-83",
    "sectionId": 1,
    "number": 83,
    "text": "¿Cómo actúa habitualmente el freno de estacionamiento (freno de mano tradicional de palanca o cable)?",
    "options": [
      "Tensa mecánicamente cables de acero que bloquean las zapatas o pastillas de las ruedas traseras sin depender de la presión hidráulica",
      "Apaga el motor cortando la chispa eléctrica",
      "Desinfla los neumáticos traseros",
      "Traba el volante de dirección"
    ],
    "correctIndex": 0,
    "explanation": "El freno de mano opera mediante un varillaje o cable bowden puramente mecánico como sistema de seguridad independiente que mantiene el coche frenado incluso si se pierde el líquido de frenos.",
    "skill": "Freno de Emergencia",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Frenos",
    "subtopic": "Freno de Estacionamiento Mecánico"
  },
  {
    "id": "mec-bas-84",
    "sectionId": 1,
    "number": 84,
    "text": "¿Qué es la 'Alineación de las ruedas' de un vehículo?",
    "options": [
      "El ajuste geométrico de los ángulos de convergencia/divergencia, caída (camber) y avance (caster) para que las ruedas rueden paralelas y perpendiculares al suelo",
      "Pintar las llantas en línea recta",
      "Comprobar el peso de los neumáticos en una balanza",
      "Alinear los asientos de los pasajeros"
    ],
    "correctIndex": 0,
    "explanation": "Una alineación correcta asegura estabilidad direccional, volante centrado y desgaste parejo de los neumáticos; desalineado produce que el vehículo 'tire' hacia un lado.",
    "skill": "Geometría de la Dirección",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Dirección y Suspensión",
    "subtopic": "Alineación y Ángulos Geométricos"
  },
  {
    "id": "mec-bas-85",
    "sectionId": 1,
    "number": 85,
    "text": "¿Qué síntoma se experimenta en el volante al conducir a alta velocidad (ej. 90-120 km/h) si las ruedas delanteras están desbalanceadas (desequilibradas)?",
    "options": [
      "Una vibración u oscilación rítmica en el volante que aumenta con la velocidad",
      "El vehículo frena de forma involuntaria",
      "El pedal del acelerador se endurece",
      "Las luces del tablero se apagan"
    ],
    "correctIndex": 0,
    "explanation": "El desbalanceo provoca una fuerza centrífuga despareja que hace vibrar la rueda; se soluciona colocando contrapesas de plomo/zinc en la llanta en la equilibradora.",
    "skill": "Equilibrado de Ruedas",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Ruedas y Neumáticos",
    "subtopic": "Equilibrado y Vibraciones"
  },
  {
    "id": "mec-bas-86",
    "sectionId": 1,
    "number": 86,
    "text": "¿Cuál es la función del filtro de combustible (gasolina o diésel)?",
    "options": [
      "Retener sedimentos, partículas de óxido e impurezas (y separar agua en motores diésel) antes de que el combustible llegue a la bomba de inyección e inyectores",
      "Enfriar el aire acondicionado de la cabina",
      "Aumentar la compresión de los cilindros",
      "Limpiar el aceite lubricante del motor"
    ],
    "correctIndex": 0,
    "explanation": "Los inyectores modernos trabajan con orificios microscópicos y tolerancias extremas; cualquier partícula o gota de agua taparía o erosionaría los inyectores de forma irreversible.",
    "skill": "Alimentación de Combustible",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Combustible",
    "subtopic": "Filtro de Combustible"
  },
  {
    "id": "mec-bas-87",
    "sectionId": 1,
    "number": 87,
    "text": "¿Qué líquido especial se utiliza en la mayoría de los sistemas de dirección asistida hidráulica tradicional?",
    "options": [
      "Fluido hidráulico de transmisión automática (ATF o fluidos específicos de dirección asistida)",
      "Agua destilada con jabón",
      "Líquido refrigerante verde",
      "Aceite de cocina vegetal"
    ],
    "correctIndex": 0,
    "explanation": "El fluido ATF o hidráulico sintético posee alta estabilidad térmica y propiedades antiespumantes para operar con la bomba de paletas de dirección a presiones de 80-120 bar.",
    "skill": "Fluidos Hidráulicos",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Dirección Asistida",
    "subtopic": "Fluido de Dirección Asistida"
  },
  {
    "id": "mec-bas-88",
    "sectionId": 1,
    "number": 88,
    "text": "¿Qué componente de goma estriada 'Guardapolvo' (fuelle de palier o fuelle de homocinética) protege las juntas homocinéticas de la transmisión?",
    "options": [
      "Retiene la grasa de bisulfuro de molibdeno e impide la entrada de agua, arena y polvo que destruirían las pistas y bolas de la junta homocinética",
      "Apaga el sonido del motor de arranque",
      "Mide la temperatura del aceite de caja",
      "Evita que se caigan las ruedas"
    ],
    "correctIndex": 0,
    "explanation": "Si el fuelle se rompe, la grasa sale expulsada y entra polvo; en pocos cientos de kilómetros la junta homocinética 'cruje' al girar y se destruye por abrasión.",
    "skill": "Mantenimiento del Tren Motriz",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Semiejes y Transmisión",
    "subtopic": "Guardapolvos y Juntas Homocinéticas"
  },
  {
    "id": "mec-bas-89",
    "sectionId": 1,
    "number": 89,
    "text": "¿Cuál es la función del catalizador (convertidor catalítico) en la línea de escape?",
    "options": [
      "Transformar mediante reacciones químicas de reducción y oxidación los gases tóxicos nocivos (CO, HC y NOx) en sustancias menos dañinas (CO₂, H₂O y N₂)",
      "Aumentar la potencia del motor un 50%",
      "Filtrar el aceite del cárter",
      "Comprimir el combustible dentro del depósito"
    ],
    "correctIndex": 0,
    "explanation": "Utiliza metales preciosos (platino, paladio y rodio) a más de 400 °C para convertir monóxido de carbono, hidrocarburos sin quemar y óxidos de nitrógeno en compuestos inocuos.",
    "skill": "Control de Emisiones",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Escape",
    "subtopic": "Convertidor Catalítico"
  },
  {
    "id": "mec-bas-90",
    "sectionId": 1,
    "number": 90,
    "text": "¿Qué advierte la luz testigo amarilla o roja con forma de tetera o aceitera iluminada en el cuadro de instrumentos mientras el motor está en marcha?",
    "options": [
      "Pérdida crítica de presión de aceite en el motor; se debe apagar el motor de inmediato para evitar la destrucción catastrófica del bloque",
      "Que el café está listo en la cabina",
      "Que es hora de encender las luces antiniebla",
      "Que el depósito del limpiaparabrisas tiene agua de más"
    ],
    "correctIndex": 0,
    "explanation": "Esta luz monitorea la presión de aceite hidrodinámica (con un manocontacto), no el nivel; si se ilumina rodando, significa lubricación nula y rotura inminente si no se apaga el motor.",
    "skill": "Interpretación de Testigos del Cuadro",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Testigos del Tablero",
    "subtopic": "Testigo de Presión de Aceite"
  },
  {
    "id": "mec-bas-91",
    "sectionId": 1,
    "number": 91,
    "text": "¿Qué advierte la luz testigo con el símbolo de una batería encendida en el cuadro de instrumentos mientras el vehículo circula?",
    "options": [
      "Que el alternador o sistema de carga ha dejado de recargar la batería, por lo que el vehículo funciona exclusivamente con la energía residual de la batería",
      "Que la batería está al 100% de carga y en perfecto estado",
      "Que las luces del techo están encendidas",
      "Que la radio tiene volumen alto"
    ],
    "correctIndex": 0,
    "explanation": "Indica un fallo en la generación eléctrica (correa rota, regulador o alternador averiado); el motor se apagará en cuanto la batería agote sus voltios para los sistemas de inyección.",
    "skill": "Diagnóstico de Tablero",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Carga",
    "subtopic": "Testigo de Batería / Alternador"
  },
  {
    "id": "mec-bas-92",
    "sectionId": 1,
    "number": 92,
    "text": "¿Qué indica la luz testigo 'Check Engine' (Mil - Malfunction Indicator Lamp) fija en el panel de instrumentos?",
    "options": [
      "Que la unidad de control del motor (ECU) ha detectado una avería o anomalía en el sistema de inyección, encendido o control de emisiones y ha registrado un código de falla (DTC)",
      "Que las puertas están mal cerradas",
      "Que se debe cambiar el agua del radiador",
      "Que el maletero está abierto"
    ],
    "correctIndex": 0,
    "explanation": "La luz MIL alerta sobre problemas que alteran la combustión o emisiones; se debe conectar un escáner OBD-II para leer el código de avería almacenado.",
    "skill": "Diagnóstico Electrónico Básico",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Diagnóstico a Bordo (OBD)",
    "subtopic": "Testigo Check Engine (MIL)"
  },
  {
    "id": "mec-bas-93",
    "sectionId": 1,
    "number": 93,
    "text": "¿Qué precaución básica se debe tener al lavar el vano motor de un vehículo para evitar averías eléctricas?",
    "options": [
      "Evitar dirigir chorros de agua a alta presión directamente sobre la caja de fusibles, la ECU, el alternador, conectores y bobinas de encendido",
      "Vaciar el aceite de motor antes de mojarlo",
      "Dejar las bujías desenroscadas durante el lavado",
      "Lavar exclusivamente con gasolina pura"
    ],
    "correctIndex": 0,
    "explanation": "El agua a alta presión penetra los sellos de goma de los conectores eléctricos provocando cortocircuitos, sulfatación interna y fallos intermitentes de encendido.",
    "skill": "Cuidado y Limpieza del Motor",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mantenimiento General",
    "subtopic": "Lavado del Vano Motor y Precauciones"
  },
  {
    "id": "mec-bas-94",
    "sectionId": 1,
    "number": 94,
    "text": "¿Cuál es la función del tapón de drenaje ubicado en la parte más baja del cárter de aceite?",
    "options": [
      "Permitir el vaciado total por gravedad del aceite viejo durante el servicio de cambio de aceite",
      "Llenar de gasolina el motor",
      "Regular la velocidad del ralentí",
      "Medir la presión de los neumáticos"
    ],
    "correctIndex": 0,
    "explanation": "Al retirar el tapón con el motor tibio, el aceite usado y las impurezas decantadas en el fondo escurren completamente hacia la bandeja recolectora.",
    "skill": "Procedimiento de Cambio de Aceite",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mantenimiento del Motor",
    "subtopic": "Tapón de Drenaje del Cárter"
  },
  {
    "id": "mec-bas-95",
    "sectionId": 1,
    "number": 95,
    "text": "¿Por qué se debe reemplazar siempre la arandela o arandela de cobre/aluminio del tapón de drenaje del cárter en cada cambio de aceite?",
    "options": [
      "Porque es una arandela de deformación programada que sella la rosca y evita fugas de aceite por goteo",
      "Porque la arandela se oxida en 5 minutos",
      "Porque cambia el color del aceite nuevo",
      "Porque la ley prohíbe usar arandelas de más de un uso"
    ],
    "correctIndex": 0,
    "explanation": "Al apretar el tapón al par especificado, la arandela blanda se deforma rellenando imperfecciones mecánicas; reutilizarla endurecida suele provocar pérdidas de aceite.",
    "skill": "Buenas Prácticas de Mantenimiento",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Cambio de Aceite",
    "subtopic": "Arandela de Cárter de Sellado"
  },
  {
    "id": "mec-bas-96",
    "sectionId": 1,
    "number": 96,
    "text": "¿Por qué se debe aplicar una fina película de aceite de motor limpio sobre la junta de goma del nuevo filtro de aceite antes de enroscarlo con la mano?",
    "options": [
      "Para facilitar el sellado hermético y evitar que la junta de goma se retuerza, deforme o se pegue rígidamente dificultando su posterior desmontaje",
      "Para que el filtro gire libremente mientras el motor funciona",
      "Para comprobar si el filtro flota en agua",
      "Para pintar el filtro de color negro"
    ],
    "correctIndex": 0,
    "explanation": "Lubricar la junta de goma asegura que deslice suavemente sobre el bloque al apretar a mano; una junta seca se pellizca provocando fugas masivas bajo presión.",
    "skill": "Técnicas de Montaje",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Cambio de Filtro de Aceite",
    "subtopic": "Lubricación de Junta del Filtro"
  },
  {
    "id": "mec-bas-97",
    "sectionId": 1,
    "number": 97,
    "text": "¿Qué tipo de escobilla se utiliza para limpiar el parabrisas y cada cuánto tiempo suele recomendarse su sustitución preventiva?",
    "options": [
      "Escobillas limpiaparabrisas de goma de cloropreno o silicona, reemplazándose normalmente cada 6 a 12 meses o ante ruidos y franjas de agua sin limpiar",
      "Escobillas de alambre de acero cada 10 años",
      "Cepillos de cerdas de plástico que no se cambian nunca",
      "Telas de algodón atadas con alambre"
    ],
    "correctIndex": 0,
    "explanation": "El sol, el ozono y el hielo cuartean el filo de goma de las escobillas, dejando estrías que comprometen peligrosamente la visibilidad nocturna y bajo lluvia.",
    "skill": "Mantenimiento de Seguridad",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Seguridad y Confort",
    "subtopic": "Escobillas Limpiaparabrisas"
  },
  {
    "id": "mec-bas-98",
    "sectionId": 1,
    "number": 98,
    "text": "¿Cuál es la función del freno de servicio asistido por 'Servofreno' (Booster por vacío)?",
    "options": [
      "Multiplicar la fuerza aplicada por el pie del conductor en el pedal de freno aprovechando el vacío del colector de admisión, haciendo el frenado suave y sin esfuerzo",
      "Generar aire caliente para la calefacción",
      "Cargar la batería durante las frenadas",
      "Hacer sonar una alarma al pisar el freno"
    ],
    "correctIndex": 0,
    "explanation": "El servofreno utiliza la depresión generada por el motor sobre un diafragma flexible para amplificar hasta 4 o 5 veces la fuerza ejercida en el émbolo de freno.",
    "skill": "Mecanismo de Frenado",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Sistema de Frenos",
    "subtopic": "Servofreno por Vacío (Booster)"
  },
  {
    "id": "mec-bas-99",
    "sectionId": 1,
    "number": 99,
    "text": "¿Qué elemento mecánico flexible colocado en el pedal del embrague desacopla la transmisión cuando el conductor lo pisa a fondo?",
    "options": [
      "El diafragma elástico de resorte del plato de presión",
      "El muelle del amortiguador trasero",
      "La varilla del aceite",
      "El limpiaparabrisas trasero"
    ],
    "correctIndex": 0,
    "explanation": "El cojinete de empuje presiona las lengüetas del muelle diafragma cónico, venciendo la presión sobre el disco y desacoplando el motor de la transmisión.",
    "skill": "Componentes del Embrague",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Embrague y Desembrague",
    "subtopic": "Muelle Diafragma del Embrague"
  },
  {
    "id": "mec-bas-100",
    "sectionId": 1,
    "number": 100,
    "text": "¿Qué revisión visual rápida de 360 grados debe realizar el conductor o técnico antes de emprender un viaje largo en carretera?",
    "options": [
      "Comprobar nivel de aceite, refrigerante y frenos, presión y estado de los 4 neumáticos y rueda de repuesto, funcionamiento de todas las luces y estado de las escobillas",
      "Lavar la tapicería y cambiar la emisora de radio",
      "Pintar el parachoques de color blanco",
      "Comprobar si el cenicero está vacío"
    ],
    "correctIndex": 0,
    "explanation": "Esta inspección preventiva básica de seguridad vial minimiza en más del 80% las causas comunes de averías y accidentes en carretera (pinchazos, sobrecalentamiento y falta de visibilidad).",
    "skill": "Inspección Preventiva de Seguridad",
    "difficulty": "Fácil",
    "educationalLevel": "Básico",
    "topic": "Mantenimiento Rutinario",
    "subtopic": "Chequeo Preventivo Pre-Viaje"
  }
];
