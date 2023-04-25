/// <reference types="cypress" />

describe('Error Page', () => {
  it('should display 404 error message and button to return home', () => {
    cy.visit('/non-existent-page');
    cy.get('#error-page').should('exist');
    cy.get('.error__title').contains('404');
    cy.get('.error__subtitle').contains('Oops! Page is not found');
    cy.get('.error__text').contains("Sorry, the page you're looking for doesn't exist.");
    cy.get('.error__btns').contains('Return home').should('have.attr', 'href', '/');
  });
});
