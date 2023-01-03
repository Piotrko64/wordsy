<script setup lang="ts">
import { reactive } from "vue";
import BaseInput from "../ui/form/BaseInput.vue";
import { InputNames } from "../@types/forms/InputNames";
import BaseTextarea from "../ui/form/BaseTextarea.vue";

const dataForm: Record<"wordPL" | "wordEN" | "examplePL" | "exampleEN", string> = reactive({
    wordPL: "",
    wordEN: "",
    examplePL: "",
    exampleEN: "",
});

function updateDataForm(name: InputNames, text: string) {
    dataForm[name] = text;
}

function addNewWord(event: Event) {
    event.preventDefault();
    console.log(dataForm);
}
</script>

<template>
    <form>
        <BaseInput
            name="wordPL"
            title="Słowo po Polsku"
            :min-length="2"
            @update-data="updateDataForm"
            placeholder="Tu napisz wyrażenie po polsku"
            :requiredInput="true"
        />
        <BaseInput
            name="wordEN"
            title="Słowo po Angielsku"
            :min-length="2"
            @update-data="updateDataForm"
            placeholder="A tu jego angielski odpowiednik"
            :requiredInput="true"
        />
        <BaseTextarea
            name="examplePL"
            title="Możesz podać przykład po Polsku"
            @update-data="updateDataForm"
            placeholder=""
        ></BaseTextarea>
        <BaseTextarea
            name="examplePL"
            title="A tu przetłumaczone zdanie na angielski"
            @update-data="updateDataForm"
            placeholder=""
        ></BaseTextarea>
        <button type="submit" class="actionButton" @click="addNewWord($event)">Dodaj nowe wyrażenie</button>
    </form>
</template>

<style scoped lang="scss"></style>
