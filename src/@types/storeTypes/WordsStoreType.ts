import { ListWords } from '@/src/@types/WordsType';

export type WordsStoreType = {
   mode: string;
   startWords: ListWords;
   progress: number;
   ownWords: ListWords;
   allWords: ListWords;
   onlyFavWords: boolean;
   onlyOwnWords: boolean;
};
