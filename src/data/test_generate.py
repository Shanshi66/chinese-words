import json


words = {}

with open('./words.txt', 'r') as f:
    for line in f:
        if not line:
            continue
        word = line.strip().split()[1]
        tag = line.strip().split()[0]
        words[word] = tag

for word in words:
    info = {}
    info['word'] = word
    info['tag'] = words[word]
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
    with open(f'./words/{word}.json', 'w') as f:
        json.dump(info, f, indent=4, ensure_ascii=False)
