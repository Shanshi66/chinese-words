import json
import os
from pypinyin import pinyin, Style

search_doc = []

dir = './result/checked'

# get all file in dir
files = os.listdir(dir)
for file in files:
    if not file.endswith('.json'):
        continue
    word = file.split('/')[-1][:-5]
    pinyin_list = pinyin(word, style=Style.NORMAL)
    pinyin_str = ' '.join([item[0] for item in pinyin_list])

    search_doc.append({
        'word': word,
        'pinyin': pinyin_str,
    })

with open('search.json', 'w') as f:
    json.dump(search_doc, f, indent=4, ensure_ascii=False)
