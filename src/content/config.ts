import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        tags: z.array(z.string()),
        cover: z.object({
            url: z.string(),
            alt: z.string(),
        }),
    }),
});

export const collections = {
    posts: postsCollection,
};
