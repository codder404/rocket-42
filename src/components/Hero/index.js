import React from 'react';

import { Button } from '../Button';
import Video from '../../assets/videos/data.mp4';

import * as H from './styles';

function Hero () {
  return (
    <H.Hero>
      <H.HeroBg>
        <H.VideoBg autoplay loop muted src={Video} type="video/mp4" />
      </H.HeroBg>
      <H.HeroContent>
        <H.HeroTitle>Design e Desenvolvimento de Software</H.HeroTitle>
        <H.HeroText>Seu Time de Tecnologia com a Cultura do Vale do Silício.</H.HeroText>
        <H.HeroBtnWrapper>
          <Button primary big fontBig dark to="/solicitar-orcamento">Receber Estimativa</Button>
        </H.HeroBtnWrapper>
      </H.HeroContent>
    </H.Hero>
  )
}

export default Hero;