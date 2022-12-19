<script setup lang="ts">
import { ref } from "vue";
import SingleSiteCard from "./SingleSiteCard.vue";

const active = ref(false);

interface CardContent {
    wordPL: string;
    wordEN: string;
    examplePL: string;
    exampleEN: string;
}

const { wordPL, wordEN, exampleEN, examplePL } = defineProps<CardContent>();

function toggleActive() {
    active.value = !active.value;
}
</script>

<template>
    <div class="card" :class="{ active }">
        <div class="content" v-wave @click="toggleActive">
            <SingleSiteCard :word="wordPL" :sentence="examplePL" classes="front" lang="pl" />
            <SingleSiteCard :word="wordEN" :sentence="exampleEN" classes="back" lang="en-GB" />
        </div>
    </div>
</template>
<style lang="scss">
.card {
    width: 100%;
    height: 260px;
    border-radius: 5px;
    overflow: hidden;
    perspective: 1000px;
    cursor: pointer;
    .content {
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

        transition: transform 0.3s;
        transform-style: preserve-3d;
    }
}

.card.active .content {
    transform: rotateX(180deg);
    transition: transform 0.4s;
}
</style>
