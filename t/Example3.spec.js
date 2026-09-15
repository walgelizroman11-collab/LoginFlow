const {test, expect} = require ('@playwright/test')
const { Example3 } = require('./POM/PomExample3');

test ('Example3', async function ({page}) {
    const example3 = new Example3(page);

    await example3.openingWebsite();
    await example3.registering('Juanalbert44544s415@gmail.com', 'Juan123456@', 'Juan123456@');
    await example3.bookingOrder('Juan Alberto', 'Juanalbert@gmail.com', '8092345152');
    await example3.assertion2();
});


