# Cypress Project with POM

## Structure
- E2E Tests: `cypress/e2e/features/`
- Page Objects: `cypress/e2e/pages/`

## First Test Example
- Navigates to https://dashboard-test.zoefin.com/login
- Enters an email in the corresponding field

## Useful Commands
- `npx cypress open` to open the Cypress UI
- `npx cypress run` to run tests in the console

## Notes
- This project uses classic Cypress E2E tests with the Page Object Model (POM).
- Cucumber/Gherkin is not used or configured.
- You can add more test cases in `.cy.js` files and create new Page Objects as needed.
