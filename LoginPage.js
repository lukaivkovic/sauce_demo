class LoginPageSauce {

    visit() {
    cy.visit('https://www.saucedemo.com/')
    }
    fillUsername(username) {
    cy.get('#user-name').type(username);
    }
    fillPassword(password) {
    cy.get('#password').type(password);
    }
    submit() {
    cy.get('.btn_action').click();
    }
    }
    export const loginPageSauce = new LoginPageSauce();
