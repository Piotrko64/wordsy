import { startingWords } from "./../data/startingWords";
import { SingleWord } from "./../@types/WordsType";
import { defineStore } from "pinia";
import { readWordsFromStorage } from "../helpers/localStorage/saveToLocalStorage";
import { saveOwnWordsToLocalStorage } from "./../helpers/localStorage/saveToLocalStorage";

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

        addWordAsFavourite(word: string) {
            const findIndex = this.allWords.findIndex(
                (example) => example.wordPL === word || example.wordEN === word
            );

            if (findIndex === -1) return;

            this.allWords[findIndex].fav = !this.allWords[findIndex].fav;
        },

        addWordsFromLocalStorage() {
            this.ownWords = [...this.ownWords, ...readWordsFromStorage()];
            this.allWords = this.allWords.concat(readWordsFromStorage());
        },

        nextWord() {
            this.progress = Math.min(this.progress + 1, this.allWords.length - 1);
        },
        prevWord() {
            this.progress = Math.max(this.progress - 1, 0);
        },
        nextWordWithoutLimit() {
            if (this.progress === this.allWords.length - 1) {
                this.progress = 0;
            } else {
                this.progress = this.progress + 1;
            }
        },
        changeMode(mode: string) {
            this.mode = mode;
        },
        addNewOwnWord(word: SingleWord) {
            this.ownWords.unshift(word);
            this.allWords.unshift(word);
            saveOwnWordsToLocalStorage(this.ownWords);
        },
    },
});
