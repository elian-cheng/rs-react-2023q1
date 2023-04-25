/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render search input', () => {
    cy.get('[data-testid="search-form"]').should('be.visible');
  });

  it('should render movie card list', () => {
    cy.get('[data-testid="movie-card-list"]').should('be.visible');
  });

  it('should render movie cards', () => {
    cy.get('.movie__card').should('have.length.gte', 1);
  });

  it('should render movie modal when movie card is clicked', () => {
    cy.get('.movie__card').first().click();
    cy.get('[data-testid="movie-modal"]').should('be.visible');
  });

  it('should close movie modal when close button is clicked', () => {
    cy.get('.movie__card').first().click();
    cy.get('[data-testid="modal-close-btn"]').click();
    cy.get('[data-testid="movie-modal"]').should('not.exist');
  });
});
