const { expect } = require('@playwright/test');


class Example4 {
    constructor (page){
        this.page = page
        this.name = page.locator('form input[name="name"]')
        this.email = page.locator('input[name="email"]')
        this.paswd = page.getByRole('textbox', { name: 'Password' })
        this.checkbox = page.getByRole('checkbox', { name: 'Check me out if you Love' })
        this.submit = page.getByRole('button', { name: 'Submit' })
        this.shop = page.getByRole('link', { name: 'Shop' })
        this.appcard = page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' })
        this.current = page.getByText('Checkout ( 1 ) (current)')
        this.checkout = page.getByRole('button', { name: 'Checkout' })
        this.choosedelivery = page.getByRole('textbox', { name: 'Please choose your delivery' })
        this.agree = page.getByText('I agree with the term &')
        this.purchase = page.getByRole('button', { name: 'Purchase' })
    }
    async openingwebsite (){
        await page.goto('https://rahulshettyacademy.com/angularpractice/');

    }

    async restpom (nombre, correoelec, pwas){
        this.name.fill(nombre)
        this.email.fill(correoelec)
        this.paswd.fill(pwas)
        this.checkbox.check()
        this.submit.click()
        this.shop.click()
        this.appcard.click()
        this.current.click()
        this.choosedelivery.fill('New York')
        this.agree.click()
        this.purchase.click()
    }
}

module.exports = {Example4};