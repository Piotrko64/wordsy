<script setup lang="ts">
import { speak } from "../../../../helpers/speech/speak";
import micro from "../../../../assets/icons/microphone.png";

interface Props {
    classes: "front" | "back";
    word: string;
    sentence: string;
    lang: string;
}

const { classes, word, sentence, lang } = defineProps<Props>();

function speakSentence(e: MouseEvent, text: string) {
    e.stopPropagation();

    speak(text, lang);
}
</script>

<template>
    <div :class="classes">
        <h2>
            {{ word }} <img :src="micro" alt="Powiedz to wyrażenie" @click="speakSentence($event, word)" />
        </h2>
        <div>
            <p>{{ sentence }}</p>
            <img :src="micro" alt="Powiedz całe zdanie" @click="speakSentence($event, sentence)" />
        </div>
    </div>
</template>
<style lang="scss">
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
        img {
            height: 25px;
            margin-top: 0px;
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
