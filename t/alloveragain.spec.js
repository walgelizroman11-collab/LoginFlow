//import { expect, test } from "@playwright/test";

const {test, expect} = require ('@playwright/test')
const { RaulPOM } = require('./POM/RaulPOM');

test('First test ', async function({page}) {

    const email = `julia${Date.now()}@gmail.com`;
    const passd = 'Julian123456'
    const raulPOM = new RaulPOM(page);
    
    await raulPOM.abrirRegistro();
    await raulPOM.registrar('Julian', 'Gomez', email, '8092345857', passd);

    await expect(page.getByText('Account Created Successfully')).toBeVisible();

    await raulPOM.iniciarSesion(email, passd);

    await raulPOM.agregarPrimerProductoAlCarrito();
    await raulPOM.completarEnvio();
    await raulPOM.realizarPedido();

});
