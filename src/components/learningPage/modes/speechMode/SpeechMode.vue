<script setup lang="ts">
import { useWordsStore } from "../../../../stores/WordsStore";
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";

const resultSpeech = ref("");
const isPermission = ref(false);
const { getActualWord } = storeToRefs(useWordsStore());

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function recognitionStart() {
    recognition.start();
}

onMounted(() => {
    navigator.mediaDevices
        .getUserMedia({ video: false, audio: true })
        .then((stream) => {
            console.log(stream);
            isPermission.value = true;
        })
        .catch((err) => {
            console.error(`you got an error: ${err}`);
            isPermission.value = false;
        });

    console.log(!!SpeechRecognition);
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.addEventListener("result", (e: SpeechRecognitionEvent) => {
        const yourSpeech = e.results[0][0].transcript;
        resultSpeech.value = yourSpeech;
        console.log(!!recognition);
    });
});

watch(getActualWord, () => {
    resultSpeech.value = "";
});
</script>

<template>
    <h2>Tryb mówienia</h2>
    <p v-if="!isPermission">Ten tryb potrzebuje pozwolenia na używanie mikrofonu!</p>
    {{ getActualWord.exampleEN }}
    <button @click="recognitionStart()">rere</button>
    <div v-for="(word, index) in resultSpeech.split(' ')">
        <span
            :style="{
                backgroundColor:
                    word.toLowerCase() ===
                    getActualWord.exampleEN
                        .split(' ')
                        [index].toLowerCase()
                        .replace(/[^a-zA-Z0-9 | ']/g, '')
                        ? 'var(--green)'
                        : 'red',
            }"
        >
            {{ word }}
        </span>
    </div>
</template>

<style scoped lang="scss"></style>
