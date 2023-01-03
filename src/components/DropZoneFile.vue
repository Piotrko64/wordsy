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
    <label
        class="dropZone"
        :class="{ active: isActiveZone }"
        @dragenter="preventEvent($event), turnOnActiveZone()"
        @dragover="preventEvent($event), turnOnActiveZone()"
        @dragleave="preventEvent($event), turnOffActiveZone()"
        @drop="preventEvent($event), turnOffActiveZone(), handleDropFile($event)"
        @change="onChangeInput($event)"
    >
        Dodaj / przeciągnij plik JSON z twoimi słowkami
        <input type="file" class="zoneInput" accept="application/JSON" />
    </label>
</template>

<style scoped lang="scss">
.dropZone {
    cursor: pointer;
    border: 3px dashed var(--green);
    height: 100px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.3rem;
    color: var(--secondGreen);
    transition: all 0.2s ease-in-out;
    &.active {
        background-color: white;
        color: var(--green);
    }
    .zoneInput {
        display: none;
    }
}
</style>
