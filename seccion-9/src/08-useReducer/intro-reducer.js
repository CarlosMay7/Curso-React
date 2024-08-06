const initialState = [
    {
        id: 1,
        toDo: 'Recolectar la piedra del alma', 
        done: false
    }
]

const toDoReducer = (state = initialState, action = {}) => {

    if( action.type === '[TODO] add to do'){
        return [...state, action.payload]
    }

    return state;
}

let toDos = toDoReducer();
const newToDo = {
    id:2,
    toDo: 'Recolectar la piedra del poder',
    done: false
}

const addToDoAction = {
    type: '[TODO] add to do',
    payload: newToDo
}

toDos = toDoReducer(toDos, addToDoAction)