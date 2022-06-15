import { urlMap } from '../pom';
import { Locator, Page } from '@playwright/test';
import 'dotenv/config';

export class MainPage {
  readonly page: Page;
  readonly loginBtn: Locator;
  readonly searchBox: Locator;
  readonly searchBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.locator('.ButtonLogin');
    this.searchBox = page.locator('.NewSearch-input');
    this.searchBtn = page.locator('.NewSearch-button');
  }

  /**
   * This function gets you to the site
   */
  async goTo() {
    await this.page.goto(urlMap.get('platzy'), { waitUntil: 'domcontentloaded', timeout: 0 });
  }

  /**
   * This function returns the URL
   */
  async getUrl() {
    return this.page.url();
  }

  /**
   * This function fill the search input and filters by @param topic
   * @param {ICustomWorld} this
   * @param {string} topic
   */
  async lookForTopic(topic: string) {
    await this.searchBox.fill(topic);
    await this.searchBtn.click();
  }
}
