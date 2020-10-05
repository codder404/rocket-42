import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({scrollNav}) => (scrollNav ? '#161616' : 'transparent')};
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

export const NavbarLogo = styled(LinkR)`
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

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  > svg {
    width: 32px;
    height: 32px;
    color: #fff;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarItem = styled.li`
  height: 80px;
  display: flex;
`;

export const NavbarLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #6C63FF;
  }

  &:hover {
    color: #6C63FF;
  }
`;

export const NavbarBtn = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarBtnLink = styled(LinkR)`
  background: #6c63ff;
  border-radius: 0.4rem;
  white-space: nowrap;
  color: #fff;
  padding: 10px 22px;
  font-size: 1rem;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2 ease-in-out;
    filter: brightness(90%);
  }
`;