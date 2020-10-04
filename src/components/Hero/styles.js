import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #161616;
  padding: 0 2rem;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
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

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: absolute;
  max-width: 1200px;
  padding: 8px 24px;
  z-index: 3;
`;

export const HeroTitle = styled.h1`
  color: #f9f9f9;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroText = styled.p`
  color: #fff;
  margin-top: 1.5rem;
  font-size: 1.5rem;
  max-width: 600px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 32px;
`;
