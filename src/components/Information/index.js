import React from 'react';

import { Button } from '../Button';
import * as F from './styles';

function InfoSection () {
  return (
    <F.Container>
      <F.InfoWrapper>
        <F.InfoRow>
          <F.Column1>
            <F.TextWrapper>
              <F.TopLine>TopLine</F.TopLine>
              <F.Heading>Heading</F.Heading>
              <F.Subtitle>Subtitle</F.Subtitle>
              <F.InfoBtnWrap>
                <Button to='home'>Button</Button>
              </F.InfoBtnWrap>
            </F.TextWrapper>
          </F.Column1>
          <F.Column2>
            <F.ImgWrap>
              <F.Img />
            </F.ImgWrap>
          </F.Column2>
        </F.InfoRow>
      </F.InfoWrapper>
    </F.Container>
  )
}

export default InfoSection;