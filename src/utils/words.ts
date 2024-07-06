import type { WordDetail } from "@/common/types";
import fs from "fs";

const wordDir = "src/data/result/checked";

export function loadAllWords(): WordDetail[] {
    const wordFiles = fs.readdirSync(wordDir);
    const wordDetails: WordDetail[] = wordFiles.map((wordFile) => {
        const content = fs.readFileSync(`${wordDir}/${wordFile}`);
        return JSON.parse(content.toString());
    });
    return wordDetails;
}

export function loadWord(word: string): WordDetail {
    let content = fs.readFileSync(`${wordDir}/${word}.json`);
    let wordDetail: WordDetail = JSON.parse(content.toString());
    return wordDetail;
}
