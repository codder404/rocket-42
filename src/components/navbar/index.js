import React, { useState } from 'react';
import { Bars, Times} from '@styled-icons/fa-solid';

import * as N from './styles';

function navbar() {
  const [click, setClick] = useState(false);

  return (
    <N.Navbar>
      <N.Container>
        <N.NavbarLogo to="/">
          Rocket
        </N.NavbarLogo>
        <N.MobileIcon>
          {click ? <Times /> : <Bars />}
        </N.MobileIcon>
        <N.NavbarMenu>
          <N.NavbarItem>
            <N.NavbarLinks to="about">About</N.NavbarLinks>
          </N.NavbarItem>
        </N.NavbarMenu>
      </N.Container>
    </N.Navbar>
  )
}

export default navbar;