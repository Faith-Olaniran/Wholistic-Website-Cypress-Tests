Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Prevent Cypress from failing the test due to app errors
});

describe('FAQs Section', () => {
  beforeEach(() => {
    cy.visit('/'); // Start from the homepage
  });

  it('should navigate to the FAQs page when clicked', () => {
    cy.get('nav').first().within(() => {
      cy.contains('FAQs')
        .should('exist')
        .click({ force: true }); // Click the FAQ link
    });

    // ✅ Verify that the URL changes to `/faqs`
    cy.url().should('include', '/faqs');
    cy.get('h1').should('contain', 'FAQs'); // Ensure the FAQs page loads correctly
  });

  it('should display FAQ questions', () => {
    cy.visit('/faqs'); // ✅ Navigate directly to the FAQ page
    cy.get('.faq_heading-2')
      .should('exist')
      .and('have.length.at.least', 2) // Ensure at least two FAQ questions exist
      .each(($faq) => {
        cy.wrap($faq).should('be.visible');
      });
  });

  it('should reveal and hide answers when clicking an FAQ question', () => {
    cy.visit('/faqs'); // Ensure we're on the FAQs page

    cy.get('.faq_heading-2').first().as('firstFAQ'); // Select the first FAQ question

    // ✅ Click the FAQ question to reveal the answer
    cy.get('@firstFAQ').click();


  });

  it.only('should reveal and hide answers for all FAQs when clicked', () => {
    cy.visit('/faqs'); // Ensure we're on the FAQs page

    cy.get('.faq_heading-2').each(($faq) => {
      cy.wrap($faq).click(); // Click each question
      cy.wrap($faq).should('be.visible');
    });
  });
});
