import { defineStore } from "pinia";
import { startingWords } from "../data/startingWords";

export const useWordsStore = defineStore("counter", {
    state: () => ({
        mode: "Fiszki",
        listWord: startingWords,
        progress: 0,
        ownWords: [],
    }),
    getters: {
        getListWords(state) {
            return state.listWord;
        },

        getMode(state) {
            return state.mode;
        },
        getActualWord(state) {
            return state.listWord[state.progress];
        },
        getProgress(state) {
            return state.progress + 1 + "/" + state.listWord.length;
        },
        getPercentProgress(state) {
            return ((state.progress + 1) / state.listWord.length) * 100 + "%";
        },
    },
    actions: {
        restartProgress() {
            this.progress = 0;
        },

        nextWord() {
            this.progress = Math.min(this.progress + 1, this.listWord.length - 1);
        },
        prevWord() {
            this.progress = Math.max(this.progress - 1, 0);
        },
        changeMode(mode: string) {
            this.mode = mode;
        },
    },
});
