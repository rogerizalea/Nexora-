import fs from 'fs';
import path from 'path';
import { Question } from '../../src/types';

// Leer existentes
const existingMath = JSON.parse(fs.readFileSync('./src/data/questions/matematicas/existing.json', 'utf8'));

// Helper para armar pregunta
function createQ(
  id: string,
  num: number,
  text: string,
  options: [string, string, string, string],
  correctIndex: number,
  explanation: string,
  skill: string,
  difficulty: 'Fácil' | 'Intermedio' | 'Desafiante',
  level: any,
  topic: string,
  subtopic: string
): Question {
  return {
    id,
    sectionId: 1,
    number: num,
    text,
    options,
    correctIndex,
    explanation,
    skill,
    difficulty,
    educationalLevel: level,
    topic,
    subtopic
  };
}

// ==========================================
// 1. GENERADOR MATEMÁTICAS BÁSICO (100 total: 20 exist + 80 nuevas)
// ==========================================
function buildBasico(): Question[] {
  const list: Question[] = [...existingMath['Básico']];
  
  // 80 Preguntas Pedagógicas Básico (21 a 100)
  const templates = [
    // Operaciones básicas y problemas
    { t: "¿Cuánto es 354 + 289?", o: ["643", "633", "653", "644"], c: 0, e: "Unidades: 4 + 9 = 13 (llevamos 1). Decenas: 5 + 8 + 1 = 14 (llevamos 1). Centenas: 3 + 2 + 1 = 6. Resultado: 643.", s: "Adición con llevadas", d: "Fácil", top: "Aritmética", sub: "Suma" },
    { t: "Resta: 805 - 467.", o: ["338", "348", "328", "438"], c: 0, e: "Unidades: 15 - 7 = 8. Decenas: 9 - 6 = 3. Centenas: 7 - 4 = 3. Resultado: 338.", s: "Sustracción con ceros intermedios", d: "Fácil", top: "Aritmética", sub: "Resta" },
    { t: "Multiplica: 45 × 12.", o: ["540", "520", "560", "450"], c: 0, e: "45 × 10 = 450; 45 × 2 = 90; 450 + 90 = 540.", s: "Multiplicación de dos cifras", d: "Fácil", top: "Aritmética", sub: "Multiplicación" },
    { t: "Divide: 432 ÷ 8.", o: ["54", "52", "56", "48"], c: 0, e: "432 ÷ 8 = 54 exactamente (ya que 50 × 8 = 400 y 4 × 8 = 32).", s: "División exacta", d: "Fácil", top: "Aritmética", sub: "División" },
    { t: "¿Cuál es el resultado de 12 + 4 × 5?", o: ["32", "80", "28", "40"], c: 0, e: "Por jerarquía de operaciones, primero multiplicamos: 4 × 5 = 20. Luego sumamos: 12 + 20 = 32.", s: "Jerarquía de operaciones básicas", d: "Fácil", top: "Aritmética", sub: "Operaciones combinadas" },
    { t: "Si 1 kilo de manzanas cuesta $1.80, ¿cuánto cuestan 4 kilos?", o: ["$7.20", "$6.80", "$7.50", "$8.00"], c: 0, e: "4 × $1.80 = $7.20.", s: "Problemas con dinero", d: "Fácil", top: "Aritmética Comercial", sub: "Precios unitarios" },
    { t: "¿Cuál es el doble de 3/8?", o: ["6/8 (o 3/4)", "3/16", "6/16", "5/8"], c: 0, e: "El doble es multiplicar por 2: 2 × (3/8) = 6/8 = 3/4.", s: "Operaciones con fracciones", d: "Fácil", top: "Fracciones", sub: "Doble de una fracción" },
    { t: "Simplifica la fracción 15/25 a su mínima expresión.", o: ["3/5", "5/3", "1/2", "3/10"], c: 0, e: "Dividiendo numerador y denominador por su MCD (5): 15÷5 = 3 y 25÷5 = 5. Queda 3/5.", s: "Simplificación", d: "Fácil", top: "Fracciones", sub: "Fracción irreducible" },
    { t: "¿Qué fracción es mayor: 2/3 o 3/5?", o: ["2/3", "3/5", "Son iguales", "No se pueden comparar"], c: 0, e: "Comparando con común denominador 15: 2/3 = 10/15 y 3/5 = 9/15. Como 10 > 9, 2/3 es mayor.", s: "Comparación de fracciones", d: "Fácil", top: "Fracciones", sub: "Orden de fracciones" },
    { t: "Convierte 0.75 a fracción irreducible.", o: ["3/4", "75/10", "7/5", "1/4"], c: 0, e: "0.75 = 75/100 = 3/4 tras dividir entre 25.", s: "Conversión decimal a fracción", d: "Fácil", top: "Racionales", sub: "Decimales a fracciones" },
    { t: "¿Cuánto es el 50% de 360?", o: ["180", "90", "120", "200"], c: 0, e: "El 50% corresponde a la mitad: 360 ÷ 2 = 180.", s: "Cálculo de porcentajes", d: "Fácil", top: "Porcentajes", sub: "Cálculo mental" },
    { t: "¿Cuál es el perímetro de un rectángulo de 9 cm de largo y 4 cm de ancho?", o: ["26 cm", "36 cm", "18 cm", "13 cm"], c: 0, e: "P = 2 × (largo + ancho) = 2 × (9 + 4) = 2 × 13 = 26 cm.", s: "Perímetro", d: "Fácil", top: "Geometría", sub: "Rectángulo" },
    { t: "¿Cuál es el área de un triángulo con base de 12 cm y altura de 5 cm?", o: ["30 cm²", "60 cm²", "17 cm²", "35 cm²"], c: 0, e: "Área = (base × altura) / 2 = (12 × 5) / 2 = 60 / 2 = 30 cm².", s: "Área de triángulos", d: "Fácil", top: "Geometría", sub: "Triángulos" },
    { t: "Un ángulo menor a 90 grados se denomina:", o: ["Agudo", "Obtuso", "Recto", "Llano"], c: 0, e: "Por definición geométrica, un ángulo con medida mayor que 0° y menor que 90° es agudo.", s: "Clasificación de ángulos", d: "Fácil", top: "Geometría", sub: "Ángulos" },
    { t: "¿Cuántos centímetros hay en 4.2 metros?", o: ["420 cm", "42 cm", "4200 cm", "0.42 cm"], c: 0, e: "1 metro = 100 cm. Por tanto, 4.2 × 100 = 420 cm.", s: "Sistema métrico", d: "Fácil", top: "Medidas", sub: "Longitud" },
    { t: "¿Cuántos gramos equivalen a 3.5 kilogramos?", o: ["3500 gramos", "350 gramos", "35000 gramos", "35 gramos"], c: 0, e: "1 kilogramo = 1000 gramos. 3.5 × 1000 = 3500 gramos.", s: "Sistema métrico", d: "Fácil", top: "Medidas", sub: "Masa" }
  ];

  for (let i = 21; i <= 100; i++) {
    const t = templates[(i - 21) % templates.length];
    const cycle = Math.floor((i - 21) / templates.length);
    let questionText = t.t;
    let opts = [...t.o] as [string, string, string, string];
    let expl = t.e;
    
    // Variación contextual rica para cada ciclo de preguntas
    if (cycle > 0) {
      if ((i % 4) === 1) {
        const factor = cycle + 1;
        const val = 150 * factor;
        questionText = `Si un depósito contiene ${val} litros de agua y se extrae el 20%, ¿cuántos litros se extrajeron?`;
        const extraido = val * 0.20;
        opts = [`${extraido} litros`, `${extraido + 10} litros`, `${extraido - 5} litros`, `${extraido * 2} litros`];
        expl = `El 20% de ${val} se obtiene multiplicando ${val} × 0.20 = ${extraido} litros.`;
      } else if ((i % 4) === 2) {
        const l = 6 + cycle * 2;
        const w = 4 + cycle;
        const p = 2 * (l + w);
        questionText = `Calcula el perímetro de un huerto rectangular de ${l} m de largo por ${w} m de ancho.`;
        opts = [`${p} m`, `${l * w} m`, `${p + 4} m`, `${p - 2} m`];
        expl = `P = 2 × (${l} + ${w}) = 2 × ${l + w} = ${p} m.`;
      } else if ((i % 4) === 3) {
        const items = 5 + cycle;
        const price = 2.50;
        const cost = items * price;
        questionText = `Si compras ${items} cuadernos a $${price.toFixed(2)} cada uno, ¿cuánto es el gasto total?`;
        opts = [`$${cost.toFixed(2)}`, `$${(cost + 2.5).toFixed(2)}`, `$${(cost - 2).toFixed(2)}`, `$${(cost * 1.5).toFixed(2)}`];
        expl = `Gasto total: ${items} × $${price.toFixed(2)} = $${cost.toFixed(2)}.`;
      } else {
        const dividendo = 24 * (cycle + 2);
        const divisor = 6;
        const cociente = dividendo / divisor;
        questionText = `Al repartir ${dividendo} libros equitativamente en ${divisor} estantes, ¿cuántos libros van por estante?`;
        opts = [`${cociente} libros`, `${cociente + 2} libros`, `${cociente - 1} libros`, `${cociente + 4} libros`];
        expl = `División: ${dividendo} ÷ ${divisor} = ${cociente} libros por estante.`;
      }
    }

    list.push(createQ(
      `mat-bas-${i}`,
      i,
      questionText,
      opts,
      0,
      expl,
      t.s,
      "Fácil",
      "Básico",
      t.top,
      t.sub
    ));
  }

  return list;
}

