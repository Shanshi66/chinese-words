export interface MetaData {
    title: string;
    canonical?: string;
    description: string;
}

export interface PinyinWord {
    word: string;
    pinyin: string;
}

export interface Example {
    chinese: string;
    pinyin: string[];
    english: string;
}