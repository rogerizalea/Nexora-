# 80 Preguntas de Razonamiento Lógico y Abstracto - Nivel Técnico/Tecnológico (Reactivos 21 al 100)
# Formato: (pregunta, [opción0, opción1, opción2, opción3], c_idx, explicacion, skill, dificultad, topic, subtopic)

razonamiento_tecnico_raw = [
    # 21 a 35: Lógica digital, compuertas y mapas de Karnaugh
    ("¿Cuál es la salida de una compuerta lógica XOR (Or Exclusiva) cuando sus dos entradas son ambas a nivel lógico ALTO (1)?",
     ["0 (Nivel BAJO)", "1 (Nivel ALTO)", "Alta impedancia (Z)", "Indeterminado"], 0,
     "La compuerta XOR arroja 1 solo cuando sus entradas son distintas (0-1 o 1-0). Si ambas entradas son 1, la salida es 0.",
     "Compuertas lógicas básicas", "Intermedio", "Electrónica Digital", "Compuerta XOR"),

    ("¿Qué compuerta lógica produce una salida '0' únicamente cuando todas sus entradas están en '1'?",
     ["NAND", "NOR", "AND", "OR"], 0,
     "La compuerta NAND es la negación de AND; por ende, arroja 0 exclusivamente en la combinación donde todas las entradas son 1.",
     "Tablas de verdad digitales", "Intermedio", "Electrónica Digital", "Compuerta NAND"),

    ("En un mapa de Karnaugh de 4 variables (16 celdas), ¿cuántas variables se eliminan al agrupar un bloque de 8 unos adyacentes?",
     ["3 variables", "2 variables", "1 variable", "4 variables"], 0,
     "Cada duplicación del tamaño del grupo elimina una variable: un grupo de 2^k celdas elimina k variables; para 8 celdas (2³), se eliminan 3 variables.",
     "Mapas de Karnaugh", "Intermedio", "Diseño Lógico", "Simplificación booleana"),

    ("¿Por qué el orden de numeración de filas y columnas en los mapas de Karnaugh utiliza el Código Gray (00, 01, 11, 10)?",
     ["Para garantizar que entre dos celdas adyacentes contiguas cambie únicamente un solo bit binario a la vez", "Para ahorrar espacio gráfico en el papel", "Para facilitar la conversión a base decimal directa", "Porque no existen compuertas para el código binario natural"], 0,
     "La adyacencia lógica del código Gray permite aplicar el teorema de adyacencia booleano (A + A' = 1) para simplificar términos.",
     "Código Gray y adyacencia", "Intermedio", "Diseño Lógico", "Código Gray"),

    ("La función booleana simplificada de F = A·B + A·B' es:",
     ["A", "B", "A + B", "1"], 0,
     "Extrayendo factor común booleano: F = A·(B + B'). Como B + B' = 1, la expresión se reduce a F = A·1 = A.",
     "Álgebra de Boole", "Intermedio", "Diseño Lógico", "Postulados booleanos"),

    ("¿Qué dispositivo lógico combinacional selecciona una de varias entradas de datos y la canaliza a una única línea de salida según las líneas de control?",
     ["Multiplexor (MUX)", "Demultiplexor (DEMUX)", "Decodificador", "Encoder"], 0,
     "El multiplexor funciona como un selector o conmutador de datos gobernado por líneas de dirección de control.",
     "Circuitos combinacionales", "Intermedio", "Electrónica Digital", "Multiplexores"),

    ("¿Cuántas líneas de selección requiere un multiplexor con 16 líneas de entrada de datos?",
     ["4 líneas de selección (2⁴ = 16)", "8 líneas", "2 líneas", "16 líneas"], 0,
     "La relación entre entradas de datos N y líneas de control k es N = 2^k. Para N = 16: 16 = 2⁴ ⇒ k = 4.",
     "Arquitectura de multiplexores", "Intermedio", "Electrónica Digital", "Líneas de control"),

    ("En un flip-flop tipo D sincronizado por flanco de subida, ¿qué ocurre con la salida Q cuando llega el pulso de reloj?",
     ["Adopta exactamente el valor lógico que tenía la entrada D en el instante del flanco de subida", "Bascula al valor opuesto (toggle)", "Se pone a cero siempre", "Se desconecta del circuito"], 0,
     "El flip-flop D transfiere de forma transparente el dato presente en la entrada D hacia la salida Q en el momento exacto del flanco de reloj.",
     "Circuitos secuenciales", "Intermedio", "Electrónica Digital", "Flip-Flop D"),

    ("Si un flip-flop JK tiene sus entradas conectadas permanentemente a J = 1 y K = 1, ¿cuál es su comportamiento con cada pulso de reloj?",
     ["Modo basculamiento (Toggle): invierte su estado previo en cada pulso", "Se mantiene inalterado en su estado previo (Memory)", "Se resetea a 0", "Entra en condición de carrera no permitida"], 0,
     "La combinación J=1, K=1 es la función 'toggle' del flip-flop JK, base del diseño de contadores asíncronos y síncronos.",
     "Flip-Flop JK", "Intermedio", "Electrónica Digital", "Modo Toggle"),

    ("¿Cuántos flip-flops como mínimo se requieren para construir un contador digital síncrono binario que cuente del 0 al 15?",
     ["4 flip-flops", "16 flip-flops", "8 flip-flops", "5 flip-flops"], 0,
     "Para representar 16 estados (0 a 15) en binario se necesitan 4 bits (2⁴ = 16), lo que exige 4 flip-flops.",
     "Contadores digitales", "Intermedio", "Electrónica Digital", "Contadores binarios"),

    ("En un convertidor Analógico-Digital (ADC) de 8 bits con rango de 0 a 5 Voltios, ¿cuál es la resolución teórica de voltaje por paso (LSB)?",
     ["Aproximadamente 19.5 milivoltios (5V / 256)", "50 milivoltios", "1 milivoltio", "39 milivoltios"], 0,
     "Resolución = Vref / 2^n = 5 V / 256 ≈ 0.01953 V ≈ 19.53 mV.",
     "Conversión A/D", "Intermedio", "Electrónica Digital", "Resolución de ADC"),

    ("¿Cuál es la función lógica que implementa el circuito integrado estándar TTL 7400?",
     ["Cuatro compuertas NAND de dos entradas", "Cuatro compuertas AND", "Seis inversores NOT", "Dos contadores decimales"], 0,
     "El integrado 7400 es el circuito de referencia clásico que contiene 4 compuertas NAND cuádruples independientes.",
     "Familias lógicas TTL", "Intermedio", "Electrónica Digital", "Circuitos integrados estándar"),

    ("En la simplificación booleana, ¿cuál es el complemento de la expresión F = A·(B + C') aplicando De Morgan?",
     ["F' = A' + B'·C", "F' = A'·(B' + C)", "F' = A + B·C'", "F' = A' + B + C"], 0,
     "Aplicando el teorema del complemento: (A·(B + C'))' = A' + (B + C')' = A' + (B'·C'' ) = A' + B'·C.",
     "Leyes de De Morgan aplicadas", "Intermedio", "Diseño Lógico", "Dualidad booleana"),

    ("¿Qué define el concepto de 'Fan-Out' de una compuerta lógica digital?",
     ["El número máximo de entradas estándar que puede excitar la salida de la compuerta sin degradar sus niveles de tensión", "La velocidad máxima de disipación de calor del ventilador", "El consumo de corriente en reposo", "El retardo de propagación medido en nanosegundos"], 0,
     "El Fan-Out es la capacidad de carga de corriente de salida que garantiza mantener los márgenes de ruido en estados 0 y 1 lógicos.",
     "Parámetros eléctricos digitales", "Intermedio", "Electrónica Digital", "Fan-Out y márgenes de ruido"),

    ("Un circuito combinacional de paridad par genera una salida 1 cuando:",
     ["El número de unos en su vector de entrada es impar (para sumarle un 1 y hacer el total par)", "El número de unos es par", "No hay ningún uno", "Todas las entradas son cero"], 0,
     "El generador de paridad par añade un bit '1' si la cantidad de unos recibida es impar, forzando a que la suma total sea un número par.",
     "Generadores de paridad", "Intermedio", "Electrónica Digital", "Detección de errores"),

    # 36 a 50: Lógica Ladder (PLC), automatización y máquinas de estados
    ("En un diagrama de lógica de escalera (Ladder) para PLC, la conexión de dos contactos normalmente abiertos (NO) en paralelo representa la función lógica:",
     ["OR (O inclusivo)", "AND (Y)", "XOR", "NOT"], 0,
     "En Ladder, los contactos en serie representan la lógica AND, mientras que los contactos en ramas paralelas realizan la operación booleana OR.",
     "Programación de PLC", "Intermedio", "Automatización Industrial", "Lógica Ladder"),

    ("Para lograr el autoenclavamiento (retención o memoria) de un contactor en Ladder sin instrucciones Latch, se conecta en paralelo con el pulsador de marcha (Start):",
     ["Un contacto normalmente abierto (NO) auxiliar de la propia bobina de salida", "Un contacto normalmente cerrado del pulsador de paro", "Una resistencia de drenaje", "Un temporizador a la desconexión"], 0,
     "Al pulsar Start, la bobina se energiza y cierra su contacto auxiliar en paralelo, manteniendo la corriente tras soltar el pulsador.",
     "Circuito de autoenclavamiento", "Intermedio", "Automatización Industrial", "Control de motores"),

    ("En un PLC, ¿cómo opera un temporizador con retardo a la conexión (TON)?",
     ["Comienza a contar el tiempo cuando su entrada pasa a 1, y activa su salida únicamente después de transcurrido el tiempo prefijado (Preset)", "Activa la salida de inmediato y la apaga transcurrido el tiempo", "Cuenta el tiempo cuando la entrada pasa a 0", "Genera pulsos intermitentes constantes"], 0,
     "El temporizador TON retarda el encendido: la bobina de salida se energiza solo si la condición de entrada se mantiene activa durante todo el tiempo programado.",
     "Temporizadores industriales", "Intermedio", "Automatización Industrial", "Temporizadores TON"),

    ("En una máquina de estados finitos (FSM) de tipo Moore:",
     ["Las salidas dependen exclusivamente del estado actual en que se encuentra la máquina", "Las salidas dependen tanto del estado actual como de las entradas directas actuales", "No existen estados de memoria", "Las transiciones no dependen de pulsos de reloj"], 0,
     "En el modelo de Moore, las salidas están sincronizadas y asociadas únicamente al estado interno, a diferencia del modelo de Mealy.",
     "Máquinas de estados finitos", "Intermedio", "Automatización y Robótica", "Modelos de Moore y Mealy"),

    ("¿Qué ventaja principal presenta el Grafcet (norma IEC 60848) en la especificación de automatismos secuenciales?",
     ["Representa gráficamente etapas, transiciones lógicas y acciones asociadas de forma estructurada y sin ambigüedad", "Reduce el tamaño de los cables de cobre del tablero", "Evita la necesidad de usar fusibles de protección", "Permite prescindir de sensores mecánicos en planta"], 0,
     "El Grafcet formaliza la secuencia funcional mediante etapas activas y receptividades, facilitando la programación y el diagnóstico.",
     "Modelado GRAFCET", "Intermedio", "Automatización Industrial", "Norma IEC 60848"),

    ("En neumática industrial, ¿qué válvula implementa de manera puramente mecánica la función lógica 'AND'?",
     ["La válvula de simultaneidad (válvula de doble presión)", "La válvula selectora (válvula OR)", "La válvula de escape rápido", "La válvula estranguladora unidireccional"], 0,
     "La válvula de simultaneidad solo deja pasar aire hacia la salida de trabajo si recibe presión simultáneamente en sus dos tomas de entrada.",
     "Lógica neumática", "Intermedio", "Neumática Industrial", "Válvulas lógicas"),

    ("¿Qué componente neumático realiza físicamente la función lógica 'OR'?",
     ["La válvula selectora de circuito (válvula de vaivén o lanzadera)", "La válvula de simultaneidad", "El presostato diferencial", "El regulador de presión con escape"], 0,
     "La válvula selectora tiene una bolilla interior que cierra el puerto opuesto, permitiendo que el aire fluya a la salida desde cualquiera de las dos entradas.",
     "Lógica neumática", "Intermedio", "Neumática Industrial", "Válvula selectora"),

    ("En la designación de una válvula direccional como '5/2 biestable', ¿qué significan los números 5 y 2?",
     ["5 vías de conexión (orificios) y 2 posiciones estables de trabajo", "5 posiciones y 2 vías", "5 bares de presión máxima y 2 litros por minuto", "5 bobinas eléctricas y 2 sensores"], 0,
     "La primera cifra indica el número de puertos o vías externas y la segunda el número de estados o posiciones discretas de conmutación.",
     "Válvulas direccionales", "Intermedio", "Neumática Industrial", "Designación de válvulas"),

    ("¿Qué tipo de sensor de proximidad industrial es capaz de detectar la presencia de una pieza de aluminio sin contacto físico?",
     ["Sensor inductivo", "Sensor capacitivo únicamente", "Sensor magnético reed switch", "Sensor piezorresistivo"], 0,
     "Los sensores inductivos generan un campo electromagnético de alta frecuencia que interactúa con cualquier metal (ferroso o no ferroso como el aluminio).",
     "Sensores industriales", "Intermedio", "Automatización Industrial", "Sensores inductivos"),

    ("Para detectar el nivel de llenado de un líquido no conductor (como aceite mineral) a través de una pared plástica transparente, ¿qué sensor se recomienda?",
     ["Sensor de proximidad capacitivo", "Sensor inductivo", "Interruptor de final de carrera electromecánico", "Sensor tacométrico"], 0,
     "Los sensores capacitivos miden variaciones en la constante dieléctrica del medio, permitiendo detectar fluidos y materiales aislantes no metálicos.",
     "Sensores capacitivos", "Intermedio", "Instrumentación y Control", "Sensores capacitivos"),

    ("En un sistema de control de lazo cerrado (PID), ¿cuál es la función de la acción de control Derivativa (D)?",
     ["Anticipar el comportamiento del error midiendo su tasa de cambio para amortiguar oscilaciones bruscas", "Eliminar por completo el error en régimen permanente", "Amplificar el ruido de baja frecuencia", "Desconectar la alimentación eléctrica del actuador"], 0,
     "La acción derivativa predice el error futuro según la pendiente de la variable medida, proporcionando estabilidad y respuesta anticipativa.",
     "Control PID", "Intermedio", "Control Automático", "Acción derivativa"),

    ("¿Qué acción del controlador PID se encarga de anular el error residual o en estado estacionario (offset)?",
     ["La acción Integral (I)", "La acción Proporcional (P) pura", "La acción Derivativa (D)", "El retardo puro"], 0,
     "La integral acumula el error en el tiempo, aumentando la señal de control hasta que la desviación permanente desaparece por completo.",
     "Control Integral", "Intermedio", "Control Automático", "Acción integral"),

    ("En un motor de inducción trifásico, para invertir el sentido de giro del rotor es necesario y suficiente:",
     ["Intercambiar entre sí dos cualesquiera de las tres fases de alimentación (ej. L1 por L2)", "Invertir la polaridad del neutro", "Aumentar la frecuencia del inversor", "Cambiar el condensador de arranque"], 0,
     "Al permutar dos fases, el campo magnético giratorio del estator invierte su dirección espacial de rotación, invirtiendo el par motriz.",
     "Accionamientos eléctricos", "Intermedio", "Electrotecnia", "Inversión de giro"),

    ("En la coordinación de protecciones de un tablero industrial, ¿qué dispositivo protege a los conductores contra sobrecargas continuadas y cortocircuitos?",
     ["El interruptor termomagnético (disyuntor magnetotérmico)", "El interruptor diferencial (RCD)", "El relé de asimetría de fases", "El transformador de corriente"], 0,
     "La parte térmica (bimetal) protege contra sobrecargas lentas y la parte magnética (bobina) dispara instantáneamente ante cortocircuitos.",
     "Protecciones eléctricas", "Intermedio", "Instalaciones Eléctricas", "Interruptores termomagnéticos"),

    ("¿Qué parámetro de seguridad mide y vigila de forma continua un Interruptor Diferencial en una instalación industrial?",
     ["La corriente de fuga a tierra por defecto de aislamiento para proteger a las personas contra contactos indirectos", "El consumo total de potencia activa en kW", "La caída de tensión en los bornes de la carga", "La temperatura del cobre en las tuberías"], 0,
     "El diferencial suma vectorialmente las corrientes de entrada y retorno; si detecta una diferencia superior a su sensibilidad (ej. 30 mA), abre el circuito.",
     "Seguridad eléctrica", "Intermedio", "Instalaciones Eléctricas", "Protección diferencial"),

    # 51 a 65: Mecanismos, cinemática y transmisiones mecánicas
    ("Un engranaje conductor de 20 dientes engrana directamente con un engranaje conducido de 60 dientes. Si el conductor gira a 1800 RPM en sentido horario, ¿a qué velocidad y en qué sentido gira el conducido?",
     ["600 RPM en sentido antihorario", "5400 RPM en sentido horario", "600 RPM en sentido horario", "900 RPM en sentido antihorario"], 0,
     "Relación de transmisión i = Z1/Z2 = 20/60 = 1/3. Velocidad conducido = 1800 / 3 = 600 RPM. Al ser contacto externo directo, el sentido de giro se invierte (antihorario).",
     "Trenes de engranajes", "Intermedio", "Mecánica Técnica", "Relación de transmisión"),

    ("Si entre el engranaje conductor y el conducido del problema anterior se intercala un engranaje loco intermedio de 40 dientes, ¿qué efecto tiene sobre la relación de velocidad y el sentido de giro del conducido?",
     ["La velocidad sigue siendo 600 RPM pero ahora el sentido de giro es horario (el mismo del conductor)", "La velocidad se reduce a la mitad", "La velocidad se duplica", "El sentido de giro sigue siendo antihorario"], 0,
     "El engranaje loco solo invierte el sentido de giro (haciéndolo horario) sin alterar la relación cinemática global entre el primer y último eje.",
     "Engranajes intermedios", "Intermedio", "Mecánica Técnica", "Ruedas locas"),

    ("En un mecanismo de tornillo sin fin y corona, el tornillo tiene 1 entrada (hilo simple) y la corona tiene 40 dientes. Si el tornillo gira a 1200 RPM, ¿cuál es la velocidad de salida de la corona?",
     ["30 RPM", "40 RPM", "300 RPM", "48000 RPM"], 0,
     "Relación de reducción = entradas tornillo / dientes corona = 1 / 40. Velocidad corona = 1200 / 40 = 30 RPM.",
     "Tornillo sin fin", "Intermedio", "Mecánica Técnica", "Reductores mecánicos"),

    ("¿Qué característica mecánica fundamental distingue a una transmisión por tornillo sin fin y corona de alto ángulo?",
     ["Es autoblocante: la corona no puede mover al tornillo sin fin desde el eje de salida", "Tiene un rendimiento energético del 100%", "No requiere lubricación con aceite", "Solo funciona a baja temperatura"], 0,
     "Debido a la fricción helicoidal, la transmisión suele ser irreversible (autofrenante), lo que aporta seguridad en elevadores y grúas.",
     "Propiedad autoblocante", "Intermedio", "Mecánica Técnica", "Transmisiones irreversibles"),

    ("En un sistema de poleas polipasto factorial compuesto por 3 poleas fijas y 3 poleas móviles que elevan una carga de 600 kg, ¿qué fuerza teórica en kgf se requiere aplicar en la cuerda (despreciando fricción)?",
     ["100 kgf", "200 kgf", "300 kgf", "50 kgf"], 0,
     "Ventaja mecánica de un polipasto con n poleas móviles soportando la carga: F = Carga / (2 × n). Para n = 3 móviles: F = 600 / (2 × 3) = 600 / 6 = 100 kgf.",
     "Polipastos y poleas", "Intermedio", "Mecánica Técnica", "Ventaja mecánica"),

    ("En una palanca de primer género (punto de apoyo entre la fuerza y la resistencia), el brazo de fuerza mide 1.5 m y el brazo de resistencia mide 0.3 m. ¿Cuál es la ventaja mecánica ideal?",
     ["5", "0.2", "4.5", "1.8"], 0,
     "Ventaja mecánica ideal (VMI) = Brazo de potencia / Brazo de resistencia = 1.5 m / 0.3 m = 5.",
     "Palancas mecánicas", "Intermedio", "Mecánica de Taller", "Equilibrio de momentos"),

    ("Un micrómetro o palmer para medición exterior tiene un tambor graduado con un paso de rosca de 0.5 mm dividido en 50 partes iguales. ¿Cuál es su apreciación de lectura?",
     ["0.01 mm", "0.05 mm", "0.02 mm", "0.001 mm"], 0,
     "Apreciación = Paso de rosca / Divisiones del tambor = 0.5 mm / 50 = 0.01 mm (una centésima de milímetro).",
     "Metrología dimensional", "Intermedio", "Metrología y Taller", "Micrómetros"),

    ("En un calibrador pie de rey con nonio de 20 divisiones que abarca 19 milímetros de la regla principal, ¿cuál es la apreciación del instrumento?",
     ["0.05 mm (1/20 mm)", "0.02 mm", "0.1 mm", "0.01 mm"], 0,
     "Apreciación = 1 mm / número de divisiones del nonio = 1 / 20 = 0.05 mm.",
     "Metrología dimensional", "Intermedio", "Metrología y Taller", "Pie de rey"),

    ("¿Qué tipo de chaveta mecánica transmite el par torsional entre un eje y un cubo permitiendo desplazamiento axial continuo de la pieza?",
     ["Chaveta deslizante o estriada", "Chaveta de cuña cónica", "Chaveta Woodruff de media luna", "Pasador cónico transversal"], 0,
     "Las chavetas deslizantes o ejes ranurados transmiten rotación sin impedir que el engranaje o embrague se desplace longitudinalmente.",
     "Elementos de fijación", "Intermedio", "Mecánica de Taller", "Chavetas mecánicas"),

    ("En la preparación de juntas para soldadura SMAW en planchas de acero de 12 mm de espesor, ¿por qué es indispensable biselar los bordes en 'V'?",
     ["Para asegurar la penetración completa del electrodo hasta la raíz de la unión y evitar falta de fusión interna", "Para ahorrar material de aporte", "Para evitar que la chapa se oxide antes de soldar", "Para no usar corriente continua"], 0,
     "El bisel permite que el arco eléctrico deposite el cordón de raíz y los pases de relleno en todo el grosor del material base.",
     "Tecnología de soldadura", "Intermedio", "Metalmecánica y Soldadura", "Preparación de juntas"),

    ("En refrigeración y aire acondicionado, ¿cuál es la función del tubo capilar o válvula de expansión termostática (TXV)?",
     ["Generar una caída brusca de presión en el refrigerante líquido para permitir su evaporación a baja temperatura en el evaporador", "Aumentar la presión del gas hacia el condensador", "Filtrar la humedad del circuito frigorífico", "Separar el aceite del compresor"], 0,
     "La caída de presión isentálpica en el elemento de expansión provoca que el fluido entre en estado de mezcla bifásica fría listo para absorber calor.",
     "Sistemas frigoríficos", "Intermedio", "Climatización y Refrigeración", "Ciclo de compresión de vapor"),

    ("¿Qué instrumento se utiliza para medir el aislamiento eléctrico en devanados de motores y transformadores aplicando alta tensión continua?",
     ["Megóhmetro (Megger)", "Multímetro digital común", "Amperímetro de pinza", "Vatímetro trifásico"], 0,
     "El megóhmetro aplica tensiones de prueba de 500 V, 1000 V o más para medir resistencias de aislamiento del orden de los Megaohmios o Gigaohmios.",
     "Pruebas eléctricas", "Intermedio", "Electrotecnia", "Medición de aislamiento"),

    ("En el mecanizado por torneado cilíndrico, la velocidad de corte Vc se expresa en m/min. Si el diámetro de la pieza es D (en mm) y gira a n RPM, la fórmula de cálculo es:",
     ["Vc = (π × D × n) / 1000", "Vc = (π × D) / n", "Vc = (1000 × n) / (π × D)", "Vc = π × D × n"], 0,
     "El factor 1000 en el denominador convierte los milímetros del diámetro a metros: Vc = (π·D·n)/1000 m/min.",
     "Mecanizado por viruta", "Intermedio", "Mecánica de Taller", "Parámetros de corte"),

    ("En sistemas oleohidráulicos industriales, ¿cuál es la función de la válvula de alivio o de seguridad principal (Relief Valve)?",
     ["Limitar la presión máxima del circuito derivando el exceso de caudal al tanque cuando se supera el valor tarado", "Bloquear el retorno de aceite hacia la bomba", "Acelerar la velocidad del cilindro hidráulico", "Enfriar el fluido mediante aire forzado"], 0,
     "La válvula de alivio protege la bomba y las tuberías contra sobrepresiones destructivas abriendo una vía directa de descarga al reservorio.",
     "Oleohidráulica industrial", "Intermedio", "Oleohidráulica", "Válvulas de seguridad hidráulica"),

    ("¿Qué fenómeno perjudicial en bombas centrífugas se produce cuando la presión en la aspiración cae por debajo de la presión de vapor del líquido formando burbujas que luego colapsan violentamente?",
     ["Cavitación", "Golpe de ariete", "Descebado simple", "Emulsificación"], 0,
     "El colapso de las microburbujas de vapor erosiona y pica los álabes del impulsor, generando ruidos mecánicos y pérdida de rendimiento.",
     "Máquinas hidráulicas", "Intermedio", "Mecánica Técnica", "Cavitación en bombas"),

    # 66 a 80: Algoritmia, lógica de programación y redes de datos
    ("Analiza el siguiente fragmento de algoritmo en pseudocódigo:\ncontador = 0\nPara i = 1 Hasta 4 Hacer\n   Para j = 1 Hasta i Hacer\n      contador = contador + 1\n¿Cuál es el valor final de 'contador'?",
     ["10", "16", "8", "12"], 0,
     "El bucle interior itera 1 vez (i=1), 2 veces (i=2), 3 veces (i=3) y 4 veces (i=4). Total de incrementos: 1 + 2 + 3 + 4 = 10.",
     "Bucles anidados y trazas", "Intermedio", "Programación Estructurada", "Traza de algoritmos"),

    ("Dada la variable entera x = 15, ¿cuál es el resultado de la expresión booleana con cortocircuito: (x > 10) || (x / 0 == 1)?",
     ["Verdadero (True), sin producirse error de división entre cero", "Error de división entre cero en tiempo de ejecución", "Falso (False)", "Indeterminado"], 0,
     "En la evaluación por cortocircuito del operador OR (||), al ser el primer operando verdadero (15 > 10 es True), el compilador no evalúa el segundo término, evitando la división por cero.",
     "Evaluación de cortocircuito", "Intermedio", "Programación Estructurada", "Operadores lógicos en programación"),

    ("En una estructura de datos de tipo Pila (Stack), el principio de acceso a los elementos es:",
     ["LIFO (Last In, First Out: el último en entrar es el primero en salir)", "FIFO (First In, First Out)", "Acceso aleatorio directo", "Prioridad por orden alfabético"], 0,
     "Una pila añade y retira datos exclusivamente por un único extremo denominado cima (top), rigiéndose por el principio LIFO.",
     "Estructuras de datos básicas", "Intermedio", "Estructuras de Datos y Algoritmos", "Pilas y colas"),

    ("En una Cola (Queue) estándar, ¿en qué orden se procesan los elementos insertados?",
     ["FIFO (First In, First Out: el primero en entrar es el primero en salir)", "LIFO (Last In, First Out)", "Por tamaño de memoria", "Invertido"], 0,
     "Las colas operan como filas de atención convencionales: el elemento encolado en primer lugar es el primero en ser despachado.",
     "Estructuras de datos lineales", "Intermedio", "Estructuras de Datos y Algoritmos", "Colas FIFO"),

    ("En la representación binaria en Complemento a Dos de 8 bits, ¿qué valor decimal representa el patrón de bits 11111111?",
     ["-1", "+255", "-127", "-128"], 0,
     "En complemento a dos con bit de signo 1 en la posición más significativa, 11111111 representa el número entero negativo -1.",
     "Sistemas de numeración binaria", "Intermedio", "Sistemas Informáticos", "Complemento a dos"),

    ("¿Cuál es el número decimal correspondiente al valor hexadecimal 2F?",
     ["47", "31", "45", "52"], 0,
     "En base 16: 2F = 2 × 16¹ + 15 × 16⁰ = 32 + 15 = 47.",
     "Conversión hexadecimal-decimal", "Intermedio", "Sistemas Informáticos", "Sistemas de numeración"),

    ("En redes de computadoras IPv4 con máscara de subred 255.255.255.0 (/24), ¿cuántas direcciones IP utilizables para hosts existen en la subred?",
     ["254 direcciones utilizables", "256 direcciones", "255 direcciones", "128 direcciones"], 0,
     "La subred tiene 2⁸ = 256 direcciones en total. Se reservan la primera (dirección de red, .0) y la última (dirección de broadcast, .255): 256 - 2 = 254 hosts.",
     "Direccionamiento IPv4", "Intermedio", "Redes de Datos", "Cálculo de subredes"),

    ("¿Qué función desempeña el protocolo ARP (Address Resolution Protocol) en redes Ethernet?",
     ["Asociar una dirección lógica IP conocida con la dirección física MAC del dispositivo en la red local", "Asignar dinámicamente direcciones IP a los clientes", "Traducir nombres de dominio a números IP", "Cifrar el tráfico de paquetes TCP"], 0,
     "ARP envía tramas de difusión para averiguar qué tarjeta de red física (MAC) tiene asignada una determinada dirección IP local.",
     "Protocolos de red", "Intermedio", "Redes de Datos", "Protocolo ARP"),

    ("En el modelo OSI de 7 capas, ¿en qué capa operan los switches de red tradicionales que conmutan tramas mediante direcciones MAC?",
     ["Capa 2: Capa de Enlace de Datos", "Capa 3: Capa de Red", "Capa 1: Capa de Física", "Capa 4: Capa de Transporte"], 0,
     "Los conmutadores o switches de capa 2 analizan los encabezados Ethernet y reenvían tramas según las tablas CAM de direcciones MAC.",
     "Modelo OSI", "Intermedio", "Redes de Datos", "Capa de enlace de datos"),

    ("En el protocolo TCP/IP, ¿qué mecanismo garantiza el establecimiento formal y fiable de una conexión punto a punto antes de enviar datos?",
     ["El protocolo de saludo de tres vías (Three-Way Handshake: SYN, SYN-ACK, ACK)", "El envío de un paquete UDP broadcast", "El ping mediante eco ICMP", "La autenticación por certificado SSL"], 0,
     "El saludo de 3 pasos sincroniza los números de secuencia iniciales entre cliente y servidor antes de habilitar la transmisión de datos confiable.",
     "Protocolo TCP", "Intermedio", "Redes de Datos", "Three-Way Handshake"),

    ("¿Cuál es la función del comando 'ping' en diagnóstico de conectividad de redes?",
     ["Enviar paquetes de solicitud de eco ICMP para verificar la accesibilidad del host y medir la latencia de ida y vuelta", "Reiniciar la tarjeta de red remota", "Descargar archivos de configuración", "Mostrar los nombres de usuario conectados"], 0,
     "Ping utiliza mensajes ICMP Echo Request y Echo Reply para diagnosticar si un equipo responde en la capa IP y el tiempo que tarda el paquete.",
     "Diagnóstico de redes", "Intermedio", "Redes de Datos", "Comando ping e ICMP"),

    ("En programación lógica orientada a control, ¿qué es un bucle infinito y cómo suele originarse?",
     ["Un bucle cuya condición de parada nunca llega a evaluarse como falsa por falta de actualización de la variable de control", "Un algoritmo que se ejecuta en varios servidores a la vez", "Un programa que no contiene variables de tipo entero", "Una función que retorna dos valores simultáneamente"], 0,
     "Si la variable evaluada en el while no cambia dentro del cuerpo o la condición lógica siempre es True, el bucle nunca termina de ejecutarse.",
     "Estructuras de repetición", "Intermedio", "Programación Estructurada", "Bucles infinitos"),

    ("Al diseñar un algoritmo de búsqueda binaria sobre un arreglo de datos, ¿qué condición previa debe cumplir obligatoriamente la lista de elementos?",
     ["Los elementos deben estar estrictamente ordenados de forma ascendente o descendente", "El número de elementos debe ser una potencia de 2", "Todos los elementos deben ser números positivos", "El arreglo no puede contener elementos duplicados"], 0,
     "La búsqueda binaria descarta la mitad de las opciones en cada paso comparando con el punto medio, lo cual solo es válido si el vector está ordenado.",
     "Algoritmos de búsqueda", "Intermedio", "Estructuras de Datos y Algoritmos", "Búsqueda binaria"),

    ("¿Cuál es la complejidad temporal en el peor caso del algoritmo de búsqueda binaria sobre una lista ordenada de N elementos?",
     ["O(log N)", "O(N)", "O(N²)", "O(1)"], 0,
     "Al dividir sucesivamente el espacio de búsqueda por 2 en cada paso, el número máximo de comparaciones requeridas es proporcional a log₂ N.",
     "Complejidad algorítmica", "Intermedio", "Estructuras de Datos y Algoritmos", "Notación Big-O"),

    ("En sistemas embebidos y microcontroladores, ¿qué ventaja ofrece el uso de interrupciones de hardware (ISR) frente a la técnica de muestreo periódico continuo (Polling)?",
     ["El procesador solo atiende el periférico cuando el evento externo ocurre realmente, liberando tiempo de cálculo y reduciendo latencia", "Las interrupciones no requieren código en lenguaje C", "Elimina la memoria RAM del microcontrolador", "Hace que el reloj oscile a mayor frecuencia"], 0,
     "El sondeo o polling desperdicia ciclos de CPU consultando continuamente una bandera; las interrupciones permiten ejecución reactiva inmediata basada en hardware.",
     "Microcontroladores y embebidos", "Intermedio", "Sistemas Informáticos", "Interrupciones de hardware")
]
