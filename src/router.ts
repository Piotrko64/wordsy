import { createRouter, createWebHistory } from "vue-router";
import FlashcardsComponentVue from "./components/learningPage/modes/flashCards/FlashcardsComponent.vue";
import QuizBoardVue from "./components/learningPage/modes/quizGame/QuizBoard.vue";
import LearningPageVue from "./pages/LearningPage.vue";

const routes = [
    {
        path: "/",
        component: LearningPageVue,
        children: [{ path: "fiszki", component: FlashcardsComponentVue }],
    },
    {
        path: "/",
        component: LearningPageVue,
        children: [{ path: "quiz", component: QuizBoardVue }],
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
