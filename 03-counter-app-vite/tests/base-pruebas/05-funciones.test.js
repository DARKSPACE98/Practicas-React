import { getUser } from "../../src/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {  


    test('getUser debe de retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    };

        const user = getUser();
        
        expect(testUser).toEqual(user);
    });


    test('getUsuarioActivo debe retornar un objeto', () => {  })

        const name = 'Fernando';
        const user = getUsuarioActivo(name);

        const testUsuarioAct = getUsuarioActivo(name); 

        expect(testUsuarioAct).toEqual(user)

});