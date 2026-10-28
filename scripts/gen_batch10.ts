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
// 12. MECÁNICA AUTOMOTRIZ (100 preguntas)
// =========================================================================
function makeMecanica() {
  const items: any[] = [];

  // 20 BÁSICO
  const basRaw = [
    {
      q: '¿Cuáles son las cuatro carreras consecutivas que componen el ciclo de trabajo de un motor de combustión interna de 4 tiempos?',
      opts: ['Admisión, Compresión, Expansión (Combustión) y Escape', 'Arranque, Aceleración, Frenado y Reposo', 'Inyección, Ignición, Rotación y Salida', 'Enfriamiento, Lubricación, Presurización y Escape'],
      ans: 0,
      exp: 'El motor alternativo de cuatro tiempos cumple sucesivamente: admisión (ingreso de mezcla o aire), compresión, combustión/expansión (fuerza motriz útil) y escape de gases residuales.',
      skill: 'Fundamentos del Motor Térmico',
      topic: 'Ciclo de 4 Tiempos',
      sub: 'Tiempos del Motor'
    },
    {
      q: '¿Cuál es la función vital del aceite lubricante en el interior de un motor de combustión interna?',
      opts: ['Producir la chispa para inflamar la gasolina', 'Reducir la fricción entre piezas metálicas móviles, enfriar y limpiar impurezas internas', 'Aumentar el octanaje del combustible', 'Accionar el limpiaparabrisas'],
      ans: 1,
      exp: 'El aceite genera una película hidrodinámica que evita el contacto directo metal-metal, refrigera zonas críticas como la falda del pistón y arrastra partículas al filtro.',
      skill: 'Sistema de Lubricación',
      topic: 'Fluidos del Motor',
      sub: 'Aceite de Motor'
    },
    {
      q: '¿Qué componente del sistema de encendido genera la chispa eléctrica de alto voltaje dentro del cilindro en un motor de gasolina?',
      opts: ['El alternador', 'La bujía de encendido', 'El motor de arranque', 'El inyector'],
      ans: 1,
      exp: 'La bujía recibe alta tensión desde la bobina y produce un arco eléctrico entre sus electrodos para iniciar la combustión de la mezcla comprimida.',
      skill: 'Sistema de Encendido',
      topic: 'Componentes Eléctricos del Motor',
      sub: 'Bujías de Gasolina'
    },
    {
      q: '¿Qué componente del vehículo se encarga de recargar la batería de 12V y suministrar energía eléctrica a todos los sistemas mientras el motor está encendido?',
      opts: ['El radiador', 'El alternador', 'El motor de arranque', 'El condensador del clima'],
      ans: 1,
      exp: 'El alternador accionado por la correa de accesorios convierte energía mecánica del cigüeñal en energía eléctrica alterna, que luego rectifica a corriente continua para alimentar el vehículo y recargar la batería.',
      skill: 'Sistema de Carga Automotriz',
      topic: 'Electricidad del Automóvil',
      sub: 'El Alternador'
    },
    {
      q: '¿Qué elemento del sistema de frenos presiona las pastillas contra el disco giratorio acoplado a la rueda para detener el vehículo?',
      opts: ['La mordaza o cáliper de freno', 'El tambor trasero', 'El servofreno de vacío', 'La palanca de cambios'],
      ans: 0,
      exp: 'El cáliper o mordaza contiene los pistones hidráulicos que, impulsados por la presión del líquido de frenos, empujan las pastillas de fricción contra el disco metálico.',
      skill: 'Sistema de Frenos',
      topic: 'Frenos de Disco',
      sub: 'Cáliper y Pastillas'
    },
    {
      q: '¿Cuál es la función del filtro de aire del motor en un automóvil?',
      opts: ['Enfriar el habitáculo para los pasajeros', 'Retener partículas de polvo, arena y suciedad del exterior para evitar desgaste abrasivo en los cilindros', 'Purificar los gases que salen por el escape', 'Medir el nivel de aceite del cárter'],
      ans: 1,
      exp: 'El filtro de aire garantiza que el aire aspirado hacia las cámaras de combustión esté libre de impurezas que desgastarían prematuramente los aros de pistón y cilindros.',
      skill: 'Mantenimiento Preventivo',
      topic: 'Sistema de Admisión',
      sub: 'Filtro de Aire'
    },
    {
      q: '¿Qué líquido se debe utilizar en el sistema de enfriamiento del motor en lugar de utilizar únicamente agua corriente?',
      opts: ['Líquido refrigerante / anticongelante formulado con etilenglicol e inhibidores de corrosión', 'Líquido de frenos DOT 4', 'Aceite hidráulico de dirección', 'Gasolina de alto octanaje'],
      ans: 0,
      exp: 'El refrigerante contiene glicoles que elevan el punto de ebullición por encima de 105°C, bajan el punto de congelación por debajo de 0°C y evitan la oxidación de conductos internos del motor.',
      skill: 'Sistema de Refrigeración',
      topic: 'Fluidos del Vehículo',
      sub: 'Líquido Refrigerante'
    },
    {
      q: '¿Qué componente conecta mecánicamente el motor con la caja de cambios manual, permitiendo desacoplarlos temporalmente para realizar los cambios de marcha?',
      opts: ['El diferencial', 'El embrague (clutch)', 'El amortiguador', 'La junta homocinética'],
      ans: 1,
      exp: 'El conjunto del embrague (disco, plato de presión y collarín) acopla por fricción el volante de inercia del motor al eje primario de la caja, permitiendo marchas suaves al desacoplarse.',
      skill: 'Tren Motriz',
      topic: 'Transmisión Manual',
      sub: 'El Embrague'
    },
    {
      q: '¿Qué indica una presión de inflado significativamente baja e incorrecta en los neumáticos?',
      opts: ['Menor consumo de combustible y menor adherencia', 'Mayor resistencia al rodamiento, sobrecalentamiento de la banda y desgaste excesivo en los bordes u hombros de la llanta', 'Mayor velocidad punta del vehículo', 'Frenado instantáneo en nieve'],
      ans: 1,
      exp: 'Una presión baja deforma el neumático, incrementa la flexión interna, eleva peligrosamente la temperatura y desgasta los dos hombros exteriores de la banda de rodadura.',
      skill: 'Ruedas y Neumáticos',
      topic: 'Mantenimiento de Neumáticos',
      sub: 'Presión de Inflado'
    },
    {
      q: '¿Qué componente del sistema de escape reduce el nivel sonoro de las detonaciones generadas por los gases expulsados por el motor?',
      opts: ['El silenciador o mofle (muffler)', 'El múltiple de admisión', 'La válvula de purga de combustible', 'El termostato'],
      ans: 0,
      exp: 'El silenciador utiliza cámaras internas de expansión, tubos perforados y resonadores destructivos para atenuar las ondas de presión acústica del escape.',
      skill: 'Sistema de Escape',
      topic: 'Escape y Emisiones',
      sub: 'Silenciador'
    },
    {
      q: '¿Cuál es la función del tapón del radiador más allá de simplemente tapar el depósito?',
      opts: ['Contar el número de vueltas de la bomba de agua', 'Mantener el circuito bajo presión controlada (aprox. 0.9 a 1.3 bar) para aumentar el punto de ebullición del refrigerante', 'Inyectar combustible al radiador', 'Apagar el motor automáticamente si hay humo'],
      ans: 1,
      exp: 'Al presurizar el circuito de enfriamiento, el tapón eleva el punto de ebullición del agua por encima de los 120°C mediante una válvula de alivio calibrada por resorte.',
      skill: 'Sistema de Refrigeración',
      topic: 'Presurización Térmica',
      sub: 'Tapón del Radiador'
    },
    {
      q: '¿Qué parte de la suspensión absorbe los baches del camino disipando la energía elástica del muelle/resorte para evitar que el automóvil rebote continuamente?',
      opts: ['El amortiguador', 'La barra estabilizadora', 'La rótula de dirección', 'El palier de transmisión'],
      ans: 0,
      exp: 'El resorte soporta el peso y absorbe el impacto inicial, pero es el amortiguador (hidráulico o de gas) el que frena las oscilaciones disipando la energía en forma de calor.',
      skill: 'Sistema de Suspensión',
      topic: 'Dinámica de Suspensión',
      sub: 'Amortiguadores'
    },
    {
      q: '¿Qué tipo de caja de cambios permite que el vehículo cambie automáticamente de marchas sin intervención manual del conductor mediante engranajes epicicloidales y convertidor de par?',
      opts: ['Transmisión automática tradicional', 'Caja manual de 5 velocidades sincrónica', 'Embrague seco monodisco', 'Transmisión fija sin marchas'],
      ans: 0,
      exp: 'Las cajas automáticas convencionales emplean trenes de engranajes planetarios embragados hidráulicamente y un convertidor de par hidrodinámico.',
      skill: 'Tren de Potencia',
      topic: 'Transmisiones Automáticas',
      sub: 'Cajas Automáticas'
    },
    {
      q: '¿Por qué nunca se debe rellenar el depósito de líquido de frenos con aceite de motor o fluidos derivados del petróleo?',
      opts: ['Porque el aceite de motor se congela a temperatura ambiente', 'Porque los derivados del petróleo destruyen e inflaman los sellos, retenes y retenedores de goma (caucho EPDM) del sistema de frenos, causando falla catastrófica inmediata', 'Porque el aceite de motor es muy transparente', 'Porque aumenta la presión del pedal'],
      ans: 1,
      exp: 'Los sistemas de frenos usan elastómeros compatibles únicamente con líquidos glicólicos sintéticos (DOT 3, 4, 5.1). Los aceites minerales degradan los sellos de goma, bloqueando o anulando los frenos.',
      skill: 'Fluidos de Freno',
      topic: 'Mantenimiento de Frenos',
      sub: 'Compatibilidad de Fluidos DOT'
    },
    {
      q: '¿Qué instrumento del tablero de instrumentos mide la velocidad de giro del cigüeñal del motor expresada en revoluciones por minuto (RPM)?',
      opts: ['El velocímetro', 'El tacómetro', 'El odómetro', 'El manómetro de combustible'],
      ans: 1,
      exp: 'El tacómetro informa las RPM instantáneas del motor para que el conductor o la computadora efectúen los cambios en el régimen de giro óptimo y eviten la zona roja de sobregiro.',
      skill: 'Instrumentación Automotriz',
      topic: 'Tablero de Control',
      sub: 'El Tacómetro'
    },
    {
      q: '¿Cuál es la función de los fusibles en la caja de fusibles del automóvil?',
      opts: ['Cargar la batería cuando el vehículo está apagado', 'Proteger los cables e instalaciones eléctricas fundiéndose deliberadamente cuando la corriente supera el valor seguro', 'Encender las luces altas automáticamente', 'Filtrar el aire del habitáculo'],
      ans: 1,
      exp: 'Un fusible posee una lámina metálica calibrada que se funde por efecto Joule ante un cortocircuito o sobrecarga, interrumpiendo el flujo eléctrico antes de que el mazo de cables se incendie.',
      skill: 'Electricidad Básica Automotriz',
      topic: 'Protección Eléctrica',
      sub: 'Fusibles'
    },
    {
      q: '¿Qué componente del motor almacena la energía cinética durante la carrera de combustión para impulsar suavemente al cigüeñal a través de los tres tiempos muertos (escape, admisión y compresión)?',
      opts: ['El volante de inercia (flywheel)', 'El cárter de aceite', 'La bomba de agua', 'El múltiple de escape'],
      ans: 0,
      exp: 'El volante de inercia es un disco de masa calculada fijado al extremo del cigüeñal cuya inercia rotacional regulariza el giro del motor entre las detonaciones intermitentes.',
      skill: 'Mecánica de Motores',
      topic: 'Bloque y Cigüeñal',
      sub: 'Volante de Inercia'
    },
    {
      q: '¿Qué función cumple la batería de 12V cuando el automóvil se encuentra completamente apagado y se gira la llave para encenderlo?',
      opts: ['Alimentar el motor de arranque eléctrico que hace girar inicialmente al motor de combustión y suministrar corriente al sistema de encendido/inyección', 'Generar energía eólica para enfriar el motor', 'Impulsar directamente las ruedas motrices', 'Rectificar la corriente alterna'],
      ans: 0,
      exp: 'La batería es un acumulador electroquímico capaz de suministrar intensas corrientes de arranque (CCA, de 300 a 700 amperios) durante unos segundos para que el motor de arranque venza la inercia del motor térmico.',
      skill: 'Sistema Eléctrico',
      topic: 'Batería de Arranque',
      sub: 'Función de la Batería'
    },
    {
      q: '¿Qué es el dibujo o "banda de rodadura" de un neumático y por qué es peligroso que se gaste hasta quedar liso?',
      opts: ['Es solo un adorno estético del fabricante', 'Son los surcos y ranuras diseñados para evacuar agua y evitar el aquaplaning (pérdida total de adherencia en suelo mojado)', 'Sirve para enfriar los frenos de tambor', 'Aumenta el peso del neumático'],
      ans: 1,
      exp: 'Las ranuras de la banda de rodadura canalizan miles de litros de agua por minuto; si la profundidad es inferior a 1.6 mm, el neumático monta sobre una película de agua (aquaplaning) perdiendo dirección y frenos.',
      skill: 'Seguridad Activa',
      topic: 'Neumáticos',
      sub: 'Banda de Rodadura y Aquaplaning'
    },
    {
      q: '¿Qué componente mecánico permite que las ruedas delantera izquierda y derecha giren en ángulos diferentes cuando el conductor acciona el volante?',
      opts: ['El mecanismo de dirección (cremallera y piñón con bieletas y terminales)', 'El radiador de aceite', 'La bomba de gasolina', 'El árbol de levas'],
      ans: 0,
      exp: 'El sistema de dirección convierte el movimiento rotativo del volante en traslación lineal de la cremallera, transmitiendo el empuje a los muñones de las ruedas a través de las rótulas y bieletas.',
      skill: 'Sistema de Dirección',
      topic: 'Mecanismos de Dirección',
      sub: 'Cremallera y Piñón'
    }
  ];

  basRaw.forEach((it, i) => {
    items.push({
      id: `mec-bas-${String(i + 1).padStart(2, '0')}`,
      number: i + 1,
      text: it.q,
      options: it.opts,
      correctIndex: it.ans,
      explanation: it.exp,
      skill: it.skill,
      difficulty: 'Fácil' as const, sectionId: 1,
      educationalLevel: 'Básico' as const,
      topic: it.topic,
      subtopic: it.sub
    });
  });

  // 20 INTERMEDIO
  const intRaw = [
    {
      q: '¿Cuál es la diferencia fundamental entre el ciclo termodinámico Otto (gasolina) y el ciclo Diésel respecto al método de ignición?',
      opts: ['El ciclo Otto no requiere combustible líquido', 'El ciclo Otto inflama la mezcla mediante chispa eléctrica externa, mientras el Diésel enciende el combustible por autoignición debida a la alta temperatura del aire comprimido', 'El motor Diésel utiliza tres bujías por cilindro', 'El ciclo Otto comprime el combustible a 1000 bar antes de entrar'],
      ans: 1,
      exp: 'El motor diésel tiene relaciones de compresión muy altas (16:1 a 22:1); el aire comprimido alcanza entre 600°C y 800°C, inflamando espontáneamente el gasóleo pulverizado sin necesidad de bujía de chispa.',
      skill: 'Termodinámica de Motores',
      topic: 'Ciclos de Combustión',
      sub: 'Otto vs Diésel'
    },
    {
      q: '¿Cuál es el orden de encendido más común en un motor de 4 cilindros en línea de 4 tiempos?',
      opts: ['1 - 2 - 3 - 4', '1 - 3 - 4 - 2', '4 - 3 - 2 - 1', '1 - 4 - 2 - 3'],
      ans: 1,
      exp: 'El orden 1-3-4-2 distribuye las detonaciones alternadamente entre los extremos y el centro del cigüeñal, equilibrando los momentos de flexión y vibraciones mecánicas de segundo orden.',
      skill: 'Mecánica de Motores',
      topic: 'Equilibrado del Motor',
      sub: 'Orden de Encendido'
    },
    {
      q: '¿Qué componente del sistema de enfriamiento regula mecánicamente el paso de refrigerante hacia el radiador abriéndose solo cuando el motor alcanza su temperatura normal de operación (85°C - 95°C)?',
      opts: ['La bomba de agua centrífuga', 'El termostato de cápsula de cera', 'El sensor de presión barométrica', 'El depósito de expansión'],
      ans: 1,
      exp: 'El termostato posee una cápsula con cera que se dilata al calentarse venciendo un resorte, abriendo la válvula hacia el radiador para mantener constante la temperatura óptima de servicio.',
      skill: 'Sistema de Refrigeración',
      topic: 'Control Térmico',
      sub: 'El Termostato'
    },
    {
      q: '¿Qué función cumple la sonda Lambda (sensor de oxígeno) instalada en el múltiple o tubo de escape?',
      opts: ['Medir la velocidad del vehículo en autopista', 'Medir la concentración de oxígeno residual en los gases de escape para que la ECU ajuste la mezcla aire/combustible al punto estequiométrico (Lambda = 1.0)', 'Enfriar el convertidor catalítico', 'Inyectar combustible adicional al escape'],
      ans: 1,
      exp: 'La sonda lambda genera una señal de voltaje que informa a la ECU si la mezcla es rica (exceso de combustible) o pobre (exceso de aire), permitiendo correcciones en lazo cerrado (closed loop).',
      skill: 'Gestión Electrónica del Motor',
      topic: 'Sensores de Gestión',
      sub: 'Sensor de Oxígeno Lambda'
    },
    {
      q: '¿Cuál es el propósito del sensor MAF (Mass Air Flow) ubicado en el conducto de admisión de aire?',
      opts: ['Medir la masa de aire que ingresa al motor por unidad de tiempo mediante un hilo o película caliente', 'Medir la presión de los neumáticos', 'Calentar el aire del motor en invierno', 'Detectar fugas de aceite en el cárter'],
      ans: 0,
      exp: 'El sensor MAF mide con precisión los gramos por segundo de aire admitido, permitiendo a la computadora de motor (ECU) dosificar exactamente la cantidad de combustible requerida para cada ciclo.',
      skill: 'Inyección Electrónica',
      topic: 'Sensores de Admisión',
      sub: 'Sensor MAF'
    },
    {
      q: '¿Qué sistema de seguridad activa previene que las ruedas del vehículo se bloqueen completamente durante una frenada de emergencia, manteniendo el control direccional?',
      opts: ['El freno de mano mecánico', 'El sistema ABS (Anti-lock Braking System)', 'La suspensión de ballestas', 'El diferencial autoblocante'],
      ans: 1,
      exp: 'El ABS modula la presión hidráulica en milisegundos mediante electroválvulas cuando los sensores de rueda detectan tendencia al bloqueo, permitiendo al conductor seguir maniobrando con el volante.',
      skill: 'Sistemas de Frenos Avanzados',
      topic: 'Seguridad Activa',
      sub: 'Sistema ABS'
    },
    {
      q: '¿Qué ocurre en un motor denominado de interferencia si la correa de distribución (timing belt) se rompe repentinamente en funcionamiento?',
      opts: ['El motor sigue funcionando con la mitad de potencia', 'Los pistones que suben colisionan violentamente contra las válvulas que quedaron abiertas, doblando válvulas y destruyendo culata y pistones', 'Se activa automáticamente una correa de respaldo de emergencia', 'Solo se apagan las luces del tablero'],
      ans: 1,
      exp: 'En motores de interferencia el espacio de la cámara de combustión es reducido para alta compresión; sin sincronismo, los pistones alcanzan a las válvulas abiertas con daños catastróficos severos.',
      skill: 'Sincronización del Motor',
      topic: 'Distribución Mecánica',
      sub: 'Motores de Interferencia'
    },
    {
      q: '¿Qué significa la configuración de motor DOHC (Double Overhead Camshaft)?',
      opts: ['Un motor con dos cilindros opuestos horizontales', 'Dos árboles de levas situados en la culata (uno para válvulas de admisión y otro para válvulas de escape)', 'Doble carburador de tiro invertido', 'Un motor con dos cigüeñales paralelos'],
      ans: 1,
      exp: 'DOHC cuenta con dos árboles de levas montados sobre la culata por bancada, permitiendo accionar directamente 4 o 5 válvulas por cilindro con mejor flujo respiratorio a altas RPM.',
      skill: 'Mecánica de Culatas',
      topic: 'Sistemas de Distribución',
      sub: 'Arquitectura DOHC'
    },
    {
      q: '¿Cuál es la función del diferencial en el eje motriz de un automóvil?',
      opts: ['Hacer que ambas ruedas giren siempre a exactamente la misma velocidad en las curvas', 'Permitir que la rueda exterior gire más rápido que la rueda interior durante una curva para evitar derrapes y arrastre de neumáticos', 'Aumentar la velocidad del motor en línea recta', 'Frenar la transmisión cuando llueve'],
      ans: 1,
      exp: 'Al trazar una curva, la rueda externa recorre mayor distancia que la interna; el engranaje diferencial permite velocidades angulares dispares repartiendo equitativamente el par de giro.',
      skill: 'Transmisión y Tren de Rodaje',
      topic: 'El Diferencial',
      sub: 'Función en Curvas'
    },
    {
      q: '¿Qué gases contaminantes nocivos trata y neutraliza principalmente un convertidor catalítico de tres vías en un motor de gasolina?',
      opts: ['Vapor de agua, nitrógeno y argón', 'Monóxido de carbono (CO), hidrocarburos no quemados (HC) y óxidos de nitrógeno (NOx)', 'Metano, ozono y cloro', 'Dióxido de azufre exclusivamente'],
      ans: 1,
      exp: 'Mediante metales nobles (platino, paladio y rodio), cataliza la oxidación de CO y HC en CO2 y H2O, y la reducción de NOx en nitrógeno elemental N2 inocuo.',
      skill: 'Control de Emisiones',
      topic: 'Postratamiento de Escape',
      sub: 'Catalizador de Tres Vías'
    },
    {
      q: '¿Cómo amplifica el servofreno (booster de freno) la fuerza que el pie del conductor aplica sobre el pedal?',
      opts: ['Mediante un motor eléctrico de 220 voltios', 'Aprovechando el vacío generado por el múltiple de admisión (o bomba de vacío) que actúa sobre una membrana elástica', 'Mediante resortes de acero templado', 'Aumentando la cantidad de aire en las ruedas'],
      ans: 1,
      exp: 'La diferencia de presión entre el vacío del motor por un lado del diafragma y la presión atmosférica por el otro genera una fuerza asistida de varios cientos de Newtons sobre el pistón de la bomba de frenos.',
      skill: 'Sistema de Frenos',
      topic: 'Asistencia de Frenado',
      sub: 'Servofreno de Vacío'
    },
    {
      q: 'En la geometría de dirección y alineación de ruedas, ¿qué ángulo representa el "Camber" o caída?',
      opts: ['La inclinación de la rueda hacia adentro o hacia afuera vista desde el frente del vehículo respecto a la vertical', 'La inclinación del eje de giro visto desde el lateral del vehículo', 'La diferencia de distancia entre la parte delantera y trasera de las llantas vista desde arriba', 'El ángulo de giro máximo del volante'],
      ans: 0,
      exp: 'El Camber es el ángulo de inclinación vertical de la rueda frontal. Un camber negativo mejora el apoyo lateral en curvas, pero un valor excesivo desgasta desigualmente el neumático.',
      skill: 'Alineación Automotriz',
      topic: 'Geometría de Dirección',
      sub: 'Ángulo Camber'
    },
    {
      q: '¿Qué componente de la suspensión conecta ambos lados de un mismo eje para reducir el balanceo e inclinación de la carrocería en las curvas?',
      opts: ['La barra estabilizadora (barra antirrolido)', 'El palier de tracción', 'La cremallera de dirección', 'El puente trasero rígido'],
      ans: 0,
      exp: 'La barra estabilizadora es una barra de acero de torsión que transfiere parte de la fuerza de compresión de la suspensión de un lado hacia el lado opuesto, limitando el rolido del chasis.',
      skill: 'Suspensión y Estabilidad',
      topic: 'Dinámica de Chasis',
      sub: 'Barra Estabilizadora'
    },
    {
      q: '¿Qué función cumplen las bujías de precalentamiento (calentadores) en un motor Diésel?',
      opts: ['Producir la chispa continua para quemar el gasóleo en alta velocidad', 'Precalentar la cámara de combustión o precámara antes y durante el arranque en frío para facilitar la autoignición', 'Enfriar los inyectores diésel', 'Cargar la batería durante la marcha'],
      ans: 1,
      exp: 'Los calentadores alcanzan más de 800°C en segundos mediante resistencias incandescentes, asegurando que el aire comprimido alcance la temperatura de inflamación cuando el motor está helado.',
      skill: 'Motores Diésel',
      topic: 'Arranque en Frío',
      sub: 'Bujías de Incandescencia'
    },
    {
      q: '¿Cuál es la función del convertidor de par hidrodinámico en una transmisión automática clásica?',
      opts: ['Reemplazar mecánicamente al embrague mediante acoplamiento fluido entre un impulsor (bomba) y una turbina con un estátor intermedio multiplicador de par', 'Enfriar el radiador con aceite', 'Regular la presión del turbo', 'Detener el vehículo en caso de choque'],
      ans: 0,
      exp: 'El convertidor transmite par de giro a través de fluido ATF hidráulico. Su estátor interno desvía el flujo de retorno multiplicando el par motor al arrancar desde parado.',
      skill: 'Transmisiones Automáticas',
      topic: 'Convertidor de Par',
      sub: 'Acoplamiento Hidráulico'
    },
    {
      q: '¿Qué sistema anticontaminación recircula los vapores de gasolina evaporados del tanque de combustible hacia el múltiple de admisión mediante un filtro de carbón activado?',
      opts: ['El sistema EVAP (Evaporative Emission Control System)', 'El sistema EGR', 'El sistema ABS', 'El compresor del aire acondicionado'],
      ans: 0,
      exp: 'El sistema EVAP almacena hidrocarburos evaporados en un cánister de carbón activado y los purga periódicamente hacia la admisión para que se quemen en el motor sin salir a la atmósfera.',
      skill: 'Emisiones Evaporativas',
      topic: 'Sistemas Antipolución',
      sub: 'Sistema EVAP y Cánister'
    },
    {
      q: '¿Qué componente de la junta homocinética en los semiejes de tracción delantera permite transmitir el par motriz con velocidad angular constante incluso mientras la rueda gira y oscila por la suspensión?',
      opts: ['El fuelle o junta cardánica simple sin bolas', 'La junta homocinética tipo Rzeppa con bolas de acero en pistas esféricas', 'Un cable de acero trenzado', 'Un embrague centrífugo'],
      ans: 1,
      exp: 'A diferencia de las crucetas simples que sufren aceleraciones cíclicas en ángulo, la junta Rzeppa mantiene una relación de velocidad 1:1 estricta entre el semieje y la rueda.',
      skill: 'Semiejes y Transmisión',
      topic: 'Juntas Homocinéticas',
      sub: 'Junta Rzeppa'
    },
    {
      q: '¿Qué medición eléctrica sobre una batería automotriz en reposo (motor apagado por varias horas) indica un estado de carga prácticamente del 100%?',
      opts: ['10.5 Voltios', '12.0 Voltios', 'Aproximadamente 12.6 a 12.7 Voltios', '14.8 Voltios'],
      ans: 2,
      exp: 'Una batería de plomo-ácido de 6 celdas al 100% tiene un voltaje en circuito abierto de ~12.65V (2.11V por celda). Un valor de 12.0V representa menos del 25% de carga restante.',
      skill: 'Electricidad Automotriz',
      topic: 'Baterías de Plomo-Ácido',
      sub: 'Voltaje en Reposo'
    },
    {
      q: '¿Qué indica la primera cifra en la especificación de un aceite de motor multigrado como "5W-30"?',
      opts: ['El porcentaje de detergente sintético', 'El grado de viscosidad en frío (invierno / Winter) evaluado a bajas temperaturas bajo cero', 'La cantidad de litros recomendada en el cárter', 'El número de válvulas del motor'],
      ans: 1,
      exp: 'El número antes de la "W" (Winter) especifica la fluidez del aceite al arrancar en frío según la norma SAE J300; un número menor (ej. 0W o 5W) asegura lubricación más rápida al motor frío.',
      skill: 'Lubricantes y Fluidos',
      topic: 'Normas SAE de Aceite',
      sub: 'Viscosidad Multigrado'
    },
    {
      q: '¿Qué función cumple la bomba de combustible de alta presión (HPFP) en un sistema de inyección directa de gasolina (GDI)?',
      opts: ['Vaciar el tanque de reserva', 'Elevar la presión de la gasolina desde ~4 bar (presión del tanque) hasta 150 a 350 bar para inyectar directamente dentro de la cámara de combustión durante la compresión', 'Refrigerar la bujía de encendido', 'Filtrar el aire exterior'],
      ans: 1,
      exp: 'En inyección directa, el inyector pulveriza contra la contrapresión del cilindro comprimido; la bomba mecánica de alta presión movida por el árbol de levas genera hasta 350 bar de presión en el riel.',
      skill: 'Inyección Directa GDI',
      topic: 'Sistemas de Inyección',
      sub: 'Bomba de Alta Presión'
    }
  ];

  intRaw.forEach((it, i) => {
    items.push({
      id: `mec-int-${String(i + 1).padStart(2, '0')}`,
      number: 20 + i + 1,
      text: it.q,
      options: it.opts,
      correctIndex: it.ans,
      explanation: it.exp,
      skill: it.skill,
      difficulty: 'Intermedio' as const, educationalLevel: 'Intermedio' as const, sectionId: 1,
      topic: it.topic,
      subtopic: it.sub
    });
  });

  // 20 BACHILLERATO
  const bacRaw = [
    {
      q: '¿Cuál es la función del sensor CKP (Crankshaft Position Sensor) en un sistema de gestión electrónica de motor?',
      opts: ['Monitorear el nivel de líquido de frenos', 'Detectar la velocidad angular exacta y la posición angular de los pistones mediante una rueda fónica en el cigüeñal para sincronizar inyección y chispa', 'Medir la temperatura del habitáculo', 'Calcular el desgaste de las pastillas'],
      ans: 1,
      exp: 'El sensor CKP (de reluctancia variable o efecto Hall) lee los dientes y el diente faltante de la rueda fónica (ej. 60-2 dientes), suministrando la referencia base de tiempo (timing) a la ECU.',
      skill: 'Sensores de Motor',
      topic: 'Sincronización Electrónica',
      sub: 'Sensor CKP'
    },
    {
      q: '¿Cuál es el objetivo principal de la válvula EGR (Exhaust Gas Recirculation) en motores de combustión moderna?',
      opts: ['Aumentar la potencia máxima a plenas revoluciones', 'Reintroducir una fracción calculada de gases de escape inertes a la admisión para reducir la temperatura pico de combustión y abatir las emisiones de óxidos de nitrógeno (NOx)', 'Acelerar el calentamiento del radiador', 'Eliminar el hollín de los tubos de escape'],
      ans: 1,
      exp: 'Los óxidos de nitrógeno (NOx) se forman a temperaturas superiores a 1370°C con exceso de oxígeno; la masa inerte de gases de escape absorbe calor, bajando la temperatura de llama.',
      skill: 'Sistemas Antipolución',
      topic: 'Control de Emisiones',
      sub: 'Válvula EGR'
    },
    {
      q: '¿Qué componente del turbocompresor se encarga de desviar parte de los gases de escape fuera de la turbina para limitar la presión de sobrealimentación (boost pressure)?',
      opts: ['El intercooler de aire-aire', 'La válvula de descarga o compuerta de alivio (Wastegate)', 'El sensor de picado', 'El cárter seco'],
      ans: 1,
      exp: 'La compuerta Wastegate se abre por actuador neumático o electrónico para puentear la turbina de escape cuando se alcanza la presión máxima de soplado programada, evitando sobrepresión destructiva en el motor.',
      skill: 'Sobrealimentación',
      topic: 'Turbocompresores',
      sub: 'Válvula Wastegate'
    },
    {
      q: '¿Cuál es el beneficio de instalar un Intercooler en un motor turboalimentado?',
      opts: ['Hacer que el tubo de escape suene más deportivo', 'Enfriar el aire comprimido que sale del turbo antes de entrar a los cilindros para incrementar su densidad de oxígeno y reducir el riesgo de detonación (knocking)', 'Calentar el refrigerante del motor', 'Filtrar el aceite del cárter'],
      ans: 1,
      exp: 'Al comprimirse, el aire sube drásticamente de temperatura perdiendo densidad; el intercooler enfría el aire admitido, permitiendo mayor masa de oxígeno por carrera y mayor potencia con menor riesgo de autoencendido prematuro.',
      skill: 'Sistemas Turbo',
      topic: 'Intercooling',
      sub: 'Enfriamiento del Aire de Carga'
    },
    {
      q: '¿Cómo calcula un técnico la cilindrada unitaria (volumen desplazado de un cilindro) a partir del diámetro (D) del cilindro y la carrera (S) del pistón?',
      opts: ['V = D × S', 'V = (π / 4) × D² × S', 'V = 2 × π × D × S²', 'V = D³ / S'],
      ans: 1,
      exp: 'La fórmula geométrica del volumen de un cilindro recto con diámetro D y altura de desplazamiento S (carrera) es V = Área de base × Altura = (π/4)·D²·S.',
      skill: 'Cálculo Mecánico',
      topic: 'Geometría del Motor',
      sub: 'Cilindrada Unitaria'
    },
    {
      q: '¿Cuál es la relación estequiométrica ideal en masa entre aire y combustible para la combustión completa de gasolina convencional?',
      opts: ['8:1', '14.7:1 (14.7 kg de aire por cada 1 kg de gasolina)', '22:1', '1:1'],
      ans: 1,
      exp: 'La relación estequiométrica teórica de la gasolina (hidrocarburo medio C8H18) es 14.7:1 en masa (coeficiente de exceso de aire Lambda = 1.00), donde se logra combustión óptima para el catalizador.',
      skill: 'Combustión Automotriz',
      topic: 'Relación Estequiométrica',
      sub: 'Mezcla Aire-Gasolina'
    },
    {
      q: '¿Qué sensor piezoeléctrico detecta las vibraciones acústicas de alta frecuencia provocadas por la detonación ("pistoneo" o knocking) en el bloque del motor?',
      opts: ['El sensor Knock (Sensor de picado / detonación)', 'El sensor de nivel de combustible', 'El sensor de velocidad de rueda', 'El termistor de agua'],
      ans: 0,
      exp: 'El sensor Knock contiene un cristal piezoeléctrico sintonizado a las frecuencias de detonación (~5 a 8 kHz); ante detonación, la ECU retrasa el avance al encendido inmediatamente para proteger bielas y pistones.',
      skill: 'Gestión Electrónica',
      topic: 'Sensores de Protección',
      sub: 'Sensor Knock y Retraso de Encendido'
    },
    {
      q: '¿Qué suspensión delantera independiente utiliza un amortiguador estructural telescópico que actúa a su vez como pivote superior de dirección junto a un brazo oscilante inferior?',
      opts: ['Suspensión McPherson', 'Eje De Dion con barras de torsión', 'Eje rígido con ballestas semielípticas', 'Suspensión cantilever de fórmula 1'],
      ans: 0,
      exp: 'La suspensión tipo McPherson es la más extendida mundialmente por su compacidad y bajo costo: el conjunto muelle-amortiguador soporta cargas estructurales verticales y pivota en su copela superior.',
      skill: 'Sistemas de Suspensión',
      topic: 'Arquitectura de Suspensión',
      sub: 'Suspensión McPherson'
    },
    {
      q: '¿En qué consiste el sistema de distribución variable (VVT / VTEC / VANOS)?',
      opts: ['En cambiar el número de pistones del motor en marcha', 'En modificar electrónicamente o hidráulicamente el calado angular y/o la alzada de las válvulas según las RPM y carga del motor para optimizar par a bajas vueltas y potencia en altas', 'En encender y apagar el alternador', 'En variar la longitud de los neumáticos'],
      ans: 1,
      exp: 'A bajas RPM se requiere poco cruce de válvulas para ralentí estable; a altas RPM se necesita mayor traslape y apertura para llenado inercial. Los variadores VVT modifican el ángulo de levas sobre la marcha.',
      skill: 'Distribución Avanzada',
      topic: 'Sistemas VVT',
      sub: 'Sincronización Variable de Válvulas'
    },
    {
      q: '¿Qué resistencia de terminación estándar se encuentra en cada uno de los dos extremos físicos de una línea de comunicación CAN Bus automotriz de alta velocidad?',
      opts: ['10 Ohmios', '120 Ohmios (resultando en 60 Ohmios equivalentes en paralelo entre CAN-H y CAN-L)', '1 Megaohmio', 'Cero Ohmios (cortocircuito)'],
      ans: 1,
      exp: 'El bus diferencial CAN (ISO 11898) lleva dos resistencias de 120 Ω en sus extremos para igualar la impedancia característica de la línea trenzada y eliminar reflexiones de onda.',
      skill: 'Redes Multiplexadas',
      topic: 'Protocolo CAN Bus',
      sub: 'Resistencias de Terminación'
    },
    {
      q: '¿Cómo funciona la regeneración térmica del filtro de partículas diésel (DPF)?',
      opts: ['Lavando el filtro con agua fría mediante una manguera', 'Elevando la temperatura de los gases de escape por encima de 600°C (mediante postinyección de gasóleo) para quemar el hollín atrapado y convertirlo en CO2', 'Retirando el filtro y golpeándolo en el suelo', 'Apagando el motor durante 1 hora'],
      ans: 1,
      exp: 'Cuando los sensores de presión diferencial detectan saturación de hollín, la ECU activa la postinyección en fase de escape para calentar el DPF a más de 600°C, incinerando las partículas de carbono.',
      skill: 'Sistemas Diésel Modernos',
      topic: 'Filtros DPF / FAP',
      sub: 'Regeneración Térmica de Hollín'
    },
    {
      q: '¿Cuál es la función del anillo sincronizador en una caja de cambios manual?',
      opts: ['Detener el giro del motor cuando se aplica el freno', 'Igualar por fricción cónica la velocidad de giro entre el piñón suelto de la marcha y el buje del eje antes de que el manguito deslice los dientes de perro', 'Lubricar el cárter', 'Enfriar el embrague'],
      ans: 1,
      exp: 'Los conos de fricción del sincronizador frenan o aceleran el engranaje seleccionado para que sus dientes entren a la misma velocidad angular que el árbol secundario, eliminando el chirrido o choque de dientes.',
      skill: 'Transmisiones Mecánicas',
      topic: 'Cajas Manuales',
      sub: 'Anillos Sincronizadores'
    },
    {
      q: '¿Qué prueba con herramienta de diagnóstico permite determinar si la pérdida de compresión de un cilindro se debe a aros desgastados o a válvulas con mal sellado?',
      opts: ['Prueba de fugas de cilindro con aire comprimido regulado (Leakdown test)', 'Medición de la batería con multímetro', 'Alineación de la dirección con láser', 'Revisión del líquido limpiaparabrisas'],
      ans: 0,
      exp: 'El detector de fugas introduce aire presurizado con el pistón en PMS: si el aire escapa por el tapón de aceite son aros/cilindro; si sale por el escape es válvula de escape; si sale por admisión es válvula de admisión.',
      skill: 'Diagnóstico de Motores',
      topic: 'Pruebas de Estanqueidad',
      sub: 'Leakdown Test'
    },
    {
      q: '¿Qué ventaja técnica fundamental aporta la dirección electroasistida (EPS) frente a la dirección hidráulica tradicional asistida por bomba mecánica?',
      opts: ['Requiere cambiar 5 litros de aceite cada mes', 'Elimina la bomba mecánica movida por correa (ahorrando combustible) y asiste mediante un servomotor eléctrico solo cuando el conductor mueve el volante', 'Bloquea el volante en curvas pronunciadas', 'Hace que las ruedas no toquen el suelo'],
      ans: 1,
      exp: 'La dirección hidráulica consume potencia del motor constantemente incluso en línea recta; la EPS eléctrica consume energía únicamente bajo demanda y se integra con sistemas ADAS como mantenimiento de carril.',
      skill: 'Sistemas de Dirección',
      topic: 'Dirección Electroasistida EPS',
      sub: 'Eficiencia y ADAS'
    },
    {
      q: '¿Qué componente del freno de tambor empuja las zapatas hacia afuera contra la superficie interna del tambor giratorio?',
      opts: ['El bombín o cilindro hidráulico de rueda', 'La barra estabilizadora', 'El disco ventilado', 'El actuador del turbocompresor'],
      ans: 0,
      exp: 'El cilindro de rueda contiene dos pistones opuestos sellados con copelas que se expanden hacia afuera cuando el fluido presurizado entra por el racor de freno.',
      skill: 'Sistemas de Freno',
      topic: 'Frenos de Tambor',
      sub: 'Cilindro de Rueda'
    },
    {
      q: '¿Qué tipo de tracción vehicular reparte permanentemente la potencia a las 4 ruedas mediante un diferencial central para optimizar tracción en cualquier condición de asfalto?',
      opts: ['Tracción delantera simple (FWD)', 'Tracción trasera simple (RWD)', 'Tracción integral permanente (AWD)', 'Tracción de trinquete estático'],
      ans: 2,
      exp: 'Los sistemas All-Wheel Drive (AWD) emplean diferenciales centrales (Torsen, multidisco o acoplador viscoso) que transmiten par a ambos ejes continuamente sin riesgo de bloqueo en asfalto seco.',
      skill: 'Transmisión Integral',
      topic: 'Sistemas AWD',
      sub: 'AWD vs 4WD Desconectable'
    },
    {
      q: '¿Qué función cumple el sistema de frenado regenerativo en los vehículos híbridos y eléctricos (HEV / EV)?',
      opts: ['Desgastar más rápido los discos de freno para generar calor', 'Hacer funcionar el motor eléctrico como generador durante las desaceleraciones, convirtiendo la energía cinética del coche en electricidad para recargar la batería de alta tensión', 'Bloquear las ruedas traseras mecánicamente', 'Apagar los faros para ahorrar energía'],
      ans: 1,
      exp: 'Al desacelerar, el par resistente del generador electromagnético frena el vehículo mientras recupera energía que recarga la batería, reduciendo drásticamente el uso de los frenos de fricción mecánica.',
      skill: 'Vehículos Eléctricos e Híbridos',
      topic: 'Frenado Regenerativo',
      sub: 'Recuperación de Energía'
    },
    {
      q: '¿Qué indica el código de neumático estandarizado "205/55 R16 91V"?',
      opts: ['205 litros de capacidad, 55 tornillos, Rin 16 y peso de 91 kg', '205 mm de ancho de sección, 55% de relación de aspecto (perfil/altura), construcción Radial, Rin de 16 pulgadas, índice de carga 91 y código de velocidad V (hasta 240 km/h)', '205 km/h de velocidad máxima y 55 caballos de fuerza', 'Un modelo de batería de 16 voltios'],
      ans: 1,
      exp: '205 es el ancho en milímetros; 55 indica que la altura del flanco es el 55% de 205 mm (~112.7 mm); R significa estructura radial; 16 es el diámetro del rin en pulgadas; 91 es la capacidad de carga (615 kg) y V velocidad (240 km/h).',
      skill: 'Neumáticos y Ruedas',
      topic: 'Nomenclatura ISO de Neumáticos',
      sub: 'Interpretación de Medidas'
    },
    {
      q: '¿Cuál es la función del actuador de ralentí o cuerpo de aceleración electrónico (Drive-by-Wire) al encender el aire acondicionado con el vehículo detenido?',
      opts: ['Apagar el motor de inmediato', 'Abrir ligeramente la mariposa de aceleración para ingresar más masa de aire y compensar la carga mecánica impuesta por el compresor, manteniendo las RPM estables', 'Desinflar los neumáticos', 'Aumentar la temperatura de la calefacción'],
      ans: 1,
      exp: 'El compresor del clima demanda entre 2 y 4 kW del motor; la ECU detecta la activación y compensa la carga ajustando la mariposa electrónica para evitar que el ralentí decaiga o vibre.',
      skill: 'Control de Ralentí',
      topic: 'Gestión Electrónica de Motor',
      sub: 'Compensación de Cargas Auxiliares'
    },
    {
      q: '¿Qué ventaja ofrecen los taqués (buzos) hidráulicos frente a los taqués mecánicos de pastilla calibrada?',
      opts: ['Aumentan el consumo de combustible un 40%', 'Ajustan y eliminan automáticamente la holgura térmica de válvulas mediante la presión de aceite del motor, reduciendo el ruido y eliminando la necesidad de calibración periódica manual', 'Son de plástico desechable', 'Solo funcionan en motores de dos tiempos'],
      ans: 1,
      exp: 'El buzo hidráulico se llena de aceite a presión compensando las variaciones de dilatación térmica entre la válvula y el árbol de levas con holgura cero permanente (zero lash).',
      skill: 'Tren de Válvulas',
      topic: 'Componentes de Distribución',
      sub: 'Taqués Hidráulicos'
    }
  ];

  bacRaw.forEach((it, i) => {
    items.push({
      id: `mec-bac-${String(i + 1).padStart(2, '0')}`,
      number: 40 + i + 1,
      text: it.q,
      options: it.opts,
      correctIndex: it.ans,
      explanation: it.exp,
      skill: it.skill,
      difficulty: 'Intermedio' as const, sectionId: 1,
      educationalLevel: 'Bachillerato' as const,
      topic: it.topic,
      subtopic: it.sub
    });
  });

  // 20 TÉCNICO
  const tecRaw = [
    {
      q: 'Al conectar un osciloscopio digital a la señal de control de un inyector de gasolina inductivo, ¿qué fenómeno físico causa el pico de alto voltaje (flyback) de 60V a 80V inmediatamente después de que la ECU corta la masa?',
      opts: ['Un cortocircuito en el alternador', 'La fuerza contraelectromotriz (f.c.e.m.) inducida por el colapso repentino del campo magnético del solenoide del inyector (Ley de Faraday/Lenz)', 'La chispa de la bujía saltando al inyector', 'La carga residual de la batería'],
      ans: 1,
      exp: 'Al interrumpirse bruscamente la corriente por el devanado del inyector (L), se induce un voltaje opuesto V = -L(di/dt) conocido como pico flyback inductivo, señal de que el bobinado y el corte de masa operan adecuadamente.',
      skill: 'Diagnóstico con Osciloscopio',
      topic: 'Señales de Inyección',
      sub: 'Pico Flyback Inductivo'
    },
    {
      q: 'Al diagnosticar con escáner automotriz en flujo de datos en vivo (Live Data), ¿qué indica un parámetro LTFT (Long Term Fuel Trim) sostenido en +25%?',
      opts: ['Que los inyectores están goteando y enviando demasiado combustible', 'Que la ECU ha tenido que aumentar al máximo permitido el tiempo de inyección para compensar una mezcla extremadamente pobre (ej. entrada no medida de aire falso o baja presión de combustible)', 'Que la batería está dañada', 'Que el catalizador está nuevo'],
      ans: 1,
      exp: 'Un ajuste positivo elevado significa que los sensores de oxígeno reportan falta de combustible / exceso de aire; la ECU añade gasolina para evitar daño por mezcla magra.',
      skill: 'Diagnóstico OBD-II',
      topic: 'Ajustes de Combustible Fuel Trim',
      sub: 'STFT y LTFT'
    },
    {
      q: '¿Qué código de falla DTC estándar OBD-II identifica una pérdida aleatoria o múltiple de combustión (misfire) en los cilindros del motor?',
      opts: ['P0420', 'P0300', 'P0171', 'P0500'],
      ans: 1,
      exp: 'P0300 (Random/Multiple Cylinder Misfire Detected) alerta que múltiples cilindros están fallando en encendido o combustión, lo que puede sobrecalentar y destruir el catalizador.',
      skill: 'Códigos DTC y Diagnóstico',
      topic: 'Estándar OBD-II',
      sub: 'Código P0300 Misfire'
    },
    {
      q: 'Al realizar el apriete de los pernos de la culata (tapa de cilindros), ¿por qué se utiliza una secuencia espiral desde el centro hacia los extremos y apriete angular final (grados)?',
      opts: ['Para que los pernos queden flojos y fáciles de quitar con la mano', 'Para asegurar una deformación plástica controlada en pernos TTY (Torque-to-Yield) y una presión perfectamente uniforme que selle la junta sin combar la culata', 'Para evitar usar torquímetro', 'Porque el fabricante lo hace por estética'],
      ans: 1,
      exp: 'Apretar del centro hacia afuera expulsa ondulaciones de la junta; el apriete angular estira los pernos en su zona de fluencia plástica elástica uniforme, eliminando errores por rozamiento de rosca.',
      skill: 'Reconstrucción de Motores',
      topic: 'Montaje de Culata',
      sub: 'Apriete Angular y Pernos TTY'
    },
    {
      q: 'Al verificar un disco de freno rectificado con un reloj comparador micrométrico montado en el buje, ¿cuál es el alabeo o desviación lateral (runout) máximo admisible típicamente en turismos?',
      opts: ['10.0 mm', 'Aproximadamente 0.05 mm (50 micrones)', '5.0 centímetros', '1.0 pulgada'],
      ans: 1,
      exp: 'Un alabeo superior a 0.05 mm causa que las pastillas golpeen rítmicamente el disco, originando pulsaciones molestas en el pedal de freno (judder) y frenada irregular.',
      skill: 'Servicio de Frenos',
      topic: 'Metrología de Discos',
      sub: 'Alabeo Máximo Admisible'
    },
    {
      q: '¿Qué prueba eléctrica fundamental sobre el cable principal del motor de arranque permite detectar una conexión sulfatada sin desmontar el cable?',
      opts: ['Prueba de caída de voltaje (voltaje drop) con el multímetro en bornes del cable durante el accionamiento del arranque (no debe superar ~0.5V)', 'Medición de resistencia estática en megaohmios con el cable desconectado', 'Prueba de continuidad con zumbador sin consumo de corriente', 'Inspección visual del color exterior del aislante'],
      ans: 0,
      exp: 'Una resistencia diminuta de apenas 0.02 Ω deja pasar un multímetro ordinario, pero con 200A de corriente de arranque provocará una caída de 4V (V=I·R), impidiendo que el motor gire. La prueba de caída bajo carga es la única concluyente.',
      skill: 'Diagnóstico Eléctrico Avanzado',
      topic: 'Caída de Voltaje',
      sub: 'Voltage Drop en Circuito de Arranque'
    },
    {
      q: 'En un sistema de inyección diésel Common Rail, ¿cuál es la función de los inyectores piezoeléctricos frente a los solenoides convencionales?',
      opts: ['Utilizar discos de plástico para reducir peso', 'Aprovechar la dilatación de cristales piezoeléctricos para conmutar la aguja en menos de 0.1 milisegundos, permitiendo hasta 5 a 7 pre/post inyecciones ultraprecisas por ciclo', 'Eliminar la bomba de alta presión', 'Generar electricidad para el alternador'],
      ans: 1,
      exp: 'Los actuadores piezoeléctricos responden 5 veces más rápido que los electroimanes, logrando micro-pulsos de inyección piloto que suavizan el ruido diésel y optimizan las emisiones de partículas.',
      skill: 'Sistemas Common Rail',
      topic: 'Inyectores Piezoeléctricos',
      sub: 'Velocidad de Conmutación'
    },
    {
      q: 'Al diagnosticar el sistema de aire acondicionado automotriz mediante manómetros con gas R134a, ¿qué indica una presión en el lado de baja muy baja (cercana a vacío) y en alta muy baja?',
      opts: ['Exceso masivo de refrigerante', 'Carga insuficiente grave o fuga total de refrigerante en el circuito', 'Fallo del ventilador del habitáculo', 'Compresor sobrecargado de aceite'],
      ans: 1,
      exp: 'Ambas presiones anormalmente deprimidas confirman la pérdida de masa del fluido refrigerante en el circuito cerrado por fuga en evaporador, condensador, tuberías o retenes.',
      skill: 'Climatización Automotriz',
      topic: 'Manometría HVAC',
      sub: 'Diagnóstico de Fugas de Gas R134a'
    },
    {
      q: '¿Qué procedimiento debe realizarse obligatoriamente con el sistema de dirección EPS luego de una alineación completa de las ruedas o reemplazo de la cremallera?',
      opts: ['Pintar la barra de dirección', 'Calibración y puesta a cero del sensor de ángulo de dirección (SAS / Steering Angle Sensor) con el equipo de diagnosis', 'Cambiar el fusible del estéreo', 'Aumentar la presión de las llantas traseras'],
      ans: 1,
      exp: 'El control de estabilidad (ESP) y la dirección asistida necesitan saber con precisión matemática cuándo el volante está en 0.0° centrado para no intervenir erróneamente en línea recta.',
      skill: 'Sistemas ADAS y EPS',
      topic: 'Calibración Electrónica',
      sub: 'Calibración del Sensor SAS'
    },
    {
      q: 'Al verificar la señal de un sensor inductivo de posición con el osciloscopio, ¿qué forma de onda característica se obtiene?',
      opts: ['Una señal de onda cuadrada de 0 a 5V constante', 'Una onda senoidal de corriente alterna cuya amplitud y frecuencia aumentan proporcionalmente con la velocidad de rotación', 'Una línea horizontal plana sin variaciones', 'Un pulso triangular negativo cada 10 minutos'],
      ans: 1,
      exp: 'El paso de los dientes ferrosos ante el imán del sensor inductivo perturba el flujo magnético en la bobina, generando una tensión senoidal alterna (AC) proporcional a las RPM.',
      skill: 'Osciloscopios Automotrices',
      topic: 'Sensores Inductivos',
      sub: 'Onda Senoidal de Tensión Inducida'
    },
    {
      q: '¿Qué herramienta de metrología se utiliza para medir el juego axial del cigüeñal o la holgura entre dientes de corona y piñón en el diferencial?',
      opts: ['Cinta métrica de carpintero', 'Reloj comparador con base magnética y palpador calibrado en centésimas de milímetro', 'Guantera de herramientas', 'Nivel de burbuja'],
      ans: 1,
      exp: 'El reloj comparador montado con base magnética mide desplazamientos lineales con resolución de 0.01 mm, garantizando que el juego de tolerancias axiales cumpla las tablas de ensamble del fabricante.',
      skill: 'Metrología de Motores',
      topic: 'Tolerancias Mecánicas',
      sub: 'Reloj Comparador y Juego Axial'
    },
    {
      q: '¿Qué prueba química sobre el refrigerante permite verificar si hay una junta de culata soplada o fisura en la cámara de combustión que fuga gases al circuito de refrigeración?',
      opts: ['Prueba con reactivo detector de CO2 (Block Tester con líquido de contraste azul a verde/amarillo)', 'Medición de pH con vinagre', 'Prueba con densímetro de batería', 'Prueba de salinidad del agua'],
      ans: 0,
      exp: 'El Block Tester aspira los vapores del radiador a través de una solución química indicadora que reacciona específicamente ante la presencia de CO2 de combustión, cambiando de azul a amarillo.',
      skill: 'Diagnóstico de Fugas Internas',
      topic: 'Junta de Culata',
      sub: 'Detector Químico de CO2'
    },
    {
      q: '¿Por qué se debe purgar o sangrar el circuito de frenos con fluido nuevo hasta que no salgan burbujas de aire?',
      opts: ['Porque el aire es un fluido incompresible', 'Porque el aire es un gas compresible: al presionar el pedal, el aire se comprime absorbiendo el recorrido del pistón y el pedal se torna esponjoso con severa pérdida de frenada', 'Porque el aire hace que los neumáticos se desinflen', 'Porque el aire congela los cálipers'],
      ans: 1,
      exp: 'El principio hidráulico de Pascal requiere un fluido incompresible; una burbuja microscópica de aire actúa como un resorte colapsable, impidiendo que la presión llegue con fuerza a las pastillas.',
      skill: 'Mantenimiento de Frenos',
      topic: 'Sangrado de Frenos',
      sub: 'Incompresibilidad de Fluidos'
    },
    {
      q: 'En el balanceo de una rueda, ¿cuál es la diferencia entre el desbalance estático y el dinámico?',
      opts: ['El estático no existe en automóviles', 'El desbalance estático provoca saltos verticales de la rueda (hop), mientras el desbalance dinámico causa oscilación lateral o bamboleo (shimmy) a ciertas velocidades', 'El dinámico solo se detecta con el coche estacionado', 'Son idénticos y se corrigen con pintura'],
      ans: 1,
      exp: 'El desbalance estático concentra la masa pesada en un punto radial generando rebote vertical; el dinámico tiene masas desfasadas en planos opuestos del rin, originando momentos de torsión oscilatorios laterales.',
      skill: 'Chasis y Ruedas',
      topic: 'Balanceo de Ruedas',
      sub: 'Desbalance Estático vs Dinámico'
    },
    {
      q: '¿Qué componente del alternador se comprueba conectando el multímetro en prueba de diodos para verificar que solo permita el paso de corriente en un único sentido?',
      opts: ['El puente rectificador de diodos (placa de diodos)', 'El estator de cobre trifásico', 'El rotor con anillos rozantes', 'El regulador electrónico de voltaje'],
      ans: 0,
      exp: 'El puente rectificador contiene diodos positivos y negativos que convierten la CA del estátor en CC; si un diodo se perfora en cortocircuito o se abre, se genera un rizado de CA que drena la batería y daña módulos electrónicos.',
      skill: 'Electricidad del Motor',
      topic: 'Alternador Automotriz',
      sub: 'Puente Rectificador de Diodos'
    },
    {
      q: '¿Qué parámetro de emisiones del analizador de 4 gases indica una combustión incompleta por mezcla rica o fallas de encendido?',
      opts: ['Nivel muy alto de Hidrocarburos no quemados (HC en ppm) y alto Monóxido de Carbono (CO en %)', 'Cero ppm de HC', '15% de Dióxido de Carbono (CO2)', '0.1% de Oxígeno (O2)'],
      ans: 0,
      exp: 'Los HC representan gasolina cruda sin quemar expulsada por el escape; el CO alto delata insuficiencia de oxígeno para completar la combustión hacia CO2.',
      skill: 'Análisis de Gases de Escape',
      topic: 'Emisiones Contaminantes',
      sub: 'HC y CO en Analizador de Gases'
    },
    {
      q: '¿Cuál es el propósito del rodamiento o cojinete de empuje (collarín de embrague)?',
      opts: ['Fijar el disco de embrague al motor permanentemente', 'Transmitir la fuerza de desembrague ejercida por la horquilla hacia las lengüetas del diafragma giratorio del plato de presión sin fricción destructiva', 'Lubricar la palanca de cambios', 'Enfriar el volante bimasa'],
      ans: 1,
      exp: 'El collarín permite presionar el resorte de diafragma giratorio a miles de RPM desde una horquilla estacionaria sin que haya fricción por deslizamiento en seco.',
      skill: 'Transmisión Manual',
      topic: 'Conjunto de Embrague',
      sub: 'Collarín de Embrague'
    },
    {
      q: '¿Qué precaución de seguridad crítica debe tomar un técnico antes de intervenir el cableado de color naranja de alto voltaje en un vehículo híbrido o eléctrico?',
      opts: ['Encender la calefacción', 'Desconectar el conector de servicio de alta tensión (Service Plug / Manual Disconnect) y esperar el tiempo de descarga de condensadores de alta tensión, verificando tensión cero con multímetro CAT III/IV', 'Mojar los guantes con agua', 'Quitar únicamente los fusibles de la radio'],
      ans: 1,
      exp: 'El cableado naranja opera a tensiones letales de 300V a 800V CC. El protocolo de seguridad exige retirar el enchufe de servicio con guantes dieléctricos certificados clase 0 (1000V) y verificar ausencia de voltaje antes de tocar cualquier conector.',
      skill: 'Seguridad en Vehículos Eléctricos',
      topic: 'Alta Tensión Automotriz',
      sub: 'Desconexión de Servicio de Alta Tensión'
    },
    {
      q: '¿Cómo se diagnostica una bobina de encendido individual (COP) con fuga de alta tensión mediante un probador de chispa calibrado?',
      opts: ['Comprobando si el motor arranca sin combustible', 'Verificando que la chispa salte con un arco azul y brillante capaz de vencer una brecha de al menos 25 mm a 30 mm en aire libre con sonido seco', 'Midiendo la temperatura exterior de la bobina con termómetro de cocina', 'Sumergiendo la bobina en agua con sal'],
      ans: 1,
      exp: 'En el interior del cilindro presurizado la resistencia al arco es mucho mayor que en el aire; una bobina defectuosa genera chispa débil en el aire pero fallará bajo compresión en el motor.',
      skill: 'Sistemas de Encendido COP',
      topic: 'Diagnóstico de Alta Tensión',
      sub: 'Probador de Chispa Calibrado'
    },
    {
      q: '¿Qué síntoma delata el desgaste severo del volante motor bimasa (Dual Mass Flywheel) en vehículos diésel o gasolina con transmisión manual?',
      opts: ['El vehículo acelera más rápido', 'Ruidos metálicos, traqueteo o chasquidos al ralentí y al apagar el motor, acompañados de fuertes vibraciones en la carrocería en regímenes bajos de RPM', 'El claxon suena solo', 'Los frenos traseros se calientan'],
      ans: 1,
      exp: 'El volante bimasa alberga muelles helicoidales internos que amortiguan las pulsaciones torsionales del motor; cuando los muelles y patines se fatigan, las dos masas metálicas chocan entre sí con ruidos y vibración excesiva.',
      skill: 'Tren Motriz',
      topic: 'Volante Motor Bimasa',
      sub: 'Falla y Diagnóstico de Volante Bimasa'
    }
  ];

  tecRaw.forEach((it, i) => {
    items.push({
      id: `mec-tec-${String(i + 1).padStart(2, '0')}`,
      number: 60 + i + 1,
      text: it.q,
      options: it.opts,
      correctIndex: it.ans,
      explanation: it.exp,
      skill: it.skill,
      difficulty: 'Desafiante' as const, sectionId: 1,
      educationalLevel: 'Técnico' as const,
      topic: it.topic,
      subtopic: it.sub
    });
  });

  // 20 UNIVERSITARIO
  const uniRaw = [
    {
      q: 'En termodinámica aplicada a motores, ¿cuál es la expresión matemática del rendimiento térmico teórico del ciclo de aire estándar Otto en función de la relación de compresión (r) y el coeficiente adiabático (γ)?',
      opts: ['η = 1 - r^(γ - 1)', 'η = 1 - (1 / r^(γ - 1))', 'η = r / (γ - 1)', 'η = (γ - 1) / r'],
      ans: 1,
      exp: 'El rendimiento teórico del ciclo Otto es η_th = 1 - 1/(r^(γ-1)), demostrando matemáticamente que elevar la relación de compresión incrementa la eficiencia térmica de conversión de calor en trabajo mecánico.',
      skill: 'Termodinámica Avanzada',
      topic: 'Ciclos de Potencia de Gas',
      sub: 'Rendimiento Térmico del Ciclo Otto'
    },
    {
      q: 'En dinámica vehicular, ¿qué fenómeno describe el modelo de bicicleta cuando el ángulo de deriva (slip angle) del eje delantero es mayor que el del eje trasero en una curva sostenida?',
      opts: ['Sobreviraje (oversteer)', 'Subviraje (understeer)', 'Inestabilidad pendular pura', 'Vuelco giroscópico'],
      ans: 1,
      exp: 'Cuando los neumáticos delanteros alcanzan mayor ángulo de deriva que los traseros, el radio de giro efectivo aumenta y el morro del vehículo se desplaza hacia el exterior de la curva (comportamiento subvirador).',
      skill: 'Dinámica Vehicular',
      topic: 'Comportamiento en Curva',
      sub: 'Subviraje y Ángulo de Deriva'
    },
    {
      q: '¿Qué fórmula semiempírica ampliamente utilizada en ingeniería automotriz modela la fuerza lateral y longitudinal del neumático en función de la carga vertical y el deslizamiento?',
      opts: ['Ecuación de Bernoulli para fluidos', 'La Fórmula Mágica de Pacejka (Magic Formula)', 'Ley de Gravitación Universal de Newton', 'Transformada de Fourier Discreta'],
      ans: 1,
      exp: 'La fórmula mágica de Hans Pacejka (y = D·sin[C·arctan(B·x - E(B·x - arctan(B·x)))]) ajusta con extraordinaria precisión las curvas no lineales de adherencia de los neumáticos bajo fuerzas combinadas.',
      skill: 'Dinámica de Neumáticos',
      topic: 'Modelos de Contacto Neumático-Calzada',
      sub: 'Fórmula Mágica de Pacejka'
    },
    {
      q: 'En el cálculo de vibraciones mecánicas de un motor alternativo, ¿por qué los motores de 4 cilindros en línea presentan fuerzas de inercia libres de segundo orden?',
      opts: ['Porque el cigüeñal es de acero forjado', 'Debido a la oblicuidad y longitud finita de la biela (relación λ = r/l), que hace que el pistón se mueva más rápido en la mitad superior de su carrera que en la inferior', 'Porque no tienen árbol de levas', 'Por el rozamiento de las pastillas de freno'],
      ans: 1,
      exp: 'La cinemática del mecanismo biela-manivela produce aceleraciones con armónicos: el primer orden (ω) se cancela por oposición de pistones 1-4 y 2-3, pero los armónicos de segundo orden (2ω) se suman en la misma dirección vertical.',
      skill: 'Cinemática y Dinámica de Motores',
      topic: 'Equilibrado de Fuerzas de Inercia',
      sub: 'Fuerzas de Segundo Orden y Ejes Contrarrotantes'
    },
    {
      q: '¿Qué magnitud cinemática mide el consumo específico de combustible al freno (BSFC - Brake Specific Fuel Consumption) expresado usualmente en g/kWh?',
      opts: ['La velocidad máxima en el banco de pruebas', 'La masa de combustible consumida dividida entre la potencia neta generada en el eje del motor por unidad de tiempo, reflejando la eficiencia termomecánica real', 'El peso en gramos del carburador', 'La presión máxima de turbo en bar'],
      ans: 1,
      exp: 'El BSFC (g/kWh) es la métrica reina del mapa de rendimiento del motor: cuanto menor sea el valor de BSFC (ej. ~190-210 g/kWh en diésel moderno), mayor es la proporción de energía química convertida en trabajo efectivo.',
      skill: 'Ensayos en Banco de Motores',
      topic: 'Eficiencia y Mapas de Motor',
      sub: 'Consumo Específico BSFC'
    },
    {
      q: '¿Qué tipo de motor eléctrico es predominante en la propulsión de vehículos eléctricos de alta gama por su máxima densidad de par y eficiencia superior al 95%?',
      opts: ['Motor universal de escobillas con colector', 'Motor síncrono de imanes permanentes interiores (IPMSM)', 'Motor paso a paso unipolar', 'Motor de inducción de jaula abierta sin variador'],
      ans: 1,
      exp: 'Los motores IPMSM integran imanes de neodimio en el rotor que combinan par magnético y par de reluctancia magnética, ofreciendo rendimiento excepcional y amplio rango de debilitamiento de campo.',
      skill: 'Sistemas de Tracción Eléctrica',
      topic: 'Motores para Vehículos Eléctricos',
      sub: 'Motor Síncrono IPMSM'
    },
    {
      q: 'En el sistema de postratamiento SCR (Selective Catalytic Reduction) para motores diésel pesados y ligeros Euro 6, ¿qué compuesto activo se inyecta y qué reacción química fundamental tiene lugar?',
      opts: ['Gasolina pura para quemar los filtros', 'Una solución acuosa de urea al 32.5% (AdBlue / DEF) que se hidroliza a amoníaco (NH3) para reducir los óxidos de nitrógeno (NOx) a nitrógeno diatómico inocuo (N2) y agua (H2O)', 'Ácido sulfúrico concentrado', 'Vapor de alcohol metílico'],
      ans: 1,
      exp: 'El AdBlue se termoliza en el escape caliente a isocianato y amoníaco: 4NO + 4NH3 + O2 → 4N2 + 6H2O, abatiendo hasta más del 95% de los NOx catalíticamente.',
      skill: 'Química de Emisiones Automotrices',
      topic: 'Sistemas SCR y AdBlue',
      sub: 'Reducción Catalítica Selectiva'
    },
    {
      q: 'En aerodinámica vehicular, ¿cómo se calcula la fuerza de resistencia aerodinámica (Drag Force, Fd) que se opone al avance del automóvil a velocidad V?',
      opts: ['Fd = m · g', 'Fd = 0.5 × ρ × Cd × A × V²', 'Fd = Cd × V / A', 'Fd = 2 × π × r × V'],
      ans: 1,
      exp: 'La resistencia al avance es cuadrática con la velocidad: Fd = 0.5 · ρ · Cd · A · V², donde ρ es la densidad del aire, Cd el coeficiente de arrastre aerodinámico y A el área frontal proyectada.',
      skill: 'Aerodinámica Vehicular',
      topic: 'Resistencia Aerodinámica',
      sub: 'Fórmula de Resistencia Aerodinámica Fd'
    },
    {
      q: '¿Qué fenómeno térmico en los frenos se produce cuando el calor acumulado en las pastillas y discos disminuye drásticamente el coeficiente de fricción (μ) a altas temperaturas?',
      opts: ['Brake Fade (Desvanecimiento o fatiga térmica del freno)', 'Aquaplaning', 'Autoignición de aceite', 'Efecto Venturi inverso'],
      ans: 0,
      exp: 'El Brake Fade ocurre cuando la temperatura sobrepasa el rango térmico de las resinas aglutinantes de la pastilla, gasificándolas y creando un colchón microscópico que anula el frenado a pesar de la presión en el pedal.',
      skill: 'Ingeniería de Frenos',
      topic: 'Tribología de Fricción',
      sub: 'Brake Fade y Desvanecimiento Térmico'
    },
    {
      q: 'En la arquitectura de baterías para vehículos eléctricos, ¿qué mecanismo de degradación irreversible ocurre en el ánodo de grafito durante la carga rápida a bajas temperaturas?',
      opts: ['Sublimación de la carcasa de aluminio', 'Litio metálico depositado sobre la superficie del electrodo (Lithium Plating) con riesgo de formación de dendritas y cortocircuito interno', 'Oxidación del etilenglicol', 'Magnetización espontánea del cobre'],
      ans: 1,
      exp: 'Bajo frío severo, la difusión de iones Li+ en el grafito es muy lenta; un flujo de corriente elevado fuerza la reducción electroquímica a litio metálico superficial, originando dendritas letales para el separador.',
      skill: 'Baterías de Tracción Eléctrica',
      topic: 'Electroquímica de Iones de Litio',
      sub: 'Lithium Plating y Formación de Dendritas'
    },
    {
      q: '¿Qué principio cinemático geométrico garantiza que en una curva todas las ruedas del vehículo rueden libremente sin deslizar transversalmente, proyectando sus ejes al mismo centro instantáneo de rotación?',
      opts: ['Principio de Pascal', 'Geometría de dirección de Ackermann', 'Efecto Doppler', 'Ley de Coulomb de rozamiento'],
      ans: 1,
      exp: 'La geometría de Ackermann dispone las palancas de dirección en ángulo convergente hacia el centro del eje trasero, logrando que la rueda interior doble un ángulo mayor que la exterior en proporción exacta.',
      skill: 'Cinemática de Dirección',
      topic: 'Geometría de Chasis',
      sub: 'Principio de Ackermann'
    },
    {
      q: 'En el modelado dinámico de suspensiones de 1/4 de vehículo (Quarter-Car Model), ¿cuál es la razón principal para mantener baja la masa no suspendida (Unsprung Mass)?',
      opts: ['Para que el vehículo flote en el agua', 'Para mejorar el seguimiento del perfil irregular de la calzada por la rueda, aumentando el agarre de los neumáticos y el confort de los pasajeros al reducir las fuerzas de inercia transmitidas al chasis', 'Para reducir el octanaje de la gasolina', 'Para hacer el escape más silencioso'],
      ans: 1,
      exp: 'Las masas no suspendidas (rueda, buje, cáliper y parte del brazo) aceleran con los baches; cuanto menores sean, menor energía inercial perturba la carrocería y más rápido el neumático recupera el contacto con el suelo.',
      skill: 'Dinámica de Suspensiones',
      topic: 'Modelo Quarter-Car',
      sub: 'Masa Suspendida vs No Suspendida'
    },
    {
      q: '¿Qué módulo o actuador en las transmisiones automáticas de doble embrague (DCT / DSG) permite cambiar de marcha en menos de 40 milisegundos sin interrumpir el flujo de par motor a las ruedas?',
      opts: ['La mecatrónica electrohidráulica que preselecciona la marcha siguiente en el eje secundario inactivo mientras desacopla progresivamente un embrague y acopla el otro en simultáneo', 'Un carburador de tiro directo', 'Un pedal de embrague accionado por el copiloto', 'Una bomba de vacío de frenos'],
      ans: 0,
      exp: 'Las cajas DCT cuentan con dos ejes primarios concéntricos (uno para marchas pares y otro para impares) gobernados por dos embragues independientes; el trasvase de par es instantáneo y sin pérdida de empuje (power-shift).',
      skill: 'Transmisiones Automatizadas',
      topic: 'Cajas de Doble Embrague DCT',
      sub: 'Módulo Mecatrónico y Shift Overlap'
    },
    {
      q: '¿Qué algoritmo de control predictivo o retroalimentado se implementa en la unidad ECU para gobernar con precisión milimétrica la posición del actuador de la válvula de geometría variable (VGT) del turbo?',
      opts: ['Control ON/OFF sin histéresis', 'Control PID (Proporcional-Integral-Derivativo) con mapas de prealimentación (feedforward)', 'Búsqueda binaria ciega', 'Regresión lineal simple estática'],
      ans: 1,
      exp: 'La posición de los álabes del turbo VGT responde a un lazo cerrado PID calibrado para alcanzar la presión objetivo de boost minimizando el tiempo de respuesta (turbo-lag) y evitando sobrepicos de contrapresión de escape.',
      skill: 'Control Automático Automotriz',
      topic: 'Algoritmos de Control en ECU',
      sub: 'Control PID en Turbocompresores VGT'
    },
    {
      q: '¿Qué tecnología de red vehicular de alta velocidad está reemplazando progresivamente al CAN Bus tradicional en las zonas de alto ancho de banda (sensores ADAS, cámaras, radares y LiDAR)?',
      opts: ['Automotive Ethernet (estándar IEEE 802.3bw / 100BASE-T1 y 1000BASE-T1 sobre un solo par trenzado)', 'Cables de antena coaxial analógica', 'Infrarrojos de corto alcance', 'Módem telefónico dial-up'],
      ans: 0,
      exp: 'Automotive Ethernet brinda anchos de banda de 100 Mbps a varios Gbps sobre par trenzado no blindado simple, esencial para el streaming masivo de visión computacional y conducción autónoma.',
      skill: 'Comunicaciones en Vehículos Autónomos',
      topic: 'Redes Zonales Automotrices',
      sub: 'Automotive Ethernet 100BASE-T1'
    },
    {
      q: 'En motores de combustión avanzados, ¿en qué consiste la combustión HCCI (Homogeneous Charge Compression Ignition)?',
      opts: ['En encender el combustible con un rayo láser externo', 'En comprimir una mezcla homogénea de aire y combustible altamente diluida hasta provocar la autoignición espontánea simultánea en todo el volumen de la cámara de combustión, sin chispa ni frente de llama tradicional', 'En usar hidrógeno líquido a -250°C exclusivamente', 'En un motor a vapor acoplado al escape'],
      ans: 1,
      exp: 'HCCI combina la mezcla homogénea limpia de un motor Otto con la alta eficiencia térmica sin estrangulamiento de un diésel; al no haber frente de llama caliente localizado, las emisiones de NOx y hollín son prácticamente nulas.',
      skill: 'Combustión Avanzada',
      topic: 'Tecnologías de Combustión Limpia',
      sub: 'Combustión Homogénea HCCI'
    },
    {
      q: '¿Qué parámetro estructural se mide en un banco de fatiga de torsión para prevenir fallas catastróficas por fatiga cíclica en el cigüeñal de un motor?',
      opts: ['El color del metal pulido', 'El límite de fatiga a torsión y flexión según el diagrama de Wöhler (curva S-N) bajo millones de ciclos de carga alternada', 'La solubilidad del acero en agua', 'La velocidad de las escobillas del limpiaparabrisas'],
      ans: 1,
      exp: 'El cigüeñal experimenta picos cíclicos de presión de gas y fuerzas de inercia; el diseño exige que los esfuerzos máximos en los radios de acuerdo queden por debajo del límite de fatiga infinito en el diagrama de Wöhler.',
      skill: 'Resistencia de Materiales Automotrices',
      topic: 'Fatiga de Componentes',
      sub: 'Curvas S-N de Wöhler en Cigüeñales'
    },
    {
      q: '¿Cómo genera el sistema de control electrónico de estabilidad (ESC / ESP) el par de guiñada correctivo cuando detecta que el vehículo está entrando en un subviraje crítico en una curva hacia la izquierda?',
      opts: ['Frenando de manera selectiva y autónoma la rueda trasera interior (izquierda)', 'Frenando selectivamente la rueda trasera interior o delantera adecuada para generar un momento de giro opuesto que devuelve el vehículo a la trayectoria deseada', 'Acelerando a fondo el motor térmico', 'Desconectando los frenos delanteros'],
      ans: 1,
      exp: 'En subviraje hacia la izquierda (el auto se va recto hacia afuera), el ESP aplica presión de frenado selectiva en la rueda trasera izquierda (interior), induciendo un momento de guiñada hacia adentro que restablece la trayectoria.',
      skill: 'Sistemas de Control de Estabilidad',
      topic: 'Dinámica de Guiñada (Yaw Rate)',
      sub: 'Frenado Asimétrico Selectivo en ESP'
    },
    {
      q: 'En el diseño de sistemas de lubricación por cárter seco (Dry Sump) utilizados en automóviles deportivos y de competición, ¿cuál es su principal ventaja dinámica?',
      opts: ['Aumentar la cantidad de humo que sale por el escape', 'Eliminar el riesgo de descebe de la bomba de aceite ante aceleraciones laterales extremas (fuerza G) y permitir bajar el centro de gravedad del motor al carecer de cárter profundo', 'Usar agua en lugar de aceite lubricante', 'Reducir el número de pistones del motor'],
      ans: 1,
      exp: 'Al evacuar el aceite mediante bombas de barrido hacia un tanque externo separado, el aceite nunca se desplaza lejos del chupón en curvas de alta G y el motor puede montarse mucho más bajo en el chasis.',
      skill: 'Ingeniería de Motores de Alto Rendimiento',
      topic: 'Sistemas de Lubricación Avanzada',
      sub: 'Cárter Seco (Dry Sump)'
    },
    {
      q: '¿Qué papel cumple el "Damper" o amortiguador de vibraciones armónicas montado en la polea delantera del cigüeñal?',
      opts: ['Sostener la batería del coche', 'Disipar mediante un elastómero calibrado o fluido viscoso las ondas de resonancia de vibración torsional inducidas por los impulsos periódicos de la combustión, evitando la rotura por fatiga del cigüeñal', 'Enfriar el radiador con aire forzado', 'Amplificar el sonido del escape'],
      ans: 1,
      exp: 'Cada explosión ejerce un par de torsión instantáneo que retuerce elásticamente el cigüeñal; el dámper absorbe la energía en las frecuencias críticas de resonancia para evitar roturas por torsión.',
      skill: 'Vibraciones y Acústica (NVH)',
      topic: 'Amortiguadores de Torsión',
      sub: 'Dámper Armónico de Cigüeñal'
    }
  ];

  uniRaw.forEach((it, i) => {
    items.push({
      id: `mec-uni-${String(i + 1).padStart(2, '0')}`,
      number: 80 + i + 1,
      text: it.q,
      options: it.opts,
      correctIndex: it.ans,
      explanation: it.exp,
      skill: it.skill,
      difficulty: 'Desafiante' as const, sectionId: 1,
      educationalLevel: 'Universitario' as const,
      topic: it.topic,
      subtopic: it.sub
    });
  });

  return items;
}

const mecQuestions = makeMecanica();
writeSubjectFile('mecanica.ts', 'QUESTIONS_MECANICA', 'Mecánica Automotriz', mecQuestions);
