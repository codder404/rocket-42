import React from 'react';
import { Bars } from '@styled-icons/fa-solid';

import * as N from './styles';

function navbar() {
  return (
    <N.Navbar>
      <N.Container>
        <N.NavbarLogo to='/'>Rocket</N.NavbarLogo>
        <N.MobileIcon>
          <Bars />
        </N.MobileIcon>
        <N.NavbarMenu>
          <N.NavbarItem>
            <N.NavbarLinks to='about'>About</N.NavbarLinks>
          </N.NavbarItem>
          <N.NavbarItem>
            <N.NavbarLinks to='discover'>Discover</N.NavbarLinks>
          </N.NavbarItem>
          <N.NavbarItem>
            <N.NavbarLinks to='services'>Services</N.NavbarLinks>
          </N.NavbarItem>
          <N.NavbarItem>
            <N.NavbarLinks to='signup'>Portfolio</N.NavbarLinks>
          </N.NavbarItem>
        </N.NavbarMenu>
        <N.NavbarBtn>
          <N.NavbarBtnLink to="/signin">Sign In</N.NavbarBtnLink>
        </N.NavbarBtn>
      </N.Container>
    </N.Navbar>
  );
}

export default navbar;