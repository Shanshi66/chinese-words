import { type Language } from "@/common/types";
import { chinese, english } from "./lang";
import type { MetaIntlData } from "./intl";

export interface ListDescription {
    title: string;
    description: string;
    meta: MetaIntlData;
}

export interface IntlListDetail {
    name: string;
    imgPath: string;
    url: string;
    tags: string[];
    chinese: ListDescription;
    english: ListDescription;
}

export const hsk1List: IntlListDetail = {
    name: "hsk1",
    imgPath: "/src/assets/images/hsk.jpg",
    url: "/lists/hsk1",
    tags: ["hsk1"],
    chinese: {
        title: "HSK 1级",
        description: "汉语水平考试1级中包含的词汇",
        meta: {
            title: "汉语水平考试一级(初级)词汇列表(HSK 3.0) - 解释，写法，例句",
            description:
                "这个列表包含了汉语水平考试(HSK 3.0)一级(初级)词汇列表，包括每个词的解释、拼音、写法、例句等等",
        },
    },
    english: {
        title: "HSK 1",
        description: "Hanyu Shuiping Kaoshi(HSK 3.0) level-1 (Beginner) words",
        meta: {
            title: "HSK Level-1 Words (HSK 3.0) - Explanation, Writing, Examples",
            description:
                "This list includes the vocabulary list for the HSK 3.0 Level 1(Beginner), including the explanation, pinyin, writing, example sentences, and so on for each word",
        },
    },
};

export const hsk2List: IntlListDetail = {
    name: "hsk2",
    imgPath: "/src/assets/images/hsk.jpg",
    url: "/lists/hsk2",
    tags: ["hsk2"],
    chinese: {
        title: "HSK 2级",
        description: "汉语水平考试一级(初级)中包含的词汇",
        meta: {
            title: "汉语水平考试二级(初级)词汇列表(HSK 3.0) - 解释，写法，例句",
            description:
                "这个列表包含了汉语水平考试(HSK 3.0)二级(初级)词汇列表，包括每个词的解释、拼音、写法、例句等等",
        },
    },
    english: {
        title: "HSK 2",
        description: "Hanyu Shuiping Kaoshi(HSK 3.0) level-2 (Beginner) words",
        meta: {
            title: "HSK Level-2 Words (HSK 3.0) - Explanation, Writing, Examples",
            description:
                "This list includes the vocabulary list for the HSK 3.0 Level 2(Beginner), including the explanation, pinyin, writing, example sentences, and so on for each word",
        },
    },
};

export const hsk3List: IntlListDetail = {
    name: "hsk3",
    imgPath: "/src/assets/images/hsk.jpg",
    url: "/lists/hsk3",
    tags: ["hsk3"],
    english: {
        title: "HSK 3",
        description: "Hanyu Shuiping Kaoshi(HSK 3.0) level-3 (Beginner) words",
        meta: {
            title: "HSK Level-3 Words (HSK 3.0) - Explanation, Writing, Examples",
            description:
                "This list includes the vocabulary list for the HSK 3.0 Level 3(Beginner), including the explanation, pinyin, writing, pronunciation, example sentences, and so on for each word",
        },
    },
    chinese: {
        title: "HSK 3级",
        description: "汉语水平考试3级中包含的词汇",
        meta: {
            title: "汉语水平考试三级(初级)词汇列表(HSK 3.0) - 解释，写法，例句",
            description:
                "这个列表包含了汉语水平考试(HSK 3.0)三级(初级)词汇列表，包括每个词的解释、发音、拼音、写法、例句等等",
        },
    },
};

export const hsk4List: IntlListDetail = {
    name: "hsk4",
    imgPath: "/src/assets/images/hsk.jpg",
    url: "/lists/hsk4",
    tags: ["hsk4"],
    english: {
        title: "HSK 4",
        description:
            "Hanyu Shuiping Kaoshi(HSK 3.0) level-4 (Intermediate) words",
        meta: {
            title: "HSK Level-4 Words (HSK 3.0) - Explanation, Writing, Examples",
            description:
                "This list includes the vocabulary list for the HSK 3.0 Level 4(Intermediate), including the explanation, pinyin, writing, example sentences, and so on for each word",
        },
    },
    chinese: {
        title: "HSK 4级",
        description: "汉语水平考试4级中包含的词汇",
        meta: {
            title: "汉语水平考试四级(中阶)词汇列表(HSK 3.0) - 解释，写法，例句",
            description:
                "这个列表包含了汉语水平考试(HSK 3.0)四级(中阶)词汇列表，包括每个词的解释、拼音、写法、例句等等",
        },
    },
};

