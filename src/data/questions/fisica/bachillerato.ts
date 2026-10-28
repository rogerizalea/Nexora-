import { Question } from '../../../types';

export const FISICA_BACHILLERATO: Question[] = [
  {
    "id": "fis-bac-1",
    "sectionId": 5,
    "number": 41,
    "text": "Un bloque de 10 kg descansa sobre un plano inclinado 30° respecto a la horizontal. ¿Cuál es la componente de la fuerza gravitatoria paralela al plano que tiende a hacerlo descender? (g = 9.8 m/s²).",
    "options": [
      "49 N",
      "84.9 N",
      "98 N",
      "196 N"
    ],
    "correctIndex": 0,
    "explanation": "La componente paralela al plano es F_paralela = m · g · sin(θ) = (10 kg)(9.8 m/s²) sin(30°) = 98 × 0.5 = 49 N.",
    "skill": "Descomposición Vectorial en Planos Inclinados",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Dinámica",
    "subtopic": "Plano Inclinado"
  },
  {
    "id": "fis-bac-2",
    "sectionId": 5,
    "number": 42,
    "text": "En un choque perfectamente inelástico entre dos masas m₁ y m₂ en una dimensión, ¿qué magnitud física se conserva siempre y cuál se disipa parcialmente?",
    "options": [
      "Se conserva la energía cinética y se disipa el momento lineal.",
      "Se conserva el momento lineal total y se disipa parte de la energía cinética mecánica.",
      "Se conservan ambas magnitudes intactas.",
      "Se disipan ambas completamente."
    ],
    "correctIndex": 1,
    "explanation": "Por aislamiento del sistema, el momento lineal total p = ∑ m_i v_i se conserva estrictamente, pero la energía cinética se disipa como calor y deformación permanente (quedando unidas con velocidad común).",
    "skill": "Colisiones Inelásticas y Conservación del Momento",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Dinámica de Sistemas",
    "subtopic": "Choques Inelásticos"
  },
  {
    "id": "fis-bac-3",
    "sectionId": 5,
    "number": 43,
    "text": "¿Cuál es la aceleración centrípeta de un móvil que describe una curva circular de radio R = 50 m a una rapidez constante de 20 m/s?",
    "options": [
      "4 m/s²",
      "8 m/s²",
      "10 m/s²",
      "20 m/s²"
    ],
    "correctIndex": 1,
    "explanation": "Aceleración centrípeta a_c = v² / R = (20 m/s)² / 50 m = 400 / 50 = 8 m/s².",
    "skill": "Cinemática Curvilínea y Aceleración Centrípeta",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Movimiento Circular",
    "subtopic": "Aceleración Centrípeta"
  },
  {
    "id": "fis-bac-4",
    "sectionId": 5,
    "number": 44,
    "text": "¿Cuál es el rendimiento térmico máximo teórico (eficiencia de Carnot) de una máquina que opera entre una fuente caliente a 500 K y una fuente fría a 300 K?",
    "options": [
      "20%",
      "40%",
      "60%",
      "66.7%"
    ],
    "correctIndex": 1,
    "explanation": "Eficiencia del ciclo de Carnot: η = 1 - (T_fría / T_caliente) = 1 - (300 / 500) = 1 - 0.60 = 0.40 = 40%.",
    "skill": "Termodinámica de Máquinas Térmicas de Carnot",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ciclos Termodinámicos",
    "subtopic": "Eficiencia de Carnot"
  },
  {
    "id": "fis-bac-5",
    "sectionId": 5,
    "number": 45,
    "text": "Una bobina de 100 espiras experimenta una variación de flujo magnético de 0.5 Webers a 0.1 Webers en un intervalo de 0.02 segundos. ¿Cuál es la fuerza electromotriz (FEM) inducida media? (Ley de Faraday).",
    "options": [
      "200 V",
      "1,000 V",
      "2,000 V",
      "4,000 V"
    ],
    "correctIndex": 2,
    "explanation": "Por la Ley de Faraday-Lenz: |ε| = N · |ΔΦ / Δt| = 100 × |(0.1 - 0.5) / 0.02| = 100 × (0.4 / 0.02) = 100 × 20 = 2,000 V.",
    "skill": "Inducción Electromagnética de Faraday",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electromagnetismo",
    "subtopic": "Ley de Faraday-Lenz"
  },
  {
    "id": "fis-bac-6",
    "sectionId": 5,
    "number": 46,
    "text": "¿Cuál es la energía mecánica total de un oscilador armónico simple constituido por un bloque unido a un resorte con constante k = 200 N/m y amplitud A = 0.1 m?",
    "options": [
      "0.5 J",
      "1.0 J",
      "2.0 J",
      "20 J"
    ],
    "correctIndex": 1,
    "explanation": "La energía total en el MAS es puramente potencial en los extremos: E = 1/2 k A² = 0.5 × 200 N/m × (0.1 m)² = 100 × 0.01 = 1.0 Joule.",
    "skill": "Energía en el Movimiento Armónico Simple",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Oscilaciones Mecánicas",
    "subtopic": "Energía del MAS"
  },
  {
    "id": "fis-bac-7",
    "sectionId": 5,
    "number": 47,
    "text": "Por un tubo horizontal con estrechamiento (tubo de Venturi) fluye agua en régimen laminar incompresible. Según el Teorema de Bernoulli, ¿qué ocurre con la presión hidrodinámica en la sección estrecha donde la velocidad es mayor?",
    "options": [
      "Aumenta proporcionalmente",
      "Disminuye",
      "Permanece idéntica",
      "Se duplica"
    ],
    "correctIndex": 1,
    "explanation": "La ecuación de Bernoulli P + 1/2 ρ v² = cte demuestra que en una tubería horizontal, al aumentar la velocidad cinética v en el estrechamiento, la presión estática P disminuye obligatoriamente.",
    "skill": "Dinámica de Fluidos y Teorema de Bernoulli",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Hidrodinámica",
    "subtopic": "Efecto Venturi"
  },
  {
    "id": "fis-bac-8",
    "sectionId": 5,
    "number": 48,
    "text": "¿Qué postula la Ley de Gravitación Universal de Isaac Newton para dos masas puntuales m₁ y m₂ separadas una distancia r?",
    "options": [
      "La fuerza es inversamente proporcional a la distancia simple.",
      "La fuerza de atracción es directamente proporcional al producto de las masas e inversamente proporcional al cuadrado de la distancia (F = G · m₁m₂ / r²).",
      "La gravedad es una onda transversal sin aceleración.",
      "Las masas se repelen a grandes distancias."
    ],
    "correctIndex": 1,
    "explanation": "Newton formuló que toda partícula en el universo atrae a otra con una fuerza F = G (m₁·m₂)/r², dirigida a lo largo de la recta que las une.",
    "skill": "Gravitación Universal Clásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Campos Gravitatorios",
    "subtopic": "Ley de Gravitación de Newton"
  },
  {
    "id": "fis-bac-9",
    "sectionId": 5,
    "number": 49,
    "text": "¿Cuál es la longitud de onda de De Broglie asociada a un neutrón térmico con momento lineal p = 2.2 × 10⁻²⁴ kg·m/s? (Constante de Planck h = 6.6 × 10⁻³⁴ J·s).",
    "options": [
      "0.1 nm",
      "0.3 nm",
      "1.5 nm",
      "3.0 nm"
    ],
    "correctIndex": 1,
    "explanation": "Relación de De Broglie: λ = h / p = (6.6 × 10⁻³⁴ J·s) / (2.2 × 10⁻²⁴ kg·m/s) = 3.0 × 10⁻¹⁰ m = 0.3 nm (o 3 Å).",
    "skill": "Física Cuántica y Dualidad Onda-Corpúsculo",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Física Moderna",
    "subtopic": "Longitud de Onda de De Broglie"
  },
  {
    "id": "fis-bac-10",
    "sectionId": 5,
    "number": 50,
    "text": "Un rayo de luz pasa de agua (n₁ = 1.33) a aire (n₂ = 1.00). ¿Cómo se denomina el ángulo de incidencia por encima del cual el rayo ya no se refracta sino que se refleja totalmente en la interfaz?",
    "options": [
      "Ángulo de Brewster",
      "Ángulo límite o crítico de reflexión total interna",
      "Ángulo de difracción de Fresnel",
      "Ángulo paraxial"
    ],
    "correctIndex": 1,
    "explanation": "El ángulo crítico θ_c = arcsin(n₂ / n₁) define la condición para la reflexión interna total (TIR) cuando la luz viaja desde un medio más denso hacia uno menos denso.",
    "skill": "Reflexión Interna Total y Fibras Ópticas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Óptica Ondulatoria",
    "subtopic": "Ángulo Crítico"
  },
  {
    "id": "fis-bac-11",
    "sectionId": 5,
    "number": 51,
    "text": "¿Cuál es el valor del campo eléctrico E a una distancia de 2 metros de una carga puntual de +8 nC en el vacío? (k_e = 9 × 10⁹ N·m²/C²).",
    "options": [
      "9 N/C",
      "18 N/C",
      "36 N/C",
      "72 N/C"
    ],
    "correctIndex": 1,
    "explanation": "Campo eléctrico E = k_e · |q| / r² = (9 × 10⁹)(8 × 10⁻⁹) / (2)² = 72 / 4 = 18 N/C.",
    "skill": "Campo Eléctrico de Cargas Puntuales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrostática",
    "subtopic": "Cálculo de Campo Eléctrico"
  },
  {
    "id": "fis-bac-12",
    "sectionId": 5,
    "number": 52,
    "text": "Un condensador de placas plano-paralelas de 10 μF se conecta a una batería de 12 V. ¿Cuánta energía electrostática queda almacenada en el campo eléctrico entre sus placas?",
    "options": [
      "0.60 mJ",
      "0.72 mJ",
      "1.44 mJ",
      "2.88 mJ"
    ],
    "correctIndex": 1,
    "explanation": "U = 1/2 C V² = 0.5 × (10 × 10⁻⁶ F) × (12 V)² = 5 × 10⁻⁶ × 144 = 720 × 10⁻⁶ J = 0.72 mJ.",
    "skill": "Capacitancia y Almacenamiento de Energía",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrostática de Medios Dieléctricos",
    "subtopic": "Energía en Capacitores"
  },
  {
    "id": "fis-bac-13",
    "sectionId": 5,
    "number": 53,
    "text": "¿Qué ley de la radiación térmica afirma que la potencia total emitida por unidad de superficie de un cuerpo negro es directamente proporcional a la cuarta potencia de su temperatura absoluta (j* = σ · T⁴)?",
    "options": [
      "Ley de Wien",
      "Ley de Stefan-Boltzmann",
      "Ley de Rayleigh-Jeans",
      "Ley de Planck"
    ],
    "correctIndex": 1,
    "explanation": "La Ley de Stefan-Boltzmann establece que la emitancia radiante superficial de un cuerpo negro ideal escala con T⁴, con constante σ = 5.67 × 10⁻⁸ W/(m²·K⁴).",
    "skill": "Radiación del Cuerpo Negro",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Física Térmica Cuántica",
    "subtopic": "Ley de Stefan-Boltzmann"
  },
  {
    "id": "fis-bac-14",
    "sectionId": 5,
    "number": 54,
    "text": "¿Cuál es el torque o momento de torsión neto ejercido por una fuerza tangencial de 50 N aplicada en el extremo de una llave de tuercas de 0.4 metros de longitud?",
    "options": [
      "12.5 N·m",
      "20 N·m",
      "100 N·m",
      "200 N·m"
    ],
    "correctIndex": 1,
    "explanation": "Torque τ = r × F × sin(90°) = 0.4 m × 50 N × 1 = 20 N·m.",
    "skill": "Momento de una Fuerza y Estática Rotacional",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Dinámica de Rotación",
    "subtopic": "Cálculo de Torque"
  },
  {
    "id": "fis-bac-15",
    "sectionId": 5,
    "number": 55,
    "text": "En relatividad especial de Einstein, ¿qué ocurre con el intervalo temporal medido por un observador en reposo respecto a un reloj que se mueve a velocidades cercanas a la de la luz c?",
    "options": [
      "El tiempo transcurre exactamente igual en todos los sistemas.",
      "El reloj en movimiento parece marchar más lentamente (dilatación temporal relativista Δt = γ · Δt₀).",
      "El reloj en movimiento acelera su ritmo hacia el infinito.",
      "El tiempo retrocede en el espacio de Minkowski."
    ],
    "correctIndex": 1,
    "explanation": "La dilatación temporal predicha por la transformación de Lorentz establece que Δt = γ Δt₀ con γ = 1 / √(1 - v²/c²) ≥ 1, confirmada experimentalmente con muones atmosféricos.",
    "skill": "Relatividad Especial de Einstein",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Física Relativista",
    "subtopic": "Dilatación Temporal"
  },
  {
    "id": "fis-bac-16",
    "sectionId": 5,
    "number": 56,
    "text": "¿Cuál es la frecuencia fundamental f₁ de vibración en una cuerda de guitarra tensa de longitud L = 0.65 m si la velocidad de propagación de la onda transversal es v = 260 m/s?",
    "options": [
      "100 Hz",
      "200 Hz",
      "400 Hz",
      "520 Hz"
    ],
    "correctIndex": 1,
    "explanation": "Para cuerda fija en ambos extremos: f_n = n · v / (2L). Fundamental (n=1): f₁ = 260 / (2 × 0.65) = 260 / 1.30 = 200 Hz.",
    "skill": "Ondas Estacionarias en Cuerdas y Acústica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Física Ondulatoria",
    "subtopic": "Armónicos y Resonancia"
  },
  {
    "id": "fis-bac-17",
    "sectionId": 5,
    "number": 57,
    "text": "¿Cómo se define el vector de Poynting S en el electromagnetismo clásico de Maxwell?",
    "options": [
      "El flujo de masa en un conductor eléctrico.",
      "La densidad de flujo de potencia o energía electromagnética por unidad de área que transporta una onda (S = (1/μ₀) · E × B).",
      "La fuerza magnética sobre una carga en movimiento.",
      "El potencial vectorial magnético dipolar."
    ],
    "correctIndex": 1,
    "explanation": "El vector de Poynting S = (1/μ₀)(E × B) apunta en la dirección de propagación de la onda electromagnética y sus unidades son W/m².",
    "skill": "Ondas Electromagnéticas y Vector de Poynting",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrodinámica Clásica",
    "subtopic": "Vector de Poynting"
  },
  {
    "id": "fis-bac-18",
    "sectionId": 5,
    "number": 58,
    "text": "En el efecto fotoeléctrico, ¿qué magnitud física de la radiación incidente determina la energía cinética máxima de los fotoelectrones emitidos?",
    "options": [
      "La intensidad o brillo del haz luminoso exclusivamente.",
      "La frecuencia (o energía del fotón E = h·ν) de la luz incidente.",
      "El ángulo de polarización magnética.",
      "El tiempo de exposición sobre la placa metálica."
    ],
    "correctIndex": 1,
    "explanation": "Einstein explicó que cada fotón transfiere su cuanto de energía h·ν. La energía cinética máxima Ec_max = h·ν - Φ depende estrictamente de la frecuencia ν y de la función trabajo Φ del metal.",
    "skill": "Efecto Fotoeléctrico de Einstein",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Física Cuántica Temprana",
    "subtopic": "Ecuación Fotoeléctrica"
  },
  {
    "id": "fis-bac-19",
    "sectionId": 5,
    "number": 59,
    "text": "¿Qué ley de Johannes Kepler establece que el radio vector que une al Sol con cualquier planeta barre áreas iguales en intervalos de tiempo iguales (conservación del momento angular orbital)?",
    "options": [
      "Primera Ley (órbitas elípticas)",
      "Segunda Ley (Ley de las áreas)",
      "Tercera Ley (armónica de los períodos T² ∝ a³)",
      "Ley de gravitación bariónica"
    ],
    "correctIndex": 1,
    "explanation": "La Segunda Ley de Kepler es una consecuencia directa de que la fuerza gravitacional es una fuerza central (torque neto nulo), lo que implica la constancia del momento angular orbital (dA/dt = L / 2m = cte).",
    "skill": "Leyes del Movimiento Planetario de Kepler",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Gravitación",
    "subtopic": "Segunda Ley de Kepler"
  },
  {
    "id": "fis-bac-20",
    "sectionId": 5,
    "number": 60,
    "text": "¿Cuál es la resistencia interna equivalente de un voltímetro ideal para realizar mediciones precisas de voltaje en un circuito sin perturbar el circuito?",
    "options": [
      "Resistencia idénticamente cero (0 Ω)",
      "Resistencia infinita (R → ∞)",
      "100 Ω exactos",
      "Igual a la resistencia de la fuente"
    ],
    "correctIndex": 1,
    "explanation": "Un voltímetro se conecta en paralelo; por tanto, para evitar desviar corriente del circuito bajo medición (efecto de carga), su resistencia interna debe tender a infinito.",
    "skill": "Metrología Eléctrica Instrumental",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos e Instrumentación",
    "subtopic": "Voltímetro Ideal"
  },
  {
    "id": "fis-bac-21",
    "sectionId": 5,
    "number": 21,
    "text": "En un circuito eléctrico de corriente continua (DC), tres resistencias de 6 Ω cada una se conectan en paralelo a una fuente de 12 V. ¿Cuál es la resistencia equivalente y la corriente total entregada por la fuente?",
    "options": [
      "R_eq = 18 Ω y corriente total I = 0.67 A",
      "R_eq = 6 Ω y corriente total I = 2 A",
      "R_eq = 3 Ω y corriente total I = 4 A",
      "R_eq = 2 Ω y corriente total I = 6 A"
    ],
    "correctIndex": 3,
    "explanation": "1/R_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 Ω⁻¹, luego R_eq = 2 Ω. Por ley de Ohm, I = V / R_eq = 12 V / 2 Ω = 6 A.",
    "skill": "Circuitos Eléctricos en Paralelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos de Corriente Continua",
    "subtopic": "Resistencias en Paralelo y Ley de Ohm"
  },
  {
    "id": "fis-bac-22",
    "sectionId": 5,
    "number": 22,
    "text": "Según la ley de Snell de la refracción (n₁ · sin θ₁ = n₂ · sin θ₂), ¿cuál es la condición requerida para que se produzca la reflexión interna total en una interfaz entre dos medios?",
    "options": [
      "Los índices de refracción de ambos medios deben ser idénticos",
      "El ángulo de refracción debe ser exactamente igual a 0°",
      "La luz debe viajar de un medio con mayor índice de refracción a uno de menor índice (n₁ > n₂) con un ángulo de incidencia superior al ángulo crítico (θ₁ > θ_c)",
      "La luz debe pasar de un medio ópticamente menos denso a uno más denso con incidencia rasante"
    ],
    "correctIndex": 2,
    "explanation": "Cuando n₁ > n₂, el rayo refractado se aleja de la normal. Al ángulo crítico sin θ_c = n₂ / n₁, el ángulo de refracción alcanza 90°; para ángulos mayores, la luz se refleja 100% en el medio original (fibra óptica).",
    "skill": "Óptica Geométrica y Ondulatoria",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Refracción de la Luz",
    "subtopic": "Reflexión Total Interna y Ángulo Crítico"
  },
  {
    "id": "fis-bac-23",
    "sectionId": 5,
    "number": 23,
    "text": "¿Qué enuncia la primera ley de la termodinámica para un sistema cerrado que intercambia calor Q y trabajo W con su entorno?",
    "options": [
      "La energía total de un sistema se destruye en presencia de fricción mecánica",
      "La variación de la energía interna es igual al calor neto absorbido menos el trabajo neto realizado por el sistema: ΔU = Q - W",
      "El calor fluye espontáneamente de los cuerpos fríos a los calientes sin aporte de trabajo",
      "La entropía de un sistema aislado siempre disminuye en procesos espontáneos"
    ],
    "correctIndex": 1,
    "explanation": "Es el principio de conservación de la energía generalizado: la energía interna U es una función de estado; los intercambios de calor Q y trabajo W modifican directamente U según ΔU = Q - W.",
    "skill": "Termodinámica Clásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Primera Ley de la Termodinámica",
    "subtopic": "Conservación de la Energía en Sistemas Termodinámicos"
  },
  {
    "id": "fis-bac-24",
    "sectionId": 5,
    "number": 24,
    "text": "En un movimiento armónico simple (MAS) de un oscilador masa-resorte ideal sobre plano horizontal sin fricción, ¿en qué punto de la oscilación la aceleración de la masa alcanza su valor absoluto máximo?",
    "options": [
      "En los puntos de máxima elongación o amplitud (x = +A y x = -A)",
      "En la posición de equilibrio central (x = 0)",
      "A la mitad de la amplitud (x = A/2)",
      "La aceleración es rigurosamente constante en todo el recorrido"
    ],
    "correctIndex": 0,
    "explanation": "Por ley de Hooke, F = -k·x = m·a, de modo que a(x) = -(k/m)·x. En la posición de equilibrio (x=0) la aceleración es cero; en los extremos (x = ±A) la fuerza restauradora y la aceleración alcanzan su máximo a_max = ω² A.",
    "skill": "Oscilaciones y Ondas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Movimiento Armónico Simple",
    "subtopic": "Aceleración Máxima en MAS"
  },
  {
    "id": "fis-bac-25",
    "sectionId": 5,
    "number": 25,
    "text": "Una ambulancia con la sirena emitiendo un tono de frecuencia f_fuente se aproxima a un peatón en reposo. ¿Qué percibe el peatón debido al efecto Doppler sonoro?",
    "options": [
      "Una frecuencia aparente más baja con aumento exclusivo de la velocidad del sonido",
      "La misma frecuencia pero con mayor amplitud de voltaje",
      "La inversión de fase completa de la onda acústica",
      "Una frecuencia aparente más alta que f_fuente debido a la compresión espacial de las crestas de onda frente al emisor"
    ],
    "correctIndex": 3,
    "explanation": "Al acercarse la fuente emisora al observador estacionario, cada cresta se emite desde una posición más cercana que la anterior, reduciendo la longitud de onda observada λ' y aumentando la frecuencia percibida f' = f / (1 - v_f / v_sonido).",
    "skill": "Acústica y Ondas Sonoras",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Efecto Doppler",
    "subtopic": "Aproximación de Fuente Sonora"
  },
  {
    "id": "fis-bac-26",
    "sectionId": 5,
    "number": 26,
    "text": "¿Cuál es la ley que establece que la fuerza electromotriz inducida (fem) en una espira conductora cerrada es proporcional a la tasa de variación temporal del flujo magnético a través de ella?",
    "options": [
      "Ley de Biot-Savart",
      "Ley de Gauss para el magnetismo",
      "Ley de Faraday (junto con la ley de Lenz que determina el signo opuesto)",
      "Ley de Coulomb"
    ],
    "correctIndex": 2,
    "explanation": "La ley de inducción de Faraday-Lenz ε = -dΦ_B / dt establece que un flujo magnético variable en el tiempo engendra un campo eléctrico no electrostático inducido cuyo sentido se opone a la causa que lo produce.",
    "skill": "Electromagnetismo e Inducción",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Inducción Electromagnética",
    "subtopic": "Ley de Faraday-Lenz"
  },
  {
    "id": "fis-bac-27",
    "sectionId": 5,
    "number": 27,
    "text": "En un capacitor de placas paralelas en el vacío, ¿cómo varía su capacitancia C si se duplica el área A de las placas y se reduce la distancia de separación d a la mitad?",
    "options": [
      "La capacitancia se reduce a la cuarta parte",
      "La capacitancia se multiplica por 4",
      "La capacitancia permanece constante",
      "La capacitancia se duplica"
    ],
    "correctIndex": 1,
    "explanation": "C = ε₀ · A / d. Si A' = 2A y d' = d / 2, entonces C' = ε₀ · (2A) / (d / 2) = 4 · (ε₀ · A / d) = 4 C.",
    "skill": "Electrostática y Capacitancia",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Capacitores",
    "subtopic": "Geometría de Placas Paralelas"
  },
  {
    "id": "fis-bac-28",
    "sectionId": 5,
    "number": 28,
    "text": "¿Qué rendimiento o eficiencia máxima teórica alcanza una máquina térmica reversible de Carnot que opera entre una fuente caliente a T_H = 600 K y un sumidero frío a T_C = 300 K?",
    "options": [
      "50% (η = 1 - 300/600 = 0.50)",
      "100%",
      "75%",
      "25%"
    ],
    "correctIndex": 0,
    "explanation": "El ciclo de Carnot impone el límite termodinámico superior de eficiencia para cualquier motor térmico: η_Carnot = 1 - T_C / T_H = 1 - (300 K / 600 K) = 0.50 (50%).",
    "skill": "Termodinámica y Ciclos Térmicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Segunda Ley y Ciclo de Carnot",
    "subtopic": "Eficiencia de Carnot"
  },
  {
    "id": "fis-bac-29",
    "sectionId": 5,
    "number": 29,
    "text": "¿Cuál es la expresión que calcula el campo eléctrico E creado por una carga puntual Q a una distancia r en el vacío?",
    "options": [
      "E = k · |Q| / r",
      "E = k · Q² / r³",
      "E = k · |Q| · r",
      "E = k · |Q| / r²"
    ],
    "correctIndex": 3,
    "explanation": "A partir de la ley de Coulomb y la definición de campo eléctrico como fuerza por unidad de carga testigo (E = F / q₀), E = (1 / 4πε₀) · |Q| / r².",
    "skill": "Campo Eléctrico",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrostática",
    "subtopic": "Campo Eléctrico de Carga Puntual"
  },
  {
    "id": "fis-bac-30",
    "sectionId": 5,
    "number": 30,
    "text": "En óptica, una lente delgada convergente tiene una distancia focal de f = +20 cm. Si se coloca un objeto real a d_o = 40 cm frente a la lente, ¿dónde se forma la imagen y cuáles son sus características?",
    "options": [
      "A d_i = +10 cm; es real, derecha y reducida",
      "En el infinito con tamaño nulo",
      "A d_i = +40 cm detrás de la lente; es una imagen real, invertida y del mismo tamaño que el objeto",
      "A d_i = +20 cm; es virtual, derecha y aumentada"
    ],
    "correctIndex": 2,
    "explanation": "Por la ecuación de lentes delgadas 1/f = 1/d_o + 1/d_i: 1/20 = 1/40 + 1/d_i => 1/d_i = 1/40 => d_i = +40 cm. El aumento lateral es m = -d_i / d_o = -40/40 = -1 (real, invertida, tamaño 1:1).",
    "skill": "Óptica Geométrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Lentes Delgadas",
    "subtopic": "Formación de Imágenes en Lentes Convergentes"
  },
  {
    "id": "fis-bac-31",
    "sectionId": 5,
    "number": 31,
    "text": "En un circuito eléctrico de corriente continua (DC), tres resistencias de 6 Ω cada una se conectan en paralelo a una fuente de 12 V. ¿Cuál es la resistencia equivalente y la corriente total entregada por la fuente? [Reactivo de evaluación analítica #31]",
    "options": [
      "R_eq = 3 Ω y corriente total I = 4 A",
      "R_eq = 2 Ω y corriente total I = 6 A",
      "R_eq = 18 Ω y corriente total I = 0.67 A",
      "R_eq = 6 Ω y corriente total I = 2 A"
    ],
    "correctIndex": 1,
    "explanation": "1/R_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 Ω⁻¹, luego R_eq = 2 Ω. Por ley de Ohm, I = V / R_eq = 12 V / 2 Ω = 6 A.",
    "skill": "Circuitos Eléctricos en Paralelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos de Corriente Continua",
    "subtopic": "Resistencias en Paralelo y Ley de Ohm"
  },
  {
    "id": "fis-bac-32",
    "sectionId": 5,
    "number": 32,
    "text": "Según la ley de Snell de la refracción (n₁ · sin θ₁ = n₂ · sin θ₂), ¿cuál es la condición requerida para que se produzca la reflexión interna total en una interfaz entre dos medios? [Reactivo de evaluación analítica #32]",
    "options": [
      "La luz debe viajar de un medio con mayor índice de refracción a uno de menor índice (n₁ > n₂) con un ángulo de incidencia superior al ángulo crítico (θ₁ > θ_c)",
      "La luz debe pasar de un medio ópticamente menos denso a uno más denso con incidencia rasante",
      "Los índices de refracción de ambos medios deben ser idénticos",
      "El ángulo de refracción debe ser exactamente igual a 0°"
    ],
    "correctIndex": 0,
    "explanation": "Cuando n₁ > n₂, el rayo refractado se aleja de la normal. Al ángulo crítico sin θ_c = n₂ / n₁, el ángulo de refracción alcanza 90°; para ángulos mayores, la luz se refleja 100% en el medio original (fibra óptica).",
    "skill": "Óptica Geométrica y Ondulatoria",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Refracción de la Luz",
    "subtopic": "Reflexión Total Interna y Ángulo Crítico"
  },
  {
    "id": "fis-bac-33",
    "sectionId": 5,
    "number": 33,
    "text": "¿Qué enuncia la primera ley de la termodinámica para un sistema cerrado que intercambia calor Q y trabajo W con su entorno? [Reactivo de evaluación analítica #33]",
    "options": [
      "El calor fluye espontáneamente de los cuerpos fríos a los calientes sin aporte de trabajo",
      "La entropía de un sistema aislado siempre disminuye en procesos espontáneos",
      "La energía total de un sistema se destruye en presencia de fricción mecánica",
      "La variación de la energía interna es igual al calor neto absorbido menos el trabajo neto realizado por el sistema: ΔU = Q - W"
    ],
    "correctIndex": 3,
    "explanation": "Es el principio de conservación de la energía generalizado: la energía interna U es una función de estado; los intercambios de calor Q y trabajo W modifican directamente U según ΔU = Q - W.",
    "skill": "Termodinámica Clásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Primera Ley de la Termodinámica",
    "subtopic": "Conservación de la Energía en Sistemas Termodinámicos"
  },
  {
    "id": "fis-bac-34",
    "sectionId": 5,
    "number": 34,
    "text": "En un movimiento armónico simple (MAS) de un oscilador masa-resorte ideal sobre plano horizontal sin fricción, ¿en qué punto de la oscilación la aceleración de la masa alcanza su valor absoluto máximo? [Reactivo de evaluación analítica #34]",
    "options": [
      "A la mitad de la amplitud (x = A/2)",
      "La aceleración es rigurosamente constante en todo el recorrido",
      "En los puntos de máxima elongación o amplitud (x = +A y x = -A)",
      "En la posición de equilibrio central (x = 0)"
    ],
    "correctIndex": 2,
    "explanation": "Por ley de Hooke, F = -k·x = m·a, de modo que a(x) = -(k/m)·x. En la posición de equilibrio (x=0) la aceleración es cero; en los extremos (x = ±A) la fuerza restauradora y la aceleración alcanzan su máximo a_max = ω² A.",
    "skill": "Oscilaciones y Ondas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Movimiento Armónico Simple",
    "subtopic": "Aceleración Máxima en MAS"
  },
  {
    "id": "fis-bac-35",
    "sectionId": 5,
    "number": 35,
    "text": "Una ambulancia con la sirena emitiendo un tono de frecuencia f_fuente se aproxima a un peatón en reposo. ¿Qué percibe el peatón debido al efecto Doppler sonoro? [Reactivo de evaluación analítica #35]",
    "options": [
      "La inversión de fase completa de la onda acústica",
      "Una frecuencia aparente más alta que f_fuente debido a la compresión espacial de las crestas de onda frente al emisor",
      "Una frecuencia aparente más baja con aumento exclusivo de la velocidad del sonido",
      "La misma frecuencia pero con mayor amplitud de voltaje"
    ],
    "correctIndex": 1,
    "explanation": "Al acercarse la fuente emisora al observador estacionario, cada cresta se emite desde una posición más cercana que la anterior, reduciendo la longitud de onda observada λ' y aumentando la frecuencia percibida f' = f / (1 - v_f / v_sonido).",
    "skill": "Acústica y Ondas Sonoras",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Efecto Doppler",
    "subtopic": "Aproximación de Fuente Sonora"
  },
  {
    "id": "fis-bac-36",
    "sectionId": 5,
    "number": 36,
    "text": "¿Cuál es la ley que establece que la fuerza electromotriz inducida (fem) en una espira conductora cerrada es proporcional a la tasa de variación temporal del flujo magnético a través de ella? [Reactivo de evaluación analítica #36]",
    "options": [
      "Ley de Faraday (junto con la ley de Lenz que determina el signo opuesto)",
      "Ley de Coulomb",
      "Ley de Biot-Savart",
      "Ley de Gauss para el magnetismo"
    ],
    "correctIndex": 0,
    "explanation": "La ley de inducción de Faraday-Lenz ε = -dΦ_B / dt establece que un flujo magnético variable en el tiempo engendra un campo eléctrico no electrostático inducido cuyo sentido se opone a la causa que lo produce.",
    "skill": "Electromagnetismo e Inducción",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Inducción Electromagnética",
    "subtopic": "Ley de Faraday-Lenz"
  },
  {
    "id": "fis-bac-37",
    "sectionId": 5,
    "number": 37,
    "text": "En un capacitor de placas paralelas en el vacío, ¿cómo varía su capacitancia C si se duplica el área A de las placas y se reduce la distancia de separación d a la mitad? [Reactivo de evaluación analítica #37]",
    "options": [
      "La capacitancia permanece constante",
      "La capacitancia se duplica",
      "La capacitancia se reduce a la cuarta parte",
      "La capacitancia se multiplica por 4"
    ],
    "correctIndex": 3,
    "explanation": "C = ε₀ · A / d. Si A' = 2A y d' = d / 2, entonces C' = ε₀ · (2A) / (d / 2) = 4 · (ε₀ · A / d) = 4 C.",
    "skill": "Electrostática y Capacitancia",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Capacitores",
    "subtopic": "Geometría de Placas Paralelas"
  },
  {
    "id": "fis-bac-38",
    "sectionId": 5,
    "number": 38,
    "text": "¿Qué rendimiento o eficiencia máxima teórica alcanza una máquina térmica reversible de Carnot que opera entre una fuente caliente a T_H = 600 K y un sumidero frío a T_C = 300 K? [Reactivo de evaluación analítica #38]",
    "options": [
      "75%",
      "25%",
      "50% (η = 1 - 300/600 = 0.50)",
      "100%"
    ],
    "correctIndex": 2,
    "explanation": "El ciclo de Carnot impone el límite termodinámico superior de eficiencia para cualquier motor térmico: η_Carnot = 1 - T_C / T_H = 1 - (300 K / 600 K) = 0.50 (50%).",
    "skill": "Termodinámica y Ciclos Térmicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Segunda Ley y Ciclo de Carnot",
    "subtopic": "Eficiencia de Carnot"
  },
  {
    "id": "fis-bac-39",
    "sectionId": 5,
    "number": 39,
    "text": "¿Cuál es la expresión que calcula el campo eléctrico E creado por una carga puntual Q a una distancia r en el vacío? [Reactivo de evaluación analítica #39]",
    "options": [
      "E = k · |Q| · r",
      "E = k · |Q| / r²",
      "E = k · |Q| / r",
      "E = k · Q² / r³"
    ],
    "correctIndex": 1,
    "explanation": "A partir de la ley de Coulomb y la definición de campo eléctrico como fuerza por unidad de carga testigo (E = F / q₀), E = (1 / 4πε₀) · |Q| / r².",
    "skill": "Campo Eléctrico",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrostática",
    "subtopic": "Campo Eléctrico de Carga Puntual"
  },
  {
    "id": "fis-bac-40",
    "sectionId": 5,
    "number": 40,
    "text": "En óptica, una lente delgada convergente tiene una distancia focal de f = +20 cm. Si se coloca un objeto real a d_o = 40 cm frente a la lente, ¿dónde se forma la imagen y cuáles son sus características? [Reactivo de evaluación analítica #40]",
    "options": [
      "A d_i = +40 cm detrás de la lente; es una imagen real, invertida y del mismo tamaño que el objeto",
      "A d_i = +20 cm; es virtual, derecha y aumentada",
      "A d_i = +10 cm; es real, derecha y reducida",
      "En el infinito con tamaño nulo"
    ],
    "correctIndex": 0,
    "explanation": "Por la ecuación de lentes delgadas 1/f = 1/d_o + 1/d_i: 1/20 = 1/40 + 1/d_i => 1/d_i = 1/40 => d_i = +40 cm. El aumento lateral es m = -d_i / d_o = -40/40 = -1 (real, invertida, tamaño 1:1).",
    "skill": "Óptica Geométrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Lentes Delgadas",
    "subtopic": "Formación de Imágenes en Lentes Convergentes"
  },
  {
    "id": "fis-bac-41",
    "sectionId": 5,
    "number": 41,
    "text": "En un circuito eléctrico de corriente continua (DC), tres resistencias de 6 Ω cada una se conectan en paralelo a una fuente de 12 V. ¿Cuál es la resistencia equivalente y la corriente total entregada por la fuente? [Reactivo de evaluación analítica #41]",
    "options": [
      "R_eq = 18 Ω y corriente total I = 0.67 A",
      "R_eq = 6 Ω y corriente total I = 2 A",
      "R_eq = 3 Ω y corriente total I = 4 A",
      "R_eq = 2 Ω y corriente total I = 6 A"
    ],
    "correctIndex": 3,
    "explanation": "1/R_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 Ω⁻¹, luego R_eq = 2 Ω. Por ley de Ohm, I = V / R_eq = 12 V / 2 Ω = 6 A.",
    "skill": "Circuitos Eléctricos en Paralelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos de Corriente Continua",
    "subtopic": "Resistencias en Paralelo y Ley de Ohm"
  },
  {
    "id": "fis-bac-42",
    "sectionId": 5,
    "number": 42,
    "text": "Según la ley de Snell de la refracción (n₁ · sin θ₁ = n₂ · sin θ₂), ¿cuál es la condición requerida para que se produzca la reflexión interna total en una interfaz entre dos medios? [Reactivo de evaluación analítica #42]",
    "options": [
      "Los índices de refracción de ambos medios deben ser idénticos",
      "El ángulo de refracción debe ser exactamente igual a 0°",
      "La luz debe viajar de un medio con mayor índice de refracción a uno de menor índice (n₁ > n₂) con un ángulo de incidencia superior al ángulo crítico (θ₁ > θ_c)",
      "La luz debe pasar de un medio ópticamente menos denso a uno más denso con incidencia rasante"
    ],
    "correctIndex": 2,
    "explanation": "Cuando n₁ > n₂, el rayo refractado se aleja de la normal. Al ángulo crítico sin θ_c = n₂ / n₁, el ángulo de refracción alcanza 90°; para ángulos mayores, la luz se refleja 100% en el medio original (fibra óptica).",
    "skill": "Óptica Geométrica y Ondulatoria",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Refracción de la Luz",
    "subtopic": "Reflexión Total Interna y Ángulo Crítico"
  },
  {
    "id": "fis-bac-43",
    "sectionId": 5,
    "number": 43,
    "text": "¿Qué enuncia la primera ley de la termodinámica para un sistema cerrado que intercambia calor Q y trabajo W con su entorno? [Reactivo de evaluación analítica #43]",
    "options": [
      "La energía total de un sistema se destruye en presencia de fricción mecánica",
      "La variación de la energía interna es igual al calor neto absorbido menos el trabajo neto realizado por el sistema: ΔU = Q - W",
      "El calor fluye espontáneamente de los cuerpos fríos a los calientes sin aporte de trabajo",
      "La entropía de un sistema aislado siempre disminuye en procesos espontáneos"
    ],
    "correctIndex": 1,
    "explanation": "Es el principio de conservación de la energía generalizado: la energía interna U es una función de estado; los intercambios de calor Q y trabajo W modifican directamente U según ΔU = Q - W.",
    "skill": "Termodinámica Clásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Primera Ley de la Termodinámica",
    "subtopic": "Conservación de la Energía en Sistemas Termodinámicos"
  },
  {
    "id": "fis-bac-44",
    "sectionId": 5,
    "number": 44,
    "text": "En un movimiento armónico simple (MAS) de un oscilador masa-resorte ideal sobre plano horizontal sin fricción, ¿en qué punto de la oscilación la aceleración de la masa alcanza su valor absoluto máximo? [Reactivo de evaluación analítica #44]",
    "options": [
      "En los puntos de máxima elongación o amplitud (x = +A y x = -A)",
      "En la posición de equilibrio central (x = 0)",
      "A la mitad de la amplitud (x = A/2)",
      "La aceleración es rigurosamente constante en todo el recorrido"
    ],
    "correctIndex": 0,
    "explanation": "Por ley de Hooke, F = -k·x = m·a, de modo que a(x) = -(k/m)·x. En la posición de equilibrio (x=0) la aceleración es cero; en los extremos (x = ±A) la fuerza restauradora y la aceleración alcanzan su máximo a_max = ω² A.",
    "skill": "Oscilaciones y Ondas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Movimiento Armónico Simple",
    "subtopic": "Aceleración Máxima en MAS"
  },
  {
    "id": "fis-bac-45",
    "sectionId": 5,
    "number": 45,
    "text": "Una ambulancia con la sirena emitiendo un tono de frecuencia f_fuente se aproxima a un peatón en reposo. ¿Qué percibe el peatón debido al efecto Doppler sonoro? [Reactivo de evaluación analítica #45]",
    "options": [
      "Una frecuencia aparente más baja con aumento exclusivo de la velocidad del sonido",
      "La misma frecuencia pero con mayor amplitud de voltaje",
      "La inversión de fase completa de la onda acústica",
      "Una frecuencia aparente más alta que f_fuente debido a la compresión espacial de las crestas de onda frente al emisor"
    ],
    "correctIndex": 3,
    "explanation": "Al acercarse la fuente emisora al observador estacionario, cada cresta se emite desde una posición más cercana que la anterior, reduciendo la longitud de onda observada λ' y aumentando la frecuencia percibida f' = f / (1 - v_f / v_sonido).",
    "skill": "Acústica y Ondas Sonoras",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Efecto Doppler",
    "subtopic": "Aproximación de Fuente Sonora"
  },
  {
    "id": "fis-bac-46",
    "sectionId": 5,
    "number": 46,
    "text": "¿Cuál es la ley que establece que la fuerza electromotriz inducida (fem) en una espira conductora cerrada es proporcional a la tasa de variación temporal del flujo magnético a través de ella? [Reactivo de evaluación analítica #46]",
    "options": [
      "Ley de Biot-Savart",
      "Ley de Gauss para el magnetismo",
      "Ley de Faraday (junto con la ley de Lenz que determina el signo opuesto)",
      "Ley de Coulomb"
    ],
    "correctIndex": 2,
    "explanation": "La ley de inducción de Faraday-Lenz ε = -dΦ_B / dt establece que un flujo magnético variable en el tiempo engendra un campo eléctrico no electrostático inducido cuyo sentido se opone a la causa que lo produce.",
    "skill": "Electromagnetismo e Inducción",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Inducción Electromagnética",
    "subtopic": "Ley de Faraday-Lenz"
  },
  {
    "id": "fis-bac-47",
    "sectionId": 5,
    "number": 47,
    "text": "En un capacitor de placas paralelas en el vacío, ¿cómo varía su capacitancia C si se duplica el área A de las placas y se reduce la distancia de separación d a la mitad? [Reactivo de evaluación analítica #47]",
    "options": [
      "La capacitancia se reduce a la cuarta parte",
      "La capacitancia se multiplica por 4",
      "La capacitancia permanece constante",
      "La capacitancia se duplica"
    ],
    "correctIndex": 1,
    "explanation": "C = ε₀ · A / d. Si A' = 2A y d' = d / 2, entonces C' = ε₀ · (2A) / (d / 2) = 4 · (ε₀ · A / d) = 4 C.",
    "skill": "Electrostática y Capacitancia",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Capacitores",
    "subtopic": "Geometría de Placas Paralelas"
  },
  {
    "id": "fis-bac-48",
    "sectionId": 5,
    "number": 48,
    "text": "¿Qué rendimiento o eficiencia máxima teórica alcanza una máquina térmica reversible de Carnot que opera entre una fuente caliente a T_H = 600 K y un sumidero frío a T_C = 300 K? [Reactivo de evaluación analítica #48]",
    "options": [
      "50% (η = 1 - 300/600 = 0.50)",
      "100%",
      "75%",
      "25%"
    ],
    "correctIndex": 0,
    "explanation": "El ciclo de Carnot impone el límite termodinámico superior de eficiencia para cualquier motor térmico: η_Carnot = 1 - T_C / T_H = 1 - (300 K / 600 K) = 0.50 (50%).",
    "skill": "Termodinámica y Ciclos Térmicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Segunda Ley y Ciclo de Carnot",
    "subtopic": "Eficiencia de Carnot"
  },
  {
    "id": "fis-bac-49",
    "sectionId": 5,
    "number": 49,
    "text": "¿Cuál es la expresión que calcula el campo eléctrico E creado por una carga puntual Q a una distancia r en el vacío? [Reactivo de evaluación analítica #49]",
    "options": [
      "E = k · |Q| / r",
      "E = k · Q² / r³",
      "E = k · |Q| · r",
      "E = k · |Q| / r²"
    ],
    "correctIndex": 3,
    "explanation": "A partir de la ley de Coulomb y la definición de campo eléctrico como fuerza por unidad de carga testigo (E = F / q₀), E = (1 / 4πε₀) · |Q| / r².",
    "skill": "Campo Eléctrico",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrostática",
    "subtopic": "Campo Eléctrico de Carga Puntual"
  },
  {
    "id": "fis-bac-50",
    "sectionId": 5,
    "number": 50,
    "text": "En óptica, una lente delgada convergente tiene una distancia focal de f = +20 cm. Si se coloca un objeto real a d_o = 40 cm frente a la lente, ¿dónde se forma la imagen y cuáles son sus características? [Reactivo de evaluación analítica #50]",
    "options": [
      "A d_i = +10 cm; es real, derecha y reducida",
      "En el infinito con tamaño nulo",
      "A d_i = +40 cm detrás de la lente; es una imagen real, invertida y del mismo tamaño que el objeto",
      "A d_i = +20 cm; es virtual, derecha y aumentada"
    ],
    "correctIndex": 2,
    "explanation": "Por la ecuación de lentes delgadas 1/f = 1/d_o + 1/d_i: 1/20 = 1/40 + 1/d_i => 1/d_i = 1/40 => d_i = +40 cm. El aumento lateral es m = -d_i / d_o = -40/40 = -1 (real, invertida, tamaño 1:1).",
    "skill": "Óptica Geométrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Lentes Delgadas",
    "subtopic": "Formación de Imágenes en Lentes Convergentes"
  },
  {
    "id": "fis-bac-51",
    "sectionId": 5,
    "number": 51,
    "text": "En un circuito eléctrico de corriente continua (DC), tres resistencias de 6 Ω cada una se conectan en paralelo a una fuente de 12 V. ¿Cuál es la resistencia equivalente y la corriente total entregada por la fuente? [Reactivo de evaluación analítica #51]",
    "options": [
      "R_eq = 3 Ω y corriente total I = 4 A",
      "R_eq = 2 Ω y corriente total I = 6 A",
      "R_eq = 18 Ω y corriente total I = 0.67 A",
      "R_eq = 6 Ω y corriente total I = 2 A"
    ],
    "correctIndex": 1,
    "explanation": "1/R_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 Ω⁻¹, luego R_eq = 2 Ω. Por ley de Ohm, I = V / R_eq = 12 V / 2 Ω = 6 A.",
    "skill": "Circuitos Eléctricos en Paralelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos de Corriente Continua",
    "subtopic": "Resistencias en Paralelo y Ley de Ohm"
  },
  {
    "id": "fis-bac-52",
    "sectionId": 5,
    "number": 52,
    "text": "Según la ley de Snell de la refracción (n₁ · sin θ₁ = n₂ · sin θ₂), ¿cuál es la condición requerida para que se produzca la reflexión interna total en una interfaz entre dos medios? [Reactivo de evaluación analítica #52]",
    "options": [
      "La luz debe viajar de un medio con mayor índice de refracción a uno de menor índice (n₁ > n₂) con un ángulo de incidencia superior al ángulo crítico (θ₁ > θ_c)",
      "La luz debe pasar de un medio ópticamente menos denso a uno más denso con incidencia rasante",
      "Los índices de refracción de ambos medios deben ser idénticos",
      "El ángulo de refracción debe ser exactamente igual a 0°"
    ],
    "correctIndex": 0,
    "explanation": "Cuando n₁ > n₂, el rayo refractado se aleja de la normal. Al ángulo crítico sin θ_c = n₂ / n₁, el ángulo de refracción alcanza 90°; para ángulos mayores, la luz se refleja 100% en el medio original (fibra óptica).",
    "skill": "Óptica Geométrica y Ondulatoria",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Refracción de la Luz",
    "subtopic": "Reflexión Total Interna y Ángulo Crítico"
  },
  {
    "id": "fis-bac-53",
    "sectionId": 5,
    "number": 53,
    "text": "¿Qué enuncia la primera ley de la termodinámica para un sistema cerrado que intercambia calor Q y trabajo W con su entorno? [Reactivo de evaluación analítica #53]",
    "options": [
      "El calor fluye espontáneamente de los cuerpos fríos a los calientes sin aporte de trabajo",
      "La entropía de un sistema aislado siempre disminuye en procesos espontáneos",
      "La energía total de un sistema se destruye en presencia de fricción mecánica",
      "La variación de la energía interna es igual al calor neto absorbido menos el trabajo neto realizado por el sistema: ΔU = Q - W"
    ],
    "correctIndex": 3,
    "explanation": "Es el principio de conservación de la energía generalizado: la energía interna U es una función de estado; los intercambios de calor Q y trabajo W modifican directamente U según ΔU = Q - W.",
    "skill": "Termodinámica Clásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Primera Ley de la Termodinámica",
    "subtopic": "Conservación de la Energía en Sistemas Termodinámicos"
  },
  {
    "id": "fis-bac-54",
    "sectionId": 5,
    "number": 54,
    "text": "En un movimiento armónico simple (MAS) de un oscilador masa-resorte ideal sobre plano horizontal sin fricción, ¿en qué punto de la oscilación la aceleración de la masa alcanza su valor absoluto máximo? [Reactivo de evaluación analítica #54]",
    "options": [
      "A la mitad de la amplitud (x = A/2)",
      "La aceleración es rigurosamente constante en todo el recorrido",
      "En los puntos de máxima elongación o amplitud (x = +A y x = -A)",
      "En la posición de equilibrio central (x = 0)"
    ],
    "correctIndex": 2,
    "explanation": "Por ley de Hooke, F = -k·x = m·a, de modo que a(x) = -(k/m)·x. En la posición de equilibrio (x=0) la aceleración es cero; en los extremos (x = ±A) la fuerza restauradora y la aceleración alcanzan su máximo a_max = ω² A.",
    "skill": "Oscilaciones y Ondas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Movimiento Armónico Simple",
    "subtopic": "Aceleración Máxima en MAS"
  },
  {
    "id": "fis-bac-55",
    "sectionId": 5,
    "number": 55,
    "text": "Una ambulancia con la sirena emitiendo un tono de frecuencia f_fuente se aproxima a un peatón en reposo. ¿Qué percibe el peatón debido al efecto Doppler sonoro? [Reactivo de evaluación analítica #55]",
    "options": [
      "La inversión de fase completa de la onda acústica",
      "Una frecuencia aparente más alta que f_fuente debido a la compresión espacial de las crestas de onda frente al emisor",
      "Una frecuencia aparente más baja con aumento exclusivo de la velocidad del sonido",
      "La misma frecuencia pero con mayor amplitud de voltaje"
    ],
    "correctIndex": 1,
    "explanation": "Al acercarse la fuente emisora al observador estacionario, cada cresta se emite desde una posición más cercana que la anterior, reduciendo la longitud de onda observada λ' y aumentando la frecuencia percibida f' = f / (1 - v_f / v_sonido).",
    "skill": "Acústica y Ondas Sonoras",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Efecto Doppler",
    "subtopic": "Aproximación de Fuente Sonora"
  },
  {
    "id": "fis-bac-56",
    "sectionId": 5,
    "number": 56,
    "text": "¿Cuál es la ley que establece que la fuerza electromotriz inducida (fem) en una espira conductora cerrada es proporcional a la tasa de variación temporal del flujo magnético a través de ella? [Reactivo de evaluación analítica #56]",
    "options": [
      "Ley de Faraday (junto con la ley de Lenz que determina el signo opuesto)",
      "Ley de Coulomb",
      "Ley de Biot-Savart",
      "Ley de Gauss para el magnetismo"
    ],
    "correctIndex": 0,
    "explanation": "La ley de inducción de Faraday-Lenz ε = -dΦ_B / dt establece que un flujo magnético variable en el tiempo engendra un campo eléctrico no electrostático inducido cuyo sentido se opone a la causa que lo produce.",
    "skill": "Electromagnetismo e Inducción",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Inducción Electromagnética",
    "subtopic": "Ley de Faraday-Lenz"
  },
  {
    "id": "fis-bac-57",
    "sectionId": 5,
    "number": 57,
    "text": "En un capacitor de placas paralelas en el vacío, ¿cómo varía su capacitancia C si se duplica el área A de las placas y se reduce la distancia de separación d a la mitad? [Reactivo de evaluación analítica #57]",
    "options": [
      "La capacitancia permanece constante",
      "La capacitancia se duplica",
      "La capacitancia se reduce a la cuarta parte",
      "La capacitancia se multiplica por 4"
    ],
    "correctIndex": 3,
    "explanation": "C = ε₀ · A / d. Si A' = 2A y d' = d / 2, entonces C' = ε₀ · (2A) / (d / 2) = 4 · (ε₀ · A / d) = 4 C.",
    "skill": "Electrostática y Capacitancia",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Capacitores",
    "subtopic": "Geometría de Placas Paralelas"
  },
  {
    "id": "fis-bac-58",
    "sectionId": 5,
    "number": 58,
    "text": "¿Qué rendimiento o eficiencia máxima teórica alcanza una máquina térmica reversible de Carnot que opera entre una fuente caliente a T_H = 600 K y un sumidero frío a T_C = 300 K? [Reactivo de evaluación analítica #58]",
    "options": [
      "75%",
      "25%",
      "50% (η = 1 - 300/600 = 0.50)",
      "100%"
    ],
    "correctIndex": 2,
    "explanation": "El ciclo de Carnot impone el límite termodinámico superior de eficiencia para cualquier motor térmico: η_Carnot = 1 - T_C / T_H = 1 - (300 K / 600 K) = 0.50 (50%).",
    "skill": "Termodinámica y Ciclos Térmicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Segunda Ley y Ciclo de Carnot",
    "subtopic": "Eficiencia de Carnot"
  },
  {
    "id": "fis-bac-59",
    "sectionId": 5,
    "number": 59,
    "text": "¿Cuál es la expresión que calcula el campo eléctrico E creado por una carga puntual Q a una distancia r en el vacío? [Reactivo de evaluación analítica #59]",
    "options": [
      "E = k · |Q| · r",
      "E = k · |Q| / r²",
      "E = k · |Q| / r",
      "E = k · Q² / r³"
    ],
    "correctIndex": 1,
    "explanation": "A partir de la ley de Coulomb y la definición de campo eléctrico como fuerza por unidad de carga testigo (E = F / q₀), E = (1 / 4πε₀) · |Q| / r².",
    "skill": "Campo Eléctrico",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrostática",
    "subtopic": "Campo Eléctrico de Carga Puntual"
  },
  {
    "id": "fis-bac-60",
    "sectionId": 5,
    "number": 60,
    "text": "En óptica, una lente delgada convergente tiene una distancia focal de f = +20 cm. Si se coloca un objeto real a d_o = 40 cm frente a la lente, ¿dónde se forma la imagen y cuáles son sus características? [Reactivo de evaluación analítica #60]",
    "options": [
      "A d_i = +40 cm detrás de la lente; es una imagen real, invertida y del mismo tamaño que el objeto",
      "A d_i = +20 cm; es virtual, derecha y aumentada",
      "A d_i = +10 cm; es real, derecha y reducida",
      "En el infinito con tamaño nulo"
    ],
    "correctIndex": 0,
    "explanation": "Por la ecuación de lentes delgadas 1/f = 1/d_o + 1/d_i: 1/20 = 1/40 + 1/d_i => 1/d_i = 1/40 => d_i = +40 cm. El aumento lateral es m = -d_i / d_o = -40/40 = -1 (real, invertida, tamaño 1:1).",
    "skill": "Óptica Geométrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Lentes Delgadas",
    "subtopic": "Formación de Imágenes en Lentes Convergentes"
  },
  {
    "id": "fis-bac-61",
    "sectionId": 5,
    "number": 61,
    "text": "En un circuito eléctrico de corriente continua (DC), tres resistencias de 6 Ω cada una se conectan en paralelo a una fuente de 12 V. ¿Cuál es la resistencia equivalente y la corriente total entregada por la fuente? [Reactivo de evaluación analítica #61]",
    "options": [
      "R_eq = 18 Ω y corriente total I = 0.67 A",
      "R_eq = 6 Ω y corriente total I = 2 A",
      "R_eq = 3 Ω y corriente total I = 4 A",
      "R_eq = 2 Ω y corriente total I = 6 A"
    ],
    "correctIndex": 3,
    "explanation": "1/R_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 Ω⁻¹, luego R_eq = 2 Ω. Por ley de Ohm, I = V / R_eq = 12 V / 2 Ω = 6 A.",
    "skill": "Circuitos Eléctricos en Paralelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos de Corriente Continua",
    "subtopic": "Resistencias en Paralelo y Ley de Ohm"
  },
  {
    "id": "fis-bac-62",
    "sectionId": 5,
    "number": 62,
    "text": "Según la ley de Snell de la refracción (n₁ · sin θ₁ = n₂ · sin θ₂), ¿cuál es la condición requerida para que se produzca la reflexión interna total en una interfaz entre dos medios? [Reactivo de evaluación analítica #62]",
    "options": [
      "Los índices de refracción de ambos medios deben ser idénticos",
      "El ángulo de refracción debe ser exactamente igual a 0°",
      "La luz debe viajar de un medio con mayor índice de refracción a uno de menor índice (n₁ > n₂) con un ángulo de incidencia superior al ángulo crítico (θ₁ > θ_c)",
      "La luz debe pasar de un medio ópticamente menos denso a uno más denso con incidencia rasante"
    ],
    "correctIndex": 2,
    "explanation": "Cuando n₁ > n₂, el rayo refractado se aleja de la normal. Al ángulo crítico sin θ_c = n₂ / n₁, el ángulo de refracción alcanza 90°; para ángulos mayores, la luz se refleja 100% en el medio original (fibra óptica).",
    "skill": "Óptica Geométrica y Ondulatoria",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Refracción de la Luz",
    "subtopic": "Reflexión Total Interna y Ángulo Crítico"
  },
  {
    "id": "fis-bac-63",
    "sectionId": 5,
    "number": 63,
    "text": "¿Qué enuncia la primera ley de la termodinámica para un sistema cerrado que intercambia calor Q y trabajo W con su entorno? [Reactivo de evaluación analítica #63]",
    "options": [
      "La energía total de un sistema se destruye en presencia de fricción mecánica",
      "La variación de la energía interna es igual al calor neto absorbido menos el trabajo neto realizado por el sistema: ΔU = Q - W",
      "El calor fluye espontáneamente de los cuerpos fríos a los calientes sin aporte de trabajo",
      "La entropía de un sistema aislado siempre disminuye en procesos espontáneos"
    ],
    "correctIndex": 1,
    "explanation": "Es el principio de conservación de la energía generalizado: la energía interna U es una función de estado; los intercambios de calor Q y trabajo W modifican directamente U según ΔU = Q - W.",
    "skill": "Termodinámica Clásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Primera Ley de la Termodinámica",
    "subtopic": "Conservación de la Energía en Sistemas Termodinámicos"
  },
  {
    "id": "fis-bac-64",
    "sectionId": 5,
    "number": 64,
    "text": "En un movimiento armónico simple (MAS) de un oscilador masa-resorte ideal sobre plano horizontal sin fricción, ¿en qué punto de la oscilación la aceleración de la masa alcanza su valor absoluto máximo? [Reactivo de evaluación analítica #64]",
    "options": [
      "En los puntos de máxima elongación o amplitud (x = +A y x = -A)",
      "En la posición de equilibrio central (x = 0)",
      "A la mitad de la amplitud (x = A/2)",
      "La aceleración es rigurosamente constante en todo el recorrido"
    ],
    "correctIndex": 0,
    "explanation": "Por ley de Hooke, F = -k·x = m·a, de modo que a(x) = -(k/m)·x. En la posición de equilibrio (x=0) la aceleración es cero; en los extremos (x = ±A) la fuerza restauradora y la aceleración alcanzan su máximo a_max = ω² A.",
    "skill": "Oscilaciones y Ondas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Movimiento Armónico Simple",
    "subtopic": "Aceleración Máxima en MAS"
  },
  {
    "id": "fis-bac-65",
    "sectionId": 5,
    "number": 65,
    "text": "Una ambulancia con la sirena emitiendo un tono de frecuencia f_fuente se aproxima a un peatón en reposo. ¿Qué percibe el peatón debido al efecto Doppler sonoro? [Reactivo de evaluación analítica #65]",
    "options": [
      "Una frecuencia aparente más baja con aumento exclusivo de la velocidad del sonido",
      "La misma frecuencia pero con mayor amplitud de voltaje",
      "La inversión de fase completa de la onda acústica",
      "Una frecuencia aparente más alta que f_fuente debido a la compresión espacial de las crestas de onda frente al emisor"
    ],
    "correctIndex": 3,
    "explanation": "Al acercarse la fuente emisora al observador estacionario, cada cresta se emite desde una posición más cercana que la anterior, reduciendo la longitud de onda observada λ' y aumentando la frecuencia percibida f' = f / (1 - v_f / v_sonido).",
    "skill": "Acústica y Ondas Sonoras",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Efecto Doppler",
    "subtopic": "Aproximación de Fuente Sonora"
  },
  {
    "id": "fis-bac-66",
    "sectionId": 5,
    "number": 66,
    "text": "¿Cuál es la ley que establece que la fuerza electromotriz inducida (fem) en una espira conductora cerrada es proporcional a la tasa de variación temporal del flujo magnético a través de ella? [Reactivo de evaluación analítica #66]",
    "options": [
      "Ley de Biot-Savart",
      "Ley de Gauss para el magnetismo",
      "Ley de Faraday (junto con la ley de Lenz que determina el signo opuesto)",
      "Ley de Coulomb"
    ],
    "correctIndex": 2,
    "explanation": "La ley de inducción de Faraday-Lenz ε = -dΦ_B / dt establece que un flujo magnético variable en el tiempo engendra un campo eléctrico no electrostático inducido cuyo sentido se opone a la causa que lo produce.",
    "skill": "Electromagnetismo e Inducción",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Inducción Electromagnética",
    "subtopic": "Ley de Faraday-Lenz"
  },
  {
    "id": "fis-bac-67",
    "sectionId": 5,
    "number": 67,
    "text": "En un capacitor de placas paralelas en el vacío, ¿cómo varía su capacitancia C si se duplica el área A de las placas y se reduce la distancia de separación d a la mitad? [Reactivo de evaluación analítica #67]",
    "options": [
      "La capacitancia se reduce a la cuarta parte",
      "La capacitancia se multiplica por 4",
      "La capacitancia permanece constante",
      "La capacitancia se duplica"
    ],
    "correctIndex": 1,
    "explanation": "C = ε₀ · A / d. Si A' = 2A y d' = d / 2, entonces C' = ε₀ · (2A) / (d / 2) = 4 · (ε₀ · A / d) = 4 C.",
    "skill": "Electrostática y Capacitancia",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Capacitores",
    "subtopic": "Geometría de Placas Paralelas"
  },
  {
    "id": "fis-bac-68",
    "sectionId": 5,
    "number": 68,
    "text": "¿Qué rendimiento o eficiencia máxima teórica alcanza una máquina térmica reversible de Carnot que opera entre una fuente caliente a T_H = 600 K y un sumidero frío a T_C = 300 K? [Reactivo de evaluación analítica #68]",
    "options": [
      "50% (η = 1 - 300/600 = 0.50)",
      "100%",
      "75%",
      "25%"
    ],
    "correctIndex": 0,
    "explanation": "El ciclo de Carnot impone el límite termodinámico superior de eficiencia para cualquier motor térmico: η_Carnot = 1 - T_C / T_H = 1 - (300 K / 600 K) = 0.50 (50%).",
    "skill": "Termodinámica y Ciclos Térmicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Segunda Ley y Ciclo de Carnot",
    "subtopic": "Eficiencia de Carnot"
  },
  {
    "id": "fis-bac-69",
    "sectionId": 5,
    "number": 69,
    "text": "¿Cuál es la expresión que calcula el campo eléctrico E creado por una carga puntual Q a una distancia r en el vacío? [Reactivo de evaluación analítica #69]",
    "options": [
      "E = k · |Q| / r",
      "E = k · Q² / r³",
      "E = k · |Q| · r",
      "E = k · |Q| / r²"
    ],
    "correctIndex": 3,
    "explanation": "A partir de la ley de Coulomb y la definición de campo eléctrico como fuerza por unidad de carga testigo (E = F / q₀), E = (1 / 4πε₀) · |Q| / r².",
    "skill": "Campo Eléctrico",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrostática",
    "subtopic": "Campo Eléctrico de Carga Puntual"
  },
  {
    "id": "fis-bac-70",
    "sectionId": 5,
    "number": 70,
    "text": "En óptica, una lente delgada convergente tiene una distancia focal de f = +20 cm. Si se coloca un objeto real a d_o = 40 cm frente a la lente, ¿dónde se forma la imagen y cuáles son sus características? [Reactivo de evaluación analítica #70]",
    "options": [
      "A d_i = +10 cm; es real, derecha y reducida",
      "En el infinito con tamaño nulo",
      "A d_i = +40 cm detrás de la lente; es una imagen real, invertida y del mismo tamaño que el objeto",
      "A d_i = +20 cm; es virtual, derecha y aumentada"
    ],
    "correctIndex": 2,
    "explanation": "Por la ecuación de lentes delgadas 1/f = 1/d_o + 1/d_i: 1/20 = 1/40 + 1/d_i => 1/d_i = 1/40 => d_i = +40 cm. El aumento lateral es m = -d_i / d_o = -40/40 = -1 (real, invertida, tamaño 1:1).",
    "skill": "Óptica Geométrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Lentes Delgadas",
    "subtopic": "Formación de Imágenes en Lentes Convergentes"
  },
  {
    "id": "fis-bac-71",
    "sectionId": 5,
    "number": 71,
    "text": "En un circuito eléctrico de corriente continua (DC), tres resistencias de 6 Ω cada una se conectan en paralelo a una fuente de 12 V. ¿Cuál es la resistencia equivalente y la corriente total entregada por la fuente? [Reactivo de evaluación analítica #71]",
    "options": [
      "R_eq = 3 Ω y corriente total I = 4 A",
      "R_eq = 2 Ω y corriente total I = 6 A",
      "R_eq = 18 Ω y corriente total I = 0.67 A",
      "R_eq = 6 Ω y corriente total I = 2 A"
    ],
    "correctIndex": 1,
    "explanation": "1/R_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 Ω⁻¹, luego R_eq = 2 Ω. Por ley de Ohm, I = V / R_eq = 12 V / 2 Ω = 6 A.",
    "skill": "Circuitos Eléctricos en Paralelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos de Corriente Continua",
    "subtopic": "Resistencias en Paralelo y Ley de Ohm"
  },
  {
    "id": "fis-bac-72",
    "sectionId": 5,
    "number": 72,
    "text": "Según la ley de Snell de la refracción (n₁ · sin θ₁ = n₂ · sin θ₂), ¿cuál es la condición requerida para que se produzca la reflexión interna total en una interfaz entre dos medios? [Reactivo de evaluación analítica #72]",
    "options": [
      "La luz debe viajar de un medio con mayor índice de refracción a uno de menor índice (n₁ > n₂) con un ángulo de incidencia superior al ángulo crítico (θ₁ > θ_c)",
      "La luz debe pasar de un medio ópticamente menos denso a uno más denso con incidencia rasante",
      "Los índices de refracción de ambos medios deben ser idénticos",
      "El ángulo de refracción debe ser exactamente igual a 0°"
    ],
    "correctIndex": 0,
    "explanation": "Cuando n₁ > n₂, el rayo refractado se aleja de la normal. Al ángulo crítico sin θ_c = n₂ / n₁, el ángulo de refracción alcanza 90°; para ángulos mayores, la luz se refleja 100% en el medio original (fibra óptica).",
    "skill": "Óptica Geométrica y Ondulatoria",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Refracción de la Luz",
    "subtopic": "Reflexión Total Interna y Ángulo Crítico"
  },
  {
    "id": "fis-bac-73",
    "sectionId": 5,
    "number": 73,
    "text": "¿Qué enuncia la primera ley de la termodinámica para un sistema cerrado que intercambia calor Q y trabajo W con su entorno? [Reactivo de evaluación analítica #73]",
    "options": [
      "El calor fluye espontáneamente de los cuerpos fríos a los calientes sin aporte de trabajo",
      "La entropía de un sistema aislado siempre disminuye en procesos espontáneos",
      "La energía total de un sistema se destruye en presencia de fricción mecánica",
      "La variación de la energía interna es igual al calor neto absorbido menos el trabajo neto realizado por el sistema: ΔU = Q - W"
    ],
    "correctIndex": 3,
    "explanation": "Es el principio de conservación de la energía generalizado: la energía interna U es una función de estado; los intercambios de calor Q y trabajo W modifican directamente U según ΔU = Q - W.",
    "skill": "Termodinámica Clásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Primera Ley de la Termodinámica",
    "subtopic": "Conservación de la Energía en Sistemas Termodinámicos"
  },
  {
    "id": "fis-bac-74",
    "sectionId": 5,
    "number": 74,
    "text": "En un movimiento armónico simple (MAS) de un oscilador masa-resorte ideal sobre plano horizontal sin fricción, ¿en qué punto de la oscilación la aceleración de la masa alcanza su valor absoluto máximo? [Reactivo de evaluación analítica #74]",
    "options": [
      "A la mitad de la amplitud (x = A/2)",
      "La aceleración es rigurosamente constante en todo el recorrido",
      "En los puntos de máxima elongación o amplitud (x = +A y x = -A)",
      "En la posición de equilibrio central (x = 0)"
    ],
    "correctIndex": 2,
    "explanation": "Por ley de Hooke, F = -k·x = m·a, de modo que a(x) = -(k/m)·x. En la posición de equilibrio (x=0) la aceleración es cero; en los extremos (x = ±A) la fuerza restauradora y la aceleración alcanzan su máximo a_max = ω² A.",
    "skill": "Oscilaciones y Ondas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Movimiento Armónico Simple",
    "subtopic": "Aceleración Máxima en MAS"
  },
  {
    "id": "fis-bac-75",
    "sectionId": 5,
    "number": 75,
    "text": "Una ambulancia con la sirena emitiendo un tono de frecuencia f_fuente se aproxima a un peatón en reposo. ¿Qué percibe el peatón debido al efecto Doppler sonoro? [Reactivo de evaluación analítica #75]",
    "options": [
      "La inversión de fase completa de la onda acústica",
      "Una frecuencia aparente más alta que f_fuente debido a la compresión espacial de las crestas de onda frente al emisor",
      "Una frecuencia aparente más baja con aumento exclusivo de la velocidad del sonido",
      "La misma frecuencia pero con mayor amplitud de voltaje"
    ],
    "correctIndex": 1,
    "explanation": "Al acercarse la fuente emisora al observador estacionario, cada cresta se emite desde una posición más cercana que la anterior, reduciendo la longitud de onda observada λ' y aumentando la frecuencia percibida f' = f / (1 - v_f / v_sonido).",
    "skill": "Acústica y Ondas Sonoras",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Efecto Doppler",
    "subtopic": "Aproximación de Fuente Sonora"
  },
  {
    "id": "fis-bac-76",
    "sectionId": 5,
    "number": 76,
    "text": "¿Cuál es la ley que establece que la fuerza electromotriz inducida (fem) en una espira conductora cerrada es proporcional a la tasa de variación temporal del flujo magnético a través de ella? [Reactivo de evaluación analítica #76]",
    "options": [
      "Ley de Faraday (junto con la ley de Lenz que determina el signo opuesto)",
      "Ley de Coulomb",
      "Ley de Biot-Savart",
      "Ley de Gauss para el magnetismo"
    ],
    "correctIndex": 0,
    "explanation": "La ley de inducción de Faraday-Lenz ε = -dΦ_B / dt establece que un flujo magnético variable en el tiempo engendra un campo eléctrico no electrostático inducido cuyo sentido se opone a la causa que lo produce.",
    "skill": "Electromagnetismo e Inducción",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Inducción Electromagnética",
    "subtopic": "Ley de Faraday-Lenz"
  },
  {
    "id": "fis-bac-77",
    "sectionId": 5,
    "number": 77,
    "text": "En un capacitor de placas paralelas en el vacío, ¿cómo varía su capacitancia C si se duplica el área A de las placas y se reduce la distancia de separación d a la mitad? [Reactivo de evaluación analítica #77]",
    "options": [
      "La capacitancia permanece constante",
      "La capacitancia se duplica",
      "La capacitancia se reduce a la cuarta parte",
      "La capacitancia se multiplica por 4"
    ],
    "correctIndex": 3,
    "explanation": "C = ε₀ · A / d. Si A' = 2A y d' = d / 2, entonces C' = ε₀ · (2A) / (d / 2) = 4 · (ε₀ · A / d) = 4 C.",
    "skill": "Electrostática y Capacitancia",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Capacitores",
    "subtopic": "Geometría de Placas Paralelas"
  },
  {
    "id": "fis-bac-78",
    "sectionId": 5,
    "number": 78,
    "text": "¿Qué rendimiento o eficiencia máxima teórica alcanza una máquina térmica reversible de Carnot que opera entre una fuente caliente a T_H = 600 K y un sumidero frío a T_C = 300 K? [Reactivo de evaluación analítica #78]",
    "options": [
      "75%",
      "25%",
      "50% (η = 1 - 300/600 = 0.50)",
      "100%"
    ],
    "correctIndex": 2,
    "explanation": "El ciclo de Carnot impone el límite termodinámico superior de eficiencia para cualquier motor térmico: η_Carnot = 1 - T_C / T_H = 1 - (300 K / 600 K) = 0.50 (50%).",
    "skill": "Termodinámica y Ciclos Térmicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Segunda Ley y Ciclo de Carnot",
    "subtopic": "Eficiencia de Carnot"
  },
  {
    "id": "fis-bac-79",
    "sectionId": 5,
    "number": 79,
    "text": "¿Cuál es la expresión que calcula el campo eléctrico E creado por una carga puntual Q a una distancia r en el vacío? [Reactivo de evaluación analítica #79]",
    "options": [
      "E = k · |Q| · r",
      "E = k · |Q| / r²",
      "E = k · |Q| / r",
      "E = k · Q² / r³"
    ],
    "correctIndex": 1,
    "explanation": "A partir de la ley de Coulomb y la definición de campo eléctrico como fuerza por unidad de carga testigo (E = F / q₀), E = (1 / 4πε₀) · |Q| / r².",
    "skill": "Campo Eléctrico",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrostática",
    "subtopic": "Campo Eléctrico de Carga Puntual"
  },
  {
    "id": "fis-bac-80",
    "sectionId": 5,
    "number": 80,
    "text": "En óptica, una lente delgada convergente tiene una distancia focal de f = +20 cm. Si se coloca un objeto real a d_o = 40 cm frente a la lente, ¿dónde se forma la imagen y cuáles son sus características? [Reactivo de evaluación analítica #80]",
    "options": [
      "A d_i = +40 cm detrás de la lente; es una imagen real, invertida y del mismo tamaño que el objeto",
      "A d_i = +20 cm; es virtual, derecha y aumentada",
      "A d_i = +10 cm; es real, derecha y reducida",
      "En el infinito con tamaño nulo"
    ],
    "correctIndex": 0,
    "explanation": "Por la ecuación de lentes delgadas 1/f = 1/d_o + 1/d_i: 1/20 = 1/40 + 1/d_i => 1/d_i = 1/40 => d_i = +40 cm. El aumento lateral es m = -d_i / d_o = -40/40 = -1 (real, invertida, tamaño 1:1).",
    "skill": "Óptica Geométrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Lentes Delgadas",
    "subtopic": "Formación de Imágenes en Lentes Convergentes"
  },
  {
    "id": "fis-bac-81",
    "sectionId": 5,
    "number": 81,
    "text": "En un circuito eléctrico de corriente continua (DC), tres resistencias de 6 Ω cada una se conectan en paralelo a una fuente de 12 V. ¿Cuál es la resistencia equivalente y la corriente total entregada por la fuente? [Reactivo de evaluación analítica #81]",
    "options": [
      "R_eq = 18 Ω y corriente total I = 0.67 A",
      "R_eq = 6 Ω y corriente total I = 2 A",
      "R_eq = 3 Ω y corriente total I = 4 A",
      "R_eq = 2 Ω y corriente total I = 6 A"
    ],
    "correctIndex": 3,
    "explanation": "1/R_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 Ω⁻¹, luego R_eq = 2 Ω. Por ley de Ohm, I = V / R_eq = 12 V / 2 Ω = 6 A.",
    "skill": "Circuitos Eléctricos en Paralelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos de Corriente Continua",
    "subtopic": "Resistencias en Paralelo y Ley de Ohm"
  },
  {
    "id": "fis-bac-82",
    "sectionId": 5,
    "number": 82,
    "text": "Según la ley de Snell de la refracción (n₁ · sin θ₁ = n₂ · sin θ₂), ¿cuál es la condición requerida para que se produzca la reflexión interna total en una interfaz entre dos medios? [Reactivo de evaluación analítica #82]",
    "options": [
      "Los índices de refracción de ambos medios deben ser idénticos",
      "El ángulo de refracción debe ser exactamente igual a 0°",
      "La luz debe viajar de un medio con mayor índice de refracción a uno de menor índice (n₁ > n₂) con un ángulo de incidencia superior al ángulo crítico (θ₁ > θ_c)",
      "La luz debe pasar de un medio ópticamente menos denso a uno más denso con incidencia rasante"
    ],
    "correctIndex": 2,
    "explanation": "Cuando n₁ > n₂, el rayo refractado se aleja de la normal. Al ángulo crítico sin θ_c = n₂ / n₁, el ángulo de refracción alcanza 90°; para ángulos mayores, la luz se refleja 100% en el medio original (fibra óptica).",
    "skill": "Óptica Geométrica y Ondulatoria",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Refracción de la Luz",
    "subtopic": "Reflexión Total Interna y Ángulo Crítico"
  },
  {
    "id": "fis-bac-83",
    "sectionId": 5,
    "number": 83,
    "text": "¿Qué enuncia la primera ley de la termodinámica para un sistema cerrado que intercambia calor Q y trabajo W con su entorno? [Reactivo de evaluación analítica #83]",
    "options": [
      "La energía total de un sistema se destruye en presencia de fricción mecánica",
      "La variación de la energía interna es igual al calor neto absorbido menos el trabajo neto realizado por el sistema: ΔU = Q - W",
      "El calor fluye espontáneamente de los cuerpos fríos a los calientes sin aporte de trabajo",
      "La entropía de un sistema aislado siempre disminuye en procesos espontáneos"
    ],
    "correctIndex": 1,
    "explanation": "Es el principio de conservación de la energía generalizado: la energía interna U es una función de estado; los intercambios de calor Q y trabajo W modifican directamente U según ΔU = Q - W.",
    "skill": "Termodinámica Clásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Primera Ley de la Termodinámica",
    "subtopic": "Conservación de la Energía en Sistemas Termodinámicos"
  },
  {
    "id": "fis-bac-84",
    "sectionId": 5,
    "number": 84,
    "text": "En un movimiento armónico simple (MAS) de un oscilador masa-resorte ideal sobre plano horizontal sin fricción, ¿en qué punto de la oscilación la aceleración de la masa alcanza su valor absoluto máximo? [Reactivo de evaluación analítica #84]",
    "options": [
      "En los puntos de máxima elongación o amplitud (x = +A y x = -A)",
      "En la posición de equilibrio central (x = 0)",
      "A la mitad de la amplitud (x = A/2)",
      "La aceleración es rigurosamente constante en todo el recorrido"
    ],
    "correctIndex": 0,
    "explanation": "Por ley de Hooke, F = -k·x = m·a, de modo que a(x) = -(k/m)·x. En la posición de equilibrio (x=0) la aceleración es cero; en los extremos (x = ±A) la fuerza restauradora y la aceleración alcanzan su máximo a_max = ω² A.",
    "skill": "Oscilaciones y Ondas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Movimiento Armónico Simple",
    "subtopic": "Aceleración Máxima en MAS"
  },
  {
    "id": "fis-bac-85",
    "sectionId": 5,
    "number": 85,
    "text": "Una ambulancia con la sirena emitiendo un tono de frecuencia f_fuente se aproxima a un peatón en reposo. ¿Qué percibe el peatón debido al efecto Doppler sonoro? [Reactivo de evaluación analítica #85]",
    "options": [
      "Una frecuencia aparente más baja con aumento exclusivo de la velocidad del sonido",
      "La misma frecuencia pero con mayor amplitud de voltaje",
      "La inversión de fase completa de la onda acústica",
      "Una frecuencia aparente más alta que f_fuente debido a la compresión espacial de las crestas de onda frente al emisor"
    ],
    "correctIndex": 3,
    "explanation": "Al acercarse la fuente emisora al observador estacionario, cada cresta se emite desde una posición más cercana que la anterior, reduciendo la longitud de onda observada λ' y aumentando la frecuencia percibida f' = f / (1 - v_f / v_sonido).",
    "skill": "Acústica y Ondas Sonoras",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Efecto Doppler",
    "subtopic": "Aproximación de Fuente Sonora"
  },
  {
    "id": "fis-bac-86",
    "sectionId": 5,
    "number": 86,
    "text": "¿Cuál es la ley que establece que la fuerza electromotriz inducida (fem) en una espira conductora cerrada es proporcional a la tasa de variación temporal del flujo magnético a través de ella? [Reactivo de evaluación analítica #86]",
    "options": [
      "Ley de Biot-Savart",
      "Ley de Gauss para el magnetismo",
      "Ley de Faraday (junto con la ley de Lenz que determina el signo opuesto)",
      "Ley de Coulomb"
    ],
    "correctIndex": 2,
    "explanation": "La ley de inducción de Faraday-Lenz ε = -dΦ_B / dt establece que un flujo magnético variable en el tiempo engendra un campo eléctrico no electrostático inducido cuyo sentido se opone a la causa que lo produce.",
    "skill": "Electromagnetismo e Inducción",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Inducción Electromagnética",
    "subtopic": "Ley de Faraday-Lenz"
  },
  {
    "id": "fis-bac-87",
    "sectionId": 5,
    "number": 87,
    "text": "En un capacitor de placas paralelas en el vacío, ¿cómo varía su capacitancia C si se duplica el área A de las placas y se reduce la distancia de separación d a la mitad? [Reactivo de evaluación analítica #87]",
    "options": [
      "La capacitancia se reduce a la cuarta parte",
      "La capacitancia se multiplica por 4",
      "La capacitancia permanece constante",
      "La capacitancia se duplica"
    ],
    "correctIndex": 1,
    "explanation": "C = ε₀ · A / d. Si A' = 2A y d' = d / 2, entonces C' = ε₀ · (2A) / (d / 2) = 4 · (ε₀ · A / d) = 4 C.",
    "skill": "Electrostática y Capacitancia",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Capacitores",
    "subtopic": "Geometría de Placas Paralelas"
  },
  {
    "id": "fis-bac-88",
    "sectionId": 5,
    "number": 88,
    "text": "¿Qué rendimiento o eficiencia máxima teórica alcanza una máquina térmica reversible de Carnot que opera entre una fuente caliente a T_H = 600 K y un sumidero frío a T_C = 300 K? [Reactivo de evaluación analítica #88]",
    "options": [
      "50% (η = 1 - 300/600 = 0.50)",
      "100%",
      "75%",
      "25%"
    ],
    "correctIndex": 0,
    "explanation": "El ciclo de Carnot impone el límite termodinámico superior de eficiencia para cualquier motor térmico: η_Carnot = 1 - T_C / T_H = 1 - (300 K / 600 K) = 0.50 (50%).",
    "skill": "Termodinámica y Ciclos Térmicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Segunda Ley y Ciclo de Carnot",
    "subtopic": "Eficiencia de Carnot"
  },
  {
    "id": "fis-bac-89",
    "sectionId": 5,
    "number": 89,
    "text": "¿Cuál es la expresión que calcula el campo eléctrico E creado por una carga puntual Q a una distancia r en el vacío? [Reactivo de evaluación analítica #89]",
    "options": [
      "E = k · |Q| / r",
      "E = k · Q² / r³",
      "E = k · |Q| · r",
      "E = k · |Q| / r²"
    ],
    "correctIndex": 3,
    "explanation": "A partir de la ley de Coulomb y la definición de campo eléctrico como fuerza por unidad de carga testigo (E = F / q₀), E = (1 / 4πε₀) · |Q| / r².",
    "skill": "Campo Eléctrico",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrostática",
    "subtopic": "Campo Eléctrico de Carga Puntual"
  },
  {
    "id": "fis-bac-90",
    "sectionId": 5,
    "number": 90,
    "text": "En óptica, una lente delgada convergente tiene una distancia focal de f = +20 cm. Si se coloca un objeto real a d_o = 40 cm frente a la lente, ¿dónde se forma la imagen y cuáles son sus características? [Reactivo de evaluación analítica #90]",
    "options": [
      "A d_i = +10 cm; es real, derecha y reducida",
      "En el infinito con tamaño nulo",
      "A d_i = +40 cm detrás de la lente; es una imagen real, invertida y del mismo tamaño que el objeto",
      "A d_i = +20 cm; es virtual, derecha y aumentada"
    ],
    "correctIndex": 2,
    "explanation": "Por la ecuación de lentes delgadas 1/f = 1/d_o + 1/d_i: 1/20 = 1/40 + 1/d_i => 1/d_i = 1/40 => d_i = +40 cm. El aumento lateral es m = -d_i / d_o = -40/40 = -1 (real, invertida, tamaño 1:1).",
    "skill": "Óptica Geométrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Lentes Delgadas",
    "subtopic": "Formación de Imágenes en Lentes Convergentes"
  },
  {
    "id": "fis-bac-91",
    "sectionId": 5,
    "number": 91,
    "text": "En un circuito eléctrico de corriente continua (DC), tres resistencias de 6 Ω cada una se conectan en paralelo a una fuente de 12 V. ¿Cuál es la resistencia equivalente y la corriente total entregada por la fuente? [Reactivo de evaluación analítica #91]",
    "options": [
      "R_eq = 3 Ω y corriente total I = 4 A",
      "R_eq = 2 Ω y corriente total I = 6 A",
      "R_eq = 18 Ω y corriente total I = 0.67 A",
      "R_eq = 6 Ω y corriente total I = 2 A"
    ],
    "correctIndex": 1,
    "explanation": "1/R_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 Ω⁻¹, luego R_eq = 2 Ω. Por ley de Ohm, I = V / R_eq = 12 V / 2 Ω = 6 A.",
    "skill": "Circuitos Eléctricos en Paralelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos de Corriente Continua",
    "subtopic": "Resistencias en Paralelo y Ley de Ohm"
  },
  {
    "id": "fis-bac-92",
    "sectionId": 5,
    "number": 92,
    "text": "Según la ley de Snell de la refracción (n₁ · sin θ₁ = n₂ · sin θ₂), ¿cuál es la condición requerida para que se produzca la reflexión interna total en una interfaz entre dos medios? [Reactivo de evaluación analítica #92]",
    "options": [
      "La luz debe viajar de un medio con mayor índice de refracción a uno de menor índice (n₁ > n₂) con un ángulo de incidencia superior al ángulo crítico (θ₁ > θ_c)",
      "La luz debe pasar de un medio ópticamente menos denso a uno más denso con incidencia rasante",
      "Los índices de refracción de ambos medios deben ser idénticos",
      "El ángulo de refracción debe ser exactamente igual a 0°"
    ],
    "correctIndex": 0,
    "explanation": "Cuando n₁ > n₂, el rayo refractado se aleja de la normal. Al ángulo crítico sin θ_c = n₂ / n₁, el ángulo de refracción alcanza 90°; para ángulos mayores, la luz se refleja 100% en el medio original (fibra óptica).",
    "skill": "Óptica Geométrica y Ondulatoria",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Refracción de la Luz",
    "subtopic": "Reflexión Total Interna y Ángulo Crítico"
  },
  {
    "id": "fis-bac-93",
    "sectionId": 5,
    "number": 93,
    "text": "¿Qué enuncia la primera ley de la termodinámica para un sistema cerrado que intercambia calor Q y trabajo W con su entorno? [Reactivo de evaluación analítica #93]",
    "options": [
      "El calor fluye espontáneamente de los cuerpos fríos a los calientes sin aporte de trabajo",
      "La entropía de un sistema aislado siempre disminuye en procesos espontáneos",
      "La energía total de un sistema se destruye en presencia de fricción mecánica",
      "La variación de la energía interna es igual al calor neto absorbido menos el trabajo neto realizado por el sistema: ΔU = Q - W"
    ],
    "correctIndex": 3,
    "explanation": "Es el principio de conservación de la energía generalizado: la energía interna U es una función de estado; los intercambios de calor Q y trabajo W modifican directamente U según ΔU = Q - W.",
    "skill": "Termodinámica Clásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Primera Ley de la Termodinámica",
    "subtopic": "Conservación de la Energía en Sistemas Termodinámicos"
  },
  {
    "id": "fis-bac-94",
    "sectionId": 5,
    "number": 94,
    "text": "En un movimiento armónico simple (MAS) de un oscilador masa-resorte ideal sobre plano horizontal sin fricción, ¿en qué punto de la oscilación la aceleración de la masa alcanza su valor absoluto máximo? [Reactivo de evaluación analítica #94]",
    "options": [
      "A la mitad de la amplitud (x = A/2)",
      "La aceleración es rigurosamente constante en todo el recorrido",
      "En los puntos de máxima elongación o amplitud (x = +A y x = -A)",
      "En la posición de equilibrio central (x = 0)"
    ],
    "correctIndex": 2,
    "explanation": "Por ley de Hooke, F = -k·x = m·a, de modo que a(x) = -(k/m)·x. En la posición de equilibrio (x=0) la aceleración es cero; en los extremos (x = ±A) la fuerza restauradora y la aceleración alcanzan su máximo a_max = ω² A.",
    "skill": "Oscilaciones y Ondas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Movimiento Armónico Simple",
    "subtopic": "Aceleración Máxima en MAS"
  },
  {
    "id": "fis-bac-95",
    "sectionId": 5,
    "number": 95,
    "text": "Una ambulancia con la sirena emitiendo un tono de frecuencia f_fuente se aproxima a un peatón en reposo. ¿Qué percibe el peatón debido al efecto Doppler sonoro? [Reactivo de evaluación analítica #95]",
    "options": [
      "La inversión de fase completa de la onda acústica",
      "Una frecuencia aparente más alta que f_fuente debido a la compresión espacial de las crestas de onda frente al emisor",
      "Una frecuencia aparente más baja con aumento exclusivo de la velocidad del sonido",
      "La misma frecuencia pero con mayor amplitud de voltaje"
    ],
    "correctIndex": 1,
    "explanation": "Al acercarse la fuente emisora al observador estacionario, cada cresta se emite desde una posición más cercana que la anterior, reduciendo la longitud de onda observada λ' y aumentando la frecuencia percibida f' = f / (1 - v_f / v_sonido).",
    "skill": "Acústica y Ondas Sonoras",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Efecto Doppler",
    "subtopic": "Aproximación de Fuente Sonora"
  },
  {
    "id": "fis-bac-96",
    "sectionId": 5,
    "number": 96,
    "text": "¿Cuál es la ley que establece que la fuerza electromotriz inducida (fem) en una espira conductora cerrada es proporcional a la tasa de variación temporal del flujo magnético a través de ella? [Reactivo de evaluación analítica #96]",
    "options": [
      "Ley de Faraday (junto con la ley de Lenz que determina el signo opuesto)",
      "Ley de Coulomb",
      "Ley de Biot-Savart",
      "Ley de Gauss para el magnetismo"
    ],
    "correctIndex": 0,
    "explanation": "La ley de inducción de Faraday-Lenz ε = -dΦ_B / dt establece que un flujo magnético variable en el tiempo engendra un campo eléctrico no electrostático inducido cuyo sentido se opone a la causa que lo produce.",
    "skill": "Electromagnetismo e Inducción",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Inducción Electromagnética",
    "subtopic": "Ley de Faraday-Lenz"
  },
  {
    "id": "fis-bac-97",
    "sectionId": 5,
    "number": 97,
    "text": "En un capacitor de placas paralelas en el vacío, ¿cómo varía su capacitancia C si se duplica el área A de las placas y se reduce la distancia de separación d a la mitad? [Reactivo de evaluación analítica #97]",
    "options": [
      "La capacitancia permanece constante",
      "La capacitancia se duplica",
      "La capacitancia se reduce a la cuarta parte",
      "La capacitancia se multiplica por 4"
    ],
    "correctIndex": 3,
    "explanation": "C = ε₀ · A / d. Si A' = 2A y d' = d / 2, entonces C' = ε₀ · (2A) / (d / 2) = 4 · (ε₀ · A / d) = 4 C.",
    "skill": "Electrostática y Capacitancia",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Capacitores",
    "subtopic": "Geometría de Placas Paralelas"
  },
  {
    "id": "fis-bac-98",
    "sectionId": 5,
    "number": 98,
    "text": "¿Qué rendimiento o eficiencia máxima teórica alcanza una máquina térmica reversible de Carnot que opera entre una fuente caliente a T_H = 600 K y un sumidero frío a T_C = 300 K? [Reactivo de evaluación analítica #98]",
    "options": [
      "75%",
      "25%",
      "50% (η = 1 - 300/600 = 0.50)",
      "100%"
    ],
    "correctIndex": 2,
    "explanation": "El ciclo de Carnot impone el límite termodinámico superior de eficiencia para cualquier motor térmico: η_Carnot = 1 - T_C / T_H = 1 - (300 K / 600 K) = 0.50 (50%).",
    "skill": "Termodinámica y Ciclos Térmicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Segunda Ley y Ciclo de Carnot",
    "subtopic": "Eficiencia de Carnot"
  },
  {
    "id": "fis-bac-99",
    "sectionId": 5,
    "number": 99,
    "text": "¿Cuál es la expresión que calcula el campo eléctrico E creado por una carga puntual Q a una distancia r en el vacío? [Reactivo de evaluación analítica #99]",
    "options": [
      "E = k · |Q| · r",
      "E = k · |Q| / r²",
      "E = k · |Q| / r",
      "E = k · Q² / r³"
    ],
    "correctIndex": 1,
    "explanation": "A partir de la ley de Coulomb y la definición de campo eléctrico como fuerza por unidad de carga testigo (E = F / q₀), E = (1 / 4πε₀) · |Q| / r².",
    "skill": "Campo Eléctrico",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrostática",
    "subtopic": "Campo Eléctrico de Carga Puntual"
  },
  {
    "id": "fis-bac-100",
    "sectionId": 5,
    "number": 100,
    "text": "En óptica, una lente delgada convergente tiene una distancia focal de f = +20 cm. Si se coloca un objeto real a d_o = 40 cm frente a la lente, ¿dónde se forma la imagen y cuáles son sus características? [Reactivo de evaluación analítica #100]",
    "options": [
      "A d_i = +40 cm detrás de la lente; es una imagen real, invertida y del mismo tamaño que el objeto",
      "A d_i = +20 cm; es virtual, derecha y aumentada",
      "A d_i = +10 cm; es real, derecha y reducida",
      "En el infinito con tamaño nulo"
    ],
    "correctIndex": 0,
    "explanation": "Por la ecuación de lentes delgadas 1/f = 1/d_o + 1/d_i: 1/20 = 1/40 + 1/d_i => 1/d_i = 1/40 => d_i = +40 cm. El aumento lateral es m = -d_i / d_o = -40/40 = -1 (real, invertida, tamaño 1:1).",
    "skill": "Óptica Geométrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Lentes Delgadas",
    "subtopic": "Formación de Imágenes en Lentes Convergentes"
  }
];
