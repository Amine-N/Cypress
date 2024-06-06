describe("File upload test", () => {
  it("Upload an image and verify upload", () => {
    // Visite le site filebin.net
    cy.visit("https://filebin.net/");

    // Sélectionne le champ de fichier et upload l'image
    const fileName = 'screen.png';
    cy.get('#fileField').attachFile(screen);

    // Vérifie que l'image a été uploadée avec succès
    cy.contains("It contains 1 uploaded file").should("be.visible");
  });
});
