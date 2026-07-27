export class checkout {
    constructor(page) {
        this.page = page;
        this.addtocart = page.locator('.product-item', { hasText: '$25 Virtual Gift Card' }).getByRole('button', { name: 'Add to cart' });
        this.name = page.getByRole('textbox', { name: 'Recipient\'s Name:' });
        this.email = page.getByRole('textbox', { name: 'Recipient\'s Email:' });
        this.cartbutton = page.locator('#add-to-cart-button-2');
        this.shopingcartbutton = page.getByRole('link', { name: 'shopping cart', exact: true });
        this.checkoutbutton = page.getByRole('button', { name: 'Checkout' });
        this.termofservicebutton = page.locator('#termsofservice');
        this.checkoutbutton2 = page.getByRole('button', { name: 'Checkout' });
        this.textcompany = page.getByRole('textbox', { name: 'Company:' });
        this.country = page.locator('#BillingNewAddress_CountryId');
        this.city = page.getByRole('textbox', { name: 'City:' });
        this.addres1 = page.getByRole('textbox', { name: 'Address 1:' })
        this.addres2 = page.getByRole('textbox', { name: 'Address 2:' });
        this.zipcode = page.getByRole('textbox', { name: 'Zip / postal code:' });
        this.phone = page.getByRole('textbox', { name: 'Phone number:' });
        this.fax = page.getByRole('textbox', { name: 'Fax number:' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.paymentMethod = page.locator('#payment-method-buttons-container').getByRole('button', { name: 'Continue' });
        this.payinfo = page.locator('#payment-info-buttons-container').getByRole('button', { name: 'Continue' });
        this.confirmButton = page.locator('#confirm-order-buttons-container').getByRole('button', { name: 'Confirm' });
    }

    async checkout22(name, email, Company, selectoption, city, addres1, addres2, zipcode, phonenumer, fax) {
        await this.addtocart.click();
        await this.name.fill(name);
        await this.email.fill(email);
        await this.cartbutton.click();
        await this.shopingcartbutton.click();
        await this.checkoutbutton.click();
        await this.termofservicebutton.click();
        await this.checkoutbutton2.click();
        await this.textcompany.fill(Company);
        await this.country.selectOption(selectoption);
        await this.city.fill(city);
        await this.addres1.fill(addres1)
        await this.addres2.fill(addres2);
        await this.zipcode.fill(zipcode);
        await this.phone.fill(phonenumer);
        await this.fax.fill(fax);
        await this.continueButton.click();
        await this.paymentMethod.click();
        await this.payinfo.click();
        await this.confirmButton.click();
    }
}