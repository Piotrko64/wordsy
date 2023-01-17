<script setup lang="ts"></script>

<template>
   <footer>
      <div>Realizacja i pomysł na aplikację:</div>
      <a
         class="name"
         href="https://piotrkolodziejczyk.vercel.app"
         target="_blank"
         rel="noreferrer"
         >Piotr Kołodziejczyk</a
      >
      <img src="/assets/logoPK.png" alt="Logo Piotra Kołodziejczyka" />
   </footer>
</template>

<style scoped lang="scss">
footer {
   margin-top: 35px;
   padding: 20px 10px;
   background-color: white;
   color: var(--green);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 1.35rem;
   .name {
      color: var(--secondGreen);
      text-decoration: underline;
      padding: 15px;
      &:hover {
         text-decoration: none;
      }
   }
   img {
      width: 65px;
   }
}
</style>
