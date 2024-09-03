import {render, screen} from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/router/PublicRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas en <PublicRoute />', () => { 
    test('Debe de mostrar el children si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute> 
                    <h1>Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Pública')).toBeTruthy();
    })

    test('Debe navegar si está autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'May',
                id: 'ABD'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Pública</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={<h1>Marvel</h1>} />
                    </Routes>

                    <PublicRoute> 
                        <h1>Pública</h1>
                    </PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Marvel')).toBeTruthy();
    })
 })