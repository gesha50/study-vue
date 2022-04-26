// https://docs.cypress.io/api/table-of-contents

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.get('[data-test="get-books"]').click();
    cy.contains("h1", "Книжная лавка");
    cy.get('[data-test="home-page"]').should("have.text", " Добавить книгу ");
    cy.get(".card").should("have.length.above", 1);
  });
});
