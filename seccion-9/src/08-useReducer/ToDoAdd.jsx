import {useForm} from '../hooks/useForm';
export const ToDoAdd = ({onNewToDo}) => {

  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  })

  const onSubmit = e => {
    e.preventDefault();

    if(description.length <= 1) return;

    const newToDo = {
      id: new Date().getTime() + 7,
      done: false,
      description

    }

    onNewToDo(newToDo);
    onResetForm();
  }

  return (
    <form onSubmit={onSubmit}>
        <input onChange={onInputChange} name='description' className="form-control" value={description} type="text" placeholder="¿Qué hay que hacer?" />

        <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
    </form>
  )
}
