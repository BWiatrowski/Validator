class alertPage {
    get btnAlert1() {
        return cy.get("#alert");
    }

    get btnAlert2() {
        return cy.get("#alert-confirm");
    }

    clickonBtnAlert1() {
        this.btnAlert1.click();
    }

    clickonBtnAlert2() {
        this.btnAlert2.click();
    }

    verifyAlertText(tekst) {
        cy.on("window:alert", tresc => {
            expect(tresc).to.equal(tekst)
        })
    }

    verifyAlertConfirmText() {
        cy.on("window:confirm", tresc => {
            expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
        })
    }

    rejectAlert() {
        cy.on("window:confirm", () => false)
    }

    acceptAlert() {
        cy.on("window:confirm", () => true)
    }
}

export default new alertPage; 