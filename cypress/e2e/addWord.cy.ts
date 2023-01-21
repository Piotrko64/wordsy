describe('add word page testing', () => {
   beforeEach(() => {
      cy.visit('http://127.0.0.1:5173/AddWords');
   });
   it.skip('should show alert about error', () => {
      cy.get('#wordPL').type('To be or not to be?');
      cy.get('button[type=submit]').click();
      cy.get('p.alert').should('be.visible');
   });

   it('should show modal', () => {
      cy.get('#wordPL').type('To be or not to be?');
      cy.get('#wordEN').type('ENGLISH');
      cy.get('button[type=submit]').click();
      cy.get('p.alert').should('not.exist');
      cy.get('.background').should('contain', 'Yeah');
      cy.get('.background').should('contain', 'ENGLISH');
      cy.get('.modalButton').click();
      cy.get('.background').should('not.exist');
   });
});
