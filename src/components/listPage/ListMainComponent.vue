<script setup lang="ts">
import { useWordsStore } from '../../stores/WordsStore';
import { storeToRefs } from 'pinia';
import BackToMainPage from '../../ui/BackToMainPage.vue';
import SingleList from './SingleList.vue';

const store = useWordsStore();
const { getOwnWords, getStartWords, isOnlyOwnWords, getFavWords } =
   storeToRefs(store);
</script>
<template>
   <div class="height">
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
      <SingleList
         title="Własne słówka"
         :isOwnWords="true"
         :words="getOwnWords"
      />

      <SingleList title="Ulubione" :words="getFavWords" />

      <SingleList title="Słówka startowe" :words="getStartWords" />

      <BackToMainPage />
   </div>
</template>
<style scoped lang="scss">
.height {
   min-height: calc(100vh - 200px);
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
