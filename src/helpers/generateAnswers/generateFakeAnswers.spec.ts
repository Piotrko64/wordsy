import { startingWords } from "../../data/startingWords";
import { describe, it, expect } from "vitest";
import { generateFakeAnswers } from "./generateFakeAnswers";

describe("checking functions to generate fake answers", () => {
    it("should return 4 answers", () => {
        const fakeAnswers = generateFakeAnswers(startingWords, "wordPL", 4);

        expect(fakeAnswers.length).toEqual(4);
    });

    it("answers should be always different", () => {
        const fakeAnswers = generateFakeAnswers(startingWords, "wordEN", 4);

        const setFakeAnswers = new Set(fakeAnswers);

        expect([...setFakeAnswers].length).toEqual(4);
    });

    it("should return only two answers", () => {
        const fakeAnswers = generateFakeAnswers(startingWords.slice(0, 3), "wordEN", 4);

        expect(fakeAnswers.length).toEqual(2);
    });
    it("should return only one answer", () => {
        const fakeAnswers = generateFakeAnswers(startingWords.slice(0, 2), "wordEN", 4);

        expect(fakeAnswers.length).toEqual(1);
    });
});
