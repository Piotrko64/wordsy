import { isJsonType } from '../dropZone/isJsonType';

export function onChangeInput(event: Event) {
   const target = event.target as HTMLInputElement;
   const file: File = (target.files as FileList)[0];

   if (!isJsonType(file)) {
      return;
   }

   const reader = new FileReader();

   function onReaderLoad() {
      const obj = JSON.parse(reader.result as string);

      alert(obj);
   }

   reader.onload = onReaderLoad;

   reader.readAsText(file);
}
