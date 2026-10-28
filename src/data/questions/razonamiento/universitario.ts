import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE RAZONAMIENTO LÓGICO Y ABSTRACTO - NIVEL UNIVERSITARIO (100 Reactivos)
 */
export const RAZONAMIENTO_UNIVERSITARIO: Question[] = [
  {
    "id": "raz-uni-1",
    "sectionId": 3,
    "number": 81,
    "text": "En la teoría axiomática de conjuntos de Zermelo-Fraenkel (ZFC), ¿cuál es la paradoja lógica que demostró que el esquema ingenuo de comprensión irrestricta conducía a contradicciones formales insolubles?",
    "options": [
      "La paradoja de Banach-Tarski",
      "La paradoja de Russell",
      "La paradoja de Cantor",
      "La paradoja de Curry"
    ],
    "correctIndex": 1,
    "explanation": "Bertrand Russell demostró en 1901 que el conjunto R = {x | x ∉ x} conduce a la contradicción R ∈ R ↔ R ∉ R, refutando el axioma de comprensión irrestricta de Frege y fundamentando la axiomatización rigurosa de Zermelo-Fraenkel.",
    "skill": "Fundamentos Epistemológicos de las Matemáticas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría Axiomática de Conjuntos",
    "subtopic": "Paradoja de Russell y ZFC"
  },
  {
    "id": "raz-uni-2",
    "sectionId": 3,
    "number": 82,
    "text": "En la lógica matemática de primer orden, ¿qué establece el Primer Teorema de Incompletitud de Kurt Gödel (1931)?",
    "options": [
      "Que todo sistema formal axiomático consistente que contenga a la aritmética elemental es capaz de demostrar la verdad o falsedad de todas sus proposiciones.",
      "Que en cualquier sistema axiomático recursivo, consistente y suficientemente rico para incluir la aritmética de Peano, existen proposiciones verdaderas que son indemostrables dentro del propio sistema.",
      "Que los números reales son numerables.",
      "Que toda máquina de Turing siempre se detiene en un número finito de pasos."
    ],
    "correctIndex": 1,
    "explanation": "Gödel demostró mediante la aritmetización de la sintaxis (números de Gödel) que ningún sistema formal consistente que cubra la aritmética puede ser completo: siempre existen verdades aritméticas que no admiten deducción formal dentro del cálculo axiomático.",
    "skill": "Metamatemática y Teoremas de Gödel",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Incompletitud de Gödel"
  },
  {
    "id": "raz-uni-3",
    "sectionId": 3,
    "number": 83,
    "text": "En la teoría de complejidad computacional, ¿cómo se define la clase de problemas NP-completo?",
    "options": [
      "Problemas resolubles en tiempo polinomial determinista O(n^k).",
      "Problemas que pertenecen a NP y a los cuales se puede reducir en tiempo polinomial cualquier otro problema perteneciente a NP.",
      "Problemas indecidibles por una máquina universal de Turing.",
      "Problemas que solo admiten soluciones exponenciales O(2^n)."
    ],
    "correctIndex": 1,
    "explanation": "Por el Teorema de Cook-Levin, un problema L es NP-completo si L ∈ NP y para todo L' ∈ NP existe una reducción polinomial de Karp tal que L' ≤_p L. Son los problemas computacionales más difíciles dentro de NP.",
    "skill": "Complejidad Computacional Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias de la Computación Teórica",
    "subtopic": "Clases P, NP y Reducciones de Karp"
  },
  {
    "id": "raz-uni-4",
    "sectionId": 3,
    "number": 84,
    "text": "En la teoría de juegos no cooperativos, ¿cómo se define formalmente un equilibrio de Nash para n jugadores?",
    "options": [
      "Una combinación de estrategias donde se maximiza la suma colectiva de pagos sociales.",
      "Un perfil estratégico en el cual ningún jugador tiene incentivos para desviar unilateralmente su estrategia mientras los demás mantengan las suyas.",
      "Una estrategia pura que domina estrictamente a todas las demás para cualquier jugada ajena.",
      "Un juego de suma cero donde todos los pagos finales son nulos."
    ],
    "correctIndex": 1,
    "explanation": "En un equilibrio de Nash, cada jugador elige la mejor respuesta posible a las estrategias seleccionadas por sus rivales, por lo que ninguna desviación unilateral produce un pago estrictamente mayor.",
    "skill": "Teoría de Juegos y Optimización Estratégica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Equilibrio de Nash"
  },
  {
    "id": "raz-uni-5",
    "sectionId": 3,
    "number": 85,
    "text": "En inferencia bayesiana avanzada, si la probabilidad a priori P(θ) pertenece a la misma familia de distribuciones de probabilidad que la distribución a posteriori P(θ|x), ¿cómo se denomina técnicamente a dicha familia a priori?",
    "options": [
      "Distribución no informativa",
      "Priori conjugada",
      "Distribución de máxima entropía",
      "Verosimilitud marginal"
    ],
    "correctIndex": 1,
    "explanation": "En el paradigma estadístico bayesiano, una distribución a priori se denomina conjugada respecto a una función de verosimilitud dada cuando la distribución a posteriori resultante pertenece a la misma familia paramétrica.",
    "skill": "Estadística Bayesiana Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estadística Matemática",
    "subtopic": "Prioris Conjugadas"
  },
  {
    "id": "raz-uni-6",
    "sectionId": 3,
    "number": 86,
    "text": "En el álgebra lineal sobre espacios vectoriales de dimensión finita, ¿qué establece el Teorema de la Dimensión (Teorema del Rango-Nulidad) para una transformación lineal T: V → W?",
    "options": [
      "dim(V) = rango(T) + dim(W)",
      "dim(V) = dim(Ker(T)) + dim(Im(T))",
      "dim(Ker(T)) = dim(Im(T))",
      "rango(T) = dim(V) × dim(W)"
    ],
    "correctIndex": 1,
    "explanation": "El Teorema Fundamental de las Transformaciones Lineales establece que para un espacio V de dimensión finita, dim(V) = nulidad(T) + rango(T), donde nulidad es dim(Ker(T)) y rango es dim(Im(T)).",
    "skill": "Espacios Vectoriales y Transformaciones Lineales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal Abstracta",
    "subtopic": "Teorema del Rango-Nulidad"
  },
  {
    "id": "raz-uni-7",
    "sectionId": 3,
    "number": 87,
    "text": "En topología general, ¿cómo se define formalmente que un espacio topológico X sea compacto según el criterio de Heine-Borel/Bourbaki?",
    "options": [
      "Que todo subconjunto propio de X sea cerrado y acotado.",
      "Que de todo recubrimiento abierto de X se pueda extraer un subrecubrimiento finito.",
      "Que no contenga agujeros homológicos.",
      "Que exista una biyección continua con el conjunto de los números enteros."
    ],
    "correctIndex": 1,
    "explanation": "La definición universal de compacidad topológica establece que para cualquier colección {U_α} de conjuntos abiertos tal que X ⊆ ⋃ U_α, existe un subconjunto finito de índices {α₁, ..., α_k} que todavía recubre a X.",
    "skill": "Topología General y Espacios Métricos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Matemático y Topología",
    "subtopic": "Compacidad Topológica"
  },
  {
    "id": "raz-uni-8",
    "sectionId": 3,
    "number": 88,
    "text": "En teoría de grafos, ¿cuál es la condición necesaria y suficiente establecida por Leonhard Euler para que un grafo conexo no dirigido admita un circuito euleriano cerrado?",
    "options": [
      "Que el grafo sea bipartito completo.",
      "Que todos los vértices del grafo tengan grado par.",
      "Que contenga exactamente dos vértices de grado impar.",
      "Que el número de aristas sea igual al número de vértices menos uno."
    ],
    "correctIndex": 1,
    "explanation": "En el famoso problema de los puentes de Königsberg (1736), Euler demostró que un grafo conexo tiene un circuito cerrado que recorre cada arista exactamente una vez si y solo si todo vértice tiene valencia (grado) estrictamente par.",
    "skill": "Teoría de Grafos y Topología Combinatoria",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Matemática Discreta",
    "subtopic": "Grafos Eulerianos"
  },
  {
    "id": "raz-uni-9",
    "sectionId": 3,
    "number": 89,
    "text": "En física teórica y termodinámica estadística, ¿cómo se relaciona matemáticamente la entropía macroscópica S con el número de microestados accesibles Ω según la fórmula de Ludwig Boltzmann grabada en su tumba?",
    "options": [
      "S = k_B · ln(Ω)",
      "S = k_B · Ω²",
      "S = ħ · dΩ/dt",
      "S = Q / T²"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación fundamental de la mecánica estadística postula que la entropía termodinámica S es proporcional al logaritmo natural del volumen del espacio fásico accesible: S = k_B ln Ω, donde k_B es la constante de Boltzmann.",
    "skill": "Mecánica Estadística y Entropía Fásica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Estadística",
    "subtopic": "Definición Microcanónica de Entropía"
  },
  {
    "id": "raz-uni-10",
    "sectionId": 3,
    "number": 90,
    "text": "En la teoría de la computabilidad, ¿qué demostró Alan Turing en 1936 respecto al Problema de la Parada (Halting Problem)?",
    "options": [
      "Que toda máquina de Turing determinista puede simularse en tiempo sublineal.",
      "Que es formalmente indecidible: no existe un algoritmo computable universal capaz de determinar si un programa arbitrario se detendrá o entrará en bucle infinito.",
      "Que la aritmética es finitamente axiomatizable.",
      "Que P = NP para grafos planos."
    ],
    "correctIndex": 1,
    "explanation": "Mediante un argumento de diagonalización cantoreana autoreferencial, Turing demostró que suponer la existencia de un procedimiento algorítmico universal H(M, w) que decida la detención conduce a una contradicción lógica insuperable.",
    "skill": "Teoría de la Computabilidad y Decidibilidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Informática Teórica",
    "subtopic": "Problema de la Parada de Turing"
  },
  {
    "id": "raz-uni-11",
    "sectionId": 3,
    "number": 91,
    "text": "En teoría de la información de Claude Shannon, ¿cuál es la entropía de información H(X) en bits de una fuente binaria con probabilidades p = 0.5 y (1 - p) = 0.5?",
    "options": [
      "0 bits",
      "0.5 bits",
      "1 bit",
      "2 bits"
    ],
    "correctIndex": 2,
    "explanation": "Fórmula de Shannon: H(X) = - ∑ p_i log₂(p_i) = - [0.5 log₂(0.5) + 0.5 log₂(0.5)] = - [0.5(-1) + 0.5(-1)] = 1 bit de máxima incertidumbre.",
    "skill": "Teoría de la Información de Shannon",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cibernética y Comunicaciones",
    "subtopic": "Entropía de la Información"
  },
  {
    "id": "raz-uni-12",
    "sectionId": 3,
    "number": 92,
    "text": "En la filosofía de la ciencia de Karl Popper, ¿cuál es el criterio demarcatorio distintivo que separa el conocimiento científico empírico de la metafísica o las pseudociencias?",
    "options": [
      "El verificacionismo inductivo exhaustivo",
      "El principio de falsabilidad o refutabilidad empírica",
      "El consenso de pares académicos",
      "La formalización axiomática geométrica"
    ],
    "correctIndex": 1,
    "explanation": "Popper sostuvo que un enunciado o teoría adquiere estatus científico si formula predicciones empíricas arriesgadas susceptibles de ser contrastadas y potencialmente refutadas o falsadas por observaciones empíricas.",
    "skill": "Filosofía de la Ciencia y Epistemología",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Epistemología Científica",
    "subtopic": "Falsacionismo Popperiano"
  },
  {
    "id": "raz-uni-13",
    "sectionId": 3,
    "number": 93,
    "text": "En el cálculo de variaciones, ¿qué ecuación diferencial fundamental enuncia las condiciones de extremalidad para que una funcional integral J[y] = ∫ L(x, y, y') dx sea estacionaria?",
    "options": [
      "Ecuación de Poisson",
      "Ecuación de Euler-Lagrange",
      "Ecuación de Navier-Stokes",
      "Ecuación de Hamilton-Jacobi"
    ],
    "correctIndex": 1,
    "explanation": "La condición necesaria de primer orden para la anulación de la primera variación funcional δJ = 0 conduce a la célebre ecuación de Euler-Lagrange: ∂L/∂y - d/dx(∂L/∂y') = 0.",
    "skill": "Cálculo Variacional y Mecánica Analítica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Matemática Aplicada",
    "subtopic": "Ecuaciones de Euler-Lagrange"
  },
  {
    "id": "raz-uni-14",
    "sectionId": 3,
    "number": 94,
    "text": "En mecánica cuántica, ¿qué consecuencia fundamental deduce el Teorema de No Clonación (No-cloning theorem) postulado por Wootters, Zurek y Dieks?",
    "options": [
      "Que las partículas cuánticas decaen exponencialmente.",
      "Que es físicamente imposible crear una copia idéntica e independiente de un estado cuántico superpuesto desconocido sin destruirlo.",
      "Que la energía del vacío debe ser idénticamente cero.",
      "Que el espín electrónico solo toma valores enteros."
    ],
    "correctIndex": 1,
    "explanation": "Debido a la estricta linealidad de los operadores unitarios de evolución en el espacio de Hilbert cuántico U(ψ ⊗ |0⟩) = ψ ⊗ ψ, es algebraicamente imposible que un operador clone estados no ortogonales arbitrarios.",
    "skill": "Información Cuántica y Mecánica Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Cuántica",
    "subtopic": "Teorema de No Clonación"
  },
  {
    "id": "raz-uni-15",
    "sectionId": 3,
    "number": 95,
    "text": "En teoría de números, ¿qué conjetura fundamental afirma que todo número entero par estrictamente mayor que 2 puede expresarse como la suma de dos números primos?",
    "options": [
      "La Hipótesis de Riemann",
      "La Conjetura de Goldbach",
      "El Último Teorema de Fermat",
      "La Conjetura de Collatz"
    ],
    "correctIndex": 1,
    "explanation": "La Conjetura Fuerte de Christian Goldbach (formulada en 1742 en carta a Euler) postula que 2n = p + q para todo n > 1 con p, q primos, manteniéndose como uno de los grandes problemas abiertos.",
    "skill": "Teoría Analítica de Números",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Aritmética Superior",
    "subtopic": "Conjetura de Goldbach"
  },
  {
    "id": "raz-uni-16",
    "sectionId": 3,
    "number": 96,
    "text": "En análisis real avanzado, ¿qué establece el Teorema del Valor Medio de Cauchy para dos funciones continuas f y g derivables en (a, b) con g'(x) ≠ 0?",
    "options": [
      "[f(b) - f(a)] / [g(b) - g(a)] = f'(c) / g'(c) para algún c ∈ (a, b)",
      "f(b) - f(a) = f'(c)(b - a) exclusivamente",
      "f(x) = g(x) en todo el intervalo",
      "La integral de f es igual a la derivada de g"
    ],
    "correctIndex": 0,
    "explanation": "El Teorema Generalizado de Cauchy extiende el Teorema de Lagrange: existe c en (a, b) tal que [f(b) - f(a)] g'(c) = [g(b) - g(a)] f'(c), constituyendo el fundamento analítico de la Regla de L'Hôpital.",
    "skill": "Cálculo Diferencial Teórico Riguroso",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Real",
    "subtopic": "Teorema de Cauchy y L'Hôpital"
  },
  {
    "id": "raz-uni-17",
    "sectionId": 3,
    "number": 97,
    "text": "En criptografía asimétrica moderna, ¿en qué problema matemático de alta complejidad computacional se basa la seguridad del criptosistema RSA?",
    "options": [
      "En la dificultad de calcular logaritmos discretos en curvas elípticas.",
      "En la intratabilidad computacional de factorizar números enteros compuestos muy grandes en sus factores primos.",
      "En el ordenamiento de matrices dispersas.",
      "En la inversión de transformadas rápidas de Fourier."
    ],
    "correctIndex": 1,
    "explanation": "La seguridad de RSA descansa en el problema de factorización de enteros: mientras multiplicar dos primos p y q es instantáneo O(log² n), recuperar p y q a partir de su producto n = pq no tiene algoritmo polinomial clásico conocido.",
    "skill": "Criptografía y Complejidad Aritmética",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Criptología y Seguridad",
    "subtopic": "Factorización de Primos y RSA"
  },
  {
    "id": "raz-uni-18",
    "sectionId": 3,
    "number": 98,
    "text": "En optimización convexa, ¿cómo se denominan formalmente las condiciones necesarias y suficientes para la optimalidad global de un problema de programación no lineal diferenciable con restricciones de desigualdad?",
    "options": [
      "Condiciones de Cauchy-Riemann",
      "Condiciones de Karush-Kuhn-Tucker (KKT)",
      "Condiciones de contorno de Dirichlet",
      "Ecuaciones de Navier"
    ],
    "correctIndex": 1,
    "explanation": "Las condiciones KKT generalizan los multiplicadores de Lagrange a problemas con restricciones de desigualdad (g_i(x) ≤ 0) mediante condiciones de holgura complementaria (μ_i g_i(x) = 0).",
    "skill": "Optimización Convexa y Multiplicadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Investigación de Operaciones",
    "subtopic": "Condiciones KKT"
  },
  {
    "id": "raz-uni-19",
    "sectionId": 3,
    "number": 99,
    "text": "En la teoría de probabilidades axiomática de Andréi Kolmogórov, ¿qué estructura algebraica sobre los subconjuntos del espacio muestral Ω se requiere para definir rigurosamente una medida de probabilidad P?",
    "options": [
      "Un grupo abeliano",
      "Una σ-álgebra (sigma-álgebra)",
      "Un anillo conmutativo",
      "Un retículo booleano finito"
    ],
    "correctIndex": 1,
    "explanation": "Los axiomas de Kolmogórov (1933) exigen que los sucesos observables formen una σ-álgebra F cerrada bajo complementación y uniones numerables, sobre la cual la medida P cumple P(Ω)=1 y aditividad numerable.",
    "skill": "Teoría de la Medida y Probabilidad Axiomática",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de la Medida",
    "subtopic": "Axiomática de Kolmogórov"
  },
  {
    "id": "raz-uni-20",
    "sectionId": 3,
    "number": 100,
    "text": "En neurocomputación y modelos de aprendizaje profundo (Deep Learning), ¿a qué fenómeno matemático adverso se debe que las redes neuronales recurrentes clásicas (RNN) no puedan retener dependencias temporales de muy largo plazo?",
    "options": [
      "Al sobrecalentamiento térmico del silicio.",
      "Al problema del desvanecimiento o explosión del gradiente (vanishing / exploding gradient) al propagar derivadas por retropropagación a través del tiempo.",
      "A la convergencia instantánea a mínimos globales.",
      "A la ausencia de capas convolucionales."
    ],
    "correctIndex": 1,
    "explanation": "Al aplicar backpropagation through time (BPTT), la regla de la cadena multiplica matrices jacobianas W repetidas veces. Si los valores propios son menores que 1, el gradiente decae exponencialmente a 0, impidiendo la actualización de pesos en pasos iniciales.",
    "skill": "Inteligencia Artificial Teórica y Aprendizaje Profundo",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Aprendizaje Automático",
    "subtopic": "Desvanecimiento del Gradiente en RNN"
  },
  {
    "id": "raz-uni-21",
    "sectionId": 3,
    "number": 21,
    "text": "¿Cuál es el enunciado medular del Primer Teorema de Incompletitud de Kurt Gödel (1931)?",
    "options": [
      "En cualquier sistema formal axiomático consistente capaz de describir la aritmética básica de Peano, existen proposiciones verdaderas que no pueden ser demostradas dentro del propio sistema",
      "Todo sistema formal es necesariamente inconsistente",
      "La geometría euclidiana es incompleta",
      "Todas las verdades matemáticas son demostrables por algoritmos finitos"
    ],
    "correctIndex": 0,
    "explanation": "Gödel construyó formalmente una sentencia autorreferencial que afirma 'no soy demostrable'; si el sistema es consistente, la sentencia es verdadera pero indemostrable dentro de él.",
    "skill": "Teoremas de incompletitud",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Primer Teorema de Gödel"
  },
  {
    "id": "raz-uni-22",
    "sectionId": 3,
    "number": 22,
    "text": "¿Qué demuestra el Segundo Teorema de Incompletitud de Gödel respecto a la consistencia de una teoría aritmética?",
    "options": [
      "Un sistema formal consistente no puede demostrar su propia consistencia utilizando únicamente las herramientas deductivas de su propio lenguaje",
      "La consistencia de un sistema se demuestra fácilmente por inducción",
      "Ningún sistema puede ser consistente",
      "La aritmética es decidible"
    ],
    "correctIndex": 0,
    "explanation": "La proposición que codifica formalmente 'este sistema es consistente' (Consis) es una de las fórmulas indemostrables en cualquier sistema consistente que incluya Peano.",
    "skill": "Consistencia de sistemas formales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Segundo Teorema de Gödel"
  },
  {
    "id": "raz-uni-23",
    "sectionId": 3,
    "number": 23,
    "text": "En la técnica de Gödelización empleada en metamatemática, ¿qué mecanismo permite representar enunciados sobre fórmulas dentro de la propia aritmética?",
    "options": [
      "La asignación biunívoca de un número natural único (Número de Gödel) a cada símbolo, fórmula y secuencia de demostración mediante factorización en números primos",
      "El cálculo de matrices invertibles",
      "La geometría analítica cartesiana",
      "El uso de números complejos imaginarios"
    ],
    "correctIndex": 0,
    "explanation": "Al codificar la sintaxis formal como potencias de números primos, las propiedades metamatemáticas de demostrabilidad se traducen en relaciones aritméticas ordinarias.",
    "skill": "Numeración de Gödel",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Aritmetización de la sintaxis"
  },
  {
    "id": "raz-uni-24",
    "sectionId": 3,
    "number": 24,
    "text": "¿Qué demostró el Teorema de Church-Turing (indecidibilidad del Entscheidungsproblem)?",
    "options": [
      "Que no existe ningún algoritmo general universal capaz de decidir la validez de cualquier fórmula de la lógica de predicados de primer orden",
      "Que las computadoras nunca podrán calcular multiplicaciones",
      "Que la lógica proposicional no tiene tablas de verdad",
      "Que todos los problemas de cálculo son solubles en tiempo lineal"
    ],
    "correctIndex": 0,
    "explanation": "Church y Turing demostraron independientemente que el cálculo de predicados es semidecidible pero algorítmicamente indecidible en general.",
    "skill": "Indecidibilidad del Entscheidungsproblem",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias de la Computación Teórica",
    "subtopic": "Teorema de Church-Turing"
  },
  {
    "id": "raz-uni-25",
    "sectionId": 3,
    "number": 25,
    "text": "En teoría de la computabilidad, ¿qué afirma el Teorema de la Parada (Halting Problem) demostrado por Alan Turing en 1936?",
    "options": [
      "Es matemáticamente imposible diseñar un programa general que determine para cualquier programa y entrada arbitraria si este terminará o entrará en bucle infinito",
      "Todas las máquinas de Turing terminan siempre en tiempo polinomial",
      "Las máquinas de Turing no pueden simular funciones recursivas",
      "El tiempo de ejecución siempre se puede predecir analíticamente"
    ],
    "correctIndex": 0,
    "explanation": "Turing utilizó un argumento diagonal de autorreferencia y contradicción para demostrar la indecidibilidad estricta del problema de la parada.",
    "skill": "Problema de la parada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Informática Teórica",
    "subtopic": "Indecidibilidad"
  },
  {
    "id": "raz-uni-26",
    "sectionId": 3,
    "number": 26,
    "text": "¿Qué postula el Teorema de Rice sobre las propiedades semánticas no triviales de los programas computacionales?",
    "options": [
      "Cualquier propiedad extensional no trivial sobre el lenguaje reconocido por una Máquina de Turing es algorítmicamente indecidible",
      "Todas las propiedades de los compiladores son computables",
      "El tamaño del código fuente siempre es decidible",
      "Los lenguajes regulares son universales"
    ],
    "correctIndex": 0,
    "explanation": "El Teorema de Rice generaliza el problema de la parada: verificar si un programa computa una función determinada o carece de errores semánticos es intrínsecamente indecidible.",
    "skill": "Teorema de Rice",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias de la Computación Teórica",
    "subtopic": "Computabilidad"
  },
  {
    "id": "raz-uni-27",
    "sectionId": 3,
    "number": 27,
    "text": "En teoría de la complejidad computacional, ¿cómo se define la clase de complejidad NP?",
    "options": [
      "La clase de problemas de decisión cuyas soluciones propuestas pueden ser verificadas en tiempo polinomial por una Máquina de Turing determinista",
      "Problemas que no pueden resolverse en tiempo polinomial",
      "Problemas numéricos probabilísticos",
      "Problemas que requieren tiempo exponencial para ser verificados"
    ],
    "correctIndex": 0,
    "explanation": "NP significa 'Non-deterministic Polynomial time': una conjetura o certificado de solución se comprueba en tiempo polinomial O(n^k).",
    "skill": "Clases de complejidad P vs NP",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias de la Computación Teórica",
    "subtopic": "Complejidad computacional"
  },
  {
    "id": "raz-uni-28",
    "sectionId": 3,
    "number": 28,
    "text": "¿Qué estableció el Teorema de Cook-Levin (1971) como hito fundacional de la teoría de la complejidad?",
    "options": [
      "Demostró que el problema de satisfacibilidad booleana (SAT) es NP-completo",
      "Probó que P = NP de manera concluyente",
      "Demostró que la factorización de enteros es de clase P",
      "Probó que no existen problemas NP"
    ],
    "correctIndex": 0,
    "explanation": "Cook demostró que cualquier problema en NP puede reducirse polinomialmente a SAT, estableciendo el primer problema NP-completo de la historia.",
    "skill": "Teorema de Cook-Levin",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias de la Computación Teórica",
    "subtopic": "NP-Completitud"
  },
  {
    "id": "raz-uni-29",
    "sectionId": 3,
    "number": 29,
    "text": "Si un problema L es NP-completo y se lograse encontrar un algoritmo determinista que lo resuelva en tiempo polinomial O(n^k), ¿cuál sería la consecuencia teórica?",
    "options": [
      "Se demostraría inmediatamente que P = NP, y todos los problemas en NP tendrían solución en tiempo polinomial",
      "Solo ese problema específico pertenecería a P",
      "Se demostraría que P ≠ NP",
      "La criptografía de clave pública sería más segura"
    ],
    "correctIndex": 0,
    "explanation": "Por la propiedad de reducción polinomial universal, resolver un solo problema NP-completo en tiempo polinomial colapsaría toda la clase NP en P.",
    "skill": "Consecuencias del problema P vs NP",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias de la Computación Teórica",
    "subtopic": "Colapso P = NP"
  },
  {
    "id": "raz-uni-30",
    "sectionId": 3,
    "number": 30,
    "text": "¿En qué nivel de la Jerarquía de Chomsky se sitúan las gramáticas libres de contexto que estructuran los lenguajes de programación y son reconocidas por autómatas de pila?",
    "options": [
      "Tipo 2: Gramáticas libres de contexto (autómatas a pila)",
      "Tipo 3: Gramáticas regulares (autómatas finitos)",
      "Tipo 1: Gramáticas sensibles al contexto",
      "Tipo 0: Lenguajes recursivamente enumerables"
    ],
    "correctIndex": 0,
    "explanation": "Chomsky clasificó formalmente los lenguajes: Tipo 3 (regulares), Tipo 2 (libres de contexto, parsers con pila), Tipo 1 (sensibles al contexto), Tipo 0 (Turing).",
    "skill": "Jerarquía de Chomsky",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias de la Computación Teórica",
    "subtopic": "Teoría de autómatas"
  },
  {
    "id": "raz-uni-31",
    "sectionId": 3,
    "number": 31,
    "text": "¿Qué es una Máquina de Turing no determinista (NTM)?",
    "options": [
      "Un modelo teórico de computación en el que la función de transición permite múltiples configuraciones o bifurcaciones de cálculo simultáneas para un mismo estado y símbolo",
      "Una computadora que funciona con componentes mecánicos aleatorios",
      "Una máquina que no tiene cinta de memoria",
      "Un procesador cuántico comercial"
    ],
    "correctIndex": 0,
    "explanation": "La NTM explora ramas computacionales paralelas de forma abstracta, aceptando si existe al menos una rama exitosa en el árbol de ejecución.",
    "skill": "Modelos de computación no deterministas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias de la Computación Teórica",
    "subtopic": "Máquinas de Turing"
  },
  {
    "id": "raz-uni-32",
    "sectionId": 3,
    "number": 32,
    "text": "En la teoría de la demostración formal, ¿qué expresa el Teorema de Completitud Semántica de Gödel para la lógica de primer orden (1929)?",
    "options": [
      "Una fórmula de primer orden es formalmente demostrable por deducción si y solo si es lógicamente válida en todas las estructuras e interpretaciones posibles (⊢ φ ⇔ ⊨ φ)",
      "Que la lógica de primer orden es inconsistente",
      "Que existen fórmulas válidas sin modelo semántico",
      "Que todos los números reales son racionales"
    ],
    "correctIndex": 0,
    "explanation": "A diferencia de la incompletitud aritmética de 1931, el cálculo de predicados puro de primer orden es completo: la verdad semántica coincide con la deducibilidad sintáctica.",
    "skill": "Teorema de Completitud de Gödel",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Completitud semántica"
  },
  {
    "id": "raz-uni-33",
    "sectionId": 3,
    "number": 33,
    "text": "¿Qué establece el Teorema de Compacidad para la lógica de primer orden?",
    "options": [
      "Un conjunto infinito de fórmulas tiene un modelo si y solo si todo subconjunto finito de ese conjunto tiene un modelo",
      "Las fórmulas lógicas ocupan un espacio de memoria finito",
      "Todos los modelos son finitos",
      "Las contradicciones son locales"
    ],
    "correctIndex": 0,
    "explanation": "La compacidad es consecuencia directa de la completitud y es una herramienta fundamental en teoría de modelos para construir modelos no estándar del análisis y la aritmética.",
    "skill": "Teorema de Compacidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Teoría de modelos"
  },
  {
    "id": "raz-uni-34",
    "sectionId": 3,
    "number": 34,
    "text": "En la teoría de modelos de la lógica de primer orden, el Teorema de Löwenheim-Skolem ascendente y descendente garantiza que:",
    "options": [
      "Si una teoría de primer orden tiene un modelo infinito, tiene modelos de cualquier cardinalidad infinita mayor o igual",
      "Solo existen modelos finitos para cualquier teoría",
      "Todos los modelos infinitos son isomorfos entre sí",
      "No pueden existir números irracionales en modelos de primer orden"
    ],
    "correctIndex": 0,
    "explanation": "Esto genera la Paradoja de Skolem: la teoría axiomática de conjuntos ZFC (que prueba que existen conjuntos no numerables) posee ella misma un modelo numerable.",
    "skill": "Teorema de Löwenheim-Skolem",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Teoría de modelos"
  },
  {
    "id": "raz-uni-35",
    "sectionId": 3,
    "number": 35,
    "text": "¿En qué consiste la célebre Paradoja de Skolem en los fundamentos de las matemáticas?",
    "options": [
      "ZFC demuestra la existencia de conjuntos no numerables, sin embargo, por Löwenheim-Skolem, ZFC tiene un modelo numerable en el cual todos sus elementos son contables desde el exterior",
      "Que los conjuntos no pueden contener números primos",
      "Que no existen modelos para la aritmética",
      "Que Cantor cometió un error algebraico"
    ],
    "correctIndex": 0,
    "explanation": "La noción de no numerabilidad es interna al modelo: el modelo numerable no contiene dentro de sí la biyección que emparejaría el conjunto con los naturales.",
    "skill": "Paradoja de Skolem",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Metamatemática"
  },
  {
    "id": "raz-uni-36",
    "sectionId": 3,
    "number": 36,
    "text": "¿Cuál es el enunciado formal del Axioma de Elección (AC) en la teoría de conjuntos ZFC?",
    "options": [
      "Para cualquier familia de conjuntos no vacíos y disjuntos dos a dos, existe un conjunto que contiene exactamente un elemento de cada conjunto de la familia",
      "Todo conjunto infinito tiene cardinalidad finita",
      "Existe un conjunto universal que contiene a todos los conjuntos",
      "Todos los conjuntos están bien ordenados en el tiempo"
    ],
    "correctIndex": 0,
    "explanation": "El axioma postula la existencia de una función de elección universal simultánea aun cuando no exista una regla constructiva finita para seleccionarlos.",
    "skill": "Axioma de Elección",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría Axiomática de Conjuntos",
    "subtopic": "ZFC"
  },
  {
    "id": "raz-uni-37",
    "sectionId": 3,
    "number": 37,
    "text": "¿Cuál de los siguientes principios matemáticos fundamentales es lógicamente equivalente al Axioma de Elección dentro de ZF?",
    "options": [
      "El Lema de Zorn (y el Teorema del Buen Orden de Zermelo)",
      "El Teorema Fundamental del Álgebra",
      "El Teorema de Pitágoras",
      "El Postulado de las Paralelas de Euclides"
    ],
    "correctIndex": 0,
    "explanation": "Zermelo demostró que AC es equivalente a que todo conjunto puede ser bien ordenado, y Kuratowski/Zorn demostraron su equivalencia con la existencia de elementos maximales.",
    "skill": "Equivalentes del Axioma de Elección",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría Axiomática de Conjuntos",
    "subtopic": "Lema de Zorn"
  },
  {
    "id": "raz-uni-38",
    "sectionId": 3,
    "number": 38,
    "text": "¿Qué afirma la Paradoja geométrica de Banach-Tarski (1924) demostrada a partir del Axioma de Elección?",
    "options": [
      "Una esfera sólida tridimensional puede descomponerse en un número finito de piezas disjuntas no medibles que, recomponiéndose solo con giros y traslaciones, forman dos esferas sólidas del mismo volumen que la original",
      "Que el volumen de un cono es igual al de una esfera",
      "Que los círculos pueden cuadrarse con regla y compás",
      "Que el espacio euclidiano no tiene 3 dimensiones"
    ],
    "correctIndex": 0,
    "explanation": "La paradoja desafía la intuición física demostrando la existencia de conjuntos no medibles en el sentido de Lebesgue en ℝ³ gracias a la naturaleza no constructiva de AC.",
    "skill": "Paradoja de Banach-Tarski",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de la Medida",
    "subtopic": "Conjuntos no medibles"
  },
  {
    "id": "raz-uni-39",
    "sectionId": 3,
    "number": 39,
    "text": "¿Por qué la construcción de la Paradoja de Banach-Tarski no es posible en el plano euclidiano ℝ²?",
    "options": [
      "Porque el grupo de isometrías directas del plano SO(2) ⋉ ℝ² es soluble y admite una medida finitamente aditiva invariante, a diferencia del grupo libre generado en SO(3)",
      "Porque los círculos no tienen grosor físico",
      "Porque en 2D no se aplica el Axioma de Elección",
      "Porque el plano carece de giros continuos"
    ],
    "correctIndex": 0,
    "explanation": "En ℝ³ el grupo de rotaciones contiene el grupo libre de dos generadores F₂, lo que permite la partición paradójica que en ℝ¹ y ℝ² está impedida topológicamente.",
    "skill": "Fundamentos de Banach-Tarski",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de la Medida",
    "subtopic": "Teoría geométrica de grupos"
  },
  {
    "id": "raz-uni-40",
    "sectionId": 3,
    "number": 40,
    "text": "En la teoría de la medida de Lebesgue, ¿qué es un Conjunto de Vitali?",
    "options": [
      "Un subconjunto del intervalo real [0, 1] que no puede ser medido por la medida de Lebesgue ordinaria (es no medible)",
      "Un conjunto infinito numerable",
      "Un conjunto abierto y cerrado simultáneamente",
      "Un fractal de dimensión Hausdorff 1.5"
    ],
    "correctIndex": 0,
    "explanation": "Giuseppe Vitali utilizó el Axioma de Elección para seleccionar un representante de cada clase de equivalencia de ℝ/ℚ en [0,1], demostrando que no toda parte de ℝ es medible.",
    "skill": "Conjuntos no medibles",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de la Medida",
    "subtopic": "Conjunto de Vitali"
  },
  {
    "id": "raz-uni-41",
    "sectionId": 3,
    "number": 41,
    "text": "¿Qué demostró Paul Cohen en 1963 mediante el método del 'Forcing' respecto a la Hipótesis del Continuo (CH)?",
    "options": [
      "Demostró que la Hipótesis del Continuo es independiente de los axiomas de ZFC (no puede ser demostrada ni refutada a partir de ZFC)",
      "Probó que CH es falsa en todos los modelos",
      "Demostró que CH es deducible de Peano",
      "Probó que 2^(ℵ₀) = ℵ₁ es un axioma obligatorio"
    ],
    "correctIndex": 0,
    "explanation": "Gödel probó en 1940 que CH era consistente con ZFC (usando el universo construible L), y Cohen probó la consistencia de ¬CH con ZFC mediante forcing, sellando su independencia.",
    "skill": "Método de Forcing de Cohen",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría Axiomática de Conjuntos",
    "subtopic": "Independencia de CH"
  },
  {
    "id": "raz-uni-42",
    "sectionId": 3,
    "number": 42,
    "text": "En la jerarquía de números transfinitos, ¿qué representa el número cardinal ℵ₁ (Aleph uno)?",
    "options": [
      "El menor número cardinal estrictamente mayor que el cardinal de los números naturales ℵ₀",
      "El cardinal del conjunto continuo ℝ necesariamente",
      "El número de átomos del universo observable",
      "El primer número ordinal límite"
    ],
    "correctIndex": 0,
    "explanation": "Por definición axiomática, ℵ₁ es el siguiente cardinal infinito tras ℵ₀. La Hipótesis del Continuo afirma que 2^(ℵ₀) = ℵ₁.",
    "skill": "Aritmética transfinita",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría Axiomática de Conjuntos",
    "subtopic": "Cardinales transfinitos"
  },
  {
    "id": "raz-uni-43",
    "sectionId": 3,
    "number": 43,
    "text": "¿Cuál es la diferencia conceptual entre un número ordinal y un número cardinal según la teoría de conjuntos de von Neumann?",
    "options": [
      "Un ordinal mide el tipo de orden bien fundamentado de un conjunto ordenado; un cardinal mide el tamaño o cantidad pura de elementos prescindiendo del orden",
      "Los ordinales son siempre finitos y los cardinales infinitos",
      "No existe diferencia: son sinónimos",
      "Los cardinales solo miden números primos"
    ],
    "correctIndex": 0,
    "explanation": "Por ejemplo, los conjuntos {1, 2, 3, ...} y {1, 2, 3, ..., ω} tienen el mismo cardinal ℵ₀, pero tipos de orden ordinales distintos (ω vs ω + 1).",
    "skill": "Ordinales y cardinales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría Axiomática de Conjuntos",
    "subtopic": "Fundamentos de von Neumann"
  },
  {
    "id": "raz-uni-44",
    "sectionId": 3,
    "number": 44,
    "text": "En la teoría de conjuntos ZF, ¿qué garantiza el Axioma de Reemplazo introducido por Fraenkel?",
    "options": [
      "Que la imagen de cualquier conjunto bajo una función definible es también un conjunto",
      "Que se pueden reemplazar elementos duplicados",
      "Que los números enteros pueden sustituirse por letras",
      "Que las variables mudas se eliminan"
    ],
    "correctIndex": 0,
    "explanation": "El axioma de reemplazo es necesario para construir ordinales de gran tamaño más allá de ω + ω y formalizar la inducción transfinita.",
    "skill": "Axioma de reemplazo",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría Axiomática de Conjuntos",
    "subtopic": "Axiomas de Fraenkel"
  },
  {
    "id": "raz-uni-45",
    "sectionId": 3,
    "number": 45,
    "text": "El Teorema de Tarski sobre la indefinibilidad de la verdad afirma formalmente que:",
    "options": [
      "El predicado semántico de 'verdad' de un lenguaje formal aritmético suficientemente rico no puede ser definido dentro del propio lenguaje",
      "Todas las verdades matemáticas son empíricamente falsas",
      "Los diccionarios no tienen significado",
      "No existen proposiciones verdaderas en lógica"
    ],
    "correctIndex": 0,
    "explanation": "Tarski probó que si un lenguaje pudiese definir su propio predicado de verdad Verdadero(x), se generaría de inmediato la paradoja del mentiroso formalizada.",
    "skill": "Teorema de indefinibilidad de Tarski",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Semántica formal"
  },
  {
    "id": "raz-uni-46",
    "sectionId": 3,
    "number": 46,
    "text": "¿Qué es una ultrafiltro sobre un álgebra de Boole o un conjunto según la topología y teoría de modelos?",
    "options": [
      "Un filtro maximal que no está contenido en ningún otro filtro propio, y que para cada subconjunto A contiene a A o a su complemento",
      "Un circuito integrado con disipador criogénico",
      "Un algoritmo de búsqueda en grafos infinitos",
      "Una base ortonormal en espacios de Hilbert"
    ],
    "correctIndex": 0,
    "explanation": "Los ultrafiltros permiten construir ultraproductos en teoría de modelos para probar el teorema de compacidad y crear análisis no estándar con hiperreales.",
    "skill": "Ultrafiltros y ultraproductos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal Abstracta",
    "subtopic": "Teoría de modelos"
  },
  {
    "id": "raz-uni-47",
    "sectionId": 3,
    "number": 47,
    "text": "¿Cómo define Abraham Robinson los números hiperreales en el 'Análisis No Estándar' (1966)?",
    "options": [
      "Una extensión formal rigurosa del cuerpo de los números reales que incorpora infinitesimales reales y números infinitamente grandes mediante ultraproductos",
      "Aproximaciones decimales con error aleatorio",
      "Números complejos de parte real nula",
      "Matrices diagonales infinitas no acotadas"
    ],
    "correctIndex": 0,
    "explanation": "Robinson dotó de estricto rigor lógico a los infinitesimales dx de Leibniz utilizando la lógica de primer orden y el Teorema de Transferencia.",
    "skill": "Análisis No Estándar",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Real",
    "subtopic": "Infinitesimales de Robinson"
  },
  {
    "id": "raz-uni-48",
    "sectionId": 3,
    "number": 48,
    "text": "En el Teorema de Transferencia del análisis no estándar, ¿qué se garantiza para las sentencias de primer orden?",
    "options": [
      "Cualquier enunciado de primer orden formulado en el lenguaje de los reales es verdadero en ℝ si y solo si es verdadero en el cuerpo de los hiperreales *ℝ",
      "Que las derivadas ordinarias son iguales a cero",
      "Que los hiperreales no cumplen el axioma de cuerpo conmutativo",
      "Que la geometría deja de ser euclidiana"
    ],
    "correctIndex": 0,
    "explanation": "El principio de transferencia traslada automáticamente todas las propiedades algebraicas clásicas entre el universo estándar y el no estándar.",
    "skill": "Principio de transferencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Hiperreales"
  },
  {
    "id": "raz-uni-49",
    "sectionId": 3,
    "number": 49,
    "text": "¿Qué establece el Lema de Zorn en relación con los conjuntos parcialmente ordenados inductivos?",
    "options": [
      "Todo conjunto parcialmente ordenado no vacío en el cual cada cadena (subconjunto totalmente ordenado) posee una cota superior contiene al menos un elemento maximal",
      "Todo orden parcial tiene un mínimo absoluto",
      "Las cadenas infinitas no tienen fin",
      "El orden estricto siempre es numerable"
    ],
    "correctIndex": 0,
    "explanation": "El lema de Zorn es la herramienta estándar en álgebra abstracta para probar la existencia de bases de Hamel en espacios vectoriales arbitrarios y de ideales maximales.",
    "skill": "Lema de Zorn",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal Abstracta",
    "subtopic": "Órdenes parciales"
  },
  {
    "id": "raz-uni-50",
    "sectionId": 3,
    "number": 50,
    "text": "¿Por qué la existencia de una base lineal (Base de Hamel) para cualquier espacio vectorial de dimensión infinita depende del Axioma de Elección?",
    "options": [
      "Porque la demostración de la existencia de un subconjunto maximal linealmente independiente requiere invocar el Lema de Zorn",
      "Porque las matrices de dimensión infinita son no conmutativas",
      "Porque no se pueden multiplicar vectores infinitos",
      "Porque los espacios de Banach son siempre compactos"
    ],
    "correctIndex": 0,
    "explanation": "Sin el axioma de elección, existen modelos de ZF donde el espacio vectorial ℝ sobre el cuerpo ℚ carece de base de Hamel.",
    "skill": "Bases de Hamel",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal Abstracta",
    "subtopic": "Espacios vectoriales"
  },
  {
    "id": "raz-uni-51",
    "sectionId": 3,
    "number": 51,
    "text": "En teoría de juegos dinámicos en forma extensiva, ¿qué refinamiento introducido por Reinhard Selten elimina las amenazas no creíbles en el árbol de decisión?",
    "options": [
      "El Equilibrio de Nash Perfecto en Subjuegos (ENPS)",
      "El criterio de Minimax de Von Neumann",
      "La eficiencia en el sentido de Pareto",
      "El valor de Shapley para coaliciones"
    ],
    "correctIndex": 0,
    "explanation": "El Equilibrio de Nash Perfecto en Subjuegos (Selten, 1965) exige que las estrategias elegidas constituyan un equilibrio de Nash en cada subjuego del juego extensivo, descartando amenazas que un jugador no ejecutaría si llegara al nodo respectivo.",
    "skill": "Refinamientos del equilibrio en teoría de juegos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Juegos dinámicos y juegos en forma extensiva"
  },
  {
    "id": "raz-uni-52",
    "sectionId": 3,
    "number": 52,
    "text": "¿Qué característica define la paradoja social en el 'Dilema del Prisionero' con jugada simultánea única?",
    "options": [
      "La estrategia estrictamente dominante para cada jugador individual (traicionar/confesar) conduce a un equilibrio de Nash que es Pareto-ineficiente respecto a la cooperación mutua",
      "Los jugadores cooperan siempre por altruismo natural",
      "El juez libera a ambos prisioneros por falta de pruebas",
      "No existe ninguna estrategia dominante"
    ],
    "correctIndex": 0,
    "explanation": "La racionalidad individual pura genera un resultado global subóptimo donde ambos sufren penas más altas que si hubieran cooperado.",
    "skill": "Dilema del Prisionero",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Eficiencia de Pareto"
  },
  {
    "id": "raz-uni-53",
    "sectionId": 3,
    "number": 53,
    "text": "En un juego repetido indefinidamente del Dilema del Prisionero con factor de descuento temporal, ¿qué estrategia simple demostró ser extraordinariamente robusta en los torneos computacionales de Robert Axelrod?",
    "options": [
      "Tit-for-Tat (Don por Don): cooperar en la primera ronda y en las rondas sucesivas replicar exactamente la jugada previa del oponente",
      "Traicionar siempre en todas las rondas",
      "Jugar al azar al 50%",
      "Cooperar siempre sin importar lo que haga el adversario"
    ],
    "correctIndex": 0,
    "explanation": "Tit-for-Tat es transparente, amable (nunca inicia la traición), retaliatoria (castiga la agresión inmediata) y perdonadora (vuelve a cooperar si el otro lo hace).",
    "skill": "Estrategias evolutivas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Torneos de Axelrod"
  },
  {
    "id": "raz-uni-54",
    "sectionId": 3,
    "number": 54,
    "text": "¿Qué postula el Teorema Minimax de John von Neumann (1928) para juegos de suma cero entre dos personas con estrategias mixtas?",
    "options": [
      "El valor máximo que un jugador puede asegurarse minimizando sus pérdidas coincide exactamente con el valor mínimo que el oponente puede forzarle (Maximin = Minimax)",
      "Que la suma total de las ganancias siempre es estrictamente positiva",
      "Que no existen equilibrios en juegos continuos",
      "Que el jugador que mueve primero siempre gana"
    ],
    "correctIndex": 0,
    "explanation": "El teorema minimax resolvió completamente la teoría matemática de los juegos de suma cero en conflicto puro mediante programación lineal y convexidad.",
    "skill": "Teorema Minimax de von Neumann",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Investigación de Operaciones",
    "subtopic": "Juegos de suma cero"
  },
  {
    "id": "raz-uni-55",
    "sectionId": 3,
    "number": 55,
    "text": "¿Qué es un 'Equilibrio de Nash Perfecto en Subjuegos' (SPE) formulado por Reinhard Selten?",
    "options": [
      "Un refinamiento del equilibrio de Nash que elimina las amenazas no creíbles exigiendo que las estrategias constituyan un equilibrio de Nash en cada subjuego del árbol extensivo",
      "Un juego que no contiene bifurcaciones",
      "Un equilibrio que solo aplica a juegos de azar",
      "Una estrategia que maximiza la varianza de los pagos"
    ],
    "correctIndex": 0,
    "explanation": "El método de inducción hacia atrás (backward induction) permite identificar los equilibrios perfectos en subjuegos descartando faroles que ningún jugador racional ejecutaría si llegara el turno.",
    "skill": "Perfección en subjuegos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Juegos dinámicos"
  },
  {
    "id": "raz-uni-56",
    "sectionId": 3,
    "number": 56,
    "text": "En la paradoja de la decisión conocida como el 'Problema de Newcomb', ¿cuál es el dilema irreconciliable que confronta?",
    "options": [
      "El conflicto irreductible entre el Principio de Dominancia estricta (tomar las dos cajas) y el Principio de la Máxima Utilidad Esperada (tomar solo una caja) ante un predictor casi infalible",
      "El cálculo de la velocidad de un proyectil balístico",
      "La decisión de invertir en bonos o acciones",
      "El dilema ético del tranvía sin frenos"
    ],
    "correctIndex": 0,
    "explanation": "Robert Nozick analizó cómo Newcomb divide a los lógicos: quienes eligen dos cajas por dominancia y quienes eligen una por inferencia predictiva bayesiana.",
    "skill": "Paradoja de Newcomb",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Epistemología y Pensamiento Crítico",
    "subtopic": "Teoría de la decisión racional"
  },
  {
    "id": "raz-uni-57",
    "sectionId": 3,
    "number": 57,
    "text": "¿Qué describe la Paradoja de San Petersburgo formulada por Daniel Bernoulli en 1738?",
    "options": [
      "Un juego de lanzamiento de moneda cuyo valor esperado monetario matemático es infinito, pero por el cual ninguna persona racional pagaría más de unas pocas monedas por participar",
      "Un método para ganar siempre en las cartas",
      "La quiebra inevitable del banco central ruso",
      "La imposibilidad de calcular probabilidades en Rusia"
    ],
    "correctIndex": 0,
    "explanation": "Bernoulli demostró que la toma de decisiones no maximiza el valor monetario esperado lineal E(X), sino la 'utilidad esperada' con aversión al riesgo y utilidad marginal decreciente u(w) = ln(w).",
    "skill": "Paradoja de San Petersburgo",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Teoría de la utilidad esperada"
  },
  {
    "id": "raz-uni-58",
    "sectionId": 3,
    "number": 58,
    "text": "En la teoría de la elección social, ¿qué demuestra el Teorema de Imposibilidad de Arrow (1951)?",
    "options": [
      "No existe ningún sistema de votación ordinal para tres o más alternativas que satisfaga simultáneamente los principios democráticos elementales de no dictadura, unanimidad e independencia de alternativas irrelevantes",
      "Que todas las elecciones presidenciales son fraudulentas",
      "Que la mayoría simple siempre es matemáticamente perfecta",
      "Que no se pueden realizar referéndums populares"
    ],
    "correctIndex": 0,
    "explanation": "Kenneth Arrow probó axiomáticamente que agregar preferencias individuales coherentes en una función de bienestar social racional sin violar axiomas razonables es imposible.",
    "skill": "Teorema de Imposibilidad de Arrow",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Teoría de la elección social"
  },
  {
    "id": "raz-uni-59",
    "sectionId": 3,
    "number": 59,
    "text": "¿Qué es la Paradoja de Condorcet en sistemas electorales mayoritarios?",
    "options": [
      "Las preferencias colectivas pueden ser cíclicas e intransitivas (la mayoría prefiere A sobre B, B sobre C, pero también C sobre A), aun cuando las preferencias individuales sean perfectamente transitivas",
      "El candidato más votado siempre renuncia",
      "El empate exacto en todas las urnas",
      "La abstención total del electorado"
    ],
    "correctIndex": 0,
    "explanation": "El marqués de Condorcet evidenció que la regla de la mayoría simple puede arrojar ciclos circulares sin un ganador indiscutible.",
    "skill": "Paradoja de Condorcet",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática",
    "subtopic": "Sistemas de votación"
  },
  {
    "id": "raz-uni-60",
    "sectionId": 3,
    "number": 60,
    "text": "En un juego de señalización en economía de la información (Michael Spence), ¿por qué un título universitario puede funcionar como una señal creíble en el mercado laboral?",
    "options": [
      "Porque el costo de obtener el título es asimétrico y estrictamente más costoso (en tiempo o esfuerzo cognitivo) para los candidatos de baja productividad que para los de alta productividad",
      "Porque todas las carreras universitarias enseñan exactamente lo mismo que se hace en la empresa",
      "Porque los diplomas tienen sellos de agua difíciles de falsificar",
      "Porque las universidades pagan seguros de empleo"
    ],
    "correctIndex": 0,
    "explanation": "Para que una señal sea efectiva y separe equilibrios (separating equilibrium), debe satisfacer la condición de 'cruce único' (single-crossing condition) donde fingirla no sea rentable.",
    "skill": "Teoría de la señalización",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Asimetría de información"
  },
  {
    "id": "raz-uni-61",
    "sectionId": 3,
    "number": 61,
    "text": "¿En qué consiste el 'Peligro Moral' (Moral Hazard) originado por la asimetría de información postcontractual?",
    "options": [
      "El cambio en el comportamiento de un agente que adopta mayores riesgos o negligencia al saberse protegido por un seguro que cubre sus consecuencias financieras",
      "La firma de un contrato con cláusulas ilegales",
      "La falta de principios éticos del comprador",
      "La ruina del mercado por venta de productos de mala calidad"
    ],
    "correctIndex": 0,
    "explanation": "A diferencia de la selección adversa (precontractual), el riesgo moral surge tras el pacto cuando la conducta del asegurado no es directamente observable por el principal.",
    "skill": "Riesgo moral",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Economía de la información"
  },
  {
    "id": "raz-uni-62",
    "sectionId": 3,
    "number": 62,
    "text": "¿Qué fenómeno económico describe la 'Selección Adversa' analizada por George Akerlof en su modelo del mercado de limones (The Market for Lemons, 1970)?",
    "options": [
      "La información asimétrica sobre la calidad intrínseca oculta de los autos usados hace que los precios promedio expulsen del mercado a los vehículos de buena calidad dejando solo los defectuosos",
      "La importación excesiva de cítricos en la economía",
      "La elección deliberada de los peores candidatos",
      "El colapso de las fábricas de ensamblaje"
    ],
    "correctIndex": 0,
    "explanation": "Los compradores, desconfiando del estado de los vehículos, solo ofrecen el precio medio de un vehículo malo, desincentivando la venta de unidades óptimas hasta que el mercado colapsa.",
    "skill": "Selección adversa de Akerlof",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Asimetría de información"
  },
  {
    "id": "raz-uni-63",
    "sectionId": 3,
    "number": 63,
    "text": "En teoría de subastas, ¿qué propiedad notable posee la 'Subasta de Vickrey' (subasta de segundo precio en sobre cerrado)?",
    "options": [
      "Pujar exactamente la verdadera valoración privada que el postor tiene del bien es una estrategia débilmente dominante",
      "El ganador paga el doble de lo que ofreció",
      "Los postores deben coludirse en secreto",
      "La casa de subastas se queda con los depósitos de todos los participantes"
    ],
    "correctIndex": 0,
    "explanation": "William Vickrey demostró que el participante no gana nada mintiendo: pagar el segundo precio más alto desacopla la puja de la cantidad finalmente abonada, incentivando la veracidad.",
    "skill": "Subasta de segundo precio de Vickrey",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Diseño de mecanismos"
  },
  {
    "id": "raz-uni-64",
    "sectionId": 3,
    "number": 64,
    "text": "El Teorema de Equivalencia del Ingreso de Myerson y Riley en diseño de mecanismos demuestra que:",
    "options": [
      "Bajo supuestos estándar de postores neutrales al riesgo con valoraciones independientes, todas las subastas comunes (inglesa, holandesa, primer precio y segundo precio) generan el mismo ingreso esperado para el vendedor",
      "Las subastas holandesas siempre recaudan más que las inglesas",
      "El vendedor siempre pierde dinero en subastas",
      "Las subastas en sobre cerrado son ilegales"
    ],
    "correctIndex": 0,
    "explanation": "El teorema es un pilar de la teoría de subastas que demuestra la invarianza del rendimiento financiero esperado del subastador frente al formato formal elegido.",
    "skill": "Equivalencia de ingresos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microeconomía y Teoría de Juegos",
    "subtopic": "Teoría de subastas"
  },
  {
    "id": "raz-uni-65",
    "sectionId": 3,
    "number": 65,
    "text": "En la tragedia de los bienes comunes (Garrett Hardin), ¿cuál es la causa subyacente del agotamiento del recurso compartido?",
    "options": [
      "La no exclusión en el acceso unida a la rivalidad en el consumo incentiva la sobreexplotación individual de una propiedad común de acceso abierto",
      "La falta de tecnología de extracción",
      "El bajo precio del recurso en los mercados internacionales",
      "La regulación excesiva de los gobiernos"
    ],
    "correctIndex": 0,
    "explanation": "Cada pastor o pescador recibe el beneficio privado íntegro de añadir un animal o red más (+1), mientras que el costo ecológico de la degradación se reparte entre toda la comunidad.",
    "skill": "Tragedia de los comunes",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría Social",
    "subtopic": "Bienes comunes"
  },
  {
    "id": "raz-uni-66",
    "sectionId": 3,
    "number": 66,
    "text": "¿Cómo definió Claude Shannon la Entropía H(X) de una fuente de información discreta en su histórica 'Teoría Matemática de la Comunicación' (1948)?",
    "options": [
      "H(X) = - ∑ p(x) · log₂ p(x), midiendo la incertidumbre media intrínseca o cantidad promedio de información por símbolo en bits",
      "H(X) = ∑ p(x) / N",
      "H(X) = log₂ (1 / N)",
      "H(X) = Área bajo la curva de frecuencias"
    ],
    "correctIndex": 0,
    "explanation": "La entropía de Shannon cuantifica la compresión máxima teórica sin pérdidas y la tasa mínima requerida de bits para codificar un mensaje.",
    "skill": "Entropía de la información",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cibernética y Comunicaciones",
    "subtopic": "Claude Shannon"
  },
  {
    "id": "raz-uni-67",
    "sectionId": 3,
    "number": 67,
    "text": "¿Qué establece el Teorema de Shannon-Hartley respecto a la capacidad de canal C (en bits por segundo) de un canal con ruido aditivo blanco gaussiano?",
    "options": [
      "C = B · log₂(1 + SNR), donde B es el ancho de banda en Hertz y SNR es la relación señal-a-ruido",
      "C = B / SNR",
      "C = 2 · B · SNR",
      "C = log₂(B) + log₂(SNR)"
    ],
    "correctIndex": 0,
    "explanation": "Fórmula fundamental de las telecomunicaciones que define el límite superior teórico de velocidad de transmisión de datos sin error a través de un medio ruidoso.",
    "skill": "Teorema de Shannon-Hartley",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cibernética y Comunicaciones",
    "subtopic": "Capacidad de canal"
  },
  {
    "id": "raz-uni-68",
    "sectionId": 3,
    "number": 68,
    "text": "En semántica de mundos posibles para lógica modal proposicional desarrollada por Saul Kripke, ¿qué significa que una proposición sea 'necesaria' (representada por el operador □p)?",
    "options": [
      "□p es verdadera en un mundo w si y solo si p es verdadera en todos los mundos posibles w' accesibles desde el mundo w mediante la relación de accesibilidad R",
      "□p es verdadera si se comprueba empíricamente en un laboratorio",
      "□p significa que p fue demostrada en latín clásico",
      "□p es verdadera si p es un número primo"
    ],
    "correctIndex": 0,
    "explanation": "Kripke formalizó la necesidad ontológica y epistémica mediante marcos relacionales (W, R), donde □ actúa como un cuantificador universal sobre mundos accesibles.",
    "skill": "Semántica de Kripke",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Lógica modal"
  },
  {
    "id": "raz-uni-69",
    "sectionId": 3,
    "number": 69,
    "text": "¿Qué axioma modal formal distingue al sistema S4 en la jerarquía modal de Kripke al imponer la transitividad de la relación de accesibilidad?",
    "options": [
      "Axioma 4: □p → □□p (Si algo es necesario, es necesariamente necesario)",
      "Axioma T: □p → p",
      "Axioma 5: ◊p → □◊p",
      "Axioma K: □(p → q) → (□p → □q)"
    ],
    "correctIndex": 0,
    "explanation": "El sistema S4 añade la transitividad de R, garantizando que la necesidad de un enunciado se propague reflexiva y transitivamente a los horizontes de mundos sucesivos.",
    "skill": "Sistemas modales S4",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Axiomas modales"
  },
  {
    "id": "raz-uni-70",
    "sectionId": 3,
    "number": 70,
    "text": "En lógica epistémica (la lógica del conocimiento y la creencia), ¿qué postula la 'cláusula de veracidad' o axioma del conocimiento K_i φ → φ?",
    "options": [
      "Si un agente sabe o conoce formalmente que la proposición φ es el caso, entonces φ es necesariamente verdadera (no se puede saber algo que es objetivamente falso)",
      "El conocimiento no requiere pruebas lógicas",
      "Creer equivale rigurosamente a saber en todos los casos",
      "Todo lo que se cree se convierte en ley física"
    ],
    "correctIndex": 0,
    "explanation": "A diferencia de la creencia (doxástica), que admite errores, el conocimiento genuino presupone la verdad objetiva de lo sabido (conocimiento fáctico).",
    "skill": "Lógica epistémica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Filosofía del Lenguaje",
    "subtopic": "Axiomas epistémicos"
  },
  {
    "id": "raz-uni-71",
    "sectionId": 3,
    "number": 71,
    "text": "En el análisis de redes causales y modelos de ecuaciones estructurales de Judea Pearl, ¿qué operador matemático distingue la 'intervención activa deliberada' de la 'mera observación pasiva'?",
    "options": [
      "El operador do(X = x), que modela la manipulación experimental modificando la estructura del grafo causal eliminando las aristas entrantes hacia X",
      "El operador gradiente nabla ∇",
      "La transformada inversa de Laplace",
      "La derivada parcial ordinaria ∂/∂x"
    ],
    "correctIndex": 0,
    "explanation": "Pearl demostró que la probabilidad observacional P(Y | X) confunde causalidad con correlación espuria, mientras que P(Y | do(X)) cuantifica la causa real al mutilar las flechas de confusión.",
    "skill": "Inferencia causal de Judea Pearl",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Aprendizaje Automático",
    "subtopic": "Causalidad y do-calculus"
  },
  {
    "id": "raz-uni-72",
    "sectionId": 3,
    "number": 72,
    "text": "¿Qué criterio geométrico sobre grafos acíclicos dirigidos (DAGs) formuló Pearl para verificar si dos variables están condicionalmente independientes dado un conjunto de variables de control Z?",
    "options": [
      "Criterio de d-separación (separación direccional)",
      "El algoritmo de Dijkstra de camino mínimo",
      "El Teorema de los Cuatro Colores",
      "La triangulación de Delaunay"
    ],
    "correctIndex": 0,
    "explanation": "La d-separación analiza el flujo de información probabilística a través de cadenas, bifurcaciones y colisionadores (v-structures) en el grafo de causas.",
    "skill": "D-separación en grafos causales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Aprendizaje Automático",
    "subtopic": "Redes bayesianas"
  },
  {
    "id": "raz-uni-73",
    "sectionId": 3,
    "number": 73,
    "text": "En la paradoja de los colisionadores o sesgo de Berkson (collider bias), ¿qué ocurre cuando se condiciona estadísticamente sobre una variable que es efecto común de dos causas independientes?",
    "options": [
      "Se induce espuriamente una correlación o asociación condicional artificial entre dos variables que en la población general eran mutuamente independientes",
      "Las dos causas se vuelven idénticas",
      "El error experimental se reduce a cero",
      "Se duplica el tamaño muestral del estudio"
    ],
    "correctIndex": 0,
    "explanation": "Abrir el camino a través de un nodo colisionador X → C ← Y al controlar por C crea dependencia estadística falaz entre X e Y.",
    "skill": "Sesgo de selección de Berkson",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estadística Matemática",
    "subtopic": "Sesgo de colisionador"
  },
  {
    "id": "raz-uni-74",
    "sectionId": 3,
    "number": 74,
    "text": "En la formulación de la física cuántica, ¿qué demostró John Stewart Bell en su célebre Teorema de Bell (1964)?",
    "options": [
      "Que ninguna teoría física basada en variables ocultas locales puede reproducir simultáneamente todas las correlaciones cuánticas predichas por el entrelazamiento cuántico",
      "Que la mecánica cuántica no necesita matemáticas complejas",
      "Que Einstein demostró la imposibilidad del entrelazamiento",
      "Que la velocidad de la luz en el vacío es variable"
    ],
    "correctIndex": 0,
    "explanation": "La violación empírica de las desigualdades de Bell en experimentos (Aspect, Clauser, Zeilinger) probó que la naturaleza o es no local o no es realista en el sentido clásico.",
    "skill": "Teorema y desigualdades de Bell",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Cuántica",
    "subtopic": "Entrelazamiento cuántico"
  },
  {
    "id": "raz-uni-75",
    "sectionId": 3,
    "number": 75,
    "text": "¿Qué experimento mental propuso John Searle con 'El Cuarto Chino' (The Chinese Room, 1980) para rebatir el optimismo de la Inteligencia Artificial Fuerte?",
    "options": [
      "Un humano que manipula mecánicamente caracteres chinos según reglas sintácticas escritas en un manual no comprende realmente el idioma chino, demostrando que la mera manipulación de símbolos sintácticos no produce comprensión semántica intrínseca",
      "Que los ordenadores son capaces de sentir dolor físico",
      "Que el idioma chino carece de gramática formal",
      "Que no se pueden construir redes neuronales artificiales"
    ],
    "correctIndex": 0,
    "explanation": "Searle demostró el abismo cualitativo entre computación sintáctica (programas formales) y comprensión semántica intencional consciente.",
    "skill": "Cuarto Chino de Searle",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias de la Computación Teórica",
    "subtopic": "Filosofía de la mente"
  },
  {
    "id": "raz-uni-76",
    "sectionId": 3,
    "number": 76,
    "text": "¿Qué problema epistemológico formuló Nelson Goodman con su nueva paradoja de la inducción y el predicado 'verdul' (grue)?",
    "options": [
      "Un objeto es 'verdul' si es verde antes del año 2050 y azul después; todas las esmeraldas observadas hasta hoy confirman tanto la hipótesis 'todas las esmeraldas son verdes' como 'todas las esmeraldas son verdules', evidenciando que la inducción formal requiere criterios no sintácticos para distinguir predicados proyectables",
      "Que los colores primarios no existen en la retina humana",
      "Que las piedras preciosas cambian de composición atómica con el tiempo",
      "Que la física óptica es inconsistente con la química mineral"
    ],
    "correctIndex": 0,
    "explanation": "Goodman demostró que la mera forma sintáctica de las premisas observacionales no basta para justificar racionalmente qué regularidades son proyectables hacia el futuro.",
    "skill": "Paradoja de Goodman",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Epistemología Científica",
    "subtopic": "Nueva paradoja de la inducción"
  },
  {
    "id": "raz-uni-77",
    "sectionId": 3,
    "number": 77,
    "text": "En la Paradoja de los Dos Sobres, se ofrecen dos sobres idénticos con sumas de dinero desconocidas, donde uno contiene el doble que el otro. Si abres un sobre y encuentras X, ¿cuál es el cálculo falaz que parece sugerir que siempre conviene cambiar de sobre?",
    "options": [
      "Calcular el valor esperado del otro sobre como E = 0.5(2X) + 0.5(X/2) = 1.25X > X, asumiendo erróneamente una distribución a priori uniforme impropia sobre un dominio infinito",
      "Creer que el dinero se multiplica al cambiarlo de mano",
      "Suponer que los billetes pierden valor por inflación",
      "Olvidar restar los impuestos a las ganancias"
    ],
    "correctIndex": 0,
    "explanation": "La falacia radica en asignar probabilidades simétricas a priori de 0.5 a X/2 y 2X condicionadas sobre X sin una distribución de probabilidad previa matemáticamente válida e integrable en [0, ∞).",
    "skill": "Paradoja de los dos sobres",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Epistemología y Pensamiento Crítico",
    "subtopic": "Probabilidad y paradojas"
  },
  {
    "id": "raz-uni-78",
    "sectionId": 3,
    "number": 78,
    "text": "¿Qué teorema formal de la termodinámica estadística y la física matemática demostró Henri Poincaré sobre los sistemas dinámicos conservativos cerrados (Teorema de Recurrencia de Poincaré)?",
    "options": [
      "Cualquier estado inicial de un sistema dinámico clásico con volumen de espacio de fases finito acotado retornará infinitas veces arbitrariamente cerca de su configuración inicial al cabo de un tiempo suficientemente largo",
      "Que la entropía de un sistema cerrado tiende a cero en 10 años",
      "Que los planetas colisionarán inevitablemente con el Sol",
      "Que el movimiento térmico cesa espontáneamente"
    ],
    "correctIndex": 0,
    "explanation": "La recurrencia de Poincaré confrontó el dilema de la flecha del tiempo y la segunda ley de la termodinámica formulado por Boltzmann y Loschmidt.",
    "skill": "Teorema de Recurrencia de Poincaré",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Estadística",
    "subtopic": "Sistemas dinámicos"
  },
  {
    "id": "raz-uni-79",
    "sectionId": 3,
    "number": 79,
    "text": "En geometría diferencial y topología, ¿qué conjetura histórica formulada por Henri Poincaré en 1904 y resuelta por Grigori Perelman en 2003 demostró que toda variedad tridimensional cerrada y simplemente conexa es homeomorfa a la 3-esfera?",
    "options": [
      "La Conjetura de Poincaré (demostrada mediante el flujo de Ricci con cirugía)",
      "El Teorema de Clasificación de Superficies de Riemann",
      "La Hipótesis de Riemann",
      "La Conjetura de Hodge"
    ],
    "correctIndex": 0,
    "explanation": "Perelman completó el programa de Richard Hamilton aplicando el flujo de Ricci y teoría geométrica analítica, resolviendo uno de los siete Problemas del Milenio del Instituto Clay.",
    "skill": "Conjetura de Poincaré",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Matemático y Topología",
    "subtopic": "Topología diferencial"
  },
  {
    "id": "raz-uni-80",
    "sectionId": 3,
    "number": 80,
    "text": "¿Qué es la Paradoja del Mentiroso y por qué motivó la jerarquía de metalenguajes de Alfred Tarski?",
    "options": [
      "La proposición 'Esta oración es falsa', si es verdadera entonces es falsa, y si es falsa entonces es verdadera; para evitar la inconsistencia, Tarski prohibió la autorreferencia semántica separando el lenguaje objeto del metalenguaje",
      "Una persona que confiesa un delito ante el tribunal",
      "Un software que contiene un error de sintaxis",
      "Un silogismo con tres premisas particulares"
    ],
    "correctIndex": 0,
    "explanation": "La antinomia semántica del mentiroso muestra la vulnerabilidad inherente de los lenguajes naturales universalmente cerrados y forzó el rigor de la semántica metalingüística contemporánea.",
    "skill": "Paradoja del mentiroso",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Metalenguajes de Tarski"
  },
  {
    "id": "raz-uni-81",
    "sectionId": 3,
    "number": 81,
    "text": "En la teoría de tipos y fundamentos de la informática teórica, ¿qué establece el Isomorfismo de Curry-Howard?",
    "options": [
      "Una correspondencia biunívoca profunda y estructural entre las fórmulas de la lógica intuicionista y los tipos de datos de un lenguaje de programación funcional (Pruebas = Programas)",
      "Que el hardware y el software son indistinguibles",
      "Que todos los compiladores cometen los mismos errores lógicos",
      "Que la lógica clásica es equivalente a la física cuántica"
    ],
    "correctIndex": 0,
    "explanation": "Demostrar un teorema en lógica constructiva equivale exactamente a escribir un programa que habita ese tipo, base de los asistentes de demostración como Coq y Lean.",
    "skill": "Isomorfismo de Curry-Howard",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias de la Computación Teórica",
    "subtopic": "Teoría de tipos"
  },
  {
    "id": "raz-uni-82",
    "sectionId": 3,
    "number": 82,
    "text": "¿Qué distingue a la Lógica Intuicionista de la Lógica Clásica estándar?",
    "options": [
      "El rechazo del Principio del Tercero Excluido (p ∨ ¬p) y de la eliminación de la doble negación (¬¬p → p) como axiomas universalmente válidos sin construcción explícita",
      "El rechazo de la conjunción",
      "La aceptación de contradicciones como verdaderas",
      "La eliminación de los cuantificadores"
    ],
    "correctIndex": 0,
    "explanation": "Para Brouwer y los constructivistas, afirmar la verdad de un enunciado exige exhibir un testigo o algoritmo explícito de construcción.",
    "skill": "Lógica intuicionista",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Constructivismo matemático"
  },
  {
    "id": "raz-uni-83",
    "sectionId": 3,
    "number": 83,
    "text": "En la teoría de categorías abstractas (Saunders Mac Lane), ¿qué es un Functor entre dos categorías C y D?",
    "options": [
      "Una aplicación que asocia cada objeto de C a un objeto de D y cada morfismo de C a un morfismo de D preservando identidades y composición de flechas",
      "Una matriz invertible de gran dimensión",
      "Un conjunto que contiene solo funciones biyectivas",
      "Un número real transitorio"
    ],
    "correctIndex": 0,
    "explanation": "Los functores son los homomorfismos naturales que permiten traducir conceptos y estructuras algebraicas complejas de una categoría a otra.",
    "skill": "Teoría de categorías",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Álgebra Lineal Abstracta",
    "subtopic": "Functores y categorías"
  },
  {
    "id": "raz-uni-84",
    "sectionId": 3,
    "number": 84,
    "text": "En la semántica de la lógica cuántica formulada por Birkhoff y von Neumann (1936), ¿qué axioma del álgebra de Boole clásica no se cumple en las proposiciones cuánticas?",
    "options": [
      "La ley distributiva: a ∧ (b ∨ c) ≠ (a ∧ b) ∨ (a ∧ c)",
      "La ley de identidad",
      "El principio de reflexividad",
      "La regla de contraposición"
    ],
    "correctIndex": 0,
    "explanation": "El principio de indeterminación y la no conmutatividad de operadores incompatibles se refleja formalmente en un retículo ortocomplementado no distributivo.",
    "skill": "Lógica cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Cuántica",
    "subtopic": "Retículos no distributivos"
  },
  {
    "id": "raz-uni-85",
    "sectionId": 3,
    "number": 85,
    "text": "¿Qué es la Distancia de Kolmogorov o Complejidad de Kolmogorov de una cadena binaria s?",
    "options": [
      "La longitud del programa computacional más corto capaz de generar la cadena s como salida en una Máquina de Turing universal",
      "El número de unos que contiene la cadena",
      "El tiempo que tarda en imprimirse en pantalla",
      "La entropía termodinámica del cable"
    ],
    "correctIndex": 0,
    "explanation": "La complejidad de Kolmogorov define matemáticamente el contenido aleatorio o de compresibilidad de un objeto: una cadena es puramente aleatoria si es incompresible.",
    "skill": "Complejidad de Kolmogorov",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Informática Teórica",
    "subtopic": "Información algorítmica"
  },
  {
    "id": "raz-uni-86",
    "sectionId": 3,
    "number": 86,
    "text": "¿Qué demostró Gregory Chaitin con su constante Omega (Ω de Chaitin)?",
    "options": [
      "Un número real formalmente bien definido que representa la probabilidad de parada de un programa aleatorio, pero que es máximamente incompresible y no computable",
      "Que el número pi es racional",
      "Que todas las computadoras cuánticas son idénticas",
      "Que la velocidad del cálculo es infinita"
    ],
    "correctIndex": 0,
    "explanation": "El número Omega de Chaitin condensa la incompletitud gödeliana en una probabilidad no computable cuyas cifras no pueden ser predichas por ningún sistema formal finito.",
    "skill": "Constante Omega de Chaitin",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias de la Computación Teórica",
    "subtopic": "Incomputabilidad"
  },
  {
    "id": "raz-uni-87",
    "sectionId": 3,
    "number": 87,
    "text": "En la teoría de la demostración estructural de Gerhard Gentzen, ¿qué garantiza el Teorema de Eliminación del Corte (Hauptsatz) en el cálculo de secuentes?",
    "options": [
      "Cualquier demostración lógica formal que utilice lemas auxiliares intermediarios (corte) puede transformarse en una demostración directa 'libre de cortes' basada únicamente en las subfórmulas de la conclusión",
      "Que no existen contradicciones en el mundo",
      "Que los cortes deben eliminarse de los libros",
      "Que la lógica modal es inconsistente"
    ],
    "correctIndex": 0,
    "explanation": "La propiedad de la subfórmula derivada de la eliminación del corte garantiza la consistencia del sistema y fundamenta la demostración automática de teoremas.",
    "skill": "Cálculo de secuentes de Gentzen",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Lógica Matemática Avanzada",
    "subtopic": "Teorema del corte"
  },
  {
    "id": "raz-uni-88",
    "sectionId": 3,
    "number": 88,
    "text": "En la teoría de modelos abstracta, ¿qué es la 'Estabilidad de Morley' en teorías de primer orden?",
    "options": [
      "Una clasificación formal de las teorías según la cantidad de tipos semánticos completos que admiten sobre conjuntos de parámetros de cardinalidad infinita",
      "La velocidad con que converge un algoritmo numérico",
      "La estabilidad térmica de un reactor nuclear",
      "La solidez de los axiomas de la física teórica"
    ],
    "correctIndex": 0,
    "explanation": "El Teorema de Morley resolvió la conjetura de Los demostrando que si una teoría es categórica en un cardinal no numerable, es categórica en todos los cardinales no numerables.",
    "skill": "Teoría de la estabilidad de Morley",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Modelos",
    "subtopic": "Clasificación de Shelah"
  },
  {
    "id": "raz-uni-89",
    "sectionId": 3,
    "number": 89,
    "text": "¿Qué postula el Teorema de No-Clonación (No-Cloning Theorem) en teoría cuántica de la información (Wootters y Zurek, 1982)?",
    "options": [
      "Es físicamente imposible crear una copia exacta e idéntica de un estado cuántico superpuesto arbitrario y desconocido sin destruirlo",
      "Las computadoras no pueden copiar archivos de audio",
      "Los átomos no pueden reproducirse en laboratorio",
      "La clonación biológica de animales es imposible"
    ],
    "correctIndex": 0,
    "explanation": "Por la naturaleza unitaria y lineal de la evolución cuántica, no existe ningún operador unitario U tal que U(|ψ⟩|0⟩) = |ψ⟩|ψ⟩ para todo estado |ψ⟩.",
    "skill": "Teoría de la información cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Cuántica",
    "subtopic": "Teorema de no-clonación"
  },
  {
    "id": "raz-uni-90",
    "sectionId": 3,
    "number": 90,
    "text": "En la paradoja de EPR (Einstein-Podolsky-Rosen, 1935), ¿cuál era la objeción filosófica contra la mecánica cuántica formulada por Einstein?",
    "options": [
      "La existencia de 'acción fantasmal a distancia' (spooky action at a distance), concluyendo que la teoría cuántica era incompleta y requería variables ocultas locales",
      "Que la velocidad de la luz era superada por los electrones",
      "Que la fórmula de Planck era algebraicamente incorrecta",
      "Que la energía no se conserva en las colisiones"
    ],
    "correctIndex": 0,
    "explanation": "EPR postularon el criterio de realidad local: si sin perturbar un sistema se puede predecir con certeza una magnitud, existe un elemento de realidad local correspondiente.",
    "skill": "Paradoja EPR",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Cuántica",
    "subtopic": "Fundamentos de la física cuántica"
  },
  {
    "id": "raz-uni-91",
    "sectionId": 3,
    "number": 91,
    "text": "En epistemología contemporánea, ¿qué expusieron los contraejemplos de Edmund Gettier (1963) frente a la definición platónica clásica del conocimiento como 'creencia verdadera justificada' (JTB)?",
    "options": [
      "Demostraron la existencia de creencias que son verdaderas y están justificadas, pero que dependen de una casualidad afortunada o premisas falsas, por lo que no califican como conocimiento genuino",
      "Que nadie puede justificar sus creencias científicas",
      "Que Platón inventó la verdad subjetiva",
      "Que la percepción sensorial nunca es engañosa"
    ],
    "correctIndex": 0,
    "explanation": "Los casos de Gettier mostraron que las tres condiciones JTB son necesarias pero no suficientes para definir el conocimiento epistemológico.",
    "skill": "Problema de Gettier",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Epistemología Científica",
    "subtopic": "Definición del conocimiento"
  },
  {
    "id": "raz-uni-92",
    "sectionId": 3,
    "number": 92,
    "text": "En filosofía de la ciencia, ¿qué sostiene la 'Tesis de Duhem-Quine' (holismo de la confirmación)?",
    "options": [
      "Una hipótesis científica aislada nunca puede ser sometida a prueba empírica por sí sola, pues siempre requiere un haz de supuestos auxiliares, condiciones iniciales y teorías instrumentales concomitantes",
      "Que todas las teorías de la física son verdaderas simultáneamente",
      "Que los científicos siempre rechazan las hipótesis erróneas",
      "Que los experimentos de laboratorio no tienen valor"
    ],
    "correctIndex": 0,
    "explanation": "Si un experimento refuta una predicción, la lógica deductiva no señala cuál de las hipótesis (si la central o una auxiliar) es la responsable del fallo.",
    "skill": "Tesis de Duhem-Quine",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Filosofía de la Ciencia",
    "subtopic": "Holismo epistemológico"
  },
  {
    "id": "raz-uni-93",
    "sectionId": 3,
    "number": 93,
    "text": "¿Qué es la 'Inconmensurabilidad' de teorías científicas según Thomas Kuhn y Paul Feyerabend?",
    "options": [
      "La imposibilidad de comparar directamente dos paradigmas sucesivos mediante un lenguaje neutral común, dado que los mismos términos cambian de significado y marco ontológico",
      "La dificultad de medir constantes físicas en el vacío",
      "La falta de dinero para financiar aceleradores de partículas",
      "La discrepancia entre el sistema métrico y el sistema inglés"
    ],
    "correctIndex": 0,
    "explanation": "Un cambio de paradigma reorganiza la red conceptual completa del mundo, imposibilitando una traducción punto por punto entre ellos.",
    "skill": "Inconmensurabilidad de paradigmas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Filosofía de la Ciencia",
    "subtopic": "Epistemología kuhniana"
  },
  {
    "id": "raz-uni-94",
    "sectionId": 3,
    "number": 94,
    "text": "En la teoría de conjuntos y grandes cardinales, ¿qué es un 'Cardinal Inaccesible'?",
    "options": [
      "Un número cardinal no numerable que no puede ser alcanzado mediante uniones de menor cardinalidad ni por potencias de cardinales menores",
      "Un número imaginario que no se puede escribir en papel",
      "El último número primo descubierto",
      "Un cardinal con valor negativo"
    ],
    "correctIndex": 0,
    "explanation": "La existencia de cardinales inaccesibles no se puede demostrar dentro de ZFC, pero garantiza un modelo interno de ZFC (universo de Grothendieck).",
    "skill": "Grandes cardinales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría Axiomática de Conjuntos",
    "subtopic": "Cardinales inaccesibles"
  },
  {
    "id": "raz-uni-95",
    "sectionId": 3,
    "number": 95,
    "text": "¿Qué demostró el Teorema de Tverberg en geometría combinatoria y topológica (1966)?",
    "options": [
      "Cualquier conjunto de (d + 1)(r - 1) + 1 puntos en el espacio d-dimensional ℝ^d puede particionarse en r subconjuntos disjuntos cuyas envolventes convexas tienen una intersección común no vacía",
      "Que los polígonos regulares no admiten particiones",
      "Que el espacio tridimensional no puede curvarse",
      "Que todos los triángulos son equiláteros"
    ],
    "correctIndex": 0,
    "explanation": "El teorema de Tverberg generaliza el teorema de Radon para r partes arbitrarias y es una piedra angular de la combinatoria geométrica moderna.",
    "skill": "Teorema de Tverberg",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Geometría Combinatoria",
    "subtopic": "Envolventes convexas"
  },
  {
    "id": "raz-uni-96",
    "sectionId": 3,
    "number": 96,
    "text": "En teoría de la computación cuántica, ¿qué problema resuelve el Algoritmo de Shor (1994) en tiempo polinomial cuántico BQP?",
    "options": [
      "La factorización de números enteros en factores primos y el cálculo del logaritmo discreto",
      "La simulación de la gravitación universal",
      "El diseño de compiladores de lenguaje C",
      "La optimización del tráfico urbano"
    ],
    "correctIndex": 0,
    "explanation": "Shor amenazó la seguridad del criptosistema RSA demostrando que un ordenador cuántico con corrección de errores factoriza en O((log N)³).",
    "skill": "Algoritmo de Shor",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Computación Cuántica",
    "subtopic": "Criptología y Seguridad"
  },
  {
    "id": "raz-uni-97",
    "sectionId": 3,
    "number": 97,
    "text": "¿Qué aceleración cuadrática ofrece el Algoritmo de Grover (1996) en la búsqueda cuántica sobre una base de datos desordenada de N elementos?",
    "options": [
      "Reduce la complejidad temporal de O(N) clásico a O(√N) cuántico mediante amplificación de amplitud",
      "Reduce el tiempo de búsqueda a O(1) instantáneo",
      "No mejora los algoritmos clásicos",
      "Aumenta la memoria requerida exponencialmente"
    ],
    "correctIndex": 0,
    "explanation": "Grover demostró la optimalidad del operador de difusión cuántica para encontrar un elemento marcado en tiempo sublineal O(√N).",
    "skill": "Algoritmo de Grover",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Computación Cuántica",
    "subtopic": "Búsqueda cuántica"
  },
  {
    "id": "raz-uni-98",
    "sectionId": 3,
    "number": 98,
    "text": "En topología algebraica, el 'Teorema del Punto Fijo de Brouwer' garantiza que:",
    "options": [
      "Cualquier función continua de una bola cerrada conexa compacta de ℝ^n en sí misma tiene al menos un punto fijo x tal que f(x) = x",
      "Todas las funciones continuas son derivables",
      "Los puntos de una esfera pueden moverse sin rozamiento",
      "No existen puntos fijos en dimensiones pares"
    ],
    "correctIndex": 0,
    "explanation": "Consecuencia directa de la no retractibilidad de la bola cerrada sobre su frontera esférica (S^(n-1)), con aplicaciones directas en economía para probar el equilibrio de Nash.",
    "skill": "Teorema del Punto Fijo de Brouwer",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Matemático y Topología",
    "subtopic": "Topología algebraica"
  },
  {
    "id": "raz-uni-99",
    "sectionId": 3,
    "number": 99,
    "text": "¿Qué demostró el Teorema de los Cuatro Colores (Appel y Haken, 1976), célebre por ser la primera demostración matemática formal asistida intensivamente por computadora?",
    "options": [
      "Cualquier mapa geográfico dibujado en un plano puede colorearse con a lo sumo 4 colores de modo que regiones vecinas que comparten frontera reciban colores distintos",
      "Que solo existen cuatro polígonos regulares en el plano",
      "Que las cuatro operaciones matemáticas son equivalentes",
      "Que el espacio de fases tiene 4 dimensiones"
    ],
    "correctIndex": 0,
    "explanation": "Redujeron el problema a 1.936 configuraciones inevitables analizadas algorítmicamente por ordenador, abriendo el debate sobre la verificación de pruebas.",
    "skill": "Teorema de los Cuatro Colores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Matemática Discreta",
    "subtopic": "Teoría de grafos planos"
  },
  {
    "id": "raz-uni-100",
    "sectionId": 3,
    "number": 100,
    "text": "En mecánica analítica hamiltoniana, ¿qué garantiza el Teorema de Liouville para el espacio de fases de un sistema conservativo?",
    "options": [
      "La densidad del volumen en el espacio de fases ocupado por un conjunto de estados del sistema permanece estrictamente constante a lo largo del tiempo (el flujo hamiltoniano es incompresible)",
      "Que la energía total siempre disminuye por fricción",
      "Que los electrones caen hacia el núcleo atómico",
      "Que la temperatura tiende al cero absoluto"
    ],
    "correctIndex": 0,
    "explanation": "El teorema de Liouville preserva la medida de Lebesgue en el espacio de fases, fundamentando la formulación axiomática de la física estadística de Gibbs.",
    "skill": "Teorema de Liouville",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Estadística",
    "subtopic": "Mecánica Hamiltoniana"
  }
];
