import React from 'react';

import { Button } from '../Button';
import * as F from './styles';

function InfoSection ({
  lightBg, 
  id, 
  imgStart, 
  topLine, 
  lightText, 
  headLine, 
  darkText, 
  buttonLabel, 
  description, 
  img, 
  alt,
  primary,
  dark,
  dark2
}) {
  return (
    <F.Container lightBg={lightBg} id={id}>
      <F.InfoWrapper>
        <F.InfoRow imgStart={imgStart}>
          <F.Column1>
            <F.TextWrapper>
              <F.TopLine>{topLine}</F.TopLine>
              <F.Heading lightText={lightText}>{headLine}</F.Heading>
              <F.Subtitle darkText={darkText}>{description}</F.Subtitle>
              <F.InfoBtnWrap>
                <Button to='home' 
                  primary={primary ? 1 : 0} 
                  big 
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0} 
                  fontBig
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  >{buttonLabel}</Button>
              </F.InfoBtnWrap>
            </F.TextWrapper>
          </F.Column1>
          <F.Column2>
            <F.ImgWrap>
              <F.Img src={img} alt={alt} />
            </F.ImgWrap>
          </F.Column2>
        </F.InfoRow>
      </F.InfoWrapper>
    </F.Container>
  )
}

export default InfoSection;