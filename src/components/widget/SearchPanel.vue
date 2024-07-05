<template>
    <div>
        <div
            class="bg-white p-2 flex items-center rounded hover:border-blue-700 border-[1px] border-gray-300"
        >
            <input
                type="text"
                v-model="query"
                class="grow focus:outline-none"
                :placeholder="intlData.header.searchHint"
                @input="search"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70 text-blue-700"
            >
                <path
                    fill-rule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
        <p class="my-4 text-blue-700">{{ intlData.header.searchResult }}</p>
        <div>
            <div
                v-for="result in results"
                class="p-2 bg-white rounded my-2 hover:bg-blue-700 hover:text-white"
                @click="jump(result.item.word)"
            >
                <span class="mr-4">{{ result.item.word }}</span>
                <span>{{ result.item.pinyin }}</span>
            </div>
        </div>
        <div>
            <a
                :href="social.x"
                class="text-center hover:cursor-pointer text-gray-400 hover:text-blue-700 block text-sm"
                >{{ intlData.header.notFoundHint }}</a
            >
        </div>
    </div>
</template>

<script lang="ts">
import type { IntlData } from "@/customize/intl";
import { type PropType, defineComponent } from "vue";
import searchData from "@/assets/search.json";
import Fuse from "fuse.js";
import { social } from "@/customize/social";
import type { FuseResult } from "fuse.js";
import type { Language, SearchDocument } from "@/common/types";

interface DataProperties {
    query: string;
    engine: Fuse<SearchDocument>;
    results: FuseResult<SearchDocument>[];
    social: typeof social;
}

export default defineComponent({
    props: {
        intlData: {
            type: Object as PropType<IntlData>,
            required: true,
        },
        lang: {
            type: Object as PropType<Language>,
            required: true,
        },
    },
    data(): DataProperties {
        const fuseOptions = {
            isCaseSensitive: false,
            // includeScore: false,
            // shouldSort: true,
            // includeMatches: false,
            // findAllMatches: false,
            // minMatchCharLength: 1,
            // location: 0,
            // threshold: 0.6,
            // distance: 100,
            // useExtendedSearch: false,
            // ignoreLocation: false,
            // ignoreFieldNorm: false,
            // fieldNormWeight: 1,
            keys: ["word", "pinyin"],
        };
        return {
            query: "",
            engine: new Fuse(searchData, fuseOptions),
            results: [],
            social: social,
        };
    },
    methods: {
        search() {
            if (!this.query) {
                this.results = [];
                return;
            }
            let results = this.engine.search(this.query, { limit: 10 });
            this.results = results;
        },
        jump(word: string) {
            window.open(`/${this.lang.locale}/words/${word}`);
        },
    },
});
</script>
