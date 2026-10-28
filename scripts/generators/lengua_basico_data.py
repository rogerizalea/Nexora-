# 80 Preguntas Pedagógicas Únicas: Lengua y Literatura Básico (21 a 100)
lengua_basico_raw = [
    # 21-35: Ortografía de letras y reglas de acentuación
    ("¿Cuál de las siguientes palabras está escrita con la ortografía correcta?",
     ["Bicicleta", "Vicicleta", "Bicicleta con s", "Vizicleta"], 0,
     "La palabra 'bicicleta' se escribe con 'b' inicial y con 'c' antes de las vocales 'i' y 'e'.",
     "Ortografía grafémica", "Fácil", "Ortografía", "Uso de B y V"),

    ("Identifica la palabra que lleva tilde por ser aguda terminada en vocal:",
     ["Café", "Mesa", "Árbol", "Lápiz"], 0,
     "Las palabras agudas llevan el acento en la última sílaba y se tildan cuando terminan en n, s o vocal: ca-fé.",
     "Acentuación de palabras agudas", "Fácil", "Ortografía", "Reglas generales de acentuación"),

    ("¿Cuál de las siguientes palabras es grave (llana) y lleva tilde por no terminar en n, s o vocal?",
     ["Árbol", "Canción", "Reloj", "Papel"], 0,
     "La palabra ár-bol tiene su acento en la penúltima sílaba y termina en consonante 'l' (distinta de n o s), por lo que se tilda.",
     "Acentuación de palabras graves", "Fácil", "Ortografía", "Palabras llanas"),

    ("Todas las palabras esdrújulas se tildan:",
     ["Siempre, sin excepción", "Solo si terminan en vocal", "Solo si terminan en n o s", "Nunca se tildan"], 0,
     "Por regla general de la Real Academia Española, todas las palabras esdrújulas llevan tilde obligatoriamente (ej. pá-ja-ro, mú-si-ca).",
     "Acentuación esdrújula", "Fácil", "Ortografía", "Palabras esdrújulas"),

    ("Identifica la palabra que completa correctamente la oración: 'El agua del río es muy _____'.",
     ["limpia", "linpia", "limpya", "linpya"], 0,
     "Antes de las consonantes 'p' y 'b' siempre se escribe 'm', nunca 'n': limpia.",
     "Regla ortográfica M antes de P y B", "Fácil", "Ortografía", "Grafías"),

    ("¿Cuál es el plural correcto de la palabra 'luz'?",
     ["Luces", "Luzes", "Luciss", "Luses"], 0,
     "Las palabras terminadas en 'z' cambian la 'z' por 'c' al formar el plural: luz → luces.",
     "Plural de palabras en Z", "Fácil", "Ortografía", "Cambio de Z por C"),

    ("¿Qué palabra debe escribirse con 'h' intermedia?",
     ["Zanahoria", "Almendra", "Manzana", "Cebolla"], 0,
     "La palabra 'zanahoria' contiene 'h' intermedia muda: za-na-ho-ria.",
     "Uso de la H intermedia", "Fácil", "Ortografía", "Grafía H"),

    ("Selecciona la palabra que está correctamente escrita con 'll':",
     ["Lluvia", "Yuvia", "Llubia", "Yubia"], 0,
     "La palabra correcta es 'lluvia', con doble ele ('ll') y 'v'.",
     "Uso de LL e Y", "Fácil", "Ortografía", "Dígrafos"),

    ("¿Cuál de las siguientes palabras es un sustantivo propio y debe escribirse con mayúscula inicial?",
     ["Ecuador", "país", "montaña", "río"], 0,
     "Los nombres propios de naciones, ciudades o personas se escriben con mayúscula inicial: Ecuador.",
     "Uso de mayúsculas", "Fácil", "Gramática", "Sustantivos propios"),

    ("¿Qué signo de puntuación se utiliza obligatoriamente al inicio y al final de una pregunta en español?",
     ["Signos de interrogación (¿ ?)", "Signos de exclamación (¡ !)", "Comillas (\" \")", "Paréntesis (( ))"], 0,
     "En la ortografía del español es preceptivo el uso de los dos signos de interrogación: el de apertura (¿) y el de cierre (?).",
     "Signos de puntuación", "Fácil", "Ortografía", "Signos de interrogación"),

    ("Identifica la oración que utiliza correctamente los signos de exclamación:",
     ["¡Qué alegría verte!", "¿Qué alegría verte?", "¡Qué alegría verte?", "!Qué alegría verte!"], 0,
     "Las oraciones admirativas llevan signo de exclamación de apertura (¡) y de cierre (!).",
     "Signos de exclamación", "Fácil", "Ortografía", "Entonación exclamativa"),

    ("¿Qué signo se emplea para separar los elementos de una lista o enumeración?",
     ["La coma (,)", "El punto final (.)", "El punto y coma (;)", "El guion (-)"], 0,
     "La coma enumerativa se emplea para separar palabras o frases que forman parte de una serie (ej. compré pan, leche, fruta y queso).",
     "Uso de la coma", "Fácil", "Puntuación", "Coma enumerativa"),

    ("El punto y seguido se utiliza para:",
     ["Separar oraciones dentro de un mismo párrafo", "Terminar un texto por completo", "Separar párrafos distintos", "Hacer una pregunta"], 0,
     "El punto y seguido separa enunciados que desarrollan la misma idea dentro de un párrafo.",
     "El punto", "Fácil", "Puntuación", "Punto y seguido"),

    ("Identifica el antónimo de la palabra 'generoso':",
     ["Tacaño", "Amable", "Bondadoso", "Sincero"], 0,
     "Un antónimo es una palabra con significado opuesto. Lo opuesto a generoso es tacaño o egoísta.",
     "Relaciones semánticas", "Fácil", "Semántica", "Antónimos"),

    ("¿Cuál es el sinónimo de la palabra 'veloz'?",
     ["Rápido", "Lento", "Pesado", "Tranquilo"], 0,
     "Los sinónimos tienen significados equivalentes o afines. 'Veloz' y 'rápido' significan de gran velocidad.",
     "Sinónimos", "Fácil", "Semántica", "Sinonimia léxica"),

    # 36-50: Categorías gramaticales básicas
    ("En la oración 'El perro blanco corre en el jardín', ¿cuál palabra es el adjetivo calificativo?",
     ["blanco", "perro", "corre", "jardín"], 0,
     "'Blanco' describe una cualidad del sustantivo 'perro', por lo que funciona como adjetivo calificativo.",
     "El adjetivo", "Fácil", "Gramática", "Adjetivos calificativos"),

    ("¿Cuál es el verbo en la oración: 'Los niños leen un cuento emocionante'?",
     ["leen", "niños", "cuento", "emocionante"], 0,
     "'Leen' expresa la acción principal que realizan los sujetos, por lo que es el verbo conjugado.",
     "El verbo", "Fácil", "Gramática", "Verbos de acción"),

    ("En la frase 'Ella canta muy bien', ¿qué categoría gramatical es 'Ella'?",
     ["Pronombre personal", "Sustantivo común", "Adjetivo demostrativo", "Preposición"], 0,
     "'Ella' es un pronombre personal de tercera persona del singular femenino.",
     "Pronombres personales", "Fácil", "Gramática", "Pronombres"),

    ("¿Cuál de los siguientes es un sustantivo abstracto?",
     ["Paz", "Mesa", "Gato", "Piedra"], 0,
     "Los sustantivos abstractos nombran conceptos, sentimientos o valores que no se perciben con los sentidos físicos: paz, justicia, amor.",
     "Clases de sustantivos", "Fácil", "Gramática", "Sustantivos abstractos"),

    ("Identifica el artículo definido femenino plural en la oración: 'Las mariposas vuelan en primavera'.",
     ["Las", "mariposas", "vuelan", "primavera"], 0,
     "'Las' es el artículo determinado o definido femenino en número plural.",
     "Los artículos", "Fácil", "Gramática", "Artículos determinados"),

    ("¿Cuál es el tiempo verbal de la forma 'estudiaré'?",
     ["Futuro", "Presente", "Pretérito perfecto (pasado)", "Copretérito"], 0,
     "'Estudiaré' indica una acción que se llevará a cabo con posterioridad al momento del habla (futuro simple del indicativo).",
     "Tiempos verbales", "Fácil", "Gramática", "Futuro simple"),

    ("En la oración 'Pedro y Juan llegaron temprano', ¿cuál es el sujeto?",
     ["Pedro y Juan", "llegaron", "temprano", "llegaron temprano"], 0,
     "'Pedro y Juan' es un sujeto compuesto formado por dos núcleos coordinados.",
     "Sujeto y predicado", "Fácil", "Sintaxis", "Sujeto compuesto"),

    ("¿Qué elemento constituye el núcleo del predicado en la oración 'Los deportistas entrenan diariamente'?",
     ["entrenan", "deportistas", "diariamente", "Los"], 0,
     "El núcleo del predicado verbal es siempre la forma verbal conjugada: 'entrenan'.",
     "Estructura del predicado", "Fácil", "Sintaxis", "Núcleo verbal"),

    ("Identifica la palabra que contiene un prefijo de negación u oposición:",
     ["Injusto", "Juzgado", "Justicia", "Justiciero"], 0,
     "El prefijo 'in-' denota negación o privación: in-justo significa 'no justo'.",
     "Morfología léxica", "Fácil", "Morfología", "Prefijos"),

    ("¿Cuál es el diminutivo correcto de la palabra 'flor'?",
     ["Florecita", "Florcita", "Florita", "Florsita"], 0,
     "Las palabras agudas de una sola sílaba forman su diminutivo con el sufijo '-ecita': florecita.",
     "Sufijos diminutivos", "Fácil", "Morfología", "Diminutivos"),

    # 51-65: Comprensión lectora y tipos de textos
    ("¿Cuál es el propósito principal de una fábula?",
     ["Transmitir una enseñanza moral o moraleja", "Dar instrucciones para armar un artefacto", "Informar sobre un suceso noticioso actual", "Exponer teorías científicas"], 0,
     "La fábula es una narración breve, habitualmente protagonizada por animales personificados, cuyo fin es dejar una moraleja.",
     "Géneros narrativos breves", "Fácil", "Literatura", "La fábula y la moraleja"),

    ("En un cuento, la parte donde se resuelve el conflicto principal se denomina:",
     ["Desenlace", "Inicio o planteamiento", "Nudo o clímax", "Prólogo"], 0,
     "El desenlace es la fase final de la narración donde se soluciona la trama o conflicto de la historia.",
     "Estructura narrativa", "Fácil", "Comprensión Lectora", "Estructura del cuento"),

    ("¿Qué tipo de texto es una receta de cocina?",
     ["Texto instructivo", "Texto poético", "Texto dramático", "Texto periodístico de opinión"], 0,
     "Una receta entrega una secuencia ordenada de pasos e ingredientes para alcanzar un objetivo, por lo que es un texto instructivo.",
     "Tipología textual", "Fácil", "Comprensión Lectora", "Textos instructivos"),

    ("Una noticia se caracteriza principalmente por:",
     ["Informar hechos reales y recientes de interés público con objetividad", "Expresar sentimientos íntimos del autor en verso", "Narrar aventuras mágicas con dragones", "Explicar las reglas de un deporte"], 0,
     "El texto periodístico informativo (la noticia) relata acontecimientos reales, verídicos, oportunos y de interés general.",
     "Textos periodísticos", "Fácil", "Medios de Comunicación", "La noticia"),

    ("¿A qué género literario pertenece un poema escrito en estrofas que expresa sentimientos profundos?",
     ["Género lírico", "Género dramático", "Género narrativo", "Género didáctico"], 0,
     "La lírica es el género literario mediante el cual el autor transmite emociones, estados de ánimo o vivencias subjetivas, usualmente en verso.",
     "Géneros literarios", "Fácil", "Literatura", "Género lírico"),

    ("El personaje que se opone a los objetivos del protagonista en una narración se llama:",
     ["Antagonista", "Personaje secundario", "Narrador omnisciente", "Testigo"], 0,
     "El antagonista es la figura que genera el conflicto enfrentando directamente al protagonista.",
     "Elementos de la narración", "Fácil", "Literatura", "Personajes"),

    ("¿Qué tipo de rima existe entre las palabras 'canción' y 'corazón'?",
     ["Rima consonante", "Rima asonante", "Rima libre", "Sin rima"], 0,
     "Hay rima consonante porque coinciden todos los sonidos (vocales y consonantes) a partir de la última vocal acentuada (-ón).",
     "Métrica y rima", "Fácil", "Literatura", "Rima consonante"),

    ("¿Qué figura retórica se utiliza al decir 'El viento susurraba entre los árboles'?",
     ["Personificación", "Hipérbole", "Metáfora", "Símil"], 0,
     "La personificación o prosopopeya atribuye cualidades o acciones humanas (susurrar) a elementos inanimados o naturales (el viento).",
     "Figuras retóricas básicas", "Fácil", "Literatura", "Personificación"),

    ("La comparación directa 'Sus ojos brillaban como dos estrellas' emplea la figura retórica de:",
     ["Símil o comparación", "Metáfora", "Anáfora", "Ironía"], 0,
     "El símil establece una relación de semejanza explícita utilizando nexos comparativos como 'como', 'parece' o 'cual'.",
     "Recursos poéticos", "Fácil", "Literatura", "El símil"),

    ("En una carta formal, el saludo inicial respetuoso dirigido a la autoridad se denomina:",
     ["Encabezado o vocativo", "Firma", "Despedida", "Posdata"], 0,
     "El vocativo inicial sitúa el destinatario con el tratamiento de cortesía correspondiente (ej. 'Estimado señor Director:').",
     "Estructura epistolar", "Fácil", "Comunicación Escrita", "La carta"),

    # 66-80: Léxico, relaciones semánticas y uso de la lengua
    ("¿Qué término completa la analogía: 'Pájaro es a nido como abeja es a... '?",
     ["Colmena", "Miel", "Flor", "Ala"], 0,
     "La relación analógica es de animal a su hábitat o refugio natural: el pájaro habita en el nido y la abeja en la colmena.",
     "Analogías verbales simples", "Fácil", "Semántica", "Relaciones analógicas"),

    ("Identifica la palabra que no pertenece al campo semántico de los instrumentos musicales:",
     ["Pincel", "Guitarra", "Piano", "Violín"], 0,
     "Guitarra, piano y violín son instrumentos musicales. El pincel pertenece al campo semántico de la pintura.",
     "Campos semánticos", "Fácil", "Semántica", "Término excluido"),

    ("La palabra 'banco' (asiento) y 'banco' (entidad financiera) son palabras:",
     ["Homónimas (polisémicas/homógrafas)", "Sinónimas", "Antónimas", "Parónimas"], 0,
     "Son palabras homógrafas que se escriben igual pero tienen significados totalmente distintos.",
     "Relaciones léxicas", "Fácil", "Semántica", "Homonimia"),

    ("¿Cuál es el significado del refrán popular: 'A quien madruga, Dios le ayuda'?",
     ["El esfuerzo y la diligencia temprana traen buenos resultados", "Dormir mucho es bueno para la salud", "Las mañanas son frías", "Siempre hay que levantarse a la misma hora"], 0,
     "El refrán valora la laboriosidad, la iniciativa y la disciplina de no postergar las responsabilidades.",
     "Paremiología popular", "Fácil", "Comprensión Lectora", "Refranes"),

    ("El conjunto de palabras derivadas de una misma raíz se conoce como:",
     ["Familia de palabras (familia léxica)", "Campo semántico", "Sinónimos", "Oración compuesta"], 0,
     "Una familia léxica comparte el mismo lexema o raíz (ej. pan, panadería, panadero, empanada).",
     "Familias léxicas", "Fácil", "Morfología", "Lexemas y morfemas"),

    ("¿Cuál es la raíz o lexema de las palabras 'marino', 'marea' y 'marítimo'?",
     ["mar-", "mari-", "mare-", "marit-"], 0,
     "La raíz invariable común que aporta el significado fundamental es 'mar-'.",
     "Identificación del lexema", "Fácil", "Morfología", "Raíz léxica"),

    ("Identifica la palabra con tilde diacrítica que funciona como pronombre personal:",
     ["Él", "El", "Tu", "Mi"], 0,
     "'Él' con tilde es pronombre personal ('Él llegó tarde'), mientras que 'el' sin tilde es artículo determinado ('El libro').",
     "Tilde diacrítica elemental", "Fácil", "Ortografía", "Monosílabos"),

    ("¿Cuál es el género y número del sustantivo 'ciudades'?",
     ["Femenino plural", "Masculino plural", "Femenino singular", "Neutro plural"], 0,
     "Decimos 'las ciudades', por lo que su género es femenino y su número es plural.",
     "Accidentes del sustantivo", "Fácil", "Gramática", "Género y número"),

    ("¿Qué tipo de palabra es 'rápidamente'?",
     ["Un adverbio de modo", "Un adjetivo calificativo", "Un verbo conjugado", "Una preposición"], 0,
     "Las palabras formadas con el sufijo '-mente' a partir de adjetivos son adverbios de modo.",
     "Los adverbios", "Fácil", "Gramática", "Adverbios en -mente"),

    ("En la oración 'Compré manzanas, peras y uvas', la palabra 'y' cumple la función de:",
     ["Conjunción copulativa", "Preposición", "Interjección", "Adverbio"], 0,
     "'Y' es una conjunción copulativa que une elementos análogos en una enumeración.",
     "Conjunciones", "Fácil", "Gramática", "Conjunciones copulativas"),

    # 81-100: Producción de textos y normas de cortesía
    ("Al redactar una narración, el uso de conectores temporales como 'primero', 'luego' y 'finalmente' sirve para:",
     ["Organizar la secuencia cronológica de los hechos", "Contar el número de personajes", "Rimar los versos", "Describir el color de los objetos"], 0,
     "Los conectores de orden y tiempo estructuran la línea temporal de las acciones relatadas.",
     "Cohesión textual", "Fácil", "Redacción", "Conectores temporales"),

    ("¿Cuál es la función del diálogo en una obra de teatro?",
     ["Permitir que los personajes conversen e interactúen directamente ante el público", "Describir el vestuario al lector", "Explicar la opinión del director", "Contar la moraleja al inicio"], 0,
     "En el género dramático, la acción avanza esencialmente a través de los diálogos directos entre los personajes.",
     "El texto dramático", "Fácil", "Literatura", "El diálogo teatral"),

    ("¿Qué información contiene el pie de imprenta o colofón de un libro?",
     ["Los datos de la imprenta, fecha y lugar de edición", "El resumen de la trama", "La biografía del lector", "El precio de venta al público"], 0,
     "El colofón o datos de imprenta indican dónde y cuándo fue impreso el ejemplar.",
     "Partes del libro", "Fácil", "Comunicación Escrita", "Estructura editorial"),

    ("Identifica la palabra que está correctamente tildada:",
     ["Música", "Musica", "Músíca", "Musicá"], 0,
     "'Música' es una palabra esdrújula (mú-si-ca) y lleva tilde en la antepenúltima sílaba.",
     "Ortografía esdrújula", "Fácil", "Ortografía", "Acentuación"),

    ("¿Cuál es el sujeto tácito o elíptico en la oración: 'Fuimos al parque el domingo'?",
     ["Nosotros / Nosotras", "Ellos", "Ustedes", "Yo"], 0,
     "Por la desinencia del verbo 'fuimos' (primera persona del plural), el sujeto tácito es 'nosotros' o 'nosotras'.",
     "Sujeto tácito", "Fácil", "Sintaxis", "Elipsis del sujeto"),

    ("¿Qué tipo de texto informativo se utiliza en las calles para guiar a los peatones y conductores?",
     ["Señales de tránsito e información vial", "Novelas de misterio", "Poemas épicos", "Ensayos filosóficos"], 0,
     "La señalética vial es un sistema de comunicación visual e informativa de uso público.",
     "Textos informativos del entorno", "Fácil", "Comunicación", "Señalética"),

    ("Identifica la opción que presenta una metáfora sencilla:",
     ["El sol es la linterna del mundo", "El sol brilla como una linterna", "El sol sale de día", "El sol es una estrella amarilla"], 0,
     "La metáfora identifica directamente un término real (sol) con uno imaginario (linterna del mundo) sin nexo comparativo.",
     "Figuras retóricas", "Fácil", "Literatura", "Metáfora"),

    ("¿Cuál es la forma correcta de separar en sílabas la palabra 'computadora'?",
     ["com-pu-ta-do-ra", "comp-u-ta-do-ra", "co-mpu-ta-do-ra", "com-put-a-do-ra"], 0,
     "La división silábica natural y normativa es com-pu-ta-do-ra (cinco sílabas, palabra polisílaba).",
     "División silábica", "Fácil", "Ortografía", "Silabeo"),

    ("Las palabras que tienen una sola sílaba, como 'sol', 'pan' y 'mar', se denominan:",
     ["Monosílabas", "Bisílabas", "Trisílabas", "Polisílabas"], 0,
     "Las palabras compuestas por una única emisión de voz o sílaba son monosílabas.",
     "Clasificación por número de sílabas", "Fácil", "Morfología", "Monosílabos"),

    ("¿Qué elemento cierra de manera formal una carta comercial antes de la firma?",
     ["La fórmula de despedida (ej. 'Atentamente,')", "El saludo inicial", "El asunto", "La fecha"], 0,
     "La despedida es el párrafo o frase de cortesía final previa a la rúbrica y nombre del remitente.",
     "Correspondencia formal", "Fácil", "Comunicación Escrita", "Estructura epistolar")
]
