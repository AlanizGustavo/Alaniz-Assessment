import { ICustomWorld } from '../support/custom-world';
import { verifyPage } from '../utils/elements';
import { MainPage } from '../pages/mainPage';
import { Given, When } from '@cucumber/cucumber';

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
