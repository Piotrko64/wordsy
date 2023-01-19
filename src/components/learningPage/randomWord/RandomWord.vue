<script setup lang="ts">
import Title from '../../../ui/Title.vue';
import { useRandomWordsStore } from '../../../stores/RandomWordsStore';
import { storeToRefs } from 'pinia';

const store = useRandomWordsStore();
const { getWordsObject } = storeToRefs(store);
</script>

<template>
   <Title title="Słowo Dnia" />
   <div
      class="whiteBlock border centerFlex"
      @click="store.changeIndexWords()"
      v-wave
   >
      <div class="word">{{ getWordsObject.enWord }}</div>

      czyli

      <div class="word">{{ getWordsObject.plWord }}</div>
   </div>
</template>

<style scoped lang="scss">
.border {
   border: 3px solid var(--secondGreen);
   min-height: 200px;
   padding: 10px;
   flex-direction: column;
   justify-content: space-evenly;
   font-size: 1.15rem;
   cursor: pointer;
   background-color: var(--green);

   .word {
      font-size: 1.95rem;
      color: white;
      font-weight: 700;
   }
}
</style>
