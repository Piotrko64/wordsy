<script setup lang="ts">
import { useWordsStore } from '../../stores/WordsStore';

import Star from '../../ui/svg/Star.vue';
import trash from '../../assets/icons/trash.png';

const store = useWordsStore();

const { addWordAsFavourite, deleteWord } = store;

const { wordPL, wordEN, fav, id, ownWord } = defineProps<{
   id: string;
   wordPL: string;
   wordEN: string;
   fav: boolean;
   ownWord?: boolean;
}>();

function addFav() {
   addWordAsFavourite(id);
}
</script>

<template>
   <div class="block whiteBlock flex horizontalSpace">
      <div class="words">
         <div class="pl">{{ wordPL }}</div>
         <div class="en">{{ wordEN }}</div>
      </div>
      <div class="operation centerFlex">
         <Star :isActive="fav" @click-star="addFav" />
         <button v-if="ownWord" @click="deleteWord(id)">
            <img :src="trash" alt="Usuń słówko" />
         </button>
      </div>
   </div>
</template>

<style scoped lang="scss">
.operation {
   display: flex;
   gap: 10px;
   width: 20%;
   justify-content: flex-end;
   button {
      border: none;
      img {
         height: 30px;
         transition: all 0.1s ease-in-out;
         &:active {
            transform: scale(1.15);
         }
      }
   }
}
.flex {
   display: flex;

   margin-top: 10px;
}
.words {
   width: 80%;
   word-break: break-all;
}
.block {
   width: 100%;
   display: flex;
   justify-content: space-between;
   flex-direction: row;
   padding-top: 8px;
   padding-bottom: 8px;
   font-size: 1.25rem;
   font-weight: 900;
}
.pl {
   font-weight: 600;
   color: var(--green);
   font-size: 0.9em;
}
</style>
