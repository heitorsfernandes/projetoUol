import React from 'react';
import logo from '../images/uol-logo-1-1.png';
import { StyledNavbar, StyledLogo } from '../styles/NavbarStyles';

function Navbar() {

    return(
      <StyledNavbar>
        <StyledLogo src={logo} alt="Logo" />
      </StyledNavbar>
    )
}

export default Navbar;