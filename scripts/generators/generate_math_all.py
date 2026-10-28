#!/usr/bin/env python3
import json
import os
import sys

# Importar datos de cada nivel
from math_intermedio_data import intermedio_new_raw
from math_bachillerato_data import bachillerato_new_raw
from math_tecnico_data import tecnico_new_raw
from math_universitario_data import universitario_new_raw

# Leer existentes
with open('./src/data/questions/matematicas/existing.json', 'r', encoding='utf-8') as f:
    existing_math = json.load(f)

# Leer basico_new_raw desde el archivo generado previamente
with open('./scripts/generators/generate_math_dataset.py', 'r', encoding='utf-8') as f:
    code = f.read()

# Extraer basico_new_raw ejecutándolo en un namespace seguro
ns = {}
exec(compile(code, './scripts/generators/generate_math_dataset.py', 'exec'), ns)
basico_new_raw = ns['basico_new_raw']

levels_data = [
    ('Básico', 'mat-bas', 'basico', 'MATEMATICAS_BASICO', basico_new_raw),
    ('Intermedio', 'mat-int', 'intermedio', 'MATEMATICAS_INTERMEDIO', intermedio_new_raw),
    ('Bachillerato', 'mat-bac', 'bachillerato', 'MATEMATICAS_BACHILLERATO', bachillerato_new_raw),
    ('Técnico', 'mat-tec', 'tecnico', 'MATEMATICAS_TECNICO', tecnico_new_raw),
    ('Universitario', 'mat-uni', 'universitario', 'MATEMATICAS_UNIVERSITARIO', universitario_new_raw),
]

all_math_questions = []
all_ids = set()
all_texts = set()

os.makedirs('./src/data/questions/matematicas', exist_ok=True)

for level_name, prefix, file_slug, var_name, new_list in levels_data:
    print(f"Procesando {level_name}...")
    assert len(new_list) == 80, f"Error en {level_name}: se esperaban 80 nuevas, hay {len(new_list)}"
    
    combined = []
    # 1. Conservar intactos los 20 existentes
    exist = existing_math[level_name]
    assert len(exist) == 20, f"Error: esperados 20 existentes en {level_name}, hay {len(exist)}"
    for q in exist:
        if q['id'] in all_ids:
            raise ValueError(f"ID duplicado en existentes: {q['id']}")
        norm_t = q['text'].strip().lower()
        if norm_t in all_texts:
            raise ValueError(f"Texto duplicado en existentes: {q['text']}")
        all_ids.add(q['id'])
        all_texts.add(norm_t)
        combined.append(q)

    # 2. Agregar los 80 nuevos
    for idx, item in enumerate(new_list, start=21):
        text, opts, c_idx, expl, skill, diff, top, sub = item
        qid = f"{prefix}-{idx}"
        if qid in all_ids:
            raise ValueError(f"ID duplicado: {qid}")
        norm_t = text.strip().lower()
        if norm_t in all_texts:
            raise ValueError(f"Texto duplicado: {text}")
        all_ids.add(qid)
        all_texts.add(norm_t)

        q_obj = {
            "id": qid,
            "sectionId": 1,
            "number": idx,
            "text": text,
            "options": opts,
            "correctIndex": c_idx,
            "explanation": expl,
            "skill": skill,
            "difficulty": diff,
            "educationalLevel": level_name,
            "topic": top,
            "subtopic": sub
        }
        combined.append(q_obj)

    assert len(combined) == 100, f"Error: {level_name} debe tener 100, tiene {len(combined)}"
    
    # Escribir archivo de nivel
    level_file_path = f"./src/data/questions/matematicas/{file_slug}.ts"
    with open(level_file_path, 'w', encoding='utf-8') as f:
        f.write("import { Question } from '../../../types';\n\n")
        f.write(f"/**\n * BANCO OFICIAL DE MATEMÁTICAS - NIVEL {level_name.upper()} (100 Reactivos)\n */\n")
        f.write(f"export const {var_name}: Question[] = " + json.dumps(combined, indent=2, ensure_ascii=False) + ";\n")
    
    print(f"✓ Guardado: {level_file_path} (100 preguntas)")
    all_math_questions.extend(combined)

assert len(all_math_questions) == 500, f"Total esperado 500, hay {len(all_math_questions)}"

# Escribir index.ts
index_code = """import { Question } from '../../../types';
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
"""
with open('./src/data/questions/matematicas/index.ts', 'w', encoding='utf-8') as f:
    f.write(index_code)

# Escribir src/data/questions/matematicas.ts para reexportar
with open('./src/data/questions/matematicas.ts', 'w', encoding='utf-8') as f:
    f.write("export { QUESTIONS_MATEMATICAS } from './matematicas/index';\n")

print("\n=======================================================")
print(f"ÉXITO TOTAL MATEMÁTICAS: {len(all_math_questions)} preguntas generadas.")
print(f"IDs únicos: {len(all_ids)} | Textos únicos: {len(all_texts)}")
print("=======================================================\n")
