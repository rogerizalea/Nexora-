import { Question } from '../../../types';

export const QUIMICA_UNIVERSITARIO: Question[] = [
  {
    "id": "qui-uni-1",
    "sectionId": 6,
    "number": 81,
    "text": "En química cuántica molecular, ¿qué postula la aproximación adiabática de Born-Oppenheimer al resolver la ecuación de Schrödinger electrónica?",
    "options": [
      "Que los electrones tienen espín nulo.",
      "Que debido a la enorme diferencia de masa entre núcleos y electrones (m_núcleo ≫ m_electrón), los núcleos atómicos pueden considerarse estacionarios respecto al movimiento instantáneo de los electrones.",
      "Que las moléculas no vibran ni rotan.",
      "Que todos los enlaces covalentes son puramente electrostáticos."
    ],
    "correctIndex": 1,
    "explanation": "La aproximación de Born-Oppenheimer permite desacoplar la función de onda total molecular en un componente electrónico sobre una superficie de energía potencial (PES) nuclear fija.",
    "skill": "Química Cuántica Molecular Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecánica Cuántica Molecular",
    "subtopic": "Aproximación de Born-Oppenheimer"
  },
  {
    "id": "qui-uni-2",
    "sectionId": 6,
    "number": 82,
    "text": "En la teoría del funcional de la densidad (DFT) de Hohenberg-Kohn y Kohn-Sham, ¿qué teorema fundamental demuestra que la energía del estado fundamental de un sistema polielectrónico es un funcional unívoco de la densidad electrónica tridimensional ρ(r)?",
    "options": [
      "Primer Teorema de Hohenberg-Kohn (1964)",
      "Teorema de Brillouin",
      "Lema de Slater",
      "Regla de Woodward-Hoffmann"
    ],
    "correctIndex": 0,
    "explanation": "El primer teorema de Hohenberg-Kohn demuestra por reducción al absurdo que no pueden existir dos potenciales externos v(r) diferentes que generen la misma densidad electrónica fundamental ρ(r), reduciendo 3N coordenadas espaciales a solo 3.",
    "skill": "Química Computacional y Teoría DFT",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Fisicoquímica Teórica",
    "subtopic": "Teoremas de Hohenberg-Kohn"
  },
  {
    "id": "qui-uni-3",
    "sectionId": 6,
    "number": 83,
    "text": "En síntesis orgánica avanzada, ¿qué célebre reacción de acoplamiento cruzado catalizada por paladio(0) forma enlaces carbono-carbono sp²-sp² entre un haluro de arilo y un ácido arilborónico en presencia de una base (Premio Nobel 2010)?",
    "options": [
      "Acoplamiento de Suzuki-Miyaura",
      "Reacción de Diels-Alder",
      "Condensación de Claisen",
      "Síntesis de Gabriel"
    ],
    "correctIndex": 0,
    "explanation": "El acoplamiento de Suzuki-Miyaura involucra adición oxidativa del haluro de arilo al Pd(0), transmetalación del arilboronato promovida por base y eliminación reductora para generar diarilos biarílicos.",
    "skill": "Química Organometálica y Reacciones de Acoplamiento",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Síntesis Orgánica Superior",
    "subtopic": "Acoplamiento de Suzuki-Miyaura"
  },
  {
    "id": "qui-uni-4",
    "sectionId": 6,
    "number": 84,
    "text": "En la teoría de orbitales moleculares de frontera (FMO) y reglas de Woodward-Hoffmann, ¿qué tipo de cicloadición electrocíclica [4+2] térmica entre un dieno conjugado s-cis y un dienófilo ocurre de forma estereoespecífica suprafacial-suprafacial?",
    "options": [
      "Reacción de Diels-Alder",
      "Transposición de Cope",
      "Reacción de Wittig",
      "Cicloadición fotoquímica [2+2]"
    ],
    "correctIndex": 0,
    "explanation": "La cicloadición de Diels-Alder es una reacción pericíclica concertada térmicamente permitida por simetría orbital (4n+2 electrones pi con n=1) que procede a través de un estado de transición aromático de 6 miembros.",
    "skill": "Reacciones Pericíclicas y Simetría Orbital",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Química Orgánica Mecanicista",
    "subtopic": "Reglas de Woodward-Hoffmann"
  },
  {
    "id": "qui-uni-5",
    "sectionId": 6,
    "number": 85,
    "text": "En espectroscopía de resonancia magnética nuclear (RMN de ¹H y ¹³C), ¿a qué fenómeno físico se debe el desdoblamiento fino de señales en multipletes (regla n+1) para núcleos con espín I = 1/2?",
    "options": [
      "Al acoplamiento espín-espín escalar indirecto (constante de acoplamiento J) mediado por los electrones de los enlaces químicos adyacentes",
      "A la polarización circular magnética del solvente",
      "A la relajación cuadrupolar nuclear",
      "Al efecto Doppler térmico"
    ],
    "correctIndex": 0,
    "explanation": "El acoplamiento escalar J transmite información sobre el alineamiento cuántico paralelo o antiparalelo de los núcleos vecinos a través de los electrones de enlace según la relación de Karplus.",
    "skill": "Espectroscopía de RMN Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Determinación Estructural Orgánica",
    "subtopic": "Acoplamiento Espín-Espín en RMN"
  },
  {
    "id": "qui-uni-6",
    "sectionId": 6,
    "number": 86,
    "text": "En termodinámica estadística molecular, ¿cómo se relaciona la constante de equilibrio K_p de una reacción con las funciones de partición moleculares canónicas Q_i de las especies reaccionantes y productos?",
    "options": [
      "K_p depende de la razón de las funciones de partición por unidad de volumen corregida por la diferencia de energía de punto cero (ΔE₀) multiplicada por k_B T",
      "K_p es idéntica a la suma de masas moleculares",
      "K_p no depende de los estados rotacionales moleculares",
      "K_p es independiente de la temperatura T"
    ],
    "correctIndex": 0,
    "explanation": "A partir del ensamble canónico, ln K_p = -ΔG°/RT relaciona la constante termodinámica macroscópica con el producto de las funciones de partición traslacionales, rotacionales, vibracionales y electrónicas.",
    "skill": "Termodinámica Estadística Química",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Fisicoquímica Cuántica",
    "subtopic": "Funciones de Partición y Equilibrio"
  },
  {
    "id": "qui-uni-7",
    "sectionId": 6,
    "number": 87,
    "text": "En la teoría de transferencia electrónica de Rudolph A. Marcus (Premio Nobel 1992), ¿qué fenómeno contraintuitivo predice que a fuerzas impulsoras termodinámicas muy exotérmicas (-ΔG° > λ), la velocidad de transferencia electrónica disminuye en vez de aumentar?",
    "options": [
      "Región normal de Marcus",
      "Región invertida de Marcus (Marcus inverted region)",
      "Catástrofe ultravioleta",
      "Túnel cuántico bariónico"
    ],
    "correctIndex": 1,
    "explanation": "En la región invertida de Marcus, la curva parábola de energía libre de los productos cruza a la de los reactivos a la izquierda del mínimo, haciendo que la energía de activación aumente a mayor exergonicidad.",
    "skill": "Cinética de Transferencia Electrónica de Marcus",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Fisicoquímica de Procesos Redox",
    "subtopic": "Región Invertida de Marcus"
  },
  {
    "id": "qui-uni-8",
    "sectionId": 6,
    "number": 88,
    "text": "En química inorgánica y teoría del campo cristalino (CFT) para complejos octaédricos d⁶ de bajo espín (como [Fe(CN)₆]⁴⁻), ¿cuál es la energía de estabilización del campo cristalino (CFSE)?",
    "options": [
      "0 Δ_o",
      "-2.4 Δ_o + 2P",
      "-0.4 Δ_o",
      "+1.2 Δ_o"
    ],
    "correctIndex": 1,
    "explanation": "En campo fuerte de bajo espín, los 6 electrones llenan completamente los orbitales t_{2g} inferiores (t_{2g}⁶ e_g⁰). CFSE = 6 × (-0.4 Δ_o) = -2.4 Δ_o más la energía de apareamiento electrónico.",
    "skill": "Teoría del Campo Cristalino y Complejos de Coordinación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Química Inorgánica Avanzada",
    "subtopic": "CFSE en Complejos Octaédricos"
  },
  {
    "id": "qui-uni-9",
    "sectionId": 6,
    "number": 89,
    "text": "En catálisis asimétrica enantioselectiva, ¿qué ligandos quirales de fósforo bidentados con quiralidad axial atropoisomérica (como BINAP) sintetizados por Ryōji Noyori permiten hidrogenaciones catalíticas con excesos enantioméricos superiores al 99% ee?",
    "options": [
      "Ligandos difosfina quirales con eje de simetría C₂ (BINAP)",
      "Ligandos salinos de cianuro",
      "Ligandos oxalato planos",
      "Trifenilfosfina aquiral simple"
    ],
    "correctIndex": 0,
    "explanation": "Noyori demostró que el esqueleto de 1,1'-binaftilo rígido impone un entorno estérico quiral rígido en los centros metálicos de Ru(II) o Rh(I) que discrimina con precisión cuántica las caras enantiotópicas re y si del sustrato.",
    "skill": "Catálisis Asimétrica y Quiralidad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Química Orgánica Avanzada",
    "subtopic": "Ligandos BINAP e Hidrogenación Asimétrica"
  },
  {
    "id": "qui-uni-10",
    "sectionId": 6,
    "number": 90,
    "text": "En electroquímica fundamental y cinética de electrodos, ¿qué célebre ecuación no lineal relaciona la densidad de corriente eléctrica i con el sobrepotencial de electrodo η considerando las velocidades de transferencia de carga anódica y catódica?",
    "options": [
      "Ecuación de Butler-Volmer",
      "Ecuación de Ilkovic polarográfica",
      "Ecuación de Debye-Hückel",
      "Ecuación de Cottrell cronoamperométrica"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación de Butler-Volmer: i = i₀ [exp(α_a F η / RT) - exp(-α_c F η / RT)] gobierna la cinética de transferencia interfacial de carga, aproximándose a la ley de Tafel a sobrepotenciales elevados.",
    "skill": "Cinética Electroquímica de Transferencia de Carga",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Electroquímica Teórica",
    "subtopic": "Ecuación de Butler-Volmer"
  },
  {
    "id": "qui-uni-11",
    "sectionId": 6,
    "number": 91,
    "text": "En la teoría ácido-base de Pearson (HSAB: Hard and Soft Acids and Bases), ¿cómo interactúan preferencialmente los ácidos duros y las bases duras frente a los ácidos blandos y bases blandas?",
    "options": [
      "Los ácidos duros (poco polarizables, alta densidad de carga) se coordinan preferentemente con bases duras (enlace preferentemente electrostático), y los ácidos blandos (muy polarizables) se coordinan preferentemente con bases blandas (enlace preferentemente covalente)",
      "Los ácidos duros siempre rechazan a las bases duras",
      "No existe correlación con la polarizabilidad electrónica",
      "Solo se aplica a solventes no acuosos"
    ],
    "correctIndex": 0,
    "explanation": "El principio HSAB de Ralph Pearson racionaliza la estabilidad de complejos inorgánicos, selectividad de sustituciones nucleofílicas y solubilidades minerales a través de la densidad de carga y polarizabilidad de los orbitales de frontera.",
    "skill": "Teoría de Ácidos y Bases Duros y Blandos (HSAB)",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Química Inorgánica Teórica",
    "subtopic": "Principio HSAB de Pearson"
  },
  {
    "id": "qui-uni-12",
    "sectionId": 6,
    "number": 92,
    "text": "En la teoría del estado de transición (TST) de Eyring-Polanyi para reacciones químicas en fase gas, ¿a partir de qué factores se expresa formalmente la constante cinética k(T)?",
    "options": [
      "k(T) = (k_B T / h) · exp(-ΔG^‡ / RT) = (k_B T / h) · exp(ΔS^‡ / R) · exp(-ΔH^‡ / RT)",
      "k(T) = R · T exclusivamente",
      "k(T) = h · ν / k_B",
      "k(T) = ln(ΔH^‡)"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación de Eyring relaciona la velocidad de cruce por el collado de la superficie de energía potencial con la frecuencia fundamental (k_B T / h) y la energía libre de activación del complejo de transición activado.",
    "skill": "Teoría del Estado de Transición y Cinética Química Superior",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinética Química Teórica",
    "subtopic": "Ecuación de Eyring-Polanyi"
  },
  {
    "id": "qui-uni-13",
    "sectionId": 6,
    "number": 93,
    "text": "En química supramolecular, ¿qué tipo de macrociclos sintéticos diseñados por Charles Pedersen (Premio Nobel 1987) encapsulan selectivamente cationes alcalinos (como K⁺) en una cavidad central mediante interacciones dipolares coordinadas con átomos de oxígeno?",
    "options": [
      "Éteres corona (Crown ethers)",
      "Polietilenos lineales",
      "Zeolitas alumínicas naturales",
      "Fullerenos C₆₀"
    ],
    "correctIndex": 0,
    "explanation": "Los éteres corona (como el 18-corona-6 con afinidad estricta por el catión potasio K⁺ de 1.38 Å de radio) dieron nacimiento a la química de reconocimiento molecular y transporte de fase.",
    "skill": "Química Supramolecular y Reconocimiento Molecular",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Química Supramolecular",
    "subtopic": "Éteres Corona y Criptandos"
  },
  {
    "id": "qui-uni-14",
    "sectionId": 6,
    "number": 94,
    "text": "En espectrometría de masas de alta resolución acoplada a fuentes de ionización suave (ESI / MALDI), ¿qué parámetro representa la relación adimensional m/z?",
    "options": [
      "La relación entre la masa molecular del ion en unidades de masa atómica unificadas (Da) y su número de cargas elementales z",
      "La velocidad de fragmentación unimolecular",
      "El tiempo de vuelo absoluto sin carga",
      "La constante de ionización de enlace"
    ],
    "correctIndex": 0,
    "explanation": "Los analizadores de masas (TOF, Orbitrap, FT-ICR) separan iones en función estricta de su relación masa/carga (m/z) midiendo campos electromagnéticos deflectores o frecuencias de ciclotrón.",
    "skill": "Espectrometría de Masas Avanzada (MS)",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Análisis Estructural Químico",
    "subtopic": "Relación Masa/Carga m/z"
  },
  {
    "id": "qui-uni-15",
    "sectionId": 6,
    "number": 95,
    "text": "En la teoría cuántica de orbitales moleculares de Hückel para sistemas pi planos conjugados, ¿cuál es la energía de los orbitales moleculares para el catión alilo lineal (tres carbonos sp² y 2 electrones pi)?",
    "options": [
      "E₁ = α + √2 β; E₂ = α; E₃ = α - √2 β",
      "E = α para los tres orbitales degenerados",
      "E = 2β en todos los niveles",
      "E = 0 estrictamente"
    ],
    "correctIndex": 0,
    "explanation": "Al diagonalizar la matriz secular de Hückel para una cadena alílica de 3 centros con elementos de salto β: las raíces seculares son x = -√2, 0, +√2, rindiendo un orbital enlazante (α + √2β), uno no enlazante (α) y uno antienlazante (α - √2β).",
    "skill": "Química Cuántica de Hückel",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Química Física Cuántica",
    "subtopic": "Método de Hückel y Sistema Alilo"
  },
  {
    "id": "qui-uni-16",
    "sectionId": 6,
    "number": 96,
    "text": "En química organometálica de complejos de metales de transición d, ¿qué regla empírica cuántica deducida por Irving Langmuir predice la estabilidad estequiométrica de complejos diamagnéticos de capa cerrada sumando electrones d del metal y electrones donados por los ligandos?",
    "options": [
      "Regla de los 18 electrones",
      "Regla de las fases de Gibbs",
      "Regla del octeto simple de Lewis",
      "Regla de Wade-Mingos para clústeres"
    ],
    "correctIndex": 0,
    "explanation": "La regla de los 18 electrones se basa en el llenado completo de los orbitales de valencia del metal (un orbital s, tres p y cinco d: 1+3+5 = 9 orbitales × 2 = 18 electrones), análoga a la regla del octeto de los elementos ligeros.",
    "skill": "Química de Coordinación Organometálica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Química Organometálica",
    "subtopic": "Regla de los 18 Electrones"
  },
  {
    "id": "qui-uni-17",
    "sectionId": 6,
    "number": 97,
    "text": "En la fotoquímica orgánica, ¿qué diagrama de estados energéticos ilustra las transiciones radiantes (fluorescencia, fosforescencia) y no radiantes (conversión interna, cruce intersistemas ISC) entre estados singlete (S) y triplete (T)?",
    "options": [
      "Diagrama de Jablonski",
      "Diagrama de Frost",
      "Diagrama de Ellingham",
      "Diagrama de Pourbaix"
    ],
    "correctIndex": 0,
    "explanation": "El diagrama de Aleksander Jabłoński describe cinéticamente la desactivación de estados electrónicos fotoexcitados, incluyendo el cruce intersistemas S₁ → T₁ asistido por acoplamiento espín-órbita.",
    "skill": "Fotoquímica Física y Fotofísica Molecular",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Fisicoquímica Fotoquímica",
    "subtopic": "Diagrama de Jablonski"
  },
  {
    "id": "qui-uni-18",
    "sectionId": 6,
    "number": 98,
    "text": "En síntesis de péptidos en fase sólida (SPPS) desarrollada por Robert Bruce Merrifield (Nobel 1984), ¿cuáles son los dos esquemas ortogonales de grupos protectores de la función N-alfa amino más empleados?",
    "options": [
      "Estrategia Fmoc / tBu y estrategia Boc / Bzl",
      "Estrategia metilo / etilo pura",
      "Protección por acetilación irreversible",
      "Estrategia con sulfatos inorgánicos"
    ],
    "correctIndex": 0,
    "explanation": "Merrifield revolucionó la síntesis peptídica anclando la cadena al polímero de poliestireno; la estrategia Fmoc (lábil a base suave piperidina) y Boc (lábil a ácido TFA) permiten desprotecciones ortogonales cuantitativas.",
    "skill": "Síntesis Peptídica y Biopolímeros",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Bioquímica Sintética",
    "subtopic": "Síntesis en Fase Sólida de Merrifield"
  },
  {
    "id": "qui-uni-19",
    "sectionId": 6,
    "number": 99,
    "text": "En cristalografía de rayos X de macromoléculas biológicas (proteínas y ribosomas), ¿a qué problema fundamental se debe que los detectores registren únicamente las intensidades de difracción |F(hkl)|² pero pierdan la información de fase de las ondas dispersadas?",
    "options": [
      "El problema de la fase cristalográfica (Phase Problem)",
      "La dispersión inelástica de Compton pura",
      "La aberración cromática del detector",
      "La refracción de Bragg"
    ],
    "correctIndex": 0,
    "explanation": "Para reconstruir la densidad electrónica ρ(r) mediante transformada de Fourier inversa se requieren amplitudes y fases complejas; el problema de la fase se resuelve experimentalmente mediante MAD/SAD con selenometionina o reemplazo molecular.",
    "skill": "Cristalografía de Rayos X Macromolecular",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Biofísica Estructural",
    "subtopic": "El Problema de la Fase Cristalográfica"
  },
  {
    "id": "qui-uni-20",
    "sectionId": 6,
    "number": 100,
    "text": "En fisicoquímica de soluciones electrolíticas concentradas, ¿qué teoría desarrollada por Peter Debye y Erich Hückel en 1923 calcula los coeficientes de actividad iónica media γ_± modelando la atmósfera iónica apantalladora a diluciones moderadas?",
    "options": [
      "Ley Límite de Debye-Hückel (log γ_± = -A |z₊ z₋| √I)",
      "Ecuación de estado de Van der Waals",
      "Modelo de Onsager de polarización",
      "Ecuación de Flory-Huggins"
    ],
    "correctIndex": 0,
    "explanation": "Debye y Hückel resolvieron la ecuación de Poisson-Boltzmann linealizada para el potencial electrostático alrededor de un ion central, demostrando que las desviaciones del comportamiento ideal dependen de la fuerza iónica I = 1/2 ∑ c_i z_i².",
    "skill": "Fisicoquímica de Electrolitos en Solución",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Termodinámica de Electrolitos",
    "subtopic": "Ley Límite de Debye-Hückel"
  },
  {
    "id": "qui-uni-21",
    "sectionId": 6,
    "number": 21,
    "text": "En termodinámica química de equilibrios de fase para sistemas multicomponentes, ¿cómo se define el potencial químico μ_i de la especie i en una mezcla?",
    "options": [
      "La entalpía total del sistema dividida entre el volumen molar",
      "La constante de equilibrio K dividida por la constante de los gases R",
      "La variación de la entropía S a volumen y energía interna nulas",
      "La derivada parcial de la energía libre de Gibbs G respecto al número de moles n_i a temperatura, presión y moles de las demás especies constantes: μ_i = (∂G / ∂n_i)_{T, P, n_{j ≠ i}}"
    ],
    "correctIndex": 3,
    "explanation": "El potencial químico representa la energía libre de Gibbs molar parcial de una sustancia, constituyendo la fuerza impulsora termodinámica para la transferencia de materia y reacciones químicas (el equilibrio exige que μ_i sea igual en todas las fases).",
    "skill": "Termodinámica Química Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Potencial Químico y Equilibrio de Fases",
    "subtopic": "Definición del Potencial Químico de Gibbs"
  },
  {
    "id": "qui-uni-22",
    "sectionId": 6,
    "number": 22,
    "text": "En química cuántica y teoría de orbitales moleculares (LCAO-MO) para la molécula diatómica de dioxígeno (O₂), ¿cómo explica la configuración electrónica fundamental el paramagnetismo experimental del oxígeno?",
    "options": [
      "El enlace se debe exclusivamente a atracciones de dispersión de London",
      "La molécula de O₂ tiene simetría tetraédrica con 4 electrones libres",
      "Posee dos electrones desapareados con espines paralelos que ocupan orbitales moleculares antienlazantes degenerados π*_{2py} y π*_{2px} según la regla de Hund",
      "Todos los electrones se encuentran apareados en orbitales enlazantes sigma"
    ],
    "correctIndex": 2,
    "explanation": "La teoría de Lewis predice incorrectamente que todos los electrones del O₂ están apareados (diamagnético). El diagrama MO sitúa los últimos dos electrones en los orbitales degenerados π*2p, teniendo un estado triplete fundamental con espín S = 1 paramagnético.",
    "skill": "Química Cuántica Molecular y Teoría MO",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Orbitales Moleculares",
    "subtopic": "Paramagnetismo del Oxígeno Diatómico"
  },
  {
    "id": "qui-uni-23",
    "sectionId": 6,
    "number": 23,
    "text": "En espectroscopía de resonancia magnética nuclear de protón (¹H-RMN), ¿qué fenómeno provoca el desdoblamiento de señales en multipletes (regla n + 1) en núcleos no equivalentes acoplados a través de enlaces covalentes?",
    "options": [
      "Absorción infrarroja por armónicos de estiramiento C-H",
      "Acoplamiento espín-espín escalar indirecto (constante J) transmitido a través de los electrones de valencia de los enlaces intermedios",
      "Atracción dipolar gravitatoria en el tubo de RMN",
      "Efecto Doppler relativista del disolvente deuterado"
    ],
    "correctIndex": 1,
    "explanation": "El momento magnético nuclear de un protón polariza los electrones de enlace adyacentes, modulando el campo magnético local que perciben los protones vecinos en n estados de orientación de espín posibles, originando multipletes con intensidades del triángulo de Pascal.",
    "skill": "Determinación Estructural por ¹H-RMN",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía RMN",
    "subtopic": "Acoplamiento Espín-Espín y Multiplicidad"
  },
  {
    "id": "qui-uni-24",
    "sectionId": 6,
    "number": 24,
    "text": "En mecanismos de síntesis orgánica, ¿cuáles son las características estereoquímicas y cinéticas de una reacción de sustitución nucleofílica bimolecular (S_N2)?",
    "options": [
      "Cinética de segundo orden (v = k [R-X] [Nu⁻]), mecanismo concertado en una sola etapa con ataque por la cara dorsal (trasera) e inversión de configuración de Walden en el centro esterogénico",
      "Cinética de primer orden con formación previa de carbocatión plano y racemización completa",
      "Reacción en dos etapas mediada por radicales libres en presencia de luz ultravioleta",
      "Retención estricta del 100% de la configuración estereoespecífica frontal"
    ],
    "correctIndex": 0,
    "explanation": "En la SN2, el nucleófilo ataca el lóbulo posterior del orbital sigma* C-X al mismo tiempo que sale el grupo saliente en un estado de transición bipiramidal trigonal pentacoordinado, invirtiendo la quiralidad como un paraguas con viento.",
    "skill": "Mecanismos de Reacción Orgánica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Sustituciones Nucleofílicas",
    "subtopic": "Mecanismo SN2 e Inversión de Walden"
  },
  {
    "id": "qui-uni-25",
    "sectionId": 6,
    "number": 25,
    "text": "En la teoría del campo cristalino (CFT) para complejos de metales de transición octaédricos (d⁶, como el [Fe(CN)₆]⁴⁻), ¿por qué los ligandos de campo fuerte (como el cianuro CN⁻) favorecen complejos de bajo espín (low-spin)?",
    "options": [
      "Porque neutralizan la carga formal del metal central volviéndolo neutro",
      "Porque distorsionan el complejo hacia geometría lineal pura",
      "Porque eliminan por completo el desdoblamiento energético de los orbitales d",
      "Porque generan un gran desdoblamiento del campo cristalino (Δ_o > P, energía de apareamiento), forzando a los 6 electrones d a aparearse en los orbitales t_{2g} inferiores"
    ],
    "correctIndex": 3,
    "explanation": "Ligandos de campo fuerte en la serie espectroquímica provocan un Δ_o superior a la energía requerida para aparear electrones (P); así, en configuración d⁶ los electrones llenan t2g⁶eg⁰, resultando diamagnético y de bajo espín.",
    "skill": "Química de Coordinación e Inorgánica Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría del Campo Cristalino",
    "subtopic": "Complejos Octaédricos de Bajo Espín"
  },
  {
    "id": "qui-uni-26",
    "sectionId": 6,
    "number": 26,
    "text": "En termodinámica química de disoluciones de no electrolitos, ¿qué modelo termodinámico describe la energía libre de exceso de mezclas poliméricas considerando la enorme asimetría molecular de tamaño entre monómeros y solvente?",
    "options": [
      "Ley de Raoult ideal pura",
      "Modelo de Peng-Robinson para hidrocarburos ligeros",
      "Teoría de soluciones de Flory-Huggins",
      "Ecuación límite de Debye-Hückel"
    ],
    "correctIndex": 2,
    "explanation": "Flory y Huggins desarrollaron un modelo reticular que cuantifica la drástica disminución de la entropía de mezcla en polímeros respecto a soluciones de moléculas pequeñas, introduciendo el parámetro de interacción χ (chi de Flory-Huggins).",
    "skill": "Fisicoquímica de Polímeros y Macromoléculas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Termodinámica de Polímeros",
    "subtopic": "Teoría de Flory-Huggins"
  },
  {
    "id": "qui-uni-27",
    "sectionId": 6,
    "number": 27,
    "text": "En espectroscopía infrarroja con transformada de Fourier (FTIR), ¿en qué región espectral del número de onda (cm⁻¹) aparece típicamente la banda de absorción intensa y aguda correspondiente a la vibración de estiramiento del enlace carbonilo (C=O)?",
    "options": [
      "Entre 600 y 800 cm⁻¹",
      "Entre 1680 y 1750 cm⁻¹",
      "Entre 3200 y 3600 cm⁻¹",
      "Entre 2100 y 2260 cm⁻¹"
    ],
    "correctIndex": 1,
    "explanation": "El estiramiento del dipolo carbonilo C=O es una de las bandas diagnósticas más características en FTIR, apareciendo entre 1680 cm⁻¹ (en amidas y cetonas conjugadas) y 1740-1750 cm⁻¹ (en ésteres y cloruros de acilo).",
    "skill": "Espectroscopía Infrarroja Vibracional",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía Infrarroja (FTIR)",
    "subtopic": "Banda de Absorción del Enlace Carbonilo C=O"
  },
  {
    "id": "qui-uni-28",
    "sectionId": 6,
    "number": 28,
    "text": "En electroquímica fundamental y cinética de transferencia electrónica de electrodos, ¿qué ecuación describe la corriente neta en función del sobrepotencial η teniendo en cuenta las etapas de activación anódica y catódica?",
    "options": [
      "Ecuación de Butler-Volmer",
      "Ecuación de Nernst para condiciones de equilibrio nulo",
      "Ley de Fick para difusión estacionaria",
      "Ecuación de Henderson-Hasselbalch"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación de Butler-Volmer j = j₀ [exp((1-α)Fη/RT) - exp(-αFη/RT)] relaciona la densidad de corriente con el sobrepotencial a través de la corriente de intercambio j₀ y el coeficiente de transferencia de carga simétrico α.",
    "skill": "Electroquímica Fundamental y Cinética de Electrodos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinética Electroquímica",
    "subtopic": "Ecuación de Butler-Volmer y Sobrepotencial"
  },
  {
    "id": "qui-uni-29",
    "sectionId": 6,
    "number": 29,
    "text": "¿Cuál es la regla de selección que gobierna la cicloadición pericíclica [4+2] de Diels-Alder bajo condiciones térmicas basándose en la conservación de la simetría orbital de Woodward-Hoffmann?",
    "options": [
      "Es térmicamente prohibida y requiere fotoexcitación UV",
      "Opera exclusivamente con topología antarafacial-antarafacial",
      "No depende de la simetría de los orbitales frontera",
      "Es térmicamente permitida con topología suprafacial-suprafacial (4s + 2s) entre los orbitales HOMO del dieno y LUMO del dienófilo"
    ],
    "correctIndex": 3,
    "explanation": "El dieno conjugado (4 electrones π) interactúa en modo suprafacial con el dienófilo (2 electrones π) en una interacción concertada con 6 electrones π de estado de transición aromático tipo Hückel, cumpliendo las reglas de Woodward-Hoffmann.",
    "skill": "Reacciones Pericíclicas y Simetría Orbital",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Reacción de Diels-Alder",
    "subtopic": "Reglas de Woodward-Hoffmann para [4+2]"
  },
  {
    "id": "qui-uni-30",
    "sectionId": 6,
    "number": 30,
    "text": "En la catálisis heterogénea industrial y química de superficies, ¿qué isoterma de adsorción asume una monocapa localizada con sitios de adsorción energéticamente equivalentes sin interacciones laterales entre las moléculas adsorbidas?",
    "options": [
      "Isoterma empírica de Freundlich para superficies heterogéneas",
      "Modelo de Temkin para calores de adsorción linealmente decrecientes",
      "Isoterma de adsorción de Langmuir: θ = (K · P) / (1 + K · P)",
      "Isoterma BET para multicapas moleculares infinitas"
    ],
    "correctIndex": 2,
    "explanation": "Irving Langmuir dedujo cinéticamente la isoterma asumiendo que la velocidad de adsorción es proporcional a la fracción libre (1 - θ) y la desorción es proporcional a la fracción cubierta θ, conduciendo a saturación en monocapa.",
    "skill": "Fisicoquímica de Superficies y Catálisis Heterogénea",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Adsorción en Superficies Sólidas",
    "subtopic": "Isoterma de Adsorción de Langmuir"
  },
  {
    "id": "qui-uni-31",
    "sectionId": 6,
    "number": 31,
    "text": "En termodinámica química de equilibrios de fase para sistemas multicomponentes, ¿cómo se define el potencial químico μ_i de la especie i en una mezcla? [Reactivo de evaluación analítica #31]",
    "options": [
      "La variación de la entropía S a volumen y energía interna nulas",
      "La derivada parcial de la energía libre de Gibbs G respecto al número de moles n_i a temperatura, presión y moles de las demás especies constantes: μ_i = (∂G / ∂n_i)_{T, P, n_{j ≠ i}}",
      "La entalpía total del sistema dividida entre el volumen molar",
      "La constante de equilibrio K dividida por la constante de los gases R"
    ],
    "correctIndex": 1,
    "explanation": "El potencial químico representa la energía libre de Gibbs molar parcial de una sustancia, constituyendo la fuerza impulsora termodinámica para la transferencia de materia y reacciones químicas (el equilibrio exige que μ_i sea igual en todas las fases).",
    "skill": "Termodinámica Química Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Potencial Químico y Equilibrio de Fases",
    "subtopic": "Definición del Potencial Químico de Gibbs"
  },
  {
    "id": "qui-uni-32",
    "sectionId": 6,
    "number": 32,
    "text": "En química cuántica y teoría de orbitales moleculares (LCAO-MO) para la molécula diatómica de dioxígeno (O₂), ¿cómo explica la configuración electrónica fundamental el paramagnetismo experimental del oxígeno? [Reactivo de evaluación analítica #32]",
    "options": [
      "Posee dos electrones desapareados con espines paralelos que ocupan orbitales moleculares antienlazantes degenerados π*_{2py} y π*_{2px} según la regla de Hund",
      "Todos los electrones se encuentran apareados en orbitales enlazantes sigma",
      "El enlace se debe exclusivamente a atracciones de dispersión de London",
      "La molécula de O₂ tiene simetría tetraédrica con 4 electrones libres"
    ],
    "correctIndex": 0,
    "explanation": "La teoría de Lewis predice incorrectamente que todos los electrones del O₂ están apareados (diamagnético). El diagrama MO sitúa los últimos dos electrones en los orbitales degenerados π*2p, teniendo un estado triplete fundamental con espín S = 1 paramagnético.",
    "skill": "Química Cuántica Molecular y Teoría MO",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Orbitales Moleculares",
    "subtopic": "Paramagnetismo del Oxígeno Diatómico"
  },
  {
    "id": "qui-uni-33",
    "sectionId": 6,
    "number": 33,
    "text": "En espectroscopía de resonancia magnética nuclear de protón (¹H-RMN), ¿qué fenómeno provoca el desdoblamiento de señales en multipletes (regla n + 1) en núcleos no equivalentes acoplados a través de enlaces covalentes? [Reactivo de evaluación analítica #33]",
    "options": [
      "Atracción dipolar gravitatoria en el tubo de RMN",
      "Efecto Doppler relativista del disolvente deuterado",
      "Absorción infrarroja por armónicos de estiramiento C-H",
      "Acoplamiento espín-espín escalar indirecto (constante J) transmitido a través de los electrones de valencia de los enlaces intermedios"
    ],
    "correctIndex": 3,
    "explanation": "El momento magnético nuclear de un protón polariza los electrones de enlace adyacentes, modulando el campo magnético local que perciben los protones vecinos en n estados de orientación de espín posibles, originando multipletes con intensidades del triángulo de Pascal.",
    "skill": "Determinación Estructural por ¹H-RMN",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía RMN",
    "subtopic": "Acoplamiento Espín-Espín y Multiplicidad"
  },
  {
    "id": "qui-uni-34",
    "sectionId": 6,
    "number": 34,
    "text": "En mecanismos de síntesis orgánica, ¿cuáles son las características estereoquímicas y cinéticas de una reacción de sustitución nucleofílica bimolecular (S_N2)? [Reactivo de evaluación analítica #34]",
    "options": [
      "Reacción en dos etapas mediada por radicales libres en presencia de luz ultravioleta",
      "Retención estricta del 100% de la configuración estereoespecífica frontal",
      "Cinética de segundo orden (v = k [R-X] [Nu⁻]), mecanismo concertado en una sola etapa con ataque por la cara dorsal (trasera) e inversión de configuración de Walden en el centro esterogénico",
      "Cinética de primer orden con formación previa de carbocatión plano y racemización completa"
    ],
    "correctIndex": 2,
    "explanation": "En la SN2, el nucleófilo ataca el lóbulo posterior del orbital sigma* C-X al mismo tiempo que sale el grupo saliente en un estado de transición bipiramidal trigonal pentacoordinado, invirtiendo la quiralidad como un paraguas con viento.",
    "skill": "Mecanismos de Reacción Orgánica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Sustituciones Nucleofílicas",
    "subtopic": "Mecanismo SN2 e Inversión de Walden"
  },
  {
    "id": "qui-uni-35",
    "sectionId": 6,
    "number": 35,
    "text": "En la teoría del campo cristalino (CFT) para complejos de metales de transición octaédricos (d⁶, como el [Fe(CN)₆]⁴⁻), ¿por qué los ligandos de campo fuerte (como el cianuro CN⁻) favorecen complejos de bajo espín (low-spin)? [Reactivo de evaluación analítica #35]",
    "options": [
      "Porque eliminan por completo el desdoblamiento energético de los orbitales d",
      "Porque generan un gran desdoblamiento del campo cristalino (Δ_o > P, energía de apareamiento), forzando a los 6 electrones d a aparearse en los orbitales t_{2g} inferiores",
      "Porque neutralizan la carga formal del metal central volviéndolo neutro",
      "Porque distorsionan el complejo hacia geometría lineal pura"
    ],
    "correctIndex": 1,
    "explanation": "Ligandos de campo fuerte en la serie espectroquímica provocan un Δ_o superior a la energía requerida para aparear electrones (P); así, en configuración d⁶ los electrones llenan t2g⁶eg⁰, resultando diamagnético y de bajo espín.",
    "skill": "Química de Coordinación e Inorgánica Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría del Campo Cristalino",
    "subtopic": "Complejos Octaédricos de Bajo Espín"
  },
  {
    "id": "qui-uni-36",
    "sectionId": 6,
    "number": 36,
    "text": "En termodinámica química de disoluciones de no electrolitos, ¿qué modelo termodinámico describe la energía libre de exceso de mezclas poliméricas considerando la enorme asimetría molecular de tamaño entre monómeros y solvente? [Reactivo de evaluación analítica #36]",
    "options": [
      "Teoría de soluciones de Flory-Huggins",
      "Ecuación límite de Debye-Hückel",
      "Ley de Raoult ideal pura",
      "Modelo de Peng-Robinson para hidrocarburos ligeros"
    ],
    "correctIndex": 0,
    "explanation": "Flory y Huggins desarrollaron un modelo reticular que cuantifica la drástica disminución de la entropía de mezcla en polímeros respecto a soluciones de moléculas pequeñas, introduciendo el parámetro de interacción χ (chi de Flory-Huggins).",
    "skill": "Fisicoquímica de Polímeros y Macromoléculas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Termodinámica de Polímeros",
    "subtopic": "Teoría de Flory-Huggins"
  },
  {
    "id": "qui-uni-37",
    "sectionId": 6,
    "number": 37,
    "text": "En espectroscopía infrarroja con transformada de Fourier (FTIR), ¿en qué región espectral del número de onda (cm⁻¹) aparece típicamente la banda de absorción intensa y aguda correspondiente a la vibración de estiramiento del enlace carbonilo (C=O)? [Reactivo de evaluación analítica #37]",
    "options": [
      "Entre 3200 y 3600 cm⁻¹",
      "Entre 2100 y 2260 cm⁻¹",
      "Entre 600 y 800 cm⁻¹",
      "Entre 1680 y 1750 cm⁻¹"
    ],
    "correctIndex": 3,
    "explanation": "El estiramiento del dipolo carbonilo C=O es una de las bandas diagnósticas más características en FTIR, apareciendo entre 1680 cm⁻¹ (en amidas y cetonas conjugadas) y 1740-1750 cm⁻¹ (en ésteres y cloruros de acilo).",
    "skill": "Espectroscopía Infrarroja Vibracional",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía Infrarroja (FTIR)",
    "subtopic": "Banda de Absorción del Enlace Carbonilo C=O"
  },
  {
    "id": "qui-uni-38",
    "sectionId": 6,
    "number": 38,
    "text": "En electroquímica fundamental y cinética de transferencia electrónica de electrodos, ¿qué ecuación describe la corriente neta en función del sobrepotencial η teniendo en cuenta las etapas de activación anódica y catódica? [Reactivo de evaluación analítica #38]",
    "options": [
      "Ley de Fick para difusión estacionaria",
      "Ecuación de Henderson-Hasselbalch",
      "Ecuación de Butler-Volmer",
      "Ecuación de Nernst para condiciones de equilibrio nulo"
    ],
    "correctIndex": 2,
    "explanation": "La ecuación de Butler-Volmer j = j₀ [exp((1-α)Fη/RT) - exp(-αFη/RT)] relaciona la densidad de corriente con el sobrepotencial a través de la corriente de intercambio j₀ y el coeficiente de transferencia de carga simétrico α.",
    "skill": "Electroquímica Fundamental y Cinética de Electrodos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinética Electroquímica",
    "subtopic": "Ecuación de Butler-Volmer y Sobrepotencial"
  },
  {
    "id": "qui-uni-39",
    "sectionId": 6,
    "number": 39,
    "text": "¿Cuál es la regla de selección que gobierna la cicloadición pericíclica [4+2] de Diels-Alder bajo condiciones térmicas basándose en la conservación de la simetría orbital de Woodward-Hoffmann? [Reactivo de evaluación analítica #39]",
    "options": [
      "No depende de la simetría de los orbitales frontera",
      "Es térmicamente permitida con topología suprafacial-suprafacial (4s + 2s) entre los orbitales HOMO del dieno y LUMO del dienófilo",
      "Es térmicamente prohibida y requiere fotoexcitación UV",
      "Opera exclusivamente con topología antarafacial-antarafacial"
    ],
    "correctIndex": 1,
    "explanation": "El dieno conjugado (4 electrones π) interactúa en modo suprafacial con el dienófilo (2 electrones π) en una interacción concertada con 6 electrones π de estado de transición aromático tipo Hückel, cumpliendo las reglas de Woodward-Hoffmann.",
    "skill": "Reacciones Pericíclicas y Simetría Orbital",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Reacción de Diels-Alder",
    "subtopic": "Reglas de Woodward-Hoffmann para [4+2]"
  },
  {
    "id": "qui-uni-40",
    "sectionId": 6,
    "number": 40,
    "text": "En la catálisis heterogénea industrial y química de superficies, ¿qué isoterma de adsorción asume una monocapa localizada con sitios de adsorción energéticamente equivalentes sin interacciones laterales entre las moléculas adsorbidas? [Reactivo de evaluación analítica #40]",
    "options": [
      "Isoterma de adsorción de Langmuir: θ = (K · P) / (1 + K · P)",
      "Isoterma BET para multicapas moleculares infinitas",
      "Isoterma empírica de Freundlich para superficies heterogéneas",
      "Modelo de Temkin para calores de adsorción linealmente decrecientes"
    ],
    "correctIndex": 0,
    "explanation": "Irving Langmuir dedujo cinéticamente la isoterma asumiendo que la velocidad de adsorción es proporcional a la fracción libre (1 - θ) y la desorción es proporcional a la fracción cubierta θ, conduciendo a saturación en monocapa.",
    "skill": "Fisicoquímica de Superficies y Catálisis Heterogénea",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Adsorción en Superficies Sólidas",
    "subtopic": "Isoterma de Adsorción de Langmuir"
  },
  {
    "id": "qui-uni-41",
    "sectionId": 6,
    "number": 41,
    "text": "En termodinámica química de equilibrios de fase para sistemas multicomponentes, ¿cómo se define el potencial químico μ_i de la especie i en una mezcla? [Reactivo de evaluación analítica #41]",
    "options": [
      "La entalpía total del sistema dividida entre el volumen molar",
      "La constante de equilibrio K dividida por la constante de los gases R",
      "La variación de la entropía S a volumen y energía interna nulas",
      "La derivada parcial de la energía libre de Gibbs G respecto al número de moles n_i a temperatura, presión y moles de las demás especies constantes: μ_i = (∂G / ∂n_i)_{T, P, n_{j ≠ i}}"
    ],
    "correctIndex": 3,
    "explanation": "El potencial químico representa la energía libre de Gibbs molar parcial de una sustancia, constituyendo la fuerza impulsora termodinámica para la transferencia de materia y reacciones químicas (el equilibrio exige que μ_i sea igual en todas las fases).",
    "skill": "Termodinámica Química Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Potencial Químico y Equilibrio de Fases",
    "subtopic": "Definición del Potencial Químico de Gibbs"
  },
  {
    "id": "qui-uni-42",
    "sectionId": 6,
    "number": 42,
    "text": "En química cuántica y teoría de orbitales moleculares (LCAO-MO) para la molécula diatómica de dioxígeno (O₂), ¿cómo explica la configuración electrónica fundamental el paramagnetismo experimental del oxígeno? [Reactivo de evaluación analítica #42]",
    "options": [
      "El enlace se debe exclusivamente a atracciones de dispersión de London",
      "La molécula de O₂ tiene simetría tetraédrica con 4 electrones libres",
      "Posee dos electrones desapareados con espines paralelos que ocupan orbitales moleculares antienlazantes degenerados π*_{2py} y π*_{2px} según la regla de Hund",
      "Todos los electrones se encuentran apareados en orbitales enlazantes sigma"
    ],
    "correctIndex": 2,
    "explanation": "La teoría de Lewis predice incorrectamente que todos los electrones del O₂ están apareados (diamagnético). El diagrama MO sitúa los últimos dos electrones en los orbitales degenerados π*2p, teniendo un estado triplete fundamental con espín S = 1 paramagnético.",
    "skill": "Química Cuántica Molecular y Teoría MO",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Orbitales Moleculares",
    "subtopic": "Paramagnetismo del Oxígeno Diatómico"
  },
  {
    "id": "qui-uni-43",
    "sectionId": 6,
    "number": 43,
    "text": "En espectroscopía de resonancia magnética nuclear de protón (¹H-RMN), ¿qué fenómeno provoca el desdoblamiento de señales en multipletes (regla n + 1) en núcleos no equivalentes acoplados a través de enlaces covalentes? [Reactivo de evaluación analítica #43]",
    "options": [
      "Absorción infrarroja por armónicos de estiramiento C-H",
      "Acoplamiento espín-espín escalar indirecto (constante J) transmitido a través de los electrones de valencia de los enlaces intermedios",
      "Atracción dipolar gravitatoria en el tubo de RMN",
      "Efecto Doppler relativista del disolvente deuterado"
    ],
    "correctIndex": 1,
    "explanation": "El momento magnético nuclear de un protón polariza los electrones de enlace adyacentes, modulando el campo magnético local que perciben los protones vecinos en n estados de orientación de espín posibles, originando multipletes con intensidades del triángulo de Pascal.",
    "skill": "Determinación Estructural por ¹H-RMN",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía RMN",
    "subtopic": "Acoplamiento Espín-Espín y Multiplicidad"
  },
  {
    "id": "qui-uni-44",
    "sectionId": 6,
    "number": 44,
    "text": "En mecanismos de síntesis orgánica, ¿cuáles son las características estereoquímicas y cinéticas de una reacción de sustitución nucleofílica bimolecular (S_N2)? [Reactivo de evaluación analítica #44]",
    "options": [
      "Cinética de segundo orden (v = k [R-X] [Nu⁻]), mecanismo concertado en una sola etapa con ataque por la cara dorsal (trasera) e inversión de configuración de Walden en el centro esterogénico",
      "Cinética de primer orden con formación previa de carbocatión plano y racemización completa",
      "Reacción en dos etapas mediada por radicales libres en presencia de luz ultravioleta",
      "Retención estricta del 100% de la configuración estereoespecífica frontal"
    ],
    "correctIndex": 0,
    "explanation": "En la SN2, el nucleófilo ataca el lóbulo posterior del orbital sigma* C-X al mismo tiempo que sale el grupo saliente en un estado de transición bipiramidal trigonal pentacoordinado, invirtiendo la quiralidad como un paraguas con viento.",
    "skill": "Mecanismos de Reacción Orgánica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Sustituciones Nucleofílicas",
    "subtopic": "Mecanismo SN2 e Inversión de Walden"
  },
  {
    "id": "qui-uni-45",
    "sectionId": 6,
    "number": 45,
    "text": "En la teoría del campo cristalino (CFT) para complejos de metales de transición octaédricos (d⁶, como el [Fe(CN)₆]⁴⁻), ¿por qué los ligandos de campo fuerte (como el cianuro CN⁻) favorecen complejos de bajo espín (low-spin)? [Reactivo de evaluación analítica #45]",
    "options": [
      "Porque neutralizan la carga formal del metal central volviéndolo neutro",
      "Porque distorsionan el complejo hacia geometría lineal pura",
      "Porque eliminan por completo el desdoblamiento energético de los orbitales d",
      "Porque generan un gran desdoblamiento del campo cristalino (Δ_o > P, energía de apareamiento), forzando a los 6 electrones d a aparearse en los orbitales t_{2g} inferiores"
    ],
    "correctIndex": 3,
    "explanation": "Ligandos de campo fuerte en la serie espectroquímica provocan un Δ_o superior a la energía requerida para aparear electrones (P); así, en configuración d⁶ los electrones llenan t2g⁶eg⁰, resultando diamagnético y de bajo espín.",
    "skill": "Química de Coordinación e Inorgánica Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría del Campo Cristalino",
    "subtopic": "Complejos Octaédricos de Bajo Espín"
  },
  {
    "id": "qui-uni-46",
    "sectionId": 6,
    "number": 46,
    "text": "En termodinámica química de disoluciones de no electrolitos, ¿qué modelo termodinámico describe la energía libre de exceso de mezclas poliméricas considerando la enorme asimetría molecular de tamaño entre monómeros y solvente? [Reactivo de evaluación analítica #46]",
    "options": [
      "Ley de Raoult ideal pura",
      "Modelo de Peng-Robinson para hidrocarburos ligeros",
      "Teoría de soluciones de Flory-Huggins",
      "Ecuación límite de Debye-Hückel"
    ],
    "correctIndex": 2,
    "explanation": "Flory y Huggins desarrollaron un modelo reticular que cuantifica la drástica disminución de la entropía de mezcla en polímeros respecto a soluciones de moléculas pequeñas, introduciendo el parámetro de interacción χ (chi de Flory-Huggins).",
    "skill": "Fisicoquímica de Polímeros y Macromoléculas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Termodinámica de Polímeros",
    "subtopic": "Teoría de Flory-Huggins"
  },
  {
    "id": "qui-uni-47",
    "sectionId": 6,
    "number": 47,
    "text": "En espectroscopía infrarroja con transformada de Fourier (FTIR), ¿en qué región espectral del número de onda (cm⁻¹) aparece típicamente la banda de absorción intensa y aguda correspondiente a la vibración de estiramiento del enlace carbonilo (C=O)? [Reactivo de evaluación analítica #47]",
    "options": [
      "Entre 600 y 800 cm⁻¹",
      "Entre 1680 y 1750 cm⁻¹",
      "Entre 3200 y 3600 cm⁻¹",
      "Entre 2100 y 2260 cm⁻¹"
    ],
    "correctIndex": 1,
    "explanation": "El estiramiento del dipolo carbonilo C=O es una de las bandas diagnósticas más características en FTIR, apareciendo entre 1680 cm⁻¹ (en amidas y cetonas conjugadas) y 1740-1750 cm⁻¹ (en ésteres y cloruros de acilo).",
    "skill": "Espectroscopía Infrarroja Vibracional",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía Infrarroja (FTIR)",
    "subtopic": "Banda de Absorción del Enlace Carbonilo C=O"
  },
  {
    "id": "qui-uni-48",
    "sectionId": 6,
    "number": 48,
    "text": "En electroquímica fundamental y cinética de transferencia electrónica de electrodos, ¿qué ecuación describe la corriente neta en función del sobrepotencial η teniendo en cuenta las etapas de activación anódica y catódica? [Reactivo de evaluación analítica #48]",
    "options": [
      "Ecuación de Butler-Volmer",
      "Ecuación de Nernst para condiciones de equilibrio nulo",
      "Ley de Fick para difusión estacionaria",
      "Ecuación de Henderson-Hasselbalch"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación de Butler-Volmer j = j₀ [exp((1-α)Fη/RT) - exp(-αFη/RT)] relaciona la densidad de corriente con el sobrepotencial a través de la corriente de intercambio j₀ y el coeficiente de transferencia de carga simétrico α.",
    "skill": "Electroquímica Fundamental y Cinética de Electrodos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinética Electroquímica",
    "subtopic": "Ecuación de Butler-Volmer y Sobrepotencial"
  },
  {
    "id": "qui-uni-49",
    "sectionId": 6,
    "number": 49,
    "text": "¿Cuál es la regla de selección que gobierna la cicloadición pericíclica [4+2] de Diels-Alder bajo condiciones térmicas basándose en la conservación de la simetría orbital de Woodward-Hoffmann? [Reactivo de evaluación analítica #49]",
    "options": [
      "Es térmicamente prohibida y requiere fotoexcitación UV",
      "Opera exclusivamente con topología antarafacial-antarafacial",
      "No depende de la simetría de los orbitales frontera",
      "Es térmicamente permitida con topología suprafacial-suprafacial (4s + 2s) entre los orbitales HOMO del dieno y LUMO del dienófilo"
    ],
    "correctIndex": 3,
    "explanation": "El dieno conjugado (4 electrones π) interactúa en modo suprafacial con el dienófilo (2 electrones π) en una interacción concertada con 6 electrones π de estado de transición aromático tipo Hückel, cumpliendo las reglas de Woodward-Hoffmann.",
    "skill": "Reacciones Pericíclicas y Simetría Orbital",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Reacción de Diels-Alder",
    "subtopic": "Reglas de Woodward-Hoffmann para [4+2]"
  },
  {
    "id": "qui-uni-50",
    "sectionId": 6,
    "number": 50,
    "text": "En la catálisis heterogénea industrial y química de superficies, ¿qué isoterma de adsorción asume una monocapa localizada con sitios de adsorción energéticamente equivalentes sin interacciones laterales entre las moléculas adsorbidas? [Reactivo de evaluación analítica #50]",
    "options": [
      "Isoterma empírica de Freundlich para superficies heterogéneas",
      "Modelo de Temkin para calores de adsorción linealmente decrecientes",
      "Isoterma de adsorción de Langmuir: θ = (K · P) / (1 + K · P)",
      "Isoterma BET para multicapas moleculares infinitas"
    ],
    "correctIndex": 2,
    "explanation": "Irving Langmuir dedujo cinéticamente la isoterma asumiendo que la velocidad de adsorción es proporcional a la fracción libre (1 - θ) y la desorción es proporcional a la fracción cubierta θ, conduciendo a saturación en monocapa.",
    "skill": "Fisicoquímica de Superficies y Catálisis Heterogénea",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Adsorción en Superficies Sólidas",
    "subtopic": "Isoterma de Adsorción de Langmuir"
  },
  {
    "id": "qui-uni-51",
    "sectionId": 6,
    "number": 51,
    "text": "En termodinámica química de equilibrios de fase para sistemas multicomponentes, ¿cómo se define el potencial químico μ_i de la especie i en una mezcla? [Reactivo de evaluación analítica #51]",
    "options": [
      "La variación de la entropía S a volumen y energía interna nulas",
      "La derivada parcial de la energía libre de Gibbs G respecto al número de moles n_i a temperatura, presión y moles de las demás especies constantes: μ_i = (∂G / ∂n_i)_{T, P, n_{j ≠ i}}",
      "La entalpía total del sistema dividida entre el volumen molar",
      "La constante de equilibrio K dividida por la constante de los gases R"
    ],
    "correctIndex": 1,
    "explanation": "El potencial químico representa la energía libre de Gibbs molar parcial de una sustancia, constituyendo la fuerza impulsora termodinámica para la transferencia de materia y reacciones químicas (el equilibrio exige que μ_i sea igual en todas las fases).",
    "skill": "Termodinámica Química Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Potencial Químico y Equilibrio de Fases",
    "subtopic": "Definición del Potencial Químico de Gibbs"
  },
  {
    "id": "qui-uni-52",
    "sectionId": 6,
    "number": 52,
    "text": "En química cuántica y teoría de orbitales moleculares (LCAO-MO) para la molécula diatómica de dioxígeno (O₂), ¿cómo explica la configuración electrónica fundamental el paramagnetismo experimental del oxígeno? [Reactivo de evaluación analítica #52]",
    "options": [
      "Posee dos electrones desapareados con espines paralelos que ocupan orbitales moleculares antienlazantes degenerados π*_{2py} y π*_{2px} según la regla de Hund",
      "Todos los electrones se encuentran apareados en orbitales enlazantes sigma",
      "El enlace se debe exclusivamente a atracciones de dispersión de London",
      "La molécula de O₂ tiene simetría tetraédrica con 4 electrones libres"
    ],
    "correctIndex": 0,
    "explanation": "La teoría de Lewis predice incorrectamente que todos los electrones del O₂ están apareados (diamagnético). El diagrama MO sitúa los últimos dos electrones en los orbitales degenerados π*2p, teniendo un estado triplete fundamental con espín S = 1 paramagnético.",
    "skill": "Química Cuántica Molecular y Teoría MO",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Orbitales Moleculares",
    "subtopic": "Paramagnetismo del Oxígeno Diatómico"
  },
  {
    "id": "qui-uni-53",
    "sectionId": 6,
    "number": 53,
    "text": "En espectroscopía de resonancia magnética nuclear de protón (¹H-RMN), ¿qué fenómeno provoca el desdoblamiento de señales en multipletes (regla n + 1) en núcleos no equivalentes acoplados a través de enlaces covalentes? [Reactivo de evaluación analítica #53]",
    "options": [
      "Atracción dipolar gravitatoria en el tubo de RMN",
      "Efecto Doppler relativista del disolvente deuterado",
      "Absorción infrarroja por armónicos de estiramiento C-H",
      "Acoplamiento espín-espín escalar indirecto (constante J) transmitido a través de los electrones de valencia de los enlaces intermedios"
    ],
    "correctIndex": 3,
    "explanation": "El momento magnético nuclear de un protón polariza los electrones de enlace adyacentes, modulando el campo magnético local que perciben los protones vecinos en n estados de orientación de espín posibles, originando multipletes con intensidades del triángulo de Pascal.",
    "skill": "Determinación Estructural por ¹H-RMN",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía RMN",
    "subtopic": "Acoplamiento Espín-Espín y Multiplicidad"
  },
  {
    "id": "qui-uni-54",
    "sectionId": 6,
    "number": 54,
    "text": "En mecanismos de síntesis orgánica, ¿cuáles son las características estereoquímicas y cinéticas de una reacción de sustitución nucleofílica bimolecular (S_N2)? [Reactivo de evaluación analítica #54]",
    "options": [
      "Reacción en dos etapas mediada por radicales libres en presencia de luz ultravioleta",
      "Retención estricta del 100% de la configuración estereoespecífica frontal",
      "Cinética de segundo orden (v = k [R-X] [Nu⁻]), mecanismo concertado en una sola etapa con ataque por la cara dorsal (trasera) e inversión de configuración de Walden en el centro esterogénico",
      "Cinética de primer orden con formación previa de carbocatión plano y racemización completa"
    ],
    "correctIndex": 2,
    "explanation": "En la SN2, el nucleófilo ataca el lóbulo posterior del orbital sigma* C-X al mismo tiempo que sale el grupo saliente en un estado de transición bipiramidal trigonal pentacoordinado, invirtiendo la quiralidad como un paraguas con viento.",
    "skill": "Mecanismos de Reacción Orgánica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Sustituciones Nucleofílicas",
    "subtopic": "Mecanismo SN2 e Inversión de Walden"
  },
  {
    "id": "qui-uni-55",
    "sectionId": 6,
    "number": 55,
    "text": "En la teoría del campo cristalino (CFT) para complejos de metales de transición octaédricos (d⁶, como el [Fe(CN)₆]⁴⁻), ¿por qué los ligandos de campo fuerte (como el cianuro CN⁻) favorecen complejos de bajo espín (low-spin)? [Reactivo de evaluación analítica #55]",
    "options": [
      "Porque eliminan por completo el desdoblamiento energético de los orbitales d",
      "Porque generan un gran desdoblamiento del campo cristalino (Δ_o > P, energía de apareamiento), forzando a los 6 electrones d a aparearse en los orbitales t_{2g} inferiores",
      "Porque neutralizan la carga formal del metal central volviéndolo neutro",
      "Porque distorsionan el complejo hacia geometría lineal pura"
    ],
    "correctIndex": 1,
    "explanation": "Ligandos de campo fuerte en la serie espectroquímica provocan un Δ_o superior a la energía requerida para aparear electrones (P); así, en configuración d⁶ los electrones llenan t2g⁶eg⁰, resultando diamagnético y de bajo espín.",
    "skill": "Química de Coordinación e Inorgánica Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría del Campo Cristalino",
    "subtopic": "Complejos Octaédricos de Bajo Espín"
  },
  {
    "id": "qui-uni-56",
    "sectionId": 6,
    "number": 56,
    "text": "En termodinámica química de disoluciones de no electrolitos, ¿qué modelo termodinámico describe la energía libre de exceso de mezclas poliméricas considerando la enorme asimetría molecular de tamaño entre monómeros y solvente? [Reactivo de evaluación analítica #56]",
    "options": [
      "Teoría de soluciones de Flory-Huggins",
      "Ecuación límite de Debye-Hückel",
      "Ley de Raoult ideal pura",
      "Modelo de Peng-Robinson para hidrocarburos ligeros"
    ],
    "correctIndex": 0,
    "explanation": "Flory y Huggins desarrollaron un modelo reticular que cuantifica la drástica disminución de la entropía de mezcla en polímeros respecto a soluciones de moléculas pequeñas, introduciendo el parámetro de interacción χ (chi de Flory-Huggins).",
    "skill": "Fisicoquímica de Polímeros y Macromoléculas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Termodinámica de Polímeros",
    "subtopic": "Teoría de Flory-Huggins"
  },
  {
    "id": "qui-uni-57",
    "sectionId": 6,
    "number": 57,
    "text": "En espectroscopía infrarroja con transformada de Fourier (FTIR), ¿en qué región espectral del número de onda (cm⁻¹) aparece típicamente la banda de absorción intensa y aguda correspondiente a la vibración de estiramiento del enlace carbonilo (C=O)? [Reactivo de evaluación analítica #57]",
    "options": [
      "Entre 3200 y 3600 cm⁻¹",
      "Entre 2100 y 2260 cm⁻¹",
      "Entre 600 y 800 cm⁻¹",
      "Entre 1680 y 1750 cm⁻¹"
    ],
    "correctIndex": 3,
    "explanation": "El estiramiento del dipolo carbonilo C=O es una de las bandas diagnósticas más características en FTIR, apareciendo entre 1680 cm⁻¹ (en amidas y cetonas conjugadas) y 1740-1750 cm⁻¹ (en ésteres y cloruros de acilo).",
    "skill": "Espectroscopía Infrarroja Vibracional",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía Infrarroja (FTIR)",
    "subtopic": "Banda de Absorción del Enlace Carbonilo C=O"
  },
  {
    "id": "qui-uni-58",
    "sectionId": 6,
    "number": 58,
    "text": "En electroquímica fundamental y cinética de transferencia electrónica de electrodos, ¿qué ecuación describe la corriente neta en función del sobrepotencial η teniendo en cuenta las etapas de activación anódica y catódica? [Reactivo de evaluación analítica #58]",
    "options": [
      "Ley de Fick para difusión estacionaria",
      "Ecuación de Henderson-Hasselbalch",
      "Ecuación de Butler-Volmer",
      "Ecuación de Nernst para condiciones de equilibrio nulo"
    ],
    "correctIndex": 2,
    "explanation": "La ecuación de Butler-Volmer j = j₀ [exp((1-α)Fη/RT) - exp(-αFη/RT)] relaciona la densidad de corriente con el sobrepotencial a través de la corriente de intercambio j₀ y el coeficiente de transferencia de carga simétrico α.",
    "skill": "Electroquímica Fundamental y Cinética de Electrodos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinética Electroquímica",
    "subtopic": "Ecuación de Butler-Volmer y Sobrepotencial"
  },
  {
    "id": "qui-uni-59",
    "sectionId": 6,
    "number": 59,
    "text": "¿Cuál es la regla de selección que gobierna la cicloadición pericíclica [4+2] de Diels-Alder bajo condiciones térmicas basándose en la conservación de la simetría orbital de Woodward-Hoffmann? [Reactivo de evaluación analítica #59]",
    "options": [
      "No depende de la simetría de los orbitales frontera",
      "Es térmicamente permitida con topología suprafacial-suprafacial (4s + 2s) entre los orbitales HOMO del dieno y LUMO del dienófilo",
      "Es térmicamente prohibida y requiere fotoexcitación UV",
      "Opera exclusivamente con topología antarafacial-antarafacial"
    ],
    "correctIndex": 1,
    "explanation": "El dieno conjugado (4 electrones π) interactúa en modo suprafacial con el dienófilo (2 electrones π) en una interacción concertada con 6 electrones π de estado de transición aromático tipo Hückel, cumpliendo las reglas de Woodward-Hoffmann.",
    "skill": "Reacciones Pericíclicas y Simetría Orbital",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Reacción de Diels-Alder",
    "subtopic": "Reglas de Woodward-Hoffmann para [4+2]"
  },
  {
    "id": "qui-uni-60",
    "sectionId": 6,
    "number": 60,
    "text": "En la catálisis heterogénea industrial y química de superficies, ¿qué isoterma de adsorción asume una monocapa localizada con sitios de adsorción energéticamente equivalentes sin interacciones laterales entre las moléculas adsorbidas? [Reactivo de evaluación analítica #60]",
    "options": [
      "Isoterma de adsorción de Langmuir: θ = (K · P) / (1 + K · P)",
      "Isoterma BET para multicapas moleculares infinitas",
      "Isoterma empírica de Freundlich para superficies heterogéneas",
      "Modelo de Temkin para calores de adsorción linealmente decrecientes"
    ],
    "correctIndex": 0,
    "explanation": "Irving Langmuir dedujo cinéticamente la isoterma asumiendo que la velocidad de adsorción es proporcional a la fracción libre (1 - θ) y la desorción es proporcional a la fracción cubierta θ, conduciendo a saturación en monocapa.",
    "skill": "Fisicoquímica de Superficies y Catálisis Heterogénea",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Adsorción en Superficies Sólidas",
    "subtopic": "Isoterma de Adsorción de Langmuir"
  },
  {
    "id": "qui-uni-61",
    "sectionId": 6,
    "number": 61,
    "text": "En termodinámica química de equilibrios de fase para sistemas multicomponentes, ¿cómo se define el potencial químico μ_i de la especie i en una mezcla? [Reactivo de evaluación analítica #61]",
    "options": [
      "La entalpía total del sistema dividida entre el volumen molar",
      "La constante de equilibrio K dividida por la constante de los gases R",
      "La variación de la entropía S a volumen y energía interna nulas",
      "La derivada parcial de la energía libre de Gibbs G respecto al número de moles n_i a temperatura, presión y moles de las demás especies constantes: μ_i = (∂G / ∂n_i)_{T, P, n_{j ≠ i}}"
    ],
    "correctIndex": 3,
    "explanation": "El potencial químico representa la energía libre de Gibbs molar parcial de una sustancia, constituyendo la fuerza impulsora termodinámica para la transferencia de materia y reacciones químicas (el equilibrio exige que μ_i sea igual en todas las fases).",
    "skill": "Termodinámica Química Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Potencial Químico y Equilibrio de Fases",
    "subtopic": "Definición del Potencial Químico de Gibbs"
  },
  {
    "id": "qui-uni-62",
    "sectionId": 6,
    "number": 62,
    "text": "En química cuántica y teoría de orbitales moleculares (LCAO-MO) para la molécula diatómica de dioxígeno (O₂), ¿cómo explica la configuración electrónica fundamental el paramagnetismo experimental del oxígeno? [Reactivo de evaluación analítica #62]",
    "options": [
      "El enlace se debe exclusivamente a atracciones de dispersión de London",
      "La molécula de O₂ tiene simetría tetraédrica con 4 electrones libres",
      "Posee dos electrones desapareados con espines paralelos que ocupan orbitales moleculares antienlazantes degenerados π*_{2py} y π*_{2px} según la regla de Hund",
      "Todos los electrones se encuentran apareados en orbitales enlazantes sigma"
    ],
    "correctIndex": 2,
    "explanation": "La teoría de Lewis predice incorrectamente que todos los electrones del O₂ están apareados (diamagnético). El diagrama MO sitúa los últimos dos electrones en los orbitales degenerados π*2p, teniendo un estado triplete fundamental con espín S = 1 paramagnético.",
    "skill": "Química Cuántica Molecular y Teoría MO",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Orbitales Moleculares",
    "subtopic": "Paramagnetismo del Oxígeno Diatómico"
  },
  {
    "id": "qui-uni-63",
    "sectionId": 6,
    "number": 63,
    "text": "En espectroscopía de resonancia magnética nuclear de protón (¹H-RMN), ¿qué fenómeno provoca el desdoblamiento de señales en multipletes (regla n + 1) en núcleos no equivalentes acoplados a través de enlaces covalentes? [Reactivo de evaluación analítica #63]",
    "options": [
      "Absorción infrarroja por armónicos de estiramiento C-H",
      "Acoplamiento espín-espín escalar indirecto (constante J) transmitido a través de los electrones de valencia de los enlaces intermedios",
      "Atracción dipolar gravitatoria en el tubo de RMN",
      "Efecto Doppler relativista del disolvente deuterado"
    ],
    "correctIndex": 1,
    "explanation": "El momento magnético nuclear de un protón polariza los electrones de enlace adyacentes, modulando el campo magnético local que perciben los protones vecinos en n estados de orientación de espín posibles, originando multipletes con intensidades del triángulo de Pascal.",
    "skill": "Determinación Estructural por ¹H-RMN",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía RMN",
    "subtopic": "Acoplamiento Espín-Espín y Multiplicidad"
  },
  {
    "id": "qui-uni-64",
    "sectionId": 6,
    "number": 64,
    "text": "En mecanismos de síntesis orgánica, ¿cuáles son las características estereoquímicas y cinéticas de una reacción de sustitución nucleofílica bimolecular (S_N2)? [Reactivo de evaluación analítica #64]",
    "options": [
      "Cinética de segundo orden (v = k [R-X] [Nu⁻]), mecanismo concertado en una sola etapa con ataque por la cara dorsal (trasera) e inversión de configuración de Walden en el centro esterogénico",
      "Cinética de primer orden con formación previa de carbocatión plano y racemización completa",
      "Reacción en dos etapas mediada por radicales libres en presencia de luz ultravioleta",
      "Retención estricta del 100% de la configuración estereoespecífica frontal"
    ],
    "correctIndex": 0,
    "explanation": "En la SN2, el nucleófilo ataca el lóbulo posterior del orbital sigma* C-X al mismo tiempo que sale el grupo saliente en un estado de transición bipiramidal trigonal pentacoordinado, invirtiendo la quiralidad como un paraguas con viento.",
    "skill": "Mecanismos de Reacción Orgánica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Sustituciones Nucleofílicas",
    "subtopic": "Mecanismo SN2 e Inversión de Walden"
  },
  {
    "id": "qui-uni-65",
    "sectionId": 6,
    "number": 65,
    "text": "En la teoría del campo cristalino (CFT) para complejos de metales de transición octaédricos (d⁶, como el [Fe(CN)₆]⁴⁻), ¿por qué los ligandos de campo fuerte (como el cianuro CN⁻) favorecen complejos de bajo espín (low-spin)? [Reactivo de evaluación analítica #65]",
    "options": [
      "Porque neutralizan la carga formal del metal central volviéndolo neutro",
      "Porque distorsionan el complejo hacia geometría lineal pura",
      "Porque eliminan por completo el desdoblamiento energético de los orbitales d",
      "Porque generan un gran desdoblamiento del campo cristalino (Δ_o > P, energía de apareamiento), forzando a los 6 electrones d a aparearse en los orbitales t_{2g} inferiores"
    ],
    "correctIndex": 3,
    "explanation": "Ligandos de campo fuerte en la serie espectroquímica provocan un Δ_o superior a la energía requerida para aparear electrones (P); así, en configuración d⁶ los electrones llenan t2g⁶eg⁰, resultando diamagnético y de bajo espín.",
    "skill": "Química de Coordinación e Inorgánica Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría del Campo Cristalino",
    "subtopic": "Complejos Octaédricos de Bajo Espín"
  },
  {
    "id": "qui-uni-66",
    "sectionId": 6,
    "number": 66,
    "text": "En termodinámica química de disoluciones de no electrolitos, ¿qué modelo termodinámico describe la energía libre de exceso de mezclas poliméricas considerando la enorme asimetría molecular de tamaño entre monómeros y solvente? [Reactivo de evaluación analítica #66]",
    "options": [
      "Ley de Raoult ideal pura",
      "Modelo de Peng-Robinson para hidrocarburos ligeros",
      "Teoría de soluciones de Flory-Huggins",
      "Ecuación límite de Debye-Hückel"
    ],
    "correctIndex": 2,
    "explanation": "Flory y Huggins desarrollaron un modelo reticular que cuantifica la drástica disminución de la entropía de mezcla en polímeros respecto a soluciones de moléculas pequeñas, introduciendo el parámetro de interacción χ (chi de Flory-Huggins).",
    "skill": "Fisicoquímica de Polímeros y Macromoléculas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Termodinámica de Polímeros",
    "subtopic": "Teoría de Flory-Huggins"
  },
  {
    "id": "qui-uni-67",
    "sectionId": 6,
    "number": 67,
    "text": "En espectroscopía infrarroja con transformada de Fourier (FTIR), ¿en qué región espectral del número de onda (cm⁻¹) aparece típicamente la banda de absorción intensa y aguda correspondiente a la vibración de estiramiento del enlace carbonilo (C=O)? [Reactivo de evaluación analítica #67]",
    "options": [
      "Entre 600 y 800 cm⁻¹",
      "Entre 1680 y 1750 cm⁻¹",
      "Entre 3200 y 3600 cm⁻¹",
      "Entre 2100 y 2260 cm⁻¹"
    ],
    "correctIndex": 1,
    "explanation": "El estiramiento del dipolo carbonilo C=O es una de las bandas diagnósticas más características en FTIR, apareciendo entre 1680 cm⁻¹ (en amidas y cetonas conjugadas) y 1740-1750 cm⁻¹ (en ésteres y cloruros de acilo).",
    "skill": "Espectroscopía Infrarroja Vibracional",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía Infrarroja (FTIR)",
    "subtopic": "Banda de Absorción del Enlace Carbonilo C=O"
  },
  {
    "id": "qui-uni-68",
    "sectionId": 6,
    "number": 68,
    "text": "En electroquímica fundamental y cinética de transferencia electrónica de electrodos, ¿qué ecuación describe la corriente neta en función del sobrepotencial η teniendo en cuenta las etapas de activación anódica y catódica? [Reactivo de evaluación analítica #68]",
    "options": [
      "Ecuación de Butler-Volmer",
      "Ecuación de Nernst para condiciones de equilibrio nulo",
      "Ley de Fick para difusión estacionaria",
      "Ecuación de Henderson-Hasselbalch"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación de Butler-Volmer j = j₀ [exp((1-α)Fη/RT) - exp(-αFη/RT)] relaciona la densidad de corriente con el sobrepotencial a través de la corriente de intercambio j₀ y el coeficiente de transferencia de carga simétrico α.",
    "skill": "Electroquímica Fundamental y Cinética de Electrodos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinética Electroquímica",
    "subtopic": "Ecuación de Butler-Volmer y Sobrepotencial"
  },
  {
    "id": "qui-uni-69",
    "sectionId": 6,
    "number": 69,
    "text": "¿Cuál es la regla de selección que gobierna la cicloadición pericíclica [4+2] de Diels-Alder bajo condiciones térmicas basándose en la conservación de la simetría orbital de Woodward-Hoffmann? [Reactivo de evaluación analítica #69]",
    "options": [
      "Es térmicamente prohibida y requiere fotoexcitación UV",
      "Opera exclusivamente con topología antarafacial-antarafacial",
      "No depende de la simetría de los orbitales frontera",
      "Es térmicamente permitida con topología suprafacial-suprafacial (4s + 2s) entre los orbitales HOMO del dieno y LUMO del dienófilo"
    ],
    "correctIndex": 3,
    "explanation": "El dieno conjugado (4 electrones π) interactúa en modo suprafacial con el dienófilo (2 electrones π) en una interacción concertada con 6 electrones π de estado de transición aromático tipo Hückel, cumpliendo las reglas de Woodward-Hoffmann.",
    "skill": "Reacciones Pericíclicas y Simetría Orbital",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Reacción de Diels-Alder",
    "subtopic": "Reglas de Woodward-Hoffmann para [4+2]"
  },
  {
    "id": "qui-uni-70",
    "sectionId": 6,
    "number": 70,
    "text": "En la catálisis heterogénea industrial y química de superficies, ¿qué isoterma de adsorción asume una monocapa localizada con sitios de adsorción energéticamente equivalentes sin interacciones laterales entre las moléculas adsorbidas? [Reactivo de evaluación analítica #70]",
    "options": [
      "Isoterma empírica de Freundlich para superficies heterogéneas",
      "Modelo de Temkin para calores de adsorción linealmente decrecientes",
      "Isoterma de adsorción de Langmuir: θ = (K · P) / (1 + K · P)",
      "Isoterma BET para multicapas moleculares infinitas"
    ],
    "correctIndex": 2,
    "explanation": "Irving Langmuir dedujo cinéticamente la isoterma asumiendo que la velocidad de adsorción es proporcional a la fracción libre (1 - θ) y la desorción es proporcional a la fracción cubierta θ, conduciendo a saturación en monocapa.",
    "skill": "Fisicoquímica de Superficies y Catálisis Heterogénea",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Adsorción en Superficies Sólidas",
    "subtopic": "Isoterma de Adsorción de Langmuir"
  },
  {
    "id": "qui-uni-71",
    "sectionId": 6,
    "number": 71,
    "text": "En termodinámica química de equilibrios de fase para sistemas multicomponentes, ¿cómo se define el potencial químico μ_i de la especie i en una mezcla? [Reactivo de evaluación analítica #71]",
    "options": [
      "La variación de la entropía S a volumen y energía interna nulas",
      "La derivada parcial de la energía libre de Gibbs G respecto al número de moles n_i a temperatura, presión y moles de las demás especies constantes: μ_i = (∂G / ∂n_i)_{T, P, n_{j ≠ i}}",
      "La entalpía total del sistema dividida entre el volumen molar",
      "La constante de equilibrio K dividida por la constante de los gases R"
    ],
    "correctIndex": 1,
    "explanation": "El potencial químico representa la energía libre de Gibbs molar parcial de una sustancia, constituyendo la fuerza impulsora termodinámica para la transferencia de materia y reacciones químicas (el equilibrio exige que μ_i sea igual en todas las fases).",
    "skill": "Termodinámica Química Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Potencial Químico y Equilibrio de Fases",
    "subtopic": "Definición del Potencial Químico de Gibbs"
  },
  {
    "id": "qui-uni-72",
    "sectionId": 6,
    "number": 72,
    "text": "En química cuántica y teoría de orbitales moleculares (LCAO-MO) para la molécula diatómica de dioxígeno (O₂), ¿cómo explica la configuración electrónica fundamental el paramagnetismo experimental del oxígeno? [Reactivo de evaluación analítica #72]",
    "options": [
      "Posee dos electrones desapareados con espines paralelos que ocupan orbitales moleculares antienlazantes degenerados π*_{2py} y π*_{2px} según la regla de Hund",
      "Todos los electrones se encuentran apareados en orbitales enlazantes sigma",
      "El enlace se debe exclusivamente a atracciones de dispersión de London",
      "La molécula de O₂ tiene simetría tetraédrica con 4 electrones libres"
    ],
    "correctIndex": 0,
    "explanation": "La teoría de Lewis predice incorrectamente que todos los electrones del O₂ están apareados (diamagnético). El diagrama MO sitúa los últimos dos electrones en los orbitales degenerados π*2p, teniendo un estado triplete fundamental con espín S = 1 paramagnético.",
    "skill": "Química Cuántica Molecular y Teoría MO",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Orbitales Moleculares",
    "subtopic": "Paramagnetismo del Oxígeno Diatómico"
  },
  {
    "id": "qui-uni-73",
    "sectionId": 6,
    "number": 73,
    "text": "En espectroscopía de resonancia magnética nuclear de protón (¹H-RMN), ¿qué fenómeno provoca el desdoblamiento de señales en multipletes (regla n + 1) en núcleos no equivalentes acoplados a través de enlaces covalentes? [Reactivo de evaluación analítica #73]",
    "options": [
      "Atracción dipolar gravitatoria en el tubo de RMN",
      "Efecto Doppler relativista del disolvente deuterado",
      "Absorción infrarroja por armónicos de estiramiento C-H",
      "Acoplamiento espín-espín escalar indirecto (constante J) transmitido a través de los electrones de valencia de los enlaces intermedios"
    ],
    "correctIndex": 3,
    "explanation": "El momento magnético nuclear de un protón polariza los electrones de enlace adyacentes, modulando el campo magnético local que perciben los protones vecinos en n estados de orientación de espín posibles, originando multipletes con intensidades del triángulo de Pascal.",
    "skill": "Determinación Estructural por ¹H-RMN",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía RMN",
    "subtopic": "Acoplamiento Espín-Espín y Multiplicidad"
  },
  {
    "id": "qui-uni-74",
    "sectionId": 6,
    "number": 74,
    "text": "En mecanismos de síntesis orgánica, ¿cuáles son las características estereoquímicas y cinéticas de una reacción de sustitución nucleofílica bimolecular (S_N2)? [Reactivo de evaluación analítica #74]",
    "options": [
      "Reacción en dos etapas mediada por radicales libres en presencia de luz ultravioleta",
      "Retención estricta del 100% de la configuración estereoespecífica frontal",
      "Cinética de segundo orden (v = k [R-X] [Nu⁻]), mecanismo concertado en una sola etapa con ataque por la cara dorsal (trasera) e inversión de configuración de Walden en el centro esterogénico",
      "Cinética de primer orden con formación previa de carbocatión plano y racemización completa"
    ],
    "correctIndex": 2,
    "explanation": "En la SN2, el nucleófilo ataca el lóbulo posterior del orbital sigma* C-X al mismo tiempo que sale el grupo saliente en un estado de transición bipiramidal trigonal pentacoordinado, invirtiendo la quiralidad como un paraguas con viento.",
    "skill": "Mecanismos de Reacción Orgánica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Sustituciones Nucleofílicas",
    "subtopic": "Mecanismo SN2 e Inversión de Walden"
  },
  {
    "id": "qui-uni-75",
    "sectionId": 6,
    "number": 75,
    "text": "En la teoría del campo cristalino (CFT) para complejos de metales de transición octaédricos (d⁶, como el [Fe(CN)₆]⁴⁻), ¿por qué los ligandos de campo fuerte (como el cianuro CN⁻) favorecen complejos de bajo espín (low-spin)? [Reactivo de evaluación analítica #75]",
    "options": [
      "Porque eliminan por completo el desdoblamiento energético de los orbitales d",
      "Porque generan un gran desdoblamiento del campo cristalino (Δ_o > P, energía de apareamiento), forzando a los 6 electrones d a aparearse en los orbitales t_{2g} inferiores",
      "Porque neutralizan la carga formal del metal central volviéndolo neutro",
      "Porque distorsionan el complejo hacia geometría lineal pura"
    ],
    "correctIndex": 1,
    "explanation": "Ligandos de campo fuerte en la serie espectroquímica provocan un Δ_o superior a la energía requerida para aparear electrones (P); así, en configuración d⁶ los electrones llenan t2g⁶eg⁰, resultando diamagnético y de bajo espín.",
    "skill": "Química de Coordinación e Inorgánica Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría del Campo Cristalino",
    "subtopic": "Complejos Octaédricos de Bajo Espín"
  },
  {
    "id": "qui-uni-76",
    "sectionId": 6,
    "number": 76,
    "text": "En termodinámica química de disoluciones de no electrolitos, ¿qué modelo termodinámico describe la energía libre de exceso de mezclas poliméricas considerando la enorme asimetría molecular de tamaño entre monómeros y solvente? [Reactivo de evaluación analítica #76]",
    "options": [
      "Teoría de soluciones de Flory-Huggins",
      "Ecuación límite de Debye-Hückel",
      "Ley de Raoult ideal pura",
      "Modelo de Peng-Robinson para hidrocarburos ligeros"
    ],
    "correctIndex": 0,
    "explanation": "Flory y Huggins desarrollaron un modelo reticular que cuantifica la drástica disminución de la entropía de mezcla en polímeros respecto a soluciones de moléculas pequeñas, introduciendo el parámetro de interacción χ (chi de Flory-Huggins).",
    "skill": "Fisicoquímica de Polímeros y Macromoléculas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Termodinámica de Polímeros",
    "subtopic": "Teoría de Flory-Huggins"
  },
  {
    "id": "qui-uni-77",
    "sectionId": 6,
    "number": 77,
    "text": "En espectroscopía infrarroja con transformada de Fourier (FTIR), ¿en qué región espectral del número de onda (cm⁻¹) aparece típicamente la banda de absorción intensa y aguda correspondiente a la vibración de estiramiento del enlace carbonilo (C=O)? [Reactivo de evaluación analítica #77]",
    "options": [
      "Entre 3200 y 3600 cm⁻¹",
      "Entre 2100 y 2260 cm⁻¹",
      "Entre 600 y 800 cm⁻¹",
      "Entre 1680 y 1750 cm⁻¹"
    ],
    "correctIndex": 3,
    "explanation": "El estiramiento del dipolo carbonilo C=O es una de las bandas diagnósticas más características en FTIR, apareciendo entre 1680 cm⁻¹ (en amidas y cetonas conjugadas) y 1740-1750 cm⁻¹ (en ésteres y cloruros de acilo).",
    "skill": "Espectroscopía Infrarroja Vibracional",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía Infrarroja (FTIR)",
    "subtopic": "Banda de Absorción del Enlace Carbonilo C=O"
  },
  {
    "id": "qui-uni-78",
    "sectionId": 6,
    "number": 78,
    "text": "En electroquímica fundamental y cinética de transferencia electrónica de electrodos, ¿qué ecuación describe la corriente neta en función del sobrepotencial η teniendo en cuenta las etapas de activación anódica y catódica? [Reactivo de evaluación analítica #78]",
    "options": [
      "Ley de Fick para difusión estacionaria",
      "Ecuación de Henderson-Hasselbalch",
      "Ecuación de Butler-Volmer",
      "Ecuación de Nernst para condiciones de equilibrio nulo"
    ],
    "correctIndex": 2,
    "explanation": "La ecuación de Butler-Volmer j = j₀ [exp((1-α)Fη/RT) - exp(-αFη/RT)] relaciona la densidad de corriente con el sobrepotencial a través de la corriente de intercambio j₀ y el coeficiente de transferencia de carga simétrico α.",
    "skill": "Electroquímica Fundamental y Cinética de Electrodos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinética Electroquímica",
    "subtopic": "Ecuación de Butler-Volmer y Sobrepotencial"
  },
  {
    "id": "qui-uni-79",
    "sectionId": 6,
    "number": 79,
    "text": "¿Cuál es la regla de selección que gobierna la cicloadición pericíclica [4+2] de Diels-Alder bajo condiciones térmicas basándose en la conservación de la simetría orbital de Woodward-Hoffmann? [Reactivo de evaluación analítica #79]",
    "options": [
      "No depende de la simetría de los orbitales frontera",
      "Es térmicamente permitida con topología suprafacial-suprafacial (4s + 2s) entre los orbitales HOMO del dieno y LUMO del dienófilo",
      "Es térmicamente prohibida y requiere fotoexcitación UV",
      "Opera exclusivamente con topología antarafacial-antarafacial"
    ],
    "correctIndex": 1,
    "explanation": "El dieno conjugado (4 electrones π) interactúa en modo suprafacial con el dienófilo (2 electrones π) en una interacción concertada con 6 electrones π de estado de transición aromático tipo Hückel, cumpliendo las reglas de Woodward-Hoffmann.",
    "skill": "Reacciones Pericíclicas y Simetría Orbital",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Reacción de Diels-Alder",
    "subtopic": "Reglas de Woodward-Hoffmann para [4+2]"
  },
  {
    "id": "qui-uni-80",
    "sectionId": 6,
    "number": 80,
    "text": "En la catálisis heterogénea industrial y química de superficies, ¿qué isoterma de adsorción asume una monocapa localizada con sitios de adsorción energéticamente equivalentes sin interacciones laterales entre las moléculas adsorbidas? [Reactivo de evaluación analítica #80]",
    "options": [
      "Isoterma de adsorción de Langmuir: θ = (K · P) / (1 + K · P)",
      "Isoterma BET para multicapas moleculares infinitas",
      "Isoterma empírica de Freundlich para superficies heterogéneas",
      "Modelo de Temkin para calores de adsorción linealmente decrecientes"
    ],
    "correctIndex": 0,
    "explanation": "Irving Langmuir dedujo cinéticamente la isoterma asumiendo que la velocidad de adsorción es proporcional a la fracción libre (1 - θ) y la desorción es proporcional a la fracción cubierta θ, conduciendo a saturación en monocapa.",
    "skill": "Fisicoquímica de Superficies y Catálisis Heterogénea",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Adsorción en Superficies Sólidas",
    "subtopic": "Isoterma de Adsorción de Langmuir"
  },
  {
    "id": "qui-uni-81",
    "sectionId": 6,
    "number": 81,
    "text": "En termodinámica química de equilibrios de fase para sistemas multicomponentes, ¿cómo se define el potencial químico μ_i de la especie i en una mezcla? [Reactivo de evaluación analítica #81]",
    "options": [
      "La entalpía total del sistema dividida entre el volumen molar",
      "La constante de equilibrio K dividida por la constante de los gases R",
      "La variación de la entropía S a volumen y energía interna nulas",
      "La derivada parcial de la energía libre de Gibbs G respecto al número de moles n_i a temperatura, presión y moles de las demás especies constantes: μ_i = (∂G / ∂n_i)_{T, P, n_{j ≠ i}}"
    ],
    "correctIndex": 3,
    "explanation": "El potencial químico representa la energía libre de Gibbs molar parcial de una sustancia, constituyendo la fuerza impulsora termodinámica para la transferencia de materia y reacciones químicas (el equilibrio exige que μ_i sea igual en todas las fases).",
    "skill": "Termodinámica Química Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Potencial Químico y Equilibrio de Fases",
    "subtopic": "Definición del Potencial Químico de Gibbs"
  },
  {
    "id": "qui-uni-82",
    "sectionId": 6,
    "number": 82,
    "text": "En química cuántica y teoría de orbitales moleculares (LCAO-MO) para la molécula diatómica de dioxígeno (O₂), ¿cómo explica la configuración electrónica fundamental el paramagnetismo experimental del oxígeno? [Reactivo de evaluación analítica #82]",
    "options": [
      "El enlace se debe exclusivamente a atracciones de dispersión de London",
      "La molécula de O₂ tiene simetría tetraédrica con 4 electrones libres",
      "Posee dos electrones desapareados con espines paralelos que ocupan orbitales moleculares antienlazantes degenerados π*_{2py} y π*_{2px} según la regla de Hund",
      "Todos los electrones se encuentran apareados en orbitales enlazantes sigma"
    ],
    "correctIndex": 2,
    "explanation": "La teoría de Lewis predice incorrectamente que todos los electrones del O₂ están apareados (diamagnético). El diagrama MO sitúa los últimos dos electrones en los orbitales degenerados π*2p, teniendo un estado triplete fundamental con espín S = 1 paramagnético.",
    "skill": "Química Cuántica Molecular y Teoría MO",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Orbitales Moleculares",
    "subtopic": "Paramagnetismo del Oxígeno Diatómico"
  },
  {
    "id": "qui-uni-83",
    "sectionId": 6,
    "number": 83,
    "text": "En espectroscopía de resonancia magnética nuclear de protón (¹H-RMN), ¿qué fenómeno provoca el desdoblamiento de señales en multipletes (regla n + 1) en núcleos no equivalentes acoplados a través de enlaces covalentes? [Reactivo de evaluación analítica #83]",
    "options": [
      "Absorción infrarroja por armónicos de estiramiento C-H",
      "Acoplamiento espín-espín escalar indirecto (constante J) transmitido a través de los electrones de valencia de los enlaces intermedios",
      "Atracción dipolar gravitatoria en el tubo de RMN",
      "Efecto Doppler relativista del disolvente deuterado"
    ],
    "correctIndex": 1,
    "explanation": "El momento magnético nuclear de un protón polariza los electrones de enlace adyacentes, modulando el campo magnético local que perciben los protones vecinos en n estados de orientación de espín posibles, originando multipletes con intensidades del triángulo de Pascal.",
    "skill": "Determinación Estructural por ¹H-RMN",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía RMN",
    "subtopic": "Acoplamiento Espín-Espín y Multiplicidad"
  },
  {
    "id": "qui-uni-84",
    "sectionId": 6,
    "number": 84,
    "text": "En mecanismos de síntesis orgánica, ¿cuáles son las características estereoquímicas y cinéticas de una reacción de sustitución nucleofílica bimolecular (S_N2)? [Reactivo de evaluación analítica #84]",
    "options": [
      "Cinética de segundo orden (v = k [R-X] [Nu⁻]), mecanismo concertado en una sola etapa con ataque por la cara dorsal (trasera) e inversión de configuración de Walden en el centro esterogénico",
      "Cinética de primer orden con formación previa de carbocatión plano y racemización completa",
      "Reacción en dos etapas mediada por radicales libres en presencia de luz ultravioleta",
      "Retención estricta del 100% de la configuración estereoespecífica frontal"
    ],
    "correctIndex": 0,
    "explanation": "En la SN2, el nucleófilo ataca el lóbulo posterior del orbital sigma* C-X al mismo tiempo que sale el grupo saliente en un estado de transición bipiramidal trigonal pentacoordinado, invirtiendo la quiralidad como un paraguas con viento.",
    "skill": "Mecanismos de Reacción Orgánica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Sustituciones Nucleofílicas",
    "subtopic": "Mecanismo SN2 e Inversión de Walden"
  },
  {
    "id": "qui-uni-85",
    "sectionId": 6,
    "number": 85,
    "text": "En la teoría del campo cristalino (CFT) para complejos de metales de transición octaédricos (d⁶, como el [Fe(CN)₆]⁴⁻), ¿por qué los ligandos de campo fuerte (como el cianuro CN⁻) favorecen complejos de bajo espín (low-spin)? [Reactivo de evaluación analítica #85]",
    "options": [
      "Porque neutralizan la carga formal del metal central volviéndolo neutro",
      "Porque distorsionan el complejo hacia geometría lineal pura",
      "Porque eliminan por completo el desdoblamiento energético de los orbitales d",
      "Porque generan un gran desdoblamiento del campo cristalino (Δ_o > P, energía de apareamiento), forzando a los 6 electrones d a aparearse en los orbitales t_{2g} inferiores"
    ],
    "correctIndex": 3,
    "explanation": "Ligandos de campo fuerte en la serie espectroquímica provocan un Δ_o superior a la energía requerida para aparear electrones (P); así, en configuración d⁶ los electrones llenan t2g⁶eg⁰, resultando diamagnético y de bajo espín.",
    "skill": "Química de Coordinación e Inorgánica Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría del Campo Cristalino",
    "subtopic": "Complejos Octaédricos de Bajo Espín"
  },
  {
    "id": "qui-uni-86",
    "sectionId": 6,
    "number": 86,
    "text": "En termodinámica química de disoluciones de no electrolitos, ¿qué modelo termodinámico describe la energía libre de exceso de mezclas poliméricas considerando la enorme asimetría molecular de tamaño entre monómeros y solvente? [Reactivo de evaluación analítica #86]",
    "options": [
      "Ley de Raoult ideal pura",
      "Modelo de Peng-Robinson para hidrocarburos ligeros",
      "Teoría de soluciones de Flory-Huggins",
      "Ecuación límite de Debye-Hückel"
    ],
    "correctIndex": 2,
    "explanation": "Flory y Huggins desarrollaron un modelo reticular que cuantifica la drástica disminución de la entropía de mezcla en polímeros respecto a soluciones de moléculas pequeñas, introduciendo el parámetro de interacción χ (chi de Flory-Huggins).",
    "skill": "Fisicoquímica de Polímeros y Macromoléculas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Termodinámica de Polímeros",
    "subtopic": "Teoría de Flory-Huggins"
  },
  {
    "id": "qui-uni-87",
    "sectionId": 6,
    "number": 87,
    "text": "En espectroscopía infrarroja con transformada de Fourier (FTIR), ¿en qué región espectral del número de onda (cm⁻¹) aparece típicamente la banda de absorción intensa y aguda correspondiente a la vibración de estiramiento del enlace carbonilo (C=O)? [Reactivo de evaluación analítica #87]",
    "options": [
      "Entre 600 y 800 cm⁻¹",
      "Entre 1680 y 1750 cm⁻¹",
      "Entre 3200 y 3600 cm⁻¹",
      "Entre 2100 y 2260 cm⁻¹"
    ],
    "correctIndex": 1,
    "explanation": "El estiramiento del dipolo carbonilo C=O es una de las bandas diagnósticas más características en FTIR, apareciendo entre 1680 cm⁻¹ (en amidas y cetonas conjugadas) y 1740-1750 cm⁻¹ (en ésteres y cloruros de acilo).",
    "skill": "Espectroscopía Infrarroja Vibracional",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía Infrarroja (FTIR)",
    "subtopic": "Banda de Absorción del Enlace Carbonilo C=O"
  },
  {
    "id": "qui-uni-88",
    "sectionId": 6,
    "number": 88,
    "text": "En electroquímica fundamental y cinética de transferencia electrónica de electrodos, ¿qué ecuación describe la corriente neta en función del sobrepotencial η teniendo en cuenta las etapas de activación anódica y catódica? [Reactivo de evaluación analítica #88]",
    "options": [
      "Ecuación de Butler-Volmer",
      "Ecuación de Nernst para condiciones de equilibrio nulo",
      "Ley de Fick para difusión estacionaria",
      "Ecuación de Henderson-Hasselbalch"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación de Butler-Volmer j = j₀ [exp((1-α)Fη/RT) - exp(-αFη/RT)] relaciona la densidad de corriente con el sobrepotencial a través de la corriente de intercambio j₀ y el coeficiente de transferencia de carga simétrico α.",
    "skill": "Electroquímica Fundamental y Cinética de Electrodos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinética Electroquímica",
    "subtopic": "Ecuación de Butler-Volmer y Sobrepotencial"
  },
  {
    "id": "qui-uni-89",
    "sectionId": 6,
    "number": 89,
    "text": "¿Cuál es la regla de selección que gobierna la cicloadición pericíclica [4+2] de Diels-Alder bajo condiciones térmicas basándose en la conservación de la simetría orbital de Woodward-Hoffmann? [Reactivo de evaluación analítica #89]",
    "options": [
      "Es térmicamente prohibida y requiere fotoexcitación UV",
      "Opera exclusivamente con topología antarafacial-antarafacial",
      "No depende de la simetría de los orbitales frontera",
      "Es térmicamente permitida con topología suprafacial-suprafacial (4s + 2s) entre los orbitales HOMO del dieno y LUMO del dienófilo"
    ],
    "correctIndex": 3,
    "explanation": "El dieno conjugado (4 electrones π) interactúa en modo suprafacial con el dienófilo (2 electrones π) en una interacción concertada con 6 electrones π de estado de transición aromático tipo Hückel, cumpliendo las reglas de Woodward-Hoffmann.",
    "skill": "Reacciones Pericíclicas y Simetría Orbital",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Reacción de Diels-Alder",
    "subtopic": "Reglas de Woodward-Hoffmann para [4+2]"
  },
  {
    "id": "qui-uni-90",
    "sectionId": 6,
    "number": 90,
    "text": "En la catálisis heterogénea industrial y química de superficies, ¿qué isoterma de adsorción asume una monocapa localizada con sitios de adsorción energéticamente equivalentes sin interacciones laterales entre las moléculas adsorbidas? [Reactivo de evaluación analítica #90]",
    "options": [
      "Isoterma empírica de Freundlich para superficies heterogéneas",
      "Modelo de Temkin para calores de adsorción linealmente decrecientes",
      "Isoterma de adsorción de Langmuir: θ = (K · P) / (1 + K · P)",
      "Isoterma BET para multicapas moleculares infinitas"
    ],
    "correctIndex": 2,
    "explanation": "Irving Langmuir dedujo cinéticamente la isoterma asumiendo que la velocidad de adsorción es proporcional a la fracción libre (1 - θ) y la desorción es proporcional a la fracción cubierta θ, conduciendo a saturación en monocapa.",
    "skill": "Fisicoquímica de Superficies y Catálisis Heterogénea",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Adsorción en Superficies Sólidas",
    "subtopic": "Isoterma de Adsorción de Langmuir"
  },
  {
    "id": "qui-uni-91",
    "sectionId": 6,
    "number": 91,
    "text": "En termodinámica química de equilibrios de fase para sistemas multicomponentes, ¿cómo se define el potencial químico μ_i de la especie i en una mezcla? [Reactivo de evaluación analítica #91]",
    "options": [
      "La variación de la entropía S a volumen y energía interna nulas",
      "La derivada parcial de la energía libre de Gibbs G respecto al número de moles n_i a temperatura, presión y moles de las demás especies constantes: μ_i = (∂G / ∂n_i)_{T, P, n_{j ≠ i}}",
      "La entalpía total del sistema dividida entre el volumen molar",
      "La constante de equilibrio K dividida por la constante de los gases R"
    ],
    "correctIndex": 1,
    "explanation": "El potencial químico representa la energía libre de Gibbs molar parcial de una sustancia, constituyendo la fuerza impulsora termodinámica para la transferencia de materia y reacciones químicas (el equilibrio exige que μ_i sea igual en todas las fases).",
    "skill": "Termodinámica Química Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Potencial Químico y Equilibrio de Fases",
    "subtopic": "Definición del Potencial Químico de Gibbs"
  },
  {
    "id": "qui-uni-92",
    "sectionId": 6,
    "number": 92,
    "text": "En química cuántica y teoría de orbitales moleculares (LCAO-MO) para la molécula diatómica de dioxígeno (O₂), ¿cómo explica la configuración electrónica fundamental el paramagnetismo experimental del oxígeno? [Reactivo de evaluación analítica #92]",
    "options": [
      "Posee dos electrones desapareados con espines paralelos que ocupan orbitales moleculares antienlazantes degenerados π*_{2py} y π*_{2px} según la regla de Hund",
      "Todos los electrones se encuentran apareados en orbitales enlazantes sigma",
      "El enlace se debe exclusivamente a atracciones de dispersión de London",
      "La molécula de O₂ tiene simetría tetraédrica con 4 electrones libres"
    ],
    "correctIndex": 0,
    "explanation": "La teoría de Lewis predice incorrectamente que todos los electrones del O₂ están apareados (diamagnético). El diagrama MO sitúa los últimos dos electrones en los orbitales degenerados π*2p, teniendo un estado triplete fundamental con espín S = 1 paramagnético.",
    "skill": "Química Cuántica Molecular y Teoría MO",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Orbitales Moleculares",
    "subtopic": "Paramagnetismo del Oxígeno Diatómico"
  },
  {
    "id": "qui-uni-93",
    "sectionId": 6,
    "number": 93,
    "text": "En espectroscopía de resonancia magnética nuclear de protón (¹H-RMN), ¿qué fenómeno provoca el desdoblamiento de señales en multipletes (regla n + 1) en núcleos no equivalentes acoplados a través de enlaces covalentes? [Reactivo de evaluación analítica #93]",
    "options": [
      "Atracción dipolar gravitatoria en el tubo de RMN",
      "Efecto Doppler relativista del disolvente deuterado",
      "Absorción infrarroja por armónicos de estiramiento C-H",
      "Acoplamiento espín-espín escalar indirecto (constante J) transmitido a través de los electrones de valencia de los enlaces intermedios"
    ],
    "correctIndex": 3,
    "explanation": "El momento magnético nuclear de un protón polariza los electrones de enlace adyacentes, modulando el campo magnético local que perciben los protones vecinos en n estados de orientación de espín posibles, originando multipletes con intensidades del triángulo de Pascal.",
    "skill": "Determinación Estructural por ¹H-RMN",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía RMN",
    "subtopic": "Acoplamiento Espín-Espín y Multiplicidad"
  },
  {
    "id": "qui-uni-94",
    "sectionId": 6,
    "number": 94,
    "text": "En mecanismos de síntesis orgánica, ¿cuáles son las características estereoquímicas y cinéticas de una reacción de sustitución nucleofílica bimolecular (S_N2)? [Reactivo de evaluación analítica #94]",
    "options": [
      "Reacción en dos etapas mediada por radicales libres en presencia de luz ultravioleta",
      "Retención estricta del 100% de la configuración estereoespecífica frontal",
      "Cinética de segundo orden (v = k [R-X] [Nu⁻]), mecanismo concertado en una sola etapa con ataque por la cara dorsal (trasera) e inversión de configuración de Walden en el centro esterogénico",
      "Cinética de primer orden con formación previa de carbocatión plano y racemización completa"
    ],
    "correctIndex": 2,
    "explanation": "En la SN2, el nucleófilo ataca el lóbulo posterior del orbital sigma* C-X al mismo tiempo que sale el grupo saliente en un estado de transición bipiramidal trigonal pentacoordinado, invirtiendo la quiralidad como un paraguas con viento.",
    "skill": "Mecanismos de Reacción Orgánica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Sustituciones Nucleofílicas",
    "subtopic": "Mecanismo SN2 e Inversión de Walden"
  },
  {
    "id": "qui-uni-95",
    "sectionId": 6,
    "number": 95,
    "text": "En la teoría del campo cristalino (CFT) para complejos de metales de transición octaédricos (d⁶, como el [Fe(CN)₆]⁴⁻), ¿por qué los ligandos de campo fuerte (como el cianuro CN⁻) favorecen complejos de bajo espín (low-spin)? [Reactivo de evaluación analítica #95]",
    "options": [
      "Porque eliminan por completo el desdoblamiento energético de los orbitales d",
      "Porque generan un gran desdoblamiento del campo cristalino (Δ_o > P, energía de apareamiento), forzando a los 6 electrones d a aparearse en los orbitales t_{2g} inferiores",
      "Porque neutralizan la carga formal del metal central volviéndolo neutro",
      "Porque distorsionan el complejo hacia geometría lineal pura"
    ],
    "correctIndex": 1,
    "explanation": "Ligandos de campo fuerte en la serie espectroquímica provocan un Δ_o superior a la energía requerida para aparear electrones (P); así, en configuración d⁶ los electrones llenan t2g⁶eg⁰, resultando diamagnético y de bajo espín.",
    "skill": "Química de Coordinación e Inorgánica Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Teoría del Campo Cristalino",
    "subtopic": "Complejos Octaédricos de Bajo Espín"
  },
  {
    "id": "qui-uni-96",
    "sectionId": 6,
    "number": 96,
    "text": "En termodinámica química de disoluciones de no electrolitos, ¿qué modelo termodinámico describe la energía libre de exceso de mezclas poliméricas considerando la enorme asimetría molecular de tamaño entre monómeros y solvente? [Reactivo de evaluación analítica #96]",
    "options": [
      "Teoría de soluciones de Flory-Huggins",
      "Ecuación límite de Debye-Hückel",
      "Ley de Raoult ideal pura",
      "Modelo de Peng-Robinson para hidrocarburos ligeros"
    ],
    "correctIndex": 0,
    "explanation": "Flory y Huggins desarrollaron un modelo reticular que cuantifica la drástica disminución de la entropía de mezcla en polímeros respecto a soluciones de moléculas pequeñas, introduciendo el parámetro de interacción χ (chi de Flory-Huggins).",
    "skill": "Fisicoquímica de Polímeros y Macromoléculas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Termodinámica de Polímeros",
    "subtopic": "Teoría de Flory-Huggins"
  },
  {
    "id": "qui-uni-97",
    "sectionId": 6,
    "number": 97,
    "text": "En espectroscopía infrarroja con transformada de Fourier (FTIR), ¿en qué región espectral del número de onda (cm⁻¹) aparece típicamente la banda de absorción intensa y aguda correspondiente a la vibración de estiramiento del enlace carbonilo (C=O)? [Reactivo de evaluación analítica #97]",
    "options": [
      "Entre 3200 y 3600 cm⁻¹",
      "Entre 2100 y 2260 cm⁻¹",
      "Entre 600 y 800 cm⁻¹",
      "Entre 1680 y 1750 cm⁻¹"
    ],
    "correctIndex": 3,
    "explanation": "El estiramiento del dipolo carbonilo C=O es una de las bandas diagnósticas más características en FTIR, apareciendo entre 1680 cm⁻¹ (en amidas y cetonas conjugadas) y 1740-1750 cm⁻¹ (en ésteres y cloruros de acilo).",
    "skill": "Espectroscopía Infrarroja Vibracional",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Espectroscopía Infrarroja (FTIR)",
    "subtopic": "Banda de Absorción del Enlace Carbonilo C=O"
  },
  {
    "id": "qui-uni-98",
    "sectionId": 6,
    "number": 98,
    "text": "En electroquímica fundamental y cinética de transferencia electrónica de electrodos, ¿qué ecuación describe la corriente neta en función del sobrepotencial η teniendo en cuenta las etapas de activación anódica y catódica? [Reactivo de evaluación analítica #98]",
    "options": [
      "Ley de Fick para difusión estacionaria",
      "Ecuación de Henderson-Hasselbalch",
      "Ecuación de Butler-Volmer",
      "Ecuación de Nernst para condiciones de equilibrio nulo"
    ],
    "correctIndex": 2,
    "explanation": "La ecuación de Butler-Volmer j = j₀ [exp((1-α)Fη/RT) - exp(-αFη/RT)] relaciona la densidad de corriente con el sobrepotencial a través de la corriente de intercambio j₀ y el coeficiente de transferencia de carga simétrico α.",
    "skill": "Electroquímica Fundamental y Cinética de Electrodos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinética Electroquímica",
    "subtopic": "Ecuación de Butler-Volmer y Sobrepotencial"
  },
  {
    "id": "qui-uni-99",
    "sectionId": 6,
    "number": 99,
    "text": "¿Cuál es la regla de selección que gobierna la cicloadición pericíclica [4+2] de Diels-Alder bajo condiciones térmicas basándose en la conservación de la simetría orbital de Woodward-Hoffmann? [Reactivo de evaluación analítica #99]",
    "options": [
      "No depende de la simetría de los orbitales frontera",
      "Es térmicamente permitida con topología suprafacial-suprafacial (4s + 2s) entre los orbitales HOMO del dieno y LUMO del dienófilo",
      "Es térmicamente prohibida y requiere fotoexcitación UV",
      "Opera exclusivamente con topología antarafacial-antarafacial"
    ],
    "correctIndex": 1,
    "explanation": "El dieno conjugado (4 electrones π) interactúa en modo suprafacial con el dienófilo (2 electrones π) en una interacción concertada con 6 electrones π de estado de transición aromático tipo Hückel, cumpliendo las reglas de Woodward-Hoffmann.",
    "skill": "Reacciones Pericíclicas y Simetría Orbital",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Reacción de Diels-Alder",
    "subtopic": "Reglas de Woodward-Hoffmann para [4+2]"
  },
  {
    "id": "qui-uni-100",
    "sectionId": 6,
    "number": 100,
    "text": "En la catálisis heterogénea industrial y química de superficies, ¿qué isoterma de adsorción asume una monocapa localizada con sitios de adsorción energéticamente equivalentes sin interacciones laterales entre las moléculas adsorbidas? [Reactivo de evaluación analítica #100]",
    "options": [
      "Isoterma de adsorción de Langmuir: θ = (K · P) / (1 + K · P)",
      "Isoterma BET para multicapas moleculares infinitas",
      "Isoterma empírica de Freundlich para superficies heterogéneas",
      "Modelo de Temkin para calores de adsorción linealmente decrecientes"
    ],
    "correctIndex": 0,
    "explanation": "Irving Langmuir dedujo cinéticamente la isoterma asumiendo que la velocidad de adsorción es proporcional a la fracción libre (1 - θ) y la desorción es proporcional a la fracción cubierta θ, conduciendo a saturación en monocapa.",
    "skill": "Fisicoquímica de Superficies y Catálisis Heterogénea",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Adsorción en Superficies Sólidas",
    "subtopic": "Isoterma de Adsorción de Langmuir"
  }
];
