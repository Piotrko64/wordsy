<script setup lang="ts">
import { useAdditionalMode } from '../../../../../stores/AdditionalModeStore';
import { storeToRefs } from 'pinia';

const store = useAdditionalMode();
const { getObjectWord } = storeToRefs(store);
</script>

<template>
   <transition name="fade" mode="out-in">
      <div class="whiteBlock horizontalSpace" :key="getObjectWord.plWord">
         <h2>{{ getObjectWord.enWord }}</h2>
         <div>czyli</div>
         <h2>{{ getObjectWord.plWord }}</h2>
      </div>
   </transition>
</template>

<style scoped lang="scss">
.fade-enter-active {
   transition: all 0.1s ease-out;
}

.fade-leave-active {
   transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
   transform: translateY(-5%);
   opacity: 0.3;
}
.whiteBlock {
   min-height: 195px;
   padding-top: 5px;
   padding-bottom: 5px;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;
   border: 3px solid var(--secondGreen);
   margin-bottom: 10px;
   h2 {
      color: var(--green);
      font-size: 2.2rem;
   }
}
</style>
