# 80 Preguntas Pedagógicas Únicas: Matemáticas Universitario/Avanzado (21 a 100)
universitario_new_raw = [
    # 21-35: Límites avanzados, derivadas y derivación implícita
    ("Aplica la regla de L'Hôpital para calcular el límite: lim (x → 0) [(e^(3x) - 1) / (2x)].",
     ["3/2", "3", "0", "1/2"], 0,
     "Forma indeterminada 0/0. Derivamos numerador y denominador: d/dx[e^(3x) - 1] = 3e^(3x) y d/dx[2x] = 2. Evaluando en x = 0: (3e⁰) / 2 = 3/2.",
     "Regla de L'Hôpital", "Desafiante", "Cálculo Diferencial", "Límites indeterminados"),

    ("Calcula el límite indeterminado: lim (x → 0) [(1 - cos x) / x²].",
     ["1/2", "0", "1", "Indefinido"], 0,
     "Aplicando L'Hôpital dos veces: lim [sen x / 2x] = lim [cos x / 2] = cos(0) / 2 = 1/2.",
     "Límites con funciones trigonométricas", "Desafiante", "Cálculo Diferencial", "Límites de L'Hôpital"),

    ("Dada la función y(x) definida implícitamente por x² + y² = 25, ¿cuál es la derivada dy/dx?",
     ["-x / y", "x / y", "-y / x", "2x + 2y"], 0,
     "Derivando implícitamente respecto a x: 2x + 2y(dy/dx) = 0 ⇒ 2y(dy/dx) = -2x ⇒ dy/dx = -x/y.",
     "Derivación implícita", "Desafiante", "Cálculo Diferencial", "Derivadas implícitas"),

    ("¿Cuál es la derivada de la función f(x) = ln(x² + 4)?",
     ["2x / (x² + 4)", "1 / (x² + 4)", "2x / x", "1 / (2x)"], 0,
     "Por regla de la cadena: d/dx[ln(u)] = u'/u. Aquí u = x² + 4, u' = 2x. Por tanto, f'(x) = 2x / (x² + 4).",
     "Regla de la cadena en logaritmos", "Desafiante", "Cálculo Diferencial", "Derivadas logarítmicas"),

    ("Halla la derivada de la función trigonométrica inversa f(x) = arctan(3x).",
     ["3 / (1 + 9x²)", "1 / (1 + 9x²)", "3 / (1 + 3x²)", "3 / √(1 - 9x²)"], 0,
     "d/dx[arctan(u)] = u' / (1 + u²). Para u = 3x, u' = 3 y u² = 9x². Queda 3 / (1 + 9x²).",
     "Derivadas de funciones inversas", "Desafiante", "Cálculo Diferencial", "Funciones trigonométricas inversas"),

    ("Calcula la segunda derivada f''(x) de la función f(x) = x⁴ - 5x³ + 2x.",
     ["12x² - 30x", "4x³ - 15x² + 2", "24x - 30", "12x³ - 30x²"], 0,
     "f'(x) = 4x³ - 15x² + 2. Segunda derivada: f''(x) = 12x² - 30x.",
     "Derivadas de orden superior", "Desafiante", "Cálculo Diferencial", "Segunda derivada"),

    ("Calcula el límite en el infinito: lim (x → ∞) [(4x³ - 2x + 1) / (7x³ + 5x²)].",
     ["4/7", "0", "∞", "4/5"], 0,
     "Al tener igual grado en numerador y denominador (grado 3), el límite es la razón de sus coeficientes principales: 4/7.",
     "Límites en el infinito", "Desafiante", "Cálculo Diferencial", "Comportamiento asintótico"),

    ("¿En qué puntos es discontinua la función f(x) = (x + 3) / (x² - 9)?",
     ["En x = 3 y x = -3", "Solo en x = 3", "Solo en x = -3", "En ningún punto"], 0,
     "El denominador se anula cuando x² - 9 = 0 ⇒ x = ±3. En x = -3 hay una discontinuidad evitable y en x = 3 una asíntota vertical.",
     "Continuidad y tipos de discontinuidad", "Desafiante", "Cálculo Diferencial", "Discontinuidades"),

    ("¿Cuál es la derivada de f(x) = x · ln(x) para x > 0?",
     ["ln(x) + 1", "1/x", "ln(x)", "x + 1"], 0,
     "Regla del producto: (u·v)' = u'v + uv' = (1)·ln(x) + x·(1/x) = ln(x) + 1.",
     "Regla del producto", "Desafiante", "Cálculo Diferencial", "Derivadas trascendentes"),

    ("Halla la pendiente de la recta tangente a la curva f(x) = x³ - 2x en el punto x = 2.",
     ["m = 10", "m = 8", "m = 12", "m = 4"], 0,
     "f'(x) = 3x² - 2. Evaluando en x = 2: f'(2) = 3(2)² - 2 = 3(4) - 2 = 12 - 2 = 10.",
     "Interpretación geométrica de la derivada", "Desafiante", "Cálculo Diferencial", "Recta tangente"),

    # 36-50: Teoremas del cálculo diferencial y optimización
    ("¿Qué condición exige el Teorema de Rolle para garantizar la existencia de al menos un c ∈ (a, b) tal que f'(c) = 0?",
     ["f continua en [a, b], diferenciable en (a, b) y f(a) = f(b)", "Solo que f sea continua", "Que f'(a) = f'(b)", "Que f sea creciente"], 0,
     "El teorema de Rolle exige continuidad en el cerrado, derivabilidad en el abierto y que las imágenes en los extremos coincidan: f(a) = f(b).",
     "Teorema de Rolle", "Desafiante", "Cálculo Diferencial", "Teoremas fundamentales"),

    ("El Teorema del Valor Medio de Lagrange afirma que para una función continua en [a, b] y diferenciable en (a, b) existe c ∈ (a, b) tal que:",
     ["f'(c) = [f(b) - f(a)] / (b - a)", "f'(c) = 0", "f(c) = [f(a) + f(b)] / 2", "f'(c) = f(b) - f(a)"], 0,
     "Establece que en al menos un punto intermedio la derivada instantánea es igual a la tasa de variación media secante.",
     "Teorema del Valor Medio", "Desafiante", "Cálculo Diferencial", "Lagrange"),

    ("Encuentra los puntos críticos de la función f(x) = 2x³ - 9x² + 12x.",
     ["x = 1 y x = 2", "x = -1 y x = -2", "x = 0 y x = 3", "x = 2 y x = 3"], 0,
     "f'(x) = 6x² - 18x + 12 = 0 ⇒ x² - 3x + 2 = 0 ⇒ (x - 1)(x - 2) = 0 ⇒ x = 1 y x = 2.",
     "Puntos críticos", "Desafiante", "Cálculo Diferencial", "Extremos de funciones"),

    ("Clasifica el punto crítico x = 1 para la función anterior f(x) = 2x³ - 9x² + 12x usando el criterio de la segunda derivada.",
     ["Es un máximo relativo local (f''(1) = -6 < 0)", "Es un mínimo relativo local", "Es un punto de inflexión", "Es una discontinuidad"], 0,
     "f''(x) = 12x - 18. Para x = 1: f''(1) = 12(1) - 18 = -6 < 0. Como la segunda derivada es negativa, la curva es cóncava hacia abajo y x = 1 es un máximo local.",
     "Criterio de la segunda derivada", "Desafiante", "Cálculo Diferencial", "Máximos y mínimos"),

    ("¿En qué punto tiene un punto de inflexión la curva f(x) = x³ - 6x² + 9x + 2?",
     ["x = 2", "x = 3", "x = 1", "x = 0"], 0,
     "f'(x) = 3x² - 12x + 9; f''(x) = 6x - 12. Igualando a cero: 6x - 12 = 0 ⇒ x = 2.",
     "Puntos de inflexión", "Desafiante", "Cálculo Diferencial", "Concavidad"),

    ("Se desea cercar un terreno rectangular contiguo a un río utilizando 200 m de cerca (no se cerca el lado del río). ¿Qué ancho maximiza el área?",
     ["x = 50 metros", "x = 100 metros", "x = 25 metros", "x = 40 metros"], 0,
     "Perímetro cercado: 2x + y = 200 ⇒ y = 200 - 2x. Área A(x) = x(200 - 2x) = 200x - 2x². A'(x) = 200 - 4x = 0 ⇒ x = 50 m.",
     "Problemas de optimización", "Desafiante", "Cálculo Diferencial", "Maximización de áreas"),

    ("La función de costo total de una fábrica es C(x) = 500 + 10x + 0.1x². ¿Cuál es el costo marginal para una producción de x = 100 unidades?",
     ["$30.00 por unidad", "$20.00 por unidad", "$10.00 por unidad", "$40.00 por unidad"], 0,
     "El costo marginal es la derivada del costo total: C'(x) = 10 + 0.2x. Para x = 100: C'(100) = 10 + 0.2(100) = 10 + 20 = $30.00/unidad.",
     "Costo marginal", "Desafiante", "Cálculo Aplicado", "Economía matemática"),

    ("Calcula el límite: lim (x → ∞) [(1 + 1/x)^x].",
     ["e (número de Euler ≈ 2.71828)", "1", "∞", "0"], 0,
     "Por definición del número e mediante límites de sucesiones continuas: lim(x→∞) (1 + 1/x)^x = e.",
     "Límites exponenciales notables", "Desafiante", "Cálculo Diferencial", "Número e"),

    ("¿Cuál es la diferencial dy de la función y = sen(x³)?",
     ["dy = 3x² · cos(x³) dx", "dy = cos(x³) dx", "dy = 3x² · sen(x³) dx", "dy = -cos(x³) dx"], 0,
     "dy = f'(x) dx. Derivando por regla de la cadena: f'(x) = 3x² cos(x³). Por tanto dy = 3x² cos(x³) dx.",
     "Diferenciales", "Desafiante", "Cálculo Diferencial", "Aproximaciones lineales"),

    ("La aceleración a(t) de una partícula es la segunda derivada de su posición s(t). Si s(t) = 2t³ - 6t² + 4, ¿cuál es a(2)?",
     ["12 m/s²", "0 m/s²", "24 m/s²", "6 m/s²"], 0,
     "v(t) = s'(t) = 6t² - 12t. a(t) = v'(t) = 12t - 12. Evaluando en t = 2: a(2) = 12(2) - 12 = 24 - 12 = 12 m/s².",
     "Cinemática diferencial", "Desafiante", "Física Matemática", "Aceleración instantánea"),

    # 51-65: Cálculo integral, técnicas de integración e integrales impropias
    ("Resuelve la integral indefinida por sustitución: ∫ 2x · e^(x²) dx.",
     ["e^(x²) + C", "2e^(x²) + C", "(1/2)e^(x²) + C", "x² e^(x²) + C"], 0,
     "Hacemos u = x² ⇒ du = 2x dx. La integral se transforma en ∫ e^u du = e^u + C = e^(x²) + C.",
     "Integración por sustitución", "Desafiante", "Cálculo Integral", "Cambio de variable"),

    ("Calcula por el método de integración por partes: ∫ x · cos(x) dx.",
     ["x · sen(x) + cos(x) + C", "x · sen(x) - cos(x) + C", "-x · sen(x) + cos(x) + C", "x · cos(x) + sen(x) + C"], 0,
     "u = x, du = dx; dv = cos(x) dx, v = sen(x). ∫ u dv = uv - ∫ v du = x sen(x) - ∫ sen(x) dx = x sen(x) - (-cos(x)) = x sen(x) + cos(x) + C.",
     "Integración por partes", "Desafiante", "Cálculo Integral", "Método por partes"),

    ("Calcula la integral: ∫ [1 / (x² + 9)] dx.",
     ["(1/3) arctan(x / 3) + C", "arctan(x / 3) + C", "(1/9) arctan(x) + C", "ln(x² + 9) + C"], 0,
     "Fórmula estándar: ∫ dx / (x² + a²) = (1/a) arctan(x/a) + C. Con a = 3, resulta (1/3) arctan(x/3) + C.",
     "Integrales trigonométricas inversas", "Desafiante", "Cálculo Integral", "Formas canónicas"),

    ("Descompón en fracciones parciales la expresión: 1 / [x(x + 1)].",
     ["(1 / x) - [1 / (x + 1)]", "(1 / x) + [1 / (x + 1)]", "2 / x - 1 / (x + 1)", "1 / (x² + x)"], 0,
     "1 / [x(x + 1)] = A/x + B/(x + 1) ⇒ 1 = A(x + 1) + Bx. Para x = 0: A = 1. Para x = -1: B = -1. Queda 1/x - 1/(x+1).",
     "Fracciones parciales", "Desafiante", "Cálculo Integral", "Descomposición racional"),

    ("Calcula la integral impropia de primera especie: ∫ (de 1 a ∞) (1 / x²) dx.",
     ["1 (converge)", "∞ (diverge)", "0", "2"], 0,
     "lim(b→∞) [-1/x] de 1 a b = lim(b→∞) (-1/b - (-1/1)) = 0 + 1 = 1. La integral converge a 1.",
     "Integrales impropias", "Desafiante", "Cálculo Integral", "Convergencia de integrales"),

    ("Calcula la integral definida: ∫ (de 0 a π/2) sen(x) dx.",
     ["1", "0", "π/2", "2"], 0,
     "Antiderivada: -cos(x). Evaluando: [-cos(π/2)] - [-cos(0)] = 0 - (-1) = 1.",
     "Integral definida trigonométrica", "Desafiante", "Cálculo Integral", "Teorema fundamental"),

    ("¿Cuál es el valor medio de la función f(x) = 3x² en el intervalo [0, 2]?",
     ["4", "8", "6", "2"], 0,
     "Valor medio = [1 / (b - a)] ∫ f(x) dx = (1/2) ∫₀² 3x² dx = (1/2) [x³]₀² = (1/2)(8 - 0) = 4.",
     "Teorema del valor medio para integrales", "Desafiante", "Cálculo Integral", "Valor promedio"),

    ("Calcula: ∫ [x / (x² + 1)] dx.",
     ["(1/2) ln(x² + 1) + C", "ln(x² + 1) + C", "arctan(x) + C", "x ln(x² + 1) + C"], 0,
     "u = x² + 1 ⇒ du = 2x dx ⇒ x dx = du / 2. ∫ (1/u)(du/2) = (1/2) ln|u| + C = (1/2) ln(x² + 1) + C.",
     "Sustitución logarítmica", "Desafiante", "Cálculo Integral", "Integrales de tipo logaritmo"),

    ("¿Cuál es la integral indefinida de la función exponencial con base arbitraria: ∫ a^x dx (para a > 0, a ≠ 1)?",
     ["(a^x / ln a) + C", "a^x · ln a + C", "a^(x+1) / (x+1) + C", "e^x + C"], 0,
     "d/dx [a^x] = a^x ln a. Por tanto, dividiendo entre la constante ln a: ∫ a^x dx = a^x / (ln a) + C.",
     "Integración exponencial general", "Desafiante", "Cálculo Integral", "Bases generales"),

    ("Calcula por partes la integral: ∫ ln(x) dx.",
     ["x · ln(x) - x + C", "1/x + C", "x · ln(x) + x + C", "(ln x)² / 2 + C"], 0,
     "u = ln x, du = dx/x; dv = dx, v = x. ∫ ln x dx = x ln x - ∫ x (dx/x) = x ln x - ∫ dx = x ln x - x + C.",
     "Integral del logaritmo natural", "Desafiante", "Cálculo Integral", "Integración por partes"),

    # 66-80: Geometría con integrales y cálculo multivariado
    ("Calcula el área encerrada entre la parábola y = x² y la recta y = 4 en el primer cuadrante.",
     ["16/3 unidades²", "8 unidades²", "4 unidades²", "32/3 unidades²"], 0,
     "Puntos de intersección en x ≥ 0: x² = 4 ⇒ x = 2. Área = ∫₀² (4 - x²) dx = [4x - x³/3]₀² = 8 - 8/3 = 16/3 u².",
     "Área entre curvas", "Desafiante", "Cálculo Integral", "Aplicaciones geométricas"),

    ("El método de discos para calcular el volumen de revolución al girar f(x) alrededor del eje X en [a, b] utiliza la integral:",
     ["V = π ∫ [f(x)]² dx", "V = 2π ∫ x f(x) dx", "V = ∫ f(x) dx", "V = π² ∫ f(x) dx"], 0,
     "Cada rebanada diferencial es un cilindro de radio f(x) y espesor dx con volumen diferencial dV = π [f(x)]² dx.",
     "Volumen de sólidos de revolución", "Desafiante", "Cálculo Integral", "Método de discos"),

    ("Dada la función de dos variables f(x, y) = 3x²y + 5xy³ - 7, ¿cuál es su derivada parcial ∂f/∂x?",
     ["6xy + 5y³", "3x² + 15xy²", "6x + 15y²", "6xy + 15xy²"], 0,
     "Tratamos a y como constante y derivamos respecto a x: d/dx[3x²y] = 6xy y d/dx[5xy³] = 5y³.",
     "Derivadas parciales de primer orden", "Desafiante", "Cálculo Multivariado", "Derivadas parciales"),

    ("Para la misma función f(x, y) = 3x²y + 5xy³ - 7, ¿cuál es su derivada parcial ∂f/∂y?",
     ["3x² + 15xy²", "6xy + 5y³", "3x² + 5y³", "15xy²"], 0,
     "Tratamos a x como constante y derivamos respecto a y: d/dy[3x²y] = 3x² y d/dy[5xy³] = 15xy².",
     "Derivada parcial respecto a y", "Desafiante", "Cálculo Multivariado", "Cálculo en varias variables"),

    ("El vector gradiente ∇f(x, y) de un campo escalar diferenciable f está compuesto por:",
     ["[∂f/∂x , ∂f/∂y]", "∂²f/∂x² + ∂²f/∂y²", "[∂f/∂y , -∂f/∂x]", "∫ f dx + ∫ f dy"], 0,
     "El gradiente es el vector formado por todas las derivadas parciales de primer orden y apunta en la dirección de máxima tasa de crecimiento.",
     "Vector gradiente", "Desafiante", "Cálculo Multivariado", "Campos escalares"),

    ("¿Qué teorema asegura que si las derivadas cruzadas de segundo orden son continuas, entonces ∂²f/(∂x∂y) = ∂²f/(∂y∂x)?",
     ["Teorema de Clairaut (o Schwarz)", "Teorema de Green", "Teorema de Stokes", "Teorema de Gauss"], 0,
     "El teorema de Clairaut-Schwarz garantiza la igualdad de las derivadas parciales mixtas bajo hipótesis de continuidad.",
     "Teorema de Clairaut", "Desafiante", "Cálculo Multivariado", "Derivadas mixtas"),

    ("¿Cuál es el valor del determinante jacobiano al pasar de coordenadas cartesianas (x, y) a polares (r, θ)?",
     ["r", "1", "r²", "r sen θ"], 0,
     "x = r cos θ, y = r sen θ. El jacobiano es ∂(x,y)/∂(r,θ) = r(cos²θ + sen²θ) = r.",
     "Jacobiano en coordenadas polares", "Desafiante", "Cálculo Multivariado", "Cambio de coordenadas"),

    ("Calcula la longitud de arco L de una curva plana y = f(x) en el intervalo [a, b] mediante la fórmula:",
     ["L = ∫ √(1 + [f'(x)]²) dx", "L = ∫ [1 + f'(x)] dx", "L = ∫ √[f(x)] dx", "L = 2π ∫ f(x) dx"], 0,
     "Por teorema de Pitágoras en elementos diferenciales ds = √(dx² + dy²) = √(1 + (dy/dx)²) dx.",
     "Longitud de arco", "Desafiante", "Cálculo Integral", "Curvas planas"),

    ("Calcula el gradiente ∇f en el punto (1, 2) para f(x, y) = x² + 2xy.",
     ["[6, 2]", "[4, 2]", "[2, 4]", "[6, 4]"], 0,
     "∂f/∂x = 2x + 2y; en (1,2) es 2(1) + 2(2) = 6. ∂f/∂y = 2x; en (1,2) es 2(1) = 2. Gradiente: [6, 2].",
     "Evaluación del gradiente", "Desafiante", "Cálculo Multivariado", "Gradientes numéricos"),

    ("En un problema de optimización con restricciones g(x, y) = c, ¿qué método introduce una variable auxiliar λ para igualar ∇f = λ∇g?",
     ["Multiplicadores de Lagrange", "Método de Newton-Raphson", "Método de Gauss-Seidel", "Algoritmo símplex"], 0,
     "El método de multiplicadores de Lagrange permite encontrar extremos condicionados igualando los vectores gradiente de la función objetivo y la restricción.",
     "Multiplicadores de Lagrange", "Desafiante", "Cálculo Multivariado", "Optimización con restricciones"),

    # 81-90: Álgebra lineal universitaria (matrices, determinantes y sistemas)
    ("Dadas las matrices A (2x3) y B (3x4), ¿cuál es la dimensión de la matriz producto A · B?",
     ["2 x 4", "3 x 3", "2 x 3", "No se pueden multiplicar"], 0,
     "El número de columnas de A (3) coincide con las filas de B (3). La matriz resultante tiene las filas de A y columnas de B: 2 x 4.",
     "Multiplicación de matrices", "Desafiante", "Álgebra Lineal", "Dimensiones matriciales"),

    ("Calcula el determinante de la matriz 3x3: | [[1, 0, 2], [0, 3, 1], [4, 0, 5]] | mediante la regla de Sarrus o cofactores.",
     ["-9", "9", "15", "-15"], 0,
     "Desarrollando por la segunda columna: 3 · [ (1)(5) - (2)(4) ] = 3 · (5 - 8) = 3 · (-3) = -9.",
     "Determinantes 3x3", "Desafiante", "Álgebra Lineal", "Desarrollo por cofactores"),

    ("¿Cuál es la traza de la matriz cuadrada M = [[5, 2, 1], [0, -3, 4], [7, 6, 8]]?",
     ["10", "12", "-3", "16"], 0,
     "La traza es la suma de los elementos de la diagonal principal: 5 + (-3) + 8 = 10.",
     "Traza de una matriz", "Desafiante", "Álgebra Lineal", "Propiedades de matrices"),

    ("Si el determinante de una matriz cuadrada A es det(A) = 4, ¿cuál es el determinante de su matriz inversa A⁻¹?",
     ["1/4 (0.25)", "4", "-4", "-1/4"], 0,
     "Por propiedad fundamental: det(A⁻¹) = 1 / det(A) = 1/4.",
     "Determinante de la matriz inversa", "Desafiante", "Álgebra Lineal", "Propiedades de determinantes"),

    ("Una matriz cuadrada A es invertible (no singular) si y solo si su determinante cumple:",
     ["det(A) ≠ 0", "det(A) = 0", "det(A) > 0", "det(A) = 1"], 0,
     "Una matriz admite inversa multiplicativa si y solo si es de rango pleno, lo cual equivale a det(A) ≠ 0.",
     "Condición de invertibilidad", "Desafiante", "Álgebra Lineal", "Matrices invertibles"),

    ("Para una matriz ortogonal Q, se cumple por definición que su traspuesta Q^T es igual a:",
     ["Su matriz inversa Q⁻¹", "Su opuesta -Q", "La matriz identidad I", "La matriz nula"], 0,
     "Una matriz ortogonal satisface Q^T · Q = I, lo que significa que Q^T = Q⁻¹.",
     "Matrices ortogonales", "Desafiante", "Álgebra Lineal", "Transformaciones isométricas"),

    ("El Teorema de Rouché-Frobenius establece que un sistema lineal Ax = b tiene solución única si y solo si:",
     ["rango(A) = rango(A|b) = número de incógnitas", "rango(A) < rango(A|b)", "det(A) = 0", "rango(A) > número de incógnitas"], 0,
     "El sistema es compatible determinado cuando el rango de la matriz de coeficientes iguala al de la ampliada y al número de incógnitas.",
     "Teorema de Rouché-Frobenius", "Desafiante", "Álgebra Lineal", "Sistemas lineales"),

    ("Calcula el producto escalar (punto) de los vectores u = (2, -3, 4) y v = (5, 1, -2).",
     ["-1", "15", "0", "7"], 0,
     "u · v = (2)(5) + (-3)(1) + (4)(-2) = 10 - 3 - 8 = -1.",
     "Producto escalar en R³", "Desafiante", "Álgebra Lineal", "Geometría vectorial"),

    ("¿Cuál es la norma o módulo del vector v = (2, 3, 6) en el espacio tridimensional R³?",
     ["7", "11", "√11", "49"], 0,
     "||v|| = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7.",
     "Norma euclidiana", "Desafiante", "Álgebra Lineal", "Espacios vectoriales normados"),

    ("Dos vectores no nulos u y v son ortogonales si y solo si su producto escalar es:",
     ["Igual a cero (u · v = 0)", "Igual a uno", "Mayor que cero", "Paralelo"], 0,
     "Por definición geométrica u · v = ||u|| ||v|| cos θ. Como cos(90°) = 0, los vectores son ortogonales si u · v = 0.",
     "Ortogonalidad de vectores", "Desafiante", "Álgebra Lineal", "Ángulo entre vectores"),

    # 91-100: Valores propios y ecuaciones diferenciales
    ("Para encontrar los valores propios (autovalores λ) de una matriz cuadrada A, se debe resolver la ecuación característica:",
     ["det(A - λI) = 0", "A · λ = I", "det(A) = λ", "A + λI = 0"], 0,
     "La ecuación característica surge de (A - λI)v = 0 para vectores propios no nulos v ≠ 0, lo que exige det(A - λI) = 0.",
     "Valores propios y ecuación característica", "Desafiante", "Álgebra Lineal", "Diagonalización"),

    ("Calcula los valores propios de la matriz 2x2: A = [[3, 0], [0, 5]].",
     ["λ₁ = 3 y λ₂ = 5", "λ₁ = 8 y λ₂ = 15", "λ₁ = 0 y λ₂ = 3", "λ = ±√15"], 0,
     "En una matriz diagonal, los valores propios son exactamente los elementos de su diagonal principal: λ₁ = 3 y λ₂ = 5.",
     "Autovalores en matrices diagonales", "Desafiante", "Álgebra Lineal", "Espectro de la matriz"),

    ("Resuelve la ecuación diferencial de variables separables: dy/dx = 2x · y (para y > 0).",
     ["y(x) = C · e^(x²)", "y(x) = x² + C", "y(x) = C · e^(2x)", "y(x) = ln(x²) + C"], 0,
     "dy / y = 2x dx ⇒ ln(y) = x² + K ⇒ y(x) = e^(x² + K) = C · e^(x²).",
     "Ecuaciones diferenciales separables", "Desafiante", "Ecuaciones Diferenciales", "Separación de variables"),

    ("¿Cuál es el factor integrante μ(x) para resolver la ecuación diferencial lineal de primer orden y' + 2y = 4x?",
     ["μ(x) = e^(2x)", "μ(x) = 2x", "μ(x) = e^(x²)", "μ(x) = ln(2x)"], 0,
     "Para y' + P(x)y = Q(x), el factor integrante es μ(x) = e^(∫ P(x)dx) = e^(∫ 2 dx) = e^(2x).",
     "Factor integrante", "Desafiante", "Ecuaciones Diferenciales", "EDO lineal de primer orden"),

    ("¿Cuál es el orden de la ecuación diferencial: d³y/dx³ + 4(dy/dx)² + y = sen(x)?",
     ["Tercer orden", "Segundo orden", "Primer orden", "Cuarto orden"], 0,
     "El orden de una ecuación diferencial es el orden de la derivada más alta presente en ella, que en este caso es la tercera derivada (orden 3).",
     "Clasificación de ecuaciones diferenciales", "Desafiante", "Ecuaciones Diferenciales", "Orden y grado"),

    ("La solución general de la ecuación diferencial homogénea de segundo orden con coeficientes constantes y'' - 4y = 0 es:",
     ["y(x) = C₁ e^(2x) + C₂ e^(-2x)", "y(x) = C₁ cos(2x) + C₂ sen(2x)", "y(x) = (C₁ + C₂ x)e^(2x)", "y(x) = C₁ e^(4x)"], 0,
     "Ecuación característica: r² - 4 = 0 ⇒ r = ±2. Como las raíces son reales y distintas, y(x) = C₁ e^(2x) + C₂ e^(-2x).",
     "EDO de segundo orden", "Desafiante", "Ecuaciones Diferenciales", "Ecuación característica"),

    ("Si las raíces de la ecuación característica de una EDO homogénea son complejas conjugadas r = α ± βi, la solución general adopta la forma:",
     ["y(x) = e^(αx) [C₁ cos(βx) + C₂ sen(βx)]", "y(x) = C₁ e^(αx) + C₂ e^(βx)", "y(x) = e^(βx) [C₁ cos(αx) + C₂ sen(αx)]", "y(x) = C₁ cos(αx)"], 0,
     "Por la fórmula de Euler e^(iθ) = cos θ + i sen θ, las soluciones complejas conjugadas se expresan en senos y cosenos modulados exponencialmente.",
     "Soluciones oscilatorias en EDO", "Desafiante", "Ecuaciones Diferenciales", "Raíces complejas"),

    ("El Wronskiano W(y₁, y₂) de dos soluciones de una EDO de segundo orden es el determinante de la matriz:",
     ["[[y₁, y₂], [y₁', y₂']]", "[[y₁, y₁'], [y₂, y₂']]", "[[y₁', y₂'], [y₁'', y₂'']]", "[[y₁, y₂], [y₁'', y₂'']]"], 0,
     "Por definición, W(y₁, y₂) = y₁ · y₂' - y₁' · y₂ = det([[y₁, y₂], [y₁', y₂']]). Si W ≠ 0, las soluciones son linealmente independientes.",
     "Wronskiano e independencia lineal", "Desafiante", "Ecuaciones Diferenciales", "Independencia de soluciones"),

    ("¿Cuál es la transformada de Laplace de la función constante f(t) = 1 para s > 0?",
     ["1 / s", "s", "1 / s²", "e^(-s)"], 0,
     "L{1} = ∫₀^∞ e^(-st) · 1 dt = [-e^(-st) / s]₀^∞ = 0 - (-1/s) = 1/s.",
     "Transformada de Laplace", "Desafiante", "Ecuaciones Diferenciales", "Transformadas elementales"),

    ("¿Cuál es la transformada de Laplace de la función exponencial f(t) = e^(at) para s > a?",
     ["1 / (s - a)", "1 / (s + a)", "a / s²", "s / (s² + a²)"], 0,
     "L{e^(at)} = ∫₀^∞ e^(-(s-a)t) dt = 1 / (s - a) para s > a.",
     "Transformada de la exponencial", "Desafiante", "Ecuaciones Diferenciales", "Propiedades de Laplace")
]

