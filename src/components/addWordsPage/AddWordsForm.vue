<script setup lang="ts">
import { InputNames } from "@/src/@types/forms/InputNames";
import BaseInput from "../../ui/form/BaseInput.vue";
import BaseTextarea from "../../ui/form/BaseTextarea.vue";
import { reactive } from "vue";
import { useWordsStore } from "../../stores/WordsStore";
import { v4 as uuidv4 } from "uuid";

const dataForm: Record<"wordPL" | "wordEN" | "examplePL" | "exampleEN" | "id", string> = reactive({
    id: uuidv4(),
    wordPL: "",
    wordEN: "",
    examplePL: "",
    exampleEN: "",
});

const { addNewOwnWord, getListWords } = useWordsStore();

function updateDataForm(name: InputNames, text: string) {
    dataForm[name] = text;
}

function addNewWord(event: Event) {
    event.preventDefault();

    addNewOwnWord(dataForm);
}
</script>

<template>
    <div class="container">
        <form>
            <h1>Dodaj własne słowo</h1>
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
            <div class="exampleContainer">
                <BaseTextarea
                    name="examplePL"
                    title="Możesz podać przykład po Polsku"
                    @update-data="updateDataForm"
                    placeholder="Napisz zdanie zawierające wcześniej napisane słowo"
                ></BaseTextarea>
                <BaseTextarea
                    name="exampleEN"
                    title="A tu przetłumaczone zdanie na angielski"
                    @update-data="updateDataForm"
                    placeholder="Napisz tłumaczenie tego zdania na język angielski"
                ></BaseTextarea>
            </div>
            <button type="submit" class="actionButton" @click="addNewWord($event)">
                Dodaj nowe wyrażenie
            </button>
        </form>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    form {
        h1 {
            color: var(--green);
            margin-bottom: 20px;
        }
        max-width: 1400px;
        width: 100%;
        margin: 0 10px;
        .exampleContainer {
            margin-top: 40px;
        }
    }
}
</style>
