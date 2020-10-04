import React from 'react';
import { Bars } from '@styled-icons/fa-solid';

import menuLinks from '../../resources/menuLinks';
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
            {menuLinks.map(({ title, url }) => (
              <N.NavbarLinks to={url}>{title}</N.NavbarLinks>
            ))}
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