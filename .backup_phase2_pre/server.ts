import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import crypto from 'crypto';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;

// Security & Authentication Configuration
// SESSION_SECRET: Used to sign and verify stateless HMAC-SHA256 session tokens across Cloud Run instances
const SESSION_SECRET = process.env.SESSION_SECRET || 'nexora_hmac_secret_key_cloudrun_2026_dev_fallback';

// TEACHER_ACCESS_KEY: Teacher password verified strictly on server side
const TEACHER_ACCESS_KEY = process.env.TEACHER_ACCESS_KEY || 'NEXORA_DOCENTE_2026';

if (!process.env.TEACHER_ACCESS_KEY) {
  console.warn('⚠️ [SEGURIDAD] TEACHER_ACCESS_KEY no está definida en las variables de entorno. Usando valor de desarrollo.');
}

// In-Memory Rate Limiting for Login Attempts (Max 5 attempts per IP per 5 minutes)
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const loginRateLimitMap = new Map<string, RateLimitRecord>();

function checkLoginRateLimit(ip: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const windowMs = 5 * 60 * 1000; // 5 minutes
  const maxAttempts = 5;

  const record = loginRateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    loginRateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (record.count >= maxAttempts) {
    const retryAfterSeconds = Math.ceil((record.resetAt - now) / 1000);
    return { allowed: false, retryAfterSeconds };
  }

  record.count += 1;
  return { allowed: true };
}

function resetLoginRateLimit(ip: string) {
  loginRateLimitMap.delete(ip);
}

// Constant-time string comparison to prevent timing attacks
function timingSafeEqualStr(a: string, b: string): boolean {
  const aBuf = Buffer.from(a, 'utf8');
  const bBuf = Buffer.from(b, 'utf8');
  if (aBuf.length !== bBuf.length) {
    // Perform dummy comparison to keep constant execution time
    crypto.timingSafeEqual(aBuf, aBuf);
    return false;
  }
  return crypto.timingSafeEqual(aBuf, bBuf);
}

// Stateless HMAC-SHA256 Token Management (Stateless, multi-instance Cloud Run compatible)
interface TeacherSessionPayload {
  role: 'teacher';
  iat: number;
  exp: number;
  jti: string;
}

function createTeacherSessionToken(durationHours = 8): string {
  const now = Date.now();
  const payload: TeacherSessionPayload = {
    role: 'teacher',
    iat: now,
    exp: now + durationHours * 3600 * 1000,
    jti: crypto.randomBytes(16).toString('hex'),
  };

  const payloadStr = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url');
  const hmac = crypto.createHmac('sha256', SESSION_SECRET).update(payloadStr).digest('base64url');
  return `${payloadStr}.${hmac}`;
}

function verifyTeacherSessionToken(token: string): TeacherSessionPayload | null {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [payloadStr, signature] = parts;
  const expectedHmac = crypto.createHmac('sha256', SESSION_SECRET).update(payloadStr).digest('base64url');

  if (!timingSafeEqualStr(signature, expectedHmac)) {
    return null;
  }

  try {
    const payloadJson = Buffer.from(payloadStr, 'base64url').toString('utf8');
    const payload: TeacherSessionPayload = JSON.parse(payloadJson);

    if (payload.role !== 'teacher') return null;
    if (Date.now() > payload.exp) return null;

    return payload;
  } catch {
    return null;
  }
}

// Middleware: Require Teacher Authentication for protected endpoints
export function requireTeacherAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ 
      error: 'No autorizado. Se requiere inicio de sesión docente.',
      code: 'AUTH_REQUIRED'
    });
  }

  const token = authHeader.substring(7).trim();
  const payload = verifyTeacherSessionToken(token);

  if (!payload) {
    return res.status(401).json({ 
      error: 'Sesión docente inválida o expirada. Por favor, inicia sesión nuevamente.',
      code: 'AUTH_INVALID_TOKEN'
    });
  }

  (req as any).teacherSession = payload;
  next();
}

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

  // Teacher Authentication Endpoints
  app.post('/api/docente/login', (req: Request, res: Response) => {
    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';
    
    // Check rate limit (max 5 failed attempts per 5 minutes)
    const rateCheck = checkLoginRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return res.status(429).json({
        error: `Demasiados intentos fallidos. Por seguridad, espera ${rateCheck.retryAfterSeconds} segundos antes de volver a intentar.`,
        code: 'RATE_LIMITED',
        retryAfter: rateCheck.retryAfterSeconds
      });
    }

    const { password } = req.body || {};
    if (!password || typeof password !== 'string') {
      return res.status(400).json({ error: 'La clave de acceso es requerida.', code: 'MISSING_PASSWORD' });
    }

    const trimmedInput = password.trim();
    const isValid = timingSafeEqualStr(trimmedInput, TEACHER_ACCESS_KEY);

    if (!isValid) {
      return res.status(401).json({
        error: 'Clave de acceso docente incorrecta.',
        code: 'INVALID_CREDENTIALS'
      });
    }

    // Success: Reset rate limit for this IP and issue stateless token
    resetLoginRateLimit(clientIp);
    const token = createTeacherSessionToken(8); // 8 hours duration

    return res.json({
      success: true,
      message: 'Autenticación exitosa',
      token,
      role: 'teacher',
      expiresIn: '8h'
    });
  });

  // Verify active teacher session
  app.get('/api/docente/session', (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.json({ authenticated: false });
    }

    const token = authHeader.substring(7).trim();
    const payload = verifyTeacherSessionToken(token);

    if (!payload) {
      return res.json({ authenticated: false });
    }

    return res.json({
      authenticated: true,
      role: payload.role,
      expiresAt: payload.exp
    });
  });

  // Logout endpoint
  app.post('/api/docente/logout', (_req: Request, res: Response) => {
    return res.json({
      success: true,
      message: 'Sesión docente cerrada con éxito.'
    });
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
