import { ICustomWorld } from '../../support/custom-world';
import { verifyPage } from '../../utils/elements';
import { ResultsPage } from '../../pages/resultsPage';
import { Then } from '@cucumber/cucumber';

/**
 * This step check if the courses are filtered
 * @param {ICustomWorld} this
 * @param {string} topic
 */
Then(
  'The user should see the filtered courses by {string}',
  async function (this: ICustomWorld, topic: string) {
    const page = verifyPage(this.page!);
    const resultsPage = new ResultsPage(page);

    try {
      await resultsPage.isFiltered(topic);
    } catch (error) {
      throw new Error('No results were displayed for the searched query');
    }
  },
);
