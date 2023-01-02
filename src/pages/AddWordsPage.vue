<script setup lang="ts">
import { reactive } from "vue";
import BaseInput from "../ui/form/BaseInput.vue";
import { InputNames } from "../@types/forms/InputNames";

const dataForm: Record<"wordPL" | "wordEN" | "examplePL" | "exampleEN", string> = reactive({
    wordPL: "",
    wordEN: "",
    examplePL: "",
    exampleEN: "",
});

function updateDataForm(name: InputNames, text: string) {
    dataForm[name] = text;
}
</script>

<template>
    <BaseInput name="wordPL" title="Słowo po Polsku" :min-length="2" @update-data="updateDataForm" />
    <BaseInput name="wordEN" title="Słowo po Angielsku" :min-length="2" @update-data="updateDataForm" />
</template>

<style scoped lang="scss"></style>
