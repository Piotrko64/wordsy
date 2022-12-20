<script setup lang="ts">
import { ref } from "vue";

const isActiveZone = ref(false);

function preventEvent(e: Event) {
    e.preventDefault();
}

function turnOnActiveZone() {
    isActiveZone.value = true;
}

function turnOffActiveZone() {
    isActiveZone.value = false;
}

function handleDrop(event: any) {}
</script>

<template>
    <div
        class="zone"
        @dragenter="preventEvent($event), turnOnActiveZone()"
        @dragover="preventEvent($event), turnOnActiveZone()"
        @dragleave="preventEvent($event), turnOffActiveZone()"
        @drop="preventEvent($event), turnOffActiveZone(), handleDrop($event)"
        :class="{ active: isActiveZone }"
    ></div>
</template>

<style scoped lang="scss">
.zone {
    border: 3px solid black;
    height: 100px;
    width: 200px;
    &.active {
        background-color: aquamarine;
    }
}
</style>
