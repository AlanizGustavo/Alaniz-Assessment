import { expect, Locator, Page } from '@playwright/test';
import 'dotenv/config';

export class ResultsPage {
  readonly page: Page;
  readonly resultTitle?: Locator;
  readonly searchTabs?: unknown;

  constructor(page: Page) {
    this.page = page;
    this.resultTitle = page.locator('.Results-title');
    this.searchTabs = page.locator('.SearchTabs-tabs');
  }

  async isFiltered() {
    return expect((await this.resultTitle!.count()) > 0).toBeTruthy();
  }
}
