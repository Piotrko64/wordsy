<script setup lang="ts">
import { useWordsStore } from '../../stores/WordsStore';
import { storeToRefs } from 'pinia';
import SingleWord from './SingleWord.vue';
import BackToMainPage from '../../ui/BackToMainPage.vue';
const store = useWordsStore();
const { getOwnWords, getStartWords, isOnlyOwnWords } = storeToRefs(store);
</script>
<template>
   <div>
      <div class="centerFlex flex whiteBlock">
         <div class="text">Wyświetlaj tylko własne słówka</div>

         <div>
            <label class="toggler-wrapper style-1">
               <input
                  type="checkbox"
                  :checked="isOnlyOwnWords"
                  @change="store.toggleOnlyOwnWords()" />

               <div class="toggler-slider"><div class="toggler-knob"></div></div
            ></label>
         </div>
      </div>
      <div>
         <h2>Własne słówka</h2>
         <TransitionGroup name="list" tag="p" class="relative">
            <div v-for="word in getOwnWords" class="block" :key="word.id">
               <SingleWord
                  :id="word.id"
                  :fav="!!word.fav"
                  :wordPL="word.wordPL"
                  :wordEN="word.wordEN"
                  :ownWord="true"
               />
            </div>
         </TransitionGroup>
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
      <BackToMainPage />
   </div>
</template>
<style scoped lang="scss">
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
.flex {
   justify-content: space-between;
   width: 100%;
   padding: 10px;
   flex-direction: row;
   font-size: 1.25rem;
   font-weight: 700;
}
.text {
}
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
