/// <reference types="cypress" />

context('Service', () => {
  beforeEach(() => {
    cy.visit('/service')
  })

  it('fails to submit an empty field', () => {
    cy.contains('Next').click()
    cy.location('pathname').should('include', 'service')
    cy.contains('Please choose a service').should('exist')
  })

  it('allows going back', () => {
    cy.contains('Back').click()
    cy.location('pathname').should('include', 'email')
  })

  it('should show the correct options', () => {
    cy.contains('Service').contains('Contraception').should('exist')
    cy.contains('Service').contains('Other').should('exist')
    cy.contains('Service').contains('STI Testing').should('exist')
  })

  it('submits a correctly completed form', () => {
    cy.contains('Service').contains('Other').click()
    cy.contains('Next').click()
    cy.location('pathname').should('not.include', 'service')
  })
})
