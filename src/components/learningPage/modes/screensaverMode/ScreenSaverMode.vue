<script setup lang="ts">
import { useWordsStore } from "../../../../stores/WordsStore";
import { ref, watch, onMounted } from "vue";
import { storeToRefs } from "pinia";

const TIME_TO_READ = 12000;

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
            // isScreensaverMode.value = true;
        } else {
            document.exitFullscreen();
            // isScreensaverMode.value = false;
        }
    }
}

function goToNext() {
    if (isScreensaverMode.value) {
        timer = setInterval(() => {
            store.nextWordWithoutLimit();
        }, TIME_TO_READ);
    } else {
        clearInterval(timer);
    }
}

watch(isScreensaverMode, () => {
    goToNext();
});

onMounted(() => {
    document.addEventListener("fullscreenchange", () => {
        isScreensaverMode.value = !isScreensaverMode.value;
    });
});
</script>

<template>
    <div class="actionButton" @click="toggleFullScreen()">Włącz tryb Wygaszacza</div>
    <div class="whiteBlock actualWord">
        <h3>Aktualne słówko:</h3>
        <p>{{ getActualWord.wordEN }}</p>
    </div>
    <div ref="elementToFullScreen" v-show="isScreensaverMode" class="centerFlex fullScreen">
        <div class="container">
            <transition name="fade" mode="out-in">
                <div class="whiteCard whiteBlock centerFlex" :key="getActualWord.wordEN">
                    <h2>{{ getActualWord.wordEN }}</h2>
                    <p>{{ getActualWord.exampleEN }}</p>
                </div>
            </transition>
            <div class="equal">czyli...</div>
            <transition name="fade" mode="out-in">
                <div class="whiteCard whiteBlock centerFlex" :key="getActualWord.wordPL">
                    <h2>{{ getActualWord.wordPL }}</h2>
                    <p>{{ getActualWord.examplePL }}</p>
                </div>
            </transition>
        </div>
        <div class="actionButton offButton" @click="toggleFullScreen()">Wyłącz tryb Wygaszacza</div>
    </div>
</template>
<style lang="scss">
.fade-enter-active {
    transition: all 0.4s ease-out;
}

.fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: rotateX(90deg);
}
.elementToFullScreen {
    background-color: antiquewhite;
}
.actionButton {
    text-align: center;
    color: white;
    padding: 15px 0;
}
.equal {
    text-align: center;
    color: white;
    padding: 10px;
    width: 100%;
    font-size: 1.1rem;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);
    border-radius: 5px;
}
.actualWord {
    text-align: center;
    padding: 15px 5px;
    font-size: 1.1rem;
    margin: 10px 0;
    p {
        margin-top: 5px;
    }
}
.fullScreen {
    background-image: url("/assets/wallpapers/mountains.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 5px;
        .whiteCard {
            background-color: white;
            min-width: 65vw;
            text-align: center;
            color: black;
            font-size: 1.2rem;
            height: clamp(170px, 15vh, 450px);
            flex-direction: column;
            padding: 8px;
            h2 {
                text-transform: uppercase;
            }
            p {
                margin-top: 15px;
                color: var(--secondGray);
            }
        }
    }
    .offButton {
        position: absolute;
        bottom: 5%;
        width: fit-content;
        padding: 15px;
        background-color: black;
    }
}
</style>
