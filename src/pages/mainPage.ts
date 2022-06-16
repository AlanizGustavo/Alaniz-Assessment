import { urlMap } from '../pom';
import { Locator, Page } from '@playwright/test';
import 'dotenv/config';

export class MainPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchBtn: Locator;
  readonly sandwich: Locator;
  readonly blogBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator('.NewSearch-input');
    this.searchBtn = page.locator('.NewSearch-button');
    this.blogBtn = page.locator('text="Blog"');
    this.sandwich = page.locator('.Menu-hamburger');
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
   * @param {string} topic
   */
  async lookForTopic(topic: string) {
    await this.searchBox.fill(topic);
    await this.searchBtn.click();
    await this.page.waitForNavigation({ waitUntil: 'networkidle' });
  }

  /**
   * This function takes you to the blog page.
   * Due to a hidden "Blog" button when the screen is smaller than 1328px both accesses to the section are incorporated.
   */
  async goToBlog() {
    if ((await this.sandwich.count()) === 0) {
      await this.blogBtn.click();
    } else {
      await this.sandwich.click();
      await this.blogBtn.click();
    }
  }
}
