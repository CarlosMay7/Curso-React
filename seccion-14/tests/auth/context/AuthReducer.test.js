import { AuthReducer } from "../../../src/auth/context/AuthReducer"
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {
    test('Debe retornar el estado por defecto', () => {
        const state = AuthReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    })

    test('Debe de llamar al login y autenticar', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'May',
                id: '124'
            }
        }
        const state = AuthReducer({logged: false}, action);
        expect(state).toEqual({logged: true, user: action.payload});
    })

    test('Debe logout', () => {
        const state = {
            logged: true,
            user: '124',
            name: 'May'
        }

        const action = {
            type: types.logout 
        }

        const newState = AuthReducer(state, action);
        expect(newState).toEqual({logged: false});
    })
})