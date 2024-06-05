describe('Raja', () => {
    it('Crée une carte', () => {
        cy.visit("https://id.atlassian.com/login");
        cy.get("#username").type("ryantheap@gmail.com");
        cy.get("#login-submit").click();
        cy.get("#password").type("Wcstrello.33");
        cy.get("#login-submit").click();
        cy.wait(7000)
        cy.get('[data-testid="app-switcher-button"]').click().wait(1400)
        cy.get('[data-testid="switcher-item__TRELLOTrello"]').click()
        cy.wait(5000)
        cy.get('[data-testid="DownIcon"]').click()
        cy.contains('Mon tableau Trello').click()
        cy.wait(2000)
        cy.get('.what-is-atlas-button > .css-178ag6o').click()
        cy.wait(2000)
        cy.get('.bxgKMAm3lq5BpA SdamsUKjxSBwGb SEj5vUdI3VvxDc').click()
        cy.get('.bxgKMAm3lq5BpA SdamsUKjxSBwGb SEj5vUdI3VvxDc').type("Elaboration d'un plan de test OKLM")
    })
  })