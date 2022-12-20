<script setup lang="ts">
import { e } from "vitest/dist/index-5aad25c1";
import { ref } from "vue";

const isActiveZone = ref(false);

function preventEvent(e: Event) {
    e.stopPropagation();
    e.preventDefault();
}

function turnOnActiveZone() {
    isActiveZone.value = true;
}

function turnOffActiveZone() {
    isActiveZone.value = false;
}

function onChangeInput(event: any) {
    function onReaderLoad(event: any) {
        const obj = JSON.parse(event.target.result);
        console.log(obj);
    }

    const reader = new FileReader();

    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
}

function handleDropFile(event: DragEvent) {
    const files = event.dataTransfer!.files;

    const jsonFile = files[0];
    const reader = new FileReader();

    reader.onload = (() => {
        return () => {
            const dataJson = JSON.parse(reader.result as string);

            console.log(dataJson);
        };
    })();

    reader.readAsText(jsonFile);
}
</script>

<template>
    <input
        type="file"
        class="zone"
        @dragenter="preventEvent($event), turnOnActiveZone()"
        @dragover="preventEvent($event), turnOnActiveZone()"
        @dragleave="preventEvent($event), turnOffActiveZone()"
        @drop="preventEvent($event), turnOffActiveZone(), handleDropFile($event)"
        :class="{ active: isActiveZone }"
        @change="onChangeInput($event)"
    />
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
