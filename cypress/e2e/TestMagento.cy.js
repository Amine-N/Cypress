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
    cy.wait(10000)
    cy.get('.counter-number').click()
    cy.get('#top-cart-btn-checkout').click()

  })
})