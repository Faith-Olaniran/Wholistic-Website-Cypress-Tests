Cypress.on('uncaught:exception', (err, runnable) => {
  return false; 
});  

describe('How It Works Section', () => {
  beforeEach(() => {
      cy.visit('/'); 
  });

  it('should navigate to the How It Works section when clicked', () => {
      cy.get('nav').first().within(() => { 
          cy.contains('How it works')
              .should('exist')
              .click({ force: true }); 
      });
      cy.wait(500);
      cy.get('#how-it-works').scrollIntoView().should('be.visible');

      cy.url().should('include', '#how-it-works');
  });

  it('should display step-by-step details', () => {
      cy.get('#how-it-works').scrollIntoView().should('be.visible');

      cy.contains('Integrate and innovate with Wholistic').should('be.visible');
      cy.get('.step_heading')
          .should('exist')
          .and('have.length.at.least', 3);
  });
});
