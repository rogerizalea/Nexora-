import { Question } from '../../../types';

export const ELECTRICIDAD_BACHILLERATO: Question[] = [
  {
    "id": "ele-bac-1",
    "sectionId": 10,
    "number": 41,
    "text": "En un circuito RLC serie conectado a una fuente senoidal de frecuencia variable, ¿cuál es la condición física que define la resonancia eléctrica?",
    "options": [
      "La reactancia inductiva se anula completamente",
      "La reactancia inductiva iguala a la reactancia capacitiva (X_L = X_C), haciendo que la impedancia sea puramente resistiva y mínima (Z = R)",
      "La resistencia óhmica tiende a infinito",
      "La corriente se retrasa 90° respecto a la tensión"
    ],
    "correctIndex": 1,
    "explanation": "A la frecuencia de resonancia f₀ = 1 / (2π√(LC)), las reactancias se cancelan mutuamente (ωL = 1/ωC), maximizando la corriente en fase con la tensión.",
    "skill": "Resonancia en Circuitos RLC Serie",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Circuitos de CA",
    "subtopic": "Resonancia RLC"
  },
  {
    "id": "ele-bac-2",
    "sectionId": 10,
    "number": 42,
    "text": "¿Cuál es la ganancia de tensión en lazo cerrado (A_v) de un amplificador operacional ideal configurado como inversor con resistencia de entrada R₁ = 10 kΩ y resistencia de realimentación R_f = 100 kΩ?",
    "options": [
      "+10",
      "-10",
      "+11",
      "-100"
    ],
    "correctIndex": 1,
    "explanation": "Para el amplificador inversor ideal con tierra virtual en la entrada inversora: A_v = - (R_f / R₁) = - (100 kΩ / 10 kΩ) = -10.",
    "skill": "Amplificadores Operacionales Ideales (Op-Amps)",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrónica Analógica",
    "subtopic": "Amplificador Inversor"
  },
  {
    "id": "ele-bac-3",
    "sectionId": 10,
    "number": 43,
    "text": "¿Qué teorema de redes eléctricas lineales establece que cualquier red activa de dos terminales con fuentes y resistencias puede sustituirse por una sola fuente de tensión equivalente V_th en serie con una resistencia equivalente R_th?",
    "options": [
      "Teorema de Norton",
      "Teorema de Thévenin",
      "Teorema de Superposición",
      "Teorema de Millman"
    ],
    "correctIndex": 1,
    "explanation": "El Teorema de Léon Charles Thévenin simplifica drásticamente el análisis de circuitos complejos al calcular la respuesta sobre una carga variable.",
    "skill": "Teoremas de Circuitos Eléctricos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Análisis de Redes Lineales",
    "subtopic": "Teorema de Thévenin"
  },
  {
    "id": "ele-bac-4",
    "sectionId": 10,
    "number": 44,
    "text": "¿Cuál es la constante de tiempo (τ) de carga de un circuito RC serie compuesto por una resistencia R = 200 kΩ y un condensador C = 50 μF?",
    "options": [
      "1 segundo",
      "10 segundos",
      "25 segundos",
      "100 segundos"
    ],
    "correctIndex": 1,
    "explanation": "τ = R · C = (200 × 10³ Ω) × (50 × 10⁻⁶ F) = 10 segundos. En un tiempo t = 5τ el condensador se considera completamente cargado (99.3%).",
    "skill": "Respuesta Transitoria en Circuitos RC",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Transitorios en Circuitos",
    "subtopic": "Constante de Tiempo RC"
  },
  {
    "id": "ele-bac-5",
    "sectionId": 10,
    "number": 45,
    "text": "En un transistor MOSFET de enriquecimiento de canal N, ¿qué tensión crítica entre compuerta y fuente (V_GS) debe superarse para crear el canal de inversión conductor y permitir el paso de corriente de drenador?",
    "options": [
      "Tensión de ruptura por avalancha",
      "Tensión umbral (V_th o V_GS(th))",
      "Tensión de Early",
      "Tensión de Zener"
    ],
    "correctIndex": 1,
    "explanation": "Para V_GS > V_th, el campo eléctrico en la compuerta atrae electrones minoritarios a la superficie del sustrato p, formando un canal n conductor entre fuente y drenador.",
    "skill": "Transistores de Efecto de Campo MOSFET",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Semiconductores",
    "subtopic": "Tensión Umbral en MOSFETs"
  },
  {
    "id": "ele-bac-6",
    "sectionId": 10,
    "number": 46,
    "text": "¿Cómo se define el ancho de banda a -3 dB de un filtro paso bajo pasivo RC de primer orden?",
    "options": [
      "La frecuencia de corte f_c = 1 / (2π · R · C), donde la potencia de salida se reduce a la mitad (atenuación de -3 dB)",
      "La frecuencia donde la ganancia se hace infinita",
      "El doble de la frecuencia de resonancia",
      "La frecuencia de muestreo de Nyquist"
    ],
    "correctIndex": 0,
    "explanation": "En f_c = 1/(2πRC), la magnitud de la función de transferencia cae a 1/√2 ≈ 0.707 de su valor en banda pasante, equivalente a -3.01 dB.",
    "skill": "Filtros Analógicos Pasivos",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Respuesta en Frecuencia",
    "subtopic": "Filtro Paso Bajo RC"
  },
  {
    "id": "ele-bac-7",
    "sectionId": 10,
    "number": 47,
    "text": "En un rectificador de onda completa en puente de Graetz con 4 diodos de silicio (caída directa V_D = 0.7 V por diodo), si la tensión pico secundaria es de 20 V, ¿cuál es la tensión pico máxima sobre la carga?",
    "options": [
      "19.3 V",
      "18.6 V",
      "20.0 V",
      "17.2 V"
    ],
    "correctIndex": 1,
    "explanation": "En cada semiciclo conducen dos diodos en serie: V_pico_carga = V_pico_secundario - 2 · V_D = 20 V - 2(0.7 V) = 20 - 1.4 = 18.6 V.",
    "skill": "Fuentes de Alimentación y Rectificación",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrónica de Potencia Básica",
    "subtopic": "Rectificador en Puente de Diodos"
  },
  {
    "id": "ele-bac-8",
    "sectionId": 10,
    "number": 48,
    "text": "¿Qué compuerta lógica universal combinada con sí misma permite implementar cualquier otra función lógica booleana según el álgebra de Boole?",
    "options": [
      "Compuerta NAND (o NOR)",
      "Compuerta AND exclusivamente",
      "Compuerta OR exclusivamente",
      "Compuerta buffer no inversor"
    ],
    "correctIndex": 0,
    "explanation": "NAND y NOR son compuertas funcionalmente completas o universales: cualquier circuito lógico combinatorio puede construirse usando únicamente compuertas NAND.",
    "skill": "Universalidad de Compuertas Lógicas",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Diseño Lógico Digital",
    "subtopic": "Compuertas Universales NAND y NOR"
  },
  {
    "id": "ele-bac-9",
    "sectionId": 10,
    "number": 49,
    "text": "En un circuito trifásico equilibrado con carga conectada en triángulo (delta, Δ), ¿cuál es la relación entre la corriente de línea (I_L) y la corriente de fase (I_F)?",
    "options": [
      "I_L = I_F",
      "I_L = √3 · I_F",
      "I_L = I_F / √3",
      "I_L = 3 · I_F"
    ],
    "correctIndex": 1,
    "explanation": "En conexión delta, la tensión de línea es igual a la de fase (V_L = V_F) y la corriente de línea es √3 veces mayor que la corriente de fase (I_L = √3 · I_F).",
    "skill": "Sistemas Trifásicos en Conexión Delta",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Sistemas Trifásicos",
    "subtopic": "Conexión Triángulo o Delta"
  },
  {
    "id": "ele-bac-10",
    "sectionId": 10,
    "number": 50,
    "text": "¿Cuál es el ángulo de desfase entre la tensión y la corriente en un condensador ideal sin pérdidas alimentado en corriente alterna senoidal?",
    "options": [
      "Están exactamente en fase (desfase 0°)",
      "La corriente se adelanta 90° respecto a la tensión (φ = +90°)",
      "La corriente se retrasa 90° respecto a la tensión",
      "Desfase de 180°"
    ],
    "correctIndex": 1,
    "explanation": "Dado que i(t) = C (dv/dt), la derivada de una función seno es coseno (+90°), haciendo que la corriente capacitiva lidere a la tensión en 90°.",
    "skill": "Comportamiento de Componentes Reactivos en CA",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Fasores y Corriente Alterna",
    "subtopic": "Desfase en Capacitores"
  },
  {
    "id": "ele-bac-11",
    "sectionId": 10,
    "number": 51,
    "text": "¿Qué componente semiconductor optoelectrónico contiene un LED emisor y un fototransistor receptor en un encapsulado hermético para aislar eléctricamente dos circuitos?",
    "options": [
      "Optoacoplador (o aislador óptico)",
      "Tiristor SCR",
      "Triac de potencia",
      "Diodo Varicap"
    ],
    "correctIndex": 0,
    "explanation": "El optoacoplador transmite señales mediante luz infrarroja, proporcionando aislamiento galvánico de miles de voltios entre la etapa de control de bajo voltaje y la etapa de potencia.",
    "skill": "Aislamiento Galvánico y Optoelectrónica",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrónica de Control",
    "subtopic": "Optoacopladores"
  },
  {
    "id": "ele-bac-12",
    "sectionId": 10,
    "number": 52,
    "text": "¿Qué ley de la conservación rige el método sistemático de análisis nodal para determinar los potenciales de nodo en circuitos complejos?",
    "options": [
      "Ley de Corrientes de Kirchhoff (LCK)",
      "Ley de Voltajes de Kirchhoff (LVK)",
      "Principio de Arquímedes",
      "Ley de Lenz"
    ],
    "correctIndex": 0,
    "explanation": "El análisis nodal formula ecuaciones de LCK en cada nodo esencial no referencial expresando las corrientes de rama en función de las tensiones nodales.",
    "skill": "Métodos Sistemáticos de Análisis Nodal",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Circuitos",
    "subtopic": "Análisis Nodal"
  },
  {
    "id": "ele-bac-13",
    "sectionId": 10,
    "number": 53,
    "text": "En una línea de transmisión bifilar ideal, ¿cuál es la impedancia característica Z₀ en función de la inductancia por unidad de longitud L y la capacitancia por unidad de longitud C sin pérdidas?",
    "options": [
      "Z₀ = √(L / C)",
      "Z₀ = L · C",
      "Z₀ = √(C / L)",
      "Z₀ = 1 / (L · C)"
    ],
    "correctIndex": 0,
    "explanation": "La impedancia característica Z₀ = √(L/C) es la relación entre la onda de tensión progresiva y la onda de corriente en una línea de transmisión infinita sin pérdidas.",
    "skill": "Líneas de Transmisión de Alta Frecuencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Campos y Ondas Guiadas",
    "subtopic": "Impedancia Característica Z0"
  },
  {
    "id": "ele-bac-14",
    "sectionId": 10,
    "number": 54,
    "text": "¿Qué tipo de flip-flop síncrono biestable tiene entradas J y K donde la condición J = 1 y K = 1 hace conmutar (bascular o toggle) el estado de la salida en cada pulso de reloj?",
    "options": [
      "Flip-Flop D",
      "Flip-Flop JK",
      "Flip-Flop T exclusivamente",
      "Latch SR asíncrono"
    ],
    "correctIndex": 1,
    "explanation": "El flip-flop JK resuelve la condición de indeterminación del flip-flop SR cuando ambas entradas son 1, invirtiendo el estado anterior Q_{n+1} = Q̄_n.",
    "skill": "Sistemas Digitales Secuenciales",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrónica Digital",
    "subtopic": "Flip-Flops JK"
  },
  {
    "id": "ele-bac-15",
    "sectionId": 10,
    "number": 55,
    "text": "¿Cuál es la frecuencia de oscilación de un circuito oscilador astable clásico basado en el temporizador integrado NE555 con resistencias R_A, R_B y condensador C?",
    "options": [
      "f = 1.44 / ((R_A + 2R_B) · C)",
      "f = 1 / (R_A · C)",
      "f = 2π / √(LC)",
      "f = 0.693 · (R_A + R_B) · C"
    ],
    "correctIndex": 0,
    "explanation": "Los tiempos de carga t_alto = 0.693(R_A + R_B)C y descarga t_bajo = 0.693(R_B)C dan un período total T = 0.693(R_A + 2R_B)C, de donde f = 1.44 / ((R_A + 2R_B)C).",
    "skill": "Temporizadores Integrados y Osciladores Astables",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos Integrados Lineales",
    "subtopic": "Temporizador NE555 en Modo Astable"
  },
  {
    "id": "ele-bac-16",
    "sectionId": 10,
    "number": 56,
    "text": "En el ensayo de aislamiento de conductores con un megóhmetro (megger), ¿qué rango de valores de tensión continua de prueba se aplica típicamente para instalaciones de baja tensión (230/400 V)?",
    "options": [
      "5 V a 12 V DC",
      "500 V a 1,000 V DC",
      "10 kV a 50 kV DC",
      "1 V AC"
    ],
    "correctIndex": 1,
    "explanation": "Según norma IEC 60364-6, los ensayos de resistencia de aislamiento en circuitos de tensión nominal hasta 500 V se ejecutan aplicando 500 V DC, exigiendo R_aislamiento > 1 MΩ.",
    "skill": "Medición de Resistencia de Aislamiento",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Instalaciones y Normativa",
    "subtopic": "Ensayos con Megóhmetro"
  },
  {
    "id": "ele-bac-17",
    "sectionId": 10,
    "number": 57,
    "text": "¿Qué tipo de realimentación se aplica en los circuitos amplificadores operacionales para estabilizar la ganancia, aumentar el ancho de banda y reducir la distorsión?",
    "options": [
      "Realimentación positiva",
      "Realimentación negativa",
      "Realimentación regenerativa",
      "Sin realimentación"
    ],
    "correctIndex": 1,
    "explanation": "La realimentación negativa reconecta una fracción de la salida hacia la entrada inversora (-), sacrificando ganancia de lazo abierto a cambio de linealidad y estabilidad.",
    "skill": "Teoría de la Realimentación en Amplificadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrónica Analógica",
    "subtopic": "Realimentación Negativa"
  },
  {
    "id": "ele-bac-18",
    "sectionId": 10,
    "number": 58,
    "text": "¿Qué efecto parásito reduce la sección efectiva de conducción en conductores de cobre a altas frecuencias concentrando la corriente en la periferia exterior?",
    "options": [
      "Efecto Hall",
      "Efecto Pelicular (Efecto Skin)",
      "Efecto Corona",
      "Efecto Seebeck"
    ],
    "correctIndex": 1,
    "explanation": "Los campos magnéticos variables inducen corrientes de Foucault internas que contrarrestan el flujo de corriente en el centro del conductor, forzándola a circular por la \"piel\" exterior (profundidad de penetración δ).",
    "skill": "Electrodinámica y Efecto Pelicular",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electromagnetismo Aplicado",
    "subtopic": "Efecto Skin en Conductores"
  },
  {
    "id": "ele-bac-19",
    "sectionId": 10,
    "number": 59,
    "text": "¿Cuál es la tensión de salida regulada de un circuito integrado regulador de tensión lineal positivo de tres terminales de la serie 7805?",
    "options": [
      "+12 V",
      "+5 V fijos y estabilizados",
      "-5 V",
      "+3.3 V"
    ],
    "correctIndex": 1,
    "explanation": "La familia LM78XX entrega tensiones positivas fijas según los dos últimos dígitos: 7805 = +5 V; 7812 = +12 V.",
    "skill": "Reguladores de Tensión Lineales Integrados",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Fuentes de Alimentación",
    "subtopic": "Familia 78XX"
  },
  {
    "id": "ele-bac-20",
    "sectionId": 10,
    "number": 60,
    "text": "En un convertidor reductor de conmutación DC-DC (Buck Converter), ¿qué elemento almacena energía en forma de campo magnético durante el tiempo de conducción del transistor de conmutación?",
    "options": [
      "El diodo volante",
      "La bobina o inductor de potencia (L)",
      "La resistencia de derivación",
      "El condensador de entrada"
    ],
    "correctIndex": 1,
    "explanation": "El inductor L se carga magnéticamente cuando el interruptor MOSFET conduce (V_L = V_in - V_out) y transfiere su energía a la carga a través del diodo cuando el interruptor se abre.",
    "skill": "Fuentes Conmutadas y Convertidores DC-DC",
    "difficulty": "Intermedio",
    "educationalLevel": "Bachillerato",
    "topic": "Electrónica de Potencia",
    "subtopic": "Convertidor Buck"
  },
  {
    "id": "ele-bac-21",
    "sectionId": 10,
    "number": 21,
    "text": "Al calcular la resistencia equivalente de Thévenin (R_th) de un circuito lineal visto desde dos terminales A y B, ¿cómo deben tratarse las fuentes independientes internas?",
    "options": [
      "Todas las fuentes se reemplazan por resistencias de 1 MΩ",
      "Las fuentes de tensión se abren y las de corriente se cortocircuitan",
      "Se dejan todas las fuentes encendidas al valor máximo",
      "Las fuentes de tensión independientes se reemplazan por cortocircuitos (cables) y las de corriente independiente por circuitos abiertos"
    ],
    "correctIndex": 3,
    "explanation": "Para anular las fuentes independientes (hacer su valor cero): una fuente de tensión con V = 0 equivale a un cortocircuito, y una de corriente con I = 0 equivale a un circuito abierto.",
    "skill": "Teorema de Thévenin",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoremas de Redes",
    "subtopic": "Desactivación de Fuentes Independientes"
  },
  {
    "id": "ele-bac-22",
    "sectionId": 10,
    "number": 22,
    "text": "Si un circuito lineal tiene un voltaje de circuito abierto Voc = 24 V entre bornes A-B y una corriente de cortocircuito Isc = 4 A al unir directamente A con B, ¿cuál es su resistencia de Thévenin (R_th)?",
    "options": [
      "0.167 Ω",
      "20 Ω",
      "6 Ω",
      "96 Ω"
    ],
    "correctIndex": 2,
    "explanation": "Por definición de los circuitos equivalentes de Thévenin y Norton: R_th = V_oc / I_sc = 24 V / 4 A = 6 Ω.",
    "skill": "Equivalentes Thévenin y Norton",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoremas de Redes",
    "subtopic": "Relación Voc, Isc y Rth"
  },
  {
    "id": "ele-bac-23",
    "sectionId": 10,
    "number": 23,
    "text": "En la representación fasorial en forma binómica Z = R + jX, ¿qué representa físicamente la componente imaginaria X positiva (+jX)?",
    "options": [
      "Una fuente de tensión en continua",
      "Una reactancia inductiva debida a bobinas o solenoides (X_L = ωL)",
      "Una reactancia capacitiva pura",
      "Una resistencia pura que disipa calor"
    ],
    "correctIndex": 1,
    "explanation": "En la notación fasorial estandarizada, la reactancia inductiva adelanta la fase en +90°, representándose con el operador complejo imaginario positivo +jXL.",
    "skill": "Fasores e Impedancia Compleja",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Análisis en Régimen Sinusoidal",
    "subtopic": "Componente Reactiva Inductiva"
  },
  {
    "id": "ele-bac-24",
    "sectionId": 10,
    "number": 24,
    "text": "Si una impedancia tiene un valor Z = 3 - j4 Ω, ¿cuál es su módulo |Z| y de qué naturaleza es su reactancia?",
    "options": [
      "|Z| = 5 Ω y es de naturaleza capacitiva",
      "|Z| = 7 Ω y es de naturaleza inductiva",
      "|Z| = 1 Ω y es puramente resistiva",
      "|Z| = 12 Ω y es resonante"
    ],
    "correctIndex": 0,
    "explanation": "|Z| = √(3² + (-4)²) = √(9 + 16) = √25 = 5 Ω. El signo negativo en la parte imaginaria (-j) indica una reactancia capacitiva neta (XC = 4 Ω).",
    "skill": "Impedancia Compleja",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Análisis Fasorial",
    "subtopic": "Módulo y Signo de Reactancia"
  },
  {
    "id": "ele-bac-25",
    "sectionId": 10,
    "number": 25,
    "text": "¿Cuál es la expresión que define la admitancia compleja Y en función de la impedancia Z?",
    "options": [
      "Y = Z²",
      "Y = R × X",
      "Y = √(Z)",
      "Y = 1 / Z = G + jB"
    ],
    "correctIndex": 3,
    "explanation": "La admitancia Y es el inverso multiplicativo de la impedancia (Y = 1/Z). Se mide en Siemens (S) y su parte real G es la conductancia y su parte imaginaria B es la susceptancia.",
    "skill": "Admitancia Compleja",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos en CA",
    "subtopic": "Definición de Admitancia"
  },
  {
    "id": "ele-bac-26",
    "sectionId": 10,
    "number": 26,
    "text": "En un circuito RLC serie, ¿a qué frecuencia de la fuente senoidal la impedancia total alcanza su valor mínimo absoluto (Z_min = R)?",
    "options": [
      "A frecuencia infinita (f → ∞)",
      "A la frecuencia donde XL = 2XC",
      "A la frecuencia de resonancia f₀ = 1 / (2π√(LC))",
      "A frecuencia cero (CC)"
    ],
    "correctIndex": 2,
    "explanation": "En resonancia serie, XL = XC, de modo que la reactancia total X = XL - XC = 0. La impedancia se vuelve puramente resistiva y mínima (Z = R), maximizando la corriente.",
    "skill": "Resonancia RLC Serie",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Resonancia Eléctrica",
    "subtopic": "Frecuencia de Resonancia Serie"
  },
  {
    "id": "ele-bac-27",
    "sectionId": 10,
    "number": 27,
    "text": "¿Cómo se define el Factor de Calidad (Q) en un circuito RLC serie resonante?",
    "options": [
      "Q = R × C / L",
      "Q = (ω₀ × L) / R = 1 / (ω₀ × R × C)",
      "Q = R / (ω₀ × L)",
      "Q = ω₀ × R × L"
    ],
    "correctIndex": 1,
    "explanation": "El factor Q mide la agudeza o selectividad de la campana de resonancia y la relación entre la energía reactiva máxima almacenada y la energía disipada por ciclo: Q = ω₀L / R.",
    "skill": "Factor de Calidad Q",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Resonancia",
    "subtopic": "Cálculo de Q en RLC Serie"
  },
  {
    "id": "ele-bac-28",
    "sectionId": 10,
    "number": 28,
    "text": "Si un circuito sintonizado de radio tiene una frecuencia central de resonancia f₀ = 1,000 kHz y un factor de calidad Q = 50, ¿cuál es su ancho de banda (BW)?",
    "options": [
      "20 kHz",
      "50 kHz",
      "500 kHz",
      "2 kHz"
    ],
    "correctIndex": 0,
    "explanation": "El ancho de banda entre los puntos de media potencia (-3 dB) viene dado por: BW = f₀ / Q = 1,000 kHz / 50 = 20 kHz.",
    "skill": "Ancho de Banda",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos Sintonizados",
    "subtopic": "Relación BW = f0 / Q"
  },
  {
    "id": "ele-bac-29",
    "sectionId": 10,
    "number": 29,
    "text": "En un circuito RLC paralelo ideal (bobina y capacitor en paralelo puro sin resistencia interna), ¿qué valor alcanza teóricamente la impedancia en la frecuencia de antirresonancia?",
    "options": [
      "Tiende a cero (cortocircuito franco)",
      "Permanece fija en 50 Ω",
      "Se invierte convirtiéndose en una fem activa",
      "Tiende a infinito (Z → ∞), bloqueando la corriente total de la fuente externa"
    ],
    "correctIndex": 3,
    "explanation": "En la resonancia paralelo (antirresonancia), las corrientes reactivas entre L y C son iguales y de signos opuestos internamente, por lo que la corriente externa demandada a la fuente es nula y la impedancia es teóricamente infinita.",
    "skill": "Resonancia RLC Paralelo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Resonancia Paralelo",
    "subtopic": "Impedancia en Antirresonancia"
  },
  {
    "id": "ele-bac-30",
    "sectionId": 10,
    "number": 30,
    "text": "De acuerdo con la Ley de Faraday-Lenz, ¿qué significado físico tiene el signo negativo en la ecuación de la fuerza electromotriz inducida ε = -N · (dΦ/dt)?",
    "options": [
      "Representa que la corriente siempre viaja hacia el polo sur",
      "Se debe a que los electrones tienen masa negativa",
      "La polaridad de la fem inducida genera corrientes cuyo campo magnético se opone siempre a la variación del flujo que la originó",
      "Indica que la energía siempre disminuye y se destruye"
    ],
    "correctIndex": 2,
    "explanation": "La ley de Lenz es una manifestación directa de la conservación de la energía: la corriente inducida genera un flujo propio que contrarresta activamente el cambio (aumento o disminución) del flujo incidente.",
    "skill": "Ley de Lenz",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Electromagnetismo",
    "subtopic": "Oposición de la FEM Inducida"
  },
  {
    "id": "ele-bac-31",
    "sectionId": 10,
    "number": 31,
    "text": "¿Cuál es la expresión que describe la fuerza magnética ejercida sobre un tramo recto de conductor de longitud L por el que circula una corriente I dentro de un campo magnético uniforme B?",
    "options": [
      "F = q·E·cos(θ)",
      "F = I × (L × B)  (módulo F = I·L·B·sen(θ))",
      "F = B / (I·L)",
      "F = I²·L / B"
    ],
    "correctIndex": 1,
    "explanation": "La fuerza de Lorentz sobre cargas en movimiento macroscópico da lugar a la fuerza sobre un conductor recto: F = I·L·B·sen(θ), siendo máxima cuando el cable es perpendicular a las líneas de campo (θ = 90°).",
    "skill": "Fuerza Magnética sobre Conductores",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Electromagnetismo",
    "subtopic": "Ley de Laplace y Fuerza de Lorentz"
  },
  {
    "id": "ele-bac-32",
    "sectionId": 10,
    "number": 32,
    "text": "¿Cómo se define la Potencia Compleja S en términos fasoriales de tensión V e intensidad de corriente I?",
    "options": [
      "S = V × I*  (tensión por el conjugado de la corriente)",
      "S = V × I  (sin conjugar)",
      "S = V² / I",
      "S = (V + I)²"
    ],
    "correctIndex": 0,
    "explanation": "Al conjugar la corriente (I* = |I|∠-θi), el ángulo resultante es θv - θi = φ (el ángulo de la carga). De este modo S = P + jQ, donde una corriente atrasada (inductiva, θi < θv) produce una Q positiva.",
    "skill": "Potencia Compleja",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Potencia en CA",
    "subtopic": "Definición con Corriente Conjugada"
  },
  {
    "id": "ele-bac-33",
    "sectionId": 10,
    "number": 33,
    "text": "Si la potencia compleja consumida por una instalación es S = 80 kW + j60 kVAR, ¿cuál es su potencia aparente |S| y su factor de potencia?",
    "options": [
      "|S| = 140 kVA y FP = 0.5 inductivo",
      "|S| = 20 kVA y FP = 0.9 capacitivo",
      "|S| = 80 kVA y FP = 1.0 unitario",
      "|S| = 100 kVA y FP = 0.8 inductivo"
    ],
    "correctIndex": 3,
    "explanation": "|S| = √(80² + 60²) = √(6400 + 3600) = √10000 = 100 kVA. Factor de potencia: FP = P / |S| = 80 / 100 = 0.8. Al ser +j, es de carácter inductivo (retrasado).",
    "skill": "Potencia Compleja",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Potencia en CA",
    "subtopic": "Módulo Aparente y Factor de Potencia"
  },
  {
    "id": "ele-bac-34",
    "sectionId": 10,
    "number": 34,
    "text": "En un ensayo en circuito abierto (ensayo de vacío) de un transformador monofásico a tensión nominal, ¿qué parámetros principales se determinan?",
    "options": [
      "La reactancia de fuga de cortocircuito",
      "El rendimiento térmico del aceite dieléctrico en cortocircuito",
      "Las pérdidas en el núcleo ferromagnético (pérdidas en el hierro) y los parámetros de la rama magnetizante (Rc y Xm)",
      "Las pérdidas por efecto Joule en los bobinados de cobre a plena carga"
    ],
    "correctIndex": 2,
    "explanation": "Al no tener carga conectada en el secundario, la corriente es ínfimamente baja (corriente de magnetización en vacío), por lo que las pérdidas en el cobre son despreciables y toda la potencia registrada en el vatímetro corresponde a pérdidas en el hierro.",
    "skill": "Ensayos de Transformadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Máquinas Eléctricas",
    "subtopic": "Ensayo de Vacío"
  },
  {
    "id": "ele-bac-35",
    "sectionId": 10,
    "number": 35,
    "text": "¿Qué información fundamental se obtiene del ensayo de cortocircuito en un transformador realizado con corriente nominal?",
    "options": [
      "El nivel de ruido acústico en decibeles",
      "Las pérdidas en el cobre a plena carga (Pcu = I²·Req) y la impedancia equivalente de dispersión (Zeq = Req + jXeq)",
      "Las pérdidas de histéresis a tensión máxima",
      "La rigidez dieléctrica del papel aislante"
    ],
    "correctIndex": 1,
    "explanation": "En cortocircuito se aplica una tensión muy reducida (Vcc, típicamente del 3 al 8% de Vn) para hacer circular la corriente nominal; a esa baja tensión las pérdidas en el hierro son despreciables y se miden directamente las pérdidas óhmicas de los devanados.",
    "skill": "Ensayos de Transformadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Máquinas Eléctricas",
    "subtopic": "Ensayo de Cortocircuito"
  },
  {
    "id": "ele-bac-36",
    "sectionId": 10,
    "number": 36,
    "text": "¿Cuál es la expresión que determina la fuerza contraelectromotriz (FCEM, Eb) generada en el inducido de un motor de corriente continua?",
    "options": [
      "Eb = k × Φ × ω  (proporcional al flujo magnético y a la velocidad angular del rotor)",
      "Eb = V_fuente + I_a × R_a",
      "Eb = k / (Φ × ω)",
      "Eb = I_a² × R_a"
    ],
    "correctIndex": 0,
    "explanation": "Al girar los conductores del rotor dentro del campo inductor, por ley de Faraday se induce una fem interna Eb = k·Φ·ω que se opone a la tensión aplicada Vt, cumpliendo Vt = Eb + Ia·Ra.",
    "skill": "Motores de Corriente Continua",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Máquinas de CC",
    "subtopic": "Fuerza Contraelectromotriz"
  },
  {
    "id": "ele-bac-37",
    "sectionId": 10,
    "number": 37,
    "text": "¿Por qué un motor de corriente continua de gran potencia absorbe una corriente de arranque desmesurada si se conecta directamente a la red sin resistencias de arranque ni arrancador suave?",
    "options": [
      "Porque el campo magnético del estator se desvanece",
      "Porque los polos magnéticos entran en resonancia cuántica",
      "Porque la inductancia del devanado tiende a infinito en reposo",
      "Porque con el rotor detenido la velocidad es cero (ω = 0), la FCEM inducida es nula (Eb = 0) y la corriente queda limitada únicamente por la pequeña resistencia de armadura (I_arr = Vt / Ra)"
    ],
    "correctIndex": 3,
    "explanation": "En el reposo inicial ω = 0, luego Eb = 0. Dado que Ra es de apenas fracciones de ohmio, I_arr = Vt / Ra puede alcanzar de 10 a 20 veces la corriente nominal, quemando las escobillas o disparando los relés.",
    "skill": "Motores de Corriente Continua",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Máquinas de CC",
    "subtopic": "Corriente de Arranque en Motores DC"
  },
  {
    "id": "ele-bac-38",
    "sectionId": 10,
    "number": 38,
    "text": "¿Qué característica de operación singular y peligrosa presenta un motor de corriente continua con devanado en serie si se le hace funcionar en vacío (sin carga mecánica acoplada)?",
    "options": [
      "Invierte su sentido de giro de forma oscilatoria violenta",
      "Comienza a generar corriente alterna de alta frecuencia",
      "Se acelera de forma descontrolada (se 'embala') pudiendo autodestruirse mecánicamente por fuerza centrífuga",
      "Se frena instantáneamente hasta bloquear el eje"
    ],
    "correctIndex": 2,
    "explanation": "En un motor serie, el flujo es creado por la corriente de armadura (Φ ∝ Ia). En vacío, Ia disminuye drásticamente; al tender el flujo a cero, la velocidad ω = Eb / (k·Φ) tiende peligrosamente a infinito, desprendiendo los devanados del inducido.",
    "skill": "Motores de Serie en CC",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Máquinas de CC",
    "subtopic": "Embalamiento del Motor Serie"
  },
  {
    "id": "ele-bac-39",
    "sectionId": 10,
    "number": 39,
    "text": "¿Qué tipo de motor eléctrico posee colector de delgas y escobillas, y tiene la capacidad de funcionar indistintamente tanto con corriente continua como con corriente alterna monofásica?",
    "options": [
      "Motor paso a paso híbrido",
      "Motor universal",
      "Motor síncrono de imanes permanentes",
      "Motor asíncrono con jaula de ardilla"
    ],
    "correctIndex": 1,
    "explanation": "El motor universal es constructivamente un motor serie de CC adaptado (con devanados e inducido laminados para tolerar CA). Al alternar el semiciclo de CA, se invierten simultáneamente la polaridad del inducido y del campo inductor, manteniendo el sentido del par motriz constante.",
    "skill": "Motores Fraccionarios",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Máquinas Eléctricas",
    "subtopic": "Motor Universal"
  },
  {
    "id": "ele-bac-40",
    "sectionId": 10,
    "number": 40,
    "text": "En un motor de inducción monofásico de fase partida, ¿por qué es indispensable incluir un devanado auxiliar desfasado espacial y temporalmente (mediante un capacitor o resistencia)?",
    "options": [
      "Porque el campo magnético producido por un devanado monofásico único es pulsante estático y no produce par de arranque neto (T_arr = 0)",
      "Para refrigerar el estator durante el giro continuo",
      "Para eliminar los armónicos de tercer orden en la red",
      "Porque de lo contrario el eje giraría a velocidad suprasíncrona"
    ],
    "correctIndex": 0,
    "explanation": "Un campo monofásico senoidal genera dos campos giratorios de igual magnitud que rotan en sentidos opuestos, cancelando el par en reposo. El devanado auxiliar con condensador crea un campo elíptico o circular rotatorio necesario para iniciar el arranque.",
    "skill": "Motores Monofásicos de Inducción",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Máquinas Asíncronas",
    "subtopic": "Par de Arranque Monofásico"
  },
  {
    "id": "ele-bac-41",
    "sectionId": 10,
    "number": 41,
    "text": "¿Qué mecanismo desconecta el devanado auxiliar de arranque y su condensador electrolítico en muchos motores monofásicos una vez que el rotor alcanza aproximadamente el 75%-80% de su velocidad nominal?",
    "options": [
      "Termostato de bulbo capilar",
      "Varistor de óxido metálico",
      "Disyuntor de caja moldeada",
      "Interruptor centrífugo mecánico (o relé potencial)"
    ],
    "correctIndex": 3,
    "explanation": "El interruptor centrífugo montado en el eje se abre por acción de la fuerza centrífuga cuando el motor toma suficiente velocidad, evitando que el bobinado de arranque (de alambre más fino) se sobrecaliente.",
    "skill": "Motores Monofásicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Arranque de Motores",
    "subtopic": "Interruptor Centrífugo"
  },
  {
    "id": "ele-bac-42",
    "sectionId": 10,
    "number": 42,
    "text": "¿Cuál es la expresión que describe la Ley de Ampère-Maxwell en forma integral?",
    "options": [
      "∮ B · dA = q / ε₀",
      "∮ D · dA = 0",
      "∮ B · dl = μ₀ × (I_enc + ε₀ × dΦ_E / dt)",
      "∮ E · dl = 0"
    ],
    "correctIndex": 2,
    "explanation": "Maxwell generalizó la ley de Ampère incorporando el término de corriente de desplazamiento I_d = ε₀·(dΦ_E/dt), prediciendo la propagación de ondas electromagnéticas en el vacío.",
    "skill": "Ecuaciones de Maxwell",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría Electromagnética",
    "subtopic": "Ley de Ampère Generalizada"
  },
  {
    "id": "ele-bac-43",
    "sectionId": 10,
    "number": 43,
    "text": "¿Qué establece la Ley de Gauss para el campo magnético (∮ B · dA = 0)?",
    "options": [
      "Que los imanes pierden su carga en el vacío",
      "Que no existen monopolos magnéticos aislados en la naturaleza; las líneas de campo magnético son siempre lazos cerrados continuos",
      "Que la fuerza magnética sobre una carga en reposo es infinita",
      "Que el flujo eléctrico total a través de cualquier superficie siempre es cero"
    ],
    "correctIndex": 1,
    "explanation": "Al no existir cargas magnéticas aisladas, todo flujo que entra a una superficie cerrada sale exactamente de ella, resultando en un flujo magnético neto idénticamente nulo.",
    "skill": "Ecuaciones de Maxwell",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría Electromagnética",
    "subtopic": "Inexistencia de Monopolos Magnéticos"
  },
  {
    "id": "ele-bac-44",
    "sectionId": 10,
    "number": 44,
    "text": "En un circuito RL serie conectado súbitamente a una fuente de continua V mediante un interruptor en t = 0, ¿cuál es la ecuación diferencial que rige la corriente?",
    "options": [
      "L × (di/dt) + R × i = V",
      "C × (dv/dt) + i/R = 0",
      "L × (d²i/dt²) + R × i = 0",
      "R × (di/dt) + L × i = V"
    ],
    "correctIndex": 0,
    "explanation": "Por la Ley de Tensiones de Kirchhoff: la suma de la caída en el resistor (R·i) y la fem de autoinducción en la bobina (L·di/dt) iguala a la tensión de la fuente V.",
    "skill": "Ecuaciones Diferenciales de Circuitos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos RL",
    "subtopic": "Formulación de Ecuación Diferencial"
  },
  {
    "id": "ele-bac-45",
    "sectionId": 10,
    "number": 45,
    "text": "La solución a la ecuación diferencial anterior para i(t) con condición inicial i(0) = 0 es:",
    "options": [
      "i(t) = (V / R) × e^(-t / (L/R))",
      "i(t) = (V / R) × sen(ωt)",
      "i(t) = (V / L) × t",
      "i(t) = (V / R) × (1 - e^(-t / (L/R)))"
    ],
    "correctIndex": 3,
    "explanation": "La corriente crece exponencialmente desde cero hasta alcanzar asintóticamente el valor de estado estacionario I_max = V / R.",
    "skill": "Respuesta Temporal RL",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Transitorios en Circuitos",
    "subtopic": "Evolución Exponencial de Corriente"
  },
  {
    "id": "ele-bac-46",
    "sectionId": 10,
    "number": 46,
    "text": "En un circuito RLC serie sin fuente (circuito libre de segundo orden), ¿qué condición entre los parámetros R, L y C determina una respuesta críticamente amortiguada?",
    "options": [
      "R < 2 × √(L / C)",
      "R = 0",
      "R = 2 × √(L / C)",
      "R > 2 × √(L / C)"
    ],
    "correctIndex": 2,
    "explanation": "El amortiguamiento crítico se alcanza cuando el discriminante de la ecuación característica se anula: α = ω₀  →  R / (2L) = 1 / √(LC)  →  R = 2√(L/C). Retorna al reposo en el menor tiempo posible sin oscilaciones.",
    "skill": "Circuitos de Segundo Orden",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Transitorios RLC",
    "subtopic": "Amortiguamiento Crítico"
  },
  {
    "id": "ele-bac-47",
    "sectionId": 10,
    "number": 47,
    "text": "Si en el circuito RLC serie anterior R < 2√(L/C), ¿qué tipo de respuesta temporal presenta el sistema?",
    "options": [
      "Respuesta inestable con amplitud creciente a infinito",
      "Subamortiguada (oscilatoria amortiguada)",
      "Sobreamortiguada (exponencial no oscilatoria lenta)",
      "Oscilación senoidal pura de amplitud constante"
    ],
    "correctIndex": 1,
    "explanation": "Cuando la disipación resistiva es baja, las raíces son complejas conjugadas, produciendo una respuesta sinusoidal amortiguada por una envolvente exponencial decreciente.",
    "skill": "Circuitos de Segundo Orden",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Transitorios RLC",
    "subtopic": "Régimen Subamortiguado"
  },
  {
    "id": "ele-bac-48",
    "sectionId": 10,
    "number": 48,
    "text": "¿Qué parámetro de un amplificador operacional ideal representa su ganancia de tensión en lazo abierto (Aol)?",
    "options": [
      "Infinita (Aol → ∞)",
      "Exactamente 1",
      "Cero (Aol = 0)",
      "100 V/V"
    ],
    "correctIndex": 0,
    "explanation": "En el modelo de amplificador operacional ideal (Op-Amp) se asume ganancia diferencial infinita en lazo abierto, lo que conduce al concepto de cortocircuito virtual en lazo cerrado con realimentación negativa.",
    "skill": "Amplificadores Operacionales",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Electrónica Analógica",
    "subtopic": "Propiedades del Op-Amp Ideal"
  },
  {
    "id": "ele-bac-49",
    "sectionId": 10,
    "number": 49,
    "text": "¿Cuáles son las dos 'reglas de oro' del amplificador operacional ideal operando en lazo cerrado con realimentación negativa?",
    "options": [
      "1) La ganancia es cero; 2) La corriente de salida es siempre nula",
      "1) La tensión de salida es igual a la de alimentación; 2) La resistencia de entrada es 0 Ω",
      "1) No disipa energía; 2) Solo funciona con pulsos digitales",
      "1) Las corrientes en ambas entradas son nulas (I+ = I- = 0); 2) La diferencia de tensión entre las entradas es cero (V+ = V-)"
    ],
    "correctIndex": 3,
    "explanation": "Debido a la impedancia de entrada infinita no entra corriente a los pines (I+ = I- = 0), y debido a la ganancia infinita con realimentación negativa, la entrada no inversora e inversora se igualan en tensión (tierra virtual).",
    "skill": "Reglas de Op-Amps",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Electrónica Analógica",
    "subtopic": "Reglas de Cortocircuito Virtual"
  },
  {
    "id": "ele-bac-50",
    "sectionId": 10,
    "number": 50,
    "text": "En un amplificador inversor con amplificador operacional, si la resistencia de entrada es R1 = 10 kΩ y la de realimentación es Rf = 100 kΩ, ¿cuál es la ganancia de tensión Av = Vout / Vin?",
    "options": [
      "-0.1",
      "-11",
      "-10",
      "+10"
    ],
    "correctIndex": 2,
    "explanation": "Para la configuración inversora: Av = -Rf / R1 = -100 kΩ / 10 kΩ = -10. El signo negativo indica una inversión de fase de 180°.",
    "skill": "Circuitos con Op-Amps",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Amplificador Inversor",
    "subtopic": "Cálculo de Ganancia Av"
  },
  {
    "id": "ele-bac-51",
    "sectionId": 10,
    "number": 51,
    "text": "¿Cuál es la ganancia de tensión (Av) de un amplificador no inversor configurado con R1 = 10 kΩ a tierra y Rf = 90 kΩ en realimentación?",
    "options": [
      "-9",
      "+10",
      "+9",
      "+1"
    ],
    "correctIndex": 1,
    "explanation": "En la configuración no inversora: Av = 1 + (Rf / R1) = 1 + (90 kΩ / 10 kΩ) = 1 + 9 = +10.",
    "skill": "Circuitos con Op-Amps",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Amplificador No Inversor",
    "subtopic": "Ganancia No Inversora"
  },
  {
    "id": "ele-bac-52",
    "sectionId": 10,
    "number": 52,
    "text": "¿Qué circuito con amplificador operacional tiene una ganancia de tensión exactamente igual a la unidad (Av = +1) y una impedancia de entrada altísima, utilizándose para aislar etapas?",
    "options": [
      "Seguidor de tensión (o buffer de ganancia unitaria)",
      "Diferenciador ideal",
      "Comparador con histeresis",
      "Oscilador puente de Wien"
    ],
    "correctIndex": 0,
    "explanation": "Conectando la salida directamente a la entrada inversora (Rf = 0), Av = 1. Presenta resistencia de entrada prácticamente infinita y de salida nula, eliminando por completo el efecto de carga.",
    "skill": "Buffer de Tensión",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Op-Amps",
    "subtopic": "Seguidor de Voltaje"
  },
  {
    "id": "ele-bac-53",
    "sectionId": 10,
    "number": 53,
    "text": "En un amplificador sumador inversor de tres entradas con resistencias idénticas R en las entradas y Rf = R en realimentación, ¿cuál es la tensión de salida Vout?",
    "options": [
      "Vout = (V1 + V2 + V3) / 3",
      "Vout = V1 × V2 × V3",
      "Vout = V1 + V2 - V3",
      "Vout = -(V1 + V2 + V3)"
    ],
    "correctIndex": 3,
    "explanation": "Por superposición en el nodo de tierra virtual: I = V1/R + V2/R + V3/R, produciendo en la salida una tensión Vout = -Rf·I = -(V1 + V2 + V3).",
    "skill": "Circuitos de Cálculo Analógico",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Op-Amps",
    "subtopic": "Sumador Inversor"
  },
  {
    "id": "ele-bac-54",
    "sectionId": 10,
    "number": 54,
    "text": "¿Qué operación matemática realiza sobre la señal de entrada Vin(t) un amplificador operacional que posee una resistencia R a la entrada y un condensador C en la rama de realimentación?",
    "options": [
      "Multiplicación cuadrática",
      "Conversión directa analógico-digital",
      "Integración temporal: Vout(t) = - (1 / (R·C)) ∫ Vin(t) dt",
      "Derivación matemática: Vout(t) = - R·C (dVin / dt)"
    ],
    "correctIndex": 2,
    "explanation": "Al circular la corriente de entrada I = Vin / R por el condensador en realimentación (I = -C·dVout/dt), se obtiene la integral en el tiempo de la tensión aplicada.",
    "skill": "Cálculo Analógico",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Op-Amps",
    "subtopic": "Integrador Analógico"
  },
  {
    "id": "ele-bac-55",
    "sectionId": 10,
    "number": 55,
    "text": "En un comparador con histeresis (Trigger de Schmitt) inversor, ¿cuál es la función de incorporar realimentación positiva?",
    "options": [
      "Generar ondas senoidales puras",
      "Evitar conmutaciones espurias y oscilaciones de salida ocasionadas por ruido superimposed en la señal de entrada",
      "Aumentar la ganancia de la señal a infinito en régimen lineal",
      "Reducir el consumo de energía a cero"
    ],
    "correctIndex": 1,
    "explanation": "La histéresis define dos umbrales de conmutación distintos (V_alto y V_bajo); una vez que conmuta, el ruido que no supere la ventana de histéresis no puede hacer fluctuar erráticamente la salida.",
    "skill": "Disparadores de Schmitt",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "No Linealidad en Op-Amps",
    "subtopic": "Histéresis y Rechazo de Ruido"
  },
  {
    "id": "ele-bac-56",
    "sectionId": 10,
    "number": 56,
    "text": "¿Cuál es la función del optoacoplador (aislador óptico) en un circuito de interfaz de potencia?",
    "options": [
      "Aislar galvánicamente el circuito digital de baja tensión respecto a tensiones peligrosas de la etapa de potencia mediante luz infrarroja",
      "Medir la distancia física entre componentes",
      "Convertir energía solar en electricidad",
      "Generar luz visible decorativa en el tablero"
    ],
    "correctIndex": 0,
    "explanation": "Un optoacoplador integra un LED infrarrojo y un fototransistor en un encapsulado estanco, transmitiendo la señal únicamente a través de fotones y soportando diferencias de potencial de miles de voltios entre primario y secundario.",
    "skill": "Aislamiento Galvánico",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Optoelectrónica",
    "subtopic": "Optoacopladores"
  },
  {
    "id": "ele-bac-57",
    "sectionId": 10,
    "number": 57,
    "text": "¿Qué semiconductor de cuatro capas (p-n-p-n) conduce corriente anódica únicamente tras recibir un pulso positivo en su compuerta (Gate) y permanece conduciendo hasta que la corriente caiga por debajo de la corriente de mantenimiento (Ih)?",
    "options": [
      "Transistor MOSFET de canal N",
      "Diodo Zener de precisión",
      "Transistor BJT tipo PNP",
      "Tiristor (o Rectificador Controlado de Silicio - SCR)"
    ],
    "correctIndex": 3,
    "explanation": "El SCR es un interruptor estático de retención biestable: un pulso en el Gate lo enciende (cebado), y permanece cerrado de forma autónoma hasta que el circuito exterior anule su corriente (I < Ih) o invierta la tensión ánodo-cátodo.",
    "skill": "Tiristores de Potencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Electrónica de Potencia",
    "subtopic": "Tiristor SCR"
  },
  {
    "id": "ele-bac-58",
    "sectionId": 10,
    "number": 58,
    "text": "¿Qué dispositivo semiconductor triac puede cebarse y conducir corriente en AMBOS sentidos de la onda senoidal, siendo la base de los atenuadores de luz (dimmers) domiciliarios?",
    "options": [
      "Transistor Darlington",
      "IGBT",
      "TRIAC (Triode for Alternating Current)",
      "Diodo Schotkky"
    ],
    "correctIndex": 2,
    "explanation": "El TRIAC equivale funcionalmente a dos tiristores en antiparalelo con compuerta común, permitiendo el control de fase en corriente alterna tanto en el semiciclo positivo como en el negativo.",
    "skill": "Control de Fase en CA",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Tiristores Bidireccionales",
    "subtopic": "TRIAC y Dimmers"
  },
  {
    "id": "ele-bac-59",
    "sectionId": 10,
    "number": 59,
    "text": "¿Qué componente de dos terminales se utiliza habitualmente en serie con la compuerta de un TRIAC para suministrar pulsos de disparo nítidos y simétricos una vez alcanzada su tensión de ruptura (Vbo ≈ 32 V)?",
    "options": [
      "Capacitor electrolítico polarizado",
      "DIAC",
      "Termistor PTC",
      "Bobina de choque"
    ],
    "correctIndex": 1,
    "explanation": "El DIAC es un diodo de disparo bidireccional que no conduce hasta alcanzar su tensión de cebado (típicamente ±30-35 V), momento en el que conmuta abruptamente inyectando una ráfaga de corriente al gate del TRIAC.",
    "skill": "Dispositivos de Disparo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Control de Potencia",
    "subtopic": "DIAC y Disparo de TRIACs"
  },
  {
    "id": "ele-bac-60",
    "sectionId": 10,
    "number": 60,
    "text": "¿Cuál es la principal ventaja de un transistor de efecto de campo metal-óxido-semiconductor (MOSFET) frente a un transistor bipolar (BJT) en aplicaciones de conmutación rápida?",
    "options": [
      "Se controla por tensión en la compuerta prácticamente sin demandar corriente de entrada en continua (impedancia de compuerta gigantesca)",
      "Tiene un costo diez veces menor que un cable de cobre",
      "No disipa calor bajo ninguna condición",
      "Es completamente inmune a la electricidad estática"
    ],
    "correctIndex": 0,
    "explanation": "A diferencia del BJT que requiere corriente continua constante en su base para mantenerse en saturación, la compuerta aislada por dióxido de silicio del MOSFET solo requiere carga electrostática para conmutar, reduciendo drásticamente las pérdidas de mando.",
    "skill": "Transistores de Efecto de Campo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Semiconductores de Potencia",
    "subtopic": "MOSFET vs BJT"
  },
  {
    "id": "ele-bac-61",
    "sectionId": 10,
    "number": 61,
    "text": "¿Qué transistor híbrido combina la sencilla excitación por tensión de compuerta de un MOSFET con la elevada capacidad de conducción de corriente y baja caída en saturación de un BJT?",
    "options": [
      "JFET",
      "UJT (Transistor Unijuntura)",
      "Fototiristor",
      "IGBT (Insulated Gate Bipolar Transistor)"
    ],
    "correctIndex": 3,
    "explanation": "El IGBT es el dispositivo dominante en variadores de frecuencia, inversores de vehículos eléctricos y tracción ferroviaria por aunar control por tensión y gran robustez a altas tensiones y corrientes.",
    "skill": "Dispositivos de Potencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Semiconductores",
    "subtopic": "Transistor IGBT"
  },
  {
    "id": "ele-bac-62",
    "sectionId": 10,
    "number": 62,
    "text": "¿Cómo se define la frecuencia de corte a -3 dB (f_c) en un filtro pasivo pasa-bajos RC de primer orden?",
    "options": [
      "f_c = R / (2 × π × C)",
      "f_c = C / (2 × π × R)",
      "f_c = 1 / (2 × π × R × C)",
      "f_c = 2 × π × R × C"
    ],
    "correctIndex": 2,
    "explanation": "En la frecuencia de corte la reactancia del capacitor iguala a la resistencia (XC = R), reduciendo la ganancia de tensión a 1/√2 ≈ 0.707 (-3 dB) respecto a su valor en banda pasante.",
    "skill": "Filtros Pasivos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Procesamiento de Señales",
    "subtopic": "Frecuencia de Corte en Filtro RC"
  },
  {
    "id": "ele-bac-63",
    "sectionId": 10,
    "number": 63,
    "text": "En un filtro pasa-bajos RC de primer orden, ¿a qué tasa atenúa las frecuencias muy superiores a la frecuencia de corte (en el gráfico de Bode de magnitud)?",
    "options": [
      "-3 dB por década",
      "-20 dB por década (-6 dB por octava)",
      "-40 dB por década",
      "-60 dB por década"
    ],
    "correctIndex": 1,
    "explanation": "Cada polo simple en la función de transferencia aporta una pendiente asintótica de caída de -20 dB por década (disminución de amplitud por un factor de 10 al aumentar la frecuencia 10 veces).",
    "skill": "Diagramas de Bode",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Respuesta en Frecuencia",
    "subtopic": "Pendiente Asintótica de Primer Orden"
  },
  {
    "id": "ele-bac-64",
    "sectionId": 10,
    "number": 64,
    "text": "¿Qué tipo de oscilador senoidal utiliza un puente resistivo-capacitivo de cuatro ramas para fijar una frecuencia estable sin requerir inductores?",
    "options": [
      "Oscilador de puente de Wien",
      "Oscilador Colpitts",
      "Oscilador Hartley",
      "Oscilador Clapp"
    ],
    "correctIndex": 0,
    "explanation": "El oscilador de puente de Wien emplea una red RC serie-paralelo cuya desfase nulo ocurre a f = 1/(2πRC) con una atenuación de 1/3, requiriendo un amplificador no inversor de ganancia exactamente 3 para sostener la oscilación.",
    "skill": "Osciladores Senoidales",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Generación de Señales",
    "subtopic": "Oscilador Puente de Wien"
  },
  {
    "id": "ele-bac-65",
    "sectionId": 10,
    "number": 65,
    "text": "¿Qué oscilador de radiofrecuencia (RF) se distingue por emplear un divisor de tensión capacitivo en su circuito resonante LC sintonizado?",
    "options": [
      "Oscilador Hartley",
      "Oscilador astable 555",
      "Generador por desfase RC",
      "Oscilador Colpitts"
    ],
    "correctIndex": 3,
    "explanation": "El oscilador Colpitts utiliza un tanque resonante con una inductancia y dos condensadores en serie que actúan como divisor de tensión para proveer la realimentación regenerativa.",
    "skill": "Osciladores de RF",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos Resonantes",
    "subtopic": "Oscilador Colpitts"
  },
  {
    "id": "ele-bac-66",
    "sectionId": 10,
    "number": 66,
    "text": "¿Qué oscilador de radiofrecuencia se caracteriza por utilizar una bobina con toma intermedia (inductor dividido) en su lazo resonante?",
    "options": [
      "Oscilador Pierce con cristal",
      "Oscilador de relajación",
      "Oscilador Hartley",
      "Oscilador Colpitts"
    ],
    "correctIndex": 2,
    "explanation": "A diferencia del Colpitts (divisor capacitivo), el oscilador Hartley utiliza una bobina con derivación central para tomar la tensión de realimentación.",
    "skill": "Osciladores de RF",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos Resonantes",
    "subtopic": "Oscilador Hartley"
  },
  {
    "id": "ele-bac-67",
    "sectionId": 10,
    "number": 67,
    "text": "¿Por qué los osciladores que utilizan un cristal de cuarzo piezoeléctrico son los preferidos en sistemas de microcontroladores y relojería?",
    "options": [
      "Porque pueden cambiar de frecuencia a voluntad sin componentes externos",
      "Porque el cristal de cuarzo ofrece un factor de calidad (Q) inmensamente alto (del orden de 10⁴ a 10⁶), otorgando una estabilidad de frecuencia insuperable",
      "Porque no consumen nada de silicio",
      "Porque el cuarzo genera corriente continua de alta potencia"
    ],
    "correctIndex": 1,
    "explanation": "El efecto piezoeléctrico en el cuarzo proporciona una resonancia electromecánica de precisión microscópica con derivas térmicas mínimas y factores Q de varios órdenes de magnitud superiores a circuitos LC discretos.",
    "skill": "Osciladores a Cristal",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Piezoelectricidad",
    "subtopic": "Estabilidad del Cristal de Cuarzo"
  },
  {
    "id": "ele-bac-68",
    "sectionId": 10,
    "number": 68,
    "text": "¿Cuál es la expresión que calcula la impedancia característica (Z₀) de una línea de transmisión ideal sin pérdidas con inductancia por unidad de longitud L y capacitancia por unidad de longitud C?",
    "options": [
      "Z₀ = √(L / C)",
      "Z₀ = √(C / L)",
      "Z₀ = 1 / √(L × C)",
      "Z₀ = L × C"
    ],
    "correctIndex": 0,
    "explanation": "En líneas de transmisión de radiofrecuencia (como cables coaxiales de 50 Ω o 75 Ω), la impedancia característica de onda en régimen sin pérdidas es una resistencia pura dada por Z₀ = √(L/C).",
    "skill": "Líneas de Transmisión",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Propagación Guiada",
    "subtopic": "Impedancia Característica Z0"
  },
  {
    "id": "ele-bac-69",
    "sectionId": 10,
    "number": 69,
    "text": "¿Qué ocurre si una línea de transmisión de radiofrecuencia con impedancia característica Z₀ se conecta a una antena cuya impedancia de carga Z_L es exactamente igual a Z₀?",
    "options": [
      "Toda la onda es reflejada de regreso al transmisor",
      "La onda estacionaria alcanza el valor infinito",
      "El cable se calienta hasta fundirse",
      "No existe onda reflejada (coeficiente de reflexión Γ = 0); toda la energía es transferida y absorbida por la antena"
    ],
    "correctIndex": 3,
    "explanation": "El acoplamiento de impedancias perfecto (ZL = Z0) elimina las reflexiones (ROE = 1:1), logrando máxima eficiencia de radiación y evitando ondas estacionarias dañinas en la etapa de potencia.",
    "skill": "Adaptación de Impedancias",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Líneas de RF",
    "subtopic": "Reflexión y Coeficiente Gamma"
  },
  {
    "id": "ele-bac-70",
    "sectionId": 10,
    "number": 70,
    "text": "¿Cuál es el valor de la Relación de Onda Estacionaria de Tensión (VSWR o ROE) en una línea de transmisión en condición de adaptación perfecta sin reflexiones?",
    "options": [
      "Infinito (∞)",
      "2.0",
      "1.0 (ó 1:1)",
      "0.0"
    ],
    "correctIndex": 2,
    "explanation": "ROE = (1 + |Γ|) / (1 - |Γ|). Para reflexión nula |Γ| = 0, ROE = 1.0, lo que representa la transmisión óptima sin pérdidas por desadaptación.",
    "skill": "Líneas de Transmisión",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Ondas Estacionarias",
    "subtopic": "Valor Ideal de ROE"
  },
  {
    "id": "ele-bac-71",
    "sectionId": 10,
    "number": 71,
    "text": "En la técnica de Modulación por Ancho de Pulso (PWM), ¿qué parámetro de la onda de frecuencia fija se varía para modular la potencia promedio entregada a la carga?",
    "options": [
      "La forma sinusoidal del semiciclo",
      "El ciclo de trabajo (Duty Cycle, porcentaje de tiempo en estado ALTO)",
      "La amplitud del voltaje pico",
      "La frecuencia fundamental de conmutación"
    ],
    "correctIndex": 1,
    "explanation": "En PWM la frecuencia se mantiene constante mientras se modifica la proporción entre el tiempo encendido (t_on) y el periodo (T): Duty Cycle = t_on / T. La tensión continua promedio resultante es V_prom = Duty × V_max.",
    "skill": "Modulación PWM",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Control de Potencia",
    "subtopic": "Ciclo de Trabajo en PWM"
  },
  {
    "id": "ele-bac-72",
    "sectionId": 10,
    "number": 72,
    "text": "Si se aplica una señal PWM de 12 V de amplitud con un ciclo de trabajo del 25% a un motor de corriente continua, ¿cuál es el voltaje medio efectivo equivalente percibido por el motor?",
    "options": [
      "3 V",
      "6 V",
      "9 V",
      "12 V"
    ],
    "correctIndex": 0,
    "explanation": "V_prom = Duty × V_fuente = 0.25 × 12 V = 3.0 V.",
    "skill": "Cálculo de PWM",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Control de Motores CC",
    "subtopic": "Tensión Promedio en PWM"
  },
  {
    "id": "ele-bac-73",
    "sectionId": 10,
    "number": 73,
    "text": "¿Qué configuración de cuatro transistores de conmutación (dispuestos en forma de H) permite controlar tanto la velocidad mediante PWM como el sentido de giro bidireccional de un motor de CC?",
    "options": [
      "Puente de Wheatstone",
      "Puente de Wien",
      "Puente de Maxwell",
      "Puente H (H-Bridge)"
    ],
    "correctIndex": 3,
    "explanation": "El puente H conmuta en pares diagonales (Q1-Q4 para avance, Q2-Q3 para retroceso), invirtiendo la polaridad aplicada a las terminales del motor sin necesidad de fuentes de tensión simétricas.",
    "skill": "Control de Motores",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Accionamientos de CC",
    "subtopic": "Topología de Puente H"
  },
  {
    "id": "ele-bac-74",
    "sectionId": 10,
    "number": 74,
    "text": "¿Qué condición peligrosa (cortocircuito letal de la fuente) ocurre en un puente H si por error de software o conmutación se activan simultáneamente los dos transistores de la misma rama vertical?",
    "options": [
      "Oscilación paramétrica",
      "Bloqueo por histéresis",
      "Shoot-through (corriente de disparo pasante cruzada)",
      "Resonancia ferroeléctrica"
    ],
    "correctIndex": 2,
    "explanation": "El shoot-through conecta el carril positivo directamente a tierra a través de los dos transistores con resistencia despreciable, destruyendo instantáneamente los semiconductores por corriente descontrolada.",
    "skill": "Seguridad en Puentes H",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Electrónica de Potencia",
    "subtopic": "Shoot-Through y Tiempo Muerto"
  },
  {
    "id": "ele-bac-75",
    "sectionId": 10,
    "number": 75,
    "text": "¿Cómo previenen los controladores modernos de compuerta (gate drivers) el fenómeno de 'shoot-through' en convertidores de potencia e inversores?",
    "options": [
      "Inundando la placa en nitrógeno líquido",
      "Insertando un tiempo muerto programado (Dead Time) entre el apagado de un interruptor y el encendido del complementario",
      "Aumentando el voltaje de alimentación al doble",
      "Eliminando los transistores de la rama inferior"
    ],
    "correctIndex": 1,
    "explanation": "El Dead Time garantiza que el transistor que estaba conduciendo se apague completamente antes de dar la orden de encendido al transistor opuesto de la misma rama.",
    "skill": "Diseño de Gate Drivers",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Electrónica de Potencia",
    "subtopic": "Tiempo Muerto (Dead Time)"
  },
  {
    "id": "ele-bac-76",
    "sectionId": 10,
    "number": 76,
    "text": "¿Qué convertidor estático de corriente continua a corriente continua (DC-DC) entrega una tensión de salida menor que la tensión de entrada con alta eficiencia mediante inductancia de acumulación?",
    "options": [
      "Convertidor reductor (Buck converter)",
      "Convertidor elevador (Boost converter)",
      "Inversor trifásico PWM",
      "Cicloconvertidor"
    ],
    "correctIndex": 0,
    "explanation": "El convertidor reductor Buck conmuta un transistor a alta frecuencia alimentando una bobina y un capacitor de salida, obteniendo Vo = D × Vi (con rendimiento típicamente > 90%).",
    "skill": "Fuentes Conmutadas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Convertidores DC-DC",
    "subtopic": "Convertidor Reductor Buck"
  },
  {
    "id": "ele-bac-77",
    "sectionId": 10,
    "number": 77,
    "text": "¿Qué convertidor conmutado DC-DC entrega una tensión de salida regulada mayor que la tensión de entrada (Vo > Vi)?",
    "options": [
      "Convertidor Buck",
      "Transformador monofásico lineal",
      "Regulador lineal 7805",
      "Convertidor elevador (Boost converter)"
    ],
    "correctIndex": 3,
    "explanation": "En el convertidor Boost, al abrirse el interruptor, la fem autoinducida en la bobina se suma en serie a la tensión de entrada a través de un diodo rápido, cargando el capacitor a un voltaje Vo = Vi / (1 - D).",
    "skill": "Fuentes Conmutadas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Convertidores DC-DC",
    "subtopic": "Convertidor Elevador Boost"
  },
  {
    "id": "ele-bac-78",
    "sectionId": 10,
    "number": 78,
    "text": "¿Por qué los reguladores lineales clásicos (como la serie 7805) tienen un rendimiento energético muy pobre cuando existe gran diferencia entre Vin y Vout?",
    "options": [
      "Porque el silicio se ioniza en frío",
      "Porque consumen potencia reactiva en corriente continua",
      "Porque el transistor de paso interno disipa el exceso de tensión multiplicada por la corriente íntegramente en calor: P_dis = (Vin - Vout) × I_out",
      "Porque reflejan la energía de regreso hacia el tomacorriente"
    ],
    "correctIndex": 2,
    "explanation": "Un 7805 alimentado con 12 V entregando 1 A disipa (12 V - 5 V) × 1 A = 7 W en calor puro para entregar solo 5 W a la carga, lo que arroja una eficiencia de apenas 41%.",
    "skill": "Regulación Lineal",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Fuentes de Alimentación",
    "subtopic": "Disipación Térmica en Reguladores Lineales"
  },
  {
    "id": "ele-bac-79",
    "sectionId": 10,
    "number": 79,
    "text": "En un circuito trifásico con cuatro conductores (tres fases y un neutro), si las tres fases tienen cargas lineales puramente resistivas y perfectamente idénticas (equilibradas), ¿cuál es la corriente neta en el neutro?",
    "options": [
      "La mitad de una corriente de fase",
      "Cero amperios (In = 0)",
      "El triple de la corriente de fase",
      "La suma algebraica simple de las tres fases"
    ],
    "correctIndex": 1,
    "explanation": "Al estar las tres corrientes desfasadas simétricamente 120° con igual magnitud, su suma fasorial vectorial en el nodo común de neutro es idénticamente cero (I_a + I_b + I_c = 0).",
    "skill": "Sistemas Trifásicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Cargas Equilibradas",
    "subtopic": "Corriente Nula en Neutro Equilibrado"
  },
  {
    "id": "ele-bac-80",
    "sectionId": 10,
    "number": 80,
    "text": "¿Qué método de medición emplea únicamente DOS vatímetros monofásicos para medir la potencia activa total en cualquier sistema trifásico de tres hilos (con o sin neutro accesible)?",
    "options": [
      "Método de Aaron (método de los dos vatímetros)",
      "Método de Blondel de cuatro hilos",
      "Método del puente de Thomson",
      "Método potenciométrico"
    ],
    "correctIndex": 0,
    "explanation": "El método de Aaron conecta las bobinas de corriente en dos fases y las bobinas voltimétricas referenciadas a la tercera fase. La potencia activa trifásica total es la suma algebraica P = W1 + W2.",
    "skill": "Mediciones Trifásicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Medida de Potencia",
    "subtopic": "Método de Aaron con Dos Vatímetros"
  },
  {
    "id": "ele-bac-81",
    "sectionId": 10,
    "number": 81,
    "text": "En el método de Aaron para un sistema trifásico equilibrado con carga resistivo-inductiva, si el factor de potencia de la carga es exactamente FP = 0.5 (desfase φ = 60°), ¿qué indica uno de los vatímetros?",
    "options": [
      "Ambos vatímetros marcan lecturas idénticas positivas",
      "Uno de los vatímetros explota por inversión de fase",
      "Ambos vatímetros marcan lecturas negativas",
      "Uno de los vatímetros marca exactamente cero vatios (W2 = 0) y el otro registra toda la potencia activa total"
    ],
    "correctIndex": 3,
    "explanation": "En Aaron W1 = VL·IL·cos(30°-φ) y W2 = VL·IL·cos(30°+φ). Para φ = 60°, W2 = VL·IL·cos(90°) = 0, y W1 = VL·IL·cos(-30°) = P_total.",
    "skill": "Método de Aaron",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Vatímetros en Sistemas Trifásicos",
    "subtopic": "Lectura Nula con FP = 0.5"
  },
  {
    "id": "ele-bac-82",
    "sectionId": 10,
    "number": 82,
    "text": "Si en el método de Aaron el factor de potencia es menor a 0.5 (desfase φ > 60°), ¿qué comportamiento presenta la lectura de uno de los vatímetros?",
    "options": [
      "Mide potencia aparente en voltiamperios",
      "Duplica su lectura automáticamente",
      "Marca una lectura negativa (la aguja o valor desciende por debajo de cero), requiriéndose restar su lectura para obtener la potencia total: P = W1 - |W2|",
      "Se bloquea permanentemente a fondo de escala"
    ],
    "correctIndex": 2,
    "explanation": "Para φ > 60°, 30° + φ > 90°, haciendo que cos(30°+φ) sea negativo. En instrumentos analógicos se invertían los terminales voltimétricos para medir el valor y luego restarlo algebraicamente.",
    "skill": "Método de Aaron",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Vatímetros en Sistemas Trifásicos",
    "subtopic": "Lectura Negativa con Bajo Factor de Potencia"
  },
  {
    "id": "ele-bac-83",
    "sectionId": 10,
    "number": 83,
    "text": "¿Cuál es la expresión que calcula la reactancia capacitiva equivalente cuando dos condensadores de 20 µF están en serie y se alimentan a 60 Hz?",
    "options": [
      "XC_eq ≈ 50 Ω",
      "XC_eq ≈ 265.25 Ω (con C_eq = 10 µF)",
      "XC_eq ≈ 132.6 Ω",
      "XC_eq ≈ 530.5 Ω"
    ],
    "correctIndex": 1,
    "explanation": "C_eq = 20/2 = 10 µF = 10⁻⁵ F. XC = 1 / (2π × 60 × 10⁻⁵) = 1 / (3.7699 × 10⁻³) ≈ 265.25 Ω.",
    "skill": "Cálculos de Reactancia",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Circuitos en CA",
    "subtopic": "Reactancia Capacitiva Equivalente"
  },
  {
    "id": "ele-bac-84",
    "sectionId": 10,
    "number": 84,
    "text": "¿Qué fenómeno electrostático ocurre cuando la intensidad de campo eléctrico en el aire alrededor de un conductor de muy alta tensión supera la rigidez dieléctrica del aire (aprox. 30 kV/cm), produciendo ionización luminosa y zumbido?",
    "options": [
      "Efecto Corona",
      "Efecto Kelvin (efecto piel)",
      "Efecto Seebeck",
      "Efecto Hall"
    ],
    "correctIndex": 0,
    "explanation": "El efecto corona es la descarga luminiscente parcial en el aire circundante a conductores de extra alta tensión provocada por la ionización del gas, acarreando pérdidas de potencia y ruido radioeléctrico.",
    "skill": "Líneas de Alta Tensión",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Transmisión Eléctrica",
    "subtopic": "Efecto Corona"
  },
  {
    "id": "ele-bac-85",
    "sectionId": 10,
    "number": 85,
    "text": "¿Por qué en líneas de transmisión de alta frecuencia la densidad de corriente se concentra preferentemente en la superficie periférica del conductor (Efecto Piel o Efecto Kelvin)?",
    "options": [
      "Porque los electrones se repelen gravitatoriamente hacia el aire exterior",
      "Por la fuerza centrífuga de rotación del planeta",
      "Porque el cobre central pierde su conductividad al calentarse",
      "Debido a que las fuerzas contraelectromotrices generadas por las líneas de flujo magnético interno se oponen con mayor intensidad en el centro del conductor"
    ],
    "correctIndex": 3,
    "explanation": "El flujo magnético interno concatena más corriente en el centro del conductor que en su periferia, generando mayor reactancia inductiva en el núcleo y obligando a los electrones a circular por la capa exterior.",
    "skill": "Efecto Pelicular",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Líneas de Alta Frecuencia",
    "subtopic": "Efecto Kelvin o Efecto Piel"
  },
  {
    "id": "ele-bac-86",
    "sectionId": 10,
    "number": 86,
    "text": "¿Cómo se calcula la profundidad de penetración (skin depth, δ) del efecto pelicular en un conductor?",
    "options": [
      "δ = 1 / (2 × π × f × L)",
      "δ = f² / (ρ × μ)",
      "δ = √(ρ / (π × f × μ))",
      "δ = ρ × f × μ"
    ],
    "correctIndex": 2,
    "explanation": "La profundidad de piel δ disminuye con la raíz de la frecuencia; a frecuencias de radio o microondas es de unas pocas micras, justificando el uso de conductores huecos o plateados superficialmente.",
    "skill": "Efecto Pelicular",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría Electromagnética",
    "subtopic": "Profundidad de Penetración"
  },
  {
    "id": "ele-bac-87",
    "sectionId": 10,
    "number": 87,
    "text": "En un rectificador trifásico de onda completa no controlado de 6 diodos (puente de Graetz trifásico), ¿cuál es el orden del armónico dominante de menor orden que aparece en la corriente de la línea de CA?",
    "options": [
      "El 12.° armónico únicamente",
      "El 5.° armónico (h = 5) y el 7.° armónico (h = 7)",
      "El 2.° armónico",
      "El 3.er armónico"
    ],
    "correctIndex": 1,
    "explanation": "En un puente rectificador de p = 6 pulsos, los armónicos característicos de línea vienen dados por h = k·p ± 1 (para k=1: 6 ± 1 = 5.° y 7.°; para k=2: 12 ± 1 = 11.° y 13.°).",
    "skill": "Armónicos en Redes",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Calidad de Energía",
    "subtopic": "Armónicos de Convertidores de 6 Pulsos"
  },
  {
    "id": "ele-bac-88",
    "sectionId": 10,
    "number": 88,
    "text": "¿Por qué los armónicos impares múltiplos de tres (armónicos triplen: 3.°, 9.°, 15.°...) son particularmente problemáticos en sistemas trifásicos con neutro?",
    "options": [
      "Porque están en fase entre sí en las tres líneas y no se cancelan en el neutro, sino que se suman directamente en él pudiendo sobrecalentar e incendiar el conductor neutro",
      "Porque aceleran los motores trifásicos al triple de su velocidad",
      "Porque anulan el campo magnético de la Tierra",
      "Porque reducen la tensión de línea a cero voltios"
    ],
    "correctIndex": 0,
    "explanation": "Los armónicos triplen son de secuencia homopolar (cero); las corrientes del 3.er armónico de las tres fases coinciden en fase temporal, sumándose In = 3 × I_3 en el neutro, que puede transportar más corriente que las fases.",
    "skill": "Armónicos Triplen",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Calidad de Energía",
    "subtopic": "Armónicos de Tercer Orden en el Neutro"
  },
  {
    "id": "ele-bac-89",
    "sectionId": 10,
    "number": 89,
    "text": "¿Qué índice cuantitativo mide la distorsión global de una onda de tensión o corriente respecto a una senoidal pura?",
    "options": [
      "RMS (Root Mean Square)",
      "Crest Factor (Factor de cresta)",
      "dBm (Decibel-milivatio)",
      "THD (Total Harmonic Distortion o Distorsión Armónica Total)"
    ],
    "correctIndex": 3,
    "explanation": "El THD se define como el cociente porcentual entre el valor RMS de la suma de todas las componentes armónicas superiores y el valor RMS de la componente fundamental: THD = √(∑ I_h²) / I_1 × 100%.",
    "skill": "Calidad de Potencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Análisis de Distorsión",
    "subtopic": "Definición de THD"
  },
  {
    "id": "ele-bac-90",
    "sectionId": 10,
    "number": 90,
    "text": "En una máquina sincrónica conectada a una gran red eléctrica, ¿qué sucede si se sobreexcita su devanado de campo rotórico con corriente continua?",
    "options": [
      "Se detiene bruscamente perdiendo el sincronismo",
      "Se convierte en un generador de corriente continua",
      "Entrega potencia reactiva capacitiva a la red (opera con factor de potencia en adelanto)",
      "Absorbe potencia reactiva inductiva masiva de la red"
    ],
    "correctIndex": 2,
    "explanation": "La sobreexcitación de una máquina sincrónica eleva su fem inducida Ef por encima de la tensión de red V, actuando como un condensador síncrono que suministra potencia reactiva (+Q) para estabilizar la tensión del sistema.",
    "skill": "Máquinas Síncronas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Compensación Síncrona",
    "subtopic": "Efecto de la Sobreexcitación"
  },
  {
    "id": "ele-bac-91",
    "sectionId": 10,
    "number": 91,
    "text": "¿Cuál es la principal ventaja de utilizar un autotransformador frente a un transformador convencional de dos devanados aislados cuando la relación de tensiones es cercana a 1 (ej. de 120 V a 140 V)?",
    "options": [
      "Inmunidad a cortocircuitos externos",
      "Menor tamaño, menor peso, menor costo y mayor rendimiento, al compartir parte del devanado de forma común",
      "Aislamiento galvánico de alta tensión entre primario y secundario",
      "Eliminación total del campo magnético"
    ],
    "correctIndex": 1,
    "explanation": "En un autotransformador, parte de la potencia se transfiere por conducción galvánica directa y solo una fracción por inducción magnética, lo que reduce drásticamente la masa de hierro y cobre cuando la relación V1/V2 es próxima a 1.",
    "skill": "Autotransformadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Máquinas Estáticas",
    "subtopic": "Eficiencia y Tamaño de Autotransformadores"
  },
  {
    "id": "ele-bac-92",
    "sectionId": 10,
    "number": 92,
    "text": "¿Cuál es la principal desventaja de seguridad de un autotransformador respecto a un transformador común?",
    "options": [
      "Carece de aislamiento galvánico entre el primario y el secundario; una falla o apertura del común puede transmitir la tensión más alta al circuito de baja tensión",
      "No funciona con corriente alterna",
      "Tiene un rendimiento térmico del 10%",
      "No permite el paso de frecuencias de 60 Hz"
    ],
    "correctIndex": 0,
    "explanation": "Al haber conexión eléctrica física directa entre la entrada y la salida, no existe barrera de aislamiento; si se interrumpe la sección común, la carga de baja queda expuesta a la tensión total de alta.",
    "skill": "Seguridad en Autotransformadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Máquinas Estáticas",
    "subtopic": "Ausencia de Aislamiento Galvánico"
  },
  {
    "id": "ele-bac-93",
    "sectionId": 10,
    "number": 93,
    "text": "¿Qué parámetro de un núcleo ferromagnético representa la inducción magnética remanente (Br) que queda en el material cuando la fuerza magnetizante H se reduce a cero?",
    "options": [
      "Fuerza coercitiva Hc",
      "Permeabilidad relativa inicial",
      "Punto de saturación B_sat",
      "Magnetismo remanente (o remanencia magnética Br)"
    ],
    "correctIndex": 3,
    "explanation": "La remanencia Br es la densidad de flujo residual retenida por los dominios ferromagnéticos tras cesar el campo excitador externo, fundamental para la fabricación de imanes permanentes.",
    "skill": "Materiales Magnéticos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Ciclo de Histéresis",
    "subtopic": "Remanencia Magnética Br"
  },
  {
    "id": "ele-bac-94",
    "sectionId": 10,
    "number": 94,
    "text": "¿Cómo se denomina la intensidad de campo magnético opuesto (-Hc) necesaria para anular por completo la inducción magnética remanente de un material ferromagnético?",
    "options": [
      "Susceptibilidad eléctrica",
      "Temperatura de Curie",
      "Fuerza coercitiva (o coercitividad Hc)",
      "Permeabilidad magnética diferencial"
    ],
    "correctIndex": 2,
    "explanation": "La coercitividad Hc indica la resistencia del material a ser desmagnetizado; los materiales magnéticos duros tienen alta coercitividad (para imanes permanentes) y los blandos muy baja coercitividad (para núcleos de transformador).",
    "skill": "Materiales Magnéticos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Ciclo de Histéresis",
    "subtopic": "Fuerza Coercitiva Hc"
  },
  {
    "id": "ele-bac-95",
    "sectionId": 10,
    "number": 95,
    "text": "¿Qué ocurre con las propiedades ferromagnéticas de un trozo de hierro si se calienta por encima de su Temperatura de Curie (aprox. 770 °C)?",
    "options": [
      "Multiplica su imantación por diez mil",
      "Pierde su ferromagnetismo permanente y se convierte en un material puramente paramagnético",
      "Se convierte en un superconductor a temperatura ambiente",
      "Adquiere una carga eléctrica neta negativa espontánea"
    ],
    "correctIndex": 1,
    "explanation": "Por encima del punto de Curie, la energía de agitación térmica supera las fuerzas de intercambio cuántico que mantienen alineados los espines electrónicos de los dominios magnéticos, destruyendo el ferromagnetismo.",
    "skill": "Física de Materiales",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Magnetismo",
    "subtopic": "Temperatura de Curie"
  },
  {
    "id": "ele-bac-96",
    "sectionId": 10,
    "number": 96,
    "text": "En un circuito puente de Wheatstone con resistencias R1, R2, R3 y una resistencia desconocida Rx, ¿cuál es la condición matemática exacta de equilibrio (corriente nula por el galvanómetro central)?",
    "options": [
      "R1 × Rx = R2 × R3  (o Rx = R2 × R3 / R1)",
      "R1 + Rx = R2 + R3",
      "Rx = R1 × R2 × R3",
      "Rx = (R1 + R2) / R3"
    ],
    "correctIndex": 0,
    "explanation": "El equilibrio ocurre cuando el potencial en ambos nodos intermedios es idéntico, lo que exige que los productos cruzados de las ramas opuestas sean exactamente iguales: R1·Rx = R2·R3.",
    "skill": "Puentes de Medición",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Metrología Eléctrica",
    "subtopic": "Puente de Wheatstone"
  },
  {
    "id": "ele-bac-97",
    "sectionId": 10,
    "number": 97,
    "text": "¿Qué variante del puente de Wheatstone utiliza cuatro terminales (conexión Kelvin de 4 hilos) para medir con altísima exactitud resistencias extremadamente bajas (menores a 1 Ω), eliminando el error de los cables de prueba?",
    "options": [
      "Puente de Schering",
      "Puente de Maxwell-Wien",
      "Puente de Hay",
      "Puente doble de Kelvin (o puente de Thomson)"
    ],
    "correctIndex": 3,
    "explanation": "El puente doble de Kelvin separa los terminales de corriente de los terminales de detección de potencial, eliminando la resistencia parásita de contacto y de los cables en la medición de mili/microohmios.",
    "skill": "Metrología de Precisión",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Puentes de Medición",
    "subtopic": "Puente Doble de Kelvin"
  },
  {
    "id": "ele-bac-98",
    "sectionId": 10,
    "number": 98,
    "text": "¿Qué tipo de puente de corriente alterna se emplea específicamente para la medición de la capacitancia y del factor de pérdidas dieléctricas (tan δ) en aislantes de alta tensión?",
    "options": [
      "Puente de Hay",
      "Puente de Anderson",
      "Puente de Schering",
      "Puente de Wheatstone"
    ],
    "correctIndex": 2,
    "explanation": "El puente de Schering es el instrumento clásico para determinar con alta exactitud capacitancias desconocidas y el ángulo de pérdidas dieléctricas (tan delta) en cables y transformadores de potencia.",
    "skill": "Ensayos Dieléctricos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Metrología de Alta Tensión",
    "subtopic": "Puente de Schering"
  },
  {
    "id": "ele-bac-99",
    "sectionId": 10,
    "number": 99,
    "text": "En un generador síncrono trifásico (alternador de central hidroeléctrica o termoeléctrica), ¿qué componente suministra el campo magnético rotatorio primario?",
    "options": [
      "El agua o vapor que choca contra las paletas",
      "El rotor alimentado con corriente continua mediante anillos rozantes o excitatriz brushless (sin escobillas)",
      "El estator conectado a una batería de litio",
      "Los cables de salida hacia las torres de alta tensión"
    ],
    "correctIndex": 1,
    "explanation": "El rotor del alternador sincrónico porta los devanados de campo polar excitados por corriente continua; al girar impulsado por la turbina genera un campo magnético que induce las tensiones trifásicas alternas en el inducido estatórico.",
    "skill": "Generación Eléctrica",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Generadores Síncronos",
    "subtopic": "Rotor de Polos Inductores"
  },
  {
    "id": "ele-bac-100",
    "sectionId": 10,
    "number": 100,
    "text": "¿Qué cuatro condiciones físicas obligatorias deben cumplirse antes de cerrar el interruptor de sincronización para conectar un alternador en paralelo con la red eléctrica nacional?",
    "options": [
      "1) Igualdad de tensiones eficaces; 2) Misma frecuencia; 3) Misma secuencia de fases; 4) Coincidencia de fase instantánea (ángulo de desfase nulo)",
      "1) Igual potencia nominal; 2) Mismo fabricante; 3) Mismo color de turbina; 4) Mismo combustible",
      "1) Tensión del alternador al doble de la red; 2) Frecuencia a 120 Hz; 3) Rotación inversa; 4) Neutro aislado",
      "1) Corriente continua pura; 2) Interruptor termomagnético en corto; 3) Temperatura ambiente a 0 °C; 4) Factor de potencia nulo"
    ],
    "correctIndex": 0,
    "explanation": "El sincronismo a la red exige igual magnitud de voltaje, frecuencia idéntica, misma rotación de fases (ej. L1-L2-L3) y sincronismo fasorial angular (detectado con sincronoscopio o método de tres lámparas apagadas) para evitar corrientes de choque destructivas.",
    "skill": "Sistemas de Potencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sincronización a la Red",
    "subtopic": "Condiciones de Paralelismo de Alternadores"
  }
];
