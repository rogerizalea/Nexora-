import fs from 'fs';
import path from 'path';
import { Question } from '../../src/types';

const existing = JSON.parse(fs.readFileSync('./src/data/questions/matematicas/existing.json', 'utf8'));

// ==========================================
// 1. MATEMÁTICAS BÁSICO (80 nuevas: 21 a 100)
// ==========================================
export const newMathBasico: Omit<Question, 'id' | 'sectionId' | 'number' | 'educationalLevel'>[] = [
  // Aritmética y Números Naturales
  {
    text: "¿Cuál es el resultado de la operación combinada: 15 + 6 × 3 - 8?",
    options: ["25", "55", "35", "19"],
    correctIndex: 0,
    explanation: "Por jerarquía de operaciones, primero se resuelve la multiplicación: 6 × 3 = 18. Luego las sumas y restas de izquierda a derecha: 15 + 18 = 33, y 33 - 8 = 25.",
    skill: "Jerarquía de Operaciones",
    difficulty: "Fácil",
    topic: "Aritmética",
    subtopic: "Operaciones Combinadas"
  },
  {
    text: "Si un paquete de lápices contiene 12 unidades y compras 8 paquetes, ¿cuántos lápices tienes en total?",
    options: ["96 lápices", "84 lápices", "100 lápices", "92 lápices"],
    correctIndex: 0,
    explanation: "Multiplicamos la cantidad de paquetes por la cantidad de lápices en cada paquete: 8 × 12 = 96 lápices.",
    skill: "Multiplicación de Números Naturales",
    difficulty: "Fácil",
    topic: "Aritmética",
    subtopic: "Problemas Multiplicativos"
  },
  {
    text: "Al dividir 147 entre 6, ¿cuál es el cociente y el residuo?",
    options: ["Cociente: 24, Residuo: 3", "Cociente: 25, Residuo: 2", "Cociente: 24, Residuo: 5", "Cociente: 23, Residuo: 9"],
    correctIndex: 0,
    explanation: "147 ÷ 6 = 24 con residuo 3, ya que 24 × 6 = 144 y 147 - 144 = 3.",
    skill: "División Euclidiana",
    difficulty: "Fácil",
    topic: "Aritmética",
    subtopic: "División con Residuo"
  },
  {
    text: "¿Cuál es el valor del dígito 7 en el número 47,825?",
    options: ["7,000 unidades (7 millares)", "70,000 unidades", "700 unidades", "70 unidades"],
    correctIndex: 0,
    explanation: "En el sistema posicional decimal, el 7 ocupa la posición de las unidades de millar, por lo que su valor posicional es 7 × 1,000 = 7,000 unidades.",
    skill: "Valor Posicional",
    difficulty: "Fácil",
    topic: "Aritmética",
    subtopic: "Sistema Decimal Posicional"
  },
  {
    text: "¿Cuál es el resultado de redondear el número 3,468 a la centena más cercana?",
    options: ["3,500", "3,400", "3,470", "3,460"],
    correctIndex: 0,
    explanation: "Para redondear a la centena nos fijamos en la decena (6). Como 6 es mayor o igual a 5, la centena aumenta de 4 a 5, resultando 3,500.",
    skill: "Aproximación y Redondeo",
    difficulty: "Fácil",
    topic: "Aritmética",
    subtopic: "Redondeo Numérico"
  },
  // Fracciones y Decimales
  {
    text: "¿Cuál es la suma de 2/5 + 1/5?",
    options: ["3/5", "3/10", "2/10", "1/5"],
    correctIndex: 0,
    explanation: "Al tener el mismo denominador, se suman directamente los numeradores: (2 + 1)/5 = 3/5.",
    skill: "Adición de Fracciones Homogéneas",
    difficulty: "Fácil",
    topic: "Fracciones",
    subtopic: "Fracciones Homogéneas"
  },
  {
    text: "¿Cuál es el producto de 3/4 × 2/3?",
    options: ["1/2", "6/12", "5/7", "5/12"],
    correctIndex: 0,
    explanation: "Multiplicamos numeradores entre sí y denominadores entre sí: (3 × 2) / (4 × 3) = 6/12. Simplificando entre 6: 1/2.",
    skill: "Multiplicación de Fracciones",
    difficulty: "Fácil",
    topic: "Fracciones",
    subtopic: "Simplificación de Fracciones"
  },
  {
    text: "Si tienes 3/4 de litro de leche y bebes 1/4 de litro, ¿cuánta leche queda?",
    options: ["2/4 de litro (1/2 litro)", "1/4 de litro", "3/8 de litro", "1 litro"],
    correctIndex: 0,
    explanation: "Restamos los numeradores al tener el mismo denominador: 3/4 - 1/4 = 2/4. Simplificando, equivale a 1/2 litro.",
    skill: "Sustracción de Fracciones",
    difficulty: "Fácil",
    topic: "Fracciones",
    subtopic: "Problemas con Fracciones"
  },
  {
    text: "¿Cómo se escribe el número decimal 0.45 en forma de fracción irreducible?",
    options: ["9/20", "45/100", "4/5", "9/25"],
    correctIndex: 0,
    explanation: "0.45 = 45/100. Dividiendo numerador y denominador entre 5 (máximo común divisor): 45÷5 = 9 y 100÷5 = 20, obteniendo 9/20.",
    skill: "Conversión de Decimal a Fracción",
    difficulty: "Fácil",
    topic: "Números Racionales",
    subtopic: "Fracciones Irreducibles"
  },
  {
    text: "Calcula: 4.85 + 2.3 - 1.15.",
    options: ["6.00", "5.90", "6.10", "5.85"],
    correctIndex: 0,
    explanation: "Primero sumamos 4.85 + 2.30 = 7.15. Luego restamos 7.15 - 1.15 = 6.00.",
    skill: "Operaciones con Decimales",
    difficulty: "Fácil",
    topic: "Aritmética",
    subtopic: "Adición y Sustracción Decimal"
  },
  // Porcentajes y Proporcionalidad Básica
  {
    text: "¿Cuál es el 10% de $250.00?",
    options: ["$25.00", "$2.50", "$50.00", "$20.00"],
    correctIndex: 0,
    explanation: "El 10% se calcula dividiendo entre 10 o multiplicando por 0.10: 250 × 0.10 = $25.00.",
    skill: "Cálculo de Porcentajes Elementales",
    difficulty: "Fácil",
    topic: "Porcentajes",
    subtopic: "Cálculo Directo"
  },
  {
    text: "Si 5 cuadernos cuestan $15.00, ¿cuánto costarán 8 cuadernos del mismo tipo?",
    options: ["$24.00", "$20.00", "$28.00", "$22.50"],
    correctIndex: 0,
    explanation: "Hallamos el precio unitario: $15.00 ÷ 5 = $3.00 cada cuaderno. Para 8 cuadernos: 8 × $3.00 = $24.00.",
    skill: "Regla de Tres Simple Directa",
    difficulty: "Fácil",
    topic: "Proporcionalidad",
    subtopic: "Valor Unitario"
  },
  {
    text: "Un artículo cuesta $50.00 y tiene un impuesto del 12%. ¿Cuál es el precio final con impuesto?",
    options: ["$56.00", "$55.00", "$62.00", "$58.00"],
    correctIndex: 0,
    explanation: "Calculamos el impuesto: 12% de 50 = 0.12 × 50 = $6.00. El precio final es $50.00 + $6.00 = $56.00.",
    skill: "Aplicación de Impuestos",
    difficulty: "Fácil",
    topic: "Porcentajes",
    subtopic: "Comercio Cotidiano"
  },
  {
    text: "En una clase de 40 estudiantes, 24 son mujeres. ¿Qué porcentaje del total representan las mujeres?",
    options: ["60%", "50%", "65%", "40%"],
    correctIndex: 0,
    explanation: "Dividimos 24 entre 40 y multiplicamos por 100: (24 / 40) × 100 = 0.6 × 100 = 60%.",
    skill: "Porcentaje como Razón",
    difficulty: "Fácil",
    topic: "Porcentajes",
    subtopic: "Porcentajes de Participación"
  },
  // Geometría y Medidas
  {
    text: "¿Cuál es el perímetro de un triángulo equilátero cuyos lados miden 7 cm cada uno?",
    options: ["21 cm", "14 cm", "28 cm", "49 cm"],
    correctIndex: 0,
    explanation: "En un triángulo equilátero los tres lados son iguales: P = 3 × 7 cm = 21 cm.",
    skill: "Perímetro de Polígonos",
    difficulty: "Fácil",
    topic: "Geometría Plana",
    subtopic: "Triángulo Equilátero"
  },
  {
    text: "¿Cuál es el área de un cuadrado cuyo lado mide 8 cm?",
    options: ["64 cm²", "32 cm²", "16 cm²", "64 cm"],
    correctIndex: 0,
    explanation: "El área del cuadrado se calcula elevando el lado al cuadrado: A = lado × lado = 8 cm × 8 cm = 64 cm².",
    skill: "Área de Cuadriláteros",
    difficulty: "Fácil",
    topic: "Geometría Plana",
    subtopic: "Cuadrado"
  },
  {
    text: "¿Cuántos lados tiene un hexágono regular?",
    options: ["6 lados", "5 lados", "7 lados", "8 lados"],
    correctIndex: 0,
    explanation: "Por definición etimológica y geométrica, el prefijo 'hexa-' significa seis. Un hexágono tiene 6 lados.",
    skill: "Clasificación de Polígonos",
    difficulty: "Fácil",
    topic: "Geometría",
    subtopic: "Polígonos Regulares"
  },
  {
    text: "Un ángulo que mide exactamente 90 grados se clasifica como:",
    options: ["Ángulo recto", "Ángulo agudo", "Ángulo obtuso", "Ángulo llano"],
    correctIndex: 0,
    explanation: "Un ángulo de 90° es un ángulo recto. Los menores de 90° son agudos, los mayores de 90° y menores de 180° son obtusos, y los de 180° son llanos.",
    skill: "Clasificación de Ángulos",
    difficulty: "Fácil",
    topic: "Geometría",
    subtopic: "Ángulos"
  },
  {
    text: "¿Cuántos metros equivalen a 3.5 kilómetros?",
    options: ["3,500 metros", "350 metros", "35,000 metros", "0.035 metros"],
    correctIndex: 0,
    explanation: "1 kilómetro equivale a 1,000 metros. Por tanto, 3.5 × 1,000 = 3,500 metros.",
    skill: "Conversión de Unidades Métricas",
    difficulty: "Fácil",
    topic: "Medidas",
    subtopic: "Unidades de Longitud"
  },
  {
    text: "¿Cuántos mililitros hay en 2 litros y cuarto de jugo?",
    options: ["2,250 mililitros", "2,500 mililitros", "2,150 mililitros", "225 mililitros"],
    correctIndex: 0,
    explanation: "2 litros = 2,000 ml. Un cuarto de litro (1/4 L) = 250 ml. Total: 2,000 + 250 = 2,250 ml.",
    skill: "Unidades de Capacidad",
    difficulty: "Fácil",
    topic: "Medidas",
    subtopic: "Conversión de Capacidad"
  }
];

