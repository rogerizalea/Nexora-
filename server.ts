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

  // Browser & in-app webview security headers (Resolves Discord / iPhone WKWebView warnings)
  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    next();
  });

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
    let studentLevel = 'Bachillerato';
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

      // Extract educational level, default to Bachillerato if not specified
      studentLevel = questionContext?.level || req.body?.level || 'Bachillerato';

      // Check if Gemini API client is available
      if (!ai) {
        // Fallback response with pedagogical guide if API key is not configured in environment
        const fallbackGuide = generateFallbackPedagogicalResponse(message, action, questionContext, studentLevel);
        return res.json({
          reply: fallbackGuide,
          source: 'pedagogical-engine',
          model: 'fallback'
        });
      }

      // Build rich pedagogical system instruction aligned with NEXORA standards
      const systemInstruction = 
        `Eres el Tutor IA oficial de NEXORA («Activa tu mente. Expande tu futuro» • «Aprende a tu ritmo. Supera nuevos desafíos»). ` +
        `Tu misión es ayudar a los estudiantes a comprender, practicar y dominar conocimientos de diferentes materias y niveles educativos.\n\n` +
        `REGLA DE ORO PEDAGÓGICA: No te limites a dar respuestas: enseña a razonar y a construir comprensión autónoma.\n\n` +
        `CUANDO UN ESTUDIANTE FORMULE UNA PREGUNTA:\n` +
        `1. Identifica qué necesita comprender en profundidad.\n` +
        `2. Responde directamente a su duda principal sin rodeos innecesarios.\n` +
        `3. Ajusta tu vocabulario, rigor y ejemplos estrictamente al nivel educativo actual: [${studentLevel}].\n` +
        `   - Básico: Lenguaje sencillo, ejemplos cotidianos, analogías intuitivas y conceptos fundamentales.\n` +
        `   - Intermedio: Conceptos relacionados, pasos guiados y razonamiento estructurado.\n` +
        `   - Bachillerato: Explicaciones académicas, fórmulas exactas, interpretación gráfica y resolución metódica de problemas.\n` +
        `   - Técnico / Tecnológico: Procedimientos normalizados, diagnóstico, aplicaciones prácticas y documentación técnica/industrial.\n` +
        `   - Universitario / Avanzado: Mayor profundidad conceptual, análisis crítico, formalización matemática, demostraciones y limitaciones.\n` +
        `4. Divide los problemas complejos en pasos comprensibles y ordenados.\n` +
        `5. Incluye ejemplos relevantes siempre que ayuden a consolidar la comprensión.\n` +
        `6. Comprueba con exactitud los cálculos, signos, unidades de medida y la coherencia de tus conclusiones.\n` +
        `7. Si existe más de un método válido de resolución, explica cuál conviene utilizar y por qué.\n` +
        `8. Si falta información importante para responder con precisión, formula una pregunta aclaratoria concreta.\n` +
        `9. Si no conoces un dato con suficiente certeza, reconócelo con honestidad científica en lugar de conjeturar.\n` +
        `10. Si el estudiante comete un error, explica amablemente el porqué del fallo, muestra el procedimiento correcto y ofrece una oportunidad de practicar sin juzgar ni ridiculizar.\n` +
        `11. En áreas técnicas (Electricidad, Mecánica, Circuitos), resalta siempre la seguridad preventiva (desconexión, aislamiento, EPP).\n` +
        `12. Evita repetir explicaciones genéricas o mensajes motivacionales vacíos que no aporten contenido real.\n` +
        `13. No hagas obligatoriamente una pregunta al final de cada respuesta. Hazlo solamente cuando ayude de manera natural a continuar el aprendizaje.\n` +
        `14. Comunícate en español de forma predeterminada, sin impedir que el estudiante practique inglés u otros idiomas si lo solicita.\n` +
        `15. Emplea formato Markdown limpio: títulos con ##, listas numeradas para pasos, negritas estratégicas y bloques de fórmulas legibles.`;

      // Build contextual prompt with subject, level and question details
      let contextPrompt = '';
      if (questionContext) {
        contextPrompt += `\n[CONTEXTO PEDAGÓGICO]\n`;
        if (questionContext.subject) contextPrompt += `Materia: ${questionContext.subject}\n`;
        contextPrompt += `Nivel Educativo: ${studentLevel}\n`;
        if (questionContext.sectionTitle) contextPrompt += `Área o Sección: ${questionContext.sectionTitle}\n`;
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
          contextPrompt += `Opción marcada por el estudiante: ${questionContext.studentSelectedOption}\n`;
        }
      } else {
        contextPrompt += `\n[CONTEXTO GENERAL]\nNivel Educativo: ${studentLevel}\n`;
      }

      // Format user prompt according to the 7 real pedagogical learning modes
      let actionDirective = '';
      switch (action) {
        case 'explain_step_by_step':
        case 'step_by_step':
          actionDirective = `MODO: Explicación paso a paso. Desglosa detalladamente el procedimiento en etapas comprensibles (Paso 1, Paso 2, Verificación).`;
          break;
        case 'solved_example':
        case 'similar_example':
        case 'similar':
          actionDirective = `MODO: Ejemplo resuelto. Modela el procedimiento resolviendo un caso similar con datos parecidos pero distintos para que el estudiante comprenda el método.`;
          break;
        case 'guided_practice':
          actionDirective = `MODO: Práctica guiada. Plantea un ejercicio paso a paso acompañando al estudiante en cada fase sin darle la respuesta de inmediato.`;
          break;
        case 'knowledge_check':
          actionDirective = `MODO: Evaluación de conocimientos. Formula una pregunta de autoevaluación o mini-reto para comprobar si el estudiante asimiló el concepto clave.`;
          break;
        case 'topic_summary':
          actionDirective = `MODO: Resumen del tema. Proporciona una síntesis clara, visual y estructurada con las ideas fundamentales, fórmulas y conceptos centrales.`;
          break;
        case 'clarify_error':
          actionDirective = `MODO: Aclaración de errores. Explica dónde suelen cometerse equivocaciones en este tipo de ejercicios, por qué ocurren y cómo prevenirlas.`;
          break;
        case 'deep_dive':
          actionDirective = `MODO: Profundización de contenido. Profundiza en el trasfondo teórico, aplicaciones prácticas o conexiones avanzadas de este tema.`;
          break;
        case 'hint':
          actionDirective = `MODO: Pista pedagógica. Ofrece una orientación sutil o pregunta reflexiva para que el estudiante razone por sí mismo sin desvelar la respuesta final.`;
          break;
        case 'concept':
          actionDirective = `MODO: Concepto clave. Explica la definición, fórmula o regla fundamental detrás de este contenido de manera memorable.`;
          break;
        default:
          actionDirective = `MODO: Consulta libre del estudiante.`;
          break;
      }

      // Assemble conversational history into context if provided
      let historyContext = '';
      if (Array.isArray(conversationHistory) && conversationHistory.length > 0) {
        historyContext = '\n[HISTORIAL DE CONVERSACIÓN RECIENTE]\n' + 
          conversationHistory.slice(-6).map((item: any) => {
            const role = item.role === 'user' ? 'Estudiante' : 'Tutor';
            return `${role}: ${item.text}`;
          }).join('\n') + '\n';
      }

      // Set a resilient timeout of 8.5s for Gemini API call so student never hangs
      const timeoutPromise = new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('API_TIMEOUT')), 8500)
      );

      const promptContent = `${contextPrompt}${historyContext}\n[INSTRUCCIÓN]\n${actionDirective}\nMensaje del estudiante: "${message || 'Por favor oriéntame con esta pregunta.'}"`;

      // Call Gemini 3.8 Flash model via modern @google/genai SDK with timeout protection
      const geminiPromise = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: promptContent,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.65,
        },
      });

      const response = await Promise.race([geminiPromise, timeoutPromise]);
      const replyText = response.text || 'He analizado tu duda pedagógica. Recuerda examinar los datos antes de concluir.';
      
      return res.json({
        reply: replyText,
        source: 'gemini-api',
        model: 'gemini-3.8-flash'
      });
    } catch (error: any) {
      console.warn('Fallback activated for /api/gemini/tutor:', error?.message || error);
      // If error or timeout occurs, fallback gracefully to pedagogical assistant logic
      const fallbackGuide = generateFallbackPedagogicalResponse(
        req.body?.message, 
        req.body?.action, 
        req.body?.questionContext,
        studentLevel
      );
      return res.json({
        reply: fallbackGuide,
        source: 'pedagogical-fallback',
        errorDetails: error?.message || 'Modo pedagógico autónomo activo'
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

    const rawPassword = req.body?.password || req.body?.accessKey || req.body?.pin;
    if (!rawPassword || typeof rawPassword !== 'string') {
      return res.status(400).json({ error: 'La clave de acceso es requerida.', code: 'MISSING_PASSWORD' });
    }
    const password = rawPassword;

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
    // Service Worker: Headers estrictos para garantizar detección inmediata de actualizaciones
    app.get('/sw.js', (_req: Request, res: Response) => {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      res.setHeader('Service-Worker-Allowed', '/');
      res.sendFile(path.resolve(__dirname, 'dist', 'sw.js'));
    });

    // Manifiesto PWA oficial con Content-Type canónico para Android y Chrome
    app.get('/manifest.webmanifest', (_req: Request, res: Response) => {
      res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
      res.setHeader('Cache-Control', 'no-cache, must-revalidate');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.sendFile(path.resolve(__dirname, 'dist', 'manifest.webmanifest'));
    });

    // Archivos estáticos con políticas de caché diferenciadas
    app.use(express.static(path.resolve(__dirname, 'dist'), {
      setHeaders: (res, filePath) => {
        if (filePath.includes(path.sep + 'assets' + path.sep) || filePath.includes('/assets/')) {
          // Recursos compilados con hash inmutable
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        } else if (filePath.endsWith('sw.js')) {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.setHeader('Service-Worker-Allowed', '/');
        } else if (filePath.endsWith('.html')) {
          res.setHeader('Cache-Control', 'no-cache, must-revalidate');
        } else if (filePath.endsWith('.webmanifest')) {
          res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache, must-revalidate');
        }
      }
    }));

    // Entrada SPA principal (HTML): no-cache para asegurar enlaces a bundles actualizados
    app.get('*', (_req: Request, res: Response) => {
      res.setHeader('Cache-Control', 'no-cache, must-revalidate');
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`🚀 Servidor ejecutándose en http://0.0.0.0:${PORT}`);
  });
}

// Helper: Generates didactic explanations if API key is in setup or offline
function generateFallbackPedagogicalResponse(message: string, action: string, context?: any, explicitLevel?: string): string {
  const qText = context?.questionText || (message ? `"${message}"` : 'la pregunta actual');
  const qNum = context?.number ? `#${context.number}` : '';
  const subject = context?.subject || 'la materia';
  const level = context?.level || explicitLevel || 'Bachillerato';

  switch (action) {
    case 'hint':
      return (
        `💡 **Pista Pedagógica para ${qNum} (${subject})**:\n\n` +
        `• Lee atentamente el enunciado: *"${qText}"*.\n` +
        `• Identifica cuáles son los datos conocidos y cuál es la incógnita principal.\n` +
        `• Descarta las opciones que no tengan sentido con el orden de magnitud esperado.\n\n` +
        `*Tómate un instante para razonar el primer paso antes de calcular.*`
      );

    case 'concept':
      return (
        `📘 **Concepto Clave (${subject} - Nivel ${level})**:\n\n` +
        `• El fundamento detrás de *"${qText}"* requiere aplicar la regla o ley central de la disciplina.\n` +
        `• En ciencias exactas, verifica la relación de proporcionalidad y las unidades de medida.\n` +
        `• En humanidades y lenguaje, analiza el significado contextual y las normas gramaticales.\n` +
        `• En electricidad o mecánica, recuerda ante todo las medidas de seguridad preventiva y especificaciones normativas.\n\n` +
        `*El dominio conceptual es la base de la resolución exitosa.*`
      );

    case 'solved_example':
    case 'similar_example':
    case 'similar':
      return (
        `🎯 **Ejemplo Resuelto Modelado**:\n\n` +
        `Para comprender el procedimiento de *"${qText}"*, analicemos este caso análogo:\n` +
        `1. **Planteamiento**: Supongamos un escenario similar con variables simplificadas.\n` +
        `2. **Resolución ordenada**: Aplicamos la fórmula o criterio paso por paso.\n` +
        `3. **Resultado y análisis**: Comprobamos por qué la solución es coherente.\n\n` +
        `*Ahora traslada exactamente este mismo esquema mental a tu pregunta original.*`
      );

    case 'guided_practice':
      return (
        `🛠️ **Práctica Guiada Paso a Paso**:\n\n` +
        `Vamos a resolverlo juntos de forma colaborativa:\n` +
        `1. Primero: ¿cuál es el dato o condición que determina el problema?\n` +
        `2. Segundo: ¿qué relación o fórmula matemática/lógica vincula esos datos?\n` +
        `3. Tercero: sustituye los valores con calma y revisa el signo final.\n\n` +
        `*¿Cuál de estos tres pasos te genera mayor duda para profundizar en él?*`
      );

    case 'knowledge_check':
      return (
        `🧠 **Evaluación Rápida de Conocimientos (Mini-Reto)**:\n\n` +
        `Para verificar si dominas este contenido de ${subject}:\n` +
        `• **Pregunta de comprobación**: Si cambiáramos uno de los parámetros del enunciado *"${qText.substring(0, 80)}..."*, ¿el resultado aumentaría, disminuiría o se mantendría constante?\n\n` +
        `*Justificar el porqué de esta variación confirma tu aprendizaje real.*`
      );

    case 'topic_summary':
      return (
        `📋 **Resumen Síntesis del Tema**:\n\n` +
        `• **Tema**: Fundamentos de ${subject} (${level}).\n` +
        `• **Premisa clave**: Relación directa entre las condiciones del enunciado y la respuesta correcta.\n` +
        `• **Puntos de atención**: Cuidar unidades de medida, lectura crítica de distractores y comprobación.\n\n` +
        `*Tener clara la estructura global te permite resolver cualquier variante de esta prueba.*`
      );

    case 'clarify_error':
      return (
        `🔍 **Aclaración de Errores Comunes y Prevención**:\n\n` +
        `En preguntas como *"${qText.substring(0, 70)}..."*, los errores más frecuentes suelen deberse a:\n` +
        `1. **Confundir conceptos afines**: Tomar una variable por otra similar.\n` +
        `2. **Omitir una operación intermedia**: Calcular rápidamente sin verificar los pasos previos.\n` +
        `3. **Caer en distractores engañosos**: Opciones diseñadas con fallos de signo o cálculo parcial.\n\n` +
        `*Revisar conscientemente estos tres puntos te protegerá de equivocaciones.*`
      );

    case 'deep_dive':
      return (
        `🚀 **Profundización y Aplicación Avanzada**:\n\n` +
        `Este concepto de ${subject} no se limita a esta evaluación escolar o técnica:\n` +
        `• Posee aplicaciones directas en el campo profesional, desarrollo tecnológico e investigación.\n` +
        `• Comprender su principio físico, lógico o matemático te capacita para resolver problemas no estructurados de mayor escala.\n\n` +
        `*Si deseas, podemos explorar cómo se formaliza matemáticamente o su uso en la industria.*`
      );

    case 'explain_step_by_step':
    case 'step_by_step':
    default:
      return (
        `🤖 **Explicación Paso a Paso (${qNum} • ${subject})**:\n\n` +
        `1. **Paso 1 - Comprensión del problema**: Analizamos detenidamente: *"${qText}"*.\n` +
        `2. **Paso 2 - Identificación del método**: Aplicamos el principio pedagógico adecuado para el nivel ${level}.\n` +
        `3. **Paso 3 - Verificación de opciones**: Contrastamos cada alternativa hasta validar la solución correcta.\n\n` +
        `"${message ? message : 'Continúa avanzando con concentración, cada ejercicio consolida tu aprendizaje.'}"`
      );
  }
}

startServer();
