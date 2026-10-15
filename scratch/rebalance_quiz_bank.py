# -*- coding: utf-8 -*-
"""Rebalance answer options across all chapters and sets so correct answers are uniformly distributed across A, B, C, D."""
import json
import random
import os

random.seed(2026)

set_quotas = [
    [3, 2, 2, 3],
    [2, 3, 3, 2],
    [3, 2, 3, 2],
    [2, 3, 2, 3],
    [3, 3, 2, 2],
    [2, 2, 3, 3],
    [3, 2, 2, 3],
    [2, 3, 3, 2],
    [2, 3, 2, 3],
    [3, 2, 3, 2],
]

quotas = [
    [3, 2, 2, 3],
    [3, 2, 2, 3],
    [3, 3, 2, 2],
    [3, 3, 2, 2],
    [3, 3, 2, 2],
    [2, 3, 3, 2],
    [2, 3, 3, 2],
    [2, 2, 3, 3],
    [2, 2, 3, 3],
    [2, 2, 3, 3],
]
types_order = ['theory', 'error', 'output', 'scenario']
lvl_weight = {'hard': 3, 'medium': 2, 'easy': 1}

def reassign_question_answer(q, target_pos):
    orig_options = q['options']
    orig_ans_idx = q['answer']
    correct_option_text = orig_options[orig_ans_idx]
    distractors = [opt for i, opt in enumerate(orig_options) if i != orig_ans_idx]
    random.shuffle(distractors)
    
    new_options = [None] * 4
    new_options[target_pos] = correct_option_text
    
    d_i = 0
    for i in range(4):
        if new_options[i] is None:
            new_options[i] = distractors[d_i]
            d_i += 1
            
    assert set(new_options) == set(orig_options)
    assert new_options[target_pos] == correct_option_text
    
    q_copy = dict(q)
    q_copy['options'] = new_options
    q_copy['answer'] = target_pos
    return q_copy

final_bank = {}

for ch in range(10):
    with open(f'scratch/ch{ch}.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    sets = [[] for _ in range(10)]
    for t_idx, t in enumerate(types_order):
        type_qs = [q for q in data if q['type'] == t]
        type_qs.sort(key=lambda q: lvl_weight[q['level']], reverse=True)
        needed_per_set = [quotas[s_idx][t_idx] for s_idx in range(10)]
        while any(needed_per_set):
            for s_idx in range(10):
                if needed_per_set[s_idx] > 0 and type_qs:
                    sets[s_idx].append(type_qs.pop(0))
                    needed_per_set[s_idx] -= 1
                    
    ordered_ch_qs = []
    for s_idx, s in enumerate(sets):
        by_t = {t: [q for q in s if q['type'] == t] for t in types_order}
        interleaved = []
        max_t = max(len(v) for v in by_t.values())
        for r in range(max_t):
            for t in types_order:
                if r < len(by_t[t]):
                    interleaved.append(by_t[t][r])
                    
        targets = [0]*set_quotas[s_idx][0] + [1]*set_quotas[s_idx][1] + [2]*set_quotas[s_idx][2] + [3]*set_quotas[s_idx][3]
        random.shuffle(targets)
        for q_idx in range(10):
            q_reassigned = reassign_question_answer(interleaved[q_idx], targets[q_idx])
            ordered_ch_qs.append(q_reassigned)
            
    assert len(ordered_ch_qs) == 100
    final_bank[str(ch)] = ordered_ch_qs
    
    # Save back to scratch/ch{ch}.json
    with open(f'scratch/ch{ch}.json', 'w', encoding='utf-8') as f:
        json.dump(ordered_ch_qs, f, ensure_ascii=False, indent=2)

with open('quiz_bank.js', 'w', encoding='utf-8') as f:
    f.write('/* WIX1002 JavaTarik - Complete 1,000 Questions Quiz Bank (100 Questions per Chapter) */\n')
    f.write('var QUIZ_BANK = ')
    json.dump(final_bank, f, ensure_ascii=False, indent=2)
    f.write(';\n\n')
    f.write('if (typeof window !== "undefined") { window.QUIZ_BANK = QUIZ_BANK; }\n\n')
    f.write('''var QUIZ_BANK_META = {
  totalQuestions: 1000,
  chapters: 10,
  questionsPerChapter: 100,
  setsPerChapter: 10,
  questionsPerSet: 10,
  getSet: function(chapterId, setIndex) {
    var key = String(chapterId);
    var list = (typeof QUIZ_BANK !== "undefined" && QUIZ_BANK[key]) || [];
    if (!list.length) return [];
    var idx = Math.abs(setIndex % 10);
    return list.slice(idx * 10, idx * 10 + 10);
  }
};
if (typeof window !== "undefined") { window.QUIZ_BANK_META = QUIZ_BANK_META; }
if (typeof module !== "undefined" && module.exports) { module.exports = { QUIZ_BANK, QUIZ_BANK_META }; }
''')

sz = os.path.getsize('quiz_bank.js')
print(f'Successfully rebalanced quiz_bank.js ({sz:,} bytes) and ch0.json..ch9.json!')
