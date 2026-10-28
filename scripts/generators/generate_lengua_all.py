#!/usr/bin/env python3
import json
import os
import sys

# Importar datos de cada nivel
from lengua_basico_data import lengua_basico_raw
from lengua_intermedio_data import lengua_intermedio_raw
from lengua_bachillerato_data import lengua_bachillerato_raw
from lengua_tecnico_data import lengua_tecnico_raw
from lengua_universitario_data import lengua_universitario_raw

from add_lengua_remaining import (
    basico_additional,
    intermedio_additional,
    bachillerato_additional,
    tecnico_additional,
    universitario_additional
)

# Leer existentes
with open('./src/data/questions/lengua/existing.json', 'r', encoding='utf-8') as f:
    existing_lengua = json.load(f)

levels_data = [
    ('Básico', 'len-bas', 'basico', 'LENGUA_BASICO', lengua_basico_raw + basico_additional),
    ('Intermedio', 'len-int', 'intermedio', 'LENGUA_INTERMEDIO', lengua_intermedio_raw + intermedio_additional),
    ('Bachillerato', 'len-bac', 'bachillerato', 'LENGUA_BACHILLERATO', lengua_bachillerato_raw + bachillerato_additional),
    ('Técnico', 'len-tec', 'tecnico', 'LENGUA_TECNICO', lengua_tecnico_raw + tecnico_additional),
    ('Universitario', 'len-uni', 'universitario', 'LENGUA_UNIVERSITARIO', lengua_universitario_raw + universitario_additional),
]

all_lengua_questions = []
all_ids = set()
all_texts = set()

os.makedirs('./src/data/questions/lengua', exist_ok=True)

for level_name, prefix, file_slug, var_name, new_list in levels_data:
    print(f"Procesando {level_name}...")
    assert len(new_list) == 80, f"Error en {level_name}: se esperaban 80 nuevas, hay {len(new_list)}"
    
    combined = []
    # 1. Conservar intactos los 20 existentes
    exist = existing_lengua[level_name]
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
        if diff == "Difícil":
            diff = "Desafiante"
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
            "sectionId": 2,
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
    level_file_path = f"./src/data/questions/lengua/{file_slug}.ts"
    with open(level_file_path, 'w', encoding='utf-8') as f:
        f.write("import { Question } from '../../../types';\n\n")
        f.write(f"/**\n * BANCO OFICIAL DE LENGUA Y LITERATURA - NIVEL {level_name.upper()} (100 Reactivos)\n */\n")
        f.write(f"export const {var_name}: Question[] = " + json.dumps(combined, indent=2, ensure_ascii=False) + ";\n")
    
    print(f"✓ Guardado: {level_file_path} (100 preguntas)")
    all_lengua_questions.extend(combined)

assert len(all_lengua_questions) == 500, f"Total esperado 500, hay {len(all_lengua_questions)}"

# Escribir index.ts
index_code = """import { Question } from '../../../types';
import { LENGUA_BASICO } from './basico';
import { LENGUA_INTERMEDIO } from './intermedio';
import { LENGUA_BACHILLERATO } from './bachillerato';
import { LENGUA_TECNICO } from './tecnico';
import { LENGUA_UNIVERSITARIO } from './universitario';

export const QUESTIONS_LENGUA: Question[] = [
  ...LENGUA_BASICO,
  ...LENGUA_INTERMEDIO,
  ...LENGUA_BACHILLERATO,
  ...LENGUA_TECNICO,
  ...LENGUA_UNIVERSITARIO
];
"""
with open('./src/data/questions/lengua/index.ts', 'w', encoding='utf-8') as f:
    f.write(index_code)

# Escribir src/data/questions/lengua.ts para reexportar
with open('./src/data/questions/lengua.ts', 'w', encoding='utf-8') as f:
    f.write("export { QUESTIONS_LENGUA } from './lengua/index';\n")

print("\n=======================================================")
print(f"ÉXITO TOTAL LENGUA Y LITERATURA: {len(all_lengua_questions)} preguntas generadas.")
print(f"IDs únicos: {len(all_ids)} | Textos únicos: {len(all_texts)}")
print("=======================================================\n")
