# Script para agregar 20 preguntas rigurosas a cada uno de los 4 archivos
intermedio_extra = [
    ("Simplifica el radical utilizando propiedades de la multiplicación: √(72).",
     ["6√2", "12√2", "8√3", "36√2"], 0,
     "Descomponemos 72 en factores primos: 72 = 36 × 2. √(72) = √(36 × 2) = √36 × √2 = 6√2.",
     "Simplificación de radicales", "Intermedio", "Aritmética", "Radicación"),

    ("Resuelve la ecuación con incógnita en ambos miembros: 7x - 9 = 3x + 15.",
     ["x = 6", "x = 4", "x = 8", "x = 5"], 0,
     "Restamos 3x: 4x - 9 = 15. Sumamos 9: 4x = 24. Dividimos entre 4: x = 6.",
     "Ecuaciones lineales", "Intermedio", "Álgebra", "Ecuaciones de 1er grado"),

    ("Escribe el número 450,000 en notación científica.",
     ["4.5 × 10⁵", "45 × 10⁴", "4.5 × 10⁶", "0.45 × 10⁶"], 0,
     "La notación científica tiene un coeficiente entre 1 y 10: 4.5 × 10⁵.",
     "Notación científica", "Intermedio", "Aritmética", "Potencias de diez"),

    ("Convierte 0.0032 a notación científica.",
     ["3.2 × 10⁻³", "3.2 × 10⁻⁴", "32 × 10⁻⁴", "0.32 × 10⁻²"], 0,
     "Desplazamos la coma tres lugares a la derecha: 3.2 × 10⁻³.",
     "Notación científica para cantidades pequeñas", "Intermedio", "Aritmética", "Exponentes negativos"),

    ("Aplica el Teorema de Tales: Si dos rectas secantes son cortadas por paralelas y los segmentos en una son 4 y 6, y en la otra x y 9, ¿cuánto vale x?",
     ["x = 6", "x = 5", "x = 8", "x = 4.5"], 0,
     "Por proporcionalidad de Tales: 4 / 6 = x / 9 ⇒ x = (4 × 9) / 6 = 36 / 6 = 6.",
     "Teorema de Tales", "Intermedio", "Geometría Plana", "Proporcionalidad geométrica"),

    ("Calcula la media ponderada de un alumno que obtuvo nota 8 (peso 30%) y nota 10 (peso 70%).",
     ["9.4", "9.0", "8.8", "9.6"], 0,
     "Media ponderada = 8(0.30) + 10(0.70) = 2.4 + 7.0 = 9.4.",
     "Media ponderada", "Intermedio", "Estadística", "Promedios con peso"),

    ("¿Cuál es el área de un paralelogramo de base b = 14 cm y altura h = 8 cm?",
     ["112 cm²", "56 cm²", "44 cm²", "96 cm²"], 0,
     "Área = base × altura = 14 cm × 8 cm = 112 cm².",
     "Área de cuadriláteros", "Intermedio", "Geometría Plana", "Paralelogramos"),

    ("Factoriza extrayendo el máximo factor común: 12x³ - 18x².",
     ["6x²(2x - 3)", "6x(2x² - 3x)", "3x²(4x - 6)", "12x²(x - 2)"], 0,
     "El MCD de 12 y 18 es 6, y de x³ y x² es x². Factorizamos: 6x²(2x - 3).",
     "Factor común monomio", "Intermedio", "Álgebra", "Factorización"),

    ("Si un automóvil viaja a 90 km/h y tarda 4 horas, ¿cuánto tardaría a 120 km/h en el mismo trayecto?",
     ["3 horas", "3.5 horas", "2.5 horas", "5 horas"], 0,
     "Distancia = 90 × 4 = 360 km. Tiempo a 120 km/h: 360 / 120 = 3 horas.",
     "Proporcionalidad inversa en cinemática", "Intermedio", "Aritmética", "Velocidad y tiempo"),

    ("Calcula la suma de los ángulos interiores de un decágono (10 lados).",
     ["1,440°", "1,800°", "1,260°", "1,080°"], 0,
     "Suma = (n - 2) × 180° = (10 - 2) × 180° = 8 × 180° = 1,440°.",
     "Ángulos de polígonos", "Intermedio", "Geometría Plana", "Decágono"),

    ("¿Cuánto mide cada ángulo central de un octágono regular?",
     ["45°", "60°", "30°", "40°"], 0,
     "Ángulo central = 360° / n = 360° / 8 = 45°.",
     "Ángulo central", "Intermedio", "Geometría Plana", "Polígonos regulares"),

    ("Resuelve el sistema 2x2 por igualación: { y = 2x + 1 ; y = 3x - 4 }.",
     ["x = 5, y = 11", "x = 4, y = 9", "x = 3, y = 7", "x = 5, y = 9"], 0,
     "Igualamos: 2x + 1 = 3x - 4 ⇒ 1 + 4 = 3x - 2x ⇒ x = 5. Luego y = 2(5) + 1 = 11.",
     "Método de igualación", "Intermedio", "Álgebra", "Sistemas de ecuaciones"),

    ("Racionaliza el denominador de la fracción: 6 / √3.",
     ["2√3", "3√3", "√3", "6√3"], 0,
     "Multiplicamos numerador y denominador por √3: (6√3) / 3 = 2√3.",
     "Racionalización simple", "Intermedio", "Álgebra", "Radicales en el denominador"),

    ("¿Cuál es el valor de x en la proporción geométrica: 4 / x = 12 / 27?",
     ["x = 9", "x = 8", "x = 6", "x = 10"], 0,
     "Producto cruzado: 12x = 4 × 27 = 108 ⇒ x = 108 / 12 = 9.",
     "Proporciones geométricas", "Intermedio", "Aritmética", "Regla de tres"),

    ("En una bolsa hay 5 canicas rojas, 3 azules y 2 amarillas. ¿Cuál es la probabilidad de sacar una que NO sea roja?",
     ["5/10 (1/2 o 50%)", "3/10", "2/10", "4/10"], 0,
     "Canicas no rojas = 3 + 2 = 5. Total = 10. Probabilidad = 5/10 = 1/2 = 50%.",
     "Probabilidad de evento contrario", "Intermedio", "Probabilidad", "Regla del complemento"),

    ("Si un ángulo mide 120°, ¿a cuántos radianes equivale en términos de π?",
     ["2π/3 radianes", "3π/4 radianes", "5π/6 radianes", "π/3 radianes"], 0,
     "Multiplicamos por (π / 180°): 120 × (π / 180) = 12/18 π = 2π/3 radianes.",
     "Conversión de grados a radianes", "Intermedio", "Trigonometría", "Medida angular"),

    ("¿Cuál es el área total de un cubo de arista 4 cm?",
     ["96 cm²", "64 cm²", "16 cm²", "48 cm²"], 0,
     "El cubo tiene 6 caras cuadradas de área 4² = 16 cm². Área total = 6 × 16 = 96 cm².",
     "Área superficial del cubo", "Intermedio", "Geometría del Espacio", "Cubo"),

    ("En una progresión aritmética el primer término es a₁ = 3 y la diferencia es d = 5. ¿Cuál es el décimo término a₁₀?",
     ["48", "50", "45", "53"], 0,
     "a_n = a₁ + (n - 1)d ⇒ a₁₀ = 3 + (10 - 1)5 = 3 + 45 = 48.",
     "Progresiones aritméticas básicas", "Intermedio", "Álgebra", "Término general"),

    ("¿Cuál es el coeficiente del término de grado 2 en el polinomio 4x³ - 7x² + 5x - 8?",
     ["-7", "7", "-8", "4"], 0,
     "El término de grado 2 es -7x², por lo que su coeficiente es -7.",
     "Identificación de coeficientes", "Intermedio", "Álgebra", "Polinomios"),

    ("Si dos figuras son semejantes con razón de semejanza lineal k = 3, ¿cuál es la razón entre sus áreas?",
     ["9 (k²)", "3", "6", "27"], 0,
     "La razón entre las áreas de dos figuras semejantes es igual al cuadrado de la razón de semejanza lineal: k² = 3² = 9.",
     "Semejanza geométrica", "Intermedio", "Geometría Plana", "Razón de áreas")
]

