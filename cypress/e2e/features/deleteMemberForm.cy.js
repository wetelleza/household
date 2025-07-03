import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import HouseholdPage from '../pages/HouseholdPage';

// Suppress minified React errors globally in the suite
Cypress.on('uncaught:exception', (e) => {
  if (e.message && e.message.includes('Minified React error')) {
    return false;
  }
});

describe('Delete member from household', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    // Login and navigate to household
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

  it('should show the confirmation modal when clicking delete', () => {
    HouseholdPage.clickDeleteMemberButton();
    HouseholdPage.validateDeleteMemberModal();
  });

  it('should return to household when canceling the delete modal', () => {
    HouseholdPage.clickDeleteMemberButton();
    HouseholdPage.validateDeleteMemberModal();
    HouseholdPage.clickCancelDeleteMember();
    HouseholdPage.validateHouseholdPage();
  });
});
