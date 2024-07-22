import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {

    test('Debe de hacer match con el snapshot', () => {
        const title='First App Props';
        const {container} = render(<FirstApp title={title}/>)

        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el titulo en un H1', () => {
        const title='First App Props';
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>)

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toBe(title);
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const title = 'Hola, Soy Goku';
        const subTitle = 'No hay subtitulo';
        const { getAllByText } = render( 
            <FirstApp title={title} subTitle={subTitle} /> 
        );

        expect( getAllByText(subTitle).length ).toBe(3);

    });
})