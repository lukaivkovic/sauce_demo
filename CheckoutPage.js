class CheckoutPage {
    checkoutButton() {
    cy.get('#checkout').click()
    return this
    }
    firstName(firstName = 'Luka') {
    cy.get('#first-name').type(firstName)
    }
    lastName(lastName = 'Ivkovic') {
    cy.get('#last-name').type(lastName)
    }
    zipCode(zipCode = '11000') {
    cy.get('#postal-code').type(zipCode)
    }
    continueButton() {
    cy.get('#continue').click()
    return this
    }
    finishButton() {
    cy.get('#finish').click()
    return this
    }
    header() {
    
    
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
    return this;
    }
    }
    
    export const checkoutPage = new CheckoutPage()
