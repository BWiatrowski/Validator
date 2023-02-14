import 'cypress-file-upload'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
Cypress.Commands.add('openTshirtsTab', () => {
	cy.visit('https://automationpanda.com/contact/')
})

Cypress.Commands.add('searchPhrase', (text, delayValue) => {
	cy.get('.search-field').type(text, { delay: delayValue })
})

Cypress.Commands.add('login', (email, password) => {
    cy.get('[placeholder="Email"]').clear()
	cy.get('[placeholder="Password"]').clear()
	cy.get('[placeholder="Email"]').type(email)
	cy.get('[placeholder="Password"]').type(password)
	cy.get('[type="submit"]').click()
})
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
