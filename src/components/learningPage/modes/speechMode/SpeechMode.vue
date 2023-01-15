<script setup lang="ts">
import { useWordsStore } from "../../../../stores/WordsStore";
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { detect } from "detect-browser";

const resultSpeech = ref("");
const isPermission = ref(false);
const isActiveSpeech = ref(false);
const isSpeechRecognition = ref(false);
const { getActualWord } = storeToRefs(useWordsStore());

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

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
        isActiveSpeech.value = true;
        const yourSpeech = e.results[0][0].transcript;
        resultSpeech.value = yourSpeech;
        console.log(getActualWord.value.exampleEN.split(" ")[0], yourSpeech);
    });
    recognition.addEventListener("start", () => {
        isActiveSpeech.value = true;
    });
    recognition.addEventListener("end", () => {
        isActiveSpeech.value = false;
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
        <div class="whiteBlock info">
            <h2>Kliknij przycisk i powiedz poniższe zdanie / słowo!</h2>
            <p>{{ getActualWord.exampleEN || getActualWord.wordEN }}</p>
        </div>
        <p v-if="!isPermission">Ten tryb potrzebuje pozwolenia na używanie mikrofonu!</p>
        <p v-if="!isSpeechRecognition">
            Ten tryb zaleca się używać w przeglądarce Chrome - korzystanie na innych może być problematyczne
        </p>
        <div class="whiteBlock info flex">
            <div v-for="(word, index) in resultSpeech.split(' ')" v-if="resultSpeech.length">
                <span
                    :style="{
                        backgroundColor:
                            word.toLowerCase() ===
                                getActualWord.exampleEN
                                    .split(' ')
                                    [index + 1].toLowerCase()
                                    .replace(/[^a-zA-Z0-9 | ']/g, '') ||
                            word.toLowerCase() ===
                                getActualWord.exampleEN
                                    .split(' ')
                                    [index].toLowerCase()
                                    .replace(/[^a-zA-Z0-9 | ']/g, '') ||
                            word.toLowerCase() ===
                                getActualWord.exampleEN
                                    .split(' ')
                                    [index - 1].toLowerCase()
                                    .replace(/[^a-zA-Z0-9 | ']/g, '')
                                ? 'var(--green)'
                                : 'var(--red)',
                    }"
                >
                    {{ word }}
                </span>
            </div>
        </div>
        <button @click="recognitionStart()" class="actionButton" :disabled="isActiveSpeech">
            Kliknij i powiedz
        </button>
    </div>
</template>

<style scoped lang="scss">
.info {
    text-align: center;
    padding: 15px;
    margin-bottom: 10px;
    p {
        font-size: 1.4rem;
        padding-top: 10px;
    }
    &.flex {
        display: flex;
        min-height: 40px;
        justify-content: center;
        align-items: center;
        span {
            padding: 3px;
            border-radius: 3px;
            margin-right: 4px;
            color: white;
            font-size: 1.2rem;
        }
    }
}
</style>