bachillerato_extra = [
    ("En una progresión geométrica con a₁ = 2 y razón r = 3, ¿cuál es el quinto término a₅?",
     ["162", "486", "54", "81"], 0,
     "a_n = a₁ · r^(n-1) ⇒ a₅ = 2 · 3^(5-1) = 2 · 3⁴ = 2 · 81 = 162.",
     "Progresión geométrica", "Intermedio", "Álgebra", "Término enésimo"),

    ("Calcula la suma infinita de la serie geométrica convergente: 8 + 4 + 2 + 1 + ...",
     ["16", "15", "14", "32"], 0,
     "a₁ = 8 y r = 1/2 (|r| < 1). Suma S = a₁ / (1 - r) = 8 / (1 - 0.5) = 8 / 0.5 = 16.",
     "Series geométricas infinitas", "Intermedio", "Álgebra", "Suma infinita"),

    ("Resuelve la desigualdad con valor absoluto: |x - 3| ≤ 5.",
     ["[-2, 8]", "[-8, 2]", "(-2, 8)", "[3, 8]"], 0,
     "|u| ≤ c ⇔ -c ≤ u ≤ c. -5 ≤ x - 3 ≤ 5. Sumando 3: -2 ≤ x ≤ 8, es decir, [-2, 8].",
     "Desigualdades con valor absoluto", "Intermedio", "Álgebra", "Inecuaciones"),

    ("Aplica la identidad del seno del ángulo doble: sen(2θ) es idéntico a:",
     ["2 sen(θ) cos(θ)", "sen²(θ) - cos²(θ)", "2 sen(θ)", "sen²(θ) + cos²(θ)"], 0,
     "Es la identidad trigonométrica fundamental del ángulo doble: sen(2θ) = 2 sen(θ) cos(θ).",
     "Identidades del ángulo doble", "Intermedio", "Trigonometría", "Ángulo doble"),

    ("Aplica la identidad del coseno del ángulo doble: cos(2θ) es igual a:",
     ["cos²(θ) - sen²(θ)", "2 cos²(θ) + 1", "sen²(θ) - cos²(θ)", "2 sen(θ) cos(θ)"], 0,
     "Por deducción de cos(A + B) con A = B = θ: cos(2θ) = cos²(θ) - sen²(θ).",
     "Identidad de cos(2θ)", "Intermedio", "Trigonometría", "Coseno del doble"),

    ("¿Cuáles son las pendientes de las asíntotas de la hipérbola canónica x² / 16 - y² / 9 = 1?",
     ["m = ± 3/4", "m = ± 4/3", "m = ± 9/16", "m = ± 16/9"], 0,
     "Para la hipérbola x²/a² - y²/b² = 1, las asíntotas son y = ±(b/a)x. Con a = 4 y b = 3: m = ± 3/4.",
     "Asíntotas de la hipérbola", "Intermedio", "Geometría Analítica", "Hipérbola"),

    ("Calcula el producto escalar de los vectores u = (3, 4) y v = (2, -1) en R².",
     ["2", "10", "7", "-2"], 0,
     "u · v = (3)(2) + (4)(-1) = 6 - 4 = 2.",
     "Producto escalar en el plano", "Intermedio", "Álgebra Lineal", "Vectores en R²"),

    ("Calcula el ángulo θ entre los vectores u = (1, 0) y v = (1, 1).",
     ["45° (π/4 rad)", "90°", "30°", "60°"], 0,
     "cos θ = (u · v) / (||u|| ||v||) = (1·1 + 0·1) / (1 · √2) = 1/√2 = √2/2. θ = 45°.",
     "Ángulo entre vectores", "Intermedio", "Trigonometría Analítica", "Producto punto"),

    ("Calcula el determinante de la matriz 2x2: M = [[3, -2], [4, 5]].",
     ["23", "7", "15", "-7"], 0,
     "det(M) = (3)(5) - (-2)(4) = 15 - (-8) = 15 + 8 = 23.",
     "Determinantes 2x2", "Intermedio", "Álgebra Lineal", "Matrices"),

    ("Dada una variable aleatoria normal con media μ = 70 y desviación estándar σ = 5, ¿cuál es el valor tipificado Z para X = 80?",
     ["Z = +2.0", "Z = +1.5", "Z = +2.5", "Z = -2.0"], 0,
     "Fórmula de tipificación: Z = (X - μ) / σ = (80 - 70) / 5 = 10 / 5 = +2.0.",
     "Puntuación Z", "Intermedio", "Estadística", "Distribución normal"),

    ("¿Cuál es la longitud del lado recto (ancho focal) de la parábola y² = 12x?",
     ["12 unidades", "6 unidades", "3 unidades", "4 unidades"], 0,
     "La ecuación es y² = 4px con 4p = 12. La longitud del lado recto es |4p| = 12.",
     "Elementos de la parábola", "Intermedio", "Geometría Analítica", "Lado recto"),

    ("¿Cuál es la excentricidad 'e' de una circunferencia?",
     ["e = 0", "e = 1", "0 < e < 1", "e > 1"], 0,
     "En la circunferencia la distancia focal es nula (c = 0), por lo que e = c/a = 0.",
     "Excentricidad de cónicas", "Intermedio", "Geometría Analítica", "Cónicas"),

    ("Calcula la suma de los primeros 20 términos de la progresión aritmética: 2, 5, 8, 11, ...",
     ["610", "600", "590", "620"], 0,
     "a₁ = 2, d = 3. a₂₀ = 2 + 19(3) = 59. Suma S₂₀ = [20 × (2 + 59)] / 2 = 10 × 61 = 610.",
     "Suma de progresión aritmética", "Intermedio", "Álgebra", "Series aritméticas"),

    ("Encuentra el conjunto solución de la inecuación lineal doble: -1 < 2x + 3 ≤ 7.",
     ["(-2, 2]", "[-2, 2)", "(-1, 2]", "[-2, 5]"], 0,
     "Restamos 3 en los tres miembros: -4 < 2x ≤ 4. Dividimos entre 2: -2 < x ≤ 2. Intervalo: (-2, 2].",
     "Inecuaciones simultáneas", "Intermedio", "Álgebra", "Desigualdades compuestas"),

    ("¿Cuál es el dominio de la función irracional f(x) = √(2x - 8)?",
     ["[4, ∞)", "(4, ∞)", "[0, ∞)", "(-∞, 4]"], 0,
     "Para que la raíz cuadrada exista en los reales, el radicando debe ser no negativo: 2x - 8 ≥ 0 ⇒ 2x ≥ 8 ⇒ x ≥ 4.",
     "Dominio de funciones irracionales", "Intermedio", "Funciones", "Radicando no negativo"),

    ("Si log_a(8) = 3, ¿cuál es el valor de la base a?",
     ["a = 2", "a = 24", "a = 4", "a = √8"], 0,
     "Por definición de logaritmo: a³ = 8 ⇒ a = ∛8 = 2.",
     "Cálculo de la base del logaritmo", "Intermedio", "Álgebra", "Logaritmos"),

    ("¿Cuál es la amplitud de la función periódica f(x) = -4 cos(3x)?",
     ["4", "-4", "3", "2π/3"], 0,
     "La amplitud es el valor absoluto del coeficiente de la función trigonométrica: |-4| = 4.",
     "Amplitud de ondas trigonométricas", "Intermedio", "Trigonometría", "Funciones periódicas"),

    ("Al rotar 90° en sentido antihorario respecto al origen el punto P(3, 2), ¿cuáles son sus nuevas coordenadas?",
     ["P'(-2, 3)", "P'(2, -3)", "P'(-3, -2)", "P'(3, -2)"], 0,
     "La regla de rotación de 90° antihorario en el plano es (x, y) → (-y, x). Para (3, 2) resulta (-2, 3).",
     "Transformaciones geométricas", "Intermedio", "Geometría Analítica", "Rotaciones en el plano"),

    ("Calcula el número de subconjuntos posibles que tiene un conjunto de 6 elementos.",
     ["64", "36", "32", "12"], 0,
     "El conjunto potencia de un conjunto de n elementos tiene 2^n subconjuntos: 2⁶ = 64.",
     "Conjunto potencia y combinatoria", "Intermedio", "Probabilidad y Conteo", "Conjunto potencia"),

    ("En una distribución normal, ¿qué porcentaje aproximado de los datos se encuentra dentro del intervalo (μ - σ, μ + σ)?",
     ["Aproximadamente 68.3%", "Aproximadamente 95.4%", "Aproximadamente 99.7%", "Exactamente 50%"], 0,
     "Por la regla empírica 68-95-99.7 de la distribución normal, el 68.3% de la población se halla a menos de 1 desviación típica de la media.",
     "Regla empírica normal", "Intermedio", "Estadística", "Campana de Gauss")
]

