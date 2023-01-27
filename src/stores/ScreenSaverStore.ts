import { defineStore } from 'pinia';

export const useScreenSaverStore = defineStore('screenSaverStore', {
   state: () => ({
      isActiveSoundMode: false,
   }),

   actions: {
      toggleSoundMode() {
         this.isActiveSoundMode = !this.isActiveSoundMode;
         if (!this.isActiveSoundMode) {
            window.speechSynthesis.cancel();
         }
      },
   },
});
