#!/usr/bin/env python3
import json
import os

with open('./src/data/questions/matematicas/existing.json', 'r', encoding='utf-8') as f:
    existing_math = json.load(f)

# Helper para construir una pregunta
def make_q(qid, num, text, options, c_idx, explanation, skill, diff, level, topic, subtopic):
    return {
        "id": qid,
        "sectionId": 1,
        "number": num,
        "text": text,
        "options": options,
        "correctIndex": c_idx,
        "explanation": explanation,
        "skill": skill,
        "difficulty": diff,
        "educationalLevel": level,
        "topic": topic,
        "subtopic": subtopic
    }

# =========================================================================
# MATEMÁTICAS BÁSICO (80 nuevas: 21 a 100)
# =========================================================================
basico_new_raw = [
    # 21 a 30: Aritmética básica y propiedades
    ("¿Cuál es el resultado de la operación combinada 25 + 15 ÷ 3 - 4?",
     ["26", "24", "10", "30"], 0,
     "Por jerarquía de operaciones se resuelve primero la división: 15 ÷ 3 = 5. Luego sumas y restas de izquierda a derecha: 25 + 5 = 30, y 30 - 4 = 26.",
     "Jerarquía de operaciones básicas", "Fácil", "Aritmética", "Operaciones combinadas"),

    ("Si compras 4 libretas a $2.25 cada una y 3 bolígrafos a $0.75 cada uno, ¿cuánto pagas en total?",
     ["$11.25", "$10.50", "$12.00", "$9.75"], 0,
     "Libretas: 4 × 2.25 = $9.00. Bolígrafos: 3 × 0.75 = $2.25. Total = $9.00 + $2.25 = $11.25.",
     "Resolución de problemas cotidianos", "Fácil", "Aritmética Comercial", "Cálculo de presupuestos"),

    ("¿Cuál es el resultado de restar 1,200 menos 745?",
     ["455", "555", "465", "445"], 0,
     "Efectuando la resta con llevadas: 1,200 - 745 = 455.",
     "Sustracción con ceros intermedios", "Fácil", "Aritmética", "Sustracción"),

    ("¿Qué propiedad de la suma se demuestra en la expresión: (14 + 8) + 6 = 14 + (8 + 6)?",
     ["Propiedad asociativa", "Propiedad conmutativa", "Elemento neutro", "Propiedad distributiva"], 0,
     "La propiedad asociativa establece que la forma en que se agrupan los sumandos no altera el resultado final.",
     "Propiedades de las operaciones", "Fácil", "Aritmética", "Propiedad asociativa"),

    ("¿Cuál es el mínimo común múltiplo (mcm) entre 4, 6 y 10?",
     ["60", "30", "120", "24"], 0,
     "Descomposición en factores primos: 4 = 2², 6 = 2×3, 10 = 2×5. mcm = 2² × 3 × 5 = 4 × 3 × 5 = 60.",
     "Mínimo común múltiplo", "Fácil", "Aritmética", "Divisibilidad"),

    ("¿Cuál es el máximo común divisor (MCD) entre 30 y 45?",
     ["15", "5", "3", "30"], 0,
     "Los divisores comunes de 30 y 45 son 1, 3, 5 y 15. El mayor de ellos es 15.",
     "Máximo común divisor", "Fácil", "Aritmética", "Factores comunes"),

    ("¿Cuál de los siguientes números es divisible tanto por 2 como por 3 y por 5?",
     ["90", "75", "84", "100"], 0,
     "Un número divisible por 2, 3 y 5 debe ser múltiplo de su mcm (30). 90 termina en 0 (divisible por 2 y 5) y la suma de sus cifras es 9 (divisible por 3).",
     "Criterios de divisibilidad", "Fácil", "Aritmética", "Divisibilidad compuesta"),

    ("Si un paquete de hojas contiene 500 hojas, ¿cuántas hojas habrá en 7 paquetes idénticos?",
     ["3,500 hojas", "3,000 hojas", "3,700 hojas", "4,000 hojas"], 0,
     "Multiplicación directa: 7 × 500 = 3,500 hojas.",
     "Multiplicación con ceros finales", "Fácil", "Aritmética", "Multiplicación"),

    ("Al redondear el número 7,864 a la decena más cercana se obtiene:",
     ["7,860", "7,870", "7,900", "7,800"], 0,
     "La cifra de las unidades es 4 (menor que 5), por lo que la decena se mantiene en 6 y la unidad pasa a 0: 7,860.",
     "Aproximación y redondeo", "Fácil", "Aritmética", "Redondeo a decenas"),

    ("Calcula el resultado exacto de: 480 ÷ 12.",
     ["40", "4", "44", "38"], 0,
     "Dividiendo 48 decenas entre 12 obtenemos 4 decenas, es decir, 40.",
     "Cálculo mental y división", "Fácil", "Aritmética", "División exacta"),

    # 31 a 40: Fracciones
    ("¿Cuál es el resultado de simplificar la fracción 42/56 a su expresión irreducible?",
     ["3/4", "6/8", "7/8", "2/3"], 0,
     "Dividiendo numerador y denominador entre su máximo común divisor (14): 42 ÷ 14 = 3, 56 ÷ 14 = 4. Resultado: 3/4.",
     "Simplificación de fracciones", "Fácil", "Fracciones", "Fracción irreducible"),

    ("Calcula la suma: 2/7 + 3/7 + 1/7.",
     ["6/7", "6/21", "5/7", "1"], 0,
     "Al tener igual denominador, se suman directamente los numeradores: (2 + 3 + 1)/7 = 6/7.",
     "Adición de fracciones homogéneas", "Fácil", "Fracciones", "Suma homogénea"),

    ("Encuentra el resultado de: 5/6 - 1/3.",
     ["1/2 (o 3/6)", "4/3", "4/6", "2/3"], 0,
     "Buscamos común denominador 6: 1/3 = 2/6. Restamos: 5/6 - 2/6 = 3/6 = 1/2.",
     "Sustracción de fracciones heterogéneas", "Fácil", "Fracciones", "Resta heterogénea"),

    ("¿Cuál es el producto de multiplicar 3/5 por 10/9?",
     ["2/3", "30/45", "1/2", "3/9"], 0,
     "Multiplicamos: (3 × 10) / (5 × 9) = 30/45. Simplificando entre 15: 30÷15 = 2 y 45÷15 = 3. Resultado: 2/3.",
     "Multiplicación de números racionales", "Fácil", "Fracciones", "Multiplicación"),

    ("Calcula la división: (4/5) ÷ (2/3).",
     ["6/5 (o 1 1/5)", "8/15", "5/6", "2/5"], 0,
     "Se multiplica por el recíproco de la segunda fracción: (4/5) × (3/2) = 12/10 = 6/5.",
     "División de fracciones", "Fácil", "Fracciones", "División por recíproco"),

    ("¿Qué número mixto equivale a la fracción impropia 17/5?",
     ["3 2/5", "2 7/5", "3 1/5", "4 2/5"], 0,
     "17 ÷ 5 = 3 con residuo 2. Por tanto, 17/5 equivale a 3 enteros y 2/5.",
     "Conversión a número mixto", "Fácil", "Fracciones", "Fracciones impropias"),

    ("Si en una botella de 2 litros queda 3/4 de litro de agua, ¿cuántos litros se han consumido?",
     ["1 1/4 litros (1.25 L)", "1 litro", "3/4 de litro", "1 1/2 litros"], 0,
     "Restamos del total: 2 - 3/4 = 8/4 - 3/4 = 5/4 = 1 1/4 litros.",
     "Problemas con números racionales", "Fácil", "Fracciones", "Consumo y capacidad"),

    ("¿Cuál de las siguientes fracciones es equivalente a 2/3?",
     ["8/12", "6/10", "4/9", "5/6"], 0,
     "Multiplicando numerador y denominador por 4: (2×4)/(3×4) = 8/12.",
     "Fracciones equivalentes", "Fácil", "Fracciones", "Amplificación"),

    ("Ordena de menor a mayor las fracciones: 1/2, 1/4 y 3/4.",
     ["1/4 < 1/2 < 3/4", "1/2 < 1/4 < 3/4", "3/4 < 1/2 < 1/4", "1/4 < 3/4 < 1/2"], 0,
     "En decimales: 1/4 = 0.25, 1/2 = 0.50 y 3/4 = 0.75. Por tanto, 1/4 < 1/2 < 3/4.",
     "Comparación y orden de fracciones", "Fácil", "Fracciones", "Relación de orden"),

    ("Si una receta para 4 personas requiere 250 g de harina, ¿cuánta harina se necesita para 8 personas?",
     ["500 g", "750 g", "350 g", "1,000 g"], 0,
     "Para el doble de personas (8 = 4 × 2) se requiere el doble de harina: 250 g × 2 = 500 g.",
     "Proporciones en situaciones reales", "Fácil", "Proporcionalidad", "Recetas culinarias"),

    # 41 a 50: Decimales y dinero
    ("Suma los siguientes números decimales: 14.35 + 8.9 + 2.05.",
     ["25.30", "24.30", "25.10", "26.30"], 0,
     "Alineando por la coma decimal: 14.35 + 8.90 + 2.05 = 25.30.",
     "Adición de decimales", "Fácil", "Aritmética", "Números decimales"),

    ("Calcula la diferencia: 50.00 - 32.65.",
     ["17.35", "18.35", "17.45", "16.35"], 0,
     "50.00 - 32.65 = 17.35.",
     "Sustracción de decimales", "Fácil", "Aritmética", "Operaciones con dinero"),

    ("Multiplica 3.4 por 0.5.",
     ["1.7", "1.70", "0.17", "17.0"], 0,
     "Multiplicar por 0.5 equivale a obtener la mitad: 3.4 ÷ 2 = 1.7.",
     "Multiplicación decimal", "Fácil", "Aritmética", "Cálculo mental"),

    ("Divide 84.6 entre 2.",
     ["42.3", "42.0", "41.3", "43.3"], 0,
     "84.6 ÷ 2 = 42.3.",
     "División de decimales", "Fácil", "Aritmética", "División por entero"),

    ("Si pagas una cuenta de $37.40 con un billete de $50.00, ¿cuál es tu cambio exacto?",
     ["$12.60", "$13.60", "$12.40", "$13.40"], 0,
     "$50.00 - $37.40 = $12.60.",
     "Cálculo de cambio monetario", "Fácil", "Aritmética Comercial", "Transacciones cotidianas"),

    ("Convierte la fracción 3/5 a su representación decimal.",
     ["0.6", "0.35", "0.75", "0.5"], 0,
     "Dividiendo numerador entre denominador: 3 ÷ 5 = 0.6.",
     "Conversión de fracción a decimal", "Fácil", "Números Racionales", "Decimales exactos"),

    ("¿Cuál número decimal es mayor: 0.705 o 0.75?",
     ["0.75", "0.705", "Son iguales", "No se puede determinar"], 0,
     "Igualando cifras decimales: 0.750 > 0.705, ya que en las centésimas 5 es mayor que 0.",
     "Comparación de decimales", "Fácil", "Aritmética", "Valor de posición decimal"),

    ("Un metro de tela cuesta $4.50. ¿Cuánto costarán 6 metros de la misma tela?",
     ["$27.00", "$24.00", "$28.50", "$25.00"], 0,
     "Multiplicamos: 6 × $4.50 = $27.00.",
     "Multiplicación monetaria", "Fácil", "Aritmética Comercial", "Cálculo de costos"),

    ("Al dividir una cuenta de $84.00 entre 4 amigos a partes iguales, ¿cuánto paga cada uno?",
     ["$21.00", "$22.00", "$20.00", "$24.00"], 0,
     "$84.00 ÷ 4 = $21.00 por persona.",
     "Reparto equitativo", "Fácil", "Aritmética", "División aplicada"),

    ("Calcula el resultado de: 100 × 0.08.",
     ["8", "0.8", "80", "0.008"], 0,
     "Multiplicar por 100 desplaza la coma dos posiciones a la derecha: 0.08 × 100 = 8.",
     "Multiplicación por potencias de diez", "Fácil", "Aritmética", "Potencias de diez"),

    # 51 a 60: Porcentajes y razones
    ("¿Cuál es el 25% de 200?",
     ["50", "25", "75", "40"], 0,
     "El 25% equivale a la cuarta parte (1/4): 200 ÷ 4 = 50.",
     "Cálculo de porcentajes", "Fácil", "Porcentajes", "Cuarta parte"),

    ("Un televisor de $400.00 tiene un descuento del 10%. ¿Cuánto dinero se descuenta?",
     ["$40.00", "$10.00", "$20.00", "$50.00"], 0,
     "10% de 400 = 0.10 × 400 = $40.00.",
     "Descuento comercial", "Fácil", "Porcentajes", "Rebajas"),

    ("Si 3 botellas de agua cuestan $1.50, ¿cuánto costarán 10 botellas?",
     ["$5.00", "$4.50", "$6.00", "$5.50"], 0,
     "Precio unitario: $1.50 ÷ 3 = $0.50. Para 10 botellas: 10 × $0.50 = $5.00.",
     "Regla de tres simple directa", "Fácil", "Proporcionalidad", "Costos proporcionales"),

    ("En un salón con 50 estudiantes, el 80% aprobó el examen. ¿Cuántos estudiantes aprobaron?",
     ["40 estudiantes", "45 estudiantes", "35 estudiantes", "38 estudiantes"], 0,
     "80% de 50 = (80/100) × 50 = 0.8 × 50 = 40 estudiantes.",
     "Aplicación de porcentajes", "Fácil", "Porcentajes", "Aprobación académica"),

    ("¿Qué porcentaje representa el número 15 respecto a 60?",
     ["25%", "20%", "30%", "15%"], 0,
     "(15 / 60) × 100 = (1/4) × 100 = 25%.",
     "Porcentaje relativo", "Fácil", "Porcentajes", "Razón porcentual"),

    ("Si un automóvil gasta 2 galones de gasolina para recorrer 60 km, ¿cuántos galones necesitará para 150 km a igual rendimiento?",
     ["5 galones", "6 galones", "4 galones", "4.5 galones"], 0,
     "Rendimiento: 60 km ÷ 2 galones = 30 km/galón. Para 150 km: 150 ÷ 30 = 5 galones.",
     "Consumo de combustible", "Fácil", "Proporcionalidad", "Rendimiento"),

    ("El precio de una entrada al cine es de $6.00. Si se incrementa en un 50%, ¿cuál será el nuevo precio?",
     ["$9.00", "$8.00", "$12.00", "$7.50"], 0,
     "Incremento: 50% de 6 = $3.00. Nuevo precio = $6.00 + $3.00 = $9.00.",
     "Aumento porcentual", "Fácil", "Porcentajes", "Incremento de tarifas"),

    ("¿Cuál es la razón simplificada entre 12 y 16?",
     ["3 a 4 (3/4)", "2 a 3", "4 a 5", "6 a 8"], 0,
     "Dividiendo ambos términos entre su MCD (4): 12÷4 = 3 y 16÷4 = 4. Razón: 3 a 4.",
     "Razones matemáticas", "Fácil", "Proporcionalidad", "Simplificación de razones"),

    ("Si 1 libra equivale aproximadamente a 0.45 kilogramos, ¿cuántos kilos son 10 libras?",
     ["4.5 kg", "45 kg", "0.45 kg", "4.05 kg"], 0,
     "Multiplicación directa: 10 × 0.45 = 4.5 kg.",
     "Conversión de masa", "Fácil", "Medidas", "Libras a kilogramos"),

    ("Si una máquina produce 120 piezas por hora, ¿cuántas piezas producirá en 5 horas de trabajo continuo?",
     ["600 piezas", "500 piezas", "720 piezas", "650 piezas"], 0,
     "120 piezas/hora × 5 horas = 600 piezas.",
     "Tasa de producción", "Fácil", "Proporcionalidad", "Producción continua"),

    # 61 a 70: Geometría plana y perímetros
    ("¿Cuál es el perímetro de un pentágono regular si cada uno de sus lados mide 8 cm?",
     ["40 cm", "48 cm", "32 cm", "35 cm"], 0,
     "El pentágono tiene 5 lados iguales: P = 5 × 8 cm = 40 cm.",
     "Perímetro de polígonos regulares", "Fácil", "Geometría Plana", "Pentágono"),

    ("Calcula el área de un rombo cuyas diagonales miden D = 10 cm y d = 6 cm.",
     ["30 cm²", "60 cm²", "16 cm²", "24 cm²"], 0,
     "Fórmula del área del rombo: A = (D × d) / 2 = (10 × 6) / 2 = 60 / 2 = 30 cm².",
     "Área del rombo", "Fácil", "Geometría Plana", "Rombos"),

    ("¿Cuánto suman los tres ángulos interiores de cualquier triángulo?",
     ["180 grados", "360 grados", "90 grados", "270 grados"], 0,
     "Por teorema fundamental de la geometría euclidiana, la suma de los ángulos internos de un triángulo siempre es 180°.",
     "Teorema angular del triángulo", "Fácil", "Geometría Plana", "Ángulos interiores"),

    ("Si dos de los ángulos de un triángulo miden 50° y 70°, ¿cuánto mide el tercer ángulo?",
     ["60°", "50°", "70°", "80°"], 0,
     "Tercer ángulo = 180° - (50° + 70°) = 180° - 120° = 60°.",
     "Cálculo de ángulos faltantes", "Fácil", "Geometría Plana", "Triángulos"),

    ("Un terreno cuadrado tiene un área de 81 metros cuadrados. ¿Cuánto mide cada lado?",
     ["9 metros", "8 metros", "18 metros", "8.5 metros"], 0,
     "Área = L² ⇒ L = √81 = 9 metros.",
     "Raíz cuadrada aplicada a áreas", "Fácil", "Geometría Plana", "Cuadrados"),

    ("¿Cuál es la longitud de la circunferencia de una rueda de radio r = 7 cm? (Usa π ≈ 22/7)",
     ["44 cm", "22 cm", "88 cm", "154 cm"], 0,
     "Longitud = 2 × π × r = 2 × (22/7) × 7 = 2 × 22 = 44 cm.",
     "Perímetro de la circunferencia", "Fácil", "Geometría Plana", "Circunferencia"),

    ("¿Qué nombre recibe el polígono regular que tiene 8 lados?",
     ["Octógono (u octágono)", "Heptágono", "Nonágono", "Decágono"], 0,
     "El polígono regular de 8 lados es el octógono.",
     "Nomenclatura de polígonos", "Fácil", "Geometría Plana", "Clasificación"),

    ("Dos ángulos que suman exactamente 180° se denominan:",
     ["Suplementarios", "Complementarios", "Adyacentes rectos", "Opuestos por el vértice"], 0,
     "Los ángulos suplementarios son aquellos cuya suma angular totaliza 180°.",
     "Relaciones angulares", "Fácil", "Geometría Plana", "Ángulos suplementarios"),

    ("Si un ángulo mide 35°, ¿cuánto mide su ángulo complementario?",
     ["55°", "65°", "145°", "45°"], 0,
     "Los complementarios suman 90°: 90° - 35° = 55°.",
     "Ángulos complementarios", "Fácil", "Geometría Plana", "Complemento"),

    ("Calcula el área de un trapecio con bases B = 12 cm, b = 8 cm y altura h = 5 cm.",
     ["50 cm²", "100 cm²", "60 cm²", "45 cm²"], 0,
     "Área = [(B + b) × h] / 2 = [(12 + 8) × 5] / 2 = [20 × 5] / 2 = 100 / 2 = 50 cm².",
     "Área del trapecio", "Fácil", "Geometría Plana", "Trapecio"),

    # 71 a 80: Medidas, magnitudes y tiempo
    ("¿A cuántos segundos equivalen 15 minutos?",
     ["900 segundos", "600 segundos", "1,500 segundos", "750 segundos"], 0,
     "1 minuto = 60 segundos. Multiplicamos: 15 × 60 = 900 segundos.",
     "Conversión temporal", "Fácil", "Medidas", "Minutos a segundos"),

    ("Si una película comienza a las 16:45 y dura 1 hora y 35 minutos, ¿a qué hora termina?",
     ["18:20", "18:15", "18:30", "17:80"], 0,
     "16:45 + 1 hora = 17:45. Sumamos 35 min: 17:45 + 15 min = 18:00, más 20 min = 18:20.",
     "Cálculo de tiempos y horarios", "Fácil", "Medidas", "Horas y minutos"),

    ("¿Cuántos miligramos hay en 4.5 gramos?",
     ["4,500 miligramos", "450 miligramos", "45,000 miligramos", "0.0045 miligramos"], 0,
     "1 gramo = 1,000 miligramos. Multiplicando: 4.5 × 1,000 = 4,500 mg.",
     "Submúltiplos del gramo", "Fácil", "Medidas", "Masa"),

    ("Una caja contiene 24 botellas de 500 ml cada una. ¿Cuántos litros de líquido hay en total?",
     ["12 litros", "24 litros", "10 litros", "15 litros"], 0,
     "Capacidad total en ml = 24 × 500 ml = 12,000 ml. Como 1 L = 1,000 ml, son 12 litros.",
     "Capacidad y volumen", "Fácil", "Medidas", "Litros y mililitros"),

    ("¿Cuántos días hay en 5 semanas completas?",
     ["35 días", "30 días", "40 días", "28 días"], 0,
     "Cada semana tiene 7 días: 5 × 7 = 35 días.",
     "Unidades de calendario", "Fácil", "Medidas", "Semanas y días"),

    ("Calcula el volumen de una caja rectangular con aristas de 4 cm de largo, 3 cm de ancho y 5 cm de alto.",
     ["60 cm³", "12 cm³", "48 cm³", "72 cm³"], 0,
     "Volumen = largo × ancho × alto = 4 × 3 × 5 = 60 cm³.",
     "Volumen de prismas rectangulares", "Fácil", "Geometría del Espacio", "Prismas"),

    ("Si una cisterna tiene una capacidad de 1.5 metros cúbicos, ¿cuántos litros de agua puede almacenar?",
     ["1,500 litros", "150 litros", "15,000 litros", "1,000 litros"], 0,
     "1 metro cúbico (m³) equivale exactamente a 1,000 litros. Por tanto, 1.5 × 1,000 = 1,500 litros.",
     "Equivalencia volumen-capacidad", "Fácil", "Medidas", "Metros cúbicos a litros"),

    ("Un atleta corre a una velocidad constante de 5 metros por segundo. ¿Qué distancia recorre en 20 segundos?",
     ["100 metros", "120 metros", "80 metros", "90 metros"], 0,
     "Distancia = velocidad × tiempo = 5 m/s × 20 s = 100 metros.",
     "Relación cinemática elemental", "Fácil", "Medidas", "Distancia y tiempo"),

    ("¿Cuántos centímetros cuadrados hay en un decímetro cuadrado (dm²)?",
     ["100 cm²", "10 cm²", "1,000 cm²", "1,0000 cm²"], 0,
     "1 dm = 10 cm. Elevando al cuadrado: 1 dm² = (10 cm)² = 100 cm².",
     "Unidades de superficie", "Fácil", "Medidas", "Áreas métricas"),

    ("Si un paquete pesa 3/4 de kilogramo, ¿cuántos gramos pesa?",
     ["750 gramos", "500 gramos", "250 gramos", "800 gramos"], 0,
     "1 kg = 1,000 g. 3/4 de 1,000 g = (3 × 1,000) ÷ 4 = 3,000 ÷ 4 = 750 g.",
     "Fracción de unidad de masa", "Fácil", "Medidas", "Kilos a gramos"),

    # 81 a 90: Estadística descriptiva elemental
    ("Calcula la media aritmética del siguiente conjunto de datos: 10, 12, 14, 16, 18.",
     ["14", "13", "15", "12"], 0,
     "Suma de datos = 10 + 12 + 14 + 16 + 18 = 70. Dividiendo entre el número de datos (5): 70 ÷ 5 = 14.",
     "Media aritmética", "Fácil", "Estadística", "Promedio simple"),

    ("¿Cuál es la mediana del siguiente conjunto ordenado de edades: 12, 13, 15, 17, 19, 21, 23?",
     ["17", "15", "19", "16"], 0,
     "Al estar ordenados y tener 7 datos (número impar), la mediana es el dato central, que ocupa la posición 4: 17.",
     "Mediana de datos impares", "Fácil", "Estadística", "Mediana"),

    ("En la serie de puntuaciones [5, 7, 8, 8, 9, 8, 10, 6], ¿cuál es la moda?",
     ["8", "7", "9", "8.5"], 0,
     "El valor 8 se repite 3 veces, con mayor frecuencia que cualquier otro puntaje.",
     "Moda estadística", "Fácil", "Estadística", "Frecuencia mayor"),

    ("¿Cuál es el rango del conjunto de números: [14, 28, 19, 35, 12, 22]?",
     ["23", "35", "21", "25"], 0,
     "El rango es la diferencia entre el valor máximo y el mínimo: 35 - 12 = 23.",
     "Medidas de dispersión básica", "Fácil", "Estadística", "Rango"),

    ("En una urna hay 4 bolas rojas, 3 azules y 5 verdes. ¿Cuántas bolas hay en total?",
     ["12 bolas", "10 bolas", "15 bolas", "11 bolas"], 0,
     "4 + 3 + 5 = 12 bolas en total.",
     "Conteo de espacio muestral", "Fácil", "Probabilidad", "Espacio muestral"),

    ("Si se extrae al azar una bola de una urna con 3 bolas rojas y 7 bolas blancas, ¿cuál es la probabilidad de que sea roja?",
     ["3/10 (30%)", "7/10", "3/7", "1/3"], 0,
     "Casos favorables: 3. Total de casos: 3 + 7 = 10. Probabilidad = 3/10 = 30%.",
     "Probabilidad clásica simple", "Fácil", "Probabilidad", "Regla de Laplace"),

    ("Un gráfico circular muestra que el 50% de los votos fue para la Lista A. ¿Cuántos grados del círculo representa ese sector?",
     ["180°", "90°", "120°", "360°"], 0,
     "El círculo completo tiene 360°. El 50% de 360° es 360° × 0.50 = 180°.",
     "Interpretación de gráficos circulares", "Fácil", "Estadística", "Sectores circulares"),

    ("En un examen con 20 preguntas, un estudiante respondió correctamente 16. ¿Qué porcentaje de aciertos obtuvo?",
     ["80%", "75%", "85%", "70%"], 0,
     "(16 ÷ 20) × 100 = 0.8 × 100 = 80%.",
     "Rendimiento porcentual", "Fácil", "Estadística", "Porcentaje de acierto"),

    ("Si lanzas una moneda no trucada al aire, ¿cuál es la probabilidad de obtener cara?",
     ["1/2 (50%)", "1/4", "1", "1/3"], 0,
     "Hay 2 resultados posibles (cara o cruz) y 1 favorable: 1/2 = 50%.",
     "Probabilidad de eventos equiprobables", "Fácil", "Probabilidad", "Monedas"),

    ("La siguiente tabla de frecuencias muestra las mascotas de un grupo: Perro (14), Gato (10), Pájaro (6). ¿Cuántas mascotas se registraron en total?",
     ["30 mascotas", "28 mascotas", "32 mascotas", "26 mascotas"], 0,
     "Suma de frecuencias absolutas: 14 + 10 + 6 = 30 mascotas.",
     "Lectura de tablas de frecuencias", "Fácil", "Estadística", "Frecuencia total"),

    # 91 a 100: Razonamiento numérico y combinaciones básicas
    ("Si tienes 3 camisas y 4 pantalones diferentes, ¿cuántas combinaciones de ropa distintas puedes formar?",
     ["12 combinaciones", "7 combinaciones", "14 combinaciones", "9 combinaciones"], 0,
     "Por principio multiplicativo de conteo: 3 camisas × 4 pantalones = 12 combinaciones posibles.",
     "Principio multiplicativo básico", "Fácil", "Probabilidad", "Combinaciones simples"),

    ("¿Qué número continúa la secuencia lógica: 3, 7, 11, 15, ...?",
     ["19", "18", "21", "17"], 0,
     "Es una progresión aritmética donde se suma 4 en cada paso: 15 + 4 = 19.",
     "Patrones numéricos lineales", "Fácil", "Aritmética", "Sucesiones"),

    ("¿Cuál es el valor que falta en la igualdad: 45 + ___ = 120?",
     ["75", "65", "85", "70"], 0,
     "Despejando: 120 - 45 = 75.",
     "Ecuaciones aditivas simples", "Fácil", "Álgebra", "Igualdades numéricas"),

    ("Si un libro tiene 240 páginas y lees 30 páginas por día, ¿en cuántos días terminarás de leerlo?",
     ["8 días", "7 días", "9 días", "6 días"], 0,
     "240 ÷ 30 = 8 días.",
     "Reparto temporal", "Fácil", "Aritmética", "Problemas de lectura"),

    ("¿Cuál es la raíz cuadrada exacta de 144?",
     ["12", "14", "11", "13"], 0,
     "12 × 12 = 144, por lo que √144 = 12.",
     "Radicación exacta", "Fácil", "Aritmética", "Raíces cuadradas"),

    ("Calcula el valor de la potencia: 2⁵.",
     ["32", "10", "16", "64"], 0,
     "2⁵ = 2 × 2 × 2 × 2 × 2 = 32.",
     "Potenciación básica", "Fácil", "Aritmética", "Potencias de dos"),

    ("En un juego de mesa, un jugador avanza 14 casillas, retrocede 6 y luego avanza 8. ¿En qué posición queda respecto a la salida?",
     ["16 casillas adelante", "14 casillas adelante", "28 casillas adelante", "12 casillas adelante"], 0,
     "14 - 6 + 8 = 8 + 8 = 16 casillas adelante.",
     "Operaciones aditivas con desplazamientos", "Fácil", "Aritmética", "Enteros positivos"),

    ("¿Cuánto es la tercera parte de 96?",
     ["32", "28", "36", "34"], 0,
     "96 ÷ 3 = 32.",
     "Fracción como división", "Fácil", "Aritmética", "Tercio numérico"),

    ("Si 1 hora tiene 3,600 segundos, ¿cuántos segundos hay en 2 horas?",
     ["7,200 segundos", "6,000 segundos", "7,000 segundos", "5,400 segundos"], 0,
     "2 × 3,600 = 7,200 segundos.",
     "Equivalencia de segundos", "Fácil", "Medidas", "Segundos en horas"),

    ("Una pista de carreras circular mide 400 metros por vuelta. Si un corredor completa 6 vueltas y media, ¿cuántos metros recorre?",
     ["2,600 metros", "2,400 metros", "2,800 metros", "2,500 metros"], 0,
     "6 vueltas = 6 × 400 = 2,400 m. Media vuelta = 200 m. Total = 2,400 + 200 = 2,600 metros.",
     "Problemas de distancia y vueltas", "Fácil", "Aritmética", "Circuitos")
]

print(f"Total nuevas básico preparadas: {len(basico_new_raw)}")
assert len(basico_new_raw) == 80, f"Se esperaban 80 preguntas, hay {len(basico_new_raw)}"

# Construir lista combinada para Básico (20 existentes + 80 nuevas)
basico_combined = []
for q in existing_math['Básico']:
    basico_combined.append(q)

for idx, item in enumerate(basico_new_raw, start=21):
    text, opts, c_idx, expl, skill, diff, top, sub = item
    basico_combined.append(make_q(f"mat-bas-{idx}", idx, text, opts, c_idx, expl, skill, diff, "Básico", top, sub))

assert len(basico_combined) == 100

# Escribir basico.ts
with open('./src/data/questions/matematicas/basico.ts', 'w', encoding='utf-8') as f:
    f.write("import { Question } from '../../../types';\n\n")
    f.write("/**\n * BANCO OFICIAL DE MATEMÁTICAS - NIVEL BÁSICO (100 Reactivos)\n */\n")
    f.write("export const MATEMATICAS_BASICO: Question[] = " + json.dumps(basico_combined, indent=2, ensure_ascii=False) + ";\n")

print("✓ Matemáticas Básico generado exitosamente: exactamente 100 reactivos únicos.")
