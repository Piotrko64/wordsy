<script setup lang="ts">
import { onMounted } from 'vue';
import MainLayout from './layout/MainLayout.vue';
import { useWordsStore } from './stores/WordsStore';
import { useRandomWordsStore } from './stores/RandomWordsStore';

const { addWordsFromLocalStorage } = useWordsStore();
const { changeIndexWords } = useRandomWordsStore();

onMounted(() => {
   addWordsFromLocalStorage();
   changeIndexWords();
});
</script>

<template>
   <MainLayout> </MainLayout>
</template>
