import React from 'react';

import { services } from '../../resources/services';
import * as S from './styles';

function Services () {
  return (
    <S.Container>
      <S.ServiceTitle>Sob Medida, Sob Demanda</S.ServiceTitle>
      <S.ServiceWrapper>
        {services.map(({ icon, text, title, id }) => {
          return (
            <S.ServiceCard key={id}>
              <S.ServiceIcon src={icon} />
              <S.ServiceTitle2>{title}</S.ServiceTitle2>
              <S.ServiceText>{text}</S.ServiceText>
            </S.ServiceCard>
          )
        })}
      </S.ServiceWrapper>
    </S.Container>
  )
}

export default Services;