#!/usr/bin/env python3
import json
import os

with open('./src/data/questions/lengua/existing.json', 'r', encoding='utf-8') as f:
    existing_lengua = json.load(f)

# Helper para armar pregunta
def make_q(qid, num, text, options, c_idx, explanation, skill, diff, level, topic, subtopic):
    return {
        "id": qid,
        "sectionId": 2,
        "number": num,
        "text": text,
        "options": options,
        "correctIndex": c_idx,
        "explanation": explanation,
        "skill": skill,
        "difficulty": diff,
        "educationalLevel": level,
        "topic": topic,
        "subtopic": subtopic
    }
