export function speak(text: string, lang: string, onSpeechEnd?: () => void) {
   if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
   }
   const utterance = new SpeechSynthesisUtterance(text);
   console.log(utterance);
   utterance.rate = 1;
   utterance.lang = lang;

   speechSynthesis.speak(utterance);

   if (onSpeechEnd) {
      utterance.onend = () => onSpeechEnd();
   }
}
