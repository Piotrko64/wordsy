import { startingWords } from "./../data/startingWords";
import { SingleWord } from "./../@types/WordsType";
import { defineStore } from "pinia";

export const useWordsStore = defineStore("wordsStore", {
    state: () => ({
        mode: "Fiszki",
        startWords: startingWords,
        progress: 0,
        ownWords: [] as Array<SingleWord>,
        allWords: startingWords,
    }),
    getters: {
        getListWords(state) {
            return state.allWords;
        },

        getMode(state) {
            return state.mode;
        },
        getActualWord(state) {
            return state.allWords[state.progress];
        },
        getProgress(state) {
            return state.progress + 1 + "/" + state.allWords.length;
        },
        getPercentProgress(state) {
            return ((state.progress + 1) / state.allWords.length) * 100 + "%";
        },
        getOwnWords(state) {
            return state.ownWords;
        },
    },
    actions: {
        restartProgress() {
            this.progress = 0;
        },

        nextWord() {
            this.progress = Math.min(this.progress + 1, this.allWords.length - 1);
        },
        prevWord() {
            this.progress = Math.max(this.progress - 1, 0);
        },
        changeMode(mode: string) {
            this.mode = mode;
        },
        addNewOwnWord(word: SingleWord) {
            this.ownWords.unshift(word);
            this.allWords.unshift(word);
        },
    },
});
