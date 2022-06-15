import { ICustomWorld } from '../support/custom-world';
import { verifyPage } from '../utils/elements';
import { MainPage } from '../pages/mainPage';
import { Given } from '@cucumber/cucumber';

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
