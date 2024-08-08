import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"

jest.mock("../../src/hooks/useFetch")
jest.mock("../../src/hooks/useCounter")

describe('Pruebas en <MultipleCustomHooks />', () => { 
    const mockInc = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockInc
    })

    beforeEach( () => {
        jest.clearAllMocks()
    })

    test('Debe devolver el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false
        })

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Cargando'))
        expect(screen.getByText('Información de Pokémon'))

        const nextbutton = screen.getByRole('button', {name: 'Siguiente'});
    })

    test('Debe mostrar un pokemon', () => {
        useFetch.mockReturnValue({
            data: {
                name: 'Pikachu', 
                sprites: {
                    front_default: 'http://sprite.jpg',
                    front_shiny: 'http://sprite.jpg',
                    back_default: 'http://sprite.jpg',
                    back_shiny: 'http://sprite.jpg'
                }  
            },
            isLoading: false,
            hasError: false
        })
        render(<MultipleCustomHooks />);
        expect(screen.getByText('#1 - Pikachu')).toBeTruthy();
    })

    test('Debe llamar la funcion de incrementar',() => {
        useFetch.mockReturnValue({
            data: {
                name: 'Pikachu', 
                sprites: {
                    front_default: 'http://sprite.jpg',
                    front_shiny: 'http://sprite.jpg',
                    back_default: 'http://sprite.jpg',
                    back_shiny: 'http://sprite.jpg'
                }  
            },
            isLoading: false,
            hasError: false
        })

        render(<MultipleCustomHooks />);
        const nextbutton = screen.getByRole('button', {name: 'Siguiente'});
        fireEvent.click(nextbutton);

        expect(mockInc).toBeCalled();
    })
 })