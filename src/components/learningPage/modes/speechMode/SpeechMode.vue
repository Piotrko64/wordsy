<script setup lang="ts">
import { useWordsStore } from '../../../../stores/WordsStore';
import { onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

const resultSpeech = ref('');
const isPermission = ref(false);
const isActiveSpeech = ref(false);
const isSpeechRecognition = ref(false);
const { getActualWord } = storeToRefs(useWordsStore());

const SpeechRecognition =
   window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
   isSpeechRecognition.value = false;
}

const recognition = SpeechRecognition && new SpeechRecognition();

function recognitionStart() {
   recognition.interimResults = true;
   recognition.start();
}

onMounted(() => {
   navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((_stream) => {
         isPermission.value = true;
      })
      .catch((err) => {
         console.error(`you got an error: ${err}`);
         isPermission.value = false;
      });

   recognition.lang = 'en-US';

   recognition.addEventListener('result', (e: SpeechRecognitionEvent) => {
      isActiveSpeech.value = true;
      const yourSpeech = e.results[0][0].transcript;
      resultSpeech.value = yourSpeech;
   });
   recognition.addEventListener('start', () => {
      isActiveSpeech.value = true;
   });
   recognition.addEventListener('end', () => {
      isActiveSpeech.value = false;
   });
   if (recognition) {
      isSpeechRecognition.value = true;
   }
   // @ts-ignore
   if (navigator.brave && navigator.brave.isBrave()) {
      isSpeechRecognition.value = false;
   }
});

watch(getActualWord, () => {
   resultSpeech.value = '';
});
</script>

<template>
   <div>
      <div class="whiteBlock info">
         <h2>Kliknij przycisk i powiedz poniższe zdanie / słowo!</h2>
         <p>{{ getActualWord.exampleEN || getActualWord.wordEN }}</p>
      </div>

      <p v-if="!isSpeechRecognition" class="whiteBlock centerFlex redInfo">
         Ten tryb powinno się używać jedynie w przeglądarce Chrome - korzystanie
         na innych może być problematyczne
      </p>
      <p v-if="!isPermission" class="whiteBlock centerFlex redInfo">
         Ten tryb potrzebuje pozwolenia na używanie mikrofonu!
      </p>
      <div class="whiteBlock info flex">
         <div
            v-for="(word, index) in resultSpeech.split(' ')"
            v-if="resultSpeech.length"
         >
            <span
               :style="{
                  backgroundColor:
                     word.toLowerCase() ===
                        getActualWord.exampleEN
                           .split(' ')
                           [index + 1].toLowerCase()
                           .replace(/[^a-zA-Z0-9 | ']/g, '') ||
                     word.toLowerCase() ===
                        getActualWord.exampleEN
                           .split(' ')
                           [index].toLowerCase()
                           .replace(/[^a-zA-Z0-9 | ']/g, '') ||
                     word.toLowerCase() ===
                        getActualWord.exampleEN
                           .split(' ')
                           [index - 1].toLowerCase()
                           .replace(/[^a-zA-Z0-9 | ']/g, '')
                        ? 'var(--green)'
                        : 'var(--red)',
               }"
            >
               {{ word }}
            </span>
         </div>
      </div>
      <button
         @click="recognitionStart()"
         class="actionButton"
         :disabled="isActiveSpeech"
      >
         Kliknij i powiedz
      </button>
   </div>
</template>

<style scoped lang="scss">
.redInfo {
   color: var(--red);
   font-size: 1.45rem;
   text-align: center;
   justify-content: center;
   align-items: center;
   display: flex;
   margin-bottom: 10px;
   padding: 10px;
}
.info {
   text-align: center;
   padding: 15px;
   margin-bottom: 10px;
   p {
      font-size: 1.4rem;
      padding-top: 10px;
   }
   &.flex {
      display: flex;
      min-height: 40px;
      justify-content: center;
      align-items: center;
      span {
         padding: 3px;
         border-radius: 3px;
         margin-right: 4px;
         color: white;
         font-size: 1.2rem;
      }
   }
}
</style>
