<script setup lang="ts">
import { dataModesNavigation } from "../../data/navigation/dataModesNavigation";
</script>

<template>
    <h3><span>Tryby</span></h3>
    <router-link v-for="mode in dataModesNavigation" :to="'/' + mode.urlName">
        <div class="horizontalSpace">
            <img :src="mode.img" :alt="mode.name" />
            {{ mode.name }}
        </div>
    </router-link>
</template>

<style scoped lang="scss">
div {
    display: flex;
    margin-bottom: 5px;
    background-color: white;
    border-radius: 5px;
    align-items: center;
    width: 100%;
    gap: 4px;
    padding-top: 5px;
    padding-bottom: 5px;
    img {
        width: 34px;
        object-fit: contain;
        height: 38px;
    }
    a {
        font-size: 1.5rem;
        color: var(--green);
        &::first-letter {
            font-weight: 900;
        }
    }
}

h3 {
    margin-top: 20px;
    position: relative;
    z-index: 5;
    margin-bottom: 10px;

    text-align: center;
    color: var(--green);
    font-size: 2rem;
    font-weight: 600;
    span {
        z-index: 10;
        background-color: var(--gray);
        padding: 0 15px;
    }
    &::before {
        content: "";
        height: 4px;
        width: 100%;
        top: 50%;
        left: 50%;
        position: absolute;
        background-color: var(--green);
        transform: translate(-50%, -50%);
        z-index: -5;
    }
}
</style>
