# 80 Preguntas de Razonamiento Lógico y Abstracto - Nivel Universitario/Avanzado (Reactivos 21 al 100)
# Formato: (pregunta, [opción0, opción1, opción2, opción3], c_idx, explicacion, skill, dificultad, topic, subtopic)

razonamiento_universitario_raw = [
    # 21 a 35: Lógica matemática avanzada y teoremas de Gödel
    ("¿Cuál es el enunciado medular del Primer Teorema de Incompletitud de Kurt Gödel (1931)?",
     ["En cualquier sistema formal axiomático consistente capaz de describir la aritmética básica de Peano, existen proposiciones verdaderas que no pueden ser demostradas dentro del propio sistema", "Todo sistema formal es necesariamente inconsistente", "La geometría euclidiana es incompleta", "Todas las verdades matemáticas son demostrables por algoritmos finitos"], 0,
     "Gödel construyó formalmente una sentencia autorreferencial que afirma 'no soy demostrable'; si el sistema es consistente, la sentencia es verdadera pero indemostrable dentro de él.",
     "Teoremas de incompletitud", "Desafiante", "Lógica Matemática Avanzada", "Primer Teorema de Gödel"),

    ("¿Qué demuestra el Segundo Teorema de Incompletitud de Gödel respecto a la consistencia de una teoría aritmética?",
     ["Un sistema formal consistente no puede demostrar su propia consistencia utilizando únicamente las herramientas deductivas de su propio lenguaje", "La consistencia de un sistema se demuestra fácilmente por inducción", "Ningún sistema puede ser consistente", "La aritmética es decidible"], 0,
     "La proposición que codifica formalmente 'este sistema es consistente' (Consis) es una de las fórmulas indemostrables en cualquier sistema consistente que incluya Peano.",
     "Consistencia de sistemas formales", "Desafiante", "Lógica Matemática Avanzada", "Segundo Teorema de Gödel"),

    ("En la técnica de Gödelización empleada en metamatemática, ¿qué mecanismo permite representar enunciados sobre fórmulas dentro de la propia aritmética?",
     ["La asignación biunívoca de un número natural único (Número de Gödel) a cada símbolo, fórmula y secuencia de demostración mediante factorización en números primos", "El cálculo de matrices invertibles", "La geometría analítica cartesiana", "El uso de números complejos imaginarios"], 0,
     "Al codificar la sintaxis formal como potencias de números primos, las propiedades metamatemáticas de demostrabilidad se traducen en relaciones aritméticas ordinarias.",
     "Numeración de Gödel", "Desafiante", "Lógica Matemática Avanzada", "Aritmetización de la sintaxis"),

    ("¿Qué demostró el Teorema de Church-Turing (indecidibilidad del Entscheidungsproblem)?",
     ["Que no existe ningún algoritmo general universal capaz de decidir la validez de cualquier fórmula de la lógica de predicados de primer orden", "Que las computadoras nunca podrán calcular multiplicaciones", "Que la lógica proposicional no tiene tablas de verdad", "Que todos los problemas de cálculo son solubles en tiempo lineal"], 0,
     "Church y Turing demostraron independientemente que el cálculo de predicados es semidecidible pero algorítmicamente indecidible en general.",
     "Indecidibilidad del Entscheidungsproblem", "Desafiante", "Ciencias de la Computación Teórica", "Teorema de Church-Turing"),

    ("En teoría de la computabilidad, ¿qué afirma el Teorema de la Parada (Halting Problem) demostrado por Alan Turing en 1936?",
     ["Es matemáticamente imposible diseñar un programa general que determine para cualquier programa y entrada arbitraria si este terminará o entrará en bucle infinito", "Todas las máquinas de Turing terminan siempre en tiempo polinomial", "Las máquinas de Turing no pueden simular funciones recursivas", "El tiempo de ejecución siempre se puede predecir analíticamente"], 0,
     "Turing utilizó un argumento diagonal de autorreferencia y contradicción para demostrar la indecidibilidad estricta del problema de la parada.",
     "Problema de la parada", "Desafiante", "Informática Teórica", "Indecidibilidad"),

    ("¿Qué postula el Teorema de Rice sobre las propiedades semánticas no triviales de los programas computacionales?",
     ["Cualquier propiedad extensional no trivial sobre el lenguaje reconocido por una Máquina de Turing es algorítmicamente indecidible", "Todas las propiedades de los compiladores son computables", "El tamaño del código fuente siempre es decidible", "Los lenguajes regulares son universales"], 0,
     "El Teorema de Rice generaliza el problema de la parada: verificar si un programa computa una función determinada o carece de errores semánticos es intrínsecamente indecidible.",
     "Teorema de Rice", "Desafiante", "Ciencias de la Computación Teórica", "Computabilidad"),

    ("En teoría de la complejidad computacional, ¿cómo se define la clase de complejidad NP?",
     ["La clase de problemas de decisión cuyas soluciones propuestas pueden ser verificadas en tiempo polinomial por una Máquina de Turing determinista", "Problemas que no pueden resolverse en tiempo polinomial", "Problemas numéricos probabilísticos", "Problemas que requieren tiempo exponencial para ser verificados"], 0,
     "NP significa 'Non-deterministic Polynomial time': una conjetura o certificado de solución se comprueba en tiempo polinomial O(n^k).",
     "Clases de complejidad P vs NP", "Desafiante", "Ciencias de la Computación Teórica", "Complejidad computacional"),

    ("¿Qué estableció el Teorema de Cook-Levin (1971) como hito fundacional de la teoría de la complejidad?",
     ["Demostró que el problema de satisfacibilidad booleana (SAT) es NP-completo", "Probó que P = NP de manera concluyente", "Demostró que la factorización de enteros es de clase P", "Probó que no existen problemas NP"], 0,
     "Cook demostró que cualquier problema en NP puede reducirse polinomialmente a SAT, estableciendo el primer problema NP-completo de la historia.",
     "Teorema de Cook-Levin", "Desafiante", "Ciencias de la Computación Teórica", "NP-Completitud"),

    ("Si un problema L es NP-completo y se lograse encontrar un algoritmo determinista que lo resuelva en tiempo polinomial O(n^k), ¿cuál sería la consecuencia teórica?",
     ["Se demostraría inmediatamente que P = NP, y todos los problemas en NP tendrían solución en tiempo polinomial", "Solo ese problema específico pertenecería a P", "Se demostraría que P ≠ NP", "La criptografía de clave pública sería más segura"], 0,
     "Por la propiedad de reducción polinomial universal, resolver un solo problema NP-completo en tiempo polinomial colapsaría toda la clase NP en P.",
     "Consecuencias del problema P vs NP", "Desafiante", "Ciencias de la Computación Teórica", "Colapso P = NP"),

    ("¿En qué nivel de la Jerarquía de Chomsky se sitúan las gramáticas libres de contexto que estructuran los lenguajes de programación y son reconocidas por autómatas de pila?",
     ["Tipo 2: Gramáticas libres de contexto (autómatas a pila)", "Tipo 3: Gramáticas regulares (autómatas finitos)", "Tipo 1: Gramáticas sensibles al contexto", "Tipo 0: Lenguajes recursivamente enumerables"], 0,
     "Chomsky clasificó formalmente los lenguajes: Tipo 3 (regulares), Tipo 2 (libres de contexto, parsers con pila), Tipo 1 (sensibles al contexto), Tipo 0 (Turing).",
     "Jerarquía de Chomsky", "Desafiante", "Ciencias de la Computación Teórica", "Teoría de autómatas"),

    ("¿Qué es una Máquina de Turing no determinista (NTM)?",
     ["Un modelo teórico de computación en el que la función de transición permite múltiples configuraciones o bifurcaciones de cálculo simultáneas para un mismo estado y símbolo", "Una computadora que funciona con componentes mecánicos aleatorios", "Una máquina que no tiene cinta de memoria", "Un procesador cuántico comercial"], 0,
     "La NTM explora ramas computacionales paralelas de forma abstracta, aceptando si existe al menos una rama exitosa en el árbol de ejecución.",
     "Modelos de computación no deterministas", "Desafiante", "Ciencias de la Computación Teórica", "Máquinas de Turing"),

    ("En la teoría de la demostración formal, ¿qué expresa el Teorema de Completitud Semántica de Gödel para la lógica de primer orden (1929)?",
     ["Una fórmula de primer orden es formalmente demostrable por deducción si y solo si es lógicamente válida en todas las estructuras e interpretaciones posibles (⊢ φ ⇔ ⊨ φ)", "Que la lógica de primer orden es inconsistente", "Que existen fórmulas válidas sin modelo semántico", "Que todos los números reales son racionales"], 0,
     "A diferencia de la incompletitud aritmética de 1931, el cálculo de predicados puro de primer orden es completo: la verdad semántica coincide con la deducibilidad sintáctica.",
     "Teorema de Completitud de Gödel", "Desafiante", "Lógica Matemática Avanzada", "Completitud semántica"),

    ("¿Qué establece el Teorema de Compacidad para la lógica de primer orden?",
     ["Un conjunto infinito de fórmulas tiene un modelo si y solo si todo subconjunto finito de ese conjunto tiene un modelo", "Las fórmulas lógicas ocupan un espacio de memoria finito", "Todos los modelos son finitos", "Las contradicciones son locales"], 0,
     "La compacidad es consecuencia directa de la completitud y es una herramienta fundamental en teoría de modelos para construir modelos no estándar del análisis y la aritmética.",
     "Teorema de Compacidad", "Desafiante", "Lógica Matemática Avanzada", "Teoría de modelos"),

    ("En la teoría de modelos de la lógica de primer orden, el Teorema de Löwenheim-Skolem ascendente y descendente garantiza que:",
     ["Si una teoría de primer orden tiene un modelo infinito, tiene modelos de cualquier cardinalidad infinita mayor o igual", "Solo existen modelos finitos para cualquier teoría", "Todos los modelos infinitos son isomorfos entre sí", "No pueden existir números irracionales en modelos de primer orden"], 0,
     "Esto genera la Paradoja de Skolem: la teoría axiomática de conjuntos ZFC (que prueba que existen conjuntos no numerables) posee ella misma un modelo numerable.",
     "Teorema de Löwenheim-Skolem", "Desafiante", "Lógica Matemática Avanzada", "Teoría de modelos"),

    ("¿En qué consiste la célebre Paradoja de Skolem en los fundamentos de las matemáticas?",
     ["ZFC demuestra la existencia de conjuntos no numerables, sin embargo, por Löwenheim-Skolem, ZFC tiene un modelo numerable en el cual todos sus elementos son contables desde el exterior", "Que los conjuntos no pueden contener números primos", "Que no existen modelos para la aritmética", "Que Cantor cometió un error algebraico"], 0,
     "La noción de no numerabilidad es interna al modelo: el modelo numerable no contiene dentro de sí la biyección que emparejaría el conjunto con los naturales.",
     "Paradoja de Skolem", "Desafiante", "Lógica Matemática Avanzada", "Metamatemática"),

    # 36 a 50: Teoría axiomática de conjuntos, Axioma de Elección y Paradoja de Banach-Tarski
    ("¿Cuál es el enunciado formal del Axioma de Elección (AC) en la teoría de conjuntos ZFC?",
     ["Para cualquier familia de conjuntos no vacíos y disjuntos dos a dos, existe un conjunto que contiene exactamente un elemento de cada conjunto de la familia", "Todo conjunto infinito tiene cardinalidad finita", "Existe un conjunto universal que contiene a todos los conjuntos", "Todos los conjuntos están bien ordenados en el tiempo"], 0,
     "El axioma postula la existencia de una función de elección universal simultánea aun cuando no exista una regla constructiva finita para seleccionarlos.",
     "Axioma de Elección", "Desafiante", "Teoría Axiomática de Conjuntos", "ZFC"),

    ("¿Cuál de los siguientes principios matemáticos fundamentales es lógicamente equivalente al Axioma de Elección dentro de ZF?",
     ["El Lema de Zorn (y el Teorema del Buen Orden de Zermelo)", "El Teorema Fundamental del Álgebra", "El Teorema de Pitágoras", "El Postulado de las Paralelas de Euclides"], 0,
     "Zermelo demostró que AC es equivalente a que todo conjunto puede ser bien ordenado, y Kuratowski/Zorn demostraron su equivalencia con la existencia de elementos maximales.",
     "Equivalentes del Axioma de Elección", "Desafiante", "Teoría Axiomática de Conjuntos", "Lema de Zorn"),

    ("¿Qué afirma la Paradoja geométrica de Banach-Tarski (1924) demostrada a partir del Axioma de Elección?",
     ["Una esfera sólida tridimensional puede descomponerse en un número finito de piezas disjuntas no medibles que, recomponiéndose solo con giros y traslaciones, forman dos esferas sólidas del mismo volumen que la original", "Que el volumen de un cono es igual al de una esfera", "Que los círculos pueden cuadrarse con regla y compás", "Que el espacio euclidiano no tiene 3 dimensiones"], 0,
     "La paradoja desafía la intuición física demostrando la existencia de conjuntos no medibles en el sentido de Lebesgue en ℝ³ gracias a la naturaleza no constructiva de AC.",
     "Paradoja de Banach-Tarski", "Desafiante", "Teoría de la Medida", "Conjuntos no medibles"),

    ("¿Por qué la construcción de la Paradoja de Banach-Tarski no es posible en el plano euclidiano ℝ²?",
     ["Porque el grupo de isometrías directas del plano SO(2) ⋉ ℝ² es soluble y admite una medida finitamente aditiva invariante, a diferencia del grupo libre generado en SO(3)", "Porque los círculos no tienen grosor físico", "Porque en 2D no se aplica el Axioma de Elección", "Porque el plano carece de giros continuos"], 0,
     "En ℝ³ el grupo de rotaciones contiene el grupo libre de dos generadores F₂, lo que permite la partición paradójica que en ℝ¹ y ℝ² está impedida topológicamente.",
     "Fundamentos de Banach-Tarski", "Desafiante", "Teoría de la Medida", "Teoría geométrica de grupos"),

    ("En la teoría de la medida de Lebesgue, ¿qué es un Conjunto de Vitali?",
     ["Un subconjunto del intervalo real [0, 1] que no puede ser medido por la medida de Lebesgue ordinaria (es no medible)", "Un conjunto infinito numerable", "Un conjunto abierto y cerrado simultáneamente", "Un fractal de dimensión Hausdorff 1.5"], 0,
     "Giuseppe Vitali utilizó el Axioma de Elección para seleccionar un representante de cada clase de equivalencia de ℝ/ℚ en [0,1], demostrando que no toda parte de ℝ es medible.",
     "Conjuntos no medibles", "Desafiante", "Teoría de la Medida", "Conjunto de Vitali"),

    ("¿Qué demostró Paul Cohen en 1963 mediante el método del 'Forcing' respecto a la Hipótesis del Continuo (CH)?",
     ["Demostró que la Hipótesis del Continuo es independiente de los axiomas de ZFC (no puede ser demostrada ni refutada a partir de ZFC)", "Probó que CH es falsa en todos los modelos", "Demostró que CH es deducible de Peano", "Probó que 2^(ℵ₀) = ℵ₁ es un axioma obligatorio"], 0,
     "Gödel probó en 1940 que CH era consistente con ZFC (usando el universo construible L), y Cohen probó la consistencia de ¬CH con ZFC mediante forcing, sellando su independencia.",
     "Método de Forcing de Cohen", "Desafiante", "Teoría Axiomática de Conjuntos", "Independencia de CH"),

    ("En la jerarquía de números transfinitos, ¿qué representa el número cardinal ℵ₁ (Aleph uno)?",
     ["El menor número cardinal estrictamente mayor que el cardinal de los números naturales ℵ₀", "El cardinal del conjunto continuo ℝ necesariamente", "El número de átomos del universo observable", "El primer número ordinal límite"], 0,
     "Por definición axiomática, ℵ₁ es el siguiente cardinal infinito tras ℵ₀. La Hipótesis del Continuo afirma que 2^(ℵ₀) = ℵ₁.",
     "Aritmética transfinita", "Desafiante", "Teoría Axiomática de Conjuntos", "Cardinales transfinitos"),

    ("¿Cuál es la diferencia conceptual entre un número ordinal y un número cardinal según la teoría de conjuntos de von Neumann?",
     ["Un ordinal mide el tipo de orden bien fundamentado de un conjunto ordenado; un cardinal mide el tamaño o cantidad pura de elementos prescindiendo del orden", "Los ordinales son siempre finitos y los cardinales infinitos", "No existe diferencia: son sinónimos", "Los cardinales solo miden números primos"], 0,
     "Por ejemplo, los conjuntos {1, 2, 3, ...} y {1, 2, 3, ..., ω} tienen el mismo cardinal ℵ₀, pero tipos de orden ordinales distintos (ω vs ω + 1).",
     "Ordinales y cardinales", "Desafiante", "Teoría Axiomática de Conjuntos", "Fundamentos de von Neumann"),

    ("En la teoría de conjuntos ZF, ¿qué garantiza el Axioma de Reemplazo introducido por Fraenkel?",
     ["Que la imagen de cualquier conjunto bajo una función definible es también un conjunto", "Que se pueden reemplazar elementos duplicados", "Que los números enteros pueden sustituirse por letras", "Que las variables mudas se eliminan"], 0,
     "El axioma de reemplazo es necesario para construir ordinales de gran tamaño más allá de ω + ω y formalizar la inducción transfinita.",
     "Axioma de reemplazo", "Desafiante", "Teoría Axiomática de Conjuntos", "Axiomas de Fraenkel"),

    ("El Teorema de Tarski sobre la indefinibilidad de la verdad afirma formalmente que:",
     ["El predicado semántico de 'verdad' de un lenguaje formal aritmético suficientemente rico no puede ser definido dentro del propio lenguaje", "Todas las verdades matemáticas son empíricamente falsas", "Los diccionarios no tienen significado", "No existen proposiciones verdaderas en lógica"], 0,
     "Tarski probó que si un lenguaje pudiese definir su propio predicado de verdad Verdadero(x), se generaría de inmediato la paradoja del mentiroso formalizada.",
     "Teorema de indefinibilidad de Tarski", "Desafiante", "Lógica Matemática Avanzada", "Semántica formal"),

    ("¿Qué es una ultrafiltro sobre un álgebra de Boole o un conjunto según la topología y teoría de modelos?",
     ["Un filtro maximal que no está contenido en ningún otro filtro propio, y que para cada subconjunto A contiene a A o a su complemento", "Un circuito integrado con disipador criogénico", "Un algoritmo de búsqueda en grafos infinitos", "Una base ortonormal en espacios de Hilbert"], 0,
     "Los ultrafiltros permiten construir ultraproductos en teoría de modelos para probar el teorema de compacidad y crear análisis no estándar con hiperreales.",
     "Ultrafiltros y ultraproductos", "Desafiante", "Álgebra Lineal Abstracta", "Teoría de modelos"),

    ("¿Cómo define Abraham Robinson los números hiperreales en el 'Análisis No Estándar' (1966)?",
     ["Una extensión formal rigurosa del cuerpo de los números reales que incorpora infinitesimales reales y números infinitamente grandes mediante ultraproductos", "Aproximaciones decimales con error aleatorio", "Números complejos de parte real nula", "Matrices diagonales infinitas no acotadas"], 0,
     "Robinson dotó de estricto rigor lógico a los infinitesimales dx de Leibniz utilizando la lógica de primer orden y el Teorema de Transferencia.",
     "Análisis No Estándar", "Desafiante", "Análisis Real", "Infinitesimales de Robinson"),

    ("En el Teorema de Transferencia del análisis no estándar, ¿qué se garantiza para las sentencias de primer orden?",
     ["Cualquier enunciado de primer orden formulado en el lenguaje de los reales es verdadero en ℝ si y solo si es verdadero en el cuerpo de los hiperreales *ℝ", "Que las derivadas ordinarias son iguales a cero", "Que los hiperreales no cumplen el axioma de cuerpo conmutativo", "Que la geometría deja de ser euclidiana"], 0,
     "El principio de transferencia traslada automáticamente todas las propiedades algebraicas clásicas entre el universo estándar y el no estándar.",
     "Principio de transferencia", "Desafiante", "Lógica Matemática Avanzada", "Hiperreales"),

    ("¿Qué establece el Lema de Zorn en relación con los conjuntos parcialmente ordenados inductivos?",
     ["Todo conjunto parcialmente ordenado no vacío en el cual cada cadena (subconjunto totalmente ordenado) posee una cota superior contiene al menos un elemento maximal", "Todo orden parcial tiene un mínimo absoluto", "Las cadenas infinitas no tienen fin", "El orden estricto siempre es numerable"], 0,
     "El lema de Zorn es la herramienta estándar en álgebra abstracta para probar la existencia de bases de Hamel en espacios vectoriales arbitrarios y de ideales maximales.",
     "Lema de Zorn", "Desafiante", "Álgebra Lineal Abstracta", "Órdenes parciales"),

    ("¿Por qué la existencia de una base lineal (Base de Hamel) para cualquier espacio vectorial de dimensión infinita depende del Axioma de Elección?",
     ["Porque la demostración de la existencia de un subconjunto maximal linealmente independiente requiere invocar el Lema de Zorn", "Porque las matrices de dimensión infinita son no conmutativas", "Porque no se pueden multiplicar vectores infinitos", "Porque los espacios de Banach son siempre compactos"], 0,
     "Sin el axioma de elección, existen modelos de ZF donde el espacio vectorial ℝ sobre el cuerpo ℚ carece de base de Hamel.",
     "Bases de Hamel", "Desafiante", "Álgebra Lineal Abstracta", "Espacios vectoriales"),

    # 51 a 65: Teoría de juegos, decisión racional y equilibrios
    ("En teoría de juegos no cooperativos, ¿cómo se define formalmente un 'Equilibrio de Nash'?",
     ["Un perfil de estrategias en el que ningún jugador tiene incentivos para desviar unilateralmente su propia estrategia, dado que las de los demás permanecen fijas", "Una situación donde todos los participantes obtienen la máxima ganancia posible conjunta", "El momento en que un jugador abandona la partida", "Un acuerdo formal vinculante firmado ante un árbitro"], 0,
     "John Nash demostró en 1950 que todo juego finito de n jugadores con estrategias mixtas posee al menos un punto de equilibrio estable frente a desviaciones unilaterales.",
     "Equilibrio de Nash", "Desafiante", "Microeconomía y Teoría de Juegos", "Estrategias de equilibrio"),

    ("¿Qué característica define la paradoja social en el 'Dilema del Prisionero' con jugada simultánea única?",
     ["La estrategia estrictamente dominante para cada jugador individual (traicionar/confesar) conduce a un equilibrio de Nash que es Pareto-ineficiente respecto a la cooperación mutua", "Los jugadores cooperan siempre por altruismo natural", "El juez libera a ambos prisioneros por falta de pruebas", "No existe ninguna estrategia dominante"], 0,
     "La racionalidad individual pura genera un resultado global subóptimo donde ambos sufren penas más altas que si hubieran cooperado.",
     "Dilema del Prisionero", "Desafiante", "Microeconomía y Teoría de Juegos", "Eficiencia de Pareto"),

    ("En un juego repetido indefinidamente del Dilema del Prisionero con factor de descuento temporal, ¿qué estrategia simple demostró ser extraordinariamente robusta en los torneos computacionales de Robert Axelrod?",
     ["Tit-for-Tat (Don por Don): cooperar en la primera ronda y en las rondas sucesivas replicar exactamente la jugada previa del oponente", "Traicionar siempre en todas las rondas", "Jugar al azar al 50%", "Cooperar siempre sin importar lo que haga el adversario"], 0,
     "Tit-for-Tat es transparente, amable (nunca inicia la traición), retaliatoria (castiga la agresión inmediata) y perdonadora (vuelve a cooperar si el otro lo hace).",
     "Estrategias evolutivas", "Desafiante", "Microeconomía y Teoría de Juegos", "Torneos de Axelrod"),

    ("¿Qué postula el Teorema Minimax de John von Neumann (1928) para juegos de suma cero entre dos personas con estrategias mixtas?",
     ["El valor máximo que un jugador puede asegurarse minimizando sus pérdidas coincide exactamente con el valor mínimo que el oponente puede forzarle (Maximin = Minimax)", "Que la suma total de las ganancias siempre es estrictamente positiva", "Que no existen equilibrios en juegos continuos", "Que el jugador que mueve primero siempre gana"], 0,
     "El teorema minimax resolvió completamente la teoría matemática de los juegos de suma cero en conflicto puro mediante programación lineal y convexidad.",
     "Teorema Minimax de von Neumann", "Desafiante", "Investigación de Operaciones", "Juegos de suma cero"),

    ("¿Qué es un 'Equilibrio de Nash Perfecto en Subjuegos' (SPE) formulado por Reinhard Selten?",
     ["Un refinamiento del equilibrio de Nash que elimina las amenazas no creíbles exigiendo que las estrategias constituyan un equilibrio de Nash en cada subjuego del árbol extensivo", "Un juego que no contiene bifurcaciones", "Un equilibrio que solo aplica a juegos de azar", "Una estrategia que maximiza la varianza de los pagos"], 0,
     "El método de inducción hacia atrás (backward induction) permite identificar los equilibrios perfectos en subjuegos descartando faroles que ningún jugador racional ejecutaría si llegara el turno.",
     "Perfección en subjuegos", "Desafiante", "Microeconomía y Teoría de Juegos", "Juegos dinámicos"),

    ("En la paradoja de la decisión conocida como el 'Problema de Newcomb', ¿cuál es el dilema irreconciliable que confronta?",
     ["El conflicto irreductible entre el Principio de Dominancia estricta (tomar las dos cajas) y el Principio de la Máxima Utilidad Esperada (tomar solo una caja) ante un predictor casi infalible", "El cálculo de la velocidad de un proyectil balístico", "La decisión de invertir en bonos o acciones", "El dilema ético del tranvía sin frenos"], 0,
     "Robert Nozick analizó cómo Newcomb divide a los lógicos: quienes eligen dos cajas por dominancia y quienes eligen una por inferencia predictiva bayesiana.",
     "Paradoja de Newcomb", "Desafiante", "Epistemología y Pensamiento Crítico", "Teoría de la decisión racional"),

    ("¿Qué describe la Paradoja de San Petersburgo formulada por Daniel Bernoulli en 1738?",
     ["Un juego de lanzamiento de moneda cuyo valor esperado monetario matemático es infinito, pero por el cual ninguna persona racional pagaría más de unas pocas monedas por participar", "Un método para ganar siempre en las cartas", "La quiebra inevitable del banco central ruso", "La imposibilidad de calcular probabilidades en Rusia"], 0,
     "Bernoulli demostró que la toma de decisiones no maximiza el valor monetario esperado lineal E(X), sino la 'utilidad esperada' con aversión al riesgo y utilidad marginal decreciente u(w) = ln(w).",
     "Paradoja de San Petersburgo", "Desafiante", "Microeconomía y Teoría de Juegos", "Teoría de la utilidad esperada"),

    ("En la teoría de la elección social, ¿qué demuestra el Teorema de Imposibilidad de Arrow (1951)?",
     ["No existe ningún sistema de votación ordinal para tres o más alternativas que satisfaga simultáneamente los principios democráticos elementales de no dictadura, unanimidad e independencia de alternativas irrelevantes", "Que todas las elecciones presidenciales son fraudulentas", "Que la mayoría simple siempre es matemáticamente perfecta", "Que no se pueden realizar referéndums populares"], 0,
     "Kenneth Arrow probó axiomáticamente que agregar preferencias individuales coherentes en una función de bienestar social racional sin violar axiomas razonables es imposible.",
     "Teorema de Imposibilidad de Arrow", "Desafiante", "Microeconomía y Teoría de Juegos", "Teoría de la elección social"),

    ("¿Qué es la Paradoja de Condorcet en sistemas electorales mayoritarios?",
     ["Las preferencias colectivas pueden ser cíclicas e intransitivas (la mayoría prefiere A sobre B, B sobre C, pero también C sobre A), aun cuando las preferencias individuales sean perfectamente transitivas", "El candidato más votado siempre renuncia", "El empate exacto en todas las urnas", "La abstención total del electorado"], 0,
     "El marqués de Condorcet evidenció que la regla de la mayoría simple puede arrojar ciclos circulares sin un ganador indiscutible.",
     "Paradoja de Condorcet", "Desafiante", "Lógica Matemática", "Sistemas de votación"),

    ("En un juego de señalización en economía de la información (Michael Spence), ¿por qué un título universitario puede funcionar como una señal creíble en el mercado laboral?",
     ["Porque el costo de obtener el título es asimétrico y estrictamente más costoso (en tiempo o esfuerzo cognitivo) para los candidatos de baja productividad que para los de alta productividad", "Porque todas las carreras universitarias enseñan exactamente lo mismo que se hace en la empresa", "Porque los diplomas tienen sellos de agua difíciles de falsificar", "Porque las universidades pagan seguros de empleo"], 0,
     "Para que una señal sea efectiva y separe equilibrios (separating equilibrium), debe satisfacer la condición de 'cruce único' (single-crossing condition) donde fingirla no sea rentable.",
     "Teoría de la señalización", "Desafiante", "Microeconomía y Teoría de Juegos", "Asimetría de información"),

    ("¿En qué consiste el 'Peligro Moral' (Moral Hazard) originado por la asimetría de información postcontractual?",
     ["El cambio en el comportamiento de un agente que adopta mayores riesgos o negligencia al saberse protegido por un seguro que cubre sus consecuencias financieras", "La firma de un contrato con cláusulas ilegales", "La falta de principios éticos del comprador", "La ruina del mercado por venta de productos de mala calidad"], 0,
     "A diferencia de la selección adversa (precontractual), el riesgo moral surge tras el pacto cuando la conducta del asegurado no es directamente observable por el principal.",
     "Riesgo moral", "Desafiante", "Microeconomía y Teoría de Juegos", "Economía de la información"),

    ("¿Qué fenómeno económico describe la 'Selección Adversa' analizada por George Akerlof en su modelo del mercado de limones (The Market for Lemons, 1970)?",
     ["La información asimétrica sobre la calidad intrínseca oculta de los autos usados hace que los precios promedio expulsen del mercado a los vehículos de buena calidad dejando solo los defectuosos", "La importación excesiva de cítricos en la economía", "La elección deliberada de los peores candidatos", "El colapso de las fábricas de ensamblaje"], 0,
     "Los compradores, desconfiando del estado de los vehículos, solo ofrecen el precio medio de un vehículo malo, desincentivando la venta de unidades óptimas hasta que el mercado colapsa.",
     "Selección adversa de Akerlof", "Desafiante", "Microeconomía y Teoría de Juegos", "Asimetría de información"),

    ("En teoría de subastas, ¿qué propiedad notable posee la 'Subasta de Vickrey' (subasta de segundo precio en sobre cerrado)?",
     ["Pujar exactamente la verdadera valoración privada que el postor tiene del bien es una estrategia débilmente dominante", "El ganador paga el doble de lo que ofreció", "Los postores deben coludirse en secreto", "La casa de subastas se queda con los depósitos de todos los participantes"], 0,
     "William Vickrey demostró que el participante no gana nada mintiendo: pagar el segundo precio más alto desacopla la puja de la cantidad finalmente abonada, incentivando la veracidad.",
     "Subasta de segundo precio de Vickrey", "Desafiante", "Microeconomía y Teoría de Juegos", "Diseño de mecanismos"),

    ("El Teorema de Equivalencia del Ingreso de Myerson y Riley en diseño de mecanismos demuestra que:",
     ["Bajo supuestos estándar de postores neutrales al riesgo con valoraciones independientes, todas las subastas comunes (inglesa, holandesa, primer precio y segundo precio) generan el mismo ingreso esperado para el vendedor", "Las subastas holandesas siempre recaudan más que las inglesas", "El vendedor siempre pierde dinero en subastas", "Las subastas en sobre cerrado son ilegales"], 0,
     "El teorema es un pilar de la teoría de subastas que demuestra la invarianza del rendimiento financiero esperado del subastador frente al formato formal elegido.",
     "Equivalencia de ingresos", "Desafiante", "Microeconomía y Teoría de Juegos", "Teoría de subastas"),

    ("En la tragedia de los bienes comunes (Garrett Hardin), ¿cuál es la causa subyacente del agotamiento del recurso compartido?",
     ["La no exclusión en el acceso unida a la rivalidad en el consumo incentiva la sobreexplotación individual de una propiedad común de acceso abierto", "La falta de tecnología de extracción", "El bajo precio del recurso en los mercados internacionales", "La regulación excesiva de los gobiernos"], 0,
     "Cada pastor o pescador recibe el beneficio privado íntegro de añadir un animal o red más (+1), mientras que el costo ecológico de la degradación se reparte entre toda la comunidad.",
     "Tragedia de los comunes", "Desafiante", "Teoría Social", "Bienes comunes"),

    # 66 a 80: Teoría de la información, lógica modal y causalidad
    ("¿Cómo definió Claude Shannon la Entropía H(X) de una fuente de información discreta en su histórica 'Teoría Matemática de la Comunicación' (1948)?",
     ["H(X) = - ∑ p(x) · log₂ p(x), midiendo la incertidumbre media intrínseca o cantidad promedio de información por símbolo en bits", "H(X) = ∑ p(x) / N", "H(X) = log₂ (1 / N)", "H(X) = Área bajo la curva de frecuencias"], 0,
     "La entropía de Shannon cuantifica la compresión máxima teórica sin pérdidas y la tasa mínima requerida de bits para codificar un mensaje.",
     "Entropía de la información", "Desafiante", "Cibernética y Comunicaciones", "Claude Shannon"),

    ("¿Qué establece el Teorema de Shannon-Hartley respecto a la capacidad de canal C (en bits por segundo) de un canal con ruido aditivo blanco gaussiano?",
     ["C = B · log₂(1 + SNR), donde B es el ancho de banda en Hertz y SNR es la relación señal-a-ruido", "C = B / SNR", "C = 2 · B · SNR", "C = log₂(B) + log₂(SNR)"], 0,
     "Fórmula fundamental de las telecomunicaciones que define el límite superior teórico de velocidad de transmisión de datos sin error a través de un medio ruidoso.",
     "Teorema de Shannon-Hartley", "Desafiante", "Cibernética y Comunicaciones", "Capacidad de canal"),

    ("En semántica de mundos posibles para lógica modal proposicional desarrollada por Saul Kripke, ¿qué significa que una proposición sea 'necesaria' (representada por el operador □p)?",
     ["□p es verdadera en un mundo w si y solo si p es verdadera en todos los mundos posibles w' accesibles desde el mundo w mediante la relación de accesibilidad R", "□p es verdadera si se comprueba empíricamente en un laboratorio", "□p significa que p fue demostrada en latín clásico", "□p es verdadera si p es un número primo"], 0,
     "Kripke formalizó la necesidad ontológica y epistémica mediante marcos relacionales (W, R), donde □ actúa como un cuantificador universal sobre mundos accesibles.",
     "Semántica de Kripke", "Desafiante", "Lógica Matemática Avanzada", "Lógica modal"),

    ("¿Qué axioma modal formal distingue al sistema S4 en la jerarquía modal de Kripke al imponer la transitividad de la relación de accesibilidad?",
     ["Axioma 4: □p → □□p (Si algo es necesario, es necesariamente necesario)", "Axioma T: □p → p", "Axioma 5: ◊p → □◊p", "Axioma K: □(p → q) → (□p → □q)"], 0,
     "El sistema S4 añade la transitividad de R, garantizando que la necesidad de un enunciado se propague reflexiva y transitivamente a los horizontes de mundos sucesivos.",
     "Sistemas modales S4", "Desafiante", "Lógica Matemática Avanzada", "Axiomas modales"),

    ("En lógica epistémica (la lógica del conocimiento y la creencia), ¿qué postula la 'cláusula de veracidad' o axioma del conocimiento K_i φ → φ?",
     ["Si un agente sabe o conoce formalmente que la proposición φ es el caso, entonces φ es necesariamente verdadera (no se puede saber algo que es objetivamente falso)", "El conocimiento no requiere pruebas lógicas", "Creer equivale rigurosamente a saber en todos los casos", "Todo lo que se cree se convierte en ley física"], 0,
     "A diferencia de la creencia (doxástica), que admite errores, el conocimiento genuino presupone la verdad objetiva de lo sabido (conocimiento fáctico).",
     "Lógica epistémica", "Desafiante", "Filosofía del Lenguaje", "Axiomas epistémicos"),

    ("En el análisis de redes causales y modelos de ecuaciones estructurales de Judea Pearl, ¿qué operador matemático distingue la 'intervención activa deliberada' de la 'mera observación pasiva'?",
     ["El operador do(X = x), que modela la manipulación experimental modificando la estructura del grafo causal eliminando las aristas entrantes hacia X", "El operador gradiente nabla ∇", "La transformada inversa de Laplace", "La derivada parcial ordinaria ∂/∂x"], 0,
     "Pearl demostró que la probabilidad observacional P(Y | X) confunde causalidad con correlación espuria, mientras que P(Y | do(X)) cuantifica la causa real al mutilar las flechas de confusión.",
     "Inferencia causal de Judea Pearl", "Desafiante", "Aprendizaje Automático", "Causalidad y do-calculus"),

    ("¿Qué criterio geométrico sobre grafos acíclicos dirigidos (DAGs) formuló Pearl para verificar si dos variables están condicionalmente independientes dado un conjunto de variables de control Z?",
     ["Criterio de d-separación (separación direccional)", "El algoritmo de Dijkstra de camino mínimo", "El Teorema de los Cuatro Colores", "La triangulación de Delaunay"], 0,
     "La d-separación analiza el flujo de información probabilística a través de cadenas, bifurcaciones y colisionadores (v-structures) en el grafo de causas.",
     "D-separación en grafos causales", "Desafiante", "Aprendizaje Automático", "Redes bayesianas"),

    ("En la paradoja de los colisionadores o sesgo de Berkson (collider bias), ¿qué ocurre cuando se condiciona estadísticamente sobre una variable que es efecto común de dos causas independientes?",
     ["Se induce espuriamente una correlación o asociación condicional artificial entre dos variables que en la población general eran mutuamente independientes", "Las dos causas se vuelven idénticas", "El error experimental se reduce a cero", "Se duplica el tamaño muestral del estudio"], 0,
     "Abrir el camino a través de un nodo colisionador X → C ← Y al controlar por C crea dependencia estadística falaz entre X e Y.",
     "Sesgo de selección de Berkson", "Desafiante", "Estadística Matemática", "Sesgo de colisionador"),

    ("En la formulación de la física cuántica, ¿qué demostró John Stewart Bell en su célebre Teorema de Bell (1964)?",
     ["Que ninguna teoría física basada en variables ocultas locales puede reproducir simultáneamente todas las correlaciones cuánticas predichas por el entrelazamiento cuántico", "Que la mecánica cuántica no necesita matemáticas complejas", "Que Einstein demostró la imposibilidad del entrelazamiento", "Que la velocidad de la luz en el vacío es variable"], 0,
     "La violación empírica de las desigualdades de Bell en experimentos (Aspect, Clauser, Zeilinger) probó que la naturaleza o es no local o no es realista en el sentido clásico.",
     "Teorema y desigualdades de Bell", "Desafiante", "Física Cuántica", "Entrelazamiento cuántico"),

    ("¿Qué experimento mental propuso John Searle con 'El Cuarto Chino' (The Chinese Room, 1980) para rebatir el optimismo de la Inteligencia Artificial Fuerte?",
     ["Un humano que manipula mecánicamente caracteres chinos según reglas sintácticas escritas en un manual no comprende realmente el idioma chino, demostrando que la mera manipulación de símbolos sintácticos no produce comprensión semántica intrínseca", "Que los ordenadores son capaces de sentir dolor físico", "Que el idioma chino carece de gramática formal", "Que no se pueden construir redes neuronales artificiales"], 0,
     "Searle demostró el abismo cualitativo entre computación sintáctica (programas formales) y comprensión semántica intencional consciente.",
     "Cuarto Chino de Searle", "Desafiante", "Ciencias de la Computación Teórica", "Filosofía de la mente"),

    ("¿Qué problema epistemológico formuló Nelson Goodman con su nueva paradoja de la inducción y el predicado 'verdul' (grue)?",
     ["Un objeto es 'verdul' si es verde antes del año 2050 y azul después; todas las esmeraldas observadas hasta hoy confirman tanto la hipótesis 'todas las esmeraldas son verdes' como 'todas las esmeraldas son verdules', evidenciando que la inducción formal requiere criterios no sintácticos para distinguir predicados proyectables", "Que los colores primarios no existen en la retina humana", "Que las piedras preciosas cambian de composición atómica con el tiempo", "Que la física óptica es inconsistente con la química mineral"], 0,
     "Goodman demostró que la mera forma sintáctica de las premisas observacionales no basta para justificar racionalmente qué regularidades son proyectables hacia el futuro.",
     "Paradoja de Goodman", "Desafiante", "Epistemología Científica", "Nueva paradoja de la inducción"),

    ("En la Paradoja de los Dos Sobres, se ofrecen dos sobres idénticos con sumas de dinero desconocidas, donde uno contiene el doble que el otro. Si abres un sobre y encuentras X, ¿cuál es el cálculo falaz que parece sugerir que siempre conviene cambiar de sobre?",
     ["Calcular el valor esperado del otro sobre como E = 0.5(2X) + 0.5(X/2) = 1.25X > X, asumiendo erróneamente una distribución a priori uniforme impropia sobre un dominio infinito", "Creer que el dinero se multiplica al cambiarlo de mano", "Suponer que los billetes pierden valor por inflación", "Olvidar restar los impuestos a las ganancias"], 0,
     "La falacia radica en asignar probabilidades simétricas a priori de 0.5 a X/2 y 2X condicionadas sobre X sin una distribución de probabilidad previa matemáticamente válida e integrable en [0, ∞).",
     "Paradoja de los dos sobres", "Desafiante", "Epistemología y Pensamiento Crítico", "Probabilidad y paradojas"),

    ("¿Qué teorema formal de la termodinámica estadística y la física matemática demostró Henri Poincaré sobre los sistemas dinámicos conservativos cerrados (Teorema de Recurrencia de Poincaré)?",
     ["Cualquier estado inicial de un sistema dinámico clásico con volumen de espacio de fases finito acotado retornará infinitas veces arbitrariamente cerca de su configuración inicial al cabo de un tiempo suficientemente largo", "Que la entropía de un sistema cerrado tiende a cero en 10 años", "Que los planetas colisionarán inevitablemente con el Sol", "Que el movimiento térmico cesa espontáneamente"], 0,
     "La recurrencia de Poincaré confrontó el dilema de la flecha del tiempo y la segunda ley de la termodinámica formulado por Boltzmann y Loschmidt.",
     "Teorema de Recurrencia de Poincaré", "Desafiante", "Física Estadística", "Sistemas dinámicos"),

    ("En geometría diferencial y topología, ¿qué conjetura histórica formulada por Henri Poincaré en 1904 y resuelta por Grigori Perelman en 2003 demostró que toda variedad tridimensional cerrada y simplemente conexa es homeomorfa a la 3-esfera?",
     ["La Conjetura de Poincaré (demostrada mediante el flujo de Ricci con cirugía)", "El Teorema de Clasificación de Superficies de Riemann", "La Hipótesis de Riemann", "La Conjetura de Hodge"], 0,
     "Perelman completó el programa de Richard Hamilton aplicando el flujo de Ricci y teoría geométrica analítica, resolviendo uno de los siete Problemas del Milenio del Instituto Clay.",
     "Conjetura de Poincaré", "Desafiante", "Análisis Matemático y Topología", "Topología diferencial"),

    ("¿Qué es la Paradoja del Mentiroso y por qué motivó la jerarquía de metalenguajes de Alfred Tarski?",
     ["La proposición 'Esta oración es falsa', si es verdadera entonces es falsa, y si es falsa entonces es verdadera; para evitar la inconsistencia, Tarski prohibió la autorreferencia semántica separando el lenguaje objeto del metalenguaje", "Una persona que confiesa un delito ante el tribunal", "Un software que contiene un error de sintaxis", "Un silogismo con tres premisas particulares"], 0,
     "La antinomia semántica del mentiroso muestra la vulnerabilidad inherente de los lenguajes naturales universalmente cerrados y forzó el rigor de la semántica metalingüística contemporánea.",
     "Paradoja del mentiroso", "Desafiante", "Lógica Matemática Avanzada", "Metalenguajes de Tarski")
]
