import json


words = {}


def tagTrans(tag):
    if tag == "HSK1":
        return 'hsk1'
    elif tag == "HSK2":
        return 'hsk2'
    elif tag == "HSK3":
        return 'hsk3'
    elif tag == "HSK4":
        return 'hsk4'
    elif tag == "HSK5":
        return 'hsk5'
    elif tag == "HSK6":
        return 'hsk6'
    else:
        return 'hsk-high'


with open('./words.txt', 'r') as f:
    for line in f:
        if not line:
            continue
        word = line.strip().split()[1]
        tag = line.strip().split()[0]
        words[word] = tagTrans(tag)

for word in words:
    info = {}
    info['word'] = word
    info['tags'] = words[word]
    info['explanations'] = [
        {
            "explanation": "你好",
            "translate": {
                "english": "hello"
            },
            "examples": [
                {
                    "example": "你好, 小明!",
                    "translate": {
                        "english": "Hello, Ming!"
                    }
                },
                {
                    "example": "你好, 你叫什么名字",
                    "translate": {
                        "english": "Hello, what's your name?"
                    }
                }
            ]
        }
    ]
    # dump to json file
    with open(f'../words/{word}.json', 'w') as f:
        json.dump(info, f, indent=4, ensure_ascii=False)
