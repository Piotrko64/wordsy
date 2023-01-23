import { WordsStoreType } from '@/src/@types/storeTypes/WordsStoreType';

export const GettersWordsStore = {
   isOnlyOwnWords(state: WordsStoreType) {
      return state.onlyOwnWords;
   },
   isFav(state: WordsStoreType) {
      return state.onlyFavWords;
   },
   getListWords(state: WordsStoreType) {
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

   getMode(state: WordsStoreType) {
      return state.mode;
   },
   getActualWord(state: WordsStoreType) {
      return state.allWords[state.progress];
   },
   getProgress(state: WordsStoreType) {
      if (state.allWords.length < 1) {
         return '';
      }
      return state.progress + 1 + '/' + state.allWords.length;
   },
   getPercentProgress(state: WordsStoreType) {
      const lengthWords = state.allWords.length;
      return (
         ((state.progress + 1) / (lengthWords ? lengthWords : 1)) * 100 + '%'
      );
   },
   getOwnWords(state: WordsStoreType) {
      return state.ownWords;
   },
   getStartWords(state: WordsStoreType) {
      return state.startWords;
   },
   getFavWords(state: WordsStoreType) {
      return state.allWords.filter((word) => word.fav);
   },
};
