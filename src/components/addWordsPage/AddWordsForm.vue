<script setup lang="ts">
import { InputNames } from '../../@types/forms/InputNames';
import BaseInput from '../../ui/form/BaseInput.vue';
import BaseTextarea from '../../ui/form/BaseTextarea.vue';
import { reactive, ref } from 'vue';
import { useWordsStore } from '../../stores/WordsStore';
import { startingFormData } from '../../data/form/startingFormData';
import { validatorWord } from './helpers/validatorWord';
import BackToMainPage from '../../ui/BackToMainPage.vue';
import { useModalStore } from '../../stores/ModalStore';
import { clearProperties } from './helpers/clearProperties';

type FormInputs = 'wordPL' | 'wordEN' | 'examplePL' | 'exampleEN' | 'id';

const dataForm: Record<FormInputs, string> = reactive(startingFormData);

const { addNewOwnWord } = useWordsStore();
const { activationModal } = useModalStore();

const invalidMessage = ref('');
const validMessage = ref('');
const form = ref();

function updateDataForm(name: InputNames, text: string) {
   dataForm[name] = text;
}

function addNewWord(event: Event, isFav?: true) {
   event.preventDefault();

   const validObject = validatorWord(dataForm);
   invalidMessage.value = '';
   validMessage.value = '';

   if (!validObject.isValid) {
      invalidMessage.value = validObject.msg;
      return;
   }
   validMessage.value = validObject.msg;

   addNewOwnWord({ ...dataForm, fav: isFav });
   activationModal(
      'Yeah! 🎉',
      `Twoje nowe słówko (${dataForm.wordEN}) zostało dodane ${
         isFav ? 'oraz oznaczone jako ulubione' : ''
      }!`
   );

   form.value.reset();
   clearProperties(dataForm);
}
</script>

<template>
   <div class="container">
      <form ref="form">
         <h1>Dodaj własne słowo</h1>
         <BaseInput
            name="wordPL"
            title="Słowo po Polsku"
            :min-length="1"
            @update-data="updateDataForm"
            placeholder="Tu napisz wyrażenie po polsku"
            :requiredInput="true"
            :value="dataForm.wordPL"
         />
         <BaseInput
            name="wordEN"
            title="Słowo po Angielsku"
            :min-length="1"
            @update-data="updateDataForm"
            placeholder="A tu jego angielski odpowiednik"
            :requiredInput="true"
            :value="dataForm.wordEN"
         />
         <div class="exampleContainer">
            <BaseTextarea
               name="examplePL"
               title="Możesz podać przykład po Polsku"
               @update-data="updateDataForm"
               placeholder="Napisz zdanie zawierające wcześniej napisane słowo"
               :value="dataForm.examplePL"
            ></BaseTextarea>
            <BaseTextarea
               name="exampleEN"
               title="A tu przetłumaczone zdanie na angielski"
               @update-data="updateDataForm"
               placeholder="Napisz tłumaczenie tego zdania na język angielski"
               :value="dataForm.exampleEN"
            ></BaseTextarea>
         </div>
         <p v-if="invalidMessage" class="alert">{{ invalidMessage }}</p>
         <p v-if="validMessage" class="ok">{{ validMessage }}</p>
         <div class="buttonContainer">
            <button
               type="submit"
               class="actionButton"
               @click="addNewWord($event)"
            >
               Dodaj nowe wyrażenie
            </button>
            <button
               type="submit"
               class="actionButton favButton"
               @click="addNewWord($event, true)"
            >
               Dodaj je jako ulubione
            </button>
         </div>
         <BackToMainPage />
      </form>
   </div>
</template>

<style scoped lang="scss">
.container {
   display: flex;

   flex-direction: column;
   align-items: center;
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
      .buttonContainer {
         display: flex;
         gap: 10px;
         flex-wrap: wrap;
         justify-content: center;
         align-items: center;

         .actionButton {
            min-width: 270px;
            flex: 1;
            &.favButton {
               background-color: white;
               color: var(--green);
               border: 2px solid var(--secondGreen);
            }
         }
      }
   }
}
</style>
