<script setup lang="ts">
import Navigation from './Navigation.vue';
import Footer from './Footer.vue';
</script>

<template>
   <Navigation />
   <div class="horizontalSpace">
      <router-view v-slot="{ Component }">
         <transition name="fade" mode="out-in">
            <component :is="Component" />
         </transition>
      </router-view>
   </div>
   <Footer />
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
   transform: translateY(70%);
   opacity: 0;
}
</style>
