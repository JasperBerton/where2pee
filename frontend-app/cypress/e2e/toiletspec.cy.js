describe('Toilet specific screen', () => {
  it('right amount of urinoirs', () => {
    cy.visit('http://localhost:3000')
    cy.visit("http://localhost:3000/toilet/a2b3f6d3c55dd036ca9d8db75e31f97cab9dbf98")
    cy.get('[data-cy=urinoirs]').contains("2")
  })
  it('should return not here for diapertables',()=>{
    cy.visit('http://localhost:3000')
    cy.visit("http://localhost:3000/toilet/a2b3f6d3c55dd036ca9d8db75e31f97cab9dbf98")
    cy.get('[data-cy=luiertafels]').contains("Geen aanwezig")
  })
})