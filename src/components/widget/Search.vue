<template>
    <div
        class="flex flex-row items-center border-[1px] rounded p-1 border-gray-300 hover:border-gray-900"
        @click="openSearchModal"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70 mr-2"
        >
            <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
            ></path>
        </svg>
        <span data-locale="{lang.locale}" class="text-gray-500">
            {{ intlData.header.searchPlaceholder }}
        </span>
    </div>
    <dialog id="search-modal" class="modal modal-top">
        <div class="modal-box w-1/3 mx-auto mt-[100px] rounded-lg bg-gray-100">
            <SearchPanel :intlData="intlData" :lang="lang" client:load />
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script lang="ts">
import type { IntlData } from "@/customize/intl";
import { type PropType, defineComponent } from "vue";
import SearchPanel from "./SearchPanel.vue";
import type { Language } from "@/common/types";

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
    components: {
        SearchPanel,
    },
    methods: {
        openSearchModal() {
            const dialog = document.getElementById(
                "search-modal",
            ) as HTMLDialogElement;
            dialog.showModal();
        },
    },
});
</script>
