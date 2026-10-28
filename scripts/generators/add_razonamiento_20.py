# 20 reactivos adicionales (81 al 100) para Intermedio, Bachillerato, Técnico y Universitario

intermedio_extra20 = [
    # 81 a 100: Razonamiento lógico, secuencias y deducción
    ("En una bolsa opaca hay 12 canicas rojas, 8 azules y 5 verdes. ¿Cuál es el número mínimo de canicas que se deben extraer al azar para tener la certeza de haber obtenido al menos 2 canicas de color verde?",
     ["22 canicas", "20 canicas", "24 canicas", "18 canicas"], 0,
     "En el peor escenario posible, se extraen primero todas las canicas no verdes: 12 rojas + 8 azules = 20 canicas. Las siguientes 2 canicas extraídas serán forzosamente verdes: 20 + 2 = 22 canicas.",
     "Certezas en peor escenario", "Intermedio", "Razonamiento Matemático", "Análisis de casos extremos"),

    ("Si al duplicar la edad de Andrés y sumarle 15 años se obtiene la edad de su padre, que tiene 55 años, ¿cuántos años tiene Andrés?",
     ["20 años", "25 años", "18 años", "22 años"], 0,
     "Planteamiento: 2A + 15 = 55 ⇒ 2A = 40 ⇒ A = 20 años.",
     "Ecuaciones lineales de edades", "Intermedio", "Razonamiento Cuantitativo", "Edades"),

    ("¿Qué número completa la serie de diferencias alternadas: 5, 6, 10, 19, 35, ___?",
     ["60", "55", "64", "50"], 0,
     "Diferencias: +1, +4, +9, +16. Las diferencias son cuadrados perfectos (1², 2², 3², 4²). La siguiente diferencia es 5² = 25: 35 + 25 = 60.",
     "Sucesiones de diferencias cuadráticas", "Intermedio", "Razonamiento Numérico", "Patrones numéricos"),

    ("Si una cuadrilla de 8 pintores tarda 6 horas en pintar un edificio, ¿cuántas horas tardarían 12 pintores con el mismo rendimiento?",
     ["4 horas", "3 horas", "5 horas", "4.5 horas"], 0,
     "Proporcionalidad inversa: Pintores × Horas = Constante. 8 × 6 = 48 horas-hombre. Tiempo con 12 pintores = 48 / 12 = 4 horas.",
     "Proporcionalidad inversa", "Intermedio", "Razonamiento Cuantitativo", "Regla de tres simple inversa"),

    ("¿Qué letra continúa la serie alternada: A, Z, C, X, E, V, G, ___?",
     ["T", "U", "S", "R"], 0,
     "La serie impar avanza de dos en dos (A, C, E, G). La serie par retrocede de dos en dos desde el final (Z, X, V, T). Por tanto, sigue T.",
     "Series alfabéticas dobles", "Intermedio", "Razonamiento Verbal", "Alfabeto inverso"),

    ("Un artículo que costaba $80 sube a $100. ¿Cuál fue el porcentaje de incremento?",
     ["25%", "20%", "15%", "30%"], 0,
     "Aumento = 100 - 80 = $20. Porcentaje de aumento = (20 / 80) × 100 = 25%.",
     "Cálculo de incrementos porcentuales", "Intermedio", "Razonamiento Cuantitativo", "Porcentajes"),

    ("En un campeonato de fútbol de ida y vuelta participan 6 equipos. ¿Cuántos partidos se disputan en total?",
     ["30 partidos", "15 partidos", "36 partidos", "24 partidos"], 0,
     "Cada uno de los 6 equipos juega contra los otros 5 dos veces (local y visitante): 6 × 5 = 30 partidos.",
     "Combinatoria de torneos", "Intermedio", "Combinatoria", "Partidos ida y vuelta"),

    ("Si el perímetro de un rectángulo es 36 cm y su largo es el doble de su ancho, ¿cuánto mide su área?",
     ["72 cm²", "64 cm²", "81 cm²", "54 cm²"], 0,
     "2(L + A) = 36 ⇒ L + A = 18. Si L = 2A ⇒ 3A = 18 ⇒ A = 6 cm y L = 12 cm. Área = 12 × 6 = 72 cm².",
     "Geometría algebraica", "Intermedio", "Razonamiento Cuantitativo", "Áreas y perímetros"),

    ("¿Qué número es a 48 como 15 es a 36?",
     ["20", "18", "24", "16"], 0,
     "Proporción directa: x / 48 = 15 / 36 ⇒ x = (48 × 15) / 36 = 720 / 36 = 20.",
     "Proporciones numéricas", "Intermedio", "Razonamiento Numérico", "Razones y proporciones"),

    ("Si en una habitación hay 5 personas y cada una saluda de mano exactamente una vez a todas las demás, ¿cuántos apretones de mano se dan en total?",
     ["10", "20", "15", "25"], 0,
     "Combinaciones de 5 elementos tomados de 2 en 2: C(5, 2) = (5 × 4) / 2 = 10 apretones.",
     "Conteo de saludos e interacciones", "Intermedio", "Combinatoria", "Combinaciones simples"),

    ("¿Cuál es la media aritmética de los números 14, 18, 22, 26 y 30?",
     ["22", "20", "24", "21"], 0,
     "Al ser una progresión aritmética con cantidad impar de términos, la media coincide con el término central: 22.",
     "Promedios en sucesiones simétricas", "Intermedio", "Razonamiento Numérico", "Estadística descriptiva"),

    ("En una carrera, si superas a la persona que va en segundo lugar, ¿en qué posición quedas?",
     ["Segundo lugar", "Primer lugar", "Tercer lugar", "Cuarto lugar"], 0,
     "Al adelantar a quien ocupaba el segundo puesto, tomas inmediatamente su lugar: quedas en segundo puesto.",
     "Problemas de lógica situacional", "Intermedio", "Razonamiento Lógico", "Posición ordinal"),

    ("¿Cuántos números enteros impares de tres dígitos pueden formarse con las cifras 2, 3, 5, 8 sin repetir cifras?",
     ["12 números", "6 números", "18 números", "24 números"], 0,
     "Para ser impar, el último dígito debe ser 3 o 5 (2 opciones). Para las centenas quedan 3 opciones y para las decenas 2 opciones: 3 × 2 × 2 = 12 números.",
     "Principio fundamental del conteo", "Intermedio", "Combinatoria", "Formación de números"),

    ("Si un depósito se llena con un grifo A en 3 horas y con un grifo B en 6 horas, ¿cuánto tardarán en llenarlo ambos grifos juntos?",
     ["2 horas", "4.5 horas", "1.5 horas", "2.5 horas"], 0,
     "En 1 hora A llena 1/3 y B llena 1/6. Juntos llenan 1/3 + 1/6 = 3/6 = 1/2 del depósito por hora. Tardarán 2 horas completas.",
     "Problemas de grifos y rendimiento", "Intermedio", "Razonamiento Matemático", "Fracción de obra"),

    ("¿Qué ángulo forman las agujas de un reloj cuando marca las 3:30?",
     ["75°", "90°", "80°", "85°"], 0,
     "El minutero está en el 6 (180°). La aguja horaria ha avanzado la mitad de una hora (30°/2 = 15°) desde las 3 (90°): 90° + 15° = 105°. Ángulo = 180° - 105° = 75°.",
     "Cronometría analítica", "Intermedio", "Razonamiento Matemático", "Ángulos horarios"),

    ("En una fila de árboles, el árbol de manzanas es el séptimo contando de izquierda a derecha y el decimocuarto contando de derecha a izquierda. ¿Cuántos árboles hay en la fila?",
     ["20 árboles", "21 árboles", "19 árboles", "22 árboles"], 0,
     "Total = Posición izquierda + Posición derecha - 1 = 7 + 14 - 1 = 20 árboles.",
     "Conteo de elementos alineados", "Intermedio", "Razonamiento Lógico", "Ordenamiento lineal"),

    ("Si todos los A son B, y ningún B es C, ¿cuál de las siguientes conclusiones es necesariamente cierta?",
     ["Ningún A es C", "Todos los C son A", "Algunos A son C", "Todos los B son A"], 0,
     "Silogismo clásico Celarent: Todo A está contenido en B; si B no tiene intersección con C, A tampoco puede tener intersección con C.",
     "Silogismo categórico formal", "Intermedio", "Lógica Deductiva", "Inferencia de conjuntos"),

    ("Un tren viaja a 72 km/h. ¿Cuántos metros recorre por cada segundo?",
     ["20 metros/segundo", "25 metros/segundo", "18 metros/segundo", "15 metros/segundo"], 0,
     "Conversión de unidades: 72 km/h ÷ 3.6 = 20 m/s.",
     "Conversión de velocidades", "Intermedio", "Razonamiento Cuantitativo", "Cinemática básica"),

    ("¿Qué número completa la analogía: 64 : 4 :: 125 : ___?",
     ["5", "25", "15", "10"], 0,
     "La relación es la raíz cúbica: ∛64 = 4; por lo tanto ∛125 = 5.",
     "Analogías de potencias y raíces", "Intermedio", "Razonamiento Numérico", "Raíces cúbicas"),

    ("Si al triple de un número se le resta 8, se obtiene el doble del mismo número aumentado en 4. ¿Cuál es el número?",
     ["12", "10", "14", "16"], 0,
     "Planteamiento: 3x - 8 = 2x + 4 ⇒ 3x - 2x = 4 + 8 ⇒ x = 12.",
     "Ecuaciones de primer grado verbales", "Intermedio", "Razonamiento Numérico", "Lenguaje algebraico")
]

