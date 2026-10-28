import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE MATEMÁTICAS - NIVEL TÉCNICO (100 Reactivos)
 */
export const MATEMATICAS_TECNICO: Question[] = [
  {
    "id": "mat-tec-1",
    "sectionId": 1,
    "number": 61,
    "text": "En un taller de manufactura, una máquina tarda 4 horas en producir 240 piezas. Con una eficiencia mejorada que incrementa la velocidad un 25%, ¿cuántas piezas producirá en 5 horas?",
    "options": [
      "300 piezas",
      "375 piezas",
      "360 piezas",
      "400 piezas"
    ],
    "correctIndex": 1,
    "explanation": "Tasa original = 240 piezas / 4 h = 60 piezas/h. Con 25% de incremento: 60 × 1.25 = 75 piezas/h. En 5 horas: 75 × 5 = 375 piezas.",
    "skill": "Tasas de Producción y Rendimiento",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Matemática Aplicada a la Producción",
    "subtopic": "Rendimiento Industrial"
  },
  {
    "id": "mat-tec-2",
    "sectionId": 1,
    "number": 62,
    "text": "Para calcular la resistencia equivalente de dos resistores en paralelo de R₁ = 30 Ω y R₂ = 20 Ω, ¿cuál es el valor de Req?",
    "options": [
      "50 Ω",
      "12 Ω",
      "25 Ω",
      "15 Ω"
    ],
    "correctIndex": 1,
    "explanation": "Por fórmula de producto sobre suma: Req = (R₁ · R₂) / (R₁ + R₂) = (30 × 20) / (30 + 20) = 600 / 50 = 12 Ω.",
    "skill": "Modelado Eléctrico-Matemático",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Fórmulas Técnicas",
    "subtopic": "Circuitos en Paralelo"
  },
  {
    "id": "mat-tec-3",
    "sectionId": 1,
    "number": 63,
    "text": "Una polea motriz de 120 mm de diámetro gira a 1800 RPM y acciona mediante correa una polea conducida de 360 mm. ¿A cuántas RPM gira la polea conducida?",
    "options": [
      "600 RPM",
      "5400 RPM",
      "900 RPM",
      "1200 RPM"
    ],
    "correctIndex": 0,
    "explanation": "Por relación de transmisión: N₁ · D₁ = N₂ · D₂ => 1800 · 120 = N₂ · 360 => N₂ = (1800 · 120) / 360 = 216000 / 360 = 600 RPM.",
    "skill": "Cálculo de Transmisiones Mecánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Transmisión por Poleas"
  },
  {
    "id": "mat-tec-4",
    "sectionId": 1,
    "number": 64,
    "text": "Un tanque de almacenamiento cilíndrico tiene un radio interno de 1.5 metros y una altura de 4 metros. ¿Cuál es su capacidad volumétrica máxima en litros? (Usa π ≈ 3.1416).",
    "options": [
      "28,274 litros",
      "18,849 litros",
      "9,425 litros",
      "35,000 litros"
    ],
    "correctIndex": 0,
    "explanation": "Volumen V = π · r² · h = 3.1416 · (1.5)² · 4 = 3.1416 · 2.25 · 4 = 28.2744 m³. Como 1 m³ = 1000 litros, la capacidad es 28,274.4 L.",
    "skill": "Cálculo de Capacidad de Depósitos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Geometría Aplicada",
    "subtopic": "Volumen de Tanques"
  },
  {
    "id": "mat-tec-5",
    "sectionId": 1,
    "number": 65,
    "text": "Una pieza cilíndrica torneada tiene una cota nominal de 45 mm con tolerancia dimensional de ±0.03 mm. ¿Cuál es la dimensión máxima admisible para que la pieza pase el control de calidad?",
    "options": [
      "45.03 mm",
      "45.06 mm",
      "45.30 mm",
      "44.97 mm"
    ],
    "correctIndex": 0,
    "explanation": "La tolerancia superior es +0.03 mm. La cota máxima permitida es 45.00 + 0.03 = 45.03 mm.",
    "skill": "Metrología y Tolerancias Dimensionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Metrología Técnica",
    "subtopic": "Ajustes y Tolerancias"
  },
  {
    "id": "mat-tec-6",
    "sectionId": 1,
    "number": 66,
    "text": "Una rampa de carga para camiones debe salvar un desnivel vertical de 1.2 metros con una pendiente máxima del 8%. ¿Qué longitud horizontal mínima debe tener la rampa?",
    "options": [
      "15 metros",
      "9.6 metros",
      "12 metros",
      "18 metros"
    ],
    "correctIndex": 0,
    "explanation": "Pendiente = (desnivel / longitud horizontal) × 100% => 8% = (1.2 / L) × 100 => L = (1.2 × 100) / 8 = 120 / 8 = 15 metros.",
    "skill": "Cálculo de Pendientes Técnicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Topografía y Estructuras",
    "subtopic": "Pendientes"
  },
  {
    "id": "mat-tec-7",
    "sectionId": 1,
    "number": 67,
    "text": "Un motor eléctrico de 5.5 kW de potencia nominal tiene una eficiencia (rendimiento) del 88%. ¿Cuánta potencia eléctrica real consume de la red?",
    "options": [
      "6.25 kW",
      "4.84 kW",
      "5.00 kW",
      "6.80 kW"
    ],
    "correctIndex": 0,
    "explanation": "Rendimiento η = P_util / P_consumida => P_consumida = P_util / η = 5.5 kW / 0.88 = 6.25 kW.",
    "skill": "Rendimiento Energético",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Electromecánica",
    "subtopic": "Potencia y Rendimiento"
  },
  {
    "id": "mat-tec-8",
    "sectionId": 1,
    "number": 68,
    "text": "Para fabricar un soporte triangular, se requiere que la hipotenusa mida 50 cm y un ángulo agudo sea de 30°. ¿Cuánto mide el cateto opuesto a dicho ángulo?",
    "options": [
      "25 cm",
      "43.3 cm",
      "35 cm",
      "30 cm"
    ],
    "correctIndex": 0,
    "explanation": "Por definición trigonométrica sen(30°) = cateto opuesto / hipotenusa. Como sen(30°) = 0.5: Cateto opuesto = 50 cm × 0.5 = 25 cm.",
    "skill": "Trigonometría Técnica de Taller",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Trigonometría Aplicada",
    "subtopic": "Resolución de Estructuras"
  },
  {
    "id": "mat-tec-9",
    "sectionId": 1,
    "number": 69,
    "text": "Un sistema hidráulico genera una presión de 150 bar (150 × 10⁵ N/m²) en un pistón de 0.02 m² de área. ¿Qué fuerza en Newtons ejerce el pistón?",
    "options": [
      "300,000 N",
      "75,000 N",
      "30,000 N",
      "3,000 N"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula de presión: P = F / A => F = P × A = (150 × 10⁵ N/m²) × 0.02 m² = 300,000 N (300 kN).",
    "skill": "Cálculo Hidráulico",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Oleohidráulica",
    "subtopic": "Fuerza Hidráulica"
  },
  {
    "id": "mat-tec-10",
    "sectionId": 1,
    "number": 70,
    "text": "Un engranaje recto con 40 dientes tiene un módulo m = 2.5 mm. ¿Cuál es su diámetro primitivo Dp?",
    "options": [
      "100 mm",
      "95 mm",
      "105 mm",
      "16 mm"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula de cinemática de engranajes: Diámetro primitivo Dp = m × Z = 2.5 mm × 40 = 100 mm.",
    "skill": "Diseño de Elementos Mecánicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Engranajes"
  },
  {
    "id": "mat-tec-11",
    "sectionId": 1,
    "number": 71,
    "text": "Al convertir una presión manométrica de 45 PSI (libras por pulgada cuadrada) al sistema internacional en bares (1 bar ≈ 14.504 PSI), ¿cuál es el valor aproximado?",
    "options": [
      "3.10 bar",
      "4.50 bar",
      "2.25 bar",
      "6.52 bar"
    ],
    "correctIndex": 0,
    "explanation": "45 PSI / 14.504 PSI/bar ≈ 3.102 bar.",
    "skill": "Conversión de Unidades Técnicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Metrología",
    "subtopic": "Presión"
  },
  {
    "id": "mat-tec-12",
    "sectionId": 1,
    "number": 72,
    "text": "Un circuito de control automatizado emite un pulso cada 125 milisegundos. ¿Cuál es la frecuencia de pulsos en Hertz (Hz)?",
    "options": [
      "8 Hz",
      "12.5 Hz",
      "80 Hz",
      "0.008 Hz"
    ],
    "correctIndex": 0,
    "explanation": "Periodo T = 125 ms = 0.125 s. Frecuencia f = 1 / T = 1 / 0.125 s = 8 Hz.",
    "skill": "Señales y Frecuencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización",
    "subtopic": "Frecuencia y Periodo"
  },
  {
    "id": "mat-tec-13",
    "sectionId": 1,
    "number": 73,
    "text": "Para mezclar refrigerante concentrado con agua al 40% de concentración en un sistema de 15 litros, ¿cuántos litros de refrigerante puro se necesitan?",
    "options": [
      "6 litros",
      "4 litros",
      "9 litros",
      "7.5 litros"
    ],
    "correctIndex": 0,
    "explanation": "Volumen puro = 15 L × 0.40 = 6 litros de refrigerante y 9 litros de agua desmineralizada.",
    "skill": "Dosificación Técnica de Fluidos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Fluidos y Mantenimiento",
    "subtopic": "Concentración de Mezclas"
  },
  {
    "id": "mat-tec-14",
    "sectionId": 1,
    "number": 74,
    "text": "Una tubería de acero experimenta una dilatación térmica lineal dada por ΔL = α · L₀ · ΔT. Si L₀ = 20 m, α = 1.2 × 10⁻⁵ °C⁻¹ y la temperatura aumenta 50 °C, ¿cuál es la elongación ΔL en milímetros?",
    "options": [
      "12 mm",
      "1.2 mm",
      "24 mm",
      "6 mm"
    ],
    "correctIndex": 0,
    "explanation": "ΔL = (1.2 × 10⁻⁵) · (20 m) · (50 °C) = 1.2 × 10⁻⁵ · 1000 = 0.012 m = 12 mm.",
    "skill": "Cálculo de Dilatación Térmica",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Tuberías y Calderería",
    "subtopic": "Dilatación de Materiales"
  },
  {
    "id": "mat-tec-15",
    "sectionId": 1,
    "number": 75,
    "text": "Un cable de acero de 10 mm de diámetro soporta una carga de 15,700 N. ¿Cuál es el esfuerzo de tracción σ en N/mm² (MPa)? (Área de sección ≈ 78.54 mm²).",
    "options": [
      "200 MPa",
      "157 MPa",
      "100 MPa",
      "314 MPa"
    ],
    "correctIndex": 0,
    "explanation": "Esfuerzo σ = Fuerza / Área = 15,700 N / 78.54 mm² ≈ 199.9 MPa ≈ 200 MPa.",
    "skill": "Resistencia de Materiales",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Materiales",
    "subtopic": "Tensión Mecánica"
  },
  {
    "id": "mat-tec-16",
    "sectionId": 1,
    "number": 76,
    "text": "Una prensa hidráulica tiene un émbolo menor de 5 cm² de área y un émbolo mayor de 250 cm². Si se aplica una fuerza de 200 N en el émbolo menor, ¿qué fuerza se genera en el émbolo mayor?",
    "options": [
      "10,000 N",
      "5,000 N",
      "2,500 N",
      "1,000 N"
    ],
    "correctIndex": 0,
    "explanation": "Por el Principio de Pascal: F₂ / A₂ = F₁ / A₁ => F₂ = F₁ × (A₂ / A₁) = 200 N × (250 / 5) = 200 × 50 = 10,000 N (10 kN).",
    "skill": "Transmisión Hidráulica de Fuerza",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Hidráulica",
    "subtopic": "Prensa Hidráulica"
  },
  {
    "id": "mat-tec-17",
    "sectionId": 1,
    "number": 77,
    "text": "En un proceso de fresado CNC, la velocidad de corte Vc es de 120 m/min para una fresa de 40 mm de diámetro. ¿A qué velocidad de rotación N (RPM) debe configurarse el husillo? (Fórmula: N = (1000 · Vc) / (π · D)).",
    "options": [
      "955 RPM",
      "1200 RPM",
      "600 RPM",
      "1500 RPM"
    ],
    "correctIndex": 0,
    "explanation": "N = (1000 × 120) / (3.1416 × 40) = 120,000 / 125.66 = 954.9 RPM ≈ 955 RPM.",
    "skill": "Mecanizado CNC",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Manufactura Mecánica",
    "subtopic": "Parámetros de Corte"
  },
  {
    "id": "mat-tec-18",
    "sectionId": 1,
    "number": 78,
    "text": "Un banco de condensadores trifásico debe suministrar 15 kVAR para corregir el factor de potencia. Si cada paso individual aporta 2.5 kVAR, ¿cuántos pasos se requieren encender?",
    "options": [
      "6 pasos",
      "5 pasos",
      "8 pasos",
      "4 pasos"
    ],
    "correctIndex": 0,
    "explanation": "15 kVAR / 2.5 kVAR por paso = 6 pasos exactamente.",
    "skill": "Compensación de Energía Reactiva",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Instalaciones Eléctricas Industriales",
    "subtopic": "Factor de Potencia"
  },
  {
    "id": "mat-tec-19",
    "sectionId": 1,
    "number": 79,
    "text": "Una cinta transportadora avanza a 0.8 m/s y traslada 48 paquetes por minuto. ¿Cuál es la distancia media de separación entre los centros de cada paquete consecutivo?",
    "options": [
      "1.0 metro",
      "0.6 metros",
      "1.2 metros",
      "1.6 metros"
    ],
    "correctIndex": 0,
    "explanation": "Distancia recorrida en un minuto (60 s) = 0.8 m/s × 60 s = 48 metros. Con 48 paquetes distribuidos en 48 metros: 48 m / 48 paquetes = 1.0 metro entre centros.",
    "skill": "Cinemática de Transporte Industrial",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Automatización y Logística",
    "subtopic": "Cintas Transportadoras"
  },
  {
    "id": "mat-tec-20",
    "sectionId": 1,
    "number": 80,
    "text": "Un reductor de velocidad tiene un rendimiento mecánico del 92%. Si el motor entrega un torque de entrada de 50 N·m y la relación de reducción es de 10:1, ¿cuál es el torque real en el eje de salida?",
    "options": [
      "460 N·m",
      "500 N·m",
      "400 N·m",
      "540 N·m"
    ],
    "correctIndex": 0,
    "explanation": "Torque teórico = Torque_entrada × relación = 50 N·m × 10 = 500 N·m. Considerando el 92% de rendimiento: 500 N·m × 0.92 = 460 N·m.",
    "skill": "Torque y Rendimiento en Reductores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Transmisión de Potencia",
    "subtopic": "Cajas Reductoras"
  },
  {
    "id": "mat-tec-21",
    "sectionId": 1,
    "number": 21,
    "text": "En un plano de mecanizado, un eje tiene la cota Ø40 h7 con tolerancia (-0.025, 0). ¿Cuál es la medida mínima admisible?",
    "options": [
      "39.975 mm",
      "40.025 mm",
      "39.950 mm",
      "40.000 mm"
    ],
    "correctIndex": 0,
    "explanation": "Medida máxima = 40.000 mm. Medida mínima = 40.000 - 0.025 = 39.975 mm.",
    "skill": "Tolerancias dimensionales ISO",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Metrología",
    "subtopic": "Ajustes de precisión"
  },
  {
    "id": "mat-tec-22",
    "sectionId": 1,
    "number": 22,
    "text": "Un agujero mecanizado mide Ø50 H7 (+0.030, 0) y el eje que se acopla mide Ø50 f7 (-0.025, -0.050). ¿Qué tipo de ajuste se produce?",
    "options": [
      "Ajuste con juego (móvil)",
      "Ajuste con apriete (fijo)",
      "Ajuste indeterminado",
      "Ajuste forzado"
    ],
    "correctIndex": 0,
    "explanation": "El agujero siempre es mayor o igual a 50.000 mm y el eje siempre es menor a 50.000 mm, por lo que siempre habrá juego positivo garantizado.",
    "skill": "Sistemas de ajustes mecánicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Industrial",
    "subtopic": "Ajustes ISO"
  },
  {
    "id": "mat-tec-23",
    "sectionId": 1,
    "number": 23,
    "text": "En un micrómetro en milímetros con paso de rosca de 0.5 mm y tambor graduado en 50 divisiones, ¿cuál es la apreciación del instrumento?",
    "options": [
      "0.01 mm",
      "0.05 mm",
      "0.02 mm",
      "0.1 mm"
    ],
    "correctIndex": 0,
    "explanation": "Apreciación = paso del tornillo / divisiones del tambor = 0.5 mm / 50 = 0.01 mm.",
    "skill": "Apreciación de instrumentos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Metrología",
    "subtopic": "Micrómetro"
  },
  {
    "id": "mat-tec-24",
    "sectionId": 1,
    "number": 24,
    "text": "Un calibrador pie de rey tiene un nonio de 20 divisiones que abarca 19 mm de la regla principal. ¿Cuál es su apreciación de lectura?",
    "options": [
      "0.05 mm",
      "0.02 mm",
      "0.10 mm",
      "0.01 mm"
    ],
    "correctIndex": 0,
    "explanation": "Apreciación = 1 mm / 20 divisiones = 0.05 mm.",
    "skill": "Lectura con nonio",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Metrología",
    "subtopic": "Pie de rey"
  },
  {
    "id": "mat-tec-25",
    "sectionId": 1,
    "number": 25,
    "text": "Al medir una pieza con un micrómetro centesimal, la regla principal marca 14.5 mm y el tambor coincide en la línea 32. ¿Cuál es la lectura?",
    "options": [
      "14.82 mm",
      "14.32 mm",
      "14.532 mm",
      "15.12 mm"
    ],
    "correctIndex": 0,
    "explanation": "Lectura = 14.5 mm + (32 × 0.01 mm) = 14.5 mm + 0.32 mm = 14.82 mm.",
    "skill": "Medición de precisión",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Metrología",
    "subtopic": "Lectura micrométrica"
  },
  {
    "id": "mat-tec-26",
    "sectionId": 1,
    "number": 26,
    "text": "Calcula la tolerancia total de una cota indicada como 75 ± 0.15 mm.",
    "options": [
      "0.30 mm",
      "0.15 mm",
      "75.30 mm",
      "0.075 mm"
    ],
    "correctIndex": 0,
    "explanation": "Tolerancia = Límite superior - Límite inferior = 75.15 - 74.85 = 0.30 mm.",
    "skill": "Campo de tolerancia",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Metrología",
    "subtopic": "Tolerancias bilaterales"
  },
  {
    "id": "mat-tec-27",
    "sectionId": 1,
    "number": 27,
    "text": "En un ajuste por interferencia (apriete), el diámetro del eje sin montar es de 30.040 mm y el del agujero es de 30.015 mm. ¿Cuánto es el apriete?",
    "options": [
      "0.025 mm (25 μm)",
      "0.055 mm",
      "0.015 mm",
      "0.040 mm"
    ],
    "correctIndex": 0,
    "explanation": "Apriete = Diámetro del eje - Diámetro del agujero = 30.040 - 30.015 = 0.025 mm (25 micrómetros).",
    "skill": "Cálculo de interferencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Ajuste fijo"
  },
  {
    "id": "mat-tec-28",
    "sectionId": 1,
    "number": 28,
    "text": "Se desea maquinar una pieza cuadrada de 100 mm por lado con una contracción térmica del 1.5%. ¿Qué dimensión debe tener el molde de fundición?",
    "options": [
      "101.52 mm",
      "100.00 mm",
      "98.50 mm",
      "103.00 mm"
    ],
    "correctIndex": 0,
    "explanation": "Dimensión molde = 100 / (1 - 0.015) = 100 / 0.985 ≈ 101.52 mm (o 100 × 1.015 = 101.5 mm).",
    "skill": "Contracción en fundición",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Manufactura",
    "subtopic": "Tolerancias térmicas"
  },
  {
    "id": "mat-tec-29",
    "sectionId": 1,
    "number": 29,
    "text": "¿Cuál es la rugosidad media aritmética (Ra) si la suma de las áreas absolutas del perfil sobre la longitud de muestreo L es de 3.2 μm·mm para L = 0.8 mm?",
    "options": [
      "4.0 μm",
      "2.56 μm",
      "3.2 μm",
      "0.25 μm"
    ],
    "correctIndex": 0,
    "explanation": "Ra = (1/L) ∫|y|dx = 3.2 μm·mm / 0.8 mm = 4.0 μm.",
    "skill": "Acabado superficial y rugosidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Metrología",
    "subtopic": "Parámetro Ra"
  },
  {
    "id": "mat-tec-30",
    "sectionId": 1,
    "number": 30,
    "text": "En un plano de soldadura, un cordón en ángulo tiene una garganta eficaz de a = 5 mm. ¿Cuál es el cateto de la soldadura (z = a × √2)?",
    "options": [
      "7.07 mm",
      "5.00 mm",
      "10.00 mm",
      "8.50 mm"
    ],
    "correctIndex": 0,
    "explanation": "z = a × √2 = 5 mm × 1.4142 ≈ 7.07 mm.",
    "skill": "Cálculo de uniones soldadas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Construcción Metálica",
    "subtopic": "Cordones de soldadura"
  },
  {
    "id": "mat-tec-31",
    "sectionId": 1,
    "number": 31,
    "text": "Una fuerza de 500 N se aplica con un ángulo de 30° respecto a la horizontal. ¿Cuál es su componente horizontal Fx? (cos 30° ≈ 0.866)",
    "options": [
      "433 N",
      "250 N",
      "500 N",
      "350 N"
    ],
    "correctIndex": 0,
    "explanation": "Fx = F × cos(30°) = 500 N × 0.8660 = 433 N.",
    "skill": "Descomposición vectorial",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Estática Técnica",
    "subtopic": "Fuerzas coplanares"
  },
  {
    "id": "mat-tec-32",
    "sectionId": 1,
    "number": 32,
    "text": "Calcula la componente vertical Fy de la misma fuerza de 500 N inclinada a 30° (sen 30° = 0.500).",
    "options": [
      "250 N",
      "433 N",
      "500 N",
      "150 N"
    ],
    "correctIndex": 0,
    "explanation": "Fy = F × sen(30°) = 500 N × 0.500 = 250 N.",
    "skill": "Componentes rectangulares",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Estática Técnica",
    "subtopic": "Fuerza vertical"
  },
  {
    "id": "mat-tec-33",
    "sectionId": 1,
    "number": 33,
    "text": "Un operario aprieta un perno aplicando una fuerza perpendicular de 150 N en el extremo de una llave de 0.4 metros de longitud. ¿Qué torque aplica?",
    "options": [
      "60 N·m",
      "375 N·m",
      "150 N·m",
      "75 N·m"
    ],
    "correctIndex": 0,
    "explanation": "Torque τ = Fuerza × distancia = 150 N × 0.4 m = 60 N·m.",
    "skill": "Momento de torsión (torque)",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Aplicada",
    "subtopic": "Palancas y apriete"
  },
  {
    "id": "mat-tec-34",
    "sectionId": 1,
    "number": 34,
    "text": "Dos fuerzas concurrentes y perpendiculares entre sí miden 300 N y 400 N. ¿Cuál es la magnitud de la fuerza resultante?",
    "options": [
      "500 N",
      "700 N",
      "100 N",
      "450 N"
    ],
    "correctIndex": 0,
    "explanation": "R = √(300² + 400²) = √(90,000 + 160,000) = √250,000 = 500 N.",
    "skill": "Resultante de fuerzas perpendiculares",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Estática",
    "subtopic": "Vectores"
  },
  {
    "id": "mat-tec-35",
    "sectionId": 1,
    "number": 35,
    "text": "Una viga simplemente apoyada de 6 m de longitud soporta una carga puntual de 1,200 N en su centro (a 3 m de cada apoyo). ¿Cuál es la reacción en cada apoyo?",
    "options": [
      "600 N en cada apoyo",
      "1,200 N en cada apoyo",
      "400 N en cada apoyo",
      "800 N en cada apoyo"
    ],
    "correctIndex": 0,
    "explanation": "Por simetría de carga estática: R_A = R_B = 1,200 N / 2 = 600 N.",
    "skill": "Equilibrio estático de vigas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Resistencia de Materiales",
    "subtopic": "Reacciones de apoyo"
  },
  {
    "id": "mat-tec-36",
    "sectionId": 1,
    "number": 36,
    "text": "¿Qué pendiente porcentual tiene una rampa de acceso vehicular que asciende 1.5 metros en una distancia horizontal de 30 metros?",
    "options": [
      "5%",
      "15%",
      "2%",
      "4.5%"
    ],
    "correctIndex": 0,
    "explanation": "Pendiente = (desnivel / distancia horizontal) × 100 = (1.5 / 30) × 100 = 0.05 × 100 = 5%.",
    "skill": "Pendiente técnica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Topografía y Obra Civil",
    "subtopic": "Rampas"
  },
  {
    "id": "mat-tec-37",
    "sectionId": 1,
    "number": 37,
    "text": "Para elevar una carga de 2,000 N con un polipasto de 4 poleas móviles (ventaja mecánica VM = 4), ¿qué fuerza teórica se debe aplicar?",
    "options": [
      "500 N",
      "1,000 N",
      "250 N",
      "2,000 N"
    ],
    "correctIndex": 0,
    "explanation": "Fuerza = Carga / VM = 2,000 N / 4 = 500 N.",
    "skill": "Máquinas simples",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Polipastos"
  },
  {
    "id": "mat-tec-38",
    "sectionId": 1,
    "number": 38,
    "text": "Un cable de acero de 10 mm² de sección soporta una carga de tracción de 2,500 N. ¿Cuál es el esfuerzo normal de tracción (σ = F/A)?",
    "options": [
      "250 MPa (N/mm²)",
      "25 MPa",
      "2,500 MPa",
      "250 kPa"
    ],
    "correctIndex": 0,
    "explanation": "σ = F / A = 2,500 N / 10 mm² = 250 N/mm² = 250 MPa.",
    "skill": "Esfuerzo mecánico de tracción",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Resistencia de Materiales",
    "subtopic": "Tensión normal"
  },
  {
    "id": "mat-tec-39",
    "sectionId": 1,
    "number": 39,
    "text": "Si el límite de fluencia de un acero estructural es de 360 MPa y se adopta un coeficiente de seguridad n = 2, ¿cuál es el esfuerzo admisible de diseño?",
    "options": [
      "180 MPa",
      "720 MPa",
      "360 MPa",
      "120 MPa"
    ],
    "correctIndex": 0,
    "explanation": "σ_adm = σ_fluencia / n = 360 MPa / 2 = 180 MPa.",
    "skill": "Coeficiente de seguridad",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Diseño Mecánico",
    "subtopic": "Cálculo estructural"
  },
  {
    "id": "mat-tec-40",
    "sectionId": 1,
    "number": 40,
    "text": "Un pistón neumático tiene un émbolo de 10 cm² de área. Si la presión de aire comprimido es de 6 bar (0.6 N/mm² = 60 N/cm²), ¿qué fuerza empuja?",
    "options": [
      "600 N",
      "60 N",
      "6,000 N",
      "300 N"
    ],
    "correctIndex": 0,
    "explanation": "F = Presión × Área = 60 N/cm² × 10 cm² = 600 N.",
    "skill": "Fuerza en actuadores neumáticos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Neumática Industrial",
    "subtopic": "Cilindros de simple efecto"
  },
  {
    "id": "mat-tec-41",
    "sectionId": 1,
    "number": 41,
    "text": "Un motor gira a 1,750 RPM con una polea de 100 mm de diámetro y acciona un compresor con polea de 250 mm. ¿A qué RPM gira el compresor?",
    "options": [
      "700 RPM",
      "4,375 RPM",
      "875 RPM",
      "1,000 RPM"
    ],
    "correctIndex": 0,
    "explanation": "Relación: N₁ × D₁ = N₂ × D₂ ⇒ 1,750 × 100 = N₂ × 250 ⇒ N₂ = 175,000 / 250 = 700 RPM.",
    "skill": "Transmisión por poleas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Relación de transmisión"
  },
  {
    "id": "mat-tec-42",
    "sectionId": 1,
    "number": 42,
    "text": "¿Cuál es la relación de transmisión 'i' de un reductor si el engranaje motriz tiene 18 dientes y el conducido tiene 72 dientes (i = Z₂ / Z₁)?",
    "options": [
      "4 : 1 (o 4)",
      "0.25",
      "2 : 1",
      "3 : 1"
    ],
    "correctIndex": 0,
    "explanation": "i = Z₂ / Z₁ = 72 / 18 = 4 (reduce la velocidad 4 veces y multiplica el torque por 4).",
    "skill": "Reductores mecánicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Trenes de engranajes"
  },
  {
    "id": "mat-tec-43",
    "sectionId": 1,
    "number": 43,
    "text": "Calcula la velocidad lineal de corte Vc en m/min al tornear un cilindro de diámetro D = 50 mm a N = 600 RPM. (Fórmula: Vc = (π·D·N)/1000).",
    "options": [
      "94.25 m/min",
      "47.12 m/min",
      "188.50 m/min",
      "30.00 m/min"
    ],
    "correctIndex": 0,
    "explanation": "Vc = (3.1416 × 50 × 600) / 1000 = 94,248 / 1000 ≈ 94.25 m/min.",
    "skill": "Mecanizado por viruta",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Manufactura",
    "subtopic": "Velocidad de corte"
  },
  {
    "id": "mat-tec-44",
    "sectionId": 1,
    "number": 44,
    "text": "Calcula la velocidad angular ω en rad/s de un eje que rota a 3,000 RPM. (Fórmula: ω = 2π·N / 60).",
    "options": [
      "314.16 rad/s",
      "157.08 rad/s",
      "628.32 rad/s",
      "50.00 rad/s"
    ],
    "correctIndex": 0,
    "explanation": "ω = (2 × 3.1416 × 3,000) / 60 = 18,849.6 / 60 ≈ 314.16 rad/s.",
    "skill": "Cinemática rotacional",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Física Técnica",
    "subtopic": "Velocidad angular"
  },
  {
    "id": "mat-tec-45",
    "sectionId": 1,
    "number": 45,
    "text": "Si un motor entrega una potencia mecánica de 7.5 kW a 1,500 RPM (ω = 157.08 rad/s), ¿cuál es su torque útil (P = τ·ω)?",
    "options": [
      "47.75 N·m",
      "23.87 N·m",
      "95.50 N·m",
      "112.5 N·m"
    ],
    "correctIndex": 0,
    "explanation": "τ = P / ω = 7,500 W / 157.08 rad/s ≈ 47.75 N·m.",
    "skill": "Potencia y par motor",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Máquinas Eléctricas",
    "subtopic": "Torque electromecánico"
  },
  {
    "id": "mat-tec-46",
    "sectionId": 1,
    "number": 46,
    "text": "Un módulo de engranaje es m = 2.5 mm y la rueda tiene 36 dientes. ¿Cuál es su diámetro primitivo (Dp = m × Z)?",
    "options": [
      "90 mm",
      "72 mm",
      "144 mm",
      "92.5 mm"
    ],
    "correctIndex": 0,
    "explanation": "Dp = m × Z = 2.5 mm × 36 = 90 mm.",
    "skill": "Geometría de engranajes",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Diseño Mecánico",
    "subtopic": "Diámetro primitivo"
  },
  {
    "id": "mat-tec-47",
    "sectionId": 1,
    "number": 47,
    "text": "En un torno CNC, el avance es f = 0.2 mm/rev y el cabezal gira a 1,000 RPM. ¿Cuál es la velocidad de avance de la herramienta en mm/min?",
    "options": [
      "200 mm/min",
      "2,000 mm/min",
      "100 mm/min",
      "50 mm/min"
    ],
    "correctIndex": 0,
    "explanation": "Vf = f × N = 0.2 mm/rev × 1,000 rev/min = 200 mm/min.",
    "skill": "Parámetros de mecanizado CNC",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Control Numérico",
    "subtopic": "Avance de corte"
  },
  {
    "id": "mat-tec-48",
    "sectionId": 1,
    "number": 48,
    "text": "Una bomba hidráulica entrega un caudal constante de 30 litros por minuto (L/min) a una presión de 100 bar. Calcula la potencia hidráulica teórica en kW.",
    "options": [
      "5.0 kW",
      "3.0 kW",
      "10.0 kW",
      "1.5 kW"
    ],
    "correctIndex": 0,
    "explanation": "P(kW) = (Caudal en L/min × Presión en bar) / 600 = (30 × 100) / 600 = 3,000 / 600 = 5.0 kW.",
    "skill": "Potencia fluídica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Oleohidráulica",
    "subtopic": "Bombas hidráulicas"
  },
  {
    "id": "mat-tec-49",
    "sectionId": 1,
    "number": 49,
    "text": "Un motor de combustión tiene una cilindrada unitaria de 500 cm³ y 4 cilindros. ¿Cuál es su cilindrada total en litros?",
    "options": [
      "2.0 litros",
      "1.5 litros",
      "2.5 litros",
      "1.8 litros"
    ],
    "correctIndex": 0,
    "explanation": "Cilindrada total = 4 × 500 cm³ = 2,000 cm³ = 2.0 litros.",
    "skill": "Motores de combustión interna",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Automotriz",
    "subtopic": "Cilindrada"
  },
  {
    "id": "mat-tec-50",
    "sectionId": 1,
    "number": 50,
    "text": "Si un motor térmico consume 100 kJ de calor y produce 35 kJ de trabajo mecánico neto, ¿cuál es su rendimiento térmico η?",
    "options": [
      "35%",
      "65%",
      "3.5%",
      "28.5%"
    ],
    "correctIndex": 0,
    "explanation": "η = (Trabajo útil / Calor suministrado) × 100 = (35 kJ / 100 kJ) × 100 = 35%.",
    "skill": "Termodinámica aplicada",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Termotecnia",
    "subtopic": "Eficiencia térmica"
  },
  {
    "id": "mat-tec-51",
    "sectionId": 1,
    "number": 51,
    "text": "En un circuito serie con tres resistencias de 10 Ω, 15 Ω y 25 Ω alimentado a 100 V, ¿cuál es la resistencia total equivalente?",
    "options": [
      "50 Ω",
      "25 Ω",
      "150 Ω",
      "4.16 Ω"
    ],
    "correctIndex": 0,
    "explanation": "En serie se suman directamente: R_eq = 10 + 15 + 25 = 50 Ω.",
    "skill": "Circuitos resistivos en serie",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electricidad",
    "subtopic": "Resistencia equivalente"
  },
  {
    "id": "mat-tec-52",
    "sectionId": 1,
    "number": 52,
    "text": "Con la resistencia total de 50 Ω y 100 V de alimentación, ¿cuál es la corriente total del circuito?",
    "options": [
      "2 A",
      "5 A",
      "0.5 A",
      "50 A"
    ],
    "correctIndex": 0,
    "explanation": "I = V / R_eq = 100 V / 50 Ω = 2 Amperios.",
    "skill": "Ley de Ohm en circuitos serie",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electricidad",
    "subtopic": "Corriente eléctrica"
  },
  {
    "id": "mat-tec-53",
    "sectionId": 1,
    "number": 53,
    "text": "¿Cuál es la resistencia equivalente de dos resistencias de 20 Ω y 30 Ω conectadas en paralelo?",
    "options": [
      "12 Ω",
      "50 Ω",
      "25 Ω",
      "10 Ω"
    ],
    "correctIndex": 0,
    "explanation": "R_eq = (R₁ × R₂) / (R₁ + R₂) = (20 × 30) / (20 + 30) = 600 / 50 = 12 Ω.",
    "skill": "Resistencias en paralelo",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electricidad",
    "subtopic": "Asociación en paralelo"
  },
  {
    "id": "mat-tec-54",
    "sectionId": 1,
    "number": 54,
    "text": "Un motor eléctrico monofásico consume 10 A a una tensión de 220 V con un factor de potencia cos φ = 0.85. ¿Cuál es la potencia activa P en vatios?",
    "options": [
      "1,870 W",
      "2,200 W",
      "2,588 W",
      "1,500 W"
    ],
    "correctIndex": 0,
    "explanation": "P = V × I × cos φ = 220 V × 10 A × 0.85 = 1,870 Vatios.",
    "skill": "Potencia en corriente alterna",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia",
    "subtopic": "Potencia activa"
  },
  {
    "id": "mat-tec-55",
    "sectionId": 1,
    "number": 55,
    "text": "Calcula la reactancia inductiva XL de una bobina de autoinducción L = 0.1 H en una red de corriente alterna de frecuencia f = 60 Hz.",
    "options": [
      "37.7 Ω",
      "6.0 Ω",
      "377 Ω",
      "18.8 Ω"
    ],
    "correctIndex": 0,
    "explanation": "XL = 2 × π × f × L = 2 × 3.1416 × 60 × 0.1 ≈ 37.7 Ω.",
    "skill": "Circuitos de corriente alterna",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia",
    "subtopic": "Reactancia inductiva"
  },
  {
    "id": "mat-tec-56",
    "sectionId": 1,
    "number": 56,
    "text": "Un transformador monofásico ideal tiene 440 espiras en el primario y 110 espiras en el secundario. Si el voltaje primario es 220 V, ¿cuál es el secundario?",
    "options": [
      "55 V",
      "110 V",
      "880 V",
      "44 V"
    ],
    "correctIndex": 0,
    "explanation": "V₂ / V₁ = N₂ / N₁ ⇒ V₂ = 220 × (110 / 440) = 220 × 0.25 = 55 V.",
    "skill": "Transformadores eléctricos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia",
    "subtopic": "Relación de transformación"
  },
  {
    "id": "mat-tec-57",
    "sectionId": 1,
    "number": 57,
    "text": "Calcula la energía eléctrica consumida en kilovatios-hora (kWh) por un calentador de 2,000 W que funciona 4 horas diarias durante 30 días.",
    "options": [
      "240 kWh",
      "60 kWh",
      "120 kWh",
      "8 kWh"
    ],
    "correctIndex": 0,
    "explanation": "Potencia = 2 kW. Horas totales = 4 × 30 = 120 h. Energía = 2 kW × 120 h = 240 kWh.",
    "skill": "Consumo energético",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Instalaciones Eléctricas",
    "subtopic": "Medición de kWh"
  },
  {
    "id": "mat-tec-58",
    "sectionId": 1,
    "number": 58,
    "text": "En un circuito con capacitor de C = 100 μF conectado a f = 50 Hz, ¿cuál es su reactancia capacitiva Xc = 1 / (2π f C)?",
    "options": [
      "31.83 Ω",
      "62.8 Ω",
      "15.91 Ω",
      "100 Ω"
    ],
    "correctIndex": 0,
    "explanation": "Xc = 1 / (2 × 3.1416 × 50 × 100×10⁻⁶) = 1 / 0.031416 ≈ 31.83 Ω.",
    "skill": "Reactancia capacitiva",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia",
    "subtopic": "Condensadores"
  },
  {
    "id": "mat-tec-59",
    "sectionId": 1,
    "number": 59,
    "text": "¿Cuál es la sección mínima de un conductor de cobre (resistividad ρ = 0.0175 Ω·mm²/m) de 40 m para que su resistencia no supere 0.35 Ω?",
    "options": [
      "2.0 mm²",
      "1.5 mm²",
      "2.5 mm²",
      "4.0 mm²"
    ],
    "correctIndex": 0,
    "explanation": "R = ρ · L / S ⇒ S = ρ · L / R = (0.0175 × 40) / 0.35 = 0.70 / 0.35 = 2.0 mm².",
    "skill": "Cálculo de conductores eléctricos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Instalaciones Eléctricas",
    "subtopic": "Resistividad"
  },
  {
    "id": "mat-tec-60",
    "sectionId": 1,
    "number": 60,
    "text": "En un motor trifásico en conexión estrella alimentado a 400 V de línea, ¿cuál es la tensión de fase simple (V_fase = V_línea / √3)?",
    "options": [
      "230 V",
      "400 V",
      "200 V",
      "690 V"
    ],
    "correctIndex": 0,
    "explanation": "V_fase = 400 V / 1.732 ≈ 230.9 V ≈ 230 V.",
    "skill": "Sistemas trifásicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia",
    "subtopic": "Conexión estrella"
  },
  {
    "id": "mat-tec-61",
    "sectionId": 1,
    "number": 61,
    "text": "Calcula la masa en kg de una chapa de acero de 2 m de largo, 1 m de ancho y 5 mm de espesor (densidad del acero ρ = 7,850 kg/m³).",
    "options": [
      "78.5 kg",
      "157.0 kg",
      "39.25 kg",
      "785 kg"
    ],
    "correctIndex": 0,
    "explanation": "Volumen = 2 m × 1 m × 0.005 m = 0.01 m³. Masa = 0.01 m³ × 7,850 kg/m³ = 78.5 kg.",
    "skill": "Cálculo de peso de materiales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Construcción Metálica",
    "subtopic": "Chapas y perfiles"
  },
  {
    "id": "mat-tec-62",
    "sectionId": 1,
    "number": 62,
    "text": "Un tanque esférico de gas tiene un radio de 1.5 metros. ¿Cuál es su volumen interior aproximado? (Fórmula: V = (4/3)·π·r³).",
    "options": [
      "14.14 m³",
      "28.27 m³",
      "9.42 m³",
      "7.07 m³"
    ],
    "correctIndex": 0,
    "explanation": "V = (4/3) × 3.1416 × (1.5)³ = (4/3) × 3.1416 × 3.375 = 14.137 m³ ≈ 14.14 m³.",
    "skill": "Volumen de esferas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Calderería y Recipientes",
    "subtopic": "Tanques a presión"
  },
  {
    "id": "mat-tec-63",
    "sectionId": 1,
    "number": 63,
    "text": "Una tolva tiene forma de pirámide cuadrangular invertida de base 2 m × 2 m y altura de 3 m. ¿Cuál es su volumen de capacidad (V = (A_base · h)/3)?",
    "options": [
      "4.0 m³",
      "12.0 m³",
      "6.0 m³",
      "8.0 m³"
    ],
    "correctIndex": 0,
    "explanation": "Área base = 2 × 2 = 4 m². Volumen = (4 m² × 3 m) / 3 = 12 / 3 = 4.0 m³.",
    "skill": "Volumen de tolvas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Industrial",
    "subtopic": "Silos y tolvas"
  },
  {
    "id": "mat-tec-64",
    "sectionId": 1,
    "number": 64,
    "text": "Un tubo cilíndrico de acero tiene un diámetro exterior de 60 mm y un espesor de pared de 5 mm. ¿Cuál es su diámetro interior?",
    "options": [
      "50 mm",
      "55 mm",
      "45 mm",
      "52 mm"
    ],
    "correctIndex": 0,
    "explanation": "El espesor resta dos veces al diámetro exterior: Di = De - 2 × espesor = 60 - 2(5) = 50 mm.",
    "skill": "Geometría de tuberías",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Tuberías Industriales",
    "subtopic": "Cálculo dimensional"
  },
  {
    "id": "mat-tec-65",
    "sectionId": 1,
    "number": 65,
    "text": "Calcula la sección transversal de paso de fluido en mm² de una tubería con diámetro interior de 20 mm (A = (π · d²)/4).",
    "options": [
      "314.16 mm²",
      "628.32 mm²",
      "1,256.6 mm²",
      "157.08 mm²"
    ],
    "correctIndex": 0,
    "explanation": "A = (3.1416 × 20²) / 4 = (3.1416 × 400) / 4 = 314.16 mm².",
    "skill": "Sección hidráulica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Fluidos",
    "subtopic": "Área de tubería"
  },
  {
    "id": "mat-tec-66",
    "sectionId": 1,
    "number": 66,
    "text": "Si un perfil IPN de acero tiene una masa lineal de 14.3 kg/m, ¿cuál es el peso de una viga de 6 metros de dicho perfil?",
    "options": [
      "85.8 kg",
      "71.5 kg",
      "100.1 kg",
      "95.0 kg"
    ],
    "correctIndex": 0,
    "explanation": "Masa = 14.3 kg/m × 6 m = 85.8 kg.",
    "skill": "Perfiles estructurales",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Estructuras Metálicas",
    "subtopic": "Tablas técnicas"
  },
  {
    "id": "mat-tec-67",
    "sectionId": 1,
    "number": 67,
    "text": "Un depósito cúbico de 1 metro de lado se llena con aceite industrial de densidad relativa 0.88 (ρ = 880 kg/m³). ¿Cuál es la masa del líquido?",
    "options": [
      "880 kg",
      "1,000 kg",
      "88 kg",
      "750 kg"
    ],
    "correctIndex": 0,
    "explanation": "Volumen = 1 m³. Masa = Densidad × Volumen = 880 kg/m³ × 1 m³ = 880 kg.",
    "skill": "Densidad y masa de fluidos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Fluidos Industriales",
    "subtopic": "Lubricantes"
  },
  {
    "id": "mat-tec-68",
    "sectionId": 1,
    "number": 68,
    "text": "¿Cuál es el área lateral de un tubo cilíndrico de radio r = 0.1 m y longitud L = 3 m que debe ser pintado por fuera? (A = 2π·r·L).",
    "options": [
      "1.88 m²",
      "0.94 m²",
      "3.77 m²",
      "2.50 m²"
    ],
    "correctIndex": 0,
    "explanation": "A = 2 × 3.1416 × 0.1 × 3 = 1.8849 m² ≈ 1.88 m².",
    "skill": "Área superficial cilíndrica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mantenimiento Industrial",
    "subtopic": "Pintura y protección"
  },
  {
    "id": "mat-tec-69",
    "sectionId": 1,
    "number": 69,
    "text": "Se requiere cortar 12 discos de chapa de 100 mm de diámetro. ¿Cuál es el área total neta de material de los discos en cm²?",
    "options": [
      "942.5 cm²",
      "785.4 cm²",
      "1,200 cm²",
      "628.3 cm²"
    ],
    "correctIndex": 0,
    "explanation": "Área de un disco = π · r² = 3.1416 × (5 cm)² = 78.54 cm². Para 12 discos: 12 × 78.54 = 942.48 cm² ≈ 942.5 cm².",
    "skill": "Cálculo de despiece",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Calderería",
    "subtopic": "Discos de chapa"
  },
  {
    "id": "mat-tec-70",
    "sectionId": 1,
    "number": 70,
    "text": "Calcula el volumen de un cono truncado de radio mayor R = 0.6 m, radio menor r = 0.4 m y altura h = 1 m (V = (π·h/3)·(R² + Rr + r²)).",
    "options": [
      "0.796 m³",
      "1.57 m³",
      "0.523 m³",
      "1.05 m³"
    ],
    "correctIndex": 0,
    "explanation": "R² + Rr + r² = 0.36 + 0.24 + 0.16 = 0.76. V = (3.1416 × 1 / 3) × 0.76 ≈ 1.0472 × 0.76 ≈ 0.796 m³.",
    "skill": "Volúmenes de cuerpos cónicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Calderería",
    "subtopic": "Conos truncados"
  },
  {
    "id": "mat-tec-71",
    "sectionId": 1,
    "number": 71,
    "text": "En una tabla técnica de vapor, a 150 °C la entalpía es 2,746 kJ/kg y a 160 °C es 2,758 kJ/kg. Por interpolación lineal, ¿cuál es a 155 °C?",
    "options": [
      "2,752 kJ/kg",
      "2,750 kJ/kg",
      "2,754 kJ/kg",
      "2,758 kJ/kg"
    ],
    "correctIndex": 0,
    "explanation": "Al ser exactamente el punto medio (155 °C): h = (2,746 + 2,758) / 2 = 2,752 kJ/kg.",
    "skill": "Interpolación lineal técnica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Termodinámica",
    "subtopic": "Tablas de vapor"
  },
  {
    "id": "mat-tec-72",
    "sectionId": 1,
    "number": 72,
    "text": "Por una tubería de 0.01 m² de sección fluye agua a una velocidad de 2 m/s. ¿Cuál es el caudal volumétrico Q en litros por segundo (1 m³ = 1000 L)?",
    "options": [
      "20 L/s",
      "2 L/s",
      "200 L/s",
      "10 L/s"
    ],
    "correctIndex": 0,
    "explanation": "Q = Área × velocidad = 0.01 m² × 2 m/s = 0.02 m³/s. En litros: 0.02 × 1,000 = 20 L/s.",
    "skill": "Ecuación de caudal",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Hidráulica",
    "subtopic": "Flujo volumétrico"
  },
  {
    "id": "mat-tec-73",
    "sectionId": 1,
    "number": 73,
    "text": "La ecuación de continuidad para un fluido incompresible establece que en una reducción de tubería:",
    "options": [
      "A₁ · v₁ = A₂ · v₂",
      "A₁ / v₁ = A₂ / v₂",
      "A₁ + v₁ = A₂ + v₂",
      "A₁ · v₂ = A₂ · v₁"
    ],
    "correctIndex": 0,
    "explanation": "El caudal que entra es igual al caudal que sale: Q₁ = Q₂ ⇒ A₁ · v₁ = A₂ · v₂.",
    "skill": "Ecuación de continuidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica de Fluidos",
    "subtopic": "Fluidos incompresibles"
  },
  {
    "id": "mat-tec-74",
    "sectionId": 1,
    "number": 74,
    "text": "Si una tubería de diámetro D₁ = 100 mm se reduce a D₂ = 50 mm, ¿por cuánto se multiplica la velocidad del fluido (v₂ / v₁)?",
    "options": [
      "Se multiplica por 4",
      "Se multiplica por 2",
      "Se divide entre 2",
      "Permanece igual"
    ],
    "correctIndex": 0,
    "explanation": "Como el área es proporcional al cuadrado del diámetro: A₁/A₂ = (100/50)² = 2² = 4. Por tanto, v₂ = 4 v₁.",
    "skill": "Efecto Venturi y velocidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Hidráulica",
    "subtopic": "Estrechamiento de conductos"
  },
  {
    "id": "mat-tec-75",
    "sectionId": 1,
    "number": 75,
    "text": "Calcula la presión hidrostática en pascales (Pa) en el fondo de una columna de agua de altura h = 5 m (densidad ρ = 1,000 kg/m³, g = 9.81 m/s²).",
    "options": [
      "49,050 Pa (49.05 kPa)",
      "5,000 Pa",
      "9,810 Pa",
      "50,000 Pa"
    ],
    "correctIndex": 0,
    "explanation": "P = ρ × g × h = 1,000 kg/m³ × 9.81 m/s² × 5 m = 49,050 Pa = 49.05 kPa.",
    "skill": "Presión hidrostática",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Hidráulica",
    "subtopic": "Principio fundamental"
  },
  {
    "id": "mat-tec-76",
    "sectionId": 1,
    "number": 76,
    "text": "Una carga de 800 kg se acelera verticalmente hacia arriba a 2 m/s². ¿Cuál es la tensión en el cable de la grúa? (g = 9.81 m/s²).",
    "options": [
      "9,448 N",
      "7,848 N",
      "1,600 N",
      "6,248 N"
    ],
    "correctIndex": 0,
    "explanation": "Segunda ley de Newton: T - mg = m·a ⇒ T = m(g + a) = 800(9.81 + 2) = 800(11.81) = 9,448 N.",
    "skill": "Dinámica de elevación",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Física Técnica",
    "subtopic": "Grúas y cables"
  },
  {
    "id": "mat-tec-77",
    "sectionId": 1,
    "number": 77,
    "text": "Un intercambiador de calor enfría un caudal de agua de masa m_dot = 0.5 kg/s desde 80 °C hasta 40 °C (Cp = 4.186 kJ/kg·K). ¿Qué calor transfiere?",
    "options": [
      "83.72 kW",
      "41.86 kW",
      "167.4 kW",
      "20.93 kW"
    ],
    "correctIndex": 0,
    "explanation": "Q_dot = m_dot × Cp × ΔT = 0.5 kg/s × 4.186 kJ/kg·K × (80 - 40) K = 0.5 × 4.186 × 40 = 83.72 kW.",
    "skill": "Transferencia de calor",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Termotecnia",
    "subtopic": "Intercambiadores térmicos"
  },
  {
    "id": "mat-tec-78",
    "sectionId": 1,
    "number": 78,
    "text": "Un sensor de temperatura PT100 tiene una resistencia de 100.0 Ω a 0 °C y un coeficiente α = 0.00385 Ω/°C. ¿Cuál es su resistencia a 50 °C?",
    "options": [
      "119.25 Ω",
      "100.38 Ω",
      "138.5 Ω",
      "105.0 Ω"
    ],
    "correctIndex": 0,
    "explanation": "R = R₀ · (1 + α · ΔT) = 100 × (1 + 0.00385 × 50) = 100 × (1 + 0.1925) = 119.25 Ω.",
    "skill": "Sensores industriales RTD",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Instrumentación",
    "subtopic": "Termorresistencias"
  },
  {
    "id": "mat-tec-79",
    "sectionId": 1,
    "number": 79,
    "text": "En un ensayo de tracción, una probeta de longitud inicial L₀ = 100 mm se estira elásticamente hasta 100.2 mm. ¿Cuál es la deformación unitaria ε?",
    "options": [
      "0.002 (o 0.2%)",
      "0.2",
      "0.02",
      "0.0002"
    ],
    "correctIndex": 0,
    "explanation": "ε = ΔL / L₀ = (100.2 - 100) / 100 = 0.2 / 100 = 0.002.",
    "skill": "Deformación unitaria",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Ciencia de Materiales",
    "subtopic": "Ensayo de tracción"
  },
  {
    "id": "mat-tec-80",
    "sectionId": 1,
    "number": 80,
    "text": "Un vehículo de 1,200 kg frena de 20 m/s a 0 m/s en 4 segundos a desaceleración constante. ¿Cuál es la fuerza de frenado media requerida?",
    "options": [
      "6,000 N",
      "2,400 N",
      "4,800 N",
      "12,000 N"
    ],
    "correctIndex": 0,
    "explanation": "Desaceleración a = Δv / t = 20 / 4 = 5 m/s². Fuerza = m × a = 1,200 kg × 5 m/s² = 6,000 N.",
    "skill": "Fuerza de frenado",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Automotriz",
    "subtopic": "Dinámica de frenado"
  },
  {
    "id": "mat-tec-81",
    "sectionId": 1,
    "number": 81,
    "text": "En una rosca métrica M12 × 1.75, ¿cuál es el paso de rosca P?",
    "options": [
      "1.75 mm",
      "12 mm",
      "10.25 mm",
      "1.50 mm"
    ],
    "correctIndex": 0,
    "explanation": "En la designación métrica ISO, el primer número indica el diámetro nominal exterior (12 mm) y el segundo el paso de avance (1.75 mm).",
    "skill": "Roscas métricas ISO",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Normalización de roscas"
  },
  {
    "id": "mat-tec-82",
    "sectionId": 1,
    "number": 82,
    "text": "Para taladrar el agujero previo a roscar con un macho métrico M10 × 1.5, ¿cuál es el diámetro de broca recomendado (d = D - P)?",
    "options": [
      "8.5 mm",
      "10.0 mm",
      "9.0 mm",
      "7.5 mm"
    ],
    "correctIndex": 0,
    "explanation": "Diámetro de broca previo = Diámetro nominal - Paso = 10 mm - 1.5 mm = 8.5 mm.",
    "skill": "Mecanizado de roscas interiores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Taller Mecánico",
    "subtopic": "Taladrado para machos"
  },
  {
    "id": "mat-tec-83",
    "sectionId": 1,
    "number": 83,
    "text": "Un motor eléctrico trifásico conectado en delta (triángulo) consume una corriente de línea I_L = 17.32 A. ¿Cuál es la corriente de fase I_fase (I_fase = I_L / √3)?",
    "options": [
      "10.0 A",
      "17.32 A",
      "30.0 A",
      "8.66 A"
    ],
    "correctIndex": 0,
    "explanation": "En conexión delta: I_L = √3 × I_fase ⇒ I_fase = 17.32 / 1.732 = 10.0 A.",
    "skill": "Conexión delta trifásica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electrotecnia",
    "subtopic": "Corrientes de fase y línea"
  },
  {
    "id": "mat-tec-84",
    "sectionId": 1,
    "number": 84,
    "text": "Calcula la caída de tensión ΔV en una línea monofásica de cobre (ρ = 0.0175 Ω·mm²/m) de 50 m de longitud, sección 4 mm² y corriente de 16 A (ΔV = 2·I·L·ρ / S).",
    "options": [
      "7.0 V",
      "3.5 V",
      "14.0 V",
      "1.75 V"
    ],
    "correctIndex": 0,
    "explanation": "ΔV = (2 × 16 × 50 × 0.0175) / 4 = 28 / 4 = 7.0 Voltios.",
    "skill": "Caída de tensión en conductores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Instalaciones Eléctricas",
    "subtopic": "Dimensionamiento de cables"
  },
  {
    "id": "mat-tec-85",
    "sectionId": 1,
    "number": 85,
    "text": "¿Cuál es el porcentaje de caída de tensión si la tensión nominal es 230 V y la caída calculada es de 6.9 V?",
    "options": [
      "3.0%",
      "5.0%",
      "1.5%",
      "4.0%"
    ],
    "correctIndex": 0,
    "explanation": "%ΔV = (6.9 / 230) × 100 = 3.0%.",
    "skill": "Porcentaje de caída de tensión",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Instalaciones Eléctricas",
    "subtopic": "Límites normativos"
  },
  {
    "id": "mat-tec-86",
    "sectionId": 1,
    "number": 86,
    "text": "Una barra de acero de 10 metros de longitud experimenta una variación de temperatura de ΔT = 50 °C (α = 12 × 10⁻⁶ 1/°C). ¿Cuánto se dilata linealmente (ΔL)?",
    "options": [
      "6.0 mm (0.006 m)",
      "12.0 mm",
      "3.0 mm",
      "60.0 mm"
    ],
    "correctIndex": 0,
    "explanation": "ΔL = L₀ · α · ΔT = 10 m × (12 × 10⁻⁶) × 50 = 0.006 m = 6.0 mm.",
    "skill": "Dilatación térmica lineal",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Termotecnia",
    "subtopic": "Expansión térmica de tuberías"
  },
  {
    "id": "mat-tec-87",
    "sectionId": 1,
    "number": 87,
    "text": "Un manómetro en un circuito neumático marca una presión manométrica de 5.5 bar. Si la presión atmosférica es 1.01 bar, ¿cuál es la presión absoluta?",
    "options": [
      "6.51 bar",
      "4.49 bar",
      "5.50 bar",
      "7.00 bar"
    ],
    "correctIndex": 0,
    "explanation": "P_absoluta = P_manométrica + P_atmosférica = 5.5 bar + 1.01 bar = 6.51 bar.",
    "skill": "Presión absoluta y relativa",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Neumática",
    "subtopic": "Medición de presiones"
  },
  {
    "id": "mat-tec-88",
    "sectionId": 1,
    "number": 88,
    "text": "Un tornillo sin fin de 1 entrada gira a 1,400 RPM y engrana con una corona de 35 dientes. ¿A qué velocidad rota el eje de salida de la corona?",
    "options": [
      "40 RPM",
      "350 RPM",
      "70 RPM",
      "20 RPM"
    ],
    "correctIndex": 0,
    "explanation": "Relación: N_salida = N_entrada × (entradas / Z) = 1,400 × (1 / 35) = 40 RPM.",
    "skill": "Reductor sin fin-corona",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecánica Técnica",
    "subtopic": "Transmisiones mecánicas"
  },
  {
    "id": "mat-tec-89",
    "sectionId": 1,
    "number": 89,
    "text": "Para cortar una chapa de acero de espesor e = 2 mm con una longitud de corte perimetral L = 300 mm y resistencia al cizallamiento τ = 400 N/mm², calcula la fuerza de corte.",
    "options": [
      "240,000 N (240 kN)",
      "120,000 N",
      "60,000 N",
      "480,000 N"
    ],
    "correctIndex": 0,
    "explanation": "F = L × e × τ = 300 mm × 2 mm × 400 N/mm² = 240,000 N = 240 kN.",
    "skill": "Fuerza de troquelado y cizallado",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Matricería y Troquelería",
    "subtopic": "Corte de chapa"
  },
  {
    "id": "mat-tec-90",
    "sectionId": 1,
    "number": 90,
    "text": "Calcula el tiempo de taladrado en minutos para perforar una placa de espesor h = 40 mm a avance f = 0.2 mm/rev y N = 500 RPM (T = h / (f · N)).",
    "options": [
      "0.4 minutos (24 segundos)",
      "0.8 minutos",
      "2.0 minutos",
      "1.0 minuto"
    ],
    "correctIndex": 0,
    "explanation": "Velocidad de avance Vf = f × N = 0.2 × 500 = 100 mm/min. Tiempo = 40 mm / 100 mm/min = 0.4 min.",
    "skill": "Tiempos de fabricación",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecanizado",
    "subtopic": "Tiempo principal de corte"
  },
  {
    "id": "mat-tec-91",
    "sectionId": 1,
    "number": 91,
    "text": "En una instalación solar fotovoltaica, 6 paneles de 400 W cada uno están conectados en serie. ¿Cuál es la potencia pico total del string?",
    "options": [
      "2,400 Wp (2.4 kWp)",
      "400 Wp",
      "1,200 Wp",
      "3,600 Wp"
    ],
    "correctIndex": 0,
    "explanation": "En serie la potencia se acumula sumando la de cada módulo: 6 × 400 W = 2,400 Wp = 2.4 kWp.",
    "skill": "Energía solar fotovoltaica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Energías Renovables",
    "subtopic": "Strings fotovoltaicos"
  },
  {
    "id": "mat-tec-92",
    "sectionId": 1,
    "number": 92,
    "text": "Si un panel solar entrega Voc = 40 V a circuito abierto y conectas 5 paneles en serie, ¿cuál es el voltaje total a circuito abierto del conjunto?",
    "options": [
      "200 V",
      "40 V",
      "80 V",
      "240 V"
    ],
    "correctIndex": 0,
    "explanation": "En conexión serie de fuentes de tensión continua, los voltajes se suman: 5 × 40 V = 200 V.",
    "skill": "Conexión de generadores DC",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Energías Renovables",
    "subtopic": "Voltaje en serie"
  },
  {
    "id": "mat-tec-93",
    "sectionId": 1,
    "number": 93,
    "text": "Calcula la potencia disipada por efecto Joule en una resistencia de frenado automotriz de 5 Ω por la que circula una corriente de 10 A (P = I² · R).",
    "options": [
      "500 W",
      "50 W",
      "250 W",
      "100 W"
    ],
    "correctIndex": 0,
    "explanation": "P = I² × R = 10² × 5 = 100 × 5 = 500 Vatios.",
    "skill": "Efecto Joule",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Electricidad Automotriz",
    "subtopic": "Disipación de calor"
  },
  {
    "id": "mat-tec-94",
    "sectionId": 1,
    "number": 94,
    "text": "En un motor de inducción con 4 polos alimentado a f = 60 Hz, ¿cuál es la velocidad de sincronismo Ns en RPM (Ns = 120·f / P)?",
    "options": [
      "1,800 RPM",
      "3,600 RPM",
      "1,200 RPM",
      "1,500 RPM"
    ],
    "correctIndex": 0,
    "explanation": "Ns = (120 × 60) / 4 = 7,200 / 4 = 1,800 RPM.",
    "skill": "Velocidad de sincronismo",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Máquinas Eléctricas",
    "subtopic": "Motores de inducción"
  },
  {
    "id": "mat-tec-95",
    "sectionId": 1,
    "number": 95,
    "text": "Si la velocidad real del rotor del motor anterior es de 1,710 RPM, ¿cuál es su deslizamiento porcentual s?",
    "options": [
      "5.0%",
      "9.0%",
      "2.5%",
      "10.0%"
    ],
    "correctIndex": 0,
    "explanation": "s = [(Ns - Nr) / Ns] × 100 = [(1,800 - 1,710) / 1,800] × 100 = (90 / 1,800) × 100 = 5.0%.",
    "skill": "Deslizamiento en motores asíncronos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Máquinas Eléctricas",
    "subtopic": "Deslizamiento rotórico"
  },
  {
    "id": "mat-tec-96",
    "sectionId": 1,
    "number": 96,
    "text": "Un compresor de aire de pistón tiene un rendimiento volumétrico de 0.85 y un desplazamiento teórico de 200 L/min. ¿Cuál es su caudal real?",
    "options": [
      "170 L/min",
      "200 L/min",
      "185 L/min",
      "235 L/min"
    ],
    "correctIndex": 0,
    "explanation": "Caudal real = Desplazamiento × rendimiento = 200 L/min × 0.85 = 170 L/min.",
    "skill": "Rendimiento volumétrico",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Compresores y Neumática",
    "subtopic": "Caudal efectivo"
  },
  {
    "id": "mat-tec-97",
    "sectionId": 1,
    "number": 97,
    "text": "¿Cuál es la conicidad C de un cono Morse si su diámetro mayor es D = 25 mm, el menor d = 20 mm y su longitud L = 100 mm (C = (D - d)/L)?",
    "options": [
      "1 : 20 (o 0.05)",
      "1 : 10",
      "1 : 5",
      "1 : 50"
    ],
    "correctIndex": 0,
    "explanation": "C = (25 - 20) / 100 = 5 / 100 = 1 / 20 = 0.05.",
    "skill": "Conicidad mecánica",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Mecanizado en Torno",
    "subtopic": "Conos Morse"
  },
  {
    "id": "mat-tec-98",
    "sectionId": 1,
    "number": 98,
    "text": "Para fresar una ranura chavetera de ancho 8 mm con una fresa de 8 mm en una sola pasada a 80 mm/min, la tasa de remoción de viruta Q a 4 mm de profundidad es:",
    "options": [
      "2,560 mm³/min",
      "640 mm³/min",
      "1,280 mm³/min",
      "3,200 mm³/min"
    ],
    "correctIndex": 0,
    "explanation": "Q = ancho × profundidad × avance = 8 mm × 4 mm × 80 mm/min = 2,560 mm³/min.",
    "skill": "Tasa de remoción de viruta",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Fresado Industrial",
    "subtopic": "Productividad"
  },
  {
    "id": "mat-tec-99",
    "sectionId": 1,
    "number": 99,
    "text": "En un circuito neumático, una electroválvula 5/2 de centro cerrado se utiliza principalmente para accionar:",
    "options": [
      "Cilindros de doble efecto con parada intermedia",
      "Cilindros de simple efecto",
      "Motores rotativos continuos",
      "Válvulas estranguladoras"
    ],
    "correctIndex": 0,
    "explanation": "Las válvulas 5/2 con 5 vías y 2 posiciones (o 5/3) gobiernan cilindros de doble efecto controlando avance, retroceso y bloqueo.",
    "skill": "Válvulas direccionales neumáticas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Automatización Neumática",
    "subtopic": "Electroválvulas"
  },
  {
    "id": "mat-tec-100",
    "sectionId": 1,
    "number": 100,
    "text": "Un tacómetro mide una frecuencia de pulsos f = 200 Hz en una rueda fónica de 60 dientes. ¿A qué RPM gira el eje (RPM = (f · 60) / Z)?",
    "options": [
      "200 RPM",
      "1,200 RPM",
      "600 RPM",
      "3,600 RPM"
    ],
    "correctIndex": 0,
    "explanation": "RPM = (200 pulsos/s × 60 s/min) / 60 dientes = 12,000 / 60 = 200 RPM.",
    "skill": "Sensores inductivos de velocidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Instrumentación Automotriz",
    "subtopic": "Ruedas fónicas"
  }
];