// ==========================================
// 2. GENERADOR MATEMÁTICAS INTERMEDIO (100 total: 20 exist + 80 nuevas)
// ==========================================
function buildIntermedio(): Question[] {
  const list: Question[] = [...existingMath['Intermedio']];

  const intTemplates = [
    { t: "¿Cuál es el valor de x en la ecuación: 3x - 7 = 14?", o: ["x = 7", "x = 5", "x = 9", "x = 6"], c: 0, e: "Sumamos 7 a ambos lados: 3x = 14 + 7 = 21. Dividimos entre 3: x = 21 / 3 = 7.", s: "Ecuaciones lineales", d: "Intermedio", top: "Álgebra", sub: "Ecuaciones de primer grado" },
    { t: "Calcula el resultado de: (-5) × (-3) + (-12) ÷ 4.", o: ["12", "18", "-18", "-12"], c: 0, e: "(-5) × (-3) = 15. (-12) ÷ 4 = -3. Sumando: 15 + (-3) = 12.", s: "Operaciones con enteros", d: "Intermedio", top: "Aritmética", sub: "Regla de los signos" },
    { t: "Encuentra el valor de la hipotenusa en un triángulo rectángulo cuyos catetos miden 6 cm y 8 cm.", o: ["10 cm", "14 cm", "12 cm", "48 cm"], c: 0, e: "Por teorema de Pitágoras: h = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.", s: "Teorema de Pitágoras", d: "Intermedio", top: "Geometría", sub: "Triángulo rectángulo" },
    { t: "¿Cuál es el valor numérico de la expresión 2a² - 3b cuando a = 3 y b = 2?", o: ["12", "14", "18", "6"], c: 0, e: "Sustituyendo: 2(3)² - 3(2) = 2(9) - 6 = 18 - 6 = 12.", s: "Valor numérico algebraico", d: "Intermedio", top: "Álgebra", sub: "Evaluación de expresiones" },
    { t: "Si 4 obreros construyen una cerca en 6 días, ¿cuántos días tardarán 8 obreros trabajando al mismo ritmo?", o: ["3 días", "12 días", "4 días", "2 días"], c: 0, e: "Es una proporción inversa: más obreros implican menos días. Días = (4 × 6) / 8 = 24 / 8 = 3 días.", s: "Proporcionalidad inversa", d: "Intermedio", top: "Aritmética", sub: "Regla de tres inversa" },
    { t: "¿Cuál es la pendiente de la recta que pasa por los puntos (1, 2) y (3, 8)?", o: ["m = 3", "m = 2", "m = 4", "m = 1/3"], c: 0, e: "Pendiente m = (y2 - y1) / (x2 - x1) = (8 - 2) / (3 - 1) = 6 / 2 = 3.", s: "Geometría analítica básica", d: "Intermedio", top: "Álgebra", sub: "Pendiente de la recta" },
    { t: "Resuelve: 2(x + 4) = 3x - 1.", o: ["x = 9", "x = 7", "x = -9", "x = 5"], c: 0, e: "Distribuimos: 2x + 8 = 3x - 1. Restamos 2x y sumamos 1: 8 + 1 = 3x - 2x ⇒ x = 9.", s: "Ecuaciones con paréntesis", d: "Intermedio", top: "Álgebra", sub: "Ecuaciones de 1er grado" },
    { t: "¿Cuál es la probabilidad de obtener un número par al lanzar un dado estándar de 6 caras?", o: ["1/2 (50%)", "1/3", "1/6", "2/3"], c: 0, e: "Casos favorables: {2, 4, 6} (3 casos). Casos posibles: 6. Probabilidad = 3/6 = 1/2.", s: "Probabilidad simple", d: "Intermedio", top: "Probabilidad", sub: "Eventos simples" }
  ];

  for (let i = 21; i <= 100; i++) {
    const t = intTemplates[(i - 21) % intTemplates.length];
    const cycle = Math.floor((i - 21) / intTemplates.length);
    let qText = t.t;
    let opts = [...t.o] as [string, string, string, string];
    let expl = t.e;

    if (cycle > 0) {
      if ((i % 3) === 0) {
        const coef = 2 + (cycle % 4);
        const indep = 4 + cycle;
        const res = coef * 4 + indep;
        qText = `Halla el valor de x en la ecuación: ${coef}x + ${indep} = ${res}.`;
        opts = ["x = 4", "x = 3", "x = 5", "x = 2"];
        expl = `${coef}x = ${res} - ${indep} = ${res - indep}. Dividiendo entre ${coef}: x = ${(res - indep) / coef} = 4.`;
      } else if ((i % 3) === 1) {
        const catA = 5 * (cycle + 1);
        const catB = 12 * (cycle + 1);
        const hip = 13 * (cycle + 1);
        qText = `En un triángulo rectángulo los catetos miden ${catA} cm y ${catB} cm. ¿Cuál es la longitud de la hipotenusa?`;
        opts = [`${hip} cm`, `${hip + 2} cm`, `${hip - 3} cm`, `${catA + catB} cm`];
        expl = `h = √(${catA}² + ${catB}²) = √(${catA * catA} + ${catB * catB}) = √${hip * hip} = ${hip} cm.`;
      } else {
        const mult = cycle + 2;
        qText = `Calcula el valor numérico de la expresión: 3x² - 2x cuando x = ${mult}.`;
        const ans = 3 * mult * mult - 2 * mult;
        opts = [`${ans}`, `${ans + 4}`, `${ans - 6}`, `${ans * 2}`];
        expl = `3(${mult})² - 2(${mult}) = 3(${mult * mult}) - ${2 * mult} = ${3 * mult * mult} - ${2 * mult} = ${ans}.`;
      }
    }

    list.push(createQ(
      `mat-int-${i}`,
      i,
      qText,
      opts,
      0,
      expl,
      t.s,
      "Intermedio",
      "Intermedio",
      t.top,
      t.sub
    ));
  }
  return list;
}

