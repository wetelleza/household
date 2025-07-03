import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import HouseholdPage from '../pages/HouseholdPage';
import AddMemberPage from '../pages/AddMemberPage';

// Suppress minified React errors globally in the suite
Cypress.on('uncaught:exception', (e) => {
  if (e.message && e.message.includes('Minified React error')) {
    return false;
  }
});

describe('Add member to household', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    // Login and navigate to add member form
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
    HouseholdPage.clickAddMemberButton();
    AddMemberPage.validateAddMemberModal();
  });

  it('should enable the add member button if the data is valid', () => {
    AddMemberPage.fillMemberForm({
      email: 'nuevo.miembro+test01@gmail.com',
      firstName: 'Juan',
      lastName: 'Perez',
      phone: '3204031589'
    });
    AddMemberPage.checkAddButtonEnabled();
  });

  it('should not enable the add member button if the fields are empty', () => {
    AddMemberPage.checkAddButtonDisabled();
  });

  it('should show error if name or last name contain numbers or special characters', () => {
    AddMemberPage.fillMemberForm({
      email: 'nuevo.miembro+test02@gmail.com',
      firstName: 'Juan123',
      lastName: 'Perez@',
      phone: '3204031589'
    });
    AddMemberPage.validateNameFieldError();
    AddMemberPage.validateLastNameFieldError();
  });
});
