Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Features Section', () => {
    beforeEach(() => {
      cy.visit('/'); 
    });
  
    it('should navigate to the Features section when clicked', () => {
      cy.get('nav').first().within(() => {
        cy.contains('Features')
          .should('exist')
          .click({ force: true }); 
      });
  
      
      cy.url().should('include', '#features');
      cy.get('#features').should('be.visible');
    });
  
    it('should display key features of the platform', () => {
      cy.get('#features').first().within(() => {
        cy.contains('Wholistic is your collaborative powerhouse').should('be.visible'); 
        cy.get('.feature_heading').should('exist').and('have.length.at.least', 4);
        cy.get('.feature-paragraph') .should('exist') .and('have.length.at.least', 4) .each(($desc) => {
        cy.wrap($desc).should('be.visible').and('not.be.empty');
      });

      });
    });
  });
  