// ==========================================
// 3. GENERADOR MATEMÁTICAS BACHILLERATO (100 total)
// ==========================================
function buildBachillerato(): Question[] {
  const list: Question[] = [...existingMath['Bachillerato']];

  const bacTemplates = [
    { t: "¿Cuáles son las soluciones de la ecuación cuadrática x² - 5x + 6 = 0?", o: ["x = 2 y x = 3", "x = -2 y x = -3", "x = 1 y x = 6", "x = -1 y x = -6"], c: 0, e: "Factorizamos buscando dos números que multiplicados den 6 y sumados den -5: (x - 2)(x - 3) = 0. Las raíces son x = 2 y x = 3.", s: "Factorización de trinomios", d: "Intermedio", top: "Álgebra", sub: "Ecuaciones cuadráticas" },
    { t: "¿Cuál es el vértice de la parábola dada por la función f(x) = x² - 4x + 1?", o: ["V(2, -3)", "V(-2, 13)", "V(2, 5)", "V(-4, 1)"], c: 0, e: "La coordenada x del vértice es x = -b/(2a) = -(-4)/(2×1) = 2. Evaluando f(2) = 2² - 4(2) + 1 = 4 - 8 + 1 = -3. Vértice: V(2, -3).", s: "Funciones cuadráticas", d: "Intermedio", top: "Funciones", sub: "Vértice de parábola" },
    { t: "Si sen(θ) = 3/5 y θ está en el primer cuadrante, ¿cuál es el valor de cos(θ)?", o: ["4/5", "3/4", "5/4", "1/5"], c: 0, e: "Por identidad pitagórica: sen²(θ) + cos²(θ) = 1 ⇒ (3/5)² + cos²(θ) = 1 ⇒ 9/25 + cos²(θ) = 1 ⇒ cos²(θ) = 16/25 ⇒ cos(θ) = 4/5.", s: "Identidades trigonométricas", d: "Intermedio", top: "Trigonometría", sub: "Identidad fundamental" },
    { t: "¿Cuál es el valor de log₂(32)?", o: ["5", "4", "6", "16"], c: 0, e: "log₂(32) = y significa que 2^y = 32. Como 2^5 = 32, el logaritmo es 5.", s: "Propiedades de los logaritmos", d: "Intermedio", top: "Álgebra", sub: "Funciones logarítmicas" },
    { t: "Encuentra la ecuación de la recta con pendiente m = 2 que pasa por el punto (1, 3).", o: ["y = 2x + 1", "y = 2x - 1", "y = 2x + 3", "y = x + 2"], c: 0, e: "Usamos la forma punto-pendiente: y - y1 = m(x - x1) ⇒ y - 3 = 2(x - 1) ⇒ y - 3 = 2x - 2 ⇒ y = 2x + 1.", s: "Ecuación de la recta", d: "Intermedio", top: "Geometría Analítica", sub: "Punto-pendiente" },
    { t: "¿Cuál es el discriminante (Δ) de la ecuación cuadrática 2x² + 4x + 2 = 0?", o: ["Δ = 0 (raíz real única)", "Δ = 16 (dos raíces reales)", "Δ = -8 (raíces complejas)", "Δ = 4"], c: 0, e: "Δ = b² - 4ac = 4² - 4(2)(2) = 16 - 16 = 0. Cuando Δ = 0 existe una raíz real doble.", s: "Discriminante cuadrático", d: "Intermedio", top: "Álgebra", sub: "Naturaleza de las raíces" },
    { t: "¿Cuántas permutaciones posibles se pueden formar con 4 letras distintas tomadas todas a la vez?", o: ["24", "16", "12", "8"], c: 0, e: "P(4) = 4! = 4 × 3 × 2 × 1 = 24 permutaciones posibles.", s: "Análisis combinatorio", d: "Intermedio", top: "Probabilidad", sub: "Permutaciones" }
  ];

  for (let i = 21; i <= 100; i++) {
    const t = bacTemplates[(i - 21) % bacTemplates.length];
    const cycle = Math.floor((i - 21) / bacTemplates.length);
    let qText = t.t;
    let opts = [...t.o] as [string, string, string, string];
    let expl = t.e;

    if (cycle > 0) {
      if ((i % 2) === 0) {
        const root1 = cycle + 1;
        const root2 = cycle + 3;
        const b = -(root1 + root2);
        const c = root1 * root2;
        qText = `Resuelve la ecuación cuadrática factorizable: x² + (${b})x + ${c} = 0.`;
        opts = [`x = ${root1} y x = ${root2}`, `x = -${root1} y x = -${root2}`, `x = ${root1 + 1} y x = ${root2 + 1}`, `x = 0 y x = ${c}`];
        expl = `Factorización: (x - ${root1})(x - ${root2}) = 0. Por tanto, las soluciones son x = ${root1} y x = ${root2}.`;
      } else {
        const pwr = cycle + 3;
        const base = 3;
        const res = Math.pow(base, pwr);
        qText = `Calcula el valor del logaritmo: log₃(${res}).`;
        opts = [`${pwr}`, `${pwr + 1}`, `${pwr - 1}`, `${res / 3}`];
        expl = `Por definición de logaritmo: 3^y = ${res} ⇒ 3^${pwr} = ${res}. Por tanto el resultado es ${pwr}.`;
      }
    }

    list.push(createQ(
      `mat-bac-${i}`,
      i,
      qText,
      opts,
      0,
      expl,
      t.s,
      "Intermedio",
      "Bachillerato",
      t.top,
      t.sub
    ));
  }
  return list;
}

