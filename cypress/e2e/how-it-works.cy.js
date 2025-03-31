Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Prevent Cypress from failing the test due to app errors
  });  
  describe('How It Works Section', () => {
    beforeEach(() => {
      cy.visit('/'); // Visit the homepage first
    });
  
    it('should navigate to the How It Works section when clicked', () => {
        cy.get('nav').first().within(() => { // Select only the first nav element
          cy.contains('How it works')
            .should('exist')
            .click({ force: true }); // Force click in case it's hidden
        });
      
        // Confirm that the page navigated to the correct section
        cy.url().should('include', '#how-it-works');
        cy.get('#how-it-works').should('be.visible');
      });
      it('should display step-by-step integration details', () => {
        cy.get('#how-it-works').first().within(() => {
          cy.contains('Integrate and innovate with Wholistic').should('be.visible');
      
          // Check if .step_heading elements exist
          cy.get('.step_heading').should('exist').and('have.length.at.least', 3);
        });

      
      });
      
  });
  
  
  