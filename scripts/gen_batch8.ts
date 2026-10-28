import * as fs from 'fs';
import * as path from 'path';

function writeSubjectFile(fileName: string, exportName: string, subjectTitle: string, questions: any[]) {
  const content = `import { Question } from '../../types';

/**
 * BANCO OFICIAL DE PREGUNTAS: ${subjectTitle.toUpperCase()}
 * 100 Reactivos Verificados Pedagógicamente:
 * - 20 Básico
 * - 20 Intermedio
 * - 20 Bachillerato
 * - 20 Técnico
 * - 20 Universitario
 */
export const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};
`;
  const outPath = path.join(process.cwd(), 'src/data/questions', fileName);
  fs.writeFileSync(outPath, content, 'utf8');
  console.log(`Saved ${questions.length} questions to ${outPath}`);
}

// =========================================================================
// 10. ELECTRICIDAD Y ELECTRÓNICA (100 preguntas)
// =========================================================================
function makeElectricidad() {
  const items: any[] = [];

  // 20 BÁSICO
  const basRaw = [
    {
      q: '¿Cuál es la unidad básica del Sistema Internacional para medir la corriente eléctrica?',
      opts: ['Voltio (V)', 'Amperio (A)', 'Ohmio (Ω)', 'Vatio (W)'],
      ans: 1,
      exp: 'El amperio (A) mide la intensidad de corriente eléctrica, definida como el flujo de un culombio de carga por segundo (1 A = 1 C/s).',
      skill: 'Unidades Eléctricas Básicas',
      topic: 'Conceptos Eléctricos Fundamentales',
      sub: 'Corriente y Amperio'
    },
    {
      q: '¿Qué magnitud física mide la oposición natural que presenta un material al paso de la corriente eléctrica?',
      opts: ['Voltaje', 'Resistencia eléctrica', 'Potencia', 'Capacitancia'],
      ans: 1,
      exp: 'La resistencia eléctrica (R), medida en ohmios (Ω), cuantifica la dificultad que encuentran los electrones al fluir por un conductor.',
      skill: 'Resistencia Eléctrica',
      topic: 'Leyes Básicas',
      sub: 'Resistencia y Ohm'
    },
    {
      q: '¿Qué componente eléctrico básico se utiliza para abrir o cerrar intencionalmente el paso de la corriente en un circuito?',
      opts: ['Fusible', 'Interruptor', 'Transformador', 'Condensador'],
      ans: 1,
      exp: 'El interruptor es un dispositivo de control mecánico que conmuta entre circuito abierto (sin paso de corriente) y circuito cerrado.',
      skill: 'Componentes de Control Básico',
      topic: 'Circuitos Elementales',
      sub: 'Interruptores'
    },
    {
      q: '¿Cuál de los siguientes materiales es un aislante eléctrico comúnmente utilizado para recubrir cables de cobre?',
      opts: ['Plástico PVC', 'Aluminio', 'Plata', 'Hierro'],
      ans: 0,
      exp: 'Los polímeros plásticos (como el PVC) tienen electrones fuertemente ligados que impiden la conducción, protegiendo contra descargas.',
      skill: 'Materiales Conductores y Aislantes',
      topic: 'Materiales Eléctricos',
      sub: 'Aislantes'
    },
    {
      q: '¿Qué ocurre en un circuito eléctrico en serie si una de las bombillas conectadas se quema o se desconecta?',
      opts: [
        'Las demás bombillas brillan con el doble de intensidad',
        'Todas las demás bombillas se apagan porque el circuito queda abierto',
        'El circuito se pone en cortocircuito',
        'No ocurre ningún cambio en las demás'
      ],
      ans: 1,
      exp: 'En un circuito serie existe un único camino continuo para la corriente; si se interrumpe en cualquier punto, la corriente cesa por completo.',
      skill: 'Circuitos en Serie',
      topic: 'Topologías de Circuitos',
      sub: 'Circuito Serie Básico'
    },
    {
      q: '¿Qué instrumento de medición portátil se utiliza para medir voltaje, corriente y resistencia en un solo dispositivo?',
      opts: ['Osciloscopio', 'Multímetro (o polímetro tester)', 'Tacómetro', 'Vatímetro analógico'],
      ans: 1,
      exp: 'El multímetro integra voltímetro (AC/DC), amperímetro y óhmetro en una herramienta de diagnóstico estándar.',
      skill: 'Instrumental Eléctrico de Medición',
      topic: 'Herramientas de Taller',
      sub: 'El Multímetro'
    },
    {
      q: '¿Qué tipo de corriente eléctrica suministran las pilas alcalinas y las baterías de automóviles?',
      opts: ['Corriente Alterna (CA)', 'Corriente Continua (CC o DC)', 'Corriente trifásica', 'Corriente pulsante senoidal'],
      ans: 1,
      exp: 'Las baterías electroquímicas generan corriente continua constante con polaridad fija (+ y -) que fluye en una sola dirección.',
      skill: 'Tipos de Corriente Eléctrica',
      topic: 'Fuentes de Alimentación',
      sub: 'Corriente Continua (DC)'
    },
    {
      q: '¿Cuál es la función primordial de un fusible en una instalación eléctrica domiciliaria o vehicular?',
      opts: [
        'Aumentar la tensión de la red',
        'Proteger el circuito fundiéndose e interrumpiendo la corriente ante una sobrecorriente o cortocircuito peligroso',
        'Almacenar energía electrostática',
        'Medir el consumo en kilovatios-hora'
      ],
      ans: 1,
      exp: 'El fusible contiene un hilo metálico calibrado que se funde por efecto Joule cuando la corriente supera el valor nominal de seguridad.',
      skill: 'Dispositivos de Protección Pasiva',
      topic: 'Seguridad Eléctrica',
      sub: 'Fusibles'
    },
    {
      q: 'En una conexión doméstica de tomacorriente en paralelo, ¿qué ventaja fundamental tiene respecto a una conexión en serie?',
      opts: [
        'Si se desconecta o apaga un electrodoméstico, todos los demás continúan funcionando normalmente con el mismo voltaje',
        'Requiere un solo cable para toda la casa',
        'Aumenta la resistencia total del hogar',
        'Evita el uso de interruptores'
      ],
      ans: 0,
      exp: 'En paralelo, cada rama es independiente y recibe la tensión nominal completa de la red (110 V o 220 V) independientemente de las otras.',
      skill: 'Circuitos en Paralelo',
      topic: 'Instalaciones Eléctricas',
      sub: 'Ventajas del Circuito en Paralelo'
    },
    {
      q: '¿Cuál es la ley básica de la electrostática para las cargas eléctricas de igual y distinto signo?',
      opts: [
        'Cargas del mismo signo se atraen y de signo opuesto se repelen',
        'Cargas del mismo signo se repelen y cargas de signo opuesto se atraen',
        'Todas las cargas se atraen independientemente de su signo',
        'Las cargas neutras repelen a las positivas'
      ],
      ans: 1,
      exp: 'Es la ley fundamental de atracción y repulsión electrostática expresada cuantitativamente por la Ley de Coulomb.',
      skill: 'Electrostática Fundamental',
      topic: 'Cargas Eléctricas',
      sub: 'Atracción y Repulsión'
    },
    {
      q: '¿Qué componente semiconductor emite luz visible cuando circula corriente eléctrica a través de él en sentido directo?',
      opts: ['Diodo Zener', 'Diodo Emisor de Luz (LED)', 'Termistor NTC', 'Condensador electrolítico'],
      ans: 1,
      exp: 'El LED (Light Emitting Diode) emite fotones por electroluminiscencia cuando los electrones recombinan con huecos en la unión p-n polarizada directamente.',
      skill: 'Componentes Optoelectrónicos',
      topic: 'Electrónica Básica',
      sub: 'Diodos LED'
    },
    {
      q: '¿Qué unidad mide la diferencia de potencial eléctrico o tensión que impulsa a los electrones a moverse?',
      opts: ['Ohmio', 'Voltio (V)', 'Amperio', 'Joule'],
      ans: 1,
      exp: 'El voltio (V) es la unidad del SI para el potencial eléctrico, fuerza electromotriz (FEM) y caída de tensión (1 V = 1 J/C).',
      skill: 'Tensión y Potencial Eléctrico',
      topic: 'Magnitudes Eléctricas',
      sub: 'Voltio y Tensión'
    },
    {
      q: '¿Cómo se llama el cable de seguridad de color verde o verde-amarillo que conecta las carcasas metálicas a tierra?',
      opts: ['Cable de fase', 'Cable neutro', 'Cable de puesta a tierra (tierra de protección)', 'Cable de retorno'],
      ans: 2,
      exp: 'El conductor de protección a tierra deriva corrientes de fuga hacia una jabalina enterrada para evitar choques eléctricos al usuario.',
      skill: 'Código de Colores y Puesta a Tierra',
      topic: 'Seguridad Eléctrica',
      sub: 'Conductor de Protección PE'
    },
    {
      q: '¿Qué fenómeno térmico provoca que un conductor se caliente cuando circula por él una corriente eléctrica (como en una estufa o tostadora)?',
      opts: ['Efecto Meissner', 'Efecto Joule', 'Efecto Hall', 'Efecto Seebeck'],
      ans: 1,
      exp: 'El efecto Joule disipa potencia en forma de calor por choque inelástico de electrones con los átomos del conductor: Q = I² · R · t.',
      skill: 'Efecto Joule y Conversión Térmica',
      topic: 'Termodinámica Eléctrica',
      sub: 'Efecto Joule'
    },
    {
      q: '¿Qué componente pasivo tiene la capacidad de almacenar carga eléctrica en un campo electrostático entre dos placas conductoras separadas por un dieléctrico?',
      opts: ['Inductor', 'Condensador (o capacitor)', 'Resistencia', 'Potenciómetro'],
      ans: 1,
      exp: 'El condensador almacena carga Q = C · V en sus armaduras, oponiéndose a cambios bruscos de tensión.',
      skill: 'Capacitancia y Condensadores',
      topic: 'Componentes Pasivos',
      sub: 'Condensadores'
    },
    {
      q: 'Si tocas accidentalmente un cable energizado con las manos mojadas, ¿qué le ocurre a la resistencia del cuerpo humano y al riesgo de electrocución?',
      opts: [
        'La resistencia del cuerpo disminuye drásticamente, aumentando la corriente que lo atraviesa y el peligro letal',
        'La resistencia aumenta y el cuerpo queda aislado',
        'El agua bloquea completamente la corriente eléctrica',
        'No hay ninguna diferencia con las manos secas'
      ],
      ans: 0,
      exp: 'La piel húmeda reduce la resistencia cutánea de más de 100,000 Ω a menos de 1,000 Ω, facilitando el paso de corrientes que inducen fibrilación.',
      skill: 'Riesgo Eléctrico y Seguridad Humana',
      topic: 'Seguridad Ocupacional',
      sub: 'Resistencia Corporal y Humedad'
    },
    {
      q: '¿Qué dispositivo electromagnético utiliza una pequeña corriente en una bobina para accionar mecánicamente un interruptor de alta corriente?',
      opts: ['Relé (o relevador electromecánico)', 'Transformador reductor', 'Resistencia variable', 'Diodo Schottky'],
      ans: 0,
      exp: 'El relé utiliza el campo magnético de un electroimán para cerrar o abrir contactos de potencia de forma galvánicamente aislada.',
      skill: 'Dispositivos Electromecánicos',
      topic: 'Automatización Básica',
      sub: 'El Relé Electromecánico'
    },
    {
      q: '¿Qué tipo de pila no se puede recargar y debe desecharse en puntos limpios una vez agotada su energía química inicial?',
      opts: ['Batería de iones de litio', 'Pila primaria (no recargable alcalina)', 'Batería de plomo-ácido', 'Batería NiMH'],
      ans: 1,
      exp: 'Las celdas primarias experimentan reacciones electroquímicas irreversibles durante la descarga, a diferencia de los acumuladores secundarios recargables.',
      skill: 'Pilas y Acumuladores',
      topic: 'Fuentes Electroquímicas',
      sub: 'Pilas Primarias vs Secundarias'
    },
    {
      q: '¿Cuál es la ley física que relaciona la tensión (V), la corriente (I) y la resistencia (R) en un circuito resistivo básico?',
      opts: ['Ley de Faraday', 'Ley de Ohm (V = I · R)', 'Ley de Coulomb', 'Ley de Ampère'],
      ans: 1,
      exp: 'La Ley de Georg Simon Ohm es la base del análisis de circuitos eléctricos lineales: la corriente es directamente proporcional al voltaje e inversamente proporcional a la resistencia.',
      skill: 'Ley de Ohm Fundamental',
      topic: 'Circuitos Eléctricos',
      sub: 'Ley de Ohm'
    },
    {
      q: '¿Qué componente resistivo permite variar manualmente su valor de resistencia girando un eje o perilla (como el control de volumen de una radio)?',
      opts: ['Termistor', 'Potenciómetro (o reóstato)', 'Fotocélula LDR', 'Varistor'],
      ans: 1,
      exp: 'El potenciómetro es una resistencia de tres terminales con un cursor móvil que actúa como divisor de tensión ajustable manual.',
      skill: 'Resistencias Variables',
      topic: 'Componentes Electrónicos',
      sub: 'Potenciómetros'
    }
  ];

  basRaw.forEach((item, idx) => {
    items.push({
      id: `ele-bas-${idx + 1}`,
      sectionId: 10,
      number: idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Fácil',
      educationalLevel: 'Básico',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 INTERMEDIO
  const intRaw = [
    {
      q: 'Según la Ley de Ohm, si una resistencia de 20 Ω se conecta a una fuente de 120 V, ¿cuál es la corriente que circula por ella?',
      opts: ['0.16 A', '6 A', '24 A', '2,400 A'],
      ans: 1,
      exp: 'I = V / R = 120 V / 20 Ω = 6 Amperios.',
      skill: 'Cálculos con Ley de Ohm',
      topic: 'Circuitos Eléctricos',
      sub: 'Cálculo de Corriente'
    },
    {
      q: '¿Cuál es la potencia eléctrica disipada por una resistencia que consume 5 A bajo una tensión de 220 V?',
      opts: ['44 W', '550 W', '1,100 W', '2,200 W'],
      ans: 2,
      exp: 'Potencia P = V · I = 220 V × 5 A = 1,100 Vatios (W).',
      skill: 'Potencia Eléctrica en DC',
      topic: 'Cálculos de Potencia',
      sub: 'Ley de Watt'
    },
    {
      q: '¿Qué establece la Primera Ley de Kirchhoff (Ley de Corrientes de Kirchhoff - LCK) para un nodo en cualquier circuito eléctrico?',
      opts: [
        'La suma algebraica de las corrientes que entran a un nodo es igual a la suma de las corrientes que salen de él (∑ I_nodo = 0)',
        'La corriente es inversamente proporcional a la inductancia',
        'En un nodo el voltaje siempre se anula',
        'La potencia de entrada es siempre cero'
      ],
      ans: 0,
      exp: 'La LCK se fundamenta en el principio de conservación de la carga eléctrica: la carga no puede crearse ni acumularse indefinidamente en un nodo.',
      skill: 'Leyes de Kirchhoff',
      topic: 'Análisis de Circuitos',
      sub: 'Ley de Corrientes de Kirchhoff (LCK)'
    },
    {
      q: 'En un circuito serie con tres resistencias de 15 Ω, 25 Ω y 60 Ω, ¿cuál es la resistencia equivalente total?',
      opts: ['10 Ω', '50 Ω', '100 Ω', '150 Ω'],
      ans: 2,
      exp: 'En serie las resistencias se suman algebraicamente: R_eq = 15 + 25 + 60 = 100 Ω.',
      skill: 'Resistencias en Serie',
      topic: 'Asociación de Resistencias',
      sub: 'Resistencia Equivalente en Serie'
    },
    {
      q: '¿Qué componente semiconductor permite el paso de corriente eléctrica con facilidad en polarización directa pero lo bloquea en polarización inversa?',
      opts: ['Diodo semiconductor p-n', 'Condensador cerámico', 'Transformador elevador', 'Inductor toroidal'],
      ans: 0,
      exp: 'La unión p-n del diodo tiene una barrera de potencial (~0.7 V en silicio) que conduce en directa y presenta alta resistencia en inversa.',
      skill: 'Diodos Semiconductores',
      topic: 'Electrónica de Estado Sólido',
      sub: 'Polarización de Diodos'
    },
    {
      q: '¿Cuál es la capacitancia equivalente de dos condensadores de 10 μF conectados en paralelo?',
      opts: ['5 μF', '10 μF', '20 μF', '100 μF'],
      ans: 2,
      exp: 'En paralelo, las capacidades se suman directamente: C_eq = C₁ + C₂ = 10 μF + 10 μF = 20 μF.',
      skill: 'Asociación de Condensadores',
      topic: 'Capacitancia',
      sub: 'Condensadores en Paralelo'
    },
    {
      q: 'En corriente alterna senoidal, ¿cuál es la relación entre el valor eficaz (RMS) y el valor pico o máximo (V_pico) de la tensión?',
      opts: ['V_rms = V_pico / √2 ≈ 0.707 · V_pico', 'V_rms = 2 · V_pico', 'V_rms = V_pico / 2', 'V_rms = π · V_pico'],
      ans: 0,
      exp: 'El valor eficaz RMS (Root Mean Square) es el valor de CA que disipa la misma potencia térmica que una tensión continua equivalente.',
      skill: 'Parámetros de Señales de Corriente Alterna',
      topic: 'Corriente Alterna',
      sub: 'Valor Eficaz RMS'
    },
    {
      q: '¿Qué tipo de transistor bipolar (BJT) tiene tres terminales denominados Base, Colector y Emisor, y se utiliza comúnmente como interruptor electrónico o amplificador?',
      opts: ['Transistor NPN / PNP', 'Tiristor Triac', 'Diodo Zener', 'Varistor MOV'],
      ans: 0,
      exp: 'El transistor bipolar controla una gran corriente entre colector y emisor mediante una pequeña corriente inyectada en la base (I_C = β · I_B).',
      skill: 'Transistores Bipolares (BJT)',
      topic: 'Electrónica Activa',
      sub: 'Transistores BJT NPN y PNP'
    },
    {
      q: '¿Qué dispositivo de protección electromagnética moderno combina protección contra sobrecargas térmicas y contra cortocircuitos magnéticos en un cuadro residencial?',
      opts: ['Interruptor magnetotérmico (disyuntor termomagnético)', 'Fusible de plomo', 'Transformador de aislamiento', 'Varistor de línea'],
      ans: 0,
      exp: 'El magnetotérmico utiliza una lámina bimetálica para sobrecargas lentas (disparo térmico) y una bobina electromagnética para cortocircuitos instantáneos (disparo magnético).',
      skill: 'Aparamenta de Protección',
      topic: 'Instalaciones Eléctricas',
      sub: 'Interruptores Magnetotérmicos'
    },
    {
      q: '¿Cuál es la frecuencia estándar de la red eléctrica comercial en la mayor parte de Europa y Sudamérica frente a América del Norte?',
      opts: ['50 Hz en Europa/Sudamérica y 60 Hz en Norteamérica', '100 Hz y 200 Hz', '10 Hz en todo el mundo', '120 Hz continuo'],
      ans: 0,
      exp: 'En Europa y varios países de Sudamérica la red opera a 50 Hz (230 V), mientras en EE.UU., México, Ecuador y Colombia opera a 60 Hz (120 V).',
      skill: 'Sistemas Eléctricos de Potencia Comerciales',
      topic: 'Redes Eléctricas',
      sub: 'Frecuencia de Red Comercial'
    },
    {
      q: '¿Qué componente resistivo sensible a la temperatura disminuye su resistencia eléctrica a medida que aumenta la temperatura?',
      opts: ['Termistor NTC (Coeficiente de Temperatura Negativo)', 'Termistor PTC', 'Resistencia fija bobinada', 'Potenciómetro lineal'],
      ans: 0,
      exp: 'Los termistores NTC aumentan la concentración de portadores de carga libres con el calor, disminuyendo su resistencia de forma exponencial.',
      skill: 'Sensores Resistivos Térmicos',
      topic: 'Instrumentación',
      sub: 'Termistores NTC'
    },
    {
      q: '¿Qué establece la Segunda Ley de Kirchhoff (Ley de Voltajes de Kirchhoff - LVK) para cualquier malla cerrada de un circuito?',
      opts: [
        'La suma algebraica de las diferencias de potencial (voltajes de fuentes y caídas en resistencias) en una trayectoria cerrada es igual a cero (∑ V_malla = 0)',
        'La corriente es infinita en la malla',
        'La inductancia se anula con el calor',
        'Todos los voltajes deben ser continuos'
      ],
      ans: 0,
      exp: 'La LVK se fundamenta en la conservación de la energía en un campo electrostático conservativo: el trabajo neto al recorrer un camino cerrado es nulo.',
      skill: 'Leyes de Kirchhoff para Mallas',
      topic: 'Análisis de Circuitos',
      sub: 'Ley de Voltajes de Kirchhoff (LVK)'
    },
    {
      q: '¿Cómo se llama la resistencia aparente total que opone un circuito de corriente alterna que combina resistencia óhmica, inductancia y capacitancia?',
      opts: ['Conductancia', 'Impedancia (Z)', 'Admitancia pura', 'Permeabilidad'],
      ans: 1,
      exp: 'La impedancia compleja Z = R + j(X_L - X_C) generaliza la ley de Ohm en corriente alterna (V = I · Z), medida en ohmios (Ω).',
      skill: 'Impedancia en Corriente Alterna',
      topic: 'Circuitos RLC',
      sub: 'Concepto de Impedancia'
    },
    {
      q: '¿Qué función cumple un diodo Zener conectado en polarización inversa en una fuente de alimentación de corriente continua?',
      opts: ['Amplificar señales de audio', 'Regular y estabilizar el voltaje a un valor constante (tensión Zener V_Z)', 'Transformar CA en CC', 'Aumentar la resistencia térmica'],
      ans: 1,
      exp: 'El diodo Zener está diseñado para operar en la región de ruptura por avalancha inversa manteniendo su tensión en bornes fija frente a variaciones de carga.',
      skill: 'Diodos Especiales y Reguladores',
      topic: 'Electrónica Básica',
      sub: 'Diodo Zener'
    },
    {
      q: '¿Cuál es la inductancia de una bobina que genera una fuerza contraelectromotriz de 10 V cuando la corriente que circula varía a razón de 2 A/s?',
      opts: ['5 Henrios (H)', '10 Henrios', '20 Henrios', '0.2 Henrios'],
      ans: 0,
      exp: 'ε = L · (dI/dt) → L = ε / (dI/dt) = 10 V / (2 A/s) = 5 Henrios (H).',
      skill: 'Inductancia y Autoinducción',
      topic: 'Electromagnetismo',
      sub: 'Cálculo de Inductancia'
    },
    {
      q: '¿Qué compuerta lógica digital produce una salida alta (1 lógico) si y solo si todas sus entradas están simultáneamente en nivel alto (1 y 1)?',
      opts: ['Compuerta OR', 'Compuerta AND', 'Compuerta NOT', 'Compuerta XOR'],
      ans: 1,
      exp: 'La compuerta AND implementa el producto lógico booleano: Y = A · B. Solo es 1 cuando ambas entradas son 1.',
      skill: 'Lógica Digital Booleana',
      topic: 'Electrónica Digital',
      sub: 'Compuerta AND'
    },
    {
      q: 'En una instalación fotovoltaica aislada, ¿qué dispositivo electrónico protege la batería contra sobrecargas y sobredescargas gestionando la energía de los paneles solares?',
      opts: ['Inversor de onda senoidal pura', 'Regulador o controlador de carga solar', 'Diodo rectificador de puente', 'Seccionador fusible'],
      ans: 1,
      exp: 'El regulador (PWM o MPPT) monitorea la tensión de la batería y desconecta o modula la corriente entrante de los paneles solares.',
      skill: 'Sistemas Solares Fotovoltaicos',
      topic: 'Energía Solar',
      sub: 'Controlador de Carga'
    },
    {
      q: '¿Qué instrumento de visualización gráfica en el dominio del tiempo permite observar la forma de onda, amplitud, frecuencia y distorsión de una señal eléctrica?',
      opts: ['Megóhmetro', 'Osciloscopio', 'Luxómetro', 'Pinza amperimétrica analógica'],
      ans: 1,
      exp: 'El osciloscopio representa la tensión en el eje vertical (Y) en función del tiempo en el eje horizontal (X), indispensable para depuración electrónica.',
      skill: 'Instrumental Electrónico de Laboratorio',
      topic: 'Mediciones Electrónicas',
      sub: 'El Osciloscopio'
    },
    {
      q: '¿Cuál es el valor eficaz de corriente que circula por un calefactor de 2,200 W alimentado a 220 V de corriente alterna con factor de potencia unitario (cos φ = 1)?',
      opts: ['5 A', '10 A', '15 A', '20 A'],
      ans: 1,
      exp: 'P = V · I · cos(φ) → I = P / (V · cos φ) = 2200 / (220 × 1) = 10 Amperios.',
      skill: 'Cálculo de Corriente en CA Monofásica',
      topic: 'Electrotecnia',
      sub: 'Corriente en Cargas Resistivas'
    },
    {
      q: '¿Qué fenómeno indeseado se produce cuando dos conductores activos de distinta polaridad o fase entran en contacto directo con resistencia prácticamente nula?',
      opts: ['Sobrecarga lenta', 'Cortocircuito', 'Fuga a tierra mínima', 'Armónico impar'],
      ans: 1,
      exp: 'Al anularse la resistencia del circuito (R → 0), la corriente se eleva instantáneamente a miles de amperios (I_cc = V / Z_red), requiriendo desconexión rápida por protecciones.',
      skill: 'Fallas Eléctricas y Cortocircuitos',
      topic: 'Seguridad y Protecciones',
      sub: 'Cortocircuito'
    }
  ];

  intRaw.forEach((item, idx) => {
    items.push({
      id: `ele-int-${idx + 1}`,
      sectionId: 10,
      number: 20 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Intermedio',
      educationalLevel: 'Intermedio',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 BACHILLERATO
  const bacRaw = [
    {
      q: 'En un circuito RLC serie conectado a una fuente senoidal de frecuencia variable, ¿cuál es la condición física que define la resonancia eléctrica?',
      opts: [
        'La reactancia inductiva se anula completamente',
        'La reactancia inductiva iguala a la reactancia capacitiva (X_L = X_C), haciendo que la impedancia sea puramente resistiva y mínima (Z = R)',
        'La resistencia óhmica tiende a infinito',
        'La corriente se retrasa 90° respecto a la tensión'
      ],
      ans: 1,
      exp: 'A la frecuencia de resonancia f₀ = 1 / (2π√(LC)), las reactancias se cancelan mutuamente (ωL = 1/ωC), maximizando la corriente en fase con la tensión.',
      skill: 'Resonancia en Circuitos RLC Serie',
      topic: 'Teoría de Circuitos de CA',
      sub: 'Resonancia RLC'
    },
    {
      q: '¿Cuál es la ganancia de tensión en lazo cerrado (A_v) de un amplificador operacional ideal configurado como inversor con resistencia de entrada R₁ = 10 kΩ y resistencia de realimentación R_f = 100 kΩ?',
      opts: ['+10', '-10', '+11', '-100'],
      ans: 1,
      exp: 'Para el amplificador inversor ideal con tierra virtual en la entrada inversora: A_v = - (R_f / R₁) = - (100 kΩ / 10 kΩ) = -10.',
      skill: 'Amplificadores Operacionales Ideales (Op-Amps)',
      topic: 'Electrónica Analógica',
      sub: 'Amplificador Inversor'
    },
    {
      q: '¿Qué teorema de redes eléctricas lineales establece que cualquier red activa de dos terminales con fuentes y resistencias puede sustituirse por una sola fuente de tensión equivalente V_th en serie con una resistencia equivalente R_th?',
      opts: ['Teorema de Norton', 'Teorema de Thévenin', 'Teorema de Superposición', 'Teorema de Millman'],
      ans: 1,
      exp: 'El Teorema de Léon Charles Thévenin simplifica drásticamente el análisis de circuitos complejos al calcular la respuesta sobre una carga variable.',
      skill: 'Teoremas de Circuitos Eléctricos',
      topic: 'Análisis de Redes Lineales',
      sub: 'Teorema de Thévenin'
    },
    {
      q: '¿Cuál es la constante de tiempo (τ) de carga de un circuito RC serie compuesto por una resistencia R = 200 kΩ y un condensador C = 50 μF?',
      opts: ['1 segundo', '10 segundos', '25 segundos', '100 segundos'],
      ans: 1,
      exp: 'τ = R · C = (200 × 10³ Ω) × (50 × 10⁻⁶ F) = 10 segundos. En un tiempo t = 5τ el condensador se considera completamente cargado (99.3%).',
      skill: 'Respuesta Transitoria en Circuitos RC',
      topic: 'Transitorios en Circuitos',
      sub: 'Constante de Tiempo RC'
    },
    {
      q: 'En un transistor MOSFET de enriquecimiento de canal N, ¿qué tensión crítica entre compuerta y fuente (V_GS) debe superarse para crear el canal de inversión conductor y permitir el paso de corriente de drenador?',
      opts: ['Tensión de ruptura por avalancha', 'Tensión umbral (V_th o V_GS(th))', 'Tensión de Early', 'Tensión de Zener'],
      ans: 1,
      exp: 'Para V_GS > V_th, el campo eléctrico en la compuerta atrae electrones minoritarios a la superficie del sustrato p, formando un canal n conductor entre fuente y drenador.',
      skill: 'Transistores de Efecto de Campo MOSFET',
      topic: 'Semiconductores',
      sub: 'Tensión Umbral en MOSFETs'
    },
    {
      q: '¿Cómo se define el ancho de banda a -3 dB de un filtro paso bajo pasivo RC de primer orden?',
      opts: [
        'La frecuencia de corte f_c = 1 / (2π · R · C), donde la potencia de salida se reduce a la mitad (atenuación de -3 dB)',
        'La frecuencia donde la ganancia se hace infinita',
        'El doble de la frecuencia de resonancia',
        'La frecuencia de muestreo de Nyquist'
      ],
      ans: 0,
      exp: 'En f_c = 1/(2πRC), la magnitud de la función de transferencia cae a 1/√2 ≈ 0.707 de su valor en banda pasante, equivalente a -3.01 dB.',
      skill: 'Filtros Analógicos Pasivos',
      topic: 'Respuesta en Frecuencia',
      sub: 'Filtro Paso Bajo RC'
    },
    {
      q: 'En un rectificador de onda completa en puente de Graetz con 4 diodos de silicio (caída directa V_D = 0.7 V por diodo), si la tensión pico secundaria es de 20 V, ¿cuál es la tensión pico máxima sobre la carga?',
      opts: ['19.3 V', '18.6 V', '20.0 V', '17.2 V'],
      ans: 1,
      exp: 'En cada semiciclo conducen dos diodos en serie: V_pico_carga = V_pico_secundario - 2 · V_D = 20 V - 2(0.7 V) = 20 - 1.4 = 18.6 V.',
      skill: 'Fuentes de Alimentación y Rectificación',
      topic: 'Electrónica de Potencia Básica',
      sub: 'Rectificador en Puente de Diodos'
    },
    {
      q: '¿Qué compuerta lógica universal combinada con sí misma permite implementar cualquier otra función lógica booleana según el álgebra de Boole?',
      opts: ['Compuerta NAND (o NOR)', 'Compuerta AND exclusivamente', 'Compuerta OR exclusivamente', 'Compuerta buffer no inversor'],
      ans: 0,
      exp: 'NAND y NOR son compuertas funcionalmente completas o universales: cualquier circuito lógico combinatorio puede construirse usando únicamente compuertas NAND.',
      skill: 'Universalidad de Compuertas Lógicas',
      topic: 'Diseño Lógico Digital',
      sub: 'Compuertas Universales NAND y NOR'
    },
    {
      q: 'En un circuito trifásico equilibrado con carga conectada en triángulo (delta, Δ), ¿cuál es la relación entre la corriente de línea (I_L) y la corriente de fase (I_F)?',
      opts: ['I_L = I_F', 'I_L = √3 · I_F', 'I_L = I_F / √3', 'I_L = 3 · I_F'],
      ans: 1,
      exp: 'En conexión delta, la tensión de línea es igual a la de fase (V_L = V_F) y la corriente de línea es √3 veces mayor que la corriente de fase (I_L = √3 · I_F).',
      skill: 'Sistemas Trifásicos en Conexión Delta',
      topic: 'Sistemas Trifásicos',
      sub: 'Conexión Triángulo o Delta'
    },
    {
      q: '¿Cuál es el ángulo de desfase entre la tensión y la corriente en un condensador ideal sin pérdidas alimentado en corriente alterna senoidal?',
      opts: [
        'Están exactamente en fase (desfase 0°)',
        'La corriente se adelanta 90° respecto a la tensión (φ = +90°)',
        'La corriente se retrasa 90° respecto a la tensión',
        'Desfase de 180°'
      ],
      ans: 1,
      exp: 'Dado que i(t) = C (dv/dt), la derivada de una función seno es coseno (+90°), haciendo que la corriente capacitiva lidere a la tensión en 90°.',
      skill: 'Comportamiento de Componentes Reactivos en CA',
      topic: 'Fasores y Corriente Alterna',
      sub: 'Desfase en Capacitores'
    },
    {
      q: '¿Qué componente semiconductor optoelectrónico contiene un LED emisor y un fototransistor receptor en un encapsulado hermético para aislar eléctricamente dos circuitos?',
      opts: ['Optoacoplador (o aislador óptico)', 'Tiristor SCR', 'Triac de potencia', 'Diodo Varicap'],
      ans: 0,
      exp: 'El optoacoplador transmite señales mediante luz infrarroja, proporcionando aislamiento galvánico de miles de voltios entre la etapa de control de bajo voltaje y la etapa de potencia.',
      skill: 'Aislamiento Galvánico y Optoelectrónica',
      topic: 'Electrónica de Control',
      sub: 'Optoacopladores'
    },
    {
      q: '¿Qué ley de la conservación rige el método sistemático de análisis nodal para determinar los potenciales de nodo en circuitos complejos?',
      opts: ['Ley de Corrientes de Kirchhoff (LCK)', 'Ley de Voltajes de Kirchhoff (LVK)', 'Principio de Arquímedes', 'Ley de Lenz'],
      ans: 0,
      exp: 'El análisis nodal formula ecuaciones de LCK en cada nodo esencial no referencial expresando las corrientes de rama en función de las tensiones nodales.',
      skill: 'Métodos Sistemáticos de Análisis Nodal',
      topic: 'Teoría de Circuitos',
      sub: 'Análisis Nodal'
    },
    {
      q: 'En una línea de transmisión bifilar ideal, ¿cuál es la impedancia característica Z₀ en función de la inductancia por unidad de longitud L y la capacitancia por unidad de longitud C sin pérdidas?',
      opts: ['Z₀ = √(L / C)', 'Z₀ = L · C', 'Z₀ = √(C / L)', 'Z₀ = 1 / (L · C)'],
      ans: 0,
      exp: 'La impedancia característica Z₀ = √(L/C) es la relación entre la onda de tensión progresiva y la onda de corriente en una línea de transmisión infinita sin pérdidas.',
      skill: 'Líneas de Transmisión de Alta Frecuencia',
      topic: 'Campos y Ondas Guiadas',
      sub: 'Impedancia Característica Z0'
    },
    {
      q: '¿Qué tipo de flip-flop síncrono biestable tiene entradas J y K donde la condición J = 1 y K = 1 hace conmutar (bascular o toggle) el estado de la salida en cada pulso de reloj?',
      opts: ['Flip-Flop D', 'Flip-Flop JK', 'Flip-Flop T exclusivamente', 'Latch SR asíncrono'],
      ans: 1,
      exp: 'El flip-flop JK resuelve la condición de indeterminación del flip-flop SR cuando ambas entradas son 1, invirtiendo el estado anterior Q_{n+1} = Q̄_n.',
      skill: 'Sistemas Digitales Secuenciales',
      topic: 'Electrónica Digital',
      sub: 'Flip-Flops JK'
    },
    {
      q: '¿Cuál es la frecuencia de oscilación de un circuito oscilador astable clásico basado en el temporizador integrado NE555 con resistencias R_A, R_B y condensador C?',
      opts: [
        'f = 1.44 / ((R_A + 2R_B) · C)',
        'f = 1 / (R_A · C)',
        'f = 2π / √(LC)',
        'f = 0.693 · (R_A + R_B) · C'
      ],
      ans: 0,
      exp: 'Los tiempos de carga t_alto = 0.693(R_A + R_B)C y descarga t_bajo = 0.693(R_B)C dan un período total T = 0.693(R_A + 2R_B)C, de donde f = 1.44 / ((R_A + 2R_B)C).',
      skill: 'Temporizadores Integrados y Osciladores Astables',
      topic: 'Circuitos Integrados Lineales',
      sub: 'Temporizador NE555 en Modo Astable'
    },
    {
      q: 'En el ensayo de aislamiento de conductores con un megóhmetro (megger), ¿qué rango de valores de tensión continua de prueba se aplica típicamente para instalaciones de baja tensión (230/400 V)?',
      opts: ['5 V a 12 V DC', '500 V a 1,000 V DC', '10 kV a 50 kV DC', '1 V AC'],
      ans: 1,
      exp: 'Según norma IEC 60364-6, los ensayos de resistencia de aislamiento en circuitos de tensión nominal hasta 500 V se ejecutan aplicando 500 V DC, exigiendo R_aislamiento > 1 MΩ.',
      skill: 'Medición de Resistencia de Aislamiento',
      topic: 'Instalaciones y Normativa',
      sub: 'Ensayos con Megóhmetro'
    },
    {
      q: '¿Qué tipo de realimentación se aplica en los circuitos amplificadores operacionales para estabilizar la ganancia, aumentar el ancho de banda y reducir la distorsión?',
      opts: ['Realimentación positiva', 'Realimentación negativa', 'Realimentación regenerativa', 'Sin realimentación'],
      ans: 1,
      exp: 'La realimentación negativa reconecta una fracción de la salida hacia la entrada inversora (-), sacrificando ganancia de lazo abierto a cambio de linealidad y estabilidad.',
      skill: 'Teoría de la Realimentación en Amplificadores',
      topic: 'Electrónica Analógica',
      sub: 'Realimentación Negativa'
    },
    {
      q: '¿Qué efecto parásito reduce la sección efectiva de conducción en conductores de cobre a altas frecuencias concentrando la corriente en la periferia exterior?',
      opts: ['Efecto Hall', 'Efecto Pelicular (Efecto Skin)', 'Efecto Corona', 'Efecto Seebeck'],
      ans: 1,
      exp: 'Los campos magnéticos variables inducen corrientes de Foucault internas que contrarrestan el flujo de corriente en el centro del conductor, forzándola a circular por la "piel" exterior (profundidad de penetración δ).',
      skill: 'Electrodinámica y Efecto Pelicular',
      topic: 'Electromagnetismo Aplicado',
      sub: 'Efecto Skin en Conductores'
    },
    {
      q: '¿Cuál es la tensión de salida regulada de un circuito integrado regulador de tensión lineal positivo de tres terminales de la serie 7805?',
      opts: ['+12 V', '+5 V fijos y estabilizados', '-5 V', '+3.3 V'],
      ans: 1,
      exp: 'La familia LM78XX entrega tensiones positivas fijas según los dos últimos dígitos: 7805 = +5 V; 7812 = +12 V.',
      skill: 'Reguladores de Tensión Lineales Integrados',
      topic: 'Fuentes de Alimentación',
      sub: 'Familia 78XX'
    },
    {
      q: 'En un convertidor reductor de conmutación DC-DC (Buck Converter), ¿qué elemento almacena energía en forma de campo magnético durante el tiempo de conducción del transistor de conmutación?',
      opts: ['El diodo volante', 'La bobina o inductor de potencia (L)', 'La resistencia de derivación', 'El condensador de entrada'],
      ans: 1,
      exp: 'El inductor L se carga magnéticamente cuando el interruptor MOSFET conduce (V_L = V_in - V_out) y transfiere su energía a la carga a través del diodo cuando el interruptor se abre.',
      skill: 'Fuentes Conmutadas y Convertidores DC-DC',
      topic: 'Electrónica de Potencia',
      sub: 'Convertidor Buck'
    }
  ];

  bacRaw.forEach((item, idx) => {
    items.push({
      id: `ele-bac-${idx + 1}`,
      sectionId: 10,
      number: 40 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Intermedio',
      educationalLevel: 'Bachillerato',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 TÉCNICO
  const tecRaw = [
    {
      q: 'En el arranque de motores de inducción trifásicos de jaula de ardilla, ¿qué método clásico electromecánico reduce la corriente de arranque a un tercio conmutando las conexiones de los devanados estatóricos?',
      opts: ['Arranque directo a plena tensión', 'Arranque estrella-triángulo (Y-Δ)', 'Arranque por resistencias rotóricas', 'Arranque estatórico por diodos'],
      ans: 1,
      exp: 'Al conectar en estrella (Y), la tensión por fase se reduce a V_L / √3, reduciendo la corriente de arranque y el par motor a (1/√3)² = 1/3 de los valores de arranque directo.',
      skill: 'Arranque de Motores Asíncronos Trifásicos',
      topic: 'Máquinas Eléctricas',
      sub: 'Arranque Estrella-Triángulo'
    },
    {
      q: 'En variadores de frecuencia (VFD / inversores) para control de velocidad de motores de CA, ¿qué técnica de modulación por ancho de pulso aproxima una corriente senoidal pura gobernando los transistores IGBT?',
      opts: ['PWM senoidal (SPWM) o Modulación Vectorial Espacial (SVPWM)', 'Control por ángulo de fase con tiristores', 'Modulación en amplitud AM', 'Conmutación por relé térmico'],
      ans: 0,
      exp: 'La técnica SVPWM optimiza el vector de voltaje en el espacio de estados del inversor trifásico, aumentando la utilización del bus de continua en un 15% y reduciendo la distorsión armónica THD.',
      skill: 'Accionamientos Eléctricos y Variadores VFD',
      topic: 'Electrónica de Potencia Industrial',
      sub: 'Modulación SVPWM en Inversores'
    },
    {
      q: 'En mantenimiento de transformadores de distribución inmersos en aceite dieléctrico, ¿qué análisis fisicoquímico y de gases disueltos (DGA) detecta descargas parciales, arcos eléctricos o sobrecalentamiento interno?',
      opts: ['Cromatografía de gases disueltos en aceite (DGA) según norma IEEE C57.104', 'Medición de espesor por ultrasonido', 'Ensayo de tracción uniaxial', 'Análisis de gases de escape'],
      ans: 0,
      exp: 'La descomposición térmica del aceite mineral y aislamiento de celulosa genera gases característicos: hidrógeno (descargas parciales), acetileno (arcos de alta energía), etileno y metano (sobrecalentamientos térmicos).',
      skill: 'Diagnóstico Dieléctrico de Transformadores',
      topic: 'Mantenimiento Eléctrico de Alta Tensión',
      sub: 'Análisis DGA de Gases Disueltos'
    },
    {
      q: 'En la instalación de canalizaciones eléctricas industriales según el Código Eléctrico Nacional (NEC / NFPA 70), ¿cuál es el factor de llenado máximo permitido para un tubo conduit que contiene más de dos conductores?',
      opts: ['20%', '40%', '60%', '80%'],
      ans: 1,
      exp: 'Según el Capítulo 9 (Tabla 1) del NEC, para más de 2 conductores el área total ocupada por los cables no debe superar el 40% del área de la sección transversal interna del tubo para evitar sobrecalentamiento y facilitar el jalado.',
      skill: 'Normativa de Instalaciones Eléctricas NEC',
      topic: 'Dimensionamiento de Canalizaciones',
      sub: 'Factor de Llenado de Tubos Conduit'
    },
    {
      q: 'En un esquema de control mediante autómata programable (PLC), ¿qué tipo de salida por hardware se recomienda para conmutar cargas inductivas de corriente continua de alta frecuencia (como electroválvulas PWM)?',
      opts: ['Salidas por relé electromecánico', 'Salidas por transistor de estado sólido (Sink/Source MOSFET)', 'Salidas por transformador pasivo', 'Salidas por fusible térmico'],
      ans: 1,
      exp: 'Las salidas por transistor operan sin piezas móviles, soportan millones de ciclos de conmutación rápida sin desgaste mecánico ni rebote de contactos.',
      skill: 'Arquitectura de Entradas y Salidas de PLC',
      topic: 'Automatización Industrial',
      sub: 'Módulos de Salida de PLC'
    },
    {
      q: 'En un sistema de distribución eléctrica en baja tensión, ¿qué esquema de conexión a tierra (ECT) conecta directamente el neutro a tierra en el transformador y las masas metálicas de la instalación a un conductor de protección PE separado conectado a una tierra independiente?',
      opts: ['Esquema TT', 'Esquema TN-C', 'Esquema IT con neutro aislado', 'Esquema delta flotante'],
      ans: 0,
      exp: 'En el esquema TT (tierra en transformador, tierra en masas de usuario), cualquier defecto de aislamiento a masa provoca una corriente de fuga a tierra que es detectada y despejada obligatoriamente por interruptores diferenciales.',
      skill: 'Sistemas de Puesta a Tierra en Baja Tensión (ECT)',
      topic: 'Instalaciones Eléctricas de BT',
      sub: 'Esquema de Puesta a Tierra TT'
    },
    {
      q: 'En la compensación automática del factor de potencia en redes industriales con presencia de armónicos, ¿qué dispositivo se conecta en serie con las baterías de condensadores para evitar la resonancia armónica paralela?',
      opts: ['Reactancias de desintonización o de rechazo (reactores de choque)', 'Fusibles ultrarrápidos', 'Diodos Zener de potencia', 'Resistencias de frenado dinámico'],
      ans: 0,
      exp: 'Las inductancias de desintonización desplazan la frecuencia de resonancia del banco por debajo del armónico predominante más bajo (típicamente sintonizadas a 189 Hz o 134 Hz para redes de 50 Hz), protegiendo los condensadores contra sobrecorrientes armónicas.',
      skill: 'Calidad de la Energía y Filtrado de Armónicos',
      topic: 'Compensación de Energía Reactiva',
      sub: 'Bancos de Condensadores Desintonizados'
    },
    {
      q: 'En un circuito de conmutación con transistor MOSFET de potencia, ¿qué diodo ultrarrápido conectado en antiparalelo con una carga inductiva (como la bobina de un relé) disipa la sobretensión inductiva al abrirse el circuito?',
      opts: ['Diodo de rueda libre (Flyback diode)', 'Diodo túnel', 'Diodo emisor LED', 'Puente rectificador trifásico'],
      ans: 0,
      exp: 'Al interrumpir la corriente bruscamente en una bobina, la ley de Faraday v = -L (di/dt) induce un pico destructivo de polaridad inversa; el diodo flyback ofrece un lazo de recirculación seguro para extinguir la energía magnética.',
      skill: 'Protección de Circuitos de Conmutación Inductiva',
      topic: 'Diseño Electrónico de Potencia',
      sub: 'Diodo Flyback de Rueda Libre'
    },
    {
      q: 'En instrumentación de lazos de control analógico industrial (estándar ISA), ¿por qué se utiliza preferentemente un rango de corriente de 4 a 20 mA en lugar de una señal de voltaje de 0 a 10 V para transmitir señales de sensores a larga distancia?',
      opts: [
        'El lazo de corriente es inmune a las caídas de tensión ohmicas en la longitud del cableado y el umbral de 4 mA permite detectar rotura de cable ("cero vivo")',
        'El voltaje es peligroso para los cables apantallados',
        'Los transmisores no pueden emitir voltajes',
        'El estándar de corriente no requiere fuente de alimentación'
      ],
      ans: 0,
      exp: 'La corriente es idéntica en todo el lazo serie sin importar la resistencia de línea. Además, si el cable se rompe físicamente la corriente cae a 0 mA, distinguiéndose de una lectura de variable de proceso en cero (4 mA).',
      skill: 'Instrumentación Industrial y Lazos de Corriente',
      topic: 'Control de Procesos',
      sub: 'Lazos de Control 4-20 mA y Cero Vivo'
    },
    {
      q: 'En soldadura electrónica de montaje superficial (SMD) en tarjetas de circuito impreso (PCB), ¿qué perfil térmico de cuatro etapas en un horno de reflujo por convección forzada se sigue rigurosamente?',
      opts: [
        'Precalentamiento, meseta o soak, reflujo pico (soldadura) y enfriamiento controlado',
        'Choque térmico inmediato a 350 °C sin calentamiento previo',
        'Enfriamiento criogénico antes de aplicar estaño',
        'Calentamiento exclusivamente por llama directa'
      ],
      ans: 0,
      exp: 'El precalentamiento evapora solventes; la meseta activa el fundente y homogeneiza la temperatura sin choques térmicos; el reflujo supera la temperatura liquidus del estaño (~217 °C para aleaciones SAC305) y el enfriamiento forma uniones intermetálicas finas.',
      skill: 'Fabricación y Ensamblaje Electrónico SMD',
      topic: 'Tecnología de Montaje Superficial',
      sub: 'Perfil de Temperatura en Horno de Reflujo'
    },
    {
      q: 'En el ensayo de rigidez dieléctrica de guantes y herramientas aisladas para trabajos en tensión (TET), ¿qué ensayo de laboratorio según norma ASTM D120 somete el equipo a una alta tensión durante un tiempo determinado midiendo la corriente de fuga?',
      opts: ['Ensayo Hi-Pot (High Potential test)', 'Ensayo de continuidad de bajo voltaje', 'Ensayo de impedancia de bucle', 'Ensayo Charpy'],
      ans: 0,
      exp: 'El ensayo Hi-Pot aplica tensiones de prueba de 5 kV a 40 kV AC verificando que la corriente de fuga no supere los miliamperios máximos permitidos para garantizar la vida del liniero.',
      skill: 'Seguridad en Trabajos en Tensión (TET)',
      topic: 'Equipos de Protección Individual Eléctricos',
      sub: 'Ensayos Hi-Pot de Rigidez Dieléctrica'
    },
    {
      q: 'En protecciones eléctricas de subestaciones, ¿qué función cumple el relé diferencial porcentual (ANSI 87) en la protección de transformadores de potencia y generadores?',
      opts: [
        'Compara vectorialmente la corriente que entra y sale de la zona protegida delimitada por transformadores de corriente (TCs), operando instantáneamente ante fallas internas',
        'Mide la temperatura del devanado exclusivamente',
        'Detecta sobretensiones atmosféricas en la línea',
        'Regula los cambiadores de tomas bajo carga'
      ],
      ans: 0,
      exp: 'Bajo la primera ley de Kirchhoff, la corriente neta en una zona sin fallas internas es cero (I_in = I_out). Si existe una falla entre espiras o a tierra, la corriente diferencial (I_diff = |I₁ - I₂|) supera la pendiente porcentual y dispara el interruptor de potencia.',
      skill: 'Protecciones de Subestaciones Eléctricas',
      topic: 'Sistemas de Potencia y Relés de Protección',
      sub: 'Protección Diferencial ANSI 87'
    },
    {
      q: 'En redes de comunicación industrial de campo, ¿qué protocolo serie diferencial multipunto semidúplex (Half-Duplex) de dos hilos (A y B) permite conectar hasta 32 dispositivos a distancias de hasta 1200 metros bajo el estándar RS-485?',
      opts: ['Modbus RTU sobre RS-485', 'Bluetooth Low Energy', 'I2C síncrono de placa', 'USB 2.0 estándar'],
      ans: 0,
      exp: 'RS-485 utiliza señalización diferencial equilibrada (V_A - V_B) con alta inmunidad al ruido electromagnético de modo común de motores y variadores en plantas fabriles.',
      skill: 'Redes de Comunicación Industrial de Campo',
      topic: 'Buses de Campo y Telemetría',
      sub: 'Estándar RS-485 y Protocolo Modbus RTU'
    },
    {
      q: 'En convertidores electrónicos de potencia para tracción de vehículos eléctricos o inversores solares, ¿qué tecnología de semiconductores de banda ancha (Wide Bandgap - WBG) permite mayores frecuencias de conmutación y menores pérdidas que el silicio convencional?',
      opts: ['Carburo de Silicio (SiC) y Nitruro de Galio (GaN)', 'Germanio policristalino', 'Plomo dopado', 'Selenio amorfo'],
      ans: 0,
      exp: 'Los dispositivos SiC y GaN poseen campos de ruptura dieléctrica diez veces mayores que el silicio, permitiendo voltajes de operación superiores a 1200 V con mínimas pérdidas de conmutación y temperaturas de unión de hasta 200 °C.',
      skill: 'Semiconductores de Potencia Avanzados (WBG)',
      topic: 'Electrónica de Potencia Moderna',
      sub: 'Dispositivos de Carburo de Silicio (SiC)'
    },
    {
      q: 'En mantenimiento electromecánico de generadores sincrónicos y motores de corriente continua, ¿qué componente de grafito electrografitado transmite la corriente de excitación rozando continuamente sobre los anillos rozantes o delgas del colector?',
      opts: ['Escobillas de carbón (carbones)', 'Bobina amortiguadora de amortiguamiento', 'Cojinete de empuje axial', 'Entrehierro laminar'],
      ans: 0,
      exp: 'Las escobillas de carbón proporcionan contacto eléctrico deslizante con bajo coeficiente de fricción mecánica y adecuada resistencia de contacto para facilitar la conmutación.',
      skill: 'Máquinas Eléctricas Rotativas con Colector',
      topic: 'Mantenimiento de Motores y Generadores',
      sub: 'Escobillas de Carbón y Anillos Rozantes'
    },
    {
      q: 'En una instalación fotovoltaica conectada a red (On-Grid), ¿qué función de seguridad técnica obligatoria desconecta automáticamente el inversor si se corta el suministro eléctrico de la red de distribución pública?',
      opts: ['Protección anti-isla (Anti-Islanding)', 'Seguimiento del punto de máxima potencia MPPT', 'Rectificación síncrona', 'Arranque en negro (Black Start)'],
      ans: 0,
      exp: 'La protección anti-isla (según norma IEEE 1547 / UL 1741) evita que el generador fotovoltaico continúe energizando un tramo de la red eléctrica local apagada, protegiendo a los linieros de electrocuciones accidentales.',
      skill: 'Energía Solar y Conexión a Red Eléctrica',
      topic: 'Generación Distribuida',
      sub: 'Protección Anti-Isla en Inversores Solares'
    },
    {
      q: 'En análisis de armónicos en redes industriales con analizadores de redes eléctricas clase A, ¿cómo se define la Distorsión Armónica Total de Tensión (THD_V)?',
      opts: [
        'La raíz cuadrada de la suma de los cuadrados de todas las tensiones armónicas dividida por la tensión de la componente fundamental (THD_V = √(∑ V_n²) / V₁ × 100%)',
        'La potencia aparente total entre la frecuencia fundamental',
        'La corriente de cortocircuito pico',
        'El factor de cresta cuadrático'
      ],
      ans: 0,
      exp: 'El THD (Total Harmonic Distortion) según IEEE 519 cuantifica la deformación de la onda senoidal pura; en baja tensión se exige típicamente un THD_V inferior al 5% para evitar sobrecalentamiento de motores y transformadores.',
      skill: 'Calidad del Suministro Eléctrico y Armónicos',
      topic: 'Calidad de Energía',
      sub: 'Tasa de Distorsión Armónica Total (THD)'
    },
    {
      q: 'En motores paso a paso híbridos utilizados en robótica y máquinas CNC, ¿qué técnica de control electrónico divide los pasos mecánicos completos energizando simultáneamente dos fases con corrientes sinusoidales proporcionales?',
      opts: ['Microstepping (micropasos)', 'Arranque en estrella', 'Frenado regenerativo', 'Modulación en frecuencia pura'],
      ans: 0,
      exp: 'El microstepping divide cada paso completo de 1.8° en 1/8, 1/16 o 1/64 de micropaso mediante control PWM de corriente en puente H, eliminando resonancias mecánicas y aumentando la resolución posicional.',
      skill: 'Control de Motores Paso a Paso y Servomotores',
      topic: 'Robótica y Mecatrónica',
      sub: 'Control por Micropasos (Microstepping)'
    },
    {
      q: 'En el ensayo de rigidez dieléctrica de aceites minerales aislantes según norma ASTM D877 / IEC 60156 con un chispómetro, ¿qué tensión de ruptura promedio mínima a 2.5 mm de separación entre electrodos se exige para aceite nuevo?',
      opts: ['5 kV', 'Mayor a 30 kV (típicamente > 40-50 kV)', '1 kV', '100 V DC'],
      ans: 1,
      exp: 'El chispómetro aplica una rampa de tensión ascendente de 2 kV/s hasta que se produce la chispa disruptiva; valores bajos revelan presencia de agua emulsionada o partículas carbonosas en suspensión.',
      skill: 'Mantenimiento Preventivo de Aceites Aislantes',
      topic: 'Ensayos Dieléctricos de Alta Tensión',
      sub: 'Chispómetro y Tensión de Ruptura'
    },
    {
      q: 'En diseño de circuitos impresos (PCB) de alta velocidad, ¿qué técnica de ruteo de pistas de pares diferenciales (como en USB, HDMI o Ethernet) asegura que ambos conductores tengan exactamente la misma longitud física para evitar desfases temporales (skew)?',
      opts: ['Ruteo con pistas serpentinas de ajuste de longitud (lenght matching meanders)', 'Aislamiento galvánico con optoacopladores lentos', 'Eliminación del plano de masa continuo', 'Conexión sin condensadores de desacoplo'],
      ans: 0,
      exp: 'Las curvas serpentinas compensan microdiferencias de longitud geométrica asegurando que las señales diferenciales lleguen al receptor simultáneamente sin distorsión temporal ni emisión de ruido de modo común.',
      skill: 'Diseño de PCBs de Alta Velocidad (High-Speed PCB Design)',
      topic: 'Integridad de Señal en PCBs',
      sub: 'Pares Diferenciales y Ajuste de Longitud'
    }
  ];

  tecRaw.forEach((item, idx) => {
    items.push({
      id: `ele-tec-${idx + 1}`,
      sectionId: 10,
      number: 60 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Desafiante',
      educationalLevel: 'Técnico',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 UNIVERSITARIO
  const uniRaw = [
    {
      q: 'En la teoría electromagnética clásica de James Clerk Maxwell, ¿qué término fundamental introdujo Maxwell en la Ley de Ampère para garantizar la conservación de la carga eléctrica en regímenes variables en el tiempo (∇ × H = J + ∂D/∂t)?',
      opts: [
        'Corriente de conducción óhmica',
        'Corriente de desplazamiento de Maxwell (J_d = ∂D/∂t)',
        'Potencial magnético vectorial de Coulomb',
        'Divergencia nula del monopolo magnético'
      ],
      ans: 1,
      exp: 'Al tomar la divergencia de la ley de Ampère estática (∇ · (∇ × H) = 0 ≠ ∇ · J = -∂ρ/∂t), Maxwell advirtió la inconsistencia y añadió la corriente de desplazamiento ∂D/∂t, prediciendo la existencia de las ondas electromagnéticas.',
      skill: 'Ecuaciones de Maxwell y Electrodinámica Clásica',
      topic: 'Teoría Electromagnética Avanzada',
      sub: 'Corriente de Desplazamiento de Maxwell'
    },
    {
      q: 'En el análisis de estabilidad de sistemas de control lineales continuos en el plano s, ¿qué criterio algebraico desarrollado por Routh y Hurwitz determina la estabilidad asintótica sin necesidad de calcular explícitamente las raíces del polinomio característico?',
      opts: [
        'Criterio de Estabilidad de Routh-Hurwitz',
        'Diagrama de Bode de fase mínima',
        'Teorema de convolución de Laplace',
        'Transformada Z bilineal'
      ],
      ans: 0,
      exp: 'El arreglo tabular de Routh analiza los signos de los coeficientes en la primera columna: el número de cambios de signo equivale al número de polos del sistema situados en el semiplano derecho inestable (RHP).',
      skill: 'Teoría de Control Clásico y Estabilidad',
      topic: 'Ingeniería de Control',
      sub: 'Criterio de Routh-Hurwitz'
    },
    {
      q: 'En el análisis de fallas asimétricas en sistemas eléctricos de potencia trifásicos, ¿qué transformación lineal matricial introducida por C.L. Fortescue en 1918 descompone tres fasores desbalanceados en tres sistemas balanceados de secuencia positiva, negativa y cero?',
      opts: [
        'Transformada de Park (d-q-0)',
        'Componentes Simétricas de Fortescue',
        'Transformada de Clarke (alfa-beta)',
        'Matriz de admitancia de barra Y_bus pura'
      ],
      ans: 1,
      exp: 'La transformación con el operador a = e^{j120°} desacopla las redes trifásicas asimétricas permitiendo calcular cortocircuitos monofásicos a tierra y bifásicos mediante interconexión de redes de secuencia.',
      skill: 'Sistemas Eléctricos de Potencia y Componentes Simétricas',
      topic: 'Análisis de Redes de Potencia',
      sub: 'Componentes Simétricas de Fortescue'
    },
    {
      q: 'En la teoría del procesamiento digital de señales (DSP), ¿qué teorema fundamental de muestreo formulado por Harry Nyquist y Claude Shannon establece la frecuencia de muestreo mínima requerida para reconstruir perfectamente una señal continua en banda base?',
      opts: [
        'La frecuencia de muestreo debe ser estrictamente mayor al doble del ancho de banda máximo de la señal (f_s > 2 · f_max)',
        'La frecuencia de muestreo debe ser igual a la frecuencia fundamental',
        'f_s debe ser menor que f_max para evitar el aliasing',
        'Se requiere muestreo infinito continuo'
      ],
      ans: 0,
      exp: 'El teorema de Nyquist-Shannon demuestra que muestrear a f_s < 2 f_max produce aliasing espectral irreversible (solapamiento de réplicas en el dominio de Fourier), requiriendo un filtro analógico pasobajo antialiasing previo.',
      skill: 'Procesamiento Digital de Señales (DSP)',
      topic: 'Teoría de la Información y Señales',
      sub: 'Teorema de Muestreo de Nyquist-Shannon'
    },
    {
      q: 'En la síntesis de filtros activos analógicos, ¿qué aproximación polinomial de filtro clásico optimiza la máxima planicidad de respuesta en magnitud en la banda de paso sin presentar rizado (Butterworth)?',
      opts: [
        'Filtro de Chebyshev Tipo I',
        'Filtro de Butterworth (máxima planicidad)',
        'Filtro elíptico de Cauer',
        'Filtro de Bessel-Thomson de retardo de grupo plano'
      ],
      ans: 1,
      exp: 'Los filtros de Butterworth ubican sus polos sobre una circunferencia en el semiplano izquierdo de Laplace, anulando las primeras 2n-1 derivadas de la ganancia en ω = 0 para obtener una curva perfectamente suave.',
      skill: 'Diseño y Síntesis de Filtros Activos',
      topic: 'Electrónica Analógica Avanzada',
      sub: 'Aproximación de Butterworth'
    },
    {
      q: 'En la física de dispositivos semiconductores, ¿qué mecanismo cuántico permite el paso de portadores de carga a través de una barrera de potencial de agotamiento ultraestrecha (< 10 nm) fuertemente dopada en un diodo túnel de Esaki?',
      opts: [
        'Efecto túnel mecánico cuántico (Fowler-Nordheim / Esaki tunneling)',
        'Emisión termoiónica de Richardson',
        'Generación térmica por pares electrón-hueco',
        'Difusión superficial de Fick'
      ],
      ans: 0,
      exp: 'Leo Esaki (Premio Nobel 1973) aprovechó la naturaleza ondulatoria del electrón: a dopajes degenerados la banda de conducción del lado n se solapa con la de valencia del lado p, permitiendo a los electrones atravesar la barrera prohibida exhibiendo resistencia diferencial negativa.',
      skill: 'Física de Semiconductores y Efecto Túnel Cuántico',
      topic: 'Microelectrónica Cuántica',
      sub: 'Diodo Túnel de Esaki'
    },
    {
      q: 'En la teoría de control en el espacio de estados de sistemas lineales invariantes en el tiempo (LTI: ẋ = Ax + Bu), ¿qué matriz de controlabilidad de Kalman de rango completo n determina si el sistema es completamente controlable?',
      opts: [
        'C = [B | AB | A²B | ... | A^{n-1}B]',
        'O = [C; CA; CA²; ...]',
        'Matriz de rigidez de Cauchy',
        'Hessiano de Lyapunov'
      ],
      ans: 0,
      exp: 'El criterio de Kalman demuestra que el sistema es controlable si y solo si la matriz de controlabilidad C tiene rango pleno n, lo que garantiza la capacidad de transferir el estado desde cualquier origen a cualquier estado final mediante una entrada u(t).',
      skill: 'Control Moderno en Espacio de Estados',
      topic: 'Teoría de Sistemas y Control',
      sub: 'Controlabilidad de Kalman'
    },
    {
      q: 'En la física de campos electromagnéticos en cavidades resonantes y guías de onda metálicas rectangulares, ¿cuál es el modo fundamental transversal eléctrico (TE) con la frecuencia de corte más baja?',
      opts: ['Modo TE₁₀', 'Modo TM₁₁', 'Modo TEM coaxial', 'Modo TE₀₁'],
      ans: 0,
      exp: 'En una guía rectangular de dimensiones a × b (con a > b), el modo TE₁₀ posee longitud de onda de corte λ_c = 2a, permitiendo propagación mono-modo sin componente longitudinal de campo eléctrico (E_z = 0).',
      skill: 'Microondas y Guías de Onda Electromagnéticas',
      topic: 'Ingeniería de Microondas',
      sub: 'Modo Fundamental TE10 en Guías Rectangulares'
    },
    {
      q: 'En diseño de circuitos integrados analógicos CMOS, ¿qué configuración de espejo de corriente cascode o Wilson se utiliza preferentemente frente al espejo simple para aumentar la resistencia de salida?',
      opts: [
        'El espejo de corriente Cascode (aumenta la resistencia de salida en un factor proporcional a g_m · r_o)',
        'El inversor digital básico',
        'El par Darlington bipolar simple',
        'El oscilador de anillo'
      ],
      ans: 0,
      exp: 'Al apilar transistores en configuración cascode, la resistencia dinámica de salida vista desde el drenador se multiplica aproximadamente por la ganancia intrínseca g_m r_o, aproximándose a una fuente de corriente ideal.',
      skill: 'Diseño de Circuitos Integrados CMOS Analógicos',
      topic: 'Microelectrónica VLSI',
      sub: 'Espejos de Corriente Cascode en CMOS'
    },
    {
      q: 'En la estabilidad transitoria de sistemas eléctricos de potencia ante fallas severas y pérdida de sincronismo en generadores, ¿qué ecuación diferencial no lineal de segundo orden describe la dinámica del ángulo del rotor δ?',
      opts: [
        'La Ecuación de Oscilación (Swing Equation: M · d²δ/dt² = P_m - P_e)',
        'La Ley de Ohm compleja',
        'La ecuación de Poisson para cargas',
        'La ecuación de onda acústica'
      ],
      ans: 0,
      exp: 'La ecuación de oscilación modela el desbalance entre la potencia mecánica de la turbina P_m y la potencia electromagnética entregada a la red P_e, resolviéndose mediante el Criterio de Áreas Iguales para determinar el tiempo crítico de despeje de falla.',
      skill: 'Estabilidad Transitoria de Sistemas Eléctricos de Potencia',
      topic: 'Dinámica de Sistemas de Potencia',
      sub: 'Ecuación de Oscilación (Swing Equation)'
    },
    {
      q: 'En el análisis de estabilidad no lineal de Lyapunov para sistemas dinámicos autónomos ẋ = f(x), ¿qué condición suficiente sobre la función escalar de energía V(x) definida positiva garantiza la estabilidad asintótica del origen en el sentido de Lyapunov?',
      opts: [
        'Que su derivada temporal a lo largo de las trayectorias del sistema sea estrictamente negativa (V̇(x) = ∇V · f(x) < 0 para todo x ≠ 0)',
        'Que V(x) sea una constante imaginaria pura',
        'Que la derivada sea idénticamente positiva',
        'Que el sistema no tenga puntos de equilibrio'
      ],
      ans: 0,
      exp: 'El Segundo Método de Lyapunov (Método Directo) demuestra que si la energía generalizada V(x) decrece monótonamente a lo largo de las trayectorias del sistema (V̇ < 0), el estado converge inevitablemente al punto de equilibrio.',
      skill: 'Control No Lineal y Estabilidad de Lyapunov',
      topic: 'Teoría de Control No Lineal',
      sub: 'Segundo Método de Lyapunov'
    },
    {
      q: 'En la teoría cuántica de transporte mesoscópico en nanoestructuras semiconductoras y puntos cuánticos, ¿qué fórmula formulada por Rolf Landauer expresa la conductancia eléctrica G en función de las probabilidades de transmisión cuántica T_i de los canales de conducción?',
      opts: [
        'Fórmula de Landauer (G = (2e² / h) · ∑ T_i)',
        'Ley de Ohm macroscópica lineal',
        'Ecuación de Clausius-Mossotti',
        'Límite de Mott'
      ],
      ans: 0,
      exp: 'Landauer demostró que la resistencia en conductores balísticos unidimensionales no se origina por dispersión de impurezas sino por el contacto con los reservorios, cuantizándose la conductancia en múltiplos del cuanto G₀ = 2e²/h ≈ 77.48 μS.',
      skill: 'Transporte Cuántico Mesoscópico y Nanotecnología',
      topic: 'Nanoelectrónica Cuántica',
      sub: 'Fórmula de Landauer y Cuantización de la Conductancia'
    },
    {
      q: 'En el diseño de antenas de telecomunicación y teoría electromagnética de radiación, ¿a partir de qué distancia radial r respecto a una antena de mayor dimensión D y longitud de onda λ se inicia la región de campo lejano o zona de Fraunhofer?',
      opts: [
        'r ≥ 2 D² / λ',
        'r = λ / (2π) exclusivamente',
        'r = D / 2',
        'r = 0 en el centro de fase'
      ],
      ans: 0,
      exp: 'El límite de Fraunhofer r ≥ 2D²/λ garantiza que la diferencia de fase entre ondas esféricas provenientes de los extremos de la apertura y el centro sea menor a 22.5° (π/8 rad), donde el diagrama de radiación angular se vuelve independiente de la distancia.',
      skill: 'Teoría de Antenas y Radiación Electromagnética',
      topic: 'Ingeniería de Antenas',
      sub: 'Región de Campo Lejano de Fraunhofer'
    },
    {
      q: 'En la teoría de modulación digital moderna (telecomunicaciones 4G/5G y Wi-Fi 6), ¿qué esquema de modulación multiportadora ortogonal divide un canal de banda ancha en miles de subportadoras ortogonales estrechas inmunes a la dispersión temporal por multitrayecto?',
      opts: [
        'OFDM (Orthogonal Frequency Division Multiplexing)',
        'AM con portadora suprimida pura',
        'Modulación FSK analógica simple',
        'Conmutación por relés de impulsos'
      ],
      ans: 0,
      exp: 'OFDM transforma un canal selectivo en frecuencia en múltiples canales planos en frecuencia sin interferencia intersimbólica (ISI) mediante la inserción de un prefijo cíclico (CP) y el uso de la Transformada Rápida de Fourier (FFT/IFFT).',
      skill: 'Comunicaciones Digitales Avanzadas y Modulación OFDM',
      topic: 'Sistemas de Telecomunicación',
      sub: 'Multiplexación por División de Frecuencias Ortogonales (OFDM)'
    },
    {
      q: 'En la teoría de la fiabilidad y confiabilidad de sistemas electrónicos complejos, ¿qué curva de tasa de fallos en el tiempo λ(t) describe las tres etapas de vida: fallas prematuras de infancia (mortalidad infantil), tasa de fallos constante por eventos fortuitos, y fallas por envejecimiento o desgaste?',
      opts: [
        'La curva de la bañera (Bathtub curve)',
        'La distribución gaussiana normal pura',
        'La curva de histéresis magnética',
        'El círculo unitario de Nyquist'
      ],
      ans: 0,
      exp: 'La curva de la bañera modela la fiabilidad: las pruebas de estrés acelerado (burn-in) eliminan fallas tempranas de manufactura, permitiendo que el equipo opere durante su vida útil en la fase de tasa de fallo constante (distribución exponencial).',
      skill: 'Ingeniería de Confiabilidad y Fiabilidad de Sistemas Electrónicos',
      topic: 'Confiabilidad y Mantenimiento Avanzado',
      sub: 'Curva de la Bañera de Fiabilidad'
    },
    {
      q: 'En convertidores de potencia resonantes (como el convertidor LLC de medio puente), ¿qué técnica de conmutación suave activa los interruptores de potencia MOSFET cuando la tensión a través de ellos es nula (ZVS) para reducir drásticamente las pérdidas de conmutación a altas frecuencias?',
      opts: [
        'Conmutación a Voltaje Cero (Zero Voltage Switching - ZVS)',
        'Conmutación forzada por tiristor',
        'Modulación por ancho de pulso duro pura',
        'Frenado reostático'
      ],
      ans: 0,
      exp: 'En ZVS, la corriente inductiva magnetizante descarga la capacitancia parásita de salida del MOSFET (C_oss) antes de que el canal se encienda, eliminando la pérdida de energía E_loss = 1/2 C V² en cada ciclo.',
      skill: 'Electrónica de Potencia Resonante de Alta Eficiencia',
      topic: 'Convertidores Resonantes',
      sub: 'Técnicas de Conmutación Suave ZVS y ZCS'
    },
    {
      q: 'En la teoría del filtrado óptimo estocástico y estimación de variables de estado ocultas en tiempo real bajo ruido gaussiano blanco, ¿qué algoritmo recursivo predictor-corrector formulado por Rudolf E. Kálmán (1960) minimiza el error cuadrático medio de estimación?',
      opts: [
        'Filtro de Kalman',
        'Filtro adaptativo LMS de Widrow-Hoff',
        'Filtro de mediana espacial',
        'Transformada de Hilbert-Huang'
      ],
      ans: 0,
      exp: 'El Filtro de Kalman proyecta el estado del sistema mediante matrices de covarianza de ruido de proceso y actualiza ponderadamente la estimación a través de la matriz de Ganancia de Kalman K_k ante cada nueva medición.',
      skill: 'Estimación de Estado y Filtrado Óptimo de Kalman',
      topic: 'Procesamiento Estocástico de Señales',
      sub: 'Algoritmo del Filtro de Kalman'
    },
    {
      q: 'En la superconductividad aplicada a generadores criogénicos y escáneres de resonancia magnética nuclear (MRI), ¿qué fenómeno cuántico macroscópico expulsa completamente el campo magnético del interior del superconductor (diamagnetismo perfecto B = 0)?',
      opts: ['Efecto Meissner-Ochsenfeld', 'Efecto Hall cuántico fraccionario', 'Efecto Josephson de corriente continua', 'Efecto Seebeck'],
      ans: 0,
      exp: 'Fritz y Heinz London demostraron que por debajo de la temperatura crítica T_c, se inducen supercorrientes de superficie sin resistencia que cancelan exactamente el campo magnético exterior en el volumen interno (apantallamiento de London).',
      skill: 'Superconductividad y Campos Magnéticos',
      topic: 'Materia Condensada y Criogenia',
      sub: 'Efecto Meissner-Ochsenfeld'
    },
    {
      q: 'En el análisis de redes de dos puertos en frecuencias de microondas, ¿qué matriz paramétrica [S] relaciona las ondas de tensión normalizadas incidentes (a) y reflejadas (b) en lugar de tensiones y corrientes absolutas difíciles de medir a gigahercios?',
      opts: [
        'Matriz de Parámetros de Dispersión (Parámetros S - Scattering Parameters)',
        'Matriz de impedancia de circuito Z',
        'Matriz de admitancia Y',
        'Matriz de híbridos h'
      ],
      ans: 0,
      exp: 'Los parámetros S (S₁₁ reflexión en puerto 1, S₂₁ transmisión/ganancia directa) se miden terminando los puertos en la impedancia característica de referencia Z₀ (50 Ω), evitando cortocircuitos o circuitos abiertos inestables a microondas.',
      skill: 'Parámetros S y Redes de Microondas',
      topic: 'Ingeniería de Radiofrecuencia y Microondas',
      sub: 'Matriz de Dispersión (Parámetros S)'
    },
    {
      q: 'En compatibilidad electromagnética (EMC / EMI) para cumplimiento de normas internacionales (CISPR / FCC), ¿qué transitorio oscilatorio de alta energía y muy corta duración generado por descargas atmosféricas indirectas o maniobras de subestaciones debe soportar un equipo industrial según la norma IEC 61000-4-5?',
      opts: [
        'Onda de choque combinada de sobretensión transitoria tipo Surge (1.2/50 μs de tensión y 8/20 μs de corriente)',
        'Descarga electrostática ESD de 100 picosegundos',
        'Caída de tensión lenta de 10 segundos',
        'Armónicos pares permanentes'
      ],
      ans: 0,
      exp: 'La norma IEC 61000-4-5 define generadores de ondas combinadas híbridas normalizadas (tiempo de subida 1.2 μs y duración hasta el 50% de 50 μs) ensayando varistores de óxido metálico (MOV) y tubos de descarga de gas (GDT) en la entrada de alimentación.',
      skill: 'Compatibilidad Electromagnética (EMC) e Inmunidad a Sobretensiones',
      topic: 'Normas Internacionales de Seguridad y EMC',
      sub: 'Ensayos de Sobretensión Transitoria Surge IEC 61000-4-5'
    }
  ];

  uniRaw.forEach((item, idx) => {
    items.push({
      id: `ele-uni-${idx + 1}`,
      sectionId: 10,
      number: 80 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Desafiante',
      educationalLevel: 'Universitario',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  writeSubjectFile('electricidad.ts', 'QUESTIONS_ELECTRICIDAD', 'Electricidad y Electrónica', items);
}

makeElectricidad();
