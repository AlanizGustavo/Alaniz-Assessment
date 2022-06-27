import { ICustomWorld } from '../support/custom-world';
import { verifyPage } from '../utils/elements';
import { MainPage } from '../pages/mainPage';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import 'dotenv/config';

/**
 * This step checks if the user is at main page
 * @param {ICustomWorld} this
 */
Then('The user should be in landing page', async function (this: ICustomWorld) {
  const page = verifyPage(this.page!);
  const mainPage = new MainPage(page);
  try {
    expect(await mainPage.getUrl()).toContain(process.env.BASE_URL);
  } catch (error) {
    throw new Error('No platzi page found');
  }
  try {
    expect(await mainPage.isThereLogo()).toBeTruthy();
  } catch (error) {
    throw new Error('No Platzi logo found');
  }
});
