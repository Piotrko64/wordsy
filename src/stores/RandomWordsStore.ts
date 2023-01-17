import { defineStore } from 'pinia';
import { enWords } from '../data/additionalWords/enWords';
import { getRandomNumber } from '../utils/randomNumber/getRandomNumber';
import { plWords } from './../data/additionalWords/plWords';

export const useRandomWordsStore = defineStore('randomWordsStore', {
   state: () => ({
      indexRandomWords: 2,
   }),
   getters: {
      getWordsObject(state) {
         return {
            plWord: plWords[state.indexRandomWords],
            enWord: enWords[state.indexRandomWords],
         };
      },
   },
   actions: {
      changeIndexWords() {
         this.indexRandomWords = getRandomNumber(0, plWords.length);
      },
   },
});
