import { SingleWord } from '@/src/@types/WordsType';

export function saveOwnWordsToLocalStorage(
   value: Array<SingleWord> | boolean,
   nameLocalStorage: string
) {
   if (Array.isArray(value) ? value.length > 0 : true) {
      localStorage.setItem(nameLocalStorage, JSON.stringify(value));
   }
}

export function readWordsFromStorage(nameLocalStorage: string) {
   return JSON.parse(localStorage.getItem(nameLocalStorage)!) || [];
}
export function readValueFromStorage(nameLocalStorage: string) {
   return !!JSON.parse(localStorage.getItem(nameLocalStorage)!);
}
