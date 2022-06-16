import { ICustomWorld } from '../../support/custom-world';
import { verifyPage } from '../../utils/elements';
import { BlogPage } from '../../pages/blogPage';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

/**
 * This step check if the courses are filtered
 * @param {ICustomWorld} this
 * @param {string} topic
 */
Then(
  'The user should see the filtered posts by {string}',
  async function (this: ICustomWorld, topic: string) {
    const page = verifyPage(this.page!);
    const blogPage = new BlogPage(page);
    try {
      expect(await blogPage.isFiltered(topic)).toBeTruthy();
    } catch (error) {
      throw new Error('No results were displayed for the search query');
    }
  },
);
