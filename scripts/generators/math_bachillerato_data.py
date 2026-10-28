# 80 Preguntas Pedagógicas Únicas: Matemáticas Bachillerato (21 a 100)
bachillerato_new_raw = [
    # 21-35: Factorización y productos notables
    ("Desarrolla el producto notable del binomio al cuadrado: (2x - 3y)².",
     ["4x² - 12xy + 9y²", "4x² - 9y²", "4x² + 12xy + 9y²", "4x² - 6xy + 9y²"], 0,
     "(a - b)² = a² - 2ab + b² = (2x)² - 2(2x)(3y) + (3y)² = 4x² - 12xy + 9y².",
     "Productos notables", "Intermedio", "Álgebra", "Binomio al cuadrado"),

    ("Factoriza completamente la diferencia de cuadrados: 49x² - 36y².",
     ["(7x - 6y)(7x + 6y)", "(7x - 6y)²", "(49x - 36y)(x + y)", "(7x + 6y)²"], 0,
     "a² - b² = (a - b)(a + b). √49x² = 7x y √36y² = 6y. Queda (7x - 6y)(7x + 6y).",
     "Factorización de binomios", "Intermedio", "Álgebra", "Diferencia de cuadrados"),

    ("Factoriza el trinomio de la forma x² + bx + c: x² - 9x + 20.",
     ["(x - 4)(x - 5)", "(x + 4)(x + 5)", "(x - 2)(x - 10)", "(x - 1)(x - 20)"], 0,
     "Buscamos dos números que multiplicados den +20 y sumados den -9: (-4) y (-5). Queda (x - 4)(x - 5).",
     "Factorización de trinomios simples", "Intermedio", "Álgebra", "Trinomio cuadrático"),

    ("Factoriza por agrupación de términos: ax + ay + bx + by.",
     ["(a + b)(x + y)", "(a + x)(b + y)", "(ax + by)(a + b)", "ab(x + y)"], 0,
     "Agrupamos: a(x + y) + b(x + y) = (a + b)(x + y).",
     "Factor común por agrupación", "Intermedio", "Álgebra", "Factorización"),

    ("Simplifica la fracción algebraica: (x² - 16) / (x - 4), con x ≠ 4.",
     ["x + 4", "x - 4", "x + 16", "4"], 0,
     "Factorizamos el numerador: (x - 4)(x + 4) / (x - 4) = x + 4.",
     "Fracciones algebraicas", "Intermedio", "Álgebra", "Simplificación racional"),

    ("Desarrolla el producto de binomios con término común: (x + 7)(x - 3).",
     ["x² + 4x - 21", "x² - 4x - 21", "x² + 10x - 21", "x² - 21"], 0,
     "(x + a)(x + b) = x² + (a+b)x + ab = x² + (7 - 3)x + (7)(-3) = x² + 4x - 21.",
     "Productos notables", "Intermedio", "Álgebra", "Binomios con término común"),

    ("Factoriza la suma de cubos: x³ + 27.",
     ["(x + 3)(x² - 3x + 9)", "(x + 3)³", "(x + 3)(x² + 3x + 9)", "(x - 3)(x² + 3x + 9)"], 0,
     "a³ + b³ = (a + b)(a² - ab + b²). Para x³ + 3³: (x + 3)(x² - 3x + 9).",
     "Suma de cubos", "Intermedio", "Álgebra", "Factorización cúbica"),

    ("Al factorizar el trinomio cuadrado perfecto 9x² + 30x + 25 se obtiene:",
     ["(3x + 5)²", "(3x - 5)²", "(9x + 5)²", "(3x + 25)²"], 0,
     "√9x² = 3x, √25 = 5. Doble producto: 2(3x)(5) = 30x (coincide). Por tanto, es (3x + 5)².",
     "Trinomio cuadrado perfecto", "Intermedio", "Álgebra", "Factorización de TCP"),

    ("Simplifica la expresión: (2x² + 6x) / (2x), para x ≠ 0.",
     ["x + 3", "2x + 3", "x + 6", "2x + 6"], 0,
     "Factorizamos factor común en numerador: 2x(x + 3) / (2x) = x + 3.",
     "Factor común monomio", "Intermedio", "Álgebra", "Fracciones racionales"),

    ("Factoriza el trinomio de la forma ax² + bx + c: 2x² + 5x + 3.",
     ["(2x + 3)(x + 1)", "(2x + 1)(x + 3)", "(2x - 3)(x - 1)", "(x + 3)(x + 2)"], 0,
     "Descomponemos el término medio: 2x² + 2x + 3x + 3 = 2x(x + 1) + 3(x + 1) = (2x + 3)(x + 1).",
     "Trinomio compuesto", "Intermedio", "Álgebra", "Factorización de trinomios"),

    # 36-50: Ecuaciones cuadráticas, sistemas e inecuaciones
    ("Aplica la fórmula general para hallar las raíces de: x² - 6x + 8 = 0.",
     ["x₁ = 4, x₂ = 2", "x₁ = -4, x₂ = -2", "x₁ = 8, x₂ = 1", "x₁ = 6, x₂ = 8"], 0,
     "x = [6 ± √(36 - 32)] / 2 = [6 ± √4] / 2 = (6 ± 2) / 2 ⇒ x₁ = 4, x₂ = 2.",
     "Ecuación cuadrática por fórmula general", "Intermedio", "Álgebra", "Fórmula cuadrática"),

    ("¿Qué indica un discriminante Δ < 0 (negativo) en una ecuación de segundo grado ax² + bx + c = 0?",
     ["Que la ecuación no tiene soluciones reales (sus raíces son complejas conjugadas)", "Que tiene dos soluciones reales distintas", "Que tiene una única solución real doble", "Que una solución es cero"], 0,
     "Si b² - 4ac < 0, la raíz cuadrada del discriminante no pertenece a los números reales, indicando raíces complejas.",
     "Naturaleza de las raíces", "Intermedio", "Álgebra", "Discriminante"),

    ("Resuelve el sistema lineal 2x2: { x + y = 10 ; x - y = 4 }.",
     ["x = 7, y = 3", "x = 6, y = 4", "x = 8, y = 2", "x = 5, y = 5"], 0,
     "Sumando ambas ecuaciones: 2x = 14 ⇒ x = 7. Sustituyendo: 7 + y = 10 ⇒ y = 3.",
     "Sistemas de ecuaciones 2x2", "Intermedio", "Álgebra", "Método de reducción"),

    ("Resuelve la inecuación lineal de primer grado: 3x - 5 > 7.",
     ["x > 4", "x < 4", "x > 12", "x ≥ 4"], 0,
     "Sumamos 5: 3x > 12. Dividimos entre 3 (positivo, no cambia el sentido): x > 4.",
     "Inecuaciones lineales", "Intermedio", "Álgebra", "Desigualdades"),

    ("Al resolver la inecuación -2x ≤ 8, el conjunto solución es:",
     ["x ≥ -4", "x ≤ -4", "x ≥ 4", "x ≤ 4"], 0,
     "Al dividir o multiplicar ambos miembros por un número negativo (-2), el sentido de la desigualdad se invierte: x ≥ -4.",
     "Propiedades de las desigualdades", "Intermedio", "Álgebra", "Multiplicación por negativos"),

    ("Encuentra las soluciones de la ecuación cuadrática pura: 3x² - 75 = 0.",
     ["x = ±5", "x = 5", "x = ±25", "x = ±15"], 0,
     "3x² = 75 ⇒ x² = 25 ⇒ x = ±√25 = ±5.",
     "Ecuaciones cuadráticas incompletas", "Intermedio", "Álgebra", "Raíces puras"),

    ("Resuelve por factorización la ecuación cuadrática mixta: 2x² - 8x = 0.",
     ["x = 0 y x = 4", "x = 2 y x = 4", "x = 0 y x = -4", "x = ±4"], 0,
     "Factorizamos 2x: 2x(x - 4) = 0 ⇒ 2x = 0 (x = 0) o x - 4 = 0 (x = 4).",
     "Factorización cuadrática mixta", "Intermedio", "Álgebra", "Ecuaciones incompletas"),

    ("¿Cuál es el valor de x en el sistema { 2x + 3y = 13 ; y = 3 }?",
     ["x = 2", "x = 3", "x = 1", "x = 4"], 0,
     "Sustituimos y = 3: 2x + 3(3) = 13 ⇒ 2x + 9 = 13 ⇒ 2x = 4 ⇒ x = 2.",
     "Método de sustitución", "Intermedio", "Álgebra", "Sistemas lineales"),

    ("¿Qué tipo de sistema de ecuaciones representa un par de rectas paralelas no coincidentes en el plano?",
     ["Sistema incompatible (sin solución)", "Sistema compatible determinado (solución única)", "Sistema compatible indeterminado (infinitas soluciones)", "Sistema dependiente"], 0,
     "Las rectas paralelas tienen la misma pendiente pero distinta ordenada al origen, por lo que nunca se intersectan.",
     "Interpretación geométrica de sistemas", "Intermedio", "Álgebra", "Compatibilidad de sistemas"),

    ("Determina el conjunto solución de la inecuación cuadrática: x² - 4 < 0.",
     ["(-2, 2)", "[-2, 2]", "(-∞, -2) U (2, ∞)", "(0, 4)"], 0,
     "Puntos críticos: x = -2 y x = 2. Evaluando intervalos, el producto (x - 2)(x + 2) es negativo en el intervalo abierto (-2, 2).",
     "Inecuaciones cuadráticas", "Intermedio", "Álgebra", "Intervalos solución"),

    # 51-65: Funciones, dominio, rango y logaritmos
    ("¿Cuál es el dominio de la función racional f(x) = 1 / (x - 5)?",
     ["Todos los reales excepto x = 5 (ℝ \\ {5})", "Todos los reales (ℝ)", "[5, ∞)", "(-∞, 5)"], 0,
     "El denominador no puede ser cero: x - 5 ≠ 0 ⇒ x ≠ 5. Por tanto el dominio es ℝ \\ {5}.",
     "Dominio de funciones racionales", "Intermedio", "Funciones", "Restricción de dominio"),

    ("¿Cuál es el vértice de la parábola f(x) = 2x² - 8x + 5?",
     ["V(2, -3)", "V(-2, 29)", "V(2, 5)", "V(4, 5)"], 0,
     "x_v = -b / (2a) = -(-8) / (2×2) = 8 / 4 = 2. y_v = 2(2)² - 8(2) + 5 = 8 - 16 + 5 = -3. Vértice: V(2, -3).",
     "Vértice de función cuadrática", "Intermedio", "Funciones", "Parábolas"),

    ("¿Cuál es la asíntota vertical de la función f(x) = (3x + 1) / (x + 2)?",
     ["x = -2", "x = 2", "y = 3", "x = -1/3"], 0,
     "La asíntota vertical ocurre donde el denominador se anula y el numerador no es cero: x + 2 = 0 ⇒ x = -2.",
     "Asíntotas verticales", "Intermedio", "Funciones", "Funciones racionales"),

    ("Calcula el valor de la expresión logarítmica: log₁₀(1,000) - log₁₀(10).",
     ["2", "3", "1", "100"], 0,
     "log₁₀(1,000) = 3 y log₁₀(10) = 1. Restando: 3 - 1 = 2.",
     "Propiedades de logaritmos", "Intermedio", "Álgebra", "Logaritmos comunes"),

    ("Aplica la propiedad del logaritmo de un producto: log_b(x · y) equivale a:",
     ["log_b(x) + log_b(y)", "log_b(x) · log_b(y)", "log_b(x) - log_b(y)", "[log_b(x)]^y"], 0,
     "El logaritmo de un producto es igual a la suma de los logaritmos de los factores.",
     "Leyes de logaritmos", "Intermedio", "Álgebra", "Logaritmo de un producto"),

    ("Resuelve la ecuación logarítmica: log₂(x) = 4.",
     ["x = 16", "x = 8", "x = 2", "x = 64"], 0,
     "Por definición de logaritmo: 2⁴ = x ⇒ x = 16.",
     "Ecuaciones logarítmicas básicas", "Intermedio", "Álgebra", "Definición de logaritmo"),

    ("Resuelve la ecuación exponencial: 3^(x + 1) = 27.",
     ["x = 2", "x = 3", "x = 1", "x = 4"], 0,
     "27 = 3³. Por igualdad de bases: x + 1 = 3 ⇒ x = 2.",
     "Ecuaciones exponenciales", "Intermedio", "Álgebra", "Bases iguales"),

    ("¿Cuál es el rango de la función cuadrática f(x) = x² + 4?",
     ["[4, ∞)", "[0, ∞)", "(-∞, 4]", "Todos los reales (ℝ)"], 0,
     "Como x² ≥ 0 para todo x real, el valor mínimo de la función es f(0) = 4. Por tanto, el rango es [4, ∞).",
     "Rango de funciones", "Intermedio", "Funciones", "Mínimo de parábola"),

    ("Si f(x) = 2x + 1 y g(x) = x², ¿cuál es la función compuesta (f ∘ g)(x)?",
     ["2x² + 1", "(2x + 1)²", "4x² + 1", "2x³ + x"], 0,
     "(f ∘ g)(x) = f(g(x)) = f(x²) = 2(x²) + 1 = 2x² + 1.",
     "Composición de funciones", "Intermedio", "Funciones", "Funciones compuestas"),

    ("¿Cuál es la función inversa f⁻¹(x) de la función lineal f(x) = 3x - 6?",
     ["f⁻¹(x) = (x + 6) / 3", "f⁻¹(x) = (x - 6) / 3", "f⁻¹(x) = 3x + 6", "f⁻¹(x) = x/3 - 6"], 0,
     "Hacemos y = 3x - 6. Despejamos x: y + 6 = 3x ⇒ x = (y + 6)/3. Inversa: f⁻¹(x) = (x + 6)/3.",
     "Función inversa", "Intermedio", "Funciones", "Cálculo de la inversa"),

    # 66-80: Trigonometría analítica
    ("En el círculo unitario (radio r = 1), las coordenadas de un punto en el ángulo θ son:",
     ["(cos θ, sen θ)", "(sen θ, cos θ)", "(tan θ, sec θ)", "(1, tan θ)"], 0,
     "Por definición trigonométrica en el plano cartesiano con r = 1, la abscisa x = cos θ y la ordenada y = sen θ.",
     "Círculo trigonométrico", "Intermedio", "Trigonometría", "Definiciones en círculo unitario"),

    ("¿A qué equivale la identidad trigonométrica fundamental: sen²(x) + cos²(x)?",
     ["1", "0", "tan²(x)", "sec²(x)"], 0,
     "Es la identidad pitagórica fundamental derivada del teorema de Pitágoras en el círculo unitario.",
     "Identidad pitagórica", "Intermedio", "Trigonometría", "Identidades fundamentales"),

    ("¿Cuál es el valor exacto de sen(30°)?",
     ["1/2", "√3/2", "√2/2", "1"], 0,
     "En un triángulo equilátero bisecado, el seno del ángulo de 30° es exactamente 1/2 (0.5).",
     "Ángulos notables", "Intermedio", "Trigonometría", "Valores exactos"),

    ("Calcula el valor exacto de cos(60°).",
     ["1/2", "√3/2", "√2/2", "0"], 0,
     "Por ángulos complementarios: cos(60°) = sen(30°) = 1/2.",
     "Razones de ángulos notables", "Intermedio", "Trigonometría", "Coseno de 60°"),

    ("¿Cuál es el valor exacto de tan(45°)?",
     ["1", "0", "√3", "1/2"], 0,
     "tan(45°) = sen(45°) / cos(45°) = (√2/2) / (√2/2) = 1.",
     "Tangente de 45°", "Intermedio", "Trigonometría", "Ángulos notables"),

    ("En un triángulo oblicuángulo, la Ley de Senos establece que:",
     ["a / sen(A) = b / sen(B) = c / sen(C)", "a² = b² + c² - 2bc cos(A)", "a + b + c = 180°", "sen(A + B) = sen(A) + sen(B)"], 0,
     "La ley de senos relaciona la longitud de cada lado con el seno de su ángulo opuesto de manera proporcional.",
     "Ley de senos", "Intermedio", "Trigonometría", "Triángulos oblicuángulos"),

    ("Para aplicar la Ley de Cosenos en el cálculo del lado 'a', la fórmula correcta es:",
     ["a² = b² + c² - 2bc · cos(A)", "a² = b² + c² + 2bc · cos(A)", "a = b · cos(A)", "a² = b² - c²"], 0,
     "La ley de cosenos es una generalización del teorema de Pitágoras para cualquier triángulo: a² = b² + c² - 2bc cos(A).",
     "Ley de cosenos", "Intermedio", "Trigonometría", "Resolución de triángulos"),

    ("¿Cuál es el período fundamental de la función trigonométrica f(x) = sen(x)?",
     ["2π radianes (360°)", "π radianes (180°)", "4π radianes", "π/2 radianes"], 0,
     "La función seno completa un ciclo completo de onda cada 2π radianes.",
     "Período de funciones trigonométricas", "Intermedio", "Trigonometría", "Función seno"),

    ("La función tangente se indefine (presenta asíntotas verticales) en los ángulos de la forma:",
     ["π/2 + kπ (90°, 270°, ...)", "kπ (0°, 180°, 360°)", "kπ/4 (45°, 135°)", "2kπ"], 0,
     "tan(x) = sen(x) / cos(x). Como cos(x) = 0 en π/2 + kπ, la tangente se divide por cero y se indefine.",
     "Dominio de la función tangente", "Intermedio", "Trigonometría", "Asíntotas trigonométricas"),

    ("Simplifica la identidad trigonométrica: cos(x) · tan(x).",
     ["sen(x)", "cos(x)", "1", "sec(x)"], 0,
     "Como tan(x) = sen(x) / cos(x), al multiplicar: cos(x) · [sen(x) / cos(x)] = sen(x).",
     "Simplificación trigonométrica", "Intermedio", "Trigonometría", "Cocientes"),

    # 81-90: Geometría analítica de la recta y cónicas
    ("¿Cuál es la ecuación general de la recta que pasa por el punto (0, 4) y tiene pendiente m = -2?",
     ["2x + y - 4 = 0", "2x - y + 4 = 0", "x + 2y - 4 = 0", "2x + y + 4 = 0"], 0,
     "Forma explícita: y = -2x + 4. Igualando a cero en forma general: 2x + y - 4 = 0.",
     "Ecuación general de la recta", "Intermedio", "Geometría Analítica", "Línea recta"),

    ("Dos rectas con pendientes m₁ y m₂ son perpendiculares si y solo si cumplen la condición:",
     ["m₁ · m₂ = -1", "m₁ = m₂", "m₁ + m₂ = 0", "m₁ · m₂ = 1"], 0,
     "La condición de perpendicularidad exige que sus pendientes sean recíprocas y de signo opuesto: m₂ = -1 / m₁.",
     "Rectas perpendiculares", "Intermedio", "Geometría Analítica", "Pendientes ortogonales"),

    ("¿Cuál es la distancia entre el punto P(3, 4) y el origen de coordenadas (0, 0)?",
     ["5 unidades", "7 unidades", "25 unidades", "√7 unidades"], 0,
     "d = √(3² + 4²) = √(9 + 16) = √25 = 5 unidades.",
     "Distancia al origen", "Intermedio", "Geometría Analítica", "Métrica euclidiana"),

    ("¿Cuál es el centro C y el radio r de la circunferencia con ecuación (x - 3)² + (y + 2)² = 25?",
     ["C(3, -2) y r = 5", "C(-3, 2) y r = 5", "C(3, -2) y r = 25", "C(-3, 2) y r = 25"], 0,
     "La forma canónica es (x - h)² + (y - k)² = r². Por comparación: h = 3, k = -2 y r = √25 = 5.",
     "Ecuación canónica de la circunferencia", "Intermedio", "Geometría Analítica", "Circunferencia"),

    ("La ecuación ordinaria de una parábola con vértice en el origen y foco en (0, p) sobre el eje Y es:",
     ["x² = 4py", "y² = 4px", "x² = -4py", "x² + y² = p²"], 0,
     "Al abrir verticalmente hacia el eje Y con vértice en (0,0), la ecuación canónica es x² = 4py.",
     "Ecuación de la parábola", "Intermedio", "Geometría Analítica", "Parábolas"),

    ("¿Qué cónica representa la ecuación general x² / 16 + y² / 9 = 1?",
     ["Una elipse horizontal", "Una hipérbola", "Una circunferencia", "Una parábola"], 0,
     "La forma x²/a² + y²/b² = 1 con a > b (16 > 9) describe una elipse con eje mayor horizontal.",
     "Ecuación de la elipse", "Intermedio", "Geometría Analítica", "Cónicas"),

    ("¿Cuál es la pendiente de una recta horizontal paralela al eje X?",
     ["m = 0", "m = 1", "m no existe (indefinida)", "m = -1"], 0,
     "En una recta horizontal no hay variación en y (Δy = 0), por lo que m = Δy / Δx = 0.",
     "Pendiente de rectas notables", "Intermedio", "Geometría Analítica", "Rectas horizontales"),

    ("¿Cuál es la pendiente de una recta vertical paralela al eje Y?",
     ["Indefinida (no existe división por cero)", "m = 0", "m = 1", "m = ∞"], 0,
     "Al ser vertical, Δx = 0. Como la división por cero no está definida en los reales, la pendiente es indefinida.",
     "Rectas verticales", "Intermedio", "Geometría Analítica", "Pendiente indefinida"),

    ("Calcula la distancia entre las rectas paralelas y = 2x + 3 e y = 2x - 7 utilizando la fórmula d = |c₁ - c₂| / √(1 + m²).",
     ["10 / √5 (es decir, 2√5)", "10", "4 / √5", "5"], 0,
     "d = |3 - (-7)| / √(1 + 2²) = 10 / √5 = (10√5)/5 = 2√5.",
     "Distancia entre rectas paralelas", "Intermedio", "Geometría Analítica", "Posiciones relativas"),

    ("El punto de corte con el eje Y (ordenada al origen) de la recta 3x - 2y + 8 = 0 es:",
     ["(0, 4)", "(0, -4)", "(4, 0)", "(0, -8)"], 0,
     "Hacemos x = 0: 3(0) - 2y + 8 = 0 ⇒ -2y = -8 ⇒ y = 4. Punto: (0, 4).",
     "Intersección con los ejes", "Intermedio", "Geometría Analítica", "Ordenada al origen"),

    # 91-100: Conteo y probabilidad avanzada
    ("¿De cuántas maneras distintas se pueden sentar 5 personas en una fila de 5 asientos?",
     ["120 formas", "25 formas", "60 formas", "24 formas"], 0,
     "P(5) = 5! = 5 × 4 × 3 × 2 × 1 = 120 maneras.",
     "Permutaciones lineales", "Intermedio", "Probabilidad y Conteo", "Factorial"),

    ("¿Cuántos comités de 3 personas se pueden formar a partir de un grupo de 8 personas?",
     ["56 comités", "336 comités", "24 comités", "48 comités"], 0,
     "El orden no importa, es una combinación: C(8, 3) = 8! / (3! × 5!) = (8 × 7 × 6) / (3 × 2 × 1) = 56.",
     "Combinaciones", "Intermedio", "Probabilidad y Conteo", "Selección sin orden"),

    ("¿Cuántos números diferentes de 3 cifras se pueden formar con los dígitos {1, 2, 3, 4, 5} sin repetir dígitos?",
     ["60 números", "125 números", "15 números", "20 números"], 0,
     "El orden sí importa (variación sin repetición): V(5, 3) = 5 × 4 × 3 = 60.",
     "Variaciones sin repetición", "Intermedio", "Probabilidad y Conteo", "Formación de números"),

    ("Si dos eventos A y B son independientes con P(A) = 0.4 y P(B) = 0.5, ¿cuál es la probabilidad conjunta P(A ∩ B)?",
     ["0.20", "0.90", "0.10", "0.45"], 0,
     "Para eventos independientes, P(A ∩ B) = P(A) × P(B) = 0.4 × 0.5 = 0.20.",
     "Eventos independientes", "Intermedio", "Probabilidad", "Regla de multiplicación"),

    ("La regla de la adición para eventos cualesquiera A y B establece que P(A ∪ B) es igual a:",
     ["P(A) + P(B) - P(A ∩ B)", "P(A) + P(B)", "P(A) · P(B)", "P(A) - P(B)"], 0,
     "Para no contar dos veces la intersección: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
     "Regla general de la adición", "Intermedio", "Probabilidad", "Unión de eventos"),

    ("En una prueba diagnóstica, la sensibilidad es del 90% y la prevalencia de la enfermedad es del 5%. ¿Qué teorema permite calcular el valor predictivo positivo?",
     ["Teorema de Bayes", "Teorema de Pitágoras", "Teorema de Chebyshev", "Teorema de De Moivre"], 0,
     "El Teorema de Bayes permite actualizar la probabilidad de una hipótesis a partir de evidencias observadas (probabilidad a posteriori).",
     "Teorema de Bayes", "Intermedio", "Probabilidad", "Probabilidad condicional"),

    ("¿Cuál es el valor del número combinatorio C(n, 0)?",
     ["1", "0", "n", "n!"], 0,
     "C(n, 0) = n! / (0! × n!) = n! / (1 × n!) = 1.",
     "Propiedades combinatorias", "Intermedio", "Probabilidad y Conteo", "Casos límite"),

    ("Al lanzar una moneda 4 veces, ¿cuál es la probabilidad binomial de obtener exactamente 2 caras?",
     ["6/16 (3/8 o 37.5%)", "1/4", "1/2", "4/16"], 0,
     "P(X=2) = C(4, 2) × (1/2)² × (1/2)² = 6 × (1/4) × (1/4) = 6/16 = 3/8 = 37.5%.",
     "Distribución binomial básica", "Intermedio", "Probabilidad", "Distribución binomial"),

    ("¿Qué nombre recibe la medida estadística que cuantifica la dispersión de los datos elevando al cuadrado sus desviaciones respecto a la media?",
     ["Varianza", "Desviación típica", "Rango intercuartílico", "Coeficiente de variación"], 0,
     "La varianza (σ²) es la media de los cuadrados de las diferencias entre cada dato y la media aritmética.",
     "Varianza estadística", "Intermedio", "Estadística", "Dispersión cuadrática"),

    ("Si la varianza de un conjunto de datos es 49, ¿cuál es su desviación estándar?",
     ["7", "49", "24.5", "14"], 0,
     "La desviación estándar (σ) es la raíz cuadrada positiva de la varianza: σ = √49 = 7.",
     "Desviación estándar", "Intermedio", "Estadística", "Raíz de la varianza")
]

