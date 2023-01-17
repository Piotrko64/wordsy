import { defineStore } from 'pinia';
import { enWords } from '../data/additionalWords/enWords';
import { getRandomNumber } from '../utils/randomNumber/getRandomNumber';
import { plWords } from './../data/additionalWords/plWords';
import { generateRandomQuiz } from './../helpers/randomQuiz/generateRandomQuiz';

export const useAdditionalMode = defineStore('additionalMode', {
   state: () => ({
      isActive: false,
      indexWord: 99,
   }),
   getters: {
      getObjectWord(state) {
         return {
            plWord: plWords[state.indexWord],
            enWord: enWords[state.indexWord],
         };
      },
      getQuiz(state) {
         return generateRandomQuiz(state.indexWord);
      },
   },
   actions: {
      changeActiveAdditionalModes(boolean: boolean) {
         this.isActive = boolean;
      },
      nextIndexWord() {
         this.indexWord = getRandomNumber(0, plWords.length);
      },
   },
});
