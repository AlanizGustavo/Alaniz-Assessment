import { ICustomWorld } from '../support/custom-world';
import { verifyPage } from '../utils/elements';
import { BlogPage } from '../pages/blogPage';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

/**
 * This step check if the courses are filtered
 * @param {ICustomWorld} this
 */
Then('The user should see the filtered posts', async function (this: ICustomWorld) {
  const page = verifyPage(this.page!);
  const blogPage = new BlogPage(page);
  try {
    expect(await blogPage.isFiltered()).toBeTruthy();
  } catch (error) {
    throw new Error('No results were displayed for the search query');
  }
});
