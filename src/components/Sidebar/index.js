import React from 'react';

import { menuLinks } from '../../resources/menuLinks';
import * as S from './styles';

function Sidebar () {
  return (
    <S.Container>
      <S.Icon>
        <S.CloseIcon />
      </S.Icon>
      <S.SidebarWrapper>
        <S.SidebarMenu>
          {menuLinks.map(({ title, url }) => (
            <S.SidebarLink to={url}>{title}</S.SidebarLink>
          ))}
        </S.SidebarMenu>
        <S.SidebarBtnWrap>
          <S.SidebarRoute big to="/signin">Sign In</S.SidebarRoute>
        </S.SidebarBtnWrap>
      </S.SidebarWrapper>
    </S.Container>
  )
}

export default Sidebar;