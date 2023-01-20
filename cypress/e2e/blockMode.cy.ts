describe('block mode testing', () => {
   beforeEach(() => {
      cy.visit('http://127.0.0.1:5173/Fiszki');
   });

   it.skip('should contain correct name mode', () => {
      cy.get('.modeTitle').should('contain', 'Fiszki');
   });

   it.skip('should contain correct name mode after move to other mode', () => {
      const nameMode = 'Głosowy Quiz';

      cy.contains(nameMode).click();
      cy.get('.modeTitle').should('contain', nameMode);
   });

   it.skip('should not detect block mode', () => {
      cy.get('nav > .flex > a:first-child').click();
      cy.get('.modeTitle').should('not.exist');
   });
});
