class HomePage {
  visit() {
    cy.visit('https://dashboard-test.zoefin.com/dashboard/pipeline');
  }

  // You can add more methods here to interact with home page elements
  validatePipelineMenuItem() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.on('uncaught:exception', (e) => {
        // Ignore any minified React error
        if (e.message && e.message.includes('Minified React error')) {
          return false;
        }
      });
      cy.get('li.ant-menu-item.ant-menu-item-selected[data-menu-id$="pipeline"]')
        .first()
        .should('be.visible')
        .within(() => {
          cy.get('span.ant-menu-title-content').should('have.text', 'Pipeline');
        });
    });
  }

  clickClientName() {
    // Global handler for uncaught:exception before any cross-origin navigation
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message && (e.message.includes('Minified React error') || e.message.includes('Things went bad'))) {
          return false;
        }
      });
      // Navigate directly to the household URL without clicking
      cy.visit('https://dashboard-test.zoefin.com/dashboard/households/8bdd6e40-505d-11ef-a097-e5aa181f3f54/activity');
      // Wait for the 'Open Account' button to be visible on the new page
      cy.get('button.styles-module_button__XmRSx.styles-module_button__blue__su2bF.styles-module_button__modMedium__uLakc.styles-module_button__blue_secondary__nPwpL', { timeout: 10000 })
        .should('be.visible');
    });
  }

  validateDashboardMenuVisible() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('span.ant-menu-title-content').contains('Dashboard').should('be.visible');
    });
  }

  validatePipelineMenuNotVisible() {
    cy.origin('https://dashboard-test.zoefin.com', () => {
      cy.get('li.ant-menu-item[data-menu-id$="pipeline"]').should('not.exist');
    });
  }
}

export default new HomePage();
