import json
import os
import sys


def load_words(filename):
    words = set()
    with open(filename, 'r') as f:
        for line in f:
            word = line.strip()
            if not line:
                continue
            words.add(word)
    return words


def add_tag_to_word(word, tag):
    # if word not in result folder, return
    path = f'./result/checked/{word}.json'
    if not os.path.exists(path):
        return
    with open(path, 'r') as f:
        data = json.load(f)
        data['tags'].append(tag)
    with open(path, 'w') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)


def main():
    dir = './result/checked'
    # get all file in dir
    files = os.listdir(dir)
    for file in files:
        path = os.path.join(dir, file)
        if not file.endswith('.json'):
            continue
        with open(path, 'r') as f:
            data = json.load(f)
            data["explanations"] = [data["explanations"]]
        with open(path, 'w') as f:
            json.dump(data, f, indent=4, ensure_ascii=False)


if __name__ == '__main__':
    main()
