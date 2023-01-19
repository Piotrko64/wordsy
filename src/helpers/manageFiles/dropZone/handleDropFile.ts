import { isJsonType } from './isJsonType';
import { validationJSON } from './validationJSON';

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
         console.log(dataJson);
         console.log(validationJSON(dataJson));
      };
   })();

   reader.readAsText(jsonFile);
}
