describe('Raja', () => {
  it('Inscription', () => {
    cy.visit('https://stg2-fr.rajapack.xyz')
    cy.get("#commande-btn").click()
    cy.get("#addProductRef").type("cas01")
    cy.wait(2000)
    cy.get("#CAS01").click()
    cy.wait(2000)
    cy.get("#open-cart-confirmation").click()
    cy.wait(4000)
    cy.contains("Voir mon panier").click()
    cy.get("#fastCheckoutBtn").click({force: true})
    cy.get('[data-cy="email-login-light"]').type("chocolat4@gmail.com")
    cy.get("#UserPasswordLight").type("Chocolat1")
    cy.get('[data-cy="submit-login-light"]').click()
    cy.get('#cgv-mobile').check()
    cy.get('[data-cy="recap-mobile-fastcheckout-next"]').click()

    // cy.wait(5000)
    // cy.get('#checkout-confirmation-success').should("have.text", "Félicitations, votre commande est confirmée !")
    
  })
})