export function validatorWord(
   dataForm: Record<
      'wordPL' | 'wordEN' | 'examplePL' | 'exampleEN' | 'id',
      string
   >
) {
   if (dataForm.wordPL.length < 1 || dataForm.wordEN.length < 1) {
      return { isValid: false, msg: 'Pola z słówkami muszą być uzupełnione' };
   } else if (
      (dataForm.exampleEN.trim().length > 0 &&
         dataForm.examplePL.trim().length === 0) ||
      (dataForm.exampleEN.trim().length === 0 &&
         dataForm.examplePL.trim().length > 0)
   ) {
      return {
         isValid: false,
         msg: 'Jeśli jedno pole z przykładem jest uzupełnione, drugie też powinno',
      };
   } else {
      return {
         isValid: true,
         msg: `Słowo ${dataForm.wordEN} zostało dodane 😊`,
      };
   }
}
