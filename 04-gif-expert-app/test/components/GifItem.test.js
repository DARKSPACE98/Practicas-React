import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe('Pruebas en el GifItem', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe de hacer match con el snapshot', () => {
        
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    
     })
     test('Debe de mostrar la imagen con el url y el alt indicado', () => {

        render(<GifItem title={title} url={url} />)
        //screen.debug();
        //expect( screen.getByRole('img').scr)
        /* console.log( screen.getByRole('img').scr).toBe(url);
        console.log( screen.getByRole('img').alt).toBe(title); */
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);


      })

      test('debe de mostrar el titulo en el componente', () => { 

        render(<GifItem title={title} url={url} />);
        expect( screen.getByText(title)).toBeTruthy();

       })

 })