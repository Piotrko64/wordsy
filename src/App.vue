<script setup lang="ts">
import { onMounted } from 'vue';
import MainLayout from './layout/MainLayout.vue';
import { useWordsStore } from './stores/WordsStore';
import { useRandomWordsStore } from './stores/RandomWordsStore';
import { changingTitle } from './helpers/documentTitle/changingTitle';

const { addWordsFromLocalStorage } = useWordsStore();
const { changeIndexWords } = useRandomWordsStore();

onMounted(() => {
   addWordsFromLocalStorage();
   changeIndexWords();
   changingTitle();
});
</script>

<template>
   <MainLayout> </MainLayout>
</template>
