import { Question } from '../../types';

export const MEC_TECNICO_21_100: Question[] = [
  {
    "id": "mec-tec-21",
    "sectionId": 1,
    "number": 21,
    "text": "En un sistema de inyección diésel Common Rail moderno, ¿a qué rango de presiones extremas trabaja habitualmente el acumulador de alta presión (riel) en plena carga?",
    "options": [
      "Entre 1.600 y 2.500 bar (aproximadamente 23.000 a 36.000 PSI)",
      "Entre 2 y 5 bar",
      "Exactamente 50 bar",
      "Más de 50.000 bar"
    ],
    "correctIndex": 0,
    "explanation": "Las bombas de alta presión (como Bosch CP4 o Denso HP4) alcanzan hasta 2500 bar; esta ultra-alta presión atomiza el gasóleo en microgotas microscópicas logrando una mezcla casi perfecta con el aire.",
    "skill": "Inyección Diésel Common Rail",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Common Rail de Alta Presión",
    "subtopic": "Presión de Trabajo del Riel Diésel"
  },
  {
    "id": "mec-tec-22",
    "sectionId": 1,
    "number": 22,
    "text": "¿Cuál es la función de la válvula reguladora de caudal en la entrada de la bomba de alta presión (Válvula Dosificadora ZME / IMV / VCV)?",
    "options": [
      "Dosificar con precisión el volumen exacto de combustible que ingresa a los elementos de bombeo de alta presión según la demanda de la ECU, evitando comprimir combustible innecesario y reduciendo el calentamiento del gasóleo",
      "Apagar el motor de arranque",
      "Medir el nivel de aceite en el cárter",
      "Inyectar AdBlue en el escape"
    ],
    "correctIndex": 0,
    "explanation": "La regulación por el lado de baja presión (ZME) ahorra potencia al motor: la bomba solo comprime los mililitros estrictamente necesarios para alimentar el riel, sin requerir disipar calor comprimiendo y retornando gasóleo en exceso.",
    "skill": "Gestión de Presión en Bombas Diésel",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Bombas Common Rail",
    "subtopic": "Válvula Reguladora de Caudal ZME / IMV"
  },
  {
    "id": "mec-tec-23",
    "sectionId": 1,
    "number": 23,
    "text": "¿En qué consiste la prueba técnica de taller 'Retorno de Inyectores Common Rail' (Backleak Test) utilizando probetas graduadas?",
    "options": [
      "Medir y comparar el volumen de combustible que retorna de cada inyector a través de sus mangueras de sobrante en un tiempo determinado; un inyector con retorno anormalmente elevado delata desgaste en su válvula de control interna",
      "Comprobar el peso de las puntas de tobera con una báscula",
      "Comprobar si el gasóleo tiene color azul",
      "Verificar la compresión del motor mediante el escape"
    ],
    "correctIndex": 0,
    "explanation": "Si la válvula interna de la servoválvula del inyector está erosionada, fuga presión hacia el retorno; esto impide que el riel alcance la presión mínima de arranque (aprox. 200-250 bar), provocando que el motor gire pero no encienda.",
    "skill": "Diagnóstico Hidráulico de Inyectores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Pruebas de Inyección Diésel",
    "subtopic": "Prueba de Retorno de Inyectores (Backleak Test)"
  },
  {
    "id": "mec-tec-24",
    "sectionId": 1,
    "number": 24,
    "text": "¿Cuál es la función del 'Código IMA / IQA' (código de calibración alfanumérico) grabado en el cuerpo de cada inyector Common Rail nuevo?",
    "options": [
      "Indica a la ECU mediante programación por escáner las desviaciones y tolerancias microscópicas de caudal y tiempo de respuesta medidas en banco de pruebas de fábrica para que la ECU compense electrónicamente cada inyector",
      "Es el número de serie para reclamar la garantía comercial",
      "Indica la fecha de vencimiento del gasóleo",
      "Señala en qué rueda debe instalarse"
    ],
    "correctIndex": 0,
    "explanation": "Debido a tolerancias de micras en la fabricación, ningún inyector es idéntico; codificar el valor IMA en la ECU permite inyección equilibrada cilindro a cilindro (compensación selectiva de caudal).",
    "skill": "Programación y Calibración Diésel",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Calibración de Inyectores",
    "subtopic": "Codificación IMA / IQA por Escáner"
  },
  {
    "id": "mec-tec-25",
    "sectionId": 1,
    "number": 25,
    "text": "¿Qué advertencia estricta de seguridad se debe respetar al manipular tuberías metálicas de alta presión de un sistema Common Rail?",
    "options": [
      "NUNCA colocar las manos ni el cuerpo cerca de las tuberías o toberas con el motor en marcha: un microchorro a 2.000 bar perfora la piel humana instantáneamente inyectando combustible en el torrente sanguíneo con riesgo mortal de amputación y envenenamiento",
      "Esperar a que se enfríe la batería de 12V",
      "Tocar las mangueras con un trapo mojado en gasolina",
      "Desconectar el tubo de escape antes de revisar"
    ],
    "correctIndex": 0,
    "explanation": "La inyección subcutánea por fluido a ultra-alta presión parece un pinchazo menor al inicio pero destruye los tejidos celulares por necrosis química; exige cirugía urgente de desbridamiento hospitalario.",
    "skill": "Seguridad Industrial en Sistemas de Alta Presión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Seguridad en Taller Diésel",
    "subtopic": "Peligros de Inyección de Fluido a Alta Presión"
  },
  {
    "id": "mec-tec-26",
    "sectionId": 1,
    "number": 26,
    "text": "¿Qué sensor de presión de riel 'RPS' (Rail Pressure Sensor) se utiliza para que la ECU conozca en tiempo real la presión de combustible en el acumulador?",
    "options": [
      "Un sensor piezorresistivo de diafragma metálico atornillado directamente al riel que entrega una señal analógica de 0.5V a 4.5V proporcional a presiones de hasta 2500 bar",
      "Un termómetro de mercurio",
      "Un flotador de corcho en el depósito",
      "Un presostato mecánico que solo marca si hay o no combustible"
    ],
    "correctIndex": 0,
    "explanation": "El sensor RPS es el lazo de retroalimentación crítico: si su señal falla o se desconecta, la ECU desactiva la inyección por seguridad o entra en modo de emergencia limitando el régimen.",
    "skill": "Sensores de Alta Presión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gestión Common Rail",
    "subtopic": "Sensor de Presión de Riel (RPS)"
  },
  {
    "id": "mec-tec-27",
    "sectionId": 1,
    "number": 27,
    "text": "¿Cuál es la función de la preinyección (piloto) en los motores diésel Common Rail?",
    "options": [
      "Inyectar una cantidad diminuta de gasóleo antes de la inyección principal para iniciar una combustión suave previa que eleve la presión y temperatura gradualmente, eliminando el brusco golpeteo diésel acústico y reduciendo emisiones de NOx",
      "Limpiar las válvulas de admisión con combustible",
      "Enfriar la cabeza del pistón con líquido frío",
      "Acelerar el turbocompresor de forma instantánea"
    ],
    "correctIndex": 0,
    "explanation": "La preinyección divide el aumento de presión (dP/dt), transformando la combustión explosiva y ruidosa tradicional en una combustión progresiva y silenciosa similar a la de un motor de gasolina.",
    "skill": "Estrategias de Inyección Múltiple",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Inyección Diésel",
    "subtopic": "Estrategia de Inyección Piloto (Preinyección)"
  },
  {
    "id": "mec-tec-28",
    "sectionId": 1,
    "number": 28,
    "text": "¿Cuál es el propósito de las 'Post-inyecciones' de gasóleo en la carrera de expansión y escape en un motor diésel con filtro de partículas (DPF)?",
    "options": [
      "Inyectar combustible sin quemar hacia los gases de escape para que se inflame en el catalizador de oxidación (DOC), elevando la temperatura del flujo de escape a más de 600 °C para incinerar el hollín del DPF",
      "Aumentar la potencia del motor a altas revoluciones",
      "Limpiar el silenciador de escape",
      "Refrigerar las válvulas de escape"
    ],
    "correctIndex": 0,
    "explanation": "Las post-inyecciones tardías no producen trabajo mecánico útil; su único fin es generar hidrocarburos que reaccionen exotérmicamente en el DOC para lograr la regeneración térmica activa del DPF.",
    "skill": "Gestión de Regeneración Térmica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Regeneración de DPF",
    "subtopic": "Post-Inyecciones de Combustible"
  },
  {
    "id": "mec-tec-29",
    "sectionId": 1,
    "number": 29,
    "text": "¿Qué comprobación técnica se realiza con una 'Pinza Amperimétrica' para osciloscopio en el cable de un inyector diésel o de gasolina?",
    "options": [
      "Capturar la forma de onda de la corriente eléctrica (en amperios) para medir el tiempo real de magnetización de la bobina, el pico de retención (Peak and Hold) y el punto exacto de apertura mecánica de la aguja",
      "Medir el voltaje de la batería en reposo",
      "Apretar la tuerca del inyector",
      "Comprobar el octanaje del combustible"
    ],
    "correctIndex": 0,
    "explanation": "La gráfica de corriente muestra una pequeña 'joroba' o muesca característica (deformación de la curva) en el instante en que el inducido móvil hace contacto mecánico, confirmando la apertura física del inyector.",
    "skill": "Diagnóstico con Pinza Amperimétrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Osciloscopio Automotriz",
    "subtopic": "Medición de Corriente de Inyectores"
  },
  {
    "id": "mec-tec-30",
    "sectionId": 1,
    "number": 30,
    "text": "¿Qué función cumple el calentador del filtro de combustible diésel (resistencia PTC en la tapa del filtro)?",
    "options": [
      "Calentar el gasóleo a bajas temperaturas ambientales para disolver los cristales de parafina que precipitan con el frío y obstruyen el poro del papel filtrante, impidiendo que el motor se detenga",
      "Hervir el agua para que salga por el escape",
      "Aumentar el octanaje del combustible",
      "Precalentar el habitáculo del vehículo"
    ],
    "correctIndex": 0,
    "explanation": "El gasóleo de verano o estándar forma cristales de parafina por debajo de 0 °C (punto de obstrucción de filtro en frío CFPP); el calefactor eléctrico del filtro asegura la fluidez del combustible.",
    "skill": "Sistemas de Invierno Diésel",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Alimentación Diésel",
    "subtopic": "Calefactor de Filtro de Combustible (Parafinas)"
  },
  {
    "id": "mec-tec-31",
    "sectionId": 1,
    "number": 31,
    "text": "¿En qué consiste la 'Prueba de Fuga de Cilindros' (Cylinder Leak-Down Test) con equipo neumático de doble manómetro?",
    "options": [
      "Inyectar aire comprimido regulado (ej. a 100 PSI) en el cilindro a través del orificio de la bujía con el pistón bloqueado en PMS (ambas válvulas cerradas) y medir el porcentaje de pérdida de presión escuchando por dónde escapa el aire",
      "Medir la presión de los neumáticos con el motor en marcha",
      "Llenar los cilindros de agua para comprobar si gotean",
      "Medir el aceite que se evapora en el silenciador"
    ],
    "correctIndex": 0,
    "explanation": "Es superior al compresómetro simple: si el aire silba por el escape = fuga en válvula de escape; si silba por la admisión = válvula de admisión; si sale por la tapa de aceite = aros/cilindro; si burbujea en el radiador = junta de culata.",
    "skill": "Diagnóstico Mecánico de Precisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Pruebas de Diagnóstico del Motor",
    "subtopic": "Prueba de Fuga de Cilindros (Leak-Down Test)"
  },
  {
    "id": "mec-tec-32",
    "sectionId": 1,
    "number": 32,
    "text": "¿Qué lectura en un vacuómetro analógico conectado al colector de admisión indica un motor de gasolina en perfecto estado mecánico en ralentí a nivel del mar?",
    "options": [
      "Una aguja firme y estable entre 17 y 21 pulgadas de mercurio (inHg) de vacío",
      "Cero pulgadas de mercurio constantes",
      "Una aguja que oscila violentamente entre 5 y 30 inHg",
      "50 inHg constantes"
    ],
    "correctIndex": 0,
    "explanation": "Un vacío estable de 17-21 inHg refleja excelente sellado de válvulas, anillos y sincronización correcta de la distribución; oscilaciones periódicas revelan guías de válvula con juego o válvulas quemadas.",
    "skill": "Diagnóstico con Vacuómetro",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Pruebas de Vacío de Motor",
    "subtopic": "Lecturas e Interpretación de Vacuómetro"
  },
  {
    "id": "mec-tec-33",
    "sectionId": 1,
    "number": 33,
    "text": "¿Qué indica la lectura en el vacuómetro si la aguja oscila rápidamente hacia abajo cada vez que un cilindro específico cumple su ciclo de admisión?",
    "options": [
      "Una válvula de escape o admisión quemada, atascada o con fuga en ese cilindro en particular",
      "El filtro de aire está completamente nuevo",
      "El alternador está cargando a 14V",
      "El depósito de gasolina está lleno"
    ],
    "correctIndex": 0,
    "explanation": "Una caída rítmica de 3 a 5 inHg en la aguja delata que cuando el cilindro defectuoso ejecuta su carrera, la válvula sin sellar pierde la depresión succionando aire del colector.",
    "skill": "Interpretación Diagnóstica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Vacuómetro",
    "subtopic": "Detección de Válvulas Defectuosas con Vacuómetro"
  },
  {
    "id": "mec-tec-34",
    "sectionId": 1,
    "number": 34,
    "text": "¿Para qué se utiliza la tira de hilo calibrado de plástico 'Plastigage' en el ensamblaje de motores en el taller de rectificación?",
    "options": [
      "Para medir con precisión milimétrica la holgura de aceite (clearance) entre los muñones del cigüeñal y los cojinetes de biela o bancada al aplastarse bajo el par de apriete especificado",
      "Para pegar las juntas de corcho al cárter",
      "Para soldar pernos de culata fisurados",
      "Para limpiar la carbonilla de las bujías"
    ],
    "correctIndex": 0,
    "explanation": "Se coloca un trozo de hilo sobre el muñón seco, se aprieta la tapa al torque oficial y se vuelve a desmontar; el ancho que adquiere el hilo aplastado se mide con la escala graduada del sobre, dando la holgura (ej. 0.038 mm).",
    "skill": "Metrología de Reconstrucción de Motores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Holguras de Lubricación",
    "subtopic": "Uso de Plastigage en Cojinetes de Fricción"
  },
  {
    "id": "mec-tec-35",
    "sectionId": 1,
    "number": 35,
    "text": "¿Por qué los pernos de culata y de bancada modernos exigen un apriete 'Angular' (torque angular con goniómetro en grados) tras un apriete previo en N·m?",
    "options": [
      "Porque los pernos son de deformación elasto-plástica (TTY - Torque to Yield); apretarlos por ángulo asegura una precarga de tensión axial exacta y homogénea inmune a las variaciones de fricción de la rosca",
      "Para que el mecánico tarde más tiempo en armar el motor",
      "Porque el goniómetro enfría los pernos",
      "Para comprobar si el bloque motor es de hierro o aluminio"
    ],
    "correctIndex": 0,
    "explanation": "La fricción de la rosca y arandela absorbe hasta el 90% del torque en N·m de una dinamométrica; el giro angular directo estira el perno en su zona plástica garantizando fuerza de cierre idéntica en todos los pernos.",
    "skill": "Técnicas de Apriete Angular",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Pernos TTY (Torque-to-Yield)",
    "subtopic": "Apriete por Grados con Goniómetro"
  },
  {
    "id": "mec-tec-36",
    "sectionId": 1,
    "number": 36,
    "text": "¿Por qué los pernos de culata TTY (Torque to Yield) NUNCA deben reutilizarse tras haber sido desmontados de un motor?",
    "options": [
      "Porque durante su apriete angular previo alcanzaron su zona de deformación plástica permanente, alargándose y perdiendo su elasticidad para retener el par en un segundo uso, con riesgo inminente de rotura",
      "Porque se oxidan al contacto con el aire en 10 minutos",
      "Porque cambian de rosca métrica a rosca en pulgadas",
      "Porque pierden su propiedad magnética"
    ],
    "correctIndex": 0,
    "explanation": "Al estirarse plásticamente, la sección del perno adelgaza de forma irreversible; reutilizarlos provoca sellado defectuoso de la junta de culata o rotura del perno dentro del bloque.",
    "skill": "Normas de Ensamblaje de Motores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Pernos de Culata",
    "subtopic": "No Reutilización de Pernos TTY"
  },
  {
    "id": "mec-tec-37",
    "sectionId": 1,
    "number": 37,
    "text": "¿Cómo se comprueba la 'Planitud' de la culata (cabezote) y del bloque de cilindros para verificar que no estén alabeados tras un recalentamiento?",
    "options": [
      "Apoyando una regla rectificada de precisión de acero en diferentes direcciones (longitudinal, transversal y diagonal) e intentando pasar una galga de espesores calibrada (típicamente de 0.05 mm)",
      "Mirando a simple vista a contraluz",
      "Pasando un nivel de agua de albañilería",
      "Midiendo la culata con una báscula"
    ],
    "correctIndex": 0,
    "explanation": "Si una galga superior a la tolerancia del fabricante (ej. > 0.05 mm o 0.002 pulgadas) entra bajo la regla rectificada en cualquier punto, la culata debe rectificarse en fresadora o cepilladora para asegurar estanqueidad.",
    "skill": "Metrología de Superficies",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Inspección de Culata",
    "subtopic": "Comprobación de Alabeo con Regla Rectificada"
  },
  {
    "id": "mec-tec-38",
    "sectionId": 1,
    "number": 38,
    "text": "¿Para qué se utiliza un 'Reloj Comparador con base magnética' en la verificación de un disco de freno nuevo o usado montado en la maza?",
    "options": [
      "Medir el alabeo o descentramiento lateral (runout) del disco al girarlo con la mano; un valor superior a 0.05 - 0.08 mm causará pulsaciones rítmicas en el pedal de freno al frenar en carretera",
      "Medir el grosor de las pastillas de freno",
      "Comprobar la temperatura del líquido de frenos",
      "Verificar la presión de los neumáticos"
    ],
    "correctIndex": 0,
    "explanation": "El comparador palpa la pista del disco mientras se gira 360 grados; el alabeo excesivo empuja los pistones hacia atrás en cada vuelta, provocando pulsación en el pedal y variación de espesor (DTV).",
    "skill": "Metrología de Frenos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Frenos de Disco",
    "subtopic": "Medición de Alabeo Lateral (Runout)"
  },
  {
    "id": "mec-tec-39",
    "sectionId": 1,
    "number": 39,
    "text": "¿Qué instrumento micrométrico 'Alesómetro' (comparador de interiores) se utiliza para evaluar el desgaste de los cilindros del bloque motor?",
    "options": [
      "Un instrumento dotado de palpadores de interiores y reloj comparador que mide el diámetro, conicidad y ovalización del cilindro a diferentes alturas (superior, media e inferior) y ejes (X e Y)",
      "Un extractor de poleas del cigüeñal",
      "Una lima para desbastar pistones",
      "Un termómetro de infrarrojos para bujías"
    ],
    "correctIndex": 0,
    "explanation": "Los cilindros se desgastan más en la parte superior y en el plano perpendicular al cigüeñal (por el empuje de la biela); el alesómetro revela si el cilindro requiere rectificado a sobremedida (ej. +0.25 mm o +0.50 mm).",
    "skill": "Metrología de Bloque de Cilindros",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Rectificación de Cilindros",
    "subtopic": "Medición con Alesómetro (Conicidad y Ovalización)"
  },
  {
    "id": "mec-tec-40",
    "sectionId": 1,
    "number": 40,
    "text": "¿Qué prueba técnica de compresión 'Compresión Relativa' se puede realizar en segundos con un osciloscopio y una pinza amperimétrica sin desmontar bujías ni inyectores?",
    "options": [
      "Medir los picos de corriente que consume el motor de arranque durante el arranque deshabilitando el encendido/combustible; cada pico corresponde a la compresión de un cilindro, permitiendo comparar el esfuerzo entre cilindros de forma no intrusiva",
      "Medir la caída de gasolina en el escape con un voltímetro",
      "Comprobar el voltaje de la batería en marcha",
      "Calcular los caballos de fuerza con el alternador"
    ],
    "correctIndex": 0,
    "explanation": "El motor de arranque exige mayor corriente en el momento exacto en que cada pistón vence su compresión en PMS; un cilindro sin compresión mostrará un valle o pico disminuido en la gráfica de amperios.",
    "skill": "Diagnóstico No Intrusivo con Osciloscopio",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Compresión Relativa",
    "subtopic": "Prueba de Compresión por Corriente de Arranque"
  },
  {
    "id": "mec-tec-41",
    "sectionId": 1,
    "number": 41,
    "text": "En una caja de cambios de Doble Embrague (DCT / DSG), ¿cuál es la arquitectura mecánica de los dos embragues y ejes primarios?",
    "options": [
      "Posee dos embragues independientes que comandan dos ejes primarios concéntricos (uno hueco que aloja al otro interior): un embrague gestiona las marchas impares (1ª, 3ª, 5ª) y el otro las marchas pares (2ª, 4ª, 6ª y reversa)",
      "Un embrague es para avanzar y el otro para retroceder exclusivamente",
      "Un embrague funciona con gasolina y el otro con electricidad",
      "Ambos embragues se accionan manualmente con dos pedales distintos"
    ],
    "correctIndex": 0,
    "explanation": "Esta configuración permite el pre-engrane: mientras el vehículo acelera en 2ª, la mecatrónica ya tiene engranada la 3ª en el otro eje; el cambio de marcha se realiza soltando un embrague y acoplando el otro en ~8 milisegundos sin cortar la aceleración.",
    "skill": "Cajas de Doble Embrague (DCT/DSG)",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Transmisiones de Doble Embrague",
    "subtopic": "Arquitectura de Ejes Concéntricos y Pre-engrane"
  },
  {
    "id": "mec-tec-42",
    "sectionId": 1,
    "number": 42,
    "text": "¿Cuál es la diferencia principal entre una transmisión de doble embrague 'Húmedo' (en baño de aceite, ej. DQ250/DQ381) y una de doble embrague 'Seco' (ej. DQ200)?",
    "options": [
      "Los embragues húmedos están sumergidos en fluido hidráulico refrigerado que disipa calor eficientemente soportando pares motores elevados (>350-500 N·m); los secos operan al aire para pares bajos (<250 N·m) con mayor eficiencia pero menor disipación térmica",
      "Los secos son para motores marinos y los húmedos para aviones",
      "Los secos no usan engranajes metálicos",
      "Los húmedos solo funcionan en marchas cortas"
    ],
    "correctIndex": 0,
    "explanation": "El baño de aceite en embragues multidiscos evita sobrecalentamientos en arrancadas repetidas y tráfico pesado de ciudad, ideal para motores diésel y deportivos de alto par motor.",
    "skill": "Ingeniería de Transmisiones DCT",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Embragues Multidisco",
    "subtopic": "Doble Embrague Húmedo vs Seco"
  },
  {
    "id": "mec-tec-43",
    "sectionId": 1,
    "number": 43,
    "text": "¿Cuál es la función del módulo 'Mecatrónica' integrado en el interior de una transmisión automática moderna o de doble embrague?",
    "options": [
      "Una unidad electrohidráulica integrada que combina la computadora de control de transmisión (TCU), sensores internos de presión/velocidad y un bloque de electroválvulas solenoides que canalizan el aceite presurizado para accionar embragues y horquillas",
      "Un sistema para sintonizar emisoras de radio automáticamente",
      "Un enfriador de aire para las ruedas traseras",
      "Un mecanismo para cambiar el color de la tapicería"
    ],
    "correctIndex": 0,
    "explanation": "La mecatrónica reúne en un solo módulo inmerso en fluido la electrónica inteligente y la potencia hidráulica, ejecutando cambios de relación ultra-precisos comandados por bus CAN.",
    "skill": "Electrohidráulica de Transmisiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Cajas Automáticas y DCT",
    "subtopic": "Módulo Mecatrónica"
  },
  {
    "id": "mec-tec-44",
    "sectionId": 1,
    "number": 44,
    "text": "¿Qué procedimiento de adaptación por software con escáner 'Ajuste Básico de Embragues' es obligatorio realizar tras reparar o sustituir una caja de doble embrague?",
    "options": [
      "Una rutina guiada donde la TCU calibra los puntos de contacto cinemático (Kiss Point) de ambos embragues y los topes de carrera física de cada horquilla sincronizadora para evitar tirones y desgaste",
      "Borrar el historial de navegación del GPS",
      "Cambiar la hora en el reloj del tablero",
      "Subir y bajar los vidrios de las cuatro puertas"
    ],
    "correctIndex": 0,
    "explanation": "El aprendizaje de Kiss Point mide la presión hidráulica milimétrica exacta donde el disco comienza a rozar; sin este reaprendizaje la caja patina, golpea bruscamente al arrancar o no engrana marchas.",
    "skill": "Procedimientos de Servicio con Escáner",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Calibración de Transmisiones",
    "subtopic": "Ajuste Básico y Punto de Contacto (Kiss Point)"
  },
  {
    "id": "mec-tec-45",
    "sectionId": 1,
    "number": 45,
    "text": "¿Cuál es la diferencia de funcionamiento entre un solenoide hidráulico 'On/Off' y un solenoide lineal de fuerza variable 'VFS' (o PWM) en el cuerpo de válvulas de una caja automática?",
    "options": [
      "El solenoide On/Off solo abre o cierra completamente el conducto; el solenoide VFS/PWM modula de forma continua y proporcional la presión hidráulica variando el ciclo de trabajo de la corriente para acoplamientos suaves sin tirones",
      "El VFS solo funciona con cables de 24V",
      "El On/Off es exclusivo para la marcha atrás",
      "No existe diferencia de regulación hidráulica"
    ],
    "correctIndex": 0,
    "explanation": "La modulación por ancho de pulso PWM permite aplicar presiones hidráulicas progresivas a los paquetes de embrague, logrando transiciones imperceptibles entre relaciones.",
    "skill": "Control Hidráulico Proporcional",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Cuerpo de Válvulas",
    "subtopic": "Solenoides Proporcionales VFS vs On/Off"
  },
  {
    "id": "mec-tec-46",
    "sectionId": 1,
    "number": 46,
    "text": "¿Qué función cumple el 'Diferencial Autoblocante' o de deslizamiento limitado (LSD - Limited Slip Differential, tipo Torsen o de discos)?",
    "options": [
      "Evita que toda la potencia se pierda por una rueda que patina, bloqueando parcial o progresivamente el diferencial mecánicamente para transferir par motor a la rueda que conserva tracción",
      "Impide que el conductor gire el volante más de 90°",
      "Frena el vehículo automáticamente en bajadas",
      "Desconecta los semiejes a más de 100 km/h"
    ],
    "correctIndex": 0,
    "explanation": "El diferencial Torsen (Torque Sensing) utiliza engranajes helicoidales de empuje axial que se auto-traban proporcionalmente al par aplicado, transfiriendo hasta el 75-80% del par a la rueda con mayor agarre de forma instantánea sin electrónica.",
    "skill": "Sistemas de Tracción Avanzados",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diferenciales Autoblocantes",
    "subtopic": "Diferencial Torsen y LSD"
  },
  {
    "id": "mec-tec-47",
    "sectionId": 1,
    "number": 47,
    "text": "¿Qué líquido de transmisión automática 'ATF' específico exige un procedimiento de nivelación de fluido sumamente estricto dependiente de la temperatura?",
    "options": [
      "El fluido ATF se expande fuertemente con el calor; el nivel correcto se debe verificar obligatoriamente dentro de una ventana de temperatura exacta leída por escáner (típicamente 35 °C a 45 °C) a través del tubo de rebose con el motor en marcha",
      "El nivel se comprueba con el motor apagado y congelado a -10 °C",
      "Se llena hasta que rebose por el tapón superior con el motor apagado",
      "El nivel solo se mide con una varilla común sin importar la temperatura"
    ],
    "correctIndex": 0,
    "explanation": "Un nivel bajo de ATF hace que la bomba aspire espuma provocando patinamientos y sobrecalentamiento; un nivel excesivo produce contrapresión y fuga por los respiraderos.",
    "skill": "Mantenimiento Técnico de Cajas Automáticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Fluidos de Transmisión",
    "subtopic": "Procedimiento de Nivelación de ATF por Temperatura"
  },
  {
    "id": "mec-tec-48",
    "sectionId": 1,
    "number": 48,
    "text": "¿Cuál es la función del embrague multidisco electrohidráulico 'Haldex' en sistemas de tracción total (AWD bajo demanda)?",
    "options": [
      "Acoplar progresivamente el eje trasero mediante la presión hidráulica generada por una bomba y modulada por electroválvulas en cuanto los sensores de rueda detectan pérdida de adherencia en el eje delantero",
      "Conectar el motor de arranque con las ruedas traseras",
      "Frenar el eje trasero en caso de pinchazo",
      "Cargar la batería de alta tensión"
    ],
    "correctIndex": 0,
    "explanation": "En condiciones normales opera como tracción delantera (ahorrando combustible); ante demanda de aceleración o patinamiento, el embrague Haldex se comprime en milisegundos enviando hasta el 50% del par al tren trasero.",
    "skill": "Sistemas de Tracción Total AWD",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Tracción Total",
    "subtopic": "Sistema de Tracción Haldex"
  },
  {
    "id": "mec-tec-49",
    "sectionId": 1,
    "number": 49,
    "text": "¿Qué avería provoca un fallo en el 'Sensor de Rango de Transmisión' (o sensor TR / switch inhibidor de arranque neutro/parking)?",
    "options": [
      "El motor de arranque no gira en ninguna posición de la palanca, o la transmisión entra en modo de fallo de emergencia fijo en 3ª marcha al no poder determinar si está en P, R, N o D",
      "El vehículo se acelera al máximo automáticamente",
      "Se revientan los neumáticos delanteros",
      "El velocímetro marca el doble de velocidad"
    ],
    "correctIndex": 0,
    "explanation": "Por seguridad, el motor de arranque solo se energiza si el switch TR confirma que la caja está en Parking o Neutral; si la señal es ambigua, el sistema bloquea el arranque o activa la marcha de emergencia.",
    "skill": "Diagnóstico Electrónico de Cajas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sensores de Transmisión",
    "subtopic": "Sensor de Rango de Transmisión (TR)"
  },
  {
    "id": "mec-tec-50",
    "sectionId": 1,
    "number": 50,
    "text": "¿Cuál es la función del 'Trinquete de Parking' (Parking Pawl) en una transmisión automática?",
    "options": [
      "Una cuña o uña de acero robusta que engrana mecánicamente en los dientes de una rueda dentada solidaria al eje de salida de la caja, bloqueando físicamente el giro de las ruedas motrices al colocar la palanca en 'P'",
      "Un freno hidráulico que aprieta las pastillas delanteras",
      "Un electroimán que atrae los discos de freno",
      "Una válvula que vacía el convertidor de par"
    ],
    "correctIndex": 0,
    "explanation": "El trinquete de parking inmoviliza mecánicamente el tren motriz en estacionamiento; no obstante, en pendientes pronunciadas se debe accionar siempre el freno de mano primero para no atascar la cuña contra los dientes bajo la carga del peso del coche.",
    "skill": "Mecánica de Bloqueo de Parking",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Cajas Automáticas",
    "subtopic": "Mecanismo del Trinquete de Parking (Parking Pawl)"
  },
  {
    "id": "mec-tec-51",
    "sectionId": 1,
    "number": 51,
    "text": "¿Cómo se debe calibrar la cámara frontal multifunción del sistema ADAS (ubicada en el parabrisas) tras sustituir el parabrisas o desalinear la suspensión?",
    "options": [
      "Mediante una calibración estática (utilizando paneles diana con patrones geométricos colocados a distancias, alturas y niveles milimétricos específicos con punteros láser) y/o calibración dinámica en carretera con el escáner",
      "Limpiando el lente de la cámara con alcohol puro",
      "Desconectando la batería durante 5 minutos",
      "Conduciendo a más de 150 km/h en línea recta"
    ],
    "correctIndex": 0,
    "explanation": "Una desviación de solo 1 milímetro en la cámara genera un error de metros a 100 metros de distancia, lo que provocaría que el frenado autónomo de emergencia (AEB) o el centrado de carril (LKA) fallen o actúen peligrosamente sobre obstáculos inexistentes.",
    "skill": "Calibración de Sistemas ADAS",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas Avanzados de Ayuda a la Conducción",
    "subtopic": "Calibración de Cámaras ADAS (Estática y Dinámica)"
  },
  {
    "id": "mec-tec-52",
    "sectionId": 1,
    "number": 52,
    "text": "¿Qué tecnología utiliza el sensor de radar frontal de control de crucero adaptativo (ACC) montado en la rejilla o paragolpes delantero?",
    "options": [
      "Emite ondas de radio de frecuencia ultra-alta (típicamente 77 GHz a 79 GHz) en tecnología FMCW (Frecuencia Modulada en Onda Continua) para medir con precisión milimétrica la distancia y velocidad relativa de vehículos precedentes por efecto Doppler",
      "Emite ultrasonidos audibles para perros",
      "Utiliza una cámara de fotos común con flash",
      "Mide la temperatura del aire ambiental"
    ],
    "correctIndex": 0,
    "explanation": "El radar milimétrico a 77 GHz atraviesa niebla, lluvia y polvo sin perder eficacia; el eco reflejado desfasado en frecuencia revela instantáneamente si el coche de adelante frena.",
    "skill": "Sensores de Radar Automotriz",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas ADAS",
    "subtopic": "Radar Milimétrico de 77 GHz para ACC"
  },
  {
    "id": "mec-tec-53",
    "sectionId": 1,
    "number": 53,
    "text": "¿Cuál es la función del 'Ángulo de Empuje' (Thrust Angle) en la alineación computarizada del chasis en cuatro ruedas?",
    "options": [
      "El ángulo que forma la bisectriz geométrica de convergencia del eje trasero respecto a la línea central longitudinal del vehículo; si es distinto de cero, el vehículo avanza de costado ('efecto perro' o cangrejo)",
      "El ángulo del alerón trasero",
      "La inclinación de los tubos de escape",
      "La fuerza del viento lateral sobre la carrocería"
    ],
    "correctIndex": 0,
    "explanation": "El eje trasero empuja la dirección del coche: primero se ajusta la alineación trasera para que el ángulo de empuje sea 0.00°, y luego se alinean las ruedas delanteras respecto a esa línea de empuje.",
    "skill": "Geometría de Chasis Computarizada",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Alineación 3D",
    "subtopic": "Ángulo de Empuje (Thrust Angle)"
  },
  {
    "id": "mec-tec-54",
    "sectionId": 1,
    "number": 54,
    "text": "¿Qué ajuste mecánico se realiza en la barra de acoplamiento (terminal de dirección) para corregir el ángulo de convergencia en el taller de alineación?",
    "options": [
      "Aflojar la contratuerca y girar la varilla roscada de la barra axial de dirección para acortar o alargar su longitud efectiva milimétrica antes de reapretar",
      "Doblar la barra de dirección con un soplete",
      "Cambiar los neumáticos de posición",
      "Limar el extremo de la rótula"
    ],
    "correctIndex": 0,
    "explanation": "El paso de rosca micrométrico permite ajustar décimas de grado o milímetros de convergencia en cada rueda delantera mientras se supervisan las dianas ópticas en el monitor 3D.",
    "skill": "Ajuste Práctico de Alineación",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Alineación de Dirección",
    "subtopic": "Regulación de Convergencia por Barra Roscada"
  },
  {
    "id": "mec-tec-55",
    "sectionId": 1,
    "number": 55,
    "text": "¿Por qué tras realizar una alineación de la dirección es OBLIGATORIO efectuar el 'Calibrado del Punto Cero del Sensor de Ángulo de Dirección' (SAS Reset) con el escáner?",
    "options": [
      "Porque si el volante está mecánicamente recto a 0° pero el sensor SAS tiene grabado un desfase electrónico previo, el control de estabilidad (ESP) creerá que el vehículo derrapa en línea recta e intervendrá frenando ruedas de forma involuntaria",
      "Para que el claxon vuelva a sonar",
      "Para resetear el cuentakilómetros a cero",
      "Para que las luces de giro parpadeen más rápido"
    ],
    "correctIndex": 0,
    "explanation": "El ESP exige coincidencia absoluta entre la posición recta de las ruedas y la lectura de 0.0° en el sensor SAS; ignorar este reinicio por escáner causa falsas activaciones del ESP en autopista.",
    "skill": "Calibración de Dirección y ESP",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Procedimientos de Escáner",
    "subtopic": "Calibración del Punto Cero del Sensor SAS"
  },
  {
    "id": "mec-tec-56",
    "sectionId": 1,
    "number": 56,
    "text": "¿Cómo detectan los sensores de estacionamiento ultrasónicos (PDC) la distancia a los obstáculos al maniobrar marcha atrás?",
    "options": [
      "Emiten pulsos acústicos ultrasónicos inaudibles a ~40 kHz y calculan la distancia midiendo el tiempo de vuelo que tarda el eco sonoro en rebotar en el obstáculo y regresar al transductor (tiempo = 2 * distancia / velocidad del sonido)",
      "Miden la temperatura del parachoques",
      "Utilizan rayos láser infrarrojos visibles",
      "Comprueban la sombra proyectada por el obstáculo"
    ],
    "correctIndex": 0,
    "explanation": "A 343 m/s, el microcontrolador calcula milisegundos de retorno traduciéndolos a centímetros y generando pitidos de frecuencia creciente en la cabina hasta tono continuo a menos de 30 cm.",
    "skill": "Sensores de Maniobra",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas de Aparcamiento",
    "subtopic": "Sensores Ultrasónicos (PDC)"
  },
  {
    "id": "mec-tec-57",
    "sectionId": 1,
    "number": 57,
    "text": "¿Cuál es la función del 'Sensor de Par Torsional' montado en el eje de la columna de dirección en sistemas EPS?",
    "options": [
      "Medir la deformación micrométrica de una barra de torsión interna entre el volante y el piñón para informar a la ECU cuánta fuerza manual está aplicando el conductor y en qué sentido de giro",
      "Medir las vibraciones del motor",
      "Frenar el volante cuando el vehículo se detiene",
      "Desconectar el motor de arranque"
    ],
    "correctIndex": 0,
    "explanation": "El sensor de par (inductivo o magnético sin contacto) es la entrada principal del EPS: a mayor esfuerzo en el volante por maniobra en parado, mayor corriente envía la ECU al servomotor de asistencia.",
    "skill": "Sensores de Dirección EPS",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Dirección Asistida Eléctrica",
    "subtopic": "Sensor de Par Torsional (Torque Sensor)"
  },
  {
    "id": "mec-tec-58",
    "sectionId": 1,
    "number": 58,
    "text": "¿Qué precaución técnica se debe seguir al sustituir un amortiguador de tipo cartucho roscado o puntal MacPherson en el compresor de muelles de taller?",
    "options": [
      "Asegurar los ganchos del compresor de muelles firmemente en espiras opuestas y comprimir el resorte hasta que quede totalmente libre de tensión contra las cazoletas ANTES de desenroscar la tuerca superior del vástago",
      "Cortar el muelle con una sierra radial de mano",
      "Quitar la tuerca superior con el vehículo apoyado en el suelo con una pistola de impacto",
      "Calentar el muelle al rojo vivo con soplete"
    ],
    "correctIndex": 0,
    "explanation": "Un resorte comprimido acumula miles de julios de energía elástica; si se retira la tuerca superior sin comprimir el muelle adecuadamente, saldrá disparado como un proyectil letal con riesgo de muerte o amputación.",
    "skill": "Seguridad Mecánica en Suspensión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mantenimiento de Suspensión",
    "subtopic": "Uso Seguro del Compresor de Muelles"
  },
  {
    "id": "mec-tec-59",
    "sectionId": 1,
    "number": 59,
    "text": "¿Qué causa un 'Tirón hacia un lado' (Drift/Pull) en un vehículo que tiene convergencia, caída y avance perfectamente dentro de tolerancias nominales?",
    "options": [
      "Conicidad o deformación interna radial de la carcasa de los neumáticos (Radial Tire Pull), presiones de aire desiguales entre lados o un cáliper de freno delantero ligeramente atascado que arrastra",
      "Exceso de aceite en la caja de cambios",
      "Una bujía desgastada en el cilindro 3",
      "El filtro de aire sucio"
    ],
    "correctIndex": 0,
    "explanation": "Si el neumático tiene defecto de conicidad en sus lonas, rueda como un vaso cónico empujando el eje; para diagnosticarlo se intercambian las ruedas delanteras de izquierda a derecha para ver si el tirón invierte de sentido.",
    "skill": "Diagnóstico Avanzado de Dirección",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Dinámica de Guiado",
    "subtopic": "Deriva por Neumáticos (Radial Tire Pull)"
  },
  {
    "id": "mec-tec-60",
    "sectionId": 1,
    "number": 60,
    "text": "¿Qué es el 'Ángulo Incluido' (Included Angle) en la geometría del eje delantero?",
    "options": [
      "La suma matemática del ángulo de caída (Camber) y el ángulo de inclinación del pivote de dirección (KPI / SAI): Included Angle = Camber + SAI",
      "La suma de los cuatro neumáticos",
      "El ángulo de giro total del volante de tope a tope",
      "La inclinación de los asientos delanteros"
    ],
    "correctIndex": 0,
    "explanation": "El ángulo incluido es fijo e inherente a la construcción física de la mangueta; si el SAI y el Camber están desfasados pero el ángulo incluido es erróneo, delata sin lugar a dudas que la mangueta o el puntal están físicamente doblados por un golpe contra un bordillo.",
    "skill": "Diagnóstico Geométrico de Deformaciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Geometría de Mangueta",
    "subtopic": "Ángulo Incluido (Included Angle) y SAI/KPI"
  },
  {
    "id": "mec-tec-61",
    "sectionId": 1,
    "number": 61,
    "text": "Al comprobar con un osciloscopio el circuito primario de una bobina de encendido, ¿qué indica el tiempo de saturación o 'Dwell Time'?",
    "options": [
      "El tiempo en milisegundos durante el cual el transistor de potencia conecta la bobina a masa permitiendo que la corriente fluya y sature magnéticamente el núcleo de hierro",
      "El tiempo que tarda la bujía en enfriarse",
      "El tiempo que el motor permanece apagado",
      "La velocidad a la que salta la chispa en el cilindro"
    ],
    "correctIndex": 0,
    "explanation": "Un Dwell insuficiente no permite almacenar suficiente energía magnética (chispa débil y misfires); un Dwell excesivo sobrecalienta y quema la bobina de encendido.",
    "skill": "Osciloscopio Automotriz",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistema de Encendido",
    "subtopic": "Tiempo de Dwell y Saturación de Bobina"
  },
  {
    "id": "mec-tec-62",
    "sectionId": 1,
    "number": 62,
    "text": "¿Qué información crítica revela la 'Línea de Quemado' (Burn Time o Spark Duration) en la forma de onda secundaria de encendido capturada con sonda capacitiva?",
    "options": [
      "La duración en milisegundos (típicamente entre 1.0 y 2.0 ms) y el voltaje constante durante el cual el arco eléctrico de plasma permanece encendido entre los electrodos de la bujía quemando la mezcla",
      "El tiempo que tarda en calentarse el catalizador",
      "El consumo de gasolina del inyector",
      "La temperatura del aceite del motor"
    ],
    "correctIndex": 0,
    "explanation": "Una línea de quemado inferior a 0.8 ms denota bujía con holgura excesiva, mezcla extremadamente pobre o bobina con espiras en corto; una línea demasiado larga y baja indica bujía comunicada o mezcla excesivamente rica.",
    "skill": "Análisis de Formas de Onda Secundaria",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico de Encendido",
    "subtopic": "Línea de Quemado y Tensión de Mantenimiento"
  },
  {
    "id": "mec-tec-63",
    "sectionId": 1,
    "number": 63,
    "text": "¿Cómo se prueba la estanqueidad y goteo de los inyectores de gasolina desmontados en un 'Banco de Pruebas y Limpieza de Inyectores por Ultrasonidos'?",
    "options": [
      "Sometiendo la rampa a la presión nominal de trabajo durante un tiempo determinado con los inyectores desactivados eléctricamente; no debe caer ni una sola gota en la probeta (fuga cero)",
      "Sumergiéndolos en agua hirviendo",
      "Midiéndolos con una cinta métrica",
      "Haciéndolos sonar con un martillo"
    ],
    "correctIndex": 0,
    "explanation": "Un inyector que gotea en reposo pierde la presión del riel causando arranque en caliente prolongado, dilución de aceite con gasolina y ahogamiento del cilindro.",
    "skill": "Servicio de Inyectores de Gasolina",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Banco de Pruebas de Inyectores",
    "subtopic": "Prueba de Goteo y Caudal en Probetas"
  },
  {
    "id": "mec-tec-64",
    "sectionId": 1,
    "number": 64,
    "text": "¿Qué fenómeno limpia el 'Baño por Ultrasonidos' con líquido desengrasante específico al reacondicionar inyectores de combustible?",
    "options": [
      "La cavitación acústica: microburbujas generadas por ondas de alta frecuencia implosionan violentamente contra la tobera, desprendiendo lacas, barnices y carbonilla microscópica acumulada",
      "La electrólisis de agua salada",
      "El calor de un soplete de soldadura",
      "La acción de un cepillo de alambre de acero"
    ],
    "correctIndex": 0,
    "explanation": "La cavitación desincrusta la suciedad interna en conductos y asientos microscópicos donde ninguna herramienta física puede acceder sin alterar las tolerancias de fábrica.",
    "skill": "Mantenimiento por Ultrasonidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Limpieza de Inyectores",
    "subtopic": "Cavitación Ultrasónica de Inyectores"
  },
  {
    "id": "mec-tec-65",
    "sectionId": 1,
    "number": 65,
    "text": "¿Cuál es la función del 'Sensor de Posición del Árbol de Levas' (CMP) al ser sincronizado con el sensor CKP en una captura de dos canales en el osciloscopio?",
    "options": [
      "Verificar que el patrón de pulsos del árbol de levas coincida exactamente en el diente correspondiente de la rueda del cigüeñal, confirmando que la correa o cadena de distribución no está estirada ni saltó un diente",
      "Medir la compresión de los cuatro cilindros al mismo tiempo",
      "Comprobar el voltaje del alternador",
      "Calcular los kilómetros de vida útil restantes del motor"
    ],
    "correctIndex": 0,
    "explanation": "La prueba de sincronismo CKP-CMP en osciloscopio es el método definitivo no intrusivo para detectar cadenas de distribución estiradas (desfase de grados) antes de desarmar la distribución.",
    "skill": "Sincronismo Electrónico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Osciloscopio Automotriz",
    "subtopic": "Correlación de Señales CKP vs CMP"
  },
  {
    "id": "mec-tec-66",
    "sectionId": 1,
    "number": 66,
    "text": "¿Qué anomalía delata la presencia de ondulaciones excesivas de corriente alterna (AC Ripple Voltage > 0.5V AC) sobre los bornes de la batería con el motor en marcha?",
    "options": [
      "Fallo o rotura de uno de los diodos rectificadores del puente del alternador, lo que induce ruido eléctrico parásito en los buses de datos y sensores de la ECU",
      "Que el alternador está nuevo de fábrica",
      "Que las bujías están frías",
      "Que el radiador tiene poco refrigerante"
    ],
    "correctIndex": 0,
    "explanation": "Un diodo cortocircuitado o abierto deja pasar corriente alterna residual a la instalación de 12V DC; el rizado AC confunde a los microprocesadores generando códigos de falla fantasmas en sensores Hall.",
    "skill": "Diagnóstico de Alternadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistema de Carga",
    "subtopic": "Rizado de Corriente Alterna (AC Ripple Test)"
  },
  {
    "id": "mec-tec-67",
    "sectionId": 1,
    "number": 67,
    "text": "¿Cómo se prueba un 'Sensor Hall' fuera del vehículo en el banco de trabajo utilizando una fuente de 12V/5V, una resistencia Pull-Up y un multímetro?",
    "options": [
      "Alimentar el sensor con su voltaje nominal y conectar una resistencia de ~1kΩ entre señal y positivo; al acercar y alejar un imán o pieza metálica ferrosa, el voltaje de señal debe conmutar limpiamente entre 0V y el voltaje de alimentación",
      "Medir la resistencia con el sensor desconectado esperando 0 ohmios",
      "Calentar el sensor con un encendedor para ver si cambia de color",
      "Sumergir el sensor en aceite caliente"
    ],
    "correctIndex": 0,
    "explanation": "La mayoría de sensores Hall automotrices tienen salida en colector abierto (Open Collector); requieren la resistencia Pull-Up para levantar el nivel lógico a 5V/12V cuando el transistor interno se abre.",
    "skill": "Pruebas de Banco de Sensores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sensores Efecto Hall",
    "subtopic": "Comprobación de Salida Colector Abierto y Pull-Up"
  },
  {
    "id": "mec-tec-68",
    "sectionId": 1,
    "number": 68,
    "text": "¿Por qué en un acelerador electrónico (Drive-by-Wire) los dos potenciómetros internos del cuerpo de mariposa (TPS 1 y TPS 2) tienen curvas de voltaje opuestas o con pendiente invertida?",
    "options": [
      "Para que la suma de ambos voltajes sea siempre una constante fija (ej. TPS1 + TPS2 = 5.0V en todo momento), permitiendo a la ECU validar instantáneamente la coherencia de la posición física de la mariposa",
      "Para que una mitad de la mariposa se abra y la otra se cierre",
      "Para gastar menos energía eléctrica",
      "Para que el motor funcione en caso de desconectar la batería"
    ],
    "correctIndex": 0,
    "explanation": "A medida que la mariposa abre, TPS1 sube de 0.5V a 4.5V mientras TPS2 desciende simétricamente de 4.5V a 0.5V; cualquier desviación de la suma matemática delata fallo en pistas o cableado.",
    "skill": "Lógica de Validación de Sensores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Cuerpo de Mariposa Electrónico",
    "subtopic": "Curvas Invertidas de Señal TPS 1 y TPS 2"
  },
  {
    "id": "mec-tec-69",
    "sectionId": 1,
    "number": 69,
    "text": "¿Cómo se verifica con osciloscopio la señal analógica del potenciómetro TPS en busca de 'Pistas de Carbón Desgastadas o Ruido'?",
    "options": [
      "Accionar lentamente el acelerador de ralentí a plena carga (WOT) con el contacto puesto observando el trazo en pantalla; el voltaje debe elevarse de forma perfectamente continua y suave sin picos negativos, saltos bruscos o interrupciones a cero voltios",
      "Medir el voltaje exclusivamente con el motor a máxima aceleración",
      "Comprobar si el cable huele a quemado",
      "Verificar que la señal sea una onda cuadrada perfecta de 50 Hz"
    ],
    "correctIndex": 0,
    "explanation": "Un voltímetro digital promedia las lecturas y oculta micro-interrupciones; el osciloscopio dibuja en tiempo real el 'salto a cero' (micro-grieta en la pista resistiva) que causa tirones violentos en aceleración.",
    "skill": "Diagnóstico de Ruido Eléctrico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Osciloscopio Automotriz",
    "subtopic": "Detección de Glitches y Ruido en Sensor TPS"
  },
  {
    "id": "mec-tec-70",
    "sectionId": 1,
    "number": 70,
    "text": "¿Cuál es la función del 'Relé Principal de Gestión de Motor' (Main Relay o DME Relay)?",
    "options": [
      "Suministrar alimentación de potencia positiva limpia y estable a la ECU del motor, inyectores, bobinas de encendido, sensor de flujo de aire y electroválvulas tras recibir la señal de ignición",
      "Activar las luces altas de los faros",
      "Girar el motor de arranque",
      "Desconectar la alarma antirrobo"
    ],
    "correctIndex": 0,
    "explanation": "El Main Relay es alimentado por el borne 30 y activado por la llave o por la propia ECU, energizando todo el ecosistema de inyección y encendido bajo el fusible principal del tren motriz.",
    "skill": "Alimentación de Sistemas Electrónicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Circuitos de Alimentación",
    "subtopic": "Relé Principal de Gestión de Motor (Main Relay)"
  },
  {
    "id": "mec-tec-71",
    "sectionId": 1,
    "number": 71,
    "text": "¿Cómo funciona el sistema de 'Frenada Autónoma de Emergencia' (AEB - Autonomous Emergency Braking)?",
    "options": [
      "Combina la visión de la cámara frontal y el radar milimétrico para detectar riesgo inminente de colisión frontal con un vehículo o peatón; si el conductor no reacciona ante las alertas sonoras y visuales, el sistema aplica los frenos al 100% automáticamente a través del bloque hidráulico del ESP",
      "Apaga el motor y bloquea el volante para que el coche no se mueva",
      "Desinfla los neumáticos para aumentar la fricción",
      "Dispara los airbags antes del choque preventivamente"
    ],
    "correctIndex": 0,
    "explanation": "El sistema AEB actúa en milisegundos precargando el circuito hidráulico y ejecutando frenada total de emergencia para mitigar o evitar por completo el impacto según Euro NCAP.",
    "skill": "Sistemas ADAS de Seguridad Activa",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Seguridad Activa ADAS",
    "subtopic": "Frenada Autónoma de Emergencia (AEB)"
  },
  {
    "id": "mec-tec-72",
    "sectionId": 1,
    "number": 72,
    "text": "¿Cómo interviene el sistema de 'Asistente de Mantenimiento de Carril' (LKA - Lane Keeping Assist) cuando el vehículo pisa la línea delimitadora sin activar la luz de giro?",
    "options": [
      "La cámara detecta las líneas viales y la ECU de dirección (EPS) aplica un par de giro corrector suave en el volante guiando el vehículo de regreso al centro del carril",
      "Frena en seco las cuatro ruedas",
      "Apaga las luces del cuadro de mandos",
      "Desconecta la tracción en las cuatro ruedas"
    ],
    "correctIndex": 0,
    "explanation": "El servomotor de la dirección eléctrica EPS recibe órdenes vectoriales de par desde el módulo de visión artificial, corrigiendo la deriva antes de que el vehículo invada el carril contiguo.",
    "skill": "Guiado Automático de Dirección",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas ADAS",
    "subtopic": "Mantenimiento de Carril (LKA)"
  },
  {
    "id": "mec-tec-73",
    "sectionId": 1,
    "number": 73,
    "text": "¿Cómo funciona el 'Sensor de Detección de Ángulo Muerto' (Blind Spot Detection - BSD) montado en las esquinas traseras del paragolpes?",
    "options": [
      "Dos radares de corto alcance (24 GHz o 77 GHz) escanean continuamente los carriles adyacentes traseros; si detectan un vehículo en el ángulo muerto de los retrovisores, encienden una luz de advertencia LED en el espejo retrovisor correspondiente",
      "Cámaras de video que graban la matrícula de los coches vecinos",
      "Sensores magnéticos colocados en el techo",
      "Micrófonos que escuchan el sonido de otros motores"
    ],
    "correctIndex": 0,
    "explanation": "Si el conductor acciona la luz de giro hacia el carril ocupado, el testigo del espejo parpadea intensamente y emite una alerta acústica o vibración en el volante para impedir el cambio de carril.",
    "skill": "Sensores de Proximidad Lateral",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas de Seguridad ADAS",
    "subtopic": "Detección de Ángulo Muerto (BSD)"
  },
  {
    "id": "mec-tec-74",
    "sectionId": 1,
    "number": 74,
    "text": "¿Qué procedimiento de servicio es obligatorio realizar tras sustituir las pastillas de freno en un vehículo con 'Asistente de Arranque en Pendiente' (Hill Hold Assist)?",
    "options": [
      "Comprobar el interruptor de pedal de embrague/freno y verificar con escáner que el sensor de presión de frenos reconozca la calibración de presión residual mínima de retención",
      "Pintar las pinzas de freno de color rojo",
      "Subir una montaña a velocidad máxima",
      "Desactivar el ABS en el menú del cuadro"
    ],
    "correctIndex": 0,
    "explanation": "El Hill Hold utiliza las electroválvulas del ESP para mantener la presión en las pinzas durante 2 segundos tras soltar el freno; requiere una señal precisa de presión para soltar el freno en cuanto el embrague transmite par motor.",
    "skill": "Funciones Asistidas de Frenado",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Asistentes de Frenos",
    "subtopic": "Asistente de Arranque en Pendiente (Hill Hold)"
  },
  {
    "id": "mec-tec-75",
    "sectionId": 1,
    "number": 75,
    "text": "¿Cuál es la función del 'Acumulador de Presión Hidráulica' cargado con gas nitrógeno en los grupos hidráulicos de transmisiones mecatrónicas o frenos electrohidráulicos (SBC)?",
    "options": [
      "Almacenar fluido hidráulico a alta presión constante (ej. 40 a 60 bar) para suministrar caudal instantáneo a las electroválvulas sin esperar a que la bomba eléctrica levante presión desde cero",
      "Guardar nitrógeno para inflar las ruedas",
      "Enfriar el aceite de la transmisión",
      "Filtrar las partículas de hollín"
    ],
    "correctIndex": 0,
    "explanation": "El nitrógeno presurizado tras un diafragma flexible actúa como resorte hidroneumático; cuando el acumulador se desinfla por fatiga, la bomba eléctrica trabaja continuamente hasta quemarse.",
    "skill": "Acumuladores Hidroneumáticos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas Electrohidráulicos",
    "subtopic": "Acumulador de Presión de Nitrógeno"
  },
  {
    "id": "mec-tec-76",
    "sectionId": 1,
    "number": 76,
    "text": "¿Qué código de falla genérico OBD-II 'P0401' indica un problema en el sistema de control de emisiones?",
    "options": [
      "Flujo insuficiente detectado en el sistema de Recirculación de Gases de Escape (EGR Flow Insufficient Detected)",
      "Baja presión en el neumático delantero izquierdo",
      "Fallo en el alternador de 12V",
      "Nivel bajo de refrigerante"
    ],
    "correctIndex": 0,
    "explanation": "La ECU comprueba el flujo de la EGR abriendo la válvula en deceleración y verificando que el sensor MAP registre un aumento de presión o que la sonda Lambda responda; si no hay cambio, deduce conductos carbonizados o válvula atascada.",
    "skill": "Diagnóstico de Emisiones OBD-II",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Códigos de Falla de Emisiones",
    "subtopic": "Código P0401 y Diagnóstico de EGR"
  },
  {
    "id": "mec-tec-77",
    "sectionId": 1,
    "number": 77,
    "text": "¿Qué indica un código de falla 'P0101' leído con el escáner de diagnóstico?",
    "options": [
      "Rango o rendimiento fuera de especificación en el circuito del Sensor de Flujo de Masa de Aire (MAF Circuit Range/Performance)",
      "Sobrecalentamiento del líquido de frenos",
      "Falla en el motor del limpiaparabrisas",
      "Batería descargada por debajo de 9V"
    ],
    "correctIndex": 0,
    "explanation": "P0101 no significa necesariamente sensor MAF roto; suele provocarse por suciedad en el filamento caliente, conductos de admisión agrietados que dejan entrar aire parásito o filtro de aire mal colocado.",
    "skill": "Diagnóstico de Sensores de Aire",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico de Sensores",
    "subtopic": "Código P0101 y Comprobación de MAF"
  },
  {
    "id": "mec-tec-78",
    "sectionId": 1,
    "number": 78,
    "text": "¿Qué síntoma provoca una 'Bomba de Combustible de Alta Presión' (HPFP) con desgaste en su rodillo de leva o empujador en un motor GDI?",
    "options": [
      "Presión de combustible insuficiente en el riel a altas RPM, pérdida de potencia y tirones bajo carga fuerte, y código de falla P0087 (Presión del riel de combustible demasiado baja)",
      "El motor no puede apagarse al quitar la llave",
      "Se revientan las bujías de encendido",
      "El aceite se convierte en agua"
    ],
    "correctIndex": 0,
    "explanation": "El desgaste del seguidor de rodillo en la leva del árbol de levas reduce la carrera física del pistón de la bomba mecánica de alta presión, incapaz de mantener los 150-200 bar demandados en aceleración.",
    "skill": "Diagnóstico de Inyección Directa GDI",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Bombas de Alta Presión GDI",
    "subtopic": "Desgaste de Empujador y Código P0087"
  },
  {
    "id": "mec-tec-79",
    "sectionId": 1,
    "number": 79,
    "text": "¿Por qué en la reconstrucción del motor es crítico respetar el orden y la secuencia de apriete 'En Espiral' (desde el centro hacia los extremos) de los pernos de la culata?",
    "options": [
      "Para aplanar y extender uniformemente la junta de culata hacia afuera sin crear ondulaciones, tensiones residuales ni deformar el plano de la culata de aluminio",
      "Para que los pernos queden de colores diferentes",
      "Para no cansarse apretando en línea recta",
      "Es una costumbre tradicional sin fundamento físico"
    ],
    "correctIndex": 0,
    "explanation": "Apretar desde los extremos hacia el centro atraparía material de la junta en el medio creando una bolsa de pandeo; el patrón en espiral del centro hacia afuera expulsa las tensiones hacia los bordes.",
    "skill": "Secuencia de Montaje de Culatas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Ensamblaje del Motor",
    "subtopic": "Patrón de Apriete en Espiral de Culata"
  },
  {
    "id": "mec-tec-80",
    "sectionId": 1,
    "number": 80,
    "text": "¿Qué procedimiento técnico 'Prueba de Presión de Aceite de Motor con Manómetro Mecánico' confirma si la baja presión es real o un fallo eléctrico del sensor?",
    "options": [
      "Desmontar el presostato de aceite, enroscar un manómetro de glicerina con manguera de alta presión y medir la presión hidráulica en frío y en caliente (típicamente >1.0 bar en ralentí caliente y >2.5 a 4.0 bar a 3000 RPM)",
      "Revisar el color del cable del sensor con una lupa",
      "Cambiar la batería del automóvil",
      "Quitar el tapón de llenado y mirar con una linterna"
    ],
    "correctIndex": 0,
    "explanation": "El manómetro mecánico calibrado es la prueba concluyente: descarta problemas de masa o sensor defectuoso y diagnostica desgaste real en cojinetes de biela/bancada o válvula de alivio trabada.",
    "skill": "Diagnóstico Hidráulico de Lubricación",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Presión de Aceite",
    "subtopic": "Medición con Manómetro Mecánico de Aceite"
  },
  {
    "id": "mec-tec-81",
    "sectionId": 1,
    "number": 81,
    "text": "En un vehículo híbrido convencional (HEV, como el Toyota Prius), ¿cuál es el color estandarizado internacionalmente para el aislamiento de los cables y arneses de Alta Tensión (HV > 60V DC)?",
    "options": [
      "Naranja brillante (Orange)",
      "Azul marino",
      "Amarillo verdoso",
      "Negro mate"
    ],
    "correctIndex": 0,
    "explanation": "La norma SAE J1673 e ISO 6469 reservan estrictamente el color naranja para todo el cableado que transporte tensiones peligrosas para la vida (Clase B de voltaje > 60V DC o > 30V AC rms).",
    "skill": "Seguridad en Vehículos Híbridos y Eléctricos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Alta Tensión Automotriz",
    "subtopic": "Identificación de Cableado Naranja de Alta Tensión"
  },
  {
    "id": "mec-tec-82",
    "sectionId": 1,
    "number": 82,
    "text": "¿Qué procedimiento de seguridad OBLIGATORIO debe realizar el técnico antes de intervenir cualquier componente de alta tensión en un vehículo híbrido o eléctrico?",
    "options": [
      "Desconectar el conector de servicio de alta tensión (Service Plug / Manual Service Disconnect - MSD) y aplicar bloqueo LOTO, esperar el tiempo de descarga de condensadores y comprobar ausencia de tensión con multímetro CAT III / CAT IV 1000V",
      "Rociar los cables con agua destilada",
      "Poner el contacto en marcha para que se descargue",
      "Tocar los cables con guantes de tela ligera"
    ],
    "correctIndex": 0,
    "explanation": "El Service Plug divide físicamente el paquete de baterías en dos mitades seguras e interrumpe el circuito de interlock; los guantes aislantes de clase 0 (1000V) y la prueba de tres pasos de ausencia de tensión son indispensables.",
    "skill": "Protocolo de Desconexión de Alta Tensión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Seguridad Eléctrica Híbrida",
    "subtopic": "Desconexión de Servicio (Service Plug) y LOTO"
  },
  {
    "id": "mec-tec-83",
    "sectionId": 1,
    "number": 83,
    "text": "¿Qué categoría de seguridad debe cumplir un multímetro digital para medir con total seguridad en circuitos de alta tensión de vehículos híbridos y eléctricos?",
    "options": [
      "Categoría CAT III 1000V o CAT IV 600V con puntas de prueba certificadas con barrera de aislamiento y fusibles cerámicos de alta capacidad de ruptura (HRC)",
      "Cualquier multímetro económico sin categoría",
      "Un buscapolos de destornillador de neón",
      "Un amperímetro analógico de aguja para maquetas"
    ],
    "correctIndex": 0,
    "explanation": "Los circuitos de tracción automotriz tienen altísima energía de cortocircuito; un multímetro inferior a CAT III 1000V puede sufrir un arco eléctrico explosivo (arc flash) en las manos del operador.",
    "skill": "Equipamiento de Medición para Alta Tensión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentación de Seguridad Eléctrica",
    "subtopic": "Norma de Categoría CAT III / CAT IV"
  },
  {
    "id": "mec-tec-84",
    "sectionId": 1,
    "number": 84,
    "text": "¿Cómo funciona la 'Frenada Regenerativa' en un vehículo híbrido o eléctrico?",
    "options": [
      "El motor eléctrico de tracción conmuta su funcionamiento para actuar como generador impulsado por la inercia de las ruedas, convirtiendo la energía cinética del frenado en energía eléctrica para recargar la batería de alta tensión",
      "Los frenos de disco generan electricidad con cables térmicos",
      "El alternador tradicional de 12V se acopla a las ruedas",
      "El motor térmico comprime gasolina hacia el depósito"
    ],
    "correctIndex": 0,
    "explanation": "Al actuar como generador, crea un par de retención electromagnético que frena el automóvil sin desgaste de pastillas ni calentamiento térmico, devolviendo la energía a la batería.",
    "skill": "Eficiencia y Frenado Regenerativo",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Vehículos Híbridos y Eléctricos",
    "subtopic": "Frenado Regenerativo y Generador MG2"
  },
  {
    "id": "mec-tec-85",
    "sectionId": 1,
    "number": 85,
    "text": "¿Qué función cumple el sistema de control de aislamiento de alta tensión en un vehículo híbrido o eléctrico?",
    "options": [
      "Monitorea de forma continua la resistencia de aislamiento óhmica entre los polos positivo y negativo del bus de alta tensión y la masa del chasis; si detecta una fuga de aislamiento (<500 ohmios/voltio), abre los contactores de alta tensión",
      "Mide el aislamiento térmico del habitáculo",
      "Comprueba el grosor de la pintura exterior",
      "Aísla las ruedas del suelo con goma"
    ],
    "correctIndex": 0,
    "explanation": "El sistema de alta tensión es una red flotante aislada de chasis (sistema IT); si un cable toca la carrocería, el detector de aislamiento del BMS avisa antes de que un segundo contacto provoque un choque eléctrico mortal.",
    "skill": "Seguridad Eléctrica Automotriz",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Monitoreo de Aislamiento",
    "subtopic": "Resistencia de Aislamiento y Módulo BMS"
  },
  {
    "id": "mec-tec-86",
    "sectionId": 1,
    "number": 86,
    "text": "¿Cuál es la función del 'Inversor / Conversor' en el tren motriz de un vehículo híbrido o eléctrico?",
    "options": [
      "Convierte la corriente continua (DC) de la batería de tracción en corriente alterna trifásica (AC) de frecuencia y amplitud variables para accionar los motores eléctricos, y reduce mediante convertidor DC-DC la alta tensión a 12V para la batería auxiliar",
      "Invierte el sentido del parabrisas",
      "Convierte la gasolina en diésel",
      "Cambia la música de la radio automáticamente"
    ],
    "correctIndex": 0,
    "explanation": "Utiliza módulos de transistores IGBT o de carburo de silicio (SiC) refrigerados por líquido refrigerante independiente para conmutar cientos de amperios a alta frecuencia.",
    "skill": "Electrónica de Potencia Automotriz",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Inversores de Tracción",
    "subtopic": "Inversor Trifásico y Convertidor DC-DC"
  },
  {
    "id": "mec-tec-87",
    "sectionId": 1,
    "number": 87,
    "text": "¿Qué función cumplen los 'Contactores Principales de Alta Tensión' (SMR - System Main Relays) en la batería de un vehículo híbrido?",
    "options": [
      "Relés electromagnéticos de potencia de alta tensión que conectan o aíslan físicamente los polos positivo y negativo de la batería de tracción con el resto del vehículo bajo control estricto del BMS",
      "Frenar las ruedas traseras",
      "Conectar el claxon con la alarma",
      "Encender las luces de emergencia"
    ],
    "correctIndex": 0,
    "explanation": "Incorporan un contactor de precarga con resistencia en serie (SMR Precharge) para cargar suavemente los condensadores del inversor antes de cerrar el contactor principal, evitando soldadura de contactos por chispazo.",
    "skill": "Contactores de Potencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Baterías de Tracción",
    "subtopic": "Contactores SMR y Circuito de Precarga"
  },
  {
    "id": "mec-tec-88",
    "sectionId": 1,
    "number": 88,
    "text": "¿Cuál es el propósito del 'Circuito Interlock de Seguridad' (Pilot Line o HVIL - High Voltage Interlock Loop) en vehículos electrificados?",
    "options": [
      "Un circuito de baja tensión de 12V en bucle continuo que pasa por todos los conectores, tapas e interruptores de alta tensión; si cualquier enchufe se desconecta o afloja, el lazo se abre y el BMS desconecta inmediatamente la alta tensión",
      "Bloquear las puertas al pasar de 20 km/h",
      "Impedir que el conductor acelere sin el cinturón puesto",
      "Trabar el capó con llave"
    ],
    "correctIndex": 0,
    "explanation": "El lazo HVIL es un mecanismo a prueba de fallos: garantiza que nadie pueda tocar un terminal vivo retirando una tapa o soltando un conector, pues la alta tensión se desenergiza antes de que los pines se separen físicamente.",
    "skill": "Sistemas de Seguridad Pasiva Eléctrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Seguridad de Alta Tensión",
    "subtopic": "Circuito de Seguridad HVIL (Interlock)"
  },
  {
    "id": "mec-tec-89",
    "sectionId": 1,
    "number": 89,
    "text": "¿Qué función cumple el sistema de 'Balanceo de Celdas' en el módulo de gestión de batería (BMS)?",
    "options": [
      "Equilibrar el estado de carga (SOC) y el voltaje de cada una de las celdas individuales conectadas en serie disipando energía de las celdas más cargadas (balanceo pasivo) o transfiriendo energía entre ellas (balanceo activo)",
      "Pesar las celdas para que el vehículo no se incline",
      "Alinear los polos magnéticos del motor eléctrico",
      "Calentar el habitáculo del automóvil"
    ],
    "correctIndex": 0,
    "explanation": "La capacidad total de un pack de baterías en serie está limitada por la celda más débil; el balanceo regular previene sobrecargas destructivas en celdas individuales y maximiza la vida útil del pack de litio.",
    "skill": "Gestión de Celdas de Batería",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Baterías de Ión-Litio",
    "subtopic": "Balanceo de Celdas en BMS"
  },
  {
    "id": "mec-tec-90",
    "sectionId": 1,
    "number": 90,
    "text": "¿Qué prueba técnica con escáner permite evaluar el estado de salud de la batería de alta tensión (SOH - State of Health) de un vehículo híbrido?",
    "options": [
      "Comprobar la resistencia interna de cada bloque de celdas en miliohmios (mΩ) y la dispersión delta de voltaje entre la celda con mayor y menor tensión bajo aceleración fuerte y regeneración",
      "Medir el volumen de la batería en centímetros cúbicos",
      "Pintar los bornes con barniz protector",
      "Comprobar el peso de la batería"
    ],
    "correctIndex": 0,
    "explanation": "Una celda degradada eleva su resistencia interna y sufre una caída acusada de voltaje bajo carga fuerte (delta > 0.2V); el escáner delata bloques fatigados que requieren sustitución de módulos.",
    "skill": "Diagnóstico de Baterías de Tracción",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Estado de Salud de Baterías (SOH)",
    "subtopic": "Delta de Tensión y Resistencia Interna de Celdas"
  },
  {
    "id": "mec-tec-91",
    "sectionId": 1,
    "number": 91,
    "text": "¿Cuál es la función del 'Enfriador de la Válvula EGR' (EGR Cooler) en motores diésel modernos?",
    "options": [
      "Un intercambiador de calor donde el líquido refrigerante del motor enfría los gases de escape recirculados antes de ingresar a la admisión, aumentando su densidad y reduciendo aún más la formación de NOx",
      "Enfriar el aire acondicionado de la cabina",
      "Disipar el calor de los neumáticos delanteros",
      "Calentar el combustible en el riel"
    ],
    "correctIndex": 0,
    "explanation": "Los gases a 600 °C calentarían la admisión; al enfriarlos con el refrigerante a ~150 °C, ocupan menos volumen permitiendo meter más masa de gas inerte reductor de temperatura de combustión.",
    "skill": "Sistemas EGR Refrigerados",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Control de Emisiones",
    "subtopic": "Enfriador de Gases EGR (EGR Cooler)"
  },
  {
    "id": "mec-tec-92",
    "sectionId": 1,
    "number": 92,
    "text": "¿Qué avería grave puede provocar una fisura interna en el enfriador de gases EGR (EGR Cooler)?",
    "options": [
      "Consumo inexplicable de líquido refrigerante que pasa a la admisión o escape produciendo humo blanco denso, o acumulación de líquido en los cilindros con riesgo de bloqueo hidráulico (hidrolock) al arrancar",
      "Aumento en el volumen de la radio",
      "Que el velocímetro no marque la velocidad",
      "Que se enciendan las luces de stop"
    ],
    "correctIndex": 0,
    "explanation": "El refrigerante a presión se fuga hacia el conducto de gases; si el motor reposa apagado, el refrigerante escurre por las válvulas abiertas al interior del cilindro; al dar arranque, el pistón choca con líquido incompresible doblando la biela.",
    "skill": "Diagnóstico de Fugas de Refrigerante",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Averías de Enfriadores de EGR",
    "subtopic": "Fisura Interna de EGR Cooler y Golpe Hidráulico"
  },
  {
    "id": "mec-tec-93",
    "sectionId": 1,
    "number": 93,
    "text": "¿Cuál es la función de los 'Sensores de Óxidos de Nitrógeno' (sensores NOx) colocados antes y después del catalizador SCR?",
    "options": [
      "Medir en partes por millón (PPM) la concentración de NOx en los gases de escape para que la ECU dosifique con exactitud la cantidad de urea (AdBlue) inyectada y supervise la eficiencia del sistema SCR",
      "Medir el nivel de aceite en el cárter",
      "Controlar la temperatura de los discos de freno",
      "Detectar fugas de combustible en el tanque"
    ],
    "correctIndex": 0,
    "explanation": "Los sensores NOx cerámicos operan con bombas amperométricas de oxígeno a más de 700 °C; la comparación entre el sensor aguas arriba y aguas abajo comprueba la reducción química del catalizador.",
    "skill": "Sensores de Emisiones Químicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas SCR Euro 6",
    "subtopic": "Sensores de NOx Cerámicos"
  },
  {
    "id": "mec-tec-94",
    "sectionId": 1,
    "number": 94,
    "text": "¿Qué componente del sistema SCR pulveriza la solución de urea (AdBlue) presurizada en la corriente de escape caliente?",
    "options": [
      "El inyector o dosificador de AdBlue (DEF Dosing Injector)",
      "La bomba de agua del radiador",
      "El inyector de gasolina convencional",
      "La bujía de precalentamiento"
    ],
    "correctIndex": 0,
    "explanation": "Es un inyector electromagnético enfriado habitualmente por líquido refrigerante que dosifica la urea a unos 5-8 bar para pulverizarla finamente antes del mezclador de escape.",
    "skill": "Actuadores de Reducción Catalítica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Dosificación de Urea",
    "subtopic": "Inyector Dosificador de AdBlue (DEF)"
  },
  {
    "id": "mec-tec-95",
    "sectionId": 1,
    "number": 95,
    "text": "¿Por qué el depósito y tuberías de AdBlue cuentan con resistencias de calefacción eléctricas integradas?",
    "options": [
      "Porque la disolución de urea al 32.5% se congela a -11 °C; las resistencias eléctricas la descongelan rápidamente en climas fríos para permitir la inyección y cumplir con la legalidad de emisiones",
      "Para evaporar el aditivo dentro del maletero",
      "Para calentar el asiento del conductor",
      "Para calentar el agua del lavaparabrisas"
    ],
    "correctIndex": 0,
    "explanation": "Por química eutéctica, el AdBlue cristaliza a -11 °C; la ECU activa los calentadores del tanque y mangueras con líneas calefactadas tan pronto el sensor de temperatura ambiental detecta heladas.",
    "skill": "Sistemas Anticongelación de AdBlue",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mantenimiento de AdBlue",
    "subtopic": "Calefacción del Depósito de Urea a -11 °C"
  },
  {
    "id": "mec-tec-96",
    "sectionId": 1,
    "number": 96,
    "text": "¿Qué síntoma provoca la cristalización blanca de urea alrededor de la tobera del inyector de AdBlue en el escape?",
    "options": [
      "Obstrucción del inyector por evaporación incompleta, código de falla DTC por inyección insuficiente de reactivo y advertencia de bloqueo de arranque en el cuadro",
      "Aumento en la potencia del motor",
      "Que el tubo de escape se vuelva invisible",
      "Que el combustible rinda el doble"
    ],
    "correctIndex": 0,
    "explanation": "La urea cristalizada forma masas sólidas de ácido cianúrico que taponan el escape e inyector; se limpia con agua caliente desmineralizada y se recalibra la dosificación por escáner.",
    "skill": "Mantenimiento de Sistemas SCR",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico de Sistemas AdBlue",
    "subtopic": "Cristalización de Urea y Obstrucción de Inyector"
  },
  {
    "id": "mec-tec-97",
    "sectionId": 1,
    "number": 97,
    "text": "¿Cuál es la función del 'Sensor de Posición del Cigüeñal' (CKP) al ser verificado con un osciloscopio en el momento del arranque?",
    "options": [
      "Verificar que genere una señal periódica limpia sin distorsión y comprobar que el espacio correspondiente a los dos dientes faltantes (dientes de sincronismo de PMS) se dibuje nítidamente sin ruido parásito",
      "Comprobar si tiene corriente continua constante de 12V",
      "Verificar que enfríe el aceite del motor",
      "Medir el diámetro de los pistones"
    ],
    "correctIndex": 0,
    "explanation": "La señal senoidal (o cuadrada) del CKP debe presentar una pausa o salto simétrico correspondiente al hueco de referencia de la rueda fónica (ej. 60-2 dientes); deformaciones indican rueda fónica descentrada o virutas metálicas en el sensor.",
    "skill": "Análisis de Señal de Sincronismo",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Osciloscopio Automotriz",
    "subtopic": "Comprobación de Rueda Fónica y Dientes Faltantes"
  },
  {
    "id": "mec-tec-98",
    "sectionId": 1,
    "number": 98,
    "text": "¿Qué precaución técnica se debe tener al manipular y almacenar una 'Batería de Ión-Litio de Tracción' desmontada en el taller?",
    "options": [
      "Almacenarla en un área ignífuga ventilada, a una temperatura de 15-25 °C con un estado de carga (SOC) de almacenamiento de entre 30% y 50% (nunca al 0% ni al 100% por tiempo prolongado)",
      "Guardarla sumergida en un balde de agua común",
      "Descargarla completamente a 0 voltios para que no tenga peligro",
      "Dejarla expuesta a la luz solar directa sobre una chapa metálica"
    ],
    "correctIndex": 0,
    "explanation": "El almacenamiento prolongado al 100% de SOC acelera la degradación química de los electrodos; dejarla al 0% causa auto-descarga profunda por debajo del umbral de seguridad, destruyendo las celdas o provocando fuga térmica.",
    "skill": "Almacenamiento Seguro de Baterías de Litio",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Baterías de Alta Tensión",
    "subtopic": "SOC Óptimo de Almacenamiento en Celdas de Litio"
  },
  {
    "id": "mec-tec-99",
    "sectionId": 1,
    "number": 99,
    "text": "¿Qué fenómeno catastrófico 'Fuga Térmica' (Thermal Runaway) puede ocurrir en una celda de batería de ión-litio dañada mecánicamente o sobrecargada?",
    "options": [
      "Una reacción química exotérmica en cadena incontrolable donde la temperatura sube violentamente a cientos de grados en segundos, liberando gases inflamables tóxicos y oxígeno que provocan fuego autoalimentado e incandescente",
      "La congelación instantánea del electrolito",
      "La desaparición del litio por evaporación fría",
      "La inversión del campo magnético terrestre"
    ],
    "correctIndex": 0,
    "explanation": "Al perforarse el separador, el cortocircuito interno genera calor que descompone los óxidos metálicos liberando oxígeno propio; el fuego de litio no necesita oxígeno del aire y no se apaga con agua convencional.",
    "skill": "Riesgos Químicos en Alta Tensión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Seguridad en Baterías de Ión-Litio",
    "subtopic": "Fuga Térmica (Thermal Runaway)"
  },
  {
    "id": "mec-tec-100",
    "sectionId": 1,
    "number": 100,
    "text": "¿Cuál es la función del 'Generador de Sonido Acústico para Vehículos' (AVAS - Acoustic Vehicle Alerting System) obligatorio en vehículos eléctricos e híbridos a baja velocidad?",
    "options": [
      "Emitir un sonido acústico artificial audible hacia el exterior a velocidades inferiores a 20 km/h para alertar a peatones y personas ciegas de la aproximación del vehículo silencioso",
      "Hacer sonar música comercial para los peatones",
      "Imitar el sonido de un avión de combate a 200 km/h",
      "Asustar a animales en la carretera de noche"
    ],
    "correctIndex": 0,
    "explanation": "Por normativa internacional de seguridad vial (ONU R138 / Reglamento UE 2019/124), los vehículos silenciosos deben emitir sonido entre 0 y 20 km/h que varíe de tono con la velocidad para seguridad peatonal.",
    "skill": "Seguridad Vial y Vehículos Silenciosos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sistemas AVAS en Vehículos Eléctricos",
    "subtopic": "Sistema de Alerta Sonora Peatonal (AVAS)"
  }
];
