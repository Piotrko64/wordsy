import { enWords } from '../../data/additionalWords/enWords';
import { plWords } from '../../data/additionalWords/plWords';
import { getRandomNumber } from './../../utils/randomNumber/getRandomNumber';

export function generateRandomQuiz(index: number) {
   const langQue = getRandomNumber(0, 1) ? 'pl' : 'en';
   const correctAnswer: string =
      langQue === 'pl' ? enWords[index] : plWords[index];

   return {
      question: langQue === 'pl' ? plWords[index] : enWords[index],
      answers: generateAnswers(langQue === 'pl' ? 'en' : 'pl', correctAnswer),
      correctAnswer,
   };
}

function generateAnswers(lang: 'pl' | 'en', correctAnswer: string) {
   const takenAnswersIndex: Array<number> = [];
   const answers = [];

   function getRandomAnswer(): string {
      const randomNumber = getRandomNumber(0, enWords.length - 1);

      if (takenAnswersIndex.includes(randomNumber)) {
         return getRandomAnswer();
      }

      takenAnswersIndex.push(randomNumber);

      return lang === 'pl' ? enWords[randomNumber] : plWords[randomNumber];
   }

   for (let i = 0; i <= 3; i++) {
      answers.push(getRandomAnswer());
   }

   if (!answers.includes(correctAnswer)) {
      answers[getRandomNumber(0, 3)] = correctAnswer;
   }
   return answers;
}
