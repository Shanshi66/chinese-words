export interface ListDetail {
    title: string;
    description: string;
    imgPath: string;
    url: string;
    tags: string[];
}

export const listData: ListDetail[] = [
    {
        title: "HSK",
        description: "Common Chinese words for colors",
        imgPath: "/src/assets/images/hsk.jpg",
        url: "/list/hsk",
        tags: ["hsk1", "hsk2", "hsk3", "hsk4", "hsk5", "hsk6", "hsk high"],
    },
    {
        title: "Food",
        description: "Common Chinese words for food",
        imgPath: "/src/assets/images/food.jpg",
        url: "/list/food",
        tags: ["food", "drink"],
    },
    {
        title: "Animals",
        description: "Common Chinese words for animals",
        imgPath: "/src/assets/images/animal.jpg",
        url: "/list/animals",
        tags: ["animal"],
    },
    {
        title: "Numbers",
        description: "Common Chinese words for numbers",
        imgPath: "/src/assets/images/number.jpg",
        url: "/list/numbers",
        tags: ["number"],
    },
    {
        title: "Colors",
        description: "Common Chinese words for colors",
        imgPath: "/src/assets/images/color.png",
        url: "/list/colors",
        tags: ["color"],
    },
    {
        title: "Business",
        description: "Common Chinese words for colors",
        imgPath: "/src/assets/images/greet.jpg",
        url: "/list/business",
        tags: ["business"],
    },
    {
        title: "Travel",
        description: "Common Chinese words for colors",
        imgPath: "/src/assets/images/travel.webp",
        url: "/list/travel",
        tags: ["travel", "greet"],
    },
    {
        title: "Love",
        description: "Common Chinese words for colors",
        imgPath: "/src/assets/images/love.jpg",
        url: "/list/love",
        tags: ["love"],
    },
    {
        title: "Daily",
        description: "Common Chinese words for colors",
        imgPath: "/src/assets/images/life.jpeg",
        url: "/list/daily",
        tags: ["daily"],
    },
]