import { defineStore } from 'pinia';
import { enWords } from '../data/additionalWords/enWords';
import { getRandomNumber } from '../utils/randomNumber/getRandomNumber';
import { plWords } from './../data/additionalWords/plWords';

export const useAdditionalMode = defineStore('additionalMode', {
   state: () => ({
      isActive: false,
   }),
   getters: {
      getWordsObject(state) {
         return {};
      },
   },
   actions: {
      changeActiveAdditionalModes(boolean: boolean) {
         this.isActive = boolean;
      },
   },
});