export const hsk5List: IntlListDetail = {
    name: "hsk5",
    imgPath: "/src/assets/images/hsk.jpg",
    url: "/lists/hsk5",
    tags: ["hsk5"],
    english: {
        title: "HSK 5",
        description:
            "Hanyu Shuiping Kaoshi(HSK 3.0) level-5 (Intermediate) words",
        meta: {
            title: "HSK Level-5 Words (HSK 3.0) - Explanation, Stroke Order, Examples And More",
            description:
                "This list includes the vocabulary list for the HSK 3.0 Level 5(Intermediate), including the explanation, pinyin, writing, example sentences, and so on for each word",
        },
    },
    chinese: {
        title: "HSK 5级",
        description: "汉语水平考试五级中包含的词汇",
        meta: {
            title: "汉语水平考试五级(中阶)词汇列表(HSK 3.0) - 解释，写法，例句",
            description:
                "这个列表包含了汉语水平考试(HSK 3.0)五级(中阶)词汇列表，包括每个词的解释、拼音、写法、例句等等",
        },
    },
};

export const hsk6List: IntlListDetail = {
    name: "hsk6",
    imgPath: "/src/assets/images/hsk.jpg",
    url: "/lists/hsk6",
    tags: ["hsk6"],
    english: {
        title: "HSK 6",
        description:
            "Hanyu Shuiping Kaoshi(HSK 3.0) level-6 (Intermediate) words",
        meta: {
            title: "HSK Level-6 Words (HSK 3.0) - Explanation, Stroke Order, Examples And More",
            description:
                "This list includes the vocabulary list for the HSK 3.0 Level 6(Intermediate), including the explanation, pinyin, writing, example sentences, and so on for each word",
        },
    },
    chinese: {
        title: "HSK 六级",
        description: "汉语水平考试六级中包含的词汇",
        meta: {
            title: "汉语水平考试六级(中阶)词汇列表(HSK 3.0) - 解释，写法，例句",
            description:
                "这个列表包含了汉语水平考试(HSK 3.0)六级(中阶)词汇列表，包括每个词的解释、拼音、写法、例句等等",
        },
    },
};

export const hskHighList: IntlListDetail = {
    name: "hsk-high",
    imgPath: "/src/assets/images/hsk.jpg",
    url: "/lists/hsk-high",
    tags: ["hsk-high"],
    english: {
        title: "HSK Advanced",
        description: "Hanyu Shuiping Kaoshi(HSK 3.0) advanced words",
        meta: {
            title: "HSK Advanced Words (HSK 3.0) - Explanation, Stroke Order, Examples And More",
            description:
                "This list includes the vocabulary list for the HSK 3.0 advanced, including the explanation, pinyin, writing, example sentences, and so on for each word",
        },
    },
    chinese: {
        title: "HSK 高级",
        description: "汉语水平考试高级中包含的词汇",
        meta: {
            title: "汉语水平考试高阶词汇列表(HSK 3.0) - 解释，写法，例句",
            description:
                "这个列表包含了汉语水平考试(HSK 3.0)高阶词汇列表，包括每个词的解释、拼音、写法、例句等等",
        },
    },
};

export const foodList: IntlListDetail = {
    name: "food",
    imgPath: "/src/assets/images/food.jpg",
    url: "/lists/food",
    tags: ["food", "drink"],
    english: {
        title: "Food",
        description:
            "Chinese words for food and drink, including fruits, vegetables, meats, etc. and dishes made from these foods",
        meta: {
            title: "Chinese Words About Food - Explanation, Writing, Examples",
            description:
                "This list includes Chinese words related to food, with each term accompanied by an explanation, pinyin, writing, and example sentences.",
        },
    },
    chinese: {
        title: "食物",
        description:
            "汉语中食物相关词汇，包括水果、蔬菜、肉类等，及使用这些食物做成的料理",
        meta: {
            title: "关于食物的中文词 - 解释，写法，例句",
            description:
                "这个列表中包含了汉语中关于食物的词汇，每个词都有解释、拼音、写法、例句等",
        },
    },
};

