<script setup lang="ts">
import { Ref, ref, watch } from "vue";

const {
    requiredInput,
    typeInput = "text",
    name,
    title,
    minLength,
    placeholder,
} = defineProps<{
    requiredInput?: boolean;
    typeInput?: string;
    name: string;
    title: string;
    minLength: number;
    placeholder: string;
}>();

const emits = defineEmits(["updateData"]);

const errorInputMesage: Ref<string> = ref("");
const isBlur: Ref<boolean> = ref(false);
const valueInput: Ref<string> = ref("");
const isValid: Ref<boolean> = ref(true);

watch([isBlur], () => {
    isValid.value = false;
    if (requiredInput && valueInput.value.trim() === "") {
        console.log(requiredInput);
        errorInputMesage.value = "To pole musi być uzupełnione!";
    } else if (valueInput.value.length < minLength) {
        errorInputMesage.value = `Minimalna liczba znaków to ${minLength}`;
    } else {
        isValid.value = true;
    }
});
</script>

<template>
    <div class="flexInput">
        <label :for="name">{{ title }}</label>
        <input
            @input="emits('updateData', name, valueInput)"
            :type="typeInput"
            v-model="valueInput"
            :id="name"
            @blur="isBlur = true"
            @focus="isBlur = false"
            :placeholder="placeholder"
            maxlength="50"
        />
        <p v-if="!isValid && isBlur">{{ errorInputMesage }}</p>
    </div>
</template>

<style scoped lang="scss">
.flexInput {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
    label {
        margin-bottom: 5px;
        font-size: 1rem;
    }
    input {
        background-color: rgba(255, 255, 255, 0.103);
        border: 1px solid transparent;
        transition: all 0.3s ease;
        font-size: 1.2rem;
        color: white;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        box-sizing: border-box;

        font-weight: 400;
        width: 100%;
        &:focus-visible {
            border: 1px solid rgb(255, 255, 255);
        }
    }
    p {
        margin: 0;
        color: red;
        font-size: 0.9rem;
    }
}
</style>
