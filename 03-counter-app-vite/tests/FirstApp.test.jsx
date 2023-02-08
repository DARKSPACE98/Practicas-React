import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirstApp />', () => { 

/*     test('debe de hacer match con el snapshot', () => {

        const tittle = 'Hola, Soy Goku'
        const {container}=render( <FirstApp  tittle={ tittle } /> );
        
        expect(container).toMatchSnapshot();


     }); */

     test('debe de mostrar el titulo en un h1', () => { 

        const tittle = 'Hola, Soy Goku'
        const {container, getByText, getByTestId}=render( <FirstApp  tittle={ tittle } /> );
        expect( getByText(tittle)).toBeTruthy();
        
       /*  const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(tittle); */
        expect(getByTestId('test-tittle').innerHTML).toContain(tittle);


      
      });

      test('debe de mostrar el subtitulo enviado por props',() =>{
        const tittle = 'Hola, Soy Goku'
        const subTitle = 'Soy un subtitulo'
        const {getAllByText}=render( 
        <FirstApp  
        tittle={ tittle } 
        subTitle={ subTitle}/> );


        expect( getAllByText(subTitle).length).toBe(2);


      });
     
});