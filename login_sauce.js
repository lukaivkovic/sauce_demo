import { cartPage } from "../page_objects/sauce_demo/CartPage"
import { loginPageSauce } from "../page_objects/sauce_demo/LoginPage"

// Custom command to log in to the Sauce Demo application
Cypress.Commands.add('loginSauce', (username, password) => {
    loginPageSauce.visit()
    loginPageSauce.fillUsername(username)
    loginPageSauce.fillPassword(password)
    loginPageSauce.submit()
})

// Custom command to add multiple items to the cart
Cypress.Commands.add('addItemsToCart', (items) => {
    items.forEach((item) => {
      // Click the "Add to Cart" button for the specified item  
      cy.get(`[data-test="add-to-cart-${item}"]`).click()
    })
  })

// Custom command to remove multiple items from the cart
  Cypress.Commands.add('removeItemsFromCart', (items) => {
    items.forEach((item) => {
      // Click the "Remove" button for the specified item  
      cy.get(`[data-test="remove-${item}"]`).click()
    })
  })
