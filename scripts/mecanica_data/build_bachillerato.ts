import { Question } from '../../types';

export const MEC_BACHILLERATO_21_100: Question[] = [
  {
    "id": "mec-bac-21",
    "sectionId": 1,
    "number": 21,
    "text": "En la arquitectura de sensores automotrices, ¿cuál es la diferencia fundamental en la señal de salida entre un sensor de cigüeñal (CKP) inductivo y uno de Efecto Hall?",
    "options": [
      "El inductivo es pasivo de 2 cables y genera una señal de voltaje alterno (AC) analógica senoidal cuya amplitud y frecuencia aumentan con las RPM; el sensor Hall es activo de 3 cables (alimentación, masa y señal) y genera una señal digital cuadrada de 0-5V constante",
      "El inductivo solo funciona con cables de fibra óptica y el Hall con WiFi",
      "El Hall es analógico y el inductivo es puramente binario de 24V",
      "Ambos sensores generan señales idénticas sin diferencias de osciloscopio"
    ],
    "correctIndex": 0,
    "explanation": "El sensor inductivo crea tensión variable por reluctancia magnética variable al pasar los dientes; el sensor Hall utiliza un semiconductor alimentado con 5V que conmuta a masa ante un campo magnético.",
    "skill": "Sensores de Sincronismo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Gestión Electrónica del Motor",
    "subtopic": "Sensores Inductivos vs Efecto Hall"
  },
  {
    "id": "mec-bac-22",
    "sectionId": 1,
    "number": 22,
    "text": "¿Qué tipo de comportamiento eléctrico resistivo exhibe el sensor de temperatura del refrigerante del motor (ECT - Engine Coolant Temperature)?",
    "options": [
      "Es un termistor de coeficiente de temperatura negativo (NTC): su resistencia eléctrica disminuye progresivamente a medida que la temperatura del refrigerante aumenta",
      "Es un termistor PTC cuya resistencia aumenta con el calor",
      "Es un interruptor digital de contacto seco que solo abre o cierra a 100 °C",
      "Es un cristal piezoeléctrico que genera miles de voltios"
    ],
    "correctIndex": 0,
    "explanation": "Un termistor NTC típico tiene ~3000 a 5000 ohmios a 20 °C (frío) y cae a ~200 a 300 ohmios a 90 °C (temperatura de régimen), permitiendo a la ECU enriquecer la mezcla en frío por divisor de tensión.",
    "skill": "Sensores Térmicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sensores del Motor",
    "subtopic": "Sensor ECT y Comportamiento NTC"
  },
  {
    "id": "mec-bac-23",
    "sectionId": 1,
    "number": 23,
    "text": "¿Cuál es el principio de funcionamiento del Sensor de Oxígeno convencional de dióxido de circonio (Sonda Lambda Narrowband) colocado antes del catalizador?",
    "options": [
      "Genera una fuerza electromotriz galvánica propia (de 0.1V a 0.9V) a partir de los 350 °C comparando la concentración de oxígeno en los gases de escape con el aire atmosférico de referencia",
      "Mide la temperatura del silenciador en grados Celsius",
      "Calcula la presión del gasóleo en el riel de inyección",
      "Absorbe el monóxido de carbono mediante una esponja química"
    ],
    "correctIndex": 0,
    "explanation": "Con mezcla rica (poco O₂ en escape), el gradiente de iones O²⁻ genera ~0.8-0.9V; con mezcla pobre (mucho O₂ residual), el voltaje cae a ~0.1-0.2V, oscilando continuamente en bucle cerrado (closed loop).",
    "skill": "Sondas Lambda",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Control de Emisiones en Bucle Cerrado",
    "subtopic": "Sonda Lambda de Circonio Narrowband"
  },
  {
    "id": "mec-bac-24",
    "sectionId": 1,
    "number": 24,
    "text": "¿Qué ventaja diagnóstica ofrece una Sonda Lambda de Banda Ancha (Wideband o LSU 4.9) frente a una sonda convencional Narrowband?",
    "options": [
      "Mide con precisión lineal continua el valor exacto de Lambda en un rango amplísimo (desde mezclas muy ricas λ = 0.65 hasta aire puro λ = ∞), en lugar de limitarse a indicar si la mezcla está por encima o por debajo de 1.0",
      "No requiere calentador eléctrico interno",
      "Es compatible con motores eléctricos puros",
      "Permite aumentar la cilindrada del motor sin abrirlo"
    ],
    "correctIndex": 0,
    "explanation": "Las sondas de banda ancha emplean una celda Nernst y una celda de bombeo de oxígeno electroquímica; la corriente de bombeo requerida para equilibrar la cámara de medición es directamente proporcional al factor Lambda.",
    "skill": "Sistemas de Inyección Avanzados",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sensores de Oxígeno",
    "subtopic": "Sonda Lambda Wideband (Banda Ancha)"
  },
  {
    "id": "mec-bac-25",
    "sectionId": 1,
    "number": 25,
    "text": "¿Qué información suministra la segunda Sonda Lambda (sonda post-catalizador o aguas abajo) ubicada después del convertidor catalítico?",
    "options": [
      "Monitorear la eficiencia catalítica del convertidor: si el catalizador almacena oxígeno correctamente, la señal post-catalizador debe ser casi plana y estable a ~0.45V - 0.6V",
      "Ajustar el tiempo de inyección principal ciclo a ciclo",
      "Medir la velocidad del velocímetro",
      "Detectar fugas en el depósito de gasolina"
    ],
    "correctIndex": 0,
    "explanation": "Si el catalizador está degradado o roto, la sonda trasera oscila rápidamente al unísono con la delantera, disparando de inmediato el código de avería P0420 (Eficiencia del catalizador por debajo del umbral).",
    "skill": "Diagnóstico OBD-II de Emisiones",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Monitoreo del Catalizador",
    "subtopic": "Sonda Post-Catalizador y Código P0420"
  },
  {
    "id": "mec-bac-26",
    "sectionId": 1,
    "number": 26,
    "text": "En un pedal de acelerador electrónico (APP - Accelerator Pedal Position), ¿por qué incorpora dos sensores potenciómetros internos (APP 1 y APP 2) en lugar de uno solo?",
    "options": [
      "Por redundancia de seguridad (Fail-Safe): la ECU compara constantemente ambas señales (ej. una entrega el doble de voltaje que la otra); si detecta discrepancia, entra en modo de emergencia (Limp-Home) para evitar aceleraciones involuntarias",
      "Uno acelera y el otro frena el vehículo",
      "Uno funciona los días pares y el otro los días impares",
      "Uno es para la primera marcha y el otro para marcha atrás"
    ],
    "correctIndex": 0,
    "explanation": "Si un sensor falla por pista sucia o cortocircuito, la correlación entre APP1 y APP2 se rompe; la ECU enciende el testigo MIL, desactiva la respuesta deportiva y limita el régimen a ~1500 RPM seguras.",
    "skill": "Seguridad Funcional Automotriz",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas Drive-by-Wire",
    "subtopic": "Redundancia en Sensores APP y TPS"
  },
  {
    "id": "mec-bac-27",
    "sectionId": 1,
    "number": 27,
    "text": "¿Cómo comanda la ECU del motor a un inyector de gasolina electromagnético convencional de alta impedancia (12-16 ohmios)?",
    "options": [
      "Suministrando 12V constantes a uno de sus bornes a través del relé principal y conmutando el terminal de retorno a masa mediante la saturación de un transistor de potencia interno (MOSFET/BJT) por modulación de ancho de pulso (PWM)",
      "Variando la tensión continua de 0 a 240 voltios",
      "Cambiando el combustible por aire a presión",
      "Empujando una varilla mecánica conectada al acelerador"
    ],
    "correctIndex": 0,
    "explanation": "La masa conmutada es el estándar: la ECU calcula el tiempo de inyección en milisegundos (típicamente 1.5 a 15 ms según carga); al cortar la masa, la autoinducción de la bobina del inyector genera un pico inductivo de 60-80V.",
    "skill": "Control de Actuadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Gestión de Inyección",
    "subtopic": "Control por Masa Conmutada de Inyectores"
  },
  {
    "id": "mec-bac-28",
    "sectionId": 1,
    "number": 28,
    "text": "¿Qué es el 'Pico Inductivo' (Flyback voltage) visible en la señal de osciloscopio de un inyector electromagnético en el instante exacto en que la ECU corta la masa?",
    "options": [
      "Un pico de voltaje agudo de autoinducción (Ley de Lenz) generado por el colapso repentino del campo magnético de la bobina del inyector, limitado a ~60-80V por un diodo Zener interno de la ECU",
      "Un cortocircuito que daña el fusible del encendido",
      "La explosión del combustible dentro del inyector",
      "Una señal de radio emitida hacia la antena"
    ],
    "correctIndex": 0,
    "explanation": "El colapso del flujo magnético induce una fuerza contraelectromotriz; la forma y altura del pico de flyback en el osciloscopio revelan si la bobina del inyector tiene espiras en cortocircuito.",
    "skill": "Diagnóstico con Osciloscopio",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Osciloscopio Automotriz",
    "subtopic": "Curva de Inyección y Pico de Autoinducción"
  },
  {
    "id": "mec-bac-29",
    "sectionId": 1,
    "number": 29,
    "text": "¿Qué característica distingue a los inyectores de combustible con tecnología 'Piezoeléctrica' utilizados en inyección directa common rail y GDI avanzada?",
    "options": [
      "Utilizan un actuador formado por cientos de láminas de cristal piezoeléctrico que se expanden instantáneamente al aplicarles ~150-200V, abriendo la aguja 4 veces más rápido que una bobina magnética y permitiendo hasta 5-7 pre y post-inyecciones por ciclo",
      "No utilizan electricidad y funcionan por calor directo",
      "Solo pueden inyectar combustible una vez cada cuatro vueltas",
      "Están fabricados enteramente de plástico reciclable"
    ],
    "correctIndex": 0,
    "explanation": "El actuador piezoeléctrico responde en menos de 0.1 milisegundos, dosificando cantidades microscópicas de combustible para combustión progresiva sin ruidos y mínimas emisiones de hollín.",
    "skill": "Inyección de Precisión",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Actuadores Piezoeléctricos",
    "subtopic": "Inyectores Piezoeléctricos vs Electromagnéticos"
  },
  {
    "id": "mec-bac-30",
    "sectionId": 1,
    "number": 30,
    "text": "¿Qué función cumple el 'Ajuste de Combustible a Corto Plazo' (STFT - Short Term Fuel Trim) en la gestión de bucle cerrado de la ECU?",
    "options": [
      "Efectuar correcciones porcentuales rápidas e instantáneas en el tiempo de inyección (típicamente entre -25% y +25%) respondiendo a las lecturas en vivo de la sonda Lambda para mantener la estequiometría",
      "Modificar el tamaño de las válvulas de admisión",
      "Guardar las contraseñas del conductor en la memoria EEPROM",
      "Calcular el kilometraje restante hasta el próximo peaje"
    ],
    "correctIndex": 0,
    "explanation": "Si la sonda detecta mezcla rica, la ECU baja el STFT a valores negativos (ej. -5%) restando milisegundos; si la mezcla es pobre, sube el STFT (+8%) inyectando más combustible en tiempo real.",
    "skill": "Estrategias de Inyección Bucle Cerrado",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Ajuste de Mezcla (Fuel Trims)",
    "subtopic": "STFT (Short Term Fuel Trim)"
  },
  {
    "id": "mec-bac-31",
    "sectionId": 1,
    "number": 31,
    "text": "¿Qué representa el 'Ajuste de Combustible a Largo Plazo' (LTFT - Long Term Fuel Trim) y cuándo se dispara un código de falla por mezcla pobre (P0171)?",
    "options": [
      "El LTFT es una corrección aprendida y almacenada en memoria no volátil que compensa derivas permanentes del motor (ej. envejecimiento, entradas de aire parásitas); si el LTFT supera el límite admisible (ej. +20% o +25%), la ECU dispara el DTC P0171",
      "Mide el nivel de combustible restante para viajes de más de 500 km",
      "Es el tiempo que tarda el motor en apagarse tras quitar la llave",
      "Indica que el filtro de habitáculo está obstruido"
    ],
    "correctIndex": 0,
    "explanation": "Si una toma de aire falsa introduce oxígeno no medido por el MAF, el STFT intenta compensar sumando gasolina; con el tiempo esa corrección se traslada a la tabla permanente de LTFT hasta saturar el límite y encender la luz Check Engine.",
    "skill": "Diagnóstico con Parámetros Vivos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Gestión de Mezcla",
    "subtopic": "LTFT y Diagnóstico de Códigos P0171 / P0172"
  },
  {
    "id": "mec-bac-32",
    "sectionId": 1,
    "number": 32,
    "text": "En el estándar OBD-II (SAE J2012 / ISO 15031-6), ¿qué significa la letra inicial en un código de diagnóstico de anomalía (DTC)?",
    "options": [
      "P = Tren motriz (Powertrain); C = Chasis (Chassis); B = Carrocería (Body); U = Redes de comunicación y buses (Network)",
      "P = Pintura; C = Combustible; B = Batería; U = Usuario",
      "P = Peligro; C = Precaución; B = Básico; U = Urgente",
      "P = Potencia; C = Cilindro; B = Bujía; U = Universal"
    ],
    "correctIndex": 0,
    "explanation": "La primera letra clasifica el subsistema: Powertrain (motor y transmisión), Chassis (frenos ABS, dirección, suspensión), Body (airbags, climatizador, luces) y Network (bus CAN, módulos desconectados).",
    "skill": "Estándar OBD-II",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Estructura de Códigos DTC",
    "subtopic": "Clasificación de Familias P, B, C y U"
  },
  {
    "id": "mec-bac-33",
    "sectionId": 1,
    "number": 33,
    "text": "En un código de falla como 'P0300', ¿qué indica el segundo dígito numérico ('0' frente a '1')?",
    "options": [
      "'0' indica un código estandarizado genérico común definido por la norma SAE/ISO; '1' (o superior) indica un código específico asignado por el fabricante del vehículo",
      "'0' significa avería sin importancia y '1' destrucción inminente",
      "'0' corresponde a vehículos de gasolina y '1' a diésel",
      "'0' indica fallo mecánico y '1' fallo de software"
    ],
    "correctIndex": 0,
    "explanation": "Los códigos P0xxx son interpretables por cualquier escáner universal OBD-II con el mismo significado en todas las marcas; los códigos P1xxx o P2xxx corresponden a estrategias propietarias de cada fabricante.",
    "skill": "Interpretación de Códigos OBD-II",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Diagnóstico OBD-II",
    "subtopic": "Códigos Genéricos vs Específicos del Fabricante"
  },
  {
    "id": "mec-bac-34",
    "sectionId": 1,
    "number": 34,
    "text": "¿Qué información almacena la 'Instantánea de Parámetros' (Freeze Frame) en la memoria de la ECU al registrarse un código de falla DTC?",
    "options": [
      "Una fotografía de los valores de los sensores del motor en el milisegundo exacto en que ocurrió la falla (RPM, velocidad, temperatura del refrigerante, carga del motor, STFT/LTFT)",
      "Una imagen fotográfica de la cara del conductor tomada por el retrovisor",
      "La música que sonaba en la radio en ese instante",
      "La posición satelital GPS de todos los talleres cercanos"
    ],
    "correctIndex": 0,
    "explanation": "El Freeze Frame es una herramienta invaluable de diagnóstico: permite saber si el fallo de encendido ocurrió con el motor frío o caliente, en ralentí o acelerando a fondo en autopista.",
    "skill": "Herramientas de Diagnóstico OBD-II",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Memoria de Averías",
    "subtopic": "Datos de Cuadro Congelado (Freeze Frame)"
  },
  {
    "id": "mec-bac-35",
    "sectionId": 1,
    "number": 35,
    "text": "¿Qué indica un código de avería genérico OBD-II 'P0302'?",
    "options": [
      "Fallo de encendido o combustión detectado específicamente en el Cilindro Número 2 (Cylinder 2 Misfire Detected)",
      "Sobrecalentamiento de la batería de 12V",
      "Presión baja en el neumático trasero derecho",
      "Falla en el motor del limpiaparabrisas"
    ],
    "correctIndex": 0,
    "explanation": "La serie P030x indica fallo de combustión (misfire): el último dígito señala el cilindro afectado (P0301 cilindro 1, P0302 cilindro 2, etc.), calculado por la ECU midiendo micro-deceleraciones del cigüeñal con el CKP.",
    "skill": "Diagnóstico de Fallos de Combustión",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Detección de Misfire",
    "subtopic": "Códigos P0300 - P030x"
  },
  {
    "id": "mec-bac-36",
    "sectionId": 1,
    "number": 36,
    "text": "¿Por qué un fallo de encendido grave (Misfire severo) hace que la luz Check Engine PARPADEE continuamente en lugar de quedarse fija?",
    "options": [
      "Porque el combustible sin quemar expulsado al escape se inflamará en el interior del catalizador superando los 1000 °C y fundiendo el monolito cerámico en segundos, requiriéndose detener el vehículo de inmediato",
      "Porque el alternador está sobrecargando la batería a 100V",
      "Porque se ha activado la alarma antirrobo del vehículo",
      "Porque el aceite se ha derramado sobre los frenos"
    ],
    "correctIndex": 0,
    "explanation": "El parpadeo de la luz MIL es una advertencia crítica de daño inminente al catalizador: exige soltar el acelerador y detener el motor de inmediato para evitar un incendio o destrucción del convertidor.",
    "skill": "Protocolos de Seguridad OBD-II",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Testigo MIL",
    "subtopic": "Luz MIL Intermitente y Protección del Catalizador"
  },
  {
    "id": "mec-bac-37",
    "sectionId": 1,
    "number": 37,
    "text": "¿Qué son los 'Monitores de Emisiones' (I/M Readiness Monitors) en el protocolo OBD-II?",
    "options": [
      "Rutinas de autodiagnóstico internas que la ECU ejecuta de forma autónoma durante ciclos de conducción específicos para comprobar el funcionamiento íntegro de catalizador, EVAP, EGR, sondas y encendido",
      "Cámaras de video que graban el escape del vehículo",
      "Sensores instalados en las calles para multar emisiones",
      "Pantallas digitales que muestran el consumo de gasolina"
    ],
    "correctIndex": 0,
    "explanation": "Los estados 'Ready' (Completado) o 'Not Ready' (Incompleto) son auditados en inspecciones técnicas vehiculares (RTV/ITV); borrar códigos con un escáner resetea los monitores a 'Not Ready' delatando la manipulación.",
    "skill": "Inspección Técnica y Emisiones",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Protocolo OBD-II",
    "subtopic": "Monitores I/M Readiness"
  },
  {
    "id": "mec-bac-38",
    "sectionId": 1,
    "number": 38,
    "text": "¿Qué es un 'Ciclo de Conducción OBD-II' (Drive Cycle)?",
    "options": [
      "Un patrón estandarizado de conducción que incluye arranque en frío, ralentí, aceleraciones progresivas, marcha sostenida en autopista a 80-100 km/h y desaceleraciones sin freno necesario para que la ECU complete todos sus monitores de autodiagnóstico",
      "El número de vueltas que da una rueda en un kilómetro",
      "Un viaje de ida y vuelta a la estación de servicio",
      "El tiempo que dura la garantía del fabricante"
    ],
    "correctIndex": 0,
    "explanation": "Cada monitor exige condiciones previas específicas (temperatura de motor, nivel de gasolina entre 15% y 85%, velocidad constante sin frenar) para ejecutar sus pruebas sin molestar al conductor.",
    "skill": "Validación de Diagnóstico",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Autodiagnóstico",
    "subtopic": "Ciclo de Conducción OBD-II"
  },
  {
    "id": "mec-bac-39",
    "sectionId": 1,
    "number": 39,
    "text": "¿Qué pin del conector de diagnóstico estándar OBD-II de 16 pines (J1962) corresponde habitualmente a la señal de bus 'CAN High' en vehículos modernos?",
    "options": [
      "Pin 6 (CAN High) y Pin 14 (CAN Low)",
      "Pin 1 (Positivo directo) y Pin 2 (Negativo)",
      "Pin 16 exclusivamente",
      "Pin 8 y Pin 9"
    ],
    "correctIndex": 0,
    "explanation": "El conector DLC de 16 pines estandariza: Pin 4 (masa chasis), Pin 5 (masa señal), Pin 6 (CAN High), Pin 14 (CAN Low) y Pin 16 (+12V permanente de batería).",
    "skill": "Topología del Conector DLC",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Conector OBD-II J1962",
    "subtopic": "Pines de Comunicación CAN Bus"
  },
  {
    "id": "mec-bac-40",
    "sectionId": 1,
    "number": 40,
    "text": "¿Qué resistencia eléctrica se debe medir con el multímetro entre el Pin 6 (CAN High) y el Pin 14 (CAN Low) del conector OBD-II con la batería desconectada para confirmar la integridad del bus?",
    "options": [
      "Aproximadamente 60 ohmios (debido a dos resistencias terminadoras de 120 ohmios en paralelo en los extremos de la red)",
      "Cero ohmios (cortocircuito puro)",
      "Resistencia infinita (circuito abierto)",
      "10.000 ohmios"
    ],
    "correctIndex": 0,
    "explanation": "La red CAN de alta velocidad tiene una resistencia de 120 ohmios en cada extremo (ej. en la ECU de motor y en el cuadro); al conectarse en paralelo, la resistencia equivalente leída es 120 / 2 = 60 ohmios.",
    "skill": "Diagnóstico de Redes de Comunicación",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Bus CAN Automotriz",
    "subtopic": "Resistencias Terminadoras de Red CAN"
  },
  {
    "id": "mec-bac-41",
    "sectionId": 1,
    "number": 41,
    "text": "¿Qué elementos estructurales principales componen una suspensión delantera de tipo 'MacPherson'?",
    "options": [
      "Un conjunto vertical integrado de amortiguador telescópico concéntrico con el muelle helicoidal que actúa como puntal estructural portante, y un brazo oscilante inferior (trapecio) anclado al subchasis",
      "Dos ballestas longitudinales rígidas de camión",
      "Cuatro amortiguadores horizontales con palancas de madera",
      "Una barra rígida sólida de extremo a extremo sin resortes"
    ],
    "correctIndex": 0,
    "explanation": "Diseñada por Earle MacPherson, simplifica el eje delantero ahorrando espacio y peso al sustituir el brazo superior por el propio puntal telescópico que soporta cargas mecánicas y de dirección.",
    "skill": "Tipos de Suspensión Independiente",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas de Suspensión",
    "subtopic": "Suspensión MacPherson"
  },
  {
    "id": "mec-bac-42",
    "sectionId": 1,
    "number": 42,
    "text": "¿Qué ventaja dinámica ofrece una suspensión delantera de 'Doble Horquilla' (o paralelogramo deformable) frente al sistema MacPherson?",
    "options": [
      "Mantiene el neumático perpendicular al asfalto de forma óptima durante todo el recorrido de compresión y rebote, reduciendo la variación perjudicial del ángulo de caída (camber) en curvas severas",
      "Cuesta la mitad de fabricar y pesa mucho menos",
      "Elimina la necesidad de amortiguadores hidráulicos",
      "Permite cambiar de neumáticos sin usar herramientas"
    ],
    "correctIndex": 0,
    "explanation": "Con dos brazos triangulares superpuestos de longitud calculada, la rueda describe un arco que induce caída negativa en compresión, maximizando la huella de adherencia en apoyos de competición y alta gama.",
    "skill": "Dinámica Vehicular",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Arquitectura de Suspensión",
    "subtopic": "Doble Horquilla vs MacPherson"
  },
  {
    "id": "mec-bac-43",
    "sectionId": 1,
    "number": 43,
    "text": "¿Cuál es la característica mecánica de un eje trasero de torsión 'Semindependiente' (Torsion Beam) común en vehículos del segmento B y C?",
    "options": [
      "Dos brazos longitudinales que soportan las ruedas unidos por una viga transversal de acero perfilado en U o V capaz de retorcerse elásticamente actuando como barra estabilizadora integrada",
      "Dos ejes rígidos de camión con diferenciales separados",
      "Una suspensión que flota mediante imanes superconductores",
      "Cuatro muelles neumáticos individuales sin conexión metálica"
    ],
    "correctIndex": 0,
    "explanation": "Es económico, compacto y deja un gran volumen para el maletero; la viga en H permite independencia parcial de movimientos verticales entre las ruedas traseras combinada con rigidez torsional.",
    "skill": "Suspensiones Traseras",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas de Suspensión",
    "subtopic": "Eje Torsional Semindependiente"
  },
  {
    "id": "mec-bac-44",
    "sectionId": 1,
    "number": 44,
    "text": "¿Qué ventaja cinemática fundamental aporta una suspensión trasera independiente 'Multibrazo' (Multi-Link de 4 o 5 brazos)?",
    "options": [
      "Permite controlar y calibrar de forma independiente las fuerzas longitudinales (aceleración/frenado) y las fuerzas transversales (apoyo en curva), logrando confort supremo y guiado de rueda milimétrico (autodireccional pasivo)",
      "Hace que el automóvil consuma la mitad de combustible",
      "Permite elevar el vehículo como un avión",
      "Elimina la necesidad de frenos traseros"
    ],
    "correctIndex": 0,
    "explanation": "Cada tirante individual gestiona un grado de libertad específico; al frenar o apoyar en curva, la cinemática induce pequeñas variaciones de convergencia que estabilizan la zaga.",
    "skill": "Cinemática de Chasis",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Suspensión Multibrazo",
    "subtopic": "Suspensión Multi-Link"
  },
  {
    "id": "mec-bac-45",
    "sectionId": 1,
    "number": 45,
    "text": "¿Cómo regula la altura de la carrocería y la rigidez una 'Suspensión Neumática Activa'?",
    "options": [
      "Sustituye los resortes metálicos tradicionales por fuelles o balonas de caucho reforzado alimentadas con aire comprimido por un compresor electrohidráulico y una caja de electroválvulas comandadas por la ECU",
      "Modifica la presión de los neumáticos en marcha",
      "Rellena los amortiguadores con hormigón líquido",
      "Apaga el motor en los badenes"
    ],
    "correctIndex": 0,
    "explanation": "Sensores de altura de carrocería en cada rueda miden la distancia al suelo; la ECU inyecta o purga aire manteniendo la altura constante independientemente del peso de la carga o bajándola a alta velocidad.",
    "skill": "Suspensiones Neumáticas Electrónicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Suspensiones Pilotadas",
    "subtopic": "Suspensión Neumática Adaptativa"
  },
  {
    "id": "mec-bac-46",
    "sectionId": 1,
    "number": 46,
    "text": "¿Cuál es el principio de funcionamiento de los amortiguadores magnetoreológicos (MagneRide)?",
    "options": [
      "El fluido del amortiguador contiene micropartículas sintéticas de hierro en suspensión; al energizar una bobina electromagnética, las partículas se alinean en cadenas en milisegundos alterando drásticamente la viscosidad aparente y la rigidez",
      "Utilizan imanes de nevera adheridos al tubo exterior",
      "Generan electricidad para alimentar los faros LED",
      "Calientan el aceite con resistencias térmicas de estufa"
    ],
    "correctIndex": 0,
    "explanation": "Al no tener válvulas mecánicas móviles que abrir o cerrar, la viscosidad magnetorreológica varía hasta 1000 veces por segundo, adaptándose instantáneamente a cada bache del asfalto.",
    "skill": "Amortiguación Activa",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Amortiguadores Electrónicos",
    "subtopic": "Fluidos Magnetoreológicos (MagneRide)"
  },
  {
    "id": "mec-bac-47",
    "sectionId": 1,
    "number": 47,
    "text": "¿Cómo funciona la Dirección Asistida Eléctrica (EPS - Electric Power Steering)?",
    "options": [
      "Un motor eléctrico sin escobillas (brushless) acoplado a la columna de dirección o a la cremallera suministra asistencia de par calculada por una ECU basándose en la señal del sensor de par de giro del volante y la velocidad del vehículo",
      "Una bomba hidráulica impulsada por la correa del motor",
      "Un cable de acero que tira de las ruedas",
      "Un ventilador que sopla hacia la dirección de la curva"
    ],
    "correctIndex": 0,
    "explanation": "Elimina la bomba hidráulica, mangueras y fluido de dirección, ahorrando combustible (solo consume energía cuando se gira el volante) y permitiendo funciones avanzadas como centrado de carril y aparcamiento automático.",
    "skill": "Sistemas de Dirección Asistida",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Dirección Asistida Eléctrica",
    "subtopic": "Dirección EPS (Electric Power Steering)"
  },
  {
    "id": "mec-bac-48",
    "sectionId": 1,
    "number": 48,
    "text": "¿Cuál es el principio geométrico de la dirección automotriz 'Geometría de Ackermann'?",
    "options": [
      "La prolongación de los brazos de dirección de ambas ruedas delanteras converge en el centro del eje trasero, haciendo que en una curva la rueda interior gire con mayor ángulo que la rueda exterior para que ambas rueden sin arrastrar",
      "Que ambas ruedas delanteras giren exactamente con el mismo ángulo de 45°",
      "Que la rueda exterior gire el doble que la interior",
      "Que las ruedas traseras giren en sentido opuesto a 100 km/h"
    ],
    "correctIndex": 0,
    "explanation": "Dado que la rueda interior describe un radio de curva más cerrado que la exterior, el trapecio de Ackermann desvía más la rueda interior para que los centros de giro de las 4 ruedas coincidan en un punto común.",
    "skill": "Geometría de la Dirección",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Cinemática de Dirección",
    "subtopic": "Geometría y Trapecio de Ackermann"
  },
  {
    "id": "mec-bac-49",
    "sectionId": 1,
    "number": 49,
    "text": "¿Qué función cumple el 'Sensor de Par y Ángulo de Dirección' (SAS - Steering Angle Sensor) montado en la columna de dirección?",
    "options": [
      "Informar a la ECU del control de estabilidad (ESP) y de dirección asistida (EPS) la posición angular exacta, velocidad de giro y fuerza aplicada sobre el volante por el conductor",
      "Medir la temperatura del volante en invierno",
      "Hacer sonar la bocina cuando se gira demasiado",
      "Contar el número de vueltas de los neumáticos"
    ],
    "correctIndex": 0,
    "explanation": "El sensor SAS compara hacia dónde quiere ir el conductor (ángulo de volante) con hacia dónde va realmente el vehículo (sensor de guiñada / acelerómetro transversal) para intervenir frenando ruedas si hay derrape.",
    "skill": "Sensores de Seguridad Activa",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Control de Estabilidad (ESP)",
    "subtopic": "Sensor de Ángulo de Dirección (SAS)"
  },
  {
    "id": "mec-bac-50",
    "sectionId": 1,
    "number": 50,
    "text": "¿Qué síntoma mecánico evidente produce una 'Rótula de Dirección' con desgaste u holgura en su asiento interno?",
    "options": [
      "Juego libre excesivo y respuesta imprecisa en el volante, vibraciones y golpes metálicos en badenes y desgaste irregular en los hombros del neumático",
      "El motor pierde compresión en los cilindros",
      "El pedal de embrague se va al fondo",
      "Las luces de stop traseras se encienden solas"
    ],
    "correctIndex": 0,
    "explanation": "La rótula de dirección conecta la barra de acoplamiento de la cremallera con la mangueta; si tiene juego, las ruedas se desalinean dinámicamente perdiendo precisión en la trazada.",
    "skill": "Inspección de Órganos de Dirección",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Mantenimiento del Chasis",
    "subtopic": "Desgaste de Rótulas y Terminales de Dirección"
  },
  {
    "id": "mec-bac-51",
    "sectionId": 1,
    "number": 51,
    "text": "¿Cuál es el objetivo principal del Sistema Antibloqueo de Frenos (ABS) durante una frenada de pánico en suelo resbaladizo?",
    "options": [
      "Evitar que las ruedas se bloqueen para conservar la adherencia lateral y permitir que el conductor mantenga el control direccional del vehículo para esquivar obstáculos mientras frena",
      "Reducir la distancia de frenado a cero metros siempre",
      "Hacer que el motor se apague inmediatamente",
      "Aumentar la presión del turbo al máximo"
    ],
    "correctIndex": 0,
    "explanation": "Una rueda bloqueada (deslizando al 100%) pierde toda capacidad de dirigir el vehículo por las leyes de fricción; el ABS modula la presión permitiendo virar y frenar simultáneamente.",
    "skill": "Sistemas de Seguridad Activa",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Frenos Antibloqueo (ABS)",
    "subtopic": "Objetivo y Dinámica de Control del ABS"
  },
  {
    "id": "mec-bac-52",
    "sectionId": 1,
    "number": 52,
    "text": "¿Cuáles son las tres fases consecutivas de modulación hidráulica que ejecuta una electroválvula del ABS en una rueda que tiende al bloqueo?",
    "options": [
      "1. Aumento de presión (aplicación normal); 2. Mantenimiento de presión (aislamiento del cilindro maestro); 3. Reducción de presión (descarga del fluido hacia la bomba de recirculación)",
      "1. Acelerar; 2. Detener; 3. Girar",
      "1. Calentar; 2. Enfriar; 3. Purificar",
      "1. Subir; 2. Bajar; 3. Desconectar"
    ],
    "correctIndex": 0,
    "explanation": "El ciclo Aumento-Retención-Descarga se repite de 15 a 20 veces por segundo; la rápida apertura y cierre de las electroválvulas y el retorno del líquido generan la típica pulsación en el pedal.",
    "skill": "Control Hidráulico del ABS",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Bloque Hidráulico del ABS",
    "subtopic": "Fases de Presión: Aumento, Retención y Descarga"
  },
  {
    "id": "mec-bac-53",
    "sectionId": 1,
    "number": 53,
    "text": "¿Cuál es la diferencia entre un sensor de velocidad de rueda ABS 'Pasivo' (inductivo) y uno 'Activo' (magnetoresistivo o Hall)?",
    "options": [
      "El sensor pasivo es inductivo sin alimentación externa y no genera señal apreciable a velocidades ultra-bajas (<5 km/h); el sensor activo recibe alimentación de 12V y lee encoders magnéticos integrados en el cojinete desde 0 km/h",
      "El pasivo solo funciona con frenos de tambor",
      "El activo requiere cables de fibra óptica de cuarzo",
      "No existe diferencia de señal ni de instalación"
    ],
    "correctIndex": 0,
    "explanation": "Los sensores activos son obligatorios en sistemas con ESP y asistentes de arranque en pendiente porque detectan el sentido de giro de la rueda y leen velocidad cero estática con total precisión.",
    "skill": "Sensores de Velocidad de Rueda",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistema ABS",
    "subtopic": "Sensores de Rueda Pasivos vs Activos"
  },
  {
    "id": "mec-bac-54",
    "sectionId": 1,
    "number": 54,
    "text": "¿Cómo detecta el módulo del Control Electrónico de Estabilidad (ESP / ESC) una situación de 'Subviraje' (pérdida de agarre del eje delantero)?",
    "options": [
      "Compara el ángulo de volante (SAS) con la velocidad angular de guiñada real; si el vehículo gira menos de lo ordenado por el conductor, el ESP frena selectivamente la rueda trasera interior para inducir un momento de giro correctivo",
      "Mide la temperatura del aceite de la transmisión",
      "Comprueba el peso de las ruedas delanteras",
      "Desconecta el ABS permanentemente"
    ],
    "correctIndex": 0,
    "explanation": "En subviraje (el coche 'se va de morro'), frenar la rueda trasera interior genera un par de guiñada que mete el morro del vehículo hacia el interior de la curva restaurando la trayectoria.",
    "skill": "Dinámica del Control de Estabilidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistema ESP / ESC",
    "subtopic": "Corrección de Subviraje y Rueda Trasera Interior"
  },
  {
    "id": "mec-bac-55",
    "sectionId": 1,
    "number": 55,
    "text": "¿Cómo interviene el sistema ESP / ESC cuando detecta una situación de 'Sobreviraje' (la parte trasera del vehículo derrapa hacia el exterior de la curva)?",
    "options": [
      "Frena selectivamente la rueda delantera exterior a la curva para generar un momento de giro opuesto que neutralice el trompo de la parte trasera",
      "Acelera a fondo las ruedas motrices",
      "Acciona el freno de mano bruscamente",
      "Apaga las luces exteriores del vehículo"
    ],
    "correctIndex": 0,
    "explanation": "En sobreviraje (la zaga se descontrola), frenar la rueda delantera exterior crea una fuerza de retención que estabiliza el eje longitudinal alineándolo con el radio de giro.",
    "skill": "Control de Guiñada Dinámico",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Dinámica de Estabilidad",
    "subtopic": "Corrección de Sobreviraje y Rueda Delantera Exterior"
  },
  {
    "id": "mec-bac-56",
    "sectionId": 1,
    "number": 56,
    "text": "¿Cuál es la función del 'Sensor de Tasa de Guiñada y Aceleración Transversal' (Yaw Rate Sensor / G-Sensor) en el sistema ESP?",
    "options": [
      "Medir la velocidad angular de rotación del vehículo sobre su propio eje vertical (rotación de guiñada en grados/segundo) y las fuerzas centrífugas laterales (en unidades de gravedad G)",
      "Medir la presión atmosférica exterior",
      "Calcular el volumen de gasolina inyectado",
      "Detectar si los vidrios laterales están limpios"
    ],
    "correctIndex": 0,
    "explanation": "Construido con tecnología microelectromecánica (MEMS), detecta fuerzas de inercia laterales y desviaciones respecto a la trayectoria deseada calculada por el ángulo del volante.",
    "skill": "Sensores Inerciales MEMS",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sensores del Sistema ESP",
    "subtopic": "Sensor de Guiñada y Aceleración Lateral"
  },
  {
    "id": "mec-bac-57",
    "sectionId": 1,
    "number": 57,
    "text": "¿Cómo actúa el Control de Tracción (TCS / ASR) cuando una rueda motriz patina en una aceleración sobre firme deslizante?",
    "options": [
      "Reduce inmediatamente el par motor (ordenando a la ECU retrasar el encendido o cerrar la mariposa) y aplica presión de frenado a la rueda que patina a través de la bomba del ABS",
      "Apaga el motor de forma definitiva",
      "Desinfla los neumáticos motrices a la mitad",
      "Desconecta el alternador para ahorrar energía"
    ],
    "correctIndex": 0,
    "explanation": "Al frenar la rueda sin tracción, el diferencial transmite mecánicamente el par motor a la rueda opuesta que sí tiene agarre, permitiendo avanzar sin perder estabilidad.",
    "skill": "Control de Tracción",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas de Seguridad Activa",
    "subtopic": "Sistema TCS / ASR"
  },
  {
    "id": "mec-bac-58",
    "sectionId": 1,
    "number": 58,
    "text": "¿Cuál es la función del Asistente de Frenada de Emergencia (BAS / EBA)?",
    "options": [
      "Detectar la rapidez con la que el conductor pasa del acelerador al freno e interpreta una emergencia, aplicando automáticamente la máxima presión hidráulica disponible de inmediato para acortar la distancia de parada",
      "Frenar el automóvil cuando se apaga la radio",
      "Hacer sonar una bocina al estacionar",
      "Evitar el desgaste de los neumáticos en autopista"
    ],
    "correctIndex": 0,
    "explanation": "La mayoría de los conductores pisan el pedal con rapidez pero sin la fuerza suficiente en emergencias; el BAS maximiza la presión instantáneamente hasta activar el ABS.",
    "skill": "Asistencia al Frenado",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Asistentes de Frenada",
    "subtopic": "Sistema BAS / EBA"
  },
  {
    "id": "mec-bac-59",
    "sectionId": 1,
    "number": 59,
    "text": "¿Por qué se debe utilizar un equipo de diagnóstico (escáner) para 'Retraer los pistones del Freno de Estacionamiento Eléctrico (EPB)' al cambiar pastillas traseras?",
    "options": [
      "Porque los pistones traseros son accionados por un motor eléctrico con un husillo roscado interno; forzarlos hacia adentro con una palanca sin retraer el husillo por software destruye irreversiblemente el mecanismo del cáliper",
      "Para cambiar el idioma del freno de mano",
      "Para comprobar el voltaje de la batería en la pantalla",
      "Para limpiar el disco con ondas sonoras"
    ],
    "correctIndex": 0,
    "explanation": "El comando de servicio de EPB ordena al servomotor eléctrico desenroscar el husillo interno hasta el fondo; solo entonces el pistón mecánico puede ser empujado con seguridad para instalar las pastillas nuevas.",
    "skill": "Procedimientos de Servicio EPB",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Freno Eléctrico de Estacionamiento",
    "subtopic": "Modo Servicio de Pastillas en EPB"
  },
  {
    "id": "mec-bac-60",
    "sectionId": 1,
    "number": 60,
    "text": "¿Qué precaución técnica se debe tener al purgar el líquido de frenos en un vehículo equipado con ABS/ESP?",
    "options": [
      "Evitar que el depósito del cilindro maestro se vacíe de fluido para impedir que entre aire a las complejas cámaras y válvulas internas del modulador hidráulico del ABS, requiriendo en tal caso una rutina de purga por escáner",
      "Mantener el motor acelerando a 5000 RPM",
      "Purgar con las cuatro ruedas en el aire girando a 100 km/h",
      "Desconectar los sensores de oxígeno del escape"
    ],
    "correctIndex": 0,
    "explanation": "Si entra aire al bloque de electroválvulas y acumuladores del ABS, la purga por gravedad o pedal es ineficaz; se debe activar con el escáner la bomba de retorno y ciclar las válvulas para expulsar el aire.",
    "skill": "Mantenimiento Hidráulico de ABS",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Mantenimiento de Frenos ABS",
    "subtopic": "Purga de Modulador Hidráulico ABS con Escáner"
  },
  {
    "id": "mec-bac-61",
    "sectionId": 1,
    "number": 61,
    "text": "¿Cuáles son los cuatro componentes principales que componen el ciclo de refrigeración por compresión de vapor en el sistema de aire acondicionado del vehículo?",
    "options": [
      "Compresor, Condensador, Válvula de Expansión (o tubo de orificio fijo) y Evaporador",
      "Radiador, Bomba de agua, Termostato y Calefactor",
      "Turbocompresor, Intercooler, Colector y Escape",
      "Alternador, Motor de arranque, Batería y Fusible"
    ],
    "correctIndex": 0,
    "explanation": "El compresor presuriza el gas; el condensador lo enfría licuándolo a alta presión; la válvula de expansión lo pulveriza bajando drásticamente su presión; y el evaporador absorbe calor del habitáculo.",
    "skill": "Ciclo Frigorífico Automotriz",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Climatización Automotriz",
    "subtopic": "Ciclo de Refrigeración del A/C"
  },
  {
    "id": "mec-bac-62",
    "sectionId": 1,
    "number": 62,
    "text": "¿Qué gas refrigerante ecológico sustituyó mayoritariamente al R-134a en los vehículos nuevos para cumplir con las normativas de bajo Potencial de Calentamiento Global (GWP < 150)?",
    "options": [
      "R-1234yf (tetrafluoropropeno, con GWP < 1)",
      "R-12 (clorofluorocarbono obsoleto)",
      "Metano líquido comprimido",
      "Monóxido de carbono purificado"
    ],
    "correctIndex": 0,
    "explanation": "Mientras que el R-134a tiene un GWP de 1430, el R-1234yf tiene un GWP menor a 1 y se descompone en la atmósfera en pocos días sin dañar la capa de ozono.",
    "skill": "Refrigerantes y Normativa Ambiental",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Gases Refrigerantes",
    "subtopic": "Refrigerante R-1234yf vs R-134a"
  },
  {
    "id": "mec-bac-63",
    "sectionId": 1,
    "number": 63,
    "text": "¿Qué función cumple el 'Filtro Deshidratador' (o acumulador) en el circuito del aire acondicionado?",
    "options": [
      "Retener mecánicamente impurezas sólidas y absorber mediante desecante químico (zeolita/gel de sílice) la humedad que causaría corrosión o congelación en la válvula de expansión",
      "Filtrar el aire que respiran los ocupantes",
      "Almacenar el aceite de motor",
      "Separar el nitrógeno del aire ambiente"
    ],
    "correctIndex": 0,
    "explanation": "La humedad en el circuito reacciona con el refrigerante y aceite formando ácidos altamente corrosivos y cristales de hielo que taponarían el orificio milimétrico de la válvula de expansión.",
    "skill": "Componentes del Circuito de Climatización",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Aire Acondicionado",
    "subtopic": "Filtro Deshidratador y Desecante"
  },
  {
    "id": "mec-bac-64",
    "sectionId": 1,
    "number": 64,
    "text": "¿Cuál es el propósito de realizar un 'Vacío profundo' con bomba de vacío de dos etapas en el circuito de climatización antes de recargar gas refrigerante?",
    "options": [
      "Hacer descender la presión para que la humedad residual hierva y se evapore a temperatura ambiente siendo extraída por completo del sistema, además de comprobar la estanqueidad ante fugas",
      "Enfriar las tuberías metálicas",
      "Limpiar el interior de los conductos con aire comprimido",
      "Vaciar el depósito de combustible"
    ],
    "correctIndex": 0,
    "explanation": "Al bajar la presión a menos de 500 micrones de mercurio (vacío absoluto), el agua hierve a 20 °C evaporándose hacia la bomba; cargar gas con humedad o aire atmosférico inutilizaría el A/C.",
    "skill": "Buenas Prácticas en Climatización",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Servicio de Aire Acondicionado",
    "subtopic": "Proceso de Vacío y Evaporación de Humedad"
  },
  {
    "id": "mec-bac-65",
    "sectionId": 1,
    "number": 65,
    "text": "¿Qué tipo de aceite lubricante sintético higroscópico 'PAG' (Polialquilenoglicol) se utiliza en los compresores de aire acondicionado convencionales con gas R-134a / R-1234yf?",
    "options": [
      "Aceite sintético PAG (viscosidades típicas PAG 46, PAG 100 o PAG 150 según fabricante)",
      "Aceite de motor 20W-50",
      "Grasa de litio grafitada",
      "Aceite vegetal biodegradable para cadenas"
    ],
    "correctIndex": 0,
    "explanation": "El aceite PAG es totalmente miscible con los refrigerantes fluorados viajando con el gas a través de todo el circuito para lubricar los pistones o espirales del compresor.",
    "skill": "Lubricación de Compresores de A/C",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Fluidos de Climatización",
    "subtopic": "Aceites Sintéticos PAG"
  },
  {
    "id": "mec-bac-66",
    "sectionId": 1,
    "number": 66,
    "text": "¿Por qué en vehículos híbridos y eléctricos con compresores de climatización de alta tensión (de 400V o más) está ESTRICTAMENTE PROHIBIDO usar aceite PAG convencional?",
    "options": [
      "Porque el aceite PAG es conductor de electricidad; se debe utilizar obligatoriamente aceite POE (Poliolester) dieléctrico de alta resistencia para evitar fugas de corriente al chasis y riesgo mortal de electrocución",
      "Porque el aceite PAG se congela a cero grados",
      "Porque el PAG hace que el compresor gire al revés",
      "Porque el POE huele a perfume y el PAG no"
    ],
    "correctIndex": 0,
    "explanation": "El bobinado del motor eléctrico del compresor está inmerso en el refrigerante y aceite; usar aceite no dieléctrico provocaría una pérdida de aislamiento de alta tensión a masa con riesgo vital.",
    "skill": "Seguridad en Alta Tensión Automotriz",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Vehículos Eléctricos y Climatización",
    "subtopic": "Aceite Dieléctrico POE vs PAG"
  },
  {
    "id": "mec-bac-67",
    "sectionId": 1,
    "number": 67,
    "text": "¿Qué componente del sistema de climatización 'Válvula de Expansión Termostática' (TXV) regula el caudal de refrigerante que entra al evaporador?",
    "options": [
      "Regula la apertura mediante un bulbo sensor de temperatura a la salida del evaporador para mantener constante el recalentamiento (superheat) y asegurar que solo vapor ingrese al compresor",
      "Una llave de paso manual que gira el conductor con un botón",
      "Un termostato de radiador convencional",
      "Un electroimán que corta el paso cada 5 segundos"
    ],
    "correctIndex": 0,
    "explanation": "El compresor solo puede comprimir gas; si ingresara líquido refrigerante incompresible, los pistones del compresor sufrirían golpe de ariete hidráulico y se destruirían.",
    "skill": "Termodinámica del A/C",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Válvulas de Expansión",
    "subtopic": "Válvula TXV y Control de Recalentamiento"
  },
  {
    "id": "mec-bac-68",
    "sectionId": 1,
    "number": 68,
    "text": "¿Cuál es el síntoma característico en los manómetros de A/C si el electroventilador del condensador no funciona mientras el aire acondicionado está encendido con el vehículo detenido?",
    "options": [
      "La presión en el lado de Alta (High) se dispara rápidamente a niveles peligrosos (>25-30 bar), desconectando el compresor por el presostato de alta presión",
      "La presión en el lado de Baja cae a vacío",
      "Ambas presiones se equilibran en cero",
      "El compresor duplica su velocidad de giro"
    ],
    "correctIndex": 0,
    "explanation": "Sin flujo de aire forzado a través del condensador, el refrigerante gaseoso no puede ceder calor ni licuarse; la presión y temperatura en el lado de alta se disparan de inmediato.",
    "skill": "Diagnóstico con Manómetros de A/C",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Diagnóstico de Climatización",
    "subtopic": "Fallo de Condensación y Presión de Alta Disparada"
  },
  {
    "id": "mec-bac-69",
    "sectionId": 1,
    "number": 69,
    "text": "¿Qué componente de seguridad 'Presostato Triario' (o sensor lineal de presión de refrigerante) protege el circuito de climatización?",
    "options": [
      "Desconecta el compresor por baja presión (falta de gas o fuga), activa el electroventilador a velocidad media ante presión normal de trabajo, y desconecta el compresor ante sobrepresión peligrosa",
      "Regula la temperatura del motor de arranque",
      "Mide la presión de inflado de los neumáticos delanteros",
      "Controla el nivel de aceite del cárter"
    ],
    "correctIndex": 0,
    "explanation": "El presostato triario cumple 3 umbrales: corta si P < 2 bar (evita que el compresor trabaje sin lubricante), activa ventilador si P > 15 bar, y corta por seguridad si P > 28 bar.",
    "skill": "Protección y Sensores de A/C",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Seguridad del Circuito Frigorífico",
    "subtopic": "Presostato Triario"
  },
  {
    "id": "mec-bac-70",
    "sectionId": 1,
    "number": 70,
    "text": "¿Por qué se forma un charco de agua limpia debajo de la parte delantera de un vehículo estacionado en verano con el aire acondicionado en marcha?",
    "options": [
      "Es condensación natural del vapor de agua presente en el aire caliente de la cabina al chocar contra la superficie fría del evaporador, drenada hacia el suelo por el tubo de desagüe",
      "Es una fuga grave de líquido refrigerante del radiador del motor",
      "Es gasolina condensada por el frío",
      "Es líquido de frenos derramado por la bomba"
    ],
    "correctIndex": 0,
    "explanation": "Al enfriar el aire por debajo del punto de rocío, la humedad se condensa en agua en las aletas del evaporador y escurre al exterior por la manguera de drenaje; es señal de normalidad.",
    "skill": "Operación de Climatización",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Evaporador de A/C",
    "subtopic": "Drenaje de Agua de Condensación"
  },
  {
    "id": "mec-bac-71",
    "sectionId": 1,
    "number": 71,
    "text": "¿Cuál es la función de la válvula de descarga del turbocompresor 'Wastegate' en un motor sobrealimentado?",
    "options": [
      "Desviar una porción de los gases de escape fuera de la turbina para limitar la velocidad de rotación del turbo y regular la presión máxima de sobrealimentación (boost pressure) en el colector",
      "Descargar el aceite del motor cuando sube la presión",
      "Inyectar aire fresco en el catalizador",
      "Enfriar los frenos del vehículo"
    ],
    "correctIndex": 0,
    "explanation": "Sin la Wastegate (accionada por actuador neumático o electrónico), el turbo entraría en una espiral descontrolada de sobrepresión destruyendo los cilindros y rompiendo el propio compresor.",
    "skill": "Control de Presión de Turbo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sobrealimentación del Motor",
    "subtopic": "Válvula Wastegate"
  },
  {
    "id": "mec-bac-72",
    "sectionId": 1,
    "number": 72,
    "text": "¿Cuál es la función de la válvula de alivio 'Blow-Off' (o recirculadora Diverter Valve) en la tubería de admisión tras el compresor del turbo?",
    "options": [
      "Liberar la sobrepresión acumulada entre el turbo y la mariposa al cerrar bruscamente el acelerador, evitando el golpe de ariete sobre las aspas del compresor y reduciendo el turbo lag al volver a acelerar",
      "Vaciar el depósito de combustible",
      "Hacer sonar una alarma de velocidad",
      "Comprimir el líquido de frenos"
    ],
    "correctIndex": 0,
    "explanation": "Al soltar el acelerador, la mariposa se cierra pero el turbo sigue girando por inercia; el choque de presión rebotaría contra la turbina frenándola violentamente (compressor surge).",
    "skill": "Dinámica de Admisión con Turbo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas de Sobrealimentación",
    "subtopic": "Válvula Blow-Off / Diverter"
  },
  {
    "id": "mec-bac-73",
    "sectionId": 1,
    "number": 73,
    "text": "¿Qué ventaja mecánica aporta un turbocompresor de 'Geometría Variable' (VGT / VNT) común en motores diésel?",
    "options": [
      "Incorpora álabes móviles en la caracola de escape accionados por un actuador que varían la velocidad de los gases incidentes en la turbina, ofreciendo respuesta inmediata a bajas RPM y gran caudal a altas RPM",
      "Permite cambiar de tamaño el bloque motor",
      "Funciona sin aceite lubricante",
      "Elimina la necesidad de filtro de aire"
    ],
    "correctIndex": 0,
    "explanation": "A bajas RPM los álabes se cierran creando una tobera estrecha que acelera los gases (como estrangular una manguera de agua); a altas RPM se abren para no estrangular el flujo de escape.",
    "skill": "Tecnología de Turbocompresores",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Turbocompresores VGT",
    "subtopic": "Turbocompresor de Geometría Variable"
  },
  {
    "id": "mec-bac-74",
    "sectionId": 1,
    "number": 74,
    "text": "¿Por qué un motor turboalimentado exige esperar de 30 a 60 segundos en ralentí antes de apagar el motor tras un viaje exigente en carretera?",
    "options": [
      "Para permitir que el flujo de aceite de motor y refrigerante continúe circulando y enfríe los cojinetes del eje del turbo; apagarlo de golpe carboniza el aceite residual en el eje por choque térmico",
      "Para que el velocímetro vuelva a cero",
      "Para que las ruedas se enfríen con el aire",
      "Para que el tanque de gasolina recupere presión"
    ],
    "correctIndex": 0,
    "explanation": "El eje del turbo gira a más de 150.000 RPM a más de 800 °C; si se corta la bomba de aceite instantáneamente, el aceite atrapado se 'coquiza' formando carbón abrasivo que ralla los casquillos en el siguiente arranque.",
    "skill": "Mantenimiento y Durabilidad de Turbos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Buenas Prácticas Operativas",
    "subtopic": "Enfriamiento de Turbo en Ralentí (Turbo Timer)"
  },
  {
    "id": "mec-bac-75",
    "sectionId": 1,
    "number": 75,
    "text": "¿Qué componente del sistema de inyección electrónica 'Válvula IAC' (Idle Air Control o actuador de ralentí) regula las revoluciones mínimas del motor en sistemas con cable mecánico de acelerador?",
    "options": [
      "Un motor paso a paso (stepper motor) que modula un conducto de aire de derivación (by-pass) alrededor de la mariposa cerrada para estabilizar el ralentí ante cargas de accesorios (luces, A/C)",
      "Un sensor de temperatura en el escape",
      "Un interruptor que apaga la bomba de combustible",
      "Una varilla de ajuste en la rueda delantera"
    ],
    "correctIndex": 0,
    "explanation": "Cuando el conductor enciende el aire acondicionado o la dirección asistida, la ECU mueve los pasos de la válvula IAC aumentando el caudal de aire parásito para que el motor no se cale.",
    "skill": "Control de Ralentí",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas de Inyección",
    "subtopic": "Válvula IAC (Idle Air Control)"
  },
  {
    "id": "mec-bac-76",
    "sectionId": 1,
    "number": 76,
    "text": "¿Cuál es la función del filtro de partículas de gasolina (GPF / OPF) instalado en vehículos modernos de inyección directa GDI según la norma Euro 6d?",
    "options": [
      "Filtrar las emisiones de partículas ultrafinas de hollín originadas por la combustión incompleta local en motores de inyección directa de gasolina, donde el combustible dispone de menor tiempo para evaporarse",
      "Eliminar el agua del depósito de gasolina",
      "Enfriar el aire que entra al motor",
      "Reducir el consumo de aceite a cero"
    ],
    "correctIndex": 0,
    "explanation": "Al inyectar directamente en el cilindro a alta presión, microgotas de gasolina impactan contra el pistón formando partículas de carbono PM; el GPF las retiene y regenera pasivamente con el calor de la gasolina.",
    "skill": "Control de Emisiones en Gasolina",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas Anticontaminación GPF",
    "subtopic": "Filtro de Partículas de Gasolina (GPF)"
  },
  {
    "id": "mec-bac-77",
    "sectionId": 1,
    "number": 77,
    "text": "¿Qué sensor de presión 'Sensor de Presión Diferencial' (DPS) monitorea el estado de saturación del filtro de partículas diésel (DPF)?",
    "options": [
      "Mide la diferencia de presión en los gases de escape entre la entrada y la salida del DPF; una caída de presión excesiva indica saturación de hollín ordenando a la ECU activar la regeneración",
      "Mide la presión de los neumáticos traseros",
      "Calcula la presión atmosférica del habitáculo",
      "Mide la presión del aceite en la culata"
    ],
    "correctIndex": 0,
    "explanation": "El sensor DPS conecta dos tubos antes y después de la matriz cerámica; el aumento de delta de presión (ΔP) en mbar delata la restricción del paso de gases por acumulación de hollín.",
    "skill": "Sensores de Emisiones Diésel",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Gestión Electrónica de DPF",
    "subtopic": "Sensor de Presión Diferencial (DPS)"
  },
  {
    "id": "mec-bac-78",
    "sectionId": 1,
    "number": 78,
    "text": "¿Cómo detecta la ECU una 'Fuga en el Sistema de Admisión' (toma de aire no medida después del sensor MAF)?",
    "options": [
      "El sensor de oxígeno detecta exceso de aire en el escape elevando el STFT y LTFT a valores positivos anormales (> +15%), con ralentí errático y código de falla P0171",
      "El motor se apaga y bloquea las cuatro ruedas",
      "Se descarga la batería inmediatamente",
      "El cuadro de instrumentos cambia de color a rojo"
    ],
    "correctIndex": 0,
    "explanation": "Cualquier rotura de manguera de vacío tras el MAF deja entrar aire 'pirata' que no fue contabilizado por la ECU; la sonda Lambda ve mezcla pobre y la ECU sobrecompensa inyectando combustible extra.",
    "skill": "Diagnóstico de Tomas de Aire",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Diagnóstico de Admisión",
    "subtopic": "Tomas de Aire Falsas y Diagnóstico con Humo"
  },
  {
    "id": "mec-bac-79",
    "sectionId": 1,
    "number": 79,
    "text": "¿Qué herramienta de diagnóstico de taller se utiliza para localizar con precisión micrométrica tomas de aire parásitas, fugas en el colector de admisión, vacío o sistema EVAP?",
    "options": [
      "Máquina generadora de humo de diagnóstico (Smoke Machine)",
      "Un estetoscopio médico para personas",
      "Un imán de neodimio potente",
      "Una linterna ultravioleta sin humo"
    ],
    "correctIndex": 0,
    "explanation": "Inyecta humo mineral denso a baja presión (0.5 a 1 PSI) con trazador fluorescente en el circuito; el humo blanco saliendo por cualquier junta o poro revela la fuga exacta de forma visual e inequívoca.",
    "skill": "Herramientas de Taller Especializadas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Equipamiento de Diagnóstico",
    "subtopic": "Máquina Generadora de Humo para Fugas"
  },
  {
    "id": "mec-bac-80",
    "sectionId": 1,
    "number": 80,
    "text": "¿Cuál es el propósito del sensor de detonación (Knock Sensor) al ser comprobado con osciloscopio en el taller?",
    "options": [
      "Verificar que genere una señal de voltaje de corriente alterna limpia y de amplitud proporcional al golpear suavemente el bloque cerca del sensor con una llave metálica",
      "Comprobar si tiene continuidad de 0 ohmios a masa fija",
      "Comprobar que emita luz infrarroja",
      "Verificar que caliente la culata"
    ],
    "correctIndex": 0,
    "explanation": "El transductor piezoeléctrico genera picos de tensión AC ante el impacto mecánico de percusión; la falta de respuesta eléctrica indica cristal cuarteado o conector oxidado.",
    "skill": "Pruebas de Sensores Piezoeléctricos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Diagnóstico con Osciloscopio",
    "subtopic": "Comprobación del Sensor de Picado"
  },
  {
    "id": "mec-bac-81",
    "sectionId": 1,
    "number": 81,
    "text": "Al interpretar un esquema eléctrico automotriz según la norma DIN 72552, ¿qué designación numérica identifica el borne con '+12V Permanente directo de Batería'?",
    "options": [
      "Borne 30",
      "Borne 15",
      "Borne 31",
      "Borne 50"
    ],
    "correctIndex": 0,
    "explanation": "La norma DIN universaliza: Borne 30 (+12V directo de batería sin pasar por llave); Borne 15 (+12V tras llave de contacto bajo ignición); Borne 31 (Masa negativa chasis); y Borne 50 (Señal de arranque al solenoide).",
    "skill": "Interpretación de Esquemas Eléctricos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Normativa Eléctrica DIN 72552",
    "subtopic": "Designación de Bornes 30, 15, 31 y 50"
  },
  {
    "id": "mec-bac-82",
    "sectionId": 1,
    "number": 82,
    "text": "En un esquema eléctrico automotriz conforme a la norma DIN, ¿qué representa la designación de 'Borne 15'?",
    "options": [
      "Positivo de +12V conmutado a través del interruptor de encendido (activo solo en posición de Contacto / Ignición ON)",
      "Masa conectada al bloque motor",
      "Alimentación directa del alternador sin fusible",
      "Cable que alimenta la bocina del volante"
    ],
    "correctIndex": 0,
    "explanation": "El borne 15 alimenta las computadoras, bobinas, inyectores y cuadro solo cuando el conductor gira la llave a posición de contacto, desactivándose al retirar la llave.",
    "skill": "Diagramas Eléctricos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Norma DIN 72552",
    "subtopic": "Borne 15 (Positivo bajo Llave)"
  },
  {
    "id": "mec-bac-83",
    "sectionId": 1,
    "number": 83,
    "text": "¿Qué representa la designación de 'Borne 31' en los diagramas eléctricos de vehículos?",
    "options": [
      "Conexión directa a Masa (retorno negativo a la carrocería o chasis del vehículo)",
      "Positivo de alta tensión de las bujías",
      "Alimentación de las luces de emergencia",
      "Cable de datos del sensor de oxígeno"
    ],
    "correctIndex": 0,
    "explanation": "El borne 31 es siempre el potencial cero o masa del circuito de retorno; cables etiquetados como 31 se atornillan directamente a los puntos de masa del chasis.",
    "skill": "Lectura de Diagramas de Cableado",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Normativa DIN",
    "subtopic": "Borne 31 (Masa de Chasis)"
  },
  {
    "id": "mec-bac-84",
    "sectionId": 1,
    "number": 84,
    "text": "En la lectura de diagramas según la norma DIN, ¿qué circuito activa el 'Borne 50'?",
    "options": [
      "La señal de excitación de +12V enviada al solenoide del motor de arranque únicamente en la posición de arranque (Crank) de la llave",
      "El limpiaparabrisas a velocidad máxima",
      "La luz de freno trasera izquierda",
      "El ventilador del habitáculo"
    ],
    "correctIndex": 0,
    "explanation": "El borne 50 es la línea que comanda la bobina de atracción del solenoide del bendix para que el motor de arranque gire durante los segundos de puesta en marcha.",
    "skill": "Circuitos de Arranque",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistema de Arranque",
    "subtopic": "Borne 50 de Activación de Arranque"
  },
  {
    "id": "mec-bac-85",
    "sectionId": 1,
    "number": 85,
    "text": "¿Qué precaución de seguridad se debe adoptar al medir 'Resistencia' (en ohmios) con un multímetro digital en un circuito automotriz?",
    "options": [
      "El circuito o componente bajo prueba debe estar completamente desenergizado (sin corriente ni voltaje aplicado) y preferiblemente desconectado del mazo para no dañar el multímetro ni obtener lecturas falsas",
      "El motor debe estar acelerando a 3000 RPM",
      "Se debe conectar el cable rojo al positivo de la batería",
      "Se debe puentear el fusible principal"
    ],
    "correctIndex": 0,
    "explanation": "El óhmetro inyecta una pequeña corriente interna para medir la caída de voltaje; si el circuito tiene tensión externa activa, se quemará el fusible interno del multímetro y la lectura será errónea.",
    "skill": "Uso Correcto del Multímetro",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Medición Eléctrica Automotriz",
    "subtopic": "Medición de Resistencia sin Tensión"
  },
  {
    "id": "mec-bac-86",
    "sectionId": 1,
    "number": 86,
    "text": "¿Cuál es el valor máximo aceptable de 'Consumo Parásito de Corriente en Reposo' (corriente de fuga) en un vehículo moderno con el motor apagado, contacto quitado y módulos en reposo (Sleep Mode)?",
    "options": [
      "Generalmente inferior a 0.05 amperios (50 miliamperios o 50 mA)",
      "Aproximadamente 2.5 a 5.0 amperios",
      "Exactamente 10 amperios",
      "Cero microamperios absolutos sin excepción"
    ],
    "correctIndex": 0,
    "explanation": "Módulos de alarma, memorias de radio y receptores de llave inalámbrica consumen unos 20-40 mA en reposo; un consumo superior a 80-100 mA descarga la batería de 12V en pocos días.",
    "skill": "Diagnóstico de Descargas de Batería",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Electricidad del Automóvil",
    "subtopic": "Medición de Consumo Parásito en Reposo"
  },
  {
    "id": "mec-bac-87",
    "sectionId": 1,
    "number": 87,
    "text": "¿Cómo se mide correctamente el consumo parásito de corriente en reposo con un multímetro?",
    "options": [
      "Configurar el multímetro en la escala de corriente (10A DC), desconectar el borne negativo de la batería y conectar las puntas en serie entre el borne de la batería y la borna del cable, esperando a que los módulos entren en modo sleep",
      "Conectar las puntas en paralelo entre el positivo y negativo de la batería",
      "Pisar el pedal del acelerador con el multímetro en ohmios",
      "Conectar el multímetro a la toma de 220V de la pared"
    ],
    "correctIndex": 0,
    "explanation": "La corriente siempre se mide intercalando el amperímetro en serie en el circuito abierto; conectar en paralelo un amperímetro a la batería causaría un cortocircuito explosivo.",
    "skill": "Técnicas de Medición con Multímetro",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Diagnóstico Eléctrico",
    "subtopic": "Amperímetro en Serie para Medición de Fuga"
  },
  {
    "id": "mec-bac-88",
    "sectionId": 1,
    "number": 88,
    "text": "¿Qué técnica no intrusiva permite localizar qué circuito exacto está causando una fuga de corriente parásita en la caja de fusibles sin desconectar la batería ni despertar los módulos?",
    "options": [
      "Medir la microcaída de tensión en milivoltios (mV DC) entre las dos puntas de prueba expuestas en el lomo de cada fusible enchufado y consultar la tabla de resistencia del fusible",
      "Quitar todos los fusibles al mismo tiempo y tirarlos",
      "Tocar los fusibles con un destornillador para ver si saltan chispas",
      "Mojar la caja de fusibles con agua con sal"
    ],
    "correctIndex": 0,
    "explanation": "Por ley de Ohm, si fluye corriente a través del fusible, existe una caída diminuta de microvoltios medible; una tabla de referencia traduce los milivoltios leídos a miliamperios exactos sin abrir el circuito.",
    "skill": "Diagnóstico Eléctrico Avanzado",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Localización de Fugas Parásitas",
    "subtopic": "Prueba de Caída de Tensión en Lomo de Fusibles"
  },
  {
    "id": "mec-bac-89",
    "sectionId": 1,
    "number": 89,
    "text": "¿Por qué en la comprobación con osciloscopio de un bus CAN High-Speed (ISO 11898-2) las señales de CAN High y CAN Low se muestran en 'Modo Diferencial Espejo'?",
    "options": [
      "En reposo ambas líneas están a 2.5V; durante un bit recesivo o dominante, CAN High sube a 3.5V mientras CAN Low baja simétricamente a 1.5V, de modo que el receptor cancela el ruido electromagnético restando ambas líneas (Vdiff = 2.0V)",
      "Porque una línea transmite audio y la otra video",
      "Porque una línea es de corriente continua y la otra alterna",
      "Para que el bus funcione si se corta la corriente de la batería"
    ],
    "correctIndex": 0,
    "explanation": "La transmisión diferencial balanceada hace a la red CAN prácticamente inmune a interferencias electromagnéticas (EMI): cualquier ruido externo afecta a ambos cables por igual y se anula al restar (3.5 - 1.5 = 2.0V).",
    "skill": "Física de Redes Multiplexadas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Bus CAN Diferencial",
    "subtopic": "Niveles de Tensión en CAN High y CAN Low"
  },
  {
    "id": "mec-bac-90",
    "sectionId": 1,
    "number": 90,
    "text": "¿Qué protocolo de comunicación serie monohilo 'LIN Bus' (Local Interconnect Network) se utiliza comúnmente en subsistemas de carrocería (elevalunas, limpiaparabrisas, espejos retrovisores)?",
    "options": [
      "Un bus monohilo de bajo costo y baja velocidad (hasta 20 kbps) basado en arquitectura Maestro-Esclavo que opera con niveles de tensión de batería de 12V",
      "Un bus de fibra óptica a 10 Gbps",
      "Un protocolo de radiofrecuencia militar",
      "Un enlace por satélite exclusivo para navegadores GPS"
    ],
    "correctIndex": 0,
    "explanation": "LIN es económico y simple para periféricos donde la alta velocidad de CAN no es requerida; un único maestro conectado al bus CAN comanda hasta 16 módulos esclavos locales.",
    "skill": "Redes Multiplexadas LIN",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Protocolo LIN Bus",
    "subtopic": "Arquitectura y Niveles de Tensión en LIN Bus"
  },
  {
    "id": "mec-bac-91",
    "sectionId": 1,
    "number": 91,
    "text": "¿Qué red multiplexada de fibra óptica de alta velocidad 'MOST' (Media Oriented Systems Transport) se utilizaba tradicionalmente en sistemas de infoentretenimiento y sonido de alta fidelidad?",
    "options": [
      "Una red en anillo óptico de alta tasa de transferencia de datos diseñada para transmitir señales digitales de audio multicanal, video y navegación sin interferencias electromagnéticas",
      "Una red para el control de inyectores diésel",
      "Un sistema para controlar la presión de los neumáticos",
      "Un cable para cargar baterías de tracción"
    ],
    "correctIndex": 0,
    "explanation": "El anillo óptico MOST utiliza luz visible (LED rojo a 650 nm) sobre fibra óptica de polímero (POF) para interconectar amplificadores de sonido, pantallas y módulos multimedia.",
    "skill": "Redes Ópticas Automotrices",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Redes MOST",
    "subtopic": "Fibra Óptica en Infoentretenimiento"
  },
  {
    "id": "mec-bac-92",
    "sectionId": 1,
    "number": 92,
    "text": "¿Cuál es la función del módulo de 'Pasarela' (Gateway Central) en la arquitectura de red multiplexada de un vehículo moderno?",
    "options": [
      "Actuar como puente enrutador y traductor de mensajes entre redes de diferentes protocolos y velocidades (ej. CAN de alta velocidad de tren motriz a 500 kbps, CAN de confort a 125 kbps, LIN y Ethernet)",
      "Controlar la apertura del techo solar",
      "Bloquear la entrada de combustible adulterado",
      "Regular la tensión del motor de arranque"
    ],
    "correctIndex": 0,
    "explanation": "El Gateway aísla los dominios por seguridad y traduce telegramas (ej. pasa la velocidad del vehículo del bus de motor al bus de climatización y al conector de diagnóstico OBD-II).",
    "skill": "Arquitectura de Redes Vehiculares",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Módulo Gateway Central",
    "subtopic": "Enrutamiento y Traducción entre Buses"
  },
  {
    "id": "mec-bac-93",
    "sectionId": 1,
    "number": 93,
    "text": "¿Qué función cumple el 'Sensor de Lluvia y Luminosidad' instalado en el parabrisas detrás del espejo retrovisor interior?",
    "options": [
      "Mide la reflexión interna de rayos infrarrojos en el cristal (las gotas de agua dispersan la luz reduciendo la reflexión interna para activar los limpiaparabrisas) y mide la luz ambiental con fotodiodos para encender los faros",
      "Detecta si la carretera está limpia con ultrasonidos",
      "Mide la temperatura del capó del motor",
      "Controla el volumen de la música con la luz solar"
    ],
    "correctIndex": 0,
    "explanation": "Aprovecha la refracción en interfaces: en seco hay reflexión interna total del rayo infrarrojo al fotodiodo; cuando llueve, el agua desvía la luz hacia afuera, activando el barrido automático.",
    "skill": "Sensores Ópticos de Carrocería",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas de Confort y Asistencia",
    "subtopic": "Sensor de Lluvia y Luces Automáticas"
  },
  {
    "id": "mec-bac-94",
    "sectionId": 1,
    "number": 94,
    "text": "¿Cómo actúa el sistema de seguridad pasiva pirotécnico 'Pretensores de los cinturones de seguridad' en una colisión frontal?",
    "options": [
      "Una carga pirotécnica detonada por la ECU del airbag dispara un émbolo que recoge y tensa el cinturón en milisegundos, pegando el cuerpo del ocupante al respaldo antes de que actúe el airbag",
      "Corta el cinturón para permitir que el ocupante salga",
      "Infla el cinturón con aire caliente",
      "Bloquea las puertas del vehículo para que no se abran"
    ],
    "correctIndex": 0,
    "explanation": "El pretensor elimina la holgura de la ropa en menos de 10-15 milisegundos tras el impacto, asegurando que el cuerpo desacelere gradualmente junto con la estructura de deformación programada.",
    "skill": "Sistemas de Seguridad Pasiva",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas Airbag y Pretensores",
    "subtopic": "Pretensores Pirotécnicos de Cinturón"
  },
  {
    "id": "mec-bac-95",
    "sectionId": 1,
    "number": 95,
    "text": "¿Qué componente del volante 'Muelle Espiral' (o anillo de contacto / clockspring) mantiene la conexión eléctrica continua con el airbag del conductor y los mandos del volante mientras este gira?",
    "options": [
      "Una cinta plana flexible enrollada en espiral dentro de un carrete de plástico que se desenrolla y enrolla suavemente al girar el volante en ambos sentidos",
      "Dos escobillas de carbón rozando sobre anillos de cobre",
      "Un enlace inalámbrico por Bluetooth",
      "Un cable rígido que se retuerce sin carrete"
    ],
    "correctIndex": 0,
    "explanation": "El clockspring garantiza continuidad sin pérdidas ni falsos contactos para detonar el airbag del conductor de forma instantánea; si se descalibra o rompe, enciende el testigo de fallo de Airbag.",
    "skill": "Mecánica del Sistema de Airbag",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Seguridad Pasiva",
    "subtopic": "Anillo de Airbag (Clockspring)"
  },
  {
    "id": "mec-bac-96",
    "sectionId": 1,
    "number": 96,
    "text": "¿Cuál es la regla de seguridad estricta para el técnico antes de manipular o desmontar cualquier componente del sistema de Airbag (SRS)?",
    "options": [
      "Desconectar la batería y esperar al menos 10 a 15 minutos para que los condensadores de reserva de energía del módulo SRS se descarguen por completo, además de descargar la electricidad estática personal",
      "Comprobar los detonadores con un multímetro en la escala de resistencia",
      "Golpear los sensores de impacto con un martillo para probarlos",
      "Poner el contacto en posición ON durante el desmontaje"
    ],
    "correctIndex": 0,
    "explanation": "NUNCA se debe meter un óhmetro en un conector de airbag (la corriente interna del tester puede detonar la carga pirotécnica); la reserva de energía en condensadores mantiene los airbags activos minutos después de cortar la batería.",
    "skill": "Seguridad en Sistemas SRS Airbag",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Manipulación Segura de Airbags",
    "subtopic": "Protocolo de Desactivación de Airbags"
  },
  {
    "id": "mec-bac-97",
    "sectionId": 1,
    "number": 97,
    "text": "¿Por qué los conectores eléctricos de los módulos de Airbag y pirotécnicos son fácilmente reconocibles en el vehículo por su color distintivo?",
    "options": [
      "Son de color Amarillo brillante normalizado por los fabricantes e incorporan una pestaña de cortocircuito (shorting bar) que puentea los pines al desconectarlos para prevenir disparos accidentales por estática",
      "Son de color verde fosforescente para brillar de noche",
      "Son transparentes para ver los cables por dentro",
      "Son de color negro idénticos a los del motor"
    ],
    "correctIndex": 0,
    "explanation": "El color amarillo advierte al mecánico de un componente pirotécnico; la chapita de cortocircuito interna (shorting bar) une los dos polos al desconectar el enchufe, impidiendo que la estática de los dedos detone la cápsula.",
    "skill": "Normas de Identificación SRS",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas Airbag",
    "subtopic": "Conectores Amarillos y Shorting Bars"
  },
  {
    "id": "mec-bac-98",
    "sectionId": 1,
    "number": 98,
    "text": "¿Cómo funciona un sistema de advertencia de presión de neumáticos 'TPMS Indirecto' (iTPMS) frente al sistema 'Directo' (dTPMS)?",
    "options": [
      "El indirecto no tiene sensores de presión dentro de las ruedas: utiliza los sensores de velocidad de rueda del ABS para calcular el radio dinámico de rodadura (un neumático desinflado tiene menor radio y gira más rápido a la misma velocidad)",
      "El indirecto utiliza cámaras de video exteriores",
      "El directo utiliza mangueras de aire conectadas al motor",
      "El indirecto mide la temperatura del tubo de escape"
    ],
    "correctIndex": 0,
    "explanation": "El sistema dTPMS tiene sensores/transmisores de radiofrecuencia a batería atornillados en cada válvula; el iTPMS es por software de ABS, economizando costos al sustituir llantas.",
    "skill": "Sistemas de Monitoreo de Neumáticos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas TPMS",
    "subtopic": "TPMS Indirecto vs TPMS Directo"
  },
  {
    "id": "mec-bac-99",
    "sectionId": 1,
    "number": 99,
    "text": "¿Cuál es la función del sistema de 'Iluminación Adaptativa' (AFL / Matrix LED) en vehículos modernos?",
    "options": [
      "Girar el haz de luz hacia el interior de la curva y apagar o atenuar selectivamente píxeles individuales de los faros LED para no deslumbrar a los vehículos contrarios manteniendo la luz larga en el resto del campo visual",
      "Cambiar el color de los faros según la música",
      "Encender fuegos artificiales en caso de emergencia",
      "Iluminar el interior del motor mientras se conduce"
    ],
    "correctIndex": 0,
    "explanation": "Una cámara frontal detecta faros y luces traseras de otros coches; la matriz LED crea sombras dinámicas cuadradas sobre los vehículos precedentes iluminando el entorno con luz máxima sin deslumbramientos.",
    "skill": "Óptica e Iluminación Inteligente",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas de Iluminación Avanzada",
    "subtopic": "Faros Matrix LED Adaptativos"
  },
  {
    "id": "mec-bac-100",
    "sectionId": 1,
    "number": 100,
    "text": "¿Qué información suministra el manual de servicio oficial del taller del fabricante (OEM Service Manual) frente al manual de usuario convencional?",
    "options": [
      "Diagramas de cableado completos pin por pin, pares de apriete exactos, cartas de flujo de diagnóstico paso a paso para cada código DTC, tolerancias dimensionales y herramientas especiales de ensamblaje",
      "Consejos de conducción ecológica para ahorrar gasolina en ciudad",
      "La lista de precios de reventa de automóviles usados",
      "Las recetas de cocina recomendadas para viajes largos"
    ],
    "correctIndex": 0,
    "explanation": "El manual de servicio oficial del fabricante es el documento técnico definitivo de ingeniería para desarmar, comprobar tolerancias y reparar cualquier sistema del vehículo conforme a normas de calidad de fábrica.",
    "skill": "Uso de Literatura Técnica Oficial",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Documentación de Taller",
    "subtopic": "Manuales de Servicio OEM y Cartas de Diagnóstico"
  }
];
