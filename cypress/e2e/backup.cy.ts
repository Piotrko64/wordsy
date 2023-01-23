import path from 'path';

describe('checking backup component', () => {
   beforeEach(() => {
      cy.visit('http://127.0.0.1:5173/Fiszki');
   });

   it.skip('should positive alert', () => {
      cy.get('input[type=file]').selectFile('cypress/fixtures/backup.json', {
         force: true,
      });

      cy.get('.background > .whiteBlock > h2').should('contain', 'Udało');
   });

   it('should negative alert', () => {
      cy.get('input[type=file]').selectFile('cypress/fixtures/badBackup.json', {
         force: true,
      });

      cy.get('.background > .whiteBlock > h2').should('contain', 'Ups');
   });
});
