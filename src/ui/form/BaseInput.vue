<script setup lang="ts">
import { Ref, ref, watch } from 'vue';

const {
   requiredInput,
   typeInput = 'text',
   name,
   title,
   minLength,
   placeholder,
   value,
} = defineProps<{
   requiredInput?: boolean;
   typeInput?: string;
   name: string;
   title: string;
   minLength: number;
   placeholder: string;
   value: string;
}>();

const emits = defineEmits(['updateData']);

const errorInputMesage: Ref<string> = ref('');
const isBlur: Ref<boolean> = ref(false);
const input = ref();
const isValid: Ref<boolean> = ref(true);

watch([isBlur], () => {
   isValid.value = false;

   const valueInput = input.value.value;

   if (requiredInput && valueInput.trim() === '') {
      errorInputMesage.value = 'To pole musi być uzupełnione!';
   } else if (valueInput.length < minLength) {
      errorInputMesage.value = `Minimalna liczba znaków to ${minLength}`;
   } else {
      isValid.value = true;
   }
});
</script>

<template>
   <div class="flexInput">
      <label :for="name" data-testid="label">{{ title }}</label>
      <input
         ref="input"
         @input="emits('updateData', name, input.value)"
         :type="typeInput"
         :value="value"
         :id="name"
         @blur="isBlur = true"
         @focus="isBlur = false"
         :placeholder="placeholder"
         maxlength="65"
         :class="{ invalid: !isValid && isBlur }"
         autocomplete="off"
      />

      <p v-if="!isValid && isBlur">{{ errorInputMesage }}</p>
   </div>
</template>

<style scoped lang="scss">
.flexInput {
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   margin-bottom: 20px;
   label {
      margin-bottom: 5px;
      font-size: 1rem;
      color: var(--green);
   }
   input {
      background-color: white;
      border: 4px solid white;
      border-bottom: 4px solid var(--green);
      transition: all 0.3s ease;
      font-size: 1.2rem;
      color: white;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      box-sizing: border-box;
      transition: all 0.2s ease-in-out;
      font-weight: 400;
      width: 100%;
      color: black;
      font-family: var(--signika);
      &.invalid {
         border-bottom: 4px solid red;
      }
      &:focus-visible {
         border-bottom: 4px solid black;
      }
   }
   p {
      margin: 6px 0 0;
      color: red;
      font-size: 0.95rem;
   }
}
</style>
