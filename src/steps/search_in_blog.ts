import { ICustomWorld } from '../support/custom-world';
import { verifyPage } from '../utils/elements';
import { MainPage } from '../pages/mainPage';
import { BlogPage } from '../pages/blogPage';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

/**
 * This step takes you to the blog section
 * @param {ICustomWorld} this
 */
Given('The user goes to the blog', async function (this: ICustomWorld) {
  const page = verifyPage(this.page!);

  const mainPage = new MainPage(page);
  await mainPage.goToBlog();
});

/**
 * This step filters the posts by @param topic
 * @param {ICustomWorld} this
 * @param {string} topic
 */
When('The user filters by {string}', async function (this: ICustomWorld, topic: string) {
  const page = verifyPage(this.page!);
  const blogPage = new BlogPage(page);
  await blogPage.searchTopic(topic);
});

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
