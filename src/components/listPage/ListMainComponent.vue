<script setup lang="ts">
import { useWordsStore } from '../../stores/WordsStore';
import { storeToRefs } from 'pinia';

const store = useWordsStore();
const { getOwnWords, getStartWords } = storeToRefs(store);
</script>

<template>
   <div>
      <div>
         <h2>Własne słówka</h2>
         <div v-for="word in getOwnWords">
            {{ word.wordPL }}
            {{ word.wordEN }}
         </div>
      </div>
      <div>
         <h2>Własne słówka</h2>
         <div v-for="word in getStartWords">
            {{ word.wordPL }}
            {{ word.wordEN }}
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss"></style>
