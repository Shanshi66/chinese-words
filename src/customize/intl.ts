import type { Language } from "@/common/types";
import { chinese, english } from "./lang";

export interface HeaderIntlData {
    lists: string;
    home: string;
}

export interface HomeIntlData {
    heroTitle: string;
    searchPlaceholder: string;
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
    },
    home: {
        heroTitle: "Find And Learn Chinese Words",
        searchPlaceholder: "Search Chinese words by pinyin or characters",
        wordListTitle: "Chinese Word List",
        factsTitle: "How many words included?",
        factsWordCount: "WORDS",
        factsListCount: "LISTS",
        factsExampleCount: "EXAMPLES",
        faqTitle: "Frequently Asked Questions",
    },
    lists: {
        title: "Chinese Word List",
        description: "Collect Chinese words in different scenarios and purposes, and organize them into lists for targeted learning",
    },
    word: {
        information: "Information",
        explanation: "Explanations",
        writing: "Writing",
        relatedList: "Related List",
        homophones: "Homophones",
    }

}

export const chineseIntlData: IntlData = {
    header: {
        lists: "列表",
        home: "首页"
    },
    home: {
        heroTitle: "查找并学习中文词",
        searchPlaceholder: "通过拼音或汉字搜索中文词",
        wordListTitle: "中文词分类表",
        factsTitle: "网站收录数量",
        factsWordCount: "词",
        factsListCount: "列表",
        factsExampleCount: "例句",
        faqTitle: "常见问题",
    },
    lists: {
        title: "中文词分类表",
        description: "收集不同场景、不同用途下的中文单词，整理成列表，方便针对性学习",
    },
    word: {
        information: "基本信息",
        explanation: "解释",
        writing: "写法",
        relatedList: "相关列表",
        homophones: "同音词",

    }
}

interface AppIntlData {
    english: IntlData;
    chinese: IntlData;
}

const appIntlData: AppIntlData = {
    english: englishIntlData,
    chinese: chineseIntlData,
}

export function getIntlData(lang: Language): IntlData {
    switch (lang.locale) {
        case chinese.locale:
            return appIntlData.chinese;
        default:
            return appIntlData.english;
    }
}