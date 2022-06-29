import { useState } from "react"
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
    
    const onAddCategory = ( newCategory) => {
        if (categories.includes(newCategory)) return; // si ya incluye que no haga nada
        
        setCategories([...categories, newCategory]) // añade los que se anota en el input
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>


            {/* Input */}
            <AddCategory 
                //setCategories = { setCategories } 
                onNewCategory = {event => onAddCategory(event)} // recibe el evento y manda la funcion 
            />


            {/* Listado de Gifs */}
                {
                    categories.map((category) => (
                        <GifGrid 
                            key = { category } // recibe el parametro de gifgrid
                            category = { category } // recibe el parametro de gifgrid 
                        />
                    ))
                }

                {/* Gif Item*/}
        </>
    )
}