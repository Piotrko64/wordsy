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
    <div>
        {{ quizQuestions[progress].question }}
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
