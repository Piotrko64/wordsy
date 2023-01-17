import { SingleWord } from '@/src/@types/WordsType';

const NAME_LOCAL_OWN_WORDS = 'ownWords';

export function saveOwnWordsToLocalStorage(
   words: Array<SingleWord>,
   nameLocalStorage: string
) {
   if (words.length > 0) {
      localStorage.setItem(nameLocalStorage, JSON.stringify(words));
   }
}

export function readWordsFromStorage(nameLocalStorage: string) {
   return JSON.parse(localStorage.getItem(nameLocalStorage)!) || [];
}
