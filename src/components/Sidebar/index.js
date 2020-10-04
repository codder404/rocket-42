import React from 'react';

import { menuLinks } from '../../resources/menuLinks';
import * as S from './styles';

function Sidebar ({ isOpen, toggle }) {
  return (
    <S.Container isOpen={isOpen} onClick={toggle}>
      <S.Icon onClick={toggle}>
        <S.CloseIcon />
      </S.Icon>
      <S.SidebarWrapper>
        <S.SidebarMenu>
          {menuLinks.map(({ title, url }) => (
            <S.SidebarLink to={url} onClick={toggle}>{title}</S.SidebarLink>
          ))}
        </S.SidebarMenu>
        <S.SidebarBtnWrap>
          <S.SidebarRoute big to="/solicitar-orcamento">Solicitar Orçamento</S.SidebarRoute>
        </S.SidebarBtnWrap>
      </S.SidebarWrapper>
    </S.Container>
  )
}

export default Sidebar;