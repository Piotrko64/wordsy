export interface WordsType {
    wordPL: string;
    wordEN: string;
    fav: boolean;
    important: boolean;
    examplePL: string;
    exampleEN: string;
}

export type ListWords = Array<WordsType>;
