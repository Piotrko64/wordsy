let sayTimeout: NodeJS.Timeout | null = null;

export function speak(text: string, lang: string, onSpeechEnd?: () => void) {
   if (speechSynthesis.speaking) {
      speechSynthesis.cancel();

      if (sayTimeout !== null) clearTimeout(sayTimeout);

      sayTimeout = setTimeout(function () {
         speak(text, lang, onSpeechEnd);
      }, 250);
   } else {
      const message = new SpeechSynthesisUtterance(text);
      message.lang = lang;
      speechSynthesis.speak(message);
      if (onSpeechEnd) {
         message.onend = () => onSpeechEnd();
      }
   }
}
