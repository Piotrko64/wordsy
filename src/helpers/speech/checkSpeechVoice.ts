export function checkSpeechVoice() {
   return new Promise((res) => {
      setTimeout(() => {
         const langNames = window.speechSynthesis
            .getVoices()
            .map((voice) => voice.lang);
         res(
            langNames.some((lang) => lang === 'pl-PL') &&
               langNames.some((lang) => lang === 'en-US')
         );
      }, 100);
   });
}
