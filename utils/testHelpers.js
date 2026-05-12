/**
 * Test Utilities
 * Common utility functions for test execution
 */

/**
 * Wait for a specific duration
 */
export async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate random string
 */
export function generateRandomString(length = 10) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Generate random email
 */
export function generateRandomEmail() {
  return `test_${generateRandomString(8)}@example.com`;
}

/**
 * Get current timestamp
 */
export function getTimestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

/**
 * Log message with timestamp
 */
export function logMessage(message) {
  console.log(`[${getTimestamp()}] ${message}`);
}

/**
 * Retry logic for flaky operations
 */
export async function retry(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      logMessage(`Retry attempt ${i + 1}/${retries - 1}. Waiting ${delay}ms...`);
      await wait(delay);
    }
  }
}

/**
 * Take screenshot with timestamp
 */
export async function takeScreenshotWithTimestamp(page, directory = 'screenshots') {
  const filename = `${directory}/screenshot_${getTimestamp()}.png`;
  await page.screenshot({ path: filename });
  logMessage(`Screenshot saved: ${filename}`);
  return filename;
}
