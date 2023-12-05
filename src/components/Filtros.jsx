import React from 'react'
import Nome from './Filtro_categoria/Nome'
import Genero from './Filtro_categoria/Genero'
import Status from './Filtro_categoria/Status'



const Filtros = ({setStatus, setPageNumber, setGenero}) => {
	
	
	let clear = () => {
		setStatus("");
		setGenero("");
		setPageNumber(1);
		window.location.reload(false);
	  };



	return (
		<div classNameName='container'>
			<div className="accordion" id="accordionExample">
				<Genero setPageNumber={setPageNumber} setGenero={setGenero}/>
				<Status setPageNumber={setPageNumber} setStatus={setStatus} />
				

			</div>
			  <div id='limpar' classNameName='text-center text-primary' onClick={clear}>
				<strong>Limpar Filtro</strong>

			</div>

		</div>

	)
}

export default Filtros

