import { faker } from "@faker-js/faker";

const API_URL = Cypress.env("API_URL");
const FRONT_URL = Cypress.env("FRONT_URL");

describe("Auth routes", () => {
  it("Signup route", () => {
    const userData = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(8),
      imageUrl: faker.internet.avatar(),
    };
    cy.visit(`${FRONT_URL}/users/signup`);

    cy.get('[data-cy="name"]').type(userData.name);
    cy.get('[data-cy="email"]').type(userData.email);
    cy.get('[data-cy="password"]').type(userData.password);
    cy.get('[data-cy="repeatPassword"]').type(userData.password);
    cy.get('[data-cy="imageUrl"]').type(userData.imageUrl);

    cy.intercept("POST", `${API_URL}/users/signup`).as("submit");

    cy.get('[data-cy="submitForm"]').click();

    cy.wait("@submit").then(({ request, response }) => {
      expect(response.statusCode).equal(201);
    });
    cy.url().should("equal", `${FRONT_URL}/users/signin`);
  });
  //   it.todo("Signin route");
});
