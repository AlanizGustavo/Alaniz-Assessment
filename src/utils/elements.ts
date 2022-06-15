import { Page } from 'playwright';

/**
 * Verifies that the page exists, and returns it
 *
 * @param {(Page | undefined)} page
 * @return {Page} page
 */
export function verifyPage(page: Page | undefined): Page {
  if (!page) {
    throw new Error('Page is not defined');
  }
  return page;
}
