import { loginSauce } from "../../support/custom_commands/login_sauce"
import { cartPage } from "../../support/page_objects/sauce_demo/CartPage"
import { checkoutPage } from "../../support/page_objects/sauce_demo/CheckoutPage"

describe('Sauce Demo E2E Tests', () => {
    beforeEach(() => {
        cy.fixture('userData').then(({ username, password }) => {
            cy.loginSauce(username, password);
        });
    });

    it('Test 1: Should successfully log in to the application', () => {
        // Verify successful login
        cy.url().should('include', '/inventory.html')
    })

    it('Test 2: Should add and remove items from the cart', () => {
        // Add first item to cart
        cy.addItemsToCart(['sauce-labs-backpack']);
        cartPage.cartBadge('have.text', '1')
        
        // Add second item to cart
        cy.addItemsToCart(['sauce-labs-bike-light']);
        cartPage.openCart()
        cartPage.cartBadge('have.text', '2')
        
        // Remove item and verify
        cy.removeItemsFromCart(['sauce-labs-backpack'])   
        cartPage.cartBadge('have.text', '1')
    })

    it('Test 3: Should complete checkout process successfully', () => {
        // Add item to cart
        cy.addItemsToCart(['sauce-labs-backpack'])
        cartPage.openCart()
        // Complete checkout process
        checkoutPage.checkoutButton()
        checkoutPage.firstName()
        checkoutPage.lastName()
        checkoutPage.zipCode()
        checkoutPage.continueButton()   
        checkoutPage.finishButton()
        checkoutPage.header()
    })
})
