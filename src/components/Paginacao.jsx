import React from "react";

const Paginacao = ({ prev, next, antes, depois }) => {

    const Prevresult = () => {

        antes()

    }
    
    const Nextresult = () => {

        depois()

    }

    return (
        <nav className="my-5">
            <ul className="pagination">
                {
                    prev ? (
                        <li className="page-item">
                            <button className="page-link" onClick={Prevresult}>Antes</button>
                        </li>) : null
                }

                {
                    next ? (
                        <li className="page-item">
                            <button className="page-link" onClick={Nextresult }>Depois</button>
                        </li>) : null
                }

            </ul>
        </nav>
    )



}

export default Paginacao