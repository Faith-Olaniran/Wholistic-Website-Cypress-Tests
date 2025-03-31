Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Prevent Cypress from failing the test due to app errors
});

describe('Pricing Page', () => {
    beforeEach(() => {
        cy.visit('https://app.wholistic.work/pricing'); // Visit the pricing page before each test
    });

    it('should display the Free and Starter (Pro) plans', () => {
        cy.contains('The ultimate delivery solution, at the best value').should('be.visible');

        // ✅ Check Free Plan
        cy.get('.rounded-xl').each(($plan) => {
            cy.wrap($plan).within(() => {
                cy.contains('h3', 'Free').should('exist'); // Ensure Free plan is present
                cy.contains('h2', '₦0').should('exist'); // Ensure the Free plan price is correct
                cy.contains('span', 'per month').should('exist');
            });
        });

        // ✅ Check Starter (Pro) Plan
        cy.get('.rounded-xl').each(($plan) => {
            cy.wrap($plan).within(() => {
                cy.contains('h3', 'Starter').should('exist'); // Ensure Starter plan is present
                cy.contains('h2', '₦150,000').should('exist'); // Ensure the Starter plan price is correct
                cy.contains('span', 'per month').should('exist');
            });
        });
    });
    it.only('should allow users to click the "Get Started" button for each plan', () => {
        // Click for Free Plan
        cy.get('.rounded-xl').each(($plan) => {
            cy.wrap($plan).within(() => {
                if ($plan.text().includes('Free')) {
                    // Click on the "Get Started" button for the Free plan
                    cy.contains('button', 'Get Started').should('be.visible').click();
                }
            });
        });
    
        cy.wait(1000);  // Wait for the page to load (check the URL change after the click)
        cy.url().should('eq', 'https://app.wholistic.work/signup');  // Assert that we're redirected to the signup page
    
        // Click for Starter Plan
        cy.get('.rounded-xl').each(($plan) => {
            cy.wrap($plan).within(() => {
                if ($plan.text().includes('Starter')) {
                    cy.contains('button', 'Get Started').should('be.visible').click();
                    // ✅ Add assertions based on expected behavior after clicking
                }
            });
        });
    });
});
