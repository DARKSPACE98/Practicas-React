import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroById debe retornar un heroe por ID', () => { })

    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero)

    expect(hero).toEqual({id: 1,
        name: 'Batman',
        owner: 'DC'});

        

    test('getHeroById debe retornar undefined si no existe', () => { 

        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();   
    
    })

    test('getHeroeByOwner debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const hero = getHeroesByOwner(owner);

        expect(hero).toEqual([{"id": 1, "name": "Batman", "owner": "DC"}, {"id": 3, "name": "Superman", "owner": "DC"}, {"id": 4, "name": "Flash", "owner": "DC"}])
   
    })

    test('getHeroeByOwner debe retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner).length

        expect(hero).toBe(2);
     })


 })