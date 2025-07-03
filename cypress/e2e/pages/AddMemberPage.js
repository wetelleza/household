class AddMemberPage {
  validateAddMemberModal() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message && e.message.includes('Minified React error')) {
          return false;
        }
      });
      cy.get('div.ReactModal__Overlay.ReactModal__Overlay--after-open')
        .should('be.visible')
        .within(() => {
          cy.get('p').contains('Add Household Member').should('be.visible');
        });
    });
  }

  fillMemberForm({ email, firstName, lastName, phone }) {
    cy.origin('https://dashboard-test.zoefin.com', { args: { email, firstName, lastName, phone } }, ({ email, firstName, lastName, phone }) => {
      if (email !== undefined) {
        cy.get('input[data-testid="input-email"]').clear().type(email);
      }
      if (firstName !== undefined) {
        cy.get('input[data-testid="input-first-name"]').clear().type(firstName);
      }
      if (lastName !== undefined) {
        cy.get('input[data-testid="input-last-name"]').clear().type(lastName);
      }
      if (phone !== undefined) {
        // Find the phone input by inputmode="numeric" if there is no data-testid
        cy.get('label:contains("Phone number") input[inputmode="numeric"]').clear().type(phone);
      }
    });
  }

  checkAddButtonEnabled() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('button.styles_memberInfo__button__WzDCo.styles-module_button__XmRSx.styles-module_button__blue__su2bF.styles-module_button__modMedium__uLakc.styles-module_button__blue_primary__9PN9a.styles-module_button__modReverse__QbwGK')
        .should('not.be.disabled');
    });
  }

  checkAddButtonDisabled() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('button.styles_memberInfo__button__WzDCo.styles-module_button__XmRSx.styles-module_button__blue__su2bF.styles-module_button__modMedium__uLakc.styles-module_button__blue_primary__9PN9a.styles-module_button__modReverse__QbwGK')
        .should('be.disabled');
    });
  }

  validateNameFieldError() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('input[data-testid="input-first-name"]')
        .parents('div.styles-module_baseInput__container__w-DHj')
        .find('div.styles-module_baseInput__hintContainer_error__yj77-')
        .should('be.visible')
        .and('have.text', 'Please enter a valid name');
    });
  }

  validateLastNameFieldError() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('input[data-testid="input-last-name"]')
        .parents('div.styles-module_baseInput__container__w-DHj')
        .find('div.styles-module_baseInput__hintContainer_error__yj77-')
        .should('be.visible')
        .and('have.text', 'Please enter a valid last name');
    });
  }
}

export default new AddMemberPage();
