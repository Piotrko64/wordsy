import { startingWords } from './../data/startingWords';
import { WordsType, SingleWord } from './../@types/WordsType';
import { defineStore } from 'pinia';
import { readWordsFromStorage } from '../helpers/localStorage/saveToLocalStorage';
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
   }),
   getters: {
      isFav(state) {
         return state.onlyFavWords;
      },
      getListWords(state) {
         if (this.onlyFavWords) {
            return state.allWords.filter((word) => word.fav);
         }
         return state.allWords;
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
         return ((state.progress + 1) / state.allWords.length) * 100 + '%';
      },
      getOwnWords(state) {
         return state.ownWords;
      },
      getStartWords(state) {
         return state.startWords;
      },
   },
   actions: {
      filterFavWords(filter: boolean) {
         this.progress = 0;
         this.onlyFavWords = filter;
         this.allWords = [...this.ownWords, ...this.startWords].filter(
            (example) => (filter ? example.fav : true)
         );
      },

      shuffleWords() {
         this.allWords = shuffleElementsArray(this.allWords);
      },

      restartProgress() {
         this.progress = 0;
      },

      addWordAsFavourite(id: string) {
         console.log('aa');
         const findIndex = this.allWords.findIndex(
            (example) => example.id === id
         );

         if (findIndex === -1) return;

         this.allWords[findIndex].fav = !this.allWords[findIndex].fav;

         saveOwnWordsToLocalStorage(this.ownWords, 'ownWords');
         saveOwnWordsToLocalStorage(this.startWords, 'startWords');
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

         this.allWords = this.ownWords.concat(this.startWords);
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
