import { ICustomWorld } from '../../support/custom-world';
import { verifyPage } from '../../utils/elements';
import { BlogPage } from '../../pages/blogPage';
import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

let blogPage: BlogPage;
/**
 * This step filters the posts by most voted
 * @param {ICustomWorld} this
 */
When('The user filters by most voted', async function (this: ICustomWorld) {
  const page = verifyPage(this.page!);
  blogPage = new BlogPage(page);
  try {
    expect(await blogPage.areTherePosts()).toBeTruthy();
    await blogPage.filterByMostVoted();
  } catch (error) {
    throw new Error('No results were displayed for the searched query');
  }
});

/**
 * This step check if the list is correctly sorted
 */
Then('The user should see posts sorted by most voted', async function () {
  try {
    expect(await blogPage.isSort()).toBeTruthy();
  } catch (error) {
    throw new Error('The list of posts is not sorted');
  }
});
