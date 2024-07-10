import type { Language } from "@/common/types";
import { chinese } from "./lang";

export interface SiteIntlData {
    title: string;
    description: string;
}

export interface HeaderIntlData {
    lists: string;
    blog: string;
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
    hskTitle: string;
    basicTitle: string;
    scenarioTitle: string;
}

interface BlogIntlData {
    title: string;
    description: string;
}

interface WordIntlData {
    description: string;
    information: string;
    explanation: string;
    writing: string;
    relatedList: string;
    homophones: string;
}

export interface IntlData {
    site: SiteIntlData;
    header: HeaderIntlData;
    home: HomeIntlData;
    lists: ListIntlData;
    blog: BlogIntlData;
    word: WordIntlData;
}

export const englishIntlData: IntlData = {
    site: {
        title: "Chinese Words - Find And Learn Chinese Words",
        description:
            "Find Chinese words used in different scenarios. Learn how to use, write(stroke order), and pronounce Chinese words.",
    },
    header: {
        lists: "Lists",
        blog: "Blog",
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
        hskTitle: "HSK",
        basicTitle: "Basic",
        scenarioTitle: "Scenario",
    },
    blog: {
        title: "Share interesting Chinese content",
        description:
            "Website updates, Chinese learning tips, interesting Chinese content sharing, etc",
    },
    word: {
        description: "pinyin, write(stroke order), explanation and examples",
        information: "Information",
        explanation: "Explanations",
        writing: "Writing",
        relatedList: "Related List",
        homophones: "Homophones",
    },
};

export const chineseIntlData: IntlData = {
    site: {
        title: "中文词 - 查找并学习中文词",
        description: "查找不同场景下使用的中文词，学习如何使用、写、发音中文词",
    },
    header: {
        lists: "列表",
        home: "首页",
        blog: "博客",
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
        hskTitle: "汉语水平考试",
        basicTitle: "基本",
        scenarioTitle: "场景",
    },
    blog: {
        title: "分享有趣的中文内容",
        description: "网站收录更新，中文学习技巧，有趣的中文内容分享等等",
    },
    word: {
        description: "拼音、写法、解释和例句",
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
