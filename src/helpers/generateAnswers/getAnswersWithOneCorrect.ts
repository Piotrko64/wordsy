import { ListWords } from "@/src/@types/WordsType";
import { getRandomNumber } from "../../utils/randomNumber/getRandomNumber";
import { generateFakeAnswers } from "../generateAnswers/generateFakeAnswers";

export function getAnswersWithOneCorrect(
    correctAnswer: string,
    listWord: ListWords,
    langWord: "wordPL" | "wordEN",
    amount: number
) {
    const fakeAnswers = generateFakeAnswers(listWord, langWord, amount);

    if (fakeAnswers.includes(correctAnswer)) {
        return fakeAnswers;
    } else {
        const correctAnswers = [...fakeAnswers];
        correctAnswers[getRandomNumber(0, amount - 1)] = correctAnswer;
        return correctAnswers;
    }
}
