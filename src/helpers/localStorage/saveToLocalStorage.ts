import { SingleWord } from "@/src/@types/WordsType";

const NAME_LOCAL_OWN_WORDS = "ownWords";

export function saveOwnWordsToLocalStorage(words: Array<SingleWord>) {
    console.log(words);
    if (words.length > 0) {
        localStorage.setItem(NAME_LOCAL_OWN_WORDS, JSON.stringify(words));
    }
}

export function readWordsFromStorage() {
    console.log(JSON.parse(localStorage.getItem(NAME_LOCAL_OWN_WORDS)!));
    return JSON.parse(localStorage.getItem(NAME_LOCAL_OWN_WORDS)!) || [];
}
