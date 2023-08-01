describe('App', () => {
  it('increments the counter', () => {
    cy.visit('/')
    cy.findByRole('button', { name: /count is:/i }).click()
    cy.findByRole('button', { name: /count is:/i }).should(
      'contain',
      'count is: 1'
    )
  })
})
