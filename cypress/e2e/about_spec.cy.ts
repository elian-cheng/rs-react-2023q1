describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('should display the page title', () => {
    cy.get('.about__title').should('have.text', 'Who are we?');
  });

  it('should display the page content', () => {
    cy.get('.about__content').within(() => {
      cy.get('p').eq(0).should('have.text', 'We are the champions, my friends');
      cy.get('p').eq(1).should('have.text', "And we'll keep on fighting till the end");
    });
  });
});
