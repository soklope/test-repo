describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  })

  it('Checks Status', () => {
    cy.request('http://localhost:5173/').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Tests Navigation', () => {
    cy.visit('http://localhost:5173/')
    cy.get('a').contains('Vite').click()
    // cy.url().should('include', '/about')
  })
})