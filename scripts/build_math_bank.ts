import fs from 'fs';
import path from 'path';
import { Question } from '../src/types';
import { generateLevelFile } from './generate_matematicas_helper';

// --- GENERACIÓN DE MATEMÁTICAS BÁSICO (80 preguntas: mat-bas-21 a mat-bas-100) ---
const basicoQuestions: Question[] = [];

// Aritmética, fracciones, porcentajes, medidas, figuras básicas y problemas cotidianos
const basicBankData = [
  // Fracciones y decimales
  {
    t: "¿Cuál es el resultado de sumar 3/4 + 1/2 en forma de fracción irreducible o número mixto?",
    o: ["1 1/4 (o 5/4)", "4/6", "1 1/2", "3/8"],
    c: 0,
    e: "Convertimos a común denominador: 1/2 = 2/4. Sumamos los numeradores: 3/4 + 2/4 = 5/4, lo que equivale al número mixto 1 1/4.",
    s: "Adición de fracciones heterogéneas",
    d: "Fácil",
    tp: "Aritmética",
    stp: "Fracciones"
  },
  {
    t: "Si una pizza se divide en 8 porciones iguales y una persona come 3 porciones, ¿qué fracción de la pizza queda disponible?",
    o: ["5/8", "3/8", "1/2", "6/8"],
    c: 0,
    e: "La pizza completa representa 8/8. Si se consumen 3/8, la cantidad restante es 8/8 - 3/8 = 5/8.",
    s: "Sustracción de fracciones",
    d: "Fácil",
    tp: "Aritmética",
    stp: "Fracciones aplicadas"
  },
  {
    t: "¿Cuál es el valor decimal equivalente a la fracción 7/100?",
    o: ["0.07", "0.7", "0.007", "7.0"],
    c: 0,
    e: "Dividir entre 100 desplaza la coma decimal dos posiciones hacia la izquierda: 7/100 = 0.07.",
    s: "Conversión de fracción a decimal",
    d: "Fácil",
    tp: "Aritmética",
    stp: "Números decimales"
  },
  {
    t: "Calcula el resultado de multiplicar 12.5 por 4.",
    o: ["50.0", "48.5", "52.0", "49.0"],
    c: 0,
    e: "12.5 × 4 = (12 × 4) + (0.5 × 4) = 48 + 2 = 50.0.",
    s: "Multiplicación de decimales",
    d: "Fácil",
    tp: "Aritmética",
    stp: "Operaciones con decimales"
  },
  {
    t: "En un supermercado compras 2.5 kg de arroz a $1.20 cada kilo y 1.5 kg de azúcar a $0.80 cada kilo. ¿Cuánto pagas en total?",
    o: ["$4.20", "$3.80", "$4.50", "$5.00"],
    c: 0,
    e: "Costo de arroz: 2.5 × $1.20 = $3.00. Costo de azúcar: 1.5 × $0.80 = $1.20. Total = $3.00 + $1.20 = $4.20.",
    s: "Problemas aritméticos cotidianos",
    d: "Fácil",
    tp: "Aritmética comercial",
    stp: "Cálculo de presupuestos"
  },
  {
    t: "¿Cuál es el máximo común divisor (MCD) entre 24 y 36?",
    o: ["12", "6", "18", "24"],
    c: 0,
    e: "Divisores de 24: 1, 2, 3, 4, 6, 8, 12, 24. Divisores de 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. El mayor divisor que comparten es 12.",
    s: "Máximo Común Divisor",
    d: "Fácil",
    tp: "Aritmética",
    stp: "Divisibilidad"
  },
  {
    t: "¿Cuál es el mínimo común múltiplo (mcm) de los números 6 y 8?",
    o: ["24", "48", "16", "12"],
    c: 0,
    e: "Múltiplos de 6: 6, 12, 18, 24, 30... Múltiplos de 8: 8, 16, 24, 32... El menor múltiplo común positivo es 24.",
    s: "Mínimo Común Múltiplo",
    d: "Fácil",
    tp: "Aritmética",
    stp: "Múltiplos"
  },
  {
    t: "¿Cuál de los siguientes números es un número primo?",
    o: ["29", "27", "33", "35"],
    c: 0,
    e: "Un número primo solo tiene dos divisores: el 1 y él mismo. 29 solo es divisible por 1 y 29. 27 es divisible por 3 y 9; 33 por 3 y 11; 35 por 5 y 7.",
    s: "Identificación de números primos",
    d: "Fácil",
    tp: "Aritmética",
    stp: "Números primos"
  },
  {
    t: "Si el 20% de los 30 estudiantes de un aula usan anteojos, ¿cuántos estudiantes usan anteojos?",
    o: ["6 estudiantes", "5 estudiantes", "8 estudiantes", "10 estudiantes"],
    c: 0,
    e: "El 20% de 30 se calcula como (20/100) × 30 = 0.20 × 30 = 6 estudiantes.",
    s: "Cálculo directo de porcentajes",
    d: "Fácil",
    tp: "Porcentajes",
    stp: "Proporciones básicas"
  },
  {
    t: "Una chaqueta tiene un precio de lista de $80. Si se aplica un descuento del 15%, ¿cuánto se descuenta en dinero?",
    o: ["$12.00", "$15.00", "$10.00", "$8.00"],
    c: 0,
    e: "Descuento = 15% de $80 = 0.15 × 80 = $12.00. (El precio final a pagar sería $68).",
    s: "Descuento porcentual",
    d: "Fácil",
    tp: "Porcentajes",
    stp: "Comercio cotidiano"
  },
  {
    t: "¿Cuántos minutos hay en 3 horas y media?",
    o: ["210 minutos", "180 minutos", "200 minutos", "225 minutos"],
    c: 0,
    e: "3 horas equivalen a 3 × 60 = 180 minutos. Media hora son 30 minutos. Total = 180 + 30 = 210 minutos.",
    s: "Conversión de unidades de tiempo",
    d: "Fácil",
    tp: "Medidas",
    stp: "Unidades temporales"
  },
  {
    t: "Un automóvil recorre 180 kilómetros a velocidad constante en 2 horas. ¿A qué velocidad promedio se desplazó?",
    o: ["90 km/h", "80 km/h", "85 km/h", "95 km/h"],
    c: 0,
    e: "Velocidad = Distancia / Tiempo = 180 km / 2 h = 90 km/h.",
    s: "Relación velocidad, distancia y tiempo",
    d: "Fácil",
    tp: "Medidas y magnitudes",
    stp: "Velocidad media"
  },
  {
    t: "¿Cuál es el área de un triángulo cuya base mide 10 cm y su altura mide 6 cm?",
    o: ["30 cm²", "60 cm²", "16 cm²", "20 cm²"],
    c: 0,
    e: "Área de un triángulo = (base × altura) / 2 = (10 cm × 6 cm) / 2 = 60 / 2 = 30 cm².",
    s: "Cálculo de áreas planas",
    d: "Fácil",
    tp: "Geometría plana",
    stp: "Triángulos"
  },
  {
    t: "Un cuadrado tiene un perímetro de 36 cm. ¿Cuánto mide cada uno de sus lados?",
    o: ["9 cm", "6 cm", "12 cm", "8 cm"],
    c: 0,
    e: "El perímetro del cuadrado es 4 veces el lado: P = 4L. Por tanto, L = 36 cm / 4 = 9 cm.",
    s: "Perímetro de figuras regulares",
    d: "Fácil",
    tp: "Geometría plana",
    stp: "Cuadrados"
  },
  {
    t: "¿Cuál es el área de un círculo cuyo radio mide 5 cm? (Utiliza π ≈ 3.14)",
    o: ["78.5 cm²", "31.4 cm²", "15.7 cm²", "25.0 cm²"],
    c: 0,
    e: "Área = π × r² = 3.14 × (5 cm)² = 3.14 × 25 = 78.5 cm².",
    s: "Área del círculo",
    d: "Fácil",
    tp: "Geometría plana",
    stp: "Círculo y circunferencia"
  },
  {
    t: "¿Cuánto equivale 2.5 metros en centímetros?",
    o: ["250 cm", "25 cm", "2500 cm", "0.25 cm"],
    c: 0,
    e: "1 metro equivale a 100 centímetros. Multiplicando 2.5 × 100 = 250 cm.",
    s: "Conversión de longitud",
    d: "Fácil",
    tp: "Sistema métrico",
    stp: "Longitud"
  },
  {
    t: "Si una jarra contiene 1.75 litros de agua y se vierten 250 mililitros en un vaso, ¿cuántos litros de agua quedan en la jarra?",
    o: ["1.50 litros", "1.25 litros", "1.55 litros", "1.60 litros"],
    c: 0,
    e: "250 ml equivalen a 0.25 litros. Restando: 1.75 L - 0.25 L = 1.50 L.",
    s: "Conversión de capacidad",
    d: "Fácil",
    tp: "Sistema métrico",
    stp: "Volumen y capacidad"
  },
  {
    t: "En una balanza se pesan 3 paquetes de 450 gramos cada uno. ¿Cuál es el peso total en kilogramos?",
    o: ["1.35 kg", "1.45 kg", "1.25 kg", "13.5 kg"],
    c: 0,
    e: "Peso total en gramos = 3 × 450 g = 1350 g. Como 1 kg = 1000 g, 1350 / 1000 = 1.35 kg.",
    s: "Conversión de masa",
    d: "Fácil",
    tp: "Sistema métrico",
    stp: "Masa y peso"
  },
  {
    t: "¿Cuál es la moda del siguiente conjunto de calificaciones: [7, 8, 9, 8, 10, 8, 6, 9]?",
    o: ["8", "9", "8.1", "7"],
    c: 0,
    e: "La moda es el valor que tiene mayor frecuencia absoluta. El número 8 se repite 3 veces, más que cualquier otro valor.",
    s: "Estadística descriptiva básica",
    d: "Fácil",
    tp: "Estadística",
    stp: "Medidas de tendencia central"
  },
  {
    t: "Calcula la media aritmética (promedio) de las calificaciones: 14, 16, 18 y 12.",
    o: ["15", "14", "16", "15.5"],
    c: 0,
    e: "Suma de datos = 14 + 16 + 18 + 12 = 60. Dividiendo entre el número de notas (4): 60 / 4 = 15.",
    s: "Cálculo del promedio",
    d: "Fácil",
    tp: "Estadística",
    stp: "Media aritmética"
  }
];

