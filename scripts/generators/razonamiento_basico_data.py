# 80 Preguntas de Razonamiento Lógico y Abstracto - Nivel Básico (Reactivos 21 al 100)
# Formato: (pregunta, [opción0, opción1, opción2, opción3], c_idx, explicacion, skill, dificultad, topic, subtopic)

razonamiento_basico_raw = [
    # 21 a 35: Series numéricas y patrones aritméticos/geométricos
    ("¿Qué número continúa la serie: 3, 6, 12, 24, 48, ___?",
     ["96", "72", "84", "108"], 0,
     "Cada término es el doble del anterior: 48 × 2 = 96.",
     "Series multiplicativas", "Fácil", "Razonamiento Numérico", "Progresiones geométricas"),

    ("Identifica el número que completa la sucesión: 100, 95, 85, 70, 50, ___.",
     ["25", "30", "35", "20"], 0,
     "La diferencia entre términos aumenta sucesivamente de 5 en 5 restando: -5, -10, -15, -20, -25. Por tanto, 50 - 25 = 25.",
     "Series de diferencias decrecientes", "Fácil", "Razonamiento Numérico", "Patrones numéricos"),

    ("¿Qué número sigue en la secuencia: 1, 4, 9, 16, 25, 36, ___?",
     ["49", "48", "64", "45"], 0,
     "La secuencia corresponde a los cuadrados de los números naturales: 1², 2², 3², 4², 5², 6², 7² = 49.",
     "Cuadrados perfectos", "Fácil", "Razonamiento Numérico", "Sucesiones cuadráticas"),

    ("Determina el número que falta en la serie: 5, 8, 13, 21, 34, ___.",
     ["55", "53", "58", "62"], 0,
     "Es una serie de tipo Fibonacci donde cada término es la suma de los dos anteriores: 21 + 34 = 55.",
     "Sucesión de Fibonacci", "Fácil", "Razonamiento Numérico", "Patrones aditivos"),

    ("¿Cuál es el valor que continúa la serie fraccionaria: 1/2, 1/4, 1/8, 1/16, ___?",
     ["1/32", "1/24", "1/64", "1/20"], 0,
     "El numerador se mantiene en 1 y el denominador se duplica sucesivamente: 16 × 2 = 32, resultando 1/32.",
     "Progresiones geométricas fraccionarias", "Fácil", "Razonamiento Numérico", "Fracciones"),

    ("¿Qué número completa la secuencia intercalada: 2, 20, 4, 18, 6, 16, 8, ___?",
     ["14", "12", "10", "18"], 0,
     "Hay dos series intercaladas: los números pares en posiciones impares (2, 4, 6, 8, ...) sumando 2, y en posiciones pares una cuenta regresiva (20, 18, 16, 14, ...) restando 2.",
     "Series intercaladas", "Fácil", "Razonamiento Numérico", "Secuencias alternadas"),

    ("Encuentra el número que sigue: 7, 14, 17, 34, 37, 74, ___.",
     ["77", "148", "78", "111"], 0,
     "El patrón alterna dos operaciones: multiplicar por 2 y sumar 3 (7×2=14, 14+3=17, 17×2=34, 34+3=37, 37×2=74). El siguiente paso es sumar 3: 74 + 3 = 77.",
     "Patrones de doble operación", "Fácil", "Razonamiento Numérico", "Operaciones combinadas"),

    ("¿Qué número completa la analogía numérica: 4 es a 16 como 7 es a ___?",
     ["49", "28", "35", "56"], 0,
     "La relación es elevar al cuadrado el primer número: 4² = 16, por tanto 7² = 49.",
     "Analogías numéricas", "Fácil", "Razonamiento Numérico", "Relaciones aritméticas"),

    ("Encuentra el número que falta en la terna: (3, 9, 27) ; (5, 25, 125) ; (2, 4, ___).",
     ["8", "6", "16", "12"], 0,
     "Cada terna sigue la regla (n, n², n³). Para n = 2: 2¹ = 2, 2² = 4, 2³ = 8.",
     "Ternas numéricas", "Fácil", "Razonamiento Cuantitativo", "Potenciación"),

    ("¿Qué número continúa la serie: 11, 22, 33, 44, 55, ___?",
     ["66", "77", "65", "60"], 0,
     "Se suman 11 a cada término sucesivo: 55 + 11 = 66 (múltiplos de 11).",
     "Múltiplos numéricos", "Fácil", "Razonamiento Numérico", "Progresión aritmética"),

    ("Completa la serie: 1, 8, 27, 64, 125, ___.",
     ["216", "256", "343", "196"], 0,
     "La sucesión representa los cubos de los enteros: 1³, 2³, 3³, 4³, 5³, 6³ = 216.",
     "Cubos perfectos", "Fácil", "Razonamiento Numérico", "Potencias"),

    ("¿Qué número continúa la secuencia: 81, 27, 9, 3, ___?",
     ["1", "0", "1/3", "2"], 0,
     "Cada término se divide sucesivamente entre 3: 3 ÷ 3 = 1.",
     "Divisiones sucesivas", "Fácil", "Razonamiento Numérico", "Series decrecientes"),

    ("En la sucesión: 10, 11, 13, 16, 20, 25, ___, ¿qué número corresponde?",
     ["31", "30", "32", "29"], 0,
     "La diferencia entre términos aumenta en 1 cada vez (+1, +2, +3, +4, +5, +6). Así: 25 + 6 = 31.",
     "Diferencias crecientes", "Fácil", "Razonamiento Numérico", "Patrones aditivos"),

    ("Encuentra el valor de x en la serie: 6, 12, 10, 20, 18, 36, x.",
     ["34", "38", "72", "32"], 0,
     "El patrón es: multiplicar por 2, restar 2 (6×2=12, 12-2=10, 10×2=20, 20-2=18, 18×2=36). Luego 36 - 2 = 34.",
     "Secuencias combinadas", "Fácil", "Razonamiento Numérico", "Operaciones alternadas"),

    ("¿Qué número completa la relación: 12 (30) 18 ; 15 (40) 25 ; 20 (x) 30?",
     ["50", "45", "60", "40"], 0,
     "El número central es la suma de los extremos: 12 + 18 = 30; 15 + 25 = 40; por lo tanto x = 20 + 30 = 50.",
     "Distribuciones numéricas", "Fácil", "Razonamiento Numérico", "Operaciones centrales"),

    # 36 a 50: Series alfabéticas y alfanuméricas
    ("¿Qué letra continúa la serie alfabética: A, C, E, G, I, ___?",
     ["K", "J", "L", "M"], 0,
     "Se avanza saltando una letra del abecedario: A (b) C (d) E (f) G (h) I (j) K.",
     "Series alfabéticas simples", "Fácil", "Razonamiento Verbal", "Patrones alfabéticos"),

    ("Identifica la letra que sigue en la sucesión: Z, X, V, T, R, ___?",
     ["P", "Q", "O", "N"], 0,
     "La serie retrocede dos posiciones en el abecedario: Z, X, V, T, R, P.",
     "Series alfabéticas regresivas", "Fácil", "Razonamiento Verbal", "Secuencias inversas"),

    ("¿Qué combinación continúa la serie: A1, B2, C3, D4, ___?",
     ["E5", "F5", "E6", "D5"], 0,
     "La letra avanza en orden alfabético correlativo (A, B, C, D, E) y el número avanza de 1 en 1 (1, 2, 3, 4, 5).",
     "Series alfanuméricas", "Fácil", "Razonamiento Lógico", "Patrones alfanuméricos"),

    ("¿Qué elemento completa la secuencia: 2Z, 4Y, 6X, 8W, ___?",
     ["10V", "10U", "12V", "9V"], 0,
     "El número se incrementa de 2 en 2 (2, 4, 6, 8, 10) y la letra retrocede en el alfabeto (Z, Y, X, W, V).",
     "Series alfanuméricas inversas", "Fácil", "Razonamiento Lógico", "Patrones mixtos"),

    ("Identifica la letra que falta en la serie: B, D, G, K, ___.",
     ["P", "O", "Q", "N"], 0,
     "El intervalo de letras omitidas aumenta de uno en uno: B (+1: c) D (+2: e, f) G (+3: h, i, j) K (+4: l, m, n, ñ) P.",
     "Series alfabéticas de paso creciente", "Fácil", "Razonamiento Verbal", "Patrones con salto variable"),

    ("¿Qué letra completa la secuencia: A, D, G, J, M, ___?",
     ["P", "O", "Q", "N"], 0,
     "Se avanza sumando 3 posiciones en el alfabeto: A (b, c) D (e, f) G (h, i) J (k, l) M (n, ñ) P.",
     "Progresiones alfabéticas", "Fácil", "Razonamiento Verbal", "Abecedario"),

    ("Determina la pareja que continúa la serie: AB, CD, EF, GH, ___.",
     ["IJ", "IK", "JK", "HI"], 0,
     "Son pares de letras consecutivas que siguen el orden natural del alfabeto.",
     "Series de dígrafos", "Fácil", "Razonamiento Lógico", "Pares de letras"),

    ("¿Qué trío de letras sigue en: CBA, FED, IHG, ___?",
     ["LKJ", "KLM", "LKM", "MLK"], 0,
     "Cada grupo de tres letras está invertido: ABC → CBA; DEF → FED; GHI → IHG; por tanto JKL → LKJ.",
     "Trigramas invertidos", "Fácil", "Razonamiento Lógico", "Inversión de grupos"),

    ("¿Qué letra sigue en la secuencia: U, D, T, C, C, S, S, ___?",
     ["O", "N", "D", "V"], 0,
     "Representa las iniciales de los números: Uno, Dos, Tres, Cuatro, Cinco, Seis, Siete, Ocho (O).",
     "Series mnemotécnicas", "Fácil", "Razonamiento Lógico", "Iniciales de palabras"),

    ("¿Qué letra continúa la serie de iniciales: L, M, M, J, V, S, ___?",
     ["D", "L", "R", "F"], 0,
     "Son las iniciales de los días de la semana: Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo (D).",
     "Series de calendario", "Fácil", "Lógica Temporal", "Días de la semana"),

    ("¿Qué letra sigue en la serie: E, F, M, A, M, J, J, A, S, O, N, ___?",
     ["D", "E", "P", "F"], 0,
     "Corresponde a las iniciales de los doce meses del año, culminando en Diciembre (D).",
     "Series cronológicas", "Fácil", "Lógica Temporal", "Meses del año"),

    ("Completa la analogía alfabética: AZ es a BY como CX es a ___.",
     ["DW", "DV", "EV", "CW"], 0,
     "La primera letra avanza (A, B, C, D) y la segunda retrocede desde el final (Z, Y, X, W). Por tanto, DW.",
     "Analogías alfabéticas simétricas", "Fácil", "Razonamiento Abstracto", "Simetría alfabética"),

    ("¿Qué término continúa la serie: 1A, 3C, 5E, 7G, ___?",
     ["9I", "9H", "8I", "11I"], 0,
     "Los números son los impares (1, 3, 5, 7, 9) y las letras ocupan las posiciones impares del alfabeto (A=1, C=3, E=5, G=7, I=9).",
     "Correspondencia número-letra", "Fácil", "Razonamiento Lógico", "Impares y alfabeto"),

    ("Encuentra la letra que falta: C, F, I, L, Ñ, ___.",
     ["R", "Q", "P", "S"], 0,
     "Las letras avanzan de 3 en 3 en el abecedario: C(3), F(6), I(9), L(12), Ñ(15), R(18).",
     "Series regulares de letras", "Fácil", "Razonamiento Verbal", "Secuencias regulares"),

    ("¿Qué grupo continúa la serie: Aa, Bb, Cc, Dd, ___?",
     ["Ee", "EF", "ee", "EE"], 0,
     "El patrón mantiene la mayúscula seguida de su correspondiente minúscula en orden correlativo.",
     "Patrones tipográficos", "Fácil", "Razonamiento Lógico", "Mayúsculas y minúsculas"),

    # 51 a 65: Analogías verbales y relaciones lógicas
    ("Médico es a Hospital como Profesor es a:",
     ["Colegio", "Biblioteca", "Libro", "Oficina"], 0,
     "La analogía vincula al profesional con su lugar habitual de trabajo.",
     "Analogía profesional-lugar", "Fácil", "Razonamiento Verbal", "Analogías de rol"),

    ("Pez es a Agua como Pájaro es a:",
     ["Aire", "Nido", "Árbol", "Pluma"], 0,
     "Relación del ser vivo con el medio físico habitual en el que se desplaza.",
     "Analogía ser-medio", "Fácil", "Razonamiento Verbal", "Medio de desplazamiento"),

    ("Semilla es a Árbol como Huevo es a:",
     ["Ave", "Nido", "Cáscara", "Pluma"], 0,
     "Relación de origen y desarrollo biológico: el árbol germina de la semilla como el ave nace del huevo.",
     "Analogía de origen", "Fácil", "Razonamiento Lógico", "Desarrollo biológico"),

    ("Martillo es a Clavo como Destornillador es a:",
     ["Tornillo", "Tuerca", "Madera", "Taladro"], 0,
     "Relación de herramienta e instrumento con el elemento de fijación específico sobre el que opera.",
     "Analogía herramienta-objeto", "Fácil", "Razonamiento Lógico", "Instrumentos"),

    ("Volante es a Automóvil como Timón es a:",
     ["Barco", "Avión", "Bicicleta", "Tren"], 0,
     "Ambos elementos son los mecanismos directrices de control de dirección de sus respectivos vehículos.",
     "Analogía parte-todo funcional", "Fácil", "Razonamiento Verbal", "Componentes funcionales"),

    ("Día es a Noche como Luz es a:",
     ["Oscuridad", "Lámpara", "Sol", "Claridad"], 0,
     "Relación de antonimia o estados complementarios y opuestos.",
     "Analogía de antonimia", "Fácil", "Razonamiento Verbal", "Antónimos conceptuales"),

    ("Lunes es a Primero como Domingo es a:",
     ["Séptimo", "Último", "Segundo", "Sexto"], 0,
     "En la numeración ordinal de los días de la semana conforme a la norma ISO, el lunes es 1º y el domingo 7º.",
     "Relaciones ordinales", "Fácil", "Lógica Temporal", "Días y orden"),

    ("Guitarra es a Cuerda como Flauta es a:",
     ["Viento", "Teclado", "Madera", "Percusión"], 0,
     "Clasificación organológica de los instrumentos musicales por la fuente generadora del sonido.",
     "Analogía de clasificación", "Fácil", "Razonamiento Lógico", "Instrumentos musicales"),

    ("Kilómetro es a Distancia como Kilogramo es a:",
     ["Masa o peso", "Volumen", "Velocidad", "Tiempo"], 0,
     "Relación entre unidad de medida del Sistema Internacional y la magnitud física que mide.",
     "Analogía unidad-magnitud", "Fácil", "Razonamiento Cuantitativo", "Sistema de unidades"),

    ("Termómetro es a Temperatura como Barómetro es a:",
     ["Presión atmosférica", "Humedad", "Viento", "Lluvia"], 0,
     "Relación entre instrumento de medición científica y la variable ambiental cuantificada.",
     "Analogía instrumento-variable", "Fácil", "Razonamiento Lógico", "Metrología"),

    ("Pintor es a Cuadro como Poeta es a:",
     ["Poema", "Libro", "Verso", "Pluma"], 0,
     "Relación entre el artista y la obra creada resultante de su actividad creadora.",
     "Analogía autor-obra", "Fácil", "Razonamiento Verbal", "Creación artística"),

    ("León es a Carnívoro como Vaca es a:",
     ["Herbívoro", "Mamífero", "Omnívoro", "Rumiante"], 0,
     "Relación de especie animal con su régimen trófico primario.",
     "Analogía biológica", "Fácil", "Razonamiento Lógico", "Alimentación animal"),

    ("Página es a Libro como Tecla es a:",
     ["Teclado", "Pantalla", "Computadora", "Mouse"], 0,
     "Relación analógica de parte a todo individualizado.",
     "Analogía parte-todo", "Fácil", "Razonamiento Verbal", "Estructuras"),

    ("Norte es a Sur como Este es a:",
     ["Oeste", "Oriente", "Occidente", "Cenit"], 0,
     "Relación de polaridad espacial y puntos cardinales opuestos.",
     "Puntos cardinales opuestos", "Fácil", "Razonamiento Espacial", "Orientación espacial"),

    ("Sed es a Agua como Hambre es a:",
     ["Comida", "Pan", "Fruta", "Apetito"], 0,
     "Relación de necesidad fisiológica con el elemento básico que la satisface.",
     "Analogía necesidad-satisfactor", "Fácil", "Razonamiento Lógico", "Necesidades vitales"),

    # 66 a 80: Razonamiento espacial, matrices y figuras
    ("Un cuadrado tiene 4 vértices. ¿Cuántos vértices tiene un hexágono regular?",
     ["6", "8", "5", "7"], 0,
     "Por definición geométrica, un hexágono es un polígono de 6 lados y 6 vértices.",
     "Propiedades de polígonos", "Fácil", "Razonamiento Espacial", "Vértices y lados"),

    ("Si una figura gira 90° en sentido horario cuatro veces consecutivas, ¿cuál es su posición final respecto a la original?",
     ["Exactamente en la misma posición original (360°)", "Invertida a 180°", "Girada 90° a la derecha", "Girada 270° a la izquierda"], 0,
     "Cuatro giros de 90° completan un giro entero de 360°, regresando a la orientación de partida.",
     "Rotaciones en el plano", "Fácil", "Razonamiento Espacial", "Giros angulares"),

    ("¿Cuántas caras planas tiene un dado cúbico estándar?",
     ["6", "8", "12", "4"], 0,
     "Un cubo regular consta de exactamente 6 caras cuadradas idénticas.",
     "Geometría del cubo", "Fácil", "Razonamiento Espacial", "Poliedros regulares"),

    ("En un dado tradicional de seis caras, la suma de los puntos en caras opuestas siempre es igual a:",
     ["7", "6", "8", "9"], 0,
     "En la construcción normativa de dados de juego, las caras opuestas siempre suman 7 (1 con 6, 2 con 5, 3 con 4).",
     "Propiedad del dado", "Fácil", "Razonamiento Lógico", "Dados de juego"),

    ("¿Cuántos triángulos pequeños individuales hay en una figura formada por un triángulo grande dividido por dos líneas medianas en 4 triángulos?",
     ["4", "3", "5", "6"], 0,
     "Al unir los puntos medios de los tres lados de un triángulo, se generan exactamente 4 triángulos pequeños congruentes.",
     "Conteo de figuras", "Fácil", "Razonamiento Espacial", "Subdivisión geométrica"),

    ("Si miras una pirámide de base cuadrada directamente desde arriba (vista en planta), ¿qué figura geométrica observas?",
     ["Un cuadrado dividido en cuatro triángulos con un punto central", "Un triángulo simple", "Un círculo con una cruz", "Un rectángulo alargado"], 0,
     "La vista cenital muestra la base cuadrada y las 4 aristas laterales que convergen en el vértice superior central formando 4 triángulos.",
     "Vistas ortogonales", "Fácil", "Razonamiento Espacial", "Vista en planta"),

    ("¿Qué figura se obtiene al cortar horizontalmente un cilindro recto paralelo a su base?",
     ["Un círculo idéntico a las bases", "Un óvalo o elipse", "Un rectángulo", "Un triángulo"], 0,
     "Cualquier sección transversal paralela a la base de un cilindro recto circular produce un círculo idéntico a su base.",
     "Secciones de sólidos", "Fácil", "Razonamiento Espacial", "Cortes en sólidos"),

    ("Si una figura tiene simetría axial respecto a un eje vertical, la parte derecha de la figura es:",
     ["Un reflejo especular invertido de la parte izquierda", "Una copia idéntica trasladada sin invertir", "Una rotación de 180° de la izquierda", "Una figura de menor tamaño"], 0,
     "La simetría axial funciona como un espejo: cada punto de un lado tiene su simétrico a la misma distancia de la línea central en sentido contrario.",
     "Simetría axial", "Fácil", "Razonamiento Abstracto", "Ejes de simetría"),

    ("¿Cuál es el número total de aristas de una pirámide de base triangular (tetraedro regular)?",
     ["6", "4", "8", "12"], 0,
     "Un tetraedro tiene 3 aristas en la base y 3 aristas laterales que suben al vértice, dando un total de 6 aristas.",
     "Aristas de poliedros", "Fácil", "Razonamiento Espacial", "Tetraedro"),

    ("Un reloj analógico marca exactamente las 3:00. ¿Qué ángulo forman entre sí el horario y el minutero?",
     ["90°", "120°", "60°", "180°"], 0,
     "La esfera del reloj tiene 360° divididos en 12 horas (30° por hora). A las 3:00 hay 3 horas de separación: 3 × 30° = 90° (ángulo recto).",
     "Ángulos en el reloj", "Fácil", "Razonamiento Espacial", "Geometría del reloj"),

    ("A las 6:00 en punto, ¿qué ángulo forman las manecillas del reloj?",
     ["180° (ángulo llano)", "90°", "120°", "360°"], 0,
     "A las 6:00, el minutero apunta al 12 y el horario al 6, situándose en línea recta diametralmente opuestos (180°).",
     "Ángulo llano en reloj", "Fácil", "Razonamiento Espacial", "Manecillas del reloj"),

    ("Si desarmamos una caja de cartón cúbica sin tapas, ¿cuántos cuadrados unidos forman su plantilla plana?",
     ["5", "6", "4", "7"], 0,
     "Una caja cúbica completa tiene 6 caras; si carece de tapa superior, consta exactamente de 5 caras cuadradas (la base y 4 laterales).",
     "Despliegue de sólidos", "Fácil", "Razonamiento Espacial", "Plantillas de cuerpos"),

    ("En una fila de 10 personas, Carlos ocupa el cuarto lugar contando desde el inicio. ¿Qué lugar ocupa contando desde el final?",
     ["Séptimo", "Sexto", "Octavo", "Quinto"], 0,
     "La fórmula de posición inversa es: Total - Posición + 1 = 10 - 4 + 1 = 7º lugar.",
     "Ordenamiento lineal", "Fácil", "Lógica Matemática", "Posición ordinal"),

    ("Si Juan es más alto que Pedro, y Pedro es más alto que Luis, ¿cuál de las siguientes afirmaciones es necesariamente verdadera?",
     ["Juan es más alto que Luis", "Luis es más alto que Juan", "Pedro es el más alto de los tres", "Juan y Luis tienen la misma estatura"], 0,
     "Por la propiedad transitiva del orden estricto de estatura: Juan > Pedro > Luis implica necesariamente que Juan > Luis.",
     "Propiedad transitiva", "Fácil", "Lógica Deductiva", "Ordenamiento relativo"),

    ("En una mesa redonda de 4 sillas numeradas, Ana se sienta frente a Beto, y Carlos está a la derecha de Ana. ¿Quién está frente a Carlos?",
     ["David (la cuarta persona)", "Ana", "Beto", "Nadie"], 0,
     "Ana y Beto están opuestos entre sí; las otras dos posiciones opuestas deben estar ocupadas por Carlos y la cuarta persona (David).",
     "Ordenamiento circular", "Fácil", "Razonamiento Lógico", "Distribución circular"),

    # 81 a 100: Silogismos, conjuntos de Venn, lógica deductiva simple
    ("Todos los mamíferos respiran oxígeno. Las ballenas son mamíferos. Por lo tanto:",
     ["Las ballenas respiran oxígeno", "Las ballenas no son animales acuáticos", "Solo los mamíferos respiran oxígeno", "Los peces son ballenas"], 0,
     "Silogismo deductivo clásico en modo Barbara (AAA-1): Todo M es P; Todo S es M; luego Todo S es P.",
     "Silogismo categórico", "Fácil", "Lógica Formal", "Deducción lógica"),

    ("Ningún reptil tiene plumas. Todas las serpientes son reptiles. Por lo tanto:",
     ["Ninguna serpiente tiene plumas", "Algunas serpientes tienen plumas", "Todos los animales con plumas son serpientes", "Las serpientes son aves"], 0,
     "Silogismo válido en modo Celarent (EAE-1): Ningún M es P; Todo S es M; luego Ningún S es P.",
     "Silogismo universal negativo", "Fácil", "Lógica Formal", "Deducción categórica"),

    ("Si todos los gatos son felinos y algunos felinos son salvajes, ¿cuál de las siguientes afirmaciones es correcta?",
     ["Algunos felinos no son domésticos", "Todos los felinos son gatos", "Todos los gatos son salvajes", "Ningún gato es felino"], 0,
     "De las premisas se deduce que al haber felinos salvajes, existen felinos que no pertenecen al ámbito doméstico.",
     "Inferencia de cuantificadores", "Fácil", "Lógica Deductiva", "Cuantificadores particulares"),

    ("Si la afirmación 'Todos los cisnes son blancos' es falsa, ¿qué proposición es necesariamente verdadera?",
     ["Existe al menos un cisne que no es blanco", "Todos los cisnes son negros", "Ningún cisne es blanco", "Los cisnes no existen"], 0,
     "La negación lógica de un cuantificador universal afirmativo ('Para todo x, P(x)') es un cuantificador existencial negativo ('Existe un x tal que no P(x)').",
     "Negación de cuantificadores", "Fácil", "Lógica Proposicional", "Cuadro de oposición"),

    ("En un grupo de 30 estudiantes, 18 juegan fútbol y 15 juegan básquet. Si 8 juegan ambos deportes, ¿cuántos juegan solo fútbol?",
     ["10", "18", "7", "12"], 0,
     "Los que juegan solo fútbol corresponden al total de futbolistas menos los que practican ambos: 18 - 8 = 10.",
     "Diagramas de Venn simples", "Fácil", "Teoría de Conjuntos", "Intersección de dos conjuntos"),

    ("En una clase de 25 alumnos, 20 aprobaron Matemáticas y 18 aprobaron Historia. Si todos aprobaron al menos una materia, ¿cuántos aprobaron ambas?",
     ["13", "15", "10", "12"], 0,
     "Por el principio de inclusión-exclusión: n(A ∩ B) = n(A) + n(B) - n(A ∪ B) = 20 + 18 - 25 = 38 - 25 = 13.",
     "Principio de inclusión-exclusión", "Fácil", "Teoría de Conjuntos", "Cardinalidad"),

    ("Si 'A implica B' es una regla verdadera, y sabemos que ocurrió A, ¿qué podemos concluir con absoluta certeza?",
     ["Ocurrió B (Modus Ponens)", "No ocurrió B", "Ocurrió A porque ocurrió B", "Nada sobre B"], 0,
     "La regla de inferencia Modus Ponendo Ponens establece que afirmando el antecedente de un condicional se afirma válidamente el consecuente.",
     "Modus Ponens básico", "Fácil", "Lógica Proposicional", "Reglas de inferencia"),

    ("Si 'Si llueve, el suelo se moja'. El suelo no está mojado. ¿Qué se deduce lógicamente?",
     ["No llovió (Modus Tollens)", "Llovió mucho", "El suelo se secará pronto", "Va a llover mañana"], 0,
     "Por Modus Tollendo Tollens: negando el consecuente se niega válidamente el antecedente.",
     "Modus Tollens básico", "Fácil", "Lógica Proposicional", "Reglas de inferencia"),

    ("Dada la proposición: 'No es cierto que (Juan está en Quito y en Guayaquil al mismo tiempo)'. Esto se fundamenta en el principio lógico de:",
     ["No contradicción", "Identidad", "Tercero excluido", "Razón suficiente"], 0,
     "El principio de no contradicción estipula que una proposición no puede ser verdadera y falsa simultáneamente bajo el mismo respecto.",
     "Principios lógicos clásicos", "Fácil", "Lógica Formal", "Principio de no contradicción"),

    ("Una madre tiene 3 hijos varones, y cada hijo varón tiene una hermana. ¿Cuántos hijos tiene la madre en total?",
     ["4 hijos (3 varones y 1 mujer)", "6 hijos", "5 hijos", "3 hijos"], 0,
     "La hermana es común a los tres hermanos varones. Por lo tanto son 3 varones + 1 mujer = 4 hijos en total.",
     "Acertijos de parentesco", "Fácil", "Razonamiento Lógico", "Relaciones familiares"),

    ("El hermano del único hijo de mi padre es:",
     ["Mi hermano", "Mi tío", "Mi sobrino", "Mi abuelo"], 0,
     "El único hijo de mi padre (si soy varón) soy yo mismo, o un hermano si se refiere en sentido amplio; su hermano es simplemente 'mi hermano'.",
     "Parentesco deductivo", "Fácil", "Razonamiento Relacional", "Árbol genealógico"),

    ("¿Qué día fue ayer si el mañana de ayer de pasado mañana es jueves?",
     ["Martes", "Miércoles", "Jueves", "Lunes"], 0,
     "Analizando desde hoy (0): mañana (+1) de ayer (-1) de pasado mañana (+2) = 0 + 1 - 1 + 2 = +2. Si pasado mañana es jueves, hoy es martes. Por tanto, ayer fue lunes.",
     "Lógica de relaciones temporales", "Fácil", "Lógica Temporal", "Relaciones de días"),

    ("Si anteayer fue lunes, ¿qué día será el día inmediatamente posterior a mañana?",
     ["Viernes", "Jueves", "Sábado", "Domingo"], 0,
     "Si anteayer (-2) fue lunes, hoy (0) es miércoles. Mañana (+1) es jueves, y el posterior a mañana (+2) será viernes.",
     "Cálculo de días relativos", "Fácil", "Lógica Temporal", "Días de la semana"),

    ("Tres amigos (Mario, Lucas y Denis) tienen profesiones distintas: médico, abogado e ingeniero. Si Mario no es médico y Lucas no es ingeniero ni médico, ¿qué profesión tiene Lucas?",
     ["Abogado", "Médico", "Ingeniero", "Profesor"], 0,
     "Si Lucas no es ingeniero ni médico, por descarte obligatorio debe ser el abogado.",
     "Cuadros de doble entrada", "Fácil", "Lógica Deductiva", "Asignación de atributos"),

    ("Si todos los cuadrados son cuadriláteros, y ningún cuadrilátero es triángulo, ¿cuál es la conclusión válida?",
     ["Ningún cuadrado es triángulo", "Algunos cuadrados son triángulos", "Todos los triángulos son cuadrados", "No se puede concluir nada"], 0,
     "Silogismo categórico válido en modo Camestres/Cesare: la exclusión total de cuadriláteros y triángulos excluye necesariamente a los cuadrados de ser triángulos.",
     "Silogismos negativos", "Fácil", "Lógica Formal", "Deducción categórica"),

    ("¿Qué conclusión se sigue de: 'Ningún fósil está vivo' y 'Este objeto está vivo'?",
     ["Este objeto no es un fósil", "Este objeto es un fósil antiguo", "Los fósiles viven bajo tierra", "Todos los objetos son fósiles"], 0,
     "Por exclusión categórica inmediata, al poseer la propiedad contradictoria con la definición de fósil, no puede ser un fósil.",
     "Silogismo singular", "Fácil", "Lógica Deductiva", "Inferencia inmediata"),

    ("Si decimos: 'O estudias o trabajas' (disyunción excluyente), y sabemos que la persona no trabaja, entonces:",
     ["Necesariamente estudia", "No estudia ni trabaja", "Trabaja a tiempo parcial", "No se puede saber qué hace"], 0,
     "Por el silogismo disyuntivo, al negar uno de los miembros de una disyunción, se afirma categóricamente el miembro restante.",
     "Silogismo disyuntivo", "Fácil", "Lógica Proposicional", "Disyunción"),

    ("¿Cuántos cortes rectos son necesarios como mínimo para dividir una cuerda de 12 metros en 6 trozos iguales de 2 metros cada uno?",
     ["5 cortes", "6 cortes", "4 cortes", "7 cortes"], 0,
     "Para obtener n trozos de una línea abierta se requieren n - 1 cortes: 6 - 1 = 5 cortes.",
     "Problemas de cortes y estacas", "Fácil", "Razonamiento Cuantitativo", "Cortes en líneas abiertas"),

    ("A lo largo de una avenida recta de 100 metros se plantan postes cada 10 metros, colocando un poste al inicio y uno al final. ¿Cuántos postes se colocan?",
     ["11 postes", "10 postes", "9 postes", "12 postes"], 0,
     "Número de postes = (Longitud total / Distancia entre postes) + 1 = (100 / 10) + 1 = 10 + 1 = 11 postes.",
     "Problemas de postes e intervalos", "Fácil", "Razonamiento Matemático", "Intervalos cerrados"),

    ("Si un caracol sube 3 metros de una pared cada día pero resbala 2 metros cada noche, ¿en cuántos días alcanzará la cima de un muro de 10 metros?",
     ["8 días", "10 días", "7 días", "9 días"], 0,
     "Cada ciclo completo de 24 horas avanza 1 metro neto. Al término del día 7 está a 7 metros. El día 8 sube 3 metros: 7 + 3 = 10 metros y llega a la cima sin resbalar.",
     "Problema clásico del caracol", "Fácil", "Razonamiento Lógico", "Avance neto y parada")
]
