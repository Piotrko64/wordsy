export type QuestionsQuiz = Array<{
    question: string;
    langQuestion: "wordPL" | "wordEN";
    answers: Array<string>;
    correctAnswer: string;
}>;
