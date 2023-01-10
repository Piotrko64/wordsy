<script setup lang="ts">
import { generateVoiceQuiz } from "../../../../helpers/voiceQuiz/generateVoiceQuiz";
import { useWordsStore } from "../../../../stores/WordsStore";
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";
import { speak } from "../../../../helpers/speech/speak";
import micro from "../../../../assets/icons/voiceWhite.png";

const store = useWordsStore();
const { getListWords, progress } = storeToRefs(store);
const voiceQuizQuestions = ref(generateVoiceQuiz(getListWords.value, true));
const userAnswer = ref<false | string>(false);

function validAnswers(yourAnswer: string) {
    userAnswer.value = yourAnswer;
}

function speakWord(text: string) {
    speak(text, voiceQuizQuestions.value[progress.value].language === "PL" ? "pl" : "en");
}

onMounted(() => {
    store.restartProgress();
});

watch(progress, () => {
    userAnswer.value = false;
});
</script>

<template>
    <div>
        <button class="actionButton" @click="speakWord(voiceQuizQuestions[progress].word)" v-wave>
            <img :src="micro" alt="Powiedz słowo" />
        </button>
        <div class="containerButtons">
            <button
                v-for="answer in voiceQuizQuestions[progress].allAnswers"
                @click="validAnswers(answer)"
                :disabled="!!userAnswer"
                class="answer answerButton"
                v-wave
                :class="{
                    good: userAnswer && voiceQuizQuestions[progress].correctAnswer === answer,
                    bad: userAnswer === answer && voiceQuizQuestions[progress].correctAnswer !== userAnswer,
                }"
            >
                {{ answer }}
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.actionButton {
    margin-top: 15px;
}
button {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 40px;
    }
}
.containerButtons {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 25px 0;
    .answer {
        width: 100%;
        max-width: none;

        flex: none;
    }
}
</style>
