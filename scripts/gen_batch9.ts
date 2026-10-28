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
// 11. INFORMÁTICA Y PROGRAMACIÓN (100 preguntas)
// =========================================================================
function makeInformatica() {
  const items: any[] = [];

  // 20 BÁSICO
  const basRaw = [
    {
      q: '¿Cuál es la función principal de la memoria RAM (Random Access Memory) en una computadora?',
      opts: ['Almacenar permanentemente los archivos y el sistema operativo', 'Almacenar temporalmente los datos e instrucciones en ejecución', 'Suministrar energía eléctrica a la placa base', 'Renderizar gráficos tridimensionales de alta calidad'],
      ans: 1,
      exp: 'La memoria RAM es un almacenamiento volátil de acceso ultra-rápido donde la CPU mantiene los programas y datos en uso mientras el equipo está encendido.',
      skill: 'Hardware y Arquitectura Básica',
      topic: 'Componentes Fundamentales',
      sub: 'Memoria Principal'
    },
    {
      q: '¿Qué componente del hardware es conocido habitualmente como el "cerebro" de la computadora?',
      opts: ['El disco duro (HDD/SSD)', 'La unidad central de procesamiento (CPU)', 'La memoria ROM', 'La fuente de poder'],
      ans: 1,
      exp: 'La CPU (procesador) ejecuta las instrucciones de los programas informáticos mediante ciclos de captación, decodificación y ejecución de operaciones lógicas y aritméticas.',
      skill: 'Hardware y CPU',
      topic: 'Arquitectura de Computadoras',
      sub: 'Procesador Central'
    },
    {
      q: '¿Cuántos bits componen exactamente un byte?',
      opts: ['4 bits', '8 bits', '16 bits', '32 bits'],
      ans: 1,
      exp: 'En informática estándar, un byte se compone de un conjunto ordenado de 8 bits (un octeto), permitiendo representar 256 combinaciones distintas (2^8).',
      skill: 'Unidades de Información',
      topic: 'Fundamentos Binarios',
      sub: 'Bits y Bytes'
    },
    {
      q: '¿Cuál de los siguientes es un ejemplo de software de sistema y no de aplicación?',
      opts: ['Microsoft Word', 'Google Chrome', 'Sistema Operativo Linux Ubuntu', 'Adobe Photoshop'],
      ans: 2,
      exp: 'Linux Ubuntu es un sistema operativo que gestiona directamente los recursos de hardware y brinda servicios esenciales a las aplicaciones del usuario.',
      skill: 'Clasificación de Software',
      topic: 'Sistemas Operativos',
      sub: 'Software de Sistema'
    },
    {
      q: '¿Cuál de los siguientes periféricos es exclusivamente de entrada de datos?',
      opts: ['Monitor LED', 'Impresora láser', 'Teclado alfanumérico', 'Altavoz estéreo'],
      ans: 2,
      exp: 'El teclado capta señales e interacciones mecánicas del usuario y las introduce al computador en forma de códigos de pulsación.',
      skill: 'Periféricos',
      topic: 'Hardware Externo',
      sub: 'Dispositivos de Entrada'
    },
    {
      q: '¿Qué tipo de dispositivo de almacenamiento secundario no tiene partes mecánicas móviles y utiliza celdas de memoria flash?',
      opts: ['Disco duro mecánico (HDD)', 'Unidad de estado sólido (SSD)', 'Cinta magnética', 'Disquete flexible'],
      ans: 1,
      exp: 'Las unidades de estado sólido (SSD) emplean chips de memoria flash tipo NAND, brindando velocidades de lectura/escritura muy superiores y mayor tolerancia a impactos mecánicos.',
      skill: 'Almacenamiento',
      topic: 'Hardware de Almacenamiento',
      sub: 'SSD vs HDD'
    },
    {
      q: '¿Qué extensión identifica tradicionalmente a los archivos ejecutables nativos en el sistema operativo Microsoft Windows?',
      opts: ['.pdf', '.exe', '.mp3', '.docx'],
      ans: 1,
      exp: 'La extensión .exe (executable) designa programas binarios ejecutables preparados para ser cargados por el subsistema Win32 de Windows.',
      skill: 'Gestión de Archivos',
      topic: 'Sistemas de Ficheros',
      sub: 'Formatos de Ejecución'
    },
    {
      q: '¿Cuál es la función del atajo de teclado global Ctrl + C en la gran mayoría de sistemas de escritorio?',
      opts: ['Cortar el elemento seleccionado', 'Copiar el elemento seleccionado al portapapeles', 'Pegar el contenido del portapapeles', 'Cerrar la aplicación activa'],
      ans: 1,
      exp: 'Ctrl + C envía una copia del elemento o texto seleccionado al búfer del portapapeles sin eliminar el original de su ubicación.',
      skill: 'Productividad y SO',
      topic: 'Operaciones Básicas',
      sub: 'Atajos de Teclado'
    },
    {
      q: '¿Qué navegador web fue desarrollado por la fundación Mozilla bajo un enfoque de código abierto y privacidad?',
      opts: ['Safari', 'Mozilla Firefox', 'Internet Explorer', 'Microsoft Edge'],
      ans: 1,
      exp: 'Mozilla Firefox es un navegador web multiplataforma y libre desarrollado por la corporación y fundación Mozilla.',
      skill: 'Herramientas de Internet',
      topic: 'Navegación Web',
      sub: 'Navegadores'
    },
    {
      q: '¿Qué significado tienen las siglas URL en el contexto de internet y redes?',
      opts: ['Universal Resource Locator', 'Uniform Resource Locator', 'Unified Radio Link', 'Unchecked Registry Line'],
      ans: 1,
      exp: 'Uniform Resource Locator (Localizador Uniforme de Recursos) es la dirección estandarizada que especifica la ubicación y protocolo de acceso a un recurso en la web.',
      skill: 'Conceptos de Redes',
      topic: 'Internet y Web',
      sub: 'Direcciones URL'
    },
    {
      q: '¿Cuál es la principal diferencia entre un archivo con compresión ZIP y su carpeta original sin comprimir?',
      opts: ['El ZIP ocupa menos espacio en disco o agrupa múltiples ficheros en uno solo', 'El ZIP elimina para siempre los datos redundantes sin poder recuperarlos', 'El ZIP solo puede contener imágenes de mapa de bits', 'El ZIP convierte automáticamente el texto en código ejecutable'],
      ans: 0,
      exp: 'El formato ZIP implementa algoritmos de compresión sin pérdida (como Deflate) que reducen el tamaño y facilitan el empaquetado y transferencia de múltiples ficheros.',
      skill: 'Gestión de Archivos',
      topic: 'Compresión de Datos',
      sub: 'Archivos ZIP'
    },
    {
      q: '¿Qué protocolo de red garantiza que la comunicación entre tu navegador web y un servidor bancario esté cifrada?',
      opts: ['HTTP sin cifrado', 'FTP plano', 'HTTPS (con TLS/SSL)', 'Telnet'],
      ans: 2,
      exp: 'HTTPS utiliza certificados de seguridad y protocolos TLS/SSL para cifrar el canal de comunicación, protegiendo credenciales y datos confidenciales contra interceptaciones.',
      skill: 'Seguridad Digital Básica',
      topic: 'Seguridad en Internet',
      sub: 'Protocolo HTTPS'
    },
    {
      q: '¿Cuál es la función principal de un programa Antivirus en un computador personal?',
      opts: ['Aumentar la memoria RAM física de la placa madre', 'Detectar, bloquear y desinfectar código malicioso (malware)', 'Crear gráficos tridimensionales para videojuegos', 'Instalar drivers de pantalla automáticamente'],
      ans: 1,
      exp: 'Un antivirus analiza firmas heurísticas y comportamientos en tiempo real para neutralizar amenazas como troyanos, gusanos, ransomware y virus informáticos.',
      skill: 'Ciberseguridad Básica',
      topic: 'Protección de Sistemas',
      sub: 'Antivirus y Malware'
    },
    {
      q: '¿Qué componente físico de la computadora se encarga de transformar la corriente alterna domiciliaria (110V/220V) en corriente continua de bajo voltaje (12V, 5V, 3.3V)?',
      opts: ['La placa base', 'La fuente de alimentación (Power Supply Unit)', 'La tarjeta gráfica dedicada', 'El disipador de calor'],
      ans: 1,
      exp: 'La fuente de alimentación (PSU) rectifica, filtra y regula la tensión alterna de la red eléctrica a tensiones continuas estables para los circuitos electrónicos.',
      skill: 'Hardware y Energía',
      topic: 'Componentes de PC',
      sub: 'Fuente de Alimentación'
    },
    {
      q: '¿Qué puerto de conexión estándar universal ha reemplazado ampliamente a puertos antiguos como serie, paralelo y PS/2?',
      opts: ['VGA', 'USB (Universal Serial Bus)', 'DVI-D', 'SCSI'],
      ans: 1,
      exp: 'El estándar USB unificó la comunicación de periféricos, ofreciendo alimentación eléctrica, sincronización plug and play y alta velocidad en sus sucesivas generaciones.',
      skill: 'Puertos e Interfaces',
      topic: 'Conectividad de Hardware',
      sub: 'Puertos USB'
    },
    {
      q: '¿Qué es una "nube" informática (Cloud Computing) para un usuario común?',
      opts: ['Un fenómeno atmosférico que interfiere con el wifi', 'Servicios de almacenamiento y procesamiento accesibles mediante internet en centros de datos remotos', 'Una memoria USB conectada a un módem casero', 'Un programa que solo funciona sin conexión'],
      ans: 1,
      exp: 'La computación en la nube ofrece servicios bajo demanda de servidores, almacenamiento, bases de datos y software a través de internet con alta disponibilidad.',
      skill: 'Servicios en Línea',
      topic: 'Computación en la Nube',
      sub: 'Concepto de Cloud'
    },
    {
      q: '¿Cuál es la función de la Papelera de Reciclaje en sistemas operativos de escritorio?',
      opts: ['Eliminar inmediatamente y de manera irreversible el disco duro', 'Almacenar temporalmente los archivos eliminados permitiendo su restauración si fue un error', 'Formatear unidades flash externas', 'Limpiar el polvo físico del ventilador'],
      ans: 1,
      exp: 'La Papelera actúa como un amortiguador de seguridad donde los archivos marcados como borrados se retienen hasta que el usuario decida vaciarla definitivamente.',
      skill: 'Uso del Sistema Operativo',
      topic: 'Manejo del Escritorio',
      sub: 'Papelera y Restauración'
    },
    {
      q: '¿Qué significa la sigla Wi-Fi comúnmente en la vida cotidiana?',
      opts: ['Tecnología inalámbrica para conectar dispositivos en una red local según los estándares IEEE 802.11', 'Un cable de fibra óptica submarino', 'El software antivirus del módem', 'Un satélite geoestacionario'],
      ans: 0,
      exp: 'Wi-Fi es la denominación comercial de la alianza que certifica productos basados en los estándares de redes inalámbricas de área local (WLAN) IEEE 802.11.',
      skill: 'Conectividad Inalámbrica',
      topic: 'Redes Locales',
      sub: 'Tecnología Wi-Fi'
    },
    {
      q: '¿Qué tipo de software es VLC Media Player?',
      opts: ['Un compilador de lenguaje C++', 'Un reproductor multimedia libre y de código abierto', 'Un sistema de gestión de bases de datos', 'Un firmware de BIOS'],
      ans: 1,
      exp: 'VLC es un reproductor multimedia multiplataforma que soporta casi cualquier formato de audio y video sin necesidad de descargar códecs adicionales.',
      skill: 'Software de Aplicación',
      topic: 'Herramientas de Usuario',
      sub: 'Reproductores Multimedia'
    },
    {
      q: '¿Por qué es fundamental reiniciar una computadora luego de instalar actualizaciones críticas de seguridad del sistema?',
      opts: ['Para que la memoria RAM se descargue físicamente', 'Para permitir que los nuevos archivos del núcleo (kernel) y controladores reemplacen a los que estaban bloqueados en memoria', 'Para cambiar automáticamente la contraseña del usuario', 'Para formatear el disco duro'],
      ans: 1,
      exp: 'Muchos archivos de bajo nivel del sistema operativo se encuentran en uso constante; reiniciar permite que el gestor de arranque reemplace los binarios antiguos con los parches actualizados.',
      skill: 'Mantenimiento Preventivo',
      topic: 'Sistemas Operativos',
      sub: 'Actualizaciones de Seguridad'
    }
  ];

  basRaw.forEach((it, i) => {
    items.push({
      id: `inf-bas-${String(i + 1).padStart(2, '0')}`,
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
      q: 'En programación, ¿qué es un bucle o ciclo "while"?',
      opts: ['Una función que siempre se ejecuta exactamente una vez', 'Una estructura de control que repite un bloque de código mientras una condición booleana sea verdadera', 'Una variable especial que almacena nombres de archivos', 'Un operador que suma dos números decimales'],
      ans: 1,
      exp: 'El bucle while evalúa una condición antes de cada iteración; si es verdadera, ejecuta el cuerpo del ciclo, deteniéndose en cuanto la condición se vuelva falsa.',
      skill: 'Estructuras de Control',
      topic: 'Lógica de Programación',
      sub: 'Bucles e Iteración'
    },
    {
      q: '¿Cuál de los siguientes lenguajes de programación se interpreta principalmente en el navegador cliente para dar dinamismo a las páginas web?',
      opts: ['C++', 'JavaScript', 'Cobol', 'Assembly x86'],
      ans: 1,
      exp: 'JavaScript es el estándar de facto implementado en todos los navegadores web modernos para manipular el DOM, manejar eventos e interactuar con APIs web.',
      skill: 'Desarrollo Web Frontend',
      topic: 'Lenguajes de Programación',
      sub: 'JavaScript y Web'
    },
    {
      q: 'En el modelo relacional de bases de datos, ¿qué es una "clave primaria" (Primary Key)?',
      opts: ['Una contraseña cifrada para que el administrador acceda a la tabla', 'Un atributo o conjunto de atributos que identifica unívocamente a cada registro en una tabla', 'Un campo que admite múltiples valores repetidos en cada fila', 'El nombre del archivo físico en el servidor'],
      ans: 1,
      exp: 'La clave primaria impone unicidad y no nulidad (UNIQUE y NOT NULL), asegurando que cada tupla de la tabla pueda ser referenciada de forma inequívoca.',
      skill: 'Bases de Datos Relacionales',
      topic: 'Modelado Relacional',
      sub: 'Clave Primaria'
    },
    {
      q: '¿Qué comando SQL se utiliza para recuperar datos de una o más tablas en una base de datos?',
      opts: ['INSERT INTO', 'DELETE FROM', 'SELECT', 'DROP TABLE'],
      ans: 2,
      exp: 'La sentencia SELECT es el operador DQL (Data Query Language) estándar para consultar y proyectar columnas y registros que cumplan ciertas condiciones.',
      skill: 'Lenguaje SQL',
      topic: 'Consultas de Bases de Datos',
      sub: 'Sentencia SELECT'
    },
    {
      q: '¿Qué estructura de datos opera bajo el principio LIFO (Last In, First Out)?',
      opts: ['Cola (Queue)', 'Pila (Stack)', 'Lista enlazada circular', 'Árbol binario de búsqueda'],
      ans: 1,
      exp: 'En una pila (Stack), el último elemento apilado (push) es el primer elemento en ser desapilado (pop), como ocurre con el historial de llamadas a funciones o la función "deshacer".',
      skill: 'Estructuras de Datos',
      topic: 'Colecciones Lineales',
      sub: 'Pilas y LIFO'
    },
    {
      q: '¿Cuál es la función del comando de red "ping" en la consola de comandos (terminal)?',
      opts: ['Descargar una copia de seguridad del disco duro', 'Comprobar la conectividad y medir la latencia enviando paquetes ICMP Echo Request a una dirección IP', 'Cifrar las contraseñas del router', 'Reiniciar el servidor web remoto'],
      ans: 1,
      exp: 'Ping utiliza el protocolo ICMP para verificar si un host remoto responde y calcular el tiempo de ida y vuelta (round-trip time en ms).',
      skill: 'Diagnóstico de Redes',
      topic: 'Herramientas de Red',
      sub: 'Comando Ping e ICMP'
    },
    {
      q: '¿Qué representa la máscara de subred 255.255.255.0 (o prefijo /24) en una red IPv4 de clase C?',
      opts: ['Que todos los bits están destinados a identificar únicamente a un dispositivo', 'Que los primeros 24 bits identifican la red y los últimos 8 bits identifican a los hosts locales', 'Que solo pueden conectarse 10 dispositivos en toda la red', 'Que la red no tiene puerta de enlace predeterminada'],
      ans: 1,
      exp: 'La máscara /24 delimita 24 bits para la dirección de red y 8 bits para hosts, lo que permite hasta 254 direcciones útiles para equipos (2^8 - 2).',
      skill: 'Direccionamiento IP',
      topic: 'Redes TCP/IP',
      sub: 'Máscaras de Subred'
    },
    {
      q: '¿Qué es una variable de tipo "booleano" (boolean) en programación?',
      opts: ['Una variable que solo puede albergar números complejos', 'Una variable que almacena únicamente uno de dos valores posibles: verdadero (true) o falso (false)', 'Una cadena de texto con caracteres especiales', 'Un puntero directo a un registro del microprocesador'],
      ans: 1,
      exp: 'El tipo primitivo booleano representa valores de verdad en lógica binaria algebraico-booleana, fundamental para la toma de decisiones con condicionales if/else.',
      skill: 'Tipos de Datos',
      topic: 'Fundamentos de Algoritmos',
      sub: 'Tipo Booleano'
    },
    {
      q: 'En programación orientada a objetos (POO), ¿qué es una "clase"?',
      opts: ['Una instancia concreta ubicada en memoria heap', 'Una plantilla o molde que define los atributos y métodos comunes a los objetos que se crearán a partir de ella', 'Una función que no devuelve ningún valor', 'Un error en tiempo de compilación'],
      ans: 1,
      exp: 'Una clase es la definición abstracta de una entidad; cuando se ejecuta la sentencia new Clase(), se crea una instancia u objeto particular con estado propio.',
      skill: 'Programación Orientada a Objetos',
      topic: 'Paradigmas de Programación',
      sub: 'Clases y Objetos'
    },
    {
      q: '¿Qué significa el término "Open Source" (Código Abierto)?',
      opts: ['Software que solo funciona cuando el computador está abierto físicamente', 'Software cuyo código fuente está disponible públicamente para que cualquiera pueda inspeccionarlo, modificarlo y redistribuirlo bajo una licencia compatible', 'Programas pirateados que carecen de licencias comerciales', 'Sistemas operativos que no tienen interfaz gráfica'],
      ans: 1,
      exp: 'El código abierto promueve la colaboración comunitaria, auditoría de seguridad y transparencia garantizada por licencias reconocidas como MIT, GPL o Apache.',
      skill: 'Filosofía y Licencias',
      topic: 'Software Libre',
      sub: 'Concepto Open Source'
    },
    {
      q: '¿Qué protocolo de la capa de transporte se caracteriza por ser no orientado a conexión y no garantizar el orden ni la entrega de paquetes?',
      opts: ['TCP', 'UDP', 'HTTP', 'SSH'],
      ans: 1,
      exp: 'UDP (User Datagram Protocol) prioriza la velocidad y la baja latencia prescindiendo del handshake y la retransmisión de paquetes perdidos, ideal para streaming de video y juegos en línea.',
      skill: 'Protocolos de Transporte',
      topic: 'Redes de Datos',
      sub: 'UDP vs TCP'
    },
    {
      q: '¿Qué es un repositorio en un sistema de control de versiones distribuido como Git?',
      opts: ['Una carpeta donde se guardan instaladores de Windows', 'Una estructura de datos que almacena el historial completo de cambios, ramas, confirmaciones (commits) y metadatos de un proyecto', 'Un servidor físico exclusivo de Microsoft', 'Un antivirus de código'],
      ans: 1,
      exp: 'El repositorio Git rastrea el árbol de cambios a lo largo del tiempo mediante grafos dirigidos acíclicos (DAG) de commits identificados por hashes SHA.',
      skill: 'Control de Versiones',
      topic: 'Herramientas de Desarrollo',
      sub: 'Repositorios Git'
    },
    {
      q: '¿Qué instrucción de Git se utiliza comúnmente para descargar cambios del repositorio remoto y fusionarlos con la rama local actual?',
      opts: ['git push', 'git pull', 'git init', 'git status'],
      ans: 1,
      exp: 'git pull ejecuta internamente un "git fetch" seguido de un "git merge" para sincronizar la rama local con las actualizaciones remotas.',
      skill: 'Control de Versiones Git',
      topic: 'Flujo de Trabajo Git',
      sub: 'git pull'
    },
    {
      q: '¿Qué tipo de ataque informático consiste en engañar al usuario haciéndose pasar por una entidad legítima (banco, correo) para robar sus credenciales?',
      opts: ['DDoS', 'Phishing', 'SQL Injection', 'Buffer Overflow'],
      ans: 1,
      exp: 'El phishing es una técnica de ingeniería social mediante correos, sitios clonados o mensajes fraudulentos orientada a capturar nombres de usuario, contraseñas y números bancarios.',
      skill: 'Seguridad Informática',
      topic: 'Amenazas y Ciberataques',
      sub: 'Ingeniería Social y Phishing'
    },
    {
      q: '¿Qué código de estado HTTP devuelve un servidor web cuando el recurso solicitado no fue encontrado?',
      opts: ['200 OK', '301 Moved Permanently', '404 Not Found', '500 Internal Server Error'],
      ans: 2,
      exp: 'El código 404 es la respuesta estándar del protocolo HTTP que indica que el cliente pudo comunicarse con el servidor, pero este no halló el documento correspondiente a la URL.',
      skill: 'Protocolo HTTP',
      topic: 'Desarrollo Web',
      sub: 'Códigos de Estado HTTP'
    },
    {
      q: 'En programación, ¿qué es la recursividad (recursión)?',
      opts: ['Un error de sintaxis que bloquea la memoria', 'Una técnica en la que una función se llama directamente o indirectamente a sí misma para resolver subproblemas más pequeños', 'Un tipo de base de datos no relacional', 'La duplicación física de discos duros'],
      ans: 1,
      exp: 'La recursividad divide un problema complejo en subproblemas idénticos más simples, requiriendo un caso base para evitar un bucle infinito (Stack Overflow).',
      skill: 'Técnicas de Programación',
      topic: 'Algoritmia Básica',
      sub: 'Funciones Recursivas'
    },
    {
      q: '¿Cuál es la función del servidor DNS (Domain Name System) en las redes informáticas?',
      opts: ['Asignar direcciones IP dinámicas a los teléfonos móviles', 'Traducir nombres de dominio legibles para humanos (ej. www.ejemplo.com) en direcciones IP numéricas que las máquinas entienden', 'Proteger contra incendios en el centro de datos', 'Comprimir imágenes para que pesen menos'],
      ans: 1,
      exp: 'El DNS actúa como la libreta telefónica de internet, resolviendo nombres de host amigables a direcciones IP enrutables (como 142.250.190.46).',
      skill: 'Servicios de Red',
      topic: 'Infraestructura de Internet',
      sub: 'Resolución DNS'
    },
    {
      q: '¿Qué paradigma de bases de datos representa MongoDB?',
      opts: ['Relacional basado en tablas y claves foráneas', 'NoSQL orientado a documentos (formato BSON/JSON)', 'Basado exclusivamente en archivos de texto plano CSV', 'Jerárquico de los años 1960'],
      ans: 1,
      exp: 'MongoDB es una base de datos NoSQL líder orientada a documentos flexibles sin esquema rígido (schemaless), organizados en colecciones con datos semiestructurados.',
      skill: 'Bases de Datos NoSQL',
      topic: 'Almacenamiento NoSQL',
      sub: 'MongoDB y Documentos'
    },
    {
      q: '¿Qué lenguaje de hojas de estilo se utiliza para definir la presentación visual, colores, tipografías y diseño responsivo de páginas web?',
      opts: ['HTML', 'CSS (Cascading Style Sheets)', 'PHP', 'Python'],
      ans: 1,
      exp: 'CSS separa el contenido semántico (HTML) de la presentación visual, controlando layouts, animaciones, media queries y diseño adaptable a múltiples pantallas.',
      skill: 'Desarrollo Web',
      topic: 'Frontend Web',
      sub: 'Hojas de Estilo CSS'
    },
    {
      q: '¿Qué es una variable de entorno en un sistema operativo o servidor?',
      opts: ['Una constante matemática como Pi', 'Un valor dinámico con nombre que el sistema y los procesos en ejecución pueden consultar para configurar su comportamiento (por ejemplo PATH o PORT)', 'Un sensor de temperatura en la CPU', 'Un virus que altera el reloj del sistema'],
      ans: 1,
      exp: 'Las variables de entorno almacenan parámetros de configuración globales o del proceso (rutas de binarios, credenciales de conexión, entornos de desarrollo o producción) sin hardcodearlos en el código.',
      skill: 'Administración de Sistemas',
      topic: 'Configuración de Entorno',
      sub: 'Variables de Entorno'
    }
  ];

  intRaw.forEach((it, i) => {
    items.push({
      id: `inf-int-${String(i + 1).padStart(2, '0')}`,
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
      q: '¿Cuál es la complejidad temporal en el peor de los casos del algoritmo de ordenamiento QuickSort tradicional?',
      opts: ['O(1)', 'O(log n)', 'O(n log n)', 'O(n²)'],
      ans: 3,
      exp: 'Aunque su caso promedio es excelente O(n log n), si el pivote elegido es sistemáticamente el menor o mayor elemento (por ejemplo en listas ya ordenadas sin pivote aleatorio), su complejidad degenera en O(n²).',
      skill: 'Análisis de Algoritmos',
      topic: 'Algoritmos de Ordenamiento',
      sub: 'Complejidad de QuickSort'
    },
    {
      q: '¿Qué estructura de datos abstracta sigue una política FIFO (First In, First Out)?',
      opts: ['Pila (Stack)', 'Cola (Queue)', 'Árbol AVL', 'Grafo no conexo'],
      ans: 1,
      exp: 'Una Cola (Queue) atiende los elementos en estricto orden de llegada: el primer elemento insertado por el extremo final es el primero en ser extraído por el frente.',
      skill: 'Estructuras de Datos',
      topic: 'Colas y Listas',
      sub: 'Colas FIFO'
    },
    {
      q: 'En programación orientada a objetos, ¿qué principio permite que una subclase proporcione una implementación específica de un método ya definido en su clase base?',
      opts: ['Encapsulamiento estricto', 'Polimorfismo (Sobrescritura de métodos)', 'Acoplamiento fuerte', 'Modularidad binaria'],
      ans: 1,
      exp: 'El polimorfismo por sobrescritura (override) permite que un mismo mensaje o llamada a método produzca comportamientos distintos según la clase concreta del objeto en tiempo de ejecución.',
      skill: 'POO Avanzada',
      topic: 'Principios de POO',
      sub: 'Polimorfismo y Sobrescritura'
    },
    {
      q: '¿Qué capa del modelo OSI es responsable del enrutamiento de paquetes lógicos entre redes diferentes mediante direcciones IP?',
      opts: ['Capa 2 - Enlace de datos', 'Capa 3 - Red', 'Capa 4 - Transporte', 'Capa 7 - Aplicación'],
      ans: 1,
      exp: 'La Capa 3 (Red) gestiona el direccionamiento lógico global, la fragmentación y la selección de la mejor ruta (enrutamiento) a través de routers intermedios.',
      skill: 'Modelo OSI y Redes',
      topic: 'Capas de Red',
      sub: 'Capa 3 de Red'
    },
    {
      q: '¿Qué mecanismo previene condiciones de carrera (race conditions) en programación concurrente multihilo?',
      opts: ['Incrementar la frecuencia de reloj del procesador', 'Utilizar primitivas de sincronización como semáforos, bloqueos mutuos (mutex) o secciones críticas', 'Desactivar el recolector de basura', 'Declarar todas las variables como globales'],
      ans: 1,
      exp: 'Los mutex y semáforos serializan el acceso concurrente a recursos compartidos en memoria, asegurando que solo un hilo a la vez ejecute la sección crítica.',
      skill: 'Sistemas Concurrentes',
      topic: 'Concurrencia y Procesos',
      sub: 'Sincronización y Mutex'
    },
    {
      q: 'En el diseño de bases de datos relacionales, ¿qué persigue la Primera Forma Normal (1NF)?',
      opts: ['Crear tablas con al menos 10 columnas obligatorias', 'Garantizar que todos los atributos contengan valores atómicos (indivisibles) y eliminar grupos repetitivos', 'Deshabilitar las restricciones de integridad referencial', 'Convertir todos los datos en texto sin formato'],
      ans: 1,
      exp: 'La 1NF exige atomicidad en los campos de cada tupla: no se permiten listas ni matrices anidadas dentro de una misma columna, cada celda debe contener un valor simple.',
      skill: 'Normalización de BD',
      topic: 'Diseño Relacional',
      sub: 'Primera Forma Normal'
    },
    {
      q: '¿Qué vulnerabilidad web ocurre cuando un servidor incluye datos no validados ni sanitizados suministrados por el usuario dentro de una consulta de base de datos?',
      opts: ['Cross-Site Scripting (XSS)', 'Inyección SQL (SQLi)', 'Cross-Site Request Forgery (CSRF)', 'Denegación de Servicio (DoS)'],
      ans: 1,
      exp: 'La inyección SQL permite a atacantes manipular la sintaxis de las consultas SQL mediante parámetros maliciosos, pudiendo sustraer, alterar o destruir toda la información de la base de datos.',
      skill: 'Seguridad en Aplicaciones Web',
      topic: 'Vulnerabilidades OWASP',
      sub: 'Inyección SQL'
    },
    {
      q: '¿Qué es una función "hash" criptográfica como SHA-256?',
      opts: ['Un algoritmo de compresión reversible de archivos de audio', 'Una función matemática unidireccional que convierte una entrada de longitud arbitraria en una cadena de longitud fija, siendo computacionalmente inviable revertirla', 'Un protocolo de intercambio de claves públicas RSA', 'Un sistema de particionamiento de discos'],
      ans: 1,
      exp: 'Las funciones hash seguras tienen efecto avalancha, resistencia a preimagen y colisiones: cualquier cambio mínimo en la entrada produce un hash completamente diferente y no reversible.',
      skill: 'Criptografía',
      topic: 'Seguridad Informática',
      sub: 'Funciones Hash Criptográficas'
    },
    {
      q: '¿Cuál es la función principal de la cláusula "GROUP BY" en una consulta SQL relacional?',
      opts: ['Ordenar alfabéticamente las filas de la tabla', 'Agrupar filas con los mismos valores en columnas especificadas para aplicarles funciones de agregación como COUNT, SUM o AVG', 'Eliminar permanentemente filas duplicadas del disco', 'Crear una clave foránea hacia otra tabla'],
      ans: 1,
      exp: 'GROUP BY colapsa registros idénticos en grupos homogéneos sobre los cuales se calculan métricas estadísticas agregadas con funciones como SUM, AVG, MIN, MAX o COUNT.',
      skill: 'Consultas SQL Complejas',
      topic: 'Bases de Datos',
      sub: 'Agrupamiento con GROUP BY'
    },
    {
      q: '¿Qué representa el término "Big O Notation" (Notación Gran O) en informática?',
      opts: ['El tamaño del monitor medido en pulgadas diagonales', 'Una representación matemática del límite asintótico superior del consumo de tiempo o espacio en memoria de un algoritmo en función del tamaño de entrada (n)', 'El número total de líneas de código fuente en un proyecto', 'La versión de un sistema operativo'],
      ans: 1,
      exp: 'La notación Big O describe el comportamiento del algoritmo a gran escala (asintótico), prescindiendo de constantes de hardware para comparar la eficiencia intrínseca de los métodos.',
      skill: 'Teoría de la Computación',
      topic: 'Complejidad Computacional',
      sub: 'Notación Asintótica Big O'
    },
    {
      q: '¿En qué consiste el patrón arquitectónico MVC (Modelo-Vista-Controlador)?',
      opts: ['En un algoritmo para comprimir videos MP4', 'En separar una aplicación en tres capas: Modelo (datos y lógica de negocio), Vista (interfaz visual del usuario) y Controlador (gestor de eventos y flujo)', 'En utilizar tres procesadores simultáneamente en un servidor', 'En un tipo de cable de red blindado'],
      ans: 1,
      exp: 'MVC desacopla la representación visual de la lógica de negocio y el control de datos, facilitando el mantenimiento, pruebas unitarias y desarrollo modular de software.',
      skill: 'Patrones de Diseño',
      topic: 'Arquitectura de Software',
      sub: 'Patrón MVC'
    },
    {
      q: '¿Qué es un "árbol binario de búsqueda" (BST)?',
      opts: ['Un archivo comprimido con dos carpetas', 'Una estructura de datos arbórea donde cada nodo tiene a lo sumo dos hijos, cumpliendo que los nodos a la izquierda son menores y los de la derecha son mayores que la raíz', 'Un algoritmo de cifrado asimétrico', 'Una red de computadoras en topología estrella'],
      ans: 1,
      exp: 'La propiedad del BST garantiza que para cualquier nodo con valor k, todos los elementos del subárbol izquierdo son menores que k y todos los del subárbol derecho son mayores o iguales, permitiendo búsquedas en O(log n) promedio.',
      skill: 'Estructuras de Datos Jerárquicas',
      topic: 'Árboles y Grafos',
      sub: 'BST (Binary Search Tree)'
    },
    {
      q: '¿Qué diferencia esencial existe entre la memoria virtual (paging/swap) y la memoria caché de la CPU?',
      opts: ['La memoria virtual reside en el disco secundario y es lenta pero amplia, mientras la caché está en el propio chip del procesador y es extraordinariamente rápida pero reducida', 'La memoria virtual es más rápida que los registros de la CPU', 'La caché solo almacena texto plano y la virtual solo imágenes', 'No existe ninguna diferencia técnica entre ambas'],
      ans: 0,
      exp: 'La caché (L1/L2/L3) utiliza memoria SRAM estática hiperrápida integrada en el silicio, mientras la memoria virtual extiende la RAM paginando bloques temporales hacia el almacenamiento secundario.',
      skill: 'Arquitectura de Computadoras',
      topic: 'Jerarquía de Memoria',
      sub: 'Caché vs Memoria Virtual'
    },
    {
      q: '¿Qué tipo de pruebas de software se encargan de verificar el correcto funcionamiento individual y aislado de una función o componente sin dependencias externas?',
      opts: ['Pruebas de estrés y carga', 'Pruebas unitarias (Unit Tests)', 'Pruebas de aceptación del cliente (UAT)', 'Pruebas de penetración de seguridad'],
      ans: 1,
      exp: 'Las pruebas unitarias validan unidades atómicas de código (métodos, funciones) aislando dependencias mediante simuladores (mocks o stubs) para certificar su lógica interna.',
      skill: 'Calidad de Software',
      topic: 'Pruebas de Software',
      sub: 'Pruebas Unitarias'
    },
    {
      q: '¿Qué comando en sistemas UNIX/Linux cambia los permisos de acceso de lectura, escritura y ejecución de un archivo?',
      opts: ['chown', 'chmod', 'kill -9', 'grep -r'],
      ans: 1,
      exp: 'chmod (change mode) modifica la máscara de bits de permisos para usuario, grupo y otros (ej. chmod 755 script.sh otorga rwxr-xr-x).',
      skill: 'Sistemas Operativos Linux',
      topic: 'Línea de Comandos',
      sub: 'Permisos con chmod'
    },
    {
      q: 'En una red de área local, ¿cuál es el propósito de una VLAN (Virtual Local Area Network)?',
      opts: ['Aumentar la velocidad de internet domiciliario', 'Segmentar lógicamente una red física en múltiples dominios de difusión independientes sin requerir cableado separado', 'Reemplazar las direcciones MAC por direcciones postales', 'Eliminar el protocolo TCP'],
      ans: 1,
      exp: 'Las VLANs (IEEE 802.1Q) aíslan el tráfico de difusión (broadcast) y refuerzan la seguridad organizacional al segmentar departamentos en redes virtuales independientes sobre los mismos switches.',
      skill: 'Redes y Conmutación',
      topic: 'Infraestructura de Conmutación',
      sub: 'VLANs y Segmentación'
    },
    {
      q: '¿Qué método de autenticación requiere al menos dos factores independientes (algo que sabes, algo que tienes, o algo que eres)?',
      opts: ['Autenticación básica de texto plano', 'Autenticación Multifactor (MFA/2FA)', 'Acceso anónimo por FTP', 'Protocolo Telnet sin contraseña'],
      ans: 1,
      exp: 'MFA exige combinar al menos dos factores distintos (ej. contraseña + token temporal generado por app en el teléfono o huella dactilar), mitigando accesos no autorizados por robo de clave.',
      skill: 'Ciberseguridad y Acceso',
      topic: 'Control de Acceso',
      sub: 'Autenticación Multifactor (MFA)'
    },
    {
      q: '¿Qué papel cumple un "compilador" frente a un "intérprete"?',
      opts: ['El compilador traduce todo el código fuente a código máquina o binario ejecutable antes de correrlo, mientras el intérprete lo analiza y ejecuta línea por línea en tiempo real', 'El compilador solo funciona en teléfonos móviles y el intérprete en servidores', 'El intérprete es un hardware físico instalado en la placa base', 'Son exactamente sinónimos sin ninguna distinción técnica'],
      ans: 0,
      exp: 'Los compiladores (como gcc para C/C++ o rustc) traducen el código globalmente generando un ejecutable optimizado, mientras los intérpretes procesan las sentencias sobre la marcha.',
      skill: 'Compiladores e Intérpretes',
      topic: 'Lenguajes y Ejecución',
      sub: 'Compilación vs Interpretación'
    },
    {
      q: 'En desarrollo frontend moderno, ¿qué es el "Virtual DOM"?',
      opts: ['Un monitor de realidad virtual para programar', 'Una representación ligera en memoria del DOM real que bibliotecas como React utilizan para calcular diferencias (diffing) y actualizar el DOM de forma eficiente', 'Una base de datos de navegadores web antiguos', 'Un chip gráfico para acelerar páginas web'],
      ans: 1,
      exp: 'El Virtual DOM calcula los cambios mínimos requeridos (reconciliation) y aplica mutaciones al árbol del navegador por lotes, optimizando el rendimiento de renderizado.',
      skill: 'Frontend y Frameworks',
      topic: 'Arquitectura Web Moderna',
      sub: 'Virtual DOM en React'
    },
    {
      q: '¿Qué mecanismo en HTTP permite a los servidores web mantener el estado de sesión de un usuario entre peticiones sucesivas?',
      opts: ['Cables de red blindados', 'Cookies de sesión y cabeceras de autorización (tokens JWT)', 'El comando ping', 'El reinicio del servidor cada minuto'],
      ans: 1,
      exp: 'Dado que HTTP es intrínsecamente un protocolo sin estado (stateless), las cookies HTTP y los tokens de sesión (como Bearer tokens) permiten identificar al cliente en cada solicitud posterior.',
      skill: 'Protocolos Web',
      topic: 'Estado en la Web',
      sub: 'Cookies y Sesiones HTTP'
    }
  ];

  bacRaw.forEach((it, i) => {
    items.push({
      id: `inf-bac-${String(i + 1).padStart(2, '0')}`,
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
      q: 'Al armar un cable de red Ethernet RJ-45 directo bajo el estándar T568B, ¿cuál es la secuencia correcta de los dos primeros pares de hilos (pines 1 y 2)?',
      opts: ['Blanco/Verde y Verde', 'Blanco/Naranja y Naranja', 'Blanco/Azul y Azul', 'Blanco/Marrón y Marrón'],
      ans: 1,
      exp: 'El estándar TIA/EIA-568B inicia en el pin 1 con Blanco/Naranja y en el pin 2 con Naranja (continuando con Blanco/Verde, Azul, Blanco/Azul, Verde, Blanco/Marrón, Marrón).',
      skill: 'Cableado Estructurado',
      topic: 'Instalaciones de Red',
      sub: 'Norma TIA/EIA-568B'
    },
    {
      q: '¿Qué herramienta de software se utiliza comúnmente para clonar imágenes de disco bit a bit y desplegar sistemas operativos en múltiples puestos de trabajo?',
      opts: ['Microsoft Paint', 'Clonezilla o Sysprep con WIMGAPI', 'Adobe Acrobat Reader', 'WinRAR'],
      ans: 1,
      exp: 'Clonezilla (o utilidades de despliegue basadas en imágenes forenses/WIM) captura bloques de partición completos para replicar imágenes idénticas en masa.',
      skill: 'Soporte y Despliegue Técnico',
      topic: 'Gestión de Sistemas',
      sub: 'Clonación de Discos'
    },
    {
      q: '¿Qué nivel de RAID combina bandas de datos (striping) con paridad distribuida y requiere un mínimo de tres discos duros físicos?',
      opts: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'],
      ans: 2,
      exp: 'RAID 5 distribuye la información y los bloques de paridad entre al menos 3 discos, tolerando la falla total de un disco físico sin pérdida de datos.',
      skill: 'Almacenamiento Empresarial',
      topic: 'Arquitectura de Almacenamiento',
      sub: 'Arreglos RAID 5'
    },
    {
      q: '¿Cuál es el valor del pitido continuo prolongado o secuencia de pitidos (BEEP CODES) al encender una placa madre durante el POST (Power-On Self-Test)?',
      opts: ['Que el sistema operativo ha terminado de cargar el escritorio', 'Un diagnóstico de bajo nivel emitido por la BIOS/UEFI señalando fallos de hardware crítico (ej. ausencia de RAM o tarjeta de video)', 'Que el monitor está calibrado en alta definición', 'Una alerta de que el disco duro está al 100% de capacidad'],
      ans: 1,
      exp: 'El firmware BIOS/UEFI ejecuta el POST antes de inicializar la pantalla; si la RAM o la GPU fallan, el zumbador (speaker) emite patrones de pitidos codificados por el fabricante para diagnóstico.',
      skill: 'Diagnóstico de Hardware',
      topic: 'Mantenimiento Preventivo y Correctivo',
      sub: 'Beep Codes de BIOS/POST'
    },
    {
      q: 'Al instalar un procesador en un socket LGA (Land Grid Array), ¿dónde residen físicamente los pines de contacto?',
      opts: ['En la parte inferior del procesador', 'Directamente en el zócalo de la placa madre (motherboard)', 'En el disipador térmico de aluminio', 'En el cable de la fuente de poder'],
      ans: 1,
      exp: 'En los encapsulados LGA (utilizados por Intel y sockets modernos de AMD como AM5), los pines flexibles están en el zócalo de la placa, mientras el procesador cuenta con almohadillas planas de contacto.',
      skill: 'Ensamble de Hardware',
      topic: 'Sockets de Microprocesadores',
      sub: 'Encapsulado LGA vs PGA'
    },
    {
      q: '¿Cuál es la función principal de la pasta térmica aplicada entre el IHS (Integrated Heat Spreader) del procesador y el bloque del disipador?',
      opts: ['Pegar de forma permanente el procesador para que nunca se desprenda', 'Rellenar las microimperfecciones microscópicas de aire entre ambas superficies para maximizar la conductividad térmica', 'Aislar eléctricamente el procesador para evitar chispas', 'Acelerar la velocidad del reloj de la GPU'],
      ans: 1,
      exp: 'El aire es un pésimo conductor térmico (~0.026 W/mK); la pasta térmica (generalmente a base de óxidos metálicos, plata o compuestos cerámicos) expulsa el aire atrapado y transfiere eficientemente el calor.',
      skill: 'Refrigeración de Sistemas',
      topic: 'Térmica de Hardware',
      sub: 'Pasta Térmica y Disipación'
    },
    {
      q: '¿Qué comando en un router o switch Cisco en modo privilegiado guarda la configuración activa en la memoria NVRAM no volátil?',
      opts: ['reload', 'copy running-config startup-config', 'erase startup-config', 'show ip interface brief'],
      ans: 1,
      exp: 'copy running-config startup-config (o write memory) persiste los cambios de la memoria volátil DRAM a la NVRAM, asegurando que sobrevivan a reinicios del equipo.',
      skill: 'Configuración de Switches y Routers',
      topic: 'Redes Cisco IOS',
      sub: 'Gestión de Configuración'
    },
    {
      q: '¿Qué servicio de red asigna automáticamente direcciones IP, máscaras de red, puertas de enlace predeterminadas y servidores DNS a clientes que se conectan?',
      opts: ['DHCP (Dynamic Host Configuration Protocol)', 'SNMP', 'NTP', 'SMTP'],
      ans: 0,
      exp: 'DHCP automatiza el proceso de direccionamiento mediante el intercambio de mensajes DORA (Discover, Offer, Request, Acknowledge).',
      skill: 'Servicios de Red',
      topic: 'Infraestructura TCP/IP',
      sub: 'Protocolo DHCP'
    },
    {
      q: '¿Qué tipo de fibra óptica se utiliza predominantemente para transmisiones de larga distancia (varios kilómetros) utilizando fuentes láser y un núcleo estrecho de aproximadamente 9 micrones?',
      opts: ['Fibra Multimodo OM1', 'Fibra Multimodo OM3', 'Fibra Monomodo (SMF)', 'Cable Coaxial RG-6'],
      ans: 2,
      exp: 'La fibra monomodo propaga un único modo de luz a lo largo del eje central, eliminando la dispersión modal y permitiendo enlaces de decenas de kilómetros sin repetidores.',
      skill: 'Telecomunicaciones y Fibra Óptica',
      topic: 'Medios de Transmisión',
      sub: 'Fibra Monomodo vs Multimodo'
    },
    {
      q: '¿Qué comando de Linux muestra el uso en tiempo real de los procesos, el consumo de memoria y la carga del procesador (load average)?',
      opts: ['ls -la', 'top (o htop)', 'cat /etc/passwd', 'mkdir /var/log'],
      ans: 1,
      exp: 'top y htop proporcionan un monitor interactivo de procesos con estadísticas actualizadas continuamente de CPU, RAM, memoria swap y estados de tareas.',
      skill: 'Administración de Servidores Linux',
      topic: 'Monitoreo de Rendimiento',
      sub: 'Comandos top y htop'
    },
    {
      q: '¿Qué puerto estándar TCP utiliza el protocolo SSH (Secure Shell) para administración remota cifrada por consola?',
      opts: ['Puerto 21', 'Puerto 22', 'Puerto 23', 'Puerto 80'],
      ans: 1,
      exp: 'SSH escucha en el puerto TCP 22 por defecto, brindando un canal seguro de administración remota cifrado que reemplazó al inseguro Telnet (puerto 23).',
      skill: 'Administración Remota',
      topic: 'Puertos y Protocolos',
      sub: 'SSH en Puerto 22'
    },
    {
      q: '¿Qué problema ocurre en un circuito digital cuando una señal de reloj llega a diferentes flip-flops con desfases temporales debido a longitudes dispares de pistas de cobre?',
      opts: ['Overclocking espontáneo', 'Clock Skew (Sesgo de reloj)', 'Submuestreo de Nyquist', 'Efecto Joule inverso'],
      ans: 1,
      exp: 'El clock skew es la diferencia en el tiempo de llegada del flanco de reloj a distintos registros lógicos, lo que puede provocar violaciones de tiempos de setup y hold en circuitos síncronos.',
      skill: 'Electrónica Digital',
      topic: 'Sistemas Síncronos',
      sub: 'Clock Skew y Jitter'
    },
    {
      q: '¿Qué tecnología de virtualización de tipo contenedor permite empaquetar una aplicación con todas sus dependencias aisladas sobre el mismo núcleo (kernel) del host?',
      opts: ['VirtualBox con emulación completa', 'Docker (contenedores Linux/OCI)', 'VMware ESXi Bare Metal', 'BIOS Shadowing'],
      ans: 1,
      exp: 'Docker utiliza namespaces y cgroups del kernel de Linux para aislar procesos sin la sobrecarga de emular sistemas operativos invitados completos ni hipervisores pesados.',
      skill: 'Virtualización y DevOps',
      topic: 'Contenedores',
      sub: 'Docker y Namespaces'
    },
    {
      q: '¿Qué sistema de archivos es el predeterminado y estándar en las distribuciones modernas de Linux para almacenamiento confiable con journaling?',
      opts: ['FAT32', 'NTFS', 'ext4', 'exFAT'],
      ans: 2,
      exp: 'ext4 (fourth extended filesystem) ofrece journaling para evitar corrupción ante caídas de corriente, soporte para volúmenes de hasta 1 exabyte y asignación tardía de bloques.',
      skill: 'Sistemas de Archivos',
      topic: 'Linux Filesystems',
      sub: 'Sistema ext4'
    },
    {
      q: '¿Qué herramienta de análisis de paquetes de red permite capturar e inspeccionar tramas de red a nivel de bits en interfaces promiscuas?',
      opts: ['Wireshark', 'Visual Studio Code', 'GIMP', 'Audacity'],
      ans: 0,
      exp: 'Wireshark es el analizador de protocolos de red libre más utilizado del mundo para auditorías, resolución de problemas de conectividad y análisis forense de tráfico.',
      skill: 'Auditoría de Redes',
      topic: 'Sniffing y Análisis',
      sub: 'Wireshark y PCAP'
    },
    {
      q: '¿Qué directiva de seguridad web en cabeceras HTTP (CORS) previene que scripts de un origen malicioso hagan peticiones no autorizadas al API de otro dominio?',
      opts: ['Content-Encoding', 'Cross-Origin Resource Sharing (Access-Control-Allow-Origin)', 'Server-Timing', 'Transfer-Encoding'],
      ans: 1,
      exp: 'CORS define políticas que los navegadores respetan para restringir cómo los recursos de un dominio web pueden ser consumidos por scripts de un origen diferente.',
      skill: 'Seguridad en Servicios Web',
      topic: 'Arquitectura de APIs',
      sub: 'Políticas CORS'
    },
    {
      q: '¿Qué componente pasivo de protección debe utilizar obligatoriamente un técnico en ensamble de PC para evitar dañar componentes sensibles por descargas electrostáticas (ESD)?',
      opts: ['Guantes de lana gruesa', 'Pulsera antiestática conectada a tierra o tapete ESD disipativo', 'Calzado con suela plástica deslizante', 'Gafas de sol polarizadas'],
      ans: 1,
      exp: 'La pulsera antiestática drena gradualmente la carga estática del cuerpo hacia una toma de tierra a través de una resistencia de 1 megaohmio, protegiendo microcircuitos CMOS contra picos de voltaje letales.',
      skill: 'Seguridad en Taller',
      topic: 'Protección ESD',
      sub: 'Pulsera Antiestática'
    },
    {
      q: '¿Qué tipo de SAI (Sistema de Alimentación Ininterrumpida / UPS) proporciona la máxima protección al regenerar constantemente la onda senoidal pura sin tiempo de conmutación mediante doble conversión?',
      opts: ['UPS Offline / Standby', 'UPS Line-Interactive', 'UPS Online de doble conversión', 'Regulador de voltaje mecánico'],
      ans: 2,
      exp: 'Los UPS Online convierten permanentemente la CA de entrada a CC y luego reconstruyen una CA perfectamente limpia con un inversor (AC-DC-AC), con tiempo de transferencia cero milisegundos.',
      skill: 'Infraestructura Eléctrica de TI',
      topic: 'Suministro y Respaldo',
      sub: 'UPS Online Doble Conversión'
    },
    {
      q: '¿Qué registro del sistema de nombres de dominio (DNS) se utiliza para especificar el servidor de correo electrónico responsable de recibir mensajes para un dominio?',
      opts: ['Registro A', 'Registro CNAME', 'Registro MX (Mail Exchanger)', 'Registro PTR'],
      ans: 2,
      exp: 'Los registros MX apuntan a los nombres de host de los agentes de transferencia de correo (MTA) autorizados para recibir correo SMTP en nombre del dominio.',
      skill: 'Servicios de Internet',
      topic: 'Registros DNS',
      sub: 'Registro MX de Correo'
    },
    {
      q: '¿Qué comando en Windows o Linux se utiliza para verificar la ruta y los saltos de enrutadores intermedios hasta alcanzar un servidor de destino?',
      opts: ['tracert (en Windows) o traceroute (en Linux)', 'netstat -an', 'ipconfig /all', 'arp -a'],
      ans: 0,
      exp: 'tracert/traceroute envía paquetes con valores crecientes de TTL (Time To Live) para provocar respuestas ICMP Time Exceeded de cada salto intermedio hasta el destino.',
      skill: 'Diagnóstico de Enrutamiento',
      topic: 'Herramientas de Red',
      sub: 'Traceroute y TTL'
    }
  ];

  tecRaw.forEach((it, i) => {
    items.push({
      id: `inf-tec-${String(i + 1).padStart(2, '0')}`,
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
      q: 'En teoría de autómatas y lenguajes formales, ¿qué clase de autómata reconoce exactamente los lenguajes libres de contexto según la jerarquía de Chomsky?',
      opts: ['Autómata finito determinista (DFA)', 'Autómata a pila (Pushdown Automaton)', 'Máquina de Turing determinista sin restricciones', 'Circuito combinacional sin memoria'],
      ans: 1,
      exp: 'Los autómatas a pila (PDA), al incorporar una estructura de memoria auxiliar tipo pila (LIFO), reconocen exactamente los lenguajes generados por gramáticas libres de contexto (Tipo 2).',
      skill: 'Teoría de la Computación',
      topic: 'Autómatas y Lenguajes Formales',
      sub: 'Autómatas a Pila'
    },
    {
      q: '¿Cuál es la propiedad fundamental del problema de parada (Halting Problem) demostrado por Alan Turing en 1936?',
      opts: ['Es un problema resoluble en tiempo polinomial O(n³)', 'Es indecidible: no existe ningún algoritmo general que pueda determinar si cualquier programa arbitrario terminará o correrá para siempre', 'Es trivialmente resoluble mediante compiladores optimizados', 'Demuestra que toda máquina de Turing puede ser emulada por un autómata finito'],
      ans: 1,
      exp: 'Turing demostró por reducción al absurdo y diagonalización que no existe ningún algoritmo que determine la parada para cualquier par (programa, entrada), marcando los límites computacionales de la lógica formal.',
      skill: 'Decidibilidad y Computabilidad',
      topic: 'Límites de la Computación',
      sub: 'El Problema de la Parada'
    },
    {
      q: 'En diseño de bases de datos relacionales, ¿qué garantiza la propiedad ACID de "Aislamiento" (Isolation)?',
      opts: ['Que las transacciones ejecutadas concurrentemente produzcan el mismo estado que si se hubiesen ejecutado secuencialmente, sin interferencias ni lecturas sucias', 'Que los datos se almacenen en discos mecánicos aislados físicamente', 'Que las transacciones nunca puedan revertirse con ROLLBACK', 'Que el servidor funcione sin conexión a la red'],
      ans: 0,
      exp: 'El aislamiento en ACID previene anomalías como lecturas sucias (dirty reads), lecturas no repetibles y lecturas fantasma a través de niveles de aislamiento (Read Committed, Serializable).',
      skill: 'Sistemas de Bases de Datos',
      topic: 'Transacciones y ACID',
      sub: 'Propiedad de Aislamiento'
    },
    {
      q: 'En diseño de sistemas distribuidos, ¿qué afirma el Teorema CAP (Teorema de Brewer)?',
      opts: ['Que todo sistema distribuido puede garantizar simultáneamente Consistencia, Disponibilidad y Tolerancia a particiones sin compromisos', 'Que en presencia de una partición de red (P), un sistema distribuido debe elegir forzosamente entre Consistencia (C) o Disponibilidad (A)', 'Que la capacidad del procesador se duplica cada 18 meses', 'Que el cifrado asimétrico es inviable en redes de alta velocidad'],
      ans: 1,
      exp: 'El teorema CAP demuestra que cuando la red sufre particiones o pérdida de mensajes (P), el sistema debe decidir entre rechazar peticiones para garantizar consistencia estricta (CP) o responder con datos potencialmente desactualizados para mantener disponibilidad (AP).',
      skill: 'Sistemas Distribuidos',
      topic: 'Consistencia y Escalabilidad',
      sub: 'Teorema CAP'
    },
    {
      q: '¿Qué estructura de datos probabilística eficiente en espacio permite comprobar si un elemento pertenece a un conjunto, garantizando cero falsos negativos aunque admitiendo una tasa configurable de falsos positivos?',
      opts: ['Filtro de Bloom (Bloom Filter)', 'Árbol Rojo-Negro', 'Tabla Hash con encadenamiento cerrado', 'Montículo Binario (Binary Heap)'],
      ans: 0,
      exp: 'El filtro de Bloom emplea un arreglo de bits y múltiples funciones hash para consultas de pertenencia en O(k) tiempo y consumo mínimo de RAM; si indica que no está, con 100% de certeza no está.',
      skill: 'Estructuras de Datos Avanzadas',
      topic: 'Algoritmos Probabilísticos',
      sub: 'Filtros de Bloom'
    },
    {
      q: '¿Qué algoritmo clásico resuelve el problema del camino más corto desde un único origen en grafos dirigidos con pesos de arista que pueden ser negativos, detectando además ciclos de peso negativo?',
      opts: ['Algoritmo de Dijkstra', 'Algoritmo de Bellman-Ford', 'Algoritmo de Prim', 'Búsqueda en Amplitud (BFS)'],
      ans: 1,
      exp: 'Bellman-Ford itera relajanado las aristas |V|-1 veces con complejidad O(|V|·|E|); una iteración adicional detecta si existe un ciclo negativo inalcanzable por Dijkstra.',
      skill: 'Algoritmia Avanzada',
      topic: 'Teoría de Grafos',
      sub: 'Algoritmo Bellman-Ford'
    },
    {
      q: '¿Cuál es el propósito del mecanismo de "Paginación en dos o múltiples niveles" y la tabla TLB (Translation Lookaside Buffer) en la gestión de memoria de un sistema operativo moderno?',
      opts: ['Aumentar el consumo de batería de la CPU', 'Traducir direcciones virtuales a físicas eficientemente sin desperdiciar megabytes de memoria física en tablas de páginas vacías', 'Formatear unidades SSD automáticamente', 'Desactivar la caché L2'],
      ans: 1,
      exp: 'Las tablas multinivel evitan asignar memoria a rangos de direcciones virtuales no utilizados, y la TLB actúa como una caché asociativa ultra-rápida de traducciones de páginas para minimizar penalizaciones en la MMU.',
      skill: 'Sistemas Operativos Avanzados',
      topic: 'Gestión de Memoria Virtual',
      sub: 'Paginación Multinivel y TLB'
    },
    {
      q: 'En compiladores, ¿cuál es la función de la fase de "Análisis Sintáctico" (Parsing)?',
      opts: ['Convertir caracteres individuales en tokens léxicos', 'Construir el Árbol de Sintaxis Abstracta (AST) verificando que la secuencia de tokens cumpla con la gramática libre de contexto del lenguaje', 'Generar directamente el código binario para la arquitectura x86', 'Optimizar el consumo térmico del procesador'],
      ans: 1,
      exp: 'El parser toma la corriente de tokens generada por el lexer y, guiado por una gramática formal (LL, LR, LALR), valida la estructura jerárquica del programa generando el AST.',
      skill: 'Construcción de Compiladores',
      topic: 'Fases del Compilador',
      sub: 'Análisis Sintáctico y AST'
    },
    {
      q: '¿Qué problema fundamental de la concurrencia ilustra el clásico "Problema de los Filósofos Comelones" (Dining Philosophers)?',
      opts: ['El cálculo de decimales de Pi', 'El bloqueo mutuo (Deadlock), inanición (Starvation) y contención de recursos en procesos concurrentes', 'La compresión sin pérdida de datos en streaming', 'La calibración de monitores RGB'],
      ans: 1,
      exp: 'Propuesto por Edsger Dijkstra, modela la asignación de recursos limitados entre procesos concurrentes y demuestra las condiciones de Coffman que originan deadlocks.',
      skill: 'Sistemas Operativos y Concurrencia',
      topic: 'Problemas Clásicos de Sincronización',
      sub: 'Deadlock e Inanición'
    },
    {
      q: 'En el criptosistema asimétrico RSA, ¿en qué problema matemático de teoría de números radica su seguridad computacional?',
      opts: ['En la dificultad de calcular el logaritmo en base 10', 'En la intratabilidad computacional de factorizar el producto de dos números primos grandes', 'En la inversión matricial de orden 3x3', 'En el cálculo de series de Taylor'],
      ans: 1,
      exp: 'RSA se basa en que multiplicar dos primos grandes p y q es trivial (O(n²)), pero recuperar p y q a partir de su producto n es computacionalmente inviable con métodos clásicos actuales.',
      skill: 'Criptografía y Seguridad',
      topic: 'Criptografía Asimétrica',
      sub: 'Factorización de Primos en RSA'
    },
    {
      q: '¿Qué clase de complejidad computacional agrupa a los problemas de decisión que pueden ser resueltos por una máquina de Turing no determinista en tiempo polinomial?',
      opts: ['Clase P', 'Clase NP', 'Clase EXPTIME', 'Clase BQP'],
      ans: 1,
      exp: 'La clase NP (Nondeterministic Polynomial time) engloba los problemas cuyas soluciones propuestas pueden ser verificadas en tiempo polinomial por una máquina determinista.',
      skill: 'Teoría de la Complejidad',
      topic: 'Clases P vs NP',
      sub: 'Definición de NP'
    },
    {
      q: '¿Qué algoritmo de consenso distribuido líder, diseñado por Diego Ongaro y John Ousterhout en Stanford, fue concebido específicamente para ser más comprensible e intuitivo que Paxos?',
      opts: ['Proof of Work (PoW)', 'Raft', 'PBFT (Practical Byzantine Fault Tolerance)', 'Two-Phase Commit (2PC)'],
      ans: 1,
      exp: 'Raft descompone el consenso distribuido en subproblemas ortogonales: elección de líder, replicación de registros (log replication) y seguridad, siendo ampliamente adoptado por etcd y Consul.',
      skill: 'Sistemas Distribuidos',
      topic: 'Consenso y Replicación',
      sub: 'Algoritmo Raft vs Paxos'
    },
    {
      q: 'En arquitectura de procesadores superescalares modernos, ¿cuál es el objetivo del "Branch Prediction" (Predicción de Saltos) y la ejecución especulativa?',
      opts: ['Evitar que la CPU consuma electricidad en reposo', 'Predecir qué bifurcación tomará una instrucción condicional para mantener lleno el pipeline de instrucciones sin esperar a la resolución en la ALU', 'Proteger al microcódigo de ataques de inyección SQL', 'Controlar el ventilador de la caja'],
      ans: 1,
      exp: 'Los pipelines profundos penalizan fuertemente los saltos vacíos; la predicción de saltos especula el flujo de control para cargar instrucciones por adelantado, descartándolas si erró.',
      skill: 'Arquitectura de Computadoras Avanzada',
      topic: 'Pipelines y Microarquitectura',
      sub: 'Ejecución Especulativa'
    },
    {
      q: '¿Qué método de aprendizaje automático no supervisado reduce la dimensionalidad de un conjunto de datos proyectándolo sobre las direcciones de máxima varianza?',
      opts: ['Regresión Logística', 'Análisis de Componentes Principales (PCA)', 'K-Nearest Neighbors (KNN)', 'Random Forest Classifier'],
      ans: 1,
      exp: 'PCA calcula los autovectores y autovalores de la matriz de covarianza de los datos, proyectando las observaciones sobre los componentes ortogonales que retienen la mayor varianza.',
      skill: 'Inteligencia Artificial y Machine Learning',
      topic: 'Reducción de Dimensionalidad',
      sub: 'PCA (Principal Component Analysis)'
    },
    {
      q: 'En motores de bases de datos relacionales como PostgreSQL o MySQL, ¿por qué los índices en disco se implementan comúnmente con árboles B+ (B+ Trees) en lugar de árboles binarios de búsqueda?',
      opts: ['Porque los árboles binarios no admiten números enteros', 'Porque los árboles B+ tienen una alta tasa de ramificación (fan-out) que minimiza drásticamente los accesos de E/S al disco y facilitan recorridos de rangos secuenciales mediante nodos hoja enlazados', 'Porque los árboles B+ solo ocupan 1 bit en disco', 'Porque los B+ Trees eliminan la necesidad de memoria RAM'],
      ans: 1,
      exp: 'Cada nodo de un B+ Tree coincide con una página de disco (4KB a 16KB), albergando cientos de claves y reduciendo la altura del árbol a 3 o 4 niveles; sus hojas enlazadas permiten escaneos de rango ultra-eficientes.',
      skill: 'Bases de Datos Internals',
      topic: 'Indexación y Almacenamiento',
      sub: 'Árboles B+ en Motores SQL'
    },
    {
      q: 'En redes neuronales profundas (Deep Learning), ¿qué problema matemático grave mitigan arquitecturas como las Redes Residuales (ResNet) con sus "Skip Connections"?',
      opts: ['El sobrecalentamiento del procesador', 'El desvanecimiento y explosión del gradiente (Vanishing / Exploding Gradient Problem) al propagar derivadas por retropropagación a través de decenas de capas', 'La escasez de memoria RAM en el servidor', 'El cálculo de matrices no invertibles'],
      ans: 1,
      exp: 'Las conexiones residuales (F(x) + x) permiten que los gradientes fluyan directamente a través de las capas iniciales sin atenuarse exponencialmente por la regla de la cadena, posibilitando entrenar redes de cientos de capas.',
      skill: 'Deep Learning',
      topic: 'Arquitecturas Neuronales',
      sub: 'ResNets y Gradiente Desvaneciente'
    },
    {
      q: '¿Cuál es la función del recolector de basura generacional (Generational Garbage Collector) en entornos de ejecución como la JVM o V8?',
      opts: ['Borrar archivos temporales de internet cada medianoche', 'Aprovechar la hipótesis de mortalidad infantil (la gran mayoría de objetos mueren poco después de su creación) para recolectar rápidamente la generación joven sin escanear todo el heap', 'Desfragmentar el disco rígido mecánicamente', 'Optimizar el compilador JIT'],
      ans: 1,
      exp: 'Divide el heap en Young Generation (Eden/Survivor) y Old Generation; las recolecciones menores (Minor GC) limpian rápidamente objetos efímeros en milisegundos con pausas casi imperceptibles.',
      skill: 'Virtual Machines y Runtimes',
      topic: 'Gestión de Memoria en Runtimes',
      sub: 'Garbage Collection Generacional'
    },
    {
      q: '¿Qué ataque a nivel de microarquitectura de procesadores explota la ejecución especulativa y las cachés de datos para filtrar información privilegiada del kernel a través de canales laterales?',
      opts: ['Spectre y Meltdown', 'Cross-Site Scripting (XSS)', 'Ataque de diccionario a claves WPA2', 'Spoofing ARP'],
      ans: 0,
      exp: 'Spectre y Meltdown rompen el aislamiento del espacio de usuario y kernel al inducir al procesador a ejecutar ramas especulativas que alteran el estado de la caché L1, recuperando datos sensibles midiendo tiempos de acceso.',
      skill: 'Seguridad en Hardware',
      topic: 'Vulnerabilidades de Microarquitectura',
      sub: 'Spectre y Meltdown'
    },
    {
      q: 'En cálculo lambda no tipado (Untyped Lambda Calculus), ¿qué combinador de punto fijo permite implementar funciones recursivas sin requerir que la función tenga un nombre en el entorno?',
      opts: ['Combinador Y (Y Combinator de Haskell Curry)', 'Combinador I de identidad', 'Combinador K constante', 'Combinador S de sustitución'],
      ans: 0,
      exp: 'El combinador Y definido como λf.(λx.f (x x)) (λx.f (x x)) satisface Y g = g (Y g), permitiendo definir funciones recursivas anónimas en sistemas puramente funcionales.',
      skill: 'Teoría de Lenguajes de Programación',
      topic: 'Cálculo Lambda',
      sub: 'El Combinador Y'
    },
    {
      q: '¿Qué algoritmo distribuido de exclusión mutua utiliza marcas de tiempo lógicas de Lamport para asegurar que las peticiones a secciones críticas se concedan en estricto orden causal sin bloqueos?',
      opts: ['Algoritmo de Ricart-Agrawala', 'Algoritmo de Floyd-Warshall', 'Algoritmo de Huffman', 'Algoritmo de Knuth-Morris-Pratt'],
      ans: 0,
      exp: 'Ricart-Agrawala optimiza el algoritmo de Lamport reduciendo los mensajes requeridos a 2(N-1) por entrada a la sección crítica mediante solicitudes con timestamps ordenados totalmente.',
      skill: 'Sistemas Distribuidos Avanzados',
      topic: 'Exclusión Mutua Distribuida',
      sub: 'Algoritmo Ricart-Agrawala'
    }
  ];

  uniRaw.forEach((it, i) => {
    items.push({
      id: `inf-uni-${String(i + 1).padStart(2, '0')}`,
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

const infQuestions = makeInformatica();
writeSubjectFile('informatica.ts', 'QUESTIONS_INFORMATICA', 'Informática y Programación', infQuestions);
