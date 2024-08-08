import { toDoReducer } from "../../src/08-useReducer/ToDoReducer"
describe('Pruebas en todo reducer', () => {

    const initialState = [
        {
            id: 1,
            description: 'Nuevo todo',
            done: false
        }
    ]

    test('Debe regresar el estado inicial', () => {
        const newState = toDoReducer(initialState, {});
        expect(newState).toBe(initialState);
    })

    test('Debe agregar un todo', () => { 
        const action = {
            type: '[TODO] Add todo',
            payload: {
                id: 2,
                description: 'Nuevo todo 2',
                done: false
            }
        }

        const newState = toDoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

     })

     test('Debe borrar un todo', () => {
        const action = {
            type: '[TODO] Remove todo',
            payload: 1
        }

        
        const newState = toDoReducer(initialState, action);
        expect(newState.length).toBe(0);
     })

     test('Debe hacer toggle del todo', () => {
        const action = {
            type: '[TODO] Toggle todo',
            payload: 1
        }

        const newState = toDoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();
     })
})