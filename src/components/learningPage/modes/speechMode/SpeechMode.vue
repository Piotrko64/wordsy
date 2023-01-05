<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener("result", (e: any) => {
        console.log(e);
    });
    recognition.onstart = () => {
        console.log("aaaaaaaa");
    };

    recognition.onresult = () => {
        console.log("aaaaaaaa");
    };

    recognition.start();
});
</script>

<template>
    <h2>Tryb mówienia</h2>
    aaaaaa aaaaaaaaa
</template>

<style scoped lang="scss"></style>