universitario_new_raw.extend([('Aplica la primera parte del Teorema Fundamental del Cálculo para hallar d/dx [ ∫ (de 1 a x) √(t³ + 1) dt ].', ['√(x³ + 1)', '3x² / [2√(x³ + 1)]', '√(x³ + 1) - √2', '(1/3)(x³ + 1)^(3/2)'], 0, 'Por el teorema fundamental del cálculo: d/dx [ ∫_a^x f(t) dt ] = f(x). Por tanto, la derivada es √(x³ + 1).', 'Teorema Fundamental del Cálculo', 'Desafiante', 'Cálculo Integral', 'Derivada de integrales'), ('Para resolver la integral ∫ [1 / (x² √(4 - x²))] dx, ¿cuál es la sustitución trigonométrica adecuada?', ['x = 2 sen(θ)', 'x = 2 tan(θ)', 'x = 2 sec(θ)', 'x = 4 sen(θ)'], 0, 'Para formas del tipo √(a² - x²) se utiliza x = a sen(θ). En este caso a = 2, por lo que x = 2 sen(θ).', 'Sustitución trigonométrica', 'Desafiante', 'Cálculo Integral', 'Técnicas de integración'), ('Para formas del tipo √(x² + a²), ¿cuál es la sustitución trigonométrica canónica?', ['x = a tan(θ)', 'x = a sen(θ)', 'x = a sec(θ)', 'x = a cos(θ)'], 0, 'La identidad 1 + tan²(θ) = sec²(θ) permite simplificar √(a² tan²θ + a²) = a sec(θ) empleando x = a tan(θ).', 'Sustituciones con tangente', 'Desafiante', 'Cálculo Integral', 'Integración algebraica'), ("Aplica el Criterio del Cociente (de D'Alembert) para estudiar la serie ∑ (de n=1 a ∞) [n / 2ⁿ]. El límite L = lim |a_{n+1} / a_n| es:", ['1/2 (la serie converge)', '2 (diverge)', '1 (criterio no concluyente)', '0'], 0, 'L = lim [(n+1)/2^(n+1)] / [n/2^n] = lim [(n+1)/(2n)] = 1/2. Como L = 1/2 < 1, la serie converge absolutamente.', "Criterio de D'Alembert", 'Desafiante', 'Cálculo Infinitesimal', 'Series infinitas'), ('Calcula el radio de convergencia R de la serie de potencias ∑ (de n=0 a ∞) (xⁿ / n!).', ['R = ∞ (converge para todo x real)', 'R = 1', 'R = 0', 'R = e'], 0, 'Esta serie de potencias representa a la función exponencial e^x, la cual converge absolutamente en toda la recta real (R = ∞).', 'Series de Taylor y Maclaurin', 'Desafiante', 'Cálculo Infinitesimal', 'Radio de convergencia'), ('Dada la función f(x, y) = x³ - 3xy + y³, calcula la matriz hessiana H(x, y) de segundas derivadas parciales.', ['[[6x, -3], [-3, 6y]]', '[[3x², -3y], [-3x, 3y²]]', '[[6x, 0], [0, 6y]]', '[[-3, 6x], [6y, -3]]'], 0, 'f_xx = 6x, f_xy = -3, f_yx = -3, f_yy = 6y. La matriz hessiana es [[6x, -3], [-3, 6y]].', 'Matriz hessiana', 'Desafiante', 'Cálculo Multivariado', 'Segundas derivadas parciales'), ('Calcula la derivada direccional de f(x, y) = 2x² + 3y² en el punto (1, 1) en la dirección del vector unitario u = (1/√2, 1/√2).', ['7√2', '5√2', '10', '7'], 0, '∇f = (4x, 6y). En (1,1): ∇f = (4, 6). D_u f = ∇f · u = 4(1/√2) + 6(1/√2) = 10/√2 = 5√2.', 'Derivada direccional', 'Desafiante', 'Cálculo Multivariado', 'Variación direccional'), ('Una ecuación diferencial M(x, y)dx + N(x, y)dy = 0 es exacta si y solo si se cumple la condición de Cauchy-Schwarz:', ['∂M/∂y = ∂N/∂x', '∂M/∂x = ∂N/∂y', 'M · N = 0', '∂²M/∂x² = ∂²N/∂y²'], 0, 'Por igualdad de derivadas cruzadas de la función potencial f (donde ∂f/∂x = M y ∂f/∂y = N), se requiere ∂M/∂y = ∂N/∂x.', 'Ecuaciones diferenciales exactas', 'Desafiante', 'Ecuaciones Diferenciales', 'Condición de exactitud'), ("Calcula la transformada de Laplace de la derivada: L{f'(t)} para s > 0.", ['s · F(s) - f(0)', 's · F(s)', 'F(s) / s', "s² · F(s) - f'(0)"], 0, "Por integración por partes en la definición de la transformada: L{f'(t)} = s F(s) - f(0).", 'Propiedades de la transformada de Laplace', 'Desafiante', 'Ecuaciones Diferenciales', 'Transformada de derivadas'), ('Calcula la transformada de Laplace de f(t) = sen(ωt).', ['ω / (s² + ω²)', 's / (s² + ω²)', 'ω / (s² - ω²)', '1 / (s + ω)'], 0, 'L{sen(ωt)} = ω / (s² + ω²) para s > 0.', 'Transformadas trigonométricas', 'Desafiante', 'Ecuaciones Diferenciales', 'Fórmulas canónicas de Laplace'), ("¿Cuál es la solución particular y_p(x) de la EDO no homogénea y'' + y = 5?", ['y_p = 5', 'y_p = 5x', 'y_p = 5 sen(x)', 'y_p = e^(5x)'], 0, "Al ser el término independiente constante (5), ensayamos una constante y_p = A. Como y''_p = 0: 0 + A = 5 ⇒ A = 5.", 'Coeficientes indeterminados', 'Desafiante', 'Ecuaciones Diferenciales', 'Solución particular'), ('El Teorema de Green en el plano relaciona una integral de línea sobre una curva cerrada C con una integral doble sobre la región D mediante:', ['∮ (M dx + N dy) = ∬ (∂N/∂x - ∂M/∂y) dA', '∮ (M dx + N dy) = ∬ (∂M/∂x + ∂N/∂y) dA', '∮ F · dr = 0', '∬ ∇f dA = 0'], 0, 'El teorema de Green establece que la circulación en sentido antihorario a lo largo de C es igual a la integral doble del rotacional bidimensional sobre D.', 'Teorema de Green', 'Desafiante', 'Cálculo Multivariado', 'Integrales de línea y superficie'), ('¿Cuál es la divergencia div(F) del campo vectorial F(x, y, z) = (x², 3y, 2z³)?', ['2x + 3 + 6z²', '(2x, 3, 6z²)', '2x · 3 · 6z²', '0'], 0, 'div(F) = ∇ · F = ∂(x²)/∂x + ∂(3y)/∂y + ∂(2z³)/∂z = 2x + 3 + 6z².', 'Divergencia de campos vectoriales', 'Desafiante', 'Cálculo Vectorial', 'Operador divergencia'), ('El rotacional rot(F) = ∇ × F de un campo de gradientes conservativo F = ∇f es siempre igual a:', ['El vector cero (0, 0, 0)', '1', '∇²f', 'Indefinido'], 0, 'Por identidad vectorial fundamental en cálculo multivariado: rot(∇f) = 0 para cualquier campo escalar con segundas derivadas continuas.', 'Campos conservativos e irrotacionales', 'Desafiante', 'Cálculo Vectorial', 'Rotacional del gradiente'), ('¿Qué nombre recibe la integral de contorno compleja ∮_C f(z) dz alrededor de un polo simple con residuo Res(f, z₀)?', ['2πi · Res(f, z₀)', 'πi · Res(f, z₀)', 'Res(f, z₀)', '0'], 0, 'Por el Teorema de los Residuos de Cauchy: ∮_C f(z) dz = 2πi ∑ Res(f, z_k).', 'Teorema de los Residuos de Cauchy', 'Desafiante', 'Análisis Complejo', 'Integración de contornos'), ('Calcula el producto vectorial (cruz) u × v de los vectores canónicos u = (1, 0, 0) y v = (0, 1, 0).', ['(0, 0, 1) (vector k)', '(0, 0, -1)', '(1, 1, 0)', '0'], 0, 'Por la regla de la mano derecha en R³: i × j = k, es decir, (0, 0, 1).', 'Producto vectorial en R³', 'Desafiante', 'Álgebra Lineal', 'Vectores ortogonales'), ('Calcula el valor de la serie numérica de Taylor en x = 0 para e^x: ∑ (de n=0 a ∞) (1 / n!).', ['e (≈ 2.71828)', '1', '∞', '0'], 0, 'Evaluando la serie de Maclaurin de e^x en x = 1: e¹ = 1 + 1/1! + 1/2! + 1/3! + ... = e.', 'Serie de Maclaurin de la exponencial', 'Desafiante', 'Cálculo Infinitesimal', 'Suma de series'), ('Una matriz hermitiana A en los números complejos cumple por definición:', ['A = (A*)^T (es igual a su transpuesta conjugada)', 'A = -A', 'A² = I', 'det(A) = 0'], 0, 'Una matriz hermitiana o autoadjunta es igual a su transpuesta conjugada A = A^H y todos sus autovalores son reales.', 'Matrices hermitianas', 'Desafiante', 'Álgebra Lineal Avanzada', 'Espacios hermitianos'), ('El proceso de ortogonalización de Gram-Schmidt se utiliza en álgebra lineal para:', ['Construir una base ortogonal u ortonormal a partir de una base dada', 'Calcular la inversa de una matriz', 'Diagonalizar matrices no simétricas', 'Hallar los autovalores'], 0, 'El algoritmo de Gram-Schmidt toma un conjunto linealmente independiente y genera un conjunto ortogonal que genera el mismo subespacio.', 'Ortogonalización de Gram-Schmidt', 'Desafiante', 'Álgebra Lineal', 'Bases ortonormales'), ('Calcula la integral doble: ∬ (de 0 a 1 para x, y de 0 a 2 para y) (2x + y) dy dx.', ['4', '3', '2', '6'], 0, 'Integral interior respecto a y: [2xy + y²/2] de 0 a 2 = 4x + 2. Integral exterior respecto a x: ∫ (de 0 a 1) (4x + 2) dx = [2x² + 2x] de 0 a 1 = 2(1) + 2(1) = 4.', 'Integrales dobles iteradas', 'Desafiante', 'Cálculo Multivariado', 'Teorema de Fubini')])
