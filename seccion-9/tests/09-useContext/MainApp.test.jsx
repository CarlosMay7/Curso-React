import {render, screen} from '@testing-library/react'
import {MainApp} from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <HomePage />', () => { 
    test('Debe de mostrar el homepage', () => {
        render(
        <MemoryRouter>
            <MainApp />
        </MemoryRouter>
        )

        expect(screen.getByText('HomePage')).toBeTruthy();
    })

    test('Debe de mostrar el LoginPage', () => {
        render(
        <MemoryRouter initialEntries={['/login']}>
            <MainApp />
        </MemoryRouter>
        )

        expect(screen.getByText('LoginPage')).toBeTruthy();
    })

    test('Debe de mostrar el LoginPage', () => {
        render(
        <MemoryRouter initialEntries={['/about']}>
            <MainApp />
        </MemoryRouter>
        )

        expect(screen.getByText('About Page')).toBeTruthy();
    })
 })