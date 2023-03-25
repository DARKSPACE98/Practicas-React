import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

const initialState = [

/*   {
    id: new Date().getTime(),
    description: 'Recolectar la piedra de sal',
    done: false,
  },
  {
    id: new Date().getTime() + 3,
    description: 'Recolectar al Pid de coppel',
    done: false,
  },  */
 ] 

 const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])
  

  const HandleNewTodo = (todo) =>{

    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action);
  
  }

  const HandleDeleteTodo = (id) =>{
    dispatch({
      type:'[TODO] Remove Todo',
      payload: id
    })
  
  }

  const HandleToggleTodo = (id) =>{
    dispatch({
      type:'[TODO] Toggle Todo',
      payload: id
    })
  }
  return (
    <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />
          <div className="row">
          <div className="col-7">
            {/* TodoList */}
            <TodoList 
                todos={todos} 
                onDeleteTodo={ HandleDeleteTodo }
                onToggleTodo={ HandleToggleTodo }
            />
            {/* <ul className="list-group ">
              {
                todos.map( todo => (
                  //TodoItem...
                <li key={todo.id} className="list-group-item d-flex justify-content-between ">
                    <span className="align-self-center">Item 1</span>
                    <button className="btn btn-danger mt-1">Borrar</button>
                </li>)
                )
              }
            </ul> */}
           {/* Fin TodoList  */}
        </div>
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            {/* TodoAdd onNewTodo( todo ) */}
            <TodoAdd onNewTodo = {HandleNewTodo}/>
           {/*  {id: new Date()... description, done: false} */}
         {/*    <form>
                <input 
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                />
                <button 
                type="submit"
                className="btn btn-outline-primary mt-1">

                  Agregar
                </button>
            </form> */}
            </div>
        </div>

    </>
  )
}
