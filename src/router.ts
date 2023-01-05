import { createRouter, createWebHistory } from "vue-router";
import FlashcardsComponentVue from "./components/learningPage/modes/flashCards/FlashcardsComponent.vue";
import QuizBoardVue from "./components/learningPage/modes/quizGame/QuizBoard.vue";
import VoiceQuizBoardVue from "./components/learningPage/modes/voiceQuizGame/VoiceQuizBoard.vue";
import LearningPageVue from "./pages/LearningPage.vue";
import ScreenSaverMode from "./components/learningPage/modes/screensaverMode/ScreenSaverMode.vue";
import SpeechMode from "./components/learningPage/modes/speechMode/SpeechMode.vue";
import AddWordsPageVue from "./pages/AddWordsPage.vue";

const routes = [
    {
        path: "/",
        component: LearningPageVue,
        redirect: "/Fiszki",
        children: [
            { path: "Fiszki", component: FlashcardsComponentVue },
            { path: "Quiz", component: QuizBoardVue },
            { path: "VoiceQuiz", component: VoiceQuizBoardVue },
            { path: "TrybWygaszacza", component: ScreenSaverMode },
            { path: "TrybSpeech", component: SpeechMode },
        ],
    },
    {
        path: "/AddWords",
        component: AddWordsPageVue,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
