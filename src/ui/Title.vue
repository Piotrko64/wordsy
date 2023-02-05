<script setup lang="ts">
const { title } = defineProps<{
   title: string;
}>();
</script>

<template>
   <h3 class="title">
      <span>{{ title }}</span>
   </h3>
</template>
<style lang="scss" scope>
.title {
   margin-top: 55px;
   position: relative;
   z-index: 5;
   margin-bottom: 15px;

   text-align: center;

   font-size: 1.65rem;
   font-weight: 600;
   background-color: white;
   padding: 8px;
   border-radius: 8px;
   border-bottom-left-radius: 0;
   border-bottom-right-radius: 0;
   border: 3px solid var(--secondGreen);

   span {
      z-index: 10;
      // background-color: #ecece7;
      color: var(--secondGreen);
      padding: 0 15px;
   }
   // &::before {
   //    content: '';
   //    height: 4px;
   //    width: 30%;
   //    top: 50%;
   //    left: 0%;
   //    position: absolute;
   //    background-color: var(--secondGreen);
   //    transform: translate(-0%, -50%);
   //    z-index: -5;
   // }
}
@media (min-width: 1200px) {
   .title {
      margin-top: 80px;
      margin-bottom: 25px;
      font-size: 1.9rem;
   }
}
</style>
