import { Locator, Page } from '@playwright/test';

export class BlogPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchIcon: Locator;
  readonly searchTitle: Locator;
  readonly postList: Locator;
  readonly filter: Locator;
  readonly mostVotedFilter: Locator;
  readonly rateNumber: Locator;
  readonly mostVotedPostName: Locator;
  readonly mostVotedPostRate: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('.Search-input');
    this.searchIcon = page.locator('.Search-icon');
    this.searchTitle = page.locator('.HeroSearch-copy');
    this.postList = page.locator('.ContributionList > article');
    this.filter = page.locator('.Filters-container');
    this.mostVotedFilter = page.locator('a.Filters-single:nth-child(3)');
    this.rateNumber = page.locator(selectorRate);
    this.mostVotedPostName = page.locator('.Contribution-title').first();
    this.mostVotedPostRate = page.locator(selectorRate).first();
  }

  /**
   * This function fills the search field with a certain topic and searches for it.
   * @param {string} topic
   */
  async searchTopic(topic: string) {
    await this.page.waitForLoadState('networkidle');
    await this.searchInput.fill(topic, { timeout: 0 });
    await this.searchIcon.click();
  }

  /**
   * This function returns a boolean depending on the existence of the search title
   * @return {boolean}
   */
  async isFiltered(topic: string): Promise<boolean> {
    if ((await this.areTherePosts()) === false) {
      console.log(`\nNo matches found for ${topic}`);
    }
    return (await this.searchTitle.count()) > 0;
  }

  /**
   * This function returns a boolean depending on the existence of posts
   * @return {boolean}
   */
  async areTherePosts(): Promise<boolean> {
    return (await this.rateNumber.count()) > 0;
  }

  /**
   * This function uses the filter to sort by most voted
   */
  async filterByMostVoted() {
    await this.filter.click();
    await this.mostVotedFilter.click();
  }

  /**
   * This function check if the list of mos voted post is correctly sorted
   * @return {boolean}
   */
  async isSort(): Promise<boolean> {
    const rateArray = await this.page.$$(selectorRate);

    let success = true;
    let index = 0;
    while (success && index < rateArray.length - 1) {
      const rate1 = await rateArray[index].innerText();

      const rate2 = await rateArray[index + 1].innerText();

      if (+rate1 > +rate2) {
        index++;
      } else {
        success = false;
      }
    }
    return success;
  }

  /**
   * This function returns the name and the rate of the most voted post in the list
   * @return {string}
   */
  async getMostVoted(topic: string): Promise<string> {
    let postTitle;
    let postRate;
    try {
      postTitle = await this.mostVotedPostName.innerText();
    } catch (error) {
      throw new Error('Post title missing');
    }
    try {
      postRate = await this.mostVotedPostRate.innerText();
    } catch (error) {
      throw new Error('Rating number missing');
    }

    return `\nThe most voted post of the topic ${topic} is:\n${postTitle} with ${postRate} likes`;
  }
}
const selectorRate = '.Star-number';
