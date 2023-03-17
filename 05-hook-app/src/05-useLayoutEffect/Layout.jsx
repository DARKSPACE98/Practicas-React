import { useCounter, useFetch } from "../hooks";
import {LoadingQuote, Pokemon} from "../03-example";


export const Layout = () => {
 
    const { counter, increment, decrement } = useCounter();

    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/' + counter);
 
    const { name, id, sprites} = data;

   // console.log(data);
     return (
    <>

    <h1>Pokemon - Pokedex Nacional</h1>

    <hr/>

        {
        sprites
        ?<img src={sprites.front_shiny} />
        :<img src={sprites} />
        }

        {  
         isLoading
           ?<LoadingQuote />
           :<Pokemon name={name} id={id}/>
        }
        

    <button className="btn btn-primary" onClick={() => increment(1)}>Pokemon Siguiente</button>
    <button className="btn btn-primary" onClick={() => decrement(1)} >Pokemon Anterior</button>
    </>
  )
        
}