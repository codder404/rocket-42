import React from 'react';

import * as S from './styles';

function Services () {
  return (
    <S.Container id={servicos}>
      <S.ServiceTitle>Sob Medida, Sob Demanda</S.ServiceTitle>
      <S.ServiceWrapper>
        <S.ServiceCard>
          <S.ServiceIcon src={Icon1} />
          <S.ServiceTitle2>Projetos Ágeis</S.ServiceTitle2>
          <S.ServiceText>Realize sua ideia de produto de Software.</S.ServiceText>
        </S.ServiceCard>
        <S.ServiceCard>
          <S.ServiceIcon src={Icon2} />
          <S.ServiceTitle2>Operação DevOps</S.ServiceTitle2>
          <S.ServiceText>Lance evoluções com suporte contínuo.</S.ServiceText>
        </S.ServiceCard>
        <S.ServiceCard>
          <S.ServiceIcon src={Icon2} />
          <S.ServiceTitle2>Desenvolvedores sobre Demanda</S.ServiceTitle2>
          <S.ServiceText>Receba nosso Profissionais em sua Equípa.</S.ServiceText>
        </S.ServiceCard>
      </S.ServiceWrapper>
    </S.Container>
  )
}

export default Services;