/* eslint-disable no-console */
import { expect, Locator, Page } from '@playwright/test';
import 'dotenv/config';

export class ResultsPage {
  readonly page: Page;
  readonly resultTitle: Locator;
  readonly searchTabs: Locator;
  readonly searchPagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.resultTitle = page.locator('.Results-title');
    this.searchTabs = page.locator(tabSelector);
    this.searchPagination = page.locator('.SearchPagination .page');
  }

  /**
   * This function checks if there is a title of the searched topic
   */
  async isFiltered() {
    return expect((await this.resultTitle!.count()) > 0).toBeTruthy();
  }

  /**
   * This function counts how many pages has the current tab.
   * @return {number}
   */
  async numPages() {
    const count = await this.searchPagination.count();
    if (count === 0) {
      return count + 1;
    } else {
      return count;
    }
  }

  /**
   * This function goes throw the tabs and prints the number of pages of each tab
   * @param {string} topic
   */
  async goThrowTabs(topic: string) {
    const pages: { [key: string]: unknown } = {};
    for (let index = 0; index < (await this.searchTabs.count()); index++) {
      const tab = this.page.locator(`${tabSelector} >> nth=${index}`);
      const tabText = await (await tab.innerText()).split(' ')[0];
      await tab.click();
      switch (tabText) {
        case 'CURSOS':
          pages[tabText] = { pages: `${await this.numPages()}` };
          break;
        case 'ESCUELAS':
          pages[tabText] = { pages: `${await this.numPages()}` };
          break;
        case 'CLASES':
          pages[tabText] = { pages: `${await this.numPages()}` };
          break;
      }
    }
    console.log(`\nNumber of pages found of each tab for: ${topic}\n`);
    console.table(pages);
  }

  /**
   * This function checks if there are tabs in the page
   * @return {boolean}
   */
  async isThereTabs(): Promise<boolean> {
    return (await this.searchTabs.count()) > 0;
  }
}
const tabSelector = '.SearchTabs-tabs .Tab';
