/// <reference types="cypress" />

import 'cypress-file-upload';

describe('Form Page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('should display form and add order', () => {
    const name = 'Janet';
    const date = '2023-05-01';
    const delivery = 'Express';
    const call = 'Yes';
    const image = 'poster.jpg';

    cy.get('[data-testid="form"]').within(() => {
      cy.get('input[name="name"]').type(name);
      cy.get('input[name="date"]').type(date);
      cy.get('select[name="delivery"]').select(delivery);
      cy.get('input[name="call"][value="Yes"]').check();
      cy.get('input[name="consent"]').check();
      cy.get('input[type="file"]').attachFile(image);
      cy.get('button[type="submit"]').click();
    });

    cy.contains('.orders__title', 'Your orders:');
    cy.contains('.orders__subtitle', 'There are no orders yet').should('not.exist');
    cy.contains('.order-card__title', name);
    cy.contains('.order-card__date', date);
    cy.contains('.order-card__delivery', delivery);
    cy.contains('.order-card__call', call);
    cy.contains('.order-card__notifications', 'No');
    cy.contains('.order-card__consent', 'Yes');
    cy.get('.order-card__image').should('have.attr', 'src').should('not.contain', 'defaultImg');
  });
});
