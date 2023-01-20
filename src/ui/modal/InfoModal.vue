<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useModalStore } from '../../stores/ModalStore';

const { title, description, turnOffModal } = useModalStore();
const { isActiveModal } = storeToRefs(useModalStore());
</script>

<template>
   <div>
      <Teleport to="body">
         <div class="background centerFlex" @click="turnOffModal($event)">
            <transition name="translate" appear>
               <div class="whiteBlock" v-if="isActiveModal">
                  <h2>{{ title }}</h2>
                  <p>{{ description }}</p>
                  <button class="actionButton" @click="turnOffModal()">
                     OK
                  </button>
               </div>
            </transition>
         </div>
      </Teleport>
   </div>
</template>
<style lang="scss">
.translate-enter-active {
   transition: all 0.2s ease;
}
.translate-leave-active {
   transition: all 0.2s ease;
}
.translate-enter-from,
.translate-leave-to {
   transform: translateX(10%);
   opacity: 0;
}
.background {
   position: fixed;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
   background-color: rgba(0, 0, 0, 0.2);
   z-index: 999;
   text-align: center;

   .whiteBlock {
      max-width: 500px;
      padding: 20px;
      border-radius: 10px;
      margin: 10px;
      width: calc(100vw - 20px);
      h2 {
         font-size: 1.9rem;
      }
      p {
         font-size: 1.25rem;
         padding: 20px 5px;
      }
   }
   .actionButton {
      padding: 10px;
   }
}
</style>
