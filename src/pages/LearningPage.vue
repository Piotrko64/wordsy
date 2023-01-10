<script setup lang="ts">
import DropZoneFile from "../components/dropZone/DropZoneFile.vue";
import ButtonsPanel from "../components/learningPage/ButtonsPanel.vue";
import ModeBlock from "../components/learningPage/ModeBlock.vue";
import ModesNavigation from "../components/learningPage/ModesNavigation.vue";
</script>

<template>
    <div>
        <ModeBlock />
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <ButtonsPanel />
        <ModesNavigation />
        <DropZoneFile />
    </div>
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
    transform: translateY(50%);
    opacity: 0;
}
</style>
