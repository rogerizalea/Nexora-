#!/usr/bin/env python3
import json
import os
import sys

# Importar datos de cada nivel
from razonamiento_basico_data import razonamiento_basico_raw
from razonamiento_intermedio_data import razonamiento_intermedio_raw
from razonamiento_bachillerato_data import razonamiento_bachillerato_raw
from razonamiento_tecnico_data import razonamiento_tecnico_raw
from razonamiento_universitario_data import razonamiento_universitario_raw

from add_razonamiento_20 import (
    intermedio_extra20,
    bachillerato_extra20,
    tecnico_extra20,
    universitario_extra20
)

# Leer existentes
with open('./src/data/questions/razonamiento/existing.json', 'r', encoding='utf-8') as f:
    existing_raz = json.load(f)

levels_data = [
    ('Básico', 'raz-bas', 'basico', 'RAZONAMIENTO_BASICO', razonamiento_basico_raw),
    ('Intermedio', 'raz-int', 'intermedio', 'RAZONAMIENTO_INTERMEDIO', razonamiento_intermedio_raw + intermedio_extra20),
    ('Bachillerato', 'raz-bac', 'bachillerato', 'RAZONAMIENTO_BACHILLERATO', razonamiento_bachillerato_raw + bachillerato_extra20),
    ('Técnico', 'raz-tec', 'tecnico', 'RAZONAMIENTO_TECNICO', razonamiento_tecnico_raw + tecnico_extra20),
    ('Universitario', 'raz-uni', 'universitario', 'RAZONAMIENTO_UNIVERSITARIO', razonamiento_universitario_raw + universitario_extra20),
]

all_raz_questions = []
all_ids = set()
all_texts = set()

os.makedirs('./src/data/questions/razonamiento', exist_ok=True)

for level_name, prefix, file_slug, var_name, new_list in levels_data:
    print(f"Procesando {level_name}...")
    assert len(new_list) == 80, f"Error en {level_name}: se esperaban 80 nuevas, hay {len(new_list)}"
    
    combined = []
    # 1. Conservar intactos los 20 existentes
    exist = existing_raz[level_name]
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
            "sectionId": 3,
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
    level_file_path = f"./src/data/questions/razonamiento/{file_slug}.ts"
    with open(level_file_path, 'w', encoding='utf-8') as f:
        f.write("import { Question } from '../../../types';\n\n")
        f.write(f"/**\n * BANCO OFICIAL DE RAZONAMIENTO LÓGICO Y ABSTRACTO - NIVEL {level_name.upper()} (100 Reactivos)\n */\n")
        f.write(f"export const {var_name}: Question[] = " + json.dumps(combined, indent=2, ensure_ascii=False) + ";\n")
    
    print(f"✓ Guardado: {level_file_path} (100 preguntas)")
    all_raz_questions.extend(combined)

assert len(all_raz_questions) == 500, f"Total esperado 500, hay {len(all_raz_questions)}"

# Escribir index.ts
index_code = """import { Question } from '../../../types';
import { RAZONAMIENTO_BASICO } from './basico';
import { RAZONAMIENTO_INTERMEDIO } from './intermedio';
import { RAZONAMIENTO_BACHILLERATO } from './bachillerato';
import { RAZONAMIENTO_TECNICO } from './tecnico';
import { RAZONAMIENTO_UNIVERSITARIO } from './universitario';

export const QUESTIONS_RAZONAMIENTO: Question[] = [
  ...RAZONAMIENTO_BASICO,
  ...RAZONAMIENTO_INTERMEDIO,
  ...RAZONAMIENTO_BACHILLERATO,
  ...RAZONAMIENTO_TECNICO,
  ...RAZONAMIENTO_UNIVERSITARIO
];
"""
with open('./src/data/questions/razonamiento/index.ts', 'w', encoding='utf-8') as f:
    f.write(index_code)

# Escribir src/data/questions/razonamiento.ts para reexportar
with open('./src/data/questions/razonamiento.ts', 'w', encoding='utf-8') as f:
    f.write("export { QUESTIONS_RAZONAMIENTO } from './razonamiento/index';\n")

print("\n=======================================================")
print(f"ÉXITO TOTAL RAZONAMIENTO LÓGICO Y ABSTRACTO: {len(all_raz_questions)} preguntas generadas.")
print(f"IDs únicos: {len(all_ids)} | Textos únicos: {len(all_texts)}")
print("=======================================================\n")
