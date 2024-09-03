import { useToDos } from "../hooks/useToDos";
import { ToDoList } from "./components/ToDoList"
import { ToDoAdd } from "./ToDoAdd"

export const ToDoApp = () => {
    
    const {toDos, toDoCount, pendingToDos, handleDeleteToDo, handleNewToDo, handleToggleToDo} = useToDos();

  return (
    <>
        <h1>ToDo: {toDoCount} <small>pendientes: {pendingToDos}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <ToDoList toDos={toDos} onDeleteToDo={handleDeleteToDo} onToggleToDo={handleToggleToDo}/>
            </div>

            <div className="row-5">
                <h4>Agregar to do</h4>
                <hr />
                <ToDoAdd onNewToDo={handleNewToDo}/>
            </div>
        </div>

    </>
  )
}
