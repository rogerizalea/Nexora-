# 80 Preguntas Pedagógicas Únicas: Matemáticas Técnico/Tecnológico (21 a 100)
tecnico_new_raw = [
    # 21-35: Metrología, tolerancias y ajustes mecánicos ISO
    ("En un plano de mecanizado, un eje tiene la cota Ø40 h7 con tolerancia (-0.025, 0). ¿Cuál es la medida mínima admisible?",
     ["39.975 mm", "40.025 mm", "39.950 mm", "40.000 mm"], 0,
     "Medida máxima = 40.000 mm. Medida mínima = 40.000 - 0.025 = 39.975 mm.",
     "Tolerancias dimensionales ISO", "Desafiante", "Metrología", "Ajustes de precisión"),

    ("Un agujero mecanizado mide Ø50 H7 (+0.030, 0) y el eje que se acopla mide Ø50 f7 (-0.025, -0.050). ¿Qué tipo de ajuste se produce?",
     ["Ajuste con juego (móvil)", "Ajuste con apriete (fijo)", "Ajuste indeterminado", "Ajuste forzado"], 0,
     "El agujero siempre es mayor o igual a 50.000 mm y el eje siempre es menor a 50.000 mm, por lo que siempre habrá juego positivo garantizado.",
     "Sistemas de ajustes mecánicos", "Desafiante", "Mecánica Industrial", "Ajustes ISO"),

    ("En un micrómetro en milímetros con paso de rosca de 0.5 mm y tambor graduado en 50 divisiones, ¿cuál es la apreciación del instrumento?",
     ["0.01 mm", "0.05 mm", "0.02 mm", "0.1 mm"], 0,
     "Apreciación = paso del tornillo / divisiones del tambor = 0.5 mm / 50 = 0.01 mm.",
     "Apreciación de instrumentos", "Desafiante", "Metrología", "Micrómetro"),

    ("Un calibrador pie de rey tiene un nonio de 20 divisiones que abarca 19 mm de la regla principal. ¿Cuál es su apreciación de lectura?",
     ["0.05 mm", "0.02 mm", "0.10 mm", "0.01 mm"], 0,
     "Apreciación = 1 mm / 20 divisiones = 0.05 mm.",
     "Lectura con nonio", "Desafiante", "Metrología", "Pie de rey"),

    ("Al medir una pieza con un micrómetro centesimal, la regla principal marca 14.5 mm y el tambor coincide en la línea 32. ¿Cuál es la lectura?",
     ["14.82 mm", "14.32 mm", "14.532 mm", "15.12 mm"], 0,
     "Lectura = 14.5 mm + (32 × 0.01 mm) = 14.5 mm + 0.32 mm = 14.82 mm.",
     "Medición de precisión", "Desafiante", "Metrología", "Lectura micrométrica"),

    ("Calcula la tolerancia total de una cota indicada como 75 ± 0.15 mm.",
     ["0.30 mm", "0.15 mm", "75.30 mm", "0.075 mm"], 0,
     "Tolerancia = Límite superior - Límite inferior = 75.15 - 74.85 = 0.30 mm.",
     "Campo de tolerancia", "Desafiante", "Metrología", "Tolerancias bilaterales"),

    ("En un ajuste por interferencia (apriete), el diámetro del eje sin montar es de 30.040 mm y el del agujero es de 30.015 mm. ¿Cuánto es el apriete?",
     ["0.025 mm (25 μm)", "0.055 mm", "0.015 mm", "0.040 mm"], 0,
     "Apriete = Diámetro del eje - Diámetro del agujero = 30.040 - 30.015 = 0.025 mm (25 micrómetros).",
     "Cálculo de interferencia", "Desafiante", "Mecánica Técnica", "Ajuste fijo"),

    ("Se desea maquinar una pieza cuadrada de 100 mm por lado con una contracción térmica del 1.5%. ¿Qué dimensión debe tener el molde de fundición?",
     ["101.52 mm", "100.00 mm", "98.50 mm", "103.00 mm"], 0,
     "Dimensión molde = 100 / (1 - 0.015) = 100 / 0.985 ≈ 101.52 mm (o 100 × 1.015 = 101.5 mm).",
     "Contracción en fundición", "Desafiante", "Manufactura", "Tolerancias térmicas"),

    ("¿Cuál es la rugosidad media aritmética (Ra) si la suma de las áreas absolutas del perfil sobre la longitud de muestreo L es de 3.2 μm·mm para L = 0.8 mm?",
     ["4.0 μm", "2.56 μm", "3.2 μm", "0.25 μm"], 0,
     "Ra = (1/L) ∫|y|dx = 3.2 μm·mm / 0.8 mm = 4.0 μm.",
     "Acabado superficial y rugosidad", "Desafiante", "Metrología", "Parámetro Ra"),

    ("En un plano de soldadura, un cordón en ángulo tiene una garganta eficaz de a = 5 mm. ¿Cuál es el cateto de la soldadura (z = a × √2)?",
     ["7.07 mm", "5.00 mm", "10.00 mm", "8.50 mm"], 0,
     "z = a × √2 = 5 mm × 1.4142 ≈ 7.07 mm.",
     "Cálculo de uniones soldadas", "Desafiante", "Construcción Metálica", "Cordones de soldadura"),

    # 36-50: Trigonometría aplicada a fuerzas, torque y vectores
    ("Una fuerza de 500 N se aplica con un ángulo de 30° respecto a la horizontal. ¿Cuál es su componente horizontal Fx? (cos 30° ≈ 0.866)",
     ["433 N", "250 N", "500 N", "350 N"], 0,
     "Fx = F × cos(30°) = 500 N × 0.8660 = 433 N.",
     "Descomposición vectorial", "Desafiante", "Estática Técnica", "Fuerzas coplanares"),

    ("Calcula la componente vertical Fy de la misma fuerza de 500 N inclinada a 30° (sen 30° = 0.500).",
     ["250 N", "433 N", "500 N", "150 N"], 0,
     "Fy = F × sen(30°) = 500 N × 0.500 = 250 N.",
     "Componentes rectangulares", "Desafiante", "Estática Técnica", "Fuerza vertical"),

    ("Un operario aprieta un perno aplicando una fuerza perpendicular de 150 N en el extremo de una llave de 0.4 metros de longitud. ¿Qué torque aplica?",
     ["60 N·m", "375 N·m", "150 N·m", "75 N·m"], 0,
     "Torque τ = Fuerza × distancia = 150 N × 0.4 m = 60 N·m.",
     "Momento de torsión (torque)", "Desafiante", "Mecánica Aplicada", "Palancas y apriete"),

    ("Dos fuerzas concurrentes y perpendiculares entre sí miden 300 N y 400 N. ¿Cuál es la magnitud de la fuerza resultante?",
     ["500 N", "700 N", "100 N", "450 N"], 0,
     "R = √(300² + 400²) = √(90,000 + 160,000) = √250,000 = 500 N.",
     "Resultante de fuerzas perpendiculares", "Desafiante", "Estática", "Vectores"),

    ("Una viga simplemente apoyada de 6 m de longitud soporta una carga puntual de 1,200 N en su centro (a 3 m de cada apoyo). ¿Cuál es la reacción en cada apoyo?",
     ["600 N en cada apoyo", "1,200 N en cada apoyo", "400 N en cada apoyo", "800 N en cada apoyo"], 0,
     "Por simetría de carga estática: R_A = R_B = 1,200 N / 2 = 600 N.",
     "Equilibrio estático de vigas", "Desafiante", "Resistencia de Materiales", "Reacciones de apoyo"),

    ("¿Qué pendiente porcentual tiene una rampa de acceso vehicular que asciende 1.5 metros en una distancia horizontal de 30 metros?",
     ["5%", "15%", "2%", "4.5%"], 0,
     "Pendiente = (desnivel / distancia horizontal) × 100 = (1.5 / 30) × 100 = 0.05 × 100 = 5%.",
     "Pendiente técnica", "Desafiante", "Topografía y Obra Civil", "Rampas"),

    ("Para elevar una carga de 2,000 N con un polipasto de 4 poleas móviles (ventaja mecánica VM = 4), ¿qué fuerza teórica se debe aplicar?",
     ["500 N", "1,000 N", "250 N", "2,000 N"], 0,
     "Fuerza = Carga / VM = 2,000 N / 4 = 500 N.",
     "Máquinas simples", "Desafiante", "Mecánica Técnica", "Polipastos"),

    ("Un cable de acero de 10 mm² de sección soporta una carga de tracción de 2,500 N. ¿Cuál es el esfuerzo normal de tracción (σ = F/A)?",
     ["250 MPa (N/mm²)", "25 MPa", "2,500 MPa", "250 kPa"], 0,
     "σ = F / A = 2,500 N / 10 mm² = 250 N/mm² = 250 MPa.",
     "Esfuerzo mecánico de tracción", "Desafiante", "Resistencia de Materiales", "Tensión normal"),

    ("Si el límite de fluencia de un acero estructural es de 360 MPa y se adopta un coeficiente de seguridad n = 2, ¿cuál es el esfuerzo admisible de diseño?",
     ["180 MPa", "720 MPa", "360 MPa", "120 MPa"], 0,
     "σ_adm = σ_fluencia / n = 360 MPa / 2 = 180 MPa.",
     "Coeficiente de seguridad", "Desafiante", "Diseño Mecánico", "Cálculo estructural"),

    ("Un pistón neumático tiene un émbolo de 10 cm² de área. Si la presión de aire comprimido es de 6 bar (0.6 N/mm² = 60 N/cm²), ¿qué fuerza empuja?",
     ["600 N", "60 N", "6,000 N", "300 N"], 0,
     "F = Presión × Área = 60 N/cm² × 10 cm² = 600 N.",
     "Fuerza en actuadores neumáticos", "Desafiante", "Neumática Industrial", "Cilindros de simple efecto"),

    # 51-65: Cinemática de transmisiones y engranajes
    ("Un motor gira a 1,750 RPM con una polea de 100 mm de diámetro y acciona un compresor con polea de 250 mm. ¿A qué RPM gira el compresor?",
     ["700 RPM", "4,375 RPM", "875 RPM", "1,000 RPM"], 0,
     "Relación: N₁ × D₁ = N₂ × D₂ ⇒ 1,750 × 100 = N₂ × 250 ⇒ N₂ = 175,000 / 250 = 700 RPM.",
     "Transmisión por poleas", "Desafiante", "Mecánica Técnica", "Relación de transmisión"),

    ("¿Cuál es la relación de transmisión 'i' de un reductor si el engranaje motriz tiene 18 dientes y el conducido tiene 72 dientes (i = Z₂ / Z₁)?",
     ["4 : 1 (o 4)", "0.25", "2 : 1", "3 : 1"], 0,
     "i = Z₂ / Z₁ = 72 / 18 = 4 (reduce la velocidad 4 veces y multiplica el torque por 4).",
     "Reductores mecánicos", "Desafiante", "Mecánica Técnica", "Trenes de engranajes"),

    ("Calcula la velocidad lineal de corte Vc en m/min al tornear un cilindro de diámetro D = 50 mm a N = 600 RPM. (Fórmula: Vc = (π·D·N)/1000).",
     ["94.25 m/min", "47.12 m/min", "188.50 m/min", "30.00 m/min"], 0,
     "Vc = (3.1416 × 50 × 600) / 1000 = 94,248 / 1000 ≈ 94.25 m/min.",
     "Mecanizado por viruta", "Desafiante", "Manufactura", "Velocidad de corte"),

    ("Calcula la velocidad angular ω en rad/s de un eje que rota a 3,000 RPM. (Fórmula: ω = 2π·N / 60).",
     ["314.16 rad/s", "157.08 rad/s", "628.32 rad/s", "50.00 rad/s"], 0,
     "ω = (2 × 3.1416 × 3,000) / 60 = 18,849.6 / 60 ≈ 314.16 rad/s.",
     "Cinemática rotacional", "Desafiante", "Física Técnica", "Velocidad angular"),

    ("Si un motor entrega una potencia mecánica de 7.5 kW a 1,500 RPM (ω = 157.08 rad/s), ¿cuál es su torque útil (P = τ·ω)?",
     ["47.75 N·m", "23.87 N·m", "95.50 N·m", "112.5 N·m"], 0,
     "τ = P / ω = 7,500 W / 157.08 rad/s ≈ 47.75 N·m.",
     "Potencia y par motor", "Desafiante", "Máquinas Eléctricas", "Torque electromecánico"),

    ("Un módulo de engranaje es m = 2.5 mm y la rueda tiene 36 dientes. ¿Cuál es su diámetro primitivo (Dp = m × Z)?",
     ["90 mm", "72 mm", "144 mm", "92.5 mm"], 0,
     "Dp = m × Z = 2.5 mm × 36 = 90 mm.",
     "Geometría de engranajes", "Desafiante", "Diseño Mecánico", "Diámetro primitivo"),

    ("En un torno CNC, el avance es f = 0.2 mm/rev y el cabezal gira a 1,000 RPM. ¿Cuál es la velocidad de avance de la herramienta en mm/min?",
     ["200 mm/min", "2,000 mm/min", "100 mm/min", "50 mm/min"], 0,
     "Vf = f × N = 0.2 mm/rev × 1,000 rev/min = 200 mm/min.",
     "Parámetros de mecanizado CNC", "Desafiante", "Control Numérico", "Avance de corte"),

    ("Una bomba hidráulica entrega un caudal constante de 30 litros por minuto (L/min) a una presión de 100 bar. Calcula la potencia hidráulica teórica en kW.",
     ["5.0 kW", "3.0 kW", "10.0 kW", "1.5 kW"], 0,
     "P(kW) = (Caudal en L/min × Presión en bar) / 600 = (30 × 100) / 600 = 3,000 / 600 = 5.0 kW.",
     "Potencia fluídica", "Desafiante", "Oleohidráulica", "Bombas hidráulicas"),

    ("Un motor de combustión tiene una cilindrada unitaria de 500 cm³ y 4 cilindros. ¿Cuál es su cilindrada total en litros?",
     ["2.0 litros", "1.5 litros", "2.5 litros", "1.8 litros"], 0,
     "Cilindrada total = 4 × 500 cm³ = 2,000 cm³ = 2.0 litros.",
     "Motores de combustión interna", "Desafiante", "Mecánica Automotriz", "Cilindrada"),

    ("Si un motor térmico consume 100 kJ de calor y produce 35 kJ de trabajo mecánico neto, ¿cuál es su rendimiento térmico η?",
     ["35%", "65%", "3.5%", "28.5%"], 0,
     "η = (Trabajo útil / Calor suministrado) × 100 = (35 kJ / 100 kJ) × 100 = 35%.",
     "Termodinámica aplicada", "Desafiante", "Termotecnia", "Eficiencia térmica"),

    # 66-80: Electricidad y electrónica técnica
    ("En un circuito serie con tres resistencias de 10 Ω, 15 Ω y 25 Ω alimentado a 100 V, ¿cuál es la resistencia total equivalente?",
     ["50 Ω", "25 Ω", "150 Ω", "4.16 Ω"], 0,
     "En serie se suman directamente: R_eq = 10 + 15 + 25 = 50 Ω.",
     "Circuitos resistivos en serie", "Desafiante", "Electricidad", "Resistencia equivalente"),

    ("Con la resistencia total de 50 Ω y 100 V de alimentación, ¿cuál es la corriente total del circuito?",
     ["2 A", "5 A", "0.5 A", "50 A"], 0,
     "I = V / R_eq = 100 V / 50 Ω = 2 Amperios.",
     "Ley de Ohm en circuitos serie", "Desafiante", "Electricidad", "Corriente eléctrica"),

    ("¿Cuál es la resistencia equivalente de dos resistencias de 20 Ω y 30 Ω conectadas en paralelo?",
     ["12 Ω", "50 Ω", "25 Ω", "10 Ω"], 0,
     "R_eq = (R₁ × R₂) / (R₁ + R₂) = (20 × 30) / (20 + 30) = 600 / 50 = 12 Ω.",
     "Resistencias en paralelo", "Desafiante", "Electricidad", "Asociación en paralelo"),

    ("Un motor eléctrico monofásico consume 10 A a una tensión de 220 V con un factor de potencia cos φ = 0.85. ¿Cuál es la potencia activa P en vatios?",
     ["1,870 W", "2,200 W", "2,588 W", "1,500 W"], 0,
     "P = V × I × cos φ = 220 V × 10 A × 0.85 = 1,870 Vatios.",
     "Potencia en corriente alterna", "Desafiante", "Electrotecnia", "Potencia activa"),

    ("Calcula la reactancia inductiva XL de una bobina de autoinducción L = 0.1 H en una red de corriente alterna de frecuencia f = 60 Hz.",
     ["37.7 Ω", "6.0 Ω", "377 Ω", "18.8 Ω"], 0,
     "XL = 2 × π × f × L = 2 × 3.1416 × 60 × 0.1 ≈ 37.7 Ω.",
     "Circuitos de corriente alterna", "Desafiante", "Electrotecnia", "Reactancia inductiva"),

    ("Un transformador monofásico ideal tiene 440 espiras en el primario y 110 espiras en el secundario. Si el voltaje primario es 220 V, ¿cuál es el secundario?",
     ["55 V", "110 V", "880 V", "44 V"], 0,
     "V₂ / V₁ = N₂ / N₁ ⇒ V₂ = 220 × (110 / 440) = 220 × 0.25 = 55 V.",
     "Transformadores eléctricos", "Desafiante", "Electrotecnia", "Relación de transformación"),

    ("Calcula la energía eléctrica consumida en kilovatios-hora (kWh) por un calentador de 2,000 W que funciona 4 horas diarias durante 30 días.",
     ["240 kWh", "60 kWh", "120 kWh", "8 kWh"], 0,
     "Potencia = 2 kW. Horas totales = 4 × 30 = 120 h. Energía = 2 kW × 120 h = 240 kWh.",
     "Consumo energético", "Desafiante", "Instalaciones Eléctricas", "Medición de kWh"),

    ("En un circuito con capacitor de C = 100 μF conectado a f = 50 Hz, ¿cuál es su reactancia capacitiva Xc = 1 / (2π f C)?",
     ["31.83 Ω", "62.8 Ω", "15.91 Ω", "100 Ω"], 0,
     "Xc = 1 / (2 × 3.1416 × 50 × 100×10⁻⁶) = 1 / 0.031416 ≈ 31.83 Ω.",
     "Reactancia capacitiva", "Desafiante", "Electrotecnia", "Condensadores"),

    ("¿Cuál es la sección mínima de un conductor de cobre (resistividad ρ = 0.0175 Ω·mm²/m) de 40 m para que su resistencia no supere 0.35 Ω?",
     ["2.0 mm²", "1.5 mm²", "2.5 mm²", "4.0 mm²"], 0,
     "R = ρ · L / S ⇒ S = ρ · L / R = (0.0175 × 40) / 0.35 = 0.70 / 0.35 = 2.0 mm².",
     "Cálculo de conductores eléctricos", "Desafiante", "Instalaciones Eléctricas", "Resistividad"),

    ("En un motor trifásico en conexión estrella alimentado a 400 V de línea, ¿cuál es la tensión de fase simple (V_fase = V_línea / √3)?",
     ["230 V", "400 V", "200 V", "690 V"], 0,
     "V_fase = 400 V / 1.732 ≈ 230.9 V ≈ 230 V.",
     "Sistemas trifásicos", "Desafiante", "Electrotecnia", "Conexión estrella"),

    # 81-90: Geometría industrial y cálculo de masa
    ("Calcula la masa en kg de una chapa de acero de 2 m de largo, 1 m de ancho y 5 mm de espesor (densidad del acero ρ = 7,850 kg/m³).",
     ["78.5 kg", "157.0 kg", "39.25 kg", "785 kg"], 0,
     "Volumen = 2 m × 1 m × 0.005 m = 0.01 m³. Masa = 0.01 m³ × 7,850 kg/m³ = 78.5 kg.",
     "Cálculo de peso de materiales", "Desafiante", "Construcción Metálica", "Chapas y perfiles"),

    ("Un tanque esférico de gas tiene un radio de 1.5 metros. ¿Cuál es su volumen interior aproximado? (Fórmula: V = (4/3)·π·r³).",
     ["14.14 m³", "28.27 m³", "9.42 m³", "7.07 m³"], 0,
     "V = (4/3) × 3.1416 × (1.5)³ = (4/3) × 3.1416 × 3.375 = 14.137 m³ ≈ 14.14 m³.",
     "Volumen de esferas", "Desafiante", "Calderería y Recipientes", "Tanques a presión"),

    ("Una tolva tiene forma de pirámide cuadrangular invertida de base 2 m × 2 m y altura de 3 m. ¿Cuál es su volumen de capacidad (V = (A_base · h)/3)?",
     ["4.0 m³", "12.0 m³", "6.0 m³", "8.0 m³"], 0,
     "Área base = 2 × 2 = 4 m². Volumen = (4 m² × 3 m) / 3 = 12 / 3 = 4.0 m³.",
     "Volumen de tolvas", "Desafiante", "Mecánica Industrial", "Silos y tolvas"),

    ("Un tubo cilíndrico de acero tiene un diámetro exterior de 60 mm y un espesor de pared de 5 mm. ¿Cuál es su diámetro interior?",
     ["50 mm", "55 mm", "45 mm", "52 mm"], 0,
     "El espesor resta dos veces al diámetro exterior: Di = De - 2 × espesor = 60 - 2(5) = 50 mm.",
     "Geometría de tuberías", "Desafiante", "Tuberías Industriales", "Cálculo dimensional"),

    ("Calcula la sección transversal de paso de fluido en mm² de una tubería con diámetro interior de 20 mm (A = (π · d²)/4).",
     ["314.16 mm²", "628.32 mm²", "1,256.6 mm²", "157.08 mm²"], 0,
     "A = (3.1416 × 20²) / 4 = (3.1416 × 400) / 4 = 314.16 mm².",
     "Sección hidráulica", "Desafiante", "Mecánica de Fluidos", "Área de tubería"),

    ("Si un perfil IPN de acero tiene una masa lineal de 14.3 kg/m, ¿cuál es el peso de una viga de 6 metros de dicho perfil?",
     ["85.8 kg", "71.5 kg", "100.1 kg", "95.0 kg"], 0,
     "Masa = 14.3 kg/m × 6 m = 85.8 kg.",
     "Perfiles estructurales", "Desafiante", "Estructuras Metálicas", "Tablas técnicas"),

    ("Un depósito cúbico de 1 metro de lado se llena con aceite industrial de densidad relativa 0.88 (ρ = 880 kg/m³). ¿Cuál es la masa del líquido?",
     ["880 kg", "1,000 kg", "88 kg", "750 kg"], 0,
     "Volumen = 1 m³. Masa = Densidad × Volumen = 880 kg/m³ × 1 m³ = 880 kg.",
     "Densidad y masa de fluidos", "Desafiante", "Fluidos Industriales", "Lubricantes"),

    ("¿Cuál es el área lateral de un tubo cilíndrico de radio r = 0.1 m y longitud L = 3 m que debe ser pintado por fuera? (A = 2π·r·L).",
     ["1.88 m²", "0.94 m²", "3.77 m²", "2.50 m²"], 0,
     "A = 2 × 3.1416 × 0.1 × 3 = 1.8849 m² ≈ 1.88 m².",
     "Área superficial cilíndrica", "Desafiante", "Mantenimiento Industrial", "Pintura y protección"),

    ("Se requiere cortar 12 discos de chapa de 100 mm de diámetro. ¿Cuál es el área total neta de material de los discos en cm²?",
     ["942.5 cm²", "785.4 cm²", "1,200 cm²", "628.3 cm²"], 0,
     "Área de un disco = π · r² = 3.1416 × (5 cm)² = 78.54 cm². Para 12 discos: 12 × 78.54 = 942.48 cm² ≈ 942.5 cm².",
     "Cálculo de despiece", "Desafiante", "Calderería", "Discos de chapa"),

    ("Calcula el volumen de un cono truncado de radio mayor R = 0.6 m, radio menor r = 0.4 m y altura h = 1 m (V = (π·h/3)·(R² + Rr + r²)).",
     ["0.796 m³", "1.57 m³", "0.523 m³", "1.05 m³"], 0,
     "R² + Rr + r² = 0.36 + 0.24 + 0.16 = 0.76. V = (3.1416 × 1 / 3) × 0.76 ≈ 1.0472 × 0.76 ≈ 0.796 m³.",
     "Volúmenes de cuerpos cónicos", "Desafiante", "Calderería", "Conos truncados"),

    # 91-100: Interpolación, dinámica y fluidos técnicos
    ("En una tabla técnica de vapor, a 150 °C la entalpía es 2,746 kJ/kg y a 160 °C es 2,758 kJ/kg. Por interpolación lineal, ¿cuál es a 155 °C?",
     ["2,752 kJ/kg", "2,750 kJ/kg", "2,754 kJ/kg", "2,758 kJ/kg"], 0,
     "Al ser exactamente el punto medio (155 °C): h = (2,746 + 2,758) / 2 = 2,752 kJ/kg.",
     "Interpolación lineal técnica", "Desafiante", "Termodinámica", "Tablas de vapor"),

    ("Por una tubería de 0.01 m² de sección fluye agua a una velocidad de 2 m/s. ¿Cuál es el caudal volumétrico Q en litros por segundo (1 m³ = 1000 L)?",
     ["20 L/s", "2 L/s", "200 L/s", "10 L/s"], 0,
     "Q = Área × velocidad = 0.01 m² × 2 m/s = 0.02 m³/s. En litros: 0.02 × 1,000 = 20 L/s.",
     "Ecuación de caudal", "Desafiante", "Hidráulica", "Flujo volumétrico"),

    ("La ecuación de continuidad para un fluido incompresible establece que en una reducción de tubería:",
     ["A₁ · v₁ = A₂ · v₂", "A₁ / v₁ = A₂ / v₂", "A₁ + v₁ = A₂ + v₂", "A₁ · v₂ = A₂ · v₁"], 0,
     "El caudal que entra es igual al caudal que sale: Q₁ = Q₂ ⇒ A₁ · v₁ = A₂ · v₂.",
     "Ecuación de continuidad", "Desafiante", "Mecánica de Fluidos", "Fluidos incompresibles"),

    ("Si una tubería de diámetro D₁ = 100 mm se reduce a D₂ = 50 mm, ¿por cuánto se multiplica la velocidad del fluido (v₂ / v₁)?",
     ["Se multiplica por 4", "Se multiplica por 2", "Se divide entre 2", "Permanece igual"], 0,
     "Como el área es proporcional al cuadrado del diámetro: A₁/A₂ = (100/50)² = 2² = 4. Por tanto, v₂ = 4 v₁.",
     "Efecto Venturi y velocidad", "Desafiante", "Hidráulica", "Estrechamiento de conductos"),

    ("Calcula la presión hidrostática en pascales (Pa) en el fondo de una columna de agua de altura h = 5 m (densidad ρ = 1,000 kg/m³, g = 9.81 m/s²).",
     ["49,050 Pa (49.05 kPa)", "5,000 Pa", "9,810 Pa", "50,000 Pa"], 0,
     "P = ρ × g × h = 1,000 kg/m³ × 9.81 m/s² × 5 m = 49,050 Pa = 49.05 kPa.",
     "Presión hidrostática", "Desafiante", "Hidráulica", "Principio fundamental"),

    ("Una carga de 800 kg se acelera verticalmente hacia arriba a 2 m/s². ¿Cuál es la tensión en el cable de la grúa? (g = 9.81 m/s²).",
     ["9,448 N", "7,848 N", "1,600 N", "6,248 N"], 0,
     "Segunda ley de Newton: T - mg = m·a ⇒ T = m(g + a) = 800(9.81 + 2) = 800(11.81) = 9,448 N.",
     "Dinámica de elevación", "Desafiante", "Física Técnica", "Grúas y cables"),

    ("Un intercambiador de calor enfría un caudal de agua de masa m_dot = 0.5 kg/s desde 80 °C hasta 40 °C (Cp = 4.186 kJ/kg·K). ¿Qué calor transfiere?",
     ["83.72 kW", "41.86 kW", "167.4 kW", "20.93 kW"], 0,
     "Q_dot = m_dot × Cp × ΔT = 0.5 kg/s × 4.186 kJ/kg·K × (80 - 40) K = 0.5 × 4.186 × 40 = 83.72 kW.",
     "Transferencia de calor", "Desafiante", "Termotecnia", "Intercambiadores térmicos"),

    ("Un sensor de temperatura PT100 tiene una resistencia de 100.0 Ω a 0 °C y un coeficiente α = 0.00385 Ω/°C. ¿Cuál es su resistencia a 50 °C?",
     ["119.25 Ω", "100.38 Ω", "138.5 Ω", "105.0 Ω"], 0,
     "R = R₀ · (1 + α · ΔT) = 100 × (1 + 0.00385 × 50) = 100 × (1 + 0.1925) = 119.25 Ω.",
     "Sensores industriales RTD", "Desafiante", "Instrumentación", "Termorresistencias"),

    ("En un ensayo de tracción, una probeta de longitud inicial L₀ = 100 mm se estira elásticamente hasta 100.2 mm. ¿Cuál es la deformación unitaria ε?",
     ["0.002 (o 0.2%)", "0.2", "0.02", "0.0002"], 0,
     "ε = ΔL / L₀ = (100.2 - 100) / 100 = 0.2 / 100 = 0.002.",
     "Deformación unitaria", "Desafiante", "Ciencia de Materiales", "Ensayo de tracción"),

    ("Un vehículo de 1,200 kg frena de 20 m/s a 0 m/s en 4 segundos a desaceleración constante. ¿Cuál es la fuerza de frenado media requerida?",
     ["6,000 N", "2,400 N", "4,800 N", "12,000 N"], 0,
     "Desaceleración a = Δv / t = 20 / 4 = 5 m/s². Fuerza = m × a = 1,200 kg × 5 m/s² = 6,000 N.",
     "Fuerza de frenado", "Desafiante", "Mecánica Automotriz", "Dinámica de frenado")
]

