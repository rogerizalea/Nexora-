# 80 Preguntas de Razonamiento Lógico y Abstracto - Nivel Bachillerato (Reactivos 21 al 100)
# Formato: (pregunta, [opción0, opción1, opción2, opción3], c_idx, explicacion, skill, dificultad, topic, subtopic)

razonamiento_bachillerato_raw = [
    # 21 a 35: Lógica proposicional formal, tablas de verdad y tautologías
    ("Una fórmula proposicional cuya tabla de verdad arroja únicamente valores verdaderos para cualquier asignación de verdad se clasifica formalmente como:",
     ["Tautología", "Contradicción", "Contingencia", "Inconsistencia"], 0,
     "Una tautología es una ley lógica universalmente válida cuyo valor de verdad es verdadero en todas las interpretaciones posibles.",
     "Clasificación de fórmulas lógicas", "Desafiante", "Lógica Proposicional", "Tautologías"),

    ("¿Cuál de las siguientes fórmulas proposicionales es una contradicción lógica estricta?",
     ["p ∧ ¬p", "p ∨ ¬p", "p → p", "p ↔ p"], 0,
     "La conjunción simultánea de una proposición con su negación (p y no p) es siempre falsa bajo cualquier circunstancia.",
     "Contradicciones formales", "Desafiante", "Lógica Proposicional", "Principio de no contradicción"),

    ("Por la Ley de Implicación Material, el condicional (p → q) es lógicamente equivalente a:",
     ["¬p ∨ q", "¬p ∧ q", "p ∧ ¬q", "¬q → p"], 0,
     "La implicación material p → q equivale a decir 'o no ocurre el antecedente, o se cumple el consecuente' (¬p ∨ q).",
     "Equivalencia de implicación material", "Desafiante", "Lógica Proposicional", "Equivalencias lógicas"),

    ("¿A qué regla de inferencia formal corresponde el siguiente esquema argumentativo?\nPremisa 1: p → q\nPremisa 2: q → r\nConclusión: p → r",
     ["Silogismo Hipotético Puro", "Silogismo Disyuntivo", "Modus Ponens", "Dilema Constructivo"], 0,
     "El silogismo hipotético establece la transitividad de la implicación lógica a lo largo de una cadena de condicionales.",
     "Reglas de inferencia", "Desafiante", "Lógica Deductiva", "Silogismo Hipotético"),

    ("¿Qué regla de inferencia deduce la conclusión 'r ∨ s' a partir de las premisas (p → r), (q → s) y (p ∨ q)?",
     ["Dilema Constructivo", "Dilema Destructivo", "Modus Tollens", "Ley de Exportación"], 0,
     "El dilema constructivo combina una disyunción con dos condicionales independientes para derivar la disyunción de sus consecuentes.",
     "Dilemas lógicos", "Desafiante", "Lógica Formal", "Dilema Constructivo"),

    ("¿Cuál es la negación lógica de la proposición condicional: 'Si estudio todos los días, entonces apruebo el examen de admisión'?",
     ["Estudio todos los días y no apruebo el examen de admisión", "Si no estudio todos los días, no apruebo el examen", "No estudio todos los días o apruebo el examen", "Nunca estudio y apruebo el examen"], 0,
     "La negación de p → q es p ∧ ¬q (se verifica el antecedente pero se frustra el consecuente).",
     "Negación de condicionales", "Desafiante", "Lógica Proposicional", "Negación formal"),

    ("Por las leyes de idempotencia del álgebra de proposiciones, la expresión (p ∨ p) se simplifica a:",
     ["p", "Verdadero (V)", "Falso (F)", "2p"], 0,
     "La disyunción o conjunción de una proposición consigo misma es idéntica a la proposición original: p ∨ p ≡ p.",
     "Leyes de idempotencia", "Desafiante", "Lógica Proposicional", "Álgebra de Boole"),

    ("La Ley de Absorción en lógica formal establece que la fórmula p ∧ (p ∨ q) es lógicamente equivalente a:",
     ["p", "q", "p ∧ q", "p ∨ q"], 0,
     "La proposición exterior absorbe la disyunción interior: si p es falso la conjunción es falsa; si p es verdadero la disyunción es verdadera y el resultado es p.",
     "Ley de Absorción", "Desafiante", "Lógica Proposicional", "Simplificación de fórmulas"),

    ("¿Cuántas filas tiene la tabla de verdad de una fórmula proposicional que contiene 4 variables proposicionales independientes (p, q, r, s)?",
     ["16 filas", "8 filas", "32 filas", "12 filas"], 0,
     "El número de combinaciones de verdad para n variables binarias es 2ⁿ. Para n = 4: 2⁴ = 16 filas.",
     "Tablas de verdad multidimensionales", "Desafiante", "Lógica Proposicional", "Combinatoria de interpretaciones"),

    ("¿Qué conectiva lógica satisface la definición de la 'Barra de Sheffer' (NAND lógico)?",
     ["¬(p ∧ q)", "¬(p ∨ q)", "p ↔ ¬q", "¬p ∧ ¬q"], 0,
     "La barra de Sheffer (p | q) representa la negación conjunta de la conjunción: es falsa solo cuando ambas variables son simultáneamente verdaderas.",
     "Conectivas universales", "Desafiante", "Lógica Simbólica", "Barra de Sheffer"),

    ("¿Por qué el operador NAND (Barra de Sheffer) se considera funcionalmente completo?",
     ["Porque cualquier conectiva lógica de la lógica proposicional puede expresarse utilizando exclusivamente operadores NAND", "Porque siempre produce resultados verdaderos", "Porque no requiere variables proposicionales", "Porque coincide con el bicondicional"], 0,
     "Un conjunto de operadores es funcionalmente completo si puede generar todas las funciones booleanas posibles sin ayuda de otros operadores.",
     "Completitud funcional", "Desafiante", "Lógica Simbólica", "Operadores universales"),

    ("Dada la proposición: 'No todos los estudiantes aprobaron el examen'. Su formulación exacta en lógica de predicados es:",
     ["¬(∀x) A(x), que equivale a (∃x) ¬A(x)", "(∀x) ¬A(x)", "(∃x) A(x)", "¬(∃x) A(x)"], 0,
     "Negar que todos los individuos de un dominio cumplan una propiedad equivale lógicamente a afirmar que existe al menos un individuo que no la cumple.",
     "Cuantificación de predicados", "Desafiante", "Lógica de Predicados", "Cuantificadores de primer orden"),

    ("¿Cuál es la negación lógica de: 'Existe al menos un número real x tal que x² < 0'?",
     ["Para todo número real x, se cumple que x² ≥ 0", "Existe un x tal que x² > 0", "Para ningún x se cumple x = 0", "Todos los números reales son negativos"], 0,
     "La negación de (∃x) P(x) es (∀x) ¬P(x). La negación de x² < 0 es x² ≥ 0.",
     "Negación de cuantificador existencial", "Desafiante", "Lógica de Predicados", "Cuantificadores matemáticos"),

    ("En una inferencia lógica válida, si todas las premisas son verdaderas, la conclusión:",
     ["Es necesariamente verdadera por necesidad lógica", "Tiene un 50% de probabilidad de ser verdadera", "Puede ser falsa si el tema es empírico", "Debe someterse a votación"], 0,
     "Por definición de validez deductiva estricta, es imposible que las premisas sean verdaderas y la conclusión sea falsa simultáneamente.",
     "Validez deductiva formal", "Desafiante", "Lógica Formal", "Teoría de la demostración"),

    ("El método de demostración por 'Reducción al Absurdo' (reductio ad absurdum) consiste en:",
     ["Asumir provisionalmente la falsedad de la tesis que se desea probar para derivar una contradicción lógica formal", "Demostrar que el oponente carece de credenciales académicas", "Revisar uno a uno todos los casos empíricos del universo", "Enumerar ejemplos donde la tesis se cumpla"], 0,
     "Al demostrar que la negación de la tesis implica una contradicción del tipo p ∧ ¬p, se concluye que la tesis original debe ser necesariamente verdadera.",
     "Demostración por el absurdo", "Desafiante", "Lógica Matemática", "Métodos de demostración"),

    # 36 a 50: Teoría formal de conjuntos, relaciones y cardinalidad
    ("Si un conjunto A tiene 6 elementos finitos distintos, ¿cuántos subconjuntos tiene su conjunto potencia P(A)?",
     ["64 subconjuntos", "32 subconjuntos", "36 subconjuntos", "128 subconjuntos"], 0,
     "La cardinalidad del conjunto potencia de un conjunto de n elementos es 2ⁿ. Para n = 6: 2⁶ = 64 subconjuntos.",
     "Conjunto potencia", "Desafiante", "Teoría de Conjuntos", "Cardinalidad"),

    ("¿Cuántos subconjuntos propios no vacíos posee un conjunto con 5 elementos?",
     ["30", "31", "32", "25"], 0,
     "Subconjuntos totales = 2⁵ = 32. Se excluyen el subconjunto impropio (el propio conjunto, 1) y el conjunto vacío (1): 32 - 2 = 30.",
     "Subconjuntos propios no vacíos", "Desafiante", "Teoría de Conjuntos", "Subconjuntos"),

    ("Para que una relación binaria R sobre un conjunto sea una relación de equivalencia, debe satisfacer obligatoriamente las propiedades:",
     ["Reflexiva, simétrica y transitiva", "Reflexiva, antisimétrica y transitiva", "Irreflexiva, simétrica y completa", "Convexa, densa y conexa"], 0,
     "Toda relación de equivalencia parte un conjunto en clases de equivalencia disjuntas mediante estas tres propiedades algebraicas.",
     "Relaciones de equivalencia", "Desafiante", "Teoría de Conjuntos", "Estructuras relacionales"),

    ("Si R es una relación de orden parcial sobre un conjunto A, ¿qué propiedad reemplaza a la simetría?",
     ["Antisimetría (si aRb y bRa, entonces a = b)", "Asimetría estricta", "Reflexividad total", "Linealidad"], 0,
     "Un orden parcial (como la inclusión de conjuntos o la divisibilidad en enteros) es reflexivo, antisimétrico y transitivo.",
     "Relaciones de orden parcial", "Desafiante", "Teoría de Conjuntos", "Órdenes parciales"),

    ("Si los conjuntos A y B tienen cardinalidades |A| = 4 y |B| = 5, ¿cuántos elementos contiene el producto cartesiano A × B?",
     ["20 elementos", "9 elementos", "25 elementos", "16 elementos"], 0,
     "La cardinalidad del producto cartesiano es el producto de las cardinalidades individuales: |A × B| = 4 × 5 = 20 pares ordenados.",
     "Producto cartesiano", "Desafiante", "Teoría de Conjuntos", "Pares ordenados"),

    ("¿Cuántas funciones distintas pueden definirse desde un conjunto dominio de 3 elementos hacia un codominio de 4 elementos?",
     ["64 funciones", "81 funciones", "12 funciones", "24 funciones"], 0,
     "El número total de aplicaciones de A en B es |B|^|A| = 4³ = 64 funciones distintas.",
     "Conteo de funciones", "Desafiante", "Matemática Discreta", "Aplicaciones entre conjuntos"),

    ("En una encuesta aplicada a 100 estudiantes: 50 estudian Inglés, 40 Francés y 30 Alemán; 20 estudian Inglés y Francés, 15 Francés y Alemán, 10 Inglés y Alemán; y 5 estudian los tres idiomas. ¿Cuántos estudian al menos uno de los tres idiomas?",
     ["80 estudiantes", "85 estudiantes", "75 estudiantes", "90 estudiantes"], 0,
     "Inclusión-exclusión: |I ∪ F ∪ A| = 50 + 40 + 30 - (20 + 15 + 10) + 5 = 120 - 45 + 5 = 80.",
     "Inclusión-exclusión de 3 conjuntos", "Desafiante", "Teoría de Conjuntos", "Diagramas de Venn de 3 conjuntos"),

    ("¿Cuántos estudiantes de la encuesta anterior no estudian ninguno de los tres idiomas?",
     ["20 estudiantes", "15 estudiantes", "25 estudiantes", "10 estudiantes"], 0,
     "Total de estudiantes (100) menos los que estudian al menos uno (80): 100 - 80 = 20 estudiantes.",
     "Complemento en tres conjuntos", "Desafiante", "Teoría de Conjuntos", "Conjunto universal"),

    ("¿Cuántos estudiantes estudian exclusivamente Inglés (solo Inglés y ningún otro idioma)?",
     ["25 estudiantes", "50 estudiantes", "20 estudiantes", "30 estudiantes"], 0,
     "Solo Inglés = Total Inglés - (I ∩ F) - (I ∩ A) + (I ∩ F ∩ A) = 50 - 20 - 10 + 5 = 25.",
     "Regiones disjuntas en Venn", "Desafiante", "Teoría de Conjuntos", "Cardinalidad exclusiva"),

    ("Si dos conjuntos no vacíos cumplen que A ∩ B = ∅ (son disjuntos), ¿cuál de las siguientes igualdades es necesariamente cierta?",
     ["A - B = A", "A ∪ B = A", "A - B = ∅", "B - A = ∅"], 0,
     "Al no compartir ningún elemento, quitarle B al conjunto A no retira ningún elemento de A, por lo que A - B = A.",
     "Conjuntos disjuntos", "Desafiante", "Teoría de Conjuntos", "Diferencia de conjuntos"),

    ("¿Qué nombre recibe el axioma de la teoría de conjuntos que afirma que todo conjunto no vacío A contiene un elemento x tal que x ∩ A = ∅?",
     ["Axioma de Regularidad o Fundación", "Axioma de Elección", "Axioma de Extensionalidad", "Axioma de Unión"], 0,
     "El axioma de regularidad impide la existencia de conjuntos que se contengan a sí mismos (x ∈ x) o cadenas infinitas descendentes de pertenencia.",
     "Axiomática de Zermelo-Fraenkel", "Desafiante", "Teoría de Conjuntos", "Axioma de regularidad"),

    ("La Paradoja de Russell demostró la inconsistencia del principio de comprensión irrestricto de Frege analizando el conjunto R definido como:",
     ["El conjunto de todos los conjuntos que no se contienen a sí mismos como miembros (R = {x : x ∉ x})", "El conjunto de todos los números reales mayores que cero", "El conjunto de todos los números primos pares", "El conjunto de todas las rectas paralelas"], 0,
     "Si R ∈ R, entonces por definición R ∉ R; y si R ∉ R, entonces R ∈ R; una contradicción que forzó la axiomatización de la teoría de conjuntos.",
     "Paradoja de Russell", "Desafiante", "Lógica Matemática", "Fundamentos de las matemáticas"),

    ("¿Cuál es la cardinalidad del conjunto de los números racionales ℚ comparada con la de los números naturales ℕ?",
     ["Tienen exactamente la misma cardinalidad infinita numerable (Aleph cero, ℵ₀)", "El conjunto ℚ tiene mayor cardinalidad que ℕ", "El conjunto ℕ es finito y ℚ infinito", "No pueden compararse"], 0,
     "Georg Cantor demostró mediante su método diagonal de enumeración que ℚ es numerable y biyectable con ℕ.",
     "Transfinitos de Cantor", "Desafiante", "Teoría de Conjuntos", "Conjuntos numerables"),

    ("¿Qué demostró Cantor respecto al conjunto de los números reales ℝ mediante el argumento diagonal?",
     ["Que ℝ es un infinito no numerable, con cardinalidad estrictamente mayor que la de ℕ", "Que ℝ tiene menos elementos que ℚ", "Que ℝ es numerable como los enteros", "Que ℝ carece de orden lineal"], 0,
     "El argumento diagonal demuestra que cualquier lista numerable de números reales en [0,1] deja fuera infinitos reales no computados en la lista.",
     "Argumento diagonal de Cantor", "Desafiante", "Teoría de Conjuntos", "Infinities no numerables"),

    ("La 'Hipótesis del Continuo' formulada por Cantor postula que:",
     ["No existe ningún conjunto infinito cuya cardinalidad se encuentre estrictamente entre la de los enteros ℵ₀ y la de los reales 2^(ℵ₀)", "Todos los números irracionales son continuos", "La recta real contiene agujeros microscópicos", "Los enteros son más densos que los racionales"], 0,
     "Gödel (1940) y Cohen (1963) demostraron que la Hipótesis del Continuo es independiente de los axiomas de ZFC (no se puede probar ni refutar dentro de ZFC).",
     "Hipótesis del Continuo", "Desafiante", "Lógica Matemática", "Independencia axiomática"),

    # 51 a 65: Combinatoria avanzada y probabilidad condicional
    ("¿De cuántas maneras diferentes pueden sentarse 6 personas alrededor de una mesa circular?",
     ["120 maneras", "720 maneras", "360 maneras", "24 maneras"], 0,
     "Permutaciones circulares: PC_n = (n - 1)!. Para n = 6: PC_6 = (6 - 1)! = 5! = 120 maneras.",
     "Permutaciones circulares", "Desafiante", "Combinatoria", "Arreglos circulares"),

    ("¿Cuántas palabras o cadenas diferentes (con o sin sentido) pueden formarse permutando todas las letras de la palabra 'MATEMATICA'?",
     ["151,200", "302,400", "3,628,800", "75,600"], 0,
     "Permutaciones con repetición: total 10 letras (M:2, A:3, T:2, E:1, I:1, C:1). P = 10! / (2! × 3! × 2!) = 3,628,800 / (2 × 6 × 2) = 151,200.",
     "Permutaciones con repetición", "Desafiante", "Combinatoria", "Análisis combinatorio"),

    ("¿De cuántas maneras pueden distribuirse 8 caramelos idénticos entre 3 niños diferentes?",
     ["45 maneras", "56 maneras", "24 maneras", "120 maneras"], 0,
     "Combinaciones con repetición (método de barras y estrellas): CR(n, k) = C(k + n - 1, n - 1) = C(8 + 3 - 1, 3 - 1) = C(10, 2) = 45.",
     "Combinaciones con repetición", "Desafiante", "Combinatoria", "Barras y estrellas"),

    ("En una bolsa hay 3 bolas rojas y 2 bolas blancas. Si se extraen 2 bolas consecutivamente sin reemplazo, ¿cuál es la probabilidad de que ambas sean rojas?",
     ["3/10", "9/25", "6/20", "1/5"], 0,
     "Probabilidad de la primera roja: 3/5. Probabilidad de la segunda roja: 2/4. P = (3/5) × (2/4) = 6/20 = 3/10.",
     "Probabilidad sin reemplazo", "Desafiante", "Probabilidad", "Regla de la multiplicación"),

    ("Dada la regla de Bayes, si una prueba médica tiene 99% de sensibilidad (detecta la enfermedad si está presente) y 95% de especificidad (da negativo si está sano), pero la enfermedad solo afecta al 1% de la población (prevalencia = 0.01), ¿cuál es aproximadamente la probabilidad de estar realmente enfermo si la prueba da positivo?",
     ["Aproximadamente 16.6% (1 de cada 6 personas)", "Exactamente 99%", "95%", "50%"], 0,
     "P(Positivo) = (0.01)(0.99) + (0.99)(0.05) = 0.0099 + 0.0495 = 0.0594. Luego P(Enfermo|Positivo) = 0.0099 / 0.0594 ≈ 0.1667 (16.7%). Paradoja del falso positivo por baja prevalencia.",
     "Teorema de Bayes aplicado", "Desafiante", "Probabilidad", "Inferencia bayesiana"),

    ("¿En qué consiste la célebre paradoja probabilística del problema de Monty Hall?",
     ["El concursante duplica su probabilidad de ganar el automóvil (de 1/3 a 2/3) si decide cambiar la puerta elegida inicialmente tras revelarse una cabra", "No importa si cambia o se queda, la probabilidad siempre es 50%", "Quedarse con la puerta inicial tiene 75% de probabilidad", "Cambiar de puerta reduce la probabilidad a cero"], 0,
     "Al inicio hay 1/3 de elegir el auto y 2/3 de elegir cabra. El presentador, que sabe dónde está el auto, siempre abre una puerta con cabra de las restantes, concentrando los 2/3 en la otra puerta no elegida.",
     "Problema de Monty Hall", "Desafiante", "Probabilidad", "Probabilidad condicional"),

    ("Al lanzar un dado equilibrado de 6 caras, sabemos que el resultado obtenido fue un número par. ¿Cuál es la probabilidad condicional de que haya sido el número 6?",
     ["1/3", "1/6", "1/2", "2/3"], 0,
     "El espacio muestral reducido al saber que es par es {2, 4, 6} (3 casos posibles equiprobables). El 6 es 1 de esos 3 casos: P = 1/3.",
     "Espacio muestral condicionado", "Desafiante", "Probabilidad", "Probabilidad condicional simple"),

    ("Dos eventos A y B son estadísticamente independientes si y solo si cumplen la relación formal:",
     ["P(A ∩ B) = P(A) × P(B)", "P(A ∪ B) = P(A) + P(B)", "P(A | B) = 0", "P(A) = P(B)"], 0,
     "La independencia estadística formal estipula que la ocurrencia del evento B no altera la probabilidad de A: P(A | B) = P(A), lo que implica P(A ∩ B) = P(A)P(B).",
     "Independencia de eventos", "Desafiante", "Probabilidad", "Eventos independientes"),

    ("¿Cuál es el valor esperado (esperanza matemática) del puntaje obtenido al lanzar un dado regular justo de 6 caras?",
     ["3.5", "3.0", "4.0", "3.6"], 0,
     "E[X] = (1 + 2 + 3 + 4 + 5 + 6) / 6 = 21 / 6 = 3.5.",
     "Esperanza matemática", "Desafiante", "Probabilidad", "Variables aleatorias discretas"),

    ("Si una variable aleatoria sigue una distribución binomial B(n = 100, p = 0.2), ¿cuál es su media (esperanza) y su varianza?",
     ["Media = 20 ; Varianza = 16", "Media = 20 ; Varianza = 20", "Media = 25 ; Varianza = 15", "Media = 10 ; Varianza = 8"], 0,
     "Para la distribución binomial: Media = np = 100 × 0.2 = 20. Varianza = np(1 - p) = 100 × 0.2 × 0.8 = 16.",
     "Distribución binomial", "Desafiante", "Probabilidad y Estadística", "Parámetros binomiales"),

    ("¿Qué teorema de la teoría de probabilidad fundamenta que la suma o promedio de un gran número de variables aleatorias independientes e idénticamente distribuidas tiende hacia una distribución normal gaussiana?",
     ["Teorema Central del Límite", "Ley Fuerte de los Grandes Números", "Teorema de Chebyshev", "Lema de Borel-Cantelli"], 0,
     "El Teorema Central del Límite es la piedra angular de la inferencia estadística moderna y el análisis de errores.",
     "Teorema Central del Límite", "Desafiante", "Probabilidad y Estadística", "Distribución normal"),

    ("La 'Ley de los Grandes Números' garantiza empíricamente que:",
     ["La frecuencia relativa de un suceso converge a su probabilidad teórica a medida que el número de repeticiones tiende a infinito", "Si sale cara cinco veces consecutivas, necesariamente debe salir cruz en el siguiente tiro", "Los casinos nunca pueden quebrar", "Los promedios muestrales son siempre números enteros"], 0,
     "La ley de los grandes números rige la estabilidad estadística a largo plazo sin validar la falacia del jugador a corto plazo.",
     "Ley de los Grandes Números", "Desafiante", "Probabilidad", "Convergencia estocástica"),

    ("¿Qué es la 'falacia del jugador' (Monte Carlo fallacy)?",
     ["Creer erróneamente que los resultados pasados de eventos independientes influyen en la probabilidad de los eventos futuros (ej. 'ya salió mucho rojo, ahora toca negro')", "Apostar únicamente a los números impares en la ruleta", "Creer que la probabilidad teórica es siempre cero", "Calcular la media en lugar de la mediana"], 0,
     "Cada tirada de una ruleta justa o moneda es un evento independiente sin memoria del historial previo.",
     "Sesgos probabilísticos", "Desafiante", "Pensamiento Crítico", "Falacia del jugador"),

    ("Si se ordenan aleatoriamente las letras de la palabra 'ROMA', ¿cuál es la probabilidad de que la primera letra sea una vocal?",
     ["2/4 = 1/2 (50%)", "1/4", "3/4", "1/3"], 0,
     "La palabra tiene 4 letras, de las cuales 2 son vocales (O, A). La probabilidad de que la primera posición sea vocal es 2/4 = 1/2.",
     "Probabilidad en permutaciones", "Desafiante", "Probabilidad", "Conteo y simetría"),

    ("En una rifa de 1000 boletos numerados del 000 al 999, ¿cuál es la probabilidad de ganar si una persona compra todos los boletos cuyos dígitos son todos pares?",
     ["125 / 1000 = 1/8 (12.5%)", "500 / 1000", "250 / 1000", "100 / 1000"], 0,
     "Hay 5 dígitos pares: {0, 2, 4, 6, 8}. Cantidad de boletos con 3 dígitos pares = 5 × 5 × 5 = 125 boletos. P = 125 / 1000 = 1/8.",
     "Principio multiplicativo y probabilidad", "Desafiante", "Probabilidad", "Espacio muestral combinatorio"),

    # 66 a 80: Razonamiento espacial tridimensional, cortes y proyecciones
    ("Si se corta un cono circular recto mediante un plano oblicuo que corta todas sus generatrices sin ser paralelo a la base ni a ninguna generatriz, la curva de corte es:",
     ["Una elipse", "Una parábola", "Una hipérbola", "Una circunferencia perfecta"], 0,
     "Las secciones cónicas dependen del ángulo del plano: perpendicular al eje da circunferencia, oblicuo a todas las generatrices produce una elipse.",
     "Secciones cónicas", "Desafiante", "Geometría Analítica y Plana", "Cortes en el cono"),

    ("¿Qué curva cónica resulta si el plano de corte es exactamente paralelo a una de las generatrices del cono recto?",
     ["Una parábola", "Una hipérbola", "Una elipse", "Un par de rectas secantes"], 0,
     "Cuando el ángulo del plano es idéntico a la pendiente de la generatriz respecto al eje, la sección cónica resultante es una parábola.",
     "Geometría de la parábola", "Desafiante", "Geometría Analítica y Plana", "Secciones cónicas"),

    ("Si se corta un cubo con un plano que pasa por los puntos medios de 6 aristas consecutivas que rodean su centro, la figura resultante del corte es:",
     ["Un hexágono regular", "Un pentágono", "Un cuadrado perfecto", "Un triángulo equilátero"], 0,
     "Es el célebre corte hexagonal simétrico del cubo que interseca exactamente seis caras formando un hexágono regular.",
     "Secciones planas del cubo", "Desafiante", "Razonamiento Espacial", "Geometría tridimensional"),

    ("¿Cuál es el número total de vértices, aristas y caras de un dodecaedro regular?",
     ["20 vértices, 30 aristas y 12 caras pentagonales", "12 vértices, 30 aristas y 20 caras", "8 vértices, 12 aristas y 6 caras", "24 vértices, 36 aristas y 12 caras"], 0,
     "El dodecaedro regular está formado por 12 pentágonos regulares, cumpliendo la característica de Euler: V - A + C = 20 - 30 + 12 = 2.",
     "Sólidos platónicos", "Desafiante", "Razonamiento Espacial", "Dodecaedro regular"),

    ("La fórmula poliedral de Euler para cualquier poliedro simple convexo cerrado establece la relación matemática:",
     ["V - A + C = 2 (Vértices - Aristas + Caras = 2)", "V + A - C = 2", "V + A + C = 0", "V × C = A²"], 0,
     "La característica de Euler χ = V - A + C = 2 es un invariante topológico universal para poliedros homeomorfos a la esfera.",
     "Característica de Euler", "Desafiante", "Razonamiento Espacial", "Topología combinatoria"),

    ("Un icosaedro regular posee 20 caras triangulares equiláteras congruentes. ¿Cuántos vértices tiene?",
     ["12 vértices", "20 vértices", "30 vértices", "24 vértices"], 0,
     "Cada triángulo tiene 3 aristas: 20 × 3 = 60; como cada arista es compartida por 2 caras, A = 30. Por Euler: V = 2 + A - C = 2 + 30 - 20 = 12 vértices.",
     "Icosaedro regular", "Desafiante", "Razonamiento Espacial", "Sólidos platónicos"),

    ("Si proyectamos ortogonalmente un cubo sobre un plano perpendicular a una de sus diagonales principales, ¿qué contorno poligonal exterior se obtiene?",
     ["Un hexágono regular", "Un cuadrado", "Un octágono", "Un triángulo"], 0,
     "Al mirar un cubo alineado exactamente a lo largo de su gran diagonal espacial, sus 6 aristas externas forman la silueta de un hexágono regular.",
     "Proyección diédrica axial", "Desafiante", "Razonamiento Espacial", "Vistas axonométricas"),

    ("Al girar un triángulo rectángulo de catetos 3 cm y 4 cm alrededor del cateto de 4 cm como eje, ¿cuál es el volumen del cono formado?",
     ["12π cm³", "16π cm³", "36π cm³", "24π cm³"], 0,
     "El radio de la base es r = 3 cm y la altura es h = 4 cm. Volumen = (1/3)πr²h = (1/3)π(9)(4) = 12π cm³.",
     "Sólidos de revolución", "Desafiante", "Razonamiento Físico-Matemático", "Volumen de conos"),

    ("¿Cuántos ejes de simetría axial tiene un hexágono regular en el plano?",
     ["6 ejes de simetría (3 que unen vértices opuestos y 3 que unen puntos medios de lados opuestos)", "12 ejes", "3 ejes", "4 ejes"], 0,
     "Un polígono regular de n lados posee exactamente n ejes de simetría en el plano; para n = 6 son 6 ejes.",
     "Simetría de polígonos regulares", "Desafiante", "Razonamiento Abstracto", "Grupos diédricos"),

    ("En un sistema de coordenadas espaciales tridimensionales (x, y, z), ¿qué lugar geométrico representa la ecuación x² + y² + z² = 25?",
     ["Una superficie esférica centrada en el origen con radio r = 5", "Un cilindro circular infinito", "Un cono de vértice en el origen", "Un plano inclinado"], 0,
     "Es la ecuación canónica estándar de la esfera centrada en (0,0,0) de radio r = √25 = 5.",
     "Geometría analítica espacial", "Desafiante", "Geometría Analítica y Plana", "Superficies cuádricas"),

    ("¿Qué poliedro dual se obtiene al unir los centros de las caras de un cubo regular?",
     ["Un octaedro regular", "Otro cubo idéntico", "Un tetraedro", "Un dodecaedro"], 0,
     "El octaedro (8 caras triangulares, 6 vértices) es el poliedro dual conjugado del cubo (6 caras cuadradas, 8 vértices).",
     "Dualidad de poliedros", "Desafiante", "Razonamiento Espacial", "Poliedros duales"),

    ("¿Cuál es el poliedro platónico auto-dual (cuyo dual es idéntico a sí mismo)?",
     ["El tetraedro regular (4 caras, 4 vértices)", "El cubo", "El octaedro", "El icosaedro"], 0,
     "El tetraedro tiene 4 caras y 4 vértices; al conectar los centros de sus caras se genera otro tetraedro invertido.",
     "Auto-dualidad", "Desafiante", "Razonamiento Espacial", "Tetraedro"),

    ("En el sistema de proyecciones diédricas del primer cuadrante (sistema europeo), la vista lateral izquierda del objeto se dibuja reglamentariamente:",
     ["A la derecha de la vista frontal (alzado)", "A la izquierda de la vista frontal", "Debajo del alzado", "Encima del alzado"], 0,
     "En el método de proyección del primer diedro (ISO europeo), la vista observada desde la izquierda se proyecta y plasma a la derecha del alzado.",
     "Dibujo técnico normalizado", "Desafiante", "Razonamiento Espacial", "Sistemas de proyección ISO"),

    ("¿Cuántos grados mide el ángulo diedro interno entre dos caras contiguas de un cubo?",
     ["90°", "60°", "120°", "45°"], 0,
     "Las caras de un cubo son mutuamente perpendiculares, formando ángulos diedros rectos de 90° en todas sus aristas.",
     "Ángulos diedros", "Desafiante", "Razonamiento Espacial", "Geometría del espacio"),

    ("En la paradoja de Zenón de Elea sobre 'Aquiles y la tortuga', la falacia conceptual subyacente radica en:",
     ["Confundir la divisibilidad infinita matemática de un intervalo de espacio-tiempo con la imposibilidad física de recorrerlo en un tiempo finito", "Afirmar que la tortuga corre a mayor velocidad que el héroe", "Desconocer el teorema de Pitágoras", "Suponer que el espacio es curvo"], 0,
     "Una suma infinita de intervalos temporales estrictamente decrecientes converge a un límite finito (serie geométrica convergente), permitiendo a Aquiles superar a la tortuga en un instante temporal finito.",
     "Paradojas lógicas clásicas", "Desafiante", "Epistemología y Pensamiento Crítico", "Zenón de Elea")
]
