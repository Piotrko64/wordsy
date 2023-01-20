import { defineStore } from 'pinia';

export const useModalStore = defineStore('modalStore', {
   state: () => ({
      isActiveModal: false,
      title: 'Hura!!! 🥳🎉👏',
      description: 'Wszystko poszło pomyślnie',
   }),
   getters: {},
   actions: {
      activationModal(title: string, description: string) {
         this.isActiveModal = true;
         this.title = title;
         this.description = description;
      },
      turnOffModal() {
         this.isActiveModal = false;
      },
   },
});
