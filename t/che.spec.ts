import { test, expect } from '@playwright/test';

import { Register } from './POM2/Resgitration';
import { checkout } from './POM2/Checkout2';

test('ff', async({page}) => {
const re = new Register (page)
const ch = new checkout (page)

await re.iralapagina();
await re.registrationPhase('Mary', 'Neymar', 'ds857@gmail.com', 'ewqewe0', 'ewqewe0')

//// checkout 
await ch.checkout22('Albert', 'laknsd@gmail.com', 'Losla', '1', 'NY', 'asdsjjjjd', 'sdsds', '55655', '1234658475', '4561237845')
await expect(page.getByText('Your order has been successfully processed!')).toBeVisible();
})



