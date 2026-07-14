import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.botonCheckout = page.locator('#checkout');
    this.inputNombre = page.locator('#first-name');
    this.inputApellido = page.locator('#last-name');
    this.inputZip = page.locator('#postal-code');
    this.botonContinuar = page.locator('#continue');
    this.botonTerminar = page.locator('#finish');
    this.textoConfirmacion = page.locator('[data-test="complete-header"]');
  }

  async iniciarPago() {
    await this.botonCheckout.click();
  }

  async llenarInformacion(nombre, apellido, zip) {
    await this.inputNombre.fill(nombre);
    await this.inputApellido.fill(apellido);
    await this.inputZip.fill(zip);
    await this.botonContinuar.click();
  }

  async finalizarCompra() {
    await this.botonTerminar.click();
  }

  async verificarCompraExitosa() {
    await expect(this.textoConfirmacion).toHaveText('Thank you for your order!');
  }
}

