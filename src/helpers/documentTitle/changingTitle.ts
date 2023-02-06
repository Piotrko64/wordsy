export function changingTitle() {
   window.addEventListener('blur', () => {
      document.title = 'Wracaj do nauki!';
   });
   window.addEventListener('focus', () => {
      document.title = 'Wordsy!';
   });
}
