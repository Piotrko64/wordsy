<script setup lang="ts">
import { useWordsStore } from '../../stores/WordsStore';
import { storeToRefs } from 'pinia';
import SingleWord from './SingleWord.vue';
const store = useWordsStore();
const { getOwnWords, getStartWords, isOnlyOwnWords } = storeToRefs(store);
</script>
<template>
   <div>
      <div class="whiteBlock">
         <div>Wyświetlaj tylko własne słówka</div>

         <label class="toggler-wrapper style-1">
            <input
               type="checkbox"
               :checked="isOnlyOwnWords"
               @change="store.toggleOnlyOwnWords()" />

            <div class="toggler-slider"><div class="toggler-knob"></div></div
         ></label>
      </div>
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
               :ownWord="true"
            />
         </div>
      </div>
   </div>
</template>
<style scoped lang="scss">
.pl {
   color: var(--green);
}
.toggler-wrapper {
   display: block;
   width: 45px;
   height: 25px;
   cursor: pointer;
   position: relative;
}

.toggler-wrapper input[type='checkbox'] {
   display: none;
}

.toggler-wrapper input[type='checkbox']:checked + .toggler-slider {
   background-color: #44cc66;
}

.toggler-wrapper .toggler-slider {
   background-color: #ccc;
   position: absolute;
   border-radius: 100px;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   -webkit-transition: all 300ms ease;
   transition: all 300ms ease;
}

.toggler-wrapper .toggler-knob {
   position: absolute;
   -webkit-transition: all 300ms ease;
   transition: all 300ms ease;
}

.toggler-wrapper.style-1
   input[type='checkbox']:checked
   + .toggler-slider
   .toggler-knob {
   left: calc(100% - 19px - 3px);
}

.toggler-wrapper.style-1 .toggler-knob {
   width: calc(25px - 6px);
   height: calc(25px - 6px);
   border-radius: 50%;
   left: 3px;
   top: 3px;
   background-color: #fff;
}
</style>
