/* eslint-disable no-undef */
beforeEach(() => {
  cy.visit("http://127.0.0.1:5173/");
});

describe("SANITY CHECK", () => {
  it("opens the app", () => {
    cy.url.should("contain", "http://127.0.0.1:5173/");
  });
});

describe("SUCCESS", () => {
  it("opens the login page", () => {
    //arrange
    cy.get('[data-cy="route-login"]').as("loginLink");
    //act
    cy.get("@loginLink").click();
    //assert
    cy.url().should("contain", "/login");
  });

  it("starts with disabled submit button", () => {
    //arrange
    cy.get('[data-cy="route-login"]').as("loginLink");
    //act
    cy.get("@loginLink").click();
    //assert
    cy.get('[data-cy="submit-login-form"]').should("be.disabled");
  });

  it("submits form", () => {
    //arrange
    cy.get('[data-cy="route-login"]').as("loginLink");
    cy.get("@loginLink").click();

    //act
    cy.get('[data-cy="input-email"]').type("emre@wit.com");
    cy.get('[data-cy="input-password"]').type("123Ru*123yy");
    cy.get('[data-cy="input-terms"]').check();
    cy.get('[data-cy="submit-login-form"]').click();

    //Assert
    cy.url().should("contain", "/welcome");
  });
});

describe("FAIL", () => {
  it.only("throws 3 errors if email, password are not correct and terms is not checked", () => {
    //arrange
    cy.get('[data-cy="route-login"]').as("loginLink");
    cy.get("@loginLink").click();

    //act
    cy.get('[data-cy="input-email"]').type("emre@wit");
    cy.get('[data-cy="input-password"]').type("123");
    cy.get('[data-cy="input-terms"]').check();
    cy.get('[data-cy="input-terms"]').uncheck();

    //assert
    cy.get('[data-cy="errors"]').should("have.length", 3);
    cy.contains("Geçerli bir email adresi girin!").should("be.visible");
  });
});