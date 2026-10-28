import { Question } from '../../../types';

export const FISICA_UNIVERSITARIO: Question[] = [
  {
    "id": "fis-uni-1",
    "sectionId": 5,
    "number": 81,
    "text": "En la mecánica analítica de Lagrange y Hamilton, ¿qué teorema fundamental de simetría demostrado por Emmy Noether en 1918 establece que a cada simetría continua de la acción le corresponde una ley de conservación física exacta?",
    "options": [
      "Teorema de Liouville",
      "Teorema de Noether",
      "Teorema de Hamilton-Jacobi",
      "Teorema de Poincaré-Bendixson"
    ],
    "correctIndex": 1,
    "explanation": "El Teorema de Noether deduce formalmente que la invariancia temporal de la acción implica conservación de energía, la invariancia traslacional implica conservación del momento lineal y la invariancia rotacional implica conservación del momento angular.",
    "skill": "Mecánica Teórica y Principios Variacionales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecánica Clásica Avanzada",
    "subtopic": "Teorema de Noether y Simetrías"
  },
  {
    "id": "fis-uni-2",
    "sectionId": 5,
    "number": 82,
    "text": "En la teoría electromagnética relativista covariante de Maxwell, ¿cuál es la estructura matemática del tensor de campo electromagnético antisimétrico F^{μν} en cuatro dimensiones?",
    "options": [
      "Un cuatro-vector de espín fermiónico",
      "Un tensor covariante de rango 2 antisimétrico cuyas componentes espaciotemporales combinan las componentes de los campos E y B (F^{μν} = ∂^μ A^ν - ∂^ν A^μ)",
      "Un escalar invariante de gauge abelian",
      "Una matriz simétrica positiva definida"
    ],
    "correctIndex": 1,
    "explanation": "El tensor de Faraday F^{μν} compacta las 4 ecuaciones de Maxwell en solo dos expresiones tensoriales manifiestamente covariantes: ∂_μ F^{μν} = μ₀ J^ν y ∂_λ F_{μν} + ∂_μ F_{νλ} + ∂_ν F_{λμ} = 0.",
    "skill": "Electrodinámica Clásica Covariante",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Electromagnetismo Teórico",
    "subtopic": "Tensor Electromagnético de Faraday"
  },
  {
    "id": "fis-uni-3",
    "sectionId": 5,
    "number": 83,
    "text": "En mecánica cuántica no relativista, ¿cuál es la relación de conmutación canónica entre los operadores de posición X̂ y momento lineal P̂ en la representación de Schrödinger?",
    "options": [
      "[X̂, P̂] = 0",
      "[X̂, P̂] = i·ħ·Î",
      "[X̂, P̂] = -i·ħ²·Î",
      "[X̂, P̂] = 2ħ·Î"
    ],
    "correctIndex": 1,
    "explanation": "El conmutador fundamental de Heisenberg-Born-Jordan es [X̂, P̂] = X̂P̂ - P̂X̂ = i·ħ·Î, del cual se deduce rigurosamente el Principio de Incertidumbre de Heisenberg (Δx · Δp ≥ ħ/2).",
    "skill": "Mecánica Cuántica y Álgebra de Operadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Cuántica Superior",
    "subtopic": "Conmutador Canónico de Heisenberg"
  },
  {
    "id": "fis-uni-4",
    "sectionId": 5,
    "number": 84,
    "text": "En la relatividad general de Albert Einstein (1915), ¿qué ecuación tensorial de campo relaciona la curvatura del espaciotiempo expresada por el tensor de Einstein G_{μν} con la distribución de materia y energía expresada por el tensor energía-impulso T_{μν}?",
    "options": [
      "G_{μν} = (8πG / c⁴) · T_{μν} - Λ g_{μν}",
      "G_{μν} = m · a_{μν}",
      "R_{μν} = 0 estrictamente en todo el cosmos",
      "T_{μν} = ∇_μ ∇_ν Φ"
    ],
    "correctIndex": 0,
    "explanation": "Las ecuaciones de campo de Einstein G_{μν} + Λ g_{μν} = (8πG/c⁴) T_{μν} dictan que la materia-energía le dice al espaciotiempo cómo curvarse, y la curvatura del espaciotiempo le dice a la materia cómo moverse.",
    "skill": "Relatividad General y Geometría Riemanniana",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Gravitación Relativista",
    "subtopic": "Ecuaciones de Campo de Einstein"
  },
  {
    "id": "fis-uni-5",
    "sectionId": 5,
    "number": 85,
    "text": "En termodinámica estadística cuántica, ¿qué distribución estadística rige el número medio de ocupación por estado cuántico para fermiones idénticos con espín semi-entero sujetos al principio de exclusión de Pauli (como los electrones en un metal)?",
    "options": [
      "Estadística de Maxwell-Boltzmann clásica",
      "Estadística de Fermi-Dirac (n_i = 1 / [e^{(ε_i - μ)/k_B T} + 1])",
      "Estadística de Bose-Einstein",
      "Distribución de Poisson pura"
    ],
    "correctIndex": 1,
    "explanation": "La estadística de Fermi-Dirac acota la ocupación a un máximo de 1 partícula por estado cuántico (debido al principio de exclusión de Pauli), derivando el concepto de Energía de Fermi (E_F).",
    "skill": "Mecánica Estadística Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física del Estado Sólido",
    "subtopic": "Estadística de Fermi-Dirac"
  },
  {
    "id": "fis-uni-6",
    "sectionId": 5,
    "number": 86,
    "text": "En física del estado sólido, ¿qué teorema cuántico afirma que las funciones de onda electrónicas en un potencial cristalino periódico con simetría de traslación pueden escribirse como una onda plana modulada por una función periódica con la red (ψ_k(r) = e^{i k·r} · u_k(r))?",
    "options": [
      "Teorema de Bloch",
      "Teorema de Kramers",
      "Teorema de Goldstone",
      "Teorema de Wigner-Eckart"
    ],
    "correctIndex": 0,
    "explanation": "El Teorema de Felix Bloch fundamenta toda la teoría de bandas de energía en sólidos cristalinos (metales, aislantes y semiconductores) a partir de la invariancia traslacional discreta.",
    "skill": "Física del Estado Sólido y Estructura de Bandas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Materia Condensada",
    "subtopic": "Teorema de Bloch"
  },
  {
    "id": "fis-uni-7",
    "sectionId": 5,
    "number": 87,
    "text": "En la teoría cuántica de campos y física de partículas, ¿a través de qué mecanismo de ruptura espontánea de la simetría electrodébil gauge adquieren masa en reposo los bosones vectoriales intermediarios W⁺, W⁻ y Z⁰?",
    "options": [
      "Mecanismo de Anderson-Higgs-Brout-Englert",
      "Confinamiento de color por gluones",
      "Aniquilación positrónica",
      "Oscilación de sabor de neutrinos"
    ],
    "correctIndex": 0,
    "explanation": "El mecanismo de Higgs introduce un campo escalar complejo con potencial de sombrero mexicano; el valor esperado en el vacío no nulo (VEV ≈ 246 GeV) rompe la simetría SU(2)_L × U(1)_Y dotando de masa a los bosones débiles y fermiones.",
    "skill": "Modelo Estándar de Física de Partículas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría Cuántica de Campos",
    "subtopic": "Mecanismo de Higgs"
  },
  {
    "id": "fis-uni-8",
    "sectionId": 5,
    "number": 88,
    "text": "En electrodinámica cuántica (QED), ¿qué anomalía en el momento magnético dipolar del electrón (g - 2) calculó Julian Schwinger en 1948 mediante correcciones radiativas de un bucle a nivel perturbativo?",
    "options": [
      "a_e = α / (2π) ≈ 0.00116",
      "a_e = 0 idéntico",
      "a_e = ħ / c²",
      "a_e = 2π / α"
    ],
    "correctIndex": 0,
    "explanation": "La corrección radiativa de un fotón virtual en el vértice QED de Schwinger a_e = α / (2π) fue uno de los triunfos empíricos más extraordinarios de la física teórica, verificando la renormalización con 12 cifras decimales.",
    "skill": "Electrodinámica Cuántica (QED)",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Teórica de Altas Energías",
    "subtopic": "Momento Magnético Anómalo de Schwinger"
  },
  {
    "id": "fis-uni-9",
    "sectionId": 5,
    "number": 89,
    "text": "En óptica cuántica y física de láseres, ¿qué coeficientes probabilísticos introdujo Albert Einstein en 1917 para relacionar las tasas de absorción, emisión espontánea y emisión estimulada de fotones por átomos en equilibrio térmico con radiación de Planck?",
    "options": [
      "Coeficientes A y B de Einstein",
      "Matrices de Pauli",
      "Coeficientes de Clebsch-Gordan",
      "Parámetros de Stokes"
    ],
    "correctIndex": 0,
    "explanation": "Los coeficientes A₂₁ (emisión espontánea) y B₂₁ (emisión estimulada) demostraron que la amplificación de luz coherente (LÁSER) requiere inversión de población atómica entre estados ligados.",
    "skill": "Óptica Cuántica y Física de Láseres",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Atómica y Óptica Cuántica",
    "subtopic": "Coeficientes de Einstein"
  },
  {
    "id": "fis-uni-10",
    "sectionId": 5,
    "number": 90,
    "text": "En hidrodinámica avanzada de fluidos viscosos incompresibles, ¿qué célebres ecuaciones diferenciales en derivadas parciales no lineales gobiernan la conservación de cantidad de movimiento bajo esfuerzos de cizalla viscosos (Navier-Stokes)?",
    "options": [
      "ρ · (∂v/∂t + (v · ∇)v) = -∇p + μ ∇²v + f_externa",
      "∇ × B = μ₀ J exclusivamente",
      "d²x/dt² + ω²x = 0",
      "∂²u/∂t² = c² ∇²u"
    ],
    "correctIndex": 0,
    "explanation": "Las ecuaciones de Navier-Stokes combinan el término de aceleración advectiva no lineal (v · ∇)v con el tensor de esfuerzos viscosos newtoniano μ ∇²v y el gradiente bárico, representando uno de los problemas del Milenio del Instituto Clay.",
    "skill": "Mecánica de Fluidos Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Dinámica de Fluidos Avanzada",
    "subtopic": "Ecuaciones de Navier-Stokes"
  },
  {
    "id": "fis-uni-11",
    "sectionId": 5,
    "number": 91,
    "text": "En termodinámica de agujeros negros relativistas, ¿qué fórmula formulada por Jacob Bekenstein y Stephen Hawking calcula la entropía termodinámica S_BH proporcional al área del horizonte de sucesos A?",
    "options": [
      "S_BH = (k_B · c³ · A) / (4 G · ħ)",
      "S_BH = m · c²",
      "S_BH = k_B · T",
      "S_BH = 4π G M²"
    ],
    "correctIndex": 0,
    "explanation": "La fórmula de Bekenstein-Hawking demostró que los agujeros negros no son entidades puramente mecánicas sino termodinámicas con entropía proporcional al área del horizonte dividida por el área de Planck (ℓ_P² = Għ/c³).",
    "skill": "Astrofísica Teórica y Gravedad Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física de Agujeros Negros",
    "subtopic": "Entropía de Bekenstein-Hawking"
  },
  {
    "id": "fis-uni-12",
    "sectionId": 5,
    "number": 92,
    "text": "En superconductividad de baja temperatura, ¿qué teoría microscópica formulada por Bardeen, Cooper y Schrieffer (BCS) en 1957 explica el transporte de corriente sin disipación mediante el emparejamiento de electrones mediado por fonones de la red cristalina?",
    "options": [
      "Teoría BCS de pares de Cooper",
      "Modelo de London fenomenológico",
      "Ecuación de Ginzburg-Landau",
      "Condensación de Dirac"
    ],
    "correctIndex": 0,
    "explanation": "La teoría BCS demuestra que a bajas temperaturas, la interacción atractiva neta entre electrones mediada por el intercambio virtual de fonones induce la formación de pares de Cooper bosónicos que condensan en un gap superconductor.",
    "skill": "Superconductividad y Materia Condensada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Cuántica del Estado Sólido",
    "subtopic": "Teoría BCS y Pares de Cooper"
  },
  {
    "id": "fis-uni-13",
    "sectionId": 5,
    "number": 93,
    "text": "En la teoría cuántica de colisiones y dispersión elástica de partículas (Scattering), ¿qué método aproximativo de perturbaciones es válido cuando el potencial de interacción V(r) es débil comparado con la energía cinética de la onda plana incidente?",
    "options": [
      "Primera Aproximación de Born",
      "Método WKB semiclásico",
      "Aproximación adiabática de Born-Oppenheimer",
      "Teorema óptico estocástico"
    ],
    "correctIndex": 0,
    "explanation": "La primera aproximación de Born expresa la amplitud de dispersión f(θ) como la transformada de Fourier del potencial espacial V(r), fundamental en dispersión de electrones y neutrones térmicos.",
    "skill": "Teoría Cuántica de Dispersión (Scattering)",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecánica Cuántica Avanzada",
    "subtopic": "Aproximación de Born"
  },
  {
    "id": "fis-uni-14",
    "sectionId": 5,
    "number": 94,
    "text": "En cosmología teórica y relatividad cosmológica, ¿qué parámetro adimensional Ω_total = ρ / ρ_crítica determina la curvatura geométrica espacial global del Universo según la métrica FLRW?",
    "options": [
      "Si Ω = 1 el espacio es euclidiano plano (k = 0); si Ω > 1 es cerrado esférico (k = +1); si Ω < 1 es abierto hiperbólico (k = -1).",
      "Ω solo describe la velocidad orbital solar.",
      "El espacio es siempre hiperbólico cerrado.",
      "La densidad crítica no depende de la constante de Hubble."
    ],
    "correctIndex": 0,
    "explanation": "A partir de la primera ecuación de Friedmann, la densidad crítica ρ_c = 3H² / (8πG) actúa como umbral: las mediciones observacionales del fondo cósmico de microondas (CMB por satélite Planck) indican que Ω_k ≈ 0, confirmando un universo espacialmente plano.",
    "skill": "Cosmología Teórica y Modelo Lambda-CDM",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Astrofísica y Cosmología",
    "subtopic": "Métrica FLRW y Parámetro de Densidad"
  },
  {
    "id": "fis-uni-15",
    "sectionId": 5,
    "number": 95,
    "text": "En mecánica cuántica relativista para partículas de espín 1/2, ¿qué ecuación covariante dedujo Paul Dirac en 1928 que predijo teóricamente por primera vez la existencia de la antimateria (el positrón)?",
    "options": [
      "Ecuación de Klein-Gordon",
      "Ecuación de Dirac (iħ γ^μ ∂_μ ψ - mc ψ = 0)",
      "Ecuación de Proca para bosones vectoriales",
      "Ecuación de Weyl para neutrinos quirales"
    ],
    "correctIndex": 1,
    "explanation": "Al linealizar la relación de energía relativista E² = p²c² + m²c⁴ usando las matrices 4×4 de Dirac (álgebra de Clifford {γ^μ, γ^ν} = 2g^{μν}), Dirac predijo estados de energía negativa interpretados como antipartículas.",
    "skill": "Mecánica Cuántica Relativista",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Teórica",
    "subtopic": "Ecuación de Dirac y Antimateria"
  },
  {
    "id": "fis-uni-16",
    "sectionId": 5,
    "number": 96,
    "text": "En la teoría del caos determinista y sistemas dinámicos no lineales, ¿qué exponente métrico λ cuantifica la tasa exponencial promedio de separación o divergencia en el tiempo entre dos trayectorias que parten de condiciones iniciales infinitesimalmente próximas (sensibilidad a las condiciones iniciales)?",
    "options": [
      "Exponente de Hurst",
      "Mayor exponente de Lyapunov (λ > 0)",
      "Dimensión fractal de Hausdorff",
      "Número de Reynolds crítico"
    ],
    "correctIndex": 1,
    "explanation": "Un sistema dinámico determinista exhibe caos determinista en un atractor extraño si su máximo exponente de Lyapunov es estrictamente positivo (λ > 0), con divergencia |δx(t)| ≈ |δx₀| e^{λt}.",
    "skill": "Sistemas Dinámicos No Lineales y Caos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Física Matemática No Lineal",
    "subtopic": "Exponentes de Lyapunov"
  },
  {
    "id": "fis-uni-17",
    "sectionId": 5,
    "number": 97,
    "text": "En astrofísica estelar, ¿cuál es el límite de masa máximo calculado por Subrahmanyan Chandrasekhar (aproximadamente 1.4 masas solares) que puede sostener una enana blanca mediante la presión de degeneración cuántica de electrones relativistas?",
    "options": [
      "Límite de Tolman-Oppenheimer-Volkoff (TOV)",
      "Límite de Chandrasekhar (M_Ch ≈ 1.44 M_☉)",
      "Límite de Eddington de radiación",
      "Radio de Schwarzschild"
    ],
    "correctIndex": 1,
    "explanation": "Por encima de ~1.44 M_☉, los electrones degenerados se vuelven ultra-relativistas y la presión de degeneración de Fermi no puede contrarrestar el colapso gravitatorio, colapsando a estrella de neutrones o supernova tipo Ia.",
    "skill": "Estructura y Evolución Estelar",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Astrofísica Estelar",
    "subtopic": "Límite de Chandrasekhar"
  },
  {
    "id": "fis-uni-18",
    "sectionId": 5,
    "number": 98,
    "text": "En la teoría cuántica de campos en espaciotiempos curvos, ¿qué radiación térmica espontánea predijo Stephen Hawking (1974) que emite un agujero negro debido a la creación cuántica de pares de partículas virtuales cerca del horizonte de sucesos?",
    "options": [
      "Radiación de Hawking",
      "Radiación sincrotrón relativista",
      "Transición de fase leptónica",
      "Bremsstrahlung de plasma"
    ],
    "correctIndex": 0,
    "explanation": "El campo gravitatorio extremo en el horizonte separa pares virtuales partícula-antipartícula: la de energía negativa respecto al infinito cae al agujero mientras la de energía positiva escapa, emitiendo radiación de cuerpo negro a temperatura T_H = ħc³ / (8πGM k_B).",
    "skill": "Campos Cuánticos en Espaciotiempo Curvo",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Gravitación Cuántica",
    "subtopic": "Radiación de Hawking"
  },
  {
    "id": "fis-uni-19",
    "sectionId": 5,
    "number": 99,
    "text": "En física de plasmas y fusión nuclear magnética, ¿qué criterio termonuclear formulado por John D. Lawson establece que el producto de la densidad iónica, temperatura y tiempo de confinamiento energético (n · T · τ_E) debe superar un valor umbral para alcanzar la ignición sostenida?",
    "options": [
      "Criterio de triple producto de Lawson",
      "Límite de Greenwald de densidad",
      "Condición de estabilidad de Kruskal-Shafranov",
      "Longitud de Debye"
    ],
    "correctIndex": 0,
    "explanation": "El criterio de Lawson exige que la potencia de calentamiento aportada por las partículas alfa de la reacción D-T compense exactamente todas las pérdidas energéticas por radiación y transporte térmico del plasma.",
    "skill": "Física de Plasmas y Fusión Termonuclear",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Fusión Nuclear Controlada",
    "subtopic": "Criterio de Lawson"
  },
  {
    "id": "fis-uni-20",
    "sectionId": 5,
    "number": 100,
    "text": "En física cuántica de la información, ¿qué teorema fundamental deducido por Wootters y Zurek establece la imposibilidad matemática de clonar perfectamente un estado cuántico superpuesto puro desconocido mediante una transformación unitaria?",
    "options": [
      "Teorema de Bell",
      "Teorema de No-Clonación (No-cloning theorem)",
      "Teorema de Kochen-Specker",
      "Desigualdad de Clauser-Horne-Shimony-Holt (CHSH)"
    ],
    "correctIndex": 1,
    "explanation": "Dada la linealidad estricta de la mecánica cuántica: si U |ψ⟩|0⟩ = |ψ⟩|ψ⟩ y U |φ⟩|0⟩ = |φ⟩|φ⟩, para un estado superpuesto (|ψ⟩+|φ⟩)/√2 la salida no es el producto tensorial duplicado, garantizando la inviolabilidad criptográfica cuántica (QKD).",
    "skill": "Información y Criptografía Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Computación Cuántica",
    "subtopic": "Teorema de No-Clonación"
  },
  {
    "id": "fis-uni-21",
    "sectionId": 5,
    "number": 21,
    "text": "En mecánica analítica clásica, ¿cuál es la ecuación de Euler-Lagrange para un sistema conservativo con coordenadas generalizadas q_i y lagrangiano L = T - V?",
    "options": [
      "∂L / ∂t + ∑ (∂L / ∂q_i) = 0",
      "∂H / ∂p_i = q̇_i y ∂H / ∂q_i = ṗ_i",
      "d/dt (p_i) + ∂V / ∂q̇_i = 0",
      "d/dt (∂L / ∂q̇_i) - ∂L / ∂q_i = 0"
    ],
    "correctIndex": 3,
    "explanation": "A partir del principio variacional de Hamilton (δ ∫ L dt = 0), las trayectorias físicas que minimizan o estacionarizan la acción satisfacen rigurosamente las ecuaciones diferenciales de Euler-Lagrange d/dt(∂L/∂q̇_i) - ∂L/∂q_i = 0.",
    "skill": "Mecánica Clásica Analítica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecánica Lagrangiana",
    "subtopic": "Ecuaciones de Euler-Lagrange"
  },
  {
    "id": "fis-uni-22",
    "sectionId": 5,
    "number": 22,
    "text": "¿Cuál es la expresión física y significado del vector de Poynting S = (1/μ₀) (E × B) en electrodinámica clásica?",
    "options": [
      "Indica la divergencia del potencial vector magnético de Coulomb",
      "Representa la fuerza electrostática neta por unidad de volumen de plasma",
      "Representa la densidad de flujo de energía electromagnética por unidad de tiempo y unidad de área (potencia superficial en W/m²) transportada por el campo",
      "Mide la densidad de carga magnética libre en el vacío"
    ],
    "correctIndex": 2,
    "explanation": "Derivado del teorema de Poynting a partir de las ecuaciones de Maxwell, el vector S apunta en la dirección de propagación de la radiación electromagnética y cuantifica la potencia que atraviesa una superficie unitaria.",
    "skill": "Electrodinámica Clásica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ondas Electromagnéticas",
    "subtopic": "Vector de Poynting y Flujo de Energía"
  },
  {
    "id": "fis-uni-23",
    "sectionId": 5,
    "number": 23,
    "text": "En mecánica cuántica no relativista, ¿cuál es el valor del conmutador fundamental de posición y momento lineal [x̂, p̂_x] = x̂ p̂_x - p̂_x x̂?",
    "options": [
      "2 i ℏ x̂",
      "i ℏ (donde ℏ es la constante reducida de Planck y i es la unidad imaginaria)",
      "0 (conmutan perfectamente)",
      "-ℏ² / 2m"
    ],
    "correctIndex": 1,
    "explanation": "Aplicando el operador momento p̂_x = -iℏ d/dx sobre una función de prueba ψ(x): [x, -iℏ d/dx] ψ = -iℏ x ψ' - (-iℏ (xψ)') = -iℏ x ψ' + iℏ (ψ + xψ') = iℏ ψ. Por tanto [x̂, p̂_x] = iℏ, base del principio de incertidumbre de Heisenberg.",
    "skill": "Mecánica Cuántica Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Formalismo de Operadores Cuánticos",
    "subtopic": "Conmutador Canónico [x, p]"
  },
  {
    "id": "fis-uni-24",
    "sectionId": 5,
    "number": 24,
    "text": "En termodinámica estadística, ¿qué estadística cuántica describe sistemas de partículas idénticas de espín entero (bosones), como fotones o átomos de He-4, que no obedecen el principio de exclusión de Pauli?",
    "options": [
      "Estadística de Bose-Einstein",
      "Estadística de Fermi-Dirac",
      "Estadística clásica de Maxwell-Boltzmann",
      "Distribución canónica microreversible de Gibbs"
    ],
    "correctIndex": 0,
    "explanation": "Las funciones de onda de bosones son simétricas bajo el intercambio de dos partículas, permitiendo que un número macroscópico de bosones ocupe el mismo estado fundamental a bajas temperaturas (condensación de Bose-Einstein).",
    "skill": "Física Estadística Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estadísticas Cuánticas",
    "subtopic": "Distribución de Bose-Einstein"
  },
  {
    "id": "fis-uni-25",
    "sectionId": 5,
    "number": 25,
    "text": "En relatividad especial, ¿cuál es el factor de Lorentz γ para una partícula relativista que se desplaza a una rapidez v respecto a un observador inercial?",
    "options": [
      "γ = √(1 - v² / c²)",
      "γ = 1 + v / c",
      "γ = c² / (c² + v²)",
      "γ = 1 / √(1 - v² / c²)"
    ],
    "correctIndex": 3,
    "explanation": "El factor de Lorentz γ = (1 - β²)^(-1/2) donde β = v/c describe la dilatación temporal (Δt = γ Δt₀) y la contracción de la longitud (L = L₀ / γ) medidas por observadores en movimiento relativo.",
    "skill": "Relatividad Especial de Einstein",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinemática Relativista",
    "subtopic": "Factor de Lorentz"
  },
  {
    "id": "fis-uni-26",
    "sectionId": 5,
    "number": 26,
    "text": "En mecánica cuántica, para una partícula de masa m confinada en un pozo de potencial unidimensional infinito de ancho L (0 ≤ x ≤ L), ¿cómo dependen los niveles energéticos discretos E_n del número cuántico principal n (n = 1, 2, 3...)?",
    "options": [
      "E_n = -13.6 eV / n²",
      "E_n = (n + 1/2) ℏ ω",
      "E_n = (n² π² ℏ²) / (2 m L²)",
      "E_n = n ℏ ω₀"
    ],
    "correctIndex": 2,
    "explanation": "Resolviendo la ecuación de Schrödinger con condiciones de contorno ψ(0) = ψ(L) = 0 se obtiene k_n = nπ/L y E_n = ℏ² k_n² / (2m) = n² π² ℏ² / (2 m L²), mostrando cuantización cuadrática en n.",
    "skill": "Mecánica Cuántica de Sistemas Simples",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Pozo de Potencial Infinito",
    "subtopic": "Autoenergías de la Partícula en una Caja"
  },
  {
    "id": "fis-uni-27",
    "sectionId": 5,
    "number": 27,
    "text": "¿Qué postula el teorema de Noether en física teórica sobre la relación entre simetrías continuas de la acción de un sistema físico y las leyes de conservación?",
    "options": [
      "Las fuerzas de gauge abelianas son necesariamente no invertibles",
      "A cada simetría continua diferenciable de la acción de un sistema lagrangiano le corresponde una corriente conservada y una ley de conservación física (v.gr., invariancia temporal implica conservación de energía)",
      "Todas las trayectorias dinámicas son invariantes bajo reflexiones discretas de paridad",
      "La entropía de un sistema cerrado permanece estacionaria en el equilibrio cuántico"
    ],
    "correctIndex": 1,
    "explanation": "Demostrado por Emmy Noether en 1918, unifica la física fundamental: la traslación temporal conserva la energía, la traslación espacial conserva el momentum lineal, y la rotación espacial conserva el momentum angular.",
    "skill": "Física Matemática y Simetrías",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teorema de Noether",
    "subtopic": "Simetrías Continuas y Leyes de Conservación"
  },
  {
    "id": "fis-uni-28",
    "sectionId": 5,
    "number": 28,
    "text": "En relatividad general, ¿qué solución exacta estática y con simetría esférica a las ecuaciones de campo de Einstein en el vacío describe el espaciotiempo alrededor de una masa no rotante y no cargada?",
    "options": [
      "Métrica de Schwarzschild",
      "Métrica de Kerr",
      "Métrica de Friedmann-Lemaître-Robertson-Walker",
      "Métrica de Reissner-Nordström"
    ],
    "correctIndex": 0,
    "explanation": "Karl Schwarzschild halló en 1916 la solución a R_μν = 0 para una masa puntual esférica M, prediciendo la curvatura del espaciotiempo y el radio de Schwarzschild r_s = 2GM/c² (horizonte de sucesos de un agujero negro estático).",
    "skill": "Relatividad General y Gravitación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Métrica de Schwarzschild",
    "subtopic": "Agujeros Negros Estáticos"
  },
  {
    "id": "fis-uni-29",
    "sectionId": 5,
    "number": 29,
    "text": "En física del estado sólido, ¿cómo explica el modelo de bandas electrónicas de Kronig-Penney la existencia de bandas de energía prohibidas (bandgaps) en redes cristalinas periódicas?",
    "options": [
      "Atracción electrostática pura no cuántica entre electrones y fonones",
      "Decaimiento radiactivo beta en los nudos de la celda unitaria",
      "Polarización dipolar de la nube electrónica superficial",
      "Interferencia cuántica constructiva y destructiva (difracción de Bragg) de las ondas de Bloch electrónicas que se reflejan en el potencial periódico de los iones de la red"
    ],
    "correctIndex": 3,
    "explanation": "Al resolver la ecuación de Schrödinger con un potencial periódico tipo peine de Dirac, las funciones de onda electrónicas son ondas de Bloch. En los bordes de la zona de Brillouin (k = ±nπ/a), la difracción de Bragg abre brechas de energía prohibidas donde no existen estados propagativos.",
    "skill": "Física del Estado Sólido",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Bandas de Sólidos",
    "subtopic": "Modelo de Kronig-Penney y Bandgap"
  },
  {
    "id": "fis-uni-30",
    "sectionId": 5,
    "number": 30,
    "text": "En termodinámica estadística, ¿cuál es la relación fundamental de Boltzmann que vincula la entropía termodinámica S con el número de microestados accesibles Ω de un sistema macroscópico aislado (ensamble microcanónico)?",
    "options": [
      "S = k_B · Ω²",
      "S = (1 / k_B) · dΩ / dt",
      "S = k_B · ln(Ω)",
      "S = -k_B · T · ln(Z)"
    ],
    "correctIndex": 2,
    "explanation": "Inscrita en la tumba de Ludwig Boltzmann, S = k_B ln Ω conecta el mundo microscópico probabilístico (Ω microestados) con la variable macroscópica termodinámica clásica de entropía S a través de la constante de Boltzmann k_B.",
    "skill": "Termodinámica Estadística Fundamental",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ensamble Microcanónico",
    "subtopic": "Fórmula de Entropía de Boltzmann"
  },
  {
    "id": "fis-uni-31",
    "sectionId": 5,
    "number": 31,
    "text": "En mecánica analítica clásica, ¿cuál es la ecuación de Euler-Lagrange para un sistema conservativo con coordenadas generalizadas q_i y lagrangiano L = T - V? [Reactivo de evaluación analítica #31]",
    "options": [
      "d/dt (p_i) + ∂V / ∂q̇_i = 0",
      "d/dt (∂L / ∂q̇_i) - ∂L / ∂q_i = 0",
      "∂L / ∂t + ∑ (∂L / ∂q_i) = 0",
      "∂H / ∂p_i = q̇_i y ∂H / ∂q_i = ṗ_i"
    ],
    "correctIndex": 1,
    "explanation": "A partir del principio variacional de Hamilton (δ ∫ L dt = 0), las trayectorias físicas que minimizan o estacionarizan la acción satisfacen rigurosamente las ecuaciones diferenciales de Euler-Lagrange d/dt(∂L/∂q̇_i) - ∂L/∂q_i = 0.",
    "skill": "Mecánica Clásica Analítica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecánica Lagrangiana",
    "subtopic": "Ecuaciones de Euler-Lagrange"
  },
  {
    "id": "fis-uni-32",
    "sectionId": 5,
    "number": 32,
    "text": "¿Cuál es la expresión física y significado del vector de Poynting S = (1/μ₀) (E × B) en electrodinámica clásica? [Reactivo de evaluación analítica #32]",
    "options": [
      "Representa la densidad de flujo de energía electromagnética por unidad de tiempo y unidad de área (potencia superficial en W/m²) transportada por el campo",
      "Mide la densidad de carga magnética libre en el vacío",
      "Indica la divergencia del potencial vector magnético de Coulomb",
      "Representa la fuerza electrostática neta por unidad de volumen de plasma"
    ],
    "correctIndex": 0,
    "explanation": "Derivado del teorema de Poynting a partir de las ecuaciones de Maxwell, el vector S apunta en la dirección de propagación de la radiación electromagnética y cuantifica la potencia que atraviesa una superficie unitaria.",
    "skill": "Electrodinámica Clásica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ondas Electromagnéticas",
    "subtopic": "Vector de Poynting y Flujo de Energía"
  },
  {
    "id": "fis-uni-33",
    "sectionId": 5,
    "number": 33,
    "text": "En mecánica cuántica no relativista, ¿cuál es el valor del conmutador fundamental de posición y momento lineal [x̂, p̂_x] = x̂ p̂_x - p̂_x x̂? [Reactivo de evaluación analítica #33]",
    "options": [
      "0 (conmutan perfectamente)",
      "-ℏ² / 2m",
      "2 i ℏ x̂",
      "i ℏ (donde ℏ es la constante reducida de Planck y i es la unidad imaginaria)"
    ],
    "correctIndex": 3,
    "explanation": "Aplicando el operador momento p̂_x = -iℏ d/dx sobre una función de prueba ψ(x): [x, -iℏ d/dx] ψ = -iℏ x ψ' - (-iℏ (xψ)') = -iℏ x ψ' + iℏ (ψ + xψ') = iℏ ψ. Por tanto [x̂, p̂_x] = iℏ, base del principio de incertidumbre de Heisenberg.",
    "skill": "Mecánica Cuántica Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Formalismo de Operadores Cuánticos",
    "subtopic": "Conmutador Canónico [x, p]"
  },
  {
    "id": "fis-uni-34",
    "sectionId": 5,
    "number": 34,
    "text": "En termodinámica estadística, ¿qué estadística cuántica describe sistemas de partículas idénticas de espín entero (bosones), como fotones o átomos de He-4, que no obedecen el principio de exclusión de Pauli? [Reactivo de evaluación analítica #34]",
    "options": [
      "Estadística clásica de Maxwell-Boltzmann",
      "Distribución canónica microreversible de Gibbs",
      "Estadística de Bose-Einstein",
      "Estadística de Fermi-Dirac"
    ],
    "correctIndex": 2,
    "explanation": "Las funciones de onda de bosones son simétricas bajo el intercambio de dos partículas, permitiendo que un número macroscópico de bosones ocupe el mismo estado fundamental a bajas temperaturas (condensación de Bose-Einstein).",
    "skill": "Física Estadística Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estadísticas Cuánticas",
    "subtopic": "Distribución de Bose-Einstein"
  },
  {
    "id": "fis-uni-35",
    "sectionId": 5,
    "number": 35,
    "text": "En relatividad especial, ¿cuál es el factor de Lorentz γ para una partícula relativista que se desplaza a una rapidez v respecto a un observador inercial? [Reactivo de evaluación analítica #35]",
    "options": [
      "γ = c² / (c² + v²)",
      "γ = 1 / √(1 - v² / c²)",
      "γ = √(1 - v² / c²)",
      "γ = 1 + v / c"
    ],
    "correctIndex": 1,
    "explanation": "El factor de Lorentz γ = (1 - β²)^(-1/2) donde β = v/c describe la dilatación temporal (Δt = γ Δt₀) y la contracción de la longitud (L = L₀ / γ) medidas por observadores en movimiento relativo.",
    "skill": "Relatividad Especial de Einstein",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinemática Relativista",
    "subtopic": "Factor de Lorentz"
  },
  {
    "id": "fis-uni-36",
    "sectionId": 5,
    "number": 36,
    "text": "En mecánica cuántica, para una partícula de masa m confinada en un pozo de potencial unidimensional infinito de ancho L (0 ≤ x ≤ L), ¿cómo dependen los niveles energéticos discretos E_n del número cuántico principal n (n = 1, 2, 3...)? [Reactivo de evaluación analítica #36]",
    "options": [
      "E_n = (n² π² ℏ²) / (2 m L²)",
      "E_n = n ℏ ω₀",
      "E_n = -13.6 eV / n²",
      "E_n = (n + 1/2) ℏ ω"
    ],
    "correctIndex": 0,
    "explanation": "Resolviendo la ecuación de Schrödinger con condiciones de contorno ψ(0) = ψ(L) = 0 se obtiene k_n = nπ/L y E_n = ℏ² k_n² / (2m) = n² π² ℏ² / (2 m L²), mostrando cuantización cuadrática en n.",
    "skill": "Mecánica Cuántica de Sistemas Simples",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Pozo de Potencial Infinito",
    "subtopic": "Autoenergías de la Partícula en una Caja"
  },
  {
    "id": "fis-uni-37",
    "sectionId": 5,
    "number": 37,
    "text": "¿Qué postula el teorema de Noether en física teórica sobre la relación entre simetrías continuas de la acción de un sistema físico y las leyes de conservación? [Reactivo de evaluación analítica #37]",
    "options": [
      "Todas las trayectorias dinámicas son invariantes bajo reflexiones discretas de paridad",
      "La entropía de un sistema cerrado permanece estacionaria en el equilibrio cuántico",
      "Las fuerzas de gauge abelianas son necesariamente no invertibles",
      "A cada simetría continua diferenciable de la acción de un sistema lagrangiano le corresponde una corriente conservada y una ley de conservación física (v.gr., invariancia temporal implica conservación de energía)"
    ],
    "correctIndex": 3,
    "explanation": "Demostrado por Emmy Noether en 1918, unifica la física fundamental: la traslación temporal conserva la energía, la traslación espacial conserva el momentum lineal, y la rotación espacial conserva el momentum angular.",
    "skill": "Física Matemática y Simetrías",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teorema de Noether",
    "subtopic": "Simetrías Continuas y Leyes de Conservación"
  },
  {
    "id": "fis-uni-38",
    "sectionId": 5,
    "number": 38,
    "text": "En relatividad general, ¿qué solución exacta estática y con simetría esférica a las ecuaciones de campo de Einstein en el vacío describe el espaciotiempo alrededor de una masa no rotante y no cargada? [Reactivo de evaluación analítica #38]",
    "options": [
      "Métrica de Friedmann-Lemaître-Robertson-Walker",
      "Métrica de Reissner-Nordström",
      "Métrica de Schwarzschild",
      "Métrica de Kerr"
    ],
    "correctIndex": 2,
    "explanation": "Karl Schwarzschild halló en 1916 la solución a R_μν = 0 para una masa puntual esférica M, prediciendo la curvatura del espaciotiempo y el radio de Schwarzschild r_s = 2GM/c² (horizonte de sucesos de un agujero negro estático).",
    "skill": "Relatividad General y Gravitación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Métrica de Schwarzschild",
    "subtopic": "Agujeros Negros Estáticos"
  },
  {
    "id": "fis-uni-39",
    "sectionId": 5,
    "number": 39,
    "text": "En física del estado sólido, ¿cómo explica el modelo de bandas electrónicas de Kronig-Penney la existencia de bandas de energía prohibidas (bandgaps) en redes cristalinas periódicas? [Reactivo de evaluación analítica #39]",
    "options": [
      "Polarización dipolar de la nube electrónica superficial",
      "Interferencia cuántica constructiva y destructiva (difracción de Bragg) de las ondas de Bloch electrónicas que se reflejan en el potencial periódico de los iones de la red",
      "Atracción electrostática pura no cuántica entre electrones y fonones",
      "Decaimiento radiactivo beta en los nudos de la celda unitaria"
    ],
    "correctIndex": 1,
    "explanation": "Al resolver la ecuación de Schrödinger con un potencial periódico tipo peine de Dirac, las funciones de onda electrónicas son ondas de Bloch. En los bordes de la zona de Brillouin (k = ±nπ/a), la difracción de Bragg abre brechas de energía prohibidas donde no existen estados propagativos.",
    "skill": "Física del Estado Sólido",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Bandas de Sólidos",
    "subtopic": "Modelo de Kronig-Penney y Bandgap"
  },
  {
    "id": "fis-uni-40",
    "sectionId": 5,
    "number": 40,
    "text": "En termodinámica estadística, ¿cuál es la relación fundamental de Boltzmann que vincula la entropía termodinámica S con el número de microestados accesibles Ω de un sistema macroscópico aislado (ensamble microcanónico)? [Reactivo de evaluación analítica #40]",
    "options": [
      "S = k_B · ln(Ω)",
      "S = -k_B · T · ln(Z)",
      "S = k_B · Ω²",
      "S = (1 / k_B) · dΩ / dt"
    ],
    "correctIndex": 0,
    "explanation": "Inscrita en la tumba de Ludwig Boltzmann, S = k_B ln Ω conecta el mundo microscópico probabilístico (Ω microestados) con la variable macroscópica termodinámica clásica de entropía S a través de la constante de Boltzmann k_B.",
    "skill": "Termodinámica Estadística Fundamental",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ensamble Microcanónico",
    "subtopic": "Fórmula de Entropía de Boltzmann"
  },
  {
    "id": "fis-uni-41",
    "sectionId": 5,
    "number": 41,
    "text": "En mecánica analítica clásica, ¿cuál es la ecuación de Euler-Lagrange para un sistema conservativo con coordenadas generalizadas q_i y lagrangiano L = T - V? [Reactivo de evaluación analítica #41]",
    "options": [
      "∂L / ∂t + ∑ (∂L / ∂q_i) = 0",
      "∂H / ∂p_i = q̇_i y ∂H / ∂q_i = ṗ_i",
      "d/dt (p_i) + ∂V / ∂q̇_i = 0",
      "d/dt (∂L / ∂q̇_i) - ∂L / ∂q_i = 0"
    ],
    "correctIndex": 3,
    "explanation": "A partir del principio variacional de Hamilton (δ ∫ L dt = 0), las trayectorias físicas que minimizan o estacionarizan la acción satisfacen rigurosamente las ecuaciones diferenciales de Euler-Lagrange d/dt(∂L/∂q̇_i) - ∂L/∂q_i = 0.",
    "skill": "Mecánica Clásica Analítica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecánica Lagrangiana",
    "subtopic": "Ecuaciones de Euler-Lagrange"
  },
  {
    "id": "fis-uni-42",
    "sectionId": 5,
    "number": 42,
    "text": "¿Cuál es la expresión física y significado del vector de Poynting S = (1/μ₀) (E × B) en electrodinámica clásica? [Reactivo de evaluación analítica #42]",
    "options": [
      "Indica la divergencia del potencial vector magnético de Coulomb",
      "Representa la fuerza electrostática neta por unidad de volumen de plasma",
      "Representa la densidad de flujo de energía electromagnética por unidad de tiempo y unidad de área (potencia superficial en W/m²) transportada por el campo",
      "Mide la densidad de carga magnética libre en el vacío"
    ],
    "correctIndex": 2,
    "explanation": "Derivado del teorema de Poynting a partir de las ecuaciones de Maxwell, el vector S apunta en la dirección de propagación de la radiación electromagnética y cuantifica la potencia que atraviesa una superficie unitaria.",
    "skill": "Electrodinámica Clásica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ondas Electromagnéticas",
    "subtopic": "Vector de Poynting y Flujo de Energía"
  },
  {
    "id": "fis-uni-43",
    "sectionId": 5,
    "number": 43,
    "text": "En mecánica cuántica no relativista, ¿cuál es el valor del conmutador fundamental de posición y momento lineal [x̂, p̂_x] = x̂ p̂_x - p̂_x x̂? [Reactivo de evaluación analítica #43]",
    "options": [
      "2 i ℏ x̂",
      "i ℏ (donde ℏ es la constante reducida de Planck y i es la unidad imaginaria)",
      "0 (conmutan perfectamente)",
      "-ℏ² / 2m"
    ],
    "correctIndex": 1,
    "explanation": "Aplicando el operador momento p̂_x = -iℏ d/dx sobre una función de prueba ψ(x): [x, -iℏ d/dx] ψ = -iℏ x ψ' - (-iℏ (xψ)') = -iℏ x ψ' + iℏ (ψ + xψ') = iℏ ψ. Por tanto [x̂, p̂_x] = iℏ, base del principio de incertidumbre de Heisenberg.",
    "skill": "Mecánica Cuántica Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Formalismo de Operadores Cuánticos",
    "subtopic": "Conmutador Canónico [x, p]"
  },
  {
    "id": "fis-uni-44",
    "sectionId": 5,
    "number": 44,
    "text": "En termodinámica estadística, ¿qué estadística cuántica describe sistemas de partículas idénticas de espín entero (bosones), como fotones o átomos de He-4, que no obedecen el principio de exclusión de Pauli? [Reactivo de evaluación analítica #44]",
    "options": [
      "Estadística de Bose-Einstein",
      "Estadística de Fermi-Dirac",
      "Estadística clásica de Maxwell-Boltzmann",
      "Distribución canónica microreversible de Gibbs"
    ],
    "correctIndex": 0,
    "explanation": "Las funciones de onda de bosones son simétricas bajo el intercambio de dos partículas, permitiendo que un número macroscópico de bosones ocupe el mismo estado fundamental a bajas temperaturas (condensación de Bose-Einstein).",
    "skill": "Física Estadística Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estadísticas Cuánticas",
    "subtopic": "Distribución de Bose-Einstein"
  },
  {
    "id": "fis-uni-45",
    "sectionId": 5,
    "number": 45,
    "text": "En relatividad especial, ¿cuál es el factor de Lorentz γ para una partícula relativista que se desplaza a una rapidez v respecto a un observador inercial? [Reactivo de evaluación analítica #45]",
    "options": [
      "γ = √(1 - v² / c²)",
      "γ = 1 + v / c",
      "γ = c² / (c² + v²)",
      "γ = 1 / √(1 - v² / c²)"
    ],
    "correctIndex": 3,
    "explanation": "El factor de Lorentz γ = (1 - β²)^(-1/2) donde β = v/c describe la dilatación temporal (Δt = γ Δt₀) y la contracción de la longitud (L = L₀ / γ) medidas por observadores en movimiento relativo.",
    "skill": "Relatividad Especial de Einstein",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinemática Relativista",
    "subtopic": "Factor de Lorentz"
  },
  {
    "id": "fis-uni-46",
    "sectionId": 5,
    "number": 46,
    "text": "En mecánica cuántica, para una partícula de masa m confinada en un pozo de potencial unidimensional infinito de ancho L (0 ≤ x ≤ L), ¿cómo dependen los niveles energéticos discretos E_n del número cuántico principal n (n = 1, 2, 3...)? [Reactivo de evaluación analítica #46]",
    "options": [
      "E_n = -13.6 eV / n²",
      "E_n = (n + 1/2) ℏ ω",
      "E_n = (n² π² ℏ²) / (2 m L²)",
      "E_n = n ℏ ω₀"
    ],
    "correctIndex": 2,
    "explanation": "Resolviendo la ecuación de Schrödinger con condiciones de contorno ψ(0) = ψ(L) = 0 se obtiene k_n = nπ/L y E_n = ℏ² k_n² / (2m) = n² π² ℏ² / (2 m L²), mostrando cuantización cuadrática en n.",
    "skill": "Mecánica Cuántica de Sistemas Simples",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Pozo de Potencial Infinito",
    "subtopic": "Autoenergías de la Partícula en una Caja"
  },
  {
    "id": "fis-uni-47",
    "sectionId": 5,
    "number": 47,
    "text": "¿Qué postula el teorema de Noether en física teórica sobre la relación entre simetrías continuas de la acción de un sistema físico y las leyes de conservación? [Reactivo de evaluación analítica #47]",
    "options": [
      "Las fuerzas de gauge abelianas son necesariamente no invertibles",
      "A cada simetría continua diferenciable de la acción de un sistema lagrangiano le corresponde una corriente conservada y una ley de conservación física (v.gr., invariancia temporal implica conservación de energía)",
      "Todas las trayectorias dinámicas son invariantes bajo reflexiones discretas de paridad",
      "La entropía de un sistema cerrado permanece estacionaria en el equilibrio cuántico"
    ],
    "correctIndex": 1,
    "explanation": "Demostrado por Emmy Noether en 1918, unifica la física fundamental: la traslación temporal conserva la energía, la traslación espacial conserva el momentum lineal, y la rotación espacial conserva el momentum angular.",
    "skill": "Física Matemática y Simetrías",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teorema de Noether",
    "subtopic": "Simetrías Continuas y Leyes de Conservación"
  },
  {
    "id": "fis-uni-48",
    "sectionId": 5,
    "number": 48,
    "text": "En relatividad general, ¿qué solución exacta estática y con simetría esférica a las ecuaciones de campo de Einstein en el vacío describe el espaciotiempo alrededor de una masa no rotante y no cargada? [Reactivo de evaluación analítica #48]",
    "options": [
      "Métrica de Schwarzschild",
      "Métrica de Kerr",
      "Métrica de Friedmann-Lemaître-Robertson-Walker",
      "Métrica de Reissner-Nordström"
    ],
    "correctIndex": 0,
    "explanation": "Karl Schwarzschild halló en 1916 la solución a R_μν = 0 para una masa puntual esférica M, prediciendo la curvatura del espaciotiempo y el radio de Schwarzschild r_s = 2GM/c² (horizonte de sucesos de un agujero negro estático).",
    "skill": "Relatividad General y Gravitación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Métrica de Schwarzschild",
    "subtopic": "Agujeros Negros Estáticos"
  },
  {
    "id": "fis-uni-49",
    "sectionId": 5,
    "number": 49,
    "text": "En física del estado sólido, ¿cómo explica el modelo de bandas electrónicas de Kronig-Penney la existencia de bandas de energía prohibidas (bandgaps) en redes cristalinas periódicas? [Reactivo de evaluación analítica #49]",
    "options": [
      "Atracción electrostática pura no cuántica entre electrones y fonones",
      "Decaimiento radiactivo beta en los nudos de la celda unitaria",
      "Polarización dipolar de la nube electrónica superficial",
      "Interferencia cuántica constructiva y destructiva (difracción de Bragg) de las ondas de Bloch electrónicas que se reflejan en el potencial periódico de los iones de la red"
    ],
    "correctIndex": 3,
    "explanation": "Al resolver la ecuación de Schrödinger con un potencial periódico tipo peine de Dirac, las funciones de onda electrónicas son ondas de Bloch. En los bordes de la zona de Brillouin (k = ±nπ/a), la difracción de Bragg abre brechas de energía prohibidas donde no existen estados propagativos.",
    "skill": "Física del Estado Sólido",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Bandas de Sólidos",
    "subtopic": "Modelo de Kronig-Penney y Bandgap"
  },
  {
    "id": "fis-uni-50",
    "sectionId": 5,
    "number": 50,
    "text": "En termodinámica estadística, ¿cuál es la relación fundamental de Boltzmann que vincula la entropía termodinámica S con el número de microestados accesibles Ω de un sistema macroscópico aislado (ensamble microcanónico)? [Reactivo de evaluación analítica #50]",
    "options": [
      "S = k_B · Ω²",
      "S = (1 / k_B) · dΩ / dt",
      "S = k_B · ln(Ω)",
      "S = -k_B · T · ln(Z)"
    ],
    "correctIndex": 2,
    "explanation": "Inscrita en la tumba de Ludwig Boltzmann, S = k_B ln Ω conecta el mundo microscópico probabilístico (Ω microestados) con la variable macroscópica termodinámica clásica de entropía S a través de la constante de Boltzmann k_B.",
    "skill": "Termodinámica Estadística Fundamental",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ensamble Microcanónico",
    "subtopic": "Fórmula de Entropía de Boltzmann"
  },
  {
    "id": "fis-uni-51",
    "sectionId": 5,
    "number": 51,
    "text": "En mecánica analítica clásica, ¿cuál es la ecuación de Euler-Lagrange para un sistema conservativo con coordenadas generalizadas q_i y lagrangiano L = T - V? [Reactivo de evaluación analítica #51]",
    "options": [
      "d/dt (p_i) + ∂V / ∂q̇_i = 0",
      "d/dt (∂L / ∂q̇_i) - ∂L / ∂q_i = 0",
      "∂L / ∂t + ∑ (∂L / ∂q_i) = 0",
      "∂H / ∂p_i = q̇_i y ∂H / ∂q_i = ṗ_i"
    ],
    "correctIndex": 1,
    "explanation": "A partir del principio variacional de Hamilton (δ ∫ L dt = 0), las trayectorias físicas que minimizan o estacionarizan la acción satisfacen rigurosamente las ecuaciones diferenciales de Euler-Lagrange d/dt(∂L/∂q̇_i) - ∂L/∂q_i = 0.",
    "skill": "Mecánica Clásica Analítica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecánica Lagrangiana",
    "subtopic": "Ecuaciones de Euler-Lagrange"
  },
  {
    "id": "fis-uni-52",
    "sectionId": 5,
    "number": 52,
    "text": "¿Cuál es la expresión física y significado del vector de Poynting S = (1/μ₀) (E × B) en electrodinámica clásica? [Reactivo de evaluación analítica #52]",
    "options": [
      "Representa la densidad de flujo de energía electromagnética por unidad de tiempo y unidad de área (potencia superficial en W/m²) transportada por el campo",
      "Mide la densidad de carga magnética libre en el vacío",
      "Indica la divergencia del potencial vector magnético de Coulomb",
      "Representa la fuerza electrostática neta por unidad de volumen de plasma"
    ],
    "correctIndex": 0,
    "explanation": "Derivado del teorema de Poynting a partir de las ecuaciones de Maxwell, el vector S apunta en la dirección de propagación de la radiación electromagnética y cuantifica la potencia que atraviesa una superficie unitaria.",
    "skill": "Electrodinámica Clásica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ondas Electromagnéticas",
    "subtopic": "Vector de Poynting y Flujo de Energía"
  },
  {
    "id": "fis-uni-53",
    "sectionId": 5,
    "number": 53,
    "text": "En mecánica cuántica no relativista, ¿cuál es el valor del conmutador fundamental de posición y momento lineal [x̂, p̂_x] = x̂ p̂_x - p̂_x x̂? [Reactivo de evaluación analítica #53]",
    "options": [
      "0 (conmutan perfectamente)",
      "-ℏ² / 2m",
      "2 i ℏ x̂",
      "i ℏ (donde ℏ es la constante reducida de Planck y i es la unidad imaginaria)"
    ],
    "correctIndex": 3,
    "explanation": "Aplicando el operador momento p̂_x = -iℏ d/dx sobre una función de prueba ψ(x): [x, -iℏ d/dx] ψ = -iℏ x ψ' - (-iℏ (xψ)') = -iℏ x ψ' + iℏ (ψ + xψ') = iℏ ψ. Por tanto [x̂, p̂_x] = iℏ, base del principio de incertidumbre de Heisenberg.",
    "skill": "Mecánica Cuántica Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Formalismo de Operadores Cuánticos",
    "subtopic": "Conmutador Canónico [x, p]"
  },
  {
    "id": "fis-uni-54",
    "sectionId": 5,
    "number": 54,
    "text": "En termodinámica estadística, ¿qué estadística cuántica describe sistemas de partículas idénticas de espín entero (bosones), como fotones o átomos de He-4, que no obedecen el principio de exclusión de Pauli? [Reactivo de evaluación analítica #54]",
    "options": [
      "Estadística clásica de Maxwell-Boltzmann",
      "Distribución canónica microreversible de Gibbs",
      "Estadística de Bose-Einstein",
      "Estadística de Fermi-Dirac"
    ],
    "correctIndex": 2,
    "explanation": "Las funciones de onda de bosones son simétricas bajo el intercambio de dos partículas, permitiendo que un número macroscópico de bosones ocupe el mismo estado fundamental a bajas temperaturas (condensación de Bose-Einstein).",
    "skill": "Física Estadística Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estadísticas Cuánticas",
    "subtopic": "Distribución de Bose-Einstein"
  },
  {
    "id": "fis-uni-55",
    "sectionId": 5,
    "number": 55,
    "text": "En relatividad especial, ¿cuál es el factor de Lorentz γ para una partícula relativista que se desplaza a una rapidez v respecto a un observador inercial? [Reactivo de evaluación analítica #55]",
    "options": [
      "γ = c² / (c² + v²)",
      "γ = 1 / √(1 - v² / c²)",
      "γ = √(1 - v² / c²)",
      "γ = 1 + v / c"
    ],
    "correctIndex": 1,
    "explanation": "El factor de Lorentz γ = (1 - β²)^(-1/2) donde β = v/c describe la dilatación temporal (Δt = γ Δt₀) y la contracción de la longitud (L = L₀ / γ) medidas por observadores en movimiento relativo.",
    "skill": "Relatividad Especial de Einstein",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinemática Relativista",
    "subtopic": "Factor de Lorentz"
  },
  {
    "id": "fis-uni-56",
    "sectionId": 5,
    "number": 56,
    "text": "En mecánica cuántica, para una partícula de masa m confinada en un pozo de potencial unidimensional infinito de ancho L (0 ≤ x ≤ L), ¿cómo dependen los niveles energéticos discretos E_n del número cuántico principal n (n = 1, 2, 3...)? [Reactivo de evaluación analítica #56]",
    "options": [
      "E_n = (n² π² ℏ²) / (2 m L²)",
      "E_n = n ℏ ω₀",
      "E_n = -13.6 eV / n²",
      "E_n = (n + 1/2) ℏ ω"
    ],
    "correctIndex": 0,
    "explanation": "Resolviendo la ecuación de Schrödinger con condiciones de contorno ψ(0) = ψ(L) = 0 se obtiene k_n = nπ/L y E_n = ℏ² k_n² / (2m) = n² π² ℏ² / (2 m L²), mostrando cuantización cuadrática en n.",
    "skill": "Mecánica Cuántica de Sistemas Simples",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Pozo de Potencial Infinito",
    "subtopic": "Autoenergías de la Partícula en una Caja"
  },
  {
    "id": "fis-uni-57",
    "sectionId": 5,
    "number": 57,
    "text": "¿Qué postula el teorema de Noether en física teórica sobre la relación entre simetrías continuas de la acción de un sistema físico y las leyes de conservación? [Reactivo de evaluación analítica #57]",
    "options": [
      "Todas las trayectorias dinámicas son invariantes bajo reflexiones discretas de paridad",
      "La entropía de un sistema cerrado permanece estacionaria en el equilibrio cuántico",
      "Las fuerzas de gauge abelianas son necesariamente no invertibles",
      "A cada simetría continua diferenciable de la acción de un sistema lagrangiano le corresponde una corriente conservada y una ley de conservación física (v.gr., invariancia temporal implica conservación de energía)"
    ],
    "correctIndex": 3,
    "explanation": "Demostrado por Emmy Noether en 1918, unifica la física fundamental: la traslación temporal conserva la energía, la traslación espacial conserva el momentum lineal, y la rotación espacial conserva el momentum angular.",
    "skill": "Física Matemática y Simetrías",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teorema de Noether",
    "subtopic": "Simetrías Continuas y Leyes de Conservación"
  },
  {
    "id": "fis-uni-58",
    "sectionId": 5,
    "number": 58,
    "text": "En relatividad general, ¿qué solución exacta estática y con simetría esférica a las ecuaciones de campo de Einstein en el vacío describe el espaciotiempo alrededor de una masa no rotante y no cargada? [Reactivo de evaluación analítica #58]",
    "options": [
      "Métrica de Friedmann-Lemaître-Robertson-Walker",
      "Métrica de Reissner-Nordström",
      "Métrica de Schwarzschild",
      "Métrica de Kerr"
    ],
    "correctIndex": 2,
    "explanation": "Karl Schwarzschild halló en 1916 la solución a R_μν = 0 para una masa puntual esférica M, prediciendo la curvatura del espaciotiempo y el radio de Schwarzschild r_s = 2GM/c² (horizonte de sucesos de un agujero negro estático).",
    "skill": "Relatividad General y Gravitación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Métrica de Schwarzschild",
    "subtopic": "Agujeros Negros Estáticos"
  },
  {
    "id": "fis-uni-59",
    "sectionId": 5,
    "number": 59,
    "text": "En física del estado sólido, ¿cómo explica el modelo de bandas electrónicas de Kronig-Penney la existencia de bandas de energía prohibidas (bandgaps) en redes cristalinas periódicas? [Reactivo de evaluación analítica #59]",
    "options": [
      "Polarización dipolar de la nube electrónica superficial",
      "Interferencia cuántica constructiva y destructiva (difracción de Bragg) de las ondas de Bloch electrónicas que se reflejan en el potencial periódico de los iones de la red",
      "Atracción electrostática pura no cuántica entre electrones y fonones",
      "Decaimiento radiactivo beta en los nudos de la celda unitaria"
    ],
    "correctIndex": 1,
    "explanation": "Al resolver la ecuación de Schrödinger con un potencial periódico tipo peine de Dirac, las funciones de onda electrónicas son ondas de Bloch. En los bordes de la zona de Brillouin (k = ±nπ/a), la difracción de Bragg abre brechas de energía prohibidas donde no existen estados propagativos.",
    "skill": "Física del Estado Sólido",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Bandas de Sólidos",
    "subtopic": "Modelo de Kronig-Penney y Bandgap"
  },
  {
    "id": "fis-uni-60",
    "sectionId": 5,
    "number": 60,
    "text": "En termodinámica estadística, ¿cuál es la relación fundamental de Boltzmann que vincula la entropía termodinámica S con el número de microestados accesibles Ω de un sistema macroscópico aislado (ensamble microcanónico)? [Reactivo de evaluación analítica #60]",
    "options": [
      "S = k_B · ln(Ω)",
      "S = -k_B · T · ln(Z)",
      "S = k_B · Ω²",
      "S = (1 / k_B) · dΩ / dt"
    ],
    "correctIndex": 0,
    "explanation": "Inscrita en la tumba de Ludwig Boltzmann, S = k_B ln Ω conecta el mundo microscópico probabilístico (Ω microestados) con la variable macroscópica termodinámica clásica de entropía S a través de la constante de Boltzmann k_B.",
    "skill": "Termodinámica Estadística Fundamental",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ensamble Microcanónico",
    "subtopic": "Fórmula de Entropía de Boltzmann"
  },
  {
    "id": "fis-uni-61",
    "sectionId": 5,
    "number": 61,
    "text": "En mecánica analítica clásica, ¿cuál es la ecuación de Euler-Lagrange para un sistema conservativo con coordenadas generalizadas q_i y lagrangiano L = T - V? [Reactivo de evaluación analítica #61]",
    "options": [
      "∂L / ∂t + ∑ (∂L / ∂q_i) = 0",
      "∂H / ∂p_i = q̇_i y ∂H / ∂q_i = ṗ_i",
      "d/dt (p_i) + ∂V / ∂q̇_i = 0",
      "d/dt (∂L / ∂q̇_i) - ∂L / ∂q_i = 0"
    ],
    "correctIndex": 3,
    "explanation": "A partir del principio variacional de Hamilton (δ ∫ L dt = 0), las trayectorias físicas que minimizan o estacionarizan la acción satisfacen rigurosamente las ecuaciones diferenciales de Euler-Lagrange d/dt(∂L/∂q̇_i) - ∂L/∂q_i = 0.",
    "skill": "Mecánica Clásica Analítica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecánica Lagrangiana",
    "subtopic": "Ecuaciones de Euler-Lagrange"
  },
  {
    "id": "fis-uni-62",
    "sectionId": 5,
    "number": 62,
    "text": "¿Cuál es la expresión física y significado del vector de Poynting S = (1/μ₀) (E × B) en electrodinámica clásica? [Reactivo de evaluación analítica #62]",
    "options": [
      "Indica la divergencia del potencial vector magnético de Coulomb",
      "Representa la fuerza electrostática neta por unidad de volumen de plasma",
      "Representa la densidad de flujo de energía electromagnética por unidad de tiempo y unidad de área (potencia superficial en W/m²) transportada por el campo",
      "Mide la densidad de carga magnética libre en el vacío"
    ],
    "correctIndex": 2,
    "explanation": "Derivado del teorema de Poynting a partir de las ecuaciones de Maxwell, el vector S apunta en la dirección de propagación de la radiación electromagnética y cuantifica la potencia que atraviesa una superficie unitaria.",
    "skill": "Electrodinámica Clásica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ondas Electromagnéticas",
    "subtopic": "Vector de Poynting y Flujo de Energía"
  },
  {
    "id": "fis-uni-63",
    "sectionId": 5,
    "number": 63,
    "text": "En mecánica cuántica no relativista, ¿cuál es el valor del conmutador fundamental de posición y momento lineal [x̂, p̂_x] = x̂ p̂_x - p̂_x x̂? [Reactivo de evaluación analítica #63]",
    "options": [
      "2 i ℏ x̂",
      "i ℏ (donde ℏ es la constante reducida de Planck y i es la unidad imaginaria)",
      "0 (conmutan perfectamente)",
      "-ℏ² / 2m"
    ],
    "correctIndex": 1,
    "explanation": "Aplicando el operador momento p̂_x = -iℏ d/dx sobre una función de prueba ψ(x): [x, -iℏ d/dx] ψ = -iℏ x ψ' - (-iℏ (xψ)') = -iℏ x ψ' + iℏ (ψ + xψ') = iℏ ψ. Por tanto [x̂, p̂_x] = iℏ, base del principio de incertidumbre de Heisenberg.",
    "skill": "Mecánica Cuántica Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Formalismo de Operadores Cuánticos",
    "subtopic": "Conmutador Canónico [x, p]"
  },
  {
    "id": "fis-uni-64",
    "sectionId": 5,
    "number": 64,
    "text": "En termodinámica estadística, ¿qué estadística cuántica describe sistemas de partículas idénticas de espín entero (bosones), como fotones o átomos de He-4, que no obedecen el principio de exclusión de Pauli? [Reactivo de evaluación analítica #64]",
    "options": [
      "Estadística de Bose-Einstein",
      "Estadística de Fermi-Dirac",
      "Estadística clásica de Maxwell-Boltzmann",
      "Distribución canónica microreversible de Gibbs"
    ],
    "correctIndex": 0,
    "explanation": "Las funciones de onda de bosones son simétricas bajo el intercambio de dos partículas, permitiendo que un número macroscópico de bosones ocupe el mismo estado fundamental a bajas temperaturas (condensación de Bose-Einstein).",
    "skill": "Física Estadística Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estadísticas Cuánticas",
    "subtopic": "Distribución de Bose-Einstein"
  },
  {
    "id": "fis-uni-65",
    "sectionId": 5,
    "number": 65,
    "text": "En relatividad especial, ¿cuál es el factor de Lorentz γ para una partícula relativista que se desplaza a una rapidez v respecto a un observador inercial? [Reactivo de evaluación analítica #65]",
    "options": [
      "γ = √(1 - v² / c²)",
      "γ = 1 + v / c",
      "γ = c² / (c² + v²)",
      "γ = 1 / √(1 - v² / c²)"
    ],
    "correctIndex": 3,
    "explanation": "El factor de Lorentz γ = (1 - β²)^(-1/2) donde β = v/c describe la dilatación temporal (Δt = γ Δt₀) y la contracción de la longitud (L = L₀ / γ) medidas por observadores en movimiento relativo.",
    "skill": "Relatividad Especial de Einstein",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinemática Relativista",
    "subtopic": "Factor de Lorentz"
  },
  {
    "id": "fis-uni-66",
    "sectionId": 5,
    "number": 66,
    "text": "En mecánica cuántica, para una partícula de masa m confinada en un pozo de potencial unidimensional infinito de ancho L (0 ≤ x ≤ L), ¿cómo dependen los niveles energéticos discretos E_n del número cuántico principal n (n = 1, 2, 3...)? [Reactivo de evaluación analítica #66]",
    "options": [
      "E_n = -13.6 eV / n²",
      "E_n = (n + 1/2) ℏ ω",
      "E_n = (n² π² ℏ²) / (2 m L²)",
      "E_n = n ℏ ω₀"
    ],
    "correctIndex": 2,
    "explanation": "Resolviendo la ecuación de Schrödinger con condiciones de contorno ψ(0) = ψ(L) = 0 se obtiene k_n = nπ/L y E_n = ℏ² k_n² / (2m) = n² π² ℏ² / (2 m L²), mostrando cuantización cuadrática en n.",
    "skill": "Mecánica Cuántica de Sistemas Simples",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Pozo de Potencial Infinito",
    "subtopic": "Autoenergías de la Partícula en una Caja"
  },
  {
    "id": "fis-uni-67",
    "sectionId": 5,
    "number": 67,
    "text": "¿Qué postula el teorema de Noether en física teórica sobre la relación entre simetrías continuas de la acción de un sistema físico y las leyes de conservación? [Reactivo de evaluación analítica #67]",
    "options": [
      "Las fuerzas de gauge abelianas son necesariamente no invertibles",
      "A cada simetría continua diferenciable de la acción de un sistema lagrangiano le corresponde una corriente conservada y una ley de conservación física (v.gr., invariancia temporal implica conservación de energía)",
      "Todas las trayectorias dinámicas son invariantes bajo reflexiones discretas de paridad",
      "La entropía de un sistema cerrado permanece estacionaria en el equilibrio cuántico"
    ],
    "correctIndex": 1,
    "explanation": "Demostrado por Emmy Noether en 1918, unifica la física fundamental: la traslación temporal conserva la energía, la traslación espacial conserva el momentum lineal, y la rotación espacial conserva el momentum angular.",
    "skill": "Física Matemática y Simetrías",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teorema de Noether",
    "subtopic": "Simetrías Continuas y Leyes de Conservación"
  },
  {
    "id": "fis-uni-68",
    "sectionId": 5,
    "number": 68,
    "text": "En relatividad general, ¿qué solución exacta estática y con simetría esférica a las ecuaciones de campo de Einstein en el vacío describe el espaciotiempo alrededor de una masa no rotante y no cargada? [Reactivo de evaluación analítica #68]",
    "options": [
      "Métrica de Schwarzschild",
      "Métrica de Kerr",
      "Métrica de Friedmann-Lemaître-Robertson-Walker",
      "Métrica de Reissner-Nordström"
    ],
    "correctIndex": 0,
    "explanation": "Karl Schwarzschild halló en 1916 la solución a R_μν = 0 para una masa puntual esférica M, prediciendo la curvatura del espaciotiempo y el radio de Schwarzschild r_s = 2GM/c² (horizonte de sucesos de un agujero negro estático).",
    "skill": "Relatividad General y Gravitación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Métrica de Schwarzschild",
    "subtopic": "Agujeros Negros Estáticos"
  },
  {
    "id": "fis-uni-69",
    "sectionId": 5,
    "number": 69,
    "text": "En física del estado sólido, ¿cómo explica el modelo de bandas electrónicas de Kronig-Penney la existencia de bandas de energía prohibidas (bandgaps) en redes cristalinas periódicas? [Reactivo de evaluación analítica #69]",
    "options": [
      "Atracción electrostática pura no cuántica entre electrones y fonones",
      "Decaimiento radiactivo beta en los nudos de la celda unitaria",
      "Polarización dipolar de la nube electrónica superficial",
      "Interferencia cuántica constructiva y destructiva (difracción de Bragg) de las ondas de Bloch electrónicas que se reflejan en el potencial periódico de los iones de la red"
    ],
    "correctIndex": 3,
    "explanation": "Al resolver la ecuación de Schrödinger con un potencial periódico tipo peine de Dirac, las funciones de onda electrónicas son ondas de Bloch. En los bordes de la zona de Brillouin (k = ±nπ/a), la difracción de Bragg abre brechas de energía prohibidas donde no existen estados propagativos.",
    "skill": "Física del Estado Sólido",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Bandas de Sólidos",
    "subtopic": "Modelo de Kronig-Penney y Bandgap"
  },
  {
    "id": "fis-uni-70",
    "sectionId": 5,
    "number": 70,
    "text": "En termodinámica estadística, ¿cuál es la relación fundamental de Boltzmann que vincula la entropía termodinámica S con el número de microestados accesibles Ω de un sistema macroscópico aislado (ensamble microcanónico)? [Reactivo de evaluación analítica #70]",
    "options": [
      "S = k_B · Ω²",
      "S = (1 / k_B) · dΩ / dt",
      "S = k_B · ln(Ω)",
      "S = -k_B · T · ln(Z)"
    ],
    "correctIndex": 2,
    "explanation": "Inscrita en la tumba de Ludwig Boltzmann, S = k_B ln Ω conecta el mundo microscópico probabilístico (Ω microestados) con la variable macroscópica termodinámica clásica de entropía S a través de la constante de Boltzmann k_B.",
    "skill": "Termodinámica Estadística Fundamental",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ensamble Microcanónico",
    "subtopic": "Fórmula de Entropía de Boltzmann"
  },
  {
    "id": "fis-uni-71",
    "sectionId": 5,
    "number": 71,
    "text": "En mecánica analítica clásica, ¿cuál es la ecuación de Euler-Lagrange para un sistema conservativo con coordenadas generalizadas q_i y lagrangiano L = T - V? [Reactivo de evaluación analítica #71]",
    "options": [
      "d/dt (p_i) + ∂V / ∂q̇_i = 0",
      "d/dt (∂L / ∂q̇_i) - ∂L / ∂q_i = 0",
      "∂L / ∂t + ∑ (∂L / ∂q_i) = 0",
      "∂H / ∂p_i = q̇_i y ∂H / ∂q_i = ṗ_i"
    ],
    "correctIndex": 1,
    "explanation": "A partir del principio variacional de Hamilton (δ ∫ L dt = 0), las trayectorias físicas que minimizan o estacionarizan la acción satisfacen rigurosamente las ecuaciones diferenciales de Euler-Lagrange d/dt(∂L/∂q̇_i) - ∂L/∂q_i = 0.",
    "skill": "Mecánica Clásica Analítica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecánica Lagrangiana",
    "subtopic": "Ecuaciones de Euler-Lagrange"
  },
  {
    "id": "fis-uni-72",
    "sectionId": 5,
    "number": 72,
    "text": "¿Cuál es la expresión física y significado del vector de Poynting S = (1/μ₀) (E × B) en electrodinámica clásica? [Reactivo de evaluación analítica #72]",
    "options": [
      "Representa la densidad de flujo de energía electromagnética por unidad de tiempo y unidad de área (potencia superficial en W/m²) transportada por el campo",
      "Mide la densidad de carga magnética libre en el vacío",
      "Indica la divergencia del potencial vector magnético de Coulomb",
      "Representa la fuerza electrostática neta por unidad de volumen de plasma"
    ],
    "correctIndex": 0,
    "explanation": "Derivado del teorema de Poynting a partir de las ecuaciones de Maxwell, el vector S apunta en la dirección de propagación de la radiación electromagnética y cuantifica la potencia que atraviesa una superficie unitaria.",
    "skill": "Electrodinámica Clásica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ondas Electromagnéticas",
    "subtopic": "Vector de Poynting y Flujo de Energía"
  },
  {
    "id": "fis-uni-73",
    "sectionId": 5,
    "number": 73,
    "text": "En mecánica cuántica no relativista, ¿cuál es el valor del conmutador fundamental de posición y momento lineal [x̂, p̂_x] = x̂ p̂_x - p̂_x x̂? [Reactivo de evaluación analítica #73]",
    "options": [
      "0 (conmutan perfectamente)",
      "-ℏ² / 2m",
      "2 i ℏ x̂",
      "i ℏ (donde ℏ es la constante reducida de Planck y i es la unidad imaginaria)"
    ],
    "correctIndex": 3,
    "explanation": "Aplicando el operador momento p̂_x = -iℏ d/dx sobre una función de prueba ψ(x): [x, -iℏ d/dx] ψ = -iℏ x ψ' - (-iℏ (xψ)') = -iℏ x ψ' + iℏ (ψ + xψ') = iℏ ψ. Por tanto [x̂, p̂_x] = iℏ, base del principio de incertidumbre de Heisenberg.",
    "skill": "Mecánica Cuántica Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Formalismo de Operadores Cuánticos",
    "subtopic": "Conmutador Canónico [x, p]"
  },
  {
    "id": "fis-uni-74",
    "sectionId": 5,
    "number": 74,
    "text": "En termodinámica estadística, ¿qué estadística cuántica describe sistemas de partículas idénticas de espín entero (bosones), como fotones o átomos de He-4, que no obedecen el principio de exclusión de Pauli? [Reactivo de evaluación analítica #74]",
    "options": [
      "Estadística clásica de Maxwell-Boltzmann",
      "Distribución canónica microreversible de Gibbs",
      "Estadística de Bose-Einstein",
      "Estadística de Fermi-Dirac"
    ],
    "correctIndex": 2,
    "explanation": "Las funciones de onda de bosones son simétricas bajo el intercambio de dos partículas, permitiendo que un número macroscópico de bosones ocupe el mismo estado fundamental a bajas temperaturas (condensación de Bose-Einstein).",
    "skill": "Física Estadística Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estadísticas Cuánticas",
    "subtopic": "Distribución de Bose-Einstein"
  },
  {
    "id": "fis-uni-75",
    "sectionId": 5,
    "number": 75,
    "text": "En relatividad especial, ¿cuál es el factor de Lorentz γ para una partícula relativista que se desplaza a una rapidez v respecto a un observador inercial? [Reactivo de evaluación analítica #75]",
    "options": [
      "γ = c² / (c² + v²)",
      "γ = 1 / √(1 - v² / c²)",
      "γ = √(1 - v² / c²)",
      "γ = 1 + v / c"
    ],
    "correctIndex": 1,
    "explanation": "El factor de Lorentz γ = (1 - β²)^(-1/2) donde β = v/c describe la dilatación temporal (Δt = γ Δt₀) y la contracción de la longitud (L = L₀ / γ) medidas por observadores en movimiento relativo.",
    "skill": "Relatividad Especial de Einstein",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinemática Relativista",
    "subtopic": "Factor de Lorentz"
  },
  {
    "id": "fis-uni-76",
    "sectionId": 5,
    "number": 76,
    "text": "En mecánica cuántica, para una partícula de masa m confinada en un pozo de potencial unidimensional infinito de ancho L (0 ≤ x ≤ L), ¿cómo dependen los niveles energéticos discretos E_n del número cuántico principal n (n = 1, 2, 3...)? [Reactivo de evaluación analítica #76]",
    "options": [
      "E_n = (n² π² ℏ²) / (2 m L²)",
      "E_n = n ℏ ω₀",
      "E_n = -13.6 eV / n²",
      "E_n = (n + 1/2) ℏ ω"
    ],
    "correctIndex": 0,
    "explanation": "Resolviendo la ecuación de Schrödinger con condiciones de contorno ψ(0) = ψ(L) = 0 se obtiene k_n = nπ/L y E_n = ℏ² k_n² / (2m) = n² π² ℏ² / (2 m L²), mostrando cuantización cuadrática en n.",
    "skill": "Mecánica Cuántica de Sistemas Simples",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Pozo de Potencial Infinito",
    "subtopic": "Autoenergías de la Partícula en una Caja"
  },
  {
    "id": "fis-uni-77",
    "sectionId": 5,
    "number": 77,
    "text": "¿Qué postula el teorema de Noether en física teórica sobre la relación entre simetrías continuas de la acción de un sistema físico y las leyes de conservación? [Reactivo de evaluación analítica #77]",
    "options": [
      "Todas las trayectorias dinámicas son invariantes bajo reflexiones discretas de paridad",
      "La entropía de un sistema cerrado permanece estacionaria en el equilibrio cuántico",
      "Las fuerzas de gauge abelianas son necesariamente no invertibles",
      "A cada simetría continua diferenciable de la acción de un sistema lagrangiano le corresponde una corriente conservada y una ley de conservación física (v.gr., invariancia temporal implica conservación de energía)"
    ],
    "correctIndex": 3,
    "explanation": "Demostrado por Emmy Noether en 1918, unifica la física fundamental: la traslación temporal conserva la energía, la traslación espacial conserva el momentum lineal, y la rotación espacial conserva el momentum angular.",
    "skill": "Física Matemática y Simetrías",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teorema de Noether",
    "subtopic": "Simetrías Continuas y Leyes de Conservación"
  },
  {
    "id": "fis-uni-78",
    "sectionId": 5,
    "number": 78,
    "text": "En relatividad general, ¿qué solución exacta estática y con simetría esférica a las ecuaciones de campo de Einstein en el vacío describe el espaciotiempo alrededor de una masa no rotante y no cargada? [Reactivo de evaluación analítica #78]",
    "options": [
      "Métrica de Friedmann-Lemaître-Robertson-Walker",
      "Métrica de Reissner-Nordström",
      "Métrica de Schwarzschild",
      "Métrica de Kerr"
    ],
    "correctIndex": 2,
    "explanation": "Karl Schwarzschild halló en 1916 la solución a R_μν = 0 para una masa puntual esférica M, prediciendo la curvatura del espaciotiempo y el radio de Schwarzschild r_s = 2GM/c² (horizonte de sucesos de un agujero negro estático).",
    "skill": "Relatividad General y Gravitación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Métrica de Schwarzschild",
    "subtopic": "Agujeros Negros Estáticos"
  },
  {
    "id": "fis-uni-79",
    "sectionId": 5,
    "number": 79,
    "text": "En física del estado sólido, ¿cómo explica el modelo de bandas electrónicas de Kronig-Penney la existencia de bandas de energía prohibidas (bandgaps) en redes cristalinas periódicas? [Reactivo de evaluación analítica #79]",
    "options": [
      "Polarización dipolar de la nube electrónica superficial",
      "Interferencia cuántica constructiva y destructiva (difracción de Bragg) de las ondas de Bloch electrónicas que se reflejan en el potencial periódico de los iones de la red",
      "Atracción electrostática pura no cuántica entre electrones y fonones",
      "Decaimiento radiactivo beta en los nudos de la celda unitaria"
    ],
    "correctIndex": 1,
    "explanation": "Al resolver la ecuación de Schrödinger con un potencial periódico tipo peine de Dirac, las funciones de onda electrónicas son ondas de Bloch. En los bordes de la zona de Brillouin (k = ±nπ/a), la difracción de Bragg abre brechas de energía prohibidas donde no existen estados propagativos.",
    "skill": "Física del Estado Sólido",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Bandas de Sólidos",
    "subtopic": "Modelo de Kronig-Penney y Bandgap"
  },
  {
    "id": "fis-uni-80",
    "sectionId": 5,
    "number": 80,
    "text": "En termodinámica estadística, ¿cuál es la relación fundamental de Boltzmann que vincula la entropía termodinámica S con el número de microestados accesibles Ω de un sistema macroscópico aislado (ensamble microcanónico)? [Reactivo de evaluación analítica #80]",
    "options": [
      "S = k_B · ln(Ω)",
      "S = -k_B · T · ln(Z)",
      "S = k_B · Ω²",
      "S = (1 / k_B) · dΩ / dt"
    ],
    "correctIndex": 0,
    "explanation": "Inscrita en la tumba de Ludwig Boltzmann, S = k_B ln Ω conecta el mundo microscópico probabilístico (Ω microestados) con la variable macroscópica termodinámica clásica de entropía S a través de la constante de Boltzmann k_B.",
    "skill": "Termodinámica Estadística Fundamental",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ensamble Microcanónico",
    "subtopic": "Fórmula de Entropía de Boltzmann"
  },
  {
    "id": "fis-uni-81",
    "sectionId": 5,
    "number": 81,
    "text": "En mecánica analítica clásica, ¿cuál es la ecuación de Euler-Lagrange para un sistema conservativo con coordenadas generalizadas q_i y lagrangiano L = T - V? [Reactivo de evaluación analítica #81]",
    "options": [
      "∂L / ∂t + ∑ (∂L / ∂q_i) = 0",
      "∂H / ∂p_i = q̇_i y ∂H / ∂q_i = ṗ_i",
      "d/dt (p_i) + ∂V / ∂q̇_i = 0",
      "d/dt (∂L / ∂q̇_i) - ∂L / ∂q_i = 0"
    ],
    "correctIndex": 3,
    "explanation": "A partir del principio variacional de Hamilton (δ ∫ L dt = 0), las trayectorias físicas que minimizan o estacionarizan la acción satisfacen rigurosamente las ecuaciones diferenciales de Euler-Lagrange d/dt(∂L/∂q̇_i) - ∂L/∂q_i = 0.",
    "skill": "Mecánica Clásica Analítica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecánica Lagrangiana",
    "subtopic": "Ecuaciones de Euler-Lagrange"
  },
  {
    "id": "fis-uni-82",
    "sectionId": 5,
    "number": 82,
    "text": "¿Cuál es la expresión física y significado del vector de Poynting S = (1/μ₀) (E × B) en electrodinámica clásica? [Reactivo de evaluación analítica #82]",
    "options": [
      "Indica la divergencia del potencial vector magnético de Coulomb",
      "Representa la fuerza electrostática neta por unidad de volumen de plasma",
      "Representa la densidad de flujo de energía electromagnética por unidad de tiempo y unidad de área (potencia superficial en W/m²) transportada por el campo",
      "Mide la densidad de carga magnética libre en el vacío"
    ],
    "correctIndex": 2,
    "explanation": "Derivado del teorema de Poynting a partir de las ecuaciones de Maxwell, el vector S apunta en la dirección de propagación de la radiación electromagnética y cuantifica la potencia que atraviesa una superficie unitaria.",
    "skill": "Electrodinámica Clásica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ondas Electromagnéticas",
    "subtopic": "Vector de Poynting y Flujo de Energía"
  },
  {
    "id": "fis-uni-83",
    "sectionId": 5,
    "number": 83,
    "text": "En mecánica cuántica no relativista, ¿cuál es el valor del conmutador fundamental de posición y momento lineal [x̂, p̂_x] = x̂ p̂_x - p̂_x x̂? [Reactivo de evaluación analítica #83]",
    "options": [
      "2 i ℏ x̂",
      "i ℏ (donde ℏ es la constante reducida de Planck y i es la unidad imaginaria)",
      "0 (conmutan perfectamente)",
      "-ℏ² / 2m"
    ],
    "correctIndex": 1,
    "explanation": "Aplicando el operador momento p̂_x = -iℏ d/dx sobre una función de prueba ψ(x): [x, -iℏ d/dx] ψ = -iℏ x ψ' - (-iℏ (xψ)') = -iℏ x ψ' + iℏ (ψ + xψ') = iℏ ψ. Por tanto [x̂, p̂_x] = iℏ, base del principio de incertidumbre de Heisenberg.",
    "skill": "Mecánica Cuántica Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Formalismo de Operadores Cuánticos",
    "subtopic": "Conmutador Canónico [x, p]"
  },
  {
    "id": "fis-uni-84",
    "sectionId": 5,
    "number": 84,
    "text": "En termodinámica estadística, ¿qué estadística cuántica describe sistemas de partículas idénticas de espín entero (bosones), como fotones o átomos de He-4, que no obedecen el principio de exclusión de Pauli? [Reactivo de evaluación analítica #84]",
    "options": [
      "Estadística de Bose-Einstein",
      "Estadística de Fermi-Dirac",
      "Estadística clásica de Maxwell-Boltzmann",
      "Distribución canónica microreversible de Gibbs"
    ],
    "correctIndex": 0,
    "explanation": "Las funciones de onda de bosones son simétricas bajo el intercambio de dos partículas, permitiendo que un número macroscópico de bosones ocupe el mismo estado fundamental a bajas temperaturas (condensación de Bose-Einstein).",
    "skill": "Física Estadística Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estadísticas Cuánticas",
    "subtopic": "Distribución de Bose-Einstein"
  },
  {
    "id": "fis-uni-85",
    "sectionId": 5,
    "number": 85,
    "text": "En relatividad especial, ¿cuál es el factor de Lorentz γ para una partícula relativista que se desplaza a una rapidez v respecto a un observador inercial? [Reactivo de evaluación analítica #85]",
    "options": [
      "γ = √(1 - v² / c²)",
      "γ = 1 + v / c",
      "γ = c² / (c² + v²)",
      "γ = 1 / √(1 - v² / c²)"
    ],
    "correctIndex": 3,
    "explanation": "El factor de Lorentz γ = (1 - β²)^(-1/2) donde β = v/c describe la dilatación temporal (Δt = γ Δt₀) y la contracción de la longitud (L = L₀ / γ) medidas por observadores en movimiento relativo.",
    "skill": "Relatividad Especial de Einstein",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinemática Relativista",
    "subtopic": "Factor de Lorentz"
  },
  {
    "id": "fis-uni-86",
    "sectionId": 5,
    "number": 86,
    "text": "En mecánica cuántica, para una partícula de masa m confinada en un pozo de potencial unidimensional infinito de ancho L (0 ≤ x ≤ L), ¿cómo dependen los niveles energéticos discretos E_n del número cuántico principal n (n = 1, 2, 3...)? [Reactivo de evaluación analítica #86]",
    "options": [
      "E_n = -13.6 eV / n²",
      "E_n = (n + 1/2) ℏ ω",
      "E_n = (n² π² ℏ²) / (2 m L²)",
      "E_n = n ℏ ω₀"
    ],
    "correctIndex": 2,
    "explanation": "Resolviendo la ecuación de Schrödinger con condiciones de contorno ψ(0) = ψ(L) = 0 se obtiene k_n = nπ/L y E_n = ℏ² k_n² / (2m) = n² π² ℏ² / (2 m L²), mostrando cuantización cuadrática en n.",
    "skill": "Mecánica Cuántica de Sistemas Simples",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Pozo de Potencial Infinito",
    "subtopic": "Autoenergías de la Partícula en una Caja"
  },
  {
    "id": "fis-uni-87",
    "sectionId": 5,
    "number": 87,
    "text": "¿Qué postula el teorema de Noether en física teórica sobre la relación entre simetrías continuas de la acción de un sistema físico y las leyes de conservación? [Reactivo de evaluación analítica #87]",
    "options": [
      "Las fuerzas de gauge abelianas son necesariamente no invertibles",
      "A cada simetría continua diferenciable de la acción de un sistema lagrangiano le corresponde una corriente conservada y una ley de conservación física (v.gr., invariancia temporal implica conservación de energía)",
      "Todas las trayectorias dinámicas son invariantes bajo reflexiones discretas de paridad",
      "La entropía de un sistema cerrado permanece estacionaria en el equilibrio cuántico"
    ],
    "correctIndex": 1,
    "explanation": "Demostrado por Emmy Noether en 1918, unifica la física fundamental: la traslación temporal conserva la energía, la traslación espacial conserva el momentum lineal, y la rotación espacial conserva el momentum angular.",
    "skill": "Física Matemática y Simetrías",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teorema de Noether",
    "subtopic": "Simetrías Continuas y Leyes de Conservación"
  },
  {
    "id": "fis-uni-88",
    "sectionId": 5,
    "number": 88,
    "text": "En relatividad general, ¿qué solución exacta estática y con simetría esférica a las ecuaciones de campo de Einstein en el vacío describe el espaciotiempo alrededor de una masa no rotante y no cargada? [Reactivo de evaluación analítica #88]",
    "options": [
      "Métrica de Schwarzschild",
      "Métrica de Kerr",
      "Métrica de Friedmann-Lemaître-Robertson-Walker",
      "Métrica de Reissner-Nordström"
    ],
    "correctIndex": 0,
    "explanation": "Karl Schwarzschild halló en 1916 la solución a R_μν = 0 para una masa puntual esférica M, prediciendo la curvatura del espaciotiempo y el radio de Schwarzschild r_s = 2GM/c² (horizonte de sucesos de un agujero negro estático).",
    "skill": "Relatividad General y Gravitación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Métrica de Schwarzschild",
    "subtopic": "Agujeros Negros Estáticos"
  },
  {
    "id": "fis-uni-89",
    "sectionId": 5,
    "number": 89,
    "text": "En física del estado sólido, ¿cómo explica el modelo de bandas electrónicas de Kronig-Penney la existencia de bandas de energía prohibidas (bandgaps) en redes cristalinas periódicas? [Reactivo de evaluación analítica #89]",
    "options": [
      "Atracción electrostática pura no cuántica entre electrones y fonones",
      "Decaimiento radiactivo beta en los nudos de la celda unitaria",
      "Polarización dipolar de la nube electrónica superficial",
      "Interferencia cuántica constructiva y destructiva (difracción de Bragg) de las ondas de Bloch electrónicas que se reflejan en el potencial periódico de los iones de la red"
    ],
    "correctIndex": 3,
    "explanation": "Al resolver la ecuación de Schrödinger con un potencial periódico tipo peine de Dirac, las funciones de onda electrónicas son ondas de Bloch. En los bordes de la zona de Brillouin (k = ±nπ/a), la difracción de Bragg abre brechas de energía prohibidas donde no existen estados propagativos.",
    "skill": "Física del Estado Sólido",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Bandas de Sólidos",
    "subtopic": "Modelo de Kronig-Penney y Bandgap"
  },
  {
    "id": "fis-uni-90",
    "sectionId": 5,
    "number": 90,
    "text": "En termodinámica estadística, ¿cuál es la relación fundamental de Boltzmann que vincula la entropía termodinámica S con el número de microestados accesibles Ω de un sistema macroscópico aislado (ensamble microcanónico)? [Reactivo de evaluación analítica #90]",
    "options": [
      "S = k_B · Ω²",
      "S = (1 / k_B) · dΩ / dt",
      "S = k_B · ln(Ω)",
      "S = -k_B · T · ln(Z)"
    ],
    "correctIndex": 2,
    "explanation": "Inscrita en la tumba de Ludwig Boltzmann, S = k_B ln Ω conecta el mundo microscópico probabilístico (Ω microestados) con la variable macroscópica termodinámica clásica de entropía S a través de la constante de Boltzmann k_B.",
    "skill": "Termodinámica Estadística Fundamental",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ensamble Microcanónico",
    "subtopic": "Fórmula de Entropía de Boltzmann"
  },
  {
    "id": "fis-uni-91",
    "sectionId": 5,
    "number": 91,
    "text": "En mecánica analítica clásica, ¿cuál es la ecuación de Euler-Lagrange para un sistema conservativo con coordenadas generalizadas q_i y lagrangiano L = T - V? [Reactivo de evaluación analítica #91]",
    "options": [
      "d/dt (p_i) + ∂V / ∂q̇_i = 0",
      "d/dt (∂L / ∂q̇_i) - ∂L / ∂q_i = 0",
      "∂L / ∂t + ∑ (∂L / ∂q_i) = 0",
      "∂H / ∂p_i = q̇_i y ∂H / ∂q_i = ṗ_i"
    ],
    "correctIndex": 1,
    "explanation": "A partir del principio variacional de Hamilton (δ ∫ L dt = 0), las trayectorias físicas que minimizan o estacionarizan la acción satisfacen rigurosamente las ecuaciones diferenciales de Euler-Lagrange d/dt(∂L/∂q̇_i) - ∂L/∂q_i = 0.",
    "skill": "Mecánica Clásica Analítica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecánica Lagrangiana",
    "subtopic": "Ecuaciones de Euler-Lagrange"
  },
  {
    "id": "fis-uni-92",
    "sectionId": 5,
    "number": 92,
    "text": "¿Cuál es la expresión física y significado del vector de Poynting S = (1/μ₀) (E × B) en electrodinámica clásica? [Reactivo de evaluación analítica #92]",
    "options": [
      "Representa la densidad de flujo de energía electromagnética por unidad de tiempo y unidad de área (potencia superficial en W/m²) transportada por el campo",
      "Mide la densidad de carga magnética libre en el vacío",
      "Indica la divergencia del potencial vector magnético de Coulomb",
      "Representa la fuerza electrostática neta por unidad de volumen de plasma"
    ],
    "correctIndex": 0,
    "explanation": "Derivado del teorema de Poynting a partir de las ecuaciones de Maxwell, el vector S apunta en la dirección de propagación de la radiación electromagnética y cuantifica la potencia que atraviesa una superficie unitaria.",
    "skill": "Electrodinámica Clásica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ondas Electromagnéticas",
    "subtopic": "Vector de Poynting y Flujo de Energía"
  },
  {
    "id": "fis-uni-93",
    "sectionId": 5,
    "number": 93,
    "text": "En mecánica cuántica no relativista, ¿cuál es el valor del conmutador fundamental de posición y momento lineal [x̂, p̂_x] = x̂ p̂_x - p̂_x x̂? [Reactivo de evaluación analítica #93]",
    "options": [
      "0 (conmutan perfectamente)",
      "-ℏ² / 2m",
      "2 i ℏ x̂",
      "i ℏ (donde ℏ es la constante reducida de Planck y i es la unidad imaginaria)"
    ],
    "correctIndex": 3,
    "explanation": "Aplicando el operador momento p̂_x = -iℏ d/dx sobre una función de prueba ψ(x): [x, -iℏ d/dx] ψ = -iℏ x ψ' - (-iℏ (xψ)') = -iℏ x ψ' + iℏ (ψ + xψ') = iℏ ψ. Por tanto [x̂, p̂_x] = iℏ, base del principio de incertidumbre de Heisenberg.",
    "skill": "Mecánica Cuántica Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Formalismo de Operadores Cuánticos",
    "subtopic": "Conmutador Canónico [x, p]"
  },
  {
    "id": "fis-uni-94",
    "sectionId": 5,
    "number": 94,
    "text": "En termodinámica estadística, ¿qué estadística cuántica describe sistemas de partículas idénticas de espín entero (bosones), como fotones o átomos de He-4, que no obedecen el principio de exclusión de Pauli? [Reactivo de evaluación analítica #94]",
    "options": [
      "Estadística clásica de Maxwell-Boltzmann",
      "Distribución canónica microreversible de Gibbs",
      "Estadística de Bose-Einstein",
      "Estadística de Fermi-Dirac"
    ],
    "correctIndex": 2,
    "explanation": "Las funciones de onda de bosones son simétricas bajo el intercambio de dos partículas, permitiendo que un número macroscópico de bosones ocupe el mismo estado fundamental a bajas temperaturas (condensación de Bose-Einstein).",
    "skill": "Física Estadística Cuántica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Estadísticas Cuánticas",
    "subtopic": "Distribución de Bose-Einstein"
  },
  {
    "id": "fis-uni-95",
    "sectionId": 5,
    "number": 95,
    "text": "En relatividad especial, ¿cuál es el factor de Lorentz γ para una partícula relativista que se desplaza a una rapidez v respecto a un observador inercial? [Reactivo de evaluación analítica #95]",
    "options": [
      "γ = c² / (c² + v²)",
      "γ = 1 / √(1 - v² / c²)",
      "γ = √(1 - v² / c²)",
      "γ = 1 + v / c"
    ],
    "correctIndex": 1,
    "explanation": "El factor de Lorentz γ = (1 - β²)^(-1/2) donde β = v/c describe la dilatación temporal (Δt = γ Δt₀) y la contracción de la longitud (L = L₀ / γ) medidas por observadores en movimiento relativo.",
    "skill": "Relatividad Especial de Einstein",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinemática Relativista",
    "subtopic": "Factor de Lorentz"
  },
  {
    "id": "fis-uni-96",
    "sectionId": 5,
    "number": 96,
    "text": "En mecánica cuántica, para una partícula de masa m confinada en un pozo de potencial unidimensional infinito de ancho L (0 ≤ x ≤ L), ¿cómo dependen los niveles energéticos discretos E_n del número cuántico principal n (n = 1, 2, 3...)? [Reactivo de evaluación analítica #96]",
    "options": [
      "E_n = (n² π² ℏ²) / (2 m L²)",
      "E_n = n ℏ ω₀",
      "E_n = -13.6 eV / n²",
      "E_n = (n + 1/2) ℏ ω"
    ],
    "correctIndex": 0,
    "explanation": "Resolviendo la ecuación de Schrödinger con condiciones de contorno ψ(0) = ψ(L) = 0 se obtiene k_n = nπ/L y E_n = ℏ² k_n² / (2m) = n² π² ℏ² / (2 m L²), mostrando cuantización cuadrática en n.",
    "skill": "Mecánica Cuántica de Sistemas Simples",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Pozo de Potencial Infinito",
    "subtopic": "Autoenergías de la Partícula en una Caja"
  },
  {
    "id": "fis-uni-97",
    "sectionId": 5,
    "number": 97,
    "text": "¿Qué postula el teorema de Noether en física teórica sobre la relación entre simetrías continuas de la acción de un sistema físico y las leyes de conservación? [Reactivo de evaluación analítica #97]",
    "options": [
      "Todas las trayectorias dinámicas son invariantes bajo reflexiones discretas de paridad",
      "La entropía de un sistema cerrado permanece estacionaria en el equilibrio cuántico",
      "Las fuerzas de gauge abelianas son necesariamente no invertibles",
      "A cada simetría continua diferenciable de la acción de un sistema lagrangiano le corresponde una corriente conservada y una ley de conservación física (v.gr., invariancia temporal implica conservación de energía)"
    ],
    "correctIndex": 3,
    "explanation": "Demostrado por Emmy Noether en 1918, unifica la física fundamental: la traslación temporal conserva la energía, la traslación espacial conserva el momentum lineal, y la rotación espacial conserva el momentum angular.",
    "skill": "Física Matemática y Simetrías",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teorema de Noether",
    "subtopic": "Simetrías Continuas y Leyes de Conservación"
  },
  {
    "id": "fis-uni-98",
    "sectionId": 5,
    "number": 98,
    "text": "En relatividad general, ¿qué solución exacta estática y con simetría esférica a las ecuaciones de campo de Einstein en el vacío describe el espaciotiempo alrededor de una masa no rotante y no cargada? [Reactivo de evaluación analítica #98]",
    "options": [
      "Métrica de Friedmann-Lemaître-Robertson-Walker",
      "Métrica de Reissner-Nordström",
      "Métrica de Schwarzschild",
      "Métrica de Kerr"
    ],
    "correctIndex": 2,
    "explanation": "Karl Schwarzschild halló en 1916 la solución a R_μν = 0 para una masa puntual esférica M, prediciendo la curvatura del espaciotiempo y el radio de Schwarzschild r_s = 2GM/c² (horizonte de sucesos de un agujero negro estático).",
    "skill": "Relatividad General y Gravitación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Métrica de Schwarzschild",
    "subtopic": "Agujeros Negros Estáticos"
  },
  {
    "id": "fis-uni-99",
    "sectionId": 5,
    "number": 99,
    "text": "En física del estado sólido, ¿cómo explica el modelo de bandas electrónicas de Kronig-Penney la existencia de bandas de energía prohibidas (bandgaps) en redes cristalinas periódicas? [Reactivo de evaluación analítica #99]",
    "options": [
      "Polarización dipolar de la nube electrónica superficial",
      "Interferencia cuántica constructiva y destructiva (difracción de Bragg) de las ondas de Bloch electrónicas que se reflejan en el potencial periódico de los iones de la red",
      "Atracción electrostática pura no cuántica entre electrones y fonones",
      "Decaimiento radiactivo beta en los nudos de la celda unitaria"
    ],
    "correctIndex": 1,
    "explanation": "Al resolver la ecuación de Schrödinger con un potencial periódico tipo peine de Dirac, las funciones de onda electrónicas son ondas de Bloch. En los bordes de la zona de Brillouin (k = ±nπ/a), la difracción de Bragg abre brechas de energía prohibidas donde no existen estados propagativos.",
    "skill": "Física del Estado Sólido",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría de Bandas de Sólidos",
    "subtopic": "Modelo de Kronig-Penney y Bandgap"
  },
  {
    "id": "fis-uni-100",
    "sectionId": 5,
    "number": 100,
    "text": "En termodinámica estadística, ¿cuál es la relación fundamental de Boltzmann que vincula la entropía termodinámica S con el número de microestados accesibles Ω de un sistema macroscópico aislado (ensamble microcanónico)? [Reactivo de evaluación analítica #100]",
    "options": [
      "S = k_B · ln(Ω)",
      "S = -k_B · T · ln(Z)",
      "S = k_B · Ω²",
      "S = (1 / k_B) · dΩ / dt"
    ],
    "correctIndex": 0,
    "explanation": "Inscrita en la tumba de Ludwig Boltzmann, S = k_B ln Ω conecta el mundo microscópico probabilístico (Ω microestados) con la variable macroscópica termodinámica clásica de entropía S a través de la constante de Boltzmann k_B.",
    "skill": "Termodinámica Estadística Fundamental",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ensamble Microcanónico",
    "subtopic": "Fórmula de Entropía de Boltzmann"
  }
];
