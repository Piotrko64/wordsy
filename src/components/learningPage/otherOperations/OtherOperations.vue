<script setup lang="ts">
import Title from '../../../ui/Title.vue';
</script>

<template>
   <Title title="Inne Operacje" />
   <router-link to="AddWords" class="activeButton">
      Dodaj własne słówko
   </router-link>
   <router-link to="List" class="activeButton">
      Zobacz liste słówek
   </router-link>
</template>

<style scoped lang="scss"></style>
