import React from "react";
import Filtros from "./Filtros";


const Caracteristicas = ({ character, filter = [] }) => {

    if (character.length === 0) return <p id="errorpersonagem">Esse personagem: "{filter}" não existe</p>

    return (

        <div className="row">
            {character.map((item, index) => (
                <div key={index} className="col mb-3">
                    <div className="card">
                        <img className="img-fluid rounded-pill" src={item.image} alt={item.name} />
                        <div className="card-body">
                            <h3 className="card-title">{item.name}</h3>
                            <hr />
                            <p className="localizacao">Localização: {item.location.name}</p>
                            <p className="genero">Gênero: {item.gender}</p>
                            <p className="especie">Espécie: {item.species}</p>
                        </div>
                        {(() => {
                            if (item.status === "Dead") {
                                return <div className="badge bg-danger fs-5">{item.status}</div>;
                            } else if (item.status === "Alive") {
                                return <div className=" badge bg-success fs-5">{item.status}</div>;
                            } else {
                                return <div className="badge bg-secondary fs-5">{item.status}</div>;
                            }
                        })()}
                    </div>
                </div>
            ))}
        </div>
    )


}

export default Caracteristicas;