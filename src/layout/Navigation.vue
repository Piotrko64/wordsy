<script setup lang="ts"></script>

<template>
    <nav class="horizontalSpace">
        <a href="/" class="logo">Wordsy</a>
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
}
.margin {
    height: 65px;
}
</style>
