import React from "react";


const Navbar = ({brand,img}) => {

    return(
        <nav className='navbar'>
        <div className='container'>
          <a className="navbar-brand" href="/"><img className='container' id="logo" src={img} alt="" /></a>
        </div>
      </nav>
    )

} 


export default Navbar