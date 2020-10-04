import styled from 'styled-components';
import { Link as LinkN } from 'react-router-dom';
//import { Link as LinkS } from 'react-scroll';

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #161616;
  height: 80px;
  margin-top: -80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    transition: 0.8s ease-in-out;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  height: 80px;
  z-index: 1;
  padding: 0 1.5rem;
  max-width: 1100px;
`;

export const NavbarLogo = styled(LinkN)`
  display: flex;
  align-items: center;
  justify-self: flex-start;

  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1.5rem;
  text-decoration: none;
  cursor: pointer;
`;