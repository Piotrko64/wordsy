export function validationJSON(arrayObjectsFromJSON: Array<any>) {
   const neededProperties = [
      'id',
      'wordPL',
      'wordEN',
      'examplePL',
      'exampleEN',
   ];
   let isOkay = true;

   if (!Array.isArray(arrayObjectsFromJSON)) {
      return false;
   }

   for (let i = 0; i++; i <= arrayObjectsFromJSON.length - 1) {
      for (const property in arrayObjectsFromJSON[i]) {
         if (!neededProperties.includes(property)) {
            isOkay = false;
            break;
         }
      }
   }
   return isOkay;
}
