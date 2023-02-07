export function clearProperties(
   form: Record<'wordPL' | 'wordEN' | 'examplePL' | 'exampleEN' | 'id', string>
) {
   for (const key in form) {
      console.log(form[key as keyof typeof form]);
      form[key as keyof typeof form] = '';
   }
}
