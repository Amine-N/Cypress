describe('inscription', () => {
  it('Inscription KO', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('[data-qa="accept-cta"]').click()
    cy.get('#firstName').type('Test')
    cy.get('#lastName').type('Toto')
    cy.get('#signup-email').type('mail@gmail.com')
    cy.get('#signup-password').type('Motdepasse')
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
  })

  it('Inscription OK', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('[data-qa="accept-cta"]').click()
    cy.get('#firstName').type('Test')
    cy.get('#lastName').type('Toto')
    cy.get('#signup-email').type('mailtest02440@gmail.com')
    cy.get('#signup-password').type('Motdepasse0')
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
  })

  it('Connexion', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('[data-qa="accept-cta"]').click()
    cy.get('#signin-email').type('mailtest02440@gmail.com')
    cy.get('#signin-password').type('Motdepasse0')
    cy.get('[data-qa="signin-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
  })
})