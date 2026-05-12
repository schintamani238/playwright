import { test, expect } from '../fixtures';
import { testData } from '../../fixtures/testData';
import { logMessage, wait } from '../../utils/testHelpers';

test.describe('Books Page', () => {

  test('Should expand Elements page', async ({ booksPage }) => {
    logMessage('Starting: Complete Purchase Flow Test');
    
    // Step 1: Navigate and Login
    logMessage('Step 1: Navigating to books page');
    await booksPage.navigateToBooks();
    await booksPage.expandGroup(1);
    //await booksPage.expandGroup(2);

    // logMessage('Step 2: Logging in as standard user');
    // await getLoginPage().login();

    // // Step 2: Verify Login Success
    // logMessage('Step 3: Verifying inventory page loaded');
    // const isOnInventory = await getInventoryPage().isOnInventoryPage();
    // expect(isOnInventory).toBeTruthy();
    // const pageTitle = await getInventoryPage().getPageTitle();
    // expect(pageTitle).toBe('Swag Labs');

    // // Step 3: Add Product to Cart
    // logMessage('Step 4: Adding product to cart');
    // await getInventoryPage().clickProductByName(testData.products.testShirt);
    
    // logMessage('Step 5: Adding item to cart');
    // await getCheckoutPage().page.locator('#add-to-cart').click();
    
    // await wait(2000);
    
    // logMessage('Step 6: Verifying item in cart');
    // const cartCount = await getInventoryPage().getCartCount();
    // expect(cartCount).toBe(1);

    // // Step 4: Go to Checkout
    // logMessage('Step 7: Navigating to checkout');
    // await getInventoryPage().clickShoppingCart();

    // logMessage('Step 8: Proceeding to checkout');
    // await getCheckoutPage().clickCheckout();

    // // Step 5: Fill Checkout Information
    // logMessage('Step 9: Filling checkout information');
    // await getCheckoutPage().fillCheckoutInfo(
    //   testData.checkoutInfo.validCheckout.firstName,
    //   testData.checkoutInfo.validCheckout.lastName,
    //   testData.checkoutInfo.validCheckout.postalCode
    // );

    // logMessage('Step 10: Continuing checkout');
    // await getCheckoutPage().clickContinue();

    // logMessage('Step 11: Finishing order');
    // await getCheckoutPage().clickFinish();

    // // Step 6: Verify Order Completion
    // logMessage('Step 12: Verifying order completion');
    // const isOrderComplete = await getCheckoutPage().isOrderComplete();
    // expect(isOrderComplete).toBeTruthy();

    // const completionMessage = await getCheckoutPage().getCompletionMessage();
    // expect(completionMessage).toContain('Thank you for your order!');

    // logMessage('✅ Complete Purchase Flow Test - PASSED');
  });

  // test.skip('Should add and remove items from cart', async () => {
  //   const loginPage = getLoginPage();
  //   const inventoryPage = getInventoryPage();
  //   const checkoutPage = getCheckoutPage();
    
  //   logMessage('Starting: Add/Remove Items Test');
    
  //   await loginPage.navigateToLogin();
  //   await loginPage.loginAsStandardUser();
  //   expect(await inventoryPage.isOnInventoryPage()).toBeTruthy();

  //   logMessage('Adding multiple items to cart');
  //   await inventoryPage.addProductToCart(testData.products.backpack);
  //   await inventoryPage.addProductToCart(testData.products.bikeLight);
    
  //   let cartCount = await inventoryPage.getCartCount();
  //   expect(cartCount).toBe(2);

  //   logMessage('Removing item from cart');
  //   await inventoryPage.clickShoppingCart();
  //   await checkoutPage.removeItemFromCart(testData.products.backpack);
    
  //   cartCount = await checkoutPage.getCartItemCount();
  //   expect(cartCount).toBe(1);

  //   logMessage('✅ Add/Remove Items Test - PASSED');
  // });

  // test.skip('Should verify inventory page displays products', async () => {
  //   logMessage('Starting: Inventory Display Test');
    
  //   await getLoginPage().navigateToLogin();
  //   await getLoginPage().loginAsStandardUser();
  //   expect(await getInventoryPage().isOnInventoryPage()).toBeTruthy();

  //   logMessage('Retrieving product list');
  //   const products = await getInventoryPage().getProductNames();
  //   expect(products.length).toBeGreaterThan(0);

  //   logMessage(`Found ${products.length} products`);
  //   const prices = await getInventoryPage().getProductPrices();
  //   expect(prices.length).toBe(products.length);

  //   logMessage('✅ Inventory Display Test - PASSED');
  // });

  // test.skip('Should logout successfully', async () => {
  //   logMessage('Starting: Logout Test');
    
  //   await getLoginPage().navigateToLogin();
  //   await getLoginPage().loginAsStandardUser();
  //   expect(await getInventoryPage().isOnInventoryPage()).toBeTruthy();

  //   logMessage('Performing logout');
  //   await getInventoryPage().logout();

  //   const url = await getLoginPage().getCurrentUrl();
  //   expect(url).toContain('saucedemo.com');

  //   logMessage('✅ Logout Test - PASSED');
  // });
});
