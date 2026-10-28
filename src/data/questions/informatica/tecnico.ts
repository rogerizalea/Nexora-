import { Question } from '../../../types';

export const INFORMATICA_TECNICO: Question[] = [
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
    "id": "inf-tec-21",
    "sectionId": 1,
    "number": 21,
    "text": "Al depurar una aplicación con un depurador interactivo (como GDB o el debugger de VS Code), ¿cuál es la diferencia exacta entre la acción 'Step Over' y 'Step Into'?",
    "options": [
      "'Step Into' entra al interior de la función invocada en la línea actual para depurarla paso a paso, mientras que 'Step Over' ejecuta toda la función completa de una sola vez sin entrar a sus líneas internas",
      "'Step Over' detiene el programa de forma definitiva y 'Step Into' reinicia el servidor",
      "'Step Into' ignora los puntos de interrupción y 'Step Over' borra las variables locales",
      "'Step Over' solo funciona en lenguajes compilados y 'Step Into' solo en scripts interpretados"
    ],
    "correctIndex": 0,
    "explanation": "'Step Into' desciende en la jerarquía de llamadas entrando al cuerpo de la función llamada. 'Step Over' ejecuta la llamada como una única instrucción atómica desde la perspectiva del depurador, permaneciendo en el contexto actual.",
    "skill": "Depuración de Software",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Desarrollo y Depuración",
    "subtopic": "Operaciones de Debugger (Step Over vs Step Into)"
  },
  {
    "id": "inf-tec-22",
    "sectionId": 1,
    "number": 22,
    "text": "¿Qué información fundamental proporciona el 'Stack Trace' (traza de la pila de llamadas) generado cuando una aplicación arroja una excepción no controlada?",
    "options": [
      "La secuencia cronológica inversa de funciones y métodos activos en ejecución, con nombres de archivos y números de línea exactos hasta el punto del fallo",
      "El consumo total de energía eléctrica del procesador durante la ejecución",
      "La lista completa de contraseñas de red guardadas en el sistema operativo",
      "El ancho de banda consumido por el navegador web en ese instante"
    ],
    "correctIndex": 0,
    "explanation": "El stack trace desglosa los marcos de pila (stack frames) desde la función donde ocurrió la excepción ascendiendo hasta el punto de entrada principal (main), permitiendo aislar la causa raíz del error.",
    "skill": "Manejo de Excepciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Desarrollo y Depuración",
    "subtopic": "Análisis de Stack Trace"
  },
  {
    "id": "inf-tec-23",
    "sectionId": 1,
    "number": 23,
    "text": "En pruebas unitarias de software, ¿cuál es la función de un objeto simulado 'Mock' frente a un 'Stub'?",
    "options": [
      "Un Mock verifica el comportamiento esperado comprobando si ciertos métodos fueron invocados con parámetros específicos; un Stub simplemente devuelve datos predeterminados prefijados sin verificar interacciones",
      "Un Mock ejecuta el código en producción real y un Stub solo en local",
      "Un Stub reemplaza a la base de datos completa y un Mock solo a variables booleanas",
      "Son herramientas idénticas sin ninguna diferencia técnica"
    ],
    "correctIndex": 0,
    "explanation": "En la taxonomía de Test Doubles de Martin Fowler, los Stubs suministran respuestas enlatadas a llamadas durante la prueba, mientras que los Mocks registran y verifican expectativas sobre qué llamadas ocurrieron realmente.",
    "skill": "Pruebas de Software",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Testing Unitario",
    "subtopic": "Test Doubles (Mocks vs Stubs)"
  },
  {
    "id": "inf-tec-24",
    "sectionId": 1,
    "number": 24,
    "text": "¿Qué ciclo iterativo de tres pasos define la metodología TDD (Test-Driven Development o Desarrollo Guiado por Pruebas)?",
    "options": [
      "Red (escribir prueba que falle) -> Green (escribir el código mínimo para que pase) -> Refactor (mejorar el diseño del código sin alterar su comportamiento)",
      "Plan -> Deploy -> Monitor",
      "Compile -> Link -> Execute",
      "Draft -> Review -> Publish"
    ],
    "correctIndex": 0,
    "explanation": "TDD exige escribir primero la prueba automatizada que falle (Red), implementar la solución más directa para satisfacerla (Green) y luego limpiar y optimizar el código manteniendo las pruebas verdes (Refactor).",
    "skill": "Metodologías de Desarrollo",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Desarrollo Guiado por Pruebas",
    "subtopic": "Ciclo Red-Green-Refactor"
  },
  {
    "id": "inf-tec-25",
    "sectionId": 1,
    "number": 25,
    "text": "¿Para qué se utiliza una herramienta de 'Profiling' (perfilado de código) durante la fase de optimización de una aplicación?",
    "options": [
      "Para medir con precisión métricas de rendimiento en tiempo de ejecución, tales como tiempo de CPU por función, asignaciones de memoria y cuellos de botella",
      "Para cambiar el diseño gráfico de la interfaz de usuario",
      "Para comprobar la ortografía de los comentarios del código",
      "Para cifrar el código fuente y evitar su copia"
    ],
    "correctIndex": 0,
    "explanation": "Los profilers recolectan datos dinámicos mediante muestreo o instrumentación, identificando los 'hotspots' (funciones que consumen el 80% del tiempo de CPU o fugas de memoria).",
    "skill": "Optimización de Rendimiento",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Herramientas de Diagnóstico",
    "subtopic": "Profiling de CPU y Memoria"
  },
  {
    "id": "inf-tec-26",
    "sectionId": 1,
    "number": 26,
    "text": "¿Qué es una 'Fuga de Memoria' (Memory Leak) en una aplicación desarrollada en un lenguaje sin recolección de basura como C/C++?",
    "options": [
      "Ocurre cuando se reserva memoria dinámica en el heap (con malloc/new) pero nunca se libera (con free/delete), acumulando memoria no utilizable hasta agotar los recursos",
      "La pérdida física de chips de memoria RAM en la placa madre",
      "El borrado accidental de archivos en el disco duro",
      "La saturación de la memoria caché L1 del procesador por exceso de voltaje"
    ],
    "correctIndex": 0,
    "explanation": "Una fuga de memoria deja bloques de memoria inalcanzables pero retenidos por el sistema operativo, provocando una degradación continua del rendimiento hasta que el proceso es terminado por el OOM-killer.",
    "skill": "Gestión de Memoria en C/C++",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Depuración de Memoria",
    "subtopic": "Fugas de Memoria (Memory Leaks)"
  },
  {
    "id": "inf-tec-27",
    "sectionId": 1,
    "number": 27,
    "text": "En el estándar de registro (logging) de aplicaciones, ¿cuál es el orden correcto de severidad ascendente de los niveles de log estándar?",
    "options": [
      "DEBUG < INFO < WARN < ERROR < FATAL",
      "FATAL < ERROR < WARN < INFO < DEBUG",
      "INFO < DEBUG < ERROR < WARN < FATAL",
      "WARN < ERROR < DEBUG < INFO < FATAL"
    ],
    "correctIndex": 0,
    "explanation": "DEBUG contiene detalles de diagnóstico para desarrollo, INFO eventos normales, WARN advertencias de situaciones anormales pero controladas, ERROR fallos de operaciones concretas y FATAL caídas catastróficas del servicio.",
    "skill": "Buenas Prácticas de Logging",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Monitoreo y Diagnóstico",
    "subtopic": "Niveles de Severidad de Logs"
  },
  {
    "id": "inf-tec-28",
    "sectionId": 1,
    "number": 28,
    "text": "¿Qué tipo de prueba de software evalúa la interacción y el flujo correcto de datos entre dos o más módulos o servicios que ya fueron probados unitariamente de forma aislada?",
    "options": [
      "Prueba de Integración",
      "Prueba de Humo (Smoke Test)",
      "Prueba de Usabilidad",
      "Prueba Unitaria simple"
    ],
    "correctIndex": 0,
    "explanation": "Las pruebas de integración validan que componentes heterogéneos (ej. backend comunicándose con base de datos real o servicio de pagos externo) colaboren correctamente según el contrato de interfaz.",
    "skill": "Estrategias de Pruebas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Control de Calidad (QA)",
    "subtopic": "Pruebas de Integración"
  },
  {
    "id": "inf-tec-29",
    "sectionId": 1,
    "number": 29,
    "text": "¿Cuál es el propósito de realizar 'Pruebas de Regresión' antes del lanzamiento de una nueva versión de software?",
    "options": [
      "Comprobar que los cambios nuevos, mejoras o correcciones de errores no hayan roto ni desestabilizado funcionalidades que antes operaban correctamente",
      "Revertir automáticamente el código fuente a la versión de hace dos años",
      "Reducir el tamaño de los archivos ejecutables",
      "Instalar el sistema operativo desde cero"
    ],
    "correctIndex": 0,
    "explanation": "Las pruebas de regresión ejecutan la suite de pruebas previas para garantizar que las modificaciones introducidas no hayan causado efectos colaterales indeseados en el comportamiento existente.",
    "skill": "Mantenimiento de Software",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Control de Calidad",
    "subtopic": "Pruebas de Regresión"
  },
  {
    "id": "inf-tec-30",
    "sectionId": 1,
    "number": 30,
    "text": "¿Qué técnica de prueba dinámica 'Fuzz Testing' (o Fuzzing) se utiliza para encontrar vulnerabilidades de seguridad y fallos de estabilidad en software?",
    "options": [
      "Enviar de forma automatizada entradas masivas aleatorias, malformadas o inesperadas al programa para detectar cuelgues, excepciones no controladas o fallos de segmentación",
      "Preguntar a usuarios humanos su opinión sobre los colores de la interfaz",
      "Revisar manualmente cada línea de código con una lupa",
      "Comprimir el código fuente en formato ZIP"
    ],
    "correctIndex": 0,
    "explanation": "El fuzzing bombardea las interfaces de entrada con datos aleatorios o mutados para forzar condiciones de frontera imprevistas, siendo fundamental para descubrir desbordamientos de búfer y vulnerabilidades de día cero.",
    "skill": "Seguridad en Pruebas",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Seguridad y Diagnóstico",
    "subtopic": "Fuzz Testing (Fuzzing)"
  },
  {
    "id": "inf-tec-31",
    "sectionId": 1,
    "number": 31,
    "text": "En Git, ¿para qué se utiliza el comando 'git bisect'?",
    "options": [
      "Para encontrar mediante búsqueda binaria automatizada el commit exacto que introdujo un error (bug) entre una versión buena conocida y la versión rota actual",
      "Para dividir un archivo grande en dos partes iguales",
      "Para clonar dos repositorios remotos simultáneamente",
      "Para borrar la mitad de los commits antiguos"
    ],
    "correctIndex": 0,
    "explanation": "git bisect prueba sucesivamente el commit medio entre los límites 'good' y 'bad' en tiempo O(log N), aislando rápidamente el commit culpable que provocó la regresión.",
    "skill": "Control de Versiones Profesional",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Herramientas de Git",
    "subtopic": "Comando git bisect"
  },
  {
    "id": "inf-tec-32",
    "sectionId": 1,
    "number": 32,
    "text": "¿Qué acción realiza el comando 'git cherry-pick <commit-hash>' en Git?",
    "options": [
      "Aplica los cambios exactos de un commit específico proveniente de cualquier otra rama e inserta un nuevo commit equivalente en la punta de la rama actual",
      "Elimina todos los archivos temporales no versionados",
      "Sincroniza todas las ramas remotas con la local",
      "Descarga solo las imágenes de un repositorio"
    ],
    "correctIndex": 0,
    "explanation": "Cherry-pick copia selectivamente el parche introducido en un commit determinado sin necesidad de fusionar o rebasar la rama completa donde fue creado.",
    "skill": "Gestión de Ramas en Git",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Control de Versiones",
    "subtopic": "Comando git cherry-pick"
  },
  {
    "id": "inf-tec-33",
    "sectionId": 1,
    "number": 33,
    "text": "¿Qué comando de Git guarda temporalmente las modificaciones del directorio de trabajo que aún no han sido confirmadas en un commit, dejando el árbol de trabajo completamente limpio?",
    "options": [
      "git stash",
      "git clean -f",
      "git reset --hard",
      "git checkout ."
    ],
    "correctIndex": 0,
    "explanation": "'git stash' apila el trabajo en progreso en un almacén temporal (stash stack), permitiendo cambiar de rama de urgencia y luego recuperar los cambios con 'git stash pop'.",
    "skill": "Flujos de Trabajo en Git",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Control de Versiones",
    "subtopic": "Comando git stash"
  },
  {
    "id": "inf-tec-34",
    "sectionId": 1,
    "number": 34,
    "text": "Al ejecutar 'git rebase -i HEAD~3' (rebase interactivo), ¿qué instrucción en el editor permite combinar un commit con el anterior fusionando sus cambios y descartando el mensaje de commit secundario?",
    "options": [
      "fixup (f)",
      "pick (p)",
      "reword (r)",
      "drop (d)"
    ],
    "correctIndex": 0,
    "explanation": "'fixup' (o 'squash' conservando el mensaje) amalgama los cambios del commit indicado en el commit predecesor, útil para limpiar historiales antes de abrir un Pull Request.",
    "skill": "Historial Limpio en Git",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Git Avanzado",
    "subtopic": "Rebase Interactivo (fixup / squash)"
  },
  {
    "id": "inf-tec-35",
    "sectionId": 1,
    "number": 35,
    "text": "¿Qué son los 'Git Hooks' (ganchos de Git) alojados en el directorio .git/hooks/?",
    "options": [
      "Scripts ejecutables que Git dispara automáticamente antes o después de eventos clave como commit, push o merge (ej. pre-commit para linter y pruebas)",
      "Iconos gráficos de la interfaz de GitHub Desktop",
      "Servidores proxy que aceleran la descarga de repositorios",
      "Conectores de hardware para sincronizar discos externos"
    ],
    "correctIndex": 0,
    "explanation": "Los hooks permiten automatizar políticas de calidad locales o remotas, por ejemplo ejecutando linters, formateadores o validadores de formato de mensajes antes de permitir 'git commit'.",
    "skill": "Automatización con Git",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Flujos de Trabajo en Git",
    "subtopic": "Git Hooks (pre-commit, pre-push)"
  },
  {
    "id": "inf-tec-36",
    "sectionId": 1,
    "number": 36,
    "text": "¿Cuál es la diferencia de impacto entre 'git reset --soft', 'git reset --mixed' y 'git reset --hard' aplicados a un commit previo?",
    "options": [
      "--soft preserva los cambios en el Staging Area; --mixed los preserva en el directorio de trabajo (Working Directory); --hard destruye y descarta todos los cambios descartándolos por completo",
      "--soft borra el repositorio y --hard lo sube a la nube",
      "--mixed solo borra archivos ocultos",
      "Los tres comandos producen exactamente el mismo resultado en disco"
    ],
    "correctIndex": 0,
    "explanation": "--soft mueve HEAD dejando el índice intacto; --mixed (defecto) mueve HEAD y vacía el índice manteniendo archivos locales; --hard sobreescribe HEAD, índice y directorio de trabajo al estado del commit.",
    "skill": "Gestión de Historial en Git",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Comandos de Reversión",
    "subtopic": "Modalidades de git reset"
  },
  {
    "id": "inf-tec-37",
    "sectionId": 1,
    "number": 37,
    "text": "En un equipo de desarrollo, ¿cuál es el principio central del flujo de trabajo 'Trunk-Based Development' frente a 'GitFlow'?",
    "options": [
      "Todos los desarrolladores integran pequeños cambios frecuentemente directo a una única rama principal ('trunk' o main) varias veces al día, evitando ramas de características de larga duración",
      "Se crea una rama distinta para cada día del mes que nunca se fusiona",
      "Nadie puede hacer commit sin autorización notarial",
      "Se trabaja exclusivamente sin conexión a internet y con copias en memorias USB"
    ],
    "correctIndex": 0,
    "explanation": "Trunk-Based Development previene el 'infierno de merges' (merge hell) promoviendo integraciones continuas y el uso de Feature Flags para ocultar funcionalidades en desarrollo.",
    "skill": "Estrategias de Ramificación",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Metodologías de Control de Versiones",
    "subtopic": "Trunk-Based Development vs GitFlow"
  },
  {
    "id": "inf-tec-38",
    "sectionId": 1,
    "number": 38,
    "text": "¿Qué archivo especial de configuración en la raíz de un repositorio Git se utiliza para instruir al sistema que ignore intencionalmente archivos compilados, logs y dependencias como node_modules/?",
    "options": [
      ".gitignore",
      ".gitattributes",
      ".gitmodules",
      ".gitconfig"
    ],
    "correctIndex": 0,
    "explanation": ".gitignore lista patrones de nombres de archivos y directorios que Git debe omitir permanentemente del seguimiento de cambios y del staging.",
    "skill": "Configuración de Repositorios",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Fundamentos de Git",
    "subtopic": "Archivo .gitignore"
  },
  {
    "id": "inf-tec-39",
    "sectionId": 1,
    "number": 39,
    "text": "¿Para qué sirve el comando 'git reflog' cuando un desarrollador ha perdido accidentalmente commits tras un 'git reset --hard' erróneo?",
    "options": [
      "Muestra el historial cronológico completo de todos los movimientos de HEAD en el repositorio local, permitiendo recuperar commits huérfanos que ya no figuran en ninguna rama",
      "Envía un correo de auxilio al soporte técnico de GitHub",
      "Restaura el sistema operativo a un punto de restauración anterior",
      "Elimina permanentemente todo el historial corrupto"
    ],
    "correctIndex": 0,
    "explanation": "El reflog registra cada cambio de puntero de HEAD durante varias semanas; localizando el SHA anterior es posible revivir commits supuestamente perdidos con 'git branch rescate <SHA>'.",
    "skill": "Recuperación de Desastres en Git",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Herramientas Avanzadas de Git",
    "subtopic": "Comando git reflog"
  },
  {
    "id": "inf-tec-40",
    "sectionId": 1,
    "number": 40,
    "text": "¿Qué mecanismo de Git permite incrustar y gestionar un repositorio Git externo dentro de un subdirectorio de otro repositorio Git manteniendo historiales independientes?",
    "options": [
      "Git Submodules (git submodule)",
      "Git Rebase",
      "Git Clone anidado sin control",
      "Git Stash recursivo"
    ],
    "correctIndex": 0,
    "explanation": "Los submódulos mantienen un puntero específico a un commit exacto del repositorio hijo, permitiendo compartir bibliotecas comunes entre diferentes proyectos principales.",
    "skill": "Gestión de Dependencias en Git",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Arquitectura de Repositorios",
    "subtopic": "Git Submodules"
  },
  {
    "id": "inf-tec-41",
    "sectionId": 1,
    "number": 41,
    "text": "En la arquitectura de APIs REST, ¿qué significa que una operación HTTP sea 'Idempotente'?",
    "options": [
      "Que ejecutar la misma petición múltiples veces consecutivas produce exactamente el mismo efecto en el estado del servidor que ejecutarla una sola vez",
      "Que la petición tarda menos de 10 milisegundos en responder",
      "Que la API solo acepta conexiones cifradas por VPN",
      "Que la operación no requiere parámetros en la URL"
    ],
    "correctIndex": 0,
    "explanation": "GET, PUT y DELETE son idempotentes por especificación RFC: borrar un recurso existente una o diez veces deja el sistema en el mismo estado final (recurso ausente). POST no es idempotente porque cada llamada crea un nuevo recurso.",
    "skill": "Diseño de APIs REST",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Protocolo HTTP y REST",
    "subtopic": "Idempotencia en Verbos HTTP"
  },
  {
    "id": "inf-tec-42",
    "sectionId": 1,
    "number": 42,
    "text": "¿Qué cabecera HTTP envía un navegador web en una petición CORS previa de verificación 'Preflight' (método OPTIONS) para consultar si el servidor autoriza una llamada con métodos o cabeceras personalizadas desde otro origen?",
    "options": [
      "Access-Control-Request-Method",
      "Sec-Fetch-Origin-Only",
      "Authorization-Request-Headers",
      "X-Forwarded-For"
    ],
    "correctIndex": 0,
    "explanation": "El preflight OPTIONS envía Access-Control-Request-Method y Access-Control-Request-Headers; el servidor responde con Access-Control-Allow-Origin y Access-Control-Allow-Methods confirmando los permisos.",
    "skill": "Seguridad y Políticas de Navegador",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "CORS (Cross-Origin Resource Sharing)",
    "subtopic": "Peticiones Preflight (OPTIONS)"
  },
  {
    "id": "inf-tec-43",
    "sectionId": 1,
    "number": 43,
    "text": "En una API web, ¿cuál es la diferencia principal entre un 'Webhook' y el sondeo periódico tradicional ('Polling')?",
    "options": [
      "El Polling consulta repetidamente al servidor si hay nuevos datos a intervalos regulares; el Webhook notifica inmediatamente al cliente enviando una petición HTTP POST en tiempo real tan pronto ocurre el evento",
      "El Webhook solo funciona con cables de fibra óptica",
      "El Polling es bidireccional y el Webhook unidireccional por radiofrecuencia",
      "No existe diferencia, son sinónimos técnicos"
    ],
    "correctIndex": 0,
    "explanation": "El webhook es un modelo 'push' reactivo impulsado por eventos que ahorra millones de peticiones innecesarias de comprobación en vacío comparado con el modelo 'pull' de polling.",
    "skill": "Arquitectura de Comunicaciones Web",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Integración de Sistemas",
    "subtopic": "Webhooks vs Polling"
  },
  {
    "id": "inf-tec-44",
    "sectionId": 1,
    "number": 44,
    "text": "¿Qué ventaja ofrece GraphQL frente a una arquitectura REST tradicional al consumir información en aplicaciones cliente?",
    "options": [
      "Permite al cliente solicitar exactamente los campos de datos requeridos en una sola consulta, eliminando el sobre-suministro (over-fetching) y el sub-suministro (under-fetching)",
      "Reemplaza el protocolo TCP por ondas de radio",
      "Elimina por completo la necesidad de servidores backend",
      "Hace que el código JavaScript sea inmune a errores de sintaxis"
    ],
    "correctIndex": 0,
    "explanation": "Con GraphQL el cliente define el esquema de respuesta deseado en un único endpoint POST, evitando llamadas encadenadas a múltiples endpoints REST para reunir datos relacionados.",
    "skill": "Tecnologías de APIs Modernas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Arquitectura de Servicios",
    "subtopic": "GraphQL vs REST"
  },
  {
    "id": "inf-tec-45",
    "sectionId": 1,
    "number": 45,
    "text": "¿En qué flujo de autorización OAuth 2.0 (Grant Type) una aplicación web Single-Page Application (SPA) o móvil nativa obtiene tokens de forma segura sin requerir un client secret confidencial?",
    "options": [
      "Authorization Code Flow con PKCE (Proof Key for Code Exchange)",
      "Implicit Flow (obsoleto e inseguro)",
      "Resource Owner Password Credentials Grant",
      "Client Credentials Grant para comunicación servidor a servidor"
    ],
    "correctIndex": 0,
    "explanation": "PKCE mitiga el ataque de interceptación del código de autorización generando un code_verifier dinámico y un code_challenge hash, siendo el estándar moderno obligatorio para clientes públicos.",
    "skill": "Protocolos de Autenticación",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Seguridad y OAuth 2.0",
    "subtopic": "Authorization Code Flow con PKCE"
  },
  {
    "id": "inf-tec-46",
    "sectionId": 1,
    "number": 46,
    "text": "¿Para qué sirve la cabecera HTTP 'ETag' (Entity Tag) y su complementaria 'If-None-Match'?",
    "options": [
      "Permite validación condicional de caché: el servidor envía un identificador único del contenido; si el cliente reenvía ese valor y el recurso no cambió, responde con 304 Not Modified sin transferir el cuerpo",
      "Cifra los correos electrónicos enviados por el servidor",
      "Registra la dirección física del router del usuario",
      "Mide la temperatura de los discos duros del datacenter"
    ],
    "correctIndex": 0,
    "explanation": "ETag actúa como una huella digital (hash) del recurso. Si el hash coincide, la respuesta 304 Not Modified ahorra ancho de banda evitando reenviar bytes innecesarios.",
    "skill": "Optimización HTTP",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Gestión de Caché Web",
    "subtopic": "Cabeceras ETag y 304 Not Modified"
  },
  {
    "id": "inf-tec-47",
    "sectionId": 1,
    "number": 47,
    "text": "¿Qué técnica de limitación de tasa (Rate Limiting) restringe el número de peticiones permitidas por cliente en una API para prevenir abusos y ataques de denegación de servicio?",
    "options": [
      "Algoritmo de Cubo de Fichas (Token Bucket o Leaky Bucket)",
      "Compresión gzip",
      "Paginación por offset",
      "Transformación XSLT"
    ],
    "correctIndex": 0,
    "explanation": "Token Bucket asigna tokens a una tasa constante; cada petición consume un token. Si el cubo se vacía, la API responde con HTTP 429 Too Many Requests hasta que se regeneren tokens.",
    "skill": "Protección de APIs",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Seguridad y Resiliencia",
    "subtopic": "Rate Limiting (Token Bucket)"
  },
  {
    "id": "inf-tec-48",
    "sectionId": 1,
    "number": 48,
    "text": "¿Qué especificación formal abierta estandariza la descripción interactiva de contratos de APIs RESTful mediante documentos legibles en YAML o JSON?",
    "options": [
      "OpenAPI Specification (anteriormente Swagger)",
      "WSDL de SOAP",
      "XML DTD",
      "Schema.org para microdatos"
    ],
    "correctIndex": 0,
    "explanation": "OpenAPI define rutas, parámetros de entrada, esquemas de payload y respuestas HTTP, permitiendo generar automáticamente documentación interactiva, mocks y SDKs de cliente.",
    "skill": "Documentación de APIs",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Contratos de Servicios",
    "subtopic": "OpenAPI / Swagger"
  },
  {
    "id": "inf-tec-49",
    "sectionId": 1,
    "number": 49,
    "text": "¿Cuál es la función del mecanismo 'Server-Sent Events' (SSE) comparado con 'WebSockets' en navegadores web?",
    "options": [
      "SSE es un protocolo unidireccional ligero sobre HTTP estándar donde el servidor empuja eventos de texto continuo al cliente; WebSockets es un protocolo bidireccional full-duplex sobre una conexión TCP persistente propia",
      "SSE requiere instalar software adicional en el cliente y WebSockets no",
      "WebSockets solo funciona en servidores Windows",
      "SSE no soporta reconexión automática"
    ],
    "correctIndex": 0,
    "explanation": "SSE utiliza una conexión HTTP de larga duración (Content-Type: text/event-stream) con reconexión automática nativa en el navegador, ideal para feeds de noticias, cotizaciones o streaming de IA donde el cliente solo consume.",
    "skill": "Protocolos en Tiempo Real",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Comunicaciones en Tiempo Real",
    "subtopic": "Server-Sent Events (SSE) vs WebSockets"
  },
  {
    "id": "inf-tec-50",
    "sectionId": 1,
    "number": 50,
    "text": "¿Qué cabecera de respuesta HTTP 'Content-Security-Policy' (CSP) previene la ejecución de scripts maliciosos inyectados por atacantes en ataques XSS?",
    "options": [
      "Restringe y declara explícitamente los orígenes y dominios de confianza desde los cuales el navegador tiene permiso para cargar y ejecutar scripts, estilos, imágenes y fuentes",
      "Cifra la conexión de red con una VPN de hardware",
      "Impide que el usuario cierre la ventana del navegador",
      "Borra las contraseñas guardadas en la memoria local"
    ],
    "correctIndex": 0,
    "explanation": "CSP instruye al motor de renderizado del navegador a bloquear inline-scripts no autorizados y scripts de dominios no incluidos en la lista blanca, reduciendo drásticamente la superficie de explotación XSS.",
    "skill": "Seguridad en Navegadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Políticas de Seguridad Web",
    "subtopic": "Content-Security-Policy (CSP)"
  },
  {
    "id": "inf-tec-51",
    "sectionId": 1,
    "number": 51,
    "text": "En SQL, ¿cuál es la diferencia entre la cláusula 'WHERE' y la cláusula 'HAVING'?",
    "options": [
      "'WHERE' filtra filas individuales antes de que se realice la agregación; 'HAVING' filtra grupos de filas después de que se ha aplicado la cláusula 'GROUP BY' y sus funciones de agregación (COUNT, SUM, AVG)",
      "'HAVING' solo se usa para ordenar alfabéticamente",
      "'WHERE' no admite operadores de comparación como > o <",
      "Ambas cláusulas son totalmente intercambiables sin restricciones"
    ],
    "correctIndex": 0,
    "explanation": "No es posible utilizar funciones agregadas como SUM(monto) > 1000 en el WHERE porque el agrupamiento aún no ha ocurrido; ese filtro debe formularse obligatoriamente en el HAVING.",
    "skill": "Consultas SQL Avanzadas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Bases de Datos Relacionales",
    "subtopic": "Cláusula WHERE vs HAVING"
  },
  {
    "id": "inf-tec-52",
    "sectionId": 1,
    "number": 52,
    "text": "¿Qué comando SQL se utiliza para inspeccionar el plan de ejecución generado por el optimizador del motor de base de datos para una consulta determinada?",
    "options": [
      "EXPLAIN (o EXPLAIN ANALYZE)",
      "SHOW SOURCE",
      "INSPECT QUERY",
      "DESCRIBE CODE"
    ],
    "correctIndex": 0,
    "explanation": "'EXPLAIN ANALYZE' muestra si el motor resolvió la consulta mediante un escaneo secuencial completo de tabla (Seq Scan) o utilizó índices (Index Scan / Bitmap Index Scan), detallando costos y tiempos reales.",
    "skill": "Optimización de Bases de Datos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Planes de Ejecución",
    "subtopic": "Comando EXPLAIN ANALYZE"
  },
  {
    "id": "inf-tec-53",
    "sectionId": 1,
    "number": 53,
    "text": "En una base de datos relacional, ¿qué tipo de índice incluye no solo la clave de búsqueda sino también columnas adicionales para responder a una consulta directamente desde el índice sin tocar las páginas de datos de la tabla (Index-Only Scan)?",
    "options": [
      "Índice de Cobertura (Covering Index con cláusula INCLUDE)",
      "Índice de texto invertido",
      "Índice espacial R-Tree",
      "Clave foránea estándar"
    ],
    "correctIndex": 0,
    "explanation": "Un Covering Index almacena columnas de consulta frecuentes en los nodos hoja del índice, permitiendo al motor devolver los resultados sin realizar accesos aleatorios adicionales a la tabla en disco.",
    "skill": "Indexación en Motores SQL",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Bases de Datos Relacionales",
    "subtopic": "Covering Indexes e Index-Only Scan"
  },
  {
    "id": "inf-tec-54",
    "sectionId": 1,
    "number": 54,
    "text": "¿Qué garantiza el nivel de aislamiento de transacciones 'SERIALIZABLE' frente a 'READ COMMITTED' en un motor relacional?",
    "options": [
      "Garantiza el máximo aislamiento posible, asegurando que la ejecución concurrente de transacciones produzca exactamente el mismo resultado que si se hubiesen ejecutado en estricta secuencia una detrás de otra",
      "Hace que las transacciones se ejecuten en discos SSD en lugar de RAM",
      "Permite a cualquier usuario leer datos sin autenticarse",
      "Aumenta la velocidad de las consultas a costa de perder datos"
    ],
    "correctIndex": 0,
    "explanation": "SERIALIZABLE elimina anomalías de concurrencia como Dirty Reads, Non-Repeatable Reads, Phantom Reads y Write Skew, aunque incrementa el riesgo de abortos por conflictos de serialización.",
    "skill": "Transacciones y Concurrencia",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Aislamiento ACID",
    "subtopic": "Nivel de Aislamiento SERIALIZABLE"
  },
  {
    "id": "inf-tec-55",
    "sectionId": 1,
    "number": 55,
    "text": "En PostgreSQL, ¿qué herramienta de línea de comandos se utiliza para generar un respaldo lógico completo de una base de datos en un archivo de script SQL o formato tar/custom?",
    "options": [
      "pg_dump",
      "pg_restore",
      "psql -d backup",
      "pg_ctl backup"
    ],
    "correctIndex": 0,
    "explanation": "pg_dump extrae la estructura (DDL) y los datos (DML) de una base de datos de forma consistente incluso mientras la base de datos está siendo leída y escrita concurrentemente.",
    "skill": "Administración de PostgreSQL",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Respaldos y Recuperación",
    "subtopic": "Comando pg_dump"
  },
  {
    "id": "inf-tec-56",
    "sectionId": 1,
    "number": 56,
    "text": "¿Cuál es la función del comando 'VACUUM' en PostgreSQL?",
    "options": [
      "Reclamar espacio en disco ocupado por tuplas muertas (registros actualizados o eliminados por el control de concurrencia multiversión MVCC) y actualizar estadísticas para el optimizador",
      "Eliminar todas las tablas de la base de datos",
      "Comprimir archivos de logs en formato zip",
      "Reiniciar el servicio del servidor"
    ],
    "correctIndex": 0,
    "explanation": "En MVCC, una actualización o eliminación marca registros viejos como invisibles sin borrarlos físicamente. VACUUM limpia estos 'dead tuples' e impide el crecimiento desmedido (table bloat).",
    "skill": "Mantenimiento de Bases de Datos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "PostgreSQL Internals",
    "subtopic": "Comando VACUUM y Tuplas Muertas"
  },
  {
    "id": "inf-tec-57",
    "sectionId": 1,
    "number": 57,
    "text": "En diseño relacional, ¿qué regla formal define la Tercera Forma Normal (3NF)?",
    "options": [
      "Estar en 2NF y garantizar que no existan dependencias funcionales transitivas entre atributos no clave (ningún atributo no clave debe depender de otro atributo no clave)",
      "Tener únicamente columnas de tipo entero",
      "No admitir valores numéricos negativos",
      "Tener exactamente tres tablas por base de datos"
    ],
    "correctIndex": 0,
    "explanation": "3NF erradica la redundancia transitiva: todo atributo que no forma parte de la clave candidata debe depender directa y exclusivamente de la clave primaria (la clave, toda la clave y nada más que la clave).",
    "skill": "Normalización de Bases de Datos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Diseño Relacional",
    "subtopic": "Tercera Forma Normal (3NF)"
  },
  {
    "id": "inf-tec-58",
    "sectionId": 1,
    "number": 58,
    "text": "¿Qué tipo de réplica de base de datos mantiene sincronizado un nodo secundario de solo lectura recibiendo continuamente los registros del log de transacciones (Write-Ahead Log - WAL) desde el nodo primario?",
    "options": [
      "Replicación por Streaming de WAL (Streaming Replication)",
      "Replicación manual por correo electrónico",
      "Copia de seguridad en cinta magnética semanal",
      "Sincronización por protocolo FTP pasivo"
    ],
    "correctIndex": 0,
    "explanation": "Streaming Replication transfiere los registros WAL en tiempo casi real al servidor standby, permitiendo balancear lecturas y ofrecer conmutación por error (failover) con mínimo RPO.",
    "skill": "Alta Disponibilidad en Bases de Datos",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Arquitectura de Replicación",
    "subtopic": "Replicación WAL Streaming"
  },
  {
    "id": "inf-tec-59",
    "sectionId": 1,
    "number": 59,
    "text": "¿Qué sentencia SQL DDL añade una restricción de clave foránea a una tabla existente vinculándola con la tabla 'departamentos'?",
    "options": [
      "ALTER TABLE empleados ADD CONSTRAINT fk_depto FOREIGN KEY (depto_id) REFERENCES departamentos(id);",
      "UPDATE TABLE empleados SET fk_depto = departamentos.id;",
      "INSERT INTO CONSTRAINT fk_depto ON empleados;",
      "CREATE LINK empleados TO departamentos ON id;"
    ],
    "correctIndex": 0,
    "explanation": "ALTER TABLE permite modificar el esquema añadiendo una restricción (CONSTRAINT) de clave foránea que preserva la integridad referencial rechazando claves inexistentes.",
    "skill": "Lenguaje de Definición de Datos (DDL)",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Integridad de Datos",
    "subtopic": "Restricciones de Clave Foránea"
  },
  {
    "id": "inf-tec-60",
    "sectionId": 1,
    "number": 60,
    "text": "¿Para qué se utiliza una 'Función de Ventana' (Window Function como ROW_NUMBER(), RANK() o DENSE_RANK()) con la cláusula 'OVER (PARTITION BY ... ORDER BY ...)' en SQL?",
    "options": [
      "Para realizar cálculos analíticos a través de un conjunto de filas relacionadas con la fila actual sin colapsar las filas individuales en un único registro como hace GROUP BY",
      "Para abrir una ventana gráfica emergente en el navegador web",
      "Para cambiar el tamaño de la ventana de la terminal de comandos",
      "Para ejecutar la base de datos en segundo plano"
    ],
    "correctIndex": 0,
    "explanation": "Las window functions conservan la granularidad de cada fila individual al mismo tiempo que computan acumulados, numeraciones de ranking o promedios móviles sobre particiones definidas.",
    "skill": "SQL Analítico Avanzado",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Consultas Analíticas",
    "subtopic": "Funciones de Ventana (Window Functions)"
  },
  {
    "id": "inf-tec-61",
    "sectionId": 1,
    "number": 61,
    "text": "En un sistema operativo GNU/Linux, ¿qué comando de 'systemd' se utiliza para configurar un servicio (daemon) para que arranque automáticamente durante el inicio del sistema?",
    "options": [
      "systemctl enable <servicio>",
      "systemctl start <servicio>",
      "systemctl status <servicio>",
      "systemctl reload <servicio>"
    ],
    "correctIndex": 0,
    "explanation": "'systemctl enable' crea los enlaces simbólicos necesarios en los directorios de destino (targets) para iniciar el servicio en el arranque. 'systemctl start' solo lo inicia en la sesión actual.",
    "skill": "Administración con systemd",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Administración de Sistemas Linux",
    "subtopic": "Gestión de Servicios con systemctl"
  },
  {
    "id": "inf-tec-62",
    "sectionId": 1,
    "number": 62,
    "text": "¿Qué representan exactamente los permisos octales '755' asignados a un archivo o script ejecutable en Linux con el comando 'chmod 755 script.sh'?",
    "options": [
      "Propietario: lectura, escritura y ejecución (rwx = 7); Grupo: lectura y ejecución (r-x = 5); Otros: lectura y ejecución (r-x = 5)",
      "Todos los usuarios tienen acceso total de modificación",
      "El archivo solo puede ser leído por el usuario root",
      "El archivo está cifrado con una clave de 755 bits"
    ],
    "correctIndex": 0,
    "explanation": "El valor binario 111 (7) otorga r(4)+w(2)+x(1)=7 al propietario; 101 (5) otorga r(4)+x(1)=5 al grupo y al resto del mundo, protegiéndolo de modificaciones no autorizadas.",
    "skill": "Permisos en Linux",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Seguridad de Archivos",
    "subtopic": "Permisos Octales (chmod 755)"
  },
  {
    "id": "inf-tec-63",
    "sectionId": 1,
    "number": 63,
    "text": "¿Qué función cumple el bit especial 'Sticky Bit' (representado por 't' o un 1 inicial, ej. chmod 1777) aplicado a un directorio compartido como /tmp en Linux?",
    "options": [
      "Permite a cualquier usuario crear y escribir archivos en el directorio, pero impide que un usuario elimine o renombre archivos pertenecientes a otros usuarios",
      "Impide que los archivos se borren incluso por el administrador root",
      "Comprime automáticamente todos los archivos temporales",
      "Hace que el directorio sea invisible en exploradores de archivos"
    ],
    "correctIndex": 0,
    "explanation": "El Sticky Bit protege la convivencia en directorios públicos como /tmp: solo el propietario del archivo (o el superusuario root) puede borrar o modificar su propio archivo dentro del directorio.",
    "skill": "Permisos Especiales en Linux",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Seguridad del Sistema de Archivos",
    "subtopic": "El Sticky Bit en Directorios Compartidos"
  },
  {
    "id": "inf-tec-64",
    "sectionId": 1,
    "number": 64,
    "text": "¿Qué comando se utiliza en Linux para consultar en tiempo real los registros y logs estructurados generados por el servicio systemd-journald (ej. del servicio nginx)?",
    "options": [
      "journalctl -u nginx -f",
      "cat /var/log/messages",
      "dmesg -k",
      "tail -n 100 /dev/null"
    ],
    "correctIndex": 0,
    "explanation": "journalctl centraliza los logs binarios de systemd; el modificador '-u' filtra por unidad de servicio y '-f' (follow) muestra las nuevas entradas en vivo de forma interactiva.",
    "skill": "Monitoreo y Logs en Linux",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Administración con systemd",
    "subtopic": "Comando journalctl"
  },
  {
    "id": "inf-tec-65",
    "sectionId": 1,
    "number": 65,
    "text": "En un archivo crontab de Linux, ¿qué programación horaria representa la siguiente expresión: '0 2 * * 1'?",
    "options": [
      "Ejecutarse a las 02:00 horas de la madrugada todos los días lunes",
      "Ejecutarse cada 2 minutos todos los días",
      "Ejecutarse a las 01:02 del primer día de cada mes",
      "Ejecutarse 2 veces por hora"
    ],
    "correctIndex": 0,
    "explanation": "Los 5 campos de cron son: minuto (0), hora (2), día del mes (*), mes (*) y día de la semana (1 = lunes), fijando la tarea para las 2:00 AM cada lunes.",
    "skill": "Automatización de Tareas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Programación de Tareas con Cron",
    "subtopic": "Sintaxis de Crontab"
  },
  {
    "id": "inf-tec-66",
    "sectionId": 1,
    "number": 66,
    "text": "¿Qué directiva en el archivo de configuración /etc/ssh/sshd_config es primordial para robustecer (hardening) la seguridad de un servidor SSH de producción?",
    "options": [
      "PasswordAuthentication no y PermitRootLogin no",
      "Port 22 y AllowAllUsers yes",
      "MaxAuthTries 100 y X11Forwarding yes",
      "PermitEmptyPasswords yes"
    ],
    "correctIndex": 0,
    "explanation": "Deshabilitar la autenticación por contraseña obliga al uso exclusivo de claves criptográficas SSH (RSA/Ed25519), y prohibir el login directo como root neutraliza los ataques masivos de fuerza bruta.",
    "skill": "Seguridad y Hardening en Servidores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Seguridad SSH",
    "subtopic": "Hardening de sshd_config"
  },
  {
    "id": "inf-tec-67",
    "sectionId": 1,
    "number": 67,
    "text": "¿Qué comando de terminal permite monitorear procesos en tiempo real mostrando consumo interactivo de CPU, memoria, swap, carga promedio (load average) y PID?",
    "options": [
      "top (o htop)",
      "ps -ef",
      "free -m",
      "uptime"
    ],
    "correctIndex": 0,
    "explanation": "top y htop actualizan dinámicamente la lista de procesos activos ordenada por porcentaje de CPU o memoria, permitiendo identificar procesos bloqueados o con consumo desmedido.",
    "skill": "Monitoreo de Procesos",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Herramientas de Rendimiento",
    "subtopic": "Comandos top y htop"
  },
  {
    "id": "inf-tec-68",
    "sectionId": 1,
    "number": 68,
    "text": "¿Para qué sirve el comando 'lsof' (List Open Files) en la administración y diagnóstico de sistemas Linux?",
    "options": [
      "Para listar todos los archivos abiertos por los procesos del sistema, incluyendo descriptores de archivos, sockets de red y puertos TCP/UDP activos",
      "Para buscar archivos de texto duplicados en el disco",
      "Para formatear discos duros en formato ext4",
      "Para instalar controladores de video propietarios"
    ],
    "correctIndex": 0,
    "explanation": "En Unix todo es un archivo. 'lsof -i :80' revela inmediatamente qué proceso exacto tiene tomado el puerto 80 impidiendo iniciar un servidor web.",
    "skill": "Diagnóstico del Sistema",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Herramientas de Diagnóstico",
    "subtopic": "Comando lsof"
  },
  {
    "id": "inf-tec-69",
    "sectionId": 1,
    "number": 69,
    "text": "¿Qué función cumple el comando de red 'ip route' en distribuciones Linux modernas, reemplazando al comando obsoleto 'route'?",
    "options": [
      "Ver y configurar la tabla de enrutamiento IP del kernel del sistema operativo",
      "Cambiar la dirección MAC de la tarjeta de red",
      "Escanear puertos abiertos en servidores remotos",
      "Descargar páginas web mediante comandos curl"
    ],
    "correctIndex": 0,
    "explanation": "El comando 'ip route' pertenece a la suite iproute2 y gestiona las rutas estáticas, puertas de enlace predeterminadas (default gateways) y métricas de red del kernel.",
    "skill": "Redes en Linux",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Enrutamiento IP",
    "subtopic": "Comando ip route"
  },
  {
    "id": "inf-tec-70",
    "sectionId": 1,
    "number": 70,
    "text": "¿Qué comando de manipulación de texto en línea de comandos utiliza expresiones regulares para buscar y reemplazar patrones dentro de un archivo o flujo sin requerir un editor interactivo?",
    "options": [
      "sed (Stream Editor)",
      "grep",
      "cat",
      "echo"
    ],
    "correctIndex": 0,
    "explanation": "sed procesa flujos de texto línea a línea aplicando comandos de sustitución como 'sed -i s/antiguo/nuevo/g archivo.txt', esencial en scripts de despliegue automatizado.",
    "skill": "Shell Scripting y Filtros Unix",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Herramientas de Texto Unix",
    "subtopic": "Editor de Flujo sed"
  },
  {
    "id": "inf-tec-71",
    "sectionId": 1,
    "number": 71,
    "text": "¿Qué herramienta moderna de inspección de sockets de red reemplazó al comando tradicional 'netstat' en sistemas Linux?",
    "options": [
      "ss (Socket Statistics)",
      "traceroute",
      "ifconfig",
      "arp"
    ],
    "correctIndex": 0,
    "explanation": "'ss -tulpn' consulta directamente la información del espacio del kernel en lugar de parsear archivos lentos en /proc, listando puertos TCP y UDP en escucha de manera instantánea.",
    "skill": "Diagnóstico de Redes",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Herramientas de Red",
    "subtopic": "Comando ss (Socket Statistics)"
  },
  {
    "id": "inf-tec-72",
    "sectionId": 1,
    "number": 72,
    "text": "¿Qué comando de captura de paquetes en línea de comandos permite capturar e inspeccionar paquetes de red en tiempo real en una interfaz de red Linux?",
    "options": [
      "tcpdump",
      "ping",
      "nmap",
      "curl"
    ],
    "correctIndex": 0,
    "explanation": "tcpdump intercepta el tráfico crudo de la red aplicando filtros booleanos de libpcap (ej. 'tcpdump -i eth0 port 443 -w captura.pcap') para su posterior análisis forense en Wireshark.",
    "skill": "Análisis de Tráfico de Red",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Seguridad y Diagnóstico de Red",
    "subtopic": "Captura de Paquetes con tcpdump"
  },
  {
    "id": "inf-tec-73",
    "sectionId": 1,
    "number": 73,
    "text": "¿Para qué sirve el comando 'dig' (Domain Information Groper) frente a 'ping' al depurar problemas de resolución de nombres de dominio?",
    "options": [
      "Consulta directamente a los servidores DNS y devuelve los registros específicos (A, AAAA, CNAME, MX, TXT) junto con tiempos de respuesta y banderas del protocolo DNS",
      "Mide la velocidad de bajada de internet en megabits",
      "Comprueba si la tarjeta de red tiene polvo",
      "Reinicia el router de la oficina remotamente"
    ],
    "correctIndex": 0,
    "explanation": "dig es la herramienta oficial de diagnóstico de DNS; desglosa las secciones QUESTION, ANSWER y AUTHORITY del paquete DNS permitiendo verificar servidores autoritativos y delegaciones.",
    "skill": "Diagnóstico DNS",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Protocolo DNS",
    "subtopic": "Comando dig y Resolución de Nombres"
  },
  {
    "id": "inf-tec-74",
    "sectionId": 1,
    "number": 74,
    "text": "¿Qué cortafuegos simplificado (frontend para iptables/nftables) es estándar en distribuciones como Ubuntu para gestionar reglas de red de forma sencilla?",
    "options": [
      "UFW (Uncomplicated Firewall)",
      "SELinux",
      "AppArmor",
      "Fail2ban"
    ],
    "correctIndex": 0,
    "explanation": "UFW ofrece comandos intuitivos como 'ufw allow 22/tcp' o 'ufw enable' para proteger el host sin lidiar con la compleja sintaxis de cadenas y tablas de iptables.",
    "skill": "Seguridad de Redes en Linux",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Cortafuegos (Firewalls)",
    "subtopic": "Configuración de UFW"
  },
  {
    "id": "inf-tec-75",
    "sectionId": 1,
    "number": 75,
    "text": "¿Qué protocolo de resolución de direcciones mapea una dirección lógica IPv4 conocida a una dirección física MAC de capa de enlace en una red local ethernet?",
    "options": [
      "ARP (Address Resolution Protocol)",
      "DHCP",
      "DNS",
      "ICMP"
    ],
    "correctIndex": 0,
    "explanation": "ARP emite una difusión (broadcast) 'Who has 192.168.1.1? Tell 192.168.1.50'; la máquina destino responde con un paquete unicast revelando su dirección MAC física para completar la trama ethernet.",
    "skill": "Protocolos de Red Capa 2/3",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Redes de Computadoras",
    "subtopic": "Protocolo ARP"
  },
  {
    "id": "inf-tec-76",
    "sectionId": 1,
    "number": 76,
    "text": "¿Qué tipo de ataque de red intercepta y altera el tráfico entre dos hosts engañando a sus tablas ARP locales con respuestas falsificadas?",
    "options": [
      "Envenenamiento de ARP (ARP Spoofing / ARP Cache Poisoning)",
      "Ataque de fuerza bruta SSH",
      "Inyección SQL",
      "Cross-Site Scripting (XSS)"
    ],
    "correctIndex": 0,
    "explanation": "El atacante emite paquetes ARP falsos asociando su propia dirección MAC con la IP del gateway, enrutando todo el tráfico de la víctima a través de su máquina (Man-in-the-Middle).",
    "skill": "Ataques de Red",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Seguridad en Redes Locales",
    "subtopic": "ARP Spoofing y Mitigación"
  },
  {
    "id": "inf-tec-77",
    "sectionId": 1,
    "number": 77,
    "text": "¿Cuál es la función del protocolo DHCP (Dynamic Host Configuration Protocol) y su proceso de cuatro pasos DORA?",
    "options": [
      "Discover -> Offer -> Request -> Acknowledge: asigna dinámicamente direcciones IP, máscaras de subred, puertas de enlace y servidores DNS a los clientes de la red",
      "Cifra los discos duros remotos de la empresa",
      "Descarga archivos por torrent a alta velocidad",
      "Detecta si los cables de red están rotos físicamente"
    ],
    "correctIndex": 0,
    "explanation": "DORA es la secuencia de intercambio mediante broadcasts y unicasts por los puertos UDP 67 y 68 que automatiza la configuración IP integral de cualquier nuevo dispositivo en la red.",
    "skill": "Servicios de Red",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Protocolo DHCP",
    "subtopic": "Ciclo DORA en DHCP"
  },
  {
    "id": "inf-tec-78",
    "sectionId": 1,
    "number": 78,
    "text": "¿Qué función cumple una VLAN (Virtual Local Area Network) en la infraestructura de switches de red de una organización?",
    "options": [
      "Segmenta una red física local en múltiples dominios de difusión lógicos independientes y aislados, mejorando la seguridad y reduciendo el tráfico innecesario",
      "Aumenta la velocidad física de la fibra óptica a 100 Gbps",
      "Permite compartir impresoras sin requerir cables",
      "Reemplaza el uso de direcciones IPv4 por nombres de usuario"
    ],
    "correctIndex": 0,
    "explanation": "Las VLANs (estándar IEEE 802.1Q) aíslan el tráfico entre departamentos (ej. Contabilidad vs Invitados) en el mismo switch físico; el tráfico entre VLANs solo puede comunicarse a través de un router o switch de capa 3.",
    "skill": "Diseño de Redes Conmutadas",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Infraestructura de Redes",
    "subtopic": "VLANs y Protocolo 802.1Q"
  },
  {
    "id": "inf-tec-79",
    "sectionId": 1,
    "number": 79,
    "text": "¿Cómo funciona el mecanismo NAT (Network Address Translation) y su variante NAPT/PAT (Port Address Translation) en un router doméstico o empresarial?",
    "options": [
      "Permite que múltiples dispositivos con direcciones IP privadas compartan una única dirección IP pública en internet mapeando las conexiones a través de números de puerto TCP/UDP únicos",
      "Traduce páginas web de inglés a español automáticamente",
      "Cambia el nombre de la red Wi-Fi cada 24 horas",
      "Borra el historial de navegación de todos los usuarios"
    ],
    "correctIndex": 0,
    "explanation": "PAT reescribe las cabeceras IP y números de puerto de los paquetes salientes manteniendo una tabla de estados; al regresar la respuesta, restablece la IP privada original del dispositivo interno.",
    "skill": "Enrutamiento y Traducción de Direcciones",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Arquitectura de Internet",
    "subtopic": "NAT y PAT (Port Address Translation)"
  },
  {
    "id": "inf-tec-80",
    "sectionId": 1,
    "number": 80,
    "text": "¿Qué técnica de seguridad de conmutación (Switching) bloquea puertos o descarta paquetes DHCP no autorizados para impedir que atacantes instalen servidores DHCP fraudulentos (Rogue DHCP) en la red?",
    "options": [
      "DHCP Snooping",
      "Port Mirroring",
      "Spanning Tree Protocol",
      "Trunking 802.1Q"
    ],
    "correctIndex": 0,
    "explanation": "DHCP Snooping clasifica los puertos del switch en 'trusted' (donde está conectado el DHCP legítimo) y 'untrusted'. Cualquier respuesta DHCP Offer originada en un puerto untrusted es descartada de inmediato.",
    "skill": "Seguridad en Conmutadores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Seguridad de Red Capa 2",
    "subtopic": "DHCP Snooping"
  },
  {
    "id": "inf-tec-81",
    "sectionId": 1,
    "number": 81,
    "text": "En un Dockerfile, ¿cuál es la diferencia fundamental entre la instrucción 'ENTRYPOINT' y la instrucción 'CMD'?",
    "options": [
      "'ENTRYPOINT' define el comando ejecutable principal invariable del contenedor; 'CMD' define los argumentos predeterminados que pueden ser fácilmente sobreescritos desde la línea de comandos al ejecutar 'docker run'",
      "'CMD' compila el kernel y 'ENTRYPOINT' solo copia archivos",
      "'ENTRYPOINT' solo funciona en imágenes de Windows",
      "Ambas instrucciones son sinónimos idénticos sin distinción en Docker"
    ],
    "correctIndex": 0,
    "explanation": "Al combinar ambos (ej. ENTRYPOINT ['nginx'] y CMD ['-g', 'daemon off;']), el contenedor actúa como un binario dedicado, permitiendo pasar banderas opcionales que sobreescriben CMD sin alterar el ejecutable de ENTRYPOINT.",
    "skill": "Creación de Contenedores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Tecnología de Contenedores",
    "subtopic": "Dockerfile (ENTRYPOINT vs CMD)"
  },
  {
    "id": "inf-tec-82",
    "sectionId": 1,
    "number": 82,
    "text": "¿Qué ventaja crítica de seguridad y eficiencia proporciona el patrón 'Multi-Stage Build' (construcción multietapa) en un Dockerfile?",
    "options": [
      "Permite usar una imagen base pesada con SDKs y compiladores en la etapa de construcción, y luego copiar únicamente el artefacto binario final a una imagen mínima y limpia (como Alpine o Scratch) para producción",
      "Permite ejecutar cinco contenedores simultáneamente en el mismo puerto",
      "Elimina la necesidad de usar Linux en los servidores",
      "Hace que las imágenes de Docker funcionen sin procesador"
    ],
    "correctIndex": 0,
    "explanation": "Multi-stage builds reducen el tamaño de las imágenes finales de cientos de megabytes a pocos megabytes y eliminan herramientas de desarrollo que podrían ser explotadas por atacantes en producción.",
    "skill": "Optimización de Imágenes Docker",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Docker y Empaquetado",
    "subtopic": "Multi-Stage Builds en Docker"
  },
  {
    "id": "inf-tec-83",
    "sectionId": 1,
    "number": 83,
    "text": "¿Cuál es la diferencia entre un 'Named Volume' de Docker y un 'Bind Mount'?",
    "options": [
      "Un Named Volume es gestionado enteramente por Docker dentro del almacenamiento interno (/var/lib/docker/volumes/) aislado del host; un Bind Mount vincula directamente una carpeta o archivo específico del sistema de archivos del host al contenedor",
      "Los Named Volumes se borran cada vez que el contenedor se apaga",
      "Los Bind Mounts solo admiten lectura de imágenes JPEG",
      "Los Named Volumes no funcionan en servidores Linux"
    ],
    "correctIndex": 0,
    "explanation": "Los volúmenes nombrados son la opción recomendada para bases de datos y persistencia porque Docker gestiona permisos, controladores y respaldos sin acoplarse a la estructura de rutas del sistema operativo anfitrión.",
    "skill": "Almacenamiento en Contenedores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Persistencia en Docker",
    "subtopic": "Docker Volumes vs Bind Mounts"
  },
  {
    "id": "inf-tec-84",
    "sectionId": 1,
    "number": 84,
    "text": "¿Qué primitivas del kernel de Linux son los pilares fundamentales que hacen posible el aislamiento de los contenedores Docker?",
    "options": [
      "Namespaces (aíslan recursos como procesos, red, usuarios y puntos de montaje) y cgroups (limitan y controlan el uso de recursos de CPU, memoria y E/S)",
      "La memoria swap y el ventilador del CPU",
      "Los cables SATA y las tarjetas gráficas",
      "El gestor de arranque GRUB y la partición EFI"
    ],
    "correctIndex": 0,
    "explanation": "Los contenedores no son máquinas virtuales completas con hipervisor: son procesos nativos de Linux aislados por Namespaces (visibilidad) y acotados por Control Groups (límites de consumo de recursos).",
    "skill": "Arquitectura Interna de Contenedores",
    "difficulty": "Desafiante",
    "educationalLevel": "Técnico",
    "topic": "Linux Internals y Docker",
    "subtopic": "Namespaces y Control Groups (cgroups)"
  },
  {
    "id": "inf-tec-85",
    "sectionId": 1,
    "number": 85,
    "text": "¿Para qué se utiliza la herramienta 'Docker Compose' mediante el archivo 'docker-compose.yml'?",
    "options": [
      "Para definir y ejecutar aplicaciones multi-contenedor coordinadas (ej. frontend, backend, base de datos y redis) con sus redes y volúmenes mediante un solo comando 'docker compose up'",
      "Para escribir código HTML visualmente",
      "Para formatear discos duros externos",
      "Para actualizar automáticamente el firmware de la placa madre"
    ],
    "correctIndex": 0,
    "explanation": "Docker Compose declara la topología de servicios, variables de entorno, dependencias de arranque (depends_on) y enlaces de red en un solo archivo reproducible y versionable.",
    "skill": "Orquestación Local de Contenedores",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Herramientas de Contenedores",
    "subtopic": "Docker Compose"
  },
  {
    "id": "inf-tec-86",
    "sectionId": 1,
    "number": 86,
    "text": "En una red de Docker personalizada de tipo 'Bridge', ¿cómo resuelven los contenedores las direcciones IP de otros contenedores dentro de la misma red?",
    "options": [
      "Mediante un servidor DNS interno embebido de Docker que resuelve automáticamente los nombres de los servicios o contenedores a sus IPs internas correspondientes",
      "Mediante transmisiones por radiofrecuencia Bluetooth",
      "Escribiendo a mano las IPs fijas en el archivo /etc/hosts cada mañana",
      "Consultando obligatoriamente a los servidores DNS públicos de Google 8.8.8.8"
    ],
    "correctIndex": 0,
    "explanation": "En redes creadas por el usuario ('docker network create'), el DNS integrado de Docker permite que el contenedor backend se conecte al contenedor base de datos simplemente usando el host 'postgres:5432'.",
    "skill": "Redes en Docker",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Comunicaciones entre Contenedores",
    "subtopic": "Resolución DNS Integrada en Docker"
  },
  {
    "id": "inf-tec-87",
    "sectionId": 1,
    "number": 87,
    "text": "¿Qué comando de Docker se utiliza para eliminar todos los contenedores detenidos, redes no utilizadas, imágenes huérfanas (dangling) y cachés de construcción para liberar espacio en disco?",
    "options": [
      "docker system prune",
      "docker kill all",
      "docker reset --hard",
      "docker delete images"
    ],
    "correctIndex": 0,
    "explanation": "'docker system prune -a --volumes' limpia a fondo el almacenamiento del daemon de Docker recuperando decenas de gigabytes ocupados por capas y contenedores en desuso.",
    "skill": "Mantenimiento del Entorno Docker",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Administración de Docker",
    "subtopic": "Comando docker system prune"
  },
  {
    "id": "inf-tec-88",
    "sectionId": 1,
    "number": 88,
    "text": "¿Por qué se considera una mala práctica de seguridad ejecutar los procesos dentro de un contenedor Docker como el usuario 'root' por defecto?",
    "options": [
      "Porque si el atacante logra un escape de contenedor (container breakout), obtendría privilegios totales de superusuario en el sistema operativo anfitrión",
      "Porque Docker duplica la memoria RAM si se usa root",
      "Porque root no tiene acceso a internet",
      "Porque las imágenes de root pesan 10 veces más"
    ],
    "correctIndex": 0,
    "explanation": "Definir 'USER appuser' con un usuario sin privilegios en el Dockerfile aplica el principio de mínimo privilegio, mitigando el impacto de vulnerabilidades en la aplicación.",
    "skill": "Seguridad en Contenedores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Hardening de Docker",
    "subtopic": "Principio de Mínimo Privilegio (USER directive)"
  },
  {
    "id": "inf-tec-89",
    "sectionId": 1,
    "number": 89,
    "text": "¿Cuál es la diferencia entre el comando 'docker stop' y el comando 'docker kill' al detener un contenedor en ejecución?",
    "options": [
      "'docker stop' envía la señal SIGTERM permitiendo al proceso terminar operaciones y cerrar conexiones limpiamente (con un tiempo de gracia antes de SIGKILL); 'docker kill' envía inmediatamente la señal SIGKILL forzando el cierre abrupto",
      "'docker kill' desinstala Docker de la máquina y 'docker stop' solo pausa el reloj",
      "'docker stop' solo funciona los fines de semana",
      "Ambos comandos son sinónimos idénticos en el motor de Docker"
    ],
    "correctIndex": 0,
    "explanation": "Graceful shutdown: SIGTERM permite a los servidores web responder peticiones activas y vaciar buffers; SIGKILL mata el proceso inmediatamente sin ejecutar funciones de limpieza.",
    "skill": "Gestión del Ciclo de Vida de Contenedores",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Señales Unix en Docker",
    "subtopic": "docker stop (SIGTERM) vs docker kill (SIGKILL)"
  },
  {
    "id": "inf-tec-90",
    "sectionId": 1,
    "number": 90,
    "text": "¿Qué registro público y centralizado de imágenes de contenedores es el predeterminado al ejecutar comandos como 'docker pull ubuntu' o 'docker pull nginx'?",
    "options": [
      "Docker Hub",
      "GitHub Releases",
      "NPM Registry",
      "PyPI"
    ],
    "correctIndex": 0,
    "explanation": "Docker Hub es el repositorio oficial gestionado por Docker Inc., aunque las organizaciones suelen desplegar registros privados como Harbor, AWS ECR o Google Artifact Registry.",
    "skill": "Distribución de Imágenes",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Registros de Contenedores",
    "subtopic": "Docker Hub y Registros OCI"
  },
  {
    "id": "inf-tec-91",
    "sectionId": 1,
    "number": 91,
    "text": "En la terminología de Integración Continua (CI) y Entrega Continua (CD), ¿cuál es la diferencia exacta entre 'Continuous Delivery' y 'Continuous Deployment'?",
    "options": [
      "En Continuous Delivery cada cambio validado está listo para desplegarse pero requiere una aprobación manual humana para pasar a producción; en Continuous Deployment cada cambio que supera las pruebas se despliega automáticamente a producción sin intervención humana",
      "Continuous Delivery solo funciona los viernes y Continuous Deployment los lunes",
      "Continuous Deployment es exclusivo para hardware y Delivery para software",
      "No existe ninguna diferencia conceptual"
    ],
    "correctIndex": 0,
    "explanation": "La distinción clave es la puerta de decisión: Continuous Delivery asegura que el software sea desplegable en cualquier momento (releaseable artifact); Continuous Deployment automatiza también el paso final a los usuarios.",
    "skill": "Metodologías DevOps",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Filosofía CI/CD",
    "subtopic": "Continuous Delivery vs Continuous Deployment"
  },
  {
    "id": "inf-tec-92",
    "sectionId": 1,
    "number": 92,
    "text": "En un pipeline de GitHub Actions, ¿qué archivo de configuración ubicado en el repositorio define los flujos de trabajo (workflows), eventos detonadores y trabajos (jobs)?",
    "options": [
      ".github/workflows/*.yml (o .yaml)",
      "package.json",
      "Dockerfile",
      "config/actions.ini"
    ],
    "correctIndex": 0,
    "explanation": "GitHub Actions lee archivos de configuración YAML en la ruta '.github/workflows/' para ejecutar runners automatizados ante eventos como 'push', 'pull_request' o cron.",
    "skill": "Automatización con GitHub Actions",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Pipelines de CI/CD",
    "subtopic": "Configuración de Workflows en GitHub Actions"
  },
  {
    "id": "inf-tec-93",
    "sectionId": 1,
    "number": 93,
    "text": "¿Qué estrategia de despliegue 'Blue-Green Deployment' (Azul-Verde) minimiza el tiempo de inactividad (downtime) y facilita el rollback inmediato ante fallos?",
    "options": [
      "Mantener dos entornos de producción idénticos: uno activo recibiendo tráfico real (Blue) y otro inactivo donde se despliega la nueva versión (Green); una vez verificada, el router o balanceador conmuta todo el tráfico a Green de forma instantánea",
      "Pintar los servidores del datacenter con colores azul y verde",
      "Actualizar el software apagando todos los servidores durante 12 horas",
      "Cambiar los cables de red de lugar aleatoriamente"
    ],
    "correctIndex": 0,
    "explanation": "Blue-Green elimina el downtime por reinicios; ante cualquier anomalía en producción, el balanceador simplemente redirige el tráfico de regreso a Blue en milisegundos.",
    "skill": "Estrategias de Despliegue",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Arquitectura de Despliegues",
    "subtopic": "Estrategia Blue-Green Deployment"
  },
  {
    "id": "inf-tec-94",
    "sectionId": 1,
    "number": 94,
    "text": "¿En qué consiste la estrategia de despliegue 'Canary Deployment' (Despliegue Canario)?",
    "options": [
      "Lanzar la nueva versión del software a un porcentaje muy pequeño de usuarios reales (ej. 2% o 5%) mientras el resto permanece en la versión estable, monitoreando métricas de error antes del despliegue masivo",
      "Instalar el sistema operativo en jaulas para aves",
      "Comprobar el código con un emulador de navegador antiguo",
      "Prohibir el acceso a usuarios que no usen contraseñas de 30 caracteres"
    ],
    "correctIndex": 0,
    "explanation": "Inspirado en los canarios de las minas de carbón, detecta anomalías y fugas en producción con un radio de impacto mínimo antes de exponer al 100% de la base de usuarios.",
    "skill": "Despliegues Progresivos",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Estrategias de Despliegue",
    "subtopic": "Canary Releases"
  },
  {
    "id": "inf-tec-95",
    "sectionId": 1,
    "number": 95,
    "text": "En un servidor web Nginx que actúa como Proxy Inverso, ¿qué directiva fundamental redirige las peticiones entrantes hacia una aplicación backend Node.js o Python en el puerto interno 3000?",
    "options": [
      "proxy_pass http://localhost:3000;",
      "redirect_to 3000;",
      "forward_port 3000;",
      "rewrite_engine 3000;"
    ],
    "correctIndex": 0,
    "explanation": "La directiva 'proxy_pass' dentro de un bloque 'location /' reenvía la petición HTTP al servidor de aplicaciones upstream, permitiendo a Nginx gestionar SSL, compresión y caché estática en la frontera.",
    "skill": "Configuración de Nginx",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Servidores Web y Proxies",
    "subtopic": "Directiva proxy_pass en Nginx"
  },
  {
    "id": "inf-tec-96",
    "sectionId": 1,
    "number": 96,
    "text": "¿Cuál es la función del archivo '.env' y por qué NUNCA debe incluirse en el repositorio de control de versiones Git?",
    "options": [
      "Contiene secretos confidenciales (claves de API, contraseñas de bases de datos, tokens privados); versionarlo expondría las credenciales y permitiría el acceso de atacantes a la infraestructura",
      "Porque hace que el repositorio se vuelva demasiado pesado para descargar",
      "Porque los servidores Git rechazan archivos que comiencen con punto",
      "Porque Git borra automáticamente todos los archivos con extensión .env"
    ],
    "correctIndex": 0,
    "explanation": "El estándar The Twelve-Factor App exige separar la configuración secreta del código; el repositorio debe contener únicamente un '.env.example' con variables vacías o ficticias de muestra.",
    "skill": "Gestión de Secretos y Configuración",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Seguridad en Despliegues",
    "subtopic": "Variables de Entorno y Protección de Secretos"
  },
  {
    "id": "inf-tec-97",
    "sectionId": 1,
    "number": 97,
    "text": "¿Qué algoritmo de Balanceo de Carga distribuye las peticiones entrantes asignándolas a cada servidor de la lista en estricto orden secuencial circular?",
    "options": [
      "Round Robin",
      "Least Connections (Menos Conexiones)",
      "IP Hash",
      "Random con pesos"
    ],
    "correctIndex": 0,
    "explanation": "Round Robin asigna la petición 1 al servidor A, la 2 al B, la 3 al C y la 4 vuelve al A; es el algoritmo más simple y efectivo cuando todos los nodos tienen capacidades de hardware homogéneas.",
    "skill": "Alta Disponibilidad y Escalabilidad",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Balanceo de Carga",
    "subtopic": "Algoritmo Round Robin"
  },
  {
    "id": "inf-tec-98",
    "sectionId": 1,
    "number": 98,
    "text": "¿Qué herramienta y protocolo automatizado (estándar ACME) permite emitir y renovar certificados SSL/TLS gratuitos de Let's Encrypt en un servidor Linux?",
    "options": [
      "Certbot (protocolo ACME)",
      "OpenSSL manual exclusivamente",
      "FileZilla",
      "Apache Benchmark"
    ],
    "correctIndex": 0,
    "explanation": "Certbot interactúa con Let's Encrypt mediante desafíos HTTP-01 o DNS-01, automatizando la instalación del certificado en Nginx/Apache y programando su renovación antes de los 90 días.",
    "skill": "Seguridad y Certificados Web",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Certificados SSL/TLS",
    "subtopic": "Certbot y Protocolo ACME"
  },
  {
    "id": "inf-tec-99",
    "sectionId": 1,
    "number": 99,
    "text": "¿Qué es la 'Infraestructura como Código' (IaC - Infrastructure as Code) y qué herramienta declarativa líder en la industria la implementa?",
    "options": [
      "La práctica de aprovisionar y gestionar servidores, redes y servicios en la nube mediante archivos de configuración descriptivos y versionables en lugar de configuraciones manuales; herramienta: Terraform (HashiCorp)",
      "Escribir páginas web directamente en código ensamblador",
      "El diseño físico de los circuitos de una placa madre",
      "La compra de computadoras mediante tiendas de comercio electrónico"
    ],
    "correctIndex": 0,
    "explanation": "Terraform utiliza el lenguaje HCL para declarar el estado deseado de recursos cloud (AWS, Azure, GCP); al ejecutar 'terraform apply', el motor calcula y aplica los cambios necesarios garantizando reproducibilidad.",
    "skill": "DevOps y Cloud",
    "difficulty": "Intermedio",
    "educationalLevel": "Técnico",
    "topic": "Infraestructura como Código (IaC)",
    "subtopic": "Concepto de IaC y Terraform"
  },
  {
    "id": "inf-tec-100",
    "sectionId": 1,
    "number": 100,
    "text": "¿Qué es un 'Health Check' (comprobación de salud) en un orquestador o balanceador de carga?",
    "options": [
      "Una sonda periódica automática (ej. petición HTTP GET a /health) que verifica si una instancia o contenedor sigue respondiendo correctamente; si falla, el balanceador deja de enviarle tráfico y el orquestador lo reinicia",
      "Un antivirus que escanea la computadora del usuario al conectarse",
      "Una prueba médica obligatoria para los programadores del sistema",
      "Un medidor de velocidad de internet en el navegador"
    ],
    "correctIndex": 0,
    "explanation": "Las sondas de salud (liveness y readiness probes) permiten la auto-reparación (self-healing): aíslan instancias no saludables y aseguran que los usuarios solo sean atendidos por procesos operativos.",
    "skill": "Resiliencia y Monitoreo",
    "difficulty": "Fácil",
    "educationalLevel": "Técnico",
    "topic": "Confiabilidad de Sistemas",
    "subtopic": "Health Checks y Auto-reparación"
  }
];
