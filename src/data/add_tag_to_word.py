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


def main(filename):
    tag = filename.split('/')[-1]
    if tag.endswith('.txt'):
        tag = tag[:-4]
    words = load_words(filename)
    for word in words:
        add_tag_to_word(word, tag)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python add_tag_to_word.py <word_file>')
        sys.exit(1)

    main(sys.argv[1])
