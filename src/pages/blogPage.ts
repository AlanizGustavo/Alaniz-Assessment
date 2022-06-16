import { Locator, Page } from '@playwright/test';

export class BlogPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchIcon: Locator;
  readonly searchTitle: Locator;
  readonly postList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('.Search-input');
    this.searchIcon = page.locator('.Search-icon');
    this.searchTitle = page.locator('.HeroSearch-copy');
    this.postList = page.locator('.ContributionList > article');
  }

  /**
   * This function fills the search field with a certain topic and searches for it.
   * @param {string} topic
   */
  async searchTopic(topic: string) {
    await this.searchInput.fill(topic);
    await this.searchIcon.click();
  }

  /**
   * This function returns a boolean depending on the existence of the search title
   * @return boolean
   */
  async isFiltered(): Promise<boolean> {
    return (await this.searchTitle.count()) > 0;
  }
}
