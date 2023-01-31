import flashCardsImg from '../../assets/icons/modes/cards.png';
import quizImg from '../../assets/icons/modes/quiz.png';
import quizVoiceImg from '../../assets/icons/modes/voiceQuiz.png';
import display from '../../assets/icons/modes/display.png';

type DataModes = Array<{
   name: string;
   urlName: string;
   img: string;
   notice?: string;
}>;

export const dataModesNavigation: DataModes = [
   {
      name: 'Fiszki',
      urlName: 'fiszki',
      img: flashCardsImg,
   },
   {
      name: 'Quiz',
      urlName: 'quiz',
      img: quizImg,
   },
   {
      name: 'Głosowy Quiz',
      urlName: 'voiceQuiz',
      img: quizVoiceImg,
   },
   {
      name: 'Tryb wygaszacza',
      urlName: 'trybWygaszacza',
      img: display,
   },
   // {
   //     name: "Wymów zdanie",
   //     urlName: "trybSpeech",
   //     img: micro,
   //     notice: "Tylko na Chrome (PC)",
   // },
];

export function findRouteName(name: string) {
   return (
      dataModesNavigation.find((mode) => mode.urlName === name)?.name ||
      'Fiszki'
   );
}
