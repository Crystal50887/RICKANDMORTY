import React from 'react'

function FiltroBotao({name, index, items, task, setPageNumber}) {
    return (

        <div>
            
            <div className="form-check">
                <input 
                    onClick={()=>{
                        setPageNumber(1);
                        task(items);
                    }
                    }
                    className="form-check-input x"
                    type="radio" 
                    name={name}
                    id={`${name}-${index}`}
                   
                    
                />

                <label
                class="btn btn-outline-primary" for={`${name}-${index}`}>
                    {items}
                </label>
            </div>

        </div>
    )
}

export default FiltroBotao
