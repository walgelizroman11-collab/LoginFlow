const {test, expect} = require ('@playwright/test');
const {Greenkart} = require('./POM/Greenkart');

test('Example2', async function({page}) {

const Power = new Greenkart (page);

await Power.openningWebsite();
await Power.checkout();
await Power.assertio();

});