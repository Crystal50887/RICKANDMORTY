import React from "react"
import Filtros from "../Filtros"

const Nome = ({ filter, setFilter }) => {
    
    const handleInput = ({ target }) => {
		setFilter(target.value)
	}

    
    const handleSubmit = (e) => {

        e.preventDefault()

        console.log(filter)


    }




	return (
		
		<section className='filtrar'>
			<input
				type='search'
				placeholder='Digite um nome...'
				name='buscar'
				onChange={handleInput}
				value={filter}
			/>
			
				
			<button onClick={filter} className="buscar">Buscar</button>
			
		</section>
		
	)
}

export default Nome
