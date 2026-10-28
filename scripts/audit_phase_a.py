#!/usr/bin/env python3
import json
import os
import sys

def audit():
    print("=" * 70)
    print("NEXORA - AUDITORÍA TÉCNICA Y PEDAGÓGICA: FASE A (1.500 PREGUNTAS)")
    print("=" * 70)

    # 1. Auditar Matemáticas
    mat_levels = ['basico', 'intermedio', 'bachillerato', 'tecnico', 'universitario']
    mat_questions = []
    for l in mat_levels:
        with open(f'./src/data/questions/matematicas/{l}.ts', 'r', encoding='utf-8') as f:
            content = f.read()
            start = content.find('= [') + 2
            end = content.rfind(']') + 1
            qs = json.loads(content[start:end])
            assert len(qs) == 100, f"Error en matemáticas {l}: esperado 100, hay {len(qs)}"
            mat_questions.extend(qs)
    print(f"✓ Matemáticas: {len(mat_questions)} reactivos cargados.")

    # 2. Auditar Lengua
    len_levels = ['basico', 'intermedio', 'bachillerato', 'tecnico', 'universitario']
    len_questions = []
    for l in len_levels:
        with open(f'./src/data/questions/lengua/{l}.ts', 'r', encoding='utf-8') as f:
            content = f.read()
            start = content.find('= [') + 2
            end = content.rfind(']') + 1
            qs = json.loads(content[start:end])
            assert len(qs) == 100, f"Error en lengua {l}: esperado 100, hay {len(qs)}"
            len_questions.extend(qs)
    print(f"✓ Lengua y Literatura: {len(len_questions)} reactivos cargados.")

    # 3. Auditar Razonamiento
    raz_levels = ['basico', 'intermedio', 'bachillerato', 'tecnico', 'universitario']
    raz_questions = []
    for l in raz_levels:
        with open(f'./src/data/questions/razonamiento/{l}.ts', 'r', encoding='utf-8') as f:
            content = f.read()
            start = content.find('= [') + 2
            end = content.rfind(']') + 1
            qs = json.loads(content[start:end])
            assert len(qs) == 100, f"Error en razonamiento {l}: esperado 100, hay {len(qs)}"
            raz_questions.extend(qs)
    print(f"✓ Razonamiento Lógico y Abstracto: {len(raz_questions)} reactivos cargados.")

    subjects_phase_a = [
        ("Matemáticas", mat_questions, './src/data/questions/matematicas/existing.json', 'mat'),
        ("Lengua y Literatura", len_questions, './src/data/questions/lengua/existing.json', 'len'),
        ("Razonamiento Lógico y Abstracto", raz_questions, './src/data/questions/razonamiento/existing.json', 'raz')
    ]

    all_global_ids = set()
    level_names = ['Básico', 'Intermedio', 'Bachillerato', 'Técnico', 'Universitario']

    for name, questions, existing_path, prefix in subjects_phase_a:
        print(f"\n--- Verificando {name} ---")
        assert len(questions) == 500, f"Error: {name} no tiene 500 reactivos"
        
        # Cargar existentes
        with open(existing_path, 'r', encoding='utf-8') as f:
            exist_dict = json.load(f)
        
        # Verificar conservación estricta de las 20 existentes por nivel
        for lvl in level_names:
            exist_list = exist_dict[lvl]
            assert len(exist_list) == 20, f"Error en existentes de {lvl}: se esperaban 20"
            for orig in exist_list:
                found = next((q for q in questions if q['id'] == orig['id']), None)
                assert found is not None, f"Pregunta existente {orig['id']} PERDIDA en {name}"
                assert found['text'] == orig['text'], f"Texto alterado en pregunta existente {orig['id']}"
                assert found['options'] == orig['options'], f"Opciones alteradas en {orig['id']}"
                assert found['correctIndex'] == orig['correctIndex'], f"Índice alterado en {orig['id']}"
        print(f"  ✓ 100% de las 100 preguntas existentes conservadas intactas con IDs idénticos.")

        # Verificar distribución por niveles
        counts_by_level = {lvl: 0 for lvl in level_names}
        for q in questions:
            lvl = q['educationalLevel']
            assert lvl in counts_by_level, f"Nivel inválido: {lvl}"
            counts_by_level[lvl] += 1
        
        for lvl, cnt in counts_by_level.items():
            assert cnt == 100, f"Distribución rota en {name} - {lvl}: {cnt} != 100"
            print(f"  ✓ Nivel {lvl}: exactamente {cnt} preguntas.")

        # Verificar unicidad de IDs y textos dentro de la materia
        subject_ids = set()
        subject_texts = set()
        for q in questions:
            qid = q['id']
            assert qid not in subject_ids, f"ID duplicado: {qid}"
            assert qid not in all_global_ids, f"ID globalmente duplicado: {qid}"
            subject_ids.add(qid)
            all_global_ids.add(qid)

            norm_text = q['text'].strip().lower()
            assert norm_text not in subject_texts, f"Texto duplicado en {name}: {q['text'][:50]}"
            subject_texts.add(norm_text)

            # Verificar calidad estructural
            assert len(q['text']) > 5, f"Texto demasiado corto en {qid}"
            assert len(q['options']) == 4, f"Opciones != 4 en {qid}"
            assert all(len(opt) > 0 for opt in q['options']), f"Opción vacía en {qid}"
            assert 0 <= q['correctIndex'] <= 3, f"Índice correcto inválido en {qid}"
            assert len(q['explanation']) > 10, f"Explicación insuficiente en {qid}"
            assert q['difficulty'] in ['Fácil', 'Intermedio', 'Desafiante'], f"Dificultad inválida en {qid}: {q['difficulty']}"
            assert len(q['skill']) > 0, f"Habilidad vacía en {qid}"
        
        print(f"  ✓ 500 IDs únicos y 500 textos únicos verificados.")
        print(f"  ✓ 100% de reactivos con 4 opciones válidas, índice [0-3] y explicación pedagógica.")

    # Verificar resto de materias intactas
    other_subjects = [
        'biologia', 'ciencias_naturales', 'electricidad', 'fisica',
        'informatica', 'ingles', 'mecanica', 'quimica', 'sociales'
    ]
    print("\n--- Verificando estado de las otras 9 materias (deben permanecer en 100 reactivos) ---")
    total_repo_questions = 1500
    for subj in other_subjects:
        with open(f'./src/data/questions/{subj}.ts', 'r', encoding='utf-8') as f:
            code = f.read()
            count = code.count('"id":')
            assert count == 100, f"Materia alterada indebidamente: {subj} tiene {count} reactivos (esperado 100)"
            total_repo_questions += count
            print(f"  ✓ {subj}: intacta con {count} reactivos.")

    print(f"\n=======================================================")
    print(f"TOTAL GENERAL EN NEXORA: {total_repo_questions} PREGUNTAS")
    print(f"Fase A: 1.500 reactivos (Matemáticas: 500, Lengua: 500, Razonamiento: 500)")
    print(f"Otras materias: 900 reactivos (9 materias × 100 reactivos)")
    print(f"TOTAL FASE A CUMPLIDO RIGUROSAMENTE CON CERO ERRORES")
    print(f"=======================================================\n")

if __name__ == '__main__':
    audit()
