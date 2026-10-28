# ESTADO TÉCNICO Y PLAN DE EXPANSIÓN: NEXORA (6.000 REACTIVOS)

> **Estado Global del Proyecto:**  
> • **Motor Inteligente de Preguntas Aleatorias y Antirrepetición:** OPERATIVO AL 100% (18/18 pruebas superadas)  
> • **Motor Inteligente de Distribución de Respuestas A/B/C/D:** OPERATIVO AL 100% (balance exacto ~25% sin más de 2 letras consecutivas)  
> • **Optimización de Rendimiento (Alternativa B):** IMPLEMENTADA (Lazy loading selectivo, bundle inicial reducido de 5.8 MB a 1.6 MB)  
> • **Módulo Modo Estudio:** IMPLEMENTADO (Biblioteca independiente de lecciones estructuradas, autoevaluación rápida y Tutor IA)  
> • **Total Actual de Reactivos en la Plataforma:** **6.000 reactivos oficiales** (100% verificados sin duplicados)

---

## 1. Motor Inteligente de Preguntas y Antirrepetición

### Arquitectura de Selección (`src/services/questionEngine.ts`)
1. **Separación Real Práctica / Examen:**  
   - Ambas modalidades comparten el registro de reactivos utilizados. Una pregunta resuelta en Práctica se excluye automáticamente de la siguiente evaluación formal, y viceversa.
   - La exclusión opera por materia y nivel educativo.
2. **Aleatoriedad Uniforme sin Reemplazo:**  
   - Emplea barajado Fisher-Yates de alta dispersión.
   - Cero preguntas repetidas dentro de una misma prueba.
3. **Normalización Semántica de Enunciados:**  
   - Función `normalizeStatement` que elimina diacríticos, puntuación y espacios redundantes para impedir variaciones superficiales.
4. **Gestión de Agotamiento de Banco y Ciclos:**  
   - Prioriza siempre las preguntas no vistas. Al agotarse las preguntas inéditas, reutiliza preguntas ya vistas para completar la cantidad solicitada informando al usuario en la interfaz.
   - Botón interactivo *"Reiniciar variedad"* disponible en el configurador de exámenes para avanzar voluntariamente al siguiente ciclo de estudio.
5. **Persistencia y Protección de Sesiones Activas:**  
   - Almacena el historial en `localStorage` con adaptador universal (compatible con Node.js y pruebas automatizadas).
   - Bloquea abandonos involuntarios en evaluaciones formales y persiste el banco activo entre recargas de página.

---

## 2. Inventario Oficial de Reactivos por Materia (Auditoría Real)

| Materia | Categoría | Total Reactivos | Básico | Intermedio | Bachillerato | Técnico | Universitario | Estado |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Matemáticas** | Troncal | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **Lengua y Literatura** | Troncal | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **Razonamiento Lógico** | Troncal | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **Ciencias Naturales** | Ciencias | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **Física** | Ciencias | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **Química** | Ciencias | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **Biología** | Ciencias | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **Inglés** | Humanidades | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **Estudios Sociales** | Humanidades | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **Electricidad** | Técnicas | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **Informática** | Técnicas | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **Mecánica Automotriz** | Técnicas | **500** | 100 | 100 | 100 | 100 | 100 | ✅ 100% Verificado |
| **TOTAL PLATAFORMA** | — | **6.000** | **1.200** | **1.200** | **1.200** | **1.200** | **1.200** | **Meta 6.000 Alcanzada** |

---

## 3. Resumen de Implementación en Fase C

1. **Estudios Sociales (500 reactivos):**
   - Verificado banco de 500 preguntas (100 por nivel).
   - Normalizado de valores de dificultad históricos y corrección de sintaxis de propiedades en TypeScript.
   - Cobertura: Geografía del Ecuador y del mundo, civilizaciones prehispánicas, historia republicana, desarrollo territorial, historiografía crítica y geopolítica.

2. **Electricidad (500 reactivos):**
   - Verificado banco de 500 preguntas (100 por nivel).
   - Normalizado de valores de dificultad históricos (`Fácil`, `Intermedio`, `Desafiante`) en cumplimiento con `types.ts`.
   - Cobertura: Fundamentos de carga/resistencia, ley de Ohm, leyes de Kirchhoff, máquinas eléctricas, cuadros de distribución, control por contactores, análisis de mallas, potencia compleja y sistemas trifásicos.

