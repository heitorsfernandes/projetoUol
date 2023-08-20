import React from 'react';
import logo from '../images/uol-logo-1-1.png'; 

function Navbar() {
    return(
        <div>
            <img src={logo} alt="Logo" style={{ maxWidth: '5%', maxHeight: '5%' }} />
        </div>
    )
}

export default Navbar;