tecnico_extra = [
    ("En una rosca métrica M12 × 1.75, ¿cuál es el paso de rosca P?",
     ["1.75 mm", "12 mm", "10.25 mm", "1.50 mm"], 0,
     "En la designación métrica ISO, el primer número indica el diámetro nominal exterior (12 mm) y el segundo el paso de avance (1.75 mm).",
     "Roscas métricas ISO", "Desafiante", "Mecánica Técnica", "Normalización de roscas"),

    ("Para taladrar el agujero previo a roscar con un macho métrico M10 × 1.5, ¿cuál es el diámetro de broca recomendado (d = D - P)?",
     ["8.5 mm", "10.0 mm", "9.0 mm", "7.5 mm"], 0,
     "Diámetro de broca previo = Diámetro nominal - Paso = 10 mm - 1.5 mm = 8.5 mm.",
     "Mecanizado de roscas interiores", "Desafiante", "Taller Mecánico", "Taladrado para machos"),

    ("Un motor eléctrico trifásico conectado en delta (triángulo) consume una corriente de línea I_L = 17.32 A. ¿Cuál es la corriente de fase I_fase (I_fase = I_L / √3)?",
     ["10.0 A", "17.32 A", "30.0 A", "8.66 A"], 0,
     "En conexión delta: I_L = √3 × I_fase ⇒ I_fase = 17.32 / 1.732 = 10.0 A.",
     "Conexión delta trifásica", "Desafiante", "Electrotecnia", "Corrientes de fase y línea"),

    ("Calcula la caída de tensión ΔV en una línea monofásica de cobre (ρ = 0.0175 Ω·mm²/m) de 50 m de longitud, sección 4 mm² y corriente de 16 A (ΔV = 2·I·L·ρ / S).",
     ["7.0 V", "3.5 V", "14.0 V", "1.75 V"], 0,
     "ΔV = (2 × 16 × 50 × 0.0175) / 4 = 28 / 4 = 7.0 Voltios.",
     "Caída de tensión en conductores", "Desafiante", "Instalaciones Eléctricas", "Dimensionamiento de cables"),

    ("¿Cuál es el porcentaje de caída de tensión si la tensión nominal es 230 V y la caída calculada es de 6.9 V?",
     ["3.0%", "5.0%", "1.5%", "4.0%"], 0,
     "%ΔV = (6.9 / 230) × 100 = 3.0%.",
     "Porcentaje de caída de tensión", "Desafiante", "Instalaciones Eléctricas", "Límites normativos"),

    ("Una barra de acero de 10 metros de longitud experimenta una variación de temperatura de ΔT = 50 °C (α = 12 × 10⁻⁶ 1/°C). ¿Cuánto se dilata linealmente (ΔL)?",
     ["6.0 mm (0.006 m)", "12.0 mm", "3.0 mm", "60.0 mm"], 0,
     "ΔL = L₀ · α · ΔT = 10 m × (12 × 10⁻⁶) × 50 = 0.006 m = 6.0 mm.",
     "Dilatación térmica lineal", "Desafiante", "Termotecnia", "Expansión térmica de tuberías"),

    ("Un manómetro en un circuito neumático marca una presión manométrica de 5.5 bar. Si la presión atmosférica es 1.01 bar, ¿cuál es la presión absoluta?",
     ["6.51 bar", "4.49 bar", "5.50 bar", "7.00 bar"], 0,
     "P_absoluta = P_manométrica + P_atmosférica = 5.5 bar + 1.01 bar = 6.51 bar.",
     "Presión absoluta y relativa", "Desafiante", "Neumática", "Medición de presiones"),

    ("Un tornillo sin fin de 1 entrada gira a 1,400 RPM y engrana con una corona de 35 dientes. ¿A qué velocidad rota el eje de salida de la corona?",
     ["40 RPM", "350 RPM", "70 RPM", "20 RPM"], 0,
     "Relación: N_salida = N_entrada × (entradas / Z) = 1,400 × (1 / 35) = 40 RPM.",
     "Reductor sin fin-corona", "Desafiante", "Mecánica Técnica", "Transmisiones mecánicas"),

    ("Para cortar una chapa de acero de espesor e = 2 mm con una longitud de corte perimetral L = 300 mm y resistencia al cizallamiento τ = 400 N/mm², calcula la fuerza de corte.",
     ["240,000 N (240 kN)", "120,000 N", "60,000 N", "480,000 N"], 0,
     "F = L × e × τ = 300 mm × 2 mm × 400 N/mm² = 240,000 N = 240 kN.",
     "Fuerza de troquelado y cizallado", "Desafiante", "Matricería y Troquelería", "Corte de chapa"),

    ("Calcula el tiempo de taladrado en minutos para perforar una placa de espesor h = 40 mm a avance f = 0.2 mm/rev y N = 500 RPM (T = h / (f · N)).",
     ["0.4 minutos (24 segundos)", "0.8 minutos", "2.0 minutos", "1.0 minuto"], 0,
     "Velocidad de avance Vf = f × N = 0.2 × 500 = 100 mm/min. Tiempo = 40 mm / 100 mm/min = 0.4 min.",
     "Tiempos de fabricación", "Desafiante", "Mecanizado", "Tiempo principal de corte"),

    ("En una instalación solar fotovoltaica, 6 paneles de 400 W cada uno están conectados en serie. ¿Cuál es la potencia pico total del string?",
     ["2,400 Wp (2.4 kWp)", "400 Wp", "1,200 Wp", "3,600 Wp"], 0,
     "En serie la potencia se acumula sumando la de cada módulo: 6 × 400 W = 2,400 Wp = 2.4 kWp.",
     "Energía solar fotovoltaica", "Desafiante", "Energías Renovables", "Strings fotovoltaicos"),

    ("Si un panel solar entrega Voc = 40 V a circuito abierto y conectas 5 paneles en serie, ¿cuál es el voltaje total a circuito abierto del conjunto?",
     ["200 V", "40 V", "80 V", "240 V"], 0,
     "En conexión serie de fuentes de tensión continua, los voltajes se suman: 5 × 40 V = 200 V.",
     "Conexión de generadores DC", "Desafiante", "Energías Renovables", "Voltaje en serie"),

    ("Calcula la potencia disipada por efecto Joule en una resistencia de frenado automotriz de 5 Ω por la que circula una corriente de 10 A (P = I² · R).",
     ["500 W", "50 W", "250 W", "100 W"], 0,
     "P = I² × R = 10² × 5 = 100 × 5 = 500 Vatios.",
     "Efecto Joule", "Desafiante", "Electricidad Automotriz", "Disipación de calor"),

    ("En un motor de inducción con 4 polos alimentado a f = 60 Hz, ¿cuál es la velocidad de sincronismo Ns en RPM (Ns = 120·f / P)?",
     ["1,800 RPM", "3,600 RPM", "1,200 RPM", "1,500 RPM"], 0,
     "Ns = (120 × 60) / 4 = 7,200 / 4 = 1,800 RPM.",
     "Velocidad de sincronismo", "Desafiante", "Máquinas Eléctricas", "Motores de inducción"),

    ("Si la velocidad real del rotor del motor anterior es de 1,710 RPM, ¿cuál es su deslizamiento porcentual s?",
     ["5.0%", "9.0%", "2.5%", "10.0%"], 0,
     "s = [(Ns - Nr) / Ns] × 100 = [(1,800 - 1,710) / 1,800] × 100 = (90 / 1,800) × 100 = 5.0%.",
     "Deslizamiento en motores asíncronos", "Desafiante", "Máquinas Eléctricas", "Deslizamiento rotórico"),

    ("Un compresor de aire de pistón tiene un rendimiento volumétrico de 0.85 y un desplazamiento teórico de 200 L/min. ¿Cuál es su caudal real?",
     ["170 L/min", "200 L/min", "185 L/min", "235 L/min"], 0,
     "Caudal real = Desplazamiento × rendimiento = 200 L/min × 0.85 = 170 L/min.",
     "Rendimiento volumétrico", "Desafiante", "Compresores y Neumática", "Caudal efectivo"),

    ("¿Cuál es la conicidad C de un cono Morse si su diámetro mayor es D = 25 mm, el menor d = 20 mm y su longitud L = 100 mm (C = (D - d)/L)?",
     ["1 : 20 (o 0.05)", "1 : 10", "1 : 5", "1 : 50"], 0,
     "C = (25 - 20) / 100 = 5 / 100 = 1 / 20 = 0.05.",
     "Conicidad mecánica", "Desafiante", "Mecanizado en Torno", "Conos Morse"),

    ("Para fresar una ranura chavetera de ancho 8 mm con una fresa de 8 mm en una sola pasada a 80 mm/min, la tasa de remoción de viruta Q a 4 mm de profundidad es:",
     ["2,560 mm³/min", "640 mm³/min", "1,280 mm³/min", "3,200 mm³/min"], 0,
     "Q = ancho × profundidad × avance = 8 mm × 4 mm × 80 mm/min = 2,560 mm³/min.",
     "Tasa de remoción de viruta", "Desafiante", "Fresado Industrial", "Productividad"),

    ("En un circuito neumático, una electroválvula 5/2 de centro cerrado se utiliza principalmente para accionar:",
     ["Cilindros de doble efecto con parada intermedia", "Cilindros de simple efecto", "Motores rotativos continuos", "Válvulas estranguladoras"], 0,
     "Las válvulas 5/2 con 5 vías y 2 posiciones (o 5/3) gobiernan cilindros de doble efecto controlando avance, retroceso y bloqueo.",
     "Válvulas direccionales neumáticas", "Desafiante", "Automatización Neumática", "Electroválvulas"),

    ("Un tacómetro mide una frecuencia de pulsos f = 200 Hz en una rueda fónica de 60 dientes. ¿A qué RPM gira el eje (RPM = (f · 60) / Z)?",
     ["200 RPM", "1,200 RPM", "600 RPM", "3,600 RPM"], 0,
     "RPM = (200 pulsos/s × 60 s/min) / 60 dientes = 12,000 / 60 = 200 RPM.",
     "Sensores inductivos de velocidad", "Desafiante", "Instrumentación Automotriz", "Ruedas fónicas")
]

