/// <reference types="cypress" />

context('Email', () => {
  beforeEach(() => {
    cy.visit('/email')
  })

  it('fails to submit an empty field', () => {
    cy.contains('Email').find('input').clear()
    cy.contains('Next').click()
    cy.location('pathname').should('include', 'email')
    cy.contains('Please enter your e-mail address').should('exist')
  })

  it('allows going back', () => {
    cy.contains('Back').click()
    cy.location('pathname').should('eq', '/')
  })

  it('fails to submit an invalid email', () => {
    cy.contains('Email').find('input').type('myhotmail.com')
    cy.contains('Next').click()
    cy.location('pathname').should('include', 'email')
    cy.contains('Must be a valid email').should('exist')
  })

  it('submits a correctly completed form', () => {
    cy.contains('Email').find('input').type('andrew@test.com')
    cy.contains('Next').click()
    cy.location('pathname').should('not.include', 'email')
  })
})
