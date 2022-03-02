describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/"); // change URL to match your dev URL
  });
});

describe("My Second Test", () => {
  it('Find the title "Honest, unbiased airline reviews."', () => {
    cy.visit("/");

    cy.contains("Honest, unbiased airline reviews.");
  });
});

describe("My Third Test", () => {
  it('clicks the link "View Airline"', () => {
    cy.visit("/");

    cy.contains("View Airline").click();
  });
});

describe("My Fifth Test", () => {
  it("Clicks on first Airline and writes a review", () => {
    cy.visit("/");

    cy.contains("View Airline").click();

    cy.contains("United Airlines");

    cy.url().should("include", "/united-airlines");

    cy.get("form")
      .find("input")
      .first()
      .type("This is a title")
      .should("have.value", "This is a title");

    cy.get("form")
      .find("input")
      .eq(1)
      .type("This is a description")
      .should("have.value", "This is a description");

    cy.get('.sc-iqseJM').find('label').eq(3).click();

    cy.contains("Submit Your Review").click();

    cy.get('.sc-fotOHu').last().should(($p) => {
        expect($p).to.contain('This is a title')
        expect($p).to.contain('This is a description')
    })

    cy.contains("This is a title")
    .parent()
    .contains("×")
    .click();

    cy.reload();

    cy.contains("This is a title")
    .should("not.exist");
  });
});
