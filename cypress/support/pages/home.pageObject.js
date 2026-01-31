import PageObject from '../PageObject';

class HomePageObject extends PageObject {
  url = '/#/';

  get usernameLink() {
    return cy.getByDataCy('username-link');
  }

  get settingsLink() {
    return cy.getByDataCy('settings-link');
  }

  get newArticleLink() {
    return cy.getByDataCy('new-article-link');
  }

  clickNewArticleLink() {
    this.newArticleLink.click();
  }

  clickSettingsLink() {
    this.settingsLink.click();
  }

  assertHeaderContainUsername(username) {
    this.usernameLink
      .should('contain', username);
  }
}

export default HomePageObject;
