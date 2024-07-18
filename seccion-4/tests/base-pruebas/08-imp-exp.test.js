import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeByID debe retornar un heroe por un id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    })

    test('getHeroeByID debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un arreglo de los heroes por su owner (DC)', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const arrayHeroes = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(arrayHeroes);

    })

    test('getHeroesByOwner debe retornar un arreglo de los heroes por su owner (DC)', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        const arrayHeroes = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ]

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(arrayHeroes);

    })

})