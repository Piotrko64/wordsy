export function getRandomNumber(start: number, end: number) {
    return Math.floor(Math.random() * (end + 1 - start) + start);
}
