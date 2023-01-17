<script setup lang="ts">
import { useAdditionalMode } from '../../../../../stores/AdditionalModeStore';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

const store = useAdditionalMode();
const { getQuiz } = storeToRefs(store);

const userAnswer = ref('');

function checkAnswer(yourAnswer: string) {
   userAnswer.value = yourAnswer;
}

watch(getQuiz, () => {
   userAnswer.value = '';
});
</script>

<template>
   <div>
      <div class="que whiteBlock">{{ getQuiz.question }}</div>
      <div class="grid">
         <button
            v-for="answer in getQuiz.answers"
            class="answer"
            @click="checkAnswer(answer)"
            :class="{
               good: userAnswer && getQuiz.correctAnswer === answer,
               bad:
                  userAnswer === answer && getQuiz.correctAnswer !== userAnswer,
            }"
         >
            {{ answer }}
         </button>
      </div>
   </div>
</template>

<style scoped lang="scss">
.que {
   color: var(--green);
   border: 3px solid var(--green);
   font-size: 1.75rem;
   text-align: center;
   padding: 10px;
   font-weight: 900;
}
.grid {
   margin: 10px auto;
   display: grid;
   grid-template-columns: 100%;
   grid-template-rows: 25% 25% 25% 25%;

   .answer {
      font-size: 1.25rem;
      padding: 10px 5px;
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
@media (min-width: 780px) {
   .grid {
      margin: 10px auto;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 50% 50%;

      .answer {
         font-size: 1.25rem;
         padding: 10px 5px;
      }
   }
}
</style>
