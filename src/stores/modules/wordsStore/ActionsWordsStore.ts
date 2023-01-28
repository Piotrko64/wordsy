// @ts-nocheck

import {
   readValueFromStorage,
   readWordsFromStorage,
   saveOwnWordsToLocalStorage,
} from '../../../helpers/localStorage/saveToLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import { shuffleElementsArray } from '../../../utils/shuffleElements/shuffleElementsArray';
import { startingWords } from '../../../data/startingWords';
import { WordsType } from './../../../@types/WordsType';
import { filterArrayById } from '../../../utils/filterArray/filterArrayById';

export const ActionsWordsStore = {
   toggleOnlyOwnWords() {
      this.onlyOwnWords = !this.onlyOwnWords;
      if (this.onlyOwnWords) {
         this.allWords = this.ownWords.filter((example) =>
            this.onlyFavWords ? example.fav : true
         );
      } else {
         this.allWords = [...this.ownWords, ...this.startWords].filter(
            (example) => (this.onlyFavWords ? example.fav : true)
         );
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
      const allWords = [...this.allWords];
      const findIndex = allWords.findIndex((example) => example.id === id);

      if (findIndex === -1) return;

      this.allWords[findIndex].fav = !this.allWords[findIndex].fav;

      saveOwnWordsToLocalStorage(this.ownWords, 'ownWords');
      saveOwnWordsToLocalStorage(this.startWords, 'startWords');
   },

   updateWordsByUploadWords() {
      this.ownWords = filterArrayById(readWordsFromStorage('ownWords'));
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
   prevWordWithoutLimit() {
      if (this.progress === 0) {
         this.progress = this.allWords.length - 1;
      } else {
         this.progress = this.progress - 1;
      }
   },

   changeMode(mode: string) {
      this.mode = mode;
   },
   addNewOwnWord(word: WordsType) {
      const correctWord = { ...word, id: uuidv4() };

      this.ownWords.unshift(correctWord);
      this.allWords.unshift(correctWord);
      saveOwnWordsToLocalStorage(this.ownWords, 'ownWords');
   },
};
