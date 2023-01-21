<script setup lang="ts">
import { WordsType } from '@/src/@types/WordsType';
import { ref } from 'vue';
import SingleWord from './SingleWord.vue';
import arrow from '../../assets/icons/whiteArrow.png';

const { words, isOwnWords, title } = defineProps<{
   words: Array<WordsType>;
   isOwnWords?: true;
   title: string;
}>();

const heightList = ref(0);
const container = ref();

function toggleActiveList() {
   if (!heightList.value) {
      heightList.value = container.value.scrollHeight;
   } else {
      heightList.value = 0;
   }
}
</script>

<template>
   <div>
      <h2 class="horizontalSpace" @click="toggleActiveList()">
         {{ title }}
         <img
            :src="arrow"
            alt="Rozwiń"
            :style="{ rotate: heightList ? '270deg' : '90deg' }"
         />
      </h2>
      <div
         class="container"
         ref="container"
         :style="{
            maxHeight: heightList + 'px',
         }"
      >
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
         <h3 class="centerFlex" v-if="!words.length">Brak słów</h3>
      </div>
   </div>
</template>
<style lang="scss" scoped>
.container {
   padding: 5px 5px 10px 5px;
   border-bottom-left-radius: 5px;
   border-bottom-right-radius: 5px;
   background-color: var(--secondGreen);
   max-height: 0px;
   overflow: hidden;
   transition: all 0s linear;
}
h3 {
   padding: 20px;
   font-size: 1.75rem;
   color: white;
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
   cursor: pointer;
   margin-top: 20px;
   background-color: var(--green);
   border-radius: 5px;
   color: white;
   padding-top: 10px;
   padding-bottom: 10px;
   border-bottom-left-radius: 0;
   border-bottom-right-radius: 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
img {
   transition: all 0.2s ease-in-out;
   translate: -8px;
   height: 28px;
   rotate: 90deg;
}
</style>
