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

   for (let i = 0; i <= arrayObjectsFromJSON.length - 1; i++) {
      for (let j = 0; j <= neededProperties.length - 1; j++) {
         if (!arrayObjectsFromJSON[i].hasOwnProperty(neededProperties[j])) {
            isOkay = false;
            break;
         }
      }
   }
   return isOkay;
}
