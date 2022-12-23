describe('navigation_test', () => {
  it('navigates to the about section', () => {
    cy.visit('http://localhost:3000')
    cy.get("[data-cy=about]").click()
    cy.get('h1').should("exist");
  })
})