<script setup lang="ts">
import { speak } from "../../../../helpers/speech/speak";
import micro from "../../../../assets/icons/voice.png";
import reverse from "../../../../assets/icons/reverse.png";
import Star from "../../../../ui/svg/Star.vue";
import { useWordsStore } from "../../../../stores/WordsStore";

interface Props {
    classes: "front" | "back";
    word: string;
    sentence: string;
    lang: string;
    fav?: boolean;
}

const { addWordAsFavourite, getListWords } = useWordsStore();
const { classes, word, sentence, lang, fav } = defineProps<Props>();

function speakSentence(e: MouseEvent, text: string) {
    e.stopPropagation();

    speak(text, lang);
}

function addFavWord() {
    addWordAsFavourite(word);
}
</script>

<template>
    <div :class="classes" class="card">
        <h2>
            {{ word }} <img :src="micro" alt="Powiedz to wyrażenie" @click="speakSentence($event, word)" />
        </h2>
        <div>
            <p>{{ sentence }}</p>
            <img :src="micro" alt="Powiedz całe zdanie" @click="speakSentence($event, sentence)" />
        </div>
        <img :src="reverse" alt="odwróć" class="reverse" />
        <div class="star">
            <Star :isActive="fav" :callback="addFavWord" />
        </div>
    </div>
</template>
<style lang="scss">
.card {
    position: relative;
}
.star {
    position: absolute;
    bottom: 15px;
    right: 15px;
}
.reverse {
    position: absolute;
    bottom: 15px;
    left: 15px;
}
.front,
.back {
    padding: 8px 14px;
    box-sizing: border-box;
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    color: black;
    text-align: center;
    font-size: 1.15rem;
    flex-direction: column;
    backface-visibility: hidden;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
        height: 30px;
        margin-top: 15px;
        transition: all 0.15s ease-in-out;
        &:hover {
            filter: brightness(0.4);
        }
    }
    h2 {
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 25px;
            margin-top: 0px;
            margin-left: 10px;
        }
    }
    p {
        position: relative;
        z-index: 3;
        &::after {
            content: "„";
            position: absolute;
            font-size: 2.2em;
            color: var(--gray);
            left: -25px;
            bottom: -10px;
            z-index: 0;
        }
        &::before {
            content: "”";
            position: absolute;
            font-size: 2.2em;
            color: var(--gray);
            right: -25px;
            top: -10px;
            z-index: 0;
        }
    }
}
.back {
    transform: rotateX(180deg);
}
</style>
