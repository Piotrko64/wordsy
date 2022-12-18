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
        >
            {{ answer }}
        </button>
    </div>
</template>

<style scoped lang="scss"></style>
