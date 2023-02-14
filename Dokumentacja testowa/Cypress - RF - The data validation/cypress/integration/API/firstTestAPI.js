/// <reference types="cypress" />

describe('E2E - API Tests', () => {
	beforeEach(function () {
		cy.fixture('example').then(data => {
			this.daneApi = data
		})
	})

	it('Weryfikacja tagów API', () => {
		cy.intercept('GET', 'https://api.realworld.io/api/tags').as('requestTags') // przechwycenie metody
		cy.visit('https://angular.realworld.io/')
		cy.wait('@requestTags') // odwolanie do aliasow przy użyciu małpy
		cy.get('@requestTags').then(res => {
			console.log(res)
			expect(res.response.statusCode).to.equal(200)
			expect(res.response.body.tags).to.contain('welcome').and.to.contain('implementations')
		})
	})

	it('Niepoprawne logowanie', function () {
		cy.intercept('POST', 'https://api.realworld.io/api/users/login').as('requestLogin')
		cy.get('a.nav-link').contains('Sign in').click()
		cy.login('test@test.pl', '12345@@@@@')
		cy.wait('@requestLogin')
		cy.get('@requestLogin').then(res => {
			console.log(res)
			expect(res.response.statusCode).to.equal(403)
			// cy.fixture("example").then(data => {
			expect(res.response.statusMessage).to.equal(this.daneApi.statusMessage403)
			// })
		})
	})

	it('Poprawne logowanie', function () {
		cy.intercept('GET', 'https://api.realworld.io/api/tags', { fixture: 'tags.json' }).as('requestTags')
		cy.login('bwiater@test.pl', 'bwiater')
		cy.wait('@requestTags')
	})
})
