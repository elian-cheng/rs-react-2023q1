/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load correctly', () => {
    expect(true).equal(true);
  });

  it('should render Header component', () => {
    cy.get('.header__logo').should('be.visible');
    cy.get('.nav__list').should('be.visible');
    cy.get('.nav__item').should('have.length', 3);
  });

  it('should render Footer component', () => {
    cy.get('.footer__author-name').should('be.visible');
    cy.get('.footer__year').should('be.visible');
    cy.get('.footer__rs-link').should('be.visible');
  });
});