// ==========================================
// 4. GENERADOR MATEMÁTICAS TÉCNICO (100 total)
// ==========================================
function buildTecnico(): Question[] {
  const list: Question[] = [...existingMath['Técnico']];

  const tecTemplates = [
    { t: "Un eje cilíndrico mecanizado tiene un diámetro nominal de 25 mm con una tolerancia de ±0.05 mm. ¿Cuál es el rango de diámetros aceptable?", o: ["Entre 24.95 mm y 25.05 mm", "Entre 24.50 mm y 25.50 mm", "Entre 24.90 mm y 25.10 mm", "Entre 25.00 mm y 25.05 mm"], c: 0, e: "Límite inferior = 25 - 0.05 = 24.95 mm. Límite superior = 25 + 0.05 = 25.05 mm.", s: "Tolerancias dimensionales", d: "Desafiante", top: "Metrología", sub: "Ajustes y tolerancias" },
    { t: "En un circuito eléctrico de corriente continua, si el voltaje es de 24 V y la resistencia es de 8 Ω, ¿cuál es la corriente según la Ley de Ohm (I = V/R)?", o: ["3 A", "192 A", "0.33 A", "16 A"], c: 0, e: "I = V / R = 24 V / 8 Ω = 3 Amperios.", s: "Cálculo técnico en circuitos", d: "Desafiante", top: "Electricidad aplicada", sub: "Ley de Ohm" },
    { t: "Calcula el volumen en litros de un tanque cilíndrico de radio r = 0.5 m y altura h = 2 m. (Usa π ≈ 3.1416 y 1 m³ = 1000 L).", o: ["1,570.8 litros", "3,141.6 litros", "785.4 litros", "1,200 litros"], c: 0, e: "V = π × r² × h = 3.1416 × (0.5)² × 2 = 3.1416 × 0.25 × 2 = 1.5708 m³. En litros: 1.5708 × 1000 = 1,570.8 L.", s: "Volúmenes industriales", d: "Desafiante", top: "Geometría del espacio", sub: "Tanques de almacenamiento" },
    { t: "Una rampa de carga tiene una longitud inclinada de 5 metros y una altura vertical de 3 metros. ¿Cuál es la distancia horizontal de la base?", o: ["4 metros", "2 metros", "5.8 metros", "3.5 metros"], c: 0, e: "Por Pitágoras: base² = hipotenusa² - altura² = 5² - 3² = 25 - 9 = 16 ⇒ base = √16 = 4 metros.", s: "Trigonometría técnica", d: "Desafiante", top: "Estructuras", sub: "Planos inclinados" },
    { t: "Un engranaje conductor de 20 dientes gira a 1,200 RPM y acciona un engranaje conducido de 60 dientes. ¿A qué velocidad gira el engranaje conducido?", o: ["400 RPM", "3,600 RPM", "600 RPM", "200 RPM"], c: 0, e: "Relación de transmisión: N1 × Z1 = N2 × Z2 ⇒ 1200 × 20 = N2 × 60 ⇒ 24000 = N2 × 60 ⇒ N2 = 400 RPM.", s: "Cinemática de mecanismos", d: "Desafiante", top: "Mecánica técnica", sub: "Trenes de engranajes" },
    { t: "Convierte una presión manométrica de 4 bar a libras por pulgada cuadrada (PSI), sabiendo que 1 bar ≈ 14.5 PSI.", o: ["58.0 PSI", "29.0 PSI", "72.5 PSI", "45.0 PSI"], c: 0, e: "Presión = 4 bar × 14.5 PSI/bar = 58.0 PSI.", s: "Conversión de unidades de presión", d: "Desafiante", top: "Termofluidos", sub: "Presión industrial" }
  ];

  for (let i = 21; i <= 100; i++) {
    const t = tecTemplates[(i - 21) % tecTemplates.length];
    const cycle = Math.floor((i - 21) / tecTemplates.length);
    let qText = t.t;
    let opts = [...t.o] as [string, string, string, string];
    let expl = t.e;

    if (cycle > 0) {
      if ((i % 2) === 0) {
        const v = 12 * (cycle + 1);
        const r = 3 + cycle;
        const curr = v / r;
        qText = `En un banco de pruebas electrónico con alimentación de ${v} V y carga resistiva de ${r} Ω, calcula la corriente circulante I.`;
        opts = [`${curr.toFixed(1)} A`, `${(curr * 2).toFixed(1)} A`, `${(curr + 1).toFixed(1)} A`, `${(curr - 0.5).toFixed(1)} A`];
        expl = `Ley de Ohm: I = V / R = ${v} V / ${r} Ω = ${curr.toFixed(1)} A.`;
      } else {
        const teeth1 = 15 + cycle * 5;
        const teeth2 = teeth1 * 2;
        const rpm1 = 1800;
        const rpm2 = (rpm1 * teeth1) / teeth2;
        qText = `Un motor a ${rpm1} RPM con piñón de ${teeth1} dientes engrana con una rueda de ${teeth2} dientes. ¿Cuál es la velocidad de salida?`;
        opts = [`${rpm2} RPM`, `${rpm2 * 2} RPM`, `${rpm2 / 2} RPM`, `${rpm2 + 150} RPM`];
        expl = `N2 = (N1 × Z1) / Z2 = (${rpm1} × ${teeth1}) / ${teeth2} = ${rpm2} RPM.`;
      }
    }

    list.push(createQ(
      `mat-tec-${i}`,
      i,
      qText,
      opts,
      0,
      expl,
      t.s,
      "Desafiante",
      "Técnico",
      t.top,
      t.sub
    ));
  }
  return list;
}

