import React from 'react'
import FiltroBotao from './FiltroBotao'

const Status = ({setStatus, setPageNumber}) => {
    let status = ["Alive", "Dead", "Unknown"]

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Status
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex">
                    {status.map((items, index) => (
                    
                    <FiltroBotao 
                    key={index}
                    name="status"
                    index={index} 
                    items={items}
                    task={setStatus} 
                    setPageNumber={setPageNumber} 
                    />
                    
                    ))}


                </div>
            </div>
        </div>
    )
}

export default Status
