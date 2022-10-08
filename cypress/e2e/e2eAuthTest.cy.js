import { faker } from "@faker-js/faker";

const API_URL = Cypress.env("API_URL");
const FRONT_URL = Cypress.env("FRONT_URL");

function createUserData() {
  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    imageUrl: faker.internet.avatar(),
  };
}
beforeEach(async () => {
  await cy.resetDatabase();
});

Cypress.Commands.add("resetDatabase", () => {
  cy.request("POST", `${API_URL}/reset-database`);
});

Cypress.Commands.add("createUser", (data) => {
  cy.request("POST", `${API_URL}/users/signup`, { ...data });
});

describe("Auth routes", () => {
  it("Signup route", () => {
    const userData = createUserData();
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
  it("Signin route", () => {
    const userData = createUserData();
    const insertData = { ...userData, repeatPassword: userData.password };
    cy.createUser(insertData);

    cy.visit(`${FRONT_URL}/users/signin`);

    cy.get('[data-cy="email"]').type(userData.email);
    cy.get('[data-cy="password"]').type(userData.password);

    cy.intercept("POST", `${API_URL}/users/signin`).as("submit");

    cy.get('[data-cy="submitSignin"]').click();

    cy.wait("@submit").then(({ req, response }) => {
      expect(response.statusCode).equal(200);
      expect(response.body).to.not.equal(null);
    });

    cy.url().should("equal", `${FRONT_URL}/dashboard`);
  });
});
