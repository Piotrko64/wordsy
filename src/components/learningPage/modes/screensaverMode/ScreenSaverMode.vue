<script setup lang="ts">
import { useWordsStore } from '../../../../stores/WordsStore';
import { useScreenSaverStore } from '../../../../stores/ScreenSaverStore';
import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { findWallpaper } from '../../../../data/wallpapers/wallpapers';
import { speakWithTranslate } from '../../../../helpers/speech/speakWithTranslate';
import NoSleep from 'nosleep.js';
import leftArrow from '../../../../assets/icons/whiteArrow.png';
import rightArrow from '../../../../assets/icons/whiteArrowRight.png';

import micro from '../../../../assets/icons/screensaver/micro.png';
import microBlock from '../../../../assets/icons/screensaver/microBlock.png';

const noSleep = new NoSleep();

const TIME_TO_READ = 10800;

const isScreensaverMode = ref(false);

const elementToFullScreen = ref();
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
         noSleep.disable();
      }
   });
});
</script>

<template>
   <div>
      <div class="actionButton" @click="toggleFullScreen()">
         Włącz tryb Wygaszacza
      </div>
      <div class="whiteBlock actualWord">
         <h3>Aktualne słówko:</h3>
         <p>{{ getActualWord.wordEN }}</p>
      </div>
      <div
         ref="elementToFullScreen"
         v-show="isScreensaverMode"
         class="centerFlex fullScreen"
         :style="{
            backgroundImage: `url(/assets/wallpapers/${findWallpaper()}.jpg)`,
         }"
      >
         <div class="container">
            <transition name="fade" mode="out-in">
               <div
                  class="whiteCard whiteBlock centerFlex"
                  :key="getActualWord.wordEN"
               >
                  <h2>{{ getActualWord.wordEN }}</h2>
                  <p>{{ getActualWord.exampleEN }}</p>
               </div>
            </transition>
            <div class="equal">czyli...</div>
            <transition name="fade" mode="out-in">
               <div
                  class="whiteCard whiteBlock centerFlex"
                  :key="getActualWord.wordPL"
               >
                  <h2>{{ getActualWord.wordPL }}</h2>
                  <p>{{ getActualWord.examplePL }}</p>
               </div>
            </transition>
         </div>

         <div class="buttonContainer">
            <button @click="otherWord(false)" class="black">
               <img :src="leftArrow" alt="wcześniejsze" />
            </button>

            <div class="actionButton black" @click="toggleFullScreen()">
               Wyłącz tryb Wygaszacza
            </div>
            <button @click="storeScreenSaver.toggleSoundMode()" class="black">
               <img
                  :src="isActiveSoundMode ? micro : microBlock"
                  alt="tryb z czytaniem"
                  class="micro"
               />
            </button>
            <button @click="otherWord(true)" class="black">
               <img :src="rightArrow" alt="następne" />
            </button>
         </div>
      </div>
   </div>
</template>
<style lang="scss">
.fade-enter-active {
   transition: all 0.3s ease-out;
}

.fade-leave-active {
   transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
   transform: rotateX(90deg);
}
.elementToFullScreen {
   background-color: antiquewhite;
}
.actionButton {
   text-align: center;
   color: white;
   padding: 15px 0;
}
.equal {
   text-align: center;
   color: white;
   padding: 10px;
   width: 100%;
   font-size: 1.1rem;
   text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);
   border-radius: 5px;
}
.actualWord {
   text-align: center;
   padding: 15px 5px;
   font-size: 1.1rem;
   margin: 10px 0;
   p {
      margin-top: 5px;
   }
}
.fullScreen {
   background-position: left;
   background-repeat: no-repeat;
   background-size: cover;
   animation: animation 60s infinite;
   transform: scale(1.2);
   @keyframes animation {
      0% {
         background-position: 50% 100%;
      }
      40% {
         background-position: 80% 100%;
      }
      90% {
         background-position: 40% 100%;
      }

      100% {
         background-position: 50% 100%;
      }
   }
   .container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 5px;
      transform: translateY(-20px);
      .whiteCard {
         background-color: white;
         min-width: 65vw;
         text-align: center;
         color: black;
         font-size: 1.2rem;
         min-height: 180px;
         flex-direction: column;
         padding: 8px;
         h2 {
            text-transform: uppercase;
         }
         p {
            margin-top: 15px;
            color: var(--secondGray);
         }
      }
   }
   img {
      height: 18px;
   }
   .micro {
      height: 29px;
   }
   .black {
      padding: 8px;
      background-color: black;
   }
   .actionButton {
      max-width: 200px;
   }
   .buttonContainer {
      position: absolute;
      bottom: 5%;
      width: fit-content;
      display: flex;
      gap: 5px;
   }
}
</style>
