export interface MetaData {
    title: string;
    canonical?: string;
    description: string;
}

export interface PinyinWord {
    word: string;
    pinyin: string;
}

export interface Question {
    question: string;
    answer: string;
}

export interface WordDetail {
    word: string;
    tags: string[];
    explanations: Explanation[];
}

export interface Translate {
    english: string;
}

export interface Explanation {
    explanation: string;
    translate: Translate
    examples: Example[];
}

export interface Example {
    example: string;
    translate: Translate;
}
