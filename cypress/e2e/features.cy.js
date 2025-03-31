Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Prevent Cypress from failing the test due to app errors
  });
  
  describe('Features Section', () => {
    beforeEach(() => {
      cy.visit('/'); // Visit the homepage first
    });
  
    it('should navigate to the Features section when clicked', () => {
      cy.get('nav').first().within(() => {
        cy.contains('Features')
          .should('exist')
          .click({ force: true }); // Force click in case it's hidden
      });
  
      // Confirm that the page navigated to the correct section
      cy.url().should('include', '#features');
      cy.get('#features').should('be.visible');
    });
  
    it('should display key features of the platform', () => {
      cy.get('#features').first().within(() => {
        cy.contains('Wholistic is your collaborative powerhouse').should('be.visible'); // Change text to match Features section
  
        // Check if feature items exist
        cy.get('.feature_heading').should('exist').and('have.length.at.least', 4);
        cy.get('.feature-paragraph') .should('exist') .and('have.length.at.least', 4) .each(($desc) => {
        cy.wrap($desc).should('be.visible').and('not.be.empty');
      });

      });
    });
  });
  