<script setup lang="ts">
import plus from "../assets/icons/navigation/plus.png";
</script>

<template>
    <nav class="horizontalSpace">
        <a href="/" class="logo">Wordsy</a>
        <router-link to="AddWords" class="centerFlex">
            <img :src="plus" alt="Dodaj nowe słowo" />
        </router-link>
    </nav>
    <div class="margin"></div>
</template>

<style scoped lang="scss">
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--green);
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        font-size: 1.8rem;
        font-family: var(--signika);
        font-weight: 700;
        display: inline-block;
        color: white;
        &::first-letter {
            font-family: var(--rubik);
        }
    }
    img {
        height: 40px;
    }
}
.margin {
    height: 65px;
}
</style>
