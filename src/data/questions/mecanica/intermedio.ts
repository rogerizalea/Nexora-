import { Question } from '../../../types';

export const MECANICA_INTERMEDIO: Question[] = [
  {
    "id": "mec-int-01",
    "number": 21,
    "text": "¿Cuál es la diferencia fundamental entre el ciclo termodinámico Otto (gasolina) y el ciclo Diésel respecto al método de ignición?",
    "options": [
      "El ciclo Otto no requiere combustible líquido",
      "El ciclo Otto inflama la mezcla mediante chispa eléctrica externa, mientras el Diésel enciende el combustible por autoignición debida a la alta temperatura del aire comprimido",
      "El motor Diésel utiliza tres bujías por cilindro",
      "El ciclo Otto comprime el combustible a 1000 bar antes de entrar"
    ],
    "correctIndex": 1,
    "explanation": "El motor diésel tiene relaciones de compresión muy altas (16:1 a 22:1); el aire comprimido alcanza entre 600°C y 800°C, inflamando espontáneamente el gasóleo pulverizado sin necesidad de bujía de chispa.",
    "skill": "Termodinámica de Motores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Ciclos de Combustión",
    "subtopic": "Otto vs Diésel"
  },
  {
    "id": "mec-int-02",
    "number": 22,
    "text": "¿Cuál es el orden de encendido más común en un motor de 4 cilindros en línea de 4 tiempos?",
    "options": [
      "1 - 2 - 3 - 4",
      "1 - 3 - 4 - 2",
      "4 - 3 - 2 - 1",
      "1 - 4 - 2 - 3"
    ],
    "correctIndex": 1,
    "explanation": "El orden 1-3-4-2 distribuye las detonaciones alternadamente entre los extremos y el centro del cigüeñal, equilibrando los momentos de flexión y vibraciones mecánicas de segundo orden.",
    "skill": "Mecánica de Motores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Equilibrado del Motor",
    "subtopic": "Orden de Encendido"
  },
  {
    "id": "mec-int-03",
    "number": 23,
    "text": "¿Qué componente del sistema de enfriamiento regula mecánicamente el paso de refrigerante hacia el radiador abriéndose solo cuando el motor alcanza su temperatura normal de operación (85°C - 95°C)?",
    "options": [
      "La bomba de agua centrífuga",
      "El termostato de cápsula de cera",
      "El sensor de presión barométrica",
      "El depósito de expansión"
    ],
    "correctIndex": 1,
    "explanation": "El termostato posee una cápsula con cera que se dilata al calentarse venciendo un resorte, abriendo la válvula hacia el radiador para mantener constante la temperatura óptima de servicio.",
    "skill": "Sistema de Refrigeración",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Control Térmico",
    "subtopic": "El Termostato"
  },
  {
    "id": "mec-int-04",
    "number": 24,
    "text": "¿Qué función cumple la sonda Lambda (sensor de oxígeno) instalada en el múltiple o tubo de escape?",
    "options": [
      "Medir la velocidad del vehículo en autopista",
      "Medir la concentración de oxígeno residual en los gases de escape para que la ECU ajuste la mezcla aire/combustible al punto estequiométrico (Lambda = 1.0)",
      "Enfriar el convertidor catalítico",
      "Inyectar combustible adicional al escape"
    ],
    "correctIndex": 1,
    "explanation": "La sonda lambda genera una señal de voltaje que informa a la ECU si la mezcla es rica (exceso de combustible) o pobre (exceso de aire), permitiendo correcciones en lazo cerrado (closed loop).",
    "skill": "Gestión Electrónica del Motor",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Sensores de Gestión",
    "subtopic": "Sensor de Oxígeno Lambda"
  },
  {
    "id": "mec-int-05",
    "number": 25,
    "text": "¿Cuál es el propósito del sensor MAF (Mass Air Flow) ubicado en el conducto de admisión de aire?",
    "options": [
      "Medir la masa de aire que ingresa al motor por unidad de tiempo mediante un hilo o película caliente",
      "Medir la presión de los neumáticos",
      "Calentar el aire del motor en invierno",
      "Detectar fugas de aceite en el cárter"
    ],
    "correctIndex": 0,
    "explanation": "El sensor MAF mide con precisión los gramos por segundo de aire admitido, permitiendo a la computadora de motor (ECU) dosificar exactamente la cantidad de combustible requerida para cada ciclo.",
    "skill": "Inyección Electrónica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Sensores de Admisión",
    "subtopic": "Sensor MAF"
  },
  {
    "id": "mec-int-06",
    "number": 26,
    "text": "¿Qué sistema de seguridad activa previene que las ruedas del vehículo se bloqueen completamente durante una frenada de emergencia, manteniendo el control direccional?",
    "options": [
      "El freno de mano mecánico",
      "El sistema ABS (Anti-lock Braking System)",
      "La suspensión de ballestas",
      "El diferencial autoblocante"
    ],
    "correctIndex": 1,
    "explanation": "El ABS modula la presión hidráulica en milisegundos mediante electroválvulas cuando los sensores de rueda detectan tendencia al bloqueo, permitiendo al conductor seguir maniobrando con el volante.",
    "skill": "Sistemas de Frenos Avanzados",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Seguridad Activa",
    "subtopic": "Sistema ABS"
  },
  {
    "id": "mec-int-07",
    "number": 27,
    "text": "¿Qué ocurre en un motor denominado de interferencia si la correa de distribución (timing belt) se rompe repentinamente en funcionamiento?",
    "options": [
      "El motor sigue funcionando con la mitad de potencia",
      "Los pistones que suben colisionan violentamente contra las válvulas que quedaron abiertas, doblando válvulas y destruyendo culata y pistones",
      "Se activa automáticamente una correa de respaldo de emergencia",
      "Solo se apagan las luces del tablero"
    ],
    "correctIndex": 1,
    "explanation": "En motores de interferencia el espacio de la cámara de combustión es reducido para alta compresión; sin sincronismo, los pistones alcanzan a las válvulas abiertas con daños catastróficos severos.",
    "skill": "Sincronización del Motor",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Distribución Mecánica",
    "subtopic": "Motores de Interferencia"
  },
  {
    "id": "mec-int-08",
    "number": 28,
    "text": "¿Qué significa la configuración de motor DOHC (Double Overhead Camshaft)?",
    "options": [
      "Un motor con dos cilindros opuestos horizontales",
      "Dos árboles de levas situados en la culata (uno para válvulas de admisión y otro para válvulas de escape)",
      "Doble carburador de tiro invertido",
      "Un motor con dos cigüeñales paralelos"
    ],
    "correctIndex": 1,
    "explanation": "DOHC cuenta con dos árboles de levas montados sobre la culata por bancada, permitiendo accionar directamente 4 o 5 válvulas por cilindro con mejor flujo respiratorio a altas RPM.",
    "skill": "Mecánica de Culatas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Sistemas de Distribución",
    "subtopic": "Arquitectura DOHC"
  },
  {
    "id": "mec-int-09",
    "number": 29,
    "text": "¿Cuál es la función del diferencial en el eje motriz de un automóvil?",
    "options": [
      "Hacer que ambas ruedas giren siempre a exactamente la misma velocidad en las curvas",
      "Permitir que la rueda exterior gire más rápido que la rueda interior durante una curva para evitar derrapes y arrastre de neumáticos",
      "Aumentar la velocidad del motor en línea recta",
      "Frenar la transmisión cuando llueve"
    ],
    "correctIndex": 1,
    "explanation": "Al trazar una curva, la rueda externa recorre mayor distancia que la interna; el engranaje diferencial permite velocidades angulares dispares repartiendo equitativamente el par de giro.",
    "skill": "Transmisión y Tren de Rodaje",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "El Diferencial",
    "subtopic": "Función en Curvas"
  },
  {
    "id": "mec-int-10",
    "number": 30,
    "text": "¿Qué gases contaminantes nocivos trata y neutraliza principalmente un convertidor catalítico de tres vías en un motor de gasolina?",
    "options": [
      "Vapor de agua, nitrógeno y argón",
      "Monóxido de carbono (CO), hidrocarburos no quemados (HC) y óxidos de nitrógeno (NOx)",
      "Metano, ozono y cloro",
      "Dióxido de azufre exclusivamente"
    ],
    "correctIndex": 1,
    "explanation": "Mediante metales nobles (platino, paladio y rodio), cataliza la oxidación de CO y HC en CO2 y H2O, y la reducción de NOx en nitrógeno elemental N2 inocuo.",
    "skill": "Control de Emisiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Postratamiento de Escape",
    "subtopic": "Catalizador de Tres Vías"
  },
  {
    "id": "mec-int-11",
    "number": 31,
    "text": "¿Cómo amplifica el servofreno (booster de freno) la fuerza que el pie del conductor aplica sobre el pedal?",
    "options": [
      "Mediante un motor eléctrico de 220 voltios",
      "Aprovechando el vacío generado por el múltiple de admisión (o bomba de vacío) que actúa sobre una membrana elástica",
      "Mediante resortes de acero templado",
      "Aumentando la cantidad de aire en las ruedas"
    ],
    "correctIndex": 1,
    "explanation": "La diferencia de presión entre el vacío del motor por un lado del diafragma y la presión atmosférica por el otro genera una fuerza asistida de varios cientos de Newtons sobre el pistón de la bomba de frenos.",
    "skill": "Sistema de Frenos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Asistencia de Frenado",
    "subtopic": "Servofreno de Vacío"
  },
  {
    "id": "mec-int-12",
    "number": 32,
    "text": "En la geometría de dirección y alineación de ruedas, ¿qué ángulo representa el \"Camber\" o caída?",
    "options": [
      "La inclinación de la rueda hacia adentro o hacia afuera vista desde el frente del vehículo respecto a la vertical",
      "La inclinación del eje de giro visto desde el lateral del vehículo",
      "La diferencia de distancia entre la parte delantera y trasera de las llantas vista desde arriba",
      "El ángulo de giro máximo del volante"
    ],
    "correctIndex": 0,
    "explanation": "El Camber es el ángulo de inclinación vertical de la rueda frontal. Un camber negativo mejora el apoyo lateral en curvas, pero un valor excesivo desgasta desigualmente el neumático.",
    "skill": "Alineación Automotriz",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Geometría de Dirección",
    "subtopic": "Ángulo Camber"
  },
  {
    "id": "mec-int-13",
    "number": 33,
    "text": "¿Qué componente de la suspensión conecta ambos lados de un mismo eje para reducir el balanceo e inclinación de la carrocería en las curvas?",
    "options": [
      "La barra estabilizadora (barra antirrolido)",
      "El palier de tracción",
      "La cremallera de dirección",
      "El puente trasero rígido"
    ],
    "correctIndex": 0,
    "explanation": "La barra estabilizadora es una barra de acero de torsión que transfiere parte de la fuerza de compresión de la suspensión de un lado hacia el lado opuesto, limitando el rolido del chasis.",
    "skill": "Suspensión y Estabilidad",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Dinámica de Chasis",
    "subtopic": "Barra Estabilizadora"
  },
  {
    "id": "mec-int-14",
    "number": 34,
    "text": "¿Qué función cumplen las bujías de precalentamiento (calentadores) en un motor Diésel?",
    "options": [
      "Producir la chispa continua para quemar el gasóleo en alta velocidad",
      "Precalentar la cámara de combustión o precámara antes y durante el arranque en frío para facilitar la autoignición",
      "Enfriar los inyectores diésel",
      "Cargar la batería durante la marcha"
    ],
    "correctIndex": 1,
    "explanation": "Los calentadores alcanzan más de 800°C en segundos mediante resistencias incandescentes, asegurando que el aire comprimido alcance la temperatura de inflamación cuando el motor está helado.",
    "skill": "Motores Diésel",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Arranque en Frío",
    "subtopic": "Bujías de Incandescencia"
  },
  {
    "id": "mec-int-15",
    "number": 35,
    "text": "¿Cuál es la función del convertidor de par hidrodinámico en una transmisión automática clásica?",
    "options": [
      "Reemplazar mecánicamente al embrague mediante acoplamiento fluido entre un impulsor (bomba) y una turbina con un estátor intermedio multiplicador de par",
      "Enfriar el radiador con aceite",
      "Regular la presión del turbo",
      "Detener el vehículo en caso de choque"
    ],
    "correctIndex": 0,
    "explanation": "El convertidor transmite par de giro a través de fluido ATF hidráulico. Su estátor interno desvía el flujo de retorno multiplicando el par motor al arrancar desde parado.",
    "skill": "Transmisiones Automáticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Convertidor de Par",
    "subtopic": "Acoplamiento Hidráulico"
  },
  {
    "id": "mec-int-16",
    "number": 36,
    "text": "¿Qué sistema anticontaminación recircula los vapores de gasolina evaporados del tanque de combustible hacia el múltiple de admisión mediante un filtro de carbón activado?",
    "options": [
      "El sistema EVAP (Evaporative Emission Control System)",
      "El sistema EGR",
      "El sistema ABS",
      "El compresor del aire acondicionado"
    ],
    "correctIndex": 0,
    "explanation": "El sistema EVAP almacena hidrocarburos evaporados en un cánister de carbón activado y los purga periódicamente hacia la admisión para que se quemen en el motor sin salir a la atmósfera.",
    "skill": "Emisiones Evaporativas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Sistemas Antipolución",
    "subtopic": "Sistema EVAP y Cánister"
  },
  {
    "id": "mec-int-17",
    "number": 37,
    "text": "¿Qué componente de la junta homocinética en los semiejes de tracción delantera permite transmitir el par motriz con velocidad angular constante incluso mientras la rueda gira y oscila por la suspensión?",
    "options": [
      "El fuelle o junta cardánica simple sin bolas",
      "La junta homocinética tipo Rzeppa con bolas de acero en pistas esféricas",
      "Un cable de acero trenzado",
      "Un embrague centrífugo"
    ],
    "correctIndex": 1,
    "explanation": "A diferencia de las crucetas simples que sufren aceleraciones cíclicas en ángulo, la junta Rzeppa mantiene una relación de velocidad 1:1 estricta entre el semieje y la rueda.",
    "skill": "Semiejes y Transmisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Juntas Homocinéticas",
    "subtopic": "Junta Rzeppa"
  },
  {
    "id": "mec-int-18",
    "number": 38,
    "text": "¿Qué medición eléctrica sobre una batería automotriz en reposo (motor apagado por varias horas) indica un estado de carga prácticamente del 100%?",
    "options": [
      "10.5 Voltios",
      "12.0 Voltios",
      "Aproximadamente 12.6 a 12.7 Voltios",
      "14.8 Voltios"
    ],
    "correctIndex": 2,
    "explanation": "Una batería de plomo-ácido de 6 celdas al 100% tiene un voltaje en circuito abierto de ~12.65V (2.11V por celda). Un valor de 12.0V representa menos del 25% de carga restante.",
    "skill": "Electricidad Automotriz",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Baterías de Plomo-Ácido",
    "subtopic": "Voltaje en Reposo"
  },
  {
    "id": "mec-int-19",
    "number": 39,
    "text": "¿Qué indica la primera cifra en la especificación de un aceite de motor multigrado como \"5W-30\"?",
    "options": [
      "El porcentaje de detergente sintético",
      "El grado de viscosidad en frío (invierno / Winter) evaluado a bajas temperaturas bajo cero",
      "La cantidad de litros recomendada en el cárter",
      "El número de válvulas del motor"
    ],
    "correctIndex": 1,
    "explanation": "El número antes de la \"W\" (Winter) especifica la fluidez del aceite al arrancar en frío según la norma SAE J300; un número menor (ej. 0W o 5W) asegura lubricación más rápida al motor frío.",
    "skill": "Lubricantes y Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Normas SAE de Aceite",
    "subtopic": "Viscosidad Multigrado"
  },
  {
    "id": "mec-int-20",
    "number": 40,
    "text": "¿Qué función cumple la bomba de combustible de alta presión (HPFP) en un sistema de inyección directa de gasolina (GDI)?",
    "options": [
      "Vaciar el tanque de reserva",
      "Elevar la presión de la gasolina desde ~4 bar (presión del tanque) hasta 150 a 350 bar para inyectar directamente dentro de la cámara de combustión durante la compresión",
      "Refrigerar la bujía de encendido",
      "Filtrar el aire exterior"
    ],
    "correctIndex": 1,
    "explanation": "En inyección directa, el inyector pulveriza contra la contrapresión del cilindro comprimido; la bomba mecánica de alta presión movida por el árbol de levas genera hasta 350 bar de presión en el riel.",
    "skill": "Inyección Directa GDI",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Sistemas de Inyección",
    "subtopic": "Bomba de Alta Presión"
  },
  {
    "id": "mec-int-21",
    "sectionId": 1,
    "number": 21,
    "text": "¿Cuál es la diferencia fundamental en el método de encendido de la mezcla entre el ciclo Otto (gasolina) y el ciclo Diésel?",
    "options": [
      "El ciclo Otto inflama la mezcla aire-combustible mediante una chispa eléctrica temporizada; el ciclo Diésel inflama el combustible inyectado por autoignición debida a la elevada temperatura del aire altamente comprimido",
      "El ciclo Diésel utiliza tres bujías por cilindro y el Otto ninguna",
      "El ciclo Otto comprime únicamente agua y el Diésel aceite",
      "No existe ninguna diferencia en el proceso físico de ignición"
    ],
    "correctIndex": 0,
    "explanation": "En el motor diésel, la relación de compresión comprime el aire a más de 500-700 °C; al pulverizarse el gasóleo a alta presión, se autoenciende sin necesidad de bujías de encendido.",
    "skill": "Termodinámica Automotriz",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Ciclos de Motores Térmicos",
    "subtopic": "Ciclo Otto vs Ciclo Diésel"
  },
  {
    "id": "mec-int-22",
    "sectionId": 1,
    "number": 22,
    "text": "¿Qué rango típico comprende la relación de compresión volumétrica (Rc) en motores de gasolina atmosféricos convencionales frente a los motores diésel?",
    "options": [
      "Gasolina: aproximadamente 9:1 a 12:1; Diésel: aproximadamente 16:1 a 22:1",
      "Gasolina: 25:1 a 35:1; Diésel: 4:1 a 6:1",
      "Gasolina y diésel tienen idéntica relación fija de 5:1",
      "Gasolina: 1:1; Diésel: 100:1"
    ],
    "correctIndex": 0,
    "explanation": "La gasolina no admite compresiones muy altas porque detonaría espontáneamente (picado de biela); el diésel requiere alta compresión (16:1 o más) para alcanzar la temperatura de autoignición del gasóleo.",
    "skill": "Parámetros del Motor",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Parámetros de Diseño del Motor",
    "subtopic": "Relación de Compresión Volumétrica"
  },
  {
    "id": "mec-int-23",
    "sectionId": 1,
    "number": 23,
    "text": "¿Cómo se define matemáticamente la Relación de Compresión (Rc) de un cilindro en función del volumen unitario (Vd o cilindrada unitaria) y el volumen de la cámara de combustión (Vc)?",
    "options": [
      "Rc = (Vd + Vc) / Vc",
      "Rc = Vd / Vc",
      "Rc = Vc / (Vd + Vc)",
      "Rc = Vd * Vc"
    ],
    "correctIndex": 0,
    "explanation": "La relación de compresión es el cociente entre el volumen máximo del cilindro (cuando el pistón está en PMI: Vd + Vc) y el volumen mínimo residual cuando el pistón llega a PMS (Vc).",
    "skill": "Cálculos del Motor Térmico",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Geometría del Motor",
    "subtopic": "Cálculo de la Relación de Compresión"
  },
  {
    "id": "mec-int-24",
    "sectionId": 1,
    "number": 24,
    "text": "¿Qué fenómeno anormal destructivo 'Detonación' (o picado de bielas / autoencendido) ocurre en un motor de gasolina cuando el combustible tiene un octanaje inferior al requerido?",
    "options": [
      "Una combustión espontánea y descontrolada de la mezcla en zonas alejadas de la bujía antes de que llegue el frente de llama regular, generando ondas de choque acústicas que golpean brutalmente los pistones",
      "La congelación instantánea del bloque motor",
      "El desprendimiento de las ruedas directrices",
      "La inversión del sentido de giro del alternador"
    ],
    "correctIndex": 0,
    "explanation": "Las ondas de choque de alta frecuencia (5-8 kHz) aumentan drásticamente la presión y temperatura instantáneas, pudiendo perforar la cabeza del pistón o romper los aros.",
    "skill": "Combustión y Combustibles",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Combustión Anormal",
    "subtopic": "Detonación y Número de Octano (RON/MON)"
  },
  {
    "id": "mec-int-25",
    "sectionId": 1,
    "number": 25,
    "text": "¿Qué mide el 'Número de Cetano' en el combustible diésel a diferencia del octanaje en la gasolina?",
    "options": [
      "La facilidad de autoignición y rapidez de encendido del combustible diésel tras ser inyectado (reducir el retraso a la autoignición)",
      "La cantidad de alcohol etílico disuelto en el tanque",
      "La resistencia a la evaporación a altas temperaturas",
      "El color del humo emitido por el escape"
    ],
    "correctIndex": 0,
    "explanation": "A mayor número de cetano (típicamente 51 o más), menor es el retraso a la autoignición, logrando un arranque en frío más suave, menor ruido característico (golpeteo diésel) y menores emisiones.",
    "skill": "Combustibles Diésel",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Combustibles y Combustión",
    "subtopic": "Número de Cetano"
  },
  {
    "id": "mec-int-26",
    "sectionId": 1,
    "number": 26,
    "text": "¿Cuál es la función de los 'Calentadores' o bujías de precalentamiento (glow plugs) en los motores diésel?",
    "options": [
      "Precalentar la cámara de combustión o precámara durante el arranque en frío para asegurar que el aire comprimido alcance la temperatura de autoignición",
      "Generar la chispa continua durante toda la marcha del vehículo",
      "Calentar el líquido de frenos en invierno",
      "Iluminar el cuadro de mandos con luz incandescente"
    ],
    "correctIndex": 0,
    "explanation": "Las bujías de precalentamiento alcanzan más de 850-1000 °C en segundos con su resistencia de incandescencia metálica o cerámica, facilitando el encendido en frío y reduciendo el humo blanco.",
    "skill": "Sistema de Precalentamiento Diésel",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Motores Diésel",
    "subtopic": "Bujías de Precalentamiento"
  },
  {
    "id": "mec-int-27",
    "sectionId": 1,
    "number": 27,
    "text": "¿En qué carrera del ciclo de 4 tiempos tanto las válvulas de admisión como las de escape permanecen simultáneamente cerradas de forma prolongada?",
    "options": [
      "Durante la carrera de Compresión y la carrera de Expansión (Combustión)",
      "Únicamente durante la carrera de Escape",
      "Durante la carrera de Admisión",
      "Las válvulas nunca están cerradas al mismo tiempo"
    ],
    "correctIndex": 0,
    "explanation": "Para comprimir la mezcla sin fugas y para que la fuerza expansiva de los gases empuje el pistón hacia abajo sin perder presión, ambas válvulas deben estar herméticamente cerradas.",
    "skill": "Diagrama de Distribución",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cinemática de Válvulas",
    "subtopic": "Sellado Valvular en Compresión y Expansión"
  },
  {
    "id": "mec-int-28",
    "sectionId": 1,
    "number": 28,
    "text": "¿Qué es el 'Cruce de Válvulas' (traslape valvular o solape) en el diagrama de distribución del motor?",
    "options": [
      "El breve periodo cercano al Punto Muerto Superior (PMS) donde la válvula de admisión comienza a abrirse antes de que la válvula de escape termine de cerrarse por completo",
      "El choque mecánico accidental de las válvulas contra la cabeza del pistón",
      "El cruce de cables eléctricos del distribuidor de encendido",
      "La colocación de válvulas en forma de X en la culata"
    ],
    "correctIndex": 0,
    "explanation": "El traslape aprovecha la inercia de salida de los gases de escape para crear un efecto de succión que arrastra la mezcla fresca entrante, mejorando el llenado volumétrico a altas RPM.",
    "skill": "Diagrama Práctico de Distribución",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Distribución del Motor",
    "subtopic": "Cruce o Traslape de Válvulas"
  },
  {
    "id": "mec-int-29",
    "sectionId": 1,
    "number": 29,
    "text": "¿Qué función cumple el 'Turbocompresor' accionado por los gases de escape?",
    "options": [
      "Aprovechar la energía cinética y térmica de los gases de escape para mover una turbina que impulsa un compresor centrífugo, forzando mayor masa de aire al interior de los cilindros (sobrealimentación)",
      "Enfriar el aceite del cárter a presión atmosférica",
      "Filtrar la gasolina antes de entrar a la bomba",
      "Generar corriente eléctrica para la batería"
    ],
    "correctIndex": 0,
    "explanation": "Al meter más aire comprimido (mayor densidad de oxígeno), permite inyectar más combustible proporcionalmente, aumentando drásticamente la potencia y par motor sin incrementar la cilindrada.",
    "skill": "Sobrealimentación del Motor",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistemas de Sobrealimentación",
    "subtopic": "Turbocompresor"
  },
  {
    "id": "mec-int-30",
    "sectionId": 1,
    "number": 30,
    "text": "¿Para qué se instala un radiador 'Intercooler' (intercambiador aire-aire o aire-agua) en un motor sobrealimentado por turbocompresor?",
    "options": [
      "Enfriar el aire de admisión calentado por la compresión del turbo antes de entrar a los cilindros, aumentando su densidad y reduciendo el riesgo de detonación",
      "Calentar el combustible diésel en el retorno",
      "Enfriar los discos de freno delanteros",
      "Condensar el agua del aire acondicionado"
    ],
    "correctIndex": 0,
    "explanation": "Al comprimir el aire, el turbo lo calienta a 120-150 °C reduciendo su densidad; el intercooler lo baja a 40-50 °C, incrementando la masa de oxígeno efectivo que entra al cilindro.",
    "skill": "Sobrealimentación y Rendimiento",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistemas de Admisión",
    "subtopic": "Radiador Intercooler"
  },
  {
    "id": "mec-int-31",
    "sectionId": 1,
    "number": 31,
    "text": "¿Cuál es la diferencia entre un sistema de inyección indirecta (MPI - Multipoint Injection) y un sistema de inyección directa de gasolina (GDI)?",
    "options": [
      "En MPI el inyector pulveriza la gasolina en el colector de admisión antes de la válvula; en GDI el inyector pulveriza el combustible a altísima presión directamente dentro de la cámara de combustión",
      "MPI utiliza carburador y GDI no usa combustible",
      "GDI solo funciona en motores de dos cilindros",
      "MPI no requiere bomba de combustible eléctrica"
    ],
    "correctIndex": 0,
    "explanation": "GDI permite operar con mezclas estratificadas, mayor relación de compresión y enfriamiento por evaporación dentro del cilindro, reduciendo el consumo y aumentando la eficiencia térmica.",
    "skill": "Sistemas de Inyección de Gasolina",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Inyección de Combustible",
    "subtopic": "Inyección Indirecta (MPI) vs Directa (GDI)"
  },
  {
    "id": "mec-int-32",
    "sectionId": 1,
    "number": 32,
    "text": "¿A qué rango de presiones aproximado trabaja el riel de inyección en un sistema tradicional de inyección indirecta de gasolina (MPI)?",
    "options": [
      "Aproximadamente entre 2.5 y 4.0 bar (35 a 60 PSI)",
      "Aproximadamente 2.000 bar (29.000 PSI)",
      "A 0.1 bar exclusivamente",
      "A más de 10.000 bar"
    ],
    "correctIndex": 0,
    "explanation": "La bomba eléctrica sumergida en el depósito mantiene el riel a una presión constante de ~3 a 3.5 bar regulada por un regulador mecánico o modulación electrónica de la bomba.",
    "skill": "Presión en Sistemas de Inyección",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Riel de Inyección de Gasolina",
    "subtopic": "Presión de Trabajo en MPI"
  },
  {
    "id": "mec-int-33",
    "sectionId": 1,
    "number": 33,
    "text": "¿Qué componente mantiene constante la diferencia de presión entre el riel de combustible y la presión del colector de admisión en sistemas de inyección indirecta tradicionales con retorno?",
    "options": [
      "El regulador de presión de combustible (con toma de vacío)",
      "El sensor de temperatura del refrigerante",
      "La mariposa del acelerador",
      "El filtro de carbón activado (canister)"
    ],
    "correctIndex": 0,
    "explanation": "El diafragma del regulador con resorte compensa con el vacío del múltiple, asegurando que el caudal inyectado dependa únicamente del tiempo de apertura eléctrica del inyector.",
    "skill": "Regulación de Presión",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Alimentación de Combustible",
    "subtopic": "Regulador de Presión de Combustible"
  },
  {
    "id": "mec-int-34",
    "sectionId": 1,
    "number": 34,
    "text": "¿Cuál es la función del sistema evaporativo 'EVAP' (con su filtro Canister de carbón activado) en el vehículo?",
    "options": [
      "Almacenar temporalmente los vapores de hidrocarburos emitidos por la gasolina en el tanque para purgarlos y quemarlos en el motor, evitando que escapen a la atmósfera",
      "Evaporar el agua del radiador",
      "Aspirar el polvo del habitáculo",
      "Reciclar el aceite usado de la transmisión"
    ],
    "correctIndex": 0,
    "explanation": "El carbón activado adsorbe los vapores de combustible cuando el vehículo está estacionado; al encender y calentarse, la válvula solenoide de purga los envía al colector para combustión limpia.",
    "skill": "Control de Emisiones Evaporativas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistemas Anticontaminación",
    "subtopic": "Sistema EVAP y Canister"
  },
  {
    "id": "mec-int-35",
    "sectionId": 1,
    "number": 35,
    "text": "¿Cuál es la relación estequiométrica ideal aire/combustible teórica por peso para una combustión completa en un motor de gasolina?",
    "options": [
      "14.7 partes de aire por 1 parte de gasolina en masa (Lambda λ = 1.0)",
      "1 parte de aire por 14.7 partes de gasolina",
      "50 partes de aire por 1 parte de gasolina",
      "5 partes de aire por 5 partes de gasolina"
    ],
    "correctIndex": 0,
    "explanation": "Con 14.7 kg de aire por cada kg de gasolina (relación estequiométrica λ=1), el convertidor catalítico de 3 vías alcanza su máxima eficiencia de conversión simultánea para CO, HC y NOx.",
    "skill": "Química de la Combustión",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Mezcla Aire-Combustible",
    "subtopic": "Relación Estequiométrica y Factor Lambda"
  },
  {
    "id": "mec-int-36",
    "sectionId": 1,
    "number": 36,
    "text": "¿Qué significa que un motor funcione con una mezcla de combustible 'Rica' (Rich mixture) en términos del factor Lambda (λ)?",
    "options": [
      "Lambda < 1.0: hay exceso de combustible o defecto de aire respecto a la proporción estequiométrica",
      "Lambda > 1.0: hay exceso de aire",
      "Lambda = 1.0 exacto",
      "Lambda es igual a cero"
    ],
    "correctIndex": 0,
    "explanation": "Una mezcla rica (ej. λ = 0.85 a 0.90) aporta máxima potencia pero incrementa el consumo y las emisiones de monóxido de carbono (CO) e hidrocarburos no quemados (HC).",
    "skill": "Dosificación de Combustible",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Gestión de Mezcla",
    "subtopic": "Mezcla Rica vs Mezcla Pobre"
  },
  {
    "id": "mec-int-37",
    "sectionId": 1,
    "number": 37,
    "text": "¿Cuál es la función de la válvula EGR (Exhaust Gas Recirculation o Recirculación de Gases de Escape)?",
    "options": [
      "Reintroducir un porcentaje controlado de gases de escape inertes a la admisión para reducir la temperatura pico de combustión y disminuir la formación de óxidos de nitrógeno (NOx)",
      "Aumentar el ruido deportivo del escape",
      "Acelerar el vehículo en bajadas pronunciadas",
      "Inyectar gasolina extra en el catalizador"
    ],
    "correctIndex": 0,
    "explanation": "El NOx se forma a temperaturas superiores a 1370 °C con exceso de oxígeno; los gases inertes diluyen la mezcla actuando como disipador térmico, reduciendo la temperatura pico de llama.",
    "skill": "Control de Emisiones NOx",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistemas Anticontaminación",
    "subtopic": "Válvula EGR"
  },
  {
    "id": "mec-int-38",
    "sectionId": 1,
    "number": 38,
    "text": "¿Qué sensor situado en el colector de admisión mide la presión absoluta interna para calcular la carga del motor en sistemas sin sensor de flujo másico?",
    "options": [
      "Sensor MAP (Manifold Absolute Pressure)",
      "Sensor TPS",
      "Sensor de detonación (Knock)",
      "Sensor de nivel de combustible"
    ],
    "correctIndex": 0,
    "explanation": "El sensor MAP utiliza un elemento piezoeléctrico de silicio para enviar una señal de voltaje proporcional a la presión o vacío existente tras la mariposa del acelerador.",
    "skill": "Sensores del Motor",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Gestión Electrónica",
    "subtopic": "Sensor MAP"
  },
  {
    "id": "mec-int-39",
    "sectionId": 1,
    "number": 39,
    "text": "¿Qué sensor colocado en el conducto de admisión mide directamente la masa de aire entrante al motor utilizando el principio de hilo o película caliente?",
    "options": [
      "Sensor MAF (Mass Air Flow)",
      "Sensor Hall del cigüeñal",
      "Sensor de picado",
      "Sensor de velocidad de rueda"
    ],
    "correctIndex": 0,
    "explanation": "El sensor MAF mantiene un filamento de platino a temperatura constante; el flujo de aire enfría el filamento y la corriente requerida para mantener la temperatura refleja con precisión los gramos/segundo de aire.",
    "skill": "Sensores de Admisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Gestión Electrónica",
    "subtopic": "Sensor de Flujo Másico de Aire (MAF)"
  },
  {
    "id": "mec-int-40",
    "sectionId": 1,
    "number": 40,
    "text": "¿Cuál es la función del cuerpo de aceleración electrónico (Drive-by-Wire o acelerador electrónico)?",
    "options": [
      "Controlar la apertura de la mariposa mediante un servomotor comandado por la ECU según la posición del pedal del acelerador y las demandas del control de tracción y crucero, eliminando el cable mecánico",
      "Frenar el motor accionando una palanca en las ruedas",
      "Bombear aceite al árbol de levas",
      "Cortar la corriente eléctrica de las bujías al aparcar"
    ],
    "correctIndex": 0,
    "explanation": "El pedal envía señales eléctricas de potenciómetros a la ECU; esta calcula el par motor óptimo y acciona un motor DC paso a paso acoplado a la mariposa, mejorando emisiones y seguridad activa.",
    "skill": "Control Electrónico de Admisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistemas de Aceleración",
    "subtopic": "Acelerador Electrónico Drive-by-Wire"
  },
  {
    "id": "mec-int-41",
    "sectionId": 1,
    "number": 41,
    "text": "¿En qué consiste el sistema de encendido directo 'COP' (Coil-On-Plug o bobina sobre bujía) frente al sistema tradicional con distribuidor?",
    "options": [
      "Cada bujía tiene su propia bobina de encendido individual montada directamente sobre ella sin cables de alta tensión, controlada electrónicamente por la ECU",
      "Usa una sola bobina para los cuatro cilindros con un rotor giratorio",
      "Elimina las bujías utilizando cables de fibra óptica",
      "Funciona exclusivamente con pilas alcalinas AA"
    ],
    "correctIndex": 0,
    "explanation": "El sistema COP suprime el distribuidor mecánico y los cables de alta tensión (que sufrían pérdidas por radiación y desgaste), ofreciendo un control de chispa individualizado y tiempos de saturación (dwell) mayores.",
    "skill": "Sistemas de Encendido Modernos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistema de Encendido",
    "subtopic": "Encendido COP (Coil-On-Plug)"
  },
  {
    "id": "mec-int-42",
    "sectionId": 1,
    "number": 42,
    "text": "¿Cuál es la función de una bobina de encendido de tipo transformador elevador en el automóvil?",
    "options": [
      "Transformar los 12V de la batería del vehículo en un pulso de alta tensión de entre 15.000V y 40.000V necesario para que salte el arco eléctrico entre los electrodos de la bujía",
      "Reducir los 12V a 1.5V para la radio",
      "Convertir corriente alterna en corriente trifásica",
      "Calentar el agua del limpiaparabrisas"
    ],
    "correctIndex": 0,
    "explanation": "La bobina almacena energía magnética en su devanado primario; al cortar abruptamente la corriente con un transistor de potencia, la autoinducción genera miles de voltios en el devanado secundario.",
    "skill": "Física del Encendido",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Bobinas de Encendido",
    "subtopic": "Transformación de Alta Tensión"
  },
  {
    "id": "mec-int-43",
    "sectionId": 1,
    "number": 43,
    "text": "¿Qué significa el 'Grado Térmico' de una bujía de encendido (bujía fría vs bujía caliente)?",
    "options": [
      "La capacidad de la bujía de disipar el calor desde su punta de encendido hacia la culata y el sistema de refrigeración del motor",
      "La temperatura máxima a la que se puede pintar el aislador",
      "El calor que emite para calentar el habitáculo",
      "La temperatura del aceite de motor"
    ],
    "correctIndex": 0,
    "explanation": "Una bujía 'fría' tiene el cono aislador corto y disipa calor velozmente (para motores de alto rendimiento); una 'caliente' tiene el cono largo reteniendo calor para quemar carbonilla en motores lentos.",
    "skill": "Selección de Bujías",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Bujías de Encendido",
    "subtopic": "Grado Térmico de la Bujía"
  },
  {
    "id": "mec-int-44",
    "sectionId": 1,
    "number": 44,
    "text": "¿Por qué el 'Avance del Encendido' debe aumentar (disparar la chispa más grados antes del Punto Muerto Superior) a medida que el régimen de giro (RPM) del motor se incrementa?",
    "options": [
      "Porque el tiempo químico de combustión de la mezcla es casi constante en milisegundos, por lo que a mayores RPM el pistón se mueve más rápido y la chispa debe saltar antes para que la presión máxima ocurra a ~10-14° después del PMS",
      "Porque el motor se enfría más rápido a altas revoluciones",
      "Porque la batería se descarga a altas RPM",
      "Para que el motor gire en sentido inverso"
    ],
    "correctIndex": 0,
    "explanation": "Si no se avanza la chispa a altas revoluciones, el pistón ya estaría descendiendo hacia el PMI cuando comience la fuerza de expansión, perdiendo par y sobrecalentando el escape.",
    "skill": "Sincronización del Encendido",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Control del Encendido",
    "subtopic": "Avance del Encendido vs RPM"
  },
  {
    "id": "mec-int-45",
    "sectionId": 1,
    "number": 45,
    "text": "¿Qué sensor inductivo o de efecto Hall situado junto al volante motor o polea suministra a la ECU la posición angular y la velocidad de rotación exacta del cigüeñal?",
    "options": [
      "Sensor CKP (Crankshaft Position Sensor)",
      "Sensor CMP",
      "Sensor IAT",
      "Sensor de nivel de aceite"
    ],
    "correctIndex": 0,
    "explanation": "El sensor CKP lee los dientes de una rueda fónica (ej. 60-2 o 36-1 dientes); la falta de dientes marca el punto de referencia de PMS, señal vital sin la cual la ECU no dispara chispa ni inyección.",
    "skill": "Sensores Fundamentales de Motor",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistemas Electrónicos",
    "subtopic": "Sensor CKP (Cigüeñal)"
  },
  {
    "id": "mec-int-46",
    "sectionId": 1,
    "number": 46,
    "text": "¿Cuál es la función del sensor CMP (Camshaft Position Sensor) en el árbol de levas?",
    "options": [
      "Identificar qué cilindro específico está en carrera de compresión para permitir la inyección secuencial fase por fase y la sincronización del encendido independiente",
      "Medir la temperatura del escape",
      "Controlar la presión de los neumáticos",
      "Abrir las puertas con el mando a distancia"
    ],
    "correctIndex": 0,
    "explanation": "El cigüeñal gira dos veces por cada vuelta del árbol de levas; el sensor CKP sabe que el pistón 1 está arriba, pero solo el CMP informa a la ECU si está en compresión o en escape.",
    "skill": "Sincronización de Inyección",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sensores del Motor",
    "subtopic": "Sensor CMP (Árbol de Levas)"
  },
  {
    "id": "mec-int-47",
    "sectionId": 1,
    "number": 47,
    "text": "¿Qué sensor piezoeléctrico atornillado en el bloque motor detecta vibraciones anormales de alta frecuencia causadas por la detonación permitiendo a la ECU retrasar el encendido?",
    "options": [
      "Sensor de picado (Knock Sensor)",
      "Sensor de presión barométrica",
      "Sensor de temperatura del aire (IAT)",
      "Sensor de posición del acelerador (TPS)"
    ],
    "correctIndex": 0,
    "explanation": "El Knock Sensor genera una señal de voltaje piezoeléctrico ante frecuencias de 5-8 kHz; si detecta picado de biela, la ECU atrasa el encendido 2 o 3 grados de inmediato protegiendo el motor.",
    "skill": "Protección Antidetonación",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Gestión Electrónica",
    "subtopic": "Sensor de Detonación (Knock Sensor)"
  },
  {
    "id": "mec-int-48",
    "sectionId": 1,
    "number": 48,
    "text": "¿Qué consecuencias graves causa la rotura en marcha de la correa de distribución en un motor de 'Interferencia'?",
    "options": [
      "El árbol de levas se detiene dejando válvulas abiertas mientras los pistones siguen subiendo, colisionando violentamente y doblando válvulas, dañando pistones y posiblemente la culata",
      "El motor continúa funcionando con solo 2 cilindros",
      "Se descarga inmediatamente la batería de 12V",
      "Se pinchan los neumáticos delanteros"
    ],
    "correctIndex": 0,
    "explanation": "En motores de interferencia las cámaras de combustión son compactas y las trayectorias de pistones y válvulas abiertas se cruzan en el espacio; sin sincronismo, la colisión mecánica es catastrófica.",
    "skill": "Mantenimiento de la Distribución",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistemas de Distribución",
    "subtopic": "Motores de Interferencia vs No Interferencia"
  },
  {
    "id": "mec-int-49",
    "sectionId": 1,
    "number": 49,
    "text": "¿Qué ventaja mecánica ofrece una 'Cadena de distribución' metálica lubricada con aceite frente a una 'Correa de distribución' dentada de goma sintética?",
    "options": [
      "Mayor durabilidad y resistencia al estiramiento, diseñada habitualmente para durar la vida útil del motor con revisiones periódicas de los tensores hidráulicos",
      "Menor sonoridad y cero vibración mecánica",
      "No requiere lubricación con aceite",
      "Se puede reemplazar sin abrir el motor en 5 minutos"
    ],
    "correctIndex": 0,
    "explanation": "La cadena de acero al cromo-níquel soporta cargas térmicas y esfuerzos de tracción muy superiores, mientras que la correa de caucho tiene una vida limitada por caducidad (típicamente 5 a 8 años o 100.000 km).",
    "skill": "Mecánica de Distribución",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Distribución del Motor",
    "subtopic": "Cadena vs Correa de Distribución"
  },
  {
    "id": "mec-int-50",
    "sectionId": 1,
    "number": 50,
    "text": "¿Para qué sirve el sistema de 'Distribución Variable' (como VVT-i, VTEC, VANOS)?",
    "options": [
      "Modificar dinámicamente en tiempo real el ángulo de fase y/o la alzada de las válvulas según el régimen de giro y carga del motor, logrando ralentí estable, bajas emisiones y máximo par a altas revoluciones",
      "Cambiar automáticamente de marcha en la caja manual",
      "Ajustar la presión de los neumáticos al acelerar",
      "Apagar el motor de arranque tras encender"
    ],
    "correctIndex": 0,
    "explanation": "Un árbol de levas fijo es un compromiso estático; los variadores electrohidráulicos o levas conmutables optimizan el llenado volumétrico en todo el rango de RPM.",
    "skill": "Tecnología de Distribución Variable",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Distribución Variable",
    "subtopic": "Sistemas VVT (Variable Valve Timing)"
  },
  {
    "id": "mec-int-51",
    "sectionId": 1,
    "number": 51,
    "text": "¿Por qué los discos de freno delanteros de los vehículos modernos suelen ser de tipo 'Ventilado' (con canales de aire radiales internos) en lugar de macizos?",
    "options": [
      "Para evacuar de forma mucho más rápida el intenso calor generado por la fricción durante frenadas exigentes, reduciendo el fenómeno de pérdida de eficacia por fatiga térmica (fading)",
      "Para que el disco pese el doble y aumente la inercia",
      "Para almacenar líquido de frenos dentro del disco",
      "Para producir sonidos de advertencia a los peatones"
    ],
    "correctIndex": 0,
    "explanation": "El eje delantero soporta más del 70% de la masa en deceleración; los canales internos actúan como una bomba centrífuga de aire que refrigera el rotor y previene el desvanecimiento de frenada (brake fade).",
    "skill": "Tecnología de Frenos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Frenos de Disco",
    "subtopic": "Discos Ventilados vs Macizos"
  },
  {
    "id": "mec-int-52",
    "sectionId": 1,
    "number": 52,
    "text": "¿Qué es el fenómeno de 'Fading' (fatiga o desvanecimiento) en el sistema de frenos de un automóvil?",
    "options": [
      "La pérdida drástica del coeficiente de fricción entre las pastillas y el disco debido al sobrecalentamiento extremo tras un uso intensivo continuado (ej. descenso prolongado de montaña)",
      "La rotura física del pedal de freno",
      "La congelación del líquido de frenos en invierno",
      "La desconexión del cable de masa de la batería"
    ],
    "correctIndex": 0,
    "explanation": "A temperaturas superiores a 500-600 °C, las resinas aglomerantes de las pastillas gasifican formando un colchón gaseoso lubricante que reduce drásticamente la adherencia contra el rotor.",
    "skill": "Comportamiento Térmico de Frenos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Dinámica de Frenado",
    "subtopic": "Fenómeno de Fading (Fatiga Térmica)"
  },
  {
    "id": "mec-int-53",
    "sectionId": 1,
    "number": 53,
    "text": "¿Cuál es la función del 'Cilindro Maestro Tándem' (bomba de freno de doble circuito) en un automóvil?",
    "options": [
      "Generar presión hidráulica separada para dos circuitos independientes (típicamente en diagonal: rueda delantera izquierda con trasera derecha y viceversa), asegurando frenado residual si un circuito sufre una fuga",
      "Bombear aceite al diferencial trasero",
      "Cargar el acumulador del aire acondicionado",
      "Aumentar la presión del combustible en los inyectores"
    ],
    "correctIndex": 0,
    "explanation": "El circuito en 'X' o tándem es un requisito legal de seguridad: si se revienta un latiguillo en una rueda, el segundo pistón del cilindro maestro mantiene el 50% de la capacidad de frenado.",
    "skill": "Seguridad Hidráulica de Frenos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos Hidráulicos",
    "subtopic": "Bomba Tándem y Circuitos en Diagonal"
  },
  {
    "id": "mec-int-54",
    "sectionId": 1,
    "number": 54,
    "text": "¿Qué procedimiento técnico de taller 'Purga del circuito de frenos' (Bleeding) es indispensable realizar tras sustituir una pinza, bombín o líquido de frenos?",
    "options": [
      "Expulsar todo el aire atrapado dentro de las tuberías hidráulicas hasta que solo salga líquido limpio y libre de burbujas por los purgadores de cada rueda",
      "Lavar las pastillas de freno con agua y jabón",
      "Alinear los ángulos de avance de la dirección",
      "Comprobar el balanceo dinámico de las ruedas"
    ],
    "correctIndex": 0,
    "explanation": "El aire es altamente compresible; si queda una burbuja de aire en el circuito, la fuerza del pedal comprimirá la burbuja en lugar de mover los pistones, dejando el pedal esponjoso e ineficaz.",
    "skill": "Procedimientos de Taller",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Mantenimiento de Frenos",
    "subtopic": "Purga de Frenos y Eliminación de Aire"
  },
  {
    "id": "mec-int-55",
    "sectionId": 1,
    "number": 55,
    "text": "¿Qué componente de la pinza de freno flotante permite que el cuerpo de la pinza se desplace axialmente asegurando que ambas pastillas presionen uniformemente el disco?",
    "options": [
      "Los pernos guía deslizantes con casquillos y guardapolvos de goma",
      "El tornillo de purga",
      "El sensor de velocidad inductivo",
      "El resorte de retorno del pedal"
    ],
    "correctIndex": 0,
    "explanation": "En pinzas flotantes monopistón, el pistón empuja la pastilla interior y la reacción desliza el cuerpo de la pinza sobre sus pernos guía atrayendo la pastilla exterior contra el disco.",
    "skill": "Mecánica de Pinzas de Freno",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Frenos de Disco",
    "subtopic": "Pinza Flotante y Pernos Guía"
  },
  {
    "id": "mec-int-56",
    "sectionId": 1,
    "number": 56,
    "text": "¿Qué elemento del freno de tambor se encarga de compensar automáticamente el desgaste de las zapatas manteniendo la holgura mínima con el tambor sin requerir ajuste manual continuo?",
    "options": [
      "El mecanismo de aproximación o tensor automático (trinquete de ajuste automático)",
      "El muelle de retorno principal",
      "El bombín hidráulico",
      "El plato portazapatas fijo"
    ],
    "correctIndex": 0,
    "explanation": "Al accionarse el freno de servicio o de mano, una palanca acciona una rueda dentada roscada que expande el tirante de ajuste a medida que el ferodo de la zapata se desgasta.",
    "skill": "Mecánica de Frenos de Tambor",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Frenos de Tambor",
    "subtopic": "Tensor Automático de Zapatas"
  },
  {
    "id": "mec-int-57",
    "sectionId": 1,
    "number": 57,
    "text": "¿Cuál es la función del Repartidor Electrónico de Frenada (EBD - Electronic Brakeforce Distribution)?",
    "options": [
      "Modular y regular dinámicamente la presión de frenado aplicada a las ruedas traseras según la transferencia de carga para evitar que se bloqueen antes que las delanteras",
      "Repartir combustible equitativamente entre los cilindros",
      "Encender las luces de emergencia en caso de lluvia",
      "Equilibrar el peso del equipaje en el maletero"
    ],
    "correctIndex": 0,
    "explanation": "En frenadas fuertes, el peso del vehículo se transfiere al eje delantero deslastrando el eje trasero; el EBD reduce la presión trasera para evitar el trompo o pérdida de control direccional.",
    "skill": "Sistemas de Seguridad Activa",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistemas ABS / EBD",
    "subtopic": "Repartidor Electrónico de Frenada (EBD)"
  },
  {
    "id": "mec-int-58",
    "sectionId": 1,
    "number": 58,
    "text": "¿Qué ventaja ofrece el líquido de frenos sintético con especificación DOT 4 frente a un fluido tradicional DOT 3?",
    "options": [
      "Mayor punto de ebullición tanto en seco (mínimo 230 °C vs 205 °C) como en húmedo (mínimo 155 °C vs 140 °C), ofreciendo mayor margen térmico de seguridad",
      "Es de base de aceite mineral no corrosivo",
      "No requiere cambio nunca",
      "Aumenta la aceleración del automóvil"
    ],
    "correctIndex": 0,
    "explanation": "Los éteres de glicol y boratos de DOT 4 soportan solicitaciones térmicas más severas antes de hervir, siendo el estándar en vehículos modernos con ABS y discos ventilados.",
    "skill": "Especificaciones de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Líquidos de Freno",
    "subtopic": "Comparativa DOT 3 vs DOT 4"
  },
  {
    "id": "mec-int-59",
    "sectionId": 1,
    "number": 59,
    "text": "¿Por qué un líquido de frenos con base de silicona (DOT 5) NUNCA debe mezclarse con fluidos DOT 3, DOT 4 o DOT 5.1?",
    "options": [
      "Porque el DOT 5 es químicamente incompatible con los fluidos a base de glicol; mezclarlos causa separación de fases, emulsificación y degradación de los sellos de goma del sistema",
      "Porque cambia el color de los discos de freno a azul",
      "Porque apaga el motor del vehículo",
      "Porque los fluidos DOT 5 son exclusivamente para camiones de 18 ruedas"
    ],
    "correctIndex": 0,
    "explanation": "DOT 5 es de base silicona hidrofóbica y no es miscible con bases de poliglicol (DOT 3/4/5.1); la mezcla atrapa burbujas de agua pura que hierven a 100 °C provocando fallos de frenado.",
    "skill": "Compatibilidad Química de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Líquidos de Frenos",
    "subtopic": "Incompatibilidad de DOT 5 de Silicona"
  },
  {
    "id": "mec-int-60",
    "sectionId": 1,
    "number": 60,
    "text": "¿Qué componente mecánico de la pinza de freno actúa como un sello hidráulico elástico que además ayuda a retraer levemente el pistón al soltar el pedal?",
    "options": [
      "El anillo retén de sección cuadrada (Square-cut seal)",
      "El fuelle exterior guardapolvo",
      "El muelle helicoidal del émbolo",
      "La chapa antiruido de la pastilla"
    ],
    "correctIndex": 0,
    "explanation": "Al presurizarse, el anillo de sección cuadrada se deforma elásticamente; al caer la presión hidráulica, su memoria elástica recupera su forma arrastrando el pistón hacia atrás ~0.1 mm para eliminar el roce residual.",
    "skill": "Diseño Mecánico de Cáliper",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Pinzas de Freno",
    "subtopic": "Retén de Sección Cuadrada y Retracción"
  },
  {
    "id": "mec-int-61",
    "sectionId": 1,
    "number": 61,
    "text": "En una caja de cambios manual, ¿cuál es la función de los 'Sincronizadores' (anillos sincronizadores de bronce o carbono)?",
    "options": [
      "Igualar por fricción la velocidad de rotación del piñón loco con el manguito desplazable del eje antes de que sus dientes de acoplamiento engranen, eliminando ruidos y 'rascadas'",
      "Lubricar el cárter de la caja de cambios",
      "Frenar el volante de inercia al cambiar de marcha",
      "Enfriar los engranajes mediante circulación de aire"
    ],
    "correctIndex": 0,
    "explanation": "El cono del sincronizador roza contra el cono del piñón igualando las velocidades angulares; una vez sincronizados, el muelle y manguito traban suavemente sin choque de dientes.",
    "skill": "Cajas de Cambio Manuales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Caja de Cambios Manual",
    "subtopic": "Mecanismo de los Sincronizadores"
  },
  {
    "id": "mec-int-62",
    "sectionId": 1,
    "number": 62,
    "text": "¿Por qué los engranajes de marcha adelante en las cajas de cambios manuales son de dientes 'Helicoidales' mientras que la marcha atrás suele ser de dientes 'Rectos'?",
    "options": [
      "Los dientes helicoidales engranan progresivamente de forma mucho más silenciosa y soportan mayor par continuo; los dientes rectos son más sencillos y económicos para inversión por piñón desplazable inverso",
      "Los dientes rectos giran a mayor velocidad sin lubricación",
      "Los helicoidales solo pueden girar en sentido antihorario",
      "Es una norma estética sin implicaciones mecánicas"
    ],
    "correctIndex": 0,
    "explanation": "Los helicoidales transmiten la carga gradualmente a lo largo del diente eliminando el zumbido (whine); la marcha atrás suele usar piñón loco de dientes rectos, de ahí el característico aullido al retroceder.",
    "skill": "Engranajes Automotrices",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Caja de Cambios",
    "subtopic": "Dientes Helicoidales vs Dientes Rectos"
  },
  {
    "id": "mec-int-63",
    "sectionId": 1,
    "number": 63,
    "text": "¿Cuál es la función fundamental del 'Diferencial' en el eje motriz de un automóvil?",
    "options": [
      "Permitir que la rueda exterior gire más rápido que la rueda interior durante el trazado de una curva, manteniendo la transmisión continua de par a ambas ruedas",
      "Alinear las ruedas delanteras automáticamente",
      "Generar corriente eléctrica para las luces traseras",
      "Desconectar el motor de la transmisión al frenar"
    ],
    "correctIndex": 0,
    "explanation": "En una curva, la rueda exterior recorre un arco más largo; el conjunto de planetarios y satélites permite la diferencia de velocidades angulares impidiendo que los neumáticos patinen o se retuerza el palier.",
    "skill": "Cinemática de la Transmisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "El Diferencial",
    "subtopic": "Función de Satélites y Planetarios"
  },
  {
    "id": "mec-int-64",
    "sectionId": 1,
    "number": 64,
    "text": "¿Qué desventaja presenta un 'Diferencial Abierto' convencional cuando una de las dos ruedas motrices pisa una superficie resbaladiza (ej. hielo, barro o grava)?",
    "options": [
      "El diferencial envía todo el par y rotación a la rueda que no tiene adherencia (haciéndola girar descontrolada en vacío) mientras la rueda con agarre permanece inmóvil sin traccionar",
      "El diferencial se bloquea físicamente y se parte el cárter",
      "El motor se apaga instantáneamente por falta de aire",
      "Los frenos traseros se accionan al máximo automáticamente"
    ],
    "correctIndex": 0,
    "explanation": "Un diferencial abierto divide el par 50/50: el par máximo transferible al eje está limitado al par que pueda soportar la rueda con menor fricción (cero en hielo).",
    "skill": "Tracción y Dinámica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Diferenciales",
    "subtopic": "Comportamiento del Diferencial Abierto"
  },
  {
    "id": "mec-int-65",
    "sectionId": 1,
    "number": 65,
    "text": "¿Cómo acopla la fuerza del motor a la transmisión una caja de cambios automática convencional en lugar del embrague de disco seco?",
    "options": [
      "Mediante un Convertidor de Par hidrodinámico (Torque Converter) que transfiere el par a través de un flujo de fluido hidráulico impulsado por una bomba impulsora hacia una turbina",
      "Mediante dos imanes permanentes gigantescos",
      "A través de una correa de goma abierta",
      "Mediante cables de acero flexibles"
    ],
    "correctIndex": 0,
    "explanation": "El convertidor de par consta de bomba impulsora (girada por el motor), turbina (conectada a la transmisión) y estator intermedio con rueda libre que multiplica el par en aceleraciones desde parado.",
    "skill": "Transmisiones Automáticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cajas Automáticas",
    "subtopic": "Convertidor de Par Hidrodinámico"
  },
  {
    "id": "mec-int-66",
    "sectionId": 1,
    "number": 66,
    "text": "¿Qué tren de engranajes compacto 'Epicicloidal' (o planetario) se utiliza en las cajas de cambios automáticas tradicionales para lograr diferentes relaciones de desmultiplicación?",
    "options": [
      "Conjuntos de engranajes planetarios formados por un engranaje solar central, satélites montados en un portasatélites y una corona dentada exterior (anillo)",
      "Engranajes cónicos de madera tratada",
      "Tornillos sin fin acoplados a poleas dentadas",
      "Discos lisos de fricción sin dientes"
    ],
    "correctIndex": 0,
    "explanation": "Frenando selectivamente con embragues multidiscos o bandas uno de los componentes (solar, corona o portasatélites) y entrando potencia por otro, se obtienen múltiples marchas directas, reductoras o reversa.",
    "skill": "Mecánica de Cajas Automáticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Trenes Epicicloidales",
    "subtopic": "Conjunto Planetario, Solar y Corona"
  },
  {
    "id": "mec-int-67",
    "sectionId": 1,
    "number": 67,
    "text": "¿Cuál es la función del embrague de anulación o bloqueo del convertidor de par (Lock-Up Clutch)?",
    "options": [
      "Acoplar mecánicamente y de forma rígida la bomba con la turbina del convertidor a velocidad de crucero, eliminando el resbalamiento hidráulico y reduciendo el consumo de combustible",
      "Desconectar el motor para ir a vela",
      "Invertir el giro del cigüeñal",
      "Refrigerar los frenos del vehículo"
    ],
    "correctIndex": 0,
    "explanation": "El resbalamiento de fluido en el convertidor pierde un 5-10% de energía; el Lock-Up traba rígidamente ambos elementos igualando la eficiencia de una caja manual a velocidad de crucero.",
    "skill": "Eficiencia en Cajas Automáticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Convertidor de Par",
    "subtopic": "Embrague de Bloqueo (Lock-Up)"
  },
  {
    "id": "mec-int-68",
    "sectionId": 1,
    "number": 68,
    "text": "¿Qué tipo de transmisión automática 'CVT' (Continuously Variable Transmission) no utiliza relaciones de marchas fijas y ofrece una variación continua de desmultiplicación?",
    "options": [
      "Transmisión Variable Continua basada en dos poleas de garganta cónica de diámetro variable conectadas por una correa o cadena metálica",
      "Caja de doble embrague DCT",
      "Caja manual robotizada con un solo actuador",
      "Transmisión por cardán rígido sin engranajes"
    ],
    "correctIndex": 0,
    "explanation": "Al variar hidráulicamente el ancho de las poleas cónicas conductora y conducida, la relación de transmisión cambia de forma infinita y suave manteniendo el motor en su punto de par óptimo.",
    "skill": "Transmisiones CVT",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Tipos de Transmisiones",
    "subtopic": "Transmisión Continuamente Variable (CVT)"
  },
  {
    "id": "mec-int-69",
    "sectionId": 1,
    "number": 69,
    "text": "¿Cuál es el síntoma típico de desgaste severo del disco de embrague en un vehículo manual ('patina el embrague')?",
    "options": [
      "Al acelerar fuertemente en una marcha larga (ej. 3ª o 4ª) o en pendiente, las revoluciones del motor aumentan bruscamente pero la velocidad del vehículo apenas se incrementa",
      "El pedal de freno se bloquea en la parte superior",
      "Las luces del vehículo se apagan",
      "El volante vibra de forma incontrolable"
    ],
    "correctIndex": 0,
    "explanation": "El forro de fricción desgastado carece de coeficiente de agarre suficiente para transmitir el par del volante; el disco resbala contra el plato de presión disipando energía en calor y humo.",
    "skill": "Diagnóstico de Embrague",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Embrague Manual",
    "subtopic": "Patinamiento del Embrague"
  },
  {
    "id": "mec-int-70",
    "sectionId": 1,
    "number": 70,
    "text": "¿Cuál es la función del volante bimasa (Dual-Mass Flywheel - DMF) utilizado ampliamente en motores diésel y gasolina modernos?",
    "options": [
      "Dividir la masa del volante en dos partes unidas por resortes amortiguadores de arco para filtrar y absorber las vibraciones torsionales del motor antes de llegar a la caja de cambios",
      "Almacenar el doble de aceite de motor",
      "Tener dos coronas dentadas para dos motores de arranque",
      "Duplicar el peso del automóvil para mayor adherencia"
    ],
    "correctIndex": 0,
    "explanation": "Los motores modernos generan pulsos de par muy bruscos a bajas vueltas; el volante bimasa amortigua los picos torsionales protegiendo los engranajes de la caja y ofreciendo marcha silenciosa.",
    "skill": "Amortiguación Torsional",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Volante de Inercia",
    "subtopic": "Volante Bimasa (Dual-Mass Flywheel)"
  },
  {
    "id": "mec-int-71",
    "sectionId": 1,
    "number": 71,
    "text": "¿Qué componente del alternador automotriz convierte la corriente alterna (AC) trifásica inducida en el estator en corriente continua (DC) apta para la batería y la red eléctrica del vehículo?",
    "options": [
      "El puente rectificador de diodos (placa de diodos de potencia)",
      "Las escobillas de carbón",
      "La polea de rueda libre",
      "El condensador de encendido"
    ],
    "correctIndex": 0,
    "explanation": "El alternador genera corriente alterna trifásica; el puente de 6 o más diodos de silicio rectifica las ondas senoidales convirtiéndolas en corriente continua pulsante.",
    "skill": "Alternador y Rectificación",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistema de Carga",
    "subtopic": "Puente Rectificador de Diodos"
  },
  {
    "id": "mec-int-72",
    "sectionId": 1,
    "number": 72,
    "text": "¿Cuál es la función del 'Regulador de Tensión' integrado en el alternador?",
    "options": [
      "Variar la corriente de excitación que circula por el rotor para mantener constante el voltaje de salida del alternador en ~14V independientemente de las RPM del motor y la carga eléctrica",
      "Medir la velocidad del vehículo en km/h",
      "Desconectar el alternador en las bajadas",
      "Aumentar el voltaje a 220V para cargar teléfonos móviles"
    ],
    "correctIndex": 0,
    "explanation": "Si el motor acelera a 5000 RPM o se encienden todas las luces, el regulador modula por ancho de pulso (PWM) la corriente en la bobina del rotor para mantener el voltaje estrictamente estabilizado.",
    "skill": "Regulación de Voltaje",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistema de Carga",
    "subtopic": "Regulador de Voltaje Electrónico"
  },
  {
    "id": "mec-int-73",
    "sectionId": 1,
    "number": 73,
    "text": "¿Qué elemento del alternador moderno 'Polea desacopladora o de rueda libre' (OAP - Overrunning Alternator Pulley) reduce vibraciones y alarga la vida útil de la correa de accesorios?",
    "options": [
      "Permite que el rotor del alternador continúe girando libremente por inercia cuando el cigüeñal desacelera bruscamente, desacoplando los tirones torsionales de la correa",
      "Una polea de plástico blando que no gira",
      "Un ventilador que sopla aire a los neumáticos",
      "Un freno mecánico que detiene el alternador al frenar"
    ],
    "correctIndex": 0,
    "explanation": "Los motores diésel desaceleran abruptamente en cada compresión; la polea de rueda libre absorbe los picos de tensión impidiendo que la correa salte, chirríe o rompa el tensor.",
    "skill": "Accesorios del Motor",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Alternador",
    "subtopic": "Polea de Rueda Libre (OAP)"
  },
  {
    "id": "mec-int-74",
    "sectionId": 1,
    "number": 74,
    "text": "¿Qué dos funciones mecánicas y eléctricas realiza el 'Relé solenoide de arranque' montado sobre el motor de arranque?",
    "options": [
      "1. Desplaza mecánicamente la horquilla que empuja el piñón bendix para engranarlo en la corona; 2. Cierra los contactos de alta corriente para alimentar el motor eléctrico",
      "Apaga las luces y frena el vehículo",
      "Carga la batería con corriente de 24V",
      "Inyecta combustible en el tubo de escape"
    ],
    "correctIndex": 0,
    "explanation": "El solenoide es un contactor electromagnético dual: su núcleo atraído tira de la palanca de engrane del bendix y simultáneamente une los dos bornes de cobre grueso de paso de corriente.",
    "skill": "Mecánica del Motor de Arranque",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistema de Arranque",
    "subtopic": "Solenoide o Automático de Arranque"
  },
  {
    "id": "mec-int-75",
    "sectionId": 1,
    "number": 75,
    "text": "¿Qué mecanismo de rueda libre incorpora el piñón 'Bendix' del motor de arranque para protegerlo una vez que el motor térmico arranca?",
    "options": [
      "Un embrague unidireccional de rodillos que se desacopla inmediatamente cuando el motor térmico gira más rápido que el motor de arranque, impidiendo que el motor arrastre y destruya el inducido a miles de RPM",
      "Un resorte de plástico que se rompe",
      "Un imán que apaga la llave de contacto",
      "Un fusible térmico desechable"
    ],
    "correctIndex": 0,
    "explanation": "Con una relación de transmisión corona/piñón de 15:1, si el motor arranca a 1000 RPM arrastraría al motor de arranque a 15.000 RPM desintegrando sus bobinados por fuerza centrífuga si no patinara la rueda libre.",
    "skill": "Protección Mecánica de Arranque",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Motor de Arranque",
    "subtopic": "Piñón Bendix y Embrague Unidireccional"
  },
  {
    "id": "mec-int-76",
    "sectionId": 1,
    "number": 76,
    "text": "¿Qué parámetro de una batería de arranque automotriz mide la especificación 'CCA' (Cold Cranking Amps / Corriente de Arranque en Frío)?",
    "options": [
      "La corriente en amperios que una batería de 12V puede suministrar a -18 °C (0 °F) durante 30 segundos continuos manteniendo al menos un voltaje de 7.2 voltios",
      "La velocidad a la que se puede cargar la batería en verano",
      "El peso del plomo en kilogramos",
      "El número de veces que se puede encender la radio con el motor apagado"
    ],
    "correctIndex": 0,
    "explanation": "La norma SAE J537 define el CCA como la capacidad real de potencia de arranque en condiciones extremas de invierno donde el aceite es espeso y las reacciones electroquímicas son lentas.",
    "skill": "Parámetros Eléctricos de Baterías",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Baterías de Arranque",
    "subtopic": "Capacidad CCA (Cold Cranking Amps)"
  },
  {
    "id": "mec-int-77",
    "sectionId": 1,
    "number": 77,
    "text": "¿Cuál es la diferencia entre una batería convencional de plomo-ácido húmeda y una batería de tecnología 'AGM' (Absorbent Glass Mat)?",
    "options": [
      "En la batería AGM el electrolito ácido está totalmente absorbido en esteras de fibra de vidrio ultrafinas entre las placas de plomo, siendo sellada, a prueba de derrames y con mucho mayor resistencia a ciclos de carga rápida",
      "Las baterías AGM funcionan con energía nuclear",
      "Las baterías húmedas son de plástico transparente y las AGM de madera",
      "Las baterías AGM solo tienen un polo positivo"
    ],
    "correctIndex": 0,
    "explanation": "Las baterías AGM (y EFB) son indispensables en vehículos con sistemas automáticos Start-Stop porque soportan miles de arranques repetitivos continuos y recuperan energía de frenado regenerativo.",
    "skill": "Tecnología de Baterías Modernas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Baterías AGM y Start-Stop",
    "subtopic": "Tecnología AGM vs Plomo-Ácido Abierta"
  },
  {
    "id": "mec-int-78",
    "sectionId": 1,
    "number": 78,
    "text": "¿Cómo funciona un sistema de encendido y apagado automático 'Start-Stop' en las paradas de semáforo?",
    "options": [
      "La ECU apaga automáticamente el motor cuando el vehículo se detiene, está en punto muerto y con batería cargada, y lo reinicia ultra-rápido en milisegundos en cuanto el conductor pisa el embrague o suelta el freno",
      "Apaga el vehículo cortando las mangueras de combustible",
      "Desconecta los cables de la batería mecánicamente",
      "Hace sonar una alarma para que el conductor apague la llave manualmente"
    ],
    "correctIndex": 0,
    "explanation": "Reduce hasta un 8-15% el consumo urbano y emisiones en ralentí; monitorea estado de carga (SOC), temperatura del motor, demanda de climatización y presión de frenos antes de autorizar el apagado.",
    "skill": "Sistemas de Eficiencia Energética",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistemas Start-Stop",
    "subtopic": "Gestión Electrónica de Start-Stop"
  },
  {
    "id": "mec-int-79",
    "sectionId": 1,
    "number": 79,
    "text": "¿Qué prueba eléctrica con voltímetro 'Caída de Tensión' (Voltage Drop Test) se utiliza para diagnosticar falsos contactos y cables sulfatados en el circuito de arranque?",
    "options": [
      "Conectar las puntas del voltímetro en ambos extremos del mismo cable mientras circula la corriente de arranque; una lectura superior a 0.2V - 0.5V evidencia excesiva resistencia interna en ese tramo",
      "Medir el voltaje en el encendedor de cigarrillos con la radio encendida",
      "Desconectar el cable y comprobar si tiene corriente con la mano",
      "Medir el grosor del aislante con un calibre pie de rey"
    ],
    "correctIndex": 0,
    "explanation": "Por ley de Ohm (V = I * R), con 200A de arranque una resistencia diminuta de solo 0.01 ohm provocará una caída de 2V, robándole potencia al motor de arranque sin que un óhmetro estático lo delate.",
    "skill": "Diagnóstico Eléctrico de Potencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Técnicas de Diagnóstico Eléctrico",
    "subtopic": "Prueba de Caída de Tensión"
  },
  {
    "id": "mec-int-80",
    "sectionId": 1,
    "number": 80,
    "text": "¿Cuál es la función del 'Relé automotriz' de 4 o 5 pines en las instalaciones eléctricas del vehículo?",
    "options": [
      "Un interruptor electromagnético que permite controlar un circuito de alta corriente (ej. faros, electroventilador, bomba) mediante una señal de baja corriente proveniente de un interruptor o de la ECU",
      "Aumentar el volumen de los altavoces",
      "Cambiar el color de las luces exteriores",
      "Cargar la batería del teléfono mediante inducción"
    ],
    "correctIndex": 0,
    "explanation": "Con una pequeña corriente de 100 mA en la bobina de control (pines 85-86), acciona un contacto robusto (pines 30-87) capaz de conmutar 30 o 40 amperios, evitando cables gruesos en el tablero.",
    "skill": "Componentes Eléctricos Automotrices",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Relés Automotrices",
    "subtopic": "Funcionamiento del Relé Estándar"
  },
  {
    "id": "mec-int-81",
    "sectionId": 1,
    "number": 81,
    "text": "En la clasificación de aceites de motor según el Instituto Americano del Petróleo (API), ¿qué representa la primera letra en las categorías 'SP' y 'CK-4'?",
    "options": [
      "'S' (Service) indica aceite formulado para motores de gasolina; 'C' (Commercial) indica aceite formulado para motores diésel de servicio pesado",
      "'S' indica sintético y 'C' convencional mineral",
      "'S' indica que solo sirve en verano (Summer) y 'C' en frío (Cold)",
      "'S' es para camiones y 'C' para motocicletas"
    ],
    "correctIndex": 0,
    "explanation": "La serie API S (ej. SN, SP) define requerimientos para motores encendidos por chispa (gasolina); la serie C (ej. CH-4, CK-4) cubre motores encendidos por compresión (diésel).",
    "skill": "Normas Internacionales de Aceite",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Especificaciones de Lubricantes",
    "subtopic": "Clasificación API (Service vs Commercial)"
  },
  {
    "id": "mec-int-82",
    "sectionId": 1,
    "number": 82,
    "text": "En la clasificación europea de aceites de motor ACEA, ¿qué categoría identifica a los lubricantes 'Low/Mid SAPS' (bajo contenido en cenizas sulfatadas, fósforo y azufre) compatibles con filtros de partículas DPF/GPF?",
    "options": [
      "Categoría ACEA C (ej. C1, C2, C3, C4, C5)",
      "Categoría ACEA A (ej. A3/B4 para motores convencionales)",
      "Categoría ACEA E exclusiva de barcos",
      "Categoría ACEA X para vehículos de carreras"
    ],
    "correctIndex": 0,
    "explanation": "Las cenizas metálicas del aceite que se quema en el cilindro no pueden regenerarse en el filtro de partículas y lo obstruyen de forma permanente; los aceites ACEA C minimizan estos residuos.",
    "skill": "Aceites para Emisiones Modernas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Normativa ACEA",
    "subtopic": "Aceites Low SAPS (Categoría C)"
  },
  {
    "id": "mec-int-83",
    "sectionId": 1,
    "number": 83,
    "text": "¿Cuál es la diferencia de aplicación técnica entre un aceite de transmisión para engranajes clasificado como 'API GL-4' y uno 'API GL-5'?",
    "options": [
      "API GL-5 contiene el doble de aditivos de extrema presión (azufre-fósforo) para engranajes hipoides con alto deslizamiento; usar GL-5 en una caja manual que exige GL-4 puede corroer los sincronizadores de metales amarillos (bronce)",
      "GL-4 es para motores de combustión y GL-5 para radiadores",
      "GL-5 no contiene aceite y es una grasa sólida",
      "Ambos aceites son perfectamente intercambiables en cualquier vehículo"
    ],
    "correctIndex": 0,
    "explanation": "Los aditivos de azufre activo de GL-5 atacan químicamente las aleaciones de cobre/bronce de los sincronizadores de cajas manuales; GL-5 se reserva para diferenciales hipoides de alta carga.",
    "skill": "Lubricación de Cajas y Diferenciales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Aceites de Transmisión",
    "subtopic": "Normas API GL-4 vs GL-5"
  },
  {
    "id": "mec-int-84",
    "sectionId": 1,
    "number": 84,
    "text": "¿Qué problema severo de encendido prematuro a bajas revoluciones y alta carga (LSPI - Low-Speed Pre-Ignition) mitigan los nuevos aceites con norma API SP e ILSAC GF-6?",
    "options": [
      "La autoignición prematura y violenta de gotas de aceite en suspensión en cilindros de motores turboalimentados de inyección directa de gasolina (TGDI), que provocaba fracturas catastróficas de pistones",
      "El sobrecalentamiento del líquido del limpiaparabrisas",
      "La rotura de los cables del alternador",
      "La pérdida de líquido de frenos por las ruedas"
    ],
    "correctIndex": 0,
    "explanation": "LSPI es un fenómeno destructivo en motores reducidos (downsizing) TGDI; la especificación API SP reformuló los detergentes de calcio sustituyéndolos por magnesio para neutralizar este evento.",
    "skill": "Avances en Lubricación de Motores TGDI",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fenómeno LSPI",
    "subtopic": "Norma API SP y Mitigación de LSPI"
  },
  {
    "id": "mec-int-85",
    "sectionId": 1,
    "number": 85,
    "text": "¿Qué instrumento óptico portátil de precisión permite verificar el estado de degradación y envejecimiento relativo de una gota de aceite de motor en el taller?",
    "options": [
      "Prueba de la mancha de aceite en papel cromatográfico (Spot Test)",
      "Manómetro de presión de neumáticos",
      "Brújula magnética",
      "Termómetro para alimentos"
    ],
    "correctIndex": 0,
    "explanation": "La mancha concéntrica sobre papel de filtro revela por difusión el poder dispersante residual, el nivel de contaminación por hollín, la presencia de agua y la oxidación del lubricante.",
    "skill": "Técnicas de Análisis de Aceite",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Diagnóstico de Lubricantes",
    "subtopic": "Prueba de la Gota (Spot Test)"
  },
  {
    "id": "mec-int-86",
    "sectionId": 1,
    "number": 86,
    "text": "¿Por qué el filtro de combustible en los motores diésel incorpora en su base un sensor o tapón de purga de agua?",
    "options": [
      "Porque el gasóleo suele contener agua por condensación en los tanques; el filtro la decanta en el fondo y se debe drenar para impedir que el agua oxide y destruya la bomba de alta presión y los inyectores common rail",
      "Para enfriar los cilindros con agua reciclada",
      "Para añadir agua al combustible y reducir gastos",
      "Para regar las plantas del taller"
    ],
    "correctIndex": 0,
    "explanation": "El combustible diésel lubrica las piezas móviles internas de la bomba common rail; una gota de agua rompe la lubricación y causa agarrotamiento inmediato bajo presiones de 2000 bar.",
    "skill": "Mantenimiento Diésel",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Filtración Diésel",
    "subtopic": "Separador de Agua en Filtro Diésel"
  },
  {
    "id": "mec-int-87",
    "sectionId": 1,
    "number": 87,
    "text": "¿Cuál es la función del AdBlue (solución de urea de grado automotriz al 32.5% en agua desmineralizada) en los sistemas SCR de motores diésel?",
    "options": [
      "Inyectarse en los gases de escape antes del catalizador SCR para transformarse en amoníaco (NH₃) y descomponer catalíticamente los nocivos óxidos de nitrógeno (NOx) en nitrógeno inocuo (N₂) y agua (H₂O)",
      "Limpiar las llantas del vehículo mientras rueda",
      "Mezclarse en el depósito de gasóleo para aumentar los caballos de fuerza",
      "Lubricar el turbocompresor por el exterior"
    ],
    "correctIndex": 0,
    "explanation": "El sistema SCR (Selective Catalytic Reduction) según norma Euro 6 / EPA reduce más del 90% de las emisiones de NOx gracias a la reacción termoquímica de la urea en el escape.",
    "skill": "Sistemas Anticontaminación Euro 6",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Tecnología SCR y AdBlue",
    "subtopic": "Reducción Catalítica Selectiva (SCR)"
  },
  {
    "id": "mec-int-88",
    "sectionId": 1,
    "number": 88,
    "text": "¿Qué ocurre si se agota por completo el depósito de AdBlue en un vehículo diésel moderno conforme a la normativa de emisiones?",
    "options": [
      "El sistema de gestión electrónica impide el reencendido del motor una vez que el vehículo se detenga y se apague el contacto, obligando a reponer el aditivo",
      "El motor explota inmediatamente en marcha",
      "El automóvil cambia la tracción a las cuatro ruedas",
      "Las puertas del vehículo se bloquean permanentemente"
    ],
    "correctIndex": 0,
    "explanation": "Por exigencia legal ambiental, para evitar que el usuario circule contaminando sin urea, la ECU emite alertas progresivas durante cientos de kilómetros y finalmente bloquea el arranque si se ignora la advertencia.",
    "skill": "Normativa de Emisiones y Seguridad",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistemas de Emisiones",
    "subtopic": "Bloqueo por Falta de AdBlue"
  },
  {
    "id": "mec-int-89",
    "sectionId": 1,
    "number": 89,
    "text": "¿Cuál es la función del filtro de partículas diésel (DPF o FAP) y su proceso de 'Regeneración'?",
    "options": [
      "Retener mecánicamente en su matriz cerámica porosa las partículas sólidas de hollín (PM); la regeneración quema periódicamente el hollín acumulado a más de 600 °C transformándolo en CO₂ y cenizas mínimas",
      "Filtrar el aire de los neumáticos",
      "Purificar el agua del radiador",
      "Eliminar el exceso de aceite del motor"
    ],
    "correctIndex": 0,
    "explanation": "Cuando el sensor de presión diferencial detecta saturación de hollín, la ECU efectúa post-inyecciones de diésel para elevar la temperatura de escape a 600 °C y regenerar el filtro limpiándolo.",
    "skill": "Filtros de Partículas DPF",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistemas de Escape Diésel",
    "subtopic": "Regeneración del Filtro de Partículas (DPF)"
  },
  {
    "id": "mec-int-90",
    "sectionId": 1,
    "number": 90,
    "text": "¿Por qué los trayectos urbanos cortos y constantes a bajas revoluciones son perjudiciales para los motores diésel equipados con DPF?",
    "options": [
      "Porque los gases de escape nunca alcanzan la temperatura suficiente para iniciar o completar con éxito la regeneración del DPF, saturándolo de hollín y contaminando el aceite con gasóleo sin quemar",
      "Porque el depósito de combustible se congela",
      "Porque se descargan las bujías de encendido",
      "Porque se deforman los amortiguadores"
    ],
    "correctIndex": 0,
    "explanation": "Las regeneraciones abortadas causan que el combustible de post-inyección escurra por las paredes del cilindro al cárter, diluyendo el aceite lubricante e incrementando el nivel de aceite peligrosamente.",
    "skill": "Diagnóstico Operativo Diésel",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "DPF y Conducción Urbana",
    "subtopic": "Saturación del DPF y Dilución de Aceite"
  },
  {
    "id": "mec-int-91",
    "sectionId": 1,
    "number": 91,
    "text": "¿Cuál es la función de la barra estabilizadora en el sistema de suspensión automotriz?",
    "options": [
      "Una barra de acero elástica de torsión que conecta ambos lados de la suspensión para reducir el balanceo e inclinación lateral de la carrocería en curvas pronunciadas",
      "Soportar el peso vertical de los pasajeros",
      "Mantener el vehículo alineado en línea recta sin volante",
      "Evitar que las ruedas se desinflen"
    ],
    "correctIndex": 0,
    "explanation": "Al inclinarse la carrocería en una curva, la barra estabilizadora se retuerce transfiriendo parte de la fuerza al muelle interior, manteniendo el vehículo plano y estable.",
    "skill": "Dinámica del Chasis",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Sistema de Suspensión",
    "subtopic": "Barra Estabilizadora y Bieletas"
  },
  {
    "id": "mec-int-92",
    "sectionId": 1,
    "number": 92,
    "text": "¿Qué componente de la suspensión con articulación esférica 'Rótula de suspensión' une el brazo o trapecio oscilante con la mangueta de la rueda permitiendo giros y oscilaciones?",
    "options": [
      "La rótula de suspensión (ball joint)",
      "El silentblock de goma rígido",
      "El muelle helicoidal",
      "La barra de torsión fija"
    ],
    "correctIndex": 0,
    "explanation": "La rótula permite un movimiento pivotante tridimensional; el desgaste en su esfera o rotura de guardapolvo produce holguras peligrosas que pueden provocar el desprendimiento de la rueda.",
    "skill": "Componentes del Tren Delantero",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Suspensión y Dirección",
    "subtopic": "Rótulas de Suspensión"
  },
  {
    "id": "mec-int-93",
    "sectionId": 1,
    "number": 93,
    "text": "¿Qué son los 'Silentblocks' (casquillos elásticos de goma-metal) en los brazos de suspensión y subchasis?",
    "options": [
      "Elementos de unión flexible formados por manguitos metálicos vulcanizados a un bloque de elastómero que aíslan las vibraciones y ruidos de rodadura del chasis permitiendo movimiento elástico controlado",
      "Frenos de emergencia para cables de suspensión",
      "Cables de masa para evitar descargas estáticas",
      "Tornillos de titanio que no se desgastan"
    ],
    "correctIndex": 0,
    "explanation": "Absorben impactos de micro-irregularidades del asfalto; cuando la goma se agrieta o reseca por el tiempo, se generan golpes sordos ('clonck') al pasar por baches o frenar.",
    "skill": "Aislamiento Acústico y Dinámico",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Elementos Elásticos de Chasis",
    "subtopic": "Silentblocks de Suspensión"
  },
  {
    "id": "mec-int-94",
    "sectionId": 1,
    "number": 94,
    "text": "¿Cuál es la función del 'Cojinete de rueda' (rodamiento de maza) en el conjunto de rueda?",
    "options": [
      "Permitir el giro suave y con mínima fricción de la rueda bajo cargas radiales (peso del vehículo) y axiales (fuerzas centrífugas en curvas)",
      "Alinear el volante de dirección",
      "Lubricar el cárter del motor",
      "Evitar el sobrecalentamiento del tubo de escape"
    ],
    "correctIndex": 0,
    "explanation": "Los rodamientos de bolas o rodillos cónicos soportan toneladas de carga en rotación continua; su desgaste o picado de pistas produce un zumbido característico que aumenta con la velocidad.",
    "skill": "Mecánica de Rodadura",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Bujes y Rodamientos",
    "subtopic": "Rodamientos de Rueda (Cojinetes)"
  },
  {
    "id": "mec-int-95",
    "sectionId": 1,
    "number": 95,
    "text": "¿Qué ángulo geométrico de la dirección 'Camber' (ángulo de caída) se mide observando las ruedas desde el frente del vehículo?",
    "options": [
      "La inclinación de la rueda respecto a la vertical: caída negativa si la parte superior de la rueda se inclina hacia adentro, o positiva si se inclina hacia afuera",
      "El giro de las ruedas al accionar el volante",
      "La distancia entre el parachoques y el suelo",
      "El diámetro exterior de la llanta en milímetros"
    ],
    "correctIndex": 0,
    "explanation": "Una caída negativa moderada mejora el agarre lateral en curvas al apoyar la banda de rodadura plana cuando la carrocería rola; un camber excesivo desgasta el hombro interior del neumático.",
    "skill": "Geometría de la Dirección",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Alineación de Dirección",
    "subtopic": "Ángulo de Caída (Camber)"
  },
  {
    "id": "mec-int-96",
    "sectionId": 1,
    "number": 96,
    "text": "¿Qué ángulo geométrico 'Caster' (ángulo de avance) proporciona estabilidad direccional y retorno automático del volante al salir de una curva?",
    "options": [
      "La inclinación del eje de pivote de dirección hacia adelante o hacia atrás respecto a la vertical visto desde el lateral del vehículo",
      "El ángulo de apertura del capó",
      "La inclinación del parabrisas",
      "La curvatura de las pastillas de freno"
    ],
    "correctIndex": 0,
    "explanation": "Un avance positivo proyecta el punto de apoyo de la rueda por detrás del eje de giro del pivote (efecto rueda de carrito de compras), obligando a las ruedas a alinearse en línea recta automáticamente.",
    "skill": "Geometría de Dirección",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Alineación de Dirección",
    "subtopic": "Ángulo de Avance (Caster)"
  },
  {
    "id": "mec-int-97",
    "sectionId": 1,
    "number": 97,
    "text": "¿Qué ángulo geométrico 'Convergencia / Divergencia' (Toe-in / Toe-out) representa la diferencia de distancia entre la parte delantera y trasera de las ruedas del mismo eje vistas desde arriba?",
    "options": [
      "Convergencia (Toe-in) si las ruedas apuntan hacia adentro hacia el morro; Divergencia (Toe-out) si apuntan hacia afuera",
      "La inclinación de la carrocería al acelerar",
      "El diámetro de la barra estabilizadora",
      "La distancia entre ejes de tracción"
    ],
    "correctIndex": 0,
    "explanation": "La convergencia compensa la elasticidad de los silentblocks al rodar; un desajuste de solo 2 mm provoca desgaste en forma de 'diente de sierra' en la banda de rodadura y deriva direccional.",
    "skill": "Alineación y Desgaste",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Alineación del Tren Delantero",
    "subtopic": "Convergencia y Divergencia (Toe)"
  },
  {
    "id": "mec-int-98",
    "sectionId": 1,
    "number": 98,
    "text": "¿Cuál es la función del líquido refrigerante orgánico 'OAT' (Organic Acid Technology) frente a los refrigerantes inorgánicos tradicionales (IAT)?",
    "options": [
      "Utiliza inhibidores de corrosión de ácidos orgánicos biodegradables libres de silicatos y fosfatos, con una vida útil extendida de hasta 5 años o 250.000 km (Long Life)",
      "Está formulado exclusivamente con aceite vegetal",
      "No requiere radiador en el motor",
      "Hierve a solo 50 °C para no quemar mangueras"
    ],
    "correctIndex": 0,
    "explanation": "Los aditivos OAT protegen selectivamente las zonas de aluminio y aleaciones ligeras donde se inicia la corrosión sin recubrir con capas gruesas de silicato que restan intercambio térmico.",
    "skill": "Química de Refrigerantes",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Refrigerantes Long Life",
    "subtopic": "Tecnología OAT vs IAT"
  },
  {
    "id": "mec-int-99",
    "sectionId": 1,
    "number": 99,
    "text": "¿Qué función cumple el 'Sensor de Nivel de Aceite' electrónico ubicado en el cárter en vehículos modernos que carecen de varilla medidora física?",
    "options": [
      "Monitorea el nivel exacto de lubricante mediante capacitancia o ultrasonidos y lo comunica a la pantalla del cuadro de instrumentos para alertar de reposición",
      "Mide la temperatura del combustible en el depósito",
      "Filtra las partículas metálicas del aceite con un electroimán",
      "Inyecta aceite nuevo automáticamente desde un bidón auxiliar"
    ],
    "correctIndex": 0,
    "explanation": "Los sensores térmicos o ultrasónicos en el cárter miden el nivel estático y dinámico enviando datos por bus CAN al cuadro, facilitando el control de nivel sin mancharse las manos.",
    "skill": "Instrumentación Digital",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Monitoreo Electrónico",
    "subtopic": "Sensor Electrónico de Nivel de Aceite"
  },
  {
    "id": "mec-int-100",
    "sectionId": 1,
    "number": 100,
    "text": "¿Por qué es fundamental respetar el intervalo de sustitución de las bujías de encendido convencionales (cada ~30.000 km) o de platino/iridio (cada ~90.000 a 120.000 km)?",
    "options": [
      "Porque el desgaste por electroerosión agranda la distancia entre electrodos, exigiendo mayor tensión a la bobina hasta provocar fallos de encendido (misfires) y daños al catalizador",
      "Porque las bujías viejas pueden derretir el bloque motor",
      "Porque las bujías se convierten en imanes que frenan los pistones",
      "Porque el combustible no puede entrar al cilindro"
    ],
    "correctIndex": 0,
    "explanation": "Una luz de electrodos excesiva sobrecalienta las bobinas de encendido provocando tirones; el combustible no quemado sale al escape e inflama el monolito cerámico del catalizador fundiéndolo.",
    "skill": "Mantenimiento del Encendido",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Mantenimiento Preventivo",
    "subtopic": "Vida Útil de Bujías de Encendido"
  }
];