bachillerato_extra20 = [
    # 81 a 100: Lógica proposicional, combinatoria y modelos matemáticos
    ("¿Cuál es la función booleana simplificada de F(A, B) = (A + B)·(A + B')?",
     ["A", "B", "A·B", "1"], 0,
     "Por distributividad de la suma lógica o producto notable booleano: (A + B)·(A + B') = A + (B·B') = A + 0 = A.",
     "Álgebra booleana formal", "Desafiante", "Lógica Proposicional", "Leyes distributivas"),

    ("Dada la función proposicional P(x): 'x² - 4 = 0' en el dominio de los números reales ℝ, ¿cuál es el conjunto de verdad de P(x)?",
     ["{2, -2}", "{2}", "{4, -4}", "{16}"], 0,
     "Las raíces reales de la ecuación cuadrática x² = 4 son exactamente x = 2 y x = -2.",
     "Funciones proposicionales", "Desafiante", "Lógica de Predicados", "Conjunto de verdad"),

    ("En una permutación caótica o desbarajuste (derangement) de 3 elementos {1, 2, 3}, ¿cuántas permutaciones no dejan ningún elemento en su posición original?",
     ["2 permutaciones", "1 permutación", "3 permutaciones", "6 permutaciones"], 0,
     "Los desbarajustes de 3 elementos son D_3 = 3!(1 - 1/1! + 1/2! - 1/3!) = 6(1/2 - 1/6) = 6(2/6) = 2 (específicamente (2,3,1) y (3,1,2)).",
     "Desbarajustes combinatorios", "Desafiante", "Combinatoria", "Permutaciones sin puntos fijos"),

    ("¿Cuál es el valor del número combinatorio C(n, 0) + C(n, 1) + ... + C(n, n) para cualquier entero positivo n?",
     ["2ⁿ", "n!", "n²", "2n"], 0,
     "Por el teorema del binomio de Newton evaluado en x = 1, y = 1: (1 + 1)ⁿ = 2ⁿ.",
     "Identidades del binomio de Newton", "Desafiante", "Combinatoria", "Sumas combinatorias"),

    ("Si una variable aleatoria continua X tiene función de densidad de probabilidad uniforme en el intervalo [0, 10], ¿cuál es la probabilidad P(2 ≤ X ≤ 7)?",
     ["0.50 (50%)", "0.70", "0.20", "0.35"], 0,
     "Para la distribución continua uniforme: P(a ≤ X ≤ b) = (b - a) / (B - A) = (7 - 2) / (10 - 0) = 5 / 10 = 0.50.",
     "Distribución uniforme continua", "Desafiante", "Probabilidad y Estadística", "Densidad continua"),

    ("¿Qué condición necesaria y suficiente debe cumplir una matriz cuadrada A para que sea invertible (admita matriz inversa A⁻¹)?",
     ["Su determinante debe ser estrictamente distinto de cero (det(A) ≠ 0)", "Su traza debe ser positiva", "Todos sus elementos deben ser positivos", "Debe ser simétrica"], 0,
     "Una matriz es regular o invertible si y solo si sus filas (o columnas) son linealmente independientes, lo que equivale a det(A) ≠ 0.",
     "Álgebra lineal matricial", "Desafiante", "Álgebra Lineal y Geometría", "Determinantes e inversas"),

    ("El rango de una matriz representa:",
     ["El número máximo de filas o columnas linealmente independientes que posee", "El producto de los elementos de su diagonal principal", "La cantidad total de ceros", "La dimensión de su espacio nulo"], 0,
     "Por definición de álgebra lineal, el rango coincide con la dimensión del espacio generado por las filas o columnas de la matriz.",
     "Rango matricial", "Desafiante", "Álgebra Lineal y Geometría", "Espacios vectoriales"),

    ("En un espacio métrico, un conjunto se define formalmente como 'cerrado' si:",
     ["Contiene a todos sus puntos de acumulación (o su complemento es un conjunto abierto)", "Es acotado", "Es finito", "Está contenido en una bola abierta"], 0,
     "Por axioma topológico, un conjunto F es cerrado si y solo si contiene todos los límites de sus sucesiones convergentes.",
     "Topología de espacios métricos", "Desafiante", "Análisis Matemático", "Conjuntos cerrados"),

    ("¿Qué postula el Teorema del Valor Medio de Lagrange para una función f derivable en [a, b]?",
     ["Existe al menos un punto c en (a, b) tal que f'(c) = [f(b) - f(a)] / (b - a)", "La función alcanza su valor máximo en c", "La derivada es nula en todos los puntos", "f(a) debe ser igual a f(b)"], 0,
     "Garantiza geométricamente que existe al menos un punto donde la recta tangente es paralela a la recta secante que une los extremos.",
     "Cálculo diferencial riguroso", "Desafiante", "Cálculo y Funciones", "Teorema del Valor Medio"),

    ("La regla de la cadena para la derivada de una función compuesta (f ∘ g)'(x) se formula matemáticamente como:",
     ["f'(g(x)) · g'(x)", "f'(x) · g'(x)", "f'(g'(x))", "f(x) · g'(x) + f'(x) · g(x)"], 0,
     "La derivada de la composición es el producto de la derivada exterior evaluada en la función interior por la derivada de la función interior.",
     "Derivada de funciones compuestas", "Desafiante", "Cálculo y Funciones", "Regla de la cadena"),

    ("En lógica difusa (Fuzzy Logic), el grado de pertenencia de un elemento a un conjunto difuso:",
     ["Es un número real continuo dentro del intervalo cerrado [0, 1]", "Solo puede valer exactamente 0 o 1", "Es siempre mayor que 1", "Es un número imaginario"], 0,
     "A diferencia de la lógica bivalente aristotélica, la lógica difusa modela la gradualidad y la incertidumbre en el continuo [0, 1].",
     "Lógica difusa", "Desafiante", "Lógica Formal", "Conjuntos difusos"),

    ("¿Qué es una relación de orden estricto?",
     ["Una relación binaria que es irreflexiva, asimétrica y transitiva", "Una relación reflexiva y simétrica", "Una relación de equivalencia", "Una función biyectiva"], 0,
     "El orden estricto (como '<' en los reales) no admite reflexividad (ningún número es menor que sí mismo) ni simetría.",
     "Relaciones de orden estricto", "Desafiante", "Teoría de Conjuntos", "Órdenes matemáticos"),

    ("En un grafo conexo no dirigido, ¿qué condición caracteriza la existencia de un camino euleriano (que recorra todas las aristas exactamente una vez)?",
     ["El grafo tiene exactamente cero o dos vértices de grado impar", "Todos los vértices deben tener grado impar", "El grafo debe tener forma de árbol", "Debe ser un grafo bipartito completo"], 0,
     "Teorema clásico de Euler (1736, puentes de Königsberg): si tiene 0 vértices impares es un ciclo euleriano cerrado; si tiene 2 vértices impares es un camino abierto.",
     "Teoría de grafos", "Desafiante", "Matemática Discreta", "Grafos eulerianos"),

    ("¿Qué es un árbol en la teoría matemática de grafos?",
     ["Un grafo conexo y acíclico (que no contiene ciclos cerrados)", "Un grafo donde todos los vértices tienen grado 2", "Un grafo con ciclos dirigidos infinitos", "Un grafo no conexo"], 0,
     "Un árbol con V vértices tiene siempre exactamente V - 1 aristas y una única trayectoria simple entre cualquier par de vértices.",
     "Árboles y grafos", "Desafiante", "Matemática Discreta", "Estructuras de árboles"),

    ("¿Cuál es el valor del límite fundamental trigonométrico lim(x → 0) [sen(x) / x]?",
     ["1", "0", "Infinito", "No existe"], 0,
     "Es el límite trigonométrico base del cálculo que permite demostrar que la derivada del seno es el coseno.",
     "Límites trigonométricos", "Desafiante", "Cálculo y Funciones", "Límites indeterminados"),

    ("En teoría de números, dos enteros a y b son congruentes módulo m (a ≡ b mod m) si y solo si:",
     ["m divide exactamente a la diferencia (a - b)", "a y b son números primos entre sí", "a es múltiplo de b", "m es igual a a + b"], 0,
     "Definición fundamental de Gauss para la aritmética modular: a - b = k·m para algún entero k.",
     "Aritmética modular", "Desafiante", "Teoría de Números", "Congruencias lineales"),

    ("¿Cuál es el resto que se obtiene al dividir 2¹⁰⁰ entre 3 aplicando congruencias?",
     ["1", "2", "0", "No se puede calcular"], 0,
     "Notamos que 2 ≡ -1 (mod 3). Por ende, 2¹⁰⁰ ≡ (-1)¹⁰⁰ ≡ 1 (mod 3). El resto es 1.",
     "Aritmética modular de potencias", "Desafiante", "Teoría de Números", "Pequeño Teorema de Fermat"),

    ("¿Qué establece el Pequeño Teorema de Fermat para un número primo p y un entero a no divisible por p?",
     ["a^(p - 1) ≡ 1 (mod p)", "a^p ≡ 0 (mod p)", "p^(a - 1) ≡ 1 (mod a)", "a + p es primo"], 0,
     "Teorema pilar de la teoría algebraica de números y la base de los algoritmos de criptografía moderna como RSA.",
     "Pequeño Teorema de Fermat", "Desafiante", "Teoría de Números", "Primalidad y criptografía"),

    ("En un plano se tienen 10 puntos tales que no hay 3 colineales. ¿Cuántos triángulos distintos con vértices en esos puntos se pueden trazar?",
     ["120 triángulos", "720 triángulos", "90 triángulos", "240 triángulos"], 0,
     "Combinaciones de 10 tomados de 3 en 3: C(10, 3) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 triángulos.",
     "Geometría combinatoria", "Desafiante", "Combinatoria", "Conteo de triángulos"),

    ("Si la probabilidad de que un arquero acierte en la diana en cada disparo es 0.8 de forma independiente, ¿cuál es la probabilidad de que falle por primera vez en su cuarto disparo?",
     ["(0.8)³ × 0.2 = 0.1024", "(0.8)⁴", "0.2 × 4", "(0.2)³ × 0.8"], 0,
     "Distribución geométrica: tres aciertos consecutivos seguidos de un fallo: P = 0.8 × 0.8 × 0.8 × 0.2 = 0.1024.",
     "Distribución geométrica", "Desafiante", "Probabilidad", "Variables aleatorias geométricas")
]

