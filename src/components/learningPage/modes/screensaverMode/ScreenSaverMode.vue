<script setup lang="ts">
import { useWordsStore } from "../../../../stores/WordsStore";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";

const isScreensaverMode = ref(false);
const elementToFullScreen = ref();
const store = useWordsStore();
const { getActualWord } = storeToRefs(store);

let timer: NodeJS.Timeout;

function toggleFullScreen() {
    if (elementToFullScreen.value.requestFullscreen) {
        console.log(isScreensaverMode.value);
        if (!isScreensaverMode.value) {
            elementToFullScreen.value.requestFullscreen();
            isScreensaverMode.value = true;
        } else {
            document.exitFullscreen();
            isScreensaverMode.value = false;
        }
    }
}

function goToNext() {
    if (isScreensaverMode.value) {
        timer = setInterval(() => {
            store.nextWord();
        }, 3000);
    } else {
        clearInterval(timer);
    }
}

watch(isScreensaverMode, () => {
    goToNext();
});
</script>

<template>
    <div class="actionButton" @click="toggleFullScreen()">Włącz tryb Wyświetlacza</div>
    <div ref="elementToFullScreen">
        {{ getActualWord.exampleEN }}

        <div class="actionButton" @click="toggleFullScreen()">Włącz tryb Wyświetlacza</div>
    </div>
</template>
<style lang="scss"></style>
