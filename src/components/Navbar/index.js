import React, { useState, useEffect } from 'react';
import { Bars } from '@styled-icons/fa-solid';
import { animateScroll as scroll } from 'react-scroll';

import { menuLinks } from '../../resources/menuLinks';
import * as N from './styles';

function navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <N.Navbar scrollNav={scrollNav}>
      <N.Container>
        <N.NavbarLogo to='/' onClick={toggleHome}>Rocket</N.NavbarLogo>
        <N.MobileIcon onClick={toggle}>
          <Bars />
        </N.MobileIcon>
        <N.NavbarMenu>
          <N.NavbarItem>
            {menuLinks.map(({ title, url }) => (
              <N.NavbarLinks 
              smooth={true} 
              duration={500}
              spay={true}
              exact='true'
              offset={-80}
              to={url}>{title}</N.NavbarLinks>
            ))}
          </N.NavbarItem>
        </N.NavbarMenu>
        <N.NavbarBtn>
          <N.NavbarBtnLink to="/solicitar-orcamento">Solicitar Orçamento</N.NavbarBtnLink>
        </N.NavbarBtn>
      </N.Container>
    </N.Navbar>
  );
}

export default navbar;