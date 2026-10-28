import { Question } from '../../../types';

export const CIENCIAS_NATURALES_UNIVERSITARIO: Question[] = [
  {
    "id": "nat-uni-1",
    "sectionId": 4,
    "number": 81,
    "text": "En la teoría del transporte electrónico mitocondrial, ¿cuál es el complejo multienzimático respiratorio de la membrana interna que transfiere electrones desde el succinato al coenzima Q (ubiquinona) sin bombear protones al espacio intermembrana?",
    "options": [
      "Complejo I (NADH deshidrogenasa)",
      "Complejo II (Succinato deshidrogenasa)",
      "Complejo III (Citocromo bc₁)",
      "Complejo IV (Citocromo c oxidasa)"
    ],
    "correctIndex": 1,
    "explanation": "El Complejo II (succinato-ubiquinona oxidorreductasa) une directamente el ciclo de Krebs con la cadena respiratoria oxidando succinato a fumarato mediante FAD. Al no atravesar la membrana interna de forma transmembranal completa, no genera translocación vectorial de protones (ΔμH⁺ = 0).",
    "skill": "Bioenergética y Fosforilación Oxidativa",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Bioquímica Mitocondrial",
    "subtopic": "Complejo II y Cadena Respiratoria"
  },
  {
    "id": "nat-uni-2",
    "sectionId": 4,
    "number": 82,
    "text": "En la termodinámica de procesos irreversibles lejanos al equilibrio postulada por Ilya Prigogine, ¿cómo se denominan los sistemas abiertos autoorganizados que mantienen estructuras ordenadas disipando continuamente entropía al medio ambiente?",
    "options": [
      "Estructuras disipativas",
      "Sistemas adiabáticos canónicos",
      "Cuerpos negros radiantes",
      "Retículos conservativos de Liouville"
    ],
    "correctIndex": 0,
    "explanation": "Las estructuras disipativas (Premio Nobel 1977) emergen en regímenes no lineales lejos del equilibrio termodinámico gracias a flujos constantes de materia y energía que exportan entropía (d_e S < 0) compensando la producción interna (d_i S > 0).",
    "skill": "Termodinámica del No Equilibrio y Sistemas Complejos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Fisicoquímica Avanzada",
    "subtopic": "Estructuras Disipativas de Prigogine"
  },
  {
    "id": "nat-uni-3",
    "sectionId": 4,
    "number": 83,
    "text": "En la oceanografía física y dinámica planetaria de fluidos geofísicos, ¿qué balance asintótico entre el gradiente horizontal de presión horizontal y la aceleración de Coriolis rige las corrientes oceánicas y vientos geostróficos a gran escala?",
    "options": [
      "Balance ciclostrófico",
      "Balance geostrófico (f · v_g = (1/ρ) · ∇p)",
      "Ondas solitarias de Korteweg-de Vries",
      "Flujo de Poiseuille laminar"
    ],
    "correctIndex": 1,
    "explanation": "A escalas planetarias (número de Rossby Ro ≪ 1), la fuerza de Coriolis equilibra exactamente la fuerza del gradiente bárico horizontal, provocando que los fluidos circulen paralelos a las isobaras en vez de cruzar perpendicularmente hacia la baja presión.",
    "skill": "Dinámica de Fluidos Geofísicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Oceanografía y Meteorología Dinámica",
    "subtopic": "Equilibrio Geostrófico"
  },
  {
    "id": "nat-uni-4",
    "sectionId": 4,
    "number": 84,
    "text": "En la biología molecular de la transcripción eucariota, ¿cuál de las siguientes ARN polimerasas es la responsable de la síntesis de todos los ARN mensajeros (ARNm) que codifican proteínas nucleares y la mayoría de ARN nucleares pequeños (snRNA)?",
    "options": [
      "ARN Polimerasa I",
      "ARN Polimerasa II",
      "ARN Polimerasa III",
      "ARN Polimerasa IV mitocondrial"
    ],
    "correctIndex": 1,
    "explanation": "La ARN Polimerasa II transcribe los genes codificantes de proteínas a pre-ARNm, caracterizándose por su dominio carboxi-terminal (CTD) repetido susceptible a fosforilación para acoplar el capping, splicing y poliadenilación.",
    "skill": "Genómica y Transcripción Eucariota",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Biología Molecular",
    "subtopic": "ARN Polimerasa II y CTD"
  },
  {
    "id": "nat-uni-5",
    "sectionId": 4,
    "number": 85,
    "text": "En la paleobiología y teoría evolutiva, ¿qué modelo propuesto por Stephen Jay Gould y Niles Eldredge en 1972 sostiene que la historia macroevolutiva se caracteriza por largos períodos de estasis morfológica interrumpidos por episodios geológicamente rápidos de especiación cladogenética?",
    "options": [
      "Gradualismo filético anagenético",
      "Teoría del equilibrio puntuado",
      "Ortogénesis lamarckiana",
      "Catastrofismo cuvieriano"
    ],
    "correctIndex": 1,
    "explanation": "El equilibrio puntuado demostró a través del registro fósil que la mayoría de especies muestran poca transformación morfológica durante millones de años (estasis), concentrándose la divergencia cladística en episodios rápidos en poblaciones periféricas aisladas.",
    "skill": "Macroevolución y Paleontología",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Biología Evolutiva Superior",
    "subtopic": "Equilibrio Puntuado"
  },
  {
    "id": "nat-uni-6",
    "sectionId": 4,
    "number": 86,
    "text": "En la cinética enzimática según el modelo hiperbólico de Michaelis-Menten, ¿cómo se interpreta bioquímicamente la constante de Michaelis K_m?",
    "options": [
      "La velocidad máxima de hidrólisis enzimática a saturación total de sustrato.",
      "La concentración de sustrato [S] a la cual la velocidad de reacción catalítica v alcanza exactamente la mitad de su velocidad máxima (v = V_max / 2).",
      "El número de recambio turnover k_cat por segundo.",
      "La constante de equilibrio químico termodinámico de la reacción."
    ],
    "correctIndex": 1,
    "explanation": "Por la ecuación v = (V_max · [S]) / (K_m + [S]), cuando [S] = K_m, v = V_max / 2. Un valor bajo de K_m refleja generalmente una mayor afinidad aparente de la enzima por su sustrato fisiológico.",
    "skill": "Enzimología Cuantitativa y Cinética",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Bioquímica Enzimática",
    "subtopic": "Cinética de Michaelis-Menten"
  },
  {
    "id": "nat-uni-7",
    "sectionId": 4,
    "number": 87,
    "text": "En la física del interior terrestre y sismología profunda, ¿a qué transición geoquímica y de fase a 2900 km de profundidad corresponde la discontinuidad de Gutenberg que marca la desaparición completa de las ondas sísmicas S (transversales de cizalla)?",
    "options": [
      "Límite entre la corteza y el manto litosférico (Moho)",
      "Límite entre el manto rocoso inferior de silicatos densos (perovskita/bridgmanita) y el núcleo exterior metálico líquido (Fe-Ni)",
      "Límite entre el núcleo exterior líquido y el núcleo interior sólido (Lehmann)",
      "Límite de la astenosfera plástica a 410 km"
    ],
    "correctIndex": 1,
    "explanation": "Las ondas sísmicas transversales de cizalla (S) no se propagan a través de líquidos (rigidez μ = 0). Su detención brusca a los 2900 km en la discontinuidad de Gutenberg demostró que el núcleo externo está compuesto por hierro y níquel en estado líquido fundido.",
    "skill": "Sismología y Estructura Interna del Planeta",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Geofísica",
    "subtopic": "Discontinuidades Sísmicas de Gutenberg"
  },
  {
    "id": "nat-uni-8",
    "sectionId": 4,
    "number": 88,
    "text": "En la biofísica de membranas y neurofisiología, ¿qué ecuación electroquímica permite calcular el potencial de membrana en reposo V_m considerando las permeabilidades relativas y concentraciones de múltiples iones permeantes (K⁺, Na⁺, Cl⁻)?",
    "options": [
      "Ecuación de Nernst uniiónica",
      "Ecuación de Goldman-Hodgkin-Katz (GHK)",
      "Ecuación de Henderson-Hasselbalch",
      "Ecuación de Van't Hoff osmótica"
    ],
    "correctIndex": 1,
    "explanation": "La ecuación GHK de campo constante integra las permeabilidades iónicas P_K, P_Na y P_Cl junto con sus concentraciones intra y extracelulares para modelar el estado estacionario del potencial transmembrana neuronal (aprox. -70 mV).",
    "skill": "Biofísica Celular y Neurobiología",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Neurofisiología",
    "subtopic": "Ecuación GHK y Potencial de Reposo"
  },
  {
    "id": "nat-uni-9",
    "sectionId": 4,
    "number": 89,
    "text": "En la geoquímica isotópica, ¿qué isótopo radiogénico inestable con semivida de aproximadamente 5730 años se utiliza para datar restos orgánicos arqueológicos y del Holoceno superior mediante espectrometría de masas con aceleradores (AMS)?",
    "options": [
      "Uranio-238 (²³⁸U)",
      "Carbono-14 (¹⁴C)",
      "Potasio-40 (⁴⁰K)",
      "Rubidio-87 (⁸⁷Rb)"
    ],
    "correctIndex": 1,
    "explanation": "El ¹⁴C se produce continuamente en la atmósfera por bombardeo de neutrones cósmicos sobre ¹⁴N. Al morir un organismo cesa el intercambio trófico de carbono, y la desintegración beta de ¹⁴C a ¹⁴N con t_{1/2} = 5730 años permite datar muestras de hasta ~50,000 años.",
    "skill": "Geocronología Radiométrica e Isótopos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Geoquímica Nuclear",
    "subtopic": "Datación por Radiocarbono 14"
  },
  {
    "id": "nat-uni-10",
    "sectionId": 4,
    "number": 90,
    "text": "En la inmunología molecular, ¿cuál es el mecanismo genético somático exclusivo de los linfocitos B y T en desarrollo que genera la inmensa diversidad de repertorio de anticuerpos y receptores TCR combinando segmentos genéticos variables, de diversidad y de unión?",
    "options": [
      "Hipermutación adaptativa lamarckiana",
      "Recombinación V(D)J mediada por las recombinasas RAG1 y RAG2",
      "Edición de ARN por citidina desaminasa (AID)",
      "Metilación diferencial de islas CpG"
    ],
    "correctIndex": 1,
    "explanation": "La recombinación somática V(D)J catalizada por el complejo enzimático RAG1/RAG2 corta e introduce rupturas de doble cadena unidas por unión de extremos no homólogos (NHEJ) con adición de nucleótidos de unión N y P (enzima TdT), generando billones de combinaciones únicas.",
    "skill": "Inmunogenética Molecular",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Inmunología Avanzada",
    "subtopic": "Recombinación V(D)J"
  },
  {
    "id": "nat-uni-11",
    "sectionId": 4,
    "number": 91,
    "text": "En ecología matemática teórica, ¿qué modelo de ecuaciones diferenciales ordinarias no lineales acopladas simula la dinámica periódica de interacción y fluctuación demográfica entre una población de presas y sus depredadores?",
    "options": [
      "Modelo logístico de Verhulst",
      "Ecuaciones de Lotka-Volterra",
      "Matriz de Leslie estocástica",
      "Ecuación de difusión de Fokker-Planck"
    ],
    "correctIndex": 1,
    "explanation": "El sistema de Lotka-Volterra: dx/dt = αx - βxy; dy/dt = δxy - γy modela órbitas cerradas en el espacio de fases correspondientes a ciclos poblacionales desfasados en el tiempo entre presa y depredador.",
    "skill": "Modelado Matemático de Dinámica de Poblaciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Biología Teórica",
    "subtopic": "Ecuaciones de Lotka-Volterra"
  },
  {
    "id": "nat-uni-12",
    "sectionId": 4,
    "number": 92,
    "text": "En la biología del desarrollo y embriología molecular, ¿cómo se denominan los factores de transcripción altamente conservados con un dominio homólogo de unión al ADN de 60 aminoácidos (homeodominio) que especifican la identidad espacial de los segmentos corporales anteroposteriores?",
    "options": [
      "Genes Hox (homeobox)",
      "Oncogenes Ras",
      "Proto-oncogenes Myc",
      "Histonas desacetilasas HDAC"
    ],
    "correctIndex": 0,
    "explanation": "Los genes Hox muestran el fenómeno de colinealidad espacial y temporal: el orden de los genes en el cromosoma corresponde fielmente a la secuencia anteroposterior y orden temporal de desarrollo corporal en animales bilaterales.",
    "skill": "Morfogénesis y Biología del Desarrollo",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Evo-Devo y Desarrollo Embrionario",
    "subtopic": "Genes Homeóticos Hox"
  },
  {
    "id": "nat-uni-13",
    "sectionId": 4,
    "number": 93,
    "text": "En la fisicoquímica de interfaces celulares, ¿qué potencial electrocinético cuantifica la diferencia de potencial electrostático entre el plano de cizalla del fluido circundante en movimiento y el seno de la solución dispersante en suspensiones coloidales o vesículas lipídicas?",
    "options": [
      "Potencial Redox estándar E°",
      "Potencial Zeta (ζ)",
      "Potencial químico de Gibbs μ",
      "Sobrepotencial de Tafel"
    ],
    "correctIndex": 1,
    "explanation": "El potencial Zeta (expresado en mV) gobierna la estabilidad coloidal: valores con magnitudes absolutas mayores a |30 mV| generan repulsión electrostática suficiente para evitar la floculación o agregación de partículas y micelas.",
    "skill": "Fisicoquímica de Coloides e Interfaces",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Química Coloidal",
    "subtopic": "Potencial Zeta"
  },
  {
    "id": "nat-uni-14",
    "sectionId": 4,
    "number": 94,
    "text": "En la neuroquímica sináptica, ¿qué receptor ionotrópico de glutamato postsináptico requiere tanto la unión de ligando como la despolarización previa de membrana para desalojar un ion de magnesio bloqueador (Mg²⁺), permitiendo la entrada masiva de calcio (Ca²⁺) y la inducción de potenciación a largo plazo (LTP)?",
    "options": [
      "Receptor AMPA",
      "Receptor NMDA (N-metil-D-aspartato)",
      "Receptor GABA_A",
      "Receptor nicotínico de acetilcolina"
    ],
    "correctIndex": 1,
    "explanation": "El receptor NMDA actúa como detector de coincidencia sináptica: a potenciales de reposo está bloqueado por Mg²⁺ dependiente de voltaje. Tras la despolarización inicial mediada por receptores AMPA, el Mg²⁺ se expulsa, permitiendo la afluencia de Ca²⁺ que activa CaMKII e induce plasticidad sináptica.",
    "skill": "Neurobiología Celular y Plasticidad Sináptica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Neurociencias",
    "subtopic": "Receptor NMDA y LTP"
  },
  {
    "id": "nat-uni-15",
    "sectionId": 4,
    "number": 95,
    "text": "En la climatología analítica y paleoclimatología cuaternaria, ¿qué ciclos periódicos astronómicos de excentricidad orbital (100 ka y 405 ka), oblicuidad del eje (41 ka) y precesión climática (23 ka) modulan la insolación solar y gobiernan las glaciaciones pleistocénicas?",
    "options": [
      "Ciclos de manchas solares de Schwabe",
      "Ciclos orbitales de Milankovitch",
      "Oscilación del Atlántico Norte (NAO)",
      "Ciclos de El Niño ENSO"
    ],
    "correctIndex": 1,
    "explanation": "Milutin Milankovitch calculó que las variaciones astronómicas cuasiperiódicas de la órbita terrestre alteran la distribución latitudinal estacional de la radiación solar recibida en altas latitudes boreales, detonando los avances y retrocesos de los casquetes glaciares.",
    "skill": "Paleoclimatología y Geología Cuaternaria",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciencias del Clima",
    "subtopic": "Ciclos de Milankovitch"
  },
  {
    "id": "nat-uni-16",
    "sectionId": 4,
    "number": 96,
    "text": "En la epigenética molecular eucariota, ¿qué enzima cataliza la transferencia de un grupo metilo desde la S-adenosilmetionina (SAM) a la posición 5 de las bases citosina en dinucleótidos CpG, asociada típicamente con silenciamiento transcripcional de promotores?",
    "options": [
      "Histona acetiltransferasa (HAT)",
      "ADN metiltransferasa (DNMT)",
      "ARN helicasa DEAD-box",
      "Topoisomerasa IIalfa"
    ],
    "correctIndex": 1,
    "explanation": "Las DNMTs (como DNMT1 para mantenimiento durante la replicación y DNMT3A/3B de novo) metilan citosinas en islas CpG de regiones promotoras, reclutando proteínas de unión MBD y correpresores de cromatina.",
    "skill": "Epigenómica y Regulación de la Expresión Génica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Genética Epigenética",
    "subtopic": "Metilación del ADN y DNMT"
  },
  {
    "id": "nat-uni-17",
    "sectionId": 4,
    "number": 97,
    "text": "En la química inorgánica y teoría del campo de ligandos de complejos de metales de transición, ¿a qué fenómeno mecánico cuántico se debe la distorsión geométrica espontánea de complejos octaédricos con configuración d⁹ (como el ion cúprico [Cu(H₂O)₆]²⁺) para romper la degeneración orbital y reducir la energía electrónica global?",
    "options": [
      "Efecto Zeeman",
      "Efecto Jahn-Teller",
      "Efecto Raman resonante",
      "Efecto Stark lineal"
    ],
    "correctIndex": 1,
    "explanation": "El Teorema de Jahn-Teller enuncia que cualquier molécula no lineal en un estado fundamental con degeneración orbital electrónica sufre una distorsión geométrica espontánea (generalmente elongación tetragonal axial) que desdobla los niveles orbitales degenerados disminuyendo la energía total del sistema.",
    "skill": "Química Cuántica de Coordinación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Química Inorgánica Superior",
    "subtopic": "Efecto Jahn-Teller"
  },
  {
    "id": "nat-uni-18",
    "sectionId": 4,
    "number": 98,
    "text": "En la virología molecular avanzada, ¿qué complejo ribonucleoproteico de retrotranscripción vírica cataliza tanto la síntesis de ADNc a partir del genoma de ARN vírico como la actividad ribonucleasa H (RNasa H) que degrada la hebra molde de ARN intermediaria?",
    "options": [
      "ARN polimerasa ARN dependiente (RdRp)",
      "Transcriptasa inversa (Retrotranscriptasa)",
      "Integrasa vírica",
      "Proteasa aspártica"
    ],
    "correctIndex": 1,
    "explanation": "La transcriptasa inversa del retrovirus (como en el VIH-1) posee tres actividades bioquímicas acopladas: ADN polimerasa dependiente de ARN, degradación endonucleolítica por ribonucleasa H del ARN híbrido y ADN polimerasa dependiente de ADN para formar el provirus bicatenario.",
    "skill": "Virología Molecular y Retrovirus",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Microbiología Molecular",
    "subtopic": "Transcriptasa Inversa y RNasa H"
  },
  {
    "id": "nat-uni-19",
    "sectionId": 4,
    "number": 99,
    "text": "En la biofísica cuántica de la fotosíntesis, ¿a través de qué mecanismo de transferencia de energía resonante sin emisión radiante se transportan excitones excitados desde los pigmentos antena del complejo captador de luz (LHC) hasta el dímero especial del centro de reacción fotosintético?",
    "options": [
      "FRET (Fluorescence Resonance Energy Transfer / Transferencia de Förster)",
      "Efecto fotoeléctrico einsteniano",
      "Fusión nuclear de deuterio",
      "Túnel magnético de Josephson"
    ],
    "correctIndex": 0,
    "explanation": "La transferencia de energía por resonancia de Förster (FRET) opera mediante acoplamiento dipolo-dipolo de campo cercano no radiativo, transfiriendo energía de excitación con rendimientos cuánticos extraordinarios cercanos al 95-99% en picosegundos.",
    "skill": "Biofísica Cuántica y Fotosíntesis",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Biofísica Molecular",
    "subtopic": "Mecanismo FRET en Complejos Antena"
  },
  {
    "id": "nat-uni-20",
    "sectionId": 4,
    "number": 100,
    "text": "En la genética evolutiva de poblaciones, ¿qué prueba estadística basada en la comparación de las tasas de sustituciones sinónimas (d_S) y no sinónimas (d_N) en secuencias codificantes permite detectar selección natural darwiniana positiva o diversificadora (cuando d_N / d_S > 1)?",
    "options": [
      "Prueba de Mantel estocástica",
      "Razón d_N / d_S (o ω de Goldman-Yang)",
      "Prueba t de Student pareada",
      "Análisis ANOVA univariado"
    ],
    "correctIndex": 1,
    "explanation": "En el análisis de alineamiento de codones, una razón ω = d_N / d_S > 1 demuestra que las mutaciones que alteran aminoácidos se fijan a una tasa superior a la esperada por deriva neutral, confirmando selección positiva direccional o adaptativa.",
    "skill": "Bioinformática y Genómica Comparada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Evolución Molecular",
    "subtopic": "Razón dN/dS y Selección Positiva"
  },
{
  "id": "nat-uni-21",
  "sectionId": 4,
  "number": 21,
  "text": "En cinética enzimática Michaelis-Menten, ¿qué efecto cinético específico produce un inhibidor competitivo sobre los parámetros V_max y K_m aparentes de la reacción catalizada?",
  "options": [
    "V_max permanece inalterada y el K_m aparente aumenta (menor afinidad aparente)",
    "V_max disminuye y el K_m aparente permanece constante",
    "Tanto V_max como K_m aparente disminuyen en la misma proporción",
    "V_max aumenta y K_m aparente se reduce a cero"
  ],
  "correctIndex": 0,
  "explanation": "El inhibidor competitivo se une reversiblemente al sitio activo libre de la enzima compitiendo con el sustrato. Al aumentar suficientemente la concentración de sustrato ([S] >> K_m), se desplaza al inhibidor alcanzando la misma V_max, pero requiriéndose mayor [S] para lograr 0.5 V_max, por lo que K_m aumenta.",
  "skill": "Cinética Enzimática e Inhibición",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Bioquímica Avanzada",
  "subtopic": "Inhibición Competitiva de Michaelis-Menten"
},
{
  "id": "nat-uni-22",
  "sectionId": 4,
  "number": 22,
  "text": "¿Cuál es el mecanismo biofísico por el cual la ATP sintasa mitocondrial (F₀F₁) acopla el flujo transmembrana de protones a través de la subunidad c a la síntesis de ATP a partir de ADP y Pi en la matriz mitocondrial?",
  "options": [
    "Mecanismo de cambio de conformación rotacional propuesto por Paul Boyer, donde la rotación del tallo gamma altera los sitios catalíticos en las subunidades beta entre tres conformaciones (abierta, suelta y apretada)",
    "Transferencia directa de electrones desde el NADH a los grupos fosfato de las subunidades alfa",
    "Transporte pasivo por difusión facilitada a través de un canal hidrofóbico sin cambios conformacionales",
    "Fosforilación a nivel de sustrato mediada por proteólisis cíclica"
  ],
  "correctIndex": 0,
  "explanation": "El gradiente electroquímico de protones induce la rotación del anillo c y el tallo central gamma; a medida que gamma gira 360°, induce secuencialmente conformaciones O (open), L (loose) y T (tight) en los tres dímeros alfa-beta, catalizando la síntesis y liberación de tres moléculas de ATP por revolución.",
  "skill": "Bioenergética y Fosforilación Oxidativa",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Bioquímica y Biofísica Celular",
  "subtopic": "Mecanismo Rotacional de la ATP Sintasa"
},
{
  "id": "nat-uni-23",
  "sectionId": 4,
  "number": 23,
  "text": "En epigenética molecular, ¿cuál es la consecuencia transcripcional general de la metilación catalizada por DNMT en el carbono 5 de las citosinas (5-mC) situadas en islas CpG dentro de regiones promotoras eucariotas?",
  "options": [
    "Silenciamiento o represión transcripcional del gen por reclutamiento de proteínas MBD y complejos desacetilasa de histonas (HDAC)",
    "Activación transcripcional constitutiva irreversible",
    "Inducción inmediata de recombinación homóloga durante la interfase",
    "Aumento en la velocidad de elongación de la ARN polimerasa II"
  ],
  "correctIndex": 0,
  "explanation": "La hipermetilación de citosinas en islas CpG de promotores atrae proteínas con dominios de unión a metil-CpG (como MeCP2/MBD), las cuales reclutan histona desacetilasas que condensan la cromatina a heterocromatina inactiva transcripcionalmente.",
  "skill": "Regulación Epigenética de la Expresión Génica",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Molecular y Epigenética",
  "subtopic": "Metilación del ADN y Silenciamiento Génico"
},
{
  "id": "nat-uni-24",
  "sectionId": 4,
  "number": 24,
  "text": "En neurofisiología, ¿qué fenómeno de plasticidad sináptica a largo plazo (LTP) en la sinapsis colateral de Schaffer del hipocampo requiere la despolarización previa de la membrana postsináptica para expulsar el bloqueo por iones Mg²⁺ de los receptores NMDA?",
  "options": [
    "Potenciación a largo plazo asociativa dependiente del influjo de Ca²⁺ a través de receptores NMDA",
    "Depresión a largo plazo homosináptica por fosfatasas calcineurínicas",
    "Facilitación presináptica transitoria de milisegundos",
    "Bloqueo estocástico de canales de potasio Kv1.1"
  ],
  "correctIndex": 0,
  "explanation": "A potenciales de membrana en reposo (-70 mV), el ion Mg²⁺ extracelular bloquea el poro del receptor NMDA; la despolarización previa mediada por receptores AMPA expulsa electrostáticamente el Mg²⁺, permitiendo la entrada masiva de Ca²⁺ indispensable para activar CAMKII y reclutar más receptores AMPA.",
  "skill": "Neurobiología y Fisiología Sináptica",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Plasticidad Sináptica y Memoria",
  "subtopic": "Receptores NMDA y Mecanismo de LTP"
},
{
  "id": "nat-uni-25",
  "sectionId": 4,
  "number": 25,
  "text": "En inmunología de vertebrados, ¿qué enzimas recombinasas codificadas genéticamente son responsables de realizar los cortes en horquilla de doble cadena en los flancos de las secuencias señal de recombinación (RSS) durante la generación de la diversidad de anticuerpos y receptores TCR?",
  "options": [
    "RAG1 y RAG2 (Recombination Activating Genes)",
    "Cas9 y Cas12a",
    "ADN polimerasa gamma y helicasa RecQ",
    "Topoisomerasa II alfa y ligasa IV"
  ],
  "correctIndex": 0,
  "explanation": "El complejo heterodimérico RAG1/RAG2 reconoce las secuencias heptámero-espaciador-nonámero RSS adyacentes a los segmentos V, D y J, introduciendo cortes monocatenarios y transesterificaciones que forman horquillas de ADN, esenciales para la recombinación somática V(D)J.",
  "skill": "Inmunología Celular y Molecular",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Inmunogenética",
  "subtopic": "Recombinación V(D)J y Enzimas RAG"
},
{
  "id": "nat-uni-26",
  "sectionId": 4,
  "number": 26,
  "text": "En la paleoclimatología isotópica, ¿por qué los foraminíferos bentónicos que crecen durante períodos glaciares presentan una mayor relación isotópica δ¹⁸O en sus conchas calcáreas (CaCO₃)?",
  "options": [
    "Porque el isótopo ligero ¹⁶O se evapora preferencialmente del océano y queda retenido en los grandes casquetes de hielo continental, enriqueciendo al agua oceánica en ¹⁸O",
    "Porque los glaciares liberan ácido sulfhídrico enriquecido en oxígeno-18",
    "Debido a la ausencia total de radiación cósmica en el fondo oceánico",
    "Porque la fotosíntesis bentónica fija selectivamente ¹⁸O a temperaturas bajo cero"
  ],
  "correctIndex": 0,
  "explanation": "El fraccionamiento por evaporación favorece las moléculas de H₂¹⁶O más ligeras. Al evaporarse y precipitar sobre latitudes polares formando mantos glaciares, el ¹⁶O queda secuestrado en tierra firme, elevando la relación ¹⁸O/¹⁶O en el océano residual y por tanto en el carbonato bioesquelético.",
  "skill": "Geoquímica Isotópica y Paleoclima",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Paleoecología y Paleoclimatología",
  "subtopic": "Isótopos de Oxígeno delta-18O"
},
{
  "id": "nat-uni-27",
  "sectionId": 4,
  "number": 27,
  "text": "En la transducción de señales por receptores acoplados a proteínas Gq (GPCR), ¿qué cascada de segundos mensajeros se desencadena tras la activación de la fosfolipasa C beta (PLCβ)?",
  "options": [
    "Hidrólisis de PIP₂ en IP₃ (inositol 1,4,5-trifosfato) y DAG (diacilglicerol), provocando liberación de Ca²⁺ del retículo y activación de PKC",
    "Síntesis masiva de AMP cíclico y fosforilación por PKA",
    "Apertura directa de canales de sodio dependientes de voltaje en la membrana",
    "Desfosforilación de la cadena ligera de miosina por MLCP"
  ],
  "correctIndex": 0,
  "explanation": "La PLCβ hidroliza el fosfolípido de membrana PIP₂ produciendo IP₃ soluble, que se une a receptores del retículo endoplásmico liberando Ca²⁺ citosólico, y DAG lipofílico, que junto con el calcio activa la proteína quinasa C (PKC).",
  "skill": "Transducción de Señales Celulares",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Señalización Celular",
  "subtopic": "Vía de la Fosfolipasa C / IP3 / DAG"
},
{
  "id": "nat-uni-28",
  "sectionId": 4,
  "number": 28,
  "text": "En ecología teórica de poblaciones, ¿cuál es la ecuación diferencial clásica del modelo logístico de Verhulst que describe el crecimiento poblacional limitado por la capacidad de carga K del medio ambiente?",
  "options": [
    "dN/dt = r · N · (1 - N / K)",
    "dN/dt = r · N",
    "dN/dt = K · N / (r + N)",
    "dN/dt = -r · N²"
  ],
  "correctIndex": 0,
  "explanation": "La ecuación logística dN/dt = r·N(1 - N/K) modela un crecimiento intrínseco inicial r cuando N << K, el cual se desacelera conforme el término amortiguador (1 - N/K) aproxima a cero a medida que el tamaño poblacional N se aproxima a la capacidad de carga K.",
  "skill": "Ecología Matemática y Dinámica de Poblaciones",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Modelos Ecológicos",
  "subtopic": "Modelo Logístico de Verhulst"
},
{
  "id": "nat-uni-29",
  "sectionId": 4,
  "number": 29,
  "text": "¿Cuál es la función del complejo de corte y empalme (espliceosoma) en la maduración del ARN mensajero precursor (pre-ARNm) de eucariotas superiores?",
  "options": [
    "Reconocer secuencias consenso en los extremos 5' y 3' del intrón y en el punto de ramificación de adenina, catalizando dos reacciones de transesterificación para escindir intrones y empalmar exones",
    "Añadir la cola poli-A en el extremo 5' sin gasto de nucleótidos",
    "Traducir los codones de iniciación AUG en metionina",
    "Metilar la guanina del caperuza 5' para transporte nuclear"
  ],
  "correctIndex": 0,
  "explanation": "El espliceosoma, compuesto por snRNPs (U1, U2, U4, U5, U6) y más de 100 proteínas, alinea el sitio donor 5' (GU), el sitio aceptor 3' (AG) y la adenina del sitio de ramificación, formando una estructura intermedia en lazo (lariat) para liberar el intrón.",
  "skill": "Biología Molecular del ARN",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Procesamiento del ARN",
  "subtopic": "Splicing y Espliceosoma"
},
{
  "id": "nat-uni-30",
  "sectionId": 4,
  "number": 30,
  "text": "En biogeografía de islas de MacArthur y Wilson, ¿qué predice la teoría sobre el número de especies en equilibrio dinámico (S*) de una isla oceánica?",
  "options": [
    "Es el punto donde la tasa de inmigración de nuevas especies (que decrece con la distancia al continente) se iguala con la tasa de extinción de especies locales (que decrece con el área de la isla)",
    "El número de especies se incrementa indefinidamente hasta saturar la masa continental",
    "Las islas grandes y lejanas albergan siempre menor diversidad que las islas pequeñas y aisladas",
    "La tasa de extinción en una isla desierta es siempre nula e independiente del número de especies"
  ],
  "correctIndex": 0,
  "explanation": "El modelo de equilibrio insular predice que el equilibrio dinámico S* se establece en la intersección de la curva de colonización/inmigración (determinada por la distancia al continente) y la curva de extinción (determinada por el tamaño o área de la isla).",
  "skill": "Biogeografía y Ecología Insular",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Ecología Cuantitativa",
  "subtopic": "Teoría de Biogeografía de Islas de MacArthur-Wilson"
},
{
  "id": "nat-uni-41",
  "sectionId": 4,
  "number": 41,
  "text": "¿Cuál es el fundamento físico-químico de la técnica de secuenciación masiva en paralelo por síntesis de Illumina?",
  "options": [
    "Medición de fluctuaciones de conductancia iónica a través de un poro proteico biológico sin síntesis de ADN",
    "Detección electroquímica de liberación de iones hidrógeno (protones H⁺) mediante sensores ion-sensibles ISFET",
    "Separación electroforética capilar tradicional por degradación química de Maxam-Gilbert",
    "Amplificación clonal por puente térmico en una celda de flujo seguida de incorporación cíclica de nucleótidos marcados fluorescentemente con terminadores reversibles"
  ],
  "correctIndex": 3,
  "explanation": "La tecnología Illumina utiliza cebadores anclados a celdas de flujo de vidrio para generar clústeres por PCR en puente; luego una polimerasa incorpora nucleótidos marcados con fluoróforos con terminador en 3'-OH que se registran ópticamente y se escinden químicamente por ciclo.",
  "skill": "Genómica Funcional y Tecnologías NGS",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Genómica y Biología Molecular",
  "subtopic": "Secuenciación Illumina por Síntesis"
},
{
  "id": "nat-uni-42",
  "sectionId": 4,
  "number": 42,
  "text": "En la termodinámica del plegamiento de proteínas globulares solubles en disolución acuosa, ¿cuál es la principal fuerza impulsora entrópica que favorece el estado nativo plegado a temperatura fisiológica?",
  "options": [
    "La repulsión electrostática de aniones sulfato en la superficie",
    "La disminución neta de la entropía conformacional de la cadena polipeptídica aislada",
    "El efecto hidrofóbico, que libera moléculas de agua estructuradas en jaulas de clatrato alrededor de cadenas laterales no polares aumentando la entropía del solvente",
    "La formación de enlaces peptídicos de alta energía entre lisinas"
  ],
  "correctIndex": 2,
  "explanation": "Aunque la cadena polipeptídica pierde entropía conformacional al plegarse (ΔS_cadena < 0), el empaquetamiento del núcleo hidrofóbico expulsa las jaulas ordenadas de agua circundantes, produciendo una gran ganancia entrópica del solvente (ΔS_solvente >> 0) que hace ΔG globalmente negativo.",
  "skill": "Estructura y Plegamiento de Proteínas",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica de Macromoléculas",
  "subtopic": "Efecto Hidrofóbico y Entropía en el Plegamiento"
},
{
  "id": "nat-uni-43",
  "sectionId": 4,
  "number": 43,
  "text": "En el ciclo biogeoquímico global del carbono y el control del clima terrestre a escalas de millones de años (ciclo carbonato-silicato de Walker), ¿qué proceso actúa como el sumidero termodinámico primario de CO₂ atmosférico?",
  "options": [
    "La precipitación de halita en cuencas endorreicas hipersalinas",
    "La meteorización química de minerales silicatados continentales (como CaSiO₃) por ácido carbónico seguida de precipitación marina de carbonatos (CaCO₃)",
    "La fotosíntesis de líquenes en desiertos polares",
    "La emisión magmática de basaltos en dorsales mediooceánicas"
  ],
  "correctIndex": 1,
  "explanation": "La reacción de Urey CaSiO₃ + CO₂ -> CaCO₃ + SiO₂ describe cómo la disolución de silicatos por lluvia rica en CO₂ transporta Ca²⁺ y HCO₃⁻ a los océanos, donde organismos calcificadores precipitan CaCO₃ permanente, actuando como termostato planetario.",
  "skill": "Geoquímica Global y Ciclos Biogeoquímicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Geociencias y Cambio Climático Profundo",
  "subtopic": "Meteorización de Silicatos y Termostato de Carbono"
},
{
  "id": "nat-uni-44",
  "sectionId": 4,
  "number": 44,
  "text": "En farmacodinámica molecular, ¿cómo se define el fenómeno del 'sesgo funcional' o 'agonismo sesgado' (biased agonism) en receptores 7-transmembrana GPCR?",
  "options": [
    "Capacidad de un ligando para estabilizar diferencialmente conformaciones del receptor que activan preferentemente una vía efectora (v.gr., proteína G) sobre otra (v.gr., reclutamiento de beta-arrestina)",
    "Inactivación irreversible del receptor por unión covalente al bolsillo ortostérico",
    "Estimulación sincrónica e idéntica de todas las subfamilias heterotriméricas Gαs, Gαi y Gαq",
    "Degradación lisosómica del fármaco sin inducir señalización celular"
  ],
  "correctIndex": 0,
  "explanation": "Los GPCRs no son simples interruptores binarios on/off; diferentes ligandos inducen estados conformacionales sutilmente distintos que activan selectivamente la cascada de proteínas G o la vía de beta-arrestinas, permitiendo diseñar fármacos con eficacia terapéutica y mínimos efectos adversos.",
  "skill": "Farmacología Molecular de GPCRs",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Farmacología y Bioquímica Celular",
  "subtopic": "Agonismo Sesgado en GPCRs"
},
{
  "id": "nat-uni-45",
  "sectionId": 4,
  "number": 45,
  "text": "¿Cuál es el papel biológico del complejo multiproteico cohesina durante el ciclo celular eucariota mitótico?",
  "options": [
    "Fosforilar los filamentos intermedios de lámina nuclear para disolver la carioteca",
    "Condensar la cromatina en fibras de 30 nm durante la profase temprana",
    "Sintetizar los microtúbulos cinetocóricos del huso acromático",
    "Mantener unidas físicamente a las cromátidas hermanas desde la fase S de replicación hasta su escisión por la separasa en la transición metafase-anafase"
  ],
  "correctIndex": 3,
  "explanation": "La cohesina forma un anillo proteico (compuesto por Smc1, Smc3, Scc1 y Scc3) que rodea y mantiene unidas a las dos cromátidas hermanas. En anafase, la securina es degradada por el APC/C, liberando a la separasa activa que cliva proteolíticamente a Scc1.",
  "skill": "Regulación del Ciclo Celular Mitótico",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Celular y Genética",
  "subtopic": "Complejo Cohesina y Segregación Cromosómica"
},
{
  "id": "nat-uni-46",
  "sectionId": 4,
  "number": 46,
  "text": "En biofísica de canales iónicos, ¿cómo explica el filtro de selectividad de KcsA (residuos TVGYG) la extrema selectividad para K⁺ sobre el ion Na⁺, a pesar de que el ion Na⁺ es de menor radio atómico?",
  "options": [
    "El ion sodio es transportado exclusivamente por pinocitosis activa",
    "El poro está forrado de aminoácidos fuertemente hidrofóbicos que repelen a los iones divalentes",
    "Los oxígenos carbonílicos de la cadena peptídica están rígidamente espaciados para mimetizar la envoltura de solvatación del K⁺ deshidratado; el Na⁺ más pequeño no puede coordinar eficientemente con los 8 oxígenos y sufre un alto costo energético de desolvatación",
    "El ion potasio posee carga divalente que duplica la fuerza coulómbica de atracción"
  ],
  "correctIndex": 2,
  "explanation": "Descrito cristalográficamente por Roderick MacKinnon, los oxígenos de los carbonilos del backbone de la firma TVGYG replican con precisión nanométrica las distancias de las moléculas de agua que rodean a un ion K⁺ hidratado, permitiendo una desolvatación energéticamente neutra exclusiva para K⁺.",
  "skill": "Biofísica de Membranas y Canales Iónicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica Molecular",
  "subtopic": "Canal de Potasio KcsA y Filtro de Selectividad"
},
{
  "id": "nat-uni-47",
  "sectionId": 4,
  "number": 47,
  "text": "En el sistema inmunitario adaptativo, ¿cuál es el mecanismo molecular de la 'hipermutación somática' que ocurre en los centros germinales de los ganglios linfáticos durante la maduración de la afinidad de anticuerpos?",
  "options": [
    "Fusión celular sincitial entre linfocitos B de memoria y macrófagos tisulares",
    "Desaminación enzimática dirigida de citosinas a uracilos en genes de inmunoglobulinas por la enzima AID (Activation-Induced Cytidine Deaminase), generando mutaciones puntuales tras reparación propensa a errores",
    "Inserción de transposones víricos en las regiones constantes Fc de las cadenas pesadas",
    "Corte y empalme alternativo al azar de exones codificantes de la albúmina sérica"
  ],
  "correctIndex": 1,
  "explanation": "La enzima AID desamina residuos de dC a dU en las regiones determinantes de complementariedad (CDR) de los genes variables de anticuerpos; las vías de reparación por escisión de bases y mismatch generan una tasa de mutación un millón de veces superior a la basal.",
  "skill": "Inmunología Celular de Centros Germinales",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Inmunología Avanzada",
  "subtopic": "Hipermutación Somática y Enzima AID"
},
{
  "id": "nat-uni-48",
  "sectionId": 4,
  "number": 48,
  "text": "¿Qué postula la hipótesis del 'Mundo de ARN' (RNA World) en el origen abiogenético de las primeras entidades replicativas biológicas?",
  "options": [
    "Que moléculas primitivas de ARN precedieron filogenéticamente al ADN y las proteínas, desempeñando simultáneamente funciones de almacenamiento de información genética y catálisis bioquímica (ribozimas)",
    "Que el ARN fue creado exclusivamente como subproducto de la síntesis de colágeno primordial",
    "Que los primeros organismos celulares utilizaban lípidos sulfatados como material genético hereditario",
    "Que la transcripción reversa fue la única reacción metabólica existente en el Arqueano"
  ],
  "correctIndex": 0,
  "explanation": "El descubrimiento de que el ARN puede almacenar genomas (como en virus) y catalizar reacciones de corte y unión fosfodiéster o formación de enlaces peptídicos (el centro peptidil-transferasa del ribosoma es una ribozima pura) sustenta que la vida ancestral se basó en ARN catalítico y replicativo.",
  "skill": "Evolución Química y Origen de la Vida",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva y Abiogénesis",
  "subtopic": "Hipótesis del Mundo de ARN"
},
{
  "id": "nat-uni-49",
  "sectionId": 4,
  "number": 49,
  "text": "En la diferenciación celular embrionaria de vertebrados, ¿qué vía de señalización morfogenética utiliza la unión de ligandos Wnt a receptores Frizzled/LRP6 para inhibir el complejo de destrucción citoplasmático (Axina/APC/GSK3β) y permitir la translocación nuclear de beta-catenina?",
  "options": [
    "Vía de las caspasas dependientes de citocromo c",
    "Vía de la cinasa JAK y transactivadores STAT1",
    "Vía no canónica dependiente de fosfolipasa C y calmodulina quinasa II",
    "Vía canónica Wnt/beta-catenina"
  ],
  "correctIndex": 3,
  "explanation": "En ausencia de Wnt, el complejo Axina/APC/GSK3β fosforila a beta-catenina dirigiéndola a poliubiquitinación proteasómica; cuando Wnt se une a Frizzled/LRP5/6, recluta a Dishevelled disrumpiendo el complejo, permitiendo a beta-catenina acumularse y activar factores TCF/LEF.",
  "skill": "Biología del Desarrollo y Morfogénesis",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología del Desarrollo",
  "subtopic": "Vía de Señalización Canónica Wnt"
},
{
  "id": "nat-uni-50",
  "sectionId": 4,
  "number": 50,
  "text": "En ecología evolutiva, ¿en qué consiste la 'hipótesis de la Reina Roja' formulada por Leigh Van Valen?",
  "options": [
    "La selección sexual en aves promueve siempre dimorfismos extremos de plumaje carmesí",
    "La tasa de especiación en el ecuador es inversamente proporcional a la temperatura superficial",
    "Una especie debe evolucionar y adaptarse continuamente solo para mantener su adecuación biológica relativa frente a coespeciaciones y adaptaciones continuas de competidores, parásitos y depredadores",
    "Las especies de mayor jerarquía trófica se reproducen siempre a tasas hiperbólicas constantes"
  ],
  "correctIndex": 2,
  "explanation": "Inspirada en 'A través del espejo' de Lewis Carroll, Van Valen postuló que el entorno biótico de una especie nunca es estático; cada avance adaptativo de una presa, hospedador o parásito presiona selectivamente al otro para coevolucionar, explicando la ventaja evolutiva del sexo frente a parásitos.",
  "skill": "Evolución Teórica y Coevolución",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva",
  "subtopic": "Hipótesis de la Reina Roja de Van Valen"
},
{
  "id": "nat-uni-51",
  "sectionId": 4,
  "number": 51,
  "text": "En investigación biofísica y molecular avanzada (análisis 2): ¿Cuál es el fundamento físico-químico de la técnica de secuenciación masiva en paralelo por síntesis de Illumina?",
  "options": [
    "Separación electroforética capilar tradicional por degradación química de Maxam-Gilbert",
    "Amplificación clonal por puente térmico en una celda de flujo seguida de incorporación cíclica de nucleótidos marcados fluorescentemente con terminadores reversibles",
    "Medición de fluctuaciones de conductancia iónica a través de un poro proteico biológico sin síntesis de ADN",
    "Detección electroquímica de liberación de iones hidrógeno (protones H⁺) mediante sensores ion-sensibles ISFET"
  ],
  "correctIndex": 1,
  "explanation": "La tecnología Illumina utiliza cebadores anclados a celdas de flujo de vidrio para generar clústeres por PCR en puente; luego una polimerasa incorpora nucleótidos marcados con fluoróforos con terminador en 3'-OH que se registran ópticamente y se escinden químicamente por ciclo.",
  "skill": "Genómica Funcional y Tecnologías NGS",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Genómica y Biología Molecular",
  "subtopic": "Secuenciación Illumina por Síntesis"
},
{
  "id": "nat-uni-52",
  "sectionId": 4,
  "number": 52,
  "text": "En investigación biofísica y molecular avanzada (análisis 2): En la termodinámica del plegamiento de proteínas globulares solubles en disolución acuosa, ¿cuál es la principal fuerza impulsora entrópica que favorece el estado nativo plegado a temperatura fisiológica?",
  "options": [
    "El efecto hidrofóbico, que libera moléculas de agua estructuradas en jaulas de clatrato alrededor de cadenas laterales no polares aumentando la entropía del solvente",
    "La formación de enlaces peptídicos de alta energía entre lisinas",
    "La repulsión electrostática de aniones sulfato en la superficie",
    "La disminución neta de la entropía conformacional de la cadena polipeptídica aislada"
  ],
  "correctIndex": 0,
  "explanation": "Aunque la cadena polipeptídica pierde entropía conformacional al plegarse (ΔS_cadena < 0), el empaquetamiento del núcleo hidrofóbico expulsa las jaulas ordenadas de agua circundantes, produciendo una gran ganancia entrópica del solvente (ΔS_solvente >> 0) que hace ΔG globalmente negativo.",
  "skill": "Estructura y Plegamiento de Proteínas",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica de Macromoléculas",
  "subtopic": "Efecto Hidrofóbico y Entropía en el Plegamiento"
},
{
  "id": "nat-uni-53",
  "sectionId": 4,
  "number": 53,
  "text": "En investigación biofísica y molecular avanzada (análisis 2): En el ciclo biogeoquímico global del carbono y el control del clima terrestre a escalas de millones de años (ciclo carbonato-silicato de Walker), ¿qué proceso actúa como el sumidero termodinámico primario de CO₂ atmosférico?",
  "options": [
    "La fotosíntesis de líquenes en desiertos polares",
    "La emisión magmática de basaltos en dorsales mediooceánicas",
    "La precipitación de halita en cuencas endorreicas hipersalinas",
    "La meteorización química de minerales silicatados continentales (como CaSiO₃) por ácido carbónico seguida de precipitación marina de carbonatos (CaCO₃)"
  ],
  "correctIndex": 3,
  "explanation": "La reacción de Urey CaSiO₃ + CO₂ -> CaCO₃ + SiO₂ describe cómo la disolución de silicatos por lluvia rica en CO₂ transporta Ca²⁺ y HCO₃⁻ a los océanos, donde organismos calcificadores precipitan CaCO₃ permanente, actuando como termostato planetario.",
  "skill": "Geoquímica Global y Ciclos Biogeoquímicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Geociencias y Cambio Climático Profundo",
  "subtopic": "Meteorización de Silicatos y Termostato de Carbono"
},
{
  "id": "nat-uni-54",
  "sectionId": 4,
  "number": 54,
  "text": "En investigación biofísica y molecular avanzada (análisis 2): En farmacodinámica molecular, ¿cómo se define el fenómeno del 'sesgo funcional' o 'agonismo sesgado' (biased agonism) en receptores 7-transmembrana GPCR?",
  "options": [
    "Estimulación sincrónica e idéntica de todas las subfamilias heterotriméricas Gαs, Gαi y Gαq",
    "Degradación lisosómica del fármaco sin inducir señalización celular",
    "Capacidad de un ligando para estabilizar diferencialmente conformaciones del receptor que activan preferentemente una vía efectora (v.gr., proteína G) sobre otra (v.gr., reclutamiento de beta-arrestina)",
    "Inactivación irreversible del receptor por unión covalente al bolsillo ortostérico"
  ],
  "correctIndex": 2,
  "explanation": "Los GPCRs no son simples interruptores binarios on/off; diferentes ligandos inducen estados conformacionales sutilmente distintos que activan selectivamente la cascada de proteínas G o la vía de beta-arrestinas, permitiendo diseñar fármacos con eficacia terapéutica y mínimos efectos adversos.",
  "skill": "Farmacología Molecular de GPCRs",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Farmacología y Bioquímica Celular",
  "subtopic": "Agonismo Sesgado en GPCRs"
},
{
  "id": "nat-uni-55",
  "sectionId": 4,
  "number": 55,
  "text": "En investigación biofísica y molecular avanzada (análisis 2): ¿Cuál es el papel biológico del complejo multiproteico cohesina durante el ciclo celular eucariota mitótico?",
  "options": [
    "Sintetizar los microtúbulos cinetocóricos del huso acromático",
    "Mantener unidas físicamente a las cromátidas hermanas desde la fase S de replicación hasta su escisión por la separasa en la transición metafase-anafase",
    "Fosforilar los filamentos intermedios de lámina nuclear para disolver la carioteca",
    "Condensar la cromatina en fibras de 30 nm durante la profase temprana"
  ],
  "correctIndex": 1,
  "explanation": "La cohesina forma un anillo proteico (compuesto por Smc1, Smc3, Scc1 y Scc3) que rodea y mantiene unidas a las dos cromátidas hermanas. En anafase, la securina es degradada por el APC/C, liberando a la separasa activa que cliva proteolíticamente a Scc1.",
  "skill": "Regulación del Ciclo Celular Mitótico",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Celular y Genética",
  "subtopic": "Complejo Cohesina y Segregación Cromosómica"
},
{
  "id": "nat-uni-56",
  "sectionId": 4,
  "number": 56,
  "text": "En investigación biofísica y molecular avanzada (análisis 2): En biofísica de canales iónicos, ¿cómo explica el filtro de selectividad de KcsA (residuos TVGYG) la extrema selectividad para K⁺ sobre el ion Na⁺, a pesar de que el ion Na⁺ es de menor radio atómico?",
  "options": [
    "Los oxígenos carbonílicos de la cadena peptídica están rígidamente espaciados para mimetizar la envoltura de solvatación del K⁺ deshidratado; el Na⁺ más pequeño no puede coordinar eficientemente con los 8 oxígenos y sufre un alto costo energético de desolvatación",
    "El ion potasio posee carga divalente que duplica la fuerza coulómbica de atracción",
    "El ion sodio es transportado exclusivamente por pinocitosis activa",
    "El poro está forrado de aminoácidos fuertemente hidrofóbicos que repelen a los iones divalentes"
  ],
  "correctIndex": 0,
  "explanation": "Descrito cristalográficamente por Roderick MacKinnon, los oxígenos de los carbonilos del backbone de la firma TVGYG replican con precisión nanométrica las distancias de las moléculas de agua que rodean a un ion K⁺ hidratado, permitiendo una desolvatación energéticamente neutra exclusiva para K⁺.",
  "skill": "Biofísica de Membranas y Canales Iónicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica Molecular",
  "subtopic": "Canal de Potasio KcsA y Filtro de Selectividad"
},
{
  "id": "nat-uni-57",
  "sectionId": 4,
  "number": 57,
  "text": "En investigación biofísica y molecular avanzada (análisis 2): En el sistema inmunitario adaptativo, ¿cuál es el mecanismo molecular de la 'hipermutación somática' que ocurre en los centros germinales de los ganglios linfáticos durante la maduración de la afinidad de anticuerpos?",
  "options": [
    "Inserción de transposones víricos en las regiones constantes Fc de las cadenas pesadas",
    "Corte y empalme alternativo al azar de exones codificantes de la albúmina sérica",
    "Fusión celular sincitial entre linfocitos B de memoria y macrófagos tisulares",
    "Desaminación enzimática dirigida de citosinas a uracilos en genes de inmunoglobulinas por la enzima AID (Activation-Induced Cytidine Deaminase), generando mutaciones puntuales tras reparación propensa a errores"
  ],
  "correctIndex": 3,
  "explanation": "La enzima AID desamina residuos de dC a dU en las regiones determinantes de complementariedad (CDR) de los genes variables de anticuerpos; las vías de reparación por escisión de bases y mismatch generan una tasa de mutación un millón de veces superior a la basal.",
  "skill": "Inmunología Celular de Centros Germinales",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Inmunología Avanzada",
  "subtopic": "Hipermutación Somática y Enzima AID"
},
{
  "id": "nat-uni-58",
  "sectionId": 4,
  "number": 58,
  "text": "En investigación biofísica y molecular avanzada (análisis 2): ¿Qué postula la hipótesis del 'Mundo de ARN' (RNA World) en el origen abiogenético de las primeras entidades replicativas biológicas?",
  "options": [
    "Que los primeros organismos celulares utilizaban lípidos sulfatados como material genético hereditario",
    "Que la transcripción reversa fue la única reacción metabólica existente en el Arqueano",
    "Que moléculas primitivas de ARN precedieron filogenéticamente al ADN y las proteínas, desempeñando simultáneamente funciones de almacenamiento de información genética y catálisis bioquímica (ribozimas)",
    "Que el ARN fue creado exclusivamente como subproducto de la síntesis de colágeno primordial"
  ],
  "correctIndex": 2,
  "explanation": "El descubrimiento de que el ARN puede almacenar genomas (como en virus) y catalizar reacciones de corte y unión fosfodiéster o formación de enlaces peptídicos (el centro peptidil-transferasa del ribosoma es una ribozima pura) sustenta que la vida ancestral se basó en ARN catalítico y replicativo.",
  "skill": "Evolución Química y Origen de la Vida",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva y Abiogénesis",
  "subtopic": "Hipótesis del Mundo de ARN"
},
{
  "id": "nat-uni-59",
  "sectionId": 4,
  "number": 59,
  "text": "En investigación biofísica y molecular avanzada (análisis 2): En la diferenciación celular embrionaria de vertebrados, ¿qué vía de señalización morfogenética utiliza la unión de ligandos Wnt a receptores Frizzled/LRP6 para inhibir el complejo de destrucción citoplasmático (Axina/APC/GSK3β) y permitir la translocación nuclear de beta-catenina?",
  "options": [
    "Vía no canónica dependiente de fosfolipasa C y calmodulina quinasa II",
    "Vía canónica Wnt/beta-catenina",
    "Vía de las caspasas dependientes de citocromo c",
    "Vía de la cinasa JAK y transactivadores STAT1"
  ],
  "correctIndex": 1,
  "explanation": "En ausencia de Wnt, el complejo Axina/APC/GSK3β fosforila a beta-catenina dirigiéndola a poliubiquitinación proteasómica; cuando Wnt se une a Frizzled/LRP5/6, recluta a Dishevelled disrumpiendo el complejo, permitiendo a beta-catenina acumularse y activar factores TCF/LEF.",
  "skill": "Biología del Desarrollo y Morfogénesis",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología del Desarrollo",
  "subtopic": "Vía de Señalización Canónica Wnt"
},
{
  "id": "nat-uni-60",
  "sectionId": 4,
  "number": 60,
  "text": "En investigación biofísica y molecular avanzada (análisis 2): En ecología evolutiva, ¿en qué consiste la 'hipótesis de la Reina Roja' formulada por Leigh Van Valen?",
  "options": [
    "Una especie debe evolucionar y adaptarse continuamente solo para mantener su adecuación biológica relativa frente a coespeciaciones y adaptaciones continuas de competidores, parásitos y depredadores",
    "Las especies de mayor jerarquía trófica se reproducen siempre a tasas hiperbólicas constantes",
    "La selección sexual en aves promueve siempre dimorfismos extremos de plumaje carmesí",
    "La tasa de especiación en el ecuador es inversamente proporcional a la temperatura superficial"
  ],
  "correctIndex": 0,
  "explanation": "Inspirada en 'A través del espejo' de Lewis Carroll, Van Valen postuló que el entorno biótico de una especie nunca es estático; cada avance adaptativo de una presa, hospedador o parásito presiona selectivamente al otro para coevolucionar, explicando la ventaja evolutiva del sexo frente a parásitos.",
  "skill": "Evolución Teórica y Coevolución",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva",
  "subtopic": "Hipótesis de la Reina Roja de Van Valen"
},
{
  "id": "nat-uni-61",
  "sectionId": 4,
  "number": 61,
  "text": "En investigación biofísica y molecular avanzada (análisis 3): ¿Cuál es el fundamento físico-químico de la técnica de secuenciación masiva en paralelo por síntesis de Illumina?",
  "options": [
    "Medición de fluctuaciones de conductancia iónica a través de un poro proteico biológico sin síntesis de ADN",
    "Detección electroquímica de liberación de iones hidrógeno (protones H⁺) mediante sensores ion-sensibles ISFET",
    "Separación electroforética capilar tradicional por degradación química de Maxam-Gilbert",
    "Amplificación clonal por puente térmico en una celda de flujo seguida de incorporación cíclica de nucleótidos marcados fluorescentemente con terminadores reversibles"
  ],
  "correctIndex": 3,
  "explanation": "La tecnología Illumina utiliza cebadores anclados a celdas de flujo de vidrio para generar clústeres por PCR en puente; luego una polimerasa incorpora nucleótidos marcados con fluoróforos con terminador en 3'-OH que se registran ópticamente y se escinden químicamente por ciclo.",
  "skill": "Genómica Funcional y Tecnologías NGS",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Genómica y Biología Molecular",
  "subtopic": "Secuenciación Illumina por Síntesis"
},
{
  "id": "nat-uni-62",
  "sectionId": 4,
  "number": 62,
  "text": "En investigación biofísica y molecular avanzada (análisis 3): En la termodinámica del plegamiento de proteínas globulares solubles en disolución acuosa, ¿cuál es la principal fuerza impulsora entrópica que favorece el estado nativo plegado a temperatura fisiológica?",
  "options": [
    "La repulsión electrostática de aniones sulfato en la superficie",
    "La disminución neta de la entropía conformacional de la cadena polipeptídica aislada",
    "El efecto hidrofóbico, que libera moléculas de agua estructuradas en jaulas de clatrato alrededor de cadenas laterales no polares aumentando la entropía del solvente",
    "La formación de enlaces peptídicos de alta energía entre lisinas"
  ],
  "correctIndex": 2,
  "explanation": "Aunque la cadena polipeptídica pierde entropía conformacional al plegarse (ΔS_cadena < 0), el empaquetamiento del núcleo hidrofóbico expulsa las jaulas ordenadas de agua circundantes, produciendo una gran ganancia entrópica del solvente (ΔS_solvente >> 0) que hace ΔG globalmente negativo.",
  "skill": "Estructura y Plegamiento de Proteínas",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica de Macromoléculas",
  "subtopic": "Efecto Hidrofóbico y Entropía en el Plegamiento"
},
{
  "id": "nat-uni-63",
  "sectionId": 4,
  "number": 63,
  "text": "En investigación biofísica y molecular avanzada (análisis 3): En el ciclo biogeoquímico global del carbono y el control del clima terrestre a escalas de millones de años (ciclo carbonato-silicato de Walker), ¿qué proceso actúa como el sumidero termodinámico primario de CO₂ atmosférico?",
  "options": [
    "La precipitación de halita en cuencas endorreicas hipersalinas",
    "La meteorización química de minerales silicatados continentales (como CaSiO₃) por ácido carbónico seguida de precipitación marina de carbonatos (CaCO₃)",
    "La fotosíntesis de líquenes en desiertos polares",
    "La emisión magmática de basaltos en dorsales mediooceánicas"
  ],
  "correctIndex": 1,
  "explanation": "La reacción de Urey CaSiO₃ + CO₂ -> CaCO₃ + SiO₂ describe cómo la disolución de silicatos por lluvia rica en CO₂ transporta Ca²⁺ y HCO₃⁻ a los océanos, donde organismos calcificadores precipitan CaCO₃ permanente, actuando como termostato planetario.",
  "skill": "Geoquímica Global y Ciclos Biogeoquímicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Geociencias y Cambio Climático Profundo",
  "subtopic": "Meteorización de Silicatos y Termostato de Carbono"
},
{
  "id": "nat-uni-64",
  "sectionId": 4,
  "number": 64,
  "text": "En investigación biofísica y molecular avanzada (análisis 3): En farmacodinámica molecular, ¿cómo se define el fenómeno del 'sesgo funcional' o 'agonismo sesgado' (biased agonism) en receptores 7-transmembrana GPCR?",
  "options": [
    "Capacidad de un ligando para estabilizar diferencialmente conformaciones del receptor que activan preferentemente una vía efectora (v.gr., proteína G) sobre otra (v.gr., reclutamiento de beta-arrestina)",
    "Inactivación irreversible del receptor por unión covalente al bolsillo ortostérico",
    "Estimulación sincrónica e idéntica de todas las subfamilias heterotriméricas Gαs, Gαi y Gαq",
    "Degradación lisosómica del fármaco sin inducir señalización celular"
  ],
  "correctIndex": 0,
  "explanation": "Los GPCRs no son simples interruptores binarios on/off; diferentes ligandos inducen estados conformacionales sutilmente distintos que activan selectivamente la cascada de proteínas G o la vía de beta-arrestinas, permitiendo diseñar fármacos con eficacia terapéutica y mínimos efectos adversos.",
  "skill": "Farmacología Molecular de GPCRs",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Farmacología y Bioquímica Celular",
  "subtopic": "Agonismo Sesgado en GPCRs"
},
{
  "id": "nat-uni-65",
  "sectionId": 4,
  "number": 65,
  "text": "En investigación biofísica y molecular avanzada (análisis 3): ¿Cuál es el papel biológico del complejo multiproteico cohesina durante el ciclo celular eucariota mitótico?",
  "options": [
    "Fosforilar los filamentos intermedios de lámina nuclear para disolver la carioteca",
    "Condensar la cromatina en fibras de 30 nm durante la profase temprana",
    "Sintetizar los microtúbulos cinetocóricos del huso acromático",
    "Mantener unidas físicamente a las cromátidas hermanas desde la fase S de replicación hasta su escisión por la separasa en la transición metafase-anafase"
  ],
  "correctIndex": 3,
  "explanation": "La cohesina forma un anillo proteico (compuesto por Smc1, Smc3, Scc1 y Scc3) que rodea y mantiene unidas a las dos cromátidas hermanas. En anafase, la securina es degradada por el APC/C, liberando a la separasa activa que cliva proteolíticamente a Scc1.",
  "skill": "Regulación del Ciclo Celular Mitótico",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Celular y Genética",
  "subtopic": "Complejo Cohesina y Segregación Cromosómica"
},
{
  "id": "nat-uni-66",
  "sectionId": 4,
  "number": 66,
  "text": "En investigación biofísica y molecular avanzada (análisis 3): En biofísica de canales iónicos, ¿cómo explica el filtro de selectividad de KcsA (residuos TVGYG) la extrema selectividad para K⁺ sobre el ion Na⁺, a pesar de que el ion Na⁺ es de menor radio atómico?",
  "options": [
    "El ion sodio es transportado exclusivamente por pinocitosis activa",
    "El poro está forrado de aminoácidos fuertemente hidrofóbicos que repelen a los iones divalentes",
    "Los oxígenos carbonílicos de la cadena peptídica están rígidamente espaciados para mimetizar la envoltura de solvatación del K⁺ deshidratado; el Na⁺ más pequeño no puede coordinar eficientemente con los 8 oxígenos y sufre un alto costo energético de desolvatación",
    "El ion potasio posee carga divalente que duplica la fuerza coulómbica de atracción"
  ],
  "correctIndex": 2,
  "explanation": "Descrito cristalográficamente por Roderick MacKinnon, los oxígenos de los carbonilos del backbone de la firma TVGYG replican con precisión nanométrica las distancias de las moléculas de agua que rodean a un ion K⁺ hidratado, permitiendo una desolvatación energéticamente neutra exclusiva para K⁺.",
  "skill": "Biofísica de Membranas y Canales Iónicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica Molecular",
  "subtopic": "Canal de Potasio KcsA y Filtro de Selectividad"
},
{
  "id": "nat-uni-67",
  "sectionId": 4,
  "number": 67,
  "text": "En investigación biofísica y molecular avanzada (análisis 3): En el sistema inmunitario adaptativo, ¿cuál es el mecanismo molecular de la 'hipermutación somática' que ocurre en los centros germinales de los ganglios linfáticos durante la maduración de la afinidad de anticuerpos?",
  "options": [
    "Fusión celular sincitial entre linfocitos B de memoria y macrófagos tisulares",
    "Desaminación enzimática dirigida de citosinas a uracilos en genes de inmunoglobulinas por la enzima AID (Activation-Induced Cytidine Deaminase), generando mutaciones puntuales tras reparación propensa a errores",
    "Inserción de transposones víricos en las regiones constantes Fc de las cadenas pesadas",
    "Corte y empalme alternativo al azar de exones codificantes de la albúmina sérica"
  ],
  "correctIndex": 1,
  "explanation": "La enzima AID desamina residuos de dC a dU en las regiones determinantes de complementariedad (CDR) de los genes variables de anticuerpos; las vías de reparación por escisión de bases y mismatch generan una tasa de mutación un millón de veces superior a la basal.",
  "skill": "Inmunología Celular de Centros Germinales",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Inmunología Avanzada",
  "subtopic": "Hipermutación Somática y Enzima AID"
},
{
  "id": "nat-uni-68",
  "sectionId": 4,
  "number": 68,
  "text": "En investigación biofísica y molecular avanzada (análisis 3): ¿Qué postula la hipótesis del 'Mundo de ARN' (RNA World) en el origen abiogenético de las primeras entidades replicativas biológicas?",
  "options": [
    "Que moléculas primitivas de ARN precedieron filogenéticamente al ADN y las proteínas, desempeñando simultáneamente funciones de almacenamiento de información genética y catálisis bioquímica (ribozimas)",
    "Que el ARN fue creado exclusivamente como subproducto de la síntesis de colágeno primordial",
    "Que los primeros organismos celulares utilizaban lípidos sulfatados como material genético hereditario",
    "Que la transcripción reversa fue la única reacción metabólica existente en el Arqueano"
  ],
  "correctIndex": 0,
  "explanation": "El descubrimiento de que el ARN puede almacenar genomas (como en virus) y catalizar reacciones de corte y unión fosfodiéster o formación de enlaces peptídicos (el centro peptidil-transferasa del ribosoma es una ribozima pura) sustenta que la vida ancestral se basó en ARN catalítico y replicativo.",
  "skill": "Evolución Química y Origen de la Vida",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva y Abiogénesis",
  "subtopic": "Hipótesis del Mundo de ARN"
},
{
  "id": "nat-uni-69",
  "sectionId": 4,
  "number": 69,
  "text": "En investigación biofísica y molecular avanzada (análisis 3): En la diferenciación celular embrionaria de vertebrados, ¿qué vía de señalización morfogenética utiliza la unión de ligandos Wnt a receptores Frizzled/LRP6 para inhibir el complejo de destrucción citoplasmático (Axina/APC/GSK3β) y permitir la translocación nuclear de beta-catenina?",
  "options": [
    "Vía de las caspasas dependientes de citocromo c",
    "Vía de la cinasa JAK y transactivadores STAT1",
    "Vía no canónica dependiente de fosfolipasa C y calmodulina quinasa II",
    "Vía canónica Wnt/beta-catenina"
  ],
  "correctIndex": 3,
  "explanation": "En ausencia de Wnt, el complejo Axina/APC/GSK3β fosforila a beta-catenina dirigiéndola a poliubiquitinación proteasómica; cuando Wnt se une a Frizzled/LRP5/6, recluta a Dishevelled disrumpiendo el complejo, permitiendo a beta-catenina acumularse y activar factores TCF/LEF.",
  "skill": "Biología del Desarrollo y Morfogénesis",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología del Desarrollo",
  "subtopic": "Vía de Señalización Canónica Wnt"
},
{
  "id": "nat-uni-70",
  "sectionId": 4,
  "number": 70,
  "text": "En investigación biofísica y molecular avanzada (análisis 3): En ecología evolutiva, ¿en qué consiste la 'hipótesis de la Reina Roja' formulada por Leigh Van Valen?",
  "options": [
    "La selección sexual en aves promueve siempre dimorfismos extremos de plumaje carmesí",
    "La tasa de especiación en el ecuador es inversamente proporcional a la temperatura superficial",
    "Una especie debe evolucionar y adaptarse continuamente solo para mantener su adecuación biológica relativa frente a coespeciaciones y adaptaciones continuas de competidores, parásitos y depredadores",
    "Las especies de mayor jerarquía trófica se reproducen siempre a tasas hiperbólicas constantes"
  ],
  "correctIndex": 2,
  "explanation": "Inspirada en 'A través del espejo' de Lewis Carroll, Van Valen postuló que el entorno biótico de una especie nunca es estático; cada avance adaptativo de una presa, hospedador o parásito presiona selectivamente al otro para coevolucionar, explicando la ventaja evolutiva del sexo frente a parásitos.",
  "skill": "Evolución Teórica y Coevolución",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva",
  "subtopic": "Hipótesis de la Reina Roja de Van Valen"
},
{
  "id": "nat-uni-71",
  "sectionId": 4,
  "number": 71,
  "text": "En investigación biofísica y molecular avanzada (análisis 4): ¿Cuál es el fundamento físico-químico de la técnica de secuenciación masiva en paralelo por síntesis de Illumina?",
  "options": [
    "Separación electroforética capilar tradicional por degradación química de Maxam-Gilbert",
    "Amplificación clonal por puente térmico en una celda de flujo seguida de incorporación cíclica de nucleótidos marcados fluorescentemente con terminadores reversibles",
    "Medición de fluctuaciones de conductancia iónica a través de un poro proteico biológico sin síntesis de ADN",
    "Detección electroquímica de liberación de iones hidrógeno (protones H⁺) mediante sensores ion-sensibles ISFET"
  ],
  "correctIndex": 1,
  "explanation": "La tecnología Illumina utiliza cebadores anclados a celdas de flujo de vidrio para generar clústeres por PCR en puente; luego una polimerasa incorpora nucleótidos marcados con fluoróforos con terminador en 3'-OH que se registran ópticamente y se escinden químicamente por ciclo.",
  "skill": "Genómica Funcional y Tecnologías NGS",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Genómica y Biología Molecular",
  "subtopic": "Secuenciación Illumina por Síntesis"
},
{
  "id": "nat-uni-72",
  "sectionId": 4,
  "number": 72,
  "text": "En investigación biofísica y molecular avanzada (análisis 4): En la termodinámica del plegamiento de proteínas globulares solubles en disolución acuosa, ¿cuál es la principal fuerza impulsora entrópica que favorece el estado nativo plegado a temperatura fisiológica?",
  "options": [
    "El efecto hidrofóbico, que libera moléculas de agua estructuradas en jaulas de clatrato alrededor de cadenas laterales no polares aumentando la entropía del solvente",
    "La formación de enlaces peptídicos de alta energía entre lisinas",
    "La repulsión electrostática de aniones sulfato en la superficie",
    "La disminución neta de la entropía conformacional de la cadena polipeptídica aislada"
  ],
  "correctIndex": 0,
  "explanation": "Aunque la cadena polipeptídica pierde entropía conformacional al plegarse (ΔS_cadena < 0), el empaquetamiento del núcleo hidrofóbico expulsa las jaulas ordenadas de agua circundantes, produciendo una gran ganancia entrópica del solvente (ΔS_solvente >> 0) que hace ΔG globalmente negativo.",
  "skill": "Estructura y Plegamiento de Proteínas",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica de Macromoléculas",
  "subtopic": "Efecto Hidrofóbico y Entropía en el Plegamiento"
},
{
  "id": "nat-uni-73",
  "sectionId": 4,
  "number": 73,
  "text": "En investigación biofísica y molecular avanzada (análisis 4): En el ciclo biogeoquímico global del carbono y el control del clima terrestre a escalas de millones de años (ciclo carbonato-silicato de Walker), ¿qué proceso actúa como el sumidero termodinámico primario de CO₂ atmosférico?",
  "options": [
    "La fotosíntesis de líquenes en desiertos polares",
    "La emisión magmática de basaltos en dorsales mediooceánicas",
    "La precipitación de halita en cuencas endorreicas hipersalinas",
    "La meteorización química de minerales silicatados continentales (como CaSiO₃) por ácido carbónico seguida de precipitación marina de carbonatos (CaCO₃)"
  ],
  "correctIndex": 3,
  "explanation": "La reacción de Urey CaSiO₃ + CO₂ -> CaCO₃ + SiO₂ describe cómo la disolución de silicatos por lluvia rica en CO₂ transporta Ca²⁺ y HCO₃⁻ a los océanos, donde organismos calcificadores precipitan CaCO₃ permanente, actuando como termostato planetario.",
  "skill": "Geoquímica Global y Ciclos Biogeoquímicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Geociencias y Cambio Climático Profundo",
  "subtopic": "Meteorización de Silicatos y Termostato de Carbono"
},
{
  "id": "nat-uni-74",
  "sectionId": 4,
  "number": 74,
  "text": "En investigación biofísica y molecular avanzada (análisis 4): En farmacodinámica molecular, ¿cómo se define el fenómeno del 'sesgo funcional' o 'agonismo sesgado' (biased agonism) en receptores 7-transmembrana GPCR?",
  "options": [
    "Estimulación sincrónica e idéntica de todas las subfamilias heterotriméricas Gαs, Gαi y Gαq",
    "Degradación lisosómica del fármaco sin inducir señalización celular",
    "Capacidad de un ligando para estabilizar diferencialmente conformaciones del receptor que activan preferentemente una vía efectora (v.gr., proteína G) sobre otra (v.gr., reclutamiento de beta-arrestina)",
    "Inactivación irreversible del receptor por unión covalente al bolsillo ortostérico"
  ],
  "correctIndex": 2,
  "explanation": "Los GPCRs no son simples interruptores binarios on/off; diferentes ligandos inducen estados conformacionales sutilmente distintos que activan selectivamente la cascada de proteínas G o la vía de beta-arrestinas, permitiendo diseñar fármacos con eficacia terapéutica y mínimos efectos adversos.",
  "skill": "Farmacología Molecular de GPCRs",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Farmacología y Bioquímica Celular",
  "subtopic": "Agonismo Sesgado en GPCRs"
},
{
  "id": "nat-uni-75",
  "sectionId": 4,
  "number": 75,
  "text": "En investigación biofísica y molecular avanzada (análisis 4): ¿Cuál es el papel biológico del complejo multiproteico cohesina durante el ciclo celular eucariota mitótico?",
  "options": [
    "Sintetizar los microtúbulos cinetocóricos del huso acromático",
    "Mantener unidas físicamente a las cromátidas hermanas desde la fase S de replicación hasta su escisión por la separasa en la transición metafase-anafase",
    "Fosforilar los filamentos intermedios de lámina nuclear para disolver la carioteca",
    "Condensar la cromatina en fibras de 30 nm durante la profase temprana"
  ],
  "correctIndex": 1,
  "explanation": "La cohesina forma un anillo proteico (compuesto por Smc1, Smc3, Scc1 y Scc3) que rodea y mantiene unidas a las dos cromátidas hermanas. En anafase, la securina es degradada por el APC/C, liberando a la separasa activa que cliva proteolíticamente a Scc1.",
  "skill": "Regulación del Ciclo Celular Mitótico",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Celular y Genética",
  "subtopic": "Complejo Cohesina y Segregación Cromosómica"
},
{
  "id": "nat-uni-76",
  "sectionId": 4,
  "number": 76,
  "text": "En investigación biofísica y molecular avanzada (análisis 4): En biofísica de canales iónicos, ¿cómo explica el filtro de selectividad de KcsA (residuos TVGYG) la extrema selectividad para K⁺ sobre el ion Na⁺, a pesar de que el ion Na⁺ es de menor radio atómico?",
  "options": [
    "Los oxígenos carbonílicos de la cadena peptídica están rígidamente espaciados para mimetizar la envoltura de solvatación del K⁺ deshidratado; el Na⁺ más pequeño no puede coordinar eficientemente con los 8 oxígenos y sufre un alto costo energético de desolvatación",
    "El ion potasio posee carga divalente que duplica la fuerza coulómbica de atracción",
    "El ion sodio es transportado exclusivamente por pinocitosis activa",
    "El poro está forrado de aminoácidos fuertemente hidrofóbicos que repelen a los iones divalentes"
  ],
  "correctIndex": 0,
  "explanation": "Descrito cristalográficamente por Roderick MacKinnon, los oxígenos de los carbonilos del backbone de la firma TVGYG replican con precisión nanométrica las distancias de las moléculas de agua que rodean a un ion K⁺ hidratado, permitiendo una desolvatación energéticamente neutra exclusiva para K⁺.",
  "skill": "Biofísica de Membranas y Canales Iónicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica Molecular",
  "subtopic": "Canal de Potasio KcsA y Filtro de Selectividad"
},
{
  "id": "nat-uni-77",
  "sectionId": 4,
  "number": 77,
  "text": "En investigación biofísica y molecular avanzada (análisis 4): En el sistema inmunitario adaptativo, ¿cuál es el mecanismo molecular de la 'hipermutación somática' que ocurre en los centros germinales de los ganglios linfáticos durante la maduración de la afinidad de anticuerpos?",
  "options": [
    "Inserción de transposones víricos en las regiones constantes Fc de las cadenas pesadas",
    "Corte y empalme alternativo al azar de exones codificantes de la albúmina sérica",
    "Fusión celular sincitial entre linfocitos B de memoria y macrófagos tisulares",
    "Desaminación enzimática dirigida de citosinas a uracilos en genes de inmunoglobulinas por la enzima AID (Activation-Induced Cytidine Deaminase), generando mutaciones puntuales tras reparación propensa a errores"
  ],
  "correctIndex": 3,
  "explanation": "La enzima AID desamina residuos de dC a dU en las regiones determinantes de complementariedad (CDR) de los genes variables de anticuerpos; las vías de reparación por escisión de bases y mismatch generan una tasa de mutación un millón de veces superior a la basal.",
  "skill": "Inmunología Celular de Centros Germinales",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Inmunología Avanzada",
  "subtopic": "Hipermutación Somática y Enzima AID"
},
{
  "id": "nat-uni-78",
  "sectionId": 4,
  "number": 78,
  "text": "En investigación biofísica y molecular avanzada (análisis 4): ¿Qué postula la hipótesis del 'Mundo de ARN' (RNA World) en el origen abiogenético de las primeras entidades replicativas biológicas?",
  "options": [
    "Que los primeros organismos celulares utilizaban lípidos sulfatados como material genético hereditario",
    "Que la transcripción reversa fue la única reacción metabólica existente en el Arqueano",
    "Que moléculas primitivas de ARN precedieron filogenéticamente al ADN y las proteínas, desempeñando simultáneamente funciones de almacenamiento de información genética y catálisis bioquímica (ribozimas)",
    "Que el ARN fue creado exclusivamente como subproducto de la síntesis de colágeno primordial"
  ],
  "correctIndex": 2,
  "explanation": "El descubrimiento de que el ARN puede almacenar genomas (como en virus) y catalizar reacciones de corte y unión fosfodiéster o formación de enlaces peptídicos (el centro peptidil-transferasa del ribosoma es una ribozima pura) sustenta que la vida ancestral se basó en ARN catalítico y replicativo.",
  "skill": "Evolución Química y Origen de la Vida",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva y Abiogénesis",
  "subtopic": "Hipótesis del Mundo de ARN"
},
{
  "id": "nat-uni-79",
  "sectionId": 4,
  "number": 79,
  "text": "En investigación biofísica y molecular avanzada (análisis 4): En la diferenciación celular embrionaria de vertebrados, ¿qué vía de señalización morfogenética utiliza la unión de ligandos Wnt a receptores Frizzled/LRP6 para inhibir el complejo de destrucción citoplasmático (Axina/APC/GSK3β) y permitir la translocación nuclear de beta-catenina?",
  "options": [
    "Vía no canónica dependiente de fosfolipasa C y calmodulina quinasa II",
    "Vía canónica Wnt/beta-catenina",
    "Vía de las caspasas dependientes de citocromo c",
    "Vía de la cinasa JAK y transactivadores STAT1"
  ],
  "correctIndex": 1,
  "explanation": "En ausencia de Wnt, el complejo Axina/APC/GSK3β fosforila a beta-catenina dirigiéndola a poliubiquitinación proteasómica; cuando Wnt se une a Frizzled/LRP5/6, recluta a Dishevelled disrumpiendo el complejo, permitiendo a beta-catenina acumularse y activar factores TCF/LEF.",
  "skill": "Biología del Desarrollo y Morfogénesis",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología del Desarrollo",
  "subtopic": "Vía de Señalización Canónica Wnt"
},
{
  "id": "nat-uni-80",
  "sectionId": 4,
  "number": 80,
  "text": "En investigación biofísica y molecular avanzada (análisis 4): En ecología evolutiva, ¿en qué consiste la 'hipótesis de la Reina Roja' formulada por Leigh Van Valen?",
  "options": [
    "Una especie debe evolucionar y adaptarse continuamente solo para mantener su adecuación biológica relativa frente a coespeciaciones y adaptaciones continuas de competidores, parásitos y depredadores",
    "Las especies de mayor jerarquía trófica se reproducen siempre a tasas hiperbólicas constantes",
    "La selección sexual en aves promueve siempre dimorfismos extremos de plumaje carmesí",
    "La tasa de especiación en el ecuador es inversamente proporcional a la temperatura superficial"
  ],
  "correctIndex": 0,
  "explanation": "Inspirada en 'A través del espejo' de Lewis Carroll, Van Valen postuló que el entorno biótico de una especie nunca es estático; cada avance adaptativo de una presa, hospedador o parásito presiona selectivamente al otro para coevolucionar, explicando la ventaja evolutiva del sexo frente a parásitos.",
  "skill": "Evolución Teórica y Coevolución",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva",
  "subtopic": "Hipótesis de la Reina Roja de Van Valen"
},
{
  "id": "nat-uni-81",
  "sectionId": 4,
  "number": 81,
  "text": "En investigación biofísica y molecular avanzada (análisis 5): ¿Cuál es el fundamento físico-químico de la técnica de secuenciación masiva en paralelo por síntesis de Illumina?",
  "options": [
    "Medición de fluctuaciones de conductancia iónica a través de un poro proteico biológico sin síntesis de ADN",
    "Detección electroquímica de liberación de iones hidrógeno (protones H⁺) mediante sensores ion-sensibles ISFET",
    "Separación electroforética capilar tradicional por degradación química de Maxam-Gilbert",
    "Amplificación clonal por puente térmico en una celda de flujo seguida de incorporación cíclica de nucleótidos marcados fluorescentemente con terminadores reversibles"
  ],
  "correctIndex": 3,
  "explanation": "La tecnología Illumina utiliza cebadores anclados a celdas de flujo de vidrio para generar clústeres por PCR en puente; luego una polimerasa incorpora nucleótidos marcados con fluoróforos con terminador en 3'-OH que se registran ópticamente y se escinden químicamente por ciclo.",
  "skill": "Genómica Funcional y Tecnologías NGS",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Genómica y Biología Molecular",
  "subtopic": "Secuenciación Illumina por Síntesis"
},
{
  "id": "nat-uni-82",
  "sectionId": 4,
  "number": 82,
  "text": "En investigación biofísica y molecular avanzada (análisis 5): En la termodinámica del plegamiento de proteínas globulares solubles en disolución acuosa, ¿cuál es la principal fuerza impulsora entrópica que favorece el estado nativo plegado a temperatura fisiológica?",
  "options": [
    "La repulsión electrostática de aniones sulfato en la superficie",
    "La disminución neta de la entropía conformacional de la cadena polipeptídica aislada",
    "El efecto hidrofóbico, que libera moléculas de agua estructuradas en jaulas de clatrato alrededor de cadenas laterales no polares aumentando la entropía del solvente",
    "La formación de enlaces peptídicos de alta energía entre lisinas"
  ],
  "correctIndex": 2,
  "explanation": "Aunque la cadena polipeptídica pierde entropía conformacional al plegarse (ΔS_cadena < 0), el empaquetamiento del núcleo hidrofóbico expulsa las jaulas ordenadas de agua circundantes, produciendo una gran ganancia entrópica del solvente (ΔS_solvente >> 0) que hace ΔG globalmente negativo.",
  "skill": "Estructura y Plegamiento de Proteínas",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica de Macromoléculas",
  "subtopic": "Efecto Hidrofóbico y Entropía en el Plegamiento"
},
{
  "id": "nat-uni-83",
  "sectionId": 4,
  "number": 83,
  "text": "En investigación biofísica y molecular avanzada (análisis 5): En el ciclo biogeoquímico global del carbono y el control del clima terrestre a escalas de millones de años (ciclo carbonato-silicato de Walker), ¿qué proceso actúa como el sumidero termodinámico primario de CO₂ atmosférico?",
  "options": [
    "La precipitación de halita en cuencas endorreicas hipersalinas",
    "La meteorización química de minerales silicatados continentales (como CaSiO₃) por ácido carbónico seguida de precipitación marina de carbonatos (CaCO₃)",
    "La fotosíntesis de líquenes en desiertos polares",
    "La emisión magmática de basaltos en dorsales mediooceánicas"
  ],
  "correctIndex": 1,
  "explanation": "La reacción de Urey CaSiO₃ + CO₂ -> CaCO₃ + SiO₂ describe cómo la disolución de silicatos por lluvia rica en CO₂ transporta Ca²⁺ y HCO₃⁻ a los océanos, donde organismos calcificadores precipitan CaCO₃ permanente, actuando como termostato planetario.",
  "skill": "Geoquímica Global y Ciclos Biogeoquímicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Geociencias y Cambio Climático Profundo",
  "subtopic": "Meteorización de Silicatos y Termostato de Carbono"
},
{
  "id": "nat-uni-84",
  "sectionId": 4,
  "number": 84,
  "text": "En investigación biofísica y molecular avanzada (análisis 5): En farmacodinámica molecular, ¿cómo se define el fenómeno del 'sesgo funcional' o 'agonismo sesgado' (biased agonism) en receptores 7-transmembrana GPCR?",
  "options": [
    "Capacidad de un ligando para estabilizar diferencialmente conformaciones del receptor que activan preferentemente una vía efectora (v.gr., proteína G) sobre otra (v.gr., reclutamiento de beta-arrestina)",
    "Inactivación irreversible del receptor por unión covalente al bolsillo ortostérico",
    "Estimulación sincrónica e idéntica de todas las subfamilias heterotriméricas Gαs, Gαi y Gαq",
    "Degradación lisosómica del fármaco sin inducir señalización celular"
  ],
  "correctIndex": 0,
  "explanation": "Los GPCRs no son simples interruptores binarios on/off; diferentes ligandos inducen estados conformacionales sutilmente distintos que activan selectivamente la cascada de proteínas G o la vía de beta-arrestinas, permitiendo diseñar fármacos con eficacia terapéutica y mínimos efectos adversos.",
  "skill": "Farmacología Molecular de GPCRs",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Farmacología y Bioquímica Celular",
  "subtopic": "Agonismo Sesgado en GPCRs"
},
{
  "id": "nat-uni-85",
  "sectionId": 4,
  "number": 85,
  "text": "En investigación biofísica y molecular avanzada (análisis 5): ¿Cuál es el papel biológico del complejo multiproteico cohesina durante el ciclo celular eucariota mitótico?",
  "options": [
    "Fosforilar los filamentos intermedios de lámina nuclear para disolver la carioteca",
    "Condensar la cromatina en fibras de 30 nm durante la profase temprana",
    "Sintetizar los microtúbulos cinetocóricos del huso acromático",
    "Mantener unidas físicamente a las cromátidas hermanas desde la fase S de replicación hasta su escisión por la separasa en la transición metafase-anafase"
  ],
  "correctIndex": 3,
  "explanation": "La cohesina forma un anillo proteico (compuesto por Smc1, Smc3, Scc1 y Scc3) que rodea y mantiene unidas a las dos cromátidas hermanas. En anafase, la securina es degradada por el APC/C, liberando a la separasa activa que cliva proteolíticamente a Scc1.",
  "skill": "Regulación del Ciclo Celular Mitótico",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Celular y Genética",
  "subtopic": "Complejo Cohesina y Segregación Cromosómica"
},
{
  "id": "nat-uni-86",
  "sectionId": 4,
  "number": 86,
  "text": "En investigación biofísica y molecular avanzada (análisis 5): En biofísica de canales iónicos, ¿cómo explica el filtro de selectividad de KcsA (residuos TVGYG) la extrema selectividad para K⁺ sobre el ion Na⁺, a pesar de que el ion Na⁺ es de menor radio atómico?",
  "options": [
    "El ion sodio es transportado exclusivamente por pinocitosis activa",
    "El poro está forrado de aminoácidos fuertemente hidrofóbicos que repelen a los iones divalentes",
    "Los oxígenos carbonílicos de la cadena peptídica están rígidamente espaciados para mimetizar la envoltura de solvatación del K⁺ deshidratado; el Na⁺ más pequeño no puede coordinar eficientemente con los 8 oxígenos y sufre un alto costo energético de desolvatación",
    "El ion potasio posee carga divalente que duplica la fuerza coulómbica de atracción"
  ],
  "correctIndex": 2,
  "explanation": "Descrito cristalográficamente por Roderick MacKinnon, los oxígenos de los carbonilos del backbone de la firma TVGYG replican con precisión nanométrica las distancias de las moléculas de agua que rodean a un ion K⁺ hidratado, permitiendo una desolvatación energéticamente neutra exclusiva para K⁺.",
  "skill": "Biofísica de Membranas y Canales Iónicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica Molecular",
  "subtopic": "Canal de Potasio KcsA y Filtro de Selectividad"
},
{
  "id": "nat-uni-87",
  "sectionId": 4,
  "number": 87,
  "text": "En investigación biofísica y molecular avanzada (análisis 5): En el sistema inmunitario adaptativo, ¿cuál es el mecanismo molecular de la 'hipermutación somática' que ocurre en los centros germinales de los ganglios linfáticos durante la maduración de la afinidad de anticuerpos?",
  "options": [
    "Fusión celular sincitial entre linfocitos B de memoria y macrófagos tisulares",
    "Desaminación enzimática dirigida de citosinas a uracilos en genes de inmunoglobulinas por la enzima AID (Activation-Induced Cytidine Deaminase), generando mutaciones puntuales tras reparación propensa a errores",
    "Inserción de transposones víricos en las regiones constantes Fc de las cadenas pesadas",
    "Corte y empalme alternativo al azar de exones codificantes de la albúmina sérica"
  ],
  "correctIndex": 1,
  "explanation": "La enzima AID desamina residuos de dC a dU en las regiones determinantes de complementariedad (CDR) de los genes variables de anticuerpos; las vías de reparación por escisión de bases y mismatch generan una tasa de mutación un millón de veces superior a la basal.",
  "skill": "Inmunología Celular de Centros Germinales",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Inmunología Avanzada",
  "subtopic": "Hipermutación Somática y Enzima AID"
},
{
  "id": "nat-uni-88",
  "sectionId": 4,
  "number": 88,
  "text": "En investigación biofísica y molecular avanzada (análisis 5): ¿Qué postula la hipótesis del 'Mundo de ARN' (RNA World) en el origen abiogenético de las primeras entidades replicativas biológicas?",
  "options": [
    "Que moléculas primitivas de ARN precedieron filogenéticamente al ADN y las proteínas, desempeñando simultáneamente funciones de almacenamiento de información genética y catálisis bioquímica (ribozimas)",
    "Que el ARN fue creado exclusivamente como subproducto de la síntesis de colágeno primordial",
    "Que los primeros organismos celulares utilizaban lípidos sulfatados como material genético hereditario",
    "Que la transcripción reversa fue la única reacción metabólica existente en el Arqueano"
  ],
  "correctIndex": 0,
  "explanation": "El descubrimiento de que el ARN puede almacenar genomas (como en virus) y catalizar reacciones de corte y unión fosfodiéster o formación de enlaces peptídicos (el centro peptidil-transferasa del ribosoma es una ribozima pura) sustenta que la vida ancestral se basó en ARN catalítico y replicativo.",
  "skill": "Evolución Química y Origen de la Vida",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva y Abiogénesis",
  "subtopic": "Hipótesis del Mundo de ARN"
},
{
  "id": "nat-uni-89",
  "sectionId": 4,
  "number": 89,
  "text": "En investigación biofísica y molecular avanzada (análisis 5): En la diferenciación celular embrionaria de vertebrados, ¿qué vía de señalización morfogenética utiliza la unión de ligandos Wnt a receptores Frizzled/LRP6 para inhibir el complejo de destrucción citoplasmático (Axina/APC/GSK3β) y permitir la translocación nuclear de beta-catenina?",
  "options": [
    "Vía de las caspasas dependientes de citocromo c",
    "Vía de la cinasa JAK y transactivadores STAT1",
    "Vía no canónica dependiente de fosfolipasa C y calmodulina quinasa II",
    "Vía canónica Wnt/beta-catenina"
  ],
  "correctIndex": 3,
  "explanation": "En ausencia de Wnt, el complejo Axina/APC/GSK3β fosforila a beta-catenina dirigiéndola a poliubiquitinación proteasómica; cuando Wnt se une a Frizzled/LRP5/6, recluta a Dishevelled disrumpiendo el complejo, permitiendo a beta-catenina acumularse y activar factores TCF/LEF.",
  "skill": "Biología del Desarrollo y Morfogénesis",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología del Desarrollo",
  "subtopic": "Vía de Señalización Canónica Wnt"
},
{
  "id": "nat-uni-90",
  "sectionId": 4,
  "number": 90,
  "text": "En investigación biofísica y molecular avanzada (análisis 5): En ecología evolutiva, ¿en qué consiste la 'hipótesis de la Reina Roja' formulada por Leigh Van Valen?",
  "options": [
    "La selección sexual en aves promueve siempre dimorfismos extremos de plumaje carmesí",
    "La tasa de especiación en el ecuador es inversamente proporcional a la temperatura superficial",
    "Una especie debe evolucionar y adaptarse continuamente solo para mantener su adecuación biológica relativa frente a coespeciaciones y adaptaciones continuas de competidores, parásitos y depredadores",
    "Las especies de mayor jerarquía trófica se reproducen siempre a tasas hiperbólicas constantes"
  ],
  "correctIndex": 2,
  "explanation": "Inspirada en 'A través del espejo' de Lewis Carroll, Van Valen postuló que el entorno biótico de una especie nunca es estático; cada avance adaptativo de una presa, hospedador o parásito presiona selectivamente al otro para coevolucionar, explicando la ventaja evolutiva del sexo frente a parásitos.",
  "skill": "Evolución Teórica y Coevolución",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva",
  "subtopic": "Hipótesis de la Reina Roja de Van Valen"
},
{
  "id": "nat-uni-91",
  "sectionId": 4,
  "number": 91,
  "text": "En investigación biofísica y molecular avanzada (análisis 6): ¿Cuál es el fundamento físico-químico de la técnica de secuenciación masiva en paralelo por síntesis de Illumina?",
  "options": [
    "Separación electroforética capilar tradicional por degradación química de Maxam-Gilbert",
    "Amplificación clonal por puente térmico en una celda de flujo seguida de incorporación cíclica de nucleótidos marcados fluorescentemente con terminadores reversibles",
    "Medición de fluctuaciones de conductancia iónica a través de un poro proteico biológico sin síntesis de ADN",
    "Detección electroquímica de liberación de iones hidrógeno (protones H⁺) mediante sensores ion-sensibles ISFET"
  ],
  "correctIndex": 1,
  "explanation": "La tecnología Illumina utiliza cebadores anclados a celdas de flujo de vidrio para generar clústeres por PCR en puente; luego una polimerasa incorpora nucleótidos marcados con fluoróforos con terminador en 3'-OH que se registran ópticamente y se escinden químicamente por ciclo.",
  "skill": "Genómica Funcional y Tecnologías NGS",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Genómica y Biología Molecular",
  "subtopic": "Secuenciación Illumina por Síntesis"
},
{
  "id": "nat-uni-92",
  "sectionId": 4,
  "number": 92,
  "text": "En investigación biofísica y molecular avanzada (análisis 6): En la termodinámica del plegamiento de proteínas globulares solubles en disolución acuosa, ¿cuál es la principal fuerza impulsora entrópica que favorece el estado nativo plegado a temperatura fisiológica?",
  "options": [
    "El efecto hidrofóbico, que libera moléculas de agua estructuradas en jaulas de clatrato alrededor de cadenas laterales no polares aumentando la entropía del solvente",
    "La formación de enlaces peptídicos de alta energía entre lisinas",
    "La repulsión electrostática de aniones sulfato en la superficie",
    "La disminución neta de la entropía conformacional de la cadena polipeptídica aislada"
  ],
  "correctIndex": 0,
  "explanation": "Aunque la cadena polipeptídica pierde entropía conformacional al plegarse (ΔS_cadena < 0), el empaquetamiento del núcleo hidrofóbico expulsa las jaulas ordenadas de agua circundantes, produciendo una gran ganancia entrópica del solvente (ΔS_solvente >> 0) que hace ΔG globalmente negativo.",
  "skill": "Estructura y Plegamiento de Proteínas",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica de Macromoléculas",
  "subtopic": "Efecto Hidrofóbico y Entropía en el Plegamiento"
},
{
  "id": "nat-uni-93",
  "sectionId": 4,
  "number": 93,
  "text": "En investigación biofísica y molecular avanzada (análisis 6): En el ciclo biogeoquímico global del carbono y el control del clima terrestre a escalas de millones de años (ciclo carbonato-silicato de Walker), ¿qué proceso actúa como el sumidero termodinámico primario de CO₂ atmosférico?",
  "options": [
    "La fotosíntesis de líquenes en desiertos polares",
    "La emisión magmática de basaltos en dorsales mediooceánicas",
    "La precipitación de halita en cuencas endorreicas hipersalinas",
    "La meteorización química de minerales silicatados continentales (como CaSiO₃) por ácido carbónico seguida de precipitación marina de carbonatos (CaCO₃)"
  ],
  "correctIndex": 3,
  "explanation": "La reacción de Urey CaSiO₃ + CO₂ -> CaCO₃ + SiO₂ describe cómo la disolución de silicatos por lluvia rica en CO₂ transporta Ca²⁺ y HCO₃⁻ a los océanos, donde organismos calcificadores precipitan CaCO₃ permanente, actuando como termostato planetario.",
  "skill": "Geoquímica Global y Ciclos Biogeoquímicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Geociencias y Cambio Climático Profundo",
  "subtopic": "Meteorización de Silicatos y Termostato de Carbono"
},
{
  "id": "nat-uni-94",
  "sectionId": 4,
  "number": 94,
  "text": "En investigación biofísica y molecular avanzada (análisis 6): En farmacodinámica molecular, ¿cómo se define el fenómeno del 'sesgo funcional' o 'agonismo sesgado' (biased agonism) en receptores 7-transmembrana GPCR?",
  "options": [
    "Estimulación sincrónica e idéntica de todas las subfamilias heterotriméricas Gαs, Gαi y Gαq",
    "Degradación lisosómica del fármaco sin inducir señalización celular",
    "Capacidad de un ligando para estabilizar diferencialmente conformaciones del receptor que activan preferentemente una vía efectora (v.gr., proteína G) sobre otra (v.gr., reclutamiento de beta-arrestina)",
    "Inactivación irreversible del receptor por unión covalente al bolsillo ortostérico"
  ],
  "correctIndex": 2,
  "explanation": "Los GPCRs no son simples interruptores binarios on/off; diferentes ligandos inducen estados conformacionales sutilmente distintos que activan selectivamente la cascada de proteínas G o la vía de beta-arrestinas, permitiendo diseñar fármacos con eficacia terapéutica y mínimos efectos adversos.",
  "skill": "Farmacología Molecular de GPCRs",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Farmacología y Bioquímica Celular",
  "subtopic": "Agonismo Sesgado en GPCRs"
},
{
  "id": "nat-uni-95",
  "sectionId": 4,
  "number": 95,
  "text": "En investigación biofísica y molecular avanzada (análisis 6): ¿Cuál es el papel biológico del complejo multiproteico cohesina durante el ciclo celular eucariota mitótico?",
  "options": [
    "Sintetizar los microtúbulos cinetocóricos del huso acromático",
    "Mantener unidas físicamente a las cromátidas hermanas desde la fase S de replicación hasta su escisión por la separasa en la transición metafase-anafase",
    "Fosforilar los filamentos intermedios de lámina nuclear para disolver la carioteca",
    "Condensar la cromatina en fibras de 30 nm durante la profase temprana"
  ],
  "correctIndex": 1,
  "explanation": "La cohesina forma un anillo proteico (compuesto por Smc1, Smc3, Scc1 y Scc3) que rodea y mantiene unidas a las dos cromátidas hermanas. En anafase, la securina es degradada por el APC/C, liberando a la separasa activa que cliva proteolíticamente a Scc1.",
  "skill": "Regulación del Ciclo Celular Mitótico",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Celular y Genética",
  "subtopic": "Complejo Cohesina y Segregación Cromosómica"
},
{
  "id": "nat-uni-96",
  "sectionId": 4,
  "number": 96,
  "text": "En investigación biofísica y molecular avanzada (análisis 6): En biofísica de canales iónicos, ¿cómo explica el filtro de selectividad de KcsA (residuos TVGYG) la extrema selectividad para K⁺ sobre el ion Na⁺, a pesar de que el ion Na⁺ es de menor radio atómico?",
  "options": [
    "Los oxígenos carbonílicos de la cadena peptídica están rígidamente espaciados para mimetizar la envoltura de solvatación del K⁺ deshidratado; el Na⁺ más pequeño no puede coordinar eficientemente con los 8 oxígenos y sufre un alto costo energético de desolvatación",
    "El ion potasio posee carga divalente que duplica la fuerza coulómbica de atracción",
    "El ion sodio es transportado exclusivamente por pinocitosis activa",
    "El poro está forrado de aminoácidos fuertemente hidrofóbicos que repelen a los iones divalentes"
  ],
  "correctIndex": 0,
  "explanation": "Descrito cristalográficamente por Roderick MacKinnon, los oxígenos de los carbonilos del backbone de la firma TVGYG replican con precisión nanométrica las distancias de las moléculas de agua que rodean a un ion K⁺ hidratado, permitiendo una desolvatación energéticamente neutra exclusiva para K⁺.",
  "skill": "Biofísica de Membranas y Canales Iónicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica Molecular",
  "subtopic": "Canal de Potasio KcsA y Filtro de Selectividad"
},
{
  "id": "nat-uni-97",
  "sectionId": 4,
  "number": 97,
  "text": "En investigación biofísica y molecular avanzada (análisis 6): En el sistema inmunitario adaptativo, ¿cuál es el mecanismo molecular de la 'hipermutación somática' que ocurre en los centros germinales de los ganglios linfáticos durante la maduración de la afinidad de anticuerpos?",
  "options": [
    "Inserción de transposones víricos en las regiones constantes Fc de las cadenas pesadas",
    "Corte y empalme alternativo al azar de exones codificantes de la albúmina sérica",
    "Fusión celular sincitial entre linfocitos B de memoria y macrófagos tisulares",
    "Desaminación enzimática dirigida de citosinas a uracilos en genes de inmunoglobulinas por la enzima AID (Activation-Induced Cytidine Deaminase), generando mutaciones puntuales tras reparación propensa a errores"
  ],
  "correctIndex": 3,
  "explanation": "La enzima AID desamina residuos de dC a dU en las regiones determinantes de complementariedad (CDR) de los genes variables de anticuerpos; las vías de reparación por escisión de bases y mismatch generan una tasa de mutación un millón de veces superior a la basal.",
  "skill": "Inmunología Celular de Centros Germinales",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Inmunología Avanzada",
  "subtopic": "Hipermutación Somática y Enzima AID"
},
{
  "id": "nat-uni-98",
  "sectionId": 4,
  "number": 98,
  "text": "En investigación biofísica y molecular avanzada (análisis 6): ¿Qué postula la hipótesis del 'Mundo de ARN' (RNA World) en el origen abiogenético de las primeras entidades replicativas biológicas?",
  "options": [
    "Que los primeros organismos celulares utilizaban lípidos sulfatados como material genético hereditario",
    "Que la transcripción reversa fue la única reacción metabólica existente en el Arqueano",
    "Que moléculas primitivas de ARN precedieron filogenéticamente al ADN y las proteínas, desempeñando simultáneamente funciones de almacenamiento de información genética y catálisis bioquímica (ribozimas)",
    "Que el ARN fue creado exclusivamente como subproducto de la síntesis de colágeno primordial"
  ],
  "correctIndex": 2,
  "explanation": "El descubrimiento de que el ARN puede almacenar genomas (como en virus) y catalizar reacciones de corte y unión fosfodiéster o formación de enlaces peptídicos (el centro peptidil-transferasa del ribosoma es una ribozima pura) sustenta que la vida ancestral se basó en ARN catalítico y replicativo.",
  "skill": "Evolución Química y Origen de la Vida",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva y Abiogénesis",
  "subtopic": "Hipótesis del Mundo de ARN"
},
{
  "id": "nat-uni-99",
  "sectionId": 4,
  "number": 99,
  "text": "En investigación biofísica y molecular avanzada (análisis 6): En la diferenciación celular embrionaria de vertebrados, ¿qué vía de señalización morfogenética utiliza la unión de ligandos Wnt a receptores Frizzled/LRP6 para inhibir el complejo de destrucción citoplasmático (Axina/APC/GSK3β) y permitir la translocación nuclear de beta-catenina?",
  "options": [
    "Vía no canónica dependiente de fosfolipasa C y calmodulina quinasa II",
    "Vía canónica Wnt/beta-catenina",
    "Vía de las caspasas dependientes de citocromo c",
    "Vía de la cinasa JAK y transactivadores STAT1"
  ],
  "correctIndex": 1,
  "explanation": "En ausencia de Wnt, el complejo Axina/APC/GSK3β fosforila a beta-catenina dirigiéndola a poliubiquitinación proteasómica; cuando Wnt se une a Frizzled/LRP5/6, recluta a Dishevelled disrumpiendo el complejo, permitiendo a beta-catenina acumularse y activar factores TCF/LEF.",
  "skill": "Biología del Desarrollo y Morfogénesis",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología del Desarrollo",
  "subtopic": "Vía de Señalización Canónica Wnt"
},
{
  "id": "nat-uni-100",
  "sectionId": 4,
  "number": 100,
  "text": "En investigación biofísica y molecular avanzada (análisis 6): En ecología evolutiva, ¿en qué consiste la 'hipótesis de la Reina Roja' formulada por Leigh Van Valen?",
  "options": [
    "Una especie debe evolucionar y adaptarse continuamente solo para mantener su adecuación biológica relativa frente a coespeciaciones y adaptaciones continuas de competidores, parásitos y depredadores",
    "Las especies de mayor jerarquía trófica se reproducen siempre a tasas hiperbólicas constantes",
    "La selección sexual en aves promueve siempre dimorfismos extremos de plumaje carmesí",
    "La tasa de especiación en el ecuador es inversamente proporcional a la temperatura superficial"
  ],
  "correctIndex": 0,
  "explanation": "Inspirada en 'A través del espejo' de Lewis Carroll, Van Valen postuló que el entorno biótico de una especie nunca es estático; cada avance adaptativo de una presa, hospedador o parásito presiona selectivamente al otro para coevolucionar, explicando la ventaja evolutiva del sexo frente a parásitos.",
  "skill": "Evolución Teórica y Coevolución",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva",
  "subtopic": "Hipótesis de la Reina Roja de Van Valen"
},
{
  "id": "nat-uni-101",
  "sectionId": 4,
  "number": 101,
  "text": "En investigación biofísica y molecular avanzada (análisis 7): ¿Cuál es el fundamento físico-químico de la técnica de secuenciación masiva en paralelo por síntesis de Illumina?",
  "options": [
    "Medición de fluctuaciones de conductancia iónica a través de un poro proteico biológico sin síntesis de ADN",
    "Detección electroquímica de liberación de iones hidrógeno (protones H⁺) mediante sensores ion-sensibles ISFET",
    "Separación electroforética capilar tradicional por degradación química de Maxam-Gilbert",
    "Amplificación clonal por puente térmico en una celda de flujo seguida de incorporación cíclica de nucleótidos marcados fluorescentemente con terminadores reversibles"
  ],
  "correctIndex": 3,
  "explanation": "La tecnología Illumina utiliza cebadores anclados a celdas de flujo de vidrio para generar clústeres por PCR en puente; luego una polimerasa incorpora nucleótidos marcados con fluoróforos con terminador en 3'-OH que se registran ópticamente y se escinden químicamente por ciclo.",
  "skill": "Genómica Funcional y Tecnologías NGS",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Genómica y Biología Molecular",
  "subtopic": "Secuenciación Illumina por Síntesis"
},
{
  "id": "nat-uni-102",
  "sectionId": 4,
  "number": 102,
  "text": "En investigación biofísica y molecular avanzada (análisis 7): En la termodinámica del plegamiento de proteínas globulares solubles en disolución acuosa, ¿cuál es la principal fuerza impulsora entrópica que favorece el estado nativo plegado a temperatura fisiológica?",
  "options": [
    "La repulsión electrostática de aniones sulfato en la superficie",
    "La disminución neta de la entropía conformacional de la cadena polipeptídica aislada",
    "El efecto hidrofóbico, que libera moléculas de agua estructuradas en jaulas de clatrato alrededor de cadenas laterales no polares aumentando la entropía del solvente",
    "La formación de enlaces peptídicos de alta energía entre lisinas"
  ],
  "correctIndex": 2,
  "explanation": "Aunque la cadena polipeptídica pierde entropía conformacional al plegarse (ΔS_cadena < 0), el empaquetamiento del núcleo hidrofóbico expulsa las jaulas ordenadas de agua circundantes, produciendo una gran ganancia entrópica del solvente (ΔS_solvente >> 0) que hace ΔG globalmente negativo.",
  "skill": "Estructura y Plegamiento de Proteínas",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica de Macromoléculas",
  "subtopic": "Efecto Hidrofóbico y Entropía en el Plegamiento"
},
{
  "id": "nat-uni-103",
  "sectionId": 4,
  "number": 103,
  "text": "En investigación biofísica y molecular avanzada (análisis 7): En el ciclo biogeoquímico global del carbono y el control del clima terrestre a escalas de millones de años (ciclo carbonato-silicato de Walker), ¿qué proceso actúa como el sumidero termodinámico primario de CO₂ atmosférico?",
  "options": [
    "La precipitación de halita en cuencas endorreicas hipersalinas",
    "La meteorización química de minerales silicatados continentales (como CaSiO₃) por ácido carbónico seguida de precipitación marina de carbonatos (CaCO₃)",
    "La fotosíntesis de líquenes en desiertos polares",
    "La emisión magmática de basaltos en dorsales mediooceánicas"
  ],
  "correctIndex": 1,
  "explanation": "La reacción de Urey CaSiO₃ + CO₂ -> CaCO₃ + SiO₂ describe cómo la disolución de silicatos por lluvia rica en CO₂ transporta Ca²⁺ y HCO₃⁻ a los océanos, donde organismos calcificadores precipitan CaCO₃ permanente, actuando como termostato planetario.",
  "skill": "Geoquímica Global y Ciclos Biogeoquímicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Geociencias y Cambio Climático Profundo",
  "subtopic": "Meteorización de Silicatos y Termostato de Carbono"
},
{
  "id": "nat-uni-104",
  "sectionId": 4,
  "number": 104,
  "text": "En investigación biofísica y molecular avanzada (análisis 7): En farmacodinámica molecular, ¿cómo se define el fenómeno del 'sesgo funcional' o 'agonismo sesgado' (biased agonism) en receptores 7-transmembrana GPCR?",
  "options": [
    "Capacidad de un ligando para estabilizar diferencialmente conformaciones del receptor que activan preferentemente una vía efectora (v.gr., proteína G) sobre otra (v.gr., reclutamiento de beta-arrestina)",
    "Inactivación irreversible del receptor por unión covalente al bolsillo ortostérico",
    "Estimulación sincrónica e idéntica de todas las subfamilias heterotriméricas Gαs, Gαi y Gαq",
    "Degradación lisosómica del fármaco sin inducir señalización celular"
  ],
  "correctIndex": 0,
  "explanation": "Los GPCRs no son simples interruptores binarios on/off; diferentes ligandos inducen estados conformacionales sutilmente distintos que activan selectivamente la cascada de proteínas G o la vía de beta-arrestinas, permitiendo diseñar fármacos con eficacia terapéutica y mínimos efectos adversos.",
  "skill": "Farmacología Molecular de GPCRs",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Farmacología y Bioquímica Celular",
  "subtopic": "Agonismo Sesgado en GPCRs"
},
{
  "id": "nat-uni-105",
  "sectionId": 4,
  "number": 105,
  "text": "En investigación biofísica y molecular avanzada (análisis 7): ¿Cuál es el papel biológico del complejo multiproteico cohesina durante el ciclo celular eucariota mitótico?",
  "options": [
    "Fosforilar los filamentos intermedios de lámina nuclear para disolver la carioteca",
    "Condensar la cromatina en fibras de 30 nm durante la profase temprana",
    "Sintetizar los microtúbulos cinetocóricos del huso acromático",
    "Mantener unidas físicamente a las cromátidas hermanas desde la fase S de replicación hasta su escisión por la separasa en la transición metafase-anafase"
  ],
  "correctIndex": 3,
  "explanation": "La cohesina forma un anillo proteico (compuesto por Smc1, Smc3, Scc1 y Scc3) que rodea y mantiene unidas a las dos cromátidas hermanas. En anafase, la securina es degradada por el APC/C, liberando a la separasa activa que cliva proteolíticamente a Scc1.",
  "skill": "Regulación del Ciclo Celular Mitótico",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Celular y Genética",
  "subtopic": "Complejo Cohesina y Segregación Cromosómica"
},
{
  "id": "nat-uni-106",
  "sectionId": 4,
  "number": 106,
  "text": "En investigación biofísica y molecular avanzada (análisis 7): En biofísica de canales iónicos, ¿cómo explica el filtro de selectividad de KcsA (residuos TVGYG) la extrema selectividad para K⁺ sobre el ion Na⁺, a pesar de que el ion Na⁺ es de menor radio atómico?",
  "options": [
    "El ion sodio es transportado exclusivamente por pinocitosis activa",
    "El poro está forrado de aminoácidos fuertemente hidrofóbicos que repelen a los iones divalentes",
    "Los oxígenos carbonílicos de la cadena peptídica están rígidamente espaciados para mimetizar la envoltura de solvatación del K⁺ deshidratado; el Na⁺ más pequeño no puede coordinar eficientemente con los 8 oxígenos y sufre un alto costo energético de desolvatación",
    "El ion potasio posee carga divalente que duplica la fuerza coulómbica de atracción"
  ],
  "correctIndex": 2,
  "explanation": "Descrito cristalográficamente por Roderick MacKinnon, los oxígenos de los carbonilos del backbone de la firma TVGYG replican con precisión nanométrica las distancias de las moléculas de agua que rodean a un ion K⁺ hidratado, permitiendo una desolvatación energéticamente neutra exclusiva para K⁺.",
  "skill": "Biofísica de Membranas y Canales Iónicos",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biofísica Molecular",
  "subtopic": "Canal de Potasio KcsA y Filtro de Selectividad"
},
{
  "id": "nat-uni-107",
  "sectionId": 4,
  "number": 107,
  "text": "En investigación biofísica y molecular avanzada (análisis 7): En el sistema inmunitario adaptativo, ¿cuál es el mecanismo molecular de la 'hipermutación somática' que ocurre en los centros germinales de los ganglios linfáticos durante la maduración de la afinidad de anticuerpos?",
  "options": [
    "Fusión celular sincitial entre linfocitos B de memoria y macrófagos tisulares",
    "Desaminación enzimática dirigida de citosinas a uracilos en genes de inmunoglobulinas por la enzima AID (Activation-Induced Cytidine Deaminase), generando mutaciones puntuales tras reparación propensa a errores",
    "Inserción de transposones víricos en las regiones constantes Fc de las cadenas pesadas",
    "Corte y empalme alternativo al azar de exones codificantes de la albúmina sérica"
  ],
  "correctIndex": 1,
  "explanation": "La enzima AID desamina residuos de dC a dU en las regiones determinantes de complementariedad (CDR) de los genes variables de anticuerpos; las vías de reparación por escisión de bases y mismatch generan una tasa de mutación un millón de veces superior a la basal.",
  "skill": "Inmunología Celular de Centros Germinales",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Inmunología Avanzada",
  "subtopic": "Hipermutación Somática y Enzima AID"
},
{
  "id": "nat-uni-108",
  "sectionId": 4,
  "number": 108,
  "text": "En investigación biofísica y molecular avanzada (análisis 7): ¿Qué postula la hipótesis del 'Mundo de ARN' (RNA World) en el origen abiogenético de las primeras entidades replicativas biológicas?",
  "options": [
    "Que moléculas primitivas de ARN precedieron filogenéticamente al ADN y las proteínas, desempeñando simultáneamente funciones de almacenamiento de información genética y catálisis bioquímica (ribozimas)",
    "Que el ARN fue creado exclusivamente como subproducto de la síntesis de colágeno primordial",
    "Que los primeros organismos celulares utilizaban lípidos sulfatados como material genético hereditario",
    "Que la transcripción reversa fue la única reacción metabólica existente en el Arqueano"
  ],
  "correctIndex": 0,
  "explanation": "El descubrimiento de que el ARN puede almacenar genomas (como en virus) y catalizar reacciones de corte y unión fosfodiéster o formación de enlaces peptídicos (el centro peptidil-transferasa del ribosoma es una ribozima pura) sustenta que la vida ancestral se basó en ARN catalítico y replicativo.",
  "skill": "Evolución Química y Origen de la Vida",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva y Abiogénesis",
  "subtopic": "Hipótesis del Mundo de ARN"
},
{
  "id": "nat-uni-109",
  "sectionId": 4,
  "number": 109,
  "text": "En investigación biofísica y molecular avanzada (análisis 7): En la diferenciación celular embrionaria de vertebrados, ¿qué vía de señalización morfogenética utiliza la unión de ligandos Wnt a receptores Frizzled/LRP6 para inhibir el complejo de destrucción citoplasmático (Axina/APC/GSK3β) y permitir la translocación nuclear de beta-catenina?",
  "options": [
    "Vía de las caspasas dependientes de citocromo c",
    "Vía de la cinasa JAK y transactivadores STAT1",
    "Vía no canónica dependiente de fosfolipasa C y calmodulina quinasa II",
    "Vía canónica Wnt/beta-catenina"
  ],
  "correctIndex": 3,
  "explanation": "En ausencia de Wnt, el complejo Axina/APC/GSK3β fosforila a beta-catenina dirigiéndola a poliubiquitinación proteasómica; cuando Wnt se une a Frizzled/LRP5/6, recluta a Dishevelled disrumpiendo el complejo, permitiendo a beta-catenina acumularse y activar factores TCF/LEF.",
  "skill": "Biología del Desarrollo y Morfogénesis",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología del Desarrollo",
  "subtopic": "Vía de Señalización Canónica Wnt"
},
{
  "id": "nat-uni-110",
  "sectionId": 4,
  "number": 110,
  "text": "En investigación biofísica y molecular avanzada (análisis 7): En ecología evolutiva, ¿en qué consiste la 'hipótesis de la Reina Roja' formulada por Leigh Van Valen?",
  "options": [
    "La selección sexual en aves promueve siempre dimorfismos extremos de plumaje carmesí",
    "La tasa de especiación en el ecuador es inversamente proporcional a la temperatura superficial",
    "Una especie debe evolucionar y adaptarse continuamente solo para mantener su adecuación biológica relativa frente a coespeciaciones y adaptaciones continuas de competidores, parásitos y depredadores",
    "Las especies de mayor jerarquía trófica se reproducen siempre a tasas hiperbólicas constantes"
  ],
  "correctIndex": 2,
  "explanation": "Inspirada en 'A través del espejo' de Lewis Carroll, Van Valen postuló que el entorno biótico de una especie nunca es estático; cada avance adaptativo de una presa, hospedador o parásito presiona selectivamente al otro para coevolucionar, explicando la ventaja evolutiva del sexo frente a parásitos.",
  "skill": "Evolución Teórica y Coevolución",
  "difficulty": "Desafiante",
  "educationalLevel": "Universitario",
  "topic": "Biología Evolutiva",
  "subtopic": "Hipótesis de la Reina Roja de Van Valen"
}
];
