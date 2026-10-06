# -*- coding: utf-8 -*-
import json
import os

quotas = [
    [3, 2, 2, 3], # set 0
    [3, 2, 2, 3], # set 1
    [3, 3, 2, 2], # set 2
    [3, 3, 2, 2], # set 3
    [3, 3, 2, 2], # set 4
    [2, 3, 3, 2], # set 5
    [2, 3, 3, 2], # set 6
    [2, 2, 3, 3], # set 7
    [2, 2, 3, 3], # set 8
    [2, 2, 3, 3], # set 9
]
types_order = ['theory', 'error', 'output', 'scenario']
lvl_weight = {'hard': 3, 'medium': 2, 'easy': 1}

final_bank = {}

for ch in range(10):
    path = f'scratch/ch{ch}.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # 10 sets
    sets = [[] for _ in range(10)]
    
    for t_idx, t in enumerate(types_order):
        type_qs = [q for q in data if q['type'] == t]
        # Sort by difficulty descending (hard, medium, easy) so they get distributed evenly across sets
        type_qs.sort(key=lambda q: lvl_weight[q['level']], reverse=True)
        
        needed_per_set = [quotas[s_idx][t_idx] for s_idx in range(10)]
        
        # Round-robin distribution
        while any(needed_per_set):
            for s_idx in range(10):
                if needed_per_set[s_idx] > 0 and type_qs:
                    sets[s_idx].append(type_qs.pop(0))
                    needed_per_set[s_idx] -= 1
                    
    # Now in each set, interleave the 4 types for a rich variety of questions
    ordered_ch_qs = []
    for s_idx, s in enumerate(sets):
        assert len(s) == 10, f'Ch{ch} Set {s_idx} len={len(s)}'
        by_t = {t: [q for q in s if q['type'] == t] for t in types_order}
        interleaved = []
        max_t = max(len(v) for v in by_t.values())
        for r in range(max_t):
            for t in types_order:
                if r < len(by_t[t]):
                    interleaved.append(by_t[t][r])
        assert len(interleaved) == 10
        # Verification of constraints
        types_in_set = set(q['type'] for q in interleaved)
        assert len(types_in_set) == 4, f'Missing types in Ch{ch} Set {s_idx}'
        levels_in_set = set(q['level'] for q in interleaved)
        assert len(levels_in_set) >= 2, f'Lacks difficulty variety in Ch{ch} Set {s_idx}'
        ordered_ch_qs.extend(interleaved)
        
    assert len(ordered_ch_qs) == 100, f'Ch{ch} total={len(ordered_ch_qs)}'
    final_bank[str(ch)] = ordered_ch_qs

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
print(f'Successfully built quiz_bank.js ({sz:,} bytes) with 1,000 questions across 10 chapters!')
