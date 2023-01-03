<script setup lang="ts">
import { useWordsStore } from "../../stores/WordsStore";
import download from "downloadjs";
import JSZip from "JSZip";

const { getOwnWords } = useWordsStore();

function downloadJsonWords() {
    download(JSON.stringify(getOwnWords), "backup.json", "application/json");
}

function downloadZipFile() {
    const zip = new JSZip();
    zip.file("backup.json.", JSON.stringify(getOwnWords));

    zip.generateAsync({ type: "blob" }).then(function (content) {
        download(content, "backup.zip");
    });
}
</script>

<template>
    <button @click="downloadJsonWords()">Pobierz kopię zapasową słówek jako plik JSON</button>
    <button @click="downloadZipFile()">Pobierz kopię słówek jako archiwum .zip</button>
</template>

<style scoped lang="scss"></style>
