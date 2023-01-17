<script setup lang="ts">
import { useWordsStore } from '../../stores/WordsStore';
import { storeToRefs } from 'pinia';
import Star from '../../ui/svg/Star.vue';
import { WordsType } from '../../@types/WordsType';

const store = useWordsStore();

const { addWordAsFavourite } = store;

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
   <div class="pl">{{ wordPL }}</div>
   <div class="en">{{ wordEN }}</div>
   <Star :isActive="fav" @click-star="addFav" />
   <button v-if="ownWord">Usuń</button>
</template>

<style scoped lang="scss">
.pl {
   color: var(--green);
}
</style>
