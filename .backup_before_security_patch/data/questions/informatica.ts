import { Question } from '../../types';

/**
 * BANCO OFICIAL DE PREGUNTAS: INFORMÁTICA Y PROGRAMACIÓN
 * 100 Reactivos Verificados Pedagógicamente:
 * - 20 Básico
 * - 20 Intermedio
 * - 20 Bachillerato
 * - 20 Técnico
 * - 20 Universitario
 */
export const QUESTIONS_INFORMATICA: Question[] = [
  {
    "id": "inf-bas-01",
    "number": 1,
    "text": "¿Cuál es la función principal de la memoria RAM (Random Access Memory) en una computadora?",
    "options": [
      "Almacenar permanentemente los archivos y el sistema operativo",
      "Almacenar temporalmente los datos e instrucciones en ejecución",
      "Suministrar energía eléctrica a la placa base",
      "Renderizar gráficos tridimensionales de alta calidad"
    ],
    "correctIndex": 1,
    "explanation": "La memoria RAM es un almacenamiento volátil de acceso ultra-rápido donde la CPU mantiene los programas y datos en uso mientras el equipo está encendido.",
    "skill": "Hardware y Arquitectura Básica",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Componentes Fundamentales",
    "subtopic": "Memoria Principal"
  },
  {
    "id": "inf-bas-02",
    "number": 2,
    "text": "¿Qué componente del hardware es conocido habitualmente como el \"cerebro\" de la computadora?",
    "options": [
      "El disco duro (HDD/SSD)",
      "La unidad central de procesamiento (CPU)",
      "La memoria ROM",
      "La fuente de poder"
    ],
    "correctIndex": 1,
    "explanation": "La CPU (procesador) ejecuta las instrucciones de los programas informáticos mediante ciclos de captación, decodificación y ejecución de operaciones lógicas y aritméticas.",
    "skill": "Hardware y CPU",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Arquitectura de Computadoras",
    "subtopic": "Procesador Central"
  },
  {
    "id": "inf-bas-03",
    "number": 3,
    "text": "¿Cuántos bits componen exactamente un byte?",
    "options": [
      "4 bits",
      "8 bits",
      "16 bits",
      "32 bits"
    ],
    "correctIndex": 1,
    "explanation": "En informática estándar, un byte se compone de un conjunto ordenado de 8 bits (un octeto), permitiendo representar 256 combinaciones distintas (2^8).",
    "skill": "Unidades de Información",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Fundamentos Binarios",
    "subtopic": "Bits y Bytes"
  },
  {
    "id": "inf-bas-04",
    "number": 4,
    "text": "¿Cuál de los siguientes es un ejemplo de software de sistema y no de aplicación?",
    "options": [
      "Microsoft Word",
      "Google Chrome",
      "Sistema Operativo Linux Ubuntu",
      "Adobe Photoshop"
    ],
    "correctIndex": 2,
    "explanation": "Linux Ubuntu es un sistema operativo que gestiona directamente los recursos de hardware y brinda servicios esenciales a las aplicaciones del usuario.",
    "skill": "Clasificación de Software",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Sistemas Operativos",
    "subtopic": "Software de Sistema"
  },
  {
    "id": "inf-bas-05",
    "number": 5,
    "text": "¿Cuál de los siguientes periféricos es exclusivamente de entrada de datos?",
    "options": [
      "Monitor LED",
      "Impresora láser",
      "Teclado alfanumérico",
      "Altavoz estéreo"
    ],
    "correctIndex": 2,
    "explanation": "El teclado capta señales e interacciones mecánicas del usuario y las introduce al computador en forma de códigos de pulsación.",
    "skill": "Periféricos",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Hardware Externo",
    "subtopic": "Dispositivos de Entrada"
  },
  {
    "id": "inf-bas-06",
    "number": 6,
    "text": "¿Qué tipo de dispositivo de almacenamiento secundario no tiene partes mecánicas móviles y utiliza celdas de memoria flash?",
    "options": [
      "Disco duro mecánico (HDD)",
      "Unidad de estado sólido (SSD)",
      "Cinta magnética",
      "Disquete flexible"
    ],
    "correctIndex": 1,
    "explanation": "Las unidades de estado sólido (SSD) emplean chips de memoria flash tipo NAND, brindando velocidades de lectura/escritura muy superiores y mayor tolerancia a impactos mecánicos.",
    "skill": "Almacenamiento",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Hardware de Almacenamiento",
    "subtopic": "SSD vs HDD"
  },
  {
    "id": "inf-bas-07",
    "number": 7,
    "text": "¿Qué extensión identifica tradicionalmente a los archivos ejecutables nativos en el sistema operativo Microsoft Windows?",
    "options": [
      ".pdf",
      ".exe",
      ".mp3",
      ".docx"
    ],
    "correctIndex": 1,
    "explanation": "La extensión .exe (executable) designa programas binarios ejecutables preparados para ser cargados por el subsistema Win32 de Windows.",
    "skill": "Gestión de Archivos",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Sistemas de Ficheros",
    "subtopic": "Formatos de Ejecución"
  },
  {
    "id": "inf-bas-08",
    "number": 8,
    "text": "¿Cuál es la función del atajo de teclado global Ctrl + C en la gran mayoría de sistemas de escritorio?",
    "options": [
      "Cortar el elemento seleccionado",
      "Copiar el elemento seleccionado al portapapeles",
      "Pegar el contenido del portapapeles",
      "Cerrar la aplicación activa"
    ],
    "correctIndex": 1,
    "explanation": "Ctrl + C envía una copia del elemento o texto seleccionado al búfer del portapapeles sin eliminar el original de su ubicación.",
    "skill": "Productividad y SO",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Operaciones Básicas",
    "subtopic": "Atajos de Teclado"
  },
  {
    "id": "inf-bas-09",
    "number": 9,
    "text": "¿Qué navegador web fue desarrollado por la fundación Mozilla bajo un enfoque de código abierto y privacidad?",
    "options": [
      "Safari",
      "Mozilla Firefox",
      "Internet Explorer",
      "Microsoft Edge"
    ],
    "correctIndex": 1,
    "explanation": "Mozilla Firefox es un navegador web multiplataforma y libre desarrollado por la corporación y fundación Mozilla.",
    "skill": "Herramientas de Internet",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Navegación Web",
    "subtopic": "Navegadores"
  },
  {
    "id": "inf-bas-10",
    "number": 10,
    "text": "¿Qué significado tienen las siglas URL en el contexto de internet y redes?",
    "options": [
      "Universal Resource Locator",
      "Uniform Resource Locator",
      "Unified Radio Link",
      "Unchecked Registry Line"
    ],
    "correctIndex": 1,
    "explanation": "Uniform Resource Locator (Localizador Uniforme de Recursos) es la dirección estandarizada que especifica la ubicación y protocolo de acceso a un recurso en la web.",
    "skill": "Conceptos de Redes",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Internet y Web",
    "subtopic": "Direcciones URL"
  },
  {
    "id": "inf-bas-11",
    "number": 11,
    "text": "¿Cuál es la principal diferencia entre un archivo con compresión ZIP y su carpeta original sin comprimir?",
    "options": [
      "El ZIP ocupa menos espacio en disco o agrupa múltiples ficheros en uno solo",
      "El ZIP elimina para siempre los datos redundantes sin poder recuperarlos",
      "El ZIP solo puede contener imágenes de mapa de bits",
      "El ZIP convierte automáticamente el texto en código ejecutable"
    ],
    "correctIndex": 0,
    "explanation": "El formato ZIP implementa algoritmos de compresión sin pérdida (como Deflate) que reducen el tamaño y facilitan el empaquetado y transferencia de múltiples ficheros.",
    "skill": "Gestión de Archivos",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Compresión de Datos",
    "subtopic": "Archivos ZIP"
  },
  {
    "id": "inf-bas-12",
    "number": 12,
    "text": "¿Qué protocolo de red garantiza que la comunicación entre tu navegador web y un servidor bancario esté cifrada?",
    "options": [
      "HTTP sin cifrado",
      "FTP plano",
      "HTTPS (con TLS/SSL)",
      "Telnet"
    ],
    "correctIndex": 2,
    "explanation": "HTTPS utiliza certificados de seguridad y protocolos TLS/SSL para cifrar el canal de comunicación, protegiendo credenciales y datos confidenciales contra interceptaciones.",
    "skill": "Seguridad Digital Básica",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Seguridad en Internet",
    "subtopic": "Protocolo HTTPS"
  },
  {
    "id": "inf-bas-13",
    "number": 13,
    "text": "¿Cuál es la función principal de un programa Antivirus en un computador personal?",
    "options": [
      "Aumentar la memoria RAM física de la placa madre",
      "Detectar, bloquear y desinfectar código malicioso (malware)",
      "Crear gráficos tridimensionales para videojuegos",
      "Instalar drivers de pantalla automáticamente"
    ],
    "correctIndex": 1,
    "explanation": "Un antivirus analiza firmas heurísticas y comportamientos en tiempo real para neutralizar amenazas como troyanos, gusanos, ransomware y virus informáticos.",
    "skill": "Ciberseguridad Básica",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Protección de Sistemas",
    "subtopic": "Antivirus y Malware"
  },
  {
    "id": "inf-bas-14",
    "number": 14,
    "text": "¿Qué componente físico de la computadora se encarga de transformar la corriente alterna domiciliaria (110V/220V) en corriente continua de bajo voltaje (12V, 5V, 3.3V)?",
    "options": [
      "La placa base",
      "La fuente de alimentación (Power Supply Unit)",
      "La tarjeta gráfica dedicada",
      "El disipador de calor"
    ],
    "correctIndex": 1,
    "explanation": "La fuente de alimentación (PSU) rectifica, filtra y regula la tensión alterna de la red eléctrica a tensiones continuas estables para los circuitos electrónicos.",
    "skill": "Hardware y Energía",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Componentes de PC",
    "subtopic": "Fuente de Alimentación"
  },
  {
    "id": "inf-bas-15",
    "number": 15,
    "text": "¿Qué puerto de conexión estándar universal ha reemplazado ampliamente a puertos antiguos como serie, paralelo y PS/2?",
    "options": [
      "VGA",
      "USB (Universal Serial Bus)",
      "DVI-D",
      "SCSI"
    ],
    "correctIndex": 1,
    "explanation": "El estándar USB unificó la comunicación de periféricos, ofreciendo alimentación eléctrica, sincronización plug and play y alta velocidad en sus sucesivas generaciones.",
    "skill": "Puertos e Interfaces",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Conectividad de Hardware",
    "subtopic": "Puertos USB"
  },
  {
    "id": "inf-bas-16",
    "number": 16,
    "text": "¿Qué es una \"nube\" informática (Cloud Computing) para un usuario común?",
    "options": [
      "Un fenómeno atmosférico que interfiere con el wifi",
      "Servicios de almacenamiento y procesamiento accesibles mediante internet en centros de datos remotos",
      "Una memoria USB conectada a un módem casero",
      "Un programa que solo funciona sin conexión"
    ],
    "correctIndex": 1,
    "explanation": "La computación en la nube ofrece servicios bajo demanda de servidores, almacenamiento, bases de datos y software a través de internet con alta disponibilidad.",
    "skill": "Servicios en Línea",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Computación en la Nube",
    "subtopic": "Concepto de Cloud"
  },
  {
    "id": "inf-bas-17",
    "number": 17,
    "text": "¿Cuál es la función de la Papelera de Reciclaje en sistemas operativos de escritorio?",
    "options": [
      "Eliminar inmediatamente y de manera irreversible el disco duro",
      "Almacenar temporalmente los archivos eliminados permitiendo su restauración si fue un error",
      "Formatear unidades flash externas",
      "Limpiar el polvo físico del ventilador"
    ],
    "correctIndex": 1,
    "explanation": "La Papelera actúa como un amortiguador de seguridad donde los archivos marcados como borrados se retienen hasta que el usuario decida vaciarla definitivamente.",
    "skill": "Uso del Sistema Operativo",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Manejo del Escritorio",
    "subtopic": "Papelera y Restauración"
  },
  {
    "id": "inf-bas-18",
    "number": 18,
    "text": "¿Qué significa la sigla Wi-Fi comúnmente en la vida cotidiana?",
    "options": [
      "Tecnología inalámbrica para conectar dispositivos en una red local según los estándares IEEE 802.11",
      "Un cable de fibra óptica submarino",
      "El software antivirus del módem",
      "Un satélite geoestacionario"
    ],
    "correctIndex": 0,
    "explanation": "Wi-Fi es la denominación comercial de la alianza que certifica productos basados en los estándares de redes inalámbricas de área local (WLAN) IEEE 802.11.",
    "skill": "Conectividad Inalámbrica",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Redes Locales",
    "subtopic": "Tecnología Wi-Fi"
  },
  {
    "id": "inf-bas-19",
    "number": 19,
    "text": "¿Qué tipo de software es VLC Media Player?",
    "options": [
      "Un compilador de lenguaje C++",
      "Un reproductor multimedia libre y de código abierto",
      "Un sistema de gestión de bases de datos",
      "Un firmware de BIOS"
    ],
    "correctIndex": 1,
    "explanation": "VLC es un reproductor multimedia multiplataforma que soporta casi cualquier formato de audio y video sin necesidad de descargar códecs adicionales.",
    "skill": "Software de Aplicación",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Herramientas de Usuario",
    "subtopic": "Reproductores Multimedia"
  },
  {
    "id": "inf-bas-20",
    "number": 20,
    "text": "¿Por qué es fundamental reiniciar una computadora luego de instalar actualizaciones críticas de seguridad del sistema?",
    "options": [
      "Para que la memoria RAM se descargue físicamente",
      "Para permitir que los nuevos archivos del núcleo (kernel) y controladores reemplacen a los que estaban bloqueados en memoria",
      "Para cambiar automáticamente la contraseña del usuario",
      "Para formatear el disco duro"
    ],
    "correctIndex": 1,
    "explanation": "Muchos archivos de bajo nivel del sistema operativo se encuentran en uso constante; reiniciar permite que el gestor de arranque reemplace los binarios antiguos con los parches actualizados.",
    "skill": "Mantenimiento Preventivo",
    "difficulty": "Fácil",
    "sectionId": 1,
    "educationalLevel": "Básico",
    "topic": "Sistemas Operativos",
    "subtopic": "Actualizaciones de Seguridad"
  },
  {
    "id": "inf-int-01",
    "number": 21,
    "text": "En programación, ¿qué es un bucle o ciclo \"while\"?",
    "options": [
      "Una función que siempre se ejecuta exactamente una vez",
      "Una estructura de control que repite un bloque de código mientras una condición booleana sea verdadera",
      "Una variable especial que almacena nombres de archivos",
      "Un operador que suma dos números decimales"
    ],
    "correctIndex": 1,
    "explanation": "El bucle while evalúa una condición antes de cada iteración; si es verdadera, ejecuta el cuerpo del ciclo, deteniéndose en cuanto la condición se vuelva falsa.",
    "skill": "Estructuras de Control",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Lógica de Programación",
    "subtopic": "Bucles e Iteración"
  },
  {
    "id": "inf-int-02",
    "number": 22,
    "text": "¿Cuál de los siguientes lenguajes de programación se interpreta principalmente en el navegador cliente para dar dinamismo a las páginas web?",
    "options": [
      "C++",
      "JavaScript",
      "Cobol",
      "Assembly x86"
    ],
    "correctIndex": 1,
    "explanation": "JavaScript es el estándar de facto implementado en todos los navegadores web modernos para manipular el DOM, manejar eventos e interactuar con APIs web.",
    "skill": "Desarrollo Web Frontend",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Lenguajes de Programación",
    "subtopic": "JavaScript y Web"
  },
  {
    "id": "inf-int-03",
    "number": 23,
    "text": "En el modelo relacional de bases de datos, ¿qué es una \"clave primaria\" (Primary Key)?",
    "options": [
      "Una contraseña cifrada para que el administrador acceda a la tabla",
      "Un atributo o conjunto de atributos que identifica unívocamente a cada registro en una tabla",
      "Un campo que admite múltiples valores repetidos en cada fila",
      "El nombre del archivo físico en el servidor"
    ],
    "correctIndex": 1,
    "explanation": "La clave primaria impone unicidad y no nulidad (UNIQUE y NOT NULL), asegurando que cada tupla de la tabla pueda ser referenciada de forma inequívoca.",
    "skill": "Bases de Datos Relacionales",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Modelado Relacional",
    "subtopic": "Clave Primaria"
  },
  {
    "id": "inf-int-04",
    "number": 24,
    "text": "¿Qué comando SQL se utiliza para recuperar datos de una o más tablas en una base de datos?",
    "options": [
      "INSERT INTO",
      "DELETE FROM",
      "SELECT",
      "DROP TABLE"
    ],
    "correctIndex": 2,
    "explanation": "La sentencia SELECT es el operador DQL (Data Query Language) estándar para consultar y proyectar columnas y registros que cumplan ciertas condiciones.",
    "skill": "Lenguaje SQL",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Consultas de Bases de Datos",
    "subtopic": "Sentencia SELECT"
  },
  {
    "id": "inf-int-05",
    "number": 25,
    "text": "¿Qué estructura de datos opera bajo el principio LIFO (Last In, First Out)?",
    "options": [
      "Cola (Queue)",
      "Pila (Stack)",
      "Lista enlazada circular",
      "Árbol binario de búsqueda"
    ],
    "correctIndex": 1,
    "explanation": "En una pila (Stack), el último elemento apilado (push) es el primer elemento en ser desapilado (pop), como ocurre con el historial de llamadas a funciones o la función \"deshacer\".",
    "skill": "Estructuras de Datos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Colecciones Lineales",
    "subtopic": "Pilas y LIFO"
  },
  {
    "id": "inf-int-06",
    "number": 26,
    "text": "¿Cuál es la función del comando de red \"ping\" en la consola de comandos (terminal)?",
    "options": [
      "Descargar una copia de seguridad del disco duro",
      "Comprobar la conectividad y medir la latencia enviando paquetes ICMP Echo Request a una dirección IP",
      "Cifrar las contraseñas del router",
      "Reiniciar el servidor web remoto"
    ],
    "correctIndex": 1,
    "explanation": "Ping utiliza el protocolo ICMP para verificar si un host remoto responde y calcular el tiempo de ida y vuelta (round-trip time en ms).",
    "skill": "Diagnóstico de Redes",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Herramientas de Red",
    "subtopic": "Comando Ping e ICMP"
  },
  {
    "id": "inf-int-07",
    "number": 27,
    "text": "¿Qué representa la máscara de subred 255.255.255.0 (o prefijo /24) en una red IPv4 de clase C?",
    "options": [
      "Que todos los bits están destinados a identificar únicamente a un dispositivo",
      "Que los primeros 24 bits identifican la red y los últimos 8 bits identifican a los hosts locales",
      "Que solo pueden conectarse 10 dispositivos en toda la red",
      "Que la red no tiene puerta de enlace predeterminada"
    ],
    "correctIndex": 1,
    "explanation": "La máscara /24 delimita 24 bits para la dirección de red y 8 bits para hosts, lo que permite hasta 254 direcciones útiles para equipos (2^8 - 2).",
    "skill": "Direccionamiento IP",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Redes TCP/IP",
    "subtopic": "Máscaras de Subred"
  },
  {
    "id": "inf-int-08",
    "number": 28,
    "text": "¿Qué es una variable de tipo \"booleano\" (boolean) en programación?",
    "options": [
      "Una variable que solo puede albergar números complejos",
      "Una variable que almacena únicamente uno de dos valores posibles: verdadero (true) o falso (false)",
      "Una cadena de texto con caracteres especiales",
      "Un puntero directo a un registro del microprocesador"
    ],
    "correctIndex": 1,
    "explanation": "El tipo primitivo booleano representa valores de verdad en lógica binaria algebraico-booleana, fundamental para la toma de decisiones con condicionales if/else.",
    "skill": "Tipos de Datos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Fundamentos de Algoritmos",
    "subtopic": "Tipo Booleano"
  },
  {
    "id": "inf-int-09",
    "number": 29,
    "text": "En programación orientada a objetos (POO), ¿qué es una \"clase\"?",
    "options": [
      "Una instancia concreta ubicada en memoria heap",
      "Una plantilla o molde que define los atributos y métodos comunes a los objetos que se crearán a partir de ella",
      "Una función que no devuelve ningún valor",
      "Un error en tiempo de compilación"
    ],
    "correctIndex": 1,
    "explanation": "Una clase es la definición abstracta de una entidad; cuando se ejecuta la sentencia new Clase(), se crea una instancia u objeto particular con estado propio.",
    "skill": "Programación Orientada a Objetos",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Paradigmas de Programación",
    "subtopic": "Clases y Objetos"
  },
  {
    "id": "inf-int-10",
    "number": 30,
    "text": "¿Qué significa el término \"Open Source\" (Código Abierto)?",
    "options": [
      "Software que solo funciona cuando el computador está abierto físicamente",
      "Software cuyo código fuente está disponible públicamente para que cualquiera pueda inspeccionarlo, modificarlo y redistribuirlo bajo una licencia compatible",
      "Programas pirateados que carecen de licencias comerciales",
      "Sistemas operativos que no tienen interfaz gráfica"
    ],
    "correctIndex": 1,
    "explanation": "El código abierto promueve la colaboración comunitaria, auditoría de seguridad y transparencia garantizada por licencias reconocidas como MIT, GPL o Apache.",
    "skill": "Filosofía y Licencias",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Software Libre",
    "subtopic": "Concepto Open Source"
  },
  {
    "id": "inf-int-11",
    "number": 31,
    "text": "¿Qué protocolo de la capa de transporte se caracteriza por ser no orientado a conexión y no garantizar el orden ni la entrega de paquetes?",
    "options": [
      "TCP",
      "UDP",
      "HTTP",
      "SSH"
    ],
    "correctIndex": 1,
    "explanation": "UDP (User Datagram Protocol) prioriza la velocidad y la baja latencia prescindiendo del handshake y la retransmisión de paquetes perdidos, ideal para streaming de video y juegos en línea.",
    "skill": "Protocolos de Transporte",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Redes de Datos",
    "subtopic": "UDP vs TCP"
  },
  {
    "id": "inf-int-12",
    "number": 32,
    "text": "¿Qué es un repositorio en un sistema de control de versiones distribuido como Git?",
    "options": [
      "Una carpeta donde se guardan instaladores de Windows",
      "Una estructura de datos que almacena el historial completo de cambios, ramas, confirmaciones (commits) y metadatos de un proyecto",
      "Un servidor físico exclusivo de Microsoft",
      "Un antivirus de código"
    ],
    "correctIndex": 1,
    "explanation": "El repositorio Git rastrea el árbol de cambios a lo largo del tiempo mediante grafos dirigidos acíclicos (DAG) de commits identificados por hashes SHA.",
    "skill": "Control de Versiones",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Herramientas de Desarrollo",
    "subtopic": "Repositorios Git"
  },
  {
    "id": "inf-int-13",
    "number": 33,
    "text": "¿Qué instrucción de Git se utiliza comúnmente para descargar cambios del repositorio remoto y fusionarlos con la rama local actual?",
    "options": [
      "git push",
      "git pull",
      "git init",
      "git status"
    ],
    "correctIndex": 1,
    "explanation": "git pull ejecuta internamente un \"git fetch\" seguido de un \"git merge\" para sincronizar la rama local con las actualizaciones remotas.",
    "skill": "Control de Versiones Git",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Flujo de Trabajo Git",
    "subtopic": "git pull"
  },
  {
    "id": "inf-int-14",
    "number": 34,
    "text": "¿Qué tipo de ataque informático consiste en engañar al usuario haciéndose pasar por una entidad legítima (banco, correo) para robar sus credenciales?",
    "options": [
      "DDoS",
      "Phishing",
      "SQL Injection",
      "Buffer Overflow"
    ],
    "correctIndex": 1,
    "explanation": "El phishing es una técnica de ingeniería social mediante correos, sitios clonados o mensajes fraudulentos orientada a capturar nombres de usuario, contraseñas y números bancarios.",
    "skill": "Seguridad Informática",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Amenazas y Ciberataques",
    "subtopic": "Ingeniería Social y Phishing"
  },
  {
    "id": "inf-int-15",
    "number": 35,
    "text": "¿Qué código de estado HTTP devuelve un servidor web cuando el recurso solicitado no fue encontrado?",
    "options": [
      "200 OK",
      "301 Moved Permanently",
      "404 Not Found",
      "500 Internal Server Error"
    ],
    "correctIndex": 2,
    "explanation": "El código 404 es la respuesta estándar del protocolo HTTP que indica que el cliente pudo comunicarse con el servidor, pero este no halló el documento correspondiente a la URL.",
    "skill": "Protocolo HTTP",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Desarrollo Web",
    "subtopic": "Códigos de Estado HTTP"
  },
  {
    "id": "inf-int-16",
    "number": 36,
    "text": "En programación, ¿qué es la recursividad (recursión)?",
    "options": [
      "Un error de sintaxis que bloquea la memoria",
      "Una técnica en la que una función se llama directamente o indirectamente a sí misma para resolver subproblemas más pequeños",
      "Un tipo de base de datos no relacional",
      "La duplicación física de discos duros"
    ],
    "correctIndex": 1,
    "explanation": "La recursividad divide un problema complejo en subproblemas idénticos más simples, requiriendo un caso base para evitar un bucle infinito (Stack Overflow).",
    "skill": "Técnicas de Programación",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Algoritmia Básica",
    "subtopic": "Funciones Recursivas"
  },
  {
    "id": "inf-int-17",
    "number": 37,
    "text": "¿Cuál es la función del servidor DNS (Domain Name System) en las redes informáticas?",
    "options": [
      "Asignar direcciones IP dinámicas a los teléfonos móviles",
      "Traducir nombres de dominio legibles para humanos (ej. www.ejemplo.com) en direcciones IP numéricas que las máquinas entienden",
      "Proteger contra incendios en el centro de datos",
      "Comprimir imágenes para que pesen menos"
    ],
    "correctIndex": 1,
    "explanation": "El DNS actúa como la libreta telefónica de internet, resolviendo nombres de host amigables a direcciones IP enrutables (como 142.250.190.46).",
    "skill": "Servicios de Red",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Infraestructura de Internet",
    "subtopic": "Resolución DNS"
  },
  {
    "id": "inf-int-18",
    "number": 38,
    "text": "¿Qué paradigma de bases de datos representa MongoDB?",
    "options": [
      "Relacional basado en tablas y claves foráneas",
      "NoSQL orientado a documentos (formato BSON/JSON)",
      "Basado exclusivamente en archivos de texto plano CSV",
      "Jerárquico de los años 1960"
    ],
    "correctIndex": 1,
    "explanation": "MongoDB es una base de datos NoSQL líder orientada a documentos flexibles sin esquema rígido (schemaless), organizados en colecciones con datos semiestructurados.",
    "skill": "Bases de Datos NoSQL",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Almacenamiento NoSQL",
    "subtopic": "MongoDB y Documentos"
  },
  {
    "id": "inf-int-19",
    "number": 39,
    "text": "¿Qué lenguaje de hojas de estilo se utiliza para definir la presentación visual, colores, tipografías y diseño responsivo de páginas web?",
    "options": [
      "HTML",
      "CSS (Cascading Style Sheets)",
      "PHP",
      "Python"
    ],
    "correctIndex": 1,
    "explanation": "CSS separa el contenido semántico (HTML) de la presentación visual, controlando layouts, animaciones, media queries y diseño adaptable a múltiples pantallas.",
    "skill": "Desarrollo Web",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Frontend Web",
    "subtopic": "Hojas de Estilo CSS"
  },
  {
    "id": "inf-int-20",
    "number": 40,
    "text": "¿Qué es una variable de entorno en un sistema operativo o servidor?",
    "options": [
      "Una constante matemática como Pi",
      "Un valor dinámico con nombre que el sistema y los procesos en ejecución pueden consultar para configurar su comportamiento (por ejemplo PATH o PORT)",
      "Un sensor de temperatura en la CPU",
      "Un virus que altera el reloj del sistema"
    ],
    "correctIndex": 1,
    "explanation": "Las variables de entorno almacenan parámetros de configuración globales o del proceso (rutas de binarios, credenciales de conexión, entornos de desarrollo o producción) sin hardcodearlos en el código.",
    "skill": "Administración de Sistemas",
    "difficulty": "Intermedio",
    "educationalLevel": "Intermedio",
    "sectionId": 1,
    "topic": "Configuración de Entorno",
    "subtopic": "Variables de Entorno"
  },
  {
    "id": "inf-bac-01",
    "number": 41,
    "text": "¿Cuál es la complejidad temporal en el peor de los casos del algoritmo de ordenamiento QuickSort tradicional?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    "correctIndex": 3,
    "explanation": "Aunque su caso promedio es excelente O(n log n), si el pivote elegido es sistemáticamente el menor o mayor elemento (por ejemplo en listas ya ordenadas sin pivote aleatorio), su complejidad degenera en O(n²).",
    "skill": "Análisis de Algoritmos",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Algoritmos de Ordenamiento",
    "subtopic": "Complejidad de QuickSort"
  },
  {
    "id": "inf-bac-02",
    "number": 42,
    "text": "¿Qué estructura de datos abstracta sigue una política FIFO (First In, First Out)?",
    "options": [
      "Pila (Stack)",
      "Cola (Queue)",
      "Árbol AVL",
      "Grafo no conexo"
    ],
    "correctIndex": 1,
    "explanation": "Una Cola (Queue) atiende los elementos en estricto orden de llegada: el primer elemento insertado por el extremo final es el primero en ser extraído por el frente.",
    "skill": "Estructuras de Datos",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Colas y Listas",
    "subtopic": "Colas FIFO"
  },
  {
    "id": "inf-bac-03",
    "number": 43,
    "text": "En programación orientada a objetos, ¿qué principio permite que una subclase proporcione una implementación específica de un método ya definido en su clase base?",
    "options": [
      "Encapsulamiento estricto",
      "Polimorfismo (Sobrescritura de métodos)",
      "Acoplamiento fuerte",
      "Modularidad binaria"
    ],
    "correctIndex": 1,
    "explanation": "El polimorfismo por sobrescritura (override) permite que un mismo mensaje o llamada a método produzca comportamientos distintos según la clase concreta del objeto en tiempo de ejecución.",
    "skill": "POO Avanzada",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Principios de POO",
    "subtopic": "Polimorfismo y Sobrescritura"
  },
  {
    "id": "inf-bac-04",
    "number": 44,
    "text": "¿Qué capa del modelo OSI es responsable del enrutamiento de paquetes lógicos entre redes diferentes mediante direcciones IP?",
    "options": [
      "Capa 2 - Enlace de datos",
      "Capa 3 - Red",
      "Capa 4 - Transporte",
      "Capa 7 - Aplicación"
    ],
    "correctIndex": 1,
    "explanation": "La Capa 3 (Red) gestiona el direccionamiento lógico global, la fragmentación y la selección de la mejor ruta (enrutamiento) a través de routers intermedios.",
    "skill": "Modelo OSI y Redes",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Capas de Red",
    "subtopic": "Capa 3 de Red"
  },
  {
    "id": "inf-bac-05",
    "number": 45,
    "text": "¿Qué mecanismo previene condiciones de carrera (race conditions) en programación concurrente multihilo?",
    "options": [
      "Incrementar la frecuencia de reloj del procesador",
      "Utilizar primitivas de sincronización como semáforos, bloqueos mutuos (mutex) o secciones críticas",
      "Desactivar el recolector de basura",
      "Declarar todas las variables como globales"
    ],
    "correctIndex": 1,
    "explanation": "Los mutex y semáforos serializan el acceso concurrente a recursos compartidos en memoria, asegurando que solo un hilo a la vez ejecute la sección crítica.",
    "skill": "Sistemas Concurrentes",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Concurrencia y Procesos",
    "subtopic": "Sincronización y Mutex"
  },
  {
    "id": "inf-bac-06",
    "number": 46,
    "text": "En el diseño de bases de datos relacionales, ¿qué persigue la Primera Forma Normal (1NF)?",
    "options": [
      "Crear tablas con al menos 10 columnas obligatorias",
      "Garantizar que todos los atributos contengan valores atómicos (indivisibles) y eliminar grupos repetitivos",
      "Deshabilitar las restricciones de integridad referencial",
      "Convertir todos los datos en texto sin formato"
    ],
    "correctIndex": 1,
    "explanation": "La 1NF exige atomicidad en los campos de cada tupla: no se permiten listas ni matrices anidadas dentro de una misma columna, cada celda debe contener un valor simple.",
    "skill": "Normalización de BD",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Diseño Relacional",
    "subtopic": "Primera Forma Normal"
  },
  {
    "id": "inf-bac-07",
    "number": 47,
    "text": "¿Qué vulnerabilidad web ocurre cuando un servidor incluye datos no validados ni sanitizados suministrados por el usuario dentro de una consulta de base de datos?",
    "options": [
      "Cross-Site Scripting (XSS)",
      "Inyección SQL (SQLi)",
      "Cross-Site Request Forgery (CSRF)",
      "Denegación de Servicio (DoS)"
    ],
    "correctIndex": 1,
    "explanation": "La inyección SQL permite a atacantes manipular la sintaxis de las consultas SQL mediante parámetros maliciosos, pudiendo sustraer, alterar o destruir toda la información de la base de datos.",
    "skill": "Seguridad en Aplicaciones Web",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Vulnerabilidades OWASP",
    "subtopic": "Inyección SQL"
  },
  {
    "id": "inf-bac-08",
    "number": 48,
    "text": "¿Qué es una función \"hash\" criptográfica como SHA-256?",
    "options": [
      "Un algoritmo de compresión reversible de archivos de audio",
      "Una función matemática unidireccional que convierte una entrada de longitud arbitraria en una cadena de longitud fija, siendo computacionalmente inviable revertirla",
      "Un protocolo de intercambio de claves públicas RSA",
      "Un sistema de particionamiento de discos"
    ],
    "correctIndex": 1,
    "explanation": "Las funciones hash seguras tienen efecto avalancha, resistencia a preimagen y colisiones: cualquier cambio mínimo en la entrada produce un hash completamente diferente y no reversible.",
    "skill": "Criptografía",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Seguridad Informática",
    "subtopic": "Funciones Hash Criptográficas"
  },
  {
    "id": "inf-bac-09",
    "number": 49,
    "text": "¿Cuál es la función principal de la cláusula \"GROUP BY\" en una consulta SQL relacional?",
    "options": [
      "Ordenar alfabéticamente las filas de la tabla",
      "Agrupar filas con los mismos valores en columnas especificadas para aplicarles funciones de agregación como COUNT, SUM o AVG",
      "Eliminar permanentemente filas duplicadas del disco",
      "Crear una clave foránea hacia otra tabla"
    ],
    "correctIndex": 1,
    "explanation": "GROUP BY colapsa registros idénticos en grupos homogéneos sobre los cuales se calculan métricas estadísticas agregadas con funciones como SUM, AVG, MIN, MAX o COUNT.",
    "skill": "Consultas SQL Complejas",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Bases de Datos",
    "subtopic": "Agrupamiento con GROUP BY"
  },
  {
    "id": "inf-bac-10",
    "number": 50,
    "text": "¿Qué representa el término \"Big O Notation\" (Notación Gran O) en informática?",
    "options": [
      "El tamaño del monitor medido en pulgadas diagonales",
      "Una representación matemática del límite asintótico superior del consumo de tiempo o espacio en memoria de un algoritmo en función del tamaño de entrada (n)",
      "El número total de líneas de código fuente en un proyecto",
      "La versión de un sistema operativo"
    ],
    "correctIndex": 1,
    "explanation": "La notación Big O describe el comportamiento del algoritmo a gran escala (asintótico), prescindiendo de constantes de hardware para comparar la eficiencia intrínseca de los métodos.",
    "skill": "Teoría de la Computación",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Complejidad Computacional",
    "subtopic": "Notación Asintótica Big O"
  },
  {
    "id": "inf-bac-11",
    "number": 51,
    "text": "¿En qué consiste el patrón arquitectónico MVC (Modelo-Vista-Controlador)?",
    "options": [
      "En un algoritmo para comprimir videos MP4",
      "En separar una aplicación en tres capas: Modelo (datos y lógica de negocio), Vista (interfaz visual del usuario) y Controlador (gestor de eventos y flujo)",
      "En utilizar tres procesadores simultáneamente en un servidor",
      "En un tipo de cable de red blindado"
    ],
    "correctIndex": 1,
    "explanation": "MVC desacopla la representación visual de la lógica de negocio y el control de datos, facilitando el mantenimiento, pruebas unitarias y desarrollo modular de software.",
    "skill": "Patrones de Diseño",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Arquitectura de Software",
    "subtopic": "Patrón MVC"
  },
  {
    "id": "inf-bac-12",
    "number": 52,
    "text": "¿Qué es un \"árbol binario de búsqueda\" (BST)?",
    "options": [
      "Un archivo comprimido con dos carpetas",
      "Una estructura de datos arbórea donde cada nodo tiene a lo sumo dos hijos, cumpliendo que los nodos a la izquierda son menores y los de la derecha son mayores que la raíz",
      "Un algoritmo de cifrado asimétrico",
      "Una red de computadoras en topología estrella"
    ],
    "correctIndex": 1,
    "explanation": "La propiedad del BST garantiza que para cualquier nodo con valor k, todos los elementos del subárbol izquierdo son menores que k y todos los del subárbol derecho son mayores o iguales, permitiendo búsquedas en O(log n) promedio.",
    "skill": "Estructuras de Datos Jerárquicas",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Árboles y Grafos",
    "subtopic": "BST (Binary Search Tree)"
  },
  {
    "id": "inf-bac-13",
    "number": 53,
    "text": "¿Qué diferencia esencial existe entre la memoria virtual (paging/swap) y la memoria caché de la CPU?",
    "options": [
      "La memoria virtual reside en el disco secundario y es lenta pero amplia, mientras la caché está en el propio chip del procesador y es extraordinariamente rápida pero reducida",
      "La memoria virtual es más rápida que los registros de la CPU",
      "La caché solo almacena texto plano y la virtual solo imágenes",
      "No existe ninguna diferencia técnica entre ambas"
    ],
    "correctIndex": 0,
    "explanation": "La caché (L1/L2/L3) utiliza memoria SRAM estática hiperrápida integrada en el silicio, mientras la memoria virtual extiende la RAM paginando bloques temporales hacia el almacenamiento secundario.",
    "skill": "Arquitectura de Computadoras",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Jerarquía de Memoria",
    "subtopic": "Caché vs Memoria Virtual"
  },
  {
    "id": "inf-bac-14",
    "number": 54,
    "text": "¿Qué tipo de pruebas de software se encargan de verificar el correcto funcionamiento individual y aislado de una función o componente sin dependencias externas?",
    "options": [
      "Pruebas de estrés y carga",
      "Pruebas unitarias (Unit Tests)",
      "Pruebas de aceptación del cliente (UAT)",
      "Pruebas de penetración de seguridad"
    ],
    "correctIndex": 1,
    "explanation": "Las pruebas unitarias validan unidades atómicas de código (métodos, funciones) aislando dependencias mediante simuladores (mocks o stubs) para certificar su lógica interna.",
    "skill": "Calidad de Software",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Pruebas de Software",
    "subtopic": "Pruebas Unitarias"
  },
  {
    "id": "inf-bac-15",
    "number": 55,
    "text": "¿Qué comando en sistemas UNIX/Linux cambia los permisos de acceso de lectura, escritura y ejecución de un archivo?",
    "options": [
      "chown",
      "chmod",
      "kill -9",
      "grep -r"
    ],
    "correctIndex": 1,
    "explanation": "chmod (change mode) modifica la máscara de bits de permisos para usuario, grupo y otros (ej. chmod 755 script.sh otorga rwxr-xr-x).",
    "skill": "Sistemas Operativos Linux",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Línea de Comandos",
    "subtopic": "Permisos con chmod"
  },
  {
    "id": "inf-bac-16",
    "number": 56,
    "text": "En una red de área local, ¿cuál es el propósito de una VLAN (Virtual Local Area Network)?",
    "options": [
      "Aumentar la velocidad de internet domiciliario",
      "Segmentar lógicamente una red física en múltiples dominios de difusión independientes sin requerir cableado separado",
      "Reemplazar las direcciones MAC por direcciones postales",
      "Eliminar el protocolo TCP"
    ],
    "correctIndex": 1,
    "explanation": "Las VLANs (IEEE 802.1Q) aíslan el tráfico de difusión (broadcast) y refuerzan la seguridad organizacional al segmentar departamentos en redes virtuales independientes sobre los mismos switches.",
    "skill": "Redes y Conmutación",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Infraestructura de Conmutación",
    "subtopic": "VLANs y Segmentación"
  },
  {
    "id": "inf-bac-17",
    "number": 57,
    "text": "¿Qué método de autenticación requiere al menos dos factores independientes (algo que sabes, algo que tienes, o algo que eres)?",
    "options": [
      "Autenticación básica de texto plano",
      "Autenticación Multifactor (MFA/2FA)",
      "Acceso anónimo por FTP",
      "Protocolo Telnet sin contraseña"
    ],
    "correctIndex": 1,
    "explanation": "MFA exige combinar al menos dos factores distintos (ej. contraseña + token temporal generado por app en el teléfono o huella dactilar), mitigando accesos no autorizados por robo de clave.",
    "skill": "Ciberseguridad y Acceso",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Control de Acceso",
    "subtopic": "Autenticación Multifactor (MFA)"
  },
  {
    "id": "inf-bac-18",
    "number": 58,
    "text": "¿Qué papel cumple un \"compilador\" frente a un \"intérprete\"?",
    "options": [
      "El compilador traduce todo el código fuente a código máquina o binario ejecutable antes de correrlo, mientras el intérprete lo analiza y ejecuta línea por línea en tiempo real",
      "El compilador solo funciona en teléfonos móviles y el intérprete en servidores",
      "El intérprete es un hardware físico instalado en la placa base",
      "Son exactamente sinónimos sin ninguna distinción técnica"
    ],
    "correctIndex": 0,
    "explanation": "Los compiladores (como gcc para C/C++ o rustc) traducen el código globalmente generando un ejecutable optimizado, mientras los intérpretes procesan las sentencias sobre la marcha.",
    "skill": "Compiladores e Intérpretes",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Lenguajes y Ejecución",
    "subtopic": "Compilación vs Interpretación"
  },
  {
    "id": "inf-bac-19",
    "number": 59,
    "text": "En desarrollo frontend moderno, ¿qué es el \"Virtual DOM\"?",
    "options": [
      "Un monitor de realidad virtual para programar",
      "Una representación ligera en memoria del DOM real que bibliotecas como React utilizan para calcular diferencias (diffing) y actualizar el DOM de forma eficiente",
      "Una base de datos de navegadores web antiguos",
      "Un chip gráfico para acelerar páginas web"
    ],
    "correctIndex": 1,
    "explanation": "El Virtual DOM calcula los cambios mínimos requeridos (reconciliation) y aplica mutaciones al árbol del navegador por lotes, optimizando el rendimiento de renderizado.",
    "skill": "Frontend y Frameworks",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Arquitectura Web Moderna",
    "subtopic": "Virtual DOM en React"
  },
  {
    "id": "inf-bac-20",
    "number": 60,
    "text": "¿Qué mecanismo en HTTP permite a los servidores web mantener el estado de sesión de un usuario entre peticiones sucesivas?",
    "options": [
      "Cables de red blindados",
      "Cookies de sesión y cabeceras de autorización (tokens JWT)",
      "El comando ping",
      "El reinicio del servidor cada minuto"
    ],
    "correctIndex": 1,
    "explanation": "Dado que HTTP es intrínsecamente un protocolo sin estado (stateless), las cookies HTTP y los tokens de sesión (como Bearer tokens) permiten identificar al cliente en cada solicitud posterior.",
    "skill": "Protocolos Web",
    "difficulty": "Intermedio",
    "sectionId": 1,
    "educationalLevel": "Bachillerato",
    "topic": "Estado en la Web",
    "subtopic": "Cookies y Sesiones HTTP"
  },
  {
    "id": "inf-tec-01",
    "number": 61,
    "text": "Al armar un cable de red Ethernet RJ-45 directo bajo el estándar T568B, ¿cuál es la secuencia correcta de los dos primeros pares de hilos (pines 1 y 2)?",
    "options": [
      "Blanco/Verde y Verde",
      "Blanco/Naranja y Naranja",
      "Blanco/Azul y Azul",
      "Blanco/Marrón y Marrón"
    ],
    "correctIndex": 1,
    "explanation": "El estándar TIA/EIA-568B inicia en el pin 1 con Blanco/Naranja y en el pin 2 con Naranja (continuando con Blanco/Verde, Azul, Blanco/Azul, Verde, Blanco/Marrón, Marrón).",
    "skill": "Cableado Estructurado",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Instalaciones de Red",
    "subtopic": "Norma TIA/EIA-568B"
  },
  {
    "id": "inf-tec-02",
    "number": 62,
    "text": "¿Qué herramienta de software se utiliza comúnmente para clonar imágenes de disco bit a bit y desplegar sistemas operativos en múltiples puestos de trabajo?",
    "options": [
      "Microsoft Paint",
      "Clonezilla o Sysprep con WIMGAPI",
      "Adobe Acrobat Reader",
      "WinRAR"
    ],
    "correctIndex": 1,
    "explanation": "Clonezilla (o utilidades de despliegue basadas en imágenes forenses/WIM) captura bloques de partición completos para replicar imágenes idénticas en masa.",
    "skill": "Soporte y Despliegue Técnico",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Gestión de Sistemas",
    "subtopic": "Clonación de Discos"
  },
  {
    "id": "inf-tec-03",
    "number": 63,
    "text": "¿Qué nivel de RAID combina bandas de datos (striping) con paridad distribuida y requiere un mínimo de tres discos duros físicos?",
    "options": [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 10"
    ],
    "correctIndex": 2,
    "explanation": "RAID 5 distribuye la información y los bloques de paridad entre al menos 3 discos, tolerando la falla total de un disco físico sin pérdida de datos.",
    "skill": "Almacenamiento Empresarial",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Arquitectura de Almacenamiento",
    "subtopic": "Arreglos RAID 5"
  },
  {
    "id": "inf-tec-04",
    "number": 64,
    "text": "¿Cuál es el valor del pitido continuo prolongado o secuencia de pitidos (BEEP CODES) al encender una placa madre durante el POST (Power-On Self-Test)?",
    "options": [
      "Que el sistema operativo ha terminado de cargar el escritorio",
      "Un diagnóstico de bajo nivel emitido por la BIOS/UEFI señalando fallos de hardware crítico (ej. ausencia de RAM o tarjeta de video)",
      "Que el monitor está calibrado en alta definición",
      "Una alerta de que el disco duro está al 100% de capacidad"
    ],
    "correctIndex": 1,
    "explanation": "El firmware BIOS/UEFI ejecuta el POST antes de inicializar la pantalla; si la RAM o la GPU fallan, el zumbador (speaker) emite patrones de pitidos codificados por el fabricante para diagnóstico.",
    "skill": "Diagnóstico de Hardware",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Mantenimiento Preventivo y Correctivo",
    "subtopic": "Beep Codes de BIOS/POST"
  },
  {
    "id": "inf-tec-05",
    "number": 65,
    "text": "Al instalar un procesador en un socket LGA (Land Grid Array), ¿dónde residen físicamente los pines de contacto?",
    "options": [
      "En la parte inferior del procesador",
      "Directamente en el zócalo de la placa madre (motherboard)",
      "En el disipador térmico de aluminio",
      "En el cable de la fuente de poder"
    ],
    "correctIndex": 1,
    "explanation": "En los encapsulados LGA (utilizados por Intel y sockets modernos de AMD como AM5), los pines flexibles están en el zócalo de la placa, mientras el procesador cuenta con almohadillas planas de contacto.",
    "skill": "Ensamble de Hardware",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Sockets de Microprocesadores",
    "subtopic": "Encapsulado LGA vs PGA"
  },
  {
    "id": "inf-tec-06",
    "number": 66,
    "text": "¿Cuál es la función principal de la pasta térmica aplicada entre el IHS (Integrated Heat Spreader) del procesador y el bloque del disipador?",
    "options": [
      "Pegar de forma permanente el procesador para que nunca se desprenda",
      "Rellenar las microimperfecciones microscópicas de aire entre ambas superficies para maximizar la conductividad térmica",
      "Aislar eléctricamente el procesador para evitar chispas",
      "Acelerar la velocidad del reloj de la GPU"
    ],
    "correctIndex": 1,
    "explanation": "El aire es un pésimo conductor térmico (~0.026 W/mK); la pasta térmica (generalmente a base de óxidos metálicos, plata o compuestos cerámicos) expulsa el aire atrapado y transfiere eficientemente el calor.",
    "skill": "Refrigeración de Sistemas",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Térmica de Hardware",
    "subtopic": "Pasta Térmica y Disipación"
  },
  {
    "id": "inf-tec-07",
    "number": 67,
    "text": "¿Qué comando en un router o switch Cisco en modo privilegiado guarda la configuración activa en la memoria NVRAM no volátil?",
    "options": [
      "reload",
      "copy running-config startup-config",
      "erase startup-config",
      "show ip interface brief"
    ],
    "correctIndex": 1,
    "explanation": "copy running-config startup-config (o write memory) persiste los cambios de la memoria volátil DRAM a la NVRAM, asegurando que sobrevivan a reinicios del equipo.",
    "skill": "Configuración de Switches y Routers",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Redes Cisco IOS",
    "subtopic": "Gestión de Configuración"
  },
  {
    "id": "inf-tec-08",
    "number": 68,
    "text": "¿Qué servicio de red asigna automáticamente direcciones IP, máscaras de red, puertas de enlace predeterminadas y servidores DNS a clientes que se conectan?",
    "options": [
      "DHCP (Dynamic Host Configuration Protocol)",
      "SNMP",
      "NTP",
      "SMTP"
    ],
    "correctIndex": 0,
    "explanation": "DHCP automatiza el proceso de direccionamiento mediante el intercambio de mensajes DORA (Discover, Offer, Request, Acknowledge).",
    "skill": "Servicios de Red",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Infraestructura TCP/IP",
    "subtopic": "Protocolo DHCP"
  },
  {
    "id": "inf-tec-09",
    "number": 69,
    "text": "¿Qué tipo de fibra óptica se utiliza predominantemente para transmisiones de larga distancia (varios kilómetros) utilizando fuentes láser y un núcleo estrecho de aproximadamente 9 micrones?",
    "options": [
      "Fibra Multimodo OM1",
      "Fibra Multimodo OM3",
      "Fibra Monomodo (SMF)",
      "Cable Coaxial RG-6"
    ],
    "correctIndex": 2,
    "explanation": "La fibra monomodo propaga un único modo de luz a lo largo del eje central, eliminando la dispersión modal y permitiendo enlaces de decenas de kilómetros sin repetidores.",
    "skill": "Telecomunicaciones y Fibra Óptica",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Medios de Transmisión",
    "subtopic": "Fibra Monomodo vs Multimodo"
  },
  {
    "id": "inf-tec-10",
    "number": 70,
    "text": "¿Qué comando de Linux muestra el uso en tiempo real de los procesos, el consumo de memoria y la carga del procesador (load average)?",
    "options": [
      "ls -la",
      "top (o htop)",
      "cat /etc/passwd",
      "mkdir /var/log"
    ],
    "correctIndex": 1,
    "explanation": "top y htop proporcionan un monitor interactivo de procesos con estadísticas actualizadas continuamente de CPU, RAM, memoria swap y estados de tareas.",
    "skill": "Administración de Servidores Linux",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Monitoreo de Rendimiento",
    "subtopic": "Comandos top y htop"
  },
  {
    "id": "inf-tec-11",
    "number": 71,
    "text": "¿Qué puerto estándar TCP utiliza el protocolo SSH (Secure Shell) para administración remota cifrada por consola?",
    "options": [
      "Puerto 21",
      "Puerto 22",
      "Puerto 23",
      "Puerto 80"
    ],
    "correctIndex": 1,
    "explanation": "SSH escucha en el puerto TCP 22 por defecto, brindando un canal seguro de administración remota cifrado que reemplazó al inseguro Telnet (puerto 23).",
    "skill": "Administración Remota",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Puertos y Protocolos",
    "subtopic": "SSH en Puerto 22"
  },
  {
    "id": "inf-tec-12",
    "number": 72,
    "text": "¿Qué problema ocurre en un circuito digital cuando una señal de reloj llega a diferentes flip-flops con desfases temporales debido a longitudes dispares de pistas de cobre?",
    "options": [
      "Overclocking espontáneo",
      "Clock Skew (Sesgo de reloj)",
      "Submuestreo de Nyquist",
      "Efecto Joule inverso"
    ],
    "correctIndex": 1,
    "explanation": "El clock skew es la diferencia en el tiempo de llegada del flanco de reloj a distintos registros lógicos, lo que puede provocar violaciones de tiempos de setup y hold en circuitos síncronos.",
    "skill": "Electrónica Digital",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Sistemas Síncronos",
    "subtopic": "Clock Skew y Jitter"
  },
  {
    "id": "inf-tec-13",
    "number": 73,
    "text": "¿Qué tecnología de virtualización de tipo contenedor permite empaquetar una aplicación con todas sus dependencias aisladas sobre el mismo núcleo (kernel) del host?",
    "options": [
      "VirtualBox con emulación completa",
      "Docker (contenedores Linux/OCI)",
      "VMware ESXi Bare Metal",
      "BIOS Shadowing"
    ],
    "correctIndex": 1,
    "explanation": "Docker utiliza namespaces y cgroups del kernel de Linux para aislar procesos sin la sobrecarga de emular sistemas operativos invitados completos ni hipervisores pesados.",
    "skill": "Virtualización y DevOps",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Contenedores",
    "subtopic": "Docker y Namespaces"
  },
  {
    "id": "inf-tec-14",
    "number": 74,
    "text": "¿Qué sistema de archivos es el predeterminado y estándar en las distribuciones modernas de Linux para almacenamiento confiable con journaling?",
    "options": [
      "FAT32",
      "NTFS",
      "ext4",
      "exFAT"
    ],
    "correctIndex": 2,
    "explanation": "ext4 (fourth extended filesystem) ofrece journaling para evitar corrupción ante caídas de corriente, soporte para volúmenes de hasta 1 exabyte y asignación tardía de bloques.",
    "skill": "Sistemas de Archivos",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Linux Filesystems",
    "subtopic": "Sistema ext4"
  },
  {
    "id": "inf-tec-15",
    "number": 75,
    "text": "¿Qué herramienta de análisis de paquetes de red permite capturar e inspeccionar tramas de red a nivel de bits en interfaces promiscuas?",
    "options": [
      "Wireshark",
      "Visual Studio Code",
      "GIMP",
      "Audacity"
    ],
    "correctIndex": 0,
    "explanation": "Wireshark es el analizador de protocolos de red libre más utilizado del mundo para auditorías, resolución de problemas de conectividad y análisis forense de tráfico.",
    "skill": "Auditoría de Redes",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Sniffing y Análisis",
    "subtopic": "Wireshark y PCAP"
  },
  {
    "id": "inf-tec-16",
    "number": 76,
    "text": "¿Qué directiva de seguridad web en cabeceras HTTP (CORS) previene que scripts de un origen malicioso hagan peticiones no autorizadas al API de otro dominio?",
    "options": [
      "Content-Encoding",
      "Cross-Origin Resource Sharing (Access-Control-Allow-Origin)",
      "Server-Timing",
      "Transfer-Encoding"
    ],
    "correctIndex": 1,
    "explanation": "CORS define políticas que los navegadores respetan para restringir cómo los recursos de un dominio web pueden ser consumidos por scripts de un origen diferente.",
    "skill": "Seguridad en Servicios Web",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Arquitectura de APIs",
    "subtopic": "Políticas CORS"
  },
  {
    "id": "inf-tec-17",
    "number": 77,
    "text": "¿Qué componente pasivo de protección debe utilizar obligatoriamente un técnico en ensamble de PC para evitar dañar componentes sensibles por descargas electrostáticas (ESD)?",
    "options": [
      "Guantes de lana gruesa",
      "Pulsera antiestática conectada a tierra o tapete ESD disipativo",
      "Calzado con suela plástica deslizante",
      "Gafas de sol polarizadas"
    ],
    "correctIndex": 1,
    "explanation": "La pulsera antiestática drena gradualmente la carga estática del cuerpo hacia una toma de tierra a través de una resistencia de 1 megaohmio, protegiendo microcircuitos CMOS contra picos de voltaje letales.",
    "skill": "Seguridad en Taller",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Protección ESD",
    "subtopic": "Pulsera Antiestática"
  },
  {
    "id": "inf-tec-18",
    "number": 78,
    "text": "¿Qué tipo de SAI (Sistema de Alimentación Ininterrumpida / UPS) proporciona la máxima protección al regenerar constantemente la onda senoidal pura sin tiempo de conmutación mediante doble conversión?",
    "options": [
      "UPS Offline / Standby",
      "UPS Line-Interactive",
      "UPS Online de doble conversión",
      "Regulador de voltaje mecánico"
    ],
    "correctIndex": 2,
    "explanation": "Los UPS Online convierten permanentemente la CA de entrada a CC y luego reconstruyen una CA perfectamente limpia con un inversor (AC-DC-AC), con tiempo de transferencia cero milisegundos.",
    "skill": "Infraestructura Eléctrica de TI",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Suministro y Respaldo",
    "subtopic": "UPS Online Doble Conversión"
  },
  {
    "id": "inf-tec-19",
    "number": 79,
    "text": "¿Qué registro del sistema de nombres de dominio (DNS) se utiliza para especificar el servidor de correo electrónico responsable de recibir mensajes para un dominio?",
    "options": [
      "Registro A",
      "Registro CNAME",
      "Registro MX (Mail Exchanger)",
      "Registro PTR"
    ],
    "correctIndex": 2,
    "explanation": "Los registros MX apuntan a los nombres de host de los agentes de transferencia de correo (MTA) autorizados para recibir correo SMTP en nombre del dominio.",
    "skill": "Servicios de Internet",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Registros DNS",
    "subtopic": "Registro MX de Correo"
  },
  {
    "id": "inf-tec-20",
    "number": 80,
    "text": "¿Qué comando en Windows o Linux se utiliza para verificar la ruta y los saltos de enrutadores intermedios hasta alcanzar un servidor de destino?",
    "options": [
      "tracert (en Windows) o traceroute (en Linux)",
      "netstat -an",
      "ipconfig /all",
      "arp -a"
    ],
    "correctIndex": 0,
    "explanation": "tracert/traceroute envía paquetes con valores crecientes de TTL (Time To Live) para provocar respuestas ICMP Time Exceeded de cada salto intermedio hasta el destino.",
    "skill": "Diagnóstico de Enrutamiento",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Técnico",
    "topic": "Herramientas de Red",
    "subtopic": "Traceroute y TTL"
  },
  {
    "id": "inf-uni-01",
    "number": 81,
    "text": "En teoría de autómatas y lenguajes formales, ¿qué clase de autómata reconoce exactamente los lenguajes libres de contexto según la jerarquía de Chomsky?",
    "options": [
      "Autómata finito determinista (DFA)",
      "Autómata a pila (Pushdown Automaton)",
      "Máquina de Turing determinista sin restricciones",
      "Circuito combinacional sin memoria"
    ],
    "correctIndex": 1,
    "explanation": "Los autómatas a pila (PDA), al incorporar una estructura de memoria auxiliar tipo pila (LIFO), reconocen exactamente los lenguajes generados por gramáticas libres de contexto (Tipo 2).",
    "skill": "Teoría de la Computación",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Autómatas y Lenguajes Formales",
    "subtopic": "Autómatas a Pila"
  },
  {
    "id": "inf-uni-02",
    "number": 82,
    "text": "¿Cuál es la propiedad fundamental del problema de parada (Halting Problem) demostrado por Alan Turing en 1936?",
    "options": [
      "Es un problema resoluble en tiempo polinomial O(n³)",
      "Es indecidible: no existe ningún algoritmo general que pueda determinar si cualquier programa arbitrario terminará o correrá para siempre",
      "Es trivialmente resoluble mediante compiladores optimizados",
      "Demuestra que toda máquina de Turing puede ser emulada por un autómata finito"
    ],
    "correctIndex": 1,
    "explanation": "Turing demostró por reducción al absurdo y diagonalización que no existe ningún algoritmo que determine la parada para cualquier par (programa, entrada), marcando los límites computacionales de la lógica formal.",
    "skill": "Decidibilidad y Computabilidad",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Límites de la Computación",
    "subtopic": "El Problema de la Parada"
  },
  {
    "id": "inf-uni-03",
    "number": 83,
    "text": "En diseño de bases de datos relacionales, ¿qué garantiza la propiedad ACID de \"Aislamiento\" (Isolation)?",
    "options": [
      "Que las transacciones ejecutadas concurrentemente produzcan el mismo estado que si se hubiesen ejecutado secuencialmente, sin interferencias ni lecturas sucias",
      "Que los datos se almacenen en discos mecánicos aislados físicamente",
      "Que las transacciones nunca puedan revertirse con ROLLBACK",
      "Que el servidor funcione sin conexión a la red"
    ],
    "correctIndex": 0,
    "explanation": "El aislamiento en ACID previene anomalías como lecturas sucias (dirty reads), lecturas no repetibles y lecturas fantasma a través de niveles de aislamiento (Read Committed, Serializable).",
    "skill": "Sistemas de Bases de Datos",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Transacciones y ACID",
    "subtopic": "Propiedad de Aislamiento"
  },
  {
    "id": "inf-uni-04",
    "number": 84,
    "text": "En diseño de sistemas distribuidos, ¿qué afirma el Teorema CAP (Teorema de Brewer)?",
    "options": [
      "Que todo sistema distribuido puede garantizar simultáneamente Consistencia, Disponibilidad y Tolerancia a particiones sin compromisos",
      "Que en presencia de una partición de red (P), un sistema distribuido debe elegir forzosamente entre Consistencia (C) o Disponibilidad (A)",
      "Que la capacidad del procesador se duplica cada 18 meses",
      "Que el cifrado asimétrico es inviable en redes de alta velocidad"
    ],
    "correctIndex": 1,
    "explanation": "El teorema CAP demuestra que cuando la red sufre particiones o pérdida de mensajes (P), el sistema debe decidir entre rechazar peticiones para garantizar consistencia estricta (CP) o responder con datos potencialmente desactualizados para mantener disponibilidad (AP).",
    "skill": "Sistemas Distribuidos",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Consistencia y Escalabilidad",
    "subtopic": "Teorema CAP"
  },
  {
    "id": "inf-uni-05",
    "number": 85,
    "text": "¿Qué estructura de datos probabilística eficiente en espacio permite comprobar si un elemento pertenece a un conjunto, garantizando cero falsos negativos aunque admitiendo una tasa configurable de falsos positivos?",
    "options": [
      "Filtro de Bloom (Bloom Filter)",
      "Árbol Rojo-Negro",
      "Tabla Hash con encadenamiento cerrado",
      "Montículo Binario (Binary Heap)"
    ],
    "correctIndex": 0,
    "explanation": "El filtro de Bloom emplea un arreglo de bits y múltiples funciones hash para consultas de pertenencia en O(k) tiempo y consumo mínimo de RAM; si indica que no está, con 100% de certeza no está.",
    "skill": "Estructuras de Datos Avanzadas",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Algoritmos Probabilísticos",
    "subtopic": "Filtros de Bloom"
  },
  {
    "id": "inf-uni-06",
    "number": 86,
    "text": "¿Qué algoritmo clásico resuelve el problema del camino más corto desde un único origen en grafos dirigidos con pesos de arista que pueden ser negativos, detectando además ciclos de peso negativo?",
    "options": [
      "Algoritmo de Dijkstra",
      "Algoritmo de Bellman-Ford",
      "Algoritmo de Prim",
      "Búsqueda en Amplitud (BFS)"
    ],
    "correctIndex": 1,
    "explanation": "Bellman-Ford itera relajanado las aristas |V|-1 veces con complejidad O(|V|·|E|); una iteración adicional detecta si existe un ciclo negativo inalcanzable por Dijkstra.",
    "skill": "Algoritmia Avanzada",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Teoría de Grafos",
    "subtopic": "Algoritmo Bellman-Ford"
  },
  {
    "id": "inf-uni-07",
    "number": 87,
    "text": "¿Cuál es el propósito del mecanismo de \"Paginación en dos o múltiples niveles\" y la tabla TLB (Translation Lookaside Buffer) en la gestión de memoria de un sistema operativo moderno?",
    "options": [
      "Aumentar el consumo de batería de la CPU",
      "Traducir direcciones virtuales a físicas eficientemente sin desperdiciar megabytes de memoria física en tablas de páginas vacías",
      "Formatear unidades SSD automáticamente",
      "Desactivar la caché L2"
    ],
    "correctIndex": 1,
    "explanation": "Las tablas multinivel evitan asignar memoria a rangos de direcciones virtuales no utilizados, y la TLB actúa como una caché asociativa ultra-rápida de traducciones de páginas para minimizar penalizaciones en la MMU.",
    "skill": "Sistemas Operativos Avanzados",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Gestión de Memoria Virtual",
    "subtopic": "Paginación Multinivel y TLB"
  },
  {
    "id": "inf-uni-08",
    "number": 88,
    "text": "En compiladores, ¿cuál es la función de la fase de \"Análisis Sintáctico\" (Parsing)?",
    "options": [
      "Convertir caracteres individuales en tokens léxicos",
      "Construir el Árbol de Sintaxis Abstracta (AST) verificando que la secuencia de tokens cumpla con la gramática libre de contexto del lenguaje",
      "Generar directamente el código binario para la arquitectura x86",
      "Optimizar el consumo térmico del procesador"
    ],
    "correctIndex": 1,
    "explanation": "El parser toma la corriente de tokens generada por el lexer y, guiado por una gramática formal (LL, LR, LALR), valida la estructura jerárquica del programa generando el AST.",
    "skill": "Construcción de Compiladores",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Fases del Compilador",
    "subtopic": "Análisis Sintáctico y AST"
  },
  {
    "id": "inf-uni-09",
    "number": 89,
    "text": "¿Qué problema fundamental de la concurrencia ilustra el clásico \"Problema de los Filósofos Comelones\" (Dining Philosophers)?",
    "options": [
      "El cálculo de decimales de Pi",
      "El bloqueo mutuo (Deadlock), inanición (Starvation) y contención de recursos en procesos concurrentes",
      "La compresión sin pérdida de datos en streaming",
      "La calibración de monitores RGB"
    ],
    "correctIndex": 1,
    "explanation": "Propuesto por Edsger Dijkstra, modela la asignación de recursos limitados entre procesos concurrentes y demuestra las condiciones de Coffman que originan deadlocks.",
    "skill": "Sistemas Operativos y Concurrencia",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Problemas Clásicos de Sincronización",
    "subtopic": "Deadlock e Inanición"
  },
  {
    "id": "inf-uni-10",
    "number": 90,
    "text": "En el criptosistema asimétrico RSA, ¿en qué problema matemático de teoría de números radica su seguridad computacional?",
    "options": [
      "En la dificultad de calcular el logaritmo en base 10",
      "En la intratabilidad computacional de factorizar el producto de dos números primos grandes",
      "En la inversión matricial de orden 3x3",
      "En el cálculo de series de Taylor"
    ],
    "correctIndex": 1,
    "explanation": "RSA se basa en que multiplicar dos primos grandes p y q es trivial (O(n²)), pero recuperar p y q a partir de su producto n es computacionalmente inviable con métodos clásicos actuales.",
    "skill": "Criptografía y Seguridad",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Criptografía Asimétrica",
    "subtopic": "Factorización de Primos en RSA"
  },
  {
    "id": "inf-uni-11",
    "number": 91,
    "text": "¿Qué clase de complejidad computacional agrupa a los problemas de decisión que pueden ser resueltos por una máquina de Turing no determinista en tiempo polinomial?",
    "options": [
      "Clase P",
      "Clase NP",
      "Clase EXPTIME",
      "Clase BQP"
    ],
    "correctIndex": 1,
    "explanation": "La clase NP (Nondeterministic Polynomial time) engloba los problemas cuyas soluciones propuestas pueden ser verificadas en tiempo polinomial por una máquina determinista.",
    "skill": "Teoría de la Complejidad",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Clases P vs NP",
    "subtopic": "Definición de NP"
  },
  {
    "id": "inf-uni-12",
    "number": 92,
    "text": "¿Qué algoritmo de consenso distribuido líder, diseñado por Diego Ongaro y John Ousterhout en Stanford, fue concebido específicamente para ser más comprensible e intuitivo que Paxos?",
    "options": [
      "Proof of Work (PoW)",
      "Raft",
      "PBFT (Practical Byzantine Fault Tolerance)",
      "Two-Phase Commit (2PC)"
    ],
    "correctIndex": 1,
    "explanation": "Raft descompone el consenso distribuido en subproblemas ortogonales: elección de líder, replicación de registros (log replication) y seguridad, siendo ampliamente adoptado por etcd y Consul.",
    "skill": "Sistemas Distribuidos",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Consenso y Replicación",
    "subtopic": "Algoritmo Raft vs Paxos"
  },
  {
    "id": "inf-uni-13",
    "number": 93,
    "text": "En arquitectura de procesadores superescalares modernos, ¿cuál es el objetivo del \"Branch Prediction\" (Predicción de Saltos) y la ejecución especulativa?",
    "options": [
      "Evitar que la CPU consuma electricidad en reposo",
      "Predecir qué bifurcación tomará una instrucción condicional para mantener lleno el pipeline de instrucciones sin esperar a la resolución en la ALU",
      "Proteger al microcódigo de ataques de inyección SQL",
      "Controlar el ventilador de la caja"
    ],
    "correctIndex": 1,
    "explanation": "Los pipelines profundos penalizan fuertemente los saltos vacíos; la predicción de saltos especula el flujo de control para cargar instrucciones por adelantado, descartándolas si erró.",
    "skill": "Arquitectura de Computadoras Avanzada",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Pipelines y Microarquitectura",
    "subtopic": "Ejecución Especulativa"
  },
  {
    "id": "inf-uni-14",
    "number": 94,
    "text": "¿Qué método de aprendizaje automático no supervisado reduce la dimensionalidad de un conjunto de datos proyectándolo sobre las direcciones de máxima varianza?",
    "options": [
      "Regresión Logística",
      "Análisis de Componentes Principales (PCA)",
      "K-Nearest Neighbors (KNN)",
      "Random Forest Classifier"
    ],
    "correctIndex": 1,
    "explanation": "PCA calcula los autovectores y autovalores de la matriz de covarianza de los datos, proyectando las observaciones sobre los componentes ortogonales que retienen la mayor varianza.",
    "skill": "Inteligencia Artificial y Machine Learning",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Reducción de Dimensionalidad",
    "subtopic": "PCA (Principal Component Analysis)"
  },
  {
    "id": "inf-uni-15",
    "number": 95,
    "text": "En motores de bases de datos relacionales como PostgreSQL o MySQL, ¿por qué los índices en disco se implementan comúnmente con árboles B+ (B+ Trees) en lugar de árboles binarios de búsqueda?",
    "options": [
      "Porque los árboles binarios no admiten números enteros",
      "Porque los árboles B+ tienen una alta tasa de ramificación (fan-out) que minimiza drásticamente los accesos de E/S al disco y facilitan recorridos de rangos secuenciales mediante nodos hoja enlazados",
      "Porque los árboles B+ solo ocupan 1 bit en disco",
      "Porque los B+ Trees eliminan la necesidad de memoria RAM"
    ],
    "correctIndex": 1,
    "explanation": "Cada nodo de un B+ Tree coincide con una página de disco (4KB a 16KB), albergando cientos de claves y reduciendo la altura del árbol a 3 o 4 niveles; sus hojas enlazadas permiten escaneos de rango ultra-eficientes.",
    "skill": "Bases de Datos Internals",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Indexación y Almacenamiento",
    "subtopic": "Árboles B+ en Motores SQL"
  },
  {
    "id": "inf-uni-16",
    "number": 96,
    "text": "En redes neuronales profundas (Deep Learning), ¿qué problema matemático grave mitigan arquitecturas como las Redes Residuales (ResNet) con sus \"Skip Connections\"?",
    "options": [
      "El sobrecalentamiento del procesador",
      "El desvanecimiento y explosión del gradiente (Vanishing / Exploding Gradient Problem) al propagar derivadas por retropropagación a través de decenas de capas",
      "La escasez de memoria RAM en el servidor",
      "El cálculo de matrices no invertibles"
    ],
    "correctIndex": 1,
    "explanation": "Las conexiones residuales (F(x) + x) permiten que los gradientes fluyan directamente a través de las capas iniciales sin atenuarse exponencialmente por la regla de la cadena, posibilitando entrenar redes de cientos de capas.",
    "skill": "Deep Learning",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Arquitecturas Neuronales",
    "subtopic": "ResNets y Gradiente Desvaneciente"
  },
  {
    "id": "inf-uni-17",
    "number": 97,
    "text": "¿Cuál es la función del recolector de basura generacional (Generational Garbage Collector) en entornos de ejecución como la JVM o V8?",
    "options": [
      "Borrar archivos temporales de internet cada medianoche",
      "Aprovechar la hipótesis de mortalidad infantil (la gran mayoría de objetos mueren poco después de su creación) para recolectar rápidamente la generación joven sin escanear todo el heap",
      "Desfragmentar el disco rígido mecánicamente",
      "Optimizar el compilador JIT"
    ],
    "correctIndex": 1,
    "explanation": "Divide el heap en Young Generation (Eden/Survivor) y Old Generation; las recolecciones menores (Minor GC) limpian rápidamente objetos efímeros en milisegundos con pausas casi imperceptibles.",
    "skill": "Virtual Machines y Runtimes",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Gestión de Memoria en Runtimes",
    "subtopic": "Garbage Collection Generacional"
  },
  {
    "id": "inf-uni-18",
    "number": 98,
    "text": "¿Qué ataque a nivel de microarquitectura de procesadores explota la ejecución especulativa y las cachés de datos para filtrar información privilegiada del kernel a través de canales laterales?",
    "options": [
      "Spectre y Meltdown",
      "Cross-Site Scripting (XSS)",
      "Ataque de diccionario a claves WPA2",
      "Spoofing ARP"
    ],
    "correctIndex": 0,
    "explanation": "Spectre y Meltdown rompen el aislamiento del espacio de usuario y kernel al inducir al procesador a ejecutar ramas especulativas que alteran el estado de la caché L1, recuperando datos sensibles midiendo tiempos de acceso.",
    "skill": "Seguridad en Hardware",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Vulnerabilidades de Microarquitectura",
    "subtopic": "Spectre y Meltdown"
  },
  {
    "id": "inf-uni-19",
    "number": 99,
    "text": "En cálculo lambda no tipado (Untyped Lambda Calculus), ¿qué combinador de punto fijo permite implementar funciones recursivas sin requerir que la función tenga un nombre en el entorno?",
    "options": [
      "Combinador Y (Y Combinator de Haskell Curry)",
      "Combinador I de identidad",
      "Combinador K constante",
      "Combinador S de sustitución"
    ],
    "correctIndex": 0,
    "explanation": "El combinador Y definido como λf.(λx.f (x x)) (λx.f (x x)) satisface Y g = g (Y g), permitiendo definir funciones recursivas anónimas en sistemas puramente funcionales.",
    "skill": "Teoría de Lenguajes de Programación",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Cálculo Lambda",
    "subtopic": "El Combinador Y"
  },
  {
    "id": "inf-uni-20",
    "number": 100,
    "text": "¿Qué algoritmo distribuido de exclusión mutua utiliza marcas de tiempo lógicas de Lamport para asegurar que las peticiones a secciones críticas se concedan en estricto orden causal sin bloqueos?",
    "options": [
      "Algoritmo de Ricart-Agrawala",
      "Algoritmo de Floyd-Warshall",
      "Algoritmo de Huffman",
      "Algoritmo de Knuth-Morris-Pratt"
    ],
    "correctIndex": 0,
    "explanation": "Ricart-Agrawala optimiza el algoritmo de Lamport reduciendo los mensajes requeridos a 2(N-1) por entrada a la sección crítica mediante solicitudes con timestamps ordenados totalmente.",
    "skill": "Sistemas Distribuidos Avanzados",
    "difficulty": "Desafiante",
    "sectionId": 1,
    "educationalLevel": "Universitario",
    "topic": "Exclusión Mutua Distribuida",
    "subtopic": "Algoritmo Ricart-Agrawala"
  }
];
