import type { Language, Question } from "@/common/types";
import { chinese } from "./lang";

const englishQuestions: Question[] = [
    {
        question: "What is this site about?",
        answer: "This website has collected a lot of Chinese words (and will include more in the future), providing pinyin, annotations, examples, and stroke order for each word, with support for pronunciation to be added later. We will also categorize the words into different lists. Through this website, you can learn Chinese more effectively.",
    },
    {
        question: "How to find a Chinese word?",
        answer: "We offer two methods to look up words: the first is by searching for Chinese words or pinyin, the second is through categorized word lists.",
    },
    {
        question: "Does this site include all Chinese words?",
        answer: "Currently, this website does not include all words, as organizing the data takes a considerable amount of time, but in the future, it will cover more, including idioms, xiehouyu (two-part allegorical sayings), and so on.",
    },
];

const chineseQuestions: Question[] = [
    {
        question: "这个网站是关于什么的？",
        answer: "这个网站收录了很多中文词（未来会收录更多），为每个词提供拼音、注释、例句、笔顺，后续会支持发音。我们还会将词汇分类整理成不同的列表。通过这个网站，你可以更有效地学习中文。",
    },
    {
        question: "如何查找中文词？",
        answer: "我们提供两种查找词汇的方法：第一种是通过中文词或拼音搜索，第二种是通过分类的词汇列表",
    },
    {
        question: "这个网站是否包含所有中文词？",
        answer: "目前这个网站并没有包含所有词汇，因为整理数据需要花费大量时间，但未来会覆盖更多，包括成语、歇后语等。",
    },
];

interface AppFaqsData {
    chinese: Question[];
    english: Question[];
}

const appFaqsData = {
    chinese: chineseQuestions,
    english: englishQuestions,
}

export function getFaqData(lang: Language): Question[] {
    switch (lang.locale) {
        case chinese.locale:
            return appFaqsData.chinese;
        default:
            return appFaqsData.english;
    }
}