import test, { expect } from "@playwright/test";

test('solo pruebas', async ({page}) => {

// Login
await page.goto('https://www.saucedemo.com/')
await page.getByPlaceholder('Username').fill('standard_user') 
await page.getByPlaceholder('Password').fill('secret_sauce')  
await page.getByRole('button',{name: 'Login'}).click()

// adding an item to the car
await page.locator('#add-to-cart-sauce-labs-backpack').click()
await page.locator('#shopping_cart_container').click()

// checkout
await page.locator('#checkout').click()

//Checkout: Your Information
await page.locator('#first-name').fill('Walgeliz')
await page.locator('#last-name').fill('Rodriduez')
await page.locator('#postal-code').fill('12051')
await page.locator('#continue').click()

// Finish 
await page.locator('#finish').click()

// Assertion
await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');})