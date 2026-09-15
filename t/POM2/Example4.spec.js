const {test, expect} = require ('@playwright/test');


test ('example4', async function ({page}) {

const uniqueID = Date.now();
const dynamicEmail = `juanaperez_${uniqueID}@gmail.com`

await page.goto('https://eventhub.rahulshettyacademy.com/login')
await page.locator('[href="/register"]').click()
await page.locator('#register-email').fill(dynamicEmail)
await page.locator('#register-password').fill('Wal2511@')
await page.getByPlaceholder('Repeat your password').fill('Wal2511@')
await page.locator('#register-btn').click()

// New Events 
await page.locator('#nav-events').click()
await page.getByRole('button', {name:'Add New Event'}).click()

/// ASSERTION ABOUT THE WARNING FOR THE NEW EVENT. 
await expect (page.getByText('. Once the limit is reached, your oldest event is automatically replaced when you add a new one.')).toBeVisible();

/// CONTINUE WITH THE EVENTS 
await page.getByLabel('Title').fill('Job Interview')
await page.getByPlaceholder('Describe the event…').fill('I want to save some quetions that I may be asked in the interview.')
await page.getByLabel('Category').selectOption('Conference')
await page.locator('#city').fill('Santo Domingo')
await page.getByLabel('Venue').fill('Coca Cola Park, New York New York.') 
await page.getByLabel('Event Date & Time').fill('2026-12-05T10:30')
await page.getByLabel('Price').fill('22.50')
await page.getByLabel('Total Seats').fill('10')
await page.getByLabel('Image URL (optional)').fill('N/A')
await page.getByRole('button', {name: '+ Add Event'}).click()
})

