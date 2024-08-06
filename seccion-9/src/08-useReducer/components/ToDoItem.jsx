export const ToDoItem = ({todo, onDeleteToDo, onToggleToDo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
            onDoubleClick={() => onToggleToDo(todo.id)} 
            className={`align-self-cener ${todo.done && 'text-decoration-line-through'}`}
        >
            {todo.description}
        </span>
        <button onClick={() => onDeleteToDo(todo.id)} className="btn btn-danger">Borrar</button>
    </li>
  )
}
