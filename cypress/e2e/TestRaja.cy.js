describe('Raja', () => {
  it('Inscription', () => {
    cy.visit('https://stg-fr.rajapack.xyz')
    cy.get('.header-account__text').click({force:true})
    cy.get('#redirectCreateAccount').click()
    cy.get('.icon-particular').click()
    cy.get('#IdentifiersLogin').type('chocolat@gmail.com').should("have.value", "chocolat@gmail.com");
    cy.get('#NewPwdPassword').type('Chocolat1')
    cy.get('[type="checkbox"]').check({force:true})
    cy.get("#civilitie").select("M.")
    cy.get('#InfoFirstname').type('Robert').should("have.value", "Robert");
    cy.get('#InfoLastname').type('John').should("have.value", "John");
    cy.get('#directPhone').type('0700000000')
    cy.get('#nextStepBtn').click()
    cy.get('#CompaniesAddress').type('Hello Companie')
    cy.get('#CompaniesPostCode').type('33100')
    cy.get('#CompaniesCity').type('Bordeaux')
    cy.get('#submitAllForm').click()
  })
})