import { ICustomWorld } from '../../support/custom-world';
import { verifyPage } from '../../utils/elements';
import { ResultsPage } from '../../pages/resultsPage';
import { Then } from '@cucumber/cucumber';

/**
 * This step shows you the number of pages that each tab has
 * @param {ICustomWorld} this
 * @param {string} topic
 */
Then(
  'The user should see the number of pages of each tab if there are more than one in {string}',
  async function (this: ICustomWorld, topic: string) {
    const page = verifyPage(this.page!);
    const resultPage = new ResultsPage(page);
    await resultPage.goThrowTabs(topic);
  },
);
