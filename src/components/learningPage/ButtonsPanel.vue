<script setup lang="ts">
import { useWordsStore } from "../../stores/WordsStore";

const store = useWordsStore();
</script>

<template>
    <div class="buttons">
        <button class="horizontalSpace prev" @click="store.prevWord">prev</button>

        <button class="horizontalSpace next" @click="store.nextWord">next</button>
    </div>
</template>

<style scoped lang="scss"></style>
