import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./apis/todosApi"

export const ToDoApp = () => {

    const [todoId, setTodoId] = useState(1)
    // const {isLoading, data: todos = []} = useGetTodosQuery();
    const {isLoading, data: todo} = useGetTodoQuery(todoId);

    const nextToDo = () => {
        setTodoId(todoId + 1)
    }

    const prevToDo = () => {
        if(todoId === 1) return
        setTodoId(todoId - 1)
    }

  return (
    <>
        <h1>Todo - RTK Query</h1>
        <hr />
        <h4>Is loading: {isLoading ? 'True' : 'False'}</h4>

        <pre>{JSON.stringify(todo)}</pre>
        
        <button onClick={nextToDo}>
            Prev ToDo
        </button>
        
        <button onClick={prevToDo}>
            Next ToDo
        </button>

        {/* <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <strong>{todo.completed ? 'DONE' : 'Pending'}</strong>{todo.title}
                </li>
            ))}
        </ul> */}
    </>
  )
}
