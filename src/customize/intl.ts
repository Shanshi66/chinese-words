import type { Language } from "@/common/types";
import { chinese } from "./lang";

export interface HeaderIntlData {
    lists: string;
    home: string;
    searchPlaceholder: string;
    searchHint: string;
    searchResult: string;
    notFoundHint: string;
}

export interface HomeIntlData {
    heroTitle: string;
    heroSubtitle: string;
    wordListTitle: string;
    factsTitle: string;
    factsWordCount: string;
    factsListCount: string;
    factsExampleCount: string;
    faqTitle: string;
}

interface ListIntlData {
    title: string;
    description: string;
}

interface WordIntlData {
    information: string;
    explanation: string;
    writing: string;
    relatedList: string;
    homophones: string;
}

export interface IntlData {
    header: HeaderIntlData;
    home: HomeIntlData;
    lists: ListIntlData;
    word: WordIntlData;
}

export const englishIntlData: IntlData = {
    header: {
        lists: "Lists",
        home: "Home",
        searchPlaceholder: "Search",
        searchHint: "Search by pinyin or characters",
        searchResult: "Results",
        notFoundHint: "If you can't find the word you want, please contact me",
    },
    home: {
        heroTitle: "Find And Learn Chinese Words",
        heroSubtitle:
            "Find the words you want to learn through search or word list, you will get related content about listening, reading, and writing on the word details page",
        wordListTitle: "Chinese Word List",
        factsTitle: "How many words included?",
        factsWordCount: "WORDS",
        factsListCount: "LISTS",
        factsExampleCount: "EXAMPLES",
        faqTitle: "Frequently Asked Questions",
    },
    lists: {
        title: "Chinese Word List",
        description:
            "Collect Chinese words in different scenarios and purposes, and organize them into lists for targeted learning",
    },
    word: {
        information: "Information",
        explanation: "Explanations",
        writing: "Writing",
        relatedList: "Related List",
        homophones: "Homophones",
    },
};

export const chineseIntlData: IntlData = {
    header: {
        lists: "列表",
        home: "首页",
        searchPlaceholder: "搜索",
        searchHint: "通过拼音或汉字搜索",
        searchResult: "搜索结果",
        notFoundHint: "如果没有找到你想要的词，请联系我",
    },
    home: {
        heroTitle: "查找并学习中文词",
        heroSubtitle:
            "通过搜索或者单词分类表可以找到你想要学习的单词，在单词详情页可以学习到词汇听、说、读、写相关内容",
        wordListTitle: "中文词分类表",
        factsTitle: "网站收录数量",
        factsWordCount: "词",
        factsListCount: "列表",
        factsExampleCount: "例句",
        faqTitle: "常见问题",
    },
    lists: {
        title: "中文词分类表",
        description:
            "收集不同场景、不同用途下的中文单词，整理成列表，方便针对性学习",
    },
    word: {
        information: "基本信息",
        explanation: "解释",
        writing: "写法",
        relatedList: "相关列表",
        homophones: "同音词",
    },
};

interface AppIntlData {
    english: IntlData;
    chinese: IntlData;
}

const appIntlData: AppIntlData = {
    english: englishIntlData,
    chinese: chineseIntlData,
};

export function getIntlData(lang: Language): IntlData {
    switch (lang.locale) {
        case chinese.locale:
            return appIntlData.chinese;
        default:
            return appIntlData.english;
    }
}
