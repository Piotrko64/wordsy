<script setup lang="ts">
import { useAdditionalMode } from '../../../stores/AdditionalModeStore';
import { storeToRefs } from 'pinia';

const { nextIndexWord } = useAdditionalMode();
</script>

<template>
   <button class="actionButton" v-wave @click="nextIndexWord()">Dalej</button>
</template>

<style scoped lang="scss"></style>