3. **Informática (500 reactivos):**
   - Expandido desde 100 hasta 500 reactivos (100 por nivel) mediante arquitectura modular (`src/data/questions/informatica/`).
   - Mantenimiento íntegro de las 100 preguntas históricas (`inf-bas-01..20`, etc.).
   - Incorporación de 400 nuevos reactivos de alto rigor técnico: hardware/arquitectura von Neumann, algoritmos y diagramas de flujo, estructuras de datos y SQL relacional, DevOps/Git/APIs REST/Docker, complejidad computacional $O(n)$, concurrencia, sistemas distribuidos y criptografía.

4. **Mecánica Automotriz (500 reactivos):**
   - Expandido desde 100 hasta 500 reactivos (100 por nivel) mediante arquitectura modular (`src/data/questions/mecanica/`).
   - Mantenimiento íntegro de las 100 preguntas históricas (`mec-bas-01..20`, etc.).
   - Incorporación de 400 nuevos reactivos: componentes de motores Otto y Diésel, ciclos termodinámicos, inyección electrónica EFI/Common Rail, sistemas de frenos ABS/ESP y tren rodante, diagnóstico con osciloscopio y escáner OBD-II, redes CAN-bus, y tren motriz de vehículos híbridos/eléctricos de alta tensión con protocolos de seguridad.

5. **Auditoría Global:**
   - 0 identificadores duplicados en toda la plataforma.
   - Todas las opciones no vacías (longitud 4) y `correctIndex` entre 0 y 3.
   - Total exacto de 6.000 reactivos educativos activos.

---

## 4. Modo Estudio: Biblioteca Pedagógica Autónoma y Expansión IA

1. **Arquitectura y Modelos (`src/types.ts` & `src/types/study.ts`):**
   - `StudyLesson`: Modelo integral con objetivos de aprendizaje, prerrequisitos, desarrollo conceptual, cuadros de fórmulas, ejemplos paso a paso, trampas/errores comunes, aplicaciones reales, glosario y autoevaluación interactiva.
   - `StudyLessonProgress`: Persistencia en `localStorage` (`nexora_study_progress_v1`) de última lectura, lecciones completadas, favoritos y puntuaciones en mini-quizzes.

2. **Base de Lecciones Inicial (`src/data/study/studyLessonsData.ts`):**
   - Lecciones ricas y pedagógicamente rigurosas en Matemáticas, Lengua, Razonamiento, Física, Química, Electricidad e Informática, abarcando todos los niveles educativos (`Básico`, `Intermedio`, `Bachillerato`, `Técnico`, `Universitario`).
   - 100% funcionales sin conexión a internet ni dependencia forzada de APIs externas.

3. **Componente de Interfaz (`src/components/StudyModeView.tsx`):**
   - Catálogo dinámico con filtrado por materia (las 12 asignaturas oficiales), nivel educativo, búsqueda textual libre y favoritos.
   - Tarjeta "Continuar Lectura" para reanudar de inmediato la lección activa.
   - Lector inmersivo con sintetizador de voz (TTS), caja de fórmulas, acordeones de ejemplos y autoevaluación rápida con retroalimentación inmediata.
   - Integración contextual con el Tutor IA (`/api/gemini/tutor`) mediante aceleradores didácticos («Explícamelo más sencillo», «¿Por qué funciona?», «Dame otro ejemplo», «Muéstrame los pasos», «¿Qué errores debo evitar?», «Relaciónalo con la vida real»).

4. **Integración con Navegación y Práctica (`Navbar`, `BottomNavBar`, `ExamView`, `App.tsx`):**
   - Pestaña "Modo Estudio" integrada en la barra superior (escritorio), en el menú lateral y en el dock móvil ("Más").
   - Enlace contextual discreto desde `ExamView.tsx`: los estudiantes pueden pulsar «Estudiar este tema» desde cualquier reactivo en Práctica y regresar con un clic a su evaluación sin perder tiempo ni respuestas.

5. **Rendimiento y Code Splitting:**
   - Carga diferida (`React.lazy` + `Suspense` + `LazyErrorBoundary`). Chunk independiente de sólo 49.5 kB (9.87 kB gzip).
   - Cero impacto en el tiempo de carga del paquete JavaScript principal.
