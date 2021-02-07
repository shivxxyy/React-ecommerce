import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
        
           <nav className='navClass'>
           <Link to='/' style={{textDecoration:'none'}}>Home | </Link>
           <Link to='/KamlaNagar' style={{textDecoration:'none'}}>Kamla Nagar | </Link>
           <Link to='/KarolBagh' style={{textDecoration:'none'}}>Karol Bagh | </Link>
           <Link to='/Janpath' style={{textDecoration:'none'}}>Janpath</Link>
           </nav> 
           
        </div>
    )
}

export default Navbar
