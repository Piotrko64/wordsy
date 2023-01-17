<script setup lang="ts">
import { onMounted } from 'vue';
import MainLayout from './layout/MainLayout.vue';
import { useWordsStore } from './stores/WordsStore';
import { useRandomWordsStore } from './stores/RandomWordsStore';
import { generateRandomQuiz } from './helpers/randomQuiz/generateRandomQuiz';

const { addWordsFromLocalStorage } = useWordsStore();
const { changeIndexWords } = useRandomWordsStore();

onMounted(() => {
   addWordsFromLocalStorage();
   changeIndexWords();
   console.log(generateRandomQuiz(0));
});
</script>

<template>
   <MainLayout> </MainLayout>
</template>

<style scoped></style>
