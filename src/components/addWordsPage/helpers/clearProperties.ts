export function clearProperties(
   form: Record<'wordPL' | 'wordEN' | 'examplePL' | 'exampleEN' | 'id', string>
) {
   for (const key in form) {
      form[key as keyof typeof form] = '';
   }
}
