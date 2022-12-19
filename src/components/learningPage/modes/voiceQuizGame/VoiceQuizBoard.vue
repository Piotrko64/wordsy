<script setup lang="ts">
import { generateVoiceQuiz } from "../../../../helpers/voiceQuiz/generateVoiceQuiz";
import { useWordsStore } from "../../../../stores/WordsStore";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { speak } from "../../../../helpers/speech/speak";
import micro from "../../../../assets/icons/microphone.png";

const store = useWordsStore();
const { getListWords, progress } = storeToRefs(store);
const voiceQuizQuestions = ref(generateVoiceQuiz(getListWords.value));
const userAnswer = ref<false | string>(false);

function validAnswers(yourAnswer: string) {
    userAnswer.value = yourAnswer;
}

function speakWord(text: string) {
    speak(text, voiceQuizQuestions.value[progress.value].language === "PL" ? "pl" : "en-GB");
}

watch(progress, () => {
    userAnswer.value = false;
});
</script>

<template>
    <img :src="micro" alt="Powiedz słowo" @click="speakWord(voiceQuizQuestions[progress].word)" />
    <button
        v-for="answer in voiceQuizQuestions[progress].allAnswers"
        @click="validAnswers(answer)"
        :disabled="!!userAnswer"
        v-wave
        :class="{
            good: userAnswer && voiceQuizQuestions[progress].correctAnswer === answer,
            bad: userAnswer === answer && voiceQuizQuestions[progress].correctAnswer !== userAnswer,
        }"
    >
        {{ answer }}
    </button>
</template>

<style scoped lang="scss">
button {
    border-radius: 5px;
    font-size: 1.2rem;
    font-family: var(--signika);
    border: 3px solid var(--secondGray);
    &.good {
        border: 3px solid green;
    }
    &.bad {
        border: 3px solid red;
    }
}
</style>
