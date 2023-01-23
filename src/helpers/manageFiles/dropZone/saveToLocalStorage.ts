import { SingleWord } from '@/src/@types/WordsType';
import {
   readWordsFromStorage,
   saveOwnWordsToLocalStorage,
} from './../../localStorage/saveToLocalStorage';
import { validationJSON } from './validationJSON';

export function saveJSONWordstoLocalStorage(dataJson: Array<SingleWord>) {
   if (validationJSON(dataJson)) {
      const ownWords: SingleWord[] = readWordsFromStorage('ownWords');
      const newArrayWithNewId: SingleWord[] = [...ownWords, ...dataJson].map(
         (word) => {
            return { ...word };
         }
      );

      saveOwnWordsToLocalStorage(newArrayWithNewId, 'ownWords');
      return true;
   } else {
      console.log(
         '%c Struktura pliku jest nie prawidłowa',
         'background: red; color: white'
      );
      return false;
   }
}
