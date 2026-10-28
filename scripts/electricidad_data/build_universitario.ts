import { Question } from '../../src/types';

export const ELE_UNIVERSITARIO_21_100: Question[] = [
  {
    id: "ele-uni-21",
    sectionId: 10,
    number: 21,
    text: "En la teoría de componentes simétricas de Fortescue para sistemas trifásicos desequilibrados, ¿cuál es el valor del operador complejo 'a'?",
    options: [
      "a = 1∠120° = -0.5 + j(√3/2) = e^(j2π/3)",
      "a = 1∠90° = j",
      "a = 1∠180° = -1",
      "a = 1∠60° = 0.5 + j(√3/2)"
    ],
    correctIndex: 0,
    explanation: "El operador 'a' representa una rotación angular antihoraria de 120° en el plano complejo, cumpliendo propiedades fundamentales como a² = 1∠240°, a³ = 1 y 1 + a + a² = 0.",
    skill: "Componentes Simétricas de Fortescue",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Sistemas Eléctricos de Potencia",
    subtopic: "Operador Complejo a"
  },
  {
    id: "ele-uni-22",
    sectionId: 10,
    number: 22,
    text: "En la descomposición de Fortescue, ¿cómo se definen las tres secuencias de un conjunto trifásico asimétrico de fasores?",
    options: [
      "Secuencia positiva (igual magnitud, desfasados 120° con rotación a-b-c); Secuencia negativa (igual magnitud, desfasados 120° con rotación a-c-b); Secuencia cero u homopolar (igual magnitud y exactamente en fase)",
      "Secuencia par, impar y armónica",
      "Secuencia resistiva, inductiva y capacitiva",
      "Secuencia activa, reactiva y aparente"
    ],
    correctIndex: 0,
    explanation: "El teorema de Fortescue demuestra que cualquier conjunto de n fasores coplanares desequilibrados puede descomponerse en n conjuntos simétricos de componentes balanceadas.",
    skill: "Teorema de Fortescue",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Análisis de Desequilibrios",
    subtopic: "Definición de Secuencias Positiva, Negativa y Cero"
  },
  {
    id: "ele-uni-23",
    sectionId: 10,
    number: 23,
    text: "¿Cuál es la matriz de transformación inversa que permite calcular los fasores de fase originales [Va, Vb, Vc]^T a partir de las componentes simétricas [V0, V1, V2]^T?",
    options: [
      "Matriz A con filas: [1, 1, 1], [1, a², a], [1, a, a²]",
      "Matriz A con filas: [1, 0, 0], [0, 1, 0], [0, 0, 1]",
      "Matriz A con filas: [a, a², 1], [1, a, a²], [a², 1, a]",
      "Matriz A con filas: [1, -1, 0], [0, 1, -1], [-1, 0, 1]"
    ],
    correctIndex: 0,
    explanation: "Va = V0 + V1 + V2; Vb = V0 + a²·V1 + a·V2; Vc = V0 + a·V1 + a²·V2, estructurada mediante la matriz clásica de transformación simétrica A.",
    skill: "Matriz de Transformación Simétrica",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Componentes Simétricas",
    subtopic: "Matriz A de Transformación"
  },
  {
    id: "ele-uni-24",
    sectionId: 10,
    number: 24,
    text: "En el análisis de fallas asimétricas mediante redes de secuencia, ¿cómo deben interconectarse las redes de secuencia positiva, negativa y cero para modelar un cortocircuito monofásico franco a tierra en la fase A?",
    options: [
      "Las tres redes de secuencia (positiva, negativa y cero) se conectan en serie (Ia1 = Ia2 = Ia0)",
      "Las tres redes de secuencia se conectan en paralelo puro",
      "Se conecta únicamente la red de secuencia cero",
      "Se conectan en paralelo la secuencia positiva y negativa, dejando abierta la de secuencia cero"
    ],
    correctIndex: 0,
    explanation: "En una falla monofásica a tierra: Ib = 0 e Ic = 0; esto impone Ia1 = Ia2 = Ia0 = Ia / 3, condición que se satisface rigurosamente al conectar los tres circuitos equivalentes de secuencia en serie.",
    skill: "Análisis de Fallas Asimétricas",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Cortocircuito Monofásico a Tierra",
    subtopic: "Interconexión en Serie de Redes de Secuencia"
  },
  {
    id: "ele-uni-25",
    sectionId: 10,
    number: 25,
    text: "¿Cuál es la expresión para la corriente de secuencia positiva (Ia1) en una falla monofásica a tierra a través de una impedancia de falla Zf con tensión prefalla Vf?",
    options: [
      "Ia1 = Vf / (Z1 + Z2 + Z0 + 3 × Zf)",
      "Ia1 = Vf / (Z1 + Z2)",
      "Ia1 = Vf / (Z1 + Z0 + Zf)",
      "Ia1 = Vf / (3 × Z1)"
    ],
    correctIndex: 0,
    explanation: "Al estar en serie, la impedancia total vista por la fuente prefalla Vf es la suma de las impedancias Thevenin de secuencia Z1, Z2, Z0 más el triple de la impedancia de neutro/falla (3·Zf) debido a que por la tierra circulan las tres corrientes de secuencia sumadas.",
    skill: "Cálculo de Cortocircuitos",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Falla Monofásica a Tierra",
    subtopic: "Fórmula de Corriente de Falla Monofásica"
  },
  {
    id: "ele-uni-26",
    sectionId: 10,
    number: 26,
    text: "¿Cómo se interconectan las redes de secuencia para modelar una falla bifásica aislada entre las fases B y C (sin contacto a tierra)?",
    options: [
      "La red de secuencia positiva se conecta en paralelo con la red de secuencia negativa, mientras que la red de secuencia cero permanece desconectada (Ia0 = 0)",
      "Las tres redes se conectan en serie",
      "Las tres redes se conectan en paralelo",
      "La red de secuencia negativa se cortocircuita internamente"
    ],
    correctIndex: 0,
    explanation: "Al no haber retorno por tierra, Ia0 = 0. Dado que Va1 = Va2 e Ia1 = -Ia2, las condiciones en los bornes de falla equivalen a la conexión en paralelo de las redes de secuencia positiva y negativa.",
    skill: "Análisis de Fallas",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Cortocircuito Bifásico",
    subtopic: "Interconexión en Paralelo de Positiva y Negativa"
  },
  {
    id: "ele-uni-27",
    sectionId: 10,
    number: 27,
    text: "¿Cómo se interconectan las redes de secuencia para representar una falla bifásica a tierra (fases B y C en contacto entre sí y con tierra)?",
    options: [
      "Las tres redes de secuencia (positiva, negativa y cero) se conectan en paralelo entre sí en los terminales de falla",
      "Las tres redes se conectan en serie",
      "Se conecta la secuencia positiva en serie con el paralelo de negativa y cero",
      "La red de secuencia cero queda abierta"
    ],
    correctIndex: 0,
    explanation: "Las condiciones de borde son Vb = Vc = 0 y Va1 = Va2 = Va0, lo cual exige que las tres mallas equivalentes de secuencia queden en paralelo en el punto de falla.",
    skill: "Análisis de Fallas",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Cortocircuito Bifásico a Tierra",
    subtopic: "Redes en Paralelo"
  },
  {
    id: "ele-uni-28",
    sectionId: 10,
    number: 28,
    text: "En un cortocircuito trifásico simétrico franco en barras de una central eléctrica, ¿qué componentes de secuencia aparecen?",
    options: [
      "Únicamente componentes de secuencia positiva (Ia2 = 0 e Ia0 = 0)",
      "Únicamente componentes de secuencia negativa",
      "Las tres secuencias con magnitudes idénticas",
      "Únicamente componentes de secuencia cero"
    ],
    correctIndex: 0,
    explanation: "Al ser una perturbación perfectamente simétrica y equilibrada en las tres fases, el sistema conserva su balance; por tanto, no se inducen corrientes de secuencia negativa ni homopolar, resolviéndose el circuito monofásico equivalente de secuencia positiva directa.",
    skill: "Fallas Trifásicas Simétricas",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Cortocircuito Trifásico",
    subtopic: "Exclusividad de Secuencia Positiva"
  },
  {
    id: "ele-uni-29",
    sectionId: 10,
    number: 29,
    text: "En la matriz de admitancia de barras [Y_bus] de dimensión N × N de un sistema eléctrico de potencia, ¿cómo se calculan los elementos de la diagonal principal (Y_ii)?",
    options: [
      "Y_ii es la suma de las admitancias de todos los elementos conectados directamente a la barra i (incluyendo líneas a otras barras y elementos en derivación a tierra)",
      "Y_ii es el negativo de la suma de admitancias",
      "Y_ii es el producto de todas las admitancias adyacentes",
      "Y_ii siempre es igual a 1"
    ],
    correctIndex: 0,
    explanation: "Por la Ley de Corrientes de Kirchhoff nodal: el elemento propio Y_ii (admitancia propia de la barra) es la suma escalar de todas las admitancias incidentes en el nodo i: Y_ii = y_i0 + ∑_{k≠i} y_ik.",
    skill: "Matriz Ybus",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Formulación Matricial de Redes",
    subtopic: "Elementos Diagonales Propios de Ybus"
  },
  {
    id: "ele-uni-30",
    sectionId: 10,
    number: 30,
    text: "¿Cómo se calculan los elementos fuera de la diagonal principal (Y_ik con i ≠ k) en la matriz de admitancia de barras [Y_bus]?",
    options: [
      "Y_ik = -y_ik  (el negativo de la admitancia de la rama que conecta directamente la barra i con la barra k)",
      "Y_ik = +y_ik",
      "Y_ik = 1 / y_ik",
      "Y_ik = y_ik²"
    ],
    correctIndex: 0,
    explanation: "Los elementos mutuos fuera de la diagonal representan la admitancia de transferencia cambiada de signo (-y_ik). Si no existe una línea de interconexión directa entre la barra i y la k, Y_ik = 0 (haciendo que Y_bus sea una matriz sumamente dispersa o 'sparse').",
    skill: "Matriz Ybus",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Formulación Matricial de Redes",
    subtopic: "Elementos Mutuos de Ybus"
  },
  {
    id: "ele-uni-31",
    sectionId: 10,
    number: 31,
    text: "En el problema de Flujo de Potencia (Load Flow), ¿qué variables se especifican (conocidas) y cuáles se calculan (incógnitas) para una barra de carga tipo PQ?",
    options: [
      "Especificadas: Potencia activa (P) y Potencia reactiva (Q); Incógnitas a calcular: Magnitud de tensión (|V|) y Ángulo de fase (δ)",
      "Especificadas: |V| y δ; Incógnitas: P y Q",
      "Especificadas: P y |V|; Incógnitas: Q y δ",
      "Especificadas: I y cos(φ); Incógnitas: Z y P"
    ],
    correctIndex: 0,
    explanation: "En una barra PQ (nodo de consumo o subestación de distribución), la demanda P y Q se conoce a priori por perfiles de carga; el algoritmo iterativo de flujo resuelve el voltaje complejo resultante (|V|∠δ).",
    skill: "Flujo de Potencia",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Clasificación de Barras",
    subtopic: "Barra de Carga Tipo PQ"
  },
  {
    id: "ele-uni-32",
    sectionId: 10,
    number: 32,
    text: "¿Qué variables se conocen y cuáles se calculan en una barra de generación tipo PV (nodo de control de tensión)?",
    options: [
      "Especificadas: Potencia activa (P) y Magnitud de tensión (|V|); Incógnitas a calcular: Potencia reactiva generada (Q) y Ángulo de fase (δ)",
      "Especificadas: P y Q; Incógnitas: |V| y δ",
      "Especificadas: |V| y δ; Incógnitas: P y Q",
      "Especificadas: Solo la reactancia Z; Incógnitas: P, Q y V"
    ],
    correctIndex: 0,
    explanation: "En una central eléctrica se fija la inyección de potencia activa por el gobernador de la turbina y la tensión en bornes mediante el regulador automático de voltaje (AVR); el cálculo de flujo determina la reactancia reactiva Q requerida y el ángulo δ.",
    skill: "Flujo de Potencia",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Clasificación de Barras",
    subtopic: "Barra de Generación Tipo PV"
  },
  {
    id: "ele-uni-33",
    sectionId: 10,
    number: 33,
    text: "¿Cuál es la función de la barra de referencia o barra oscilante (Slack Bus / Swing Bus) en la solución del flujo de potencia?",
    options: [
      "Fijar el ángulo de referencia de la red (δ = 0°) y absorber o suministrar la potencia activa y reactiva faltante para balancear exactamente las pérdidas de transmisión del sistema",
      "Estabilizar la frecuencia a 60 Hz mediante condensadores estáticos",
      "Medir los armónicos de tercer orden de los transformadores",
      "Desconectar el sistema ante un cortocircuito"
    ],
    correctIndex: 0,
    explanation: "Dado que las pérdidas totales en las líneas (I²R) son desconocidas hasta calcular todas las tensiones y corrientes, se designa una barra de gran potencia (Slack) con |V| y δ=0 conocidos para absorber el desbalance residual de P y Q.",
    skill: "Flujo de Potencia",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Barra Slack",
    subtopic: "Compensación de Pérdidas y Referencia Angular"
  },
  {
    id: "ele-uni-34",
    sectionId: 10,
    number: 34,
    text: "¿Por qué el método iterativo de Newton-Raphson es el estándar preferido frente a Gauss-Seidel para la resolución de flujos de carga en sistemas eléctricos de gran escala?",
    options: [
      "Porque exhibe convergencia cuadrática (converge en 3 a 5 iteraciones independientemente del tamaño del sistema) y es insensible a la elección de la barra slack",
      "Porque no utiliza matrices ni derivadas",
      "Porque requiere menos memoria RAM al no invertir matrices",
      "Porque solo funciona con números reales positivos"
    ],
    correctIndex: 0,
    explanation: "Newton-Raphson aproxima las ecuaciones no lineales por series de Taylor utilizando la matriz Jacobiana de derivadas parciales, logrando convergencia cuadrática extremadamente robusta y rápida.",
    skill: "Métodos Numéricos en Sistemas de Potencia",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Algoritmo de Newton-Raphson",
    subtopic: "Convergencia Cuadrática del Flujo de Potencia"
  },
  {
    id: "ele-uni-35",
    sectionId: 10,
    number: 35,
    text: "¿Qué cuatro submatrices componen la matriz Jacobiana [J] en el algoritmo de Newton-Raphson para flujo de potencia en coordenadas polares?",
    options: [
      "J = [ [∂P/∂δ, ∂P/∂|V|], [∂Q/∂δ, ∂Q/∂|V|] ]",
      "J = [ [P, Q], [V, δ] ]",
      "J = [ [∂V/∂P, ∂V/∂Q], [∂δ/∂P, ∂δ/∂Q] ]",
      "J = [ [R, X], [G, B] ]"
    ],
    correctIndex: 0,
    explanation: "La matriz Jacobiana relaciona linealmente las desviaciones de potencias activa y reactiva (ΔP, ΔQ) con las correcciones en los ángulos y módulos de tensión (Δδ, Δ|V|).",
    skill: "Matriz Jacobiana",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Algoritmo de Newton-Raphson",
    subtopic: "Estructura de la Matriz Jacobiana"
  },
  {
    id: "ele-uni-36",
    sectionId: 10,
    number: 36,
    text: "¿En qué desacoplamiento físico de redes de alta tensión se fundamenta el método de Flujo de Carga Desacoplado Rápido (Fast Decoupled Power Flow)?",
    options: [
      "El fuerte acoplamiento existente entre P y el ángulo δ (P-δ), y entre Q y el módulo de tensión |V| (Q-|V|), despreciando los términos cruzados ∂P/∂|V| ≈ 0 y ∂Q/∂δ ≈ 0",
      "El desacoplamiento entre corriente continua y alterna",
      "La anulación de la resistencia de línea en frío",
      "La suposición de que el voltaje es constante en todas las barras"
    ],
    correctIndex: 0,
    explanation: "En redes de transmisión con alta relación reactancia/resistencia (X >> R), las variaciones angulares influyen predominantemente sobre el flujo de MW, mientras que las variaciones de magnitud de tensión gobiernan el flujo de MVAR, permitiendo desacoplar la Jacobiana en dos matrices constantes independientes B' y B''.",
    skill: "Flujo Desacoplado Rápido",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Algoritmos Simplificados",
    subtopic: "Desacoplamiento P-Delta y Q-V"
  },
  {
    id: "ele-uni-37",
    sectionId: 10,
    number: 37,
    text: "En una línea de transmisión larga modelada con parámetros distribuidos, ¿cómo se define la Constante de Propagación compleja γ?",
    options: [
      "γ = √(z × y) = α + jβ  (donde α es la constante de atenuación en Neper/km y β es la constante de fase en rad/km)",
      "γ = z / y",
      "γ = 1 / √(L × C)",
      "γ = R × G + j(ωL × ωC)"
    ],
    correctIndex: 0,
    explanation: "A partir de las ecuaciones de los telegrafistas, la propagación ondulatoria a lo largo de la línea se rige por γ = √[(R + jωL)(G + jωC)] = α + jβ.",
    skill: "Ecuaciones de Onda en Líneas",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Líneas de Transmisión Largas",
    subtopic: "Constante de Propagación Compleja Gamma"
  },
  {
    id: "ele-uni-38",
    sectionId: 10,
    number: 38,
    text: "¿Qué fenómeno de sobretensión en régimen permanente (Efecto Ferranti) ocurre en el extremo receptor de una línea de transmisión de muy alta tensión larga cuando opera en vacío o con carga muy liviana?",
    options: [
      "La tensión en el extremo receptor es mayor que la tensión aplicada en el extremo transmisor (Vr > Vs)",
      "La tensión en el receptor cae a cero voltios",
      "La corriente de cortocircuito se invierte hacia el generador",
      "La frecuencia de la línea se duplica"
    ],
    correctIndex: 0,
    explanation: "La corriente capacitiva transversal de carga de la línea (Ic = jωC·V) fluye por la reactancia inductiva serie de la línea (jωL), produciendo una elevación de potencial en fase con la tensión transmisora: ΔV = -ω²·L·C·V, resultando en Vr > Vs.",
    skill: "Transmisión en Alta Tensión",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Fenómenos de Línea",
    subtopic: "Efecto Ferranti"
  },
  {
    id: "ele-uni-39",
    sectionId: 10,
    number: 39,
    text: "¿Qué equipo de compensación en derivación se instala en los extremos de líneas largas de extra alta tensión para mitigar el Efecto Ferranti y absorber el exceso de reactivos capacitivos en baja carga?",
    options: [
      "Reactores inductivos en derivación (Shunt Reactors)",
      "Bancos de condensadores en serie",
      "Transformadores elevadores adicionales",
      "Resistores amortiguadores de carbón"
    ],
    correctIndex: 0,
    explanation: "Los reactores shunt son bobinas inductivas de gran potencia conectadas entre fase y tierra que absorben la potencia reactiva generada por la capacitancia distribuida de la línea, estabilizando el perfil de tensión dentro de los límites permisibles.",
    skill: "Compensación Reactiva en Transmisión",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Control de Tensión en Redes",
    subtopic: "Reactores Shunt"
  },
  {
    id: "ele-uni-40",
    sectionId: 10,
    number: 40,
    text: "¿Cómo se define la Potencia Natural o Límite de Carga de Impedancia de Onda (SIL - Surge Impedance Loading) de una línea de transmisión?",
    options: [
      "SIL = V_L² / Z_c  (la potencia activa trifásica transferida cuando la reactancia inductiva serie y la admitancia capacitiva paralelo se equilibran exactamente)",
      "SIL = V_L × I_max",
      "SIL = Z_c / V_L²",
      "SIL = √3 × V_L × I_linea × 0.5"
    ],
    correctIndex: 0,
    explanation: "Cuando una línea opera a su potencia natural (SIL = V²/Zc), la potencia reactiva generada por la capacitancia transversal (Q_C = ωC·V²) compensa exactamente la reactiva absorbida por la inductancia serie (Q_L = ωL·I²), resultando en un perfil de tensión perfectamente plano a lo largo de toda la línea.",
    skill: "Líneas de Transmisión",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Parámetros de Redes",
    subtopic: "Surge Impedance Loading (SIL)"
  },
  {
    id: "ele-uni-41",
    sectionId: 10,
    number: 41,
    text: "¿Qué equipo FACTS (Flexible AC Transmission System) de compensación serie utiliza condensadores en serie con la línea para reducir la reactancia inductiva total de transferencia y elevar la capacidad de transmisión térmica y de estabilidad?",
    options: ["TCSC (Thyristor Controlled Series Capacitor) o condensador serie fijo (FSC)", "STATCOM", "SVC", "Transformador desfasador"],
    correctIndex: 0,
    explanation: "La compensación serie disminuye la reactancia neta de la línea (X_eq = X_L - X_C), incrementando directamente la potencia máxima transferible P_max = (Vs·Vr / X_eq)·sen(δ) y mejorando la estabilidad angular.",
    skill: "Sistemas FACTS",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Compensación Serie",
    subtopic: "TCSC y FSC"
  },
  {
    id: "ele-uni-42",
    sectionId: 10,
    number: 42,
    text: "¿Qué dispositivo FACTS basado en un inversor de fuente de tensión (VSC) con transistores IGBT conectados en derivación a la red suministra o absorbe potencia reactiva dinámica ultra-rápida sin depender de grandes condensadores o reactores?",
    options: ["STATCOM (Static Synchronous Compensator)", "Compensador Estático de Var clásico (SVC con TCR/TSC)", "Reactor de puesta a tierra", "Cambiador de tomas bajo carga"],
    correctIndex: 0,
    explanation: "El STATCOM actúa como una fuente síncrona virtual de tensión alterna: variando la magnitud relativa de su tensión generada respecto a la de red inyecta o absorbe corriente puramente reactiva en menos de un ciclo, incluso ante tensiones de red muy deprimidas (comportamiento de fuente de corriente constante).",
    skill: "Dispositivos FACTS Modernos",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Compensación Dinámica",
    subtopic: "STATCOM"
  },
  {
    id: "ele-uni-43",
    sectionId: 10,
    number: 43,
    text: "¿Cuál es la ecuación de oscilación del rotor (Swing Equation) que modela la dinámica electromecánica de un generador síncrono durante perturbaciones en la red?",
    options: [
      "M × (d²δ / dt²) = P_m - P_e  (o J × d²θ/dt² = T_m - T_e)",
      "M × (dδ / dt) = P_m + P_e",
      "d²δ / dt² + ω₀² × δ = 0",
      "P_m × P_e = M × d²δ/dt²"
    ],
    correctIndex: 0,
    explanation: "La ecuación del balance inercial rige la aceleración o deceleración del rotor: la diferencia entre la potencia mecánica motriz aportada por la turbina (Pm) y la potencia eléctrica electromagnética demandada por la red (Pe) acelera la masa inercial de la máquina (M = 2H/ω₀).",
    skill: "Estabilidad Transitoria",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Dinámica de Sistemas de Potencia",
    subtopic: "Ecuación de Oscilación (Swing Equation)"
  },
  {
    id: "ele-uni-44",
    sectionId: 10,
    number: 44,
    text: "¿Qué postula el Criterio de Áreas Iguales para la estabilidad transitoria de un sistema de una máquina conectada a una barra infinita (SMIB)?",
    options: [
      "El generador mantendrá la estabilidad y sincronismo si el área de desaceleración (energía cinética devuelta a la red) en la curva P-δ es mayor o igual al área de aceleración generada durante la falla",
      "El área de los devanados del estator debe ser igual al área del rotor",
      "La potencia mecánica debe ser exactamente igual a la potencia reactiva en el plano de Gauss",
      "El flujo magnético durante el día debe ser igual al flujo nocturno"
    ],
    correctIndex: 0,
    explanation: "El método gráfico de áreas iguales integra la ecuación de oscilación: el área A1 bajo la curva (Pm - Pe) representa la energía cinética acumulada durante el cortocircuito; para que el rotor frene antes de perder sincronismo, debe existir un área A2 = ∫ (Pe - Pm) dδ suficiente tras despejar la falla.",
    skill: "Estabilidad Transitoria",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Criterio de Áreas Iguales",
    subtopic: "Área de Aceleración vs Desaceleración"
  },
  {
    id: "ele-uni-45",
    sectionId: 10,
    number: 45,
    text: "¿Cómo se denomina el ángulo máximo del rotor (o tiempo máximo de actuación de las protecciones t_cr) que no debe sobrepasarse para despejar un cortocircuito antes de que el generador pierda irremisiblemente el sincronismo?",
    options: [
      "Ángulo crítico de despeje (δ_cr) y tiempo crítico de despeje (CCT - Critical Clearing Time)",
      "Ángulo de deriva de corona",
      "Ángulo de disparo de puerta inverso",
      "Límite de saturación de Curie"
    ],
    correctIndex: 0,
    explanation: "Si el interruptor despeja la falla después del tiempo crítico CCT, la energía de aceleración acumulada supera la capacidad de absorción del sistema y el ángulo del rotor sobrepasa el punto de equilibrio inestable, desbocando la máquina fuera de sincronismo.",
    skill: "Estabilidad Transitoria",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Tiempo Crítico de Despeje",
    subtopic: "Ángulo Crítico Delta_cr"
  },
  {
    id: "ele-uni-46",
    sectionId: 10,
    number: 46,
    text: "En el control vectorial de motores de inducción orientado por campo (FOC - Field Oriented Control), ¿qué transformación matemática proyecta las variables trifásicas estatóricas estacionarias a-b-c en un sistema ortogonal bifásico estacionario α-β?",
    options: ["Transformada de Clarke", "Transformada de Park", "Transformada de Fourier", "Transformada de Hilbert"],
    correctIndex: 0,
    explanation: "La transformada de Clarke convierte las tres fases espaciales (desfasadas 120°) en un par de ejes perpendiculares estacionarios (ejes α y β) facilitando el procesamiento desacoplado.",
    skill: "Control de Accionamientos Eléctricos",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Control Orientado al Campo (FOC)",
    subtopic: "Transformada de Clarke"
  },
  {
    id: "ele-uni-47",
    sectionId: 10,
    number: 47,
    text: "¿Qué transformación matemática traslada los fasores del marco estacionario α-β al marco de referencia ortogonal rotatorio d-q (directo y en cuadratura) solidario con el flujo del rotor a velocidad angular síncrona ωe?",
    options: ["Transformada de Park", "Transformada de Laplace", "Transformada Z", "Transformada Wavelet"],
    correctIndex: 0,
    explanation: "La transformada de Park rota los ejes con el ángulo de flujo θe, convirtiendo corrientes y tensiones alternas sinusoidales en variables continuas (DC) constantes en régimen permanente (id e iq).",
    skill: "Control de Accionamientos Eléctricos",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Control Orientado al Campo (FOC)",
    subtopic: "Transformada de Park y Ejes d-q"
  },
  {
    id: "ele-uni-48",
    sectionId: 10,
    number: 48,
    text: "En el marco d-q orientado con el vector de flujo del rotor (λ_qr = 0), ¿qué papel físico desempeñan respectivamente las componentes de corriente del estator 'i_sd' e 'i_sq'?",
    options: [
      "i_sd controla exclusivamente el flujo magnético (corriente de magnetización) e i_sq controla independientemente el par electromagnético del motor",
      "i_sd controla la velocidad e i_sq controla la temperatura",
      "Ambas corrientes controlan únicamente el voltaje de la fuente",
      "i_sd es la corriente de neutro e i_sq es la corriente de cortocircuito"
    ],
    correctIndex: 0,
    explanation: "El algoritmo FOC emula exactamente el desacoplamiento natural de un motor de CC de excitación independiente: la corriente de eje directo 'd' fija el flujo sin alterar el par, y la de eje en cuadratura 'q' modula linealmente el torque instantáneo con respuesta de milisegundos.",
    skill: "Teoría FOC",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Control de Motores AC",
    subtopic: "Desacoplamiento de Flujo y Par en Ejes d-q"
  },
  {
    id: "ele-uni-49",
    sectionId: 10,
    number: 49,
    text: "¿En qué consiste la técnica de Modulación por Vector Espacial (SVPWM - Space Vector PWM) empleada en inversores trifásicos frente al PWM senoidal tradicional?",
    options: [
      "Sintetiza el vector de tensión de referencia mediante combinaciones ponderadas en el tiempo de los ocho vectores de conmutación básicos del inversor, incrementando la tensión fundamental de salida en un 15.5% sin sobremodulación",
      "Utiliza 64 diodos para filtrar armónicos pasivamente",
      "Conmuta los transistores a frecuencia variable aleatoria",
      "Modula únicamente la fase A manteniendo B y C apagadas"
    ],
    correctIndex: 0,
    explanation: "SVPWM aprovecha plenamente el hexágono de tensiones del inversor trifásico (6 vectores activos y 2 nulos), logrando una tensión de línea máxima de Vdc / √3 ≈ 0.577 Vdc en comparación con el límite de 0.5 Vdc del PWM senoidal estándar, reduciendo además la distorsión THD.",
    skill: "Modulación de Convertidores",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Inversores de Potencia",
    subtopic: "Vector Espacial SVPWM"
  },
  {
    id: "ele-uni-50",
    sectionId: 10,
    number: 50,
    text: "¿Qué topología de inversor multinivel fija los niveles de tensión intermedios mediante diodos de enclavamiento conectados a puntos intermedios del bus DC?",
    options: ["Inversor con diodos de enclavamiento (Diode-Clamped o Neutral-Point Clamped - NPC)", "Inversor de condensadores flotantes (Flying Capacitor)", "Inversor en cascada H-Bridge (CHB)", "Inversor push-pull"],
    correctIndex: 0,
    explanation: "El inversor NPC (creado por Nabae, Takahashi y Akagi) es el convertidor multinivel más extendido en media tensión (3.3 kV - 6.6 kV): permite generar ondas de tensión de 3 niveles con transistores de menor tensión nominal y mínimo contenido armónico.",
    skill: "Convertidores Multinivel",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Electrónica de Potencia Avanzada",
    subtopic: "Topología NPC (Neutral-Point Clamped)"
  },
  {
    id: "ele-uni-51",
    sectionId: 10,
    number: 51,
    text: "¿Cuál es la principal ventaja técnica de la transmisión en corriente continua de alta tensión (HVDC) frente a las líneas convencionales de corriente alterna (HVAC) para enlaces submarinos de más de 50 km o interconexiones asíncronas de gran distancia?",
    options: [
      "No existe reactancia inductiva ni corrientes capacitivas transversales de carga en régimen permanente, eliminando los límites de distancia por capacidad de cable y permitiendo interconectar sistemas no sincronizados",
      "No requiere estaciones convertidoras en los extremos",
      "Utiliza postes de madera rústica en lugar de torres de acero",
      "Multiplica la frecuencia de la red por dos"
    ],
    correctIndex: 0,
    explanation: "En cables submarinos de CA, la elevada capacitancia satura la corriente del conductor en pocas decenas de kilómetros solo cargando el dieléctrico. En HVDC la corriente de carga es nula en continua, permitiendo distancias submarinas de cientos de kilómetros con pérdidas mínimas.",
    skill: "Sistemas HVDC",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Transmisión en Alta Tensión",
    subtopic: "Ventajas de Enlaces HVDC"
  },
  {
    id: "ele-uni-52",
    sectionId: 10,
    number: 52,
    text: "¿Qué tecnología HVDC moderna basada en convertidores conmutados por tensión (VSC-HVDC) con IGBTs y topología modular multinivel (MMC) permite el arranque en negro (Black Start) y no requiere potencia de cortocircuito en las redes receptoras?",
    options: ["VSC-HVDC con convertidores MMC (Modular Multilevel Converters)", "LCC-HVDC con tiristores convencionales conmutados por línea", "Rectificadores de vapor de mercurio", "Enlaces bipolares de resonancia ferroeléctrica"],
    correctIndex: 0,
    explanation: "A diferencia de los LCC clásicos que requieren redes de CA fuertes para conmutar los tiristores y absorben enormes cantidades de reactivos, los convertidores VSC-MMC controlan P y Q de forma totalmente independiente y pueden alimentar redes totalmente desenergizadas (Black Start).",
    skill: "Tecnología HVDC Moderna",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Convertidores VSC-MMC",
    subtopic: "VSC-HVDC y Arranque en Negro"
  },
  {
    id: "ele-uni-53",
    sectionId: 10,
    number: 53,
    text: "¿Qué fenómeno no lineal de oscilación transitoria de tensión y corriente destructiva se produce por la interacción entre la capacitancia de una línea o cable y la inductancia no lineal de un transformador que entra en saturación magnética?",
    options: ["Ferrorresonancia", "Resonancia subsincrónica (SSR)", "Efecto Hall cuántico", "Chisporroteo de corona"],
    correctIndex: 0,
    explanation: "La ferrorresonancia es una resonancia no lineal que puede provocar sobretensiones permanentes elevadísimas y formas de onda caóticas al conmutar transformadores en vacío con líneas capacitivas desbalanceadas.",
    skill: "Transitorios Electromagnéticos",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Fenómenos No Lineales",
    subtopic: "Ferrorresonancia en Redes Eléctricas"
  },
  {
    id: "ele-uni-54",
    sectionId: 10,
    number: 54,
    text: "¿Qué fenómeno dinámico (Resonancia Subsincrónica - SSR) provocó el histórico daño en el eje de la central de Mohave al interactuar condensadores en serie de compensación con los modos torsionales mecánicos del eje turbina-generador?",
    options: [
      "La frecuencia de resonancia eléctrica de la red compensada en serie es menor que la frecuencia síncrona (f_el < 60 Hz), generando un campo magnético que interactúa a frecuencia complementaria con una frecuencia propia mecánica de torsión del eje",
      "La fractura por congelamiento del agua de refrigeración del estator",
      "La inversión repentina del campo magnético terrestre",
      "La saturación de los disyuntores de caja moldeada"
    ],
    correctIndex: 0,
    explanation: "En líneas con compensación serie la frecuencia eléctrica natural es f_er = f₀√(X_C/X_L) < f₀. En el rotor esto induce corrientes a frecuencia subsíncrona complementaria (f₀ - f_er) que, si coincide con un modo de oscilación mecánica torsional del eje masa-resorte, produce fatiga por resonancia y rotura catastrófica del eje.",
    skill: "Dinámica Subsincrónica",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Interacciones Torsionales",
    subtopic: "Resonancia Subsincrónica (SSR)"
  },
  {
    id: "ele-uni-55",
    sectionId: 10,
    number: 55,
    text: "¿Cómo se define el modelo de reactancias transitorias y subtransitorias en el eje directo (d) de una máquina síncrona tras la ocurrencia de un cortocircuito en sus bornes?",
    options: [
      "Xd'' (reactancia subtransitoria inicial, mínima impedancia y máxima corriente en los primeros ciclos) < Xd' (reactancia transitoria intermedia) < Xd (reactancia síncrona de régimen permanente)",
      "Xd'' > Xd' > Xd",
      "Xd'' = Xd' = Xd en todo momento",
      "Xd'' es resistiva y Xd es puramente capacitiva"
    ],
    correctIndex: 0,
    explanation: "En los primeros instantes (0 a 20-50 ms), las corrientes inducidas en los devanados amortiguadores expulsan el flujo del rotor, presentando una reactancia pequeñísima Xd'' y una corriente inicial enorme (corriente subtransitoria); luego decae a Xd' y finalmente al régimen síncrono permanente Xd.",
    skill: "Máquinas Síncronas en Falla",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Parámetros Subtransitorios",
    subtopic: "Secuencia Xd'' < Xd' < Xd"
  },
  {
    id: "ele-uni-56",
    sectionId: 10,
    number: 56,
    text: "¿Qué componente aperiódica continua (offset DC) aparece en la corriente de cortocircuito de una máquina síncrona o transformador cuando la falla se produce en el instante en que la tensión sinusoidal cruza por cero?",
    options: [
      "Una corriente unidireccional exponencialmente decreciente que asimetriza completamente la onda en los primeros ciclos, duplicando casi el pico de corriente de cresta (Ip ≈ 1.8 a 2.0 × √2 × I_rms)",
      "Un armónico de frecuencia infinita",
      "Una tensión negativa que apaga el arco",
      "Una corriente capacitiva pura de alta frecuencia"
    ],
    correctIndex: 0,
    explanation: "Por la ley de conservación del flujo magnético (o inductancia que impide discontinuidades de corriente), si la corriente antes de la falla era cero y el cortocircuito ocurre cuando la fem senoidal exige corriente máxima, aparece una componente libre de corriente continua (offset DC) que decae con la constante de tiempo L/R del sistema.",
    skill: "Análisis de Transitorios de Cortocircuito",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Corriente de Cortocircuito Asimétrica",
    subtopic: "Componente Unidireccional Offset DC"
  },
  {
    id: "ele-uni-57",
    sectionId: 10,
    number: 57,
    text: "¿Qué relé de protección basado en la medición del cociente entre la tensión y la corriente local (Z = V / I) se utiliza como protección principal de líneas de transmisión de alta y extra alta tensión?",
    options: [
      "Relé de Distancia (ANSI 21) con característica Mho, cuadrilateral o lenticular",
      "Relé de sobrecorriente temporizado simple (ANSI 51)",
      "Relé térmico bimetálico (ANSI 49)",
      "Relé de tensión nula (ANSI 27)"
    ],
    correctIndex: 0,
    explanation: "El relé de distancia mide la impedancia compleja aparente de la línea hasta el punto de falla. Dado que la impedancia de una línea es directamente proporcional a su longitud física en kilómetros, el relé determina si la falla se halla dentro de su zona de protección (Zona 1 instantánea al 80-85%, Zona 2 con retardo al 120%).",
    skill: "Protección de Líneas de Transmisión",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Protección de Distancia",
    subtopic: "Relé ANSI 21 y Zonas de Impedancia"
  },
  {
    id: "ele-uni-58",
    sectionId: 10,
    number: 58,
    text: "¿Por qué la Zona 1 de un relé de distancia (ANSI 21) se calibra deliberadamente para cubrir únicamente entre el 80% y 85% de la longitud total de la línea protegida y no el 100%?",
    options: [
      "Para evitar disparos intempestivos instantáneos ante fallas externas en la barra remota debido a errores combinados de precisión de los transformadores de medida (TC/TP), modelado de la línea y transitorios de red",
      "Porque los cables pierden longitud con el calor",
      "Porque la norma exige ahorrar energía en el microprocesador",
      "Para permitir que el interruptor remoto dispare primero siempre"
    ],
    correctIndex: 0,
    explanation: "La tolerancia en la medición de impedancia es de aproximadamente 10-15%. Ajustar Zona 1 al 100% provocaría sobrealcance (overreaching), disparando falsamente la línea propia ante fallas que pertenecen a la subestación adyacente.",
    skill: "Ajuste de Relés de Distancia",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Protección de Distancia",
    subtopic: "Zona 1 al 85% y Margen de Sobrealcance"
  },
  {
    id: "ele-uni-59",
    sectionId: 10,
    number: 59,
    text: "¿Cómo se logra el disparo instantáneo al 100% de la longitud de la línea en ambos extremos en esquemas de teleprotección modernos para líneas de transmisión?",
    options: [
      "Mediante canales de comunicación digital por fibra óptica (OPGW) o portadora por línea (PLC) que intercambian señales de permiso de disparo (esquemas POTT, PUTT o comparación direccional)",
      "Aumentando el calibre del cable de guarda al doble",
      "Conectando los dos interruptores mecánicamente con una barra de acero",
      "Instalando descargadores de sobretensión cada 100 metros"
    ],
    correctIndex: 0,
    explanation: "Los esquemas asistidos por comunicación (ej. POTT - Permissive Overreaching Transfer Trip) permiten que cuando ambos relés ven falla en Zona 2 adelantada en dirección hacia la línea, envíen una señal de disparo instantáneo transferida, despejando fallas al 100% de la línea en menos de 2 ciclos.",
    skill: "Teleprotección de Líneas",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Comunicaciones en Protecciones",
    subtopic: "Esquemas POTT y Fibra OPGW"
  },
  {
    id: "ele-uni-60",
    sectionId: 10,
    number: 60,
    text: "¿Qué característica de bloqueo por oscilación de potencia (Power Swing Blocking - PSB) se implementa en los relés de distancia para evitar disparos erróneos durante oscilaciones de potencia estables?",
    options: [
      "Diferenciar la velocidad de cambio de la impedancia aparente: en una falla la impedancia salta instantáneamente dentro de la zona, mientras que en una oscilación de potencia la impedancia se desplaza de forma continua y relativamente lenta por el plano R-X",
      "Desconectar el cable de tierra temporalmente",
      "Apagar el relé durante las tormentas eléctricas",
      "Filtrar todas las frecuencias mayores a 10 Hz"
    ],
    correctIndex: 0,
    explanation: "Una oscilación electromecánica de potencia transitoria mueve el fasor de impedancia Z lentamente a través de los círculos de disparo. El detector PSB mide el tiempo que tarda la impedancia en cruzar dos límites concéntricos; si es lento, bloquea el disparo de distancia.",
    skill: "Estabilidad de Protecciones",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Bloqueo por Oscilación de Potencia",
    subtopic: "Distinción Falla vs Oscilación Estable"
  },
  {
    id: "ele-uni-61",
    sectionId: 10,
    number: 61,
    text: "En la protección diferencial de transformadores de potencia (ANSI 87T), ¿por qué es indispensable aplicar una restricción de segundo armónico (harmonic restraint)?",
    options: [
      "Para evitar el disparo en falso ocasionado por la corriente de magnetización transitoria de inserción (inrush current) al energizar el transformador en vacío",
      "Para amortiguar las oscilaciones térmicas del aceite",
      "Para evitar la penetración de humedad en el papel",
      "Para sincronizar el ángulo del rotor del generador"
    ],
    correctIndex: 0,
    explanation: "La corriente de inrush al energizar un transformador presenta un pico unipolar intenso que entra por el primario sin salir por el secundario (simulando una gran corriente diferencial de falla interna). Al tener la onda de inrush un altísimo contenido de segundo armónico (> 15-20%), el relé reconoce la energización y bloquea el disparo.",
    skill: "Protección Diferencial de Transformadores",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Relé ANSI 87T",
    subtopic: "Bloqueo por Segundo Armónico ante Inrush"
  },
  {
    id: "ele-uni-62",
    sectionId: 10,
    number: 62,
    text: "¿Qué armónico característico se utiliza en los relés de protección diferencial 87T para restringir o temporizar el disparo ante fenómenos de sobreexcitación (V/Hz elevado) que saturan el núcleo?",
    options: ["Quinto armónico", "Tercer armónico", "Séptimo armónico", "Noveno armónico"],
    correctIndex: 0,
    explanation: "La saturación por sobreexcitación (relación tensión/frecuencia excesiva) genera corrientes de magnetización fuertemente ricas en quinto armónico; los relés numéricos modernos emplean restricción por 5.° armónico para distinguir la sobreexcitación de un cortocircuito interno.",
    skill: "Protección Diferencial de Transformadores",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Sobreexcitación Volts/Hertz",
    subtopic: "Restricción por Quinto Armónico"
  },
  {
    id: "ele-uni-63",
    sectionId: 10,
    number: 63,
    text: "¿Cuál es el estándar de comunicación internacional (Ethernet de subestación) que define la arquitectura orientada a objetos para la interoperabilidad de IEDs y mensajes GOOSE de disparo ultrarrápido?",
    options: ["IEC 61850", "IEEE 802.11", "Modbus ASCII", "Profibus DP"],
    correctIndex: 0,
    explanation: "La norma IEC 61850 revolucionó las subestaciones digitales, reemplazando el cableado físico de cobre punto a punto por redes Ethernet con mensajes GOOSE (Generic Object Oriented Substation Events) para enclavamientos y disparos en menos de 4 ms.",
    skill: "Subestaciones Digitales",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Norma IEC 61850",
    subtopic: "Mensajes GOOSE y Subestaciones Digitales"
  },
  {
    id: "ele-uni-64",
    sectionId: 10,
    number: 64,
    text: "En una subestación digital bajo norma IEC 61850-9-2 (Bus de Proceso), ¿qué equipo digitaliza las señales analógicas de corriente y tensión en el patio y las transmite por fibra óptica como valores muestreados (Sampled Values - SV)?",
    options: ["Merging Unit (Unidad de Fusión - MU)", "Switch gestionado de nivel 3", "Osciloperturbógrafo de panel", "Gateway RTU serie"],
    correctIndex: 0,
    explanation: "La Merging Unit digitaliza las salidas de los transformadores de medida ópticos o convencionales en el patio de maniobras y transmite paquetes multicast Ethernet con los valores instantáneos muestreados sincronizados por tiempo (PTP / IEEE 1588).",
    skill: "Bus de Proceso IEC 61850",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Subestaciones Digitales",
    subtopic: "Merging Unit y Sampled Values"
  },
  {
    id: "ele-uni-65",
    sectionId: 10,
    number: 65,
    text: "¿Qué protocolo de sincronización temporal de alta precisión por red Ethernet (norma IEEE 1588 / IEC 61850-9-3) proporciona sincronismo con exactitud sub-microsegundo requerido en subestaciones digitales?",
    options: ["PTP (Precision Time Protocol / IEEE 1588)", "NTP (Network Time Protocol estándar)", "SNMP", "TCP Keepalive"],
    correctIndex: 0,
    explanation: "PTP sincroniza relojes de IEDs y Merging Units con precisión menor a 1 microsegundo mediante hardware de marcado temporal en la capa física Ethernet, esencial para correlacionar fasores y valores muestreados (SV).",
    skill: "Sincronización en Subestaciones",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Metrología de Redes",
    subtopic: "Protocolo PTP (IEEE 1588)"
  },
  {
    id: "ele-uni-66",
    sectionId: 10,
    number: 66,
    text: "¿Qué unidad de medición sincrofasorial (PMU - Phasor Measurement Unit) mide fasores de tensión y corriente sincronizados globalmente por GPS mediante el formato normalizado IEEE C37.118?",
    options: ["Sincrofasores (Synchrophasors)", "Vatímetros analógicos térmicos", "Contadores de pulsos mecánicos", "Registradores de falla locales sin antena"],
    correctIndex: 0,
    explanation: "Las PMUs muestrean la red hasta 60 veces por segundo estampando la hora precisa por satélite GPS; permiten la monitorización de área extendida (WAMS - Wide Area Monitoring Systems) observando oscilaciones inter-área de sistemas interconectados en tiempo real.",
    skill: "Sistemas WAMS y PMUs",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Monitorización de Redes Eléctricas",
    subtopic: "Medición de Sincrofasores"
  },
  {
    id: "ele-uni-67",
    sectionId: 10,
    number: 67,
    text: "En el análisis de armónicos en sistemas trifásicos según la norma IEEE 519, ¿qué límite de Distorsión de Demanda Total (TDD) y THD de tensión se fija habitualmente para sistemas en el punto de acoplamiento común (PCC) a tensiones inferiores a 69 kV?",
    options: [
      "THD de tensión no debe superar el 5.0% (y 3.0% para armónicos individuales)",
      "THD de tensión permitido de hasta el 50%",
      "TDD libre sin restricciones",
      "THD fijado exactamente en 0.001%"
    ],
    correctIndex: 0,
    explanation: "La norma IEEE 519-2022 estipula un límite estricto de THD de tensión de 5.0% en barras de baja y media tensión (V ≤ 69 kV) para proteger el aislamiento de motores y condensadores contra sobrecalentamiento dieléctrico y resonancias armónicas.",
    skill: "Normativa de Calidad de Energía",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Norma IEEE 519",
    subtopic: "Límites de THD y TDD en el PCC"
  },
  {
    id: "ele-uni-68",
    sectionId: 10,
    number: 68,
    text: "¿Cuál es la causa principal de la resonancia armónica en paralelo que puede amplificar catastróficamente las corrientes armónicas en una instalación industrial?",
    options: [
      "La coincidencia de la frecuencia de un armónico inyectado por una carga no lineal con la frecuencia natural de sintonía entre la reactancia inductiva del transformador y la capacitancia de un banco de condensadores de compensación de factor de potencia",
      "El exceso de puesta a tierra",
      "El enfriamiento forzado de los cables",
      "La caída de tensión por debajo del 1%"
    ],
    correctIndex: 0,
    explanation: "El orden armónico de resonancia viene dado por h_res = √(S_cc / Q_cap). Si coincide con el 5.° o 7.° armónico generado por rectificadores, la impedancia paralela infinita genera sobretensiones extremas que destruyen los capacitores y transformadores.",
    skill: "Calidad de Energía",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Resonancia Paralelo",
    subtopic: "Amplificación Armónica con Bancos de Capacitores"
  },
  {
    id: "ele-uni-69",
    sectionId: 10,
    number: 69,
    text: "¿Cómo se previene la resonancia armónica en bancos de compensación de potencia reactiva industrial?",
    options: [
      "Instalando reactores de desintonización en serie con los condensadores (bancos desintonizados con sintonía por debajo del menor armónico presente, ej. al 7% para 189 Hz)",
      "Aumentando la capacidad del banco de condensadores indefinidamente",
      "Desconectando la puesta a tierra de la fábrica",
      "Pintando los cables de color negro"
    ],
    correctIndex: 0,
    explanation: "El reactor de desintonización en serie con el condensador hace que el conjunto sea capacitivo a 60 Hz (compensando reactivos) pero fuertemente inductivo para frecuencias iguales o superiores al 5.° armónico (250 o 300 Hz), imposibilitando cualquier resonancia paralela.",
    skill: "Filtros de Potencia",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Compensación Reactiva",
    subtopic: "Bancos de Condensadores Desintonizados"
  },
  {
    id: "ele-uni-70",
    sectionId: 10,
    number: 70,
    text: "¿Qué equipo electrónico de potencia activo (APF - Active Power Filter) mide en tiempo real las corrientes armónicas generadas por cargas no lineales e inyecta a la red corrientes exactamente en oposición de fase para cancelarlas?",
    options: ["Filtro Activo de Potencia Shunt (Inversor controlado por corriente)", "Filtro pasivo sintonizado LC", "Transformador en zig-zag sin carga", "Bobina de choque de aire"],
    correctIndex: 0,
    explanation: "El filtro activo shunt utiliza transistores IGBT con control por histéresis o modulación PWM para inyectar una corriente de compensación I_comp = -I_armónicos, logrando que la red de suministro upstream vea una corriente prácticamente senoidal pura con factor de potencia unitario.",
    skill: "Mitigación Activa de Armónicos",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Filtros Activos de Potencia",
    subtopic: "Filtro Activo Shunt"
  },
  {
    id: "ele-uni-71",
    sectionId: 10,
    number: 71,
    text: "¿Qué transformador de conexión especial de devanados (conexión Zig-Zag o interconectada) se utiliza en subestaciones que solo disponen de un devanado trifásico en delta para crear un neutro artificial accesible a tierra?",
    options: [
      "Transformador de puesta a tierra Zig-Zag (o reactor de neutro artificial)",
      "Transformador Scott-T",
      "Transformador diferencial toroidal",
      "Autotransformador elevador monofásico"
    ],
    correctIndex: 0,
    explanation: "El devanado en zig-zag divide cada fase en dos secciones enrolladas en núcleos distintos con sentidos opuestos. Para secuencia positiva presenta altísima impedancia (no consume corriente en carga normal), pero para secuencia homopolar (falla a tierra) los flujos se cancelan, ofreciendo bajísima impedancia para drenar la falla.",
    skill: "Puesta a Tierra de Sistemas",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Sistemas en Delta",
    subtopic: "Transformador Zig-Zag de Puesta a Tierra"
  },
  {
    id: "ele-uni-72",
    sectionId: 10,
    number: 72,
    text: "¿Qué transformador especial bifásico/trifásico inventado por Charles Scott permite convertir un sistema trifásico equilibrado en un sistema bifásico con tensiones iguales desfasadas 90° utilizando dos transformadores monofásicos?",
    options: ["Conexión Scott-T", "Conexión Leblanc", "Conexión Estrella abierta", "Conexión Delta invertida"],
    correctIndex: 0,
    explanation: "La conexión Scott-T emplea un transformador principal conectado entre dos fases y un transformador 'teaser' conectado al punto medio del principal con una relación de espiras de √3/2 ≈ 0.866, universal en tracción ferroviaria para equilibrar cargas bifásicas en redes trifásicas.",
    skill: "Transformaciones Especiales",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Conexiones Trifásicas Especiales",
    subtopic: "Conexión Scott-T"
  },
  {
    id: "ele-uni-73",
    sectionId: 10,
    number: 73,
    text: "En la teoría de control moderno de máquinas eléctricas, ¿en qué consiste el Control Directo del Par (DTC - Direct Torque Control)?",
    options: [
      "Controla directamente y sin modulador PWM el par electromagnético y el flujo del estator mediante comparadores de histéresis y una tabla óptima de conmutación de vectores de tensión del inversor",
      "Controla el motor variando la tensión de excitación del neutro",
      "Requiere un sensor de posición de alta resolución obligatoriamente en el eje",
      "Transforma la corriente alterna en pulsos de radio"
    ],
    correctIndex: 0,
    explanation: "El DTC (desarrollado por Depenbrock y Takahashi) prescinde de transformaciones complejas d-q y de reguladores PI desacoplados: estima el flujo estatórico y el par en tiempo real y selecciona en cada ciclo de conmutación el estado óptimo del inversor para mantener ambas magnitudes dentro de bandas de tolerancia de histéresis muy estrechas.",
    skill: "Control de Accionamientos Eléctricos",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Accionamientos de Alto Desempeño",
    subtopic: "Control Directo del Par (DTC)"
  },
  {
    id: "ele-uni-74",
    sectionId: 10,
    number: 74,
    text: "¿Qué tipo de máquina eléctrica carece por completo de devanados o imanes permanentes en el rotor y gira impulsada exclusivamente por la tendencia natural del rotor de hierro laminado saliente a alinearse en la posición de mínima reluctancia magnética?",
    options: [
      "Motor de reluctancia síncrona (SynRM) o motor de reluctancia conmutada (SRM)",
      "Motor síncrono de imanes superficiales (SPMSM)",
      "Motor de inducción con rotor bobinado",
      "Motor de corriente continua compuesto"
    ],
    correctIndex: 0,
    explanation: "Los motores de reluctancia síncrona (SynRM) consiguen eficiencias energéticas superlativas (clase IE5) sin devanados en el rotor (cero pérdidas I²R rotóricas) ni tierras raras de imanes, operando mediante el contraste de inductancias de eje directo y cuadratura (Ld >> Lq).",
    skill: "Máquinas Eléctricas Avanzadas",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Nuevas Tecnologías de Motores",
    subtopic: "Motor de Reluctancia Síncrona (SynRM)"
  },
  {
    id: "ele-uni-75",
    sectionId: 10,
    number: 75,
    text: "¿Qué generador eólico de velocidad variable utiliza un convertidor de potencia conectado al circuito rotórico que maneja únicamente entre el 25% y 30% de la potencia nominal de la turbina?",
    options: [
      "Generador de inducción doblemente alimentado (DFIG - Doubly Fed Induction Generator)",
      "Generador síncrono de imanes permanentes con convertidor de plena escala",
      "Generador de jaula de ardilla directo a red",
      "Generador de corriente continua serie"
    ],
    correctIndex: 0,
    explanation: "El DFIG conecta el estator directamente a la red eléctrica a 60 Hz mientras que el rotor bobinado se conecta mediante anillos rozantes a un convertidor back-to-back de solo el 30% de la capacidad nominal, permitiendo operar a velocidad variable con un costo sustancialmente menor.",
    skill: "Energía Eólica",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Generación Renovable",
    subtopic: "Generador Doblemente Alimentado DFIG"
  },
  {
    id: "ele-uni-76",
    sectionId: 10,
    number: 76,
    text: "¿Qué fenómeno transitorio de alta frecuencia ocurre durante la apertura de un cortocircuito en un interruptor de potencia cuando la tensión transitoria de restablecimiento (TRV) asciende a mayor velocidad que la rigidez dieléctrica recuperada del medio extintor?",
    options: [
      "Reencendido del arco eléctrico (re-ignition o restrike)",
      "Fuga de gas hacia el suelo",
      "Inversión de giro del transformador",
      "Saturación subtransitoria de Lorentz"
    ],
    correctIndex: 0,
    explanation: "La TRV (Transient Recovery Voltage) impone una carrera contra el tiempo entre la tasa de crecimiento de la tensión transitoria y la desionización del gas en la cámara; si la curva de TRV cruza la rigidez dieléctrica, el arco se restablece destructivamente con sobretensiones peligrosas.",
    skill: "Aparamenta de Alta Tensión",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Interrupción de Cortocircuitos",
    subtopic: "Tensión Transitoria de Restablecimiento (TRV)"
  },
  {
    id: "ele-uni-77",
    sectionId: 10,
    number: 77,
    text: "¿Qué método numérico en el dominio del tiempo basado en el algoritmo de Dommel es el estándar mundial utilizado por el programa EMTP (Electro-Magnetic Transient Program) para simular transitorios rápidos en redes eléctricas?",
    options: [
      "Integración trapezoidal implícita con circuitos equivalentes resistivos acompañantes de ramas L y C",
      "Método explícito de Euler",
      "Transformada rápida de Fourier de 8 puntos",
      "Diferencias finitas en una dimensión estacionaria"
    ],
    correctIndex: 0,
    explanation: "Hermann Dommel formuló el algoritmo de EMTP convirtiendo bobinas y capacitores en una resistencia equivalente histórica conectada en paralelo con una fuente de corriente de memoria, resolviendo la red completa mediante matrices nodales algebraicas en cada paso de tiempo discreto.",
    skill: "Simulación de Transitorios Electromagnéticos",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Algoritmo de Dommel",
    subtopic: "Fundamentos de EMTP / ATP"
  },
  {
    id: "ele-uni-78",
    sectionId: 10,
    number: 78,
    text: "¿Cuál es la expresión que determina la velocidad de propagación de una onda viajera de rayo a lo largo de una línea aérea con permeabilidad magnética μ y permitividad dieléctrica ε del aire?",
    options: [
      "v = 1 / √(μ × ε) ≈ 300,000 km/s (la velocidad de la luz en el vacío)",
      "v = μ × ε",
      "v = 1,000 km/h",
      "v = √(μ / ε)"
    ],
    correctIndex: 0,
    explanation: "En líneas aéreas donde el dieléctrico es el aire atmosférico (μr ≈ 1, εr ≈ 1), las ondas electromagnéticas inducidas por descargas atmosféricas se propagan a la velocidad de la luz c ≈ 3 × 10⁸ m/s.",
    skill: "Ondas Viajeras en Líneas",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Transitorios Atmosféricos",
    subtopic: "Velocidad de Propagación de Ondas de Rayo"
  },
  {
    id: "ele-uni-79",
    sectionId: 10,
    number: 79,
    text: "¿Qué ocurre con una onda viajera de sobretensión al incidir sobre el extremo abierto de una línea de transmisión (Z_carga = ∞)?",
    options: [
      "La onda de tensión se refleja con el mismo signo y amplitud, duplicándose la tensión total en el extremo abierto: V_total = 2 × V_incidente",
      "La onda de tensión se anula por completo",
      "La tensión se reduce a la mitad",
      "La onda rebota con signo negativo invirtiendo la polaridad"
    ],
    correctIndex: 0,
    explanation: "El coeficiente de reflexión de tensión en circuito abierto es Γ = (ZL - Z0)/(ZL + Z0) = +1. Al sumarse la onda incidente y la reflejada idéntica en fase, el voltaje en bornes abiertos alcanza exactamente el doble del valor pico incidente.",
    skill: "Ondas Viajeras",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Reflexión en Líneas",
    subtopic: "Duplicación de Tensión en Extremo Abierto"
  },
  {
    id: "ele-uni-80",
    sectionId: 10,
    number: 80,
    text: "¿Qué ocurre cuando una onda viajera de tensión incide sobre una línea que termina en un cortocircuito perfecto franco a tierra (Z_carga = 0)?",
    options: [
      "La tensión total en el extremo se anula (V = 0) y la onda de corriente se refleja en fase duplicando la corriente total (I_total = 2 × I_incidente)",
      "La tensión se duplica y la corriente se hace cero",
      "Ambas magnitudes desaparecen sin reflexión",
      "Se crea una oscilación a 10 GHz"
    ],
    correctIndex: 0,
    explanation: "En cortocircuito el coeficiente de reflexión de tensión es Γv = -1 (la tensión reflejada cancela a la incidente resultando V=0), mientras que el de corriente es Γi = +1, duplicándose la intensidad en el punto de contacto.",
    skill: "Ondas Viajeras",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Reflexión en Líneas",
    subtopic: "Comportamiento en Cortocircuito Franco"
  },
  {
    id: "ele-uni-81",
    sectionId: 10,
    number: 81,
    text: "¿Qué matriz relaciona las tensiones de nodos y las inyecciones de corriente en el análisis de redes mediante coordenadas de admitancia?",
    options: [
      "[I_bus] = [Y_bus] × [V_bus]",
      "[V_bus] = [Y_bus] × [I_bus]",
      "[Y_bus] = [I_bus] × [V_bus]",
      "[I_bus] = [Z_bus] × [V_bus]"
    ],
    correctIndex: 0,
    explanation: "La ecuación matricial nodal fundamental de la electrotecnia es I = Y·V, donde Y_bus es la matriz de admitancia de nudos que parametriza la topología de la red.",
    skill: "Análisis Nodal Matricial",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Ecuaciones de Redes",
    subtopic: "Ley de Ohm Nodal Matricial"
  },
  {
    id: "ele-uni-82",
    sectionId: 10,
    number: 82,
    text: "¿Cuál es la relación matemática entre la matriz de impedancia de barras [Z_bus] y la matriz de admitancia de barras [Y_bus]?",
    options: [
      "[Z_bus] = [Y_bus]⁻¹  (la matriz inversa completa)",
      "[Z_bus] es simplemente el inverso elemento a elemento de Y_bus (Z_ik = 1 / Y_ik)",
      "[Z_bus] = -[Y_bus]",
      "[Z_bus] = [Y_bus]ᵀ"
    ],
    correctIndex: 0,
    explanation: "Z_bus es la inversa matricial de Y_bus. A diferencia de Y_bus que es sumamente dispersa (casi llena de ceros), su inversa Z_bus es una matriz densa donde prácticamente ningún elemento es nulo.",
    skill: "Matrices de Redes",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Matriz Zbus",
    subtopic: "Relación con la Inversa de Ybus"
  },
  {
    id: "ele-uni-83",
    sectionId: 10,
    number: 83,
    text: "¿Por qué los elementos diagonales (Z_kk) de la matriz de impedancia de barras [Z_bus] son de trascendental importancia en el cálculo sistemático de cortocircuitos?",
    options: [
      "Porque Z_kk es exactamente la impedancia equivalente de Thévenin vista desde la barra k hacia todo el resto del sistema de potencia interconectado",
      "Porque representan la resistencia del neutro de la central",
      "Porque determinan la velocidad de sincronismo de los motores",
      "Porque indican el consumo en kilovatios-hora de la barra"
    ],
    correctIndex: 0,
    explanation: "La impedancia Thévenin en la barra k es idéntica a Z_kk; por ello, la corriente de cortocircuito trifásico inicial en la barra k se calcula directamente como Ik'' = Vf / Z_kk sin necesidad de resolver todo el sistema.",
    skill: "Cálculo Matricial de Cortocircuitos",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Matriz Zbus en Fallas",
    subtopic: "Impedancia Thévenin Zkk"
  },
  {
    id: "ele-uni-84",
    sectionId: 10,
    number: 84,
    text: "En la teoría de estabilidad de pequeña señal de sistemas de potencia, ¿qué indica la presencia de valores propios (eigenvalues) con parte real positiva (Re(λ) > 0) en la matriz de estado linealizada del sistema [A]?",
    options: [
      "Que el punto de operación es inestable y las oscilaciones crecerán exponencialmente hasta sacar el sistema de servicio",
      "Que el sistema es perfectamente asintóticamente estable",
      "Que la frecuencia es exactamente de 60 Hz",
      "Que las pérdidas de transmisión son nulas"
    ],
    correctIndex: 0,
    explanation: "Por el teorema de estabilidad de Lyapunov de primer orden, un sistema dinámico linealizado dx/dt = A·x es asintóticamente estable si y solo si todos los valores propios de A tienen partes reales estrictamente negativas (Re(λ) < 0).",
    skill: "Estabilidad de Pequeña Señal",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Valores Propios y Estabilidad",
    subtopic: "Criterio de Lyapunov y Autovalores de la Matriz A"
  },
  {
    id: "ele-uni-85",
    sectionId: 10,
    number: 85,
    text: "¿Qué equipo de control auxiliar instalado en el regulador automático de voltaje (AVR) de los generadores síncronos se encarga de amortiguar las oscilaciones electromecánicas de baja frecuencia (0.1 a 2 Hz) inyectando una señal de modulación en fase con la aceleración del rotor?",
    options: [
      "Estabilizador del Sistema de Potencia (PSS - Power System Stabilizer)",
      "Compensador síncrono desintonizado",
      "Chopper de resistencia de frenado dinámico",
      "Relé de pérdida de campo ANSI 40"
    ],
    correctIndex: 0,
    explanation: "El PSS detecta variaciones de velocidad o aceleración del eje (Δω o ΔP) e introduce un par amortiguador en el lazo de excitación mediante redes de adelanto-atraso de fase, suprimiendo oscilaciones inter-área destructivas.",
    skill: "Control de Sistemas de Potencia",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Amortiguamiento de Oscilaciones",
    subtopic: "Estabilizador PSS"
  },
  {
    id: "ele-uni-86",
    sectionId: 10,
    number: 86,
    text: "¿Qué tipo de oscilaciones electromecánicas de frecuencia típicamente comprendida entre 0.1 Hz y 0.8 Hz involucran el balanceo coherente de un grupo de centrales de una región contra otro grupo de centrales de una región distante a través de enlaces de interconexión débiles?",
    options: [
      "Modos de oscilación inter-área",
      "Modos locales de central (1 a 2 Hz)",
      "Modos subsincrónicos torsionales (10 a 45 Hz)",
      "Modos de control de excitatriz (> 5 Hz)"
    ],
    correctIndex: 0,
    explanation: "Los modos inter-área son oscilaciones globales de muy baja frecuencia entre grandes subsistemas geográficos; si no están debidamente amortiguados por PSS o FACTS, pueden inducir desconexiones en cascada de las líneas troncales.",
    skill: "Dinámica de Interconexiones",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Modos de Oscilación",
    subtopic: "Modos Inter-Área"
  },
  {
    id: "ele-uni-87",
    sectionId: 10,
    number: 87,
    text: "En el despacho económico de generación sin considerar pérdidas de transmisión, ¿cuál es la condición matemática óptima de mínimo costo de combustible para un conjunto de N centrales térmicas?",
    options: [
      "Todos los generadores en servicio deben operar al mismo costo marginal incremental de producción: dC₁/dP₁ = dC₂/dP₂ = ... = dC_N/dP_N = λ",
      "Todos los generadores deben despachar exactamente la misma potencia en MW",
      "Los generadores más viejos deben operar a plena carga y los nuevos apagados",
      "La potencia reactiva debe ser idénticamente cero en todas las barras"
    ],
    correctIndex: 0,
    explanation: "Mediante el método de multiplicadores de Lagrange, el costo total de despacho se minimiza cuando los costos incrementales de todas las unidades generadoras que no se encuentren en sus límites técnicos se igualan al multiplicador de Lagrange λ (costo marginal del sistema).",
    skill: "Economía de Sistemas de Potencia",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Despacho Económico",
    subtopic: "Criterio de Costo Marginal Incremental Igual"
  },
  {
    id: "ele-uni-88",
    sectionId: 10,
    number: 88,
    text: "Al incorporar las pérdidas de transmisión en el despacho económico mediante las fórmulas de coeficientes B de Kron, ¿cómo se modifica la condición óptima?",
    options: [
      "(dC_i / dP_i) × L_i = λ  (donde L_i = 1 / (1 - ∂P_loss / ∂P_i) es el factor de penalización de la central i)",
      "dC_i / dP_i = P_loss × λ",
      "L_i = 0 en todas las barras",
      "Las pérdidas se restan del costo marginal"
    ],
    correctIndex: 0,
    explanation: "El factor de penalización L_i pondera las pérdidas marginales de transporte de cada generador: a las centrales ubicadas lejos de los centros de consumo se les incrementa virtualmente su costo marginal por el sobrecosto de transmisión.",
    skill: "Despacho con Pérdidas",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Despacho Económico con Pérdidas",
    subtopic: "Factores de Penalización de Kron"
  },
  {
    id: "ele-uni-89",
    sectionId: 10,
    number: 89,
    text: "¿Qué técnica de estimación de estado en centros de control de energía (SCADA / EMS) procesa mediciones redundantes ruidosas para obtener la mejor estimación estadística en tiempo real de las tensiones y ángulos en todas las barras de la red?",
    options: [
      "Estimador de Estado por Mínimos Cuadrados Ponderados (WLS - Weighted Least Squares)",
      "Transformada rápida de Hilbert",
      "Regresión polinomial lineal sin pesos",
      "Algoritmo simplex de programación entera"
    ],
    correctIndex: 0,
    explanation: "El estimador WLS minimiza la suma ponderada del cuadrado de los residuos normalizados entre las mediciones de telemetría (P, Q, V) y las ecuaciones no lineales de red, filtrando ruidos de medición y detectando telemetrías erróneas.",
    skill: "Centros de Control de Energía (EMS)",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Estimación de Estado",
    subtopic: "Estimador WLS (Weighted Least Squares)"
  },
  {
    id: "ele-uni-90",
    sectionId: 10,
    number: 90,
    text: "¿Qué índice estadístico normalizado de fiabilidad de suministro eléctrico a nivel internacional mide la duración media acumulada de las interrupciones percibidas por un cliente en un año?",
    options: [
      "SAIDI (System Average Interruption Duration Index, expresado en horas o minutos por cliente al año)",
      "SAIFI (System Average Interruption Frequency Index)",
      "CAIDI (Customer Average Interruption Duration Index)",
      "ASAI (Average System Availability Index)"
    ],
    correctIndex: 0,
    explanation: "SAIDI = ∑ (r_i × N_i) / N_total mide la duración promedio anual de las interrupciones por usuario, siendo el principal indicador regulatorio de calidad de servicio para empresas distribuidoras de electricidad.",
    skill: "Confiabilidad en Redes de Distribución",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Indicadores de Continuidad IEEE 1366",
    subtopic: "Índice SAIDI"
  },
  {
    id: "ele-uni-91",
    sectionId: 10,
    number: 91,
    text: "¿Qué índice de fiabilidad (IEEE 1366) cuantifica la frecuencia promedio o número medio de veces que un cliente sufre una interrupción sostenida del servicio durante un año?",
    options: ["SAIFI (System Average Interruption Frequency Index)", "SAIDI", "MAIFI", "CAIFI"],
    correctIndex: 0,
    explanation: "SAIFI = ∑ N_i / N_total cuantifica la cantidad promedio de cortes sostenidos por usuario al año (expresado en interrupciones/cliente/año).",
    skill: "Confiabilidad en Redes",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Indicadores IEEE 1366",
    subtopic: "Índice SAIFI de Frecuencia de Cortes"
  },
  {
    id: "ele-uni-92",
    sectionId: 10,
    number: 92,
    text: "¿Qué fenómeno transitorio severo ocurre cuando una descarga electrostática rápida o un rayo eleva el potencial de la estructura metálica de una torre de transmisión por encima del aislamiento de la cadena de aisladores, provocando un arco desde la torre hacia el cable de fase conductor?",
    options: [
      "Flameo inverso (Backflashover)",
      "Fuga de vacío superficial",
      "Efecto corona invertido",
      "Descarga de desplazamiento de Maxwell"
    ],
    correctIndex: 0,
    explanation: "Cuando un rayo impacta la cúspide de la torre o el cable de guarda, la corriente viaja por la estructura hacia tierra; si la resistencia de puesta a tierra al pie de la torre es alta (R_pie > 15-20 Ω), el potencial V = R·I + L·di/dt de la cruceta supera la rigidez de los aisladores, saltando el arco hacia la fase (flameo inverso).",
    skill: "Protección Contra Descargas Atmosféricas",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Líneas de Alta Tensión",
    subtopic: "Flameo Inverso (Backflashover)"
  },
  {
    id: "ele-uni-93",
    sectionId: 10,
    number: 93,
    text: "¿Por qué en líneas de extra alta tensión (400 kV, 500 kV, 765 kV) se utilizan 'haces de conductores' (agrupamientos de 2, 4 o más subconductores por fase separados por espaciadores mecánicos)?",
    options: [
      "Para aumentar el radio geométrico equivalente (RGE) del conductor compuesto, reduciendo drásticamente el gradiente de potencial superficial, las pérdidas por efecto corona y la reactancia inductiva serie",
      "Para aumentar la tracción mecánica en los aisladores de retención",
      "Para permitir transportar simultáneamente corriente continua y alterna por el mismo haz",
      "Por restricciones de transporte de bobinas de cable de una sola pieza"
    ],
    correctIndex: 0,
    explanation: "El radio medio geométrico equivalente (GMR) crece sustancialmente con el espaciamiento entre subconductores del haz; esto reduce la intensidad máxima del campo electrostático en el aire, eliminando prácticamente el efecto corona y disminuyendo la reactancia serie un 20-30%.",
    skill: "Diseño de Líneas de Transmisión",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Haces de Conductores",
    subtopic: "Efecto Corona y Radio Equivalente"
  },
  {
    id: "ele-uni-94",
    sectionId: 10,
    number: 94,
    text: "En un aislamiento eléctrico compuesto por capas dieléctricas en serie con permitividades relativas ε_r1 y ε_r2 (por ejemplo, una microburbuja de gas ε_r1 = 1 inmersa en papel impregnado de aceite ε_r2 = 3.5), ¿cómo se distribuye el campo eléctrico entre los materiales?",
    options: [
      "El campo eléctrico es inversamente proporcional a la permitividad (D = ε·E = constante  →  E₁ / E₂ = ε_r2 / ε_r1), concentrándose el mayor esfuerzo eléctrico en el gas de menor permitividad",
      "El campo eléctrico se distribuye en proporción directa a la permitividad",
      "Ambos materiales soportan exactamente el mismo campo eléctrico en kV/cm",
      "El campo eléctrico en el gas es idénticamente cero"
    ],
    correctIndex: 0,
    explanation: "Por las condiciones de contorno electromagnéticas de campo normal continuo (Dn1 = Dn2), el material con menor constante dieléctrica (el aire o gas con ε_r = 1) soporta una intensidad de campo eléctrico 3.5 veces mayor que el sólido, superando su rigidez y generando descargas parciales destructivas.",
    skill: "Teoría Dieléctrica Avanzada",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Aislamientos en Alta Tensión",
    subtopic: "Distribución de Campo en Dieléctricos Estratificados"
  },
  {
    id: "ele-uni-95",
    sectionId: 10,
    number: 95,
    text: "¿Qué ensayo diagnóstico no destructivo para devanados de transformadores y generadores mide la función de transferencia de alta frecuencia aplicando pulsos de bajo voltaje para detectar desplazamientos mecánicos o deformaciones milimétricas en las espiras tras un cortocircuito?",
    options: [
      "SFRA (Sweep Frequency Response Analysis - Análisis de Respuesta en Barrido de Frecuencia)",
      "Ensayo de relación de transformación TTR a 60 Hz",
      "Medición de resistencia de aislamiento en continua",
      "Análisis cromatográfico de aceite dieléctrico"
    ],
    correctIndex: 0,
    explanation: "La geometría interna de las bobinas forma una red compleja R-L-C de parámetros distribuidos con una 'huella dactilar' de resonancias de alta frecuencia única (entre 10 Hz y 2 MHz); cualquier movimiento o abombamiento mecánico de una bobina provocado por fuerzas electrodinámicas de falla altera el espectro SFRA.",
    skill: "Mantenimiento Predictivo Avanzado",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Técnica SFRA",
    subtopic: "Detección de Deformaciones Mecánicas en Devanados"
  },
  {
    id: "ele-uni-96",
    sectionId: 10,
    number: 96,
    text: "En la coordinación del aislamiento según la norma IEC 60071, ¿cómo se define el Nivel Básico de Aislamiento al Impulso tipo Rayo (BIL - Basic Lightning Impulse Insulation Level)?",
    options: [
      "El valor de cresta de la tensión de impulso estándar normalizada (onda de 1.2 / 50 µs) que el aislamiento de un equipo debe soportar sin sufrir disrupción o perforación bajo condiciones de ensayo prescritas",
      "La tensión continua máxima de operación normal",
      "La tensión a la que se rompe el fusible primario",
      "El nivel de ruido acústico soportable en subestación"
    ],
    correctIndex: 0,
    explanation: "El BIL (Basic Impulse Level) certifica la resistencia dieléctrica ante frentes rápidos normalizados de rayo (1.2 microsegundos de subida y 50 microsegundos de caída hasta la media cresta), coordinándose con la tensión residual de los pararrayos.",
    skill: "Coordinación de Aislamiento",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Norma IEC 60071",
    subtopic: "Nivel Básico de Impulso (BIL)"
  },
  {
    id: "ele-uni-97",
    sectionId: 10,
    number: 97,
    text: "¿Qué forma de onda normalizada por normas internacionales representa el impulso de sobretensión por maniobra de interruptores en líneas de extra alta tensión (BSL - Basic Switching Impulse Level)?",
    options: ["Onda de maniobra normalizada de 250 / 2,500 µs", "Onda de rayo de 1.2 / 50 µs", "Onda senoidal pura continua a 60 Hz", "Onda cuadrada de 1 µs"],
    correctIndex: 0,
    explanation: "Las sobretensiones de maniobra son sustancialmente más lentas y de mayor energía que las de rayo: se normalizan con un tiempo de frente de 250 µs y un tiempo de cola de 2,500 µs, siendo el factor crítico determinante para el dimensionamiento de las distancias de aislamiento en redes superiores a 300 kV.",
    skill: "Coordinación de Aislamiento",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Impulso de Maniobra BSL",
    subtopic: "Forma de Onda de Maniobra 250/2500 µs"
  },
  {
    id: "ele-uni-98",
    sectionId: 10,
    number: 98,
    text: "¿Qué relación describe el Teorema de Tellegen aplicado a cualquier red eléctrica arbitraria formada por b ramas?",
    options: [
      "∑_{k=1}^b v_k × i_k = 0  (la suma algebraica de las potencias instantáneas de todas las ramas del circuito es idénticamente nula)",
      "∑ v_k = ∑ i_k en todo momento",
      "v_k / i_k = constante para cualquier red",
      "La potencia reactiva es mayor que la activa en cualquier circuito"
    ],
    correctIndex: 0,
    explanation: "El teorema de Tellegen depende únicamente de las leyes topológicas de Kirchhoff (LCK y LTK) y es válido con total generalidad para redes lineales o no lineales, variantes o invariantes en el tiempo, pasivas o activas, representando el principio universal de conservación de la potencia instantánea.",
    skill: "Teoría General de Redes",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Teoremas Avanzados de Circuitos",
    subtopic: "Teorema de Tellegen"
  },
  {
    id: "ele-uni-99",
    sectionId: 10,
    number: 99,
    text: "En el análisis de redes de dos puertos en régimen sinusoidal, ¿cuál es la relación de reciprocidad para la matriz de impedancia [Z] de una red pasiva lineal y bilateral?",
    options: ["Z₁₂ = Z₂₁  (la matriz Z es simétrica)", "Z₁₁ = -Z₂₂", "Z₁₂ × Z₂₁ = 1", "det(Z) = 0"],
    correctIndex: 0,
    explanation: "Por el teorema de reciprocidad de Lorentz-Carson, una red lineal bilateral sin fuentes dependientes activas no orientadas produce matrices de impedancia y admitancia perfectamente simétricas (Z12 = Z21 y Y12 = Y21).",
    skill: "Cuadripolos y Redes de Dos Puertos",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Teorema de Reciprocidad",
    subtopic: "Simetría de Matrices de Cuadripolos"
  },
  {
    id: "ele-uni-100",
    sectionId: 10,
    number: 100,
    text: "¿Cuál es la condición fundamental que debe cumplir la matriz de transmisión [ABCD] de un cuadripolo lineal pasivo y recíproco?",
    options: [
      "A × D - B × C = 1  (el determinante de la matriz de transmisión es idénticamente igual a la unidad)",
      "A + B + C + D = 0",
      "A × D + B × C = -1",
      "A = D y B = C siempre"
    ],
    correctIndex: 0,
    explanation: "En la representación matricial de transmisión [V1; I1] = [A, B; C, D] · [V2; I2], la propiedad de reciprocidad impone de manera matemática e ineludible que det([T]) = AD - BC = 1.",
    skill: "Parámetros de Transmisión ABCD",
    difficulty: "Difícil",
    educationalLevel: "Universitario",
    topic: "Redes de Dos Puertos",
    subtopic: "Condición AD - BC = 1"
  }
];
