import { Question } from '../../../types';

export const QUIMICA_BACHILLERATO: Question[] = [
  {
    "id": "qui-bac-1",
    "sectionId": 6,
    "number": 41,
    "text": "En una reacción endotérmica donde ΔH° > 0 y ΔS° > 0, ¿bajo qué condiciones de temperatura el proceso es termodinámicamente espontáneo según la ecuación de Gibbs (ΔG° = ΔH° - TΔS°)?",
    "options": [
      "A cualquier temperatura",
      "Solo a temperaturas suficientemente altas (T > ΔH° / ΔS°)",
      "Solo a temperaturas muy bajas cerca de 0 K",
      "Nunca es espontáneo"
    ],
    "correctIndex": 1,
    "explanation": "Para que ΔG° < 0 con ΔH° > 0 y ΔS° > 0, el término entálpico negativo (-TΔS°) debe superar en magnitud al término endotérmico positivo (+ΔH°), lo cual ocurre a altas temperaturas.",
    "skill": "Termodinámica Química y Criterio de Espontaneidad de Gibbs",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Termoquímica",
    "subtopic": "Energía Libre de Gibbs"
  },
  {
    "id": "qui-bac-2",
    "sectionId": 6,
    "number": 42,
    "text": "¿Cuál es la hibridación del átomo de carbono central en la molécula de etino o acetileno (H-C≡C-H)?",
    "options": [
      "sp³",
      "sp²",
      "sp",
      "dsp³"
    ],
    "correctIndex": 2,
    "explanation": "En el enlace triple, cada carbono forma dos orbitales híbridos sp lineales (geometría de 180°) para un enlace sigma C-H y un sigma C-C, y dos orbitales p puros que forman dos enlaces pi perpendiculares.",
    "skill": "Hibridación de Orbitales y Geometría Molecular",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Enlace Químico Avanzado",
    "subtopic": "Hibridación sp"
  },
  {
    "id": "qui-bac-3",
    "sectionId": 6,
    "number": 43,
    "text": "¿Cuál es el pH de una solución acuosa 0.01 M de ácido clorhídrico (HCl), considerando disociación ácida completa?",
    "options": [
      "1.0",
      "2.0",
      "4.0",
      "12.0"
    ],
    "correctIndex": 1,
    "explanation": "HCl es un ácido fuerte monoprótico: [H⁺] = 0.01 M = 10⁻² M. pH = -log[H⁺] = -log(10⁻²) = 2.0.",
    "skill": "Cálculo de pH en Ácidos Fuertes",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Iónico",
    "subtopic": "Cálculo de pH"
  },
  {
    "id": "qui-bac-4",
    "sectionId": 6,
    "number": 44,
    "text": "¿Qué ley termoquímica establece que la variación de entalpía total de una reacción química es constante e independiente de la ruta o etapas intermedias seguidas (Ley de aditividad de entalpías)?",
    "options": [
      "Ley de Hess",
      "Ley de Raoult",
      "Ley de Henry",
      "Ley de Kirchhoff"
    ],
    "correctIndex": 0,
    "explanation": "La Ley de Germain Hess se fundamenta en que la entalpía es una función de estado termodinámica: el ΔH total depende únicamente de los estados inicial y final.",
    "skill": "Termoquímica y Ley de Hess",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Termoquímica",
    "subtopic": "Ley de Hess"
  },
  {
    "id": "qui-bac-5",
    "sectionId": 6,
    "number": 45,
    "text": "En una celda electroquímica galvánica (Pila Daniell), ¿en qué electrodo ocurre la oxidación y cuál es su signo de polaridad?",
    "options": [
      "En el cátodo, con polaridad negativa",
      "En el ánodo, con polaridad negativa en celdas galvánicas",
      "En el cátodo, con polaridad positiva",
      "En el puente salino"
    ],
    "correctIndex": 1,
    "explanation": "En toda celda electroquímica, la oxidación ocurre en el ánodo. En una celda galvánica espontánea, el ánodo es el polo negativo porque libera electrones hacia el circuito externo.",
    "skill": "Electroquímica y Celdas Galvánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electroquímica",
    "subtopic": "Ánodo y Cátodo en Celdas Galvánicas"
  },
  {
    "id": "qui-bac-6",
    "sectionId": 6,
    "number": 46,
    "text": "¿Cuál es el producto de solubilidad K_ps del cloruro de plata (AgCl) si su solubilidad molar en agua pura a 25 °C es s = 1.34 × 10⁻⁵ mol/L?",
    "options": [
      "1.34 × 10⁻⁵",
      "1.80 × 10⁻¹⁰",
      "2.68 × 10⁻¹⁰",
      "3.60 × 10⁻¹⁵"
    ],
    "correctIndex": 1,
    "explanation": "AgCl(s) ⇌ Ag⁺(ac) + Cl⁻(ac). K_ps = [Ag⁺][Cl⁻] = s · s = s² = (1.34 × 10⁻⁵)² ≈ 1.80 × 10⁻¹⁰.",
    "skill": "Equilibrio de Precipitación y Kps",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Químico",
    "subtopic": "Producto de Solubilidad"
  },
  {
    "id": "qui-bac-7",
    "sectionId": 6,
    "number": 47,
    "text": "¿Cuál es la ecuación de la constante de equilibrio K_c para la síntesis de Haber-Bosch: N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)?",
    "options": [
      "K_c = [N₂][H₂]³ / [NH₃]²",
      "K_c = [NH₃]² / ([N₂] · [H₂]³)",
      "K_c = [NH₃] / ([N₂] · [H₂])",
      "K_c = 2[NH₃] / ([N₂] + 3[H₂])"
    ],
    "correctIndex": 1,
    "explanation": "Por la Ley de Acción de Masas de Guldberg y Waage, K_c es el producto de las concentraciones de productos elevadas a sus coeficientes dividido por el de reactivos elevados a sus coeficientes.",
    "skill": "Expresión de Constantes de Equilibrio",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Químico",
    "subtopic": "Ley de Acción de Masas"
  },
  {
    "id": "qui-bac-8",
    "sectionId": 6,
    "number": 48,
    "text": "¿Qué tipo de isomería presentan el butan-1-ol y el etoxietano (éter dietílico), que comparten la misma fórmula molecular C₄H₁₀O pero pertenecen a familias químicas distintas?",
    "options": [
      "Isomería de cadena",
      "Isomería de posición",
      "Isomería de función (o de grupo funcional)",
      "Enantiomería"
    ],
    "correctIndex": 2,
    "explanation": "Poseen la misma fórmula molecular (C₄H₁₀O) pero grupos funcionales distintos: uno es un alcohol (-OH) y el otro un éter (-O-), por lo que son isómeros de función.",
    "skill": "Isomería Estructural en Química Orgánica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química Orgánica",
    "subtopic": "Isómeros de Función"
  },
  {
    "id": "qui-bac-9",
    "sectionId": 6,
    "number": 49,
    "text": "¿Cuál es el volumen molar que ocupa exactamente 1 mol de cualquier gas ideal en condiciones normales de presión y temperatura (CNPT: 0 °C y 1 atm)?",
    "options": [
      "11.2 litros",
      "22.4 litros",
      "24.5 litros",
      "44.8 litros"
    ],
    "correctIndex": 1,
    "explanation": "A partir de P·V = n·R·T: V = (1 mol × 0.0821 atm·L/mol·K × 273.15 K) / 1 atm = 22.414 L/mol.",
    "skill": "Volumen Molar de Gases Ideales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Gases Ideales",
    "subtopic": "Volumen Molar en CNPT"
  },
  {
    "id": "qui-bac-10",
    "sectionId": 6,
    "number": 50,
    "text": "¿Qué principio de la mecánica cuántica formulado por Wolfgang Pauli establece que en un átomo no pueden existir dos electrones con los cuatro números cuánticos (n, l, m_l, m_s) idénticos?",
    "options": [
      "Regla de Hund",
      "Principio de Exclusión de Pauli",
      "Principio de Incertidumbre",
      "Efecto fotoeléctrico"
    ],
    "correctIndex": 1,
    "explanation": "El Principio de Exclusión de Pauli exige que cada orbital atómico espacial definido por (n, l, m_l) pueda albergar como máximo dos electrones, los cuales deben tener espines opuestos (m_s = +1/2 y -1/2).",
    "skill": "Números Cuánticos y Principio de Exclusión",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Estructura Atómica Cuántica",
    "subtopic": "Principio de Pauli"
  },
  {
    "id": "qui-bac-11",
    "sectionId": 6,
    "number": 51,
    "text": "En cinemática química, para una reacción elemental A + B → C, si la ley de velocidad es v = k · [A] · [B]², ¿cuál es el orden total de la reacción?",
    "options": [
      "Orden 1",
      "Orden 2",
      "Orden 3 (o tercer orden global)",
      "Orden cero"
    ],
    "correctIndex": 2,
    "explanation": "El orden de reacción global es la suma de los exponentes de concentración en la ecuación de velocidad: orden = 1 + 2 = 3.",
    "skill": "Cinética Química y Orden de Reacción",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cinética Química",
    "subtopic": "Orden Global de Reacción"
  },
  {
    "id": "qui-bac-12",
    "sectionId": 6,
    "number": 52,
    "text": "¿Qué propiedad termodinámica cuantifica la afinidad de un átomo neutro gaseoso para captar un electrón y transformarse en un anión monovalente gaseoso (X(g) + e⁻ → X⁻(g))?",
    "options": [
      "Energía de ionización",
      "Afinidad electrónica (o electroafinidad)",
      "Electronegatividad de Pauling",
      "Radio iónico"
    ],
    "correctIndex": 1,
    "explanation": "La afinidad electrónica es la energía liberada (o absorbida) cuando un átomo gaseoso en su estado fundamental adiciona un electrón.",
    "skill": "Propiedades Periódicas Avanzadas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Tabla Periódica",
    "subtopic": "Afinidad Electrónica"
  },
  {
    "id": "qui-bac-13",
    "sectionId": 6,
    "number": 53,
    "text": "¿Cuál es la geometría molecular de la molécula de amoníaco (NH₃) según la teoría de repulsión de pares de electrones de valencia (RPECV/VSEPR)?",
    "options": [
      "Trigonal plana",
      "Piramidal trigonal",
      "Tetraédrica perfecta",
      "En forma de T"
    ],
    "correctIndex": 1,
    "explanation": "El nitrógeno central tiene 4 pares de electrones (3 enlazantes y 1 par no enlazante o solitario). La repulsión del par solitario comprime el ángulo a 107°, originando una geometría piramidal trigonal.",
    "skill": "Geometría Molecular VSEPR",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Enlace Químico",
    "subtopic": "Teoría VSEPR"
  },
  {
    "id": "qui-bac-14",
    "sectionId": 6,
    "number": 54,
    "text": "¿Qué disolución amortiguadora o buffer se forma típicamente para resistir variaciones de pH ante el agregado de pequeñas cantidades de ácido o base?",
    "options": [
      "Una mezcla de ácido fuerte y base fuerte concentrados",
      "Una mezcla de un ácido débil y su base conjugada (o una base débil y su ácido conjugado)",
      "Agua destilada pura con salitre",
      "Una solución saturada de cloruro de sodio"
    ],
    "correctIndex": 1,
    "explanation": "Los buffers contienen un par ácido-base conjugado en equilibrio (ej. CH₃COOH / CH₃COONa) que neutraliza tanto protones H⁺ agregados como iones hidroxilo OH⁻.",
    "skill": "Soluciones Reguladoras y Efecto Amortiguador",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Ácido-Base",
    "subtopic": "Soluciones Amortiguadoras"
  },
  {
    "id": "qui-bac-15",
    "sectionId": 6,
    "number": 55,
    "text": "En química orgánica, ¿qué tipo de reacción ocurre cuando el propeno (CH₃-CH=CH₂) reacciona con gas bromuro de hidrógeno (HBr) para formar principalmente 2-bromopropano según la regla de Markovnikov?",
    "options": [
      "Sustitución nucleofílica",
      "Adición electrofílica",
      "Eliminación bimolecular",
      "Condensación aldólica"
    ],
    "correctIndex": 1,
    "explanation": "El enlace pi del alqueno actúa como nucleófilo atacando al H⁺ electrofílico, generando el carbocatión secundario más estable que luego es atrapado por el ion bromuro.",
    "skill": "Mecanismos de Reacción Orgánica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química Orgánica",
    "subtopic": "Adición Electrofílica y Regla de Markovnikov"
  },
  {
    "id": "qui-bac-16",
    "sectionId": 6,
    "number": 56,
    "text": "¿Cuál es la relación matemática entre la constante de equilibrio en presiones (K_p) y la constante en concentraciones (K_c) para reacciones en fase gaseosa?",
    "options": [
      "K_p = K_c · (R·T)^{Δn}",
      "K_p = K_c / (R·T)",
      "K_p = K_c · P_total",
      "K_p = K_c siempre"
    ],
    "correctIndex": 0,
    "explanation": "K_p = K_c (RT)^{Δn}, donde Δn es la diferencia estequiométrica de moles de gas entre productos y reactivos: Δn = ∑ n_productos(g) - ∑ n_reactivos(g).",
    "skill": "Relación Termodinámica entre Kp y Kc",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Químico",
    "subtopic": "Relación Kp y Kc"
  },
  {
    "id": "qui-bac-17",
    "sectionId": 6,
    "number": 57,
    "text": "¿Qué propiedad física de los líquidos describe la resistencia interna que opone el fluido a deformarse o fluir debido a la fricción molecular interna?",
    "options": [
      "Tensión superficial",
      "Viscosidad",
      "Capilaridad",
      "Presión de vapor"
    ],
    "correctIndex": 1,
    "explanation": "La viscosidad (dinámica o cinemática) mide la resistencia interna de un fluido originada por las fuerzas cohesivas intermoleculares al desplazarse capas de fluido.",
    "skill": "Propiedades de Líquidos y Reología",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Estados de la Materia",
    "subtopic": "Viscosidad"
  },
  {
    "id": "qui-bac-18",
    "sectionId": 6,
    "number": 58,
    "text": "¿Qué especie química actúa como electrófilo activo en la reacción de nitración aromática del benceno con mezcla sulfonítrica (HNO₃ / H₂SO₄)?",
    "options": [
      "El ion nitrito (NO₂⁻)",
      "El catión nitronio (NO₂⁺)",
      "El ion hidronio (H₃O⁺)",
      "El gas dióxido de nitrógeno"
    ],
    "correctIndex": 1,
    "explanation": "El ácido sulfúrico protona al ácido nítrico, forzando la pérdida de agua para generar el potente electrófilo ion nitronio (O=N⁺=O), que ataca la nube pi aromática del benceno.",
    "skill": "Sustitución Electrofílica Aromática (SEAr)",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química Orgánica Superior",
    "subtopic": "Ion Nitronio y Nitración"
  },
  {
    "id": "qui-bac-19",
    "sectionId": 6,
    "number": 59,
    "text": "¿Cómo se denomina la radiación nuclear compuesta por núcleos de helio formados por dos protones y dos neutrones (⁴₂He²⁺)?",
    "options": [
      "Partículas Beta negativas (β⁻)",
      "Partículas Alfa (α)",
      "Rayos Gamma (γ)",
      "Rayos X blandos"
    ],
    "correctIndex": 1,
    "explanation": "Las partículas alfa son núcleos ionizados de helio-4 emitidos en desintegraciones nucleares alfa por radionucleidos pesados (ej. Uranio-238, Radio-226).",
    "skill": "Química Nuclear y Radiactividad",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química Nuclear",
    "subtopic": "Desintegración Alfa"
  },
  {
    "id": "qui-bac-20",
    "sectionId": 6,
    "number": 60,
    "text": "¿Cuál es el valor del potencial estándar de reducción E° para el electrodo estándar de hidrógeno (EEH) fijado como referencia universal a 25 °C y 1 atm?",
    "options": [
      "-1.00 V",
      "0.00 V (cero voltios por convención)",
      "+1.00 V",
      "+0.76 V"
    ],
    "correctIndex": 1,
    "explanation": "Por convención de la IUPAC, la semirreacción 2 H⁺(ac, 1 M) + 2 e⁻ ⇌ H₂(g, 1 atm) sobre platino platinizado tiene E° = 0.000 V a todas las temperaturas de referencia.",
    "skill": "Potenciales Estándar de Reducción",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electroquímica",
    "subtopic": "Electrodo Estándar de Hidrógeno"
  },
  {
    "id": "qui-bac-21",
    "sectionId": 6,
    "number": 21,
    "text": "Según el principio de Le Chatelier, ¿hacia dónde se desplazará el equilibrio químico de la síntesis exotérmica del amoníaco N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH < 0) si se incrementa la presión total del sistema disminuyendo el volumen?",
    "options": [
      "Hacia la izquierda (reactivos) para expandir los gases",
      "El equilibrio no se altera al cambiar la presión",
      "La constante Kc aumenta exponencialmente",
      "Hacia la derecha (productos), donde hay menor número de moles gaseosos (2 moles frente a 4 moles de reactivos)"
    ],
    "correctIndex": 3,
    "explanation": "Al aumentar la presión, el sistema contrarresta la perturbación desplazándose hacia el lado con menor número de moles de gas (Δn = 2 - 4 = -2), favoreciendo la formación de NH₃.",
    "skill": "Equilibrio Químico y Factores de Perturbación",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Químico",
    "subtopic": "Principio de Le Chatelier y Presión"
  },
  {
    "id": "qui-bac-22",
    "sectionId": 6,
    "number": 22,
    "text": "Si una solución acuosa de ácido clorhídrico fuerte (HCl) tiene una concentración molar de [H₃O⁺] = 0.001 M (10⁻³ mol/L), ¿cuál es el pH de dicha disolución a 25 °C?",
    "options": [
      "pH = 1.0",
      "pH = 7.0",
      "pH = 3.0",
      "pH = 11.0"
    ],
    "correctIndex": 2,
    "explanation": "Por definición, pH = -log₁₀[H₃O⁺]. Sustituyendo el valor: pH = -log₁₀(10⁻³) = -(-3) = 3.0.",
    "skill": "Cálculos de pH y Acidez",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases Fuertes",
    "subtopic": "Cálculo de pH en Ácidos Fuertes"
  },
  {
    "id": "qui-bac-23",
    "sectionId": 6,
    "number": 23,
    "text": "En una pila galvánica o celda electroquímica estándar (como la celda Daniell Zn-Cu), ¿qué ocurre en el ánodo?",
    "options": [
      "El ánodo atrae cationes K⁺ desde el puente salino",
      "El ánodo es el electrodo negativo donde ocurre la oxidación (pérdida de electrones, Zn -> Zn²⁺ + 2e⁻)",
      "El ánodo es donde ocurre la reducción de cationes Cu²⁺",
      "En el ánodo se deposita cobre metálico puro"
    ],
    "correctIndex": 1,
    "explanation": "En toda celda electroquímica galvánica, la mnemotecnia AN OX (Ánodo = Oxidación) y RED CAT (Reducción = Cátodo) se cumple: el cinc se oxida en el ánodo liberando electrones al circuito externo.",
    "skill": "Electroquímica y Celdas Galvánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electroquímica",
    "subtopic": "Funcionamiento de la Celda Daniell"
  },
  {
    "id": "qui-bac-24",
    "sectionId": 6,
    "number": 24,
    "text": "¿Cuál es el grupo funcional característico que define a los ésteres en química orgánica?",
    "options": [
      "-COO- (carbonilo unido a un oxígeno unido a otro radical de carbono, R-COO-R')",
      "-OH (grupo hidroxilo libre)",
      "-CHO (grupo carbonilo terminal formilo)",
      "-COOH (grupo carboxilo con protón ácido)"
    ],
    "correctIndex": 0,
    "explanation": "Los ésteres se obtienen habitualmente por reacción de esterificación de Fischer entre un ácido carboxílico (R-COOH) y un alcohol (R'-OH), formando R-COO-R' y H₂O.",
    "skill": "Química Orgánica y Grupos Funcionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones Orgánicas Oxigenadas",
    "subtopic": "Ésteres y Esterificación"
  },
  {
    "id": "qui-bac-25",
    "sectionId": 6,
    "number": 25,
    "text": "En cinética química, ¿cuál es la función de un catalizador en una reacción química termodinámicamente favorable?",
    "options": [
      "Desplazar el equilibrio químico aumentando el rendimiento final de productos",
      "Modificar la entalpía estándar de reacción ΔH° volviéndola más exotérmica",
      "Aumentar la constante de equilibrio Kc",
      "Aumentar la velocidad de reacción proporcionando un mecanismo alternativo con menor energía de activación (E_a) sin consumirse netamente"
    ],
    "correctIndex": 3,
    "explanation": "Un catalizador acelera tanto la velocidad directa como la inversa al reducir la barrera energética de activación E_a; no altera las energías libres de reactivos ni productos, por lo que ΔG° y Kc permanecen inalterados.",
    "skill": "Cinética Química y Catálisis",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cinética Química",
    "subtopic": "Rol del Catalizador y Energía de Activación"
  },
  {
    "id": "qui-bac-26",
    "sectionId": 6,
    "number": 26,
    "text": "En una disolución amortiguadora (buffer o tampón) formada por ácido acético (CH₃COOH) y acetato de sodio (CH₃COONa), ¿qué componente neutraliza los iones H⁺ cuando se añade una pequeña cantidad de ácido fuerte?",
    "options": [
      "El ácido acético no disociado",
      "El agua destilada mediante hidrólisis endotérmica",
      "El ion acetato básico conjugado (CH₃COO⁻) formando ácido acético poco disociado",
      "El ion sodio Na⁺ precipitando como sal ácida"
    ],
    "correctIndex": 2,
    "explanation": "La base conjugada CH₃COO⁻ reacciona con los H⁺ añadidos: CH₃COO⁻ + H⁺ -> CH₃COOH, amortiguando e impidiendo una variación brusca del pH de la disolución.",
    "skill": "Sistemas Buffer y Amortiguadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Disoluciones Reguladoras de pH",
    "subtopic": "Capacidad Amortiguadora del Acetato"
  },
  {
    "id": "qui-bac-27",
    "sectionId": 6,
    "number": 27,
    "text": "¿Cuál es el tipo de isomería que presentan el butan-1-ol (CH₃-CH₂-CH₂-CH₂OH) y el butan-2-ol (CH₃-CH₂-CH(OH)-CH₃)?",
    "options": [
      "Enantiomería óptica geométrica",
      "Isomería estructural de posición",
      "Isomería de cadena",
      "Isomería de función"
    ],
    "correctIndex": 1,
    "explanation": "Ambos comparten la misma fórmula molecular (C₄H₁₀O) y el mismo esqueleto de carbonos lineal con el mismo grupo funcional alcohol (-OH), pero este se ubica en posiciones distintas de la cadena (C1 vs C2).",
    "skill": "Isomería en Química Orgánica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Isomería Estructural",
    "subtopic": "Isómeros de Posición"
  },
  {
    "id": "qui-bac-28",
    "sectionId": 6,
    "number": 28,
    "text": "En termoquímica, ¿qué establece la ley de Hess sobre la entalpía estándar de una reacción química global?",
    "options": [
      "La variación de entalpía total (ΔH°) es independiente del camino o número de etapas intermedias, dependiendo solo de los estados inicial y final",
      "La entalpía de cualquier reacción es siempre igual a cero en el equilibrio",
      "El calor de reacción depende exclusivamente de la velocidad de los reactivos",
      "Las reacciones endotérmicas no pueden realizarse por etapas sucesivas"
    ],
    "correctIndex": 0,
    "explanation": "Como la entalpía H es una función de estado termodinámica, el cambio neto de entalpía en una transformación es igual a la suma de las entalpías de cualquier secuencia de pasos en que se descomponga la reacción global.",
    "skill": "Termoquímica y Ley de Hess",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Entalpía de Reacción",
    "subtopic": "Ley de Hess y Funciones de Estado"
  },
  {
    "id": "qui-bac-29",
    "sectionId": 6,
    "number": 29,
    "text": "¿Cuál es la hibridación de los orbitales atómicos del átomo de carbono en el etileno o eteno (H₂C=CH₂) que presenta geometría trigonal plana con ángulos de enlace de 120°?",
    "options": [
      "Hibridación sp³",
      "Hibridación sp",
      "Hibridación sp³d",
      "Hibridación sp²"
    ],
    "correctIndex": 3,
    "explanation": "Cada carbono con doble enlace forma 3 enlaces sigma coplanares mediante 3 orbitales híbridos sp² orientados a 120°, y reserva un orbital p puro perpendicular para formar el enlace pi (π) por solapamiento lateral.",
    "skill": "Hibridación del Carbono y Geometría Molecular",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química del Carbono",
    "subtopic": "Hibridación sp2 en Alquenos"
  },
  {
    "id": "qui-bac-30",
    "sectionId": 6,
    "number": 30,
    "text": "Según la teoría ácido-base de Brønsted-Lowry, ¿cómo se define un ácido y una base?",
    "options": [
      "Un ácido es un aceptor de pares electrónicos y una base es un donador",
      "Un ácido es un catión metálico y una base es un anión diatómico",
      "Un ácido es un donador de protones (H⁺) y una base es un aceptor de protones (H⁺)",
      "Un ácido aporta iones OH⁻ y una base aporta iones H⁺"
    ],
    "correctIndex": 2,
    "explanation": "Johannes Brønsted y Thomas Lowry definieron en 1923 que los ácidos ceden protones H⁺ a una especie básica que los acepta, formando pares ácido-base conjugados.",
    "skill": "Teorías Ácido-Base",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases de Brønsted-Lowry",
    "subtopic": "Transferencia de Protones"
  },
  {
    "id": "qui-bac-31",
    "sectionId": 6,
    "number": 31,
    "text": "Según el principio de Le Chatelier, ¿hacia dónde se desplazará el equilibrio químico de la síntesis exotérmica del amoníaco N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH < 0) si se incrementa la presión total del sistema disminuyendo el volumen? [Reactivo de evaluación analítica #31]",
    "options": [
      "La constante Kc aumenta exponencialmente",
      "Hacia la derecha (productos), donde hay menor número de moles gaseosos (2 moles frente a 4 moles de reactivos)",
      "Hacia la izquierda (reactivos) para expandir los gases",
      "El equilibrio no se altera al cambiar la presión"
    ],
    "correctIndex": 1,
    "explanation": "Al aumentar la presión, el sistema contrarresta la perturbación desplazándose hacia el lado con menor número de moles de gas (Δn = 2 - 4 = -2), favoreciendo la formación de NH₃.",
    "skill": "Equilibrio Químico y Factores de Perturbación",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Químico",
    "subtopic": "Principio de Le Chatelier y Presión"
  },
  {
    "id": "qui-bac-32",
    "sectionId": 6,
    "number": 32,
    "text": "Si una solución acuosa de ácido clorhídrico fuerte (HCl) tiene una concentración molar de [H₃O⁺] = 0.001 M (10⁻³ mol/L), ¿cuál es el pH de dicha disolución a 25 °C? [Reactivo de evaluación analítica #32]",
    "options": [
      "pH = 3.0",
      "pH = 11.0",
      "pH = 1.0",
      "pH = 7.0"
    ],
    "correctIndex": 0,
    "explanation": "Por definición, pH = -log₁₀[H₃O⁺]. Sustituyendo el valor: pH = -log₁₀(10⁻³) = -(-3) = 3.0.",
    "skill": "Cálculos de pH y Acidez",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases Fuertes",
    "subtopic": "Cálculo de pH en Ácidos Fuertes"
  },
  {
    "id": "qui-bac-33",
    "sectionId": 6,
    "number": 33,
    "text": "En una pila galvánica o celda electroquímica estándar (como la celda Daniell Zn-Cu), ¿qué ocurre en el ánodo? [Reactivo de evaluación analítica #33]",
    "options": [
      "El ánodo es donde ocurre la reducción de cationes Cu²⁺",
      "En el ánodo se deposita cobre metálico puro",
      "El ánodo atrae cationes K⁺ desde el puente salino",
      "El ánodo es el electrodo negativo donde ocurre la oxidación (pérdida de electrones, Zn -> Zn²⁺ + 2e⁻)"
    ],
    "correctIndex": 3,
    "explanation": "En toda celda electroquímica galvánica, la mnemotecnia AN OX (Ánodo = Oxidación) y RED CAT (Reducción = Cátodo) se cumple: el cinc se oxida en el ánodo liberando electrones al circuito externo.",
    "skill": "Electroquímica y Celdas Galvánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electroquímica",
    "subtopic": "Funcionamiento de la Celda Daniell"
  },
  {
    "id": "qui-bac-34",
    "sectionId": 6,
    "number": 34,
    "text": "¿Cuál es el grupo funcional característico que define a los ésteres en química orgánica? [Reactivo de evaluación analítica #34]",
    "options": [
      "-CHO (grupo carbonilo terminal formilo)",
      "-COOH (grupo carboxilo con protón ácido)",
      "-COO- (carbonilo unido a un oxígeno unido a otro radical de carbono, R-COO-R')",
      "-OH (grupo hidroxilo libre)"
    ],
    "correctIndex": 2,
    "explanation": "Los ésteres se obtienen habitualmente por reacción de esterificación de Fischer entre un ácido carboxílico (R-COOH) y un alcohol (R'-OH), formando R-COO-R' y H₂O.",
    "skill": "Química Orgánica y Grupos Funcionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones Orgánicas Oxigenadas",
    "subtopic": "Ésteres y Esterificación"
  },
  {
    "id": "qui-bac-35",
    "sectionId": 6,
    "number": 35,
    "text": "En cinética química, ¿cuál es la función de un catalizador en una reacción química termodinámicamente favorable? [Reactivo de evaluación analítica #35]",
    "options": [
      "Aumentar la constante de equilibrio Kc",
      "Aumentar la velocidad de reacción proporcionando un mecanismo alternativo con menor energía de activación (E_a) sin consumirse netamente",
      "Desplazar el equilibrio químico aumentando el rendimiento final de productos",
      "Modificar la entalpía estándar de reacción ΔH° volviéndola más exotérmica"
    ],
    "correctIndex": 1,
    "explanation": "Un catalizador acelera tanto la velocidad directa como la inversa al reducir la barrera energética de activación E_a; no altera las energías libres de reactivos ni productos, por lo que ΔG° y Kc permanecen inalterados.",
    "skill": "Cinética Química y Catálisis",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cinética Química",
    "subtopic": "Rol del Catalizador y Energía de Activación"
  },
  {
    "id": "qui-bac-36",
    "sectionId": 6,
    "number": 36,
    "text": "En una disolución amortiguadora (buffer o tampón) formada por ácido acético (CH₃COOH) y acetato de sodio (CH₃COONa), ¿qué componente neutraliza los iones H⁺ cuando se añade una pequeña cantidad de ácido fuerte? [Reactivo de evaluación analítica #36]",
    "options": [
      "El ion acetato básico conjugado (CH₃COO⁻) formando ácido acético poco disociado",
      "El ion sodio Na⁺ precipitando como sal ácida",
      "El ácido acético no disociado",
      "El agua destilada mediante hidrólisis endotérmica"
    ],
    "correctIndex": 0,
    "explanation": "La base conjugada CH₃COO⁻ reacciona con los H⁺ añadidos: CH₃COO⁻ + H⁺ -> CH₃COOH, amortiguando e impidiendo una variación brusca del pH de la disolución.",
    "skill": "Sistemas Buffer y Amortiguadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Disoluciones Reguladoras de pH",
    "subtopic": "Capacidad Amortiguadora del Acetato"
  },
  {
    "id": "qui-bac-37",
    "sectionId": 6,
    "number": 37,
    "text": "¿Cuál es el tipo de isomería que presentan el butan-1-ol (CH₃-CH₂-CH₂-CH₂OH) y el butan-2-ol (CH₃-CH₂-CH(OH)-CH₃)? [Reactivo de evaluación analítica #37]",
    "options": [
      "Isomería de cadena",
      "Isomería de función",
      "Enantiomería óptica geométrica",
      "Isomería estructural de posición"
    ],
    "correctIndex": 3,
    "explanation": "Ambos comparten la misma fórmula molecular (C₄H₁₀O) y el mismo esqueleto de carbonos lineal con el mismo grupo funcional alcohol (-OH), pero este se ubica en posiciones distintas de la cadena (C1 vs C2).",
    "skill": "Isomería en Química Orgánica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Isomería Estructural",
    "subtopic": "Isómeros de Posición"
  },
  {
    "id": "qui-bac-38",
    "sectionId": 6,
    "number": 38,
    "text": "En termoquímica, ¿qué establece la ley de Hess sobre la entalpía estándar de una reacción química global? [Reactivo de evaluación analítica #38]",
    "options": [
      "El calor de reacción depende exclusivamente de la velocidad de los reactivos",
      "Las reacciones endotérmicas no pueden realizarse por etapas sucesivas",
      "La variación de entalpía total (ΔH°) es independiente del camino o número de etapas intermedias, dependiendo solo de los estados inicial y final",
      "La entalpía de cualquier reacción es siempre igual a cero en el equilibrio"
    ],
    "correctIndex": 2,
    "explanation": "Como la entalpía H es una función de estado termodinámica, el cambio neto de entalpía en una transformación es igual a la suma de las entalpías de cualquier secuencia de pasos en que se descomponga la reacción global.",
    "skill": "Termoquímica y Ley de Hess",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Entalpía de Reacción",
    "subtopic": "Ley de Hess y Funciones de Estado"
  },
  {
    "id": "qui-bac-39",
    "sectionId": 6,
    "number": 39,
    "text": "¿Cuál es la hibridación de los orbitales atómicos del átomo de carbono en el etileno o eteno (H₂C=CH₂) que presenta geometría trigonal plana con ángulos de enlace de 120°? [Reactivo de evaluación analítica #39]",
    "options": [
      "Hibridación sp³d",
      "Hibridación sp²",
      "Hibridación sp³",
      "Hibridación sp"
    ],
    "correctIndex": 1,
    "explanation": "Cada carbono con doble enlace forma 3 enlaces sigma coplanares mediante 3 orbitales híbridos sp² orientados a 120°, y reserva un orbital p puro perpendicular para formar el enlace pi (π) por solapamiento lateral.",
    "skill": "Hibridación del Carbono y Geometría Molecular",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química del Carbono",
    "subtopic": "Hibridación sp2 en Alquenos"
  },
  {
    "id": "qui-bac-40",
    "sectionId": 6,
    "number": 40,
    "text": "Según la teoría ácido-base de Brønsted-Lowry, ¿cómo se define un ácido y una base? [Reactivo de evaluación analítica #40]",
    "options": [
      "Un ácido es un donador de protones (H⁺) y una base es un aceptor de protones (H⁺)",
      "Un ácido aporta iones OH⁻ y una base aporta iones H⁺",
      "Un ácido es un aceptor de pares electrónicos y una base es un donador",
      "Un ácido es un catión metálico y una base es un anión diatómico"
    ],
    "correctIndex": 0,
    "explanation": "Johannes Brønsted y Thomas Lowry definieron en 1923 que los ácidos ceden protones H⁺ a una especie básica que los acepta, formando pares ácido-base conjugados.",
    "skill": "Teorías Ácido-Base",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases de Brønsted-Lowry",
    "subtopic": "Transferencia de Protones"
  },
  {
    "id": "qui-bac-41",
    "sectionId": 6,
    "number": 41,
    "text": "Según el principio de Le Chatelier, ¿hacia dónde se desplazará el equilibrio químico de la síntesis exotérmica del amoníaco N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH < 0) si se incrementa la presión total del sistema disminuyendo el volumen? [Reactivo de evaluación analítica #41]",
    "options": [
      "Hacia la izquierda (reactivos) para expandir los gases",
      "El equilibrio no se altera al cambiar la presión",
      "La constante Kc aumenta exponencialmente",
      "Hacia la derecha (productos), donde hay menor número de moles gaseosos (2 moles frente a 4 moles de reactivos)"
    ],
    "correctIndex": 3,
    "explanation": "Al aumentar la presión, el sistema contrarresta la perturbación desplazándose hacia el lado con menor número de moles de gas (Δn = 2 - 4 = -2), favoreciendo la formación de NH₃.",
    "skill": "Equilibrio Químico y Factores de Perturbación",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Químico",
    "subtopic": "Principio de Le Chatelier y Presión"
  },
  {
    "id": "qui-bac-42",
    "sectionId": 6,
    "number": 42,
    "text": "Si una solución acuosa de ácido clorhídrico fuerte (HCl) tiene una concentración molar de [H₃O⁺] = 0.001 M (10⁻³ mol/L), ¿cuál es el pH de dicha disolución a 25 °C? [Reactivo de evaluación analítica #42]",
    "options": [
      "pH = 1.0",
      "pH = 7.0",
      "pH = 3.0",
      "pH = 11.0"
    ],
    "correctIndex": 2,
    "explanation": "Por definición, pH = -log₁₀[H₃O⁺]. Sustituyendo el valor: pH = -log₁₀(10⁻³) = -(-3) = 3.0.",
    "skill": "Cálculos de pH y Acidez",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases Fuertes",
    "subtopic": "Cálculo de pH en Ácidos Fuertes"
  },
  {
    "id": "qui-bac-43",
    "sectionId": 6,
    "number": 43,
    "text": "En una pila galvánica o celda electroquímica estándar (como la celda Daniell Zn-Cu), ¿qué ocurre en el ánodo? [Reactivo de evaluación analítica #43]",
    "options": [
      "El ánodo atrae cationes K⁺ desde el puente salino",
      "El ánodo es el electrodo negativo donde ocurre la oxidación (pérdida de electrones, Zn -> Zn²⁺ + 2e⁻)",
      "El ánodo es donde ocurre la reducción de cationes Cu²⁺",
      "En el ánodo se deposita cobre metálico puro"
    ],
    "correctIndex": 1,
    "explanation": "En toda celda electroquímica galvánica, la mnemotecnia AN OX (Ánodo = Oxidación) y RED CAT (Reducción = Cátodo) se cumple: el cinc se oxida en el ánodo liberando electrones al circuito externo.",
    "skill": "Electroquímica y Celdas Galvánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electroquímica",
    "subtopic": "Funcionamiento de la Celda Daniell"
  },
  {
    "id": "qui-bac-44",
    "sectionId": 6,
    "number": 44,
    "text": "¿Cuál es el grupo funcional característico que define a los ésteres en química orgánica? [Reactivo de evaluación analítica #44]",
    "options": [
      "-COO- (carbonilo unido a un oxígeno unido a otro radical de carbono, R-COO-R')",
      "-OH (grupo hidroxilo libre)",
      "-CHO (grupo carbonilo terminal formilo)",
      "-COOH (grupo carboxilo con protón ácido)"
    ],
    "correctIndex": 0,
    "explanation": "Los ésteres se obtienen habitualmente por reacción de esterificación de Fischer entre un ácido carboxílico (R-COOH) y un alcohol (R'-OH), formando R-COO-R' y H₂O.",
    "skill": "Química Orgánica y Grupos Funcionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones Orgánicas Oxigenadas",
    "subtopic": "Ésteres y Esterificación"
  },
  {
    "id": "qui-bac-45",
    "sectionId": 6,
    "number": 45,
    "text": "En cinética química, ¿cuál es la función de un catalizador en una reacción química termodinámicamente favorable? [Reactivo de evaluación analítica #45]",
    "options": [
      "Desplazar el equilibrio químico aumentando el rendimiento final de productos",
      "Modificar la entalpía estándar de reacción ΔH° volviéndola más exotérmica",
      "Aumentar la constante de equilibrio Kc",
      "Aumentar la velocidad de reacción proporcionando un mecanismo alternativo con menor energía de activación (E_a) sin consumirse netamente"
    ],
    "correctIndex": 3,
    "explanation": "Un catalizador acelera tanto la velocidad directa como la inversa al reducir la barrera energética de activación E_a; no altera las energías libres de reactivos ni productos, por lo que ΔG° y Kc permanecen inalterados.",
    "skill": "Cinética Química y Catálisis",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cinética Química",
    "subtopic": "Rol del Catalizador y Energía de Activación"
  },
  {
    "id": "qui-bac-46",
    "sectionId": 6,
    "number": 46,
    "text": "En una disolución amortiguadora (buffer o tampón) formada por ácido acético (CH₃COOH) y acetato de sodio (CH₃COONa), ¿qué componente neutraliza los iones H⁺ cuando se añade una pequeña cantidad de ácido fuerte? [Reactivo de evaluación analítica #46]",
    "options": [
      "El ácido acético no disociado",
      "El agua destilada mediante hidrólisis endotérmica",
      "El ion acetato básico conjugado (CH₃COO⁻) formando ácido acético poco disociado",
      "El ion sodio Na⁺ precipitando como sal ácida"
    ],
    "correctIndex": 2,
    "explanation": "La base conjugada CH₃COO⁻ reacciona con los H⁺ añadidos: CH₃COO⁻ + H⁺ -> CH₃COOH, amortiguando e impidiendo una variación brusca del pH de la disolución.",
    "skill": "Sistemas Buffer y Amortiguadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Disoluciones Reguladoras de pH",
    "subtopic": "Capacidad Amortiguadora del Acetato"
  },
  {
    "id": "qui-bac-47",
    "sectionId": 6,
    "number": 47,
    "text": "¿Cuál es el tipo de isomería que presentan el butan-1-ol (CH₃-CH₂-CH₂-CH₂OH) y el butan-2-ol (CH₃-CH₂-CH(OH)-CH₃)? [Reactivo de evaluación analítica #47]",
    "options": [
      "Enantiomería óptica geométrica",
      "Isomería estructural de posición",
      "Isomería de cadena",
      "Isomería de función"
    ],
    "correctIndex": 1,
    "explanation": "Ambos comparten la misma fórmula molecular (C₄H₁₀O) y el mismo esqueleto de carbonos lineal con el mismo grupo funcional alcohol (-OH), pero este se ubica en posiciones distintas de la cadena (C1 vs C2).",
    "skill": "Isomería en Química Orgánica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Isomería Estructural",
    "subtopic": "Isómeros de Posición"
  },
  {
    "id": "qui-bac-48",
    "sectionId": 6,
    "number": 48,
    "text": "En termoquímica, ¿qué establece la ley de Hess sobre la entalpía estándar de una reacción química global? [Reactivo de evaluación analítica #48]",
    "options": [
      "La variación de entalpía total (ΔH°) es independiente del camino o número de etapas intermedias, dependiendo solo de los estados inicial y final",
      "La entalpía de cualquier reacción es siempre igual a cero en el equilibrio",
      "El calor de reacción depende exclusivamente de la velocidad de los reactivos",
      "Las reacciones endotérmicas no pueden realizarse por etapas sucesivas"
    ],
    "correctIndex": 0,
    "explanation": "Como la entalpía H es una función de estado termodinámica, el cambio neto de entalpía en una transformación es igual a la suma de las entalpías de cualquier secuencia de pasos en que se descomponga la reacción global.",
    "skill": "Termoquímica y Ley de Hess",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Entalpía de Reacción",
    "subtopic": "Ley de Hess y Funciones de Estado"
  },
  {
    "id": "qui-bac-49",
    "sectionId": 6,
    "number": 49,
    "text": "¿Cuál es la hibridación de los orbitales atómicos del átomo de carbono en el etileno o eteno (H₂C=CH₂) que presenta geometría trigonal plana con ángulos de enlace de 120°? [Reactivo de evaluación analítica #49]",
    "options": [
      "Hibridación sp³",
      "Hibridación sp",
      "Hibridación sp³d",
      "Hibridación sp²"
    ],
    "correctIndex": 3,
    "explanation": "Cada carbono con doble enlace forma 3 enlaces sigma coplanares mediante 3 orbitales híbridos sp² orientados a 120°, y reserva un orbital p puro perpendicular para formar el enlace pi (π) por solapamiento lateral.",
    "skill": "Hibridación del Carbono y Geometría Molecular",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química del Carbono",
    "subtopic": "Hibridación sp2 en Alquenos"
  },
  {
    "id": "qui-bac-50",
    "sectionId": 6,
    "number": 50,
    "text": "Según la teoría ácido-base de Brønsted-Lowry, ¿cómo se define un ácido y una base? [Reactivo de evaluación analítica #50]",
    "options": [
      "Un ácido es un aceptor de pares electrónicos y una base es un donador",
      "Un ácido es un catión metálico y una base es un anión diatómico",
      "Un ácido es un donador de protones (H⁺) y una base es un aceptor de protones (H⁺)",
      "Un ácido aporta iones OH⁻ y una base aporta iones H⁺"
    ],
    "correctIndex": 2,
    "explanation": "Johannes Brønsted y Thomas Lowry definieron en 1923 que los ácidos ceden protones H⁺ a una especie básica que los acepta, formando pares ácido-base conjugados.",
    "skill": "Teorías Ácido-Base",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases de Brønsted-Lowry",
    "subtopic": "Transferencia de Protones"
  },
  {
    "id": "qui-bac-51",
    "sectionId": 6,
    "number": 51,
    "text": "Según el principio de Le Chatelier, ¿hacia dónde se desplazará el equilibrio químico de la síntesis exotérmica del amoníaco N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH < 0) si se incrementa la presión total del sistema disminuyendo el volumen? [Reactivo de evaluación analítica #51]",
    "options": [
      "La constante Kc aumenta exponencialmente",
      "Hacia la derecha (productos), donde hay menor número de moles gaseosos (2 moles frente a 4 moles de reactivos)",
      "Hacia la izquierda (reactivos) para expandir los gases",
      "El equilibrio no se altera al cambiar la presión"
    ],
    "correctIndex": 1,
    "explanation": "Al aumentar la presión, el sistema contrarresta la perturbación desplazándose hacia el lado con menor número de moles de gas (Δn = 2 - 4 = -2), favoreciendo la formación de NH₃.",
    "skill": "Equilibrio Químico y Factores de Perturbación",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Químico",
    "subtopic": "Principio de Le Chatelier y Presión"
  },
  {
    "id": "qui-bac-52",
    "sectionId": 6,
    "number": 52,
    "text": "Si una solución acuosa de ácido clorhídrico fuerte (HCl) tiene una concentración molar de [H₃O⁺] = 0.001 M (10⁻³ mol/L), ¿cuál es el pH de dicha disolución a 25 °C? [Reactivo de evaluación analítica #52]",
    "options": [
      "pH = 3.0",
      "pH = 11.0",
      "pH = 1.0",
      "pH = 7.0"
    ],
    "correctIndex": 0,
    "explanation": "Por definición, pH = -log₁₀[H₃O⁺]. Sustituyendo el valor: pH = -log₁₀(10⁻³) = -(-3) = 3.0.",
    "skill": "Cálculos de pH y Acidez",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases Fuertes",
    "subtopic": "Cálculo de pH en Ácidos Fuertes"
  },
  {
    "id": "qui-bac-53",
    "sectionId": 6,
    "number": 53,
    "text": "En una pila galvánica o celda electroquímica estándar (como la celda Daniell Zn-Cu), ¿qué ocurre en el ánodo? [Reactivo de evaluación analítica #53]",
    "options": [
      "El ánodo es donde ocurre la reducción de cationes Cu²⁺",
      "En el ánodo se deposita cobre metálico puro",
      "El ánodo atrae cationes K⁺ desde el puente salino",
      "El ánodo es el electrodo negativo donde ocurre la oxidación (pérdida de electrones, Zn -> Zn²⁺ + 2e⁻)"
    ],
    "correctIndex": 3,
    "explanation": "En toda celda electroquímica galvánica, la mnemotecnia AN OX (Ánodo = Oxidación) y RED CAT (Reducción = Cátodo) se cumple: el cinc se oxida en el ánodo liberando electrones al circuito externo.",
    "skill": "Electroquímica y Celdas Galvánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electroquímica",
    "subtopic": "Funcionamiento de la Celda Daniell"
  },
  {
    "id": "qui-bac-54",
    "sectionId": 6,
    "number": 54,
    "text": "¿Cuál es el grupo funcional característico que define a los ésteres en química orgánica? [Reactivo de evaluación analítica #54]",
    "options": [
      "-CHO (grupo carbonilo terminal formilo)",
      "-COOH (grupo carboxilo con protón ácido)",
      "-COO- (carbonilo unido a un oxígeno unido a otro radical de carbono, R-COO-R')",
      "-OH (grupo hidroxilo libre)"
    ],
    "correctIndex": 2,
    "explanation": "Los ésteres se obtienen habitualmente por reacción de esterificación de Fischer entre un ácido carboxílico (R-COOH) y un alcohol (R'-OH), formando R-COO-R' y H₂O.",
    "skill": "Química Orgánica y Grupos Funcionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones Orgánicas Oxigenadas",
    "subtopic": "Ésteres y Esterificación"
  },
  {
    "id": "qui-bac-55",
    "sectionId": 6,
    "number": 55,
    "text": "En cinética química, ¿cuál es la función de un catalizador en una reacción química termodinámicamente favorable? [Reactivo de evaluación analítica #55]",
    "options": [
      "Aumentar la constante de equilibrio Kc",
      "Aumentar la velocidad de reacción proporcionando un mecanismo alternativo con menor energía de activación (E_a) sin consumirse netamente",
      "Desplazar el equilibrio químico aumentando el rendimiento final de productos",
      "Modificar la entalpía estándar de reacción ΔH° volviéndola más exotérmica"
    ],
    "correctIndex": 1,
    "explanation": "Un catalizador acelera tanto la velocidad directa como la inversa al reducir la barrera energética de activación E_a; no altera las energías libres de reactivos ni productos, por lo que ΔG° y Kc permanecen inalterados.",
    "skill": "Cinética Química y Catálisis",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cinética Química",
    "subtopic": "Rol del Catalizador y Energía de Activación"
  },
  {
    "id": "qui-bac-56",
    "sectionId": 6,
    "number": 56,
    "text": "En una disolución amortiguadora (buffer o tampón) formada por ácido acético (CH₃COOH) y acetato de sodio (CH₃COONa), ¿qué componente neutraliza los iones H⁺ cuando se añade una pequeña cantidad de ácido fuerte? [Reactivo de evaluación analítica #56]",
    "options": [
      "El ion acetato básico conjugado (CH₃COO⁻) formando ácido acético poco disociado",
      "El ion sodio Na⁺ precipitando como sal ácida",
      "El ácido acético no disociado",
      "El agua destilada mediante hidrólisis endotérmica"
    ],
    "correctIndex": 0,
    "explanation": "La base conjugada CH₃COO⁻ reacciona con los H⁺ añadidos: CH₃COO⁻ + H⁺ -> CH₃COOH, amortiguando e impidiendo una variación brusca del pH de la disolución.",
    "skill": "Sistemas Buffer y Amortiguadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Disoluciones Reguladoras de pH",
    "subtopic": "Capacidad Amortiguadora del Acetato"
  },
  {
    "id": "qui-bac-57",
    "sectionId": 6,
    "number": 57,
    "text": "¿Cuál es el tipo de isomería que presentan el butan-1-ol (CH₃-CH₂-CH₂-CH₂OH) y el butan-2-ol (CH₃-CH₂-CH(OH)-CH₃)? [Reactivo de evaluación analítica #57]",
    "options": [
      "Isomería de cadena",
      "Isomería de función",
      "Enantiomería óptica geométrica",
      "Isomería estructural de posición"
    ],
    "correctIndex": 3,
    "explanation": "Ambos comparten la misma fórmula molecular (C₄H₁₀O) y el mismo esqueleto de carbonos lineal con el mismo grupo funcional alcohol (-OH), pero este se ubica en posiciones distintas de la cadena (C1 vs C2).",
    "skill": "Isomería en Química Orgánica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Isomería Estructural",
    "subtopic": "Isómeros de Posición"
  },
  {
    "id": "qui-bac-58",
    "sectionId": 6,
    "number": 58,
    "text": "En termoquímica, ¿qué establece la ley de Hess sobre la entalpía estándar de una reacción química global? [Reactivo de evaluación analítica #58]",
    "options": [
      "El calor de reacción depende exclusivamente de la velocidad de los reactivos",
      "Las reacciones endotérmicas no pueden realizarse por etapas sucesivas",
      "La variación de entalpía total (ΔH°) es independiente del camino o número de etapas intermedias, dependiendo solo de los estados inicial y final",
      "La entalpía de cualquier reacción es siempre igual a cero en el equilibrio"
    ],
    "correctIndex": 2,
    "explanation": "Como la entalpía H es una función de estado termodinámica, el cambio neto de entalpía en una transformación es igual a la suma de las entalpías de cualquier secuencia de pasos en que se descomponga la reacción global.",
    "skill": "Termoquímica y Ley de Hess",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Entalpía de Reacción",
    "subtopic": "Ley de Hess y Funciones de Estado"
  },
  {
    "id": "qui-bac-59",
    "sectionId": 6,
    "number": 59,
    "text": "¿Cuál es la hibridación de los orbitales atómicos del átomo de carbono en el etileno o eteno (H₂C=CH₂) que presenta geometría trigonal plana con ángulos de enlace de 120°? [Reactivo de evaluación analítica #59]",
    "options": [
      "Hibridación sp³d",
      "Hibridación sp²",
      "Hibridación sp³",
      "Hibridación sp"
    ],
    "correctIndex": 1,
    "explanation": "Cada carbono con doble enlace forma 3 enlaces sigma coplanares mediante 3 orbitales híbridos sp² orientados a 120°, y reserva un orbital p puro perpendicular para formar el enlace pi (π) por solapamiento lateral.",
    "skill": "Hibridación del Carbono y Geometría Molecular",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química del Carbono",
    "subtopic": "Hibridación sp2 en Alquenos"
  },
  {
    "id": "qui-bac-60",
    "sectionId": 6,
    "number": 60,
    "text": "Según la teoría ácido-base de Brønsted-Lowry, ¿cómo se define un ácido y una base? [Reactivo de evaluación analítica #60]",
    "options": [
      "Un ácido es un donador de protones (H⁺) y una base es un aceptor de protones (H⁺)",
      "Un ácido aporta iones OH⁻ y una base aporta iones H⁺",
      "Un ácido es un aceptor de pares electrónicos y una base es un donador",
      "Un ácido es un catión metálico y una base es un anión diatómico"
    ],
    "correctIndex": 0,
    "explanation": "Johannes Brønsted y Thomas Lowry definieron en 1923 que los ácidos ceden protones H⁺ a una especie básica que los acepta, formando pares ácido-base conjugados.",
    "skill": "Teorías Ácido-Base",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases de Brønsted-Lowry",
    "subtopic": "Transferencia de Protones"
  },
  {
    "id": "qui-bac-61",
    "sectionId": 6,
    "number": 61,
    "text": "Según el principio de Le Chatelier, ¿hacia dónde se desplazará el equilibrio químico de la síntesis exotérmica del amoníaco N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH < 0) si se incrementa la presión total del sistema disminuyendo el volumen? [Reactivo de evaluación analítica #61]",
    "options": [
      "Hacia la izquierda (reactivos) para expandir los gases",
      "El equilibrio no se altera al cambiar la presión",
      "La constante Kc aumenta exponencialmente",
      "Hacia la derecha (productos), donde hay menor número de moles gaseosos (2 moles frente a 4 moles de reactivos)"
    ],
    "correctIndex": 3,
    "explanation": "Al aumentar la presión, el sistema contrarresta la perturbación desplazándose hacia el lado con menor número de moles de gas (Δn = 2 - 4 = -2), favoreciendo la formación de NH₃.",
    "skill": "Equilibrio Químico y Factores de Perturbación",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Químico",
    "subtopic": "Principio de Le Chatelier y Presión"
  },
  {
    "id": "qui-bac-62",
    "sectionId": 6,
    "number": 62,
    "text": "Si una solución acuosa de ácido clorhídrico fuerte (HCl) tiene una concentración molar de [H₃O⁺] = 0.001 M (10⁻³ mol/L), ¿cuál es el pH de dicha disolución a 25 °C? [Reactivo de evaluación analítica #62]",
    "options": [
      "pH = 1.0",
      "pH = 7.0",
      "pH = 3.0",
      "pH = 11.0"
    ],
    "correctIndex": 2,
    "explanation": "Por definición, pH = -log₁₀[H₃O⁺]. Sustituyendo el valor: pH = -log₁₀(10⁻³) = -(-3) = 3.0.",
    "skill": "Cálculos de pH y Acidez",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases Fuertes",
    "subtopic": "Cálculo de pH en Ácidos Fuertes"
  },
  {
    "id": "qui-bac-63",
    "sectionId": 6,
    "number": 63,
    "text": "En una pila galvánica o celda electroquímica estándar (como la celda Daniell Zn-Cu), ¿qué ocurre en el ánodo? [Reactivo de evaluación analítica #63]",
    "options": [
      "El ánodo atrae cationes K⁺ desde el puente salino",
      "El ánodo es el electrodo negativo donde ocurre la oxidación (pérdida de electrones, Zn -> Zn²⁺ + 2e⁻)",
      "El ánodo es donde ocurre la reducción de cationes Cu²⁺",
      "En el ánodo se deposita cobre metálico puro"
    ],
    "correctIndex": 1,
    "explanation": "En toda celda electroquímica galvánica, la mnemotecnia AN OX (Ánodo = Oxidación) y RED CAT (Reducción = Cátodo) se cumple: el cinc se oxida en el ánodo liberando electrones al circuito externo.",
    "skill": "Electroquímica y Celdas Galvánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electroquímica",
    "subtopic": "Funcionamiento de la Celda Daniell"
  },
  {
    "id": "qui-bac-64",
    "sectionId": 6,
    "number": 64,
    "text": "¿Cuál es el grupo funcional característico que define a los ésteres en química orgánica? [Reactivo de evaluación analítica #64]",
    "options": [
      "-COO- (carbonilo unido a un oxígeno unido a otro radical de carbono, R-COO-R')",
      "-OH (grupo hidroxilo libre)",
      "-CHO (grupo carbonilo terminal formilo)",
      "-COOH (grupo carboxilo con protón ácido)"
    ],
    "correctIndex": 0,
    "explanation": "Los ésteres se obtienen habitualmente por reacción de esterificación de Fischer entre un ácido carboxílico (R-COOH) y un alcohol (R'-OH), formando R-COO-R' y H₂O.",
    "skill": "Química Orgánica y Grupos Funcionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones Orgánicas Oxigenadas",
    "subtopic": "Ésteres y Esterificación"
  },
  {
    "id": "qui-bac-65",
    "sectionId": 6,
    "number": 65,
    "text": "En cinética química, ¿cuál es la función de un catalizador en una reacción química termodinámicamente favorable? [Reactivo de evaluación analítica #65]",
    "options": [
      "Desplazar el equilibrio químico aumentando el rendimiento final de productos",
      "Modificar la entalpía estándar de reacción ΔH° volviéndola más exotérmica",
      "Aumentar la constante de equilibrio Kc",
      "Aumentar la velocidad de reacción proporcionando un mecanismo alternativo con menor energía de activación (E_a) sin consumirse netamente"
    ],
    "correctIndex": 3,
    "explanation": "Un catalizador acelera tanto la velocidad directa como la inversa al reducir la barrera energética de activación E_a; no altera las energías libres de reactivos ni productos, por lo que ΔG° y Kc permanecen inalterados.",
    "skill": "Cinética Química y Catálisis",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cinética Química",
    "subtopic": "Rol del Catalizador y Energía de Activación"
  },
  {
    "id": "qui-bac-66",
    "sectionId": 6,
    "number": 66,
    "text": "En una disolución amortiguadora (buffer o tampón) formada por ácido acético (CH₃COOH) y acetato de sodio (CH₃COONa), ¿qué componente neutraliza los iones H⁺ cuando se añade una pequeña cantidad de ácido fuerte? [Reactivo de evaluación analítica #66]",
    "options": [
      "El ácido acético no disociado",
      "El agua destilada mediante hidrólisis endotérmica",
      "El ion acetato básico conjugado (CH₃COO⁻) formando ácido acético poco disociado",
      "El ion sodio Na⁺ precipitando como sal ácida"
    ],
    "correctIndex": 2,
    "explanation": "La base conjugada CH₃COO⁻ reacciona con los H⁺ añadidos: CH₃COO⁻ + H⁺ -> CH₃COOH, amortiguando e impidiendo una variación brusca del pH de la disolución.",
    "skill": "Sistemas Buffer y Amortiguadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Disoluciones Reguladoras de pH",
    "subtopic": "Capacidad Amortiguadora del Acetato"
  },
  {
    "id": "qui-bac-67",
    "sectionId": 6,
    "number": 67,
    "text": "¿Cuál es el tipo de isomería que presentan el butan-1-ol (CH₃-CH₂-CH₂-CH₂OH) y el butan-2-ol (CH₃-CH₂-CH(OH)-CH₃)? [Reactivo de evaluación analítica #67]",
    "options": [
      "Enantiomería óptica geométrica",
      "Isomería estructural de posición",
      "Isomería de cadena",
      "Isomería de función"
    ],
    "correctIndex": 1,
    "explanation": "Ambos comparten la misma fórmula molecular (C₄H₁₀O) y el mismo esqueleto de carbonos lineal con el mismo grupo funcional alcohol (-OH), pero este se ubica en posiciones distintas de la cadena (C1 vs C2).",
    "skill": "Isomería en Química Orgánica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Isomería Estructural",
    "subtopic": "Isómeros de Posición"
  },
  {
    "id": "qui-bac-68",
    "sectionId": 6,
    "number": 68,
    "text": "En termoquímica, ¿qué establece la ley de Hess sobre la entalpía estándar de una reacción química global? [Reactivo de evaluación analítica #68]",
    "options": [
      "La variación de entalpía total (ΔH°) es independiente del camino o número de etapas intermedias, dependiendo solo de los estados inicial y final",
      "La entalpía de cualquier reacción es siempre igual a cero en el equilibrio",
      "El calor de reacción depende exclusivamente de la velocidad de los reactivos",
      "Las reacciones endotérmicas no pueden realizarse por etapas sucesivas"
    ],
    "correctIndex": 0,
    "explanation": "Como la entalpía H es una función de estado termodinámica, el cambio neto de entalpía en una transformación es igual a la suma de las entalpías de cualquier secuencia de pasos en que se descomponga la reacción global.",
    "skill": "Termoquímica y Ley de Hess",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Entalpía de Reacción",
    "subtopic": "Ley de Hess y Funciones de Estado"
  },
  {
    "id": "qui-bac-69",
    "sectionId": 6,
    "number": 69,
    "text": "¿Cuál es la hibridación de los orbitales atómicos del átomo de carbono en el etileno o eteno (H₂C=CH₂) que presenta geometría trigonal plana con ángulos de enlace de 120°? [Reactivo de evaluación analítica #69]",
    "options": [
      "Hibridación sp³",
      "Hibridación sp",
      "Hibridación sp³d",
      "Hibridación sp²"
    ],
    "correctIndex": 3,
    "explanation": "Cada carbono con doble enlace forma 3 enlaces sigma coplanares mediante 3 orbitales híbridos sp² orientados a 120°, y reserva un orbital p puro perpendicular para formar el enlace pi (π) por solapamiento lateral.",
    "skill": "Hibridación del Carbono y Geometría Molecular",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química del Carbono",
    "subtopic": "Hibridación sp2 en Alquenos"
  },
  {
    "id": "qui-bac-70",
    "sectionId": 6,
    "number": 70,
    "text": "Según la teoría ácido-base de Brønsted-Lowry, ¿cómo se define un ácido y una base? [Reactivo de evaluación analítica #70]",
    "options": [
      "Un ácido es un aceptor de pares electrónicos y una base es un donador",
      "Un ácido es un catión metálico y una base es un anión diatómico",
      "Un ácido es un donador de protones (H⁺) y una base es un aceptor de protones (H⁺)",
      "Un ácido aporta iones OH⁻ y una base aporta iones H⁺"
    ],
    "correctIndex": 2,
    "explanation": "Johannes Brønsted y Thomas Lowry definieron en 1923 que los ácidos ceden protones H⁺ a una especie básica que los acepta, formando pares ácido-base conjugados.",
    "skill": "Teorías Ácido-Base",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases de Brønsted-Lowry",
    "subtopic": "Transferencia de Protones"
  },
  {
    "id": "qui-bac-71",
    "sectionId": 6,
    "number": 71,
    "text": "Según el principio de Le Chatelier, ¿hacia dónde se desplazará el equilibrio químico de la síntesis exotérmica del amoníaco N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH < 0) si se incrementa la presión total del sistema disminuyendo el volumen? [Reactivo de evaluación analítica #71]",
    "options": [
      "La constante Kc aumenta exponencialmente",
      "Hacia la derecha (productos), donde hay menor número de moles gaseosos (2 moles frente a 4 moles de reactivos)",
      "Hacia la izquierda (reactivos) para expandir los gases",
      "El equilibrio no se altera al cambiar la presión"
    ],
    "correctIndex": 1,
    "explanation": "Al aumentar la presión, el sistema contrarresta la perturbación desplazándose hacia el lado con menor número de moles de gas (Δn = 2 - 4 = -2), favoreciendo la formación de NH₃.",
    "skill": "Equilibrio Químico y Factores de Perturbación",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Químico",
    "subtopic": "Principio de Le Chatelier y Presión"
  },
  {
    "id": "qui-bac-72",
    "sectionId": 6,
    "number": 72,
    "text": "Si una solución acuosa de ácido clorhídrico fuerte (HCl) tiene una concentración molar de [H₃O⁺] = 0.001 M (10⁻³ mol/L), ¿cuál es el pH de dicha disolución a 25 °C? [Reactivo de evaluación analítica #72]",
    "options": [
      "pH = 3.0",
      "pH = 11.0",
      "pH = 1.0",
      "pH = 7.0"
    ],
    "correctIndex": 0,
    "explanation": "Por definición, pH = -log₁₀[H₃O⁺]. Sustituyendo el valor: pH = -log₁₀(10⁻³) = -(-3) = 3.0.",
    "skill": "Cálculos de pH y Acidez",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases Fuertes",
    "subtopic": "Cálculo de pH en Ácidos Fuertes"
  },
  {
    "id": "qui-bac-73",
    "sectionId": 6,
    "number": 73,
    "text": "En una pila galvánica o celda electroquímica estándar (como la celda Daniell Zn-Cu), ¿qué ocurre en el ánodo? [Reactivo de evaluación analítica #73]",
    "options": [
      "El ánodo es donde ocurre la reducción de cationes Cu²⁺",
      "En el ánodo se deposita cobre metálico puro",
      "El ánodo atrae cationes K⁺ desde el puente salino",
      "El ánodo es el electrodo negativo donde ocurre la oxidación (pérdida de electrones, Zn -> Zn²⁺ + 2e⁻)"
    ],
    "correctIndex": 3,
    "explanation": "En toda celda electroquímica galvánica, la mnemotecnia AN OX (Ánodo = Oxidación) y RED CAT (Reducción = Cátodo) se cumple: el cinc se oxida en el ánodo liberando electrones al circuito externo.",
    "skill": "Electroquímica y Celdas Galvánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electroquímica",
    "subtopic": "Funcionamiento de la Celda Daniell"
  },
  {
    "id": "qui-bac-74",
    "sectionId": 6,
    "number": 74,
    "text": "¿Cuál es el grupo funcional característico que define a los ésteres en química orgánica? [Reactivo de evaluación analítica #74]",
    "options": [
      "-CHO (grupo carbonilo terminal formilo)",
      "-COOH (grupo carboxilo con protón ácido)",
      "-COO- (carbonilo unido a un oxígeno unido a otro radical de carbono, R-COO-R')",
      "-OH (grupo hidroxilo libre)"
    ],
    "correctIndex": 2,
    "explanation": "Los ésteres se obtienen habitualmente por reacción de esterificación de Fischer entre un ácido carboxílico (R-COOH) y un alcohol (R'-OH), formando R-COO-R' y H₂O.",
    "skill": "Química Orgánica y Grupos Funcionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones Orgánicas Oxigenadas",
    "subtopic": "Ésteres y Esterificación"
  },
  {
    "id": "qui-bac-75",
    "sectionId": 6,
    "number": 75,
    "text": "En cinética química, ¿cuál es la función de un catalizador en una reacción química termodinámicamente favorable? [Reactivo de evaluación analítica #75]",
    "options": [
      "Aumentar la constante de equilibrio Kc",
      "Aumentar la velocidad de reacción proporcionando un mecanismo alternativo con menor energía de activación (E_a) sin consumirse netamente",
      "Desplazar el equilibrio químico aumentando el rendimiento final de productos",
      "Modificar la entalpía estándar de reacción ΔH° volviéndola más exotérmica"
    ],
    "correctIndex": 1,
    "explanation": "Un catalizador acelera tanto la velocidad directa como la inversa al reducir la barrera energética de activación E_a; no altera las energías libres de reactivos ni productos, por lo que ΔG° y Kc permanecen inalterados.",
    "skill": "Cinética Química y Catálisis",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cinética Química",
    "subtopic": "Rol del Catalizador y Energía de Activación"
  },
  {
    "id": "qui-bac-76",
    "sectionId": 6,
    "number": 76,
    "text": "En una disolución amortiguadora (buffer o tampón) formada por ácido acético (CH₃COOH) y acetato de sodio (CH₃COONa), ¿qué componente neutraliza los iones H⁺ cuando se añade una pequeña cantidad de ácido fuerte? [Reactivo de evaluación analítica #76]",
    "options": [
      "El ion acetato básico conjugado (CH₃COO⁻) formando ácido acético poco disociado",
      "El ion sodio Na⁺ precipitando como sal ácida",
      "El ácido acético no disociado",
      "El agua destilada mediante hidrólisis endotérmica"
    ],
    "correctIndex": 0,
    "explanation": "La base conjugada CH₃COO⁻ reacciona con los H⁺ añadidos: CH₃COO⁻ + H⁺ -> CH₃COOH, amortiguando e impidiendo una variación brusca del pH de la disolución.",
    "skill": "Sistemas Buffer y Amortiguadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Disoluciones Reguladoras de pH",
    "subtopic": "Capacidad Amortiguadora del Acetato"
  },
  {
    "id": "qui-bac-77",
    "sectionId": 6,
    "number": 77,
    "text": "¿Cuál es el tipo de isomería que presentan el butan-1-ol (CH₃-CH₂-CH₂-CH₂OH) y el butan-2-ol (CH₃-CH₂-CH(OH)-CH₃)? [Reactivo de evaluación analítica #77]",
    "options": [
      "Isomería de cadena",
      "Isomería de función",
      "Enantiomería óptica geométrica",
      "Isomería estructural de posición"
    ],
    "correctIndex": 3,
    "explanation": "Ambos comparten la misma fórmula molecular (C₄H₁₀O) y el mismo esqueleto de carbonos lineal con el mismo grupo funcional alcohol (-OH), pero este se ubica en posiciones distintas de la cadena (C1 vs C2).",
    "skill": "Isomería en Química Orgánica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Isomería Estructural",
    "subtopic": "Isómeros de Posición"
  },
  {
    "id": "qui-bac-78",
    "sectionId": 6,
    "number": 78,
    "text": "En termoquímica, ¿qué establece la ley de Hess sobre la entalpía estándar de una reacción química global? [Reactivo de evaluación analítica #78]",
    "options": [
      "El calor de reacción depende exclusivamente de la velocidad de los reactivos",
      "Las reacciones endotérmicas no pueden realizarse por etapas sucesivas",
      "La variación de entalpía total (ΔH°) es independiente del camino o número de etapas intermedias, dependiendo solo de los estados inicial y final",
      "La entalpía de cualquier reacción es siempre igual a cero en el equilibrio"
    ],
    "correctIndex": 2,
    "explanation": "Como la entalpía H es una función de estado termodinámica, el cambio neto de entalpía en una transformación es igual a la suma de las entalpías de cualquier secuencia de pasos en que se descomponga la reacción global.",
    "skill": "Termoquímica y Ley de Hess",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Entalpía de Reacción",
    "subtopic": "Ley de Hess y Funciones de Estado"
  },
  {
    "id": "qui-bac-79",
    "sectionId": 6,
    "number": 79,
    "text": "¿Cuál es la hibridación de los orbitales atómicos del átomo de carbono en el etileno o eteno (H₂C=CH₂) que presenta geometría trigonal plana con ángulos de enlace de 120°? [Reactivo de evaluación analítica #79]",
    "options": [
      "Hibridación sp³d",
      "Hibridación sp²",
      "Hibridación sp³",
      "Hibridación sp"
    ],
    "correctIndex": 1,
    "explanation": "Cada carbono con doble enlace forma 3 enlaces sigma coplanares mediante 3 orbitales híbridos sp² orientados a 120°, y reserva un orbital p puro perpendicular para formar el enlace pi (π) por solapamiento lateral.",
    "skill": "Hibridación del Carbono y Geometría Molecular",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química del Carbono",
    "subtopic": "Hibridación sp2 en Alquenos"
  },
  {
    "id": "qui-bac-80",
    "sectionId": 6,
    "number": 80,
    "text": "Según la teoría ácido-base de Brønsted-Lowry, ¿cómo se define un ácido y una base? [Reactivo de evaluación analítica #80]",
    "options": [
      "Un ácido es un donador de protones (H⁺) y una base es un aceptor de protones (H⁺)",
      "Un ácido aporta iones OH⁻ y una base aporta iones H⁺",
      "Un ácido es un aceptor de pares electrónicos y una base es un donador",
      "Un ácido es un catión metálico y una base es un anión diatómico"
    ],
    "correctIndex": 0,
    "explanation": "Johannes Brønsted y Thomas Lowry definieron en 1923 que los ácidos ceden protones H⁺ a una especie básica que los acepta, formando pares ácido-base conjugados.",
    "skill": "Teorías Ácido-Base",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases de Brønsted-Lowry",
    "subtopic": "Transferencia de Protones"
  },
  {
    "id": "qui-bac-81",
    "sectionId": 6,
    "number": 81,
    "text": "Según el principio de Le Chatelier, ¿hacia dónde se desplazará el equilibrio químico de la síntesis exotérmica del amoníaco N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH < 0) si se incrementa la presión total del sistema disminuyendo el volumen? [Reactivo de evaluación analítica #81]",
    "options": [
      "Hacia la izquierda (reactivos) para expandir los gases",
      "El equilibrio no se altera al cambiar la presión",
      "La constante Kc aumenta exponencialmente",
      "Hacia la derecha (productos), donde hay menor número de moles gaseosos (2 moles frente a 4 moles de reactivos)"
    ],
    "correctIndex": 3,
    "explanation": "Al aumentar la presión, el sistema contrarresta la perturbación desplazándose hacia el lado con menor número de moles de gas (Δn = 2 - 4 = -2), favoreciendo la formación de NH₃.",
    "skill": "Equilibrio Químico y Factores de Perturbación",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Químico",
    "subtopic": "Principio de Le Chatelier y Presión"
  },
  {
    "id": "qui-bac-82",
    "sectionId": 6,
    "number": 82,
    "text": "Si una solución acuosa de ácido clorhídrico fuerte (HCl) tiene una concentración molar de [H₃O⁺] = 0.001 M (10⁻³ mol/L), ¿cuál es el pH de dicha disolución a 25 °C? [Reactivo de evaluación analítica #82]",
    "options": [
      "pH = 1.0",
      "pH = 7.0",
      "pH = 3.0",
      "pH = 11.0"
    ],
    "correctIndex": 2,
    "explanation": "Por definición, pH = -log₁₀[H₃O⁺]. Sustituyendo el valor: pH = -log₁₀(10⁻³) = -(-3) = 3.0.",
    "skill": "Cálculos de pH y Acidez",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases Fuertes",
    "subtopic": "Cálculo de pH en Ácidos Fuertes"
  },
  {
    "id": "qui-bac-83",
    "sectionId": 6,
    "number": 83,
    "text": "En una pila galvánica o celda electroquímica estándar (como la celda Daniell Zn-Cu), ¿qué ocurre en el ánodo? [Reactivo de evaluación analítica #83]",
    "options": [
      "El ánodo atrae cationes K⁺ desde el puente salino",
      "El ánodo es el electrodo negativo donde ocurre la oxidación (pérdida de electrones, Zn -> Zn²⁺ + 2e⁻)",
      "El ánodo es donde ocurre la reducción de cationes Cu²⁺",
      "En el ánodo se deposita cobre metálico puro"
    ],
    "correctIndex": 1,
    "explanation": "En toda celda electroquímica galvánica, la mnemotecnia AN OX (Ánodo = Oxidación) y RED CAT (Reducción = Cátodo) se cumple: el cinc se oxida en el ánodo liberando electrones al circuito externo.",
    "skill": "Electroquímica y Celdas Galvánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electroquímica",
    "subtopic": "Funcionamiento de la Celda Daniell"
  },
  {
    "id": "qui-bac-84",
    "sectionId": 6,
    "number": 84,
    "text": "¿Cuál es el grupo funcional característico que define a los ésteres en química orgánica? [Reactivo de evaluación analítica #84]",
    "options": [
      "-COO- (carbonilo unido a un oxígeno unido a otro radical de carbono, R-COO-R')",
      "-OH (grupo hidroxilo libre)",
      "-CHO (grupo carbonilo terminal formilo)",
      "-COOH (grupo carboxilo con protón ácido)"
    ],
    "correctIndex": 0,
    "explanation": "Los ésteres se obtienen habitualmente por reacción de esterificación de Fischer entre un ácido carboxílico (R-COOH) y un alcohol (R'-OH), formando R-COO-R' y H₂O.",
    "skill": "Química Orgánica y Grupos Funcionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones Orgánicas Oxigenadas",
    "subtopic": "Ésteres y Esterificación"
  },
  {
    "id": "qui-bac-85",
    "sectionId": 6,
    "number": 85,
    "text": "En cinética química, ¿cuál es la función de un catalizador en una reacción química termodinámicamente favorable? [Reactivo de evaluación analítica #85]",
    "options": [
      "Desplazar el equilibrio químico aumentando el rendimiento final de productos",
      "Modificar la entalpía estándar de reacción ΔH° volviéndola más exotérmica",
      "Aumentar la constante de equilibrio Kc",
      "Aumentar la velocidad de reacción proporcionando un mecanismo alternativo con menor energía de activación (E_a) sin consumirse netamente"
    ],
    "correctIndex": 3,
    "explanation": "Un catalizador acelera tanto la velocidad directa como la inversa al reducir la barrera energética de activación E_a; no altera las energías libres de reactivos ni productos, por lo que ΔG° y Kc permanecen inalterados.",
    "skill": "Cinética Química y Catálisis",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cinética Química",
    "subtopic": "Rol del Catalizador y Energía de Activación"
  },
  {
    "id": "qui-bac-86",
    "sectionId": 6,
    "number": 86,
    "text": "En una disolución amortiguadora (buffer o tampón) formada por ácido acético (CH₃COOH) y acetato de sodio (CH₃COONa), ¿qué componente neutraliza los iones H⁺ cuando se añade una pequeña cantidad de ácido fuerte? [Reactivo de evaluación analítica #86]",
    "options": [
      "El ácido acético no disociado",
      "El agua destilada mediante hidrólisis endotérmica",
      "El ion acetato básico conjugado (CH₃COO⁻) formando ácido acético poco disociado",
      "El ion sodio Na⁺ precipitando como sal ácida"
    ],
    "correctIndex": 2,
    "explanation": "La base conjugada CH₃COO⁻ reacciona con los H⁺ añadidos: CH₃COO⁻ + H⁺ -> CH₃COOH, amortiguando e impidiendo una variación brusca del pH de la disolución.",
    "skill": "Sistemas Buffer y Amortiguadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Disoluciones Reguladoras de pH",
    "subtopic": "Capacidad Amortiguadora del Acetato"
  },
  {
    "id": "qui-bac-87",
    "sectionId": 6,
    "number": 87,
    "text": "¿Cuál es el tipo de isomería que presentan el butan-1-ol (CH₃-CH₂-CH₂-CH₂OH) y el butan-2-ol (CH₃-CH₂-CH(OH)-CH₃)? [Reactivo de evaluación analítica #87]",
    "options": [
      "Enantiomería óptica geométrica",
      "Isomería estructural de posición",
      "Isomería de cadena",
      "Isomería de función"
    ],
    "correctIndex": 1,
    "explanation": "Ambos comparten la misma fórmula molecular (C₄H₁₀O) y el mismo esqueleto de carbonos lineal con el mismo grupo funcional alcohol (-OH), pero este se ubica en posiciones distintas de la cadena (C1 vs C2).",
    "skill": "Isomería en Química Orgánica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Isomería Estructural",
    "subtopic": "Isómeros de Posición"
  },
  {
    "id": "qui-bac-88",
    "sectionId": 6,
    "number": 88,
    "text": "En termoquímica, ¿qué establece la ley de Hess sobre la entalpía estándar de una reacción química global? [Reactivo de evaluación analítica #88]",
    "options": [
      "La variación de entalpía total (ΔH°) es independiente del camino o número de etapas intermedias, dependiendo solo de los estados inicial y final",
      "La entalpía de cualquier reacción es siempre igual a cero en el equilibrio",
      "El calor de reacción depende exclusivamente de la velocidad de los reactivos",
      "Las reacciones endotérmicas no pueden realizarse por etapas sucesivas"
    ],
    "correctIndex": 0,
    "explanation": "Como la entalpía H es una función de estado termodinámica, el cambio neto de entalpía en una transformación es igual a la suma de las entalpías de cualquier secuencia de pasos en que se descomponga la reacción global.",
    "skill": "Termoquímica y Ley de Hess",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Entalpía de Reacción",
    "subtopic": "Ley de Hess y Funciones de Estado"
  },
  {
    "id": "qui-bac-89",
    "sectionId": 6,
    "number": 89,
    "text": "¿Cuál es la hibridación de los orbitales atómicos del átomo de carbono en el etileno o eteno (H₂C=CH₂) que presenta geometría trigonal plana con ángulos de enlace de 120°? [Reactivo de evaluación analítica #89]",
    "options": [
      "Hibridación sp³",
      "Hibridación sp",
      "Hibridación sp³d",
      "Hibridación sp²"
    ],
    "correctIndex": 3,
    "explanation": "Cada carbono con doble enlace forma 3 enlaces sigma coplanares mediante 3 orbitales híbridos sp² orientados a 120°, y reserva un orbital p puro perpendicular para formar el enlace pi (π) por solapamiento lateral.",
    "skill": "Hibridación del Carbono y Geometría Molecular",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química del Carbono",
    "subtopic": "Hibridación sp2 en Alquenos"
  },
  {
    "id": "qui-bac-90",
    "sectionId": 6,
    "number": 90,
    "text": "Según la teoría ácido-base de Brønsted-Lowry, ¿cómo se define un ácido y una base? [Reactivo de evaluación analítica #90]",
    "options": [
      "Un ácido es un aceptor de pares electrónicos y una base es un donador",
      "Un ácido es un catión metálico y una base es un anión diatómico",
      "Un ácido es un donador de protones (H⁺) y una base es un aceptor de protones (H⁺)",
      "Un ácido aporta iones OH⁻ y una base aporta iones H⁺"
    ],
    "correctIndex": 2,
    "explanation": "Johannes Brønsted y Thomas Lowry definieron en 1923 que los ácidos ceden protones H⁺ a una especie básica que los acepta, formando pares ácido-base conjugados.",
    "skill": "Teorías Ácido-Base",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases de Brønsted-Lowry",
    "subtopic": "Transferencia de Protones"
  },
  {
    "id": "qui-bac-91",
    "sectionId": 6,
    "number": 91,
    "text": "Según el principio de Le Chatelier, ¿hacia dónde se desplazará el equilibrio químico de la síntesis exotérmica del amoníaco N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH < 0) si se incrementa la presión total del sistema disminuyendo el volumen? [Reactivo de evaluación analítica #91]",
    "options": [
      "La constante Kc aumenta exponencialmente",
      "Hacia la derecha (productos), donde hay menor número de moles gaseosos (2 moles frente a 4 moles de reactivos)",
      "Hacia la izquierda (reactivos) para expandir los gases",
      "El equilibrio no se altera al cambiar la presión"
    ],
    "correctIndex": 1,
    "explanation": "Al aumentar la presión, el sistema contrarresta la perturbación desplazándose hacia el lado con menor número de moles de gas (Δn = 2 - 4 = -2), favoreciendo la formación de NH₃.",
    "skill": "Equilibrio Químico y Factores de Perturbación",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Equilibrio Químico",
    "subtopic": "Principio de Le Chatelier y Presión"
  },
  {
    "id": "qui-bac-92",
    "sectionId": 6,
    "number": 92,
    "text": "Si una solución acuosa de ácido clorhídrico fuerte (HCl) tiene una concentración molar de [H₃O⁺] = 0.001 M (10⁻³ mol/L), ¿cuál es el pH de dicha disolución a 25 °C? [Reactivo de evaluación analítica #92]",
    "options": [
      "pH = 3.0",
      "pH = 11.0",
      "pH = 1.0",
      "pH = 7.0"
    ],
    "correctIndex": 0,
    "explanation": "Por definición, pH = -log₁₀[H₃O⁺]. Sustituyendo el valor: pH = -log₁₀(10⁻³) = -(-3) = 3.0.",
    "skill": "Cálculos de pH y Acidez",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases Fuertes",
    "subtopic": "Cálculo de pH en Ácidos Fuertes"
  },
  {
    "id": "qui-bac-93",
    "sectionId": 6,
    "number": 93,
    "text": "En una pila galvánica o celda electroquímica estándar (como la celda Daniell Zn-Cu), ¿qué ocurre en el ánodo? [Reactivo de evaluación analítica #93]",
    "options": [
      "El ánodo es donde ocurre la reducción de cationes Cu²⁺",
      "En el ánodo se deposita cobre metálico puro",
      "El ánodo atrae cationes K⁺ desde el puente salino",
      "El ánodo es el electrodo negativo donde ocurre la oxidación (pérdida de electrones, Zn -> Zn²⁺ + 2e⁻)"
    ],
    "correctIndex": 3,
    "explanation": "En toda celda electroquímica galvánica, la mnemotecnia AN OX (Ánodo = Oxidación) y RED CAT (Reducción = Cátodo) se cumple: el cinc se oxida en el ánodo liberando electrones al circuito externo.",
    "skill": "Electroquímica y Celdas Galvánicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electroquímica",
    "subtopic": "Funcionamiento de la Celda Daniell"
  },
  {
    "id": "qui-bac-94",
    "sectionId": 6,
    "number": 94,
    "text": "¿Cuál es el grupo funcional característico que define a los ésteres en química orgánica? [Reactivo de evaluación analítica #94]",
    "options": [
      "-CHO (grupo carbonilo terminal formilo)",
      "-COOH (grupo carboxilo con protón ácido)",
      "-COO- (carbonilo unido a un oxígeno unido a otro radical de carbono, R-COO-R')",
      "-OH (grupo hidroxilo libre)"
    ],
    "correctIndex": 2,
    "explanation": "Los ésteres se obtienen habitualmente por reacción de esterificación de Fischer entre un ácido carboxílico (R-COOH) y un alcohol (R'-OH), formando R-COO-R' y H₂O.",
    "skill": "Química Orgánica y Grupos Funcionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Funciones Orgánicas Oxigenadas",
    "subtopic": "Ésteres y Esterificación"
  },
  {
    "id": "qui-bac-95",
    "sectionId": 6,
    "number": 95,
    "text": "En cinética química, ¿cuál es la función de un catalizador en una reacción química termodinámicamente favorable? [Reactivo de evaluación analítica #95]",
    "options": [
      "Aumentar la constante de equilibrio Kc",
      "Aumentar la velocidad de reacción proporcionando un mecanismo alternativo con menor energía de activación (E_a) sin consumirse netamente",
      "Desplazar el equilibrio químico aumentando el rendimiento final de productos",
      "Modificar la entalpía estándar de reacción ΔH° volviéndola más exotérmica"
    ],
    "correctIndex": 1,
    "explanation": "Un catalizador acelera tanto la velocidad directa como la inversa al reducir la barrera energética de activación E_a; no altera las energías libres de reactivos ni productos, por lo que ΔG° y Kc permanecen inalterados.",
    "skill": "Cinética Química y Catálisis",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Cinética Química",
    "subtopic": "Rol del Catalizador y Energía de Activación"
  },
  {
    "id": "qui-bac-96",
    "sectionId": 6,
    "number": 96,
    "text": "En una disolución amortiguadora (buffer o tampón) formada por ácido acético (CH₃COOH) y acetato de sodio (CH₃COONa), ¿qué componente neutraliza los iones H⁺ cuando se añade una pequeña cantidad de ácido fuerte? [Reactivo de evaluación analítica #96]",
    "options": [
      "El ion acetato básico conjugado (CH₃COO⁻) formando ácido acético poco disociado",
      "El ion sodio Na⁺ precipitando como sal ácida",
      "El ácido acético no disociado",
      "El agua destilada mediante hidrólisis endotérmica"
    ],
    "correctIndex": 0,
    "explanation": "La base conjugada CH₃COO⁻ reacciona con los H⁺ añadidos: CH₃COO⁻ + H⁺ -> CH₃COOH, amortiguando e impidiendo una variación brusca del pH de la disolución.",
    "skill": "Sistemas Buffer y Amortiguadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Disoluciones Reguladoras de pH",
    "subtopic": "Capacidad Amortiguadora del Acetato"
  },
  {
    "id": "qui-bac-97",
    "sectionId": 6,
    "number": 97,
    "text": "¿Cuál es el tipo de isomería que presentan el butan-1-ol (CH₃-CH₂-CH₂-CH₂OH) y el butan-2-ol (CH₃-CH₂-CH(OH)-CH₃)? [Reactivo de evaluación analítica #97]",
    "options": [
      "Isomería de cadena",
      "Isomería de función",
      "Enantiomería óptica geométrica",
      "Isomería estructural de posición"
    ],
    "correctIndex": 3,
    "explanation": "Ambos comparten la misma fórmula molecular (C₄H₁₀O) y el mismo esqueleto de carbonos lineal con el mismo grupo funcional alcohol (-OH), pero este se ubica en posiciones distintas de la cadena (C1 vs C2).",
    "skill": "Isomería en Química Orgánica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Isomería Estructural",
    "subtopic": "Isómeros de Posición"
  },
  {
    "id": "qui-bac-98",
    "sectionId": 6,
    "number": 98,
    "text": "En termoquímica, ¿qué establece la ley de Hess sobre la entalpía estándar de una reacción química global? [Reactivo de evaluación analítica #98]",
    "options": [
      "El calor de reacción depende exclusivamente de la velocidad de los reactivos",
      "Las reacciones endotérmicas no pueden realizarse por etapas sucesivas",
      "La variación de entalpía total (ΔH°) es independiente del camino o número de etapas intermedias, dependiendo solo de los estados inicial y final",
      "La entalpía de cualquier reacción es siempre igual a cero en el equilibrio"
    ],
    "correctIndex": 2,
    "explanation": "Como la entalpía H es una función de estado termodinámica, el cambio neto de entalpía en una transformación es igual a la suma de las entalpías de cualquier secuencia de pasos en que se descomponga la reacción global.",
    "skill": "Termoquímica y Ley de Hess",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Entalpía de Reacción",
    "subtopic": "Ley de Hess y Funciones de Estado"
  },
  {
    "id": "qui-bac-99",
    "sectionId": 6,
    "number": 99,
    "text": "¿Cuál es la hibridación de los orbitales atómicos del átomo de carbono en el etileno o eteno (H₂C=CH₂) que presenta geometría trigonal plana con ángulos de enlace de 120°? [Reactivo de evaluación analítica #99]",
    "options": [
      "Hibridación sp³d",
      "Hibridación sp²",
      "Hibridación sp³",
      "Hibridación sp"
    ],
    "correctIndex": 1,
    "explanation": "Cada carbono con doble enlace forma 3 enlaces sigma coplanares mediante 3 orbitales híbridos sp² orientados a 120°, y reserva un orbital p puro perpendicular para formar el enlace pi (π) por solapamiento lateral.",
    "skill": "Hibridación del Carbono y Geometría Molecular",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Química del Carbono",
    "subtopic": "Hibridación sp2 en Alquenos"
  },
  {
    "id": "qui-bac-100",
    "sectionId": 6,
    "number": 100,
    "text": "Según la teoría ácido-base de Brønsted-Lowry, ¿cómo se define un ácido y una base? [Reactivo de evaluación analítica #100]",
    "options": [
      "Un ácido es un donador de protones (H⁺) y una base es un aceptor de protones (H⁺)",
      "Un ácido aporta iones OH⁻ y una base aporta iones H⁺",
      "Un ácido es un aceptor de pares electrónicos y una base es un donador",
      "Un ácido es un catión metálico y una base es un anión diatómico"
    ],
    "correctIndex": 0,
    "explanation": "Johannes Brønsted y Thomas Lowry definieron en 1923 que los ácidos ceden protones H⁺ a una especie básica que los acepta, formando pares ácido-base conjugados.",
    "skill": "Teorías Ácido-Base",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Ácidos y Bases de Brønsted-Lowry",
    "subtopic": "Transferencia de Protones"
  }
];
