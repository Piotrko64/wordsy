<script setup lang="ts">
import { useWordsStore } from "../../stores/WordsStore";
import { dataModesNavigation } from "../../data/navigation/dataModesNavigation";
import Title from "../../ui/Title.vue";

const { changeMode } = useWordsStore();
</script>

<template>
    <Title title="Tryby" />
    <router-link v-for="mode in dataModesNavigation" :to="'/' + mode.urlName" @click="changeMode(mode.name)">
        <div class="horizontalSpace block">
            <div class="notice" v-if="mode.notice">{{ mode.notice }}</div>
            <img :src="mode.img" :alt="mode.name" />
            {{ mode.name }}
        </div>
    </router-link>
</template>

<style scoped lang="scss">
div:not(.notice) {
    display: flex;
    margin-bottom: 5px;
    background-color: white;
    border-radius: 5px;
    align-items: center;
    width: 100%;
    gap: 4px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: 3px solid var(--secondGreen);
    .block {
        position: relative;
    }
    .notice {
        font-size: 0.95rem;
        position: absolute;
        top: -5px;
        right: 5px;
        color: white;
        padding: 5px;
        border-radius: 5px;
        max-width: 180px;
        background-color: var(--green);
        text-align: center;
        z-index: 4;
    }
    img {
        width: 34px;
        object-fit: contain;
        height: 38px;
        margin-right: 5px;
    }
    a {
        font-size: 1.5rem;
        color: var(--secondGreen);
        &::first-letter {
            font-weight: 900;
        }
    }
}
</style>
