<script setup lang="ts">
import backArrow from '../assets/icons/arrowBack.png';
</script>

<template>
   <router-link to="/" class="anchor"
      ><img :src="backArrow" alt="powrót" /> Wróć do strony głównej
   </router-link>
</template>
<style lang="scss" scope>
.anchor {
   margin-top: 15px;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   font-size: 1.25rem;
   color: var(--green);
   transition: all 0.1s ease-in-out;

   width: 100%;
   border-radius: 6px;
   padding: 8px 12px 8px 0;
   padding-bottom: 20px;
   &:hover {
      color: var(--secondGreen);
      img {
         transform: translateX(-2px);
      }
   }
   img {
      transition: all 0.1s ease-in-out;
      height: 35px;
      margin-right: 5px;
   }
}
</style>
