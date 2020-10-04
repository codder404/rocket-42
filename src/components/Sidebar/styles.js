import styled from 'styled-components';
import { Times } from '@styled-icons/fa-solid';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Container = styled.aside`
  display: grid;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  background: #161616;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen}) => (isOpen ? '0' : '-100%')}; 
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1rem;
  outline: none;
`;

export const CloseIcon = styled(Times)`
  width: 32px;
  height: 32px;
  color: #fff;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 8px);
  text-align: center;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #6c63ff;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  background: #6c63ff;
  border-radius: 0.4rem;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '1rem 4rem' : '1rem 3rem')};
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(90%);
  }
`;