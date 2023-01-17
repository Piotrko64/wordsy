<script setup lang="ts">
import { useWordsStore } from '../../stores/WordsStore';
import { storeToRefs } from 'pinia';
import Star from '../../ui/svg/Star.vue';
import SingleWord from './SingleWord.vue';

const store = useWordsStore();
const { getOwnWords, getStartWords } = storeToRefs(store);
</script>

<template>
   <div>
      <div>
         <h2>Własne słówka</h2>
         <div v-for="word in getOwnWords" class="block">
            <SingleWord
               :id="word.id"
               :fav="!!word.fav"
               :wordPL="word.wordPL"
               :wordEN="word.wordEN"
            />
         </div>
      </div>
      <div>
         <h2>Słówka startowe</h2>
         <div v-for="word in getStartWords" class="block">
            <SingleWord
               :id="word.id"
               :fav="!!word.fav"
               :wordPL="word.wordPL"
               :wordEN="word.wordEN"
            />
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.pl {
   color: var(--green);
}
</style>
