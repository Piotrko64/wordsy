<script setup lang="ts">
import Title from '../../../ui/Title.vue';
</script>

<template>
   <Title title="Inne Operacje" />
   <div class="flex">
      <router-link to="AddWords" class="actionButton" v-wave>
         Dodaj własne słówko
      </router-link>
      <router-link to="List" class="actionButton" v-wave>
         Zobacz liste słówek
      </router-link>
   </div>
</template>

<style scoped lang="scss">
.flex {
   display: flex;
   flex-direction: column;
   gap: 8px;
   padding-bottom: 40px;
   .actionButton {
      border: 3px solid var(--secondGreen);
      padding: 15px;
   }
   a {
      color: white;
   }
}
@media (min-width: 720px) {
   .flex {
      display: flex;
      flex-direction: row;
   }
}
</style>
