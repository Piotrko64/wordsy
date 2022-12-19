export function speak(text: string, lang: string) {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.lang = lang;

    speechSynthesis.speak(utterance);
}
