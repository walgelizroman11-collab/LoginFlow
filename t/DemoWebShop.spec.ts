import { expect, test } from "@playwright/test";

test('test', async ({ page }) => {
  // Creating new acc 
  await page.goto('https://demowebshop.tricentis.com/books');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).fill('Walgeliz');
  await page.getByRole('textbox', { name: 'Last name:' }).fill('Ramirez');
  await page.getByRole('textbox', { name: 'Email:' }).fill('wr2r46@gmail.com');
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Wal2211');
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Wal2211');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // checkout 
  await page.locator('.product-item', { hasText: '$25 Virtual Gift Card' }).getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('textbox', { name: 'Recipient\'s Name:' }).fill('Walgeliz');
  await page.getByRole('textbox', { name: 'Recipient\'s Email:' }).fill('wr2r@gmail.com');
  await page.locator('#add-to-cart-button-2').click();
  await page.getByRole('link', { name: 'shopping cart', exact: true }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.locator('#termsofservice').check();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Company:' }).fill('sss');
  await page.getByLabel('Country:').selectOption('9');
  await page.getByRole('textbox', { name: 'City:' }).fill('ny');
  await page.getByRole('textbox', { name: 'Address 2:' }).fill('15142');
  await page.getByRole('textbox', { name: 'Zip / postal code:' }).fill('151521');
  await page.getByRole('textbox', { name: 'Phone number:' }).fill('8556515555');
  await page.getByRole('textbox', { name: 'Fax number:' }).fill('58455155555');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('#payment-method-buttons-container').getByRole('button', { name: 'Continue' }).click();
  await page.locator('#payment-info-buttons-container').getByRole('button', { name: 'Continue' }).click();
  await page.locator('#confirm-order-buttons-container').getByRole('button', { name: 'Confirm' }).click();
  await expect(page.getByText('Your order has been successfully processed!')).toBeVisible();});