tecnico_new_raw.extend([('En una rosca métrica M12 × 1.75, ¿cuál es el paso de rosca P?', ['1.75 mm', '12 mm', '10.25 mm', '1.50 mm'], 0, 'En la designación métrica ISO, el primer número indica el diámetro nominal exterior (12 mm) y el segundo el paso de avance (1.75 mm).', 'Roscas métricas ISO', 'Desafiante', 'Mecánica Técnica', 'Normalización de roscas'), ('Para taladrar el agujero previo a roscar con un macho métrico M10 × 1.5, ¿cuál es el diámetro de broca recomendado (d = D - P)?', ['8.5 mm', '10.0 mm', '9.0 mm', '7.5 mm'], 0, 'Diámetro de broca previo = Diámetro nominal - Paso = 10 mm - 1.5 mm = 8.5 mm.', 'Mecanizado de roscas interiores', 'Desafiante', 'Taller Mecánico', 'Taladrado para machos'), ('Un motor eléctrico trifásico conectado en delta (triángulo) consume una corriente de línea I_L = 17.32 A. ¿Cuál es la corriente de fase I_fase (I_fase = I_L / √3)?', ['10.0 A', '17.32 A', '30.0 A', '8.66 A'], 0, 'En conexión delta: I_L = √3 × I_fase ⇒ I_fase = 17.32 / 1.732 = 10.0 A.', 'Conexión delta trifásica', 'Desafiante', 'Electrotecnia', 'Corrientes de fase y línea'), ('Calcula la caída de tensión ΔV en una línea monofásica de cobre (ρ = 0.0175 Ω·mm²/m) de 50 m de longitud, sección 4 mm² y corriente de 16 A (ΔV = 2·I·L·ρ / S).', ['7.0 V', '3.5 V', '14.0 V', '1.75 V'], 0, 'ΔV = (2 × 16 × 50 × 0.0175) / 4 = 28 / 4 = 7.0 Voltios.', 'Caída de tensión en conductores', 'Desafiante', 'Instalaciones Eléctricas', 'Dimensionamiento de cables'), ('¿Cuál es el porcentaje de caída de tensión si la tensión nominal es 230 V y la caída calculada es de 6.9 V?', ['3.0%', '5.0%', '1.5%', '4.0%'], 0, '%ΔV = (6.9 / 230) × 100 = 3.0%.', 'Porcentaje de caída de tensión', 'Desafiante', 'Instalaciones Eléctricas', 'Límites normativos'), ('Una barra de acero de 10 metros de longitud experimenta una variación de temperatura de ΔT = 50 °C (α = 12 × 10⁻⁶ 1/°C). ¿Cuánto se dilata linealmente (ΔL)?', ['6.0 mm (0.006 m)', '12.0 mm', '3.0 mm', '60.0 mm'], 0, 'ΔL = L₀ · α · ΔT = 10 m × (12 × 10⁻⁶) × 50 = 0.006 m = 6.0 mm.', 'Dilatación térmica lineal', 'Desafiante', 'Termotecnia', 'Expansión térmica de tuberías'), ('Un manómetro en un circuito neumático marca una presión manométrica de 5.5 bar. Si la presión atmosférica es 1.01 bar, ¿cuál es la presión absoluta?', ['6.51 bar', '4.49 bar', '5.50 bar', '7.00 bar'], 0, 'P_absoluta = P_manométrica + P_atmosférica = 5.5 bar + 1.01 bar = 6.51 bar.', 'Presión absoluta y relativa', 'Desafiante', 'Neumática', 'Medición de presiones'), ('Un tornillo sin fin de 1 entrada gira a 1,400 RPM y engrana con una corona de 35 dientes. ¿A qué velocidad rota el eje de salida de la corona?', ['40 RPM', '350 RPM', '70 RPM', '20 RPM'], 0, 'Relación: N_salida = N_entrada × (entradas / Z) = 1,400 × (1 / 35) = 40 RPM.', 'Reductor sin fin-corona', 'Desafiante', 'Mecánica Técnica', 'Transmisiones mecánicas'), ('Para cortar una chapa de acero de espesor e = 2 mm con una longitud de corte perimetral L = 300 mm y resistencia al cizallamiento τ = 400 N/mm², calcula la fuerza de corte.', ['240,000 N (240 kN)', '120,000 N', '60,000 N', '480,000 N'], 0, 'F = L × e × τ = 300 mm × 2 mm × 400 N/mm² = 240,000 N = 240 kN.', 'Fuerza de troquelado y cizallado', 'Desafiante', 'Matricería y Troquelería', 'Corte de chapa'), ('Calcula el tiempo de taladrado en minutos para perforar una placa de espesor h = 40 mm a avance f = 0.2 mm/rev y N = 500 RPM (T = h / (f · N)).', ['0.4 minutos (24 segundos)', '0.8 minutos', '2.0 minutos', '1.0 minuto'], 0, 'Velocidad de avance Vf = f × N = 0.2 × 500 = 100 mm/min. Tiempo = 40 mm / 100 mm/min = 0.4 min.', 'Tiempos de fabricación', 'Desafiante', 'Mecanizado', 'Tiempo principal de corte'), ('En una instalación solar fotovoltaica, 6 paneles de 400 W cada uno están conectados en serie. ¿Cuál es la potencia pico total del string?', ['2,400 Wp (2.4 kWp)', '400 Wp', '1,200 Wp', '3,600 Wp'], 0, 'En serie la potencia se acumula sumando la de cada módulo: 6 × 400 W = 2,400 Wp = 2.4 kWp.', 'Energía solar fotovoltaica', 'Desafiante', 'Energías Renovables', 'Strings fotovoltaicos'), ('Si un panel solar entrega Voc = 40 V a circuito abierto y conectas 5 paneles en serie, ¿cuál es el voltaje total a circuito abierto del conjunto?', ['200 V', '40 V', '80 V', '240 V'], 0, 'En conexión serie de fuentes de tensión continua, los voltajes se suman: 5 × 40 V = 200 V.', 'Conexión de generadores DC', 'Desafiante', 'Energías Renovables', 'Voltaje en serie'), ('Calcula la potencia disipada por efecto Joule en una resistencia de frenado automotriz de 5 Ω por la que circula una corriente de 10 A (P = I² · R).', ['500 W', '50 W', '250 W', '100 W'], 0, 'P = I² × R = 10² × 5 = 100 × 5 = 500 Vatios.', 'Efecto Joule', 'Desafiante', 'Electricidad Automotriz', 'Disipación de calor'), ('En un motor de inducción con 4 polos alimentado a f = 60 Hz, ¿cuál es la velocidad de sincronismo Ns en RPM (Ns = 120·f / P)?', ['1,800 RPM', '3,600 RPM', '1,200 RPM', '1,500 RPM'], 0, 'Ns = (120 × 60) / 4 = 7,200 / 4 = 1,800 RPM.', 'Velocidad de sincronismo', 'Desafiante', 'Máquinas Eléctricas', 'Motores de inducción'), ('Si la velocidad real del rotor del motor anterior es de 1,710 RPM, ¿cuál es su deslizamiento porcentual s?', ['5.0%', '9.0%', '2.5%', '10.0%'], 0, 's = [(Ns - Nr) / Ns] × 100 = [(1,800 - 1,710) / 1,800] × 100 = (90 / 1,800) × 100 = 5.0%.', 'Deslizamiento en motores asíncronos', 'Desafiante', 'Máquinas Eléctricas', 'Deslizamiento rotórico'), ('Un compresor de aire de pistón tiene un rendimiento volumétrico de 0.85 y un desplazamiento teórico de 200 L/min. ¿Cuál es su caudal real?', ['170 L/min', '200 L/min', '185 L/min', '235 L/min'], 0, 'Caudal real = Desplazamiento × rendimiento = 200 L/min × 0.85 = 170 L/min.', 'Rendimiento volumétrico', 'Desafiante', 'Compresores y Neumática', 'Caudal efectivo'), ('¿Cuál es la conicidad C de un cono Morse si su diámetro mayor es D = 25 mm, el menor d = 20 mm y su longitud L = 100 mm (C = (D - d)/L)?', ['1 : 20 (o 0.05)', '1 : 10', '1 : 5', '1 : 50'], 0, 'C = (25 - 20) / 100 = 5 / 100 = 1 / 20 = 0.05.', 'Conicidad mecánica', 'Desafiante', 'Mecanizado en Torno', 'Conos Morse'), ('Para fresar una ranura chavetera de ancho 8 mm con una fresa de 8 mm en una sola pasada a 80 mm/min, la tasa de remoción de viruta Q a 4 mm de profundidad es:', ['2,560 mm³/min', '640 mm³/min', '1,280 mm³/min', '3,200 mm³/min'], 0, 'Q = ancho × profundidad × avance = 8 mm × 4 mm × 80 mm/min = 2,560 mm³/min.', 'Tasa de remoción de viruta', 'Desafiante', 'Fresado Industrial', 'Productividad'), ('En un circuito neumático, una electroválvula 5/2 de centro cerrado se utiliza principalmente para accionar:', ['Cilindros de doble efecto con parada intermedia', 'Cilindros de simple efecto', 'Motores rotativos continuos', 'Válvulas estranguladoras'], 0, 'Las válvulas 5/2 con 5 vías y 2 posiciones (o 5/3) gobiernan cilindros de doble efecto controlando avance, retroceso y bloqueo.', 'Válvulas direccionales neumáticas', 'Desafiante', 'Automatización Neumática', 'Electroválvulas'), ('Un tacómetro mide una frecuencia de pulsos f = 200 Hz en una rueda fónica de 60 dientes. ¿A qué RPM gira el eje (RPM = (f · 60) / Z)?', ['200 RPM', '1,200 RPM', '600 RPM', '3,600 RPM'], 0, 'RPM = (200 pulsos/s × 60 s/min) / 60 dientes = 12,000 / 60 = 200 RPM.', 'Sensores inductivos de velocidad', 'Desafiante', 'Instrumentación Automotriz', 'Ruedas fónicas')])
