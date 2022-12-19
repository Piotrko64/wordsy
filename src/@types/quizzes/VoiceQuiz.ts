export type VoiceQuiz = {
    language: "PL" | "EN";
    word: string;
    correctAnswer: string;
    allAnswers: string[];
}[];
