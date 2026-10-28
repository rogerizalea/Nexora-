# 80 Preguntas Pedagógicas Únicas: Matemáticas Intermedio (21 a 100)
intermedio_new_raw = [
    # 21-30: Enteros y valor absoluto
    ("¿Cuál es el resultado de la operación con enteros: (-8) + (+15) - (-6)?",
     ["13", "1", "29", "-7"], 0,
     "Eliminando paréntesis: -8 + 15 + 6 = 7 + 6 = 13.",
     "Operaciones con números enteros", "Intermedio", "Aritmética", "Números con signo"),

    ("Calcula el resultado de: (-4) × (-7) - (+18) ÷ (-3).",
     ["34", "22", "-22", "-34"], 0,
     "(-4) × (-7) = +28. Luego: (+18) ÷ (-3) = -6. Restando: 28 - (-6) = 28 + 6 = 34.",
     "Regla de los signos y jerarquía", "Intermedio", "Aritmética", "Operaciones combinadas en Z"),

    ("¿Cuál es el valor absoluto de la expresión | -14 + 5 |?",
     ["9", "-9", "19", "-19"], 0,
     "-14 + 5 = -9. El valor absoluto de un número es su distancia a cero: |-9| = 9.",
     "Valor absoluto", "Intermedio", "Aritmética", "Propiedades de valor absoluto"),

    ("Si la temperatura en una ciudad a medianoche era de -3 °C y al mediodía subió 11 °C, ¿cuál es la temperatura actual?",
     ["8 °C", "-14 °C", "14 °C", "-8 °C"], 0,
     "Sumamos la elevación térmica a la temperatura inicial: -3 °C + 11 °C = 8 °C.",
     "Aplicación de números enteros", "Intermedio", "Aritmética", "Variación de temperatura"),

    ("Calcula la potencia con base negativa: (-3)⁴.",
     ["81", "-81", "12", "-12"], 0,
     "Una base negativa elevada a un exponente par produce un resultado positivo: (-3) × (-3) × (-3) × (-3) = 81.",
     "Potencias con base negativa", "Intermedio", "Álgebra", "Propiedades de las potencias"),

    ("¿Cuál es el resultado de: (-2)⁵?",
     ["-32", "32", "-10", "10"], 0,
     "Una base negativa elevada a exponente impar conserva el signo negativo: (-2)⁵ = -32.",
     "Potencias con exponente impar", "Intermedio", "Álgebra", "Signos en potencias"),

    ("Calcula: √196 - √64.",
     ["6", "8", "14", "10"], 0,
     "√196 = 14 y √64 = 8. Restando: 14 - 8 = 6.",
     "Radicación exacta", "Intermedio", "Aritmética", "Raíces y operaciones"),

    ("Aplica la propiedad del producto de potencias de igual base para simplificar: (5³) × (5⁴).",
     ["5⁷", "5¹²", "25⁷", "25¹²"], 0,
     "Al multiplicar potencias de la misma base se suman los exponentes: 5³ × 5⁴ = 5^(3+4) = 5⁷.",
     "Leyes de los exponentes", "Intermedio", "Álgebra", "Producto de potencias"),

    ("Simplifica el cociente de potencias de igual base: (7⁸) ÷ (7³).",
     ["7⁵", "7¹¹", "7²⁴", "1⁵"], 0,
     "Al dividir potencias de igual base se restan los exponentes: 7⁸ ÷ 7³ = 7^(8-3) = 7⁵.",
     "Cociente de potencias", "Intermedio", "Álgebra", "Leyes de exponentes"),

    ("¿A qué equivale la potencia de una potencia: (a³)²?",
     ["a⁶", "a⁵", "a⁹", "2a³"], 0,
     "Los exponentes se multiplican: (a³)² = a^(3×2) = a⁶.",
     "Potencia de una potencia", "Intermedio", "Álgebra", "Propiedades exponenciales"),

    # 31-45: Lenguaje algebraico y términos semejantes
    ("Traduce al lenguaje algebraico: 'El triple de un número aumentado en ocho unidades'.",
     ["3x + 8", "3(x + 8)", "x³ + 8", "8x + 3"], 0,
     "'El triple de un número' es 3x, y 'aumentado en ocho' es sumar 8: 3x + 8.",
     "Lenguaje algebraico", "Intermedio", "Álgebra", "Traducción algebraica"),

    ("Reduce los siguientes términos semejantes: 7x - 4y + 3x + 9y.",
     ["10x + 5y", "10x - 5y", "4x + 13y", "15xy"], 0,
     "Agrupamos términos semejantes: (7x + 3x) + (-4y + 9y) = 10x + 5y.",
     "Reducción de términos semejantes", "Intermedio", "Álgebra", "Polinomios"),

    ("Evalúa la expresión algebraica 4x² - 2x + 7 cuando x = -2.",
     ["27", "19", "-5", "31"], 0,
     "4(-2)² - 2(-2) + 7 = 4(4) + 4 + 7 = 16 + 4 + 7 = 27.",
     "Valor numérico de polinomios", "Intermedio", "Álgebra", "Evaluación algebraica"),

    ("¿Cuál es el grado absoluto del monomio 5x³y⁴z?",
     ["8", "7", "5", "12"], 0,
     "El grado absoluto de un monomio es la suma de los exponentes de sus variables: 3 + 4 + 1 = 8.",
     "Grado de monomios", "Intermedio", "Álgebra", "Polinomios"),

    ("Multiplica los monomios: (3x²y) · (-4xy³).",
     ["-12x³y⁴", "12x²y³", "-7x³y⁴", "-12x²y⁴"], 0,
     "Multiplicamos coeficientes: 3 × (-4) = -12. Sumamos exponentes de x (2+1=3) y de y (1+3=4): -12x³y⁴.",
     "Multiplicación de monomios", "Intermedio", "Álgebra", "Productos algebraicos"),

    ("Divide los monomios: (24a⁵b³) ÷ (6a²b).",
     ["4a³b²", "4a⁷b⁴", "18a³b²", "4a²b³"], 0,
     "24 ÷ 6 = 4. Restamos exponentes: a^(5-2) = a³ y b^(3-1) = b². Resultado: 4a³b².",
     "División de monomios", "Intermedio", "Álgebra", "Cocientes algebraicos"),

    ("Elimina paréntesis y simplifica: 5x - [2x - (3x - 4)].",
     ["6x - 4", "4x + 4", "6x + 4", "4x - 4"], 0,
     "Interior: 2x - 3x + 4 = -x + 4. Expresión: 5x - (-x + 4) = 5x + x - 4 = 6x - 4.",
     "Signos de agrupación", "Intermedio", "Álgebra", "Supresión de paréntesis"),

    ("¿Cuál es el coeficiente principal del polinomio P(x) = 3 - 5x + 7x³ - 2x²?",
     ["7", "-5", "3", "-2"], 0,
     "El término de mayor grado es 7x³ (grado 3), por lo que su coeficiente principal es 7.",
     "Elementos de un polinomio", "Intermedio", "Álgebra", "Coeficiente principal"),

    ("Si P(x) = 2x + 5 y Q(x) = 3x - 2, ¿cuál es la suma P(x) + Q(x)?",
     ["5x + 3", "5x - 7", "6x - 10", "5x + 7"], 0,
     "Sumando términos semejantes: (2x + 3x) + (5 - 2) = 5x + 3.",
     "Adición de polinomios", "Intermedio", "Álgebra", "Suma de polinomios"),

    ("Multiplica el binomio por el monomio: 3x(2x - 5).",
     ["6x² - 15x", "6x² - 5", "5x² - 15x", "6x - 15"], 0,
     "Aplicando la propiedad distributiva: 3x × 2x - 3x × 5 = 6x² - 15x.",
     "Propiedad distributiva", "Intermedio", "Álgebra", "Multiplicación algebraica"),

    # 46-60: Ecuaciones lineales y problemas
    ("Resuelve la ecuación de primer grado: 5x - 3 = 2x + 12.",
     ["x = 5", "x = 3", "x = 9", "x = 4"], 0,
     "Restamos 2x: 3x - 3 = 12. Sumamos 3: 3x = 15. Dividimos entre 3: x = 5.",
     "Ecuaciones lineales simples", "Intermedio", "Álgebra", "Despeje de variables"),

    ("Encuentra la solución de: 4(x - 2) = 2(x + 6).",
     ["x = 10", "x = 8", "x = 5", "x = 12"], 0,
     "Expandiendo: 4x - 8 = 2x + 12. Restando 2x: 2x - 8 = 12. Sumando 8: 2x = 20 ⇒ x = 10.",
     "Ecuaciones con paréntesis", "Intermedio", "Álgebra", "Propiedad distributiva en ecuaciones"),

    ("Resuelve la ecuación con fracciones: (x / 3) + 2 = 7.",
     ["x = 15", "x = 27", "x = 9", "x = 12"], 0,
     "Restamos 2: x / 3 = 5. Multiplicamos por 3: x = 15.",
     "Ecuaciones fraccionarias básicas", "Intermedio", "Álgebra", "Ecuaciones con denominadores"),

    ("La suma de tres números enteros consecutivos es 72. ¿Cuál es el número menor?",
     ["23", "24", "22", "25"], 0,
     "Planteamiento: x + (x + 1) + (x + 2) = 72 ⇒ 3x + 3 = 72 ⇒ 3x = 69 ⇒ x = 23.",
     "Problemas de números consecutivos", "Intermedio", "Álgebra", "Modelado lineal"),

    ("La edad de María es el triple de la de su hijo. Si ambas edades suman 48 años, ¿cuántos años tiene el hijo?",
     ["12 años", "16 años", "14 años", "10 años"], 0,
     "Hijo: x; María: 3x. Suma: x + 3x = 48 ⇒ 4x = 48 ⇒ x = 12 años.",
     "Problemas de edades", "Intermedio", "Álgebra", "Ecuaciones aplicadas"),

    ("Un padre tiene 40 años y su hijo tiene 10. ¿Dentro de cuántos años la edad del padre será el doble de la del hijo?",
     ["20 años", "15 años", "25 años", "10 años"], 0,
     "40 + x = 2(10 + x) ⇒ 40 + x = 20 + 2x ⇒ 40 - 20 = 2x - x ⇒ x = 20 años.",
     "Problemas algebraicos de tiempo futuro", "Intermedio", "Álgebra", "Ecuaciones lineales"),

    ("Halla el valor de x en: (2x - 5) / 3 = 5.",
     ["x = 10", "x = 8", "x = 12", "x = 15"], 0,
     "Multiplicando por 3: 2x - 5 = 15. Sumando 5: 2x = 20 ⇒ x = 10.",
     "Despeje fraccionario", "Intermedio", "Álgebra", "Ecuaciones racionales"),

    ("Si al doble de un número le restas 14 obtienes el mismo número aumentado en 6. ¿Cuál es el número?",
     ["20", "18", "24", "16"], 0,
     "2x - 14 = x + 6 ⇒ 2x - x = 6 + 14 ⇒ x = 20.",
     "Planteo de ecuaciones", "Intermedio", "Álgebra", "Enunciados verbales"),

    ("Resuelve: 3(2x + 1) - 4 = 5x + 7.",
     ["x = 8", "x = 6", "x = 10", "x = 4"], 0,
     "6x + 3 - 4 = 5x + 7 ⇒ 6x - 1 = 5x + 7 ⇒ 6x - 5x = 7 + 1 ⇒ x = 8.",
     "Ecuaciones lineales generales", "Intermedio", "Álgebra", "Simplificación de miembros"),

    ("¿Qué valor de x satisface la igualdad: 0.5x + 3 = 11?",
     ["x = 16", "x = 14", "x = 18", "x = 8"], 0,
     "0.5x = 11 - 3 = 8. Dividiendo entre 0.5: x = 8 / 0.5 = 16.",
     "Ecuaciones con coeficientes decimales", "Intermedio", "Álgebra", "Decimales en álgebra"),

    # 61-75: Proporcionalidad compuesta, porcentajes e interés simple
    ("Si 6 impresoras imprimen 3,000 folletos en 2 horas, ¿cuántos folletos imprimirán 4 impresoras en 3 horas al mismo ritmo?",
     ["3,000 folletos", "2,500 folletos", "3,500 folletos", "4,000 folletos"], 0,
     "1 impresora en 1 hora: 3,000 / (6 × 2) = 250 folletos/hora. 4 impresoras en 3 horas: 4 × 3 × 250 = 3,000 folletos.",
     "Regla de tres compuesta", "Intermedio", "Aritmética", "Proporcionalidad múltiple"),

    ("Calcula el interés simple que produce un capital de $2,000.00 invertido al 5% anual durante 3 años (I = C·r·t).",
     ["$300.00", "$200.00", "$450.00", "$150.00"], 0,
     "I = C × r × t = 2,000 × 0.05 × 3 = 100 × 3 = $300.00.",
     "Interés simple", "Intermedio", "Matemática Financiera", "Fórmula del interés"),

    ("Un comerciante compra un artículo por $80.00 y lo vende por $100.00. ¿Cuál fue su porcentaje de ganancia sobre el costo?",
     ["25%", "20%", "30%", "15%"], 0,
     "Ganancia = $100 - $80 = $20. Porcentaje sobre el costo = (20 / 80) × 100 = 0.25 × 100 = 25%.",
     "Porcentaje de utilidad", "Intermedio", "Aritmética Comercial", "Rentabilidad"),

    ("Se reparte un premio de $600.00 de forma directamente proporcional a las edades de dos hermanos de 8 y 12 años. ¿Cuánto recibe el menor?",
     ["$240.00", "$360.00", "$200.00", "$250.00"], 0,
     "Suma de edades: 8 + 12 = 20 partes. Cada parte vale: $600 / 20 = $30. Hermano menor: 8 × $30 = $240.00.",
     "Reparto proporcional directo", "Intermedio", "Aritmética", "Reparto proporcional"),

    ("Un producto tiene un precio de $150.00 sin IVA. Si el IVA es del 15%, ¿cuánto se paga de impuesto?",
     ["$22.50", "$15.00", "$20.00", "$25.00"], 0,
     "15% de 150 = 150 × 0.15 = $22.50.",
     "Cálculo de impuestos", "Intermedio", "Aritmética Comercial", "IVA"),

    ("Si 12 obreros abren una zanja en 10 días, ¿cuántos días emplearán 15 obreros con el mismo rendimiento?",
     ["8 días", "9 días", "7 días", "6 días"], 0,
     "Proporción inversa: Días = (12 × 10) / 15 = 120 / 15 = 8 días.",
     "Regla de tres simple inversa", "Intermedio", "Aritmética", "Productividad laboral"),

    ("Un artículo rebajado en un 20% cuesta actualmente $64.00. ¿Cuál era su precio original antes de la rebaja?",
     ["$80.00", "$76.80", "$85.00", "$75.00"], 0,
     "El precio actual representa el 80% del original: 0.80 × P = 64 ⇒ P = 64 / 0.80 = $80.00.",
     "Precio original a partir de descuento", "Intermedio", "Porcentajes", "Reversión porcentual"),

    ("En una escala 1:500 de un plano, ¿a cuántos metros reales equivalen 4 centímetros del dibujo?",
     ["20 metros", "200 metros", "2 metros", "125 metros"], 0,
     "4 cm × 500 = 2,000 cm. Como 1 metro = 100 cm, 2,000 / 100 = 20 metros.",
     "Escalas cartográficas y planos", "Intermedio", "Geometría", "Escalas"),

    ("Si tres números están en la razón 2 : 3 : 5 y suman 100, ¿cuál es el número mayor?",
     ["50", "30", "20", "40"], 0,
     "Constante k: 2k + 3k + 5k = 10k = 100 ⇒ k = 10. Número mayor: 5k = 5(10) = 50.",
     "Razones compuestas", "Intermedio", "Aritmética", "Proporciones continuas"),

    ("Un depósito se llena con un grifo en 6 horas y con otro grifo en 3 horas. ¿En cuántas horas se llena si se abren ambos a la vez?",
     ["2 horas", "4.5 horas", "1.5 horas", "2.5 horas"], 0,
     "En 1 hora llenan: 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 del depósito. Por tanto, tardan 2 horas en llenarlo.",
     "Problemas de grifos y caudales", "Intermedio", "Aritmética", "Rendimiento conjunto"),

    # 76-90: Geometría euclidiana y Teorema de Pitágoras
    ("En un triángulo rectángulo, un cateto mide 9 cm y la hipotenusa mide 15 cm. ¿Cuánto mide el otro cateto?",
     ["12 cm", "10 cm", "11 cm", "13 cm"], 0,
     "b = √(15² - 9²) = √(225 - 81) = √144 = 12 cm.",
     "Teorema de Pitágoras para catetos", "Intermedio", "Geometría Plana", "Triángulos rectángulos"),

    ("¿Cuál es la distancia entre los puntos A(2, 3) y B(5, 7) en el plano cartesiano?",
     ["5 unidades", "7 unidades", "√7 unidades", "6 unidades"], 0,
     "d = √[(5 - 2)² + (7 - 3)²] = √[3² + 4²] = √[9 + 16] = √25 = 5 unidades.",
     "Distancia entre dos puntos", "Intermedio", "Geometría Analítica", "Plano cartesiano"),

    ("Calcula el área de un sector circular de 90° en un círculo de radio r = 4 cm. (Usa π ≈ 3.14).",
     ["12.56 cm²", "25.12 cm²", "50.24 cm²", "6.28 cm²"], 0,
     "Un ángulo de 90° es 1/4 del círculo: A = (π × r²) / 4 = (3.14 × 16) / 4 = 50.24 / 4 = 12.56 cm².",
     "Área de sectores circulares", "Intermedio", "Geometría Plana", "Sectores circulares"),

    ("¿Cuánto mide la diagonal de un rectángulo cuyos lados son de 5 cm y 12 cm?",
     ["13 cm", "17 cm", "15 cm", "14 cm"], 0,
     "d = √(5² + 12²) = √(25 + 144) = √169 = 13 cm.",
     "Diagonal del rectángulo", "Intermedio", "Geometría Plana", "Aplicación de Pitágoras"),

    ("¿Cuánto suman los ángulos interiores de un hexágono convexo (6 lados)?",
     ["720°", "540°", "1,080°", "360°"], 0,
     "Fórmula: S = (n - 2) × 180° = (6 - 2) × 180° = 4 × 180° = 720°.",
     "Suma de ángulos en polígonos", "Intermedio", "Geometría Plana", "Polígonos convexos"),

    ("En un polígono regular de 5 lados (pentágono), ¿cuánto mide cada uno de sus ángulos interiores?",
     ["108°", "120°", "90°", "72°"], 0,
     "Suma = (5 - 2) × 180° = 540°. Como tiene 5 ángulos iguales: 540° / 5 = 108°.",
     "Ángulo interior regular", "Intermedio", "Geometría Plana", "Pentágono regular"),

    ("Si dos rectas paralelas son cortadas por una secante y uno de los ángulos alternos internos mide 75°, ¿cuánto mide su alterno interno conjugado?",
     ["75°", "105°", "15°", "90°"], 0,
     "Los ángulos alternos internos entre paralelas son congruentes (miden exactamente lo mismo): 75°.",
     "Ángulos entre paralelas", "Intermedio", "Geometría Plana", "Rectas paralelas y secante"),

    ("Calcula el área de un triángulo equilátero cuyo lado mide 6 cm. (Fórmula: A = (L²√3)/4).",
     ["9√3 cm² (≈ 15.59 cm²)", "12√3 cm²", "18 cm²", "6√3 cm²"], 0,
     "A = (6² × √3) / 4 = (36 × √3) / 4 = 9√3 cm².",
     "Área de triángulo equilátero", "Intermedio", "Geometría Plana", "Triángulos especiales"),

    ("El punto medio del segmento con extremos P(1, 4) y Q(7, 10) es:",
     ["M(4, 7)", "M(3, 5)", "M(8, 14)", "M(6, 6)"], 0,
     "x = (1 + 7)/2 = 8/2 = 4; y = (4 + 10)/2 = 14/2 = 7. Punto medio: M(4, 7).",
     "Punto medio en el plano", "Intermedio", "Geometría Analítica", "Segmentos"),

    ("¿Cuál es el volumen de un cubo cuya arista mide 5 cm?",
     ["125 cm³", "25 cm³", "150 cm³", "75 cm³"], 0,
     "V = arista³ = 5³ = 5 × 5 × 5 = 125 cm³.",
     "Volumen del cubo", "Intermedio", "Geometría del Espacio", "Poliedros regulares"),

    # 91-100: Estadística y probabilidad intermedia
    ("Si se lanzan dos dados estándar de 6 caras, ¿cuántos resultados posibles forman el espacio muestral?",
     ["36", "12", "24", "18"], 0,
     "Por principio multiplicativo: 6 caras × 6 caras = 36 pares posibles.",
     "Espacio muestral de dos dados", "Intermedio", "Probabilidad", "Regla del producto"),

    ("Al lanzar dos dados, ¿cuál es la probabilidad de que la suma de sus caras sea igual a 7?",
     ["6/36 (1/6)", "7/36", "5/36", "1/12"], 0,
     "Pares que suman 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 combinaciones de 36. Probabilidad = 6/36 = 1/6.",
     "Probabilidad con dos dados", "Intermedio", "Probabilidad", "Suma de dados"),

    ("En una baraja española estándar de 40 cartas, ¿cuál es la probabilidad de extraer un As al azar?",
     ["4/40 (1/10 o 10%)", "1/40", "4/36", "1/4"], 0,
     "Hay 4 ases (uno por cada palo: oros, copas, espadas, bastos) entre 40 cartas: 4/40 = 1/10 = 10%.",
     "Probabilidad clásica en barajas", "Intermedio", "Probabilidad", "Extracción simple"),

    ("Se lanza una moneda tres veces consecutivas. ¿Cuál es la probabilidad de obtener exactamente 3 caras?",
     ["1/8 (12.5%)", "3/8", "1/6", "1/4"], 0,
     "Resultados totales = 2³ = 8. Solo hay 1 resultado favorable (C, C, C): Probabilidad = 1/8.",
     "Probabilidad compuesta independiente", "Intermedio", "Probabilidad", "Lanzamientos múltiples"),

    ("En un grupo de 30 personas, 18 practican fútbol y 12 básquetbol (sin intersección). Si se elige una al azar, ¿cuál es la probabilidad de que juegue fútbol?",
     ["18/30 (3/5 o 60%)", "12/30", "18/12", "1/2"], 0,
     "Casos favorables = 18; total de personas = 30. Probabilidad = 18/30 = 3/5 = 60%.",
     "Probabilidad simple", "Intermedio", "Probabilidad", "Eventos excluyentes"),

    ("¿Cuál es la desviación absoluta media de los datos [8, 10, 12] respecto a su media aritmética (10)?",
     ["4/3 (≈ 1.33)", "2", "0", "1"], 0,
     "Media = 10. Desviaciones absolutas: |8-10|=2, |10-10|=0, |12-10|=2. Media de las desviaciones = (2 + 0 + 2)/3 = 4/3.",
     "Desviación media", "Intermedio", "Estadística", "Dispersión"),

    ("En una distribución de frecuencias, la frecuencia relativa de una categoría es 0.35. ¿Qué porcentaje representa?",
     ["35%", "3.5%", "0.35%", "70%"], 0,
     "La frecuencia relativa multiplicada por 100 da el porcentaje: 0.35 × 100 = 35%.",
     "Frecuencia relativa", "Intermedio", "Estadística", "Porcentajes estadísticos"),

    ("¿Qué representa el primer cuartil (Q1) en un conjunto ordenado de datos?",
     ["El valor que deja por debajo al 25% de los datos", "El valor promedio", "El valor que supera al 50%", "El valor más frecuente"], 0,
     "Q1 es la medida de posición no central que acumula el 25% inferior de la distribución.",
     "Medidas de posición", "Intermedio", "Estadística", "Cuartiles"),

    ("Calcula la mediana del siguiente conjunto con número par de elementos: [4, 7, 9, 11, 14, 18].",
     ["10", "9", "11", "9.5"], 0,
     "Los datos ya están ordenados y son 6 elementos. La mediana es el promedio de los dos centrales (posiciones 3 y 4): (9 + 11)/2 = 20/2 = 10.",
     "Mediana de conjunto par", "Intermedio", "Estadística", "Mediana"),

    ("Si la probabilidad de que llueva mañana es de 0.25, ¿cuál es la probabilidad del evento complementario (que no llueva)?",
     ["0.75 (75%)", "0.25", "1.25", "0.50"], 0,
     "La suma de las probabilidades de eventos complementarios es 1: P(no lluvia) = 1 - 0.25 = 0.75.",
     "Eventos complementarios", "Intermedio", "Probabilidad", "Complemento probabilístico")
]

