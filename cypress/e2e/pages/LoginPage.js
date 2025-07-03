class LoginPage {
  visit() {
    cy.visit('https://dashboard-test.zoefin.com/login');
  }

  fillEmail(email) {
    cy.get('#username').type(email);
  }

  checkEmail(email) {
    cy.get('#username').should('have.value', email);
  }

  clickContinueEmail() {
    cy.get('button._button-login-id[type="submit"][name="action"][value="default"]').click();
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  checkPassword(password) {
    cy.get('#password').should('have.value', password);
  }

  clickContinuePassword() {
    cy.get('button._button-login-password[type="submit"][name="action"][value="default"]').click();
  }
}

export default new LoginPage();