bachillerato_new_raw.extend([('En una progresión geométrica con a₁ = 2 y razón r = 3, ¿cuál es el quinto término a₅?', ['162', '486', '54', '81'], 0, 'a_n = a₁ · r^(n-1) ⇒ a₅ = 2 · 3^(5-1) = 2 · 3⁴ = 2 · 81 = 162.', 'Progresión geométrica', 'Intermedio', 'Álgebra', 'Término enésimo'), ('Calcula la suma infinita de la serie geométrica convergente: 8 + 4 + 2 + 1 + ...', ['16', '15', '14', '32'], 0, 'a₁ = 8 y r = 1/2 (|r| < 1). Suma S = a₁ / (1 - r) = 8 / (1 - 0.5) = 8 / 0.5 = 16.', 'Series geométricas infinitas', 'Intermedio', 'Álgebra', 'Suma infinita'), ('Resuelve la desigualdad con valor absoluto: |x - 3| ≤ 5.', ['[-2, 8]', '[-8, 2]', '(-2, 8)', '[3, 8]'], 0, '|u| ≤ c ⇔ -c ≤ u ≤ c. -5 ≤ x - 3 ≤ 5. Sumando 3: -2 ≤ x ≤ 8, es decir, [-2, 8].', 'Desigualdades con valor absoluto', 'Intermedio', 'Álgebra', 'Inecuaciones'), ('Aplica la identidad del seno del ángulo doble: sen(2θ) es idéntico a:', ['2 sen(θ) cos(θ)', 'sen²(θ) - cos²(θ)', '2 sen(θ)', 'sen²(θ) + cos²(θ)'], 0, 'Es la identidad trigonométrica fundamental del ángulo doble: sen(2θ) = 2 sen(θ) cos(θ).', 'Identidades del ángulo doble', 'Intermedio', 'Trigonometría', 'Ángulo doble'), ('Aplica la identidad del coseno del ángulo doble: cos(2θ) es igual a:', ['cos²(θ) - sen²(θ)', '2 cos²(θ) + 1', 'sen²(θ) - cos²(θ)', '2 sen(θ) cos(θ)'], 0, 'Por deducción de cos(A + B) con A = B = θ: cos(2θ) = cos²(θ) - sen²(θ).', 'Identidad de cos(2θ)', 'Intermedio', 'Trigonometría', 'Coseno del doble'), ('¿Cuáles son las pendientes de las asíntotas de la hipérbola canónica x² / 16 - y² / 9 = 1?', ['m = ± 3/4', 'm = ± 4/3', 'm = ± 9/16', 'm = ± 16/9'], 0, 'Para la hipérbola x²/a² - y²/b² = 1, las asíntotas son y = ±(b/a)x. Con a = 4 y b = 3: m = ± 3/4.', 'Asíntotas de la hipérbola', 'Intermedio', 'Geometría Analítica', 'Hipérbola'), ('Calcula el producto escalar de los vectores u = (3, 4) y v = (2, -1) en R².', ['2', '10', '7', '-2'], 0, 'u · v = (3)(2) + (4)(-1) = 6 - 4 = 2.', 'Producto escalar en el plano', 'Intermedio', 'Álgebra Lineal', 'Vectores en R²'), ('Calcula el ángulo θ entre los vectores u = (1, 0) y v = (1, 1).', ['45° (π/4 rad)', '90°', '30°', '60°'], 0, 'cos θ = (u · v) / (||u|| ||v||) = (1·1 + 0·1) / (1 · √2) = 1/√2 = √2/2. θ = 45°.', 'Ángulo entre vectores', 'Intermedio', 'Trigonometría Analítica', 'Producto punto'), ('Calcula el determinante de la matriz 2x2: M = [[3, -2], [4, 5]].', ['23', '7', '15', '-7'], 0, 'det(M) = (3)(5) - (-2)(4) = 15 - (-8) = 15 + 8 = 23.', 'Determinantes 2x2', 'Intermedio', 'Álgebra Lineal', 'Matrices'), ('Dada una variable aleatoria normal con media μ = 70 y desviación estándar σ = 5, ¿cuál es el valor tipificado Z para X = 80?', ['Z = +2.0', 'Z = +1.5', 'Z = +2.5', 'Z = -2.0'], 0, 'Fórmula de tipificación: Z = (X - μ) / σ = (80 - 70) / 5 = 10 / 5 = +2.0.', 'Puntuación Z', 'Intermedio', 'Estadística', 'Distribución normal'), ('¿Cuál es la longitud del lado recto (ancho focal) de la parábola y² = 12x?', ['12 unidades', '6 unidades', '3 unidades', '4 unidades'], 0, 'La ecuación es y² = 4px con 4p = 12. La longitud del lado recto es |4p| = 12.', 'Elementos de la parábola', 'Intermedio', 'Geometría Analítica', 'Lado recto'), ("¿Cuál es la excentricidad 'e' de una circunferencia?", ['e = 0', 'e = 1', '0 < e < 1', 'e > 1'], 0, 'En la circunferencia la distancia focal es nula (c = 0), por lo que e = c/a = 0.', 'Excentricidad de cónicas', 'Intermedio', 'Geometría Analítica', 'Cónicas'), ('Calcula la suma de los primeros 20 términos de la progresión aritmética: 2, 5, 8, 11, ...', ['610', '600', '590', '620'], 0, 'a₁ = 2, d = 3. a₂₀ = 2 + 19(3) = 59. Suma S₂₀ = [20 × (2 + 59)] / 2 = 10 × 61 = 610.', 'Suma de progresión aritmética', 'Intermedio', 'Álgebra', 'Series aritméticas'), ('Encuentra el conjunto solución de la inecuación lineal doble: -1 < 2x + 3 ≤ 7.', ['(-2, 2]', '[-2, 2)', '(-1, 2]', '[-2, 5]'], 0, 'Restamos 3 en los tres miembros: -4 < 2x ≤ 4. Dividimos entre 2: -2 < x ≤ 2. Intervalo: (-2, 2].', 'Inecuaciones simultáneas', 'Intermedio', 'Álgebra', 'Desigualdades compuestas'), ('¿Cuál es el dominio de la función irracional f(x) = √(2x - 8)?', ['[4, ∞)', '(4, ∞)', '[0, ∞)', '(-∞, 4]'], 0, 'Para que la raíz cuadrada exista en los reales, el radicando debe ser no negativo: 2x - 8 ≥ 0 ⇒ 2x ≥ 8 ⇒ x ≥ 4.', 'Dominio de funciones irracionales', 'Intermedio', 'Funciones', 'Radicando no negativo'), ('Si log_a(8) = 3, ¿cuál es el valor de la base a?', ['a = 2', 'a = 24', 'a = 4', 'a = √8'], 0, 'Por definición de logaritmo: a³ = 8 ⇒ a = ∛8 = 2.', 'Cálculo de la base del logaritmo', 'Intermedio', 'Álgebra', 'Logaritmos'), ('¿Cuál es la amplitud de la función periódica f(x) = -4 cos(3x)?', ['4', '-4', '3', '2π/3'], 0, 'La amplitud es el valor absoluto del coeficiente de la función trigonométrica: |-4| = 4.', 'Amplitud de ondas trigonométricas', 'Intermedio', 'Trigonometría', 'Funciones periódicas'), ('Al rotar 90° en sentido antihorario respecto al origen el punto P(3, 2), ¿cuáles son sus nuevas coordenadas?', ["P'(-2, 3)", "P'(2, -3)", "P'(-3, -2)", "P'(3, -2)"], 0, 'La regla de rotación de 90° antihorario en el plano es (x, y) → (-y, x). Para (3, 2) resulta (-2, 3).', 'Transformaciones geométricas', 'Intermedio', 'Geometría Analítica', 'Rotaciones en el plano'), ('Calcula el número de subconjuntos posibles que tiene un conjunto de 6 elementos.', ['64', '36', '32', '12'], 0, 'El conjunto potencia de un conjunto de n elementos tiene 2^n subconjuntos: 2⁶ = 64.', 'Conjunto potencia y combinatoria', 'Intermedio', 'Probabilidad y Conteo', 'Conjunto potencia'), ('En una distribución normal, ¿qué porcentaje aproximado de los datos se encuentra dentro del intervalo (μ - σ, μ + σ)?', ['Aproximadamente 68.3%', 'Aproximadamente 95.4%', 'Aproximadamente 99.7%', 'Exactamente 50%'], 0, 'Por la regla empírica 68-95-99.7 de la distribución normal, el 68.3% de la población se halla a menos de 1 desviación típica de la media.', 'Regla empírica normal', 'Intermedio', 'Estadística', 'Campana de Gauss')])
