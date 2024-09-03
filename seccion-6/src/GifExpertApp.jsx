import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cristiano Ronaldo']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewValue={onAddCategory} />

        {categories.map(category => {
            return (
                <GifGrid key={category} category={category}/>
            )
        })}
    </>
  )
}

export default GifExpertApp