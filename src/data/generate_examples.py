import json
import os
import sys
from volcenginesdkarkruntime import Ark
from concurrent.futures import ThreadPoolExecutor, as_completed
from openai import OpenAI


max_workers = 20

client = Ark(api_key='d1661709-3c4d-4d0d-889b-69db9f516cc4')
model = "ep-20240705130135-k4cck"

# client = OpenAI(
#     api_key="sk-lCgnCDiWvkZrYccFz8ZSlbjkzUOeSr1bdLXBFI472PP5xNCC",
#     base_url="https://api.moonshot.cn/v1",
# )
# model = "moonshot-v1-8k"


def get_explain(word: str) -> str:
    explanation_prompt = """
        你是一个精通中文和英文的语言学家，你能准确的把一个中文单词用英语解释出来。我将会给你一个中文单词，你需要用相应的英文单词解释。
        
        尽量简短，不要出现中文。不需要使用"A / B"形式给出多种解释，只需要给出一个解释即可。请直接给我解释结果，不要出现类似“以下是解释结果”这种语言。
        
        比如：
        - 苹果 -> apple
        - 半年 -> half a year
        - 北京 -> Beijing
        """

    completion = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": explanation_prompt},
            {"role": "user", "content": word},
        ],
        temperature=1,
    )
    # explanation = completion.choices[0].message.content
    explanation = completion.choices[0].message.content
    return explanation


def get_example(word: str) -> list:
    example_prompt = """
    你是一个精通中文的语言学家，你能使用我给定的中文词汇进行造句，每次你能给我一个例句。要求造的句子内容积极乐观，有礼貌，必须包含给定的词。
    
    我给定的词都是需要造句的关键词，不是与聊天内容有关，请不要进行无关回复。请直接给我造句结果，不要出现类似“以下是造句结果”这种语言。

    比如： 
    - 半年 -> 在这半年的时间里，我学到了许多新知识和技能。
    - 病人 -> 医院里的医生们都非常用心地照顾着每一位病人。
    """
    examples = []
    for i in range(3):
        if len(examples) > 0:
            example_str = ' \n '.join(examples)
            example_prompt = '{} \n 不要与这些例句重复：\n {}'.format(
                example_prompt, example_str)
        completion = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": example_prompt},
                {"role": "user", "content": "请使用'{}'造句".format(word)},
            ],
            temperature=1,
        )
        example = completion.choices[0].message.content.strip()
        if word not in example:
            continue
        examples.append(example)
    return examples


def get_example_translate(word: str, examples: list) -> list:
    translate_prompt = """
    你是一个精通中文和英文的语言学家，你能准确地将中文翻译成英文。每次我给你一个中文句子，你需要将它翻译成英文。请直接给我翻译结果，不要出现类似“以下是翻译结果”这种语言。

    比如：
    - 白天努力工作，夜晚安心休息，生活充实而快乐 -> Work hard during the day, rest easy at night, life is full and happy

    """

    example_translate = []

    for i in range(len(examples)):
        completion = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": translate_prompt},
                {"role": "user", "content": examples[i]},
            ],
            temperature=1,
        )
        example_translate.append(completion.choices[0].message.content)
    return example_translate


def process(word: str):
    print(f'Processing word: {word}')
    explanation = get_explain(word)
    examples = get_example(word)
    example_translate = get_example_translate(word, examples)
    compose = {
        "word": word,
        "tags": [],
        "explanations": [{
            "explanation": word,
            "translate": {
                "english": explanation
            },
            "examples": [{"example": e, "translate": {
                "english": t
            }} for e, t in zip(examples, example_translate)]
        }]
    }
    return compose


def load_words(filename):
    files = os.listdir('./result/checked')
    done_words = set()
    for file in files:
        if not file.endswith('.json'):
            continue
        word = file.split('/')[-1][:-5].strip()
        done_words.add(word)
    words = set()
    with open(filename, 'r') as f:
        for line in f:
            word = line.strip()
            if not line or word in done_words:
                continue
            words.add(word)
    return words


def dump_result(result, folder):
    word = result['word']
    with open(f'{folder}/{word}.json', 'w') as f:
        json.dump(result, f, indent=4, ensure_ascii=False)


def main(filename, is_test=False):
    words = load_words(filename)
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = [executor.submit(process, word) for word in words]
        for future in as_completed(futures):
            result = future.result()
            dump_result(result, './result' if not is_test else './test')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python generate_word_examples.py <words_file>')
        sys.exit(1)

    if len(sys.argv) == 2:
        main(sys.argv[1])
    else:
        is_test = sys.argv[2] == 'test'
        main(sys.argv[1], is_test)
