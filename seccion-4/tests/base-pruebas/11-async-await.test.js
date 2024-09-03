import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Prueba en 11-async-await', () => {
    test('getImage retorna url de la imagen', async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string');
    })
})