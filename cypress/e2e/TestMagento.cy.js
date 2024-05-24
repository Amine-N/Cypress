describe('Magento', () => {
  it('Login', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#ui-id-8').click()
    cy.get(':nth-child(6) > :nth-child(1) > a').click()
    cy.get('img[alt="Driven Backpack"]').click()
    cy.get('#product-addtocart-button')
      .click()
      .should("be.visible", "You added Driven Backpack to your shopping cart.")
    cy.wait(3000)
    cy.get('.counter-number').click()
    cy.get('#top-cart-btn-checkout').click()
    cy.wait(6000)

    cy.get('#customer-email').type('zazo@gmail.com')
    cy.get('.input-text[name="firstname"]').type('Bernie')
    cy.get('.input-text[name="lastname"]').type('Maxi')
    cy.get('input[name="street[0]"]').type('22 rue pont michel cost')
    cy.get('.input-text[name="city"]').type('Bordeaux')
    cy.get('select[name="country_id"]').select('France')
    cy.get('select[name="region_id"]').select('Gironde')
    cy.get('.input-text[name="postcode"]').type('33100')
    cy.get('.input-text[name="telephone"]').type('0600000000')
    cy.get('input[type="radio"][value="tablerate_bestway"]').check()
    cy.wait(1000)

    cy.get('.button > span').click()
    cy.get('button[data-role="opc-continue"]').click()
    cy.contains('button', 'Next').click()
    cy.get('button.button.action.continue.primary').click()
    cy.wait(5000)

    cy.contains('span', 'Place Order').click()
    cy.contains('Thank you for your purchase!').should("be.visible")
    

  })
})