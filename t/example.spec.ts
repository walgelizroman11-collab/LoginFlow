import { test, expect } from '@playwright/test';

test.describe('Flujo de Autenticación - Sauce Demo', () => {
  
  // Se ejecuta antes de cada prueba: nos lleva a la página web
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('Debería iniciar sesión exitosamente con credenciales válidas', async ({ page }) => {
    // 1. Rellenar el formulario
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    
    // 2. Hacer clic en el botón de ingresar
    await page.getByRole('button', { name: 'Login' }).click();

    // 3. Aseveraciones (Assertions): Verificar que entramos a la app
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('Debería mostrar un mensaje de error con credenciales inválidas', async ({ page }) => {
    // 1. Rellenar el formulario con datos erróneos
    await page.getByPlaceholder('Username').fill('usuario_falso');
    await page.getByPlaceholder('Password').fill('password_falso');
    
    // 2. Intentar iniciar sesión
    await page.getByRole('button', { name: 'Login' }).click();

    // 3. Aseveraciones: Verificar el estado de error
    const errorContainer = page.locator('[data-test="error"]');
    await expect(errorContainer).toBeVisible();
    await expect(errorContainer).toContainText('Username and password do not match any user in this service');
  });

});

