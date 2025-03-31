Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Prevent Cypress from failing the test due to app errors
});

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/'); // Visit the homepage
    cy.get('body').should('be.visible'); // Ensure page is fully loaded
  });

  it('should load successfully and display the main heading', () => {
    cy.contains(/Bringing your best work together as a whole/i).should('be.visible');
  });

  it('should scroll to the "How it Works" section when clicked', () => {
    cy.get('nav').first().within(() => {
      cy.contains('How it works')
        .should('exist') // Ensure the link exists in the DOM
        .click({ force: true }); // Force the click even if it's covered
    });
  
    // Verify that the "How it Works" section is now visible
    cy.url().should('include', '#how-it-works'); // URL should update
    cy.get('#how-it-works').should('be.visible'); // Section should be visible
  });

  it('should scroll to the "Features" section when clicked', () => {
    cy.get('nav').first().within(() => {
      cy.contains('Features')
        .should('exist') // Ensure the link exists in the DOM
        .click({ force: true }); // Force the click even if it's covered
    });
  
    // Verify that the "Features" section is now visible
    cy.url().should('include', '#features'); // URL should update
    cy.get('#features').should('be.visible'); // Section should be visible
  });

  it('should navigate to the FAQ page when clicked', () => {
    cy.get('nav').first().within(() => {
      cy.contains('FAQs')
        .should('exist') // Ensure the link exists in the DOM
        .click({ force: true }); // Force the click in case it's covered
    });
  
    // Verify that the URL has changed to the FAQ page
    cy.url().should('include', '/faqs'); // Update if the actual FAQ URL is different
  
    // Verify that the FAQ section or heading is visible
    cy.get('h1').contains(/Wholistic FAQs/i).should('be.visible'); // Update selector if necessary
  });
    
  
  
});
