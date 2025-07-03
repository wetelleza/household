import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import HouseholdPage from '../pages/HouseholdPage';

// Suppress minified React errors globally in the suite
Cypress.on('uncaught:exception', (e) => {
  if (e.message && e.message.includes('Minified React error')) {
    return false;
  }
});

describe('Role-based functionalities in Household', () => {
  context('As a user with permissions', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      // Login and navigate to household with a user with permissions
      LoginPage.visit();
      LoginPage.fillEmail('zoefin.advisor+qaroleadv01@gmail.com');
      LoginPage.checkEmail('zoefin.advisor+qaroleadv01@gmail.com');
      LoginPage.clickContinueEmail();
      LoginPage.fillPassword('QA.role123');
      LoginPage.checkPassword('QA.role123');
      LoginPage.clickContinuePassword();
      HomePage.validatePipelineMenuItem();
      HomePage.clickClientName();
      HouseholdPage.validateOpenAccountButton();
      HouseholdPage.clickHouseholdLink();
    });

    it('should display the add, edit, and delete member buttons', () => {
      HouseholdPage.validateAddMemberButtonVisible();
      HouseholdPage.validateEditUserButtonVisible();
      HouseholdPage.validateDeleteMemberButtonVisible();
    });
  });

  context('As a client user without permissions', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      // Login and navigate as a client user
      LoginPage.visit();
      LoginPage.fillEmail('zoefin.client+qaroleclient02@gmail.com');
      LoginPage.checkEmail('zoefin.client+qaroleclient02@gmail.com');
      LoginPage.clickContinueEmail();
      LoginPage.fillPassword('QA.role123');
      LoginPage.checkPassword('QA.role123');
      LoginPage.clickContinuePassword();
    });

    it('should only display the Dashboard menu and not show Pipeline', () => {
      HomePage.validateDashboardMenuVisible();
      HomePage.validatePipelineMenuNotVisible();
    });
  });
});
