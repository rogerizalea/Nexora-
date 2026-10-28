import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Server-side Gemini initialization
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // API Endpoint: Tutoría con IA
  app.post('/api/gemini/tutor', async (req: Request, res: Response) => {
    try {
      const { 
        message, 
        action = 'explain_step_by_step', 
        questionContext,
        conversationHistory = [] 
      } = req.body;

      if (!message && !questionContext) {
        return res.status(400).json({ error: 'Falta el mensaje o el contexto de la pregunta.' });
      }

      // Check if Gemini API client is available
      if (!ai) {
        // Fallback response with pedagogical guide if API key is not configured in environment
        const fallbackGuide = generateFallbackPedagogicalResponse(message, action, questionContext);
        return res.json({
          reply: fallbackGuide,
          source: 'pedagogical-engine',
          model: 'fallback'
        });
      }

      // Build rich system instruction for empathetic and pedagogical tutor
      const systemInstruction = 
        `Eres el "Tutor Pedagógico con IA" oficial de la plataforma educativa "PRUEBAS DE AYUDA DE ESTUDIO". ` +
        `Tu rol es ser un profesor amable, empático, paciente, motivador y sumamente claro para estudiantes de primaria y secundaria. ` +
        `\n\nDirectrices pedagógicas obligatorias:\n` +
        `1. Adapta tu lenguaje para que sea fácil de comprender, motivador y formativo.\n` +
        `2. Si el estudiante pide una pista ('hint') o pregunta cómo empezar, NUNCA le des la respuesta final directamente; guíalo con preguntas reflexivas o la primera operación para que él mismo sienta el logro de resolverlo.\n` +
        `3. Si solicita 'explain_step_by_step' (explicación paso a paso), desglosa el procedimiento en pasos numerados sencillos (Paso 1, Paso 2, Conclusión).\n` +
        `4. Si solicita 'concept' (concepto clave), explica la regla ortográfica, geométrica o matemática de forma memorable con una regla mnemotécnica o ejemplo cotidiano.\n` +
        `5. Si solicita 'similar_example' (ejemplo similar), proporciona un ejercicio parecido pero con números o palabras distintas y resuélvelo para modelar el proceso.\n` +
        `6. Termina siempre tu respuesta con una frase corta y sincera de ánimo (ej: "¡Confío en tu capacidad, continúa dando lo mejor!").\n` +
        `7. Usa formato Markdown limpio con negritas, listas y saltos de línea claros.`;

      // Build contextual prompt
      let contextPrompt = '';
      if (questionContext) {
        contextPrompt += `\n[CONTEXTO DE LA EVALUACIÓN]\n`;
        if (questionContext.sectionTitle) contextPrompt += `Materia / Área: ${questionContext.sectionTitle}\n`;
        if (questionContext.number) contextPrompt += `Pregunta #${questionContext.number}\n`;
        if (questionContext.questionText) contextPrompt += `Enunciado: "${questionContext.questionText}"\n`;
        if (questionContext.options && Array.isArray(questionContext.options)) {
          contextPrompt += `Opciones disponibles:\n`;
          questionContext.options.forEach((opt: string, i: number) => {
            const letter = String.fromCharCode(65 + i);
            contextPrompt += `  ${letter}) ${opt}\n`;
          });
        }
        if (questionContext.studentSelectedOption !== undefined) {
          contextPrompt += `Opción elegida por el estudiante: ${questionContext.studentSelectedOption}\n`;
        }
        if (questionContext.difficulty) {
          contextPrompt += `Nivel: ${questionContext.difficulty}\n`;
        }
      }

      let userPrompt = '';
      if (action === 'hint') {
        userPrompt = `El estudiante necesita una pista para pensar y resolver esta pregunta por sí mismo sin que le digas la opción correcta: "${message || 'Dame una pista pedagógica'}"`;
      } else if (action === 'concept') {
        userPrompt = `Explícale al estudiante el concepto, fórmula o regla fundamental involucrada en esta pregunta: "${message || '¿Cuál es el concepto clave?'}"`;
      } else if (action === 'similar_example') {
        userPrompt = `Muéstrale al estudiante un ejemplo parecido con solución para que practique el mismo razonamiento: "${message || 'Dame un ejemplo similar'}"`;
      } else if (action === 'explain_step_by_step') {
        userPrompt = `Explícale didácticamente el procedimiento paso a paso para resolver este problema: "${message || 'Explícame paso a paso'}"`;
      } else {
        userPrompt = `Consulta del estudiante: "${message}"`;
      }

      const fullPrompt = `${contextPrompt}\n[SOLICITUD DEL ESTUDIANTE]\n${userPrompt}`;

      // Call Gemini 3.8 Flash model via modern @google/genai SDK
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: fullPrompt,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.6,
        },
      });

      const replyText = response.text || 'He analizado tu duda. Recuerda revisar bien cada dato antes de elegir.';
      
      return res.json({
        reply: replyText,
        source: 'gemini-api',
        model: 'gemini-3.8-flash'
      });
    } catch (error: any) {
      console.error('Error in /api/gemini/tutor:', error);
      // If error occurs, fallback gracefully to pedagogical assistant logic
      const fallbackGuide = generateFallbackPedagogicalResponse(
        req.body?.message, 
        req.body?.action, 
        req.body?.questionContext
      );
      return res.json({
        reply: fallbackGuide,
        source: 'pedagogical-fallback',
        errorDetails: error?.message || 'Error temporal de conexión'
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Setup Vite in development or serve static in production
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`🚀 Servidor ejecutándose en http://0.0.0.0:${PORT}`);
  });
}

