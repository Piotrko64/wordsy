<script setup lang="ts">
import DropZoneFile from "../components/dropZone/DropZoneFile.vue";
import ButtonsPanel from "../components/learningPage/ButtonsPanel.vue";
import ModeBlock from "../components/learningPage/ModeBlock.vue";
import ModesNavigation from "../components/learningPage/ModesNavigation.vue";
</script>

<template>
    <ModeBlock />
    <router-view></router-view>
    <ButtonsPanel />
    <ModesNavigation />
    <DropZoneFile />
</template>

<style scoped lang="scss"></style>
