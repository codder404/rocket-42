import styled from 'styled-components';

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #161616;
  padding: 0 2rem;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%; 
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: #232a34;
`;
