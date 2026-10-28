import { Question } from '../../../types';

export const INFORMATICA_BACHILLERATO: Question[] = [
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
    "id": "inf-bac-21",
    "sectionId": 1,
    "number": 21,
    "text": "En la Programación Orientada a Objetos (POO), ¿qué pilar fundamental consiste en ocultar el estado interno y los datos de un objeto, exponiendo únicamente métodos controlados (getters y setters) para interactuar con él?",
    "options": [
      "Encapsulamiento",
      "Herencia",
      "Polimorfismo",
      "Instanciación"
    ],
    "correctIndex": 0,
    "explanation": "El encapsulamiento protege la integridad de los atributos declarándolos con modificador privado (private), evitando modificaciones arbitrarias no validadas desde el exterior.",
    "skill": "Pilares de la POO",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Programación Orientada a Objetos",
    "subtopic": "Encapsulamiento y Modificadores de Acceso"
  },
  {
    "id": "inf-bac-22",
    "sectionId": 1,
    "number": 22,
    "text": "¿Cuál es la diferencia entre 'Sobrecarga de métodos' (Overloading) y 'Sobreescritura de métodos' (Overriding) en POO?",
    "options": [
      "La sobrecarga define múltiples métodos en la misma clase con el mismo nombre pero diferente lista o tipo de parámetros; la sobreescritura redefine en una subclase un método heredado de la superclase con exactamente la misma firma",
      "La sobrecarga duplica el tamaño de la memoria y la sobreescritura borra el archivo fuente",
      "La sobrecarga solo aplica a clases abstractas y la sobreescritura a interfaces",
      "Son sinónimos intercambiables en todos los lenguajes de programación"
    ],
    "correctIndex": 0,
    "explanation": "El sobrecargado (overload) ocurre en tiempo de compilación por firma de parámetros; el sobreescrito (override con anotación @Override) implementa polimorfismo dinámico en tiempo de ejecución.",
    "skill": "Polimorfismo y Métodos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "POO Avanzada",
    "subtopic": "Overloading vs Overriding"
  },
  {
    "id": "inf-bac-23",
    "sectionId": 1,
    "number": 23,
    "text": "¿Qué característica define a una 'Clase Abstracta' en lenguajes como Java o C#?",
    "options": [
      "No puede ser instanciada directamente mediante el operador 'new' y sirve de plantilla base para que otras subclases hereden de ella e implementen sus métodos abstractos",
      "No puede contener ningún método con código implementado",
      "Es una clase que solo se almacena en memoria ROM",
      "Solo admite variables de tipo booleano"
    ],
    "correctIndex": 0,
    "explanation": "Una clase abstracta puede contener tanto métodos concretos con lógica como métodos abstractos sin cuerpo que obligatoriamente deben ser sobreescritos por las clases hijas que la extiendan.",
    "skill": "Clases Abstractas e Interfaces",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "POO",
    "subtopic": "Clases Abstractas"
  },
  {
    "id": "inf-bac-24",
    "sectionId": 1,
    "number": 24,
    "text": "¿Cuál es la diferencia clave entre una 'Interfaz' y una 'Clase Abstracta' en la mayoría de los lenguajes orientados a objetos tradicionales?",
    "options": [
      "Una clase solo puede heredar de una única superclase (herencia simple), pero puede implementar múltiples interfaces simultáneamente (polimorfismo de interfaz múltiple)",
      "Las interfaces no admiten métodos públicos",
      "Las clases abstractas no pueden tener constructores",
      "Las interfaces se ejecutan más lento que las clases abstractas"
    ],
    "correctIndex": 0,
    "explanation": "Las interfaces definen contratos formales de comportamiento ('lo que una clase sabe hacer') permitiendo simular herencia múltiple de tipo en lenguajes que restringen la herencia de implementación a una sola clase.",
    "skill": "Diseño Orientado a Objetos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Interfaces",
    "subtopic": "Interfaces vs Clases Abstractas"
  },
  {
    "id": "inf-bac-25",
    "sectionId": 1,
    "number": 25,
    "text": "En la estructura de datos Pila (Stack), ¿qué principio de acceso a los elementos rige todas sus operaciones?",
    "options": [
      "LIFO (Last-In, First-Out: el último elemento en entrar es el primero en salir)",
      "FIFO (First-In, First-Out: el primero en entrar es el primero en salir)",
      "LILO (Last-In, Last-Out)",
      "Acceso aleatorio directo por índice numérico"
    ],
    "correctIndex": 0,
    "explanation": "Una pila apila elementos uno encima del otro; las operaciones principales son push() para insertar en la cima y pop() para extraer el último elemento agregado.",
    "skill": "Estructuras de Datos Clásicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Pilas (Stacks)",
    "subtopic": "Principio LIFO"
  },
  {
    "id": "inf-bac-26",
    "sectionId": 1,
    "number": 26,
    "text": "¿Cuál de las siguientes aplicaciones prácticas de la informática utiliza conceptualmente una estructura de datos de Pila (Stack)?",
    "options": [
      "La función de retroceso de páginas en el historial del navegador web y la opción de 'Deshacer' (Ctrl + Z) de los editores",
      "La cola de impresión de documentos compartidos en una oficina",
      "La asignación de turnos bancarios en ventanilla",
      "La transmisión continua de video en tiempo real"
    ],
    "correctIndex": 0,
    "explanation": "Deshacer y retroceder requieren volver sobre la acción más reciente efectuada (LIFO), guardándose cada estado previo en la cima de una pila.",
    "skill": "Aplicaciones de Pilas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Pilas",
    "subtopic": "Usos Prácticos de Stacks"
  },
  {
    "id": "inf-bac-27",
    "sectionId": 1,
    "number": 27,
    "text": "En la estructura de datos Cola (Queue), ¿qué principio de procesamiento rige sus operaciones?",
    "options": [
      "FIFO (First-In, First-Out: el primer elemento en ingresar es el primero en ser atendido y salir)",
      "LIFO (Last-In, First-Out)",
      "Ordenamiento lexicográfico forzado",
      "Acceso aleatorio bidireccional"
    ],
    "correctIndex": 0,
    "explanation": "Las colas imitan las filas humanas: los elementos se insertan por la parte trasera (enqueue) y se extraen exclusivamente por el frente (dequeue).",
    "skill": "Estructuras de Datos Clásicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Colas (Queues)",
    "subtopic": "Principio FIFO"
  },
  {
    "id": "inf-bac-28",
    "sectionId": 1,
    "number": 28,
    "text": "¿Cuál es la propiedad fundamental que define a un Árbol Binario de Búsqueda (BST - Binary Search Tree)?",
    "options": [
      "Para cualquier nodo, todos los elementos de su subárbol izquierdo son estrictamente menores que su clave, y todos los de su subárbol derecho son mayores (o iguales)",
      "Todos los nodos tienen exactamente dos hijos obligatoriamente",
      "El nodo raíz siempre contiene el número cero",
      "Todos los nodos residen en la misma fila de memoria contigua"
    ],
    "correctIndex": 0,
    "explanation": "Esta propiedad de ordenamiento espacial permite realizar búsquedas, inserciones y eliminaciones en tiempo proporcional a la altura del árbol (O(log n) si está balanceado).",
    "skill": "Estructuras de Datos Jerárquicas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Árboles Binarios",
    "subtopic": "Propiedad del Árbol Binario de Búsqueda"
  },
  {
    "id": "inf-bac-29",
    "sectionId": 1,
    "number": 29,
    "text": "¿Qué tipo de recorrido en profundidad (Depth-First Search) de un Árbol Binario de Búsqueda visita los nodos en orden estrictamente ascendente (de menor a mayor)?",
    "options": [
      "Recorrido Inorden (In-Order: subárbol izquierdo, raíz, subárbol derecho)",
      "Recorrido Preorden (Pre-Order: raíz, izquierdo, derecho)",
      "Recorrido Postorden (Post-Order: izquierdo, derecho, raíz)",
      "Recorrido por niveles (Breadth-First)"
    ],
    "correctIndex": 0,
    "explanation": "Al visitar recursivamente primero todos los valores menores a la izquierda, luego la raíz actual y después los mayores a la derecha, el recorrido Inorden produce la secuencia perfectamente ordenada.",
    "skill": "Recorridos de Árboles",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Árboles BST",
    "subtopic": "Recorrido Inorden"
  },
  {
    "id": "inf-bac-30",
    "sectionId": 1,
    "number": 30,
    "text": "¿Cuál es la complejidad temporal promedio para buscar, insertar o eliminar un elemento en una Tabla Hash (Hash Table) bien dimensionada?",
    "options": [
      "O(1) (tiempo constante promedio)",
      "O(n²)",
      "O(n log n)",
      "O(log n)"
    ],
    "correctIndex": 0,
    "explanation": "Una función hash eficiente distribuye uniformemente las claves en las cubetas (buckets), calculando el índice en tiempo instantáneo O(1) independientemente del número total de elementos.",
    "skill": "Tablas Hash",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Estructuras Hash",
    "subtopic": "Complejidad O(1) en Tablas Hash"
  },
  {
    "id": "inf-bac-31",
    "sectionId": 1,
    "number": 31,
    "text": "¿Qué es una 'Colisión' en una Tabla Hash y cómo se resuelve comúnmente mediante la técnica de 'Encadenamiento Separado' (Separate Chaining)?",
    "options": [
      "Ocurre cuando la función hash calcula el mismo índice de cubeta para dos claves distintas; se resuelve manteniendo una lista enlazada en cada posición del arreglo para almacenar todas las claves que colisionan en ella",
      "Ocurre cuando el disco duro se sobrecalienta",
      "Se resuelve eliminando la clave más antigua automáticamente",
      "Se resuelve formateando la memoria RAM"
    ],
    "correctIndex": 0,
    "explanation": "Como el espacio de claves posibles es mucho mayor que el número de casillas del arreglo, las colisiones son inevitables; en encadenamiento separado, cada casilla del arreglo es la cabecera de una lista enlazada de entradas.",
    "skill": "Manejo de Colisiones Hash",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Tablas Hash",
    "subtopic": "Colisiones y Separate Chaining"
  },
  {
    "id": "inf-bac-32",
    "sectionId": 1,
    "number": 32,
    "text": "¿Cuál es la jerarquía correcta de órdenes de complejidad asintótica de menor a mayor crecimiento de tiempo (del más rápido al más ineficiente)?",
    "options": [
      "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)",
      "O(n²) < O(n) < O(log n) < O(1)",
      "O(2ⁿ) < O(n!) < O(1)",
      "O(n log n) < O(log n) < O(1)"
    ],
    "correctIndex": 0,
    "explanation": "O(1) es constante, O(log n) logarítmico, O(n) lineal, O(n log n) lineal-logarítmico (óptimo para ordenamientos basados en comparaciones), O(n²) cuadrático y O(2ⁿ) exponencial impracticable para datos grandes.",
    "skill": "Notación Asintótica Big-O",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Análisis de Algoritmos",
    "subtopic": "Jerarquía de Complejidad Big-O"
  },
  {
    "id": "inf-bac-33",
    "sectionId": 1,
    "number": 33,
    "text": "¿Cuál es la complejidad temporal en el peor caso y en el caso promedio del algoritmo de ordenamiento Merge Sort?",
    "options": [
      "O(n log n) tanto en el caso promedio como en el peor caso",
      "O(n²) en el peor caso y O(n) en el mejor caso",
      "O(1) constante",
      "O(n³) cúbico"
    ],
    "correctIndex": 0,
    "explanation": "Merge Sort divide siempre el arreglo a la mitad (log n niveles de profundidad) y en cada nivel combina todas las sublistas en tiempo lineal O(n), garantizando invariablemente un rendimiento de O(n log n).",
    "skill": "Algoritmos de Ordenamiento Eficientes",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Merge Sort",
    "subtopic": "Complejidad Garantizada O(n log n)"
  },
  {
    "id": "inf-bac-34",
    "sectionId": 1,
    "number": 34,
    "text": "¿Cuál es la principal desventaja en uso de memoria de Merge Sort frente a Quick Sort?",
    "options": [
      "Requiere memoria auxiliar adicional de orden O(n) para crear los arreglos temporales durante el proceso de mezcla (no es in-place)",
      "No funciona con listas que contengan números impares",
      "Consume el doble de energía del procesador en reposo",
      "Solo puede ordenar hasta 100 números"
    ],
    "correctIndex": 0,
    "explanation": "A diferencia de algoritmos como Quick Sort o Heapsort que permutan elementos en el propio arreglo original (in-place con memoria extra O(log n) o O(1)), la fusión de Merge Sort requiere un arreglo auxiliar de tamaño n.",
    "skill": "Análisis de Espacio",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Merge Sort",
    "subtopic": "Complejidad Espacial O(n)"
  },
  {
    "id": "inf-bac-35",
    "sectionId": 1,
    "number": 35,
    "text": "En el algoritmo Quick Sort, ¿qué circunstancia provoca que su complejidad temporal se degrade a su peor caso de O(n²)?",
    "options": [
      "Elegir repetidamente como pivote el elemento más pequeño o más grande de una lista que ya está previamente ordenada (particiones sumamente desbalanceadas de 0 y n-1 elementos)",
      "Tener una lista con números decimales",
      "Ejecutarse en computadoras con múltiples núcleos",
      "Ordenar cadenas de texto en orden alfabético inverso"
    ],
    "correctIndex": 0,
    "explanation": "Si el pivote no divide la lista en partes aproximadamente iguales, el árbol de recursión tiene una profundidad de n niveles en vez de log n, realizando n + (n-1) + ... + 1 comparaciones = O(n²). Se mitiga eligiendo el pivote al azar o por la mediana de tres.",
    "skill": "Optimización de Quick Sort",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Quick Sort",
    "subtopic": "Peor Caso Cuadrático de Quick Sort"
  },
  {
    "id": "inf-bac-36",
    "sectionId": 1,
    "number": 36,
    "text": "¿Cuáles son en orden descendente (de la capa 7 a la capa 1) las siete capas del modelo de referencia OSI para redes de computadoras?",
    "options": [
      "7. Aplicación, 6. Presentación, 5. Sesión, 4. Transporte, 3. Red, 2. Enlace de Datos, 1. Física",
      "7. Física, 6. Enlace, 5. Red, 4. Transporte, 3. Sesión, 2. Presentación, 1. Aplicación",
      "7. Internet, 6. Web, 5. Wi-Fi, 4. TCP, 3. IP, 2. Ethernet, 1. Cable",
      "7. Software, 6. Middleware, 5. Hardware, 4. CPU, 3. RAM, 2. ROM, 1. Electricidad"
    ],
    "correctIndex": 0,
    "explanation": "El modelo OSI (Open Systems Interconnection) estandarizado por ISO estructura la comunicación de red en siete niveles jerárquicos: Aplicación, Presentación, Sesión, Transporte, Red, Enlace y Física.",
    "skill": "Modelo OSI",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Arquitectura de Redes",
    "subtopic": "Las 7 Capas del Modelo OSI"
  },
  {
    "id": "inf-bac-37",
    "sectionId": 1,
    "number": 37,
    "text": "¿En qué capa del modelo OSI operan los conmutadores (Switches) tradicionales y las direcciones físicas MAC?",
    "options": [
      "Capa 2: Capa de Enlace de Datos (Data Link Layer)",
      "Capa 3: Capa de Red",
      "Capa 4: Capa de Transporte",
      "Capa 1: Capa Física"
    ],
    "correctIndex": 0,
    "explanation": "La capa de enlace organiza los bits en tramas (frames), controla el acceso al medio físico (MAC) y efectúa conmutación local por direcciones físicas de 48 bits.",
    "skill": "Capas del Modelo OSI",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Modelo OSI",
    "subtopic": "Capa 2 de Enlace de Datos"
  },
  {
    "id": "inf-bac-38",
    "sectionId": 1,
    "number": 38,
    "text": "¿En qué capa del modelo OSI operan los enrutadores (Routers) y el protocolo de direccionamiento lógico IP?",
    "options": [
      "Capa 3: Capa de Red (Network Layer)",
      "Capa 2: Enlace de Datos",
      "Capa 4: Transporte",
      "Capa 7: Aplicación"
    ],
    "correctIndex": 0,
    "explanation": "La capa 3 es responsable del enrutamiento de paquetes entre diferentes redes lógicas a través de la determinación de rutas óptimas mediante direcciones lógicas IP.",
    "skill": "Capas del Modelo OSI",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Modelo OSI",
    "subtopic": "Capa 3 de Red"
  },
  {
    "id": "inf-bac-39",
    "sectionId": 1,
    "number": 39,
    "text": "¿Cuáles son las dos principales diferencias entre el protocolo TCP y el protocolo UDP en la capa de transporte?",
    "options": [
      "TCP es orientado a conexión y garantiza entrega ordenada y sin pérdidas mediante acuses de recibo (ACK); UDP no es orientado a conexión, no garantiza entrega ni orden pero tiene mínima sobrecarga y menor latencia",
      "TCP solo transmite texto plano y UDP solo audio",
      "UDP es cifrado por defecto y TCP es inseguro",
      "TCP solo funciona con cables de fibra óptica"
    ],
    "correctIndex": 0,
    "explanation": "TCP asegura la fiabilidad del transporte para páginas web (HTTP) o correo (SMTP). UDP prioriza la inmediatez sin retransmisiones para streaming en vivo (DNS, VoIP, videojuegos).",
    "skill": "Protocolos de Transporte",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "TCP/IP",
    "subtopic": "TCP vs UDP"
  },
  {
    "id": "inf-bac-40",
    "sectionId": 1,
    "number": 40,
    "text": "¿Cómo se denomina el mecanismo de tres pasos mediante el cual dos equipos establecen formalmente una conexión confiable TCP antes de transmitir datos?",
    "options": [
      "Apretón de manos de tres vías (Three-Way Handshake: SYN -> SYN/ACK -> ACK)",
      "Autenticación biométrica mutua",
      "Negociación de clave simétrica RSA",
      "Sincronización P2P en estrella"
    ],
    "correctIndex": 0,
    "explanation": "El cliente envía un paquete con flag SYN (sincronizar números de secuencia); el servidor responde con SYN/ACK (acuse y su propio número); y el cliente finaliza con un ACK confirmando la sesión.",
    "skill": "Protocolo TCP",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Comunicaciones de Transporte",
    "subtopic": "Three-Way Handshake de TCP"
  },
  {
    "id": "inf-bac-41",
    "sectionId": 1,
    "number": 41,
    "text": "¿Cuál es el número de puerto TCP estándar por defecto para conexiones seguras cifradas mediante SSH (Secure Shell) para administración remota de servidores?",
    "options": [
      "Puerto 22",
      "Puerto 80",
      "Puerto 443",
      "Puerto 21"
    ],
    "correctIndex": 0,
    "explanation": "El puerto TCP 22 está asignado por IANA a SSH para sesiones seguras de terminal remoto cifrado.",
    "skill": "Puertos de Red",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Servicios de Red",
    "subtopic": "Puerto 22 de SSH"
  },
  {
    "id": "inf-bac-42",
    "sectionId": 1,
    "number": 42,
    "text": "¿Qué puertos estándar utilizan respectivamente las conexiones web no seguras HTTP y las seguras HTTPS?",
    "options": [
      "HTTP puerto 80 y HTTPS puerto 443",
      "HTTP puerto 25 y HTTPS puerto 110",
      "HTTP puerto 21 y HTTPS puerto 22",
      "HTTP puerto 8080 y HTTPS puerto 3000"
    ],
    "correctIndex": 0,
    "explanation": "El tráfico web plano HTTP viaja tradicionalmente por el puerto 80, mientras que el tráfico web protegido con TLS/HTTPS utiliza el puerto 443.",
    "skill": "Puertos de Red",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Protocolos Web",
    "subtopic": "Puertos 80 y 443"
  },
  {
    "id": "inf-bac-43",
    "sectionId": 1,
    "number": 43,
    "text": "En una red IPv4 con máscara de subred /24 (255.255.255.0), ¿cuántas direcciones IP utilizables se pueden asignar a dispositivos (hosts)?",
    "options": [
      "254 direcciones utilizables (de un total de 256, descontando la dirección de red y la de broadcast)",
      "256 direcciones utilizables",
      "255 direcciones utilizables",
      "512 direcciones utilizables"
    ],
    "correctIndex": 0,
    "explanation": "Un bloque /24 reserva 8 bits para hosts (2⁸ = 256 direcciones). La primera dirección (.0) identifica la red y la última (.255) es para broadcast general, quedando 254 IPs útiles (2⁸ - 2).",
    "skill": "Subnetting IPv4",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Direccionamiento CIDR",
    "subtopic": "Cálculo de Hosts en /24"
  },
  {
    "id": "inf-bac-44",
    "sectionId": 1,
    "number": 44,
    "text": "¿Cuántas direcciones IP totales y cuántas útiles para equipos proporciona una máscara de subred con prefijo CIDR /26 (máscara 255.255.255.192)?",
    "options": [
      "64 direcciones totales y 62 utilizables para hosts (2⁶ - 2 = 62)",
      "128 totales y 126 utilizables",
      "32 totales y 30 utilizables",
      "64 utilizables sin restricciones"
    ],
    "correctIndex": 0,
    "explanation": "32 bits totales - 26 bits de red = 6 bits para hosts. 2⁶ = 64 direcciones totales por subred, menos 2 (red y difusión) = 62 hosts configurables.",
    "skill": "Subnetting IPv4",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Direccionamiento CIDR",
    "subtopic": "Cálculo de Hosts en /26"
  },
  {
    "id": "inf-bac-45",
    "sectionId": 1,
    "number": 45,
    "text": "¿Qué requisito exige la 'Primera Forma Normal' (1FN) en el diseño y normalización de bases de datos relacionales?",
    "options": [
      "Que todos los atributos contengan exclusivamente valores atómicos (indivisibles) y que no existan grupos repetitivos o listas dentro de un mismo campo",
      "Que todas las tablas tengan al menos cinco columnas",
      "Que no existan claves foráneas",
      "Que los nombres de las columnas estén en mayúsculas"
    ],
    "correctIndex": 0,
    "explanation": "La 1FN prohíbe campos compuestos o multivaluados (ej. guardar varios teléfonos en una sola celda como '099123, 098456'); cada campo debe contener un único valor simple.",
    "skill": "Normalización de Bases de Datos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría Relacional",
    "subtopic": "Primera Forma Normal (1FN)"
  },
  {
    "id": "inf-bac-46",
    "sectionId": 1,
    "number": 46,
    "text": "¿Qué condición adicional exige la 'Segunda Forma Normal' (2FN)?",
    "options": [
      "Debe estar en 1FN y todos los atributos no clave deben depender funcionalmente de la totalidad de la clave primaria (eliminando dependencias funcionales parciales en claves compuestas)",
      "Debe tener exactamente dos tablas relacionadas",
      "Debe usar exclusivamente el motor MySQL",
      "Debe eliminar todas las filas con números negativos"
    ],
    "correctIndex": 0,
    "explanation": "La 2FN evita redundancias cuando la tabla tiene clave primaria compuesta: ningún atributo dependiente puede depender solo de una parte de la clave compuesta.",
    "skill": "Normalización de Bases de Datos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría Relacional",
    "subtopic": "Segunda Forma Normal (2FN)"
  },
  {
    "id": "inf-bac-47",
    "sectionId": 1,
    "number": 47,
    "text": "¿Qué condición exige la 'Tercera Forma Normal' (3FN)?",
    "options": [
      "Debe estar en 2FN y ningún atributo no clave debe depender transitivamente de la clave primaria a través de otro atributo no clave",
      "Debe tener tres claves primarias independientes",
      "Debe incluir copias de seguridad cada tres horas",
      "Debe encriptar todos los datos con triple DES"
    ],
    "correctIndex": 0,
    "explanation": "En la 3FN, cada campo no clave debe depender directamente de la clave primaria y de nada más que de la clave primaria ('The key, the whole key, and nothing but the key').",
    "skill": "Normalización de Bases de Datos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría Relacional",
    "subtopic": "Tercera Forma Normal (3FN)"
  },
  {
    "id": "inf-bac-48",
    "sectionId": 1,
    "number": 48,
    "text": "¿Qué propiedad garantiza la opción 'ON DELETE CASCADE' al definir una restricción de clave foránea en una base de datos relacional?",
    "options": [
      "Si un registro de la tabla padre es eliminado, se borran automáticamente en cascada todos los registros hijos asociados en la tabla secundaria",
      "Impide borrar cualquier registro de la base de datos",
      "Crea una copia de respaldo en la nube antes de borrar",
      "Guarda los registros eliminados en una tabla oculta de papelera"
    ],
    "correctIndex": 0,
    "explanation": "ON DELETE CASCADE propaga la eliminación a las tablas subordinadas para preservar la integridad referencial sin dejar registros huérfanos sin padre.",
    "skill": "Integridad Referencial en SQL",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Claves Foráneas",
    "subtopic": "Eliminación en Cascada (ON DELETE CASCADE)"
  },
  {
    "id": "inf-bac-49",
    "sectionId": 1,
    "number": 49,
    "text": "En bases de datos transaccionales (RDBMS), ¿qué significan las siglas 'ACID' que definen la fiabilidad de las transacciones?",
    "options": [
      "Atomicidad, Consistencia, Aislamiento (Isolation) y Durabilidad",
      "Acceso, Conectividad, Integridad y Disponibilidad",
      "Algoritmo, Código, Interfaz y Depuración",
      "Asincronía, Concurrencia, Indexación y Distribución"
    ],
    "correctIndex": 0,
    "explanation": "ACID garantiza que las operaciones financieras o de datos se completen íntegramente (o se reviertan todas, Atomicidad), respeten las reglas del esquema (Consistencia), no se interfieran entre sí (Aislamiento) y sobrevivan a fallos del sistema una vez confirmadas (Durabilidad).",
    "skill": "Teoría de Transacciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Bases de Datos Relacionales",
    "subtopic": "Propiedades ACID"
  },
  {
    "id": "inf-bac-50",
    "sectionId": 1,
    "number": 50,
    "text": "¿Qué comando SQL se utiliza para confirmar y consolidar definitivamente los cambios de una transacción en la base de datos?",
    "options": [
      "COMMIT",
      "ROLLBACK",
      "SAVEPOINT",
      "CHECKPOINT"
    ],
    "correctIndex": 0,
    "explanation": "COMMIT finaliza la transacción con éxito y graba los cambios en el disco de forma irreversible. ROLLBACK descarta todas las operaciones no confirmadas volviendo al estado inicial.",
    "skill": "Control de Transacciones",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Transacciones SQL",
    "subtopic": "Comando COMMIT y ROLLBACK"
  },
  {
    "id": "inf-bac-51",
    "sectionId": 1,
    "number": 51,
    "text": "¿Qué estructura de datos interna (como el árbol B+ Tree) crea un gestor de base de datos cuando se define un 'Índice' en una columna frecuentemente consultada?",
    "options": [
      "Una estructura de punteros ordenados que permite búsquedas binarias ultrarrápidas O(log n) sin tener que escanear secuencialmente toda la tabla (Table Scan)",
      "Un archivo comprimido ZIP en el disco",
      "Una copia duplicada de toda la base de datos en memoria RAM",
      "Una lista de contraseñas de usuarios"
    ],
    "correctIndex": 0,
    "explanation": "Los índices en B-Tree ordenan las claves de búsqueda como el índice de un libro, acelerando las lecturas pero penalizando ligeramente la velocidad de inserción y actualización (INSERT/UPDATE) por el costo de mantener el árbol balanceado.",
    "skill": "Optimización de Bases de Datos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Indexación Relacional",
    "subtopic": "Índices B-Tree"
  },
  {
    "id": "inf-bac-52",
    "sectionId": 1,
    "number": 52,
    "text": "En programación orientada a objetos, ¿qué palabra reservada se utiliza dentro de un método para referenciar a la instancia actual del objeto que está ejecutando el código?",
    "options": [
      "this (o 'self' en Python)",
      "super",
      "static",
      "new"
    ],
    "correctIndex": 0,
    "explanation": "'this' representa un puntero o referencia al propio objeto en ejecución, muy utilizado para resolver ambigüedades entre atributos de instancia y parámetros con el mismo nombre (ej. this.nombre = nombre;).",
    "skill": "Sintaxis de POO",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "POO",
    "subtopic": "Palabra reservada this / self"
  },
  {
    "id": "inf-bac-53",
    "sectionId": 1,
    "number": 53,
    "text": "¿Qué función cumple la palabra clave 'super' en una clase derivada o subclase?",
    "options": [
      "Invocar al constructor o a métodos de la superclase (clase padre)",
      "Duplicar la velocidad del método",
      "Asignar permisos de superusuario al programa",
      "Declarar una variable que nunca puede ser modificada"
    ],
    "correctIndex": 0,
    "explanation": "'super()' invoca el constructor de la clase base heredada, asegurando que los atributos de la superclase se inicialicen adecuadamente.",
    "skill": "Herencia en POO",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Herencia",
    "subtopic": "Palabra reservada super"
  },
  {
    "id": "inf-bac-54",
    "sectionId": 1,
    "number": 54,
    "text": "¿Qué modificador de acceso permite que un atributo o método sea accesible únicamente dentro de su propia clase y en las subclases que hereden de ella, pero permanezca oculto para el resto del mundo?",
    "options": [
      "protected",
      "private",
      "public",
      "default / package-private"
    ],
    "correctIndex": 0,
    "explanation": "El modificador 'protected' otorga visibilidad a la jerarquía de herencia y al mismo paquete, a diferencia de 'private' que restringe el acceso exclusivamente a la clase declarante.",
    "skill": "Modificadores de Acceso",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "POO",
    "subtopic": "Modificador protected"
  },
  {
    "id": "inf-bac-55",
    "sectionId": 1,
    "number": 55,
    "text": "¿Qué significa que un atributo o método se declare con el modificador 'static' en lenguajes como Java, C++ o C#?",
    "options": [
      "Pertenece a la clase en sí misma y no a una instancia particular; existe una única copia compartida por todos los objetos creados",
      "El valor de la variable se borra cada dos segundos",
      "El método solo se puede ejecutar en modo seguro",
      "El atributo solo puede almacenar números pares"
    ],
    "correctIndex": 0,
    "explanation": "Los miembros estáticos se invocan directamente a través del nombre de la clase (ej. Math.sqrt()) sin necesidad de instanciar un objeto con 'new'.",
    "skill": "Miembros Estáticos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "POO",
    "subtopic": "Modificador static"
  },
  {
    "id": "inf-bac-56",
    "sectionId": 1,
    "number": 56,
    "text": "¿Qué modificador aplicado a una variable en Java (o 'const' en C/C++) impide que su valor sea reasignado una vez inicializada?",
    "options": [
      "final",
      "static",
      "abstract",
      "transient"
    ],
    "correctIndex": 0,
    "explanation": "'final' define constantes en Java; una variable final no puede ser modificada tras su asignación inicial, y una clase final no puede ser heredada.",
    "skill": "Constantes en Lenguajes",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "POO en Java",
    "subtopic": "Modificador final"
  },
  {
    "id": "inf-bac-57",
    "sectionId": 1,
    "number": 57,
    "text": "¿Qué principio de diseño de software establece que 'un programa debe estar desacoplado de implementaciones concretas y depender de abstracciones o interfaces'?",
    "options": [
      "Principio de Inversión de Dependencias (DIP de SOLID)",
      "Principio de Responsabilidad Única",
      "Principio Abierto/Cerrado",
      "Principio de Sustitución de Liskov"
    ],
    "correctIndex": 0,
    "explanation": "El principio DIP postula que los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos deben depender de abstracciones (interfaces), base de la Inyección de Dependencias.",
    "skill": "Principios SOLID",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Arquitectura de Software",
    "subtopic": "Principio de Inversión de Dependencias"
  },
  {
    "id": "inf-bac-58",
    "sectionId": 1,
    "number": 58,
    "text": "¿Qué patrón de diseño creacional garantiza que una clase tenga una ÚNICA instancia en toda la aplicación y proporciona un punto de acceso global a ella?",
    "options": [
      "Patrón Singleton",
      "Patrón Factory Method",
      "Patrón Observer",
      "Patrón Adapter"
    ],
    "correctIndex": 0,
    "explanation": "Singleton privatiza el constructor y mantiene una variable estática con la única instancia creada, comúnmente usado para administradores de configuración o pools de conexiones.",
    "skill": "Patrones de Diseño GoF",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Patrones de Diseño Creacionales",
    "subtopic": "Patrón Singleton"
  },
  {
    "id": "inf-bac-59",
    "sectionId": 1,
    "number": 59,
    "text": "¿Qué patrón de diseño de comportamiento define una relación de suscripción 'uno a muchos', notificando automáticamente a múltiples objetos cuando el estado del sujeto cambia?",
    "options": [
      "Patrón Observer (Observador)",
      "Patrón Decorator",
      "Patrón Facade",
      "Patrón Strategy"
    ],
    "correctIndex": 0,
    "explanation": "Observer es la base de la arquitectura de eventos y reactive programming (como oyentes de clics en interfaces gráficas o sistemas pub/sub).",
    "skill": "Patrones de Diseño GoF",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Patrones de Comportamiento",
    "subtopic": "Patrón Observer"
  },
  {
    "id": "inf-bac-60",
    "sectionId": 1,
    "number": 60,
    "text": "¿Qué patrón de diseño estructural añade nuevas funcionalidades a un objeto dinámicamente envolviéndolo en otra clase sin recurrir a una explosión de subclases heredadas?",
    "options": [
      "Patrón Decorator (Decorador)",
      "Patrón Singleton",
      "Patrón Iterator",
      "Patrón Template Method"
    ],
    "correctIndex": 0,
    "explanation": "Decorator envuelve componentes existentes implementando la misma interfaz (ej. en los flujos de E/S de Java: new BufferedReader(new FileReader(...))).",
    "skill": "Patrones de Diseño GoF",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Patrones Estructurales",
    "subtopic": "Patrón Decorator"
  },
  {
    "id": "inf-bac-61",
    "sectionId": 1,
    "number": 61,
    "text": "En la búsqueda en grafos, ¿qué estructura de datos auxiliar utiliza el algoritmo de Búsqueda en Anchura (BFS - Breadth-First Search) para explorar los nodos nivel por nivel?",
    "options": [
      "Una Cola (Queue - FIFO)",
      "Una Pila (Stack - LIFO)",
      "Un Árbol Binario",
      "Una Tabla Hash estática"
    ],
    "correctIndex": 0,
    "explanation": "BFS explora primero todos los vecinos inmediatos antes de descender al siguiente nivel de profundidad, encolando los nodos adyacentes en una Cola FIFO.",
    "skill": "Algoritmos de Grafos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Recorrido de Grafos",
    "subtopic": "Búsqueda en Anchura (BFS)"
  },
  {
    "id": "inf-bac-62",
    "sectionId": 1,
    "number": 62,
    "text": "¿Qué estructura de datos (o mecanismo de control) utiliza el algoritmo de Búsqueda en Profundidad (DFS - Depth-First Search) para avanzar por una rama hasta el fondo antes de retroceder?",
    "options": [
      "Una Pila (Stack - LIFO o recursión en la pila de llamadas)",
      "Una Cola FIFO",
      "Una Matriz de adyacencia circular",
      "Un buffer de red"
    ],
    "correctIndex": 0,
    "explanation": "DFS se sumerge por los vértices hijos hasta topar con un callejón sin salida, utilizando el comportamiento LIFO de una Pila explícita o la pila de llamadas recursivas para retroceder (backtrack).",
    "skill": "Algoritmos de Grafos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Recorrido de Grafos",
    "subtopic": "Búsqueda en Profundidad (DFS)"
  },
  {
    "id": "inf-bac-63",
    "sectionId": 1,
    "number": 63,
    "text": "¿Cuál es el algoritmo clásico más eficiente para encontrar el camino más corto con pesos no negativos desde un nodo origen a todos los demás nodos en un grafo ponderado?",
    "options": [
      "Algoritmo de Dijkstra",
      "Algoritmo de Prim",
      "Algoritmo de Kruskal",
      "Bubble Sort"
    ],
    "correctIndex": 0,
    "explanation": "El algoritmo de Dijkstra utiliza una cola de prioridad (min-heap) para explorar vorazmente el nodo no visitado con menor distancia acumulada, resolviendo caminos mínimos en tiempo O((V + E) log V).",
    "skill": "Caminos Mínimos en Grafos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Algoritmos Voraces",
    "subtopic": "Algoritmo de Dijkstra"
  },
  {
    "id": "inf-bac-64",
    "sectionId": 1,
    "number": 64,
    "text": "¿Por qué el algoritmo de Dijkstra falla o produce resultados erróneos si el grafo contiene aristas con pesos o costos negativos?",
    "options": [
      "Porque asume que una vez visitado un nodo su distancia mínima ya es definitiva y no puede reducirse explorando caminos posteriores, suposición que se quiebra con aristas negativas (requiriéndose el algoritmo de Bellman-Ford)",
      "Porque los números negativos no pueden almacenarse en variables flotantes",
      "Porque el grafo se borra automáticamente",
      "Porque los procesadores no admiten restas en grafos"
    ],
    "correctIndex": 0,
    "explanation": "La naturaleza voraz (greedy) de Dijkstra fija nodos definitivamente; un peso negativo posterior podría reducir el costo de un nodo ya marcado como óptimo, o crear ciclos negativos infinitos.",
    "skill": "Límites de Dijkstra",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Grafos",
    "subtopic": "Pesos Negativos y Algoritmo de Bellman-Ford"
  },
  {
    "id": "inf-bac-65",
    "sectionId": 1,
    "number": 65,
    "text": "¿Qué dos algoritmos clásicos resuelven el problema de encontrar el Árbol de Recubrimiento Mínimo (MST - Minimum Spanning Tree) en un grafo conexo no dirigido ponderado?",
    "options": [
      "Algoritmo de Kruskal y Algoritmo de Prim",
      "Dijkstra y Bellman-Ford",
      "Merge Sort y Quick Sort",
      "Floyd-Warshall y Johnson"
    ],
    "correctIndex": 0,
    "explanation": "Tanto Kruskal (que ordena todas las aristas y las agrega si no forman ciclos) como Prim (que hace crecer un árbol nodo a nodo) construyen un subgrafo que conecta todos los vértices con el menor peso total posible.",
    "skill": "Árboles de Recubrimiento Mínimo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Teoría de Grafos",
    "subtopic": "Algoritmos de Kruskal y Prim"
  },
  {
    "id": "inf-bac-66",
    "sectionId": 1,
    "number": 66,
    "text": "¿Qué estructura de datos de conjuntos disjuntos (Disjoint-Set / Union-Find) permite al algoritmo de Kruskal verificar eficientemente en tiempo casi lineal si agregar una arista formará un ciclo?",
    "options": [
      "Estructura Union-Find con compresión de caminos y unión por rango",
      "Pila LIFO simple",
      "Cola circular de doble extremo (Deque)",
      "Matriz booleana estática"
    ],
    "correctIndex": 0,
    "explanation": "Union-Find determina si dos vértices pertenecen al mismo componente conexo en tiempo casi constante O(α(n)) mediante la función inversa de Ackermann.",
    "skill": "Estructuras Avanzadas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Algoritmo de Kruskal",
    "subtopic": "Estructura Union-Find"
  },
  {
    "id": "inf-bac-67",
    "sectionId": 1,
    "number": 67,
    "text": "¿En qué consiste la técnica de programación conocida como 'Programación Dinámica' (Dynamic Programming)?",
    "options": [
      "Resolver problemas optimizando subproblemas superpuestos y almacenando sus resultados ya calculados en memoria (memorización o tabulación) para no recalcularlos múltiples veces",
      "Escribir código mientras el programa está en producción",
      "Ejecutar los programas con memoria dinámica de video",
      "Cambiar el nombre de las variables automáticamente en tiempo real"
    ],
    "correctIndex": 0,
    "explanation": "La programación dinámica reduce complejidades de tiempo exponenciales O(2ⁿ) a polinómicas O(n) o O(n²) evitando el cálculo repetido de las mismas ramas recursivas (ej. mochila 0/1, Fibonacci).",
    "skill": "Programación Dinámica",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Paradigmas Algorítmicos",
    "subtopic": "Subproblemas Superpuestos y Memorización"
  },
  {
    "id": "inf-bac-68",
    "sectionId": 1,
    "number": 68,
    "text": "¿Qué diferencia existe entre el enfoque 'Top-Down con Memorización' y el enfoque 'Bottom-Up con Tabulación' en Programación Dinámica?",
    "options": [
      "Top-Down utiliza recursión resolviendo el problema mayor y guardando resultados en una tabla o mapa; Bottom-Up es iterativo, resolviendo primero los casos más pequeños desde la base y rellenando una tabla hacia arriba",
      "Top-Down solo funciona en Python y Bottom-Up en Java",
      "Bottom-Up consume el doble de llamadas recursivas en el stack",
      "No existe ninguna diferencia algorítmica"
    ],
    "correctIndex": 0,
    "explanation": "Bottom-Up evita la sobrecarga del stack de llamadas recursivas calculando los estados en bucles ordenados secuencialmente desde el caso base.",
    "skill": "Técnicas de Programación Dinámica",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Programación Dinámica",
    "subtopic": "Top-Down vs Bottom-Up"
  },
  {
    "id": "inf-bac-69",
    "sectionId": 1,
    "number": 69,
    "text": "¿Qué tipo de ataque a la seguridad de bases de datos ocurre cuando una entrada maliciosa de un usuario se concatena directamente en una cadena de consulta SQL sin validar ni usar sentencias preparadas?",
    "options": [
      "Inyección SQL (SQL Injection - SQLi)",
      "Ataque de fuerza bruta de red",
      "Denegación de servicio distribuida (DDoS)",
      "Desbordamiento de búfer en memoria C"
    ],
    "correctIndex": 0,
    "explanation": "La inyección SQL permite al atacante inyectar comandos como '' OR '1'='1' --', alterando la lógica de la consulta para eludir autenticaciones o volcar la base de datos completa.",
    "skill": "Seguridad en Aplicaciones Web",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Ciberseguridad",
    "subtopic": "Inyección SQL (SQLi)"
  },
  {
    "id": "inf-bac-70",
    "sectionId": 1,
    "number": 70,
    "text": "¿Cuál es la medida de defensa primordial y más efectiva para erradicar por completo las vulnerabilidades de Inyección SQL en el desarrollo de software?",
    "options": [
      "Utilizar consultas parametrizadas o sentencias preparadas (Prepared Statements con marcadores de posición '?')",
      "Filtrar manualmente la palabra 'SELECT' en el formulario",
      "Cifrar el disco duro con BitLocker",
      "Instalar un antivirus en el cliente"
    ],
    "correctIndex": 0,
    "explanation": "Las sentencias preparadas envían la estructura SQL compilada de antemano al motor de base de datos; los parámetros se transmiten por separado como puros datos literales, haciendo imposible que el motor los interprete como código ejecutable.",
    "skill": "Desarrollo Seguro",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Prevención de Inyecciones SQL",
    "subtopic": "Sentencias Preparadas (Prepared Statements)"
  },
  {
    "id": "inf-bac-71",
    "sectionId": 1,
    "number": 71,
    "text": "¿Qué vulnerabilidad web (Cross-Site Scripting - XSS) permite a un atacante inyectar scripts maliciosos de JavaScript en páginas web visualizadas por otros usuarios víctimas?",
    "options": [
      "XSS (Cross-Site Scripting)",
      "CSRF (Cross-Site Request Forgery)",
      "Ataque Man-in-the-Middle",
      "Spoofing de DNS"
    ],
    "correctIndex": 0,
    "explanation": "XSS ejecuta código en el contexto de seguridad del navegador de la víctima, permitiendo robar cookies de sesión, tokens de autenticación o manipular el DOM de la página.",
    "skill": "Vulnerabilidades Web OWASP",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Seguridad de Aplicaciones",
    "subtopic": "Vulnerabilidad XSS"
  },
  {
    "id": "inf-bac-72",
    "sectionId": 1,
    "number": 72,
    "text": "¿Qué mecanismo de defensa previene los ataques de falsificación de peticiones en sitios cruzados (CSRF - Cross-Site Request Forgery)?",
    "options": [
      "Tokens anti-CSRF aleatorios y únicos por sesión validados en cada petición que modifique estado (POST/PUT/DELETE)",
      "Impedir que el usuario use contraseñas cortas",
      "Deshabilitar el protocolo HTTPS",
      "Aumentar el tiempo de sesión a 30 días"
    ],
    "correctIndex": 0,
    "explanation": "Un token anti-CSRF es un secreto criptográfico impredecible que el navegador adjunta en el formulario; un sitio malicioso externo no puede leerlo ni forjarlo en peticiones cruzadas.",
    "skill": "Seguridad Web",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Mitigación CSRF",
    "subtopic": "Tokens Anti-CSRF"
  },
  {
    "id": "inf-bac-73",
    "sectionId": 1,
    "number": 73,
    "text": "¿Por qué las contraseñas de los usuarios NUNCA deben almacenarse en texto plano ni con funciones hash simples y obsoletas como MD5 o SHA-1 en la base de datos?",
    "options": [
      "Porque son vulnerables a ataques de colisión y pueden revertirse instantáneamente mediante tablas de arcoíris (Rainbow Tables) precalculadas y ataques masivos por GPU",
      "Porque ocupan demasiado espacio en disco",
      "Porque impiden el inicio de sesión desde teléfonos móviles",
      "Porque la ley obliga a guardar las contraseñas en hojas de papel"
    ],
    "correctIndex": 0,
    "explanation": "MD5 y SHA-1 fueron diseñados para velocidad de comprobación de integridad, permitiendo miles de millones de intentos por segundo con tarjetas gráficas modernas.",
    "skill": "Criptografía y Almacenamiento Seguro",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Almacenamiento de Contraseñas",
    "subtopic": "Inseguridad de MD5 y SHA-1"
  },
  {
    "id": "inf-bac-74",
    "sectionId": 1,
    "number": 74,
    "text": "¿Qué algoritmo criptográfico adaptativo diseñado específicamente para hashing de contraseñas incorpora salt aleatorio y un factor de costo computacional ajustable (cost factor / work factor)?",
    "options": [
      "bcrypt (o Argon2 / PBKDF2)",
      "MD5",
      "Base64",
      "ROT13"
    ],
    "correctIndex": 0,
    "explanation": "bcrypt genera automáticamente un salt único contra tablas arcoíris y permite incrementar el trabajo iterativo para mantener el cálculo intencionalmente lento ante la evolución de la potencia de hardware de los atacantes.",
    "skill": "Criptografía de Contraseñas",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Hashing Seguro",
    "subtopic": "Algoritmos bcrypt y Argon2"
  },
  {
    "id": "inf-bac-75",
    "sectionId": 1,
    "number": 75,
    "text": "¿Cuál es el propósito del 'Salt' (sal) criptográfico aleatorio que se concatena con la contraseña del usuario antes de calcular su hash?",
    "options": [
      "Garantizar que dos usuarios con exactamente la misma contraseña generen hashes totalmente diferentes, neutralizando por completo el uso de tablas arcoíris",
      "Comprimir la contraseña a 4 bits",
      "Permitir recuperar la contraseña en texto plano en caso de olvido",
      "Traducir la contraseña al idioma inglés"
    ],
    "correctIndex": 0,
    "explanation": "El salt es una cadena pseudoaleatoria única por usuario; al sumarse a la clave, obliga al atacante a calcular un diccionario individualizado para cada usuario concreto.",
    "skill": "Criptografía Aplicada",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Seguridad de Credenciales",
    "subtopic": "Función del Salt Criptográfico"
  },
  {
    "id": "inf-bac-76",
    "sectionId": 1,
    "number": 76,
    "text": "¿Qué protocolo de cifrado en la capa de transporte proporciona autenticidad y privacidad en internet, sucediendo al histórico y obsoleto SSL?",
    "options": [
      "TLS (Transport Layer Security, en versiones modernas 1.2 y 1.3)",
      "IPsec en modo túnel",
      "WPA3",
      "WEP"
    ],
    "correctIndex": 0,
    "explanation": "TLS es el sucesor estandarizado por el IETF de SSL; la versión TLS 1.3 optimizó el handshake a un solo viaje de ida y vuelta (1-RTT) eliminando algoritmos obsoletos e inseguros.",
    "skill": "Protocolos Criptográficos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Seguridad de Comunicaciones",
    "subtopic": "Protocolo TLS 1.3"
  },
  {
    "id": "inf-bac-77",
    "sectionId": 1,
    "number": 77,
    "text": "¿Cuál es la diferencia fundamental entre el Cifrado Simétrico y el Cifrado Asimétrico?",
    "options": [
      "El cifrado simétrico utiliza la misma clave secreta para cifrar y descifrar; el asimétrico utiliza un par de claves matemáticamente vinculadas: una clave pública para cifrar y una clave privada secreta para descifrar",
      "El simétrico solo funciona con números pares y el asimétrico con impares",
      "El cifrado asimétrico es mil veces más rápido que el simétrico",
      "El cifrado simétrico no requiere algoritmos matemáticos"
    ],
    "correctIndex": 0,
    "explanation": "El cifrado simétrico (como AES) es veloz y se usa para grandes volúmenes de datos; el asimétrico (como RSA o ECC) resuelve el intercambio seguro de claves y la firma digital.",
    "skill": "Fundamentos Criptográficos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Criptografía",
    "subtopic": "Cifrado Simétrico vs Asimétrico"
  },
  {
    "id": "inf-bac-78",
    "sectionId": 1,
    "number": 78,
    "text": "¿Qué algoritmo de cifrado simétrico por bloques estandarizado por el NIST en 2001 es el estándar mundial más seguro y utilizado (con tamaños de clave de 128, 192 y 256 bits)?",
    "options": [
      "AES (Advanced Encryption Standard - Rijndael)",
      "DES de 56 bits",
      "RC4",
      "César de 3 desplazamientos"
    ],
    "correctIndex": 0,
    "explanation": "AES reemplazó al vulnerable DES; es una red de sustitución-permutación que no tiene ataques prácticos conocidos y está acelerado por hardware en las CPUs modernas (instrucciones AES-NI).",
    "skill": "Criptografía Simétrica",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Estándares Criptográficos",
    "subtopic": "Algoritmo AES"
  },
  {
    "id": "inf-bac-79",
    "sectionId": 1,
    "number": 79,
    "text": "¿En qué problema matemático de alta complejidad se basa la seguridad del algoritmo de cifrado asimétrico RSA?",
    "options": [
      "La dificultad computacional intrínseca de factorizar números enteros gigantescos que son producto de dos números primos grandes",
      "El cálculo de raíces cuadradas simples",
      "La resolución de matrices diagonales 2x2",
      "La ordenación de listas de cadenas de texto"
    ],
    "correctIndex": 0,
    "explanation": "Multiplicar dos números primos de 1024 o 2048 bits es trivial, pero revertir el producto para hallar los factores primos originales requeriría millones de años con computadoras convencionales.",
    "skill": "Criptografía Asimétrica",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Algoritmo RSA",
    "subtopic": "Factorización de Primos Grandes"
  },
  {
    "id": "inf-bac-80",
    "sectionId": 1,
    "number": 80,
    "text": "¿Cómo garantiza una 'Firma Digital' la autenticidad e integridad de un documento electrónico?",
    "options": [
      "El emisor calcula el hash del documento y lo cifra con su clave PRIVADA; cualquiera puede descifrar el hash con la clave PÚBLICA del emisor y compararlo con el documento para comprobar que no fue alterado",
      "Se escanea una firma manuscrita con tinta y se pega como imagen JPEG",
      "Se escribe el nombre del remitente en el asunto del correo",
      "Se envía una copia impresa por correo postal certificado"
    ],
    "correctIndex": 0,
    "explanation": "Solo el poseedor de la clave privada pudo generar la firma digital válida, garantizando autenticidad (identidad del firmante), no repudio e integridad inalterable del mensaje.",
    "skill": "Firma Digital y PKI",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Criptografía",
    "subtopic": "Mecanismo de Firma Digital"
  },
  {
    "id": "inf-bac-81",
    "sectionId": 1,
    "number": 81,
    "text": "¿Qué entidad de confianza emite y certifica la validez de los certificados digitales X.509 utilizados en páginas web HTTPS?",
    "options": [
      "Autoridad de Certificación (CA - Certificate Authority)",
      "El fabricante del procesador de la computadora",
      "El proveedor de internet residencial",
      "La empresa eléctrica local"
    ],
    "correctIndex": 0,
    "explanation": "Una CA confiable (como Let's Encrypt o DigiCert) firma criptográficamente el certificado del dominio, permitiendo al navegador confiar en la autenticidad del servidor web.",
    "skill": "Infraestructura de Clave Pública (PKI)",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Certificados Digitales",
    "subtopic": "Autoridades de Certificación (CA)"
  },
  {
    "id": "inf-bac-82",
    "sectionId": 1,
    "number": 82,
    "text": "En la teoría de sistemas operativos, ¿cuál es la diferencia fundamental entre un 'Proceso' y un 'Hilo' (Thread)?",
    "options": [
      "Un proceso es un programa en ejecución con su propio espacio de memoria virtual protegido e independiente; un hilo es una unidad básica de ejecución dentro de un proceso que comparte el espacio de memoria con otros hilos del mismo proceso",
      "Un proceso solo corre en la GPU y un hilo en la CPU",
      "Los hilos no pueden ejecutarse en paralelo",
      "No existe diferencia, son dos palabras para la misma entidad del kernel"
    ],
    "correctIndex": 0,
    "explanation": "La conmutación de contexto entre hilos es mucho más liviana que entre procesos porque comparten código, datos y descriptores de archivos, aunque requiere mecanismos de sincronización para evitar condiciones de carrera.",
    "skill": "Sistemas Operativos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Concurrencia",
    "subtopic": "Procesos vs Hilos (Threads)"
  },
  {
    "id": "inf-bac-83",
    "sectionId": 1,
    "number": 83,
    "text": "¿Qué es una 'Condición de Carrera' (Race Condition) en programación concurrente multi-hilo?",
    "options": [
      "Ocurre cuando dos o más hilos acceden y modifican un recurso compartido simultáneamente sin la debida sincronización, haciendo que el resultado final dependa del orden arbitrario de ejecución",
      "Una competencia de velocidad entre dos computadoras en red",
      "Un ciclo que acelera los núcleos del procesador al 100%",
      "Una técnica para optimizar consultas de bases de datos"
    ],
    "correctIndex": 0,
    "explanation": "Las condiciones de carrera producen errores intermitentes no deterministas en variables compartidas (ej. dos hilos incrementando un saldo bancario simultáneamente).",
    "skill": "Programación Concurrente",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Sincronización de Hilos",
    "subtopic": "Condiciones de Carrera (Race Conditions)"
  },
  {
    "id": "inf-bac-84",
    "sectionId": 1,
    "number": 84,
    "text": "¿Qué mecanismo de sincronización actúa como un cerrojo de exclusión mutua que permite a un único hilo acceder a una sección crítica de código a la vez?",
    "options": [
      "Mutex (Mutual Exclusion Lock)",
      "Puntero flotante",
      "Bucle infinito con delay",
      "Buffer de memoria intermedia"
    ],
    "correctIndex": 0,
    "explanation": "Un hilo adquiere el Mutex antes de ingresar a la sección crítica y lo libera al salir; cualquier otro hilo que intente entrar queda bloqueado en espera, garantizando acceso atómico.",
    "skill": "Sincronización de Concurrencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Exclusión Mutua",
    "subtopic": "Bloqueos Mutex"
  },
  {
    "id": "inf-bac-85",
    "sectionId": 1,
    "number": 85,
    "text": "¿Qué es un 'Interbloqueo' (Deadlock) en sistemas concurrentes?",
    "options": [
      "Una situación de bloqueo permanente donde dos o más procesos están esperando indefinidamente por recursos que están retenidos por los otros, impidiendo que cualquiera continúe",
      "La desconexión física de la tarjeta de red",
      "Un error que ocurre cuando se llena el disco duro",
      "La ejecución de un programa en modo seguro"
    ],
    "correctIndex": 0,
    "explanation": "El clásico abrazo mortal: el Proceso 1 tiene el Recurso A y espera por el B, mientras el Proceso 2 retiene el B y espera por el A; ninguno cede y ambos quedan congelados para siempre.",
    "skill": "Interbloqueos en Sistemas Operativos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Deadlocks",
    "subtopic": "Concepto de Interbloqueo"
  },
  {
    "id": "inf-bac-86",
    "sectionId": 1,
    "number": 86,
    "text": "¿Cuáles son las 4 condiciones necesarias de Coffman para que se produzca un Deadlock en un sistema operativo?",
    "options": [
      "1. Exclusión mutua; 2. Retención y espera; 3. No apropiación (no expropiación); 4. Espera circular",
      "1. Memoria baja; 2. CPU lenta; 3. Disco lleno; 4. Red caída",
      "1. Hilo único; 2. Mutex nulo; 3. Bucle while; 4. Interrupción de reloj",
      "1. Formateo; 2. Reinicio; 3. Actualización; 4. Cierre de sesión"
    ],
    "correctIndex": 0,
    "explanation": "Si se elimina o previene al menos una de estas cuatro condiciones de Coffman, el sistema queda formalmente libre de la posibilidad de sufrir interbloqueos.",
    "skill": "Teoría de Sistemas Operativos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Condiciones de Coffman",
    "subtopic": "Las 4 Condiciones de Deadlock"
  },
  {
    "id": "inf-bac-87",
    "sectionId": 1,
    "number": 87,
    "text": "¿Qué algoritmo de asignación de CPU conmuta los procesos asignando a cada uno un intervalo fijo de tiempo de procesamiento llamado 'Quantum' de forma rotativa circular?",
    "options": [
      "Algoritmo Round Robin (RR)",
      "First-Come, First-Served (FCFS)",
      "Shortest Job First (SJF) no apropiativo",
      "Planificación por prioridad estática"
    ],
    "correctIndex": 0,
    "explanation": "Round Robin es el algoritmo por excelencia para sistemas de tiempo compartido: garantiza equidad y tiempos de respuesta rápidos expulsando al proceso cuando expira su quantum.",
    "skill": "Planificación de Procesos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Algoritmos de CPU",
    "subtopic": "Planificación Round Robin"
  },
  {
    "id": "inf-bac-88",
    "sectionId": 1,
    "number": 88,
    "text": "¿Qué técnica de memoria en sistemas operativos permite ejecutar programas cuyo tamaño total supera la cantidad física de memoria RAM disponible?",
    "options": [
      "Memoria Virtual (mediante paginación e intercambio con disco/swap)",
      "Memoria caché de nivel 1",
      "Overclocking de bus de memoria",
      "Compilación condicional"
    ],
    "correctIndex": 0,
    "explanation": "La memoria virtual divide el espacio en páginas y utiliza la unidad de gestión de memoria (MMU) para mapear páginas a marcos en RAM o mover páginas inactivas al archivo de paginación (swap en disco).",
    "skill": "Gestión de Memoria",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Memoria Virtual",
    "subtopic": "Paginación y Swap"
  },
  {
    "id": "inf-bac-89",
    "sectionId": 1,
    "number": 89,
    "text": "¿Qué evento de hardware/sistema ocurre cuando un proceso intenta acceder a una página de memoria virtual que actualmente no está cargada en la memoria RAM física?",
    "options": [
      "Fallo de página (Page Fault)",
      "Fallo de segmentación letal",
      "Interrupción de división por cero",
      "Desbordamiento de búfer"
    ],
    "correctIndex": 0,
    "explanation": "La MMU genera una trampa de 'Page Fault', haciendo que el sistema operativo suspenda el hilo, cargue la página requerida desde el disco a la RAM y reanude la instrucción transparente para la aplicación.",
    "skill": "Sistemas de Paginación",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Memoria Virtual",
    "subtopic": "Fallo de Página (Page Fault)"
  },
  {
    "id": "inf-bac-90",
    "sectionId": 1,
    "number": 90,
    "text": "¿Qué fenómeno severo (Thrashing o hiperpaginación) ocurre en un sistema operativo cuando la memoria RAM física es insuficiente para contener los conjuntos de trabajo de los procesos activos?",
    "options": [
      "El sistema colapsa en rendimiento dedicando casi el 100% del tiempo de la CPU a intercambiar páginas continuamente entre disco y memoria en lugar de ejecutar código útil",
      "El ventilador se apaga inmediatamente",
      "Los archivos de usuario se borran del disco duro",
      "La tarjeta gráfica cambia la resolución a blanco y negro"
    ],
    "correctIndex": 0,
    "explanation": "En hiperpaginación el sistema se satura de fallos de página continuos; la cola de E/S de disco se llena y la productividad de la CPU cae prácticamente a cero.",
    "skill": "Rendimiento del Sistema Operativo",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Memoria Virtual",
    "subtopic": "Hiperpaginación (Thrashing)"
  },
  {
    "id": "inf-bac-91",
    "sectionId": 1,
    "number": 91,
    "text": "¿Qué formato estándar de intercambio de datos ligero basado en texto utiliza pares de clave-valor y arreglos ordenados, siendo universal en las APIs web modernas?",
    "options": [
      "JSON (JavaScript Object Notation)",
      "XML con esquemas DTD complejos",
      "Binario nativo serializado de Java",
      "Archivos INI planos"
    ],
    "correctIndex": 0,
    "explanation": "JSON es independiente del lenguaje, sumamente compacto y fácilmente analizable por cualquier entorno moderno, desplazando ampliamente a XML en la comunicación web.",
    "skill": "Formatos de Intercambio de Datos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Desarrollo Web",
    "subtopic": "Formato JSON"
  },
  {
    "id": "inf-bac-92",
    "sectionId": 1,
    "number": 92,
    "text": "¿Qué arquitectura para el desarrollo de interfaces de usuario separa la aplicación en tres capas fundamentales: Modelo (datos y lógica de negocio), Vista (interfaz gráfica) y Controlador (gestor de eventos y flujo)?",
    "options": [
      "Patrón Arquitectónico MVC (Model-View-Controller)",
      "Arquitectura Cliente-Servidor pura",
      "Patrón Pipeline en cascada",
      "Monolito sin capas"
    ],
    "correctIndex": 0,
    "explanation": "MVC desacopla la presentación de la lógica de datos, facilitando el mantenimiento, la escalabilidad y las pruebas unitarias independientes de la interfaz.",
    "skill": "Patrones Arquitectónicos",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Arquitectura de Software",
    "subtopic": "Patrón MVC"
  },
  {
    "id": "inf-bac-93",
    "sectionId": 1,
    "number": 93,
    "text": "¿Qué verbo HTTP estándar se debe utilizar en una API RESTful para solicitar la CREACIÓN de un nuevo recurso en el servidor?",
    "options": [
      "POST",
      "GET",
      "DELETE",
      "HEAD"
    ],
    "correctIndex": 0,
    "explanation": "En la semántica REST: GET consulta, POST crea nuevos recursos subordinados, PUT/PATCH actualiza y DELETE elimina.",
    "skill": "APIs RESTful",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Protocolo HTTP",
    "subtopic": "Verbos HTTP en REST"
  },
  {
    "id": "inf-bac-94",
    "sectionId": 1,
    "number": 94,
    "text": "¿Qué código de estado HTTP (HTTP Status Code) indica una respuesta exitosa estándar con entrega de contenido?",
    "options": [
      "200 OK",
      "404 Not Found",
      "500 Internal Server Error",
      "301 Moved Permanently"
    ],
    "correctIndex": 0,
    "explanation": "Las respuestas de la serie 2xx representan éxito (200 OK para consultas exitosas, 201 Created tras un POST que creó un recurso).",
    "skill": "Protocolo HTTP",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Códigos de Estado HTTP",
    "subtopic": "Código 200 OK"
  },
  {
    "id": "inf-bac-95",
    "sectionId": 1,
    "number": 95,
    "text": "¿Qué código de estado HTTP indica que el recurso solicitado no fue encontrado en el servidor?",
    "options": [
      "404 Not Found",
      "401 Unauthorized",
      "403 Forbidden",
      "502 Bad Gateway"
    ],
    "correctIndex": 0,
    "explanation": "404 Not Found es el código de error del cliente que indica que la URL no corresponde a ningún documento o endpoint activo en el servidor.",
    "skill": "Protocolo HTTP",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Códigos de Estado HTTP",
    "subtopic": "Código 404 Not Found"
  },
  {
    "id": "inf-bac-96",
    "sectionId": 1,
    "number": 96,
    "text": "¿Cuál es la diferencia entre el código de estado HTTP 401 Unauthorized y el 403 Forbidden?",
    "options": [
      "401 indica que el cliente no se ha autenticado (falta de credenciales o token inválido); 403 indica que el cliente está autenticado pero no tiene los permisos suficientes para acceder al recurso",
      "401 es un error del servidor y 403 del cable de red",
      "403 indica que la página se movió de servidor",
      "Son códigos sinónimos de idéntico significado"
    ],
    "correctIndex": 0,
    "explanation": "401 se traduce como '¿Quién eres? (requiere login)'; 403 se traduce como 'Sé quién eres, pero tienes prohibido el acceso a este recurso'.",
    "skill": "Protocolo HTTP",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Seguridad HTTP",
    "subtopic": "401 Unauthorized vs 403 Forbidden"
  },
  {
    "id": "inf-bac-97",
    "sectionId": 1,
    "number": 97,
    "text": "¿Qué código de estado HTTP de la serie 5xx representa un error interno no controlado en el servidor?",
    "options": [
      "500 Internal Server Error",
      "200 OK",
      "302 Found",
      "400 Bad Request"
    ],
    "correctIndex": 0,
    "explanation": "El código 500 indica que una excepción no capturada en el backend provocó la caída del procesamiento de la petición.",
    "skill": "Protocolo HTTP",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Errores del Servidor",
    "subtopic": "Código 500 Internal Server Error"
  },
  {
    "id": "inf-bac-98",
    "sectionId": 1,
    "number": 98,
    "text": "¿Qué estructura de tres partes separadas por puntos componen un JSON Web Token (JWT) utilizado comúnmente en autenticación sin estado?",
    "options": [
      "Header (Encabezado con algoritmo), Payload (Carga útil con datos/claims) y Signature (Firma digital criptográfica)",
      "Usuario, Contraseña y Fecha",
      "IP, Puerto y Protocolo",
      "Clave simétrica, Clave asimétrica y Hash MD5"
    ],
    "correctIndex": 0,
    "explanation": "Un JWT codificado en Base64Url tiene el formato xxxxx.yyyyy.zzzzz correspondiente a Encabezado, Carga útil con los datos de usuario y Firma que garantiza que el token no fue manipulado.",
    "skill": "Autenticación Web Moderna",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Tokens JWT",
    "subtopic": "Estructura de un JWT"
  },
  {
    "id": "inf-bac-99",
    "sectionId": 1,
    "number": 99,
    "text": "En el sistema de control de versiones Git, ¿cuál es el estado de los archivos que han sido agregados con el comando 'git add' y están listos para ser incluidos en el próximo commit?",
    "options": [
      "Área de preparación (Staging Area o Index)",
      "Directorio de trabajo (Working Directory)",
      "Repositorio remoto (Remote)",
      "Rama eliminada"
    ],
    "correctIndex": 0,
    "explanation": "El Staging Area es el paso intermedio donde se seleccionan y preparan exactamente qué cambios y archivos formarán parte de la siguiente instantánea (commit) de Git.",
    "skill": "Control de Versiones con Git",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Fundamentos de Git",
    "subtopic": "Staging Area y comando git add"
  },
  {
    "id": "inf-bac-100",
    "sectionId": 1,
    "number": 100,
    "text": "¿Cuál es la diferencia entre el comando 'git merge' y el comando 'git rebase' al integrar cambios de una rama secundaria a la rama principal?",
    "options": [
      "git merge crea un commit de fusión explícito preservando el historial bifurcado original; git rebase traslada la base de la rama secundaria a la punta de la principal, reescribiendo los commits para generar un historial lineal limpio",
      "git rebase borra permanentemente todos los archivos modificados",
      "git merge solo funciona si no hay conexión a internet",
      "git rebase es un comando exclusivo de GitHub y no de Git local"
    ],
    "correctIndex": 0,
    "explanation": "Merge respeta la cronología real con un commit de unión de ramas; Rebase reescribe el historial linealmente aplicando uno a uno los commits propios sobre la nueva base.",
    "skill": "Flujos de Trabajo en Git",
    "difficulty": "Desafiante",
    "educationalLevel": "Bachillerato",
    "topic": "Estrategias de Integración",
    "subtopic": "git merge vs git rebase"
  }
];
