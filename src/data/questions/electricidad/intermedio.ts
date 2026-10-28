import { Question } from '../../../types';

export const ELECTRICIDAD_INTERMEDIO: Question[] = [
  {
    "id": "ele-int-1",
    "sectionId": 10,
    "number": 21,
    "text": "Según la Ley de Ohm, si una resistencia de 20 Ω se conecta a una fuente de 120 V, ¿cuál es la corriente que circula por ella?",
    "options": [
      "0.16 A",
      "6 A",
      "24 A",
      "2,400 A"
    ],
    "correctIndex": 1,
    "explanation": "I = V / R = 120 V / 20 Ω = 6 Amperios.",
    "skill": "Cálculos con Ley de Ohm",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos Eléctricos",
    "subtopic": "Cálculo de Corriente"
  },
  {
    "id": "ele-int-2",
    "sectionId": 10,
    "number": 22,
    "text": "¿Cuál es la potencia eléctrica disipada por una resistencia que consume 5 A bajo una tensión de 220 V?",
    "options": [
      "44 W",
      "550 W",
      "1,100 W",
      "2,200 W"
    ],
    "correctIndex": 2,
    "explanation": "Potencia P = V · I = 220 V × 5 A = 1,100 Vatios (W).",
    "skill": "Potencia Eléctrica en DC",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cálculos de Potencia",
    "subtopic": "Ley de Watt"
  },
  {
    "id": "ele-int-3",
    "sectionId": 10,
    "number": 23,
    "text": "¿Qué establece la Primera Ley de Kirchhoff (Ley de Corrientes de Kirchhoff - LCK) para un nodo en cualquier circuito eléctrico?",
    "options": [
      "La suma algebraica de las corrientes que entran a un nodo es igual a la suma de las corrientes que salen de él (∑ I_nodo = 0)",
      "La corriente es inversamente proporcional a la inductancia",
      "En un nodo el voltaje siempre se anula",
      "La potencia de entrada es siempre cero"
    ],
    "correctIndex": 0,
    "explanation": "La LCK se fundamenta en el principio de conservación de la carga eléctrica: la carga no puede crearse ni acumularse indefinidamente en un nodo.",
    "skill": "Leyes de Kirchhoff",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Análisis de Circuitos",
    "subtopic": "Ley de Corrientes de Kirchhoff (LCK)"
  },
  {
    "id": "ele-int-4",
    "sectionId": 10,
    "number": 24,
    "text": "En un circuito serie con tres resistencias de 15 Ω, 25 Ω y 60 Ω, ¿cuál es la resistencia equivalente total?",
    "options": [
      "10 Ω",
      "50 Ω",
      "100 Ω",
      "150 Ω"
    ],
    "correctIndex": 2,
    "explanation": "En serie las resistencias se suman algebraicamente: R_eq = 15 + 25 + 60 = 100 Ω.",
    "skill": "Resistencias en Serie",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Asociación de Resistencias",
    "subtopic": "Resistencia Equivalente en Serie"
  },
  {
    "id": "ele-int-5",
    "sectionId": 10,
    "number": 25,
    "text": "¿Qué componente semiconductor permite el paso de corriente eléctrica con facilidad en polarización directa pero lo bloquea en polarización inversa?",
    "options": [
      "Diodo semiconductor p-n",
      "Condensador cerámico",
      "Transformador elevador",
      "Inductor toroidal"
    ],
    "correctIndex": 0,
    "explanation": "La unión p-n del diodo tiene una barrera de potencial (~0.7 V en silicio) que conduce en directa y presenta alta resistencia en inversa.",
    "skill": "Diodos Semiconductores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Electrónica de Estado Sólido",
    "subtopic": "Polarización de Diodos"
  },
  {
    "id": "ele-int-6",
    "sectionId": 10,
    "number": 26,
    "text": "¿Cuál es la capacitancia equivalente de dos condensadores de 10 μF conectados en paralelo?",
    "options": [
      "5 μF",
      "10 μF",
      "20 μF",
      "100 μF"
    ],
    "correctIndex": 2,
    "explanation": "En paralelo, las capacidades se suman directamente: C_eq = C₁ + C₂ = 10 μF + 10 μF = 20 μF.",
    "skill": "Asociación de Condensadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Capacitancia",
    "subtopic": "Condensadores en Paralelo"
  },
  {
    "id": "ele-int-7",
    "sectionId": 10,
    "number": 27,
    "text": "En corriente alterna senoidal, ¿cuál es la relación entre el valor eficaz (RMS) y el valor pico o máximo (V_pico) de la tensión?",
    "options": [
      "V_rms = V_pico / √2 ≈ 0.707 · V_pico",
      "V_rms = 2 · V_pico",
      "V_rms = V_pico / 2",
      "V_rms = π · V_pico"
    ],
    "correctIndex": 0,
    "explanation": "El valor eficaz RMS (Root Mean Square) es el valor de CA que disipa la misma potencia térmica que una tensión continua equivalente.",
    "skill": "Parámetros de Señales de Corriente Alterna",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Corriente Alterna",
    "subtopic": "Valor Eficaz RMS"
  },
  {
    "id": "ele-int-8",
    "sectionId": 10,
    "number": 28,
    "text": "¿Qué tipo de transistor bipolar (BJT) tiene tres terminales denominados Base, Colector y Emisor, y se utiliza comúnmente como interruptor electrónico o amplificador?",
    "options": [
      "Transistor NPN / PNP",
      "Tiristor Triac",
      "Diodo Zener",
      "Varistor MOV"
    ],
    "correctIndex": 0,
    "explanation": "El transistor bipolar controla una gran corriente entre colector y emisor mediante una pequeña corriente inyectada en la base (I_C = β · I_B).",
    "skill": "Transistores Bipolares (BJT)",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Electrónica Activa",
    "subtopic": "Transistores BJT NPN y PNP"
  },
  {
    "id": "ele-int-9",
    "sectionId": 10,
    "number": 29,
    "text": "¿Qué dispositivo de protección electromagnética moderno combina protección contra sobrecargas térmicas y contra cortocircuitos magnéticos en un cuadro residencial?",
    "options": [
      "Interruptor magnetotérmico (disyuntor termomagnético)",
      "Fusible de plomo",
      "Transformador de aislamiento",
      "Varistor de línea"
    ],
    "correctIndex": 0,
    "explanation": "El magnetotérmico utiliza una lámina bimetálica para sobrecargas lentas (disparo térmico) y una bobina electromagnética para cortocircuitos instantáneos (disparo magnético).",
    "skill": "Aparamenta de Protección",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Instalaciones Eléctricas",
    "subtopic": "Interruptores Magnetotérmicos"
  },
  {
    "id": "ele-int-10",
    "sectionId": 10,
    "number": 30,
    "text": "¿Cuál es la frecuencia estándar de la red eléctrica comercial en la mayor parte de Europa y Sudamérica frente a América del Norte?",
    "options": [
      "50 Hz en Europa/Sudamérica y 60 Hz en Norteamérica",
      "100 Hz y 200 Hz",
      "10 Hz en todo el mundo",
      "120 Hz continuo"
    ],
    "correctIndex": 0,
    "explanation": "En Europa y varios países de Sudamérica la red opera a 50 Hz (230 V), mientras en EE.UU., México, Ecuador y Colombia opera a 60 Hz (120 V).",
    "skill": "Sistemas Eléctricos de Potencia Comerciales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Redes Eléctricas",
    "subtopic": "Frecuencia de Red Comercial"
  },
  {
    "id": "ele-int-11",
    "sectionId": 10,
    "number": 31,
    "text": "¿Qué componente resistivo sensible a la temperatura disminuye su resistencia eléctrica a medida que aumenta la temperatura?",
    "options": [
      "Termistor NTC (Coeficiente de Temperatura Negativo)",
      "Termistor PTC",
      "Resistencia fija bobinada",
      "Potenciómetro lineal"
    ],
    "correctIndex": 0,
    "explanation": "Los termistores NTC aumentan la concentración de portadores de carga libres con el calor, disminuyendo su resistencia de forma exponencial.",
    "skill": "Sensores Resistivos Térmicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Instrumentación",
    "subtopic": "Termistores NTC"
  },
  {
    "id": "ele-int-12",
    "sectionId": 10,
    "number": 32,
    "text": "¿Qué establece la Segunda Ley de Kirchhoff (Ley de Voltajes de Kirchhoff - LVK) para cualquier malla cerrada de un circuito?",
    "options": [
      "La suma algebraica de las diferencias de potencial (voltajes de fuentes y caídas en resistencias) en una trayectoria cerrada es igual a cero (∑ V_malla = 0)",
      "La corriente es infinita en la malla",
      "La inductancia se anula con el calor",
      "Todos los voltajes deben ser continuos"
    ],
    "correctIndex": 0,
    "explanation": "La LVK se fundamenta en la conservación de la energía en un campo electrostático conservativo: el trabajo neto al recorrer un camino cerrado es nulo.",
    "skill": "Leyes de Kirchhoff para Mallas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Análisis de Circuitos",
    "subtopic": "Ley de Voltajes de Kirchhoff (LVK)"
  },
  {
    "id": "ele-int-13",
    "sectionId": 10,
    "number": 33,
    "text": "¿Cómo se llama la resistencia aparente total que opone un circuito de corriente alterna que combina resistencia óhmica, inductancia y capacitancia?",
    "options": [
      "Conductancia",
      "Impedancia (Z)",
      "Admitancia pura",
      "Permeabilidad"
    ],
    "correctIndex": 1,
    "explanation": "La impedancia compleja Z = R + j(X_L - X_C) generaliza la ley de Ohm en corriente alterna (V = I · Z), medida en ohmios (Ω).",
    "skill": "Impedancia en Corriente Alterna",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos RLC",
    "subtopic": "Concepto de Impedancia"
  },
  {
    "id": "ele-int-14",
    "sectionId": 10,
    "number": 34,
    "text": "¿Qué función cumple un diodo Zener conectado en polarización inversa en una fuente de alimentación de corriente continua?",
    "options": [
      "Amplificar señales de audio",
      "Regular y estabilizar el voltaje a un valor constante (tensión Zener V_Z)",
      "Transformar CA en CC",
      "Aumentar la resistencia térmica"
    ],
    "correctIndex": 1,
    "explanation": "El diodo Zener está diseñado para operar en la región de ruptura por avalancha inversa manteniendo su tensión en bornes fija frente a variaciones de carga.",
    "skill": "Diodos Especiales y Reguladores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Electrónica Básica",
    "subtopic": "Diodo Zener"
  },
  {
    "id": "ele-int-15",
    "sectionId": 10,
    "number": 35,
    "text": "¿Cuál es la inductancia de una bobina que genera una fuerza contraelectromotriz de 10 V cuando la corriente que circula varía a razón de 2 A/s?",
    "options": [
      "5 Henrios (H)",
      "10 Henrios",
      "20 Henrios",
      "0.2 Henrios"
    ],
    "correctIndex": 0,
    "explanation": "ε = L · (dI/dt) → L = ε / (dI/dt) = 10 V / (2 A/s) = 5 Henrios (H).",
    "skill": "Inductancia y Autoinducción",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Electromagnetismo",
    "subtopic": "Cálculo de Inductancia"
  },
  {
    "id": "ele-int-16",
    "sectionId": 10,
    "number": 36,
    "text": "¿Qué compuerta lógica digital produce una salida alta (1 lógico) si y solo si todas sus entradas están simultáneamente en nivel alto (1 y 1)?",
    "options": [
      "Compuerta OR",
      "Compuerta AND",
      "Compuerta NOT",
      "Compuerta XOR"
    ],
    "correctIndex": 1,
    "explanation": "La compuerta AND implementa el producto lógico booleano: Y = A · B. Solo es 1 cuando ambas entradas son 1.",
    "skill": "Lógica Digital Booleana",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Electrónica Digital",
    "subtopic": "Compuerta AND"
  },
  {
    "id": "ele-int-17",
    "sectionId": 10,
    "number": 37,
    "text": "En una instalación fotovoltaica aislada, ¿qué dispositivo electrónico protege la batería contra sobrecargas y sobredescargas gestionando la energía de los paneles solares?",
    "options": [
      "Inversor de onda senoidal pura",
      "Regulador o controlador de carga solar",
      "Diodo rectificador de puente",
      "Seccionador fusible"
    ],
    "correctIndex": 1,
    "explanation": "El regulador (PWM o MPPT) monitorea la tensión de la batería y desconecta o modula la corriente entrante de los paneles solares.",
    "skill": "Sistemas Solares Fotovoltaicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Energía Solar",
    "subtopic": "Controlador de Carga"
  },
  {
    "id": "ele-int-18",
    "sectionId": 10,
    "number": 38,
    "text": "¿Qué instrumento de visualización gráfica en el dominio del tiempo permite observar la forma de onda, amplitud, frecuencia y distorsión de una señal eléctrica?",
    "options": [
      "Megóhmetro",
      "Osciloscopio",
      "Luxómetro",
      "Pinza amperimétrica analógica"
    ],
    "correctIndex": 1,
    "explanation": "El osciloscopio representa la tensión en el eje vertical (Y) en función del tiempo en el eje horizontal (X), indispensable para depuración electrónica.",
    "skill": "Instrumental Electrónico de Laboratorio",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Mediciones Electrónicas",
    "subtopic": "El Osciloscopio"
  },
  {
    "id": "ele-int-19",
    "sectionId": 10,
    "number": 39,
    "text": "¿Cuál es el valor eficaz de corriente que circula por un calefactor de 2,200 W alimentado a 220 V de corriente alterna con factor de potencia unitario (cos φ = 1)?",
    "options": [
      "5 A",
      "10 A",
      "15 A",
      "20 A"
    ],
    "correctIndex": 1,
    "explanation": "P = V · I · cos(φ) → I = P / (V · cos φ) = 2200 / (220 × 1) = 10 Amperios.",
    "skill": "Cálculo de Corriente en CA Monofásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Electrotecnia",
    "subtopic": "Corriente en Cargas Resistivas"
  },
  {
    "id": "ele-int-20",
    "sectionId": 10,
    "number": 40,
    "text": "¿Qué fenómeno indeseado se produce cuando dos conductores activos de distinta polaridad o fase entran en contacto directo con resistencia prácticamente nula?",
    "options": [
      "Sobrecarga lenta",
      "Cortocircuito",
      "Fuga a tierra mínima",
      "Armónico impar"
    ],
    "correctIndex": 1,
    "explanation": "Al anularse la resistencia del circuito (R → 0), la corriente se eleva instantáneamente a miles de amperios (I_cc = V / Z_red), requiriendo desconexión rápida por protecciones.",
    "skill": "Fallas Eléctricas y Cortocircuitos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Seguridad y Protecciones",
    "subtopic": "Cortocircuito"
  },
  {
    "id": "ele-int-21",
    "sectionId": 10,
    "number": 21,
    "text": "Si se conectan en serie dos resistencias de 30 Ω y 70 Ω a una fuente de 200 V de CC, ¿cuál es la corriente que entrega la fuente?",
    "options": [
      "0.5 A",
      "5.0 A",
      "14.0 A",
      "2.0 A"
    ],
    "correctIndex": 3,
    "explanation": "La resistencia equivalente en serie es R_eq = 30 Ω + 70 Ω = 100 Ω. Por Ley de Ohm: I = V / R_eq = 200 V / 100 Ω = 2.0 A.",
    "skill": "Circuitos Serie",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Leyes de Circuitos",
    "subtopic": "Resistencia Equivalente en Serie"
  },
  {
    "id": "ele-int-22",
    "sectionId": 10,
    "number": 22,
    "text": "En un circuito divisor de tensión formado por dos resistencias R1 = 1 kΩ y R2 = 3 kΩ en serie alimentadas con 12 V, ¿cuál es la caída de tensión sobre R2?",
    "options": [
      "6 V",
      "12 V",
      "9 V",
      "3 V"
    ],
    "correctIndex": 2,
    "explanation": "V_R2 = V_total × [R2 / (R1 + R2)] = 12 V × [3 kΩ / (1 kΩ + 3 kΩ)] = 12 V × (3/4) = 9 V.",
    "skill": "Divisores de Tensión",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Divisores Resistivos",
    "subtopic": "Cálculo de Tensión Parcial"
  },
  {
    "id": "ele-int-23",
    "sectionId": 10,
    "number": 23,
    "text": "¿Cuál es la resistencia equivalente de dos resistores de 100 Ω conectados en paralelo?",
    "options": [
      "25 Ω",
      "50 Ω",
      "200 Ω",
      "100 Ω"
    ],
    "correctIndex": 1,
    "explanation": "Para dos resistencias iguales en paralelo, R_eq = R / 2 = 100 Ω / 2 = 50 Ω.",
    "skill": "Circuitos Paralelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Asociación de Resistencias",
    "subtopic": "Paralelo de Valores Iguales"
  },
  {
    "id": "ele-int-24",
    "sectionId": 10,
    "number": 24,
    "text": "Dos resistencias de 20 Ω y 30 Ω se conectan en paralelo. ¿Cuál es su resistencia equivalente?",
    "options": [
      "12 Ω",
      "50 Ω",
      "600 Ω",
      "25 Ω"
    ],
    "correctIndex": 0,
    "explanation": "R_eq = (R1 × R2) / (R1 + R2) = (20 × 30) / (20 + 30) = 600 / 50 = 12 Ω.",
    "skill": "Circuitos Paralelo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Asociación de Resistencias",
    "subtopic": "Fórmula del Producto sobre la Suma"
  },
  {
    "id": "ele-int-25",
    "sectionId": 10,
    "number": 25,
    "text": "¿Cuál es la potencia disipada por un resistor de 10 Ω que transporta una corriente de 3 A?",
    "options": [
      "30 W",
      "300 W",
      "9 W",
      "90 W"
    ],
    "correctIndex": 3,
    "explanation": "Por la ley de Joule: P = I² × R = (3 A)² × 10 Ω = 9 × 10 = 90 W.",
    "skill": "Cálculo de Potencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Potencia Eléctrica",
    "subtopic": "Fórmula I al Cuadrado por R"
  },
  {
    "id": "ele-int-26",
    "sectionId": 10,
    "number": 26,
    "text": "¿Qué potencia disipa una bombilla conectada a una red de 120 V si su filamento caliente tiene una resistencia de 240 Ω?",
    "options": [
      "480 W",
      "24 W",
      "60 W",
      "120 W"
    ],
    "correctIndex": 2,
    "explanation": "P = V² / R = (120 V)² / 240 Ω = 14,400 / 240 = 60 W.",
    "skill": "Cálculo de Potencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Potencia Eléctrica",
    "subtopic": "Fórmula V al Cuadrado sobre R"
  },
  {
    "id": "ele-int-27",
    "sectionId": 10,
    "number": 27,
    "text": "En un circuito divisor de corriente con dos ramas en paralelo R1 = 10 Ω y R2 = 40 Ω, si la corriente total que ingresa es de 10 A, ¿cuánta corriente fluye por la rama de 10 Ω?",
    "options": [
      "1 A",
      "8 A",
      "2 A",
      "5 A"
    ],
    "correctIndex": 1,
    "explanation": "I1 = I_total × [R2 / (R1 + R2)] = 10 A × [40 / (10 + 40)] = 10 × (40/50) = 8 A. La corriente prefiere el camino de menor resistencia.",
    "skill": "Divisores de Corriente",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Leyes de Circuitos",
    "subtopic": "Regla del Divisor de Corriente"
  },
  {
    "id": "ele-int-28",
    "sectionId": 10,
    "number": 28,
    "text": "¿Cuál es el valor eficaz (RMS) de una tensión senoidal que tiene un valor pico de 170 V?",
    "options": [
      "Aproximadamente 120 V",
      "Aproximadamente 240 V",
      "85 V",
      "340 V"
    ],
    "correctIndex": 0,
    "explanation": "V_rms = V_p / √2 ≈ 170 V × 0.7071 ≈ 120.2 V. Por ello una tensión residencial de 120 V_rms tiene una amplitud pico de unos 170 V.",
    "skill": "Corriente Alterna",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Ondas Senoidales",
    "subtopic": "Relación Pico y RMS"
  },
  {
    "id": "ele-int-29",
    "sectionId": 10,
    "number": 29,
    "text": "¿Cuál es el periodo (T) de una señal de corriente alterna residencial cuya frecuencia es de 60 Hz?",
    "options": [
      "60 ms",
      "8.33 ms",
      "1.67 s",
      "16.67 ms (0.0167 s)"
    ],
    "correctIndex": 3,
    "explanation": "El periodo es el inverso de la frecuencia: T = 1 / f = 1 / 60 Hz ≈ 0.01667 s = 16.67 ms.",
    "skill": "Parámetros de Señales CA",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Ondas Senoidales",
    "subtopic": "Frecuencia y Periodo"
  },
  {
    "id": "ele-int-30",
    "sectionId": 10,
    "number": 30,
    "text": "¿Qué voltaje pico a pico (Vpp) tiene una señal senoidal pura cuya tensión eficaz medida con un multímetro RMS es de 220 V?",
    "options": [
      "311 V",
      "440 V",
      "Aproximadamente 622 V",
      "220 V"
    ],
    "correctIndex": 2,
    "explanation": "V_p = 220 × √2 ≈ 311.1 V. El voltaje pico a pico es el doble del valor pico: V_pp = 2 × V_p ≈ 2 × 311.1 V ≈ 622.2 V.",
    "skill": "Parámetros de Señales CA",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Ondas Senoidales",
    "subtopic": "Voltaje Pico a Pico"
  },
  {
    "id": "ele-int-31",
    "sectionId": 10,
    "number": 31,
    "text": "¿Cuál es la capacitancia equivalente de dos condensadores de 10 µF y 40 µF conectados en paralelo?",
    "options": [
      "400 µF",
      "50 µF",
      "8 µF",
      "25 µF"
    ],
    "correctIndex": 1,
    "explanation": "Los condensadores en paralelo suman sus capacitancias directamente: C_eq = C1 + C2 = 10 µF + 40 µF = 50 µF.",
    "skill": "Asociación de Capacitores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Capacitancia",
    "subtopic": "Capacitores en Paralelo"
  },
  {
    "id": "ele-int-32",
    "sectionId": 10,
    "number": 32,
    "text": "¿Cuál es la capacitancia equivalente de dos condensadores de 20 µF conectados en serie?",
    "options": [
      "10 µF",
      "40 µF",
      "20 µF",
      "5 µF"
    ],
    "correctIndex": 0,
    "explanation": "En serie: 1/C_eq = 1/C1 + 1/C2. Para dos capacitores idénticos de 20 µF, C_eq = 20 / 2 = 10 µF.",
    "skill": "Asociación de Capacitores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Capacitancia",
    "subtopic": "Capacitores en Serie"
  },
  {
    "id": "ele-int-33",
    "sectionId": 10,
    "number": 33,
    "text": "En un circuito RC serie, ¿cómo se calcula la constante de tiempo (τ)?",
    "options": [
      "τ = R / C",
      "τ = C / R",
      "τ = 1 / (R × C)",
      "τ = R × C"
    ],
    "correctIndex": 3,
    "explanation": "La constante de tiempo de carga/descarga de un circuito RC viene dada por el producto de la resistencia en ohmios y la capacitancia en faradios: τ = R·C (medida en segundos).",
    "skill": "Transitorios RC",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos de Primer Orden",
    "subtopic": "Constante de Tiempo RC"
  },
  {
    "id": "ele-int-34",
    "sectionId": 10,
    "number": 34,
    "text": "Durante el proceso de carga de un condensador inicialmente descargado en un circuito RC serie, ¿qué porcentaje de la tensión final de la fuente alcanza el capacitor al cabo de un tiempo igual a una constante de tiempo (t = 1τ)?",
    "options": [
      "86.5%",
      "99.3%",
      "Aproximadamente 63.2%",
      "50.0%"
    ],
    "correctIndex": 2,
    "explanation": "v_c(t) = V_fuente × (1 - e^(-t/τ)). Para t = τ, v_c(τ) = V_fuente × (1 - e⁻¹) = V_fuente × (1 - 0.3679) ≈ 63.2% de V_fuente.",
    "skill": "Transitorios RC",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Respuesta al Escalón",
    "subtopic": "Carga en una Constante de Tiempo"
  },
  {
    "id": "ele-int-35",
    "sectionId": 10,
    "number": 35,
    "text": "¿Cuántas constantes de tiempo (τ) se consideran convencionalmente necesarias en ingeniería para considerar que un capacitor está prácticamente cargado al 99.3% de su valor final?",
    "options": [
      "10 constantes de tiempo (10τ)",
      "5 constantes de tiempo (5τ)",
      "1 constante de tiempo (1τ)",
      "2 constantes de tiempo (2τ)"
    ],
    "correctIndex": 1,
    "explanation": "En la práctica ingenieril se adopta el régimen estacionario a partir de t = 5τ, momento en el cual el capacitor ha alcanzado 1 - e⁻⁵ ≈ 99.33% de la tensión máxima.",
    "skill": "Transitorios RC",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Régimen Permanente",
    "subtopic": "Tiempo de Carga Práctico 5 Tau"
  },
  {
    "id": "ele-int-36",
    "sectionId": 10,
    "number": 36,
    "text": "En un circuito RL serie alimentado con corriente continua, ¿cuál es la fórmula de la constante de tiempo (τ)?",
    "options": [
      "τ = L / R",
      "τ = L × R",
      "τ = R / L",
      "τ = √(L / R)"
    ],
    "correctIndex": 0,
    "explanation": "La constante de tiempo de un circuito RL inductivo se calcula como el cociente entre la inductancia (en Henrios) y la resistencia (en Ohmios): τ = L / R.",
    "skill": "Transitorios RL",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos Inductivos",
    "subtopic": "Constante de Tiempo RL"
  },
  {
    "id": "ele-int-37",
    "sectionId": 10,
    "number": 37,
    "text": "En corriente continua en régimen permanente (mucho tiempo después de conectada la fuente), ¿cómo se comporta un capacitor ideal?",
    "options": [
      "Como un cortocircuito perfecto (resistencia nula)",
      "Como una fuente de corriente alterna",
      "Como una resistencia constante de 10 Ω",
      "Como un circuito abierto (resistencia infinita, corriente cero)"
    ],
    "correctIndex": 3,
    "explanation": "Una vez cargado completamente en CC, las placas impiden el paso de corriente galvánica continua, comportándose como un circuito abierto.",
    "skill": "Comportamiento en DC",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Régimen Permanente DC",
    "subtopic": "Capacitor en Corriente Continua"
  },
  {
    "id": "ele-int-38",
    "sectionId": 10,
    "number": 38,
    "text": "En corriente continua en régimen permanente, ¿cómo se comporta un inductor (bobina) ideal cuya resistencia de hilo es despreciable?",
    "options": [
      "Como un diodo zener",
      "Como un fusible quemado",
      "Como un cortocircuito (tensión nula entre sus bornes)",
      "Como un circuito abierto"
    ],
    "correctIndex": 2,
    "explanation": "Al ser la corriente continua invariable (di/dt = 0), la tensión inducida v = L·(di/dt) es cero voltios, comportándose como un cortocircuito de resistencia nula.",
    "skill": "Comportamiento en DC",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Régimen Permanente DC",
    "subtopic": "Inductor en Corriente Continua"
  },
  {
    "id": "ele-int-39",
    "sectionId": 10,
    "number": 39,
    "text": "¿Cómo se calcula la reactancia inductiva (XL) de una bobina de inductancia L conectada a una fuente senoidal de frecuencia f?",
    "options": [
      "XL = f × L²",
      "XL = 2 × π × f × L",
      "XL = 1 / (2 × π × f × L)",
      "XL = 2 × π × f / L"
    ],
    "correctIndex": 1,
    "explanation": "La reactancia inductiva XL = ωL = 2πfL se expresa en ohmios y aumenta proporcionalmente con la frecuencia de la señal.",
    "skill": "Reactancia Inductiva",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos de CA",
    "subtopic": "Fórmula de Reactancia Inductiva"
  },
  {
    "id": "ele-int-40",
    "sectionId": 10,
    "number": 40,
    "text": "¿Qué ocurre con la reactancia inductiva (XL) de una bobina si se duplica la frecuencia de la corriente alterna?",
    "options": [
      "Se duplica",
      "Se reduce a la mitad",
      "Se cuadruplica",
      "Permanece inalterada"
    ],
    "correctIndex": 0,
    "explanation": "Dado que XL = 2πfL, la reactancia inductiva tiene una relación directamente proporcional con la frecuencia f; al duplicar f, XL se duplica.",
    "skill": "Reactancia Inductiva",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Respuesta en Frecuencia",
    "subtopic": "Proporcionalidad de XL"
  },
  {
    "id": "ele-int-41",
    "sectionId": 10,
    "number": 41,
    "text": "¿Cómo se calcula la reactancia capacitiva (XC) de un condensador de capacitancia C sometido a una frecuencia f?",
    "options": [
      "XC = 2 × π × f × C",
      "XC = 2 × π × f / C",
      "XC = C / (2 × π × f)",
      "XC = 1 / (2 × π × f × C)"
    ],
    "correctIndex": 3,
    "explanation": "La reactancia capacitiva XC = 1/(ωC) = 1/(2πfC) se mide en ohmios y es inversamente proporcional a la frecuencia y a la capacitancia.",
    "skill": "Reactancia Capacitiva",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos de CA",
    "subtopic": "Fórmula de Reactancia Capacitiva"
  },
  {
    "id": "ele-int-42",
    "sectionId": 10,
    "number": 42,
    "text": "¿Qué le ocurre a la oposición que presenta un condensador (reactancia capacitiva XC) ante señales alternas de frecuencia muy alta?",
    "options": [
      "Comienza a generar corriente continua espontánea",
      "Se estabiliza permanentemente en 1 kΩ",
      "Disminuye progresivamente hasta tender a cero (se comporta casi como un cortocircuito en alta frecuencia)",
      "Aumenta indefinidamente tendiendo a circuito abierto"
    ],
    "correctIndex": 2,
    "explanation": "Como XC = 1/(2πfC), cuando f → ∞, XC → 0; por este motivo los condensadores se emplean comúnmente como filtros de desacoplo para derivar altas frecuencias a masa.",
    "skill": "Filtros Pasivos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Reactancia Capacitiva",
    "subtopic": "Comportamiento en Alta Frecuencia"
  },
  {
    "id": "ele-int-43",
    "sectionId": 10,
    "number": 43,
    "text": "En un circuito puramente inductivo alimentado con tensión senoidal, ¿cuál es el ángulo de desfase entre la tensión aplicada y la corriente que circula?",
    "options": [
      "La corriente y la tensión están en oposición de 180°",
      "La corriente atrasa 90° respecto a la tensión (o la tensión adelanta 90° a la corriente)",
      "La corriente y la tensión están exactamente en fase (desfase de 0°)",
      "La corriente adelanta 90° respecto a la tensión"
    ],
    "correctIndex": 1,
    "explanation": "En un inductor ideal v = L·(di/dt). Al aplicar una corriente senoidal i = I_m·sen(ωt), la tensión resulta proporcional al coseno (adelantada en 90° o π/2 rad).",
    "skill": "Desfase en CA",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos Inductivos",
    "subtopic": "Desfase Corriente-Tensión en L"
  },
  {
    "id": "ele-int-44",
    "sectionId": 10,
    "number": 44,
    "text": "En un circuito puramente capacitivo excitado por una fuente senoidal de CA, ¿cuál es la relación de fase entre corriente y tensión?",
    "options": [
      "La corriente adelanta 90° a la tensión",
      "La corriente atrasa 90° respecto a la tensión",
      "Están exactamente en fase",
      "Tienen un desfase constante de 45°"
    ],
    "correctIndex": 0,
    "explanation": "En un capacitor ideal i = C·(dv/dt). Al aplicar una tensión senoidal, la corriente de carga/descarga máxima ocurre en los puntos de máxima pendiente de la tensión, adelantándose en 90°.",
    "skill": "Desfase en CA",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos Capacitivos",
    "subtopic": "Adelanto de Corriente en C"
  },
  {
    "id": "ele-int-45",
    "sectionId": 10,
    "number": 45,
    "text": "¿Cuál es la caída de tensión directa típica (voltaje de barrera) en un diodo rectificador común de silicio cuando conduce corriente?",
    "options": [
      "Entre 0.1 V y 0.2 V",
      "Entre 1.8 V y 2.2 V",
      "5.0 V exactos",
      "Entre 0.6 V y 0.7 V"
    ],
    "correctIndex": 3,
    "explanation": "La unión p-n de silicio a temperatura ambiente requiere superar una barrera de potencial de aproximadamente 0.6 a 0.7 V para permitir la conducción directa.",
    "skill": "Diodos de Silicio",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Semiconductores",
    "subtopic": "Tensión Umbral de Silicio"
  },
  {
    "id": "ele-int-46",
    "sectionId": 10,
    "number": 46,
    "text": "¿Qué caída de tensión directa característica presenta un diodo de germanio o un diodo Schottky de baja caída?",
    "options": [
      "1.5 V a 2.0 V",
      "3.3 V",
      "Aproximadamente 0.2 V a 0.3 V",
      "0.7 V a 0.8 V"
    ],
    "correctIndex": 2,
    "explanation": "Los diodos de germanio y los diodos Schottky tienen una barrera de potencial menor (alrededor de 0.2 V - 0.3 V), lo que los hace ideales para rectificación de alta eficiencia y conmutación rápida.",
    "skill": "Diodos Especiales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Semiconductores",
    "subtopic": "Diodos Schottky y Germanio"
  },
  {
    "id": "ele-int-47",
    "sectionId": 10,
    "number": 47,
    "text": "¿Qué diodo semiconductor se diseña especialmente para trabajar en su zona de ruptura inversa manteniendo una tensión casi constante en sus terminales?",
    "options": [
      "Fotodiodo PIN",
      "Diodo Zener",
      "Diodo rectificador 1N4007",
      "Diodo túnel"
    ],
    "correctIndex": 1,
    "explanation": "El diodo Zener opera polarizado en sentido inverso en su región de avalancha controlada (tensión Zener Vz), utilizándose como referencia o regulador básico de voltaje.",
    "skill": "Regulación con Zener",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Diodos Especiales",
    "subtopic": "Diodo Zener y Tensión de Ruptura"
  },
  {
    "id": "ele-int-48",
    "sectionId": 10,
    "number": 48,
    "text": "En un rectificador de media onda con un diodo ideal alimentado por un transformador con tensión secundaria de 10 V RMS, ¿cuál es el voltaje continuo medio teórico sin condensador de filtro?",
    "options": [
      "V_dc = V_p / π ≈ (10 × √2) / π ≈ 4.5 V",
      "10 V exactos",
      "14.14 V",
      "20 V"
    ],
    "correctIndex": 0,
    "explanation": "En media onda ideal el valor medio es V_dc = V_p / π. Con V_rms = 10 V, V_p = 14.14 V, resultando V_dc = 14.14 / 3.1416 ≈ 4.5 V.",
    "skill": "Rectificación de Señales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuentes de Alimentación",
    "subtopic": "Rectificador de Media Onda"
  },
  {
    "id": "ele-int-49",
    "sectionId": 10,
    "number": 49,
    "text": "¿Cuántos diodos integrados componen la configuración clásica de un puente rectificador de onda completa (puente de Graetz)?",
    "options": [
      "2 diodos",
      "1 diodo",
      "6 diodos",
      "4 diodos"
    ],
    "correctIndex": 3,
    "explanation": "El puente de Graetz consta de cuatro diodos en puente que permiten conducir ambos semiciclos de la corriente alterna hacia la misma carga resistiva en un único sentido continuo.",
    "skill": "Rectificación de Onda Completa",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuentes de Alimentación",
    "subtopic": "Puente de Diodos Graetz"
  },
  {
    "id": "ele-int-50",
    "sectionId": 10,
    "number": 50,
    "text": "¿Cuál es la frecuencia del rizado de salida en un rectificador de onda completa alimentado por una red eléctrica de 60 Hz?",
    "options": [
      "30 Hz",
      "240 Hz",
      "120 Hz",
      "60 Hz"
    ],
    "correctIndex": 2,
    "explanation": "Al rectificar ambos semiciclos (positivo y negativo), la frecuencia del tren de pulsos de salida se duplica respecto a la frecuencia de red: 2 × 60 Hz = 120 Hz.",
    "skill": "Fuentes de Alimentación",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Rectificación",
    "subtopic": "Frecuencia de Rizado en Onda Completa"
  },
  {
    "id": "ele-int-51",
    "sectionId": 10,
    "number": 51,
    "text": "¿Cuál es la función del condensador electrolítico conectado en paralelo con la carga inmediatamente después del puente rectificador?",
    "options": [
      "Elevar la frecuencia de 120 Hz a 1000 Hz",
      "Filtrar y aplanar el rizado de tensión para convertir la onda pulsante en continua casi pura",
      "Reducir la corriente a la mitad para evitar recalentamiento",
      "Invertir la polaridad de la salida"
    ],
    "correctIndex": 1,
    "explanation": "El condensador de filtro almacena carga durante los picos de tensión y la suministra suavemente a la carga durante los valles, reduciendo la amplitud del rizado.",
    "skill": "Filtros de Fuente de Poder",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuentes Lineales",
    "subtopic": "Filtro Capacitivo"
  },
  {
    "id": "ele-int-52",
    "sectionId": 10,
    "number": 52,
    "text": "En un circuito con una fuente de 12 V y una resistencia interna de r = 1 Ω conectada a una resistencia de carga externa R = 5 Ω, ¿cuál es la tensión en los terminales de la carga?",
    "options": [
      "10 V",
      "12 V",
      "2 V",
      "6 V"
    ],
    "correctIndex": 0,
    "explanation": "La corriente total es I = E / (r + R) = 12 V / (1 Ω + 5 Ω) = 2 A. La tensión en bornes de la carga es V_carga = I × R = 2 A × 5 Ω = 10 V (los 2 V restantes caen en la resistencia interna de la fuente).",
    "skill": "Fuentes Reales de Tensión",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Fuerza Electromotriz",
    "subtopic": "Tensión en Bornes y Resistencia Interna"
  },
  {
    "id": "ele-int-53",
    "sectionId": 10,
    "number": 53,
    "text": "¿Qué postula el Teorema de Máxima Transferencia de Potencia en corriente continua?",
    "options": [
      "La carga recibe máxima potencia cuando su resistencia tiende a infinito",
      "La carga recibe máxima potencia cuando está en cortocircuito total (R_L = 0)",
      "La potencia máxima siempre se transfiere con un rendimiento del 100%",
      "Una fuente entrega la máxima potencia a una carga cuando la resistencia de carga es igual a la resistencia interna de la fuente (R_L = R_int)"
    ],
    "correctIndex": 3,
    "explanation": "Para transferir la mayor potencia posible desde una fuente real hacia una carga externa, ambas resistencias deben coincidir (R_L = R_th). En esa condición, el rendimiento de transferencia es del 50%.",
    "skill": "Teoremas de Circuitos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Teorema de Transferencia Máxima",
    "subtopic": "Condición de Acoplamiento R_L = R_int"
  },
  {
    "id": "ele-int-54",
    "sectionId": 10,
    "number": 54,
    "text": "¿Qué corriente consume un calentador de agua de 2.4 kW conectado a una línea residencial de 120 V?",
    "options": [
      "28.8 A",
      "2 A",
      "20 A",
      "10 A"
    ],
    "correctIndex": 2,
    "explanation": "P = V × I  →  I = P / V = 2,400 W / 120 V = 20 A.",
    "skill": "Cálculos de Instalaciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Consumo de Corriente",
    "subtopic": "Cálculo de Amperaje en Cargas Térmicas"
  },
  {
    "id": "ele-int-55",
    "sectionId": 10,
    "number": 55,
    "text": "Si se conectan en serie una resistencia de 4 Ω y una bobina cuya reactancia inductiva a 60 Hz es de 3 Ω, ¿cuál es la impedancia total (Z) del circuito?",
    "options": [
      "12 Ω",
      "5 Ω",
      "7 Ω",
      "1 Ω"
    ],
    "correctIndex": 1,
    "explanation": "Al formar un ángulo recto en el plano complejo: Z = √(R² + X_L²) = √(4² + 3²) = √(16 + 9) = √25 = 5 Ω.",
    "skill": "Impedancia Serie",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos RL en CA",
    "subtopic": "Triángulo de Impedancias"
  },
  {
    "id": "ele-int-56",
    "sectionId": 10,
    "number": 56,
    "text": "En un circuito RLC serie con R = 8 Ω, XL = 15 Ω y XC = 9 Ω, ¿cuál es la magnitud de la impedancia total Z?",
    "options": [
      "10 Ω",
      "32 Ω",
      "14 Ω",
      "6 Ω"
    ],
    "correctIndex": 0,
    "explanation": "La reactancia neta es X = XL - XC = 15 Ω - 9 Ω = 6 Ω. La impedancia es Z = √(R² + X²) = √(8² + 6²) = √(64 + 36) = √100 = 10 Ω.",
    "skill": "Impedancia RLC Serie",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuitos RLC",
    "subtopic": "Cálculo de Z en Serie"
  },
  {
    "id": "ele-int-57",
    "sectionId": 10,
    "number": 57,
    "text": "¿Cuál es el factor de potencia (FP) de un circuito en corriente alterna donde la resistencia es R = 8 Ω y la impedancia total es Z = 10 Ω?",
    "options": [
      "1.25",
      "0.6",
      "0.2",
      "0.8 (ó 80%)"
    ],
    "correctIndex": 3,
    "explanation": "El factor de potencia es el coseno del ángulo de impedancia: FP = cos(φ) = R / Z = 8 / 10 = 0.8.",
    "skill": "Factor de Potencia",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Potencia en CA",
    "subtopic": "Cálculo de Coseno de Fi"
  },
  {
    "id": "ele-int-58",
    "sectionId": 10,
    "number": 58,
    "text": "¿Qué unidades se utilizan respectivamente para la Potencia Activa (P), Potencia Reactiva (Q) y Potencia Aparente (S)?",
    "options": [
      "Voltio (V), Ohmio (Ω) y Henrio (H)",
      "Kilovatio-hora (kWh), Tesla (T) y Pascal (Pa)",
      "Vatio (W), Voltiamperio reactivo (VAR) y Voltiamperio (VA)",
      "Vatio (W), Julio (J) y Amperio (A)"
    ],
    "correctIndex": 2,
    "explanation": "En corriente alterna se distinguen tres potencias: la potencia activa que realiza trabajo útil se mide en vatios (W), la potencia reactiva electromagnética en VAR y la potencia aparente total en VA.",
    "skill": "Triángulo de Potencias",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Potencia en CA",
    "subtopic": "Unidades P, Q, S"
  },
  {
    "id": "ele-int-59",
    "sectionId": 10,
    "number": 59,
    "text": "Si un motor monofásico consume una potencia aparente de 1,000 VA con un factor de potencia de 0.75, ¿cuál es su potencia activa disipada en trabajo útil y calor?",
    "options": [
      "1,000 W",
      "750 W",
      "1,333 W",
      "250 W"
    ],
    "correctIndex": 1,
    "explanation": "P = S × cos(φ) = 1,000 VA × 0.75 = 750 W.",
    "skill": "Potencia Activa",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Motores Eléctricos",
    "subtopic": "Potencia Eléctrica Absorbida"
  },
  {
    "id": "ele-int-60",
    "sectionId": 10,
    "number": 60,
    "text": "¿Por qué las empresas distribuidoras de electricidad penalizan a las industrias que operan con un factor de potencia bajo (ej. menor a 0.90 o 0.92)?",
    "options": [
      "Porque sobrecarga las líneas y transformadores transportando corrientes reactivas elevadas sin realizar trabajo útil facturable",
      "Porque desgasta el agua de las represas hidroeléctricas",
      "Porque un bajo factor de potencia genera radiación atómica peligrosa",
      "Porque apaga los generadores por exceso de frío"
    ],
    "correctIndex": 0,
    "explanation": "Un factor de potencia bajo exige mayor corriente aparente (I = S/V) para la misma potencia activa de trabajo, aumentando las caídas de tensión y las pérdidas I²R en la red pública de distribución.",
    "skill": "Eficiencia Eléctrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Calidad de Suministro",
    "subtopic": "Penalización por Bajo Factor de Potencia"
  },
  {
    "id": "ele-int-61",
    "sectionId": 10,
    "number": 61,
    "text": "¿Qué equipo se conecta comúnmente en paralelo con una instalación industrial para corregir y elevar su factor de potencia?",
    "options": [
      "Banco de reactores inductivos pesados",
      "Resistencias de frenado de carbón",
      "Autotransformadores reductores",
      "Banco de condensadores (capacitores de potencia)"
    ],
    "correctIndex": 3,
    "explanation": "Dado que la mayoría de motores son cargas inductivas que consumen corriente atrasada (+Q), los bancos de condensadores aportan potencia reactiva capacitiva adelantada (-Q), compensando el desfase y acercando el factor de potencia a 1.",
    "skill": "Compensación de Reactiva",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Mejora del Factor de Potencia",
    "subtopic": "Bancos de Capacitores"
  },
  {
    "id": "ele-int-62",
    "sectionId": 10,
    "number": 62,
    "text": "En un transformador ideal con 1,000 espiras en el devanado primario y 100 espiras en el secundario, si se aplica una tensión primaria de 120 V, ¿cuál es el voltaje obtenido en el secundario?",
    "options": [
      "120 V",
      "1.2 V",
      "12 V",
      "1,200 V"
    ],
    "correctIndex": 2,
    "explanation": "Relación de transformación: V2 / V1 = N2 / N1  →  V2 = V1 × (N2 / N1) = 120 V × (100 / 1,000) = 120 × 0.1 = 12 V.",
    "skill": "Transformadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Relación de Espiras",
    "subtopic": "Cálculo de Tensión Secundaria"
  },
  {
    "id": "ele-int-63",
    "sectionId": 10,
    "number": 63,
    "text": "En el mismo transformador ideal reductor (de 120 V a 12 V), si por la carga conectada en el secundario circulan 10 A, ¿cuánta corriente ingresa por el primario?",
    "options": [
      "0.1 A",
      "1 A",
      "100 A",
      "10 A"
    ],
    "correctIndex": 1,
    "explanation": "En un transformador ideal la potencia aparente se conserva: V1 × I1 = V2 × I2  →  I1 = (V2 × I2) / V1 = (12 V × 10 A) / 120 V = 1 A.",
    "skill": "Transformadores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Conservación de Potencia",
    "subtopic": "Corriente Primaria en Reductores"
  },
  {
    "id": "ele-int-64",
    "sectionId": 10,
    "number": 64,
    "text": "¿Por qué el núcleo magnético de un transformador comercial o de un motor se construye apilando delgadas chapas de acero al silicio aisladas con barniz en lugar de un bloque macizo de hierro?",
    "options": [
      "Para reducir drásticamente las pérdidas energéticas por corrientes parásitas de Foucault (corrientes de Eddy)",
      "Para reducir el costo usando chatarra de acero",
      "Para que el aire enfríe el núcleo circulando entre las chapas",
      "Para aumentar la conductividad eléctrica del núcleo hacia tierra"
    ],
    "correctIndex": 0,
    "explanation": "El flujo magnético alterno induce corrientes circulantes (de Foucault) en el metal del núcleo. Laminar el núcleo e intercalar barniz aislante incrementa la resistencia al paso de estas corrientes, minimizando el calentamiento y las pérdidas.",
    "skill": "Núcleos Magnéticos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Pérdidas en Máquinas Eléctricas",
    "subtopic": "Corrientes de Foucault y Laminación"
  },
  {
    "id": "ele-int-65",
    "sectionId": 10,
    "number": 65,
    "text": "¿Qué tipo de pérdidas en el hierro de un núcleo magnético se deben a la fricción microscópica al reorientar continuamente los dominios magnéticos en cada ciclo de corriente alterna?",
    "options": [
      "Pérdidas por efecto Peltier",
      "Pérdidas dieléctricas en el cobre",
      "Pérdidas mecánicas por rozamiento",
      "Pérdidas por histéresis magnética"
    ],
    "correctIndex": 3,
    "explanation": "El ciclo de histéresis B-H representa la energía absorbida por el material ferromagnético en cada ciclo completo de magnetización y desmagnetización, liberada como calor.",
    "skill": "Circuitos Magnéticos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Pérdidas en el Hierro",
    "subtopic": "Histéresis Magnética"
  },
  {
    "id": "ele-int-66",
    "sectionId": 10,
    "number": 66,
    "text": "Si se dispone de un galvanómetro analógico cuya escala máxima es de 1 mA y resistencia interna de 50 Ω, ¿qué componente debe conectarse para convertirlo en un voltímetro de 10 V de fondo de escala?",
    "options": [
      "Un condensador electrolítico en derivación",
      "Un transformador reductor de corriente",
      "Una resistencia multiplicadora en serie de 9,950 Ω",
      "Una resistencia shunt en paralelo de 0.05 Ω"
    ],
    "correctIndex": 2,
    "explanation": "Para 10 V con 1 mA: R_total = V / I = 10 V / 0.001 A = 10,000 Ω. Como el galvanómetro ya tiene 50 Ω, se añade en serie R_serie = 10,000 - 50 = 9,950 Ω.",
    "skill": "Diseño de Instrumentación",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Instrumentación Analógica",
    "subtopic": "Resistencia Multiplicadora en Voltímetros"
  },
  {
    "id": "ele-int-67",
    "sectionId": 10,
    "number": 67,
    "text": "¿Qué componente debe conectarse en paralelo con el galvanómetro para ampliar su escala de medición de corriente y convertirlo en un amperímetro de mayor capacidad?",
    "options": [
      "Diodo Zener inverso",
      "Resistencia de derivación (resistor Shunt)",
      "Bobina en serie de alta reactancia",
      "Resistor multiplicador de alto valor en serie"
    ],
    "correctIndex": 1,
    "explanation": "El resistor Shunt de valor muy bajo se conecta en paralelo con el galvanómetro para desviar la mayor parte de la corriente de línea, dejando pasar por el medidor únicamente la fracción proporcional admisible.",
    "skill": "Diseño de Instrumentación",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Instrumentación Analógica",
    "subtopic": "Resistencia Shunt en Amperímetros"
  },
  {
    "id": "ele-int-68",
    "sectionId": 10,
    "number": 68,
    "text": "¿Por qué un voltímetro digital ideal debería tener teóricamente una resistencia de entrada infinita (∞)?",
    "options": [
      "Para no absorber corriente del circuito que está midiendo y evitar alterar las tensiones reales de los nodos (efecto de carga nulo)",
      "Para que el aparato no se sobrecaliente al estar apagado",
      "Para permitir el paso libre de corrientes de cortocircuito",
      "Para aumentar la velocidad de lectura en la pantalla"
    ],
    "correctIndex": 0,
    "explanation": "Cualquier corriente que ingrese al voltímetro modifica el circuito original (efecto de carga). Una impedancia de entrada extremadamente alta (ej. 10 MΩ) garantiza mediciones no invasivas.",
    "skill": "Fundamentos de Medición",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Instrumentación",
    "subtopic": "Impedancia del Voltímetro y Efecto de Carga"
  },
  {
    "id": "ele-int-69",
    "sectionId": 10,
    "number": 69,
    "text": "¿Qué ocurre si por descuido se conecta un multímetro configurado en la escala de medición de corriente (amperímetro) en paralelo con una toma de 120 V residencial?",
    "options": [
      "El multímetro mide con alta precisión la tensión de 120 V",
      "El multímetro almacena los 120 V en su batería de 9 V",
      "No ocurre nada porque el instrumento tiene protección automática de temperatura",
      "Se produce un cortocircuito violento que funde instantáneamente el fusible interno del multímetro o dispara las protecciones"
    ],
    "correctIndex": 3,
    "explanation": "El amperímetro tiene una resistencia casi nula (fracción de ohmio). Al conectarse en paralelo con una fuente de tensión, se produce un cortocircuito franco con corrientes de cientos de amperios que funden su fusible de protección.",
    "skill": "Seguridad en Mediciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Uso Seguro del Multímetro",
    "subtopic": "Error de Amperímetro en Paralelo"
  },
  {
    "id": "ele-int-70",
    "sectionId": 10,
    "number": 70,
    "text": "En un transistor bipolar de unión (BJT) tipo NPN operando en la región activa como amplificador, ¿cómo deben estar polarizadas sus dos uniones?",
    "options": [
      "Ambas uniones polarizadas en sentido inverso (corte)",
      "Unión Base-Emisor en inversa y Base-Colector en directa",
      "Unión Base-Emisor en directa y unión Base-Colector en inversa",
      "Ambas uniones polarizadas en sentido directo"
    ],
    "correctIndex": 2,
    "explanation": "La región activa o lineal de amplificación en un transistor BJT requiere polarización directa en la unión base-emisor (aprox. 0.7 V) y polarización inversa en la unión base-colector.",
    "skill": "Transistores BJT",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Electrónica Analógica",
    "subtopic": "Polarización en Región Activa"
  },
  {
    "id": "ele-int-71",
    "sectionId": 10,
    "number": 71,
    "text": "Si un transistor BJT tiene una ganancia de corriente en continua (hFE o β) de 150 y su corriente de base es IB = 20 µA, ¿cuál es su corriente de colector (IC) en la región activa?",
    "options": [
      "0.13 µA",
      "3 mA (0.003 A)",
      "7.5 mA",
      "30 mA"
    ],
    "correctIndex": 1,
    "explanation": "I_C = β × I_B = 150 × 20 µA = 3,000 µA = 3 mA.",
    "skill": "Cálculos con Transistores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Transistores BJT",
    "subtopic": "Ganancia de Corriente Beta"
  },
  {
    "id": "ele-int-72",
    "sectionId": 10,
    "number": 72,
    "text": "¿Qué estados caracterizan al transistor BJT cuando funciona como conmutador electrónico (llave digital)?",
    "options": [
      "Corte (abierto, IC = 0) y Saturación (cerrado, VCE ≈ 0.2 V)",
      "Región activa y avalancha térmica",
      "Emisión y absorción fotónica",
      "Resonancia y desacoplo capacitivo"
    ],
    "correctIndex": 0,
    "explanation": "En conmutación digital el transistor solo opera en corte (interruptor abierto, sin corriente de colector) o en saturación plena (interruptor cerrado, mínima caída de tensión VCE_sat).",
    "skill": "Transistores como Interruptores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Electrónica Digital",
    "subtopic": "Estados de Corte y Saturación"
  },
  {
    "id": "ele-int-73",
    "sectionId": 10,
    "number": 73,
    "text": "¿Qué componente semiconductor pasivo se conecta en paralelo con la bobina de un relé (en polarización inversa) para proteger al transistor excitador contra los picos de sobretensión inductiva al apagarse?",
    "options": [
      "Resistor variable LDR",
      "Fusible cerámico ultrarrápido",
      "Condensador electrolítico bipolar",
      "Diodo de libre circulación (diodo volante o flyback)"
    ],
    "correctIndex": 3,
    "explanation": "Al desconectar la bobina, la ley de Lenz induce un pico negativo violento (V = -L di/dt). El diodo flyback en inversa se activa drenando esa energía en la propia bobina y salvaguardando al transistor.",
    "skill": "Protección Electrónica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Conmutación Inductiva",
    "subtopic": "Diodo Flyback de Libre Circulación"
  },
  {
    "id": "ele-int-74",
    "sectionId": 10,
    "number": 74,
    "text": "En un circuito integrado temporizador clásico NE555 configurado como oscilador astable, ¿de qué componentes depende principalmente la frecuencia de las pulsaciones cuadradas generadas?",
    "options": [
      "Del tipo de diodo LED conectado a la salida",
      "Del cable de conexión al osciloscopio",
      "De los valores de dos resistencias externas (RA, RB) y un condensador externo (C)",
      "Exclusivamente de la tensión de la fuente de alimentación"
    ],
    "correctIndex": 2,
    "explanation": "La frecuencia astable del 555 se determina por la constante de carga y descarga: f ≈ 1.44 / [(RA + 2RB) × C].",
    "skill": "Temporizadores Integrados",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Circuito Integrado 555",
    "subtopic": "Oscilador Astable con 555"
  },
  {
    "id": "ele-int-75",
    "sectionId": 10,
    "number": 75,
    "text": "¿Qué función lógica básica realiza un circuito integrado digital cuando su salida es '1' (ALTO) únicamente si TODAS sus entradas son '1' simultáneamente?",
    "options": [
      "Compuerta XOR (O exclusiva)",
      "Compuerta AND (Y)",
      "Compuerta OR (O)",
      "Compuerta NOT (Inversor)"
    ],
    "correctIndex": 1,
    "explanation": "La función lógica AND exige que cada una de sus entradas esté en estado lógico 1 (verdadero) para activar su salida a nivel 1.",
    "skill": "Lógica Digital Básica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Compuertas Lógicas",
    "subtopic": "Compuerta AND"
  },
  {
    "id": "ele-int-76",
    "sectionId": 10,
    "number": 76,
    "text": "¿Cuál es la tabla de verdad de una compuerta inversora NOT?",
    "options": [
      "Entrada 0 produce salida 1; Entrada 1 produce salida 0",
      "Entrada 0 produce salida 0; Entrada 1 produce salida 1",
      "Ambas entradas deben ser iguales a 0 para que la salida sea 1",
      "La salida siempre es 1 sin importar la entrada"
    ],
    "correctIndex": 0,
    "explanation": "El inversor lógico (NOT) niega el estado de su única entrada: un nivel bajo (0) da nivel alto (1), y un nivel alto (1) da nivel bajo (0).",
    "skill": "Lógica Digital Básica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Compuertas Lógicas",
    "subtopic": "Compuerta NOT Inversora"
  },
  {
    "id": "ele-int-77",
    "sectionId": 10,
    "number": 77,
    "text": "¿Qué compuerta lógica universal tiene la propiedad de que combinándola consigo misma se puede construir cualquier otra función lógica booleana?",
    "options": [
      "AND simple",
      "OR simple",
      "Buffer seguidor",
      "NAND (o NOR)"
    ],
    "correctIndex": 3,
    "explanation": "Tanto la compuerta NAND como la NOR son universalmente completas funcionalmente; cualquier circuito digital complejo puede implementarse empleando exclusivamente compuertas NAND.",
    "skill": "Álgebra Booleana",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Digital",
    "subtopic": "Universalidad de NAND y NOR"
  },
  {
    "id": "ele-int-78",
    "sectionId": 10,
    "number": 78,
    "text": "¿Qué parámetro de un cable conductor define su sección en el sistema de calibres norteamericano AWG (American Wire Gauge)?",
    "options": [
      "El número AWG indica directamente el peso en gramos por metro",
      "El calibre AWG no tiene relación con el grosor del alambre",
      "A menor número AWG, mayor es el diámetro y sección de cobre del conductor",
      "A menor número AWG, más delgado es el alambre"
    ],
    "correctIndex": 2,
    "explanation": "En la escala AWG la numeración es inversa: un cable calibre 10 AWG es significativamente más grueso y transporta más corriente que uno calibre 14 o 18 AWG.",
    "skill": "Calibres de Conductores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Conductores Eléctricos",
    "subtopic": "Escala AWG"
  },
  {
    "id": "ele-int-79",
    "sectionId": 10,
    "number": 79,
    "text": "¿Qué calibre AWG de cobre se emplea típicamente como estándar mínimo para los circuitos derivados de tomacorrientes generales de 15 A o 20 A en viviendas según el NEC?",
    "options": [
      "Calibre 30 AWG",
      "Calibre 12 AWG (o 14 AWG para 15 A)",
      "Calibre 22 AWG",
      "Calibre 4/0 AWG"
    ],
    "correctIndex": 1,
    "explanation": "El código eléctrico (NEC / Código Ecuatoriano de la Construcción) prescribe conductores de cobre calibre 14 AWG protegidos con 15 A, o calibre 12 AWG protegidos con disyuntores de 20 A para tomas generales.",
    "skill": "Normativas de Instalaciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Dimensionamiento de Cables",
    "subtopic": "Calibre de Tomacorrientes"
  },
  {
    "id": "ele-int-80",
    "sectionId": 10,
    "number": 80,
    "text": "¿Cuál es el propósito del ensayo de resistencia de aislamiento realizado con un megóhmetro (Megger)?",
    "options": [
      "Comprobar con alta tensión continua (ej. 500 V o 1,000 V) que el aislamiento de cables y motores no presente fugas ni degradación dieléctrica",
      "Medir la resistencia del filamento de un foco incandescente",
      "Comprobar el nivel de gasolina en un generador",
      "Medir la frecuencia de la red de corriente alterna"
    ],
    "correctIndex": 0,
    "explanation": "El Megger inyecta voltajes DC de prueba elevados (250 V, 500 V o 1,000 V) para medir resistencias del orden de megaohmios (MΩ) o gigaohmios (GΩ), detectando fisuras o humedad en los aislantes.",
    "skill": "Pruebas de Aislamiento",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Mantenimiento Eléctrico",
    "subtopic": "Uso del Megóhmetro (Megger)"
  },
  {
    "id": "ele-int-81",
    "sectionId": 10,
    "number": 81,
    "text": "¿Qué valor mínimo de resistencia de aislamiento suele considerarse aceptable como regla general para equipos de baja tensión operativos según normas internacionales?",
    "options": [
      "1 Ohmio",
      "0.01 Ohmios",
      "10 microohmios",
      "Al menos 1 Megaohmio (1 MΩ) a 1,000 V de tensión nominal"
    ],
    "correctIndex": 3,
    "explanation": "Como regla empírica clásica refrendada por normas técnicas, el aislamiento debe ser como mínimo de 1 MΩ por cada kilovoltio de tensión de operación (con un mínimo de 1 MΩ en baja tensión).",
    "skill": "Criterios de Aislamiento",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Mantenimiento Eléctrico",
    "subtopic": "Criterio de 1 Megaohmio Mínimo"
  },
  {
    "id": "ele-int-82",
    "sectionId": 10,
    "number": 82,
    "text": "¿Qué dispositivo de protección se dispara por deformación mecánica de una lámina compuesta por dos metales con distinto coeficiente de dilatación térmica ante sobrecargas sostenidas?",
    "options": [
      "Tubo de descarga de gas neón",
      "Varistor de óxido de zinc",
      "Elemento térmico bimetálico",
      "Bobina electromagnética de disparo instantáneo"
    ],
    "correctIndex": 2,
    "explanation": "El bimetal está formado por dos láminas metálicas unidas con diferente dilatación térmica; al calentarse por sobrecorriente prolongada, se curva y libera el pestillo del disparador.",
    "skill": "Dispositivos Bimetálicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Protecciones Térmicas",
    "subtopic": "Principio del Bimetal"
  },
  {
    "id": "ele-int-83",
    "sectionId": 10,
    "number": 83,
    "text": "¿Qué parte de un disyuntor termomagnético se encarga de abrir el circuito de manera ultrarrápida (en milisegundos) cuando ocurre un cortocircuito severo?",
    "options": [
      "El tornillo de apriete del borne",
      "La bobina electromagnética de disparo instantáneo",
      "La lámina bimetálica lenta",
      "La carcasa plástica externa"
    ],
    "correctIndex": 1,
    "explanation": "La bobina magnética produce una fuerza proporcional a la corriente; ante corrientes brutales de cortocircuito, atrae el núcleo instantáneamente disparando el mecanismo sin esperar que caliente el bimetal.",
    "skill": "Disyuntores Termomagnéticos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Protecciones Magnéticas",
    "subtopic": "Disparo Magnético Instantáneo"
  },
  {
    "id": "ele-int-84",
    "sectionId": 10,
    "number": 84,
    "text": "¿Qué tipo de curva de disparo de un termomagnético (según IEC 60898) tiene su disparo magnético ajustado entre 3 y 5 veces la corriente nominal, siendo ideal para circuitos resistivos e iluminación doméstica?",
    "options": [
      "Curva B",
      "Curva C",
      "Curva D",
      "Curva Z"
    ],
    "correctIndex": 0,
    "explanation": "La curva B dispara magnéticamente entre 3 In y 5 In, protegiendo circuitos con conductores largos y cargas predominantemente resistivas sin corrientes de arranque elevadas.",
    "skill": "Curvas de Disparo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Protecciones Modulares",
    "subtopic": "Termomagnéticos Curva B"
  },
  {
    "id": "ele-int-85",
    "sectionId": 10,
    "number": 85,
    "text": "¿Cuál es la curva de disparo estándar más común en instalaciones domiciliarias y comerciales generales, con disparo magnético entre 5 y 10 veces In?",
    "options": [
      "Curva B",
      "Curva D",
      "Curva MA",
      "Curva C"
    ],
    "correctIndex": 3,
    "explanation": "La curva C (5 a 10 In) es el estándar de uso general para iluminación mixta, tomas de corriente y pequeños electrodomésticos con corrientes de inserción moderadas.",
    "skill": "Curvas de Disparo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Protecciones Modulares",
    "subtopic": "Termomagnéticos Curva C"
  },
  {
    "id": "ele-int-86",
    "sectionId": 10,
    "number": 86,
    "text": "¿Qué curva de disparo se reserva para cargas inductivas muy pesadas como transformadores industriales y motores con corrientes de arranque de 10 a 20 veces In?",
    "options": [
      "Curva B",
      "Curva C",
      "Curva D",
      "Curva A"
    ],
    "correctIndex": 2,
    "explanation": "La curva D (10 a 20 In) tolera los intensos picos transitorios de magnetización de transformadores y arranque pesado de motores sin disparos indeseados.",
    "skill": "Curvas de Disparo",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Protecciones Industriales",
    "subtopic": "Termomagnéticos Curva D"
  },
  {
    "id": "ele-int-87",
    "sectionId": 10,
    "number": 87,
    "text": "¿Qué dispositivo electromecánico de maniobra se emplea para conmutar a distancia las corrientes de alimentación principales de motores eléctricos industriales?",
    "options": [
      "Tiristor de baja potencia",
      "Contactor electromagnético",
      "Potenciómetro deslizante",
      "Fusible de cuchilla"
    ],
    "correctIndex": 1,
    "explanation": "El contactor es un interruptor accionado electromagnéticamente por una bobina auxiliar que cierra contactos de potencia capaces de soportar y extinguir las corrientes de régimen y arranque de motores.",
    "skill": "Aparamenta Eléctrica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Automatismos Eléctricos",
    "subtopic": "Contactor de Potencia"
  },
  {
    "id": "ele-int-88",
    "sectionId": 10,
    "number": 88,
    "text": "¿Qué relé de protección se acopla directamente bajo un contactor para resguardar a un motor contra calentamientos perjudiciales por sobrecarga prolongada o falta de una fase?",
    "options": [
      "Relé térmico bimetálico de sobrecarga",
      "Relé diferencial de 300 mA",
      "Interruptor de nivel de mercurio",
      "Sensor ultrasónico de distancia"
    ],
    "correctIndex": 0,
    "explanation": "El relé térmico mide la corriente que pasa al motor mediante bimetales calefactados; si sobrepasa el valor calibrado durante un tiempo crítico, abre un contacto auxiliar que desenergiza la bobina del contactor.",
    "skill": "Protección de Motores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Automatismos Eléctricos",
    "subtopic": "Relé Térmico de Sobrecarga"
  },
  {
    "id": "ele-int-89",
    "sectionId": 10,
    "number": 89,
    "text": "¿Cuál es la función del contacto normalmente abierto (NA 13-14) en el circuito de mando de un contactor configurado con pulsadores de arranque y parada?",
    "options": [
      "Generar chispa para iluminar el tablero",
      "Invertir el giro del motor automáticamente a los 5 segundos",
      "Medir el consumo en kilovatios",
      "Servir de enclavamiento o retención eléctrica para mantener energizada la bobina al soltar el pulsador de marcha"
    ],
    "correctIndex": 3,
    "explanation": "El contacto auxiliar de retención (sello o automantenimiento) se conecta en paralelo con el pulsador de marcha normalmente abierto, garantizando que el contactor siga activo una vez que el operario retira el dedo.",
    "skill": "Circuitos de Mando",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Lógica Cableada",
    "subtopic": "Enclavamiento y Retención Eléctrica"
  },
  {
    "id": "ele-int-90",
    "sectionId": 10,
    "number": 90,
    "text": "¿Cómo se invierte el sentido de giro de un motor de inducción trifásico convencional?",
    "options": [
      "Aumentando la tensión de línea al doble",
      "Conectando una resistencia en serie con el eje mecánico",
      "Intercambiando la conexión de dos cualesquiera de sus tres fases de alimentación (ej. L1 por L2)",
      "Invirtiendo la conexión del conductor de puesta a tierra"
    ],
    "correctIndex": 2,
    "explanation": "Al permutar dos fases entre sí se invierte la secuencia de fases del campo magnético giratorio estatórico, forzando al rotor a girar en sentido contrario.",
    "skill": "Motores Trifásicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Máquinas Asíncronas",
    "subtopic": "Inversión de Giro Trifásica"
  },
  {
    "id": "ele-int-91",
    "sectionId": 10,
    "number": 91,
    "text": "¿Qué riesgo existe al realizar un arranque e inversión de giro con dos contactores si ambos se activaran al mismo tiempo?",
    "options": [
      "Se duplicaría el factor de potencia",
      "Se produciría un cortocircuito bifásico directo entre las líneas invertidas",
      "El motor giraría al doble de su velocidad nominal",
      "El motor generaría energía hacia la red"
    ],
    "correctIndex": 1,
    "explanation": "Al conmutar fases distintas, si ambos contactores cierran a la vez se crea un cortocircuito directo entre fases. Para impedirlo se instalan enclavamientos mecánicos y eléctricos cruzados (contactos NC en serie con las bobinas opuestas).",
    "skill": "Seguridad en Automatismos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Inversores de Giro",
    "subtopic": "Enclavamiento Eléctrico Cruzado"
  },
  {
    "id": "ele-int-92",
    "sectionId": 10,
    "number": 92,
    "text": "En un sistema trifásico equilibrado en conexión estrella (Y) con neutro, ¿cuál es la relación matemática entre el voltaje de línea (V_L) y el voltaje de fase (V_F)?",
    "options": [
      "V_L = √3 × V_F ≈ 1.732 × V_F",
      "V_L = V_F",
      "V_L = 3 × V_F",
      "V_L = V_F / √3"
    ],
    "correctIndex": 0,
    "explanation": "En estrella, la tensión de línea (entre dos fases vivas) es igual a la raíz de 3 multiplicada por la tensión simple o de fase (entre fase y neutro): V_L = √3·V_F (por ejemplo, 120 V × 1.732 ≈ 208 V, o 220 V × 1.732 ≈ 380 V).",
    "skill": "Sistemas Trifásicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Conexión Estrella",
    "subtopic": "Tensión de Línea vs Tensión de Fase"
  },
  {
    "id": "ele-int-93",
    "sectionId": 10,
    "number": 93,
    "text": "En un sistema trifásico equilibrado en conexión estrella (Y), ¿cuál es la relación entre la corriente de línea (I_L) y la corriente que circula por cada fase del devanado (I_F)?",
    "options": [
      "I_L = √3 × I_F",
      "I_L = I_F / √3",
      "I_L = 3 × I_F",
      "I_L = I_F"
    ],
    "correctIndex": 3,
    "explanation": "En una conexión estrella cada línea externa está directamente en serie con su respectiva fase interna; por tanto, la corriente de línea es idéntica a la corriente de fase: I_L = I_F.",
    "skill": "Sistemas Trifásicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Conexión Estrella",
    "subtopic": "Corrientes en Conexión Estrella"
  },
  {
    "id": "ele-int-94",
    "sectionId": 10,
    "number": 94,
    "text": "En un sistema trifásico equilibrado en conexión triángulo o delta (Δ), ¿cuál es la relación entre las tensiones de línea (V_L) y las tensiones de fase (V_F)?",
    "options": [
      "V_L = V_F / √3",
      "V_L = 2 × V_F",
      "V_L = V_F",
      "V_L = √3 × V_F"
    ],
    "correctIndex": 2,
    "explanation": "En la configuración delta, cada fase o carga está conectada directamente entre dos líneas de alimentación, por lo que la tensión de fase es idéntica a la tensión de línea: V_L = V_F.",
    "skill": "Sistemas Trifásicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Conexión Triángulo",
    "subtopic": "Tensiones en Delta"
  },
  {
    "id": "ele-int-95",
    "sectionId": 10,
    "number": 95,
    "text": "En una carga equilibrada conectada en delta (Δ), ¿cuál es la relación entre la corriente de línea externa (I_L) y la corriente en cada rama de la delta (I_F)?",
    "options": [
      "I_L = 3 × I_F",
      "I_L = √3 × I_F ≈ 1.732 × I_F",
      "I_L = I_F",
      "I_L = I_F / √3"
    ],
    "correctIndex": 1,
    "explanation": "En cada nodo de la delta entran y salen corrientes desfasadas 120°; la suma vectorial resulta en que la corriente de línea es √3 veces mayor que la corriente que recorre cada rama: I_L = √3·I_F.",
    "skill": "Sistemas Trifásicos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Conexión Triángulo",
    "subtopic": "Corrientes en Delta"
  },
  {
    "id": "ele-int-96",
    "sectionId": 10,
    "number": 96,
    "text": "¿Cuál es la fórmula para calcular la potencia activa total (P) en un sistema trifásico equilibrado conociendo las magnitudes de línea?",
    "options": [
      "P = √3 × V_L × I_L × cos(φ)",
      "P = 3 × V_L × I_L × cos(φ)",
      "P = V_L × I_L × cos(φ)",
      "P = √3 × V_L × I_L / cos(φ)"
    ],
    "correctIndex": 0,
    "explanation": "La potencia activa trifásica total expresada en términos de valores de línea (tensión entre fases y corriente de línea) es siempre P = √3·V_L·I_L·cos(φ), tanto en estrella como en delta.",
    "skill": "Potencia Trifásica",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Cálculo de Potencia",
    "subtopic": "Fórmula General Trifásica"
  },
  {
    "id": "ele-int-97",
    "sectionId": 10,
    "number": 97,
    "text": "En una vivienda, si la suma de todas las cargas conectadas simultáneamente es de 6,000 W a 120 V, ¿cuál es la corriente total demandada al alimentador principal?",
    "options": [
      "25 A",
      "72 A",
      "12 A",
      "50 A"
    ],
    "correctIndex": 3,
    "explanation": "I = P / V = 6,000 W / 120 V = 50 A.",
    "skill": "Dimensionamiento Residencial",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Alimentadores Principales",
    "subtopic": "Cálculo de Demanda Máxima"
  },
  {
    "id": "ele-int-98",
    "sectionId": 10,
    "number": 98,
    "text": "¿Cuál es la velocidad de sincronismo (n_s en RPM) de un campo magnético en el estator de un motor de 4 polos alimentado a 60 Hz?",
    "options": [
      "1,200 RPM",
      "1,500 RPM",
      "1,800 RPM",
      "3,600 RPM"
    ],
    "correctIndex": 2,
    "explanation": "La velocidad síncrona se calcula como n_s = (120 × f) / P_polos = (120 × 60) / 4 = 7,200 / 4 = 1,800 RPM.",
    "skill": "Máquinas Asíncronas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Velocidad de Sincronismo",
    "subtopic": "Cálculo de RPM en 60 Hz"
  },
  {
    "id": "ele-int-99",
    "sectionId": 10,
    "number": 99,
    "text": "Si un motor de inducción de 4 polos (n_s = 1,800 RPM) gira a plena carga a una velocidad real en el eje de 1,728 RPM, ¿cuál es su deslizamiento porcentual (s)?",
    "options": [
      "10%",
      "4%",
      "7.2%",
      "2%"
    ],
    "correctIndex": 1,
    "explanation": "El deslizamiento se define como s = [(n_s - n) / n_s] × 100% = [(1,800 - 1,728) / 1,800] × 100% = (72 / 1,800) × 100% = 4%.",
    "skill": "Deslizamiento en Motores",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Máquinas Asíncronas",
    "subtopic": "Cálculo de Deslizamiento"
  },
  {
    "id": "ele-int-100",
    "sectionId": 10,
    "number": 100,
    "text": "¿Por qué el rotor de un motor de inducción asíncrono nunca puede alcanzar exactamente la velocidad de sincronismo (n_s) en condiciones normales de funcionamiento como motor?",
    "options": [
      "Porque si girara a la misma velocidad que el campo magnético, no habría variación de flujo cortando las barras del rotor, cesando la corriente inducida y el par motor",
      "Porque el peso del rotor frenaría el campo magnético a cero",
      "Porque los rodamientos mecánicos se fundirían por exceso de frío",
      "Porque el voltaje de línea caería automáticamente a cero"
    ],
    "correctIndex": 0,
    "explanation": "El par motor depende de la ley de inducción de Faraday. Si la velocidad relativa entre el rotor y el campo giratorio fuera nula (deslizamiento s = 0), no se induciría fuerza electromotriz ni corriente en el rotor, desapareciendo la fuerza de Lorentz necesaria para mantener el giro.",
    "skill": "Principios de Máquinas Asíncronas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "topic": "Teoría del Motor Asíncrono",
    "subtopic": "Condición de Deslizamiento Distinto de Cero"
  }
];
