import React from 'react';

import Video from '../../video';

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