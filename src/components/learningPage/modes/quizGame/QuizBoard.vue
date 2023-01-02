<script setup lang="ts">
import { useWordsStore } from "../../../../stores/WordsStore";
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";
import { generateQuiz } from "../../../../helpers/quiz/generateQuiz";

const store = useWordsStore();
const { restartProgress } = store;
const { getListWords, progress } = storeToRefs(store);
const quizQuestions = ref(generateQuiz(getListWords.value));
const userAnswer = ref<false | string>(false);

function checkAnswer(yourAnswer: string) {
    if (yourAnswer === quizQuestions.value[progress.value].correctAnswer) {
        console.log("yeah");
    }
    userAnswer.value = yourAnswer;
}

onMounted(() => {
    restartProgress();
});

watch(progress, () => {
    userAnswer.value = false;
});
</script>

<template>
    <div class="question whiteBlock">
        {{ quizQuestions[progress].question }}
    </div>
    <div class="so">czyli...</div>
    <div class="containerButtons">
        <button
            v-for="answer in quizQuestions[progress].answers"
            @click="checkAnswer(answer)"
            :disabled="!!userAnswer"
            v-wave
            :class="{
                good: userAnswer && quizQuestions[progress].correctAnswer === answer,
                bad: userAnswer === answer && quizQuestions[progress].correctAnswer !== userAnswer,
            }"
        >
            {{ answer }}
        </button>
    </div>
</template>

<style scoped lang="scss">
.question {
    font-size: 1.35rem;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    text-transform: uppercase;
    color: var(--green);
    margin-top: 15px;
    border: 3px solid var(--green);
}
.so {
    text-align: center;
    width: 100%;
    padding: 16px;
    font-size: 1.1rem;
    color: black;
}
.containerButtons {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 30px;
    button {
        border-radius: 5px;
        font-size: 1.25rem;
        font-family: var(--signika);
        border: 3px solid var(secondGray);
        padding: 8px;
        min-width: 220px;
        flex: 1;
        display: flex;
        transition: all 0.1s ease-in-out;
        &.good {
            color: white;
            background-color: var(--green);
            border: 3px solid white;
        }
        &.bad {
            color: white;
            background-color: rgb(230, 70, 70);
            border: 3px solid white;
        }
    }
}
</style>
