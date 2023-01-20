export function isJsonType(file: File) {
   if (!file.type.match('json.*')) {
      return false;
   }
   return true;
}
