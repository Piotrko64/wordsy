import { startingWords } from './../data/startingWords';
import { WordsType, SingleWord } from './../@types/WordsType';
import { defineStore } from 'pinia';
import {
   readValueFromStorage,
   readWordsFromStorage,
} from '../helpers/localStorage/saveToLocalStorage';
import { saveOwnWordsToLocalStorage } from './../helpers/localStorage/saveToLocalStorage';
import { shuffleElementsArray } from '../utils/shuffleElements/shuffleElementsArray';

export const useWordsStore = defineStore('wordsStore', {
   state: () => ({
      mode: 'Fiszki',
      startWords: startingWords,
      progress: 0,
      ownWords: [] as Array<WordsType>,
      allWords: startingWords,
      onlyFavWords: false,
      onlyOwnWords: false,
   }),
   getters: {
      isOnlyOwnWords(state) {
         return state.onlyOwnWords;
      },
      isFav(state) {
         return state.onlyFavWords;
      },
      getListWords(state) {
         let listWords = state.allWords;
         if (state.onlyOwnWords) {
            listWords = state.ownWords;
         } else {
            listWords = [...state.ownWords, ...state.startWords];
         }
         if (state.onlyFavWords) {
            return listWords.filter((word) => word.fav);
         }
         return listWords;
      },

      getMode(state) {
         return state.mode;
      },
      getActualWord(state) {
         return state.allWords[state.progress];
      },
      getProgress(state) {
         if (state.allWords.length < 1) {
            return '';
         }
         return state.progress + 1 + '/' + state.allWords.length;
      },
      getPercentProgress(state) {
         const lengthWords = state.allWords.length;
         return (
            ((state.progress + 1) / (lengthWords ? lengthWords : 1)) * 100 + '%'
         );
      },
      getOwnWords(state) {
         return state.ownWords;
      },
      getStartWords(state) {
         return state.startWords;
      },
   },
   actions: {
      toggleOnlyOwnWords() {
         this.onlyOwnWords = !this.onlyOwnWords;
         if (this.onlyOwnWords) {
            this.allWords = this.ownWords;
         } else {
            this.allWords = [...this.ownWords, ...this.startWords];
         }
         saveOwnWordsToLocalStorage(this.onlyOwnWords, 'onlyOwnWords');
      },
      filterFavWords(filter: boolean) {
         this.progress = 0;
         this.onlyFavWords = filter;
         this.allWords = (
            this.onlyOwnWords
               ? [...this.ownWords]
               : [...this.ownWords, ...this.startWords]
         ).filter((example) => (filter ? example.fav : true));
         saveOwnWordsToLocalStorage(this.onlyFavWords, 'onlyFavWords');
      },

      deleteWord(id: string) {
         this.ownWords = this.ownWords.filter((word) => word.id !== id);
         this.allWords = this.allWords.filter((word) => word.id !== id);

         saveOwnWordsToLocalStorage(this.ownWords, 'ownWords');
         if (this.ownWords.length === 0) {
            localStorage.removeItem('ownWords');
         }
      },

      shuffleWords() {
         this.allWords = shuffleElementsArray(this.allWords);
      },

      restartProgress() {
         this.progress = 0;
      },

      addWordAsFavourite(id: string) {
         const findIndex = this.allWords.findIndex(
            (example) => example.id === id
         );

         if (findIndex === -1) return;

         this.allWords[findIndex].fav = !this.allWords[findIndex].fav;

         saveOwnWordsToLocalStorage(this.ownWords, 'ownWords');
         saveOwnWordsToLocalStorage(this.startWords, 'startWords');
      },

      updateWordsByUploadWords() {
         this.ownWords = readWordsFromStorage('ownWords');
      },

      addWordsFromLocalStorage() {
         this.startWords =
            readWordsFromStorage('startWords').length === 0
               ? startingWords
               : readWordsFromStorage('startWords');

         this.ownWords =
            readWordsFromStorage('ownWords').length === 0
               ? []
               : readWordsFromStorage('ownWords');

         this.onlyOwnWords = readValueFromStorage('onlyOwnWords');
         this.onlyFavWords = readValueFromStorage('onlyFavWords');

         this.allWords = (
            this.onlyOwnWords
               ? [...this.ownWords]
               : [...this.ownWords, ...this.startWords]
         ).filter((example) => (this.onlyFavWords ? example.fav : true));
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
         saveOwnWordsToLocalStorage(this.ownWords, 'ownWords');
      },
   },
});
