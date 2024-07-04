import type { Language } from "@/common/types";



export const english: Language = {
    locale: "en",
    name: "English"
}

export const chinese: Language = {
    locale: "zh",
    name: "简体中文"
}

export const supportedLang: Language[] = [
    english,
    chinese,
]

export const defaultLang = english;

export function getLang(locale: string): Language {
    return supportedLang.find(lang => lang.locale === locale) || defaultLang;
}