import type { WordDetail } from "@/common/types";
import fs from "fs";

export function loadAllWords(): WordDetail[] {
    const wordFiles = fs.readdirSync("src/data/words");
    const wordDetails: WordDetail[] = wordFiles.map((wordFile) => {
        const content = fs.readFileSync(`src/data/words/${wordFile}`);
        return JSON.parse(content.toString());
    });
    return wordDetails;
}