export const animalList: IntlListDetail = {
    name: "animals",
    imgPath: "/src/assets/images/animal.jpg",
    url: "/lists/animals",
    tags: ["animal"],
    english: {
        title: "Animals",
        description: "Chinese words about animals",
        meta: {
            title: "Chinese Words About Animals - Explanation, Writing, Examples",
            description:
                "This list includes Chinese words related to animals, with each term accompanied by an explanation, pinyin, writing, and example sentences.",
        },
    },
    chinese: {
        title: "动物",
        description: "汉语中动物相关词汇",
        meta: {
            title: "关于动物的中文词 - 解释，写法，例句",
            description:
                "这个列表中包含了汉语中关于动物的词汇，每个词都有解释、拼音、写法、例句等",
        },
    },
};

export const numberList: IntlListDetail = {
    name: "numbers",
    imgPath: "/src/assets/images/number.jpg",
    url: "/lists/numbers",
    tags: ["number"],
    english: {
        title: "Numbers",
        description:
            "Chinese words for numbers, including basic numbers, fractions, percentages, etc.",
        meta: {
            title: "Chinese Words About Numbers - Basic, Fractions, Percentages",
            description:
                "This list includes Chinese words related to numbers, using examples to explain the usage of each term, as well as pinyin, writing, and explanations.",
        },
    },
    chinese: {
        title: "数字",
        description: "汉语中数字相关词汇, 包括基本数字、分数、百分数等",
        meta: {
            title: "关于数字的中文词 - 包括基本数字、分数、百分数等",
            description:
                "这个列表中包含了汉语中关于数字的词汇，使用例句解释每个词的用法，还有拼音、写法、解释等",
        },
    },
};

export const priceList: IntlListDetail = {
    name: "price",
    imgPath: "/src/assets/images/price.jpg",
    url: "/lists/price",
    tags: ["price"],
    english: {
        title: "Price",
        description: "Chinese words related to price",
        meta: {
            title: "Chinese Words About Prices - How to Use in Daily Life",
            description:
                "This list includes Chinese words related to prices. Each word is accompanied by an explanation, pinyin, writing, and example sentences.",
        },
    },
    chinese: {
        title: "价格",
        description: "汉语中价格相关词汇",
        meta: {
            title: "关于价格的中文词 - 如何在日常生活中使用价格相关词",
            description:
                "这个列表中包含了汉语中关于价格的词汇，通过例句说明不同价格的使用方法，每个词都有解释、拼音、写法、例句等",
        },
    },
};

export const measureList: IntlListDetail = {
    name: "measure",
    imgPath: "/src/assets/images/measure.webp",
    url: "/lists/measure",
    tags: ["measure"],
    english: {
        title: "Measure",
        description:
            "Chinese has a variety of measure words. This list includes most of them",
        meta: {
            title: "Chinese Measure Words - Learning With Examples",
            description:
                "Chinese has a variety of measure words. This list includes most of them, with each measure word accompanied by an explanation, examples, writing, and pinyin.",
        },
    },
    chinese: {
        title: "量词",
        description: "汉语中的量词，包括时间、面积、体积、数量等",
        meta: {
            title: "汉语中的量词 - 通过例句学习用法",
            description:
                "汉语中的量词较多，使用比较灵活，这个列表中包含了大部分量词，每个量词包含解释、例句、写法、拼音等",
        },
    },
};

export const colorList: IntlListDetail = {
    name: "colors",
    imgPath: "/src/assets/images/color.png",
    url: "/lists/colors",
    tags: ["color"],
    english: {
        title: "Colors",
        description: "Chinese words related to colors",
        meta: {
            title: "Chinese Words About Colors - Explanation, Writing, Examples",
            description:
                "This list includes Chinese words related to colors, with explanations, pinyin, writing, and example sentences for each term.",
        },
    },
    chinese: {
        title: "颜色",
        description: "汉语中颜色相关词汇",
        meta: {
            title: "汉语中关于颜色的词 - 解释、例句和写法",
            description:
                "这个列表中包含了汉语中颜色相关词汇，每个词都有解释、拼音、写法、例句等",
        },
    },
};

export const businessList: IntlListDetail = {
    name: "business",
    imgPath: "/src/assets/images/greet.jpg",
    url: "/lists/business",
    tags: ["business"],
    english: {
        title: "Business",
        description:
            "Chinese words used in work and business, such as polite expressions, jargon and so on",
        meta: {
            title: "Chinese Words for Business - Explanation, Examples, Writing",
            description:
                "This list contains Chinese words used in work and business, such as polite expressions and jargon, with example sentences to help you understand their usage.",
        },
    },
    chinese: {
        title: "工作",
        description: "工作场景中可能会使用中文词汇, 包括礼貌用、书面表达等",
        meta: {
            title: "商务和工作场景中常用的中文词汇 - 解释、例句和写法",
            description:
                "这个列表收集了商务和工作场景中用到的中文词汇，比如礼貌用语、物品、术语等，通过例句帮助你理解用法",
        },
    },
};

