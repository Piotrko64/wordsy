import { NoticeType } from '@/src/@types/modal/NoticeType';
import { isJsonType } from './isJsonType';
import { saveJSONWordstoLocalStorage } from './saveToLocalStorage';

export async function handleDropFile(event: DragEvent, callback: NoticeType) {
   const files = event.dataTransfer!.files;

   const jsonFile = files[0];
   const reader = new FileReader();

   if (!isJsonType(jsonFile)) {
      callback.fail();
      return;
   }

   reader.onload = () => {
      try {
         const dataJson = JSON.parse(reader.result as string);

         if (saveJSONWordstoLocalStorage(dataJson)) {
            callback.ok();
         } else {
            callback.fail();
         }
      } catch (error) {
         callback.fail();
         console.warn('Error:', error);
      }
   };

   reader.readAsText(jsonFile);
}
