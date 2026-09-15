class RaulPOM {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#userEmail');
    this.mobileInput = page.locator('#userMobile');
    this.professionSelect = page.getByRole('combobox');
    this.maleRadio = page.locator('input[value="Male"]');
    this.passwordInput = page.locator('#userPassword');
    this.confirmPasswordInput = page.locator('#confirmPassword');
    this.termsCheckbox = page.locator('input[type="checkbox"][formcontrolname="required"]');
    this.submitButton = page.locator('#login');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.addToCartButton = page.getByRole('button', { name: 'Add To Cart' }).nth(0);
    this.cartButton = page.getByRole('button', { name: '   Cart' });
    this.checkoutButton = page.getByRole('button', { name: /Checkout/ });
    this.countrySelect = page.getByRole('combobox');
    this.shippingTextboxes = page.getByRole('textbox');
    this.countryInput = page.getByRole('textbox', { name: 'Select Country' });
    this.placeOrderButton = page.getByText('Place Order');
  }

  async abrirRegistro() {
    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/register');
  }

  async registrar(nombre, apellido, email, telefono, contrasena) {
    await this.firstNameInput.fill(nombre);
    await this.lastNameInput.fill(apellido);
    await this.emailInput.fill(email);
    await this.mobileInput.fill(telefono);
    await this.professionSelect.selectOption('1: Doctor');
    await this.maleRadio.check();
    await this.passwordInput.fill(contrasena);
    await this.confirmPasswordInput.fill(contrasena);
    await this.termsCheckbox.check();
    await this.submitButton.click();
    await this.page.getByText('Account Created Successfully').waitFor({ state: 'visible' });
  }

  async iniciarSesion(email, contrasena) {
    await this.loginButton.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(contrasena);
    await this.submitButton.click();
  }

  async agregarPrimerProductoAlCarrito() {
    await this.page.waitForLoadState('networkidle');
    await this.addToCartButton.waitFor({ state: 'visible' });
    await this.addToCartButton.click();
    await this.cartButton.click();
    await this.checkoutButton.click();
  }

  async completarEnvio() {
    await this.countrySelect.nth(1).selectOption('17');
    await this.countrySelect.first().selectOption('10');
    await this.shippingTextboxes.nth(1).fill('123');
    await this.shippingTextboxes.nth(2).fill('Julia');
    await this.countryInput.pressSequentially('Dominican Republic');
    await this.page.locator('button.ta-item')
      .filter({ hasText: 'Dominican Republic' })
      .click();
  }

  async realizarPedido() {
    await this.placeOrderButton.click();
  }
}

module.exports = { RaulPOM };
