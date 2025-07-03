class HouseholdPage {
  validateOpenAccountButton() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message && e.message.includes('Minified React error')) {
          return false;
        }
      });
      cy.get('button.styles-module_button__XmRSx.styles-module_button__blue__su2bF.styles-module_button__modMedium__uLakc.styles-module_button__blue_secondary__nPwpL')
        .should('be.visible')
        .and('have.text', 'Open Account');
    });
  }

  clickHouseholdLink() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message && e.message.includes('Minified React error')) {
          return false;
        }
      });
      cy.get('a.styles_link__gt664[href*="/dashboard/households/"]')
        .contains('Household')
        .first()
        .click();
    });
  }

  clickAddMemberButton() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message && e.message.includes('Minified React error')) {
          return false;
        }
      });
      cy.get('button.styles-module_button__XmRSx.styles-module_button__blue__su2bF.styles-module_button__modMedium__uLakc.styles-module_button__blue_ghost__gjCna.styles-module_button__modReverse__QbwGK')
        .should('be.visible')
        .click();
    });
  }

  clickEditUserButton() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message && e.message.includes('Minified React error')) {
          return false;
        }
      });
      cy.get('i.fa-light.fa-pen-to-square').first().click();
    });
  }

  clickDeleteMemberButton() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message && e.message.includes('Minified React error')) {
          return false;
        }
      });
      cy.get('span.styles_iconRed__13YNp').find('i.fa-light.fa-trash').first().click();
    });
  }

  validateDeleteMemberModal() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('div.styles_deleteMemberWrapper__I_dtq')
        .should('be.visible')
        .within(() => {
          cy.get('p').should('contain.text', 'Are you sure you want to remove');
        });
    });
  }

  clickCancelDeleteMember() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('button.styles-module_button__XmRSx.styles-module_button__blue__su2bF.styles-module_button__modMedium__uLakc.styles-module_button__blue_ghost__gjCna')
        .contains('Cancel')
        .click();
    });
  }

  validateHouseholdPage() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      // Use scrollIntoView directly on the button and disable scrollable check
      cy.get('button.styles-module_button__XmRSx.styles-module_button__blue__su2bF.styles-module_button__modMedium__uLakc.styles-module_button__blue_secondary__nPwpL')
        .scrollIntoView({ ensureScrollable: false })
        .should('be.visible')
        .and('have.text', 'Open Account');
    });
  }

  validateAddMemberButtonVisible() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('button.styles-module_button__XmRSx.styles-module_button__blue__su2bF.styles-module_button__modMedium__uLakc.styles-module_button__blue_ghost__gjCna.styles-module_button__modReverse__QbwGK')
        .should('be.visible')
        .and('contain.text', 'Add Member');
    });
  }

  validateEditUserButtonVisible() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('i.fa-light.fa-pen-to-square').should('be.visible');
    });
  }

  validateDeleteMemberButtonVisible() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('span.styles_iconRed__13YNp').find('i.fa-light.fa-trash').should('be.visible');
    });
  }
}

export default new HouseholdPage();
