import { fireEvent, screen, render } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => { 
    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    })

    test('Debe de llamar el setUser con el botón', () => {

        const setUser = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUser).toHaveBeenCalledWith({id: '123', name: 'May'});        
    })


 })