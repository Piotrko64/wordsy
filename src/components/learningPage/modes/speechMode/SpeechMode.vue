<script setup lang="ts">
import { useWordsStore } from "../../../../stores/WordsStore";
import { onMounted, ref } from "vue";

const resultSpeech = ref("");
const { getActualWord } = useWordsStore();

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function recognitionStart() {
    recognition.start();
}

onMounted(() => {
    console.log(!!SpeechRecognition);
    recognition.interimResults = true;

    recognition.addEventListener("result", (e: SpeechRecognitionEvent) => {
        const yourSpeech = e.results[0][0].transcript;
        resultSpeech.value = yourSpeech;
        console.log(!!recognition);
    });
});
</script>

<template>
    <h2>Tryb mówienia</h2>
    {{ getActualWord.exampleEN }}
    <button @click="recognitionStart()">rere</button>
    {{ resultSpeech }}
</template>

<style scoped lang="scss"></style>
