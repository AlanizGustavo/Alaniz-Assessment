/* eslint-disable no-console */
import { expect, Locator, Page } from '@playwright/test';

export class ResultsPage {
  readonly page: Page;
  readonly resultTitle: Locator;
  readonly searchTabs: Locator;
  readonly searchPagination: Locator;
  readonly courseTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.resultTitle = page.locator('.Results-title');
    this.searchTabs = page.locator(tabSelector);
    this.searchPagination = page.locator('.SearchPagination .page');
    this.courseTitle = page.locator('.CourseCard-content-title').first();
  }

  /**
   * This function checks if there is a title of the searched topic
   */
  async isFiltered(topic: string) {
    if ((await this.areThereTabs()) === false) {
      console.log(`\nNo matches found for ${topic}`);
    }
    return expect((await this.resultTitle!.count()) > 0).toBeTruthy();
  }

  /**
   * This function counts how many pages has the current tab.
   * @return {number}
   */
  async numPages(): Promise<number> {
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
   * This function checks if there are tabs in the page. If there arent any tab. there are no courses.
   * @return {boolean}
   */
  async areThereTabs(): Promise<boolean> {
    return (await this.searchTabs.count()) > 0;
  }

  /**
   * This function selects the first course in the list and return his title
   * @return {boolean}
   */
  async clickOnFirstCourse(): Promise<string> {
    const title = await this.courseTitle.innerText();
    await this.courseTitle.click();
    return title;
  }
}
const tabSelector = '.SearchTabs-tabs .Tab';
