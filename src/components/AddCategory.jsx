// componente para crear input 
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        if(inputValue.trim().length <= 1) return; // para que se salga de la funcion y no se siga ejecutando

        //setCategories(categories => [...categories, inputValue]) // agregar en las categories
        onNewCategory( inputValue.trim() ); // manda la palabra anotada por la funcion onNewCategory
        setInputValue('')// limpiar el input 
    }

    return (
        <form onSubmit = { onSubmit }>
            <input
                type = "text" 
                placeholder = "Buscar gifs"
                value = { inputValue }
                onChange = { onInputChange }
            />
        </form>
    )
}
