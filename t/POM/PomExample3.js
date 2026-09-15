const { expect } = require('@playwright/test');

class Example3 {
    constructor (page){
        this.page = page
        this.email = page.getByTestId('register-email')
        this.password = page.getByTestId('register-password')
        this.retyPassword = page.getByRole('textbox', { name: 'Repeat your password' })
        this.clickingOnResgister = page.getByTestId('register-btn')
        this.booking = page.locator('#book-now-btn')
        this.fullName = page.locator('#customerName')
        this.email2 = page.getByTestId('customer-email')
        this.phoneNumber = page.getByRole('textbox', { name: 'Phone Number*' })
        this.confirminOrder = page.getByRole('button', { name: 'Confirm Booking' })
        this.assertion = expect(page.getByText('Booking Confirmed! 🎉'))
    }

    async openingWebsite(){

    await this.page.goto('https://eventhub.rahulshettyacademy.com/login');
    await this.page.getByRole('link', { name: 'Register' }).click();

    }
    async registering (email1, pass, retypepassword ){
    
        await this.email.fill(email1);
        await this.password.fill(pass);
        await this.retyPassword.fill(retypepassword);
        await this.clickingOnResgister.click();
        await this.booking.nth(0).click()
    }

    async bookingOrder (fuln, correoElectronico, phonenumero) {
        await this.fullName.fill(fuln);
        await this.email2.fill(correoElectronico);
        await this.phoneNumber.fill(phonenumero);
        await this.confirminOrder.click()
    }

    async assertion2 (){
        await this.assertion.toBeVisible();
    }
}

module.exports = {Example3};