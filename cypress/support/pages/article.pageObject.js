import PageObject from '../PageObject';

class ArticlePageObject extends PageObject {
  url = '#/editor';

  get titleField() {
    return cy.getByDataCy('title-article');
  }

  get descriptionField() {
    return cy.getByDataCy('description-article');
  }

  get bodyField() {
    return cy.getByDataCy('body-article');
  }

  get publishArticleBtn() {
    return cy.getByDataCy('publish-article-btn');
  }

  get editArticleBtn() {
    return cy.getByDataCy('edit-article-btn');
  }

  get deleteArticleBtn() {
    return cy.getByDataCy('delete-article-btn');
  }

  typeTitle(title) {
    this.titleField.type(title);
  }

  typeDescription(description) {
    this.descriptionField.type(description);
  }

  typeBody(body) {
    this.bodyField.type(body);
  }

  clickPublishArticleBtn() {
    this.publishArticleBtn.click();
  }

  clickEditArticleBtn() {
    this.editArticleBtn.click();
  }

  clickDeleteArticleBtn() {
    this.deleteArticleBtn.click();
  }

  createArticle(title, description, body) {
    this.typeTitle(title);
    this.typeDescription(description);
    this.typeBody(body);
    this.clickPublishArticleBtn();
  }
}

export default ArticlePageObject;
