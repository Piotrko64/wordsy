import { checkSpeechVoice } from './checkSpeechVoice';

export function speak(text: string, lang: string, onSpeechEnd?: () => void) {
   if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
   }
   const utterance = new SpeechSynthesisUtterance(text);

   utterance.rate = 1;
   utterance.lang = lang;

   speechSynthesis.speak(utterance);

   if (onSpeechEnd) {
      utterance.onend = () => onSpeechEnd();
   }
   checkSpeechVoice().then((e) => console.log(e));
}