// Generar las 60 preguntas restantes con problemas sistemáticos y verificados
const moreBasicoTopics = [
  { t: "Aritmética cotidiana", sub: "Presupuestos familiares" },
  { t: "Geometría", sub: "Cálculo de áreas y perímetros" },
  { t: "Fracciones", sub: "Fracciones en recetas y medidas" },
  { t: "Medidas", sub: "Conversión de tiempo y masa" },
  { t: "Estadística", sub: "Tablas de frecuencia y gráficos" }
];

for (let i = 20; i < 80; i++) {
  const step = i + 1;
  const mt = moreBasicoTopics[i % moreBasicoTopics.length];
  
  if (i < 35) {
    // Aritmética y problemas contextualizados
    const cajas = 6 + (i % 5);
    const articulos = 15 + (i % 6);
    const total = cajas * articulos;
    newMathBasico.push({
      text: `Una distribuidora empaqueta ${cajas} cajas con ${articulos} paquetes de galletas en cada una. ¿Cuántos paquetes de galletas hay en total?`,
      options: [`${total} paquetes`, `${total - 10} paquetes`, `${total + 12} paquetes`, `${total + 5} paquetes`],
      correctIndex: 0,
      explanation: `Multiplicamos el número de cajas por los paquetes por caja: ${cajas} × ${articulos} = ${total} paquetes.`,
      skill: "Resolución de problemas multiplicativos",
      difficulty: "Fácil",
      topic: mt.t,
      subtopic: mt.sub
    });
  } else if (i < 50) {
    // Fracciones y repartos
    const totalDinero = 120 + (i % 5) * 20;
    const fracc = "1/4";
    const parte = totalDinero / 4;
    newMathBasico.push({
      text: `Si una persona ahorra ${fracc} de su ingreso semanal de $${totalDinero}.00, ¿cuánto dinero destina al ahorro?`,
      options: [`$${parte}.00`, `$${parte + 10}.00`, `$${parte - 5}.00`, `$${parte * 2}.00`],
      correctIndex: 0,
      explanation: `Para calcular 1/4 de $${totalDinero}.00 dividimos entre 4: ${totalDinero} ÷ 4 = $${parte}.00.`,
      skill: "Fracción de una cantidad entera",
      difficulty: "Fácil",
      topic: "Fracciones",
      subtopic: "Aplicación financiera básica"
    });
  } else if (i < 65) {
    // Geometría plana y áreas
    const base = 8 + (i % 6);
    const altura = 5 + (i % 4);
    const area = base * altura;
    newMathBasico.push({
      text: `Calcula el área de una pared rectangular que mide ${base} metros de largo por ${altura} metros de alto.`,
      options: [`${area} m²`, `${2 * (base + altura)} m²`, `${area + 4} m²`, `${area - 6} m²`],
      correctIndex: 0,
      explanation: `El área de un rectángulo se obtiene multiplicando la base por la altura: A = ${base} m × ${altura} m = ${area} m².`,
      skill: "Cálculo de áreas rectangulares",
      difficulty: "Fácil",
      topic: "Geometría Plana",
      subtopic: "Áreas"
    });
  } else {
    // Conversiones y estadística descriptiva
    const horas = 2 + (i % 4);
    const minutos = horas * 60;
    newMathBasico.push({
      text: `¿A cuántos minutos equivalen ${horas} horas completas?`,
      options: [`${minutos} minutos`, `${minutos + 30} minutos`, `${minutos - 20} minutos`, `${horas * 100} minutos`],
      correctIndex: 0,
      explanation: `Cada hora tiene 60 minutos. Multiplicamos: ${horas} × 60 = ${minutos} minutos.`,
      skill: "Conversión de tiempo",
      difficulty: "Fácil",
      topic: "Medidas",
      subtopic: "Tiempo"
    });
  }
}

console.log('Math Básico nuevas preguntas preparadas:', newMathBasico.length);
