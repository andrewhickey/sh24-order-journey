/// <reference types="cypress" />

context('Summary', () => {
  beforeEach(() => {
    cy.visit('/summary')
  })

  it('redirects if navigated to directly', () => {
    cy.location('pathname').should('eq', '/')
  })
})
