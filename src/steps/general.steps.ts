import { ICustomWorld } from '../support/custom-world';
import { verifyPage } from '../utils/elements';
import { MainPage } from '../pages/mainPage';
import { ResultsPage } from '../pages/resultsPage';
import { BlogPage } from '../pages/blogPage';
import { Given, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

let mainPage: MainPage;

/**
 * This step sends you to platzi url
 * @param {ICustomWorld} this
 */
Given('The user goes to the site', async function (this: ICustomWorld) {
  const page = verifyPage(this.page!);
  mainPage = new MainPage(page);
  await mainPage.goTo();
});

/**
 * This step looks for a topic in the search engine
 * @param {ICustomWorld} this
 */
When('The user looks for {string}', async function (this: ICustomWorld, topic: string) {
  const page = verifyPage(this.page!);
  const mainPage = new MainPage(page);
  await mainPage.lookForTopic(topic);
});

/**
 * This step checks if the searched topic has matches
 * @param {ICustomWorld} this
 */
When('The user checks the existence of tabs', async function (this: ICustomWorld) {
  const page = verifyPage(this.page!);
  const resultPage = new ResultsPage(page);
  try {
    expect(await resultPage.areThereTabs()).toBeTruthy();
  } catch (error) {
    throw new Error('The searched topic has no matches');
  }
});

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
