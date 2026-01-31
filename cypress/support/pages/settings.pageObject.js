import PageObject from '../PageObject';

class SettingsPageObject extends PageObject {
  url = '/#/settings';

  get usernameField() {
    return cy.getByDataCy('username-settings');
  }

  get bioField() {
    return cy.getByDataCy('bio-settings');
  }

  get emailField() {
    return cy.getByDataCy('email-settings');
  }

  get passwordField() {
    return cy.getByDataCy('password-settings');
  }

  get updateSettingsBtn() {
    return cy.getByDataCy('update-settings-btn');
  }

  get logoutBtn() {
    return cy.getByDataCy('logout-btn');
  }

  get swalModal() {
    return cy.get('.swal-modal');
  }

  get swalButton() {
    return cy.get('.swal-button');
  }

  clearAndTypeUsername(username) {
    this.usernameField.should('be.visible').should('not.be.disabled')
      .clear().type(username);
  }

  clearAndTypeBio(bio) {
    this.bioField.should('be.visible').clear().type(bio);
  }

  clearAndTypeEmail(email) {
    this.emailField.should('be.visible').clear().type(email);
  }

  clearAndTypePassword(password) {
    this.passwordField.should('be.visible').clear().type(password);
  }

  clickUpdateSettingsBtn() {
    this.updateSettingsBtn.click();
  }

  clickLogoutBtn() {
    this.logoutBtn.click();
  }

  assertUsernameValue(username) {
    this.usernameField.should('have.value', username);
  }

  assertBioValue(bio) {
    this.bioField.should('have.value', bio);
  }

  assertEmailValue(email) {
    this.emailField.should('have.value', email);
  }

  assertSuccessMessage(message) {
    this.swalModal.should('contain', message);
  }

  closeSuccessModal() {
    this.swalButton.click();
  }
}

export default SettingsPageObject;
