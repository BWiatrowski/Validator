/// <reference types="cypress" />

describe('E2E - The data validation', () => {
	it('Kliknięcie na element', () => {
		cy.visit('http://127.0.0.1:5500/registration-form.html')
		cy.contains('[class="send"]', 'Wyślij').click();
	})

	it("Wpisywanie wartości w pole", () => {
        cy.get("#username").type("Tester", 1200);
		cy.contains('[class="send"]', 'Wyślij').click();
    })

	it("Wpisywanie wartości w pole", () => {
        cy.get("#password").type("Tester123", 1200);
		cy.contains('[class="send"]', 'Wyślij').click();
    })

	it("Wpisywanie wartości w pole", () => {
        cy.get("#password2").type("Tester123", 1200);
		cy.contains('[class="send"]', 'Wyślij').click();
    })

	it("Wpisywanie wartości w pole", () => {
        cy.get("#email").type("Tester@tester.pl", 1200);
		cy.contains('[class="send"]', 'Wyślij').click();
    })

	it('Kliknięcie na element', () => {
		cy.contains('[class="close"]', 'Zamknij').click();
	})
})

