import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {
    const title = 'First App Props';
    const subtitle = 'Un sub';
    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el mensaje: First App Props', () => {
        const {container} = render(<FirstApp title={title} />)
        expect(screen.getByText(title)).toBeTruthy();

        // screen.debug();
    })

    test('Debe mostrar el titulo en un h1', () => {
        const {container} = render(<FirstApp title={title} />)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    })

    test('Debe mostrar el subtitulo enviado por props', () => {
        const {container} = render(<FirstApp title={title} subtitle={subtitle}/>)
        expect(screen.getAllByAltText(subtitle).length).toBe(3);
    })
})