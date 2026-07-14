import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    // Guardamos los juguetes (elementos)
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  // Las acciones que sabe hacer esta página
  async entrarALaWeb() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async iniciarSesion(usuario, contrasena) {
    await this.usernameInput.fill(usuario);
    await this.passwordInput.fill(contrasena);
    await this.loginButton.click();
  }
}