/// <reference types="cypress" />

// this test is probably the only one that wouldn't stub the back end in an actual app
context('E2E', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('goes through the whole flow successfully', () => {
    const user = {
      name: 'Andrew',
      email: 'andrewhickey@live.co.uk',
      service: 'Contraception',
    }

    cy.contains('Name')
      .find('input')
      .type(user.name)
      .should('have.value', user.name)
    cy.contains('Next').click()

    cy.location('pathname').should('include', 'email')
    cy.contains('Email')
      .find('input')
      .type(user.email)
      .should('have.value', user.email)
    cy.contains('Next').click()

    cy.location('pathname').should('include', 'service')
    cy.contains('Service').contains(user.service).click()
    // checking for this class is not ideal, could set up visual snapshotting given more time
    cy.contains('Service')
      .contains(user.service)
      .should('have.class', 'bg-white')

    cy.contains('Next').click()

    cy.location('pathname').should('include', 'summary')
    cy.contains('Name:').should('contain', user.name)
    cy.contains('E-Mail:').should('contain', user.email)
    cy.contains('Service:').should('contain', user.service)
  })
})
