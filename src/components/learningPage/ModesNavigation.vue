<script setup lang="ts">
import { useWordsStore } from '../../stores/WordsStore';
import { dataModesNavigation } from '../../data/navigation/dataModesNavigation';
import { dataAdditionalModes } from '../../data/navigation/dataAdditionalModes';
import Title from '../../ui/Title.vue';

const { changeMode } = useWordsStore();
</script>

<template>
   <Title title="Tryby" />
   <div class="flex">
      <div class="width">
         <h4>Tradycyjne</h4>

         <router-link
            v-for="mode in dataModesNavigation"
            :to="'/' + mode.urlName"
            @click="changeMode(mode.name)"
         >
            <div class="horizontalSpace block content">
               <div class="notice" v-if="mode.notice">{{ mode.notice }}</div>
               <img :src="mode.img" :alt="mode.name" />
               {{ mode.name }}
            </div>
         </router-link>
      </div>
      <div class="width">
         <h4 class="alternative">Rozszerzona baza słówek</h4>
         <router-link
            v-for="mode in dataAdditionalModes"
            :to="'/' + mode.urlName"
            @click="changeMode(mode.name)"
         >
            <div class="horizontalSpace block alternative content">
               <img :src="mode.img" :alt="mode.name" />
               {{ mode.name }}
            </div>
         </router-link>
      </div>
   </div>
</template>

<style scoped lang="scss">
.flex {
   display: flex;
   gap: 10px;
   flex-direction: column;
}
.width {
   width: 100%;
   display: flex;
   flex-direction: column;
}
h4 {
   background-color: white;
   color: var(--green);
   padding: 4px 8px;
   border-radius: 4px;
   font-size: 1.1rem;
   width: fit-content;
   margin-bottom: 4px;
   border: 2px solid var(--green);
   &.alternative {
      background-color: var(--green);
      color: white;
      margin-top: 20px;
   }
}
.content {
   display: flex;
   margin-bottom: 5px;
   background-color: white;
   border-radius: 5px;
   align-items: center;
   width: 100%;
   gap: 4px;
   padding-top: 5px;
   padding-bottom: 5px;
   border: 3px solid var(--secondGreen);
   font-size: 1.5rem;
   color: var(--secondGreen);
   &.block {
      position: relative;
   }
   &.alternative {
      background-color: var(--green);
      color: white;
   }
   .notice {
      font-size: 0.95rem;
      position: absolute;
      top: -5px;
      right: 5px;
      color: white;
      padding: 5px;
      border-radius: 5px;
      max-width: 180px;
      background-color: var(--green);
      text-align: center;
      z-index: 4;
   }
   img {
      width: 34px;
      object-fit: contain;
      height: 38px;
      margin-right: 5px;
   }
   a {
      &::first-letter {
         font-weight: 900;
      }
   }
}
@media (min-width: 1450px) {
   .flex {
      flex-direction: row;
   }
   h4 {
      &.alternative {
         margin-top: 0px;
      }
   }
}
</style>
