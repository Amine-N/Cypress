describe('inscription', () => {
  it('passes', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('[data-qa="accept-cta"]').click()
    cy.get('#firstName').type('Amine')
    cy.get('#lastName').type('Naib')
    cy.get('#signup-email').type('mail@gmail.com')
    cy.get('#signup-password').type('Motdepasse')
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
    cy.wait(8000)
    cy.get('#signup-password').clear();
    cy.get('#signup-password').type('Motdepasse0')
    cy.wait(10000)
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
  })
})

