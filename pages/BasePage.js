/**
 * Base Page Object
 * Contains common methods and utilities used across all pages
 */
export class BasePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   */
  async goto(url) {
    await this.page.goto(url);
  }

  /**
   * Wait for a specific timeout
   */
  async waitForTimeout(ms) {
    await this.page.waitForTimeout(ms);
  }

  /**
   * Get current page URL
   */
  async getCurrentUrl() {
    return this.page.url();
  }

  async mouseHover(selector) {
    await this.page.hover(selector);
  }

  /**
   * Get page title
   */
  async getPageTitle() {
    return this.page.title();
  }

  /**
   * Wait for element to be visible
   */
  async waitForElement(selector, timeout = 5000) {
    await this.page.waitForSelector(selector, {
      state: 'visible',
      timeout
    });
  }

  /**
   * Check if element is visible
   */
  async isElementVisible(selector) {
    try {
      await this.page.waitForSelector(selector, { state: 'visible', timeout: 1000 });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Fill input field
   */
  async fillInput(selector, value) {
    const locator = this.page.locator(selector);
    await locator.waitFor({ state: 'visible', timeout: 5000 });
    await locator.fill(value);
  }

  async waitForPageToLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click element
   */
  async clickElement(selector, options = {}) {
    const locator = this.page.locator(selector);
    await locator.waitFor({ state: 'visible', timeout: 5000 });
    await locator.click(options);
  }

  async clickElementByLabel(label) {
    await this.page.getByXpath(label).click();
  }

  /**
   * Get element text
   */
  async getElementText(selector) {
    return await this.page.locator(selector).textContent();
  }

  async doubleClickElement(selector){
  const locator = this.page.locator(selector);

    await locator.dblclick();
  }

  async checkElement(selector){
    const locator = this.page.locator(selector);
    await locator.check();
  }

  async selectElement(selector, value){
    const locator = this.page.locator(selector);
    await locator.selectOption(value);
  }

  async rightClickElement(selector){
    const locator = this.page.locator(selector);
    await locator.click({ button: 'right' });
  }

  /**
   * Take screenshot
   */
  async takeScreenshot(filename) {
    await this.page.screenshot({ path: `screenshots/${filename}.png` });
  }
}