// Helper: Generates didactic explanations if API key is in setup or offline
function generateFallbackPedagogicalResponse(message: string, action: string, context?: any): string {
  const qText = context?.questionText || 'la pregunta actual';
  const qNum = context?.number ? `#${context.number}` : '';

  if (action === 'hint') {
    return (
      `💡 **Pista Pedagógica para la pregunta ${qNum}**:\n\n` +
      `• Lee detenidamente lo que te están pidiendo en: *"${qText}"*.\n` +
      `• Identifica los datos principales y descarta primero las opciones que sean evidentemente imposibles.\n` +
      `• Haz una estimación mental aproximada antes de calcular el valor exacto.\n\n` +
      `¡Tómate tu tiempo, tú tienes la capacidad de resolverlo!`
    );
  }

  if (action === 'concept') {
    return (
      `📘 **Concepto Clave para ${qNum}**:\n\n` +
      `• Para resolver con éxito *"${qText}"*, recuerda asociar el enunciado con la propiedad fundamental de esta materia.\n` +
      `• En matemáticas, revisa el orden de operaciones (paréntesis, multiplicación/división, suma/resta).\n` +
      `• En lenguaje, fíjate en la función gramatical y el contexto de la oración.\n` +
      `• En razonamiento lógico, busca el patrón o la regla de cambio que conecta los elementos.\n\n` +
      `¡El conocimiento se construye paso a paso!`
    );
  }

  if (action === 'similar_example') {
    return (
      `🎯 **Ejemplo de Práctica Similar**:\n\n` +
      `Imagina un caso análogo con valores simplificados:\n` +
      `1. Plantea el problema con números pequeños o palabras conocidas.\n` +
      `2. Realiza el mismo procedimiento lógico paso a paso.\n` +
      `3. Comprueba el resultado y luego aplica exactamente la misma lógica a tu pregunta original.\n\n` +
      `¡Sigue adelante, vas por excelente camino!`
    );
  }

  return (
    `🤖 **Explicación Paso a Paso (${qNum})**:\n\n` +
    `1. **Paso 1 - Comprensión**: Analizamos detenidamente: *"${qText}"*.\n` +
    `2. **Paso 2 - Identificación**: Revisamos las opciones disponibles y qué regla las relaciona.\n` +
    `3. **Paso 3 - Verificación**: Comprobamos la coherencia de la respuesta antes de seleccionarla.\n\n` +
    `"${message ? message : '¡Continúa con concentración y confianza en tus habilidades!'}"\n\n` +
    `*¡Nunca te rindas, cada pregunta es una oportunidad de superarte!*`
  );
}

startServer();
