# 80 Preguntas Pedagógicas Únicas: Lengua y Literatura Intermedio (21 a 100)
lengua_intermedio_raw = [
    # 21-35: Fonología, diptongos, hiatos y acentuación diacrítica
    ("¿Cuál de las siguientes palabras presenta un hiato acentual (vocal abierta + vocal cerrada tónica)?",
     ["País", "Cielo", "Reina", "Ciudad"], 0,
     "En 'pa-ís', la vocal cerrada 'i' recibe la fuerza de voz y se tilda obligatoriamente, rompiendo el diptongo y formando dos sílabas separadas (hiato acentual).",
     "El hiato acentual", "Intermedio", "Ortografía", "Hiatos y diptongos"),

    ("Identifica la palabra que contiene un diptongo formado por dos vocales cerradas distintas:",
     ["Cuidado", "Poeta", "Teatro", "Línea"], 0,
     "Las vocales cerradas en español son 'i' y 'u'. En 'cui-da-do', la secuencia 'ui' forma un diptongo indisoluble.",
     "Diptongos homogéneos", "Intermedio", "Ortografía", "Diptongos"),

    ("¿En cuál de las siguientes oraciones 'más' debe llevar tilde diacrítica por funcionar como adverbio de cantidad?",
     ["Quiero más tiempo para estudiar", "Llegó temprano, mas no pudo entrar", "Te llamé, mas no respondiste", "Dijo que vendría, mas lo olvidó"], 0,
     "'Más' lleva tilde cuando expresa cantidad o adición. 'Mas' sin tilde es una conjunción adversativa equivalente a 'pero'.",
     "Tilde diacrítica en monosílabos", "Intermedio", "Ortografía", "Adverbio más vs conjunción mas"),

    ("Selecciona la oración con la tilde diacrítica correcta en el pronombre personal 'mí':",
     ["Este regalo es para mí", "Mi casa es pequeña", "Préstame mi cuaderno", "Mi hermano viaja mañana"], 0,
     "'Mí' con tilde es pronombre personal precedido de preposición. 'Mi' sin tilde es adjetivo posesivo.",
     "Pronombre mí vs adjetivo mi", "Intermedio", "Ortografía", "Tilde diacrítica"),

    ("¿Cuándo lleva tilde la palabra 'té'?",
     ["Cuando se refiere a la infusión o planta aromática (sustantivo)", "Cuando es pronombre personal", "En todas las oraciones interrogativas", "Nunca se debe tildar"], 0,
     "'Té' como sustantivo que nombra la bebida lleva tilde diacrítica para distinguirse del pronombre 'te' (ej. 'te lo dije').",
     "Sustantivo té vs pronombre te", "Intermedio", "Ortografía", "Monosílabos diacríticos"),

    ("Identifica el triptongo en la palabra:",
     ["Paraguay", "Caían", "Poesía", "Aeropuerto"], 0,
     "En 'Pa-ra-guay', la combinación 'u' (cerrada) + 'a' (abierta tónica) + 'y' (con sonido de 'i' cerrada) conforma un triptongo en la última sílaba.",
     "El triptongo", "Intermedio", "Ortografía", "Secuencias vocálicas"),

    ("En la palabra 'héroe', la separación silábica y su clasificación por el acento corresponden a:",
     ["hé-ro-e (esdrújula con hiato simple)", "hé-roe (grave con diptongo)", "he-ro-e (grave)", "hé-ro-e (aguda)"], 0,
     "Dos vocales abiertas contiguas (e-o) forman hiato simple y se separan: hé-ro-e. Al acentuarse en la antepenúltima sílaba, es esdrújula.",
     "Hiato de vocales abiertas", "Intermedio", "Ortografía", "Silabeo y acentuación"),

    ("¿Por qué lleva tilde la palabra 'fácilmente'?",
     ["Porque el adjetivo base 'fácil' es grave terminada en 'l' y conserva su tilde", "Porque es una palabra sobresdrújula", "Porque termina en vocal", "Porque tiene hiato"], 0,
     "Los adverbios en '-mente' conservan la tilde del adjetivo original del cual derivan (fácil → fácilmente; rápida → rápidamente).",
     "Acentuación de palabras compuestas en -mente", "Intermedio", "Ortografía", "Adverbios compuestos"),

    ("Identifica la opción en que 'sé' debe tildarse por corresponder al verbo saber o ser:",
     ["Yo sé la respuesta correcta", "Él se marchó temprano", "Se venden casas", "El agua se evaporó"], 0,
     "'Sé' con tilde proviene del verbo saber ('yo sé') o del imperativo del verbo ser ('sé valiente'). 'Se' sin tilde es pronombre reflexivo o marca pasiva.",
     "Verbo sé vs pronombre se", "Intermedio", "Ortografía", "Tilde diacrítica verbal"),

    ("¿En qué oración la palabra 'aún' lleva tilde por equivaler a 'todavía'?",
     ["Aún no han llegado los resultados", "Aun los más escépticos aplaudieron", "Aun con lluvia, jugó el partido", "Ni aun así comprendió"], 0,
     "'Aún' lleva tilde cuando es adverbio temporal sustituible por 'todavía'. 'Aun' sin tilde equivale a 'incluso', 'hasta' o 'siquiera'.",
     "Adverbio aún vs aun", "Intermedio", "Ortografía", "Acentuación diacrítica"),

    # 36-50: Sintaxis de la oración simple (modificadores y complementos)
    ("En la oración 'El carpintero hábil construyó una mesa de roble', ¿cuál es el modificador directo del sujeto?",
     ["hábil", "El carpintero", "de roble", "una mesa"], 0,
     "Los modificadores directos (MD) del núcleo del sujeto son los artículos y adjetivos que se unen a él sin preposiciones: 'El' y 'hábil'.",
     "Modificadores del sujeto", "Intermedio", "Sintaxis", "Modificador directo"),

    ("Identifica el objeto directo (OD) en la oración: 'El profesor felicitó a los estudiantes más destacados'.",
     ["a los estudiantes más destacados", "El profesor", "felicitó", "destacados"], 0,
     "El objeto directo recibe la acción verbal de forma inmediata y puede pronominalizarse por 'los': 'El profesor los felicitó'.",
     "El objeto directo", "Intermedio", "Sintaxis", "Complemento directo con 'a' personal"),

    ("En la oración 'Mi hermana compró un ramo de flores para su madre', ¿qué función sintáctica cumple 'para su madre'?",
     ["Objeto indirecto (OI)", "Objeto directo (OD)", "Circunstancial de lugar", "Atributo"], 0,
     "El objeto indirecto designa al destinatario de la acción verbal, encabezado por las preposiciones 'a' o 'para', y sustituible por 'le'.",
     "El objeto indirecto", "Intermedio", "Sintaxis", "Complemento indirecto"),

    ("Identifica el complemento circunstancial de modo en la oración: 'El atleta corrió rápidamente hacia la meta'.",
     ["rápidamente", "hacia la meta", "El atleta", "corrió"], 0,
     "El circunstancial de modo responde a la pregunta ¿cómo corrió?: 'rápidamente'. 'Hacia la meta' es circunstancial de lugar.",
     "Complementos circunstanciales", "Intermedio", "Sintaxis", "Circunstancial de modo"),

    ("En la oración 'Guayaquil, la Perla del Pacífico, celebra su fiesta cívica', el sintagma entre comas funciona como:",
     ["Aposición explicativa", "Modificador indirecto preposicional", "Objeto directo", "Vocativo"], 0,
     "La aposición explicativa es un sintagma nominal que aclara o renombra al núcleo del sujeto, y va delimitada preceptivamente por comas.",
     "La aposición", "Intermedio", "Sintaxis", "Aposiciones en el sujeto"),

    ("¿Qué tipo de predicado tiene la oración copulativa 'La cordillera es majestuosa'?",
     ["Predicado nominal (con verbo copulativo y atributo)", "Predicado verbal adverbial", "Predicado pasivo", "Predicado elíptico"], 0,
     "Los verbos copulativos (ser, estar, parecer) unen el sujeto con una cualidad esencial llamada atributo, conformando un predicado nominal.",
     "Predicado nominal y atributo", "Intermedio", "Sintaxis", "Oraciones copulativas"),

    ("Al transformar la oración activa 'El arquitecto diseñó los planos' a voz pasiva, se obtiene:",
     ["Los planos fueron diseñados por el arquitecto", "El arquitecto fue diseñado por los planos", "Los planos son diseñados por el arquitecto", "El arquitecto ha diseñado los planos"], 0,
     "El OD pasa a ser sujeto paciente ('Los planos'), el verbo activo se transforma en perífrasis pasiva en pretérito ('fueron diseñados') y el sujeto en complemento agente ('por el arquitecto').",
     "Transformación a voz pasiva", "Intermedio", "Sintaxis", "Voz activa y pasiva"),

    ("En la oración 'Llovió torrencialmente toda la noche en la sierra', el sujeto se clasifica como:",
     ["Oración impersonal (sin sujeto léxico)", "Sujeto tácito 'Él'", "Sujeto paciente", "Sujeto compuesto"], 0,
     "Los verbos meteorológicos o atmosféricos (llover, nevar, tronar) se conjugan solo en tercera persona y forman oraciones impersonales naturales.",
     "Oraciones impersonales", "Intermedio", "Sintaxis", "Impersonalidad meteorológica"),

    ("Identifica el vocativo en la siguiente expresión: 'Carlos, préstame mucha atención'.",
     ["Carlos", "préstame", "mucha atención", "atención"], 0,
     "El vocativo es la palabra empleada para llamar o apelar al interlocutor y siempre se aísla mediante coma vocativa.",
     "El vocativo", "Intermedio", "Sintaxis", "Coma vocativa"),

    ("¿Cuál es el núcleo del sujeto en la oración 'Una suave brisa marina refrescaba la tarde'?",
     ["brisa", "suave", "marina", "tarde"], 0,
     "El núcleo del sujeto es el sustantivo principal sobre el cual giran los modificadores (una, suave, marina): 'brisa'.",
     "Núcleo del sujeto", "Intermedio", "Sintaxis", "Sustantivo nuclear"),

    # 51-65: Verbos, modos y perífrasis verbales
    ("¿Qué modo verbal expresa deseos, hipótesis o dudas en oraciones como 'Ojalá apruebes el examen'?",
     ["Modo subjuntivo", "Modo indicativo", "Modo imperativo", "Modo condicional"], 0,
     "El modo subjuntivo se utiliza para comunicar hechos irreales, contingentes, hipotéticos o deseados, en contraste con la certeza del indicativo.",
     "Modos del verbo", "Intermedio", "Gramática", "Modo subjuntivo"),

    ("El modo imperativo se caracteriza fundamentalmente por:",
     ["Emitir mandatos, órdenes, peticiones o instrucciones directas", "Relatar hechos pasados seguros", "Formular hipótesis matemáticas", "Describir paisajes poéticos"], 0,
     "El imperativo tiene función apelativa o conativa y se utiliza para ordenar, pedir o rogar al oyente (ej. '¡Escucha atentamente!').",
     "Modo imperativo", "Intermedio", "Gramática", "Órdenes y exhortaciones"),

    ("Identifica la perífrasis verbal de obligación en:",
     ["Tenemos que entregar el proyecto mañana", "Vamos a viajar el fin de semana", "Ella está leyendo un libro", "Empezó a llover fuerte"], 0,
     "'Tener que + infinitivo' es una perífrasis verbal modal de obligación o necesidad ineludible.",
     "Perífrasis verbales modales", "Intermedio", "Gramática", "Perífrasis de obligación"),

    ("La perífrasis aspectual durativa 'El técnico está revisando el circuito' denota una acción:",
     ["En curso de desarrollo o proceso activo (aspecto continuo)", "Totalmente terminada", "A punto de comenzar", "De realización obligatoria"], 0,
     "La construcción 'estar + gerundio' expresa el aspecto aspectual progresivo o en pleno desenvolvimiento.",
     "Perífrasis de gerundio", "Intermedio", "Gramática", "Aspecto durativo"),

    ("¿Cuál es el participio irregular del verbo 'escribir'?",
     ["Escrito", "Escribido", "Escribiendo", "Escripto"], 0,
     "Los verbos con participio irregular no terminan en -ado/-ido: escribir → escrito; abrir → abierto; decir → dicho.",
     "Formas no personales del verbo", "Intermedio", "Gramática", "Participios irregulares"),

    ("En la oración 'Si tuviera dinero, viajaría por el mundo', el verbo 'tuviera' está en tiempo:",
     ["Pretérito imperfecto del modo subjuntivo", "Pretérito perfecto simple del indicativo", "Condicional simple", "Futuro de subjuntivo"], 0,
     "'Tuviera' o 'tuviese' corresponde a la forma del pretérito imperfecto del modo subjuntivo en oraciones condicionales irreales.",
     "Tiempos del subjuntivo", "Intermedio", "Gramática", "Condicionales irreales"),

    ("Identifica el conector discursivo de consecuencia en la oración: 'Estudió con dedicación; por lo tanto, obtuvo la calificación más alta'.",
     ["por lo tanto", "con dedicación", "la más alta", "obtuvo"], 0,
     "'Por lo tanto' (así como 'por consiguiente', 'en consecuencia') es un conector que introduce el efecto o conclusión derivada de la premisa anterior.",
     "Conectores de consecuencia", "Intermedio", "Cohesión Textual", "Marcadores discursivos"),

    ("¿Qué tipo de conector es 'sin embargo' en 'Quería asistir al concierto; sin embargo, no consiguió boletos'?",
     ["Conector de oposición o contraste (adversativo)", "Conector de causa", "Conector de tiempo", "Conector de finalidad"], 0,
     "'Sin embargo' introduce un límite, objeción o restricción parcial a lo expresado con anterioridad.",
     "Conectores adversativos", "Intermedio", "Cohesión Textual", "Contraste de ideas"),

    ("Identifica el conector que indica causa o motivo:",
     ["ya que", "por consiguiente", "además", "en primer lugar"], 0,
     "'Ya que', 'porque' y 'dado que' introducen la causa, razón o justificación de un hecho.",
     "Conectores causales", "Intermedio", "Cohesión Textual", "Causas y motivos"),

    ("¿Qué marcador textual se emplea para agregar información complementaria?",
     ["Asimismo (o además)", "En cambio", "Por ende", "Para concluir"], 0,
     "'Asimismo', 'además' e 'igualmente' son conectores aditivos que incorporan nuevos datos al discurso.",
     "Conectores aditivos", "Intermedio", "Cohesión Textual", "Adición de argumentos"),

    # 66-80: Géneros literarios, versificación y figuras retóricas
    ("En una obra teatral, las indicaciones escritas entre paréntesis que describen gestos, movimientos y escenografía son:",
     ["Acotaciones (o didascalias)", "Monólogos", "Parlamentos", "Soliloquios"], 0,
     "Las acotaciones son notas del dramaturgo orientadas a guiar la puesta en escena, la entonación y el desplazamiento de los actores.",
     "El texto dramático", "Intermedio", "Literatura", "Acotaciones teatrales"),

    ("El verso que cuenta con ocho sílabas métricas se clasifica como:",
     ["Octosílabo (arte menor)", "Endecasílabo (arte mayor)", "Alejandrino", "Heptasílabo"], 0,
     "El octosílabo tiene exactamente 8 sílabas y es el verso tradicional más emblemático de la poesía lírica y del romance en español.",
     "Métrica poética", "Intermedio", "Literatura", "Versos de arte menor"),

    ("La licencia métrica que permite unir la vocal final de una palabra con la vocal inicial de la palabra siguiente en una sola sílaba se llama:",
     ["Sinalefa", "Diéresis", "Sinéresis", "Hiato poético"], 0,
     "La sinalefa fusiona vocales entre palabras contiguas para reducir el conteo silábico del verso (ej. 'vuel-to_al-ba').",
     "Licencias métricas", "Intermedio", "Literatura", "La sinalefa"),

    ("Si un verso termina en palabra aguda, ¿qué regla del cómputo métrico se aplica a la suma de sílabas?",
     ["Se suma una sílaba (+1)", "Se resta una sílaba (-1)", "Queda igual", "Se divide entre dos"], 0,
     "Por ley del acento final, si la última palabra del verso es aguda se suma una sílaba métrica (+1); si es esdrújula, se resta una (-1).",
     "Ley del acento final", "Intermedio", "Literatura", "Cómputo métrico"),

    ("¿Qué figura retórica consiste en una exageración desmedida con fines expresivos o estéticos?",
     ["Hipérbole", "Metonimia", "Elipsis", "Pleonasmo"], 0,
     "La hipérbole magnifica o disminuye de forma desproporcionada la realidad (ej. 'Tanto dolor se agrupa en mi costado / que por doler me duele hasta el aliento').",
     "Figuras retóricas de pensamiento", "Intermedio", "Literatura", "La hipérbole"),

    ("En los versos 'Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada', ¿qué figura retórica predomina?",
     ["Anáfora", "Hipérbaton", "Símil", "Paradoja"], 0,
     "La anáfora consiste en la repetición deliberada de una o más palabras al comienzo de versos o frases consecutivas ('Temprano... / temprano...').",
     "Figuras retóricas de dicción", "Intermedio", "Literatura", "La anáfora"),

    ("¿Qué recurso retórico se emplea en la frase 'El fuego helado de tu indiferencia'?",
     ["Oxímoron", "Metáfora simple", "Polisíndeton", "Símil"], 0,
     "El oxímoron une dos conceptos de significado opuesto e incompatible en un mismo sintagma ('fuego helado') para generar un nuevo sentido poético.",
     "Figuras de contradicción", "Intermedio", "Literatura", "El oxímoron"),

    ("La alteración intencionada del orden sintáctico habitual de las palabras en la oración (como en los versos de Góngora) se denomina:",
     ["Hipérbaton", "Asíndeton", "Sinestesia", "Calambur"], 0,
     "El hipérbaton trastoca el orden lógico Sujeto + Verbo + Complementos (ej. 'Volverán las oscuras golondrinas / en tu balcón sus nidos a colgar').",
     "Figuras de construcción", "Intermedio", "Literatura", "El hipérbaton"),

    ("¿A qué género literario corresponde 'La Ilíada' de Homero?",
     ["Épica o epopeya (narrativa en verso)", "Lírica amorosa", "Drama moderno", "Ensayo didáctico"], 0,
     "'La Ilíada' es una epopeya heroica clásica que canta las hazañas bélicas de Aquiles y los héroes aqueos en la guerra de Troya.",
     "Clasicismo grecolatino", "Intermedio", "Literatura Universal", "La epopeya clásica"),

    ("¿Cuál de las siguientes obras es una tragedia cumbre del teatro renacentista de William Shakespeare?",
     ["Romeo y Julieta", "El cantar de mio Cid", "El Quijote", "La Celestina"], 0,
     "'Romeo y Julieta' y 'Hamlet' son tragedias maestras compuestas por el dramaturgo inglés William Shakespeare a finales del siglo XVI.",
     "Teatro renacentista", "Intermedio", "Literatura Universal", "Shakespeare"),

    # 81-100: Tipologías textuales y técnicas de síntesis
    ("El texto argumentativo se compone fundamentalmente de tres partes esenciales:",
     ["Tesis, cuerpo argumentativo y conclusión", "Inicio, nudo y desenlace", "Verso, estrofa y rima", "Titular, entradilla y cuerpo"], 0,
     "El texto argumentativo defiende una postura (tesis) aportando razonamientos estructurados (argumentos) y cerrando con una síntesis reafirmativa (conclusión).",
     "El texto argumentativo", "Intermedio", "Tipología Textual", "Estructura del ensayo"),

    ("Un organizador gráfico de llaves que jerarquiza conceptos desde lo general a lo particular de izquierda a derecha es:",
     ["Un cuadro sinóptico", "Un mapa mental", "Una línea de tiempo", "Un diagrama de Pareto"], 0,
     "El cuadro sinóptico utiliza llaves ({ }) para clasificar y condensar temáticas jerarquizadas.",
     "Técnicas de estudio y síntesis", "Intermedio", "Comprensión Lectora", "Cuadro sinóptico"),

    ("¿Qué característica define al narrador omnisciente en un relato?",
     ["Conoce todos los hechos pasados, presentes y los pensamientos íntimos de los personajes", "Es el protagonista y habla en primera persona", "Es un testigo secundario que solo ve lo externo", "Es el autor biográfico real"], 0,
     "El narrador omnisciente narra en tercera persona y posee un conocimiento total y absoluto de la psicología y destino de todos los personajes.",
     "Puntos de vista narrativos", "Intermedio", "Teoría Literaria", "Narrador omnisciente"),

    ("En una noticia periodística, el primer párrafo que resume las 5 preguntas fundamentales (qué, quién, cuándo, dónde, por qué) es:",
     ["El lead o entradilla", "El epígrafe", "La volanta", "El ladillo"], 0,
     "El lead o entradilla condensa los datos esenciales del acontecimiento siguiendo el modelo de la pirámide invertida.",
     "Géneros periodísticos informativos", "Intermedio", "Medios de Comunicación", "Estructura de la noticia"),

    ("¿Qué tipo de texto es un artículo de opinión en un diario de circulación nacional?",
     ["Texto periodístico argumentativo y subjetivo firmado por su autor", "Una noticia objetiva", "Una crónica judicial", "Un informe pericial"], 0,
     "El artículo de opinión refleja el análisis, perspectiva crítica y juicio personal fundamentado de un analista o periodista.",
     "Periodismo de opinión", "Intermedio", "Medios de Comunicación", "Artículo de opinión"),

    ("Identifica la opción que presenta una relación de antonimia léxica:",
     ["Efemero - Duradero", "Grande - Enorme", "Cálido - Caliente", "Sabio - Erudito"], 0,
     "'Efímero' (de muy corta duración) es el antónimo directo de 'duradero' (que persiste en el tiempo). Las demás son relaciones de sinonimia.",
     "Semántica léxica", "Intermedio", "Vocabulario", "Antónimos precisos"),

    ("¿Qué figura retórica se aprecia en 'Escucho el dulce trino de las aves con mis ojos cerrados' (dulce trino)?",
     ["Sinestesia", "Hipérbole", "Pleonasmo", "Lítote"], 0,
     "La sinestesia fusiona sensaciones procedentes de sentidos corporales diferentes (el sabor 'dulce' con el sonido auditivo 'trino').",
     "Figuras sensoriales", "Intermedio", "Literatura", "La sinestesia"),

    ("¿Qué caracteriza a la novela picaresca española iniciada con 'El Lazarillo de Tormes' (1554)?",
     ["Narración autobiográfica en primera persona de un antihéroe de origen humilde que sirve a varios amos", "Canto a las hazañas de caballeros andantes invencibles", "Poemas de pastores idealizados", "Diálogos teológicos escolásticos"], 0,
     "La picaresca refleja con realismo crítico la sociedad de la época a través de los ojos de un pícaro que lucha por sobrevivir.",
     "Novela del Siglo de Oro", "Intermedio", "Literatura Española", "El Lazarillo de Tormes"),

    ("La estrofa de cuatro versos de arte menor con rima consonante abab o abba se llama:",
     ["Cuarteta o redondilla", "Soneto", "Terceto", "Silva"], 0,
     "La cuarteta (abab) y la redondilla (abba) son estrofas clásicas de cuatro versos octosílabos en el verso en español.",
     "Estrofas poéticas", "Intermedio", "Literatura", "Métrica de estrofas"),

    ("¿Qué elemento es indispensable para garantizar la coherencia global de un texto escrito?",
     ["Una temática central o hilo conductor lógico que conecte todas las ideas", "Usar rimas en todos los párrafos", "Escribir oraciones de más de 50 palabras", "Omitir los signos de puntuación"], 0,
     "La coherencia global asegura que todas las oraciones y párrafos contribuyan al sentido armónico y unitario del mensaje general.",
     "Propiedades del texto", "Intermedio", "Redacción", "Coherencia textual")
]
