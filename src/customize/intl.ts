import type { Language } from "@/common/types";
import { chinese, english } from "./lang";

export interface HomeIntlData {
    lists: string;
    home: string;
}

export interface IntlData {
    home: HomeIntlData;
}

export const englishIntlData: IntlData = {
    "home": {
        "lists": "Lists",
        "home": "Home"
    }
}

export const chineseIntlData: IntlData = {
    "home": {
        "lists": "列表",
        "home": "首页"
    }
}

export function getIntlData(lang: Language): IntlData {
    switch (lang.locale) {
        case chinese.locale:
            return chineseIntlData;
        case english.locale:
            return englishIntlData;
        default:
            return englishIntlData;
    }
}