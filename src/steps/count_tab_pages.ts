import { ICustomWorld } from '../support/custom-world';
import { verifyPage } from '../utils/elements';
import { ResultsPage } from '../pages/resultsPage';
import { When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

/**
 * This step shows you the number of pages that each tab has
 * @param {ICustomWorld} this
 */
When(
  'The user should see the number of pages of each tab if there are more than one in {string}',
  async function (this: ICustomWorld, topic: string) {
    const page = verifyPage(this.page!);
    const resultPage = new ResultsPage(page);
    try {
      expect(await resultPage.isThereTabs()).toBeTruthy();
    } catch (error) {
      throw new Error('The searched topic has no matches');
    }
    await resultPage.goThrowTabs(topic);
  },
);
