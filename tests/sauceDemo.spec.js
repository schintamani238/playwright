import {test} from '@playwright/test';
import {expect} from'@playwright/test';

test('SauceLabs Demo Script', (async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').type('standard_user'),
    await page.locator('#password').type('secret_sauce'),
    await page.locator('#login-button').click(),
    await expect(page.url()).toContain('inventory.html'),
    await expect(await page.title()).toBe('Swag Labs'),
    await page.getByText('Test.allTheThings() T-Shirt (Red)').click(),
    await page.locator('#add-to-cart').click(),
    await page.waitForTimeout(2000),
    await expect(page.locator('.shopping_cart_link')).toHaveText('1');
    await page.locator('.shopping_cart_badge').click(),
    await expect(page.locator('#checkout')).toBeVisible(),
    await page.locator('#checkout').click(),
    await page.locator('#first-name').type('Smitha'),
    await page.locator('#last-name').type('Chintamani'),
    await page.locator('#postal-code').type('560037'),
    await page.locator('#continue').click(),
    await expect(page.locator('#finish')).toBeVisible(),
    await page.locator('#finish').click(),
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!'),
    console.log('Order Placed Successfully');
}));

test('Back to Products', (async({page}) => {
    await page.goto('https://www.saucedemo.com/')
  await page.locator('#user-name').type('standard_user'),
    await page.locator('#password').type('secret_sauce'),
    await page.locator('#login-button').click(),
    await expect(page.url()).toContain('inventory.html'),
    await expect(await page.title()).toBe('Swag Labs');
})); 

