import { getRandomNumber } from "../../utils/randomNumber/getRandomNumber";
import { ListWords } from "@/src/@types/WordsType";

export function generateFakeAnswers(listWord: ListWords, langWord: "wordPL" | "wordEN", amount: number) {
    const takenAnswersIndex: Array<number> = [];
    const answers = [];

    function getRandomAnswer(): string {
        const randomNumber = getRandomNumber(0, listWord.length - 1);

        if (takenAnswersIndex.includes(randomNumber)) {
            return getRandomAnswer();
        }

        takenAnswersIndex.push(randomNumber);

        return listWord[randomNumber][langWord];
    }

    for (let i = 0; i <= amount - 1; i++) {
        if (i >= listWord.length - 1) {
            break;
        }

        answers.push(getRandomAnswer());
    }

    return answers;
}
