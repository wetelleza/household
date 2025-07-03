import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import HouseholdPage from '../pages/HouseholdPage';
import EditMemberPage from '../pages/EditMemberPage';

// Suppress minified React errors globally in the suite
Cypress.on('uncaught:exception', (e) => {
  if (e.message && e.message.includes('Minified React error')) {
    return false;
  }
});

describe('Edit household member', () => {
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

  it('should open the edit form and the email field should be disabled', () => {
    HouseholdPage.clickEditUserButton();
    EditMemberPage.validateEditMemberModal();
    EditMemberPage.checkEmailFieldDisabled();
  });

  it('the save changes button should be initially disabled', () => {
    HouseholdPage.clickEditUserButton();
    EditMemberPage.validateEditMemberModal();
    EditMemberPage.checkSaveButtonDisabled();
  });

  it('the save changes button should be enabled after adding a character to the name', () => {
    HouseholdPage.clickEditUserButton();
    EditMemberPage.validateEditMemberModal();
    EditMemberPage.editFirstName('X');
    EditMemberPage.checkSaveButtonEnabled();
  });
});
