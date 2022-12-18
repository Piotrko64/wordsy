<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useWordsStore } from "../../stores/WordsStore";

const { getProgress, getMode, getPercentProgress } = storeToRefs(useWordsStore());
</script>

<template>
    <div class="whiteBlock mode">
        <div class="text horizontalSpace">
            <div>{{ getMode }}</div>
            <div class="counter">{{ getProgress }}</div>
        </div>
        <div
            class="progressBar"
            :style="{
                background: `linear-gradient(90deg, var(--green) ${getPercentProgress}, var(--secondGray) ${getPercentProgress})`,
            }"
        ></div>
    </div>
</template>

<style scoped lang="scss">
.mode {
    color: var(--green);
    font-size: 1.6rem;
    display: inline-block;
    font-weight: 400;
    .text {
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        justify-content: space-between;
        &::first-letter {
            font-weight: 900;
        }
    }

    .progressBar {
        width: 100%;

        height: 6px;
    }
}
</style>
