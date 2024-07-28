import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => { 
    test('Debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewValue={() => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Cristiano Ronaldo'}});
        expect(input.value).toBe('Cristiano Ronaldo');  
    })

    test('Debe llamar onNewValue si el input tiene un valor', () => {
        const inputValue = 'Cristiano Ronaldo';

        const onNewValue = jest.fn()

        render(<AddCategory onNewValue={onNewValue}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(onNewValue).toHaveBeenCalled();
        expect(onNewValue).toHaveBeenCalledTimes(1);
        expect(onNewValue).toHaveBeenCalledWith(inputValue);
    })

    test('No debe llamar onNewValue si el input no tiene un valor', () => {
        const onNweValue = jest.fn()

        render(<AddCategory onNewValue={onNweValue}/>);
        const form = screen.getByRole('form');

        fireEvent.submit(form);
        expect(onNweValue).not.toHaveBeenCalled();
    })
 })