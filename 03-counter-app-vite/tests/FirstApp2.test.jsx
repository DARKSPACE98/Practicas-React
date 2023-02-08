import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirstApp />', () => { 

  const tittle ='Hola, soy goku'
  const subTitle ='Soy un subtitulo'

 test('debe de hacer match con el snapshot', () => {

 
  const { container } = render(<FirstApp tittle={tittle}/>);  
  expect(container).toMatchSnapshot();
     
});

test('debe de mostrar el mensaje "Hola, soy goku"',() =>{

  render(<FirstApp tittle={tittle}/>);
  expect(screen.getByText(tittle) ).toBeTruthy();
  //screen.debug(); para ver el Objeto



});

test('debe de mostrar el subtitulo enviado por props',() =>{

  render(<FirstApp 
    tittle={tittle}
    subTitle={subTitle}
  />);

  expect(screen.getAllByText(subTitle).length).toBe(2)


});
});