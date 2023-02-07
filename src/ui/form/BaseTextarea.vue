<script setup lang="ts">
import { ref } from 'vue';

const { name, placeholder, value } = defineProps<{
   name: string;
   placeholder?: string;
   title: string;
   value: string;
}>();
const emits = defineEmits(['updateData']);

const input = ref();
</script>
<template>
   <div class="entireTextarea">
      <label for="field">{{ title }}</label>
      <textarea
         ref="input"
         :id="name"
         @input="emits('updateData', name, input.value)"
         :value="value"
         :placeholder="placeholder"
         maxlength="90"
      >
      </textarea>
   </div>
</template>

<style lang="scss">
.entireTextarea {
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   flex-direction: column;
   margin-bottom: 20px;
   label {
      margin-bottom: 5px;
      font-size: 1rem;
      color: var(--green);
   }
   textarea {
      flex-direction: column;
      min-height: 120px;
      width: 100%;
      color: white;
      background-color: white;
      border: 1px solid transparent;
      transition: all 0.3s ease;
      font-size: 1.2rem;
      color: white;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      box-sizing: border-box;
      font-family: 'Lato';
      font-weight: 400;
      resize: none;
      color: black;
      font-family: var(--signika);
      &:focus-visible {
         border-bottom: 4px solid black;
      }
   }
}
</style>
