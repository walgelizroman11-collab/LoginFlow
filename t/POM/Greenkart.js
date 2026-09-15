const { expect } = require("@playwright/test");

class Greenkart {
    constructor(page){
        this.page = page;

        this.clickingIntoPlus = page.getByRole('link', { name: '+' })
        this.clickckingIntoAddToKartBtn = page.getByRole('button', { name: 'ADD TO CART' })
        this.goingToKartSection = page.getByRole('link', { name: 'Cart' })
        this.proceddingWithCheckout = page.getByRole('button', { name: 'PROCEED TO CHECKOUT' })
        this.placingOrder = page.getByRole('button', { name: 'Place Order' })
        this.selectingCountry = page.getByRole('combobox')
        this.clickingIntoCheckbox = page.getByRole('checkbox')
        this.clickingIntoProceedBtn = page.getByRole('button', { name: 'Proceed' })
        this.assertion = page.getByText("Thank you, your order has been placed successfully");
    }

    async openningWebsite (){
        await this.page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')
    }
    
    async checkout () {
        await this.clickingIntoPlus.first().click();
        await this.clickckingIntoAddToKartBtn.first().click();
        await this.goingToKartSection.click();
        await this.proceddingWithCheckout.click();
        await this.placingOrder.click();
        await this.selectingCountry.selectOption('India');;
        await this.clickingIntoCheckbox.check();
        await this.clickingIntoProceedBtn.click();
     
    }

    async assertio (){
        await expect(this.assertion).toBeVisible();
    }

}

module.exports = {Greenkart};