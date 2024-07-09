import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), sitemap(), mdx()],
  routing: {
    prefixDefaultLocale: true
  },
  trailingSlash: "never",
  site: "https://chinesewords.co"
});