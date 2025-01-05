class CartPage {

    cartBadge() {
        cy.get('.shopping_cart_badge')
    }
    sauceLabsBikeLight() {
        cy.get('#item_0_title_link').click()
    }
    openCart() {
        cy.get('.shopping_cart_link').click()
    }
    
    }
    
     export const cartPage = new CartPage()
