import { ListWords } from '../../@types/WordsType';

export function getChartData({
   ownWords,
   favWords,
   startWords,
}: Record<'ownWords' | 'favWords' | 'startWords', ListWords>) {
   return {
      labels: [
         'Ulubione',
         'Własne słówka',
         'Własne ulubione',

         'Startowe',
         'Startowe ulubione',
      ],
      datasets: [
         {
            label: 'Ilości słówek',
            backgroundColor: '#2a961a',
            data: [
               favWords.length,
               ownWords.length,
               getAmountOnlyFavWord(ownWords),

               startWords.length,
               getAmountOnlyFavWord(startWords),
            ],
         },
      ],
   };
}

function getAmountOnlyFavWord(arrayWord: ListWords) {
   return arrayWord.filter((word) => word.fav).length;
}
