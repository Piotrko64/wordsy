import { getRandomNumber } from "../../utils/randomNumber/getRandomNumber";
import { ListWords } from "../../@types/WordsType";

import { shuffleElementsArray } from "../../utils/shuffleElements/shuffleElementsArray";
import { QuestionsQuiz } from "@/src/@types/quizzes/QuestionsQuiz";
import { getAnswersWithOneCorrect } from "../generateAnswers/getAnswersWithOneCorrect";

export function generateQuiz(listWord: ListWords): QuestionsQuiz {
    function getRandomLang(): Record<"questionLang" | "answerLang", "wordPL" | "wordEN"> {
        return {
            questionLang: getRandomNumber(0, 1) ? "wordPL" : "wordEN",
            answerLang: getRandomNumber(0, 1) ? "wordEN" : "wordPL",
        };
    }

    const correctListWord = listWord.map((word) => {
        const { questionLang, answerLang } = getRandomLang();

        return {
            question: word[questionLang],
            langQuestion: questionLang,
            answers: getAnswersWithOneCorrect(word[answerLang], listWord, answerLang, 4),
            correctAnswer: word[answerLang],
        };
    });

    return shuffleElementsArray(correctListWord);
}
