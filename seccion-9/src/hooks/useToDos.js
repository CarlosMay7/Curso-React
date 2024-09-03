import { useEffect, useReducer } from "react"
import { toDoReducer } from "../08-useReducer/ToDoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const useToDos = () => {


    const [toDos, dispatchToDo] = useReducer(toDoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(toDos))
    }, [toDos])
    

    const handleNewToDo = (toDo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: toDo
        }
    
        dispatchToDo(action);
    }

    const handleDeleteToDo = (id) => {
        const action = {
            type: '[TODO] Remove todo',
            payload: id
        }

        dispatchToDo(action);
    }

    const handleToggleToDo = (id) => {
        const action = {
            type: '[TODO] Toggle todo',
            payload: id
        }

        dispatchToDo(action);
    }

    const toDoCount = toDos.length;

    const pendingToDos = toDos.filter(todo => todo.done != true).length;
    
  return {
        toDos,
        handleNewToDo,
        handleDeleteToDo,
        handleToggleToDo,
        toDoCount,
        pendingToDos
  }
}
