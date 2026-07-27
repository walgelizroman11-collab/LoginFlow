export class Register {
    constructor(page) {
        this.page = page;
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.genderMale = page.getByRole('radio', { name: 'Male', exact: true });
        this.firstNameInput = page.getByRole('textbox', { name: 'First name:' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name:' });
        this.emailInput = page.getByRole('textbox', { name: 'Email:' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password:', exact: true });
        this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm password:' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    async iralapagina() {
        await this.page.goto('https://demowebshop.tricentis.com/books');
    }

    async registrationPhase(firstname, lastname, correo, password, password2) {
        await this.registerLink.click();
        await this.genderMale.check();
        await this.firstNameInput.fill(firstname);
        await this.lastNameInput.fill(lastname);
        await this.emailInput.fill(correo);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password2);
        await this.registerButton.click();
        await this.continueButton.click();
    }
}