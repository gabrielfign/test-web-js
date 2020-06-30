import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`eu vejo {string} no título`, (title) => {
  cy.title().should('include', title)
})