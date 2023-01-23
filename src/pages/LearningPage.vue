<script setup lang="ts">
import { storeToRefs } from 'pinia';
import DropZoneFile from '../components/learningPage/dropZone/DropZoneFile.vue';
import NextButton from '../components/learningPage/additionalModes/NextButton.vue';
import ButtonsPanel from '../components/learningPage/ButtonsPanel.vue';
import ModeBlock from '../components/learningPage/ModeBlock.vue';
import ModesNavigation from '../components/learningPage/ModesNavigation.vue';
import RandomWord from '../components/learningPage/randomWord/RandomWord.vue';
import { useAdditionalMode } from '../stores/AdditionalModeStore';
import { useWordsStore } from '../stores/WordsStore';
import OtherOperations from '../components/learningPage/otherOperations/OtherOperations.vue';
import GestureContainer from '../components/gestureContainer/GestureContainer.vue';

const { isActive } = storeToRefs(useAdditionalMode());
const { getListWords } = storeToRefs(useWordsStore());
</script>

<template>
   <div>
      <ModeBlock v-if="!isActive" />
      <GestureContainer>
         <router-view v-slot="{ Component }" v-if="getListWords.length">
            <transition name="fade" mode="out-in">
               <component :is="Component" />
            </transition>
         </router-view>
         <div v-if="!getListWords.length" class="centerFlex whiteBlock">
            BRAK SŁÓW
         </div>
         <ButtonsPanel v-if="!isActive" />
      </GestureContainer>
      <NextButton v-if="isActive" />
      <ModesNavigation />
      <RandomWord />
      <DropZoneFile />
      <OtherOperations />
   </div>
</template>

<style scoped lang="scss">
.fade-enter-active {
   transition: all 0.1s ease;
}
.fade-leave-active {
   transition: all 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
   transform: translateY(50%);
   opacity: 0;
}
.centerFlex {
   color: var(--green);
   font-weight: 900;
   font-size: 2.4rem;
   min-height: 180px;
   margin-bottom: 10px;
}
</style>
