import { NoticeType } from '@/src/@types/modal/NoticeType';
import { isJsonType } from '../dropZone/isJsonType';
import { saveJSONWordstoLocalStorage } from '../dropZone/saveToLocalStorage';

export function onChangeInput(event: Event, callback: NoticeType) {
   const target = event.target as HTMLInputElement;
   const file: File = (target.files as FileList)[0];

   if (!isJsonType(file)) {
      callback.fail();
      return;
   }

   const reader = new FileReader();

   function onReaderLoad() {
      const obj = JSON.parse(reader.result as string);

      if (saveJSONWordstoLocalStorage(obj)) {
         callback.ok();
      } else {
         callback.fail();
      }
   }

   reader.onload = onReaderLoad;

   reader.readAsText(file);
}
