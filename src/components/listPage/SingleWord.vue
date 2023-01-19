<script setup lang="ts">
import { useWordsStore } from '../../stores/WordsStore';
import { storeToRefs } from 'pinia';
import Star from '../../ui/svg/Star.vue';
import { WordsType } from '../../@types/WordsType';

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
   <div class="block whiteBlock flex">
      <div class="words">
         <div class="pl">{{ wordPL }}</div>
         <div class="en">{{ wordEN }}</div>
      </div>
      <div>
         <Star :isActive="fav" @click-star="addFav" />
         <button v-if="ownWord" @click="deleteWord(id)">Usuń</button>
      </div>
   </div>
</template>

<style scoped lang="scss">
.block {
   display: flex;
   justify-content: space-between;
}
.pl {
   color: var(--green);
}
.flex {
   display: flex;
   flex-direction: column;
   margin-bottom: 10px;
}
</style>