tecnico_extra20 = [
    # 81 a 100: Sistemas lógicos, PLC, mecatrónica y redes
    ("En un circuito con puente de Wheatstone en equilibrio, la condición de corriente cero en el galvanómetro central se cumple cuando:",
     ["El producto cruzado de las resistencias de las ramas opuestas es idéntico (R1·R4 = R2·R3)", "Todas las resistencias valen cero", "La tensión de alimentación es alterna", "El galvanómetro está cortocircuitado"], 0,
     "El puente de Wheatstone equilibra potenciales en sus dos nodos centrales cuando R1/R2 = R3/R4, base de las mediciones de galgas extensométricas.",
     "Puente de Wheatstone", "Intermedio", "Electrotecnia", "Mediciones eléctricas"),

    ("En un motor paso a paso bipolar con ángulo de paso de 1.8°, ¿cuántos pulsos completos debe recibir para realizar una revolución completa de 360° en modo paso completo (full-step)?",
     ["200 pulsos", "180 pulsos", "360 pulsos", "100 pulsos"], 0,
     "Pulsos por vuelta = 360° / 1.8° = 200 pasos por revolución.",
     "Motores paso a paso", "Intermedio", "Automatización y Robótica", "Control de movimiento"),

    ("¿Qué parámetro de un servomotor industrial diferencia su control respecto al de un motor de inducción ordinario?",
     ["Incorpora un sensor de retroalimentación de posición (encoder o resolver) para control en lazo cerrado de posición y velocidad", "Solo puede girar en un sentido", "No requiere electricidad", "Tiene mayor tamaño físico"], 0,
     "El servocontrol monitorea continuamente el error entre la posición real y la consigna deseada, corrigiendo instantáneamente.",
     "Servosistemas industriales", "Intermedio", "Control Automático", "Servomotores"),

    ("En un encoder óptico incremental de dos canales en cuadratura (canales A y B desfasados 90° eléctricos), ¿cómo detecta el microcontrolador el sentido de giro del eje?",
     ["Determinando cuál de las dos señales conmuta primero a flanco de subida (si A precede a B o si B precede a A)", "Midiendo la amplitud de voltaje de la señal", "Contando el número total de ranuras", "Midiendo la frecuencia con un filtro RC"], 0,
     "El desfase de 90° hace que en giro horario A lidere a B, mientras que en antihorario B lidera a A, permitiendo cuadruplicar la resolución.",
     "Encoders incrementales", "Intermedio", "Instrumentación y Control", "Señales en cuadratura"),

    ("¿Cuál es la función del bus de campo industrial Modbus RTU en un lazo de automatización?",
     ["Comunicar maestros y esclavos mediante tramas binarias sobre el estándar físico serie RS-485", "Suministrar energía de 400V a los motores", "Proteger las líneas de datos contra rayos", "Almacenar archivos de texto en tarjetas SD"], 0,
     "Modbus RTU es el protocolo industrial estándar para transmitir registros de datos con verificación CRC sobre interfaces RS-485 multipunto.",
     "Buses de campo industriales", "Intermedio", "Redes de Datos", "Protocolo Modbus RTU"),

    ("En un lazo de corriente estándar analógico industrial 4-20 mA, ¿por qué se utiliza un cero vivo de 4 mA en lugar de 0 mA?",
     ["Para distinguir inequívocamente una señal de medición cero de una rotura física del cable conductor", "Para aumentar el consumo de batería", "Para calentar los instrumentos en invierno", "Por razones estéticas de los instrumentos"], 0,
     "Si la corriente cae a 0 mA, el sistema detecta de inmediato fallo de línea (cable cortado), proporcionando seguridad intrínseca ante fallos.",
     "Lazos de corriente 4-20 mA", "Intermedio", "Instrumentación y Control", "Transmisores analógicos"),

    ("En un circuito con relé de estado sólido (SSR), ¿cuál es su ventaja principal frente a un relé electromecánico convencional?",
     ["Conmutación estática sin piezas móviles mecánicas, sin rebotes ni arcos eléctricos y con vida útil de conmutación muy superior", "Menor costo en todos los modelos", "No disipa calor alguno", "Soporta sobretensiones infinitas"], 0,
     "Al utilizar semiconductores (triacs/tiristores) con acoplamiento óptico, conmutan a alta velocidad sin desgaste mecánico ni ruido por chispa.",
     "Relés de estado sólido", "Intermedio", "Electrónica de Potencia", "Conmutación estática"),

    ("En un variador de frecuencia (VFD) que alimenta un motor de inducción trifásico, ¿cómo se controla la velocidad del motor?",
     ["Variando coordinadamente la frecuencia y la tensión eficaz de salida suministrada al estator manteniendo la relación V/Hz constante", "Cambiando el número físico de polos con un interruptor", "Aumentando la resistencia del bobinado con un potenciómetro", "Cortando una de las tres fases"], 0,
     "La velocidad síncrona es proporcional a la frecuencia (n = 120f/P); mantener V/f constante evita la saturación magnética del núcleo.",
     "Variadores de frecuencia", "Intermedio", "Electrotecnia de Potencia", "Control V/f"),

    ("¿Qué dispositivo neumático absorbe la energía cinética al final de carrera de un cilindro para evitar impactos mecánicos bruscos contra las culatas?",
     ["Amortiguador neumático regulable de fin de carrera", "Válvula de retención pilotada", "Filtro de aire con purga automática", "Lubricador por niebla"], 0,
     "Un casquillo cónico estrangula progresivamente el aire de escape en el tramo final, frenando suavemente el émbolo.",
     "Amortiguación neumática", "Intermedio", "Neumática Industrial", "Cilindros neumáticos"),

    ("En un plano hidráulico, ¿qué indica una flecha inclinada cruzando diagonalmente el símbolo de una bomba hidráulica?",
     ["Bomba de cilindrada variable (caudal regulable)", "Bomba averiada", "Bomba reversible de giro manual", "Bomba sumergida en agua"], 0,
     "Por norma ISO 1219, una flecha diagonal a 45° indica que el parámetro del componente (caudal, presión o resorte) es variable o ajustable.",
     "Simbología hidráulica ISO 1219", "Intermedio", "Oleohidráulica", "Símbolos normalizados"),

    ("¿Qué función tiene un diodo volante (flyback diode) conectado en antiparalelo con la bobina de un relé en un circuito de control con transistores?",
     ["Derivar de forma segura la sobretensión inductiva transitoria inversa generada al desconectar la bobina, protegiendo al transistor de conmutación", "Aumentar la fuerza magnética del relé", "Indicar con luz que el relé está cerrado", "Rectificar la señal de alterna a continua"], 0,
     "Por la ley de Lenz, al cortar la corriente bruscamente en un inductor se genera una alta fem inversa que destruiría la unión del transistor.",
     "Protección inductiva", "Intermedio", "Electrónica de Potencia", "Diodo flyback"),

    ("En una fuente conmutada reductora (Buck Converter), la tensión continua media de salida respecto a la de entrada es:",
     ["Estrictamente menor que la tensión de entrada y proporcional al ciclo de trabajo D (Vout = D · Vin)", "Mayor que la tensión de entrada", "Idéntica a la tensión de entrada", "Negativa en todos los casos"], 0,
     "El convertidor Buck utiliza modulación PWM y un filtro LC para reducir eficientemente la tensión con mínimo desperdicio térmico.",
     "Convertidores DC-DC", "Intermedio", "Electrónica de Potencia", "Topología Buck"),

    ("¿Qué componente de potencia se utiliza típicamente como interruptor estático de control en arrancadores suaves de motores de gran potencia?",
     ["Tiristores (SCR) conectados en antiparalelo en cada fase", "Transistores bipolares NPN de señal", "Diodos Zener", "Fusibles rápidos"], 0,
     "Los tiristores en antiparalelo permiten modular el ángulo de disparo de la onda senoidal reduciendo la corriente de arranque del motor.",
     "Arrancadores suaves", "Intermedio", "Electrotecnia de Potencia", "Tiristores SCR"),

    ("En una red industrial Profibus-DP, ¿qué elemento debe instalarse obligatoriamente en los dos conectores extremos físicos de la línea de bus?",
     ["Una resistencia terminadora activa de línea para evitar reflexiones de señal electromagnética", "Un fusible térmico de 10A", "Una toma a tierra directa del hilo verde", "Un repetidor óptico"], 0,
     "Las terminaciones igualan la impedancia característica del cable evitando rebotes de señal que corromperían las tramas digitales.",
     "Comunicaciones industriales", "Intermedio", "Redes de Datos", "Terminadores de bus"),

    ("¿Cuál es la función del comando 'traceroute' (o tracert) en la gestión de redes de computadoras?",
     ["Listar los enrutadores intermedios por los que pasa un paquete IP hasta llegar al destino utilizando el campo TTL decreciente", "Medir el ancho de banda contratado con el operador", "Escanear puertos TCP abiertos en el servidor", "Borrar la memoria caché del navegador"], 0,
     "Al incrementar progresivamente el Time To Live (TTL), cada router intermedio devuelve un mensaje ICMP Time Exceeded identificando su IP.",
     "Herramientas de redes", "Intermedio", "Redes de Datos", "Comando traceroute"),

    ("En un autómata programable, ¿qué fenómeno describe el 'tiempo de ciclo de scan' (Scan Time)?",
     ["El tiempo total que tarda el PLC en leer entradas físicas, ejecutar el programa de usuario y actualizar las salidas físicas", "El tiempo que tarda en encender la fuente de poder", "La velocidad de los pulsos del reloj de cuarzo interno", "El tiempo de garantía del fabricante"], 0,
     "Un ciclo de scan típico oscila entre 1 y 20 milisegundos; eventos externos más rápidos que el scan requieren interrupciones rápidas.",
     "Arquitectura de PLCs", "Intermedio", "Automatización Industrial", "Ciclo de Scan"),

    ("¿Qué ocurre si dos bobinas con la misma dirección de memoria física de salida se programan en líneas distintas (doble bobinado) en un programa Ladder?",
     ["El estado escrito por la última línea evaluada sobrescribirá el estado de la primera en la tabla de salidas al final del scan", "El PLC entra en falla crítica y se apaga", "La bobina se energiza al doble de tensión", "Se ejecutan las dos al mismo tiempo sin conflicto"], 0,
     "El error de doble bobina es clásico en novatos: la primera instrucción se ignora efectivamente porque la segunda sobreescribe el registro imagen de salida.",
     "Buenas prácticas de programación Ladder", "Intermedio", "Automatización Industrial", "Doble bobina en PLC"),

    ("En refrigeración industrial con amoníaco (R-717), ¿por qué está terminantemente prohibido el uso de tuberías y accesorios de cobre?",
     ["Porque el amoníaco en presencia de humedad corroe y ataca severamente al cobre y sus aleaciones formando complejos de cobre", "Porque el cobre no resiste la presión del amoníaco", "Porque el cobre es un aislante térmico", "Porque el amoníaco se solidifica dentro del cobre"], 0,
     "Los sistemas de amoníaco se construyen exclusivamente en acero al carbono o acero inoxidable para evitar corrosión destructiva.",
     "Sistemas frigoríficos", "Intermedio", "Climatización y Refrigeración", "Compatibilidad de materiales"),

    ("¿Qué sensor de temperatura industrial basa su funcionamiento en la variación lineal de la resistencia eléctrica del platino con la temperatura?",
     ["Termorresistencia Pt100 (RTD)", "Termopar tipo K", "Termistor NTC de óxidos metálicos", "Pirómetro de radiación"], 0,
     "La Pt100 tiene exactamente 100 ohmios a 0 °C y ofrece gran precisión y estabilidad para la industria de procesos.",
     "Sensores de temperatura", "Intermedio", "Instrumentación y Control", "RTD Pt100"),

    ("En un termopar (como el tipo K de cromel-alumel), ¿qué efecto físico genera la militensión en la junta de medida proporcional a la diferencia térmica?",
     ["Efecto Seebeck", "Efecto Peltier", "Efecto Thomson", "Efecto Hall"], 0,
     "El efecto termoeléctrico Seebeck genera una fuerza electromotriz proporcional al gradiente de temperatura entre la junta caliente y la junta fría de referencia.",
     "Termopares", "Intermedio", "Instrumentación y Control", "Efecto Seebeck")
]

