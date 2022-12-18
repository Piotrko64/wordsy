<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useWordsStore } from "../../../../stores/WordsStore";
import SingleCard from "./SingleCard.vue";

const store = useWordsStore();
const { getActualWord } = storeToRefs(store);
</script>

<template>
    <div>
        <transition name="fade" mode="out-in">
            <SingleCard
                :wordPL="getActualWord.wordPL"
                :wordEN="getActualWord.wordEN"
                :examplePL="getActualWord.examplePL"
                :exampleEN="getActualWord.exampleEN"
                :key="getActualWord.examplePL"
            />
        </transition>
    </div>
</template>

<style scoped lang="scss">
.fade-enter-active {
    transition: all 0.1s ease-out;
}

.fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateY(10%);
    opacity: 0;
}
</style>
