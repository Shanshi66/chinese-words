export interface MetaData {
    title: string;
    canonical?: string;
    description: string;
}

enum Lang {
    zh,
    en,
}

export interface LangSentence {
    lang: Lang;
    sentence: string;
}

export interface PinyinWord {
    word: string;
    pinyin: string;
}

export interface Example {
    sentence: string;
    sentence_intl: LangSentence[];
}
