<script setup lang="ts">
import { onMounted } from "vue";
import MainLayout from "./layout/MainLayout.vue";
import { useWordsStore } from "./stores/WordsStore";

const { addWordsFromLocalStorage } = useWordsStore();

onMounted(() => {
    addWordsFromLocalStorage();
});
</script>

<template>
    <MainLayout> </MainLayout>
</template>

<style scoped></style>
