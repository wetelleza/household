import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

// Suppress minified React errors globally in the suite
Cypress.on('uncaught:exception', (e) => {
  if (e.message && e.message.includes('Minified React error')) {
    return false;
  }
});

describe('Login Page', () => {
  it('should allow entering an email and password in the login', () => {
    LoginPage.visit();
    LoginPage.fillEmail('zoefin.advisor+qaroleadv01@gmail.com');
    LoginPage.checkEmail('zoefin.advisor+qaroleadv01@gmail.com');
    LoginPage.clickContinueEmail();
    LoginPage.fillPassword('QA.role123');
    LoginPage.checkPassword('QA.role123');
    LoginPage.clickContinuePassword();
    HomePage.validatePipelineMenuItem();
  });
});
