import { types } from "../../../src/auth/types/types"

describe('Pruebas en types', () => { 
    test('Debe regresar los types correctos', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
 })