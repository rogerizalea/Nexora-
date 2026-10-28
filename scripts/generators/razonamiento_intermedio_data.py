# 80 Preguntas de Razonamiento Lógico y Abstracto - Nivel Intermedio (Reactivos 21 al 100)
# Formato: (pregunta, [opción0, opción1, opción2, opción3], c_idx, explicacion, skill, dificultad, topic, subtopic)

razonamiento_intermedio_raw = [
    # 21 a 35: Series numéricas de 2do orden y operadores arbitrarios
    ("¿Qué número continúa la sucesión cuadrática: 2, 6, 12, 20, 30, 42, ___?",
     ["56", "54", "60", "48"], 0,
     "La forma general es n(n + 1) o diferencias sucesivas: +4, +6, +8, +10, +12, +14. Luego 42 + 14 = 56 (7 × 8).",
     "Sucesiones cuadráticas", "Intermedio", "Razonamiento Numérico", "Diferencias de segundo orden"),

    ("Calcula el siguiente término de la serie: 0, 7, 26, 63, 124, ___.",
     ["215", "216", "210", "196"], 0,
     "La regla de formación es n³ - 1 para n = 1, 2, 3, 4, 5, 6: 6³ - 1 = 216 - 1 = 215.",
     "Series polinómicas cúbicas", "Intermedio", "Razonamiento Numérico", "Potencias y traslación"),

    ("Se define el operador matemático: a # b = 2a + 3b - 1. Calcula el valor de (4 # 3).",
     ["16", "17", "15", "18"], 0,
     "Sustituimos los valores en la definición: 4 # 3 = 2(4) + 3(3) - 1 = 8 + 9 - 1 = 16.",
     "Operadores matemáticos arbitrarios", "Intermedio", "Lógica Matemática", "Definición de operadores"),

    ("Si m * n = m² - n², calcula el resultado de (5 * 3) * 10.",
     ["156", "144", "160", "120"], 0,
     "Primero: 5 * 3 = 5² - 3² = 25 - 9 = 16. Luego: 16 * 10 = 16² - 10² = 256 - 100 = 156.",
     "Operadores anidados", "Intermedio", "Lógica Matemática", "Operadores binarios"),

    ("¿Qué término continúa la sucesión: 3, 5, 9, 17, 33, ___?",
     ["65", "64", "67", "66"], 0,
     "La diferencia se duplica en cada paso: +2, +4, +8, +16, +32. Por tanto, 33 + 32 = 65 (o 2ⁿ + 1).",
     "Sucesiones exponenciales", "Intermedio", "Razonamiento Numérico", "Progresiones"),

    ("Encuentra el número que falta en la matriz numérica 3x3:\n[4  7  11]\n[3  8  11]\n[5  9   ? ]",
     ["14", "13", "15", "12"], 0,
     "En cada fila, la suma del primer y segundo elemento da el tercero: 4 + 7 = 11; 3 + 8 = 11; 5 + 9 = 14.",
     "Matrices numéricas", "Intermedio", "Razonamiento Numérico", "Patrones matriciales"),

    ("Determina el valor de x en la distribución gráfica triangular donde el número en el centro depende de los tres vértices: T1=(2,3,4 -> 24), T2=(3,4,5 -> 60), T3=(4,2,6 -> x).",
     ["48", "36", "52", "64"], 0,
     "El centro es el producto de los tres vértices: 2×3×4 = 24; 3×4×5 = 60; luego x = 4×2×6 = 48.",
     "Distribuciones en polígonos", "Intermedio", "Razonamiento Cuantitativo", "Operaciones combinadas"),

    ("¿Qué número completa la serie: 1, 2, 6, 24, 120, 720, ___?",
     ["5040", "4320", "5760", "2880"], 0,
     "Representa la sucesión factorial: 1!, 2!, 3!, 4!, 5!, 6!, 7! = 720 × 7 = 5040.",
     "Sucesión factorial", "Intermedio", "Razonamiento Numérico", "Factoriales"),

    ("En una sucesión de figuras, el número de puntos es 1, 3, 6, 10, 15, 21. ¿Cuántos puntos tendrá la octava figura?",
     ["36", "28", "45", "32"], 0,
     "Son números triangulares T_n = n(n + 1)/2. Para n = 8: T_8 = 8(9)/2 = 36.",
     "Números figurados", "Intermedio", "Razonamiento Abstracto", "Números triangulares"),

    ("¿Qué número continúa la sucesión alternada: 100, 1, 90, 4, 80, 9, 70, 16, 60, ___?",
     ["25", "20", "36", "49"], 0,
     "En posiciones pares tenemos los cuadrados perfectos: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25.",
     "Series entrelazadas complejas", "Intermedio", "Razonamiento Numérico", "Series dobles"),

    ("Si a ⊕ b = (a + b) / (a - b) con a ≠ b, determina el valor de 7 ⊕ 3.",
     ["2.5", "2", "3", "3.5"], 0,
     "Aplicando la fórmula: (7 + 3) / (7 - 3) = 10 / 4 = 2.5.",
     "Operadores con fracciones", "Intermedio", "Lógica Matemática", "Álgebra de operadores"),

    ("Encuentra el valor de 'k' en la serie: 2, 3, 5, 7, 11, 13, 17, 19, k.",
     ["23", "21", "25", "27"], 0,
     "Es la secuencia de números primos consecutivos; el siguiente número primo tras 19 es 23.",
     "Números primos", "Intermedio", "Razonamiento Numérico", "Aritmética de primos"),

    ("¿Qué número completa la analogía: 324 es a 18 como 576 es a ___?",
     ["24", "26", "22", "28"], 0,
     "La relación es la raíz cuadrada: √324 = 18, por lo tanto √576 = 24.",
     "Raíces exactas en analogías", "Intermedio", "Razonamiento Numérico", "Radicación"),

    ("En la progresión: 1/3, 1, 3, 9, 27, ___, ¿cuál es el siguiente término?",
     ["81", "54", "72", "90"], 0,
     "Progresión geométrica de razón r = 3: 27 × 3 = 81.",
     "Progresiones geométricas", "Intermedio", "Razonamiento Numérico", "Razón constante"),

    ("Si en un sistema numérico simbólico: Δ = 3, ◻ = 4, ⬟ = 5, ¿cuál es el valor de (◻ × ⬟) - Δ²?",
     ["11", "12", "14", "9"], 0,
     "Sustituyendo: (4 × 5) - 3² = 20 - 9 = 11.",
     "Aritmética con figuras", "Intermedio", "Razonamiento Simbólico", "Ecuaciones simbólicas"),

    # 36 a 50: Razonamiento espacial, matrices 3x3 y giros
    ("En una matriz gráfica de 3x3, las figuras de la primera fila rotan 45° a la derecha en cada paso; las de la segunda fila rotan 90°. Si la tercera fila rota 135° en cada paso, ¿cuánto habrá rotado la tercera figura respecto a la primera?",
     ["270° en sentido horario", "180° en sentido horario", "360° en sentido horario", "90° en sentido horario"], 0,
     "Desde la columna 1 a la 2 rota 135°, y de la 2 a la 3 rota otros 135°: 135° + 135° = 270° en sentido horario.",
     "Rotaciones en matrices", "Intermedio", "Razonamiento Abstracto", "Transformaciones geométricas"),

    ("Una figura compuesta por un círculo con una cruz interior se superpone con un círculo con un punto central. Si la regla es la unión de trazos (operador OR gráfico), ¿cuál es el resultado?",
     ["Un círculo que contiene tanto la cruz como el punto central", "Solo el punto central", "Solo la cruz", "Un círculo vacío"], 0,
     "La operación de unión gráfica conserva la totalidad de los elementos presentes en cualquiera de las figuras originales.",
     "Álgebra booleana gráfica", "Intermedio", "Razonamiento Abstracto", "Superposición de figuras"),

    ("Si dos figuras se combinan mediante una diferencia simétrica (operador XOR gráfico), los trazos que coinciden exactamente en ambas figuras:",
     ["Desaparecen o se eliminan en la figura resultante", "Se duplican en grosor", "Cambian de color a blanco", "Permanecen inalterados"], 0,
     "La regla XOR gráfica elimina los trazos o regiones comunes y conserva únicamente los que están presentes en una sola de las dos.",
     "Operadores lógicos gráficos", "Intermedio", "Razonamiento Abstracto", "Operador XOR"),

    ("¿Cuántos cuadrados en total (de todos los tamaños) hay en una cuadrícula de 3x3 casillas?",
     ["14", "9", "10", "13"], 0,
     "Fórmula para cuadrícula n×n: 1² + 2² + 3² = 1 + 4 + 9 = 14 cuadrados.",
     "Conteo sistemático de cuadriláteros", "Intermedio", "Razonamiento Espacial", "Cuadrículas"),

    ("¿Cuántos cubos de 1 cm de arista se necesitan para construir un cubo compacto de 4 cm de arista?",
     ["64", "16", "32", "48"], 0,
     "Volumen = arista³ = 4³ = 64 cubos de 1 cm³.",
     "Volumen de cubos", "Intermedio", "Razonamiento Espacial", "Cuerpos poliédricos"),

    ("Un cubo de madera de 3 cm de arista con todas sus caras pintadas de rojo se corta en 27 cubitos de 1 cm. ¿Cuántos cubitos tendrán exactamente 2 caras pintadas?",
     ["12", "8", "6", "1"], 0,
     "Los cubos con 2 caras pintadas están en las aristas (excluyendo vértices): un cubo tiene 12 aristas, con (3 - 2) = 1 cubito por arista: 12 × 1 = 12.",
     "Problema clásico del cubo pintado", "Intermedio", "Razonamiento Espacial", "Vistas y cortes"),

    ("En el mismo cubo de 3 cm pintado de rojo cortado en 27 cubitos, ¿cuántos cubitos tendrán exactamente 3 caras pintadas?",
     ["8", "12", "6", "4"], 0,
     "Los cubitos con 3 caras pintadas corresponden exclusivamente a los 8 vértices del cubo.",
     "Vértices de poliedros pintados", "Intermedio", "Razonamiento Espacial", "Geometría del cubo"),

    ("¿Y cuántos cubitos del cubo de 3 cm cortado en 27 tendrán ninguna cara pintada (0 caras rojas)?",
     ["1", "2", "0", "4"], 0,
     "Los cubitos sin pintar forman el núcleo interior: (n - 2)³ = (3 - 2)³ = 1³ = 1 cubito.",
     "Núcleo interior del cubo", "Intermedio", "Razonamiento Espacial", "Cubo interior"),

    ("Si desplegamos un prisma hexagonal regular recto, ¿cuántos rectángulos forman sus caras laterales?",
     ["6 rectángulos", "8 rectángulos", "5 rectángulos", "12 rectángulos"], 0,
     "Un prisma con base de n lados tiene exactamente n caras laterales rectangulares; para un hexágono son 6.",
     "Desarrollo de prismas", "Intermedio", "Razonamiento Espacial", "Prismas"),

    ("¿Qué vista (alzado, planta o perfil) de un cono circular recto apoyado sobre su base se observa como un triángulo isósceles?",
     ["Vista frontal o alzado", "Vista superior o planta", "Corte horizontal", "Corte oblicuo"], 0,
     "La proyección ortogonal frontal de un cono recto proyecta su silueta triangular sobre el plano vertical.",
     "Proyecciones ortogonales", "Intermedio", "Razonamiento Espacial", "Vistas de conos"),

    ("Una figura tiene forma de 'L'. Si se refleja respecto al eje horizontal y luego se rota 90° en sentido antihorario, el resultado es equivalente a:",
     ["Una reflexión respecto a la diagonal principal", "La misma figura original", "Una traslación simple", "Una inversión central pura"], 0,
     "La composición de una reflexión axial con una rotación de 90° equivale geométricamente a una reflexión respecto a un eje inclinado 45°.",
     "Composición de isometrías", "Intermedio", "Razonamiento Abstracto", "Transformaciones en el plano"),

    ("¿Cuál es el número máximo de regiones en que 3 rectas concurrentes en el plano pueden dividirlo?",
     ["6 regiones", "7 regiones", "8 regiones", "4 regiones"], 0,
     "Si las 3 rectas pasan por un mismo punto concurrente central, dividen el plano en 2 × 3 = 6 sectores.",
     "Partición del plano", "Intermedio", "Razonamiento Abstracto", "Líneas concurrentes"),

    ("Si las 3 rectas no son concurrentes ni paralelas entre sí, ¿en cuántas regiones dividen el plano como máximo?",
     ["7 regiones", "6 regiones", "8 regiones", "9 regiones"], 0,
     "Fórmula de división máxima por n rectas: L(n) = n(n + 1)/2 + 1. Para n = 3: 3(4)/2 + 1 = 6 + 1 = 7 regiones.",
     "Partición máxima del plano", "Intermedio", "Razonamiento Abstracto", "Intersección de rectas"),

    ("Al rotar un rectángulo de lados 4 cm y 6 cm alrededor de su lado de 6 cm, ¿qué cuerpo geométrico se genera?",
     ["Un cilindro de radio 4 cm y altura 6 cm", "Un cono de radio 6 cm", "Una esfera de diámetro 10 cm", "Un prisma rectangular"], 0,
     "La revolución de un rectángulo sobre uno de sus lados genera un cilindro circular recto cuyo radio es el otro lado.",
     "Sólidos de revolución", "Intermedio", "Razonamiento Espacial", "Revolución de figuras"),

    ("¿Cuántas diagonales totales tiene un polígono regular de 8 lados (octágono)?",
     ["20", "24", "16", "28"], 0,
     "Fórmula de diagonales totales: D = n(n - 3) / 2. Para n = 8: D = 8(5) / 2 = 20 diagonales.",
     "Diagonales de polígonos", "Intermedio", "Razonamiento Matemático", "Geometría combinatoria"),

    # 51 a 65: Problemas deductivos, tablas de asignación y relaciones cuantitativas
    ("Carlos, Diego y Esteban tienen cada uno una mascota distinta: perro, gato y loro. Se sabe que al dueño del perro no le gustan las aves y Esteban es amigo del dueño del gato. Si Diego tiene el loro, ¿qué mascota tiene Carlos?",
     ["Gato", "Perro", "Loro", "Pez"], 0,
     "Diego tiene el loro. Quedan perro y gato. Si Esteban es amigo del dueño del gato, Esteban no tiene el gato; por tanto Esteban tiene el perro y Carlos tiene el gato.",
     "Tablas de asignación lógica", "Intermedio", "Lógica Deductiva", "Asignación unívoca"),

    ("La edad de María es el triple de la de Sofía. Si dentro de 10 años la edad de María será el doble de la de Sofía, ¿cuántos años tiene María actualmente?",
     ["30 años", "10 años", "20 años", "40 años"], 0,
     "Sean M = 3S. En 10 años: M + 10 = 2(S + 10) ⇒ 3S + 10 = 2S + 20 ⇒ S = 10. Por tanto María tiene 3 × 10 = 30 años.",
     "Problemas de edades", "Intermedio", "Razonamiento Cuantitativo", "Ecuaciones lineales"),

    ("Si un reloj se adelanta 3 minutos cada 2 horas, ¿cuánto se habrá adelantado al cabo de 24 horas?",
     ["36 minutos", "30 minutos", "48 minutos", "24 minutos"], 0,
     "En 24 horas hay 24 / 2 = 12 intervalos de dos horas. Adelanto total = 12 × 3 min = 36 minutos.",
     "Problemas de cronometría", "Intermedio", "Razonamiento Matemático", "Adelantos de relojes"),

    ("A las 4:00, las campanadas de una iglesia tardan 6 segundos en dar 4 campanadas. ¿Cuánto tardarán en dar 8 campanadas?",
     ["14 segundos", "12 segundos", "16 segundos", "10 segundos"], 0,
     "Entre 4 campanadas hay 3 intervalos: cada intervalo dura 6 / 3 = 2 segundos. Para 8 campanadas hay 7 intervalos: 7 × 2 = 14 segundos.",
     "Problemas de campanadas e intervalos", "Intermedio", "Razonamiento Lógico", "Intervalos temporales"),

    ("En una granja hay conejos y gallinas. Si se cuentan 35 cabezas y 94 patas, ¿cuántos conejos hay?",
     ["12 conejos", "23 conejos", "14 conejos", "10 conejos"], 0,
     "Método del rombo o sistema: C + G = 35 y 4C + 2G = 94. Si todos fueran gallinas habría 70 patas. Exceso = 94 - 70 = 24 patas. Cada conejo aporta 2 patas extra: 24 / 2 = 12 conejos.",
     "Método de falsa suposición (rombo)", "Intermedio", "Razonamiento Matemático", "Conteo de patas y cabezas"),

    ("Cuatro amigos rinden un examen. Andrés obtuvo más puntos que Bernardo; Claudio obtuvo menos puntos que Daniel; y Bernardo obtuvo más que Daniel. ¿Quién obtuvo el menor puntaje?",
     ["Claudio", "Bernardo", "Daniel", "Andrés"], 0,
     "Ordenando los puntajes: Andrés > Bernardo > Daniel > Claudio. El menor es Claudio.",
     "Ordenamiento de posición", "Intermedio", "Lógica Deductiva", "Ordenamiento lineal"),

    ("Seis personas (P, Q, R, S, T, U) se sientan simétricamente alrededor de una mesa circular con 6 asientos. P está frente a S; Q está a la izquierda de P; R está frente a Q. ¿Quién está frente a T si U está a la derecha de P?",
     ["U", "S", "Q", "R"], 0,
     "La distribución opuesta es: P frente a S, Q frente a R. Por tanto, los dos asientos restantes opuestos entre sí deben estar ocupados por T y U.",
     "Distribución circular simétrica", "Intermedio", "Lógica Deductiva", "Mesa circular"),

    ("Una botella con su tapa cuesta $1.10 en total. La botella cuesta $1.00 más que la tapa. ¿Cuánto cuesta la tapa?",
     ["$0.05", "$0.10", "$0.15", "$0.01"], 0,
     "Sean B + T = 1.10 y B = T + 1.00. Sustituyendo: (T + 1.00) + T = 1.10 ⇒ 2T = 0.10 ⇒ T = $0.05.",
     "Problema clásico cognitivo de Kahneman", "Intermedio", "Razonamiento Cuantitativo", "Sistemas simples"),

    ("En una caja hay 10 calcetines negros y 10 blancos idénticos en forma. ¿Cuántos calcetines se deben extraer a ciegas como mínimo para garantizar tener un par del mismo color?",
     ["3 calcetines", "2 calcetines", "11 calcetines", "4 calcetines"], 0,
     "Por el principio del palomar (casillas de Dirichlet): habiendo solo 2 colores posibles, al sacar 2 + 1 = 3 calcetines se garantiza al menos un par repetido.",
     "Principio del palomar (Dirichlet)", "Intermedio", "Lógica Matemática", "Certezas y mínimos"),

    ("¿Cuántas bolas se deben extraer al azar de una urna que contiene 5 rojas, 4 verdes y 6 azules para tener la certeza absoluta de haber sacado al menos una bola de cada color?",
     ["12 bolas", "15 bolas", "11 bolas", "14 bolas"], 0,
     "En el peor de los casos sacamos todas las de los dos grupos más numerosos primero: 6 azules + 5 rojas = 11 bolas. La siguiente bola (12ª) será obligatoriamente verde.",
     "Problemas de certezas (peor caso)", "Intermedio", "Razonamiento Matemático", "Análisis del peor caso"),

    ("Una mezcla de 40 litros de agua y alcohol contiene 25% de alcohol. ¿Cuántos litros de agua se deben añadir para que el alcohol represente el 20% de la mezcla?",
     ["10 litros", "8 litros", "5 litros", "12 litros"], 0,
     "Alcohol puro = 25% de 40 L = 10 L. Para que 10 L sean el 20% del total: Total = 10 / 0.20 = 50 L. Agua a agregar = 50 - 40 = 10 L.",
     "Problemas de mezclas y porcentajes", "Intermedio", "Razonamiento Cuantitativo", "Concentraciones"),

    ("Si 12 obreros construyen un muro en 15 días trabajando 8 horas diarias, ¿cuántos días tardarán 10 obreros trabajando 6 horas diarias en construir un muro idéntico?",
     ["24 días", "20 días", "18 días", "25 días"], 0,
     "Regla de tres compuesta: Días = 15 × (12/10) × (8/6) = 15 × 1.2 × 1.333... = 24 días.",
     "Regla de tres compuesta", "Intermedio", "Razonamiento Cuantitativo", "Proporcionalidad inversa"),

    ("Un comerciante aumenta el precio de un artículo en un 20% y luego le aplica un descuento del 20%. El precio final respecto al inicial es:",
     ["4% menor que el inicial", "Exactamente igual al inicial", "2% menor que el inicial", "4% mayor que el inicial"], 0,
     "Factor multiplicador: (1 + 0.20) × (1 - 0.20) = 1.20 × 0.80 = 0.96. Representa el 96% del valor original, es decir, una reducción neta del 4%.",
     "Variaciones porcentuales sucesivas", "Intermedio", "Razonamiento Cuantitativo", "Porcentajes sucesivos"),

    ("Si el precio de la gasolina sube un 25%, ¿en qué porcentaje debe reducir un conductor su consumo para no gastar más dinero?",
     ["20%", "25%", "15%", "16.6%"], 0,
     "Gasto = Precio × Consumo. Si P' = 1.25 P, entonces C' = 1 / 1.25 = 0.80 C. Debe reducir el consumo en 1 - 0.80 = 20%.",
     "Compensación porcentual", "Intermedio", "Razonamiento Cuantitativo", "Proporcionalidad inversa"),

    ("La suma de tres números enteros impares consecutivos es igual a 81. ¿Cuál es el número mayor?",
     ["29", "27", "31", "25"], 0,
     "Los números son (x - 2), x, (x + 2). Suma = 3x = 81 ⇒ x = 27. El mayor es 27 + 2 = 29.",
     "Ecuaciones de enteros consecutivos", "Intermedio", "Razonamiento Numérico", "Álgebra básica"),

    # 66 a 80: Lógica formal, tablas de verdad, inferencia y combinatoria
    ("¿Cuál es la tabla de verdad de la proposición condicional (p → q)?",
     ["Falsa únicamente cuando p es verdadera y q es falsa", "Verdadera únicamente cuando p y q son verdaderas", "Falsa siempre que q sea falsa", "Verdadera solo si p es falsa"], 0,
     "La implicación material p → q solo se invalida cuando una premisa verdadera conduce a una conclusión falsa (V → F es F).",
     "Tabla de verdad del condicional", "Intermedio", "Lógica Formal", "Conectores lógicos"),

    ("La proposición bicondicional (p ↔ q) es verdadera si y solo si:",
     ["p y q tienen exactamente el mismo valor de verdad (ambas V o ambas F)", "p es verdadera y q es falsa", "Al menos una de las dos proposiciones es verdadera", "p es falsa"], 0,
     "El bicondicional o equivalencia lógica expresa que dos enunciados son verdaderos en las mismas condiciones lógicas.",
     "Bicondicional lógico", "Intermedio", "Lógica Formal", "Equivalencias"),

    ("Según las Leyes de De Morgan, la negación de la conjunción ¬(p ∧ q) es lógicamente equivalente a:",
     ["¬p ∨ ¬q", "¬p ∧ ¬q", "p ∨ q", "¬(p ∨ q)"], 0,
     "La negación de 'p y q' afirma que al menos uno de los dos enunciados es falso: 'no p o no q'.",
     "Leyes de De Morgan", "Intermedio", "Lógica Formal", "Equivalencias lógicas"),

    ("La proposición contrapositiva de 'Si un animal es mamífero, entonces tiene sangre caliente' es:",
     ["Si un animal no tiene sangre caliente, entonces no es mamífero", "Si un animal tiene sangre caliente, entonces es mamífero", "Si un animal no es mamífero, entonces no tiene sangre caliente", "Todos los mamíferos tienen plumas"], 0,
     "El contrarrecíproco de (p → q) es (¬q → ¬p), y preserva idéntico valor de verdad lógico que la condicional original.",
     "Contrarrecíproco (contrapositiva)", "Intermedio", "Lógica Formal", "Condicionales equivalentes"),

    ("¿Qué falacia formal se comete en el razonamiento: 'Si llueve, la calle se moja. La calle está mojada. Por lo tanto, llovió'?",
     ["Falacia de afirmación del consecuente", "Falacia de negación del antecedente", "Modus Tollens inválido", "Falacia ad hominem"], 0,
     "La calle pudo haberse mojado por un camión cisterna o una manguera; afirmar el consecuente no garantiza la verdad del antecedente.",
     "Falacias formales", "Intermedio", "Lógica Formal", "Afirmación del consecuente"),

    ("¿Qué falacia formal se comete en: 'Si estudias, apruebas. No estudiaste. Por lo tanto, no aprobarás'?",
     ["Falacia de negación del antecedente", "Falacia de afirmación del consecuente", "Silogismo disyuntivo falso", "Petición de principio"], 0,
     "Negar la condición suficiente no autoriza a deducir la falsedad del resultado (se puede aprobar por conocimientos previos o azar).",
     "Falacias formales", "Intermedio", "Lógica Formal", "Negación del antecedente"),

    ("En combinatoria, ¿de cuántas formas diferentes pueden ordenarse 5 libros distintos en un estante horizontal?",
     ["120 formas", "24 formas", "60 formas", "720 formas"], 0,
     "Corresponde a las permutaciones simples de 5 elementos: P_5 = 5! = 5 × 4 × 3 × 2 × 1 = 120.",
     "Permutaciones simples", "Intermedio", "Combinatoria", "Factoriales y ordenamientos"),

    ("¿Cuántos comités de 3 personas se pueden formar a partir de un grupo de 7 candidatos sin importar el orden?",
     ["35 comités", "21 comités", "42 comités", "210 comités"], 0,
     "Combinaciones sin repetición: C(7, 3) = 7! / (3! × 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35.",
     "Combinaciones simples", "Intermedio", "Combinatoria", "Selección sin orden"),

    ("Si se lanzan dos dados cúbicos estándar numerados del 1 al 6, ¿cuál es la probabilidad de que la suma de sus puntos sea igual a 7?",
     ["6/36 (es decir, 1/6)", "7/36", "5/36", "1/12"], 0,
     "Hay 36 casos posibles en total. Las combinaciones que suman 7 son (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 casos favorables. P = 6/36 = 1/6.",
     "Probabilidad clásica de dados", "Intermedio", "Probabilidad", "Espacio muestral"),

    ("Al lanzar tres monedas justas al aire, ¿cuál es la probabilidad de obtener exactamente dos caras y un sello?",
     ["3/8", "1/2", "1/4", "5/8"], 0,
     "Espacio muestral = 2³ = 8 resultados. Casos con 2 caras: (C,C,S), (C,S,C), (S,C,C) = 3 casos favorables. P = 3/8.",
     "Probabilidad binomial elemental", "Intermedio", "Probabilidad", "Lanzamiento de monedas"),

    ("En un diagrama de Venn de dos conjuntos A y B, la región que representa (A ∪ B) - (A ∩ B) se denomina formalmente:",
     ["Diferencia simétrica de A y B (A △ B)", "Complemento de la unión", "Intersección pura", "Diferencia simple A - B"], 0,
     "La diferencia simétrica reúne los elementos que pertenecen exclusivamente a A o exclusivamente a B, pero no a ambos.",
     "Diferencia simétrica de conjuntos", "Intermedio", "Teoría de Conjuntos", "Operaciones entre conjuntos"),

    ("Si el conjunto universal tiene 50 elementos, n(A) = 28, n(B) = 22 y n(A ∩ B) = 10, ¿cuántos elementos están fuera de A y de B?",
     ["10 elementos", "12 elementos", "8 elementos", "15 elementos"], 0,
     "n(A ∪ B) = 28 + 22 - 10 = 40. Los elementos en el complemento exterior son 50 - 40 = 10.",
     "Complemento de la unión", "Intermedio", "Teoría de Conjuntos", "Conjunto universal"),

    ("Dada la premisa: 'Algunos científicos son músicos' y 'Todos los músicos son artistas'. ¿Qué se deduce válidamente?",
     ["Algunos científicos son artistas", "Todos los científicos son artistas", "Ningún artista es científico", "Todos los artistas son músicos"], 0,
     "Silogismo categórico en modo Darii (AII-1): Particular Afirmativa + Universal Afirmativa implica Particular Afirmativa.",
     "Silogismo de cuantificadores", "Intermedio", "Lógica Categórica", "Modo Darii"),

    ("¿Qué figura retórica o falacia argumentativa consiste en suponer probado aquello que justamente se busca demostrar?",
     ["Petición de principio (petitio principii)", "Hombre de paja", "Apelación a la ignorancia", "Falsa dicotomía"], 0,
     "La petición de principio incurre en circularidad lógica al utilizar la tesis no demostrada como premisa de su propia demostración.",
     "Falacias de circularidad", "Intermedio", "Pensamiento Crítico", "Petición de principio"),

    ("Un prisionero está frente a dos puertas: una conduce a la libertad y otra a la mazmorra. Cada puerta está custodiada por un guardia; uno siempre dice la verdad y el otro siempre miente. ¿Qué pregunta clásica permite al prisionero elegir con certeza la puerta de la libertad?",
     ["¿Qué puerta me diría el otro guardia que es la de la libertad? (y elegir la contraria)", "¿Cuál es tu puerta favorita?", "¿Eres tú el guardia que dice la verdad?", "¿La puerta de la izquierda está abierta?"], 0,
     "Al componer una respuesta veraz con una mentira (V ∧ F o F ∧ V), el resultado final es siempre una mentira garantizada; por ende, elegir la puerta opuesta asegura la libertad.",
     "Acertijo clásico de los guardianes", "Intermedio", "Lógica Deductiva", "Paradojas lógicas")
]
