<script setup lang="ts">
import { useAdditionalMode } from '../../../../../stores/AdditionalModeStore';
import { storeToRefs } from 'pinia';

const store = useAdditionalMode();
const { getQuiz } = storeToRefs(store);
</script>

<template>
   {{ getQuiz.question }}
   <button v-for="answer in getQuiz.answers">
      {{ answer }}
   </button>
</template>

<style scoped lang="scss"></style>
