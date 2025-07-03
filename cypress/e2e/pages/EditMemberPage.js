class EditMemberPage {
  validateEditMemberModal() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message && e.message.includes('Minified React error')) {
          return false;
        }
      });
      cy.get('div.ReactModal__Overlay.ReactModal__Overlay--after-open')
        .should('be.visible')
        .within(() => {
          cy.get('p').contains('Edit Household Member').should('be.visible');
        });
    });
  }

  checkEmailFieldDisabled() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('input[data-testid="input-email"]').should('be.disabled');
    });
  }

  checkSaveButtonDisabled() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('button').contains('Save Changes').should('be.disabled');
    });
  }

  checkSaveButtonEnabled() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('button').contains('Save Changes').should('not.be.disabled');
    });
  }

  editFirstName(newName) {
    cy.origin('https://dashboard-test.zoefin.com', { args: { newName } }, ({ newName }) => {
      cy.get('input[data-testid="input-first-name"]').clear().type(newName);
    });
  }
}

export default new EditMemberPage();