universitario_extra = [
    ("Aplica la primera parte del Teorema Fundamental del Cálculo para hallar d/dx [ ∫ (de 1 a x) √(t³ + 1) dt ].",
     ["√(x³ + 1)", "3x² / [2√(x³ + 1)]", "√(x³ + 1) - √2", "(1/3)(x³ + 1)^(3/2)"], 0,
     "Por el teorema fundamental del cálculo: d/dx [ ∫_a^x f(t) dt ] = f(x). Por tanto, la derivada es √(x³ + 1).",
     "Teorema Fundamental del Cálculo", "Desafiante", "Cálculo Integral", "Derivada de integrales"),

    ("Para resolver la integral ∫ [1 / (x² √(4 - x²))] dx, ¿cuál es la sustitución trigonométrica adecuada?",
     ["x = 2 sen(θ)", "x = 2 tan(θ)", "x = 2 sec(θ)", "x = 4 sen(θ)"], 0,
     "Para formas del tipo √(a² - x²) se utiliza x = a sen(θ). En este caso a = 2, por lo que x = 2 sen(θ).",
     "Sustitución trigonométrica", "Desafiante", "Cálculo Integral", "Técnicas de integración"),

    ("Para formas del tipo √(x² + a²), ¿cuál es la sustitución trigonométrica canónica?",
     ["x = a tan(θ)", "x = a sen(θ)", "x = a sec(θ)", "x = a cos(θ)"], 0,
     "La identidad 1 + tan²(θ) = sec²(θ) permite simplificar √(a² tan²θ + a²) = a sec(θ) empleando x = a tan(θ).",
     "Sustituciones con tangente", "Desafiante", "Cálculo Integral", "Integración algebraica"),

    ("Aplica el Criterio del Cociente (de D'Alembert) para estudiar la serie ∑ (de n=1 a ∞) [n / 2ⁿ]. El límite L = lim |a_{n+1} / a_n| es:",
     ["1/2 (la serie converge)", "2 (diverge)", "1 (criterio no concluyente)", "0"], 0,
     "L = lim [(n+1)/2^(n+1)] / [n/2^n] = lim [(n+1)/(2n)] = 1/2. Como L = 1/2 < 1, la serie converge absolutamente.",
     "Criterio de D'Alembert", "Desafiante", "Cálculo Infinitesimal", "Series infinitas"),

    ("Calcula el radio de convergencia R de la serie de potencias ∑ (de n=0 a ∞) (xⁿ / n!).",
     ["R = ∞ (converge para todo x real)", "R = 1", "R = 0", "R = e"], 0,
     "Esta serie de potencias representa a la función exponencial e^x, la cual converge absolutamente en toda la recta real (R = ∞).",
     "Series de Taylor y Maclaurin", "Desafiante", "Cálculo Infinitesimal", "Radio de convergencia"),

    ("Dada la función f(x, y) = x³ - 3xy + y³, calcula la matriz hessiana H(x, y) de segundas derivadas parciales.",
     ["[[6x, -3], [-3, 6y]]", "[[3x², -3y], [-3x, 3y²]]", "[[6x, 0], [0, 6y]]", "[[-3, 6x], [6y, -3]]"], 0,
     "f_xx = 6x, f_xy = -3, f_yx = -3, f_yy = 6y. La matriz hessiana es [[6x, -3], [-3, 6y]].",
     "Matriz hessiana", "Desafiante", "Cálculo Multivariado", "Segundas derivadas parciales"),

    ("Calcula la derivada direccional de f(x, y) = 2x² + 3y² en el punto (1, 1) en la dirección del vector unitario u = (1/√2, 1/√2).",
     ["7√2", "5√2", "10", "7"], 0,
     "∇f = (4x, 6y). En (1,1): ∇f = (4, 6). D_u f = ∇f · u = 4(1/√2) + 6(1/√2) = 10/√2 = 5√2.",
     "Derivada direccional", "Desafiante", "Cálculo Multivariado", "Variación direccional"),

    ("Una ecuación diferencial M(x, y)dx + N(x, y)dy = 0 es exacta si y solo si se cumple la condición de Cauchy-Schwarz:",
     ["∂M/∂y = ∂N/∂x", "∂M/∂x = ∂N/∂y", "M · N = 0", "∂²M/∂x² = ∂²N/∂y²"], 0,
     "Por igualdad de derivadas cruzadas de la función potencial f (donde ∂f/∂x = M y ∂f/∂y = N), se requiere ∂M/∂y = ∂N/∂x.",
     "Ecuaciones diferenciales exactas", "Desafiante", "Ecuaciones Diferenciales", "Condición de exactitud"),

    ("Calcula la transformada de Laplace de la derivada: L{f'(t)} para s > 0.",
     ["s · F(s) - f(0)", "s · F(s)", "F(s) / s", "s² · F(s) - f'(0)"], 0,
     "Por integración por partes en la definición de la transformada: L{f'(t)} = s F(s) - f(0).",
     "Propiedades de la transformada de Laplace", "Desafiante", "Ecuaciones Diferenciales", "Transformada de derivadas"),

    ("Calcula la transformada de Laplace de f(t) = sen(ωt).",
     ["ω / (s² + ω²)", "s / (s² + ω²)", "ω / (s² - ω²)", "1 / (s + ω)"], 0,
     "L{sen(ωt)} = ω / (s² + ω²) para s > 0.",
     "Transformadas trigonométricas", "Desafiante", "Ecuaciones Diferenciales", "Fórmulas canónicas de Laplace"),

    ("¿Cuál es la solución particular y_p(x) de la EDO no homogénea y'' + y = 5?",
     ["y_p = 5", "y_p = 5x", "y_p = 5 sen(x)", "y_p = e^(5x)"], 0,
     "Al ser el término independiente constante (5), ensayamos una constante y_p = A. Como y''_p = 0: 0 + A = 5 ⇒ A = 5.",
     "Coeficientes indeterminados", "Desafiante", "Ecuaciones Diferenciales", "Solución particular"),

    ("El Teorema de Green en el plano relaciona una integral de línea sobre una curva cerrada C con una integral doble sobre la región D mediante:",
     ["∮ (M dx + N dy) = ∬ (∂N/∂x - ∂M/∂y) dA", "∮ (M dx + N dy) = ∬ (∂M/∂x + ∂N/∂y) dA", "∮ F · dr = 0", "∬ ∇f dA = 0"], 0,
     "El teorema de Green establece que la circulación en sentido antihorario a lo largo de C es igual a la integral doble del rotacional bidimensional sobre D.",
     "Teorema de Green", "Desafiante", "Cálculo Multivariado", "Integrales de línea y superficie"),

    ("¿Cuál es la divergencia div(F) del campo vectorial F(x, y, z) = (x², 3y, 2z³)?",
     ["2x + 3 + 6z²", "(2x, 3, 6z²)", "2x · 3 · 6z²", "0"], 0,
     "div(F) = ∇ · F = ∂(x²)/∂x + ∂(3y)/∂y + ∂(2z³)/∂z = 2x + 3 + 6z².",
     "Divergencia de campos vectoriales", "Desafiante", "Cálculo Vectorial", "Operador divergencia"),

    ("El rotacional rot(F) = ∇ × F de un campo de gradientes conservativo F = ∇f es siempre igual a:",
     ["El vector cero (0, 0, 0)", "1", "∇²f", "Indefinido"], 0,
     "Por identidad vectorial fundamental en cálculo multivariado: rot(∇f) = 0 para cualquier campo escalar con segundas derivadas continuas.",
     "Campos conservativos e irrotacionales", "Desafiante", "Cálculo Vectorial", "Rotacional del gradiente"),

    ("¿Qué nombre recibe la integral de contorno compleja ∮_C f(z) dz alrededor de un polo simple con residuo Res(f, z₀)?",
     ["2πi · Res(f, z₀)", "πi · Res(f, z₀)", "Res(f, z₀)", "0"], 0,
     "Por el Teorema de los Residuos de Cauchy: ∮_C f(z) dz = 2πi ∑ Res(f, z_k).",
     "Teorema de los Residuos de Cauchy", "Desafiante", "Análisis Complejo", "Integración de contornos"),

    ("Calcula el producto vectorial (cruz) u × v de los vectores canónicos u = (1, 0, 0) y v = (0, 1, 0).",
     ["(0, 0, 1) (vector k)", "(0, 0, -1)", "(1, 1, 0)", "0"], 0,
     "Por la regla de la mano derecha en R³: i × j = k, es decir, (0, 0, 1).",
     "Producto vectorial en R³", "Desafiante", "Álgebra Lineal", "Vectores ortogonales"),

    ("Calcula el valor de la serie numérica de Taylor en x = 0 para e^x: ∑ (de n=0 a ∞) (1 / n!).",
     ["e (≈ 2.71828)", "1", "∞", "0"], 0,
     "Evaluando la serie de Maclaurin de e^x en x = 1: e¹ = 1 + 1/1! + 1/2! + 1/3! + ... = e.",
     "Serie de Maclaurin de la exponencial", "Desafiante", "Cálculo Infinitesimal", "Suma de series"),

    ("Una matriz hermitiana A en los números complejos cumple por definición:",
     ["A = (A*)^T (es igual a su transpuesta conjugada)", "A = -A", "A² = I", "det(A) = 0"], 0,
     "Una matriz hermitiana o autoadjunta es igual a su transpuesta conjugada A = A^H y todos sus autovalores son reales.",
     "Matrices hermitianas", "Desafiante", "Álgebra Lineal Avanzada", "Espacios hermitianos"),

    ("El proceso de ortogonalización de Gram-Schmidt se utiliza en álgebra lineal para:",
     ["Construir una base ortogonal u ortonormal a partir de una base dada", "Calcular la inversa de una matriz", "Diagonalizar matrices no simétricas", "Hallar los autovalores"], 0,
     "El algoritmo de Gram-Schmidt toma un conjunto linealmente independiente y genera un conjunto ortogonal que genera el mismo subespacio.",
     "Ortogonalización de Gram-Schmidt", "Desafiante", "Álgebra Lineal", "Bases ortonormales"),

    ("Calcula la integral doble: ∬ (de 0 a 1 para x, y de 0 a 2 para y) (2x + y) dy dx.",
     ["3", "4", "2", "6"], 0,
     "Integral interior respecto a y: [2xy + y²/2]₀² = 4x + 2. Integral exterior respecto a x: ∫₀¹ (4x + 2) dx = [2x² + 2x]₀¹ = 2 + 2 = 4 (espera: 2(1)² + 2(1) = 4. Corregido a 4).",
     "Integrales dobles iteradas", "Desafiante", "Cálculo Multivariado", "Teorema de Fubini")
]

