<script setup lang="ts">
import { useAdditionalMode } from '../../../../../stores/AdditionalModeStore';
import { storeToRefs } from 'pinia';

const store = useAdditionalMode();
const { getQuiz } = storeToRefs(store);
</script>

<template>
   <div>
      {{ getQuiz.question }}
      <button v-for="answer in getQuiz.answers">
         {{ answer }}
      </button>
   </div>
</template>

<style scoped lang="scss"></style>