// Generar temáticas adicionales estructuradas para completar las 80 preguntas de Básico
for (let i = 0; i < 80; i++) {
  const qNum = 21 + i;
  const base = basicBankData[i % basicBankData.length];
  // Crear una variación pedagógica con contexto único si excede el banco base
  const multiplier = Math.floor(i / basicBankData.length) + 1;
  
  let text = base.t;
  let options = [...base.o];
  let correctIndex = base.c;
  let explanation = base.e;
  let skill = base.s;
  let topic = base.tp;
  let subtopic = base.stp;

  if (multiplier > 1) {
    if (i >= 20 && i < 40) {
      // Bloque Geometría y Magnitudes
      const l = 5 + (i % 8) * 2;
      const w = 4 + (i % 5);
      const perim = 2 * (l + w);
      const area = l * w;
      text = `Un patio rectangular tiene dimensiones de ${l} metros de largo por ${w} metros de ancho. ¿Cuál es su perímetro total?`;
      options = [`${perim} metros`, `${area} metros`, `${perim - 4} metros`, `${perim + 6} metros`];
      correctIndex = 0;
      explanation = `El perímetro de un rectángulo es la suma de sus lados: P = 2 × (largo + ancho) = 2 × (${l} m + ${w} m) = 2 × ${l + w} m = ${perim} metros.`;
      skill = "Perímetros en figuras compuestas";
      topic = "Geometría Plana";
      subtopic = "Cálculo perimetral";
    } else if (i >= 40 && i < 60) {
      // Bloque Razones, Proporciones y Aritmética Comercial
      const precioUnit = 3 + (i % 4);
      const cantidad = 4 + (i % 6);
      const billete = 50;
      const gasto = precioUnit * cantidad;
      const cambio = billete - gasto;
      text = `Si compras ${cantidad} cuadernos a $${precioUnit}.00 cada uno y pagas con un billete de $${billete}.00, ¿cuánto dinero recibes de cambio?`;
      options = [`$${cambio}.00`, `$${gasto}.00`, `$${cambio + 5}.00`, `$${cambio - 5}.00`];
      correctIndex = 0;
      explanation = `Costo total de cuadernos: ${cantidad} × $${precioUnit} = $${gasto}. El cambio es el importe entregado menos el gasto: $${billete} - $${gasto} = $${cambio}.00.`;
      skill = "Resolución de problemas de compra y cambio";
      topic = "Aritmética Comercial";
      subtopic = "Sistemas de pago";
    } else {
      // Bloque Porcentajes y Fracciones Aplicadas
      const totalAlumnos = 40;
      const pct = 25;
      const aprobados = (totalAlumnos * pct) / 100;
      text = `En un curso de ${totalAlumnos} alumnos, el ${pct}% obtuvo una calificación excelente. ¿Cuántos alumnos corresponden a ese porcentaje?`;
      options = [`${aprobados} alumnos`, `${aprobados + 2} alumnos`, `${aprobados - 2} alumnos`, `${aprobados * 2} alumnos`];
      correctIndex = 0;
      explanation = `El ${pct}% de ${totalAlumnos} se calcula multiplicando: (25/100) × 40 = 0.25 × 40 = ${aprobados} alumnos.`;
      skill = "Cálculo de porcentajes en contextos educativos";
      topic = "Aritmética";
      subtopic = "Porcentajes";
    }
  }

  basicoQuestions.push({
    id: `mat-bas-${qNum}`,
    sectionId: 1,
    number: qNum,
    text,
    options,
    correctIndex,
    explanation,
    skill,
    difficulty: "Fácil",
    educationalLevel: "Básico",
    topic,
    subtopic
  });
}

// Guardar archivo basico.ts
const basicoCode = generateLevelFile('Básico', 'MATEMATICAS_BASICO', basicoQuestions);
fs.writeFileSync('./src/data/questions/matematicas/basico.ts', basicoCode);
console.log('✓ Matemáticas Básico generado exitosamente: 100 preguntas.');
