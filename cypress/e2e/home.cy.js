Cypress.on('uncaught:exception', (err, runnable) => {
  return false; 
});

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/'); 
    cy.get('body').should('be.visible'); 
  });

  it('should load successfully and display the main heading', () => {
    cy.contains(/Bringing your best work together as a whole/i).should('be.visible');
  });

  it('should scroll to the "How it Works" section when clicked', () => {
    cy.get('nav').first().within(() => {
      cy.contains('How it works')
        .should('exist') 
        .click({ force: true }); 
    });
  
    cy.url().should('include', '#how-it-works'); 
    cy.get('#how-it-works').should('be.visible'); 
  });

  it('should scroll to the "Features" section when clicked', () => {
    cy.get('nav').first().within(() => {
      cy.contains('Features')
        .should('exist') 
        .click({ force: true }); 
    });
  
   
    cy.url().should('include', '#features'); 
    cy.get('#features').should('be.visible'); 
  });

  it('should navigate to the FAQ page when clicked', () => {
    cy.get('nav').first().within(() => {
      cy.contains('FAQs')
        .should('exist') 
        .click({ force: true }); 
    });
  
    cy.url().should('include', '/faqs'); 
  
    cy.get('h1').contains(/Wholistic FAQs/i).should('be.visible'); 
  });
    
  
});
