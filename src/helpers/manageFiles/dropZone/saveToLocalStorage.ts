import { SingleWord } from '@/src/@types/WordsType';
import {
   readWordsFromStorage,
   saveOwnWordsToLocalStorage,
} from './../../localStorage/saveToLocalStorage';
import { validationJSON } from './validationJSON';
import { v4 as uuidv4 } from 'uuid';

export function saveJSONWordstoLocalStorage(dataJson: Array<SingleWord>) {
   if (validationJSON(dataJson)) {
      const ownWords: SingleWord[] = readWordsFromStorage('ownWords');
      const newArrayWithNewId: SingleWord[] = [...ownWords, ...dataJson].map(
         (word) => {
            return { ...word, id: uuidv4() };
         }
      );

      saveOwnWordsToLocalStorage(newArrayWithNewId, 'ownWords');
      return true;
   } else {
      console.log('Struktura pliku jest nie prawidłowa');
      return false;
   }
}
