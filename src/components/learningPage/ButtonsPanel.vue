<script setup lang="ts">
import { useWordsStore } from "../../stores/WordsStore";
import arrowLeft from "../../assets/icons/arrowLeft.png";
import arrowRight from "../../assets/icons/arrowRight.png";

const store = useWordsStore();
</script>

<template>
    <div class="buttons">
        <button class="horizontalSpace prev" @click="store.prevWord">
            <img :src="arrowLeft" alt="Poprzedni" />
        </button>

        <button class="horizontalSpace next" @click="store.nextWord">
            <img :src="arrowRight" alt="Następny" />
        </button>
    </div>
</template>

<style scoped lang="scss">
.buttons {
    display: flex;
    width: 100%;
    gap: 5px;
    margin-top: 5px;
    button {
        width: 100%;
        border: none;
        img {
            height: 27px;
        }
    }
}
</style>
