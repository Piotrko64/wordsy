import { createRouter, createWebHistory } from 'vue-router';
import FlashcardsComponentVue from './components/learningPage/modes/flashCards/FlashcardsComponent.vue';
import QuizBoardVue from './components/learningPage/modes/quizGame/QuizBoard.vue';
import VoiceQuizBoardVue from './components/learningPage/modes/voiceQuizGame/VoiceQuizBoard.vue';
import LearningPageVue from './pages/LearningPage.vue';
import ListPage from './pages/ListPage.vue';
import ScreenSaverMode from './components/learningPage/modes/screensaverMode/ScreenSaverMode.vue';
import RandomWordMode from './components/learningPage/additionalModes/modes/randomWord/RandomWordMode.vue';
import RandomQuizMode from './components/learningPage/additionalModes/modes/randomQuiz/RandomQuiz.vue';
import SpeechMode from './components/learningPage/modes/speechMode/SpeechMode.vue';
import AddWordsPageVue from './pages/AddWordsPage.vue';
import { nameAdditionalModes } from './data/navigation/dataAdditionalModes';
import { useAdditionalMode } from './stores/AdditionalModeStore';

const routes = [
   {
      path: '/',
      component: LearningPageVue,
      redirect: '/Fiszki',
      children: [
         { path: 'Fiszki', component: FlashcardsComponentVue },
         { path: 'Quiz', component: QuizBoardVue },
         { path: 'VoiceQuiz', component: VoiceQuizBoardVue },
         { path: 'TrybWygaszacza', component: ScreenSaverMode },
         { path: 'TrybSpeech', component: SpeechMode },
         { path: 'Random', component: RandomWordMode },
         { path: 'RandomQuiz', component: RandomQuizMode },
      ],
   },
   {
      path: '/AddWords',
      component: AddWordsPageVue,
   },
   {
      path: '/List',
      component: ListPage,
   },
];

export const router = createRouter({
   history: createWebHistory(),
   routes,
});

router.beforeEach((to, _from) => {
   const { changeActiveAdditionalModes } = useAdditionalMode();

   window.scrollTo({
      top: 0,
      behavior: 'smooth',
   });
   if (nameAdditionalModes.includes(to.path.slice(1))) {
      changeActiveAdditionalModes(true);
   } else {
      changeActiveAdditionalModes(false);
   }
});
