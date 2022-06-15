/* eslint-disable no-console */
import { Locator, Page } from '@playwright/test';

export class CoursePage {
  readonly page: Page;
  readonly numOpinions: Locator;

  constructor(page: Page) {
    this.page = page;
    this.numOpinions = page.locator('.CourseExtraInfo-content-opinions');
  }

  async areThereOpinions(): Promise<boolean> {
    return (await this.numOpinions.count()) > 0;
  }

  async getNumberOfOpinions(title: string) {
    const numberOpinions = await this.numOpinions.innerText();
    console.log(`\nTHE NUMBER OF OPINIONS OF THE COURSE:\n${title} IS: ${numberOpinions}`);
  }
}
