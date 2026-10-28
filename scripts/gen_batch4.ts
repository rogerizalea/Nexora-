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
// 6. QUÍMICA (100 preguntas)
// =========================================================================
const quimicaQuestions: any[] = [];

function makeQuimicaItems() {
  const basRaw = [
    {
      q: '¿Cuál es el símbolo químico universal del agua y qué átomos componen su molécula?',
      opts: ['H₂O (2 átomos de hidrógeno y 1 de oxígeno)', 'CO₂ (1 de carbono y 2 de oxígeno)', 'NaCl (1 de sodio y 1 de cloro)', 'O₂ (2 de oxígeno)'],
      ans: 0,
      exp: 'El agua está formada por dos átomos de hidrógeno unidos covalentemente a un átomo de oxígeno (H₂O).',
      skill: 'Fórmulas Químicas Elementales',
      topic: 'Sustancias y Compuestos',
      sub: 'Molécula de Agua'
    },
    {
      q: '¿Qué partícula subatómica con carga eléctrica negativa orbita alrededor del núcleo atómico?',
      opts: ['El protón', 'El neutrón', 'El electrón', 'El positrón'],
      ans: 2,
      exp: 'Los electrones tienen carga negativa (-1e) y masa despreciable comparada con los protones y neutrones nucleares.',
      skill: 'Estructura Atómica Fundamental',
      topic: 'El Átomo',
      sub: 'Partículas Subatómicas'
    },
    {
      q: '¿Cuál es el elemento químico más ligero y abundante del Universo, con número atómico Z = 1?',
      opts: ['Helio (He)', 'Hidrógeno (H)', 'Carbono (C)', 'Oxígeno (O)'],
      ans: 1,
      exp: 'El hidrógeno (H) tiene Z = 1 (1 protón y 1 electrón) y constituye más del 70% de la masa bariónica del cosmos.',
      skill: 'Tabla Periódica Elemental',
      topic: 'Elementos Químicos',
      sub: 'Hidrógeno'
    },
    {
      q: '¿Qué tipo de mezcla es el agua con sal completamente disuelta?',
      opts: ['Mezcla heterogénea', 'Mezcla homogénea (solución)', 'Compuesto binario puro', 'Coloide lechoso'],
      ans: 1,
      exp: 'Al disolverse el cloruro de sodio en agua, los iones Na⁺ y Cl⁻ se dispersan a nivel molecular formando una sola fase líquida homogénea.',
      skill: 'Clasificación de la Materia',
      topic: 'Sistemas Materiales',
      sub: 'Mezclas Homogéneas'
    },
    {
      q: '¿Cómo se llama el cambio de estado en el que un sólido pasa directamente a gas sin pasar por el estado líquido?',
      opts: ['Fusión', 'Sublimación (o sublimación progresiva)', 'Condensación', 'Solidificación'],
      ans: 1,
      exp: 'La sublimación es el paso directo de sólido a gas (ej. yodo sólido o hielo seco CO₂ a temperatura ambiente).',
      skill: 'Cambios de Fase Químicos y Físicos',
      topic: 'Estados de Agregación',
      sub: 'Sublimación'
    },
    {
      q: '¿Cuál es el símbolo químico del hierro en la tabla periódica?',
      opts: ['Hi', 'H', 'Fe', 'Ir'],
      ans: 2,
      exp: 'El símbolo del hierro es Fe, derivado de su nombre en latín ferrum.',
      skill: 'Nomenclatura y Símbolos de Elementos',
      topic: 'Tabla Periódica',
      sub: 'Símbolos Químicos'
    },
    {
      q: '¿Qué sustancia pura de la tabla periódica es vital para la respiración de los seres humanos y combustión del fuego?',
      opts: ['Dióxido de carbono', 'Gas oxígeno (O₂)', 'Gas helio', 'Metano'],
      ans: 1,
      exp: 'El oxígeno molecular diatómico (O₂) actúa como comburente en reacciones de combustión y como aceptor final de electrones en la respiración celular.',
      skill: 'Propiedades del Oxígeno',
      topic: 'Elementos y Sustancias',
      sub: 'Oxígeno y Combustión'
    },
    {
      q: '¿Qué pH tiene el agua pura destilada a 25 °C?',
      opts: ['0', '7 (neutro)', '14', '3'],
      ans: 1,
      exp: 'El agua pura tiene una concentración de iones [H⁺] = 10⁻⁷ M, lo que define el pH neutro = 7.',
      skill: 'Escala de pH',
      topic: 'Ácidos y Bases Básicos',
      sub: 'pH Neutro'
    },
    {
      q: '¿Cómo se denomina la sustancia inicial que se transforma en una reacción química para originar los productos?',
      opts: ['Catalizador', 'Reactivo (o reactante)', 'Disolvente', 'Soluto'],
      ans: 1,
      exp: 'Los reactivos o reactantes son las especies químicas iniciales cuyos enlaces se rompen y reorganizan para generar los productos finales.',
      skill: 'Concepto de Reacción Química',
      topic: 'Transformaciones Químicas',
      sub: 'Reactivos y Productos'
    },
    {
      q: '¿Qué compuesto químico de uso cotidiano en la cocina tiene la fórmula molecular NaCl?',
      opts: ['Azúcar sacarosa', 'Bicarbonato de sodio', 'Cloruro de sodio (sal común)', 'Vinagre blanco'],
      ans: 2,
      exp: 'El cloruro de sodio (NaCl) es la sal común o de mesa, un compuesto iónico formado por iones Na⁺ y Cl⁻.',
      skill: 'Compuestos de Uso Cotidiano',
      topic: 'Química en la Vida Diaria',
      sub: 'Cloruro de Sodio'
    },
    {
      q: '¿Cuál de los siguientes es un gas noble inerte que se utiliza para inflar globos debido a que no arde y es más liviano que el aire?',
      opts: ['Hidrógeno', 'Helio (He)', 'Oxígeno', 'Cloro'],
      ans: 1,
      exp: 'El helio (He) es un gas noble con capa electrónica completa (dueto estable), no reactivo e ininflamable.',
      skill: 'Gases Nobles y Reactividad',
      topic: 'Tabla Periódica',
      sub: 'Helio y Gases Nobles'
    },
    {
      q: '¿Qué método mecánico de separación se utiliza para separar arena insoluble mezclada con agua líquida?',
      opts: ['Destilación simple', 'Filtración', 'Cromatografía', 'Electrólisis'],
      ans: 1,
      exp: 'La filtración retiene las partículas sólidas de arena en el papel filtro mientras deja pasar el agua líquida como filtrado.',
      skill: 'Técnicas de Separación de Mezclas',
      topic: 'Métodos de Separación',
      sub: 'Filtración'
    },
    {
      q: '¿Cuál es el número de protones que posee un átomo de carbono-12 en su núcleo (Z = 6)?',
      opts: ['3', '6', '12', '18'],
      ans: 1,
      exp: 'El número atómico Z indica el número de protones en el núcleo. Para el carbono, Z = 6.',
      skill: 'Número Atómico y Protones',
      topic: 'Estructura Atómica',
      sub: 'Número Atómico Z'
    },
    {
      q: '¿Qué tipo de enlace químico se forma cuando dos átomos comparten uno o más pares de electrones de valencia?',
      opts: ['Enlace iónico', 'Enlace covalente', 'Enlace metálico', 'Enlace de Van der Waals'],
      ans: 1,
      exp: 'El enlace covalente se produce por compartición mutua de pares electrónicos entre átomos de electronegatividades similares (generalmente no metales).',
      skill: 'Tipos de Enlaces Químicos',
      topic: 'Enlace Químico',
      sub: 'Enlace Covalente'
    },
    {
      q: '¿Cómo se denomina la disolución que contiene la máxima cantidad posible de soluto disuelto a una temperatura dada?',
      opts: ['Disolución diluida', 'Disolución saturada', 'Disolución coloidal', 'Disolución insaturada'],
      ans: 1,
      exp: 'Una disolución saturada se encuentra en equilibrio termodinámico con soluto no disuelto a su límite de solubilidad.',
      skill: 'Solubilidad y Concentración',
      topic: 'Soluciones Acuosas',
      sub: 'Saturación'
    },
    {
      q: '¿Cuál es el metal líquido a temperatura ambiente (20 °C) utilizado tradicionalmente en termómetros antiguos?',
      opts: ['Plomo', 'Mercurio (Hg)', 'Aluminio', 'Plata'],
      ans: 1,
      exp: 'El mercurio (Hg, Z = 80) es el único metal elemental que permanece en estado líquido a temperatura y presión estándar.',
      skill: 'Propiedades de los Metales',
      topic: 'Elementos Químicos',
      sub: 'Mercurio'
    },
    {
      q: '¿Qué gas desprenden las bebidas gaseosas y efervescentes al destapar la botella?',
      opts: ['Monóxido de carbono', 'Dióxido de carbono (CO₂)', 'Metano', 'Ozono'],
      ans: 1,
      exp: 'Las bebidas carbonatadas contienen ácido carbónico en equilibrio con CO₂ disuelto a presión que se libera al despresurizar el envase.',
      skill: 'Química Cotidiana',
      topic: 'Gases y Soluciones',
      sub: 'Dióxido de Carbono Disuelto'
    },
    {
      q: '¿Qué partícula subatómica no posee carga eléctrica neta (es neutra) y se localiza en el núcleo atómico?',
      opts: ['El electrón', 'El protón', 'El neutrón', 'El fotón'],
      ans: 2,
      exp: 'El neutrón descubierto por James Chadwick en 1932 no tiene carga eléctrica y estabiliza el núcleo reduciendo la repulsión protónica.',
      skill: 'Partículas Nucleares',
      topic: 'Estructura Atómica',
      sub: 'Neutrones'
    },
    {
      q: '¿Cómo se llaman las filas horizontales en la tabla periódica moderna de los elementos?',
      opts: ['Grupos o familias', 'Períodos', 'Bloques orbitales', 'Series lantanoides'],
      ans: 1,
      exp: 'Las 7 filas horizontales son los períodos (indican el número de niveles energéticos principales n) y las columnas verticales son los grupos.',
      skill: 'Estructura de la Tabla Periódica',
      topic: 'Tabla Periódica',
      sub: 'Períodos'
    },
    {
      q: '¿Cuál es la fórmula química del gas metano, componente principal del gas natural doméstico?',
      opts: ['CO₂', 'CH₄', 'NH₃', 'C₂H₆'],
      ans: 1,
      exp: 'El metano es el hidrocarburo alcano más simple, constituido por un átomo de carbono tetraédrico unido a cuatro hidrógenos (CH₄).',
      skill: 'Química Orgánica Básica',
      topic: 'Hidrocarburos',
      sub: 'Metano'
    }
  ];

  const bas: any[] = [];
  basRaw.forEach((item, idx) => {
    bas.push({
      id: `qui-bas-${idx + 1}`,
      sectionId: 6,
      number: idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Fácil',
      educationalLevel: 'Básico',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // INTERMEDIO 21-40
  const intRaw = [
    {
      q: '¿Cuántos moles de átomos de hidrógeno hay en exactamente 2 moles de moléculas de agua (H₂O)?',
      opts: ['2 moles', '3 moles', '4 moles', '6 moles'],
      ans: 2,
      exp: 'Cada molécula de H₂O contiene 2 átomos de H. En 2 moles de H₂O hay: 2 moles × 2 = 4 moles de átomos de H.',
      skill: 'Estequiometría y Concepto de Mol',
      topic: 'Estequiometría',
      sub: 'Cálculo de Moles'
    },
    {
      q: '¿Cuál es la masa molar aproximada del dióxido de carbono (CO₂)? (Masas atómicas: C = 12 g/mol, O = 16 g/mol).',
      opts: ['28 g/mol', '32 g/mol', '44 g/mol', '56 g/mol'],
      ans: 2,
      exp: 'Masa molar del CO₂ = 12 + 2 × (16) = 12 + 32 = 44 g/mol.',
      skill: 'Masa Molar de Compuestos',
      topic: 'Cálculos Químicos',
      sub: 'Masa Molecular'
    },
    {
      q: 'En una reacción redox, ¿qué proceso experimenta la sustancia que pierde electrones?',
      opts: ['Reducción', 'Oxidación', 'Precipitación', 'Neutralización'],
      ans: 1,
      exp: 'Por definición electroquímica: la oxidación es la pérdida de electrones (aumento del número de oxidación), mientras que la reducción es la ganancia de electrones.',
      skill: 'Reacciones de Oxidación-Reducción',
      topic: 'Electroquímica',
      sub: 'Concepto de Oxidación'
    },
    {
      q: '¿Qué tipo de enlace se forma entre el sodio (Na, metal alcalino) y el cloro (Cl, no metal halógeno)?',
      opts: ['Enlace covalente apolar', 'Enlace iónico (o electrovalente)', 'Enlace metálico', 'Enlace peptídico'],
      ans: 1,
      exp: 'La gran diferencia de electronegatividad (ΔEN > 2.0) provoca la transferencia completa de un electrón del Na al Cl, formando iones Na⁺ y Cl⁻ atraídos electrostáticamente.',
      skill: 'Naturaleza del Enlace Iónico',
      topic: 'Enlace Químico',
      sub: 'Formación de Compuestos Iónicos'
    },
    {
      q: '¿Cuál es la configuración electrónica en el estado fundamental del átomo de sodio neutro (Z = 11)?',
      opts: ['1s² 2s² 2p⁶ 3s¹', '1s² 2s² 2p⁶ 3s²', '1s² 2s² 2p⁵ 3s²', '1s² 2s⁸ 3s¹'],
      ans: 0,
      exp: 'Siguiendo el principio de Aufbau (orden creciente de energía n+l): 1s² 2s² 2p⁶ 3s¹ (o [Ne] 3s¹), con 1 electrón de valencia.',
      skill: 'Configuración Electrónica y Regla de Aufbau',
      topic: 'Estructura Atómica',
      sub: 'Configuraciones Electrónicas'
    },
    {
      q: 'Al balancear la ecuación química: N₂ + H₂ → NH₃, ¿cuáles son los coeficientes estequiométricos enteros mínimos?',
      opts: ['1 N₂ + 1 H₂ → 2 NH₃', '1 N₂ + 3 H₂ → 2 NH₃', '2 N₂ + 3 H₂ → 4 NH₃', '1 N₂ + 2 H₂ → 1 NH₃'],
      ans: 1,
      exp: 'Para igualar átomos: 1 N₂ aporta 2 átomos de N (dando 2 NH₃). Los 2 NH₃ requieren 6 átomos de H, provistos por 3 H₂. Coeficientes: 1, 3, 2.',
      skill: 'Balanceo de Ecuaciones Químicas',
      topic: 'Reacciones Químicas',
      sub: 'Balanceo por Tanteo'
    },
    {
      q: '¿Cuál de los siguientes ácidos es un ácido binario o hidrácido inorgánico?',
      opts: ['Ácido sulfúrico (H₂SO₄)', 'Ácido clorhídrico (HCl)', 'Ácido nítrico (HNO₃)', 'Ácido fosfórico (H₃PO₄)'],
      ans: 1,
      exp: 'El ácido clorhídrico (HCl) es un hidrácido binario compuesto únicamente por hidrógeno y un no metal halógeno sin oxígeno.',
      skill: 'Nomenclatura Inorgánica',
      topic: 'Ácidos Inorgánicos',
      sub: 'Hidrácidos vs Oxoácidos'
    },
    {
      q: 'Según la teoría ácido-base de Brønsted-Lowry, ¿cómo se define una base?',
      opts: ['Una especie que libera iones OH⁻ exclusivamente', 'Una especie capaz de aceptar un protón (ion H⁺)', 'Una especie que cede electrones', 'Una sal disuelta'],
      ans: 1,
      exp: 'En la teoría de Brønsted-Lowry, un ácido es un donador de protones (H⁺) y una base es un aceptor de protones (H⁺).',
      skill: 'Teorías Ácido-Base',
      topic: 'Ácidos y Bases',
      sub: 'Teoría de Brønsted-Lowry'
    },
    {
      q: '¿Qué ley de los gases postula que a presión y temperatura constantes, el volumen de un gas es directamente proporcional al número de moles (V ∝ n)?',
      opts: ['Ley de Boyle', 'Ley de Charles', 'Ley de Avogadro', 'Ley de Gay-Lussac'],
      ans: 2,
      exp: 'La Ley de Avogadro establece que volúmenes iguales de gases diferentes en idénticas condiciones de P y T contienen el mismo número de moléculas o moles.',
      skill: 'Leyes de los Gases Ideales',
      topic: 'Gases',
      sub: 'Ley de Avogadro'
    },
    {
      q: '¿Qué tipo de reacción química es: 2 H₂O₂ (en presencia de MnO₂) → 2 H₂O + O₂?',
      opts: ['Reacción de síntesis o combinación', 'Reacción de descomposición', 'Reacción de desplazamiento simple', 'Reacción de doble sustitución'],
      ans: 1,
      exp: 'Es una descomposición catalítica, donde un solo reactivo (peróxido de hidrógeno) se fragmenta en dos sustancias más simples.',
      skill: 'Clasificación de Reacciones Químicas',
      topic: 'Cinética y Reacciones',
      sub: 'Reacciones de Descomposición'
    },
    {
      q: '¿Cuál es la molaridad (M) de una solución que contiene 2 moles de soluto disueltos en 4 litros de disolución?',
      opts: ['0.25 M', '0.50 M', '2.0 M', '8.0 M'],
      ans: 1,
      exp: 'Molaridad M = moles de soluto / litros de disolución = 2 mol / 4 L = 0.50 mol/L (0.5 M).',
      skill: 'Concentración de Disoluciones',
      topic: 'Soluciones',
      sub: 'Molaridad'
    },
    {
      q: '¿Cómo varía el radio atómico de los elementos a lo largo de un período en la tabla periódica (de izquierda a derecha)?',
      opts: [
        'Aumenta considerablemente',
        'Disminuye debido al aumento de la carga nuclear efectiva (Z_eff) que atrae con más fuerza a los electrones externos',
        'Permanece estrictamente constante',
        'Primero disminuye y luego se triplica'
      ],
      ans: 1,
      exp: 'Al avanzar en un período hacia la derecha, se agregan protones al núcleo sin añadir nuevas capas electrónicas, contrayendo la nube de electrones.',
      skill: 'Propiedades Periódicas de los Elementos',
      topic: 'Tabla Periódica',
      sub: 'Radio Atómico'
    },
    {
      q: '¿Cuál es el número de Avogadro de entidades elementales contenidas en un mol de cualquier sustancia?',
      opts: ['3.14 × 10⁸', '6.022 × 10²³', '9.81 × 10³', '1.602 × 10⁻¹⁹'],
      ans: 1,
      exp: 'La constante de Avogadro N_A = 6.02214076 × 10²³ mol⁻¹ define el número de partículas por mol.',
      skill: 'Constantes Químicas',
      topic: 'Estequiometría',
      sub: 'Número de Avogadro'
    },
    {
      q: 'En química orgánica, ¿qué grupo funcional oxigenado caracteriza a los alcoholes como el etanol?',
      opts: ['Grupo carbonilo (-C=O)', 'Grupo hidroxilo (-OH)', 'Grupo carboxilo (-COOH)', 'Grupo amino (-NH₂)'],
      ans: 1,
      exp: 'Los alcoholes se caracterizan por la presencia de uno o más grupos hidroxilo (-OH) unidos a carbonos saturados sp³.',
      skill: 'Grupos Funcionales Orgánicos',
      topic: 'Química Orgánica',
      sub: 'Alcoholes y Grupo Hidroxilo'
    },
    {
      q: '¿Qué propiedad coligativa explica por qué se añade sal a las carreteras congeladas para derretir la nieve?',
      opts: ['Aumento ebulloscópico', 'Descenso crioscópico (depresión del punto de congelación)', 'Presión osmótica', 'Aumento de tensión superficial'],
      ans: 1,
      exp: 'El soluto disuelto disminuye el potencial químico del solvente, provocando el descenso crioscópico (ΔT_c = K_c · m · i) y haciendo que el hielo se funda a temperaturas bajo cero.',
      skill: 'Propiedades Coligativas de las Soluciones',
      topic: 'Fisicoquímica de Soluciones',
      sub: 'Descenso Crioscópico'
    },
    {
      q: '¿Cuál es el estado de oxidación del azufre en el ácido sulfúrico (H₂SO₄)?',
      opts: ['+2', '+4', '+6', '-2'],
      ans: 2,
      exp: 'En H₂SO₄: el H tiene +1 (2 × +1 = +2) y el O tiene -2 (4 × -2 = -8). Para neutralidad: +2 + x + (-8) = 0 → x = +6.',
      skill: 'Determinación de Estados de Oxidación',
      topic: 'Nomenclatura y Redox',
      sub: 'Estados de Oxidación'
    },
    {
      q: '¿Qué postula el Principio de Le Chatelier para un sistema químico en equilibrio dinámico?',
      opts: [
        'Que el equilibrio nunca puede ser perturbado.',
        'Que si un sistema en equilibrio es sometido a una perturbación externa (cambio de temperatura, presión o concentración), el sistema responderá desplazándose en el sentido que contrarreste dicha perturbación.',
        'Que todas las reacciones reversibles se completan al 100%.',
        'Que los catalizadores cambian la constante de equilibrio.'
      ],
      ans: 1,
      exp: 'El Principio de Le Chatelier predice cualitativamente el desplazamiento del equilibrio frente a cambios en las variables de estado.',
      skill: 'Equilibrio Químico y Principio de Le Chatelier',
      topic: 'Equilibrio Químico',
      sub: 'Principio de Le Chatelier'
    },
    {
      q: '¿Cómo se denomina la energía mínima requerida que deben poseer los reactivos para chocar eficazmente y formar el complejo activado?',
      opts: ['Energía libre estándar', 'Energía de activación (E_a)', 'Entalpía de reacción', 'Calor de formación'],
      ans: 1,
      exp: 'La energía de activación (E_a) según la teoría de colisiones y la ecuación de Arrhenius representa la barrera energética que separa reactivos de productos.',
      skill: 'Cinética Química y Teoría de Colisiones',
      topic: 'Cinética',
      sub: 'Energía de Activación'
    },
    {
      q: '¿Qué tipo de enlace intermolecular explica el elevado punto de ebullición del fluoruro de hidrógeno (HF), agua (H₂O) y amoníaco (NH₃)?',
      opts: ['Fuerzas de London', 'Puentes de hidrógeno', 'Enlaces covalentes coordinados', 'Atracciones dipolo inducido'],
      ans: 1,
      exp: 'El puente de hidrógeno se forma cuando el hidrógeno está unido covalentemente a átomos pequeños y altamente electronegativos (F, O, N).',
      skill: 'Fuerzas Intermoleculares',
      topic: 'Estructura Molecular',
      sub: 'Puentes de Hidrógeno'
    },
    {
      q: '¿Cuál es el hidrocarburo aromático más simple con fórmula molecular C₆H₆ y estructura cíclica de resonancia?',
      opts: ['Ciclohexano', 'Benceno', 'Tolueno', 'Naftaleno'],
      ans: 1,
      exp: 'El benceno (C₆H₆) posee un anillo hexagonal plano con 6 electrones pi deslocalizados según la regla de aromaticidad de Hückel (4n+2).',
      skill: 'Compuestos Aromáticos y Aromaticidad',
      topic: 'Química Orgánica',
      sub: 'Benceno'
    }
  ];

  const int: any[] = [];
  intRaw.forEach((item, idx) => {
    int.push({
      id: `qui-int-${idx + 1}`,
      sectionId: 6,
      number: 20 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Intermedio',
      educationalLevel: 'Intermedio',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // BACHILLERATO 41-60
  const bacRaw = [
    {
      q: 'En una reacción endotérmica donde ΔH° > 0 y ΔS° > 0, ¿bajo qué condiciones de temperatura el proceso es termodinámicamente espontáneo según la ecuación de Gibbs (ΔG° = ΔH° - TΔS°)?',
      opts: [
        'A cualquier temperatura',
        'Solo a temperaturas suficientemente altas (T > ΔH° / ΔS°)',
        'Solo a temperaturas muy bajas cerca de 0 K',
        'Nunca es espontáneo'
      ],
      ans: 1,
      exp: 'Para que ΔG° < 0 con ΔH° > 0 y ΔS° > 0, el término entálpico negativo (-TΔS°) debe superar en magnitud al término endotérmico positivo (+ΔH°), lo cual ocurre a altas temperaturas.',
      skill: 'Termodinámica Química y Criterio de Espontaneidad de Gibbs',
      topic: 'Termoquímica',
      sub: 'Energía Libre de Gibbs'
    },
    {
      q: '¿Cuál es la hibridación del átomo de carbono central en la molécula de etino o acetileno (H-C≡C-H)?',
      opts: ['sp³', 'sp²', 'sp', 'dsp³'],
      ans: 2,
      exp: 'En el enlace triple, cada carbono forma dos orbitales híbridos sp lineales (geometría de 180°) para un enlace sigma C-H y un sigma C-C, y dos orbitales p puros que forman dos enlaces pi perpendiculares.',
      skill: 'Hibridación de Orbitales y Geometría Molecular',
      topic: 'Enlace Químico Avanzado',
      sub: 'Hibridación sp'
    },
    {
      q: '¿Cuál es el pH de una solución acuosa 0.01 M de ácido clorhídrico (HCl), considerando disociación ácida completa?',
      opts: ['1.0', '2.0', '4.0', '12.0'],
      ans: 1,
      exp: 'HCl es un ácido fuerte monoprótico: [H⁺] = 0.01 M = 10⁻² M. pH = -log[H⁺] = -log(10⁻²) = 2.0.',
      skill: 'Cálculo de pH en Ácidos Fuertes',
      topic: 'Equilibrio Iónico',
      sub: 'Cálculo de pH'
    },
    {
      q: '¿Qué ley termoquímica establece que la variación de entalpía total de una reacción química es constante e independiente de la ruta o etapas intermedias seguidas (Ley de aditividad de entalpías)?',
      opts: ['Ley de Hess', 'Ley de Raoult', 'Ley de Henry', 'Ley de Kirchhoff'],
      ans: 0,
      exp: 'La Ley de Germain Hess se fundamenta en que la entalpía es una función de estado termodinámica: el ΔH total depende únicamente de los estados inicial y final.',
      skill: 'Termoquímica y Ley de Hess',
      topic: 'Termoquímica',
      sub: 'Ley de Hess'
    },
    {
      q: 'En una celda electroquímica galvánica (Pila Daniell), ¿en qué electrodo ocurre la oxidación y cuál es su signo de polaridad?',
      opts: [
        'En el cátodo, con polaridad negativa',
        'En el ánodo, con polaridad negativa en celdas galvánicas',
        'En el cátodo, con polaridad positiva',
        'En el puente salino'
      ],
      ans: 1,
      exp: 'En toda celda electroquímica, la oxidación ocurre en el ánodo. En una celda galvánica espontánea, el ánodo es el polo negativo porque libera electrones hacia el circuito externo.',
      skill: 'Electroquímica y Celdas Galvánicas',
      topic: 'Electroquímica',
      sub: 'Ánodo y Cátodo en Celdas Galvánicas'
    },
    {
      q: '¿Cuál es el producto de solubilidad K_ps del cloruro de plata (AgCl) si su solubilidad molar en agua pura a 25 °C es s = 1.34 × 10⁻⁵ mol/L?',
      opts: ['1.34 × 10⁻⁵', '1.80 × 10⁻¹⁰', '2.68 × 10⁻¹⁰', '3.60 × 10⁻¹⁵'],
      ans: 1,
      exp: 'AgCl(s) ⇌ Ag⁺(ac) + Cl⁻(ac). K_ps = [Ag⁺][Cl⁻] = s · s = s² = (1.34 × 10⁻⁵)² ≈ 1.80 × 10⁻¹⁰.',
      skill: 'Equilibrio de Precipitación y Kps',
      topic: 'Equilibrio Químico',
      sub: 'Producto de Solubilidad'
    },
    {
      q: '¿Cuál es la ecuación de la constante de equilibrio K_c para la síntesis de Haber-Bosch: N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)?',
      opts: [
        'K_c = [N₂][H₂]³ / [NH₃]²',
        'K_c = [NH₃]² / ([N₂] · [H₂]³)',
        'K_c = [NH₃] / ([N₂] · [H₂])',
        'K_c = 2[NH₃] / ([N₂] + 3[H₂])'
      ],
      ans: 1,
      exp: 'Por la Ley de Acción de Masas de Guldberg y Waage, K_c es el producto de las concentraciones de productos elevadas a sus coeficientes dividido por el de reactivos elevados a sus coeficientes.',
      skill: 'Expresión de Constantes de Equilibrio',
      topic: 'Equilibrio Químico',
      sub: 'Ley de Acción de Masas'
    },
    {
      q: '¿Qué tipo de isomería presentan el butan-1-ol y el etoxietano (éter dietílico), que comparten la misma fórmula molecular C₄H₁₀O pero pertenecen a familias químicas distintas?',
      opts: ['Isomería de cadena', 'Isomería de posición', 'Isomería de función (o de grupo funcional)', 'Enantiomería'],
      ans: 2,
      exp: 'Poseen la misma fórmula molecular (C₄H₁₀O) pero grupos funcionales distintos: uno es un alcohol (-OH) y el otro un éter (-O-), por lo que son isómeros de función.',
      skill: 'Isomería Estructural en Química Orgánica',
      topic: 'Química Orgánica',
      sub: 'Isómeros de Función'
    },
    {
      q: '¿Cuál es el volumen molar que ocupa exactamente 1 mol de cualquier gas ideal en condiciones normales de presión y temperatura (CNPT: 0 °C y 1 atm)?',
      opts: ['11.2 litros', '22.4 litros', '24.5 litros', '44.8 litros'],
      ans: 1,
      exp: 'A partir de P·V = n·R·T: V = (1 mol × 0.0821 atm·L/mol·K × 273.15 K) / 1 atm = 22.414 L/mol.',
      skill: 'Volumen Molar de Gases Ideales',
      topic: 'Gases Ideales',
      sub: 'Volumen Molar en CNPT'
    },
    {
      q: '¿Qué principio de la mecánica cuántica formulado por Wolfgang Pauli establece que en un átomo no pueden existir dos electrones con los cuatro números cuánticos (n, l, m_l, m_s) idénticos?',
      opts: ['Regla de Hund', 'Principio de Exclusión de Pauli', 'Principio de Incertidumbre', 'Efecto fotoeléctrico'],
      ans: 1,
      exp: 'El Principio de Exclusión de Pauli exige que cada orbital atómico espacial definido por (n, l, m_l) pueda albergar como máximo dos electrones, los cuales deben tener espines opuestos (m_s = +1/2 y -1/2).',
      skill: 'Números Cuánticos y Principio de Exclusión',
      topic: 'Estructura Atómica Cuántica',
      sub: 'Principio de Pauli'
    },
    {
      q: 'En cinemática química, para una reacción elemental A + B → C, si la ley de velocidad es v = k · [A] · [B]², ¿cuál es el orden total de la reacción?',
      opts: ['Orden 1', 'Orden 2', 'Orden 3 (o tercer orden global)', 'Orden cero'],
      ans: 2,
      exp: 'El orden de reacción global es la suma de los exponentes de concentración en la ecuación de velocidad: orden = 1 + 2 = 3.',
      skill: 'Cinética Química y Orden de Reacción',
      topic: 'Cinética Química',
      sub: 'Orden Global de Reacción'
    },
    {
      q: '¿Qué propiedad termodinámica cuantifica la afinidad de un átomo neutro gaseoso para captar un electrón y transformarse en un anión monovalente gaseoso (X(g) + e⁻ → X⁻(g))?',
      opts: ['Energía de ionización', 'Afinidad electrónica (o electroafinidad)', 'Electronegatividad de Pauling', 'Radio iónico'],
      ans: 1,
      exp: 'La afinidad electrónica es la energía liberada (o absorbida) cuando un átomo gaseoso en su estado fundamental adiciona un electrón.',
      skill: 'Propiedades Periódicas Avanzadas',
      topic: 'Tabla Periódica',
      sub: 'Afinidad Electrónica'
    },
    {
      q: '¿Cuál es la geometría molecular de la molécula de amoníaco (NH₃) según la teoría de repulsión de pares de electrones de valencia (RPECV/VSEPR)?',
      opts: ['Trigonal plana', 'Piramidal trigonal', 'Tetraédrica perfecta', 'En forma de T'],
      ans: 1,
      exp: 'El nitrógeno central tiene 4 pares de electrones (3 enlazantes y 1 par no enlazante o solitario). La repulsión del par solitario comprime el ángulo a 107°, originando una geometría piramidal trigonal.',
      skill: 'Geometría Molecular VSEPR',
      topic: 'Enlace Químico',
      sub: 'Teoría VSEPR'
    },
    {
      q: '¿Qué disolución amortiguadora o buffer se forma típicamente para resistir variaciones de pH ante el agregado de pequeñas cantidades de ácido o base?',
      opts: [
        'Una mezcla de ácido fuerte y base fuerte concentrados',
        'Una mezcla de un ácido débil y su base conjugada (o una base débil y su ácido conjugado)',
        'Agua destilada pura con salitre',
        'Una solución saturada de cloruro de sodio'
      ],
      ans: 1,
      exp: 'Los buffers contienen un par ácido-base conjugado en equilibrio (ej. CH₃COOH / CH₃COONa) que neutraliza tanto protones H⁺ agregados como iones hidroxilo OH⁻.',
      skill: 'Soluciones Reguladoras y Efecto Amortiguador',
      topic: 'Equilibrio Ácido-Base',
      sub: 'Soluciones Amortiguadoras'
    },
    {
      q: 'En química orgánica, ¿qué tipo de reacción ocurre cuando el propeno (CH₃-CH=CH₂) reacciona con gas bromuro de hidrógeno (HBr) para formar principalmente 2-bromopropano según la regla de Markovnikov?',
      opts: ['Sustitución nucleofílica', 'Adición electrofílica', 'Eliminación bimolecular', 'Condensación aldólica'],
      ans: 1,
      exp: 'El enlace pi del alqueno actúa como nucleófilo atacando al H⁺ electrofílico, generando el carbocatión secundario más estable que luego es atrapado por el ion bromuro.',
      skill: 'Mecanismos de Reacción Orgánica',
      topic: 'Química Orgánica',
      sub: 'Adición Electrofílica y Regla de Markovnikov'
    },
    {
      q: '¿Cuál es la relación matemática entre la constante de equilibrio en presiones (K_p) y la constante en concentraciones (K_c) para reacciones en fase gaseosa?',
      opts: ['K_p = K_c · (R·T)^{Δn}', 'K_p = K_c / (R·T)', 'K_p = K_c · P_total', 'K_p = K_c siempre'],
      ans: 0,
      exp: 'K_p = K_c (RT)^{Δn}, donde Δn es la diferencia estequiométrica de moles de gas entre productos y reactivos: Δn = ∑ n_productos(g) - ∑ n_reactivos(g).',
      skill: 'Relación Termodinámica entre Kp y Kc',
      topic: 'Equilibrio Químico',
      sub: 'Relación Kp y Kc'
    },
    {
      q: '¿Qué propiedad física de los líquidos describe la resistencia interna que opone el fluido a deformarse o fluir debido a la fricción molecular interna?',
      opts: ['Tensión superficial', 'Viscosidad', 'Capilaridad', 'Presión de vapor'],
      ans: 1,
      exp: 'La viscosidad (dinámica o cinemática) mide la resistencia interna de un fluido originada por las fuerzas cohesivas intermoleculares al desplazarse capas de fluido.',
      skill: 'Propiedades de Líquidos y Reología',
      topic: 'Estados de la Materia',
      sub: 'Viscosidad'
    },
    {
      q: '¿Qué especie química actúa como electrófilo activo en la reacción de nitración aromática del benceno con mezcla sulfonítrica (HNO₃ / H₂SO₄)?',
      opts: ['El ion nitrito (NO₂⁻)', 'El catión nitronio (NO₂⁺)', 'El ion hidronio (H₃O⁺)', 'El gas dióxido de nitrógeno'],
      ans: 1,
      exp: 'El ácido sulfúrico protona al ácido nítrico, forzando la pérdida de agua para generar el potente electrófilo ion nitronio (O=N⁺=O), que ataca la nube pi aromática del benceno.',
      skill: 'Sustitución Electrofílica Aromática (SEAr)',
      topic: 'Química Orgánica Superior',
      sub: 'Ion Nitronio y Nitración'
    },
    {
      q: '¿Cómo se denomina la radiación nuclear compuesta por núcleos de helio formados por dos protones y dos neutrones (⁴₂He²⁺)?',
      opts: ['Partículas Beta negativas (β⁻)', 'Partículas Alfa (α)', 'Rayos Gamma (γ)', 'Rayos X blandos'],
      ans: 1,
      exp: 'Las partículas alfa son núcleos ionizados de helio-4 emitidos en desintegraciones nucleares alfa por radionucleidos pesados (ej. Uranio-238, Radio-226).',
      skill: 'Química Nuclear y Radiactividad',
      topic: 'Química Nuclear',
      sub: 'Desintegración Alfa'
    },
    {
      q: '¿Cuál es el valor del potencial estándar de reducción E° para el electrodo estándar de hidrógeno (EEH) fijado como referencia universal a 25 °C y 1 atm?',
      opts: ['-1.00 V', '0.00 V (cero voltios por convención)', '+1.00 V', '+0.76 V'],
      ans: 1,
      exp: 'Por convención de la IUPAC, la semirreacción 2 H⁺(ac, 1 M) + 2 e⁻ ⇌ H₂(g, 1 atm) sobre platino platinizado tiene E° = 0.000 V a todas las temperaturas de referencia.',
      skill: 'Potenciales Estándar de Reducción',
      topic: 'Electroquímica',
      sub: 'Electrodo Estándar de Hidrógeno'
    }
  ];

  const bac: any[] = [];
  bacRaw.forEach((item, idx) => {
    bac.push({
      id: `qui-bac-${idx + 1}`,
      sectionId: 6,
      number: 40 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Intermedio',
      educationalLevel: 'Bachillerato',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // TÉCNICO 61-80
  const tecRaw = [
    {
      q: 'En análisis químico instrumental, ¿qué técnica cuantitativa utiliza la absorción de luz en longitudes de onda específicas para determinar concentraciones de metales traza (Pb, Cd, Cu) atomizados en una llama de acetileno-aire?',
      opts: ['Espectrometría de Absorción Atómica (AAS)', 'Refractometría', 'Cromatografía en capa fina', 'Titulometría Karl Fischer'],
      ans: 0,
      exp: 'La espectrometría de absorción atómica (EAA) mide la atenuación de radiación emitida por una lámpara de cátodo hueco al atravesar una nube de átomos neutros en estado fundamental vaporizados en la llama.',
      skill: 'Química Analítica Instrumental',
      topic: 'Espectrometría de Absorción Atómica',
      sub: 'Determinación de Metales Pesados'
    },
    {
      q: 'En el tratamiento químico de potabilización de aguas superficiales, ¿qué coagulante inorgánico hidrolizable desestabiliza las cargas electrostáticas coloidales de arcilla para inducir floculación rápida?',
      opts: ['Sulfato de aluminio (Al₂(SO₄)₃ · 14 H₂O)', 'Glucosa anhidra', 'Cloruro de potasio', 'Alcohol isopropílico'],
      ans: 0,
      exp: 'El sulfato de aluminio se hidroliza en agua generando complejos polinucleares con alta carga positiva Al³⁺ que neutralizan el potencial zeta de los coloides negativos, formando flóculos decantables.',
      skill: 'Tratamiento Químico de Aguas',
      topic: 'Fisicoquímica de Aguas',
      sub: 'Coagulación y Floculación'
    },
    {
      q: 'En el ensayo analítico volumétrico de Karl Fischer, ¿qué analito se determina con extraordinaria precisión y selectividad mediante la reducción estequiométrica de yodo por dióxido de azufre en presencia de una base?',
      opts: ['Grasas totales', 'Humedad o agua traza residual', 'Metanol libre', 'Metales pesados'],
      ans: 1,
      exp: 'La titulación Karl Fischer cuantifica agua traza (ppm a %) basándose en la reacción cuantitativa: H₂O + I₂ + SO₂ + 3 RN + CH₃OH → 2 RN·HI + RN·HSO₄CH₃.',
      skill: 'Control de Calidad Analítico',
      topic: 'Química Analítica de Laboratorio',
      sub: 'Determinación de Humedad por Karl Fischer'
    },
    {
      q: 'En procesos químicos industriales, ¿qué catalizador heterogéneo sólido se emplea comúnmente en el proceso de contacto para oxidar dióxido de azufre (SO₂) a trióxido de azufre (SO₃) en la manufactura de ácido sulfúrico?',
      opts: ['Pentóxido de vanadio (V₂O₅ soportado en sílice)', 'Hierro puro en polvo', 'Níquel Raney', 'Cloruro de sodio'],
      ans: 0,
      exp: 'El V₂O₅ promovido con sulfato de potasio opera a 400-450 °C catalizando eficientemente la oxidación reversible 2 SO₂ + O₂ ⇌ 2 SO₃ con rendimientos superiores al 99.5%.',
      skill: 'Catálisis Heterogénea Industrial',
      topic: 'Química Industrial',
      sub: 'Proceso de Contacto y Ácido Sulfúrico'
    },
    {
      q: 'En la galvanotecnia y electrodeposición de recubrimientos protectores de zinc (galvanizado electrolítico), ¿en qué electrodo de la cuba se coloca la pieza metálica de acero a recubrir?',
      opts: [
        'En el cátodo conectado al polo negativo de la fuente de corriente continua',
        'En el ánodo conectado al polo positivo',
        'En el ánodo de sacrificio sin conexión externa',
        'Flotando en la superficie del baño'
      ],
      ans: 0,
      exp: 'La pieza actúa como cátodo (polo negativo): los cationes metálicos Zn²⁺ de la solución electrolítica migran hacia ella y captan electrones (reducción catódica Zn²⁺ + 2e⁻ → Zn⁰), depositando una película uniforme.',
      skill: 'Procesos Electroquímicos de Galvanoplastia',
      topic: 'Electroquímica Industrial',
      sub: 'Electrodeposición Catódica'
    },
    {
      q: 'En cromatografía de gases (GC) para análisis de solventes y combustibles, ¿cuál es el detector universal por ionización más utilizado para hidrocarburos y compuestos orgánicos?',
      opts: ['Detector de Ionización de Llama (FID)', 'Detector de Conductividad Térmica (TCD)', 'Detector de Captura Electrónica (ECD)', 'Fotómetro de llama'],
      ans: 0,
      exp: 'El detector FID quema los compuestos eluidos en una micromicro-llama de hidrógeno-aire; los iones de carbono formados son recolectados por electrodos produciendo una corriente proporcional a la masa de carbono orgánico.',
      skill: 'Cromatografía Instrumental de Gases',
      topic: 'Análisis Instrumental',
      sub: 'Detectores FID en Cromatografía de Gases'
    },
    {
      q: 'En seguridad química de laboratorio según el Sistema Globalmente Armonizado (SGA / GHS), ¿qué información crítica obligatoria describe la naturaleza y severidad del peligro químico (por ejemplo: "Líquido y vapores muy inflamables")?',
      opts: ['Consejos de prudencia (Frases P)', 'Indicaciones de peligro (Frases H)', 'Número CAS del compuesto', 'Pictograma de aviso'],
      ans: 1,
      exp: 'Las frases H (Hazard statements) son códigos estandarizados que describen con precisión técnica los peligros físicos, para la salud o para el medio ambiente de los productos químicos.',
      skill: 'Seguridad Química y Normativa SGA',
      topic: 'Seguridad en el Laboratorio',
      sub: 'Sistema Globalmente Armonizado SGA'
    },
    {
      q: 'En el proceso de polimerización industrial para producir polietileno de alta densidad (HDPE), ¿qué tipo de catalizador de coordinación organometálico basado en titanio y alquilaluminio permite la polimerización estereoespecífica a bajas presiones?',
      opts: ['Catalizador de Ziegler-Natta', 'Ácido sulfúrico fumante', 'Peróxido de benzoílo libre', 'Platino coloidal'],
      ans: 0,
      exp: 'Los catalizadores de Ziegler-Natta (Karl Ziegler y Giulio Natta, Nobel 1963) permitieron polimerizar olefinas (etileno, propileno) a presiones y temperaturas suaves con control de la tacticidad y linealidad polimérica.',
      skill: 'Tecnología de Polímeros y Petroquímica',
      topic: 'Química Macromolecular',
      sub: 'Catalizadores Ziegler-Natta'
    },
    {
      q: 'En la determinación de nitrógeno total en alimentos y fertilizantes por el método de Kjeldahl, ¿cuáles son las tres etapas analíticas secuenciales del procedimiento?',
      opts: [
        'Digestión ácida con H₂SO₄, destilación por arrastre de vapor en medio alcalino y titulación ácido-base del amoníaco recolectado',
        'Filtración al vacío, calcinación en mufla y pesada gravimétrica',
        'Extracción Soxhlet, evaporación rotavapor y secado',
        'Precipitación con cloruro de bario y centrifugación'
      ],
      ans: 0,
      exp: 'El método Kjeldahl transforma el nitrógeno orgánico en sulfato de amonio con H₂SO₄ caliente (digestión); alcaliniza con NaOH para liberar NH₃ gaseoso (destilación) y titula con ácido valorado para cuantificar proteínas.',
      skill: 'Métodos Clásicos de Análisis Bromatológico',
      topic: 'Análisis de Alimentos',
      sub: 'Método Kjeldahl'
    },
    {
      q: 'En la industria de refinación de petróleo (downstream), ¿qué proceso químico catalítico de craqueo (FCC) rompe fracciones pesadas de gasóleo al vacío para transformarlas en gasolinas de alto octanaje y olefinas ligeras?',
      opts: ['Craqueo catalítico en lecho fluido (FCC)', 'Hidrotratamiento HDT', 'Isomerización de parafinas', 'Alquilación con HF'],
      ans: 0,
      exp: 'El reactor FCC utiliza microesferas de catalizador de zeolita en suspensión fluidizada a 500 °C para romper enlaces C-C de hidrocarburos de cadena larga mediante mecanismos por carbocationes.',
      skill: 'Refinación de Hidrocarburos y Petroquímica',
      topic: 'Ingeniería Química',
      sub: 'Craqueo Catalítico FCC'
    },
    {
      q: 'En la purificación de principios activos farmacéuticos mediante cristalización por enfriamiento, ¿qué parámetro fisicoquímico define el intervalo metaestable donde no ocurre nucleación espontánea pero sí crecimiento de cristales sembrados?',
      opts: ['Línea de spinodal', 'Zona metaestable de supersaturación', 'Punto eutéctico ternario', 'Presión osmótica crítica'],
      ans: 1,
      exp: 'La anchura de la zona metaestable (MSZW) es la región entre la curva de solubilidad termodinámica y el límite de nucleación primaria espontánea; trabajar en esta zona con siembra asegura cristales uniformes y de alta pureza.',
      skill: 'Operaciones Unitarias Farmacéuticas',
      topic: 'Ingeniería Farmacéutica',
      sub: 'Cristalización Industrial'
    },
    {
      q: 'En la valorización de biomasa y síntesis de biocombustibles, ¿qué reacción química convierte los triglicéridos de aceites vegetales en ésteres metílicos de ácidos grasos (biodiésel) y glicerol empleando metanol y metóxido de sodio como catalizador?',
      opts: ['Transesterificación alcalina', 'Saponificación ácida', 'Pirólisis rápida', 'Deshidrogenación oxidativa'],
      ans: 0,
      exp: 'La transesterificación es una sustitución nucleofílica sobre acilo donde 1 mol de triglicérido reacciona con 3 moles de metanol rindiendo 3 moles de ésteres metílicos (biodiésel) y 1 mol de glicerol como subproducto.',
      skill: 'Biocombustibles y Química Verde',
      topic: 'Energías Renovables y Biorrefinerías',
      sub: 'Transesterificación de Biodiésel'
    },
    {
      q: 'En el ensayo electroquímico potenciométrico para calibrar un electrodo combinado de vidrio para pH, ¿qué soluciones reguladoras patrón certificadas se utilizan típicamente para una calibración en dos puntos?',
      opts: [
        'Soluciones buffer patrón de pH 7.00 y pH 4.01 (o pH 10.01 según el rango de trabajo)',
        'Ácido sulfúrico al 10% y soda cáustica al 50%',
        'Agua destilada desgasificada exclusivamente',
        'Solución de permanganato de potasio'
      ],
      ans: 0,
      exp: 'La calibración ajusta la pendiente de Nernst (teóricamente -59.16 mV/pH a 25 °C) y el potencial de asimetría del electrodo utilizando tampones trazables NIST de pH 7.00 (punto cero) y pH 4.00 o 10.00.',
      skill: 'Potenciometría y Mantenimiento de Sensores',
      topic: 'Metrología Química',
      sub: 'Calibración de pH-metros'
    },
    {
      q: 'En el análisis de corrosión metálica industrial, ¿qué técnica electroquímica mide la corriente de corrosión aplicando pequeñas perturbaciones de potencial (±10 mV) respecto al potencial de circuito abierto?',
      opts: ['Resistencia de Polarización Lineal (LPR)', 'Voltamperometría cíclica rápida', 'Culombimetría a corriente constante', 'Espectroscopía Mössbauer'],
      ans: 0,
      exp: 'La técnica LPR basada en la aproximación de Stern-Geary permite determinar la velocidad de corrosión instantánea in situ en tuberías de plantas químicas a partir de la pendiente ΔE / ΔI.',
      skill: 'Control y Monitoreo de Corrosión',
      topic: 'Corrosión Industrial',
      sub: 'Resistencia de Polarización Lineal'
    },
    {
      q: 'En el proceso de fabricación del papel kraft, ¿qué licor químico alcalino compuesto principalmente por hidróxido de sodio (NaOH) y sulfuro de sodio (Na₂S) disuelve selectivamente la lignina de la madera?',
      opts: ['Licor negro concentrado', 'Licor blanco activo', 'Licor verde caustificado', 'Hipoclorito de calcio'],
      ans: 1,
      exp: 'El licor blanco es la solución reactiva fresca que digiere las astillas de madera a 170 °C, solubilizando los enlaces éter y carbono-carbono de la lignina y liberando fibras de celulosa intactas.',
      skill: 'Procesos Químicos de la Celulosa y Papel',
      topic: 'Química Industrial de la Madera',
      sub: 'Proceso Kraft y Licores de Cocción'
    },
    {
      q: 'En la determinación gravimétrica de sulfatos en aguas residuales, ¿qué reactivo precipitante se adiciona en medio ácido caliente para precipitar sulfato de bario blanco insoluble (BaSO₄)?',
      opts: ['Cloruro de bario (BaCl₂)', 'Nitrato de plata (AgNO₃)', 'Hidróxido de sodio', 'Oxalato de amonio'],
      ans: 0,
      exp: 'La adición controlada de BaCl₂ precipita cuantitativamente los iones SO₄²⁻ como BaSO₄ cristalino (K_ps ≈ 1.1 × 10⁻¹⁰), el cual se filtra en papel libre de cenizas, se calcina a 800 °C y se pesa.',
      skill: 'Gravimetría Analítica Clásica',
      topic: 'Química Analítica Cuantitativa',
      sub: 'Determinación Gravimétrica de Sulfato'
    },
    {
      q: 'En síntesis orgánica industrial, ¿qué proceso electroquímico a gran escala (proceso cloro-álcali) electroliza salmuera acuosa de NaCl utilizando celdas de membrana de intercambio catiónico para producir cloro gas, hidrógeno y soda cáustica?',
      opts: ['Proceso cloro-álcali con membrana Nafion', 'Proceso Solvay de carbonato', 'Proceso Ostwald nítrico', 'Proceso Hall-Héroult'],
      ans: 0,
      exp: 'La membrana polimérica perfluorada (Nafion) permite únicamente el paso de cationes Na⁺ del ánodo al cátodo, impidiendo la mezcla del cloro gas generado en el ánodo con los iones OH⁻ del cátodo.',
      skill: 'Electroquímica Industrial de Gran Escala',
      topic: 'Industria Cloro-Álcali',
      sub: 'Electrólisis de Salmuera'
    },
    {
      q: 'En cromatografía en capa fina (TLC) para monitorear el avance de una reacción química, ¿cómo se calcula el factor de retardo (R_f) de una mancha de compuesto?',
      opts: [
        'R_f = Distancia recorrida por el analito desde el origen / Distancia recorrida por el frente del eluyente',
        'R_f = Masa molecular del compuesto / Tiempo de retención',
        'R_f = Volumen de muestra inyectado / Área de la placa',
        'R_f = Longitud de la cubeta espectrofotométrica'
      ],
      ans: 0,
      exp: 'El R_f es una constante adimensional característica de cada sustancia para un sistema eluyente/fase estacionaria dado, definido como R_f = d_soluto / d_frente.',
      skill: 'Cromatografía Planar en Capa Fina',
      topic: 'Técnicas de Laboratorio Orgánico',
      sub: 'Cálculo de Rf en TLC'
    },
    {
      q: 'En el almacenamiento criogénico y manipulación de gases licuados industriales (nitrógeno líquido a -196 °C), ¿cuál es el peligro técnico prioritario por asfixia en espacios cerrados sin ventilación?',
      opts: [
        'La expansión volumétrica extrema de 1 litro de nitrógeno líquido en cerca de 700 litros de gas, desplazando el oxígeno atmosférico por debajo del 18% sin previo aviso olfativo',
        'La toxicidad corrosiva directa del nitrógeno gaseoso',
        'La combustión espontánea violenta',
        'La polimerización explosiva'
      ],
      ans: 0,
      exp: 'El nitrógeno es incoloro e inodoro: su rápida vaporización satura el ambiente reduciendo la fracción de oxígeno ambiental por debajo del umbral de hipoxia letal (< 16% O₂) en segundos.',
      skill: 'Higiene y Seguridad con Criogénicos',
      topic: 'Seguridad Química Industrial',
      sub: 'Riesgos de Gases Criogénicos'
    },
    {
      q: 'En la manufactura de fertilizantes fosfatados, ¿qué ácido mineral concentrado se hace reaccionar con roca fosfórica insoluble (fluorapatita Ca₅(PO₄)₃F) para producir superfosfato simple o triple?',
      opts: ['Ácido sulfúrico (H₂SO₄) o ácido fosfórico (H₃PO₄)', 'Ácido clorhídrico concentrado', 'Ácido acético glacial', 'Ácido cianhídrico'],
      ans: 0,
      exp: 'La acidulación con H₂SO₄ convierte el fosfato tricálcico insoluble en fosfato monocálcico soluble en agua Ca(H₂PO₄)₂ asimilable por las raíces vegetales.',
      skill: 'Tecnología de Fertilizantes Químicos',
      topic: 'Química de Fertilizantes',
      sub: 'Acidulación de Roca Fosfórica'
    }
  ];

  const tec: any[] = [];
  tecRaw.forEach((item, idx) => {
    tec.push({
      id: `qui-tec-${idx + 1}`,
      sectionId: 6,
      number: 60 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Desafiante',
      educationalLevel: 'Técnico',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // UNIVERSITARIO 81-100
  const uniRaw = [
    {
      q: 'En química cuántica molecular, ¿qué postula la aproximación adiabática de Born-Oppenheimer al resolver la ecuación de Schrödinger electrónica?',
      opts: [
        'Que los electrones tienen espín nulo.',
        'Que debido a la enorme diferencia de masa entre núcleos y electrones (m_núcleo ≫ m_electrón), los núcleos atómicos pueden considerarse estacionarios respecto al movimiento instantáneo de los electrones.',
        'Que las moléculas no vibran ni rotan.',
        'Que todos los enlaces covalentes son puramente electrostáticos.'
      ],
      ans: 1,
      exp: 'La aproximación de Born-Oppenheimer permite desacoplar la función de onda total molecular en un componente electrónico sobre una superficie de energía potencial (PES) nuclear fija.',
      skill: 'Química Cuántica Molecular Teórica',
      topic: 'Mecánica Cuántica Molecular',
      sub: 'Aproximación de Born-Oppenheimer'
    },
    {
      q: 'En la teoría del funcional de la densidad (DFT) de Hohenberg-Kohn y Kohn-Sham, ¿qué teorema fundamental demuestra que la energía del estado fundamental de un sistema polielectrónico es un funcional unívoco de la densidad electrónica tridimensional ρ(r)?',
      opts: [
        'Primer Teorema de Hohenberg-Kohn (1964)',
        'Teorema de Brillouin',
        'Lema de Slater',
        'Regla de Woodward-Hoffmann'
      ],
      ans: 0,
      exp: 'El primer teorema de Hohenberg-Kohn demuestra por reducción al absurdo que no pueden existir dos potenciales externos v(r) diferentes que generen la misma densidad electrónica fundamental ρ(r), reduciendo 3N coordenadas espaciales a solo 3.',
      skill: 'Química Computacional y Teoría DFT',
      topic: 'Fisicoquímica Teórica',
      sub: 'Teoremas de Hohenberg-Kohn'
    },
    {
      q: 'En síntesis orgánica avanzada, ¿qué célebre reacción de acoplamiento cruzado catalizada por paladio(0) forma enlaces carbono-carbono sp²-sp² entre un haluro de arilo y un ácido arilborónico en presencia de una base (Premio Nobel 2010)?',
      opts: ['Acoplamiento de Suzuki-Miyaura', 'Reacción de Diels-Alder', 'Condensación de Claisen', 'Síntesis de Gabriel'],
      ans: 0,
      exp: 'El acoplamiento de Suzuki-Miyaura involucra adición oxidativa del haluro de arilo al Pd(0), transmetalación del arilboronato promovida por base y eliminación reductora para generar diarilos biarílicos.',
      skill: 'Química Organometálica y Reacciones de Acoplamiento',
      topic: 'Síntesis Orgánica Superior',
      sub: 'Acoplamiento de Suzuki-Miyaura'
    },
    {
      q: 'En la teoría de orbitales moleculares de frontera (FMO) y reglas de Woodward-Hoffmann, ¿qué tipo de cicloadición electrocíclica [4+2] térmica entre un dieno conjugado s-cis y un dienófilo ocurre de forma estereoespecífica suprafacial-suprafacial?',
      opts: ['Reacción de Diels-Alder', 'Transposición de Cope', 'Reacción de Wittig', 'Cicloadición fotoquímica [2+2]'],
      ans: 0,
      exp: 'La cicloadición de Diels-Alder es una reacción pericíclica concertada térmicamente permitida por simetría orbital (4n+2 electrones pi con n=1) que procede a través de un estado de transición aromático de 6 miembros.',
      skill: 'Reacciones Pericíclicas y Simetría Orbital',
      topic: 'Química Orgánica Mecanicista',
      sub: 'Reglas de Woodward-Hoffmann'
    },
    {
      q: 'En espectroscopía de resonancia magnética nuclear (RMN de ¹H y ¹³C), ¿a qué fenómeno físico se debe el desdoblamiento fino de señales en multipletes (regla n+1) para núcleos con espín I = 1/2?',
      opts: [
        'Al acoplamiento espín-espín escalar indirecto (constante de acoplamiento J) mediado por los electrones de los enlaces químicos adyacentes',
        'A la polarización circular magnética del solvente',
        'A la relajación cuadrupolar nuclear',
        'Al efecto Doppler térmico'
      ],
      ans: 0,
      exp: 'El acoplamiento escalar J transmite información sobre el alineamiento cuántico paralelo o antiparalelo de los núcleos vecinos a través de los electrones de enlace según la relación de Karplus.',
      skill: 'Espectroscopía de RMN Avanzada',
      topic: 'Determinación Estructural Orgánica',
      sub: 'Acoplamiento Espín-Espín en RMN'
    },
    {
      q: 'En termodinámica estadística molecular, ¿cómo se relaciona la constante de equilibrio K_p de una reacción con las funciones de partición moleculares canónicas Q_i de las especies reaccionantes y productos?',
      opts: [
        'K_p depende de la razón de las funciones de partición por unidad de volumen corregida por la diferencia de energía de punto cero (ΔE₀) multiplicada por k_B T',
        'K_p es idéntica a la suma de masas moleculares',
        'K_p no depende de los estados rotacionales moleculares',
        'K_p es independiente de la temperatura T'
      ],
      ans: 0,
      exp: 'A partir del ensamble canónico, ln K_p = -ΔG°/RT relaciona la constante termodinámica macroscópica con el producto de las funciones de partición traslacionales, rotacionales, vibracionales y electrónicas.',
      skill: 'Termodinámica Estadística Química',
      topic: 'Fisicoquímica Cuántica',
      sub: 'Funciones de Partición y Equilibrio'
    },
    {
      q: 'En la teoría de transferencia electrónica de Rudolph A. Marcus (Premio Nobel 1992), ¿qué fenómeno contraintuitivo predice que a fuerzas impulsoras termodinámicas muy exotérmicas (-ΔG° > λ), la velocidad de transferencia electrónica disminuye en vez de aumentar?',
      opts: ['Región normal de Marcus', 'Región invertida de Marcus (Marcus inverted region)', 'Catástrofe ultravioleta', 'Túnel cuántico bariónico'],
      ans: 1,
      exp: 'En la región invertida de Marcus, la curva parábola de energía libre de los productos cruza a la de los reactivos a la izquierda del mínimo, haciendo que la energía de activación aumente a mayor exergonicidad.',
      skill: 'Cinética de Transferencia Electrónica de Marcus',
      topic: 'Fisicoquímica de Procesos Redox',
      sub: 'Región Invertida de Marcus'
    },
    {
      q: 'En química inorgánica y teoría del campo cristalino (CFT) para complejos octaédricos d⁶ de bajo espín (como [Fe(CN)₆]⁴⁻), ¿cuál es la energía de estabilización del campo cristalino (CFSE)?',
      opts: ['0 Δ_o', '-2.4 Δ_o + 2P', '-0.4 Δ_o', '+1.2 Δ_o'],
      ans: 1,
      exp: 'En campo fuerte de bajo espín, los 6 electrones llenan completamente los orbitales t_{2g} inferiores (t_{2g}⁶ e_g⁰). CFSE = 6 × (-0.4 Δ_o) = -2.4 Δ_o más la energía de apareamiento electrónico.',
      skill: 'Teoría del Campo Cristalino y Complejos de Coordinación',
      topic: 'Química Inorgánica Avanzada',
      sub: 'CFSE en Complejos Octaédricos'
    },
    {
      q: 'En catálisis asimétrica enantioselectiva, ¿qué ligandos quirales de fósforo bidentados con quiralidad axial atropoisomérica (como BINAP) sintetizados por Ryōji Noyori permiten hidrogenaciones catalíticas con excesos enantioméricos superiores al 99% ee?',
      opts: ['Ligandos difosfina quirales con eje de simetría C₂ (BINAP)', 'Ligandos salinos de cianuro', 'Ligandos oxalato planos', 'Trifenilfosfina aquiral simple'],
      ans: 0,
      exp: 'Noyori demostró que el esqueleto de 1,1\'-binaftilo rígido impone un entorno estérico quiral rígido en los centros metálicos de Ru(II) o Rh(I) que discrimina con precisión cuántica las caras enantiotópicas re y si del sustrato.',
      skill: 'Catálisis Asimétrica y Quiralidad',
      topic: 'Química Orgánica Avanzada',
      sub: 'Ligandos BINAP e Hidrogenación Asimétrica'
    },
    {
      q: 'En electroquímica fundamental y cinética de electrodos, ¿qué célebre ecuación no lineal relaciona la densidad de corriente eléctrica i con el sobrepotencial de electrodo η considerando las velocidades de transferencia de carga anódica y catódica?',
      opts: ['Ecuación de Butler-Volmer', 'Ecuación de Ilkovic polarográfica', 'Ecuación de Debye-Hückel', 'Ecuación de Cottrell cronoamperométrica'],
      ans: 0,
      exp: 'La ecuación de Butler-Volmer: i = i₀ [exp(α_a F η / RT) - exp(-α_c F η / RT)] gobierna la cinética de transferencia interfacial de carga, aproximándose a la ley de Tafel a sobrepotenciales elevados.',
      skill: 'Cinética Electroquímica de Transferencia de Carga',
      topic: 'Electroquímica Teórica',
      sub: 'Ecuación de Butler-Volmer'
    },
    {
      q: 'En la teoría ácido-base de Pearson (HSAB: Hard and Soft Acids and Bases), ¿cómo interactúan preferencialmente los ácidos duros y las bases duras frente a los ácidos blandos y bases blandas?',
      opts: [
        'Los ácidos duros (poco polarizables, alta densidad de carga) se coordinan preferentemente con bases duras (enlace preferentemente electrostático), y los ácidos blandos (muy polarizables) se coordinan preferentemente con bases blandas (enlace preferentemente covalente)',
        'Los ácidos duros siempre rechazan a las bases duras',
        'No existe correlación con la polarizabilidad electrónica',
        'Solo se aplica a solventes no acuosos'
      ],
      ans: 0,
      exp: 'El principio HSAB de Ralph Pearson racionaliza la estabilidad de complejos inorgánicos, selectividad de sustituciones nucleofílicas y solubilidades minerales a través de la densidad de carga y polarizabilidad de los orbitales de frontera.',
      skill: 'Teoría de Ácidos y Bases Duros y Blandos (HSAB)',
      topic: 'Química Inorgánica Teórica',
      sub: 'Principio HSAB de Pearson'
    },
    {
      q: 'En la teoría del estado de transición (TST) de Eyring-Polanyi para reacciones químicas en fase gas, ¿a partir de qué factores se expresa formalmente la constante cinética k(T)?',
      opts: [
        'k(T) = (k_B T / h) · exp(-ΔG^‡ / RT) = (k_B T / h) · exp(ΔS^‡ / R) · exp(-ΔH^‡ / RT)',
        'k(T) = R · T exclusivamente',
        'k(T) = h · ν / k_B',
        'k(T) = ln(ΔH^‡)'
      ],
      ans: 0,
      exp: 'La ecuación de Eyring relaciona la velocidad de cruce por el collado de la superficie de energía potencial con la frecuencia fundamental (k_B T / h) y la energía libre de activación del complejo de transición activado.',
      skill: 'Teoría del Estado de Transición y Cinética Química Superior',
      topic: 'Cinética Química Teórica',
      sub: 'Ecuación de Eyring-Polanyi'
    },
    {
      q: 'En química supramolecular, ¿qué tipo de macrociclos sintéticos diseñados por Charles Pedersen (Premio Nobel 1987) encapsulan selectivamente cationes alcalinos (como K⁺) en una cavidad central mediante interacciones dipolares coordinadas con átomos de oxígeno?',
      opts: ['Éteres corona (Crown ethers)', 'Polietilenos lineales', 'Zeolitas alumínicas naturales', 'Fullerenos C₆₀'],
      ans: 0,
      exp: 'Los éteres corona (como el 18-corona-6 con afinidad estricta por el catión potasio K⁺ de 1.38 Å de radio) dieron nacimiento a la química de reconocimiento molecular y transporte de fase.',
      skill: 'Química Supramolecular y Reconocimiento Molecular',
      topic: 'Química Supramolecular',
      sub: 'Éteres Corona y Criptandos'
    },
    {
      q: 'En espectrometría de masas de alta resolución acoplada a fuentes de ionización suave (ESI / MALDI), ¿qué parámetro representa la relación adimensional m/z?',
      opts: [
        'La relación entre la masa molecular del ion en unidades de masa atómica unificadas (Da) y su número de cargas elementales z',
        'La velocidad de fragmentación unimolecular',
        'El tiempo de vuelo absoluto sin carga',
        'La constante de ionización de enlace'
      ],
      ans: 0,
      exp: 'Los analizadores de masas (TOF, Orbitrap, FT-ICR) separan iones en función estricta de su relación masa/carga (m/z) midiendo campos electromagnéticos deflectores o frecuencias de ciclotrón.',
      skill: 'Espectrometría de Masas Avanzada (MS)',
      topic: 'Análisis Estructural Químico',
      sub: 'Relación Masa/Carga m/z'
    },
    {
      q: 'En la teoría cuántica de orbitales moleculares de Hückel para sistemas pi planos conjugados, ¿cuál es la energía de los orbitales moleculares para el catión alilo lineal (tres carbonos sp² y 2 electrones pi)?',
      opts: [
        'E₁ = α + √2 β; E₂ = α; E₃ = α - √2 β',
        'E = α para los tres orbitales degenerados',
        'E = 2β en todos los niveles',
        'E = 0 estrictamente'
      ],
      ans: 0,
      exp: 'Al diagonalizar la matriz secular de Hückel para una cadena alílica de 3 centros con elementos de salto β: las raíces seculares son x = -√2, 0, +√2, rindiendo un orbital enlazante (α + √2β), uno no enlazante (α) y uno antienlazante (α - √2β).',
      skill: 'Química Cuántica de Hückel',
      topic: 'Química Física Cuántica',
      sub: 'Método de Hückel y Sistema Alilo'
    },
    {
      q: 'En química organometálica de complejos de metales de transición d, ¿qué regla empírica cuántica deducida por Irving Langmuir predice la estabilidad estequiométrica de complejos diamagnéticos de capa cerrada sumando electrones d del metal y electrones donados por los ligandos?',
      opts: ['Regla de los 18 electrones', 'Regla de las fases de Gibbs', 'Regla del octeto simple de Lewis', 'Regla de Wade-Mingos para clústeres'],
      ans: 0,
      exp: 'La regla de los 18 electrones se basa en el llenado completo de los orbitales de valencia del metal (un orbital s, tres p y cinco d: 1+3+5 = 9 orbitales × 2 = 18 electrones), análoga a la regla del octeto de los elementos ligeros.',
      skill: 'Química de Coordinación Organometálica',
      topic: 'Química Organometálica',
      sub: 'Regla de los 18 Electrones'
    },
    {
      q: 'En la fotoquímica orgánica, ¿qué diagrama de estados energéticos ilustra las transiciones radiantes (fluorescencia, fosforescencia) y no radiantes (conversión interna, cruce intersistemas ISC) entre estados singlete (S) y triplete (T)?',
      opts: ['Diagrama de Jablonski', 'Diagrama de Frost', 'Diagrama de Ellingham', 'Diagrama de Pourbaix'],
      ans: 0,
      exp: 'El diagrama de Aleksander Jabłoński describe cinéticamente la desactivación de estados electrónicos fotoexcitados, incluyendo el cruce intersistemas S₁ → T₁ asistido por acoplamiento espín-órbita.',
      skill: 'Fotoquímica Física y Fotofísica Molecular',
      topic: 'Fisicoquímica Fotoquímica',
      sub: 'Diagrama de Jablonski'
    },
    {
      q: 'En síntesis de péptidos en fase sólida (SPPS) desarrollada por Robert Bruce Merrifield (Nobel 1984), ¿cuáles son los dos esquemas ortogonales de grupos protectores de la función N-alfa amino más empleados?',
      opts: ['Estrategia Fmoc / tBu y estrategia Boc / Bzl', 'Estrategia metilo / etilo pura', 'Protección por acetilación irreversible', 'Estrategia con sulfatos inorgánicos'],
      ans: 0,
      exp: 'Merrifield revolucionó la síntesis peptídica anclando la cadena al polímero de poliestireno; la estrategia Fmoc (lábil a base suave piperidina) y Boc (lábil a ácido TFA) permiten desprotecciones ortogonales cuantitativas.',
      skill: 'Síntesis Peptídica y Biopolímeros',
      topic: 'Bioquímica Sintética',
      sub: 'Síntesis en Fase Sólida de Merrifield'
    },
    {
      q: 'En cristalografía de rayos X de macromoléculas biológicas (proteínas y ribosomas), ¿a qué problema fundamental se debe que los detectores registren únicamente las intensidades de difracción |F(hkl)|² pero pierdan la información de fase de las ondas dispersadas?',
      opts: ['El problema de la fase cristalográfica (Phase Problem)', 'La dispersión inelástica de Compton pura', 'La aberración cromática del detector', 'La refracción de Bragg'],
      ans: 0,
      exp: 'Para reconstruir la densidad electrónica ρ(r) mediante transformada de Fourier inversa se requieren amplitudes y fases complejas; el problema de la fase se resuelve experimentalmente mediante MAD/SAD con selenometionina o reemplazo molecular.',
      skill: 'Cristalografía de Rayos X Macromolecular',
      topic: 'Biofísica Estructural',
      sub: 'El Problema de la Fase Cristalográfica'
    },
    {
      q: 'En fisicoquímica de soluciones electrolíticas concentradas, ¿qué teoría desarrollada por Peter Debye y Erich Hückel en 1923 calcula los coeficientes de actividad iónica media γ_± modelando la atmósfera iónica apantalladora a diluciones moderadas?',
      opts: ['Ley Límite de Debye-Hückel (log γ_± = -A |z₊ z₋| √I)', 'Ecuación de estado de Van der Waals', 'Modelo de Onsager de polarización', 'Ecuación de Flory-Huggins'],
      ans: 0,
      exp: 'Debye y Hückel resolvieron la ecuación de Poisson-Boltzmann linealizada para el potencial electrostático alrededor de un ion central, demostrando que las desviaciones del comportamiento ideal dependen de la fuerza iónica I = 1/2 ∑ c_i z_i².',
      skill: 'Fisicoquímica de Electrolitos en Solución',
      topic: 'Termodinámica de Electrolitos',
      sub: 'Ley Límite de Debye-Hückel'
    }
  ];

  const uni: any[] = [];
  uniRaw.forEach((item, idx) => {
    uni.push({
      id: `qui-uni-${idx + 1}`,
      sectionId: 6,
      number: 80 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Desafiante',
      educationalLevel: 'Universitario',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  quimicaQuestions.push(...bas, ...int, ...bac, ...tec, ...uni);
}

makeQuimicaItems();
writeSubjectFile('quimica.ts', 'QUESTIONS_QUIMICA', 'Química', quimicaQuestions);
