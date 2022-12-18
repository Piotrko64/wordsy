import { describe, it, expect } from "vitest";
import { getRandomNumber } from "./getRandomNumber";

describe("checking function to get random numbers", () => {
    it("should return number from 2 to 4", () => {
        const randomNumber = getRandomNumber(2, 4);

        expect(randomNumber).toBeGreaterThanOrEqual(2);
        expect(randomNumber).toBeLessThanOrEqual(4);
    });

    it("should return number from 0 to 3", () => {
        const randomNumber = getRandomNumber(0, 3);

        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThanOrEqual(3);
    });

    it("should return 1", () => {
        const randomNumber = getRandomNumber(1, 1);

        expect(randomNumber).toBe(1);
    });
});
