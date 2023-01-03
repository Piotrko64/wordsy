export interface WordsType {
    wordPL: string;
    wordEN: string;
    fav?: boolean;
    examplePL: string;
    exampleEN: string;
}

export type SingleWord = Omit<WordsType, "fav">;

export type ListWords = Array<WordsType>;