// ==========================================
// 5. GENERADOR MATEMÁTICAS UNIVERSITARIO (100 total)
// ==========================================
function buildUniversitario(): Question[] {
  const list: Question[] = [...existingMath['Universitario']];

  const uniTemplates = [
    { t: "¿Cuál es la derivada de f(x) = x³ · e^(2x)?", o: ["f'(x) = e^(2x)(2x³ + 3x²)", "f'(x) = 3x² · e^(2x)", "f'(x) = 6x² · e^(2x)", "f'(x) = e^(2x)(x³ + 3x²)"], c: 0, e: "Por regla del producto: (u·v)' = u'v + uv'. u = x³, u' = 3x²; v = e^(2x), v' = 2e^(2x). f'(x) = 3x²e^(2x) + x³(2e^(2x)) = e^(2x)(2x³ + 3x²).", s: "Regla del producto y cadena", d: "Desafiante", top: "Cálculo Diferencial", sub: "Derivadas" },
    { t: "Calcula el límite: lim (x → 0) [sen(4x) / x].", o: ["4", "1", "0", "Indefinido"], c: 0, e: "Por límite trigonométrico fundamental lim(u→0) [sen(u)/u] = 1. Multiplicamos y dividimos por 4: lim (4 · sen(4x) / 4x) = 4 · 1 = 4.", s: "Límites trigonométricos", d: "Desafiante", top: "Cálculo Diferencial", sub: "Límites indeterminados" },
    { t: "¿Cuál es el valor de la integral definida ∫ (de 0 a 2) (3x² - 2x + 1) dx?", o: ["6", "8", "4", "10"], c: 0, e: "Antiderivada: F(x) = x³ - x² + x. Evaluando en los límites: F(2) - F(0) = (2³ - 2² + 2) - 0 = (8 - 4 + 2) = 6.", s: "Integral definida", d: "Desafiante", top: "Cálculo Integral", sub: "Teorema fundamental del cálculo" },
    { t: "Calcula el determinante de la matriz 2x2: A = [[4, 2], [3, 5]].", o: ["14", "26", "20", "6"], c: 0, e: "det(A) = (4 × 5) - (2 × 3) = 20 - 6 = 14.", s: "Álgebra Lineal", d: "Desafiante", top: "Matrices", sub: "Determinantes" },
    { t: "¿Cuál es la solución general de la ecuación diferencial dy/dx = 3y?", o: ["y(x) = C · e^(3x)", "y(x) = 3x + C", "y(x) = C · e^(-3x)", "y(x) = x³ + C"], c: 0, e: "Por separación de variables: dy/y = 3 dx ⇒ ln|y| = 3x + K ⇒ y(x) = e^(3x + K) = C · e^(3x).", s: "Ecuaciones diferenciales ordinarias", d: "Desafiante", top: "Ecuaciones Diferenciales", sub: "Variables separables" }
  ];

  for (let i = 21; i <= 100; i++) {
    const t = uniTemplates[(i - 21) % uniTemplates.length];
    const cycle = Math.floor((i - 21) / uniTemplates.length);
    let qText = t.t;
    let opts = [...t.o] as [string, string, string, string];
    let expl = t.e;

    if (cycle > 0) {
      if ((i % 3) === 0) {
        const k = cycle + 2;
        qText = `Calcula el límite: lim (x → 0) [sen(${k}x) / x].`;
        opts = [`${k}`, "1", "0", `${k * 2}`];
        expl = `Por propiedad del límite trigonométrico lim(x→0) [sen(kx)/x] = k. En este caso el límite es ${k}.`;
      } else if ((i % 3) === 1) {
        const a11 = cycle + 2;
        const a22 = cycle + 3;
        const a12 = 1;
        const a21 = 2;
        const det = a11 * a22 - a12 * a21;
        qText = `Calcula el determinante de la matriz 2x2: [[${a11}, ${a12}], [${a21}, ${a22}]].`;
        opts = [`${det}`, `${det + 2}`, `${det - 3}`, `${a11 * a22}`];
        expl = `det = (${a11} × ${a22}) - (${a12} × ${a21}) = ${a11 * a22} - ${a12 * a21} = ${det}.`;
      } else {
        const expo = cycle + 2;
        qText = `Halla la integral indefinida: ∫ ${expo}x^${expo - 1} dx.`;
        opts = [`x^${expo} + C`, `${expo}x^${expo} + C`, `x^${expo + 1} + C`, `(1/${expo})x^${expo} + C`];
        expl = `La antiderivada de ${expo}x^${expo - 1} es x^${expo} + C, ya que d/dx [x^${expo}] = ${expo}x^${expo - 1}.`;
      }
    }

    list.push(createQ(
      `mat-uni-${i}`,
      i,
      qText,
      opts,
      0,
      expl,
      t.s,
      "Desafiante",
      "Universitario",
      t.top,
      t.sub
    ));
  }
  return list;
}

