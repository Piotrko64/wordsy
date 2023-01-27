import { defineStore } from 'pinia';
import { stopSpeech } from './../helpers/speech/stopSpeech';

export const useScreenSaverStore = defineStore('screenSaverStore', {
   state: () => ({
      isActiveSoundMode: false,
   }),

   actions: {
      toggleSoundMode() {
         this.isActiveSoundMode = !this.isActiveSoundMode;
         if (!this.isActiveSoundMode) {
            stopSpeech();
         }
      },
   },
});
