import { startingWords } from './../data/startingWords';
import { WordsType } from './../@types/WordsType';
import { defineStore } from 'pinia';
import { GettersWordsStore } from './modules/wordsStore/GettersWordsStore';
import { ActionsWordsStore } from './modules/wordsStore/ActionsWordsStore';

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
   getters: GettersWordsStore,
   actions: ActionsWordsStore,
});
