import { fakeStartingWordsData } from "../../data/test/fakeStartingWordsData";
import { describe, it, expect } from "vitest";
import { shuffleElementsArray } from "./shuffleElementsArray";

describe("checking function to shuffle elements in array ", () => {
    const exampleArray = [0, 1, 2];

    it("arrays should be equal", () => {
        expect(exampleArray).toEqual([0, 1, 2]);
    });

    it("arrays should be different", () => {
        expect(exampleArray).not.toEqual([0]);
    });

    it("arrays should be different", () => {
        const shuffleArray = shuffleElementsArray([...exampleArray]);

        expect(shuffleArray).not.toEqual(exampleArray);
    });

    it("arrays should be different - example with fake words", () => {
        const shuffleArray = shuffleElementsArray([...fakeStartingWordsData]);

        expect(shuffleArray).not.toEqual(fakeStartingWordsData);
    });
});
