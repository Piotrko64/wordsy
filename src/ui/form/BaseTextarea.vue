<script setup lang="ts">
import { ref } from "vue";

const { name, placeholder } = defineProps<{
    name: string;
    placeholder?: string;

    title: string;
}>();
const emits = defineEmits(["updateData"]);

const valueInput = ref<string>("");
</script>
<template>
    <div class="entireTextarea">
        <label for="field">{{ name }}</label>
        <textarea
            id="field"
            @input="emits('updateData', name, valueInput)"
            v-model="valueInput"
            :placeholder="placeholder"
            maxlength="300"
        >
        </textarea>
    </div>
</template>

<style lang="scss">
.entireTextarea {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
    label {
        margin-bottom: 5px;
        font-size: 1rem;
    }
    textarea {
        flex-direction: column;
        min-height: 200px;
        width: 100%;
        color: white;
        background-color: rgba(255, 255, 255, 0.103);
        border: 1px solid transparent;
        transition: all 0.3s ease;
        font-size: 1.2rem;
        color: white;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        box-sizing: border-box;
        font-family: "Lato";
        font-weight: 400;
        resize: none;
        &:focus-visible {
            border: 1px solid rgb(255, 255, 255);
        }
    }
}
</style>
