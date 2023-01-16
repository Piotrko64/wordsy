<script setup lang="ts"></script>

<template>
   <div class="whiteBlock horizontalSpace">
      <h1>O co chodzi z kopią zapasową?</h1>
      <p>
         Wordsy to szybka aplikacja która nie wykorzystuje baz danych. W
         praktyce oznacza to że twoje dane są zapisywane jedynie w pamięci
         podręcznej twojego urządzenia i nie są wysyłane nigdzie indziej. Jeśli
         boisz się o utratę swoich słówek dodanych do Wordsów możesz pobrać
         powyższymi przyciskami kopię zapasową w formie pliku JSON na swoje
         urządzenie. Jeśli z jakiegoś powodu twoje dodane słówka znikną (na
         przykład poprzez czyszczenie przeglądarki) możesz wgrać je za pomocą
         wcześniej wygenerowanego pliku. Wgranie odbywa się poprzez
         "upuszczenie" pliku w pole z zieloną przerywaną ramką
      </p>
   </div>
</template>

<style scoped lang="scss">
.whiteBlock {
   margin-top: 20px;
   padding-top: 15px;
   padding-bottom: 15px;

   h1 {
      margin-bottom: 10px;
      text-align: center;
      color: var(--green);
   }
   p {
      text-align: center;
      font-size: 1.1rem;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
   }
}
</style>
