import json
from pypinyin import pinyin, Style

search_doc = []

i = 0
with open('./words.txt', 'r') as f:
    for line in f:
        if not line:
            continue
        i += 1
        word = line.strip().split()[1]
        tag = line.strip().split()[0]
        pinyin_list = pinyin(word, style=Style.NORMAL)
        pinyin_str = ' '.join([item[0] for item in pinyin_list])

        search_doc.append({
            'word': word,
            'pinyin': pinyin_str,
        })

with open('search.json', 'w') as f:
    json.dump(search_doc, f, indent=4, ensure_ascii=False)
