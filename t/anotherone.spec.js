import { test } from '@playwright/test';
// Traemos nuestras cajas de Legos
import { LoginPage } from '../node_modules/POM/Login';
import { InventoryPage } from '../node_modules/POM/InventoryPage';
import { CheckoutPage } from '../node_modules/POM/Checkout';

test('Mi primera prueba usando POM', async ({ page }) => {
  // 1. Sacamos los objetos de las cajas
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 2. ¡A jugar paso a paso!
  
  // -- Login --
  await loginPage.entrarALaWeb();
  await loginPage.iniciarSesion('standard_user', 'secret_sauce');

  // -- Agregar Producto --
  await inventoryPage.agregarMochilaAlCarrito();
  await inventoryPage.irAlCarrito();

  // -- Checkout e Información --
  await checkoutPage.iniciarPago();
  await checkoutPage.llenarInformacion('Walgeliz', 'Rodriduez', '12051');

  // -- Finalizar y Verificar --
  await checkoutPage.finalizarCompra();
  await checkoutPage.verificarCompraExitosa();
});

