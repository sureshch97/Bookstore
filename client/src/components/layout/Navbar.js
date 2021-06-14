import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'


 const Navbar = () => {
    return (
     <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                 
            <div className="collapse navbar-collapse ">

                <div className="navbar-nav text-primary">

                       <Link className="navbar-brand blue-text text-light"  to="/">Book Store</Link>
                
                       <Link to="/" className="nav-link text-light text-darken-2">Home</Link>
                        
                        
                        <Link to="/about" className="nav-link text-light text-darken-2">About</Link>
                    
                    
                        <Link to="/contact" className="nav-link text-light text-darken-2">Contact-us</Link>
               
               </div>
            
           </div>
               
            
        </nav>
           
     </Fragment>
             
    
     
       
       
    )
}
export default Navbar