export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.botonMochila = page.locator('#add-to-cart-sauce-labs-backpack');
    this.iconoCarrito = page.locator('#shopping_cart_container');
  }

  async agregarMochilaAlCarrito() {
    await this.botonMochila.click();
  }

  async irAlCarrito() {
    await this.iconoCarrito.click();
  }
}