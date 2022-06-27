import { ICustomWorld } from '../../support/custom-world';
import { verifyPage } from '../../utils/elements';
import { BlogPage } from '../../pages/blogPage';
import { Then } from '@cucumber/cucumber';

/**
 * This step shows the most voted post, printing name and number of likes
 * @param {ICustomWorld} this
 * @param {string} topic
 */
Then(
  'The user should see, according to the searched topic: {string}, the most voted post and its likes.',
  async function (this: ICustomWorld, topic: string) {
    const page = verifyPage(this.page!);
    const blogPage = new BlogPage(page);
    console.log(await blogPage.getMostVoted(topic));
  },
);
