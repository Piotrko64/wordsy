<script setup lang="ts">
import { dataModesNavigation } from "../../data/navigation/dataModesNavigation";
</script>

<template>
    <h3><span>Tryby</span></h3>
    <div>
        <router-link v-for="mode in dataModesNavigation" :to="'/' + mode.urlName" class="horizontalSpace">{{
            mode.name
        }}</router-link>
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
    flex-direction: column;

    gap: 4px;
    a {
        width: 100%;
        font-size: 1.5rem;
        background-color: white;
        border-radius: 5px;
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
