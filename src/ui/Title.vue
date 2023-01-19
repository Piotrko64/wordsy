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
   margin-top: 40px;
   position: relative;
   z-index: 5;
   margin-bottom: 15px;

   text-align: center;
   color: var(--secondGreen);
   font-size: 2rem;
   font-weight: 600;
   span {
      z-index: 10;
      background-color: #ecece7;
      padding: 0 15px;
   }
   &::before {
      content: '';
      height: 4px;
      width: 100%;
      top: 50%;
      left: 50%;
      position: absolute;
      background-color: var(--secondGreen);
      transform: translate(-50%, -50%);
      z-index: -5;
   }
}
@media (min-width: 1200px) {
   .title {
      margin-top: 60px;
      margin-bottom: 30px;
   }
}
</style>