universitario_extra20 = [
    # 81 a 100: Epistemología avanzada, teoría de modelos y lógica superior
    ("En la teoría de tipos y fundamentos de la informática teórica, ¿qué establece el Isomorfismo de Curry-Howard?",
     ["Una correspondencia biunívoca profunda y estructural entre las fórmulas de la lógica intuicionista y los tipos de datos de un lenguaje de programación funcional (Pruebas = Programas)", "Que el hardware y el software son indistinguibles", "Que todos los compiladores cometen los mismos errores lógicos", "Que la lógica clásica es equivalente a la física cuántica"], 0,
     "Demostrar un teorema en lógica constructiva equivale exactamente a escribir un programa que habita ese tipo, base de los asistentes de demostración como Coq y Lean.",
     "Isomorfismo de Curry-Howard", "Desafiante", "Ciencias de la Computación Teórica", "Teoría de tipos"),

    ("¿Qué distingue a la Lógica Intuicionista de la Lógica Clásica estándar?",
     ["El rechazo del Principio del Tercero Excluido (p ∨ ¬p) y de la eliminación de la doble negación (¬¬p → p) como axiomas universalmente válidos sin construcción explícita", "El rechazo de la conjunción", "La aceptación de contradicciones como verdaderas", "La eliminación de los cuantificadores"], 0,
     "Para Brouwer y los constructivistas, afirmar la verdad de un enunciado exige exhibir un testigo o algoritmo explícito de construcción.",
     "Lógica intuicionista", "Desafiante", "Lógica Matemática Avanzada", "Constructivismo matemático"),

    ("En la teoría de categorías abstractas (Saunders Mac Lane), ¿qué es un Functor entre dos categorías C y D?",
     ["Una aplicación que asocia cada objeto de C a un objeto de D y cada morfismo de C a un morfismo de D preservando identidades y composición de flechas", "Una matriz invertible de gran dimensión", "Un conjunto que contiene solo funciones biyectivas", "Un número real transitorio"], 0,
     "Los functores son los homomorfismos naturales que permiten traducir conceptos y estructuras algebraicas complejas de una categoría a otra.",
     "Teoría de categorías", "Desafiante", "Álgebra Lineal Abstracta", "Functores y categorías"),

    ("En la semántica de la lógica cuántica formulada por Birkhoff y von Neumann (1936), ¿qué axioma del álgebra de Boole clásica no se cumple en las proposiciones cuánticas?",
     ["La ley distributiva: a ∧ (b ∨ c) ≠ (a ∧ b) ∨ (a ∧ c)", "La ley de identidad", "El principio de reflexividad", "La regla de contraposición"], 0,
     "El principio de indeterminación y la no conmutatividad de operadores incompatibles se refleja formalmente en un retículo ortocomplementado no distributivo.",
     "Lógica cuántica", "Desafiante", "Física Cuántica", "Retículos no distributivos"),

    ("¿Qué es la Distancia de Kolmogorov o Complejidad de Kolmogorov de una cadena binaria s?",
     ["La longitud del programa computacional más corto capaz de generar la cadena s como salida en una Máquina de Turing universal", "El número de unos que contiene la cadena", "El tiempo que tarda en imprimirse en pantalla", "La entropía termodinámica del cable"], 0,
     "La complejidad de Kolmogorov define matemáticamente el contenido aleatorio o de compresibilidad de un objeto: una cadena es puramente aleatoria si es incompresible.",
     "Complejidad de Kolmogorov", "Desafiante", "Informática Teórica", "Información algorítmica"),

    ("¿Qué demostró Gregory Chaitin con su constante Omega (Ω de Chaitin)?",
     ["Un número real formalmente bien definido que representa la probabilidad de parada de un programa aleatorio, pero que es máximamente incompresible y no computable", "Que el número pi es racional", "Que todas las computadoras cuánticas son idénticas", "Que la velocidad del cálculo es infinita"], 0,
     "El número Omega de Chaitin condensa la incompletitud gödeliana en una probabilidad no computable cuyas cifras no pueden ser predichas por ningún sistema formal finito.",
     "Constante Omega de Chaitin", "Desafiante", "Ciencias de la Computación Teórica", "Incomputabilidad"),

    ("En la teoría de la demostración estructural de Gerhard Gentzen, ¿qué garantiza el Teorema de Eliminación del Corte (Hauptsatz) en el cálculo de secuentes?",
     ["Cualquier demostración lógica formal que utilice lemas auxiliares intermediarios (corte) puede transformarse en una demostración directa 'libre de cortes' basada únicamente en las subfórmulas de la conclusión", "Que no existen contradicciones en el mundo", "Que los cortes deben eliminarse de los libros", "Que la lógica modal es inconsistente"], 0,
     "La propiedad de la subfórmula derivada de la eliminación del corte garantiza la consistencia del sistema y fundamenta la demostración automática de teoremas.",
     "Cálculo de secuentes de Gentzen", "Desafiante", "Lógica Matemática Avanzada", "Teorema del corte"),

    ("En la teoría de modelos abstracta, ¿qué es la 'Estabilidad de Morley' en teorías de primer orden?",
     ["Una clasificación formal de las teorías según la cantidad de tipos semánticos completos que admiten sobre conjuntos de parámetros de cardinalidad infinita", "La velocidad con que converge un algoritmo numérico", "La estabilidad térmica de un reactor nuclear", "La solidez de los axiomas de la física teórica"], 0,
     "El Teorema de Morley resolvió la conjetura de Los demostrando que si una teoría es categórica en un cardinal no numerable, es categórica en todos los cardinales no numerables.",
     "Teoría de la estabilidad de Morley", "Desafiante", "Teoría de Modelos", "Clasificación de Shelah"),

    ("¿Qué postula el Teorema de No-Clonación (No-Cloning Theorem) en teoría cuántica de la información (Wootters y Zurek, 1982)?",
     ["Es físicamente imposible crear una copia exacta e idéntica de un estado cuántico superpuesto arbitrario y desconocido sin destruirlo", "Las computadoras no pueden copiar archivos de audio", "Los átomos no pueden reproducirse en laboratorio", "La clonación biológica de animales es imposible"], 0,
     "Por la naturaleza unitaria y lineal de la evolución cuántica, no existe ningún operador unitario U tal que U(|ψ⟩|0⟩) = |ψ⟩|ψ⟩ para todo estado |ψ⟩.",
     "Teoría de la información cuántica", "Desafiante", "Física Cuántica", "Teorema de no-clonación"),

    ("En la paradoja de EPR (Einstein-Podolsky-Rosen, 1935), ¿cuál era la objeción filosófica contra la mecánica cuántica formulada por Einstein?",
     ["La existencia de 'acción fantasmal a distancia' (spooky action at a distance), concluyendo que la teoría cuántica era incompleta y requería variables ocultas locales", "Que la velocidad de la luz era superada por los electrones", "Que la fórmula de Planck era algebraicamente incorrecta", "Que la energía no se conserva en las colisiones"], 0,
     "EPR postularon el criterio de realidad local: si sin perturbar un sistema se puede predecir con certeza una magnitud, existe un elemento de realidad local correspondiente.",
     "Paradoja EPR", "Desafiante", "Física Cuántica", "Fundamentos de la física cuántica"),

    ("En epistemología contemporánea, ¿qué expusieron los contraejemplos de Edmund Gettier (1963) frente a la definición platónica clásica del conocimiento como 'creencia verdadera justificada' (JTB)?",
     ["Demostraron la existencia de creencias que son verdaderas y están justificadas, pero que dependen de una casualidad afortunada o premisas falsas, por lo que no califican como conocimiento genuino", "Que nadie puede justificar sus creencias científicas", "Que Platón inventó la verdad subjetiva", "Que la percepción sensorial nunca es engañosa"], 0,
     "Los casos de Gettier mostraron que las tres condiciones JTB son necesarias pero no suficientes para definir el conocimiento epistemológico.",
     "Problema de Gettier", "Desafiante", "Epistemología Científica", "Definición del conocimiento"),

    ("En filosofía de la ciencia, ¿qué sostiene la 'Tesis de Duhem-Quine' (holismo de la confirmación)?",
     ["Una hipótesis científica aislada nunca puede ser sometida a prueba empírica por sí sola, pues siempre requiere un haz de supuestos auxiliares, condiciones iniciales y teorías instrumentales concomitantes", "Que todas las teorías de la física son verdaderas simultáneamente", "Que los científicos siempre rechazan las hipótesis erróneas", "Que los experimentos de laboratorio no tienen valor"], 0,
     "Si un experimento refuta una predicción, la lógica deductiva no señala cuál de las hipótesis (si la central o una auxiliar) es la responsable del fallo.",
     "Tesis de Duhem-Quine", "Desafiante", "Filosofía de la Ciencia", "Holismo epistemológico"),

    ("¿Qué es la 'Inconmensurabilidad' de teorías científicas según Thomas Kuhn y Paul Feyerabend?",
     ["La imposibilidad de comparar directamente dos paradigmas sucesivos mediante un lenguaje neutral común, dado que los mismos términos cambian de significado y marco ontológico", "La dificultad de medir constantes físicas en el vacío", "La falta de dinero para financiar aceleradores de partículas", "La discrepancia entre el sistema métrico y el sistema inglés"], 0,
     "Un cambio de paradigma reorganiza la red conceptual completa del mundo, imposibilitando una traducción punto por punto entre ellos.",
     "Inconmensurabilidad de paradigmas", "Desafiante", "Filosofía de la Ciencia", "Epistemología kuhniana"),

    ("En la teoría de conjuntos y grandes cardinales, ¿qué es un 'Cardinal Inaccesible'?",
     ["Un número cardinal no numerable que no puede ser alcanzado mediante uniones de menor cardinalidad ni por potencias de cardinales menores", "Un número imaginario que no se puede escribir en papel", "El último número primo descubierto", "Un cardinal con valor negativo"], 0,
     "La existencia de cardinales inaccesibles no se puede demostrar dentro de ZFC, pero garantiza un modelo interno de ZFC (universo de Grothendieck).",
     "Grandes cardinales", "Desafiante", "Teoría Axiomática de Conjuntos", "Cardinales inaccesibles"),

    ("¿Qué demostró el Teorema de Tverberg en geometría combinatoria y topológica (1966)?",
     ["Cualquier conjunto de (d + 1)(r - 1) + 1 puntos en el espacio d-dimensional ℝ^d puede particionarse en r subconjuntos disjuntos cuyas envolventes convexas tienen una intersección común no vacía", "Que los polígonos regulares no admiten particiones", "Que el espacio tridimensional no puede curvarse", "Que todos los triángulos son equiláteros"], 0,
     "El teorema de Tverberg generaliza el teorema de Radon para r partes arbitrarias y es una piedra angular de la combinatoria geométrica moderna.",
     "Teorema de Tverberg", "Desafiante", "Geometría Combinatoria", "Envolventes convexas"),

    ("En teoría de la computación cuántica, ¿qué problema resuelve el Algoritmo de Shor (1994) en tiempo polinomial cuántico BQP?",
     ["La factorización de números enteros en factores primos y el cálculo del logaritmo discreto", "La simulación de la gravitación universal", "El diseño de compiladores de lenguaje C", "La optimización del tráfico urbano"], 0,
     "Shor amenazó la seguridad del criptosistema RSA demostrando que un ordenador cuántico con corrección de errores factoriza en O((log N)³).",
     "Algoritmo de Shor", "Desafiante", "Computación Cuántica", "Criptología y Seguridad"),

    ("¿Qué aceleración cuadrática ofrece el Algoritmo de Grover (1996) en la búsqueda cuántica sobre una base de datos desordenada de N elementos?",
     ["Reduce la complejidad temporal de O(N) clásico a O(√N) cuántico mediante amplificación de amplitud", "Reduce el tiempo de búsqueda a O(1) instantáneo", "No mejora los algoritmos clásicos", "Aumenta la memoria requerida exponencialmente"], 0,
     "Grover demostró la optimalidad del operador de difusión cuántica para encontrar un elemento marcado en tiempo sublineal O(√N).",
     "Algoritmo de Grover", "Desafiante", "Computación Cuántica", "Búsqueda cuántica"),

    ("En topología algebraica, el 'Teorema del Punto Fijo de Brouwer' garantiza que:",
     ["Cualquier función continua de una bola cerrada conexa compacta de ℝ^n en sí misma tiene al menos un punto fijo x tal que f(x) = x", "Todas las funciones continuas son derivables", "Los puntos de una esfera pueden moverse sin rozamiento", "No existen puntos fijos en dimensiones pares"], 0,
     "Consecuencia directa de la no retractibilidad de la bola cerrada sobre su frontera esférica (S^(n-1)), con aplicaciones directas en economía para probar el equilibrio de Nash.",
     "Teorema del Punto Fijo de Brouwer", "Desafiante", "Análisis Matemático y Topología", "Topología algebraica"),

    ("¿Qué demostró el Teorema de los Cuatro Colores (Appel y Haken, 1976), célebre por ser la primera demostración matemática formal asistida intensivamente por computadora?",
     ["Cualquier mapa geográfico dibujado en un plano puede colorearse con a lo sumo 4 colores de modo que regiones vecinas que comparten frontera reciban colores distintos", "Que solo existen cuatro polígonos regulares en el plano", "Que las cuatro operaciones matemáticas son equivalentes", "Que el espacio de fases tiene 4 dimensiones"], 0,
     "Redujeron el problema a 1.936 configuraciones inevitables analizadas algorítmicamente por ordenador, abriendo el debate sobre la verificación de pruebas.",
     "Teorema de los Cuatro Colores", "Desafiante", "Matemática Discreta", "Teoría de grafos planos"),

    ("En mecánica analítica hamiltoniana, ¿qué garantiza el Teorema de Liouville para el espacio de fases de un sistema conservativo?",
     ["La densidad del volumen en el espacio de fases ocupado por un conjunto de estados del sistema permanece estrictamente constante a lo largo del tiempo (el flujo hamiltoniano es incompresible)", "Que la energía total siempre disminuye por fricción", "Que los electrones caen hacia el núcleo atómico", "Que la temperatura tiende al cero absoluto"], 0,
     "El teorema de Liouville preserva la medida de Lebesgue en el espacio de fases, fundamentando la formulación axiomática de la física estadística de Gibbs.",
     "Teorema de Liouville", "Desafiante", "Física Estadística", "Mecánica Hamiltoniana")
]
