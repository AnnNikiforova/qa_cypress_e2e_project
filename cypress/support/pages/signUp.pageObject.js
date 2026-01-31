import PageObject from '../PageObject';

class SignUpPageObject extends PageObject {
  url = '/#/register';

  get emailField() {
    return cy.getByDataCy('email-sign-up');
  }

  get passwordField() {
    return cy.getByDataCy('password-sign-up');
  }

  get usernameField() {
    return cy.getByDataCy('username-sign-up');
  }

  get signUpBtn() {
    return cy.getByDataCy('sign-up-btn');
  }

  get swalModal() {
    return cy.get('.swal-modal');
  }

  typeEmail(email) {
    this.emailField.type(email);
  }

  typePassword(password) {
    this.passwordField.type(password);
  }

  typeUsername(username) {
    this.usernameField.type(username);
  }

  clickSignUpBtn() {
    this.signUpBtn.click();
  }

  assertErrorMessage(message) {
    this.swalModal.should('contain', message);
  }

  register(email, username, password) {
    this.typeEmail(email);
    this.typePassword(password);
    this.typeUsername(username);
    this.clickSignUpBtn();
  }
}

export default SignUpPageObject;
