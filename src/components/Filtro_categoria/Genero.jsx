import React from 'react'
import FiltroBotao from './FiltroBotao'

const Genero = ({setGenero, setPageNumber}) => {
    let generos = ["Female", "Male", "Genderless", "Unknown"]
    
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Genêro
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex">
                    {generos.map((items, index) => (
                        <FiltroBotao
                        key={index}
                        name="gender"
                        index={index}
                        items={items}
                        task={setGenero} 
                        setPageNumber={setPageNumber} 
                        />

                    ))}
                </div>
             
            </div>
        </div>
    )
}

export default Genero
