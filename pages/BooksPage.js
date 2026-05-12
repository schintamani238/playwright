/**
 * SauceDemo Login Page
 * Handles login functionality for SauceDemo application
 */
import { testData } from '../fixtures/testData';
import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class BooksPage extends BasePage {
  // Selectors
  expandElementsGroup(n) {
    return '.element-group:nth-child(' + n + ')';
  }

  get getTextBox() {
    return 'a[href="/text-box"]';
  }

   get displayExpandedGroup() {
    return '.show';
  }

  get loginLabel() {
    return '//*[@id="a-page"]/div[1]/div/ul[1]/li[2]/span/span/a/div/div/div/div[2]/h2';
  }

  get continueButton() {
    return '.a-button-input';
  }

  get errorMessage() {
    return '[data-test="error"]';
  }

  get signUpLink() {
    return '#signInSubmit';
  }

  /**
   * Navigate to Books page
   */
  async navigateToBooks() {
    await this.goto(testData.urls.baseUrl);
    console.log('   >>>>> Get current URL: ' + await this.getCurrentUrl());
    expect(await this.getCurrentUrl()).toContain('books');
    await this.waitForTimeout(2000);
  }

  /**
   * Expand elements group to reveal content
   */
  async expandGroup(groupNumber) {
    await this.clickElement(this.expandElementsGroup(groupNumber));
    await this.waitForElement(this.getTextBox);
  }
}

export function createBooksPage(page) {
  return new BooksPage(page);
}