# Corregir la última pregunta para que la respuesta exacta coincida
universitario_extra[-1] = (
    "Calcula la integral doble: ∬ (de 0 a 1 para x, y de 0 a 2 para y) (2x + y) dy dx.",
    ["4", "3", "2", "6"], 0,
    "Integral interior respecto a y: [2xy + y²/2] de 0 a 2 = 4x + 2. Integral exterior respecto a x: ∫ (de 0 a 1) (4x + 2) dx = [2x² + 2x] de 0 a 1 = 2(1) + 2(1) = 4.",
    "Integrales dobles iteradas", "Desafiante", "Cálculo Multivariado", "Teorema de Fubini"
)

# Appending to the respective files
with open('./scripts/generators/math_intermedio_data.py', 'a', encoding='utf-8') as f:
    import json
    f.write("\nintermedio_new_raw.extend(" + repr(intermedio_extra) + ")\n")

with open('./scripts/generators/math_bachillerato_data.py', 'a', encoding='utf-8') as f:
    f.write("\nbachillerato_new_raw.extend(" + repr(bachillerato_extra) + ")\n")

with open('./scripts/generators/math_tecnico_data.py', 'a', encoding='utf-8') as f:
    f.write("\ntecnico_new_raw.extend(" + repr(tecnico_extra) + ")\n")

with open('./scripts/generators/math_universitario_data.py', 'a', encoding='utf-8') as f:
    f.write("\nuniversitario_new_raw.extend(" + repr(universitario_extra) + ")\n")

print("✓ 20 preguntas extra agregadas a cada uno de los 4 archivos.")
