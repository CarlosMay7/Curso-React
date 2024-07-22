import { useState } from "react"

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;

        onNewValue(inputValue.trim()); 
        setInputValue('');
    }   

  return (
    <form onSubmit={onSubit}>
        <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
    </form>
  )
}