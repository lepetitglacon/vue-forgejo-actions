// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
  })
})
describe('Go to about page', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('a', 'About').click()
    cy.url().should('include', '/about')
  })
})