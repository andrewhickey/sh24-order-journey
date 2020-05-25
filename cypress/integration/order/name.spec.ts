/// <reference types="cypress" />

context('Name', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('fails to submit an empty field', () => {
    cy.contains('Name').find('input').clear()
    cy.contains('Next').click()
    cy.location('pathname').should('eq', '/')
    cy.contains('Please enter your name').should('exist')
  })

  it('fails to submit a short field', () => {
    cy.contains('Name').find('input').type('A')
    cy.contains('Next').click()
    cy.location('pathname').should('eq', '/')
    cy.contains('Too short').should('exist')
  })

  it('fails to submit a long field', () => {
    cy.contains('Name').find('input').type('AAAAAAAAAAAAAAAAAAAAAAAAAA')
    cy.contains('Next').click()
    cy.location('pathname').should('eq', '/')
    cy.contains('Too long').should('exist')
  })

  it('submits a correctly completed form', () => {
    cy.contains('Name').find('input').type('Andrew')
    cy.contains('Next').click()
    cy.location('pathname').should('not.eq', '/')
  })
})
