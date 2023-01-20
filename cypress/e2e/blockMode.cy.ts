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

   it.skip('should be different values', () => {
      let firstText;

      cy.get('.counter > div').should(($div) => {
         firstText = $div.text();
      });

      cy.get('button.next').click();

      cy.get('.counter > div').should(($div) => {
         expect($div.text()).not.equal(firstText);
      });
   });

   it.skip('should be exactly the same values', () => {
      let firstText;

      cy.get('.counter > div').should(($div) => {
         firstText = $div.text();
      });

      cy.get('button.prev').click();

      cy.get('.counter > div').should(($div) => {
         expect($div.text()).equal(firstText);
      });
   });

   it('should correct counting', () => {
      cy.get('button.next').click();
      cy.get('button.next').click();
      cy.get('button.next').click();
      cy.get('button.prev').click();

      cy.get('.counter > div').should(($div) => {
         expect($div.text()).contain('3/');
      });
   });
});
