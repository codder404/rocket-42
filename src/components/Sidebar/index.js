import React from 'react';

import * as S from './styles';

function Sidebar () {
  return (
    <S.Container>
      <S.Icon>
        <S.CloseIcon />
      </S.Icon>
      <S.SidebarWrapper>
        <S.SidebarMenu>
          <S.SidebarLink to="about">About</S.SidebarLink>
        </S.SidebarMenu>
         <S.SidebarMenu>
          <S.SidebarLink to="discover">Discover</S.SidebarLink>
        </S.SidebarMenu>
         <S.SidebarMenu>
          <S.SidebarLink to="services">Services</S.SidebarLink>
        </S.SidebarMenu>
         <S.SidebarMenu>
          <S.SidebarLink to="portfolio">Portfolio</S.SidebarLink>
        </S.SidebarMenu>
        <S.SidebarBtnWrap>
          <S.SidebarRoute big to="/signin">Sign In</S.SidebarRoute>
        </S.SidebarBtnWrap>
      </S.SidebarWrapper>
    </S.Container>
  )
}

export default Sidebar;