intermedio_new_raw.extend([('Simplifica el radical utilizando propiedades de la multiplicación: √(72).', ['6√2', '12√2', '8√3', '36√2'], 0, 'Descomponemos 72 en factores primos: 72 = 36 × 2. √(72) = √(36 × 2) = √36 × √2 = 6√2.', 'Simplificación de radicales', 'Intermedio', 'Aritmética', 'Radicación'), ('Resuelve la ecuación con incógnita en ambos miembros: 7x - 9 = 3x + 15.', ['x = 6', 'x = 4', 'x = 8', 'x = 5'], 0, 'Restamos 3x: 4x - 9 = 15. Sumamos 9: 4x = 24. Dividimos entre 4: x = 6.', 'Ecuaciones lineales', 'Intermedio', 'Álgebra', 'Ecuaciones de 1er grado'), ('Escribe el número 450,000 en notación científica.', ['4.5 × 10⁵', '45 × 10⁴', '4.5 × 10⁶', '0.45 × 10⁶'], 0, 'La notación científica tiene un coeficiente entre 1 y 10: 4.5 × 10⁵.', 'Notación científica', 'Intermedio', 'Aritmética', 'Potencias de diez'), ('Convierte 0.0032 a notación científica.', ['3.2 × 10⁻³', '3.2 × 10⁻⁴', '32 × 10⁻⁴', '0.32 × 10⁻²'], 0, 'Desplazamos la coma tres lugares a la derecha: 3.2 × 10⁻³.', 'Notación científica para cantidades pequeñas', 'Intermedio', 'Aritmética', 'Exponentes negativos'), ('Aplica el Teorema de Tales: Si dos rectas secantes son cortadas por paralelas y los segmentos en una son 4 y 6, y en la otra x y 9, ¿cuánto vale x?', ['x = 6', 'x = 5', 'x = 8', 'x = 4.5'], 0, 'Por proporcionalidad de Tales: 4 / 6 = x / 9 ⇒ x = (4 × 9) / 6 = 36 / 6 = 6.', 'Teorema de Tales', 'Intermedio', 'Geometría Plana', 'Proporcionalidad geométrica'), ('Calcula la media ponderada de un alumno que obtuvo nota 8 (peso 30%) y nota 10 (peso 70%).', ['9.4', '9.0', '8.8', '9.6'], 0, 'Media ponderada = 8(0.30) + 10(0.70) = 2.4 + 7.0 = 9.4.', 'Media ponderada', 'Intermedio', 'Estadística', 'Promedios con peso'), ('¿Cuál es el área de un paralelogramo de base b = 14 cm y altura h = 8 cm?', ['112 cm²', '56 cm²', '44 cm²', '96 cm²'], 0, 'Área = base × altura = 14 cm × 8 cm = 112 cm².', 'Área de cuadriláteros', 'Intermedio', 'Geometría Plana', 'Paralelogramos'), ('Factoriza extrayendo el máximo factor común: 12x³ - 18x².', ['6x²(2x - 3)', '6x(2x² - 3x)', '3x²(4x - 6)', '12x²(x - 2)'], 0, 'El MCD de 12 y 18 es 6, y de x³ y x² es x². Factorizamos: 6x²(2x - 3).', 'Factor común monomio', 'Intermedio', 'Álgebra', 'Factorización'), ('Si un automóvil viaja a 90 km/h y tarda 4 horas, ¿cuánto tardaría a 120 km/h en el mismo trayecto?', ['3 horas', '3.5 horas', '2.5 horas', '5 horas'], 0, 'Distancia = 90 × 4 = 360 km. Tiempo a 120 km/h: 360 / 120 = 3 horas.', 'Proporcionalidad inversa en cinemática', 'Intermedio', 'Aritmética', 'Velocidad y tiempo'), ('Calcula la suma de los ángulos interiores de un decágono (10 lados).', ['1,440°', '1,800°', '1,260°', '1,080°'], 0, 'Suma = (n - 2) × 180° = (10 - 2) × 180° = 8 × 180° = 1,440°.', 'Ángulos de polígonos', 'Intermedio', 'Geometría Plana', 'Decágono'), ('¿Cuánto mide cada ángulo central de un octágono regular?', ['45°', '60°', '30°', '40°'], 0, 'Ángulo central = 360° / n = 360° / 8 = 45°.', 'Ángulo central', 'Intermedio', 'Geometría Plana', 'Polígonos regulares'), ('Resuelve el sistema 2x2 por igualación: { y = 2x + 1 ; y = 3x - 4 }.', ['x = 5, y = 11', 'x = 4, y = 9', 'x = 3, y = 7', 'x = 5, y = 9'], 0, 'Igualamos: 2x + 1 = 3x - 4 ⇒ 1 + 4 = 3x - 2x ⇒ x = 5. Luego y = 2(5) + 1 = 11.', 'Método de igualación', 'Intermedio', 'Álgebra', 'Sistemas de ecuaciones'), ('Racionaliza el denominador de la fracción: 6 / √3.', ['2√3', '3√3', '√3', '6√3'], 0, 'Multiplicamos numerador y denominador por √3: (6√3) / 3 = 2√3.', 'Racionalización simple', 'Intermedio', 'Álgebra', 'Radicales en el denominador'), ('¿Cuál es el valor de x en la proporción geométrica: 4 / x = 12 / 27?', ['x = 9', 'x = 8', 'x = 6', 'x = 10'], 0, 'Producto cruzado: 12x = 4 × 27 = 108 ⇒ x = 108 / 12 = 9.', 'Proporciones geométricas', 'Intermedio', 'Aritmética', 'Regla de tres'), ('En una bolsa hay 5 canicas rojas, 3 azules y 2 amarillas. ¿Cuál es la probabilidad de sacar una que NO sea roja?', ['5/10 (1/2 o 50%)', '3/10', '2/10', '4/10'], 0, 'Canicas no rojas = 3 + 2 = 5. Total = 10. Probabilidad = 5/10 = 1/2 = 50%.', 'Probabilidad de evento contrario', 'Intermedio', 'Probabilidad', 'Regla del complemento'), ('Si un ángulo mide 120°, ¿a cuántos radianes equivale en términos de π?', ['2π/3 radianes', '3π/4 radianes', '5π/6 radianes', 'π/3 radianes'], 0, 'Multiplicamos por (π / 180°): 120 × (π / 180) = 12/18 π = 2π/3 radianes.', 'Conversión de grados a radianes', 'Intermedio', 'Trigonometría', 'Medida angular'), ('¿Cuál es el área total de un cubo de arista 4 cm?', ['96 cm²', '64 cm²', '16 cm²', '48 cm²'], 0, 'El cubo tiene 6 caras cuadradas de área 4² = 16 cm². Área total = 6 × 16 = 96 cm².', 'Área superficial del cubo', 'Intermedio', 'Geometría del Espacio', 'Cubo'), ('En una progresión aritmética el primer término es a₁ = 3 y la diferencia es d = 5. ¿Cuál es el décimo término a₁₀?', ['48', '50', '45', '53'], 0, 'a_n = a₁ + (n - 1)d ⇒ a₁₀ = 3 + (10 - 1)5 = 3 + 45 = 48.', 'Progresiones aritméticas básicas', 'Intermedio', 'Álgebra', 'Término general'), ('¿Cuál es el coeficiente del término de grado 2 en el polinomio 4x³ - 7x² + 5x - 8?', ['-7', '7', '-8', '4'], 0, 'El término de grado 2 es -7x², por lo que su coeficiente es -7.', 'Identificación de coeficientes', 'Intermedio', 'Álgebra', 'Polinomios'), ('Si dos figuras son semejantes con razón de semejanza lineal k = 3, ¿cuál es la razón entre sus áreas?', ['9 (k²)', '3', '6', '27'], 0, 'La razón entre las áreas de dos figuras semejantes es igual al cuadrado de la razón de semejanza lineal: k² = 3² = 9.', 'Semejanza geométrica', 'Intermedio', 'Geometría Plana', 'Razón de áreas')])
