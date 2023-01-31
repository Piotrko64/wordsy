import { enWords } from '../../data/additionalWords/enWords';
import { plWords } from '../../data/additionalWords/plWords';

export function findWordTranslate(word: string, lang: 'pl' | 'en') {
   const arrayWords = lang === 'en' ? plWords : enWords;

   const indexWord = arrayWords.findIndex(
      (wordFromArray) => wordFromArray === word
   );

   const arrayOtherWords = lang === 'pl' ? plWords : enWords;

   return ` (${arrayOtherWords[indexWord]})`;
}
