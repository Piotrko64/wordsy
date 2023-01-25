<script setup lang="ts">
import { useWordsStore } from '../../../stores/WordsStore';
import download from 'downloadjs';
import JSZip from 'jszip';
import backup from '../../../assets/icons/backup/backup.png';
import zip from '../../../assets/icons/backup/zip.png';

const { getOwnWords } = useWordsStore();

function downloadJsonFile() {
   const link = document.createElement('a');
   const file = JSON.stringify(getOwnWords);

   link.setAttribute('href', 'data:text/plain;charset=utf-8,' + file);
   link.setAttribute('download', 'backup.json');
   link.style.display = 'none';

   document.body.appendChild(link);

   link.click();

   document.body.removeChild(link);
}

function downloadZipFile() {
   const zip = new JSZip();
   zip.file('backup.json', JSON.stringify(getOwnWords));

   zip.generateAsync({ type: 'blob' }).then(function (content: Blob) {
      download(content, 'backup.zip', 'application/zip;charset=utf-8');
   });
}
</script>

<template>
   <div class="container">
      <button @click="downloadJsonFile()" class="actionButton">
         Pobierz kopię zapasową słówek jako plik JSON <img :src="backup" />
      </button>
      <button @click="downloadZipFile()" class="actionButton">
         Pobierz kopię słówek jako archiwum .zip <img :src="zip" />
      </button>
   </div>
</template>

<style scoped lang="scss">
.container {
   display: flex;
   gap: 8px;
   flex-direction: column;
   img {
      margin-left: 10px;
      height: 35px;
   }
}
@media (min-width: 970px) {
   .container {
      flex-direction: row;
      img {
         margin-left: 10px;
         height: 35px;
      }
   }
}
</style>
