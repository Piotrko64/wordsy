import { isJsonType } from './isJsonType';
import { saveJSONWordstoLocalStorage } from './saveToLocalStorage';

export function handleDropFile(event: DragEvent) {
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
      };
   })();

   reader.readAsText(jsonFile);
}
