import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoItem } from "../../src/08-useReducer/components/ToDoItem";

describe('Pruebas en <ToDoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }

    const ondeleteToDoMock = jest.fn();
    const onToggleToDoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el todo pendiente', () => {
        render(
            <ToDoItem 
                todo={todo} 
                onToggleToDo={onToggleToDoMock} 
                onDeleteToDo={ondeleteToDoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')

    })

    test('Debe de mostrar el todo completado', () => {

        todo.done = true;

        render(
            <ToDoItem 
                todo={todo} 
                onToggleToDo={onToggleToDoMock} 
                onDeleteToDo={ondeleteToDoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through')

    })

    test('El span debe llamar al toggle', () => {
        render(
            <ToDoItem 
                todo={todo} 
                onToggleToDo={onToggleToDoMock} 
                onDeleteToDo={ondeleteToDoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.doubleClick(spanElement);
        expect(onToggleToDoMock).toHaveBeenCalledWith(todo.id);
    })

    test('El span debe llamar al delete', () => {
        render(
            <ToDoItem 
                todo={todo} 
                onToggleToDo={onToggleToDoMock} 
                onDeleteToDo={ondeleteToDoMock}
            />
        );

        const button = screen.getByLabelText('button');
        fireEvent.click(button);
        expect(ondeleteToDoMock).toHaveBeenCalledWith(todo.id);
    })
})