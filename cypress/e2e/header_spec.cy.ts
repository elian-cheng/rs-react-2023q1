describe('Header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to home page on logo click', () => {
    cy.get('.header__logo').click();
    cy.url().should('include', '/');
    cy.get('h1').should('have.text', 'HomePage');
  });

  it('should navigate to about page on About link click', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.get('h1').should('have.text', 'AboutPage');
  });

  it('should navigate to form page on Form link click', () => {
    cy.contains('Form').click();
    cy.url().should('include', '/form');
    cy.get('h1').should('have.text', 'FormPage');
  });
});
