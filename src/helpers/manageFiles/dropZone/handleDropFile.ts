import { isJsonType } from './isJsonType';
import { saveJSONWordstoLocalStorage } from './saveToLocalStorage';

export async function handleDropFile(event: DragEvent, callback: () => void) {
   const files = event.dataTransfer!.files;

   const jsonFile = files[0];
   const reader = new FileReader();

   if (!isJsonType(jsonFile)) {
      return;
   }

   reader.onload = (() => {
      return () => {
         const dataJson = JSON.parse(reader.result as string);

         saveJSONWordstoLocalStorage(dataJson);
         callback();
      };
   })();

   reader.readAsText(jsonFile);
}
