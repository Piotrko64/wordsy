import { VoiceQuiz } from "@/src/@types/quizzes/VoiceQuiz";
import { getRandomNumber } from "../../utils/randomNumber/getRandomNumber";
import { ListWords } from "../../@types/WordsType";
import { getAnswersWithOneCorrect } from "../generateAnswers/getAnswersWithOneCorrect";

export function generateVoiceQuiz(listWord: ListWords, onlyEN: boolean): VoiceQuiz {
    return listWord.map((word) => {
        const language = getRandomNumber(0, 1) && !onlyEN ? "PL" : "EN";
        const languageToAnswers = language === "PL" ? "EN" : "PL";
        const correctAnswer = word[`word${languageToAnswers}`];
        const generateAnswers = getAnswersWithOneCorrect(
            correctAnswer,
            listWord,
            `word${languageToAnswers}`,
            3
        );

        return {
            language,
            word: word[`word${language}`],
            correctAnswer,
            allAnswers: generateAnswers,
        };
    });
}
