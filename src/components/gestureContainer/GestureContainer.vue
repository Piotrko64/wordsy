<script setup lang="ts">
import { useWordsStore } from '../../stores/WordsStore';
import { ref } from 'vue';

const MIN_X_DIFFERENCE = 20;
const MAX_Y_DIFFERENCE = 160;

const startGesture = ref([0, 0]);
const endGesture = ref([0, 0]);

const { nextWord, prevWord } = useWordsStore();

function onStartGesture(event: TouchEvent) {
   const { clientX, clientY } = event.touches[0];
   startGesture.value = [clientX, clientY];
}

function onEndGesture(event: TouchEvent) {
   const { clientX, clientY } = event.changedTouches[0];
   endGesture.value = [clientX, clientY];

   const differenceX = startGesture.value[0] - endGesture.value[0];
   const differenceY = startGesture.value[1] - endGesture.value[1];

   if (
      Math.abs(differenceX) > MIN_X_DIFFERENCE &&
      Math.abs(differenceY) < MAX_Y_DIFFERENCE
   ) {
      if (differenceX > 0) {
         nextWord();
      } else {
         prevWord();
      }
   }
}
</script>

<template>
   <div
      class="container"
      @touchstart="onStartGesture($event)"
      @touchend="onEndGesture($event)"
   >
      <slot></slot>
   </div>
</template>
