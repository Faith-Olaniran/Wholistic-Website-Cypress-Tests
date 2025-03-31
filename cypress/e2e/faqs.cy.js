Cypress.on('uncaught:exception', (err, runnable) => {
  return false; 
});

describe('FAQs Section', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should navigate to the FAQs page when clicked', () => {
    cy.get('nav').first().within(() => {
      cy.contains('FAQs')
        .should('exist')
        .click({ force: true }); 
    });


    cy.url().should('include', '/faqs');
    cy.get('h1').should('contain', 'FAQs'); 
  });

  it('should display FAQ questions', () => {
    cy.visit('/faqs'); 
    cy.get('.faq_heading-2')
      .should('exist')
      .and('have.length.at.least', 2) 
      .each(($faq) => {
        cy.wrap($faq).should('be.visible');
      });
  });

  it('should reveal and hide answers when clicking an FAQ question', () => {
    cy.visit('/faqs');

    cy.get('.faq_heading-2').first().as('firstFAQ'); 

    cy.get('@firstFAQ').click();


  });

  it.only('should reveal and hide answers for all FAQs when clicked', () => {
    cy.visit('/faqs'); 

    cy.get('.faq_heading-2').each(($faq) => {
      cy.wrap($faq).click(); 
      cy.wrap($faq).should('be.visible');
    });
  });
});
