import React from 'react';

import Video from '../../assets/videos/data.mp4';

import * as H from './styles';

function Hero () {
  return (
    <H.Hero>
      <H.HeroBg>
        <H.VideoBg autoplay loop muted src={Video} type="video/mp4" />
      </H.HeroBg>
    </H.Hero>
  )
}

export default Hero;