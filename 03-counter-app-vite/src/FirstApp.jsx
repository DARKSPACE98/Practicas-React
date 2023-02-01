//import { Fragment } from "react";
import PropTypes from "prop-types";
//------------------------------

//LO QUE UTILIZO PARA JSON.STRINGIFY
/*   const newMessage = {
    message: 'Hola mundo',
    tittle: 'Fernando'
  } */

//------------------------------

//FUNCION QUE PUSO DE EJEMPLO EL BATO XD 
/*   const getResult = (a, b) =>{
    return a + b;
  } */

//-------------------------------
//FUNCTIOONAL COMPONENT 
  export const FirstApp = ({tittle, subTitle, name}) => {
    
   // console.log (props);

    return (
      <>
      <h1>{tittle}</h1>
      {/* <code>{ JSON.stringify (newMessage) }</code> */}
      <p>{subTitle}</p>
      <p>{name}</p>
      </> 
    );
  } 


  FirstApp.propTypes ={
    tittle: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
  }
//ctrl shift p para sort lines 
  FirstApp.defaultProps ={
    name: 'Enrique Barraza!!!',
    subTitle: 'No hay subtitulo',
    tittle:'No hay titulo',
  }