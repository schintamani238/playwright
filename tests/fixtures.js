import { test as base } from '@playwright/test';
import { BooksPage } from '../pages/BooksPage';
import { ElementsPage } from '../pages/ElementsPage';
import { PracticeFormPage } from '../pages/PracticeFormPage';

/**
 * Global fixtures for page objects.
 * Import tests using: import { test, expect } from './fixtures'
 */
export const test = base.extend({
  booksPage: async ({ page }, use) => {
    await use(new BooksPage(page));
  },
  elementsPage: async ({ page }, use) => {
    await use(new ElementsPage(page));
  },
  practiceFormPage: async ({ page }, use) => {
    await use(new PracticeFormPage(page));
  }
});

export { expect } from '@playwright/test';
