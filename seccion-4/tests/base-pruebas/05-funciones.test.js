import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUser devuelve objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(testUser);
    })

    test('getUsuarioActivo devuelve objeto', () => {
        const name = 'May';

        const usuarioActivo = getUsuarioActivo(name);

        expect(usuarioActivo).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })
})