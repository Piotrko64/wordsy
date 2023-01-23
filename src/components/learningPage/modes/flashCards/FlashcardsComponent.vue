<script setup lang="ts">
import GestureContainer from '../../../gestureContainer/GestureContainer.vue';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useWordsStore } from '../../../../stores/WordsStore';
import SingleCard from './SingleCard.vue';

const store = useWordsStore();
const { getActualWord } = storeToRefs(store);

onMounted(() => {
   store.restartProgress();
   store.shuffleWords();
});
</script>

<template>
   <div>
      <transition name="fade" mode="out-in">
         <SingleCard
            :wordPL="getActualWord.wordPL"
            :wordEN="getActualWord.wordEN"
            :examplePL="getActualWord.examplePL"
            :exampleEN="getActualWord.exampleEN"
            :fav="getActualWord.fav"
            :key="getActualWord.examplePL"
            :id="getActualWord.id"
         />
      </transition>
   </div>
</template>

<style scoped lang="scss">
.fade-enter-active {
   transition: all 0.1s ease-out;
}

.fade-leave-active {
   transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
   transform: translateY(10%);
   opacity: 0;
}
</style>
