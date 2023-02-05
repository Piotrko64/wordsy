<script setup lang="ts">
import Navigation from './Navigation.vue';
import Footer from './Footer.vue';
import InfoModal from '../ui/modal/InfoModal.vue';
import { useModalStore } from '../stores/ModalStore';
import { storeToRefs } from 'pinia';

const { isActiveModal } = storeToRefs(useModalStore());
</script>

<template>
   <Navigation />
   <div class="horizontalSpace maxWidth">
      <router-view v-slot="{ Component }">
         <transition name="fade" mode="out-in">
            <component :is="Component" />
         </transition>
      </router-view>
   </div>

   <InfoModal v-if="isActiveModal" />

   <Footer />
</template>

<style scoped lang="scss">
.maxWidth {
   max-width: 900px;
   margin: auto;
   background: transparent;
   padding-top: 65px;
}
.fade-enter-active {
   transition: all 0.1s ease;
}
.fade-leave-active {
   transition: all 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
   transform: translateY(70%);
   opacity: 0;
}
</style>
