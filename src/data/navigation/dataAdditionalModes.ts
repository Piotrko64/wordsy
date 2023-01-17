import random from '../../assets/icons/modes/additional/random.png';
import randomQuiz from '../../assets/icons/modes/additional/randomQuiz.png';

export const dataAdditionalModes = [
   {
      name: 'Losowe Słówko',
      urlName: 'Random',
      img: random,
   },
   {
      name: 'Quiz Losowy',
      urlName: 'Randomquiz',
      img: randomQuiz,
   },
];

export const nameAdditionalModes = dataAdditionalModes.map(
   (route) => route.urlName
);
