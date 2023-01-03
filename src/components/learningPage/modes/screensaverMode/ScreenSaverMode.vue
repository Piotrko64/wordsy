<script setup lang="ts">
import { useWordsStore } from "../../../../stores/WordsStore";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";

const isScreensaverMode = ref(false);
const elementToFullScreen = ref();
const store = useWordsStore();
const { getActualWord } = storeToRefs(store);

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

watch(isScreensaverMode, () => {});
</script>

<template>
    <div class="actionButton" @click="toggleFullScreen()">Włącz tryb Wyświetlacza</div>
    <div ref="elementToFullScreen">
        {{ getActualWord.exampleEN }}

        <div class="actionButton" @click="toggleFullScreen()">Włącz tryb Wyświetlacza</div>
    </div>
</template>
<style lang="scss"></style>