export const travelList: IntlListDetail = {
    name: "travel",
    imgPath: "/src/assets/images/travel.webp",
    url: "/lists/travel",
    tags: ["travel", "greet"],
    english: {
        title: "Travel",
        description:
            "Chinese Words that might be used during travel, such as asking for directions, greeting, and landmarks, etc.",
        meta: {
            title: "Chinese Words for Travel - Explanation, Examples, Writing",
            description:
                "This list collects Chinese words that might be used during travel, such as asking for directions, greeting, and landmarks, etc.",
        },
    },
    chinese: {
        title: "旅行",
        description: "汉语中旅行相关词汇, 包括礼貌用、询问价格、询问路线等",
        meta: {
            title: "旅行中常用的中文词汇 - 解释、例句和写法",
            description:
                "这个列表收集了旅行途中可能使用的中文词，比如问路、打招呼、地标等",
        },
    },
};

export const dailyList: IntlListDetail = {
    name: "daily",
    imgPath: "/src/assets/images/life.jpeg",
    url: "/lists/daily",
    tags: ["daily"],
    english: {
        title: "Daily",
        description:
            "Chinese words frequently used in daily communication, greetings, asking for help, etc.",
        meta: {
            title: "Common Chinese Words in Daily Life - Explanation, Examples, Writing",
            description:
                "Chinese words frequently used in daily communication, greetings, and asking for help, with example sentences to help you understand better",
        },
    },
    chinese: {
        title: "日常生活",
        description: "汉语中日常生活相关词汇, 包括问候、购物等",
        meta: {
            title: "日常生活常用的汉语词汇 - 解释、例句和写法",
            description:
                "在日常沟通、问候、求助中经常用到的词汇，通过例句帮助你更好地理解",
        },
    },
};

export const loveList: IntlListDetail = {
    name: "love",
    imgPath: "/src/assets/images/love.jpg",
    url: "/lists/love",
    tags: ["love"],
    english: {
        title: "Love",
        description:
            "Commonly used words in daily life to express love in Chinese",
        meta: {
            title: "Chinese Words Expressing Love - Explanation, Examples, Writing",
            description:
                "Commonly used words in daily life to express love in Chinese, with examples to help you learn and understand better",
        },
    },
    chinese: {
        title: "爱",
        description: "汉语中表达爱相关的词汇",
        meta: {
            title: "汉语中表达爱的词汇 - 解释、例句和写法",
            description:
                "在日常生活中使用汉语来表达爱的常用词汇，通过例句帮助你更好的学习和理解",
        },
    },
};

export const rudeList: IntlListDetail = {
    name: "rude",
    imgPath: "/src/assets/images/rude.jpg",
    url: "/lists/rude",
    tags: ["rude"],
    english: {
        title: "Rude",
        description:
            "Rude words in Chinese to express emotions such as dissatisfaction or surprise",
        meta: {
            title: "Chinese Rude Words - Explanation, Examples, Writing",
            description:
                "Rude words are often used in daily life to express emotions like dissatisfaction and surprise. Examples are provided to help you better learn and understand.",
        },
    },
    chinese: {
        title: "粗俗",
        description: "汉语中表达不满或吃惊等情绪的粗俗词汇",
        meta: {
            title: "汉语中表达不满或吃惊等情绪的粗俗词汇 - 解释、例句和写法",
            description:
                "在日常生活中经常使用粗俗的词汇来表达不满、吃惊等情绪，通过例句帮助你更好的学习和理解",
        },
    },
};

export const homeList: IntlListDetail[] = [
    hsk1List,
    foodList,
    animalList,
    numberList,
    colorList,
    businessList,
    travelList,
    dailyList,
    loveList,
];

export const hskLists: IntlListDetail[] = [hsk1List, hsk2List, hsk3List];
export const basicLists: IntlListDetail[] = [
    dailyList,
    colorList,
    numberList,
    foodList,
    animalList,
    priceList,
    measureList,
];

export const scenarioLists: IntlListDetail[] = [
    businessList,
    loveList,
    travelList,
    rudeList,
];

export const allList = [...hskLists, ...basicLists, ...scenarioLists];

export function getListIntl(
    intlList: IntlListDetail,
    lang: Language,
): ListDescription {
    switch (lang) {
        case chinese:
            return intlList.chinese;
        case english:
            return intlList.english;
        default:
            return intlList.english;
    }
}
