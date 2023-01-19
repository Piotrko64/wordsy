<script setup lang="ts">
import { InputNames } from '@/src/@types/forms/InputNames';
import BaseInput from '../../ui/form/BaseInput.vue';
import BaseTextarea from '../../ui/form/BaseTextarea.vue';
import { reactive, ref } from 'vue';
import { useWordsStore } from '../../stores/WordsStore';
import { v4 as uuidv4 } from 'uuid';
import { validatorWord } from './helpers/validatorWord';

type FormInputs = 'wordPL' | 'wordEN' | 'examplePL' | 'exampleEN' | 'id';

const dataForm: Record<FormInputs, string> = reactive({
   id: uuidv4(),
   wordPL: '',
   wordEN: '',
   examplePL: '',
   exampleEN: '',
});

const { addNewOwnWord } = useWordsStore();
const invalidMessage = ref('');
const validMessage = ref('');

function updateDataForm(name: InputNames, text: string) {
   dataForm[name] = text;
}

function addNewWord(event: Event) {
   event.preventDefault();

   const validObject = validatorWord(dataForm);
   invalidMessage.value = '';
   validMessage.value = '';

   if (!validObject.isValid) {
      invalidMessage.value = validObject.msg;
      return;
   }
   validMessage.value = validObject.msg;
   dataForm.id = uuidv4();
   addNewOwnWord(dataForm);
}
</script>

<template>
   <div class="container">
      <form>
         <h1>Dodaj własne słowo</h1>
         <BaseInput
            name="wordPL"
            title="Słowo po Polsku"
            :min-length="1"
            @update-data="updateDataForm"
            placeholder="Tu napisz wyrażenie po polsku"
            :requiredInput="true"
         />
         <BaseInput
            name="wordEN"
            title="Słowo po Angielsku"
            :min-length="1"
            @update-data="updateDataForm"
            placeholder="A tu jego angielski odpowiednik"
            :requiredInput="true"
         />
         <div class="exampleContainer">
            <BaseTextarea
               name="examplePL"
               title="Możesz podać przykład po Polsku"
               @update-data="updateDataForm"
               placeholder="Napisz zdanie zawierające wcześniej napisane słowo"
            ></BaseTextarea>
            <BaseTextarea
               name="exampleEN"
               title="A tu przetłumaczone zdanie na angielski"
               @update-data="updateDataForm"
               placeholder="Napisz tłumaczenie tego zdania na język angielski"
            ></BaseTextarea>
         </div>
         <p v-if="invalidMessage" class="alert">{{ invalidMessage }}</p>
         <p v-if="validMessage" class="ok">{{ validMessage }}</p>
         <button type="submit" class="actionButton" @click="addNewWord($event)">
            Dodaj nowe wyrażenie
         </button>
      </form>
   </div>
</template>

<style scoped lang="scss">
.container {
   display: flex;
   justify-content: center;

   margin-top: 10px;
   min-height: calc(100vh - 120px);
   form {
      h1 {
         color: var(--green);
         margin-bottom: 20px;
      }
      max-width: 1400px;
      width: 100%;
      margin: 0 10px;
      .exampleContainer {
         margin-top: 40px;
      }
      p {
         margin-bottom: 20px;
         font-size: 1.2rem;
         text-align: center;
         &.alert {
            color: red;
         }
         &.ok {
            font-size: 1.5rem;
            color: var(--secondGreen);
         }
      }
   }
}
</style>
