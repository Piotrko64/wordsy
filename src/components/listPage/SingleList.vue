<script setup lang="ts">
import { WordsType } from '@/src/@types/WordsType';
import SingleWord from './SingleWord.vue';

const { words, isOwnWords, title } = defineProps<{
   words: Array<WordsType>;
   isOwnWords?: true;
   title: string;
}>();
console.log(words);
</script>

<template>
   <div>
      <h2 class="horizontalSpace">{{ title }}</h2>
      <div class="container">
         <TransitionGroup name="list" tag="p" class="relative">
            <div v-for="word in words" class="block" :key="word.id">
               <SingleWord
                  :id="word.id"
                  :fav="!!word.fav"
                  :wordPL="word.wordPL"
                  :wordEN="word.wordEN"
                  :ownWord="isOwnWords"
               />
            </div>
         </TransitionGroup>
      </div>
   </div>
</template>
<style lang="scss" scoped>
.container {
   padding: 5px 5px 10px 5px;
   border-bottom-left-radius: 5px;
   border-bottom-right-radius: 5px;
   background-color: var(--secondGreen);
}
.relative {
   position: relative;
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
   transition: all 0.3s ease;
   width: 100%;
}

.list-enter-from,
.list-leave-to {
   opacity: 0;
   transform: translateX(100px);
}

.list-leave-active {
   position: absolute;
}
h2 {
   margin-top: 20px;
   background-color: var(--green);
   border-radius: 5px;
   color: white;
   padding-top: 10px;
   padding-bottom: 10px;
   border-bottom-left-radius: 0;
   border-bottom-right-radius: 0;
}
</style>
