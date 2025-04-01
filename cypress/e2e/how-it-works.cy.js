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

      cy.wait(500);
      cy.get('#features').scrollIntoView().should('be.visible');
      cy.url().should('include', '#features');
  });

  it('should display key features of the platform', () => {
      cy.get('#features').scrollIntoView().should('be.visible');

      cy.contains('Wholistic is your collaborative powerhouse').should('be.visible');

      cy.get('.feature_heading')
          .should('exist')
          .and('have.length.at.least', 4);

      cy.get('.feature-paragraph')
          .should('exist')
          .and('have.length.at.least', 4)
          .each(($desc) => {
              cy.wrap($desc).should('be.visible').and('not.be.empty');
          });
  });
});
