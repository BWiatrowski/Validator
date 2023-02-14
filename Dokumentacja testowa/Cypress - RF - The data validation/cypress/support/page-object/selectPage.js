class SelectPage {
    get select() {
        return cy.get("#selectProductSort");
    }

    selectAllOption() {
        this.select.then(select => {
            cy.wrap(select).find("option").each(option1 => {
                cy.wrap(select).select(option1.text())
            })
        })
    }
}

export default new SelectPage();