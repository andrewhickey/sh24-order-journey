/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('goes through the whole flow successfully', () => {
    // https://on.cypress.io/type
    cy.contains('Name')
      .find('input')
      .type('Andrew')
      .should('have.value', 'Andrew')
    cy.contains('Next').click()

    cy.location('pathname').should('include', 'email')
    cy.contains('Email')
      .find('input')
      .type('andrewhickey@live.co.uk')
      .should('have.value', 'andrewhickey@live.co.uk')
    cy.contains('Next').click()

    cy.location('pathname').should('include', 'service')
    cy.contains('Service').contains('Contraception').click()
    // check for selected
    cy.contains('Next').click()

    cy.location('pathname').should('include', 'summary')
    // check for correct values listed
  })
})
