<script setup lang="ts">
import { useWordsStore } from "../../../../stores/WordsStore";
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { detect } from "detect-browser";

const resultSpeech = ref("");
const isPermission = ref(false);
const isSpeechRecognition = ref(false);
const { getActualWord } = storeToRefs(useWordsStore());

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

console.log(navigator.userAgent.indexOf("Chrome") != -1);

function recognitionStart() {
    recognition.interimResults = true;
    recognition.start();
}

onMounted(() => {
    const browser = detect();
    console.log(browser!.name);
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

    recognition.lang = "en-US";

    recognition.addEventListener("result", (e: SpeechRecognitionEvent) => {
        const yourSpeech = e.results[0][0].transcript;
        resultSpeech.value = yourSpeech;
        console.log(!!recognition);
    });
    if (recognition) {
        isSpeechRecognition.value = true;
    }
});

watch(getActualWord, () => {
    resultSpeech.value = "";
});
</script>

<template>
    <div>
        <h2>Tryb mówienia</h2>
        <p v-if="!isPermission">Ten tryb potrzebuje pozwolenia na używanie mikrofonu!</p>
        <p v-if="!isSpeechRecognition">
            Ten tryb zaleca się używać w przeglądarce Chrome - korzystanie na innych może być problematyczne
        </p>
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
    </div>
</template>

<style scoped lang="scss"></style>
