import { describe, it, expect } from "vitest";
import { getAnswersWithOneCorrect } from "./getAnswersWithOneCorrect";
import { fakeStartingWordsData } from "../../data/test/fakeStartingWordsData";

describe("checking functions to add one corect answer if is it necessary", () => {
    const fakeCorrectAnswer = "jestem fałszywą odpowiedzią";
    const fakeAnswers = getAnswersWithOneCorrect(fakeCorrectAnswer, fakeStartingWordsData, "wordPL");

    it("should return 4 answers", () => {
        expect(fakeAnswers.length).toEqual(4);
    });

    it("should contain fakeCorrectAnswer", () => {
        expect(fakeAnswers).toContain(fakeCorrectAnswer);
    });

    it("fakeCorrectAnswer should be in quantity: 1", () => {
        const quantityFakeCorrectAnswers = fakeAnswers.filter(
            (answer) => answer === fakeCorrectAnswer
        ).length;

        expect(quantityFakeCorrectAnswers).toBe(1);
    });
});
