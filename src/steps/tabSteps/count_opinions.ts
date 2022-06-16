import { ICustomWorld } from '../../support/custom-world';
import { verifyPage } from '../../utils/elements';
import { CoursePage } from '../../pages/coursePage';
import { ResultsPage } from '../../pages/resultsPage';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

/**
 * This step shows you the number of opinion that the selected course has
 * @param {ICustomWorld} this
 */
Then(
  'The user should see the number of opinions of the selected course',
  async function (this: ICustomWorld) {
    const page = verifyPage(this.page!);

    const resultsPage = new ResultsPage(page);
    const titleCourse = await resultsPage.clickOnFirstCourse();
    await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

    const coursePage = new CoursePage(page);

    try {
      expect(await coursePage.areThereOpinions()).toBeTruthy();
      await coursePage.getNumberOfOpinions(titleCourse);
    } catch (error) {
      throw new Error('There is no opinion in this course');
    }
  },
);
