import { ICustomWorld } from '../support/custom-world';
import { verifyPage } from '../utils/elements';
import { ResultsPage } from '../pages/resultsPage';
import { Then } from '@cucumber/cucumber';

/**
 * This step check if the courses are filtered
 * @param {ICustomWorld} this
 */
Then('The user should see the filtered courses', async function (this: ICustomWorld) {
  const page = verifyPage(this.page!);
  const resultsPage = new ResultsPage(page);

  try {
    await resultsPage.isFiltered();
  } catch (error) {
    throw new Error('No results were displayed for the searched query');
  }
});
