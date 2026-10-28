import { Question } from '../../../types';

export const FISICA_TECNICO: Question[] = [
  {
    "id": "fis-tec-1",
    "sectionId": 5,
    "number": 61,
    "text": "En electrotecnia industrial de corriente alterna (CA), ¿cómo se calcula el factor de potencia (FP) a partir del triángulo de potencias?",
    "options": [
      "FP = Potencia reactiva (Q) / Potencia aparente (S)",
      "FP = Potencia activa (P en Watts) / Potencia aparente (S en VA) = cos(φ)",
      "FP = Potencia aparente / Resistencia en DC",
      "FP = Corriente eficaz al cuadrado"
    ],
    "correctIndex": 1,
    "explanation": "El factor de potencia FP = cos(φ) = P / S mide la fracción de potencia total suministrada que se transforma efectivamente en trabajo mecánico o térmico útil.",
    "skill": "Potencia Eléctrica en Corriente Alterna",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia Industrial",
    "subtopic": "Factor de Potencia y Triángulo de Potencias"
  },
  {
    "id": "fis-tec-2",
    "sectionId": 5,
    "number": 62,
    "text": "En termografía infrarroja para mantenimiento predictivo de cuadros eléctricos, ¿qué parámetro radiativo superficial calibrado entre 0 y 1 es crítico para obtener mediciones térmicas cuantitativas precisas?",
    "options": [
      "El número de Prandtl",
      "La emisividad superficial (ε)",
      "La viscosidad cinemática",
      "El calor latente"
    ],
    "correctIndex": 1,
    "explanation": "La emisividad (ε) cuantifica la eficacia de una superficie real para radiar energía infrarroja en comparación con un cuerpo negro a la misma temperatura. Un ajuste erróneo de ε produce lecturas falsas de sobrecalentamiento.",
    "skill": "Termografía y Ensayos No Destructivos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mantenimiento Predictivo",
    "subtopic": "Emisividad en Cámaras Infrarrojas"
  },
  {
    "id": "fis-tec-3",
    "sectionId": 5,
    "number": 63,
    "text": "En un transformador eléctrico monofásico reductor ideal con relación de transformación 10:1 (N₁ = 1000 espiras, N₂ = 100 espiras), si se aplica una tensión primaria de 230 V, ¿cuál es la tensión secundaria obtenida?",
    "options": [
      "23 V",
      "46 V",
      "115 V",
      "2,300 V"
    ],
    "correctIndex": 0,
    "explanation": "V₁ / V₂ = N₁ / N₂ → V₂ = V₁ × (N₂ / N₁) = 230 V × (100 / 1000) = 23 V.",
    "skill": "Transformadores Eléctricos de Potencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Máquinas Eléctricas",
    "subtopic": "Relación de Transformación"
  },
  {
    "id": "fis-tec-4",
    "sectionId": 5,
    "number": 64,
    "text": "En ensayos de tracción de materiales metálicos según norma ASTM E8, ¿cómo se define el límite elástico convencional (yield strength) al 0.2% de deformación plástica permanente?",
    "options": [
      "El punto de rotura catastrófica de la probeta.",
      "La tensión de tracción donde el material sufre una deformación plástica permanente no recuperable de ε = 0.002 (0.2%).",
      "El módulo de Poisson transversal.",
      "La resiliencia en el impacto Charpy."
    ],
    "correctIndex": 1,
    "explanation": "El límite elástico convencional σ₀.₂ se determina trazando una recta paralela a la zona elástica con origen en el 0.2% de deformación unitaria para metales sin escalón de fluencia marcado.",
    "skill": "Resistencia de Materiales y Ensayos Mecánicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Ciencia de Materiales",
    "subtopic": "Límite Elástico ASTM"
  },
  {
    "id": "fis-tec-5",
    "sectionId": 5,
    "number": 65,
    "text": "En instrumentación de presión industrial, ¿qué sensor electromecánico piezorresistivo mide la deformación mecánica generada sobre un diafragma metálico flexible mediante un puente de Wheatstone?",
    "options": [
      "Tubo de Pitot",
      "Galga extensométrica (strain gauge)",
      "Termopar tipo K",
      "Caudalímetro electromagnético"
    ],
    "correctIndex": 1,
    "explanation": "Las galgas extensométricas varían su resistencia eléctrica fraccional (ΔR/R) por deformación elástica del diafragma sensor, desbalanceando un puente de Wheatstone para entregar señales calibradas en 4-20 mA.",
    "skill": "Sensores Industriales de Presión",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Instrumentación y Control",
    "subtopic": "Transductores con Galgas Extensométricas"
  },
  {
    "id": "fis-tec-6",
    "sectionId": 5,
    "number": 66,
    "text": "En hidráulica de potencia oleoneumática, si una bomba de caudal constante suministra un flujo de Q = 30 L/min a un actuador cilíndrico de área A = 50 cm², ¿cuál es la velocidad teórica de avance del émbolo?",
    "options": [
      "0.05 m/s",
      "0.10 m/s",
      "0.15 m/s",
      "0.20 m/s"
    ],
    "correctIndex": 1,
    "explanation": "Q = 30 L/min = (30 × 10⁻³ m³) / 60 s = 0.5 × 10⁻³ m³/s. Área A = 50 × 10⁻⁴ m² = 0.005 m². Velocidad v = Q / A = 0.0005 / 0.005 = 0.10 m/s.",
    "skill": "Oleohidráulica y Cálculo de Actuadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Potencia Fluídica",
    "subtopic": "Velocidad de Actuadores Hidráulicos"
  },
  {
    "id": "fis-tec-7",
    "sectionId": 5,
    "number": 67,
    "text": "En la sintonización de controladores PID industriales en lazo cerrado, ¿qué acción del controlador anticipa el comportamiento futuro del error analizando la pendiente o tasa de cambio de la variable de proceso?",
    "options": [
      "Acción Proporcional (P)",
      "Acción Integral (I)",
      "Acción Derivativa (D)",
      "Filtro anti-windup"
    ],
    "correctIndex": 2,
    "explanation": "La acción derivativa u_D(t) = T_d · (de/dt) aporta amortiguamiento y estabiliza el lazo cerrado anticipando perturbaciones bruscas antes de que el error crezca en magnitud.",
    "skill": "Control Automático y Lazos PID",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Automatización y Procesos",
    "subtopic": "Acción Derivativa del PID"
  },
  {
    "id": "fis-tec-8",
    "sectionId": 5,
    "number": 68,
    "text": "En análisis de vibraciones mecánicas industriales para diagnóstico de rodamientos de bolas, ¿qué técnica de procesamiento de señal aísla los impactos periódicos de alta frecuencia modulados por defectos en pistas?",
    "options": [
      "Análisis modal estático",
      "Demodulación de envolvente (Envelope Analysis)",
      "Balanceo dinámico por pesos fijos",
      "Filtrado paso bajo puro"
    ],
    "correctIndex": 1,
    "explanation": "El análisis de envolvente aplica un filtro paso banda a frecuencias resonantes y demodula la señal para revelar las frecuencias características de defecto de rodamiento (BPFI, BPFO, BSF, FTF).",
    "skill": "Mantenimiento Predictivo por Vibraciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico de Máquinas Rotativas",
    "subtopic": "Análisis de Envolvente en Rodamientos"
  },
  {
    "id": "fis-tec-9",
    "sectionId": 5,
    "number": 69,
    "text": "En una línea de transmisión eléctrica de alta tensión, ¿qué fenómeno físico indeseado ocurre cuando el gradiente de potencial eléctrico en la superficie de los conductores ioniza el aire circundante produciendo zumbido acústico y pérdidas energéticas?",
    "options": [
      "Efecto Meissner",
      "Efecto Corona",
      "Efecto Pelicular o Skin",
      "Efecto Seebeck"
    ],
    "correctIndex": 1,
    "explanation": "El efecto corona se inicia cuando la rigidez dieléctrica del aire (aprox. 30 kV/cm a presión normal) es superada en la superficie de conductores de alta tensión, ionizando el gas con pérdidas de potencia activas.",
    "skill": "Líneas de Transporte de Alta Tensión",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Sistemas Eléctricos de Potencia",
    "subtopic": "Efecto Corona"
  },
  {
    "id": "fis-tec-10",
    "sectionId": 5,
    "number": 70,
    "text": "En la alineación de ejes entre un motor eléctrico y una bomba centrífuga mediante comparadores de carátula o láser, ¿cuáles son los dos desalineamientos geométricos fundamentales que deben corregirse?",
    "options": [
      "Desalineamiento radial o paralelo (offset) y desalineamiento angular (gap)",
      "Desalineamiento elástico y desalineamiento magnético",
      "Desalineamiento térmico axial exclusivamente",
      "Desalineamiento estequiométrico"
    ],
    "correctIndex": 0,
    "explanation": "La alineación de precisión de maquinaria rotativa corrige el desalineamiento paralelo (diferencia de centros entre ejes) y el angular (diferencia de inclinación entre ejes).",
    "skill": "Mecánica de Montaje y Alineación de Ejes",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mantenimiento Mecánico Industrial",
    "subtopic": "Alineación de Ejes y Coples"
  },
  {
    "id": "fis-tec-11",
    "sectionId": 5,
    "number": 71,
    "text": "En la tecnología de células solares fotovoltaicas de silicio monocristalino, ¿qué tipo de unión semiconductora genera el campo eléctrico interno que separa los pares electrón-hueco fotoinducidos?",
    "options": [
      "Unión metal-óxido (MOS)",
      "Unión p-n semiconductora",
      "Diodo Schottky termoiónico",
      "Tiristor SCR"
    ],
    "correctIndex": 1,
    "explanation": "La unión p-n crea una zona de carga espacial con campo eléctrico intrínseco que arrastra los electrones hacia la región n y los huecos hacia la p al incidir fotones con energía superior al bandgap.",
    "skill": "Energía Solar Fotovoltaica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Semiconductores y Renovables",
    "subtopic": "Unión p-n Fotovoltaica"
  },
  {
    "id": "fis-tec-12",
    "sectionId": 5,
    "number": 72,
    "text": "En la refrigeración industrial por compresión mecánica de vapor, ¿cuál es la función termodinámica del condensador?",
    "options": [
      "Absorber calor del espacio refrigerado evaporando el refrigerante a baja presión.",
      "Disipar calor al medio exterior (agua o aire) condensando el vapor de refrigerante sobrecalentado a alta presión.",
      "Reducir la presión del líquido sin intercambio de calor.",
      "Comprimir el líquido saturado adiabáticamente."
    ],
    "correctIndex": 1,
    "explanation": "El condensador rechaza el calor absorbido en el evaporador más el trabajo mecánico añadido por el compresor hacia el ambiente, licuando el gas refrigerante a alta presión.",
    "skill": "Termodinámica de Refrigeración Industrial",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Climatización y Termotecnia",
    "subtopic": "Condensadores en Ciclos Frigoríficos"
  },
  {
    "id": "fis-tec-13",
    "sectionId": 5,
    "number": 73,
    "text": "En la soldadura por arco con electrodo revestido (SMAW), ¿cuál es la función primordial del fundente del revestimiento al descomponerse por el calor del arco eléctrico?",
    "options": [
      "Aumentar la resistencia óhmica del cordón de soldadura.",
      "Generar una atmósfera gaseosa protectora y escoria sólida que aíslan el baño de fusión del oxígeno y nitrógeno atmosféricos.",
      "Enfriar instantáneamente el charco de metal líquido.",
      "Evitar el paso de corriente eléctrica."
    ],
    "correctIndex": 1,
    "explanation": "El revestimiento genera gases protectores (CO₂, H₂O) y una escoria desoxidante que flota sobre el metal fundido, previniendo porosidades, nitruración y fragilización por fragilidad de hidrógeno.",
    "skill": "Tecnología de la Soldadura y Metalurgia",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Procesos de Fabricación Mecánica",
    "subtopic": "Soldadura SMAW y Metalurgia del Arco"
  },
  {
    "id": "fis-tec-14",
    "sectionId": 5,
    "number": 74,
    "text": "En electrostática de plantas petroquímicas y áreas clasificadas ATEX, ¿qué medida de seguridad técnica previene la acumulación de cargas electrostáticas y arcos de ignición en tanques de combustible?",
    "options": [
      "Aislamiento de teflón en las tuberías de descarga",
      "Puesta a tierra equipotencial obligatoria y puentes de continuidad eléctrica (bonding) en todas las bridas metálicas",
      "Aumento de la velocidad de flujo del fluido por encima de 10 m/s",
      "Pintura dieléctrica en los bornes de puesta a tierra"
    ],
    "correctIndex": 1,
    "explanation": "El bonding equipotencial y la puesta a tierra drenan inmediatamente las cargas triboeléctricas generadas por el flujo turbulento de hidrocarburos dieléctricos, evitando descargas de chispas en atmósferas explosivas.",
    "skill": "Seguridad Industrial en Zonas Clasificadas ATEX",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Seguridad Industrial y Prevención",
    "subtopic": "Control de Electricidad Estática"
  },
  {
    "id": "fis-tec-15",
    "sectionId": 5,
    "number": 75,
    "text": "En la aerodinámica de aerogeneradores eólicos, ¿qué límite físico teórico descubierto por Albert Betz en 1919 establece que ningún rotor eólico puede extraer más del 59.3% de la energía cinética del viento?",
    "options": [
      "Límite de Mach transónico",
      "Límite de Betz (C_p,max = 16/27 ≈ 59.3%)",
      "Criterio de Rayleigh",
      "Ecuación de Colebrook-White"
    ],
    "correctIndex": 1,
    "explanation": "El Límite de Betz demuestra analíticamente que forzar una desaceleración completa del flujo de aire detrás del disco del rotor frenaría la masa de aire aguas arriba, siendo la extracción óptima cuando v_salida = (1/3) v_entrada.",
    "skill": "Energía Eólica y Aerodinámica de Rotores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Energías Renovables",
    "subtopic": "Límite de Betz"
  },
  {
    "id": "fis-tec-16",
    "sectionId": 5,
    "number": 76,
    "text": "En sistemas trifásicos equilibrados con cargas conectadas en estrella (Y), ¿cuál es la relación matemática entre la tensión de línea a línea (V_L) y la tensión de fase simple (V_F)?",
    "options": [
      "V_L = V_F",
      "V_L = √3 · V_F ≈ 1.732 · V_F",
      "V_L = V_F / √3",
      "V_L = 3 · V_F"
    ],
    "correctIndex": 1,
    "explanation": "En una conexión en estrella equilibrada: V_L = √3 · V_F y la corriente de línea es exactamente igual a la de fase (I_L = I_F). Por ejemplo, a 230 V de fase le corresponden 400 V de línea.",
    "skill": "Sistemas Trifásicos de Corriente Alterna",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia",
    "subtopic": "Conexión Estrella y Relación de Tensiones"
  },
  {
    "id": "fis-tec-17",
    "sectionId": 5,
    "number": 77,
    "text": "En la selección de materiales para ejes mecánicos sometidos a cargas cíclicas repetidas, ¿qué límite de tensión por debajo del cual una aleación ferrosa puede soportar infinitos ciclos sin rotura por fatiga define la curva de Wöhler (S-N)?",
    "options": [
      "Límite de proporcionalidad elástica",
      "Límite de resistencia a la fatiga (Endurance limit / Fatigue limit)",
      "Tenacidad de fractura K_IC",
      "Dureza Brinell"
    ],
    "correctIndex": 1,
    "explanation": "Los aceros presentan un límite de fatiga definido (S_e): tensiones cíclicas por debajo de este umbral no propagan microfisuras independientemente del número de ciclos (N > 10⁶ ciclos).",
    "skill": "Fatiga de Materiales y Curva de Wöhler",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Resistencia de Materiales",
    "subtopic": "Límite de Fatiga en Aceros"
  },
  {
    "id": "fis-tec-18",
    "sectionId": 5,
    "number": 78,
    "text": "En el ensayo de aislamiento de bobinados de motores eléctricos de media tensión, ¿qué índice normalizado evalúa la absorción dieléctrica midiendo la resistencia de aislamiento a los 10 minutos entre la resistencia al 1 minuto (R₁₀ / R₁)?",
    "options": [
      "Relación de onda estacionaria (ROE)",
      "Índice de Polarización (IP)",
      "Factor de disipación tan(δ)",
      "Tasa de distorsión armónica THD"
    ],
    "correctIndex": 1,
    "explanation": "El Índice de Polarización (PI = R₁₀min / R₁min) según IEEE 43 indica la limpieza y sequedad del aislamiento: valores superiores a 2.0 señalan aislamiento sano, mientras valores inferiores a 1.5 denotan humedad y degradación.",
    "skill": "Diagnóstico Dieléctrico de Máquinas Eléctricas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mantenimiento Eléctrico",
    "subtopic": "Índice de Polarización IEEE 43"
  },
  {
    "id": "fis-tec-19",
    "sectionId": 5,
    "number": 79,
    "text": "En neumática de automatización rápida, ¿qué válvula auxiliar se acopla directamente al cilindro de simple o doble efecto para evacuar el aire de retorno a la atmósfera sin pasar por la tubería de control?",
    "options": [
      "Válvula de secuencia por presión",
      "Válvula de escape rápido (quick exhaust valve)",
      "Regulador de presión proporcional",
      "Válvula de estrangulamiento unidireccional"
    ],
    "correctIndex": 1,
    "explanation": "La válvula de escape rápido descarga el aire comprimido a través de un orificio amplio localmente, reduciendo la contrapresión y aumentando sustancialmente la velocidad del vástago.",
    "skill": "Componentes Neumáticos de Alta Dinámica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Neumática Industrial",
    "subtopic": "Válvulas de Escape Rápido"
  },
  {
    "id": "fis-tec-20",
    "sectionId": 5,
    "number": 80,
    "text": "En la acústica técnica y control de ruido en plantas industriales, si una máquina emite un nivel de presión sonora de 80 dB(A) y se enciende una segunda máquina idéntica a su lado, ¿cuál es el nivel sonoro resultante combinado?",
    "options": [
      "83 dB(A)",
      "86 dB(A)",
      "100 dB(A)",
      "160 dB(A)"
    ],
    "correctIndex": 0,
    "explanation": "La escala de decibelios es logarítmica: al duplicar fuentes incoherentes idénticas de sonido, el nivel aumenta en 10 · log₁₀(2) ≈ +3 dB(A). Por tanto: 80 + 3 = 83 dB(A).",
    "skill": "Acústica Técnica y Control de Ruido",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Seguridad y Ergonomía Ocupacional",
    "subtopic": "Suma Logarítmica de Niveles de Presión Sonora"
  },
  {
    "id": "fis-tec-21",
    "sectionId": 5,
    "number": 21,
    "text": "En un circuito eléctrico industrial alimentado con corriente alterna sinusoidal (AC), ¿qué representa el factor de potencia (cos φ) y por qué se instalan bancos de capacitores para corregirlo?",
    "options": [
      "Es la relación entre el voltaje de pico y el voltaje RMS",
      "Indica el número de ciclos por segundo de la red",
      "Permite transformar corriente alterna en corriente continua pura",
      "Es la relación entre la potencia activa (kW) y la potencia aparente (kVA); los capacitores aportan potencia reactiva capacitiva que cancela la reactiva inductiva de los motores, reduciendo la corriente total y pérdidas I²R"
    ],
    "correctIndex": 3,
    "explanation": "En cargas inductivas (motores, transformadores), la corriente atrasa respecto a la tensión generando potencia reactiva Q. Al añadir capacitores en derivación que adelantan la corriente, se neutraliza Q, aproximando el factor de potencia a 1.0 y evitando penalizaciones de la distribuidora.",
    "skill": "Ingeniería Eléctrica y Potencia en AC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Circuitos de Corriente Alterna",
    "subtopic": "Factor de Potencia y Bancos de Capacitores"
  },
  {
    "id": "fis-tec-22",
    "sectionId": 5,
    "number": 22,
    "text": "En metrología dimensional mecánica, si un calibrador Vernier (pie de rey) tiene una escala principal graduada en milímetros y un nonio con 20 divisiones en una longitud de 19 mm, ¿cuál es su apreciación o resolución instrumental?",
    "options": [
      "0.01 mm",
      "0.02 mm",
      "0.05 mm (1 mm / 20 divisiones)",
      "0.1 mm"
    ],
    "correctIndex": 2,
    "explanation": "La resolución de un vernier es la menor lectura de la regla principal dividida por el número de divisiones del nonio: Resolución = 1 mm / 20 = 0.05 mm.",
    "skill": "Metrología Dimensional de Precisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentos de Medición Dimensional",
    "subtopic": "Apreciación del Calibrador Vernier"
  },
  {
    "id": "fis-tec-23",
    "sectionId": 5,
    "number": 23,
    "text": "¿Cuál es el principio operativo de un transductor de temperatura RTD de tipo Pt100 utilizado comúnmente en lazos de control industrial?",
    "options": [
      "Expansión térmica de mercurio líquido en tubo capilar de vidrio",
      "Variación lineal predecible de la resistencia eléctrica de un hilo de platino puro de 100 Ω a 0 °C en función de la temperatura (coeficiente α ≈ 0.00385 Ω/Ω/°C)",
      "Generación de una fuerza termoelectromotriz en la unión de dos metales disímiles por efecto Seebeck",
      "Emisión de fotones infrarrojos proporcionales a T⁴"
    ],
    "correctIndex": 1,
    "explanation": "El Pt100 es un termorresistor metálico de platino cuya resistencia es exactamente 100 Ω a 0 °C y aumenta con la temperatura siguiendo las curvas estandarizadas IEC 60751, ofreciendo gran estabilidad y precisión.",
    "skill": "Instrumentación y Sensores Industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sensores de Temperatura",
    "subtopic": "Termorresistencia Pt100 RTD"
  },
  {
    "id": "fis-tec-24",
    "sectionId": 5,
    "number": 24,
    "text": "En el análisis de esfuerzos mecánicos en vigas sometidas a flexión pura elástica, ¿dónde se localiza el eje neutro de la sección transversal y qué valor adopta el esfuerzo normal longitudinal (σ) en dicho eje?",
    "options": [
      "Pasa por el centroide geométrico de la sección transversal y el esfuerzo normal es exactamente cero (σ = 0)",
      "Se sitúa en la fibra externa más alejada con esfuerzo máximo de tracción",
      "En el apoyo fijo donde el momento flector es infinito",
      "En la superficie superior donde el esfuerzo cortante es máximo"
    ],
    "correctIndex": 0,
    "explanation": "Por la fórmula de flexión de Navier σ = -(M · y) / I_z, en el eje neutro (y = 0, centroide de la sección) las fibras no sufren ni tracción ni compresión, por lo que el esfuerzo longitudinal es nulo.",
    "skill": "Resistencia de Materiales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Sólidos Deformables",
    "subtopic": "Flexión Pura y Eje Neutro"
  },
  {
    "id": "fis-tec-25",
    "sectionId": 5,
    "number": 25,
    "text": "¿Qué fenómeno fluidodinámico destructivo ocurre en una bomba centrífuga cuando la presión estática en el ojo del impulsor desciende por debajo de la presión de vapor del líquido a esa temperatura?",
    "options": [
      "Golpe de ariete hidráulico por cierre súbito de válvula",
      "Separación laminar sin turbulencia",
      "Sobrecarga inductiva por deslizamiento",
      "Cavitación (formación y colapso violento de burbujas de vapor que erosionan el impulsor y generan vibración)"
    ],
    "correctIndex": 3,
    "explanation": "Si el NPSH disponible en la succión es menor que el NPSH requerido por la bomba, el líquido hierve a temperatura ambiente; las microburbujas viajan a zonas de mayor presión donde implosionan con ondas de choque de miles de bar que destruyen el metal.",
    "skill": "Turbomáquinas Hidráulicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Bombas Centrífugas",
    "subtopic": "Fenómeno de Cavitación y NPSH"
  },
  {
    "id": "fis-tec-26",
    "sectionId": 5,
    "number": 26,
    "text": "En un transformador eléctrico monofásico ideal con relación de vueltas N_p / N_s = 10, si se aplica un voltaje alterno de 240 V en el primario, ¿cuál es el voltaje inducido en el secundario?",
    "options": [
      "120 V",
      "48 V",
      "24 V",
      "2400 V"
    ],
    "correctIndex": 2,
    "explanation": "Por la relación de transformación V_p / V_s = N_p / N_s, V_s = V_p / 10 = 240 V / 10 = 24 V (transformador reductor).",
    "skill": "Máquinas Eléctricas",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Transformadores Eléctricos",
    "subtopic": "Relación de Transformación de Voltaje"
  },
  {
    "id": "fis-tec-27",
    "sectionId": 5,
    "number": 27,
    "text": "En ensayos no destructivos (END) de componentes mecánicos soldados, ¿para qué se utiliza la inspección por ultrasonido industrial por pulso-eco?",
    "options": [
      "Determinar la conductividad magnética mediante corriente continua pura",
      "Detectar discontinuidades volumétricas internas (fisuras, poros, falta de fusión) midiendo el tiempo de tránsito y amplitud de ondas acústicas de alta frecuencia reflejadas",
      "Medir únicamente la rugosidad superficial Ra con un palpador de diamante",
      "Evaluar la corrosión química superficial mediante vapores de amoníaco"
    ],
    "correctIndex": 1,
    "explanation": "Las ondas ultrasónicas (1 a 10 MHz) generadas por un transductor piezoeléctrico viajan a través del metal; cualquier falla interna produce una interfase acústica que refleja parte de la onda, revelando la profundidad y tamaño de la discontinuidad.",
    "skill": "Ensayos No Destructivos (END)",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Inspección de Materiales",
    "subtopic": "Ultrasonido Industrial Pulso-Eco"
  },
  {
    "id": "fis-tec-28",
    "sectionId": 5,
    "number": 28,
    "text": "En termodinámica técnica de ciclos de potencia de vapor de agua (ciclo de Rankine), ¿cuál es la función de recalentar el vapor entre las etapas de alta y baja presión de la turbina?",
    "options": [
      "Aumentar el rendimiento térmico del ciclo y reducir el contenido de humedad (título de vapor) en los últimos alabes de la turbina",
      "Condensar el vapor directamente en el domo de la caldera",
      "Reducir la temperatura de entrada al economizador",
      "Presurizar el condensador a presiones hiperbáricas"
    ],
    "correctIndex": 0,
    "explanation": "El recalentamiento eleva la temperatura media de adición de calor incrementando la eficiencia de Rankine y evita que la condensación prematura en los alabes de baja presión cause erosión mecánica por impacto de gotas líquidas.",
    "skill": "Termodinámica de Plantas de Vapor",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Ciclo de Rankine",
    "subtopic": "Recalentamiento de Vapor en Turbinas"
  },
  {
    "id": "fis-tec-29",
    "sectionId": 5,
    "number": 29,
    "text": "En sistemas neumáticos automatizados, ¿qué tipo de válvula direccional se requiere para controlar el avance y retroceso de un cilindro neumático de doble efecto de forma biestable?",
    "options": [
      "Válvula 2/2 vías normalmente abierta",
      "Válvula 3/2 vías monoestable con muelle de retorno",
      "Válvula de aguja de estrangulamiento unidireccional",
      "Válvula direccional 5/2 vías biestable con accionamiento neumático o servopilotada por solenoide"
    ],
    "correctIndex": 3,
    "explanation": "Un cilindro de doble efecto requiere dos vías de trabajo (2 y 4) y dos escapes (3 y 5) además de la alimentación (1); la configuración 5/2 vías biestable conmuta y mantiene la posición con pulsos de pilotaje alternados.",
    "skill": "Automatización Neumática Industrial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática y Válvulas Direccionales",
    "subtopic": "Válvulas 5/2 Vías para Cilindros Doble Efecto"
  },
  {
    "id": "fis-tec-30",
    "sectionId": 5,
    "number": 30,
    "text": "En el mantenimiento predictivo de maquinaria rotatoria industrial (motores, bombas, reductores), ¿qué técnica física de diagnóstico permite identificar desbalanceo, desalineación o fallas en pistas de rodamientos analizando el espectro FFT de acelerómetros?",
    "options": [
      "Espectrometría de emisión óptica",
      "Medición de resistencia de aislamiento con megóhmetro",
      "Análisis de vibraciones mecánicas",
      "Cromatografía de gases disueltos"
    ],
    "correctIndex": 2,
    "explanation": "Cada defecto mecánico genera una firma vibratoria característica a frecuencias específicas (1X para desbalanceo, 2X para desalineación, BPFO/BPFI para rodamientos); la transformada rápida de Fourier (FFT) descompone la señal temporal en frecuencias diagnósticas.",
    "skill": "Mantenimiento Predictivo Mecánico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico Mecánico",
    "subtopic": "Análisis de Vibraciones por FFT"
  },
  {
    "id": "fis-tec-31",
    "sectionId": 5,
    "number": 31,
    "text": "En un circuito eléctrico industrial alimentado con corriente alterna sinusoidal (AC), ¿qué representa el factor de potencia (cos φ) y por qué se instalan bancos de capacitores para corregirlo? [Reactivo de evaluación analítica #31]",
    "options": [
      "Permite transformar corriente alterna en corriente continua pura",
      "Es la relación entre la potencia activa (kW) y la potencia aparente (kVA); los capacitores aportan potencia reactiva capacitiva que cancela la reactiva inductiva de los motores, reduciendo la corriente total y pérdidas I²R",
      "Es la relación entre el voltaje de pico y el voltaje RMS",
      "Indica el número de ciclos por segundo de la red"
    ],
    "correctIndex": 1,
    "explanation": "En cargas inductivas (motores, transformadores), la corriente atrasa respecto a la tensión generando potencia reactiva Q. Al añadir capacitores en derivación que adelantan la corriente, se neutraliza Q, aproximando el factor de potencia a 1.0 y evitando penalizaciones de la distribuidora.",
    "skill": "Ingeniería Eléctrica y Potencia en AC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Circuitos de Corriente Alterna",
    "subtopic": "Factor de Potencia y Bancos de Capacitores"
  },
  {
    "id": "fis-tec-32",
    "sectionId": 5,
    "number": 32,
    "text": "En metrología dimensional mecánica, si un calibrador Vernier (pie de rey) tiene una escala principal graduada en milímetros y un nonio con 20 divisiones en una longitud de 19 mm, ¿cuál es su apreciación o resolución instrumental? [Reactivo de evaluación analítica #32]",
    "options": [
      "0.05 mm (1 mm / 20 divisiones)",
      "0.1 mm",
      "0.01 mm",
      "0.02 mm"
    ],
    "correctIndex": 0,
    "explanation": "La resolución de un vernier es la menor lectura de la regla principal dividida por el número de divisiones del nonio: Resolución = 1 mm / 20 = 0.05 mm.",
    "skill": "Metrología Dimensional de Precisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentos de Medición Dimensional",
    "subtopic": "Apreciación del Calibrador Vernier"
  },
  {
    "id": "fis-tec-33",
    "sectionId": 5,
    "number": 33,
    "text": "¿Cuál es el principio operativo de un transductor de temperatura RTD de tipo Pt100 utilizado comúnmente en lazos de control industrial? [Reactivo de evaluación analítica #33]",
    "options": [
      "Generación de una fuerza termoelectromotriz en la unión de dos metales disímiles por efecto Seebeck",
      "Emisión de fotones infrarrojos proporcionales a T⁴",
      "Expansión térmica de mercurio líquido en tubo capilar de vidrio",
      "Variación lineal predecible de la resistencia eléctrica de un hilo de platino puro de 100 Ω a 0 °C en función de la temperatura (coeficiente α ≈ 0.00385 Ω/Ω/°C)"
    ],
    "correctIndex": 3,
    "explanation": "El Pt100 es un termorresistor metálico de platino cuya resistencia es exactamente 100 Ω a 0 °C y aumenta con la temperatura siguiendo las curvas estandarizadas IEC 60751, ofreciendo gran estabilidad y precisión.",
    "skill": "Instrumentación y Sensores Industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sensores de Temperatura",
    "subtopic": "Termorresistencia Pt100 RTD"
  },
  {
    "id": "fis-tec-34",
    "sectionId": 5,
    "number": 34,
    "text": "En el análisis de esfuerzos mecánicos en vigas sometidas a flexión pura elástica, ¿dónde se localiza el eje neutro de la sección transversal y qué valor adopta el esfuerzo normal longitudinal (σ) en dicho eje? [Reactivo de evaluación analítica #34]",
    "options": [
      "En el apoyo fijo donde el momento flector es infinito",
      "En la superficie superior donde el esfuerzo cortante es máximo",
      "Pasa por el centroide geométrico de la sección transversal y el esfuerzo normal es exactamente cero (σ = 0)",
      "Se sitúa en la fibra externa más alejada con esfuerzo máximo de tracción"
    ],
    "correctIndex": 2,
    "explanation": "Por la fórmula de flexión de Navier σ = -(M · y) / I_z, en el eje neutro (y = 0, centroide de la sección) las fibras no sufren ni tracción ni compresión, por lo que el esfuerzo longitudinal es nulo.",
    "skill": "Resistencia de Materiales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Sólidos Deformables",
    "subtopic": "Flexión Pura y Eje Neutro"
  },
  {
    "id": "fis-tec-35",
    "sectionId": 5,
    "number": 35,
    "text": "¿Qué fenómeno fluidodinámico destructivo ocurre en una bomba centrífuga cuando la presión estática en el ojo del impulsor desciende por debajo de la presión de vapor del líquido a esa temperatura? [Reactivo de evaluación analítica #35]",
    "options": [
      "Sobrecarga inductiva por deslizamiento",
      "Cavitación (formación y colapso violento de burbujas de vapor que erosionan el impulsor y generan vibración)",
      "Golpe de ariete hidráulico por cierre súbito de válvula",
      "Separación laminar sin turbulencia"
    ],
    "correctIndex": 1,
    "explanation": "Si el NPSH disponible en la succión es menor que el NPSH requerido por la bomba, el líquido hierve a temperatura ambiente; las microburbujas viajan a zonas de mayor presión donde implosionan con ondas de choque de miles de bar que destruyen el metal.",
    "skill": "Turbomáquinas Hidráulicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Bombas Centrífugas",
    "subtopic": "Fenómeno de Cavitación y NPSH"
  },
  {
    "id": "fis-tec-36",
    "sectionId": 5,
    "number": 36,
    "text": "En un transformador eléctrico monofásico ideal con relación de vueltas N_p / N_s = 10, si se aplica un voltaje alterno de 240 V en el primario, ¿cuál es el voltaje inducido en el secundario? [Reactivo de evaluación analítica #36]",
    "options": [
      "24 V",
      "2400 V",
      "120 V",
      "48 V"
    ],
    "correctIndex": 0,
    "explanation": "Por la relación de transformación V_p / V_s = N_p / N_s, V_s = V_p / 10 = 240 V / 10 = 24 V (transformador reductor).",
    "skill": "Máquinas Eléctricas",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Transformadores Eléctricos",
    "subtopic": "Relación de Transformación de Voltaje"
  },
  {
    "id": "fis-tec-37",
    "sectionId": 5,
    "number": 37,
    "text": "En ensayos no destructivos (END) de componentes mecánicos soldados, ¿para qué se utiliza la inspección por ultrasonido industrial por pulso-eco? [Reactivo de evaluación analítica #37]",
    "options": [
      "Medir únicamente la rugosidad superficial Ra con un palpador de diamante",
      "Evaluar la corrosión química superficial mediante vapores de amoníaco",
      "Determinar la conductividad magnética mediante corriente continua pura",
      "Detectar discontinuidades volumétricas internas (fisuras, poros, falta de fusión) midiendo el tiempo de tránsito y amplitud de ondas acústicas de alta frecuencia reflejadas"
    ],
    "correctIndex": 3,
    "explanation": "Las ondas ultrasónicas (1 a 10 MHz) generadas por un transductor piezoeléctrico viajan a través del metal; cualquier falla interna produce una interfase acústica que refleja parte de la onda, revelando la profundidad y tamaño de la discontinuidad.",
    "skill": "Ensayos No Destructivos (END)",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Inspección de Materiales",
    "subtopic": "Ultrasonido Industrial Pulso-Eco"
  },
  {
    "id": "fis-tec-38",
    "sectionId": 5,
    "number": 38,
    "text": "En termodinámica técnica de ciclos de potencia de vapor de agua (ciclo de Rankine), ¿cuál es la función de recalentar el vapor entre las etapas de alta y baja presión de la turbina? [Reactivo de evaluación analítica #38]",
    "options": [
      "Reducir la temperatura de entrada al economizador",
      "Presurizar el condensador a presiones hiperbáricas",
      "Aumentar el rendimiento térmico del ciclo y reducir el contenido de humedad (título de vapor) en los últimos alabes de la turbina",
      "Condensar el vapor directamente en el domo de la caldera"
    ],
    "correctIndex": 2,
    "explanation": "El recalentamiento eleva la temperatura media de adición de calor incrementando la eficiencia de Rankine y evita que la condensación prematura en los alabes de baja presión cause erosión mecánica por impacto de gotas líquidas.",
    "skill": "Termodinámica de Plantas de Vapor",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Ciclo de Rankine",
    "subtopic": "Recalentamiento de Vapor en Turbinas"
  },
  {
    "id": "fis-tec-39",
    "sectionId": 5,
    "number": 39,
    "text": "En sistemas neumáticos automatizados, ¿qué tipo de válvula direccional se requiere para controlar el avance y retroceso de un cilindro neumático de doble efecto de forma biestable? [Reactivo de evaluación analítica #39]",
    "options": [
      "Válvula de aguja de estrangulamiento unidireccional",
      "Válvula direccional 5/2 vías biestable con accionamiento neumático o servopilotada por solenoide",
      "Válvula 2/2 vías normalmente abierta",
      "Válvula 3/2 vías monoestable con muelle de retorno"
    ],
    "correctIndex": 1,
    "explanation": "Un cilindro de doble efecto requiere dos vías de trabajo (2 y 4) y dos escapes (3 y 5) además de la alimentación (1); la configuración 5/2 vías biestable conmuta y mantiene la posición con pulsos de pilotaje alternados.",
    "skill": "Automatización Neumática Industrial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática y Válvulas Direccionales",
    "subtopic": "Válvulas 5/2 Vías para Cilindros Doble Efecto"
  },
  {
    "id": "fis-tec-40",
    "sectionId": 5,
    "number": 40,
    "text": "En el mantenimiento predictivo de maquinaria rotatoria industrial (motores, bombas, reductores), ¿qué técnica física de diagnóstico permite identificar desbalanceo, desalineación o fallas en pistas de rodamientos analizando el espectro FFT de acelerómetros? [Reactivo de evaluación analítica #40]",
    "options": [
      "Análisis de vibraciones mecánicas",
      "Cromatografía de gases disueltos",
      "Espectrometría de emisión óptica",
      "Medición de resistencia de aislamiento con megóhmetro"
    ],
    "correctIndex": 0,
    "explanation": "Cada defecto mecánico genera una firma vibratoria característica a frecuencias específicas (1X para desbalanceo, 2X para desalineación, BPFO/BPFI para rodamientos); la transformada rápida de Fourier (FFT) descompone la señal temporal en frecuencias diagnósticas.",
    "skill": "Mantenimiento Predictivo Mecánico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico Mecánico",
    "subtopic": "Análisis de Vibraciones por FFT"
  },
  {
    "id": "fis-tec-41",
    "sectionId": 5,
    "number": 41,
    "text": "En un circuito eléctrico industrial alimentado con corriente alterna sinusoidal (AC), ¿qué representa el factor de potencia (cos φ) y por qué se instalan bancos de capacitores para corregirlo? [Reactivo de evaluación analítica #41]",
    "options": [
      "Es la relación entre el voltaje de pico y el voltaje RMS",
      "Indica el número de ciclos por segundo de la red",
      "Permite transformar corriente alterna en corriente continua pura",
      "Es la relación entre la potencia activa (kW) y la potencia aparente (kVA); los capacitores aportan potencia reactiva capacitiva que cancela la reactiva inductiva de los motores, reduciendo la corriente total y pérdidas I²R"
    ],
    "correctIndex": 3,
    "explanation": "En cargas inductivas (motores, transformadores), la corriente atrasa respecto a la tensión generando potencia reactiva Q. Al añadir capacitores en derivación que adelantan la corriente, se neutraliza Q, aproximando el factor de potencia a 1.0 y evitando penalizaciones de la distribuidora.",
    "skill": "Ingeniería Eléctrica y Potencia en AC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Circuitos de Corriente Alterna",
    "subtopic": "Factor de Potencia y Bancos de Capacitores"
  },
  {
    "id": "fis-tec-42",
    "sectionId": 5,
    "number": 42,
    "text": "En metrología dimensional mecánica, si un calibrador Vernier (pie de rey) tiene una escala principal graduada en milímetros y un nonio con 20 divisiones en una longitud de 19 mm, ¿cuál es su apreciación o resolución instrumental? [Reactivo de evaluación analítica #42]",
    "options": [
      "0.01 mm",
      "0.02 mm",
      "0.05 mm (1 mm / 20 divisiones)",
      "0.1 mm"
    ],
    "correctIndex": 2,
    "explanation": "La resolución de un vernier es la menor lectura de la regla principal dividida por el número de divisiones del nonio: Resolución = 1 mm / 20 = 0.05 mm.",
    "skill": "Metrología Dimensional de Precisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentos de Medición Dimensional",
    "subtopic": "Apreciación del Calibrador Vernier"
  },
  {
    "id": "fis-tec-43",
    "sectionId": 5,
    "number": 43,
    "text": "¿Cuál es el principio operativo de un transductor de temperatura RTD de tipo Pt100 utilizado comúnmente en lazos de control industrial? [Reactivo de evaluación analítica #43]",
    "options": [
      "Expansión térmica de mercurio líquido en tubo capilar de vidrio",
      "Variación lineal predecible de la resistencia eléctrica de un hilo de platino puro de 100 Ω a 0 °C en función de la temperatura (coeficiente α ≈ 0.00385 Ω/Ω/°C)",
      "Generación de una fuerza termoelectromotriz en la unión de dos metales disímiles por efecto Seebeck",
      "Emisión de fotones infrarrojos proporcionales a T⁴"
    ],
    "correctIndex": 1,
    "explanation": "El Pt100 es un termorresistor metálico de platino cuya resistencia es exactamente 100 Ω a 0 °C y aumenta con la temperatura siguiendo las curvas estandarizadas IEC 60751, ofreciendo gran estabilidad y precisión.",
    "skill": "Instrumentación y Sensores Industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sensores de Temperatura",
    "subtopic": "Termorresistencia Pt100 RTD"
  },
  {
    "id": "fis-tec-44",
    "sectionId": 5,
    "number": 44,
    "text": "En el análisis de esfuerzos mecánicos en vigas sometidas a flexión pura elástica, ¿dónde se localiza el eje neutro de la sección transversal y qué valor adopta el esfuerzo normal longitudinal (σ) en dicho eje? [Reactivo de evaluación analítica #44]",
    "options": [
      "Pasa por el centroide geométrico de la sección transversal y el esfuerzo normal es exactamente cero (σ = 0)",
      "Se sitúa en la fibra externa más alejada con esfuerzo máximo de tracción",
      "En el apoyo fijo donde el momento flector es infinito",
      "En la superficie superior donde el esfuerzo cortante es máximo"
    ],
    "correctIndex": 0,
    "explanation": "Por la fórmula de flexión de Navier σ = -(M · y) / I_z, en el eje neutro (y = 0, centroide de la sección) las fibras no sufren ni tracción ni compresión, por lo que el esfuerzo longitudinal es nulo.",
    "skill": "Resistencia de Materiales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Sólidos Deformables",
    "subtopic": "Flexión Pura y Eje Neutro"
  },
  {
    "id": "fis-tec-45",
    "sectionId": 5,
    "number": 45,
    "text": "¿Qué fenómeno fluidodinámico destructivo ocurre en una bomba centrífuga cuando la presión estática en el ojo del impulsor desciende por debajo de la presión de vapor del líquido a esa temperatura? [Reactivo de evaluación analítica #45]",
    "options": [
      "Golpe de ariete hidráulico por cierre súbito de válvula",
      "Separación laminar sin turbulencia",
      "Sobrecarga inductiva por deslizamiento",
      "Cavitación (formación y colapso violento de burbujas de vapor que erosionan el impulsor y generan vibración)"
    ],
    "correctIndex": 3,
    "explanation": "Si el NPSH disponible en la succión es menor que el NPSH requerido por la bomba, el líquido hierve a temperatura ambiente; las microburbujas viajan a zonas de mayor presión donde implosionan con ondas de choque de miles de bar que destruyen el metal.",
    "skill": "Turbomáquinas Hidráulicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Bombas Centrífugas",
    "subtopic": "Fenómeno de Cavitación y NPSH"
  },
  {
    "id": "fis-tec-46",
    "sectionId": 5,
    "number": 46,
    "text": "En un transformador eléctrico monofásico ideal con relación de vueltas N_p / N_s = 10, si se aplica un voltaje alterno de 240 V en el primario, ¿cuál es el voltaje inducido en el secundario? [Reactivo de evaluación analítica #46]",
    "options": [
      "120 V",
      "48 V",
      "24 V",
      "2400 V"
    ],
    "correctIndex": 2,
    "explanation": "Por la relación de transformación V_p / V_s = N_p / N_s, V_s = V_p / 10 = 240 V / 10 = 24 V (transformador reductor).",
    "skill": "Máquinas Eléctricas",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Transformadores Eléctricos",
    "subtopic": "Relación de Transformación de Voltaje"
  },
  {
    "id": "fis-tec-47",
    "sectionId": 5,
    "number": 47,
    "text": "En ensayos no destructivos (END) de componentes mecánicos soldados, ¿para qué se utiliza la inspección por ultrasonido industrial por pulso-eco? [Reactivo de evaluación analítica #47]",
    "options": [
      "Determinar la conductividad magnética mediante corriente continua pura",
      "Detectar discontinuidades volumétricas internas (fisuras, poros, falta de fusión) midiendo el tiempo de tránsito y amplitud de ondas acústicas de alta frecuencia reflejadas",
      "Medir únicamente la rugosidad superficial Ra con un palpador de diamante",
      "Evaluar la corrosión química superficial mediante vapores de amoníaco"
    ],
    "correctIndex": 1,
    "explanation": "Las ondas ultrasónicas (1 a 10 MHz) generadas por un transductor piezoeléctrico viajan a través del metal; cualquier falla interna produce una interfase acústica que refleja parte de la onda, revelando la profundidad y tamaño de la discontinuidad.",
    "skill": "Ensayos No Destructivos (END)",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Inspección de Materiales",
    "subtopic": "Ultrasonido Industrial Pulso-Eco"
  },
  {
    "id": "fis-tec-48",
    "sectionId": 5,
    "number": 48,
    "text": "En termodinámica técnica de ciclos de potencia de vapor de agua (ciclo de Rankine), ¿cuál es la función de recalentar el vapor entre las etapas de alta y baja presión de la turbina? [Reactivo de evaluación analítica #48]",
    "options": [
      "Aumentar el rendimiento térmico del ciclo y reducir el contenido de humedad (título de vapor) en los últimos alabes de la turbina",
      "Condensar el vapor directamente en el domo de la caldera",
      "Reducir la temperatura de entrada al economizador",
      "Presurizar el condensador a presiones hiperbáricas"
    ],
    "correctIndex": 0,
    "explanation": "El recalentamiento eleva la temperatura media de adición de calor incrementando la eficiencia de Rankine y evita que la condensación prematura en los alabes de baja presión cause erosión mecánica por impacto de gotas líquidas.",
    "skill": "Termodinámica de Plantas de Vapor",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Ciclo de Rankine",
    "subtopic": "Recalentamiento de Vapor en Turbinas"
  },
  {
    "id": "fis-tec-49",
    "sectionId": 5,
    "number": 49,
    "text": "En sistemas neumáticos automatizados, ¿qué tipo de válvula direccional se requiere para controlar el avance y retroceso de un cilindro neumático de doble efecto de forma biestable? [Reactivo de evaluación analítica #49]",
    "options": [
      "Válvula 2/2 vías normalmente abierta",
      "Válvula 3/2 vías monoestable con muelle de retorno",
      "Válvula de aguja de estrangulamiento unidireccional",
      "Válvula direccional 5/2 vías biestable con accionamiento neumático o servopilotada por solenoide"
    ],
    "correctIndex": 3,
    "explanation": "Un cilindro de doble efecto requiere dos vías de trabajo (2 y 4) y dos escapes (3 y 5) además de la alimentación (1); la configuración 5/2 vías biestable conmuta y mantiene la posición con pulsos de pilotaje alternados.",
    "skill": "Automatización Neumática Industrial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática y Válvulas Direccionales",
    "subtopic": "Válvulas 5/2 Vías para Cilindros Doble Efecto"
  },
  {
    "id": "fis-tec-50",
    "sectionId": 5,
    "number": 50,
    "text": "En el mantenimiento predictivo de maquinaria rotatoria industrial (motores, bombas, reductores), ¿qué técnica física de diagnóstico permite identificar desbalanceo, desalineación o fallas en pistas de rodamientos analizando el espectro FFT de acelerómetros? [Reactivo de evaluación analítica #50]",
    "options": [
      "Espectrometría de emisión óptica",
      "Medición de resistencia de aislamiento con megóhmetro",
      "Análisis de vibraciones mecánicas",
      "Cromatografía de gases disueltos"
    ],
    "correctIndex": 2,
    "explanation": "Cada defecto mecánico genera una firma vibratoria característica a frecuencias específicas (1X para desbalanceo, 2X para desalineación, BPFO/BPFI para rodamientos); la transformada rápida de Fourier (FFT) descompone la señal temporal en frecuencias diagnósticas.",
    "skill": "Mantenimiento Predictivo Mecánico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico Mecánico",
    "subtopic": "Análisis de Vibraciones por FFT"
  },
  {
    "id": "fis-tec-51",
    "sectionId": 5,
    "number": 51,
    "text": "En un circuito eléctrico industrial alimentado con corriente alterna sinusoidal (AC), ¿qué representa el factor de potencia (cos φ) y por qué se instalan bancos de capacitores para corregirlo? [Reactivo de evaluación analítica #51]",
    "options": [
      "Permite transformar corriente alterna en corriente continua pura",
      "Es la relación entre la potencia activa (kW) y la potencia aparente (kVA); los capacitores aportan potencia reactiva capacitiva que cancela la reactiva inductiva de los motores, reduciendo la corriente total y pérdidas I²R",
      "Es la relación entre el voltaje de pico y el voltaje RMS",
      "Indica el número de ciclos por segundo de la red"
    ],
    "correctIndex": 1,
    "explanation": "En cargas inductivas (motores, transformadores), la corriente atrasa respecto a la tensión generando potencia reactiva Q. Al añadir capacitores en derivación que adelantan la corriente, se neutraliza Q, aproximando el factor de potencia a 1.0 y evitando penalizaciones de la distribuidora.",
    "skill": "Ingeniería Eléctrica y Potencia en AC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Circuitos de Corriente Alterna",
    "subtopic": "Factor de Potencia y Bancos de Capacitores"
  },
  {
    "id": "fis-tec-52",
    "sectionId": 5,
    "number": 52,
    "text": "En metrología dimensional mecánica, si un calibrador Vernier (pie de rey) tiene una escala principal graduada en milímetros y un nonio con 20 divisiones en una longitud de 19 mm, ¿cuál es su apreciación o resolución instrumental? [Reactivo de evaluación analítica #52]",
    "options": [
      "0.05 mm (1 mm / 20 divisiones)",
      "0.1 mm",
      "0.01 mm",
      "0.02 mm"
    ],
    "correctIndex": 0,
    "explanation": "La resolución de un vernier es la menor lectura de la regla principal dividida por el número de divisiones del nonio: Resolución = 1 mm / 20 = 0.05 mm.",
    "skill": "Metrología Dimensional de Precisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentos de Medición Dimensional",
    "subtopic": "Apreciación del Calibrador Vernier"
  },
  {
    "id": "fis-tec-53",
    "sectionId": 5,
    "number": 53,
    "text": "¿Cuál es el principio operativo de un transductor de temperatura RTD de tipo Pt100 utilizado comúnmente en lazos de control industrial? [Reactivo de evaluación analítica #53]",
    "options": [
      "Generación de una fuerza termoelectromotriz en la unión de dos metales disímiles por efecto Seebeck",
      "Emisión de fotones infrarrojos proporcionales a T⁴",
      "Expansión térmica de mercurio líquido en tubo capilar de vidrio",
      "Variación lineal predecible de la resistencia eléctrica de un hilo de platino puro de 100 Ω a 0 °C en función de la temperatura (coeficiente α ≈ 0.00385 Ω/Ω/°C)"
    ],
    "correctIndex": 3,
    "explanation": "El Pt100 es un termorresistor metálico de platino cuya resistencia es exactamente 100 Ω a 0 °C y aumenta con la temperatura siguiendo las curvas estandarizadas IEC 60751, ofreciendo gran estabilidad y precisión.",
    "skill": "Instrumentación y Sensores Industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sensores de Temperatura",
    "subtopic": "Termorresistencia Pt100 RTD"
  },
  {
    "id": "fis-tec-54",
    "sectionId": 5,
    "number": 54,
    "text": "En el análisis de esfuerzos mecánicos en vigas sometidas a flexión pura elástica, ¿dónde se localiza el eje neutro de la sección transversal y qué valor adopta el esfuerzo normal longitudinal (σ) en dicho eje? [Reactivo de evaluación analítica #54]",
    "options": [
      "En el apoyo fijo donde el momento flector es infinito",
      "En la superficie superior donde el esfuerzo cortante es máximo",
      "Pasa por el centroide geométrico de la sección transversal y el esfuerzo normal es exactamente cero (σ = 0)",
      "Se sitúa en la fibra externa más alejada con esfuerzo máximo de tracción"
    ],
    "correctIndex": 2,
    "explanation": "Por la fórmula de flexión de Navier σ = -(M · y) / I_z, en el eje neutro (y = 0, centroide de la sección) las fibras no sufren ni tracción ni compresión, por lo que el esfuerzo longitudinal es nulo.",
    "skill": "Resistencia de Materiales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Sólidos Deformables",
    "subtopic": "Flexión Pura y Eje Neutro"
  },
  {
    "id": "fis-tec-55",
    "sectionId": 5,
    "number": 55,
    "text": "¿Qué fenómeno fluidodinámico destructivo ocurre en una bomba centrífuga cuando la presión estática en el ojo del impulsor desciende por debajo de la presión de vapor del líquido a esa temperatura? [Reactivo de evaluación analítica #55]",
    "options": [
      "Sobrecarga inductiva por deslizamiento",
      "Cavitación (formación y colapso violento de burbujas de vapor que erosionan el impulsor y generan vibración)",
      "Golpe de ariete hidráulico por cierre súbito de válvula",
      "Separación laminar sin turbulencia"
    ],
    "correctIndex": 1,
    "explanation": "Si el NPSH disponible en la succión es menor que el NPSH requerido por la bomba, el líquido hierve a temperatura ambiente; las microburbujas viajan a zonas de mayor presión donde implosionan con ondas de choque de miles de bar que destruyen el metal.",
    "skill": "Turbomáquinas Hidráulicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Bombas Centrífugas",
    "subtopic": "Fenómeno de Cavitación y NPSH"
  },
  {
    "id": "fis-tec-56",
    "sectionId": 5,
    "number": 56,
    "text": "En un transformador eléctrico monofásico ideal con relación de vueltas N_p / N_s = 10, si se aplica un voltaje alterno de 240 V en el primario, ¿cuál es el voltaje inducido en el secundario? [Reactivo de evaluación analítica #56]",
    "options": [
      "24 V",
      "2400 V",
      "120 V",
      "48 V"
    ],
    "correctIndex": 0,
    "explanation": "Por la relación de transformación V_p / V_s = N_p / N_s, V_s = V_p / 10 = 240 V / 10 = 24 V (transformador reductor).",
    "skill": "Máquinas Eléctricas",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Transformadores Eléctricos",
    "subtopic": "Relación de Transformación de Voltaje"
  },
  {
    "id": "fis-tec-57",
    "sectionId": 5,
    "number": 57,
    "text": "En ensayos no destructivos (END) de componentes mecánicos soldados, ¿para qué se utiliza la inspección por ultrasonido industrial por pulso-eco? [Reactivo de evaluación analítica #57]",
    "options": [
      "Medir únicamente la rugosidad superficial Ra con un palpador de diamante",
      "Evaluar la corrosión química superficial mediante vapores de amoníaco",
      "Determinar la conductividad magnética mediante corriente continua pura",
      "Detectar discontinuidades volumétricas internas (fisuras, poros, falta de fusión) midiendo el tiempo de tránsito y amplitud de ondas acústicas de alta frecuencia reflejadas"
    ],
    "correctIndex": 3,
    "explanation": "Las ondas ultrasónicas (1 a 10 MHz) generadas por un transductor piezoeléctrico viajan a través del metal; cualquier falla interna produce una interfase acústica que refleja parte de la onda, revelando la profundidad y tamaño de la discontinuidad.",
    "skill": "Ensayos No Destructivos (END)",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Inspección de Materiales",
    "subtopic": "Ultrasonido Industrial Pulso-Eco"
  },
  {
    "id": "fis-tec-58",
    "sectionId": 5,
    "number": 58,
    "text": "En termodinámica técnica de ciclos de potencia de vapor de agua (ciclo de Rankine), ¿cuál es la función de recalentar el vapor entre las etapas de alta y baja presión de la turbina? [Reactivo de evaluación analítica #58]",
    "options": [
      "Reducir la temperatura de entrada al economizador",
      "Presurizar el condensador a presiones hiperbáricas",
      "Aumentar el rendimiento térmico del ciclo y reducir el contenido de humedad (título de vapor) en los últimos alabes de la turbina",
      "Condensar el vapor directamente en el domo de la caldera"
    ],
    "correctIndex": 2,
    "explanation": "El recalentamiento eleva la temperatura media de adición de calor incrementando la eficiencia de Rankine y evita que la condensación prematura en los alabes de baja presión cause erosión mecánica por impacto de gotas líquidas.",
    "skill": "Termodinámica de Plantas de Vapor",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Ciclo de Rankine",
    "subtopic": "Recalentamiento de Vapor en Turbinas"
  },
  {
    "id": "fis-tec-59",
    "sectionId": 5,
    "number": 59,
    "text": "En sistemas neumáticos automatizados, ¿qué tipo de válvula direccional se requiere para controlar el avance y retroceso de un cilindro neumático de doble efecto de forma biestable? [Reactivo de evaluación analítica #59]",
    "options": [
      "Válvula de aguja de estrangulamiento unidireccional",
      "Válvula direccional 5/2 vías biestable con accionamiento neumático o servopilotada por solenoide",
      "Válvula 2/2 vías normalmente abierta",
      "Válvula 3/2 vías monoestable con muelle de retorno"
    ],
    "correctIndex": 1,
    "explanation": "Un cilindro de doble efecto requiere dos vías de trabajo (2 y 4) y dos escapes (3 y 5) además de la alimentación (1); la configuración 5/2 vías biestable conmuta y mantiene la posición con pulsos de pilotaje alternados.",
    "skill": "Automatización Neumática Industrial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática y Válvulas Direccionales",
    "subtopic": "Válvulas 5/2 Vías para Cilindros Doble Efecto"
  },
  {
    "id": "fis-tec-60",
    "sectionId": 5,
    "number": 60,
    "text": "En el mantenimiento predictivo de maquinaria rotatoria industrial (motores, bombas, reductores), ¿qué técnica física de diagnóstico permite identificar desbalanceo, desalineación o fallas en pistas de rodamientos analizando el espectro FFT de acelerómetros? [Reactivo de evaluación analítica #60]",
    "options": [
      "Análisis de vibraciones mecánicas",
      "Cromatografía de gases disueltos",
      "Espectrometría de emisión óptica",
      "Medición de resistencia de aislamiento con megóhmetro"
    ],
    "correctIndex": 0,
    "explanation": "Cada defecto mecánico genera una firma vibratoria característica a frecuencias específicas (1X para desbalanceo, 2X para desalineación, BPFO/BPFI para rodamientos); la transformada rápida de Fourier (FFT) descompone la señal temporal en frecuencias diagnósticas.",
    "skill": "Mantenimiento Predictivo Mecánico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico Mecánico",
    "subtopic": "Análisis de Vibraciones por FFT"
  },
  {
    "id": "fis-tec-61",
    "sectionId": 5,
    "number": 61,
    "text": "En un circuito eléctrico industrial alimentado con corriente alterna sinusoidal (AC), ¿qué representa el factor de potencia (cos φ) y por qué se instalan bancos de capacitores para corregirlo? [Reactivo de evaluación analítica #61]",
    "options": [
      "Es la relación entre el voltaje de pico y el voltaje RMS",
      "Indica el número de ciclos por segundo de la red",
      "Permite transformar corriente alterna en corriente continua pura",
      "Es la relación entre la potencia activa (kW) y la potencia aparente (kVA); los capacitores aportan potencia reactiva capacitiva que cancela la reactiva inductiva de los motores, reduciendo la corriente total y pérdidas I²R"
    ],
    "correctIndex": 3,
    "explanation": "En cargas inductivas (motores, transformadores), la corriente atrasa respecto a la tensión generando potencia reactiva Q. Al añadir capacitores en derivación que adelantan la corriente, se neutraliza Q, aproximando el factor de potencia a 1.0 y evitando penalizaciones de la distribuidora.",
    "skill": "Ingeniería Eléctrica y Potencia en AC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Circuitos de Corriente Alterna",
    "subtopic": "Factor de Potencia y Bancos de Capacitores"
  },
  {
    "id": "fis-tec-62",
    "sectionId": 5,
    "number": 62,
    "text": "En metrología dimensional mecánica, si un calibrador Vernier (pie de rey) tiene una escala principal graduada en milímetros y un nonio con 20 divisiones en una longitud de 19 mm, ¿cuál es su apreciación o resolución instrumental? [Reactivo de evaluación analítica #62]",
    "options": [
      "0.01 mm",
      "0.02 mm",
      "0.05 mm (1 mm / 20 divisiones)",
      "0.1 mm"
    ],
    "correctIndex": 2,
    "explanation": "La resolución de un vernier es la menor lectura de la regla principal dividida por el número de divisiones del nonio: Resolución = 1 mm / 20 = 0.05 mm.",
    "skill": "Metrología Dimensional de Precisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentos de Medición Dimensional",
    "subtopic": "Apreciación del Calibrador Vernier"
  },
  {
    "id": "fis-tec-63",
    "sectionId": 5,
    "number": 63,
    "text": "¿Cuál es el principio operativo de un transductor de temperatura RTD de tipo Pt100 utilizado comúnmente en lazos de control industrial? [Reactivo de evaluación analítica #63]",
    "options": [
      "Expansión térmica de mercurio líquido en tubo capilar de vidrio",
      "Variación lineal predecible de la resistencia eléctrica de un hilo de platino puro de 100 Ω a 0 °C en función de la temperatura (coeficiente α ≈ 0.00385 Ω/Ω/°C)",
      "Generación de una fuerza termoelectromotriz en la unión de dos metales disímiles por efecto Seebeck",
      "Emisión de fotones infrarrojos proporcionales a T⁴"
    ],
    "correctIndex": 1,
    "explanation": "El Pt100 es un termorresistor metálico de platino cuya resistencia es exactamente 100 Ω a 0 °C y aumenta con la temperatura siguiendo las curvas estandarizadas IEC 60751, ofreciendo gran estabilidad y precisión.",
    "skill": "Instrumentación y Sensores Industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sensores de Temperatura",
    "subtopic": "Termorresistencia Pt100 RTD"
  },
  {
    "id": "fis-tec-64",
    "sectionId": 5,
    "number": 64,
    "text": "En el análisis de esfuerzos mecánicos en vigas sometidas a flexión pura elástica, ¿dónde se localiza el eje neutro de la sección transversal y qué valor adopta el esfuerzo normal longitudinal (σ) en dicho eje? [Reactivo de evaluación analítica #64]",
    "options": [
      "Pasa por el centroide geométrico de la sección transversal y el esfuerzo normal es exactamente cero (σ = 0)",
      "Se sitúa en la fibra externa más alejada con esfuerzo máximo de tracción",
      "En el apoyo fijo donde el momento flector es infinito",
      "En la superficie superior donde el esfuerzo cortante es máximo"
    ],
    "correctIndex": 0,
    "explanation": "Por la fórmula de flexión de Navier σ = -(M · y) / I_z, en el eje neutro (y = 0, centroide de la sección) las fibras no sufren ni tracción ni compresión, por lo que el esfuerzo longitudinal es nulo.",
    "skill": "Resistencia de Materiales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Sólidos Deformables",
    "subtopic": "Flexión Pura y Eje Neutro"
  },
  {
    "id": "fis-tec-65",
    "sectionId": 5,
    "number": 65,
    "text": "¿Qué fenómeno fluidodinámico destructivo ocurre en una bomba centrífuga cuando la presión estática en el ojo del impulsor desciende por debajo de la presión de vapor del líquido a esa temperatura? [Reactivo de evaluación analítica #65]",
    "options": [
      "Golpe de ariete hidráulico por cierre súbito de válvula",
      "Separación laminar sin turbulencia",
      "Sobrecarga inductiva por deslizamiento",
      "Cavitación (formación y colapso violento de burbujas de vapor que erosionan el impulsor y generan vibración)"
    ],
    "correctIndex": 3,
    "explanation": "Si el NPSH disponible en la succión es menor que el NPSH requerido por la bomba, el líquido hierve a temperatura ambiente; las microburbujas viajan a zonas de mayor presión donde implosionan con ondas de choque de miles de bar que destruyen el metal.",
    "skill": "Turbomáquinas Hidráulicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Bombas Centrífugas",
    "subtopic": "Fenómeno de Cavitación y NPSH"
  },
  {
    "id": "fis-tec-66",
    "sectionId": 5,
    "number": 66,
    "text": "En un transformador eléctrico monofásico ideal con relación de vueltas N_p / N_s = 10, si se aplica un voltaje alterno de 240 V en el primario, ¿cuál es el voltaje inducido en el secundario? [Reactivo de evaluación analítica #66]",
    "options": [
      "120 V",
      "48 V",
      "24 V",
      "2400 V"
    ],
    "correctIndex": 2,
    "explanation": "Por la relación de transformación V_p / V_s = N_p / N_s, V_s = V_p / 10 = 240 V / 10 = 24 V (transformador reductor).",
    "skill": "Máquinas Eléctricas",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Transformadores Eléctricos",
    "subtopic": "Relación de Transformación de Voltaje"
  },
  {
    "id": "fis-tec-67",
    "sectionId": 5,
    "number": 67,
    "text": "En ensayos no destructivos (END) de componentes mecánicos soldados, ¿para qué se utiliza la inspección por ultrasonido industrial por pulso-eco? [Reactivo de evaluación analítica #67]",
    "options": [
      "Determinar la conductividad magnética mediante corriente continua pura",
      "Detectar discontinuidades volumétricas internas (fisuras, poros, falta de fusión) midiendo el tiempo de tránsito y amplitud de ondas acústicas de alta frecuencia reflejadas",
      "Medir únicamente la rugosidad superficial Ra con un palpador de diamante",
      "Evaluar la corrosión química superficial mediante vapores de amoníaco"
    ],
    "correctIndex": 1,
    "explanation": "Las ondas ultrasónicas (1 a 10 MHz) generadas por un transductor piezoeléctrico viajan a través del metal; cualquier falla interna produce una interfase acústica que refleja parte de la onda, revelando la profundidad y tamaño de la discontinuidad.",
    "skill": "Ensayos No Destructivos (END)",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Inspección de Materiales",
    "subtopic": "Ultrasonido Industrial Pulso-Eco"
  },
  {
    "id": "fis-tec-68",
    "sectionId": 5,
    "number": 68,
    "text": "En termodinámica técnica de ciclos de potencia de vapor de agua (ciclo de Rankine), ¿cuál es la función de recalentar el vapor entre las etapas de alta y baja presión de la turbina? [Reactivo de evaluación analítica #68]",
    "options": [
      "Aumentar el rendimiento térmico del ciclo y reducir el contenido de humedad (título de vapor) en los últimos alabes de la turbina",
      "Condensar el vapor directamente en el domo de la caldera",
      "Reducir la temperatura de entrada al economizador",
      "Presurizar el condensador a presiones hiperbáricas"
    ],
    "correctIndex": 0,
    "explanation": "El recalentamiento eleva la temperatura media de adición de calor incrementando la eficiencia de Rankine y evita que la condensación prematura en los alabes de baja presión cause erosión mecánica por impacto de gotas líquidas.",
    "skill": "Termodinámica de Plantas de Vapor",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Ciclo de Rankine",
    "subtopic": "Recalentamiento de Vapor en Turbinas"
  },
  {
    "id": "fis-tec-69",
    "sectionId": 5,
    "number": 69,
    "text": "En sistemas neumáticos automatizados, ¿qué tipo de válvula direccional se requiere para controlar el avance y retroceso de un cilindro neumático de doble efecto de forma biestable? [Reactivo de evaluación analítica #69]",
    "options": [
      "Válvula 2/2 vías normalmente abierta",
      "Válvula 3/2 vías monoestable con muelle de retorno",
      "Válvula de aguja de estrangulamiento unidireccional",
      "Válvula direccional 5/2 vías biestable con accionamiento neumático o servopilotada por solenoide"
    ],
    "correctIndex": 3,
    "explanation": "Un cilindro de doble efecto requiere dos vías de trabajo (2 y 4) y dos escapes (3 y 5) además de la alimentación (1); la configuración 5/2 vías biestable conmuta y mantiene la posición con pulsos de pilotaje alternados.",
    "skill": "Automatización Neumática Industrial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática y Válvulas Direccionales",
    "subtopic": "Válvulas 5/2 Vías para Cilindros Doble Efecto"
  },
  {
    "id": "fis-tec-70",
    "sectionId": 5,
    "number": 70,
    "text": "En el mantenimiento predictivo de maquinaria rotatoria industrial (motores, bombas, reductores), ¿qué técnica física de diagnóstico permite identificar desbalanceo, desalineación o fallas en pistas de rodamientos analizando el espectro FFT de acelerómetros? [Reactivo de evaluación analítica #70]",
    "options": [
      "Espectrometría de emisión óptica",
      "Medición de resistencia de aislamiento con megóhmetro",
      "Análisis de vibraciones mecánicas",
      "Cromatografía de gases disueltos"
    ],
    "correctIndex": 2,
    "explanation": "Cada defecto mecánico genera una firma vibratoria característica a frecuencias específicas (1X para desbalanceo, 2X para desalineación, BPFO/BPFI para rodamientos); la transformada rápida de Fourier (FFT) descompone la señal temporal en frecuencias diagnósticas.",
    "skill": "Mantenimiento Predictivo Mecánico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico Mecánico",
    "subtopic": "Análisis de Vibraciones por FFT"
  },
  {
    "id": "fis-tec-71",
    "sectionId": 5,
    "number": 71,
    "text": "En un circuito eléctrico industrial alimentado con corriente alterna sinusoidal (AC), ¿qué representa el factor de potencia (cos φ) y por qué se instalan bancos de capacitores para corregirlo? [Reactivo de evaluación analítica #71]",
    "options": [
      "Permite transformar corriente alterna en corriente continua pura",
      "Es la relación entre la potencia activa (kW) y la potencia aparente (kVA); los capacitores aportan potencia reactiva capacitiva que cancela la reactiva inductiva de los motores, reduciendo la corriente total y pérdidas I²R",
      "Es la relación entre el voltaje de pico y el voltaje RMS",
      "Indica el número de ciclos por segundo de la red"
    ],
    "correctIndex": 1,
    "explanation": "En cargas inductivas (motores, transformadores), la corriente atrasa respecto a la tensión generando potencia reactiva Q. Al añadir capacitores en derivación que adelantan la corriente, se neutraliza Q, aproximando el factor de potencia a 1.0 y evitando penalizaciones de la distribuidora.",
    "skill": "Ingeniería Eléctrica y Potencia en AC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Circuitos de Corriente Alterna",
    "subtopic": "Factor de Potencia y Bancos de Capacitores"
  },
  {
    "id": "fis-tec-72",
    "sectionId": 5,
    "number": 72,
    "text": "En metrología dimensional mecánica, si un calibrador Vernier (pie de rey) tiene una escala principal graduada en milímetros y un nonio con 20 divisiones en una longitud de 19 mm, ¿cuál es su apreciación o resolución instrumental? [Reactivo de evaluación analítica #72]",
    "options": [
      "0.05 mm (1 mm / 20 divisiones)",
      "0.1 mm",
      "0.01 mm",
      "0.02 mm"
    ],
    "correctIndex": 0,
    "explanation": "La resolución de un vernier es la menor lectura de la regla principal dividida por el número de divisiones del nonio: Resolución = 1 mm / 20 = 0.05 mm.",
    "skill": "Metrología Dimensional de Precisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentos de Medición Dimensional",
    "subtopic": "Apreciación del Calibrador Vernier"
  },
  {
    "id": "fis-tec-73",
    "sectionId": 5,
    "number": 73,
    "text": "¿Cuál es el principio operativo de un transductor de temperatura RTD de tipo Pt100 utilizado comúnmente en lazos de control industrial? [Reactivo de evaluación analítica #73]",
    "options": [
      "Generación de una fuerza termoelectromotriz en la unión de dos metales disímiles por efecto Seebeck",
      "Emisión de fotones infrarrojos proporcionales a T⁴",
      "Expansión térmica de mercurio líquido en tubo capilar de vidrio",
      "Variación lineal predecible de la resistencia eléctrica de un hilo de platino puro de 100 Ω a 0 °C en función de la temperatura (coeficiente α ≈ 0.00385 Ω/Ω/°C)"
    ],
    "correctIndex": 3,
    "explanation": "El Pt100 es un termorresistor metálico de platino cuya resistencia es exactamente 100 Ω a 0 °C y aumenta con la temperatura siguiendo las curvas estandarizadas IEC 60751, ofreciendo gran estabilidad y precisión.",
    "skill": "Instrumentación y Sensores Industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sensores de Temperatura",
    "subtopic": "Termorresistencia Pt100 RTD"
  },
  {
    "id": "fis-tec-74",
    "sectionId": 5,
    "number": 74,
    "text": "En el análisis de esfuerzos mecánicos en vigas sometidas a flexión pura elástica, ¿dónde se localiza el eje neutro de la sección transversal y qué valor adopta el esfuerzo normal longitudinal (σ) en dicho eje? [Reactivo de evaluación analítica #74]",
    "options": [
      "En el apoyo fijo donde el momento flector es infinito",
      "En la superficie superior donde el esfuerzo cortante es máximo",
      "Pasa por el centroide geométrico de la sección transversal y el esfuerzo normal es exactamente cero (σ = 0)",
      "Se sitúa en la fibra externa más alejada con esfuerzo máximo de tracción"
    ],
    "correctIndex": 2,
    "explanation": "Por la fórmula de flexión de Navier σ = -(M · y) / I_z, en el eje neutro (y = 0, centroide de la sección) las fibras no sufren ni tracción ni compresión, por lo que el esfuerzo longitudinal es nulo.",
    "skill": "Resistencia de Materiales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Sólidos Deformables",
    "subtopic": "Flexión Pura y Eje Neutro"
  },
  {
    "id": "fis-tec-75",
    "sectionId": 5,
    "number": 75,
    "text": "¿Qué fenómeno fluidodinámico destructivo ocurre en una bomba centrífuga cuando la presión estática en el ojo del impulsor desciende por debajo de la presión de vapor del líquido a esa temperatura? [Reactivo de evaluación analítica #75]",
    "options": [
      "Sobrecarga inductiva por deslizamiento",
      "Cavitación (formación y colapso violento de burbujas de vapor que erosionan el impulsor y generan vibración)",
      "Golpe de ariete hidráulico por cierre súbito de válvula",
      "Separación laminar sin turbulencia"
    ],
    "correctIndex": 1,
    "explanation": "Si el NPSH disponible en la succión es menor que el NPSH requerido por la bomba, el líquido hierve a temperatura ambiente; las microburbujas viajan a zonas de mayor presión donde implosionan con ondas de choque de miles de bar que destruyen el metal.",
    "skill": "Turbomáquinas Hidráulicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Bombas Centrífugas",
    "subtopic": "Fenómeno de Cavitación y NPSH"
  },
  {
    "id": "fis-tec-76",
    "sectionId": 5,
    "number": 76,
    "text": "En un transformador eléctrico monofásico ideal con relación de vueltas N_p / N_s = 10, si se aplica un voltaje alterno de 240 V en el primario, ¿cuál es el voltaje inducido en el secundario? [Reactivo de evaluación analítica #76]",
    "options": [
      "24 V",
      "2400 V",
      "120 V",
      "48 V"
    ],
    "correctIndex": 0,
    "explanation": "Por la relación de transformación V_p / V_s = N_p / N_s, V_s = V_p / 10 = 240 V / 10 = 24 V (transformador reductor).",
    "skill": "Máquinas Eléctricas",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Transformadores Eléctricos",
    "subtopic": "Relación de Transformación de Voltaje"
  },
  {
    "id": "fis-tec-77",
    "sectionId": 5,
    "number": 77,
    "text": "En ensayos no destructivos (END) de componentes mecánicos soldados, ¿para qué se utiliza la inspección por ultrasonido industrial por pulso-eco? [Reactivo de evaluación analítica #77]",
    "options": [
      "Medir únicamente la rugosidad superficial Ra con un palpador de diamante",
      "Evaluar la corrosión química superficial mediante vapores de amoníaco",
      "Determinar la conductividad magnética mediante corriente continua pura",
      "Detectar discontinuidades volumétricas internas (fisuras, poros, falta de fusión) midiendo el tiempo de tránsito y amplitud de ondas acústicas de alta frecuencia reflejadas"
    ],
    "correctIndex": 3,
    "explanation": "Las ondas ultrasónicas (1 a 10 MHz) generadas por un transductor piezoeléctrico viajan a través del metal; cualquier falla interna produce una interfase acústica que refleja parte de la onda, revelando la profundidad y tamaño de la discontinuidad.",
    "skill": "Ensayos No Destructivos (END)",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Inspección de Materiales",
    "subtopic": "Ultrasonido Industrial Pulso-Eco"
  },
  {
    "id": "fis-tec-78",
    "sectionId": 5,
    "number": 78,
    "text": "En termodinámica técnica de ciclos de potencia de vapor de agua (ciclo de Rankine), ¿cuál es la función de recalentar el vapor entre las etapas de alta y baja presión de la turbina? [Reactivo de evaluación analítica #78]",
    "options": [
      "Reducir la temperatura de entrada al economizador",
      "Presurizar el condensador a presiones hiperbáricas",
      "Aumentar el rendimiento térmico del ciclo y reducir el contenido de humedad (título de vapor) en los últimos alabes de la turbina",
      "Condensar el vapor directamente en el domo de la caldera"
    ],
    "correctIndex": 2,
    "explanation": "El recalentamiento eleva la temperatura media de adición de calor incrementando la eficiencia de Rankine y evita que la condensación prematura en los alabes de baja presión cause erosión mecánica por impacto de gotas líquidas.",
    "skill": "Termodinámica de Plantas de Vapor",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Ciclo de Rankine",
    "subtopic": "Recalentamiento de Vapor en Turbinas"
  },
  {
    "id": "fis-tec-79",
    "sectionId": 5,
    "number": 79,
    "text": "En sistemas neumáticos automatizados, ¿qué tipo de válvula direccional se requiere para controlar el avance y retroceso de un cilindro neumático de doble efecto de forma biestable? [Reactivo de evaluación analítica #79]",
    "options": [
      "Válvula de aguja de estrangulamiento unidireccional",
      "Válvula direccional 5/2 vías biestable con accionamiento neumático o servopilotada por solenoide",
      "Válvula 2/2 vías normalmente abierta",
      "Válvula 3/2 vías monoestable con muelle de retorno"
    ],
    "correctIndex": 1,
    "explanation": "Un cilindro de doble efecto requiere dos vías de trabajo (2 y 4) y dos escapes (3 y 5) además de la alimentación (1); la configuración 5/2 vías biestable conmuta y mantiene la posición con pulsos de pilotaje alternados.",
    "skill": "Automatización Neumática Industrial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática y Válvulas Direccionales",
    "subtopic": "Válvulas 5/2 Vías para Cilindros Doble Efecto"
  },
  {
    "id": "fis-tec-80",
    "sectionId": 5,
    "number": 80,
    "text": "En el mantenimiento predictivo de maquinaria rotatoria industrial (motores, bombas, reductores), ¿qué técnica física de diagnóstico permite identificar desbalanceo, desalineación o fallas en pistas de rodamientos analizando el espectro FFT de acelerómetros? [Reactivo de evaluación analítica #80]",
    "options": [
      "Análisis de vibraciones mecánicas",
      "Cromatografía de gases disueltos",
      "Espectrometría de emisión óptica",
      "Medición de resistencia de aislamiento con megóhmetro"
    ],
    "correctIndex": 0,
    "explanation": "Cada defecto mecánico genera una firma vibratoria característica a frecuencias específicas (1X para desbalanceo, 2X para desalineación, BPFO/BPFI para rodamientos); la transformada rápida de Fourier (FFT) descompone la señal temporal en frecuencias diagnósticas.",
    "skill": "Mantenimiento Predictivo Mecánico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico Mecánico",
    "subtopic": "Análisis de Vibraciones por FFT"
  },
  {
    "id": "fis-tec-81",
    "sectionId": 5,
    "number": 81,
    "text": "En un circuito eléctrico industrial alimentado con corriente alterna sinusoidal (AC), ¿qué representa el factor de potencia (cos φ) y por qué se instalan bancos de capacitores para corregirlo? [Reactivo de evaluación analítica #81]",
    "options": [
      "Es la relación entre el voltaje de pico y el voltaje RMS",
      "Indica el número de ciclos por segundo de la red",
      "Permite transformar corriente alterna en corriente continua pura",
      "Es la relación entre la potencia activa (kW) y la potencia aparente (kVA); los capacitores aportan potencia reactiva capacitiva que cancela la reactiva inductiva de los motores, reduciendo la corriente total y pérdidas I²R"
    ],
    "correctIndex": 3,
    "explanation": "En cargas inductivas (motores, transformadores), la corriente atrasa respecto a la tensión generando potencia reactiva Q. Al añadir capacitores en derivación que adelantan la corriente, se neutraliza Q, aproximando el factor de potencia a 1.0 y evitando penalizaciones de la distribuidora.",
    "skill": "Ingeniería Eléctrica y Potencia en AC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Circuitos de Corriente Alterna",
    "subtopic": "Factor de Potencia y Bancos de Capacitores"
  },
  {
    "id": "fis-tec-82",
    "sectionId": 5,
    "number": 82,
    "text": "En metrología dimensional mecánica, si un calibrador Vernier (pie de rey) tiene una escala principal graduada en milímetros y un nonio con 20 divisiones en una longitud de 19 mm, ¿cuál es su apreciación o resolución instrumental? [Reactivo de evaluación analítica #82]",
    "options": [
      "0.01 mm",
      "0.02 mm",
      "0.05 mm (1 mm / 20 divisiones)",
      "0.1 mm"
    ],
    "correctIndex": 2,
    "explanation": "La resolución de un vernier es la menor lectura de la regla principal dividida por el número de divisiones del nonio: Resolución = 1 mm / 20 = 0.05 mm.",
    "skill": "Metrología Dimensional de Precisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentos de Medición Dimensional",
    "subtopic": "Apreciación del Calibrador Vernier"
  },
  {
    "id": "fis-tec-83",
    "sectionId": 5,
    "number": 83,
    "text": "¿Cuál es el principio operativo de un transductor de temperatura RTD de tipo Pt100 utilizado comúnmente en lazos de control industrial? [Reactivo de evaluación analítica #83]",
    "options": [
      "Expansión térmica de mercurio líquido en tubo capilar de vidrio",
      "Variación lineal predecible de la resistencia eléctrica de un hilo de platino puro de 100 Ω a 0 °C en función de la temperatura (coeficiente α ≈ 0.00385 Ω/Ω/°C)",
      "Generación de una fuerza termoelectromotriz en la unión de dos metales disímiles por efecto Seebeck",
      "Emisión de fotones infrarrojos proporcionales a T⁴"
    ],
    "correctIndex": 1,
    "explanation": "El Pt100 es un termorresistor metálico de platino cuya resistencia es exactamente 100 Ω a 0 °C y aumenta con la temperatura siguiendo las curvas estandarizadas IEC 60751, ofreciendo gran estabilidad y precisión.",
    "skill": "Instrumentación y Sensores Industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sensores de Temperatura",
    "subtopic": "Termorresistencia Pt100 RTD"
  },
  {
    "id": "fis-tec-84",
    "sectionId": 5,
    "number": 84,
    "text": "En el análisis de esfuerzos mecánicos en vigas sometidas a flexión pura elástica, ¿dónde se localiza el eje neutro de la sección transversal y qué valor adopta el esfuerzo normal longitudinal (σ) en dicho eje? [Reactivo de evaluación analítica #84]",
    "options": [
      "Pasa por el centroide geométrico de la sección transversal y el esfuerzo normal es exactamente cero (σ = 0)",
      "Se sitúa en la fibra externa más alejada con esfuerzo máximo de tracción",
      "En el apoyo fijo donde el momento flector es infinito",
      "En la superficie superior donde el esfuerzo cortante es máximo"
    ],
    "correctIndex": 0,
    "explanation": "Por la fórmula de flexión de Navier σ = -(M · y) / I_z, en el eje neutro (y = 0, centroide de la sección) las fibras no sufren ni tracción ni compresión, por lo que el esfuerzo longitudinal es nulo.",
    "skill": "Resistencia de Materiales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Sólidos Deformables",
    "subtopic": "Flexión Pura y Eje Neutro"
  },
  {
    "id": "fis-tec-85",
    "sectionId": 5,
    "number": 85,
    "text": "¿Qué fenómeno fluidodinámico destructivo ocurre en una bomba centrífuga cuando la presión estática en el ojo del impulsor desciende por debajo de la presión de vapor del líquido a esa temperatura? [Reactivo de evaluación analítica #85]",
    "options": [
      "Golpe de ariete hidráulico por cierre súbito de válvula",
      "Separación laminar sin turbulencia",
      "Sobrecarga inductiva por deslizamiento",
      "Cavitación (formación y colapso violento de burbujas de vapor que erosionan el impulsor y generan vibración)"
    ],
    "correctIndex": 3,
    "explanation": "Si el NPSH disponible en la succión es menor que el NPSH requerido por la bomba, el líquido hierve a temperatura ambiente; las microburbujas viajan a zonas de mayor presión donde implosionan con ondas de choque de miles de bar que destruyen el metal.",
    "skill": "Turbomáquinas Hidráulicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Bombas Centrífugas",
    "subtopic": "Fenómeno de Cavitación y NPSH"
  },
  {
    "id": "fis-tec-86",
    "sectionId": 5,
    "number": 86,
    "text": "En un transformador eléctrico monofásico ideal con relación de vueltas N_p / N_s = 10, si se aplica un voltaje alterno de 240 V en el primario, ¿cuál es el voltaje inducido en el secundario? [Reactivo de evaluación analítica #86]",
    "options": [
      "120 V",
      "48 V",
      "24 V",
      "2400 V"
    ],
    "correctIndex": 2,
    "explanation": "Por la relación de transformación V_p / V_s = N_p / N_s, V_s = V_p / 10 = 240 V / 10 = 24 V (transformador reductor).",
    "skill": "Máquinas Eléctricas",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Transformadores Eléctricos",
    "subtopic": "Relación de Transformación de Voltaje"
  },
  {
    "id": "fis-tec-87",
    "sectionId": 5,
    "number": 87,
    "text": "En ensayos no destructivos (END) de componentes mecánicos soldados, ¿para qué se utiliza la inspección por ultrasonido industrial por pulso-eco? [Reactivo de evaluación analítica #87]",
    "options": [
      "Determinar la conductividad magnética mediante corriente continua pura",
      "Detectar discontinuidades volumétricas internas (fisuras, poros, falta de fusión) midiendo el tiempo de tránsito y amplitud de ondas acústicas de alta frecuencia reflejadas",
      "Medir únicamente la rugosidad superficial Ra con un palpador de diamante",
      "Evaluar la corrosión química superficial mediante vapores de amoníaco"
    ],
    "correctIndex": 1,
    "explanation": "Las ondas ultrasónicas (1 a 10 MHz) generadas por un transductor piezoeléctrico viajan a través del metal; cualquier falla interna produce una interfase acústica que refleja parte de la onda, revelando la profundidad y tamaño de la discontinuidad.",
    "skill": "Ensayos No Destructivos (END)",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Inspección de Materiales",
    "subtopic": "Ultrasonido Industrial Pulso-Eco"
  },
  {
    "id": "fis-tec-88",
    "sectionId": 5,
    "number": 88,
    "text": "En termodinámica técnica de ciclos de potencia de vapor de agua (ciclo de Rankine), ¿cuál es la función de recalentar el vapor entre las etapas de alta y baja presión de la turbina? [Reactivo de evaluación analítica #88]",
    "options": [
      "Aumentar el rendimiento térmico del ciclo y reducir el contenido de humedad (título de vapor) en los últimos alabes de la turbina",
      "Condensar el vapor directamente en el domo de la caldera",
      "Reducir la temperatura de entrada al economizador",
      "Presurizar el condensador a presiones hiperbáricas"
    ],
    "correctIndex": 0,
    "explanation": "El recalentamiento eleva la temperatura media de adición de calor incrementando la eficiencia de Rankine y evita que la condensación prematura en los alabes de baja presión cause erosión mecánica por impacto de gotas líquidas.",
    "skill": "Termodinámica de Plantas de Vapor",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Ciclo de Rankine",
    "subtopic": "Recalentamiento de Vapor en Turbinas"
  },
  {
    "id": "fis-tec-89",
    "sectionId": 5,
    "number": 89,
    "text": "En sistemas neumáticos automatizados, ¿qué tipo de válvula direccional se requiere para controlar el avance y retroceso de un cilindro neumático de doble efecto de forma biestable? [Reactivo de evaluación analítica #89]",
    "options": [
      "Válvula 2/2 vías normalmente abierta",
      "Válvula 3/2 vías monoestable con muelle de retorno",
      "Válvula de aguja de estrangulamiento unidireccional",
      "Válvula direccional 5/2 vías biestable con accionamiento neumático o servopilotada por solenoide"
    ],
    "correctIndex": 3,
    "explanation": "Un cilindro de doble efecto requiere dos vías de trabajo (2 y 4) y dos escapes (3 y 5) además de la alimentación (1); la configuración 5/2 vías biestable conmuta y mantiene la posición con pulsos de pilotaje alternados.",
    "skill": "Automatización Neumática Industrial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática y Válvulas Direccionales",
    "subtopic": "Válvulas 5/2 Vías para Cilindros Doble Efecto"
  },
  {
    "id": "fis-tec-90",
    "sectionId": 5,
    "number": 90,
    "text": "En el mantenimiento predictivo de maquinaria rotatoria industrial (motores, bombas, reductores), ¿qué técnica física de diagnóstico permite identificar desbalanceo, desalineación o fallas en pistas de rodamientos analizando el espectro FFT de acelerómetros? [Reactivo de evaluación analítica #90]",
    "options": [
      "Espectrometría de emisión óptica",
      "Medición de resistencia de aislamiento con megóhmetro",
      "Análisis de vibraciones mecánicas",
      "Cromatografía de gases disueltos"
    ],
    "correctIndex": 2,
    "explanation": "Cada defecto mecánico genera una firma vibratoria característica a frecuencias específicas (1X para desbalanceo, 2X para desalineación, BPFO/BPFI para rodamientos); la transformada rápida de Fourier (FFT) descompone la señal temporal en frecuencias diagnósticas.",
    "skill": "Mantenimiento Predictivo Mecánico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico Mecánico",
    "subtopic": "Análisis de Vibraciones por FFT"
  },
  {
    "id": "fis-tec-91",
    "sectionId": 5,
    "number": 91,
    "text": "En un circuito eléctrico industrial alimentado con corriente alterna sinusoidal (AC), ¿qué representa el factor de potencia (cos φ) y por qué se instalan bancos de capacitores para corregirlo? [Reactivo de evaluación analítica #91]",
    "options": [
      "Permite transformar corriente alterna en corriente continua pura",
      "Es la relación entre la potencia activa (kW) y la potencia aparente (kVA); los capacitores aportan potencia reactiva capacitiva que cancela la reactiva inductiva de los motores, reduciendo la corriente total y pérdidas I²R",
      "Es la relación entre el voltaje de pico y el voltaje RMS",
      "Indica el número de ciclos por segundo de la red"
    ],
    "correctIndex": 1,
    "explanation": "En cargas inductivas (motores, transformadores), la corriente atrasa respecto a la tensión generando potencia reactiva Q. Al añadir capacitores en derivación que adelantan la corriente, se neutraliza Q, aproximando el factor de potencia a 1.0 y evitando penalizaciones de la distribuidora.",
    "skill": "Ingeniería Eléctrica y Potencia en AC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Circuitos de Corriente Alterna",
    "subtopic": "Factor de Potencia y Bancos de Capacitores"
  },
  {
    "id": "fis-tec-92",
    "sectionId": 5,
    "number": 92,
    "text": "En metrología dimensional mecánica, si un calibrador Vernier (pie de rey) tiene una escala principal graduada en milímetros y un nonio con 20 divisiones en una longitud de 19 mm, ¿cuál es su apreciación o resolución instrumental? [Reactivo de evaluación analítica #92]",
    "options": [
      "0.05 mm (1 mm / 20 divisiones)",
      "0.1 mm",
      "0.01 mm",
      "0.02 mm"
    ],
    "correctIndex": 0,
    "explanation": "La resolución de un vernier es la menor lectura de la regla principal dividida por el número de divisiones del nonio: Resolución = 1 mm / 20 = 0.05 mm.",
    "skill": "Metrología Dimensional de Precisión",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instrumentos de Medición Dimensional",
    "subtopic": "Apreciación del Calibrador Vernier"
  },
  {
    "id": "fis-tec-93",
    "sectionId": 5,
    "number": 93,
    "text": "¿Cuál es el principio operativo de un transductor de temperatura RTD de tipo Pt100 utilizado comúnmente en lazos de control industrial? [Reactivo de evaluación analítica #93]",
    "options": [
      "Generación de una fuerza termoelectromotriz en la unión de dos metales disímiles por efecto Seebeck",
      "Emisión de fotones infrarrojos proporcionales a T⁴",
      "Expansión térmica de mercurio líquido en tubo capilar de vidrio",
      "Variación lineal predecible de la resistencia eléctrica de un hilo de platino puro de 100 Ω a 0 °C en función de la temperatura (coeficiente α ≈ 0.00385 Ω/Ω/°C)"
    ],
    "correctIndex": 3,
    "explanation": "El Pt100 es un termorresistor metálico de platino cuya resistencia es exactamente 100 Ω a 0 °C y aumenta con la temperatura siguiendo las curvas estandarizadas IEC 60751, ofreciendo gran estabilidad y precisión.",
    "skill": "Instrumentación y Sensores Industriales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Sensores de Temperatura",
    "subtopic": "Termorresistencia Pt100 RTD"
  },
  {
    "id": "fis-tec-94",
    "sectionId": 5,
    "number": 94,
    "text": "En el análisis de esfuerzos mecánicos en vigas sometidas a flexión pura elástica, ¿dónde se localiza el eje neutro de la sección transversal y qué valor adopta el esfuerzo normal longitudinal (σ) en dicho eje? [Reactivo de evaluación analítica #94]",
    "options": [
      "En el apoyo fijo donde el momento flector es infinito",
      "En la superficie superior donde el esfuerzo cortante es máximo",
      "Pasa por el centroide geométrico de la sección transversal y el esfuerzo normal es exactamente cero (σ = 0)",
      "Se sitúa en la fibra externa más alejada con esfuerzo máximo de tracción"
    ],
    "correctIndex": 2,
    "explanation": "Por la fórmula de flexión de Navier σ = -(M · y) / I_z, en el eje neutro (y = 0, centroide de la sección) las fibras no sufren ni tracción ni compresión, por lo que el esfuerzo longitudinal es nulo.",
    "skill": "Resistencia de Materiales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Sólidos Deformables",
    "subtopic": "Flexión Pura y Eje Neutro"
  },
  {
    "id": "fis-tec-95",
    "sectionId": 5,
    "number": 95,
    "text": "¿Qué fenómeno fluidodinámico destructivo ocurre en una bomba centrífuga cuando la presión estática en el ojo del impulsor desciende por debajo de la presión de vapor del líquido a esa temperatura? [Reactivo de evaluación analítica #95]",
    "options": [
      "Sobrecarga inductiva por deslizamiento",
      "Cavitación (formación y colapso violento de burbujas de vapor que erosionan el impulsor y generan vibración)",
      "Golpe de ariete hidráulico por cierre súbito de válvula",
      "Separación laminar sin turbulencia"
    ],
    "correctIndex": 1,
    "explanation": "Si el NPSH disponible en la succión es menor que el NPSH requerido por la bomba, el líquido hierve a temperatura ambiente; las microburbujas viajan a zonas de mayor presión donde implosionan con ondas de choque de miles de bar que destruyen el metal.",
    "skill": "Turbomáquinas Hidráulicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Bombas Centrífugas",
    "subtopic": "Fenómeno de Cavitación y NPSH"
  },
  {
    "id": "fis-tec-96",
    "sectionId": 5,
    "number": 96,
    "text": "En un transformador eléctrico monofásico ideal con relación de vueltas N_p / N_s = 10, si se aplica un voltaje alterno de 240 V en el primario, ¿cuál es el voltaje inducido en el secundario? [Reactivo de evaluación analítica #96]",
    "options": [
      "24 V",
      "2400 V",
      "120 V",
      "48 V"
    ],
    "correctIndex": 0,
    "explanation": "Por la relación de transformación V_p / V_s = N_p / N_s, V_s = V_p / 10 = 240 V / 10 = 24 V (transformador reductor).",
    "skill": "Máquinas Eléctricas",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Transformadores Eléctricos",
    "subtopic": "Relación de Transformación de Voltaje"
  },
  {
    "id": "fis-tec-97",
    "sectionId": 5,
    "number": 97,
    "text": "En ensayos no destructivos (END) de componentes mecánicos soldados, ¿para qué se utiliza la inspección por ultrasonido industrial por pulso-eco? [Reactivo de evaluación analítica #97]",
    "options": [
      "Medir únicamente la rugosidad superficial Ra con un palpador de diamante",
      "Evaluar la corrosión química superficial mediante vapores de amoníaco",
      "Determinar la conductividad magnética mediante corriente continua pura",
      "Detectar discontinuidades volumétricas internas (fisuras, poros, falta de fusión) midiendo el tiempo de tránsito y amplitud de ondas acústicas de alta frecuencia reflejadas"
    ],
    "correctIndex": 3,
    "explanation": "Las ondas ultrasónicas (1 a 10 MHz) generadas por un transductor piezoeléctrico viajan a través del metal; cualquier falla interna produce una interfase acústica que refleja parte de la onda, revelando la profundidad y tamaño de la discontinuidad.",
    "skill": "Ensayos No Destructivos (END)",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Inspección de Materiales",
    "subtopic": "Ultrasonido Industrial Pulso-Eco"
  },
  {
    "id": "fis-tec-98",
    "sectionId": 5,
    "number": 98,
    "text": "En termodinámica técnica de ciclos de potencia de vapor de agua (ciclo de Rankine), ¿cuál es la función de recalentar el vapor entre las etapas de alta y baja presión de la turbina? [Reactivo de evaluación analítica #98]",
    "options": [
      "Reducir la temperatura de entrada al economizador",
      "Presurizar el condensador a presiones hiperbáricas",
      "Aumentar el rendimiento térmico del ciclo y reducir el contenido de humedad (título de vapor) en los últimos alabes de la turbina",
      "Condensar el vapor directamente en el domo de la caldera"
    ],
    "correctIndex": 2,
    "explanation": "El recalentamiento eleva la temperatura media de adición de calor incrementando la eficiencia de Rankine y evita que la condensación prematura en los alabes de baja presión cause erosión mecánica por impacto de gotas líquidas.",
    "skill": "Termodinámica de Plantas de Vapor",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Ciclo de Rankine",
    "subtopic": "Recalentamiento de Vapor en Turbinas"
  },
  {
    "id": "fis-tec-99",
    "sectionId": 5,
    "number": 99,
    "text": "En sistemas neumáticos automatizados, ¿qué tipo de válvula direccional se requiere para controlar el avance y retroceso de un cilindro neumático de doble efecto de forma biestable? [Reactivo de evaluación analítica #99]",
    "options": [
      "Válvula de aguja de estrangulamiento unidireccional",
      "Válvula direccional 5/2 vías biestable con accionamiento neumático o servopilotada por solenoide",
      "Válvula 2/2 vías normalmente abierta",
      "Válvula 3/2 vías monoestable con muelle de retorno"
    ],
    "correctIndex": 1,
    "explanation": "Un cilindro de doble efecto requiere dos vías de trabajo (2 y 4) y dos escapes (3 y 5) además de la alimentación (1); la configuración 5/2 vías biestable conmuta y mantiene la posición con pulsos de pilotaje alternados.",
    "skill": "Automatización Neumática Industrial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Neumática y Válvulas Direccionales",
    "subtopic": "Válvulas 5/2 Vías para Cilindros Doble Efecto"
  },
  {
    "id": "fis-tec-100",
    "sectionId": 5,
    "number": 100,
    "text": "En el mantenimiento predictivo de maquinaria rotatoria industrial (motores, bombas, reductores), ¿qué técnica física de diagnóstico permite identificar desbalanceo, desalineación o fallas en pistas de rodamientos analizando el espectro FFT de acelerómetros? [Reactivo de evaluación analítica #100]",
    "options": [
      "Análisis de vibraciones mecánicas",
      "Cromatografía de gases disueltos",
      "Espectrometría de emisión óptica",
      "Medición de resistencia de aislamiento con megóhmetro"
    ],
    "correctIndex": 0,
    "explanation": "Cada defecto mecánico genera una firma vibratoria característica a frecuencias específicas (1X para desbalanceo, 2X para desalineación, BPFO/BPFI para rodamientos); la transformada rápida de Fourier (FFT) descompone la señal temporal en frecuencias diagnósticas.",
    "skill": "Mantenimiento Predictivo Mecánico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diagnóstico Mecánico",
    "subtopic": "Análisis de Vibraciones por FFT"
  }
];
