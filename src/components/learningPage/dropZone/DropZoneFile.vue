<script setup lang="ts">
import { ref } from 'vue';
import { preventEvent } from '../../../helpers/manageFiles/preventEvent';
import { onChangeInput } from '../../../helpers/manageFiles/inputFile/onChangeInput';
import Title from '../../../ui/Title.vue';
import { handleDropFile } from '../../../helpers/manageFiles/dropZone/handleDropFile';
import BackupPanel from './BackupPanel.vue';
import InfoBackup from './InfoBackup.vue';
import jsonFile from '../../../assets/icons/backup/jsonFile.png';
import { useWordsStore } from '../../../stores/WordsStore';
import { useModalStore } from '../../../stores/ModalStore';

const { updateWordsByUploadWords } = useWordsStore();
const { activationModal } = useModalStore();

const isActiveZone = ref(false);

function turnOnActiveZone() {
   isActiveZone.value = true;
}

function turnOffActiveZone() {
   isActiveZone.value = false;
}

const functionsToUploadWords = {
   ok: () => {
      updateWordsByUploadWords();
      activationModal('Udało się!', `Twoje nowe słówka zostały dodane`);
   },
   fail: () => {
      activationModal(
         'Ups!',
         `Coś poszło nie tak! Sprawdź rozszerzenie oraz poprawność pliku JSON`
      );
   },
};

function handleChangeInputValue(event: Event) {
   onChangeInput(event, functionsToUploadWords);
}

function dropFile(event: DragEvent) {
   handleDropFile(event, functionsToUploadWords);
}
</script>

<template>
   <Title title="Kopia zapasowa" />
   <label
      class="dropZone"
      :class="{ active: isActiveZone }"
      @dragenter="preventEvent($event), turnOnActiveZone()"
      @dragover="preventEvent($event), turnOnActiveZone()"
      @dragleave="preventEvent($event), turnOffActiveZone()"
      @drop="preventEvent($event), turnOffActiveZone(), dropFile($event)"
      @change="handleChangeInputValue($event)"
   >
      <p>Dodaj / przeciągnij plik JSON z twoimi słowkami</p>
      <img :src="jsonFile" />
      <input type="file" class="zoneInput" accept="application/JSON" />
   </label>
   <BackupPanel />
   <InfoBackup />
</template>

<style scoped lang="scss">
.dropZone {
   cursor: pointer;
   border: 3px dashed var(--green);
   min-height: 100px;
   padding: 15px 10px;
   width: 100%;
   border-radius: 5px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   font-size: 1.3rem;
   color: var(--secondGreen);
   transition: all 0.2s ease-in-out;
   display: flex;
   flex-direction: column;
   margin: 25px auto 10px;
   &.active {
      background-color: white;
      color: var(--green);
   }
   .zoneInput {
      display: none;
   }
   img {
      height: 50px;
      margin-top: 15px;
   }
}
</style>
