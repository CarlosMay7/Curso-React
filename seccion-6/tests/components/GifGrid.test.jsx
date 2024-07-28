import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid"
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GidGrid />', () => { 
    const categpry = 'Cristiano Ronaldo';

    test('Debe mostrar el loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render(<GifGrid category={categpry} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(categpry));
    })

    test('Debe mostrar items cuando se cargan las imagenes', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'Cris',
                url: 'https://cris.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={categpry} />);
        expect(screen.getAllByRole('img').length).toBe(1);
    })
 })