# Page Object Model (POM) Structure

This project follows the **Page Object Model** design pattern, a best practice in test automation for creating maintainable, scalable, and reusable test code.

## Directory Structure

```
project-root/
├── pages/                 # Page Objects (UI interactions)
│   ├── BasePage.js       # Base class with common methods
│   ├── LoginPage.js      # SauceDemo Login page object
│   ├── InventoryPage.js  # SauceDemo Inventory page object
│   └── CheckoutPage.js   # SauceDemo Checkout page object
│
├── tests/                 # Test suites
│   └── specs/            # Organized test specifications
│       ├── sauceDemo.spec.js    # SauceDemo test cases
│       └── example.spec.js      # Example/Playwright.dev tests
│
├── fixtures/             # Test data
│   └── testData.js       # Constants, users, test data
│
├── utils/                # Utility functions
│   └── testHelpers.js    # Reusable helper functions
│
└── playwright.config.js  # Playwright configuration
```

## Page Objects

### BasePage.js
**Purpose**: Base class containing common functionality shared across all pages

**Key Methods**:
- `goto(url)` - Navigate to URL
- `fillInput(selector, value)` - Fill form fields
- `clickElement(selector)` - Click elements
- `getElementText(selector)` - Extract text content
- `isElementVisible(selector)` - Check element visibility
- `waitForElement(selector, timeout)` - Wait for element presence

**Usage**:
```javascript
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
  }
}
```

### LoginPage.js
**Purpose**: Encapsulates all login-related interactions

**Key Methods**:
- `navigateToLogin()` - Go to SauceDemo login page
- `login(username, password)` - Perform login
- `loginAsStandardUser()` - Quick login with test user
- `isErrorDisplayed()` - Check error visibility
- `getErrorMessage()` - Get error text

**Example**:
```javascript
const loginPage = new LoginPage(page);
await loginPage.navigateToLogin();
await loginPage.loginAsStandardUser();
```

### InventoryPage.js
**Purpose**: Manages product listing and inventory operations

**Key Methods**:
- `isOnInventoryPage()` - Verify inventory page loaded
- `clickProductByName(productName)` - Click specific product
- `addProductToCart(productName)` - Add item to cart
- `getCartCount()` - Get number of items in cart
- `getProductNames()` - Get all product names
- `getProductPrices()` - Get all product prices
- `logout()` - Perform logout

**Example**:
```javascript
const inventoryPage = new InventoryPage(page);
await inventoryPage.addProductToCart('Sauce Labs Backpack');
const count = await inventoryPage.getCartCount();
```

### CheckoutPage.js
**Purpose**: Handles shopping cart and checkout process

**Key Methods**:
- `clickCheckout()` - Start checkout
- `fillCheckoutInfo(firstName, lastName, postalCode)` - Fill customer info
- `clickContinue()` - Proceed to review
- `clickFinish()` - Complete order
- `isOrderComplete()` - Verify order completion
- `getCompletionMessage()` - Get success message
- `removeItemFromCart(productName)` - Remove item
- `completeCheckout(...)` - Complete full checkout flow

**Example**:
```javascript
const checkoutPage = new CheckoutPage(page);
await checkoutPage.completeCheckout('John', 'Doe', '12345');
const isComplete = await checkoutPage.isOrderComplete();
```

## Test Data (fixtures/testData.js)

Centralized test data with constants:

```javascript
testData.users.standardUser        // Login credentials
testData.products.testShirt         // Product names
testData.urls.inventoryUrl          // URLs
testData.checkoutInfo.validCheckout // Checkout data
```

**Benefits**:
- Easy to update credentials globally
- Reusable across multiple tests
- Clear separation of test data from test logic

## Utilities (utils/testHelpers.js)

Helper functions for common operations:

- `wait(ms)` - Pause execution
- `generateRandomString()` - Create random data
- `generateRandomEmail()` - Create test emails
- `retry(fn, retries, delay)` - Retry flaky operations
- `logMessage(message)` - Timestamped logging
- `takeScreenshotWithTimestamp()` - Screenshot with timestamp

**Example**:
```javascript
import { wait, logMessage, retry } from '../utils/testHelpers';

await wait(2000);
logMessage('Step completed');
await retry(async () => { /* operation */ }, 3, 1000);
```

## Test Specifications

### Writing Tests with POM

✅ **Good** - Using page objects:
```javascript
test('Should complete purchase', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  
  await loginPage.navigateToLogin();
  await loginPage.loginAsStandardUser();
  expect(await inventoryPage.isOnInventoryPage()).toBeTruthy();
});
```

❌ **Bad** - Direct selector usage:
```javascript
test('Should complete purchase', async ({ page }) => {
  await page.goto('https://saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  // ... many selector lines
});
```

## Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test -- tests/specs/sauceDemo.spec.js

# Run specific test
npm test -- --grep "complete purchase"

# Run in headed mode
npm run test:headed

# Run in debug mode
npm run test:debug

# View HTML report
npm run test:report
```

## Benefits of Page Object Model

| Benefit | Explanation |
|---------|-------------|
| **Maintainability** | Changes to selectors only need updates in one place |
| **Readability** | Tests read like plain English instead of technical details |
| **Reusability** | Page methods can be reused across multiple tests |
| **Scalability** | Easy to add new pages without affecting existing tests |
| **Reduced Duplication** | Common actions are defined once in page objects |
| **Better Organization** | Logical separation of concerns (pages, tests, data) |

## Best Practices

1. **One page class per page** - Keep pages focused and single-responsibility
2. **Use descriptive method names** - Methods should describe what they do
3. **Abstract selectors** - Use getters for selectors, not raw strings
4. **Common operations in BasePage** - Reduce duplication
5. **Centralize test data** - Keep fixtures in testData.js
6. **Use helper functions** - Extract repetitive logic to utils
7. **Add logging** - Use logMessage() for debugging
8. **Keep methods simple** - Break complex operations into smaller methods

## Adding New Pages

To add a new page object:

1. Create file in `pages/` directory: `NewPage.js`
2. Extend BasePage:
   ```javascript
   const BasePage = require('./BasePage');
   
   class NewPage extends BasePage {
     // Add page-specific selectors and methods
   }
   
   module.exports = NewPage;
   ```
3. Use in tests:
   ```javascript
   import NewPage from '../pages/NewPage';
   const newPage = new NewPage(page);
   ```

## Debugging

### Enable Verbose Logging
Tests use `logMessage()` which includes timestamps:
```
[2024-01-15T10:30:45.123Z] Starting: Complete Purchase Flow Test
[2024-01-15T10:30:46.456Z] Step 1: Navigating to login page
```

### Screenshots on Failure
Page objects include screenshot methods:
```javascript
await loginPage.takeScreenshot('login-failure');
```

### Use Playwright Inspector
```bash
npm run test:debug
```

## Continuous Integration

The POM structure is CI/CD friendly. Jenkins/GitHub Actions can run:
```bash
npm install
npm test
```

HTML reports are auto-generated in `playwright-report/`.

## References

- [Playwright Documentation](https://playwright.dev/)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
