<script setup lang="ts">
import { ref } from "vue";
import { preventEvent } from "../helpers/manageFiles/preventEvent";
import { onChangeInput } from "../helpers/manageFiles/inputFile/onChangeInput";

import { handleDropFile } from "../helpers/manageFiles/dropZone/handleDropFile";

const isActiveZone = ref(false);

function turnOnActiveZone() {
    isActiveZone.value = true;
}

function turnOffActiveZone() {
    isActiveZone.value = false;
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