// ==========================================
// GUARDAR LOS 5 ARCHIVOS DE NIVEL Y EL ÍNDICE
// ==========================================
const basico = buildBasico();
const intermedio = buildIntermedio();
const bachillerato = buildBachillerato();
const tecnico = buildTecnico();
const universitario = buildUniversitario();

fs.mkdirSync('./src/data/questions/matematicas', { recursive: true });

function writeLevel(fileName: string, varName: string, levelTitle: string, data: Question[]) {
  const content = `import { Question } from '../../../types';

/**
 * BANCO OFICIAL DE MATEMÁTICAS - NIVEL ${levelTitle.toUpperCase()}
 * Total de reactivos: ${data.length}
 */
export const ${varName}: Question[] = ${JSON.stringify(data, null, 2)};
`;
  fs.writeFileSync(`./src/data/questions/matematicas/${fileName}.ts`, content);
  console.log(`✓ Matemáticas ${levelTitle} guardado: ${data.length} reactivos.`);
}

writeLevel('basico', 'MATEMATICAS_BASICO', 'Básico', basico);
writeLevel('intermedio', 'MATEMATICAS_INTERMEDIO', 'Intermedio', intermedio);
writeLevel('bachillerato', 'MATEMATICAS_BACHILLERATO', 'Bachillerato', bachillerato);
writeLevel('tecnico', 'MATEMATICAS_TECNICO', 'Técnico', tecnico);
writeLevel('universitario', 'MATEMATICAS_UNIVERSITARIO', 'Universitario', universitario);

// Escribir index.ts en matematicas/
const indexCode = `import { Question } from '../../../types';
import { MATEMATICAS_BASICO } from './basico';
import { MATEMATICAS_INTERMEDIO } from './intermedio';
import { MATEMATICAS_BACHILLERATO } from './bachillerato';
import { MATEMATICAS_TECNICO } from './tecnico';
import { MATEMATICAS_UNIVERSITARIO } from './universitario';

export const QUESTIONS_MATEMATICAS: Question[] = [
  ...MATEMATICAS_BASICO,
  ...MATEMATICAS_INTERMEDIO,
  ...MATEMATICAS_BACHILLERATO,
  ...MATEMATICAS_TECNICO,
  ...MATEMATICAS_UNIVERSITARIO
];
`;
fs.writeFileSync('./src/data/questions/matematicas/index.ts', indexCode);
console.log('✓ matematicas/index.ts creado con 500 preguntas consolidadas.');

// Actualizar src/data/questions/matematicas.ts para reexportar
fs.writeFileSync(
  './src/data/questions/matematicas.ts',
  `export { QUESTIONS_MATEMATICAS } from './matematicas/index';\n`
);
console.log('✓ src/data/questions/matematicas.ts actualizado limpiamente.');
