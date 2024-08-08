import { render, screen } from "@testing-library/react"
import { useToDos } from "../../src/hooks/useToDos"
import { ToDoApp } from '../../src/08-useReducer/ToDoApp';

jest.mock("../../src/hooks/useToDos");

describe('Pruebas en <ToDoApp />', () => { 
    useToDos.mockReturnValue({
        toDos: [{
            id: 1,
            description: 'Todo 1',
            done: false
        },
        {
            id: 2,
            description: 'Todo 2',
            done: true
        },
        ],
        toDoCount: 2, 
        pendingToDos: 1, 
        handleDeleteToDo: jest.fn(), 
        handleNewToDo: jest.fn(), 
        handleToggleToDo: jest.fn()

    })

    test('Debe de mostrar el todo correctamente', () => {
        render(<ToDoApp />)
        expect(screen.getByText('Todo 1')).toBeTruthy();
        expect(screen.getByText('Todo 2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    })
 })