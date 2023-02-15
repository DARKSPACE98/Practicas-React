import { useState } from "react";
//todo use es un hook
import PropTypes from "prop-types";
import { render } from "react-dom";

//FUNCTIONAL COMPONENTE ES ESTE rfac - para ponerlo en el automatico
export const CounterApp= ({value}) => {

    const [ counter, setCounter ] = useState(value);

    const quitar = () => {
        setCounter(counter -1);
    }

    const handleAdd = () => {
       setCounter( counter +1);
      //  console.log(event)
      /* console.log('+1');
      value = 1000;
      console.log(value); */
     // setCounter((c) => c+1);
    }

    const reseteo = () => {
        setCounter(value);
    }

    return(
        
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={ handleAdd}>
            +1
        </button>
        <button onClick={quitar}>-1</button>
        <button aria-label = "btn-reset" onClick={reseteo}>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,

}