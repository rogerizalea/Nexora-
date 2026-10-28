import { Question } from '../../types';

export const MEC_UNIVERSITARIO_21_100: Question[] = [
  {
    "id": "mec-uni-21",
    "sectionId": 1,
    "number": 21,
    "text": "En la termodinámica de motores alternativos, ¿cómo se define la Presión Media Efectiva al Freno (BMEP - Brake Mean Effective Pressure)?",
    "options": [
      "La presión teórica constante ficticia que, si actuara uniformemente sobre los pistones durante toda la carrera de expansión, produciría el mismo trabajo útil neto medido en el eje del cigüeñal que el ciclo real",
      "La presión máxima pico registrada por el sensor en la cámara de combustión",
      "La presión estática del aceite en el conducto principal de bancada",
      "La presión barométrica exterior multiplicada por el número de cilindros"
    ],
    "correctIndex": 0,
    "explanation": "La BMEP es el parámetro por excelencia para comparar el rendimiento de motores de diferentes cilindradas (BMEP = 2 * π * nR * T / Vd); independientemente del tamaño del motor, indica la eficacia con la que se utiliza el volumen desplazado.",
    "skill": "Termodinámica de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Parámetros de Rendimiento",
    "subtopic": "Presión Media Efectiva al Freno (BMEP)"
  },
  {
    "id": "mec-uni-22",
    "sectionId": 1,
    "number": 22,
    "text": "¿Cuál es la relación matemática fundamental que vincula la Presión Media Indicada (IMEP), la Presión Media Efectiva al Freno (BMEP) y la Presión Media de Pérdidas por Fricción y Bombeo (FMEP)?",
    "options": [
      "BMEP = IMEP - FMEP (o Rendimiento Mecánico ηm = BMEP / IMEP)",
      "BMEP = IMEP * FMEP",
      "BMEP = FMEP - IMEP",
      "IMEP = BMEP * FMEP"
    ],
    "correctIndex": 0,
    "explanation": "El trabajo indicado desarrollado por los gases dentro del cilindro (IMEP) se reduce por las pérdidas mecánicas de fricción de aros, cojinetes, accionamiento de válvulas y pérdidas de bombeo (FMEP), entregando el par neto en el volante (BMEP).",
    "skill": "Balances Energéticos del Motor",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Rendimiento Mecánico",
    "subtopic": "Relación entre IMEP, BMEP y FMEP"
  },
  {
    "id": "mec-uni-23",
    "sectionId": 1,
    "number": 23,
    "text": "¿Cuál es la característica termodinámica que distingue al 'Ciclo Atkinson / Miller' frente al ciclo Otto convencional para maximizar el rendimiento térmico?",
    "options": [
      "Posee una carrera de expansión efectiva mayor que la carrera de compresión efectiva (sobre-expansión), lograda retardando significativamente el cierre de la válvula de admisión (LIVC) para expulsar parte de la mezcla",
      "Quema combustible diésel sin inyectores",
      "Comprime el aire a volumen constante",
      "Elimina las pérdidas por rozamiento en los pistones"
    ],
    "correctIndex": 0,
    "explanation": "Al retrasar el cierre de admisión, se reduce el trabajo negativo de compresión y las pérdidas de bombeo, mientras que la carrera completa de expansión extrae más energía de los gases calientes, alcanzando eficiencias térmicas de más del 40% en motores híbridos.",
    "skill": "Ciclos Termodinámicos de Sobre-expansión",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciclos Atkinson y Miller",
    "subtopic": "Asimetría entre Compresión y Expansión"
  },
  {
    "id": "mec-uni-24",
    "sectionId": 1,
    "number": 24,
    "text": "En el ciclo termodinámico teórico de aire estándar Otto, ¿de qué variables depende exclusivamente el rendimiento térmico ideal (ηth)?",
    "options": [
      "Únicamente de la relación de compresión volumétrica (r) y del coeficiente adiabático de dilatación del gas (γ = Cp / Cv): ηth = 1 - (1 / r^(γ - 1))",
      "Del peso del volante de inercia y la viscosidad del aceite",
      "Del número de válvulas por cilindro exclusivamente",
      "De la temperatura del radiador del motor"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación fundamental de Otto demuestra que elevar la relación de compresión r incrementa asintóticamente la eficiencia térmica, limitado en la práctica únicamente por la detonación del combustible.",
    "skill": "Termodinámica Teórica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciclo Otto de Aire Estándar",
    "subtopic": "Ecuación de Rendimiento Térmico Ideal"
  },
  {
    "id": "mec-uni-25",
    "sectionId": 1,
    "number": 25,
    "text": "¿Por qué a igualdad de relación de compresión máxima, el ciclo Otto teórico tiene mayor rendimiento térmico que el ciclo Diésel teórico?",
    "options": [
      "Porque en el ciclo Otto toda la aportación de calor ocurre instantáneamente a volumen constante en el PMS (máxima presión y temperatura), mientras que en el Diésel la adición de calor a presión constante ocurre durante la expansión perdiendo potencial de trabajo",
      "Porque el ciclo Diésel no utiliza oxígeno del aire",
      "Porque la gasolina genera más energía que el gasóleo por litro",
      "Porque las bielas del motor Otto son más largas"
    ],
    "correctIndex": 0,
    "explanation": "Aporte de calor isócoro es termodinámicamente más eficiente que isóbaro; no obstante, en la práctica el motor Diésel es más eficiente que el Otto porque opera con relaciones de compresión reales mucho más altas (18:1 vs 10:1).",
    "skill": "Comparación Termodinámica de Ciclos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Termodinámica Aplicada",
    "subtopic": "Aporte de Calor Isócoro vs Isóbaro"
  },
  {
    "id": "mec-uni-26",
    "sectionId": 1,
    "number": 26,
    "text": "¿Qué ciclo termodinámico mixto 'Ciclo Dual o de Sabathé' modela con mayor fidelidad el comportamiento de los motores diésel modernos de inyección directa y alta velocidad?",
    "options": [
      "Un ciclo donde una primera fracción de combustible se quema a volumen constante (isócora) elevando rápidamente la presión, y el resto se quema a presión constante (isóbara) durante el inicio de la carrera de expansión",
      "Un ciclo que combina turbina de gas con vapor de agua",
      "Un ciclo sin intercambio de calor con el exterior",
      "Un ciclo puramente isotérmico de Carnot"
    ],
    "correctIndex": 0,
    "explanation": "Debido a la alta velocidad de giro de los motores diésel de turismo, la combustión no puede ser puramente isóbara; el ciclo Sabathé introduce el pico inicial isócoro reflejando con exactitud los diagramas de presión indicados P-V reales.",
    "skill": "Modelado Termodinámico de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ciclo Sabathé (Dual)",
    "subtopic": "Aportación Mixta de Calor a P y V Constantes"
  },
  {
    "id": "mec-uni-27",
    "sectionId": 1,
    "number": 27,
    "text": "¿Cómo se define el 'Rendimiento Volumétrico' (ηv) de un motor de cuatro tiempos de aspiración natural?",
    "options": [
      "El cociente entre la masa real de aire fresco atrapada en los cilindros durante la admisión y la masa teórica de aire que llenaría el volumen desplazado en condiciones atmosféricas de referencia de densidad",
      "El volumen de gasolina consumido dividido por el volumen del depósito",
      "El porcentaje de aceite que se quema en la cámara de combustión",
      "La relación entre el diámetro y la carrera del pistón"
    ],
    "correctIndex": 0,
    "explanation": "El rendimiento volumétrico mide la eficacia respiratoria del motor; factores como pérdidas de carga en válvulas, calentamiento en el múltiple y cruce de levas limitan ηv a un 80-90% en atmosféricos, superando el 150-200% con sobrealimentación.",
    "skill": "Fluidos y Respiración del Motor",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Rendimiento Volumétrico",
    "subtopic": "Definición y Factores que Afectan a ηv"
  },
  {
    "id": "mec-uni-28",
    "sectionId": 1,
    "number": 28,
    "text": "¿Qué efecto dinámico de resonancia acústica en el múltiple de admisión 'Efecto Helmholtz' se aprovecha en los colectores de admisión de longitud variable (VIS)?",
    "options": [
      "Sintonizar la frecuencia de las ondas de presión acústica reflejadas en el tubo para que una cresta de sobrepresión positiva coincida en la válvula de admisión justo antes de su cierre, forzando aire adicional al cilindro (sobrealimentación acústica)",
      "Reducir el sonido del motor a cero decibelios",
      "Calentar el aire de admisión con fricción sónica",
      "Evaporar el combustible en microsegundos"
    ],
    "correctIndex": 0,
    "explanation": "Un resonador de Helmholtz sintoniza conductos largos para bajas RPM (resonancia a baja frecuencia) y conductos cortos para altas RPM, optimizando el rendimiento volumétrico en todo el tacómetro.",
    "skill": "Dinámica de Gases en Admisión",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Múltiples de Longitud Variable",
    "subtopic": "Resonancia Acústica de Helmholtz"
  },
  {
    "id": "mec-uni-29",
    "sectionId": 1,
    "number": 29,
    "text": "¿En qué consiste el 'Trabajo de Bombeo' (Pumping Work) en el lazo inferior del diagrama P-V de un motor de cuatro tiempos?",
    "options": [
      "El trabajo negativo parásito que el pistón debe realizar para expulsar los gases de escape a través de la válvula de escape y para succionar la carga fresca durante la admisión a través de la restricción de la mariposa",
      "La energía eléctrica que consume la bomba de agua",
      "El esfuerzo del mecánico al accionar la palanca de cambios",
      "El trabajo de la bomba de aceite a 5000 RPM"
    ],
    "correctIndex": 0,
    "explanation": "En cargas parciales con la mariposa casi cerrada, el vacío en el múltiple exige al pistón tirar contra una fuerte depresión en admisión, creando un lazo negativo en el diagrama P-V que resta potencia útil.",
    "skill": "Diagrama Indicado P-V",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Pérdidas de Bombeo",
    "subtopic": "Lazo de Bombeo en Diagramas P-V"
  },
  {
    "id": "mec-uni-30",
    "sectionId": 1,
    "number": 30,
    "text": "En el balance térmico de un motor de combustión interna convencional en condiciones de máxima potencia, ¿qué porcentaje aproximado de la energía química del combustible se convierte en trabajo mecánico útil en el cigüeñal?",
    "options": [
      "Aproximadamente entre el 30% y el 40% (el resto se disipa: ~30-35% en el refrigerante y radiador, ~30-35% en los gases de escape y ~5% por radiación y fricción)",
      "Exactamente el 95%",
      "Menos del 5%",
      "El 100% por la ley de conservación de la energía"
    ],
    "correctIndex": 0,
    "explanation": "La segunda ley de la termodinámica impone límites al ciclo térmico; más de dos tercios de la energía primaria del hidrocarburo se pierden inevitablemente en calor residual cedido a la atmósfera y al agua de refrigeración.",
    "skill": "Balances Térmicos de Energía",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Eficiencia Global",
    "subtopic": "Balance Térmico del Motor de Combustión"
  },
  {
    "id": "mec-uni-31",
    "sectionId": 1,
    "number": 31,
    "text": "En la cinemática del mecanismo biela-manivela, ¿por qué el movimiento del pistón NO es un movimiento armónico simple puro?",
    "options": [
      "Debido a la oblicuidad y longitud finita de la biela (relación λ = radio manivela / longitud biela), lo que introduce armónicos de segundo orden haciendo que el pistón se mueva más rápido en la mitad superior de su carrera que en la inferior",
      "Porque los pistones son de aleación de aluminio y no de acero",
      "Porque el cigüeñal gira a velocidad variable en cada segundo",
      "Porque el aceite frena el pistón en el PMI"
    ],
    "correctIndex": 0,
    "explanation": "La aceleración del pistón responde a la serie de Fourier: a = r*ω²*(cos(θ) + λ*cos(2θ)); el término λ*cos(2θ) da origen a las fuerzas de inercia de segundo orden que vibran al doble de la frecuencia del motor.",
    "skill": "Dinámica del Mecanismo Biela-Manivela",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinemática del Pistón",
    "subtopic": "Efecto de la Oblicuidad de la Biela (Términos de 2º Orden)"
  },
  {
    "id": "mec-uni-32",
    "sectionId": 1,
    "number": 32,
    "text": "En un motor de 4 cilindros en línea de cuatro tiempos con cigüeñal plano estándar a 180° (orden 1-3-4-2), ¿qué tipo de fuerzas de inercia quedan inherentemente DESEQUILIBRADAS?",
    "options": [
      "Las fuerzas de inercia de segundo orden (que oscilan al doble de la velocidad del cigüeñal, 2ω, en el plano vertical)",
      "Las fuerzas de inercia de primer orden",
      "Los momentos de balanceo de primer orden",
      "Todas las fuerzas están matemáticamente equilibradas a cero"
    ],
    "correctIndex": 0,
    "explanation": "Los pistones 1 y 4 suben mientras 2 y 3 bajan equilibrando las fuerzas de primer orden; pero debido a la oblicuidad de la biela, la aceleración en PMS es mayor que en PMI, sumándose las cuatro fuerzas de segundo orden en la misma dirección vertical.",
    "skill": "Equilibrado de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Equilibrado de Motores de 4 Cilindros",
    "subtopic": "Fuerzas de Inercia de Segundo Orden"
  },
  {
    "id": "mec-uni-33",
    "sectionId": 1,
    "number": 33,
    "text": "¿Cómo neutralizan los fabricantes las molestas vibraciones de segundo orden en motores de 4 cilindros en línea de cilindrada media o grande (>2.0 litros)?",
    "options": [
      "Mediante dos árboles contrarrotantes de equilibrado (Sistema Lanchester) ubicados en el cárter que giran exactamente al doble de la velocidad del cigüeñal (2ω) con masas excéntricas desfasadas",
      "Añadiendo más aceite al cárter",
      "Aumentando el diámetro del volante de inercia al triple",
      "Fabricando las bielas de plástico"
    ],
    "correctIndex": 0,
    "explanation": "Patentado por Frederick Lanchester, las dos masas giran en sentidos opuestos cancelando sus fuerzas horizontales y sumando una fuerza vertical senoidal opuesta que anula al 100% la fuerza de inercia de segundo orden del motor.",
    "skill": "Sistemas de Equilibrado Lanchester",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Árboles de Equilibrado",
    "subtopic": "Sistema Lanchester de Doble Frecuencia (2ω)"
  },
  {
    "id": "mec-uni-34",
    "sectionId": 1,
    "number": 34,
    "text": "¿Por qué la configuración de un motor de 6 cilindros en línea (o V12 a 60°) se considera mecánicamente el diseño 'perfectamente equilibrado por naturaleza'?",
    "options": [
      "Porque tanto las fuerzas de inercia de primer y segundo orden como los momentos de balanceo de primer y segundo orden se anulan a cero de forma espontánea y simétrica entre sus dos bancadas de 3 cilindros reflejadas",
      "Porque no utiliza cigüeñal rotatorio",
      "Porque no sufre fricción de cojinetes",
      "Porque tiene exactamente 6 bujías"
    ],
    "correctIndex": 0,
    "explanation": "La simetría cinemática a 120° hace que la suma vectorial de todas las fuerzas y pares libres de inercia sea idénticamente cero, ofreciendo una suavidad de marcha rotacional que no requiere árboles de balanceo adicionales.",
    "skill": "Arquitectura y Equilibrado de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Equilibrado de Motores en Línea",
    "subtopic": "Equilibrado Perfecto del Motor L6 y V12"
  },
  {
    "id": "mec-uni-35",
    "sectionId": 1,
    "number": 35,
    "text": "¿Qué fenómeno vibratorio peligroso 'Vibración Torsional' del cigüeñal se mitiga mediante la instalación del dámper (damper de polea delantera)?",
    "options": [
      "Las oscilaciones de torsión elástica inducidas a lo largo del cigüeñal por los impactos discontinuos de presión de combustión; si coinciden con la frecuencia natural de torsión del acero, el cigüeñal puede partirse por fatiga en minutos",
      "El desplazamiento del motor hacia adelante en las frenadas",
      "El desalineado de la caja de cambios",
      "La vibración de los neumáticos"
    ],
    "correctIndex": 0,
    "explanation": "El cigüeñal actúa como un resorte de torsión; el amortiguador armónico (dámper) cuenta con un anillo de inercia desacoplado por un elastómero vulcanizado o fluido viscoso de silicona que disipa la energía de torsión en calor.",
    "skill": "Dinámica Torsional de Cigüeñales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Vibraciones Torsionales",
    "subtopic": "Amortiguador Armónico Torsional (Dámper)"
  },
  {
    "id": "mec-uni-36",
    "sectionId": 1,
    "number": 36,
    "text": "¿Cuál es el propósito del 'Descentramiento del Bulón' (Piston Pin Offset) de entre 0.5 y 1.5 mm respecto al eje central del pistón hacia el lado de empuje?",
    "options": [
      "Cambiar gradualmente el apoyo de la falda del pistón de una pared a otra del cilindro justo antes del PMS en lugar de en el instante de máxima presión, eliminando el ruido de cabeceo del pistón (Piston Slap)",
      "Permitir que el pistón gire sobre sí mismo dentro del cilindro",
      "Hacer que el motor consuma menos aceite",
      "Aumentar el diámetro del cilindro"
    ],
    "correctIndex": 0,
    "explanation": "El offset genera un par que balancea suavemente la falda del pistón contra la pared de empuje menor antes de la combustión, amortiguando el impacto lateral y reduciendo el desgaste y ruido mecánico.",
    "skill": "Diseño y Geometría de Pistones",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cinemática del Pistón",
    "subtopic": "Descentramiento del Bulón (Piston Slap)"
  },
  {
    "id": "mec-uni-37",
    "sectionId": 1,
    "number": 37,
    "text": "¿Cómo se define el 'Orden de Encendido' en un motor pluricilíndrico y qué criterio principal guía su selección por los ingenieros?",
    "options": [
      "La secuencia cronológica en que salta la chispa o inyección en cada cilindro; se diseña para distribuir uniformemente las cargas mecánicas a lo largo del cigüeñal y evitar pulsos de admisión/escape consecutivos en cilindros adyacentes",
      "El orden alfabético de los nombres de los pistones",
      "La fecha de fabricación de cada bujía",
      "El orden de encendido de las luces del cuadro"
    ],
    "correctIndex": 0,
    "explanation": "En un motor de 4 cilindros el orden 1-3-4-2 o 1-2-4-3 alterna las explosiones entre extremos y centro, minimizando los esfuerzos de flexión y vibraciones en los cojinetes de bancada.",
    "skill": "Diseño de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Tren de Encendido",
    "subtopic": "Selección del Orden de Encendido"
  },
  {
    "id": "mec-uni-38",
    "sectionId": 1,
    "number": 38,
    "text": "¿Qué esfuerzos mecánicos combinados soporta la biela durante su ciclo de funcionamiento?",
    "options": [
      "Compresión extrema y pandeo (buckling) durante la combustión, tracción elevada por inercia del pistón en el PMS de cruce de válvulas, y flexión dinámica lateral por su propio movimiento de vaivén",
      "Únicamente torsión pura",
      "Únicamente tracción estática",
      "Cero esfuerzo mecánico por estar lubricada"
    ],
    "correctIndex": 0,
    "explanation": "La sección en 'H' o en doble T de las bielas forjadas de acero al cromo-molibdeno está optimizada para maximizar el momento de inercia resistente al pandeo con el mínimo peso alternativo.",
    "skill": "Resistencia de Materiales Automotrices",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Cálculo de Elementos del Motor",
    "subtopic": "Esfuerzos de Tracción, Compresión y Pandeo en Bielas"
  },
  {
    "id": "mec-uni-39",
    "sectionId": 1,
    "number": 39,
    "text": "¿Qué ángulo entre bancadas en un motor 'V6' permite lograr intervalos de explosión perfectamente regulares y uniformes cada 120° de giro del cigüeñal sin requerir muñones desplazados?",
    "options": [
      "Un ángulo de 60° entre bancadas (o muñones de biela desfasados a 30° en motores V6 a 90°)",
      "90° con muñones compartidos sin desfasar",
      "180° de motor bóxer únicamente",
      "45° fijo"
    ],
    "correctIndex": 0,
    "explanation": "Para encendidos regulares cada 720° / 6 = 120°, la V debe ser de 60° (o 120°); si se utiliza un ángulo de 90° (derivado de bloques V8), se debe fabricar un cigüeñal 'split-pin' con muñones gemelos desplazados 30° entre sí.",
    "skill": "Geometría de Motores en V",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Configuración de Motores en V",
    "subtopic": "Ángulo de Bancada en Motores V6 (60° vs 90°)"
  },
  {
    "id": "mec-uni-40",
    "sectionId": 1,
    "number": 40,
    "text": "¿Cuál es la diferencia constructiva y cinemática fundamental entre un motor de cilindros opuestos 'Bóxer' y un motor en 'V a 180°'?",
    "options": [
      "En el motor Bóxer cada pistón tiene su propio muñón de cigüeñal independiente a 180°, moviéndose ambos pistones opuestos simétricamente hacia adentro y hacia afuera simultáneamente; en el motor en V a 180° comparten el mismo muñón moviéndose en la misma dirección relativa",
      "El Bóxer tiene solo 2 válvulas y el V de 180° tiene 16",
      "El Bóxer no utiliza pistones",
      "Son dos nombres exactamente idénticos para el mismo motor"
    ],
    "correctIndex": 0,
    "explanation": "Los pistones de un Bóxer 'boxean' (se acercan al PMS al mismo tiempo), cancelando perfectamente las fuerzas de inercia de primer orden sin contrapesos gigantes; el V a 180° tiene pistones que siguen la misma dirección.",
    "skill": "Cinemática de Motores Bóxer",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Arquitectura de Motores",
    "subtopic": "Diferencia entre Motor Bóxer y V a 180°"
  },
  {
    "id": "mec-uni-41",
    "sectionId": 1,
    "number": 41,
    "text": "En la fluidodinámica de la cámara de combustión, ¿cuál es la diferencia entre el movimiento de turbulencia del aire 'Swirl' y 'Tumble'?",
    "options": [
      "El Swirl es un movimiento de rotación organizado del aire alrededor del eje geométrico longitudinal del cilindro (vórtice horizontal); el Tumble es una rotación del flujo perpendicular al eje del cilindro (vórtice vertical)",
      "El Swirl ocurre en el escape y el Tumble en la batería",
      "El Tumble solo existe en motores eléctricos",
      "No existe diferencia física entre ambos flujos"
    ],
    "correctIndex": 0,
    "explanation": "El Swirl predomina en motores diésel para mezclar el gasóleo pulverizado; el Tumble se diseña en motores multiválvulas de gasolina donde al comprimirse el vórtice vertical colapsa en micro-turbulencia que acelera el frente de llama.",
    "skill": "Fluidodinámica de la Combustión",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Turbulencia en Cilindros",
    "subtopic": "Movimientos de Swirl, Tumble y Squish"
  },
  {
    "id": "mec-uni-42",
    "sectionId": 1,
    "number": 42,
    "text": "¿Qué es el efecto de turbulencia 'Squish' (o aplastamiento) generado al final de la carrera de compresión?",
    "options": [
      "El chorro de gas a alta velocidad expulsado hacia el centro de la cámara cuando la corona plana del pistón se acerca a escasas décimas de milímetro de las áreas planas de la culata cerca del PMS",
      "La compresión del combustible dentro del inyector",
      "El choque de la biela contra el contrapeso",
      "La deformación de la junta de culata por presión"
    ],
    "correctIndex": 0,
    "explanation": "El área de Squish aplasta la mezcla fresca lanzándola violentamente contra la bujía o precámara, homogeneizando la mezcla y reduciendo las zonas muertas periféricas propensas a detonar.",
    "skill": "Diseño de Cámaras de Combustión",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Dinámica de Combustión",
    "subtopic": "Efecto de Aplastamiento (Squish)"
  },
  {
    "id": "mec-uni-43",
    "sectionId": 1,
    "number": 43,
    "text": "¿Qué mecanismo cinético-químico 'Mecanismo Térmico de Zeldovich' describe la formación de óxidos de nitrógeno (NOx) durante la combustión?",
    "options": [
      "Reacciones de disociación a alta temperatura (>1600-1800 K) donde el oxígeno y nitrógeno diatómicos del aire atmosférico se rompen: N₂ + O ⇄ NO + N y N + O₂ ⇄ NO + O, con velocidad exponencial dependiente de la temperatura pico de llama",
      "La oxidación del azufre del aceite a baja temperatura",
      "La descomposición del vapor de agua en el escape",
      "La reacción del combustible con el cobre de las tuberías"
    ],
    "correctIndex": 0,
    "explanation": "Formulado por Yakov Zeldovich, demuestra que la producción de NO es fuertemente no lineal con la temperatura; de ahí que reducir la temperatura pico apenas 100 °C con EGR reduzca las emisiones de NOx a la mitad.",
    "skill": "Cinética Química de Emisiones",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Formación de Contaminantes",
    "subtopic": "Mecanismo Térmico de Zeldovich para NOx"
  },
  {
    "id": "mec-uni-44",
    "sectionId": 1,
    "number": 44,
    "text": "¿Cuál es el 'Compromiso o Trade-off entre Hollín (PM) y NOx' (Soot-NOx Trade-off) clásico en la calibración de motores diésel?",
    "options": [
      "Estrategias para reducir la temperatura de combustión (como alta tasa de EGR) bajan eficazmente los NOx, pero aumentan drásticamente las partículas de hollín (PM); y viceversa, combustión a alta temperatura quema el hollín pero dispara los NOx",
      "Aumentar el hollín reduce el consumo de combustible a cero",
      "El hollín y los NOx no pueden existir en el mismo motor",
      "Es una relación directa donde ambos siempre suben o bajan juntos"
    ],
    "correctIndex": 0,
    "explanation": "Es el dilema histórico de la ingeniería diésel; se resuelve en motores modernos mediante inyección common rail ultra-precisa a 2500 bar combinada con sistemas de postratamiento duales: DPF (para hollín) y SCR (para NOx).",
    "skill": "Estrategias de Calibración de Emisiones",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Curva Trade-Off de Emisiones",
    "subtopic": "Compromiso Soot vs NOx en Motores Diésel"
  },
  {
    "id": "mec-uni-45",
    "sectionId": 1,
    "number": 45,
    "text": "¿Cómo promueve la combustión de 'Carga Estratificada' (Stratified Charge) en motores de inyección directa de gasolina (GDI) el ahorro de combustible en regímenes de carga parcial?",
    "options": [
      "Inyecta una nube de mezcla estequiométrica rica justo alrededor de los electrodos de la bujía en el momento del encendido, mientras el resto de la cámara de combustión está llena de aire puro y gases residuales con Lambda global ultra-pobre (λ = 2.0 a 3.0)",
      "Quema el combustible en tres cámaras separadas",
      "Inyecta agua sobre el pistón",
      "Apaga dos cilindros mecánicamente"
    ],
    "correctIndex": 0,
    "explanation": "Permite trabajar sin mariposa de estrangulamiento (eliminando pérdidas de bombeo) con una economía de combustible cercana a la de un motor diésel, aunque exige catalizadores acumuladores de NOx (LNT).",
    "skill": "Modos de Inyección GDI Avanzados",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Inyección Directa GDI",
    "subtopic": "Combustión Homogénea vs Estratificada"
  },
  {
    "id": "mec-uni-46",
    "sectionId": 1,
    "number": 46,
    "text": "¿Qué es el 'Efecto Knock' (Detonación) medido mediante la velocidad de propagación del frente de llama en la cámara de combustión?",
    "options": [
      "En deflagración normal el frente de llama avanza a velocidad subsónica de 20 a 50 m/s; en detonación, la mezcla autoignita a velocidad supersónica (>1.000 a 2.000 m/s) generando ondas de choque hiperbólicas de choque destructivo",
      "La llama se apaga antes de quemar la gasolina",
      "La velocidad de la llama es de 1 metro por hora",
      "La combustión ocurre en el tubo de escape"
    ],
    "correctIndex": 0,
    "explanation": "El choque supersónico rompe la capa límite térmica aislante de los gases en las paredes del cilindro, provocando una transferencia de calor abrasadora que funde pistones y válvulas en segundos.",
    "skill": "Física de la Combustión",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Fenomenología de la Detonación",
    "subtopic": "Deflagración vs Detonación Supersónica"
  },
  {
    "id": "mec-uni-47",
    "sectionId": 1,
    "number": 47,
    "text": "¿Cuál es la función del catalizador trampa acumulador de óxidos de nitrógeno (LNT - Lean NOx Trap / DeNOx)?",
    "options": [
      "Almacenar químicamente moléculas de NOx en forma de nitratos de bario (Ba(NO3)2) durante fases de marcha con mezcla pobre (λ > 1); periódicamente la ECU enriquece la mezcla a λ < 1 durante 2 segundos para regenerar la trampa y reducir el NOx a nitrógeno N₂",
      "Filtrar el aceite del motor",
      "Almacenar hidrógeno en tanques criogénicos",
      "Enfriar el refrigerante en carretera"
    ],
    "correctIndex": 0,
    "explanation": "El catalizador LNT almacena NOx cuando el motor opera en carga estratificada pobre y se regenera con un pulso rico desorbiendo el nitrógeno de forma imperceptible para el conductor.",
    "skill": "Catálisis de Reducción de Emisiones",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Sistemas DeNOx",
    "subtopic": "Trampa Acumuladora de NOx (LNT)"
  },
  {
    "id": "mec-uni-48",
    "sectionId": 1,
    "number": 48,
    "text": "¿Qué mecanismo de 'Envenenamiento del Catalizador' (Catalyst Poisoning) inutiliza permanentemente el convertidor catalítico?",
    "options": [
      "La presencia de plomo, fósforo (proveniente de aditivos antidesgaste ZDDP del aceite de motor quemado) o silicio que se adhieren químicamente a los sitios activos de platino/paladio bloqueando las reacciones catalíticas",
      "Lavar el automóvil con champú",
      "Usar gasolina de 98 octanos",
      "Conducir bajo la lluvia"
    ],
    "correctIndex": 0,
    "explanation": "Los átomos pesados forman enlaces permanentes con los metales preciosos inactivando la superficie catalítica; por ello se eliminó el plomo de las gasolinas y se limita el fósforo en aceites modernos.",
    "skill": "Degradación de Catalizadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Química del Catalizador",
    "subtopic": "Envenenamiento por Plomo, Fósforo y Azufre"
  },
  {
    "id": "mec-uni-49",
    "sectionId": 1,
    "number": 49,
    "text": "¿Cómo se define el 'Calor Específico a Presión Constante' (Cp) y a 'Volumen Constante' (Cv) en el análisis termodinámico de gases de combustión?",
    "options": [
      "Cp es la cantidad de calor necesaria para elevar un grado la temperatura de un gas a presión constante permitiendo su expansión; Cv es a volumen constante sin trabajo de expansión. Su cociente γ = Cp / Cv disminuye a altas temperaturas reduciendo la eficiencia teórica",
      "Son constantes invariables que valen exactamente 1.0 en todo el universo",
      "Son parámetros que solo aplican a metales sólidos",
      "Cp mide el calor del radiador y Cv el calor del escape"
    ],
    "correctIndex": 0,
    "explanation": "A temperaturas superiores a 1500 K las moléculas de gas excitan modos vibracionales internos absorbiendo calor; el valor de γ cae de 1.40 a ~1.28, disminuyendo la presión pico alcanzable en la combustión real.",
    "skill": "Termodinámica de Gases Reales",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Propiedades Termodinámicas",
    "subtopic": "Variación del Coeficiente Adiabático Gamma con la Temperatura"
  },
  {
    "id": "mec-uni-50",
    "sectionId": 1,
    "number": 50,
    "text": "¿Cuál es el concepto de 'Disponibilidad de Energía' (Exergía) aplicado al motor de combustión interna?",
    "options": [
      "La fracción máxima de la energía térmica total del combustible que es teóricamente transformable en trabajo mecánico útil en relación con el ambiente circundante de referencia (dead state)",
      "La cantidad de combustible que queda en el tanque",
      "La velocidad a la que se puede encender la radio",
      "El número de marchas de la caja de cambios"
    ],
    "correctIndex": 0,
    "explanation": "El análisis exergético revela la verdadera destrucción de calidad energética (anergía e irreversibilidades) provocada por la combustión y la transferencia de calor a saltos térmicos finitos.",
    "skill": "Análisis Exergético de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Exergía y Segunda Ley",
    "subtopic": "Destrucción de Exergía en la Combustión"
  },
  {
    "id": "mec-uni-51",
    "sectionId": 1,
    "number": 51,
    "text": "¿Cuál es la máquina eléctrica de tracción más empleada en vehículos eléctricos modernos de alta eficiencia (como Tesla Model 3 tracción trasera, Nissan Leaf, Porsche Taycan)?",
    "options": [
      "Motor Síncrono de Imanes Permanentes Interiores (IPMSM - Interior Permanent Magnet Synchronous Motor)",
      "Motor de corriente continua con escobillas y delgas",
      "Motor paso a paso unipolar",
      "Motor universal de aspiradora"
    ],
    "correctIndex": 0,
    "explanation": "Los motores IPMSM alojan imanes de neodimio enterrados en el rotor; combinan el par magnético de los imanes con un elevado par de reluctancia magnética, logrando un rango extendido de debilitamiento de campo y rendimientos del 96-97%.",
    "skill": "Máquinas Eléctricas de Tracción",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Motores para Vehículos Eléctricos",
    "subtopic": "Motor Síncrono IPMSM"
  },
  {
    "id": "mec-uni-52",
    "sectionId": 1,
    "number": 52,
    "text": "En el control vectorial de motores síncronos 'FOC' (Field-Oriented Control o Control de Campo Orientado), ¿qué transformaciones matemáticas desacoplan las corrientes de estator?",
    "options": [
      "La Transformada de Clarke (proyecta el sistema trifásico abc al sistema bifásico estacionario α-β) y la Transformada de Park (proyecta el sistema α-β al marco rotatorio d-q alineado con el flujo del rotor)",
      "La Transformada Rápida de Fourier (FFT)",
      "La Transformada de Laplace para ecuaciones diferenciales",
      "La transformada z para filtros digitales IIR"
    ],
    "correctIndex": 0,
    "explanation": "La transformada de Park desacopla el motor síncrono AC haciéndolo gobernable como un motor DC independiente: la corriente del eje directo (Id) controla el flujo magnético y la del eje en cuadratura (Iq) controla el par motor útil.",
    "skill": "Control de Accionamientos Eléctricos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Control Vectorial FOC",
    "subtopic": "Transformadas de Clarke y Park (Marco d-q)"
  },
  {
    "id": "mec-uni-53",
    "sectionId": 1,
    "number": 53,
    "text": "¿Qué técnica de control 'Debilitamiento de Campo' (Field Weakening) permite a un motor síncrono de imanes permanentes girar a velocidades superiores a su velocidad nominal?",
    "options": [
      "Inyectar una corriente negativa en el eje directo (Id < 0) para generar un campo magnético del estator opuesto al campo de los imanes permanentes, reduciendo la fuerza contraelectromotriz (BEMF) para que no supere la tensión del inversor",
      "Apagar los semiconductores del inversor",
      "Desconectar la batería de alta tensión a alta velocidad",
      "Aumentar la resistencia del rotor con calor"
    ],
    "correctIndex": 0,
    "explanation": "A altas RPM la fuerza contraelectromotriz inducida iguala el voltaje de la batería imposibilitando meter más corriente; debilitar el campo permite seguir acelerando en la zona de potencia constante a costa de sacrificar algo de par.",
    "skill": "Control Avanzado de Tracción Eléctrica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Debilitamiento de Campo",
    "subtopic": "Control de Eje Directo (Id Negativo) y BEMF"
  },
  {
    "id": "mec-uni-54",
    "sectionId": 1,
    "number": 54,
    "text": "¿Cuál es la ventaja de la modulación 'SVPWM' (Space Vector Pulse Width Modulation) frente a la modulación senoidal tradicional SPWM en inversores trifásicos de tracción?",
    "options": [
      "Aprovecha un 15.5% más la tensión del bus de continua (DC-link voltage) sin entrar en sobremodulación (factor de utilización Vdc / √3) y reduce significativamente la distorsión armónica total (THD)",
      "Permite usar cables de cobre más delgados sin aislar",
      "Elimina la necesidad de transistores IGBT",
      "Hace que el motor funcione con dos fases"
    ],
    "correctIndex": 0,
    "explanation": "SVPWM trata al inversor como un vector espacial que conmuta entre 8 estados discretos (6 activos y 2 nulos), optimizando la conmutación y maximizando el par disponible en la máquina.",
    "skill": "Electrónica de Potencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Modulación de Inversores",
    "subtopic": "Modulación por Vector Espacial (SVPWM)"
  },
  {
    "id": "mec-uni-55",
    "sectionId": 1,
    "number": 55,
    "text": "¿Qué ventaja presenta un Motor de Inducción o Asíncrono (ACIM con rotor en jaula de ardilla de cobre) utilizado en el eje secundario de vehículos eléctricos?",
    "options": [
      "No utiliza tierras raras (neodimio/disprosio) y no tiene pérdidas por arrastre magnético en vacío cuando el inversor se apaga (cero par resistente al rodar por inercia o crucero), permitiendo desacople electrónico total",
      "Rendimiento del 100% a cualquier velocidad",
      "No produce calor bajo ninguna circunstancia",
      "Funciona directamente con corriente continua sin inversor"
    ],
    "correctIndex": 0,
    "explanation": "Al no tener imanes permanentes en el rotor, cortar la corriente del estator anula instantáneamente el campo; no hay pérdidas por corrientes parásitas en giro libre, haciéndolo ideal para el eje no motriz de vehículos 4WD.",
    "skill": "Comparativa de Motores Eléctricos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Motores de Inducción vs Síncronos",
    "subtopic": "Desacople Electrónico y Cero Pérdidas en Vacío"
  },
  {
    "id": "mec-uni-56",
    "sectionId": 1,
    "number": 56,
    "text": "¿Por qué los nuevos inversores de potencia de vehículos eléctricos de 800V utilizan semiconductores de 'Carburo de Silicio' (SiC MOSFET) en lugar de silicio convencional (IGBT)?",
    "options": [
      "Poseen una banda prohibida ancha (Wide Bandgap), soportan mayores voltajes y temperaturas críticas, y conmutan a frecuencias órdenes de magnitud más altas con pérdidas de conmutación drásticamente menores, elevando la eficiencia al 99%",
      "Son superconductores a temperatura ambiente",
      "Cuestan diez veces menos que el silicio común",
      "Permiten prescindir del radiador de refrigeración"
    ],
    "correctIndex": 0,
    "explanation": "La tecnología SiC reduce las pérdidas de conmutación en más del 70%, permitiendo arquitecturas ultrarrápidas de 800V con recargas de 350 kW y menor volumen de disipadores.",
    "skill": "Semiconductores de Banda Prohibida Ancha",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Tecnología de Inversores SiC",
    "subtopic": "Carburo de Silicio (SiC) vs Silicio IGBT"
  },
  {
    "id": "mec-uni-57",
    "sectionId": 1,
    "number": 57,
    "text": "¿Qué sensor angular 'Resolver' (o encoder óptico absoluto) se acopla al eje del rotor del motor de tracción eléctrico?",
    "options": [
      "Un transformador rotatorio analógico robusto que entrega señales senoidales y cosenoidales moduladas en amplitud cuya relación trigonométrica (arcotangente) proporciona la posición angular absoluta del rotor a la microsegunda",
      "Un sensor magnético para medir la velocidad de las ruedas",
      "Un potenciómetro mecánico de carbón",
      "Un velocímetro accionado por cable"
    ],
    "correctIndex": 0,
    "explanation": "El control vectorial FOC requiere conocer la posición angular exacta del flujo magnético del rotor en todo instante; el Resolver es inmune a vibraciones, aceites y altas temperaturas del motor eléctrico.",
    "skill": "Sensores de Posición de Rotor",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Sensores de Motores Eléctricos",
    "subtopic": "Resolver Rotatorio para Control FOC"
  },
  {
    "id": "mec-uni-58",
    "sectionId": 1,
    "number": 58,
    "text": "¿Cómo gestiona térmicamente la batería de tracción de un vehículo eléctrico una 'Bomba de Calor con Válvula de Expansión Electrónica Octovalve' (o manifold integrado)?",
    "options": [
      "Canaliza de forma inteligente y reversible el calor residual de los motores eléctricos, inversores y batería para calentar el habitáculo en invierno o acondicionar la batería antes de una recarga rápida (preacondicionamiento térmico)",
      "Quema gasolina auxiliar en una caldera",
      "Utiliza resistencias incandescentes que descargan la batería",
      "Abre las ventanillas del vehículo automáticamente"
    ],
    "correctIndex": 0,
    "explanation": "La bomba de calor termodinámica tiene un COP de 2.5 a 4.0 (por cada kW eléctrico entrega hasta 4 kW térmicos), ahorrando hasta un 30% de autonomía en invierno comparada con resistencias PTC resistivas puras.",
    "skill": "Gestión Térmica Integrada en EV",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Termodinámica de Vehículos Eléctricos",
    "subtopic": "Bomba de Calor y Preacondicionamiento de Batería"
  },
  {
    "id": "mec-uni-59",
    "sectionId": 1,
    "number": 59,
    "text": "¿Qué es el 'Efecto Torque Ripple' (rizado de par) en un motor síncrono de imanes permanentes y cómo se reduce en el diseño electromagnético?",
    "options": [
      "Oscilaciones periódicas no deseadas en el par instantáneo causadas por la interacción entre los armónicos espaciales del bobinado y los imanes (par de cogging); se reduce sesgando los imanes o ranuras del estator (skewing) y modelado por elementos finitos (FEA)",
      "La vibración de los neumáticos a alta velocidad",
      "El retraso en la aceleración por cable de acelerador largo",
      "La caída de tensión en los bornes de la batería"
    ],
    "correctIndex": 0,
    "explanation": "El skewing (inclinación helicoidal del paquete de láminas del rotor) promedia la fuerza de cogging a lo largo del eje, eliminando vibraciones acústicas y asegurando aceleraciones ultra-suaves a baja velocidad.",
    "skill": "Diseño Electromagnético de Máquinas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Vibraciones Electromagnéticas",
    "subtopic": "Torque Ripple y Cogging Torque en IPMSM"
  },
  {
    "id": "mec-uni-60",
    "sectionId": 1,
    "number": 60,
    "text": "¿Cuál es la función del 'Convertidor Reductor / Elevador Bidireccional' (Bidirectional Buck-Boost DC-DC) en el sistema híbrido THS (Toyota Hybrid System)?",
    "options": [
      "Elevar dinámicamente la tensión nominal de la batería (de ~201V a ~650V DC) antes de alimentar el inversor para reducir la corriente y las pérdidas I²R en bobinados, y permitir transferir potencia en ambos sentidos (tracción y regeneración)",
      "Reducir la tensión a 1.5V para alimentar la radio",
      "Cargar la batería de 12V exclusivamente",
      "Evaporar el gasóleo en el depósito"
    ],
    "correctIndex": 0,
    "explanation": "Elevar la tensión a 650V reduce la corriente necesaria para la misma potencia mecánica (P = V * I); menores amperios significan cables de cobre mucho más ligeros y transistores de inversor más pequeños y eficientes.",
    "skill": "Arquitectura Electrónica Híbrida",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Convertidores DC-DC de Alta Potencia",
    "subtopic": "Elevador de Tensión Boost Converter a 650V"
  },
  {
    "id": "mec-uni-61",
    "sectionId": 1,
    "number": 61,
    "text": "En la electroquímica de baterías de ión-litio de tracción, ¿cuál es la diferencia principal de características entre la química 'NMC' (Níquel-Manganeso-Cobalto) y la química 'LFP' (Fosfato de Hierro y Litio / LiFePO4)?",
    "options": [
      "NMC ofrece mayor densidad energética volumétrica y gravimétrica (mayor autonomía por kg); LFP ofrece mayor estabilidad térmica intrínseca (menor riesgo de fuga térmica), ciclo de vida superior (miles de ciclos) y admite recargas continuas al 100% sin degradarse rápidamente",
      "LFP solo funciona con corriente alterna",
      "NMC es un combustible líquido biodegradable",
      "LFP no utiliza litio en sus electrodos"
    ],
    "correctIndex": 0,
    "explanation": "LFP utiliza un enlace covalente fósforo-oxígeno fuertemente estable que no libera oxígeno gaseoso al calentarse; su curva de voltaje es extremadamente plana, exigiendo al BMS integración coulombimétrica para estimar el SOC.",
    "skill": "Química de Celdas de Litio",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Baterías de Tracción",
    "subtopic": "Química NMC vs LFP"
  },
  {
    "id": "mec-uni-62",
    "sectionId": 1,
    "number": 62,
    "text": "¿Qué fenómeno electroquímico 'Crecimiento de la Capa SEI' (Solid Electrolyte Interphase) es una de las principales causas de degradación y pérdida de capacidad irreversible en baterías de litio?",
    "options": [
      "La descomposición del electrolito líquido orgánico en la superficie del ánodo de grafito durante los ciclos de carga/descarga, consumiendo iones de litio activos de forma permanente y engrosando la resistencia interna de la celda",
      "La evaporación del agua destilada de la batería",
      "El desprendimiento de los terminales de cobre por oxidación",
      "La congelación del cátodo de níquel"
    ],
    "correctIndex": 0,
    "explanation": "La formación inicial de la SEI es necesaria para estabilizar el ánodo, pero su engrosamiento continuo con el tiempo y las altas temperaturas 'secuestra' litio ciclable reduciendo la capacidad neta de la batería (aging).",
    "skill": "Degradación Electroquímica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Envejecimiento de Baterías de Litio",
    "subtopic": "Capa Pasivante SEI y Pérdida de Litio Ciclable"
  },
  {
    "id": "mec-uni-63",
    "sectionId": 1,
    "number": 63,
    "text": "¿Qué riesgo electroquímico 'Deposición de Litio Metálico' (Lithium Plating) ocurre al recargar una batería de ión-litio con corrientes excesivamente altas a bajas temperaturas (< 0 °C)?",
    "options": [
      "Los iones de litio no pueden intercalarse a tiempo en la estructura cristalina del grafito del ánodo y se depositan como litio metálico puro sobre la superficie, formando dendritas que pueden perforar el separador microporoso causando un cortocircuito interno y fuego",
      "La batería se congela y se rompe la carcasa plástica",
      "El motor de arranque se acelera al doble",
      "La corriente fluye en sentido inverso al enchufe"
    ],
    "correctIndex": 0,
    "explanation": "Por ello el BMS moderno precalienta la batería con refrigerante líquido a >20-25 °C antes de autorizar recargas rápidas en corriente continua (DC Fast Charging), limitando la potencia si la celda está fría.",
    "skill": "Seguridad y Carga Rápida de Litio",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Carga Rápida y Límites Electroquímicos",
    "subtopic": "Formación de Dendritas de Litio (Lithium Plating)"
  },
  {
    "id": "mec-uni-64",
    "sectionId": 1,
    "number": 64,
    "text": "En el modelado matemático de baterías en el software del BMS, ¿qué circuito eléctrico equivalente 'Modelo de Randles' (o modelo Thevenin de orden n) representa el comportamiento dinámico de la celda?",
    "options": [
      "Una fuente de tensión de circuito abierto (OCV) en serie con una resistencia óhmica interna (R0) y una o más ramas paralelas resistencia-condensador (RC) que modelan la polarización por transferencia de carga y difusión de iones",
      "Una bobina de choque con un relé mecánico",
      "Un transformador trifásico con diodos zener",
      "Un condensador electrolítico puro sin resistencias"
    ],
    "correctIndex": 0,
    "explanation": "Los lazos RC capturan la relajación de voltaje tras una aceleración brusca o frenada regenerativa, permitiendo a los algoritmos de Filtro de Kalman Extendido (EKF) estimar el SOC y SOH con precisión del 1%.",
    "skill": "Modelado Matemático de Baterías",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Algoritmos de Gestión de Baterías (BMS)",
    "subtopic": "Circuito Equivalente de Randles y Filtro de Kalman"
  },
  {
    "id": "mec-uni-65",
    "sectionId": 1,
    "number": 65,
    "text": "¿Cómo estima el algoritmo de un BMS moderno el 'Estado de Carga' (SOC - State of Charge) en una batería LFP cuya curva de voltaje en circuito abierto (OCV) es casi horizontal y constante en el 80% de su rango?",
    "options": [
      "Mediante la combinación de conteo de culombios (Coulomb Counting por integración matemática de la corriente precisa del sensor Shunt) corregido continuamente mediante algoritmos adaptativos de Filtro de Kalman Extendido (EKF)",
      "Midiendo únicamente el voltaje estático con un voltímetro común",
      "Pesando la batería con celdas de carga",
      "Calculando la temperatura exterior de la carrocería"
    ],
    "correctIndex": 0,
    "explanation": "El voltaje de LFP varía apenas unos milivoltios entre el 20% y el 80% de carga; el seguimiento continuo de corriente (Ah) y modelos de impedancia en EKF son indispensables para no dar lecturas erróneas al conductor.",
    "skill": "Algoritmos de Estimación de SOC",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Gestión de Baterías LFP",
    "subtopic": "Integración Coulombimétrica y Filtro de Kalman EKF"
  },
  {
    "id": "mec-uni-66",
    "sectionId": 1,
    "number": 66,
    "text": "¿Qué arquitectura física de ensamblaje de batería 'Cell-to-Pack' (CTP) o 'Cell-to-Chassis' (CTC) elimina los módulos intermedios tradicionales?",
    "options": [
      "Las celdas de gran formato (tipo prismatic o blade) se integran directamente dentro de la carcasa estructural de la batería o del chasis del vehículo, aumentando la densidad energética a nivel de pack en más de un 20-30% y reduciendo peso y piezas",
      "Las celdas van sueltas dentro del maletero del vehículo",
      "Las celdas van atadas con cintas de plástico a los amortiguadores",
      "Se elimina el refrigerante para que las celdas pesen menos"
    ],
    "correctIndex": 0,
    "explanation": "Pionera en tecnologías como BYD Blade y Tesla 4680 Structural Pack: prescindir de bastidores de módulo, mazos de cableado intermedios y tornillería optimiza el aprovechamiento volumétrico del paquete.",
    "skill": "Estructuras de Empaquetamiento de Baterías",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Arquitectura Estructural de Baterías",
    "subtopic": "Tecnología Cell-to-Pack (CTP) y Cell-to-Chassis (CTC)"
  },
  {
    "id": "mec-uni-67",
    "sectionId": 1,
    "number": 67,
    "text": "¿Qué función cumple la 'Válvula de Desgasificación o Ventilación de Seguridad' (Pressure Relief Vent) en cada celda individual de una batería de litio?",
    "options": [
      "Una membrana o disco de ruptura calibrado que se abre mecánicamente ante un exceso de presión interna para evacuar los gases de descomposición de forma dirigida y segura antes de que la carcasa metálica explote violentamente",
      "Permitir la entrada de aire fresco a la celda",
      "Rellenar de electrolito líquido la celda",
      "Medir la corriente de salida con un manómetro"
    ],
    "correctIndex": 0,
    "explanation": "Ante sobrecarga o fallo interno, los gases acumulados liberan presión a través del vent hacia canales de evacuación ignífugos del pack evitando la fragmentación por explosión de la celda.",
    "skill": "Mecanismos de Seguridad Pasiva de Celdas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Seguridad de Celdas de Litio",
    "subtopic": "Válvulas de Alivio de Presión (Burst Disc / Vent)"
  },
  {
    "id": "mec-uni-68",
    "sectionId": 1,
    "number": 68,
    "text": "¿Cuál es el propósito del material de cambio de fase (PCM) o aerogeles de sílice intercalados entre celdas en packs de baterías avanzados?",
    "options": [
      "Actuar como barreras de aislamiento térmico e ignífugas para evitar la propagación térmica de una celda en fuga térmica hacia las celdas adyacentes (Thermal Propagation Prevention)",
      "Aumentar el peso de la batería para mayor inercia",
      "Conducir la electricidad entre bornes",
      "Hacer que las celdas brillen en la oscuridad"
    ],
    "correctIndex": 0,
    "explanation": "La norma UN ECE R100 exige que si una celda colapsa en Thermal Runaway, el fuego no debe propagarse a las vecinas durante al menos 5 minutos, permitiendo la evacuación segura de los ocupantes.",
    "skill": "Mitigación de Fuga Térmica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Prevención de Propagación Térmica",
    "subtopic": "Aislamiento Térmico Inter-Celda y Aerogeles"
  },
  {
    "id": "mec-uni-69",
    "sectionId": 1,
    "number": 69,
    "text": "¿Cómo mide el sensor Shunt de precisión miliohmica instalado en el borne negativo de la batería de alta tensión la corriente de tracción de hasta ±1000 Amperios?",
    "options": [
      "Midiendo la microcaída de tensión con resolución de microvoltios a través de una barra de aleación de Manganina de resistencia extremadamente baja y con coeficiente térmico casi nulo (evitando derivas térmicas)",
      "Contando los electrones con un sensor óptico",
      "Midiendo el calor irradiado por los cables",
      "Calculando la velocidad de giro de las ruedas"
    ],
    "correctIndex": 0,
    "explanation": "La manganina mantiene su valor óhmico inalterado entre -40 °C y +100 °C; la electrónica de medición aislada digitaliza la caída mV y calcula la corriente con error inferior al 0.1%.",
    "skill": "Sensores de Corriente de Precisión",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Sensores del BMS",
    "subtopic": "Shunt de Manganina para Medición de Corriente"
  },
  {
    "id": "mec-uni-70",
    "sectionId": 1,
    "number": 70,
    "text": "¿Qué es el 'Estado de Potencia' (SOP - State of Power) calculado por el BMS en tiempo real?",
    "options": [
      "La potencia máxima en kilovatios (kW) que la batería puede entregar en descarga (para acelerar) o absorber en carga (frenada regenerativa) durante un intervalo corto (ej. 2s, 10s o 30s) sin violar los límites de tensión, corriente y temperatura de las celdas",
      "La potencia de los altavoces de audio",
      "El número de caballos de fuerza del motor diésel",
      "La velocidad máxima de subida de las ventanillas"
    ],
    "correctIndex": 0,
    "explanation": "El inversor consulta el SOP antes de demandar par: si la batería está fría o casi descargada, el BMS recorta el límite de SOP para proteger las celdas de caídas excesivas de voltaje.",
    "skill": "Límites Dinámicos de Potencia en EV",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Gestión de Potencia del BMS",
    "subtopic": "Cálculo de Estado de Potencia (SOP)"
  },
  {
    "id": "mec-uni-71",
    "sectionId": 1,
    "number": 71,
    "text": "¿Qué ventaja tecnológica introduce el protocolo de comunicación 'CAN FD' (Flexible Data-rate) frente al estándar CAN 2.0B tradicional?",
    "options": [
      "Permite cambiar a una velocidad de bits mucho más alta (de hasta 5 u 8 Mbps) durante la transmisión del campo de datos (payload) y amplía la carga útil máxima por trama de 8 bytes a 64 bytes",
      "Elimina los cables físicos utilizando radiofrecuencia Bluetooth",
      "Solo admite transmisiones de audio analógico",
      "Funciona exclusivamente con computadoras cuánticas"
    ],
    "correctIndex": 0,
    "explanation": "CAN FD conserva el arbitraje por colisión no destructivo a 500 kbps (fase de arbitraje), pero una vez ganado el bus, acelera el reloj en la fase de datos enviando hasta 64 bytes en una fracción de tiempo.",
    "skill": "Protocolos de Red Vehicular Avanzados",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Bus CAN FD",
    "subtopic": "CAN FD: Velocidad Flexible y Payload de 64 Bytes"
  },
  {
    "id": "mec-uni-72",
    "sectionId": 1,
    "number": 72,
    "text": "¿Qué estándar de capa física de 'Ethernet Automotriz' (100BASE-T1 / IEEE 802.3bw) permite velocidades de 100 Mbps en vehículos modernos?",
    "options": [
      "Transmisión Full-Duplex bidireccional simultánea sobre un único par trenzado de cobre no blindado (UTP - Single Twisted Pair) con cancelación de eco híbrida, reduciendo drásticamente el peso del mazo de cables",
      "Cables coaxiales gruesos de televisión de 75 ohmios",
      "Cables de 8 hilos RJ-45 de oficina convencionales",
      "Tuberías de fibra óptica de cuarzo militar"
    ],
    "correctIndex": 0,
    "explanation": "100BASE-T1 utiliza modulación PAM3 y un circuito híbrido de cancelación de eco; ambos nodos transmiten y reciben simultáneamente por los mismos 2 hilos sin blindaje, ahorrando un 30% de peso frente a cables Ethernet de oficina.",
    "skill": "Ethernet Automotriz de Capa Física",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Automotive Ethernet",
    "subtopic": "Estándar 100BASE-T1 y Par Trenzado Único"
  },
  {
    "id": "mec-uni-73",
    "sectionId": 1,
    "number": 73,
    "text": "¿Cuál es el paradigma de diseño en la nueva 'Arquitectura Zonal' de vehículos definidos por software (SDV) frente a la arquitectura de dominio tradicional?",
    "options": [
      "Agrupar los controladores de entrada/salida físicamente por ubicación geográfica en el vehículo (Zonal Controllers: frontal, trasero, izquierdo, derecho) interconectados por un backbone de Ethernet de alta velocidad a computadoras centrales de alto rendimiento (HPC), eliminando kilómetros de mazos de cables punto a punto",
      "Colocar todas las computadoras en el techo del automóvil",
      "Tener una computadora independiente para cada bombilla del coche",
      "Eliminar el software y volver a carburadores mecánicos"
    ],
    "correctIndex": 0,
    "explanation": "La arquitectura zonal desacopla la ubicación física del sensor/actuador de la lógica del software: los controladores de zona empaquetan los datos locales en tramas Ethernet hacia el ordenador central (Central Compute), ahorrando hasta 50 kg de cobre.",
    "skill": "Arquitectura Electrónica Zonal",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Vehículo Definido por Software (SDV)",
    "subtopic": "Arquitectura Zonal y Computación Centralizada"
  },
  {
    "id": "mec-uni-74",
    "sectionId": 1,
    "number": 74,
    "text": "¿Qué es el estándar de arquitectura de software abierta 'AUTOSAR' (Automotive Open System Architecture) en la industria automotriz?",
    "options": [
      "Un estándar global que desacopla el software de aplicación de las funciones del hardware del microcontrolador mediante una capa intermedia estandarizada (BSW - Basic Software y RTE - Runtime Environment), facilitando la reutilización e interoperabilidad de módulos de software",
      "Un sistema operativo exclusivo para teléfonos móviles de conductores",
      "Una norma para fabricar neumáticos de caucho sintético",
      "Un protocolo para sintonizar radios satelitales"
    ],
    "correctIndex": 0,
    "explanation": "AUTOSAR permite que un algoritmo de control de crucero adaptativo programado como Software Component (SWC) pueda migrarse de un microcontrolador Renesas a uno NXP o Infineon sin reescribir una sola línea de lógica.",
    "skill": "Estándar de Software Automotriz AUTOSAR",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Arquitectura AUTOSAR",
    "subtopic": "Capas BSW, RTE y Componentes de Software (SWC)"
  },
  {
    "id": "mec-uni-75",
    "sectionId": 1,
    "number": 75,
    "text": "¿Qué diferencia principal existe entre 'AUTOSAR Classic' y 'AUTOSAR Adaptive'?",
    "options": [
      "AUTOSAR Classic está diseñado para microcontroladores con estrictos requisitos de tiempo real duro y seguridad funcional (ASIL D); AUTOSAR Adaptive está basado en sistemas operativos POSIX (Linux/QNX) y arquitecturas orientadas a servicios (SOME/IP) para conducción autónoma y computación de alto rendimiento",
      "Adaptive solo funciona con motores de gasolina y Classic con eléctricos",
      "Classic es para motocicletas y Adaptive para camiones",
      "No existe ninguna diferencia arquitectónica"
    ],
    "correctIndex": 0,
    "explanation": "Classic se compila estáticamente para microcontroladores de 32 bits de bajo consumo (control de motor, frenos); Adaptive permite actualización de software en caliente (OTA), carga dinámica de aplicaciones y aprendizaje automático en microprocesadores multinúcleo.",
    "skill": "Evolución de Plataformas de Software Vehicular",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "AUTOSAR Classic vs Adaptive",
    "subtopic": "Arquitectura Orientada a Servicios y POSIX"
  },
  {
    "id": "mec-uni-76",
    "sectionId": 1,
    "number": 76,
    "text": "¿Qué protocolo de comunicación 'SOME/IP' (Scalable service-Oriented MiddlewarE over IP) se utiliza sobre Ethernet automotriz?",
    "options": [
      "Un middleware orientado a servicios que implementa patrones de invocación a procedimientos remotos (RPC) y publicación/suscripción (Publish/Subscribe) optimizado para sistemas embebidos de automoción",
      "Un protocolo para descargar archivos MP3 a la radio",
      "Un sistema de cifrado para teléfonos móviles",
      "Un comando para reiniciar el velocímetro"
    ],
    "correctIndex": 0,
    "explanation": "SOME/IP serializa estructuras de datos complejas sobre UDP/TCP en Ethernet, permitiendo a las cámaras de visión y radares publicar flujos de datos a los cuales cualquier nodo interesado se suscribe dinámicamente.",
    "skill": "Middleware Orientado a Servicios",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Protocolo SOME/IP",
    "subtopic": "Comunicaciones Service-Oriented sobre Ethernet"
  },
  {
    "id": "mec-uni-77",
    "sectionId": 1,
    "number": 77,
    "text": "¿Qué norma de Seguridad Funcional 'ISO 26262' gobierna el desarrollo de sistemas eléctricos y electrónicos en vehículos de carretera?",
    "options": [
      "Una norma internacional que establece el ciclo de vida de seguridad para mitigar riesgos sistemáticos y aleatorios de hardware, clasificando las funciones según niveles de integridad de seguridad automotriz (ASIL A, B, C y D)",
      "Una norma para medir la emisión de dióxido de carbono",
      "Un reglamento sobre el color de los cinturones de seguridad",
      "Una ley sobre la venta de piezas de desguace"
    ],
    "correctIndex": 0,
    "explanation": "ASIL D es el nivel más riguroso (ej. dirección asistida eléctrica o frenado autónomo donde un fallo pondría vidas humanas en peligro inminente), exigiendo arquitecturas redundantes, análisis FMEA/FMEDA y diagnósticos de cobertura >99%.",
    "skill": "Seguridad Funcional Automotriz",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Norma ISO 26262",
    "subtopic": "Niveles de Integridad de Seguridad (ASIL A - ASIL D)"
  },
  {
    "id": "mec-uni-78",
    "sectionId": 1,
    "number": 78,
    "text": "¿Qué ciberataque de bus automotriz explota la falta nativa de autenticación y cifrado en el protocolo CAN tradicional?",
    "options": [
      "Ataques de inyección de tramas de spoofing (falsificación de mensajes) y ataques de denegación de servicio (DoS) inundando el bus con tramas con identificador de máxima prioridad (ID 0x000)",
      "Ataques de corte físico de cables de bujías",
      "Ataques de desmagnetización de los imanes del motor",
      "Ataques térmicos quemando los fusibles con fuego"
    ],
    "correctIndex": 0,
    "explanation": "El estándar CAN original asume un medio cerrado de confianza; cualquier dispositivo conectado al bus puede enviar mensajes simulando ser la ECU de frenos. Se soluciona modernamente con Secure On-Board Communication (SecOC) y MAC criptográficos.",
    "skill": "Ciberseguridad Automotriz",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Vulnerabilidades de Bus CAN",
    "subtopic": "Ataques de Inyección y Protocolo SecOC"
  },
  {
    "id": "mec-uni-79",
    "sectionId": 1,
    "number": 79,
    "text": "¿Qué protocolo criptográfico 'SecOC' (Secure On-Board Communication de AUTOSAR) asegura las tramas de control críticas en redes CAN FD y Ethernet?",
    "options": [
      "Añade a cada mensaje un Código de Autenticación de Mensaje (MAC) calculado con una clave simétrica compartida y un contador de frescura (Freshness Value) para impedir la inyección y ataques de repetición (Replay Attacks)",
      "Cifra los cables de cobre con una capa de pintura reflectante",
      "Obliga al conductor a introducir una contraseña antes de frenar",
      "Borra las tramas antiguas cada medianoche"
    ],
    "correctIndex": 0,
    "explanation": "El receptor recalcula el MAC; si un atacante intenta inyectar una orden falsa o repetir un mensaje grabado previamente, el contador de frescura y la firma no coinciden y la trama es descartada.",
    "skill": "Criptografía en Comunicaciones Vehiculares",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Seguridad de Redes Embebidas",
    "subtopic": "Módulo SecOC y Códigos de Autenticación MAC"
  },
  {
    "id": "mec-uni-80",
    "sectionId": 1,
    "number": 80,
    "text": "¿En qué consiste la actualización de software inalámbrica 'OTA' (Over-The-Air) conforme a la regulación de ciberseguridad vehicular UN R156?",
    "options": [
      "Descargar, verificar criptográficamente e instalar actualizaciones de firmware en las ECUs del vehículo a través de conexión celular segura sin acudir al taller, garantizando trazabilidad y rollback automático ante fallos",
      "Actualizar el mapa impreso en papel en la guantera",
      "Sintonizar nuevas frecuencias de radio AM",
      "Cambiar el aceite a través de internet"
    ],
    "correctIndex": 0,
    "explanation": "La norma ONU R156 exige sistemas de gestión de actualizaciones de software (SUMS) con firmas criptográficas de clave pública (PKI) y arquitectura dual-bank (A/B) para volver a la versión previa si se interrumpe la carga.",
    "skill": "Actualizaciones de Software Remotas (OTA)",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Normativa UN R155 / R156",
    "subtopic": "Actualizaciones OTA y Ciberseguridad"
  },
  {
    "id": "mec-uni-81",
    "sectionId": 1,
    "number": 81,
    "text": "En el análisis metalúrgico de fracturas mecánicas (Fractografía), ¿qué morfología superficial característica revela inequívocamente una falla por 'Fatiga Mecánica' de un cigüeñal o biela?",
    "options": [
      "La presencia de 'Líneas de Playa' o marcas de marea macroscópicas concéntricas que parten de un punto concentrador de esfuerzos (grieta inicial) y avanzan en cada ciclo hasta la zona de fractura final catastrófica rugosa",
      "Una superficie pulida a espejo sin imperfecciones",
      "Una deformación plástica estirada como chicle",
      "Una superficie recubierta de óxido de aluminio blanco"
    ],
    "correctIndex": 0,
    "explanation": "La fatiga se produce por cargas cíclicas repetidas por debajo del límite elástico del material; las líneas de playa representan las fases de propagación discontinua de la fisura a lo largo de millones de ciclos.",
    "skill": "Análisis Metalúrgico de Fallas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Fractografía y Fatiga de Materiales",
    "subtopic": "Líneas de Playa y Concentradores de Esfuerzos"
  },
  {
    "id": "mec-uni-82",
    "sectionId": 1,
    "number": 82,
    "text": "¿Cuál es la causa primaria del mecanismo de desgaste superficial 'Pitting' (picado o picadura por fatiga superficial) en los flancos de contacto de los dientes de engranajes hipoides y rodamientos?",
    "options": [
      "Tensiones de contacto de compresión cíclicas extremas (tensiones hertzianas) que sobrepasan el límite de fatiga superficial del acero, provocando microfisuras subsuperficiales que se desprenden formando cráteres microscópicos",
      "La presencia de agua en el limpiaparabrisas",
      "La fricción estática del vehículo estacionado",
      "El exceso de revoluciones del alternador"
    ],
    "correctIndex": 0,
    "explanation": "Por teoría de contacto de Hertz, la tensión máxima de corte se produce unas micras por debajo de la superficie metálica; la fatiga en ese punto origina el desprendimiento de escamas de material (spalling).",
    "skill": "Tribología y Mecánica de Contacto",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecanismos de Desgaste Mecánico",
    "subtopic": "Desgaste por Pitting (Picado Hertziano)"
  },
  {
    "id": "mec-uni-83",
    "sectionId": 1,
    "number": 83,
    "text": "¿Qué técnica analítica espectrométrica de laboratorio 'ICP-AES' (Inductively Coupled Plasma Atomic Emission Spectroscopy) se utiliza en el Mantenimiento Basado en Condición (CBM) mediante análisis de aceite usado?",
    "options": [
      "Excitar una muestra de aceite con plasma de argón a 8000 K para medir con precisión de partes por millón (PPM) la concentración elemental de metales de desgaste (hierro, cobre, plomo, cromo, aluminio) y contaminantes (silicio)",
      "Pesar el aceite en una báscula analógica",
      "Medir la densidad del aceite con un tubo de cristal",
      "Filtrar el aceite con una servilleta de cocina"
    ],
    "correctIndex": 0,
    "explanation": "Un aumento brusco de cobre y plomo delata desgaste acelerado de los cojinetes de biela; un alza de silicio evidencia polvo entrando por filtro de aire roto; y cromo indica desgaste en anillos de pistón antes de que el motor rompa.",
    "skill": "Análisis Espectrométrico de Lubricantes",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mantenimiento Proactivo y CBM",
    "subtopic": "Espectrometría ICP de Metales de Desgaste"
  },
  {
    "id": "mec-uni-84",
    "sectionId": 1,
    "number": 84,
    "text": "¿En qué consiste el régimen de lubricación 'Elastohidrodinámica' (EHL - Elastohydrodynamic Lubrication) en los cojinetes de rodadura y flancos de engranajes?",
    "options": [
      "Las altísimas presiones locales de contacto (de miles de megapascales) deforman elásticamente las superficies metálicas y aumentan exponencialmente la viscosidad del aceite hasta convertirlo en un sólido vitrificado cuasi-rígido momentáneo que separa los metales",
      "El aceite se evapora y se convierte en gas",
      "El lubricante se mezcla con agua para crear espuma",
      "Los metales se derriten ligeramente para resbalar mejor"
    ],
    "correctIndex": 0,
    "explanation": "La ecuación piezoviscosa de Barus demuestra que a 1-3 GPa de presión, el aceite multiplica su viscosidad millones de veces en la huella de contacto milimétrica, impidiendo el contacto metal-metal a escala nanométrica.",
    "skill": "Física de la Lubricación Avanzada",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Tribología",
    "subtopic": "Régimen de Lubricación Elastohidrodinámica (EHL)"
  },
  {
    "id": "mec-uni-85",
    "sectionId": 1,
    "number": 85,
    "text": "¿Qué es la 'Cavitación' hidrodinámica en los impulsores de bombas de agua y camisas húmedas de cilindros en motores diésel de servicio pesado?",
    "options": [
      "La caída de presión local por debajo de la presión de vapor del líquido formando burbujas de vapor que colapsan e implosionan violentamente a velocidades supersónicas al entrar a zonas de mayor presión, erosionando el metal por microchorros destructivos",
      "El calentamiento uniforme del agua a 100 °C",
      "La congelación del agua en el radiador",
      "La absorción de nitrógeno en el refrigerante"
    ],
    "correctIndex": 0,
    "explanation": "Las vibraciones de las camisas diésel inducen cavitación en la pared exterior bañada por agua; las implosiones arrancan microscópicas partículas de hierro perforando la camisa hacia el cilindro si el refrigerante carece de aditivos antiespumantes de nitrito.",
    "skill": "Mecánica de Fluidos y Corrosión",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Fenómenos de Cavitación",
    "subtopic": "Erosión por Cavitación en Camisas de Cilindros"
  },
  {
    "id": "mec-uni-86",
    "sectionId": 1,
    "number": 86,
    "text": "¿Qué diagnóstico realiza el 'Análisis de Espectro de Vibraciones FFT' (Fast Fourier Transform) con acelerómetros piezoeléctricos en transmisiones y rodamientos automotrices?",
    "options": [
      "Descompone la señal temporal compleja de vibración en sus componentes de frecuencia fundamentales y armónicos, identificando frecuencias de defecto específicas (BPFI, BPFO, BSF) que revelan qué pista o rodillo exacto del cojinete está picado",
      "Mide la velocidad máxima del vehículo",
      "Calcula el consumo de combustible por kilómetro",
      "Verifica si los tornillos están pintados"
    ],
    "correctIndex": 0,
    "explanation": "Cada defecto geométrico impacta con una frecuencia característica (Ball Pass Frequency Outer/Inner); un pico espectral en esa frecuencia exacta diagnostica un fallo incipiente meses antes de una rotura catastrófica.",
    "skill": "Análisis Vibracional y Diagnóstico Predictivo",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mantenimiento Predictivo (PdM)",
    "subtopic": "Espectros FFT y Frecuencias de Falla de Rodamientos"
  },
  {
    "id": "mec-uni-87",
    "sectionId": 1,
    "number": 87,
    "text": "¿Qué mecanismo de degradación 'Fretting' (corrosión por frotamiento / tribocorrosión) afecta a conexiones estriadas, chavetas y contactos eléctricos conectores en vehículos?",
    "options": [
      "Desgaste abrasivo y oxidativo provocado por microdesplazamientos oscilatorios de pequeña amplitud (del orden de micrómetros) entre dos superficies en contacto sometidas a vibración constante",
      "La corrosión por inmersión en agua marina",
      "La rotura por exceso de corriente eléctrica continua",
      "El desprendimiento de la pintura exterior"
    ],
    "correctIndex": 0,
    "explanation": "Los microdesplazamientos rompen la capa pasivante de óxido creando partículas de óxido abrasivo duro atrapadas en la interfaz que aceleran el juego mecánico o aumentan la resistencia eléctrica en terminales.",
    "skill": "Tribología de Superficies",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Mecanismos de Desgaste",
    "subtopic": "Corrosión por Frotamiento (Fretting)"
  },
  {
    "id": "mec-uni-88",
    "sectionId": 1,
    "number": 88,
    "text": "¿Cuál es el propósito del tratamiento térmico superficial 'Nitruración' en cigüeñales y árboles de levas de alto rendimiento?",
    "options": [
      "Difundir nitrógeno atómico en la superficie ferrítica del acero a unos 500-550 °C para formar una capa dura de nitruros de hierro de alta dureza superficial (hasta 1000 HV) e inducir tensiones residuales de compresión que duplican la resistencia a la fatiga",
      "Pintar las piezas de color negro brillante",
      "Aumentar el peso del cigüeñal",
      "Reducir el punto de fusión del acero"
    ],
    "correctIndex": 0,
    "explanation": "Las tensiones residuales compresivas en la superficie contrarrestan las tensiones de tracción aplicadas en los muñones y radios de acuerdo (filetes), impidiendo la nucleación de grietas por fatiga.",
    "skill": "Tratamientos Térmicos y Metalurgia",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Ingeniería de Materiales",
    "subtopic": "Nitruración y Tensiones Residuales Compresivas"
  },
  {
    "id": "mec-uni-89",
    "sectionId": 1,
    "number": 89,
    "text": "¿Por qué en la fabricación de bielas de motor modernas se utiliza el proceso de 'Rotura por Fractura Controlada' (Cracked Forged Connecting Rods) en la cabeza de biela?",
    "options": [
      "Se marca con láser una muesca y se fractura hidráulicamente el sombrerete de biela; la superficie de fractura rugosa e irregular encaja de forma unívoca y perfecta sin holguras al montarla, eliminando pernos de centraje y aumentando la rigidez torsional",
      "Para abaratar costes partiendo la biela por la mitad",
      "Para comprobar si el acero es de mala calidad",
      "Porque no se dispone de sierras mecánicas en fábrica"
    ],
    "correctIndex": 0,
    "explanation": "Las rugosidades microscópicas encajan como un rompecabezas tridimensional perfecto, evitando cualquier micromovimiento o cizallamiento entre la biela y el sombrerete bajo cientos de bar de combustión.",
    "skill": "Procesos Avanzados de Fabricación",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Manufactura de Componentes de Motor",
    "subtopic": "Bielas Fracturadas por Láser (Cracked Rods)"
  },
  {
    "id": "mec-uni-90",
    "sectionId": 1,
    "number": 90,
    "text": "¿Qué propiedad mecánica 'Resistencia a la Termofluencia' (Creep Resistance) es crítica en el diseño de las válvulas de escape y la caracola de la turbina del turbocompresor?",
    "options": [
      "La capacidad del material metálico de resistir deformaciones plásticas lentas, progresivas y permanentes bajo tensiones mecánicas constantes cuando está expuesto a temperaturas extremas sostenidas (> 800-1050 °C)",
      "La resistencia a la humedad del aire",
      "La capacidad de conducir electricidad a 100 °C",
      "La flotabilidad del material en agua"
    ],
    "correctIndex": 0,
    "explanation": "A más del 40-50% de la temperatura de fusión homóloga, los metales sufren fluencia por difusión de vacancias y deslizamiento de bordes de grano; exige el uso de superaleaciones de base níquel (Inconel o Nimonic).",
    "skill": "Materiales para Altas Temperaturas",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Comportamiento Mecánico a Alta Temperatura",
    "subtopic": "Termofluencia (Creep) en Válvulas e Inconel"
  },
  {
    "id": "mec-uni-91",
    "sectionId": 1,
    "number": 91,
    "text": "¿Qué método de análisis de confiabilidad 'Weibull' se utiliza en la ingeniería de ciclo de vida automotriz para modelar tasas de falla de componentes?",
    "options": [
      "Una distribución estadística continua de dos o tres parámetros (forma β y escala η) que modela con precisión la tasa de falla decreciente en rodaje (mortalidad infantil β < 1), tasa constante aleatoria (vida útil β = 1) y tasa creciente por desgaste y fatiga (envejecimiento β > 1)",
      "Un algoritmo para calcular el consumo medio de gasolina",
      "Una fórmula de física cuántica para el climatizador",
      "Un método de diseño gráfico para carrocerías"
    ],
    "correctIndex": 0,
    "explanation": "El análisis de Weibull es el estándar de oro en ingeniería de confiabilidad automotriz para predecir cuándo el 10% de una flota fallará (vida B10) y optimizar intervalos de mantenimiento preventivo.",
    "skill": "Ingeniería de Confiabilidad y Seguridad",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Distribución de Weibull",
    "subtopic": "Curva de la Bañera y Análisis de Confiabilidad Weibull"
  },
  {
    "id": "mec-uni-92",
    "sectionId": 1,
    "number": 92,
    "text": "¿Cuál es el principio del 'Mantenimiento Centrado en la Confiabilidad' (RCM - Reliability-Centered Maintenance) en flotas vehiculares industriales?",
    "options": [
      "Un proceso estructurado para determinar las estrategias de mantenimiento óptimas (predictivo, preventivo o a la falla) identificando las funciones del sistema, los modos de falla, sus causas y las consecuencias sobre la seguridad, medio ambiente y costes operacionales",
      "Reemplazar todas las piezas cada 1000 kilómetros obligatoriamente",
      "Esperar a que el motor se destruya para comprar un vehículo nuevo",
      "Pintar el vehículo con colores corporativos"
    ],
    "correctIndex": 0,
    "explanation": "RCM se basa en la norma SAE JA1011; evita mantenimientos invasivos innecesarios que introducen fallas humanas y prioriza el monitoreo de condición (CBM) sobre el reemplazo ciego por calendario.",
    "skill": "Estrategias de Mantenimiento Industrial",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Metodología RCM",
    "subtopic": "Mantenimiento Centrado en la Confiabilidad (SAE JA1011)"
  },
  {
    "id": "mec-uni-93",
    "sectionId": 1,
    "number": 93,
    "text": "¿Qué técnica de ensayos no destructivos (NDT) 'Partículas Magnéticas' se utiliza para inspeccionar cigüeñales y bielas de acero en busca de fisuras?",
    "options": [
      "Magnetizar la pieza ferrosa y aplicar partículas magnéticas fluorescentes; cualquier discontinuidad o fisura superficial desvía las líneas de flujo magnético creando un campo de fuga que atrapa las partículas, visible bajo luz ultravioleta",
      "Sumergir la pieza en ácido sulfúrico concentrado",
      "Golpear la pieza con un mazo para escuchar el sonido",
      "Pesar la pieza con una balanza digital"
    ],
    "correctIndex": 0,
    "explanation": "Es sumamente sensible y rápido para detectar microfisuras de fatiga superficiales y subsuperficiales invisibles a simple vista en los radios de acuerdo de muñones de cigüeñales de competición.",
    "skill": "Ensayos No Destructivos (NDT)",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Control de Calidad e Inspección NDT",
    "subtopic": "Inspección por Partículas Magnéticas (MPI)"
  },
  {
    "id": "mec-uni-94",
    "sectionId": 1,
    "number": 94,
    "text": "¿Qué técnica NDT de 'Líquidos Penetrantes' se utiliza en componentes automotrices de aluminio no magnético (como culatas y pistones)?",
    "options": [
      "Aplicar un líquido penetrante de baja tensión superficial que penetra por capilaridad en microgrietas; tras limpiar la superficie, se aplica un revelador blanco en polvo que absorbe el penetrante coloreado o fluorescente delatando la fisura",
      "Pintar la culata con esmalte sintético",
      "Lavar la culata con agua a presión",
      "Comprobar si el pistón flota en gasolina"
    ],
    "correctIndex": 0,
    "explanation": "Al no ser ferromagnético el aluminio, las partículas magnéticas no funcionan; los líquidos penetrantes revelan fisuras entre asientos de válvula y conductos de refrigeración en culatas recalentadas.",
    "skill": "Ensayos de Metales No Ferrosos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Inspección de Aleaciones de Aluminio",
    "subtopic": "Inspección por Líquidos Penetrantes"
  },
  {
    "id": "mec-uni-95",
    "sectionId": 1,
    "number": 95,
    "text": "¿Qué fenómeno tribológico 'Desgaste Adhesivo o Escoriación' (Scuffing / Galling) ocurre en la falda del pistón y pared del cilindro si se rompe la película de aceite?",
    "options": [
      "Micro-soldaduras por fricción instantáneas entre las asperezas metálicas microscópicas en contacto directo debido a alta presión y temperatura, seguidas por el arrancamiento y desgarro violento de material de las superficies",
      "La corrosión por ácidos de la combustión",
      "El desprendimiento de pintura",
      "El agrietamiento por frío extremo"
    ],
    "correctIndex": 0,
    "explanation": "El scuffing produce rayas verticales profundas y rugosas en la camisa y falda del pistón, culminando rápidamente en el agarrotamiento y bloqueo catastrófico del motor.",
    "skill": "Mecanismos de Falla Tribológica",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Desgaste Adhesivo",
    "subtopic": "Escoriación (Scuffing) en Pistón y Camisa"
  },
  {
    "id": "mec-uni-96",
    "sectionId": 1,
    "number": 96,
    "text": "¿Cómo se define el 'Número de Neutralización' (TBN - Total Base Number) en el análisis de laboratorio de un aceite de motor?",
    "options": [
      "La reserva alcalina del lubricante (expresada en mg de KOH por gramo de aceite) disponible para neutralizar los ácidos sulfúrico y nítrico formados durante la combustión; una caída severa del TBN exige el cambio inmediato del aceite",
      "El número de litros de aceite en el cárter",
      "El porcentaje de agua en el refrigerante",
      "La temperatura máxima a la que se puede calentar el lubricante"
    ],
    "correctIndex": 0,
    "explanation": "Los motores diésel con combustibles con azufre generan ácido sulfúrico; los detergentes de sobrebase (carbonato de calcio/magnesio) neutralizan el ácido; cuando el TBN cae por debajo del TAN (Total Acid Number), el aceite corroe cojinetes.",
    "skill": "Química de Lubricantes y CBM",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Propiedades Químicas del Aceite",
    "subtopic": "Reserva Alcalina TBN vs Acidez TAN"
  },
  {
    "id": "mec-uni-97",
    "sectionId": 1,
    "number": 97,
    "text": "¿Qué es el 'Límite de Fatiga o Límite de Resistencia' (Endurance Limit) en la curva de Wöhler (S-N) para aceros automotrices?",
    "options": [
      "El nivel de amplitud de esfuerzo cíclico por debajo del cual el material metálico ferroso puede soportar teóricamente un número infinito de ciclos de carga sin sufrir fractura por fatiga",
      "La fuerza máxima para romper una barra de un solo tirón",
      "La temperatura a la que el acero se funde",
      "La velocidad máxima del pistón en m/s"
    ],
    "correctIndex": 0,
    "explanation": "Los aceros ferrosos presentan una asíntota horizontal en la curva S-N a partir de 10^6 - 10^7 ciclos; los ingenieros dimensionan cigüeñales y bielas para que las tensiones operativas queden siempre por debajo de este límite.",
    "skill": "Diseño a Fatiga Infinita",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Curva S-N de Wöhler",
    "subtopic": "Límite de Resistencia a la Fatiga en Aceros"
  },
  {
    "id": "mec-uni-98",
    "sectionId": 1,
    "number": 98,
    "text": "¿Qué información crítica revela el 'Diagrama de Sankey' de un vehículo en dinámica de ingeniería?",
    "options": [
      "Un diagrama de flujo cuantitativo donde el ancho de las bandas representa la distribución proporcional de la energía primaria total y las magnitudes de todas las pérdidas en cascada hasta la potencia de tracción en las ruedas",
      "El esquema de los circuitos impresos de la ECU",
      "El plano de los asientos de los pasajeros",
      "El organigrama de la empresa fabricante"
    ],
    "correctIndex": 0,
    "explanation": "El diagrama de Sankey ilustra de un vistazo la termodinámica global del vehículo: visualiza cómo el 100% de la energía de combustible se disipa en escape, refrigerante, bombeo, transmisión y rodadura, quedando solo un 20% para mover el vehículo.",
    "skill": "Visualización de Flujos Energéticos",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Eficiencia Energética",
    "subtopic": "Diagrama de Sankey de Pérdidas de Energía"
  },
  {
    "id": "mec-uni-99",
    "sectionId": 1,
    "number": 99,
    "text": "¿Qué parámetro de durabilidad automotriz 'B10 Life' (Vida B10) se calcula a partir de ensayos acelerados de vida en bancos de prueba?",
    "options": [
      "El tiempo de operación o kilometraje en el cual se espera estadísticamente que falle el 10% de la población de componentes bajo condiciones de ensayo estandarizadas (90% de confiabilidad de la muestra)",
      "El número de veces que se puede pintar el vehículo",
      "La duración de la batería de 12V en meses",
      "El peso máximo admisible en la baca del techo"
    ],
    "correctIndex": 0,
    "explanation": "Utilizado comúnmente en la especificación de rodamientos (norma ISO 281), cajas de cambio y turbocompresores para fijar garantías de fabricante con un margen de riesgo cuantitativo asumible.",
    "skill": "Ingeniería de Confiabilidad Estadística",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Métricas de Confiabilidad",
    "subtopic": "Vida B10 y Confiabilidad al 90%"
  },
  {
    "id": "mec-uni-100",
    "sectionId": 1,
    "number": 100,
    "text": "¿Cuál es el principio y objetivo del análisis de 'FMEA de Diseño' (DFMEA - Design Failure Mode and Effects Analysis) en el desarrollo automotriz según la norma AIAG-VDA?",
    "options": [
      "Una metodología sistemática multidisciplinar que identifica proactivamente todos los modos de falla potenciales de un componente antes de fabricarlo, evaluando su Severidad (S), Ocurrencia (O) y Detección (D) para priorizar acciones correctivas de ingeniería",
      "Un manual para reparar vehículos en caso de accidente",
      "Una lista de precios de repuestos de desguace",
      "Un software de diseño gráfico para catálogos comerciales"
    ],
    "correctIndex": 0,
    "explanation": "El DFMEA calcula el Número de Prioridad de Riesgo (RPN o matriz de Acción Prioritaria AP) para mitigar fallos catastróficos en fase de diseño asistido (CAD/CAE), evitando llamados a revisión masivos (recalls) en producción.",
    "skill": "Gestión de Calidad y Confiabilidad en Automoción",
    "difficulty": "Desafiante",
    "educationalLevel": "Universitario",
    "topic": "Metodología FMEA / DFMEA",
    "subtopic": "Análisis Modal de Fallos y Efectos (AIAG-VDA)"
  }
];
