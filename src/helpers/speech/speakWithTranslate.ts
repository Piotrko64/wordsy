import { speak } from './speak';

const TIME_TO_SPEAK = 600;

export function speakWithTranslate(plWord: string, enWord: string) {
   speak(plWord, 'pl-PL', () => {
      setTimeout(() => {
         speechSynthesis.cancel();
         if (document.fullscreenElement && !speechSynthesis.speaking) {
            speak(enWord, 'en-US');
         }
      }, TIME_TO_SPEAK);
   });
}
