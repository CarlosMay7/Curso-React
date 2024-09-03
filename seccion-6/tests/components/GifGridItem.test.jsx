import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe('Probando <GifGridItem />', () => { 
    const title = 'Cristiano';
    const url = 'https://cristiano.jpg/';

    test('Debe hacer match con el snapshot', () => {
       const {container} =  render(<GifGridItem title={title} url={url} />);
       expect(container).toMatchSnapshot();
    })

    test('Debe mostrar la imagen con el url indicado', () => { 
        const {container} =  render(<GifGridItem title={title} url={url} />);
        screen.debug();
        expect(screen.getByRole('img').src).toBe(url);

        const {src} = screen.getByRole('img');
        expect(src).toBe(url);
    })

    test('Debe de mostar el título', () => { 
        const {container} =  render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

     })
 })