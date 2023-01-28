//import { Fragment } from "react";
import propTypes from "prop-types";
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

  export const FirstApp = ({tittle, subTitle }) => {
    
   // console.log (props);

    return (
      <>
      <h1>{tittle}</h1>
      {/* <code>{ JSON.stringify (newMessage) }</code> */}
      <p>{subTitle}</p>
      </> 
    );
  } 


  FirstApp.propTypes ={
    tittle: propTypes.string.isRequired,
    subTitle: propTypes.number,
  }