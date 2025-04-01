Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Pricing Page', () => {
    beforeEach(() => {
        cy.visit('https://app.wholistic.work/pricing'); // Visit the Pricing page directly
    });

    it('should navigate to the Pricing page', () => {
        cy.contains(/The ultimate delivery solution/i).should('be.visible');
    });


    it('should display all pricing plans correctly', () => {
        cy.get('h3').contains('Free').should('be.visible');
        cy.get('h2').contains('₦0').should('be.visible');
        cy.get('button').contains('Get Started').should('be.visible');
    });
    
});
