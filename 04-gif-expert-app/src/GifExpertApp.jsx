import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch']);

  const onAddCategory = (newCategory) => {{

    if (categories.includes(newCategory)) return;
    
   // console.log(newCategory);

    //categories.push(newCategory);
    //SPREAD ES PARA CREAR COPIAS DE UN ARREGLO
    setCategories( [newCategory,...categories] )
  
  }

  }

  return (
    <>
        <h1>GifExpertApp</h1>
    <AddCategory 
    onNewCategory={ (value) => onAddCategory(value)} 
    />
      {
        categories.map(( category ) => 
        (<GifGrid 
          key={category}
          category={category}/>)
        )
      }     
    </>
  )
}
