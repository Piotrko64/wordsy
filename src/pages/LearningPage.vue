<script setup lang="ts">
import ButtonsPanel from "../components/learningPage/ButtonsPanel.vue";
import ModeBlock from "../components/learningPage/ModeBlock.vue";
</script>

<template>
    <ModeBlock />
    <router-view></router-view>
    <ButtonsPanel />
</template>

<style scoped lang="scss"></style>
