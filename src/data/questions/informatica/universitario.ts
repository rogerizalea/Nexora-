import { Question } from '../../../types';

export const INFORMATICA_UNIVERSITARIO: Question[] = [
  {
    "id": "inf-uni-01",
    "number": 81,
    "text": "En teoría de autómatas y lenguajes formales, ¿qué clase de autómata reconoce exactamente los lenguajes libres de contexto según la jerarquía de Chomsky?",
    "options": [
      "Autómata finito determinista (DFA)",
      "Autómata a pila (Pushdown Automaton)",
      "Máquina de Turing determinista sin restricciones",
      "Circuito combinacional sin memoria"
    ],
    "correctIndex": 1,
    "explanation": "Los autómatas a pila (PDA), al incorporar una estructura de memoria auxiliar tipo pila (LIFO), reconocen exactamente los lenguajes generados por gramáticas libres de contexto (Tipo 2).",
    "skill": "Teoría de la Computación",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Autómatas y Lenguajes Formales",
    "subtopic": "Autómatas a Pila"
  },
  {
    "id": "inf-uni-02",
    "number": 82,
    "text": "¿Cuál es la propiedad fundamental del problema de parada (Halting Problem) demostrado por Alan Turing en 1936?",
    "options": [
      "Es un problema resoluble en tiempo polinomial O(n³)",
      "Es indecidible: no existe ningún algoritmo general que pueda determinar si cualquier programa arbitrario terminará o correrá para siempre",
      "Es trivialmente resoluble mediante compiladores optimizados",
      "Demuestra que toda máquina de Turing puede ser emulada por un autómata finito"
    ],
    "correctIndex": 1,
    "explanation": "Turing demostró por reducción al absurdo y diagonalización que no existe ningún algoritmo que determine la parada para cualquier par (programa, entrada), marcando los límites computacionales de la lógica formal.",
    "skill": "Decidibilidad y Computabilidad",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Límites de la Computación",
    "subtopic": "El Problema de la Parada"
  },
  {
    "id": "inf-uni-03",
    "number": 83,
    "text": "En diseño de bases de datos relacionales, ¿qué garantiza la propiedad ACID de \"Aislamiento\" (Isolation)?",
    "options": [
      "Que las transacciones ejecutadas concurrentemente produzcan el mismo estado que si se hubiesen ejecutado secuencialmente, sin interferencias ni lecturas sucias",
      "Que los datos se almacenen en discos mecánicos aislados físicamente",
      "Que las transacciones nunca puedan revertirse con ROLLBACK",
      "Que el servidor funcione sin conexión a la red"
    ],
    "correctIndex": 0,
    "explanation": "El aislamiento en ACID previene anomalías como lecturas sucias (dirty reads), lecturas no repetibles y lecturas fantasma a través de niveles de aislamiento (Read Committed, Serializable).",
    "skill": "Sistemas de Bases de Datos",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Transacciones y ACID",
    "subtopic": "Propiedad de Aislamiento"
  },
  {
    "id": "inf-uni-04",
    "number": 84,
    "text": "En diseño de sistemas distribuidos, ¿qué afirma el Teorema CAP (Teorema de Brewer)?",
    "options": [
      "Que todo sistema distribuido puede garantizar simultáneamente Consistencia, Disponibilidad y Tolerancia a particiones sin compromisos",
      "Que en presencia de una partición de red (P), un sistema distribuido debe elegir forzosamente entre Consistencia (C) o Disponibilidad (A)",
      "Que la capacidad del procesador se duplica cada 18 meses",
      "Que el cifrado asimétrico es inviable en redes de alta velocidad"
    ],
    "correctIndex": 1,
    "explanation": "El teorema CAP demuestra que cuando la red sufre particiones o pérdida de mensajes (P), el sistema debe decidir entre rechazar peticiones para garantizar consistencia estricta (CP) o responder con datos potencialmente desactualizados para mantener disponibilidad (AP).",
    "skill": "Sistemas Distribuidos",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Consistencia y Escalabilidad",
    "subtopic": "Teorema CAP"
  },
  {
    "id": "inf-uni-05",
    "number": 85,
    "text": "¿Qué estructura de datos probabilística eficiente en espacio permite comprobar si un elemento pertenece a un conjunto, garantizando cero falsos negativos aunque admitiendo una tasa configurable de falsos positivos?",
    "options": [
      "Filtro de Bloom (Bloom Filter)",
      "Árbol Rojo-Negro",
      "Tabla Hash con encadenamiento cerrado",
      "Montículo Binario (Binary Heap)"
    ],
    "correctIndex": 0,
    "explanation": "El filtro de Bloom emplea un arreglo de bits y múltiples funciones hash para consultas de pertenencia en O(k) tiempo y consumo mínimo de RAM; si indica que no está, con 100% de certeza no está.",
    "skill": "Estructuras de Datos Avanzadas",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Algoritmos Probabilísticos",
    "subtopic": "Filtros de Bloom"
  },
  {
    "id": "inf-uni-06",
    "number": 86,
    "text": "¿Qué algoritmo clásico resuelve el problema del camino más corto desde un único origen en grafos dirigidos con pesos de arista que pueden ser negativos, detectando además ciclos de peso negativo?",
    "options": [
      "Algoritmo de Dijkstra",
      "Algoritmo de Bellman-Ford",
      "Algoritmo de Prim",
      "Búsqueda en Amplitud (BFS)"
    ],
    "correctIndex": 1,
    "explanation": "Bellman-Ford itera relajanado las aristas |V|-1 veces con complejidad O(|V|·|E|); una iteración adicional detecta si existe un ciclo negativo inalcanzable por Dijkstra.",
    "skill": "Algoritmia Avanzada",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Teoría de Grafos",
    "subtopic": "Algoritmo Bellman-Ford"
  },
  {
    "id": "inf-uni-07",
    "number": 87,
    "text": "¿Cuál es el propósito del mecanismo de \"Paginación en dos o múltiples niveles\" y la tabla TLB (Translation Lookaside Buffer) en la gestión de memoria de un sistema operativo moderno?",
    "options": [
      "Aumentar el consumo de batería de la CPU",
      "Traducir direcciones virtuales a físicas eficientemente sin desperdiciar megabytes de memoria física en tablas de páginas vacías",
      "Formatear unidades SSD automáticamente",
      "Desactivar la caché L2"
    ],
    "correctIndex": 1,
    "explanation": "Las tablas multinivel evitan asignar memoria a rangos de direcciones virtuales no utilizados, y la TLB actúa como una caché asociativa ultra-rápida de traducciones de páginas para minimizar penalizaciones en la MMU.",
    "skill": "Sistemas Operativos Avanzados",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Gestión de Memoria Virtual",
    "subtopic": "Paginación Multinivel y TLB"
  },
  {
    "id": "inf-uni-08",
    "number": 88,
    "text": "En compiladores, ¿cuál es la función de la fase de \"Análisis Sintáctico\" (Parsing)?",
    "options": [
      "Convertir caracteres individuales en tokens léxicos",
      "Construir el Árbol de Sintaxis Abstracta (AST) verificando que la secuencia de tokens cumpla con la gramática libre de contexto del lenguaje",
      "Generar directamente el código binario para la arquitectura x86",
      "Optimizar el consumo térmico del procesador"
    ],
    "correctIndex": 1,
    "explanation": "El parser toma la corriente de tokens generada por el lexer y, guiado por una gramática formal (LL, LR, LALR), valida la estructura jerárquica del programa generando el AST.",
    "skill": "Construcción de Compiladores",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Fases del Compilador",
    "subtopic": "Análisis Sintáctico y AST"
  },
  {
    "id": "inf-uni-09",
    "number": 89,
    "text": "¿Qué problema fundamental de la concurrencia ilustra el clásico \"Problema de los Filósofos Comelones\" (Dining Philosophers)?",
    "options": [
      "El cálculo de decimales de Pi",
      "El bloqueo mutuo (Deadlock), inanición (Starvation) y contención de recursos en procesos concurrentes",
      "La compresión sin pérdida de datos en streaming",
      "La calibración de monitores RGB"
    ],
    "correctIndex": 1,
    "explanation": "Propuesto por Edsger Dijkstra, modela la asignación de recursos limitados entre procesos concurrentes y demuestra las condiciones de Coffman que originan deadlocks.",
    "skill": "Sistemas Operativos y Concurrencia",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Problemas Clásicos de Sincronización",
    "subtopic": "Deadlock e Inanición"
  },
  {
    "id": "inf-uni-10",
    "number": 90,
    "text": "En el criptosistema asimétrico RSA, ¿en qué problema matemático de teoría de números radica su seguridad computacional?",
    "options": [
      "En la dificultad de calcular el logaritmo en base 10",
      "En la intratabilidad computacional de factorizar el producto de dos números primos grandes",
      "En la inversión matricial de orden 3x3",
      "En el cálculo de series de Taylor"
    ],
    "correctIndex": 1,
    "explanation": "RSA se basa en que multiplicar dos primos grandes p y q es trivial (O(n²)), pero recuperar p y q a partir de su producto n es computacionalmente inviable con métodos clásicos actuales.",
    "skill": "Criptografía y Seguridad",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Criptografía Asimétrica",
    "subtopic": "Factorización de Primos en RSA"
  },
  {
    "id": "inf-uni-11",
    "number": 91,
    "text": "¿Qué clase de complejidad computacional agrupa a los problemas de decisión que pueden ser resueltos por una máquina de Turing no determinista en tiempo polinomial?",
    "options": [
      "Clase P",
      "Clase NP",
      "Clase EXPTIME",
      "Clase BQP"
    ],
    "correctIndex": 1,
    "explanation": "La clase NP (Nondeterministic Polynomial time) engloba los problemas cuyas soluciones propuestas pueden ser verificadas en tiempo polinomial por una máquina determinista.",
    "skill": "Teoría de la Complejidad",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Clases P vs NP",
    "subtopic": "Definición de NP"
  },
  {
    "id": "inf-uni-12",
    "number": 92,
    "text": "¿Qué algoritmo de consenso distribuido líder, diseñado por Diego Ongaro y John Ousterhout en Stanford, fue concebido específicamente para ser más comprensible e intuitivo que Paxos?",
    "options": [
      "Proof of Work (PoW)",
      "Raft",
      "PBFT (Practical Byzantine Fault Tolerance)",
      "Two-Phase Commit (2PC)"
    ],
    "correctIndex": 1,
    "explanation": "Raft descompone el consenso distribuido en subproblemas ortogonales: elección de líder, replicación de registros (log replication) y seguridad, siendo ampliamente adoptado por etcd y Consul.",
    "skill": "Sistemas Distribuidos",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Consenso y Replicación",
    "subtopic": "Algoritmo Raft vs Paxos"
  },
  {
    "id": "inf-uni-13",
    "number": 93,
    "text": "En arquitectura de procesadores superescalares modernos, ¿cuál es el objetivo del \"Branch Prediction\" (Predicción de Saltos) y la ejecución especulativa?",
    "options": [
      "Evitar que la CPU consuma electricidad en reposo",
      "Predecir qué bifurcación tomará una instrucción condicional para mantener lleno el pipeline de instrucciones sin esperar a la resolución en la ALU",
      "Proteger al microcódigo de ataques de inyección SQL",
      "Controlar el ventilador de la caja"
    ],
    "correctIndex": 1,
    "explanation": "Los pipelines profundos penalizan fuertemente los saltos vacíos; la predicción de saltos especula el flujo de control para cargar instrucciones por adelantado, descartándolas si erró.",
    "skill": "Arquitectura de Computadoras Avanzada",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Pipelines y Microarquitectura",
    "subtopic": "Ejecución Especulativa"
  },
  {
    "id": "inf-uni-14",
    "number": 94,
    "text": "¿Qué método de aprendizaje automático no supervisado reduce la dimensionalidad de un conjunto de datos proyectándolo sobre las direcciones de máxima varianza?",
    "options": [
      "Regresión Logística",
      "Análisis de Componentes Principales (PCA)",
      "K-Nearest Neighbors (KNN)",
      "Random Forest Classifier"
    ],
    "correctIndex": 1,
    "explanation": "PCA calcula los autovectores y autovalores de la matriz de covarianza de los datos, proyectando las observaciones sobre los componentes ortogonales que retienen la mayor varianza.",
    "skill": "Inteligencia Artificial y Machine Learning",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Reducción de Dimensionalidad",
    "subtopic": "PCA (Principal Component Analysis)"
  },
  {
    "id": "inf-uni-15",
    "number": 95,
    "text": "En motores de bases de datos relacionales como PostgreSQL o MySQL, ¿por qué los índices en disco se implementan comúnmente con árboles B+ (B+ Trees) en lugar de árboles binarios de búsqueda?",
    "options": [
      "Porque los árboles binarios no admiten números enteros",
      "Porque los árboles B+ tienen una alta tasa de ramificación (fan-out) que minimiza drásticamente los accesos de E/S al disco y facilitan recorridos de rangos secuenciales mediante nodos hoja enlazados",
      "Porque los árboles B+ solo ocupan 1 bit en disco",
      "Porque los B+ Trees eliminan la necesidad de memoria RAM"
    ],
    "correctIndex": 1,
    "explanation": "Cada nodo de un B+ Tree coincide con una página de disco (4KB a 16KB), albergando cientos de claves y reduciendo la altura del árbol a 3 o 4 niveles; sus hojas enlazadas permiten escaneos de rango ultra-eficientes.",
    "skill": "Bases de Datos Internals",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Indexación y Almacenamiento",
    "subtopic": "Árboles B+ en Motores SQL"
  },
  {
    "id": "inf-uni-16",
    "number": 96,
    "text": "En redes neuronales profundas (Deep Learning), ¿qué problema matemático grave mitigan arquitecturas como las Redes Residuales (ResNet) con sus \"Skip Connections\"?",
    "options": [
      "El sobrecalentamiento del procesador",
      "El desvanecimiento y explosión del gradiente (Vanishing / Exploding Gradient Problem) al propagar derivadas por retropropagación a través de decenas de capas",
      "La escasez de memoria RAM en el servidor",
      "El cálculo de matrices no invertibles"
    ],
    "correctIndex": 1,
    "explanation": "Las conexiones residuales (F(x) + x) permiten que los gradientes fluyan directamente a través de las capas iniciales sin atenuarse exponencialmente por la regla de la cadena, posibilitando entrenar redes de cientos de capas.",
    "skill": "Deep Learning",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Arquitecturas Neuronales",
    "subtopic": "ResNets y Gradiente Desvaneciente"
  },
  {
    "id": "inf-uni-17",
    "number": 97,
    "text": "¿Cuál es la función del recolector de basura generacional (Generational Garbage Collector) en entornos de ejecución como la JVM o V8?",
    "options": [
      "Borrar archivos temporales de internet cada medianoche",
      "Aprovechar la hipótesis de mortalidad infantil (la gran mayoría de objetos mueren poco después de su creación) para recolectar rápidamente la generación joven sin escanear todo el heap",
      "Desfragmentar el disco rígido mecánicamente",
      "Optimizar el compilador JIT"
    ],
    "correctIndex": 1,
    "explanation": "Divide el heap en Young Generation (Eden/Survivor) y Old Generation; las recolecciones menores (Minor GC) limpian rápidamente objetos efímeros en milisegundos con pausas casi imperceptibles.",
    "skill": "Virtual Machines y Runtimes",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Gestión de Memoria en Runtimes",
    "subtopic": "Garbage Collection Generacional"
  },
  {
    "id": "inf-uni-18",
    "number": 98,
    "text": "¿Qué ataque a nivel de microarquitectura de procesadores explota la ejecución especulativa y las cachés de datos para filtrar información privilegiada del kernel a través de canales laterales?",
    "options": [
      "Spectre y Meltdown",
      "Cross-Site Scripting (XSS)",
      "Ataque de diccionario a claves WPA2",
      "Spoofing ARP"
    ],
    "correctIndex": 0,
    "explanation": "Spectre y Meltdown rompen el aislamiento del espacio de usuario y kernel al inducir al procesador a ejecutar ramas especulativas que alteran el estado de la caché L1, recuperando datos sensibles midiendo tiempos de acceso.",
    "skill": "Seguridad en Hardware",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Vulnerabilidades de Microarquitectura",
    "subtopic": "Spectre y Meltdown"
  },
  {
    "id": "inf-uni-19",
    "number": 99,
    "text": "En cálculo lambda no tipado (Untyped Lambda Calculus), ¿qué combinador de punto fijo permite implementar funciones recursivas sin requerir que la función tenga un nombre en el entorno?",
    "options": [
      "Combinador Y (Y Combinator de Haskell Curry)",
      "Combinador I de identidad",
      "Combinador K constante",
      "Combinador S de sustitución"
    ],
    "correctIndex": 0,
    "explanation": "El combinador Y definido como λf.(λx.f (x x)) (λx.f (x x)) satisface Y g = g (Y g), permitiendo definir funciones recursivas anónimas en sistemas puramente funcionales.",
    "skill": "Teoría de Lenguajes de Programación",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Cálculo Lambda",
    "subtopic": "El Combinador Y"
  },
  {
    "id": "inf-uni-20",
    "number": 100,
    "text": "¿Qué algoritmo distribuido de exclusión mutua utiliza marcas de tiempo lógicas de Lamport para asegurar que las peticiones a secciones críticas se concedan en estricto orden causal sin bloqueos?",
    "options": [
      "Algoritmo de Ricart-Agrawala",
      "Algoritmo de Floyd-Warshall",
      "Algoritmo de Huffman",
      "Algoritmo de Knuth-Morris-Pratt"
    ],
    "correctIndex": 0,
    "explanation": "Ricart-Agrawala optimiza el algoritmo de Lamport reduciendo los mensajes requeridos a 2(N-1) por entrada a la sección crítica mediante solicitudes con timestamps ordenados totalmente.",
    "skill": "Sistemas Distribuidos Avanzados",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Exclusión Mutua Distribuida",
    "subtopic": "Algoritmo Ricart-Agrawala"
  },
  {
    "id": "inf-uni-21",
    "sectionId": 1,
    "number": 21,
    "text": "¿Qué postula fundamentalmente el Teorema de Cook-Levin en la teoría de la complejidad computacional?",
    "options": [
      "Que el Problema de Satisfacibilidad Booleana (SAT) es NP-completo, estableciendo el primer problema formalmente demostrado perteneciente a dicha clase",
      "Que cualquier problema en NP puede resolverse en tiempo constante O(1)",
      "Que las computadoras cuánticas pueden resolver el problema de la parada",
      "Que las máquinas de Turing no pueden ejecutar algoritmos recursivos"
    ],
    "correctIndex": 0,
    "explanation": "Stephen Cook y Leonid Levin demostraron independientemente en 1971 que cualquier lenguaje reconocido por una máquina de Turing no determinista en tiempo polinómico puede reducirse en tiempo polinómico a SAT.",
    "skill": "Teoría de la Complejidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Complejidad Computacional",
    "subtopic": "Teorema de Cook-Levin y Clase NP-Completo"
  },
  {
    "id": "inf-uni-22",
    "sectionId": 1,
    "number": 22,
    "text": "¿Cuál es la definición formal de la clase de complejidad computacional 'NP' (Non-deterministic Polynomial time)?",
    "options": [
      "El conjunto de problemas de decisión cuyas soluciones candidatas (certificados) pueden ser verificadas por una máquina de Turing determinista en tiempo polinómico",
      "Problemas que no pueden resolverse en tiempo polinómico bajo ninguna circunstancia",
      "Problemas que requieren una cantidad infinita de memoria RAM",
      "Algoritmos que solo pueden ejecutarse en procesadores no deterministas"
    ],
    "correctIndex": 0,
    "explanation": "NP no significa 'No Polinómico', sino que una solución propuesta puede verificarse eficientemente en tiempo O(n^k) por un verificador determinista, aunque encontrarla requiera exploración combinatoria exhaustiva.",
    "skill": "Clases de Complejidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Complejidad Computacional",
    "subtopic": "Definición Formal de la Clase NP"
  },
  {
    "id": "inf-uni-23",
    "sectionId": 1,
    "number": 23,
    "text": "¿Qué demostró Alan Turing en 1936 respecto al célebre 'Problema de la Parada' (Halting Problem)?",
    "options": [
      "Que es formalmente indecidible: no existe ningún algoritmo general que pueda determinar, para cualquier programa y entrada arbitrarios, si el programa terminará o se ejecutará infinitamente",
      "Que todas las funciones recursivas pueden compilarse a código binario en tiempo lineal",
      "Que los bucles while siempre se detienen si la memoria es finita",
      "Que los lenguajes de programación tipados son inmunes a bucles infinitos"
    ],
    "correctIndex": 0,
    "explanation": "Turing demostró la indecidibilidad mediante una reducción por diagonalización por contradicción, estableciendo los límites fundamentales e infranqueables de lo que es computable.",
    "skill": "Teoría de la Computabilidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Indecidibilidad",
    "subtopic": "El Problema de la Parada de Turing"
  },
  {
    "id": "inf-uni-24",
    "sectionId": 1,
    "number": 24,
    "text": "En la Jerarquía de Chomsky, ¿cuál es el modelo computacional autómata que reconoce exactamente los 'Lenguajes Libres de Contexto' (Tipo 2)?",
    "options": [
      "Autómata con Pila (Pushdown Automaton - PDA)",
      "Autómata Finito Determinista (DFA)",
      "Máquina de Turing linealmente acotada (LBA)",
      "Autómata Celular unidimensional"
    ],
    "correctIndex": 0,
    "explanation": "Los lenguajes libres de contexto (gramáticas BNF usadas en la sintaxis de lenguajes de programación) son reconocidos por autómatas dotados de una memoria auxiliar de pila LIFO.",
    "skill": "Teoría de Lenguajes Formales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Jerarquía de Chomsky",
    "subtopic": "Autómatas con Pila y Gramáticas Libres de Contexto"
  },
  {
    "id": "inf-uni-25",
    "sectionId": 1,
    "number": 25,
    "text": "¿Qué establece el Lema del Bombeo (Pumping Lemma) para lenguajes regulares?",
    "options": [
      "Que para toda cadena de longitud suficiente en un lenguaje regular, existe una subcadena intermedia que puede repetirse (bombearse) arbitrariamente cualquier número de veces generando siempre cadenas válidas del lenguaje",
      "Que los compiladores pueden optimizar bucles expandiéndolos a memoria de video",
      "Que cualquier autómata puede reducirse a cero estados de aceptación",
      "Que los árboles binarios balanceados tienen altura logarítmica constante"
    ],
    "correctIndex": 0,
    "explanation": "El Pumping Lemma se utiliza por contradicción para demostrar que un lenguaje dado NO es regular (por ejemplo, el lenguaje L = {0^n 1^n | n >= 0} no puede ser reconocido por un autómata finito sin memoria infinita).",
    "skill": "Lenguajes Formales y Autómatas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Autómatas",
    "subtopic": "Lema del Bombeo para Lenguajes Regulares"
  },
  {
    "id": "inf-uni-26",
    "sectionId": 1,
    "number": 26,
    "text": "¿Qué propiedad matemática distingue a un problema perteneciente a la clase 'NP-Hard' (NP-Duro) de uno 'NP-Complete'?",
    "options": [
      "Un problema NP-Hard es al menos tan difícil como cualquier problema en NP, pero no necesariamente tiene que pertenecer a la clase NP (no requiere que su solución pueda verificarse en tiempo polinómico)",
      "Los problemas NP-Hard siempre se resuelven en tiempo O(log N)",
      "Los problemas NP-Hard son exclusivos del cálculo infinitesimal",
      "No existe diferencia matemática; son términos exactamente equivalentes"
    ],
    "correctIndex": 0,
    "explanation": "Un problema es NP-Hard si todo problema en NP se reduce a él en tiempo polinómico. Si además el problema en sí pertenece a NP, entonces es NP-Completo. El problema de la parada es NP-Hard pero no está en NP.",
    "skill": "Teoría de la Complejidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Complejidad Computacional",
    "subtopic": "NP-Hard vs NP-Complete"
  },
  {
    "id": "inf-uni-27",
    "sectionId": 1,
    "number": 27,
    "text": "¿Qué afirma la Tesis de Church-Turing sobre el poder del cálculo computacional?",
    "options": [
      "Que cualquier función que sea computable algorítmicamente mediante cualquier procedimiento efectivo puede ser computada por una Máquina de Turing estándar",
      "Que las computadoras binarias superan a las matemáticas puras",
      "Que los lenguajes funcionales son más rápidos que los imperativos",
      "Que todo programa puede ser paralelizado en infinitos procesadores"
    ],
    "correctIndex": 0,
    "explanation": "Establece la equivalencia fundamental entre el cálculo lambda de Alonzo Church, las funciones recursivas generales de Gödel y las máquinas de Turing como definición formal universal de la computabilidad.",
    "skill": "Fundamentos de la Computabilidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de la Computación",
    "subtopic": "Tesis de Church-Turing"
  },
  {
    "id": "inf-uni-28",
    "sectionId": 1,
    "number": 28,
    "text": "En teoría de complejidad espacial, ¿qué establece el Teorema de Savitch acerca de las máquinas de Turing no deterministas?",
    "options": [
      "Que NSPACE(f(n)) ⊆ DSPACE(f(n)²): cualquier problema resoluble por una máquina no determinista en espacio f(n) puede resolverse deterministamente en espacio a lo sumo cuadrático f(n)²",
      "Que el tiempo y el espacio son idénticos en arquitecturas x86",
      "Que la memoria caché L2 siempre es el doble de rápida que la L3",
      "Que los algoritmos recursivos consumen espacio O(1)"
    ],
    "correctIndex": 0,
    "explanation": "El Teorema de Savitch implica notablemente que PSPACE = NPSPACE, demostrando una simetría mucho más estrecha en complejidad espacial que en temporal (donde P vs NP sigue sin resolverse).",
    "skill": "Complejidad Espacial",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Complejidad Computacional",
    "subtopic": "Teorema de Savitch y PSPACE"
  },
  {
    "id": "inf-uni-29",
    "sectionId": 1,
    "number": 29,
    "text": "¿Qué es un autómata de estados finitos 'Büchi' en verificación formal de sistemas concurrentes?",
    "options": [
      "Una extensión de los autómatas finitos que opera sobre palabras de longitud infinita (ω-lenguajes), aceptando una ejecución si visita al menos un estado de aceptación infinitas veces",
      "Un robot industrial controlado por microcontroladores PIC",
      "Un circuito combinacional de compuertas NAND",
      "Una estructura de datos para indexar bases de datos SQL"
    ],
    "correctIndex": 0,
    "explanation": "Los autómatas de Büchi son fundamentales en el Model Checking de lógica temporal lineal (LTL) para verificar formalmente propiedades de vivacidad (liveness) en sistemas reactivos que nunca se detienen.",
    "skill": "Verificación Formal y Model Checking",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Autómatas",
    "subtopic": "Autómatas de Büchi y Lógica Temporal"
  },
  {
    "id": "inf-uni-30",
    "sectionId": 1,
    "number": 30,
    "text": "¿En qué consiste la técnica de 'Reducción Polinómica de Karp' (Many-One Reduction) utilizada para demostrar la NP-completitud de un nuevo problema B a partir de uno conocido A?",
    "options": [
      "Transformar en tiempo polinómico cualquier instancia x del problema A en una instancia f(x) del problema B, de modo que x es solución positiva de A si y solo si f(x) es solución positiva de B",
      "Dividir el código fuente del programa en hilos paralelos independientes",
      "Reducir el tamaño de las tablas de bases de datos mediante normalización BCNF",
      "Acelerar los ciclos de reloj de la unidad aritmético-lógica"
    ],
    "correctIndex": 0,
    "explanation": "Si A ≤p B y A es NP-Hard, entonces B es necesariamente NP-Hard, pues resolver B permitiría resolver eficientemente el problema A mediante la transformación polinómica f.",
    "skill": "Técnicas de Demostración en Complejidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Reducciones Polinómicas",
    "subtopic": "Reducciones de Karp (Many-One)"
  },
  {
    "id": "inf-uni-31",
    "sectionId": 1,
    "number": 31,
    "text": "En el algoritmo de búsqueda informada A*, ¿qué propiedad matemática debe cumplir la función heurística h(n) para garantizar que el camino encontrado sea estrictamente óptimo (mínimo costo)?",
    "options": [
      "Debe ser 'Admisible': nunca debe sobreestimar el costo real restante desde el nodo actual n hasta el objetivo",
      "Debe ser estrictamente decreciente y negativa en todos los nodos",
      "Debe calcularse exclusivamente mediante números primos impares",
      "Debe ignorar por completo el costo g(n) acumulado desde el origen"
    ],
    "correctIndex": 0,
    "explanation": "La admisibilidad (h(n) <= h*(n)) garantiza la optimalidad en grafos de tipo árbol. Si además es 'consistente' (desigualdad triangular h(n) <= c(n, p) + h(p)), el primer camino cerrado a cualquier nodo es garantizadamente óptimo.",
    "skill": "Algoritmos de Búsqueda Heurística",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Inteligencia Artificial y Grafos",
    "subtopic": "Algoritmo A* y Heurísticas Admisibles"
  },
  {
    "id": "inf-uni-32",
    "sectionId": 1,
    "number": 32,
    "text": "¿Qué teorema fundamental de optimización de redes subyace al algoritmo de Ford-Fulkerson para resolver el problema de Flujo Máximo en grafos?",
    "options": [
      "Teorema del Flujo Máximo - Corte Mínimo (Max-Flow Min-Cut Theorem)",
      "Teorema Central del Límite",
      "Teorema de Bayes para probabilidades condicionales",
      "Teorema de Pitágoras en espacios euclidianos"
    ],
    "correctIndex": 0,
    "explanation": "El valor del flujo máximo que puede circular desde la fuente al sumidero es exactamente igual a la capacidad neta del corte de menor capacidad que separa la fuente del sumidero.",
    "skill": "Algoritmos de Redes y Flujo",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Optimización Combinatoria",
    "subtopic": "Teorema Max-Flow Min-Cut"
  },
  {
    "id": "inf-uni-33",
    "sectionId": 1,
    "number": 33,
    "text": "¿Qué estructura de datos probabilística ultra-eficiente en espacio responde a la consulta de pertenencia de un elemento devolviendo: 'definitivamente no está' o 'probablemente sí está' (falsos positivos posibles, pero cero falsos negativos)?",
    "options": [
      "Filtro de Bloom (Bloom Filter)",
      "Árbol Rojo-Negro",
      "Cola de prioridad Fibonacci Heap",
      "Tabla Hash con encadenamiento directo"
    ],
    "correctIndex": 0,
    "explanation": "Un Filtro de Bloom utiliza un arreglo de m bits y k funciones hash independientes; jamás arroja falsos negativos (si un bit es 0, el elemento con certeza nunca fue insertado), ahorrando accesos costosos a disco.",
    "skill": "Estructuras de Datos Probabilísticas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Algoritmos Probabilísticos",
    "subtopic": "Filtros de Bloom"
  },
  {
    "id": "inf-uni-34",
    "sectionId": 1,
    "number": 34,
    "text": "¿Qué algoritmo probabilístico estima con un error estándar mínimo la cardinalidad (número de elementos únicos distintos) en flujos de datos masivos (Big Data Streams) utilizando apenas unos pocos kilobytes de memoria?",
    "options": [
      "HyperLogLog (HLL)",
      "Dijkstra",
      "QuickSort no recursivo",
      "Algoritmo de Euclides para MCD"
    ],
    "correctIndex": 0,
    "explanation": "HyperLogLog se basa en la observación de los ceros iniciales en las representaciones hash de los elementos; estima cardinalidades de miles de millones de usuarios únicos con un error relativo de ~1% en solo 1.5 KB de RAM.",
    "skill": "Algoritmos de Big Data",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Conteo de Cardinalidad Masiva",
    "subtopic": "Algoritmo HyperLogLog"
  },
  {
    "id": "inf-uni-35",
    "sectionId": 1,
    "number": 35,
    "text": "¿Qué complejidad temporal en el peor de los casos alcanza el algoritmo de Floyd-Warshall para encontrar todos los caminos más cortos entre todos los pares de vértices en un grafo con V vértices?",
    "options": [
      "O(V³)",
      "O(V log V)",
      "O(V + E)",
      "O(2^V)"
    ],
    "correctIndex": 0,
    "explanation": "Floyd-Warshall aplica programación dinámica con tres bucles anidados sobre una matriz de adyacencia (evaluando si pasar por el vértice intermedio k acorta el camino entre i y j), resultando en O(V³).",
    "skill": "Algoritmos de Grafos Avanzados",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Caminos Mínimos All-Pairs",
    "subtopic": "Algoritmo de Floyd-Warshall"
  },
  {
    "id": "inf-uni-36",
    "sectionId": 1,
    "number": 36,
    "text": "¿Cómo previene el algoritmo de búsqueda de cadenas Knuth-Morris-Pratt (KMP) el retroceso ineficiente en el texto principal al encontrar un desajuste de caracteres?",
    "options": [
      "Precalcula un arreglo de prefijos (tabla LPS - Longest Proper Prefix which is also Suffix) que indica exactamente a qué posición del patrón saltar sin volver a examinar caracteres ya emparejados",
      "Invierte el texto completo y busca de derecha a izquierda",
      "Cifra el texto con el algoritmo AES antes de buscar",
      "Utiliza hilos paralelos para adivinar coincidencias al azar"
    ],
    "correctIndex": 0,
    "explanation": "KMP busca patrones en tiempo estrictamente lineal O(N + M) analizando las redundancias internas del patrón para avanzar continuamente el puntero del texto sin retrocesos.",
    "skill": "Algoritmos de Coincidencia de Cadenas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "String Matching",
    "subtopic": "Algoritmo Knuth-Morris-Pratt (KMP)"
  },
  {
    "id": "inf-uni-37",
    "sectionId": 1,
    "number": 37,
    "text": "¿Qué operación de montículo amortizada es drásticamente más eficiente en un 'Fibonacci Heap' (tiempo O(1)) comparado con un 'Binary Heap' tradicional (tiempo O(log N))?",
    "options": [
      "Decrease-Key (disminuir el valor de la clave de un nodo) y Unión de montículos",
      "Extracción del mínimo elemento (Delete-Min)",
      "Búsqueda lineal de elementos arbitrarios",
      "Ordenamiento de matrices 3D"
    ],
    "correctIndex": 0,
    "explanation": "El Fibonacci Heap permite 'Decrease-Key' en O(1) amortizado mediante cortes en cascada, optimizando la complejidad teórica del algoritmo de Dijkstra a O(E + V log V).",
    "skill": "Estructuras de Datos Avanzadas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Colas de Prioridad Avanzadas",
    "subtopic": "Fibonacci Heaps y Decrease-Key"
  },
  {
    "id": "inf-uni-38",
    "sectionId": 1,
    "number": 38,
    "text": "¿Qué técnica algorítmica resuelve el problema de la Secuencia Común Más Larga (Longest Common Subsequence - LCS) entre dos cadenas de longitud N y M en tiempo O(N*M)?",
    "options": [
      "Programación Dinámica mediante una matriz bidimensional de subproblemas superpuestos",
      "Búsqueda binaria simple sobre un arreglo unidimensional",
      "Algoritmo voraz (Greedy) tomando la primera letra disponible",
      "Fuerza bruta exhaustiva generando todos los subconjuntos O(2^N)"
    ],
    "correctIndex": 0,
    "explanation": "La relación de recurrencia compara los últimos caracteres: si coinciden suma 1 + LCS(i-1, j-1); si difieren toma el máximo entre LCS(i-1, j) y LCS(i, j-1), fundamentando herramientas como 'diff' de Unix.",
    "skill": "Programación Dinámica Clásica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Algoritmos sobre Cadenas",
    "subtopic": "Problema LCS (Longest Common Subsequence)"
  },
  {
    "id": "inf-uni-39",
    "sectionId": 1,
    "number": 39,
    "text": "¿Qué es un 'Skip List' (lista por saltos) y qué complejidad temporal ofrece para operaciones de búsqueda, inserción y borrado?",
    "options": [
      "Una estructura de datos probabilística basada en múltiples capas de listas enlazadas con punteros hacia adelante que permite búsquedas en tiempo O(log N) promedio",
      "Una lista que borra los elementos pares automáticamente en tiempo O(N²)",
      "Una matriz tridimensional de punteros sin orden",
      "Una pila LIFO circular sin punteros"
    ],
    "correctIndex": 0,
    "explanation": "Inventada por William Pugh, una Skip List promueve elementos a niveles superiores lanzando monedas probabilísticas, ofreciendo el mismo rendimiento O(log N) de los árboles balanceados pero con algoritmos concurrentes mucho más sencillos.",
    "skill": "Estructuras de Datos Concurrentes",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estructuras de Datos Avanzadas",
    "subtopic": "Skip Lists"
  },
  {
    "id": "inf-uni-40",
    "sectionId": 1,
    "number": 40,
    "text": "¿En qué consiste la técnica de 'Hash Consistente' (Consistent Hashing) utilizada en sistemas distribuidos como DynamoDB, Cassandra y Memcached?",
    "options": [
      "Mapea tanto las claves como los servidores a un anillo circular uniforme (0 a 2^32 - 1); al agregar o retirar un nodo, solo k/N claves se redistribuyen en promedio, evitando la reasignación masiva del módulo tradicional (hash(key) % N)",
      "Garantiza que todas las contraseñas del sistema tengan 64 caracteres SHA-256",
      "Obliga a que todos los servidores tengan exactamente la misma dirección IP",
      "Impide que los datos se guarden en memorias caché"
    ],
    "correctIndex": 0,
    "explanation": "Con hash convencional % N, cambiar el número de servidores N invalida casi el 100% de las cachés; el Hash Consistente localiza el siguiente servidor en sentido horario, minimizando la migración de datos al reescalar el clúster.",
    "skill": "Arquitectura de Sistemas Distribuidos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Particionamiento Distribuido",
    "subtopic": "Hash Consistente (Consistent Hashing)"
  },
  {
    "id": "inf-uni-41",
    "sectionId": 1,
    "number": 41,
    "text": "¿Qué postula formalmente el Teorema CAP (Conjetura de Eric Brewer demostrada por Gilbert y Lynch) para almacenes de datos distribuidos?",
    "options": [
      "Que ante la presencia inevitable de una partición de red (Partition Tolerance - P), un sistema distribuido solo puede garantizar simultáneamente o Consistencia estricta (C) o Alta Disponibilidad (A), pero nunca ambas al mismo tiempo",
      "Que la CPU, el Almacenamiento y la Potencia deben ser iguales en todos los nodos",
      "Que los sistemas en la nube siempre son más económicos que los servidores físicos",
      "Que la velocidad de transmisión nunca puede superar la velocidad de la luz en el vacío"
    ],
    "correctIndex": 0,
    "explanation": "Si la red se corta y dos nodos no pueden comunicarse, el sistema debe elegir: responder con datos posiblemente desactualizados para mantener la disponibilidad (AP), o rechazar la petición para mantener la coherencia (CP).",
    "skill": "Fundamentos de Sistemas Distribuidos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Sistemas Distribuidos",
    "subtopic": "Teorema CAP de Brewer"
  },
  {
    "id": "inf-uni-42",
    "sectionId": 1,
    "number": 42,
    "text": "¿Qué extensión al Teorema CAP introduce el teorema PACELC propuesto por Daniel Abadi?",
    "options": [
      "Si hay partición (P) elegir entre Disponibilidad (A) y Consistencia (C); si NO la hay (Else), elegir entre Latencia (L) y Consistencia (C)",
      "Un algoritmo de cifrado para microprocesadores ARM",
      "Un protocolo de compresión de audio y video en redes 5G",
      "Una norma internacional para refrigeración líquida de datacenters"
    ],
    "correctIndex": 0,
    "explanation": "PACELC modela la realidad cotidiana del funcionamiento sin fallos: incluso cuando la red opera normalmente, sincronizar réplicas de forma consistente introduce latencia inevitable frente a lecturas locales rápidas.",
    "skill": "Modelos Teóricos de Datos Distribuidos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Consistencia y Rendimiento",
    "subtopic": "Teorema PACELC de Abadi"
  },
  {
    "id": "inf-uni-43",
    "sectionId": 1,
    "number": 43,
    "text": "¿En qué consiste el algoritmo de consenso distribuido 'Raft' y qué rol central asume el 'Líder' electo?",
    "options": [
      "Descompone el consenso en subproblemas explícitos (elección de líder, replicación de log y seguridad); el líder es el único responsable de aceptar peticiones de los clientes, secuenciar el log y replicarlo a los seguidores mediante quórums mayoritarios",
      "Permite a todos los nodos escribir datos al mismo tiempo sin ninguna coordinación",
      "Elimina la necesidad de computadoras secundarias en el clúster",
      "Cifra los mensajes con clave pública de 4096 bits"
    ],
    "correctIndex": 0,
    "explanation": "Diseñado por Ongaro y Ousterhout en Stanford para ser mucho más comprensible que Paxos, Raft mantiene una máquina de estados replicada (Replicated State Machine) tolerando la caída de una minoría de nodos ((N-1)/2).",
    "skill": "Algoritmos de Consenso Distribuido",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Consenso y Tolerancia a Fallos",
    "subtopic": "Algoritmo de Consenso Raft"
  },
  {
    "id": "inf-uni-44",
    "sectionId": 1,
    "number": 44,
    "text": "¿Qué limitación fundamental de los 'Relojes Lógicos de Lamport' resuelven los 'Relojes Vectoriales' (Vector Clocks) en sistemas distribuidos?",
    "options": [
      "Los relojes de Lamport no pueden determinar si dos eventos son concurrentes (si L(a) < L(b), no garantiza que 'a' causó a 'b'); los relojes vectoriales sí permiten detectar con exactitud causalidad versus concurrencia independiente",
      "Los relojes de Lamport se atrasan con los cambios de horario de verano",
      "Los relojes de Lamport solo funcionan en procesadores de 32 bits",
      "Los relojes vectoriales miden la temperatura del procesador"
    ],
    "correctIndex": 0,
    "explanation": "Un reloj vectorial mantiene un vector con los tiempos lógicos de todos los nodos del clúster; si ni V(a) <= V(b) ni V(b) <= V(a), el sistema concluye con certeza matemática que ambos eventos fueron concurrentes y entraron en conflicto.",
    "skill": "Tiempo y Causalidad en Sistemas Distribuidos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ordenamiento de Eventos",
    "subtopic": "Relojes Vectoriales vs Relojes de Lamport"
  },
  {
    "id": "inf-uni-45",
    "sectionId": 1,
    "number": 45,
    "text": "¿Cuál es la vulnerabilidad crítica del protocolo de compromiso en dos fases (Two-Phase Commit - 2PC) ante fallos en una red distribuida?",
    "options": [
      "Es un protocolo bloqueante (blocking): si el Coordinador se cae permanentemente tras enviar la fase 'Prepare' y recolectar votos, los participantes quedan indefinidamente bloqueados reteniendo cerrojos de recursos sin saber si confirmar o abortar",
      "Permite que cualquiera modifique la base de datos sin contraseña",
      "Solo admite transacciones de 1 bit",
      "Requiere que todos los servidores estén físicamente en el mismo edificio"
    ],
    "correctIndex": 0,
    "explanation": "2PC es vulnerable al punto único de fallo del coordinador; el protocolo Three-Phase Commit (3PC) o el uso de consenso basado en Paxos/Raft mitigan este bloqueo permanente ante caídas.",
    "skill": "Transacciones Distribuidas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Protocolos Transaccionales",
    "subtopic": "Vulnerabilidad de Bloqueo en 2PC"
  },
  {
    "id": "inf-uni-46",
    "sectionId": 1,
    "number": 46,
    "text": "¿En qué consiste el 'Patrón Saga' para gestionar transacciones que abarcan múltiples microservicios independientes sin utilizar bloqueos distribuidos?",
    "options": [
      "Secuencia de transacciones locales individuales en cada microservicio donde, si alguna falla, se ejecutan transacciones de compensación retrospectivas en orden inverso para revertir los efectos semánticos ya aplicados",
      "Un lenguaje de programación funcional creado en Suecia",
      "Un tipo de cable de red blindado para centros de datos",
      "Un algoritmo de compresión de audio sin pérdidas"
    ],
    "correctIndex": 0,
    "explanation": "El patrón Saga (implementado por coreografía o por orquestador central) evita los bloqueos de 2PC; en caso de fallo (ej. saldo insuficiente al pagar), dispara eventos de compensación (ej. cancelar reserva de inventario).",
    "skill": "Arquitectura de Microservicios",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Transacciones Distribuidas",
    "subtopic": "Patrón Saga y Transacciones de Compensación"
  },
  {
    "id": "inf-uni-47",
    "sectionId": 1,
    "number": 47,
    "text": "¿Qué afirma el Teorema FLP (Fischer, Lynch y Paterson) sobre el consenso en sistemas distribuidos asíncronos?",
    "options": [
      "En una red totalmente asíncrona, no existe ningún algoritmo de consenso determinista que pueda garantizar tanto seguridad (safety) como terminación (liveness) ante la presencia de incluso un único nodo que pueda fallar por caída (crash)",
      "Que todos los mensajes de red llegan en menos de un segundo",
      "Que los sistemas distribuidos nunca pueden tener más de 100 servidores",
      "Que el cable ethernet transmite información a cero grados Kelvin"
    ],
    "correctIndex": 0,
    "explanation": "El resultado de imposibilidad FLP (1985) demostró que en redes puramente asíncronas es imposible distinguir un nodo que ha caído de uno que simplemente procesa con lentitud extrema, obligando a los algoritmos prácticos (Raft, Paxos) a asumir sincronía parcial o temporizadores.",
    "skill": "Límites Teóricos de Sistemas Distribuidos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teorema de Imposibilidad FLP",
    "subtopic": "Consenso Asíncrono y Teorema FLP"
  },
  {
    "id": "inf-uni-48",
    "sectionId": 1,
    "number": 48,
    "text": "¿Qué son los 'Tipos de Datos Replicados Libres de Conflicto' (CRDTs - Conflict-free Replicated Data Types)?",
    "options": [
      "Estructuras de datos diseñadas matemáticamente (mediante semirretículos o retículos semilattice) que pueden replicarse y actualizarse concurrentemente en múltiples nodos sin coordinación central, convergiendo siempre al mismo estado al sincronizarse",
      "Archivos de texto enriquecido con formato RTF",
      "Tipos de datos que solo admiten números complejos imaginarios",
      "Registros de bases de datos que se borran automáticamente tras 5 segundos"
    ],
    "correctIndex": 0,
    "explanation": "Los CRDTs (de estado o de operación) tienen operaciones asociativas, conmutativas e idempotentes, siendo la tecnología base detrás de herramientas colaborativas en tiempo real offline-first (ej. Figma, Notion, Google Docs).",
    "skill": "Computación Replicada sin Bloqueos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Replicación y Consistencia Eventual",
    "subtopic": "CRDTs (Conflict-free Replicated Data Types)"
  },
  {
    "id": "inf-uni-49",
    "sectionId": 1,
    "number": 49,
    "text": "¿Qué modelo de consistencia estricto 'Linealizabilidad' (Linearizability o Consistencia Atómica) garantiza a los clientes de un sistema concurrente distribuido?",
    "options": [
      "Que toda operación de lectura o escritura parezca ejecutarse instantáneamente en un único punto en el tiempo entre su invocación y su respuesta, respetando estrictamente el orden del tiempo real global",
      "Que los datos se almacenen en líneas de texto continuas sin saltos de página",
      "Que las operaciones se ejecuten en orden alfabético por nombre de usuario",
      "Que el sistema nunca utilice discos magnéticos"
    ],
    "correctIndex": 0,
    "explanation": "Linearizability es el modelo de consistencia más riguroso para operaciones sobre objetos individuales: una vez que una escritura se completa con éxito para un cliente, cualquier lectura posterior en tiempo real en cualquier nodo del mundo debe devolver ese valor o uno más reciente.",
    "skill": "Modelos Formales de Consistencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Consistencia de Datos",
    "subtopic": "Linealizabilidad (Linearizability)"
  },
  {
    "id": "inf-uni-50",
    "sectionId": 1,
    "number": 50,
    "text": "¿En qué consiste el ataque o problema de los 'Generales Bizantinos' (Byzantine Fault Tolerance - BFT) en computación distribuida?",
    "options": [
      "La presencia de nodos defectuosos o maliciosos que no solo fallan por apagado, sino que envían intencionalmente información contradictoria o corrupta a distintos participantes para sabotear el consenso",
      "La desconexión física de los cables submarinos de internet",
      "El desbordamiento de búfer en sistemas operativos MS-DOS",
      "La interferencia electromagnética de tormentas solares en la RAM"
    ],
    "correctIndex": 0,
    "explanation": "Para tolerar f nodos bizantinos maliciosos, un sistema determinista clásico requiere al menos 3f + 1 nodos totales (como en PBFT). Es el fundamento de los consensos en redes Blockchain (Proof of Work / Proof of Stake).",
    "skill": "Tolerancia a Fallas Bizantinas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Consenso y Criptografía",
    "subtopic": "Problema de los Generales Bizantinos (BFT)"
  },
  {
    "id": "inf-uni-51",
    "sectionId": 1,
    "number": 51,
    "text": "En programación concurrente lock-free, ¿qué primitiva atómica de hardware 'CAS' (Compare-And-Swap) permite actualizar una variable de memoria de forma segura sin adquirir cerrojos?",
    "options": [
      "Compara el contenido de una dirección de memoria con un valor esperado; solo si coinciden, escribe el nuevo valor en esa dirección atómicamente, devolviendo si tuvo éxito o falló",
      "Cambia el orden de los bytes de Big-Endian a Little-Endian",
      "Apaga las interrupciones del procesador durante 10 segundos",
      "Copia el contenido del disco rígido a la memoria caché L1"
    ],
    "correctIndex": 0,
    "explanation": "CAS es la instrucción nativa de CPU (ej. CMPXCHG en x86) sobre la cual se implementan colas, pilas y mapas concurrentes libres de bloqueos, evitando la sobrecarga e inversión de prioridades de los mutexes.",
    "skill": "Estructuras Libres de Bloqueos (Lock-Free)",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Primitivas Atómicas de Hardware",
    "subtopic": "Instrucción Compare-And-Swap (CAS)"
  },
  {
    "id": "inf-uni-52",
    "sectionId": 1,
    "number": 52,
    "text": "¿Qué es el 'Problema ABA' en algoritmos y estructuras de datos concurrentes lock-free basados en Compare-And-Swap?",
    "options": [
      "Un hilo lee el valor A; otro hilo cambia el valor a B y luego lo devuelve a A; el primer hilo ejecuta CAS y cree erróneamente que nada cambió, ignorando que el estado contextual del recurso fue modificado",
      "Un bucle infinito que solo imprime las letras A y B",
      "Un fallo de diseño en el teclado que repite teclas",
      "Un error al ordenar listas en orden alfabético"
    ],
    "correctIndex": 0,
    "explanation": "El problema ABA puede corromper punteros de memoria reciclados en listas enlazadas. Se soluciona utilizando punteros etiquetados con números de versión o contadores de generaciones (Tagged Pointers).",
    "skill": "Concurrencia Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Problemas de Concurrencia Lock-Free",
    "subtopic": "El Problema ABA y Punteros Etiquetados"
  },
  {
    "id": "inf-uni-53",
    "sectionId": 1,
    "number": 53,
    "text": "¿Qué anomalía grave de sistemas de tiempo real 'Inversión de Prioridades' (Priority Inversion) afectó célebremente a la sonda espacial Mars Pathfinder en 1997?",
    "options": [
      "Una tarea de baja prioridad retiene un recurso compartido que necesita una tarea de alta prioridad; una tarea de prioridad intermedia (que no usa el recurso) expulsa a la de baja prioridad, bloqueando indirectamente a la de alta prioridad indefinidamente",
      "El procesador cambió la dirección del reloj astronómico hacia atrás",
      "La batería se descargó por el frío marciano",
      "La cámara de fotos transmitió en blanco y negro por falta de memoria"
    ],
    "correctIndex": 0,
    "explanation": "Se soluciona mediante el Protocolo de Herencia de Prioridad (Priority Inheritance Protocol - PIP), donde la tarea de baja prioridad hereda temporalmente la alta prioridad mientras retenga el cerrojo crítico.",
    "skill": "Sistemas Operativos de Tiempo Real (RTOS)",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Planificación de Procesos",
    "subtopic": "Inversión de Prioridades y Protocolo PIP"
  },
  {
    "id": "inf-uni-54",
    "sectionId": 1,
    "number": 54,
    "text": "¿Qué protocolo de coherencia de caché de 4 estados 'MESI' garantiza que múltiples núcleos de CPU mantengan vistas consistentes de las líneas de memoria compartidas?",
    "options": [
      "Modified (modificado), Exclusive (exclusivo), Shared (compartido), Invalid (inválido)",
      "Memory, Execution, Storage, Instruction",
      "Main, External, System, Internal",
      "Monitor, Evaluate, Synchronize, Interrupt"
    ],
    "correctIndex": 0,
    "explanation": "MESI escucha las transmisiones del bus de memoria (bus snooping); si un núcleo escribe en una línea compartida (Shared), invalida (Invalid) las copias de los demás núcleos antes de modificarla.",
    "skill": "Arquitectura de Computadoras y Coherencia de Caché",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microarquitectura de Procesadores",
    "subtopic": "Protocolo de Coherencia de Caché MESI"
  },
  {
    "id": "inf-uni-55",
    "sectionId": 1,
    "number": 55,
    "text": "¿Qué fenómeno 'False Sharing' (falso intercambio) degrada severamente el rendimiento en programas multihilo en procesadores multinúcleo?",
    "options": [
      "Dos hilos en núcleos diferentes modifican variables independientes no compartidas que por casualidad residen en la misma línea de memoria caché (cache line, típicamente de 64 bytes), provocando continuas invalidaciones de caché en el bus",
      "Compartir archivos en una red Wi-Fi sin contraseña",
      "Usar dos monitores con diferentes resoluciones de pantalla",
      "Ejecutar dos navegadores web al mismo tiempo"
    ],
    "correctIndex": 0,
    "explanation": "Aunque los hilos no comparten lógica de variables, el hardware maneja transferencias a nivel de línea de caché completa; se resuelve alineando y agregando relleno de memoria (padding) a las variables.",
    "skill": "Optimización a Nivel de Hardware",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Rendimiento Multihilo",
    "subtopic": "Falso Intercambio (False Sharing)"
  },
  {
    "id": "inf-uni-56",
    "sectionId": 1,
    "number": 56,
    "text": "En el diseño de sistemas de archivos modernos (como ext4, XFS o NTFS), ¿cuál es el propósito del mecanismo de 'Journaling' (registro por diario)?",
    "options": [
      "Registrar las transacciones de cambios en los metadatos en un área dedicada del disco antes de escribirlos en los bloques definitivos, garantizando recuperación consistente en segundos tras una caída abrupta de energía",
      "Comprimir imágenes de fondo de pantalla",
      "Escribir poemas en un diario digital secreto del sistema operativo",
      "Desfragmentar el disco de manera continua día y noche"
    ],
    "correctIndex": 0,
    "explanation": "El journaling evita la necesidad de ejecutar escaneos exhaustivos de horas con 'fsck' tras un corte de energía; el sistema simplemente lee el journal y re-aplica (o descarta) transacciones incompletas.",
    "skill": "Sistemas de Archivos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Almacenamiento y Confiabilidad",
    "subtopic": "Sistemas de Archivos con Journaling"
  },
  {
    "id": "inf-uni-57",
    "sectionId": 1,
    "number": 57,
    "text": "¿Qué modelo de concurrencia 'Modelo Actor' (popularizado por Erlang/Elixir y Akka) prescribe el manejo seguro del estado sin compartir memoria?",
    "options": [
      "Los actores son entidades aisladas que encapsulan su propio estado y solo se comunican intercambiando mensajes asíncronos inmutables en buzones (mailboxes), eliminando por completo cerrojos compartidos y carreras",
      "Los programas son interpretados por actores humanos en un escenario",
      "La memoria RAM se divide en dos bloques físicos de video",
      "Los servidores solo ejecutan código durante horas laborales"
    ],
    "correctIndex": 0,
    "explanation": "El principio rector es 'Do not communicate by sharing memory; instead, share memory by communicating'. Al no existir estado mutable compartido, no existen condiciones de carrera ni bloqueos.",
    "skill": "Modelos de Concurrencia Avanzados",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Paradigmas de Concurrencia",
    "subtopic": "El Modelo Actor de Hewitt"
  },
  {
    "id": "inf-uni-58",
    "sectionId": 1,
    "number": 58,
    "text": "¿Qué técnica de memoria virtual 'Copy-On-Write' (COW) optimiza la llamada al sistema 'fork()' en sistemas tipo Unix?",
    "options": [
      "El proceso hijo comparte inicialmente las mismas páginas de memoria física del proceso padre en modo solo lectura; una copia física de la página se realiza únicamente en el instante en que alguno de los dos intenta escribir en ella",
      "Copia todos los archivos del disco duro a un servidor remoto",
      "Imprime una copia en papel de cada instrucción ejecutada",
      "Borra la memoria del padre para dársela al hijo"
    ],
    "correctIndex": 0,
    "explanation": "Copy-On-Write permite que 'fork()' sea casi instantáneo (O(1)), evitando copiar gigabytes de memoria innecesariamente, lo que resulta crítico si el proceso hijo invocará inmediatamente 'execve()'.",
    "skill": "Gestión de Memoria en el Kernel",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Llamadas al Sistema Unix",
    "subtopic": "Copy-On-Write (COW) en fork()"
  },
  {
    "id": "inf-uni-59",
    "sectionId": 1,
    "number": 59,
    "text": "¿Qué mecanismo de Control de Concurrencia Multiversión (MVCC) permite que en motores de bases de datos las lecturas nunca bloqueen a las escrituras y las escrituras nunca bloqueen a las lecturas?",
    "options": [
      "Cada transacción ve una instantánea (snapshot) consistente de los datos generada a partir de versiones históricas inmutables de las filas identificadas por identificadores de transacción (XID o timestamps)",
      "Duplica físicamente el número de servidores de bases de datos por cada usuario",
      "Apaga el motor de base de datos durante las consultas pesadas",
      "Convierte todas las tablas a formato de texto plano sin índices"
    ],
    "correctIndex": 0,
    "explanation": "Cuando una transacción modifica un registro, crea una nueva versión de la fila con su propio xmin/xmax; las transacciones concurrentes continúan leyendo la versión vieja visible para su instantánea sin esperar cerrojos.",
    "skill": "Internals de Motores de Bases de Datos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Control de Concurrencia",
    "subtopic": "Control de Concurrencia Multiversión (MVCC)"
  },
  {
    "id": "inf-uni-60",
    "sectionId": 1,
    "number": 60,
    "text": "¿Cómo mitiga el parche de aislamiento de tablas de páginas del kernel 'KPTI' (Kernel Page-Table Isolation) la vulnerabilidad de hardware Meltdown?",
    "options": [
      "Separa completamente las tablas de páginas de memoria del espacio de usuario y del espacio del kernel, de modo que la memoria del kernel ni siquiera está mapeada en la tabla mientras se ejecuta código en espacio de usuario",
      "Deshabilita el acceso a internet en el servidor",
      "Reduce la memoria RAM a la mitad de su capacidad",
      "Obliga al procesador a reiniciar tras cada ciclo de instrucción"
    ],
    "correctIndex": 0,
    "explanation": "Meltdown aprovechaba que el kernel estaba mapeado en el espacio de usuario (aunque protegido por bits) mediante ejecución especulativa y cachés; KPTI elimina este mapeo a costa de una leve penalización en cambios de contexto.",
    "skill": "Seguridad a Nivel de Kernel",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Vulnerabilidades de Microarquitectura",
    "subtopic": "Mitigación de Meltdown mediante KPTI"
  },
  {
    "id": "inf-uni-61",
    "sectionId": 1,
    "number": 61,
    "text": "En la fase de análisis sintáctico de un compilador, ¿cuál es la diferencia fundamental entre un analizador descendente LL(k) y un analizador ascendente LR(k)?",
    "options": [
      "LL(k) analiza de izquierda a derecha construyendo la derivación por la izquierda desde la raíz hasta las hojas; LR(k) analiza de izquierda a derecha construyendo la derivación inversa por la derecha desde las hojas hacia la raíz mediante desplazamientos y reducciones (Shift-Reduce)",
      "LL(k) solo analiza lenguajes en mayúsculas y LR(k) en minúsculas",
      "LR(k) no admite gramáticas formales",
      "LL(k) es exclusivo para procesadores de 64 bits"
    ],
    "correctIndex": 0,
    "explanation": "Los parsers LR (como LALR(1) en Bison/Yacc) son mucho más potentes que los LL (como los descendentes recursivos), admitiendo un subconjunto mucho más amplio de gramáticas libres de contexto sin requerir eliminación de recursión izquierda.",
    "skill": "Construcción de Compiladores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Sintáctico (Parsing)",
    "subtopic": "Parsers LL(k) vs LR(k)"
  },
  {
    "id": "inf-uni-62",
    "sectionId": 1,
    "number": 62,
    "text": "¿Qué estructura de representación intermedia en compiladores modernos (como LLVM o GCC) se caracteriza por asignar a cada variable un valor exactamente una sola vez, facilitando drásticamente el análisis de flujo de datos y optimizaciones?",
    "options": [
      "SSA (Static Single Assignment form / Asignación Única Estática)",
      "Código fuente C plano",
      "Bytecode no estructurado",
      "Ensamblador x86 directo"
    ],
    "correctIndex": 0,
    "explanation": "En formato SSA, cada asignación crea una nueva versión de la variable (ej. x1, x2), y en los puntos de confluencia de ramas se insertan funciones phi (Φ), simplificando optimizaciones como propagación de constantes y eliminación de código muerto.",
    "skill": "Representaciones Intermedias en Compiladores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Optimización de Código en Compiladores",
    "subtopic": "Forma de Asignación Única Estática (SSA)"
  },
  {
    "id": "inf-uni-63",
    "sectionId": 1,
    "number": 63,
    "text": "¿Qué optimización de compilador 'Loop Unrolling' (desenrollado de bucles) intercambia tamaño de binario por velocidad de ejecución?",
    "options": [
      "Replica el cuerpo del bucle múltiples veces dentro de cada iteración para reducir la sobrecarga de saltos condicionales y comprobaciones de la condición de fin de ciclo",
      "Elimina todas las variables dentro del bucle para ahorrar RAM",
      "Convierte el bucle en una llamada recursiva a través de internet",
      "Ejecuta el bucle al revés para enfriar la CPU"
    ],
    "correctIndex": 0,
    "explanation": "Al desenrollar (ej. ejecutar 4 operaciones por vuelta en lugar de 1), se ejecutan un 75% menos de instrucciones de salto/comparación y se habilita la vectorización SIMD de las instrucciones.",
    "skill": "Optimización de Bucles",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Optimizaciones de Compilador",
    "subtopic": "Loop Unrolling (Desenrollado de Bucles)"
  },
  {
    "id": "inf-uni-64",
    "sectionId": 1,
    "number": 64,
    "text": "¿Cuál es la función del Árbol de Sintaxis Abstracta (AST - Abstract Syntax Tree) generado por el parser de un compilador?",
    "options": [
      "Representar la estructura jerárquica y lógica del código fuente omitiendo detalles sintácticos irrelevantes como paréntesis, comas o puntos y coma",
      "Dibujar diagramas de flujo en formato vectorial para los desarrolladores",
      "Guardar las contraseñas del programa de forma cifrada",
      "Comprobar si el cable del monitor está bien conectado"
    ],
    "correctIndex": 0,
    "explanation": "El AST captura la semántica pura del programa (nodos de operaciones, declaraciones y estructuras de control), sirviendo de base para la comprobación de tipos (type checking) y generación de código.",
    "skill": "Fases de Compilación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estructuras de Compiladores",
    "subtopic": "Árbol de Sintaxis Abstracta (AST)"
  },
  {
    "id": "inf-uni-65",
    "sectionId": 1,
    "number": 65,
    "text": "¿Qué optimización realiza un compilador Just-In-Time (JIT) como el motor V8 de Node.js o HotSpot de Java en tiempo de ejecución?",
    "options": [
      "Monitorea el código interpretado en caliente (hot code) y compila dinámicamente las funciones más ejecutadas directamente a código máquina nativo ultra-optimizado basándose en tipos observados (inline caching / deoptimización)",
      "Borra los archivos de código fuente que tengan más de un año",
      "Descarga bibliotecas de terceros automáticamente desde foros públicos",
      "Reinicia la computadora cada vez que hay una excepción"
    ],
    "correctIndex": 0,
    "explanation": "Los compiladores JIT combinan el arranque rápido de un intérprete con el rendimiento de código nativo precompilado mediante optimizaciones guiadas por perfiles (PGO) y des-optimización defensiva si cambian los tipos observados.",
    "skill": "Máquinas Virtuales y Runtimes JIT",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Compilación Just-In-Time",
    "subtopic": "Optimización JIT y HotSpot"
  },
  {
    "id": "inf-uni-66",
    "sectionId": 1,
    "number": 66,
    "text": "¿En qué consiste la optimización de compilador 'Inlining' (expansión en línea de funciones)?",
    "options": [
      "Reemplazar la llamada a una función directamente por el cuerpo de su código en el punto de invocación, eliminando la sobrecarga de llamada, paso de parámetros y retorno de pila",
      "Publicar el código fuente en línea en internet",
      "Escribir todo el código fuente en una sola línea física continua",
      "Traducir las variables a código Morse"
    ],
    "correctIndex": 0,
    "explanation": "El inlining elimina instrucciones 'call' y 'ret' de la CPU y permite optimizaciones interprocedimentales más profundas (como propagación de constantes dentro del código incrustado), a cambio de un posible incremento del tamaño del ejecutable.",
    "skill": "Técnicas de Optimización de Compiladores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Optimizaciones de Código",
    "subtopic": "Function Inlining"
  },
  {
    "id": "inf-uni-67",
    "sectionId": 1,
    "number": 67,
    "text": "¿Qué es la 'Eliminación de Subexpresiones Comunes' (Common Subexpression Elimination - CSE)?",
    "options": [
      "Una optimización de compilador que detecta expresiones idénticas calculadas repetidamente y almacena el resultado en una variable temporal reutilizándolo para no recalcularlo",
      "El borrado de comentarios redundantes en el código",
      "La supresión de espacios en blanco en archivos HTML",
      "La eliminación de módulos que no se importen"
    ],
    "correctIndex": 0,
    "explanation": "Si en un bloque básico se calcula (a + b) múltiples veces sin que 'a' o 'b' cambien de valor, CSE computa (a + b) una única vez, ahorrando ciclos de CPU valiosos.",
    "skill": "Análisis de Flujo de Datos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Optimizaciones en Compiladores",
    "subtopic": "Common Subexpression Elimination (CSE)"
  },
  {
    "id": "inf-uni-68",
    "sectionId": 1,
    "number": 68,
    "text": "¿Cómo funciona el análisis léxico (Lexing o Tokenización) en un compilador mediante el uso de expresiones regulares y Autómatas Finitos Deterministas (DFA)?",
    "options": [
      "Transforma el flujo lineal de caracteres del archivo fuente en una secuencia lineal de símbolos léxicos atómicos clasificados (Tokens: palabras reservadas, identificadores, literales, operadores)",
      "Verifica si las clases y métodos están bien diseñados",
      "Ejecuta las pruebas unitarias del programa",
      "Calcula las integrales del código matemático"
    ],
    "correctIndex": 0,
    "explanation": "Herramientas como Flex o Lex convierten expresiones regulares que describen patrones léxicos en tablas de transición de estados DFA para categorizar caracteres a la máxima velocidad posible.",
    "skill": "Fase de Análisis Léxico",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Compiladores",
    "subtopic": "Tokenización y Autómatas Finitos"
  },
  {
    "id": "inf-uni-69",
    "sectionId": 1,
    "number": 69,
    "text": "¿Qué algoritmo de asignación de registros en compiladores modela el problema como un 'Coloreo de Grafos de Interferencia' (Chaitin-Briggs Graph Coloring)?",
    "options": [
      "Construye un grafo donde los nodos son variables temporales y las aristas conectan variables que están 'vivas' simultáneamente; si el grafo se puede colorear con K colores (donde K es el número de registros físicos de la CPU), no se requiere volcado a memoria (spill)",
      "Pinta los chips de memoria con tintas conductoras",
      "Asigna colores a los cables de red del servidor",
      "Permite cambiar el tema de color del editor de código"
    ],
    "correctIndex": 0,
    "explanation": "Dado que el coloreo de grafos es un problema NP-completo, los compiladores aplican heurísticas de Kempe para reducir el grafo y asignar registros físicos ultra-rápidos, minimizando el acceso lento a memoria RAM.",
    "skill": "Generación de Código y Asignación de Registros",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Asignación de Registros",
    "subtopic": "Coloreo de Grafos de Interferencia de Chaitin"
  },
  {
    "id": "inf-uni-70",
    "sectionId": 1,
    "number": 70,
    "text": "¿Qué es el 'Escape Analysis' (análisis de escape) realizado por compiladores y máquinas virtuales avanzadas?",
    "options": [
      "Determina si la referencia a un objeto creado dentro de un método escapa de su ámbito léxico; si se comprueba que nunca escapa, el compilador puede asignarlo directamente en el Stack en lugar del Heap, evitando la recolección de basura",
      "Detecta si un hacker intenta escapar de una máquina virtual",
      "Comprueba la tecla ESC del teclado",
      "Permite cerrar ventanas de diálogo abiertas"
    ],
    "correctIndex": 0,
    "explanation": "La asignación en la pila (Stack Allocation) de objetos que no escapan elimina la sobrecarga de asignación dinámica y alivia el recolector de basura (GC), acelerando radicalmente la ejecución.",
    "skill": "Optimización de Memoria en Runtimes",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Máquinas Virtuales Avanzadas",
    "subtopic": "Escape Analysis y Stack Allocation"
  },
  {
    "id": "inf-uni-71",
    "sectionId": 1,
    "number": 71,
    "text": "¿Qué ventaja matemática fundamental ofrece la Criptografía de Curva Elíptica (ECC, ej. Curve25519) comparada con el cifrado RSA tradicional?",
    "options": [
      "Ofrece el mismo o mayor nivel de seguridad criptográfica con claves órdenes de magnitud más pequeñas (ej. ECC de 256 bits equivale a RSA de 3072 bits), requiriendo mucho menor costo computacional y ancho de banda",
      "No requiere el uso de matemáticas avanzadas",
      "Permite recuperar claves olvidadas mediante preguntas secretas",
      "Solo funciona en tarjetas gráficas NVIDIA"
    ],
    "correctIndex": 0,
    "explanation": "El problema del logaritmo discreto sobre grupos de curvas elípticas (ECDLP) no cuenta con algoritmos subexponenciales generales conocidos (a diferencia del cribado de campos numéricos en RSA), permitiendo claves compactas y ultra-rápidas.",
    "skill": "Criptografía Asimétrica Moderna",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Criptografía de Curva Elíptica",
    "subtopic": "Ventajas de ECC frente a RSA"
  },
  {
    "id": "inf-uni-72",
    "sectionId": 1,
    "number": 72,
    "text": "¿En qué consiste la propiedad de 'Secreto Perfecto hacia Adelante' (PFS - Perfect Forward Secrecy) en protocolos de intercambio de claves como ECDHE?",
    "options": [
      "Garantiza que el compromiso o filtración futura de la clave privada a largo plazo del servidor NO compromete ni permite descifrar las sesiones de tráfico pasadas previamente grabadas por un espía",
      "Predice qué sitios web visitará el usuario mañana",
      "Garantiza que el código fuente no tendrá errores ortográficos",
      "Permite descifrar archivos borrados hace 10 años"
    ],
    "correctIndex": 0,
    "explanation": "PFS utiliza claves efímeras independientes generadas al vuelo para cada sesión mediante Diffie-Hellman efímero; una vez finalizada la sesión las claves se destruyen de la memoria y nadie puede reconstruirlas.",
    "skill": "Protocolos Criptográficos Seguros",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Seguridad en Comunicaciones",
    "subtopic": "Perfect Forward Secrecy (PFS)"
  },
  {
    "id": "inf-uni-73",
    "sectionId": 1,
    "number": 73,
    "text": "¿Qué es una 'Prueba de Conocimiento Cero' (Zero-Knowledge Proof - ZKP, como zk-SNARKs)?",
    "options": [
      "Un protocolo criptográfico probabilístico donde un demostrador puede probar con certeza matemática a un verificador que posee un secreto o que una afirmación es verdadera, sin revelar absolutamente ninguna información sobre el contenido del secreto en sí",
      "Un examen donde los estudiantes obtienen cero de calificación",
      "Un software que no almacena ninguna línea de código",
      "Un tipo de red inalámbrica sin contraseñas"
    ],
    "correctIndex": 0,
    "explanation": "Formalizado por Goldwasser, Micali y Rackoff, ZKP cumple Completitud, Solidez y Conocimiento Cero, posibilitando autenticaciones anónimas y transacciones criptográficas privadas y verificables.",
    "skill": "Criptografía Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Protocolos de Privacidad",
    "subtopic": "Zero-Knowledge Proofs (ZKP y zk-SNARKs)"
  },
  {
    "id": "inf-uni-74",
    "sectionId": 1,
    "number": 74,
    "text": "¿En qué consiste un 'Ataque de Canal Lateral por Tiempos' (Timing Side-Channel Attack) contra una función criptográfica de comparación?",
    "options": [
      "Medir con precisión de nanosegundos el tiempo que tarda la función en rechazar una entrada para deducir cuántos bytes iniciales coincidieron con el secreto, rompiendo la seguridad sin descifrar el algoritmo",
      "Hackear el reloj de pulsera del administrador",
      "Esperar a la medianoche para enviar peticiones",
      "Cambiar la zona horaria del servidor"
    ],
    "correctIndex": 0,
    "explanation": "Una comparación como 'if (a[i] != b[i]) return false;' aborta antes si el primer byte no coincide que si falló en el décimo; se defiende implementando comparaciones de tiempo constante (Constant-Time comparison).",
    "skill": "Análisis de Vulnerabilidades Criptográficas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ataques de Canal Lateral",
    "subtopic": "Timing Attacks y Comparación en Tiempo Constante"
  },
  {
    "id": "inf-uni-75",
    "sectionId": 1,
    "number": 75,
    "text": "¿Por qué los algoritmos criptográficos asimétricos clásicos como RSA y ECC serán completamente vulnerables ante una computadora cuántica a gran escala?",
    "options": [
      "Porque el Algoritmo Cuántico de Shor resuelve tanto la factorización de números primos grandes como el logaritmo discreto en tiempo polinómico O((log N)³)",
      "Porque las computadoras cuánticas no utilizan electricidad",
      "Porque las computadoras cuánticas adivinan contraseñas alfabéticamente",
      "Porque el calor cuántico derrite los chips de silicio"
    ],
    "correctIndex": 0,
    "explanation": "Peter Shor demostró en 1994 que una computadora cuántica con suficientes cúbits lógicos puede resolver el orden de subgrupos en tiempo polinómico, rompiendo toda la infraestructura PKI basada en RSA y ECC.",
    "skill": "Criptografía Post-Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Computación Cuántica",
    "subtopic": "El Algoritmo de Shor y la Criptografía Asimétrica"
  },
  {
    "id": "inf-uni-76",
    "sectionId": 1,
    "number": 76,
    "text": "¿Qué familia matemática de problemas difíciles sustenta los nuevos estándares mundiales de Criptografía Post-Cuántica (PQC estandarizados por el NIST, como ML-KEM/Kyber y ML-DSA/Dilithium)?",
    "options": [
      "Problemas basados en Retículos Euclidianos (Lattice-Based Cryptography, tales como LWE - Learning With Errors y Shortest Vector Problem)",
      "El cálculo de áreas de círculos",
      "La división por potencias de dos",
      "El ordenamiento de cadenas de texto"
    ],
    "correctIndex": 0,
    "explanation": "Los problemas en retículos n-dimensionales (como hallar el vector más corto en dimensiones superiores) son inmunes a ataques conocidos tanto por computadoras clásicas como cuánticas.",
    "skill": "Estándares Post-Cuánticos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Criptografía Post-Cuántica",
    "subtopic": "Criptografía Basada en Retículos (Lattice-Based)"
  },
  {
    "id": "inf-uni-77",
    "sectionId": 1,
    "number": 77,
    "text": "¿Qué técnica de protección de memoria 'ASLR' (Address Space Layout Randomization) mitiga la explotación de vulnerabilidades de desbordamiento de búfer?",
    "options": [
      "Aleatoriza las posiciones de las áreas clave de memoria del proceso (pila, heap y bibliotecas compartidas) en cada arranque, impidiendo que el atacante salte a direcciones fijas predecibles en ataques de inyección de shellcode o ROP",
      "Formatea el disco duro al azar una vez por semana",
      "Cambia el nombre del archivo ejecutable aleatoriamente",
      "Apaga el ventilador del CPU aleatoriamente"
    ],
    "correctIndex": 0,
    "explanation": "Al combinar ASLR con el bit DEP/NX (No-Execute), el atacante no puede ejecutar código inyectado en la pila ni localizar con certeza funciones de bibliotecas del sistema para ejecutar Return-Oriented Programming (ROP).",
    "skill": "Defensa contra Explotación Binaria",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Seguridad en Sistemas Operativos",
    "subtopic": "Técnica ASLR (Address Space Layout Randomization)"
  },
  {
    "id": "inf-uni-78",
    "sectionId": 1,
    "number": 78,
    "text": "¿Qué es un ataque de 'Retorno a Orientación a Programación' (ROP - Return-Oriented Programming)?",
    "options": [
      "Una técnica avanzada de explotación de memoria que burla la protección de memoria no ejecutable (DEP/NX) encadenando fragmentos de código máquina preexistentes en bibliotecas legítimas terminados en la instrucción 'ret' (llamados gadgets)",
      "Un virus que infecta únicamente programas escritos en Java",
      "Un fallo de diseño en la placa base que invierte los polos eléctricos",
      "Un ataque que borra el historial de navegación de un usuario"
    ],
    "correctIndex": 0,
    "explanation": "En ROP, el atacante no inyecta nuevo código ejecutable, sino que manipula el puntero de pila para orquestar la ejecución encadenada de instrucciones legítimas preexistentes del propio binario.",
    "skill": "Técnicas Avanzadas de Explotación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Seguridad Binaria",
    "subtopic": "Return-Oriented Programming (ROP)"
  },
  {
    "id": "inf-uni-79",
    "sectionId": 1,
    "number": 79,
    "text": "¿Qué función cumple el protocolo de 'Autenticación Mutua TLS' (mTLS - Mutual TLS) en la seguridad entre microservicios de una malla de servicios (Service Mesh)?",
    "options": [
      "Verifica criptográficamente tanto la identidad del servidor ante el cliente como la identidad del cliente ante el servidor mediante certificados digitales X.509 bidireccionales, además de cifrar todo el canal",
      "Obliga a los servidores a usar la misma contraseña maestra",
      "Deshabilita el cifrado de datos para acelerar la red",
      "Solo permite tráfico originado en computadoras con Linux"
    ],
    "correctIndex": 0,
    "explanation": "mTLS implementa la arquitectura Zero Trust en el tráfico este-oeste (microservicio a microservicio): ninguna llamada es de confianza sin autenticación criptográfica de ambos extremos mediante certificados.",
    "skill": "Arquitectura Zero Trust",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Seguridad en Comunicaciones Internas",
    "subtopic": "Mutual TLS (mTLS) en Service Meshes"
  },
  {
    "id": "inf-uni-80",
    "sectionId": 1,
    "number": 80,
    "text": "¿Qué es la 'Ingeniería del Caos' (Chaos Engineering, popularizada por Chaos Monkey de Netflix) en ingeniería de confiabilidad de sistemas (SRE)?",
    "options": [
      "La disciplina de experimentar e introducir fallos intencionales y controlados en entornos de producción (ej. apagar instancias al azar o inyectar latencia de red) para verificar empíricamente la capacidad de auto-recuperación y resiliencia del sistema",
      "Escribir código sin seguir ningún estándar arquitectónico",
      "Contratar piratas informáticos para que destruyan las bases de datos de la empresa",
      "Apagar el datacenter completo sin avisar a los clientes"
    ],
    "correctIndex": 0,
    "explanation": "Chaos Engineering postula que la única forma de tener certeza de que los mecanismos de alta disponibilidad (failover, circuit breakers) funcionan es poniéndolos a prueba de forma proactiva y controlada.",
    "skill": "Site Reliability Engineering (SRE)",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Confiabilidad de Sistemas a Gran Escala",
    "subtopic": "Chaos Engineering y Principios de Resiliencia"
  },
  {
    "id": "inf-uni-81",
    "sectionId": 1,
    "number": 81,
    "text": "En el Diseño Guiado por el Dominio (DDD - Domain-Driven Design de Eric Evans), ¿qué es el 'Lenguaje Ubicuo' (Ubiquitous Language)?",
    "options": [
      "Un vocabulario riguroso, común y sin ambigüedades compartido por igual entre desarrolladores de software y expertos del negocio, utilizado formalmente tanto en conversaciones cotidianas como en el código fuente de las entidades",
      "Un lenguaje de programación universal creado por la ONU",
      "Un dialecto especial de SQL que funciona en cualquier motor",
      "Un protocolo de traducción automática de texto en navegadores"
    ],
    "correctIndex": 0,
    "explanation": "El lenguaje ubicuo elimina la brecha de traducción entre los conceptos del negocio y las clases del software; los nombres de métodos, eventos de dominio y entidades deben reflejar la jerga exacta del dominio real.",
    "skill": "Diseño Guiado por el Dominio (DDD)",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Arquitectura de Software",
    "subtopic": "Lenguaje Ubicuo en DDD"
  },
  {
    "id": "inf-uni-82",
    "sectionId": 1,
    "number": 82,
    "text": "¿Qué es un 'Contexto Delimitado' (Bounded Context) en la arquitectura estratégica de DDD?",
    "options": [
      "Un límite contextual explícito dentro del cual un modelo de dominio y su lenguaje ubicuo específico tienen un significado inequívoco y consistente",
      "Una directiva de memoria que limita las variables a 10 megabytes",
      "Una cláusula en el contrato laboral de los ingenieros de software",
      "Un cortafuegos que bloquea el tráfico de países extranjeros"
    ],
    "correctIndex": 0,
    "explanation": "Un mismo concepto (ej. 'Usuario') puede tener significados y atributos totalmente diferentes en el Bounded Context de 'Ventas' que en el de 'Soporte al Cliente'; Bounded Context define los límites donde cada modelo es soberano.",
    "skill": "Arquitectura Estratégica en DDD",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Domain-Driven Design",
    "subtopic": "Bounded Contexts (Contextos Delimitados)"
  },
  {
    "id": "inf-uni-83",
    "sectionId": 1,
    "number": 83,
    "text": "En DDD táctico, ¿cuál es la diferencia conceptual entre una 'Entidad' (Entity) y un 'Objeto de Valor' (Value Object)?",
    "options": [
      "Una Entidad se define por su identidad única y continua que persiste a lo largo del tiempo aunque sus atributos cambien; un Value Object se define exclusivamente por sus atributos y es estrictamente inmutable sin identidad propia",
      "Las entidades solo existen en bases de datos relacionales y los value objects en memoria caché",
      "Una entidad es una variable primitiva y un value object es un archivo binario",
      "No existe ninguna diferencia arquitectónica"
    ],
    "correctIndex": 0,
    "explanation": "Dos objetos de valor (ej. Dirección('Av. Amazonas', 'Quito') o Dinero(50, 'USD')) son completamente idénticos e intercambiables si sus atributos coinciden; dos Entidades Cliente con el mismo nombre son distintas si difieren en su ID.",
    "skill": "Modelado de Dominio Táctico",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Patrones Tácticos de DDD",
    "subtopic": "Entidades vs Objetos de Valor (Value Objects)"
  },
  {
    "id": "inf-uni-84",
    "sectionId": 1,
    "number": 84,
    "text": "¿Cuál es la regla de integridad fundamental que gobierna a un 'Agregado' (Aggregate) y a su 'Raíz de Agregado' (Aggregate Root) en DDD?",
    "options": [
      "Todo acceso o modificación a los objetos internos del agregado debe canalizarse exclusivamente a través del Aggregate Root, quien es el único responsable de salvaguardar las invariantes de negocio del conjunto",
      "El agregado debe estar escrito en un único archivo de menos de 100 líneas",
      "Los agregados deben guardarse siempre en tablas no normalizadas",
      "Ningún objeto del agregado puede contener variables numéricas"
    ],
    "correctIndex": 0,
    "explanation": "El Aggregate Root actúa como una frontera transaccional de consistencia; los objetos externos solo pueden tener referencias directas al Root, protegiendo las reglas de consistencia de sus hijos.",
    "skill": "Diseño de Invariantes de Negocio",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Patrones Tácticos de DDD",
    "subtopic": "Agregados y Aggregate Roots"
  },
  {
    "id": "inf-uni-85",
    "sectionId": 1,
    "number": 85,
    "text": "¿Qué principio arquitectónico postula la 'Arquitectura Hexagonal' (Puertos y Adaptadores de Alistair Cockburn) y la 'Clean Architecture' de Robert C. Martin?",
    "options": [
      "La Regla de Dependencia: las dependencias del código fuente solo pueden apuntar hacia adentro, aislando la lógica de negocio central de cualquier dependencia de frameworks, bases de datos o interfaces de usuario externas",
      "Que el código debe compilarse en seis procesadores simultáneamente",
      "Que las bases de datos deben estructurarse en seis tablas maestras",
      "Que las funciones deben recibir como máximo seis argumentos"
    ],
    "correctIndex": 0,
    "explanation": "El núcleo del dominio no conoce ni a la base de datos ni a HTTP; define abstracciones (Puertos/Interfaces). La infraestructura externa implementa estas abstracciones mediante Adaptadores (Repository implementando Puerto).",
    "skill": "Arquitectura de Software Limpia",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Arquitectura Hexagonal y Clean Architecture",
    "subtopic": "Regla de Dependencia y Puertos/Adaptadores"
  },
  {
    "id": "inf-uni-86",
    "sectionId": 1,
    "number": 86,
    "text": "¿En qué consiste el patrón arquitectónico 'CQRS' (Command Query Responsibility Segregation)?",
    "options": [
      "Separar completamente el modelo de escritura (Comandos que alteran el estado del sistema sin devolver datos complejos) del modelo de lectura (Consultas optimizadas para lectura de vistas sin efectos colaterales)",
      "Un algoritmo de ordenamiento de bases de datos relacionales",
      "Un protocolo de compresión de peticiones JSON",
      "La división de la memoria RAM en canales independientes"
    ],
    "correctIndex": 0,
    "explanation": "Al segregar lecturas de escrituras, cada modelo puede escalarse y optimizarse de manera independiente (ej. base de datos relacional normalizada para comandos y vistas desnormalizadas en Elasticsearch/Redis para queries).",
    "skill": "Patrones de Arquitectura Empresarial",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Patrón CQRS",
    "subtopic": "Segregación de Comandos y Consultas"
  },
  {
    "id": "inf-uni-87",
    "sectionId": 1,
    "number": 87,
    "text": "¿Qué paradigma arquitectónico 'Event Sourcing' (Aprovisionamiento de Eventos) reemplaza el almacenamiento tradicional del estado actual de una entidad?",
    "options": [
      "Almacenar cada cambio de estado como una secuencia inmutable de eventos de dominio históricos en un Event Store ordenado cronológicamente; el estado actual de la entidad se reconstruye re-reproduciendo sus eventos históricos",
      "Guardar los datos únicamente en la memoria de la tarjeta de video",
      "Sobreescribir el disco rígido en cada transacción para borrar historiales",
      "Reemplazar las bases de datos por archivos de audio MP3"
    ],
    "correctIndex": 0,
    "explanation": "Event Sourcing proporciona una pista de auditoría perfecta e inmutable (Audit Log nativo), soporte para consultas temporales ('¿cómo estaba la cuenta el 1 de marzo?') y reversiones sin pérdida de datos.",
    "skill": "Arquitectura Basada en Eventos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Event Sourcing",
    "subtopic": "Almacén de Eventos Inmutables"
  },
  {
    "id": "inf-uni-88",
    "sectionId": 1,
    "number": 88,
    "text": "¿Cómo protege el patrón de resiliencia 'Circuit Breaker' (Cortacircuitos de Michael Nygard) a una aplicación distribuida ante la degradación de un servicio dependiente?",
    "options": [
      "Monitorea los fallos: si superan un umbral, abre el circuito e interrumpe inmediatamente las llamadas subsiguientes devolviendo un error rápido (o fallback) sin esperar timeouts, permitiendo al servicio recuperarse antes de pasar a estado Semi-Abierto",
      "Apaga la energía eléctrica de los servidores con relés electromagnéticos",
      "Cancela la suscripción de internet de la empresa automáticamente",
      "Cierra la sesión de todos los usuarios conectados al instante"
    ],
    "correctIndex": 0,
    "explanation": "Tiene 3 estados: Closed (operación normal), Open (falla rápido para no saturar hilos con timeouts infinitos) y Half-Open (prueba con pocas peticiones de sondeo para verificar si el servicio externo ya sanó).",
    "skill": "Patrones de Resiliencia en Sistemas Distribuidos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Tolerancia a Fallos",
    "subtopic": "Patrón Circuit Breaker"
  },
  {
    "id": "inf-uni-89",
    "sectionId": 1,
    "number": 89,
    "text": "¿Cuál es el objetivo del patrón 'Bulkhead' (Mamparo) en la arquitectura de software tolerante a fallos?",
    "options": [
      "Aislar los recursos críticos (ej. grupos de hilos de ejecución o conexiones de bases de datos) en compartimentos estancos separados, de modo que el agotamiento de recursos en un servicio no provoque la caída en cascada de los demás componentes",
      "Aumentar el grosor de las paredes del centro de datos",
      "Crear copias en papel de los archivos binarios",
      "Instalar dos tarjetas de red en la misma computadora"
    ],
    "correctIndex": 0,
    "explanation": "Inspirado en los mamparos estancos de los barcos: si un compartimento se inunda (ej. llamadas lentas a un proveedor de pagos externo agotan su thread pool asignado), los demás compartimentos vitales continúan navegando normalmente.",
    "skill": "Aislamiento de Fallos en Sistemas Distribuidos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Patrones de Resiliencia",
    "subtopic": "Patrón Bulkhead (Aislamiento por Mamparos)"
  },
  {
    "id": "inf-uni-90",
    "sectionId": 1,
    "number": 90,
    "text": "¿En qué consiste la técnica de 'Feature Toggles' (o Feature Flags) en desarrollo y entrega continua?",
    "options": [
      "Permite habilitar o deshabilitar funcionalidades en tiempo de ejecución mediante condicionales gobernados por configuración externa sin necesidad de redesplegar el código fuente",
      "Una prueba de rendimiento que mide los fotogramas por segundo",
      "Un compilador que traduce código fuente a lenguaje ensamblador",
      "Un cable que conecta dos computadoras por puerto serie"
    ],
    "correctIndex": 0,
    "explanation": "Las Feature Flags desacoplan el despliegue del software (deployment) de la liberación de cara a los usuarios (release), facilitando Trunk-Based Development, pruebas A/B y despliegues canarios.",
    "skill": "Prácticas Modernas de Ingeniería de Software",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Gestión de Lanzamientos",
    "subtopic": "Feature Toggles / Feature Flags"
  },
  {
    "id": "inf-uni-91",
    "sectionId": 1,
    "number": 91,
    "text": "¿Qué postula la Ley de Conway acerca del diseño de sistemas de software en las organizaciones?",
    "options": [
      "Que las organizaciones que diseñan sistemas están condenadas inexorablemente a producir diseños que son copias exactas de las estructuras de comunicación de esas organizaciones",
      "Que la velocidad de los microprocesadores se duplica cada 18 meses",
      "Que el software siempre se expande hasta llenar toda la memoria RAM disponible",
      "Que el número de errores es directamente proporcional a las líneas de código"
    ],
    "correctIndex": 0,
    "explanation": "Melvin Conway observó en 1968 que si un equipo está dividido en 4 grupos aislados, inevitablemente construirán un compilador de 4 pases. Origina la 'Maniobra Inversa de Conway' (estructurar equipos según la arquitectura de software deseada).",
    "skill": "Sociología y Arquitectura de Software",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Leyes y Principios de la Ingeniería de Software",
    "subtopic": "Ley de Conway y Maniobra Inversa"
  },
  {
    "id": "inf-uni-92",
    "sectionId": 1,
    "number": 92,
    "text": "En sistemas de verificación formal de software, ¿cuál es el propósito de herramientas como TLA+ (creada por Leslie Lamport) o lenguajes como Coq?",
    "options": [
      "Especificar formalmente algoritmos y modelos matemáticos de sistemas para demostrar rigurosamente la ausencia de condiciones de carrera, interbloqueos y fallos de lógica antes de escribir código",
      "Generar interfaces gráficas de usuario en HTML y CSS",
      "Comprobar la velocidad de internet de los servidores",
      "Optimizar imágenes para motores de búsqueda SEO"
    ],
    "correctIndex": 0,
    "explanation": "TLA+ utiliza lógica matemática de primer orden y lógica temporal de acciones para verificar mediante Model Checking que un algoritmo distribuido o protocolo complejo jamás violará sus invariantes fundamentales.",
    "skill": "Métodos Formales en Computación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Verificación Formal",
    "subtopic": "Especificación Formal con TLA+"
  },
  {
    "id": "inf-uni-93",
    "sectionId": 1,
    "number": 93,
    "text": "¿Qué técnica de prueba 'Mutation Testing' (Pruebas de Mutación) evalúa la efectividad real de una suite de pruebas unitarias?",
    "options": [
      "Introduce pequeñas alteraciones deliberadas (mutantes, como cambiar un > por un >=) en el código fuente; si la suite de pruebas no falla ante el código alterado, el mutante 'sobrevive', revelando debilidades en la cobertura de las pruebas",
      "Mutar los datos de los usuarios en la base de datos",
      "Cambiar los nombres de las funciones al azar en producción",
      "Reescribir el programa en otro lenguaje cada semana"
    ],
    "correctIndex": 0,
    "explanation": "Mutation Testing mide la calidad semántica de los tests frente al engañoso porcentaje de cobertura de líneas (Code Coverage), verificando si los tests realmente evalúan las condiciones lógicas críticas.",
    "skill": "Control de Calidad Avanzado",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Evaluación de Pruebas Automatizadas",
    "subtopic": "Mutation Testing (Pruebas de Mutación)"
  },
  {
    "id": "inf-uni-94",
    "sectionId": 1,
    "number": 94,
    "text": "¿Qué principio de diseño de bases de datos 'Codd Normal Form' (Boyce-Codd Normal Form - BCNF) es una versión más estricta de 3NF?",
    "options": [
      "Toda dependencia funcional no trivial X -> Y debe tener como determinante a X siendo obligatoriamente una superclave de la tabla",
      "Todas las columnas deben ser de tipo texto",
      "La base de datos debe almacenar solo números primos",
      "No se permite el uso de sentencias SELECT"
    ],
    "correctIndex": 0,
    "explanation": "BCNF resuelve anomalías residuales en tablas que tienen múltiples claves candidatas compuestas superpuestas, asegurando que solo superclaves determinen a otros atributos.",
    "skill": "Teoría Relacional Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Normalización Relacional",
    "subtopic": "Forma Normal de Boyce-Codd (BCNF)"
  },
  {
    "id": "inf-uni-95",
    "sectionId": 1,
    "number": 95,
    "text": "¿Cuál es la función del 'Outbox Pattern' (Patrón Buzón de Salida Transaccional) al publicar eventos en sistemas distribuidos basados en eventos?",
    "options": [
      "Garantizar consistencia atómica entre la actualización de la base de datos local y la publicación del evento de dominio, guardando el evento en una tabla 'outbox' en la misma transacción de base de datos antes de que un proceso asíncrono lo despache al broker (Kafka/RabbitMQ)",
      "Borrar los correos salientes del servidor de correo",
      "Enviar mensajes SMS a los teléfonos de los usuarios",
      "Comprimir archivos en formato tar.gz antes de enviarlos"
    ],
    "correctIndex": 0,
    "explanation": "Evita la inconsistencia dual-write: si el broker de mensajería falla o se corta la red justo después de guardar en base de datos, el evento no se pierde porque reside de forma durable en la tabla outbox.",
    "skill": "Patrones de Arquitectura Asíncrona",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Integración Confiable de Mensajería",
    "subtopic": "Transactional Outbox Pattern"
  },
  {
    "id": "inf-uni-96",
    "sectionId": 1,
    "number": 96,
    "text": "¿Qué problema de concurrencia 'Thundering Herd' (Manada Atronadora) ocurre cuando expira una clave de caché altamente demandada en un sistema web de alto tráfico?",
    "options": [
      "Cientos o miles de peticiones concurrentes simultáneas descubren al mismo tiempo que la clave expiró y todas acuden inmediatamente a golpear a la base de datos para recalcularla, saturando y colapsando el servidor",
      "Una manada de procesos que bloquean el disco duro",
      "Un fallo en las tarjetas de sonido de los servidores",
      "La saturación de ventiladores por exceso de calor"
    ],
    "correctIndex": 0,
    "explanation": "Se mitiga mediante técnicas de 'Cache Stampede Prevention' como Mutex Locking (solo una petición calcula mientras las demás esperan) o regeneración probabilística temprana (XFetch).",
    "skill": "Ingeniería de Alto Tráfico y Rendimiento",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estrategias de Caché Distribuida",
    "subtopic": "Thundering Herd y Cache Stampede"
  },
  {
    "id": "inf-uni-97",
    "sectionId": 1,
    "number": 97,
    "text": "¿Qué garantiza el estándar IEEE 754 de coma flotante respecto a los valores especiales NaN (Not a Number)?",
    "options": [
      "Que cualquier comparación de igualdad que involucre a NaN (incluso 'NaN === NaN') se evalúa siempre estrictamente como falsa",
      "Que NaN es igual a cero",
      "Que NaN puede convertirse a números enteros sin error",
      "Que NaN no consume memoria en la unidad de coma flotante"
    ],
    "correctIndex": 0,
    "explanation": "Por especificación IEEE 754, NaN no es comparable con nada, ni siquiera consigo mismo; para verificar si un valor es NaN se debe utilizar funciones dedicadas como isNaN() o Number.isNaN().",
    "skill": "Aritmética de Computadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estándar IEEE 754",
    "subtopic": "Comportamiento del Valor Especial NaN"
  },
  {
    "id": "inf-uni-98",
    "sectionId": 1,
    "number": 98,
    "text": "¿Qué es un 'Write-Ahead Log' (WAL) y qué principio de durabilidad garantiza en motores de bases de datos?",
    "options": [
      "Un registro secuencial append-only en almacenamiento no volátil donde toda modificación se escribe y descarga físicamente a disco (fsync) ANTES de que los cambios se apliquen a las páginas de datos en memoria, garantizando recuperación total tras caídas",
      "Un archivo de texto donde los desarrolladores escriben notas antes de programar",
      "Un registro de logs que se borra cada 5 minutos para ahorrar espacio",
      "Un sistema de compresión de video en tiempo real"
    ],
    "correctIndex": 0,
    "explanation": "El principio fundamental de WAL es que ninguna página de datos modificada (dirty page) puede escribirse en disco hasta que los registros del log que describen los cambios hayan sido transferidos a almacenamiento estable.",
    "skill": "Arquitectura Interna de Bases de Datos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecanismos de Recuperación ARIES",
    "subtopic": "Write-Ahead Logging (WAL)"
  },
  {
    "id": "inf-uni-99",
    "sectionId": 1,
    "number": 99,
    "text": "¿En qué consiste el principio de diseño de software 'Tell, Don't Ask' (Di, no preguntes)?",
    "options": [
      "Instruir a los objetos para que ejecuten acciones con sus propios datos internos en lugar de consultarles su estado interno, extraer sus datos y procesar la lógica fuera de ellos",
      "No hacer preguntas a los usuarios en las encuestas de satisfacción",
      "No solicitar contraseñas a los usuarios en el login",
      "Escribir comandos de terminal sin banderas interactivas"
    ],
    "correctIndex": 0,
    "explanation": "Promueve el encapsulamiento cohesivo: en vez de 'if (cuenta.getSaldo() >= monto) cuenta.setSaldo(cuenta.getSaldo() - monto)', se debe invocar 'cuenta.debitar(monto)', concentrando la lógica y validación dentro de la clase.",
    "skill": "Principios de Diseño Orientado a Objetos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Diseño Orientado a Objetos",
    "subtopic": "Principio Tell, Don't Ask"
  },
  {
    "id": "inf-uni-100",
    "sectionId": 1,
    "number": 100,
    "text": "¿Qué problema fundamental de consistencia en arquitecturas CQRS con Event Sourcing resuelve el concepto de 'Consistencia Eventual' (Eventual Consistency)?",
    "options": [
      "Reconocer que el modelo de lectura (Read Model / Proyecciones) puede reflejar los cambios con un leve desfase temporal de milisegundos respecto al modelo de escritura, convergiendo garantizadamente al estado correcto tan pronto se procesen los eventos",
      "Garantizar que los servidores nunca se sobrecalienten",
      "Hacer que el código JavaScript se ejecute a la velocidad de C++",
      "Asegurar que todas las consultas SQL devuelvan exactamente 10 filas"
    ],
    "correctIndex": 0,
    "explanation": "En arquitecturas altamente desacopladas y escalables horizontalmente, sacrificar la sincronía inmediata de lectura habilita un rendimiento de escritura masivo, garantizando que el sistema alcanzará la consistencia definitiva en ausencia de nuevas mutaciones.",
    "skill": "Modelos de Consistencia en Arquitecturas Modernas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Consistencia Eventual",
    "subtopic": "Consistencia Eventual en CQRS y Proyecciones"
  }
];
