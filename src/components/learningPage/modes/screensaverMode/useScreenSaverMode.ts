import NoSleep from 'nosleep.js';
import { storeToRefs } from 'pinia';
import { onMounted, Ref, watch } from 'vue';
import { speakWithTranslate } from './../../../../helpers/speech/speakWithTranslate';
import { useWordsStore } from './../../../../stores/WordsStore';
import { useScreenSaverStore } from './../../../../stores/ScreenSaverStore';
import { stopSpeech } from './../../../../helpers/speech/stopSpeech';

export function useScreenSaverMode(
   isScreensaverMode: Ref<boolean>,
   elementToFullScreen: Ref
) {
   const noSleep = new NoSleep();

   const TIME_TO_READ = 10800;

   const store = useWordsStore();
   const { getActualWord } = storeToRefs(store);
   const storeScreenSaver = useScreenSaverStore();

   const { isActiveSoundMode } = storeToRefs(storeScreenSaver);

   let timer: NodeJS.Timeout;

   function toggleFullScreen() {
      if (elementToFullScreen.value.requestFullscreen) {
         if (!isScreensaverMode.value) {
            elementToFullScreen.value.requestFullscreen();
         } else {
            document.exitFullscreen();
         }
      }
   }

   function goToNext() {
      if (isScreensaverMode.value) {
         timer = setInterval(() => {
            store.nextWordWithoutLimit();
         }, TIME_TO_READ);
      } else {
         clearInterval(timer);
      }
   }

   function otherWord(nextWord: boolean) {
      clearInterval(timer);
      nextWord ? store.nextWordWithoutLimit() : store.prevWordWithoutLimit();
      timer = setInterval(() => {
         store.nextWordWithoutLimit();
      }, TIME_TO_READ);
   }

   watch(isScreensaverMode, () => {
      goToNext();
      if (isScreensaverMode.value && isActiveSoundMode.value) {
         speakWithTranslate(
            store.getActualWord.wordPL,
            store.getActualWord.wordEN
         );
      }
   });

   watch(getActualWord, () => {
      if (isScreensaverMode.value && isActiveSoundMode.value) {
         speakWithTranslate(
            store.getActualWord.wordPL,
            store.getActualWord.wordEN
         );
      }
   });

   onMounted(() => {
      store.shuffleWords();
      document.addEventListener('fullscreenchange', () => {
         isScreensaverMode.value = !isScreensaverMode.value;
         if (isScreensaverMode.value) {
            noSleep.enable();
         } else {
            stopSpeech();
            noSleep.disable();
         }
      });
   });

   return {
      toggleFullScreen,
      otherWord,
   };
}
