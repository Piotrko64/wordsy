import { ListWords } from "@/src/@types/WordsType";
import { getRandomNumber } from "../../utils/randomNumber/getRandomNumber";
import { generateFakeAnswers } from "./generateFakeAnswers";

export function getAnswersWithOneCorrect(
    correctAnswer: string,
    listWord: ListWords,
    langWord: "wordPL" | "wordEN"
) {
    const fakeAnswers = generateFakeAnswers(listWord, langWord);

    if (fakeAnswers.includes(correctAnswer)) {
        return fakeAnswers;
    } else {
        const correctAnswers = [...fakeAnswers];
        correctAnswers[getRandomNumber(0, 3)] = correctAnswer;
        return correctAnswers;
    }
}
